<template>
    <div>
        <el-button @click="add()" style="text-align: center;display: flex;margin-left: 50px;"
            type="primary">新增</el-button>
        <el-table v-show="tableData.length>0" :data="currentPageData"
            :default-sort="{ prop: 'updateTime', order: 'descending' }" style="width: 100%;height: 100%;">
            <el-table-column prop="updateTime" label="UpdateTime" sortable width="250">
                <template slot-scope="scope">
                    {{ formatDate(scope.row.updateTime) }}
                </template>
            </el-table-column>
            <el-table-column prop="title" label="Title" width="200" />
            <el-table-column prop="author" label="Author" width="180" />
            <el-table-column prop="content" label="Content" width="200" :formatter="formatter"
                :show-overflow-tooltip="true" />
            <!-- <template #aa="{ row }">
                <el-collapse accordion>
                    <el-collapse-item
                        :title="row.content.length > 5 ? `${row.content.slice(0, 5)}...` : row.content">
                        {{ row.content }}
                    </el-collapse-item>
                </el-collapse>
            </template> -->
            <el-table-column label="操作" width="180">
                <template #default="{ row }">
                    <el-button @click="handleEdit(row)">
                        <el-icon color="blue">
                            <ChatDotSquare />
                        </el-icon>
                    </el-button>
                    <el-button @click="handleDelete(row)">
                        <el-icon color="red">
                            <Failed />
                        </el-icon>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination :page-size="pageSize" background :pager-count="pagerCountValue" layout="prev, pager, next"
            :total="total" @current-change="handlePageChange" />
        <!-- 编辑/新增模态框 -->
        <el-dialog class="dialog" title="编辑公告" v-show="dialogVisible" :visible.sync="dialogVisible" width="400"
            @close="handleDialogClose">
            <el-form :model="formData" label-width="80px">
                <el-form-item label="更新时间">
                    <el-input v-model="formData.updateTime" disabled></el-input>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="formData.author"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="textarea" v-model="formData.content"></el-input>
                </el-form-item>
            </el-form>

            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleSave">保存</el-button>

        </el-dialog>

    </div>
</template>

<script setup lang="ts">
// import  { TableColumnCtx } from 'element-plus'
import { reactive,ref,computed } from 'vue';
import { UserCommonService } from '../services/UserService.ts'
import { AdminCommonService } from '../services/AdminService.ts'
import { Failed, ChatDotSquare } from '@element-plus/icons-vue'

let dialogVisible = ref(false);
let currentPage = ref(1);
let pagerCountValue = ref(8);
let pageSize = ref(8)
let total = ref(0)
const add = async () => {
    const res: any = await AdminCommonService.addNews(form);
    fetchData()
}
let modal = ref(true)
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
const formatter = (row, column) => {
    const maxLength = 10; // 设置截断长度
    if (row.content.length > maxLength) {
        return `${row.content.slice(0, maxLength)}...`;
    }
    return row.content
}
const currentPageData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return tableData.slice(start, end);
});
const tableData:any = reactive([]);
const formData = reactive({
    id : '',
    updateTime: '',
    title: '',
    content: '',
    author: ''
});
const form = reactive({
    updateTime: '',
    title: '',
    content: '',
    author: ''
});
const fetchData = async () => {
    try {
        const res:any = await UserCommonService.getNews();
        tableData.length = 0;
        res.forEach((item:any) => {
            tableData.push(item);
        });
        total.value = res.length
        console.log(total.value);
        pagerCountValue.value = Math.ceil(total.value / pageSize.value);
        console.log(pagerCountValue.value);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};
const handlePageChange = (page) => {
    currentPage.value = page;
};
const handleEdit = (row) => {
    console.log("row:" + row.id);
    formData.id = row.id;
    formData.updateTime = row.updateTime;
    formData.title = row.title;
    formData.content = row.content;
    formData.author = row.author;
    dialogVisible.value = true;
    console.log(dialogVisible.value);
    
};

const handleDelete = async (row) => {
    try {
        console.log(row.id);       
        const deleteId = await AdminCommonService.deleteNews(row.id);
        console.log(deleteId);   
        if (deleteId) {
            console.log("删除id存在",deleteId);           
            fetchData();
       }
    } catch (error) {
        console.error('Error deleting news:', error);
    }
};

const handleSave = async () => {
    try {
        if (formData.id) {
            await AdminCommonService.updateNews(formData);
        } 
        dialogVisible.value = false;
        fetchData();
    } catch (error) {
        console.error('Error saving news:', error);
    }
    fetchData()
};

const handleDialogClose = () => {
    formData.id = '';
    formData.updateTime = '';
    formData.title = '';
    formData.content = '';
    formData.author = '';
};

fetchData();
</script>

<style scoped>
.custom-table {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-table.el-table__body tr:hover {
    background-color: #eef2f6;
}

.custom-pagination {
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
}

.custom-pagination.el-pagination__button,
.custom-pagination.el-pagination__pager {
    transition: background - color 0.3s ease;
}

.custom-pagination.el -pagination__button:hover,
.custom-pagination.el- pagination__pager:hover {
    background-color: #ddd;
}
.dialog{
    position: fixed;
    left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
}
</style>
<template>
    <div>
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }"
            style="width: 100%;height: 100%;">
            <el-table-column prop="updateTime" label="UpdateTime" sortable width="280" />
            <el-table-column prop="title" label="Title" width="280" />
            <el-table-column prop="author" label="Author" width="280" />
            <el-table-column prop="content" label="Content" :formatter="formatter" />

        </el-table>
        <el-pagination :page-size="15" background :pager-count="10" layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup>
import type { TableColumnCtx } from 'element-plus'
import { reactive } from 'vue';
import {UserCommonService} from '../services/UserService.ts'
interface News {
    updateTime: string
    title: string
    content: string
    author: string
}

const formatter = (row: News, column: TableColumnCtx<News>) => {
    return row.content
}
const tableData = reactive < News[] > ([]);
const fetchData = async () => {
    try {
        const res = await UserCommonService.getNews() as News[];
        res.forEach((item) => {
            tableData.push(item);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};
fetchData();
</script>


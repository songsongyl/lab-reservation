<template>
    <div>
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }"
            style="width: 100%;height: 100%;">
            <el-table-column prop="date" label="Date" sortable width="280" />
            <el-table-column prop="title" label="Title" width="280" />
            <el-table-column prop="author" label="Author" width="280" />
            <el-table-column prop="description" label="Description" :formatter="formatter" />

        </el-table>
            <el-pagination :page-size="15" background :pager-count="10" layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'

interface User {
    date: string
    title: string
    description: string
    author: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
    return row.description
}

const tableData: User[] = [
    {
        date: '2016-05-03',
        title: 'Tom',
        description: 'No. 189, Grove St, Los Angeles',
        author:'da'
    },
    {
        date: '2016-05-02',
        title: 'Tom',
        description: 'No. 189, Grove St, Los Angeles',
        author: 'da'
    },
    {
        date: '2016-05-04',
        title: 'Tom',
        description: 'No. 189, Grove St, Los Angeles',
        author: 'da'
    },
    {
        date: '2016-05-01',
        title: 'Tom',
        description: 'No. 189, Grove St, Los Angeles',
        author: 'da'
    },
]
</script>


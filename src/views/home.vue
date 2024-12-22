<template>
    <div class="contain">
        <div class="left-nav">
            <el-row style="display: flex;" class="tac">
                <el-col :span="30">
                    <h5 class="mb-2" style="margin-bottom: 12px;margin-top:10px; color: black;">实验室预约管理系统</h5>
                    <el-menu active-text-color="#ffd04b" background-color="#7eaa92" class="el-menu-vertical-demo"
                        :default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Edit />
                                </el-icon>
                                <span>预约管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link :to="{ path: '/appointment' }"> <el-menu-item
                                        index="1-1">当前预约</el-menu-item></router-link>
                                <router-link :to="{ path: '/appointmentApply' }"> <el-menu-item
                                        index="1-2">申请预约</el-menu-item></router-link>
                            </el-menu-item-group>
                            <!-- 
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu> -->
                        </el-sub-menu>
                        <router-link :to="{ path: '/timetable' }">
                            <el-menu-item index="2">
                                <el-icon><icon-menu /></el-icon>
                        <span>课程管理</span>
                        </el-menu-item>
                        </router-link>
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <Platform />
                                </el-icon>
                                <span>实验室管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link :to="{ path: '/messageManage/equipmentManage' }"><el-menu-item
                                        index="1-1">设备管理</el-menu-item></router-link>
                                <router-link :to="{ path: '/messageManage/labManage' }"><el-menu-item
                                        index="1-2">实验室信息</el-menu-item></router-link>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <router-link :to="{ path: '/noticeManage' }"><el-menu-item index="4">
                                <el-icon>
                                    <ChatLineRound />
                                </el-icon>
                                <span>公告</span>
                            </el-menu-item>
                        </router-link>
                        <router-link :to="{ path: '/graph' }"> <el-menu-item index="5">
                                <el-icon>
                                    <TrendCharts />
                                </el-icon>
                                <span>统计</span>
                            </el-menu-item>
                        </router-link>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="right">
            <RouterView>

            </RouterView>
        </div>

    </div>
</template>

<script setup lang="ts">

import { Platform, Menu as IconMenu, Edit, TrendCharts, ChatLineRound } from '@element-plus/icons-vue'


const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.left-nav {
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #7eaa92;
    width: 164px;
    height: 100vh;
}
</style>

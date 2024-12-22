<template>
    <div class="contain">
        <div class="left-nav">
            <el-row style="display: flex;" class="tac">
                <el-col :span="30">
                    <el-menu active-text-color="#ffd04b" background-color="#7eaa92" class="el-menu-vertical-demo"
                        default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
                        <el-sub-menu style="margin-top: 40px;" index="1">
                            <template #title>
                                <el-icon>
                                    <Edit />
                                </el-icon>
                                <span>预约管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link :to="{ path: '/home/appointment' }"> <el-menu-item
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
                        <router-link :to="{ path: '/home/graph' }"> <el-menu-item index="5">
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
        <div class="head">
            <h5 class="head-left"
                style="position: absolute; left: 10px; margin-bottom: 28px; color: black; z-index: 222;">
                实验室预约管理系统</h5>

        </div>
        <div class="right">
            <div class="head-right">
                <div class="head-right-title">
                    <el-avatar class="avatar"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <span>个人中心</span>
                    <ul>
                        <router-link :to="{ path: '/updatePassword' }">
                            <li>修改密码</li>
                        </router-link>
                        <router-link :to="{ path: '/logout' }">
                            <li>退出登录</li>
                        </router-link>
                    </ul>
                </div>
            </div>
            <RouterView />


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
.contain {
    display: flex;
    height: 100vh;
}

.left-nav {
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: #7eaa92;
    width: 164px;
    height: 100vh;
}


.right {
    flex-grow: 1;
    padding: 20px;
    margin-left: 150px;
}

.head {
    width: 1350px;
}

.head-right {
    position: relative;
   
    cursor: pointer;
    width: 800px;
    height: 50px;
    top: -35px;
    margin-left: 350px;
}

.head-right-title {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.head-right .avatar {
    margin-right: 5px;
    /* display: inline-block; */
}

.head-right ul {
    display: none;
    list-style: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    /* background-color: antiquewhite; */
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); */
    padding: 10px 0;
    width: 80%;

}

.head-right ul li {
    margin: 8px;
    padding: 5px 10px;
    width: 100%;
    text-align: center;
}

.head-right-title:hover ul {
    display: flex;
}

.head-right span:hover,
.head-right ul li:hover {
    color: rgb(240, 172, 83);
}
</style>

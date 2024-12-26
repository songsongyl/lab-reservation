<template>
    <div>
   
        <div id="bar-chart"></div>
        <div id="pie-chart"></div>
        <div id="bar-chart-academy"></div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from "echarts"; // 引入 ECharts
import { reactive,watch } from "vue";
import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { response } from "express";
// import { r as Cl } from "../assets/js/request-BE1UvMV5.js";
/* empty css             */
// import { r as h2, a0 as v2, A as Dl, c as c2, a as Rt, t as Ml, o as p2 } from "../assets/js/index-HHlgu3jn.js";
export default {
    name: "DataAnalysis",
    setup() {
        // 响应式数据
        const leisureEquipment = ref(2537);
        const useEquipment = ref(146);
        const repairLab = ref(352);
        const labNumber = ref(128);
        const leisureLab = ref(5);
        const useLab = ref(2);
        const teacherNumber = ref(234);
        const user = ref(JSON.parse(localStorage.getItem("xm-user") || "{}"));
        const form = reactive({
            week: '',
            dayOfWeek: '',
            section: ''
        })
        // 配置图表的参数
        const barChartOptions = ref({
            title: {
                text: "当前各实验室不同状态设备数量柱状图",
                subtext: "",
                left: "center",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {
                data: ["空闲中", "使用中"],
                left: "left",
            },
            toolbox: {
                show: true,
                orient: "vertical",
                left: "right",
                top: "center",
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ["line", "bar", "stack"] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            xAxis: [
                {
                    type: "category",
                    axisTick: { show: false },
                    data: ["901", "902", "903", "904", "905", "906"], // 实际数据需要动态加载
                    name: "实验室名称",
                    // "font-weight":"bold"
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "设备数量(个)",
                },
            ],
            series: [
                {
                    name: "空闲中",
                    type: "bar",
                    label: "空闲中",
                    emphasis: { focus: "series" },
                    data: [400, 200, 250, 150, 56, 100], // 这些数据应该是动态的
                },
                {
                    name: "使用中",
                    type: "bar",
                    label: "使用中",
                    emphasis: { focus: "series" },
                    data: [60, 182, 184, 178, 190, 234],
                },

            ],
        });

        const pieChartOptions = ref({
            title: {
                text: "当前各实验室不同状态分布饼状图",
                left: "center",
            },
            tooltip: {
                trigger: "item",
            },
            legend: {
                orient: "vertical",
                left: "left",
            },
            series: [
                {
                    type: "pie",
                    radius: "50%",
                    label: {
                        show: true,
                        position: "inner",
                        formatter: "{d}%",
                    },
                    data: [
                        {
                            value: 1048,
                            name: "空闲中",
                        },
                        {
                            value: 735,
                            name: "使用中",
                        },
                        {
                            value: 580,
                            name: "维修中",
                        },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        });

        const academyBarChartOptions = ref({
            title: {
                text: "当前周各实验室占用情况柱状图",
                subtext: "",
                left: "center",
            },
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                name: "星期",
            },
            yAxis: {
                type: "value",
                name: "实验室数量(个)",
            },
            tooltip: {
                trigger: "item",
            },
            series: [
                {
                    data: [3, 4, 2, 5, 6, 2, 1],
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: function () {
                                return (
                                    "#" +
                                    Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)
                                );
                            },
                        },
                    },
                },
            ],
        });

        // const checkTokenExpiration = () => {

        //     const token = localStorage.getItem('authToken');
        //     if (token) {
        //         try {
        //             const decoded = jwtDecode(token);
        //             const currentTime = Date.now() / 1000;
        //             if (decoded.exp < currentTime) {
        //                 alert("Token 已过期，请重新登录");
        //                 window.location.href = '/';
        //             }
        //         } catch (error) {
        //             console.error("无效的Token:", error);
        //             alert("Token 无效，请重新登录");
        //             window.location.href = '/';
        //         }
        //     } else {
        //         alert("未找到 Token,请重新登录");
        //         window.location.href = '/';
        //     }
        // };
        // 获取数据
        
        const second = async () => {
         
            try {
                // const jsonString = JSON.stringify(form)
                // console.log(jsonString)
                console.log("11");
              
                const request = await axios.get("/api/admin/graph", {
                    headers: {
                        // 'Authorization': `Bearer ${token}`
                    }
                })
                console.log("请求", request.data);
                console.log("22");
                const data = request.data;  // 假设是返回的数据结构
                if (data && data.data) {
                    const { repairLab, useLab, leisureLab } = data.data;

                    if (repairLab !== undefined) {
                        repairLab.value = repairLab || 0;
                        console.log(repairLab);
                    } else {
                        console.error("repairLab 数据不存在");
                    }

                    if (useLab !== undefined) {
                        useLab.value = useLab || 0;
                    } else {
                        console.error("useLab 数据不存在");
                    }

                    if (leisureLab !== undefined) {
                        leisureLab.value = leisureLab || 0;
                    } else {
                        console.error("leisureLab 数据不存在");
                    }

                } else {
                    console.error("返回的数据格式不正确，缺少 data 字段");
                }
               // initCharts();  // 在数据加载后初始化图表
                console.log("22");
            } catch (error) {
                if (error.response) {
                    console.error("响应错误:", error.response.data);
                } else if (error.request) {
                    console.error("没有收到响应:", error.request);
                } else {
                    console.error("请求错误:", error.message);
                }
            }
        };
            // 初始化 ECharts 图表
            const initCharts = () => {
                const barChart = echarts.init(document.getElementById("bar-chart"));
                barChart.setOption(barChartOptions.value);

                const pieChart = echarts.init(document.getElementById("pie-chart"));
                pieChart.setOption(pieChartOptions.value);

                const academyBarChart = echarts.init(
                    document.getElementById("bar-chart-academy")
                );
                academyBarChart.setOption(academyBarChartOptions.value);
            };

            // 生命周期钩子
            onMounted(() => {
                // fetchData();
                second();
                initCharts();
            });
        watch([repairLab, leisureLab, useLab], () => {
            barChartOptions.value.series[0].data = [repairLab.value, leisureLab.value, useLab.value];
            barChartOptions.value.series[1].data = [repairLab.value, leisureLab.value, useLab.value];
            pieChartOptions.value.series[0].data[0].value = repairLab.value;
            pieChartOptions.value.series[0].data[1].value = leisureLab.value;
            pieChartOptions.value.series[0].data[2].value = useLab.value;
        }, { immediate: true });

            return {
                leisureEquipment,
                useEquipment,
                repairLab,
                leisureLab,
                useLab,
                barChartOptions,
                pieChartOptions,
                academyBarChartOptions,
            };
        }
    }

</script>

<style scoped>
/* 样式 */
#bar-chart,
#pie-chart,
#bar-chart-academy {
    width: 1200px;
    height: 400px;
}
</style>

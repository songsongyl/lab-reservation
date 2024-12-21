/* empty css             */
/* empty css               */
/* empty css                */
/* empty css                  */
/* empty css                     */
/* empty css                   */
/* empty css              */
/* empty css               */
/* empty css                  */
/* empty css                     */
/* empty css                */
/* empty css               */
import { r as g } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as M, c as w, a as y, b as t, w as a, f as d, A as f, G as S, M as O, y as T, H as P, I as $, i as F, o as i, d as s, e as p, L as G, J as H, R as L, U as j, V as K, C as Q, z as W } from "./index-HHlgu3jn.js";
const X = {
    class: "card",
    style: {
        "margin-bottom": "5px"
    }
}
    , Y = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , Z = {
        key: 0,
        class: "card"
    }
    , ee = {
        class: "dialog-footer"
    }
    , b = "/equipmentRepair"
    , be = {
        __name: "EquipmentRepair",
        setup(te) {
            const e = M({
                user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                tableData: [],
                total: 0,
                pageNum: 1,
                pageSize: 10,
                formVisible: !1,
                form: {},
                ids: [],
                name: null,
                status: null
            })
                , h = n => {
                    e.ids = n.map(o => o.id)
                }
                , V = () => {
                    if (!e.ids.length) {
                        f.warning("请选择数据");
                        return
                    }
                    S.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(n => {
                        g.delete(b + "/delete/batch", {
                            data: e.ids
                        }).then(o => {
                            o.code === "200" ? (f.success("操作成功"),
                                u()) : f.error(o.msg)
                        }
                        )
                    }
                    ).catch(n => console.log(n))
                }
                , x = n => {
                    S.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(o => {
                        g.delete(b + "/delete/" + n).then(m => {
                            m.code === "200" ? (f.success("删除成功"),
                                u()) : f.error(m.msg)
                        }
                        )
                    }
                    ).catch(o => {
                        console.error(o)
                    }
                    )
                }
                , u = () => {
                    g.get(b + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            name: e.name,
                            adminId: e.user.id,
                            status: e.status
                        }
                    }).then(n => {
                        var o, m;
                        e.tableData = ((o = n.data) == null ? void 0 : o.list) || [],
                            e.total = (m = n.data) == null ? void 0 : m.total
                    }
                    )
                }
                , C = n => {
                    e.form = JSON.parse(JSON.stringify(n)),
                        e.form.adminStatus = "通过",
                        e.formVisible = !0
                }
                , E = () => {
                    g.post(b + "/add", e.form).then(n => {
                        n.code === "200" ? (e.formVisible = !1,
                            u()) : f.error(n.msg)
                    }
                    )
                }
                , N = () => {
                    g.put(b + "/update", e.form).then(n => {
                        n.code === "200" ? (e.formVisible = !1,
                            u()) : f.error(n.msg)
                    }
                    )
                }
                , v = () => {
                    e.form.id ? N() : E()
                }
                , B = () => {
                    e.name = null,
                        e.status = null,
                        u()
                }
                ;
            return u(),
                (n, o) => {
                    const m = G
                        , z = O
                        , c = T
                        , r = H
                        , _ = L
                        , A = P
                        , R = $
                        , k = j
                        , D = K
                        , I = Q
                        , U = W
                        , q = F;
                    return i(),
                        w("div", null, [y("div", X, [t(z, {
                            modelValue: e.status,
                            "onUpdate:modelValue": o[0] || (o[0] = l => e.status = l),
                            style: {
                                width: "240px"
                            },
                            placeholder: "请选择申请状态"
                        }, {
                            default: a(() => [t(m, {
                                label: "待审核",
                                value: "待审核"
                            }), t(m, {
                                label: "已通过",
                                value: "已通过"
                            }), t(m, {
                                label: "已拒绝",
                                value: "已拒绝"
                            })]),
                            _: 1
                        }, 8, ["modelValue"]), t(c, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: u
                        }, {
                            default: a(() => [s("查询")]),
                            _: 1
                        }), t(c, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: B
                        }, {
                            default: a(() => [s("重置")]),
                            _: 1
                        })]), y("div", Y, [t(c, {
                            type: "danger",
                            plain: "",
                            onClick: V
                        }, {
                            default: a(() => [s("批量删除")]),
                            _: 1
                        })]), y("div", {
                            class: "card",
                            style: {
                                "margin-bottom": "5px"
                            },
                            onSelectionChange: h
                        }, [t(A, {
                            data: e.tableData,
                            strip: ""
                        }, {
                            default: a(() => [t(r, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), t(r, {
                                prop: "equipmentName",
                                label: "设备名称"
                            }), t(r, {
                                prop: "code",
                                label: "设备编号"
                            }), t(r, {
                                prop: "teacherName",
                                label: "教师名称"
                            }), t(r, {
                                prop: "repairReason",
                                label: "申请理由"
                            }), t(r, {
                                prop: "labAdminName",
                                label: "实验室管理员"
                            }), t(r, {
                                prop: "labAdminStatus",
                                label: "实验室审批"
                            }, {
                                default: a(l => [l.row.labAdminStatus === "通过" ? (i(),
                                    p(_, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: a(() => [s("通过")]),
                                        _: 1
                                    })) : d("", !0), l.row.labAdminStatus === "拒绝" ? (i(),
                                        p(_, {
                                            key: 1,
                                            type: "danger"
                                        }, {
                                            default: a(() => [s("拒绝")]),
                                            _: 1
                                        })) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                prop: "adminName",
                                label: "管理员"
                            }), t(r, {
                                prop: "adminStatus",
                                label: "管理员审批"
                            }, {
                                default: a(l => [l.row.adminStatus === "通过" ? (i(),
                                    p(_, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: a(() => [s("通过")]),
                                        _: 1
                                    })) : d("", !0), l.row.adminStatus === "拒绝" ? (i(),
                                        p(_, {
                                            key: 1,
                                            type: "danger"
                                        }, {
                                            default: a(() => [s("拒绝")]),
                                            _: 1
                                        })) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                prop: "status",
                                label: "申请状态"
                            }, {
                                default: a(l => [l.row.status === "通过" ? (i(),
                                    p(_, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: a(() => [s("通过")]),
                                        _: 1
                                    })) : d("", !0), l.row.status === "待审核" ? (i(),
                                        p(_, {
                                            key: 1,
                                            type: "warning"
                                        }, {
                                            default: a(() => [s("待审核")]),
                                            _: 1
                                        })) : d("", !0), l.row.status === "拒绝" ? (i(),
                                            p(_, {
                                                key: 2,
                                                type: "danger"
                                            }, {
                                                default: a(() => [s("拒绝")]),
                                                _: 1
                                            })) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                label: "操作",
                                align: "center",
                                width: "200",
                                fixed: "right"
                            }, {
                                default: a(l => [l.row.adminStatus === null ? (i(),
                                    p(c, {
                                        key: 0,
                                        type: "primary",
                                        plain: "",
                                        onClick: J => C(l.row)
                                    }, {
                                        default: a(() => [s("去审批")]),
                                        _: 2
                                    }, 1032, ["onClick"])) : d("", !0), e.user.role === "ADMIN" ? (i(),
                                        p(c, {
                                            key: 1,
                                            type: "danger",
                                            plain: "",
                                            onClick: J => x(l.row.id)
                                        }, {
                                            default: a(() => [s("删除")]),
                                            _: 2
                                        }, 1032, ["onClick"])) : d("", !0)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])], 32), e.total ? (i(),
                            w("div", Z, [t(R, {
                                onCurrentChange: u,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": o[1] || (o[1] = l => e.pageNum = l),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : d("", !0), t(q, {
                                title: "设备报修申请",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": o[4] || (o[4] = l => e.formVisible = l),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: a(() => [y("span", ee, [t(c, {
                                    onClick: o[3] || (o[3] = l => e.formVisible = !1)
                                }, {
                                    default: a(() => [s("取消")]),
                                    _: 1
                                }), t(c, {
                                    type: "primary",
                                    onClick: v
                                }, {
                                    default: a(() => [s("保存")]),
                                    _: 1
                                })])]),
                                default: a(() => [t(U, {
                                    model: e.form,
                                    "label-width": "140px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref: "formRef"
                                }, {
                                    default: a(() => [t(I, {
                                        label: "审批意见",
                                        prop: "adminStatus"
                                    }, {
                                        default: a(() => [t(D, {
                                            modelValue: e.form.adminStatus,
                                            "onUpdate:modelValue": o[2] || (o[2] = l => e.form.adminStatus = l)
                                        }, {
                                            default: a(() => [t(k, {
                                                label: "通过",
                                                value: "通过"
                                            }), t(k, {
                                                label: "拒绝",
                                                value: "拒绝"
                                            })]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }, 8, ["model"])]),
                                _: 1
                            }, 8, ["modelValue"])])
                }
        }
    };
export { be as default };

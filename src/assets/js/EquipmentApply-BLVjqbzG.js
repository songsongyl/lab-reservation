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
/* empty css                     */
/* empty css               */
import { r as g } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as R, c as k, a as y, b as t, w as l, f as d, A as _, G as S, M as P, y as $, H as F, I as G, i as H, o as i, d as s, e as p, L as K, J as L, K as j, R as Q, U as W, V as X, C as Y, z as Z } from "./index-HHlgu3jn.js";
const ee = {
    class: "card",
    style: {
        "margin-bottom": "5px"
    }
}
    , te = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , ae = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , le = {
        key: 0,
        class: "card"
    }
    , oe = {
        class: "dialog-footer"
    }
    , b = "/equipmentApply"
    , Se = {
        __name: "EquipmentApply",
        setup(ne) {
            const e = R({
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
                , v = n => {
                    e.ids = n.map(o => o.id)
                }
                , V = () => {
                    if (!e.ids.length) {
                        _.warning("请选择数据");
                        return
                    }
                    S.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(n => {
                        g.delete(b + "/delete/batch", {
                            data: e.ids
                        }).then(o => {
                            o.code === "200" ? (_.success("操作成功"),
                                c()) : _.error(o.msg)
                        }
                        )
                    }
                    ).catch(n => console.log(n))
                }
                , E = n => {
                    S.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(o => {
                        g.delete(b + "/delete/" + n).then(u => {
                            u.code === "200" ? (_.success("删除成功"),
                                c()) : _.error(u.msg)
                        }
                        )
                    }
                    ).catch(o => {
                        console.error(o)
                    }
                    )
                }
                , c = () => {
                    g.get(b + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            adminId: e.user.id,
                            status: e.status
                        }
                    }).then(n => {
                        var o, u;
                        e.tableData = ((o = n.data) == null ? void 0 : o.list) || [],
                            e.total = (u = n.data) == null ? void 0 : u.total
                    }
                    )
                }
                , x = n => {
                    e.form = JSON.parse(JSON.stringify(n)),
                        e.form.adminStatus = "通过",
                        e.formVisible = !0
                }
                , C = () => {
                    g.post(b + "/add", e.form).then(n => {
                        n.code === "200" ? (e.formVisible = !1,
                            c()) : _.error(n.msg)
                    }
                    )
                }
                , N = () => {
                    g.put(b + "/update", e.form).then(n => {
                        n.code === "200" ? (e.formVisible = !1,
                            c()) : _.error(n.msg)
                    }
                    )
                }
                , w = () => {
                    e.form.id ? N() : C()
                }
                , q = () => {
                    e.form.adminStatus === "通过" ? g.get(b + "/isUseEquipment/" + e.form.equipmentId).then(n => {
                        n.code === "200" ? w() : _.info("该设备正在使用中")
                    }
                    ) : w()
                }
                , I = () => {
                    e.name = null,
                        e.status = null,
                        c()
                }
                ;
            return c(),
                (n, o) => {
                    const u = K
                        , A = P
                        , f = $
                        , r = L
                        , B = j
                        , m = Q
                        , z = F
                        , U = G
                        , h = W
                        , T = X
                        , D = Y
                        , J = Z
                        , M = H;
                    return i(),
                        k("div", null, [y("div", ee, [t(A, {
                            modelValue: e.status,
                            "onUpdate:modelValue": o[0] || (o[0] = a => e.status = a),
                            style: {
                                width: "240px"
                            },
                            placeholder: "请选择申请状态"
                        }, {
                            default: l(() => [t(u, {
                                label: "已取消",
                                value: "已取消"
                            }), t(u, {
                                label: "待审核",
                                value: "待审核"
                            }), t(u, {
                                label: "使用中",
                                value: "使用中"
                            }), t(u, {
                                label: "已拒绝",
                                value: "已拒绝"
                            }), t(u, {
                                label: "已归还",
                                value: "已归还"
                            })]),
                            _: 1
                        }, 8, ["modelValue"]), t(f, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: c
                        }, {
                            default: l(() => [s("查询")]),
                            _: 1
                        }), t(f, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: I
                        }, {
                            default: l(() => [s("重置")]),
                            _: 1
                        })]), y("div", te, [t(f, {
                            type: "danger",
                            plain: "",
                            onClick: V
                        }, {
                            default: l(() => [s("批量删除")]),
                            _: 1
                        })]), y("div", ae, [t(z, {
                            data: e.tableData,
                            strip: "",
                            onSelectionChange: v
                        }, {
                            default: l(() => [t(r, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), t(r, {
                                prop: "equipmentImage",
                                label: "设备图片"
                            }, {
                                default: l(a => [a.row.equipmentImage ? (i(),
                                    p(B, {
                                        key: 0,
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            display: "block"
                                        },
                                        src: a.row.equipmentImage,
                                        "preview-src-list": [a.row.equipmentImage],
                                        "preview-teleported": ""
                                    }, null, 8, ["src", "preview-src-list"])) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                prop: "equipmentName",
                                label: "申请设备"
                            }), t(r, {
                                prop: "code",
                                label: "申请编号",
                                width: "120"
                            }), t(r, {
                                prop: "teacherName",
                                label: "申请教师"
                            }), t(r, {
                                prop: "reason",
                                label: "申请理由"
                            }), t(r, {
                                prop: "applyTime",
                                label: "申请时间",
                                width: "180"
                            }), t(r, {
                                prop: "returnTime",
                                label: "归还时间",
                                width: "180"
                            }), t(r, {
                                prop: "labAdminName",
                                label: "实验室管理员"
                            }), t(r, {
                                prop: "labAdminStatus",
                                label: "实验室审批"
                            }, {
                                default: l(a => [a.row.labAdminStatus === "通过" ? (i(),
                                    p(m, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: l(() => [s("通过")]),
                                        _: 1
                                    })) : d("", !0), a.row.labAdminStatus === "拒绝" ? (i(),
                                        p(m, {
                                            key: 1,
                                            type: "danger"
                                        }, {
                                            default: l(() => [s("拒绝")]),
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
                                default: l(a => [a.row.adminStatus === "通过" ? (i(),
                                    p(m, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: l(() => [s("通过")]),
                                        _: 1
                                    })) : d("", !0), a.row.adminStatus === "拒绝" ? (i(),
                                        p(m, {
                                            key: 1,
                                            type: "danger"
                                        }, {
                                            default: l(() => [s("拒绝")]),
                                            _: 1
                                        })) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                prop: "status",
                                label: "申请状态"
                            }, {
                                default: l(a => [a.row.status === "已取消" ? (i(),
                                    p(m, {
                                        key: 0,
                                        type: "danger"
                                    }, {
                                        default: l(() => [s("已取消")]),
                                        _: 1
                                    })) : d("", !0), a.row.status === "使用中" ? (i(),
                                        p(m, {
                                            key: 1,
                                            type: "success"
                                        }, {
                                            default: l(() => [s("使用中")]),
                                            _: 1
                                        })) : d("", !0), a.row.status === "待审核" ? (i(),
                                            p(m, {
                                                key: 2,
                                                type: "warning"
                                            }, {
                                                default: l(() => [s("待审核")]),
                                                _: 1
                                            })) : d("", !0), a.row.status === "已拒绝" ? (i(),
                                                p(m, {
                                                    key: 3,
                                                    type: "danger"
                                                }, {
                                                    default: l(() => [s("已拒绝")]),
                                                    _: 1
                                                })) : d("", !0), a.row.status === "已归还" ? (i(),
                                                    p(m, {
                                                        key: 4,
                                                        type: "success"
                                                    }, {
                                                        default: l(() => [s("已归还")]),
                                                        _: 1
                                                    })) : d("", !0)]),
                                _: 1
                            }), t(r, {
                                label: "操作",
                                align: "center",
                                width: "200",
                                fixed: "right"
                            }, {
                                default: l(a => [a.row.adminStatus === null ? (i(),
                                    p(f, {
                                        key: 0,
                                        type: "primary",
                                        plain: "",
                                        onClick: O => x(a.row)
                                    }, {
                                        default: l(() => [s("去审批")]),
                                        _: 2
                                    }, 1032, ["onClick"])) : d("", !0), e.user.role === "ADMIN" ? (i(),
                                        p(f, {
                                            key: 1,
                                            type: "danger",
                                            plain: "",
                                            onClick: O => E(a.row.id)
                                        }, {
                                            default: l(() => [s("删除")]),
                                            _: 2
                                        }, 1032, ["onClick"])) : d("", !0)]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (i(),
                            k("div", le, [t(U, {
                                onCurrentChange: c,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": o[1] || (o[1] = a => e.pageNum = a),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : d("", !0), t(M, {
                                title: "设备申请",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": o[4] || (o[4] = a => e.formVisible = a),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: l(() => [y("span", oe, [t(f, {
                                    onClick: o[3] || (o[3] = a => e.formVisible = !1)
                                }, {
                                    default: l(() => [s("取消")]),
                                    _: 1
                                }), t(f, {
                                    type: "primary",
                                    onClick: q
                                }, {
                                    default: l(() => [s("保存")]),
                                    _: 1
                                })])]),
                                default: l(() => [t(J, {
                                    model: e.form,
                                    "label-width": "100px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref: "formRef",
                                    rules: e.rules
                                }, {
                                    default: l(() => [t(D, {
                                        label: "审批结果",
                                        prop: "adminStatus"
                                    }, {
                                        default: l(() => [t(T, {
                                            modelValue: e.form.adminStatus,
                                            "onUpdate:modelValue": o[2] || (o[2] = a => e.form.adminStatus = a)
                                        }, {
                                            default: l(() => [t(h, {
                                                label: "通过",
                                                value: "通过"
                                            }), t(h, {
                                                label: "拒绝",
                                                value: "拒绝"
                                            })]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }, 8, ["model", "rules"])]),
                                _: 1
                            }, 8, ["modelValue"])])
                }
        }
    };
export { Se as default };

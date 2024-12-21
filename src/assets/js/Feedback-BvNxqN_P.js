/* empty css             */
/* empty css               */
/* empty css                */
/* empty css                  */
/* empty css                   */
/* empty css              */
/* empty css               */
/* empty css                  */
/* empty css                     */
/* empty css                */
/* empty css               */
import { r as c } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as M, F as P, c as C, a as f, b as a, w as o, f as _, A as m, G as V, D as R, M as $, y as q, H as A, I as G, i as H, o as g, d as r, e as k, L, J as j, R as K, C as Q, z as W } from "./index-HHlgu3jn.js";
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
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , ee = {
        key: 0,
        class: "card"
    }
    , te = {
        class: "dialog-footer"
    }
    , u = "/feedback"
    , be = {
        __name: "Feedback",
        setup(ae) {
            const e = M({
                user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                tableData: [],
                total: 0,
                pageNum: 1,
                pageSize: 10,
                formVisible: !1,
                form: {},
                ids: [],
                teacherName: null,
                status: null,
                rules: {
                    replyContent: [{
                        required: !0,
                        message: "回复内容不能为空",
                        trigger: "blur"
                    }]
                }
            })
                , x = l => {
                    V.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(t => {
                        c.delete(u + "/delete/" + l).then(i => {
                            i.code === "200" ? (m.success("删除成功"),
                                s()) : m.error(i.msg)
                        }
                        )
                    }
                    ).catch(t => {
                        console.error(t)
                    }
                    )
                }
                , w = l => {
                    e.ids = l.map(t => t.id)
                }
                , N = () => {
                    if (!e.ids.length) {
                        m.warning("请选择数据");
                        return
                    }
                    V.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(l => {
                        c.delete(u + "/delete/batch", {
                            data: e.ids
                        }).then(t => {
                            t.code === "200" ? (m.success("操作成功"),
                                s()) : m.error(t.msg)
                        }
                        )
                    }
                    ).catch(l => console.log(l))
                }
                , s = () => {
                    c.get(u + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            teacherName: e.teacherName,
                            status: e.status
                        }
                    }).then(l => {
                        var t, i;
                        e.tableData = ((t = l.data) == null ? void 0 : t.list) || [],
                            e.total = (i = l.data) == null ? void 0 : i.total
                    }
                    )
                }
                , b = P()
                , v = l => {
                    e.form = JSON.parse(JSON.stringify(l)),
                        e.formVisible = !0
                }
                , E = () => {
                    c.post(u + "/add", e.form).then(l => {
                        l.code === "200" ? (e.formVisible = !1,
                            s()) : m.error(l.msg)
                    }
                    )
                }
                , S = () => {
                    e.form.status = "已回复",
                        e.form.replyId = e.user.id,
                        b.value.validate(l => {
                            l && c.put(u + "/update", e.form).then(t => {
                                t.code === "200" ? (e.formVisible = !1,
                                    s()) : m.error(t.msg)
                            }
                            )
                        }
                        ).catch(l => {
                            console.error(l)
                        }
                        )
                }
                , z = () => {
                    e.form.id ? S() : E()
                }
                , B = () => {
                    e.teacherName = null,
                        e.status = null,
                        s()
                }
                ;
            return s(),
                (l, t) => {
                    const i = R
                        , y = L
                        , D = $
                        , p = q
                        , d = j
                        , h = K
                        , I = A
                        , T = G
                        , U = Q
                        , F = W
                        , J = H;
                    return g(),
                        C("div", null, [f("div", X, [a(i, {
                            modelValue: e.teacherName,
                            "onUpdate:modelValue": t[0] || (t[0] = n => e.teacherName = n),
                            "prefix-icon": "Search",
                            placeholder: "请输入反馈者名称",
                            style: {
                                width: "240px"
                            }
                        }, null, 8, ["modelValue"]), a(D, {
                            modelValue: e.status,
                            "onUpdate:modelValue": t[1] || (t[1] = n => e.status = n),
                            placeholder: "请选择回复状态",
                            style: {
                                width: "240px",
                                "margin-left": "4px"
                            }
                        }, {
                            default: o(() => [a(y, {
                                label: "已回复",
                                value: "已回复"
                            }), a(y, {
                                label: "未回复",
                                value: "未回复"
                            })]),
                            _: 1
                        }, 8, ["modelValue"]), a(p, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: s
                        }, {
                            default: o(() => [r("查询")]),
                            _: 1
                        }), a(p, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: B
                        }, {
                            default: o(() => [r("重置")]),
                            _: 1
                        })]), f("div", Y, [a(p, {
                            type: "danger",
                            plain: "",
                            onClick: N
                        }, {
                            default: o(() => [r("批量删除")]),
                            _: 1
                        })]), f("div", Z, [a(I, {
                            data: e.tableData,
                            strip: "",
                            onSelectionChange: w
                        }, {
                            default: o(() => [a(d, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), a(d, {
                                prop: "teacherName",
                                label: "反馈教师"
                            }), a(d, {
                                prop: "feedbackContent",
                                label: "反馈内容"
                            }), a(d, {
                                prop: "feedbackTime",
                                label: "反馈时间"
                            }), a(d, {
                                prop: "replyContent",
                                label: "回复内容"
                            }), a(d, {
                                prop: "status",
                                label: "回复状态"
                            }, {
                                default: o(n => [n.row.status === "已回复" ? (g(),
                                    k(h, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: o(() => [r("已回复")]),
                                        _: 1
                                    })) : _("", !0), n.row.status === "未回复" ? (g(),
                                        k(h, {
                                            key: 1,
                                            type: "warning"
                                        }, {
                                            default: o(() => [r("未回复")]),
                                            _: 1
                                        })) : _("", !0)]),
                                _: 1
                            }), a(d, {
                                label: "操作",
                                align: "center",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: o(n => [a(p, {
                                    type: "primary",
                                    plain: "",
                                    onClick: O => v(n.row)
                                }, {
                                    default: o(() => [r("回复")]),
                                    _: 2
                                }, 1032, ["onClick"]), a(p, {
                                    type: "danger",
                                    plain: "",
                                    onClick: O => x(n.row.id)
                                }, {
                                    default: o(() => [r("删除")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (g(),
                            C("div", ee, [a(T, {
                                onCurrentChange: s,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": t[2] || (t[2] = n => e.pageNum = n),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : _("", !0), a(J, {
                                title: "反馈信息",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": t[5] || (t[5] = n => e.formVisible = n),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: o(() => [f("span", te, [a(p, {
                                    onClick: t[4] || (t[4] = n => e.formVisible = !1)
                                }, {
                                    default: o(() => [r("取消")]),
                                    _: 1
                                }), a(p, {
                                    type: "primary",
                                    onClick: z
                                }, {
                                    default: o(() => [r("保存")]),
                                    _: 1
                                })])]),
                                default: o(() => [a(F, {
                                    model: e.form,
                                    "label-width": "100px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref_key: "formRef",
                                    ref: b,
                                    rules: e.rules
                                }, {
                                    default: o(() => [a(U, {
                                        label: "回复内容",
                                        prop: "replyContent"
                                    }, {
                                        default: o(() => [a(i, {
                                            modelValue: e.form.replyContent,
                                            "onUpdate:modelValue": t[3] || (t[3] = n => e.form.replyContent = n),
                                            placeholder: "回复内容",
                                            type: "textarea",
                                            rows: "5",
                                            maxlength: "200",
                                            "show-word-limit": ""
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }, 8, ["model", "rules"])]),
                                _: 1
                            }, 8, ["modelValue"])])
                }
        }
    };
export { be as default };

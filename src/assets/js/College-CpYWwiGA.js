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
import { r as p } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as U, F as A, c as _, a as u, b as a, w as l, f as F, A as d, G as b, D as O, y as P, H as T, I as $, i as q, o as y, d as m, J as M, C as R, z as G } from "./index-HHlgu3jn.js";
const H = {
    class: "card",
    style: {
        "margin-bottom": "5px"
    }
}
    , j = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , K = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , L = {
        key: 0,
        class: "card"
    }
    , Q = {
        class: "dialog-footer"
    }
    , c = "/college"
    , pe = {
        __name: "College",
        setup(W) {
            const e = U({
                user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                tableData: [],
                total: 0,
                pageNum: 1,
                pageSize: 10,
                formVisible: !1,
                form: {},
                ids: [],
                name: null,
                rules: {
                    name: [{
                        required: !0,
                        message: "请输入学院名称",
                        trigger: "blur"
                    }]
                }
            })
                , g = A()
                , r = () => {
                    p.get(c + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            name: e.name
                        }
                    }).then(o => {
                        var t, s;
                        e.tableData = ((t = o.data) == null ? void 0 : t.list) || [],
                            e.total = (s = o.data) == null ? void 0 : s.total
                    }
                    )
                }
                , h = () => {
                    e.form = {},
                        e.formVisible = !0
                }
                , V = o => {
                    e.form = JSON.parse(JSON.stringify(o)),
                        e.formVisible = !0
                }
                , C = () => {
                    g.value.validate(o => {
                        o && p.post(c + "/add", e.form).then(t => {
                            t.code === "200" ? (e.formVisible = !1,
                                r()) : d.error(t.msg)
                        }
                        )
                    }
                    ).catch(o => {
                        console.error(o)
                    }
                    )
                }
                , x = () => {
                    p.put(c + "/update", e.form).then(o => {
                        o.code === "200" ? (e.formVisible = !1,
                            r()) : d.error(o.msg)
                    }
                    )
                }
                , k = o => {
                    b.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(t => {
                        p.delete(c + "/delete/" + o).then(s => {
                            s.code === "200" ? (d.success("删除成功"),
                                r()) : d.error(s.msg)
                        }
                        )
                    }
                    ).catch(t => {
                        console.error(t)
                    }
                    )
                }
                , v = o => {
                    e.ids = o.map(t => t.id)
                }
                , w = () => {
                    if (!e.ids.length) {
                        d.warning("请选择数据");
                        return
                    }
                    b.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(o => {
                        p.delete(c + "/delete/batch", {
                            data: e.ids
                        }).then(t => {
                            t.code === "200" ? (d.success("操作成功"),
                                r()) : d.error(t.msg)
                        }
                        )
                    }
                    ).catch(o => console.log(o))
                }
                , E = () => {
                    e.form.id ? x() : C()
                }
                , N = () => {
                    e.name = null,
                        r()
                }
                ;
            return r(),
                (o, t) => {
                    const s = O
                        , i = P
                        , f = M
                        , S = T
                        , z = $
                        , B = R
                        , D = G
                        , I = q;
                    return y(),
                        _("div", null, [u("div", H, [a(s, {
                            modelValue: e.name,
                            "onUpdate:modelValue": t[0] || (t[0] = n => e.name = n),
                            "prefix-icon": "Search",
                            placeholder: "请输入学院名称",
                            style: {
                                width: "240px"
                            }
                        }, null, 8, ["modelValue"]), a(i, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: r
                        }, {
                            default: l(() => [m("查询")]),
                            _: 1
                        }), a(i, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: N
                        }, {
                            default: l(() => [m("重置")]),
                            _: 1
                        })]), u("div", j, [a(i, {
                            type: "primary",
                            plain: "",
                            onClick: h
                        }, {
                            default: l(() => [m("新增")]),
                            _: 1
                        }), a(i, {
                            type: "danger",
                            plain: "",
                            onClick: w
                        }, {
                            default: l(() => [m("批量删除")]),
                            _: 1
                        })]), u("div", K, [a(S, {
                            data: e.tableData,
                            strip: "",
                            onSelectionChange: v
                        }, {
                            default: l(() => [a(f, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), a(f, {
                                prop: "name",
                                label: "学院名称"
                            }), a(f, {
                                label: "操作",
                                align: "center",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: l(n => [a(i, {
                                    type: "primary",
                                    plain: "",
                                    onClick: J => V(n.row)
                                }, {
                                    default: l(() => [m("编辑")]),
                                    _: 2
                                }, 1032, ["onClick"]), a(i, {
                                    type: "danger",
                                    plain: "",
                                    onClick: J => k(n.row.id)
                                }, {
                                    default: l(() => [m("删除")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (y(),
                            _("div", L, [a(z, {
                                onCurrentChange: r,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": t[1] || (t[1] = n => e.pageNum = n),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : F("", !0), a(I, {
                                title: "学院信息",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": t[4] || (t[4] = n => e.formVisible = n),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: l(() => [u("span", Q, [a(i, {
                                    onClick: t[3] || (t[3] = n => e.formVisible = !1)
                                }, {
                                    default: l(() => [m("取消")]),
                                    _: 1
                                }), a(i, {
                                    type: "primary",
                                    onClick: E
                                }, {
                                    default: l(() => [m("保存")]),
                                    _: 1
                                })])]),
                                default: l(() => [a(D, {
                                    model: e.form,
                                    "label-width": "80px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref_key: "formRef",
                                    ref: g,
                                    rules: e.rules
                                }, {
                                    default: l(() => [a(B, {
                                        label: "学院名称",
                                        prop: "name"
                                    }, {
                                        default: l(() => [a(s, {
                                            modelValue: e.form.name,
                                            "onUpdate:modelValue": t[2] || (t[2] = n => e.form.name = n),
                                            placeholder: "学院名称"
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
export { pe as default };

/* empty css             */
/* empty css               */
/* empty css                */
/* empty css                  */
/* empty css              */
/* empty css               */
/* empty css                  */
/* empty css                 */
/* empty css                   */
/* empty css                     */
/* empty css                */
/* empty css                     */
/* empty css               */
import { r as c } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as T, F as $, c as y, a as g, b as l, w as t, f as h, A as i, G as v, D as L, y as R, H as G, I as H, i as K, o as _, d, e as j, u as Q, J as W, K as X, C as Y, B as Z, L as ee, M as le, z as ae } from "./index-HHlgu3jn.js";
const oe = {
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
    , re = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , ne = {
        key: 0,
        class: "card"
    }
    , se = {
        class: "dialog-footer"
    }
    , f = "/admin"
    , xe = {
        __name: "Admin",
        setup(ie) {
            const w = "http://49.234.52.28:9098"
                , e = T({
                    tableData: [],
                    total: 0,
                    pageNum: 1,
                    pageSize: 10,
                    formVisible: !1,
                    form: {},
                    ids: [],
                    name: "",
                    rules: {
                        role: [{
                            required: !0,
                            message: "请选择管理员类型",
                            trigger: "blur"
                        }],
                        username: [{
                            required: !0,
                            message: "请输入账号",
                            trigger: "blur"
                        }],
                        password: [{
                            required: !0,
                            message: "请输入密码",
                            trigger: "blur"
                        }],
                        name: [{
                            required: !0,
                            message: "请输入学院名称",
                            trigger: "blur"
                        }]
                    }
                })
                , b = $()
                , p = () => {
                    c.get(f + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            name: e.name
                        }
                    }).then(r => {
                        var a, n;
                        e.tableData = ((a = r.data) == null ? void 0 : a.list) || [],
                            e.total = (n = r.data) == null ? void 0 : n.total
                    }
                    )
                }
                , k = () => {
                    e.form = {},
                        e.formVisible = !0
                }
                , C = r => {
                    e.form = JSON.parse(JSON.stringify(r)),
                        e.formVisible = !0
                }
                , x = () => {
                    b.value.validate(r => {
                        r && c.post(f + "/add", e.form).then(a => {
                            a.code === "200" ? (i.success("操作成功"),
                                e.formVisible = !1,
                                p()) : i.error(a.msg)
                        }
                        )
                    }
                    ).catch(r => {
                        console.error(r)
                    }
                    )
                }
                , E = () => {
                    c.put(f + "/update", e.form).then(r => {
                        r.code === "200" ? (i.success("更新成功"),
                            e.formVisible = !1,
                            p()) : i.error(r.msg)
                    }
                    )
                }
                , N = r => {
                    v.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(a => {
                        c.delete(f + "/delete/" + r).then(n => {
                            n.code === "200" ? (i.success("删除成功"),
                                p()) : i.error(n.msg)
                        }
                        )
                    }
                    ).catch(a => {
                        console.error(a)
                    }
                    )
                }
                , U = r => {
                    e.ids = r.map(a => a.id)
                }
                , S = () => {
                    if (!e.ids.length) {
                        i.warning("请选择数据");
                        return
                    }
                    v.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(r => {
                        c.delete(f + "/delete/batch", {
                            data: e.ids
                        }).then(a => {
                            a.code === "200" ? (i.success("操作成功"),
                                p()) : i.error(a.msg)
                        }
                        )
                    }
                    ).catch(r => console.log(r))
                }
                , B = () => {
                    e.form.id ? E() : x()
                }
                , z = r => {
                    e.form.avatar = r.data
                }
                , A = () => {
                    e.name = "",
                        p()
                }
                ;
            return p(),
                (r, a) => {
                    const n = L
                        , s = R
                        , m = W
                        , D = X
                        , I = G
                        , q = H
                        , u = Y
                        , M = Z
                        , V = ee
                        , F = le
                        , J = ae
                        , O = K;
                    return _(),
                        y("div", null, [g("div", oe, [l(n, {
                            modelValue: e.name,
                            "onUpdate:modelValue": a[0] || (a[0] = o => e.name = o),
                            "prefix-icon": "Search",
                            style: {
                                width: "240px",
                                "margin-right": "10px"
                            },
                            placeholder: "请输入名称查询"
                        }, null, 8, ["modelValue"]), l(s, {
                            type: "info",
                            plain: "",
                            onClick: p
                        }, {
                            default: t(() => [d("查询")]),
                            _: 1
                        }), l(s, {
                            type: "warning",
                            plain: "",
                            style: {
                                margin: "0 10px"
                            },
                            onClick: A
                        }, {
                            default: t(() => [d("重置")]),
                            _: 1
                        })]), g("div", te, [l(s, {
                            type: "primary",
                            plain: "",
                            onClick: k
                        }, {
                            default: t(() => [d("新增")]),
                            _: 1
                        }), l(s, {
                            type: "danger",
                            plain: "",
                            onClick: S
                        }, {
                            default: t(() => [d("批量删除")]),
                            _: 1
                        })]), g("div", re, [l(I, {
                            stripe: "",
                            data: e.tableData,
                            onSelectionChange: U
                        }, {
                            default: t(() => [l(m, {
                                type: "selection",
                                width: "55"
                            }), l(m, {
                                prop: "username",
                                label: "账号"
                            }), l(m, {
                                prop: "name",
                                label: "名称"
                            }), l(m, {
                                prop: "avatar",
                                label: "头像"
                            }, {
                                default: t(o => [o.row.avatar ? (_(),
                                    j(D, {
                                        key: 0,
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            "border-radius": "50%",
                                            display: "block"
                                        },
                                        src: o.row.avatar,
                                        "preview-src-list": [o.row.avatar],
                                        "preview-teleported": ""
                                    }, null, 8, ["src", "preview-src-list"])) : h("", !0)]),
                                _: 1
                            }), l(m, {
                                prop: "phone",
                                label: "电话"
                            }), l(m, {
                                prop: "email",
                                label: "邮箱"
                            }), l(m, {
                                prop: "role",
                                label: "角色"
                            }), l(m, {
                                label: "操作",
                                width: "160",
                                align: "center"
                            }, {
                                default: t(o => [l(s, {
                                    type: "primary",
                                    plain: "",
                                    onClick: P => C(o.row)
                                }, {
                                    default: t(() => [d("编辑")]),
                                    _: 2
                                }, 1032, ["onClick"]), l(s, {
                                    type: "danger",
                                    plain: "",
                                    onClick: P => N(o.row.id)
                                }, {
                                    default: t(() => [d("删除")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (_(),
                            y("div", ne, [l(q, {
                                onCurrentChange: p,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": a[1] || (a[1] = o => e.pageNum = o),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : h("", !0), l(O, {
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": a[9] || (a[9] = o => e.formVisible = o),
                                title: "用户信息",
                                width: "40%",
                                "destroy-on-close": ""
                            }, {
                                footer: t(() => [g("span", se, [l(s, {
                                    onClick: a[8] || (a[8] = o => e.formVisible = !1)
                                }, {
                                    default: t(() => [d("取消")]),
                                    _: 1
                                }), l(s, {
                                    type: "primary",
                                    onClick: B
                                }, {
                                    default: t(() => [d("保存")]),
                                    _: 1
                                })])]),
                                default: t(() => [l(J, {
                                    ref_key: "formRef",
                                    ref: b,
                                    model: e.form,
                                    "label-width": "100px",
                                    style: {
                                        padding: "20px"
                                    },
                                    rules: e.rules
                                }, {
                                    default: t(() => [l(u, {
                                        prop: "username",
                                        label: "用户名"
                                    }, {
                                        default: t(() => [l(n, {
                                            modelValue: e.form.username,
                                            "onUpdate:modelValue": a[2] || (a[2] = o => e.form.username = o),
                                            placeholder: "请输入用户名"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "name",
                                        label: "名称"
                                    }, {
                                        default: t(() => [l(n, {
                                            modelValue: e.form.name,
                                            "onUpdate:modelValue": a[3] || (a[3] = o => e.form.name = o),
                                            placeholder: "请输入名称"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "password",
                                        label: "密码"
                                    }, {
                                        default: t(() => [l(n, {
                                            modelValue: e.form.password,
                                            "onUpdate:modelValue": a[4] || (a[4] = o => e.form.password = o),
                                            placeholder: "请输入密码"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "phone",
                                        label: "电话"
                                    }, {
                                        default: t(() => [l(n, {
                                            modelValue: e.form.phone,
                                            "onUpdate:modelValue": a[5] || (a[5] = o => e.form.phone = o),
                                            placeholder: "请输入电话"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "email",
                                        label: "邮箱"
                                    }, {
                                        default: t(() => [l(n, {
                                            modelValue: e.form.email,
                                            "onUpdate:modelValue": a[6] || (a[6] = o => e.form.email = o),
                                            placeholder: "请输入邮箱"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "avatar",
                                        label: "头像"
                                    }, {
                                        default: t(() => [l(M, {
                                            action: Q(w) + "/files/upload",
                                            "on-success": z,
                                            "list-type": "picture"
                                        }, {
                                            default: t(() => [l(s, {
                                                type: "primary"
                                            }, {
                                                default: t(() => [d("上传头像")]),
                                                _: 1
                                            })]),
                                            _: 1
                                        }, 8, ["action"])]),
                                        _: 1
                                    }), l(u, {
                                        prop: "role",
                                        label: "管理员类型"
                                    }, {
                                        default: t(() => [l(F, {
                                            modelValue: e.form.role,
                                            "onUpdate:modelValue": a[7] || (a[7] = o => e.form.role = o),
                                            placeholder: "请选择管理员类型"
                                        }, {
                                            default: t(() => [l(V, {
                                                label: "超级管理员",
                                                value: "ADMIN"
                                            }), l(V, {
                                                label: "实验室管理员",
                                                value: "LABADMIN"
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
export { xe as default };

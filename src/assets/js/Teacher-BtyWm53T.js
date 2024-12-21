/* empty css             */
/* empty css               */
/* empty css                */
/* empty css                  */
/* empty css                 */
/* empty css                   */
/* empty css              */
/* empty css               */
/* empty css                  */
/* empty css                     */
/* empty css                */
/* empty css                     */
/* empty css               */
import { r as f } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as H, F as G, c as _, a as b, b as l, w as o, f as w, A as p, G as x, D as K, M as j, y as Q, H as W, I as X, i as Y, o as u, N as C, O as k, e as V, d, u as Z, L as ee, J as le, K as ae, C as te, B as oe, z as re } from "./index-HHlgu3jn.js";
const ne = {
    class: "card",
    style: {
        "margin-bottom": "5px"
    }
}
    , se = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , ie = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , de = {
        key: 0,
        class: "card"
    }
    , me = {
        class: "dialog-footer"
    }
    , g = "/teacher"
    , Ne = {
        __name: "Teacher",
        setup(pe) {
            const E = "http://49.234.52.28:9098"
                , e = H({
                    user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                    tableData: [],
                    total: 0,
                    pageNum: 1,
                    pageSize: 10,
                    formVisible: !1,
                    form: {},
                    ids: [],
                    name: null,
                    collegeId: null,
                    collegeList: null,
                    rules: {
                        collegeId: [{
                            required: !0,
                            message: "请选择所属学院名称",
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
                , h = G()
                , m = () => {
                    f.get(g + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            name: e.name,
                            collegeId: e.collegeId
                        }
                    }).then(r => {
                        var a, n;
                        e.tableData = ((a = r.data) == null ? void 0 : a.list) || [],
                            e.total = (n = r.data) == null ? void 0 : n.total
                    }
                    )
                }
                , I = () => {
                    e.form = {},
                        e.formVisible = !0
                }
                , N = r => {
                    e.form = JSON.parse(JSON.stringify(r)),
                        e.formVisible = !0
                }
                , S = () => {
                    h.value.validate(r => {
                        r && (e.form.role = "TEACHER",
                            f.post(g + "/add", e.form).then(a => {
                                a.code === "200" ? (e.formVisible = !1,
                                    m()) : p.error(a.msg)
                            }
                            ))
                    }
                    ).catch(r => {
                        console.error(r)
                    }
                    )
                }
                , U = () => {
                    f.put(g + "/update", e.form).then(r => {
                        r.code === "200" ? (e.formVisible = !1,
                            m()) : p.error(r.msg)
                    }
                    )
                }
                , B = r => {
                    x.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(a => {
                        f.delete(g + "/delete/" + r).then(n => {
                            n.code === "200" ? (p.success("删除成功"),
                                m()) : p.error(n.msg)
                        }
                        )
                    }
                    ).catch(a => {
                        console.error(a)
                    }
                    )
                }
                , z = r => {
                    e.ids = r.map(a => a.id)
                }
                , A = () => {
                    if (!e.ids.length) {
                        p.warning("请选择数据");
                        return
                    }
                    x.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(r => {
                        f.delete(g + "/delete/batch", {
                            data: e.ids
                        }).then(a => {
                            a.code === "200" ? (p.success("操作成功"),
                                m()) : p.error(a.msg)
                        }
                        )
                    }
                    ).catch(r => console.log(r))
                }
                , L = () => {
                    e.form.id ? U() : S()
                }
                , q = () => {
                    f.get(g + "/getAllCollege").then(r => {
                        e.collegeList = r.data
                    }
                    )
                }
                , D = r => {
                    e.form.avatar = r.data
                }
                , F = () => {
                    e.name = null,
                        e.collegeId = null,
                        m()
                }
                ;
            return q(),
                m(),
                (r, a) => {
                    const n = K
                        , y = ee
                        , v = j
                        , s = Q
                        , i = le
                        , O = ae
                        , T = W
                        , J = X
                        , c = te
                        , M = oe
                        , P = re
                        , R = Y;
                    return u(),
                        _("div", null, [b("div", ne, [l(n, {
                            modelValue: e.name,
                            "onUpdate:modelValue": a[0] || (a[0] = t => e.name = t),
                            "prefix-icon": "Search",
                            placeholder: "请输入姓名",
                            style: {
                                width: "240px"
                            }
                        }, null, 8, ["modelValue"]), l(v, {
                            modelValue: e.collegeId,
                            "onUpdate:modelValue": a[1] || (a[1] = t => e.collegeId = t),
                            placeholder: "请选择所属学院",
                            style: {
                                width: "240px",
                                "margin-left": "4px"
                            }
                        }, {
                            default: o(() => [(u(!0),
                                _(C, null, k(e.collegeList, t => (u(),
                                    V(y, {
                                        label: t.name,
                                        value: t.id
                                    }, null, 8, ["label", "value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue"]), l(s, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: m
                        }, {
                            default: o(() => [d("查询")]),
                            _: 1
                        }), l(s, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: F
                        }, {
                            default: o(() => [d("重置")]),
                            _: 1
                        })]), b("div", se, [l(s, {
                            type: "primary",
                            plain: "",
                            onClick: I
                        }, {
                            default: o(() => [d("新增")]),
                            _: 1
                        }), l(s, {
                            type: "danger",
                            plain: "",
                            onClick: A
                        }, {
                            default: o(() => [d("批量删除")]),
                            _: 1
                        })]), b("div", ie, [l(T, {
                            data: e.tableData,
                            strip: "",
                            onSelectionChange: z
                        }, {
                            default: o(() => [l(i, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), l(i, {
                                prop: "collegeName",
                                label: "所属学院"
                            }), l(i, {
                                prop: "username",
                                label: "账号"
                            }), l(i, {
                                prop: "name",
                                label: "姓名"
                            }), l(i, {
                                prop: "avatar",
                                label: "头像"
                            }, {
                                default: o(t => [t.row.avatar ? (u(),
                                    V(O, {
                                        key: 0,
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            "border-radius": "50%",
                                            display: "block"
                                        },
                                        src: t.row.avatar,
                                        "preview-src-list": [t.row.avatar],
                                        "preview-teleported": ""
                                    }, null, 8, ["src", "preview-src-list"])) : w("", !0)]),
                                _: 1
                            }), l(i, {
                                prop: "phone",
                                label: "手机号"
                            }), l(i, {
                                prop: "email",
                                label: "电子邮件"
                            }), l(i, {
                                prop: "role",
                                label: "角色"
                            }), l(i, {
                                label: "操作",
                                align: "center",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: o(t => [l(s, {
                                    type: "primary",
                                    plain: "",
                                    onClick: $ => N(t.row)
                                }, {
                                    default: o(() => [d("编辑")]),
                                    _: 2
                                }, 1032, ["onClick"]), l(s, {
                                    type: "danger",
                                    plain: "",
                                    onClick: $ => B(t.row.id)
                                }, {
                                    default: o(() => [d("删除")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (u(),
                            _("div", de, [l(J, {
                                onCurrentChange: m,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": a[2] || (a[2] = t => e.pageNum = t),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : w("", !0), l(R, {
                                title: "教师信息",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": a[9] || (a[9] = t => e.formVisible = t),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: o(() => [b("span", me, [l(s, {
                                    onClick: a[8] || (a[8] = t => e.formVisible = !1)
                                }, {
                                    default: o(() => [d("取消")]),
                                    _: 1
                                }), l(s, {
                                    type: "primary",
                                    onClick: L
                                }, {
                                    default: o(() => [d("保存")]),
                                    _: 1
                                })])]),
                                default: o(() => [l(P, {
                                    model: e.form,
                                    "label-width": "80px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref_key: "formRef",
                                    ref: h,
                                    rules: e.rules
                                }, {
                                    default: o(() => [l(c, {
                                        label: "所属学院",
                                        prop: "collegeId"
                                    }, {
                                        default: o(() => [l(v, {
                                            modelValue: e.form.collegeId,
                                            "onUpdate:modelValue": a[3] || (a[3] = t => e.form.collegeId = t),
                                            placeholder: "请选择实验室管理员"
                                        }, {
                                            default: o(() => [(u(!0),
                                                _(C, null, k(e.collegeList, t => (u(),
                                                    V(y, {
                                                        label: t.name,
                                                        value: t.id
                                                    }, null, 8, ["label", "value"]))), 256))]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(c, {
                                        label: "账号",
                                        prop: "username"
                                    }, {
                                        default: o(() => [l(n, {
                                            modelValue: e.form.username,
                                            "onUpdate:modelValue": a[4] || (a[4] = t => e.form.username = t),
                                            placeholder: "账号"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(c, {
                                        label: "姓名",
                                        prop: "name"
                                    }, {
                                        default: o(() => [l(n, {
                                            modelValue: e.form.name,
                                            "onUpdate:modelValue": a[5] || (a[5] = t => e.form.name = t),
                                            placeholder: "姓名"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(c, {
                                        label: "头像",
                                        prop: "avatar"
                                    }, {
                                        default: o(() => [l(M, {
                                            action: Z(E) + "/files/upload",
                                            "on-success": D,
                                            "list-type": "picture"
                                        }, {
                                            default: o(() => [l(s, {
                                                type: "primary"
                                            }, {
                                                default: o(() => [d("上传头像")]),
                                                _: 1
                                            })]),
                                            _: 1
                                        }, 8, ["action"])]),
                                        _: 1
                                    }), l(c, {
                                        label: "手机号",
                                        prop: "phone"
                                    }, {
                                        default: o(() => [l(n, {
                                            modelValue: e.form.phone,
                                            "onUpdate:modelValue": a[6] || (a[6] = t => e.form.phone = t),
                                            placeholder: "手机号"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), l(c, {
                                        label: "电子邮件",
                                        prop: "email"
                                    }, {
                                        default: o(() => [l(n, {
                                            modelValue: e.form.email,
                                            "onUpdate:modelValue": a[7] || (a[7] = t => e.form.email = t),
                                            placeholder: "电子邮件"
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
export { Ne as default };

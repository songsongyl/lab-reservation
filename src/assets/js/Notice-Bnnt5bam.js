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
import {r as c} from "./request-BE1UvMV5.js";
/* empty css                    */
import {r as I, F as J, c as b, a as f, b as l, w as a, f as T, A as m, G as y, D as A, y as F, H as O, I as P, i as $, o as h, d, J as M, C as R, z as G} from "./index-HHlgu3jn.js";
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
  , u = "/notice"
  , pe = {
    __name: "Notice",
    setup(W) {
        const e = I({
            user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
            tableData: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
            formVisible: !1,
            form: {},
            ids: [],
            title: null,
            status: null,
            rules: {
                title: [{
                    required: !0,
                    message: "请输入公告标题",
                    trigger: "blur"
                }],
                content: [{
                    required: !0,
                    message: "请输入公告内容",
                    trigger: "blur"
                }],
                status: [{
                    required: !0,
                    message: "请选择公告状态",
                    trigger: "blur"
                }]
            }
        })
          , g = J()
          , s = ()=>{
            c.get(u + "/selectPage", {
                params: {
                    pageNum: e.pageNum,
                    pageSize: e.pageSize,
                    title: e.title,
                    status: e.status
                }
            }).then(o=>{
                var t, n;
                e.tableData = ((t = o.data) == null ? void 0 : t.list) || [],
                e.total = (n = o.data) == null ? void 0 : n.total
            }
            )
        }
          , V = ()=>{
            e.form = {},
            e.form.status = "展示",
            e.formVisible = !0
        }
          , x = o=>{
            e.form = JSON.parse(JSON.stringify(o)),
            e.formVisible = !0
        }
          , C = ()=>{
            g.value.validate(o=>{
                o && c.post(u + "/add", e.form).then(t=>{
                    t.code === "200" ? (e.formVisible = !1,
                    s()) : m.error(t.msg)
                }
                )
            }
            ).catch(o=>{
                console.error(o)
            }
            )
        }
          , k = ()=>{
            c.put(u + "/update", e.form).then(o=>{
                o.code === "200" ? (e.formVisible = !1,
                s()) : m.error(o.msg)
            }
            )
        }
          , w = o=>{
            y.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                type: "warning"
            }).then(t=>{
                c.delete(u + "/delete/" + o).then(n=>{
                    n.code === "200" ? (m.success("删除成功"),
                    s()) : m.error(n.msg)
                }
                )
            }
            ).catch(t=>{
                console.error(t)
            }
            )
        }
          , v = o=>{
            e.ids = o.map(t=>t.id)
        }
          , N = ()=>{
            if (!e.ids.length) {
                m.warning("请选择数据");
                return
            }
            y.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                type: "warning"
            }).then(o=>{
                c.delete(u + "/delete/batch", {
                    data: e.ids
                }).then(t=>{
                    t.code === "200" ? (m.success("操作成功"),
                    s()) : m.error(t.msg)
                }
                )
            }
            ).catch(o=>console.log(o))
        }
          , E = ()=>{
            e.form.id ? k() : C()
        }
          , S = ()=>{
            e.title = null,
            e.status = null,
            s()
        }
        ;
        return s(),
        (o,t)=>{
            const n = A
              , i = F
              , p = M
              , z = O
              , B = P
              , _ = R
              , D = G
              , U = $;
            return h(),
            b("div", null, [f("div", H, [l(n, {
                modelValue: e.title,
                "onUpdate:modelValue": t[0] || (t[0] = r=>e.title = r),
                "prefix-icon": "Search",
                placeholder: "请输入公告标题",
                style: {
                    width: "240px"
                }
            }, null, 8, ["modelValue"]), l(i, {
                type: "info",
                plain: "",
                style: {
                    "margin-left": "10px"
                },
                onClick: s
            }, {
                default: a(()=>[d("查询")]),
                _: 1
            }), l(i, {
                type: "warning",
                plain: "",
                style: {
                    "margin-left": "10px"
                },
                onClick: S
            }, {
                default: a(()=>[d("重置")]),
                _: 1
            })]), f("div", j, [l(i, {
                type: "primary",
                plain: "",
                onClick: V
            }, {
                default: a(()=>[d("新增")]),
                _: 1
            }), l(i, {
                type: "danger",
                plain: "",
                onClick: N
            }, {
                default: a(()=>[d("批量删除")]),
                _: 1
            })]), f("div", K, [l(z, {
                data: e.tableData,
                strip: "",
                onSelectionChange: v
            }, {
                default: a(()=>[l(p, {
                    type: "selection",
                    width: "55",
                    align: "center"
                }), l(p, {
                    prop: "title",
                    label: "公告标题"
                }), l(p, {
                    prop: "content",
                    label: "公告内容"
                }), l(p, {
                    prop: "createTime",
                    label: "创建时间"
                }), l(p, {
                    label: "操作",
                    align: "center",
                    width: "160",
                    fixed: "right"
                }, {
                    default: a(r=>[l(i, {
                        type: "primary",
                        plain: "",
                        onClick: q=>x(r.row)
                    }, {
                        default: a(()=>[d("编辑")]),
                        _: 2
                    }, 1032, ["onClick"]), l(i, {
                        type: "danger",
                        plain: "",
                        onClick: q=>w(r.row.id)
                    }, {
                        default: a(()=>[d("删除")]),
                        _: 2
                    }, 1032, ["onClick"])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["data"])]), e.total ? (h(),
            b("div", L, [l(B, {
                onCurrentChange: s,
                background: "",
                layout: "prev, pager, next",
                "page-size": e.pageSize,
                "current-page": e.pageNum,
                "onUpdate:currentPage": t[1] || (t[1] = r=>e.pageNum = r),
                total: e.total
            }, null, 8, ["page-size", "current-page", "total"])])) : T("", !0), l(U, {
                title: "公告信息",
                modelValue: e.formVisible,
                "onUpdate:modelValue": t[5] || (t[5] = r=>e.formVisible = r),
                width: "40%",
                "close-on-click-modal": !1,
                "destroy-on-close": ""
            }, {
                footer: a(()=>[f("span", Q, [l(i, {
                    onClick: t[4] || (t[4] = r=>e.formVisible = !1)
                }, {
                    default: a(()=>[d("取消")]),
                    _: 1
                }), l(i, {
                    type: "primary",
                    onClick: E
                }, {
                    default: a(()=>[d("保存")]),
                    _: 1
                })])]),
                default: a(()=>[l(D, {
                    model: e.form,
                    "label-width": "80px",
                    style: {
                        padding: "20px 30px"
                    },
                    ref_key: "formRef",
                    ref: g,
                    rules: e.rules
                }, {
                    default: a(()=>[l(_, {
                        label: "公告标题",
                        prop: "title"
                    }, {
                        default: a(()=>[l(n, {
                            modelValue: e.form.title,
                            "onUpdate:modelValue": t[2] || (t[2] = r=>e.form.title = r),
                            placeholder: "公告标题"
                        }, null, 8, ["modelValue"])]),
                        _: 1
                    }), l(_, {
                        label: "公告内容",
                        prop: "content"
                    }, {
                        default: a(()=>[l(n, {
                            modelValue: e.form.content,
                            "onUpdate:modelValue": t[3] || (t[3] = r=>e.form.content = r),
                            placeholder: "公告内容",
                            type: "textarea",
                            rows: "5",
                            "show-word-limit": "",
                            maxlength: "2000"
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
export {pe as default};

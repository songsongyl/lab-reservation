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
// import {r as c} from "./request-BE1UvMV5.js";
/* empty css                    */
//import {r as I, F as J, c as b, a as f, b as l, w as a, f as T, A as m, G as y, D as A, y as F, H as O, I as P, i as $, o as h, d, J as M, C as R, z as G} from "./index-HHlgu3jn.js";



function G(Y, Z, de, ae, fe) {
    const Se = b(Y, Z);
    if (Se)
        return Se;
    const j = Z === ga
        , X = Kl ? history.state : {};
    de && (ae || j ? a.replace(Y.fullPath, Vt({
        scroll: j && X && X.scroll
    }, fe)) : a.push(Y.fullPath, fe)),
        u.value = Y,
        q(Y, Z, de, j),
        D()
}
function R(Y) {
    return A(Y)
}

function M(e, t = sn, n) {
    if (!t || e._n)
        return e;
    const o = (...a) => {
        o._d && Bp(-1);
        const l = Su(t);
        let r;
        try {
            r = e(...a)
        } finally {
            Su(l),
                o._d && Bp(1)
        }
        return r
    }
        ;
    return o._n = !0,
        o._c = !0,
        o._d = !0,
        o
}
function d() {
    for (const p of l)
        p();
    l = [],
        window.removeEventListener("popstate", i),
        window.removeEventListener("beforeunload", f)
}
function h(a) {
    if (a.ep)
        return;
    a.ep = !0;
    const l = n(a);
    fetch(a.href, l)
}

function P() {
    return N && u.value !== ga ? Promise.resolve() : new Promise((Y, Z) => {
        F.add([Y, Z])
    }
    )
}

function O(Y, Z, de) {
    D(Y);
    const ae = B.list();
    return ae.length ? ae.forEach(fe => fe(Y, Z, de)) : console.error(Y),
        Promise.reject(Y)
}

function F(Y) {
    return !!t.getRecordMatcher(Y)
}
function A(Y) {
    return N || (N = !Y,
        K(),
        F.list().forEach(([Z, de]) => Y ? de(Y) : Z()),
        F.reset()),
        Y
}

function y() {
    A(),
        e.pauseOnHover || O()
}

function m(Y, Z) {
    const de = c = g(Y)
        , ae = u.value
        , fe = Y.state
        , Se = Y.force
        , j = Y.replace === !0
        , X = E(de);
    if (X)
        return A(Vt(w(X), {
            state: typeof X == "object" ? Vt({}, fe, X.state) : fe,
            force: Se,
            replace: j
        }), Z || de);
    const ce = de;
    ce.redirectedFrom = Z;
    let Ce;
    return !Se && j5(o, ae, de) && (Ce = fr(16, {
        to: ce,
        from: ae
    }),
        q(ae, ae, !0, !1)),
        (Ce ? Promise.resolve(Ce) : V(ce, ae)).catch(ue => Wo(ue) ? Wo(ue, 2) ? ue : D(ue) : H(ue, ce, ae)).then(ue => {
            if (ue) {
                if (Wo(ue, 2))
                    return A(Vt({
                        replace: j
                    }, w(ue.to), {
                        state: typeof ue.to == "object" ? Vt({}, fe, ue.to.state) : fe,
                        force: Se
                    }), Z || ce)
            } else
                ue = z(ce, ae, !0, j, fe);
            return R(ce, ae, ue),
                ue
        }
        )
}

function T() {
    const { history: p } = window;
    p.state && p.replaceState(Vt({}, p.state, {
        scroll: uc()
    }), "")
}
function a(Y) {
    return typeof Y == "string" ? ad(n, Y, u.value.path) : Vt({}, Y)
}
function l(Y, Z) {
    if (c !== Y)
        return fr(8, {
            from: Z,
            to: Y
        })
}
function f(f) {
    return o.get(f)
}
function b(p) {
    a.push(p);
    const h = () => {
        const m = a.indexOf(p);
        m > -1 && a.splice(m, 1)
    }
        ;
    return l.push(h),
        h
}
function J() {
    m.value = !1
}
function I(u, c) {
    const f = Vt({}, t.state, iv(a.value.back, u, a.value.forward, !0), c, {
        position: a.value.position
    });
    l(u, f, !0),
        o.value = u
}
function $(u, c) {
    const f = Vt({}, a.value, t.state, {
        forward: u,
        scroll: uc()
    });
    l(f.current, f, !0);
    const d = Vt({}, iv(o.value, u, null), {
        position: f.position + 1
    }, c);
    l(u, d, !1),
        o.value = u
}
// function M(e, t = sn, n) {
//     if (!t || e._n)
//         return e;
//     const o = (...a) => {
//         o._d && Bp(-1);
//         const l = Su(t);
//         let r;
//         try {
//             r = e(...a)
//         } finally {
//             Su(l),
//                 o._d && Bp(1)
//         }
//         return r
//     }
//         ;
//     return o._n = !0,
//         o._c = !0,
//         o._d = !0,
//         o
// }
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

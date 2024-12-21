/* empty css             */
/* empty css                  */
/* empty css               */
/* empty css              */
/* empty css               */
/* empty css                  */
import { _ as V, r as w, F as A, c as I, a as i, b as o, w as a, z as b, o as y, u, a5 as N, a6 as k, d as _, p as z, k as B, A as c, j as f, D as C, C as D, L as M, M as S, y as L } from "./index-HHlgu3jn.js";
import { r as R } from "./request-BE1UvMV5.js";
const g = r => (z("data-v-73923791"),
    r = r(),
    B(),
    r)
    , T = {
        class: "login-container"
    }
    , q = {
        class: "login-box"
    }
    , F = g(() => i("div", {
        style: {
            "font-weight": "bold",
            "font-size": "24px",
            "text-align": "center",
            "margin-bottom": "30px",
            color: "#516e60"
        }
    }, "高校实验室设备管理系统", -1))
    , H = g(() => i("div", {
        style: {
            "text-align": "right"
        }
    }, [_(" 还没有账号？请 "), i("a", {
        style: {
            color: "#516e60"
        },
        href: "/register"
    }, "注册")], -1))
    , U = {
        __name: "Login",
        setup(r) {
            const t = w({
                form: {
                    role: "TEACHER"
                },
                rules: {
                    username: [{
                        required: !0,
                        message: "请输入账号",
                        trigger: "blur"
                    }],
                    password: [{
                        required: !0,
                        message: "请输入密码",
                        trigger: "blur"
                    }]
                }
            })
                , m = A()
                , h = () => {
                    m.value.validate(s => {
                        s && R.post("/login", t.form).then(e => {
                            e.code === "200" ? (c.success("登录成功"),
                                localStorage.setItem("xm-user", JSON.stringify(e.data)),
                                e.data.role === "ADMIN" ? f.push("/manager/DataAnalysis") : (e.data.role === "TEACHER" || e.data.role === "LABADMIN") && f.push("/manager/teacherNotice")) : c.error(e.msg)
                        }
                        )
                    }
                    ).catch(s => {
                        console.error(s)
                    }
                    )
                }
                ;
            return (s, e) => {
                const p = C
                    , n = D
                    , d = M
                    , x = S
                    , E = L
                    , v = b;
                return y(),
                    I("div", T, [i("div", q, [F, o(v, {
                        model: t.form,
                        ref_key: "formRef",
                        ref: m,
                        rules: t.rules
                    }, {
                        default: a(() => [o(n, {
                            prop: "username"
                        }, {
                            default: a(() => [o(p, {
                                "prefix-icon": u(N),
                                size: "large",
                                modelValue: t.form.username,
                                "onUpdate:modelValue": e[0] || (e[0] = l => t.form.username = l),
                                placeholder: "请输入账号"
                            }, null, 8, ["prefix-icon", "modelValue"])]),
                            _: 1
                        }), o(n, {
                            prop: "password"
                        }, {
                            default: a(() => [o(p, {
                                "prefix-icon": u(k),
                                size: "large",
                                modelValue: t.form.password,
                                "onUpdate:modelValue": e[1] || (e[1] = l => t.form.password = l),
                                placeholder: "请输入密码",
                                "show-password": ""
                            }, null, 8, ["prefix-icon", "modelValue"])]),
                            _: 1
                        }), o(n, {
                            prop: "role"
                        }, {
                            default: a(() => [o(x, {
                                size: "large",
                                modelValue: t.form.role,
                                "onUpdate:modelValue": e[2] || (e[2] = l => t.form.role = l),
                                placeholder: "请选择角色"
                            }, {
                                default: a(() => [o(d, {
                                    label: "教师",
                                    value: "TEACHER"
                                }), o(d, {
                                    label: "实验室管理员",
                                    value: "LABADMIN"
                                }), o(d, {
                                    label: "超级管理员",
                                    value: "ADMIN"
                                })]),
                                _: 1
                            }, 8, ["modelValue"])]),
                            _: 1
                        }), o(n, null, {
                            default: a(() => [o(E, {
                                size: "large",
                                type: "primary",
                                style: {
                                    width: "100%"
                                },
                                onClick: h
                            }, {
                                default: a(() => [_("登 录")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["model", "rules"]), H])])
            }
        }
    }
    , X = V(U, [["__scopeId", "data-v-73923791"]]);
export { X as default };

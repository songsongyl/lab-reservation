/* empty css             */
/* empty css               */
/* empty css                */
/* empty css               */
/* empty css                */
/* empty css                  */
import { _ as S, r as q, c as w, a as n, b as t, w as e, d as a, e as m, u as c, f as p, E as j, g as U, h as H, i as T, o as i, t as A, j as u, p as $, k as L, l as F, m as G, n as J, q as x, s as O, v as P, x as W, y as X } from "./index-HHlgu3jn.js";
const K = "../images/高校实验室设备管理系统_files/logo-DHGvBcNW.png"
    , Q = "../images/高校实验室设备管理系统_files/avatar.png"
    , r = f => ($("data-v-02677b06"),
        f = f(),
        L(),
        f)
    , Y = {
        class: "manager-container"
    }
    , Z = {
        class: "manager-header"
    }
    , ee = r(() => n("div", {
        class: "manager-header-left"
    }, [n("img", {
        src: K,
        alt: ""
    }), n("div", {
        class: "title",
        style: {
            "font-size": "16px"
        }
    }, "实验室设备管理系统")], -1))
    , te = {
        class: "manager-header-center"
    }
    , ae = r(() => n("a", {
        style: {
            color: "#1a46ff"
        },
        target: "_blank",
        href: "https://www.javaxmsz.cn/projectDetail?id=67"
    }, "", -1))
    , ne = {
        class: "manager-header-right"
    }
    , oe = {
        style: {
            "padding-right": "20px",
            display: "flex",
            "align-items": "center"
        }
    }
    , le = ["src"]
    , se = {
        key: 1,
        src: Q,
        alt: "",
        style: {
            width: "40px",
            height: "40px",
            display: "block",
            "border-radius": "50%"
        }
    }
    , re = {
        style: {
            "margin-left": "5px"
        }
    }
    , de = {
        style: {
            display: "flex"
        }
    }
    , ie = {
        class: "manager-main-left"
    }
    , ue = r(() => n("span", null, "系统首页", -1))
    , _e = r(() => n("span", null, "信息管理", -1))
    , ce = r(() => n("span", null, "用户信息", -1))
    , me = r(() => n("span", null, "系统首页", -1))
    , pe = r(() => n("span", null, "信息管理", -1))
    , fe = r(() => n("span", null, "系统首页", -1))
    , ge = r(() => n("span", null, "信息管理", -1))
    , he = {
        class: "manager-main-right"
    }
    , xe = r(() => n("div", null, [(" 欢迎来到实验室预约管理系统 "), n("div", {
        style: {
            "font-size": "15px",
            "font-weight": "bold",
            color: "red",
            margin: "20px 0",
            "text-align": "center"
        }
    }[a(" 获取链接："), n("a", {
        target: "_blank",
        style: {
            color: "#2a60c9"
        },
        href: "https://www.javaxmsz.cn/projectDetail?id=67"
    }, "https://javaxmsz.cn")])], -1))
    , ve = {
        class: "dialog-footer"
    }
    , be = {
        __name: "Manager",
        setup(f) {
            const l = q({
                user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                fromVisible: !0
            })
                , I = () => {
                    localStorage.removeItem("user"),
                        u.push("/login")
                }
                , D = () => {
                    l.user = JSON.parse(localStorage.getItem("xm-user") || "{}")
                }
                ;
            return (ye, s) => {
                const k = F
                    , N = j
                    , g = G
                    , M = J
                    , V = U
                    , v = x("House")
                    , _ = O
                    , o = P
                    , b = x("Menu")
                    , h = W
                    , B = x("User")
                    , y = H
                    , C = x("router-view")
                    , R = X
                    , z = T;
                return i(),
                    w("div", Y, [n("div", Z, [ee, n("div", te, [t(N, {
                        "separator-class": "el-icon-arrow-right"
                    }, {
                        default: e(() => [t(k, {
                            to: "/manager/home"
                        }, {
                            default: e(() => [a("首页")]),
                            _: 1
                        }), t(k, null, {
                            default: e(() => [a(A(c(u).currentRoute.value.meta.name), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }), n("strong", {
                        style: {
                            "margin-left": "50px",
                            color: "red",
                            cursor: "pointer",
                            "font-size": "20px"
                        },
                        onClick: s[0] || (s[0] = d => l.fromVisible = !0)
                    }, [a(""), ae])]), n("div", ne, [t(V, {
                        style: {
                            cursor: "pointer",
                            "margin-left": "500px"
                        }
                    }, {
                        dropdown: e(() => [t(M, null, {
                            default: e(() => [l.user.role === "TEACHER" ? (i(),
                                m(g, {
                                    key: 0,
                                    onClick: s[1] || (s[1] = d => c(u).push("/manager/TeacherPerson"))
                                }, {
                                    default: e(() => [a("个人资料")]),
                                    _: 1
                                })) : p("", !0), l.user.role === "ADMIN" || l.user.role === "LABADMIN" ? (i(),
                                    m(g, {
                                        key: 1,
                                        onClick: s[2] || (s[2] = d => c(u).push("/manager/person"))
                                    }, {
                                        default: e(() => [a("个人资料")]),
                                        _: 1
                                    })) : p("", !0), t(g, {
                                        onClick: s[3] || (s[3] = d => c(u).push("/manager/password"))
                                    }, {
                                        default: e(() => [a("修改密码")]),
                                        _: 1
                                    }), t(g, {
                                        onClick: I
                                    }, {
                                        default: e(() => [a("退出登录")]),
                                        _: 1
                                    })]),
                            _: 1
                        })]),
                        default: e(() => {
                            var d, E;
                            return [n("div", oe, [l.user.avatar ? (i(),
                                w("img", {
                                    key: 0,
                                    src: (d = l.user) == null ? void 0 : d.avatar,
                                    alt: "",
                                    style: {
                                        width: "40px",
                                        height: "40px",
                                        display: "block",
                                        "border-radius": "50%"
                                    }
                                }, null, 8, le)) : (i(),
                                    w("img", se)), n("span", re, A((E = l.user) == null ? void 0 : E.name), 1)])]
                        }
                        ),
                        _: 1
                    })])]), n("div", de, [n("div", ie, [l.user.role === "ADMIN" ? (i(),
                        m(y, {
                            key: 0,
                            "default-active": c(u).currentRoute.value.path,
                            "default-openeds": ["/manager/home", "info", "user", "order", "apply"],
                            router: ""
                        }, {
                            default: e(() => [t(o, {
                                index: "/manager/DataAnalysis"
                            }, {
                                default: e(() => [t(_, null, {
                                    default: e(() => [t(v)]),
                                    _: 1
                                }), ue]),
                                _: 1
                            }), t(h, {
                                index: "info"
                            }, {
                                title: e(() => [t(_, null, {
                                    default: e(() => [t(b)]),
                                    _: 1
                                }), _e]),
                                default: e(() => [t(o, {
                                    index: "/manager/lab"
                                }, {
                                    default: e(() => [a("实验室信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/equipment"
                                }, {
                                    default: e(() => [a("实验室设备信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/equipmentApply"
                                }, {
                                    default: e(() => [a("设备使用申请信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/equipmentRepair"
                                }, {
                                    default: e(() => [a("设备维修申请信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/feedback"
                                }, {
                                    default: e(() => [a("反馈信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/college"
                                }, {
                                    default: e(() => [a("学院信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/notice"
                                }, {
                                    default: e(() => [a("公告信息")]),
                                    _: 1
                                })]),
                                _: 1
                            }), t(h, {
                                index: "user"
                            }, {
                                title: e(() => [t(_, null, {
                                    default: e(() => [t(B)]),
                                    _: 1
                                }), ce]),
                                default: e(() => [t(o, {
                                    index: "/manager/admin"
                                }, {
                                    default: e(() => [a("管理员信息")]),
                                    _: 1
                                }), t(o, {
                                    index: "/manager/teacher"
                                }, {
                                    default: e(() => [a("教师信息")]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["default-active"])) : p("", !0), l.user.role === "LABADMIN" ? (i(),
                            m(y, {
                                key: 1,
                                "default-active": c(u).currentRoute.value.path,
                                "default-openeds": ["/manager/home", "info", "user"],
                                router: ""
                            }, {
                                default: e(() => [t(o, {
                                    index: "/manager/teacherNotice"
                                }, {
                                    default: e(() => [t(_, null, {
                                        default: e(() => [t(v)]),
                                        _: 1
                                    }), me]),
                                    _: 1
                                }), t(h, {
                                    index: "info"
                                }, {
                                    title: e(() => [t(_, null, {
                                        default: e(() => [t(b)]),
                                        _: 1
                                    }), pe]),
                                    default: e(() => [t(o, {
                                        index: "/manager/labAdminLab"
                                    }, {
                                        default: e(() => [a("实验室信息")]),
                                        _: 1
                                    }), t(o, {
                                        index: "/manager/labAdminEquipment"
                                    }, {
                                        default: e(() => [a("实验室设备信息")]),
                                        _: 1
                                    }), t(o, {
                                        index: "/manager/labAdminEquipmentApply"
                                    }, {
                                        default: e(() => [a("设备使用申请")]),
                                        _: 1
                                    }), t(o, {
                                        index: "/manager/labAdminRepair"
                                    }, {
                                        default: e(() => [a("设备维修申请")]),
                                        _: 1
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }, 8, ["default-active"])) : p("", !0), l.user.role === "TEACHER" ? (i(),
                                m(y, {
                                    key: 2,
                                    "default-active": c(u).currentRoute.value.path,
                                    "default-openeds": ["/manager/home", "info", "user"],
                                    router: ""
                                }, {
                                    default: e(() => [t(o, {
                                        index: "/manager/teacherNotice"
                                    }, {
                                        default: e(() => [t(_, null, {
                                            default: e(() => [t(v)]),
                                            _: 1
                                        }), fe]),
                                        _: 1
                                    }), t(h, {
                                        index: "info"
                                    }, {
                                        title: e(() => [t(_, null, {
                                            default: e(() => [t(b)]),
                                            _: 1
                                        }), ge]),
                                        default: e(() => [t(o, {
                                            index: "/manager/teacherLab"
                                        }, {
                                            default: e(() => [a("实验室信息")]),
                                            _: 1
                                        }), t(o, {
                                            index: "/manager/teacherEquipment"
                                        }, {
                                            default: e(() => [a("实验室设备信息")]),
                                            _: 1
                                        }), t(o, {
                                            index: "/manager/teacherEquipmentApply"
                                        }, {
                                            default: e(() => [a("设备使用申请")]),
                                            _: 1
                                        }), t(o, {
                                            index: "/manager/TeacherRepair"
                                        }, {
                                            default: e(() => [a("设备维修申请")]),
                                            _: 1
                                        }), t(o, {
                                            index: "/manager/teacherFeedback"
                                        }, {
                                            default: e(() => [a("意见反馈")]),
                                            _: 1
                                        })]),
                                        _: 1
                                    })]),
                                    _: 1
                                }, 8, ["default-active"])) : p("", !0)]), n("div", he, [t(C, {
                                    onUpdateUser: D
                                })])]), t(z, {
                                    // title: "重要说明",
                                    modelValue: l.fromVisible,
                                    "onUpdate:modelValue": s[5] || (s[5] = d => l.fromVisible = d),
                                    width: "40%",
                                    "close-on-click-modal": !1,
                                    "destroy-on-close": ""
                                }, {
                                    footer: e(() => [n("span", ve, [t(R, {
                                        onClick: s[4] || (s[4] = d => l.fromVisible = !1)
                                    }, {
                                        default: e(() => [a("关 闭")]),
                                        _: 1
                                    })])]),
                                    default: e(() => [xe]),
                                    _: 1
                                }, 8, ["modelValue"])])
            }
        }
    }
    , Me = S(be, [["__scopeId", "data-v-02677b06"]]);
export { Me as default };

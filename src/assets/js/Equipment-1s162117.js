/* empty css             */
/* empty css               */
/* empty css                */
/* empty css                  */
/* empty css                     */
/* empty css              */
/* empty css                  */
/* empty css               */
/* empty css                 */
/* empty css                   */
/* empty css               */
/* empty css                     */
/* empty css                */
/* empty css                     */
import { T as oe, E as ae } from "./index.esm-2uwvHXJ2.js";
import { r as f } from "./request-BE1UvMV5.js";
/* empty css                    */
import { r as re, F as ne, P as de, Q as se, c as y, a as V, b as t, w as a, f as h, A as c, G as T, D as ue, M as ie, y as me, H as pe, I as fe, i as ce, o as s, N as k, O as C, e as g, d, u as x, L as ge, J as be, K as _e, R as Ve, C as ye, B as he, S as ve, T as we, U as Ie, V as Ue, z as ke } from "./index-HHlgu3jn.js";
const Ce = {
    class: "card",
    style: {
        "margin-bottom": "5px"
    }
}
    , xe = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , Ee = {
        class: "card",
        style: {
            "margin-bottom": "5px"
        }
    }
    , Ne = {
        key: 0,
        class: "card"
    }
    , qe = {
        style: {
            border: "1px solid #ccc",
            width: "100%"
        }
    }
    , Le = {
        class: "dialog-footer"
    }
    , Se = ["innerHTML"]
    , b = "/equipment"
    , A = "default"
    , Xe = {
        __name: "Equipment",
        setup(Te) {
            const B = "http://49.234.52.28:9098"
                , e = re({
                    user: JSON.parse(localStorage.getItem("xm-user") || "{}"),
                    tableData: [],
                    total: 0,
                    pageNum: 1,
                    pageSize: 10,
                    formVisible: !1,
                    form: {},
                    ids: [],
                    name: null,
                    status: null,
                    collegeId: null,
                    labList: [],
                    collegeList: [],
                    equipmentUseVisible: !1,
                    equipmentUse: null,
                    rules: {
                        name: [{
                            required: !0,
                            message: "请输入设备名称",
                            trigger: "blur"
                        }],
                        code: [{
                            required: !0,
                            message: "请输入设备编号",
                            trigger: "blur"
                        }]
                    }
                })
                , E = ne()
                , w = de()
                , N = {
                    MENU_CONF: {}
                }
                , p = () => {
                    f.get(b + "/selectPage", {
                        params: {
                            pageNum: e.pageNum,
                            pageSize: e.pageSize,
                            name: e.name,
                            status: e.status,
                            collegeId: e.collegeId
                        }
                    }).then(r => {
                        var o, u;
                        e.tableData = ((o = r.data) == null ? void 0 : o.list) || [],
                            e.total = (u = r.data) == null ? void 0 : u.total
                    }
                    )
                }
                , M = () => {
                    e.form = {},
                        e.form.status = "空闲中",
                        e.form.purchaseAmount = 1,
                        e.formVisible = !0
                }
                , D = r => {
                    e.form = JSON.parse(JSON.stringify(r));
                    let o = e.form.labId;
                    q(e.form.collegeId),
                        e.form.labId = o,
                        e.formVisible = !0
                }
                , O = () => {
                    E.value.validate(r => {
                        r && f.post(b + "/add", e.form).then(o => {
                            o.code === "200" ? (e.formVisible = !1,
                                p()) : c.error(o.msg)
                        }
                        )
                    }
                    ).catch(r => {
                        console.error(r)
                    }
                    )
                }
                , z = () => {
                    f.put(b + "/update", e.form).then(r => {
                        r.code === "200" ? (e.formVisible = !1,
                            p()) : c.error(r.msg)
                    }
                    )
                }
                , F = r => {
                    T.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(o => {
                        f.delete(b + "/delete/" + r).then(u => {
                            u.code === "200" ? (c.success("删除成功"),
                                p()) : c.error(u.msg)
                        }
                        )
                    }
                    ).catch(o => {
                        console.error(o)
                    }
                    )
                }
                , R = r => {
                    e.ids = r.map(o => o.id)
                }
                , P = () => {
                    if (!e.ids.length) {
                        c.warning("请选择数据");
                        return
                    }
                    T.confirm("删除后数据无法恢复，您确定删除吗?", "删除确认", {
                        type: "warning"
                    }).then(r => {
                        f.delete(b + "/delete/batch", {
                            data: e.ids
                        }).then(o => {
                            o.code === "200" ? (c.success("操作成功"),
                                p()) : c.error(o.msg)
                        }
                        )
                    }
                    ).catch(r => console.log(r))
                }
                , $ = () => {
                    e.form.id ? z() : O()
                }
                , J = r => {
                    e.form.equipmentImage = r.data
                }
                ;
            N.MENU_CONF.uploadImage = {
                server: "http://localhost:9090/files/wang/upload",
                fieldName: "file"
            },
                se(() => {
                    const r = w.value;
                    r != null && r.destroy()
                }
                );
            const Y = r => {
                w.value = r
            }
                , q = r => {
                    e.form.labId = null,
                        f.get(b + "/getAllLab/" + r).then(o => {
                            e.labList = o.data
                        }
                        )
                }
                , H = () => {
                    f.get(b + "/getAllCollege").then(r => {
                        e.collegeList = r.data
                    }
                    )
                }
                , G = r => {
                    e.equipmentUseVisible = !0,
                        e.equipmentUse = r
                }
                , K = () => {
                    e.name = null,
                        e.status = null,
                        e.collegeId = null,
                        p()
                }
                ;
            return H(),
                p(),
                (r, o) => {
                    const u = ue
                        , _ = ge
                        , v = ie
                        , m = me
                        , n = be
                        , Q = _e
                        , I = Ve
                        , j = pe
                        , W = fe
                        , i = ye
                        , X = he
                        , Z = ve
                        , ee = we
                        , U = Ie
                        , le = Ue
                        , te = ke
                        , L = ce;
                    return s(),
                        y("div", null, [V("div", Ce, [t(u, {
                            modelValue: e.name,
                            "onUpdate:modelValue": o[0] || (o[0] = l => e.name = l),
                            "prefix-icon": "Search",
                            placeholder: "请输入设备名称",
                            style: {
                                width: "240px"
                            }
                        }, null, 8, ["modelValue"]), t(v, {
                            modelValue: e.collegeId,
                            "onUpdate:modelValue": o[1] || (o[1] = l => e.collegeId = l),
                            placeholder: "请选择所属学院",
                            style: {
                                width: "240px",
                                "margin-left": "4px"
                            }
                        }, {
                            default: a(() => [(s(!0),
                                y(k, null, C(e.collegeList, l => (s(),
                                    g(_, {
                                        label: l.name,
                                        value: l.id
                                    }, null, 8, ["label", "value"]))), 256))]),
                            _: 1
                        }, 8, ["modelValue"]), t(v, {
                            modelValue: e.status,
                            "onUpdate:modelValue": o[2] || (o[2] = l => e.status = l),
                            placeholder: "请选择设备状态",
                            style: {
                                width: "240px",
                                "margin-left": "4px"
                            }
                        }, {
                            default: a(() => [t(_, {
                                label: "空闲中",
                                value: "空闲中"
                            }), t(_, {
                                label: "使用中",
                                value: "使用中"
                            }), t(_, {
                                label: "维修中",
                                value: "维修中"
                            })]),
                            _: 1
                        }, 8, ["modelValue"]), t(m, {
                            type: "info",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: p
                        }, {
                            default: a(() => [d("查询")]),
                            _: 1
                        }), t(m, {
                            type: "warning",
                            plain: "",
                            style: {
                                "margin-left": "10px"
                            },
                            onClick: K
                        }, {
                            default: a(() => [d("重置")]),
                            _: 1
                        })]), V("div", xe, [t(m, {
                            type: "primary",
                            plain: "",
                            onClick: M
                        }, {
                            default: a(() => [d("新增")]),
                            _: 1
                        }), t(m, {
                            type: "danger",
                            plain: "",
                            onClick: P
                        }, {
                            default: a(() => [d("批量删除")]),
                            _: 1
                        })]), V("div", Ee, [t(j, {
                            data: e.tableData,
                            strip: "",
                            onSelectionChange: R
                        }, {
                            default: a(() => [t(n, {
                                type: "selection",
                                width: "55",
                                align: "center"
                            }), t(n, {
                                prop: "equipmentImage",
                                label: "设备图片"
                            }, {
                                default: a(l => [l.row.equipmentImage ? (s(),
                                    g(Q, {
                                        key: 0,
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            display: "block"
                                        },
                                        src: l.row.equipmentImage,
                                        "preview-src-list": [l.row.equipmentImage],
                                        "preview-teleported": ""
                                    }, null, 8, ["src", "preview-src-list"])) : h("", !0)]),
                                _: 1
                            }), t(n, {
                                prop: "name",
                                label: "设备名称"
                            }), t(n, {
                                prop: "code",
                                label: "设备编号"
                            }), t(n, {
                                prop: "collegeName",
                                label: "所属学院"
                            }), t(n, {
                                prop: "labName",
                                label: "所属实验室"
                            }), t(n, {
                                prop: "introduce",
                                label: "设备使用介绍",
                                width: "120"
                            }, {
                                default: a(l => [t(m, {
                                    type: "primary",
                                    plain: "",
                                    onClick: S => G(l.row)
                                }, {
                                    default: a(() => [d("查看详情")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            }), t(n, {
                                prop: "manufacturer",
                                label: "生产厂商",
                                "show-overflow-tooltip": ""
                            }), t(n, {
                                prop: "purchaseAmount",
                                label: "采购金额(元)"
                            }), t(n, {
                                prop: "purchaseTime",
                                label: "采购日期",
                                width: "120"
                            }), t(n, {
                                prop: "purchaseLeader",
                                label: "采购负责人"
                            }), t(n, {
                                prop: "status",
                                label: "设备状态"
                            }, {
                                default: a(l => [l.row.status === "空闲中" ? (s(),
                                    g(I, {
                                        key: 0,
                                        type: "success"
                                    }, {
                                        default: a(() => [d("空闲中")]),
                                        _: 1
                                    })) : h("", !0), l.row.status === "使用中" ? (s(),
                                        g(I, {
                                            key: 1,
                                            type: "primary"
                                        }, {
                                            default: a(() => [d("使用中")]),
                                            _: 1
                                        })) : h("", !0), l.row.status === "维修中" ? (s(),
                                            g(I, {
                                                key: 2,
                                                type: "warning"
                                            }, {
                                                default: a(() => [d("维修中")]),
                                                _: 1
                                            })) : h("", !0)]),
                                _: 1
                            }), t(n, {
                                label: "操作",
                                align: "center",
                                width: "160",
                                fixed: "right"
                            }, {
                                default: a(l => [t(m, {
                                    type: "primary",
                                    plain: "",
                                    onClick: S => D(l.row)
                                }, {
                                    default: a(() => [d("编辑")]),
                                    _: 2
                                }, 1032, ["onClick"]), t(m, {
                                    type: "danger",
                                    plain: "",
                                    onClick: S => F(l.row.id)
                                }, {
                                    default: a(() => [d("删除")]),
                                    _: 2
                                }, 1032, ["onClick"])]),
                                _: 1
                            })]),
                            _: 1
                        }, 8, ["data"])]), e.total ? (s(),
                            y("div", Ne, [t(W, {
                                onCurrentChange: p,
                                background: "",
                                layout: "prev, pager, next",
                                "page-size": e.pageSize,
                                "current-page": e.pageNum,
                                "onUpdate:currentPage": o[3] || (o[3] = l => e.pageNum = l),
                                total: e.total
                            }, null, 8, ["page-size", "current-page", "total"])])) : h("", !0), t(L, {
                                title: "设备信息",
                                modelValue: e.formVisible,
                                "onUpdate:modelValue": o[16] || (o[16] = l => e.formVisible = l),
                                width: "50%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                footer: a(() => [V("span", Le, [t(m, {
                                    onClick: o[15] || (o[15] = l => e.formVisible = !1)
                                }, {
                                    default: a(() => [d("取消")]),
                                    _: 1
                                }), t(m, {
                                    type: "primary",
                                    onClick: $
                                }, {
                                    default: a(() => [d("保存")]),
                                    _: 1
                                })])]),
                                default: a(() => [t(te, {
                                    model: e.form,
                                    "label-width": "100px",
                                    style: {
                                        padding: "20px 30px"
                                    },
                                    ref_key: "formRef",
                                    ref: E,
                                    rules: e.rules
                                }, {
                                    default: a(() => [t(i, {
                                        label: "设备名称",
                                        prop: "name"
                                    }, {
                                        default: a(() => [t(u, {
                                            modelValue: e.form.name,
                                            "onUpdate:modelValue": o[4] || (o[4] = l => e.form.name = l),
                                            placeholder: "设备名称"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "设备编号",
                                        prop: "code"
                                    }, {
                                        default: a(() => [t(u, {
                                            modelValue: e.form.code,
                                            "onUpdate:modelValue": o[5] || (o[5] = l => e.form.code = l),
                                            placeholder: "设备编号"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "设备图片",
                                        prop: "equipmentImage"
                                    }, {
                                        default: a(() => [t(X, {
                                            action: x(B) + "/files/upload",
                                            "on-success": J,
                                            "list-type": "picture"
                                        }, {
                                            default: a(() => [t(m, {
                                                type: "primary"
                                            }, {
                                                default: a(() => [d("上传设备图片")]),
                                                _: 1
                                            })]),
                                            _: 1
                                        }, 8, ["action"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "所属学院",
                                        prop: "collegeId"
                                    }, {
                                        default: a(() => [t(v, {
                                            modelValue: e.form.collegeId,
                                            "onUpdate:modelValue": o[6] || (o[6] = l => e.form.collegeId = l),
                                            placeholder: "请选择所属学院",
                                            onChange: o[7] || (o[7] = l => q(e.form.collegeId))
                                        }, {
                                            default: a(() => [(s(!0),
                                                y(k, null, C(e.collegeList, l => (s(),
                                                    g(_, {
                                                        label: l.name,
                                                        value: l.id,
                                                        key: l.id
                                                    }, null, 8, ["label", "value"]))), 128))]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "所属实验室",
                                        prop: "labId"
                                    }, {
                                        default: a(() => [t(v, {
                                            modelValue: e.form.labId,
                                            "onUpdate:modelValue": o[8] || (o[8] = l => e.form.labId = l),
                                            placeholder: "请选择所属实验室"
                                        }, {
                                            default: a(() => [(s(!0),
                                                y(k, null, C(e.labList, l => (s(),
                                                    g(_, {
                                                        label: l.name,
                                                        value: l.id,
                                                        key: l.id
                                                    }, null, 8, ["label", "value"]))), 128))]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "生产厂商",
                                        prop: "manufacturer"
                                    }, {
                                        default: a(() => [t(u, {
                                            modelValue: e.form.manufacturer,
                                            "onUpdate:modelValue": o[9] || (o[9] = l => e.form.manufacturer = l),
                                            placeholder: "生产厂商"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "采购金额",
                                        prop: "purchaseAmount"
                                    }, {
                                        default: a(() => [t(Z, {
                                            modelValue: e.form.purchaseAmount,
                                            "onUpdate:modelValue": o[10] || (o[10] = l => e.form.purchaseAmount = l),
                                            min: 1,
                                            max: 1e10
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "采购日期",
                                        prop: "purchaseTime"
                                    }, {
                                        default: a(() => [t(ee, {
                                            modelValue: e.form.purchaseTime,
                                            "onUpdate:modelValue": o[11] || (o[11] = l => e.form.purchaseTime = l),
                                            type: "date",
                                            "value-format": "YYYY-MM-DD",
                                            placeholder: "采购日期",
                                            style: {
                                                width: "100%"
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "采购负责人",
                                        prop: "purchaseLeader"
                                    }, {
                                        default: a(() => [t(u, {
                                            modelValue: e.form.purchaseLeader,
                                            "onUpdate:modelValue": o[12] || (o[12] = l => e.form.purchaseLeader = l),
                                            placeholder: "采购负责人"
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "设备状态",
                                        prop: "status"
                                    }, {
                                        default: a(() => [t(le, {
                                            modelValue: e.form.status,
                                            "onUpdate:modelValue": o[13] || (o[13] = l => e.form.status = l)
                                        }, {
                                            default: a(() => [t(U, {
                                                label: "使用中",
                                                value: "使用中"
                                            }), t(U, {
                                                label: "空闲中",
                                                value: "空闲中"
                                            }), t(U, {
                                                label: "维修中",
                                                value: "维修中"
                                            })]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    }), t(i, {
                                        label: "使用介绍",
                                        prop: "introduce"
                                    }, {
                                        default: a(() => [V("div", qe, [t(x(oe), {
                                            style: {
                                                "border-bottom": "1px solid #ccc"
                                            },
                                            editor: w.value,
                                            mode: A
                                        }, null, 8, ["editor"]), t(x(ae), {
                                            style: {
                                                height: "500px",
                                                "overflow-y": "hidden"
                                            },
                                            modelValue: e.form.introduce,
                                            "onUpdate:modelValue": o[14] || (o[14] = l => e.form.introduce = l),
                                            mode: A,
                                            defaultConfig: N,
                                            onOnCreated: Y
                                        }, null, 8, ["modelValue"])])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }, 8, ["model", "rules"])]),
                                _: 1
                            }, 8, ["modelValue"]), t(L, {
                                title: "设备使用详情",
                                modelValue: e.equipmentUseVisible,
                                "onUpdate:modelValue": o[17] || (o[17] = l => e.equipmentUseVisible = l),
                                width: "40%",
                                "close-on-click-modal": !1,
                                "destroy-on-close": ""
                            }, {
                                default: a(() => {
                                    var l;
                                    return [V("div", {
                                        innerHTML: (l = e.equipmentUse) == null ? void 0 : l.introduce
                                    }, null, 8, Se)]
                                }
                                ),
                                _: 1
                            }, 8, ["modelValue"])])
                }
        }
    };
export { Xe as default };

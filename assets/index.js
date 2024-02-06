! function() {
    var t, i, s, a, r, n, o, l, h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        c = {},
        d = {},
        u = h.parcelRequire3852;
    null == u && ((u = function(t) {
        if (t in c) return c[t].exports;
        if (t in d) {
            var i = d[t];
            delete d[t];
            var s = {
                id: t,
                exports: {}
            };
            return c[t] = s, i.call(s.exports, s, s.exports), s.exports
        }
        var a = Error("Cannot find module '" + t + "'");
        throw a.code = "MODULE_NOT_FOUND", a
    }).register = function(t, i) {
        d[t] = i
    }, h.parcelRequire3852 = u), (0, u.register)("2EzGb", function(t, i) {
        var s, a;
        a =
            /**
             * import("./types/global")
             * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
             */
            function(t, i, s) {
                if (function() {
                        var i, s = {
                            lazyClass: "lazyload",
                            loadedClass: "lazyloaded",
                            loadingClass: "lazyloading",
                            preloadClass: "lazypreload",
                            errorClass: "lazyerror", //strictClass: 'lazystrict',
                            autosizesClass: "lazyautosizes",
                            fastLoadedClass: "ls-is-cached",
                            iframeLoadMode: 0,
                            srcAttr: "data-src",
                            srcsetAttr: "data-srcset",
                            sizesAttr: "data-sizes", //preloadAfterLoad: false,
                            minSize: 40,
                            customMedia: {},
                            init: !0,
                            expFactor: 1.5,
                            hFac: .8,
                            loadMode: 2,
                            loadHidden: !0,
                            ricTimeout: 0,
                            throttleDelay: 125
                        };
                        for (i in ei = t.lazySizesConfig || t.lazysizesConfig || {}, s) i in ei || (ei[i] = s[i])
                    }(), !i || !i.getElementsByClassName) return {
                    init: function() {},
                    /**
                     * @type { LazySizesConfigPartial }
                     */
                    cfg: ei,
                    /**
                     * @type { true }
                     */
                    noSupport: !0
                };
                var a, r, n, o, l, h, c, d, u, p, m, g, f, b, y, v, w, S, k, C, E, T, L, x, I, A, D, M, B, P, q, O, R, F, N, V, z, _, $, H, U, W, K, Y, X, j, G, Q, Z, J, ee, et,
                    /**
                     * @type { LazySizesConfigPartial }
                     */
                    ei, es = i.documentElement,
                    ea = t.HTMLPictureElement,
                    er = "addEventListener",
                    en = "getAttribute",
                    eo = t[er].bind(t),
                    el = t.setTimeout,
                    eh = t.requestAnimationFrame || el,
                    ec = t.requestIdleCallback,
                    ed = /^picture$/i,
                    eu = ["load", "error", "lazyincluded", "_lazyloaded"],
                    ep = {},
                    em = Array.prototype.forEach,
                    eg = function(t, i) {
                        return ep[i] || (ep[i] = RegExp("(\\s|^)" + i + "(\\s|$)")), ep[i].test(t[en]("class") || "") && ep[i]
                    },
                    ef = function(t, i) {
                        eg(t, i) || t.setAttribute("class", (t[en]("class") || "").trim() + " " + i)
                    },
                    eb = function(t, i) {
                        var s;
                        (s = eg(t, i)) && t.setAttribute("class", (t[en]("class") || "").replace(s, " "))
                    },
                    ey = function(t, i, s) {
                        var a = s ? er : "removeEventListener";
                        s && ey(t, i), eu.forEach(function(s) {
                            t[a](s, i)
                        })
                    },
                    ev = function(t, s, a, r, n) {
                        var o = i.createEvent("Event");
                        return a || (a = {}), a.instance = et, o.initEvent(s, !r, !n), o.detail = a, t.dispatchEvent(o), o
                    },
                    ew = function(i, s) {
                        var a;
                        !ea && (a = t.picturefill || ei.pf) ? (s && s.src && !i[en]("srcset") && i.setAttribute("srcset", s.src), a({
                            reevaluate: !0,
                            elements: [i]
                        })) : s && s.src && (i.src = s.src)
                    },
                    eS = function(t, i) {
                        return (getComputedStyle(t, null) || {})[i]
                    },
                    ek = function(t, i, s) {
                        for (s = s || t.offsetWidth; s < ei.minSize && i && !t._lazysizesWidth;) s = i.offsetWidth, i = i.parentNode;
                        return s
                    },
                    eC = (m = [], g = p = [], f = function() {
                        var t = g;
                        for (g = p.length ? m : p, d = !0, u = !1; t.length;) t.shift()();
                        d = !1
                    }, (b = function(t, s) {
                        d && !s ? t.apply(this, arguments) : (g.push(t), u || (u = !0, (i.hidden ? el : eh)(f)))
                    })._lsFlush = f, b),
                    eE = function(t, i) {
                        return i ? function() {
                            eC(t)
                        } : function() {
                            var i = this,
                                s = arguments;
                            eC(function() {
                                t.apply(i, s)
                            })
                        }
                    },
                    eT = function(t) {
                        var i, a, r = function() {
                                i = null, t()
                            },
                            n = function() {
                                var t = s.now() - a;
                                t < 99 ? el(n, 99 - t) : (ec || r)(r)
                            };
                        return function() {
                            a = s.now(), i || (i = el(n, 99))
                        }
                    },
                    eL = (D = /^img$/i, M = /^iframe$/i, B = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), P = 0, q = 0, O = -1, R = function(t) {
                        q--, t && !(q < 0) && t.target || (q = 0)
                    }, F = function(t) {
                        return null == A && (A = "hidden" == eS(i.body, "visibility")), A || !("hidden" == eS(t.parentNode, "visibility") && "hidden" == eS(t, "visibility"))
                    }, N = function(t, s) {
                        var a, r = t,
                            n = F(t);
                        for (T -= s, I += s, L -= s, x += s; n && (r = r.offsetParent) && r != i.body && r != es;)(n = (eS(r, "opacity") || 1) > 0) && "visible" != eS(r, "overflow") && (a = r.getBoundingClientRect(), n = x > a.left && L < a.right && I > a.top - 1 && T < a.bottom + 1);
                        return n
                    }, a = V = function() {
                        var t, s, a, r, n, o, l, h, c, d, u, p, m = et.elements;
                        if ((S = ei.loadMode) && q < 8 && (t = m.length)) {
                            for (s = 0, O++; s < t; s++)
                                if (m[s] && !m[s]._lazyRace) {
                                    if (!B || et.prematureUnveil && et.prematureUnveil(m[s])) {
                                        Y(m[s]);
                                        continue
                                    }
                                    if ((h = m[s][en]("data-expand")) && (o = 1 * h) || (o = P), d || (d = !ei.expand || ei.expand < 1 ? es.clientHeight > 500 && es.clientWidth > 500 ? 500 : 370 : ei.expand, et._defEx = d, u = d * ei.expFactor, p = ei.hFac, A = null, P < u && q < 1 && O > 2 && S > 2 && !i.hidden ? (P = u, O = 0) : P = S > 1 && O > 1 && q < 6 ? d : 0), c !== o && (C = innerWidth + o * p, E = innerHeight + o, l = -1 * o, c = o), (I = (a = m[s].getBoundingClientRect()).bottom) >= l && (T = a.top) <= E && (x = a.right) >= l * p && (L = a.left) <= C && (I || x || L || T) && (ei.loadHidden || F(m[s])) && (v && q < 3 && !h && (S < 3 || O < 4) || N(m[s], o))) {
                                        if (Y(m[s]), n = !0, q > 9) break
                                    } else !n && v && !r && q < 4 && O < 4 && S > 2 && (y[0] || ei.preloadAfterLoad) && (y[0] || !h && (I || x || L || T || "auto" != m[s][en](ei.sizesAttr))) && (r = y[0] || m[s])
                                }
                            r && !n && Y(r)
                        }
                    }, n = 0, o = ei.throttleDelay, l = ei.ricTimeout, h = function() {
                        r = !1, n = s.now(), a()
                    }, c = ec && l > 49 ? function() {
                        ec(h, {
                            timeout: l
                        }), l !== ei.ricTimeout && (l = ei.ricTimeout)
                    } : eE(function() {
                        el(h)
                    }, !0), z = function(t) {
                        var i;
                        (t = !0 === t) && (l = 33), r || (r = !0, (i = o - (s.now() - n)) < 0 && (i = 0), t || i < 9 ? c() : el(c, i))
                    }, $ = eE(_ = function(t) {
                        var i = t.target;
                        if (i._lazyCache) {
                            delete i._lazyCache;
                            return
                        }
                        R(t), ef(i, ei.loadedClass), eb(i, ei.loadingClass), ey(i, H), ev(i, "lazyloaded")
                    }), H = function(t) {
                        $({
                            target: t.target
                        })
                    }, U = function(t, i) {
                        var s = t.getAttribute("data-load-mode") || ei.iframeLoadMode; // loadMode can be also a string!
                        0 == s ? t.contentWindow.location.replace(i) : 1 == s && (t.src = i)
                    }, W = function(t) {
                        var i, s = t[en](ei.srcsetAttr);
                        (i = ei.customMedia[t[en]("data-media") || t[en]("media")]) && t.setAttribute("media", i), s && t.setAttribute("srcset", s)
                    }, K = eE(function(t, i, s, a, r) {
                        var n, o, l, h, c, d;
                        !(c = ev(t, "lazybeforeunveil", i)).defaultPrevented && (a && (s ? ef(t, ei.autosizesClass) : t.setAttribute("sizes", a)), o = t[en](ei.srcsetAttr), n = t[en](ei.srcAttr), r && (h = (l = t.parentNode) && ed.test(l.nodeName || "")), d = i.firesLoad || "src" in t && (o || n || h), c = {
                            target: t
                        }, ef(t, ei.loadingClass), d && (clearTimeout(w), w = el(R, 2500), ey(t, H, !0)), h && em.call(l.getElementsByTagName("source"), W), o ? t.setAttribute("srcset", o) : n && !h && (M.test(t.nodeName) ? U(t, n) : t.src = n), r && (o || h) && ew(t, {
                            src: n
                        })), t._lazyRace && delete t._lazyRace, eb(t, ei.lazyClass), eC(function() { // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
                            var i = t.complete && t.naturalWidth > 1;
                            (!d || i) && (i && ef(t, ei.fastLoadedClass), _(c), t._lazyCache = !0, el(function() {
                                "_lazyCache" in t && delete t._lazyCache
                            }, 9)), "lazy" == t.loading && q--
                        }, !0)
                    }), Y = function(t) {
                        if (!t._lazyRace) {
                            var i, s = D.test(t.nodeName),
                                a = s && (t[en](ei.sizesAttr) || t[en]("sizes")),
                                r = "auto" == a;
                            (r || !v) && s && (t[en]("src") || t.srcset) && !t.complete && !eg(t, ei.errorClass) && eg(t, ei.lazyClass) || (i = ev(t, "lazyunveilread").detail, r && ex.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, q++, K(t, i, r, a, s))
                        }
                    }, X = eT(function() {
                        ei.loadMode = 3, z()
                    }), j = function() {
                        3 == ei.loadMode && (ei.loadMode = 2), X()
                    }, G = function() {
                        if (!v) {
                            if (s.now() - k < 999) {
                                el(G, 999);
                                return
                            }
                            v = !0, ei.loadMode = 3, z(), eo("scroll", j, !0)
                        }
                    }, {
                        _: function() {
                            k = s.now(), et.elements = i.getElementsByClassName(ei.lazyClass), y = i.getElementsByClassName(ei.lazyClass + " " + ei.preloadClass), eo("scroll", z, !0), eo("resize", z, !0), eo("pageshow", function(t) {
                                    if (t.persisted) {
                                        var s = i.querySelectorAll("." + ei.loadingClass);
                                        s.length && s.forEach && eh(function() {
                                            s.forEach(function(t) {
                                                t.complete && Y(t)
                                            })
                                        })
                                    }
                                }), t.MutationObserver ? new MutationObserver(z).observe(es, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (es[er]("DOMNodeInserted", z, !0), es[er]("DOMAttrModified", z, !0), setInterval(z, 999)), eo("hashchange", z, !0), //, 'fullscreenchange'
                                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) {
                                    i[er](t, z, !0)
                                }), /d$|^c/.test(i.readyState) ? G() : (eo("load", G), i[er]("DOMContentLoaded", z), el(G, 2e4)), et.elements.length ? (V(), eC._lsFlush()) : z()
                        },
                        checkElems: z,
                        unveil: Y,
                        _aLSL: j
                    }),
                    ex = (Z = eE(function(t, i, s, a) {
                        var r, n, o;
                        if (t._lazysizesWidth = a, a += "px", t.setAttribute("sizes", a), ed.test(i.nodeName || ""))
                            for (n = 0, o = (r = i.getElementsByTagName("source")).length; n < o; n++) r[n].setAttribute("sizes", a);
                        s.detail.dataAttr || ew(t, s.detail)
                    }), J = function(t, i, s) {
                        var a, r = t.parentNode;
                        r && (s = ek(t, r, s), !(a = ev(t, "lazybeforesizes", {
                            width: s,
                            dataAttr: !!i
                        })).defaultPrevented && (s = a.detail.width) && s !== t._lazysizesWidth && Z(t, r, a, s))
                    }, {
                        _: function() {
                            Q = i.getElementsByClassName(ei.autosizesClass), eo("resize", ee)
                        },
                        checkElems: ee = eT(function() {
                            var t, i = Q.length;
                            if (i)
                                for (t = 0; t < i; t++) J(Q[t])
                        }),
                        updateElem: J
                    }),
                    eI = function() {
                        !eI.i && i.getElementsByClassName && (eI.i = !0, ex._(), eL._())
                    };
                return el(function() {
                    ei.init && eI()
                }), et = {
                    /**
                     * @type { LazySizesConfigPartial }
                     */
                    cfg: ei,
                    autoSizer: ex,
                    loader: eL,
                    init: eI,
                    uP: ew,
                    aC: ef,
                    rC: eb,
                    hC: eg,
                    fire: ev,
                    gW: ek,
                    rAF: eC
                }
            }(s = "undefined" != typeof window ? window : {}, s.document, Date), s.lazySizes = a, t.exports && (t.exports = a)
    }), u("2EzGb");
    var p = {};

    function m(t, i) {
        for (let s in i) {
            let a = i[s];
            t.addEventListener(s, a.listener || a, a.options || void 0)
        }
    }! function(t, i) {
        if (t) {
            var s = function() {
                i(t.lazySizes), t.removeEventListener("lazyunveilread", s, !0)
            };
            i = i.bind(null, t, t.document), p ? i(u("2EzGb")) : "function" == typeof define && define.amd ? define(["lazysizes"], i) : t.lazySizes ? s() : t.addEventListener("lazyunveilread", s, !0)
        }
    }("undefined" != typeof window ? window : 0, function(t, i, s) {
        if (t.addEventListener) {
            var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                r = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                n = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                o = /^picture$/i,
                l = s.cfg,
                h = {
                    getParent: function(i, s) {
                        var a = i,
                            r = i.parentNode;
                        return (!s || "prev" == s) && r && o.test(r.nodeName || "") && (r = r.parentNode), "self" != s && (a = "prev" == s ? i.previousElementSibling : s && (r.closest || t.jQuery) && (r.closest ? r.closest(s) : jQuery(r).closest(s)[0]) || r), a
                    },
                    getFit: function(t) {
                        var i, s, a = getComputedStyle(t, null) || {},
                            o = a.content || a.fontFamily,
                            l = {
                                fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
                            };
                        return !l.fit && o && (i = o.match(r)) && (l.fit = i[1]), l.fit ? (!(s = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && o && (i = o.match(n)) && (s = i[1]), l.parent = h.getParent(t, s)) : l.fit = a.objectFit, l
                    },
                    getImageRatio: function(i) {
                        var s, r, n, h, c, d, u, p = i.parentNode,
                            m = p && o.test(p.nodeName || "") ? p.querySelectorAll("source, img") : [i];
                        for (s = 0; s < m.length; s++)
                            if (r = (i = m[s]).getAttribute(l.srcsetAttr) || i.getAttribute("srcset") || i.getAttribute("data-pfsrcset") || i.getAttribute("data-risrcset") || "", n = i._lsMedia || i.getAttribute("media"), n = l.customMedia[i.getAttribute("data-media") || n] || n, r && (!n || (t.matchMedia && matchMedia(n) || {}).matches)) {
                                (h = parseFloat(i.getAttribute("data-aspectratio"))) || ((c = r.match(a)) ? "w" == c[2] ? (d = c[1], u = c[3]) : (d = c[3], u = c[1]) : (d = i.getAttribute("width"), u = i.getAttribute("height")), h = d / u);
                                break
                            }
                        return h
                    },
                    calculateSize: function(t, i) {
                        var s, a, r, n = this.getFit(t),
                            o = n.fit,
                            l = n.parent;
                        return "width" == o || ("contain" == o || "cover" == o) && (a = this.getImageRatio(t)) ? (l ? i = l.clientWidth : l = t, r = i, "width" == o ? r = i : (s = i / l.clientHeight) && ("cover" == o && s < a || "contain" == o && s > a) && (r = i * (a / s)), r) : i
                    }
                };
            s.parentFit = h, i.addEventListener("lazybeforesizes", function(t) {
                if (!t.defaultPrevented && t.detail.instance == s) {
                    var i = t.target;
                    t.detail.width = h.calculateSize(i, t.detail.width)
                }
            })
        }
    });
    let g = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
        f = /baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent),
        b = ["src", "poster"];

    function y(t, i) {
        for (let s of b) s in t.dataset && (t.setAttribute(s, t.dataset[s]), t.classList.contains(i) && t.classList.remove(i))
    }

    function v(t, i, s, a) {
        if ("VIDEO" == t.nodeName) {
            let s = Array.from(t.querySelectorAll("source"));
            for (let t of s) y(t, i);
            t.load()
        }
        y(t, i);
        let r = t.classList;
        r.contains(s) && (r.remove(s), r.add(a))
    }

    function w(t) {
        let i = t ?.lazyClass || "lazy",
            s = t ?.lazyBackgroundClass || "lazy-bg",
            a = t ?.lazyBackgroundLoaded || "lazy-bg-loaded",
            r = t ?.threshold || 200,
            n = t ?.events || {},
            o = t ?.observeChanges || !1,
            l = t ?.observeRootSelector || "body",
            h = t ?.mutationObserverOptions || {
                childList: !0,
                subtree: !0
            },
            c = `video.${i},.${s}`,
            d = Array.from(document.querySelectorAll(c));
        for (let t of d) m(t, n);
        if (!0 === g && !1 === f) {
            var u = new IntersectionObserver(t => {
                for (let r of t)
                    if (r.isIntersecting || r.intersectionRatio) {
                        let {
                            target: t
                        } = r;
                        v(t, i, s, a), u.unobserve(t), 0 === (d = d.filter(i => i != t)).length && !1 === o && u.disconnect()
                    }
            }, {
                rootMargin: `${r}px 0%`
            });
            for (let t of d) u.observe(t);
            o && new MutationObserver(() => {
                let t = document.querySelectorAll(c);
                for (let i of t) !1 === d.includes(i) && (d.push(i), m(i, n), !0 === g && !1 === f && u.observe(i))
            }).observe(document.querySelector(l), h)
        } else if (f)
            for (let t of d) v(t, i, s, a)
    }
    let S = {
            SECTION_LOAD: "shopify:section:load",
            SECTION_UNLOAD: "shopify:section:unload",
            SECTION_SELECT: "shopify:section:select",
            SECTION_DESELECT: "shopify:section:deselect",
            SECTION_REORDER: "shopify:section:reorder",
            BLOCK_SELECT: "shopify:block:select",
            BLOCK_DESELECT: "shopify:block:deselect"
        },
        k = {
            ARROW_LEFT_STRING_KEY: "ArrowLeft",
            ARROW_RIGHT_STRING_KEY: "ArrowRight",
            ARROW_LEFT_NUMBER_KEY: 37,
            ARROW_RIGHT_NUMBER_KEY: 39,
            ENTER_STRING_KEY: "Enter",
            ENTER_NUMBER_KEY: 13,
            ESCAPE_STRING_KEY: "Escape",
            ESCAPE_NUMBER_KEY: 27,
            TAB_STRING_KEY: "Tab",
            TAB_NUMBER_KEY: 9
        };
    var C = class {
        constructor() {
            this.listeners = {}
        }
        subscribe(t, i) {
            this.listeners[t] || (this.listeners[t] = []), document.addEventListener(S[t], i), this.listeners[t].push(i)
        }
        unsubscribe(t, i) {
            this.listeners[t] && (document.removeEventListener(S[t], i), this.listeners[t] = this.listeners[t].filter(t => t !== i))
        }
        destroy() {
            let t = Object.keys(this.listeners);
            t.forEach(t => {
                let i = this.listeners[t];
                i.forEach(i => {
                    this.unsubscribe(t, i)
                })
            }), this.listeners = {}
        }
    };
    let {
        Shopify: E
    } = window;
    class T extends HTMLElement {
        constructor() {
            super(), this.editor = new C, this.isEditorMode = E.designMode, this.listeners = {}
        }
        subscribe(t, i) {
            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(i)
        }
        unsubscribe(t, i) {
            this.listeners[t] && (this.listeners[t] = this.listeners[t].filter(t => t !== i))
        }
        emit(t, i) {
            this.listeners[t] && this.listeners[t].forEach(t => t(i))
        }
    }
    var L = T,
        x = class extends L {
            constructor() {
                super(), this.handleClick = t => {
                    let i = t.target,
                        s = i.hasAttribute("data-login-form-button");
                    if (s) {
                        let t = i.dataset.loginFormId || "";
                        this.setFormVisibleById(t), this.updateFocus()
                    }
                }, this.forms = [...this.querySelectorAll("[data-login-form]")]
            }
            connectedCallback() {
                this.updateFocus(), this.addEventListener("click", this.handleClick)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleClick)
            }
            setFormVisibleById(t) {
                this.forms.forEach(i => {
                    let s = i.getAttribute("data-login-form") === t;
                    i.classList.toggle("hidden", !s)
                })
            }
            updateFocus() {
                this.forms.forEach(t => {
                    let i = t.classList.contains("hidden"),
                        s = t.querySelector('[type="email"]');
                    !i && s && s.focus()
                })
            }
        };
    class I extends HTMLElement {
        constructor() {
            super(), this.handleWindowScroll = () => {
                this.updateButtonVisible()
            }, this.handleButtonClick = () => {
                this.scrollToTop()
            }, this.button = this.querySelector("[data-back-to-top-button]")
        }
        connectedCallback() {
            this.button && this.button.addEventListener("click", this.handleButtonClick), window.addEventListener("scroll", this.handleWindowScroll)
        }
        disconnectedCallback() {
            this.button && this.button.removeEventListener("click", this.handleButtonClick), window.removeEventListener("scroll", this.handleWindowScroll)
        }
        updateButtonVisible() {
            if (!this.button) return;
            let t = window.scrollY > window.innerHeight;
            this.button.toggleAttribute("visible", t)
        }
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }
    var A = class extends L {
        constructor() {
            super(), this.handleWindowScroll = () => {
                let t = document.querySelector(".shopify-section.shopify-section-header");
                if (t && this.button) {
                    let i = t.getBoundingClientRect(),
                        s = i.bottom + this.button.offsetHeight < 0;
                    this.button.toggleAttribute("visible", s)
                }
            }, this.button = this.querySelector("[data-cart-sticky-button]")
        }
        connectedCallback() {
            window.addEventListener("scroll", this.handleWindowScroll)
        }
        disconnectedCallback() {
            window.removeEventListener("scroll", this.handleWindowScroll)
        }
    };
    let D = t => {
            let i = t.slice(0, 1),
                s = t.slice(1);
            return i.toUpperCase() + s
        },
        M = t => new Promise((i, s) => {
            setTimeout(i, t)
        }),
        B = (t, i, s, a) => {
            if (!s || !t || !i) return;
            let r = `${a}EventListener`;
            t[r](i, s)
        },
        P = (t, i, s) => {
            B(t, i, s, "add")
        },
        q = (t, i, s) => {
            B(t, i, s, "remove")
        },
        O = new IntersectionObserver((t, i) => {
            t.forEach(t => {
                let i = t.isIntersecting,
                    s = t.target.closest('[aria-hidden="true"], .hidden');
                t.target.classList.toggle("is-in-viewport", i && !s)
            })
        }),
        R = () => ["button", "[href]", "[data-focus-trap-target]", "a", "[tabindex]"].map(t => `${t}:not([tabindex="-1"]):not([data-color-swatches-hidden-count]:empty)`).join(","),
        F = t => {
            let i = document.createElement("div");
            return i.classList.add("hidden"), document.body.appendChild(i), i.appendChild(t), i
        },
        N = t => {
            t.remove()
        },
        V = () => /apple/i.test(navigator.vendor),
        z = t => t === k.ENTER_NUMBER_KEY || t === k.ENTER_STRING_KEY,
        _ = t => t === k.ESCAPE_STRING_KEY || t === k.ESCAPE_NUMBER_KEY,
        $ = t => t === k.ARROW_RIGHT_NUMBER_KEY || t === k.ARROW_RIGHT_STRING_KEY,
        H = t => t === k.ARROW_LEFT_NUMBER_KEY || t === k.ARROW_LEFT_STRING_KEY,
        U = t => t === k.TAB_NUMBER_KEY || t === k.TAB_STRING_KEY,
        W = (t, i) => {
            let s = document.getElementById("Portal");
            s.appendChild(t);
            let a = i && i.appendChild ? i : document.body;
            a.appendChild(s)
        },
        K = t => {
            let i = 1e3 * parseFloat(t.transitionDuration),
                s = 1e3 * parseFloat(t.transitionDelay);
            return i + s
        },
        Y = t => !t.match(/^\//) && !t.includes(window.location.host),
        X = t => t === window.location.href,
        j = t => {
            let i = document.createElement("link");
            i.setAttribute("rel", "prefetch"), i.setAttribute("href", t), document.head.appendChild(i)
        },
        G = () => {
            let t = [],
                i = new IntersectionObserver(i => {
                    i.forEach(i => {
                        i.intersectionRatio <= 0 ? i.target.pause() : i.target.play(), t.find(t => t === i.target) || t.push(i.target)
                    })
                });
            return {
                observedVideos: t,
                observer: i
            }
        },
        Q = ({
            observedVideos: t,
            observer: i
        }) => {
            let s = Array.from(document.querySelectorAll("video[autoplay]")).filter(t => t.clientWidth > 0).filter(i => !t.find(t => t === i));
            s.length > 0 && s.forEach(t => {
                i.observe(t), t.play()
            })
        };
    var Z = class extends L {
            constructor() {
                super(), this.handleBlur = t => {
                    if (this.input) {
                        let i = t.target,
                            s = i.value || "0";
                        this.input.value = s, this.updateButtonsDisabled(), this.prevValue = s
                    }
                }, this.handleKeydown = t => {
                    if (this.input) {
                        let i = z(t.key || t.keyCode);
                        i && (t.preventDefault(), this.input.blur())
                    }
                }, this.handleInput = t => {
                    if (this.input) {
                        let i = t.target,
                            s = i.value;
                        this.input.value = this.isMoreThanStock ? this.stockValue : s, this.updateButtonsDisabled(), this.prevValue = s
                    }
                }, this.input = this.querySelector("[data-quantity-input]"), this.prevValue = this.value, this.stockValue = this.dataset.stock || "0"
            }
            connectedCallback() {
                this.updateButtonsDisabled(), this.input.addEventListener("keypress", this.handleKeydown), this.input.addEventListener("input", this.handleInput), this.input.addEventListener("blur", this.handleBlur)
            }
            disconnectedCallback() {
                this.input.removeEventListener("keypress", this.handleKeydown), this.input.removeEventListener("input", this.handleInput), this.input.removeEventListener("blur", this.handleBlur)
            }
            inputChange(t) {
                this.input && ("minus" === t ? this.input.stepDown() : this.input.stepUp(), +this.prevValue != +this.value && this.input.dispatchEvent(new Event("change", {
                    bubbles: !0
                })), this.updateButtonsDisabled())
            }
            updateButtonsDisabled() {
                this.updateButtonDisabled("minus", this.isLessThanMin), this.updateButtonDisabled("plus", this.isMoreThanStock)
            }
            setDisable(t) {
                this.updateButtonDisabled("minus", t), this.updateButtonDisabled("plus", t)
            }
            updateButtonDisabled(t, i) {
                let s = this.querySelector(`quantity-btn[data-action="${t}"]`);
                s && s.toggleAttribute("disabled", i)
            }
            get value() {
                return this.input ? this.input.value : "0"
            }
            get isLessThanMin() {
                return !!this.input && +this.value <= +this.input.min
            }
            get isMoreThanStock() {
                return +this.value >= +this.stockValue
            }
        },
        J = class extends L {
            constructor() {
                super(), this.handleButtonClick = t => {
                    t.preventDefault(), this.update()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode),
                        s = t.target;
                    i && !s.hasAttribute("disabled") && (t.preventDefault(), this.update())
                }, this.quantity = this.closest("quantity-component")
            }
            connectedCallback() {
                this.addEventListener("click", this.handleButtonClick), this.addEventListener("keydown", this.handleKeyDown)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleButtonClick), this.removeEventListener("keydown", this.handleKeyDown)
            }
            update() {
                let t = this.dataset.action;
                this.quantity && t && (this.quantity.inputChange(t), "minus" === t && this.setDisabled())
            }
            setDisabled() {
                if (this.quantity && this.quantity.input) {
                    let t = "1" === this.quantity.input.value;
                    this.toggleAttribute("disabled", t)
                }
            }
        },
        ee = class extends L {
            constructor() {
                super(), this.handleCloseButtonClick = () => {
                    this.hide()
                }, this.closeBtn = this.querySelector("[data-notification-close-button]"), this.alert = this.querySelector("[data-notification-alert]"), this.alertText = this.querySelector("[data-notification-alert-text]")
            }
            connectedCallback() {
                this.closeBtn && this.closeBtn.addEventListener("click", this.handleCloseButtonClick)
            }
            disconnectedCallback() {
                this.closeBtn && this.closeBtn.removeEventListener("click", this.handleCloseButtonClick)
            }
            show(t, i, s = 3e3) {
                this.setAlert(t, i || "warning"), this.showTimeoutId && clearTimeout(this.showTimeoutId), this.setVisible(!0), this.showTimeoutId = setTimeout(() => {
                    this.setVisible(!1)
                }, s)
            }
            hide() {
                this.setVisible(!1)
            }
            setVisible(t) {
                this.toggleAttribute("open", t)
            }
            setAlert(t, i) {
                this.alert && this.alertText && (this.alert.setAttribute("alert-type", i), this.alertText.innerHTML = t)
            }
        };
    let et = t => {
            t && t.classList.remove("hidden")
        },
        ei = t => {
            t && t.classList.add("hidden")
        },
        es = (t, i) => {
            let s = getComputedStyle(t),
                a = s[i];
            return a
        },
        ea = t => t.content.cloneNode(!0),
        er = t => t.content.firstElementChild.cloneNode(!0),
        en = (t, i) => {
            document.documentElement.style.setProperty(`--gsc-${t}`, i)
        },
        eo = (t, i) => {
            t && t.classList.toggle("forward-transition", i)
        },
        el = t => new DOMParser().parseFromString(t, "text/html");
    var eh = class extends L {
            constructor() {
                super(), this.handleTabNameClick = t => {
                    t.preventDefault();
                    let i = t.target;
                    i.dataset.id && this.selectTab(i.dataset.id)
                }, this.handleKeyDown = t => {
                    let i = t.target;
                    if (!i.dataset.id) return;
                    let s = z(t.key || t.keyCode);
                    s && (t.preventDefault(), this.selectTab(i.dataset.id))
                }, this.containerSelector = "[data-tabs-container]", this.templateSelector = "[data-tabs-elements-template]", this.tabSelector = "tab-component, tab-with-dynamic-height", this.tabNameSelector = "[data-tabs-name]", this.container = this.querySelector(this.containerSelector), this.template = this.querySelector(this.templateSelector), this.templateContent = ea(this.template), this.tabNames = [...this.querySelectorAll(this.tabNameSelector)], this.tabMap = this.generateTabMap()
            }
            connectedCallback() {
                this.tabNames.forEach(t => {
                    t.addEventListener("keydown", this.handleKeyDown), t.addEventListener("click", this.handleTabNameClick)
                })
            }
            disconnectedCallback() {
                this.tabNames.forEach(t => {
                    t.removeEventListener("keydown", this.handleKeyDown), t.removeEventListener("click", this.handleTabNameClick)
                })
            }
            generateTabMap() {
                let t = [this.querySelector(this.tabSelector), ...this.templateContent.querySelectorAll(this.tabSelector)],
                    i = t.reduce((t, i) => {
                        let s = i.dataset.id;
                        return s ? { ...t,
                            [s]: i
                        } : t
                    }, {});
                return i
            }
            selectTab(t) {
                this.updateNameById(t), this.setTabById(t), this.emit("selectTab", t)
            }
            unmountTab(t) {
                t.remove()
            }
            mountTab(t) {
                this.container && this.container.appendChild(t)
            }
            updateNameById(t) {
                this.tabNames.forEach(i => {
                    let s = t === i.getAttribute("data-id");
                    i.classList.toggle("selected", s)
                })
            }
            setTabById(t) {
                let i = this.tabMap[t],
                    s = this.tabMap[this.dataset.selectedTabId];
                s && i && (this.showNextTab(i), s !== i && this.hideCurrentTab(s))
            }
            showNextTab(t) {
                let i = t.getAttribute("data-id");
                i && (this.mountTab(t), t.show(), this.dataset.selectedTabId = i)
            }
            hideCurrentTab(t) {
                t.hide().then(() => {
                    this.unmountTab(t)
                })
            }
        },
        ec = class extends L {
            constructor() {
                super(), this.collapse = () => {
                    this.hideItems(), ei(this.collapseBtn), et(this.expandBtn)
                }, this.expand = () => {
                    this.initialHeight || this.setInitialHeight(), this.showItems(), this.tryHideExpandBtn(), et(this.collapseBtn), this.setMaxHeight()
                }, this.itemSelector = "[data-list-item]", this.expandBtnSelector = 'list-btn[data-trigger="expand"]', this.collapseBtnSelector = 'list-btn[data-trigger="collapse"]', this.visibleItemSelector = `${this.itemSelector}:not(.hidden)`, this.hiddenItemSelector = `${this.itemSelector}.hidden`, this.expandBtn = this.querySelector(this.expandBtnSelector), this.collapseBtn = this.querySelector(this.collapseBtnSelector), this.styles = getComputedStyle(this)
            }
            setInitialHeight() {
                this.initialHeight = this.offsetHeight, this.style.maxHeight = `${this.initialHeight}px`
            }
            setMaxHeight() {
                this.maxHeight = this.scrollHeight, this.style.maxHeight = `${this.maxHeight}px`
            }
            hideItems() {
                let t = this.querySelectorAll(this.visibleItemSelector);
                this.style.maxHeight = `${this.initialHeight}px`, setTimeout(() => {
                    t.forEach((t, i) => {
                        let s = this.dataset.initialCount ? +this.dataset.initialCount : 0;
                        i + 1 > +s && ei(t)
                    })
                }, K(this.styles))
            }
            showItems() {
                let t = this.querySelectorAll(this.hiddenItemSelector);
                t.forEach((t, i) => {
                    let s = this.dataset.showCount ? this.dataset.showCount : 0;
                    i + 1 < +s && et(t)
                }), this.style.maxHeight = `${this.maxHeight}px`
            }
            tryHideExpandBtn() {
                let t = this.querySelectorAll(this.hiddenItemSelector);
                0 === t.length && ei(this.expandBtn)
            }
        },
        ed = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            update() {
                let t = this.closest("list-component");
                t && ("collapse" === this.dataset.trigger ? t.collapse() : t.expand())
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.update()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.update())
                }
            }
        };
    let eu = Math.min,
        ep = Math.max,
        em = Math.round,
        eg = Math.floor,
        ef = t => ({
            x: t,
            y: t
        }),
        eb = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        ey = {
            start: "end",
            end: "start"
        };

    function ev(t, i) {
        return "function" == typeof t ? t(i) : t
    }

    function ew(t) {
        return t.split("-")[0]
    }

    function eS(t) {
        return t.split("-")[1]
    }

    function ek(t) {
        return "x" === t ? "y" : "x"
    }

    function eC(t) {
        return "y" === t ? "height" : "width"
    }

    function eE(t) {
        return ["top", "bottom"].includes(ew(t)) ? "y" : "x"
    }

    function eT(t) {
        return t.replace(/start|end/g, t => ey[t])
    }

    function eL(t) {
        return t.replace(/left|right|bottom|top/g, t => eb[t])
    }

    function ex(t) {
        return "number" != typeof t ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
        } : {
            top: t,
            right: t,
            bottom: t,
            left: t
        }
    }

    function eI(t) {
        return { ...t,
            top: t.y,
            left: t.x,
            right: t.x + t.width,
            bottom: t.y + t.height
        }
    }

    function eA(t, i, s) {
        let a, {
                reference: r,
                floating: n
            } = t,
            o = eE(i),
            l = ek(eE(i)),
            h = eC(l),
            c = ew(i),
            d = "y" === o,
            u = r.x + r.width / 2 - n.width / 2,
            p = r.y + r.height / 2 - n.height / 2,
            m = r[h] / 2 - n[h] / 2;
        switch (c) {
            case "top":
                a = {
                    x: u,
                    y: r.y - n.height
                };
                break;
            case "bottom":
                a = {
                    x: u,
                    y: r.y + r.height
                };
                break;
            case "right":
                a = {
                    x: r.x + r.width,
                    y: p
                };
                break;
            case "left":
                a = {
                    x: r.x - n.width,
                    y: p
                };
                break;
            default:
                a = {
                    x: r.x,
                    y: r.y
                }
        }
        switch (eS(i)) {
            case "start":
                a[l] -= m * (s && d ? -1 : 1);
                break;
            case "end":
                a[l] += m * (s && d ? -1 : 1)
        }
        return a
    }
    /**
     * Computes the `x` and `y` coordinates that will place the floating element
     * next to a reference element when it is given a certain positioning strategy.
     *
     * This export does not have any `platform` interface logic. You will need to
     * write one for the platform you are using Floating UI with.
     */
    let eD = async (t, i, s) => {
        let {
            placement: a = "bottom",
            strategy: r = "absolute",
            middleware: n = [],
            platform: o
        } = s, l = n.filter(Boolean), h = await (null == o.isRTL ? void 0 : o.isRTL(i)), c = await o.getElementRects({
            reference: t,
            floating: i,
            strategy: r
        }), {
            x: d,
            y: u
        } = eA(c, a, h), p = a, m = {}, g = 0;
        for (let s = 0; s < l.length; s++) {
            let {
                name: n,
                fn: f
            } = l[s], {
                x: b,
                y: y,
                data: v,
                reset: w
            } = await f({
                x: d,
                y: u,
                initialPlacement: a,
                placement: p,
                strategy: r,
                middlewareData: m,
                rects: c,
                platform: o,
                elements: {
                    reference: t,
                    floating: i
                }
            });
            if (d = null != b ? b : d, u = null != y ? y : u, m = { ...m,
                    [n]: { ...m[n],
                        ...v
                    }
                }, w && g <= 50) {
                g++, "object" == typeof w && (w.placement && (p = w.placement), w.rects && (c = !0 === w.rects ? await o.getElementRects({
                    reference: t,
                    floating: i,
                    strategy: r
                }) : w.rects), {
                    x: d,
                    y: u
                } = eA(c, p, h)), s = -1;
                continue
            }
        }
        return {
            x: d,
            y: u,
            placement: p,
            strategy: r,
            middlewareData: m
        }
    };
    /**
     * Resolves with an object of overflow side offsets that determine how much the
     * element is overflowing a given clipping boundary on each side.
     * - positive = overflowing the boundary by that number of pixels
     * - negative = how many pixels left before it will overflow
     * - 0 = lies flush with the boundary
     * @see https://floating-ui.com/docs/detectOverflow
     */
    async function eM(t, i) {
        var s;
        void 0 === i && (i = {});
        let {
            x: a,
            y: r,
            platform: n,
            rects: o,
            elements: l,
            strategy: h
        } = t, {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: u = "floating",
            altBoundary: p = !1,
            padding: m = 0
        } = ev(i, t), g = ex(m), f = l[p ? "floating" === u ? "reference" : "floating" : u], b = eI(await n.getClippingRect({
            element: null == (s = await (null == n.isElement ? void 0 : n.isElement(f))) || s ? f : f.contextElement || await (null == n.getDocumentElement ? void 0 : n.getDocumentElement(l.floating)),
            boundary: c,
            rootBoundary: d,
            strategy: h
        })), y = "floating" === u ? { ...o.floating,
            x: a,
            y: r
        } : o.reference, v = await (null == n.getOffsetParent ? void 0 : n.getOffsetParent(l.floating)), w = await (null == n.isElement ? void 0 : n.isElement(v)) && await (null == n.getScale ? void 0 : n.getScale(v)) || {
            x: 1,
            y: 1
        }, S = eI(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: y,
            offsetParent: v,
            strategy: h
        }) : y);
        return {
            top: (b.top - S.top + g.top) / w.y,
            bottom: (S.bottom - b.bottom + g.bottom) / w.y,
            left: (b.left - S.left + g.left) / w.x,
            right: (S.right - b.right + g.right) / w.x
        }
    }
    /**
     * Provides data to position an inner element of the floating element so that it
     * appears centered to the reference element.
     * @see https://floating-ui.com/docs/arrow
     */
    let eB = t => ({
            name: "arrow",
            options: t,
            async fn(i) {
                let {
                    x: s,
                    y: a,
                    placement: r,
                    rects: n,
                    platform: o,
                    elements: l,
                    middlewareData: h
                } = i, {
                    element: c,
                    padding: d = 0
                } = ev(t, i) || {};
                if (null == c) return {};
                let u = ex(d),
                    p = {
                        x: s,
                        y: a
                    },
                    m = ek(eE(r)),
                    g = eC(m),
                    f = await o.getDimensions(c),
                    b = "y" === m,
                    y = b ? "clientHeight" : "clientWidth",
                    v = n.reference[g] + n.reference[m] - p[m] - n.floating[g],
                    w = p[m] - n.reference[m],
                    S = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(c)),
                    k = S ? S[y] : 0; // DOM platform can return `window` as the `offsetParent`.
                k && await (null == o.isElement ? void 0 : o.isElement(S)) || (k = l.floating[y] || n.floating[g]); // If the padding is large enough that it causes the arrow to no longer be
                // centered, modify the padding so that it is centered.
                let C = k / 2 - f[g] / 2 - 1,
                    E = eu(u[b ? "top" : "left"], C),
                    T = eu(u[b ? "bottom" : "right"], C),
                    L = k - f[g] - T,
                    x = k / 2 - f[g] / 2 + (v / 2 - w / 2),
                    I = ep(E, eu(x, L)),
                    A = !h.arrow && null != eS(r) && x != I && n.reference[g] / 2 - (x < E ? E : T) - f[g] / 2 < 0,
                    D = A ? x < E ? x - E : x - L : 0;
                return {
                    [m]: p[m] + D,
                    data: {
                        [m]: I,
                        centerOffset: x - I - D,
                        ...A && {
                            alignmentOffset: D
                        }
                    },
                    reset: A
                }
            }
        }),
        eP = function(t) {
            return void 0 === t && (t = {}), {
                name: "flip",
                options: t,
                async fn(i) {
                    var s, a, r, n, o;
                    let {
                        placement: l,
                        middlewareData: h,
                        rects: c,
                        initialPlacement: d,
                        platform: u,
                        elements: p
                    } = i, {
                        mainAxis: m = !0,
                        crossAxis: g = !0,
                        fallbackPlacements: f,
                        fallbackStrategy: b = "bestFit",
                        fallbackAxisSideDirection: y = "none",
                        flipAlignment: v = !0,
                        ...w
                    } = ev(t, i); // If a reset by the arrow was caused due to an alignment offset being
                    // added, we should skip any logic now since `flip()` has already done its
                    // work.
                    // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
                    if (null != (s = h.arrow) && s.alignmentOffset) return {};
                    let S = ew(l),
                        k = ew(d) === d,
                        C = await (null == u.isRTL ? void 0 : u.isRTL(p.floating)),
                        E = f || (k || !v ? [eL(d)] : function(t) {
                            let i = eL(t);
                            return [eT(t), i, eT(i)]
                        }(d));
                    f || "none" === y || E.push(... function(t, i, s, a) {
                        let r = eS(t),
                            n = function(t, i, s) {
                                let a = ["left", "right"],
                                    r = ["right", "left"];
                                switch (t) {
                                    case "top":
                                    case "bottom":
                                        if (s) return i ? r : a;
                                        return i ? a : r;
                                    case "left":
                                    case "right":
                                        return i ? ["top", "bottom"] : ["bottom", "top"];
                                    default:
                                        return []
                                }
                            }(ew(t), "start" === s, a);
                        return r && (n = n.map(t => t + "-" + r), i && (n = n.concat(n.map(eT)))), n
                    }(d, v, y, C));
                    let T = [d, ...E],
                        L = await eM(i, w),
                        x = [],
                        I = (null == (a = h.flip) ? void 0 : a.overflows) || [];
                    if (m && x.push(L[S]), g) {
                        let t = function(t, i, s) {
                            void 0 === s && (s = !1);
                            let a = eS(t),
                                r = ek(eE(t)),
                                n = eC(r),
                                o = "x" === r ? a === (s ? "end" : "start") ? "right" : "left" : "start" === a ? "bottom" : "top";
                            return i.reference[n] > i.floating[n] && (o = eL(o)), [o, eL(o)]
                        }(l, c, C);
                        x.push(L[t[0]], L[t[1]])
                    } // One or more sides is overflowing.
                    if (I = [...I, {
                            placement: l,
                            overflows: x
                        }], !x.every(t => t <= 0)) {
                        let t = ((null == (r = h.flip) ? void 0 : r.index) || 0) + 1,
                            i = T[t];
                        if (i) return {
                            data: {
                                index: t,
                                overflows: I
                            },
                            reset: {
                                placement: i
                            }
                        }; // First, find the candidates that fit on the mainAxis side of overflow,
                        // then find the placement that fits the best on the main crossAxis side.
                        let s = null == (n = I.filter(t => t.overflows[0] <= 0).sort((t, i) => t.overflows[1] - i.overflows[1])[0]) ? void 0 : n.placement; // Otherwise fallback.
                        if (!s) switch (b) {
                            case "bestFit":
                                {
                                    let t = null == (o = I.map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, i) => t + i, 0)]).sort((t, i) => t[1] - i[1])[0]) ? void 0 : o[0];t && (s = t);
                                    break
                                }
                            case "initialPlacement":
                                s = d
                        }
                        if (l !== s) return {
                            reset: {
                                placement: s
                            }
                        }
                    }
                    return {}
                }
            }
        }; // For type backwards-compatibility, the `OffsetOptions` type was also
    // Derivable.
    async function eq(t, i) {
        let {
            placement: s,
            platform: a,
            elements: r
        } = t, n = await (null == a.isRTL ? void 0 : a.isRTL(r.floating)), o = ew(s), l = eS(s), h = "y" === eE(s), c = ["left", "top"].includes(o) ? -1 : 1, d = n && h ? -1 : 1, u = ev(i, t), {
            mainAxis: p,
            crossAxis: m,
            alignmentAxis: g
        } = "number" == typeof u ? {
            mainAxis: u,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: 0,
            crossAxis: 0,
            alignmentAxis: null,
            ...u
        };
        return l && "number" == typeof g && (m = "end" === l ? -1 * g : g), h ? {
            x: m * d,
            y: p * c
        } : {
            x: p * c,
            y: m * d
        }
    }
    /**
     * Modifies the placement by translating the floating element along the
     * specified axes.
     * A number (shorthand for `mainAxis` or distance), or an axes configuration
     * object may be passed.
     * @see https://floating-ui.com/docs/offset
     */
    let eO = function(t) {
            return void 0 === t && (t = 0), {
                name: "offset",
                options: t,
                async fn(i) {
                    let {
                        x: s,
                        y: a
                    } = i, r = await eq(i, t);
                    return {
                        x: s + r.x,
                        y: a + r.y,
                        data: r
                    }
                }
            }
        },
        eR = function(t) {
            return void 0 === t && (t = {}), {
                name: "shift",
                options: t,
                async fn(i) {
                    let {
                        x: s,
                        y: a,
                        placement: r
                    } = i, {
                        mainAxis: n = !0,
                        crossAxis: o = !1,
                        limiter: l = {
                            fn: t => {
                                let {
                                    x: i,
                                    y: s
                                } = t;
                                return {
                                    x: i,
                                    y: s
                                }
                            }
                        },
                        ...h
                    } = ev(t, i), c = {
                        x: s,
                        y: a
                    }, d = await eM(i, h), u = eE(ew(r)), p = ek(u), m = c[p], g = c[u];
                    if (n) {
                        let t = m + d["y" === p ? "top" : "left"],
                            i = m - d["y" === p ? "bottom" : "right"];
                        m = ep(t, eu(m, i))
                    }
                    if (o) {
                        let t = "y" === u ? "top" : "left",
                            i = "y" === u ? "bottom" : "right",
                            s = g + d[t],
                            a = g - d[i];
                        g = ep(s, eu(g, a))
                    }
                    let f = l.fn({ ...i,
                        [p]: m,
                        [u]: g
                    });
                    return { ...f,
                        data: {
                            x: f.x - s,
                            y: f.y - a
                        }
                    }
                }
            }
        };

    function eF(t) {
        return ez(t) ? (t.nodeName || "").toLowerCase() : "#document"
    }

    function eN(t) {
        var i;
        return (null == t ? void 0 : null == (i = t.ownerDocument) ? void 0 : i.defaultView) || window
    }

    function eV(t) {
        var i;
        return null == (i = (ez(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : i.documentElement
    }

    function ez(t) {
        return t instanceof Node || t instanceof eN(t).Node
    }

    function e_(t) {
        return t instanceof Element || t instanceof eN(t).Element
    }

    function e$(t) {
        return t instanceof HTMLElement || t instanceof eN(t).HTMLElement
    }

    function eH(t) {
        return ( // Browsers without `ShadowRoot` support.
            "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof eN(t).ShadowRoot))
    }

    function eU(t) {
        let {
            overflow: i,
            overflowX: s,
            overflowY: a,
            display: r
        } = eX(t);
        return /auto|scroll|overlay|hidden|clip/.test(i + a + s) && !["inline", "contents"].includes(r)
    }

    function eW(t) {
        let i = eK(),
            s = eX(t); // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        return "none" !== s.transform || "none" !== s.perspective || !!s.containerType && "normal" !== s.containerType || !i && !!s.backdropFilter && "none" !== s.backdropFilter || !i && !!s.filter && "none" !== s.filter || ["transform", "perspective", "filter"].some(t => (s.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some(t => (s.contain || "").includes(t))
    }

    function eK() {
        return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
    }

    function eY(t) {
        return ["html", "body", "#document"].includes(eF(t))
    }

    function eX(t) {
        return eN(t).getComputedStyle(t)
    }

    function ej(t) {
        return e_(t) ? {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        } : {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function eG(t) {
        if ("html" === eF(t)) return t;
        let i = t.assignedSlot || // DOM Element detected.
            t.parentNode || // ShadowRoot detected.
            eH(t) && t.host || // Fallback.
            eV(t);
        return eH(i) ? i.host : i
    }

    function eQ(t, i, s) {
        var a;
        void 0 === i && (i = []), void 0 === s && (s = !0);
        let r = function t(i) {
                let s = eG(i);
                return eY(s) ? i.ownerDocument ? i.ownerDocument.body : i.body : e$(s) && eU(s) ? s : t(s)
            }(t),
            n = r === (null == (a = t.ownerDocument) ? void 0 : a.body),
            o = eN(r);
        return n ? i.concat(o, o.visualViewport || [], eU(r) ? r : [], o.frameElement && s ? eQ(o.frameElement) : []) : i.concat(r, eQ(r, [], s))
    }

    function eZ(t) {
        let i = eX(t),
            s = parseFloat(i.width) || 0,
            a = parseFloat(i.height) || 0,
            r = e$(t),
            n = r ? t.offsetWidth : s,
            o = r ? t.offsetHeight : a,
            l = em(s) !== n || em(a) !== o;
        return l && (s = n, a = o), {
            width: s,
            height: a,
            $: l
        }
    }

    function eJ(t) {
        return e_(t) ? t : t.contextElement
    }

    function e0(t) {
        let i = eJ(t);
        if (!e$(i)) return ef(1);
        let s = i.getBoundingClientRect(),
            {
                width: a,
                height: r,
                $: n
            } = eZ(i),
            o = (n ? em(s.width) : s.width) / a,
            l = (n ? em(s.height) : s.height) / r;
        return o && Number.isFinite(o) || (o = 1), l && Number.isFinite(l) || (l = 1), {
            x: o,
            y: l
        }
    }
    let e1 = ef(0);

    function e2(t) {
        let i = eN(t);
        return eK() && i.visualViewport ? {
            x: i.visualViewport.offsetLeft,
            y: i.visualViewport.offsetTop
        } : e1
    }

    function e5(t, i, s, a) {
        var r;
        void 0 === i && (i = !1), void 0 === s && (s = !1);
        let n = t.getBoundingClientRect(),
            o = eJ(t),
            l = ef(1);
        i && (a ? e_(a) && (l = e0(a)) : l = e0(t));
        let h = (void 0 === (r = s) && (r = !1), a && (!r || a === eN(o)) && r) ? e2(o) : ef(0),
            c = (n.left + h.x) / l.x,
            d = (n.top + h.y) / l.y,
            u = n.width / l.x,
            p = n.height / l.y;
        if (o) {
            let t = eN(o),
                i = a && e_(a) ? eN(a) : a,
                s = t.frameElement;
            for (; s && a && i !== t;) {
                let t = e0(s),
                    i = s.getBoundingClientRect(),
                    a = eX(s),
                    r = i.left + (s.clientLeft + parseFloat(a.paddingLeft)) * t.x,
                    n = i.top + (s.clientTop + parseFloat(a.paddingTop)) * t.y;
                c *= t.x, d *= t.y, u *= t.x, p *= t.y, c += r, d += n, s = eN(s).frameElement
            }
        }
        return eI({
            width: u,
            height: p,
            x: c,
            y: d
        })
    }

    function e3(t) { // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        return e5(eV(t)).left + ej(t).scrollLeft
    }

    function e8(t, i, s) {
        let a;
        if ("viewport" === i) a = function(t, i) {
            let s = eN(t),
                a = eV(t),
                r = s.visualViewport,
                n = a.clientWidth,
                o = a.clientHeight,
                l = 0,
                h = 0;
            if (r) {
                n = r.width, o = r.height;
                let t = eK();
                (!t || t && "fixed" === i) && (l = r.offsetLeft, h = r.offsetTop)
            }
            return {
                width: n,
                height: o,
                x: l,
                y: h
            }
        }(t, s);
        else if ("document" === i) a = // Gets the entire size of the scrollable document area, even extending outside
            // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
            function(t) {
                let i = eV(t),
                    s = ej(t),
                    a = t.ownerDocument.body,
                    r = ep(i.scrollWidth, i.clientWidth, a.scrollWidth, a.clientWidth),
                    n = ep(i.scrollHeight, i.clientHeight, a.scrollHeight, a.clientHeight),
                    o = -s.scrollLeft + e3(t),
                    l = -s.scrollTop;
                return "rtl" === eX(a).direction && (o += ep(i.clientWidth, a.clientWidth) - r), {
                    width: r,
                    height: n,
                    x: o,
                    y: l
                }
            }(eV(t));
        else if (e_(i)) a = // Returns the inner client rect, subtracting scrollbars if present.
            function(t, i) {
                let s = e5(t, !0, "fixed" === i),
                    a = s.top + t.clientTop,
                    r = s.left + t.clientLeft,
                    n = e$(t) ? e0(t) : ef(1),
                    o = t.clientWidth * n.x,
                    l = t.clientHeight * n.y,
                    h = r * n.x,
                    c = a * n.y;
                return {
                    width: o,
                    height: l,
                    x: h,
                    y: c
                }
            }(i, s);
        else {
            let s = e2(t);
            a = { ...i,
                x: i.x - s.x,
                y: i.y - s.y
            }
        }
        return eI(a)
    }

    function e9(t, i) {
        return e$(t) && "fixed" !== eX(t).position ? i ? i(t) : t.offsetParent : null
    } // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.
    function e6(t, i) {
        let s = eN(t);
        if (!e$(t)) return s;
        let a = e9(t, i);
        for (; a && ["table", "td", "th"].includes(eF(a)) && "static" === eX(a).position;) a = e9(a, i);
        return a && ("html" === eF(a) || "body" === eF(a) && "static" === eX(a).position && !eW(a)) ? s : a || function(t) {
            let i = eG(t);
            for (; e$(i) && !eY(i);) {
                if (eW(i)) return i;
                i = eG(i)
            }
            return null
        }(t) || s
    }
    let e4 = async function(t) {
            let {
                reference: i,
                floating: s,
                strategy: a
            } = t, r = this.getOffsetParent || e6, n = this.getDimensions;
            return {
                reference: function(t, i, s) {
                    let a = e$(i),
                        r = eV(i),
                        n = "fixed" === s,
                        o = e5(t, !0, n, i),
                        l = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        h = ef(0);
                    if (a || !a && !n) {
                        if (("body" !== eF(i) || eU(r)) && (l = ej(i)), a) {
                            let t = e5(i, !0, n, i);
                            h.x = t.x + i.clientLeft, h.y = t.y + i.clientTop
                        } else r && (h.x = e3(r))
                    }
                    return {
                        x: o.left + l.scrollLeft - h.x,
                        y: o.top + l.scrollTop - h.y,
                        width: o.width,
                        height: o.height
                    }
                }(i, await r(s), a),
                floating: {
                    x: 0,
                    y: 0,
                    ...await n(s)
                }
            }
        },
        e7 = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                let {
                    rect: i,
                    offsetParent: s,
                    strategy: a
                } = t, r = e$(s), n = eV(s);
                if (s === n) return i;
                let o = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    l = ef(1),
                    h = ef(0);
                if ((r || !r && "fixed" !== a) && (("body" !== eF(s) || eU(n)) && (o = ej(s)), e$(s))) {
                    let t = e5(s);
                    l = e0(s), h.x = t.x + s.clientLeft, h.y = t.y + s.clientTop
                }
                return {
                    width: i.width * l.x,
                    height: i.height * l.y,
                    x: i.x * l.x - o.scrollLeft * l.x + h.x,
                    y: i.y * l.y - o.scrollTop * l.y + h.y
                }
            },
            getDocumentElement: eV,
            getClippingRect: // Gets the maximum area that the element is visible in due to any number of
                // clipping ancestors.
                function(t) {
                    let {
                        element: i,
                        boundary: s,
                        rootBoundary: a,
                        strategy: r
                    } = t, n = "clippingAncestors" === s ? // A "clipping ancestor" is an `overflow` element with the characteristic of
                        // clipping (or hiding) child elements. This returns all clipping ancestors
                        // of the given element up the tree.
                        function(t, i) {
                            let s = i.get(t);
                            if (s) return s;
                            let a = eQ(t, [], !1).filter(t => e_(t) && "body" !== eF(t)),
                                r = null,
                                n = "fixed" === eX(t).position,
                                o = n ? eG(t) : t; // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
                            for (; e_(o) && !eY(o);) {
                                let i = eX(o),
                                    s = eW(o);
                                s || "fixed" !== i.position || (r = null);
                                let l = n ? !s && !r : !s && "static" === i.position && !!r && ["absolute", "fixed"].includes(r.position) || eU(o) && !s && function t(i, s) {
                                    let a = eG(i);
                                    return !(a === s || !e_(a) || eY(a)) && ("fixed" === eX(a).position || t(a, s))
                                }(t, o);
                                l ? a = a.filter(t => t !== o) : r = i, o = eG(o)
                            }
                            return i.set(t, a), a
                        }(i, this._c) : [].concat(s), o = [...n, a], l = o[0], h = o.reduce((t, s) => {
                            let a = e8(i, s, r);
                            return t.top = ep(a.top, t.top), t.right = eu(a.right, t.right), t.bottom = eu(a.bottom, t.bottom), t.left = ep(a.left, t.left), t
                        }, e8(i, l, r));
                    return {
                        width: h.right - h.left,
                        height: h.bottom - h.top,
                        x: h.left,
                        y: h.top
                    }
                },
            getOffsetParent: e6,
            getElementRects: e4,
            getClientRects: function(t) {
                return Array.from(t.getClientRects())
            },
            getDimensions: function(t) {
                return eZ(t)
            },
            getScale: e0,
            isElement: e_,
            isRTL: function(t) {
                return "rtl" === eX(t).direction
            }
        };
    /**
     * Automatically updates the position of the floating element when necessary.
     * Should only be called when the floating element is mounted on the DOM or
     * visible on the screen.
     * @returns cleanup function that should be invoked when the floating element is
     * removed from the DOM or hidden from the screen.
     * @see https://floating-ui.com/docs/autoUpdate
     */
    function te(t, i, s, a) {
        let r;
        void 0 === a && (a = {});
        let {
            ancestorScroll: n = !0,
            ancestorResize: o = !0,
            elementResize: l = "function" == typeof ResizeObserver,
            layoutShift: h = "function" == typeof IntersectionObserver,
            animationFrame: c = !1
        } = a, d = eJ(t), u = n || o ? [...d ? eQ(d) : [], ...eQ(i)] : [];
        u.forEach(t => {
            n && t.addEventListener("scroll", s, {
                passive: !0
            }), o && t.addEventListener("resize", s)
        });
        let p = d && h ? // https://samthor.au/2021/observing-dom/
            function(t, i) {
                let s, a = null,
                    r = eV(t);

                function n() {
                    clearTimeout(s), a && a.disconnect(), a = null
                }
                return ! function o(l, h) {
                    void 0 === l && (l = !1), void 0 === h && (h = 1), n();
                    let {
                        left: c,
                        top: d,
                        width: u,
                        height: p
                    } = t.getBoundingClientRect();
                    if (l || i(), !u || !p) return;
                    let m = eg(d),
                        g = eg(r.clientWidth - (c + u)),
                        f = eg(r.clientHeight - (d + p)),
                        b = eg(c),
                        y = {
                            rootMargin: -m + "px " + -g + "px " + -f + "px " + -b + "px",
                            threshold: ep(0, eu(1, h)) || 1
                        },
                        v = !0;

                    function w(t) {
                        let i = t[0].intersectionRatio;
                        if (i !== h) {
                            if (!v) return o();
                            i ? o(!1, i) : s = setTimeout(() => {
                                o(!1, 1e-7)
                            }, 100)
                        }
                        v = !1
                    } // Older browsers don't support a `document` as the root and will throw an
                    // error.
                    try {
                        a = new IntersectionObserver(w, { ...y, // Handle <iframe>s
                            root: r.ownerDocument
                        })
                    } catch (t) {
                        a = new IntersectionObserver(w, y)
                    }
                    a.observe(t)
                }(!0), n
            }(d, s) : null,
            m = -1,
            g = null;
        l && (g = new ResizeObserver(t => {
            let [a] = t;
            a && a.target === d && g && ( // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                g.unobserve(i), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                    g && g.observe(i)
                })), s()
        }), d && !c && g.observe(d), g.observe(i));
        let f = c ? e5(t) : null;
        return c && function i() {
            let a = e5(t);
            f && (a.x !== f.x || a.y !== f.y || a.width !== f.width || a.height !== f.height) && s(), f = a, r = requestAnimationFrame(i)
        }(), s(), () => {
            u.forEach(t => {
                n && t.removeEventListener("scroll", s), o && t.removeEventListener("resize", s)
            }), p && p(), g && g.disconnect(), g = null, c && cancelAnimationFrame(r)
        }
    }
    /**
     * Computes the `x` and `y` coordinates that will place the floating element
     * next to a reference element when it is given a certain CSS positioning
     * strategy.
     */
    let tt = (t, i, s) => { // This caches the expensive `getClippingElementAncestors` function so that
        // multiple lifecycle resets re-use the same result. It only lives for a
        // single call. If other functions become expensive, we can add them as well.
        let a = new Map,
            r = {
                platform: e7,
                ...s
            },
            n = { ...r.platform,
                _c: a
            };
        return eD(t, i, { ...r,
            platform: n
        })
    };
    var ti = class extends L {
            constructor() {
                super(), this.setCollectionPage = t => {
                    if (t) {
                        let i = JSON.parse(t);
                        this.collectionLink && (this.collectionLink.href = i.url, this.collectionLink.ariaLabel = i.title, this.collectionLink.textContent = i.title)
                    }
                }, this.collectionLink = this.querySelector("[data-collection-link]")
            }
        },
        ts = class {
            constructor(t) {
                this.notification = t
            }
            show(t, i, s = 3e3) {
                this.notification.show(t, i, s)
            }
        };
    let ta = new class {
        constructor() {
            this.handleWindowScroll = () => {
                this.timeoutScrollId && (clearTimeout(this.timeoutScrollId), this.isScrolling = !0), this.timeoutScrollId = setTimeout(() => {
                    this.isScrolling = !1
                }, 300)
            }, this.setBreadcrumbs = () => {
                let t = document.querySelectorAll("product-breadcrumbs");
                if (t.length) {
                    let i = localStorage.getItem("prevCollectionPage");
                    t.forEach(t => {
                        t.setCollectionPage(i)
                    }), localStorage.removeItem("prevCollectionPage")
                }
            }, this.showRegistrationMessage = () => {
                let t = window.auroraThemeLocales.registrationMessage;
                customElements.whenDefined("notification-component").then(() => {
                    this.notification.show(t, "success", 1e4), localStorage.removeItem("isRegistered")
                })
            }, this.handleLinkOver = t => {
                let i = t.target ?.closest("a[href]"),
                    s = i ?.href;
                if (!s) return;
                let a = this.prefetchedLinks.includes(s),
                    r = Y(s) || X(s);
                a || r || (j(s), this.prefetchedLinks.push(s))
            };
            let t = document.getElementById("GlobalNotification");
            t && (this.notification = new ts(t)), this.isScrolling = !1, this.overlayId = "BodyOverlay", window.addEventListener("wheel", this.handleWindowScroll), this.overlayCalls = [], window.location.pathname.includes("products") && (customElements.define("product-breadcrumbs", ti), this.setBreadcrumbs());
            let i = window.location.pathname.includes("challenge"),
                s = window.location.pathname.includes("account");
            !i && !s && localStorage.getItem("isRegistered") && this.showRegistrationMessage(), this.prefetchedLinks = [], document.addEventListener("mouseover", this.handleLinkOver)
        }
        showOverlay(t, i) {
            let s = document.getElementById(this.overlayId);
            s && (this.overlayCalls = [...this.overlayCalls, {
                key: t,
                styles: i
            }], this.setBodyOverlayStyles({
                zIndex: 3,
                backgroundColor: "var(--gsc-black-color-50)",
                ...i
            }), s.setAttribute("visible", ""), this.setScrollLock())
        }
        hideOverlay(t) {
            let i = document.getElementById(this.overlayId);
            if (!i) return;
            let s = i.hasAttribute("visible");
            if (!s) return;
            this.overlayCalls = this.overlayCalls.filter(i => i.key !== t);
            let a = this.overlayCalls[this.overlayCalls.length - 1];
            a ? this.setBodyOverlayStyles(a.styles) : (i.removeAttribute("visible"), i.setAttribute("style", ""), this.unsetScrollLock())
        }
        setScrollLock() {
            document.body.style.top = `-${window.scrollY||Math.abs(parseInt(document.body.style.top||"0"))}px`, document.body.setAttribute("scroll-y-off", "")
        }
        unsetScrollLock() {
            let t = document.body.style.top;
            document.body.removeAttribute("scroll-y-off"), document.body.style.top = "", window.scrollTo(0, -1 * parseInt(t || "0"))
        }
        setBodyOverlayStyles(t) {
            let i = document.getElementById(this.overlayId);
            if (i && t) {
                let s = Object.keys(t);
                s.forEach(s => {
                    i.style[s] = t[s]
                })
            }
        }
        get isFixed() {
            return document.body.hasAttribute("scroll-y-off")
        }
    };
    var tr = class extends L {
        constructor() {
            super(), this.handleScroll = () => {
                "tooltip" === this.type && (this.hide(), window.removeEventListener("wheel", this.handleScroll))
            }, this.handleBlockSelect = t => {
                if (this.dataset.sectionId === t.detail.sectionId) {
                    let i = this.element.querySelector(`[block-id="${t.detail.blockId}"]`),
                        s = this.getAttribute("block-id"),
                        a = s === t.detail.blockId || i;
                    a && (this.btn ? this.btn.trigger() : this.hide())
                }
            }, this.handleBlockDeselect = t => {
                if (this.dataset.sectionId === t.detail.sectionId) {
                    let i = this.element.querySelector(`[block-id="${t.detail.blockId}"]`),
                        s = this.getAttribute("block-id"),
                        a = s === t.detail.blockId || i;
                    a && this.hide()
                }
            }, this.init = () => {
                let t = document.getElementById(this.dataset.floatingElementId) || this.btn;
                t && te(t, this, () => {
                    tt(t, this, this.getOptions()).then(t => {
                        this.dataset.placement !== t.placement && (this.dataset.placement = t.placement), this.updatePosition(t), this.arrow && this.updateArrow(t)
                    })
                })
            }, this.show = () => {
                if ("tooltip" === this.type && ta.isScrolling) return;
                let t = this.element.querySelectorAll("video");
                t.forEach(t => {
                    t.play()
                }), this.mount(), this.setVisible(!0), this.emit("show", {}), window.addEventListener("wheel", this.handleScroll)
            }, this.hide = () => {
                this.isOpen && (this.setVisible(!1), this.unmount(), this.emit("hide", {}), this.dataset.placement = this.initialPlacement)
            }, this.withOverlay = this.hasAttribute("data-with-overlay");
            let t = this.querySelector(`[data-float-element-template="${this.id}"]`);
            this.element = er(t), this.arrow = this.element.querySelector("[data-float-element-arrow]"), this.withPortal = this.hasAttribute("with-portal"), this.initialPlacement = this.dataset.placement, this.withPortal && W(this)
        }
        connectedCallback() {
            this.init(), this.isEditorMode && (this.editor.subscribe("BLOCK_SELECT", this.handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this.handleBlockDeselect))
        }
        disconnectedCallback() {
            this.isEditorMode && this.editor.destroy(), window.removeEventListener("wheel", this.handleScroll)
        }
        updatePosition({
            x: t,
            y: i
        }) {
            Object.assign(this.style, {
                left: `${t}px`,
                top: `${i}px`
            })
        }
        getOptions() {
            return {
                placement: this.dataset.placement,
                middleware: this.getMiddleware(),
                strategy: this.strategy
            }
        }
        getMiddleware() {
            let t = this.dataset.alignmentAxisOffset || 0,
                i = this.dataset.mainAxisOffset || 0,
                s = [eO({
                    alignmentAxis: +t,
                    mainAxis: +i
                }), eP(), eR()];
            return this.arrow && s.push(eB({
                element: this.arrow
            })), s
        }
        checkCursorOutside(t, i) {
            let s = this.dataset.mainAxisOffset || 0,
                a = +s,
                r = this.getBoundingClientRect(),
                n = r.top - (i + a) > 2,
                o = i - r.bottom - a > 2,
                l = r.left - (t + a) > 2,
                h = t - r.right - a > 2;
            return n || o || l || h
        }
        updateArrow({
            placement: t,
            middlewareData: i
        }) {
            if (!this.arrow) return;
            let {
                x: s,
                y: a
            } = i.arrow, r = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right"
            }[t.split("-")[0]];
            Object.assign(this.arrow.style, {
                left: null != s ? `${s}px` : "",
                top: null != a ? `${a}px` : "",
                right: "",
                bottom: "",
                [r]: "-5px"
            })
        }
        mount() {
            this.contains(this.element) || this.appendChild(this.element)
        }
        unmount() {
            this.isOpen && this.withOverlay && ta.hideOverlay(this.id), this.element && this.element.remove()
        }
        setVisible(t) {
            if (this.setAttribute("aria-hidden", t ? "false" : "true"), this.btn && this.btn.setExpand(t), this.withOverlay) {
                let t = this.hasAttribute("data-overlay-with-blur");
                this.isOpen ? ta.showOverlay(this.id, {
                    backdropFilter: t ? "blur(16.5px)" : "none"
                }) : ta.hideOverlay(this.id)
            }
        }
        get btn() {
            return document.querySelector(`[data-float-element-id="${this.id}"], [data-tooltip-id="${this.id}"]`)
        }
        get isOpen() {
            return "false" === this.getAttribute("aria-hidden")
        }
        get strategy() {
            return this.dataset.strategy || "absolute"
        }
        get type() {
            return this.dataset.type
        }
    };
    let tn = (t, i) => {
            let [s, a] = t, r = !1, n = i.length;
            for (let t = 0, o = n - 1; t < n; o = t++) {
                let [n, l] = i[t] || [0, 0], [h, c] = i[o] || [0, 0], d = l >= a != c >= a && s <= (h - n) * (a - l) / (c - l) + n;
                d && (r = !r)
            }
            return r
        },
        to = "http://www.w3.org/2000/svg",
        tl = (t, i) => !!t && !!i && t.contains(i),
        th = t => !!t && t instanceof(document.defaultView || window).Element,
        tc = (t, i) => {
            let s = V(),
                a = document.defaultView || window,
                r = document.createElementNS(to, "svg");
            Object.assign(r.style, {
                position: "fixed",
                left: `${s&&a.visualViewport?.offsetLeft||0}px`,
                top: `${s&&a.visualViewport?.offsetTop||0}px`,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 2147483647
            }), r.setAttribute("data-type", i ? "rect" : "triangle");
            let n = document.createElementNS(to, "polygon");
            return n.setAttribute("points", t.map(([t, i]) => `${t},${i}`).join(" ")), Object.assign(n.style, {
                pointerEvents: "auto",
                fill: "transparent",
                opacity: 0
            }), r.appendChild(n), r
        },
        td = t => {
            t.current && (t.current.remove(), t.current = null)
        },
        tu = ({
            restMs: t = 0,
            buffer: i = .5,
            blockPointerEvents: s = !0
        } = {}) => {
            let a;
            let r = !1,
                n = !1;
            return ({
                x: o,
                y: l,
                placement: h,
                elements: c,
                onClose: d,
                polygonRef: u
            }) => p => {
                let m = () => {
                    td(u), clearTimeout(a), d()
                };
                if (clearTimeout(a), !c.domReference || !c.floating || null == h || null == o || null == l) return;
                let {
                    clientX: g,
                    clientY: f
                } = p, b = p.target, y = "mouseleave" === p.type, v = tl(c.domReference, b), w = tl(c.floating, b);
                if (!y && v) {
                    td(u);
                    return
                }
                if (!y && (v || r && tl(u.current, b)) || y && th(p.relatedTarget) && tl(c.floating, p.relatedTarget)) return; // If any nested child is open, abort.
                let S = c.floating.querySelector('float-element[aria-hidden="false"]');
                if (S) return; // The cursor landed, so we destroy the polygon logic
                if (w && (n = !0), w && !y && u.current ?.dataset.type !== "rect") {
                    td(u);
                    return
                }
                let k = c.domReference.getBoundingClientRect(),
                    C = c.floating.getBoundingClientRect(),
                    E = h.split("-")[0],
                    T = o > C.right - C.width / 2,
                    L = l > C.bottom - C.height / 2; // If the pointer is leaving from the opposite side, the "buffer" logic
                // creates a point where the floating element remains open, but should be
                // ignored.
                // A constant of 1 handles floating point rounding errors.
                if ("top" === E && l >= k.bottom - 1 || "bottom" === E && l <= k.top + 1 || "left" === E && o >= k.right - 1 || "right" === E && o <= k.left + 1) return m(); // Ignore when the cursor is within the rectangular trough between the
                // two elements. Since the triangle is created from the cursor point,
                // which can start beyond the ref element's edge, traversing back and
                // forth from the ref to the floating element can cause it to close. This
                // ensures it always remains open in that case.
                let x = [];
                switch (E) {
                    case "top":
                        x = [
                            [C.left, k.top + 1],
                            [C.left, C.bottom - 1],
                            [C.right, C.bottom - 1],
                            [C.right, k.top + 1]
                        ], r = g >= C.left && g <= C.right && f >= C.top && f <= k.top + 1;
                        break;
                    case "bottom":
                        x = [
                            [C.left, C.top + 1],
                            [C.left, k.bottom - 1],
                            [C.right, k.bottom - 1],
                            [C.right, C.top + 1]
                        ], r = g >= C.left && g <= C.right && f >= k.bottom - 1 && f <= C.bottom;
                        break;
                    case "left":
                        x = [
                            [C.right - 1, C.bottom],
                            [C.right - 1, C.top],
                            [k.left + 1, C.top],
                            [k.left + 1, C.bottom]
                        ], r = g >= C.left && g <= k.left + 1 && f >= C.top && f <= C.bottom;
                        break;
                    case "right":
                        x = [
                            [k.right - 1, C.bottom],
                            [k.right - 1, C.top],
                            [C.left + 1, C.top],
                            [C.left + 1, C.bottom]
                        ], r = g >= k.right - 1 && g <= C.right && f >= C.top && f <= C.bottom
                }
                let I = r ? x : (([t, s]) => {
                    let a = C.width > k.width,
                        r = C.height > k.height;
                    switch (E) {
                        case "top":
                            {
                                let r = [
                                    [C.left, T ? C.bottom - i : a ? C.bottom - i : C.top],
                                    [C.right, T ? a ? C.bottom - i : C.top : C.bottom - i]
                                ];
                                return [
                                    [a ? t + i / 2 : T ? t + 4 * i : t - 4 * i, s + i + 1],
                                    [a ? t - i / 2 : T ? t + 4 * i : t - 4 * i, s + i + 1], ...r
                                ]
                            }
                        case "bottom":
                            {
                                let r = [
                                    [C.left, T ? C.top + i : a ? C.top + i : C.bottom],
                                    [C.right, T ? a ? C.top + i : C.bottom : C.top + i]
                                ];
                                return [
                                    [a ? t + i / 2 : T ? t + 4 * i : t - 4 * i, s - i],
                                    [a ? t - i / 2 : T ? t + 4 * i : t - 4 * i, s - i], ...r
                                ]
                            }
                        case "left":
                            {
                                let a = [
                                    [L ? C.right - i : r ? C.right - i : C.left, C.top],
                                    [L ? r ? C.right - i : C.left : C.right - i, C.bottom]
                                ];
                                return [...a, [t + i + 1, r ? s + i / 2 : L ? s + 4 * i : s - 4 * i],
                                    [t + i + 1, r ? s - i / 2 : L ? s + 4 * i : s - 4 * i]
                                ]
                            }
                        case "right":
                            {
                                let a = [
                                    [L ? C.left + i : r ? C.left + i : C.right, C.top],
                                    [L ? r ? C.left + i : C.right : C.left + i, C.bottom]
                                ];
                                return [
                                    [t - i, r ? s + i / 2 : L ? s + 4 * i : s - 4 * i],
                                    [t - i, r ? s - i / 2 : L ? s + 4 * i : s - 4 * i], ...a
                                ]
                            }
                    }
                })([o, l]);
                !u.current && s && y && (u.current = tc(I, r), document.body.appendChild(u.current)), r || (tn([g, f], I) ? t && !n && (a = setTimeout(d, t)) : m())
            }
        };
    var tp = class extends L {
            constructor() {
                super(), this.handleBlur = () => {
                    this.blurElementTimeoutId = setTimeout(() => {
                        if (!this.floatElement) return; // this.floatElement.hide() need refactoring whole component, bad work with click
                    }, 0)
                }, this.handleKeyUp = t => {
                    let i = t.key || t.keyCode;
                    (i || U(i)) && (this.floatElement.show(), this.setTargetListeners("add"))
                }, this.handleFirstTargetFocus = () => {
                    clearTimeout(this.blurElementTimeoutId)
                }, this.handleTargetFocus = () => {
                    clearTimeout(this.blurLastTargetTimeoutId)
                }, this.handleLastTargetBlur = () => {
                    this.blurLastTargetTimeoutId = setTimeout(() => {
                        this.setTargetListeners("remove"), this.floatElement.hide()
                    }, 0)
                }, this.handleMouseEnter = () => {
                    this.mouseenterTimeout = setTimeout(() => {
                        this.trigger()
                    }, 0)
                }, this.handleElementClick = () => {
                    this.trigger()
                }, this.handleWindowClick = t => {
                    let i = this.floatElement.checkCursorOutside(t.clientX, t.clientX),
                        s = this.isTargetOutsideFloatElements(t.target);
                    i && s && (window.removeEventListener("click", this.handleWindowClick), this.floatElement.hide())
                }, this.handleMouseLeave = t => {
                    clearTimeout(this.mouseenterTimeout), this.safePolygonFn && window.removeEventListener("mousemove", this.handleMouseMove), this.safePolygonFn = tu()({
                        x: t.clientX,
                        y: t.clientY,
                        placement: this.floatElement.dataset.placement,
                        onClose: () => {
                            window.removeEventListener("mousemove", this.handleMouseMove), this.floatElement && this.floatElement.hide(), td(this.polygonRef)
                        },
                        elements: {
                            domReference: this.element,
                            floating: this.floatElement
                        },
                        polygonRef: this.polygonRef
                    }), this.safePolygonFn(t), window.addEventListener("mousemove", this.handleMouseMove)
                }, this.handleMouseMove = t => {
                    this.safePolygonFn(t)
                }, this.trigger = () => {
                    "click" === this.triggerAction ? (this.floatElement.isOpen ? this.floatElement.hide() : this.floatElement.show(), window.addEventListener("click", this.handleWindowClick)) : (this.floatElement.show(), this.element.addEventListener("mouseleave", this.handleMouseLeave))
                }, this.triggerAction = "click" === this.dataset.trigger ? "click" : "mouseenter", this.element = this.getElement(), this.polygonRef = {
                    current: null
                }
            }
            connectedCallback() {
                this.element.addEventListener("keyup", this.handleKeyUp), this.element.addEventListener("blur", this.handleBlur), "click" === this.dataset.trigger ? (window.addEventListener("click", this.handleWindowClick), this.element.addEventListener("click", this.handleElementClick)) : (this.element.addEventListener("mouseleave", this.handleMouseLeave), this.element.addEventListener("mouseenter", this.handleMouseEnter))
            }
            disconnectedCallback() {
                this.element.removeEventListener("keyup", this.handleKeyUp), this.element.removeEventListener("blur", this.handleBlur), "click" === this.dataset.trigger ? (window.removeEventListener("click", this.handleWindowClick), this.element.removeEventListener("click", this.handleElementClick)) : (this.element.removeEventListener("mouseleave", this.handleMouseLeave), this.element.removeEventListener("mouseenter", this.handleMouseEnter))
            }
            setTargetListeners(t) {
                let {
                    targets: i,
                    firstTarget: s,
                    lastTarget: a
                } = this.getTargets(), r = "add" === t ? P : q;
                r(s, "focus", this.handleFirstTargetFocus), i.forEach(t => {
                    r(t, "focus", this.handleTargetFocus)
                }), r(a, "blur", this.handleLastTargetBlur), r(window, "click", this.handleWindowClick)
            }
            getElement() {
                let t = `[data-float-element-trigger="${this.dataset.floatElementId}"]`;
                return this.querySelector(t) || this
            }
            getTargets() {
                let t = this.floatElement.element,
                    i = [...t.querySelectorAll(R())],
                    s = i[0],
                    a = i[i.length - 1];
                return {
                    targets: i,
                    firstTarget: s,
                    lastTarget: a
                }
            }
            isTargetOutsideFloatElements(t) {
                let i = this.floatElement.contains(t),
                    s = this.contains(t);
                return !i && !s
            }
            setExpand(t) {
                this.setAttribute("data-aria-expanded", t)
            }
            get floatElement() {
                if (this.dataset.floatElementId) return document.getElementById(this.dataset.floatElementId)
            }
            get isOpen() {
                return this.floatElement.isOpen
            }
        },
        tm = class extends tr {
            constructor() {
                super(), this.styles = getComputedStyle(this)
            }
            unmount() {
                return M(K(this.styles)).then(() => {
                    super.unmount()
                })
            }
        },
        tg = class extends L {
            constructor() {
                super(), this.handleBlur = () => {
                    let {
                        targets: t
                    } = this.getTargets();
                    this.blurElementTimeoutId = setTimeout(() => {
                        !t.includes(document.activeElement) && this.floatElement && (this.setTargetListeners("remove"), this.floatElement.hide())
                    }, 0)
                }, this.handleDropdownShow = () => {
                    window.addEventListener("keydown", this.handleDropdownKeyDown)
                }, this.handleDropdownHide = () => {
                    window.removeEventListener("keydown", this.handleDropdownKeyDown)
                }, this.handleKeyUp = t => {
                    if (!this.floatElement) return;
                    let i = t.key || t.keyCode,
                        s = z(i);
                    if (s) {
                        this.floatElement.isOpen || (this.floatElement.show(), this.setTargetListeners("add"));
                        return
                    }
                }, this.handleDropdownKeyDown = t => {
                    if (!this.floatElement) return;
                    let i = t.key || t.keyCode,
                        s = _(i);
                    this.floatElement.isOpen && s && (this.element.focus(), this.setTargetListeners("remove"), this.floatElement.hide())
                }, this.handleFirstTargetFocus = () => {
                    clearTimeout(this.blurElementTimeoutId)
                }, this.handleTargetFocus = () => {
                    clearTimeout(this.blurLastTargetTimeoutId)
                }, this.handleLastTargetBlur = () => {
                    this.blurLastTargetTimeoutId = setTimeout(() => {
                        this.floatElement && (this.setTargetListeners("remove"), this.floatElement.hide())
                    }, 0)
                }, this.handleTrigger = t => {
                    t.preventDefault(), this.trigger()
                }, this.handleUntrigger = ({
                    clientX: t,
                    clientY: i,
                    target: s
                }) => {
                    if (!this.floatElement) return;
                    let a = this.floatElement.checkCursorOutside(t, i),
                        r = this.isTargetOutsideFloatElements(s);
                    a && r && (this.floatElement.hide(), window.removeEventListener("click", this.handleUntrigger))
                }, this.trigger = () => {
                    this.floatElement && (this.floatElement.isOpen ? this.floatElement.hide() : this.floatElement.show(), window.addEventListener("click", this.handleUntrigger))
                }, this.element = this.getElement()
            }
            connectedCallback() {
                this.floatElement && (customElements.upgrade(this.floatElement) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                    , this.floatElement.subscribe("show", this.handleDropdownShow), this.floatElement.subscribe("hide", this.handleDropdownHide)), this.element.addEventListener("blur", this.handleBlur), this.element.addEventListener("keyup", this.handleKeyUp), this.element.addEventListener("mousedown", this.handleTrigger)
            }
            disconnectedCallback() {
                this.floatElement && (customElements.upgrade(this.floatElement) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                    , this.floatElement.unsubscribe("show", this.handleDropdownShow), this.floatElement.unsubscribe("hide", this.handleDropdownHide)), this.element.removeEventListener("blur", this.handleBlur), this.element.removeEventListener("keyup", this.handleKeyUp), this.element.removeEventListener("mousedown", this.handleTrigger), window.removeEventListener("click", this.handleUntrigger)
            }
            setTargetListeners(t) {
                let {
                    targets: i,
                    firstTarget: s,
                    lastTarget: a
                } = this.getTargets(), r = "add" === t ? P : q;
                r(s, "focus", this.handleFirstTargetFocus), i.forEach(t => r(t, "focus", this.handleTargetFocus)), r(a, "blur", this.handleLastTargetBlur), r(window, "click", this.handleUntrigger)
            }
            getTargets() {
                if (!this.floatElement) return;
                let t = this.floatElement.element,
                    i = [...t.querySelectorAll(R())],
                    s = i[0],
                    a = i[i.length - 1];
                return {
                    targets: i,
                    firstTarget: s,
                    lastTarget: a
                }
            }
            isTargetOutsideFloatElements(t) {
                if (!this.floatElement) return;
                let i = this.floatElement.contains(t),
                    s = this.contains(t);
                return !i && !s
            }
            getElement() {
                let t = `[data-float-element-trigger="${this.dataset.floatElementId}"]`;
                return this.querySelector(t) || this
            }
            setExpand(t) {
                this.setAttribute("data-aria-expanded", t)
            }
            get floatElement() {
                return document.getElementById(this.dataset.floatElementId)
            }
        },
        tf = class extends L {
            connectedCallback() {
                this.addEventListener("mouseenter", this.handleMouseEnter), this.addEventListener("mouseleave", this.handleMouseLeave)
            }
            disconnectedCallback() {
                this.removeEventListener("mouseenter", this.handleMouseEnter), this.removeEventListener("mouseleave", this.handleMouseLeave)
            }
            setExpand(t) {
                this.setAttribute("data-aria-expanded", t ? "true" : "false")
            }
            get floatElement() {
                return this.dataset.floatElementId ? document.getElementById(this.dataset.floatElementId) : null
            }
            constructor(...t) {
                super(...t), this.handleMouseEnter = () => {
                    this.floatElement && this.floatElement.show()
                }, this.handleMouseLeave = () => {
                    this.floatElement && this.floatElement.hide()
                }
            }
        },
        tb = class extends L {
            constructor() {
                super(), this.handleContentResize = () => {
                    this.updateMaxHeight()
                }, this.handleBlockSelect = ({
                    detail: {
                        sectionId: t,
                        blockId: i,
                        load: s
                    }
                }) => {
                    let a = this.querySelector(this.contentWrapperSelector),
                        r = this.dataset.sectionId === t,
                        n = this.dataset.blockId === i;
                    r && n && !this.isExpanded && (eo(a, s), eo(this, s), this.show().then(() => {
                        eo(a, !1), eo(this, !1)
                    }))
                }, this.handleBlockDeselect = ({
                    detail: {
                        sectionId: t,
                        blockId: i
                    }
                }) => {
                    let s = this.dataset.sectionId === t && this.dataset.blockId === i;
                    s && this.isExpanded && this.hide()
                }, this.contentSelector = "[data-accordeon-content]", this.contentWrapperSelector = "[data-accordeon-content-wrapper]", this.content = this.querySelector(this.contentSelector), this.resizeObserver = new ResizeObserver(this.handleContentResize), this.content && this.resizeObserver.observe(this.content), this.styles = getComputedStyle(this)
            }
            connectedCallback() {
                this.updateMaxHeight(), this.isEditorMode && (this.editor.subscribe("BLOCK_SELECT", this.handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this.handleBlockDeselect))
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect(), this.isEditorMode && this.editor.destroy()
            }
            hide() {
                return this.setExpand(!1), M(K(this.styles))
            }
            show() {
                return this.setExpand(!0), M(K(this.styles))
            }
            toggle() {
                this.setExpand(!this.isExpanded), this.emit("toggle", {
                    blockId: this.dataset.blockId
                })
            }
            updateMaxHeight() {
                let t = this.closest("accordeon-component"),
                    i = this.querySelector(this.contentSelector),
                    s = this.querySelector(this.contentWrapperSelector);
                if (t && i && s) {
                    t.isExpanded && this.removeAttribute("style");
                    let a = Math.ceil(t.isExpanded ? i.scrollHeight : 0);
                    s.style.maxHeight = `${a}px`
                }
            }
            setExpand(t) {
                this.setAttribute("data-aria-expanded", t ? "true" : "false"), this.updateMaxHeight()
            }
            get isExpanded() {
                return "true" === this.getAttribute("data-aria-expanded")
            }
        },
        ty = class extends L {
            connectedCallback() {
                this.addEventListener("click", this.handleButtonClick), this.addEventListener("keydown", this.handleKeyDown)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleButtonClick), this.removeEventListener("keydown", this.handleKeyDown)
            }
            update() {
                let t = this.closest("accordeon-component");
                t && t.toggle()
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = t => {
                    t.preventDefault(), this.update()
                }, this.handleKeyDown = t => {
                    t.preventDefault();
                    let i = z(t.key || t.keyCode);
                    i && this.update()
                }
            }
        },
        tv = class extends L {
            constructor() {
                super(), this.handleTabEnter = t => {
                    let i = t.currentTarget,
                        s = this.productCard.querySelector(`[data-id="${i.dataset.id}"]`);
                    this.selected && this.reset(), this.setTabSelect(i, !0), this.setImageVisible(s, !0), this.setImageVisible(this.mainImage, !1), this.selected = {
                        tab: i,
                        img: s
                    }
                }, this.handleTabLeave = () => {
                    this.selected && this.reset(), this.setImageVisible(this.mainImage, !0)
                }, this.productCard = this.closest("product-card"), this.mainImage = this.productCard.querySelector("[data-main-media]"), this.tabs = [...this.querySelectorAll("[data-product-media-tabs-item]")], this.selected = null
            }
            connectedCallback() {
                this.tabs.forEach(t => {
                    t.addEventListener("mouseenter", this.handleTabEnter), t.addEventListener("mouseleave", this.handleTabLeave)
                })
            }
            disconnectedCallback() {
                this.tabs.forEach(t => {
                    t.removeEventListener("mouseenter", this.handleTabEnter), t.removeEventListener("mouseleave", this.handleTabLeave)
                })
            }
            setTabSelect(t, i) {
                t.classList.toggle("selected", i)
            }
            setImageVisible(t, i) {
                t.classList.toggle("product-card__img--visible", i)
            }
            reset() {
                this.selected && (this.selected.img.classList.remove("product-card__img--visible"), this.selected.tab.classList.remove("selected"), this.selected = null)
            }
        },
        tw = class extends L {
            constructor() {
                super(), this.handleSwatchEnter = t => {
                    if (!this.productCard) return;
                    let i = t.target,
                        s = i.dataset.variantId,
                        a = this.productCard.querySelector(`[data-variant-id="${s}"]`),
                        r = i.dataset.color;
                    a && this.mainImage && r && (this.updateLabel(r), this.setImageVisible(a, !0), this.setImageVisible(this.mainImage, !1), this.currentVisibleImage = a, this.setHoverStatus(!0))
                }, this.handleSwatchLeave = () => {
                    this.updateLabel(""), this.currentVisibleImage && this.setImageVisible(this.currentVisibleImage, !1), this.mainImage && this.setImageVisible(this.mainImage, !0), this.setHoverStatus(!1)
                }, this.hiddenCount = this.querySelector("[data-color-swatches-hidden-count]"), this.label = this.querySelector("[data-color-swatches-label]"), this.items = [...this.querySelectorAll("[data-color-swatches-item]")], this.productCard = this.closest("product-card"), this.productCard && (this.mainImage = this.productCard.querySelector("[data-main-media]"))
            }
            connectedCallback() {
                this.initOffsets(), this.update(), this.items.forEach(t => {
                    t.addEventListener("mouseenter", this.handleSwatchEnter), t.addEventListener("mouseleave", this.handleSwatchLeave)
                })
            }
            disconnectedCallback() {
                this.items.forEach(t => {
                    t.removeEventListener("mouseenter", this.handleSwatchEnter), t.removeEventListener("mouseleave", this.handleSwatchLeave)
                })
            }
            update() {
                this.updateSwatchesVisible(), this.updateCount(), this.updateDetailsInner()
            }
            updateDetailsInner() {
                let t = this.closest("[data-product-details-inner]");
                t && t.offsetHeight < this.offsetHeight && (t.style.minHeight = `${this.offsetHeight}px`)
            }
            setImageVisible(t, i) {
                t.classList.toggle("product-card__img--visible", i)
            }
            updateSwatchesVisible() {
                this.productCard && this.items.forEach(t => {
                    let i = t.offsetLeft + t.offsetWidth,
                        s = this.parentNode.offsetWidth - t.offsetWidth;
                    t.classList.toggle("hidden-swatch", i > s)
                })
            }
            initOffsets() {
                this.items.forEach(t => {
                    t.style.left = `${t.offsetLeft}px`
                })
            }
            updateCount() {
                if (!this.hiddenCount) return;
                let t = this.items.filter(t => !t.classList.contains("hidden-swatch")),
                    i = +(this.dataset.count || 0) - t.length,
                    s = this.querySelector("[data-color-swatches-hidden-count-label]");
                s && (i > 0 ? (et(this.hiddenCount), s.innerText = `+${i}`) : (ei(this.hiddenCount), s.innerText = ""))
            }
            updateLabel(t) {
                this.label && (this.label.innerText = t ? D(t) : "")
            }
            setHoverStatus(t) {
                this.productCard ?.classList.toggle("is-color-swatch-hover", t)
            }
        },
        tS = class extends L {
            constructor() {
                super(), this.handleKeydown = t => {
                    if (this.hasAttribute("data-ignore-esc-key")) return;
                    let i = t.key || t.keyCode,
                        s = _(i);
                    s && this.hide()
                }, this.handleOutsideClick = t => {
                    let i = document.getElementById("BodyOverlay"),
                        s = parseFloat(es(i, "zIndex")),
                        a = parseFloat(this.styles.zIndex) - 1,
                        r = t.target === i;
                    r && s <= a && this.isOpen && this.hide()
                }, this.template = this.querySelector(`[data-modal-template="${this.id}"]`), this.element = er(this.template), this.template ?.remove(), this.styles = getComputedStyle(this)
            }
            async show() {
                this.mount(), await this.setOpenState(!0);
                let t = this.element ?.querySelectorAll("video");
                t ?.forEach(t => {
                    t.play()
                }), this.isEditorMode || this.focus(), await this.setOpenState(!0), this.isOpen = !0
            }
            async hide() {
                await this.setOpenState(!1), await M(K(this.styles)).then(() => {
                    this.unmount(), this.isOpen = !1
                })
            }
            toggle() {
                this.isOpen ? this.hide() : this.show()
            }
            mount() {
                this.replaceChildren(this.element)
            }
            unmount() {
                this.replaceChildren()
            }
            async setOpenState(t) {
                let i = this.hasAttribute("data-with-overlay");
                if (i) {
                    let i = this.hasAttribute("data-overlay-important"),
                        s = this.getAttribute("data-overlay-opacity") || 50,
                        a = {
                            zIndex: i ? parseFloat(this.styles.zIndex) - 1 : 3,
                            backgroundColor: `var(--gsc-black-color-${s})`
                        };
                    t ? ta.showOverlay(this.id, a) : await M(K(this.styles)).then(() => {
                        ta.hideOverlay(this.id)
                    })
                }
                this.setVisible(t), this.setListeners(t ? "add" : "remove"), this.emit(t ? "show" : "hide", {})
            }
            setVisible(t) {
                this.toggleAttribute("open", t)
            }
            setListeners(t) {
                let i = this.hasAttribute("data-with-close-on-outside"),
                    s = `${t}EventListener`;
                i && window[s]("click", this.handleOutsideClick), window[s]("keydown", this.handleKeydown)
            }
        },
        tk = class extends tS {
            showProductFromParsedState(t, i) {
                let s = t.sections["cart-notification-popup-content"],
                    a = el(s);
                if (this.element) {
                    let s = a.querySelector(`#CartNotificationPopupItem-${i}`),
                        r = this.element.querySelector("[data-cart-notification-popup]");
                    if (r && s) {
                        let t = s.cloneNode(!0);
                        r.replaceChildren(t)
                    }
                    this.updateCartCountInHeader(t), this.show()
                }
            }
            updateCartCountInHeader(t) {
                let i = t.sections["cart-count"],
                    s = el(i),
                    a = document.getElementById("CartCount"),
                    r = document.getElementById("StickyCartCount"),
                    n = s.getElementById("CartCount");
                if (!n) return;
                let o = n ?.cloneNode(!0);
                r && r.replaceChildren(...o.childNodes), a && a.replaceChildren(...o.childNodes)
            }
        },
        tC = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            showModal() {
                let t = document.querySelector(this.dataset.modal);
                t && t.show()
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.showModal(), this.emit("click", {})
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    if (i) {
                        t.preventDefault();
                        let i = document.querySelector(this.dataset.modal);
                        i && i.toggle()
                    }
                }
            }
        },
        tE = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            hide() {
                let t = document.querySelector(this.dataset.modal);
                t && t.hide()
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.hide()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.hide())
                }
            }
        },
        tT = class extends L {
            constructor() {
                super(), this.handleButtonClick = t => {
                    t.preventDefault()
                }, this.handleButtonMouseDown = t => {
                    t.preventDefault();
                    let i = this.closest("carousel-component"),
                        s = this.closest("carousel-dots");
                    this.isDraggingInCarousel = !!(i || s), this.isDraggingInCarousel ? (this.setMoveStartPoint(t.clientX, t.clientY), this.toggleAfterDraggingInCarousel = !0) : this.toggle()
                }, this.handleButtonMouseMove = t => {
                    if (this.isDraggingInCarousel) {
                        let i = Math.abs(this.startPointX - t.clientX),
                            s = Math.abs(this.startPointY - t.clientY);
                        (i > 24 || s > 24) && (this.toggleAfterDraggingInCarousel = !1)
                    }
                }, this.handleButtonMouseUp = () => {
                    this.isDraggingInCarousel && (this.toggleAfterDraggingInCarousel && this.toggle(), this.isDraggingInCarousel = !1, this.toggleAfterDraggingInCarousel = !1, this.setMoveStartPoint(0, 0))
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.toggle())
                }, this.buttonSelector = "[data-sidebar-button]", this.button = this.querySelector(this.buttonSelector)
            }
            connectedCallback() {
                this.button && (this.button.addEventListener("click", this.handleButtonClick), this.button.addEventListener("keydown", this.handleKeyDown), this.button.addEventListener("mousedown", this.handleButtonMouseDown), this.button.addEventListener("mousemove", this.handleButtonMouseMove), this.button.addEventListener("mouseup", this.handleButtonMouseUp))
            }
            disconnectedCallback() {
                this.button && (this.button.removeEventListener("click", this.handleButtonClick), this.button.removeEventListener("keydown", this.handleKeyDown), this.button.removeEventListener("mousedown", this.handleButtonMouseDown), this.button.removeEventListener("mousemove", this.handleButtonMouseMove), this.button.removeEventListener("mouseup", this.handleButtonMouseUp))
            }
            setMoveStartPoint(t, i) {
                this.startPointX = t, this.startPointY = i
            }
            toggle() {
                if (this.button) {
                    let t = this.button.dataset.sidebarId || "",
                        i = document.getElementById(t);
                    i && (i.toggle(), this.update())
                }
            }
            update() {
                if (this.button) {
                    let t = this.button.dataset.sidebarId || "",
                        i = document.getElementById(t);
                    i && this.button.setAttribute("data-aria-expanded", i.isOpen ? "true" : "false")
                }
            }
        },
        tL = class extends L {
            constructor() {
                super(), this.handleSectionLoad = () => {
                    this.isSection || this.hide()
                }, this.handleSectionSelect = ({
                    detail: {
                        sectionId: t
                    }
                }) => {
                    this.isSection && this.dataset.sectionId === t && this.open()
                }, this.handleSectionDeselect = ({
                    detail: {
                        sectionId: t
                    }
                }) => {
                    this.isSection && this.dataset.sectionId === t && this.hide()
                }, this.handleOutsideClick = t => {
                    let i = document.getElementById("BodyOverlay"),
                        s = parseFloat(es(i, "zIndex")),
                        a = parseFloat(this.styles.zIndex) - 1,
                        r = t.target === i;
                    r && s <= a && this.isOpen && this.hide()
                }, this.handleTouchStart = t => {
                    this.touchStartX = t.targetTouches[0].clientX, this.touchStartY = t.targetTouches[0].clientY
                }, this.handleTouchMove = t => {
                    this.touchEndX = t.targetTouches[0].clientX, this.touchEndY = t.targetTouches[0].clientY
                }, this.handleTouchEnd = t => {
                    let i = Math.abs(this.touchStartX - this.touchEndX),
                        s = Math.abs(this.touchStartY - this.touchEndY),
                        a = t.target.closest("[data-carousel-viewport]");
                    if (a || 0 === this.touchEndX || s > 48) return;
                    let r = "right" === this.dataset.openDirection ? this.touchStartX < this.touchEndX : this.touchStartX > this.touchEndX;
                    this.isOpen && i > 96 && r && this.hide(), this.cleanTouchPoints()
                }, this.handleKeydown = t => {
                    let i = t.key || t.keyCode,
                        s = this.hasAttribute("data-with-close-on-escape"),
                        a = _(i);
                    s && a && this.hide()
                }, this.isOpenOnInit ? (this.template = null, this.element = this.querySelector("[data-sidebar-body]")) : (this.template = this.querySelector(`[data-sidebar-template="${this.id}"]`), this.element = er(this.template), this.template ?.remove()), this.buttonSelector = `[data-sidebar-button][data-sidebar-id="${this.id}"]`, this.styles = getComputedStyle(this)
            }
            connectedCallback() {
                this.addEventListener("touchstart", this.handleTouchStart), this.addEventListener("touchmove", this.handleTouchMove), this.addEventListener("touchend", this.handleTouchEnd), this.isEditorMode && (this.editor.subscribe("SECTION_LOAD", this.handleSectionLoad), this.editor.subscribe("SECTION_SELECT", this.handleSectionSelect), this.editor.subscribe("SECTION_DESELECT", this.handleSectionDeselect))
            }
            disconnectedCallback() {
                this.removeEventListener("touchstart", this.handleTouchStart), this.removeEventListener("touchmove", this.handleTouchMove), this.removeEventListener("touchend", this.handleTouchEnd), this.isEditorMode && this.editor.destroy()
            }
            cleanTouchPoints() {
                this.touchStartX = 0, this.touchEndX = 0, this.touchStartY = 0, this.touchEndY = 0
            }
            async open() {
                this.mount(), await this.setOpenState(!0), await M(K(this.styles)), this.setAttribute("tabindex", "-1"), this.focus()
            }
            hide(t) {
                if (this.setOpenState(!1), !t) return M(K(this.styles)).then(() => {
                    this.unmount()
                });
                this.unmount()
            }
            toggle() {
                this.isOpen ? this.hide() : this.open()
            }
            mount() {
                this.replaceChildren(this.element)
            }
            unmount() {
                this.replaceChildren()
            }
            updateTemplate(t) {
                this.element = er(t), this.replaceChildren(this.element)
            }
            setOpenState(t) {
                let i = this.hasAttribute("data-with-overlay"),
                    s = document.querySelectorAll(this.buttonSelector);
                if (this.setVisible(t), this.setListeners(t ? "add" : "remove"), i) {
                    let i = this.hasAttribute("data-overlay-important"),
                        s = this.hasAttribute("data-overlay-with-blur"),
                        a = +(this.getAttribute("data-overlay-opacity") || 50),
                        r = {
                            zIndex: i ? parseFloat(this.styles.zIndex) - 1 : 3,
                            backdropFilter: s ? "blur(16.5px)" : "none",
                            backgroundColor: `var(--gsc-black-color-${a})`
                        };
                    t ? ta.showOverlay(this.id, r) : M(K(this.styles)).then(() => {
                        ta.hideOverlay(this.id)
                    })
                }
                s.forEach(i => {
                    i.setAttribute("data-aria-expanded", t ? "true" : "false")
                })
            }
            setVisible(t) {
                this.setAttribute("data-aria-expanded", t ? "true" : "false")
            }
            setListeners(t) {
                let i = this.hasAttribute("data-with-close-on-outside"),
                    s = `${t}EventListener`;
                i && window[s]("click", this.handleOutsideClick), window[s]("keydown", this.handleKeydown)
            }
            get isSection() {
                return this.hasAttribute("data-sidebar-section")
            }
            get isOpen() {
                return "true" === this.getAttribute("data-aria-expanded")
            }
            get isOpenOnInit() {
                return this.hasAttribute("is-open-on-init")
            }
        };
    let tx = () => {
        let t = matchMedia("(max-width: 768px)").matches;
        return t
    };
    var tI = class extends tL {
        constructor() {
            super(), this.handleClick = t => {
                let i = t.target,
                    s = tx(),
                    a = i === this.searchInput,
                    r = "A" === i.tagName,
                    n = i.closest("[data-sidebar-search-query]");
                if (this.searchInput && n) {
                    let t = new Event("input", {
                        bubbles: !0
                    });
                    this.searchInput.value = `${n.getAttribute("data-sidebar-search-query")}`, this.searchInput.dispatchEvent(t), this.searchInput.focus()
                }
                s && a && (this.isInputFocused = !0), !a && this.isInputFocused && (r && t.preventDefault(), this.isInputFocused = !1)
            }, this.handleInputFocus = () => {
                let t = tx();
                t && (this.isInputFocused = !0)
            }, this.handleSearchSidebarTouchEnd = t => {
                let i = t.target,
                    s = Math.abs(this.touchStartX - this.touchEndX),
                    a = Math.abs(this.touchStartY - this.touchEndY),
                    r = "A" === i.tagName;
                this.isInputFocused && (s > 12 || a > 12) && this.searchInput && (r && t.preventDefault(), this.searchInput.blur(), this.isInputFocused = !1), this.cleanTouchPoints()
            }, this.handleContentResultsResize = () => {
                this.updateViewport()
            }, this.handleContentScroll = () => {
                if (this.content) {
                    let t = this.checkContentOverflow(),
                        i = this.content.scrollTop > 0;
                    this.toggleAttribute("header-shadow-visible", t && i)
                }
            }, this.searchInputSelector = "[data-sidebar-search-input]", this.searchInputComponentSelector = "[data-sidebar-search-input-component]", this.contentSelector = "[data-sidebar-search-content]", this.contentResultsSelector = "[data-sidebar-search-content-results]", this.content = this.element.querySelector(this.contentSelector), this.contentResults = this.element.querySelector(this.contentResultsSelector), this.searchInputComponent = this.element.querySelector(this.searchInputComponentSelector), this.searchInput = this.element.querySelector(this.searchInputSelector), this.resizeObserver = new ResizeObserver(this.handleContentResultsResize), this.contentResults && this.resizeObserver.observe(this.contentResults), this.defaultStateElement = this.element.cloneNode(!0)
        }
        connectedCallback() {
            super.connectedCallback(), this.content && this.content.addEventListener("scroll", this.handleContentScroll), this.addEventListener("click", this.handleClick), this.addEventListener("touchend", this.handleSearchSidebarTouchEnd), this.searchInput && this.searchInput.addEventListener("focus", this.handleInputFocus)
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this.content && this.content.removeEventListener("scroll", this.handleContentScroll), this.removeEventListener("click", this.handleClick), this.removeEventListener("touchend", this.handleSearchSidebarTouchEnd), this.searchInput && this.searchInput.removeEventListener("focus", this.handleInputFocus), this.resizeObserver.disconnect()
        }
        updateViewport() {
            let t = this.checkContentOverflow();
            this.toggleAttribute("footer-shadow-visible", t)
        }
        open() {
            return super.open().then(() => {
                this.searchInput && !this.isEditorMode && this.searchInput.focus()
            })
        }
        checkContentOverflow() {
            return !!this.contentResults && !!this.content && this.contentResults.offsetHeight > this.content.offsetHeight
        }
    };
    class tA extends L {
        static#e = this.localStorageSelector = "AuroraTheme-RecentlyViewed";
        static#t = this.defaultLimit = 50;
        constructor() {
            super(), this.fetchItems = async () => {
                let {
                    origin: t
                } = window.location, i = JSON.parse(localStorage.getItem(this.localStorageSelector)) ?.slice(0, this.cardLimit);
                if (i) try {
                    for (let s of i) {
                        let i = await fetch(`${t}/products/${s}?sections=product-card-template`).then(t => t.json()),
                            a = this.createNodeByString(i[this.cardTemplateSelector]);
                        console.log(a), a && this.products.push(a)
                    }
                } catch (t) {
                    console.log(t)
                }
            }, this.setItems = () => {
                this.containers.forEach(t => {
                    let i = this.products.map(t => t.cloneNode(!0));
                    t.replaceChildren(...i)
                })
            }, this.defaultCardsLimit = tA.defaultLimit, this.defaultCardImgRatio = "portrait", this.defaultCardAlignment = "left", this.containerAttribute = "[recently-viewed-container]", this.localStorageSelector = tA.localStorageSelector, this.cardTemplateSelector = "product-card-template", this.cardLimit = +this.dataset.cardLimit ?? this.defaultCardsLimit, this.cardImgRatio = this.dataset.imgRatio ?? this.defaultCardImgRatio, this.cardAlignment = this.dataset.cardAlignment ?? this.defaultCardAlignment, this.cardSelector = "product-card", this.cardAlignmentClass = `product-card--${this.cardAlignment}-alignment`, this.cardInnerSelector = "[data-product-card-inner]", this.shapeClass = `shape--${this.cardImgRatio}`, this.products = [], this.containers = this.querySelectorAll(this.containerAttribute)
        }
        async connectedCallback() {
            await this.fetchItems(), this.products.length > 0 && (this.setItems(), this.setVisible(!0))
        }
        setVisible(t) {
            this.classList.toggle("hidden", !t)
        }
        createNodeByString(t) {
            let i = new DOMParser().parseFromString(t, "text/html").querySelector(`.${this.cardTemplateSelector}`);
            return i ?.querySelector(this.cardSelector) ?.classList.add(this.cardAlignmentClass), i ?.querySelector(this.cardInnerSelector) ?.classList.add(this.shapeClass), i
        }
        static updateProductsInLocalStorage(t) {
            if (!t) return;
            let i = JSON.parse(localStorage.getItem(this.localStorageSelector)) ?? [],
                s = i ?.find(i => i === t),
                a = s ? i : [t, ...i].slice(0, this.defaultLimit);
            localStorage.setItem(this.localStorageSelector, JSON.stringify(a))
        }
    }
    let {
        Shopify: tD
    } = window;
    var tM = class extends tL {
        constructor() {
            super(), this.handleContentScroll = () => {
                let t = !!this.content && this.content.scrollTop > 0;
                this.toggleAttribute("header-shadow-visible", t)
            }, this.openAndRenderProductByUrl = t => {
                this.cache[t] && this.cache[t].then(t => {
                    this.isRenderedOnPage && this.isRenderedOnPage.replaceChildren(), this.isOpen ? this.hide().then(() => {
                        this.setProductFromHTML(t), super.open()
                    }) : (this.setProductFromHTML(t), super.open()), tD ?.PaymentButton ?.init()
                })
            }, this.cache = {}
        }
        requestProductFromUrl(t, i) {
            this.cache[t] || (this.isRenderedOnPage = document.querySelector(`.shopify-section [data-quick-view-product-id="${i}"]`), this.isRenderedOnPage && this.isRenderedOnPage.dataset.quickViewProductUrl === t ? this.cache[t] = M(0).then(() => this.isRenderedOnPage) : this.cache[t] = fetch(t).then(t => t.text()).then(t => el(t)))
        }
        open() { //
        }
        setProductFromHTML(t) {
            if (this.dataset.targetId) {
                let i = t.getElementById(this.dataset.targetId);
                if (i) {
                    tA.updateProductsInLocalStorage(i.dataset.productHandle);
                    let t = i.getAttribute("class") || "",
                        s = i.cloneNode(!0);
                    this.element.setAttribute("class", t), this.element.replaceChildren(...s.childNodes), this.content = this.element.querySelector("[data-quick-view-content]"), this.content && this.content.addEventListener("scroll", this.handleContentScroll)
                }
            }
        }
        resetProduct() {
            if (this.content) {
                if (this.content.removeEventListener("scroll", this.handleContentScroll), this.isRenderedOnPage) {
                    let t = this.content.cloneNode(!0);
                    this.isRenderedOnPage.replaceChildren(...t.childNodes)
                }
                this.content = null
            }
            this.element.replaceChildren()
        }
    };

    function tB() {
        return (tB = Object.assign || function(t) {
            for (var i = 1; i < arguments.length; i++) {
                var s = arguments[i];
                for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a])
            }
            return t
        }).apply(this, arguments)
    }

    function tP(t, i) {
        if (t.length !== i.length) throw Error("vectors must be same length");
        return t.map(function(t, s) {
            return t + i[s]
        })
    }

    function tq(t) {
        return Math.max.apply(Math, t.map(Math.abs))
    } // eslint-disable-next-line @typescript-eslint/ban-types
    function tO(t) {
        return Object.freeze(t), Object.values(t).forEach(function(t) {
            null === t || "object" != typeof t || Object.isFrozen(t) || tO(t)
        }), t
    }
    var tR = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        tF = [-1, -1, -1],
        tN = /*#__PURE__*/ tO({
            preventWheelAction: !0,
            reverseSign: [!0, !0, !1]
        });

    function tV() {
        return {
            isStarted: !1,
            isStartPublished: !1,
            isMomentum: !1,
            startTime: 0,
            lastAbsDelta: 1 / 0,
            axisMovement: [0, 0, 0],
            axisVelocity: [0, 0, 0],
            accelerationFactors: [],
            scrollPoints: [],
            scrollPointsToMerge: [],
            willEndTimeout: 400
        }
    }
    var tz = function(t) {
            void 0 === t && (t = {});
            var i, s, a, r, n, o = function() {
                    var t = {};

                    function i(i, s) {
                        t[i] = (t[i] || []).filter(function(t) {
                            return t !== s
                        })
                    }
                    return tO({
                        on: function(s, a) {
                            return t[s] = (t[s] || []).concat(a),
                                function() {
                                    return i(s, a)
                                }
                        },
                        off: i,
                        dispatch: function(i, s) {
                            i in t && t[i].forEach(function(t) {
                                return t(s)
                            })
                        }
                    })
                }(),
                l = o.on,
                h = o.off,
                c = o.dispatch,
                d = tN,
                u = tV(),
                p = !1,
                m = function(t) {
                    Array.isArray(t) ? t.forEach(function(t) {
                        return y(t)
                    }) : y(t)
                },
                g = function(t) {
                    return (void 0 === t && (t = {}), Object.values(t).some(function(t) {
                        return null == t
                    })) ? d : d = tO(tB({}, tN, d, t))
                },
                f = function(t) {
                    var i = tB({
                        event: r,
                        isStart: !1,
                        isEnding: !1,
                        isMomentumCancel: !1,
                        isMomentum: u.isMomentum,
                        axisDelta: [0, 0, 0],
                        axisVelocity: u.axisVelocity,
                        axisMovement: u.axisMovement,
                        get axisMovementProjection() {
                            return tP(i.axisMovement, i.axisVelocity.map(function(t) {
                                var i;
                                return void 0 === i && (i = .996), t * i / (1 - i)
                            }))
                        }
                    }, t);
                    c("wheel", tB({}, i, {
                        previous: n
                    })), n = i
                },
                b = function(t, i) {
                    var s = d.preventWheelAction,
                        a = i[0],
                        r = i[1],
                        n = i[2];
                    if ("boolean" == typeof s) return s;
                    switch (s) {
                        case "x":
                            return Math.abs(a) >= t;
                        case "y":
                            return Math.abs(r) >= t;
                        case "z":
                            return Math.abs(n) >= t;
                        default:
                            return !1
                    }
                },
                y = function(t) {
                    var i, s, a, n, o = (n = function(t, i) {
                            if (!i) return t;
                            var s = !0 === i ? tF : i.map(function(t) {
                                return t ? -1 : 1
                            });
                            return tB({}, t, {
                                axisDelta: t.axisDelta.map(function(t, i) {
                                    return t * s[i]
                                })
                            })
                        }((i = t.deltaX * tR[t.deltaMode], s = t.deltaY * tR[t.deltaMode], a = (t.deltaZ || 0) * tR[t.deltaMode], {
                            timeStamp: t.timeStamp,
                            axisDelta: [i, s, a]
                        }), d.reverseSign), tB({}, n, {
                            axisDelta: n.axisDelta.map(function(t) {
                                return Math.min(Math.max(-700, t), 700)
                            })
                        })),
                        l = o.axisDelta,
                        h = o.timeStamp,
                        c = tq(l);
                    if (t.preventDefault && b(c, l) && t.preventDefault(), u.isStarted ? u.isMomentum && c > Math.max(2, 2 * u.lastAbsDelta) && (I(!0), L()) : L(), 0 === c && Object.is && Object.is(t.deltaX, -0)) {
                        p = !0; // return -> zero delta event should not influence velocity
                        return
                    }
                    r = t, u.axisMovement = tP(u.axisMovement, l), u.lastAbsDelta = c, u.scrollPointsToMerge.push({
                            axisDelta: l,
                            timeStamp: h
                        }), v(), f({
                            axisDelta: l,
                            isStart: !u.isStartPublished
                        }), // publish start after velocity etc. have been updated
                        u.isStartPublished = !0, x()
                },
                v = function() {
                    if (2 === u.scrollPointsToMerge.length) {
                        var t;
                        u.scrollPoints.unshift({
                            axisDeltaSum: u.scrollPointsToMerge.map(function(t) {
                                return t.axisDelta
                            }).reduce(tP),
                            timeStamp: (t = u.scrollPointsToMerge.map(function(t) {
                                return t.timeStamp
                            })).reduce(function(t, i) {
                                return t + i
                            }) / t.length
                        }), S(), u.scrollPointsToMerge.length = 0, u.scrollPoints.length = 1, u.isMomentum || E()
                    } else u.isStartPublished || w()
                },
                w = function() {
                    var t;
                    u.axisVelocity = (t = u.scrollPointsToMerge)[t.length - 1].axisDelta.map(function(t) {
                        return t / u.willEndTimeout
                    })
                },
                S = function() { // need to have two recent points to calc velocity
                    var t = u.scrollPoints,
                        i = t[0],
                        s = t[1];
                    if (s && i) { // time delta
                        var a = i.timeStamp - s.timeStamp;
                        if (a <= 0) return; // calc the velocity per axes
                        var r = i.axisDeltaSum.map(function(t) {
                                return t / a
                            }),
                            n = r.map(function(t, i) {
                                return t / (u.axisVelocity[i] || 1)
                            }); // calc the acceleration factor per axis
                        u.axisVelocity = r, u.accelerationFactors.push(n), k(a)
                    }
                },
                k = function(t) { // use current time between events rounded up and increased by a bit as timeout
                    var i = 12 * Math.ceil(t / 10); // double the timeout, when momentum was not detected yet
                    u.isMomentum || (i = Math.max(100, 2 * i)), u.willEndTimeout = Math.min(1e3, Math.round(i))
                },
                C = function(t) {
                    return ( // when main axis is the the other one and there is no movement/change on the current one
                        0 === t || t <= .96 && t >= .6)
                },
                E = function() {
                    if (u.accelerationFactors.length >= 5) {
                        if (p && (p = !1, tq(u.axisVelocity) >= .2)) {
                            T();
                            return
                        }
                        var t = u.accelerationFactors.slice(-5); // check recent acceleration / deceleration factors
                        t.every(function(t) { // when both axis decelerate exactly in the same rate it is very likely caused by momentum
                                var i = !!t.reduce(function(t, i) {
                                        return t && t < 1 && t === i ? 1 : 0
                                    }),
                                    s = t.filter(C).length === t.length; // check if acceleration factor is within momentum range
                                return i || s
                            }) && T(), // only keep the most recent events
                            u.accelerationFactors = t
                    }
                },
                T = function() {
                    u.isMomentum = !0
                },
                L = function() {
                    (u = tV()).isStarted = !0, u.startTime = Date.now(), n = void 0, p = !1
                },
                x = function() {
                    clearTimeout(i), i = setTimeout(I, u.willEndTimeout)
                },
                I = function(t) {
                    void 0 === t && (t = !1), u.isStarted && (u.isMomentum && t ? f({
                        isEnding: !0,
                        isMomentumCancel: !0
                    }) : f({
                        isEnding: !0
                    }), u.isMomentum = !1, u.isStarted = !1)
                },
                A = (s = [], tO({
                    observe: function(t) {
                        return t.addEventListener("wheel", m, {
                                passive: !1
                            }), s.push(t),
                            function() {
                                return a(t)
                            }
                    },
                    unobserve: a = function(t) {
                        t.removeEventListener("wheel", m), s = s.filter(function(i) {
                            return i !== t
                        })
                    },
                    disconnect: function() {
                        s.forEach(a)
                    }
                })),
                D = A.observe,
                M = A.unobserve,
                B = A.disconnect;
            return g(t), tO({
                on: l,
                off: h,
                observe: D,
                unobserve: M,
                disconnect: B,
                feedWheel: m,
                updateOptions: g
            })
        },
        t_ = {
            active: !0,
            breakpoints: {},
            wheelDraggingClass: "is-wheel-dragging",
            forceWheelAxis: void 0,
            target: void 0
        };

    function t$(t) {
        void 0 === t && (t = {});
        var i, s = function() {};
        return {
            name: "wheelGestures",
            options: t,
            init: function(a, r) {
                var n, o, l, h = r.mergeOptions,
                    c = r.optionsAtMedia,
                    d = h(t_, t$.globalOptions);
                i = c(h(d, t));
                var u = a.internalEngine(),
                    p = null != (n = i.target) ? n : a.containerNode().parentNode,
                    m = null != (o = i.forceWheelAxis) ? o : u.options.axis,
                    g = tz({
                        preventWheelAction: m,
                        reverseSign: [!0, !0, !1]
                    }),
                    f = g.observe(p),
                    b = g.on("wheel", function(t) {
                        var a = t.axisDelta,
                            r = a[0],
                            n = a[1],
                            o = t.isMomentum && t.previous && !t.previous.isMomentum,
                            h = t.isEnding && !t.isMomentum || o;
                        !(Math.abs("x" === m ? r : n) > Math.abs("x" === m ? n : r)) || y || t.isMomentum || function(t) {
                            try {
                                l = new MouseEvent("mousedown", t.event), k(l)
                            } catch (t) {
                                return s()
                            }
                            y = !0, document.documentElement.addEventListener("mousemove", w, !0), document.documentElement.addEventListener("mouseup", w, !0), document.documentElement.addEventListener("mousedown", w, !0), i.wheelDraggingClass && p.classList.add(i.wheelDraggingClass)
                        }(t), y && (h ? (y = !1, k(S("mouseup", t)), v(), i.wheelDraggingClass && p.classList.remove(i.wheelDraggingClass)) : k(S("mousemove", t)))
                    }),
                    y = !1;

                function v() {
                    document.documentElement.removeEventListener("mousemove", w, !0), document.documentElement.removeEventListener("mouseup", w, !0), document.documentElement.removeEventListener("mousedown", w, !0)
                }

                function w(t) {
                    y && t.isTrusted && t.stopImmediatePropagation()
                }

                function S(t, i) {
                    var s, a;
                    if (m === u.options.axis) {
                        var r = i.axisMovement;
                        s = r[0], a = r[1]
                    } else {
                        var n = i.axisMovement;
                        a = n[0], s = n[1]
                    }
                    return new MouseEvent(t, {
                        clientX: l.clientX + s,
                        clientY: l.clientY + a,
                        screenX: l.screenX + s,
                        screenY: l.screenY + a,
                        movementX: s,
                        movementY: a,
                        button: 0,
                        bubbles: !0,
                        cancelable: !0,
                        composed: !0
                    })
                }

                function k(t) {
                    a.containerNode().dispatchEvent(t)
                }
                s = function() {
                    f(), b(), v()
                }
            },
            destroy: function() {
                return s()
            }
        }
    }

    function tH(t) {
        return "number" == typeof t
    }

    function tU(t) {
        return "string" == typeof t
    }

    function tW(t) {
        return "boolean" == typeof t
    }

    function tK(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function tY(t) {
        return Math.abs(t)
    }

    function tX(t) {
        return Math.sign(t)
    }

    function tj(t) {
        return tZ(t).map(Number)
    }

    function tG(t) {
        return t[tQ(t)]
    }

    function tQ(t) {
        return Math.max(0, t.length - 1)
    }

    function tZ(t) {
        return Object.keys(t)
    }

    function tJ(t, i) {
        return void 0 !== i.MouseEvent && t instanceof i.MouseEvent
    }

    function t0(t, i) {
        let s = tY(t - i);

        function a(s) {
            return s < t || s > i
        }
        return {
            length: s,
            max: i,
            min: t,
            constrain: function(s) {
                return a(s) ? s < t ? t : i : s
            },
            reachedAny: a,
            reachedMax: function(t) {
                return t > i
            },
            reachedMin: function(i) {
                return i < t
            },
            removeOffset: function(t) {
                return s ? t - s * Math.ceil((t - i) / s) : t
            }
        }
    }

    function t1() {
        let t = [],
            i = {
                add: function(s, a, r, n = {
                    passive: !0
                }) {
                    return s.addEventListener(a, r, n), t.push(() => s.removeEventListener(a, r, n)), i
                },
                clear: function() {
                    t = t.filter(t => t())
                }
            };
        return i
    }

    function t2(t) {
        let i = t;

        function s(t) {
            return tH(t) ? t : t.get()
        }
        return {
            get: function() {
                return i
            },
            set: function(t) {
                i = s(t)
            },
            add: function(t) {
                i += s(t)
            },
            subtract: function(t) {
                i -= s(t)
            }
        }
    }

    function t5(t, i, s) {
        let a = "x" === t.scroll ? function(t) {
                return `translate3d(${t}px,0px,0px)`
            } : function(t) {
                return `translate3d(0px,${t}px,0px)`
            },
            r = s.style,
            n = !1;
        return {
            clear: function() {
                n || (r.transform = "", s.getAttribute("style") || s.removeAttribute("style"))
            },
            to: function(t) {
                n || (r.transform = a(i.apply(t)))
            },
            toggleActive: function(t) {
                n = !t
            }
        }
    }
    t$.globalOptions = void 0;
    let t3 = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0
    };

    function t8(t, i, s) {
        let a, r, n, o, l;
        let h = t.ownerDocument,
            c = h.defaultView,
            d = function(t) {
                function i(t, i) {
                    return function t(i, s) {
                        return [i, s].reduce((i, s) => (tZ(s).forEach(a => {
                            let r = i[a],
                                n = s[a],
                                o = tK(r) && tK(n);
                            i[a] = o ? t(r, n) : n
                        }), i), {})
                    }(t, i || {})
                }
                return {
                    mergeOptions: i,
                    optionsAtMedia: function(s) {
                        let a = s.breakpoints || {},
                            r = tZ(a).filter(i => t.matchMedia(i).matches).map(t => a[t]).reduce((t, s) => i(t, s), {});
                        return i(s, r)
                    },
                    optionsMediaQueries: function(i) {
                        return i.map(t => tZ(t.breakpoints || {})).reduce((t, i) => t.concat(i), []).map(t.matchMedia)
                    }
                }
            }(c),
            u = (l = [], {
                init: function(t, i) {
                    return (l = t.filter(({
                        options: t
                    }) => !1 !== d.optionsAtMedia(t).active)).forEach(t => t.init(i, d)), t.reduce((t, i) => Object.assign(t, {
                        [i.name]: i
                    }), {})
                },
                destroy: function() {
                    l = l.filter(t => t.destroy())
                }
            }),
            p = t1(),
            m = t1(),
            g = function() {
                let t;
                let i = {},
                    s = {
                        init: function(i) {
                            t = i
                        },
                        emit: function(a) {
                            return (i[a] || []).forEach(i => i(t, a)), s
                        },
                        off: function(t, a) {
                            return i[t] = (i[t] || []).filter(t => t !== a), s
                        },
                        on: function(t, a) {
                            return i[t] = (i[t] || []).concat([a]), s
                        }
                    };
                return s
            }(),
            {
                animationRealms: f
            } = t8,
            {
                mergeOptions: b,
                optionsAtMedia: y,
                optionsMediaQueries: v
            } = d,
            {
                on: w,
                off: S,
                emit: k
            } = g,
            C = !1,
            E = b(t3, t8.globalOptions),
            T = b(E),
            L = [];

        function x(i, s) {
            if (C) return;
            let l = f.find(t => t.window === c),
                d = l || function(t) {
                    let i = 1e3 / 60,
                        s = [],
                        a = null,
                        r = 0,
                        n = 0;

                    function o(l) {
                        a || (a = l);
                        let h = l - a;
                        for (a = l, r += h; r >= i;) s.forEach(({
                            animation: t
                        }) => t.update()), r -= i;
                        let c = tY(r / i);
                        s.forEach(({
                            animation: t
                        }) => t.render(c)), n && t.requestAnimationFrame(o)
                    }
                    return {
                        start: function(i) {
                            s.includes(i) || s.push(i), n || (n = t.requestAnimationFrame(o))
                        },
                        stop: function(i) {
                            (s = s.filter(t => t !== i)).length || (t.cancelAnimationFrame(n), a = null, r = 0, n = 0)
                        },
                        reset: function() {
                            a = null, r = 0
                        },
                        window: t
                    }
                }(c);
            l || f.push(d), T = y(E = b(E, i)), L = s || L,
                function() {
                    let {
                        container: i,
                        slides: s
                    } = T, a = tU(i) ? t.querySelector(i) : i;
                    n = a || t.children[0];
                    let r = tU(s) ? n.querySelectorAll(s) : s;
                    o = [].slice.call(r || n.children)
                }(), a = function i(s, a) {
                    let r = function(t, i, s, a, r, n, o, l) {
                        let h, c; // Options
                        let {
                            align: d,
                            axis: u,
                            direction: p,
                            startIndex: m,
                            inViewThreshold: g,
                            loop: f,
                            duration: b,
                            dragFree: y,
                            dragThreshold: v,
                            slidesToScroll: w,
                            skipSnaps: S,
                            containScroll: k
                        } = n, C = i.getBoundingClientRect(), E = s.map(t => t.getBoundingClientRect()), T = function(t) {
                            let i = "rtl" === t ? -1 : 1;
                            return {
                                apply: function(t) {
                                    return t * i
                                }
                            }
                        }(p), L = function(t, i) {
                            let s = "y" === t ? "y" : "x";
                            return {
                                scroll: s,
                                cross: "y" === t ? "x" : "y",
                                startEdge: "y" === s ? "top" : "rtl" === i ? "right" : "left",
                                endEdge: "y" === s ? "bottom" : "rtl" === i ? "left" : "right",
                                measureSize: function(t) {
                                    let {
                                        width: i,
                                        height: a
                                    } = t;
                                    return "x" === s ? i : a
                                }
                            }
                        }(u, p), x = L.measureSize(C), I = {
                            measure: function(t) {
                                return x * (t / 100)
                            }
                        }, A = function(t, i) {
                            let s = {
                                start: function() {
                                    return 0
                                },
                                center: function(t) {
                                    return (i - t) / 2
                                },
                                end: function(t) {
                                    return i - t
                                }
                            };
                            return {
                                measure: function(a) {
                                    return tH(t) ? i * Number(t) : s[t](a)
                                }
                            }
                        }(d, x), D = !f && !!k, M = f || !!k, {
                            slideSizes: B,
                            slideSizesWithGaps: P
                        } = function(t, i, s, a, r, n) {
                            let {
                                measureSize: o,
                                startEdge: l,
                                endEdge: h
                            } = t, c = s[0] && r, d = function() {
                                if (!c) return 0;
                                let t = s[0];
                                return tY(i[l] - t[l])
                            }(), u = function() {
                                if (!c) return 0;
                                let t = n.getComputedStyle(tG(a));
                                return parseFloat(t.getPropertyValue(`margin-${h}`))
                            }(), p = s.map(o), m = s.map((t, i, s) => {
                                let a = i === tQ(s);
                                return i ? a ? p[i] + u : s[i + 1][l] - t[l] : p[i] + d
                            }).map(tY);
                            return {
                                slideSizes: p,
                                slideSizesWithGaps: m
                            }
                        }(L, C, E, s, M, r), q = function(t, i, s) {
                            let a = tH(s);
                            return {
                                groupSlides: function(r) {
                                    return a ? tj(r).filter(t => t % s == 0).map(t => r.slice(t, t + s)) : tj(r).reduce((s, a) => {
                                        let r = i.slice(tG(s), a + 1),
                                            n = r.reduce((t, i) => t + i, 0);
                                        return !a || n > t ? s.concat(a) : s
                                    }, []).map((t, i, s) => r.slice(t, s[i + 1]))
                                }
                            }
                        }(x, P, w), {
                            snaps: O,
                            snapsAligned: R
                        } = function(t, i, s, a, r, n, o) {
                            let {
                                startEdge: l,
                                endEdge: h
                            } = t, {
                                groupSlides: c
                            } = n, d = c(a).map(t => tG(t)[h] - t[0][l]).map(tY).map(i.measure), u = a.map(t => s[l] - t[l]).map(t => -tY(t)), p = function() {
                                let t = tG(u) - tG(r);
                                return c(u).map(t => t[0]).map((i, s, a) => {
                                    let r = s === tQ(a);
                                    return o && !s ? 0 : o && r ? t : i + d[s]
                                })
                            }();
                            return {
                                snaps: u,
                                snapsAligned: p
                            }
                        }(L, A, C, E, P, q, D), F = -tG(O) + tG(P), {
                            snapsContained: N
                        } = function(t, i, s, a) {
                            let r = t0(-i + t, s[0]),
                                n = s.map(r.constrain).map(t => parseFloat(t.toFixed(3))),
                                o = function() {
                                    if (i <= t) return [r.max];
                                    if ("keepSnaps" === a) return n;
                                    let {
                                        min: s,
                                        max: o
                                    } = function() {
                                        let t = n[0],
                                            i = tG(n),
                                            s = n.lastIndexOf(t),
                                            a = n.indexOf(i) + 1;
                                        return t0(s, a)
                                    }();
                                    return n.slice(s, o)
                                }();
                            return {
                                snapsContained: o
                            }
                        }(x, F, R, k), V = D ? N : R, {
                            limit: z
                        } = function(t, i, s) {
                            let a = i[0],
                                r = s ? a - t : tG(i),
                                n = t0(r, a);
                            return {
                                limit: n
                            }
                        }(F, V, f), _ = function t(i, s, a) {
                            let {
                                constrain: r
                            } = t0(0, i), n = i + 1, o = l(s);

                            function l(t) {
                                return a ? tY((n + t) % n) : r(t)
                            }

                            function h() {
                                return t(i, o, a)
                            }
                            let c = {
                                get: function() {
                                    return o
                                },
                                set: function(t) {
                                    return o = l(t), c
                                },
                                add: function(t) {
                                    return h().set(o + t)
                                },
                                clone: h
                            };
                            return c
                        }(tQ(V), m, f), $ = _.clone(), H = tj(s), U = ({
                            dragHandler: t,
                            scrollBody: i,
                            scrollBounds: s,
                            eventHandler: a,
                            animation: r,
                            options: {
                                loop: n
                            }
                        }) => {
                            let o = t.pointerDown();
                            n || s.constrain(o);
                            let l = i.seek().settled();
                            l && !o && (r.stop(), a.emit("settle")), l || a.emit("scroll")
                        }, W = ({
                            scrollBody: t,
                            translate: i,
                            location: s,
                            offsetLocation: a,
                            scrollLooper: r,
                            slideLooper: n,
                            options: {
                                loop: o
                            }
                        }, l) => {
                            let h = t.velocity();
                            a.set(s.get() - h + h * l), o && (r.loop(t.direction()), n.loop()), i.to(a.get())
                        }, K = {
                            start: () => l.start(et),
                            stop: () => l.stop(et),
                            update: () => U(et),
                            render: t => W(et, t)
                        }, Y = V[_.get()], X = t2(Y), j = t2(Y), G = t2(Y), Q = function(t, i, s, a) {
                            let r = !0,
                                n = 0,
                                o = 0,
                                l = s,
                                h = a,
                                c = t.get(),
                                d = 0;

                            function u(t) {
                                return l = t, m
                            }

                            function p(t) {
                                return h = t, m
                            }
                            let m = {
                                direction: function() {
                                    return o
                                },
                                duration: function() {
                                    return l
                                },
                                velocity: function() {
                                    return n
                                },
                                seek: function() {
                                    let s = i.get() - t.get(),
                                        a = !l,
                                        u = 0;
                                    return a ? (n = 0, t.set(i), u = s) : (n += s / l, n *= h, c += n, t.add(n), u = c - d), o = tX(u), d = c, r = .001 > tY(s), m
                                },
                                settled: function() {
                                    return r
                                },
                                useBaseFriction: function() {
                                    return p(a)
                                },
                                useBaseDuration: function() {
                                    return u(s)
                                },
                                useFriction: p,
                                useDuration: u
                            };
                            return m
                        }(X, G, b, .68), Z = function(t, i, s, a, r) {
                            let {
                                reachedAny: n,
                                removeOffset: o,
                                constrain: l
                            } = a;

                            function h(t) {
                                return t.concat().sort((t, i) => tY(t) - tY(i))[0]
                            }

                            function c(i, a) {
                                let r = [i, i + s, i - s];
                                if (!t) return r[0];
                                if (!a) return h(r);
                                let n = r.filter(t => tX(t) === a);
                                return h(n)
                            }
                            return {
                                byDistance: function(s, a) {
                                    let h = r.get() + s,
                                        {
                                            index: d,
                                            distance: u
                                        } = function(s) {
                                            let a = t ? o(s) : l(s),
                                                r = i.map(t => t - a).map(t => c(t, 0)).map((t, i) => ({
                                                    diff: t,
                                                    index: i
                                                })).sort((t, i) => tY(t.diff) - tY(i.diff)),
                                                {
                                                    index: n
                                                } = r[0];
                                            return {
                                                index: n,
                                                distance: a
                                            }
                                        }(h),
                                        p = !t && n(h);
                                    if (!a || p) return {
                                        index: d,
                                        distance: s
                                    };
                                    let m = i[d] - u,
                                        g = s + c(m, 0);
                                    return {
                                        index: d,
                                        distance: g
                                    }
                                },
                                byIndex: function(t, s) {
                                    let a = i[t] - r.get(),
                                        n = c(a, s);
                                    return {
                                        index: t,
                                        distance: n
                                    }
                                },
                                shortcut: c
                            }
                        }(f, V, F, z, G), J = function(t, i, s, a, r, n, o) {
                            function l(a) {
                                let l = a.distance,
                                    h = a.index !== i.get();
                                n.add(l), l && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), h && (s.set(i.get()), i.set(a.index), o.emit("select"))
                            }
                            return {
                                distance: function(t, i) {
                                    let s = a.byDistance(t, i);
                                    l(s)
                                },
                                index: function(t, s) {
                                    let r = i.clone().set(t),
                                        n = a.byIndex(r.get(), s);
                                    l(n)
                                }
                            }
                        }(K, _, $, Z, Q, G, o), ee = function(t, i, s, a, r, n, o) {
                            let {
                                removeOffset: l,
                                constrain: h
                            } = r, c = n ? [0, i, -i] : [0], d = u(c, o);

                            function u(i, r) {
                                let n = i || c,
                                    o = function(t) {
                                        let i = t || 0;
                                        return s.map(t => {
                                            let s = t0(.5, t - .5);
                                            return s.constrain(t * i)
                                        })
                                    }(r);
                                return n.reduce((i, r) => {
                                    let n = a.map((i, a) => ({
                                        start: i - s[a] + o[a] + r,
                                        end: i + t - o[a] + r,
                                        index: a
                                    }));
                                    return i.concat(n)
                                }, [])
                            }
                            return {
                                check: function(t, i) {
                                    let s = n ? l(t) : h(t);
                                    return (i || d).reduce((t, i) => {
                                        let {
                                            index: a,
                                            start: r,
                                            end: n
                                        } = i, o = t.includes(a);
                                        return !o && r < s && n > s ? t.concat([a]) : t
                                    }, [])
                                },
                                findSlideBounds: u
                            }
                        }(x, F, B, O, z, f, g), et = {
                            ownerDocument: a,
                            ownerWindow: r,
                            eventHandler: o,
                            containerRect: C,
                            slideRects: E,
                            animation: K,
                            axis: L,
                            direction: T,
                            dragHandler: function(t, i, s, a, r, n, o, l, h, c, d, u, p, m, g, f, b, y, v) {
                                let {
                                    cross: w
                                } = t, S = ["INPUT", "SELECT", "TEXTAREA"], k = {
                                    passive: !1
                                }, C = t1(), E = t1(), T = t0(50, 225).constrain(g.measure(20)), L = {
                                    mouse: 300,
                                    touch: 400
                                }, x = {
                                    mouse: 500,
                                    touch: 600
                                }, I = f ? 43 : 25, A = !1, D = 0, M = 0, B = !1, P = !1, q = !1, O = !1;

                                function R(t) {
                                    let s = o.readPoint(t),
                                        a = o.readPoint(t, w),
                                        r = tY(s - D),
                                        l = tY(a - M);
                                    if (!P && !O && (!t.cancelable || !(P = r > l))) return F(t);
                                    let c = o.pointerMove(t);
                                    r > b && (q = !0), d.useFriction(.3).useDuration(1), h.start(), n.add(i.apply(c)), t.preventDefault()
                                }

                                function F(t) {
                                    let s = u.byDistance(0, !1),
                                        a = s.index !== p.get(),
                                        r = o.pointerUp(t) * function() {
                                            let t = f ? x : L,
                                                i = O ? "mouse" : "touch";
                                            return t[i]
                                        }(),
                                        n = function(t, i) {
                                            let s = p.add(-1 * tX(t)),
                                                a = u.byDistance(t, !f).distance;
                                            return f || tY(t) < T ? a : y && i ?.5 * a : u.byIndex(s.get(), 0).distance
                                        }(i.apply(r), a),
                                        l = function(t, i) {
                                            var s, a;
                                            if (0 === t || 0 === i || tY(t) <= tY(i)) return 0;
                                            let r = (s = tY(t), a = tY(i), tY(s - a));
                                            return tY(r / t)
                                        }(r, n);
                                    P = !1, B = !1, E.clear(), d.useDuration(I - 10 * l).useFriction(.68 + l / 50), c.distance(n, !f), O = !1, m.emit("pointerUp")
                                }

                                function N(t) {
                                    q && (t.stopPropagation(), t.preventDefault())
                                }
                                return {
                                    init: function(t, i) {
                                        i && C.add(s, "dragstart", t => t.preventDefault(), k).add(s, "touchmove", () => void 0, k).add(s, "touchend", () => void 0).add(s, "touchstart", h).add(s, "mousedown", h).add(s, "touchcancel", F).add(s, "contextmenu", F).add(s, "click", N, !0);

                                        function h(h) {
                                            (tW(i) || i(t, h)) && function(t) {
                                                let i = tJ(t, r);
                                                O = i, (!i || 0 === t.button) && ! function(t) {
                                                    let i = t.nodeName || "";
                                                    return S.includes(i)
                                                }(t.target) && (q = f && i && !t.buttons && A, A = tY(n.get() - l.get()) >= 2, B = !0, o.pointerDown(t), d.useFriction(0).useDuration(0), n.set(l), function() {
                                                    let t = O ? a : s;
                                                    E.add(t, "touchmove", R, k).add(t, "touchend", F).add(t, "mousemove", R, k).add(t, "mouseup", F)
                                                }(), D = o.readPoint(t), M = o.readPoint(t, w), m.emit("pointerDown"))
                                            }(h)
                                        }
                                    },
                                    pointerDown: function() {
                                        return B
                                    },
                                    destroy: function() {
                                        C.clear(), E.clear()
                                    }
                                }
                            }(L, T, t, a, r, G, function(t, i) {
                                let s, a;

                                function r(t) {
                                    return t.timeStamp
                                }

                                function n(s, a) {
                                    let r = a || t.scroll,
                                        n = `client${"x"===r?"X":"Y"}`;
                                    return (tJ(s, i) ? s : s.touches[0])[n]
                                }
                                return {
                                    pointerDown: function(t) {
                                        return s = t, a = t, n(t)
                                    },
                                    pointerMove: function(t) {
                                        let i = n(t) - n(a),
                                            o = r(t) - r(s) > 170;
                                        return a = t, o && (s = t), i
                                    },
                                    pointerUp: function(t) {
                                        if (!s || !a) return 0;
                                        let i = n(a) - n(s),
                                            o = r(t) - r(s),
                                            l = r(t) - r(a) > 170,
                                            h = i / o,
                                            c = o && !l && tY(h) > .1;
                                        return c ? h : 0
                                    },
                                    readPoint: n
                                }
                            }(L, r), X, K, J, Q, Z, _, o, I, y, v, S, 0),
                            eventStore: t1(),
                            percentOfView: I,
                            index: _,
                            indexPrevious: $,
                            limit: z,
                            location: X,
                            offsetLocation: j,
                            options: n,
                            resizeHandler: function(t, i, s, a, r) {
                                let n, o;
                                let l = [],
                                    h = !1;

                                function c(t) {
                                    return r.measureSize(t.getBoundingClientRect())
                                }
                                return {
                                    init: function(r, d) {
                                        if (!d) return;
                                        o = c(t), l = a.map(c), n = new ResizeObserver(n => {
                                            !h && (tW(d) || d(r, n)) && function(n) {
                                                for (let h of n) {
                                                    let n = h.target === t,
                                                        d = a.indexOf(h.target),
                                                        u = n ? o : l[d],
                                                        p = c(n ? t : a[d]);
                                                    if (u !== p) {
                                                        s.requestAnimationFrame(() => {
                                                            r.reInit(), i.emit("resize")
                                                        });
                                                        break
                                                    }
                                                }
                                            }(n)
                                        });
                                        let u = [t].concat(a);
                                        u.forEach(t => n.observe(t))
                                    },
                                    destroy: function() {
                                        n && n.disconnect(), h = !0
                                    }
                                }
                            }(i, o, r, s, L),
                            scrollBody: Q,
                            scrollBounds: function(t, i, s, a, r) {
                                let n = r.measure(10),
                                    o = r.measure(50),
                                    l = t0(.1, .99),
                                    h = !1;
                                return {
                                    constrain: function(r) {
                                        if (!(!h && t.reachedAny(s.get()) && t.reachedAny(i.get()))) return;
                                        let c = t.reachedMin(i.get()) ? "min" : "max",
                                            d = tY(t[c] - i.get()),
                                            u = s.get() - i.get(),
                                            p = l.constrain(d / o);
                                        s.subtract(u * p), !r && tY(u) < n && (s.set(t.constrain(s.get())), a.useDuration(25).useBaseFriction())
                                    },
                                    toggleActive: function(t) {
                                        h = !t
                                    }
                                }
                            }(z, X, G, Q, I),
                            scrollLooper: function(t, i, s, a) {
                                let r = i.min + .1,
                                    n = i.max + .1,
                                    {
                                        reachedMin: o,
                                        reachedMax: l
                                    } = t0(r, n);
                                return {
                                    loop: function(i) {
                                        if (!(1 === i ? l(s.get()) : -1 === i && o(s.get()))) return;
                                        let r = t * (-1 * i);
                                        a.forEach(t => t.add(r))
                                    }
                                }
                            }(F, z, j, [X, j, G]),
                            scrollProgress: function(t) {
                                let {
                                    max: i,
                                    length: s
                                } = t;
                                return {
                                    get: function(t) {
                                        return -((t - i) / s)
                                    }
                                }
                            }(z),
                            scrollSnaps: V,
                            scrollTarget: Z,
                            scrollTo: J,
                            slideLooper: function(t, i, s, a, r, n, o, l, h) {
                                let c = tj(r),
                                    d = tj(r).reverse(),
                                    u = (function() {
                                        let t = n[0] - 1,
                                            i = m(d, t);
                                        return g(i, "end")
                                    })().concat(function() {
                                        let t = s - n[0] - 1,
                                            i = m(c, t);
                                        return g(i, "start")
                                    }());

                                function p(t, i) {
                                    return t.reduce((t, i) => t - r[i], i)
                                }

                                function m(t, i) {
                                    return t.reduce((t, s) => {
                                        let a = p(t, i);
                                        return a > 0 ? t.concat([s]) : t
                                    }, [])
                                }

                                function g(s, r) {
                                    let n = "start" === r,
                                        c = o.findSlideBounds([n ? -a : a]);
                                    return s.map(s => {
                                        let r = n ? 0 : -a,
                                            o = n ? a : 0,
                                            d = c.filter(t => t.index === s)[0],
                                            u = d[n ? "end" : "start"];
                                        return {
                                            index: s,
                                            slideLocation: t2(-1),
                                            translate: t5(t, i, h[s]),
                                            target: () => l.get() > u ? r : o
                                        }
                                    })
                                }
                                return {
                                    canLoop: function() {
                                        return u.every(({
                                            index: t
                                        }) => {
                                            let i = c.filter(i => i !== t);
                                            return .1 >= p(i, s)
                                        })
                                    },
                                    clear: function() {
                                        u.forEach(t => t.translate.clear())
                                    },
                                    loop: function() {
                                        u.forEach(t => {
                                            let {
                                                target: i,
                                                translate: s,
                                                slideLocation: a
                                            } = t, r = i();
                                            r !== a.get() && (s.to(r), a.set(r))
                                        })
                                    },
                                    loopPoints: u
                                }
                            }(L, T, x, F, P, V, ee, j, s),
                            slidesHandler: (c = !1, {
                                init: function(t, s) {
                                    s && (h = new MutationObserver(i => {
                                        !c && (tW(s) || s(t, i)) && function(i) {
                                            for (let s of i)
                                                if ("childList" === s.type) {
                                                    t.reInit(), o.emit("slidesChanged");
                                                    break
                                                }
                                        }(i)
                                    })).observe(i, {
                                        childList: !0
                                    })
                                },
                                destroy: function() {
                                    h && h.disconnect(), c = !0
                                }
                            }),
                            slidesInView: ee,
                            slideIndexes: H,
                            slidesToScroll: q,
                            target: G,
                            translate: t5(L, T, i)
                        };
                        return et
                    }(t, n, o, h, c, s, g, a);
                    if (s.loop && !r.slideLooper.canLoop()) {
                        let t = Object.assign({}, s, {
                            loop: !1
                        });
                        return i(t, a)
                    }
                    return r
                }(T, d), v([E, ...L.map(({
                    options: t
                }) => t)]).forEach(t => p.add(t, "change", I)), T.active && (a.translate.to(a.location.get()), a.eventHandler.init(P), a.resizeHandler.init(P, T.watchResize), a.slidesHandler.init(P, T.watchSlides), m.add(h, "visibilitychange", () => {
                    h.hidden && d.reset()
                }), a.options.loop && a.slideLooper.loop(), n.offsetParent && o.length && a.dragHandler.init(P, T.watchDrag), r = u.init(L, P))
        }

        function I(t, i) {
            let s = B();
            A(), x(b({
                startIndex: s
            }, t), i), g.emit("reInit")
        }

        function A() {
            a.dragHandler.destroy(), a.animation.stop(), a.eventStore.clear(), a.translate.clear(), a.slideLooper.clear(), a.resizeHandler.destroy(), a.slidesHandler.destroy(), u.destroy(), p.clear(), m.clear()
        }

        function D(t) {
            let i = a[t ? "target" : "location"].get(),
                s = T.loop ? "removeOffset" : "constrain";
            return a.slidesInView.check(a.limit[s](i))
        }

        function M(t, i, s) {
            T.active && !C && (a.scrollBody.useBaseFriction().useDuration(i ? 0 : T.duration), a.scrollTo.index(t, s || 0))
        }

        function B() {
            return a.index.get()
        }
        let P = {
            canScrollNext: function() {
                let t = a.index.add(1).get();
                return t !== B()
            },
            canScrollPrev: function() {
                let t = a.index.add(-1).get();
                return t !== B()
            },
            containerNode: function() {
                return n
            },
            internalEngine: function() {
                return a
            },
            destroy: function() {
                C || (C = !0, p.clear(), A(), g.emit("destroy"))
            },
            off: S,
            on: w,
            emit: k,
            plugins: function() {
                return r
            },
            previousScrollSnap: function() {
                return a.indexPrevious.get()
            },
            reInit: I,
            rootNode: function() {
                return t
            },
            scrollNext: function(t) {
                let i = a.index.add(1).get();
                M(i, !0 === t, -1)
            },
            scrollPrev: function(t) {
                let i = a.index.add(-1).get();
                M(i, !0 === t, 1)
            },
            scrollProgress: function() {
                return a.scrollProgress.get(a.location.get())
            },
            scrollSnapList: function() {
                return a.scrollSnaps.map(a.scrollProgress.get)
            },
            scrollTo: M,
            selectedScrollSnap: B,
            slideNodes: function() {
                return o
            },
            slidesInView: D,
            slidesNotInView: function(t) {
                let i = D(t);
                return a.slideIndexes.filter(t => !i.includes(t))
            }
        };
        return x(i, s), setTimeout(() => g.emit("init"), 0), P
    }
    t8.animationRealms = [], t8.globalOptions = void 0;
    let t9 = {
        active: !0,
        breakpoints: {},
        selected: "is-selected",
        draggable: "is-draggable",
        dragging: "is-dragging"
    };

    function t6(t, i) {
        let s = t.classList;
        i && s.contains(i) && s.remove(i)
    }

    function t4(t, i) {
        let s = t.classList;
        i && !s.contains(i) && s.add(i)
    }

    function t7(t = {}) {
        let i, s, a, r;
        let n = ["select", "pointerUp"],
            o = ["pointerDown", "pointerUp"];

        function l(t, s) {
            "pointerDown" === s ? t4(a, i.dragging) : t6(a, i.dragging)
        }

        function h() {
            let t = s.slidesInView(!0),
                a = s.slidesNotInView(!0);
            a.forEach(t => t6(r[t], i.selected)), t.forEach(t => t4(r[t], i.selected))
        }
        return {
            name: "classNames",
            options: t,
            init: function(c, d) {
                s = c;
                let {
                    mergeOptions: u,
                    optionsAtMedia: p
                } = d, m = u(t9, t7.globalOptions), g = u(m, t);
                i = p(g), a = s.rootNode(), r = s.slideNodes();
                let f = !!s.internalEngine().options.watchDrag;
                f && t4(a, i.draggable), i.dragging && o.forEach(t => s.on(t, l)), i.selected && (n.forEach(t => s.on(t, h)), h())
            },
            destroy: function() {
                t6(a, i.draggable), o.forEach(t => s.off(t, l)), n.forEach(t => s.off(t, h)), r.forEach(t => t6(t, i.selected))
            }
        }
    }
    t7.globalOptions = void 0;
    let ie = {
        idle: "idle",
        running: "running",
        paused: "paused",
        resumed: "resumed"
    };
    var it = class {
        constructor(t, i) {
            this.interval = i, this.callback = t, this.state = ie.idle, this.pausedTime = 0, this.remainingTime = 0
        }
        proxyCallback() {
            this.lastFireTime = new Date, this.callback()
        }
        start() {
            this.timerId = setInterval(() => this.proxyCallback(), this.interval), this.lastFireTime = new Date, this.state = ie.running
        }
        pause() {
            (this.state === ie.running || this.state === ie.resumed) && (this.remainingTime = this.interval - (new Date - this.lastFireTime) + this.pausedTime, this.lastPauseTime = new Date, clearInterval(this.timerId), clearTimeout(this.resumeId), this.state = ie.paused)
        }
        resume() {
            this.state === ie.paused && (this.pausedTime += new Date - this.lastPauseTime, this.state = ie.resumed, this.resumeId = setTimeout(() => this.timeoutCallback(), this.remainingTime))
        }
        timeoutCallback() {
            this.state === ie.resumed && (this.pausedTime = 0, this.proxyCallback(), this.start())
        }
        stop() {
            this.state !== ie.idle && (clearInterval(this.timerId), clearTimeout(this.resumeId), this.state = ie.idle)
        }
        setInterval(t) {
            this.state === ie.running ? (this.pause(), this.interval = t, this.resume()) : this.interval = t
        }
    };
    let ii = (t, i) => {
            let s = new it(() => {
                let i = t.scrollSnapList().length - 1,
                    s = t.selectedScrollSnap() === i;
                s ? t.scrollTo(0) : t.scrollNext()
            }, i);
            return {
                play: () => {
                    s.resume()
                },
                stop: () => {
                    s.stop()
                },
                start: () => {
                    s.start()
                },
                pause: () => {
                    s.pause()
                }
            }
        },
        is = (t, i) => {
            let s = 0,
                a = t.internalEngine(),
                r = -(i / 5),
                n = () => {
                    a.scrollTo.distance(r), s = requestAnimationFrame(n)
                };
            return {
                play: () => {
                    s = requestAnimationFrame(n)
                },
                pause: () => {
                    s = cancelAnimationFrame(s) || 0
                },
                stop: () => {
                    cancelAnimationFrame(s)
                }
            }
        };
    var ia = class extends L {
            constructor() {
                super(), this.handleCarouselTargetKeyDown = t => {
                    t.preventDefault();
                    let i = this.focusableTargets.findIndex(i => i === t.target),
                        s = this.focusableTargets[i],
                        a = this.focusableTargets[i + 1],
                        r = this.focusableTargets[i - 1];
                    9 === t.keyCode && (t.preventDefault(), document.activeElement === s && this.focusScroll(s), t.shiftKey || (a ? this.focusScroll(a) : document.activeElement.blur()), t.shiftKey && (r ? this.focusScroll(r) : document.activeElement.blur()))
                }, this.handleCarouselResize = () => {
                    if (this.isEditorMode) {
                        let t = tx() ? "mobile" : "desktop",
                            i = this.lastViewModeIsMobile !== t;
                        i && this.isForceStopped && (this.forcePlay(), this.changePlayState(!0)), this.lastViewModeIsMobile = t
                    }
                }, this.focusScroll = t => {
                    let i = [...this.embla.slideNodes()],
                        s = i.findIndex(i => i.contains(t)); - 1 !== s && (this.embla.scrollTo(s, !0), this.forceStop()), t.focus()
                }, this.handleCarouselEnter = () => {
                    let t = tx();
                    t || this.changePlayState(!1)
                }, this.handleCarouselSelect = () => {
                    this.isTouchOnCarousel && this.forceStop()
                }, this.handleCarouselPointerUp = () => {
                    this.isTouchOnCarousel = !1
                }, this.handleCarouselPointerDown = () => {
                    this.isTouchOnCarousel = !0
                }, this.handleCarouselLeave = () => {
                    let t = tx();
                    t || this.changePlayState(!0)
                }, this.handleKeydown = t => {
                    let i = t.key || t.keyCode,
                        s = H(i),
                        a = $(i);
                    s && this.embla.scrollPrev(), a && this.embla.scrollNext()
                }, this.handleBlockSelect = ({
                    detail: {
                        sectionId: t,
                        blockId: i,
                        load: s
                    }
                }) => {
                    if (this.dataset.sectionId === t) {
                        let t = this.embla.slideNodes(),
                            a = t.findIndex(({
                                attributes: t
                            }) => t["block-id"] ?.value === i); - 1 !== a && (this.embla.scrollTo(a, s), this.forceStop())
                    }
                }, this.handleSectionLoad = ({
                    detail: {
                        sectionId: t
                    }
                }) => {
                    this.dataset.sectionId === t && this.reInit()
                }, this.getOptions = () => ({
                    loop: this.hasAttribute("data-loop"),
                    dragFree: this.hasAttribute("data-drag-free"),
                    watchDrag: this.hasAttribute("data-draggable"),
                    skipSnaps: this.hasAttribute("data-skip-snaps"),
                    align: this.getAttribute("data-align"),
                    containScroll: this.getAttribute("data-contain-scroll"),
                    inViewThreshold: +(this.dataset.inViewThreshhold || 0) || .75,
                    axis: this.getAttribute("data-axis"),
                    speed: 50,
                    breakpoints: this.hasAttribute("data-breakpoints") ? JSON.parse(this.dataset.breakpoints) : void 0
                }), this.getPlugins = () => {
                    let t = [],
                        i = t7();
                    if (t.push(i), this.hasAttribute("data-with-wheel-gestures")) {
                        let i = t$({
                            forceWheelAxis: this.getAttribute("data-axis")
                        });
                        t.push(i)
                    }
                    return t
                }, this.changePlayState = t => {
                    (this.withOneAtTimeAutoplay || this.withSeamlessAutoplay) && (this.isForceStopped || (this.isPlay = t, t ? this.autoplay.play() : this.autoplay.pause()))
                }, this.reInit = (t = {}) => {
                    let i = { ...this.getOptions(),
                            ...t
                        },
                        s = this.getPlugins();
                    this.embla.reInit(i, s)
                }, this.scrollNext = () => {
                    this.embla.scrollNext()
                }, this.scrollPrev = () => {
                    this.embla.scrollPrev()
                }, this.canScrollNext = () => this.embla.canScrollNext(), this.canScrollPrev = () => this.embla.canScrollPrev(), this.scrollToIndex = t => {
                    this.embla.scrollTo(t)
                };
                let t = +(this.dataset.autoplayInterval || 0);
                this.withOneAtTimeAutoplay = "one_at_time" === this.dataset.animationType, this.withSeamlessAutoplay = "seamless" === this.dataset.animationType, this.isPlay = t > 0, this.isForceStopped = !1, this.resizeObserver = new ResizeObserver(this.handleCarouselResize), this.resizeObserver.observe(this), this.focusableTargets = [...this.querySelectorAll(R())]
            }
            connectedCallback() {
                this.setCarousel(), this.focusableTargets.forEach(t => {
                    t.addEventListener("keydown", this.handleCarouselTargetKeyDown)
                }), this.withStopOnHover && (this.addEventListener("mouseenter", this.handleCarouselEnter), this.addEventListener("mouseleave", this.handleCarouselLeave)), this.addEventListener("keydown", this.handleKeydown), this.embla.on("select", this.handleCarouselSelect), this.embla.on("pointerUp", this.handleCarouselPointerUp), this.embla.on("pointerDown", this.handleCarouselPointerDown), this.isEditorMode && (this.editor.subscribe("BLOCK_SELECT", this.handleBlockSelect), this.editor.subscribe("SECTION_LOAD", this.handleSectionLoad))
            }
            disconnectedCallback() {
                this.focusableTargets.forEach(t => {
                    t.removeEventListener("keydown", this.handleCarouselTargetKeyDown)
                }), this.resizeObserver.disconnect(), this.withStopOnHover && (this.removeEventListener("mouseenter", this.handleCarouselEnter), this.removeEventListener("mouseleave", this.handleCarouselLeave)), this.removeEventListener("keydown", this.handleKeydown), this.embla.off("select", this.handleCarouselSelect), this.embla.off("pointerUp", this.handleCarouselPointerUp), this.embla.off("pointerDown", this.handleCarouselPointerDown), this.isEditorMode && this.editor.destroy(), this.embla.destroy()
            }
            setCarousel() {
                let t = this.querySelector("[data-carousel-viewport]");
                t && (this.embla = t8(t, this.getOptions(), this.getPlugins()), this.withOneAtTimeAutoplay && (this.autoplay = ii(this.embla, 1e3 * this.autoplayInterval), this.autoplay.start()), this.withSeamlessAutoplay && (this.autoplay = is(this.embla, this.autoplayInterval), this.autoplay.play()))
            }
            getClassNamesPlugin() {
                return t7()
            }
            forceStop() {
                (this.withOneAtTimeAutoplay || this.withSeamlessAutoplay) && (this.autoplay.stop(), this.isPlay = !1, this.isForceStopped = !0, this.emit("forceChangePlayState", {}))
            }
            forcePlay() {
                (this.withOneAtTimeAutoplay || this.withSeamlessAutoplay) && (this.isForceStopped = !1, this.isPlay = !0, this.autoplay.start(), this.changePlayState(!0), this.emit("forceChangePlayState", {}))
            }
            get withStopOnHover() {
                return this.hasAttribute("with-stop-on-hover")
            }
            get autoplayInterval() {
                return +(this.dataset.autoplayInterval || 0)
            }
        },
        ir = class extends L {
            constructor() {
                super(), this.handleCarouselChangePlayState = () => {
                    this.updatePlayState()
                }, this.handleButtonClick = t => {
                    if (t.stopPropagation(), !this.carousel) return;
                    let i = this.carousel.isForceStopped;
                    i ? this.carousel.forcePlay() : this.carousel.forceStop()
                }, this.button = this.querySelector("[data-carousel-play-button]")
            }
            connectedCallback() {
                this.updatePlayState(), this.button && this.button.addEventListener("click", this.handleButtonClick), this.carousel && (customElements.upgrade(this.carousel) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                    , customElements.whenDefined("carousel-component").then(() => {
                        this.carousel.subscribe("forceChangePlayState", this.handleCarouselChangePlayState)
                    }))
            }
            disconnectedCallback() {
                this.button && this.button.removeEventListener("click", this.handleButtonClick), this.carousel && customElements.whenDefined("carousel-component").then(() => {
                    this.carousel.unsubscribe("forceChangePlayState", this.handleCarouselChangePlayState)
                })
            }
            updatePlayState() {
                if (!this.carousel || !this.button) return;
                let t = this.carousel.isForceStopped;
                this.button.setAttribute("data-autoplay-stopped", t ? "true" : "false")
            }
            get carousel() {
                return this.closest("carousel-component")
            }
        };
    let io = (t, i) => {
        let s;
        return (...a) => {
            clearTimeout(s), s = setTimeout(() => t.apply(void 0, a), i)
        }
    };
    var il = class extends L {
            constructor() {
                super(), this.handleSettle = () => {
                    this.update()
                }, this.handleCarouselReInit = () => {
                    this.embla.reInit(this.getOptions(), this.getPlugins())
                }, this.handleResize = io(() => {
                    this.embla.reInit(this.getOptions(), this.getPlugins()), this.update()
                }, 100), this.handleCarouselSelect = () => {
                    if (!this.carousel) return;
                    let t = [...this.embla.slideNodes()],
                        i = this.carousel.embla.selectedScrollSnap();
                    t.forEach(t => {
                        let s = +t.dataset.dotIndex === i;
                        t.classList.toggle("is-primary", s)
                    }), this.embla.scrollTo(i)
                }, this.getOptions = () => ({
                    inViewThreshold: +(this.dataset.inViewThreshhold || 0) || .5,
                    containScroll: this.getAttribute("data-contain-scroll"),
                    align: this.getAttribute("data-align"),
                    speed: 80,
                    skipSnaps: this.hasAttribute("data-skip-snaps"),
                    draggable: this.hasAttribute("is-draggable"),
                    axis: this.getAttribute("data-axis")
                }), this.getPlugins = () => {
                    let t = [],
                        i = t7();
                    if (t.push(i), this.hasAttribute("data-with-wheel-gestures")) {
                        let i = t$({
                            forceWheelAxis: this.getAttribute("data-axis")
                        });
                        t.push(i)
                    }
                    return t
                }, this.scrollNext = () => {
                    this.carousel && this.carousel.embla.scrollNext()
                }, this.scrollPrev = () => {
                    this.carousel && this.carousel.embla.scrollPrev()
                }, this.canScrollNext = () => !!this.carousel && this.carousel.canScrollNext(), this.canScrollPrev = () => !!this.carousel && this.carousel.canScrollPrev()
            }
            connectedCallback() {
                this.setCarousel(), this.update(), this.carousel && (this.carousel.embla.on("reInit", this.handleCarouselReInit), this.carousel.embla.on("select", this.handleCarouselSelect)), this.embla.on("resize", this.handleResize), this.embla.on("settle", this.handleSettle)
            }
            disconnectedCallback() {
                this.carousel && (this.carousel.embla.off("reInit", this.handleCarouselReInit), this.carousel.embla.off("select", this.handleCarouselSelect)), this.embla.off("settle", this.handleSettle), this.embla.off("resize", this.handleResize), this.embla.destroy()
            }
            reInit() {
                this.embla.reInit(this.getOptions(), this.getPlugins())
            }
            setCarousel() {
                let t = this.querySelector("[data-carousel-viewport]");
                t && (this.embla = t8(t, this.getOptions(), this.getPlugins()))
            }
            update() {
                let t = [...this.embla.slideNodes()],
                    i = t.map((t, i) => i),
                    s = this.embla.slidesInView();
                t.forEach((t, a) => {
                    t.classList.remove("is-prev-prev");
                    let r = s[0],
                        n = s[s.length - 1],
                        o = i[0],
                        l = i[i.length - 1];
                    (a === r || a === n) && a !== l && a !== o && t.classList.add("is-prev-prev")
                })
            }
            get carousel() {
                return this.closest("carousel-component")
            }
        },
        ih = class extends L {
            constructor() {
                super(), this.handleCarouselForceChangePlayState = () => {
                    if (!this.autoplayLoader || !this.carousel) return;
                    let t = this.carousel.isForceStopped;
                    this.autoplayLoader.setAttribute("data-autoplay-stopped", t ? "true" : "false")
                }, this.handleCarouselChangePlayState = () => {
                    this.updateAutoplayIndicator()
                }, this.handleDotClick = () => {
                    this.scroll()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.scroll())
                }, this.autoplayLoader = this.querySelector("[data-autoplay-indicator]")
            }
            connectedCallback() {
                this.updateAutoplayIndicator(), this.carousel && (customElements.upgrade(this.carousel) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                    , customElements.whenDefined("carousel-component").then(() => {
                        this.carousel.subscribe("changePlayState", this.handleCarouselChangePlayState), this.carousel.subscribe("forceChangePlayState", this.handleCarouselForceChangePlayState)
                    })), this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleDotClick)
            }
            disconnectedCallback() {
                this.carousel && customElements.whenDefined("carousel-component").then(() => {
                    this.carousel.unsubscribe("changePlayState", this.handleCarouselChangePlayState), this.carousel.unsubscribe("forceChangePlayState", this.handleCarouselForceChangePlayState)
                }), this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleDotClick)
            }
            updateAutoplayIndicator() {
                if (!this.carousel) return;
                let t = this.carousel.isPlay;
                this.autoplayLoader && this.autoplayLoader.setAttribute("data-play-state", t ? "true" : "false")
            }
            scroll() {
                if (!this.carousel) return;
                let t = +this.dataset.dotIndex;
                this.carousel.embla.scrollTo(t), this.carousel.forceStop()
            }
            get carousel() {
                return this.closest("carousel-component")
            }
            get dotsCarousel() {
                return this.closest("carousel-dots")
            }
        },
        ic = class extends L {
            constructor() {
                super(), this.handleButtonClick = () => {
                    this.trigger()
                }, this.handleCarouselReInit = () => {
                    this.update()
                }, this.handleCarouselSelect = () => {
                    this.update()
                }, this.handleCarouselScroll = io(() => {
                    this.update()
                }, 100), this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.trigger())
                }, this.updateDisabled = () => {
                    this.toggleAttribute("disabled", !this.canScroll())
                }
            }
            connectedCallback() {
                this.update(), this.carousel && (this.carousel.embla.on("reInit", this.handleCarouselReInit), this.carousel.embla.on("select", this.handleCarouselSelect), this.carousel.embla.on("scroll", this.handleCarouselScroll)), this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.carousel && (this.carousel.embla.off("reInit", this.handleCarouselReInit), this.carousel.embla.off("select", this.handleCarouselSelect), this.carousel.embla.off("scroll", this.handleCarouselScroll)), this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            update() {
                this.updateDisabled(), this.updateVisible()
            }
            updateVisible() {
                if (!this.carousel) return;
                let t = [...Array(this.carousel.embla.slideNodes().length).keys()],
                    i = t.length - 1,
                    s = this.carousel.embla.slidesInView(),
                    a = "next" === this.dataset.scrollDirection,
                    r = a ? s.includes(i) : s.includes(0);
                this.toggleAttribute("has-not-slides-not-in-view", r)
            }
            canScroll() {
                if (!this.carousel) return !1;
                let t = "next" === this.dataset.scrollDirection,
                    i = t ? this.carousel.canScrollNext() : this.carousel.canScrollPrev();
                return i
            }
            trigger() {
                if (!this.carousel) return;
                let {
                    scrollNext: t,
                    scrollPrev: i
                } = this.carousel, s = "next" === this.dataset.scrollDirection;
                s ? t() : i()
            }
            get carousel() {
                let t = this.closest("carousel-dots"),
                    i = this.closest("carousel-component");
                return t || i
            }
        },
        id = class extends L {
            constructor() {
                super(), this.handleProgress = () => {
                    this.updateProgressBar()
                }, this.handleCarouselReInit = () => {
                    this.updateProgressBar()
                }, this.eventSetProgress = "scroll" === this.dataset.target ? "scroll" : "settle"
            }
            connectedCallback() {
                this.updateProgressBar(), this.carousel && (this.carousel.embla.on(this.eventSetProgress, this.handleProgress), this.carousel.embla.on("reInit", this.handleCarouselReInit))
            }
            disconnectedCallback() {
                this.carousel && (this.carousel.embla.off(this.eventSetProgress, this.handleProgress), this.carousel.embla.off("reInit", this.handleCarouselReInit))
            }
            updateProgressBar() {
                let t = this.querySelector("[data-carousel-progress-indicator]");
                if (!t) return;
                let i = this.getProgress(),
                    s = "vertical" === this.dataset.axis;
                t.style.transform = s ? `translate3d(0, ${i}%, 0)` : `translate3d(${i}%, 0, 0)`
            }
            getProgress() {
                let t = "scroll" === this.dataset.target;
                return t ? this.getProgressByScroll() : this.getProgressBySlideInView()
            }
            getProgressBySlideInView() {
                if (!this.carousel) return 0;
                let t = this.carousel.embla.slideNodes().length,
                    i = this.carousel.embla.slidesInView(),
                    s = i[i.length - 1] + 1,
                    a = Math.ceil(100 / t * s);
                return a
            }
            getProgressByScroll() {
                if (!this.carousel) return 0;
                let t = this.carousel.embla.scrollProgress(),
                    i = 100 * Math.max(0, Math.min(1, t));
                return i
            }
            get carousel() {
                return this.closest("carousel-component")
            }
        },
        iu = class extends L {
            constructor() {
                super(), this.handleResize = io(() => {
                    this.setHidden(!1), this.updatePosition();
                    let t = this.sectionElement.getBoundingClientRect();
                    this.headerSectionBottom = t.bottom
                }, 100), this.handleScroll = io(() => {
                    let t = tx();
                    t && this.updateVisibleAfterScroll(), this.setScrollStatus()
                }, 100), this.handleDrodpownHide = () => {
                    this.classList.remove("header--light-bordered")
                }, this.handleDropdownShow = () => {
                    this.classList.add("header--light-bordered")
                }, this.lastScrollPosition = 0, this.dropdowns = [...this.querySelectorAll("[data-header-dropdown]")], this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this)
            }
            connectedCallback() {
                this.setSticky(), this.updatePosition(), window.addEventListener("scroll", this.handleScroll), this.dropdowns.forEach(t => {
                    customElements.upgrade(t) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                        , customElements.whenDefined("float-element").then(() => {
                            t.subscribe("show", this.handleDropdownShow), t.subscribe("hide", this.handleDrodpownHide)
                        })
                })
            }
            disconnectedCallback() {
                window.removeEventListener("scroll", this.handleScroll), this.dropdowns.forEach(t => {
                    customElements.upgrade(t) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                        , customElements.whenDefined("float-element").then(() => {
                            t.unsubscribe("show", this.handleDropdownShow), t.unsubscribe("hide", this.handleDrodpownHide)
                        })
                }), this.resizeObserver.disconnect()
            }
            setScrollStatus() {
                if (!this.sectionElement) return;
                let t = Math.abs(parseInt(document.body.style.top || "0")),
                    i = window.scrollY || t,
                    s = i > this.headerSectionBottom;
                this.sectionElement.toggleAttribute("scrolled", s)
            }
            updateVisibleAfterScroll() {
                if (!this.sectionElement || ta.isFixed) return;
                let t = window.scrollY,
                    i = t - this.lastScrollPosition,
                    s = t > this.headerSectionBottom;
                i < 0 ? this.setHidden(this.isHidden && i + 48 > 0 && s) : i > 0 && this.setHidden(i > 48 && s), this.lastScrollPosition = t
            }
            setHidden(t) {
                this.sectionElement && (this.isHidden = t, this.sectionElement.setAttribute("aria-hidden", t ? "true" : "false"))
            }
            setSticky() {
                this.sectionElement && (this.sectionElement.setAttribute("mobile-sticky", ""), this.sectionElement.toggleAttribute("desktop-sticky", this.isSticky), document.body.toggleAttribute("header-desktop-sticky", this.isSticky))
            }
            updatePosition() {
                if (!this.sectionElement) return;
                let t = this.getBoundingClientRect();
                en("header-height", `${t.height}px`), en("header-bottom-side", `${t.bottom}px`)
            }
            get isSticky() {
                return this.hasAttribute("is-sticky")
            }
            get sectionElement() {
                return document.querySelector(".shopify-section-header")
            }
        },
        ip = class extends tL {
            constructor() {
                super(), this.handleSectionLoad = () => { //
                }, this.handleSectionSelect = ({
                    detail: {
                        sectionId: t
                    }
                }) => {
                    this.isVisible && this.dataset.sectionId === t && (this.mount(), this.reset())
                }, this.handleSectionDeselect = ({
                    detail: {
                        sectionId: t
                    }
                }) => {
                    this.isVisible && this.dataset.sectionId === t && (this.reset(), this.hide(!0))
                }, this.handleBlockSelect = ({
                    detail: {
                        blockId: t,
                        sectionId: i
                    }
                }) => {
                    if (this.dataset.sectionId === i) {
                        let i = this.pages.find(i => i.getAttribute("block-id") === t);
                        i && (this.open(), this.setPage(i))
                    }
                }, this.handleBlockDeselect = ({
                    detail: {
                        blockId: t,
                        sectionId: i
                    }
                }) => {
                    if (this.dataset.sectionId === i) {
                        let i = this.pages.find(i => i.getAttribute("block-id") === t);
                        i && this.hide(!0)
                    }
                }, this.handlePageKeydown = t => {
                    let i = t.target,
                        s = i.closest("drawer-menu-page");
                    if (!s) return;
                    let a = s.querySelectorAll(R()),
                        r = i === a[a.length - 1],
                        n = i === a[0],
                        o = t.shiftKey;
                    9 === t.keyCode && (o && n || !o && r) && (t.preventDefault(), this.focusOnToggler())
                }, this.header = document.querySelector("header-component"), this.pages = [...this.element.querySelectorAll("drawer-menu-page")], this.pageMap = this.generatePageMap(), this.homePage = this.pageMap.Menu, this.toggler = document.getElementById("DrawerMenuToggler")
            }
            connectedCallback() {
                super.connectedCallback(), this.addEventListener("keydown", this.handlePageKeydown), this.isEditorMode && (this.editor.subscribe("BLOCK_SELECT", this.handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this.handleBlockDeselect), this.editor.subscribe("SECTION_SELECT", this.handleSectionSelect), this.editor.subscribe("SECTION_DESELECT", this.handleSectionDeselect))
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this.removeEventListener("keydown", this.handlePageKeydown), this.isEditorMode && this.editor.destroy()
            }
            focusOnToggler() {
                this.toggler && (this.toggler.focus(), this.hide())
            }
            generatePageMap() {
                let t = this.pages.reduce((t, i) => {
                    let s = i.dataset.pageId;
                    return s ? { ...t,
                        [s]: i
                    } : t
                }, {});
                return t
            }
            setPage(t) {
                let i = t.dataset.pageId,
                    s = this.openedPage ?.dataset.prevPageId,
                    a = t.hasAttribute("data-empty-menu");
                this.openedPage && (i === s || a) && this.setPageVisible(this.openedPage, !1);
                let r = t.querySelector(R());
                r && r.focus(), this.setPageVisible(t, !0), this.openedPage = t
            }
            reset() {
                this.pages.forEach(t => {
                    this.setPageVisible(t, !1)
                }), this.setPageVisible(this.homePage, !0), this.openedPage = this.homePage
            }
            setPageVisible(t, i) {
                t.setAttribute("aria-hidden", i ? "false" : "true")
            }
            open() {
                return this.header && this.header.updatePosition(), super.open()
            }
            hide(t) {
                return this.reset(), super.hide(t)
            }
            getPage(t) {
                return this.pageMap[t]
            }
            get isVisible() {
                let t = matchMedia("(max-width: 1016px)").matches,
                    i = this.hasAttribute("data-drawer-menu-is-section");
                return i || t
            }
        },
        im = class extends L {
            constructor() {
                super(), this.handleBlockScroll = () => {
                    if (!this.block) return;
                    let t = this.block.scrollTop > 0;
                    this.toggleAttribute("header-shadow-visible", t)
                }, this.block = this.querySelector("[data-drawer-menu-content]")
            }
            connectedCallback() {
                this.block && this.block.addEventListener("scroll", this.handleBlockScroll)
            }
            disconnectedCallback() {
                this.block && this.block.removeEventListener("scroll", this.handleBlockScroll)
            }
        },
        ig = class extends L {
            connectedCallback() {
                this.addEventListener("click", this.handlePageLinkClick), this.addEventListener("keyup", this.handleKeyDown)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handlePageLinkClick), this.removeEventListener("keyup", this.handleKeyDown)
            }
            setPage() {
                let t = this.closest("drawer-menu"),
                    i = this.dataset.pageId;
                if (!i || !t) return;
                let s = t.getPage(i);
                s && t.setPage(s)
            }
            constructor(...t) {
                super(...t), this.handlePageLinkClick = t => {
                    t.preventDefault(), this.setPage()
                }, this.handleKeyDown = t => {
                    t.preventDefault();
                    let i = t.key || t.keyCode,
                        s = z(i);
                    s && this.setPage()
                }
            }
        },
        ib = class {
            constructor(t) {
                this.element = t
            }
            show() {
                this.element.classList.remove("hidden")
            }
            hide() {
                this.element.classList.add("hidden")
            }
        },
        iy = class extends L {
            constructor() {
                super(), this.cache = {}
            }
            updateTargetsFromHTML(t) {
                if (!this.dataset.containerId) return;
                let i = t.getElementById(this.dataset.containerId),
                    s = document.getElementById(this.dataset.containerId);
                if (i && s) {
                    let t = i.querySelectorAll(`.${this.dataset.target}`),
                        a = document.createDocumentFragment();
                    t.forEach(t => {
                        a.appendChild(t)
                    }), s.appendChild(a)
                }
            }
            updateResultsFromHTML(t) {
                if (!this.dataset.containerId) return;
                let i = t.getElementById(this.dataset.containerId),
                    s = document.getElementById(this.dataset.containerId);
                if (i && s) {
                    let t = s.parentNode;
                    t.replaceChild(i, s), i.scrollIntoView({
                        behavior: "smooth"
                    })
                }
            }
            updateFromHTML(t) {
                let i = t.querySelector("pagination-component");
                if (i) {
                    let t = i.cloneNode(!0);
                    this.replaceChildren(...t.childNodes)
                }
            }
            get loadingOverlay() {
                let t = document.getElementById(this.dataset.overlayId || "");
                return new ib(t)
            }
        },
        iv = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            fetchResults() {
                let t = this.dataset.url;
                t && (this.setLoadingStatus(!0), fetch(t).then(t => t.text()).then(t => {
                    let i = el(t);
                    this.setLoadingStatus(!1), this.updateFromHTML(i), this.updatePaginationFromHTML(i)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in pagination load button component", "warning")
                }))
            }
            updatePaginationFromHTML(t) {
                let i = this.closest("pagination-component");
                i && (i.updateTargetsFromHTML(t), i.updateFromHTML(t))
            }
            setPaginationUrl(t) {
                this.dataset.url = t.dataset.url
            }
            removePagination() {
                let t = this.closest("pagination-component");
                t && t.remove()
            }
            updateFromHTML(t) {
                let i = t.querySelector("pagination-load-button");
                i ? this.setPaginationUrl(i) : this.removePagination()
            }
            setLoadingStatus(t) {
                this.toggleAttribute("disabled", t), this.classList.toggle("loading", t)
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.fetchResults()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.fetchResults())
                }
            }
        },
        iw = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleLinkClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleLinkClick)
            }
            fetchResults() {
                let t = this.closest("pagination-component"),
                    i = this.dataset.url;
                t && i && (t.cache[i] ? this.updatePaginationFromHTML(t.cache[i]) : this.getFromUrl(i))
            }
            getFromUrl(t) {
                let i = this.closest("pagination-component");
                i && (i.loadingOverlay.show(), fetch(t).then(t => t.text()).then(s => {
                    let a = el(s);
                    i.loadingOverlay.hide(), i.cache[t] = a, this.updatePaginationFromHTML(a)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in pagination link component", "warning")
                }))
            }
            updatePaginationFromHTML(t) {
                let i = this.closest("pagination-component");
                i && (i.updateResultsFromHTML(t), i.updateFromHTML(t))
            }
            constructor(...t) {
                super(...t), this.handleLinkClick = () => {
                    this.fetchResults()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.fetchResults())
                }
            }
        },
        iS = class extends L {
            constructor() {
                super(), this.handleIntersectionObserve = t => {
                    let i = this.dataset.url;
                    if (i) {
                        if (!t[0].isIntersecting) return;
                        this.intersectionObserver.unobserve(this), this.preloaderComponent.show(), fetch(i).then(t => t.text()).then(t => {
                            let i = el(t),
                                s = this.closest("pagination-component");
                            this.preloaderComponent.hide(), this.updateFromHTML(i), s && s.updateTargetsFromHTML(i)
                        }).catch(() => {
                            ta.notification && ta.notification.show("Error in infinite scroll component", "warning")
                        })
                    }
                }, this.observerOptions = {
                    root: null,
                    rootMargin: "0px 0px 200px 0px"
                }, this.preloaderSelector = ".loading-spinner", this.preloader = this.querySelector(this.preloaderSelector), this.preloaderComponent = new ib(this.preloader), this.intersectionObserver = new IntersectionObserver(this.handleIntersectionObserve, this.observerOptions), this.intersectionObserver.observe(this)
            }
            disconnectedCallback() {
                this.intersectionObserver.disconnect()
            }
            updateFromHTML(t) {
                let i = t.querySelector("pagination-infinite-scroll"),
                    s = i ?.dataset.url;
                i && s ? (this.setPaginationUrl(s), this.intersectionObserver.observe(this)) : this.removeAttribute("data-url")
            }
            setPaginationUrl(t) {
                this.dataset.url = t
            }
        },
        ik = class extends L {
            constructor() {
                super(), this.handleCarouselSelect = () => {
                    this.removeVideo()
                }, this.handlePosterClick = () => {
                    this.loadContent()
                }, this.poster = this.querySelector('[id^="Deferred-Poster-"]')
            }
            connectedCallback() {
                this.hasAttribute("data-autoplay") && this.loadContent(), this.poster.addEventListener("click", this.handlePosterClick), this.carousel && this.carousel.embla.on("select", this.handleCarouselSelect)
            }
            disconnectedCallback() {
                this.poster.removeEventListener("click", this.handlePosterClick), this.carousel && this.carousel.embla.off("select", this.handleCarouselSelect)
            }
            loadContent() {
                this.getAttribute("loaded") || (this.addVideo(), this.setAttribute("loaded", "true"))
            }
            removeVideo() {
                let t = this.querySelector("video,  iframe");
                t && (t.remove(), this.removeAttribute("loaded"))
            }
            addVideo() {
                let t = document.createElement("div"),
                    i = this.querySelector("template"),
                    s = i ?.content;
                if (!s || !s.firstElementChild) return;
                let a = s.firstElementChild.cloneNode(!0);
                t.appendChild(a);
                let r = t.querySelector("video, model-viewer, iframe");
                r && (this.appendChild(r), "VIDEO" === r.tagName && r.play())
            }
            get carousel() {
                return this.closest("carousel-component")
            }
        },
        iC = class extends L {
            connectedCallback() {
                this.fetchAvailability()
            }
            fetchAvailability() {
                let t = `${this.dataset.baseUrl}variants/${this.dataset.variantId}/?section_id=pickup-availability`;
                fetch(t).then(t => t.text()).then(t => {
                    let i = el(t).querySelector(".shopify-section");
                    this.updateSidebarFromHTML(i), this.updateContentFromHTML(i)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in pickup availability component", "warning")
                })
            }
            updateVariantId(t) {
                this.dataset.variantId = t
            }
            updateContentFromHTML(t) {
                let i = this.querySelector("pickup-availability-content"),
                    s = t.querySelector("pickup-availability-content");
                if (i && s) {
                    let t = s.cloneNode(!0);
                    i.replaceChildren(...t.childNodes)
                }
            }
            updateSidebarFromHTML(t) {
                let i = document.getElementById("pickup-availability-sidebar");
                if (!i) return;
                let s = t.querySelector(`[data-sidebar-template="${i.id}"]`);
                s && i.updateTemplate(s)
            }
        },
        iE = class {
            constructor(t) {
                this.element = t, this.text = this.element.querySelector("[data-button-text]")
            }
            setDisable(t) {
                this.element.toggleAttribute("disabled", t)
            }
            setLoading(t) {
                this.element.classList.toggle("loading", t)
            }
            setText(t) {
                this.text && (this.text.textContent = t)
            }
        };
    let {
        routes: iT
    } = window;
    var iL = class {
        change(t) {
            return fetch(iT.cart_change_url, t).then(t => t.text())
        }
        add(t) {
            return fetch(iT.cart_add_url, t).then(t => t.text())
        }
        update(t) {
            return fetch(iT.cart_update_url, t)
        }
        get() {
            return fetch(iT.cart_url).then(t => t.text())
        }
    };
    let ix = (t = "json") => ({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: `application/${t}`
            }
        }),
        iI = t => {
            let i = {},
                s = new FormData(t);
            for (let t of s.keys()) {
                let a = /(?:^(properties\[))(.*?)(?:\]$)/;
                a.test(t) ? (i.properties = i.properties || {}, i.properties[a.exec(t)[2]] = s.get(t)) : i[t] = s.get(t)
            }
            return JSON.stringify(i)
        };
    var iA = class extends L {
            constructor() {
                super(), this.handleFormSubmit = t => {
                    t.preventDefault();
                    let i = this.getQueryConfig();
                    this.setDisable(!0), this.setLoading(!0), this.cartApi.add(i).then(t => {
                        let i = JSON.parse(t);
                        if (this.setDisable(!1), this.setLoading(!1), i.description) {
                            if (!ta.notification) return;
                            let t = "object" == typeof i.description ? this.getErrorMessageFromObject(i.description) : i.description;
                            ta.notification.show(t, "warning");
                            return
                        }
                        this.cart ? this.updateCart(i) : this.cartDrawer ? (this.cartDrawer.updateAsideProductsByParsedState(i), this.updateCartDrawerByParsedState(i)) : this.updatePopupByParsedState(i)
                    }).catch(() => {
                        ta.notification && ta.notification.show("Error in product form component", "warning")
                    })
                }, this.cartDrawer = document.querySelector("#CartDrawer"), this.cart = document.querySelector("cart-page"), this.cartNotificationPopup = document.querySelector("#CartNotificationPopup"), this.formSelector = "form", this.variantInputSelector = "[data-product-form-variant]", this.form = this.querySelector(this.formSelector), this.quickView = document.getElementById("Quick-view"), this.form && (this.variantInput = this.form.querySelector(this.variantInputSelector)), this.cartApi = new iL
            }
            connectedCallback() {
                this.form.addEventListener("submit", this.handleFormSubmit)
            }
            disconnectedCallback() {
                this.form.removeEventListener("submit", this.handleFormSubmit)
            }
            getErrorMessageFromObject(t) {
                return Object.keys(t).map(i => `${i}: ${t[i]}`).join(" , ")
            }
            updateCart(t) {
                this.cart && (this.cart.updateEmptyStatus(!1), this.showCallbackAfterCloseDialogWindow(() => {
                    this.cart.purchaseHandler(t)
                }))
            }
            updateCartDrawerByParsedState(t) {
                this.cartDrawer && (this.cartDrawer.updateEmptyStatus(), this.showCallbackAfterCloseDialogWindow(() => {
                    this.cartDrawer && this.cartDrawer.purchaseHandler(t)
                }))
            }
            updatePopupByParsedState(t) {
                this.showCallbackAfterCloseDialogWindow(() => {
                    this.cartNotificationPopup && this.cartNotificationPopup.showProductFromParsedState(t, t.id)
                })
            }
            showCallbackAfterCloseDialogWindow(t) {
                return M(0).then(() => {
                    this.quickView.isOpen ? this.quickView.hide().then(t) : t()
                })
            }
            getFormData() {
                return JSON.parse(iI(this.form))
            }
            getQueryConfig() {
                let t = ix("javascript"),
                    i = this.cartDrawer ?.dataset.sectionId || "cart-drawer",
                    s = this.cart ?.dataset.sectionId || "cart";
                return t.headers["X-Requested-With"] = "XMLHttpRequest", t.body = JSON.stringify({ ...this.getFormData(),
                    sections: [i, s, "cart-notification-popup-content"],
                    sections_url: window.location.pathname
                }), t
            }
            setLoading(t) {
                let i = this.querySelectorAll('button[type="submit"]');
                i.forEach(i => {
                    let s = new iE(i);
                    s.setLoading(t)
                })
            }
            setDisable(t) {
                let i = this.querySelectorAll('button[type="submit"]');
                i.forEach(i => {
                    let s = new iE(i);
                    s.setDisable(t)
                })
            }
            setButtonText(t) {
                let i = this.querySelectorAll('button[type="submit"]');
                i.forEach(i => {
                    let s = new iE(i);
                    s.setText(t)
                })
            }
        },
        iD = class extends L {
            constructor() {
                super(), this.handleWindowScroll = () => {
                    if (!this.button || !this.form) return;
                    let t = window.scrollY,
                        i = this.form.offsetTop + this.form.offsetHeight,
                        s = this.footer ? this.footer.offsetTop : 0,
                        a = window.innerHeight + t < s,
                        r = a && t > i;
                    this.toggleAttribute("visible", r), document.body.toggleAttribute("is-product-form-button-fixed", r)
                }, this.button = this.querySelector("[data-product-form-button]"), this.footer = document.querySelector(".shopify-section.shopify-section-footer"), this.form = this.closest("product-form")
            }
            connectedCallback() {
                window.addEventListener("scroll", this.handleWindowScroll)
            }
            disconnectedCallback() {
                window.removeEventListener("scroll", this.handleWindowScroll)
            }
        },
        iM = class extends L {
            constructor() {
                super(), this.blockSelector = "[data-product-block-item]", this.containerSelector = "[data-product-block-container]", this.activeTemplate = this.querySelector(this.blockSelector), this.activeTemplateContainer = this.querySelector(this.containerSelector)
            }
            updateByVariantId(t) {
                let i = this.querySelector(`[data-product-block-template="${t}"]`);
                if (this.activeTemplate && this.activeTemplateContainer) {
                    let t = er(i);
                    t && (this.activeTemplate.remove(), this.activeTemplate = t, this.activeTemplateContainer.appendChild(t))
                }
            }
        };
    let {
        Shopify: iB
    } = window;
    var iP = class extends L {
        constructor() {
            super(), this.poster = this.querySelector('[id^="Deferred-Poster-"]')
        }
        connectedCallback() {
            this.poster.addEventListener("click", this.handlePosterClick), this.carousel && this.carousel.embla.on("select", this.handleCarouselSelect)
        }
        disconnectedCallback() {
            this.poster.removeEventListener("click", this.handlePosterClick), this.carousel && this.carousel.embla.off("select", this.handleCarouselSelect)
        }
        handlePosterClick = () => {
            this.loadContent()
        };
        handleCarouselSelect = () => {
            this.carousel && this.setCarouselDraggable(!0)
        };
        loadContent() {
            !this.getAttribute("loaded") && (this.addModel(), this.setAttribute("loaded", !0), this.carousel && this.setCarouselDraggable(!1)), iB.loadFeatures([{
                name: "model-viewer-ui",
                version: "1.0",
                onLoad: this.setupModelViewerUI.bind(this)
            }])
        }
        addModel() {
            let t = this.querySelector("template");
            if (!t || !t.content) return;
            let i = t.content,
                s = document.createElement("div");
            s.appendChild(i.firstElementChild.cloneNode(!0));
            let a = s.querySelector("model-viewer");
            this.appendChild(a)
        }
        setupModelViewerUI(t) {
            t || (this.modelViewerUI = new iB.ModelViewerUI(this.querySelector("model-viewer")))
        }
        setCarouselDraggable(t) {
            let i = this.querySelector(".shopify-model-viewer-ui");
            this.carousel.dataset.draggable = t ? "true" : "false", this.carousel.reInit(), t && i && (i.remove(), this.removeAttribute("loaded"))
        }
        get carousel() {
            return this.closest("carousel-component")
        }
    };
    window.ProductModel = {
        loadShopifyXR() {
            iB.loadFeatures([{
                name: "shopify-xr",
                version: "1.0",
                onLoad: this.setupShopifyXR.bind(this)
            }])
        },
        setupShopifyXR(t) {
            if (!t) {
                if (!window.ShopifyXR) {
                    document.addEventListener("shopify_xr_initialized", () => this.setupShopifyXR());
                    return
                }
                document.querySelectorAll('[id^="ProductJSON-"]').forEach(t => {
                    window.ShopifyXR.addModels(JSON.parse(t.textContent)), t.remove()
                }), window.ShopifyXR.setupXRElements()
            }
        }
    }, window.addEventListener("DOMContentLoaded", () => {
        iB.designMode && document.querySelectorAll("[data-shopify-xr-hidden]").forEach(t => t.classList.add("hidden")), window.ProductModel && window.ProductModel.loadShopifyXR()
    });
    var iq = class extends L {
            constructor() {
                super(), this.handleResize = () => {
                    this.setMaxHeight(this.scrollHeight)
                }, this.removeItem = () => {
                    this.collapse().then(() => {
                        this.remove()
                    })
                }, this.expand = () => (this.setMaxHeight(this.scrollHeight), M(K(this.styles))), this.collapse = () => (this.setMaxHeight(0), M(K(this.styles))), this.showCheckmark = () => {
                    let t = this.querySelector(this.checkmarkSelector);
                    t && (t.classList.remove("hidden"), M(2500).then(() => {
                        t.classList.add("hidden")
                    }))
                }, this.setLoading = t => {
                    let i = this.querySelector(this.totalsSelector);
                    i && i.toggleAttribute("is-loading", t)
                }, this.checkmarkSelector = "[data-cart-item-checkmark]", this.totalsSelector = "[data-cart-item-totals]", this.quantitySelector = "[data-cart-item-quantity]", this.styles = getComputedStyle(this), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this)
            }
            connectedCallback() {
                this.setMaxHeight(this.scrollHeight)
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
            setMaxHeight(t) {
                this.style.maxHeight = `${t}px`
            }
            setDisabled(t) {
                let i = this.querySelector(this.quantitySelector);
                i && i.setDisable(t)
            }
        },
        iO = class extends L {
            constructor() {
                super(), this.handleCartItemChange = t => {
                    let i = +t.target.dataset.index,
                        s = this.querySelector(`#CartItem-${i}`);
                    s && s.setLoading(!0)
                }, this.handleCartChange = io(t => {
                    let i = +t.target.dataset.index,
                        s = t.target.value;
                    this.updateItem(i, s)
                }, 500), this.cartAPI = new iL
            }
            connectedCallback() {
                this.addEventListener("change", this.handleCartChange), this.addEventListener("change", this.handleCartItemChange)
            }
            disconnectedCallback() {
                this.removeEventListener("change", this.handleCartChange), this.removeEventListener("change", this.handleCartItemChange)
            }
            createQueryConfig(t, i) {
                let s = { ...ix(),
                    body: JSON.stringify({
                        line: t + 1,
                        quantity: i,
                        sections: this.dataset.sectionId,
                        sections_url: window.location.pathname
                    })
                };
                return s
            }
            updateItem(t, i) {
                let s = this.querySelector(`#CartItem-${t}`);
                if (!s) return;
                let a = this.createQueryConfig(t, i),
                    r = +i,
                    n = +(s.dataset.quantity || 0);
                if (n === r) {
                    s.setLoading(!1);
                    return
                }
                if (0 === r) {
                    let t = this.querySelectorAll("cart-item"),
                        i = t.length;
                    this.updateEmptyStatus(1 === i), s.removeItem()
                }
                this.emit("start-update", {}), s.setDisabled(!0), this.cartAPI.change(a).then(t => {
                    let i = JSON.parse(t);
                    s.setDisabled(!1), s.setLoading(!1);
                    let a = el(i.sections[this.dataset.sectionId]);
                    this.emit("update-nodes", {
                        node: a
                    })
                }).catch(() => {
                    this.showError()
                })
            }
            purchaseHandler(t) {
                let i = el(t.sections[this.dataset.sectionId]);
                this.emit("update-nodes", {
                    node: i
                });
                let s = this.querySelector(`cart-item[data-variant-id="${t.id}"]`);
                s && (1 === t.quantity ? s.collapse().then(() => s.expand()).then(() => s.showCheckmark()) : s.showCheckmark())
            }
            showError() {
                if (!ta.notification) return;
                let {
                    cartStrings: t
                } = window.auroraThemeLocales;
                ta.notification.show(t.error, "warning")
            }
            updateEmptyStatus(t) {
                this.toggleAttribute("is-empty", t), t && this.emit("cartIsEmpty", {})
            }
        },
        iR = class extends tL {
            constructor() {
                super(), this.handleCartItemChange = t => {
                    let i = +t.target.dataset.index,
                        s = this.querySelector(`#CartItem-${i}`);
                    s && s.setLoading(!0)
                }, this.handleCartChange = io(t => {
                    let i = +t.target.dataset.index,
                        s = +t.target.value;
                    this.updateItem(i, s)
                }, 500), this.handleViewportScroll = () => {
                    this.updateViewport()
                }, this.handleResultsResize = () => {
                    this.updateViewport()
                }, this.viewport = this.element.querySelector("[data-cart-drawer-viewport]"), this.results = this.element.querySelector("[data-cart-drawer-results]"), this.header = this.element.querySelector("[data-cart-drawer-header]"), this.footer = this.element.querySelector("[data-cart-drawer-footer]"), this.cartAPI = new iL, this.results && (this.resizeObserver = new ResizeObserver(this.handleResultsResize), this.resizeObserver.observe(this.results))
            }
            connectedCallback() {
                super.connectedCallback(), this.addEventListener("change", this.handleCartChange), this.addEventListener("change", this.handleCartItemChange), this.viewport && this.viewport.addEventListener("scroll", this.handleViewportScroll)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this.removeEventListener("change", this.handleCartChange), this.removeEventListener("change", this.handleCartItemChange), this.viewport && this.viewport.removeEventListener("scroll", this.handleViewportScroll), this.resizeObserver.disconnect()
            }
            updateViewport() {
                if (!this.results || !this.viewport) return;
                let t = this.results.offsetHeight > this.viewport.offsetHeight,
                    i = this.viewport.scrollTop > 0;
                this.classList.toggle("header-shadow-visible", t && i), this.classList.toggle("footer-shadow-visible", t)
            }
            updateItem(t, i) {
                let s = this.createConfig(t, i),
                    a = this.querySelector(`#CartItem-${t}`);
                if (!a) return;
                let r = +(a.dataset.quantity || 0);
                if (r === i) {
                    a.setLoading(!1);
                    return
                }
                a.setDisabled(!0), 0 === i && a.removeItem(), this.emit("start-update", {}), this.cartAPI.change(s).then(t => {
                    let i = JSON.parse(t);
                    a.setLoading(!1), a.setDisabled(!1);
                    let s = this.getTemplateContent(i);
                    this.mount(), this.emit("update-nodes", {
                        node: s
                    }), this.updateEmptyStatus()
                }).catch(() => {
                    this.showError()
                })
            }
            showError() {
                let t = this.querySelector("#CartDrawerNotification");
                if (t) {
                    let i = new ts(t);
                    i.show(window.auroraThemeLocales.cartStrings.error, "warning")
                }
            }
            purchaseHandler(t) {
                let i = this.getTemplateContent(t),
                    s = F(i);
                this.mount(), this.emit("update-nodes", {
                    node: i
                }), this.updateEmptyStatus(), N(s);
                let a = this.element.querySelector(`cart-item[data-variant-id="${t.id}"]`);
                a && (1 === t.quantity ? a.collapse().then(() => this.open()).then(() => a.expand()).then(() => a.showCheckmark()) : this.open().then(() => a.showCheckmark()))
            }
            getTemplateContent(t) {
                let i = el(t.sections[this.dataset.sectionId]),
                    s = i.querySelector(`[data-sidebar-template="${this.id}"]`),
                    a = er(s);
                return a
            }
            updateEmptyStatus() {
                let t = this.element.querySelectorAll("cart-item"),
                    i = this.hasAttribute("data-has-warning-placeholder"),
                    s = 0 === t.length;
                i && this.toggleAttribute("is-empty", s), s && this.emit("cartIsEmpty", {})
            }
            updateAsideProductsByParsedState(t) {
                this.toggleAttribute("has-aside-products", t.quantity > 0)
            }
            createConfig(t, i) {
                return { ...ix(),
                    body: JSON.stringify({
                        line: t + 1,
                        quantity: i,
                        sections: this.dataset.sectionId,
                        sections_url: window.location.pathname
                    })
                }
            }
        },
        iF = class extends L {
            constructor() {
                super(), this.setProgress = t => {
                    this.style.setProperty(this.progressClass, `${t}%`)
                }, this.setMessage = t => {
                    let i = this.querySelector(this.messageNodeSelector);
                    i && i.replaceChildren(t)
                }, this.progressClass = "--gsc-free-shipping-progress", this.messageNodeSelector = "[data-free-shipping-bar-message]", this.isFreeShippingAttribute = "data-free-shipping", this.differenceAttribute = "data-free-shipping-difference", this.differencePercentAttribute = "data-free-shipping-difference-percent", this.progressMessageAttribute = "data-progress-message", this.achievedMessageAttribute = "data-achieved-message", this.isFreeShipping = this.getAttribute(this.isFreeShippingAttribute), this.difference = this.getAttribute(this.differenceAttribute), this.differencePercent = +this.getAttribute(this.differencePercentAttribute), this.progressMessage = this.getAttribute(this.progressMessageAttribute) ?? "", this.achievedMessage = this.getAttribute(this.achievedMessageAttribute) ?? "", this.updateProgressByDifference(this.difference, this.differencePercent)
            }
            updateProgressByDifference(t, i) {
                i < 100 ? (this.setMessage(this.progressMessage.replace("[value]", t)), this.setProgress(i)) : (this.setMessage(this.achievedMessage), this.setProgress(100))
            }
        },
        iN = class extends L {
            constructor() {
                super(), this.carouselSelector = "[data-product-media-carousel-component]"
            }
            connectedCallback() {
                this.setReady()
            }
            updateFirstMediaByVariant(t, i = !1) {
                let s = this.querySelector(this.carouselSelector);
                if (t && t.featured_media && s) {
                    let a = s.embla.slideNodes(),
                        r = a.findIndex(i => !!i.dataset.mediaId && +i.dataset.mediaId == +t.featured_media.id);
                    s.embla.scrollTo(r, i)
                }
            }
            setReady() {
                this.setAttribute("ready", "")
            }
        },
        iV = class extends L {
            constructor() {
                super(), this.pickupAvailability = document.getElementById(`product-pickup-availability-${this.dataset.productId}-${this.dataset.section}`), this.elements = ["sticky-product-buy-btn", "product-buy-btn", "product-quantity"], this.productMediaFilteringOption = this.dataset.productMediaFilteringOption
            }
            connectedCallback() {
                this.updateVariant(), setTimeout(() => {
                    this.updateOptionsAvailable(), this.setFocusListeners()
                }, 100), this.dataset.selectedVariantId && this.updateFirstMediaByVariant(this.variant, !0), this.addEventListener("change", this.handleVariantChange)
            }
            disconnectedCallback() {
                this.removeEventListener("change", this.handleVariantChange)
            }
            handleVariantChange = t => {
                if (this.updateForm(), this.setInventoryStatusAvailable(this.variant), !this.variant) {
                    this.setButtonsUnavailable();
                    return
                }
                this.form.setDisable(!0), this.form.setLoading(!0), this.pickupAvailability && this.updatePickupAvailability(), this.updateURL(), this.updateVariantInput(), this.updateProduct(), this.productMediaFilteringOption !== t.target.name && this.updateFirstMediaByVariant(this.variant, !1), this.emit("variantChange", {
                    variant: this.variant,
                    optionChanged: t.target.name
                })
            };
            updateLabels() {
                let t = this.querySelectorAll("[data-variant-picker-option-inputs]"),
                    i = this.querySelectorAll("[data-variant-picker-option-labels]");
                t.forEach((t, s) => {
                    let a = [...i[s].querySelectorAll("label")],
                        r = [...t.querySelectorAll("input")],
                        n = this.getCheckedInput(r),
                        o = i[s].querySelector("[data-dropdown-variant-picker-label]");
                    o && o.toggleAttribute("no-available", !this.variant ?.available), a.forEach(t => {
                        let i = t.getAttribute("for") === n.id;
                        if (o && i) {
                            let i = o.closest("dropdown-opener"),
                                s = t.cloneNode(!0);
                            o.replaceChildren(...s.childNodes), i.trigger()
                        }
                        t.classList.toggle("selected", i)
                    })
                })
            }
            updateURL() {
                this.variant && "false" !== this.dataset.updateUrl && window.history.replaceState({}, "", `${this.dataset.url}?variant=${this.variant.id}`)
            }
            setInventoryStatusAvailable(t) {
                let i = document.getElementById(`product-stock-inner-${this.dataset.productId}-${this.dataset.section}`);
                i && i.classList.toggle("hidden", !t)
            }
            setButtonsUnavailable() {
                this.form.setDisable(!0), this.form.setButtonText(window.auroraThemeLocales.variantStrings.unavailable)
            }
            updateVariant() {
                let t = this.querySelectorAll("[data-variant-picker-option-inputs]"),
                    i = this.getVariants(),
                    s = [...t].map(t => {
                        let i = [...t.querySelectorAll("input")],
                            s = this.getCheckedInput(i);
                        return s.value
                    });
                this.variant = i.find(({
                    options: t
                }) => !t.map((t, i) => s[i] === t).includes(!1))
            }
            setFocusListeners() {
                if ("dropdown" === this.dataset.type) {
                    let t = [...this.querySelectorAll("float-element")].map(t => [...t.element.querySelectorAll("label")]).reduce((t, i) => [...t, ...i], []);
                    this.setListenersForLabels(t)
                } else {
                    let t = [...this.querySelectorAll("label")];
                    this.setListenersForLabels(t)
                }
            }
            handleLabelFocus = t => {
                let i = t.target.getAttribute("for"),
                    s = this.querySelector(`input[id="${i}"]`);
                s.dispatchEvent(new MouseEvent("click", {
                    button: 0,
                    which: 1
                })), document.addEventListener("keydown", this.handleLabelKeydown)
            };
            setListenersForLabels(t) {
                t.forEach(t => {
                    t.addEventListener("focus", this.handleLabelFocus)
                })
            }
            removeListenersForLabels(t) {
                t.forEach(t => {
                    t.addEventListener("focus", this.handleLabelFocus)
                })
            }
            handleLabelKeydown = t => {
                let i = t.target.closest("[data-variant-picker-option-labels]"),
                    s = "ArrowLeft" === t.key || "ArrowRight" === t.key || "ArrowUp" === t.key || "ArrowDown" === t.key;
                if (!s) return;
                if (!i) {
                    document.removeEventListener("keydown", this.handleLabelKeydown);
                    return
                }
                let a = [...i.querySelectorAll("label")],
                    r = a.findIndex(t => t === e.target),
                    n = a[r],
                    o = a[0],
                    l = a[a.length - 1],
                    h = a[r + 1],
                    c = a[r - 1];
                1 !== a.length && e.preventDefault();
                let d = t => {
                        n.removeAttribute("tabindex"), t.setAttribute("tabindex", 0), t.focus()
                    },
                    u = () => {
                        let t = h || o;
                        d(t)
                    },
                    p = () => {
                        let t = c || l;
                        d(t)
                    },
                    m = {
                        ArrowLeft: p,
                        ArrowRight: u,
                        ArrowUp: p,
                        ArrowDown: u
                    }[e.key];
                m()
            };
            updateOptionsAvailable() {
                let t = this.querySelectorAll("[data-variant-picker-option-inputs]"),
                    i = i => t[i] ? [...t[i].querySelectorAll("input")] : null,
                    s = i(0),
                    a = i(1),
                    r = i(2),
                    n = this.getVariants(),
                    o = (...t) => n.reduce((i, s) => {
                        let a = !t || t.every(t => s.options.includes(t.value));
                        return s.available && a ? [...i, s.options] : i
                    }, []),
                    l = t => [...this.querySelectorAll("float-element")].find(i => i.element.querySelector(t)).element.querySelector(t),
                    h = (t, i) => {
                        for (let s of t) {
                            let t = s.value,
                                a = !1;
                            i.forEach(i => {
                                i.includes(t) && (a = !0)
                            });
                            let r = `label[for="${s.id}"]`,
                                n = this.querySelector(r),
                                o = n ? this.querySelector(r) : l(r);
                            o.toggleAttribute("no-available", !a)
                        }
                    };
                if (h(s, o()), a) {
                    let t = this.getCheckedInput(s);
                    h(a, o(t))
                }
                if (r) {
                    let t = this.getCheckedInput(s),
                        i = this.getCheckedInput(a);
                    h(r, o(t, i))
                }
            }
            getVariants() {
                let t = this.querySelector("[data-variant-picker-variants]"),
                    i = JSON.parse(t.textContent);
                return i
            }
            updateFirstMediaByVariant(t, i) {
                let s = [...document.querySelectorAll(`#product-media-${this.dataset.productId}-${this.dataset.section}`)];
                s.forEach(s => s.updateFirstMediaByVariant(t, i))
            }
            updateForm() {
                this.updateVariant(), this.updateLabels(), this.updateOptionsAvailable()
            }
            updateVariantInput() {
                let t = this.form.variantInput;
                t.value = this.variant.id, t.dispatchEvent(new Event("change", {
                    bubbles: !0
                }))
            }
            updatePickupAvailability() {
                this.pickupAvailability.updateVariantId(this.variant.id), this.pickupAvailability.fetchAvailability()
            }
            updateProduct() {
                let t = `${this.dataset.url}?variant=${this.variant.id}&section_id=${this.dataset.sectionIdWithoutPrefix}`;
                this.updateBlocksByVariantId(this.variant.id), fetch(t).then(t => t.text()).then(t => {
                    if (!this.form) return;
                    let i = el(t),
                        s = this.variant.available;
                    this.form.setDisable(!s), this.form.setLoading(!1), this.updateElements(i)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in variant picker component", "warning")
                })
            }
            updateElements(t) {
                this.elements.forEach(i => {
                    let s = `${i}-${this.dataset.productId}-${this.dataset.section}`,
                        a = document.getElementById(s);
                    if (a) {
                        let i = t.getElementById(s),
                            r = i.cloneNode(!0);
                        a.replaceChildren(...r.childNodes)
                    }
                })
            }
            updateBlocksByVariantId(t) {
                ["product-price", "product-sku", "product-stock"].forEach(i => {
                    let s = document.getElementById(`${i}-${this.dataset.productId}-${this.dataset.section}`);
                    s && s.updateByVariantId(t)
                })
            }
            getCheckedInput(t) {
                return t.find(({
                    checked: t
                }) => t)
            }
            get form() {
                return document.getElementById(`product-form-component-${this.dataset.productId}-${this.dataset.section}`)
            }
        },
        iz = class extends L {
            constructor() {
                super(), this.handleFormChange = () => {
                    this.updateSelected()
                }, this.handleMouseEnter = t => {
                    this.updateActiveValue(t.target.dataset.value)
                }, this.handleMouseLeave = () => {
                    this.updateSelected()
                }, this.activeValueSelector = "[data-color-swatches-picker-active-value]", this.activeValue = this.querySelector(this.activeValueSelector), this.labelSelector = "[data-color-swatches-picker-label]", this.labels = [...this.querySelectorAll(this.labelSelector)], this.form = this.closest("variant-picker").form
            }
            connectedCallback() {
                this.form.addEventListener("change", this.handleFormChange), this.labels.forEach(t => {
                    t.addEventListener("mouseenter", this.handleMouseEnter), t.addEventListener("mouseleave", this.handleMouseLeave)
                })
            }
            disconnectedCallback() {
                this.form.removeEventListener("change", this.handleFormChange), this.labels.forEach(t => {
                    t.removeEventListener("mouseenter", this.handleMouseEnter), t.removeEventListener("mouseleave", this.handleMouseLeave)
                })
            }
            updateSelected() {
                let t = this.querySelector(`${this.labelSelector}.selected`);
                if (t) {
                    let i = t.getAttribute("data-value") || "";
                    this.updateActiveValue(i)
                }
            }
            updateActiveValue(t) {
                this.activeValue && (this.activeValue.textContent = t)
            }
        },
        i_ = class extends tS {
            constructor() {
                super(), this.handleKeydown = t => {
                    let i = t.key || t.keyCode,
                        s = _(i);
                    s && (this.isZoomed ? this.zoomedImage.reset() : this.hide())
                }, this.handleCarouselInit = () => {
                    this.updateCarouselDraggableState()
                }, this.handleCarouselSelect = () => {
                    this.updateSelectedSlideNumber()
                }, this.selectors = {
                    carousel: "[data-product-modal-carousel]",
                    carouselButtons: "[data-product-modal-carousel-button]",
                    carouselSlide: "[data-product-modal-slide]",
                    carouselSelectedSlideNumber: "[data-product-modal-selected-slide-number]",
                    carouselSlideNumber: "[data-product-modal-slide-number]",
                    zoomCursor: "zoom-cursor"
                }, this.element && (this.carousel = this.element.querySelector(this.selectors.carousel), this.carouselButtons = this.carousel.querySelectorAll(this.selectors.carouselButtons), this.slides = [...this.element.querySelectorAll(this.selectors.carouselSlide)], this.selectedSlideNumber = this.element.querySelector(this.selectors.carouselSelectedSlideNumber), this.slideNumber = this.element.querySelector(this.selectors.carouselSlideNumber)), this.zoomCursor = document.querySelector(this.selectors.zoomCursor), this.mediaIndexMap = this.createMediaIndexMap(), this.isZoomed = !1
            }
            openAndShowMediaById(t) {
                if (this.show(), !this.carousel) return;
                let i = this.mediaIndexMap[t];
                this.carousel.embla.scrollTo(i, !0), this.carouselButtons[0] && this.carouselButtons[0].focus(), this.updateSelectedSlideNumber()
            }
            initCarousel() {
                this.carousel && (this.carousel.embla.on("select", this.handleCarouselSelect), this.carousel.embla.on("init", this.handleCarouselInit))
            }
            resetCarousel() {
                this.carousel && (this.carousel.embla.off("select", this.handleCarouselSelect), this.carousel.embla.off("init", this.handleCarouselInit))
            }
            hide() {
                this.resetCarousel(), super.hide(), this.isZoomed = !1, this.updateModal(), this.emit("hide", {})
            }
            show() {
                super.show(), this.initCarousel()
            }
            updateSelectedSlideNumber() {
                if (!this.selectedSlideNumber || !this.carousel) return;
                let t = this.carousel.embla.selectedScrollSnap();
                this.selectedSlideNumber.textContent = t + 1
            }
            updateModal() {
                this.updateCarouselDraggableState(), this.updateZoomCursorState(), this.updateZoomState()
            }
            createMediaIndexMap() {
                return this.slides.reduce((t, i, s) => i.dataset.mediaId ? { ...t,
                    [i.dataset.mediaId]: s
                } : t, {})
            }
            updateCarouselDraggableState() {
                if (!this.carousel) return;
                let t = tx();
                if (!t) {
                    this.carousel.reInit({
                        watchDrag: !1
                    });
                    return
                }
                this.carousel.reInit({
                    watchDrag: !this.isZoomed
                })
            }
            updateZoomCursorState() {
                this.zoomCursor && this.zoomCursor.updateState(this.isZoomed)
            }
            updateZoomState() {
                this.toggleAttribute("zoom-enabled", this.isZoomed)
            }
        },
        i$ = class extends L {
            constructor() {
                super(), this.image = this.querySelector("img"), this.modal = this.closest("product-modal"), this.carousel = this.modal.carousel, this.preloader = this.querySelector("[data-product-modal-image-preloader]"), this.currentSettedScale = 1, this.isDragging = !1, this.offsetX = 0, this.offsetY = 0, this.startDragPoint = {
                    x: 0,
                    y: 0
                }, this.maxScale = 3, this.minScale = 1, this.isTapped = !1, this.tapTimeout = 300, this.lastGesture = null, this.setZoomCursorVisible(!0)
            }
            connectedCallback() {
                O.observe(this.preloader), this.image.addEventListener("mousedown", this.handleMouseDown), this.image.addEventListener("mouseup", this.handleMouseUp), this.image.addEventListener("mousemove", this.handleMouseMove), this.image.addEventListener("touchstart", this.handleTouchStart), this.image.addEventListener("touchend", this.handleTouchEnd), this.image.addEventListener("touchmove", this.handleTouchMove), this.image.addEventListener("load", this.handleImageLoad), customElements.upgrade(this.modal) // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade
                    , this.modal.subscribe("hide", this.handleModalHide), this.carousel.embla.on("select", this.handleCarouselSelect)
            }
            disconnectedCallback() {
                O.unobserve(this.preloader), this.image.removeEventListener("mousedown", this.handleMouseDown), this.image.removeEventListener("mouseup", this.handleMouseUp), this.image.removeEventListener("mousemove", this.handleMouseMove), this.image.removeEventListener("touchstart", this.handleTouchStart), this.image.removeEventListener("touchend", this.handleTouchEnd), this.image.removeEventListener("touchmove", this.handleTouchMove), this.image.removeEventListener("load", this.handleImageLoad), this.modal.unsubscribe("hide", this.handleModalHide), this.carousel.embla.off("select", this.handleCarouselSelect)
            }
            handleImageLoad = () => {
                this.setPreloaderVisible(!1)
            };
            handleModalHide = () => {
                this.reset()
            };
            handleCarouselSelect = () => {
                this.reset()
            };
            handleTouchStart = t => {
                t.preventDefault(), this.fingers = t.touches.length, this.firstMove = !0, this.detectDoubleTap(t)
            };
            handleTouchMove = t => {
                if (t.preventDefault(), !this.isDoubleTapped) {
                    if (this.firstMove) this.updateGesture(t), this.startMoveTouches = t.touches.length;
                    else if (this.lastGesture) switch (this.lastGesture) {
                        case "zoom":
                            2 === this.startMoveTouches && 2 === t.touches.length && this.pinch(t);
                            break;
                        case "drag":
                            if (1 === this.startMoveTouches && 1 === t.touches.length) {
                                let {
                                    clientX: i,
                                    clientY: s
                                } = t.targetTouches[0];
                                this.drag(i, s)
                            }
                    } else this.setGesture("none", t);
                    this.firstMove = !1
                }
            };
            handleTouchEnd = t => {
                t.preventDefault(), this.fingers = t.touches.length, this.updateGesture(t)
            };
            handleMouseDown = t => {
                t.preventDefault(), this.startDrag(t.clientX, t.clientY), this.setDragging(!0)
            };
            handleMouseUp = t => {
                this.setDragging(!1);
                let i = this.modal.isZoomed ? 75 : 0;
                this.zoomTimeoutId = setTimeout(() => {
                    this.touchZoom(t.clientX, t.clientY)
                }, i)
            };
            handleMouseMove = t => {
                if (t.preventDefault(), clearTimeout(this.zoomTimeoutId), this.isDragging && this.modal.isZoomed) {
                    let {
                        clientX: i,
                        clientY: s
                    } = t;
                    this.drag(i, s)
                }
            };
            detectDoubleTap(t) {
                if (this.isTappedTimeout && 1 === this.fingers) switch (clearTimeout(this.isTappedTimeout), this.isTappedTimeout = null, this.isDoubleTapped = !0, this.touchZoom(t.changedTouches[0].clientX, t.changedTouches[0].clientY), this.lastGesture) {
                    case "zoom":
                        this.setPinchScaling(!1);
                        break;
                    case "drag":
                        this.setDragging(!1)
                } else this.isTappedTimeout = setTimeout(() => {
                    this.isTappedTimeout = null, this.isDoubleTapped = !1
                }, this.tapTimeout)
            }
            updateGesture(t) {
                2 === this.fingers ? this.setGesture("zoom") : 1 === this.fingers ? this.setGesture("drag", t) : this.setGesture("none", t)
            }
            setGesture(t, i) {
                if (this.lastGesture !== t) {
                    if (this.lastGesture && !t) switch (this.lastGesture) {
                        case "zoom":
                            this.setPinchScaling(!1);
                            break;
                        case "drag":
                            this.setDragging(!1)
                    }
                    switch (t) {
                        case "zoom":
                            this.setPinchScaling(!0);
                            break;
                        case "drag":
                            this.startDrag(i.changedTouches[0].clientX, i.changedTouches[0].clientY), this.setDragging(!0);
                            break;
                        case "none":
                            this.setDragging(!1), this.setPinchScaling(!1)
                    }
                }
                this.lastGesture = t
            }
            pinch(t) {
                let i = this.getDistanceBetweenTouches(t),
                    s = i > this.lastDistanceBetweenTouches,
                    a = this.getNewScale(this.currentScale + (s ?.125 : -.125)),
                    r = this.getTouchCenter(t),
                    n = (r.x - this.offsetX) / this.currentScale,
                    o = (r.y - this.offsetY) / this.currentScale;
                if (this.lastDistanceBetweenTouches = i, !s && 1 === a) {
                    this.reset();
                    return
                }
                this.setTransform({
                    scale: a,
                    offsetX: r.x - n * a,
                    offsetY: r.y - o * a
                })
            }
            getDistanceBetweenTouches(t) {
                return Math.hypot(t.touches[0].pageX - t.touches[1].pageX, t.touches[0].pageY - t.touches[1].pageY)
            }
            startDrag(t, i) {
                this.startDragPoint = {
                    x: t - this.offsetX,
                    y: i - this.offsetY
                }, this.dragStartPointX = t, this.dragStartPointY = i
            }
            drag(t, i) {
                let s = this.dragStartPointX > t,
                    a = this.dragStartPointY > i,
                    r = this.getNewScale(this.currentScale),
                    n = t - this.startDragPoint.x,
                    o = i - this.startDragPoint.y,
                    l = this.getIntersectBounds({
                        isRightDrag: s,
                        isBottomDrag: a
                    });
                (l.right || l.left) && (n = this.offsetX), (l.bottom || l.top) && (o = this.offsetY), this.setTransform({
                    scale: r,
                    offsetX: n,
                    offsetY: o
                })
            }
            getIntersectBounds({
                isRightDrag: t,
                isBottomDrag: i
            }) {
                let s = this.image.getBoundingClientRect(),
                    a = t ? -8 : 8,
                    r = i ? -8 : 8,
                    n = t && s.right + a < window.innerWidth,
                    o = !t && s.left + a > 0,
                    l = i && s.bottom + r < window.innerHeight,
                    h = !i && s.top + r > 0;
                return {
                    right: n,
                    left: o,
                    bottom: l,
                    top: h
                }
            }
            getTouchCenter(t) {
                let i = (t, i) => t + i,
                    s = [...t.touches],
                    a = s.length;
                return {
                    x: s.map(t => t.pageX).reduce(i) / a,
                    y: s.map(t => t.pageY).reduce(i) / a
                }
            }
            setTransform({
                offsetX: t,
                offsetY: i,
                scale: s
            }) {
                this.style.transform = `translate3d(${t}px, ${i}px, 0) scale3d(${s}, ${s}, 1)`, this.offsetX = t, this.offsetY = i, this.currentScale = s
            }
            touchZoom(t, i) {
                let s, a, r;
                let n = (t - this.offsetX) / this.currentScale,
                    o = (i - this.offsetY) / this.currentScale;
                this.modal.isZoomed ? (s = this.getNewScale(1), a = 0, r = 0) : (a = t - n * (s = this.getNewScale(3)), r = i - o * s), this.style.cursor = this.modal.isZoomed ? "" : "grab", this.setZoomCursorVisible(this.modal.isZoomed), this.setTransform({
                    scale: s,
                    offsetX: a,
                    offsetY: r
                })
            }
            reset() {
                this.setTransform({
                    scale: 1,
                    offsetX: 0,
                    offsetY: 0
                })
            }
            getNewScale(t) {
                return Math.max(this.minScale, Math.min(this.maxScale, t))
            }
            setPinchScaling(t) {
                this.toggleAttribute("is-pinch-scaling", t), this.isPinchScaling = t
            }
            setDragging(t) {
                this.toggleAttribute("is-dragging", t), this.isDragging = t
            }
            setZoomCursorVisible(t) {
                this.image.toggleAttribute("data-zoom-cursor-target", t)
            }
            setModalZoom(t) {
                this.modal.isZoomed = t, this.modal.isZoomed && (this.modal.zoomedImage = this), this.modal.updateModal()
            }
            setPreloaderVisible(t) {
                this.preloader.classList.toggle("hidden", !t), this.image.toggleAttribute("is-loaded", !t)
            }
            set currentScale(t) {
                this.currentSettedScale !== t && (this.setModalZoom(t > 1), this.currentSettedScale = t)
            }
            get currentScale() {
                return this.currentSettedScale
            }
        },
        iH = class extends tC {
            showModal() {
                if (!this.dataset.modal) return;
                let t = document.querySelector(this.dataset.modal);
                t && t.openAndShowMediaById(this.dataset.mediaId)
            }
        },
        iU = class extends L {
            constructor() {
                super(), this.handleIntersectionObserve = (t, i) => {
                    if (!t[0].isIntersecting) return;
                    i.unobserve(this);
                    let s = this.dataset.url;
                    s && fetch(s).then(t => t.text()).then(t => {
                        let i = el(t);
                        this.updateByHTML(i)
                    }).catch(() => {
                        ta.notification && ta.notification.show("Error in product recommendations component", "warning")
                    })
                }, this.intersectionObserver = new IntersectionObserver(this.handleIntersectionObserve, {
                    rootMargin: "0px 0px 200px 0px"
                }), this.intersectionObserver.observe(this)
            }
            disconnectedCallback() {
                this.intersectionObserver.disconnect()
            }
            updateByHTML(t) {
                let i = t.querySelector("product-recommendations");
                if (i) {
                    let t = i.cloneNode(!0);
                    this.replaceChildren(...t.childNodes)
                }
            }
        };
    let {
        routes: iW
    } = window;
    var iK = class {
            get(t) {
                let i = this.prepareQuery(t);
                return fetch(i).then(t => t.text())
            }
            prepareQuery(t) {
                let {
                    searchQuery: i,
                    sectionParam: s,
                    limitParam: a,
                    fieldsParam: r
                } = t, n = iW.predictive_search_url;
                return `${n}?q=${i}&${a}&${s}&${r}`
            }
        },
        iY = class extends L {
            constructor() {
                super(), this.handleInputChange = io(() => {
                    this.searchQuery ? this.renderResults() : this.resetResults()
                }, 500), this.cache = {}, this.sidebar = this.closest("#SearchSidebar"), this.inputComponentSelector = "[data-sidebar-search-input-component]", this.contentResults = "[data-sidebar-search-content-results]", this.footerSelector = "[data-sidebar-search-footer]", this.itemSelector = "[data-sidebar-search-item]", this.sidebar && (this.results = this.sidebar.element.querySelector(this.contentResults)), this.predictiveSearchAPI = new iK
            }
            connectedCallback() {
                this.addEventListener("input", this.handleInputChange)
            }
            disconnectedCallback() {
                this.removeEventListener("input", this.handleInputChange)
            }
            renderResults() {
                this.cache[this.searchQuery] ? this.renderFromCache(this.searchQuery) : this.renderFromUrl(this.searchQuery)
            }
            resetResults() {
                this.sidebar && this.updateResultsFromHTML(this.sidebar.defaultStateElement)
            }
            renderFromCache(t) {
                try {
                    this.updateResultsFromHTML(this.cache[t])
                } catch (t) {
                    if (!ta.notification) return;
                    ta.notification.show("Error in search component when try update from cache", "warning")
                }
            }
            renderFromUrl(t) {
                let i = this.sidebar ?.dataset.sectionId || "search-sidebar",
                    s = `section_id=${i}` || "",
                    a = this.sidebar ?.hasAttribute("enable-extended-search") ? "resources[options][fields]=author,body,product_type,tag,title,variants.barcode,variants.sku,variants.title,vendor" : "resources[options][fields]=title,product_type,variants.title,vendor";
                this.predictiveSearchAPI.get({
                    searchQuery: this.searchQuery,
                    limitParam: "resources[limit]=999",
                    sectionParam: s,
                    fieldsParam: a
                }).then(i => {
                    let s = el(i);
                    this.cache[t] = s, this.updateResultsFromHTML(s.body)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in search component", "warning")
                })
            }
            updateResultsFromHTML(t) {
                let i;
                let s = t.querySelector("#SearchSidebar");
                if (s) {
                    let t = s.querySelector('[data-sidebar-template="SearchSidebar"]');
                    i = er(t)
                } else i = t;
                let a = i.querySelector(this.contentResults);
                this.updateResultsHTML(a), this.updateFooterVisible()
            }
            updateResultsHTML(t) {
                if (!this.results) return;
                let i = t.cloneNode(!0);
                this.results.replaceChildren(...i.childNodes)
            }
            updateFooterVisible() {
                if (this.sidebar) {
                    let t = this.sidebar.element.querySelector(this.footerSelector),
                        i = this.sidebar.element.querySelectorAll(this.itemSelector);
                    t && t.classList.toggle("hidden", 0 === i.length)
                }
            }
            get searchQuery() {
                return this.inputComponent ? this.inputComponent.value.trim() : ""
            }
            get inputComponent() {
                return this.sidebar ? this.sidebar.querySelector(this.inputComponentSelector) : null
            }
        },
        iX = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            update() {
                let t = this.closest("cart-page, cart-drawer"),
                    i = this.dataset.index;
                t && i && t.updateItem(+i, 0)
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.update()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.update())
                }
            }
        },
        ij = class extends L {
            connectedCallback() {
                this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleButtonClick)
            }
            showTooltip() {
                let t = this.dataset.tooltipId;
                if (!t) return;
                let i = document.getElementById(t);
                i && (i.show(), M(1e3).then(() => {
                    i.hide()
                }))
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.copy()
                }, this.copy = () => {
                    let t = this.dataset.value;
                    t && navigator.clipboard && navigator.clipboard.writeText(t).then(() => {
                        this.showTooltip()
                    }).catch(t => {
                        throw window.Shopify.designMode && this.showTooltip(), t
                    })
                }
            }
        },
        iG = class extends L {
            constructor() {
                super(), this.init = () => {
                    this.target && te(this.target, this, () => {
                        tt(this.target, this, this.getOptions()).then(t => {
                            this.updatePosition(t), this.updateArrow(t)
                        })
                    })
                }, this.show = () => {
                    this.mount(), this.setVisible(!0), this.emit("show", {})
                }, this.hide = () => {
                    this.setVisible(!1), this.unmount(), this.emit("hide", {})
                };
                let t = this.querySelector(`[data-clipboard-button-tooltip-template="${this.id}"]`);
                this.element = er(t), this.arrow = this.element.querySelector("[data-float-element-arrow]")
            }
            connectedCallback() {
                this.init()
            }
            updatePosition({
                x: t,
                y: i
            }) {
                Object.assign(this.style, {
                    left: `${t}px`,
                    top: `${i}px`
                })
            }
            getOptions() {
                return {
                    placement: this.placement,
                    middleware: this.getMiddleware(),
                    strategy: "absolute"
                }
            }
            getMiddleware() {
                let t = this.dataset.alignmentAxisOffset || 0,
                    i = this.dataset.mainAxisOffset || 0,
                    s = [eO({
                        alignmentAxis: +t,
                        mainAxis: +i
                    }), eP(), eR()];
                return this.arrow && s.push(eB({
                    element: this.arrow
                })), s
            }
            updateArrow({
                placement: t,
                middlewareData: i
            }) {
                if (!this.arrow) return;
                let {
                    x: s,
                    y: a
                } = i.arrow, r = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                }[t.split("-")[0]];
                Object.assign(this.arrow.style, {
                    left: null != s ? `${s}px` : "",
                    top: null != a ? `${a}px` : "",
                    right: "",
                    bottom: "",
                    [r]: "-5px"
                })
            }
            mount() {
                this.contains(this.element) || this.appendChild(this.element)
            }
            unmount() {
                this.element && this.element.remove()
            }
            setVisible(t) {
                this.setAttribute("aria-hidden", t ? "false" : "true")
            }
            get target() {
                return document.querySelector(`[data-clipboard-button-tooltip-target-id="${this.id}"]`)
            }
            get placement() {
                return this.dataset.placement || "bottom-end"
            }
        },
        iQ = class extends L {},
        iZ = class extends iQ {
            constructor() {
                super(), this.handleMouseEnter = () => {
                    let t = this.dataset.url,
                        i = this.dataset.id;
                    this.quickView && t && i && this.quickView.requestProductFromUrl(t, i)
                }, this.handleQuickViewTriggerClick = () => {
                    let t = this.dataset.url;
                    this.quickView && t && this.quickView.openAndRenderProductByUrl(t)
                }, this.handleResize = io(() => {
                    this.buttons && this.setButtonsOverflow(), this.swatches && this.swatches.update()
                }, 100), this.handleImageLoad = () => {
                    this.loadedImageCount += 1, this.loadedImageCount === this.featuredImages ?.length && (this.removeLoader(), this.featuredImages.forEach(t => {
                        t.removeEventListener("load", this.handleImageLoad)
                    }))
                }, this.lastButtonsWidth = 0, this.loadedImageCount = 0, this.quickViewTrigger = this.querySelector("[data-product-card-quick-view-button]"), this.loader = this.querySelector("[data-product-card-preloader]"), this.buttons = this.querySelector("[data-product-card-buttons]"), this.featuredImages = [...this.querySelectorAll("[data-product-card-featured-image]")], this.swatches = this.querySelector("[data-product-card-color-swatches]"), this.quickView = document.getElementById("Quick-view"), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this), O.observe(this)
            }
            connectedCallback() {
                this.featuredImages.forEach(t => {
                    t.addEventListener("load", this.handleImageLoad)
                }), this.quickViewTrigger && (this.quickViewTrigger.addEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger.addEventListener("click", this.handleQuickViewTriggerClick))
            }
            disconnectedCallback() {
                this.featuredImages.forEach(t => {
                    t.removeEventListener("load", this.handleImageLoad)
                }), this.resizeObserver.disconnect(), O.unobserve(this), this.quickViewTrigger && (this.quickViewTrigger.removeEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger.removeEventListener("click", this.handleQuickViewTriggerClick))
            }
            setButtonsOverflow() {
                if (!this.buttons || this.offsetWidth < this.lastButtonsWidth) return;
                let t = this.buttons.offsetWidth > this.offsetWidth;
                t && this.buttons.offsetWidth > this.lastButtonsWidth && (this.lastButtonsWidth = this.buttons.offsetWidth), this.buttons.classList.toggle("product-card__btns--overflowed", t)
            }
            removeLoader() {
                this.loader && (O.unobserve(this), ei(this.loader))
            }
        },
        iJ = class extends L {
            constructor() {
                super(), this.handleResize = io(() => {
                    this.update()
                }, 100), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this), this.lineClamp = this.querySelector("[data-quote-line-clamp]"), this.target = this.querySelector("[data-quote-line-clamp-target]"), this.styles = getComputedStyle(this.target)
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
            update() {
                let t = this.getMaxLines();
                t && this.setMaxLines(t)
            }
            setMaxLines(t) {
                this.target && (this.target.style.setProperty("--gsc-max-lines", `${t}`), this.setAttribute("data-line-clamp-setter-is-ready", ""))
            }
            getMaxLines() {
                if (!this.lineClamp || !this.target) return 0;
                let t = this.styles.lineHeight,
                    i = this.lineClamp.offsetHeight,
                    s = Math.floor(i / parseFloat(t));
                return s
            }
        },
        i0 = class extends L {
            constructor() {
                super(), this.handleItemClick = t => {
                    this.input && this.dropdownBtnLabel && this.dropdown && (this.input.setAttribute("value", t.target.dataset.value), this.setActiveItem(t.target.dataset.value), this.dropdownBtnLabel.innerHTML = t.target.dataset.value, this.dropdown.hide())
                }, this.input = this.querySelector("input"), this.dropdown = this.querySelector("float-element"), this.dropdownBtnLabel = this.querySelector(".dropdown__toggle-label"), this.createItems(), this.items = [...this.querySelectorAll(".dropdown__item")]
            }
            connectedCallback() {
                this.items.forEach(t => {
                    t.addEventListener("click", this.handleItemClick)
                })
            }
            disconnectedCallback() {
                this.items.forEach(t => {
                    t.removeEventListener("click", this.handleItemClick)
                })
            }
            setActiveItem(t) {
                this.items.forEach(i => {
                    i.classList.toggle("active", i.dataset.value === t)
                })
            }
            createItems() {
                let t = this.querySelectorAll("option"),
                    i = document.createDocumentFragment();
                this.dropdown && (t.forEach(t => {
                    let s = document.createElement("div"),
                        a = t.cloneNode(!0);
                    s.classList.add("dropdown__item"), s.dataset.value = t.value, s.dataset.provinces = t.dataset.provinces, s.replaceChildren(...a.childNodes), i.appendChild(s)
                }), this.dropdown.replaceChildren(...i.childNodes))
            }
        },
        i1 = class extends L {
            constructor() {
                super(), this.handleWindowClick = t => {
                    let i = t.target,
                        s = i.closest("search-input"),
                        a = this.input === i;
                    a || s || this.updateResetButtonVisible()
                }, this.handleInputChange = () => {
                    this.updateResetButtonVisible()
                }, this.handleResetBtnClick = t => {
                    t.preventDefault(), this.reset()
                }, this.inputSelector = "[data-search-field-input]", this.resetBtnSelector = "[data-search-field-reset-button]", this.input = this.querySelector(this.inputSelector), this.resetBtn = this.querySelector(this.resetBtnSelector)
            }
            connectedCallback() {
                this.input.addEventListener("input", this.handleInputChange), window.addEventListener("click", this.handleWindowClick), this.resetBtn.addEventListener("click", this.handleResetBtnClick)
            }
            disconnectedCallback() {
                this.input.removeEventListener("input", this.handleInputChange), window.removeEventListener("click", this.handleWindowClick), this.resetBtn.removeEventListener("click", this.handleResetBtnClick)
            }
            reset() {
                if (this.input) {
                    let t = new Event("input", {
                        bubbles: !0
                    });
                    this.input.value = "", this.input.dispatchEvent(t), this.input.focus()
                }
            }
            updateResetButtonVisible() {
                if (this.resetBtn) {
                    let t = this.hasInputValue();
                    this.resetBtn.classList.toggle("hidden", !t)
                }
            }
            hasInputValue() {
                return !!this.input && this.input.value.trim().length > 0
            }
            get value() {
                return this.input ? this.input.value : ""
            }
        },
        i2 = class extends L {
            constructor() {
                super(), this.handleButtonClick = () => {
                    this.togglePasswordVisible()
                }, this.inputSelector = "[data-password-field-input]", this.buttonSelector = "[data-password-field-button]", this.input = this.querySelector(this.inputSelector), this.button = this.querySelector(this.buttonSelector)
            }
            connectedCallback() {
                this.button.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.button.removeEventListener("click", this.handleButtonClick)
            }
            togglePasswordVisible() {
                if (this.input) {
                    let t = "password" === this.input.getAttribute("type"),
                        i = t ? "text" : "password";
                    this.input.setAttribute("type", i), this.setButton(t)
                }
            }
            setButton(t) {
                this.button && this.button.toggleAttribute("password-visible", t)
            }
        },
        i5 = class extends L {
            constructor() {
                super(), this.handleMutations = t => {
                    t.forEach(t => {
                        if ("attributes" === t.type) {
                            let i = t.target.matches(this.zoomTargetSelector);
                            this.setVisible(i)
                        }
                    })
                }, this.handleMouseMove = t => {
                    let i = t.target,
                        s = !!i.closest(this.zoomTargetSelector),
                        a = tx();
                    this.isVisible && (this.style.top = `${t.clientY}px`, this.style.left = `${t.clientX}px`), !a && (this.setVisible(s), s && this.mutationObserver.observe(i, {
                        attributes: !0
                    }))
                }, this.zoomTargetSelector = "[data-zoom-cursor-target]", this.mutationObserver = new MutationObserver(this.handleMutations)
            }
            connectedCallback() {
                this.autoCheckTargets()
            }
            disconnectedCallback() {
                window.removeEventListener("mousemove", this.handleMouseMove), this.mutationObserver.disconnect(), clearInterval(this.checkTargetsIntervalID)
            }
            setVisible(t) {
                this.toggleAttribute("visible", t), document.body.style.cursor = t ? "none" : ""
            }
            updateState(t) {
                this.toggleAttribute("zoomed", t)
            }
            autoCheckTargets() {
                this.checkTargetsIntervalID = setInterval(() => {
                    let t = document.querySelectorAll(this.zoomTargetSelector);
                    t.length && !this.isHandlerSetted && (window.addEventListener("mousemove", this.handleMouseMove), this.isHandlerSetted = !0)
                }, 5e3)
            }
            get isVisible() {
                return this.hasAttribute("visible")
            }
        },
        i3 = class extends L {
            constructor() {
                super(), this.handleHistoryChange = ({
                    state: {
                        searchParams: t
                    }
                }) => {
                    let i = t || this.searchParamsInitial;
                    i !== this.searchParamsPrev && this.updateBySearchParams(i)
                }, this.cache = {}, this.searchParamsInitial = window.location.search.slice(1), this.searchParamsPrev = window.location.search.slice(1), this.sortQuery = "", this.filterQuery = ""
            }
            connectedCallback() {
                window.addEventListener("popstate", this.handleHistoryChange)
            }
            disconnectedCallback() {
                window.removeEventListener("popstate", this.handleHistoryChange)
            }
            formatParams(t) {
                this.searchParamsPrev = t;
                let i = this.dataset.baseParams || "";
                return `${i}${t}`
            }
            updateBySearchParams(t) {
                this.updateShopBySearchParams(t), this.updateFiltersBySearchParams(t)
            }
            updateShopBySearchParams(t) {
                let i = this.createUrl(t);
                this.cache[i] ? this.updateElements(this.cache[i]) : this.getFromUrl(i).then(t => this.updateElements(t)), this.updateURL(t, i)
            }
            updateFiltersBySearchParams(t) {
                let i = this.createUrl(t),
                    s = document.querySelector("#SidebarFiltersMobile"),
                    a = document.querySelector("#SidebarFiltersDesktop");
                if (s && a) {
                    let t = [s, a];
                    t.forEach(t => {
                        t.loadingOverlay.show()
                    });
                    let r = i => {
                        t.forEach(t => {
                            t.updateHTML(i), t.loadingOverlay.hide()
                        })
                    };
                    this.cache[i] ? r(this.cache[i]) : this.getFromUrl(i).then(t => r(t))
                }
            }
            getFromUrl(t) {
                let i = this.querySelector("#ShopProductsOverlay"),
                    s = i ? new ib(i) : null;
                s && s.show();
                let a = `${t}&section_id=${this.dataset.sectionId}`;
                return fetch(a).then(t => t.text()).then(i => {
                    let a = el(i);
                    return this.cache[t] = a, s && s.hide(), a
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in shop component", "warning")
                })
            }
            updateURL(t, i) {
                history.pushState({
                    searchParams: t
                }, "", i)
            }
            createUrl(t) {
                let i = this.formatParams(t) || "",
                    s = `${window.location.pathname}?${i}`;
                return s
            }
            updateElements(t) {
                ["ShopProducts", "ShopProductCount", "ShopSortList", "ShopActiveFilters"].forEach(i => {
                    let s = document.getElementById(i),
                        a = t.getElementById(i);
                    if (s && a) {
                        let t = a.cloneNode(!0);
                        s.replaceChildren(...t.childNodes)
                    }
                })
            }
            resetQueries() {
                this.sortQuery = "", this.filterQuery = ""
            }
        },
        i8 = class extends tL {
            constructor() {
                super(), this.handleFormScroll = () => {
                    if (this.form) {
                        let t = this.form.scrollTop > 0;
                        this.toggleAttribute("header-shadow-visible", t)
                    }
                }, this.handleClick = t => {
                    let i = t.target,
                        s = i.closest("[data-filters-checkbox]");
                    s && s.setAttribute("selected", "")
                }, this.handleInputChange = t => {
                    let i = t.target;
                    "INPUT" === i.tagName && this.change()
                }, this.form = this.element.querySelector("[data-filters-form]")
            }
            connectedCallback() {
                super.connectedCallback(), this.form.addEventListener("scroll", this.handleFormScroll), this.addEventListener("change", this.handleInputChange), this.addEventListener("click", this.handleClick)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this.form.removeEventListener("scroll", this.handleFormScroll), this.removeEventListener("change", this.handleInputChange), this.removeEventListener("click", this.handleClick)
            }
            change() { // re-define in children
            }
            createFilterQuery() {
                if (this.form && this.shop) {
                    let t = new FormData(this.form),
                        i = new URLSearchParams(t).toString();
                    this.shop.filterQuery = i
                }
            }
            updateHTML(t) {
                if (this.isOpenOnInit) {
                    let i = this.getAttribute("id"),
                        s = i ? t.getElementById(i) : null,
                        a = s ? s.querySelector("[data-sidebar-body]") : null;
                    a && (this.updateFormFromElement(a), this.updateHeaderFromElement(a))
                } else {
                    let i = this.getAttribute("id"),
                        s = i ? t.getElementById(i) : null,
                        a = s ? s.querySelector(`[data-sidebar-template="${this.id}"]`) : null;
                    if (a) {
                        let t = er(a);
                        this.updateFormFromElement(t), this.updateHeaderFromElement(t)
                    }
                }
            }
            updateHeaderFromElement(t) {
                let i = this.element.querySelector("[data-filters-header]"),
                    s = t.querySelector("[data-filters-header]");
                if (i && s) {
                    let t = s.cloneNode(!0);
                    i.replaceChildren(...t.childNodes)
                }
            }
            updateFormFromElement(t) {
                let i = this.element.querySelector("[data-filters-form]"),
                    s = t.querySelector("[data-filters-form]");
                if (i && s) {
                    let t = s.cloneNode(!0);
                    i.replaceChildren(...t.childNodes)
                }
            }
            get shop() {
                return this.element.closest("shop-component")
            }
            get searchParams() {
                return this.shop ? [this.shop.filterQuery, this.shop.sortQuery].join("&") : ""
            }
            get loadingOverlay() {
                let t = this.element.querySelector("[data-filters-loading-overlay]");
                return t ? new ib(t) : null
            }
        },
        i9 = class extends i8 {
            change() {
                this.shop && (this.createFilterQuery(), this.shop.updateBySearchParams(this.searchParams))
            }
            constructor(...t) {
                super(...t), this.handleSectionLoad = () => {}
            }
        },
        i6 = class extends i8 {
            change() {
                this.shop && (this.createFilterQuery(), this.shop.updateFiltersBySearchParams(this.searchParams), this.setButtonForReset())
            }
            setButtonForReset() {
                let t = this.element.querySelector("filter-remove-btn");
                if (t) {
                    let i = t.classList.contains("hidden");
                    i && et(t)
                }
            }
        },
        i4 = class extends L {
            connectedCallback() {
                this.addEventListener("keydown", this.handleKeyDown), this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("keydown", this.handleKeyDown), this.removeEventListener("click", this.handleButtonClick)
            }
            update() {
                let t = this.closest("shop-active-filters"),
                    i = this.closest("shop-component"),
                    s = this.dataset.url;
                if (t) {
                    let i = this.hasAttribute("data-shop-active-filters-remove-btn"),
                        s = this.hasAttribute("data-shop-active-filters-reset");
                    if (s && t.reset(), i) {
                        let i = 1 === t.buttons.length;
                        i ? t.reset() : (t.setDisable(), this.remove())
                    }
                }
                if (s && i) {
                    let t = -1 === s.indexOf("?") ? "" : s.slice(s.indexOf("?") + 1);
                    i.resetQueries(), i.updateBySearchParams(t)
                }
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    this.update()
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    i && (t.preventDefault(), this.update())
                }
            }
        },
        i7 = class extends L {
            constructor() {
                super(), this.handleFormInput = io(t => {
                    debugger
                    t.preventDefault();
                    let i = this.closest("shop-component"),
                        s = this.closest("sidebar-component"),
                        a = t.target;
                    if (s && s.hide(), i && a) {
                        const isCollectionPage = window.location.pathname.includes('filter.v.availability');
                        console.log(isCollectionPage);
                        if(!isCollectionPage){
                            const af = '&filter.v.availability=1';
                            let t = this.getSortQuery(a) + af,
                            s = [t, i.filterQuery].join("&");
                            i.sortQuery = t, i.updateBySearchParams(s)
                        }else{
                            let t = this.getSortQuery(a),
                            s = [t, i.filterQuery].join("&");
                            i.sortQuery = t, i.updateBySearchParams(s)
                        }
                    }
                }, 250), this.handleLabelKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    if (i) {
                        t.preventDefault();
                        let i = t.target,
                            s = i.querySelector("input");
                        if (s) {
                            let t = new MouseEvent("click", {
                                button: 0,
                                which: 1
                            });
                            s.dispatchEvent(t)
                        }
                    }
                }, this.labels = [...this.querySelectorAll("[data-sort-list-label]")]
            }
            connectedCallback() {
                this.labels.forEach(t => {
                    t.addEventListener("keydown", this.handleLabelKeyDown)
                }), this.addEventListener("input", this.handleFormInput)
            }
            disconnectedCallback() {
                this.labels.forEach(t => {
                    t.removeEventListener("keydown", this.handleLabelKeyDown)
                }), this.removeEventListener("input", this.handleFormInput)
            }
            getSortQuery(t) {
                let i = t.closest("form"),
                    s = "";
                if (i) {
                    let t = new FormData(i);                      
                    s = new URLSearchParams(t).toString()                    
                }
                return s
            }
        },
        se = class extends L {
            constructor() {
                super(), this.handleRangeInput = t => {
                    let i = this.querySelector("[data-price-range-max-input]"),
                        s = this.querySelector("[data-price-range-min-input]");
                    if (this.progress && s && i) {
                        let a = this.progress.offsetLeft + this.progress.offsetWidth / 2,
                            r = t.offsetX < a;
                        s.toggleAttribute("targeted", r), i.toggleAttribute("targeted", !r)
                    }
                }, this.handleNumberChange = () => {
                    if (this.minNumberInput && this.maxNumberInput) {
                        let t = parseFloat(this.minNumberInput.value),
                            i = parseFloat(this.maxNumberInput.value);
                        this.updateMinRangeInput(t), this.updateMaxRangeInput(i)
                    }
                }, this.handleRangeChange = () => {
                    if (this.minRangeInput && this.maxRangeInput) {
                        let t = parseFloat(this.minRangeInput.value),
                            i = parseFloat(this.maxRangeInput.value);
                        this.updateMaxPriceInput(i), this.updateMaxRangeInput(i), this.updateMinPriceInput(t), this.updateMinRangeInput(t)
                    }
                }, this.minNumberInput = this.querySelector("[data-price-min-range-number]"), this.maxNumberInput = this.querySelector("[data-price-max-range-number]"), this.rangeWrapper = this.querySelector("[data-price-range-inputs-wrapper]"), this.minRangeInput = this.querySelector("[data-price-min-range-input]"), this.maxRangeInput = this.querySelector("[data-price-max-range-input]"), this.progress = this.querySelector("[data-price-range-progress]")
            }
            connectedCallback() {
                this.minRangeInput && this.updateMinRangeInput(+this.minRangeInput.value), this.maxRangeInput && this.updateMaxRangeInput(+this.maxRangeInput.value), this.minNumberInput.addEventListener("input", this.handleNumberChange), this.maxNumberInput.addEventListener("input", this.handleNumberChange), this.minRangeInput.addEventListener("input", this.handleRangeChange), this.maxRangeInput.addEventListener("input", this.handleRangeChange), this.rangeWrapper.addEventListener("mouseenter", this.handleRangeInput), this.rangeWrapper.addEventListener("mousemove", this.handleRangeInput)
            }
            disconnectedCallback() {
                this.minNumberInput.removeEventListener("input", this.handleNumberChange), this.maxNumberInput.removeEventListener("input", this.handleNumberChange), this.minRangeInput.removeEventListener("input", this.handleRangeChange), this.maxRangeInput.removeEventListener("input", this.handleRangeChange), this.rangeWrapper.removeEventListener("mouseenter", this.handleRangeInput), this.rangeWrapper.removeEventListener("mousemove", this.handleRangeInput)
            }
            updateMaxRangeInput(t) {
                if (this.maxRangeInput && this.progress) {
                    let i = 100 - t / +this.maxRangeInput.max * 100;
                    this.maxRangeInput.value = `${t}`, this.progress.style.right = `${i}%`
                }
            }
            updateMinRangeInput(t) {
                if (this.minRangeInput && this.progress) {
                    let i = t / +this.minRangeInput.max * 100;
                    this.minRangeInput.value = `${t}`, this.progress.style.left = `${i}%`
                }
            }
            updateMaxPriceInput(t) {
                this.maxNumberInput && (this.maxNumberInput.value = t.toFixed(2))
            }
            updateMinPriceInput(t) {
                this.minNumberInput && (this.minNumberInput.value = t.toFixed(2))
            }
        },
        st = class extends L {
            constructor() {
                super(), this.handleWindowLoad = () => {
                    this.isEditorMode || this.init()
                }, this.handleSectionLoad = t => {
                    this.dataset.sectionId === t.detail.sectionId && this.reset()
                }, this.handleItemClick = t => {
                    let i = t.target,
                        s = i.closest(this.itemSelector);
                    if (s) {
                        let t = +(s.dataset.value || 1);
                        this.switch(t)
                    }
                }, this.handleKeyDown = t => {
                    let i = z(t.key || t.keyCode);
                    if (i) {
                        t.preventDefault();
                        let i = t.target,
                            s = i.closest(this.itemSelector);
                        if (s) {
                            let t = +(s.dataset.value || 1);
                            this.switch(t)
                        }
                    }
                }, this.itemSelector = "[data-column-switcher-item]", this.targetSelector = "[data-column-switcher-target]", this.items = [...this.querySelectorAll(this.itemSelector)], this.cssVariable = this.dataset.columnSwitcherCssVariable || ""
            }
            connectedCallback() {
                window.addEventListener("load", this.handleWindowLoad), this.items.forEach(t => {
                    t.addEventListener("keydown", this.handleKeyDown), t.addEventListener("click", this.handleItemClick)
                }), this.isEditorMode && this.editor.subscribe("SECTION_LOAD", this.handleSectionLoad)
            }
            disconnectedCallback() {
                window.removeEventListener("load", this.handleWindowLoad), this.items.forEach(t => {
                    t.removeEventListener("keydown", this.handleKeyDown), t.removeEventListener("click", this.handleItemClick)
                }), this.isEditorMode && this.editor.destroy()
            }
            updateByColumnCount(t) {
                this.selectSwitch(t), this.updateColumnCount(t)
            }
            selectSwitch(t) {
                this.items.forEach(i => {
                    let s = +(i.getAttribute("data-value") || 1);
                    i.classList.toggle("selected", s === t)
                })
            }
            updateColumnCount(t) {
                let i = this.closest(this.targetSelector);
                i && (i.style.setProperty(`--gsc-${this.cssVariable}`, t.toString()), localStorage.setItem(`products-${this.cssVariable}`, t.toString()))
            }
            init() {
                let t = localStorage.getItem(`products-${this.cssVariable}`);
                if (!t || "null" === t) return;
                let i = Number(t);
                i > 0 && this.updateByColumnCount(i)
            }
            switch (t) {
                this.updateByColumnCount(t)
            }
            reset() {
                this.dataset.default && this.switch(Number(this.dataset.default))
            }
        },
        si = class extends L {
            connectedCallback() {
                this.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleButtonClick)
            }
            constructor(...t) {
                super(...t), this.handleButtonClick = () => {
                    let t = this.closest("shop-component"),
                        i = this.closest("#SidebarFiltersMobile");
                    if (t) {
                        let i = [t.filterQuery, t.sortQuery].join("&");
                        t.updateShopBySearchParams(i)
                    }
                    i && i.hide()
                }
            }
        },
        ss = class extends L {
            constructor() {
                super(), this.handleButtonMouseDown = t => {
                    t.preventDefault(), this.startMove()
                }, this.handleButtonMouseUp = () => {
                    this.endMove()
                }, this.handleMouseMove = t => {
                    this.isMoving && this.moveSeparator(t.pageX)
                }, this.handleButtonKeyUp = t => {
                    if (!this.button) return;
                    let i = t.key || t.keyCode,
                        s = H(i),
                        a = $(i);
                    if (!s && !a) return;
                    let r = this.button.getBoundingClientRect(),
                        n = r.right - r.width / 2,
                        o = s ? n - this.step : n + this.step;
                    this.moveSeparator(o)
                }, this.handleTouchStart = () => {
                    this.startMove()
                }, this.handleTouchEnd = () => {
                    this.endMove()
                }, this.handleTouchMove = t => {
                    this.isMoving && (t.preventDefault(), this.moveSeparator(t.targetTouches[0].clientX))
                }, this.button = this.querySelector("[data-before-after-images-button]"), this.isMoving = !1, this.step = 20
            }
            connectedCallback() {
                this.setSeparatorPosition(Number(this.dataset.initialDragPosition)), this.button.addEventListener("keyup", this.handleButtonKeyUp), this.button.addEventListener("mousedown", this.handleButtonMouseDown), document.addEventListener("mouseup", this.handleButtonMouseUp), document.addEventListener("mousemove", this.handleMouseMove), this.button.addEventListener("touchstart", this.handleTouchStart), this.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("touchend", this.handleTouchEnd)
            }
            disconnectedCallback() {
                this.button.removeEventListener("keyup", this.handleButtonKeyUp), this.button.removeEventListener("mousedown", this.handleButtonMouseDown), document.removeEventListener("mouseup", this.handleButtonMouseUp), document.removeEventListener("mousemove", this.handleMouseMove), this.button.removeEventListener("touchstart", this.handleTouchStart), this.removeEventListener("touchmove", this.handleTouchMove), document.removeEventListener("touchend", this.handleTouchEnd)
            }
            startMove() {
                this.isMoving = !0
            }
            endMove() {
                this.isMoving = !1
            }
            setSeparatorPosition(t) {
                this.style.setProperty("--gsc-drag-position", `${t}%`)
            }
            moveSeparator(t) {
                let i = this.getBoundingClientRect();
                if (t <= i.left) this.setSeparatorPosition(0);
                else if (t >= i.right) this.setSeparatorPosition(100);
                else {
                    let s = Math.floor((t - i.left) / this.offsetWidth * 1e3) / 10;
                    this.setSeparatorPosition(s)
                }
            }
        },
        sa = class extends L {
            constructor() {
                super(), this.handlePinBtnClick = t => {
                    this.setAttribute("animation-state", "pause")
                }, this.handlePinBtnEnter = t => {
                    this.setAttribute("animation-state", "pause")
                }, this.handlePinBtnLeave = t => {
                    this.hasOpenFloatElement || this.removeAttribute("animation-state")
                }, this.handleFloatElementShow = () => {
                    this.hasOpenFloatElement = !0
                }, this.handleFloatElementHide = () => {
                    this.hasOpenFloatElement = !1, this.removeAttribute("animation-state")
                }, this.handleModalOpen = () => {
                    this.setAttribute("animation-state", "pause"), this.header && this.header.setHidden(!0)
                }, this.handleModalHide = () => {
                    this.removeAttribute("animation-state"), this.header && this.header.setHidden(!1)
                }, this.handleEditorClick = t => {
                    let i = t.target ?.closest("float-element-btn"),
                        s = t.target ?.closest("hotspots-float-element");
                    i || s || this.floatElements.forEach(t => {
                        t.hide()
                    })
                }, this.modals = [...this.querySelectorAll("modal-component")], this.floatElements = [...this.querySelectorAll("hotspots-float-element")], this.floatElementsBtns = [...this.querySelectorAll("float-element-btn")], this.header = document.querySelector("header-component")
            }
            connectedCallback() {
                this.modals.forEach(t => {
                    customElements.whenDefined("modal-component").then(() => {
                        t.subscribe("show", this.handleModalOpen), t.subscribe("hide", this.handleModalHide)
                    })
                }), this.floatElements.forEach(t => {
                    customElements.whenDefined("hotspots-float-element").then(() => {
                        t.subscribe("hide", this.handleFloatElementHide), t.subscribe("show", this.handleFloatElementShow)
                    })
                }), this.floatElementsBtns.forEach(t => {
                    t ?.addEventListener("mouseenter", this.handlePinBtnEnter), t ?.addEventListener("mouseleave", this.handlePinBtnLeave), t ?.addEventListener("click", this.handlePinBtnClick)
                }), this.isEditorMode && window.addEventListener("click", this.handleEditorClick)
            }
            disconnectedCallback() {
                this.modals.forEach(t => {
                    customElements.whenDefined("modal-component").then(() => {
                        t.unsubscribe("show", this.handleModalOpen), t.unsubscribe("hide", this.handleModalHide)
                    })
                }), this.floatElements.forEach(t => {
                    customElements.whenDefined("hotspots-float-element").then(() => {
                        t.unsubscribe("hide", this.handleFloatElementHide), t.unsubscribe("show", this.handleFloatElementShow)
                    })
                }), this.floatElementsBtns.forEach(t => {
                    t ?.removeEventListener("mouseenter", this.handlePinBtnEnter), t ?.removeEventListener("mouseleave", this.handlePinBtnLeave), t ?.removeEventListener("click", this.handlePinBtnClick)
                }), this.isEditorMode && window.removeEventListener("click", this.handleEditorClick)
            }
        };
    let sr = "AuroraTheme-Timer";
    class sn {
        constructor(t) {
            this._blockId = t
        }
        parseData(t) {
            try {
                let i = JSON.parse(t ?? "{}");
                if ("endDate" in i && "hash" in i) return {
                    endDate: new Date(+i.endDate),
                    hash: i.hash
                };
                return null
            } catch (t) {
                return null
            }
        }
        saveData(t) {
            try {
                localStorage.setItem(`${sr}-${this._blockId}`, JSON.stringify({
                    endDate: t.endDate.getTime(),
                    hash: t.hash
                }))
            } catch (t) {}
        }
        loadData() {
            try {
                return this.parseData(localStorage.getItem(`${sr}-${this._blockId}`))
            } catch (t) {
                return null
            }
        }
    }(t = r || (r = {})).Fixed = "fixed", t.Evergreen = "evergreen", (i = n || (n = {})).None = "none", i.Hide = "hide", i.Restart = "restart", i.WaitOneDay = "wait_one_day";
    let so = {
            january: 0,
            february: 1,
            march: 2,
            april: 3,
            may: 4,
            june: 5,
            july: 6,
            august: 7,
            september: 8,
            october: 9,
            november: 10,
            december: 11
        },
        sl = (t, i) => {
            let s = new Date;
            switch (t) {
                case "day":
                    s.setDate(s.getDate() + i);
                    break;
                case "hour":
                    s.setHours(s.getHours() + i);
                    break;
                case "minute":
                    s.setMinutes(s.getMinutes() + i);
                    break;
                case "second":
                    s.setSeconds(s.getSeconds() + i)
            }
            return s
        };
    var sh = class extends L {
            constructor() {
                super(), this.mode = r.Fixed, this.endDate = new Date, this.finishStrategy = n.None, this.daysUnit = this.querySelector("[data-timer-days]"), this.hoursUnit = this.querySelector("[data-timer-hours]"), this.minutesUnit = this.querySelector("[data-timer-minutes]"), this.secondsUnit = this.querySelector("[data-timer-seconds]"), this.daysUnitLabel = this.querySelector("[data-timer-days-label]"), this.hoursUnitLabel = this.querySelector("[data-timer-hours-label]"), this.minutesUnitLabel = this.querySelector("[data-timer-minutes-label]"), this.secondsUnitLabel = this.querySelector("[data-timer-seconds-label]"), this.evergreenUnit = this.dataset.evergreenUnit || "minute", this.evergreenValue = parseInt(this.dataset.evergreenValue || "0"), this.mode = this.dataset.mode, this.mode === r.Fixed && (this.finishStrategy = "true" === this.dataset.hideOnComplete ? n.Hide : n.None), this.mode === r.Evergreen && (this.finishStrategy = this.dataset.evergreenOnComplete || n.Restart, this.timerStorage = new sn(this.dataset.blockId || this.id))
            }
            connectedCallback() {
                this.start()
            }
            disconnectedCallback() {
                clearInterval(this.timerRef)
            }
            getHash() {
                return `${this.finishStrategy}-${this.evergreenUnit}-${this.evergreenValue}`
            }
            start() {
                if (this.mode === r.Fixed) {
                    let t = Number(this.dataset.year),
                        i = so[this.dataset.month ?? "january"],
                        s = Number(this.dataset.day),
                        a = Number(this.dataset.hour),
                        r = Number(this.dataset.minute);
                    this.endDate = new Date(t, i, s, a, r)
                }
                if (this.mode === r.Evergreen) {
                    let t = this.timerStorage.loadData();
                    t && t.hash === this.getHash() ? this.endDate = t.endDate : this.updateEvergreenData()
                }
                this.timerRef = window.setInterval(this.tick.bind(this), 1e3), this.tick()
            }
            updateEvergreenData() {
                let t = sl(this.evergreenUnit, this.evergreenValue);
                this.timerStorage.saveData({
                    endDate: t,
                    hash: this.getHash()
                }), this.endDate = t
            }
            finish() {
                switch (clearInterval(this.timerRef), this.finishStrategy) {
                    case n.Restart:
                        this.timerStorage.saveData({
                            endDate: sl(this.evergreenUnit, this.evergreenValue),
                            hash: this.getHash()
                        }), this.start();
                        break;
                    case n.WaitOneDay:
                        if (new Date().getTime() - this.endDate.getTime() > 864e5) {
                            let t = sl(this.evergreenUnit, this.evergreenValue);
                            this.timerStorage.saveData({
                                endDate: t,
                                hash: this.getHash()
                            }), this.start()
                        } else this.hide();
                        break;
                    case n.None:
                        this.show() // show zero-values if time is over
                        ;
                        break;
                    default:
                        this.hide()
                }
            }
            renderTime(t, i, s, a) {
                this.daysUnit && this.hoursUnit && this.minutesUnit && this.secondsUnit && (this.daysUnit.innerText = t.toString(), this.hoursUnit.innerText = i.toString(), this.minutesUnit.innerText = s.toString(), this.secondsUnit.innerText = a.toString(), this.renderLabels(t, i, s, a))
            }
            renderLabels(t, i, s, a) {
                this.daysUnitLabel && this.hoursUnitLabel && this.minutesUnitLabel && this.secondsUnitLabel && (this.daysUnitLabel.innerText = 1 === t ? window.auroraThemeLocales.countdownTimerString.day : window.auroraThemeLocales.countdownTimerString.days, this.hoursUnitLabel.innerText = 1 === i ? window.auroraThemeLocales.countdownTimerString.hour : window.auroraThemeLocales.countdownTimerString.hours, this.minutesUnitLabel.innerText = 1 === s ? window.auroraThemeLocales.countdownTimerString.minute : window.auroraThemeLocales.countdownTimerString.minutes, this.secondsUnitLabel.innerText = 1 === a ? window.auroraThemeLocales.countdownTimerString.second : window.auroraThemeLocales.countdownTimerString.seconds)
            }
            tick() {
                let t = this.endDate.getTime() - new Date().getTime();
                if (t > 0) {
                    this.show(), this.renderTime(Math.floor(t / 864e5), Math.floor(t % 864e5 / 36e5), Math.floor(t % 36e5 / 6e4), Math.floor(t % 6e4 / 1e3));
                    return
                }
                this.renderTime(0, 0, 0, 0), this.finish(), window.Shopify.designMode && this.show()
            }
            show() {
                et(this), this.dataset.blockId && et(document.querySelector(`.block-${this.dataset.blockId}`))
            }
            hide() {
                window.Shopify.designMode || (this.dataset.sectionId && ei(document.querySelector(`.section-${this.dataset.sectionId}`)), this.dataset.blockId && ei(document.querySelector(`.block-${this.dataset.blockId}`)), ei(this))
            }
        },
        sc = class extends tL {
            constructor() {
                super(), this.handleFormScroll = () => {
                    if (!this.viewport) return;
                    let t = this.viewport.scrollTop > 0;
                    this.toggleAttribute("header-shadow-visible", t)
                }, this.viewport = this.element.querySelector("[data-product-information-drawer-viewport]")
            }
            connectedCallback() {
                super.connectedCallback(), this.viewport.addEventListener("scroll", this.handleFormScroll)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this.viewport.removeEventListener("scroll", this.handleFormScroll)
            }
        },
        sd = class extends L {
            constructor() {
                super(), this.styles = getComputedStyle(this)
            }
            show() {
                return this.setVisible(!0), M(K(this.styles))
            }
            hide() {
                return this.setVisible(!1), M(K(this.styles))
            }
            setVisible(t) {
                this.setAttribute("aria-hidden", t ? "false" : "true")
            }
            get isVisible() {
                return "false" === this.getAttribute("aria-hidden")
            }
        },
        su = class extends tT {
            constructor() {
                super(), this.handleWindowScroll = () => {
                    this.lastScrollPosition || (this.lastScrollPosition = window.scrollY), this.updateVisibleStatus(), this.updateExtendStatus()
                }, this.updateExtendStatus = io(() => {
                    let t = Math.abs(window.scrollY - this.lastScrollPosition);
                    if (t > 24) {
                        let t = this.lastScrollPosition > window.scrollY;
                        this.toggleAttribute("is-extended", t)
                    }
                    this.lastScrollPosition = 0
                }, 50), this.products = document.getElementById("ShopProducts"), this.footer = document.querySelector(".shopify-section-footer")
            }
            connectedCallback() {
                super.connectedCallback(), window.addEventListener("scroll", this.handleWindowScroll)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), window.removeEventListener("scroll", this.handleWindowScroll)
            }
            updateVisibleStatus() {
                let t = this.footer ? this.footer.offsetTop : 0,
                    i = this.products.getBoundingClientRect(),
                    s = window.innerHeight + window.scrollY < t,
                    a = i.top < 0,
                    r = s && a;
                this.toggleAttribute("is-visible", r), document.body.toggleAttribute("is-filters-button-fixed", r)
            }
        },
        sp = class extends L {
            constructor() {
                super(), this.checkbox = this.querySelector("[data-recipient-form-checkbox]"), this.timezoneInput = this.querySelector("[data-recipient-form-timezone-input]"), this.inputs = this.querySelectorAll("[data-recipient-form-input], [data-recipient-form-timezone-input]"), this.fields = this.querySelector("[data-recipient-form-fields]"), this.timezoneInput.value = new Date().getTimezoneOffset()
            }
            connectedCallback() {
                this.addEventListener("change", this.handleChange)
            }
            disconnectedCallback() {
                this.removeEventListener("change", this.handleChange)
            }
            handleChange() {
                let t = this.checkbox.checked;
                this.updateMaxHeight(t), this.updateInputDisable(!t), t || this.clearInputs()
            }
            clearInputs() {
                this.inputs.forEach(t => {
                    t.value = ""
                })
            }
            updateInputDisable(t) {
                this.inputs.forEach(i => {
                    i.disabled = t
                })
            }
            reset() {
                this.checkbox.checked = !1, this.clearInputs()
            }
            updateMaxHeight(t) {
                if (!this.fields) return;
                let i = t ? this.fields.scrollHeight : 0;
                this.fields.style.maxHeight = `${i}px`
            }
        };
    let sm = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        sg = Object.keys(sm).reduce((t, i) => ({ ...t,
            [sm[i]]: i
        }), {}),
        sf = t => sg[t];
    var sb = class extends L {
            constructor() {
                super(), this.element = this.querySelector(".color-swatch") || this, this.setValue()
            }
            setValue() {
                if (this.hasAttribute("is-image")) return;
                let t = this.dataset.color.toLowerCase().trim(),
                    i = this.dataset.colorsPatterns.split("\n"),
                    s = this.isColor(t);
                s || this.element.setAttribute("not-valid", ""), this.setPropertyValue(t), i.forEach(i => {
                    let s = i.split("::"),
                        a = s[0],
                        r = s[1],
                        n = a.toLowerCase().trim();
                    if (n === t) {
                        this.setPropertyValue(r);
                        return
                    }
                })
            }
            getGradientValue(t) {
                let i = "90deg, ",
                    s = 0,
                    a = this.dataset.colorsPatterns.split("\n"),
                    r = a.reduce((t, i) => {
                        let s = i.split("::"),
                            a = s[0],
                            r = s[1],
                            n = a.toLowerCase().trim();
                        return { ...t,
                            [n]: r
                        }
                    }, {});
                return t.forEach((a, n) => {
                    let o = 100 / t.length,
                        l = a.toLowerCase();
                    r[l] ? l = r[l] : this.isColor(l) || (l = "white", s += 1);
                    let h = `${o*n}%`,
                        c = `${o*(n+1)}%`,
                        d = `${l} ${h}, ${l} ${c}`;
                    i = `${i} ${d}`, n !== t.length - 1 && (i = `${i}, `)
                }), s === t.length ? null : `linear-gradient(${i})`
            }
            setPropertyValue(t) {
                let i = this.isImage(t),
                    s = this.isUrl(t),
                    a = this.isGradient(t),
                    r = this.isColor(t),
                    n = this.dataset.sectionBackground,
                    o = sf(n);
                if (s) this.element.removeAttribute("not-valid"), this.element.style.setProperty("--gsc-color-swatch-value", `url(${t})`), this.setSimilarlyBgColorStatus(!1);
                else if (i) this.setSimilarlyBgColorStatus(!1);
                else if (a) {
                    let i = t.split("/"),
                        s = this.getGradientValue(i),
                        a = t.includes(n) || t.includes(o);
                    s && (this.element.removeAttribute("not-valid"), this.element.style.setProperty("--gsc-color-swatch-value", s)), this.setSimilarlyBgColorStatus(a)
                } else {
                    let i = t === n || t === o;
                    r && this.element.removeAttribute("not-valid"), this.setSimilarlyBgColorStatus(i), this.element.style.setProperty("--gsc-color-swatch-value", t)
                }
            }
            setSimilarlyBgColorStatus(t) {
                this.element.toggleAttribute("section-background-color-equally", t)
            }
            isColor(t) {
                let i = new Option().style;
                return i.color = t, "" !== i.color
            }
            isImage(t) {
                return t.includes(".png") || t.includes(".jp")
            }
            isUrl(t) {
                try {
                    return new URL(t), !0
                } catch (t) {
                    return !1
                }
            }
            isGradient(t) {
                return t.includes("/")
            }
        },
        sy = class extends iQ {
            constructor() {
                super(), this.handleMouseEnter = () => {
                    let t = this.dataset.url,
                        i = this.dataset.id;
                    this.quickView && t && i && this.quickView.requestProductFromUrl(t, i)
                }, this.handleQuickViewTriggerClick = () => {
                    let t = this.dataset.url;
                    this.quickView && t && this.quickView.openAndRenderProductByUrl(t)
                }, this.quickViewTrigger = this.querySelector("[data-product-card-quick-view-button]"), this.quickView = document.getElementById("Quick-view")
            }
            connectedCallback() {
                this.addEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger && this.quickViewTrigger.addEventListener("click", this.handleQuickViewTriggerClick)
            }
            disconnectedCallback() {
                this.removeEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger && this.quickViewTrigger.removeEventListener("click", this.handleQuickViewTriggerClick)
            }
        },
        sv = class extends iQ {
            constructor() {
                super(), this.handleMouseEnter = () => {
                    let t = this.dataset.url,
                        i = this.dataset.id;
                    this.quickView && t && i && this.quickView.requestProductFromUrl(t, i)
                }, this.handleQuickViewTriggerClick = () => {
                    let t = this.dataset.url;
                    this.quickView && t && this.quickView.openAndRenderProductByUrl(t)
                }, this.quickViewTrigger = this.querySelector("[data-product-card-quick-view-button]"), this.quickView = document.getElementById("Quick-view")
            }
            connectedCallback() {
                this.addEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger && this.quickViewTrigger.addEventListener("click", this.handleQuickViewTriggerClick)
            }
            disconnectedCallback() {
                this.removeEventListener("mouseenter", this.handleMouseEnter), this.quickViewTrigger && this.quickViewTrigger.removeEventListener("click", this.handleQuickViewTriggerClick)
            }
        },
        sw = class extends L {
            connectedCallback() {
                this.loadProducts()
            }
            loadProducts() {
                return this.setAttribute("is-loading", ""), fetch(this.dataset.url).then(t => t.text()).then(t => {
                    let i = el(t);
                    this.updateByHTML(i), this.removeAttribute("is-loading")
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in product recommendations component", "warning")
                })
            }
            updateByHTML(t) {
                let i = t.getElementById(this.id);
                if (i) {
                    let t = i.cloneNode(!0);
                    this.replaceChildren(...t.childNodes), this.toggleAttribute("is-ready", this.hasChildNodes())
                }
            }
        };
    let sS = function(t, i) {
        i = i || {};
        let s = i.method || "post",
            a = i.parameters || {},
            r = document.createElement("form");
        for (let i in r.setAttribute("method", s), r.setAttribute("action", t), a) {
            let t = document.createElement("input");
            t.setAttribute("type", "hidden"), t.setAttribute("name", i), t.setAttribute("value", a[i]), r.appendChild(t)
        }
        document.body.appendChild(r), r.submit(), document.body.removeChild(r)
    };
    var sk = class extends L {
            constructor() {
                super(), this.handleDeleteButtonClick = ({
                    currentTarget: t
                }) => {
                    let i = t.getAttribute("data-confirm-message"),
                        s = confirm(i);
                    s && sS(t.dataset.target, {
                        parameters: {
                            _method: "delete"
                        }
                    })
                }, this.deleteButtons = [...this.querySelectorAll("[data-addresses-delete-button]")]
            }
            connectedCallback() {
                this.deleteButtons.forEach(t => {
                    t.addEventListener("click", this.handleDeleteButtonClick)
                })
            }
            disconnectedCallback() {
                this.deleteButtons.forEach(t => {
                    t.removeEventListener("click", this.handleDeleteButtonClick)
                })
            }
        },
        sC = class extends L {
            constructor() {
                super(), this.handleContentResize = () => {
                    this.updateMaxHeight(this.isVisible)
                }, this.content = this.querySelector("[data-tabs-element-content]"), this.resizeObserver = new ResizeObserver(this.handleContentResize), this.content && this.resizeObserver.observe(this.content)
            }
            connectedCallback() {
                this.updateMaxHeight(this.isVisible)
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
            attributeChangedCallback(t, i, s) {
                this.updateMaxHeight(this.isVisible)
            }
            show() {
                return this.setVisible(!0), M(0)
            }
            hide() {
                return this.setVisible(!1), M(0)
            }
            setVisible(t) {
                this.setAttribute("aria-hidden", t ? "false" : "true")
            }
            updateMaxHeight(t) {
                if (!this.content) return;
                let i = t ? this.content.offsetHeight : 0;
                this.style.maxHeight = `${i}px`
            }
            get isVisible() {
                return "false" === this.getAttribute("aria-hidden")
            }
            static get observedAttributes() {
                return ["aria-hidden"]
            }
        },
        sE = class extends L {
            constructor() {
                super(), this.handleClick = t => {
                    if ("VIDEO" === t.target.tagName) {
                        let i = t.target;
                        this.options.isControlsEnabled || this.videoToggle(i)
                    }
                }, this.handlePosterClick = () => {
                    this.loadContent()
                }, this.poster = this.querySelector("[data-video-banner-poster]"), this.options = {
                    isAutoplayEnabled: this.hasAttribute("data-enable-autoplay"),
                    isControlsEnabled: this.hasAttribute("data-enable-controls")
                }
            }
            connectedCallback() {
                this.options.isAutoplayEnabled && this.loadContent(), this.poster && this.poster.addEventListener("click", this.handlePosterClick), this.addEventListener("click", this.handleClick)
            }
            disconnectedCallback() {
                this.poster && this.poster.removeEventListener("click", this.handlePosterClick), this.removeEventListener("click", this.handleClick)
            }
            videoToggle(t) {
                let i = t.paused;
                i ? t.play() : t.pause()
            }
            loadContent() {
                this.getAttribute("loaded") || (this.addVideo(), this.setAttribute("loaded", "true"))
            }
            removeVideo() {
                let t = this.querySelector("video,  iframe");
                t && (t.remove(), this.removeAttribute("loaded"))
            }
            addVideo() {
                let t = document.createElement("div"),
                    i = this.querySelector("[data-video-banner-media-template]"),
                    s = i ?.content,
                    a = this.querySelector("[data-video-banner-container]");
                if (!s || !s.firstElementChild) return;
                let r = s.firstElementChild.cloneNode(!0);
                t.appendChild(r);
                let n = t.querySelector("video, iframe");
                n && (this.poster && this.poster.remove(), a.appendChild(n), "VIDEO" === n.tagName && n.play())
            }
        },
        sT = class extends L {
            connectedCallback() {
                this.loadProducts()
            }
            erase() {
                this.replaceChildren(), this.setReady(!1)
            }
            loadProducts() {
                if (this.lastRequestedUrl !== this.dataset.url && (this.lastRequestedUrl = this.dataset.url, this.dataset.url)) return this.showPreloader(), fetch(this.dataset.url).then(t => t.text()).then(t => {
                    this.hidePreloader();
                    let i = el(t),
                        s = i.querySelector('[data-sidebar-template="CartDrawer"]'),
                        a = er(s);
                    this.updateByHTML(a)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in cart drawer related products", "warning")
                })
            }
            setReady(t) {
                this.toggleAttribute("is-ready", t)
            }
            showPreloader() {
                let t = this.querySelector(".loading-overlay");
                et(t)
            }
            hidePreloader() {
                let t = this.querySelector(".loading-overlay");
                ei(t)
            }
            constructor(...t) {
                super(...t), this.updateByHTML = t => {
                    let i = t.querySelector(`#${this.id}`);
                    if (!i) return;
                    let s = i ?.cloneNode(!0);
                    this.replaceChildren(...s ?.childNodes); // const products = this.querySelectorAll('vertical-product-card')
                    let a = this.querySelectorAll("[in-cart-related-product]");
                    this.setReady(a.length > 0)
                }
            }
        },
        sL = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-drawer-items-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sx = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-drawer-in-cart-banner-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sI = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.relatedProducts = this.querySelector("[data-cart-drawer-related-products]"), this.cartDrawer = this.closest("cart-drawer"), this.isAutoRecommendations = this.hasAttribute("is-auto-recommendations")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            checkHasAsideProducts() {
                let t = this.hasAttribute("is-aside-related-products");
                if (t) {
                    let t = document.querySelectorAll("[is-aside-related-products] vertical-product-card"),
                        i = t ?.length > 0,
                        s = document.querySelector("cart-drawer");
                    s && s.toggleAttribute("has-aside-products", i)
                }
            }
            updateByNode(t) {
                if (!this.relatedProducts) return;
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-drawer-related-products-block[block-id="${i}"] [data-cart-drawer-related-products]`);
                if (s) {
                    if (this.isAutoRecommendations) {
                        let t = s.getAttribute("data-url");
                        this.relatedProducts.setAttribute("data-url", t), t ? this.relatedProducts.loadProducts() : (this.relatedProducts.erase(), // hideElement(this)
                            this.checkHasAsideProducts())
                    } else {
                        let t = s.cloneNode(!0);
                        this.relatedProducts.replaceChildren(...t.childNodes), this.checkHasAsideProducts()
                    }
                }
            }
        },
        sA = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-drawer-timer-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sD = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate)
            }
            updateByNode(t) {
                let i = t.querySelector("cart-drawer-header");
                if (!i) return;
                let s = i.cloneNode(!0);
                this.replaceChildren(...s.childNodes)
            }
        },
        sM = class extends L {
            constructor() {
                super(), this.handleCartDrawerFinishUpdate = ({
                        node: t
                    }) => {
                        this.updateByNode(t)
                    }, // this.swipeAreaSelector = 'data-swipe-area'
                    // this.swipeBarSelector = 'data-swipe-area-bar'
                    // this.expandableElementSelector = 'data-cart-drawer-expandable-element'
                    this.cartDrawer = this.closest("cart-drawer"); // this.swipeArea = this.querySelector(`[${this.swipeAreaSelector}]`)
                // this.swipeAreaBar = this.querySelector(`[${this.swipeBarSelector}]`)
                // this.isExpanded = true
                // this.expandableElements = [
                //   ...this.querySelectorAll(`[${this.expandableElementSelector}]`),
                // ] as HTMLElement[]
                // this.isMobile = checkMobileVersion()
                // this.resizeObserver = new ResizeObserver(this.handleResize)
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartDrawerFinishUpdate); // this.init()
                // this.swipeArea.addEventListener('touchstart', this.handleTouchStart)
                // this.swipeArea.addEventListener('touchend', this.handleTouchEnd)
                // this.swipeAreaBar.addEventListener('click', this.handleBarClick)
                // this.resizeObserver.observe(this.cartDrawer)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartDrawerFinishUpdate); // this.swipeArea.removeEventListener('touchstart', this.handleTouchStart)
                // this.swipeArea.removeEventListener('touchend', this.handleTouchEnd)
                // this.swipeAreaBar.removeEventListener('click', this.handleBarClick)
            }
            updateByNode(t) {
                let i = t.querySelector("cart-drawer-footer");
                if (!i) return;
                let s = i.cloneNode(!0);
                this.replaceChildren(...s.childNodes)
            }
        },
        sB = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-items-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes), this.scrollIntoView({
                    behavior: "smooth"
                })
            }
        },
        sP = class extends L {
            constructor() {
                super(), this.handleStartCartUpdate = () => {
                    this.setLoading(!0)
                }, this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t), this.setLoading(!1)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && (this.cart.subscribe("start-update", this.handleStartCartUpdate), this.cart.subscribe("update-nodes", this.handleFinishCartUpdate))
            }
            disconnectedCallback() {
                this.cart && (this.cart.unsubscribe("start-update", this.handleStartCartUpdate), this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate))
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-buttons-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
            setLoading(t) {
                let i = this.querySelector("[data-cart-page-checkout-button]");
                i && (i.toggleAttribute("disabled", t), i.classList.toggle("loading", t))
            }
        },
        sq = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-countdown-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sO = class extends L {
            constructor() {
                super(), this.handleCartFinishUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.relatedProducts = this.querySelector("[data-cart-related-products]"), this.cart = this.closest("cart-page"), this.isAutoRecommendations = this.hasAttribute("is-auto-recommendations")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleCartFinishUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleCartFinishUpdate)
            }
            updateByNode(t) {
                if (!this.relatedProducts) return;
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-related-products-block[block-id="${i}"] [data-cart-related-products]`);
                if (s) {
                    if (this.isAutoRecommendations) {
                        let t = s.getAttribute("data-url");
                        this.relatedProducts.setAttribute("data-url", t), t ? (this.relatedProducts.loadProducts(), et(this)) : (this.relatedProducts.erase(), ei(this))
                    } else {
                        let t = s.cloneNode(!0);
                        this.relatedProducts.replaceChildren(...t.childNodes)
                    }
                }
            }
        },
        sR = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-order-notes-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sF = class extends L {
            constructor() {
                super(), this.handleTextareaBlur = t => {
                    let {
                        value: i
                    } = t.target;
                    i && (localStorage.setItem(this.localStorageSelector, i), this.currentValue = i)
                }, this.setValueFromLS = () => {
                    this.valueFromLS = localStorage.getItem(this.localStorageSelector), this.valueFromLS !== this.currentValue && (this.textarea.value = this.valueFromLS, this.currentValue = this.valueFromLS)
                }, this.handleBetweenTabsUpdate = t => {
                    t.key === this.localStorageSelector && this.setValueFromLS()
                }, this.handleCartStatusUpdate = () => {
                    this.clearValueFromLS()
                }, this.clearValueFromLS = () => {
                    localStorage.removeItem(this.localStorageSelector), this.currentValue = void 0
                }, this.textareaAttribute = "data-cart-note-textarea", this.localStorageSelector = "cartNote", this.cartSelector = "cart-page", this.cartDrawerSelector = "cart-drawer", this.cart = this.closest(this.cartSelector), this.cartDrawer = this.closest(this.cartDrawerSelector), this.textarea = this.querySelector(`[${this.textareaAttribute}]`), this.currentValue = this.textarea ?.value
            }
            connectedCallback() {
                this.setValueFromLS(), this.textarea ?.addEventListener("blur", this.handleTextareaBlur), window.addEventListener("storage", this.handleBetweenTabsUpdate), customElements.whenDefined(this.cartSelector).then(() => this.cart ?.subscribe("cartIsEmpty", this.handleCartStatusUpdate)).catch(t => {
                    console.log(t)
                }), customElements.whenDefined(this.cartDrawerSelector).then(() => this.cartDrawer ?.subscribe("cartIsEmpty", this.handleCartStatusUpdate)).catch(t => {
                    console.log(t)
                })
            }
            disconnectedCallback() {
                this.textarea ?.removeEventListener("blur", this.handleTextareaBlur), window.removeEventListener("storage", this.handleBetweenTabsUpdate), this.cart ?.unsubscribe("cartIsEmpty", this.handleCartStatusUpdate), this.cartDrawer ?.unsubscribe("cartIsEmpty", this.handleCartStatusUpdate)
            }
        },
        sN = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-app-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sV = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-in-cart-banner-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        sz = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.getAttribute("block-id"),
                    s = t.querySelector(`cart-subtotal-block[block-id="${i}"]`);
                if (!s) return;
                let a = s.cloneNode(!0);
                this.replaceChildren(...a.childNodes)
            }
        },
        s_ = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = this.closest("cart-page")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = this.querySelector("free-shipping-bar"),
                    s = t.querySelector("free-shipping-bar");
                if (!i || !s) return;
                let a = s.getAttribute("data-free-shipping-difference") || "",
                    r = +(s.getAttribute("data-free-shipping-difference-percent") || 0);
                i.updateProgressByDifference(a, r)
            }
        },
        s$ = class extends L {
            constructor() {
                super(), this.handleFinishCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cart = document.querySelector("cart-page"), this.cartDrawer = document.querySelector("cart-drawer")
            }
            connectedCallback() {
                this.cart && this.cart.subscribe("update-nodes", this.handleFinishCartUpdate), this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleFinishCartUpdate)
            }
            disconnectedCallback() {
                this.cart && this.cart.unsubscribe("update-nodes", this.handleFinishCartUpdate), this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleFinishCartUpdate)
            }
            updateByNode(t) {
                let i = t.querySelector("#NewCartCount");
                if (!i) return;
                let s = i.cloneNode(!0);
                this.replaceChildren(...s.childNodes)
            }
        },
        sH = class extends L {
            constructor() {
                super(), this.handleCartUpdate = ({
                    node: t
                }) => {
                    this.updateByNode(t)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && this.cartDrawer.subscribe("update-nodes", this.handleCartUpdate)
            }
            disconnectedCallback() {
                this.cartDrawer && this.cartDrawer.unsubscribe("update-nodes", this.handleCartUpdate)
            }
            updateByNode(t) {
                let i = this.querySelector("free-shipping-bar"),
                    s = t.querySelector("free-shipping-bar");
                if (!i || !s) return;
                let a = s.getAttribute("data-free-shipping-difference") || "",
                    r = +(s.getAttribute("data-free-shipping-difference-percent") || 0);
                i.updateProgressByDifference(a, r)
            }
        },
        sU = class extends L {
            constructor() {
                super(), this.handleStartCartUpdate = () => {
                    this.setLoading(!0)
                }, this.handleFinishCartUpdate = () => {
                    this.setLoading(!1)
                }, this.cartDrawer = this.closest("cart-drawer")
            }
            connectedCallback() {
                this.cartDrawer && (this.cartDrawer.subscribe("start-update", this.handleStartCartUpdate), this.cartDrawer.subscribe("update-nodes", this.handleFinishCartUpdate))
            }
            disconnectedCallback() {
                this.cartDrawer && (this.cartDrawer.unsubscribe("start-update", this.handleStartCartUpdate), this.cartDrawer.unsubscribe("update-nodes", this.handleFinishCartUpdate))
            }
            setLoading(t) {
                let i = this.querySelector("[data-cart-checkout-button]");
                i && (i.toggleAttribute("disabled", t), i.classList.toggle("loading", t))
            }
        },
        sW = class extends L {
            connectedCallback() {
                this.loadProducts()
            }
            erase() {
                this.replaceChildren(), this.setReady(!1)
            }
            loadProducts() {
                if (this.lastRequestedUrl !== this.dataset.url && (this.lastRequestedUrl = this.dataset.url, this.dataset.url)) return this.showPreloader(), fetch(this.dataset.url).then(t => t.text()).then(t => {
                    this.hidePreloader();
                    let i = el(t);
                    this.updateByHTML(i)
                }).catch(() => {
                    ta.notification && ta.notification.show("Error in cart related products", "warning")
                })
            }
            setReady(t) {
                this.toggleAttribute("is-ready", t)
            }
            showPreloader() {
                let t = this.querySelector(".loading-overlay");
                et(t)
            }
            hidePreloader() {
                let t = this.querySelector(".loading-overlay");
                ei(t)
            }
            constructor(...t) {
                super(...t), this.updateByHTML = t => {
                    let i = t.querySelector(`#${this.id}`);
                    if (i) {
                        let t = i.cloneNode(!0);
                        this.replaceChildren(...t.childNodes)
                    }
                    let s = this.querySelectorAll("vertical-product-card");
                    this.setReady(s.length > 0)
                }
            }
        },
        sK = class extends L {
            constructor() {
                super(), this.customTemplate = this.querySelector("[data-share-custom-template]"), this.systemDefaultTemplate = this.querySelector("[data-share-system-default-template]")
            }
            connectedCallback() {
                this.init()
            }
            init() {
                let t = navigator.share ? this.systemDefaultTemplate : this.customTemplate,
                    i = ea(t);
                this.appendChild(i)
            }
        },
        sY = class extends L {
            constructor() {
                super(), this.calcHeight = () => {
                    let t;
                    this.paddings = parseInt(this.styles.paddingTop) + parseInt(this.styles.paddingBottom);
                    let i = this.querySelectorAll(this.lineSelector),
                        s = i[0].getBoundingClientRect();
                    if (i.length > 1) {
                        let a = [],
                            r = [],
                            n = i[i.length - 1].getBoundingClientRect();
                        a.push(s.top), a.push(n.top), r.push(s.bottom), r.push(n.bottom), t = r.sort((t, i) => i - t)[0] - a.sort((t, i) => t - i)[0]
                    } else t = s.height;
                    return t
                }, this.setHeight = () => {
                    let t = this.calcHeight();
                    this.style.setProperty("--gsc-section-height", `${t}px`)
                }, this.handleResize = io(() => {
                    this.setHeight()
                }, 100), this.containerSelector = "[data-scrolling-text-container]", this.lineSelector = "scrolling-text-line", this.container = this.querySelector(this.containerSelector), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.container), this.styles = getComputedStyle(this.container)
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
        },
        sX = class extends L {
            constructor() {
                super(), this.getDimentions = () => {
                    let t = this.querySelector(this.announcementSelector);
                    if (!t) return;
                    let i = document.body.clientWidth,
                        s = t.clientWidth;
                    return this.initialScreenWidth = i, {
                        screenWidth: i,
                        announcementWidth: s
                    }
                }, this.calcQuantityToRender = (t, i) => {
                    let s = Math.round(t * this.screenSizeMultiply / i);
                    return s % 2 == 0 ? s : s + 1
                }, this.renderNodes = t => {
                    let i = this.querySelector(this.announcementSelector);
                    if (!i) return;
                    let s = this.isWithFontMixed ? this.getFragmentWithMixedFont(t, i) : this.getFragment(t, i);
                    i.classList.add(this.animationClass), this.replaceChildren(s)
                }, this.getFragment = (t, i) => {
                    let s = document.createDocumentFragment();
                    for (let a = 0; a < t; a++) {
                        let t = i.cloneNode(!0);
                        t.classList.add(this.animationClass), this.isWithFontMixed && a % 2 == 0 && t.classList.add(this.fontOutlineClass), s.appendChild(t)
                    }
                    return s
                }, this.getFragmentWithMixedFont = (t, i) => {
                    let s = document.createDocumentFragment();
                    for (let a = 0; a < t - 1; a++) {
                        let t = i.cloneNode(!0),
                            a = i.cloneNode(!0),
                            r = document.createElement("div");
                        t.classList.add(this.fontOutlineClass), r.appendChild(t), r.appendChild(a), r.classList.add(this.animationClass), s.appendChild(r)
                    }
                    return s
                }, this.handleResize = io(() => {
                    let t = document.body.clientWidth;
                    t > this.initialScreenWidth && this.render(), this.setAttribute("data-is-rendered", "true")
                }, 100), this.render = () => {
                    let {
                        screenWidth: t,
                        announcementWidth: i
                    } = this.getDimentions(), s = this.calcQuantityToRender(t, i);
                    this.renderNodes(s)
                }, this.initialScreenWidth = 0, this.screenSizeMultiply = 2, this.announcementSelector = "[data-scrolling-text-line]", this.animationClass = "scrolling-text--animated", this.fontMixedAttribute = "with-font-mixed", this.fontOutlineClass = "scrolling-text__text--font-outline", this.isWithFontMixed = this.hasAttribute(this.fontMixedAttribute), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(document.body)
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
        },
        sj = class extends L {
            constructor() {
                super(), this.handleContentResize = () => {
                    this.update()
                }, this.visibleTags = this.querySelector("[data-visible-tags]"), this.hiddenTags = this.querySelector("[data-collapsed-tags]"), this.tags = [...this.querySelectorAll("[data-tag]")], this.extendButton = this.querySelector("[data-extend-button]"), this.resizeObserver = new ResizeObserver(this.handleContentResize), this.resizeObserver.observe(this)
            }
            connectedCallback() {
                this.initOffsets(), this.update()
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
            updateButtonVisible() {
                if (!this.extendButton) return;
                let t = this.querySelectorAll("[tag-hidden]"),
                    i = t.length > 0;
                this.extendButton.classList.toggle("hidden", !i), this.toggleAttribute("data-is-collapsed", !i)
            }
            initOffsets() {
                this.tags.forEach(t => {
                    t.style.left = `${t.offsetLeft}px`, t.style.top = `${t.offsetTop}px`
                })
            }
            updateTagsVisible() {
                let t = document.createDocumentFragment(),
                    i = this.extendButton ?.offsetWidth || 0,
                    s = this.tags.filter(t => !t.hasAttribute("tag-hidden")),
                    a = s[s.length - 1];
                this.tags.forEach(s => {
                    let r = s.offsetLeft + s.offsetWidth,
                        n = this.offsetWidth - i - a.offsetWidth,
                        o = r > n;
                    if (o) {
                        let i = s.cloneNode(!0);
                        this.setTagVisible(i, !0), t.appendChild(i)
                    }
                    this.setTagVisible(s, !o)
                }), this.hiddenTags ?.element.replaceChildren(t)
            }
            setTagVisible(t, i) {
                t.toggleAttribute("tag-hidden", !i)
            }
            update() {
                this.updateTagsVisible(), this.updateButtonVisible()
            }
        },
        sG = class extends L {
            constructor() {
                super(), this.handleContentResize = () => {
                    this.update()
                }, this.visibleTags = this.querySelector("[data-visible-tags]"), this.hiddenTags = this.querySelector("[data-collapsed-tags]"), this.tags = [...this.querySelectorAll("[data-tag]")], this.extendButton = this.querySelector("[data-extend-button]"), this.resizeObserver = new ResizeObserver(this.handleContentResize), this.resizeObserver.observe(this)
            }
            connectedCallback() {
                document.fonts.ready.then(() => {
                    this.update()
                })
            }
            disconnectedCallback() {
                this.resizeObserver.disconnect()
            }
            updateTagsOffsets() {
                this.tags.forEach(t => {
                    t.style.left = `${t.offsetLeft}px`, t.style.top = `${t.offsetTop}px`
                })
            }
            updateExtendButton() {
                if (!this.extendButton) return;
                let t = this.querySelectorAll("[tag-hidden]"),
                    i = t.length > 0;
                this.extendButton.classList.toggle("hidden", !i)
            }
            updateCollapsedTags() {
                let t = document.createDocumentFragment();
                this.tags.forEach((i, s) => {
                    let a = this.tags[s + 1];
                    if (!a) return;
                    let r = a.offsetTop + a.offsetWidth,
                        n = this.offsetHeight - i.offsetHeight,
                        o = r > n;
                    if (o) {
                        let s = i.cloneNode(!0);
                        this.setTagVisible(s, !0), t.appendChild(s)
                    }
                    this.setTagVisible(i, !o)
                }), this.hiddenTags ?.element.replaceChildren(t)
            }
            setTagVisible(t, i) {
                t.toggleAttribute("tag-hidden", !i)
            }
            update() {
                this.updateTagsOffsets(), this.updateCollapsedTags(), this.updateExtendButton()
            }
        };
    let sQ = "AuroraTheme-Popup",
        sZ = {
            lightboxActive: "popup--active",
            lightboxClosing: "popup--closing",
            success: "popup--success",
            showImage: "popup--show-image"
        };
    class sJ {
        constructor(t) {
            this._blockId = t
        }
        parseData(t) {
            if (!t) return null;
            try {
                let i = JSON.parse(t ?? "{}");
                return i
            } catch (t) {
                return null
            }
        }
        saveData(t) {
            try {
                localStorage.setItem(`${sQ}-${this._blockId}`, JSON.stringify(t))
            } catch (t) {}
        }
        loadData() {
            try {
                return this.parseData(localStorage.getItem(`${sQ}-${this._blockId}`))
            } catch (t) {
                return null
            }
        }
    }(s = o || (o = {})).AgeVerifier = "age", s.Promo = "promo", s.Signup = "signup";
    let s0 = (t, i) => {
            let s = /^\/(.+)\/([im]+)?$/.exec(t);
            if (s) return new RegExp(s[1], s[2] || i);
            let a = t.replace(/[\-\[\]\/{}()?.\\^$|]/g, "\\$&").replace(/\*/g, ".*?").replace(/\+/g, ".+?");
            return RegExp(`^${a}$`, i)
        },
        s1 = (t, i) => {
            try {
                let s = t.match(/rgba\([^()]*\)|#\w+/g);
                return s ?.forEach(s => {
                    let [a, r, n, o] = s.split("(")[1].split(")")[0].split(",").map(t => t.trim());
                    t = t.replace(s, `rgba(${a}, ${r}, ${n}, ${Math.round(100*(+o*+i))/100})`)
                }), t
            } catch (i) {
                return t
            }
        },
        s2 = t => {
            switch (t) {
                case "none":
                    return 0;
                case "3sec":
                    return 3e3;
                case "5sec":
                    return 5e3;
                case "30sec":
                    return 3e4;
                case "1min":
                    return 6e4;
                case "2min":
                    return 12e4
            }
        },
        s5 = t => {
            switch (t) {
                case "1h":
                    return 36e5;
                case "12h":
                    return 432e5;
                case "1d":
                    return 864e5;
                case "3d":
                    return 2592e5;
                case "1w":
                    return 6048e5;
                case "2w":
                    return 12096e5;
                default:
                    return 0
            }
        },
        s3 = t => t.toLowerCase().replace(/\s+/g, "");
    class s8 {
        constructor(t, i, s) {
            this._shouldShowOnThisPage = () => {
                if ("target" === this.pageCondition) {
                    let t = this.pages ?.split("\n").map(t => {
                        try {
                            return new URL(t)
                        } catch (t) {
                            return !1
                        }
                    }).filter(Boolean).map(t => t.pathname) ?? [];
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if (s0(s).test(window.location.pathname)) return !0
                    }
                    return !1
                }
                if ("tags" === this.pageCondition) {
                    let t = window.auroraProductTags;
                    return !!(t && Array.isArray(t)) && 0 !== t.length && t.map(s3).some(t => this.productTags.includes(t))
                }
                return !0
            }, this.run = () => {
                this._shouldShowOnThisPage() && ("once" !== this.frequency || !this.lastShowDate) && !("unlimited" !== this.frequency && this.lastShowDate && Date.now() - s5(this.frequency) < this.lastShowDate.getTime()) && (this.startDate = new Date, this.timerRef = window.setInterval(() => {
                    this._tick()
                }, 1e3), this._tick(), this.exitIntent && !tx() && document.addEventListener("mouseout", this._handleMouseLeave), this.pageScroll && (window.addEventListener("scroll", this._handleWindowScroll), this._handleWindowScroll()))
            }, this._tick = () => {
                if ("immediately" === this.whenShow) {
                    this._show();
                    return
                }
                this.timeDelay && Date.now() - s2(this.timeDelay) >= this.startDate.getTime() && this._show()
            }, this._handleWindowScroll = () => {
                let t = window.scrollY,
                    i = document.body.offsetHeight,
                    s = window.innerHeight,
                    a = Math.round(100 * (i === s ? 1 : t / (i - s)));
                a >= +this.pageScroll && this._show()
            }, this._handleMouseLeave = t => {
                t.toElement || t.relatedTarget || this._show()
            }, this._show = () => {
                this.showCallback(), this.cleanup()
            }, this.cleanup = () => {
                clearInterval(this.timerRef), this.pageScroll && window.removeEventListener("scroll", this._handleWindowScroll), this.exitIntent && !tx() && document.removeEventListener("mouseout", this._handleMouseLeave)
            }, this.showCallback = s, this.pageCondition = t.pageCondition ?? "all", this.whenShow = t.whenShow ?? "immediately", this.pages = t.pages, this.timeDelay = "none" === t.timeDelay ? null : t.timeDelay, this.pageScroll = "none" === t.pageScroll ? null : t.pageScroll, this.exitIntent = ("true" === t.exitIntent) ?? !1, this.frequency = t.frequency ?? "unlimited", this.productTags = (t.productTags || "").split(",").map(s3).filter(t => t.length > 0), this.lastShowDate = i
        }
    }
    var s9 = class extends L {
            constructor() {
                super(), this.handlePinEnter = () => {
                    this.setAnimationPausedState(!0)
                }, this.handlePinLeave = () => {
                    this.highlightedBlockId || this.setAnimationPausedState(!1)
                }, this.handleResize = io(() => {
                    this.showBlockById(this.highlightedBlockId)
                }, 500), this.handlePinClick = t => {
                    let i = t.target,
                        s = i.dataset.blockId;
                    this.showBlockById(s), window.addEventListener("click", this.handleOutsideClick)
                }, this.handleOutsideClick = t => {
                    let i = t.target.closest(this.pinSelector);
                    i || (this.showBlockById(), window.removeEventListener("click", this.handleOutsideClick))
                }, this.pinSelector = "[data-lookbook-pin]", this.blockSelector = "[data-lookbook-block]", this.modalSelector = "[data-lookbook-modal]", this.carouselSelector = "[data-lookbook-carousel]", this.desktopContentSelector = "[data-lookbook-desktop-content]", this.mobileContentSelector = "[data-lookbook-mobile-content]", this.animationPausedAttribute = "animation-paused", this.notHighlightedAttribute = "not-highlighted", this.desktopContent = this.querySelector(this.desktopContentSelector), this.mobileContent = this.querySelector(this.mobileContentSelector), this.pins = [...this.querySelectorAll(this.pinSelector)], this.resizeObserver = new ResizeObserver(this.handleResize)
            }
            connectedCallback() {
                this.pins.forEach(t => {
                    t.addEventListener("mouseenter", this.handlePinEnter), t.addEventListener("mouseleave", this.handlePinLeave), t.addEventListener("click", this.handlePinClick)
                }), this.resizeObserver.observe(this)
            }
            disconnectedCallback() {
                this.pins.forEach(t => {
                    t.removeEventListener("mouseenter", this.handlePinEnter), t.removeEventListener("mouseleave", this.handlePinLeave), t.removeEventListener("click", this.handlePinClick)
                }), this.resizeObserver.disconnect(), window.removeEventListener("click", this.handleOutsideClick)
            }
            showBlockById(t) {
                this.updateSelectedStateForPins(t), t ? (this.setHighlightBlockById(t), this.setAnimationPausedState(!0)) : (this.resetHighlight(), this.setAnimationPausedState(!1)), this.highlightedBlockId = t
            }
            updateSelectedStateForPins(t) {
                this.pins.forEach(i => {
                    let s = i.dataset.blockId === t;
                    i.toggleAttribute("is-selected", s)
                })
            }
            setAnimationPausedState(t) {
                this.toggleAttribute(this.animationPausedAttribute, t)
            }
            setHighlightBlockById(t) {
                this.blocks.forEach((i, s) => {
                    let a = i.dataset.blockId === t;
                    a && this.scrollToProductByIndex(s), i.toggleAttribute(this.notHighlightedAttribute, !a)
                })
            }
            scrollToProductByIndex(t) {
                let i = this.blocks[t],
                    s = i.closest(this.carouselSelector);
                s ? s.scrollToIndex(t) : i.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            resetHighlight() {
                this.blocks.forEach(t => {
                    t.removeAttribute(this.notHighlightedAttribute)
                })
            }
            get blocks() {
                let t = tx(),
                    i = t ? this.mobileContent : this.desktopContent,
                    s = i.querySelector(this.modalSelector),
                    a = s ? s.element : i,
                    r = [...a.querySelectorAll(this.blockSelector)];
                return r
            }
        },
        s6 = class extends tS {
            constructor() {
                super(), this.lookbookSelector = "lookbook-component", this.lookbook = this.closest(this.lookbookSelector)
            }
            async show() {
                if (await super.show(), !this.lookbook) return;
                let t = this.lookbook.highlightedBlockId;
                this.lookbook.showBlockById(t)
            }
        },
        s4 = class extends L {
            constructor() {
                super(), this.generateLocationsData = () => {
                    let t = this.stores.map(t => ({
                        coordinates: t.getAttribute(this.storeCoordinatesSelector),
                        id: t.getAttribute(this.storeIdSelector)
                    }));
                    return t
                }, this.handleMarkerClick = ({
                    markerId: t
                }) => {
                    let i = this.stores.find(i => i.dataset.blockId === t);
                    i ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    }), i ?.show(), this.toggleStoreVisibility(t)
                }, this.handleStoreClick = t => {
                    let i = t.currentTarget.getAttribute(this.storeIdSelector);
                    this.toggleStoreVisibility(i)
                }, this.toggleStoreVisibility = t => {
                    this.toggleStoreExpanded(t), this.toggleMarkerHighlighted(t)
                }, this.toggleStoreExpanded = t => {
                    this.stores.forEach(i => {
                        i.dataset.blockId !== t && i.isExpanded && i.hide()
                    })
                }, this.toggleMarkerHighlighted = t => {
                    let i = this.stores.find(t => t.isExpanded);
                    i ? this.map ?.highlightMarker(t) : this.map ?.highlightMarker(null)
                }, this.setDefaultImage = () => {
                    let t = this.querySelector(`[${this.defaultImageSelector}]`) ?.content;
                    this.map ?.replaceWith(t)
                }, this.handleMapError = () => {
                    this.setDefaultImage()
                }, this.mapSelector = "#map", this.storeElementSelector = "data-store", this.storeIdSelector = "data-block-id", this.storeNameSelector = "data-name", this.storeCoordinatesSelector = "data-coordinates", this.defaultImageSelector = "map-default-image", this.map = this.querySelector(this.mapSelector), this.stores = Array.from(this.querySelectorAll(`[${this.storeElementSelector}]`))
            }
            connectedCallback() {
                this.map && (this.map.locationsData = this.generateLocationsData(), this.map.initMap(), this.map.subscribe("markerClick", this.handleMarkerClick), this.map.subscribe("mapError", this.handleMapError)), this.stores.forEach(t => {
                    t.addEventListener("click", this.handleStoreClick)
                })
            }
            disconnectedCallback() {
                this.map && (this.map.unsubscribe("markerClick", this.handleMarkerClick), this.map.unsubscribe("mapError", this.handleMapError)), this.stores.forEach(t => {
                    t.removeEventListener("click", this.handleStoreClick)
                })
            }
        },
        s7 = function t(i, s) {
            if (i === s) return !0;
            if (i && s && "object" == typeof i && "object" == typeof s) {
                if (i.constructor !== s.constructor) return !1;
                if (Array.isArray(i)) {
                    if ((a = i.length) != s.length) return !1;
                    for (r = a; 0 != r--;)
                        if (!t(i[r], s[r])) return !1;
                    return !0
                }
                if (i.constructor === RegExp) return i.source === s.source && i.flags === s.flags;
                if (i.valueOf !== Object.prototype.valueOf) return i.valueOf() === s.valueOf();
                if (i.toString !== Object.prototype.toString) return i.toString() === s.toString();
                if ((a = (n = Object.keys(i)).length) !== Object.keys(s).length) return !1;
                for (r = a; 0 != r--;)
                    if (!Object.prototype.hasOwnProperty.call(s, n[r])) return !1;
                for (r = a; 0 != r--;) {
                    var a, r, n, o = n[r];
                    if (!t(i[o], s[o])) return !1
                }
                return !0
            } // true if both NaN, false otherwise
            return i != i && s != s
        };
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at.
     *
     *      Http://www.apache.org/licenses/LICENSE-2.0.
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    let ae = "__googleMapsScriptId";
    (a = l || (l = {}))[a.INITIALIZED = 0] = "INITIALIZED", a[a.LOADING = 1] = "LOADING", a[a.SUCCESS = 2] = "SUCCESS", a[a.FAILURE = 3] = "FAILURE";
    /**
     * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
     * dynamically using
     * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * It works by dynamically creating and appending a script node to the the
     * document head and wrapping the callback function so as to return a promise.
     *
     * ```
     * const loader = new Loader({
     *   apiKey: "",
     *   version: "weekly",
     *   libraries: ["places"]
     * });
     *
     * loader.load().then((google) => {
     *   const map = new google.maps.Map(...)
     * })
     * ```
     */
    class at {
        /**
         * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
         * using this library, instead the defaults are set by the Google Maps
         * JavaScript API server.
         *
         * ```
         * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
         * ```
         */
        constructor({
            apiKey: t,
            authReferrerPolicy: i,
            channel: s,
            client: a,
            id: r = ae,
            language: n,
            libraries: o = [],
            mapIds: l,
            nonce: h,
            region: c,
            retries: d = 3,
            url: u = "https://maps.googleapis.com/maps/api/js",
            version: p
        }) {
            if (this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = t, this.authReferrerPolicy = i, this.channel = s, this.client = a, this.id = r || ae, this.language = n, this.libraries = o, this.mapIds = l, this.nonce = h, this.region = c, this.retries = d, this.url = u, this.version = p, at.instance) {
                if (!s7(this.options, at.instance.options)) throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(at.instance.options)}`);
                return at.instance
            }
            at.instance = this
        }
        get options() {
            return {
                version: this.version,
                apiKey: this.apiKey,
                channel: this.channel,
                client: this.client,
                id: this.id,
                libraries: this.libraries,
                language: this.language,
                region: this.region,
                mapIds: this.mapIds,
                nonce: this.nonce,
                url: this.url,
                authReferrerPolicy: this.authReferrerPolicy
            }
        }
        get status() {
            return this.errors.length ? l.FAILURE : this.done ? l.SUCCESS : this.loading ? l.LOADING : l.INITIALIZED
        }
        get failed() {
            return this.done && !this.loading && this.errors.length >= this.retries + 1
        }
        /**
         * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
         *
         * @ignore
         * @deprecated
         */
        createUrl() {
            let t = this.url;
            return t += "?callback=__googleMapsCallback", this.apiKey && (t += `&key=${this.apiKey}`), this.channel && (t += `&channel=${this.channel}`), this.client && (t += `&client=${this.client}`), this.libraries.length > 0 && (t += `&libraries=${this.libraries.join(",")}`), this.language && (t += `&language=${this.language}`), this.region && (t += `&region=${this.region}`), this.version && (t += `&v=${this.version}`), this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (t += `&auth_referrer_policy=${this.authReferrerPolicy}`), t
        }
        deleteScript() {
            let t = document.getElementById(this.id);
            t && t.remove()
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         * @deprecated, use importLibrary() instead.
         */
        load() {
            return this.loadPromise()
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         *
         * @ignore
         * @deprecated, use importLibrary() instead.
         */
        loadPromise() {
            return new Promise((t, i) => {
                this.loadCallback(s => {
                    s ? i(s.error) : t(window.google)
                })
            })
        }
        importLibrary(t) {
            return this.execute(), google.maps.importLibrary(t)
        }
        /**
         * Load the Google Maps JavaScript API script with a callback.
         * @deprecated, use importLibrary() instead.
         */
        loadCallback(t) {
            this.callbacks.push(t), this.execute()
        }
        /**
         * Set the script on document.
         */
        setScript() {
            var t, i;
            if (document.getElementById(this.id)) { // TODO wrap onerror callback for cases where the script was loaded elsewhere
                this.callback();
                return
            }
            let s = {
                key: this.apiKey,
                channel: this.channel,
                client: this.client,
                libraries: this.libraries.length && this.libraries,
                v: this.version,
                mapIds: this.mapIds,
                language: this.language,
                region: this.region,
                authReferrerPolicy: this.authReferrerPolicy
            }; // keep the URL minimal:
            Object.keys(s).forEach(t => !s[t] && delete s[t]), (null === (i = null === (t = null == window ? void 0 : window.google) || void 0 === t ? void 0 : t.maps) || void 0 === i ? void 0 : i.importLibrary) || // which also sets the base url, the id, and the nonce
                /* eslint-disable */
                (t => { // @ts-ignore
                    let i, s, a, r = "The Google Maps JavaScript API",
                        n = "google",
                        o = "importLibrary",
                        l = "__ib__",
                        h = document,
                        c = window; // @ts-ignore
                    c = c[n] || (c[n] = {}); // @ts-ignore
                    let d = c.maps || (c.maps = {}),
                        u = new Set,
                        p = new URLSearchParams,
                        m = () => i || (i = new Promise((o, c) => {
                            var m, g, f, b;
                            return m = this, g = void 0, f = void 0, b = function*() {
                                var m; // @ts-ignore
                                for (a in yield s = h.createElement("script"), s.id = this.id, p.set("libraries", [...u] + ""), t) p.set(a.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), t[a]);
                                p.set("callback", n + ".maps." + l), s.src = this.url + "?" + p, d[l] = o, s.onerror = () => i = c(Error(r + " could not load.")), // @ts-ignore
                                    s.nonce = this.nonce || (null === (m = h.querySelector("script[nonce]")) || void 0 === m ? void 0 : m.nonce) || "", h.head.append(s)
                            }, new(f || (f = Promise))(function(t, i) {
                                function s(t) {
                                    try {
                                        r(b.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function a(t) {
                                    try {
                                        r(b.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function r(i) {
                                    var r;
                                    i.done ? t(i.value) : ((r = i.value) instanceof f ? r : new f(function(t) {
                                        t(r)
                                    })).then(s, a)
                                }
                                r((b = b.apply(m, g || [])).next())
                            })
                        })); // @ts-ignore
                    d[o] ? console.warn(r + " only loads once. Ignoring:", t) : d[o] = (t, ...i) => u.add(t) && m().then(() => d[o](t, ...i))
                })(s); // While most libraries populate the global namespace when loaded via bootstrap params,
            // this is not the case for "marker" when used with the inline bootstrap loader
            // (and maybe others in the future). So ensure there is an importLibrary for each:
            let a = this.libraries.map(t => this.importLibrary(t));
            a.length || a.push(this.importLibrary("core")), Promise.all(a).then(() => this.callback(), t => {
                let i = new ErrorEvent("error", {
                    error: t
                }); // for backwards compat
                this.loadErrorCallback(i)
            })
        }
        /**
         * Reset the loader state.
         */
        reset() {
            this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null
        }
        resetIfRetryingFailed() {
            this.failed && this.reset()
        }
        loadErrorCallback(t) {
            if (this.errors.push(t), this.errors.length <= this.retries) {
                let t = this.errors.length * Math.pow(2, this.errors.length);
                console.error(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
                    this.deleteScript(), this.setScript()
                }, t)
            } else this.onerrorEvent = t, this.callback()
        }
        callback() {
            this.done = !0, this.loading = !1, this.callbacks.forEach(t => {
                t(this.onerrorEvent)
            }), this.callbacks = []
        }
        execute() {
            if (this.resetIfRetryingFailed(), this.done) this.callback();
            else { // short circuit and warn if google.maps is already loaded
                if (window.google && window.google.maps && window.google.maps.version) {
                    console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), this.callback();
                    return
                }
                this.loading || (this.loading = !0, this.setScript())
            }
        }
    }
    let ai = {
        silver: [{
            elementType: "geometry",
            stylers: [{
                color: "#f5f5f5"
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#f5f5f5"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#bdbdbd"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#e5e5e5"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#ffffff"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#dadada"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161"
            }]
        }, {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e"
            }]
        }, {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{
                color: "#e5e5e5"
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#c9c9c9"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e"
            }]
        }],
        retro: [{
            elementType: "geometry",
            stylers: [{
                color: "#ebe3cd"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#523735"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#f5f1e6"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#c9b2a6"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#dcd2be"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#ae9e90"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{
                color: "#dfd2ae"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#dfd2ae"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#93817c"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{
                color: "#a5b076"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#447530"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#f5f1e6"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#fdfcf8"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#f8c967"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#e9bc62"
            }]
        }, {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{
                color: "#e98d58"
            }]
        }, {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#db8555"
            }]
        }, {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#806b63"
            }]
        }, {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{
                color: "#dfd2ae"
            }]
        }, {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#8f7d77"
            }]
        }, {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#ebe3cd"
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{
                color: "#dfd2ae"
            }]
        }, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{
                color: "#b9d3c2"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#92998d"
            }]
        }],
        dark: [{
            elementType: "geometry",
            stylers: [{
                color: "#212121"
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#212121"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{
                color: "#757575"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e"
            }]
        }, {
            featureType: "administrative.land_parcel",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#bdbdbd"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#181818"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1b1b1b"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                color: "#2c2c2c"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#8a8a8a"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#373737"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#3c3c3c"
            }]
        }, {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{
                color: "#4e4e4e"
            }]
        }, {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#3d3d3d"
            }]
        }],
        night: [{
            elementType: "geometry",
            stylers: [{
                color: "#242f3e"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#746855"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#242f3e"
            }]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#263c3f"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#6b9a76"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#38414e"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#212a37"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9ca5b3"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#746855"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#1f2835"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#f3d19c"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#2f3948"
            }]
        }, {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#17263c"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#515c6d"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#17263c"
            }]
        }],
        aubergine: [{
            elementType: "geometry",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#8ec3b9"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1a3646"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#4b6878"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#64779e"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#4b6878"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#334e87"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{
                color: "#023e58"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#283d6a"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#6f9ba5"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{
                color: "#023e58"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#3C7680"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#304a7d"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#98a5be"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#2c6675"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#255763"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#b0d5ce"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#023e58"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#98a5be"
            }]
        }, {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#1d2c4d"
            }]
        }, {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [{
                color: "#283d6a"
            }]
        }, {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{
                color: "#3a4762"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#0e1626"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#4e6d70"
            }]
        }]
    };
    var as = class extends L {
            constructor() {
                super(), this.initMap = async () => {
                    try {
                        await new at({
                            apiKey: this.api_key,
                            version: "weekly"
                        }).load(), this.locations = this.generateMapLocations(), this.calcMapCenter(), this.setMap(), this.setMarkers()
                    } catch (t) {
                        this.handleErrors(t)
                    }
                }, this.generateMapLocations = () => {
                    let t = [];
                    for (let i of this.locationsData) {
                        let {
                            id: s,
                            coordinates: a
                        } = i, r = this.generateCoordinatesFromString(a);
                        r && t.push({
                            id: s,
                            location: r
                        })
                    }
                    return t
                }, this.setMap = () => {
                    let t = new google.maps.Map(this, {
                        zoom: this.locations.length > 0 ? this.zoom : 0,
                        center: this.center,
                        styles: this.mapCustomStyle ?? ai[this.mapStyle]
                    });
                    this.map = t
                }, this.setMarkers = () => {
                    0 !== this.locations.length && this.locations.map(t => {
                        let i = new google.maps.Marker({
                            map: this.map,
                            position: t.location,
                            id: t.id
                        });
                        this.locations.length > 1 && i.addListener("click", i => {
                            this.emit("markerClick", {
                                markerId: t.id
                            })
                        }), this.markers.push(i)
                    })
                }, this.generateCoordinatesFromString = t => {
                    let i = t.split(","),
                        s = +i[0],
                        a = +i[1];
                    if (s && a) return {
                        lat: s,
                        lng: a
                    }
                }, this.toJSON = t => {
                    try {
                        let i = JSON.parse(t);
                        return i
                    } catch (t) {
                        return null
                    }
                }, this.handleErrors = t => {
                    console.log(t), this.emit("mapError", {})
                }, this.styleAttribute = "data-map-style", this.customStyleAttribute = "data-map-custom-style", this.zoomAttribute = "data-map-zoom", this.defaultZoom = 10, this.api_key = this.dataset.key, this.locationsData = [], this.locations = [], this.center = {
                    lat: 0,
                    lng: 0
                }, this.markers = [], this.mapStyle = this.getAttribute(this.styleAttribute), this.mapCustomStyle = this.toJSON(this.getAttribute(this.customStyleAttribute)), this.zoom = +this.getAttribute(this.zoomAttribute) || this.defaultZoom
            }
            async connectedCallback() {
                window.gm_authFailure = this.handleErrors, this.locationsData.length > 0 && await this.initMap()
            }
            disconnectedCallback() {
                window.gm_authFailure = null
            }
            calcMapCenter() {
                let t = this.locations.length;
                if (t > 0) {
                    let i = {
                        lat: 0,
                        lng: 0
                    };
                    this.locations.forEach(t => {
                        i.lat = i.lat + t.location.lat, i.lng = i.lng + t.location.lng
                    }), i.lat = i.lat / t, i.lng = i.lng / t, this.center = i
                }
            }
            highlightMarker(t) {
                this.markers.forEach(i => {
                    if (!t) {
                        i.setOpacity(1);
                        return
                    }
                    i.id === t ? i.setOpacity(1) : i.setOpacity(.5)
                })
            }
        },
        aa = class extends L {
            constructor() {
                super(), this.handleVariantChange = ({
                    variant: t,
                    optionChanged: i
                }) => {
                    if (i !== this.optionToTrack) return;
                    let s = t[this.optionPosition].toLowerCase();
                    this.setImages(s), this.variantPicker.updateFirstMediaByVariant(t), this.modal && this.setModal(s), this.currentVariant = t
                }, this.setImages = t => {
                    let i = this.templates.find(i => i.dataset.templateForOption === t) ?.content.querySelectorAll(`[${this.imagesContainerAttribute}]`);
                    this.containers.forEach((t, s) => {
                        let a = i[s].cloneNode(!0);
                        t.replaceWith(a)
                    }), this.containers = this.querySelectorAll(`[${this.imagesContainerAttribute}]`), this.carousels = [...this.querySelectorAll("carousel-component, carousel-dots")]
                }, this.setModal = t => {
                    let i = this.modalTemplates.find(i => i.dataset.templateForModalOption === t) ?.content.firstElementChild,
                        s = i ?.cloneNode(!0);
                    this.modal ?.replaceWith(s), this.modal = this.querySelector(this.modalSelector) ?? document.querySelector(this.modalSelector)
                }, this.reInitCarousels = () => {
                    this.carousels.filter(t => t.clientWidth > 0).forEach(t => {
                        t.reInit()
                    })
                }, this.handleResize = () => {
                    let t = tx();
                    t !== this.initialView && (this.handleVariantChange({
                        variant: this.currentVariant,
                        optionChanged: this.optionToTrack
                    }), this.reInitCarousels(), this.initialView = t)
                }, this.templateImagesAttribute = "data-template-for-option", this.templateModalAttribute = "data-template-for-modal-option", this.imagesContainerAttribute = "data-product-media-container", this.modalSelector = "product-modal", this.variantPicker = this.querySelector("variant-picker"), this.optionToTrack = this.getAttribute("data-option-to-track"), this.optionPosition = this.getAttribute("data-option-position"), this.templates = [...this.querySelectorAll(`[${this.templateImagesAttribute}]`)], this.modalTemplates = [...this.querySelectorAll(`[${this.templateModalAttribute}]`)], this.containers = this.querySelectorAll(`[${this.imagesContainerAttribute}]`), this.modal = this.querySelector(this.modalSelector) ?? document.querySelector(this.modalSelector), this.carousels = [...this.querySelectorAll("carousel-component, carousel-dots")], this.initialView = tx(), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this)
            }
            connectedCallback() {
                customElements.whenDefined("variant-picker").then(() => {
                    this.handleVariantChange({
                        variant: this.variantPicker.variant,
                        optionChanged: this.optionToTrack
                    }), this.variantPicker.subscribe("variantChange", this.handleVariantChange), this.currentVariant = this.variantPicker.variant
                }).catch(t => {
                    console.log(t)
                })
            }
            disconnectedCallback() {
                this.variantPicker.unsubscribe("variantChange", this.handleVariantChange)
            }
        };
    let ar = [{
        tag: "login-component",
        component: x
    }, {
        tag: "register-component",
        component: class extends L {
            constructor() {
                super(), this.formAttribute = "[data-register-form]", this.form = this.querySelector(this.formAttribute)
            }
            connectedCallback() {
                this.form ?.addEventListener("submit", this.handleSubmit)
            }
            disconnectedCallback() {
                this.form ?.removeEventListener("submit", this.handleSubmit)
            }
            handleSubmit() {
                localStorage.setItem("isRegistered", "true")
            }
        }
    }, {
        tag: "back-to-top-button",
        component: I
    }, {
        tag: "sticky-cart-button",
        component: A
    }, {
        tag: "quantity-component",
        component: Z
    }, {
        tag: "quantity-btn",
        component: J
    }, {
        tag: "localization-selector",
        component: class extends L {
            constructor() {
                super(), this.handleClick = t => {
                    t.preventDefault();
                    let i = t.target;
                    i.hasAttribute("data-localization-item") && this.input && this.form && i.dataset.value && (this.input.value = i.dataset.value, this.form.submit())
                }, this.inputSelector = "[data-localization-input]", this.formSelector = "form", this.input = this.querySelector(this.inputSelector), this.form = this.querySelector(this.formSelector)
            }
            connectedCallback() {
                this.addEventListener("click", this.handleClick)
            }
            disconnectedCallback() {
                this.removeEventListener("click", this.handleClick)
            }
        }
    }, {
        tag: "notification-component",
        component: ee
    }, {
        tag: "tabs-component",
        component: eh
    }, {
        tag: "tab-component",
        component: sd
    }, {
        tag: "list-component",
        component: ec
    }, {
        tag: "list-btn",
        component: ed
    }, {
        tag: "float-element",
        component: tr
    }, {
        tag: "hotspots-float-element",
        component: tm
    }, {
        tag: "float-element-btn",
        component: tp
    }, {
        tag: "dropdown-opener",
        component: tg
    }, {
        tag: "tooltip-trigger",
        component: tf
    }, {
        tag: "accordeon-container",
        component: class extends L {
            constructor() {
                super(), this.handleTabToggle = ({
                    blockId: t
                }) => {
                    this.tabs.forEach(i => {
                        i.dataset.blockId !== t && i.isExpanded && i.hide()
                    })
                }, this.tabs = [...this.querySelectorAll("accordeon-component")]
            }
            connectedCallback() {
                this.tabs.forEach(t => {
                    customElements.whenDefined("accordeon-component").then(() => {
                        t.subscribe("toggle", this.handleTabToggle)
                    })
                })
            }
            disconnectedCallback() {
                this.tabs.forEach(t => {
                    customElements.whenDefined("accordeon-component").then(() => {
                        t.unsubscribe("toggle", this.handleTabToggle)
                    })
                })
            }
        }
    }, {
        tag: "accordeon-component",
        component: tb
    }, {
        tag: "accordeon-btn",
        component: ty
    }, {
        tag: "product-media-tabs",
        component: tv
    }, {
        tag: "color-swatches",
        component: tw
    }, {
        tag: "modal-component",
        component: tS
    }, {
        tag: "password-modal",
        component: class extends tS {
            constructor() {
                super(), this.passwordInput = this.querySelector("[password-modal-input]")
            }
            show() {
                super.show(), this.passwordInput && this.passwordInput.focus()
            }
        }
    }, {
        tag: "cart-notification-popup",
        component: tk
    }, {
        tag: "modal-opener",
        component: tC
    }, {
        tag: "password-modal-opener",
        component: class extends tC {
            connectedCallback() {
                super.connectedCallback(), this.focus()
            }
        }
    }, {
        tag: "modal-close-btn",
        component: tE
    }, {
        tag: "sidebar-button",
        component: tT
    }, {
        tag: "sidebar-component",
        component: tL
    }, {
        tag: "search-sidebar",
        component: tI
    }, {
        tag: "quick-view",
        component: tM
    }, {
        tag: "carousel-component",
        component: ia
    }, {
        tag: "carousel-play-button",
        component: ir
    }, {
        tag: "carousel-dots",
        component: il
    }, {
        tag: "carousel-dot",
        component: ih
    }, {
        tag: "carousel-btn",
        component: ic
    }, {
        tag: "carousel-progress",
        component: id
    }, {
        tag: "header-component",
        component: iu
    }, {
        tag: "drawer-menu",
        component: ip
    }, {
        tag: "drawer-menu-page",
        component: im
    }, {
        tag: "drawer-menu-page-link",
        component: ig
    }, {
        tag: "pagination-component",
        component: iy
    }, {
        tag: "pagination-load-button",
        component: iv
    }, {
        tag: "pagination-link",
        component: iw
    }, {
        tag: "pagination-infinite-scroll",
        component: iS
    }, {
        tag: "deferred-media",
        component: ik
    }, {
        tag: "pickup-availability",
        component: iC
    }, {
        tag: "product-form",
        component: iA
    }, {
        tag: "product-form-button",
        component: iD
    }, {
        tag: "product-details",
        component: class extends L {
            constructor() {
                super(), this.handleTabSelect = () => {
                    this.scrollToActiveTab()
                }, this.handleResize = io(() => {
                    let t = tx();
                    t !== this.isMobile && (this.isMobile = t), t && this.scrollToActiveTab()
                }, 300), this.scrollToActiveTab = () => {
                    let t = this.tabsComponent.tabNames.filter(t => t.clientWidth > 0),
                        i = t.findIndex(t => t.dataset.id === this.tabsComponent.dataset.selectedTabId);
                    this.carousel ?.scrollToIndex(i)
                }, this.tabsComponentSelector = "tabs-component", this.carouselSelector = "carousel-component", this.tabsComponent = this.querySelector(this.tabsComponentSelector), this.carousel = this.querySelector(this.carouselSelector), this.isMobile = tx(), this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.carousel)
            }
            connectedCallback() {
                customElements.whenDefined(this.tabsComponentSelector).then(() => {
                    this.tabsComponent ?.subscribe("selectTab", this.handleTabSelect)
                }).catch(t => {
                    console.log(t)
                })
            }
            disconnectedCallback() {
                this.tabsComponent ?.unsubscribe("selectTab", this.handleTabSelect), this.resizeObserver.disconnect()
            }
        }
    }, {
        tag: "product-block",
        component: iM
    }, {
        tag: "product-model",
        component: iP
    }, {
        tag: "cart-item",
        component: iq
    }, {
        tag: "cart-page",
        component: iO
    }, {
        tag: "cart-drawer",
        component: iR
    }, {
        tag: "free-shipping-bar",
        component: iF
    }, {
        tag: "product-content",
        component: aa
    }, {
        tag: "product-media",
        component: class extends L {
            connectedCallback() {
                this.setReady()
            }
            updateFirstMediaByVariant(t, i = !1) {
                if (t && t.featured_media) {
                    let s = this.querySelector(`[data-media-id="${t.featured_media.id}"]`);
                    (s ?? this).scrollIntoView({
                        behavior: i ? "auto" : "smooth"
                    })
                }
            }
            setReady() {
                this.setAttribute("ready", "")
            }
        }
    }, {
        tag: "product-media-carousel",
        component: iN
    }, {
        tag: "variant-picker",
        component: iV
    }, {
        tag: "color-swatches-picker",
        component: iz
    }, {
        tag: "product-modal",
        component: i_
    }, {
        tag: "product-modal-image-wrap",
        component: i$
    }, {
        tag: "product-modal-opener",
        component: iH
    }, {
        tag: "product-recommendations",
        component: iU
    }, {
        tag: "product-related-block",
        component: sw
    }, {
        tag: "cart-drawer-related-products",
        component: sT
    }, {
        tag: "recently-viewed",
        component: tA
    }, {
        tag: "search-sidebar-form-wrapper",
        component: iY
    }, {
        tag: "cart-remove-button",
        component: iX
    }, {
        tag: "clipboard-button",
        component: ij
    }, {
        tag: "clipboard-button-tooltip",
        component: iG
    }, {
        tag: "product-card",
        component: iZ
    }, {
        tag: "horizontal-product-card",
        component: sy
    }, {
        tag: "vertical-product-card",
        component: sv
    }, {
        tag: "max-lines-component",
        component: iJ
    }, {
        tag: "country-selector",
        component: i0
    }, {
        tag: "search-field",
        component: i1
    }, {
        tag: "password-field",
        component: i2
    }, {
        tag: "zoom-cursor",
        component: i5
    }, {
        tag: "shop-component",
        component: i3
    }, {
        tag: "shop-active-filters",
        component: class extends L {
            constructor() {
                super(), this.optionsSelector = "[data-shop-active-filters-options]", this.removeBtnSelector = "[data-shop-active-filters-remove-btn]"
            }
            reset() {
                this.replaceChildren()
            }
            setDisable() {
                this.options && this.options.setAttribute("disabled", "")
            }
            get options() {
                return this.querySelector(this.optionsSelector)
            }
            get buttons() {
                return [...this.querySelectorAll(this.removeBtnSelector)]
            }
        }
    }, {
        tag: "sidebar-filters-desktop",
        component: i9
    }, {
        tag: "sidebar-filters-mobile",
        component: i6
    }, {
        tag: "filter-remove-btn",
        component: i4
    }, {
        tag: "sort-list",
        component: i7
    }, {
        tag: "price-range",
        component: se
    }, {
        tag: "column-switcher",
        component: st
    }, {
        tag: "filters-submit-btn",
        component: si
    }, {
        tag: "before-after-images",
        component: ss
    }, {
        tag: "countdown-timer",
        component: sh
    }, {
        tag: "product-information-drawer",
        component: sc
    }, {
        tag: "sidebar-filters-sticky-mobile-button",
        component: su
    }, {
        tag: "recipient-form",
        component: sp
    }, {
        tag: "collection-card",
        component: class extends iQ {
            connectedCallback() {}
        }
    }, {
        tag: "article-card",
        component: class extends iQ {}
    }, {
        tag: "shape-swatch",
        component: sb
    }, {
        tag: "addresses-component",
        component: sk
    }, {
        tag: "tab-with-dynamic-height",
        component: sC
    }, {
        tag: "video-banner",
        component: sE
    }, {
        tag: "cart-drawer-items-block",
        component: sL
    }, {
        tag: "cart-drawer-in-cart-banner-block",
        component: sx
    }, {
        tag: "cart-drawer-related-products-block",
        component: sI
    }, {
        tag: "cart-drawer-timer-block",
        component: sA
    }, {
        tag: "cart-drawer-header",
        component: sD
    }, {
        tag: "cart-drawer-footer",
        component: sM
    }, {
        tag: "cart-items-block",
        component: sB
    }, {
        tag: "cart-buttons-block",
        component: sP
    }, {
        tag: "cart-countdown-block",
        component: sq
    }, {
        tag: "cart-related-products-block",
        component: sO
    }, {
        tag: "cart-order-notes-block",
        component: sR
    }, {
        tag: "cart-note",
        component: sF
    }, {
        tag: "cart-app-block",
        component: sN
    }, {
        tag: "cart-subtotal-block",
        component: sz
    }, {
        tag: "cart-in-cart-banner-block",
        component: sV
    }, {
        tag: "cart-free-shipping-bar-block",
        component: s_
    }, {
        tag: "cart-count",
        component: s$
    }, {
        tag: "cart-drawer-free-shipping-bar-block",
        component: sH
    }, {
        tag: "cart-drawer-buttons-block",
        component: sU
    }, {
        tag: "cart-related-products",
        component: sW
    }, {
        tag: "share-wrapper",
        component: sK
    }, {
        tag: "share-component",
        component: class extends L {
            constructor() {
                super(), this.handleButtonClick = t => {
                    t.preventDefault(), navigator.share && navigator.share({
                        text: this.dataset.valueToCopy
                    })
                }, this.button = this.querySelector("[data-share-button]")
            }
            connectedCallback() {
                this.button && this.button.addEventListener("click", this.handleButtonClick)
            }
            disconnectedCallback() {
                this.button && this.button.removeEventListener("click", this.handleButtonClick)
            }
        }
    }, {
        tag: "scrolling-text",
        component: sY
    }, {
        tag: "scrolling-text-line",
        component: sX
    }, {
        tag: "hotspots-component",
        component: sa
    }, {
        tag: "collapsed-tags",
        component: sj
    }, {
        tag: "article-tags",
        component: sG
    }, {
        tag: "popup-age-verifier",
        component: class extends tS {
            constructor() {
                super(), this._handleBlockSelect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.show()
                }, this._handleBlockDeselect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.hide()
                }, this.show = async () => {
                    let t = !!this.dataset.overlayGradient,
                        i = t ? s1(this.dataset.overlayGradient, this.dataset.overlayOpacity) : `color-mix(in srgb, ${this.dataset.overlaySolid} ${100*this.dataset.overlayOpacity}%, transparent)`;
                    if (ta.showOverlay(this.id, {
                            zIndex: 15,
                            background: i,
                            backdropFilter: `blur(${this.dataset.overlayBlur}px)`,
                            transitionDuration: "0s"
                        }), await super.show(), this.classList.add(sZ.lightboxActive), this.hasImage) {
                        if (this.hideImgOnMobile && tx()) return;
                        setTimeout(() => {
                            this.classList.add(sZ.showImage)
                        }, 750)
                    }
                    let s = this.querySelector(".popup__close-button");
                    s && (s.style.display = "flex"), this._verifyBtn ?.addEventListener("click", this.onVerify)
                }, this.hide = async () => {
                    ta.hideOverlay(this.id), this.conditionRuntime ?.cleanup(), this.classList.remove(sZ.lightboxActive), this.classList.add(sZ.lightboxClosing), await super.hide(), this.classList.remove(sZ.showImage), this.classList.remove(sZ.lightboxClosing)
                }, this.onVerify = () => {
                    this.isEditorMode || this.storage.saveData({
                        type: o.AgeVerifier,
                        verified: !0
                    }), this._verifyBtn ?.removeEventListener("click", this.onVerify), this.hide()
                }, this.storage = new sJ(this.dataset.blockId ?? this.id), this.hasImage = "true" === this.dataset.hasImage, this.hideImgOnMobile = "true" === this.dataset.hideImgMobile
            }
            connectedCallback() {
                let t = this.storage.loadData();
                if (this.isEditorMode) {
                    this.editor.subscribe("BLOCK_SELECT", this._handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this._handleBlockDeselect);
                    return
                }
                t && (t.type !== o.AgeVerifier || t.verified) || (this.conditionRuntime = new s8(this.dataset, null, this.show), this.conditionRuntime.run())
            }
            disconnectedCallback() {
                this.isEditorMode && this.editor.destroy(), this.conditionRuntime ?.cleanup()
            }
            get _verifyBtn() {
                return this.isOpen ? this.querySelector("[data-verify-btn]") : null
            }
        }
    }, {
        tag: "popup-cookie",
        component: class extends tS {
            connectedCallback() {
                if (this.isEditorMode) {
                    this.editor.subscribe("BLOCK_SELECT", this._handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this._handleBlockDeselect);
                    return
                }
                window.Shopify.loadFeatures ?.([{
                    name: "consent-tracking-api",
                    version: "0.1"
                }], t => {
                    if (t) throw t;
                    let i = window.Shopify.customerPrivacy ?.userCanBeTracked(),
                        s = window.Shopify.customerPrivacy ?.getTrackingConsent();
                    i || "no_interaction" !== s || this.show()
                })
            }
            disconnectedCallback() {
                this.isEditorMode && this.editor.destroy()
            }
            selectBtn(t) {
                return this.isOpen ? this.querySelector(`[data-${t}-btn]`) : null
            }
            constructor(...t) {
                super(...t), this._handleBlockSelect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.show()
                }, this._handleBlockDeselect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.hide()
                }, this.show = async () => {
                    await super.show(), this.selectBtn("accept") ?.addEventListener("click", this.onAccept), this.selectBtn("decline") ?.addEventListener("click", this.onDecline), this.selectBtn("close") ?.addEventListener("click", this.onDecline)
                }, this.hide = async () => {
                    this.selectBtn("accept") ?.removeEventListener("click", this.onAccept), this.selectBtn("decline") ?.removeEventListener("click", this.onDecline), this.selectBtn("close") ?.removeEventListener("click", this.onDecline), await super.hide()
                }, this.onAccept = () => {
                    if (this.isEditorMode) {
                        this.hide();
                        return
                    }
                    window.Shopify.customerPrivacy ?.setTrackingConsent(!0, this.hide)
                }, this.onDecline = () => {
                    if (this.isEditorMode) {
                        this.hide();
                        return
                    }
                    window.Shopify.customerPrivacy ?.setTrackingConsent(!1, this.hide)
                }
            }
        }
    }, {
        tag: "popup-promo",
        component: class extends tS {
            constructor() {
                super(), this._handleBlockSelect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.show()
                }, this._handleBlockDeselect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.hide()
                }, this.show = async () => {
                    if ("lightbox" === this.variant) {
                        let t = !!this.dataset.overlayGradient,
                            i = t ? s1(this.dataset.overlayGradient, this.dataset.overlayOpacity) : `color-mix(in srgb, ${this.dataset.overlaySolid} ${100*this.dataset.overlayOpacity}%, transparent)`;
                        ta.showOverlay(this.id, {
                            zIndex: 15,
                            background: i,
                            backdropFilter: `blur(${this.dataset.overlayBlur}px)`,
                            transitionDuration: "750ms"
                        })
                    }
                    if (await super.show(), "lightbox" === this.variant && this.classList.add(sZ.lightboxActive), this.hasImage) {
                        if (this.hideImgOnMobile && tx()) return;
                        setTimeout(() => {
                            this.classList.add(sZ.showImage)
                        }, 750)
                    }
                    let t = this.querySelector(".popup__close-button");
                    t && (t.style.display = "flex"), this.selectBtn("close") ?.addEventListener("click", this.hide), this.selectBtn("close-small") ?.addEventListener("click", this.hide), this.selectBtn("promo") ?.addEventListener("click", this.onTouch)
                }, this.hide = async () => {
                    this.onTouch(), "lightbox" === this.variant && ta.hideOverlay(this.id), this.conditionRuntime ?.cleanup(), this.selectBtn("close") ?.removeEventListener("click", this.hide), this.selectBtn("close-small") ?.removeEventListener("click", this.hide), this.selectBtn("promo") ?.removeEventListener("click", this.onTouch), "lightbox" === this.variant && (this.classList.remove(sZ.lightboxActive), this.classList.add(sZ.lightboxClosing)), await super.hide(), this.classList.remove(sZ.showImage), this.classList.remove(sZ.lightboxClosing)
                }, this.onTouch = () => {
                    this.storage.saveData({
                        type: o.Promo,
                        lastShow: new Date
                    })
                }, this.storage = new sJ(this.dataset.blockId ?? this.id), this.variant = this.dataset.variant, this.hasImage = "true" === this.dataset.hasImage, this.hideImgOnMobile = "true" === this.dataset.hideImgMobile
            }
            connectedCallback() {
                if (this.isEditorMode) {
                    this.editor.subscribe("BLOCK_SELECT", this._handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this._handleBlockDeselect);
                    return
                }
                let t = this.storage.loadData();
                if (!t || t.type === o.Promo) {
                    if (t ?.lastShow) try {
                        t.lastShow = new Date(t.lastShow)
                    } catch {
                        t.lastShow = null
                    }
                    this.conditionRuntime = new s8(this.dataset, t ?.lastShow ?? null, this.show), this.conditionRuntime.run()
                }
            }
            disconnectedCallback() {
                this.isEditorMode && this.editor.destroy(), this.conditionRuntime ?.cleanup()
            }
            selectBtn(t) {
                return this.isOpen ? this.querySelector(`[data-${t}-btn]`) : null
            }
        }
    }, {
        tag: "popup-signup",
        component: class extends tS {
            constructor() {
                super(), this._handleBlockSelect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.show()
                }, this._handleBlockDeselect = ({
                    detail: {
                        blockId: t
                    }
                }) => {
                    this.dataset.blockId === t && this.hide()
                }, this.show = async () => {
                    if ("lightbox" === this.variant) {
                        let t = !!this.dataset.overlayGradient,
                            i = t ? s1(this.dataset.overlayGradient, this.dataset.overlayOpacity) : `color-mix(in srgb, ${this.dataset.overlaySolid} ${100*this.dataset.overlayOpacity}%, transparent)`;
                        ta.showOverlay(this.id, {
                            zIndex: 15,
                            background: i,
                            backdropFilter: `blur(${this.dataset.overlayBlur}px)`,
                            transitionDuration: "750ms"
                        })
                    }
                    if (await super.show(), "lightbox" === this.variant && this.classList.add(sZ.lightboxActive), this.hasImage) {
                        if (this.hideImgOnMobile && tx()) return;
                        setTimeout(() => {
                            this.classList.add(sZ.showImage)
                        }, 750)
                    }
                    let t = this.querySelector(".popup__close-button");
                    t && (t.style.display = "flex"), this.selectBtn("close") ?.addEventListener("click", this.hide), this.selectBtn("close-small") ?.addEventListener("click", this.hide), this.selectBtn("submit") ?.addEventListener("click", this.onTouch)
                }, this.hide = async () => {
                    this.storage.saveData({
                        type: o.Signup,
                        lastShow: new Date
                    }), "lightbox" === this.variant && ta.hideOverlay(this.id), this.conditionRuntime ?.cleanup(), this.selectBtn("close") ?.removeEventListener("click", this.hide), this.selectBtn("close-small") ?.removeEventListener("click", this.hide), this.selectBtn("submit") ?.removeEventListener("click", this.onTouch), "lightbox" === this.variant && (this.classList.remove(sZ.lightboxActive), this.classList.add(sZ.lightboxClosing)), await super.hide(), this.classList.remove(sZ.showImage), this.classList.remove(sZ.lightboxClosing)
                }, this.onTouch = () => { // for success page detection
                    window.sessionStorage.setItem("customer-posted-block-id", this.dataset.blockId)
                }, this.storage = new sJ(this.dataset.blockId ?? this.id), this.variant = this.dataset.variant, this.hasImage = "true" === this.dataset.hasImage, this.hideImgOnMobile = "true" === this.dataset.hideImgMobile
            }
            connectedCallback() {
                if (this.isEditorMode) {
                    this.editor.subscribe("BLOCK_SELECT", this._handleBlockSelect), this.editor.subscribe("BLOCK_DESELECT", this._handleBlockDeselect);
                    return
                }
                let t = this.storage.loadData(); // don't show on captcha page
                if (!window.location.pathname.includes("challenge")) { // handle success message
                    if ("true" === this.dataset.showSuccessMessage && window.location.search.includes("customer_posted") && window.sessionStorage.getItem("customer-posted-block-id") === this.dataset.blockId) {
                        this.show(), window.sessionStorage.removeItem("customer-posted-block-id"), this.classList.add(sZ.success);
                        return
                    }
                    if (!t || t.type === o.Signup) {
                        if (t ?.lastShow) try {
                            t.lastShow = new Date(t.lastShow)
                        } catch {
                            t.lastShow = null
                        }
                        this.conditionRuntime = new s8(this.dataset, t ?.lastShow ?? null, this.show), this.conditionRuntime.run()
                    }
                }
            }
            disconnectedCallback() {
                this.isEditorMode && this.editor.destroy(), this.conditionRuntime ?.cleanup()
            }
            selectBtn(t) {
                return this.isOpen ? this.querySelector(`[data-${t}-btn]`) : null
            }
        }
    }, {
        tag: "lookbook-component",
        component: s9
    }, {
        tag: "lookbook-modal",
        component: s6
    }, {
        tag: "map-component",
        component: as
    }, {
        tag: "store-locator",
        component: s4
    }]; // @ts-expect-error
    window.recentlyViewed = tA, ar.forEach(({
        tag: t,
        component: i
    }) => {
        customElements.define(t, i)
    }), window.bodyElement = ta, window.auroraTheme = { ...window.auroraTheme,
        theme_version: "2.4.1",
        id: window.Shopify.theme.id,
        storeId: window.Shopify.theme.theme_store_id,
        isLicenseTheme: !!window.Shopify.theme.theme_store_id
    }, window.addEventListener("shopify:section:load", () => {
        w({
            lazyClass: "yall-video-lazy"
        })
    }), window.addEventListener("load", () => {
        w({
            lazyClass: "yall-video-lazy"
        });
        let {
            observedVideos: t,
            observer: i
        } = G();
        document.body.addEventListener("touchstart", () => Q({
            observedVideos: t,
            observer: i
        }))
    })
}(); //# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map
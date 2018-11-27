/*!
 jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 Version: v3.2.24
 Url: https://xdsoft.net/jodit/
 License(s): GPL-2.0-or-later
*/
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Jodit = t() : e.Jodit = t()
}(window, function() {
    return function(o) {
        var n = {};

        function i(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return o[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
        }
        return i.m = o, i.c = n, i.d = function(e, t, o) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (i.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var n in t) i.d(o, n, function(e) {
                    return t[e]
                }.bind(null, n));
            return o
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "/build/", i(i.s = 26)
    }([function(e, m, t) {
        "use strict";
        Object.defineProperty(m, "__esModule", {
            value: !0
        });
        var o = t(2),
            i = t(3),
            n = t(2),
            r = {},
            a = r.toString,
            s = r.hasOwnProperty;
        m.isIE = function() {
            return "undefined" != typeof navigator && (-1 != navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent))
        };
        var l = 1;
        m.$$ = function(e, t) {
            var o;
            if (!/:scope/.test(e) || !m.isIE() || "undefined" != typeof HTMLDocument && t instanceof HTMLDocument) o = t.querySelectorAll(e);
            else {
                var n = t.id,
                    i = n || "_selector_id_" + ("" + Math.random()).slice(2) + l++;
                e = e.replace(/:scope/g, "#" + i), !n && t.setAttribute("id", i), o = t.parentNode.querySelectorAll(e), n || t.removeAttribute("id")
            }
            return [].slice.call(o)
        }, m.isWindow = function(e) {
            return null !== e && e === e.window
        }, m.type = function(e) {
            return null === e ? "null" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
        }, m.each = function(e, t) {
            var o, n, i;
            if (Array.isArray(e)) {
                for (o = e.length, i = 0; i < o; i += 1)
                    if (!1 === t.call(e[i], i, e[i])) return !1
            } else
                for (n = Object.keys(e), i = 0; i < n.length; i += 1)
                    if (!1 === t.call(e[n[i]], n[i], e[n[i]])) return !1;
            return e
        }, m.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment", "DOMStringList"], function(e, t) {
            r["[object " + t + "]"] = t.toLowerCase()
        }), m.inArray = function(e, t) {
            return -1 != t.indexOf(e)
        }, m.isPlainObject = function(e) {
            return !("object" != typeof e || e.nodeType || m.isWindow(e) || e.constructor && !s.call(e.constructor.prototype, "isPrototypeOf"))
        }, m.extend = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var o, n, i, r, a, s, l, c = e[0] || {},
                d = 1,
                u = e.length,
                p = !1;
            for ("boolean" == typeof c && (p = c, c = e[d] || {}, d += 1), "object" != typeof c && "function" === m.type(c) && (c = {}), d === u && (c = this, d += 1); d < u; d += 1)
                if (null != (o = e[d]))
                    for (l = Object.keys(o), s = 0; s < l.length; s += 1) i = c[n = l[s]], c !== (r = o[n]) && (p && r && (m.isPlainObject(r) && !(r instanceof h) || Array.isArray(r) && !(r instanceof f)) ? (a = Array.isArray(r) ? i && Array.isArray(i) ? i : [] : i && m.isPlainObject(i) ? i : {}, c[n] = m.extend(p, a, r)) : void 0 !== r && (c[n] = r));
            return c
        }, m.trim = function(e) {
            return e.replace(o.SPACE_REG_EXP_START, "").replace(o.SPACE_REG_EXP_END, "")
        }, m.colorToHex = function(e) {
            if ("rgba(0, 0, 0, 0)" === e || "" === e) return !1;
            if (!e) return "#000000";
            if ("#" === e.substr(0, 1)) return e;
            var t, o, n, i = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);
            if (!i) return "#000000";
            for (o = parseInt(i[2], 10), n = parseInt(i[3], 10), t = (parseInt(i[4], 10) | n << 8 | o << 16).toString(16).toUpperCase(); t.length < 6;) t = "0" + t;
            return i[1] + "#" + t
        }, m.normalizeColor = function(e) {
            var t, o = ["#"],
                n = m.colorToHex(e);
            if (!n) return !1;
            if (3 !== (n = (n = m.trim(n.toUpperCase())).substr(1)).length) return 6 < n.length && (n = n.substr(0, 6)), "#" + n;
            for (t = 0; t < 3; t += 1) o.push(n[t]), o.push(n[t]);
            return o.join("")
        }, m.normalizeSize = function(e) {
            return /^[0-9]+$/.test("" + e) ? e + "px" : "" + e
        }, m.getContentWidth = function(e, t) {
            var o = function(e) {
                    return parseInt(e, 10)
                },
                n = t.getComputedStyle(e);
            return e.offsetWidth - o(n.getPropertyValue("padding-left") || "0") - o(n.getPropertyValue("padding-right") || "0")
        }, m.innerWidth = function(e, t) {
            var o = t.getComputedStyle(e);
            return e.clientWidth - (parseFloat(o.paddingLeft || "0") + parseFloat(o.paddingRight || "0"))
        }, m.ctrlKey = function(e) {
            if ("undefined" != typeof navigator && -1 != navigator.userAgent.indexOf("Mac OS X")) {
                if (e.metaKey && !e.altKey) return !0
            } else if (e.ctrlKey && !e.altKey) return !0;
            return !1
        }, m.appendScript = function(e, t, o, n) {
            void 0 === o && (o = "");
            var i, r = n.createElement("script");
            r.className = o, r.type = "text/javascript", void 0 !== t && r.addEventListener("load", t, !1), r.src = (i = e, "file:" === window.location.protocol && /^\/\//.test(i) && (i = "https:" + i), i), n.body.appendChild(r)
        }, m.dom = function(e, t) {
            if (e instanceof t.defaultView.HTMLElement) return e;
            var o = t.createElement("div");
            o.innerHTML = e;
            var n = o.firstChild === o.lastChild && o.firstChild ? o.firstChild : o;
            return n.parentNode && n.parentNode.removeChild(n), n
        }, m.hexToRgb = function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, o, n) {
                return t + t + o + o + n + n
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }, m.clear = function(e, t) {
            return void 0 === t && (t = !1), e = m.trim(e).replace(o.INVISIBLE_SPACE_REG_EXP, "").replace(/[\s]*class=""/g, ""), t && (e = e.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g, "")), e
        }, m.isURL = function(e) {
            return /^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.?)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(e)
        }, m.pathNormalize = function(e) {
            return e.replace(/([^:])[\\\/]+/g, "$1/")
        }, m.urlNormalize = function(e) {
            return e.replace(/([^:])[\\\/]+/g, "$1/")
        }, m.isHTML = function(e) {
            return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e)
        }, m.isHTMLFromWord = function(e) {
            return -1 != e.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 != e.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 != e.search(/style="[^"]*mso-/) && -1 != e.search(/<font/)
        }, m.humanSizeToBytes = function(e) {
            if (/^[0-9.]+$/.test("" + e)) return parseFloat(e);
            var t = e.substr(-2, 2).toUpperCase(),
                o = ["KB", "MB", "GB", "TB"],
                n = parseFloat(e.substr(0, e.length - 2));
            return -1 != o.indexOf(t) ? n * Math.pow(1024, 1 + o.indexOf(t)) : parseInt(e, 10)
        }, m.parseQuery = function(e) {
            var t, o, n = {},
                i = e.substr(1).split("&");
            for (t = 0; t < i.length; t += 1) o = i[t].split("="), n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
            return n
        }, m.convertMediaURLToVideoEmbed = function(e, t, o) {
            if (void 0 === t && (t = 400), void 0 === o && (o = 345), !m.isURL(e)) return e;
            var n = document.createElement("a"),
                i = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
            n.href = e, t || (t = 400), o || (o = 345);
            var r = n.protocol || "";
            switch (n.hostname) {
                case "www.vimeo.com":
                case "vimeo.com":
                    return i.test(e) ? e.replace(i, '<iframe width="' + t + '" height="' + o + '" src="' + r + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e;
                case "youtube.com":
                case "www.youtube.com":
                case "youtu.be":
                case "www.youtu.be":
                    var a = n.search ? m.parseQuery(n.search) : {
                        v: n.pathname.substr(1)
                    };
                    return a.v ? '<iframe width="' + t + '" height="' + o + '" src="' + r + "//www.youtube.com/embed/" + a.v + '" frameborder="0" allowfullscreen></iframe>' : e
            }
            return e
        }, m.browser = function(e) {
            var t = navigator.userAgent.toLowerCase(),
                o = /(firefox)[\s\/]([\w.]+)/.exec(t) || /(chrome)[\s\/]([\w.]+)/.exec(t) || /(webkit)[\s\/]([\w.]+)/.exec(t) || /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(t) || /(msie)[\s]([\w.]+)/.exec(t) || /(trident)\/([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 || [];
            return "version" === e ? o[2] : "webkit" === e ? "chrome" === o[1] || "webkit" === o[1] : "ff" === e ? "firefox" === o[1] : "msie" === e ? "trident" === o[1] || "msie" === o[1] : o[1] === e
        }, m.offset = function(e, t, o, n) {
            void 0 === n && (n = !1);
            var i, r, a = e.getBoundingClientRect(),
                s = o.body,
                l = o.documentElement || {
                    clientTop: 0,
                    clientLeft: 0,
                    scrollTop: 0,
                    scrollLeft: 0
                },
                c = o.defaultView || o.parentWindow,
                d = c.pageYOffset || l.scrollTop || s.scrollTop,
                u = c.pageXOffset || l.scrollLeft || s.scrollLeft,
                p = l.clientTop || s.clientTop || 0,
                f = l.clientLeft || s.clientLeft || 0;
            if (!n && t && t.options && t.options.iframe && t.iframe) {
                var h = m.offset(t.iframe, t, t.ownerDocument, !0);
                i = a.top + h.top, r = a.left + h.left
            } else i = a.top + d - p, r = a.left + u - f;
            return {
                top: Math.round(i),
                left: Math.round(r),
                width: a.width,
                height: a.height
            }
        }, m.camelCase = function(e) {
            return e.replace(/([-_])(.)/g, function(e, t, o) {
                return o.toUpperCase()
            })
        }, m.fromCamelCase = function(e) {
            return e.replace(/([A-Z]+)/g, function(e, t) {
                return "-" + t.toLowerCase()
            })
        }, m.htmlspecialchars = function(e) {
            var t = document.createElement("div");
            return t.innerText = e, t.innerHTML
        }, m.extractText = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.innerText
        }, m.debounce = function(t, o, n, i) {
            3 === arguments.length && "boolean" != typeof n && (i = n, n = !1);
            var r = 0;
            return function() {
                var e = arguments;
                i = i || this, (n && !r || !o) && t.apply(i, e), o && (clearTimeout(r), r = window.setTimeout(function() {
                    n || t.apply(i, e), r = 0
                }, o))
            }
        }, m.throttle = function(e, t, o) {
            var n, i, r, a = null;
            return function() {
                n = arguments, i = !0, o = o || this, t ? a || (r = function() {
                    a = i ? (e.apply(o, n), i = !1, m.setTimeout(r, t)) : null
                })() : e.apply(o, n)
            }
        }, m.normilizeCSSValue = function(e, t) {
            switch (e) {
                case "font-weight":
                    return "bold" === t ? 700 : t
            }
            return t
        }, m.css = function(e, t, o, n) {
            void 0 === n && (n = !1);
            var i = /^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;
            if (m.isPlainObject(t) || void 0 !== o) {
                var r = function(e, t, o) {
                    null != o && i.test(t) && /^[\-+]?[0-9.]+$/.test("" + o) && (o = parseInt("" + o, 10) + "px"), void 0 !== o && m.css(e, t, void 0, !0) !== m.normilizeCSSValue(t, o) && (e.style[t] = o)
                };
                if (m.isPlainObject(t)) {
                    var a = Object.keys(t),
                        s = void 0;
                    for (s = 0; s < a.length; s += 1) r(e, m.camelCase(a[s]), t[a[s]])
                } else r(e, m.camelCase(t), o);
                return ""
            }
            var l = m.fromCamelCase(t),
                c = e.ownerDocument || document,
                d = !!c && (c.defaultView || c.parentWindow),
                u = e.style[t],
                p = void 0 !== u && "" !== u ? u : d && !n ? d.getComputedStyle(e).getPropertyValue(l) : "";
            return i.test(t) && /^[\-+]?[0-9.]+px$/.test("" + p) && (p = parseInt("" + p, 10)), m.normilizeCSSValue(t, p)
        }, m.asArray = function(e) {
            return Array.isArray(e) ? e : [e]
        }, m.splitArray = function(e) {
            return "string" == typeof e ? e.split(/[,\s]+/) : e
        }, m.sprintf = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var g = e,
                b = 0,
                o = g[b++],
                _ = function(e, t, o, n) {
                    var i = e.length < t ? Array(1 + t - e.length >>> 0).join(o) : "";
                    return n ? e + i : i + e
                },
                y = function(e, t, o, n, i) {
                    var r = n - e.length;
                    return 0 < r && (e = o || !i ? _(e, n, " ", o) : e.slice(0, t.length) + _("", r, "0", !0) + e.slice(t.length)), e
                },
                w = function(e, t, o, n, i, r, a) {
                    var s = e >>> 0,
                        l = (o = o && s && {
                            2: "0b",
                            8: "0",
                            16: "0x"
                        } [t] || "") + _(s.toString(t), r || 0, "0", !1);
                    return y(l, o, n, i, a)
                },
                C = function(e, t, o, n, i) {
                    return null != n && (e = e.slice(0, n)), y(e, "", t, o, i)
                };
            return o.replace(/%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g, function(e, t, o, n, i, r, a) {
                if ("%%" == e) return "%";
                for (var s = !1, l = "", c = !1, d = !1, u = 0; o && u < o.length; u++) switch (o.charAt(u)) {
                    case " ":
                        l = " ";
                        break;
                    case "+":
                        l = "+";
                        break;
                    case "-":
                        s = !0;
                        break;
                    case "0":
                        c = !0;
                        break;
                    case "#":
                        d = !0
                }
                if ((n = n ? "*" === n ? +g[b++] : "*" === ("" + n)[0] ? +g[("" + n).slice(1, -1)] : +n : 0) < 0 && (n = -n, s = !0), !isFinite(n)) throw Error("sprintf: (minimum-)width must be finite");
                r = r ? "*" === r ? +g[b++] : "*" === r[0] ? +g[r.slice(1, -1)] : +r : -1 < "fFeE".indexOf(a) ? 6 : "d" == a ? 0 : void 0;
                var p = t ? g[t.slice(0, -1)] : g[b++];
                switch (a) {
                    case "s":
                        return C(p + "", s, n, r, c);
                    case "c":
                        return C(String.fromCharCode(+p), s, n, r, c);
                    case "b":
                        return w(p, 2, d, s, n, r, c);
                    case "o":
                        return w(p, 8, d, s, n, r, c);
                    case "x":
                        return w(p, 16, d, s, n, r, c);
                    case "X":
                        return w(p, 16, d, s, n, r, c).toUpperCase();
                    case "u":
                        return w(p, 10, d, s, n, r, c);
                    case "i":
                    case "d":
                        return p = (h = (f = parseInt("" + p, 10)) < 0 ? "-" : l) + _(Math.abs(f) + "", r, "0", !1), y(p, h, s, n, c);
                    case "e":
                    case "E":
                    case "f":
                    case "F":
                    case "g":
                    case "G":
                        var f, h = (f = +p) < 0 ? "-" : l,
                            m = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(a.toLowerCase())],
                            v = ["toString", "toUpperCase"]["eEfFgG".indexOf(a) % 2];
                        return p = h + Math.abs(f)[m](r), y(p, h, s, n, c)[v]();
                    default:
                        return e
                }
            })
        }, m.val = function(e, t, o) {
            var n = e.querySelector(t);
            return n ? (o && (n.value = o), n.value) : ""
        }, m.defaultLanguage = function(e) {
            return "auto" === e || void 0 === e ? document.documentElement && document.documentElement.lang || navigator.language && navigator.language.substr(0, 2) || !!navigator.browserLanguage && navigator.browserLanguage.substr(0, 2) || "en" : e
        }, m.normalizeNode = function(e) {
            if (e) {
                if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.parentNode)
                    for (; e.nextSibling && e.nextSibling.nodeType === Node.TEXT_NODE;) null !== e.nextSibling.nodeValue && (e.nodeValue += e.nextSibling.nodeValue), e.nodeValue = e.nodeValue.replace(o.INVISIBLE_SPACE_REG_EXP, ""), e.parentNode.removeChild(e.nextSibling);
                else m.normalizeNode(e.firstChild);
                m.normalizeNode(e.nextSibling)
            }
        }, m.cleanFromWord = function(e) {
            -1 != e.indexOf("<html ") && (e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, 7 + e.lastIndexOf("</html>")));
            var t = "";
            try {
                var o = document.createElement("div");
                o.innerHTML = e;
                var n = [];
                o.firstChild && i.Dom.all(o, function(t) {
                    switch (t.nodeType) {
                        case Node.ELEMENT_NODE:
                            "FONT" === t.nodeName ? i.Dom.unwrap(t) : [].slice.call(t.attributes).forEach(function(e) {
                                -1 == ["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) && t.removeAttribute(e.name)
                            });
                            break;
                        case Node.TEXT_NODE:
                            break;
                        default:
                            n.push(t)
                    }
                }), n.forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }), t = o.innerHTML
            } catch (e) {}
            return t && (e = t), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }, m.applyStyles = function(e) {
            if (-1 == e.indexOf("<html ")) return e;
            e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, 7 + e.lastIndexOf("</html>"));
            var t = document.createElement("iframe");
            t.style.display = "none", document.body.appendChild(t);
            var o = "",
                n = [];
            try {
                var i = t.contentDocument || (t.contentWindow ? t.contentWindow.document : null);
                if (i) {
                    i.open(), i.write(e), i.close(), i.styleSheets.length && (n = i.styleSheets[i.styleSheets.length - 1].cssRules);
                    for (var r = function(t) {
                            if ("" === n[t].selectorText) return "continue";
                            m.$$(n[t].selectorText, i.body).forEach(function(e) {
                                e.style.cssText += n[t].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g, "").replace(/border[a-z\-]*:[\s]*[^;]+;/g, "")
                            })
                        }, a = 0; a < n.length; a += 1) r(a);
                    o = i.firstChild ? i.body.innerHTML : ""
                }
            } catch (e) {} finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
            return o && (e = o), e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }, m.inView = function(e, t, o) {
            var n = e.getBoundingClientRect(),
                i = n.top,
                r = n.height,
                a = e;
            do {
                if (a && a.parentNode) {
                    if (i > (n = (a = a.parentNode).getBoundingClientRect()).bottom) return !1;
                    if (i + r <= n.top) return !1
                }
            } while (a && a != t && a.parentNode);
            return i <= (o.documentElement && o.documentElement.clientHeight || 0)
        }, m.scrollIntoView = function(e, t, o) {
            m.inView(e, t, o) || (t.clientHeight !== t.scrollHeight && (t.scrollTop = e.offsetTop), m.inView(e, t, o) || e.scrollIntoView())
        }, m.getXPathByElement = function(t, e) {
            if (!t || 1 != t.nodeType) return "";
            if (!t.parentNode || e === t) return "";
            if (t.id) return "//*[@id='" + t.id + "']";
            var o = [].filter.call(t.parentNode.childNodes, function(e) {
                return e.nodeName === t.nodeName
            });
            return m.getXPathByElement(t.parentNode, e) + "/" + t.nodeName.toLowerCase() + (1 < o.length ? "[" + ([].indexOf.call(o, t) + 1) + "]" : "")
        };
        var c = "JoditDataBindkey";
        m.dataBind = function(e, t, o) {
            var n = e[c];
            if (n || Object.defineProperty(e, c, {
                    enumerable: (n = {}, !1),
                    configurable: !0,
                    value: n
                }), void 0 === o) return n[t];
            n[t] = o
        }, m.isLicense = function(e) {
            return "string" == typeof e && 32 === e.length && /^[a-z0-9]+$/.test(e)
        }, m.normalizeLicense = function(e, t) {
            void 0 === t && (t = 8);
            for (var o = []; e.length;) o.push(e.substr(0, t)), e = e.substr(t);
            return o[1] = o[1].replace(/./g, "*"), o[2] = o[2].replace(/./g, "*"), o.join("-")
        };
        var f = function() {
            function e(e) {
                var t = this;
                m.extend(!(this.length = 0), this, e), this.length = e.length;
                var o = Array.prototype;
                ["map", "forEach", "reduce", "push", "pop", "shift", "unshift", "slice", "splice"].forEach(function(e) {
                    t[e] = o[e]
                })
            }
            return e.prototype.toString = function() {
                for (var e = [], t = 0; t < this.length; t += 1) e[t] = this[t];
                return "" + e
            }, e
        }();
        m.JoditArray = f;
        var h = function(e) {
            m.extend(!0, this, e)
        };
        m.JoditObject = h, m.normalizeKeyAliases = function(e) {
            var t = {};
            return e.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map(function(e) {
                return m.trim(e.toLowerCase())
            }).map(function(e) {
                return n.KEY_ALIASES[e] || e
            }).sort().filter(function(e) {
                return !t[e] && "" !== e && (t[e] = !0)
            }).join("+")
        }, m.setTimeout = function(e, t) {
            for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
            return t ? window.setTimeout.apply(window, [e, t].concat(o)) : (e.apply(null, o), 0)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(2),
            c = o(0),
            a = o(5),
            i = o(12),
            d = i.Widget.TabsWidget,
            s = i.Widget.FileSelectorWidget,
            l = o(3),
            u = o(6),
            r = function() {
                this.license = "", this.preset = "custom", this.presets = {
                    inline: {
                        inline: !0,
                        toolbar: !1,
                        toolbarInline: !0,
                        popup: {
                            selection: ["bold", "underline", "italic", "ul", "ol", "outdent", "indent", "\n", "fontsize", "brush", "paragraph", "link", "align", "cut", "dots"]
                        },
                        showXPathInStatusbar: !1,
                        showCharsCounter: !1,
                        showWordsCounter: !1,
                        showPlaceholder: !1
                    }
                }, this.ownerDocument = "undefined" != typeof document ? document : null, this.ownerWindow = "undefined" != typeof window ? window : null, this.zIndex = 0, this.readonly = !1, this.disabled = !1, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.toolbarButtonSize = "middle", this.inline = !1, this.theme = "default", this.saveModeInStorage = !1, this.saveHeightInStorage = !1, this.spellcheck = !0, this.editorCssClass = !1, this.triggerChangeEvent = !0, this.width = "auto", this.minWidth = "200px", this.maxWidth = "100%", this.height = "auto", this.minHeight = 200, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = "en", this.tabIndex = -1, this.toolbar = !0, this.showTooltip = !0, this.showTooltipDelay = 500, this.useNativeTooltip = !1, this.enter = n.PARAGRAPH, this.defaultMode = n.MODE_WYSIWYG, this.useSplitMode = !1, this.colors = {
                    greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"],
                    palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"],
                    full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"]
                }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraButtons = [], this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "|", "superscript", "subscript", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "file", "video", "table", "link", "|", "align", "undo", "redo", "\n", "cut", "hr", "eraser", "copyformat", "|", "symbol", "fullsize", "selectall", "print", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "hr", "eraser", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "eraser", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "|", "align", "|", "undo", "redo", "|", "eraser", "dots"], this.events = {}, this.textIcons = !1
            };
        t.Config = r, t.OptionsDefault = function(e) {
            var n = this,
                i = this;
            if (void 0 !== (i.plainOptions = e) && "object" == typeof e) {
                var r = function(e, t) {
                    if ("preset" === t && void 0 !== a.Jodit.defaultOptions.presets[e.preset]) {
                        var o = a.Jodit.defaultOptions.presets[e.preset];
                        Object.keys(o).forEach(r.bind(n, o))
                    }
                    i[t] = "object" != typeof a.Jodit.defaultOptions[t] || Array.isArray(a.Jodit.defaultOptions[t]) ? e[t] : c.extend(!0, {}, a.Jodit.defaultOptions[t], e[t])
                };
                Object.keys(e).forEach(r.bind(this, e))
            }
        }, r.prototype.controls = {
            print: {
                exec: function(e) {
                    var t = window.open("", "PRINT");
                    t && (e.options.iframe ? (e.events.fire("generateDocumentStructure.iframe", t.document, e), t.document.body.innerHTML = e.getEditorValue()) : (t.document.write("<!doctype html><html><head><title></title></head><body>" + e.getEditorValue() + "</body></html>"), t.document.close()), t.focus(), t.print(), t.close())
                },
                mode: n.MODE_SOURCE + n.MODE_WYSIWYG
            },
            about: {
                exec: function(e) {
                    var t = e.getInstance("Dialog");
                    t.setTitle(e.i18n("About Jodit")), t.setContent('<div class="jodit_about">                    <div>' + e.i18n("Jodit Editor") + " v." + e.getVersion() + " </div><div>" + e.i18n("License: %s", c.isLicense(e.options.license) ? c.normalizeLicense(e.options.license) : e.i18n("GNU General Public License, version 2 or later")) + '</div><div><a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="https://xdsoft.net/jodit/doc/" target="_blank">' + e.i18n("Jodit User's Guide") + "</a> " + e.i18n("contains detailed help for using") + "</div><div>" + e.i18n("Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div></div>"), t.open()
                },
                tooltip: "About Jodit",
                mode: n.MODE_SOURCE + n.MODE_WYSIWYG
            },
            hr: {
                command: "insertHorizontalRule",
                tags: ["hr"],
                tooltip: "Insert Horizontal Line"
            },
            image: {
                popup: function(n, e, t, i) {
                    var r = null;
                    return e && e.nodeType !== Node.TEXT_NODE && ("IMG" === e.tagName || c.$$("img", e).length) && (r = "IMG" === e.tagName ? e : c.$$("img", e)[0]), s(n, {
                        filebrowser: function(e) {
                            if (e.files && e.files.length) {
                                var t = void 0;
                                for (t = 0; t < e.files.length; t += 1) n.selection.insertImage(e.baseurl + e.files[t])
                            }
                            i()
                        },
                        upload: function(e) {
                            var t;
                            if (e.files && e.files.length)
                                for (t = 0; t < e.files.length; t += 1) n.selection.insertImage(e.baseurl + e.files[t]);
                            i()
                        },
                        url: function(e, t) {
                            var o = r || c.dom('<img src=""/>', n.editorDocument);
                            o.setAttribute("src", e), o.setAttribute("alt", t), r || n.selection.insertImage(o), i()
                        }
                    }, r, i)
                },
                tags: ["img"],
                tooltip: "Insert Image"
            },
            file: {
                popup: function(o, e, t, n) {
                    var i = function(e, t) {
                            void 0 === t && (t = ""), o.selection.insertNode(c.dom('<a href="' + e + '" title="' + t + '">' + (t || e) + "</a>", o.editorDocument))
                        },
                        r = null;
                    return e && ("A" === e.nodeName || l.Dom.closest(e, "A", o.editor)) && (r = "A" === e.nodeName ? e : l.Dom.closest(e, "A", o.editor)), s(o, {
                        filebrowser: function(e) {
                            if (e.files && e.files.length) {
                                var t = void 0;
                                for (t = 0; t < e.files.length; t += 1) i(e.baseurl + e.files[t])
                            }
                            n()
                        },
                        upload: function(e) {
                            var t;
                            if (e.files && e.files.length)
                                for (t = 0; t < e.files.length; t += 1) i(e.baseurl + e.files[t]);
                            n()
                        },
                        url: function(e, t) {
                            r ? (r.setAttribute("href", e), r.setAttribute("title", t)) : i(e, t), n()
                        }
                    }, r, n, !1)
                },
                tags: ["a"],
                tooltip: "Insert file"
            },
            video: {
                popup: function(t, e, o, n) {
                    var i = c.dom('<form class="jodit_form">\n                        <input required name="code" placeholder="http://" type="url"/>\n                        <button type="submit">' + t.i18n("Insert") + "</button>\n                        </form>", t.ownerDocument),
                        r = c.dom('<form class="jodit_form">\n                        <textarea required name="code" placeholder="' + t.i18n("Embed code") + '"></textarea>\n                        <button type="submit">' + t.i18n("Insert") + "</button>\n                        </form>", t.ownerDocument),
                        a = {},
                        s = t.selection.save(),
                        l = function(e) {
                            t.selection.restore(s), t.selection.insertHTML(e), n()
                        };
                    return t.options.textIcons ? (a[t.i18n("Link")] = i, a[t.i18n("Code")] = r) : (a[u.ToolbarIcon.getIcon("link") + "&nbsp;" + t.i18n("Link")] = i, a[u.ToolbarIcon.getIcon("source") + "&nbsp;" + t.i18n("Code")] = r), r.addEventListener("submit", function(e) {
                        return e.preventDefault(), c.trim(c.val(r, "textarea[name=code]")) ? l(c.val(r, "textarea[name=code]")) : (r.querySelector("textarea[name=code]").focus(), r.querySelector("textarea[name=code]").classList.add("jodit_error")), !1
                    }), i.addEventListener("submit", function(e) {
                        return e.preventDefault(), c.isURL(c.val(i, "input[name=code]")) ? l(c.convertMediaURLToVideoEmbed(c.val(i, "input[name=code]"))) : (i.querySelector("input[name=code]").focus(), i.querySelector("input[name=code]").classList.add("jodit_error")), !1
                    }), d(t, a)
                },
                tags: ["iframe"],
                tooltip: "Insert youtube/vimeo video"
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.INVISIBLE_SPACE = "\ufeff", t.INVISIBLE_SPACE_REG_EXP = /[\uFEFF]/g, t.INVISIBLE_SPACE_REG_EXP_END = /[\uFEFF]+$/g, t.INVISIBLE_SPACE_REG_EXP_START = /^[\uFEFF]+/g, t.SPACE_REG_EXP = /[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_START = /^[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_END = /[\s\n\t\r\uFEFF\u200b]+$/g, t.IS_BLOCK = /^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE)$/i, t.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/, t.MAY_BE_REMOVED_WITH_KEY = /^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|HR|JODIT|JODIT-MEDIA)$/, t.KEY_BACKSPACE = 8, t.KEY_TAB = 9, t.KEY_ENTER = 13, t.KEY_ESC = 27, t.KEY_LEFT = 37, t.KEY_UP = 38, t.KEY_RIGHT = 39, t.KEY_DOWN = 40, t.KEY_DELETE = 46, t.KEY_F = 70, t.KEY_R = 82, t.KEY_H = 72, t.KEY_Y = 89, t.KEY_V = 86, t.KEY_Z = 90, t.KEY_F3 = 114, t.NEARBY = 5, t.ACCURACY = 10, t.COMMAND_KEYS = [t.KEY_BACKSPACE, t.KEY_DELETE, t.KEY_UP, t.KEY_DOWN, t.KEY_RIGHT, t.KEY_LEFT, t.KEY_ENTER, t.KEY_ESC, t.KEY_F3, t.KEY_TAB], t.BR = "br", t.PARAGRAPH = "P", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.URL_LIST = "undefined" == typeof navigator || -1 == navigator.userAgent.indexOf("MSIE") && !/rv:11.0/i.test(navigator.userAgent) ? "text/uri-list" : "url", t.TEXT_PLAIN = "undefined" == typeof navigator || -1 == navigator.userAgent.indexOf("MSIE") && !/rv:11.0/i.test(navigator.userAgent) ? "text/plain" : "text", t.TEXT_HTML = "undefined" == typeof navigator || -1 == navigator.userAgent.indexOf("MSIE") && !/rv:11.0/i.test(navigator.userAgent) ? "text/html" : "text", t.MARKER_CLASS = "jodit_selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell", t.INSERT_AS_HTML = "insert_as_html", t.INSERT_CLEAR_HTML = "insert_clear_html", t.INSERT_AS_TEXT = "insert_as_text", t.INSERT_ONLY_TEXT = "insert_only_text", t.IS_MAC = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t.KEY_ALIASES = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: t.IS_MAC ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(2),
            a = o(0),
            n = function() {
                function d() {}
                return d.detach = function(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }, d.unwrap = function(e) {
                    var t = e.parentNode,
                        o = e;
                    if (t) {
                        for (; o.firstChild;) t.insertBefore(o.firstChild, o);
                        t.removeChild(o)
                    }
                }, d.each = function(e, t) {
                    var o = e.firstChild;
                    if (o)
                        for (; o;) {
                            if (!1 === t.call(o, o) || !1 === d.each(o, t)) return !1;
                            o = d.next(o, function(e) {
                                return !!e
                            }, e)
                        }
                    return !0
                }, d.create = function(e, t, o) {
                    var n;
                    return "text" === (e = e.toLowerCase()) ? n = o.createTextNode("string" == typeof t ? t : "") : (n = o.createElement(e), void 0 !== t && (n.innerHTML = t)), n
                }, d.replace = function(e, t, o, n, i) {
                    void 0 === o && (o = !1), void 0 === n && (n = !1);
                    var r = "string" == typeof t ? i.createElement(t) : t;
                    if (!n)
                        for (; e.firstChild;) r.appendChild(e.firstChild);
                    return o && a.each(e.attributes, function(e, t) {
                        r.setAttribute(t.name, t.nodeValue)
                    }), e.parentNode && e.parentNode.replaceChild(r, e), r
                }, d.isCell = function(e, t) {
                    return d.isNode(e, t) && /^(td|th)$/i.test(e.nodeName)
                }, d.isImage = function(e, t) {
                    return d.isNode(e, t) && /^(img|svg|picture|canvas)$/i.test(e.nodeName)
                }, d.isBlock = function(e) {
                    return !!e && "string" == typeof e.nodeName && i.IS_BLOCK.test(e.nodeName)
                }, d.isInlineBlock = function(e) {
                    return !!e && e.nodeType === Node.ELEMENT_NODE && -1 != ["inline", "inline-block"].indexOf("" + a.css(e, "display"))
                }, d.canSplitBlock = function(e, t) {
                    return e && e instanceof t.HTMLElement && this.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && void 0 !== e.style && !/^(fixed|absolute)/i.test(e.style.position)
                }, d.prev = function(e, t, o, n) {
                    return void 0 === n && (n = !0), d.find(e, t, o, !1, "previousSibling", !!n && "lastChild")
                }, d.next = function(e, t, o, n) {
                    return void 0 === n && (n = !0), d.find(e, t, o, void 0, void 0, n ? "firstChild" : "")
                }, d.find = function(e, t, o, n, i, r) {
                    if (void 0 === n && (n = !1), void 0 === i && (i = "nextSibling"), void 0 === r && (r = "firstChild"), n && t(e)) return e;
                    var a, s = e;
                    do {
                        if (t(a = s[i])) return a || !1;
                        if (r && a && a[r]) {
                            var l = d.find(a[r], t, a, !0, i, r);
                            if (l) return l
                        }
                        a || (a = s.parentNode), s = a
                    } while (s && s !== o);
                    return !1
                }, d.findWithCurrent = function(e, t, o, n, i) {
                    void 0 === n && (n = "nextSibling"), void 0 === i && (i = "firstChild");
                    var r = e;
                    do {
                        if (t(r)) return r || !1;
                        if (i && r && r[i]) {
                            var a = d.findWithCurrent(r[i], t, r, n, i);
                            if (a) return a
                        }
                        for (; r && !r[n] && r !== o;) r = r.parentNode;
                        r && r[n] && r !== o && (r = r[n])
                    } while (r && r !== o);
                    return !1
                }, d.isEmptyTextNode = function(e) {
                    return e && e.nodeType === Node.TEXT_NODE && (!e.nodeValue || 0 === e.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP, "").length)
                }, d.isEmpty = function(e, t) {
                    return void 0 === t && (t = /^(img|svg|canvas|input|textarea|form)$/), !e || (e.nodeType === Node.TEXT_NODE ? null === e.nodeValue || 0 === a.trim(e.nodeValue).length : !e.nodeName.toLowerCase().match(t) && d.each(e, function(e) {
                        if (e && e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && 0 !== a.trim(e.nodeValue).length || e && e.nodeType === Node.ELEMENT_NODE && e.nodeName.toLowerCase().match(t)) return !1
                    }))
                }, d.isNode = function(e, t) {
                    return "object" == typeof t ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                }, d.up = function(e, t, o) {
                    var n = e;
                    if (!e) return !1;
                    do {
                        if (t(n)) return n;
                        if (n === o || !n.parentNode) break;
                        n = n.parentNode
                    } while (n && n !== o);
                    return !1
                }, d.closest = function(e, t, o) {
                    return d.up(e, "function" == typeof t ? t : t instanceof RegExp ? function(e) {
                        return t.test(e.nodeName)
                    } : function(e) {
                        return RegExp("^(" + t + ")$", "i").test(e.nodeName)
                    }, o)
                }, d.after = function(e, t) {
                    var o = e.parentNode;
                    o && (o.lastChild === e ? o.appendChild(t) : o.insertBefore(t, e.nextSibling))
                }, d.moveContent = function(e, t, o) {
                    void 0 === o && (o = !1);
                    var n = (e.ownerDocument || document).createDocumentFragment();
                    [].slice.call(e.childNodes).forEach(function(e) {
                        e.nodeType === Node.TEXT_NODE && e.nodeValue === i.INVISIBLE_SPACE || n.appendChild(e)
                    }), o && t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)
                }, d.all = function(e, t, o) {
                    void 0 === o && (o = !1);
                    var n = e.childNodes ? Array.prototype.slice.call(e.childNodes) : [];
                    if (t(e)) return e;
                    o && (n = n.reverse()), n.forEach(function(e) {
                        d.all(e, t, o)
                    })
                }, d.wrapInline = function(e, t, o) {
                    for (var n, i = e, r = e, a = o.selection.save(), s = !1; s = !1, (n = i.previousSibling) && !d.isBlock(n) && (s = !0, i = n), s;);
                    for (; s = !1, (n = r.nextSibling) && !d.isBlock(n) && (s = !0, r = n), s;);
                    var l = "string" == typeof t ? o.editorDocument.createElement(t) : t;
                    i.parentNode && i.parentNode.insertBefore(l, i);
                    for (var c = i; c && (c = i.nextSibling, l.appendChild(i), i !== r && c);) i = c;
                    return o.selection.restore(a), l
                }, d.wrap = function(e, t, o) {
                    var n = o.selection.save(),
                        i = "string" == typeof t ? o.editorDocument.createElement(t) : t;
                    return e.parentNode ? (e.parentNode.insertBefore(i, e), i.appendChild(e), o.selection.restore(n), i) : null
                }, d.findInline = function(e, t, o) {
                    var n = e,
                        i = null;
                    do {
                        if (!n) break;
                        if ((i = t ? n.previousSibling : n.nextSibling) || !n.parentNode || n.parentNode === o || !d.isInlineBlock(n.parentNode)) break;
                        n = n.parentNode
                    } while (!i);
                    for (; i && d.isInlineBlock(i) && (t ? i.lastChild : i.firstChild);) i = t ? i.lastChild : i.firstChild;
                    return i
                }, d.contains = function(e, t) {
                    for (; t.parentNode;) {
                        if (t.parentNode === e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }, d.isOrContains = function(e, t, o) {
                    return void 0 === o && (o = !1), t && e && (e === t && !o || d.contains(e, t))
                }, d
            }();
        t.Dom = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(5),
            i = function() {
                function e(e) {
                    var t = this;
                    this.__whoLocked = "", this.isLocked = function() {
                        return "" !== t.__whoLocked
                    }, this.isLockedNotBy = function(e) {
                        return t.isLocked() && t.__whoLocked !== e
                    }, this.__modulesInstances = {}, this.isDestructed = !1, e && (this.jodit = e) instanceof n.Jodit && this.jodit.components && this.jodit.components.push(this)
                }
                return e.prototype.destruct = function() {}, e.prototype.getInstance = function(e, t) {
                    if (void 0 === n.Jodit.modules[e]) throw Error("Need real module name");
                    return void 0 === this.__modulesInstances[e] && (this.__modulesInstances[e] = new n.Jodit.modules[e](this, t)), this.__modulesInstances[e]
                }, e
            }();
        t.Component = i
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            r = this && this.__awaiter || function(r, a, s, l) {
                return new(s || (s = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            i(l.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(e) {
                        try {
                            i(l.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(t) {
                        t.done ? e(t.value) : new s(function(e) {
                            e(t.value)
                        }).then(o, n)
                    }
                    i((l = l.apply(r, a || [])).next())
                })
            },
            a = this && this.__generator || function(o, n) {
                var i, r, a, e, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                                switch (r = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || a[0] < t[1] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = n.call(o, s)
                            } catch (e) {
                                t = [6, e], r = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(17),
            l = o(11),
            c = o(3),
            d = o(13),
            u = o(2),
            p = o(0),
            f = o(0),
            h = o(1),
            m = o(34),
            v = o(22),
            g = o(23),
            b = o(8),
            Jodit = function(o) {
                function Jodit(t, n) {
                    var i = o.call(this) || this;
                    if (i.version = "3.2.24", i.components = [], i.storage = new v.Storage(new v.localStorageProvider), i.iframe = null, i.__plugins = {}, i.__defaultStyleDisplayKey = "data-jodit-default-style-display", i.__defaultClassesKey = "data-jodit-default-classes", i.commands = {}, i.__selectionLocked = null, i.isLockedNotBy = function(e) {
                            return i.isLocked() && i.__whoLocked !== e
                        }, i.mode = u.MODE_WYSIWYG, i.getVersion = function() {
                            return i.version
                        }, i.__wasReadOnly = !1, i.buffer = {}, i.options = new h.OptionsDefault(n), i.editorDocument = i.options.ownerDocument, i.editorWindow = i.options.ownerWindow, i.ownerDocument = i.options.ownerDocument, i.ownerWindow = i.options.ownerWindow, i.events = new d.EventsNative(i.ownerDocument), "string" == typeof t) try {
                        i.element = i.ownerDocument.querySelector(t)
                    } catch (e) {
                        throw Error('String "' + t + '" should be valid HTML selector')
                    } else i.element = t;
                    if (!i.element || "object" != typeof i.element || i.element.nodeType !== Node.ELEMENT_NODE || !i.element.cloneNode) throw Error('Element "' + t + '" should be string or HTMLElement instance');
                    i.element.attributes && [].slice.call(i.element.attributes).forEach(function(e) {
                        var t = e.name,
                            o = e.value;
                        void 0 === Jodit.defaultOptions[t] || n && void 0 !== n[t] || (-1 != ["readonly", "disabled"].indexOf(t) && (o = "" === o || "true" === o), /^[0-9]+(\.)?([0-9]+)?$/.test("" + o) && (o = +o), i.options[t] = o)
                    }), i.options.events && Object.keys(i.options.events).forEach(function(e) {
                        i.events.on(e, i.options.events[e])
                    }), i.selection = new s.Select(i), i.uploader = new l.Uploader(i), i.observer = new g.Observer(i), i.container = p.dom('<div contenteditable="false" class="jodit_container" />', i.ownerDocument);
                    var e = null;
                    return i.options.inline && (-1 == ["TEXTAREA", "INPUT"].indexOf(i.element.nodeName) && (i.container = i.element, i.element.setAttribute(i.__defaultClassesKey, "" + i.element.className), e = i.container.innerHTML, i.container.innerHTML = ""), i.container.classList.add("jodit_inline"), i.container.classList.add("jodit_container")), i.container.classList.add("jodit_" + (i.options.theme || "default") + "_theme"), i.options.zIndex && (i.container.style.zIndex = "" + parseInt("" + i.options.zIndex, 10)), i.workplace = p.dom('<div contenteditable="false" class="jodit_workplace" />', i.ownerDocument), i.progress_bar = p.dom('<div class="jodit_progress_bar"><div></div></div>', i.ownerDocument), i.toolbar = new b.ToolbarCollection(i), i.options.toolbar && i.toolbar.build(p.splitArray(i.options.buttons).concat(i.options.extraButtons), i.container), i.container.classList.add("jodit_toolbar_size-" + (-1 != ["middle", "large", "small"].indexOf(i.options.toolbarButtonSize.toLowerCase()) ? i.options.toolbarButtonSize.toLowerCase() : "middle")), i.options.textIcons && i.container.classList.add("jodit_text_icons"), i.events.on(i.ownerWindow, "resize", function() {
                        i.events && i.events.fire("resize")
                    }), i.container.appendChild(i.workplace), i.statusbar = new m.StatusBar(i, i.container), i.workplace.appendChild(i.progress_bar), i.element.parentNode && i.element !== i.container && i.element.parentNode.insertBefore(i.container, i.element), i.helper = f, i.id = i.element.getAttribute("id") || "" + (new Date).getTime(), i.__initPlugines(), i.__initEditor(e).then(function() {
                        return r(i, void 0, void 0, function() {
                            return a(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.events.fire("afterInit", this)];
                                    case 1:
                                        return e.sent(), this.events.fire("afterConstructor", this), [2]
                                }
                            })
                        })
                    }), i
                }
                return i(Jodit, o), Jodit.prototype.__initEditor = function(n) {
                    return r(this, void 0, void 0, function() {
                        var t, o;
                        return a(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.__createEditor()];
                                case 1:
                                    e.sent(), this.element !== this.container ? this.setElementValue() : null !== n && this.setEditorValue(n), t = (Jodit.instances[this.id] = this).options.defaultMode, this.options.saveModeInStorage && null !== (o = this.storage.get("jodit_default_mode")) && (t = parseInt(o, 10)), this.setMode(t), this.options.readonly && this.setReadOnly(!0), this.options.disabled && this.setDisabled(!0);
                                    try {
                                        this.editorDocument.execCommand("defaultParagraphSeparator", !1, this.options.enter.toLowerCase())
                                    } catch (e) {}
                                    try {
                                        this.editorDocument.execCommand("enableObjectResizing", !1, "false")
                                    } catch (e) {}
                                    try {
                                        this.editorDocument.execCommand("enableInlineTableEditing", !1, "false")
                                    } catch (e) {}
                                    return [2]
                            }
                        })
                    })
                }, Jodit.prototype.__initPlugines = function() {
                    var t = this,
                        o = Array.isArray(this.options.disablePlugins) ? this.options.disablePlugins.map(function(e) {
                            return e.toLowerCase()
                        }) : this.options.disablePlugins.toLowerCase().split(/[\s,]+/);
                    Object.keys(Jodit.plugins).forEach(function(e) {
                        -1 == o.indexOf(e.toLowerCase()) && (t.__plugins[e] = new Jodit.plugins[e](t))
                    })
                }, Jodit.prototype.__createEditor = function() {
                    return r(this, void 0, void 0, function() {
                        var t = this;
                        return a(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.events.fire("createEditor", this)];
                                case 1:
                                    return !1 !== e.sent() && (this.editor = p.dom('<div class="jodit_wysiwyg" contenteditable aria-disabled="false" tabindex="' + this.options.tabIndex + '"></div>', this.ownerDocument), this.workplace.appendChild(this.editor)), this.options.editorCssClass && this.editor.classList.add(this.options.editorCssClass), this.events.on("synchro", function() {
                                        t.setEditorValue()
                                    }).on(this.editor, "selectionchange selectionstart keydown keyup keypress mousedown mouseup mousepress click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", function(e) {
                                        if (!t.options.readonly && t.events && t.events.fire) {
                                            if (!1 === t.events.fire(e.type, e)) return !1;
                                            t.setEditorValue()
                                        }
                                    }), this.options.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.options.direction && (this.editor.style.direction = "rtl" === this.options.direction.toLowerCase() ? "rtl" : "ltr"), this.element !== this.container && (this.element.style.display && this.element.setAttribute(this.__defaultStyleDisplayKey, this.element.style.display), this.element.style.display = "none"), this.options.triggerChangeEvent && this.events.on("change", p.debounce(function() {
                                        t.events && t.events.fire(t.element, "change")
                                    }, this.defaultTimeout)), [2]
                            }
                        })
                    })
                }, Jodit.prototype.destruct = function() {
                    var t = this;
                    if (!this.isDestructed && !(this.isDestructed = !0) !== this.events.fire("beforeDestruct") && this.editor) {
                        var e = this.getEditorValue();
                        this.element !== this.container ? this.element.hasAttribute(this.__defaultStyleDisplayKey) ? (this.element.style.display = this.element.getAttribute(this.__defaultStyleDisplayKey), this.element.removeAttribute(this.__defaultStyleDisplayKey)) : this.element.style.display = "" : this.element.hasAttribute(this.__defaultClassesKey) && (this.element.className = this.element.getAttribute(this.__defaultClassesKey) || "", this.element.removeAttribute(this.__defaultClassesKey)), this.element.hasAttribute("style") && !this.element.getAttribute("style") && this.element.removeAttribute("style"), Object.keys(this.__plugins).forEach(function(e) {
                            void 0 !== t.__plugins && void 0 !== t.__plugins[e] && void 0 !== t.__plugins[e].destruct && "function" == typeof t.__plugins[e].destruct && t.__plugins[e].destruct(), delete t.__plugins[e]
                        }), this.components.forEach(function(e) {
                            void 0 !== e.destruct && "function" == typeof e.destruct && e.destruct()
                        }), delete this.selection, this.events.off(this.ownerWindow), this.events.off(this.ownerDocument), this.events.off(this.ownerDocument.body), this.events.off(this.element), this.events.off(this.editor), this.events.destruct(), delete this.events, this.workplace.parentNode && this.workplace.parentNode.removeChild(this.workplace), this.editor.parentNode && this.editor.parentNode.removeChild(this.editor), this.iframe && this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.container.parentNode && this.container !== this.element && this.container.parentNode.removeChild(this.container), delete this.editor, delete this.workplace, this.container === this.element && (this.element.innerHTML = e), delete Jodit.instances[this.id], delete this.container
                    }
                }, Jodit.prototype.getElementValue = function() {
                    return void 0 !== this.element.value ? this.element.value : this.element.innerHTML
                }, Jodit.prototype.getNativeEditorValue = function() {
                    return this.editor ? this.editor.innerHTML : this.getElementValue()
                }, Jodit.prototype.getEditorValue = function(e) {
                    var t;
                    if (void 0 === e && (e = !0), void 0 !== (t = this.events.fire("beforeGetValueFromEditor"))) return t;
                    t = this.getNativeEditorValue().replace(u.INVISIBLE_SPACE_REG_EXP, ""), e && (t = t.replace(/<span[^>]+id="jodit_selection_marker_[^>]+><\/span>/g, "")), "<br>" === t && (t = "");
                    var o = {
                        value: t
                    };
                    return this.events.fire("afterGetValueFromEditor", o), o.value
                }, Jodit.prototype.getEditorText = function() {
                    if (this.editor) return this.editor.innerText;
                    var e = this.ownerDocument.createElement("div");
                    return e.innerHTML = this.getElementValue(), e.innerText
                }, Jodit.prototype.setElementValue = function(e) {
                    if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                    void 0 !== e ? this.element !== this.container && (void 0 !== this.element.value ? this.element.value = e : this.element.innerHTML = e) : e = this.getElementValue(), e !== this.getEditorValue() && this.setEditorValue(e)
                }, Jodit.prototype.setEditorValue = function(e) {
                    var t = this.events.fire("beforeSetValueToEditor", e);
                    if (!1 !== t)
                        if ("string" == typeof t && (e = t), this.editor) {
                            if ("string" != typeof e && void 0 !== e) throw Error("value must be string");
                            void 0 !== e && this.editor.innerHTML !== e && (this.editor.innerHTML = e);
                            var o = this.getElementValue(),
                                n = this.getEditorValue();
                            o !== n && (this.setElementValue(n), this.events.fire("change", n, o))
                        } else void 0 !== e && this.setElementValue(e)
                }, Object.defineProperty(Jodit.prototype, "value", {
                    get: function() {
                        return this.getEditorValue()
                    },
                    set: function(e) {
                        this.setEditorValue(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Jodit.prototype.execCustomCommands = function(o, n, i) {
                    var r = this;
                    if (void 0 === n && (n = !1), void 0 === i && (i = null), o = o.toLowerCase(), void 0 !== this.commands[o]) {
                        var a = void 0;
                        return this.commands[o].forEach(function(e) {
                            var t = ("function" == typeof e ? e : e.exec).call(r, o, n, i);
                            void 0 !== t && (a = t)
                        }), a
                    }
                }, Jodit.prototype.registerCommand = function(e, t) {
                    var o = e.toLowerCase();
                    if (void 0 === this.commands[o] && (this.commands[o] = []), this.commands[o].push(t), "function" != typeof t) {
                        var n = this.options.commandToHotkeys[o] || this.options.commandToHotkeys[e] || t.hotkeys;
                        n && this.registerHotkeyToCommand(n, o)
                    }
                }, Jodit.prototype.registerHotkeyToCommand = function(e, t) {
                    var o = this,
                        n = p.asArray(e).map(p.normalizeKeyAliases);
                    this.events.off(n.map(function(e) {
                        return e + ".hotkey"
                    }).join(" ")).on(n.map(function(e) {
                        return e + ".hotkey"
                    }).join(" "), function() {
                        return o.execCommand(t)
                    })
                }, Jodit.prototype.execCommand = function(e, t, o) {
                    if (void 0 === t && (t = !1), void 0 === o && (o = null), !this.options.readonly || "selectall" === e) {
                        var n;
                        if (e = e.toLowerCase(), !1 !== (n = this.events.fire("beforeCommand", e, t, o)) && (n = this.execCustomCommands(e, t, o)), !1 !== n) switch (this.selection.focus(), e) {
                            case "selectall":
                                this.selection.select(this.editor, !0);
                                break;
                            default:
                                try {
                                    n = this.editorDocument.execCommand(e, t, o)
                                } catch (e) {}
                        }
                        return this.events.fire("afterCommand", e, t, o), this.setEditorValue(), n
                    }
                }, Jodit.prototype.lock = function(e) {
                    void 0 === e && (e = "any"), this.isLocked() || (this.__whoLocked = e, this.__selectionLocked = this.selection.save(), this.editor.classList.add("jodit_disabled"))
                }, Jodit.prototype.unlock = function() {
                    this.isLocked() && (this.__whoLocked = "", this.editor.classList.remove("jodit_disabled"), this.__selectionLocked && this.selection.restore(this.__selectionLocked))
                }, Jodit.prototype.getMode = function() {
                    return this.mode
                }, Jodit.prototype.isEditorMode = function() {
                    return this.getRealMode() === u.MODE_WYSIWYG
                }, Jodit.prototype.getRealMode = function() {
                    if (this.getMode() !== u.MODE_SPLIT) return this.getMode();
                    var e = this.ownerDocument.activeElement;
                    return e && (c.Dom.isOrContains(this.editor, e) || c.Dom.isOrContains(this.toolbar.container, e)) ? u.MODE_WYSIWYG : u.MODE_SOURCE
                }, Jodit.prototype.setMode = function(e) {
                    var t = this,
                        o = this.getMode(),
                        n = {
                            mode: parseInt("" + e, 10)
                        },
                        i = ["jodit_wysiwyg_mode", "jodit_source_mode", "jodit_split_mode"];
                    !1 !== this.events.fire("beforeSetMode", n) && (this.mode = p.inArray(n.mode, [u.MODE_SOURCE, u.MODE_WYSIWYG, u.MODE_SPLIT]) ? n.mode : u.MODE_WYSIWYG, this.options.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), i.forEach(function(e) {
                        t.container.classList.remove(e)
                    }), this.container.classList.add(i[this.mode - 1]), o !== this.getMode() && this.events.fire("afterSetMode"))
                }, Jodit.prototype.toggleMode = function() {
                    var e = this.getMode();
                    p.inArray(e + 1, [u.MODE_SOURCE, u.MODE_WYSIWYG, this.options.useSplitMode ? u.MODE_SPLIT : 9]) ? e += 1 : e = u.MODE_WYSIWYG, this.setMode(e)
                }, Jodit.prototype.i18n = function(e) {
                    for (var t = this, o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
                    var i, r = void 0 !== this.options && this.options.debugLanguage,
                        a = function(e) {
                            return o.length ? p.sprintf.apply(t, [e].concat(o)) : e
                        },
                        s = "auto" === Jodit.defaultOptions.language ? p.defaultLanguage(Jodit.defaultOptions.language) : Jodit.defaultOptions.language,
                        l = p.defaultLanguage(this.options ? this.options.language : s);
                    return i = void 0 !== this.options && void 0 !== Jodit.lang[l] ? Jodit.lang[l] : void 0 !== Jodit.lang[s] ? Jodit.lang[s] : Jodit.lang.en, void 0 !== this.options && void 0 !== this.options.i18n[l] && this.options.i18n[l][e] ? a(this.options.i18n[l][e]) : "string" == typeof i[e] && i[e] ? a(i[e]) : r ? "{" + e + "}" : a("string" == typeof Jodit.lang.en[e] && Jodit.lang.en[e] ? Jodit.lang.en[e] : e)
                }, Jodit.prototype.setDisabled = function(e) {
                    this.options.disabled = e;
                    var t = this.__wasReadOnly;
                    this.setReadOnly(e || t), this.__wasReadOnly = t, this.editor && (this.editor.setAttribute("aria-disabled", "" + e), this.container.classList.toggle("jodit_disabled", e), this.events.fire("disabled", e))
                }, Jodit.prototype.getDisabled = function() {
                    return this.options.disabled
                }, Jodit.prototype.setReadOnly = function(e) {
                    this.__wasReadOnly !== e && (this.__wasReadOnly = e, (this.options.readonly = e) ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.events && this.events.fire("readonly", e))
                }, Jodit.prototype.getReadOnly = function() {
                    return this.options.readonly
                }, Object.defineProperty(Jodit.prototype, "defaultTimeout", {
                    get: function() {
                        return this.options && this.options.observer ? this.options.observer.timeout : Jodit.defaultOptions.observer.timeout
                    },
                    enumerable: !0,
                    configurable: !0
                }), Jodit.Array = function(e) {
                    return new p.JoditArray(e)
                }, Jodit.Object = function(e) {
                    return new p.JoditObject(e)
                }, Jodit.fireEach = function(n) {
                    for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
                    Object.keys(Jodit.instances).forEach(function(e) {
                        var t, o = Jodit.instances[e];
                        !o.isDestructed && o.events && (t = o.events).fire.apply(t, [n].concat(i))
                    })
                }, Jodit.plugins = {}, Jodit.modules = {}, Jodit.instances = {}, Jodit.lang = {}, Jodit
            }(o(19).View);
        t.Jodit = Jodit
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function o() {}
            return o.exists = function(e) {
                return void 0 !== o.icons[e]
            }, o.getIcon = function(e, t) {
                return void 0 === t && (t = "<span></span>"), void 0 !== o.icons[e] ? o.icons[e] : t
            }, o.icons = {}, o
        }();
        t.ToolbarIcon = n
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = o(5),
            s = o(1),
            p = o(0),
            l = o(2),
            c = o(13),
            f = o(6),
            r = o(19);
        s.Config.prototype.dialog = {
            resizable: !0,
            draggable: !0,
            buttons: ["dialog.close"],
            removeButtons: []
        }, s.Config.prototype.controls.dialog = {
            close: {
                icon: "cancel",
                exec: function(e) {
                    e.close()
                }
            },
            fullsize: {
                icon: "fullsize",
                getLabel: s.Config.prototype.controls.fullsize.getLabel,
                exec: function(e) {
                    e.toggleFullSize()
                }
            }
        };
        var h = function(r) {
            function e(e, t) {
                void 0 === t && (t = s.Config.prototype.dialog);
                var o = r.call(this, e, t) || this;
                o.lockSelect = function() {
                    o.container.classList.add("jodit_dialog_box-moved")
                }, o.unlockSelect = function() {
                    o.container.classList.remove("jodit_dialog_box-moved")
                }, o.destinition = document.body, o.document = document, o.window = window, o.destroyAfterClose = !1, o.moved = !1, o.iSetMaximization = !1, o.resizeble = !1, o.draggable = !1, o.startX = 0, o.startY = 0, o.startPoint = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                }, o.__isDestructed = !1, o.close = function(e) {
                    o.__isDestructed || (e && (e.stopImmediatePropagation(), e.preventDefault()), o.jodit && o.jodit.events && o.jodit.events.fire("beforeClose", o), o.container.classList && o.container.classList.remove("active"), o.iSetMaximization && o.maximization(!1), o.destroyAfterClose && o.destruct(), o.jodit && o.jodit.events && o.jodit.events.fire(o, "afterClose"))
                }, e && e instanceof u.Jodit && (o.window = e.ownerWindow, o.document = e.ownerDocument, e.events.on("beforeDestruct", function() {
                    o.destruct()
                })), o.events = e && e.events ? e.events : new c.EventsNative;
                var n = o;
                n.options = a({}, e && e.options ? e.options.dialog : s.Config.prototype.dialog, n.options), n.container = p.dom('<div style="z-index:' + n.options.zIndex + '" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><div class="jodit_dialog_header-title"></div><div class="jodit_dialog_header-toolbar"></div></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>' + (n.options.resizable ? '<div class="jodit_dialog_resizer"></div>' : "") + "</div></div>", o.document), e && e.id && n.container.setAttribute("data-editor_id", e.id), Object.defineProperty(n.container, "__jodit_dialog", {
                    value: n
                }), n.dialog = n.container.querySelector(".jodit_dialog"), n.resizer = n.container.querySelector(".jodit_dialog_resizer"), n.jodit && n.jodit.options && n.jodit.options.textIcons && n.container.classList.add("jodit_text_icons"), n.dialogbox_header = n.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-title"), n.dialogbox_content = n.container.querySelector(".jodit_dialog_content"), n.dialogbox_footer = n.container.querySelector(".jodit_dialog_footer"), n.dialogbox_toolbar = n.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-toolbar"), n.destinition.appendChild(n.container), n.container.addEventListener("close_dialog", n.close), n.toolbar.build(n.options.buttons, n.dialogbox_toolbar), n.events.on(o.window, "mousemove", n.onMouseMove.bind(n)).on(o.window, "mouseup", n.onMouseUp.bind(n)).on(o.window, "keydown", n.onKeyDown.bind(n)).on(o.window, "resize", n.onResize.bind(n));
                var i = n.container.querySelector(".jodit_dialog_header");
                return i && i.addEventListener("mousedown", n.onHeaderMouseDown.bind(n)), n.options.resizable && n.resizer.addEventListener("mousedown", n.onResizerMouseDown.bind(n)), u.Jodit.plugins.fullsize(n), o
            }
            return i(e, r), e.prototype.setSize = function(e, t) {
                e && p.css(this.dialog, "width", e), t && p.css(this.dialog, "height", t)
            }, e.prototype.setPosition = function(e, t) {
                var o = this.window.innerWidth / 2 - this.dialog.offsetWidth / 2,
                    n = this.window.innerHeight / 2 - this.dialog.offsetHeight / 2;
                void 0 !== e && void 0 !== t && (this.offsetX = e, this.offsetY = t, this.moved = 100 < Math.abs(e - o) || 100 < Math.abs(t - n)), this.dialog.style.left = (e || o) + "px", this.dialog.style.top = (t || n) + "px"
            }, e.prototype.setElements = function(o, e) {
                var n = this,
                    i = [];
                p.asArray(e).forEach(function(e) {
                    var t = p.dom(e, n.document);
                    i.push(t), t.parentNode !== o && o.appendChild(t)
                }), [].slice.call(o.childNodes).forEach(function(e) {
                    -1 == i.indexOf(e) && o.removeChild(e)
                })
            }, e.prototype.setTitle = function(e) {
                this.setElements(this.dialogbox_header, e)
            }, e.prototype.setContent = function(e) {
                this.setElements(this.dialogbox_content, e)
            }, e.prototype.setFooter = function(e) {
                this.setElements(this.dialogbox_footer, e), this.dialog.classList.toggle("with_footer", !!e)
            }, e.prototype.getZIndex = function() {
                return parseInt(this.container.style.zIndex || "0", 10)
            }, e.prototype.getMaxZIndexDialog = function() {
                var t, o, n = 0,
                    i = this;
                return p.$$(".jodit_dialog_box", this.destinition).forEach(function(e) {
                    t = e.__jodit_dialog, o = parseInt(p.css(e, "zIndex"), 10), t.isOpened() && !isNaN(o) && n < o && (i = t, n = o)
                }), i
            }, e.prototype.setMaxZIndex = function() {
                var t = 0,
                    o = 0;
                p.$$(".jodit_dialog_box", this.destinition).forEach(function(e) {
                    o = parseInt(p.css(e, "zIndex"), 10), t = Math.max(isNaN(o) ? 0 : o, t)
                }), this.container.style.zIndex = "" + (t + 1)
            }, e.prototype.maximization = function(t) {
                return "boolean" != typeof t && (t = !this.container.classList.contains("jodit_dialog_box-fullsize")), this.container.classList.toggle("jodit_dialog_box-fullsize", t), [this.destinition, this.destinition.parentNode].forEach(function(e) {
                    e && e.classList && e.classList.toggle("jodit_fullsize_box", t)
                }), this.iSetMaximization = t
            }, e.prototype.open = function(e, t, o, n) {
                this.jodit && this.jodit.events && !1 === this.jodit.events.fire(this, "beforeOpen") || (this.destroyAfterClose = !0 === o, void 0 !== t && this.setTitle(t), e && this.setContent(e), this.container.classList.add("active"), n && this.container.classList.add("jodit_modal"), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.options.fullsize && this.maximization(!0), this.jodit && this.jodit.events && this.jodit.events.fire("afterOpen", this))
            }, e.prototype.isOpened = function() {
                return !this.__isDestructed && this.container.classList.contains("active")
            }, e.prototype.onMouseUp = function() {
                (this.draggable || this.resizeble) && (this.draggable = !1, this.resizeble = !1, this.unlockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "endResize endMove"))
            }, e.prototype.onHeaderMouseDown = function(e) {
                var t = e.target;
                !this.options.draggable || t && t.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.x = p.css(this.dialog, "left"), this.startPoint.y = p.css(this.dialog, "top"), this.setMaxZIndex(), e.preventDefault(), this.lockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "startMove"))
            }, e.prototype.onMouseMove = function(e) {
                this.draggable && this.options.draggable && (this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "move", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault()), this.resizeble && this.options.resizable && (this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "resizeDialog", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault())
            }, e.prototype.onKeyDown = function(e) {
                if (this.isOpened() && e.which === l.KEY_ESC) {
                    var t = this.getMaxZIndexDialog();
                    t ? t.close() : this.close(), e.stopImmediatePropagation()
                }
            }, e.prototype.onResize = function() {
                !this.options.resizable || this.moved || !this.isOpened() || this.offsetX || this.offsetY || this.setPosition()
            }, e.prototype.destruct = function() {
                this.__isDestructed || (this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), delete this.container, this.jodit && this.jodit.events || this.events.destruct(), this.__isDestructed = !0)
            }, e.prototype.onResizerMouseDown = function(e) {
                this.resizeble = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.jodit.events && this.jodit.events.fire(this, "startResize")
            }, e
        }(r.View);
        t.Dialog = h, t.Alert = function(e, t, o, n) {
            void 0 === n && (n = "jodit_alert"), "function" == typeof t && (o = t, t = void 0);
            var i = new h,
                r = p.dom('<div class="' + n + '"></div>', i.document),
                a = p.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + f.ToolbarIcon.getIcon("cancel") + "<span>" + u.Jodit.prototype.i18n("Ok") + "</span></a>", i.document);
            return r.appendChild(p.dom(e, i.document)), a.addEventListener("click", function() {
                o && "function" == typeof o && !1 === o(i) || i.close()
            }), i.setFooter([a]), i.open(r, t || "&nbsp;", !0, !0), a.focus(), i
        }, u.Jodit.Alert = t.Alert, t.Promt = function(e, t, o, n) {
            var i = new h,
                r = p.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + f.ToolbarIcon.getIcon("cancel") + "<span>" + u.Jodit.prototype.i18n("Cancel") + "</span></a>", i.document),
                a = p.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + f.ToolbarIcon.getIcon("check") + "<span>" + u.Jodit.prototype.i18n("Ok") + "</span></a>", i.document),
                s = p.dom('<form class="jodit_promt"></form>', i.document),
                l = p.dom("<input autofocus/>", i.document),
                c = p.dom("<label></label>", i.document);
            "function" == typeof t && (o = t, t = void 0), n && l.setAttribute("placeholder", n), c.appendChild(p.dom(e, i.document)), s.appendChild(c), s.appendChild(l), r.addEventListener("click", i.close, !1);
            var d = function() {
                o && "function" == typeof o && !1 === o(l.value) || i.close()
            };
            return a.addEventListener("click", d), s.addEventListener("submit", function() {
                return d(), !1
            }), i.setFooter([a, r]), i.open(s, t || "&nbsp;", !0, !0), l.focus(), i
        }, u.Jodit.Promt = t.Promt, t.Confirm = function(e, t, o) {
            var n = new h,
                i = p.dom('<form class="jodit_promt"></form>', n.document),
                r = p.dom("<label></label>", n.document);
            "function" == typeof t && (o = t, t = void 0), r.appendChild(p.dom(e, n.document)), i.appendChild(r);
            var a = p.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + f.ToolbarIcon.getIcon("cancel") + "<span>" + u.Jodit.prototype.i18n("Cancel") + "</span></a>", n.document);
            a.addEventListener("click", function() {
                o && o(!1), n.close()
            });
            var s = function() {
                    o && o(!0), n.close()
                },
                l = p.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + f.ToolbarIcon.getIcon("check") + "<span>" + u.Jodit.prototype.i18n("Yes") + "</span></a>", n.document);
            return l.addEventListener("click", s), i.addEventListener("submit", function() {
                return s(), !1
            }), n.setFooter([l, a]), n.open(i, t || "&nbsp;", !0, !0), l.focus(), n
        }, u.Jodit.Confirm = t.Confirm
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(0),
            r = o(10),
            l = o(14),
            c = o(37),
            d = o(38),
            u = o(5),
            p = function(t) {
                function e(e) {
                    var r = t.call(this, e, "ul", "jodit_toolbar") || this;
                    return r.__buttons = [], r.__getControlType = function(e) {
                        var t, o = r.jodit.options.controls || u.Jodit.defaultOptions.controls;
                        if ("string" != typeof e) void 0 !== o[(t = a({
                            name: "empty"
                        }, e)).name] && (t = a({}, o[t.name], t));
                        else {
                            var n = e.split(/\./),
                                i = o;
                            1 < n.length && void 0 !== o[n[0]] && (i = o[n[0]], e = n[1]), t = void 0 !== i[e] ? a({
                                name: e
                            }, i[e]) : {
                                name: e,
                                command: e,
                                tooltip: e
                            }
                        }
                        return t
                    }, r.immedateCheckActiveButtons = function() {
                        r.jodit.isLocked() || (r.__buttons.filter(function(e) {
                            return e instanceof l.ToolbarButton
                        }).forEach(function(e) {
                            e.disable = e.isDisable(), e.disable || (e.active = e.isActive()), "function" == typeof e.control.getLabel && e.control.getLabel(r.jodit, e.control, e)
                        }), r.jodit.events && r.jodit.events.fire("updateToolbar"))
                    }, r.checkActiveButtons = s.debounce(r.immedateCheckActiveButtons, r.jodit.defaultTimeout), r.closeAll = function() {
                        r.jodit && r.jodit.events && r.jodit.events.fire("closeAllPopups")
                    }, r.listenEvents = "changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart", r.initEvents = function() {
                        r.jodit.events.on(r.jodit.ownerWindow, "mousedown touchend", r.closeAll).on(r.listenEvents, r.checkActiveButtons).on("afterSetMode focus", r.immedateCheckActiveButtons)
                    }, r.initEvents(), r
                }
                return i(e, t), e.prototype.getButtonsList = function() {
                    return this.__buttons.map(function(e) {
                        return e instanceof l.ToolbarButton ? e.control.name : ""
                    }).filter(function(e) {
                        return "" !== e
                    })
                }, e.prototype.appendChild = function(e) {
                    this.__buttons.push(e), (e.parentToolbar = this).container.appendChild(e.container)
                }, e.prototype.removeChild = function(e) {
                    var t = this.__buttons.indexOf(e); - 1 !== t && (this.__buttons.splice(t, 1), e.container.parentNode === this.container && this.container.removeChild(e.container)), e.parentToolbar = null
                }, e.prototype.build = function(e, t, o) {
                    var n = this,
                        i = !1;
                    this.clear(), ("string" == typeof e ? e.split(/[,\s]+/) : e).map(this.__getControlType).forEach(function(e) {
                        var t = null;
                        if (-1 == n.jodit.options.removeButtons.indexOf(e.name)) {
                            switch (e.name) {
                                case "\n":
                                    t = new c.ToolbarBreak(n.jodit);
                                    break;
                                case "|":
                                    i || (i = !0, t = new d.ToolbarSeparator(n.jodit));
                                    break;
                                default:
                                    i = !1, t = new l.ToolbarButton(n.jodit, e, o)
                            }
                            t && n.appendChild(t)
                        }
                    }), this.container.parentNode !== t && t.appendChild(this.container), this.immedateCheckActiveButtons()
                }, e.prototype.clear = function() {
                    var t = this;
                    this.__buttons.slice().forEach(function(e) {
                        t.removeChild(e), e.destruct()
                    }), this.__buttons.length = 0
                }, e.prototype.destruct = function() {
                    this.jodit.events.off(this.jodit.ownerWindow, "mousedown touchstart", this.closeAll).off(this.listenEvents, this.checkActiveButtons).off("afterSetMode focus", this.immedateCheckActiveButtons), this.clear(), t.prototype.destruct.call(this)
                }, e
            }(r.ToolbarElement);
        t.ToolbarCollection = p
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(o) {
            function e(e) {
                var t = o.call(this, e) || this;
                return e.events.on("afterInit", t.afterInit.bind(t, e)).on("beforeDestruct", t.beforeDestruct.bind(t, e)), t
            }
            return i(e, o), e.prototype.beforeDestruct = function(e) {}, e
        }(o(4).Component);
        t.Plugin = r
    }, function(e, t, o) {
        "use strict";
        var n, r = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(4),
            a = o(0),
            s = o(6),
            l = function(i) {
                function e(e, t, o) {
                    void 0 === t && (t = "li"), void 0 === o && (o = "jodit_toolbar_btn");
                    var n = i.call(this, e) || this;
                    return n.parentToolbar = null, n.container = n.jodit.ownerDocument.createElement(t), n.container.classList.add(o), n
                }
                return r(e, i), e.prototype.createIcon = function(e, t) {
                    var o = t ? t.icon || t.name : e;
                    if (this.jodit.options.textIcons) return a.dom('<span class="jodit_icon">' + this.jodit.i18n(t ? t.name : e) + "</span>", this.jodit.ownerDocument);
                    var n = this.jodit.events.fire("getIcon", o, t, e),
                        i = void 0;
                    return t && t.iconURL && void 0 === n ? (i = a.dom("<i></i>", this.jodit.ownerDocument)).style.backgroundImage = "url(" + t.iconURL + ")" : (void 0 === n && (n = s.ToolbarIcon.exists(o) ? s.ToolbarIcon.getIcon(o) : s.ToolbarIcon.getIcon("empty")), i = a.dom(n, this.jodit.ownerDocument)), i.classList.add("jodit_icon", "jodit_icon_" + e), i
                }, e
            }(i.Component);
        t.ToolbarElement = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = o(5),
            r = o(18),
            n = o(1),
            v = o(0),
            h = o(2),
            i = o(17);
        n.Config.prototype.enableDragAndDropFileToEditor = !0, n.Config.prototype.uploader = {
            url: "",
            insertImageAsBase64URI: !1,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            headers: null,
            data: null,
            format: "json",
            prepareData: function(e) {
                return e
            },
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            process: function(e) {
                return e.data
            },
            error: function(e) {
                this.jodit.events.fire("errorMessage", e.message, "error", 4e3)
            },
            defaultHandlerSuccess: function(a) {
                var s = this;
                a.files && a.files.length && a.files.forEach(function(e, t) {
                    var o = a.isImages && a.isImages[t] ? ["img", "src"] : ["a", "href"],
                        n = o[0],
                        i = o[1],
                        r = s.jodit.editorDocument.createElement(n);
                    r.setAttribute(i, a.baseurl + e), "a" === n && (r.innerText = a.baseurl + e), "img" === n ? s.selection.insertImage(r) : s.selection.insertNode(r)
                })
            },
            defaultHandlerError: function(e) {
                this.jodit.events.fire("errorMessage", e.message)
            },
            contentType: function(e) {
                return (void 0 === this.jodit.ownerWindow.FormData || "string" == typeof e) && "application/x-www-form-urlencoded; charset=UTF-8"
            }
        };
        var a = function() {
            function p(e, t) {
                var o = this;
                this.path = "", this.source = "default", this.jodit = e, this.selection = e instanceof f.Jodit ? e.selection : new i.Select(e), this.options = v.extend(!0, {}, n.Config.prototype.uploader, e instanceof f.Jodit ? e.options.uploader : null, t), e instanceof f.Jodit && e.options.enableDragAndDropFileToEditor && e.options.uploader && (e.options.uploader.url || e.options.uploader.insertImageAsBase64URI) && e.events.on("afterInit", function() {
                    o.bind(e.editor)
                })
            }
            return p.prototype.buildData = function(t) {
                if (this.options.buildData && "function" == typeof this.options.buildData) return this.options.buildData.call(this, t);
                if (void 0 === this.jodit.ownerWindow.FormData) return t;
                if (t instanceof FormData) return t;
                if ("string" == typeof t) return t;
                var o = new FormData;
                return Object.keys(t).forEach(function(e) {
                    o.append(e, t[e])
                }), o
            }, p.prototype.send = function(e, t) {
                var o = this,
                    n = this.buildData(e),
                    i = function(e) {
                        return new r.Ajax(o.jodit || o, {
                            xhr: function() {
                                var e = new XMLHttpRequest;
                                return void 0 !== o.jodit.ownerWindow.FormData && e.upload ? e.upload.addEventListener("progress", function(e) {
                                    if (e.lengthComputable) {
                                        var t = e.loaded / e.total;
                                        t *= 100, o.jodit.progress_bar.style.display = "block", o.jodit.progress_bar.style.width = t + "%", 100 === t && (o.jodit.progress_bar.style.display = "none")
                                    }
                                }, !1) : o.jodit.progress_bar.style.display = "none", e
                            },
                            method: "POST",
                            data: e,
                            url: o.options.url,
                            headers: o.options.headers,
                            queryBuild: o.options.queryBuild,
                            contentType: o.options.contentType.call(o, e),
                            dataType: o.options.format || "json"
                        }).send().then(t).catch(function(e) {
                            o.options.error.call(o, e)
                        })
                    };
                return n instanceof Promise ? n.then(i).catch(function(e) {
                    o.options.error.call(o, e)
                }) : i(n)
            }, p.prototype.sendFiles = function(e, n, t, o) {
                var i = this;
                if (!e) return Promise.reject(Error("Need files"));
                var r = this,
                    a = [].slice.call(e);
                if (!a.length) return Promise.reject(Error("Need files"));
                var s = [];
                if (this.options.insertImageAsBase64URI) {
                    var l, c = void 0,
                        d = function() {
                            if ((l = a[c]) && l.type) {
                                var e = l.type.match(/\/([a-z0-9]+)/i),
                                    t = e[1] ? e[1].toLowerCase() : "";
                                if (-1 != u.options.imagesExtensions.indexOf(t)) {
                                    var o = new FileReader;
                                    s.push(new Promise(function(t, e) {
                                        o.onerror = e, o.onloadend = function() {
                                            var e = {
                                                baseurl: "",
                                                files: [o.result],
                                                isImages: [!0]
                                            };
                                            "function" == typeof(n || r.options.defaultHandlerSuccess) && (n || r.options.defaultHandlerSuccess).call(r, e), t(e)
                                        }, o.readAsDataURL(l)
                                    })), a[c] = null
                                }
                            }
                        },
                        u = this;
                    for (c = 0; c < a.length; c += 1) d()
                }
                if ((a = a.filter(function(e) {
                        return e
                    })).length) {
                    var p = new FormData;
                    p.append("path", r.path), p.append("source", r.source);
                    var f = void 0;
                    for (c = 0; c < a.length; c += 1)
                        if ((f = a[c]) && f.type) {
                            var h = f.type.match(/\/([a-z0-9]+)/i),
                                m = h[1] ? h[1].toLowerCase() : "";
                            p.append("files", a[c], a[c].name || ("" + Math.random()).replace(".", "") + "." + m)
                        } o && o(p), r.options.data && v.isPlainObject(r.options.data) && Object.keys(r.options.data).forEach(function(e) {
                        p.append(e, r.options.data[e])
                    }), r.options.prepareData.call(this, p), s.push(r.send(p, function(e) {
                        i.options.isSuccess.call(r, e) ? "function" == typeof(n || r.options.defaultHandlerSuccess) && (n || r.options.defaultHandlerSuccess).call(r, r.options.process.call(r, e)) : (t || r.options.defaultHandlerError).call(r, Error(r.options.getMessage.call(r, e)))
                    }).then(function() {
                        i.jodit.events && i.jodit.events.fire("filesWereUploaded")
                    }))
                }
                return Promise.all(s)
            }, p.prototype.setPath = function(e) {
                this.path = e
            }, p.prototype.setSource = function(e) {
                this.source = e
            }, p.dataURItoBlob = function(e) {
                var t, o = atob(e.split(",")[1]),
                    n = e.split(",")[0].split(":")[1].split(";")[0],
                    i = new ArrayBuffer(o.length),
                    r = new Uint8Array(i);
                for (t = 0; t < o.length; t += 1) r[t] = o.charCodeAt(t);
                return new Blob([r], {
                    type: n
                })
            }, p.prototype.bind = function(t, l, c) {
                var d = this,
                    u = this,
                    e = function(e) {
                        var t, o, n, i = function(e) {
                            o && (e.append("extension", n), e.append("mimetype", o.type))
                        };
                        if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length) return d.sendFiles(e.clipboardData.files, l, c), !1;
                        if (v.browser("ff") || v.isIE()) {
                            if (e.clipboardData && !e.clipboardData.types.length && e.clipboardData.types[0] !== h.TEXT_PLAIN) {
                                var r = v.dom('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>', d.jodit.ownerDocument);
                                d.jodit.ownerDocument.body.appendChild(r);
                                var a = d.jodit && d.jodit instanceof f.Jodit ? d.jodit.selection.save() : null;
                                r.focus(), setTimeout(function() {
                                    var e = r.firstChild;
                                    if (r.parentNode && r.parentNode.removeChild(r), e && e.hasAttribute("src")) {
                                        var t = e.getAttribute("src") || "";
                                        a && d.jodit && d.jodit instanceof f.Jodit && d.jodit.selection.restore(a), u.sendFiles([p.dataURItoBlob(t)], l, c)
                                    }
                                }, 200)
                            }
                        } else if (e.clipboardData && e.clipboardData.items && e.clipboardData.items.length)
                            for (t = 0; t < e.clipboardData.items.length; t += 1)
                                if ("file" === e.clipboardData.items[t].kind && "image/png" === e.clipboardData.items[t].type) {
                                    if (o = e.clipboardData.items[t].getAsFile()) {
                                        var s = o.type.match(/\/([a-z0-9]+)/i);
                                        n = s[1] ? s[1].toLowerCase() : "", d.sendFiles([o], l, c, i)
                                    }
                                    e.preventDefault();
                                    break
                                }
                    };
                this.jodit && this.jodit.editor !== t ? u.jodit.events.on(t, "paste", e) : u.jodit.events.on("beforePaste", e);
                var o = function(e) {
                    return !(!e.dataTransfer || !e.dataTransfer.files || 0 === e.dataTransfer.files.length)
                };
                u.jodit.events.on(t, "dragend dragover dragenter dragleave drop", function(e) {
                    e.preventDefault()
                }).on(t, "dragover", function(e) {
                    o(e) && (t.classList.contains("jodit_draghover") || t.classList.add("jodit_draghover"), e.preventDefault())
                }).on(t, "dragend", function(e) {
                    o(e) && (t.classList.contains("jodit_draghover") && t.classList.remove("jodit_draghover"), e.preventDefault())
                }).on(t, "drop", function(e) {
                    t.classList.remove("jodit_draghover"), o(e) && e.dataTransfer && e.dataTransfer.files && (e.preventDefault(), e.stopImmediatePropagation(), d.sendFiles(e.dataTransfer.files, l, c))
                });
                var n = t.querySelector("input[type=file]");
                n && u.jodit.events.on(n, "change", function() {
                    u.sendFiles(this.files, l, c).then(function() {
                        n.value = "", /safari/i.test(navigator.userAgent) || (n.type = "", n.type = "file")
                    })
                })
            }, p.prototype.uploadRemoteImage = function(e, t, o) {
                var n = this,
                    i = this;
                i.send({
                    action: "fileUploadRemote",
                    url: e
                }, function(e) {
                    if (i.options.isSuccess.call(i, e)) "function" == typeof t ? t.call(i, n.options.process.call(n, e)) : n.options.defaultHandlerSuccess.call(i, n.options.process.call(n, e));
                    else if ("function" == typeof(o || i.options.defaultHandlerError)) return void(o || n.options.defaultHandlerError).call(i, Error(i.options.getMessage.call(n, e)))
                })
            }, p
        }();
        t.Uploader = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u, p = o(5),
            f = o(0),
            c = o(3),
            h = o(11);
        (u = t.Widget || (t.Widget = {})).ColorPickerWidget = function(r, a, e) {
            var n = f.normalizeColor(e),
                s = f.dom('<div class="jodit_colorpicker"></div>', r.ownerDocument),
                i = r.options.textIcons ? "" : p.Jodit.modules.ToolbarIcon.getIcon("eye"),
                t = r.options.textIcons ? "<span>" + r.i18n("eraser") + "</span>" : p.Jodit.modules.ToolbarIcon.getIcon("eraser"),
                l = function(t) {
                    var o = [];
                    return f.isPlainObject(t) ? Object.keys(t).forEach(function(e) {
                        o.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-' + e + '">'), o.push(l(t[e])), o.push("</div>")
                    }) : Array.isArray(t) && t.forEach(function(e) {
                        o.push("<a " + (n === e ? ' class="active" ' : "") + ' title="' + e + '" style="background-color:' + e + '" data-color="' + e + '" href="javascript:void(0)">' + (n === e ? i : "") + "</a>")
                    }), o.join("")
                };
            return s.appendChild(f.dom("<div>" + l(r.options.colors) + "</div>", r.ownerDocument)), s.appendChild(f.dom("<a " + (r.options.textIcons ? 'class="jodit_text_icon"' : "") + ' data-color="" href="javascript:void(0)">' + t + "</a>", r.ownerDocument)), r.events.on(s, "mousedown touchend", function(e) {
                e.stopPropagation();
                var t = e.target;
                if ("SVG" !== t.tagName.toUpperCase() && "PATH" !== t.tagName.toUpperCase() || !t.parentNode || (t = c.Dom.closest(t.parentNode, "A", r.editor)), "A" === t.tagName.toUpperCase()) {
                    var o = s.querySelector("a.active");
                    o && (o.classList.remove("active"), o.innerHTML = "");
                    var n = t.getAttribute("data-color") || "";
                    if (n) {
                        t.innerHTML = p.Jodit.modules.ToolbarIcon.getIcon("eye"), t.classList.add("active");
                        var i = f.hexToRgb(n);
                        i && (t.firstChild.style.fill = "rgb(" + (255 - i.r) + "," + (255 - i.g) + "," + (255 - i.b) + ")")
                    }
                    a && "function" == typeof a && a(n), e.preventDefault()
                }
            }), s
        }, u.TabsWidget = function(r, e, a) {
            var t = f.dom('<div class="jodit_tabs"></div>', r.ownerDocument),
                s = f.dom('<div class="jodit_tabs_wrapper"></div>', r.ownerDocument),
                l = f.dom('<div class="jodit_tabs_buttons"></div>', r.ownerDocument),
                c = {},
                d = "",
                u = 0;
            return t.appendChild(l), t.appendChild(s), f.each(e, function(t, o) {
                var n = f.dom('<div class="jodit_tab"></div>', r.ownerDocument),
                    i = f.dom('<a href="javascript:void(0);"></a>', r.ownerDocument);
                d || (d = t), i.innerHTML = r.i18n(t), l.appendChild(i), n.appendChild(f.dom("function" != typeof o ? o : '<div class="jodit_tab_empty"></div>', r.ownerDocument)), s.appendChild(n), r.events.on(i, "mousedown touchend", function(e) {
                    return f.$$("a", l).forEach(function(e) {
                        e.classList.remove("active")
                    }), f.$$(".jodit_tab", s).forEach(function(e) {
                        e.classList.remove("active")
                    }), i.classList.add("active"), n.classList.add("active"), "function" == typeof o && o.call(r), e.stopPropagation(), a && (a.__activeTab = t), !1
                }), c[t] = {
                    button: i,
                    tab: n
                }, u += 1
            }), u && (f.$$("a", l).forEach(function(e) {
                e.style.width = (100 / u).toFixed(10) + "%"
            }), a && a.__activeTab && c[a.__activeTab] ? (c[a.__activeTab].button.classList.add("active"), c[a.__activeTab].tab.classList.add("active")) : (c[d].button.classList.add("active"), c[d].tab.classList.add("active"))), t
        }, u.FileSelectorWidget = function(t, o, e, n, i) {
            var r;
            void 0 === i && (i = !0);
            var a = {};
            if (o.upload && t.options.uploader && (t.options.uploader.url || t.options.uploader.insertImageAsBase64URI)) {
                var s = f.dom('<div class="jodit_draganddrop_file_box"><strong>' + t.i18n(i ? "Drop image" : "Drop file") + "</strong><span><br> " + t.i18n("or click") + '</span><input type="file" accept="' + (i ? "image/*" : "*") + 'image/*" tabindex="-1" dir="auto" multiple=""/></div>', t.ownerDocument);
                new h.Uploader(t).bind(s, function(e) {
                    "function" == typeof o.upload && o.upload.call(t, {
                        baseurl: e.baseurl,
                        files: e.files
                    })
                }, function(e) {
                    t.events.fire("errorMessage", e.message)
                }), a[(t.options.textIcons ? "" : p.Jodit.modules.ToolbarIcon.getIcon("upload")) + t.i18n("Upload")] = s
            }
            if (o.filebrowser && (t.options.filebrowser.ajax.url || t.options.filebrowser.items.url) && (a[(t.options.textIcons ? "" : p.Jodit.modules.ToolbarIcon.getIcon("folder")) + t.i18n("Browse")] = function() {
                    n && n(), o.filebrowser && t.getInstance("FileBrowser").open(o.filebrowser, i)
                }), o.url) {
                var l = f.dom('<form onsubmit="return false;" class="jodit_form"><input type="text" required name="url" placeholder="http://"/><input type="text" name="text" placeholder="' + t.i18n("Alternative text") + '"/><div style="text-align: right"><button>' + t.i18n("Insert") + "</button></div></form>", t.ownerDocument),
                    c = l.querySelector("button"),
                    d = l.querySelector("input[name=url]");
                r = null, e && e.nodeType !== Node.TEXT_NODE && ("IMG" === e.tagName || f.$$("img", e).length) && (r = "IMG" === e.tagName ? e : f.$$("img", e)[0], f.val(l, "input[name=url]", r.getAttribute("src")), f.val(l, "input[name=text]", r.getAttribute("alt")), c.innerText = t.i18n("Update")), e && e.nodeType !== Node.TEXT_NODE && "A" === e.nodeName && (f.val(l, "input[name=url]", e.getAttribute("href") || ""), f.val(l, "input[name=text]", e.getAttribute("title") || ""), c.innerText = t.i18n("Update")), l.addEventListener("submit", function(e) {
                    return e.preventDefault(), e.stopPropagation(), f.val(l, "input[name=url]") ? "function" == typeof o.url && o.url.call(t, f.val(l, "input[name=url]"), f.val(l, "input[name=text]")) : (d.focus(), d.classList.add("jodit_error")), !1
                }, !1), a[(t.options.textIcons ? "" : p.Jodit.modules.ToolbarIcon.getIcon("link")) + " URL"] = l
            }
            return u.TabsWidget(t, a)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.__store = {}
            }
            return e.prototype.get = function(e, t) {
                if (void 0 !== this.__store[t]) return this.__store[t][e]
            }, e.prototype.indexOf = function(e, t, o) {
                var n = this.get(e, t);
                if (n)
                    for (var i = 0; i < n.length; i += 1)
                        if (n[i].originalCallback === o) return i;
                return !1
            }, e.prototype.namespaces = function() {
                return Object.keys(this.__store)
            }, e.prototype.events = function(e) {
                return this.__store[e] ? Object.keys(this.__store[e]) : []
            }, e.prototype.set = function(e, t, o, n) {
                void 0 === n && (n = !1), void 0 === this.__store[t] && (this.__store[t] = {}), void 0 === this.__store[t][e] && (this.__store[t][e] = []), n ? this.__store[t][e].unshift(o) : this.__store[t][e].push(o)
            }, e
        }();
        t.EventHandlersStore = n;
        var i = function() {
            function e(e) {
                var o = this;
                this.__defaultNameSpace = "JoditEventDefaultNamespace", this.__key = "__JoditEventsNativeNamespaces", this.current = [], this.doc = document, this.prepareEvent = function(t) {
                    t.cancelBubble || (t.type.match(/^touch/) && t.changedTouches && t.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function(e) {
                        Object.defineProperty(t, e, {
                            value: t.changedTouches[0][e],
                            configurable: !0,
                            enumerable: !0
                        })
                    }), t.originalEvent || (t.originalEvent = t), "paste" === t.type && void 0 === t.clipboardData && o.doc.defaultView.clipboardData && Object.defineProperty(t, "clipboardData", {
                        get: function() {
                            return o.doc.defaultView.clipboardData
                        },
                        configurable: !0,
                        enumerable: !0
                    }))
                }, this.__stopped = [], e && (this.doc = e), this.__key += (new Date).getTime()
            }
            return e.prototype.eachEvent = function(e, o) {
                var n = this;
                e.split(/[\s,]+/).forEach(function(e) {
                    var t = e.split(".");
                    o.call(n, t[0], t[1] || n.__defaultNameSpace)
                })
            }, e.prototype.getStore = function(e) {
                if (void 0 === e[this.__key]) {
                    var t = new n;
                    Object.defineProperty(e, this.__key, {
                        enumerable: !1,
                        configurable: !0,
                        value: t
                    })
                }
                return e[this.__key]
            }, e.prototype.clearStore = function(e) {
                void 0 !== e[this.__key] && delete e[this.__key]
            }, e.prototype.on = function(e, t, o, n, i) {
                var r = this;
                void 0 === i && (i = !1);
                var a = "string" == typeof e ? this : e,
                    s = "string" == typeof t ? t : e,
                    l = o;
                void 0 === l && "function" == typeof t && (l = t);
                var c = this.getStore(a);
                if ("string" != typeof s || "" === s) throw Error("Need events names");
                if ("function" != typeof l) throw Error("Need event handler");
                if (Array.isArray(a)) return a.forEach(function(e) {
                    r.on(e, s, l, n)
                }), this;
                var d = "function" == typeof a.addEventListener,
                    u = this,
                    p = function() {
                        return l && l.apply(this, arguments)
                    };
                return d && (p = function(e) {
                    if (u.prepareEvent(e), l && !1 === l.call(this, e)) return e.preventDefault(), e.stopImmediatePropagation(), !1
                }, n && (p = function(e) {
                    u.prepareEvent(e);
                    for (var t = e.target; t && t !== this;) {
                        if (t.matches(n)) return Object.defineProperty(e, "target", {
                            value: t,
                            configurable: !0,
                            enumerable: !0
                        }), l && !1 === l.call(t, e) ? (e.preventDefault(), !1) : void 0;
                        t = t.parentNode
                    }
                })), this.eachEvent(s, function(e, t) {
                    if ("" === e) throw Error("Need event name");
                    !1 === c.indexOf(e, t, l) && (c.set(e, t, {
                        event: e,
                        originalCallback: l,
                        syntheticCallback: p
                    }, i), d && a.addEventListener(e, p, !1))
                }), this
            }, e.prototype.off = function(e, t, o) {
                var n = this,
                    i = "string" == typeof e ? this : e,
                    r = "string" == typeof t ? t : e,
                    a = this.getStore(i),
                    s = o;
                if ("string" != typeof r || !r) return a.namespaces().forEach(function(e) {
                    n.off(i, "." + e)
                }), this.clearStore(i), this;
                void 0 === s && "function" == typeof t && (s = t);
                var l = "function" == typeof i.removeEventListener,
                    c = function(e) {
                        l && i.removeEventListener(e.event, e.syntheticCallback, !1)
                    },
                    d = function(e, t) {
                        if ("" !== e) {
                            var o = a.get(e, t);
                            if (o && o.length)
                                if ("function" != typeof s) o.forEach(c), o.length = 0;
                                else {
                                    var n = a.indexOf(e, t, s);
                                    !1 !== n && (c(o[n]), o.splice(n, 1))
                                }
                        } else a.events(t).forEach(function(e) {
                            "" !== e && d(e, t)
                        })
                    };
                return this.eachEvent(r, function(t, e) {
                    e === n.__defaultNameSpace ? a.namespaces().forEach(function(e) {
                        d(t, e)
                    }) : d(t, e)
                }), this
            }, e.prototype.triggerNativeEvent = function(e, t) {
                var o = this.doc.createEvent("HTMLEvents");
                "string" == typeof t ? o.initEvent(t, !0, !0) : (o.initEvent(t.type, t.bubbles, t.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function(e) {
                    Object.defineProperty(o, e, {
                        value: t[e],
                        enumerable: !0
                    })
                }), Object.defineProperty(o, "originalEvent", {
                    value: t,
                    enumerable: !0
                })), e.dispatchEvent(o)
            }, e.prototype.stopPropagation = function(e, t) {
                var n = this,
                    o = "string" == typeof e ? this : e,
                    i = "string" == typeof e ? e : t;
                if ("string" != typeof i) throw Error("Need event names");
                var r = this.getStore(o);
                this.eachEvent(i, function(e, t) {
                    var o = r.get(e, t);
                    o && n.__stopped.push(o)
                })
            }, e.prototype.removeStop = function(e) {
                if (e) {
                    var t = this.__stopped.indexOf(e); - 1 !== t && this.__stopped.splice(t, 1)
                }
            }, e.prototype.isStopped = function(e) {
                return void 0 !== e && -1 != this.__stopped.indexOf(e)
            }, e.prototype.fire = function(e, t) {
                for (var i = this, o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
                var r, a = void 0,
                    s = "string" == typeof e ? this : e,
                    l = "string" == typeof e ? e : t,
                    c = "string" == typeof e ? [t].concat(o) : o,
                    d = "function" == typeof s.dispatchEvent;
                if (!d && "string" != typeof l) throw Error("Need events names");
                var u = this.getStore(s);
                return "string" != typeof l && d ? this.triggerNativeEvent(s, t) : this.eachEvent(l, function(o, t) {
                    if (d) i.triggerNativeEvent(s, o);
                    else {
                        var n = u.get(o, t);
                        if (n) try {
                            n.every(function(e) {
                                return !i.isStopped(n) && (i.current.push(o), r = e.syntheticCallback.apply(s, c), i.current.pop(), void 0 !== r && (a = r), !0)
                            })
                        } finally {
                            i.removeStop(n)
                        }
                        t !== i.__defaultNameSpace || d || u.namespaces().filter(function(e) {
                            return e !== t
                        }).forEach(function(e) {
                            var t = i.fire.apply(i, [s, o + "." + e].concat(c));
                            void 0 !== t && (a = t)
                        })
                    }
                }), a
            }, e.prototype.destruct = function() {
                this.off(this)
            }, e
        }();
        t.EventsNative = i
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(2),
            s = o(0),
            l = o(3),
            r = o(10),
            c = o(35),
            d = o(36),
            u = o(15),
            p = function(r) {
                function e(e, t, o) {
                    var a = r.call(this, e) || this;
                    a.__disabled = !1, a.__actived = !1, a.checkActiveStatus = function(o, n) {
                        var i = 0,
                            r = 0;
                        return Object.keys(o).forEach(function(e) {
                            var t = o[e];
                            "function" == typeof t ? t(a.jodit, "" + s.css(n, e)) && (i += 1) : -1 != t.indexOf("" + s.css(n, e)) && (i += 1), r += 1
                        }), r === i
                    }, a.onMouseDown = function(e) {
                        if (e.stopImmediatePropagation(), e.preventDefault(), a.disable) return !1;
                        var t = a.control;
                        if (t.list) {
                            var o = new d.ToolbarList(a.jodit, a.container, a.target);
                            o.parentToolbar = a.parentToolbar, o.open(t), a.jodit.events.fire("closeAllPopups", o.container)
                        } else if (void 0 !== t.exec && "function" == typeof t.exec) t.exec(a.jodit, a.target || !!a.jodit.selection && a.jodit.selection.current(), t, e, a.container), a.jodit.events.fire("synchro"), a.parentToolbar && a.parentToolbar.immedateCheckActiveButtons(), a.jodit.events.fire("closeAllPopups afterExec");
                        else if (void 0 !== t.popup && "function" == typeof t.popup) {
                            var n = new u.ToolbarPopup(a.jodit, a.container, a.target);
                            n.parentToolbar = a.parentToolbar, !1 !== a.jodit.events.fire(s.camelCase("before-" + t.name + "-OpenPopup"), a.target || !!a.jodit.selection && a.jodit.selection.current(), t, n) && n.open(t.popup(a.jodit, a.target || !!a.jodit.selection && a.jodit.selection.current(), t, n.close, a)), a.jodit.events.fire(s.camelCase("after-" + t.name + "-OpenPopup") + " closeAllPopups", n.container)
                        } else(t.command || t.name) && (a.jodit.execCommand(t.command || t.name, t.args && t.args[0] || !1, t.args && t.args[1] || null), a.jodit.events.fire("closeAllPopups"))
                    }, a.control = t, a.target = o, a.anchor = a.jodit.ownerDocument.createElement("a"), a.container.appendChild(a.anchor), e.options.showTooltip && t.tooltip && (e.options.useNativeTooltip ? a.anchor.setAttribute("title", a.jodit.i18n(t.tooltip) + (t.hotkeys ? "<br>" + s.asArray(t.hotkeys).join(" ") : "")) : a.tooltip = new c.Tooltip(a)), a.textBox = a.jodit.ownerDocument.createElement("span"), a.anchor.appendChild(a.textBox);
                    var n = t.name.replace(/[^a-zA-Z0-9]/g, "_");
                    if (t.getContent && "function" == typeof t.getContent) l.Dom.detach(a.container), a.container.appendChild(s.dom(t.getContent(a.jodit, t, a), a.jodit.ownerDocument));
                    else {
                        if (t.list && a.anchor) {
                            var i = a.jodit.ownerDocument.createElement("span");
                            i.classList.add("jodit_with_dropdownlist-trigger"), a.container.classList.add("jodit_with_dropdownlist"), a.anchor.appendChild(i)
                        }
                        a.textBox.appendChild(a.createIcon(n, t))
                    }
                    return a.container.classList.add("jodit_toolbar_btn-" + n), t.isInput ? a.container.classList.add("jodit_toolbar-input") : a.jodit.events.on(a.container, "mousedown touchend", a.onMouseDown).on("click-" + n + "-btn", a.onMouseDown), a
                }
                return i(e, r), Object.defineProperty(e.prototype, "disable", {
                    get: function() {
                        return this.__disabled
                    },
                    set: function(e) {
                        this.__disabled = e, this.container.classList.toggle("jodit_disabled", e), e ? this.container.hasAttribute("disabled") || this.container.setAttribute("disabled", "disabled") : this.container.hasAttribute("disabled") && this.container.removeAttribute("disabled")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "active", {
                    get: function() {
                        return this.__actived
                    },
                    set: function(e) {
                        this.__actived = e, this.container.classList.toggle("jodit_active", e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isDisable = function() {
                    var e = void 0 === this.control || void 0 === this.control.mode ? a.MODE_WYSIWYG : this.control.mode;
                    if (this.jodit.options.disabled) return !0;
                    if (this.jodit.options.readonly && -1 == this.jodit.options.activeButtonsInReadOnly.indexOf(this.control.name)) return !0;
                    var t = e === a.MODE_SPLIT || e === this.jodit.getRealMode();
                    return "function" == typeof this.control.isDisable && (t = t && !this.control.isDisable(this.jodit, this.control, this)), !t
                }, e.prototype.isActive = function() {
                    var t = this;
                    if ("function" == typeof this.control.isActive) return this.control.isActive(this.jodit, this.control, this);
                    var o, n, e = !!this.jodit.selection && this.jodit.selection.current();
                    return !!(e && ((this.control.tags || this.control.options && this.control.options.tags) && (o = this.control.tags || this.control.options && this.control.options.tags, l.Dom.up(e, function(e) {
                        if (e && -1 != o.indexOf(e.nodeName.toLowerCase())) return !0
                    }, this.jodit.editor)) || (this.control.css || this.control.options && this.control.options.css) && (n = this.control.css || this.control.options && this.control.options.css, l.Dom.up(e, function(e) {
                        if (e && e.nodeType !== Node.TEXT_NODE) return t.checkActiveStatus(n, e)
                    }, this.jodit.editor))))
                }, e.prototype.destruct = function() {
                    this.jodit.events.off(this.container)
                }, e
            }(r.ToolbarElement);
        t.ToolbarButton = p
    }, function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(0),
            c = o(3),
            i = o(10),
            s = o(5),
            r = function(i) {
                function r(e, t, o, n) {
                    void 0 === n && (n = "jodit_toolbar_popup");
                    var s = i.call(this, e, "div", n) || this;
                    return s.target = t, s.current = o, s.className = n, s.isOpened = !1, s.getContainer = function() {
                        return s.container
                    }, s.calcPosition = l.throttle(function() {
                        if (s.isOpened) {
                            var t = s.getContainer(),
                                e = l.offset(s.jodit.container, s.jodit, s.jodit.ownerDocument, !0),
                                o = l.offset(t, s.jodit, s.jodit.ownerDocument, !0),
                                n = l.css(t, "marginLeft") || 0;
                            o.left -= n;
                            var i = n,
                                r = "auto";
                            if (i = o.left < e.left ? e.left - o.left : o.left + o.width < e.left + e.width ? 0 : -(o.left + o.width - (e.left + e.width)), o.width < e.width || (i = e.left - o.left, r = e.width), i !== n) try {
                                t.style.setProperty("margin-left", i + "px", "important")
                            } catch (e) {
                                t.style.marginLeft = i + "px"
                            }
                            var a = t.querySelector(".jodit_popup_triangle");
                            a && (a.style.marginLeft = -i + "px"), l.css(t, "width", r)
                        }
                    }, s.jodit.defaultTimeout), s.close = function(e) {
                        s.isOpened && (e && c.Dom.isOrContains(s.container, e instanceof r ? e.target : e) || (s.isOpened = !1, s.jodit.events.off("closeAllPopups", s.close), s.doClose(), s.container.parentNode && s.container.parentNode.removeChild(s.container), s.jodit.selection && s.jodit.selection.removeMarkers()))
                    }, s.container.setAttribute("data-editor_id", e.id), s.jodit.events.on(s.container, "mousedown touchstart touchend", function(e) {
                        e.stopPropagation()
                    }).on([s.jodit.ownerWindow, s.jodit.events], "resize", s.calcPosition), s
                }
                return a(r, i), r.prototype.destruct = function() {
                    this.jodit.events.off([this.jodit.ownerWindow, this.jodit.events], "resize", this.calcPosition), i.prototype.destruct.call(this)
                }, r.prototype.doOpen = function(e) {
                    e && (c.Dom.detach(this.container), this.container.innerHTML = '<span class="jodit_popup_triangle"></span>', this.container.appendChild(l.dom(e, this.jodit.ownerDocument)), this.container.style.display = "block", this.container.style.marginLeft = null)
                }, r.prototype.open = function(e, t, o) {
                    void 0 === o && (o = !1), s.Jodit.fireEach("beforeOpenPopup closeAllPopups", this, e), o || this.jodit.events.on("closeAllPopups", this.close), this.container.classList.add(this.className + "-open"), this.doOpen(e), this.target.appendChild(this.container), void 0 !== t && this.container.classList.toggle("jodit_right", t), !o && this.parentToolbar && this.jodit.events.fire(this.parentToolbar, "afterOpenPopup", this.container), this.isOpened = !0, this.calcPosition()
                }, r.prototype.doClose = function() {}, r
            }(i.ToolbarElement);
        t.ToolbarPopup = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(4);
        t.Component = n.Component;
        var i = o(18);
        t.Ajax = i.Ajax;
        var r = o(21);
        t.ContextMenu = r.ContextMenu;
        var a = o(72);
        t.Cookie = a.Cookie;
        var s = o(7);
        t.Dialog = s.Dialog, t.Alert = s.Alert, t.Confirm = s.Confirm, t.Promt = s.Promt;
        var l = o(3);
        t.Dom = l.Dom;
        var c = o(13);
        t.EventsNative = c.EventsNative;
        var d = o(73);
        t.FileBrowser = d.FileBrowser;
        var u = o(0);
        t.Helpers = u;
        var p = o(74);
        t.ImageEditor = p.ImageEditor;
        var f = o(23);
        t.Observer = f.Observer;
        var h = o(17);
        t.Select = h.Select;
        var m = o(24);
        t.Snapshot = m.Snapshot;
        var v = o(20);
        t.Table = v.Table;
        var g = o(6);
        t.ToolbarIcon = g.ToolbarIcon;
        var b = o(8);
        t.ToolbarCollection = b.ToolbarCollection;
        var _ = o(14);
        t.ToolbarButton = _.ToolbarButton;
        var y = o(25);
        t.Stack = y.Stack;
        var w = o(11);
        t.Uploader = w.Uploader
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = o(2),
            r = o(4),
            v = o(0),
            g = o(3),
            c = o(2),
            a = function(e) {
                function t() {
                    var h = null !== e && e.apply(this, arguments) || this;
                    return h.isMarker = function(e) {
                        return g.Dom.isNode(e, h.jodit.editorWindow) && e.nodeType === Node.ELEMENT_NODE && "SPAN" === e.nodeName && e.hasAttribute("data-" + m.MARKER_CLASS)
                    }, h.marker = function(e, t) {
                        void 0 === e && (e = !1);
                        var o = null;
                        t && (o = t.cloneRange()).collapse(e);
                        var n = h.jodit.editorDocument.createElement("span");
                        return n.id = m.MARKER_CLASS + "_" + +new Date + "_" + ("" + Math.random()).slice(2), n.style.lineHeight = "0", n.style.display = "none", n.setAttribute("data-" + m.MARKER_CLASS, e ? "start" : "end"), n.appendChild(h.jodit.editorDocument.createTextNode(m.INVISIBLE_SPACE)), o && g.Dom.isOrContains(h.jodit.editor, e ? o.startContainer : o.endContainer) && o.insertNode(n), n
                    }, h.focus = function() {
                        var e = h.jodit;
                        if (h.isFocused()) return !1;
                        if (e.options.iframe && v.isIE())
                            for (var t = 0; t < 1e5 && "complete" !== e.editorDocument.readyState;) t++;
                        e.iframe && e.iframe.focus(), e.editorWindow.focus(), e.editor.focus();
                        var o = e.editorWindow.getSelection(),
                            n = e.editorDocument.createRange();
                        return o.rangeCount && h.current() || (n.setStart(e.editor, 0), n.collapse(!0), o.removeAllRanges(), o.addRange(n)), !0
                    }, h.eachSelection = function(o) {
                        var e = h.jodit.editorWindow.getSelection();
                        if (e.rangeCount) {
                            var t = e.getRangeAt(0),
                                n = [],
                                i = t.startOffset,
                                r = h.jodit.editor.childNodes.length,
                                a = t.startContainer === h.jodit.editor ? h.jodit.editor.childNodes[i < r ? i : r - 1] : t.startContainer,
                                s = t.endContainer === h.jodit.editor ? h.jodit.editor.childNodes[t.endOffset - 1] : t.endContainer;
                            g.Dom.find(a, function(e) {
                                return !e || e === h.jodit.editor || g.Dom.isEmptyTextNode(e) || h.isMarker(e) || n.push(e), e === s
                            }, h.jodit.editor, !0, "nextSibling", !1);
                            var l = function(e) {
                                if (e.nodeName.match(/^(UL|OL)$/)) return [].slice.call(e.childNodes).forEach(l);
                                if ("LI" === e.nodeName)
                                    if (e.firstChild) e = e.firstChild;
                                    else {
                                        var t = h.jodit.editorDocument.createTextNode(c.INVISIBLE_SPACE);
                                        e.appendChild(t), e = t
                                    } o(e)
                            };
                            0 === n.length && g.Dom.isEmptyTextNode(a) && n.push(a), n.forEach(l)
                        }
                    }, h.applyCSS = function(s, l, t) {
                        void 0 === l && (l = "span");
                        var c, d = "SPAN",
                            u = function(e) {
                                return null !== e && !g.Dom.isEmptyTextNode(e) && !h.isMarker(e)
                            },
                            p = function(e) {
                                var n;
                                return (RegExp("^" + e.nodeName + "$", "i").test(l) || !(!t || "FONT" === (n = e).nodeName || n.nodeType !== Node.ELEMENT_NODE || !(v.isPlainObject(t) && !1 !== v.each(t, function(e, t) {
                                    var o = v.css(n, e, void 0, !0);
                                    return null !== o && "" !== o && -1 != t.indexOf(("" + o).toLowerCase())
                                }) || "function" == typeof t && t(h.jodit, n)))) && u(e)
                            },
                            f = function(t) {
                                p(t) && (t.nodeName === d && s && Object.keys(s).forEach(function(e) {
                                    0 === c || v.css(t, e) == v.normilizeCSSValue(e, s[e]) ? (v.css(t, e, ""), void 0 === c && (c = 0)) : (v.css(t, e, s[e]), void 0 === c && (c = 1))
                                }), g.Dom.isBlock(t) || t.getAttribute("style") && t.nodeName === d || (g.Dom.unwrap(t), void 0 === c && (c = 0)))
                            };
                        if (h.isCollapsed()) {
                            var e = !1;
                            if (h.current() && g.Dom.closest(h.current(), l, h.jodit.editor)) {
                                e = !0;
                                var o = g.Dom.closest(h.current(), l, h.jodit.editor);
                                o && h.setCursorAfter(o)
                            }
                            if (l.toUpperCase() === d || !e) {
                                var n = h.jodit.editorDocument.createElement(l);
                                n.appendChild(h.jodit.editorDocument.createTextNode(m.INVISIBLE_SPACE)), h.insertNode(n, !1, !1), l.toUpperCase() === d && s && v.css(n, s), h.setCursorIn(n)
                            }
                        } else {
                            var i = h.save();
                            v.normalizeNode(h.jodit.editor.firstChild), v.$$("*[style*=font-size]", h.jodit.editor).forEach(function(e) {
                                e.style && e.style.fontSize && e.setAttribute("data-font-size", "" + e.style.fontSize)
                            }), h.jodit.editorDocument.execCommand("fontsize", !1, "7"), v.$$("*[data-font-size]", h.jodit.editor).forEach(function(e) {
                                e.style && e.getAttribute("data-font-size") && (e.style.fontSize = e.getAttribute("data-font-size"), e.removeAttribute("data-font-size"))
                            }), v.$$('font[size="7"]', h.jodit.editor).forEach(function(e) {
                                if (g.Dom.next(e, u, e.parentNode) || g.Dom.prev(e, u, e.parentNode) || !p(e.parentNode) || e.parentNode === h.jodit.editor || g.Dom.isBlock(e.parentNode) && !m.IS_BLOCK.test(l))
                                    if (e.firstChild && !g.Dom.next(e.firstChild, u, e) && !g.Dom.prev(e.firstChild, u, e) && p(e.firstChild)) f(e.firstChild);
                                    else if (g.Dom.closest(e, p, h.jodit.editor)) {
                                    var t = h.jodit.editorDocument.createRange(),
                                        o = g.Dom.closest(e, p, h.jodit.editor);
                                    t.setStartBefore(o), t.setEndBefore(e);
                                    var n = t.extractContents();
                                    n.textContent && v.trim(n.textContent).length || !n.firstChild || g.Dom.unwrap(n.firstChild), o.parentNode && o.parentNode.insertBefore(n, o), t.setStartAfter(e), t.setEndAfter(o);
                                    var i = t.extractContents();
                                    i.textContent && v.trim(i.textContent).length || !i.firstChild || g.Dom.unwrap(i.firstChild), g.Dom.after(o, i), f(o)
                                } else {
                                    var r = [],
                                        a = void 0;
                                    e.firstChild && g.Dom.find(e.firstChild, function(e) {
                                        return e && p(e) ? (void 0 === a && (a = !0), r.push(e)) : void 0 === a && (a = !1), !1
                                    }, e, !0), r.forEach(g.Dom.unwrap), a || (void 0 === c && (c = 1), 1 === c && v.css(g.Dom.replace(e, l, !1, !1, h.jodit.editorDocument), s && l.toUpperCase() === d ? s : {}))
                                } else f(e.parentNode);
                                e.parentNode && g.Dom.unwrap(e)
                            }), h.restore(i)
                        }
                    }, h
                }
                return i(t, e), t.prototype.remove = function() {
                    var e = this.jodit.editorWindow.getSelection();
                    if (this.current())
                        for (var t = 0; t < e.rangeCount; t += 1) e.getRangeAt(t).deleteContents(), e.getRangeAt(t).collapse(!0)
                }, t.prototype.insertCursorAtPoint = function(e, t) {
                    var o, n = this.jodit.editorDocument;
                    this.removeMarkers();
                    try {
                        var i = null;
                        if (n.caretPositionFromPoint ? (o = n.caretPositionFromPoint(e, t), (i = n.createRange()).setStart(o.offsetNode, o.offset)) : n.caretRangeFromPoint && (o = n.caretRangeFromPoint(e, t), (i = n.createRange()).setStart(o.startContainer, o.startOffset)), i && void 0 !== this.jodit.editorWindow.getSelection) {
                            i.collapse(!0);
                            var r = this.jodit.editorWindow.getSelection();
                            r.removeAllRanges(), r.addRange(i)
                        } else if (void 0 !== n.body.createTextRange) {
                            var a = n.body.createTextRange();
                            a.moveToPoint(e, t);
                            var s = a.duplicate();
                            s.moveToPoint(e, t), a.setEndPoint("EndToEnd", s), a.select()
                        }
                        return !0
                    } catch (e) {}
                    return !1
                }, t.prototype.removeMarkers = function() {
                    v.$$("span[data-" + m.MARKER_CLASS + "]", this.jodit.editor).forEach(function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    })
                }, t.prototype.restore = function(e) {
                    var r = this;
                    if (void 0 === e && (e = []), Array.isArray(e)) {
                        var a = this.jodit.editorWindow.getSelection();
                        a.removeAllRanges(), e.forEach(function(e) {
                            var t = r.jodit.editorDocument.createRange(),
                                o = r.jodit.editor.querySelector("#" + e.endId),
                                n = r.jodit.editor.querySelector("#" + e.startId);
                            if (n) {
                                if (e.collapsed || !o) {
                                    var i = n.previousSibling;
                                    i && i.nodeType === Node.TEXT_NODE ? t.setStart(i, i.nodeValue ? i.nodeValue.length : 0) : t.setStartBefore(n), n.parentNode && n.parentNode.removeChild(n), t.collapse(!0)
                                } else t.setStartAfter(n), n.parentNode && n.parentNode.removeChild(n), t.setEndBefore(o), o.parentNode && o.parentNode.removeChild(o);
                                a.addRange(t)
                            }
                        })
                    }
                }, t.prototype.save = function() {
                    var e = this.jodit.editorWindow.getSelection();
                    if (!e.rangeCount) return [];
                    var t, o, n, i = [],
                        r = e.rangeCount,
                        a = [];
                    for (t = 0; t < r; t += 1) a[t] = e.getRangeAt(t), i[t] = a[t].collapsed ? {
                        startId: (o = this.marker(!0, a[t])).id,
                        collapsed: !0,
                        startMarker: o.outerHTML
                    } : (o = this.marker(!0, a[t]), n = this.marker(!1, a[t]), {
                        startId: o.id,
                        endId: n.id,
                        collapsed: !1,
                        startMarker: o.outerHTML,
                        endMarker: n.outerHTML
                    });
                    for (e.removeAllRanges(), t = r - 1; 0 <= t; --t) {
                        var s = this.jodit.editorDocument.getElementById(i[t].startId);
                        if (s)
                            if (i[t].collapsed) a[t].setStartAfter(s), a[t].collapse(!0);
                            else if (a[t].setStartBefore(s), i[t].endId) {
                            var l = this.jodit.editorDocument.getElementById(i[t].endId);
                            l && a[t].setEndAfter(l)
                        }
                        try {
                            e.addRange(a[t].cloneRange())
                        } catch (e) {}
                    }
                    return i
                }, t.prototype.isCollapsed = function() {
                    var e, t = this.jodit.editorWindow.getSelection();
                    for (e = 0; e < t.rangeCount; e += 1)
                        if (!t.getRangeAt(e).collapsed) return !1;
                    return !0
                }, t.prototype.isFocused = function() {
                    return this.jodit.editorDocument.hasFocus && this.jodit.editorDocument.hasFocus() && this.jodit.editor === this.jodit.editorDocument.activeElement
                }, t.prototype.current = function(e) {
                    if (void 0 === e && (e = !0), this.jodit.getRealMode() === m.MODE_WYSIWYG && void 0 !== this.jodit.editorWindow.getSelection) {
                        var t = this.jodit.editorWindow.getSelection();
                        if (t && 0 < t.rangeCount) {
                            var o = t.getRangeAt(0),
                                n = o.startContainer,
                                i = !1,
                                r = function(e) {
                                    return i ? e.lastChild : e.firstChild
                                };
                            if (n.nodeType !== Node.TEXT_NODE) {
                                if ((n = o.startContainer.childNodes[o.startOffset]) || (n = o.startContainer.childNodes[o.startOffset - 1], i = !0), n && t.isCollapsed && n.nodeType !== Node.TEXT_NODE)
                                    if (!i && n.previousSibling && n.previousSibling.nodeType === Node.TEXT_NODE) n = n.previousSibling;
                                    else if (e)
                                    for (var a = r(n); a;) {
                                        if (a && a.nodeType === Node.TEXT_NODE) {
                                            n = a;
                                            break
                                        }
                                        a = r(a)
                                    }
                                if (n && !t.isCollapsed && n.nodeType !== Node.TEXT_NODE) {
                                    for (var s = n, l = n; l = l.lastChild, (s = s.firstChild) && l && s.nodeType !== Node.TEXT_NODE;);
                                    s === l && s && s.nodeType === Node.TEXT_NODE && (n = s)
                                }
                            }
                            if (n && g.Dom.isOrContains(this.jodit.editor, n)) return n
                        }
                    }
                    return !1
                }, t.prototype.insertNode = function(e, t, o) {
                    if (void 0 === t && (t = !0), void 0 === o && (o = !0), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                    if (this.focus(), !this.jodit.editorWindow.getSelection) throw Error("Jodit does'n support this browser");
                    var n = this.jodit.editorWindow.getSelection();
                    if (this.isCollapsed() || this.jodit.execCommand("Delete"), n.rangeCount) {
                        var i = n.getRangeAt(0);
                        g.Dom.isOrContains(this.jodit.editor, i.commonAncestorContainer) ? (i.deleteContents(), i.insertNode(e)) : this.jodit.editor.appendChild(e)
                    } else this.jodit.editor.appendChild(e);
                    t && this.setCursorAfter(e), o && this.jodit.events && this.jodit.events.fire("synchro"), this.jodit.events && this.jodit.events.fire("afterInsertNode", e)
                }, t.prototype.insertHTML = function(e) {
                    if ("" !== e) {
                        var t, o, n = this.jodit.editorDocument.createElement("div"),
                            i = this.jodit.editorDocument.createDocumentFragment();
                        if (!this.isFocused() && this.jodit.isEditorMode() && this.focus(), e instanceof this.jodit.editorWindow.Node ? g.Dom.isNode(e, this.jodit.editorWindow) && n.appendChild(e) : n.innerHTML = "" + e, this.jodit.isEditorMode() || !1 !== this.jodit.events.fire("insertHTML", n.innerHTML)) {
                            for (t = n.lastChild; n.firstChild;) i.appendChild(t = n.firstChild);
                            for (this.insertNode(i, !1), t ? this.setCursorAfter(t) : this.setCursorIn(i), o = this.jodit.editor.lastChild; o && o.nodeType === Node.TEXT_NODE && o.previousSibling && o.nodeValue && /^\s*$/.test(o.nodeValue);) o = o.previousSibling;
                            t && (o && t === o && t.nodeType === Node.ELEMENT_NODE && this.jodit.editor.appendChild(this.jodit.editorDocument.createElement("br")), this.setCursorAfter(t))
                        }
                    }
                }, t.prototype.insertImage = function(e, t) {
                    void 0 === t && (t = {});
                    var o = v.dom("string" == typeof e ? '<img src=""/>' : e, this.jodit.editorDocument);
                    "string" == typeof e && o.setAttribute("src", e);
                    var n = "" + this.jodit.options.imageDefaultWidth;
                    n && "auto" !== n && (n + "").indexOf("px") < 0 && (n + "").indexOf("%") < 0 && (n += "px"), t.width = n, t && "object" == typeof t && v.each(t, function(e, t) {
                        o.style[t] = e
                    });
                    var i = function() {
                        (o.naturalHeight < o.offsetHeight || o.naturalWidth < o.offsetWidth) && (o.style.width = "", o.style.height = ""), o.removeEventListener("load", i)
                    };
                    o.addEventListener("load", i), o.complete && i(), this.insertNode(o), this.jodit.events.fire("afterInsertImage", o)
                }, t.prototype.setCursorAfter = function(e) {
                    var t = this;
                    if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                    if (!g.Dom.up(e, function(e) {
                            return e === t.jodit.editor || e && e.parentNode === t.jodit.editor
                        }, this.jodit.editor)) throw Error("Node element must be in editor");
                    var o = this.jodit.editorDocument.createRange(),
                        n = !1;
                    return e.nodeType !== Node.TEXT_NODE ? (n = this.jodit.editorDocument.createTextNode(m.INVISIBLE_SPACE), o.setStartAfter(e), o.insertNode(n), o.selectNode(n)) : o.setEnd(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!1), this.selectRange(o), n
                }, t.prototype.cursorInTheEdge = function(o, n) {
                    var e = this.jodit.editorWindow.getSelection(),
                        t = e.rangeCount ? e.getRangeAt(0) : null;
                    if (!t) return null;
                    var i = o ? t.startContainer : t.endContainer,
                        r = function(e) {
                            for (; e;)
                                if (t = e, (e = o ? g.Dom.prev(t, function(e) {
                                        return !!e
                                    }, n) : g.Dom.next(t, function(e) {
                                        return !!e
                                    }, n)) && !g.Dom.isEmptyTextNode(e) && "BR" !== e.nodeName) return !1;
                            var t
                        };
                    if (i.nodeType === Node.TEXT_NODE) {
                        var a = i.nodeValue || "";
                        if (o && t.startOffset > a.length - a.replace(c.INVISIBLE_SPACE_REG_EXP_START, "").length) return !1;
                        if (!o && t.startOffset < a.replace(c.INVISIBLE_SPACE_REG_EXP_END, "").length) return !1;
                        if (!1 === r(i)) return !1
                    }
                    var s = this.current(!1);
                    return s && g.Dom.isOrContains(n, s, !0) ? !(!o && t.startContainer.childNodes[t.startOffset] && s && !g.Dom.isEmptyTextNode(s)) && !1 !== r(s) : null
                }, t.prototype.setCursorBefore = function(e) {
                    var t = this;
                    if (!(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                    if (!g.Dom.up(e, function(e) {
                            return e === t.jodit.editor || e && e.parentNode === t.jodit.editor
                        }, this.jodit.editor)) throw Error("Node element must be in editor");
                    var o = this.jodit.editorDocument.createRange(),
                        n = !1;
                    return e.nodeType !== Node.TEXT_NODE ? (n = this.jodit.editorDocument.createTextNode(m.INVISIBLE_SPACE), o.setStartBefore(e), o.collapse(!0), o.insertNode(n), o.selectNode(n)) : o.setStart(e, null !== e.nodeValue ? e.nodeValue.length : 0), o.collapse(!0), this.selectRange(o), n
                }, t.prototype.setCursorIn = function(e, t) {
                    var o = this;
                    if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                    if (!g.Dom.up(e, function(e) {
                            return e === o.jodit.editor || e && e.parentNode === o.jodit.editor
                        }, this.jodit.editor)) throw Error("Node element must be in editor");
                    var n = this.jodit.editorDocument.createRange(),
                        i = e,
                        r = e;
                    do {
                        if (i.nodeType === Node.TEXT_NODE) break;
                        r = i, i = t ? i.firstChild : i.lastChild
                    } while (i);
                    if (!i) {
                        var a = this.jodit.editorDocument.createTextNode(m.INVISIBLE_SPACE);
                        /^(img|br|input)$/i.test(r.nodeName) ? i = r : (r.appendChild(a), r = a)
                    }
                    return n.selectNodeContents(i || r), n.collapse(t), this.selectRange(n), r
                }, t.prototype.selectRange = function(e) {
                    var t = this.jodit.editorWindow.getSelection();
                    t.removeAllRanges(), t.addRange(e), this.jodit.events.fire("changeSelection")
                }, t.prototype.select = function(e, t) {
                    var o = this;
                    if (void 0 === t && (t = !1), !(e instanceof this.jodit.editorWindow.Node)) throw Error("Parameter node most be instance of Node");
                    if (!g.Dom.up(e, function(e) {
                            return e === o.jodit.editor || e && e.parentNode === o.jodit.editor
                        }, this.jodit.editor)) throw Error("Node element must be in editor");
                    var n = this.jodit.editorDocument.createRange();
                    n[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(n)
                }, t.prototype.getHTML = function() {
                    var e = this.jodit.editorWindow.getSelection();
                    if (0 < e.rangeCount) {
                        var t = e.getRangeAt(0).cloneContents(),
                            o = this.jodit.editorDocument.createElement("div");
                        return o.appendChild(t), o.innerHTML
                    }
                    return ""
                }, t
            }(r.Component);
        t.Select = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            r = o(0);
        n.Config.prototype.defaultAjaxOptions = {
            dataType: "json",
            method: "GET",
            url: "",
            data: null,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                "X-REQUESTED-WITH": "XMLHttpRequest"
            },
            withCredentials: !0,
            xhr: function() {
                return new("undefined" == typeof XDomainRequest ? XMLHttpRequest : XDomainRequest)
            }
        };
        var i = function() {
            function e(e, t) {
                var o = this;
                this.success_response_codes = [200, 201, 202], this.jodit = e, this.options = r.extend(!0, {}, n.Config.prototype.defaultAjaxOptions, t), this.options.xhr && (this.xhr = this.options.xhr()), e && e.events && e.events.on("beforeDestruct", function() {
                    o.abort()
                })
            }
            return e.prototype.__buildParams = function(e, t) {
                if (this.options.queryBuild && "function" == typeof this.options.queryBuild) return this.options.queryBuild.call(this, e, t);
                if ("string" == typeof e || this.jodit.ownerWindow.FormData && e instanceof this.jodit.ownerWindow.FormData) return e;
                var o, n, i, r = [];
                for (o in e) e.hasOwnProperty(o) && (n = t ? t + "[" + o + "]" : o, r.push("object" == typeof(i = e[o]) ? this.__buildParams(i, n) : encodeURIComponent(n) + "=" + encodeURIComponent(i)));
                return r.join("&")
            }, e.prototype.abort = function() {
                return this.xhr.abort(), this
            }, e.prototype.send = function() {
                var i = this;
                return new Promise(function(t, o) {
                    var n = function(e) {
                        switch (i.options.dataType) {
                            case "json":
                                try {
                                    e = JSON.parse(e)
                                } catch (e) {
                                    return void o.call(i.xhr, e)
                                }
                        }
                        return e
                    };
                    if (i.xhr.onabort = function() {
                            o(Error(i.xhr.statusText))
                        }, i.xhr.onerror = function() {
                            o(Error(i.xhr.statusText))
                        }, i.xhr.ontimeout = function() {
                            o(Error(i.xhr.statusText))
                        }, i.xhr.onload = function() {
                            i.response = i.xhr.responseText, i.status = i.xhr.status, t.call(i.xhr, n(i.response))
                        }, i.xhr.onreadystatechange = function() {
                            if (i.xhr.readyState === XMLHttpRequest.DONE) {
                                var e = i.xhr.responseText;
                                i.response = e, i.status = i.xhr.status, -1 < i.success_response_codes.indexOf(i.xhr.status) ? t.call(i.xhr, n(e)) : o.call(i.xhr, Error(i.xhr.statusText || i.jodit.i18n("Connection error!")))
                            }
                        }, i.xhr.withCredentials = i.options.withCredentials || !1, !i.options.url) throw Error("Need URL for AJAX request");
                    i.xhr.open(i.options.method || "get", i.options.url, !0), i.options.contentType && i.xhr.setRequestHeader && i.xhr.setRequestHeader("Content-type", i.options.contentType), i.options.headers && i.xhr.setRequestHeader && r.each(i.options.headers, function(e, t) {
                        i.xhr.setRequestHeader(e, t)
                    }), setTimeout(function() {
                        i.xhr.send(i.options.data ? i.__buildParams(i.options.data) : void 0)
                    }, 0)
                })
            }, e
        }();
        t.Ajax = i
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            s = o(13),
            l = o(8),
            c = o(5),
            d = o(2),
            u = function(r) {
                function e(e, t) {
                    void 0 === t && (t = {});
                    var o = r.call(this, e) || this;
                    o.options = {
                        removeButtons: [],
                        zIndex: 100002,
                        fullsize: !1,
                        showTooltip: !0,
                        useNativeTooltip: !1,
                        buttons: [],
                        globalFullsize: !0
                    }, o.editorDocument = document, o.editorWindow = window, o.__isFullSize = !1, o.isFullSize = function() {
                        return o.__isFullSize
                    };
                    var n = o,
                        i = e ? e.ownerDocument : document;
                    return n.ownerDocument = i, n.ownerWindow = e ? e.ownerWindow : window, n.progress_bar = e ? e.progress_bar : document.createElement("div"), n.editor = e ? e.editor : document.createElement("div"), n.events = e ? e.events : new s.EventsNative(i), n.buffer = e ? e.buffer : {}, n.toolbar = new l.ToolbarCollection(n), n.options = a({}, n.options, t), o
                }
                return i(e, r), e.prototype.getRealMode = function() {
                    return d.MODE_WYSIWYG
                }, e.prototype.i18n = function(e) {
                    return this.jodit ? this.jodit.i18n(e) : c.Jodit.prototype.i18n(e)
                }, e.prototype.toggleFullSize = function(e) {
                    void 0 === e && (e = !this.__isFullSize), e !== this.__isFullSize && (this.__isFullSize = e, this.events && this.events.fire("toggleFullSize", e))
                }, e.prototype.destruct = function() {
                    this.toolbar.destruct(), r.prototype.destruct.call(this)
                }, e
            }(r.Component);
        t.View = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = o(0),
            v = o(2),
            d = o(3),
            n = function() {
                function h() {}
                return h.addSelected = function(e) {
                    e.setAttribute(v.JODIT_SELECTED_CELL_MARKER, "1")
                }, h.restoreSelection = function(e) {
                    e.removeAttribute(v.JODIT_SELECTED_CELL_MARKER)
                }, h.getAllSelectedCells = function(e) {
                    return e ? m.$$("td[" + v.JODIT_SELECTED_CELL_MARKER + "],th[" + v.JODIT_SELECTED_CELL_MARKER + "]", e) : []
                }, h.getRowsCount = function(e) {
                    return e.rows.length
                }, h.getColumnsCount = function(e) {
                    return h.formalMatrix(e).reduce(function(e, t) {
                        return Math.max(e, t.length)
                    }, 0)
                }, h.formalMatrix = function(e, s) {
                    for (var l = [
                            []
                        ], t = Array.prototype.slice.call(e.rows), o = function(e, t) {
                            void 0 === l[t] && (l[t] = []);
                            for (var o, n, i = e.colSpan, r = e.rowSpan, a = 0; l[t][a];) a += 1;
                            for (n = 0; n < r; n += 1)
                                for (o = 0; o < i; o += 1) {
                                    if (void 0 === l[t + n] && (l[t + n] = []), s && !1 === s(e, t + n, a + o, i, r)) return !1;
                                    l[t + n][a + o] = e
                                }
                        }, n = 0, i = void 0; n < t.length; n += 1) {
                        var r = Array.prototype.slice.call(t[n].cells);
                        for (i = 0; i < r.length; i += 1)
                            if (!1 === o(r[i], n)) return l
                    }
                    return l
                }, h.formalCoordinate = function(e, r, a) {
                    void 0 === a && (a = !1);
                    var s = 0,
                        l = 0,
                        c = 1,
                        d = 1;
                    return h.formalMatrix(e, function(e, t, o, n, i) {
                        if (r === e) return s = t, l = o, c = n || 1, d = i || 1, a && (l += (n || 1) - 1, s += (i || 1) - 1), !1
                    }), [s, l, c, d]
                }, h.appendRow = function(e, t, o) {
                    void 0 === t && (t = !1), void 0 === o && (o = !0);
                    var n, i = e.ownerDocument || document,
                        r = h.getColumnsCount(e),
                        a = i.createElement("tr");
                    for (n = 0; n < r; n += 1) a.appendChild(i.createElement("td"));
                    o && t && t.nextSibling ? t.parentNode && t.parentNode.insertBefore(a, t.nextSibling) : !o && t ? t.parentNode && t.parentNode.insertBefore(a, t) : (m.$$(":scope>tbody", e)[0] || e).appendChild(a)
                }, h.removeRow = function(r, a) {
                    var s, l = h.formalMatrix(r),
                        c = r.rows[a];
                    m.each(l[a], function(e, t) {
                        if (s = !1, a - 1 < 0 || l[a - 1][e] !== t)
                            if (l[a + 1] && l[a + 1][e] === t) {
                                if (t.parentNode === c && t.parentNode.nextSibling) {
                                    s = !0;
                                    for (var o = e + 1; l[a + 1][o] === t;) o += 1;
                                    var n = d.Dom.next(t.parentNode, function(e) {
                                        return e && e.nodeType === Node.ELEMENT_NODE && "TR" === e.nodeName
                                    }, r);
                                    l[a + 1][o] ? n.insertBefore(t, l[a + 1][o]) : n.appendChild(t)
                                }
                            } else t.parentNode && t.parentNode.removeChild(t);
                        else s = !0;
                        if (s && (t.parentNode === c || t !== l[a][e - 1])) {
                            var i = t.rowSpan;
                            1 < i - 1 ? t.setAttribute("rowspan", "" + (i - 1)) : t.removeAttribute("rowspan")
                        }
                    }), c && c.parentNode && c.parentNode.removeChild(c)
                }, h.appendColumn = function(e, t, o) {
                    void 0 === o && (o = !0);
                    var n, i = h.formalMatrix(e);
                    for (void 0 === t && (t = h.getColumnsCount(e) - 1), n = 0; n < i.length; n += 1) {
                        var r = (e.ownerDocument || document).createElement("td"),
                            a = i[n][t],
                            s = !1;
                        o ? (i[n] && a && i[n].length <= t + 1 || a !== i[n][t + 1]) && (a.nextSibling ? a.parentNode && a.parentNode.insertBefore(r, a.nextSibling) : a.parentNode && a.parentNode.appendChild(r), s = !0) : (t - 1 < 0 || i[n][t] !== i[n][t - 1] && i[n][t].parentNode) && (a.parentNode && a.parentNode.insertBefore(r, i[n][t]), s = !0), s || i[n][t].setAttribute("colspan", "" + (parseInt(i[n][t].getAttribute("colspan") || "1", 10) + 1))
                    }
                }, h.removeColumn = function(e, i) {
                    var r, a = h.formalMatrix(e);
                    m.each(a, function(e, t) {
                        var o = t[i];
                        if (r = !1, i - 1 < 0 || a[e][i - 1] !== o ? i + 1 < t.length && a[e][i + 1] === o ? r = !0 : o.parentNode && o.parentNode.removeChild(o) : r = !0, r && (e - 1 < 0 || o !== a[e - 1][i])) {
                            var n = o.colSpan;
                            1 < n - 1 ? o.setAttribute("colspan", "" + (n - 1)) : o.removeAttribute("colspan")
                        }
                    })
                }, h.getSelectedBound = function(e, t) {
                    var o, n, i, r = [
                            [1 / 0, 1 / 0],
                            [0, 0]
                        ],
                        a = h.formalMatrix(e);
                    for (o = 0; o < a.length; o += 1)
                        for (n = 0; n < a[o].length; n += 1) - 1 != t.indexOf(a[o][n]) && (r[0][0] = Math.min(o, r[0][0]), r[0][1] = Math.min(n, r[0][1]), r[1][0] = Math.max(o, r[1][0]), r[1][1] = Math.max(n, r[1][1]));
                    for (o = r[0][0]; o <= r[1][0]; o += 1)
                        for (n = r[0][i = 1]; n <= r[1][1]; n += 1) {
                            for (; a[o][n - i] && a[o][n] === a[o][n - i];) r[0][1] = Math.min(n - i, r[0][1]), r[1][1] = Math.max(n - i, r[1][1]), i += 1;
                            for (i = 1; a[o][n + i] && a[o][n] === a[o][n + i];) r[0][1] = Math.min(n + i, r[0][1]), r[1][1] = Math.max(n + i, r[1][1]), i += 1;
                            for (i = 1; a[o - i] && a[o][n] === a[o - i][n];) r[0][0] = Math.min(o - i, r[0][0]), r[1][0] = Math.max(o - i, r[1][0]), i += 1;
                            for (i = 1; a[o + i] && a[o][n] === a[o + i][n];) r[0][0] = Math.min(o + i, r[0][0]), r[1][0] = Math.max(o + i, r[1][0]), i += 1
                        }
                    return r
                }, h.normalizeTable = function(e) {
                    var t, o, n, i, r = [],
                        a = h.formalMatrix(e);
                    for (o = 0; o < a[0].length; o += 1) {
                        for (i = !(n = 1e6), t = 0; t < a.length; t += 1)
                            if (void 0 !== a[t][o]) {
                                if (a[t][o].colSpan < 2) {
                                    i = !0;
                                    break
                                }
                                n = Math.min(n, a[t][o].colSpan)
                            } if (!i)
                            for (t = 0; t < a.length; t += 1) void 0 !== a[t][o] && h.__mark(a[t][o], "colspan", a[t][o].colSpan - n + 1, r)
                    }
                    for (t = 0; t < a.length; t += 1) {
                        for (i = !(n = 1e6), o = 0; o < a[t].length; o += 1)
                            if (void 0 !== a[t][o]) {
                                if (a[t][o].rowSpan < 2) {
                                    i = !0;
                                    break
                                }
                                n = Math.min(n, a[t][o].rowSpan)
                            } if (!i)
                            for (o = 0; o < a[t].length; o += 1) void 0 !== a[t][o] && h.__mark(a[t][o], "rowspan", a[t][o].rowSpan - n + 1, r)
                    }
                    for (t = 0; t < a.length; t += 1)
                        for (o = 0; o < a[t].length; o += 1) void 0 !== a[t][o] && (a[t][o].hasAttribute("rowspan") && 1 === a[t][o].rowSpan && a[t][o].removeAttribute("rowspan"), a[t][o].hasAttribute("colspan") && 1 === a[t][o].colSpan && a[t][o].removeAttribute("colspan"), a[t][o].hasAttribute("class") && !a[t][o].getAttribute("class") && a[t][o].removeAttribute("class"));
                    h.__unmark(r)
                }, h.mergeSelected = function(e) {
                    var r, a = h.getSelectedBound(e, h.getAllSelectedCells(e)),
                        s = 0,
                        l = null,
                        c = 0,
                        d = [],
                        u = 0,
                        p = 0,
                        f = [];
                    a && (a[0][0] - a[1][0] || a[0][1] - a[1][1]) && (h.formalMatrix(e, function(e, t, o, n, i) {
                        if (!(t < a[0][0] || a[1][0] < t || o < a[0][1] || a[1][1] < o)) {
                            if ((r = e).__i_am_already_was) return;
                            r.__i_am_already_was = !0, t === a[0][0] && r.style.width && (s += r.offsetWidth), "" !== m.trim(e.innerHTML.replace(/<br(\/)?>/g, "")) && d.push(e.innerHTML), 1 < n && (u += n - 1), 1 < i && (p += i - 1), l ? h.__mark(r, "remove", 1, f) : (l = e, c = o)
                        }
                    }), u = a[1][1] - a[0][1] + 1, p = a[1][0] - a[0][0] + 1, l && (1 < u && h.__mark(l, "colspan", u, f), 1 < p && h.__mark(l, "rowspan", p, f), s && (h.__mark(l, "width", (s / e.offsetWidth * 100).toFixed(v.ACCURACY) + "%", f), c && h.setColumnWidthByDelta(e, c, 0, !0, f)), l.innerHTML = d.join("<br/>"), delete l.__i_am_already_was, h.__unmark(f), h.normalizeTable(e), m.each([].slice.call(e.rows), function(e, t) {
                        t.cells.length || t.parentNode.removeChild(t)
                    })))
                }, h.splitHorizontal = function(i) {
                    var r, e, t, a, s, l = [],
                        o = i.ownerDocument || document;
                    h.getAllSelectedCells(i).forEach(function(n) {
                        (e = o.createElement("td")).appendChild(o.createElement("br")), t = o.createElement("tr"), r = h.formalCoordinate(i, n), n.rowSpan < 2 ? (h.formalMatrix(i, function(e, t, o) {
                            r[0] === t && r[1] !== o && e !== n && h.__mark(e, "rowspan", e.rowSpan + 1, l)
                        }), d.Dom.after(d.Dom.closest(n, "tr", i), t), t.appendChild(e)) : (h.__mark(n, "rowspan", n.rowSpan - 1, l), h.formalMatrix(i, function(e, t, o) {
                            r[0] < t && t < r[0] + n.rowSpan && o < r[1] && e.parentNode.rowIndex === t && (s = e), r[0] < t && e === n && (a = i.rows[t])
                        }), s ? d.Dom.after(s, e) : a.insertBefore(e, a.firstChild)), 1 < n.colSpan && h.__mark(e, "colspan", n.colSpan, l), h.__unmark(l), h.restoreSelection(n)
                    }), this.normalizeTable(i)
                }, h.splitVertical = function(t) {
                    var i, o, r, a = [],
                        s = t.ownerDocument || document;
                    h.getAllSelectedCells(t).forEach(function(n) {
                        i = h.formalCoordinate(t, n), n.colSpan < 2 ? h.formalMatrix(t, function(e, t, o) {
                            i[1] === o && i[0] !== t && e !== n && h.__mark(e, "colspan", e.colSpan + 1, a)
                        }) : h.__mark(n, "colspan", n.colSpan - 1, a), (o = s.createElement("td")).appendChild(s.createElement("br")), 1 < n.rowSpan && h.__mark(o, "rowspan", n.rowSpan, a);
                        var e = n.offsetWidth;
                        d.Dom.after(n, o), h.__mark(n, "width", (100 * (r = e / t.offsetWidth / 2)).toFixed(v.ACCURACY) + "%", a), h.__mark(o, "width", (100 * r).toFixed(v.ACCURACY) + "%", a), h.__unmark(a), h.restoreSelection(n)
                    }), h.normalizeTable(t)
                }, h.__mark = function(e, t, o, n) {
                    n.push(e), e.__marked_value || (e.__marked_value = {}), e.__marked_value[t] = void 0 === o ? 1 : o
                }, h.__unmark = function(e) {
                    e.forEach(function(o) {
                        o.__marked_value && (m.each(o.__marked_value, function(e, t) {
                            switch (e) {
                                case "remove":
                                    o.parentNode && o.parentNode.removeChild(o);
                                    break;
                                case "rowspan":
                                    1 < t ? o.setAttribute("rowspan", t) : o.removeAttribute("rowspan");
                                    break;
                                case "colspan":
                                    1 < t ? o.setAttribute("colspan", t) : o.removeAttribute("colspan");
                                    break;
                                case "width":
                                    o.style.width = t
                            }
                            delete o.__marked_value[e]
                        }), delete o.__marked_value)
                    })
                }, h.setColumnWidthByDelta = function(e, t, o, n, i) {
                    var r, a = h.formalMatrix(e);
                    for (r = 0; r < a.length; r += 1) h.__mark(a[r][t], "width", ((a[r][t].offsetWidth + o) / e.offsetWidth * 100).toFixed(v.ACCURACY) + "%", i);
                    n || h.__unmark(i)
                }, h
            }();
        t.Table = n
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            a = o(0),
            s = o(6),
            l = function(o) {
                function e(e) {
                    var t = o.call(this, e) || this;
                    return t.hide = function() {
                        t.context.classList.remove("jodit_context_menu-show"), t.jodit.ownerWindow.removeEventListener("mouseup", t.hide)
                    }, t.context = a.dom('<div data-editor_id="' + t.jodit.id + '" class="jodit_context_menu"></div>', e.ownerDocument), e.ownerDocument.body.appendChild(t.context), t
                }
                return i(e, o), e.prototype.destruct = function() {
                    this.context && this.context.parentNode && this.context.parentNode.removeChild(this.context)
                }, e.prototype.show = function(e, t, o, n) {
                    var i = this,
                        r = this;
                    Array.isArray(o) && (n && (this.context.style.zIndex = "" + n), this.context.innerHTML = "", o.forEach(function(t) {
                        if (t) {
                            var e = a.dom('<a href="javascript:void(0)">' + (t.icon ? s.ToolbarIcon.getIcon(t.icon) : "") + "<span></span></a>", i.jodit.ownerDocument),
                                o = e.querySelector("span");
                            e.addEventListener("click", function(e) {
                                return t.exec && t.exec.call(r, e), r.hide(), !1
                            }), o.innerText = r.jodit.i18n(t.title || ""), r.context.appendChild(e)
                        }
                    }), a.css(r.context, {
                        left: e,
                        top: t
                    }), this.jodit.ownerWindow.addEventListener("mouseup", r.hide), this.context.classList.add("jodit_context_menu-show"))
                }, e
            }(r.Component);
        t.ContextMenu = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            i = function() {
                function e() {}
                return e.prototype.set = function(e, t) {
                    localStorage.setItem(e, "" + t)
                }, e.prototype.get = function(e) {
                    return localStorage.getItem(e)
                }, e
            }();
        t.localStorageProvider = i;
        var r = function() {
            function e(e) {
                this.provider = e, this.prefix = "Jodit_"
            }
            return e.prototype.set = function(e, t) {
                this.provider.set(n.camelCase(this.prefix + e), t)
            }, e.prototype.get = function(e) {
                return this.provider.get(n.camelCase(this.prefix + e))
            }, e
        }();
        t.Storage = r
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(4),
            s = o(24),
            l = o(25),
            c = o(0);
        r.Config.prototype.observer = {
            timeout: 100
        };
        var d = function() {
            function e(e, t, o) {
                this.observer = o, this.oldValue = e, this.newValue = t
            }
            return e.prototype.undo = function() {
                this.observer.snapshot.restore(this.oldValue)
            }, e.prototype.redo = function() {
                this.observer.snapshot.restore(this.newValue)
            }, e
        }();
        t.Command = d;
        var u = function(n) {
            function e(e) {
                var t = n.call(this, e) || this;
                t.onChangeStack = function() {
                    t.__newValue = t.snapshot.make(), s.Snapshot.equal(t.__newValue, t.__startValue) || (t.stack.push(new d(t.__startValue, t.__newValue, t)), t.__startValue = t.__newValue, t.changeStack())
                }, t.stack = new l.Stack, t.snapshot = new s.Snapshot(e);
                var o = c.debounce(t.onChangeStack, e.defaultTimeout);
                return e.events.on("afterInit", function() {
                    t.__startValue = t.snapshot.make(), e.events.on("changeSelection selectionstart selectionchange mousedown mouseup keydown keyup", function() {
                        t.__startValue.html === t.jodit.getNativeEditorValue() && (t.__startValue = t.snapshot.make())
                    }).on("change", function() {
                        t.snapshot.isBlocked || o()
                    })
                }), t
            }
            return i(e, n), e.prototype.redo = function() {
                this.stack.redo() && (this.__startValue = this.snapshot.make(), this.changeStack())
            }, e.prototype.undo = function() {
                this.stack.undo() && (this.__startValue = this.snapshot.make(), this.changeStack())
            }, e.prototype.clear = function() {
                this.__startValue = this.snapshot.make(), this.stack.clear(), this.changeStack()
            }, e.prototype.changeStack = function() {
                this.jodit && this.jodit.events && this.jodit.events.fire("changeStack")
            }, e
        }(a.Component);
        t.Observer = u
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            a = o(3),
            s = function(t) {
                function s() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isBlocked = !1, e
                }
                return i(s, t), s.countNodesBeforeInParent = function(e) {
                    if (!e.parentNode) return 0;
                    var t, o = e.parentNode.childNodes,
                        n = 0,
                        i = null;
                    for (t = 0; t < o.length; t += 1) {
                        if (!i || o[t].nodeType === Node.TEXT_NODE && "" === o[t].textContent || i.nodeType === Node.TEXT_NODE && o[t].nodeType === Node.TEXT_NODE || (n += 1), o[t] === e) return n;
                        i = o[t]
                    }
                    return 0
                }, s.prototype.calcHierarchyLadder = function(e) {
                    var t = [];
                    if (!e || !e.parentNode || !a.Dom.isOrContains(this.jodit.editor, e)) return [];
                    for (; e && e !== this.jodit.editor;) e && t.push(s.countNodesBeforeInParent(e)), e = e.parentNode;
                    return t.reverse()
                }, s.strokeOffset = function(e, t) {
                    for (; e && e.nodeType === Node.TEXT_NODE;)(e = e.previousSibling) && e.nodeType === Node.TEXT_NODE && null !== e.textContent && (t += e.textContent.length);
                    return t
                }, s.prototype.make = function() {
                    var e = {
                        html: "",
                        range: {
                            startContainer: [],
                            startOffset: 0,
                            endContainer: [],
                            endOffset: 0
                        }
                    };
                    e.html = this.jodit.getNativeEditorValue();
                    var t = this.jodit.editorWindow.getSelection();
                    if (t && t.rangeCount) {
                        var o = t.getRangeAt(0),
                            n = this.calcHierarchyLadder(o.startContainer),
                            i = s.strokeOffset(o.startContainer, o.startOffset),
                            r = this.calcHierarchyLadder(o.endContainer),
                            a = s.strokeOffset(o.endContainer, o.endOffset);
                        n.length || o.startContainer === this.jodit.editor || (i = 0), r.length || o.endContainer === this.jodit.editor || (a = 0), e.range = {
                            startContainer: n,
                            startOffset: i,
                            endContainer: r,
                            endOffset: a
                        }
                    }
                    return e
                }, s.prototype.getElementByLadder = function(e) {
                    var t, o = this.jodit.editor;
                    for (t = 0; o && t < e.length; t += 1) o = o.childNodes[e[t]];
                    return o
                }, s.equal = function(e, t) {
                    return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range)
                }, s.prototype.restore = function(e) {
                    this.isBlocked = !0, this.jodit.setEditorValue(e.html);
                    try {
                        if (e.range) {
                            var t = this.jodit.editorDocument.createRange();
                            t.setStart(this.getElementByLadder(e.range.startContainer), e.range.startOffset), t.setEnd(this.getElementByLadder(e.range.endContainer), e.range.endOffset), this.jodit.selection.selectRange(t)
                        }
                    } catch (e) {}
                    this.isBlocked = !1
                }, s
            }(r.Component);
        t.Snapshot = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.commands = [], this.stackPosition = -1
            }
            return e.prototype.clearRedo = function() {
                this.commands.length = this.stackPosition + 1
            }, e.prototype.clear = function() {
                this.commands.length = 0, this.stackPosition = -1
            }, e.prototype.push = function(e) {
                this.clearRedo(), this.commands.push(e), this.stackPosition += 1
            }, e.prototype.undo = function() {
                return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, !0)
            }, e.prototype.redo = function() {
                return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), !0)
            }, e.prototype.canUndo = function() {
                return 0 <= this.stackPosition
            }, e.prototype.canRedo = function() {
                return this.stackPosition < this.commands.length - 1
            }, e
        }();
        t.Stack = n
    }, function(e, t, o) {
        "use strict";
        o(27), "undefined" != typeof window && o(28);
        var n = o(5),
            i = o(2),
            r = o(39),
            a = o(16),
            s = o(83),
            l = o(94),
            c = o(1),
            d = o(6);
        Object.keys(i).forEach(function(e) {
            n.Jodit[e] = i[e]
        });
        var u = function(e) {
            return "__esModule" !== e
        };
        Object.keys(l).filter(u).forEach(function(e) {
            d.ToolbarIcon.icons[e.replace("_", "-")] = l[e]
        }), Object.keys(a).filter(u).forEach(function(e) {
            n.Jodit.modules[e] = a[e]
        }), Object.keys(r).filter(u).forEach(function(e) {
            n.Jodit.plugins[e] = r[e]
        }), Object.keys(s).filter(u).forEach(function(e) {
            n.Jodit.lang[e] = s[e]
        }), n.Jodit.defaultOptions = new c.Config, c.OptionsDefault.prototype = n.Jodit.defaultOptions, e.exports = n.Jodit
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(29), o(30), (n = Element.prototype).matches || (n.matches = void 0 !== n.matchesSelector ? n.matchesSelector : function(e) {
            if (!this.ownerDocument) return [];
            var t = this.ownerDocument.querySelectorAll(e),
                o = this;
            return Array.prototype.some.call(t, function(e) {
                return e === o
            })
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                    n = o.length >>> 0;
                if (0 === n) return !1;
                for (var i, r, a = 0 | t, s = Math.max(a < 0 ? n - Math.abs(a) : a, 0); s < n;) {
                    if ((i = o[s]) === (r = e) || "number" == typeof i && "number" == typeof r && isNaN(i) && isNaN(r)) return !0;
                    s++
                }
                return !1
            }
        })
    }, function(e, t) {
        "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
            "use strict";
            if ("Element" in e) {
                var t = "classList",
                    o = "prototype",
                    n = e.Element[o],
                    i = Object,
                    r = String[o].trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    a = Array[o].indexOf || function(e) {
                        for (var t = 0, o = this.length; t < o; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    },
                    s = function(e, t) {
                        this.name = e, this.code = DOMException[e], this.message = t
                    },
                    l = function(e, t) {
                        if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return a.call(e, t)
                    },
                    c = function(e) {
                        for (var t = r.call(e.getAttribute("class") || ""), o = t ? t.split(/\s+/) : [], n = 0, i = o.length; n < i; n++) this.push(o[n]);
                        this._updateClassName = function() {
                            e.setAttribute("class", "" + this)
                        }
                    },
                    d = c[o] = [],
                    u = function() {
                        return new c(this)
                    };
                if (s[o] = Error[o], d.item = function(e) {
                        return this[e] || null
                    }, d.contains = function(e) {
                        return -1 !== l(this, e += "")
                    }, d.add = function() {
                        for (var e, t = arguments, o = 0, n = t.length, i = !1; - 1 === l(this, e = t[o] + "") && (this.push(e), i = !0), ++o < n;);
                        i && this._updateClassName()
                    }, d.remove = function() {
                        var e, t, o = arguments,
                            n = 0,
                            i = o.length,
                            r = !1;
                        do {
                            for (t = l(this, e = o[n] + ""); - 1 !== t;) this.splice(t, 1), r = !0, t = l(this, e)
                        } while (++n < i);
                        r && this._updateClassName()
                    }, d.toggle = function(e, t) {
                        var o = this.contains(e += ""),
                            n = o ? !0 !== t && "remove" : !1 !== t && "add";
                        return n && this[n](e), !0 === t || !1 === t ? t : !o
                    }, d.toString = function() {
                        return this.join(" ")
                    }, i.defineProperty) {
                    var p = {
                        get: u,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        i.defineProperty(n, t, p)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (p.enumerable = !1, i.defineProperty(n, t, p))
                    }
                } else i[o].__defineGetter__ && n.__defineGetter__(t, u)
            }
        }(window.self), function() {
            "use strict";
            var e = document.createElement("_");
            if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                var t = function(e) {
                    var n = DOMTokenList.prototype[e];
                    DOMTokenList.prototype[e] = function(e) {
                        var t, o = arguments.length;
                        for (t = 0; t < o; t++) n.call(this, e = arguments[t])
                    }
                };
                t("add"), t("remove")
            }
            if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                var o = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
                }
            }
            e = null
        }())
    }, function(e, t, o) {
        "use strict";
        e.exports = o(31).polyfill()
    }, function(e, t, o) {
        var R, H;
        R = o(32), H = o(33), e.exports = function() {
            "use strict";

            function c(e) {
                return "function" == typeof e
            }
            var o = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                n = 0,
                t = void 0,
                i = void 0,
                s = function(e, t) {
                    p[n] = e, p[n + 1] = t, 2 === (n += 2) && (i ? i(f) : b())
                },
                e = "undefined" != typeof window ? window : void 0,
                r = e || {},
                a = r.MutationObserver || r.WebKitMutationObserver,
                l = "undefined" == typeof self && void 0 !== R && "[object process]" === {}.toString.call(R),
                d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function u() {
                var e = setTimeout;
                return function() {
                    return e(f, 1)
                }
            }
            var p = Array(1e3);

            function f() {
                for (var e = 0; e < n; e += 2) {
                    (0, p[e])(p[e + 1]), p[e] = void 0, p[e + 1] = void 0
                }
                n = 0
            }
            var h, m, v, g, b = void 0;

            function _(e, t) {
                var o = this,
                    n = new this.constructor(C);
                void 0 === n[w] && O(n);
                var i = o._state;
                if (i) {
                    var r = arguments[i - 1];
                    s(function() {
                        return z(i, n, r, o._result)
                    })
                } else q(o, n, e, t);
                return n
            }

            function y(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(C);
                return k(t, e), t
            }
            b = l ? function() {
                return R.nextTick(f)
            } : a ? (m = 0, v = new a(f), g = document.createTextNode(""), v.observe(g, {
                characterData: !0
            }), function() {
                g.data = m = ++m % 2
            }) : d ? ((h = new MessageChannel).port1.onmessage = f, function() {
                return h.port2.postMessage(0)
            }) : void 0 === e ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 === (t = e.runOnLoop || e.runOnContext) ? u() : function() {
                        t(f)
                    }
                } catch (e) {
                    return u()
                }
            }() : u();
            var w = Math.random().toString(36).substring(2);

            function C() {}
            var E = void 0,
                j = 1,
                T = 2,
                x = {
                    error: null
                };

            function S(e) {
                try {
                    return e.then
                } catch (e) {
                    return x.error = e, x
                }
            }

            function D(e, t, o) {
                var n, i, r, a;
                t.constructor === e.constructor && o === _ && t.constructor.resolve === y ? (r = e, (a = t)._state === j ? A(r, a._result) : a._state === T ? L(r, a._result) : q(a, void 0, function(e) {
                    return k(r, e)
                }, function(e) {
                    return L(r, e)
                })) : o === x ? (L(e, x.error), x.error = null) : void 0 === o ? A(e, t) : c(o) ? (n = t, i = o, s(function(t) {
                    var o = !1,
                        e = function(e, t, o, n) {
                            try {
                                e.call(t, o, n)
                            } catch (e) {
                                return e
                            }
                        }(i, n, function(e) {
                            o || (o = !0, n !== e ? k(t, e) : A(t, e))
                        }, function(e) {
                            o || (o = !0, L(t, e))
                        });
                    !o && e && (o = !0, L(t, e))
                }, e)) : A(e, t)
            }

            function k(e, t) {
                var o, n;
                e === t ? L(e, new TypeError("You cannot resolve a promise with itself")) : (n = typeof(o = t), null === o || "object" !== n && "function" !== n ? A(e, t) : D(e, t, S(t)))
            }

            function I(e) {
                e._onerror && e._onerror(e._result), N(e)
            }

            function A(e, t) {
                e._state === E && (e._result = t, e._state = j, 0 !== e._subscribers.length && s(N, e))
            }

            function L(e, t) {
                e._state === E && (e._state = T, e._result = t, s(I, e))
            }

            function q(e, t, o, n) {
                var i = e._subscribers,
                    r = i.length;
                e._onerror = null, i[r] = t, i[r + j] = o, i[r + T] = n, 0 === r && e._state && s(N, e)
            }

            function N(e) {
                var t = e._subscribers,
                    o = e._state;
                if (0 !== t.length) {
                    for (var n = void 0, i = void 0, r = e._result, a = 0; a < t.length; a += 3) i = t[a + o], (n = t[a]) ? z(o, n, i, r) : i(r);
                    e._subscribers.length = 0
                }
            }

            function z(e, t, o, n) {
                var i = c(o),
                    r = void 0,
                    a = void 0,
                    s = void 0,
                    l = void 0;
                if (i) {
                    if ((r = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return x.error = e, x
                            }
                        }(o, n)) === x ? (l = !0, a = r.error, r.error = null) : s = !0, t === r) return void L(t, new TypeError("A promises callback cannot return that same promise."))
                } else r = n, s = !0;
                t._state !== E || (i && s ? k(t, r) : l ? L(t, a) : e === j ? A(t, r) : e === T && L(t, r))
            }
            var M = 0;

            function O(e) {
                e[w] = M++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var P = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(C), this.promise[w] || O(this.promise), o(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && A(this.promise, this._result))) : L(this.promise, Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(t, e) {
                        var o = this._instanceConstructor,
                            n = o.resolve;
                        if (n === y) {
                            var i = S(t);
                            if (i === _ && t._state !== E) this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                            else if (o === B) {
                                var r = new o(C);
                                D(r, t, i), this._willSettleAt(r, e)
                            } else this._willSettleAt(new o(function(e) {
                                return e(t)
                            }), e)
                        } else this._willSettleAt(n(t), e)
                    }, e.prototype._settledAt = function(e, t, o) {
                        var n = this.promise;
                        n._state === E && (this._remaining--, e === T ? L(n, o) : this._result[t] = o), 0 === this._remaining && A(n, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var o = this;
                        q(e, void 0, function(e) {
                            return o._settledAt(j, t, e)
                        }, function(e) {
                            return o._settledAt(T, t, e)
                        })
                    }, e
                }(),
                B = function() {
                    function t(e) {
                        this[w] = M++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof t ? function(t, e) {
                            try {
                                e(function(e) {
                                    k(t, e)
                                }, function(e) {
                                    L(t, e)
                                })
                            } catch (e) {
                                L(t, e)
                            }
                        }(this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return t.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, t.prototype.finally = function(t) {
                        var o = this.constructor;
                        return c(t) ? this.then(function(e) {
                            return o.resolve(t()).then(function() {
                                return e
                            })
                        }, function(e) {
                            return o.resolve(t()).then(function() {
                                throw e
                            })
                        }) : this.then(t, t)
                    }, t
                }();
            return B.prototype.then = _, B.all = function(e) {
                return new P(this, e).promise
            }, B.race = function(i) {
                var r = this;
                return o(i) ? new r(function(e, t) {
                    for (var o = i.length, n = 0; n < o; n++) r.resolve(i[n]).then(e, t)
                }) : new r(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, B.resolve = y, B.reject = function(e) {
                var t = new this(C);
                return L(t, e), t
            }, B._setScheduler = function(e) {
                i = e
            }, B._setAsap = function(e) {
                s = e
            }, B._asap = s, B.polyfill = function() {
                var e = void 0;
                if (void 0 !== H) e = H;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var o = null;
                    try {
                        o = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === o && !t.cast) return
                }
                e.Promise = B
            }, B.Promise = B
        }()
    }, function(e, t) {
        var o, n, i = e.exports = {};

        function r() {
            throw Error("setTimeout has not been defined")
        }

        function a() {
            throw Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (o === setTimeout) return setTimeout(t, 0);
            if ((o === r || !o) && setTimeout) return (o = setTimeout)(t, 0);
            try {
                return o(t, 0)
            } catch (e) {
                try {
                    return o.call(null, t, 0)
                } catch (e) {
                    return o.call(this, t, 0)
                }
            }
        }! function() {
            try {
                o = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                o = r
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                n = a
            }
        }();
        var l, c = [],
            d = !1,
            u = -1;

        function p() {
            d && l && (d = !1, l.length ? c = l.concat(c) : u = -1, c.length && f())
        }

        function f() {
            if (!d) {
                var e = s(p);
                d = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++u < t;) l && l[u].run();
                    u = -1, t = c.length
                }
                l = null, d = !1,
                    function(t) {
                        if (n === clearTimeout) return clearTimeout(t);
                        if ((n === a || !n) && clearTimeout) return (n = clearTimeout)(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        i.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            c.push(new h(e, t)), 1 !== c.length || d || s(f)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(KM, LM) {
        var MM;
        MM = function() {
            return this
        }();
        try {
            MM = MM || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (MM = window)
        }
        KM.exports = MM
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(n) {
            function e(e, t) {
                var o = n.call(this, e) || this;
                return o.target = t, o.container = e.ownerDocument.createElement("div"), o.container.classList.add("jodit_statusbar"), t.appendChild(o.container), o.hide(), o
            }
            return i(e, n), e.prototype.hide = function() {
                this.container && (this.container.style.display = "none")
            }, e.prototype.show = function() {
                this.container && (this.container.style.display = "block")
            }, e.prototype.append = function(e, t) {
                void 0 === t && (t = !1);
                var o = this.jodit.ownerDocument.createElement("div");
                o.classList.add("jodit_statusbar_item"), t && o.classList.add("jodit_statusbar_item-right"), o.appendChild(e), this.container.appendChild(o), this.show(), this.jodit.events.fire("resize")
            }, e.prototype.destruct = function() {
                n.prototype.destruct.call(this), this.container.parentNode && this.container.parentNode.removeChild(this.container)
            }, e
        }(o(4).Component);
        t.StatusBar = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0);
        t.Tooltip = function(e) {
            var o = this;
            this.button = e, this.timeout = 0, this.show = function() {
                var e = function() {
                        o.button.container.appendChild(o.container), o.container.style.marginLeft = -(o.container.offsetWidth - o.button.container.offsetWidth) / 2 + "px"
                    },
                    t = o.button.jodit.options.showTooltipDelay;
                o.button.jodit.events.fire("hideTooltip"), t ? o.timeout = window.setTimeout(e, t) : e()
            }, this.hide = function() {
                window.clearTimeout(o.timeout), o.container.parentNode && o.container.parentNode.removeChild(o.container)
            }, e.control.tooltip && (this.container = e.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_tooltip"), this.container.innerHTML = e.jodit.i18n(e.control.tooltip) + (e.control.hotkeys ? "<br>" + n.asArray(e.control.hotkeys).join(" ") : ""), e.jodit.events.on(e.anchor, "mouseenter", this.show).on(e.anchor, "mouseleave", this.hide).on("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", this.hide))
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(0),
            r = o(15),
            l = o(8),
            c = o(14),
            d = function(r) {
                function e(e, t, o, n) {
                    void 0 === n && (n = "jodit_toolbar_list");
                    var i = r.call(this, e, t, o, n) || this;
                    return i.target = t, i.current = o, i.className = n, i.defaultControl = {
                        template: function(e, t, o) {
                            return i.jodit.i18n(o)
                        }
                    }, i.getContainer = function() {
                        return i.toolbar.container
                    }, i
                }
                return i(e, r), e.prototype.doClose = function() {
                    this.toolbar && this.toolbar.destruct()
                }, e.prototype.doOpen = function(n) {
                    var i = this;
                    this.toolbar = new l.ToolbarCollection(this.jodit);
                    var e = "string" == typeof n.list ? n.list.split(/[\s,]/) : n.list;
                    s.each(e, function(e, t) {
                        var o;
                        void 0 !== i.jodit.options.controls[t] ? o = new c.ToolbarButton(i.jodit, a({
                            name: "" + t
                        }, i.jodit.options.controls[t]), i.current) : void 0 !== i.jodit.options.controls[e] && "object" == typeof t ? o = new c.ToolbarButton(i.jodit, a({
                            name: "" + e
                        }, i.jodit.options.controls[e], t), i.current) : (o = new c.ToolbarButton(i.jodit, {
                            name: "" + e,
                            exec: n.exec,
                            command: n.command,
                            isActive: n.isActiveChild,
                            isDisable: n.isDisableChild,
                            mode: n.mode,
                            args: [n.args && n.args[0] || e, n.args && n.args[1] || t]
                        }, i.current)).textBox.innerHTML = (n.template || i.defaultControl.template)(i.jodit, e, t), i.toolbar.appendChild(o)
                    }), this.container.appendChild(this.toolbar.container), this.container.style.marginLeft = null, this.toolbar.checkActiveButtons()
                }, e
            }(r.ToolbarPopup);
        t.ToolbarList = d
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(o) {
            function e(e) {
                var t = o.call(this, e) || this;
                return t.container.classList.add("jodit_toolbar_btn-break"), t
            }
            return i(e, o), e
        }(o(10).ToolbarElement);
        t.ToolbarBreak = r
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(o) {
            function e(e) {
                var t = o.call(this, e) || this;
                return t.container.classList.add("jodit_toolbar_btn-separator"), t
            }
            return i(e, o), e
        }(o(10).ToolbarElement);
        t.ToolbarSeparator = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(40);
        t.addNewLine = n.addNewLine;
        var i = o(41);
        t.autofocus = i.autofocus;
        var r = o(42);
        t.backspace = r.backspace;
        var a = o(43);
        t.bold = a.bold;
        var s = o(44);
        t.cleanHtml = s.cleanHtml;
        var l = o(45);
        t.color = l.color, o(46);
        var c = o(47);
        t.enter = c.enter;
        var d = o(48);
        t.errorMessages = d.errorMessages;
        var u = o(49);
        t.font = u.font;
        var p = o(50);
        t.formatBlock = p.formatBlock;
        var f = o(51);
        t.fullsize = f.fullsize;
        var h = o(52);
        t.iframe = h.iframe;
        var m = o(53);
        t.indent = m.indent;
        var v = o(54);
        t.imageProcessor = v.imageProcessor;
        var g = o(55);
        t.imageProperties = g.imageProperties;
        var b = o(56);
        t.inlinePopup = b.inlinePopup;
        var _ = o(57);
        t.justify = _.justify;
        var y = o(58);
        t.link = y.link;
        var w = o(59);
        t.limit = w.limit;
        var C = o(60);
        t.media = C.media;
        var E = o(61);
        t.mobile = E.mobile;
        var j = o(62);
        t.orderedlist = j.orderedlist;
        var T = o(63);
        t.paste = T.paste;
        var x = o(64);
        t.placeholder = x.placeholder;
        var S = o(65);
        t.redoundo = S.redoundo;
        var D = o(66);
        t.resizer = D.resizer;
        var k = o(67);
        t.size = k.size;
        var I = o(68);
        t.source = I.source;
        var A = o(69);
        t.symbols = A.symbols;
        var L = o(70);
        t.hotkeys = L.hotkeys;
        var q = o(71);
        t.table = q.TableProcessor;
        var N = o(75);
        t.tableKeyboardNavigation = N.tableKeyboardNavigation;
        var z = o(76);
        t.search = z.search;
        var M = o(77);
        t.sticky = M.sticky;
        var O = o(78);
        t.stat = O.stat;
        var P = o(79);
        t.xpath = P.xpath;
        var B = o(80);
        t.DragAndDropElement = B.DragAndDropElement;
        var R = o(81);
        t.DragAndDrop = R.DragAndDrop;
        var H = o(82);
        t.pasteStorage = H.pasteStorage
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            m = o(0),
            v = o(3),
            r = o(6);
        n.Config.prototype.addNewLine = !0, n.Config.prototype.addNewLineOnDBLClick = !0, n.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], t.addNewLine = function(a) {
            if (a.options.addNewLine) {
                var s, l, c = m.dom('<div role="button" tabIndex="-1" title="' + a.i18n("Break") + '" class="jodit-add-new-line"><span>' + r.ToolbarIcon.getIcon("enter") + "</span></div>", a.ownerDocument),
                    d = RegExp("^(" + a.options.addNewLineTagsTriggers.join("|") + ")$", "i"),
                    u = !1,
                    p = !1,
                    e = !1,
                    i = function() {
                        clearTimeout(s), e = !1, c.style.display = "none", u = !0
                    },
                    f = function(e) {
                        return null !== e && v.Dom.isBlock(e) && !/^(img|table|iframe|hr)$/i.test(e.nodeName)
                    },
                    h = function() {
                        u || e || (clearTimeout(s), s = window.setTimeout(i, 500))
                    };
                a.events.on("beforeDestruct", function() {
                    c.parentNode && c.parentNode.removeChild(c)
                }).on("afterInit", function() {
                    a.container.appendChild(c), a.events.on(c, "mousemove", function(e) {
                        e.stopPropagation()
                    }).on(c, "mousedown touchstart", function(e) {
                        var t = a.editorDocument.createElement(a.options.enter);
                        p && l && l.parentNode ? l.parentNode.insertBefore(t, l) : a.editor.appendChild(t), a.selection.setCursorIn(t), a.setEditorValue(), i(), e.preventDefault()
                    })
                }).on("afterInit", function() {
                    a.events.on(a.editor, "scroll", function() {
                        i()
                    }).on(a.container, "mouseleave", h).on(c, "mouseenter", function() {
                        clearTimeout(s), e = !0
                    }).on(c, "mouseleave", function() {
                        e = !1
                    }).on(a.editor, "dblclick", function(e) {
                        if (!a.options.readonly && a.options.addNewLineOnDBLClick && e.target === a.editor && a.selection.isCollapsed()) {
                            var t = m.offset(a.editor, a, a.editorDocument),
                                o = e.pageY - a.editorWindow.pageYOffset,
                                n = a.editorDocument.createElement(a.options.enter);
                            Math.abs(o - t.top) < Math.abs(o - (t.height + t.top)) && a.editor.firstChild ? a.editor.insertBefore(n, a.editor.firstChild) : a.editor.appendChild(n), a.selection.setCursorIn(n), a.setEditorValue(), i(), e.preventDefault()
                        }
                    }).on(a.editor, "mousemove", m.debounce(function(e) {
                        var t = a.editorDocument.elementFromPoint(e.pageX - a.editorWindow.pageXOffset, e.pageY - a.editorWindow.pageYOffset);
                        if ((!t || !v.Dom.isOrContains(c, t)) && t && v.Dom.isOrContains(a.editor, t))
                            if (t && t.nodeName.match(d) && v.Dom.isOrContains(a.editor, t) || (t = v.Dom.closest(t, d, a.editor))) {
                                if (t.nodeName.match(d)) {
                                    var o = v.Dom.up(t, v.Dom.isBlock, a.editor);
                                    o && o !== a.editor && (t = o)
                                }
                                var n = m.offset(a.editor, a, a.editorDocument),
                                    i = m.offset(t, a, a.editorDocument),
                                    r = !1;
                                Math.abs(e.pageY - i.top) < 10 && ((r = i.top) - n.top < 20 || (r -= 15), p = !0), Math.abs(e.pageY - (i.top + i.height)) < 10 && (n.top + n.height - (r = i.top + i.height) < 25 || (r += 15), p = !1), !1 !== r && (p && !v.Dom.prev(t, f, a.editor) || !p && !v.Dom.next(t, f, a.editor)) ? (c.style.top = r + "px", l = t, a.options.readonly || a.isLocked() || a.container.classList.contains("jodit_popup_active") || (clearTimeout(s), c.classList.toggle("jodit-add-new-line_after", !p), c.style.display = "block", c.style.width = a.editor.clientWidth + "px", u = !1)) : (l = !1, h())
                            } else h()
                    }, a.defaultTimeout))
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            i = o(3);
        n.Config.prototype.autofocus = !1, t.autofocus = function(t) {
            var e;
            t.events.on("afterInit", function() {
                t.options.autofocus && (t.defaultTimeout ? e = window.setTimeout(t.selection.focus, 300) : t.selection.focus())
            }).on("mousedown", function(e) {
                t.isEditorMode() && e.target && i.Dom.isBlock(e.target) && !e.target.childNodes.length && (t.editor === e.target ? t.selection.focus() : t.selection.setCursorIn(e.target))
            }).on("beforeDestruct", function() {
                clearTimeout(e)
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var y = o(2),
            w = o(0),
            C = o(3),
            n = o(2);
        t.backspace = function(v) {
            var g = function(e) {
                    var t, o = e;
                    w.normalizeNode(e);
                    do {
                        var n = o.innerHTML.replace(y.INVISIBLE_SPACE_REG_EXP, "");
                        if (n.length && "<br>" !== n || C.Dom.isCell(o, v.editorWindow) || !o.parentNode || e === v.editor) break;
                        (t = o.parentNode).removeChild(o), o = t
                    } while (o && o !== v.editor)
                },
                c = function(e, t, o) {
                    if (e.node && e.node.nodeType === Node.TEXT_NODE && "string" == typeof e.node.nodeValue) {
                        for (var n = t ? e.node.nodeValue.length : 0, i = n, r = e.node.nodeValue, a = t ? -1 : 1; 0 <= n && n <= r.length && r[n + (t ? -1 : 0)] === y.INVISIBLE_SPACE;) n += a;
                        n !== i && (t ? r = r.substr(0, n) + r.substr(i) : (r = r.substr(0, i) + r.substr(n), n = i), e.node.nodeValue = r), o.setStart(e.node, n), o.collapse(!0), v.selection.selectRange(o);
                        var s = C.Dom.findInline(e.node, t, v.editor);
                        if (r.length) {
                            var l = !1;
                            if (t ? n && (l = !0) : n < r.length && (l = !0), l) return !0
                        } else o.setStartBefore(e.node), o.collapse(!0), v.selection.selectRange(o), e.node && e.node.parentNode && e.node.parentNode.removeChild(e.node), e.node = s;
                        if (s && (C.Dom.isInlineBlock(s) && (s = t ? s.lastChild : s.firstChild), s && s.nodeType === Node.TEXT_NODE)) return e.node = s, c(e, t, o)
                    }
                },
                t = n.MAY_BE_REMOVED_WITH_KEY,
                r = function(e) {
                    if (e && t.test(e.nodeName)) return e.parentNode && e.parentNode.removeChild(e), !1
                },
                b = function(e, t, o) {
                    if (e.node) {
                        var n = e.node;
                        if (void 0 !== c(e, t, o)) return !0;
                        if (e.node || (e.node = n.parentNode), e.node === v.editor) return !1;
                        var i = e.node;
                        if (!1 === r(i)) return !1;
                        for (i && (i = t ? i.previousSibling : i.nextSibling); i && i.nodeType === Node.TEXT_NODE && i.nodeValue && i.nodeValue.match(/^[\n\r]+$/);) i = t ? i.previousSibling : i.nextSibling;
                        return r(i)
                    }
                },
                _ = function(e) {
                    return !(null !== e.nodeName.match(/^(TD|TH|TR|TABLE|LI)$/) || !C.Dom.isEmpty(e) && null === e.nodeName.match(t) && (e.nodeType === Node.TEXT_NODE && !C.Dom.isEmptyTextNode(e) || e.childNodes.length && ![].slice.call(e.childNodes).every(_)))
                };
            v.events.on("afterCommand", function(e) {
                if ("delete" === e) {
                    var t = v.selection.current();
                    if (t && t.firstChild && "BR" === t.firstChild.nodeName && t.removeChild(t.firstChild), !(w.trim(v.editor.innerText) || v.editor.querySelector("img") || t && C.Dom.closest(t, "table", v.editor))) {
                        v.editor.innerHTML = "";
                        var o = v.selection.setCursorIn(v.editor);
                        o.parentNode && o.parentNode.removeChild(o)
                    }
                }
            }).on("keydown", function(e) {
                if (e.which === y.KEY_BACKSPACE || e.which === y.KEY_DELETE) {
                    var t = e.which === y.KEY_BACKSPACE;
                    if (v.selection.isFocused() || v.selection.focus(), !v.selection.isCollapsed()) return v.execCommand("Delete"), !1;
                    var o = v.editorWindow.getSelection(),
                        n = !!o.rangeCount && o.getRangeAt(0);
                    if (!n) return !1;
                    var i = v.ownerDocument.createTextNode(y.INVISIBLE_SPACE),
                        r = v.editorDocument.createElement("span");
                    try {
                        if (n.insertNode(i), !C.Dom.isOrContains(v.editor, i)) return !1;
                        var a = C.Dom.up(i, C.Dom.isBlock, v.editor),
                            s = C.Dom.findInline(i, t, v.editor),
                            l = {
                                node: s
                            },
                            c = void 0;
                        if (s ? c = b(l, t, n) : i.parentNode && (c = b({
                                node: t ? i.parentNode.previousSibling : i.parentNode.nextSibling
                            }, t, n)), void 0 !== c) return !!c && void 0;
                        if (a && a.nodeName.match(/^(TD)$/)) return !1;
                        var d = t ? C.Dom.prev(l.node || i, C.Dom.isBlock, v.editor) : C.Dom.next(l.node || i, C.Dom.isBlock, v.editor);
                        if (!d && a && a.parentNode) {
                            d = v.editorDocument.createElement(v.options.enter);
                            for (var u = a; u && u.parentNode && u.parentNode !== v.editor;) u = u.parentNode;
                            u.parentNode && u.parentNode.insertBefore(d, u)
                        } else if (d && _(d)) return d.parentNode && d.parentNode.removeChild(d), !1;
                        if (d) {
                            var p = v.selection.setCursorIn(d, !t);
                            v.selection.insertNode(r, !1, !1), p.nodeType === Node.TEXT_NODE && p.nodeValue === y.INVISIBLE_SPACE && p.parentNode && p.parentNode.removeChild(p)
                        }
                        if (a) {
                            if (g(a), d && a.parentNode && (a.nodeName === d.nodeName && a.parentNode && d.parentNode && a.parentNode !== v.editor && d.parentNode !== v.editor && a.parentNode !== d.parentNode && a.parentNode.nodeName === d.parentNode.nodeName && (a = a.parentNode, d = d.parentNode), C.Dom.moveContent(a, d, !t), w.normalizeNode(d)), d && "LI" === d.nodeName) {
                                var f = C.Dom.closest(d, "Ul|OL", v.editor);
                                if (f) {
                                    var h = f.nextSibling;
                                    h && h.nodeName === f.nodeName && f !== h && (C.Dom.moveContent(h, f, !t), h.parentNode && h.parentNode.removeChild(h))
                                }
                            }
                            return g(a), !1
                        }
                    } finally {
                        if (i.parentNode && i.nodeValue === y.INVISIBLE_SPACE) {
                            var m = i.parentNode;
                            m.removeChild(i), !m.firstChild && m.parentNode && m !== v.editor && m.parentNode.removeChild(m)
                        }
                        r && C.Dom.isOrContains(v.editor, r, !0) && (p = v.selection.setCursorBefore(r), r.parentNode && r.parentNode.removeChild(r), p && p.parentNode && (C.Dom.findInline(p, !0, p.parentNode) || C.Dom.findInline(p, !0, p.parentNode)) && p.parentNode.removeChild(p)), v.setEditorValue()
                    }
                    return !1
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(5),
            n = o(1);
        n.Config.prototype.controls.subscript = {
            tags: ["sub"],
            tooltip: "subscript"
        }, n.Config.prototype.controls.superscript = {
            tags: ["sup"],
            tooltip: "superscript"
        }, n.Config.prototype.controls.bold = {
            tagRegExp: /^(strong|b)$/i,
            tags: ["strong", "b"],
            css: {
                "font-weight": ["bold", "700"]
            },
            tooltip: "Bold"
        }, n.Config.prototype.controls.italic = {
            tagRegExp: /^(em|i)$/i,
            tags: ["em", "i"],
            css: {
                "font-style": "italic"
            },
            tooltip: "Italic"
        }, n.Config.prototype.controls.underline = {
            tagRegExp: /^(u)$/i,
            tags: ["u"],
            css: {
                "text-decoration": "underline"
            },
            tooltip: "Underline"
        }, n.Config.prototype.controls.strikethrough = {
            tagRegExp: /^(s)$/i,
            tags: ["s"],
            css: {
                "text-decoration": "line-through"
            },
            tooltip: "Strike through"
        }, t.bold = function(i) {
            var e = function(e) {
                var t = a.Jodit.defaultOptions.controls[e],
                    o = r({}, t.css),
                    n = {};
                return Object.keys(o).forEach(function(e) {
                    n[e] = Array.isArray(o[e]) ? o[e][0] : o[e]
                }), i.selection.applyCSS(n, t.tags ? t.tags[0] : void 0, t.css), i.setEditorValue(), !1
            };
            i.registerCommand("bold", {
                exec: e,
                hotkeys: ["ctrl+b", "cmd+b"]
            }), i.registerCommand("italic", {
                exec: e,
                hotkeys: ["ctrl+i", "cmd+i"]
            }), i.registerCommand("underline", {
                exec: e,
                hotkeys: ["ctrl+u", "cmd+u"]
            }), i.registerCommand("strikethrough", {
                exec: e
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            l = o(2),
            m = o(0),
            v = o(3),
            g = o(2);
        n.Config.prototype.cleanHTML = {
            timeout: 300,
            removeEmptyElements: !0,
            fillEmptyParagraph: !0,
            replaceNBSP: !0,
            cleanOnPaste: !0,
            replaceOldTags: {
                i: "em",
                b: "strong"
            },
            allowTags: !1,
            denyTags: !1
        }, n.Config.prototype.controls.eraser = {
            command: "removeFormat",
            tooltip: "Clear Formatting"
        }, t.cleanHtml = function(d) {
            d.options.cleanHTML.cleanOnPaste && d.events.on("processPaste", function(e, t) {
                return m.cleanFromWord(t)
            });
            var u, r = /([^\[]*)\[([^\]]+)]/,
                a = /[\s]*,[\s]*/,
                s = /^(.*)[\s]*=[\s]*(.*)$/,
                e = function(t) {
                    var i = {};
                    return "string" == typeof t ? (t.split(a).map(function(e) {
                        e = m.trim(e);
                        var t = r.exec(e),
                            o = {};
                        if (t) {
                            var n = t[2].split(a);
                            t[1] && (n.forEach(function(e) {
                                e = m.trim(e);
                                var t = s.exec(e);
                                t ? o[t[1]] = t[2] : o[e] = !0
                            }), i[t[1].toUpperCase()] = o)
                        } else i[e.toUpperCase()] = !0
                    }), i) : !!t && (Object.keys(t).forEach(function(e) {
                        i[e.toUpperCase()] = t[e]
                    }), i)
                },
                p = e(d.options.cleanHTML.allowTags),
                f = e(d.options.cleanHTML.denyTags),
                h = function(e, t) {
                    void 0 === t && (t = !1);
                    for (var o = t ? e.nextSibling : e.previousSibling; o;) {
                        if (o.nodeType === Node.ELEMENT_NODE || !v.Dom.isEmptyTextNode(o)) return !0;
                        o = t ? o.nextSibling : o.previousSibling
                    }
                    return !1
                };
            d.events.on("change afterSetMode afterInit mousedown keydown", m.debounce(function() {
                if (!d.isDestructed && d.isEditorMode()) {
                    u = d.selection.current();
                    var e = null,
                        i = [],
                        r = !1,
                        a = 0,
                        t = d.options.cleanHTML.replaceOldTags;
                    if (t && u) {
                        var o = Object.keys(t).join("|");
                        if (d.selection.isCollapsed()) {
                            var n = v.Dom.closest(u, o, d.editor);
                            if (n) {
                                var s = d.selection.save(),
                                    l = t[n.nodeName.toLowerCase()] || t[n.nodeName];
                                v.Dom.replace(n, l, !0, !1, d.editorDocument), d.selection.restore(s)
                            }
                        }
                    }
                    var c = function(t) {
                        if (t) {
                            if ((n = t).nodeType !== Node.TEXT_NODE && (p && !p[n.nodeName] || f && f[n.nodeName]) || u && "BR" === n.nodeName && h(n) && !h(n, !0) && v.Dom.up(n, v.Dom.isBlock, d.editor) !== v.Dom.up(u, v.Dom.isBlock, d.editor) || d.options.cleanHTML.removeEmptyElements && !1 !== u && n.nodeType === Node.ELEMENT_NODE && null !== n.nodeName.match(g.IS_INLINE) && !d.selection.isMarker(n) && 0 === m.trim(n.innerHTML).length && !v.Dom.isOrContains(n, u)) return i.push(t), c(t.nextSibling);
                            if (d.options.cleanHTML.fillEmptyParagraph && v.Dom.isBlock(t) && v.Dom.isEmpty(t, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                                var e = d.editorDocument.createElement("br");
                                t.appendChild(e)
                            }
                            if (p && !0 !== p[t.nodeName] && t.attributes && t.attributes.length) {
                                var o = [];
                                for (a = 0; a < t.attributes.length; a += 1)(!p[t.nodeName][t.attributes[a].name] || !0 !== p[t.nodeName][t.attributes[a].name] && p[t.nodeName][t.attributes[a].name] !== t.attributes[a].value) && o.push(t.attributes[a].name);
                                o.length && (r = !0), o.forEach(function(e) {
                                    t.removeAttribute(e)
                                })
                            }
                            c(t.firstChild), c(t.nextSibling)
                        }
                        var n
                    };
                    d.editor.firstChild && (e = d.editor.firstChild), c(e), i.forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), (i.length || r) && d.events && d.events.fire("syncho")
                }
            }, d.options.cleanHTML.timeout)).on("keyup", function() {
                if (!d.options.readonly) {
                    var t = d.selection.current();
                    if (t) {
                        var e = v.Dom.up(t, v.Dom.isBlock, d.editor);
                        e && v.Dom.all(e, function(e) {
                            e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && l.INVISIBLE_SPACE_REG_EXP.test(e.nodeValue) && 0 !== e.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, "").length && (e.nodeValue = e.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, ""), e === t && d.selection.isCollapsed() && d.selection.setCursorAfter(e))
                        })
                    }
                }
            }).on("afterCommand", function(e) {
                var t, o, n = d.selection;
                switch (e.toLowerCase()) {
                    case "inserthorizontalrule":
                        (t = d.editor.querySelector("hr[id=null]")) && ((o = v.Dom.next(t, v.Dom.isBlock, d.editor, !1)) || (o = d.editorDocument.createElement(d.options.enter)) && v.Dom.after(t, o), n.setCursorIn(o));
                        break;
                    case "removeformat":
                        o = n.current();
                        var i = function(t) {
                            switch (t.nodeType) {
                                case Node.ELEMENT_NODE:
                                    v.Dom.each(t, i), "FONT" === t.nodeName ? v.Dom.unwrap(t) : ([].slice.call(t.attributes).forEach(function(e) {
                                        -1 == ["src", "href", "rel", "content"].indexOf(e.name.toLowerCase()) && t.removeAttribute(e.name)
                                    }), m.normalizeNode(t));
                                    break;
                                case Node.TEXT_NODE:
                                    d.options.cleanHTML.replaceNBSP && t.nodeType === Node.TEXT_NODE && null !== t.nodeValue && t.nodeValue.match(l.SPACE_REG_EXP) && (t.nodeValue = t.nodeValue.replace(l.SPACE_REG_EXP, " "));
                                    break;
                                default:
                                    t.parentNode && t.parentNode.removeChild(t)
                            }
                        };
                        if (n.isCollapsed())
                            for (; o && o.nodeType !== Node.ELEMENT_NODE && o !== d.editor;) i(o), o && (o = o.parentNode);
                        else d.selection.eachSelection(function(e) {
                            i(e)
                        })
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = o(0),
            n = o(1),
            i = o(12),
            d = i.Widget.TabsWidget,
            u = i.Widget.ColorPickerWidget,
            p = o(3);
        n.Config.prototype.controls.brush = {
            isActive: function(t, e, o) {
                var n = t.selection.current(),
                    i = o.container.querySelector("svg");
                if (n) {
                    var r = p.Dom.closest(n, function(e) {
                            return p.Dom.isBlock(e) || p.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        a = "" + c.css(r, "color"),
                        s = "" + c.css(r, "background-color");
                    if (a !== "" + c.css(t.editor, "color")) return i && (i.style.fill = a), !0;
                    if (s !== "" + c.css(t.editor, "background-color")) return i && (i.style.fill = s), !0
                }
                return i && i.style.fill && (i.style.fill = null), !1
            },
            popup: function(t, e, o, n) {
                var i = "",
                    r = "",
                    a = null;
                e && e !== t.editor && p.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE && (i = "" + c.css(e, "color"), r = "" + c.css(e, "background-color"), a = e);
                var s = u(t, function(e) {
                        a ? a.style.backgroundColor = e : t.execCommand("background", !1, e), n()
                    }, r),
                    l = u(t, function(e) {
                        a ? a.style.color = e : t.execCommand("forecolor", !1, e), n()
                    }, i);
                return d(t, "background" === t.options.colorPickerDefaultTab ? {
                    Background: s,
                    Text: l
                } : {
                    Text: l,
                    Background: s
                }, a)
            },
            tooltip: "Fill color or set the text color"
        }, t.color = function(i) {
            var e = function(e, t, o) {
                var n = c.normalizeColor(o);
                switch (e) {
                    case "background":
                        i.selection.applyCSS({
                            backgroundColor: n || ""
                        });
                        break;
                    case "forecolor":
                        i.selection.applyCSS({
                            color: n || ""
                        })
                }
                return i.setEditorValue(), !1
            };
            i.registerCommand("forecolor", e), i.registerCommand("background", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            d = o(3),
            u = o(0),
            p = "copyformat",
            f = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"],
            h = function(e, t, o, n) {
                var i = u.css(o, t);
                return i == n[t] && (i = o.parentNode && o !== e.editor && o.parentNode !== e.editor ? h(e, t, o.parentNode, n) : void 0), i
            };
        n.Config.prototype.controls.copyformat = {
            exec: function(t, e) {
                if (e)
                    if (t.buffer[p]) t.buffer[p] = !1, t.events.off(t.editor, "mouseup." + p);
                    else {
                        var o = {},
                            n = d.Dom.up(e, function(e) {
                                return e && e.nodeType !== Node.TEXT_NODE
                            }, t.editor) || t.editor,
                            i = t.editorDocument.createElement("span");
                        t.editor.appendChild(i), f.forEach(function(e) {
                            o[e] = u.css(i, e)
                        }), i !== t.editor && i.parentNode && i.parentNode.removeChild(i);
                        var r = (a = t, l = o, c = {}, (s = n) && f.forEach(function(e) {
                            c[e] = h(a, e, s, l), e.match(/border(Style|Color)/) && !c.borderWidth && (c[e] = void 0)
                        }), c);
                        t.events.on(t.editor, "mouseup." + p, function() {
                            t.buffer[p] = !1;
                            var e = t.selection.current();
                            e && ("IMG" === e.nodeName ? u.css(e, r) : t.selection.applyCSS(r)), t.events.off(t.editor, "mouseup." + p)
                        }), t.buffer[p] = !0
                    } var a, s, l, c
            },
            isActive: function(e) {
                return !!e.buffer[p]
            },
            tooltip: "Paint format"
        }
    }, function(e, g, t) {
        "use strict";
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var b = t(0),
            _ = t(2),
            y = t(3);
        g.insertParagraph = function(e, t, o, n) {
            o || (o = e.options.enter.toLowerCase());
            var i = e.editorDocument.createElement(o),
                r = e.editorDocument.createElement("br");
            i.appendChild(r), n && n.cssText && i.setAttribute("style", n.cssText), e.selection.insertNode(i, !1, !1), e.selection.setCursorBefore(r);
            var a = e.editorDocument.createRange();
            return a.setStartBefore("br" !== o ? r : i), a.collapse(!0), e.selection.selectRange(a), t && t.parentNode && t.parentNode.removeChild(t), b.scrollIntoView(i, e.editor, e.editorDocument), e.events && e.events.fire("synchro"), i
        }, g.enter = function(v) {
            v.events.on("keydown", function(e) {
                if (e.which === _.KEY_ENTER) {
                    var t = v.events.fire("beforeEnter", e);
                    if (void 0 !== t) return t;
                    v.selection.isCollapsed() || v.execCommand("Delete"), v.selection.focus();
                    var o = v.selection.current(!1),
                        n = v.editorWindow.getSelection(),
                        i = n.rangeCount ? n.getRangeAt(0) : v.editorDocument.createRange();
                    o && o !== v.editor || (v.selection.current(), o = v.editorDocument.createTextNode(_.INVISIBLE_SPACE), n.rangeCount ? i.insertNode(o) : v.editor.appendChild(o), i.selectNode(o), i.collapse(!1), n.removeAllRanges(), n.addRange(i));
                    var r = !!o && y.Dom.up(o, y.Dom.isBlock, v.editor),
                        a = r && "LI" === r.nodeName;
                    if (!a && (v.options.enter.toLowerCase() === _.BR.toLowerCase() || e.shiftKey || y.Dom.closest(o, "PRE|BLOCKQUOTE", v.editor))) {
                        var s = v.editorDocument.createElement("br");
                        return v.selection.insertNode(s, !0), b.scrollIntoView(s, v.editor, v.editorDocument), !1
                    }
                    if (!r && o && !y.Dom.prev(o, function(e) {
                            return y.Dom.isBlock(e) || !!e && y.Dom.isImage(e, v.ownerWindow)
                        }, v.editor)) {
                        var l = o;
                        if (y.Dom.up(l, function(e) {
                                e && e.hasChildNodes() && e !== v.editor && (l = e)
                            }, v.editor), r = y.Dom.wrapInline(l, v.options.enter, v), y.Dom.isEmpty(r)) {
                            var c = v.editorDocument.createElement("br");
                            r.appendChild(c), v.selection.setCursorBefore(c)
                        }
                        i = n.rangeCount ? n.getRangeAt(0) : v.editorDocument.createRange()
                    }
                    var d = !1,
                        u = !1;
                    if (r) {
                        if (!y.Dom.canSplitBlock(r, v.editorWindow)) return s = v.editorDocument.createElement("br"), v.selection.insertNode(s, !1), v.selection.setCursorAfter(s), !1;
                        if (a && y.Dom.isEmpty(r)) {
                            var p = !1,
                                f = y.Dom.closest(r, "ol|ul", v.editor);
                            if (y.Dom.prev(r, function(e) {
                                    return e && "LI" === e.nodeName
                                }, f))
                                if (y.Dom.next(r, function(e) {
                                        return e && "LI" === e.nodeName
                                    }, f)) {
                                    (m = v.editorDocument.createRange()).setStartBefore(f), m.setEndAfter(r);
                                    var h = m.extractContents();
                                    f.parentNode && f.parentNode.insertBefore(h, f), p = v.selection.setCursorBefore(f)
                                } else p = v.selection.setCursorAfter(f);
                            else p = v.selection.setCursorBefore(f);
                            return r.parentNode && r.parentNode.removeChild(r), g.insertParagraph(v, p), !b.$$("li", f).length && f.parentNode && f.parentNode.removeChild(f), !1
                        }
                        if (v.selection.cursorInTheEdge(!0, r)) return d = v.selection.setCursorBefore(r), g.insertParagraph(v, d, a ? "li" : v.options.enter, r.style), v.selection.setCursorIn(r, !0), !1;
                        var m;
                        !1 === v.selection.cursorInTheEdge(!1, r) ? ((m = v.editorDocument.createRange()).setStartBefore(r), m.setEnd(i.startContainer, i.startOffset), h = m.extractContents(), r.parentNode && r.parentNode.insertBefore(h, r), v.selection.setCursorIn(r, !0)) : d = v.selection.setCursorAfter(r)
                    } else u = !0;
                    return (u || d) && g.insertParagraph(v, d, a ? "li" : v.options.enter, r ? r.style : void 0), !1
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            s = o(0);
        n.Config.prototype.showMessageErrors = !0, n.Config.prototype.showMessageErrorTime = 3e3, n.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = function(i) {
            if (i.options.showMessageErrors) {
                var t, r = s.dom('<div class="jodit_error_box_for_messages"></div>', i.ownerDocument),
                    a = function() {
                        t = 5, [].slice.call(r.childNodes).forEach(function(e) {
                            s.css(r, "bottom", t + "px"), t += e.offsetWidth + i.options.showMessageErrorOffsetPx
                        })
                    };
                i.workplace.appendChild(r), i.events.on("errorMessage", function(e, t, o) {
                    var n = s.dom('<div class="active ' + (t || "") + '">' + e + "</div>", i.ownerDocument);
                    r.appendChild(n), a(), setTimeout(function() {
                        n.classList.remove("active"), setTimeout(function() {
                            r.removeChild(n), a()
                        }, 300)
                    }, o || i.options.showMessageErrorTime)
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(0),
            n = o(1),
            s = o(3);
        n.Config.prototype.controls.fontsize = {
            command: "fontSize",
            list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"],
            template: function(e, t, o) {
                return o
            },
            tooltip: "Font size",
            isActiveChild: function(t, e) {
                var o = t.selection.current();
                if (o) {
                    var n = s.Dom.closest(o, function(e) {
                            return s.Dom.isBlock(e) || s.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        i = a.css(n, "font-size");
                    return !(!i || !e.args || "" + e.args[1] != "" + i)
                }
                return !1
            },
            isActive: function(t) {
                var e = t.selection.current();
                if (e) {
                    var o = s.Dom.closest(e, function(e) {
                        return s.Dom.isBlock(e) || s.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                    }, t.editor) || t.editor;
                    return "" + a.css(o, "font-size") != "" + a.css(t.editor, "font-size")
                }
                return !1
            }
        }, n.Config.prototype.controls.font = {
            command: "fontname",
            exec: function(e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            list: {
                "Helvetica,sans-serif": "Helvetica",
                "Arial,Helvetica,sans-serif": "Arial",
                "Georgia,serif": "Georgia",
                "Impact,Charcoal,sans-serif": "Impact",
                "Tahoma,Geneva,sans-serif": "Tahoma",
                "'Times New Roman',Times,serif": "Times New Roman",
                "Verdana,Geneva,sans-serif": "Verdana"
            },
            template: function(e, t, o) {
                return '<span style="font-family: ' + t + '">' + o + "</span>"
            },
            isActiveChild: function(t, e) {
                var o = t.selection.current(),
                    n = function(e) {
                        return e.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",")
                    };
                if (o) {
                    var i = s.Dom.closest(o, function(e) {
                            return s.Dom.isBlock(e) || s.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                        }, t.editor) || t.editor,
                        r = "" + a.css(i, "font-family");
                    return !(!r || !e.args || n("" + e.args[0]) !== n(r))
                }
                return !1
            },
            isActive: function(t) {
                var e = t.selection.current();
                if (e) {
                    var o = s.Dom.closest(e, function(e) {
                        return s.Dom.isBlock(e) || s.Dom.isNode(e, t.editorWindow) && e.nodeType === Node.ELEMENT_NODE
                    }, t.editor) || t.editor;
                    return "" + a.css(o, "font-family") != "" + a.css(t.editor, "font-family")
                }
                return !1
            },
            tooltip: "Font family"
        }, t.font = function(n) {
            var e = function(e, t, o) {
                switch (e) {
                    case "fontsize":
                        n.selection.applyCSS({
                            fontSize: a.normalizeSize(o)
                        });
                        break;
                    case "fontname":
                        n.selection.applyCSS({
                            fontFamily: o
                        })
                }
                return n.setEditorValue(), !1
            };
            n.registerCommand("fontsize", e), n.registerCommand("fontname", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(3),
            s = o(2);
        o(1).Config.prototype.controls.paragraph = {
            command: "formatBlock",
            getLabel: function(e, t, o) {
                var n = e.selection.current();
                if (n && e.options.textIcons) {
                    var i = (a.Dom.closest(n, a.Dom.isBlock, e.editor) || e.editor).nodeName.toLowerCase();
                    t.data && t.data.currentValue !== i && t.list && t.list[i] && (o.textBox.innerHTML = "<span>" + t.list[i] + "</span>", o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = i)
                }
                return !1
            },
            exec: function(e, t, o) {
                e.execCommand(o.command, !1, o.args ? o.args[0] : void 0)
            },
            data: {
                currentValue: "left"
            },
            list: {
                p: "Normal",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                blockquote: "Quote"
            },
            isActiveChild: function(e, t) {
                var o = e.selection.current();
                if (o) {
                    var n = a.Dom.closest(o, a.Dom.isBlock, e.editor);
                    return n && n !== e.editor && void 0 !== t.args && n.nodeName.toLowerCase() === t.args[0]
                }
                return !1
            },
            isActive: function(e, t) {
                var o = e.selection.current();
                if (o) {
                    var n = a.Dom.closest(o, a.Dom.isBlock, e.editor);
                    return n && n !== e.editor && void 0 !== t.list && "p" !== n.nodeName.toLowerCase() && void 0 !== t.list[n.nodeName.toLowerCase()]
                }
                return !1
            },
            template: function(e, t, o) {
                return "<" + t + ' class="jodit_list_element"><span>' + e.i18n(o) + "</span></" + t + "></li>"
            },
            tooltip: "Insert format block"
        }, t.formatBlock = function(r) {
            r.registerCommand("formatblock", function(e, t, n) {
                r.selection.focus();
                var i = !1;
                if (r.selection.eachSelection(function(e) {
                        var t = r.selection.save(),
                            o = !!e && a.Dom.up(e, a.Dom.isBlock, r.editor);
                        if (o && "LI" !== o.nodeName || !e || (o = a.Dom.wrapInline(e, r.options.enter, r)), !o) return r.selection.restore(t), !1;
                        o.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i) ? r.selection.isCollapsed() ? a.Dom.wrapInline(e, n, r) : r.selection.applyCSS({}, n) : n === r.options.enter.toLowerCase() && o.parentNode && "LI" === o.parentNode.nodeName ? a.Dom.unwrap(o) : a.Dom.replace(o, n, !0, !1, r.editorDocument), i = !0, r.selection.restore(t)
                    }), !i) {
                    var o = r.editorDocument.createElement(n);
                    o.innerHTML = s.INVISIBLE_SPACE, r.selection.insertNode(o, !1), r.selection.setCursorIn(o)
                }
                return r.setEditorValue(), !1
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            s = o(0),
            i = o(2),
            r = o(6);
        n.Config.prototype.fullsize = !1, n.Config.prototype.globalFullsize = !0, n.Config.prototype.controls.fullsize = {
            exec: function(e) {
                e.toggleFullSize()
            },
            isActive: function(e) {
                return e.isFullSize()
            },
            getLabel: function(e, t, o) {
                var n = e.isFullSize() ? "shrink" : "fullsize";
                o.textBox.innerHTML = e.options.textIcons ? "<span>" + e.i18n(n) + "</span>" : r.ToolbarIcon.getIcon(n), o.textBox.firstChild.classList.add("jodit_icon")
            },
            tooltip: "Open editor in fullsize",
            mode: i.MODE_SOURCE + i.MODE_WYSIWYG
        }, t.fullsize = function(o) {
            var n = !1,
                e = 0,
                t = 0,
                i = !1,
                r = function() {
                    o.events && (n ? (e = s.css(o.container, "height"), t = s.css(o.container, "width"), s.css(o.container, {
                        height: o.ownerWindow.innerHeight,
                        width: o.ownerWindow.innerWidth
                    }), i = !0) : i && s.css(o.container, {
                        height: e || "auto",
                        width: t || "auto"
                    }))
                },
                a = function(e) {
                    if (o.container) {
                        if (void 0 === e && (e = !o.container.classList.contains("jodit_fullsize")), o.options.fullsize = !!e, o.container.classList.toggle("jodit_fullsize", n = e), o.toolbar && s.css(o.toolbar.container, "width", "auto"), o.options.globalFullsize) {
                            for (var t = o.container.parentNode; t && !(t instanceof Document);) t.classList.toggle("jodit_fullsize_box", e), t = t.parentNode;
                            r()
                        }
                        o.events.fire("afterResize")
                    }
                };
            o.options.globalFullsize && o.events.on(o.ownerWindow, "resize", r), o.events.on("afterInit afterOpen", function() {
                o.toggleFullSize(o.options.fullsize)
            }).on("toggleFullSize", a).on("beforeDestruct beforeClose", function() {
                a(!1)
            })
        }
    }, function(e, t, o) {
        "use strict";
        var n = this && this.__awaiter || function(r, a, s, l) {
                return new(s || (s = Promise))(function(e, t) {
                    function o(e) {
                        try {
                            i(l.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function n(e) {
                        try {
                            i(l.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(t) {
                        t.done ? e(t.value) : new s(function(e) {
                            e(t.value)
                        }).then(o, n)
                    }
                    i((l = l.apply(r, a || [])).next())
                })
            },
            r = this && this.__generator || function(o, n) {
                var i, r, a, e, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                                switch (r = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || a[0] < t[1] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = n.call(o, s)
                            } catch (e) {
                                t = [6, e], r = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(1),
            a = o(0);
        i.Config.prototype.iframe = !1, i.Config.prototype.iframeBaseUrl = "", i.Config.prototype.iframeDefaultSrc = "about:blank", i.Config.prototype.iframeStyle = 'html{margin: 0px;min-height: 100%;}body{box-sizing: border-box;font-size: 13px;    line-height: 1.6;padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', i.Config.prototype.iframeCSSLinks = [], t.iframe = function(i) {
            var e = this;
            i.events.on("afterSetMode", function() {
                i.isEditorMode() && i.selection.focus()
            }).on("generateDocumentStructure.iframe", function(e, t) {
                var o = e || t.iframe.contentWindow.document;
                if (o.open(), o.write('<!DOCTYPE html>\n                    <html dir="' + t.options.direction + '" class="jodit" lang="' + a.defaultLanguage(t.options.language) + '">\n                        <head>\n                            ' + (t.options.iframeBaseUrl ? '<base href="' + t.options.iframeBaseUrl + '"/>' : "") + '\n                        </head>\n                        <body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body>\n                    </html>'), o.close(), t.options.iframeCSSLinks && t.options.iframeCSSLinks.forEach(function(e) {
                        var t = a.dom('<link rel="stylesheet" href="' + e + '">', o);
                        o.head && o.head.appendChild(t)
                    }), t.options.iframeStyle) {
                    var n = o.createElement("style");
                    n.innerHTML = t.options.iframeStyle, o.head && o.head.appendChild(n)
                }
            }).on("createEditor", function() {
                return n(e, void 0, void 0, function() {
                    var o, n;
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return i.options.iframe ? (delete i.editor, i.iframe = i.ownerDocument.createElement("iframe"), i.iframe.style.display = "block", i.iframe.src = "about:blank", i.iframe.className = "jodit_wysiwyg_iframe", i.iframe.setAttribute("allowtransparency", "true"), i.iframe.setAttribute("tabindex", "0"), i.iframe.setAttribute("frameborder", "0"), i.workplace.appendChild(i.iframe), [4, i.events.fire("generateDocumentStructure.iframe", null, i)]) : [2];
                            case 1:
                                return e.sent(), i.editorDocument = o = i.iframe.contentWindow.document, i.editorWindow = i.iframe.contentWindow, i.editor = o.body, "auto" === i.options.height && (o.documentElement && (o.documentElement.style.overflowY = "hidden"), n = a.throttle(function() {
                                    i.editor && i.iframe && "auto" === i.options.height && a.css(i.iframe, "height", i.editor.offsetHeight)
                                }, i.defaultTimeout / 2), i.events.on("change afterInit afterSetMode resize", n).on([i.iframe, i.editorWindow, o.documentElement], "load", n).on(o, "readystatechange DOMContentLoaded", n)), (t = i.editorWindow.Element.prototype).matches || (t.matches = Element.prototype.matches), i.editorDocument.documentElement && i.events.on(i.editorDocument.documentElement, "mousedown touchend", function() {
                                    i.selection.isFocused() || (i.selection.focus(), i.selection.setCursorIn(i.editor))
                                }).on(i.editorWindow, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", function(e) {
                                    i.events && i.events.fire && i.events.fire(i.ownerWindow, e)
                                }), [2, !1]
                        }
                        var t
                    })
                })
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            s = o(3),
            l = o(2);
        n.Config.prototype.controls.indent = {
            tooltip: "Increase Indent"
        }, n.Config.prototype.controls.outdent = {
            isDisable: function(e) {
                var t = e.selection.current();
                if (t) {
                    var o = s.Dom.closest(t, s.Dom.isBlock, e.editor);
                    if (o && o.style && o.style.marginLeft) return parseInt(o.style.marginLeft, 10) <= 0
                }
                return !0
            },
            tooltip: "Decrease Indent"
        }, n.Config.prototype.indentMargin = 10, t.indent = function(a) {
            var e = function(r) {
                return a.selection.eachSelection(function(e) {
                    var t = a.selection.save(),
                        o = !!e && s.Dom.up(e, s.Dom.isBlock, a.editor),
                        n = a.options.enter;
                    if (!o && e && (o = s.Dom.wrapInline(e, n !== l.BR ? n : l.PARAGRAPH, a)), !o) return a.selection.restore(t), !1;
                    if (o && o.style) {
                        var i = o.style.marginLeft ? parseInt(o.style.marginLeft, 10) : 0;
                        o.style.marginLeft = 0 < (i += a.options.indentMargin * ("outdent" === r ? -1 : 1)) ? i + "px" : "", o.getAttribute("style") || o.removeAttribute("style")
                    }
                    a.selection.restore(t)
                }), a.setEditorValue(), !1
            };
            a.registerCommand("indent", {
                exec: e,
                hotkeys: ["ctrl+]", "cmd+]"]
            }), a.registerCommand("outdent", {
                exec: e,
                hotkeys: ["ctrl+[", "cmd+["]
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            i = "__jodit_imageprocessor_binded";
        t.imageProcessor = function(o) {
            o.events.on("change afterInit", n.debounce(function() {
                o.editor && n.$$("img", o.editor).forEach(function(t) {
                    t[i] || (t[i] = !0, t.complete || t.addEventListener("load", function e() {
                        o.events && o.events.fire && o.events.fire("resize"), t.removeEventListener("load", e)
                    }), o.events.on(t, "mousedown touchstart", function() {
                        o.selection.select(t)
                    }))
                })
            }, o.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var j = o(5),
            n = o(1),
            T = o(0),
            x = o(3),
            S = o(6),
            D = o(7),
            i = o(12),
            k = i.Widget.TabsWidget,
            I = i.Widget.FileSelectorWidget,
            A = o(15);
        n.Config.prototype.image = {
            openOnDblClick: !0,
            editSrc: !0,
            useImageEditor: !0,
            editTitle: !0,
            editAlt: !0,
            editLink: !0,
            editSize: !0,
            editBorderRadius: !0,
            editMargins: !0,
            editClass: !0,
            editStyle: !0,
            editId: !0,
            editAlign: !0,
            showPreview: !0,
            selectImageAfterClose: !0
        }, t.imageProperties = function(E) {
            var t = function(e) {
                var t = this;
                if (!E.options.readonly) {
                    e && e.stopImmediatePropagation();
                    var o, r = this,
                        n = new D.Dialog(E),
                        i = T.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + S.ToolbarIcon.getIcon("cancel") + "<span>" + E.i18n("Cancel") + "</span></a>", E.ownerDocument),
                        a = T.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + S.ToolbarIcon.getIcon("check") + "<span>" + E.i18n("Ok") + "</span></a>", E.ownerDocument),
                        s = {
                            remove: T.dom('<a href="javascript:void(0)" class="jodit_button">' + S.ToolbarIcon.getIcon("bin") + " " + E.i18n("Delete") + "</a>", E.ownerDocument)
                        },
                        l = T.dom('<form class="jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-2-5"><div class="jodit_properties_view_box"><div style="' + (E.options.image.showPreview ? "" : "display:none") + '" class="jodit_properties_image_view"><img class="imageViewSrc" src="" alt=""/></div><div style="' + (E.options.image.editSize ? "" : "display:none") + '" class="jodit_form_group jodit_properties_image_sizes"><input type="number" class="imageWidth"/><a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">' + S.ToolbarIcon.getIcon("lock") + '</a><input type="number" class="imageHeight"/></div></div></div><div class="jodit_col-lg-3-5 tabsbox"></div></div></form>', E.ownerDocument),
                        c = T.dom('<div style="' + (E.options.image.editMargins ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Margins") + '</label><div class="jodit_grid"><input class="jodit_col-lg-1-5 margins marginTop" data-id="marginTop" type="text" placeholder="' + E.i18n("top") + '"/><a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">' + S.ToolbarIcon.getIcon("lock") + '</a><input disabled="true" class="jodit_col-lg-1-5 margins marginRight" data-id="marginRight" type="text" placeholder="' + E.i18n("right") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginBottom" data-id="marginBottom" type="text" placeholder="' + E.i18n("bottom") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginLeft" data-id="marginLeft" type="text" placeholder="' + E.i18n("left") + '"/></div></div><div style="' + (E.options.image.editStyle ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Styles") + '</label><input type="text" class="style"/></div><div style="' + (E.options.image.editClass ? "" : "display:none") + '" class="jodit_form_group"><label for="classes">' + E.i18n("Classes") + '</label><input type="text" class="classes"/></div><div style="' + (E.options.image.editId ? "" : "display:none") + '" class="jodit_form_group"><label for="id">Id</label><input type="text" class="id"/></div><div style="' + (E.options.image.editBorderRadius ? "" : "display:none") + '" class="jodit_form_group"><label for="border_radius">Border radius</label><input type="number" class="border_radius"/></div><div style="' + (E.options.image.editAlign ? "" : "display:none") + '" class="jodit_form_group"><label for="align">' + E.i18n("Align") + '</label><select class="select align"><option value="">' + E.i18n("--Not Set--") + '</option><option value="left">' + E.i18n("Left") + '</option><option value="center">' + E.i18n("Center") + '</option><option value="right">' + E.i18n("Right") + "</option></optgroup></select></div>", E.ownerDocument),
                        d = T.dom('<div style="' + (E.options.image.editSrc ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Src") + '</label><div class="jodit_input_group"><input type="text" class="imageSrc"/>' + (E.options.filebrowser.ajax.url || E.options.uploader.url ? '<div class="jodit_input_group-buttons">' + (E.options.filebrowser.ajax.url || E.options.uploader.url ? '<a class="jodit_button jodit_rechange" href="javascript:void(0)">' + S.ToolbarIcon.getIcon("image") + "</a>" : "") + (E.options.image.useImageEditor && void 0 !== j.Jodit.modules.ImageEditor && E.options.filebrowser.ajax.url ? '<a class="jodit_button jodit_use_image_editor" href="javascript:void(0)">' + S.ToolbarIcon.getIcon("crop") + "</a>" : "") + "</div>" : "") + '</div></div><div style="' + (E.options.image.editTitle ? "" : "display:none") + '" class="jodit_form_group"><label for="imageTitle">' + E.i18n("Title") + '</label><input type="text" class="imageTitle"/></div><div style="' + (E.options.image.editAlt ? "" : "display:none") + '" class="jodit_form_group"><label for="imageAlt">' + E.i18n("Alternative") + '</label><input type="text" class="imageAlt"/></div><div style="' + (E.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><label for="imageLink">' + E.i18n("Link") + '</label><input type="text" class="imageLink"/></div><div style="' + (E.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><input type="checkbox" class="imageLinkOpenInNewTab"/> ' + E.i18n("Open link in new tab") + "</div>", E.ownerDocument),
                        u = r.naturalWidth / r.naturalHeight || 1,
                        p = l.querySelector(".imageWidth"),
                        f = l.querySelector(".imageHeight"),
                        h = function() {
                            T.val(l, ".imageSrc", r.getAttribute("src") || "");
                            var e = l.querySelector(".imageViewSrc");
                            e && e.setAttribute("src", r.getAttribute("src") || "")
                        },
                        m = function() {
                            h(),
                                function() {
                                    r.hasAttribute("title") && T.val(l, ".imageTitle", r.getAttribute("title") || ""), r.hasAttribute("alt") && T.val(l, ".imageAlt", r.getAttribute("alt") || "");
                                    var e = x.Dom.closest(r, "a", E.editor);
                                    e && (T.val(l, ".imageLink", e.getAttribute("href") || ""), l.querySelector(".imageLinkOpenInNewTab").checked = "_blank" === e.getAttribute("target"))
                                }(), p.value = "" + r.offsetWidth, f.value = "" + r.offsetHeight,
                                function() {
                                    if (E.options.image.editMargins) {
                                        var n = !1;
                                        T.$$(".margins", l).forEach(function(e) {
                                            var t = e.getAttribute("data-id") || "",
                                                o = r.style[t];
                                            o && (/^[0-9]+(px)?$/.test(o) && (o = parseInt(o, 10)), e.value = "" + o || "", n || "marginTop" === t || e.value === T.val(l, ".marginTop") || (n = !0))
                                        }), g = !n;
                                        var e = l.querySelector(".jodit_lock_margin");
                                        e && (e.innerHTML = S.ToolbarIcon.getIcon(g ? "lock" : "unlock")), T.$$(".margins:not(.marginTop)", l).forEach(function(e) {
                                            return g ? e.setAttribute("disabled", "true") : e.removeAttribute("disabled")
                                        })
                                    }
                                }(), T.val(l, ".classes", (r.getAttribute("class") || "").replace(/jodit_focused_image[\s]*/, "")), T.val(l, ".id", r.getAttribute("id") || ""), T.val(l, ".border_radius", "" + (parseInt(r.style.borderRadius || "0", 10) || "0")), r.style.cssFloat && -1 != ["left", "right"].indexOf(r.style.cssFloat.toLowerCase()) ? T.val(l, ".align", T.css(r, "float")) : "block" === T.css(r, "display") && "auto" === r.style.marginLeft && "auto" === r.style.marginRight && T.val(l, ".align", "center"), T.val(l, ".style", r.getAttribute("style") || "")
                        },
                        v = !0,
                        g = !0,
                        b = {},
                        _ = l.querySelector(".tabsbox");
                    b[E.i18n("Image")] = d, b[E.i18n("Advanced")] = c, _ && _.appendChild(k(E, b)), m(), E.events.on(n, "afterClose", function() {
                        n.destruct(), r.parentNode && E.options.image.selectImageAfterClose && E.selection.select(r)
                    }), s.remove.addEventListener("click", function() {
                        r.parentNode && r.parentNode.removeChild(r), n.close()
                    }), E.options.image.useImageEditor && T.$$(".jodit_use_image_editor", d).forEach(function(e) {
                        E.events.on(e, "mousedown touchstart", function() {
                            var n = r.getAttribute("src") || "",
                                i = E.ownerDocument.createElement("a"),
                                t = function() {
                                    i.host === location.host || D.Confirm(E.i18n("You can only edit your own images. Download this image on the host?"), function(e) {
                                        e && E.uploader && E.uploader.uploadRemoteImage("" + i.href, function(e) {
                                            D.Alert(E.i18n("The image has been successfully uploaded to the host!"), function() {
                                                "string" == typeof e.newfilename && (r.setAttribute("src", e.baseurl + e.newfilename), h())
                                            })
                                        }, function(e) {
                                            D.Alert(E.i18n("There was an error loading %s", e.message))
                                        })
                                    })
                                };
                            i.href = n, E.getInstance("FileBrowser").getPathByUrl("" + i.href, function(e, t, o) {
                                E.getInstance("FileBrowser").openImageEditor(i.href, t, e, o, function() {
                                    var e = (new Date).getTime();
                                    r.setAttribute("src", n + (-1 != n.indexOf("?") ? "" : "?") + "&_tmp=" + e), h()
                                }, function(e) {
                                    D.Alert(e.message)
                                })
                            }, function(e) {
                                D.Alert(e.message, t)
                            })
                        })
                    }), T.$$(".jodit_rechange", d).forEach(function(o) {
                        o.addEventListener("mousedown", function(e) {
                            o.classList.toggle("active");
                            var t = new A.ToolbarPopup(E, o);
                            t.open(I(E, {
                                upload: function(e) {
                                    e.files && e.files.length && r.setAttribute("src", e.baseurl + e.files[0]), m(), t.close()
                                },
                                filebrowser: function(e) {
                                    e && e.files && Array.isArray(e.files) && e.files.length && (r.setAttribute("src", e.files[0]), t.close(), m())
                                }
                            }, r, t.close), !0), e.stopPropagation()
                        })
                    });
                    var y = l.querySelector(".jodit_lock_helper.jodit_lock_size"),
                        w = l.querySelector(".jodit_lock_helper.jodit_lock_margin");
                    y && y.addEventListener("click", function() {
                        this.innerHTML = S.ToolbarIcon.getIcon((v = !v) ? "lock" : "unlock"), E.events.fire(p, "change")
                    }), w && w.addEventListener("click", function() {
                        this.innerHTML = S.ToolbarIcon.getIcon((g = !g) ? "lock" : "unlock"), g ? T.$$(".margins", l).forEach(function(e) {
                            e.matches(".marginTop") || e.setAttribute("disabled", "true")
                        }) : T.$$(".margins", l).forEach(function(e) {
                            e.matches(".marginTop") || e.removeAttribute("disabled")
                        })
                    });
                    var C = function(e) {
                        var t = parseInt(p.value, 10),
                            o = parseInt(f.value, 10);
                        e.target === p ? f.value = "" + Math.round(t / u) : p.value = "" + Math.round(o * u)
                    };
                    return E.events.on([p, f], "change keydown mousedown paste", function(e) {
                        v && (E.defaultTimeout ? (clearTimeout(o), o = window.setTimeout(C.bind(t, e), E.defaultTimeout)) : C(e))
                    }), n.setTitle([E.i18n("Image properties"), s.remove]), n.setContent(l), i.addEventListener("click", function() {
                        n.close()
                    }), a.addEventListener("click", function() {
                        if (E.options.image.editStyle && (T.val(l, ".style") ? r.setAttribute("style", T.val(l, ".style")) : r.removeAttribute("style")), !T.val(l, ".imageSrc")) return r.parentNode && r.parentNode.removeChild(r), void n.close();
                        r.setAttribute("src", T.val(l, ".imageSrc")), r.style.borderRadius = "0" !== T.val(l, ".border_radius") && /^[0-9]+$/.test(T.val(l, ".border_radius")) ? T.val(l, ".border_radius") + "px" : "", T.val(l, ".imageTitle") ? r.setAttribute("title", T.val(l, ".imageTitle")) : r.removeAttribute("title"), T.val(l, ".imageAlt") ? r.setAttribute("alt", T.val(l, ".imageAlt")) : r.removeAttribute("alt");
                        var e = x.Dom.closest(r, "a", E.editor);
                        T.val(l, ".imageLink") ? (e || (e = x.Dom.wrap(r, "a", E)), e.setAttribute("href", T.val(l, ".imageLink")), l.querySelector(".imageLinkOpenInNewTab").checked ? e.setAttribute("target", "_blank") : e.removeAttribute("target")) : e && e.parentNode && e.parentNode.replaceChild(r, e);
                        var o = function(e) {
                            return e = T.trim(e), /^[0-9]+$/.test(e) ? e + "px" : e
                        };
                        p.value === "" + r.offsetWidth && f.value === "" + r.offsetHeight || T.css(r, {
                            width: T.trim(p.value) ? o(p.value) : null,
                            height: T.trim(f.value) ? o(f.value) : null
                        }), E.options.image.editMargins && (g ? T.css(r, "margin", o(T.val(l, ".marginTop"))) : T.$$(".margins", l).forEach(function(e) {
                            var t = e.getAttribute("data-id") || "";
                            T.css(r, t, o(e.value))
                        })), E.options.image.editClass && (T.val(l, ".classes") ? r.setAttribute("class", T.val(l, ".classes")) : r.removeAttribute("class")), E.options.image.editId && (T.val(l, ".id") ? r.setAttribute("id", T.val(l, ".id")) : r.removeAttribute("id"));
                        var t = function() {
                            "block" === T.css(r, "display") && T.css(r, "display", ""), "auto" === r.style.marginLeft && "auto" === r.style.marginRight && (r.style.marginLeft = "", r.style.marginRight = "")
                        };
                        E.options.image.editAlign && (T.val(l, ".align") ? -1 != ["right", "left"].indexOf(T.val(l, ".align").toLowerCase()) ? (T.css(r, "float", T.val(l, ".align")), t()) : (T.css(r, "float", ""), T.css(r, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (T.css(r, "float") && -1 != ["right", "left"].indexOf(("" + T.css(r, "float")).toLowerCase()) && T.css(r, "float", ""), t())), r.getAttribute("style") || r.removeAttribute("style"), E.setEditorValue(), n.close()
                    }), n.setFooter([a, i]), n.setSize(500), n.open(), e && e.preventDefault(), !1
                }
            };
            E.events.on("afterInit", function() {
                E.events.on(E.editor, "dblclick", E.options.image.openOnDblClick ? t : function(e) {
                    e.stopImmediatePropagation(), E.selection.select(this)
                }, "img")
            }).on("openImageProperties", function(e) {
                t.call(e)
            })
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(9),
            c = o(0),
            d = o(20),
            a = o(1),
            s = o(12),
            u = s.Widget.ColorPickerWidget,
            p = s.Widget.TabsWidget,
            l = o(3),
            f = o(8),
            h = o(15);
        a.Config.prototype.toolbarInline = !0, a.Config.prototype.toolbarInlineDisableFor = [], a.Config.prototype.popup = {
            a: [{
                name: "eye",
                tooltip: "Open link",
                exec: function(e, t) {
                    var o = t.getAttribute("href");
                    t && o && e.ownerWindow.open(o)
                }
            }, {
                name: "link",
                tooltip: "Edit link",
                icon: "pencil"
            }, "unlink", "brush", "file"],
            jodit: [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (t.parentNode.removeChild(t), e.events.fire("hidePopup"))
                }
            }],
            "jodit-media": [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (t.parentNode.removeChild(t), e.events.fire("hidePopup"))
                }
            }],
            img: [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t.parentNode && (t.parentNode.removeChild(t), e.events.fire("hidePopup"))
                }
            }, {
                name: "pencil",
                exec: function(e, t) {
                    "img" === t.tagName.toLowerCase() && e.events.fire("openImageProperties", t)
                },
                tooltip: "Edit"
            }, {
                name: "valign",
                list: ["Top", "Middle", "Bottom"],
                tooltip: "Vertical align",
                exec: function(e, t, o) {
                    if ("img" === t.tagName.toLowerCase()) {
                        var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        c.css(t, "vertical-align", n), e.events.fire("recalcPositionPopup")
                    }
                }
            }, {
                name: "left",
                list: ["Left", "Right", "Center", "Normal"],
                exec: function(e, t, o) {
                    if ("img" === t.tagName.toLowerCase()) {
                        var n = function() {
                                "block" === c.css(t, "display") && c.css(t, "display", ""), "auto" === t.style.marginLeft && "auto" === t.style.marginRight && (t.style.marginLeft = "", t.style.marginRight = "")
                            },
                            i = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                        "normal" !== i ? -1 != ["right", "left"].indexOf(i) ? (c.css(t, "float", i), n()) : (c.css(t, "float", ""), c.css(t, {
                            display: "block",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        })) : (c.css(t, "float") && -1 != ["right", "left"].indexOf(c.css(t, "float").toLowerCase()) && c.css(t, "float", ""), n()), e.events.fire("recalcPositionPopup")
                    }
                },
                tooltip: "Horizontal align"
            }],
            table: [{
                name: "brush",
                popup: function(e, t) {
                    var o, n, i, r, a, s, l = d.Table.getAllSelectedCells(t);
                    return !!l.length && (r = c.css(l[0], "color"), s = c.css(l[0], "background-color"), a = c.css(l[0], "border-color"), o = u(e, function(t) {
                        l.forEach(function(e) {
                            c.css(e, "background-color", t)
                        }), e.setEditorValue()
                    }, s), n = u(e, function(t) {
                        l.forEach(function(e) {
                            c.css(e, "color", t)
                        }), e.setEditorValue()
                    }, r), i = u(e, function(t) {
                        l.forEach(function(e) {
                            c.css(e, "border-color", t)
                        }), e.setEditorValue()
                    }, a), p(e, {
                        Background: o,
                        Text: n,
                        Border: i
                    }))
                },
                tooltip: "Background"
            }, {
                name: "valign",
                list: ["Top", "Middle", "Bottom"],
                exec: function(e, t, o) {
                    var n = o.args && "string" == typeof o.args[1] ? o.args[1].toLowerCase() : "";
                    d.Table.getAllSelectedCells(t).forEach(function(e) {
                        c.css(e, "vertical-align", n)
                    })
                },
                tooltip: "Vertical align"
            }, {
                name: "splitv",
                list: {
                    tablesplitv: "Split vertical",
                    tablesplitg: "Split horizontal"
                },
                tooltip: "Split"
            }, {
                name: "align",
                icon: "left"
            }, "\n", {
                name: "merge",
                command: "tablemerge",
                tooltip: "Merge"
            }, {
                name: "addcolumn",
                list: {
                    tableaddcolumnbefore: "Insert column before",
                    tableaddcolumnafter: "Insert column after"
                },
                exec: function(e, t, o) {
                    var n = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(n, !1, t)
                },
                tooltip: "Add column"
            }, {
                name: "addrow",
                list: {
                    tableaddrowbefore: "Insert row above",
                    tableaddrowafter: "Insert row below"
                },
                exec: function(e, t, o) {
                    var n = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(n, !1, t)
                },
                tooltip: "Add row"
            }, {
                name: "bin",
                list: {
                    tablebin: "Delete table",
                    tablebinrow: "Delete row",
                    tablebincolumn: "Delete column",
                    tableempty: "Empty cell"
                },
                exec: function(e, t, o) {
                    var n = o.args && "string" == typeof o.args[0] ? o.args[0].toLowerCase() : "";
                    e.execCommand(n, !1, t)
                },
                tooltip: "Delete"
            }]
        };
        var m = function(t) {
            function e(e) {
                var s = t.call(this, e) || this;
                return s.isShown = !1, s.calcWindSizes = function() {
                    var e = s.jodit.ownerWindow,
                        t = s.jodit.ownerDocument.documentElement;
                    if (!t) return {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    };
                    var o = s.jodit.ownerDocument.body,
                        n = t.clientTop || o.clientTop || 0,
                        i = t.clientLeft || o.clientLeft || 0;
                    return {
                        left: i,
                        top: n,
                        width: t.clientWidth + (e.pageXOffset || t.scrollLeft || o.scrollLeft) - i,
                        height: t.clientHeight + (e.pageYOffset || t.scrollTop || o.scrollTop) - n
                    }
                }, s._hiddenClass = "jodit_toolbar_popup-inline-target-hidden", s.calcPosition = function(e, t) {
                    s.popup.target.classList.remove(s._hiddenClass);
                    var o = e.left + e.width / 2,
                        n = c.offset(s.jodit.workplace, s.jodit, s.jodit.ownerDocument, !0),
                        i = e.top + e.height + 10;
                    s.target.style.left = o + "px", s.target.style.top = i + "px", s.jodit.isFullSize() && (s.target.style.zIndex = "" + c.css(s.jodit.container, "zIndex"));
                    var r = s.container.offsetWidth / 2,
                        a = -r;
                    s.popup.container.classList.remove("jodit_toolbar_popup-inline-top"), t.height < i + s.container.offsetHeight && (s.target.style.top = (i = e.top - s.container.offsetHeight - 10) + "px", s.popup.container.classList.add("jodit_toolbar_popup-inline-top")), o - r < 0 && (a = -(e.width / 2 + e.left)), t.width < o + r && (a = -(s.container.offsetWidth - (t.width - o))), s.container.style.marginLeft = a + "px", (50 < n.top - i || 50 < i - (n.top + n.height)) && s.popup.target.classList.add(s._hiddenClass)
                }, s.reCalcPosition = function() {
                    s.__getRect && s.calcPosition(s.__getRect(), s.calcWindSizes())
                }, s.showPopup = function(e, t, o) {
                    if (!s.jodit.options.toolbarInline || !s.jodit.options.popup[t.toLowerCase()]) return !1;
                    if (s.isExcludedTarget(t)) return !0;
                    s.isShown = !0, s.isTargetAction = !0;
                    var n = s.calcWindSizes();
                    return s.target.parentNode || s.jodit.ownerDocument.body.appendChild(s.target), s.toolbar.build(s.jodit.options.popup[t.toLowerCase()], s.container, o), s.popup.open(s.container, !1, !0), s.__getRect = e, s.calcPosition(e(), n), !0
                }, s.hidePopup = function(e) {
                    e && (e instanceof s.jodit.editorWindow.Node || e instanceof h.ToolbarPopup) && l.Dom.isOrContains(s.target, e instanceof h.ToolbarPopup ? e.target : e) || (s.isTargetAction = !1, s.isShown = !1, s.popup.close(), s.target.parentNode && s.target.parentNode.removeChild(s.target))
                }, s.isSelectionStarted = !1, s.onSelectionEnd = c.debounce(function() {
                    s.jodit.isEditorMode() && (s.isSelectionStarted && (s.isTargetAction || s.onChangeSelection()), s.isSelectionStarted = !1, s.isTargetAction = !1)
                }, s.jodit.defaultTimeout), s.isTargetAction = !1, s.isSelectionPopup = !1, s.onSelectionStart = function(e) {
                    if (s.jodit.isEditorMode() && (s.isTargetAction = !1, s.isSelectionPopup = !1, !s.isSelectionStarted)) {
                        var t = Object.keys(s.jodit.options.popup).join("|"),
                            o = "IMG" === e.target.nodeName ? e.target : l.Dom.closest(e.target, t, s.jodit.editor);
                        o && s.showPopup(function() {
                            return c.offset(o, s.jodit, s.jodit.editorDocument)
                        }, o.nodeName, o) || (s.isSelectionStarted = !0)
                    }
                }, s.onChangeSelection = function() {
                    if (s.jodit.options.toolbarInline && s.jodit.isEditorMode() && !s.hideIfCollapsed() && void 0 !== s.jodit.options.popup.selection) {
                        var e = s.jodit.editorWindow.getSelection();
                        if (e.rangeCount) {
                            s.isSelectionPopup = !0;
                            var t = e.getRangeAt(0);
                            s.showPopup(function() {
                                return c.offset(t, s.jodit, s.jodit.editorDocument)
                            }, "selection")
                        }
                    }
                }, s.checkIsTargetEvent = function() {
                    s.isTargetAction ? s.isTargetAction = !1 : s.hidePopup()
                }, s.toolbar = new f.ToolbarCollection(e), s.target = e.ownerDocument.createElement("div"), s.container = e.ownerDocument.createElement("div"), s.target.classList.add("jodit_toolbar_popup-inline-target"), s.popup = new h.ToolbarPopup(e, s.target, void 0, "jodit_toolbar_popup-inline"), s
            }
            return i(e, t), e.prototype.isExcludedTarget = function(e) {
                return -1 != c.splitArray(this.jodit.options.toolbarInlineDisableFor).map(function(e) {
                    return e.toLowerCase()
                }).indexOf(e.toLowerCase())
            }, e.prototype.hideIfCollapsed = function() {
                return !!this.jodit.selection.isCollapsed() && (this.hidePopup(), !0)
            }, e.prototype.afterInit = function(t) {
                var n = this;
                t.events.on(this.target, "mousedown keydown touchstart", function(e) {
                    e.stopPropagation()
                }).on("beforeOpenPopup hidePopup afterSetMode", this.hidePopup).on("recalcPositionPopup", this.reCalcPosition).on("getDiffButtons.mobile", function(e) {
                    if (n.toolbar === e) return c.splitArray(t.options.buttons).filter(function(e) {
                        return "|" !== e && "\n" !== e
                    }).filter(function(e) {
                        return n.toolbar.getButtonsList().indexOf(e) < 0
                    })
                }).on("selectionchange", this.onChangeSelection).on("afterCommand afterExec", function() {
                    n.isShown && n.isSelectionPopup && n.onChangeSelection()
                }).on("showPopup", function(e, t) {
                    var o = ("string" == typeof e ? e : e.nodeName).toLowerCase();
                    n.isSelectionPopup = !1, n.showPopup(t, o, "string" == typeof e ? void 0 : e)
                }).on("mousedown keydown touchstart", this.onSelectionStart).on([t.ownerWindow, t.editor], "scroll resize", this.reCalcPosition).on([t.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).on([t.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent)
            }, e.prototype.beforeDestruct = function(e) {
                this.popup.destruct(), this.toolbar.destruct(), this.target.parentNode && this.target.parentNode.removeChild(this.target), e.events.off([e.ownerWindow], "scroll resize", this.reCalcPosition).off([e.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).off([e.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent), t.prototype.destruct.call(this)
            }, e
        }(r.Plugin);
        t.inlinePopup = m
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(0),
            s = o(3),
            n = o(1),
            l = o(6);
        n.Config.prototype.controls.align = {
            name: "left",
            tooltip: "Align",
            getLabel: function(e, t, o) {
                var n = e.selection.current();
                if (n) {
                    var i = s.Dom.closest(n, s.Dom.isBlock, e.editor) || e.editor,
                        r = "" + a.css(i, "text-align");
                    t.defaultValue && -1 != t.defaultValue.indexOf(r) && (r = "left"), t.data && t.data.currentValue !== r && t.list && -1 != t.list.indexOf(r) && (o.textBox.innerHTML = e.options.textIcons ? "<span>" + r + "</span>" : l.ToolbarIcon.getIcon(r, ""), o.textBox.firstChild.classList.add("jodit_icon"), t.data.currentValue = r)
                }
                return !1
            },
            isActive: function(e, t) {
                var o = e.selection.current();
                if (o && t.defaultValue) {
                    var n = s.Dom.closest(o, s.Dom.isBlock, e.editor) || e.editor;
                    return -1 == t.defaultValue.indexOf("" + a.css(n, "text-align"))
                }
                return !1
            },
            defaultValue: ["left", "start", "inherit"],
            data: {
                currentValue: "left"
            },
            list: ["center", "left", "right", "justify"]
        }, n.Config.prototype.controls.center = {
            command: "justifyCenter",
            tags: ["center"],
            css: {
                "text-align": "center"
            },
            tooltip: "Align Center"
        }, n.Config.prototype.controls.justify = {
            command: "justifyFull",
            css: {
                "text-align": "justify"
            },
            tooltip: "Align Justify"
        }, n.Config.prototype.controls.left = {
            command: "justifyLeft",
            css: {
                "text-align": "left"
            },
            tooltip: "Align Left"
        }, n.Config.prototype.controls.right = {
            command: "justifyRight",
            css: {
                "text-align": "right"
            },
            tooltip: "Align Right"
        }, t.justify = function(n) {
            var e = function(t) {
                var o = function(e) {
                    if (e instanceof n.editorWindow.HTMLElement) switch (t.toLowerCase()) {
                        case "justifyfull":
                            e.style.textAlign = "justify";
                            break;
                        case "justifyright":
                            e.style.textAlign = "right";
                            break;
                        case "justifyleft":
                            e.style.textAlign = "left";
                            break;
                        case "justifycenter":
                            e.style.textAlign = "center"
                    }
                };
                return n.selection.focus(), n.selection.eachSelection(function(e) {
                    if (!e && n.editor.querySelector(".jodit_selected_cell")) return a.$$(".jodit_selected_cell", n.editor).forEach(o), !1;
                    if (e instanceof n.editorWindow.Node) {
                        var t = !!e && s.Dom.up(e, s.Dom.isBlock, n.editor);
                        !t && e && (t = s.Dom.wrapInline(e, n.options.enter, n)), o(t)
                    }
                }), !1
            };
            n.registerCommand("justifyfull", e), n.registerCommand("justifyright", e), n.registerCommand("justifyleft", e), n.registerCommand("justifycenter", e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            c = o(0),
            d = o(3);
        n.Config.prototype.link = {
            followOnDblClick: !0,
            processVideoLink: !0,
            processPastedLink: !0,
            openLinkDialogAfterPost: !0,
            removeLinkAfterFormat: !0,
            noFollowCheckbox: !0,
            openInNewTabCheckbox: !0
        }, n.Config.prototype.controls.unlink = {
            exec: function(e, t) {
                var o = d.Dom.closest(t, "A", e.editor);
                o && d.Dom.unwrap(o), e.events.fire("hidePopup")
            }
        }, n.Config.prototype.controls.link = {
            isActive: function(e) {
                var t = e.selection.current();
                return t && !1 !== d.Dom.closest(t, "a", e.editor)
            },
            popup: function(o, n, e, i) {
                var t = o.editorWindow.getSelection(),
                    r = c.dom('<form class="jodit_form"><input required type="text" name="url" placeholder="http://" type="text"/><input name="text" placeholder="' + o.i18n("Text") + '" type="text"/>' + (o.options.link.openInNewTabCheckbox ? '<label><input name="target" type="checkbox"/> ' + o.i18n("Open in new tab") + "</label>" : "") + (o.options.link.noFollowCheckbox ? '<label><input name="nofollow" type="checkbox"/> ' + o.i18n("No follow") + "</label>" : "") + '<div style="text-align: right"><button class="jodit_unlink_button" type="button">' + o.i18n("Unlink") + '</button> &nbsp;&nbsp;<button class="jodit_link_insert_button" type="submit"></button></div><form/>', o.ownerDocument);
                n = !(!n || !d.Dom.closest(n, "A", o.editor)) && d.Dom.closest(n, "A", o.editor);
                var a = r.querySelector(".jodit_link_insert_button"),
                    s = r.querySelector(".jodit_unlink_button");
                n ? (c.val(r, "input[name=url]", n.getAttribute("href") || ""), c.val(r, "input[name=text]", n.innerText), o.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked = "_blank" === n.getAttribute("target")), o.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked = "nofollow" === n.getAttribute("rel")), a && (a.innerHTML = o.i18n("Update"))) : (s && (s.style.display = "none"), c.val(r, "input[name=text]", "" + t), a && (a.innerHTML = o.i18n("Insert")));
                var l = o.selection.save();
                return s && s.addEventListener("mousedown", function(e) {
                    n && d.Dom.unwrap(n), o.selection.restore(l), i(), e.preventDefault()
                }), r.addEventListener("submit", function(e) {
                    e.preventDefault(), o.selection.restore(l);
                    var t = n || o.editorDocument.createElement("a");
                    return c.val(r, "input[name=url]") ? (t.setAttribute("href", c.val(r, "input[name=url]")), t.innerText = c.val(r, "input[name=text]"), o.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked ? t.setAttribute("target", "_blank") : t.removeAttribute("target")), o.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked ? t.setAttribute("rel", "nofollow") : t.removeAttribute("rel")), n || o.selection.insertNode(t), i()) : (r.querySelector("input[name=url]").focus(), r.querySelector("input[name=url]").classList.add("jodit_error")), !1
                }), r
            },
            tags: ["a"],
            tooltip: "Insert link"
        }, t.link = function(i) {
            i.options.link.followOnDblClick && i.events.on("afterInit", function() {
                i.events.on(i.editor, "dblclick", function(e) {
                    var t = this.getAttribute("href");
                    t && (location.href = t, e.preventDefault())
                }, "a")
            }), i.options.link.processPastedLink && i.events.on("processPaste", function(e, t) {
                if (c.isURL(t)) {
                    var o = c.convertMediaURLToVideoEmbed(t);
                    if (o !== t) return c.dom(o, i.editorDocument);
                    var n = i.editorDocument.createElement("a");
                    return n.setAttribute("href", t), n.innerText = t, i.options.link.openLinkDialogAfterPost && setTimeout(function() {}, 100), n
                }
            }), i.options.link.removeLinkAfterFormat && i.events.on("afterCommand", function(e) {
                var t, o;
                "removeFormat" === e && ((o = i.selection.current()) && "A" !== o.nodeName && (o = d.Dom.closest(o, "A", i.editor)), o && "A" === o.nodeName && (o.innerHTML === o.innerText ? t = i.editorDocument.createTextNode(o.innerHTML) : (t = i.editorDocument.createElement("span")).innerHTML = o.innerHTML, o.parentNode && (o.parentNode.replaceChild(t, o), i.selection.setCursorIn(t, !0))))
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            i = o(2),
            r = o(0);
        n.Config.prototype.limitWords = !1, n.Config.prototype.limitChars = !1, n.Config.prototype.limitHTML = !1, t.limit = function(n) {
            if (n && (n.options.limitWords || n.options.limitChars)) {
                var o = function(e, t) {
                        void 0 === t && (t = "");
                        var o = (t || (n.options.limitHTML ? n.value : n.getEditorText())).replace(i.INVISIBLE_SPACE_REG_EXP, "").split(i.SPACE_REG_EXP).filter(function(e) {
                            return e.length
                        });
                        if (!e || -1 == i.COMMAND_KEYS.indexOf(e.which)) return n.options.limitWords && n.options.limitWords <= o.length ? n.options.limitWords === o.length : n.options.limitChars && n.options.limitChars <= o.join("").length ? n.options.limitChars === o.join("").length : void 0
                    },
                    e = null;
                n.events.on("beforePaste", function() {
                    e = n.observer.snapshot.make()
                }).on("keydown keyup beforeEnter beforePaste", function(e) {
                    if (void 0 !== o(e)) return !1
                }).on("change", r.debounce(function(e, t) {
                    !1 === o(null, n.options.limitHTML ? e : r.extractText(e)) && (n.value = t)
                }, n.defaultTimeout)).on("afterPaste", function() {
                    if (!1 === o(null) && e) return n.observer.snapshot.restore(e), !1
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            r = o(0),
            a = o(2);
        n.Config.prototype.mediaFakeTag = "jodit-media", n.Config.prototype.mediaInFakeBlock = !0, n.Config.prototype.mediaBlocks = ["video", "audio"], t.media = function(o) {
            var n = "jodit_fake_wrapper",
                e = o.options,
                i = e.mediaFakeTag,
                t = e.mediaBlocks;
            e.mediaInFakeBlock && o.events.on("afterGetValueFromEditor", function(e) {
                e.value = e.value.replace(RegExp("<" + i + "[^>]+data-" + n + "[^>]+>(.+?)</" + i + ">", "ig"), "$1")
            }).on("change afterInit afterSetMode", r.debounce(function() {
                o.isDestructed || o.getMode() === a.MODE_SOURCE || r.$$(t.join(","), o.editor).forEach(function(e) {
                    e["__" + n] || (e["__" + n] = !0, function(e) {
                        if (e.parentNode && e.parentNode.getAttribute("data-jodit_iframe_wrapper")) e = e.parentNode;
                        else {
                            var t = void 0;
                            (t = r.dom("<" + i + ' data-jodit-temp="1" contenteditable="false" draggable="true" data-' + n + '="1"></' + i + ">", o.editorDocument)).style.display = "inline-block" === e.style.display ? "inline-block" : "block", t.style.width = e.offsetWidth + "px", t.style.height = e.offsetHeight + "px", e.parentNode && e.parentNode.insertBefore(t, e), t.appendChild(e), e = t
                        }
                        o.events.off(e, "mousedown.select touchstart.select").on(e, "mousedown.select touchstart.select", function() {
                            o.selection.setCursorAfter(e)
                        })
                    }(e))
                })
            }, o.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            i = o(2),
            a = o(0),
            s = o(8);
        n.Config.prototype.mobileTapTimeout = 300, n.Config.prototype.toolbarAdaptive = !0, n.Config.prototype.controls.dots = {
            mode: i.MODE_SOURCE + i.MODE_WYSIWYG,
            popup: function(t, e, o, n, i) {
                var r = o.data;
                return void 0 === r && ((r = {
                    container: t.ownerDocument.createElement("div"),
                    toolbar: new s.ToolbarCollection(t),
                    rebuild: function() {
                        var e = t.events.fire("getDiffButtons.mobile", i.parentToolbar);
                        e && r && r.toolbar.build(a.splitArray(e), r.container)
                    }
                }).container.style.width = "100px", o.data = r), r.rebuild(), r.container
            }
        }, t.mobile = function(o) {
            var t, n = 0,
                i = a.splitArray(o.options.buttons);
            o.events.on("touchend", function(e) {
                e.changedTouches && e.changedTouches.length && (t = (new Date).getTime(), o.options.mobileTapTimeout < t - n && (n = t, o.selection.insertCursorAtPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)))
            }).on("getDiffButtons.mobile", function(e) {
                if (e === o.toolbar) return a.splitArray(o.options.buttons).filter(function(e) {
                    return i.indexOf(e) < 0
                })
            }), o.options.toolbarAdaptive && o.events.on("resize afterInit", function() {
                if (o.options.toolbar) {
                    var e, t = o.container.offsetWidth;
                    "" + (e = a.splitArray(t < o.options.sizeLG ? t < o.options.sizeMD ? t < o.options.sizeSM ? o.options.buttonsXS : o.options.buttonsSM : o.options.buttonsMD : o.options.buttons)) != "" + i && o.toolbar.build((i = e).concat(o.options.extraButtons), o.container)
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(3),
            n = o(1);
        n.Config.prototype.controls.ul = {
            command: "insertUnorderedList",
            controlName: "ul",
            tags: ["ul"],
            tooltip: "Insert Unordered List"
        }, n.Config.prototype.controls.ol = {
            command: "insertOrderedList",
            controlName: "ol",
            tags: ["ol"],
            tooltip: "Insert Ordered List"
        }, t.orderedlist = function(n) {
            n.events.on("afterCommand", function(e) {
                if (/insert(un)?orderedlist/i.test(e)) {
                    var t = i.Dom.up(n.selection.current(), function(e) {
                        return e && /^UL|OL$/i.test(e.nodeName)
                    }, n.editor);
                    if (t && t.parentNode && "P" === t.parentNode.nodeName) {
                        var o = n.selection.save();
                        i.Dom.unwrap(t.parentNode), [].slice.call(t.childNodes).forEach(function(e) {
                            e.lastChild && e.lastChild.nodeType === Node.ELEMENT_NODE && "BR" === e.lastChild.nodeName && e.removeChild(e.lastChild)
                        }), n.selection.restore(o)
                    }
                    n.setEditorValue()
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = o(7),
            v = o(0),
            n = o(1),
            g = o(2);
        n.Config.prototype.askBeforePasteHTML = !0, n.Config.prototype.askBeforePasteFromWord = !0, n.Config.prototype.defaultActionOnPaste = g.INSERT_AS_HTML, n.Config.prototype.controls.cut = {
            command: "cut",
            isDisable: function(e) {
                var t = e.editorWindow.getSelection();
                return !t || t.isCollapsed
            },
            tooltip: "Cut selection"
        }, t.paste = function(d) {
            var l = "",
                c = function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.innerText
                },
                u = function(e, t, o, n, i) {
                    if (void 0 === n && (n = "Clean"), void 0 === i && (i = "Insert only Text"), !d.events || !1 !== d.events.fire("beforeOpenPasteDialog", e, t, o, n, i)) {
                        var r = m.Confirm('<div style="word-break: normal; white-space: normal">' + e + "</div>", t, o);
                        r.container.setAttribute("data-editor_id", d.id);
                        var a = v.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n("Keep") + "</span></a>", r.document),
                            s = v.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(n) + "</span></a>", r.document),
                            l = v.dom('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(i) + "</span></a>", r.document),
                            c = v.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + d.i18n("Cancel") + "</span></a>", r.document);
                        return d.events.on(a, "click", function() {
                            r.close(), o && o(!0)
                        }), d.events.on(s, "click", function() {
                            r.close(), o && o(!1)
                        }), d.events.on(l, "click", function() {
                            r.close(), o && o(0)
                        }), d.events.on(c, "click", function() {
                            r.close()
                        }), r.setFooter([a, s, i ? l : "", c]), d.events && d.events.fire("afterOpenPasteDialog", r, e, t, o, n, i), r
                    }
                },
                r = function(e, t) {
                    switch (t) {
                        case g.INSERT_CLEAR_HTML:
                            e = v.cleanFromWord(e);
                            break;
                        case g.INSERT_ONLY_TEXT:
                            e = c(e);
                            break;
                        case g.INSERT_AS_TEXT:
                            e = v.htmlspecialchars(e)
                    }
                    d.selection.insertHTML(e)
                },
                p = function(o, n) {
                    if (v.isHTML(o) && l !== f(o)) return d.events.stopPropagation("beforePaste"), o = f(o), u(d.i18n("Your code is similar to HTML. Keep as HTML?"), d.i18n("Paste as HTML"), function(e) {
                        var t = g.INSERT_AS_HTML;
                        !1 === e && (t = g.INSERT_AS_TEXT), 0 === e && (t = g.INSERT_ONLY_TEXT), "drop" === n.type && d.selection.insertCursorAtPoint(n.clientX, n.clientY), r(o, t), d.setEditorValue()
                    }, "Insert as Text"), !1
                },
                f = function(e) {
                    var t = e.search(/<!--StartFragment-->/i); - 1 !== t && (e = e.substr(t + 20));
                    var o = e.search(/<!--EndFragment-->/i);
                    return -1 !== o && (e = e.substr(0, o)), e
                },
                h = function(e) {
                    return e.clipboardData ? e.clipboardData : e.dataTransfer || new DataTransfer
                };
            d.events.on("copy cut", function(e) {
                var t = d.selection.getHTML(),
                    o = h(e) || h(d.editorWindow) || h(e.originalEvent);
                o.setData(g.TEXT_PLAIN, c(t)), o.setData(g.TEXT_HTML, t), l = t, "cut" === e.type && (d.selection.remove(), d.selection.focus()), e.preventDefault(), d.events.fire("afterCopy", t)
            }).on("paste", function(e) {
                if (!1 === d.events.fire("beforePaste", e)) return e.preventDefault(), !1;
                if (e && h(e)) {
                    var t = h(e).types,
                        o = void 0,
                        n = "",
                        i = "";
                    if (Array.isArray(t) || "domstringlist" === v.type(t))
                        for (o = 0; o < t.length; o += 1) n += t[o] + ";";
                    else n = "" + t;
                    /text\/html/i.test(n) ? i = h(e).getData("text/html") : /text\/rtf/i.test(n) && v.browser("safari") ? i = h(e).getData("text/rtf") : /text\/plain/i.test(n) && !v.browser("mozilla") ? i = h(e).getData(g.TEXT_PLAIN) : /text/i.test(n) && v.isIE && (i = h(e).getData(g.TEXT_PLAIN)), (i instanceof d.editorWindow.Node || "" !== v.trim(i)) && (i = f(i), l !== i && (i = d.events.fire("processPaste", e, i)), ("string" == typeof i || i instanceof d.editorWindow.Node) && ("drop" === e.type && d.selection.insertCursorAtPoint(e.clientX, e.clientY), r(i, d.options.defaultActionOnPaste)), e.preventDefault(), e.stopPropagation())
                }
                return !1 !== d.events.fire("afterPaste", e) && void 0
            }), d.options.askBeforePasteHTML && d.events.on("beforePaste", function(e) {
                if (e && h(e).getData(g.TEXT_PLAIN)) {
                    var t = h(e).getData(g.TEXT_PLAIN);
                    return p(t, e)
                }
            }), d.options.askBeforePasteFromWord && d.events.on("beforePaste", function(e) {
                if (e && h(e).getData && h(e).getData(g.TEXT_HTML)) {
                    var t = function(t) {
                        if (v.isHTML(t) && l !== f(t)) return v.isHTMLFromWord(t) ? u(d.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"), d.i18n("Word Paste Detected"), function(e) {
                            !0 === e && (t = v.applyStyles(t), d.options.beautifyHTML && d.ownerWindow.html_beautify && (t = d.ownerWindow.html_beautify(t))), !1 === e && (t = v.cleanFromWord(t)), 0 === e && (t = c(v.cleanFromWord(t))), d.selection.insertHTML(t), d.setEditorValue()
                        }) : p(t, e), !1
                    };
                    if (h(e).types && -1 != [].slice.call(h(e).types).indexOf("text/html")) {
                        var o = h(e).getData(g.TEXT_HTML);
                        return t(o)
                    }
                    if ("drop" !== e.type) {
                        var n = v.dom('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>', d.ownerDocument);
                        d.container.appendChild(n);
                        var i = d.selection.save();
                        n.focus();
                        var r = 0,
                            a = function() {
                                n.parentNode && n.parentNode.removeChild(n), d.selection.restore(i)
                            },
                            s = function() {
                                if (r += 1, n.childNodes && 0 < n.childNodes.length) {
                                    var e = n.innerHTML;
                                    a(), !1 !== t(e) && d.selection.insertHTML(e)
                                } else r < 5 ? setTimeout(function() {
                                    s()
                                }, 20) : a()
                            };
                        s()
                    }
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            a = o(2),
            s = o(0);
        n.Config.prototype.showPlaceholder = !0, n.Config.prototype.useInputsPlaceholder = !0, n.Config.prototype.placeholder = "Type something", t.placeholder = function(i) {
            if (i.options.showPlaceholder) {
                this.destruct = function() {
                    r.parentNode && r.parentNode.removeChild(r)
                };
                var t = function() {
                        r.parentNode && (r.style.display = "none")
                    },
                    o = s.debounce(function() {
                        if (null !== r.parentNode && i.editor) {
                            if (i.getRealMode() !== a.MODE_WYSIWYG) return t();
                            var e = i.getEditorValue();
                            e && !/^<(p|div|h[1-6])><\/\1>$/.test(e) ? t() : function() {
                                if (r.parentNode && !i.options.readonly) {
                                    var e = 0,
                                        t = 0,
                                        o = i.editorWindow.getComputedStyle(i.editor);
                                    if (i.editor.firstChild && i.editor.firstChild.nodeType === Node.ELEMENT_NODE) {
                                        var n = i.editorWindow.getComputedStyle(i.editor.firstChild);
                                        e = parseInt(n.getPropertyValue("margin-top"), 10), t = parseInt(n.getPropertyValue("margin-left"), 10), r.style.fontSize = parseInt(n.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = n.getPropertyValue("line-height")
                                    } else r.style.fontSize = parseInt(o.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = o.getPropertyValue("line-height");
                                    s.css(r, {
                                        display: "block",
                                        marginTop: Math.max(parseInt(o.getPropertyValue("margin-top"), 10), e),
                                        marginLeft: Math.max(parseInt(o.getPropertyValue("margin-left"), 10), t)
                                    })
                                }
                            }()
                        }
                    }, i.defaultTimeout / 10),
                    r = s.dom('<span style="display: none;" class="jodit_placeholder">' + i.i18n(i.options.placeholder) + "</span>", i.ownerDocument);
                "rtl" === i.options.direction && (r.style.right = "0px", r.style.direction = "rtl"), i.options.useInputsPlaceholder && i.element.hasAttribute("placeholder") && (r.innerHTML = i.element.getAttribute("placeholder") || ""), i.events.on("readonly", function(e) {
                    e ? t() : o()
                }).on("afterInit", function() {
                    i.workplace.appendChild(r), o(), i.events.fire("placeholder", r.innerHTML), i.events.on("change keyup mouseup keydown mousedown afterSetMode", o).on(window, "load", o)
                })
            }
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(2),
            a = o(1),
            s = o(4);
        a.Config.prototype.controls.redo = {
            mode: r.MODE_SPLIT,
            isDisable: function(e) {
                return !e.observer.stack.canRedo()
            },
            tooltip: "Redo"
        }, a.Config.prototype.controls.undo = {
            mode: r.MODE_SPLIT,
            isDisable: function(e) {
                return !e.observer.stack.canUndo()
            },
            tooltip: "Undo"
        };
        var l = function(n) {
            function e(t) {
                var o = n.call(this, t) || this,
                    e = function(e) {
                        return t.getRealMode() === r.MODE_WYSIWYG && o.jodit.observer[e](), !1
                    };
                return t.registerCommand("redo", {
                    exec: e,
                    hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"]
                }), t.registerCommand("undo", {
                    exec: e,
                    hotkeys: ["ctrl+z", "cmd+z"]
                }), o
            }
            return i(e, n), e
        }(s.Component);
        t.redoundo = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            T = o(2),
            x = o(0);
        n.Config.prototype.useIframeResizer = !0, n.Config.prototype.useTableResizer = !0, n.Config.prototype.useImageResizer = !0, n.Config.prototype.resizer = {
            showSize: !0,
            hideSizeTimeout: 1e3,
            min_width: 10,
            min_height: 10
        }, t.resizer = function(r) {
            var i, a, s, l, c, d, u, p, f, h, m, v = !1,
                g = !1,
                b = !1,
                _ = 0,
                y = x.dom('<div data-editor_id="' + r.id + '" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i><span>100x100</span></div>', r.ownerDocument),
                w = y.getElementsByTagName("span")[0],
                C = function() {
                    b = g = !1, a = null, y.style.display = "none"
                },
                E = function() {
                    w.style.opacity = "0"
                },
                j = function() {
                    if (b && a && y) {
                        var e = x.offset(y.parentNode || r.ownerDocument.documentElement, r, r.ownerDocument, !0),
                            t = x.offset(a, r, r.editorDocument),
                            o = parseInt(y.style.left || "0", 10),
                            n = t.top - 1 - e.top,
                            i = t.left - 1 - e.left;
                        parseInt(y.style.top || "0", 10) === n && o === i && y.offsetWidth === a.offsetWidth && y.offsetHeight === a.offsetHeight || (y.style.top = n + "px", y.style.left = i + "px", y.style.width = a.offsetWidth + "px", y.style.height = a.offsetHeight + "px", r.events && (r.events.fire(a, "changesize"), isNaN(o) || r.events.fire("resize")))
                    }
                };
            x.$$("i", y).forEach(function(t) {
                r.events.on(t, "mousedown touchstart", function(e) {
                    if (!a || !a.parentNode) return C(), !1;
                    i = t, e.preventDefault(), e.stopImmediatePropagation(), u = (c = a.offsetWidth) / (d = a.offsetHeight), g = !0, s = e.clientX, l = e.clientY, r.events.fire("hidePopup"), r.lock("resizer")
                })
            }), r.events.on("readonly", function(e) {
                e && C()
            }).on("beforeDestruct", function() {
                y.parentNode && y.parentNode.removeChild(y)
            }).on("afterInit", function() {
                r.events.on(r.editor, "keydown", function(e) {
                    b && e.which === T.KEY_DELETE && a && "table" !== a.tagName.toLowerCase() && ("JODIT" !== a.tagName ? r.selection.select(a) : (a.parentNode && a.parentNode.removeChild(a), C(), e.preventDefault()))
                }).on(r.ownerWindow, "mousemove touchmove", function(e) {
                    if (g) {
                        if (h = e.clientX - s, m = e.clientY - l, !a) return;
                        var t = i.className;
                        "IMG" === a.tagName ? (h ? (f = c + (t.match(/left/) ? -1 : 1) * h, p = Math.round(f / u)) : (p = d + (t.match(/top/) ? -1 : 1) * m, f = Math.round(p * u)), f > x.innerWidth(r.editor, r.ownerWindow) && (f = x.innerWidth(r.editor, r.ownerWindow), p = Math.round(f / u))) : (f = c + (t.match(/left/) ? -1 : 1) * h, p = d + (t.match(/top/) ? -1 : 1) * m), r.options.resizer.min_width < f && (a.style.width = f < y.parentNode.offsetWidth ? f + "px" : "100%"), r.options.resizer.min_height < p && (a.style.height = p + "px"), j(), o = a.offsetWidth, n = a.offsetHeight, r.options.resizer.showSize && (o < w.offsetWidth || n < w.offsetHeight ? E() : (w.style.opacity = "1", w.innerHTML = o + " x " + n, window.clearTimeout(_), _ = window.setTimeout(E, r.options.resizer.hideSizeTimeout))), e.stopImmediatePropagation()
                    }
                    var o, n
                }).on(r.ownerWindow, "resize", function() {
                    b && j()
                }).on(r.ownerWindow, "mouseup keydown touchend", function(e) {
                    b && !v && (g ? (r.unlock(), g = !1, r.setEditorValue(), e.stopImmediatePropagation()) : C())
                }).on([r.ownerWindow, r.editor], "scroll", function() {
                    b && !g && C()
                })
            }).on("afterGetValueFromEditor", function(e) {
                e.value = e.value.replace(/<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi, "$1")
            }).on("hideResizer", C).on("change afterInit afterSetMode", x.debounce(function() {
                b && (a && a.parentNode ? j() : C()), r.isDestructed || x.$$("img, table, iframe", r.editor).forEach(function(e) {
                    r.getMode() !== T.MODE_SOURCE && !e.__jodit_resizer_binded && ("IFRAME" === e.tagName && r.options.useIframeResizer || "IMG" === e.tagName && r.options.useImageResizer || "TABLE" === e.tagName && r.options.useTableResizer) && (e.__jodit_resizer_binded = !0, function(t) {
                        var e, o;
                        if ("IFRAME" === t.tagName) {
                            var n = t;
                            t = t.parentNode && t.parentNode.getAttribute("data-jodit_iframe_wrapper") ? t.parentNode : ((e = x.dom('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>', r.editorDocument)).style.display = "inline-block" === t.style.display ? "inline-block" : "block", e.style.width = t.offsetWidth + "px", e.style.height = t.offsetHeight + "px", t.parentNode && t.parentNode.insertBefore(e, t), e.appendChild(t), e), r.events.off(t, "mousedown.select touchstart.select").on(t, "mousedown.select touchstart.select", function() {
                                r.selection.select(t)
                            }), r.events.off(t, "changesize").on(t, "changesize", function() {
                                n.setAttribute("width", t.offsetWidth + "px"), n.setAttribute("height", t.offsetHeight + "px")
                            })
                        }
                        r.events.on(t, "dragstart", C).on(t, "mousedown", function(e) {
                            x.isIE() && "IMG" === t.nodeName && e.preventDefault()
                        }).on(t, "mousedown touchstart", function() {
                            v || (v = !0, a = t, r.options.readonly || (y.parentNode || r.workplace.appendChild(y), b = !0, y.style.display = "block", r.isFullSize() && (y.style.zIndex = "" + x.css(r.container, "zIndex")), j()), "IMG" !== a.tagName || a.complete || a.addEventListener("load", function e() {
                                j(), a && a.removeEventListener("load", e)
                            }), clearTimeout(o)), o = window.setTimeout(function() {
                                v = !1
                            }, 400)
                        })
                    }(e))
                })
            }, r.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = o(0),
            n = o(1);
        n.Config.prototype.allowResizeX = !1, n.Config.prototype.allowResizeY = !0, t.size = function(n) {
            var o = function(e) {
                    u.css(n.container, "height", e), n.options.saveHeightInStorage && n.storage.set("height", e)
                },
                i = function(e) {
                    return u.css(n.container, "width", e)
                },
                t = function(e) {
                    return u.css(n.workplace, "height", e)
                };
            if ("auto" !== n.options.height && (n.options.allowResizeX || n.options.allowResizeY)) {
                var r = u.dom('<div class="jodit_editor_resize" ><a href="javascript:void(0)"></a></div>', n.ownerDocument),
                    a = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    },
                    s = !1;
                n.events.on(r, "mousedown touchstart", function(e) {
                    s = !0, a.x = e.clientX, a.y = e.clientY, a.w = n.container.offsetWidth, a.h = n.container.offsetHeight, n.lock(), e.preventDefault()
                }).on(n.ownerWindow, "mousemove touchmove", u.throttle(function(e) {
                    s && (o(n.options.allowResizeY ? a.h + e.clientY - a.y : a.h), i(n.options.allowResizeX ? a.w + e.clientX - a.x : a.w), c(), n.events.fire("resize"))
                }, n.defaultTimeout / 10)).on(n.ownerWindow, "mouseup touchsend", function() {
                    s && (s = !1, n.unlock())
                }).on("afterInit", function() {
                    n.container.appendChild(r)
                }).on("toggleFullSize", function(e) {
                    r.style.display = e ? "none" : "block"
                })
            }
            var e = function() {
                    return (n.options.toolbar ? n.toolbar.container.offsetHeight : 0) + (n.statusbar ? n.statusbar.container.offsetHeight : 0)
                },
                l = function() {
                    if (n.container && n.container.parentNode) {
                        var o = u.css(n.container, "minHeight") - e();
                        [n.workplace, n.iframe, n.editor].map(function(e) {
                            var t = e === n.editor ? o - 2 : o;
                            e && u.css(e, "minHeight", t), n.events.fire("setMinHeight", t)
                        })
                    }
                },
                c = function() {
                    n.options.inline || (l(), n.container && ("auto" !== n.options.height || n.isFullSize()) && t(n.container.offsetHeight - e()))
                },
                d = u.debounce(c, n.defaultTimeout);
            n.events.on("toggleFullSize", function(e) {
                e || "auto" !== n.options.height || (t("auto"), l())
            }).on("afterInit", function() {
                n.options.inline || (u.css(n.editor, {
                    minHeight: "100%"
                }), u.css(n.container, {
                    minHeight: n.options.minHeight,
                    minWidth: n.options.minWidth,
                    maxWidth: n.options.maxWidth
                }));
                var e = n.options.height;
                if (n.options.saveHeightInStorage && "auto" !== e) {
                    var t = n.storage.get("height");
                    t && (e = t)
                }
                n.options.inline || (o(e), i(n.options.width)), c()
            }, void 0, void 0, !0).on(window, "load", d).on("afterInit resize updateToolbar scroll afterResize", d)
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            d = o(2),
            u = o(0),
            a = o(4),
            s = o(2);
        r.Config.prototype.beautifyHTML = !0, r.Config.prototype.useAceEditor = !0, r.Config.prototype.sourceEditorNativeOptions = {
            showGutter: !0,
            theme: "ace/theme/idle_fingers",
            mode: "ace/mode/html",
            wrap: !0,
            highlightActiveLine: !0
        }, r.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.3/ace.js"], r.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify-html.min.js"], r.Config.prototype.controls.source = {
            mode: d.MODE_SPLIT,
            exec: function(e) {
                e.toggleMode()
            },
            isActive: function(e) {
                return e.getRealMode() === d.MODE_SOURCE
            },
            tooltip: "Change mode"
        };
        var l = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.className = "jodit_ace_editor", a.loadNext = function(e, t, o, n) {
                    if (void 0 === o && (o = "aceReady"), void 0 === n && (n = a.className), o && void 0 === t[e] && a.jodit && a.jodit.events) return a.jodit.events && a.jodit.events.fire(o), void(a.jodit.events && a.jodit.events.fire(a.jodit.ownerWindow, o));
                    void 0 !== t[e] && u.appendScript(t[e], function() {
                        a.loadNext(e + 1, t, o, n)
                    }, n, a.jodit.ownerDocument)
                }, a.insertHTML = function(e) {
                    if (a.mirror.selectionStart || 0 === a.mirror.selectionStart) {
                        var t = a.mirror.selectionEnd;
                        a.mirror.value = a.mirror.value.substring(0, a.mirror.selectionStart) + e + a.mirror.value.substring(t, a.mirror.value.length)
                    } else a.mirror.value += a.mirror;
                    a.toWYSIWYG()
                }, a.__lock = !1, a.__oldMirrorValue = "", a.fromWYSIWYG = function(e) {
                    if (void 0 === e && (e = !1), !a.__lock || !0 === e) {
                        a.__lock = !0;
                        var t = a.jodit.getEditorValue(!1);
                        t !== a.getMirrorValue() && a.setMirrorValue(t), a.__lock = !1
                    }
                }, a.toWYSIWYG = function() {
                    if (!a.__lock) {
                        var e = a.getMirrorValue();
                        e !== a.__oldMirrorValue && (a.__lock = !0, a.jodit.setEditorValue(e), a.__lock = !1, a.__oldMirrorValue = e)
                    }
                }, a.autosize = u.debounce(function() {
                    a.mirror.style.height = "auto", a.mirror.style.height = a.mirror.scrollHeight + "px"
                }, a.jodit.defaultTimeout), a.getNormalPosition = function(e, t) {
                    for (var o = e; 0 < o;) {
                        if ("<" === t[--o] && void 0 !== t[o + 1] && t[o + 1].match(/[\w\/]+/i)) return o;
                        if (">" === t[o]) return e
                    }
                    return e
                }, a.tempMarkerStart = "{start-jodit-selection}", a.tempMarkerStartReg = /{start-jodit-selection}/g, a.tempMarkerEnd = "{end-jodit-selection}", a.tempMarkerEndReg = /{end-jodit-selection}/g, a.__clear = function(e) {
                    return e.replace(d.INVISIBLE_SPACE_REG_EXP, "")
                }, a.selInfo = [], a.selectAll = function() {
                    a.mirror.select()
                }, a.onSelectAll = function(e) {
                    if ("selectall" === e.toLowerCase() && a.jodit.getRealMode() === s.MODE_SOURCE) return a.selectAll(), !1
                }, a.getSelectionStart = function() {
                    return a.mirror.selectionStart
                }, a.getSelectionEnd = function() {
                    return a.mirror.selectionEnd
                }, a.setMirrorSelectionRange = function(e, t) {
                    a.mirror.setSelectionRange(e, t)
                }, a.saveSelection = function() {
                    if (a.jodit.getRealMode() === d.MODE_WYSIWYG) a.selInfo = a.jodit.selection.save() || [], a.jodit.setEditorValue(), a.fromWYSIWYG(!0);
                    else {
                        a.selInfo.length = 0;
                        var e = a.getMirrorValue();
                        if (a.getSelectionStart() === a.getSelectionEnd()) {
                            var t = a.jodit.selection.marker(!0);
                            a.selInfo[0] = {
                                startId: t.id,
                                collapsed: !0,
                                startMarker: t.outerHTML
                            };
                            var o = a.getNormalPosition(a.getSelectionStart(), a.getMirrorValue());
                            a.setMirrorValue(e.substr(0, o) + a.__clear(a.selInfo[0].startMarker) + e.substr(o))
                        } else {
                            var n = a.jodit.selection.marker(!0),
                                i = a.jodit.selection.marker(!1);
                            a.selInfo[0] = {
                                startId: n.id,
                                endId: i.id,
                                collapsed: !1,
                                startMarker: a.__clear(n.outerHTML),
                                endMarker: a.__clear(i.outerHTML)
                            }, o = a.getNormalPosition(a.getSelectionStart(), e);
                            var r = a.getNormalPosition(a.getSelectionEnd(), e);
                            a.setMirrorValue(e.substr(0, o) + a.selInfo[0].startMarker + e.substr(o, r - o) + a.selInfo[0].endMarker + e.substr(r))
                        }
                        a.toWYSIWYG()
                    }
                }, a.restoreSelection = function() {
                    if (a.selInfo.length) {
                        if (a.jodit.getRealMode() === d.MODE_WYSIWYG) return a.__lock = !0, a.jodit.selection.restore(a.selInfo), void(a.__lock = !1);
                        var e = a.getMirrorValue(),
                            t = 0,
                            o = 0;
                        try {
                            a.selInfo[0].startMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim, a.tempMarkerStart)), a.selInfo[0].endMarker && (e = e.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim, a.tempMarkerEnd)), a.jodit.ownerWindow.html_beautify && a.jodit.options.beautifyHTML && (e = a.jodit.ownerWindow.html_beautify(e)), o = t = e.indexOf(a.tempMarkerStart), e = e.replace(a.tempMarkerStartReg, ""), a.selInfo[0].collapsed && -1 !== t || (o = e.indexOf(a.tempMarkerEnd), -1 === t && (t = o)), e = e.replace(a.tempMarkerEndReg, "")
                        } finally {
                            e = e.replace(a.tempMarkerEndReg, "").replace(a.tempMarkerStartReg, "")
                        }
                        a.setMirrorValue(e), a.setMirrorSelectionRange(t, o), a.toWYSIWYG(), a.setFocusToMirror()
                    }
                }, a.mirrorContainer = u.dom('<div class="jodit_source"/>', a.jodit.ownerDocument), a.mirror = u.dom('<textarea class="jodit_source_mirror"/>', a.jodit.ownerDocument), t.events.on(a.mirror, "mousedown keydown touchstart input", u.debounce(a.toWYSIWYG, t.defaultTimeout)).on(a.mirror, "change keydown mousedown touchstart input", a.autosize).on("afterSetMode", a.autosize).on(a.mirror, "mousedown focus", function(e) {
                    t.events.fire(e.type, e)
                }), t.events.on("setMinHeight", function(e) {
                    a.mirror && u.css(a.mirror, "minHeight", e)
                }).on("insertHTML", function(e) {
                    if (!t.options.readonly && !a.jodit.isEditorMode()) return a.insertHTML(e), !1
                }).on("aceInited", function() {
                    t.options.readonly && a.aceEditor && a.aceEditor.setReadOnly(!0)
                }, void 0, void 0, !0).on("readonly", function(e) {
                    e ? a.mirror.setAttribute("readonly", "true") : a.mirror.removeAttribute("readonly"), a.aceEditor && a.aceEditor.setReadOnly(e)
                }).on("placeholder", function(e) {
                    a.mirror.setAttribute("placeholder", e)
                }).on("afterInit aceInited", function() {
                    t.events.on("beforeSetMode", a.saveSelection).on("afterSetMode", a.restoreSelection)
                }).on("afterInit", function() {
                    a.mirrorContainer.appendChild(a.mirror), t.workplace.appendChild(a.mirrorContainer), a.autosize();
                    var e = "beutyfy_html_jodit_helper";
                    t.options.beautifyHTML && void 0 === t.ownerWindow.html_beautify && !u.$$("script." + e, t.ownerDocument.body).length && a.loadNext(0, t.options.beautifyHTMLCDNUrlsJS, !1, e), t.options.useAceEditor && a.replaceMirrorToACE()
                }).on("beforeCommand", a.onSelectAll).on("change afterInit", a.fromWYSIWYG), a
            }
            return i(t, e), t.prototype.getMirrorValue = function() {
                return this.mirror.value
            }, t.prototype.setMirrorValue = function(e) {
                this.mirror.value = e
            }, t.prototype.setFocusToMirror = function() {
                this.mirror.focus()
            }, t.prototype.replaceMirrorToACE = function() {
                var r, t, o = this,
                    n = this.jodit,
                    i = function() {
                        t && n.getRealMode() === d.MODE_SOURCE && (n.events.fire("canRedo", t.hasRedo()), n.events.fire("canUndo", t.hasUndo()))
                    },
                    a = function(e) {
                        return r.session.getLine(e).length
                    },
                    s = function() {
                        for (var e = r.session.getLength(), t = [], o = 0, n = 0; n < e; n++) o += a(n), 0 < n && (o += 1), t[n] = o;
                        return t
                    },
                    l = function(e) {
                        var t = s();
                        if (e <= t[0]) return {
                            row: 0,
                            column: e
                        };
                        for (var o = 1, n = 1; n < t.length; n++) t[n] < e && (o = n + 1);
                        return {
                            row: o,
                            column: e - t[o - 1] - 1
                        }
                    },
                    c = function(e, t) {
                        return s()[e] - a(e) + t
                    },
                    e = function() {
                        if (void 0 === r && void 0 !== o.jodit.ownerWindow.ace) {
                            var e = u.dom('<div class="jodit_source_mirror-fake"/>', o.jodit.ownerDocument);
                            o.mirrorContainer.insertBefore(e, o.mirrorContainer.firstChild), o.aceEditor = r = o.jodit.ownerWindow.ace.edit(e), r.setTheme(n.options.sourceEditorNativeOptions.theme), r.renderer.setShowGutter(n.options.sourceEditorNativeOptions.showGutter), r.getSession().setMode(n.options.sourceEditorNativeOptions.mode), r.setHighlightActiveLine(n.options.sourceEditorNativeOptions.highlightActiveLine), r.getSession().setUseWrapMode(!0), r.setOption("indentedSoftWrap", !1), r.setOption("wrap", n.options.sourceEditorNativeOptions.wrap), r.getSession().setUseWorker(!1), r.$blockScrolling = 1 / 0, r.setOptions({
                                maxLines: 1 / 0
                            }), r.on("change", o.toWYSIWYG), r.on("focus", function(e) {
                                n.events.fire("focus", e)
                            }), r.on("mousedown", function(e) {
                                n.events.fire("mousedown", e)
                            }), o.mirror.style.display = "none", t = r.getSession().getUndoManager(), o.setMirrorValue = function(e) {
                                r.setValue(n.options.beautifyHTML && n.ownerWindow.html_beautify ? n.ownerWindow.html_beautify(e) : e), r.clearSelection(), i()
                            }, o.jodit.getRealMode() !== d.MODE_WYSIWYG && o.setMirrorValue(o.getMirrorValue()), o.getMirrorValue = function() {
                                return r.getValue()
                            }, o.setFocusToMirror = function() {
                                r.focus()
                            }, o.getSelectionStart = function() {
                                var e = r.selection.getRange();
                                return c(e.start.row, e.start.column)
                            }, o.getSelectionEnd = function() {
                                var e = r.selection.getRange();
                                return c(e.end.row, e.end.column)
                            }, o.selectAll = function() {
                                r.selection.selectAll()
                            }, o.insertHTML = function(e) {
                                var t = r.selection.getCursor(),
                                    o = r.session.insert(t, e);
                                r.selection.setRange({
                                    start: t,
                                    end: o
                                }, !1)
                            }, o.setMirrorSelectionRange = function(e, t) {
                                var o, n, i;
                                o = t, n = l(e), i = l(o), r.getSelection().setSelectionRange({
                                    start: n,
                                    end: i
                                })
                            }, n.events.on("afterResize", function() {
                                r.resize()
                            }).fire("aceInited", n)
                        }
                    };
                n.events.on(this.jodit.ownerWindow, "aceReady", e).on("aceReady", e).on("afterSetMode", function() {
                    n.getRealMode() !== d.MODE_SOURCE && n.getMode() !== d.MODE_SPLIT || (o.fromWYSIWYG(), e())
                }).on("beforeCommand", function(e) {
                    if (n.getRealMode() !== d.MODE_WYSIWYG && ("redo" === e || "undo" === e) && t) return t["has" + e.substr(0, 1).toUpperCase() + e.substr(1)] && r[e](), i(), !1
                }), e(), void 0 !== this.jodit.ownerWindow.ace || u.$$("script." + this.className, this.jodit.ownerDocument.body).length || this.loadNext(0, n.options.sourceEditorCDNUrlsJS, "aceReady", this.className)
            }, t
        }(a.Component);
        t.source = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(1),
            l = o(7),
            p = o(0),
            f = o(2);
        n.Config.prototype.usePopupForSpecialCharacters = !1, n.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], n.Config.prototype.controls.symbol = {
            icon: "omega",
            hotkeys: ["ctrl+shift+i", "cmd+shift+i"],
            tooltip: "Insert Special Character",
            popup: function(e, t, o, n) {
                var i = e.events.fire("generateSpecialCharactersTable.symbols");
                if (i) {
                    if (e.options.usePopupForSpecialCharacters) {
                        var r = e.ownerDocument.createElement("div");
                        return r.classList.add("jodit_symbols"), r.appendChild(i), e.events.on(i, "close_dialog", n), r
                    }
                    var a = l.Alert(i, e.i18n("Select Special Character"), void 0, "jodit_symbols"),
                        s = i.querySelector("a");
                    s && s.focus(), e.events.on("beforeDestruct", function() {
                        a && a.close()
                    })
                }
            }
        }, t.symbols = function(d) {
            var u = this;
            this.countInRow = 17, d.events.on("generateSpecialCharactersTable.symbols", function() {
                for (var e = p.dom('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>', d.ownerDocument), t = e.querySelector(".jodit_symbols-preview"), o = e.querySelector("table").tBodies[0], r = [], n = 0; n < d.options.specialCharacters.length;) {
                    for (var i = d.ownerDocument.createElement("tr"), a = 0; a < u.countInRow && n < d.options.specialCharacters.length; a += 1, n += 1) {
                        var s = d.ownerDocument.createElement("td"),
                            l = p.dom('<a data-index="' + n + '" data-index-j="' + a + '" href="javascript:void(0)" role="option" tabindex="-1">' + d.options.specialCharacters[n] + "</a>", d.ownerDocument);
                        r.push(l), s.appendChild(l), i.appendChild(s)
                    }
                    o.appendChild(i)
                }
                var c = u;
                return d.events.on(r, "focus", function() {
                    t.innerHTML = this.innerHTML
                }).on(r, "mousedown", function(e) {
                    this && "A" === this.nodeName && (d.selection.focus(), d.selection.insertHTML(this.innerHTML), d.events.fire(this, "close_dialog"), e && e.preventDefault(), e && e.stopImmediatePropagation())
                }).on(r, "mouseenter", function() {
                    this && "A" === this.nodeName && this.focus()
                }).on(r, "keydown", function(e) {
                    var t = e.target;
                    if (t && "A" === t.nodeName) {
                        var o = parseInt(t.getAttribute("data-index") || "0", 0),
                            n = parseInt(t.getAttribute("data-index-j") || "0", 0),
                            i = void 0;
                        switch (e.which) {
                            case f.KEY_UP:
                            case f.KEY_DOWN:
                                void 0 === r[i = e.which === f.KEY_UP ? o - c.countInRow : o + c.countInRow] && r.length - 1 < (i = e.which === f.KEY_UP ? Math.floor(r.length / c.countInRow) * c.countInRow + n : n) && (i -= c.countInRow), r[i] && r[i].focus();
                                break;
                            case f.KEY_RIGHT:
                            case f.KEY_LEFT:
                                void 0 === r[i = e.which === f.KEY_LEFT ? o - 1 : o + 1] && (i = e.which === f.KEY_LEFT ? r.length - 1 : 0), r[i] && r[i].focus();
                                break;
                            case f.KEY_ENTER:
                                d.events.fire(t, "mousedown"), e.stopImmediatePropagation(), e.preventDefault()
                        }
                    }
                }), e
            })
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(4),
            s = o(0);
        r.Config.prototype.commandToHotkeys = {
            removeFormat: ["ctrl+shift+m", "cmd+shift+m"],
            insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"],
            insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"],
            selectall: ["ctrl+a", "cmd+a"]
        };
        var l = function(e) {
            function t(n) {
                var i = e.call(this, n) || this;
                return i.specialKeys = {
                    8: "backspace",
                    9: "tab",
                    10: "return",
                    13: "return",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    19: "pause",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "insert",
                    46: "del",
                    59: ";",
                    61: "=",
                    91: "meta",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12",
                    144: "numlock",
                    145: "scroll",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, i.onKeyPress = function(t) {
                    var o = i.specialKeys[t.which],
                        e = (t.key || String.fromCharCode(t.which)).toLowerCase(),
                        n = [o || e];
                    return ["alt", "ctrl", "shift", "meta"].forEach(function(e) {
                        t[e + "Key"] && o !== e && n.push(e)
                    }), s.normalizeKeyAliases(n.join("+"))
                }, Object.keys(n.options.commandToHotkeys).forEach(function(e) {
                    var t = n.options.commandToHotkeys[e];
                    t && n.registerHotkeyToCommand(t, e)
                }), n.events.on("afterInit", function() {
                    var o = !1;
                    n.events.on("keydown", function(e) {
                        var t = i.onKeyPress(e);
                        if (!1 === i.jodit.events.fire(t, e.type)) return o = !0, n.events.stopPropagation("keydown"), !1
                    }, void 0, void 0, !0).on("keyup", function() {
                        if (o) return o = !1, n.events.stopPropagation("keyup"), !1
                    }, void 0, void 0, !0)
                }), i
            }
            return i(t, e), t
        }(a.Component);
        t.hotkeys = l
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = o(2),
            y = o(0),
            r = o(1),
            w = o(16);
        r.Config.prototype.useTableProcessor = !0, r.Config.prototype.useExtraClassesOptions = !0, r.Config.prototype.controls.table = {
            data: {
                cols: 10,
                rows: 10,
                classList: {
                    "table table-bordered": "Bootstrap Bordered",
                    "table table-striped": "Bootstrap Striped",
                    "table table-dark": "Bootstrap Dark"
                }
            },
            popup: function(d, e, n, u, t) {
                var p, f, h, i, m = 1,
                    v = 1,
                    r = n.data && n.data.rows ? n.data.rows : 10,
                    g = n.data && n.data.cols ? n.data.cols : 10,
                    o = y.dom('<form class="jodit_form jodit_form_inserter"><label><span>1</span> &times; <span>1</span></label><div class="jodit_form-table-creator-box"><div class="jodit_form-container"></div><div class="jodit_form-options">' + function() {
                        if (!d.options.useExtraClassesOptions) return "";
                        var t = [];
                        if (n.data) {
                            var o = n.data.classList;
                            Object.keys(o).forEach(function(e) {
                                t.push('<label><input value="' + e + '" type="checkbox"/>' + o[e] + "</label>")
                            })
                        }
                        return t.join("")
                    }() + "</div></div></form>", d.ownerDocument),
                    a = o.querySelectorAll("span")[0],
                    s = o.querySelectorAll("span")[1],
                    l = o.querySelector(".jodit_form-container"),
                    c = o.querySelector(".jodit_form-table-creator-box"),
                    b = o.querySelector(".jodit_form-options"),
                    _ = [];
                return l.addEventListener("mousemove", function(e, t) {
                    var o = e.target;
                    if (o && "DIV" === o.tagName) {
                        for (h = void 0 === t || isNaN(t) ? parseInt(o.getAttribute("data-index") || "0", 10) : t || 0, m = Math.ceil((h + 1) / g), v = h % g + 1, p = 0; p < _.length; p += 1) _[p].className = v < p % g + 1 || m < Math.ceil((p + 1) / g) ? "" : "hovered";
                        s.innerText = "" + v, a.innerText = "" + m
                    }
                }), d.events.on(l, "touchstart mousedown", function(e) {
                    var t = e.target,
                        o = d.editorDocument;
                    if (e.preventDefault(), e.stopImmediatePropagation(), "DIV" === t.tagName) {
                        h = parseInt(t.getAttribute("data-index") || "0", 10), m = Math.ceil((h + 1) / g), v = h % g + 1;
                        var n = o.createElement("table");
                        n.style.width = "100%";
                        var i, r, a, s = null;
                        for (p = 1; p <= m; p += 1) {
                            for (i = o.createElement("tr"), f = 1; f <= v; f += 1) r = o.createElement("td"), s || (s = r), a = o.createElement("br"), r.appendChild(a), i.appendChild(o.createTextNode("\n")), i.appendChild(o.createTextNode("\t")), i.appendChild(r);
                            n.appendChild(o.createTextNode("\n")), n.appendChild(i)
                        }
                        var l = d.selection.current();
                        if (l && d.selection.isCollapsed()) {
                            var c = w.Dom.closest(l, w.Dom.isBlock, d.editor);
                            c && c !== d.editor && !c.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/) && d.selection.setCursorAfter(c)
                        }
                        y.$$("input[type=checkbox]:checked", b).forEach(function(e) {
                            e.value.split(/[\s]+/).forEach(function(e) {
                                n.classList.add(e)
                            })
                        }), d.selection.insertNode(o.createTextNode("\n")), d.selection.insertNode(n, !1), s && (d.selection.setCursorIn(s), y.scrollIntoView(s, d.editor, d.editorDocument)), u()
                    }
                }).off(t.parentToolbar, "afterOpenPopup.tableGenerator").on(t.parentToolbar, "afterOpenPopup.tableGenerator", function() {
                    ! function(e) {
                        var t = r * g;
                        if (t < _.length) {
                            for (p = t; p < _.length; p += 1) l.removeChild(_[p]), delete _[p];
                            _.length = t
                        }
                        for (p = 0; p < t; p += 1) _[p] || ((i = d.ownerDocument.createElement("div")).setAttribute("data-index", "" + p), _.push(i));
                        _.forEach(function(e) {
                            l.appendChild(e)
                        });
                        var o = (_[0].offsetWidth || 18) * g;
                        l.style.width = o + "px", c.style.width = o + b.offsetWidth + 1 + "px"
                    }(), _[0] && (_[0].className = "hovered")
                }, "", !0), o
            },
            tooltip: "Insert table"
        };
        var a = function(e) {
            function u(r) {
                var a = e.call(this, r) || this;
                return a.__key = "table_processor_observer", a.__selectMode = !1, a.__resizerDelta = 0, a.__drag = !1, a.__addResizer = function() {
                    if (!a.__resizerHandler && (a.__resizerHandler = a.jodit.container.querySelector(".jodit_table_resizer"), !a.__resizerHandler)) {
                        a.__resizerHandler = y.dom('<div class="jodit_table_resizer"></div>', a.jodit.ownerDocument);
                        var o = 0;
                        a.jodit.events.on(a.__resizerHandler, "mousedown touchstart", function(e) {
                            a.__drag = !0, o = e.clientX, a.jodit.lock(a.__key), a.__resizerHandler.classList.add("jodit_table_resizer-moved");
                            var n, t = a.__workTable.getBoundingClientRect();
                            if (a.__minX = 0, a.__maxX = 1e6, null !== a.__wholeTable) t = a.__workTable.parentNode.getBoundingClientRect(), a.__minX = t.left, a.__maxX = t.left + t.width;
                            else {
                                var i = w.Table.formalCoordinate(a.__workTable, a.__workCell, !0);
                                w.Table.formalMatrix(a.__workTable, function(e, t, o) {
                                    i[1] === o && (n = e.getBoundingClientRect(), a.__minX = Math.max(n.left + l.NEARBY / 2, a.__minX)), i[1] + 1 === o && (n = e.getBoundingClientRect(), a.__maxX = Math.min(n.left + n.width - l.NEARBY / 2, a.__maxX))
                                })
                            }
                            return !1
                        }).on(a.jodit.ownerWindow, "mousemove touchmoove", function(e) {
                            if (a.__drag) {
                                var t = e.clientX;
                                t < a.__minX && (t = a.__minX), a.__maxX < t && (t = a.__maxX), a.__resizerDelta = t - o, a.__resizerHandler.style.left = t + "px", a.jodit.editorWindow.getSelection().removeAllRanges(), e.preventDefault && e.preventDefault()
                            }
                        }), a.jodit.container.appendChild(a.__resizerHandler)
                    }
                }, a.onExecCommand = function(e) {
                    if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e)) {
                        e = e.replace("table", "");
                        var t = w.Table.getAllSelectedCells(a.jodit.editor);
                        if (t.length) {
                            var o = t.shift();
                            if (!o) return;
                            var n = w.Dom.closest(o, "table", a.jodit.editor);
                            switch (e) {
                                case "splitv":
                                    w.Table.splitVertical(n);
                                    break;
                                case "splitg":
                                    w.Table.splitHorizontal(n);
                                    break;
                                case "merge":
                                    w.Table.mergeSelected(n);
                                    break;
                                case "empty":
                                    w.Table.getAllSelectedCells(a.jodit.editor).forEach(function(e) {
                                        return e.innerHTML = ""
                                    });
                                    break;
                                case "bin":
                                    n.parentNode && n.parentNode.removeChild(n);
                                    break;
                                case "binrow":
                                    w.Table.removeRow(n, o.parentNode.rowIndex);
                                    break;
                                case "bincolumn":
                                    w.Table.removeColumn(n, o.cellIndex);
                                    break;
                                case "addcolumnafter":
                                case "addcolumnbefore":
                                    w.Table.appendColumn(n, o.cellIndex, "addcolumnafter" === e);
                                    break;
                                case "addrowafter":
                                case "addrowbefore":
                                    w.Table.appendRow(n, o.parentNode, "addrowafter" === e)
                            }
                        }
                        return !1
                    }
                }, r.options.useTableProcessor && r.events.on(a.jodit.ownerWindow, "mouseup touchend", function() {
                    if ((a.__selectMode || a.__drag) && (a.__selectMode = !1, a.jodit.unlock()), a.__resizerHandler && a.__drag) {
                        if (a.__drag = !1, a.__resizerHandler.classList.remove("jodit_table_resizer-moved"), null === a.__wholeTable) {
                            var e = [];
                            w.Table.setColumnWidthByDelta(a.__workTable, w.Table.formalCoordinate(a.__workTable, a.__workCell, !0)[1], a.__resizerDelta, !0, e);
                            var t = w.Dom.next(a.__workCell, u.isCell, a.__workCell.parentNode);
                            w.Table.setColumnWidthByDelta(a.__workTable, w.Table.formalCoordinate(a.__workTable, t)[1], -a.__resizerDelta, !1, e)
                        } else {
                            var o = a.__workTable.offsetWidth,
                                n = y.getContentWidth(a.__workTable.parentNode, a.jodit.editorWindow);
                            if (a.__wholeTable) {
                                var i = parseInt(a.jodit.editorWindow.getComputedStyle(a.__workTable).marginLeft || "0", 10);
                                a.__workTable.style.width = (o - a.__resizerDelta) / n * 100 + "%", a.__workTable.style.marginLeft = (i + a.__resizerDelta) / n * 100 + "%"
                            } else a.__workTable.style.width = (o + a.__resizerDelta) / n * 100 + "%"
                        }
                        r.setEditorValue(), r.selection.focus()
                    }
                }).on(a.jodit.ownerWindow, "scroll", function() {
                    if (a.__drag) {
                        var e = w.Dom.up(a.__workCell, function(e) {
                            return e && "TABLE" === e.nodeName
                        }, r.editor);
                        if (e) {
                            var t = e.getBoundingClientRect();
                            a.__resizerHandler.style.top = t.top + "px"
                        }
                    }
                }).on(a.jodit.ownerWindow, "mousedown touchend", function(e) {
                    var t = w.Dom.closest(e.originalEvent.target, "TD|TH", a.jodit.editor),
                        o = null;
                    t instanceof a.jodit.editorWindow.HTMLTableCellElement && (o = w.Dom.closest(t, "table", a.jodit.editor)), o ? a.__deSelectAll(o, t instanceof a.jodit.editorWindow.HTMLTableCellElement && t) : a.__deSelectAll()
                }).on("afterGetValueFromEditor", function(e) {
                    e.value = e.value.replace(RegExp("([s]*)" + l.JODIT_SELECTED_CELL_MARKER + '="1"', "g"), "")
                }).on("change afterCommand afterSetMode", function() {
                    y.$$("table", r.editor).forEach(function(e) {
                        e[a.__key] || a.observe(e)
                    })
                }).on("beforeSetMode", function() {
                    w.Table.getAllSelectedCells(r.editor).forEach(function(e) {
                        w.Table.restoreSelection(e), w.Table.normalizeTable(w.Dom.closest(e, "table", r.editor))
                    })
                }).on("keydown", function(e) {
                    e.which === l.KEY_TAB && y.$$("table", r.editor).forEach(function(e) {
                        a.__deSelectAll(e)
                    })
                }).on("beforeCommand", a.onExecCommand.bind(a)), a
            }
            return i(u, e), u.prototype.__deSelectAll = function(e, t) {
                var o = w.Table.getAllSelectedCells(e || this.jodit.editor);
                o.length && o.forEach(function(e) {
                    t && t === e || w.Table.restoreSelection(e)
                })
            }, u.isCell = function(e) {
                return !!e && /^TD|TH$/i.test(e.nodeName)
            }, u.prototype.__setWorkCell = function(e, t) {
                void 0 === t && (t = null), this.__wholeTable = t, this.__workCell = e, this.__workTable = w.Dom.up(e, function(e) {
                    return e && "TABLE" === e.nodeName
                }, this.jodit.editor)
            }, u.prototype.__calcResizerPosition = function(e, t, o, n) {
                void 0 === o && (o = 0), void 0 === n && (n = 0);
                var i = y.offset(t, this.jodit, this.jodit.editorDocument);
                if (l.NEARBY < o && l.NEARBY < i.width - o) this.__resizerHandler.style.display = "none";
                else {
                    var r = y.offset(e, this.jodit, this.jodit.editorDocument);
                    if (this.__resizerHandler.style.left = (l.NEARBY < o ? i.left + i.width : i.left) + n + "px", this.__resizerHandler.style.height = r.height + "px", this.__resizerHandler.style.top = r.top + "px", this.__resizerHandler.style.display = "block", l.NEARBY < o) {
                        var a = w.Dom.next(t, u.isCell, t.parentNode);
                        this.__setWorkCell(t, !!a && null)
                    } else {
                        var s = w.Dom.prev(t, u.isCell, t.parentNode);
                        s ? this.__setWorkCell(s) : this.__setWorkCell(t, !0)
                    }
                }
            }, u.prototype.observe = function(l) {
                var c, d = this;
                l[this.__key] = !0, this.jodit.events.on(l, "mousedown touchstart", function(e) {
                    if (!d.jodit.options.readonly) {
                        var t = w.Dom.up(e.target, u.isCell, l);
                        t && t instanceof d.jodit.editorWindow.HTMLElement && (t.firstChild || t.appendChild(d.jodit.editorDocument.createElement("br")), w.Table.addSelected(c = t), d.__selectMode = !0)
                    }
                }).on(l, "mouseleave", function(e) {
                    d.__resizerHandler && d.__resizerHandler !== e.relatedTarget && (d.__resizerHandler.style.display = "none")
                }).on(l, "mousemove touchmove", function(e) {
                    if (!d.jodit.options.readonly && !d.__drag && !d.jodit.isLockedNotBy(d.__key)) {
                        var t = w.Dom.up(e.target, u.isCell, l);
                        if (t)
                            if (d.__selectMode) {
                                t !== c && (d.jodit.lock(d.__key), d.jodit.editorWindow.getSelection().removeAllRanges(), e.preventDefault && e.preventDefault()), d.__deSelectAll(l);
                                for (var o = w.Table.getSelectedBound(l, [t, c]), n = w.Table.formalMatrix(l), i = o[0][0]; i <= o[1][0]; i += 1)
                                    for (var r = o[0][1]; r <= o[1][1]; r += 1) w.Table.addSelected(n[i][r]);
                                var a = n[o[1][0]][o[1][1]],
                                    s = n[o[0][0]][o[0][1]];
                                d.jodit.events.fire("showPopup", l, function() {
                                    var e = y.offset(s, d.jodit, d.jodit.editorDocument),
                                        t = y.offset(a, d.jodit, d.jodit.editorDocument);
                                    return {
                                        left: e.left,
                                        top: e.top,
                                        width: t.left - e.left + t.width,
                                        height: t.top - e.top + t.height
                                    }
                                }), e.stopPropagation()
                            } else d.__calcResizerPosition(l, t, e.offsetX)
                    }
                }), this.__addResizer()
            }, u
        }(w.Component);
        t.TableProcessor = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.prototype.set = function(e, t, o) {
                var n, i;
                n = o ? ((i = new Date).setTime(i.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + i.toUTCString()) : "", document.cookie = e + "=" + t + n + "; path=/"
            }, e.prototype.get = function(e) {
                var t, o, n = e + "=",
                    i = document.cookie.split(";");
                for (t = 0; t < i.length; t += 1) {
                    for (o = i[t];
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 == o.indexOf(n)) return o.substring(n.length, o.length)
                }
                return null
            }, e.prototype.remove = function(e) {
                this.set(e, "", -1)
            }, e
        }();
        t.Cookie = n
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(2),
            l = o(22),
            p = o(6),
            f = o(0),
            h = o(21),
            m = o(1),
            v = o(7),
            g = o(5),
            b = o(11),
            c = o(18),
            r = o(19),
            _ = "default",
            y = "jodit_filebrowser_files_item";
        m.Config.prototype.filebrowser = {
            filter: function(e, t) {
                return t = t.toLowerCase(), "string" == typeof e ? -1 != e.toLowerCase().indexOf(t) : "string" == typeof e.name ? -1 != e.name.toLowerCase().indexOf(t) : "string" != typeof e.file || -1 != e.file.toLowerCase().indexOf(t)
            },
            sortBy: "changed",
            sort: function(e, t, o) {
                var n, i = function(e, t) {
                    return e < t ? -1 : t < e ? 1 : 0
                };
                if ("string" == typeof e) return i(e.toLowerCase(), t.toLowerCase());
                if (void 0 === e[o] || "name" === o) return "string" == typeof e.name ? i(e.name.toLowerCase(), t.name.toLowerCase()) : "string" == typeof e.file ? i(e.file.toLowerCase(), t.file.toLowerCase()) : 0;
                switch (o) {
                    case "changed":
                        return n = new Date(e.changed), new Date(t.changed).getTime() - n.getTime();
                    case "size":
                        return f.humanSizeToBytes(e.size) - f.humanSizeToBytes(t.size)
                }
                return 0
            },
            editImage: !0,
            preview: !0,
            showPreviewNavigation: !0,
            showSelectButtonInPreview: !0,
            contextMenu: !0,
            howLongShowMsg: 3e3,
            createNewFolder: !0,
            deleteFolder: !0,
            moveFolder: !0,
            moveFile: !0,
            showFoldersPanel: !0,
            width: 763,
            height: 400,
            buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"],
            removeButtons: [],
            fullsize: !1,
            showTooltip: !0,
            view: null,
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && Array.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            showFileName: !0,
            showFileSize: !0,
            showFileChangeTime: !0,
            getThumbTemplate: function(e, t, o) {
                var n, i = "",
                    r = "",
                    a = "" + (new Date).getTime();
                void 0 !== e.file && (r = i = e.file), e.thumb && (r = e.thumb), n = '<div class="' + y + '-info">\n            ' + (this.options.showFileName ? '<span class="' + y + '-info-filename">' + i + "</span>" : "") + "\n            " + (this.options.showFileSize && e.size ? '<span class="' + y + '-info-filesize">' + e.size + "</span>" : "") + "\n            " + (this.options.showFileChangeTime && e.changed ? '<span class="' + y + '-info-filechanged">' + e.changed + "</span>" : "") + "\n        </div>";
                var s = f.urlNormalize(t.baseurl + t.path + i);
                return '<a data-is-file="' + (e.isImage ? 0 : 1) + '" draggable="true" class="' + y + '" href="' + s + '" data-source="' + o + '" data-path="' + f.pathNormalize(t.path ? t.path + "/" : "/") + '" data-name="' + i + '" title="' + i + '" data-url="' + s + '">\n            <img data-is-file="' + (e.isImage ? 0 : 1) + '" data-src="' + s + '" src="' + f.urlNormalize(t.baseurl + t.path + r) + "?_tmst=" + a + '" alt="' + i + '"/>\n            ' + (this.options.showFileName || this.options.showFileSize && e.size || this.options.showFileChangeTime && e.changed ? n : "") + "\n        </a>"
            },
            ajax: {
                url: "",
                async: !0,
                data: {},
                cache: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                method: "POST",
                processData: !0,
                dataType: "json",
                headers: {},
                prepareData: function(e) {
                    return e
                },
                process: function(e) {
                    return e
                }
            },
            create: {
                data: {
                    action: "folderCreate"
                }
            },
            getLocalFileByUrl: {
                data: {
                    action: "getLocalFileByUrl"
                }
            },
            resize: {
                data: {
                    action: "imageResize"
                }
            },
            crop: {
                data: {
                    action: "imageCrop"
                }
            },
            move: {
                data: {
                    action: "fileMove"
                }
            },
            fileRemove: {
                data: {
                    action: "fileRemove"
                }
            },
            folderRemove: {
                data: {
                    action: "folderRemove"
                }
            },
            items: {
                data: {
                    action: "files"
                }
            },
            folder: {
                data: {
                    action: "folders"
                }
            },
            permissions: {
                data: {
                    action: "permissions"
                }
            },
            uploader: null
        }, m.Config.prototype.controls.filebrowser = {
            upload: {
                icon: "plus",
                isInput: !0,
                exec: function() {},
                isDisable: function(e) {
                    return !e.canI("FileUpload")
                },
                getContent: function(e, t) {
                    var o = f.dom('<span class="jodit_upload_button">' + p.ToolbarIcon.getIcon("plus") + '<input type="file" accept="' + (e.buffer.fileBrowserOnlyImages ? "image/*" : "*") + '" tabindex="-1" dir="auto" multiple=""/></span>', e.ownerDocument),
                        n = o.querySelector("input");
                    return e.events.on("updateToolbar", function() {
                        t && t.isDisable && (t.isDisable(e, t) ? n.setAttribute("disabled", "disabled") : n.removeAttribute("disabled"))
                    }).fire("bindUploader.filebrowser", o), o
                }
            },
            remove: {
                icon: "bin",
                isDisable: function(e) {
                    return 0 === e.getActiveElements().length || !e.canI("FileRemove")
                },
                exec: function(e) {
                    e.events.fire("fileRemove.filebrowser")
                }
            },
            update: {
                exec: function(e) {
                    e.events.fire("update.filebrowser")
                }
            },
            select: {
                icon: "check",
                isDisable: function(e) {
                    return 0 === e.getActiveElements().length
                },
                exec: function(e) {
                    e.events.fire("select.filebrowser")
                }
            },
            edit: {
                icon: "pencil",
                isDisable: function(e) {
                    var t = e.getActiveElements();
                    return 1 !== t.length || "1" === t[0].getAttribute("data-is-file") || !(e.canI("ImageCrop") || e.canI("ImageResize"))
                },
                exec: function(e) {
                    e.events.fire("edit.filebrowser")
                }
            },
            tiles: {
                icon: "th",
                isActive: function(e) {
                    return "tiles" === e.buffer.fileBrowserView
                },
                exec: function(e) {
                    e.events.fire("view.filebrowser", "tiles")
                }
            },
            list: {
                icon: "th-list",
                isActive: function(e) {
                    return "list" === e.buffer.fileBrowserView
                },
                exec: function(e) {
                    e.events.fire("view.filebrowser", "list")
                }
            },
            filter: {
                isInput: !0,
                getContent: function(e) {
                    var t = f.dom('<input class="jodit_input" placeholder="' + e.i18n("Filter") + '"/>', e.ownerDocument);
                    return e.events.on(t, "keydown mousedown", f.debounce(function() {
                        e.events.fire("filter.filebrowser", t.value)
                    }, e.defaultTimeout)), t
                }
            },
            sort: {
                isInput: !0,
                getContent: function(e) {
                    var t = f.dom('<select class="jodit_input"><option value="changed">' + e.i18n("Sort by changed") + '</option><option value="name">' + e.i18n("Sort by name") + '</option><option value="size">' + e.i18n("Sort by size") + "</option></select>", e.ownerDocument);
                    return e.events.on("sort.filebrowser", function(e) {
                        t.value !== e && (t.value = e)
                    }).on(t, "change", function() {
                        e.events.fire("sort.filebrowser", t.value)
                    }), t
                }
            }
        };
        var d = function(r) {
            function e(e, t) {
                void 0 === t && (t = {});
                var c = r.call(this, e, t) || this;
                c.currentPath = "", c.currentSource = _, c.currentBaseUrl = "", c.storage = new l.Storage(new l.localStorageProvider), c.__currentPermissions = null, c.view = "tiles", c.sortBy = "changed", c.dragger = !1, c.filterWord = "", c.getPathByUrl = function(e, t, o) {
                    var n = "getLocalFileByUrl",
                        i = c;
                    c.options[n].data.url = e, c.send(n, function(e) {
                        i.options.isSuccess(e) ? t(e.data.path, e.data.name, e.data.source) : o(Error(c.options.getMessage(e)))
                    }, function(e) {
                        o(e)
                    })
                }, c.loadItems = function(e, t) {
                    var n = c;
                    return n.options.items.data.path = e, n.options.items.data.source = t, n.files.classList.add("active"), n.files.appendChild(n.loader.cloneNode(!0)), n.send("items", function(e) {
                        var t = n.options.items.process;
                        if (t || (t = c.options.ajax.process), t) {
                            var o = t.call(n, e);
                            n.generateItemsBox(o.data.sources), n.someSelectedWasChanged()
                        }
                    }, function(e) {
                        v.Alert(e.message), n.errorHandler(e)
                    })
                }, c.create = function(e, t, o) {
                    return c.options.create.data.source = o, c.options.create.data.path = t, c.options.create.data.name = e, c.send("create", function(e) {
                        c.options.isSuccess(e) ? (c.currentPath = t, c.currentSource = o, c.loadTree(t, o)) : c.status(c.options.getMessage(e))
                    }, function(e) {
                        c.status(e.message)
                    })
                }, c.move = function(e, t, o) {
                    return c.options.move.data.from = e, c.options.move.data.path = t, c.options.move.data.source = o, c.send("move", function(e) {
                        c.options.isSuccess(e) ? c.loadTree(t, o) : c.status(c.options.getMessage(e))
                    }, function(e) {
                        c.status(e.message)
                    })
                }, c.close = function() {
                    c.dialog.close()
                }, c.onlyImages = !1, c.open = function(n, e) {
                    return void 0 === e && (e = !1), c.onlyImages = e, c.buffer.fileBrowserOnlyImages = e, new Promise(function(e) {
                        if (!c.options.items.url) throw Error("Need set options.filebrowser.ajax.url");
                        var t = 0;
                        c.events.off(c.files, "dblclick").on(c.files, "dblclick", c.onSelect(n), "a").on(c.files, "touchstart", function() {
                            var e = (new Date).getTime();
                            e - t < s.EMULATE_DBLCLICK_TIMEOUT && c.onSelect(n)(), t = e
                        }, "a").off("select.filebrowser").on("select.filebrowser", c.onSelect(n));
                        var o = c.ownerDocument.createElement("div");
                        c.toolbar.build(c.options.buttons, o), c.dialog.dialogbox_header.classList.add("jodit_filebrowser_title_box"), c.dialog.open(c.browser, o), c.events.fire("sort.filebrowser", c.sortBy), c.loadTree(c.currentPath, c.currentSource).then(e)
                    })
                }, c.errorHandler = function(e) {
                    c.status(e instanceof Error ? c.i18n(e.message) : c.options.getMessage(e))
                }, c.uploadHandler = function() {
                    c.loadItems(c.currentPath, c.currentSource)
                }, c.openImageEditor = function(e, i, r, a, s, l) {
                    return c.getInstance("ImageEditor").open(e, function(e, t, o, n) {
                        void 0 === c.options[t.action] && (c.options[t.action] = {}), void 0 === c.options[t.action].data && (c.options[t.action].data = {
                            action: t.action
                        }), c.options[t.action].data.newname = e || i, c.options[t.action].data.box = t.box, c.options[t.action].data.path = r, c.options[t.action].data.name = i, c.options[t.action].data.source = a, c.send(t.action, function(e) {
                            c.options.isSuccess(e) ? (c.loadTree(c.currentPath, c.currentSource), o(), s && s()) : (n(Error(c.options.getMessage(e))), l && l(Error(c.options.getMessage(e))))
                        }, function(e) {
                            n(e), l && l(e)
                        })
                    })
                };
                var d = c,
                    u = e ? e.ownerDocument : document,
                    o = e ? e.editorDocument : u;
                e && (c.id = e.id), d.options = new m.OptionsDefault(f.extend(!0, {}, d.options, g.Jodit.defaultOptions.filebrowser, t, d.jodit ? d.jodit.options.filebrowser : void 0)), d.dialog = new v.Dialog(e || d, {
                    fullsize: d.options.fullsize,
                    buttons: ["dialog.fullsize", "dialog.close"]
                }), d.loader = f.dom('<div class="jodit_filebrowser_loader"><i class="jodit_icon-loader"></i></div>', u), d.browser = f.dom('<div class="jodit_filebrowser non-selected">' + (d.options.showFoldersPanel ? '<div class="jodit_filebrowser_tree"></div>' : "") + '<div class="jodit_filebrowser_files"></div><div class="jodit_filebrowser_status"></div></div>', u), d.status_line = d.browser.querySelector(".jodit_filebrowser_status"), d.tree = d.browser.querySelector(".jodit_filebrowser_tree"), d.files = d.browser.querySelector(".jodit_filebrowser_files"), d.events.on("view.filebrowser", function(e) {
                    e !== d.view && (d.view = e, d.buffer.fileBrowserView = e, d.files.classList.remove("jodit_filebrowser_files_view-tiles"), d.files.classList.remove("jodit_filebrowser_files_view-list"), d.files.classList.add("jodit_filebrowser_files_view-" + d.view), d.storage.set("jodit_filebrowser_view", d.view))
                }).on("sort.filebrowser", function(e) {
                    e !== d.sortBy && (d.sortBy = e, c.storage.set("jodit_filebrowser_sortby", d.sortBy), d.loadItems(d.currentPath, d.currentSource))
                }).on("filter.filebrowser", function(e) {
                    e !== d.filterWord && (d.filterWord = e, d.loadItems(d.currentPath, d.currentSource))
                }).on("fileRemove.filebrowser", function() {
                    c.getActiveElements().length && v.Confirm(d.i18n("Are you sure?"), "", function(e) {
                        if (e) {
                            var t = [];
                            d.getActiveElements().forEach(function(e) {
                                t.push(d.fileRemove(d.currentPath, e.getAttribute("data-name") || "", e.getAttribute("data-source") || ""))
                            }), Promise.all(t).then(function() {
                                d.someSelectedWasChanged(), d.loadTree(d.currentPath, d.currentSource)
                            })
                        }
                    })
                }).on("edit.filebrowser", function() {
                    var e = c.getActiveElements();
                    1 === e.length && d.openImageEditor(e[0].getAttribute("href") || "", e[0].getAttribute("data-name") || "", e[0].getAttribute("data-path") || "", e[0].getAttribute("data-source") || "")
                }).on("update.filebrowser", function() {
                    d.loadTree(c.currentPath, c.currentSource)
                }).on(d.tree, "click", function(e) {
                    var t = this.parentNode,
                        o = t.getAttribute("data-path") || "";
                    return v.Confirm(d.i18n("Are you sure?"), "", function(e) {
                        e && d.folderRemove(o, t.getAttribute("data-name") || "", t.getAttribute("data-source") || "").then(function() {
                            d.loadTree(d.currentPath, d.currentSource)
                        })
                    }), e.stopImmediatePropagation(), !1
                }, "a>i.remove").on(d.tree, "click", function() {
                    var t = this;
                    this.classList.contains("addfolder") ? v.Promt(d.i18n("Enter Directory name"), d.i18n("Create directory"), function(e) {
                        d.create(e, t.getAttribute("data-path") || "", t.getAttribute("data-source") || "")
                    }, d.i18n("type name")) : (d.currentPath = this.getAttribute("data-path") || "", d.currentSource = this.getAttribute("data-source") || "", d.loadTree(d.currentPath, d.currentSource))
                }, "a").on(c.tree, "dragstart", function() {
                    d.dragger = this
                }, "a").on(c.tree, "drop", function() {
                    if (d.options.moveFolder && d.dragger) {
                        var e = d.dragger.getAttribute("data-path") || "";
                        if (!d.options.moveFolder && d.dragger.classList.contains("jodit_filebrowser_tree_item")) return !1;
                        if (d.dragger.classList.contains(y) && (e += d.dragger.getAttribute("data-name"), !d.options.moveFile)) return !1;
                        d.move(e, this.getAttribute("data-path") || "", this.getAttribute("data-source") || "")
                    }
                }, "a");
                var n = new h.ContextMenu(c.jodit || c);
                if (d.events.on(d.files, "contextmenu", function(e) {
                        var l = this;
                        if (d.options.contextMenu) {
                            var c = this;
                            return n.show(e.pageX, e.pageY, [!("1" === c.getAttribute("data-is-file") || !d.options.editImage || !d.canI("ImageResize") && !d.canI("ImageCrop")) && {
                                icon: "pencil",
                                title: "Edit",
                                exec: function() {
                                    d.openImageEditor(c.getAttribute("href") || "", c.getAttribute("data-name") || "", c.getAttribute("data-path") || "", c.getAttribute("data-source") || "")
                                }
                            }, !!d.canI("FileRemove") && {
                                icon: "bin",
                                title: "Delete",
                                exec: function() {
                                    d.fileRemove(d.currentPath, c.getAttribute("data-name") || "", c.getAttribute("data-source") || ""), d.someSelectedWasChanged(), d.loadTree(d.currentPath, d.currentSource)
                                }
                            }, !!d.options.preview && {
                                icon: "eye",
                                title: "Preview",
                                exec: function() {
                                    var n = c.getAttribute("href") || "",
                                        i = new v.Dialog(d),
                                        r = f.dom('<div class="jodit_filebrowser_preview"><i class="jodit_icon-loader"></i></div>', u),
                                        a = u.createElement("img"),
                                        s = function() {
                                            var o = function() {
                                                if (l.removeEventListener("load", o), r.innerHTML = "", d.options.showPreviewNavigation) {
                                                    var e = f.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-next">' + p.ToolbarIcon.getIcon("angle-right") + "</a>", u),
                                                        t = f.dom('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-prev">' + p.ToolbarIcon.getIcon("angle-left") + "</a>", u);
                                                    c.previousSibling && c.previousSibling.classList && c.previousSibling.classList.contains(y) && r.appendChild(t), c.nextSibling && c.nextSibling.classList && c.nextSibling.classList.contains(y) && r.appendChild(e), d.events.on([e, t], "click", function() {
                                                        c = this.classList.contains("jodit_filebrowser_preview_navigation-next") ? c.nextSibling : c.previousSibling, r.innerHTML = '<i class="jodit_icon-loader"></i>', n = c.getAttribute("href") || "", a.setAttribute("src", n), s()
                                                    })
                                                }
                                                r.appendChild(a), i.setPosition()
                                            };
                                            a.addEventListener("load", o), a.complete && o()
                                        };
                                    s(), a.setAttribute("src", n), i.setContent(r), i.open()
                                }
                            }, {
                                icon: "upload",
                                title: "Download",
                                exec: function() {
                                    var e = c.getAttribute("href");
                                    e && d.ownerWindow.open(e)
                                }
                            }], d.dialog.getZIndex() + 1), e.stopPropagation(), e.preventDefault(), !1
                        }
                    }, "a").on(d.files, "click", function(e) {
                        f.ctrlKey(e) || (c.getActiveElements().forEach(function(e) {
                            e.classList.remove("active")
                        }), d.someSelectedWasChanged())
                    }).on(d.files, "click", function(e) {
                        return f.ctrlKey(e) || d.getActiveElements().forEach(function(e) {
                            e.classList.remove("active")
                        }), this.classList.toggle("active"), d.someSelectedWasChanged(), e.stopPropagation(), !1
                    }, "a").on(d.dialog.container, "drop", function(e) {
                        return e.preventDefault()
                    }), c.dialog.setSize(c.options.width, c.options.height), c.options.getLocalFileByUrl = f.extend(!0, {}, c.options.ajax, c.options.getLocalFileByUrl), c.options.crop = f.extend(!0, {}, c.options.ajax, c.options.crop), c.options.resize = f.extend(!0, {}, c.options.ajax, c.options.resize), c.options.create = f.extend(!0, {}, c.options.ajax, c.options.create), c.options.move = f.extend(!0, {}, c.options.ajax, c.options.move), c.options.fileRemove = f.extend(!0, {}, c.options.ajax, c.options.fileRemove), c.options.folderRemove = f.extend(!0, {}, c.options.ajax, c.options.folderRemove), c.options.folder = f.extend(!0, {}, c.options.ajax, c.options.folder), c.options.items = f.extend(!0, {}, c.options.ajax, c.options.items), c.options.permissions = f.extend(!0, {}, c.options.ajax, c.options.permissions), c.view = c.storage.get("jodit_filebrowser_view") && null === c.options.view ? "list" === c.storage.get("jodit_filebrowser_view") ? "list" : "tiles" : "list" === c.options.view ? "list" : "tiles", c.files.classList.add("jodit_filebrowser_files_view-" + c.view), d.buffer.fileBrowserView = c.view, c.sortBy = -1 != ["changed", "name", "size"].indexOf(c.options.sortBy) ? c.options.sortBy : "changed", c.storage.get("jodit_filebrowser_sortby") && (c.sortBy = -1 != ["changed", "name", "size"].indexOf(c.storage.get("jodit_filebrowser_sortby") || "") ? c.storage.get("jodit_filebrowser_sortby") || "" : "changed"), c.currentBaseUrl = f.$$("base", o).length ? f.$$("base", o)[0].getAttribute("href") || "" : location.protocol + "//" + location.host, void 0 !== g.Jodit.modules.Uploader) {
                    var i = f.extend(!0, {}, g.Jodit.defaultOptions.uploader, d.options.uploader, c.jodit && c.jodit.options && null !== c.jodit.options.uploader ? a({}, c.jodit.options.uploader) : {});
                    c.uploader = new b.Uploader(c.jodit || c, i), c.uploader.setPath(c.currentPath), c.uploader.setSource(c.currentSource), c.uploader.bind(c.browser, c.uploadHandler, c.errorHandler), c.events.on("bindUploader.filebrowser", function(e) {
                        c.uploader.bind(e, c.uploadHandler, c.errorHandler)
                    })
                }
                return c
            }
            return i(e, r), e.prototype.canI = function(e) {
                return null !== this.__currentPermissions && (void 0 === this.__currentPermissions["allow" + e] || this.__currentPermissions["allow" + e])
            }, e.prototype.isOpened = function() {
                return this.dialog.isOpened() && "none" !== this.browser.style.display
            }, e.prototype.status = function(e, t) {
                var o = this;
                clearTimeout(this.statustimer), this.status_line.classList.remove("success"), this.status_line.classList.add("active"), this.status_line.innerHTML = e, t && this.status_line.classList.add("success"), this.statustimer = window.setTimeout(function() {
                    o.status_line.classList.remove("active")
                }, this.options.howLongShowMsg)
            }, e.prototype.generateFolderTree = function(e) {
                var i = this,
                    r = [];
                f.each(e, function(o, n) {
                    o && o !== _ && r.push('<div class="jodit_filebrowser_source_title">' + o + "</div>"), n.folders.forEach(function(e) {
                        var t = '<a draggable="draggable" class="jodit_filebrowser_tree_item" href="javascript:void(0)" data-path="' + f.pathNormalize(n.path + e) + '/" data-source="' + o + '"><span>' + e + "</span>";
                        i.options.deleteFolder && ".." !== e && "." !== e && (t += '<i class="remove" data-path="' + f.pathNormalize(n.path + e + "/") + '">&times;</i>'), r.push(t += "</a>")
                    }), i.options.createNewFolder && i.canI("FolderCreate") && r.push('<a class="jodit_button addfolder" href="javascript:void(0)" data-path="' + f.pathNormalize(n.path + name) + '/" data-source="' + o + '">' + p.ToolbarIcon.getIcon("plus") + " " + i.i18n("Add folder") + "</a>")
                }), this.tree.innerHTML = r.join("")
            }, e.prototype.generateItemsBox = function(e) {
                var n = this,
                    i = [];
                f.each(e, function(t, o) {
                    t && t !== _ && i.push('<div class="jodit_filebrowser_source_title">' + t + (o.path ? " - " + o.path : "") + "</div>"), o.files && o.files.length ? ("function" == typeof n.options.sort && o.files.sort(function(e, t) {
                        return n.options.sort(e, t, n.sortBy, n.jodit)
                    }), o.files.forEach(function(e) {
                        (void 0 === n.options.filter || n.options.filter(e, n.filterWord)) && (n.onlyImages && void 0 !== e.isImage && !e.isImage || i.push(n.options.getThumbTemplate.call(n, e, o, t)))
                    })) : i.push("<div>" + n.i18n("There are no files") + "</div>")
                }), this.files.innerHTML = i.join("")
            }, e.prototype.getActiveElements = function() {
                return f.$$(":scope>a.active", this.files)
            }, e.prototype.someSelectedWasChanged = function() {
                this.events.fire("changeSelection")
            }, e.prototype.send = function(e, t, o) {
                var n = f.extend(!0, {}, this.options.ajax, void 0 !== this.options[e] ? this.options[e] : this.options.ajax);
                return n.prepareData && (n.data = n.prepareData.call(this, n.data)), new c.Ajax(this.jodit || this, n).send().then(t).catch(o)
            }, e.prototype.loadPermissions = function(e, t) {
                var n = this,
                    i = this;
                return i.options.permissions.data.path = e, i.options.permissions.data.source = t, i.options.permissions.url ? i.send("permissions", function(e) {
                    var t = i.options.permissions.process;
                    if (t || (t = n.options.ajax.process), t) {
                        var o = t.call(i, e);
                        o.data.permissions && (n.__currentPermissions = o.data.permissions)
                    }
                }, function(e) {
                    v.Alert(e.message), i.errorHandler(e)
                }) : Promise.resolve()
            }, e.prototype.loadTree = function(t, o) {
                var i = this;
                return this.loadPermissions(t, o).then(function() {
                    var n = i;
                    n.options.folder.data.path = t, n.options.folder.data.source = o, n.uploader && (n.uploader.setPath(t), n.uploader.setSource(o));
                    var e = [];
                    return n.options.showFoldersPanel && (n.options.folder.url ? (n.tree.classList.add("active"), n.tree.innerHTML = "", n.tree.appendChild(n.loader.cloneNode(!0)), e.push(i.send("folder", function(e) {
                        var t = n.options.folder.process;
                        if (t || (t = i.options.ajax.process), t) {
                            var o = t.call(n, e);
                            n.generateFolderTree(o.data.sources)
                        }
                    }, function() {
                        n.errorHandler(Error(n.jodit.i18n("Error on load folders")))
                    }))) : n.tree.classList.remove("active")), e.push(i.loadItems(t, o)), Promise.all(e)
                })
            }, e.prototype.fileRemove = function(e, t, o) {
                var n = this;
                return this.options.fileRemove.data.path = e, this.options.fileRemove.data.name = t, this.options.fileRemove.data.source = o, this.send("fileRemove", function(e) {
                    n.options.remove.process && (e = n.options.remove.process.call(n, e)), n.options.isSuccess(e) ? (n.someSelectedWasChanged(), n.status(n.options.getMessage(e), !0)) : n.status(n.options.getMessage(e))
                }, function(e) {
                    n.status(e.message)
                })
            }, e.prototype.folderRemove = function(e, t, o) {
                var n = this;
                return this.options.folderRemove.data.path = e, this.options.folderRemove.data.name = t, this.options.folderRemove.data.source = o, this.send("folderRemove", function(e) {
                    n.options.remove.process && (e = n.options.remove.process.call(n, e)), n.options.isSuccess(e) ? (n.someSelectedWasChanged(), n.status(n.options.getMessage(e), !0)) : n.status(n.options.getMessage(e))
                }, function(e) {
                    n.status(e.message)
                })
            }, e.prototype.onSelect = function(t) {
                var n = this;
                return function() {
                    var e = n.getActiveElements();
                    if (e.length) {
                        var o = [];
                        e.forEach(function(e) {
                            var t = e.getAttribute("data-url");
                            t && o.push(t)
                        }), n.close(), "function" == typeof t && t({
                            baseurl: "",
                            files: o
                        })
                    }
                    return !1
                }
            }, Object.defineProperty(e.prototype, "defaultTimeout", {
                get: function() {
                    return this.jodit ? this.jodit.defaultTimeout : g.Jodit.defaultOptions.observer.timeout
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.View);
        t.FileBrowser = d
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(0),
            s = o(7),
            l = o(5),
            c = o(6),
            d = o(4);
        r.Config.prototype.imageeditor = {
            closeAfterSave: !1,
            width: "85%",
            height: "85%",
            crop: !0,
            resize: !0,
            resizeUseRatio: !0,
            resizeMinWidth: 20,
            resizeMinHeight: 20,
            cropUseRatio: !0,
            cropDefaultWidth: "70%",
            cropDefaultHeight: "70%"
        };
        var u = function(t) {
            function e(e) {
                var r = t.call(this, e) || this;
                return r.resizeUseRatio = !0, r.cropUseRatio = !0, r.clicked = !1, r.activeTab = "resize", r.hide = function() {
                    r.dialog.close()
                }, r.calcValueByPercent = function(e, t) {
                    var o, n = "" + t,
                        i = parseFloat("" + e);
                    return (o = /^[\-+]?[0-9]+(px)?$/.exec(n)) ? parseInt(n, 10) : (o = /^([\-+]?[0-9.]+)%$/.exec(n)) ? Math.round(i * (parseFloat(o[1]) / 100)) : i || 0
                }, r.calcCropBox = function() {
                    var e, t = .8 * r.crop_box.parentNode.offsetWidth,
                        o = .8 * r.crop_box.parentNode.offsetHeight,
                        n = t;
                    e = r.naturalWidth < t && r.naturalHeight < o ? (n = r.naturalWidth, r.naturalHeight) : t / o < r.ratio ? r.naturalHeight * ((n = t) / r.naturalWidth) : (n = r.naturalWidth * (o / r.naturalHeight), o), a.css(r.crop_box, {
                        width: n,
                        height: e
                    })
                }, r.showCrop = function() {
                    r.cropImage && (r.calcCropBox(), r.new_w = r.calcValueByPercent(r.cropImage.offsetWidth || r.image.offsetWidth, r.options.cropDefaultWidth), r.new_h = r.cropUseRatio ? r.new_w / r.ratio : r.calcValueByPercent(r.cropImage.offsetHeight || r.image.offsetHeight, r.options.cropDefaultHeight), a.css(r.cropHandler, {
                        backgroundImage: "url(" + r.cropImage.getAttribute("src") + ")",
                        width: r.new_w,
                        height: r.new_h,
                        left: (r.cropImage.offsetWidth || r.image.offsetWidth) / 2 - r.new_w / 2,
                        top: (r.cropImage.offsetHeight || r.image.offsetHeight) / 2 - r.new_h / 2
                    }), r.jodit.events.fire(r.cropHandler, "updatesize"))
                }, r.cropBox = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                }, r.updateCropBox = function() {
                    if (r.cropImage) {
                        var e = r.cropImage.offsetWidth / r.naturalWidth,
                            t = r.cropImage.offsetHeight / r.naturalHeight;
                        r.cropBox.x = a.css(r.cropHandler, "left") / e, r.cropBox.y = a.css(r.cropHandler, "top") / t, r.cropBox.w = r.cropHandler.offsetWidth / e, r.cropBox.h = r.cropHandler.offsetHeight / t, r.sizes.innerText = r.cropBox.w.toFixed(0) + "x" + r.cropBox.h.toFixed(0)
                    }
                }, r.resizeBox = {
                    w: 0,
                    h: 0
                }, r.updateResizeBox = function() {
                    r.resizeBox.w = r.image.offsetWidth || r.naturalWidth, r.resizeBox.h = r.image.offsetHeight || r.naturalHeight
                }, r.open = function(n, i) {
                    return new Promise(function(e) {
                        var t = (new Date).getTime();
                        r.image = r.jodit.ownerDocument.createElement("img"), a.$$("img,.jodit_icon-loader", r.resize_box).forEach(function(e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        }), a.$$("img,.jodit_icon-loader", r.crop_box).forEach(function(e) {
                            e.parentNode && e.parentNode.removeChild(e)
                        }), a.css(r.cropHandler, "background", "transparent"), r.onSave = i, r.resize_box.appendChild(a.dom('<i class="jodit_icon-loader"></i>', r.jodit.ownerDocument)), r.crop_box.appendChild(a.dom('<i class="jodit_icon-loader"></i>', r.jodit.ownerDocument)), r.image.setAttribute("src", n += /\?/.test(n) ? "&_tst=" + t : "?_tst=" + t), r.dialog.open();
                        var o = function() {
                            r.image.removeEventListener("load", o), r.naturalWidth = r.image.naturalWidth, r.naturalHeight = r.image.naturalHeight, r.widthInput.value = "" + r.naturalWidth, r.heightInput.value = "" + r.naturalHeight, r.ratio = r.naturalWidth / r.naturalHeight, r.resize_box.appendChild(r.image), r.cropImage = r.image.cloneNode(), r.crop_box.appendChild(r.cropImage), a.$$(".jodit_icon-loader", r.editor).forEach(function(e) {
                                e.parentNode && e.parentNode.removeChild(e)
                            }), "crop" === r.activeTab && r.showCrop(), r.jodit.events.fire(r.resizeHandler, "updatesize"), r.jodit.events.fire(r.cropHandler, "updatesize"), r.dialog.setPosition(), r.jodit.events.fire("afterImageEditor"), e(r.dialog)
                        };
                        r.image.addEventListener("load", o), r.image.complete && o()
                    })
                }, r.setHandlers = function() {
                    var i = r;
                    i.jodit.events.on([i.editor.querySelector(".jodit_bottomright"), i.cropHandler], "mousedown", function(e) {
                        i.target = e.target || e.srcElement, e.preventDefault(), e.stopImmediatePropagation(), i.clicked = !0, i.start_x = e.clientX, i.start_y = e.clientY, i.height = "crop" === i.activeTab ? (i.top_x = a.css(i.cropHandler, "left"), i.top_y = a.css(i.cropHandler, "top"), i.width = i.cropHandler.offsetWidth, i.cropHandler.offsetHeight) : (i.width = i.image.offsetWidth, i.image.offsetHeight)
                    }).off(r.jodit.ownerWindow, ".jodit_image_editor" + i.jodit.id).on(r.jodit.ownerWindow, "mousemove.jodit_image_editor" + i.jodit.id, a.throttle(function(e) {
                        i.clicked && (i.diff_x = e.clientX - i.start_x, i.diff_y = e.clientY - i.start_y, "resize" === i.activeTab && i.resizeUseRatio || "crop" === i.activeTab && i.cropUseRatio ? i.diff_x ? (i.new_w = i.width + i.diff_x, i.new_h = Math.round(i.new_w / i.ratio)) : (i.new_h = i.height + i.diff_y, i.new_w = Math.round(i.new_h * i.ratio)) : (i.new_w = i.width + i.diff_x, i.new_h = i.height + i.diff_y), "resize" === i.activeTab ? (i.options.resizeMinWidth < i.new_w && (a.css(i.image, "width", i.new_w + "px"), i.widthInput.value = "" + i.new_w), i.options.resizeMinHeight < i.new_h && (a.css(i.image, "height", i.new_h + "px"), i.heightInput.value = "" + i.new_h), r.jodit.events.fire(i.resizeHandler, "updatesize")) : (i.target !== i.cropHandler ? (i.cropImage.offsetWidth < i.top_x + i.new_w && (i.new_w = i.cropImage.offsetWidth - i.top_x), i.cropImage.offsetHeight < i.top_y + i.new_h && (i.new_h = i.cropImage.offsetHeight - i.top_y), a.css(i.cropHandler, {
                            width: i.new_w,
                            height: i.new_h
                        })) : (i.cropImage.offsetWidth < i.top_x + i.diff_x + i.cropHandler.offsetWidth && (i.diff_x = i.cropImage.offsetWidth - i.top_x - i.cropHandler.offsetWidth), a.css(i.cropHandler, "left", i.top_x + i.diff_x), i.cropImage.offsetHeight < i.top_y + i.diff_y + i.cropHandler.offsetHeight && (i.diff_y = i.cropImage.offsetHeight - i.top_y - i.cropHandler.offsetHeight), a.css(i.cropHandler, "top", i.top_y + i.diff_y)), r.jodit.events.fire(i.cropHandler, "updatesize")), e.stopImmediatePropagation())
                    }, 5)).on(r.jodit.ownerWindow, "resize.jodit_image_editor" + i.jodit.id, function() {
                        r.jodit.events.fire(i.resizeHandler, "updatesize"), i.showCrop(), r.jodit.events.fire(i.cropHandler, "updatesize")
                    }).on(r.jodit.ownerWindow, "mouseup.jodit_image_editor" + i.jodit.id + " keydown.jodit_image_editor" + i.jodit.id, function(e) {
                        i.clicked && (i.clicked = !1, e.stopImmediatePropagation())
                    }), a.$$(".jodit_btn_group", i.editor).forEach(function(e) {
                        var t = e.querySelector("input");
                        i.jodit.events.on(e, "click change", function() {
                            a.$$("button", e).forEach(function(e) {
                                return e.classList.remove("active")
                            }), this.classList.add("active"), t.checked = !!this.getAttribute("data-yes"), i.jodit.events.fire(t, "change")
                        }, "button")
                    }), i.jodit.events.on(r.editor, "click", function() {
                        a.$$(".jodit_image_editor_slider,.jodit_image_editor_area", i.editor).forEach(function(e) {
                            return e.classList.remove("active")
                        });
                        var e = this.parentNode;
                        e.classList.add("active"), i.activeTab = e.getAttribute("data-area") || "";
                        var t = i.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_" + i.activeTab);
                        t && t.classList.add("active"), "crop" === i.activeTab && i.showCrop()
                    }, ".jodit_image_editor_slider-title").on(i.widthInput, "change mousedown keydown", a.debounce(function() {
                        var e, t = parseInt(i.widthInput.value, 10);
                        i.jodit.options.resizer.min_width < t && (a.css(i.image, "width", t + "px"), i.resizeUseRatio && i.jodit.options.resizer.min_height < (e = Math.round(t / i.ratio)) && (a.css(i.image, "height", e + "px"), i.heightInput.value = "" + e)), r.jodit.events.fire(i.resizeHandler, "updatesize")
                    }, 200)).on(i.heightInput, "change mousedown keydown", a.debounce(function() {
                        var e, t = parseInt(i.heightInput.value, 10);
                        i.jodit.options.resizer.min_height < t && (a.css(i.image, "height", t + "px"), i.resizeUseRatio && i.jodit.options.resizer.min_width < (e = Math.round(t * i.ratio)) && (a.css(i.image, "width", e + "px"), i.widthInput.value = "" + e)), r.jodit.events.fire(i.resizeHandler, "updatesize")
                    }, 200));
                    var e = i.editor.querySelector(".jodit_image_editor_keep_spect_ratio");
                    e && e.addEventListener("change", function() {
                        i.resizeUseRatio = e.checked
                    });
                    var t = i.editor.querySelector(".jodit_image_editor_keep_spect_ratio_crop");
                    t && t.addEventListener("change", function() {
                        i.cropUseRatio = t.checked
                    }), i.jodit.events.on(i.resizeHandler, "updatesize", function() {
                        a.css(i.resizeHandler, {
                            top: 0,
                            left: 0,
                            width: (i.image.offsetWidth || i.naturalWidth) + "px",
                            height: (i.image.offsetHeight || i.naturalHeight) + "px"
                        }), r.updateResizeBox()
                    }).on(i.cropHandler, "updatesize", function() {
                        if (i.cropImage) {
                            var e = a.css(i.cropHandler, "left"),
                                t = a.css(i.cropHandler, "top"),
                                o = i.cropHandler.offsetWidth,
                                n = i.cropHandler.offsetHeight;
                            e < 0 && (e = 0), t < 0 && (t = 0), i.cropImage.offsetWidth < e + o && (o = i.cropImage.offsetWidth - e, i.cropUseRatio && (n = o / i.ratio)), i.cropImage.offsetHeight < t + n && (n = i.cropImage.offsetHeight - t, i.cropUseRatio && (o = n * i.ratio)), a.css(i.cropHandler, {
                                width: o,
                                height: n,
                                left: e,
                                top: t,
                                backgroundPosition: -e - 1 + "px " + (-t - 1) + "px",
                                backgroundSize: i.cropImage.offsetWidth + "px " + i.cropImage.offsetHeight + "px"
                            }), i.updateCropBox()
                        }
                    }), i.buttons.forEach(function(e) {
                        e.addEventListener("mousedown", function(e) {
                            e.stopImmediatePropagation()
                        }), e.addEventListener("click", function() {
                            var t = {
                                action: i.activeTab,
                                box: "resize" === i.activeTab ? i.resizeBox : i.cropBox
                            };
                            switch (e.getAttribute("data-action")) {
                                case "saveas":
                                    s.Promt(i.jodit.i18n("Enter new name"), i.jodit.i18n("Save in new file"), function(e) {
                                        if (!a.trim(e)) return s.Alert(i.jodit.i18n("The name should not be empty")), !1;
                                        i.onSave(e, t, i.hide, function(e) {
                                            s.Alert(e)
                                        })
                                    });
                                    break;
                                case "save":
                                    i.onSave(void 0, t, i.hide, function(e) {
                                        s.Alert(e)
                                    });
                                    break;
                                case "reset":
                                    "resize" === i.activeTab ? (a.css(i.image, {
                                        width: null,
                                        height: null
                                    }), i.widthInput.value = "" + i.naturalWidth, i.heightInput.value = "" + i.naturalHeight, i.jodit.events.fire(i.resizeHandler, "updatesize")) : i.showCrop()
                            }
                        })
                    })
                }, r.options = e && e.options ? e.options.imageeditor : l.Jodit.defaultOptions.imageeditor, r.resizeUseRatio = r.options.resizeUseRatio, r.cropUseRatio = r.options.cropUseRatio, r.buttons = [a.dom('<button data-action="reset" type="button" class="jodit_btn">' + c.ToolbarIcon.getIcon("update") + " " + e.i18n("Reset") + "</button>", e.ownerDocument), a.dom('<button data-action="save" type="button" class="jodit_btn jodit_btn_success">' + c.ToolbarIcon.getIcon("save") + " " + e.i18n("Save") + "</button>", e.ownerDocument), a.dom('<button data-action="saveas" type="button" class="jodit_btn jodit_btn_success">' + c.ToolbarIcon.getIcon("save") + " " + e.i18n("Save as ...") + "</button>", e.ownerDocument)], r.activeTab = r.options.resize ? "resize" : "crop", r.editor = a.dom('<form class="jodit_image_editor jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-3-4">' + (r.options.resize ? '<div class="jodit_image_editor_area jodit_image_editor_area_resize active">                                <div class="jodit_image_editor_box"></div>                                <div class="jodit_image_editor_resizer">                                    <i class="jodit_bottomright"></i>                                </div>                            </div>' : "") + (r.options.crop ? '<div class="jodit_image_editor_area jodit_image_editor_area_crop' + (r.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_box">                                    <div class="jodit_image_editor_croper">                                        <i class="jodit_bottomright"></i>                                        <i class="jodit_sizes"></i>                                    </div>                                </div>                            </div>' : "") + '</div><div class="jodit_col-lg-1-4">' + (r.options.resize ? '<div data-area="resize" class="jodit_image_editor_slider active">                                <div class="jodit_image_editor_slider-title">' + c.ToolbarIcon.getIcon("resize") + e.i18n("Resize") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_width">' + e.i18n("Width") + '</label>                                        <input type="number" class="jodit_image_editor_width"/>                                    </div>                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_height">' + e.i18n("Height") + '</label>                                        <input type="number" class="jodit_image_editor_height"/>                                    </div>                                    <div class="jodit_form_group">                                        <label>' + e.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r.resizeUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio"/>                                            <button type="button"  data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (r.resizeUseRatio ? "active" : "") + '">' + e.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn' + (r.resizeUseRatio ? "" : "active") + '">' + e.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + (r.options.crop ? '<div data-area="crop" class="jodit_image_editor_slider' + (r.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_slider-title">' + c.ToolbarIcon.getIcon("crop") + e.i18n("Crop") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label>' + e.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r.cropUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio_crop"/>                                            <button type="button" data-yes="1" class="jodit_col6 jodit_btn jodit_btn_success ' + (r.cropUseRatio ? "active" : "") + '">' + e.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn ' + (r.cropUseRatio ? "" : "active") + '">' + e.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + "</div></div></form>", e.ownerDocument), r.widthInput = r.editor.querySelector(".jodit_image_editor_width"), r.heightInput = r.editor.querySelector(".jodit_image_editor_height"), r.resize_box = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_resize .jodit_image_editor_box"), r.crop_box = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box"), r.sizes = r.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_sizes"), r.resizeHandler = r.editor.querySelector(".jodit_image_editor_resizer"), r.cropHandler = r.editor.querySelector(".jodit_image_editor_croper"), r.dialog = new s.Dialog(e), r.dialog.setContent(r.editor), r.dialog.setSize(r.options.width, r.options.height), r.dialog.setTitle(r.buttons), r.setHandlers(), r
            }
            return i(e, t), e
        }(d.Component);
        t.ImageEditor = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = o(2),
            h = o(3),
            m = o(20);
        t.tableKeyboardNavigation = function(p) {
            p.events.on("keydown", function(t) {
                var e, n;
                if ((t.which === f.KEY_TAB || t.which === f.KEY_LEFT || t.which === f.KEY_RIGHT || t.which === f.KEY_UP || t.which === f.KEY_DOWN) && (e = p.selection.current(), n = h.Dom.up(e, function(e) {
                        return e && e.nodeName && /^td|th$/i.test(e.nodeName)
                    }, p.editor))) {
                    var o = p.editorWindow.getSelection(),
                        i = o.rangeCount ? o.getRangeAt(0) : p.editorDocument.createRange();
                    if (t.which === f.KEY_TAB || e === n || (t.which !== f.KEY_LEFT && t.which !== f.KEY_UP || !(h.Dom.prev(e, function(e) {
                            return t.which === f.KEY_UP ? e && "BR" === e.nodeName : !!e
                        }, n) || t.which !== f.KEY_UP && e.nodeType === Node.TEXT_NODE && 0 !== i.startOffset)) && (t.which !== f.KEY_RIGHT && t.which !== f.KEY_DOWN || !(h.Dom.next(e, function(e) {
                            return t.which === f.KEY_DOWN ? e && "BR" === e.nodeName : !!e
                        }, n) || t.which !== f.KEY_DOWN && e.nodeType === Node.TEXT_NODE && e.nodeValue && i.startOffset !== e.nodeValue.length))) {
                        var r = h.Dom.up(n, function(e) {
                                return e && /^table$/i.test(e.nodeName)
                            }, p.editor),
                            a = null;
                        switch (t.which) {
                            case f.KEY_TAB:
                            case f.KEY_LEFT:
                                var s = t.which === f.KEY_LEFT || t.shiftKey ? "prev" : "next";
                                (a = h.Dom[s](n, function(e) {
                                    return e && /^td|th$/i.test(e.tagName)
                                }, r)) || (m.Table.appendRow(r, "next" !== s && r.querySelector("tr"), "next" === s), a = h.Dom[s](n, function(e) {
                                    return e && h.Dom.isCell(e, p.editorWindow)
                                }, r));
                                break;
                            case f.KEY_UP:
                            case f.KEY_DOWN:
                                var l = 0,
                                    c = 0,
                                    d = m.Table.formalMatrix(r, function(e, t, o) {
                                        e === n && (l = t, c = o)
                                    });
                                t.which === f.KEY_UP ? void 0 !== d[l - 1] && (a = d[l - 1][c]) : void 0 !== d[l + 1] && (a = d[l + 1][c])
                        }
                        if (a) {
                            if (a.firstChild) t.which === f.KEY_TAB ? p.selection.select(a, !0) : p.selection.setCursorIn(a, t.which === f.KEY_RIGHT || t.which === f.KEY_DOWN);
                            else {
                                var u = p.editorDocument.createElement("br");
                                a.appendChild(u), p.selection.setCursorBefore(u)
                            }
                            return !1
                        }
                    }
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            h = o(0),
            m = o(16),
            u = o(2),
            a = o(2);
        r.Config.prototype.useSearch = !0;
        var s = function(e) {
            function f(n) {
                var p = e.call(this, n) || this;
                if (p.template = '<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="' + p.jodit.i18n("Search for") + '" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="' + p.jodit.i18n("Replace with") + '" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">' + m.ToolbarIcon.getIcon("angle-down") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">' + m.ToolbarIcon.getIcon("angle-up") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">' + m.ToolbarIcon.getIcon("cancel") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">' + p.jodit.i18n("Replace") + "</button></div></div></div>", p.eachMap = function(e, t, o) {
                        m.Dom.findWithCurrent(e, function(e) {
                            return !!e && t(e)
                        }, p.jodit.editor, o ? "nextSibling" : "previousSibling", o ? "firstChild" : "lastChild")
                    }, p.updateCounters = function() {
                        if (p.isOpened) {
                            p.counterBox.style.display = p.queryInput.value.length ? "inline-block" : "none";
                            var e = p.jodit.editorWindow.getSelection(),
                                t = e.rangeCount ? e.getRangeAt(0) : p.jodit.editorDocument.createRange(),
                                o = p.calcCounts(p.queryInput.value, t);
                            p.counterBox.innerText = o.join("/")
                        }
                    }, p.calcCounts = function(e, t) {
                        void 0 === t && (t = !1);
                        for (var o = 0, n = 0, i = [], r = !1, a = p.jodit.editor.firstChild; a && e.length;)
                            if (r = p.find(a, e, !0, 0, r || p.jodit.editorDocument.createRange())) {
                                if (p.boundAlreadyWas(r, i)) break;
                                i.push(r), a = r.startContainer, n += 1, t && p.boundAlreadyWas(t, [r]) && (o = n)
                            } else a = null;
                        return [o, n]
                    }, p.findAndReplace = function(e, t) {
                        var o = p.jodit.editorWindow.getSelection(),
                            n = o.rangeCount ? o.getRangeAt(0) : p.jodit.editorDocument.createRange(),
                            i = p.find(e, t, !0, 0, n);
                        if (i && i.startContainer && i.endContainer) {
                            var r = p.jodit.editorDocument.createRange();
                            try {
                                if (i && i.startContainer && i.endContainer) {
                                    r.setStart(i.startContainer, i.startOffset), r.setEnd(i.endContainer, i.endOffset), r.deleteContents();
                                    var a = p.jodit.editorDocument.createTextNode(p.replaceInput.value);
                                    r.insertNode(a), p.jodit.selection.select(a), p.tryScrollToElement(a)
                                }
                            } catch (e) {}
                            return !0
                        }
                        return !1
                    }, p.findAndSelect = function(e, t, o) {
                        var n = p.jodit.editorWindow.getSelection(),
                            i = n.rangeCount ? n.getRangeAt(0) : p.jodit.editorDocument.createRange(),
                            r = p.find(e, t, o, 0, i);
                        if (r && r.startContainer && r.endContainer) {
                            var a = p.jodit.editorDocument.createRange();
                            try {
                                a.setStart(r.startContainer, r.startOffset), a.setEnd(r.endContainer, r.endOffset), p.jodit.selection.selectRange(a)
                            } catch (e) {}
                            return p.tryScrollToElement(r.startContainer), p.current = r.startContainer, p.updateCounters(), !0
                        }
                        return !1
                    }, p.find = function(e, a, s, l, c) {
                        if (e && a.length) {
                            var d = "",
                                u = {
                                    startContainer: null,
                                    startOffset: null,
                                    endContainer: null,
                                    endOffset: null
                                };
                            if (p.eachMap(e, function(e) {
                                    if (e.nodeType === Node.TEXT_NODE && null !== e.nodeValue && e.nodeValue.length) {
                                        var t = e.nodeValue;
                                        s || e !== c.startContainer ? s && e === c.endContainer && (t = l ? t.substr(0, c.startOffset) : t.substr(c.endOffset)) : t = l ? t.substr(c.endOffset) : t.substr(0, c.startOffset);
                                        var o = s ? d + t : t + d,
                                            n = f.findSomePartOfString(a, o, s);
                                        if (!1 !== n) {
                                            var i = f.findSomePartOfString(a, t, s);
                                            !0 === i ? i = h.trim(a) : !1 === i && !0 === (i = f.findSomePartOfString(t, a, s)) && (i = h.trim(t));
                                            var r = f.getSomePartOfStringIndex(a, t, s) || 0;
                                            if ((s && !l || !s && l) && 0 < e.nodeValue.length - t.length && (r += e.nodeValue.length - t.length), null === u.startContainer && (u.startContainer = e, u.startOffset = r), !0 === n) return u.endContainer = e, u.endOffset = r, u.endOffset += i.length, !0;
                                            d = o
                                        } else d = "", u = {
                                            startContainer: null,
                                            startOffset: null,
                                            endContainer: null,
                                            endOffset: null
                                        }
                                    } else m.Dom.isBlock(e) && "" !== d && (d = s ? d + " " : " " + d);
                                    return !1
                                }, s), u.startContainer && u.endContainer) return u;
                            if (!l) return p.current = s ? p.jodit.editor.firstChild : p.jodit.editor.lastChild, p.find(p.current, a, s, l + 1, c)
                        }
                        return !1
                    }, p.isOpened = !1, p.open = function(e) {
                        void 0 === e && (e = !1), p.isOpened || (p.searchBox.classList.add("jodit_search-active"), p.isOpened = !0), p.jodit.events.fire("hidePopup"), p.searchBox.classList.toggle("jodit_search-and-replace", e), p.current = p.jodit.selection.current(), p.selInfo = p.jodit.selection.save();
                        var t = "" + p.jodit.ownerWindow.getSelection();
                        t && (p.queryInput.value = t), p.updateCounters(), t ? p.queryInput.select() : p.queryInput.focus()
                    }, p.selInfo = null, p.current = !1, p.close = function() {
                        p.isOpened && (p.selInfo && (p.jodit.selection.restore(p.selInfo), p.selInfo = null), p.searchBox.classList.remove("jodit_search-active"), p.isOpened = !1)
                    }, n.options.useSearch) {
                    var i = p;
                    i.searchBox = h.dom(i.template, n.ownerDocument), i.queryInput = i.searchBox.querySelector("input.jodit_search-query"), i.replaceInput = i.searchBox.querySelector("input.jodit_search-replace"), i.closeButton = i.searchBox.querySelector(".jodit_search_buttons-cancel"), i.nextButton = i.searchBox.querySelector(".jodit_search_buttons-next"), i.prevButton = i.searchBox.querySelector(".jodit_search_buttons-prev"), i.replaceButton = i.searchBox.querySelector(".jodit_search_buttons-replace"), i.counterBox = i.searchBox.querySelector(".jodit_search_counts span"), n.events.on(i.closeButton, "click", p.close).on(i.queryInput, "mousedown", function() {
                        n.selection.isFocused() && (n.selection.removeMarkers(), i.selInfo = n.selection.save())
                    }).on(i.replaceButton, "click", function(e) {
                        i.findAndReplace(n.selection.current() || n.editor.firstChild, i.queryInput.value), p.updateCounters(), e.preventDefault(), e.stopImmediatePropagation()
                    }).on([i.nextButton, i.prevButton], "click", function(e) {
                        n.events.fire(i.nextButton === this ? "searchNext" : "searchPrevious"), e.preventDefault(), e.stopImmediatePropagation()
                    }).on(p.queryInput, "keydown", h.debounce(function(e) {
                        switch (e.which) {
                            case u.KEY_ENTER:
                                e.preventDefault(), e.stopImmediatePropagation(), n.events.fire("searchNext") && p.close();
                                break;
                            default:
                                p.updateCounters()
                        }
                    }, p.jodit.defaultTimeout)).on(p.jodit.container, "keydown", function(e) {
                        if (n.getRealMode() === a.MODE_WYSIWYG) switch (e.which) {
                            case u.KEY_ESC:
                                p.close();
                                break;
                            case u.KEY_F3:
                                i.queryInput.value && (n.events.fire(e.shiftKey ? "searchPrevious" : "searchNext"), e.preventDefault())
                        }
                    }).on("beforeSetMode", function() {
                        p.close()
                    }).on("afterInit", function() {
                        n.workplace.appendChild(p.searchBox)
                    }).on("keydown mousedown", function() {
                        p.selInfo && (n.selection.removeMarkers(), p.selInfo = null), p.isOpened && (p.current = p.jodit.selection.current(), p.updateCounters())
                    }).on("searchNext searchPrevious", function() {
                        return i.findAndSelect(n.selection.current() || n.editor.firstChild, i.queryInput.value, "searchNext" === n.events.current[n.events.current.length - 1])
                    }).on("search", function(e, t) {
                        void 0 === t && (t = !0), n.execCommand("search", e, t)
                    }), n.registerCommand("search", {
                        exec: function(e, t, o) {
                            return void 0 === o && (o = !0), i.findAndSelect(n.selection.current() || n.editor.firstChild, t, o), !1
                        }
                    }), n.registerCommand("openSearchDialog", {
                        exec: function() {
                            return i.open(), !1
                        },
                        hotkeys: ["ctrl+f", "cmd+f"]
                    }), n.registerCommand("openReplaceDialog", {
                        exec: function() {
                            return n.options.readonly || i.open(!0), !1
                        },
                        hotkeys: ["ctrl+h", "cmd+h"]
                    })
                }
                return p
            }
            return i(f, e), f.getSomePartOfStringIndex = function(e, t, o) {
                return void 0 === o && (o = !0), this.findSomePartOfString(e, t, o, !0)
            }, f.findSomePartOfString = function(e, t, o, n) {
                void 0 === o && (o = !0), void 0 === n && (n = !1), e = h.trim(e.toLowerCase().replace(u.SPACE_REG_EXP, " ")), t = t.toLowerCase();
                for (var i = o ? 0 : t.length - 1, r = o ? 0 : e.length - 1, a = null, s = o ? 1 : -1, l = [], c = 0; void 0 !== t[i]; i += s) {
                    var d = e[r] === t[i];
                    if (d || null !== a && u.SPACE_REG_EXP.test(t[i]) ? (null !== a && o || (a = i), l.push(t[i]), d && (c += 1, r += s)) : (a = null, c = l.length = 0, r = o ? 0 : e.length - 1), c === e.length) return !n || a
                }
                return n ? null !== a && a : !!l.length && (o ? l.join("") : l.reverse().join(""))
            }, f.prototype.boundAlreadyWas = function(t, e) {
                return e.some(function(e) {
                    return e.startContainer === t.startContainer && e.endContainer === t.endContainer && e.startOffset === t.startOffset && e.endOffset === t.endOffset
                }, !1)
            }, f.prototype.tryScrollToElement = function(e) {
                var t = m.Dom.closest(e, function(e) {
                    return e && e.nodeType === Node.ELEMENT_NODE
                }, this.jodit.editor);
                t || (t = m.Dom.prev(e, function(e) {
                    return e && e.nodeType === Node.ELEMENT_NODE
                }, this.jodit.editor)), t && t !== this.jodit.editor && t.scrollIntoView()
            }, f
        }(m.Component);
        t.search = s
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0),
            a = o(4),
            s = o(1),
            l = o(2);
        s.Config.prototype.toolbarSticky = !0, s.Config.prototype.toolbarDisableStickyForMobile = !0, s.Config.prototype.toolbarStickyOffset = 0;
        var c = function(e) {
            function t(n) {
                var i = e.call(this, n) || this;
                return i.isToolbarSticked = !1, i.createDummy = function(e) {
                    i.dummyBox || (i.dummyBox = i.jodit.ownerDocument.createElement("div"), i.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), i.jodit.container.insertBefore(i.dummyBox, e))
                }, i.addSticky = function(e) {
                    i.isToolbarSticked || (i.createDummy(e), i.jodit.container.classList.add("jodit_sticky"), i.isToolbarSticked = !0), r.css(e, {
                        top: i.jodit.options.toolbarStickyOffset,
                        width: i.jodit.container.offsetWidth
                    }), r.css(i.dummyBox, {
                        height: e.offsetHeight
                    })
                }, i.removeSticky = function(e) {
                    i.isToolbarSticked && (r.css(e, {
                        width: "",
                        top: ""
                    }), i.jodit.container.classList.remove("jodit_sticky"), i.isToolbarSticked = !1)
                }, n.events.on("afterInit", function() {
                    n.events.on(n.ownerWindow, "scroll wheel mousewheel resize", function() {
                        var e = n.ownerWindow.pageYOffset || n.ownerDocument.documentElement && n.ownerDocument.documentElement.scrollTop || 0,
                            t = r.offset(n.container, n, n.ownerDocument, !0),
                            o = n.getMode() === l.MODE_WYSIWYG && t.top < e + n.options.toolbarStickyOffset && e + n.options.toolbarStickyOffset < t.top + t.height && !(n.options.toolbarDisableStickyForMobile && i.isMobile());
                        n.options.toolbarSticky && n.options.toolbar && (o ? i.addSticky(n.toolbar.container) : i.removeSticky(n.toolbar.container)), n.events.fire("toggleSticky", o)
                    })
                }), i
            }
            return i(t, e), t.prototype.isMobile = function() {
                return this.jodit && this.jodit.options && this.jodit.container && this.jodit.container.offsetWidth <= this.jodit.options.sizeSM
            }, t
        }(a.Component);
        t.sticky = c
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = o(9),
            s = o(0),
            l = o(2);
        r.Config.prototype.showCharsCounter = !0, r.Config.prototype.showWordsCounter = !0;
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.calc = s.throttle(function() {
                    var e = t.jodit.getEditorText();
                    t.jodit.options.showCharsCounter && (t.charCounter.innerText = t.jodit.i18n("Chars: %d", e.replace(l.SPACE_REG_EXP, "").length)), t.jodit.options.showWordsCounter && (t.wordCounter.innerText = t.jodit.i18n("Words: %d", e.replace(l.INVISIBLE_SPACE_REG_EXP, "").split(l.SPACE_REG_EXP).filter(function(e) {
                        return e.length
                    }).length))
                }, t.jodit.defaultTimeout), t
            }
            return i(t, e), t.prototype.afterInit = function() {
                this.jodit.options.showCharsCounter && (this.charCounter = this.jodit.ownerDocument.createElement("span"), this.jodit.statusbar.append(this.charCounter, !0)), this.jodit.options.showWordsCounter && (this.wordCounter = this.jodit.ownerDocument.createElement("span"), this.jodit.statusbar.append(this.wordCounter, !0)), this.jodit.events.on("change", this.calc), this.calc()
            }, t
        }(a.Plugin);
        t.stat = c
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(e) {
                    for (var t, o = 1, n = arguments.length; o < n; o++)
                        for (var i in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(1),
            s = o(9),
            l = o(0),
            c = o(3),
            d = o(2),
            u = o(14),
            p = o(21);
        a.Config.prototype.controls.selectall = {
            icon: "select-all",
            command: "selectall",
            tooltip: "Select all"
        }, a.Config.prototype.showXPathInStatusbar = !0;
        var f = function(e) {
            function t() {
                var a = null !== e && e.apply(this, arguments) || this;
                return a.onContext = function(e, t) {
                    return a.menu || (a.menu = new p.ContextMenu(a.jodit)), a.menu.show(t.clientX, t.clientY, [{
                        icon: "bin",
                        title: e === a.jodit.editor ? "Clear" : "Remove",
                        exec: function() {
                            e !== a.jodit.editor ? e.parentNode && e.parentNode.removeChild(e) : a.jodit.value = "", a.jodit.setEditorValue()
                        }
                    }, {
                        icon: "select-all",
                        title: "Select",
                        exec: function() {
                            a.jodit.selection.select(e)
                        }
                    }]), !1
                }, a.onSelectPath = function(e, t) {
                    a.jodit.selection.focus();
                    var o = t.target.getAttribute("data-path") || "/";
                    if ("/" === o) return a.jodit.execCommand("selectall"), !1;
                    try {
                        var n = a.jodit.editorDocument.evaluate(o, a.jodit.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                        if (n) return a.jodit.selection.select(n), !1
                    } catch (e) {}
                    return a.jodit.selection.select(e), !1
                }, a.tpl = function(e, t, o, n) {
                    var i = l.dom('<li><a role="button" data-path="' + t + '" href="javascript:void(0)" title="' + n + '" tabindex="-1">' + o + "</a></li>", a.jodit.ownerDocument),
                        r = i.firstChild;
                    return a.jodit.events.on(r, "click", a.onSelectPath.bind(a, e)).on(r, "contextmenu", a.onContext.bind(a, e)), i
                }, a.appendSelectAll = function() {
                    var e = new u.ToolbarButton(a.jodit, r({
                        name: "selectall"
                    }, a.jodit.options.controls.selectall, {
                        tooltip: ""
                    }));
                    a.container.insertBefore(e.container, a.container.firstChild)
                }, a.calcPathImd = function() {
                    var e = a.jodit.selection.current();
                    a.container.innerHTML = d.INVISIBLE_SPACE, e && c.Dom.up(e, function(e) {
                        if (a.jodit.editor !== e && e.nodeType !== Node.TEXT_NODE) {
                            var t = e.nodeName.toLowerCase(),
                                o = l.getXPathByElement(e, a.jodit.editor).replace(/^\//, ""),
                                n = a.tpl(e, o, t, a.jodit.i18n("Select %s", t));
                            a.container.insertBefore(n, a.container.firstChild)
                        }
                    }, a.jodit.editor), a.appendSelectAll()
                }, a.calcPath = l.debounce(a.calcPathImd, 2 * a.jodit.defaultTimeout), a
            }
            return i(t, e), t.prototype.afterInit = function() {
                var e = this;
                this.jodit.options.showXPathInStatusbar && (this.container = this.jodit.ownerDocument.createElement("ul"), this.container.classList.add("jodit_xpath"), this.jodit.statusbar.append(this.container), this.jodit.events.on("mouseup change keydown changeSelection", this.calcPath).on("afterSetMode afterInit", function() {
                    e.jodit.getRealMode() === d.MODE_WYSIWYG ? e.calcPath() : (e.container.innerHTML = d.INVISIBLE_SPACE, e.appendSelectAll())
                }), this.calcPath())
            }, t
        }(s.Plugin);
        t.xpath = f
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(9),
            a = o(1),
            s = o(0);
        a.Config.prototype.draggableTags = ["img", "a", "jodit-media", "jodit"];
        var l = function(e) {
            function t() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.dragList = [], n.isCopyMode = !1, n.draggable = null, n.wasMoved = !1, n.timeout = 0, n.onDragStart = function(t) {
                    var e = t.target,
                        o = null;
                    if (n.dragList.length) {
                        for (; n.dragList.includes(e.nodeName.toLowerCase()) && (!o || e.firstChild === o && e.lastChild === o) && (o = e), (e = e.parentNode) && e !== n.jodit.editor;);
                        o && (n.isCopyMode = s.ctrlKey(t), n.onDragEnd(), n.timeout = s.setTimeout(function(e) {
                            n.draggable = e.cloneNode(!0), s.dataBind(n.draggable, "target", e), s.css(n.draggable, {
                                "z-index": 1e14,
                                "pointer-events": "none",
                                position: "fixed",
                                display: "inlin-block",
                                left: t.clientX,
                                top: t.clientY,
                                width: e.offsetWidth,
                                height: e.offsetHeight
                            })
                        }, n.jodit.defaultTimeout, o), t.preventDefault())
                    }
                }, n.onDrag = s.throttle(function(e) {
                    n.draggable && (n.wasMoved = !0, n.jodit.events.fire("hidePopup hideResizer"), n.draggable.parentNode || n.jodit.ownerDocument.body.appendChild(n.draggable), s.css(n.draggable, {
                        left: e.clientX + 20,
                        top: e.clientY + 20
                    }), n.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY))
                }, n.jodit.defaultTimeout), n.onDragEnd = function(e) {
                    window.clearTimeout(n.timeout), n.draggable && (n.draggable.parentNode && n.draggable.parentNode.removeChild(n.draggable), n.draggable = null, n.wasMoved = !1)
                }, n.onDrop = function(e) {
                    if (n.draggable && n.wasMoved) {
                        var t = s.dataBind(n.draggable, "target");
                        n.onDragEnd(), n.isCopyMode && (t = t.cloneNode(!0)), n.jodit.selection.insertNode(t, !0, !1), "IMG" === t.nodeName && n.jodit.events && n.jodit.events.fire("afterInsertImage", t), n.jodit.events.fire("synchro")
                    } else n.onDragEnd()
                }, n
            }
            return i(t, e), t.prototype.afterInit = function() {
                this.dragList = this.jodit.options.draggableTags ? s.splitArray(this.jodit.options.draggableTags).filter(function(e) {
                    return e
                }).map(function(e) {
                    return e.toLowerCase()
                }) : [], this.dragList.length && this.jodit.events.on(this.jodit.editor, "mousemove touchmove", this.onDrag).on(this.jodit.editor, "mousedown touchstart dragstart", this.onDragStart).on("mouseup touchend", this.onDrop).on(window, "mouseup touchend", this.onDragEnd)
            }, t.prototype.beforeDestruct = function() {
                this.onDragEnd()
            }, t
        }(r.Plugin);
        t.DragAndDropElement = l
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(9),
            l = o(0),
            a = o(2),
            c = o(16),
            s = function(e) {
                function t() {
                    var s = null !== e && e.apply(this, arguments) || this;
                    return s.isFragmentFromEditor = !1, s.isCopyMode = !1, s.startDragPoint = {
                        x: 0,
                        y: 0
                    }, s.draggable = null, s.bufferRange = null, s.onDragEnd = function() {
                        s.draggable && (s.draggable.parentNode && s.draggable.parentNode.removeChild(s.draggable), s.draggable = null), s.isCopyMode = !1
                    }, s.onDrag = function(e) {
                        s.draggable && (s.draggable.parentNode || s.jodit.ownerDocument.body.appendChild(s.draggable), s.jodit.events.fire("hidePopup"), l.css(s.draggable, {
                            left: e.clientX + 20,
                            top: e.clientY + 20
                        }), s.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY), e.preventDefault(), e.stopPropagation())
                    }, s.onDrop = function(e) {
                        if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) {
                            if (!s.isFragmentFromEditor && !s.draggable) return s.jodit.events.fire("paste", e), e.preventDefault(), e.stopPropagation(), !1;
                            var t = s.jodit.editorWindow.getSelection(),
                                o = s.bufferRange || (t.rangeCount ? t.getRangeAt(0) : null),
                                n = null;
                            if (!s.draggable && o) n = s.isCopyMode ? o.cloneContents() : o.extractContents();
                            else if (s.draggable)
                                if (s.isCopyMode) {
                                    var i = "1" === s.draggable.getAttribute("data-is-file") ? ["a", "href"] : ["img", "src"],
                                        r = i[0],
                                        a = i[1];
                                    (n = s.jodit.editorDocument.createElement(r)).setAttribute(a, s.draggable.getAttribute("data-src") || s.draggable.getAttribute("src") || ""), "a" === r && (n.innerText = n.getAttribute(a) || "")
                                } else n = l.dataBind(s.draggable, "target");
                            else s.getText(e) && (n = l.dom(s.getText(e), s.jodit.editorDocument));
                            t.removeAllRanges(), s.jodit.selection.insertCursorAtPoint(e.clientX, e.clientY), n && (s.jodit.selection.insertNode(n, !1, !1), o && n.firstChild && n.lastChild && (o.setStartBefore(n.firstChild), o.setEndAfter(n.lastChild), s.jodit.selection.selectRange(o), s.jodit.events.fire("synchro")), "IMG" === n.nodeName && s.jodit.events && s.jodit.events.fire("afterInsertImage", n)), e.preventDefault(), e.stopPropagation()
                        }
                        s.isFragmentFromEditor = !1
                    }, s.onDragStart = function(e) {
                        var t = e.target;
                        if (s.onDragEnd(), s.isFragmentFromEditor = c.Dom.isOrContains(s.jodit.editor, t, !0), s.isCopyMode = !s.isFragmentFromEditor || l.ctrlKey(e), s.isFragmentFromEditor) {
                            var o = s.jodit.editorWindow.getSelection(),
                                n = o.rangeCount ? o.getRangeAt(0) : null;
                            n && (s.bufferRange = n.cloneRange())
                        } else s.bufferRange = null;
                        s.startDragPoint.x = e.clientX, s.startDragPoint.y = e.clientY, t.nodeType === Node.ELEMENT_NODE && t.matches(".jodit_filebrowser_files_item") && (t = t.querySelector("img")), "IMG" === t.nodeName && (s.draggable = t.cloneNode(!0), l.dataBind(s.draggable, "target", t), l.css(s.draggable, {
                            "z-index": 1e14,
                            "pointer-events": "none",
                            position: "fixed",
                            display: "inlin-block",
                            left: s.startDragPoint.x,
                            top: s.startDragPoint.y,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }))
                    }, s.getDataTransfer = function(e) {
                        return e.dataTransfer || new DataTransfer
                    }, s.getText = function(e) {
                        var t = s.getDataTransfer(e);
                        return t.getData(a.TEXT_HTML) || t.getData(a.TEXT_PLAIN)
                    }, s
                }
                return i(t, e), t.prototype.afterInit = function() {
                    this.jodit.events.on(window, "dragover", this.onDrag).on([window, this.jodit.editorDocument, this.jodit.editor], "dragstart", this.onDragStart).on("drop", this.onDrop).on(window, "dragend drop mouseup", this.onDragEnd)
                }, t.prototype.beforeDestruct = function() {
                    this.onDragEnd()
                }, t
            }(r.Plugin);
        t.DragAndDrop = s
    }, function(e, t, o) {
        "use strict";
        var n, i = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                })(e, t)
        }, function(e, t) {
            function o() {
                this.constructor = e
            }
            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(9),
            a = o(7),
            s = o(2),
            l = o(0),
            c = function(e) {
                function t() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.currentIndex = 0, n.paste = function() {
                        if (n.jodit.selection.focus(), n.jodit.selection.insertHTML(n.list[n.currentIndex]), 0 !== n.currentIndex) {
                            var e = n.list[0];
                            n.list[0] = n.list[n.currentIndex], n.list[n.currentIndex] = e
                        }
                        n.dialog.close(), n.jodit.setEditorValue()
                    }, n.onKeyDown = function(e) {
                        var t = n.currentIndex; - 1 != [s.KEY_UP, s.KEY_DOWN, s.KEY_ENTER].indexOf(e.which) && (e.which === s.KEY_UP && (0 === t ? t = n.list.length - 1 : t -= 1), e.which === s.KEY_DOWN && (t === n.list.length - 1 ? t = 0 : t += 1), e.which !== s.KEY_ENTER ? (t !== n.currentIndex && n.selectIndex(t), e.stopImmediatePropagation(), e.preventDefault()) : n.paste())
                    }, n.selectIndex = function(o) {
                        [].slice.call(n.listBox.childNodes).forEach(function(e, t) {
                            e.classList.remove("jodit_active"), o === t && (e.classList.add("jodit_active"), n.previewBox.innerHTML = n.list[o], e.focus())
                        }), n.currentIndex = o
                    }, n.showDialog = function() {
                        n.list.length < 2 || (n.dialog || n.createDialog(), n.listBox.innerHTML = "", n.previewBox.innerHTML = "", n.list.forEach(function(e, t) {
                            var o = n.jodit.ownerDocument.createElement("a");
                            o.innerText = t + 1 + ". " + e.replace(s.SPACE_REG_EXP, ""), o.addEventListener("keydown", n.onKeyDown), o.setAttribute("href", "javascript:void(0)"), o.setAttribute("data-index", "" + t), o.setAttribute("tab-index", "-1"), n.listBox.appendChild(o)
                        }), n.dialog.open(), setTimeout(function() {
                            n.selectIndex(0)
                        }, 100))
                    }, n.list = [], n
                }
                return i(t, e), t.prototype.createDialog = function() {
                    var o = this;
                    this.dialog = new a.Dialog(this.jodit);
                    var e = l.dom('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + this.jodit.i18n("Paste") + "</span></a>", this.jodit.ownerDocument);
                    e.addEventListener("click", this.paste);
                    var t = l.dom('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit_button"><span>' + this.jodit.i18n("Cancel") + "</span></a>", this.jodit.ownerDocument);
                    t.addEventListener("click", this.dialog.close), this.container = this.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_paste_storage"), this.listBox = this.jodit.ownerDocument.createElement("div"), this.previewBox = this.jodit.ownerDocument.createElement("div"), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setTitle(this.jodit.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([e, t]), this.jodit.events.on(this.listBox, "click dblclick", function(e) {
                        var t = e.target;
                        return t && "A" === t.nodeName && t.hasAttribute("data-index") && o.selectIndex(parseInt(t.getAttribute("data-index") || "0", 10)), "dblclick" === e.type && o.paste(), !1
                    }, "a")
                }, t.prototype.afterInit = function() {
                    var t = this;
                    this.jodit.events.on("afterCopy", function(e) {
                        -1 != t.list.indexOf(e) && t.list.splice(t.list.indexOf(e), 1), t.list.unshift(e), 5 < t.list.length && (t.list.length = 5)
                    }), this.jodit.registerCommand("showPasteStorage", {
                        exec: this.showDialog,
                        hotkeys: ["ctrl+shift+v", "cmd+shift+v"]
                    })
                }, t
            }(r.Plugin);
        t.pasteStorage = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(84);
        t.de = n.default;
        var i = o(85);
        t.en = i.default;
        var r = o(86);
        t.fr = r.default;
        var a = o(87);
        t.ru = a.default;
        var s = o(88);
        t.ar = s.default;
        var l = o(89);
        t.zh_cn = l.default;
        var c = o(90);
        t.es = c.default;
        var d = o(91);
        t.nl = d.default;
        var u = o(92);
        t.hu = u.default;
        var p = o(93);
        t.pt_br = p.default
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Bitte geben Sie einen Text ein",
            Advanced: "Fortgeschritten",
            "About Jodit": "Ăœber Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Freie Nicht-kommerzielle Version",
            "GNU General Public License, version 2 or later": "GNU General Public License, Version 2 oder hĂ¶her",
            "Jodit User's Guide": "Das Jodit Benutzerhandbuch",
            "contains detailed help for using": "beinhaltet ausfĂ¼hrliche Informationen wie Sie den Editor verwenden kĂ¶nnen.",
            "For information about the license, please go to our website:": "FĂ¼r Lizenz-Informationen, besuchen Sie bitte unsere Webseite:",
            "Buy full version": "Vollversion kaufen",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.",
            Anchor: "Anker",
            "Open in new tab": "In neuer Registerkarte Ă¶ffnen",
            "Open editor in fullsize": "Editor in voller GrĂ¶ĂŸe Ă¶ffnen",
            "Clear Formatting": "Formatierung lĂ¶schen",
            "Fill color or set the text color": "FĂ¼llfarbe oder Textfarbe Ă¤ndern",
            Redo: "Wiederholen",
            Undo: "RĂ¼ckgĂ¤ngig machen",
            Bold: "Fett",
            Italic: "Kursiv",
            "Insert Unordered List": "Ungeordnete Liste einfĂ¼gen",
            "Insert Ordered List": "Sortierte Liste einfĂ¼gen",
            "Align Center": "Mittig ausrichten",
            "Align Justify": "Blocksatz",
            "Align Left": "Links ausrichten",
            "Align Right": "Rechts ausrichten",
            "Insert Horizontal Line": "Horizontale Linie einfĂ¼gen",
            "Insert Image": "Bild einfĂ¼gen",
            "Insert file": "Datei einfĂ¼gen",
            "Insert youtube/vimeo video": "Youtube/vimeo Video einfĂ¼gen",
            "Insert link": "Link einfĂ¼gen",
            "Font size": "SchriftgrĂ¶ĂŸe",
            "Font family": "Schriftfamilie",
            "Insert format block": "Formatblock einfĂ¼gen",
            Normal: "Normal",
            "Heading 1": "Ăœberschrift 1",
            "Heading 2": "Ăœberschrift 2",
            "Heading 3": "Ăœberschrift 3",
            "Heading 4": "Ăœberschrift 4",
            Quote: "Zitat",
            Code: "Code",
            Insert: "EinfĂ¼gen",
            "Insert table": "Tabelle einfĂ¼gen",
            "Decrease Indent": "Einzug verkleinern",
            "Increase Indent": "Einzug vergrĂ¶ĂŸern",
            "Select Special Character": "Sonderzeichen auswĂ¤hlen",
            "Insert Special Character": "Sonderzeichen einfĂ¼gen",
            "Paint format": "Format kopieren",
            "Change mode": "Ă„nderungsmodus",
            Margins: "RĂ¤nder",
            top: "Oben",
            right: "Rechts",
            bottom: "Unten",
            left: "Links",
            Styles: "CSS Stiel",
            Classes: "CSS Klassen",
            Align: "Ausrichten",
            Right: "Rechts",
            Center: "Zentriert",
            Left: "Links",
            "--Not Set--": "Keine",
            Src: "Pfad",
            Title: "Titel",
            Alternative: "Alternativer Text",
            Link: "Link",
            "Open link in new tab": "Link in neuem Tab Ă¶ffnen",
            Image: "Bild",
            file: "Datei",
            Advansed: "Erweitert",
            "Image properties": "Bildeigenschaften",
            Cancel: "Abbrechen",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Es scheint als dass Sie HTML-Text einfĂ¼gen mĂ¶chten",
            "Paste as HTML": "Als HTML einfĂ¼gen?",
            Keep: "Original speichern",
            Clean: "SĂ¤ubern",
            "Insert as Text": "Als Text einfĂ¼gen",
            "Word Paste Detected": "InWord formatierter Text erkannt",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfĂ¼gen, stammt aus einem Microsoft Word / Excel-Dokument. MĂ¶chten Sie das Format erhalten oder lĂ¶schen?",
            "Insert only Text": "Nur Text einfĂ¼gen",
            "File Browser": "Dateibrowser",
            "Error on load list": "Fehler beim Laden der Liste",
            "Error on load folders": "Fehler beim Laden der Ordner",
            "Are you sure?": "Sind Sie sicher?",
            "Enter Directory name": "Geben Sie den Verzeichnisnamen ein",
            "Create directory": "Verzeichnis erstellen",
            "type name": "Typname",
            "Drop image": "Bild hier hinziehen",
            "Drop file": "Datei lĂ¶schen",
            "or click": "oder hier klicken",
            "Alternative text": "Alternativtext",
            Browse: "AuswĂ¤hlen",
            Upload: "Hochladen",
            Background: "Hintergrund",
            Text: "Text",
            Top: "Oben",
            Middle: "Mittig",
            Bottom: "Unten",
            "Insert column before": "Spalte einfĂ¼gen vor",
            "Insert column after": "Spalte einfĂ¼gen nach",
            "Insert row above": "Zeile einfĂ¼gen oberhalb",
            "Insert row below": "Zeile unterhalb einfĂ¼gen",
            "Delete table": "Tabelle lĂ¶schen",
            "Delete row": "Zeile lĂ¶schen",
            "Delete column": "Spalte lĂ¶schen",
            "Empty cell": "Leere Zelle",
            Delete: "LĂ¶schen",
            "Strike through": "Durchschlagen",
            Underline: "Unterstreichen",
            Break: "Pause",
            "Search for": "Suche nach",
            "Replace with": "Ersetzen durch",
            Replace: "Ersetzen",
            Edit: "Bearbeiten",
            "Vertical align": "Vertikale Ausrichtung",
            "Horizontal align": "Horizontale Ausrichtung",
            Filter: "filter",
            "Sort by changed": "Sortieren nach geĂ¤ndert",
            "Sort by name": "Nach Name sortieren",
            "Sort by size": "Nach GrĂ¶ĂŸe sortiert",
            "Add folder": "Ordner hinzufĂ¼gen",
            "Split vertical": "Split vertikal",
            "Split horizontal": "Split horizontally",
            Merge: "Verschmelzen",
            "Add column": "Spalte hinzufĂ¼gen",
            "Add row": "Zeile hinzufĂ¼gen",
            Border: "Rand",
            "Embed code": "Code einbetten",
            Update: "Aktualisieren",
            superscript: "hochgestellt",
            subscript: "Index",
            "Cut selection": "Auswahl ausschneid",
            Paste: "EinfĂ¼gen",
            "Choose Content to Paste": "WĂ¤hlen Sie Inhalt zum EinfĂ¼gen",
            "Chars: %d": "Zeichen: %d",
            "Words: %d": "WĂ¶rter: %d",
            All: "WĂ¤hlen Sie Alle aus",
            "Select %s": "Markieren: %s",
            "Select all": "WĂ¤hlen Sie Alle aus",
            source: "HTML",
            bold: "Fett gedruckt",
            italic: "kursiv",
            brush: "BĂ¼rste",
            link: "VerknĂ¼pfung",
            undo: "rĂ¼ckgĂ¤ngig machen",
            redo: "wiederholen",
            table: "Tabelle",
            image: "Bild",
            eraser: "Radiergummi",
            paragraph: "Absatz",
            fontsize: "SchriftgrĂ¶ĂŸe",
            video: "Video",
            font: "Schriftart",
            about: "Ăœber",
            print: "drucken",
            symbol: "Symbol",
            underline: "unterstreichen",
            strikethrough: "durchgestrichen",
            indent: "Einzug",
            outdent: "Aussenseiter",
            fullsize: "VollgrĂ¶ĂŸe",
            shrink: "schrumpfen",
            copyformat: "Format kopierenÑ‚",
            hr: "die Linie",
            ul: "Liste von",
            ol: "Nummerierte Liste",
            cut: "Schnitt",
            selectall: "WĂ¤hlen Sie Alle aus",
            "Open link": "Link Ă¶ffnen",
            "Edit link": "Link bearbeiten",
            "No follow": "Nofollow-Attribut",
            Unlink: "Link entfernen",
            " URL": "URL",
            Reset: "Wiederherstellen",
            Save: "Speichern",
            "Save as ...": "Speichern als",
            Resize: "Ă„ndern Sie die GrĂ¶ĂŸe",
            Crop: "GrĂ¶ĂŸe anpassen",
            Width: "Breite",
            Height: "HĂ¶he",
            "Keep Aspect Ratio": "Halten Sie Proportionen",
            Yes: "Ja",
            No: "Nein",
            Remove: "Entfernen",
            Select: "Markieren",
            "You can only edit your own images. Download this image on the host?": "Sie kĂ¶nnen nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?",
            "The image has been successfully uploaded to the host!": "Das Bild wurde erfolgreich auf den Server hochgeladen!null"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Start writing..."
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Ecrivez ici",
            "About Jodit": "A propos de Jodit",
            "Jodit Editor": "Editeur Jodit",
            "Free Non-commercial Version": "Version gratuite, non commerciale",
            "GNU General Public License, version 2 or later": "GNU General Public License, version 2 ou ultĂ©rieure",
            "Jodit User's Guide": "Guide de l'utilisateur",
            "contains detailed help for using": "Aide dĂ©taillĂ©e Ă  l'utilisation",
            "For information about the license, please go to our website:": "Consulter la licence sur notre site web:",
            "Buy full version": "Acheter la version complĂ¨te",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Tous droits rĂ©servĂ©s.",
            Anchor: "Ancre",
            "Open in new tab": "Ouvrir dans un nouvel onglet",
            "Open editor in fullsize": "Ouvrir l'Ă©diteur en pleine page",
            "Clear Formatting": "Supprimer le formattage",
            "Fill color or set the text color": "Modifier la couleur du fond ou du texte",
            Redo: "Refaire",
            Undo: "DĂ©faire",
            Bold: "Gras",
            Italic: "Italique",
            "Insert Unordered List": "Liste non ordonnĂ©e",
            "Insert Ordered List": "Liste ordonnĂ©e",
            "Align Center": "Centrer",
            "Align Justify": "Justifier",
            "Align Left": "Aligner Ă  gauche ",
            "Align Right": "Aligner Ă  droite",
            "Insert Horizontal Line": "InsĂ©rer une ligne horizontale",
            "Insert Image": "InsĂ©rer une image",
            "Insert file": "InsĂ©rer un fichier",
            "Insert youtube/vimeo video": "InsĂ©rer une vidĂ©o",
            "Insert link": "InsĂ©rer un lien",
            "Font size": "Taille des caractĂ¨res",
            "Font family": "Famille des caractĂ¨res",
            "Insert format block": "Bloc formattĂ©",
            Normal: "Normal",
            "Heading 1": "Titre 1",
            "Heading 2": "Titre 2",
            "Heading 3": "Titre 3",
            "Heading 4": "Titre 4",
            Quote: "Citation",
            Code: "Code",
            Insert: "InsĂ©rer",
            "Insert table": "InsĂ©rer un tableau",
            "Decrease Indent": "Diminuer le retrait",
            "Increase Indent": "Retrait plus",
            "Select Special Character": "SĂ©lectionnez un caractĂ¨re spĂ©cial",
            "Insert Special Character": "InsĂ©rer un caractĂ¨re spĂ©cial",
            "Paint format": "Cloner le format",
            "Change mode": "Mode wysiwyg <-> code html",
            Margins: "Marges",
            top: "haut",
            right: "droite",
            bottom: "Bas",
            left: "gauche",
            Styles: "Styles",
            Classes: "Classes",
            Align: "Alignement",
            Right: "Droite",
            Center: "Centre",
            Left: "Gauche",
            "--Not Set--": "--Non disponible--",
            Src: "Source",
            Title: "Titre",
            Alternative: "Alternative",
            Filter: "Filtre",
            Link: "Lien",
            "Open link in new tab": "Ouvrir le lien dans un nouvel onglet",
            Image: "Image",
            file: "fichier",
            Advanced: "AvancĂ©",
            "Image properties": "PropriĂ©tĂ©s de l'image",
            Cancel: "Effacer",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?",
            "Paste as HTML": "Coller en HTML?",
            Keep: "Sauvegarder l'original",
            Clean: "Nettoyer",
            "Insert as Text": "Coller en tant que texte",
            "Word Paste Detected": "C'est peut-Ăªtre un fragment de Word ou Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous insĂ©rez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?",
            "Insert only Text": "Coller le texte seulement",
            "File Browser": "Explorateur de fichiers",
            "Error on load list": "Erreur de liste de chargement",
            "Error on load folders": "Erreur de dossier de chargement",
            "Are you sure?": "Etes-vous sĂ»rs ?",
            "Enter Directory name": "Entrer le non de dossier",
            "Create directory": "CrĂ©er un dossier",
            "type name": "type de fichier",
            "Drop image": "Coller une image",
            "Drop file": "DĂ©poser un fichier",
            "or click": "ou cliquer",
            "Alternative text": "Texte de remplacemement",
            Browse: "Chercher",
            Upload: "Charger",
            Background: "ArriĂ¨re-plan",
            Text: "Texte",
            Top: "Haut",
            Middle: "Milieu",
            Bottom: "Bas",
            "Insert column before": "InsĂ©rer une colonne avant",
            "Insert column after": "InsĂ©rer une colonne aprĂ¨s",
            "Insert row above": "InsĂ©rer une ligne en dessus",
            "Insert row below": "InsĂ©rer une ligne en dessous",
            "Delete table": "Supprimer le tableau",
            "Delete row": "Supprimer la ligne",
            "Delete column": "Supprimer la colonne",
            "Empty cell": "Vider la cellule",
            "Chars: %d": "Symboles: %d",
            "Words: %d": "Mots: %d",
            "Strike through": "Frapper Ă  travers",
            Underline: "Souligner",
            superscript: "exposant",
            subscript: "indice",
            "Cut selection": "Couper la sĂ©lection",
            "Select all": "Tout sĂ©lectionner",
            Break: "Pause",
            "Search for": "Rechercher",
            "Replace with": "Remplacer par",
            Replace: "Remplacer",
            Paste: "Coller",
            "Choose Content to Paste": "Choisissez le contenu Ă  coller",
            source: "la source",
            bold: "graisseux",
            italic: "italique",
            brush: "verser",
            link: "lien",
            undo: "abolir",
            redo: "prĂªt",
            table: "graphique",
            image: "Image",
            eraser: "la gommen",
            paragraph: "clause",
            fontsize: "taille de police",
            video: "Video",
            font: "police",
            about: "Ă  propos de l'Ă©diteur",
            print: "impression",
            symbol: "caractĂ¨re",
            underline: "soulignĂ©",
            strikethrough: "barrĂ©",
            indent: "indentation",
            outdent: "indiffĂ©rent",
            fullsize: "taille rĂ©elle",
            shrink: "taille conventionnelle",
            copyformat: "Format de copie",
            hr: "la ligne",
            ul: "Liste des",
            ol: "Liste numĂ©rotĂ©e",
            cut: "Couper",
            selectall: "SĂ©lectionner tout",
            "Open link": "Ouvrir le lien",
            "Edit link": "Modifier le lien",
            "No follow": "Attribut Nofollow",
            Unlink: "Supprimer le lien",
            " URL": "URL",
            Reset: "Restaurer",
            Save: "Sauvegarder",
            "Save as ...": "Enregistrer sous",
            Resize: "Changer la taille",
            Crop: "Taille de garniture",
            Width: "Largeur",
            Height: "Hauteur",
            "Keep Aspect Ratio": "Garder les proportions",
            Yes: "Oui",
            No: "Non",
            Remove: "Supprimer",
            Select: "Mettre en Ă©vidence",
            "Select %s": "Mettre en Ă©vidence: %s",
            Update: "Mettre Ă  jour",
            "Vertical align": "Alignement vertical",
            Merge: "aller",
            "Add column": "Ajouter une colonne",
            "Add row": "Ajouter une rangĂ©e",
            Delete: "Effacer",
            "Horizontal align": "Alignement horizontal",
            "Sort by changed": "Trier par modifiĂ©",
            "Sort by name": "Trier par nom",
            "Sort by size": "Classer par taille",
            "Add folder": "Ajouter le dossier",
            "You can only edit your own images. Download this image on the host?": "Vous ne pouvez Ă©diter que vos propres images. TĂ©lĂ©chargez cette image sur l'hĂ´te?",
            "The image has been successfully uploaded to the host!": "L'image a Ă©tĂ© tĂ©lĂ©chargĂ©e avec succĂ¨s sur le serveur!null"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "ĐĐ°Đ¿Đ¸ÑˆĐ¸Ñ‚Đµ Ñ‡Ñ‚Đ¾-Đ»Đ¸Đ±Đ¾",
            "About Jodit": "Đ Jodit",
            "Jodit Editor": "Đ ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€ Jodit",
            "Free Non-commercial Version": "Đ’ĐµÑ€ÑĐ¸Ñ Đ´Đ»Ñ Đ½Đµ ĐºĐ¾Đ¼Đ¼ĐµÑ€Ñ‡ĐµÑĐºĐ¾Đ³Đ¾ Đ¸ÑĐ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ",
            "GNU General Public License, version 2 or later": "Đ¡Ñ‚Đ°Đ½Đ´Đ°Ñ€Ñ‚Đ½Đ°Ñ Đ¾Đ±Ñ‰ĐµÑÑ‚Đ²ĐµĐ½Đ½Đ°Ñ Đ»Đ¸Ñ†ĐµĐ½Đ·Đ¸Ñ GNU (GPL), Đ²ĐµÑ€ÑĐ¸Ñ 2 Đ¸Đ»Đ¸ Đ²Ñ‹ÑˆĐµ",
            "Jodit User's Guide": "Jodit Đ ÑƒĐºĐ¾Đ²Đ¾Đ´ÑÑ‚Đ²Đ¾ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ",
            "contains detailed help for using": "ÑĐ¾Đ´ĐµÑ€Đ¶Đ¸Ñ‚ Đ´ĐµÑ‚Đ°Đ»ÑŒĐ½ÑƒÑ Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ Đ¿Đ¾ Đ¸ÑĐ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ",
            "For information about the license, please go to our website:": "Đ”Đ»Ñ Đ¿Đ¾Đ»ÑƒÑ‡ĐµĐ½Đ¸Ñ ÑĐ²ĐµĐ´ĐµĐ½Đ¸Đ¹ Đ¾ Đ»Đ¸Ñ†ĐµĐ½Đ·Đ¸Đ¸ , Đ¿Đ¾Đ¶Đ°Đ»ÑƒĐ¹ÑÑ‚Đ°, Đ¿ĐµÑ€ĐµĐ¹Đ´Đ¸Ñ‚Đµ Đ½Đ° Đ½Đ°Ñˆ ÑĐ°Đ¹Ñ‚:",
            "Buy full version": "ĐÑƒĐ¿Đ¸Ñ‚ÑŒ Đ¿Đ¾Đ»Đ½ÑƒÑ Đ²ĐµÑ€ÑĐ¸Ñ",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "ĐĐ²Ñ‚Đ¾Ñ€ÑĐºĐ¸Đµ Đ¿Ñ€Đ°Đ²Đ° Â© XDSoft.net - Đ§ÑƒĐ¿ÑƒÑ€Đ½Đ¾Đ² Đ’Đ°Đ»ĐµÑ€Đ¸Đ¹. Đ’ÑĐµ Đ¿Ñ€Đ°Đ²Đ° Đ·Đ°Ñ‰Đ¸Ñ‰ĐµĐ½Ñ‹.",
            Anchor: "ĐĐ½ĐºĐ¾Ñ€",
            "Open in new tab": "ĐÑ‚ĐºÑ€Ñ‹Đ²Đ°Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ Đ² Đ½Đ¾Đ²Đ¾Đ¹ Đ²ĐºĐ»Đ°Đ´ĐºĐµ",
            "Open editor in fullsize": "ĐÑ‚ĐºÑ€Ñ‹Ñ‚ÑŒ Ñ€ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€ Đ² Đ¿Đ¾Đ»Đ½Đ¾Đ¼ Ñ€Đ°Đ·Đ¼ĐµÑ€Đµ",
            "Clear Formatting": "ĐÑ‡Đ¸ÑÑ‚Đ¸Ñ‚ÑŒ Ñ„Đ¾Ñ€Đ¼Đ°Ñ‚Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ",
            "Fill color or set the text color": "Đ¦Đ²ĐµÑ‚ Đ·Đ°Đ»Đ¸Đ²ĐºĐ¸ Đ¸Đ»Đ¸ Ñ†Đ²ĐµÑ‚ Ñ‚ĐµĐºÑÑ‚Đ°",
            Redo: "ĐŸĐ¾Đ²Ñ‚Đ¾Ñ€",
            Undo: "ĐÑ‚Đ¼ĐµĐ½Đ°",
            Bold: "Đ–Đ¸Ñ€Đ½Ñ‹Đ¹",
            Italic: "ĐĐ°ĐºĐ»Đ¾Đ½Đ½Ñ‹Đ¹",
            "Insert Unordered List": "Đ’ÑÑ‚Đ°Đ²ĐºĐ° Đ¼Đ°Ñ€ĐºĐ¸Ñ€Đ¾Đ²Đ°Đ½Đ½Đ¾Đ³Đ¾ ÑĐ¿Đ¸ÑĐºĐ°",
            "Insert Ordered List": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ½ÑƒĐ¼ĐµÑ€Đ¾Đ²Đ°Đ½Đ½Ñ‹Đ¹ ÑĐ¿Đ¸ÑĐ¾Đº",
            "Align Center": "Đ’Ñ‹Ñ€Đ¾Đ²Đ½ÑÑ‚ÑŒ Đ¿Đ¾ Ñ†ĐµĐ½Ñ‚Ñ€Ñƒ",
            "Align Justify": "Đ’Ñ‹Ñ€Đ¾Đ²Đ½ÑÑ‚ÑŒ Đ¿Đ¾ ÑˆĐ¸Ñ€Đ¸Đ½Đµ",
            "Align Left": "Đ’Ñ‹Ñ€Đ¾Đ²Đ½ÑÑ‚ÑŒ Đ¿Đ¾ Đ»ĐµĐ²Đ¾Đ¼Ñƒ ĐºÑ€Đ°Ñ",
            "Align Right": "Đ’Ñ‹Ñ€Đ¾Đ²Đ½ÑÑ‚ÑŒ Đ¿Đ¾ Đ¿Ñ€Đ°Đ²Đ¾Đ¼Ñƒ ĐºÑ€Đ°Ñ",
            "Insert Horizontal Line": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ³Đ¾Ñ€Đ¸Đ·Đ¾Đ½Ñ‚Đ°Đ»ÑŒĐ½ÑƒÑ Đ»Đ¸Đ½Đ¸Ñ",
            "Insert Image": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ",
            "Insert file": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ„Đ°Đ¹Đ»",
            "Insert youtube/vimeo video": "Đ’ÑÑ‚Đ°Đ²ÑŒÑ‚Đµ Đ²Đ¸Đ´ĐµĐ¾",
            "Insert link": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ",
            "Font size": "Đ Đ°Đ·Đ¼ĐµÑ€ ÑˆÑ€Đ¸Ñ„Ñ‚Đ°",
            "Font family": "Đ¨Ñ€Đ¸Ñ„Ñ‚",
            "Insert format block": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ±Đ»Đ¾Ñ‡Đ½Ñ‹Đ¹ ÑĐ»ĐµĐ¼ĐµĐ½Ñ‚",
            Normal: "ĐĐ¾Ñ€Đ¼Đ°Đ»ÑŒĐ½Ñ‹Đ¹ Ñ‚ĐµĐºÑÑ‚",
            "Heading 1": "Đ—Đ°Đ³Đ¾Đ»Đ¾Đ²Đ¾Đº 1",
            "Heading 2": "Đ—Đ°Đ³Đ¾Đ»Đ¾Đ²Đ¾Đº 2",
            "Heading 3": "Đ—Đ°Đ³Đ¾Đ»Đ¾Đ²Đ¾Đº 3",
            "Heading 4": "Đ—Đ°Đ³Đ¾Đ»Đ¾Đ²Đ¾Đº 4",
            Quote: "Đ¦Đ¸Ñ‚Đ°Ñ‚Đ°",
            Code: "ĐĐ¾Đ´",
            Insert: "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ",
            "Insert table": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ‚Đ°Đ±Đ»Đ¸Ñ†Ñƒ",
            "Decrease Indent": "Đ£Đ¼ĐµĐ½ÑŒÑˆĐ¸Ñ‚ÑŒ Đ¾Ñ‚ÑÑ‚ÑƒĐ¿",
            "Increase Indent": "Đ£Đ²ĐµĐ»Đ¸Ñ‡Đ¸Ñ‚ÑŒ Đ¾Ñ‚ÑÑ‚ÑƒĐ¿",
            "Select Special Character": "Đ’Ñ‹Đ±ĐµÑ€Đ¸Ñ‚Đµ ÑĐ¿ĐµÑ†Đ¸Đ°Đ»ÑŒĐ½Ñ‹Đ¹ ÑĐ¸Đ¼Đ²Đ¾Đ»",
            "Insert Special Character": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ÑĐ¿ĐµÑ†Đ¸Đ°Đ»ÑŒĐ½Ñ‹Đ¹ ÑĐ¸Đ¼Đ²Đ¾Đ»",
            "Paint format": "Đ¤Đ¾Ñ€Đ¼Đ°Ñ‚ ĐºÑ€Đ°ÑĐºĐ¸",
            "Change mode": "Đ˜ÑÑ‚Đ¾Ñ‡Đ½Đ¸Đº",
            Margins: "ĐÑ‚ÑÑ‚ÑƒĐ¿Ñ‹",
            top: "ÑĐ²ĐµÑ€Ñ…Ñƒ",
            right: "ÑĐ¿Ñ€Đ°Đ²Đ°",
            bottom: "ÑĐ½Đ¸Đ·Ñƒ",
            left: "ÑĐ»ĐµĐ²Đ°",
            Styles: "Đ¡Ñ‚Đ¸Đ»Đ¸",
            Classes: "ĐĐ»Đ°ÑÑÑ‹",
            Align: "Đ’Ñ‹Ñ€Đ°Đ²Đ½Đ¸Đ²Đ°Đ½Đ¸Đµ",
            Right: "ĐŸĐ¾ Đ¿Ñ€Đ°Đ²Đ¾Đ¼Ñƒ ĐºÑ€Đ°Ñ",
            Center: "ĐŸĐ¾ Ñ†ĐµĐ½Ñ‚Ñ€Ñƒ",
            Left: "ĐŸĐ¾ Đ»ĐµĐ²Đ¾Đ¼Ñƒ ĐºÑ€Đ°Ñ",
            "--Not Set--": "--Đ½Đµ ÑƒÑÑ‚Đ°Đ½Đ°Đ²Đ»Đ¸Đ²Đ°Ñ‚ÑŒ--",
            Src: "src",
            Title: "Đ—Đ°Đ³Đ¾Đ»Đ¾Đ²Đ¾Đº",
            Alternative: "ĐĐ»ÑŒÑ‚ĐµÑ€Đ½Đ°Ñ‚Đ¸Đ²Đ½Ñ‹Đ¹ Ñ‚ĐµĐºÑÑ‚ (alt)",
            Link: "Đ¡ÑÑ‹Đ»ĐºĐ°",
            "Open link in new tab": "ĐÑ‚ĐºÑ€Ñ‹Đ²Đ°Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ Đ² Đ½Đ¾Đ²Đ¾Đ¼ Đ¾ĐºĐ½Đµ",
            Image: "Đ˜Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ",
            file: "Đ¤Đ°Đ¹Đ»",
            Advanced: "Đ Đ°ÑÑˆĐ¸Ñ€ĐµĐ½Đ½Ñ‹Đµ",
            "Image properties": "Đ¡Đ²Đ¾Đ¹ÑÑ‚Đ²Đ° Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Ñ",
            Cancel: "ĐÑ‚Đ¼ĐµĐ½Đ°",
            Ok: "ĐĐº",
            "Your code is similar to HTML. Keep as HTML?": "Đ’Đ°Ñˆ Ñ‚ĐµĐºÑÑ‚, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đ¹ Đ²Ñ‹ Đ¿Ñ‹Ñ‚Đ°ĐµÑ‚ĐµÑÑŒ Đ²ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ¿Đ¾Ñ…Đ¾Đ¶ Đ½Đ° HTML. Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ĐµĐ³Đ¾ ĐºĐ°Đº HTML?",
            "Paste as HTML": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ĐºĐ°Đº HTML?",
            Keep: "Đ¡Đ¾Ñ…Ñ€Đ°Đ½Đ¸Ñ‚ÑŒ Đ¾Ñ€Đ¸Đ³Đ¸Đ½Đ°Đ»",
            Clean: "ĐŸĐ¾Ñ‡Đ¸ÑÑ‚Đ¸Ñ‚ÑŒ",
            "Insert as Text": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ĐºĐ°Đº Ñ‚ĐµĐºÑÑ‚",
            "Insert only Text": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ‚Đ¾Đ»ÑŒĐºĐ¾ Ñ‚ĐµĐºÑÑ‚",
            "Word Paste Detected": "Đ’Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾ ÑÑ‚Đ¾ Ñ„Ñ€Đ°Đ³Đ¼ĐµĐ½Ñ‚ Word Đ¸Đ»Đ¸ Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "ĐĐ¾Đ½Ñ‚ĐµĐ½Ñ‚ ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đ¹ Đ²Ñ‹ Đ²ÑÑ‚Đ°Đ²Đ»ÑĐµÑ‚Đµ Đ¿Đ¾ÑÑ‚ÑƒĐ¿Đ°ĐµÑ‚ Đ¸Đ· Đ´Đ¾ĐºÑƒĐ¼ĐµĐ½Ñ‚Đ° Microsoft Word / Excel. Đ’Ñ‹ Ñ…Đ¾Ñ‚Đ¸Ñ‚Đµ ÑĐ¾Ñ…Ñ€Đ°Đ½Đ¸Ñ‚ÑŒ Ñ„Đ¾Ñ€Đ¼Đ°Ñ‚ Đ¸Đ»Đ¸ Đ¾Ñ‡Đ¸ÑÑ‚Đ¸Ñ‚ÑŒ ĐµĐ³Đ¾?",
            "File Browser": "Đ‘Ñ€Đ°ÑƒĐ·ĐµÑ€ Ñ„Đ°Đ¹Đ»Đ¾Đ²",
            "Error on load list": "ĐÑˆĐ¸Đ±ĐºĐ° Đ¿Ñ€Đ¸ Đ·Đ°Đ³Ñ€ÑƒĐ·ĐºĐµ ÑĐ¿Đ¸ÑĐºĐ° Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đ¹",
            "Error on load folders": "ĐÑˆĐ¸Đ±ĐºĐ° Đ¿Ñ€Đ¸ Đ·Đ°Đ³Ñ€ÑƒĐ·ĐºĐµ ÑĐ¿Đ¸ÑĐºĐ° Đ´Đ¸Ñ€ĐµĐºÑ‚Đ¾Ñ€Đ¸Đ¹",
            "Are you sure?": "Đ’Ñ‹ ÑƒĐ²ĐµÑ€ĐµĐ½Ñ‹?",
            "Enter Directory name": "Đ’Đ²ĐµĐ´Đ¸Ñ‚Đµ Đ½Đ°Đ·Đ²Đ°Đ½Đ¸Đµ Đ´Đ¸Ñ€ĐµĐºÑ‚Đ¾Ñ€Đ¸Đ¸",
            "Create directory": "Đ¡Đ¾Đ·Đ´Đ°Ñ‚ÑŒ Đ´Đ¸Ñ€ĐµĐºÑ‚Đ¾Ñ€Đ¸Ñ",
            "type name": "Đ²Đ²ĐµĐ´Đ¸Ñ‚Đµ Đ½Đ°Đ·Đ²Đ°Đ½Đ¸Đµ",
            "Drop image": "ĐŸĐµÑ€ĐµÑ‚Đ°Ñ‰Đ¸Ñ‚Đµ ÑÑĐ´Đ° Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ",
            "Drop file": "ĐŸĐµÑ€ĐµÑ‚Đ°Ñ‰Đ¸Ñ‚Đµ ÑÑĐ´Đ° Ñ„Đ°Đ¹Đ»",
            "or click": "Đ¸Đ»Đ¸ Đ½Đ°Đ¶Đ¼Đ¸Ñ‚Đµ",
            "Alternative text": "ĐĐ»ÑŒÑ‚ĐµÑ€Đ½Đ°Ñ‚Đ¸Đ²Đ½Ñ‹Đ¹ Ñ‚ĐµĐºÑÑ‚",
            Browse: "Đ¡ĐµÑ€Đ²ĐµÑ€",
            Upload: "Đ—Đ°Đ³Ñ€ÑƒĐ·ĐºĐ°",
            Background: "Đ¤Đ¾Đ½",
            Text: "Đ¢ĐµĐºÑÑ‚",
            Top: " Đ Đ²ĐµÑ€Ñ…Ñƒ",
            Middle: "ĐŸĐ¾ ÑĐµÑ€ĐµĐ´Đ¸Đ½Đµ",
            Bottom: "Đ Đ½Đ¸Đ·Ñƒ",
            "Insert column before": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ÑÑ‚Đ¾Đ»Đ±ĐµÑ† Đ´Đ¾",
            "Insert column after": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ ÑÑ‚Đ¾Đ»Đ±ĐµÑ† Đ¿Đ¾ÑĐ»Đµ",
            "Insert row above": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ€ÑĐ´ Đ²Ñ‹ÑˆĐµ",
            "Insert row below": "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ€ÑĐ´ Đ½Đ¸Đ¶Đµ",
            "Delete table": "Đ£Đ´Đ°Đ»Đ¸Ñ‚ÑŒ Ñ‚Đ°Đ±Đ»Đ¸Ñ†Ñƒ",
            "Delete row": "Đ£Đ´Đ°Đ»ÑÑ‚ÑŒ Ñ€ÑĐ´",
            "Delete column": "Đ£Đ´Đ°Đ»Đ¸Ñ‚ÑŒ ÑÑ‚Đ¾Đ»Đ±ĐµÑ†",
            "Empty cell": "ĐÑ‚Ñ‡Đ¸ÑÑ‚Đ¸Ñ‚ÑŒ ÑÑ‡ĐµĐ¹ĐºÑƒ",
            source: "HTML",
            bold: "Đ¶Đ¸Ñ€Đ½Ñ‹Đ¹",
            italic: "ĐºÑƒÑ€ÑĐ¸Đ²",
            brush: "Đ·Đ°Đ»Đ¸Đ²ĐºĐ°",
            link: "ÑÑÑ‹Đ»ĐºĐ°",
            undo: "Đ¾Ñ‚Đ¼ĐµĐ½Đ¸Ñ‚ÑŒ",
            redo: "Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Đ¸Ñ‚ÑŒ",
            table: "Ñ‚Đ°Đ±Đ»Đ¸Ñ†Đ°",
            image: "Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ",
            eraser: "Đ¾Ñ‡Đ¸ÑÑ‚Đ¸Ñ‚ÑŒ",
            paragraph: "Đ¿Đ°Ñ€Đ°Đ³Ñ€Đ°Ñ„",
            fontsize: "Ñ€Đ°Đ·Đ¼ĐµÑ€ ÑˆÑ€Đ¸Ñ„Ñ‚Đ°",
            video: "Đ²Đ¸Đ´ĐµĐ¾",
            font: "ÑˆÑ€Đ¸Ñ„Ñ‚",
            about: "Đ¾ Ñ€ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€Đµ",
            print: "Đ¿ĐµÑ‡Đ°Ñ‚ÑŒ",
            symbol: "ÑĐ¸Đ¼Đ²Đ¾Đ»",
            underline: "Đ¿Đ¾Đ´Ñ‡ĐµÑ€ĐºĐ½ÑƒÑ‚Ñ‹Đ¹",
            strikethrough: "Đ¿ĐµÑ€ĐµÑ‡ĐµÑ€ĐºĐ½ÑƒÑ‚Ñ‹Đ¹",
            indent: "Đ¾Ñ‚ÑÑ‚ÑƒĐ¿",
            outdent: "Đ²Ñ‹ÑÑ‚ÑƒĐ¿",
            fullsize: "Đ²Đ¾ Đ²ĐµÑÑŒ ÑĐºÑ€Đ°Đ½",
            shrink: "Đ¾Đ±Ñ‹Ñ‡Đ½Ñ‹Đ¹ Ñ€Đ°Đ·Đ¼ĐµÑ€",
            copyformat: "ĐĐ¾Đ¿Đ¸Ñ€Đ¾Đ²Đ°Ñ‚ÑŒ Ñ„Đ¾Ñ€Đ¼Đ°Ñ‚",
            hr: "Đ»Đ¸Đ½Đ¸Ñ",
            ul: "Đ¡Đ¿Đ¸ÑĐ¾Đº",
            ol: "ĐÑƒĐ¼ĐµÑ€Đ¾Đ²Đ°Đ½Đ½Ñ‹Đ¹ ÑĐ¿Đ¸ÑĐ¾Đº",
            cut: "Đ’Ñ‹Ñ€ĐµĐ·Đ°Ñ‚ÑŒ",
            selectall: "Đ’Ñ‹Đ´ĐµĐ»Đ¸Ñ‚ÑŒ Đ²ÑĐµ",
            "Embed code": "ĐĐ¾Đ´",
            "Open link": "ĐÑ‚ĐºÑ€Ñ‹Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ",
            "Edit link": "Đ ĐµĐ´Đ°ĐºÑ‚Đ¸Ñ€Đ¾Đ²Đ°Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ",
            "No follow": "ĐÑ‚Ñ€Đ¸Đ±ÑƒÑ‚ nofollow",
            Unlink: "Đ£Đ±Ñ€Đ°Ñ‚ÑŒ ÑÑÑ‹Đ»ĐºÑƒ",
            Update: "ĐĐ±Đ½Đ¾Đ²Đ¸Ñ‚ÑŒ",
            " URL": "URL",
            Edit: "Đ ĐµĐ´Đ°ĐºÑ‚Đ¸Ñ€Đ¾Đ²Đ°Ñ‚ÑŒ",
            "Horizontal align": "Đ“Đ¾Ñ€Đ¸Đ·Đ¾Đ½Ñ‚Đ°Đ»ÑŒĐ½Đ¾Đµ Đ²Ñ‹Ñ€Đ°Đ²Đ½Đ¸Đ²Đ°Đ½Đ¸Đµ",
            Filter: "Đ¤Đ¸Đ»ÑŒÑ‚Ñ€",
            "Sort by changed": "ĐŸĐ¾ Đ¸Đ·Đ¼ĐµĐ½ĐµĐ½Đ¸Ñ",
            "Sort by name": "ĐŸĐ¾ Đ¸Đ¼ĐµĐ½Đ¸",
            "Sort by size": "ĐŸĐ¾ Ñ€Đ°Đ·Đ¼ĐµÑ€Ñƒ",
            "Add folder": "Đ”Đ¾Đ±Đ°Đ²Đ¸Ñ‚ÑŒ Đ¿Đ°Đ¿ĐºÑƒ",
            Reset: "Đ’Đ¾ÑÑÑ‚Đ°Đ½Đ¾Đ²Đ¸Ñ‚ÑŒ",
            Save: "Đ¡Đ¾Ñ…Ñ€Đ°Đ½Đ¸Ñ‚ÑŒ",
            "Save as ...": "Đ¡Đ¾Ñ…Ñ€Đ°Đ½Đ¸Ñ‚ÑŒ ĐºĐ°Đº",
            Resize: "Đ˜Đ·Đ¼ĐµĐ½Đ¸Ñ‚ÑŒ Ñ€Đ°Đ·Đ¼ĐµÑ€",
            Crop: "ĐĐ±Ñ€ĐµĐ·Đ°Ñ‚ÑŒ Ñ€Đ°Đ·Đ¼ĐµÑ€",
            Width: "Đ¨Đ¸Ñ€Đ¸Đ½Đ°",
            Height: "Đ’Ñ‹ÑĐ¾Ñ‚Đ°",
            "Keep Aspect Ratio": "Đ¡Đ¾Ñ…Ñ€Đ°Đ½ÑÑ‚ÑŒ Đ¿Ñ€Đ¾Đ¿Đ¾Ñ€Ñ†Đ¸Đ¸",
            Yes: "Đ”Đ°",
            No: "ĐĐµÑ‚",
            Remove: "Đ£Đ´Đ°Đ»Đ¸Ñ‚ÑŒ",
            Select: "Đ’Ñ‹Đ´ĐµĐ»Đ¸Ñ‚ÑŒ",
            "Chars: %d": "Đ¡Đ¸Đ¼Đ²Đ¾Đ»Đ¾Đ²: %d",
            "Words: %d": "Đ¡Đ»Đ¾Đ²: %d",
            All: "Đ’Ñ‹Đ´ĐµĐ»Đ¸Ñ‚ÑŒ Đ²ÑĐµ",
            "Select %s": "Đ’Ñ‹Đ´ĐµĐ»Đ¸Ñ‚ÑŒ: %s",
            "Select all": "Đ’Ñ‹Đ´ĐµĐ»Đ¸Ñ‚ÑŒ Đ²ÑĐµ",
            "Vertical align": "Đ’ĐµÑ€Ñ‚Đ¸ĐºĐ°Đ»ÑŒĐ½Đ¾Đµ Đ²Ñ‹Ñ€Đ°Đ²Đ½Đ¸Đ²Đ°Đ½Đ¸Đµ",
            Split: "Đ Đ°Đ·Đ´ĐµĐ»Đ¸Ñ‚ÑŒ",
            "Split vertical": "Đ Đ°Đ·Đ´ĐµĐ»Đ¸Ñ‚ÑŒ Đ¿Đ¾ Đ²ĐµÑ€Ñ‚Đ¸ĐºĐ°Đ»Đ¸",
            "Split horizontal": "Đ Đ°Đ·Đ´ĐµĐ»Đ¸Ñ‚ÑŒ Đ¿Đ¾ Đ³Đ¾Ñ€Đ¸Đ·Đ¾Đ½Ñ‚Đ°Đ»Đ¸",
            Merge: "ĐĐ±ÑĐµĐ´ĐµĐ½Đ¸Ñ‚ÑŒ Đ² Đ¾Đ´Đ½Ñƒ",
            "Add column": "Đ”Đ¾Đ±Đ°Đ²Đ¸Ñ‚ÑŒ ÑÑ‚Đ¾Đ»Đ±ĐµÑ†",
            "Add row": "Đ”Đ¾Đ±Đ°Đ²Đ¸Ñ‚ÑŒ ÑÑ‚Ñ€Đ¾ĐºÑƒ",
            Delete: "Đ£Đ´Đ°Đ»Đ¸Ñ‚ÑŒ",
            Border: "Đ Đ°Đ¼ĐºĐ°",
            "License: %s": "Đ›Đ¸Ñ†ĐµĐ½Đ·Đ¸Ñ: %s",
            "Strike through": "ĐŸĐµÑ€ĐµÑ‡ĐµÑ€ĐºĐ½ÑƒÑ‚ÑŒ",
            Underline: "ĐŸĐ¾Đ´Ñ‡ĐµÑ€ĐºĐ¸Đ²Đ°Đ½Đ¸Đµ",
            superscript: "Đ²ĐµÑ€Ñ…Đ½Đ¸Đ¹ Đ¸Đ½Đ´ĐµĐºÑ",
            subscript: "Đ¸Đ½Đ´ĐµĐºÑ",
            "Cut selection": "Đ’Ñ‹Ñ€ĐµĐ·Đ°Ñ‚ÑŒ",
            Break: "Đ Đ°Đ·Đ´ĐµĐ»Đ¸Ñ‚ĐµĐ»ÑŒ",
            "Search for": "ĐĐ°Đ¹Ñ‚Đ¸",
            "Replace with": "Đ—Đ°Đ¼ĐµĐ½Đ¸Ñ‚ÑŒ Đ½Đ°",
            Replace: "Đ—Đ°Đ¼ĐµĐ½Đ¸Ñ‚ÑŒ",
            Paste: "Đ’ÑÑ‚Đ°Đ²Đ¸Ñ‚ÑŒ",
            "Choose Content to Paste": "Đ’Ñ‹Đ±Ñ€Đ°Ñ‚ÑŒ ĐºĐ¾Đ½Ñ‚ĐµĐ½Ñ‚ Đ´Đ»Ñ Đ²ÑÑ‚Đ°Đ²ĐºĐ¸",
            "You can only edit your own images. Download this image on the host?": "Đ’Ñ‹ Đ¼Đ¾Đ¶ĐµÑ‚Đµ Ñ€ĐµĐ´Đ°ĐºÑ‚Đ¸Ñ€Đ¾Đ²Đ°Ñ‚ÑŒ Ñ‚Đ¾Đ»ÑŒĐºĐ¾ ÑĐ²Đ¾Đ¸ ÑĐ¾Đ±ÑÑ‚Đ²ĐµĐ½Đ½Ñ‹Đµ Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Ñ. Đ—Đ°Đ³Ñ€ÑƒĐ·Đ¸Ñ‚ÑŒ ÑÑ‚Đ¾ Đ¸Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ Đ½Đ° Đ²Đ°Ñˆ ÑĐµÑ€Đ²ĐµÑ€?",
            "The image has been successfully uploaded to the host!": "Đ˜Đ·Đ¾Đ±Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ ÑƒÑĐ¿ĐµÑˆĐ½Đ¾ Đ·Đ°Đ³Ñ€ÑƒĐ¶ĐµĐ½Đ¾ Đ½Đ° ÑĐµÑ€Đ²ĐµÑ€!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Ø¥Ø¨Ø¯Ø£ ÙÙ Ø§Ù„ÙƒØªØ§Ø¨Ø©...",
            "About Jodit": "Ø­ÙˆÙ„ Ø¬ÙˆØ¯ÙØª",
            "Jodit Editor": "Ù…Ø­Ø±Ø± Ø¬ÙˆØ¯ÙØª",
            "Free Non-commercial Version": "Ø§Ù„Ø¥ØµØ¯Ø§Ø± Ø§Ù„ØºÙØ± ØªØ¬Ø§Ø±Ù Ù…Ø¬Ø§Ù†Ù",
            "GNU General Public License, version 2 or later": "Ø±Ø®ØµØ© Ø¬Ù†Ùˆ Ø§Ù„Ø¹Ù…ÙˆÙ…ÙØ© Ø§Ù„Ø¹Ø§Ù…Ø© ØŒ Ø§Ù„Ø¥ØµØ¯Ø§Ø± Ø§Ù„Ø«Ø§Ù†Ù Ø£Ùˆ Ø§Ù„Ø£Ø­Ø¯Ø«",
            "Jodit User's Guide": "Ø¯Ù„ÙÙ„ Ù…Ø³ØªØ®Ø¯Ù… Ø¬ÙˆØ¯ÙØª",
            "contains detailed help for using": "ÙØ­ØªÙˆÙ Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø¹Ø¯Ø© Ù…ÙØµÙ„Ø© Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…",
            "For information about the license, please go to our website:": "Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø­ÙˆÙ„ Ø§Ù„ØªØ±Ø®ÙØµØŒ ÙØ±Ø¬Ù‰ Ø§Ù„Ø°Ù‡Ø§Ø¨ Ù„Ù…ÙˆÙ‚Ø¹Ù†Ø§:",
            "Buy full version": "Ø´Ø±Ø§Ø¡ Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„ÙƒØ§Ù…Ù„Ø©",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Ø­Ù‚ÙˆÙ‚ Ø§Ù„Ø·Ø¨Ø¹ ÙˆØ§Ù„Ù†Ø´Ø± Â© XDSoft.net - Chupurnov Valeriy. ÙƒÙ„ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.",
            Anchor: "Ù…ÙØ±Ù’Ø³Ø§Ø©",
            "Open in new tab": "ÙØªØ­ ÙÙ Ù†Ø§ÙØ°Ø© Ø¬Ø¯ÙØ¯Ø©",
            "Open editor in fullsize": "ÙØªØ­ Ø§Ù„Ù…Ø­Ø±Ø± ÙÙ Ø§Ù„Ø­Ø¬Ù… Ø§Ù„ÙƒØ§Ù…Ù„",
            "Clear Formatting": "Ù…Ø³Ø­ Ø§Ù„ØªÙ†Ø³ÙÙ‚",
            "Fill color or set the text color": "Ù…Ù„Ø¡ Ø§Ù„Ù„ÙˆÙ† Ø£Ùˆ ØªØ¹ÙÙÙ† Ù„ÙˆÙ† Ø§Ù„Ù†Øµ",
            Redo: "Ø¥Ø¹Ø§Ø¯Ø©",
            Undo: "ØªØ±Ø§Ø¬Ø¹",
            Bold: "Ø¹Ø±ÙØ¶",
            Italic: "Ù…Ø§Ø¦Ù„",
            "Insert Unordered List": "Ø¥Ø¯Ø±Ø§Ø¬ Ù‚Ø§Ø¦Ù…Ø© ØºÙØ± Ù…Ø±ØªØ¨Ø©",
            "Insert Ordered List": "Ø¥Ø¯Ø±Ø§Ø¬ Ù‚Ø§Ø¦Ù…Ø© Ù…Ø±ØªØ¨Ø©",
            "Align Center": "Ù…Ø­Ø§Ø°Ø§Ø© Ù„Ù„ÙˆØ³Ø·",
            "Align Justify": "Ù…Ø­Ø§Ø°Ø§Ø© Ù…Ø«Ø¨ØªØ©",
            "Align Left": "Ù…Ø­Ø§Ø°Ø§Ø© Ù„Ù„ÙØ³Ø§Ø±",
            "Align Right": "Ù…Ø­Ø§Ø°Ø§Ø© Ù„Ù„ÙÙ…ÙÙ†",
            "Insert Horizontal Line": "Ø¥Ø¯Ø±Ø§Ø¬ Ø®Ø· Ø£ÙÙ‚Ù",
            "Insert Image": "Ø¥Ø¯Ø±Ø§Ø¬ ØµÙˆØ±Ø©",
            "Insert file": "Ø§Ø¯Ø®Ø§Ù„ Ø§Ù„Ù…Ù„Ù",
            "Insert youtube/vimeo video": "Ø¥Ø¯Ø±Ø§Ø¬ ÙÙØ¯ÙÙˆ ÙÙˆØªÙÙˆØ¨/ÙÙÙ…ÙÙˆ ",
            "Insert link": "Ø¥Ø¯Ø±Ø§Ø¬ Ø±Ø§Ø¨Ø·",
            "Font size": "Ø­Ø¬Ù… Ø§Ù„Ø®Ø·",
            "Font family": "Ù†ÙˆØ¹ Ø§Ù„Ø®Ø·",
            "Insert format block": "Ø¥Ø¯Ø±Ø§Ø¬ ÙƒØªÙ„Ø© ØªÙ†Ø³ÙÙ‚",
            Normal: "Ø¹Ø§Ø¯Ù",
            "Heading 1": "Ø¹Ù†ÙˆØ§Ù† 1",
            "Heading 2": "Ø¹Ù†ÙˆØ§Ù† 2",
            "Heading 3": "Ø¹Ù†ÙˆØ§Ù† 3",
            "Heading 4": "Ø¹Ù†ÙˆØ§Ù† 4",
            Quote: "Ø¥Ù‚ØªØ¨Ø§Ø³",
            Code: "ÙƒÙˆØ¯",
            Insert: "Ø¥Ø¯Ø±Ø§Ø¬",
            "Insert table": "Ø¥Ø¯Ø±Ø§Ø¬ Ø¬Ø¯ÙˆÙ„",
            "Decrease Indent": "ØªÙ‚Ù„ÙÙ„ Ø§Ù„Ù…Ø³Ø§ÙØ© Ø§Ù„Ø¨Ø§Ø¯Ø¦Ø©",
            "Increase Indent": "Ø²ÙØ§Ø¯Ø© Ø§Ù„Ù…Ø³Ø§ÙØ© Ø§Ù„Ø¨Ø§Ø¯Ø¦Ø©",
            "Select Special Character": "ØªØ­Ø¯ÙØ¯ Ø£Ø­Ø±Ù Ø®Ø§ØµØ©",
            "Insert Special Character": "Ø¥Ø¯Ø±Ø§Ø¬ Ø­Ø±Ù Ø®Ø§Øµ",
            "Paint format": "ØªÙ†Ø³ÙÙ‚ Ø§Ù„Ø±Ø³Ù…",
            "Change mode": "ØªØºÙÙØ± Ø§Ù„ÙˆØ¶Ø¹",
            Margins: "Ù‡ÙˆØ§Ù…Ø´",
            top: "Ø£Ø¹Ù„Ù‰",
            right: "ÙÙ…ÙÙ†",
            bottom: "Ø£Ø³ÙÙ„",
            left: "ÙØ³Ø§Ø±",
            Styles: "Ø§Ù„Ø£Ù†Ù…Ø§Ø·",
            Classes: "Ø§Ù„Ø·Ø¨Ù‚Ø§Øª",
            Align: "Ù…Ø­Ø§Ø°Ø§Ø©",
            Right: "Ø§Ù„ÙÙ…ÙÙ†",
            Center: "Ø§Ù„ÙˆØ³Ø·",
            Left: "Ø§Ù„ÙØ³Ø§Ø±",
            "--Not Set--": "--ØºÙØ± Ù…Ø¶Ø¨ÙˆØ·--",
            Src: "Src",
            Title: "Ø§Ù„Ø¹Ù†ÙˆØ§Ù†",
            Alternative: "Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø¨Ø¯ÙÙ„",
            Link: "Ø§Ù„Ø±Ø§Ø¨Ø·",
            "Open link in new tab": "Ø§ÙØªØ­ Ø§Ù„Ø±Ø§Ø¨Ø· ÙÙ Ù†Ø§ÙØ°Ø© Ø¬Ø¯ÙØ¯Ø©",
            Image: "Ø§Ù„ØµÙˆØ±Ø©",
            file: "Ù…Ù„Ù",
            Advanced: "Ù…ØªÙ‚Ø¯Ù…",
            "Image properties": "Ø®ØµØ§Ø¦Øµ Ø§Ù„ØµÙˆØ±Ø©",
            Cancel: "Ø¥Ù„ØºØ§Ø¡",
            Ok: "Ø­Ø³Ù†Ø§",
            "File Browser": "Ù…ØªØµÙØ­ Ø§Ù„Ù…Ù„ÙØ§Øª",
            "Error on load list": "Ø­Ø¯Ø« Ø®Ø·Ø£ ÙÙ ØªØ­Ù…ÙÙ„ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© ",
            "Error on load folders": "Ø­Ø¯Ø« Ø®Ø·Ø£ ÙÙ ØªØ­Ù…ÙÙ„ Ø§Ù„Ù…Ø¬Ù„Ø¯Ø§Øª",
            "Are you sure?": "Ù‡Ù„ Ø£Ù†Øª ÙˆØ§Ø«Ù‚ØŸ",
            "Enter Directory name": "Ø£Ø¯Ø®Ù„ Ø§Ø³Ù… Ø§Ù„Ù…Ø¬Ù„Ø¯",
            "Create directory": "Ø¥Ù†Ø´Ø§Ø¡ Ù…Ø¬Ù„Ø¯",
            "type name": "Ø£ÙƒØªØ¨ Ø¥Ø³Ù…",
            "Drop image": "Ø¥Ø³Ù‚Ø§Ø· ØµÙˆØ±Ø©",
            "Drop file": "Ø¥Ø³Ù‚Ø§Ø· Ø§Ù„Ù…Ù„Ù",
            "or click": "Ø£Ùˆ Ø£Ù†Ù‚Ø±",
            "Alternative text": "Ø§Ù„Ù†Øµ Ø§Ù„Ø¨Ø¯ÙÙ„",
            Upload: "Ø±ÙØ¹",
            Browse: "ØªØµÙØ­",
            Background: "Ø§Ù„Ø®Ù„ÙÙØ©",
            Text: "Ù†Øµ",
            Top: "Ø£Ø¹Ù„Ù‰",
            Middle: "Ø§Ù„ÙˆØ³Ø·",
            Bottom: "Ø§Ù„Ø£Ø³ÙÙ„",
            "Insert column before": "Ø¥Ø¯Ø±Ø§Ø¬ Ø¹Ù…ÙˆØ¯ Ù‚Ø¨Ù„",
            "Insert column after": "Ø¥Ø¯Ø±Ø§Ø¬ Ø¹Ù…ÙˆØ¯ Ø¨Ø¹Ø¯",
            "Insert row above": "Ø¥Ø¯Ø±Ø§Ø¬ ØµÙ Ø£Ø¹Ù„Ù‰",
            "Insert row below": "Ø¥Ø¯Ø±Ø§Ø¬ ØµÙ Ø£Ø³ÙÙ„",
            "Delete table": "Ø­Ø°Ù Ø§Ù„Ø¬Ø¯ÙˆÙ„",
            "Delete row": "Ø­Ø°Ù Ø§Ù„ØµÙ",
            "Delete column": "Ø­Ø°Ù Ø§Ù„Ø¹Ù…ÙˆØ¯",
            "Empty cell": "Ø®Ù„ÙØ© ÙØ§Ø±ØºØ©",
            "Chars: %d": "%d Ø­Ø±Ù",
            "Words: %d": "%d ÙƒÙ„Ø§Ù…",
            "Strike through": "Ø§Ø¶Ø±Ø¨ Ù…Ù† Ø®Ù„Ø§Ù„",
            Underline: "Ø£ÙƒØ¯",
            superscript: "Ø­Ø±Ù ÙÙˆÙ‚Ù",
            subscript: "Ù…Ø®Ø·ÙˆØ·Ø©",
            "Cut selection": "Ù‚Ø·Ø¹ Ø§Ù„Ø§Ø®ØªÙØ§Ø±",
            "Select all": "Ø§Ø®ØªØ± Ø§Ù„ÙƒÙ„",
            Break: "Ø§Ø³ØªØ±Ø§Ø­Ø©",
            "Search for": "Ø§Ù„Ø¨Ø­Ø« Ø¹Ù†",
            "Replace with": "Ø§Ø³ØªØ¨Ø¯Ù„ Ø¨",
            Replace: "ÙØ­Ù„ Ù…Ø­Ù„",
            Paste: "Ù…Ø¹Ø¬ÙˆÙ†",
            "Choose Content to Paste": "Ø§Ø®ØªØ± Ù…Ø­ØªÙˆÙ‰ Ù„Ù„ØµÙ‚",
            source: "Ù…ØµØ¯Ø±",
            bold: "Ø¨Ø§Ù„Ø®Ø· Ø§Ù„Ø¹Ø±ÙØ¶",
            italic: "Ù…Ø§Ø¦Ù„",
            brush: "Ø´ØºÙ„",
            link: "ØµÙ„Ø©",
            undo: "Ø¥Ù„ØºØ§Ø¡",
            redo: "ÙƒØ±Ø±",
            table: "Ø·Ø§ÙˆÙ„Ø©",
            image: "ØµÙˆØ±Ø©",
            eraser: "Ù†Ø¸ÙÙ",
            paragraph: "ÙÙ‚Ø±Ø©",
            fontsize: "Ø­Ø¬Ù… Ø§Ù„Ø®Ø·",
            video: "ÙÙØ¯ÙÙˆ",
            font: "Ø§Ù„Ø®Ø·",
            about: "Ø­ÙˆÙ„ Ø§Ù„Ù…Ø­Ø±Ø±",
            print: "Ø·Ø¨Ø§Ø¹Ø©",
            symbol: "Ø±Ù…Ø²",
            underline: "Ø£ÙƒØ¯",
            strikethrough: "Ø´Ø·Ø¨",
            indent: "Ø§Ù„Ù…Ø³Ø§ÙØ© Ø§Ù„Ø¨Ø§Ø¯Ø¦Ø©",
            outdent: "Ù†ØªÙˆØ¡",
            fullsize: "Ù…Ù„Ø¡ Ø§Ù„Ø´Ø§Ø´Ø©",
            shrink: "Ø§Ù„Ø­Ø¬Ù… Ø§Ù„ØªÙ‚Ù„ÙØ¯Ù",
            copyformat: "Ù†Ø³Ø® Ø§Ù„ØªÙ†Ø³ÙÙ‚",
            hr: "Ø§Ù„Ø®Ø·",
            ul: "Ù‚Ø§Ø¦Ù…Ø©",
            ol: "Ù‚Ø§Ø¦Ù…Ø© Ù…Ø±Ù‚Ù…Ø©",
            cut: "Ù‚Ø·Ø¹",
            selectall: "Ø§Ø®ØªØ± Ø§Ù„ÙƒÙ„",
            "Embed code": "Ù‚Ø§Ù†ÙˆÙ†",
            "Open link": "ÙØªØ­ Ø§Ù„Ø±Ø§Ø¨Ø·",
            "Edit link": "ØªØ¹Ø¯ÙÙ„ Ø§Ù„Ø±Ø§Ø¨Ø·",
            "No follow": "Ø³Ù…Ø© Nofollow",
            Unlink: "Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ø±Ø§Ø¨Ø·",
            Update: "ØªØ­Ø¯ÙØ«",
            " URL": "URL",
            Edit: "ØªØ­Ø±ÙØ±",
            "Horizontal align": "Ù…Ø­Ø§Ø°Ø§Ø© Ø£ÙÙ‚ÙØ©",
            Filter: "ÙÙ„ØªØ±",
            "Sort by changed": "Ø¹Ù† Ø·Ø±ÙÙ‚ Ø§Ù„ØªØºÙÙØ±",
            "Sort by name": "Ø¨Ø§Ù„Ø§Ø³Ù…",
            "Sort by size": "Ø­Ø³Ø¨ Ø§Ù„Ø­Ø¬Ù…",
            "Add folder": "Ø¥Ø¶Ø§ÙØ© Ù…Ø¬Ù„Ø¯",
            Reset: "Ø¥Ø¹Ø§Ø¯Ø©",
            Save: "Ø§Ø­ØªÙØ¸",
            "Save as ...": "Ø­ÙØ¸ Ø¨Ø§Ø³Ù…",
            Resize: "ØªØºÙÙØ± Ø§Ù„Ø­Ø¬Ù…",
            Crop: "Ø­Ø¬Ù… Ø§Ù„Ù‚Ø·Ø¹",
            Width: "Ø¹Ø±Ø¶",
            Height: "Ø§Ø±ØªÙØ§Ø¹",
            "Keep Aspect Ratio": "Ø­Ø§ÙØ¸ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø³Ø¨",
            Yes: "Ø£Ù†",
            No: "Ù„Ø§",
            Remove: "Ø­Ø°Ù",
            Select: "ØªÙ…ÙØ²",
            "Select %s": "ØªÙ…ÙØ² %s",
            "Vertical align": "Ù…Ø­Ø§Ø°Ø§Ø© Ø¹Ù…ÙˆØ¯ÙØ©",
            Split: "Ø§Ù†Ø´Ù‚ØŒ Ù…Ø²Ù‚",
            Merge: "Ø§Ø°Ù‡Ø¨",
            "Add column": "Ø£Ø¶Ù Ø§Ù„Ø¹Ù…ÙˆØ¯",
            "Add row": "Ø§Ø¶Ù Ø³Ø·Ø±",
            "License: %s": "Ø±Ø®ØµØ© %s",
            Delete: "Ø­Ø°Ù",
            "Split vertical": "Ø§Ù†Ù‚Ø³Ø§Ù… Ø¹Ù…ÙˆØ¯Ù",
            "Split horizontal": "ØªÙ‚Ø³ÙÙ… Ø£ÙÙ‚Ù",
            Border: "Ø§Ù„Ø­Ø¯ÙˆØ¯",
            "Your code is similar to HTML. Keep as HTML?": "ÙØ´Ø¨Ù‡ Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ HTML. ØªØ¨Ù‚Ù ÙƒÙ…Ø§ HTMLØŸ",
            "Paste as HTML": "Ø§Ù„ØµÙ‚ Ùƒ HTML",
            Keep: "Ø§Ø­ØªÙØ¸",
            "Insert as Text": "Ø¥Ø¯Ø±Ø§Ø¬ ÙƒÙ†Øµ",
            "Insert only Text": "Ø¥Ø¯Ø±Ø§Ø¬ Ø§Ù„Ù†Øµ ÙÙ‚Ø·",
            "You can only edit your own images. Download this image on the host?": "ÙÙ…ÙƒÙ†Ùƒ ÙÙ‚Ø· ØªØ­Ø±ÙØ± ØµÙˆØ±Ùƒ Ø§Ù„Ø®Ø§ØµØ©. ØªØ­Ù…ÙÙ„ Ù‡Ø°Ù‡ Ø§Ù„ØµÙˆØ±Ø© Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¶ÙÙØŸ",
            "The image has been successfully uploaded to the host!": "ØªÙ… ØªØ­Ù…ÙÙ„ Ø§Ù„ØµÙˆØ±Ø© Ø¨Ù†Ø¬Ø§Ø­ Ø¹Ù„Ù‰ Ø§Ù„Ø®Ø§Ø¯Ù…!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "è¾“å…¥ä¸€äº›å†…å®¹",
            Advanced: "é«˜çº§",
            "About Jodit": "å…³äºJodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Free Non-commercial Version",
            "GNU General Public License, version 2 or later": "GNU General Public License, version 2 or later",
            "Jodit User's Guide": "å¼€å‘è€…æŒ‡å—",
            "contains detailed help for using": "ä½¿ç”¨å¸®å©",
            "For information about the license, please go to our website:": "æœ‰å…³è®¸å¯è¯ç„ä¿¡æ¯ï¼Œè¯·è®¿é—®æˆ‘ä»¬ç„ç½‘ç«™ï¼",
            "Buy full version": "è´­ä¹°å®Œæ•´ç‰ˆæœ¬",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.",
            Anchor: "Anchor",
            "Open in new tab": "åœ¨æ–°çª—å£æ‰“å¼€",
            "Open editor in fullsize": "å…¨å±ç¼–è¾‘",
            "Clear Formatting": "æ¸…é™¤æ ·å¼",
            "Fill color or set the text color": "é¢œè‰²",
            Redo: "é‡å",
            Undo: "æ’¤é”€",
            Bold: "ç²—ä½“",
            Italic: "æ–œä½“",
            "Insert Unordered List": "ç¬¦å·åˆ—è¡¨",
            "Insert Ordered List": "ç¼–å·",
            "Align Center": "å±…ä¸­",
            "Align Justify": "å¯¹é½æ–‡æœ¬",
            "Align Left": "å·¦å¯¹é½",
            "Align Right": "å³å¯¹é½",
            "Insert Horizontal Line": "åˆ†å‰²çº¿",
            "Insert Image": "å›¾ç‰‡",
            "Insert file": "æ–‡ä»¶",
            "Insert youtube/vimeo video": "youtube/vimeo è§†é¢‘",
            "Insert link": "é“¾æ¥",
            "Font size": "å­—å·",
            "Font family": "å­—ä½“",
            "Insert format block": "æ ¼å¼å—",
            Normal: "æ–‡æœ¬",
            "Heading 1": "æ ‡é¢˜1",
            "Heading 2": "æ ‡é¢˜2",
            "Heading 3": "æ ‡é¢˜3",
            "Heading 4": "æ ‡é¢˜4",
            Quote: "å¼•ç”¨",
            Code: "ä»£ç ",
            Insert: "æ’å…¥",
            "Insert table": "è¡¨æ ¼",
            "Decrease Indent": "å‡å°‘ç¼©è¿›",
            "Increase Indent": "å¢å ç¼©è¿›",
            "Select Special Character": "é€‰æ‹©ç‰¹æ®ç¬¦å·",
            "Insert Special Character": "ç‰¹æ®ç¬¦å·",
            "Paint format": "æ ¼å¼å¤åˆ¶",
            "Change mode": "æ”¹å˜æ¨¡å¼",
            Margins: "å¤–è¾¹è·ï¼ˆMarginsï¼‰",
            top: "top",
            right: "right",
            bottom: "bottom",
            left: "left",
            Styles: "æ ·å¼",
            Classes: "Classes",
            Align: "å¯¹é½æ–¹å¼",
            Right: "å±…å³",
            Center: "å±…ä¸­",
            Left: "å±…å·¦",
            "--Not Set--": "æ— ",
            Src: "Src",
            Title: "Title",
            Alternative: "Alternative",
            Link: "Link",
            "Open link in new tab": "åœ¨æ–°çª—å£æ‰“å¼€é“¾æ¥",
            Image: "å›¾ç‰‡",
            file: "file",
            Advansed: "é«˜çº§",
            "Image properties": "å›¾ç‰‡å±æ€§",
            Cancel: "å–æ¶ˆ",
            Ok: "ç¡®å®",
            "Your code is similar to HTML. Keep as HTML?": "ä½ ç²˜è´´ç„æ–‡æœ¬æ˜¯ä¸€æ®µhtmlä»£ç ï¼Œæ˜¯å¦ä¿ç•™æºæ ¼å¼",
            "Paste as HTML": "htmlç²˜è´´",
            Keep: "ä¿ç•™æºæ ¼å¼",
            Clean: "åŒ¹é…ç›®æ ‡æ ¼å¼",
            "Insert as Text": "æhtmlä»£ç è§†ä¸ºæ™®é€æ–‡æœ¬",
            "Word Paste Detected": "æ–‡æœ¬ç²˜è´´",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "æ­£åœ¨ç²˜è´´ Word/Excel ç„æ–‡æœ¬ï¼Œæ˜¯å¦ä¿ç•™æºæ ¼å¼ï¼Ÿ",
            "Insert only Text": "åªä¿ç•™æ–‡æœ¬",
            "File Browser": "æ–‡ä»¶ç®¡ç†",
            "Error on load list": "å è½½listé”™è¯¯",
            "Error on load folders": "å è½½foldersé”™è¯¯",
            "Are you sure?": "ä½ ç¡®å®å—ï¼Ÿ",
            "Enter Directory name": "è¾“å…¥è·¯å¾„",
            "Create directory": "åˆ›å»ºè·¯å¾„",
            "type name": "type name",
            "Drop image": "æ‹–å¨å›¾ç‰‡åˆ°æ­¤",
            "Drop file": "æ‹–å¨æ–‡ä»¶åˆ°æ­¤",
            "or click": "æˆ–ç‚¹å‡»",
            "Alternative text": "Alternative text",
            Browse: "æµè§ˆ",
            Upload: "ä¸ä¼ ",
            Background: "èƒŒæ™¯è‰²",
            Text: "å­—ä½“é¢œè‰²",
            Top: "é¡¶éƒ¨",
            Middle: "ä¸­é—´",
            Bottom: "åº•éƒ¨",
            "Insert column before": "åœ¨ä¹‹å‰æ’å…¥åˆ—",
            "Insert column after": "åœ¨ä¹‹åæ’å…¥åˆ—",
            "Insert row above": "åœ¨ä¹‹å‰æ’å…¥è¡Œ",
            "Insert row below": "åœ¨ä¹‹åæ’å…¥è¡Œ",
            "Delete table": "åˆ é™¤è¡¨æ ¼",
            "Delete row": "åˆ é™¤è¡Œ",
            "Delete column": "åˆ é™¤åˆ—",
            "Empty cell": "æ¸…é™¤å†…å®¹",
            "Chars: %d": "å­—ç¬¦æ•°: %d",
            "Words: %d": "å•è¯æ•°: %d",
            "Strike through": "åˆ é™¤çº¿",
            Underline: "ä¸‹åˆ’çº¿",
            superscript: "ä¸æ ‡",
            subscript: "ä¸‹æ ‡",
            "Cut selection": "å‰ªåˆ‡",
            "Select all": "å…¨é€‰",
            Break: "Pause",
            "Search for": "æŸ¥æ‰¾",
            "Replace with": "æ›¿æ¢ä¸º",
            Replace: "æ›¿æ¢",
            Paste: "ç²˜è´´",
            "Choose Content to Paste": "é€‰æ‹©å†…å®¹å¹¶ç²˜è´´",
            source: "æºç ",
            bold: "ç²—ä½“",
            italic: "æ–œä½“",
            brush: "é¢œè‰²",
            link: "é“¾æ¥",
            undo: "æ’¤é”€",
            redo: "é‡å",
            table: "è¡¨æ ¼",
            image: "å›¾ç‰‡",
            eraser: "æ©¡ç®æ“¦",
            paragraph: "æ®µè½",
            fontsize: "å­—å·",
            video: "è§†é¢‘",
            font: "å­—ä½“",
            about: "å…³äº",
            print: "æ‰“å°",
            symbol: "ç¬¦å·",
            underline: "ä¸‹åˆ’çº¿",
            strikethrough: "ä¸å‡ºç°",
            indent: "å¢å ç¼©è¿›",
            outdent: "å‡å°‘ç¼©è¿›",
            fullsize: "å…¨å±",
            shrink: "æ”¶ç¼©",
            copyformat: "å¤åˆ¶æ ¼å¼",
            hr: "åˆ†å‰²çº¿",
            ul: "æ— åºåˆ—è¡¨",
            ol: "é¡ºåºåˆ—è¡¨",
            cut: "å‰ªåˆ‡",
            selectall: "å…¨é€‰",
            "Open link": "æ‰“å¼€é“¾æ¥",
            "Edit link": "ç¼–è¾‘é“¾æ¥",
            "No follow": "No follow",
            Unlink: "Unlink",
            " URL": "URL",
            Reset: "é‡ç½®",
            Save: "ä¿å­˜",
            "Save as ...": "ä¿å­˜ä¸º",
            Resize: "è°ƒæ•´å¤§å°",
            Crop: "Crop",
            Width: "å®½",
            Height: "é«˜",
            "Keep Aspect Ratio": "ä¿å­˜é•¿å®½æ¯”",
            Yes: "æ˜¯",
            No: "ä¸",
            Remove: "ç§»é™¤",
            Select: "é€‰æ‹©",
            "Select %s": "é€‰æ‹©: %s",
            Update: "æ›´æ–°",
            "Vertical align": "å‚ç›´å¯¹é½",
            Merge: "åˆå¹¶",
            "Add column": "æ·»å åˆ—",
            "Add row": "æ·»å è¡Œ",
            Delete: "åˆ é™¤",
            "Horizontal align": "æ°´å¹³å¯¹é½",
            Filter: "ç­›é€‰",
            "Sort by changed": "ä¿®æ”¹æ—¶é—´æ’åº",
            "Sort by name": "åç§°æ’åº",
            "Sort by size": "å¤§å°æ’åº",
            "Add folder": "æ–°å»ºæ–‡ä»¶å¤¹",
            "You can only edit your own images. Download this image on the host?": "ä½ åªèƒ½ç¼–è¾‘ä½ è‡ªå·±ç„å›¾ç‰‡ă€‚Download this image on the host?",
            "The image has been successfully uploaded to the host!": "å›¾ç‰‡ä¸ä¼ æˆåŸ"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Escriba algo...",
            Advanced: "Avanzado",
            "About Jodit": "Acerca de Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "VersiĂ³n gratis no comercial",
            "GNU General Public License, version 2 or later": "GNU General Public License, VersiĂ³n 2 o posterior",
            "Jodit User's Guide": "GuĂ­a de usuario Jodit",
            "contains detailed help for using": "contiene ayuda detallada para el uso.",
            "For information about the license, please go to our website:": "Para informaciĂ³n sobre la licencia, por favor visite nuestro sitio:",
            "Buy full version": "Compre la versiĂ³n completa",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.",
            Anchor: "Anclar",
            "Open in new tab": "Abrir en nueva pestaĂ±a",
            "Open editor in fullsize": "Abrir editor en pantalla completa",
            "Clear Formatting": "Limpiar formato",
            "Fill color or set the text color": "Color de relleno o de letra",
            Redo: "Rehacer",
            Undo: "Deshacer",
            Bold: "Negrita",
            Italic: "Cursiva",
            "Insert Unordered List": "Insertar lista no ordenada",
            "Insert Ordered List": "Insertar lista ordenada",
            "Align Center": "Alinear Centrado",
            "Align Justify": "Alinear Justificado",
            "Align Left": "Alinear Izquierda",
            "Align Right": "Alinear Derecha",
            "Insert Horizontal Line": "Insertar lĂ­nea horizontal",
            "Insert Image": "Insertar imagen",
            "Insert file": "Insertar archivo",
            "Insert youtube/vimeo video": "Insertar video de Youtube/vimeo",
            "Insert link": "Insertar vĂ­nculo",
            "Font size": "TamaĂ±o de letra",
            "Font family": "Familia de letra",
            "Insert format block": "Insertar bloque",
            Normal: "Normal",
            "Heading 1": "Encabezado 1",
            "Heading 2": "Encabezado 2",
            "Heading 3": "Encabezado 3",
            "Heading 4": "Encabezado 4",
            Quote: "Cita",
            Code: "CĂ³digo",
            Insert: "Insertar",
            "Insert table": "Insertar tabla",
            "Decrease Indent": "Disminuir sangrĂ­a",
            "Increase Indent": "Aumentar sangrĂ­a",
            "Select Special Character": "Seleccionar caracter especial",
            "Insert Special Character": "Insertar caracter especial",
            "Paint format": "Copiar formato",
            "Change mode": "Cambiar modo",
            Margins: "MĂ¡rgenes",
            top: "arriba",
            right: "derecha",
            bottom: "abajo",
            left: "izquierda",
            Styles: "Estilos CSS",
            Classes: "Clases CSS",
            Align: "Alinear",
            Right: "Derecha",
            Center: "Centrado",
            Left: "Izquierda",
            "--Not Set--": "--No Establecido--",
            Src: "Fuente",
            Title: "TĂ­tulo",
            Alternative: "Texto Alternativo",
            Link: "VĂ­nculo",
            "Open link in new tab": "Abrir vĂ­nculo en nueva pestaĂ±a",
            Image: "Imagen",
            file: "Archivo",
            Advansed: "Avanzado",
            "Image properties": "Propiedades de imagen",
            Cancel: "Cancelar",
            Ok: "Aceptar",
            "Your code is similar to HTML. Keep as HTML?": "El cĂ³digo es similar a HTML. Â¿Mantener como HTML?",
            "Paste as HTML": "Pegar como HTML?",
            Keep: "Mantener",
            Clean: "Limpiar",
            "Insert as Text": "Insertar como texto",
            "Word Paste Detected": "Pegado desde Word detectado",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "El contenido pegado proviene de un documento de Microsoft Word/Excel. Â¿Desea mantener el formato o limpiarlo?",
            "Insert only Text": "Insertar solo texto",
            "File Browser": "Buscar archivo",
            "Error on load list": "Error al cargar la lista",
            "Error on load folders": "Error al cargar las carpetas",
            "Are you sure?": "Â¿EstĂ¡ seguro?",
            "Enter Directory name": "Entre nombre de carpeta",
            "Create directory": "Crear carpeta",
            "type name": "Entre el nombre",
            "Drop image": "Soltar imagen",
            "Drop file": "Soltar archivo",
            "or click": "o click",
            "Alternative text": "Texto alternativo",
            Browse: "Buscar",
            Upload: "Subir",
            Background: "Fondo",
            Text: "Texto",
            Top: "Arriba",
            Middle: "Centro",
            Bottom: "Abajo",
            "Insert column before": "Insertar columna antes",
            "Insert column after": "Interar columna despuĂ©s",
            "Insert row above": "Insertar fila arriba",
            "Insert row below": "Insertar fila debajo",
            "Delete table": "Borrar tabla",
            "Delete row": "Borrar fila",
            "Delete column": "Borrar columna",
            "Empty cell": "Vaciar celda",
            Delete: "Borrar",
            "Strike through": "Tachado",
            Underline: "Subrayado",
            Break: "Pausa",
            "Search for": "Buscar",
            "Replace with": "Reemplazar con",
            Replace: "Reemplazar",
            Edit: "Editar",
            "Vertical align": "AlineaciĂ³n vertical",
            "Horizontal align": "AlineaciĂ³n horizontal",
            Filter: "filtrar",
            "Sort by changed": "Ordenar por fecha modificaciĂ³n",
            "Sort by name": "Ordenar por nombre",
            "Sort by size": "Ordenar por tamaĂ±o",
            "Add folder": "Agregar carpeta",
            "Split vertical": "Dividir vertical",
            "Split horizontal": "Dividir horizontal",
            Merge: "Mezclar",
            "Add column": "Agregar columna",
            "Add row": "Agregar fila",
            Border: "Borde",
            "Embed code": "Incluir cĂ³digo",
            Update: "Actualizar",
            superscript: "superĂ­ndice",
            subscript: "subĂ­ndice",
            "Cut selection": "Cortar selecciĂ³n",
            Paste: "Pegar",
            "Choose Content to Paste": "Seleccionar contenido para pegar",
            "Chars: %d": "Caracteres: %d",
            "Words: %d": "Palabaras: %d",
            All: "Todo",
            "Select %s": "Seleccionar: %s",
            "Select all": "Seleccionar todo",
            source: "HTML",
            bold: "negrita",
            italic: "cursiva",
            brush: "Brocha",
            link: "VĂ­nculo",
            undo: "deshacer",
            redo: "rehacer",
            table: "Tabla",
            image: "Imagen",
            eraser: "Borrar",
            paragraph: "PĂ¡rrafo",
            fontsize: "TamaĂ±o de letra",
            video: "Video",
            font: "Letra",
            about: "Acerca de",
            print: "Imprimir",
            symbol: "SĂ­mbolo",
            underline: "subrayar",
            strikethrough: "tachar",
            indent: "sangrĂ­a",
            outdent: "quitar sangrĂ­a",
            fullsize: "TamaĂ±o completo",
            shrink: "encoger",
            copyformat: "Copiar formato",
            hr: "lĂ­nea horizontal",
            ul: "lista sin ordenar",
            ol: "lista ordenada",
            cut: "Cortar",
            selectall: "Seleccionar todo",
            "Open link": "Abrir vĂ­nculo",
            "Edit link": "Editar vĂ­nculo",
            "No follow": "No seguir",
            Unlink: "Desvincular",
            " URL": "URL",
            Reset: "Resetear",
            Save: "Guardar",
            "Save as ...": "Guardar como...",
            Resize: "Redimensionar",
            Crop: "Recortar",
            Width: "Ancho",
            Height: "Alto",
            "Keep Aspect Ratio": "Mantener relaciĂ³n de aspecto",
            Yes: "Si",
            No: "No",
            Remove: "Quitar",
            Select: "Seleccionar",
            "You can only edit your own images. Download this image on the host?": "Solo puedes editar tus propias imĂ¡genes. Â¿Descargar esta imagen en el servidor?",
            "The image has been successfully uploaded to the host!": "Â¡La imagen se ha subido correctamente al servidor!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Type iets...",
            Advanced: "Geavanceerd",
            "About Jodit": "Over Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Gratis niet-commerciĂ«le versie",
            "GNU General Public License, version 2 or later": "GNU General Public License, versie 2 of hoger",
            "Jodit User's Guide": "Jodit gebruikershandleiding",
            "contains detailed help for using": "bevat gedetailleerde informatie voor gebruik.",
            "For information about the license, please go to our website:": "Voor informatie over de licentie, ga naar onze website:",
            "Buy full version": "Volledige versie kopen",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.",
            Anchor: "Anker",
            "Open in new tab": "Op in nieuwe tab",
            "Open editor in fullsize": "Editor in volledige grootte openen",
            "Clear Formatting": "Opmaak verwijderen",
            "Fill color or set the text color": "Vulkleur of tekstkleur aanpassen",
            Redo: "Opnieuw uitvoeren",
            Undo: "Ongedaan maken",
            Bold: "Dikgedrukt",
            Italic: "Cursief",
            "Insert Unordered List": "Ongesorteerde list invoegen",
            "Insert Ordered List": "Gesorteerde lijst invoegen",
            "Align Center": "Centreren",
            "Align Justify": "Uitlijnen op volledige breedte",
            "Align Left": "Links uitlijnen",
            "Align Right": "Rechts uitlijnen",
            "Insert Horizontal Line": "Horizontale lijn toevoegen",
            "Insert Image": "Afbeelding toevoegen",
            "Insert file": "Bestand toevoegen",
            "Insert youtube/vimeo video": "Youtube/Vimeo video toevoegen",
            "Insert link": "Link toevoegen",
            "Font size": "Tekstgrootte",
            "Font family": "Fontfamilie",
            "Insert format block": "Format blok toevoegen",
            Normal: "Normaal",
            "Heading 1": "Koptekst 1",
            "Heading 2": "Koptekst 2",
            "Heading 3": "Koptekst 3",
            "Heading 4": "Koptekst 4",
            Quote: "Quote",
            Code: "Code",
            Insert: "Invoegen",
            "Insert table": "Tabel invoegen",
            "Decrease Indent": "Indentatie verkleinen",
            "Increase Indent": "Indentatie vergroten",
            "Select Special Character": "Bijzonder karakter selecteren",
            "Insert Special Character": "Bijzonder karakter invoegen",
            "Paint format": "Zonder opmaak",
            "Change mode": "Modus veranderen",
            Margins: "Marge",
            top: "Boven",
            right: "Rechts",
            bottom: "Onder",
            left: "Links",
            Styles: "CSS styles",
            Classes: "CSS classes",
            Align: "Uitlijning",
            Right: "Rechts",
            Center: "Gecentereerd",
            Left: "Links",
            "--Not Set--": "--Leeg--",
            Src: "Src",
            Title: "Titel",
            Alternative: "Alternatieve tekst",
            Link: "Link",
            "Open link in new tab": "Link in nieuwe tab openen",
            Image: "Afbeelding",
            file: "Bestand",
            Advansed: "Geavanceerd",
            "Image properties": "Afbeeldingseigenschappen",
            Cancel: "Annuleren",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Deze code lijkt op HTML. Als HTML behouden?",
            "Paste as HTML": "Invoegen als HTML",
            Keep: "Origineel behouden",
            Clean: "Opschonen",
            "Insert as Text": "Als tekst invoegen",
            "Word Paste Detected": "Word tekst gedetecteerd",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?",
            "Insert only Text": "Als tekst invoegen",
            "File Browser": "Bestandsbrowser",
            "Error on load list": "Fout bij het laden van de lijst",
            "Error on load folders": "Fout bij het laden van de mappenlijst",
            "Are you sure?": "Weet je het zeker?",
            "Enter Directory name": "Geef de map een naam",
            "Create directory": "Map aanmaken",
            "type name": "Type naam",
            "Drop image": "Afbeelding hier naartoe slepen",
            "Drop file": "Bestand hier naartoe slepen",
            "or click": "of klikken",
            "Alternative text": "Alternatieve tekst",
            Browse: "Breose",
            Upload: "Uploaden",
            Background: "Achtergrond",
            Text: "Tekst",
            Top: "Boven",
            Middle: "Midden",
            Bottom: "Onder",
            "Insert column before": "Voeg kolom na in",
            "Insert column after": "Voeg kolom voor in",
            "Insert row above": "Voeg kolom boven in",
            "Insert row below": "Voeg kolom onder in",
            "Delete table": "Tabel verwijderen",
            "Delete row": "Rij verwijderen",
            "Delete column": "Kolom verwijderen",
            "Empty cell": "Cel leegmaken",
            Delete: "Verwijderen",
            "Strike through": "Doorstrepen",
            Underline: "Onderstrepen",
            Break: "Enter",
            "Search for": "Zoek naar",
            "Replace with": "Vervangen door",
            Replace: "Vervangen",
            Edit: "Bewerken",
            "Vertical align": "Verticaal uitlijnen",
            "Horizontal align": "Horizontaal uitlijnen",
            Filter: "Filter",
            "Sort by changed": "Sorteren op wijzigingsdatum",
            "Sort by name": "Sorteren op naam",
            "Sort by size": "Sorteren op grootte",
            "Add folder": "Map toevoegen",
            "Split vertical": "Verticaal verdelen",
            "Split horizontal": "Horizontaal verdelen",
            Merge: "Samenvoegen",
            "Add column": "Kolom toevoegen",
            "Add row": "Rij toevoegen",
            Border: "Rand",
            "Embed code": "Embed code",
            Update: "Updaten",
            superscript: "Superscript",
            subscript: "Subscript",
            "Cut selection": "Selectie knippen",
            Paste: "Plakken",
            "Choose Content to Paste": "Kies content om te plakken",
            "Chars: %d": "Tekens: %d",
            "Words: %d": "Wooren: %d",
            All: "Alles",
            "Select %s": "Selecteer: %s",
            "Select all": "Selecteer alles",
            source: "HTML",
            bold: "dikgedrukt",
            italic: "cursief",
            brush: "kwast",
            link: "link",
            undo: "ongedaan maken",
            redo: "opnieuw doen",
            table: "tabel",
            image: "afbeelding",
            eraser: "gum",
            paragraph: "paragraaf",
            fontsize: "tekengrootte",
            video: "video",
            font: "lettertype",
            about: "over",
            print: "afdrukken",
            symbol: "symbool",
            underline: "onderlijnen",
            strikethrough: "doorstrepen",
            indent: "inspringen",
            outdent: "minder inspringen",
            fullsize: "volledige grootte",
            shrink: "kleiner maken",
            copyformat: "opmaak kopiĂ«ren",
            hr: "horizontale lijn",
            ul: "lijst",
            ol: "genummerde lijst",
            cut: "knip",
            selectall: "alles selecteren",
            "Open link": "link openen",
            "Edit link": "link aanpassen",
            "No follow": "niet volgen",
            Unlink: "link verwijderen",
            " URL": " URL",
            Reset: "Herstellen",
            Save: "Opslaan",
            "Save as ...": "Opslaan als ...",
            Resize: "Grootte aanpassen",
            Crop: "Bijknippen",
            Width: "Breedte",
            Height: "Hoogte",
            "Keep Aspect Ratio": "Verhouding aanhouden",
            Yes: "Ja",
            No: "Nee",
            Remove: "Verwijderen",
            Select: "Selecteren",
            "You can only edit your own images. Download this image on the host?": "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?",
            "The image has been successfully uploaded to the host!": "De afbeelding is succesvol geĂ¼ploadet!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Ărjon be valamit",
            Advanced: "HaladĂ³",
            "About Jodit": "JoditrĂ³l",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Ingyenes vĂ¡ltozat",
            "GNU General Public License, version 2 or later": "GNU General Public License, VerziĂ³ 2 vagy kĂ©sÅ‘bbi",
            "Jodit User's Guide": "Jodit ĂºtmutatĂ³",
            "contains detailed help for using": "tovĂ¡bbi segĂ­tsĂ©get tartalmaz",
            "For information about the license, please go to our website:": "TovĂ¡bbi licence informĂ¡ciĂ³kĂ©rt lĂ¡togassa meg a weboldalunkat:",
            "Buy full version": "Teljes verziĂ³ megvĂ¡sĂ¡rlĂ¡sa",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.",
            Anchor: "Horgony",
            "Open in new tab": "MegnyitĂ¡s Ăºj lapon",
            "Open editor in fullsize": "MegnyitĂ¡s teljes mĂ©retben",
            "Clear Formatting": "FormĂ¡zĂ¡s tĂ¶rlĂ©se",
            "Fill color or set the text color": "HĂ¡ttĂ©r/szĂ¶veg szĂ­n",
            Redo: "Ăjra",
            Undo: "Visszavon",
            Bold: "FĂ©lkĂ¶vĂ©r",
            Italic: "DÅ‘lt",
            "Insert Unordered List": "Pontozott lista",
            "Insert Ordered List": "SzĂ¡mozott lista",
            "Align Center": "KĂ¶zĂ©pre zĂ¡rt",
            "Align Justify": "SorkizĂ¡rt",
            "Align Left": "Balra zĂ¡rt",
            "Align Right": "Jobbra zĂ¡rt",
            "Insert Horizontal Line": "VĂ­zszintes vonal beszĂºrĂ¡sa",
            "Insert Image": "KĂ©p beszĂºrĂ¡s",
            "Insert file": "FĂ¡jl beszĂºrĂ¡s",
            "Insert youtube/vimeo video": "Youtube videĂ³ beszĂºrĂ¡sa",
            "Insert link": "Link beszĂºrĂ¡s",
            "Font size": "BetÅ±mĂ©ret",
            "Font family": "BetÅ±tĂ­pus",
            "Insert format block": "FormĂ¡zott blokk beszĂºrĂ¡sa",
            Normal: "NormĂ¡l",
            "Heading 1": "FejlĂ©c 1",
            "Heading 2": "FejlĂ©c 2",
            "Heading 3": "FejlĂ©c 3",
            "Heading 4": "FejlĂ©c 4",
            Quote: "IdĂ©zet",
            Code: "KĂ³d",
            Insert: "BeszĂºr",
            "Insert table": "TĂ¡blĂ¡zat beszĂºrĂ¡sa",
            "Decrease Indent": "BehĂºzĂ¡s csĂ¶kkentĂ©se",
            "Increase Indent": "BehĂºzĂ¡s nĂ¶velĂ©se",
            "Select Special Character": "SpeciĂ¡lis karakter kivĂ¡lasztĂ¡sa",
            "Insert Special Character": "SpeciĂ¡lis karakter beszĂºrĂ¡sa",
            "Paint format": "KĂ©p formĂ¡zĂ¡sa",
            "Change mode": "NĂ©zet vĂ¡ltĂ¡sa",
            Print: "NyomtatĂ¡s",
            Margins: "SzegĂ©lyek",
            top: "felsÅ‘",
            right: "jobb",
            bottom: "alsĂ³",
            left: "bal",
            Styles: "CSS stĂ­lusok",
            Classes: "CSS osztĂ¡lyok",
            Align: "IgazĂ­tĂ¡s",
            Right: "Jobbra",
            Center: "KĂ¶zĂ©pre",
            Left: "Balra",
            "--Not Set--": "Nincs",
            Src: "ForrĂ¡s",
            Title: "CĂ­m",
            Alternative: "HelyettesĂ­tÅ‘ szĂ¶veg",
            Link: "Link",
            "Open link in new tab": "Link megnyitĂ¡sa Ăºj lapon",
            Image: "KĂ©p",
            file: "FĂ¡jl",
            Advansed: "TovĂ¡bbi beĂ¡llĂ­tĂ¡s",
            "Image properties": "KĂ©p tulajdonsĂ¡gai",
            Cancel: "MĂ©gsem",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "A beillesztett szĂ¶veg HTML-nek tÅ±nik. Megtartsuk HTML-kĂ©nt?",
            "Paste as HTML": "BeszĂºrĂ¡s HTML-kĂ©nt",
            Keep: "MegtartĂ¡s",
            Clean: "ElvetĂ©s",
            "Insert as Text": "BeszĂºrĂ¡s szĂ¶vegkĂ©nt",
            "Word Paste Detected": "Word-bÅ‘l mĂ¡solt szĂ¶veg",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "A beillesztett tartalom Microsoft Word/Excel dokumentumbĂ³l szĂ¡rmazik. Meg szeretnĂ© tartani a formĂ¡tumĂ¡t?",
            "Insert only Text": "Csak szĂ¶veg beillesztĂ©se",
            "File Browser": "FĂ¡jl tallĂ³zĂ³",
            "Error on load list": "Hiba a lista betĂ¶ltĂ©se kĂ¶zben",
            "Error on load folders": "Hiba a mappĂ¡k betĂ¶ltĂ©se kĂ¶zben",
            "Are you sure?": "Biztosan ezt szeretnĂ©?",
            "Enter Directory name": "Ărjon be egy mappanevet",
            "Create directory": "Mappa lĂ©trehozĂ¡sa",
            "type name": "Ă­rjon be bevet",
            "Drop image": "HĂºzza ide a kĂ©pet",
            "Drop file": "HĂºzza ide a fĂ¡jlt",
            "or click": "vagy kattintson",
            "Alternative text": "HelyettesĂ­tÅ‘ szĂ¶veg",
            Browse: "TallĂ³z",
            Upload: "FeltĂ¶lt",
            Background: "HĂ¡ttĂ©r",
            Text: "SzĂ¶veg",
            Top: "Fent",
            Middle: "KĂ¶zĂ©pen",
            Bottom: "Lent",
            "Insert column before": "Oszlop beszĂºrĂ¡s elĂ©",
            "Insert column after": "Oszlop beszĂºrĂ¡s utĂ¡na",
            "Insert row above": "Sor beszĂºrĂ¡s fĂ¶lĂ©",
            "Insert row below": "Sor beszĂºrĂ¡s alĂ¡",
            "Delete table": "TĂ¡blĂ¡zat tĂ¶rlĂ©se",
            "Delete row": "Sor tĂ¶rlĂ©se",
            "Delete column": "Oszlop tĂ¶rlĂ©se",
            "Empty cell": "Cella tartalmĂ¡nak tĂ¶rlĂ©se",
            Delete: "TĂ¶rlĂ©s",
            "Strike through": "ĂthĂºzott",
            Underline: "AlĂ¡hĂºzott",
            Break: "SzĂ¼net",
            "Search for": "KeresĂ©s",
            "Replace with": "Csere erre",
            Replace: "Csere",
            Edit: "Szerkeszt",
            "Vertical align": "FĂ¼ggÅ‘leges igazĂ­tĂ¡s",
            "Horizontal align": "VĂ­zszintes igazĂ­tĂ¡s",
            Filter: "SzÅ±rÅ‘",
            "Sort by changed": "RendezĂ©s mĂ³dosĂ­tĂ¡s szerint",
            "Sort by name": "RendezĂ©s nĂ©v szerint",
            "Sort by size": "RendezĂ©s mĂ©ret szerint",
            "Add folder": "Mappa hozzĂ¡adĂ¡s",
            "Split vertical": "FĂ¼ggÅ‘leges felosztĂ¡s",
            "Split horizontal": "VĂ­zszintes felosztĂ¡s",
            Merge: "Ă–sszevonĂ¡s",
            "Add column": "Oszlop hozzĂ¡adĂ¡s",
            "Add row": "Sor hozzĂ¡adĂ¡s",
            Border: "SzegĂ©ly",
            "Embed code": "BeĂ¡gyazott kĂ³d",
            Update: "FrissĂ­t",
            superscript: "FelsÅ‘ index",
            subscript: "AlsĂ³ index",
            "Cut selection": "KivĂ¡gĂ¡s",
            Paste: "BeillesztĂ©s",
            "Choose Content to Paste": "VĂ¡lasszon tartalmat a beillesztĂ©shez",
            Split: "FelosztĂ¡s",
            "Chars: %d": "Karakterek szĂ¡ma: %d",
            "Words: %d": "Szavak szĂ¡ma: %d",
            All: "Ă–sszes",
            "Select %s": "KijelĂ¶l: %s",
            "Select all": "Ă–sszes kijelĂ¶lĂ©se",
            source: "HTML",
            bold: "FĂ©lkĂ¶vĂ©r",
            italic: "DÅ‘lt",
            brush: "Ecset",
            link: "Link",
            undo: "Visszavon",
            redo: "Ăjra",
            table: "TĂ¡blĂ¡zat",
            image: "KĂ©p",
            eraser: "TĂ¶rlĂ©s",
            paragraph: "ParagrĂ¡fus",
            fontsize: "BetÅ±mĂ©ret",
            video: "VideĂ³",
            font: "BetÅ±",
            about: "RĂ³lunk",
            print: "Nyomtat",
            symbol: "SzimbĂ³lum",
            underline: "AlĂ¡hĂºzott",
            strikethrough: "ĂthĂºzott",
            indent: "BehĂºzĂ¡s",
            outdent: "Aussenseiter",
            fullsize: "Teljes mĂ©ret",
            shrink: "Ă–sszenyom",
            copyformat: "FormĂ¡tum mĂ¡solĂ¡s",
            hr: "Egyenes vonal",
            ul: "Lista",
            ol: "SzĂ¡mozott lista",
            cut: "KivĂ¡g",
            selectall: "Ă–sszes kijelĂ¶lĂ©se",
            "Open link": "Link megnyitĂ¡sa",
            "Edit link": "Link szerkesztĂ©se",
            "No follow": "Nincs kĂ¶vetĂ©s",
            Unlink: "Link levĂ¡lasztĂ¡sa",
            " URL": "URL",
            Reset: "VisszaĂ¡llĂ­t",
            Save: "MentĂ©s",
            "Save as ...": "MentĂ©s mĂ¡skĂ©nt...",
            Resize: "ĂtmĂ©retezĂ©s",
            Crop: "KivĂ¡g",
            Width: "SzĂ©lessĂ©g",
            Height: "MagassĂ¡g",
            "Keep Aspect Ratio": "KĂ©parĂ¡ny megtartĂ¡sa",
            Yes: "Igen",
            No: "Nem",
            Remove: "EltĂ¡volĂ­t",
            Select: "KijelĂ¶l",
            "You can only edit your own images. Download this image on the host?": "Csak a sajĂ¡t kĂ©peit tudja szerkeszteni. LetĂ¶lti ezt a kĂ©pet?",
            "The image has been successfully uploaded to the host!": "KĂ©p sikeresen feltĂ¶ltve!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            "Type something": "Escreva algo...",
            Advanced: "AvanĂ§ado",
            "About Jodit": "Sobre o Jodit",
            "Jodit Editor": "Editor Jodit",
            "Free Non-commercial Version": "VersĂ£o Gratuita nĂ£o-comercial",
            "GNU General Public License, version 2 or later": "LicenĂ§a PĂºblica GNU General, VersĂ£o 2 ou posterior",
            "Jodit User's Guide": "Guia de usuĂ¡rio Jodit",
            "contains detailed help for using": "contĂ©m ajuda detalhada para o uso.",
            "For information about the license, please go to our website:": "Para informaĂ§Ă£o sobre a licenĂ§a, por favor visite nosso site:",
            "Buy full version": "Compre a versĂ£o completa",
            "Copyright Â© XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright Â© XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.",
            Anchor: "Link",
            "Open in new tab": "Abrir em nova aba",
            "Open editor in fullsize": "Abrir editor em tela cheia",
            "Clear Formatting": "Limpar formataĂ§Ă£o",
            "Fill color or set the text color": "Cor de preenchimento ou cor do texto",
            Redo: "Refazer",
            Undo: "Desfazer",
            Bold: "Negrito",
            Italic: "ItĂ¡lico",
            "Insert Unordered List": "Inserir lista nĂ£o ordenada",
            "Insert Ordered List": "Inserir lista ordenada",
            "Align Center": "Centralizar",
            "Align Justify": "Justificar",
            "Align Left": "Alinhar Ă  Esquerda",
            "Align Right": "Alinhar Ă  Direita",
            "Insert Horizontal Line": "Inserir linha horizontal",
            "Insert Image": "Inserir imagem",
            "Insert file": "Inserir arquivo",
            "Insert youtube/vimeo video": "Inserir vĂ­deo do Youtube/vimeo",
            "Insert link": "Inserir link",
            "Font size": "Tamanho da letra",
            "Font family": "Fonte",
            "Insert format block": "Inserir bloco",
            Normal: "Normal",
            "Heading 1": "CabeĂ§alho 1",
            "Heading 2": "CabeĂ§alho 2",
            "Heading 3": "CabeĂ§alho 3",
            "Heading 4": "CabeĂ§alho 4",
            Quote: "CitaĂ§Ă£o",
            Code: "CĂ³digo",
            Insert: "Inserir",
            "Insert table": "Inserir tabela",
            "Decrease Indent": "Diminuir recuo",
            "Increase Indent": "Aumentar recuo",
            "Select Special Character": "Selecionar caractere especial",
            "Insert Special Character": "Inserir caractere especial",
            "Paint format": "Copiar formato",
            "Change mode": "Mudar modo",
            Margins: "Margens",
            top: "cima",
            right: "direta",
            bottom: "baixo",
            left: "esquerda",
            Styles: "Estilos CSS",
            Classes: "Classes CSS",
            Align: "Alinhamento",
            Right: "Direita",
            Center: "Centro",
            Left: "Esquerda",
            "--Not Set--": "--NĂ£o Estabelecido--",
            Src: "Fonte",
            Title: "TĂ­tulo",
            Alternative: "Texto Alternativo",
            Link: "Link",
            "Open link in new tab": "Abrir link em nova aba",
            Image: "Imagem",
            file: "Arquivo",
            Advansed: "AvanĂ§ado",
            "Image properties": "Propriedades da imagem",
            Cancel: "Cancelar",
            Ok: "Ok",
            "Your code is similar to HTML. Keep as HTML?": "Seu cĂ³digo Ă© simular ao HTML. Manter como HTML?",
            "Paste as HTML": "Colar como HTML?",
            Keep: "Manter",
            Clean: "Limpar",
            "Insert as Text": "Inserir como Texto",
            "Word Paste Detected": "Colado do Word Detectado",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "O conteĂºdo colado veio de um documento Microsoft Word/Excel. VocĂª deseja manter o formato ou limpa-lo?",
            "Insert only Text": "Inserir somente o Texto",
            "File Browser": "Procurar arquivo",
            "Error on load list": "Erro ao carregar a lista",
            "Error on load folders": "Erro ao carregar as pastas",
            "Are you sure?": "VocĂª tem certeza?",
            "Enter Directory name": "Escreva o nome da pasta",
            "Create directory": "Criar pasta",
            "type name": "Escreva seu nome",
            "Drop image": "Soltar imagem",
            "Drop file": "Soltar arquivo",
            "or click": "ou clique",
            "Alternative text": "Texto alternativo",
            Browse: "Explorar",
            Upload: "Upload",
            Background: "Fundo",
            Text: "Texto",
            Top: "Cima",
            Middle: "Meio",
            Bottom: "Baixo",
            "Insert column before": "Inserir coluna antes",
            "Insert column after": "Inserir coluna depois",
            "Insert row above": "Inserir linha acima",
            "Insert row below": "Inserir linha abaixo",
            "Delete table": "Excluir tabela",
            "Delete row": "Excluir linha",
            "Delete column": "Excluir coluna",
            "Empty cell": "Limpar cĂ©lula",
            Delete: "Excluir",
            "Strike through": "Tachado",
            Underline: "Sublinhar",
            Break: "Pausa",
            "Search for": "Procurar por",
            "Replace with": "Substituir com",
            Replace: "Substituir",
            Edit: "Editar",
            "Vertical align": "Alinhamento vertical",
            "Horizontal align": "Alinhamento horizontal",
            Filter: "filtrar",
            "Sort by changed": "Ordenar por modificaĂ§Ă£o",
            "Sort by name": "Ordenar por nome",
            "Sort by size": "Ordenar por tamanho",
            "Add folder": "Adicionar pasta",
            "Split vertical": "Dividir vertical",
            "Split horizontal": "Dividir horizontal",
            Merge: "Mesclar",
            "Add column": "Adicionar coluna",
            "Add row": "Adicionar linha",
            Border: "Borda",
            "Embed code": "Incluir cĂ³digo",
            Update: "Atualizar",
            superscript: "sobrescrito",
            subscript: "subscrito",
            "Cut selection": "Cortar seleĂ§Ă£o",
            Paste: "Colar",
            "Choose Content to Paste": "Escolher conteĂºdo para colar",
            "Chars: %d": "Caracteres: %d",
            "Words: %d": "Palavras: %d",
            All: "Tudo",
            "Select %s": "Selecionar: %s",
            "Select all": "Selecionar tudo",
            source: "HTML",
            bold: "negrito",
            italic: "itĂ¡lico",
            brush: "pincel",
            link: "link",
            undo: "desfazer",
            redo: "refazer",
            table: "tabela",
            image: "imagem",
            eraser: "apagar",
            paragraph: "parĂ¡grafo",
            fontsize: "tamanho da letra",
            video: "vĂ­deo",
            font: "fonte",
            about: "Sobre de",
            print: "Imprimir",
            symbol: "SĂ­mbolo",
            underline: "sublinhar",
            strikethrough: "tachado",
            indent: "recuar",
            outdent: "diminuir recuo",
            fullsize: "Tamanho completo",
            shrink: "diminuir",
            copyformat: "Copiar formato",
            hr: "linha horizontal",
            ul: "lista nĂ£o ordenada",
            ol: "lista ordenada",
            cut: "Cortar",
            selectall: "Selecionar tudo",
            "Open link": "Abrir link",
            "Edit link": "Editar link",
            "No follow": "NĂ£o siga",
            Unlink: "Remover link",
            " URL": "URL",
            Reset: "Resetar",
            Save: "Salvar",
            "Save as ...": "Salvar como...",
            Resize: "Redimensionar",
            Crop: "Recortar",
            Width: "Largura",
            Height: "Altura",
            "Keep Aspect Ratio": "Manter a proporĂ§Ă£o",
            Yes: "Sim",
            No: "NĂ£o",
            Remove: "Remover",
            Select: "Selecionar",
            "You can only edit your own images. Download this image on the host?": "VocĂª sĂ³ pode editar suas prĂ³prias imagens. Baixar essa imagem pro servidor?",
            "The image has been successfully uploaded to the host!": "A imagem foi enviada com sucesso para o servidor!"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(95);
        t.about = n;
        var i = o(96);
        t.addcolumn = i;
        var r = o(97);
        t.addrow = r;
        var a = o(98);
        t.angle_left = a;
        var s = o(99);
        t.angle_down = s;
        var l = o(100);
        t.angle_right = l;
        var c = o(101);
        t.angle_up = c;
        var d = o(102);
        t.arrows_alt = d;
        var u = o(103);
        t.arrows_h = u;
        var p = o(104);
        t.attachment = p;
        var f = o(105);
        t.bin = f;
        var h = o(106);
        t.dots = h;
        var m = o(107);
        t.bold = m;
        var v = o(108);
        t.brush = v;
        var g = o(109);
        t.cancel = g;
        var b = o(110);
        t.center = b;
        var _ = o(111);
        t.chain_broken = _;
        var y = o(112);
        t.check_square = y;
        var w = o(113);
        t.check = w;
        var C = o(114);
        t.copyformat = C;
        var E = o(115);
        t.crop = E;
        var j = o(116);
        t.cut = j;
        var T = o(117);
        t.dedent = T;
        var x = o(118);
        t.enter = x;
        var S = o(119);
        t.eraser = S;
        var D = o(120);
        t.eye = D;
        var k = o(121);
        t.file = k;
        var I = o(122);
        t.folder = I;
        var A = o(123);
        t.font = A;
        var L = o(124);
        t.fontsize = L;
        var q = o(125);
        t.fullsize = q;
        var N = o(126);
        t.hr = N;
        var z = o(127);
        t.image = z;
        var M = o(128);
        t.info_circle = M;
        var O = o(129);
        t.italic = O;
        var P = o(130);
        t.justify = P;
        var B = o(131);
        t.left = B;
        var R = o(132);
        t.link = R;
        var H = o(133);
        t.lock = H;
        var W = o(134);
        t.menu = W;
        var F = o(135);
        t.merge = F;
        var V = o(136);
        t.ol = V;
        var U = o(137);
        t.paragraph = U;
        var Y = o(138);
        t.pencil = Y;
        var K = o(139);
        t.plus = K;
        var X = o(140);
        t.redo = X;
        var G = o(141);
        t.resize = G;
        var J = o(142);
        t.resizer = J;
        var $ = o(143);
        t.right = $;
        var Z = o(144);
        t.save = Z;
        var Q = o(145);
        t.select_all = Q;
        var ee = o(146);
        t.shrink = ee;
        var te = o(147);
        t.source = te;
        var oe = o(148);
        t.splitg = oe;
        var ne = o(149);
        t.splitv = ne;
        var ie = o(150);
        t.strikethrough = ie;
        var re = o(151);
        t.subscript = re;
        var ae = o(152);
        t.superscript = ae;
        var se = o(153);
        t.table = se;
        var le = o(154);
        t.th_list = le;
        var ce = o(155);
        t.th = ce;
        var de = o(156);
        t.ul = de;
        var ue = o(157);
        t.underline = ue;
        var pe = o(158);
        t.undo = pe;
        var fe = o(159);
        t.unlink = fe;
        var he = o(160);
        t.unlock = he;
        var me = o(161);
        t.update = me;
        var ve = o(162);
        t.upload = ve;
        var ge = o(163);
        t.valign = ge;
        var be = o(164);
        t.video = be;
        var _e = o(165);
        t.outdent = _e;
        var ye = o(166);
        t.indent = ye;
        var we = o(167);
        t.print = we;
        var Ce = o(168);
        t.omega = Ce
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 18.151 18.151">\n<g>\n\t<g>\n\t\t<path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194\n\t\t\tc0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/>\n\t\t<path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938\n\t\t\tS13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597\n\t\t\ts3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/>\n\t\t<polygon  points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868\n\t\t\t10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 \t\t"/>\n\t</g>\n</g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 432 432">\n<g>\n\t<g>\n\t\t<polygon points="203.688,96 0,96 0,144 155.688,144 \t\t"/>\n\t\t<polygon points="155.719,288 0,288 0,336 203.719,336 \t\t"/>\n\t\t<rect x="252" y="96"/>\n\t\t<rect/>\n\t\t<rect x="252" y="288"/>\n\t\t<rect y="384"/>\n\t\t<path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719\n\t\t\tL97.844,230.125z"/>\n\t\t<polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 \t\t"/>\n\t</g>\n</g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg  viewBox="0 0 1792 1792">\n    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg\n        enable-background="new 0 0 24 24"\n        viewBox="0 0 24 24"\n        xml:space="preserve"\n\n       >\n    <circle cx="12" cy="12" r="2.2"/>\n    <circle cx="12" cy="5" r="2.2"/>\n    <circle cx="12" cy="19" r="2.2"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 16 16">\n    <g transform="translate(0,-1036.3622)">\n        <path d="m 2,1050.3622 12,-12"\n              style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n        <path d="m 2,1038.3622 12,12"\n              style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/></svg>\n'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 128 128" xml:space="preserve">\n    <g>\n        <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125     16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594     112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125   "/>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" >\n\t<path d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z   M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg\n     viewBox="0 0 312 312">\n    <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none">\n        <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32\n-30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30\n25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27\n-503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960\n11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40\n-47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0\n-775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80\n-3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10\n164 12 777 10 l773 -3 3 -454z"/>\n        <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104\n190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4\n289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103\n-97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35\n-82 -78z"/>\n        <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0\n189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/>\n        <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95\n106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79\n79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95\n108 -6 10 -568 11 -577 1z"/>\n    </g>\n</svg>\n'
    }, function(e, t) {
        e.exports = '<svg role="img" viewBox="0 0 1792 1792">\n    <path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24"\n    >\n    <g>\n        <g transform="translate(-251.000000, -443.000000)">\n            <g transform="translate(215.000000, 119.000000)"/>\n            <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/>\n        </g>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 18 18">\n    <g fill-rule="evenodd" stroke="none" stroke-width="1">\n        <g transform="translate(-381.000000, -381.000000)">\n            <g transform="translate(381.000000, 381.000000)">\n                <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/>\n            </g>\n        </g>\n    </g>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/><path d="M0 0h48v48h-48z" fill="none"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/>\n    <path d="M0 0h48v48h-48z" fill="none"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/></svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/>\n</svg>'
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 270 270">\n\t<path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/>\n</svg>'
    }])
});
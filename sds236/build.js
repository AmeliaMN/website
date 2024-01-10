/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

define("nyt5/analytics", [], function() { var e = document.querySelector("link[rel='canonical']").href,
            t = ["_trackPageview"]; if (e) { var n = document.createElement("a");
            n.href = e, n.pathname != document.location.pathname && t.push(n.pathname) } _gaq = [
            ["_setAccount", "UA-9262032-1"], t
        ], require(["https://www.google-analytics.com/ga.js"]) }), define("nytg-vote-map/lib/topojson-utils.js", [], function(e) {
        function n(e, t, r) { var i; for (var s = 0, o = e.length; s < o; s++) i = e[s], i instanceof Array ? n(i, t, r) : r(i, t) }

        function r(e) { var t; return e.type == "GeometryCollection" ? t = e.geometries : e.type && (t = [e]), t || [] }

        function i(e, t) { var n = { type: e.type, coordinates: null },
                r = { type: "Feature", properties: e.properties || {}, geometry: n }; return "id" in e && (r.id = e.id), e.type == "Point" || e.type == "MultiPoint" ? n.coordinates = e.coordinates : e.arcs ? n.coordinates = o(e.type, e.arcs, t) : r.geometry = null, r }

        function s(e, t, n) { var r = []; for (var i = 0; i < e.length; i++) r.push(n(e[i], t)); return r }

        function o(e, t, n) { var r = c[e]; return r ? r(t, n) : null }

        function u(e, t) { return e.reduce(function(e, n) { var r = n < 0,
                    i = e.length === 0,
                    s = t[r ? ~n : n],
                    o = s.length,
                    u; if (r)
                    for (u = i ? o - 1 : o - 2; u >= 0; u--) e.push(s[u]);
                else
                    for (u = i ? 0 : 1; u < o; u++) e.push(s[u]); return e }, []) }

        function a(e, t) { return s(e, t, u) }

        function f(e, t) { return s(e, t, u) }

        function l(e, t) { return s(e, t, a) }

        function h(e) { if (!e.transform) return;
            (e.arcs || []).forEach(function(t) { var n = e.transform,
                    r = n.scale[0],
                    i = n.scale[1],
                    s = n.translate[0],
                    o = n.translate[1],
                    u = 0,
                    a = 0,
                    f; for (var l = 0, c = t.length; l < c; l++) f = t[l], u += f[0], a += f[1], f[0] = u * r + s, f[1] = a * i + o }), e.transform = null } var t = {};
        t.feature = function(e, t) { h(e); var n = { type: "FeatureCollection", features: [] }; return t.bbox && (n.bbox = t.bbox), n.features = r(t).map(function(t) { return i(t, e.arcs) }), n }, t.meshes = function(e, n, r) { var i = t.mesh(e, n, r); return { type: "GeometryCollection", geometries: i.coordinates.map(function(e) { return { type: "LineString", coordinates: e } }) } }, t.mesh = function(e, t, i) {
            function c(e, t) { e < 0 ? (a[~e] = t, f[~e] |= 2) : f[e] |= 1 }

            function p(e, t) { var n = e < 0 ? ~e : e,
                    r = f[n] | 0,
                    s = !1;
                r == 1 || r == 2 ? i ? s = i(u[t], u[t]) : s = !0 : r == 3 && e >= 0 && (i ? s = i(u[t], u[a[n]]) : s = !0), s && (l.push(o[n]), f[n] = 0) } var s = typeof Int32Array != "undefined",
                o = e.arcs,
                u = r(t),
                a = s ? new Int32Array(o.length) : [],
                f = s ? new Uint8Array(o.length) : [],
                l = []; return h(e), u.forEach(function(e, t) { if (!e.arcs) return;
                n(e.arcs, t, c) }), u.forEach(function(e, t) { if (!e.arcs) return;
                n(e.arcs, t, p) }), { type: "MultiLineString", coordinates: l } }; var c = { LineString: u, MultiLineString: f, Polygon: a, MultiPolygon: l }; return t }),
    function() {
        function l(e) { this.padDate = !1, this.tinyFormat = !1; var t, r = 0,
                i, s = [],
                o, u = ""; while (t = this.fmtRxp.exec(e)) { var a = t[0].length,
                    f = t[1];
                i = this.fmtRxp.lastIndex, o = e.substring(r, i - a), s.push(o), s.push(f), u += n.regexEscape(o) + "(" + this[f] + ")", r = i, o == "-" && (this.padDate = !0) } o = e.substr(r), s.push(o), u += n.regexEscape(o), u = "^" + u + "$", this.formatRxp = new RegExp(u), this.format = e, this.formatParts = s }

        function c(e) { if (!(this instanceof c)) return new c(e);
            this.ms = e instanceof Date ? e.getTime() : e }

        function h(e, t) { var r = t[1],
                i = t[2],
                s = t[3] ? parseInt(t[3].substr(1)) : void 0,
                o = t[4]; if (o == "%") return "%"; var u = o == "s",
                a = o == "x" || o == "X",
                f = o == "d" || o == "i",
                l = o == "f",
                c = !u,
                h = "",
                p = 0,
                d = !1,
                v = !1,
                m; if (u) m = String(e);
            else if (a) m = e.toString(16), o == "X" && (m = m.toUpperCase());
            else if (c) { m = n.numToStr(e, f ? 0 : s), m[0] == "-" && (v = !0, m = m.substr(1)), d = parseFloat(m) == 0; if (r.indexOf("'") != -1 || r.indexOf(",") != -1) m = n.addThousandsSep(m);
                d || (v ? h = "−" : r.indexOf("+") != -1 && (h = "+")) } if (i) { var g = m.length + h.length,
                    y = parseInt(i, 10); if (g < y) { p = y - g; var b = r.indexOf("0") == -1 ? " " : "0",
                        w = n.repeatString(b, p) } } return p == 0 ? m = h + m : b == "0" ? m = h + w + m : m = w + h + m, m }

        function p() { this.mx = this.my = 1, this.bx = this.by = 0 }

        function d() { arguments.length > 0 && this.setBounds.apply(this, arguments) }

        function m(e, t, n, r, i) { this.type = e, this.callback = n, this.listener = r || null, this.priority = i || 0, this.target = t }

        function g(e, t, n) { this.type = e, this.target = t, n && (r.copyNewParams(this, n), this.data = n) }

        function y() {}

        function w() { if (this instanceof w == 0) return new w; var e = [];
            this.cancel = function() { o("Tasks#cancel() stub") }, this.add = function(t) { return e.push(t), this }, this.run = function(t, r) { var i = this,
                    s = e,
                    o = [],
                    u = s.length; return e = [], s.length == 0 ? (t(), i.startWaiting()) : n.forEach(s, function(e, n) {
                    function r(e) { o[n] = e, --u === 0 && (t.apply(null, o), i.startWaiting()) } e(r) }), this } } var e = function() { var e = typeof module != "undefined" && !!module.exports,
                    t = typeof window != "undefined" && !e,
                    n = t && !!window.phantom && !!window.phantom.exit,
                    r = t && /MSIE ([0-9]+)/.exec(navigator.appVersion) && parseInt(RegExp.$1) || NaN; return { iPhone: t && !!navigator.userAgent.match(/iPhone/i), iPad: t && !!navigator.userAgent.match(/iPad/i), touchEnabled: t && "ontouchstart" in window, canvas: t && !!document.createElement("canvas").getContext, inNode: e, inPhantom: n, inBrowser: t, ieVersion: r, ie: !isNaN(r) } }(),
            t = t || {};
        t.VERBOSE = !0; var n = { getUniqueName: function(e) { var t = n.__uniqcount || 0; return n.__uniqcount = t + 1, (e || "__id_") + t }, parseUrl: function(t) { var n = /^(http|file|https):\/\/([^\/?#]+)([^?#]*)\??([^#?]*)#?(.*)/,
                        r = n.exec(t); return r ? { protocol: r[1], host: r[2], path: r[3], query: r[4], hash: r[5] } : (i("[Utils.parseUrl()] unable to parse:", t), null) }, buildUrl: function(e) { var t = ""; return t += (e.protocol || "http") + "://", t += e.host || o("buildUrl() Missing host name"), t += e.path || "", e.query && (t += "?" + e.query), e.hash && (t += "#" + e.hash), t }, keys: function(e) { var t = []; for (var n in e) e.hasOwnProperty(n) && t.push(n); return t }, reduce: function(e, t, n, r) { var i = e && e.length || 0; for (var s = 0; s < i; s++) n = t.call(r, n, e[s], s); return n }, mapFilter: function(e, t, r) { var i = n.isArrayLike(e),
                        s = [],
                        o, u, a, f;
                    i ? f = e.length : (u = n.keys(e), f = u.length); for (var l = 0; l < f; l++) a = i ? l : u[l], o = t.call(r, e[a], a), o !== void 0 && s.push(o); return s }, map: function(e, t, r) { var i = n.mapFilter(e, t, r); return n.isInteger(e.length) && i.length !== e.length && o("Utils.map() Sparse array; use Utils.mapFilter()"), i }, toArray: function(e) { var t;
                    n.isArrayLike(e) || o("Utils.toArray() requires an array-like object"); try { t = Array.prototype.slice.call(e, 0) } catch (r) { t = []; for (var i = 0, s = e.length; i < s; i++) t[i] = e[i] } return t }, isArrayLike: function(e) { return e ? n.isArray(e) ? !0 : n.isString(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? !0 : !1 : !1 }, isFunction: function(e) { return typeof e == "function" }, isObject: function(e) { return e === Object(e) }, isArray: function(e) { return e instanceof Array }, isNumber: function(e) { return e != null && e.constructor == Number }, isInteger: function(e) { return n.isNumber(e) && (e | 0) === e }, isString: function(e) { return e != null && e.toString === String.prototype.toString }, isBoolean: function(e) { return e === !0 || e === !1 }, clamp: function(e, t, n) { return e < t ? t : e > n ? n : e }, interpolate: function(e, t, n) { return e * (1 - n) + t * n }, getFunctionName: function(e) { var t = String(e).match(/^function ([^(]+)\(/); return t && t[1] || "" }, memoize: function(e, t) { var n = {},
                        r = 0,
                        i = function(i) { return (arguments.length != 1 || typeof i == "object") && o("[memoize] only works with one-arg functions that take strings or numbers"), i in n ? n[i] : (r++ > 1e3 && (n = {}), n[i] = e.call(t, i)) }; return i }, bind: function(e, t) { return function() { return e.apply(t, n.toArray(arguments)) } }, log: function(t) { e.inNode ? process.stderr.write(t + "\n") : typeof console != "undefined" && console.log && (console.log.call ? console.log.call(console, t) : console.log(t)) }, toString: function(e, t) { var r = typeof e,
                        i; if (r == "function") i = '"[' + (n.getFunctionName(e) || "function") + '()]"';
                    else if (e == null || n.isNumber(e) || n.isBoolean(e)) i = String(e);
                    else if (n.isArray(e) || e.byteLength > 0) i = "[" + n.map(e, function(e) { return n.toString(e, !0) }).join(", ") + "]";
                    else if (e.constructor == Object) { var s = []; for (var o in e) { var u = /^[A-Za-z_][A-Za-z0-9_]*$/.test(o) ? o : '"' + n.addslashes(o) + '"';
                            s.push(u + ":" + n.toString(e[o], !0)) } i = "{" + s.join(", ") + "}" } else e.nodeName ? i = '"[' + e.nodeName + (e.id ? " id=" + e.id : "") + ']"' : r == "object" && e.toString === Object.prototype.toString ? i = '"[' + (n.getFunctionName(e.constructor) || "unknown object") + ']"' : (i = String(e), t && (i = '"' + n.addslashes(i) + '"')); return i }, strval: function(e) { var t = n.toString(e),
                        r = 800; return t.length > r && (t = t.substr(0, r - 4) + " ..."), t }, serialize: function(e) { return n.toString(e, !0) }, addslashes: function(e) { return (e + "").replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0") }, regexEscape: function(e) { return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") }, flatten: function(e) { var t = {}; for (var n in e) t[n] = e[n]; return t }, defaults: function(e) { for (var t = 1, n = arguments.length; t < n; t++) { var r = arguments[t] || {}; for (var i in r) i in e == 0 && r.hasOwnProperty(i) && (e[i] = r[i]) } return e }, extend: function(e) { for (var t = 1, n = arguments.length; t < n; t++) { var r = arguments[t] || {}; for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i]) } return e } },
            r = { copyAllParams: n.extend, copyNewParams: n.defaults, extendPrototype: function(e, t) { n.extend(e.prototype, n.flatten(t.prototype || t)), e.prototype.constructor = e }, inherit: function(e, t) { var r = function() { this.__super__ == r && (this.__super__ = t.prototype.__super__, t.apply(this, arguments), delete this.__super__) };
                    r.prototype = t.prototype || t, e.prototype = n.extend(new r, e.prototype), e.prototype.constructor = e, e.prototype.__super__ = r }, subclass: function(e) { var t = function() { var e = this.__constructor__ || this.__super__;
                        e.apply(this, n.toArray(arguments)) };
                    r.inherit(t, e); for (var i = 1; i < arguments.length; i++) r.extendPrototype(t, arguments[i]); return t.constructor = function(e) { return t.prototype.__constructor__ = e, t }, t }, namespaceExists: function(e) { var t = r.global(),
                        i = e.split("."),
                        s = n.reduce(i, function(e, n) { return e !== !1 && (t[n] == null ? e = !1 : t = t[n]), e }, !0); return s }, global: function() { return function() { return this }() }, getNamespace: function(e, t) { var n = t || this.global(),
                        r = e.split("."); for (var i = 0, s = r.length; i < s; i++) { var o = r[i]; if (!o) continue;
                        n[o] || (n[o] = {}), n = n[o] } return n }, readParam: function(e, t) { return e === undefined ? t : e }, extendNamespace: function(e, t) { var n = typeof e == "string" ? r.getNamespace(e) : e;
                    r.copyAllParams(n, t) }, exportObject: function(t, n, i) { typeof define == "function" && define.amd && define("nytg-vote-map/lib/mbloch-utils", [], function() { return n }); if (e.inNode) module.exports = n;
                    else { i = i || this.global(); var s = t.split("."),
                            u = s.pop(); if (!u) o("Opts.exportObject() Invalid name:", t);
                        else { var a = {};
                            a[u] = n, r.extendNamespace(s.join("."), a) } } } },
            i = function() { t.VERBOSE && n.log(n.map(arguments, n.strval).join(" ")) },
            s = i,
            o = function() { var e = n.map(arguments, n.strval).join(" "); throw new Error(e) },
            u = { stack: [], verbose: !0, start: function(e) { u.verbose && e && s(u.prefix() + e), u.stack.push(+(new Date)) }, stop: function(e) { var t = u.stack.pop(),
                        n = +(new Date) - t; if (u.verbose) { var r = u.prefix() + n + "ms";
                        e && (r += " " + e), s(r) } return n }, prefix: function() { var e = "- ",
                        t = this.stack.length; while (t--) e = "-" + e; return e } };
        n.sortArrayByKeys = function(e, t, r) { var i = n.getSortedIds(t, r);
            n.reorderArray(e, i) }, n.getSortedIds = function(e, t) { var r = n.range(e.length); return n.sortArrayIndex(r, e, t), r }, n.sortArrayIndex = function(e, t, n) { var n = n !== !1;
            e.sort(function(e, r) { var i = t[e],
                    s = t[r]; return n && i > s || !n && i < s || i === s && e < r ? 1 : -1 }) }, n.reorderArray = function(e, t) { var r = t.length,
                i = []; for (var s = 0; s < r; s++) { var u = t[s];
                (u < 0 || u >= r) && o("Out-of-bounds array idx"), i[s] = e[u] } n.replaceArray(e, i) }, n.sortOn = function(e) { var t = Array.prototype.slice.call(arguments, 1),
                n = function(e, n) { for (var r = 0, i = t.length; r < i;) { var s = t[r++],
                            u = t[r++] !== !1,
                            a = e[s],
                            f = n[s];
                        (a === void 0 || f === void 0) && o("#sortOn() Missing key:", s); if (a !== f) return u && a > f || !u && f > a ? 1 : -1 } return 0 }; return e.sort(n), e }, n.sortNumbers = function(e, t) { var n = t !== !1 ? function(e, t) { return e - t } : function(e, t) { return t - e };
            Array.prototype.sort.call(e, n) }, n.getComparator = function(e) { var t = t !== !1; return function(e, n) { var r = 0; return n == null ? r = e == null ? 0 : -1 : e == null ? r = 1 : e < n ? r = t ? -1 : 1 : e > n ? r = t ? 1 : -1 : e !== e ? r = 1 : n !== n && (r = -1), r } }, n.genericSort = function(e, t) { var r = n.getComparator(t); return Array.prototype.sort.call(e, r), e }, n.quicksort = function(e, t) { return n.quicksortPartition(e, 0, e.length - 1), t === !1 && Array.prototype.reverse.call(e), e }, n.quicksortPartition = function(e, t, r) { var i = t,
                s = r,
                o, u; while (i < r) { o = e[t + r >> 1]; while (i <= s) { while (e[i] < o) i++; while (e[s] > o) s--;
                    i <= s && (u = e[i], e[i] = e[s], e[s] = u, i++, s--) } t < s && n.quicksortPartition(e, t, s), t = i, s = r } }, n.sortOnKeyFunction = function(e, t) { if (!e || e.length == 0) return; var n = e[0].constructor.prototype,
                r = n.toString;
            n.toString = t, e.sort(), n.toString = r }, n.merge = function(e, t) { return (!n.isArray(e) || !n.isArray(t)) && o("Usage: Utils.merge(destArray, srcArray);"), t.length > 0 && e.push.apply(e, t), e }, n.difference = function(e, t) { var r = n.arrayToIndex(t); return n.mapFilter(e, function(e) { return e in r ? void 0 : e }) }, n.contains = function(e, t) { if (n.isString(e)) return e.indexOf(t) != -1; if (n.isArrayLike(e)) return n.indexOf(e, t) != -1;
            o("Expected Array or String argument") }, n.some = function(e, t) { return n.reduce(e, function(e, n) { return e || t(n) }, !1) }, n.every = function(e, t) { return n.reduce(e, function(e, n) { return e && t(n) }, !0) }, n.find = function(e, t, r) { var i = n.filter(e, t, r); return i.length === 0 ? null : i[0] }, n.indexOf = function(e, t, n) { n && o("Utils.indexOf() No longer supports property argument"); var r = t !== t; for (var i = 0, s = e.length || 0; i < s; i++) { if (e[i] === t) return i; if (r && e[i] !== e[i]) return i } return -1 }, n.range = function(e, t, n) { var r = [],
                i = t === void 0 ? 0 : t,
                s = n === void 0 ? 1 : n; while (e--) r.push(i), i += s; return r }, n.range2 = function(e, t, r) { var i = Math.floor((t - e) / r) + 1; return n.range(i, e, r) }, n.repeat = function(e, t) { var n = [],
                r; for (var i = 0; i < e; i++) r = t(i), r !== void 0 && (n[i] = r); return n.length > 0 ? n : void 0 }, n.sum = function(e, t) { n.isArrayLike(e) || o("Utils.sum() expects an array, received:", e); var r = 0,
                i = 0,
                s; for (var u = 0, a = e.length; u < a; u++) s = e[u], s ? r += s : isNaN(s) && i++; return t && (t.nan = i), r }, n.getArrayBounds = function(e) { var t = Infinity,
                n = -Infinity,
                r = 0,
                i; for (var s = 0, o = e.length; s < o; s++) i = e[s], i !== i && r++, i < t && (t = i), i > n && (n = i); return { min: t, max: n, nan: r } }, n.average = function(e) { return e.length || o("Tried to find average of empty array"), n.sum(e) / e.length }, n.invert = function(e) { var t = {}; for (var n in e) t[e[n]] = n; return t }, n.getKeys = n.keys, n.values = n.getValues = function(e) { var t = []; for (var n in e) e.hasOwnProperty(n) && t.push(e[n]); return t }, n.uniq = function(e) { var t = {}; return n.mapFilter(e, function(e) { if (e in t == 0) return t[e] = !0, e }) }, n.pluck = function(e, t) { return n.map(e, function(e) { return e[t] }) }, n.findAll = n.filter = function(e, t, r) { return n.mapFilter(e, function(e, n) { if (t.call(r, e, n)) return e }) }, n.filterObject = function(e, t, r) { return n.reduce(e, function(e, n, i) { return t.call(r, n, i) && (e[i] = n), e }, {}) }, n.count = function(e, t, r) { return n.filter(e, t, r).length }, n.getValueCounts = function(e) { return n.reduce(e, function(e, t, n) { return e[t] = t in e ? e[t] + 1 : 1, e }, {}) }, n.indexOn = function(e, t) { return n.reduce(e, function(e, n) { return e[n[t]] = n, e }, {}) }, n.groupBy = function(e, t) { return n.reduce(e, function(e, n) { var r = n[t]; return r in e ? e[r].push(n) : e[r] = [n], e }, {}) }, n.arrayToIndex = function(e, t) { var r = arguments.length > 1; return n.reduce(e, function(e, n) { return n in e && i("#arrayToIndex() Duplicate key:", n), e[n] = r ? t : !0, e }, {}) }, n.forEach = function(e, t, r) { n.mapFilter(e, t, r) }, n.multiMap = function(e) { var t = "Usage: Utils.multiMap(callback, arr1, [arr2, ...])";
            n.isFunction(e) || o(t); var r = [],
                i = r.slice.call(arguments, 1),
                s = 0;
            n.forEach(i, function(e, t) { n.isArrayLike(e) ? s == 0 ? s = e.length : e.length != s && o("#multiMap() mismatched source arrays") : (r[t] = e, i[t] = null) }); var u = []; for (var a = 0; a < s; a++) { for (var f = 0, l = i.length; f < l; f++) i[f] && (r[f] = i[f][a]);
                u[a] = e.apply(null, r) } return u }, n.initializeArray = function(e, t) { for (var n = 0, r = e.length; n < r; n++) e[n] = t; return e }, n.newArray = function(e, t) { return n.initializeArray(new Array(e), t) }, n.replaceArray = function(e, t) { e.splice(0, e.length), e.push.apply(e, t) }, n.randomizeArray = function(e) { var t = e.length,
                n, r; while (t > 0) n = Math.random() * t | 0, r = e[n], e[n] = e[--t], e[t] = r; return e }, n.repeatString = function(e, t) { var n = ""; for (var r = 0; r < t; r++) n += e; return n }, n.endsWith = function(e, t) { return e.indexOf(t, e.length - t.length) !== -1 }, n.lpad = function(e, t, r) { return r = r || " ", e = String(e), n.repeatString(r, t - e.length) + e }, n.rpad = function(e, t, r) { return r = r || " ", e = String(e), e + n.repeatString(r, t - e.length) }, n.trim = function(e) { return n.ltrim(n.rtrim(e)) }; var a = /^\s+/;
        n.ltrim = function(e) { return e.replace(a, "") }; var f = /\s+$/;
        n.rtrim = function(e) { return e.replace(f, "") }, n.lreplace = function(e, t) { return e.indexOf(t) == 0 && (e = e.substr(t.length)), e }, n.capitalizeWord = function(e) { return e ? e.charAt(0).toUpperCase() + e.substr(1) : "" }, n.addThousandsSep = function(e) { var t = "",
                n = e[0] == "-" ? 1 : 0,
                r = e.indexOf("."),
                i = e.length,
                s = (r == -1 ? i : r) - 3; while (s > n) t = "," + e.substring(s, i) + t, i = s, s -= 3; return e.substring(0, i) + t }, n.numToStr = function(e, t) { return t >= 0 ? e.toFixed(t) : String(e) }, n.formatNumber = function(e, t, r, i) { var s; return isNaN(e) ? s = r || "-" : (s = n.numToStr(e, t), s = n.addThousandsSep(s), i && parseFloat(s) > 0 && (s = "+" + s)), s }, n.formatDate = function(e, t) { return n.dateFormatter(t)(e) }, n.parseDate = function(e, t) { return n.dateParser(t)(e) }, n.reformatDate = function(e, t, r) { return n.formatDate(n.parseDate(dateString, t), r) }, n.dateFormatter = function(e) { var t = new l(e); return function(e) { return t.formatDate(e) } }, n.dateParser = function(e) { var t = new l(e); return function(e) { return t.parseDate(e) } }, l.prototype = function() { var e = {},
                t = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec",
                n = "Mo|Tu|We|Th|Fr|Sa|Su"; return e.moArr = t.split("|"), e.fmtRxp = /%(a|A|b|B|d|m|y|Y|H|I|M|S|p)/g, e.initTime = Date.UTC(2e3, 0, 1), e.a = e.A = "(?:" + n + ")[\\w]*\\.?", e.b = e.B = "(?:" + t + ")[\\w]*\\.?", e.p = "[ap]\\.?m\\.", e.d = e.m = e.H = e.I = "[0-9]{1,2}", e.M = e.S = e.y = "[0-9]{2}", e.Y = "[0-9]{4}", e.months = "January|February|March|April|May|June|July|August|September|October|November|December".split("|"), e.monthAbbrevs = "Jan.|Feb.|March|April|May|June|July|Aug.|Sept.|Oct.|Nov.|Dec.".split("|"), e.tinyMonthAbbrevs = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|"), e.days = "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday".split("|"), e.dayAbbrevs = "Sun.|Mon.|Tues.|Wed.|Thurs.|Fri.|Sat.|Sun.".split("|"), e.tinyDayAbbrevs = "Sun|Mon|Tue|Wed|Thu|Fri|Sat|Sun".split("|"), e.AM = "A.M.", e.PM = "P.M.", e }(), l.prototype.formatDate = function(e) { var t = this.formatParts.concat(); for (var n = 0; n < t.length; n++)
                if (n % 2 == 1) { var r = t[n],
                        i = this.formatDatePart(e, r);
                    t[n] = i }
            return t.join("") }, l.prototype.parseDate = function(e) { var t = this.formatRxp.exec(e),
                n = new Date(this.initTime); if (!t) return i("[DateString.parseDate()] unable to parse:", e, "fmt:", this.format), null; for (var r = 1, s = t.length; r < s; r++) { var o = t[r],
                    u = this.formatParts[r * 2 - 1];
                this.parseDatePart(n, u, o) } return n }, l.prototype.parseDatePart = function(e, t, r) { var i; switch (t) {
                case "Y":
                    e.setUTCFullYear(parseInt(r, 10)); break;
                case "d":
                    e.setUTCDate(parseInt(r, 10)); break;
                case "m":
                    e.setUTCMonth(parseInt(r, 10) - 1); break;
                case "I":
                case "H":
                    e.setUTCHours(parseInt(r, 10)); break;
                case "M":
                    e.setUTCMinutes(parseInt(r, 10)); break;
                case "S":
                    e.setUTCSeconds(parseInt(r, 10)); break;
                case "p":
                case "P":
                    i = e.getUTCHours(); var s = /[pP]/.test(r);!s && i == 12 ? e.setUTCHours(0) : s && i != 12 && e.setUTCHours(i + 12); break;
                case "b":
                case "B":
                    i = n.indexOf(this.moArr, r.substr(0, 3)), i != -1 && e.setUTCMonth(i); break;
                case "y":
                    i = parseInt(r, 10), i > 20 ? i += 1900 : i += 2e3, e.setFullYear(i); break;
                case "A":
                case "a":
            } }, l.prototype.formatDatePart = function(e, t) { var r, i = "",
                s = 0; switch (t) {
                case "y":
                    i = String(e.getUTCDate()); break;
                case "Y":
                    i = String(e.getUTCFullYear()); break;
                case "A":
                    r = e.getUTCDay(), i = this.days[e.getUTCDay()]; break;
                case "a":
                    i = (this.tinyFormat ? this.tinyDayAbbrevs : this.dayAbbrevs)[e.getUTCDay()]; break;
                case "B":
                    i = this.months[e.getUTCMonth()]; break;
                case "b":
                    i = (this.tinyFormat ? this.tinyMonthAbbrevs : this.monthAbbrevs)[e.getUTCMonth()]; break;
                case "d":
                    i = String(e.getUTCDate()), s = this.padDate ? 2 : 0; break;
                case "m":
                    i = String(e.getUTCMonth() + 1), s = this.padDate ? 2 : 0; break;
                case "I":
                    r = e.getUTCHours(), r %= 12, r == 0 && (r = 12), i = String(r), s = 1; break;
                case "H":
                    i = String(e.getUTCHours()), s = 2; break;
                case "M":
                    i = String(e.getUTCMinutes()), s = 2; break;
                case "S":
                    i = String(e.getUTCSeconds()), s = 2; break;
                case "p":
                case "P":
                    r = e.getUTCHours(), i = r < 12 || r == 24 ? this.AM : this.PM, t == "p" && (i = i.toLowerCase()) } return s > i.length && (i = n.lpad(i, s, "0")), i }, t.MS_PER_HOUR = 36e5, t.MS_PER_DAY = t.MS_PER_HOUR * 24, c.prototype.addDays = function(e) { return this.ms += Math.round(e * t.MS_PER_DAY), this }, c.prototype.addHours = function(e) { return this.ms += Math.round(e * t.MS_PER_HOUR), this }, c.prototype.getTime = function() { return this.ms }, c.prototype.getDate = function() { return new Date(this.ms) }, n.addHours = function(e, t) { return (new c(e)).addHours(t).getDate() }, n.addDays = function(e, t) { return (new c(e)).addDays(t).getDate() }, n.roundDateToSunday = function(e) { return n.addDays(e, -e.getUTCDay()) }, n.floorDate = function(e) { return e = new Date(e.getTime()), e.setUTCHours(0), e.setUTCMinutes(0), e.setUTCSeconds(0), e.setUTCMilliseconds(0), e }, n.ceilDate = function(e) { return e = n.floorDate(e), e.setUTCMilliseconds(t.MS_PER_DAY - 1), e }, n.format = function(e) { var t = n.formatter(e),
                r = t.apply(null, Array.prototype.slice.call(arguments, 1)); return r }, n.formatter = function(e) { var t = /%([\',+0]*)([1-9]?)((?:\.[1-9])?)([sdifxX%])/g,
                r = [],
                i = [],
                s = 0,
                u = 0,
                a, f; while (f = t.exec(e)) a = e.substring(s, t.lastIndex - f[0].length), f[0] == "%%" && (f = "%", u++), r.push(a), i.push(f), s = t.lastIndex; return r.push(e.substr(s)), u > 0 && (i = n.filter(i, function(e, t) { return e !== "%" ? !0 : (r[t] += "%" + r.splice(t + 1, 1)[0], !1) })),
                function() { var t = r[0],
                        s = arguments.length,
                        u;
                    s != i.length && o("[Utils.format()] Data does not match format string; format:", e, "data:", arguments); for (var a = 0; a < s; a++) arguments[a] == "s?" ? (n.isInteger(arguments[a - 1]) ? u = arguments[a - 1] : n.isInteger(arguments[a + 1]) ? u = arguments[a + 1] : u = 1, t += u == 1 ? "" : "s") : t += h(arguments[a], i[a]), t += r[a + 1]; return t } }, p.prototype.isNull = function() { return !this.mx || !this.my || isNaN(this.bx) || isNaN(this.by) }, p.prototype.invert = function() { var e = new p; return e.mx = 1 / this.mx, e.my = 1 / this.my, e.bx = -this.bx / this.mx, e.by = -this.by / this.my, e }, p.prototype.transform = function(e, t, n) { return n = n || [], n[0] = e * this.mx + this.bx, n[1] = t * this.my + this.by, n }, p.prototype.toString = function() { return n.toString(n.extend({}, this)) }, d.prototype.toString = function() { return JSON.stringify({ xmin: this.xmin, xmax: this.xmax, ymin: this.ymin, ymax: this.ymax }) }, d.prototype.toArray = function() { return this.hasBounds() ? [this.xmin, this.ymin, this.xmax, this.ymax] : [] }, d.prototype.hasBounds = function() { return this.xmin <= this.xmax && this.ymin <= this.ymax }, d.prototype.sameBounds = d.prototype.equals = function(e) { return e && this.xmin === e.xmin && this.xmax === e.xmax && this.ymin === e.ymin && this.ymax === e.ymax }, d.prototype.width = function() { return this.xmax - this.xmin || 0 }, d.prototype.height = function() { return this.ymax - this.ymin || 0 }, d.prototype.area = function() { return this.width() * this.height() || 0 }, d.prototype.empty = function() { return this.xmin = this.ymin = this.xmax = this.ymax = void 0, this }, d.prototype.setBounds = function(e, t, r, i) { return arguments.length == 1 && (n.isArrayLike(e) ? (t = e[1], r = e[2], i = e[3], e = e[0]) : (t = e.ymin, r = e.xmax, i = e.ymax, e = e.xmin)), this.xmin = e, this.ymin = t, this.xmax = r, this.ymax = i, (e > r || t > i) && this.update(), this }, d.prototype.centerX = function() { var e = (this.xmin + this.xmax) * .5; return e }, d.prototype.centerY = function() { var e = (this.ymax + this.ymin) * .5; return e }, d.prototype.containsPoint = function(e, t) { return e >= this.xmin && e <= this.xmax && t <= this.ymax && t >= this.ymin ? !0 : !1 }, d.prototype.containsBufferedPoint = d.prototype.containsCircle = function(e, t, n) { return e + n > this.xmin && e - n < this.xmax && t - n < this.ymax && t + n > this.ymin ? !0 : !1 }, d.prototype.intersects = function(e) { return e.xmin <= this.xmax && e.xmax >= this.xmin && e.ymax >= this.ymin && e.ymin <= this.ymax ? !0 : !1 }, d.prototype.contains = function(e) { return e.xmin >= this.xmin && e.ymax <= this.ymax && e.xmax <= this.xmax && e.ymin >= this.ymin ? !0 : !1 }, d.prototype.shift = function(e, t) { this.setBounds(this.xmin + e, this.ymin + t, this.xmax + e, this.ymax + t) }, d.prototype.padBounds = function(e, t, n, r) { this.xmin -= e, this.ymin -= t, this.xmax += n, this.ymax += r }, d.prototype.scale = function(e, t) { var n = (this.xmax - this.xmin) * .5,
                r = (this.ymax - this.ymin) * .5,
                i = e - 1,
                s = t === undefined ? i : t - 1;
            this.xmin -= n * i, this.ymin -= r * s, this.xmax += n * i, this.ymax += r * s }, d.prototype.cloneBounds = d.prototype.clone = function() { return new d(this.xmin, this.ymin, this.xmax, this.ymax) }, d.prototype.clearBounds = function() { this.setBounds(new d) }, d.prototype.mergePoint = function(e, t) { this.xmin === void 0 ? this.setBounds(e, t, e, t) : (e < this.xmin ? this.xmin = e : e > this.xmax && (this.xmax = e), t < this.ymin ? this.ymin = t : t > this.ymax && (this.ymax = t)) }, d.prototype.fillOut = function(e, t, n) { arguments.length < 3 && (t = .5, n = .5); var r = this.width(),
                i = this.height(),
                s = r / i,
                o; return isNaN(e) || e <= 0 || (s < e ? (o = i * e - r, this.xmin -= (1 - t) * o, this.xmax += t * o) : (o = r / e - i, this.ymin -= (1 - n) * o, this.ymax += n * o)), this }, d.prototype.update = function() { var e;
            this.xmin > this.xmax && (e = this.xmin, this.xmin = this.xmax, this.xmax = e), this.ymin > this.ymax && (e = this.ymin, this.ymin = this.ymax, this.ymax = e) }, d.prototype.transform = function(e) { return this.xmin = this.xmin * e.mx + e.bx, this.xmax = this.xmax * e.mx + e.bx, this.ymin = this.ymin * e.my + e.by, this.ymax = this.ymax * e.my + e.by, this.update(), this }, d.prototype.getTransform = function(e, t) { var n = new p; return n.mx = e.width() / this.width(), n.bx = e.xmin - n.mx * this.xmin, t ? (n.my = -e.height() / this.height(), n.by = e.ymax - n.my * this.ymin) : (n.my = e.height() / this.height(), n.by = e.ymin - n.my * this.ymin), n }, d.prototype.mergeCircle = function(e, t, n) { n < 0 && (n = -n), this.mergeBounds([e - n, t - n, e + n, t + n]) }, d.prototype.mergeBounds = function(e) { var t, n, r, i; return e instanceof d ? (t = e.xmin, n = e.ymin, r = e.xmax, i = e.ymax) : arguments.length == 4 ? (t = arguments[0], n = arguments[1], r = arguments[2], i = arguments[3]) : e.length == 4 ? (t = e[0], n = e[1], r = e[2], i = e[3]) : o("Bounds#mergeBounds() invalid argument:", e), this.xmin === void 0 ? this.setBounds(t, n, r, i) : (t < this.xmin && (this.xmin = t), n < this.ymin && (this.ymin = n), r > this.xmax && (this.xmax = r), i > this.ymax && (this.ymax = i)), this }, n.getClassId = function(e, t) { var n = -1; if (!isNaN(e)) { n = 0; for (var r = 0, i = t.length; r < i; r++) { var s = t[r]; if (e < s) break;
                    n = r + 1 } } return n }, n.getInnerBreaks = function(e, t, r) { var i = n.getClassId(e, r),
                s = n.getClassId(t, r),
                o = []; if (i == s) return o; if (i < s) var u = i,
                a = s,
                f = !1;
            else u = s, a = i, f = !0; for (var l = u; l < a; l++) o.push(r[l]); return f && o.reverse(), o }; var v = { memos: {}, nameIndex: { black: "#000000", white: "#ffffff" }, getRGB: function(e, t, n) { return e << 16 | t << 8 | n }, getR: function(e) { return e >> 16 & 255 }, getG: function(e) { return e >> 8 & 255 }, getB: function(e) { return e & 255 } };
        v.interpolate = function(e, t, r) { var i = n.interpolate(v.getR(e), v.getR(t), r),
                s = n.interpolate(v.getG(e), v.getG(t), r),
                o = n.interpolate(v.getB(e), v.getB(t), r),
                u = v.getRGB(i, s, o); return u }, n.parseHexColor = v.parseHex = function(e) { var t; /^#[0-9a-f]{6}$/i.test(e) ? t = e : /^#[0-9a-f]{3}$/i.test(e) ? t = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] : e in v.nameIndex ? t = v.nameIndex[e] : o("Color.parseHex() Invalid color:", e); var n = parseInt(t.substr(1, 2), 16),
                r = parseInt(t.substr(3, 2), 16),
                i = parseInt(t.substr(5, 2), 16); return v.getRGB(n, r, i) }, v.rgbToHex = function(e) { n.isNumber(e) || o("Expected a number."); var t = e.toString(16); while (t.length < 6) t = "0" + t; return "#" + t }, v.rgbAlphaToRgba = function(e, t) { return "rgba(" + v.getR(e) + "," + v.getG(e) + "," + v.getB(e) + "," + t.toFixed(2) + ")" }, v.hexAlphaToRgba = function(e, t) { var n = v.parseHex(e); return v.rgbAlphaToRgba(n, t) }, n.parseColor = function(e) { return n.isNumber(e) ? e : n.parseHexColor(e) }, n.formatColorAsCSS = v.formatAsCSS = function(e, t) { var r = v.memos,
                i = e + (t === undefined ? "" : "|" + t),
                s; return i in r ? r[i] : (t < 1 ? n.isString(e) ? s = v.hexAlphaToRgba(e, t) : s = v.rgbAlphaToRgba(e, t) : n.isString(e) ? s = e : s = v.rgbToHex(e), r[i] = s, s) }, n.getOverlayColor = function(e, t, r, i) { var s = n.parseColor(e),
                o = v.calcOverlayColor(s, t, r),
                u = Math.min(i || 1, o.alpha); return n.formatColorAsCSS(o.rgb, u) }, v.calcOverlayColor = function(e, t, n) { t = t == null ? 16777215 : t, n = n == null ? 0 : n; var r = this.getMinAlpha(e, t);
            n > r && (r = n); var i = this.adjustColorByAlpha(e, r, t); return { alpha: r, rgb: i } }, v.getMinChannelAlpha = function(e, t) { var n = .1,
                r = (e - (1 - n) * t) / n,
                i = n; return r < 0 ? i = 1 - e / t : r > 255 && (i = (e - t) / (255 - t)), t < e && t > 102 && (i = .35), i }, v.getMinAlpha = function(e, t) { var n = this.getR(e),
                r = this.getG(e),
                i = this.getB(e),
                s = this.getR(t),
                o = this.getG(t),
                u = this.getB(t),
                a = this.getMinChannelAlpha(n, s),
                f = this.getMinChannelAlpha(r, o),
                l = this.getMinChannelAlpha(i, u); return Math.max(a, l, f) }, v.flattenChannel = function(e, t, n) { var r = e * t,
                i = (1 - t) * n; return r + i }, v.flattenChannels = function(e, t, n, r) { e.length !== t.length && o("Color.mergeChannels() mismatched channel / alpha data"); var i = n,
                s; for (var u = 0; u < e.length; u++) s = t[u], r && (s = (s * 255 | 0) / 255), i = v.flattenChannel(e[u], t[u], i), r && (i |= 0); return Math.floor(i) }, v.flattenColors = function(e, t, r, i) { var s = n.map(e, v.getR),
                o = n.map(e, v.getG),
                u = n.map(e, v.getB),
                a = v.flattenChannels(s, t, v.getR(r), i),
                f = v.flattenChannels(o, t, v.getG(r), i),
                l = v.flattenChannels(u, t, v.getB(r), i); return v.getRGB(a, f, l) }, v.flattenColor = function(e, t, n) { return v.flattenColors([e], [t], n, !0) }, v.adjustColorByAlpha = function(e, t, r) { r === undefined && (r = 16777215); var i = this.getR(e),
                s = this.getG(e),
                o = this.getB(e),
                u = this.getR(r),
                a = this.getG(r),
                f = this.getB(r),
                l = (i - (1 - t) * u) / t,
                c = (s - (1 - t) * a) / t,
                h = (o - (1 - t) * f) / t; return l = Math.round(n.clamp(l, 0, 255)), c = Math.round(n.clamp(c, 0, 255)), h = Math.round(n.clamp(h, 0, 255)), this.getRGB(l, c, h) }, m.prototype.trigger = function(e) { e ? (e.target != this.target || e.type != this.type) && o("[Handler] event target/type have changed.") : (e = new g(this.type), e.target = this.target), this.callback.call(this.listener, e) }, g.prototype.stopPropagation = function() { this.__stop__ = !0 }, g.prototype.__stop__ = !1, g.prototype.toString = function() { var e = "type:" + this.type + ", target: " + n.toString(this.target); return this.data && (e += ", data:" + n.toString(this.data)), "[EventData]: {" + e + "}" }, y.prototype.dispatchEvent = function(e, t, n) { var r, i = this._handlers; if (i)
                for (var s = 0, o = i.length; s < o; s++) { var u = i[s]; if (u.type == e && (!n || n == u.listener)) { if (!r) r = new g(e, this, t);
                        else if (r.__stop__) break;
                        u.trigger(r) } } }, y.prototype.addEventListener = y.prototype.on = function(e, t, n, r) { n = n || this, r = r || 0; var i = new m(e, this, t, n, r);
            this.countEventListeners(e) === 0 && this.dispatchEvent("add_" + e); var s = this._handlers || (this._handlers = []),
                o = s.length; while (--o >= 0 && s[o].priority < i.priority); return s.splice(o + 1, 0, i), this }, y.prototype.countEventListeners = function(e) { var t = this._handlers,
                n = t && t.length || 0,
                r = 0; if (!e) return n; for (var i = 0; i < n; i++) t[i].type === e && r++; return r }, y.prototype.removeEventListener = function(e, t, n) { n = n || this; var r = this.removeEventListeners(e, t, n); return e && this.countEventListeners(e) === 0 && this.dispatchEvent("remove_" + e), r }, y.prototype.removeEventListeners = function(e, t, n) { var r = this._handlers,
                i = [],
                s = 0; for (var o = 0; r && o < r.length; o++) { var u = r[o];!!e && e != u.type || !!t && t != u.callback || !!n && n != u.listener ? i.push(u) : s += 1 } return this._handlers = i, s }; var b = r.subclass(y);
        b.prototype.waitFor = function(e) { return e || o("#waitFor() missing arg; this:", this), this.__tasks || (this.__tasks = new w), this.__tasks.add(function(t) { e.on("ready", t) }), this }, b.prototype.isReady = function() { return !!this._ready }, b.prototype.addEventListener = b.prototype.on = function(e, t, n, r) { return e === "ready" && this.isReady() ? t.call(n || this, new g(e)) : y.prototype.on.call(this, e, t, n, r), this }, b.prototype.dispatchEvent = function(e, t, n) { y.prototype.dispatchEvent.call(this, e, t, n), e == "ready" && this.removeEventListeners(e, null) }, b.prototype.startWaiting = function() {
            function t() { e._ready = !0, e.handleReadyState && e.handleReadyState(), e.dispatchEvent("ready") } var e = this; return this.__tasks ? this.__tasks.run(t) : t(), this }, r.inherit(w, b); var E = { utils: n, opts: r, env: e, trace: i, error: o, Bounds: d, EventDispatcher: y, Waiter: b };
        r.exportObject("nytg.mbloch", E) }(),
    define("nytg-vote-map/lib/vmap-utils", ["underscore/nyt", "./mbloch-utils", "d3/3"],
        function(e, t, n) {
            var r = {},
                i = n.format(".1f"),
                s = n.format(",d"),
                o = n.geo.path().projection(null);
            r.limitScaleDomain = function(e, t) { var n = [e(t[0]), e(t[1])]; return e.copy().domain(t).range(n) },
                r.formatVoteCount = function(e) { throw "TODO: Implement formatVoteCount()" },
                r.formatVotePercent = function(e) { return i(e || 0) + "%" },
                r.calcVoteMargin = function(t, n, i) { var s = e.without(i, n),
                        o = r.indexOfLeader(t, s),
                        u = t[n],
                        a; return o == -1 ? a = u : a = (u || 0) - t[s[o]], a },
                r.findLeader = function(e, t) { var n = r.indexOfLeader(e, t); return n == -1 ? "" : t[n] },
                r.indexOfLeader = function(e, t) { var n = -1,
                        r = -Infinity,
                        i; for (var s = 0; s < t.length; s++) i = e[t[s]], i > r ? (r = i, n = s) : i === r && (n = -1); return n },
                r.pointInBBox = function(e, t, n) { return e >= n[0] && e <= n[2] && t >= n[1] && t <= n[3] },
                r.getHatchId = function(e, t) { if (e.length != 2) throw new Error("Invalid hash style; need two colors"); var n = e.join("_").replace(/#/g, ""); return "_h_" + n + "_" + (t || "x") },
                r.getFeatures = function(t) { var n = null; return e.isArray(t) ? n = t : t.type == "FeatureCollection" ? n = t.features : t.type == "GeometryCollection" ? n = t.geometries : t.type && (n = [t]), n || [] },
                r.convertBounds = function(e) { if (e.length != 4) { if (e.length != 2) throw "Illegal bounds: " + JSON.stringify(e);
                        e = [e[0][0], e[0][1], e[1][0], e[1][1]] } return e },
                r.mergeBounds = function(e, t) { var n; return t ? n = [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.max(e[2], t[2]), Math.max(e[3], t[3])] : n = e, n },
                r.fadeIn = function(e, t, n) { return 1 - r.fadeOut(e, t, n) },
                r.fadeOut = function(e, t, n) { var r = 1; return e > t && e <= n ? r = (n - e) / (n - t) : e > n && (r = 0), r },
                r.boundsWidth = function(e) { return e[2] - e[0] },
                r.boundsHeight = function(e) { return e[3] - e[1] },
                r.boundsCenter = function(e) { return [(e[0] + e[2]) / 2, (e[3] + e[1]) / 2] },
                r.isValidBounds = function(e) { return e && e.length == 4 && r.boundsWidth(e) > 0 && r.boundsHeight(e) > 0 },
                r.shiftBounds = function(e, t, n) { return [e[0] + t, e[1] + n, e[2] + t, e[3] + n] },
                r.expandBoundsByPct = function(e, t) { var n = r.boundsWidth(e),
                        i = r.boundsHeight(e); return [e[0] - t[0] * n, e[1] - t[1] * i, e[2] + t[2] * n, e[3] + t[3] * i] },
                r.viewportWidth = function() { return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) },
                r.viewportHeight = function() { return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) },
                r.distance2D = function(e, t) { var n = e[0] - t[0],
                        r = e[1] - t[1]; return Math.sqrt(n * n + r * r) },
                r.midpoint2D = function(e, t) { var n = (e[0] + t[0]) / 2,
                        r = (e[1] + t[1]) / 2; return { x: n, y: r } },
                r.testBoundsIntersection = function(e, t) { var n = r.getFeatureBounds(t); return n[0] <= e[2] && n[2] >= e[0] && n[3] >= e[1] && n[1] <= e[3] },
                r.getFeatureBounds = function(e) { return e.bbox || (e.bbox = r.convertBounds(o.bounds(e))), e.bbox },
                r.getFeatureCollectionBounds = function(e) { var t = r.getFeatures(e),
                        n = t.reduce(function(e, t) { var n = r.getFeatureBounds(t); return r.mergeBounds(n, e) }, null); return n },
                r.debounce = function(e, t) {
                    function r() { n = setTimeout(i, 5) }

                    function i() { n = null, e() } var n; return function() { n && clearTimeout(n), n = setTimeout(r, t) } };
            var u = 0;
            return
            r.startTimer = function(e, t, r, i) { var s = ++u; return t = t >= 0 == 0 ? 750 : t, r = r > 0 ? r : 0, n.timer(function(n) { if (s != u) return !0; var r = t > 0 ? n / t : 1;
                    i && (r = i(r)); if (r >= .999 || n > t) u += 5, r = 1;
                    e({ pct: r }) }, r), {} }, e.extend(r, t), e.extend(r, t.utils), r
        }),
    define("nytg-vote-map/lib/vmap-pointer", ["d3/3", "./vmap-utils"], function(e, t) {
        var n = {},
            r = !1,
            i = new t.EventDispatcher;
        return e.select(window.document.documentElement).on("touchstart.vmap",
                function() { r = !0, i.dispatchEvent("touchstart", { touches: e.event.touches }) }).on("mouseup.vmap", function() { i.dispatchEvent("mouseup") }).on("mousemove.vmap",
                function() { i.dispatchEvent("mousemove") }),
            n.isTouchEnabled = function() { return !!r },
            n.create = function(s) {
                function d() { var e;
                    h && (e = t.distance2D([o.x, o.y], [u.x, u.y]), e < 8 && +(new Date) - a < 500 && f.dispatchEvent("click", o), h = !1, f.dispatchEvent("up", o)) }

                function v() { h = !0, u = o, a = +(new Date), f.dispatchEvent("down", o) }

                function m() { p = !1, f.dispatchEvent("leave") }

                function g() { p && f.dispatchEvent("move", o) }

                function y() { var t = e.mouse(s.node()),
                        n = o,
                        r, i;
                    o = { x: t[0], y: t[1] }, n && (r = o.x - n.x, i = o.y - n.y, h && f.dispatchEvent("drag", { dx: r, dy: i })) }
                var o, u, a, f = new t.EventDispatcher,
                    l = [],
                    c = s.node().parentNode,
                    h = !1,
                    p = !1;
                return i.on("touchstart",
                    function(e) { var t = e.touches[0].target;
                        t && t != s.node() && (h = !1, m()) }), s.on("touchstart", function() { r = !0, e.event.stopPropagation(), p = !0, y(), v() }), s.on("touchend",
                    function() { var t = e.event.touches;
                        l = [], t.length === 0 && +(new Date) - a < 250 && g(), t.length || d() }), s.on("touchmove", function() { var n = e.touches(s.node()); if (l.length == 2 && n.length == 2) { var r = t.distance2D(l[0], l[1]),
                            i = t.distance2D(n[0], n[1]),
                            o = t.midpoint2D(n[0], n[1]);
                        o.dz = i / r || 1, f.dispatchEvent("pinch", o) } n.length == 1 && y(), l = n }), i.on("mousemove",
                    function() { if (n.isTouchEnabled()) return;
                        y(), g() }), i.addEventListener("mouseup", function() { n.isTouchEnabled() || d() }), s.on("mousedown", function() { n.isTouchEnabled() || v() }), s.on("mousemove", function() { p = !0 }), s.on("mouseleave", m), s.on("dblclick", function() { y(), f.dispatchEvent("dblclick", o) }), f.position = function() { return o }, f
            }, n
    }),
    define("nytg-vote-map/lib/vmap-transform", ["d3/3", "underscore/nyt", "./vmap-utils", "./vmap-pointer"], function(e, t, n, r) {
        function a(a) {
            function N(e, t) { w.range(t).domain(e) }

            function C(e, t) { E.range(t).domain(e) }

            function L() { u = g < 500 && 5e3 || g < 700 && 1e4 || 12e3 }

            function A(e) { if (!n.isValidBounds(e)) throw new Error("[setContentBounds()] Content bounds are invalid: " + e); if (h) throw new Error("[setContentBounds()] TODO: support setting more than once");
                h = d(e, c), g && T.setDisplaySize(g, y) }

            function O() { if (!h) throw new Error("[getContentBounds()] Content bounds are undefined"); return h }

            function M(e, t) { return Y(O(), e, t) }

            function D(e, t, n) { return Math.max(i(e) / t, s(e) / n) }

            function P(e) { var t = M(g, y),
                    n = D(t, g, y),
                    r = D(e, g, y); return n / r }

            function H(e, t) { var n = i(e),
                    r = s(e),
                    o = (n * t - n) / 2,
                    u = (r * t - r) / 2; return [e[0] - o, e[1] - u, e[2] + o, e[3] + u] }

            function B(e, t, n) { return [e[0] + t, e[1] + n, e[2] + t, e[3] + n] }

            function j(e, t) { if (!t) return e; var n = P(e); return n > t && (e = H(e, n / t)), e }

            function F(e) { var t = M(g, y),
                    n = e[0],
                    r = e[1],
                    i = e[2],
                    s = e[3],
                    o = i - n,
                    u = s - r; return t ? (n < t[0] && (n = t[0], i = n + o), i > t[2] && (i = t[2], n = i - o), s > t[3] && (s = t[3], r = s - u), r < t[1] && (r = t[1], s = r + u), [n, r, i, s]) : e }

            function I(e, t) { return F(n.shiftBounds(J(), e, t)) }

            function q(e, t, n) { var r = e / g,
                    o = 1 - t / y,
                    u = J(),
                    a = u[0] + i(u) * r,
                    f = u[1] + s(u) * o,
                    l = H(u, z(n)),
                    c = l[0] + i(l) * r,
                    h = l[1] + s(l) * o,
                    p = B(l, a - c, f - h);
                X(p, null, 0, 0) }

            function R() { var e = K() / 2.7; return e < 1.5 && (e = 1), e }

            function U() { var e = K() * 2.7; return l && e > l && (e = l), e }

            function z(e) { var t = K(); return t / e }

            function W(e) { X(H(bounds, z(e)), null) }

            function X(e, t) { var i = J(),
                    s = G(e, g, y); if ($(i, s)) return;
                t = t === 0 || r.isTouchEnabled() ? 0 : t || 600; if (t > 0) var o = n.startTimer(function(e) { var t = f(e.pct, i, s);
                    e.pct >= 1 ? L() : u = 2e4, Q(t) }, t, 0, p);
                else Q(s) }

            function V(e, t, n) { var r = G(e, t, n);
                Q(r) }

            function $(e, t) { return JSON.stringify(e) == JSON.stringify(t) }

            function J() { if (!m) throw new Error("[getCurrentBounds()] Display needs to be inialized using setDisplaySize()"); return m }

            function K() { return P(J()) }

            function Q(e) { var t = i(e),
                    n = s(e);
                m = e, !S && Math.abs(g / y - t / n) > .001 && console.error("[updateBounds()] distorted map:", g / y, t / n), N([e[0], e[2]], [0, g]), C([e[1], e[3]], [y, 0]); var r = P(m),
                    o = b,
                    u = 1.01,
                    a = o <= u && r > u,
                    f = o >= u && r < u,
                    c = o < l && r >= l,
                    h = o >= l && r < l;
                b = r, L(), (a || h) && T.dispatchEvent("zoom-in"), f && T.dispatchEvent("zoom-out"), c && T.dispatchEvent("zoom-max"), T.dispatchEvent("change") }

            function G(e, t, n) { var r = Y(e, t, n); return F(r) }

            function Y(e, t, r) { e = n.convertBounds(e); if (S) return e; var u = 1,
                    a = 1,
                    f = o(e),
                    l = f[0],
                    c = f[1],
                    h = i(e) / u,
                    p = s(e) / a,
                    d = Math.max(h / t, p / r),
                    v = t * d / 2,
                    m = r * d / 2,
                    g = l - v,
                    y = l + v,
                    b = c - m,
                    w = c + m; return [g, b, y, w] } a = a || {}; var l = a.maxZoom ? a.maxZoom : Infinity,
                c = v(a.spacing === 0 ? 0 : a.spacing || .01),
                h, m, g = 0,
                y = 0,
                b = 1,
                w = e.scale.linear(),
                E = e.scale.linear(),
                S = a.type == "chart",
                x = S ? a.aspectRatio || 1.618 : 0,
                T = e.geo.transform({ point: function(e, t, n) { var r = u / (g * b);
                        (!n || n >= r) && this.stream.point(w(e), E(t)) } }); return t.extend(T, n.EventDispatcher.prototype), a.bbox && A(a.bbox), T.xscale = function() { return w }, T.yscale = function() { return E }, T.setContentBounds = A, T.setDisplaySize = function(e, t) { var r, i, s; if (!e) return;
                g = e, L(); if (!h) return;
                t || (r = x || n.boundsWidth(h) / n.boundsHeight(h), t = Math.round(e / r)), t < a.minHeight && (t = a.minHeight), s = M(e, t); if (m) { i = H(s, 1 / K()); var o = n.boundsCenter(m),
                        u = n.boundsCenter(i);
                    i = n.shiftBounds(i, o[0] - u[0], o[1] - u[1]) } else i = s;
                y = t, V(i, g, y) }, T.getDisplayWidth = function() { return g || 0 }, T.getDisplayHeight = function() { return y || 0 }, T.project = function(e) { return [w(e[0]), E(e[1])] }, T.projectX = function(e) { return w(e) }, T.projectY = function(e) { return E(e) }, T.invertX = function(e) { return w.invert(e) }, T.invertY = function(e) { return E.invert(e) }, T.projectInterval = function(e) { var t = Math.abs(T.projectX(0) - T.projectX(1)) * e; return t }, T.zoomToFeature = function(e, t) { var r = n.getFeatureBounds(e);
                t = t || {}, r = d(r, v(t.spacing || "5%")), t.maxZoom && (r = j(r, t.maxZoom)), t.minZoom && P(r) < t.minZoom ? T.zoomToFullExtent(t.duration) : X(r, t.duration) }, T.panBy = function(e, t) { var n = w.invert(0) - w.invert(e),
                    r = E.invert(0) - E.invert(t),
                    i = I(n, r);
                $(J(), i) || Q(i) }, T.zoomToFullExtent = function(e) { X(O(), e) }, T.zoomIn = function() { W(U()) }, T.zoomInTo = function(e) { q(e.x, e.y, U()) }, T.zoomOutTo = function(e) { q(e.x, e.y, R()) }, T.zoomTo = function(e, t) { q(e.x, e.y, t || T.getZoom()) }, T.zoomOut = function() { W(R()) }, T.getCurrentBounds = J, T.isFullExtent = function() { return K() <= 1.0001 }, T.getZoom = function() { return K() }, T }

        function f(e, t, n) { return [l(e, t[0], n[0]), l(e, t[1], n[1]), l(e, t[2], n[2]), l(e, t[3], n[3])] }

        function l(e, t, n) { return t * (1 - e) + n * e }

        function c(e) { return 1 - Math.pow(1 - e, 2) }

        function h(e) { return .5 - Math.cos(e * Math.PI) / 2 }

        function p(e) { return c(h(e)) }

        function d(e, t) { var r = n.boundsWidth(e),
                i = n.boundsHeight(e); return [e[0] - r * t[0], e[1] - i * t[1], e[2] + r * t[2], e[3] + i * t[3]] }

        function v(e) { var n;
            t.isString(e) ? n = e.split(/,? +/) : t.isNumber(e) ? n = [e] : t.isArray(e) && (n = e), n && (n = n.reduce(function(e, t) { var n = m(t); return e && !isNaN(n) ? e.push(n) : e = null, e }, [])); if (!n) throw new Error("Invalid spacing parameters: " + e); return n.length == 1 ? n = [n[0], n[0], n[0], n[0]] : n.length == 2 ? n = [n[0], n[1], n[0], n[1]] : n.length == 3 && n.push(n[2]), n }

        function m(e) { var n = e;
            t.isString(e) && (n = parseFloat(e), /%/.test(e) && (n /= 100)); if (isNaN(n) || n >= 1 || n < 0) n = NaN; return n } var i = n.boundsWidth,
            s = n.boundsHeight,
            o = n.boundsCenter,
            u = 1e4; return { internal: { parseSpacing: v }, create: a } }),
    define("nytg-vote-map/lib/vmap-canvas", ["underscore/nyt", "d3/3", "./vmap-utils"], function(e, t, n) {
        function s(i, s, u, a) {
            function h() { if (screen.width < 1400) return; var e = window.devicePixelRatio || window.webkitDevicePixelRatio || 1,
                    t = e > 1 ? 2 : 1;
                t != r && (r = t) }

            function p(e, t) { h(); var n = e * r,
                    i = t * r; return f.attr("width", n).attr("height", i), f.style({ width: e + "px", height: t + "px" }), this }

            function d() { var e = s.getCurrentBounds(); return function(t) { var r = n.testBoundsIntersection(e, t); return r } }

            function v(e, n) { if (n > 1 == 0) return e; var r = e.stream(),
                    i = 0,
                    s = 0,
                    o = { stream: { point: function(e, t) { i = e, s = t } } },
                    u = t.geo.transform({ point: function(e, t, u) { r.point.call(o, e, t, u), this.stream.point(i * n, s * n) } }); return u.projectX = function(t) { return e.projectX(t) * n }, u.projectY = function(t) { return e.projectY(t) * n }, u } var f = i.append("canvas").style({ position: "absolute", "z-index": -1, top: 0, left: 0 }),
                l = f.node(),
                c = l.getContext("2d");
            p(u, a), this.setSize = p, this.height = function(e) { return l.getAttribute("height") }, this.width = function(e) { return l.getAttribute("width") }, this.clear = function() { c.clearRect(0, 0, this.width(), this.height()) }, this.drawCircles = function(t, i, o, u) { console.log(i); var a = n.getFeatures(t).concat(),
                    f = e.isFunction(i.radius) ? i.radius : function(e) { return i.radius },
                    h = l.width,
                    p = l.height,
                    d = v(s, r),
                    m = function(e) { var t = o(e),
                            n = d.projectX(t[0]),
                            i = d.projectY(t[1]),
                            s = f(e) * r; if (n + s < 0 || n - s > h || i + s < 0 || i - s > p) return;
                        c.arc(n, i, s, 0, Math.PI * 2, !0) };
                e.isFunction(u) || (u = f), a.sort(function(e, t) { return u(t) - u(e) }), this.drawFeatures(a, i, m) }, this.drawPaths = function(e, n) { var i = v(s, r),
                    o = t.geo.path().projection(i).context(c);
                this.drawFeatures(e, n, o, d()) }, this.drawImage = function(e, t, n) { var i = v(s, r),
                    o = i.projectX(t[0]),
                    u = i.projectY(t[3]),
                    a = i.projectX(t[2]) - o,
                    f = i.projectY(t[1]) - u,
                    l;
                n < 1 && (l = c.globalAlpha, c.globalAlpha = n), c.drawImage(e, o, u, a, f), l && (c.globalAlpha = l) }, this.drawFeatures = function(t, i, s, u) { var a = n.getFeatures(t),
                    f = i.stroke ? o(i.stroke) : null,
                    l = i.fill ? o(i.fill) : null,
                    h = 1,
                    p = null;
                e.isFunction(i.strokeWidth) ? h = i.strokeWidth() : h = i.strokeWidth || 1, e.isFunction(i.opacity) ? p = i.opacity : i.opacity && (c.globalAlpha = i.opacity), !f || (c.lineCap = "round", c.lineJoin = "round", c.lineWidth = h * r), a.forEach(function(e) { var t = 1; if (u && !u(e)) return; if (p) { t = p(e); if (!t) return;
                        c.globalAlpha = t } c.beginPath(), l && (c.fillStyle = l(e)), f && (c.strokeStyle = f(e)), s(e), l && c.fill(), f && c.stroke(), c.closePath() }), c.globalAlpha = 1 } }

        function o(t) { var n, r; return e.isFunction(t) ? n = function(e) { return u(t(e)) } : (r = u(t), n = function() { return r }), n }

        function a(e, t, n) { var r = Math.round(n * 3),
                i = document.createElement("canvas"),
                s = i.getContext("2d"); return i.setAttribute("width", r), i.setAttribute("height", r), s.lineWidth = r * .34, s.fillStyle = e, s.fillRect(0, 0, r, r), s.strokeStyle = t, s.moveTo(0, r * 1.25), s.lineTo(r * 1.25, 0), s.moveTo(-r * .25, r * .5), s.lineTo(r * .5, -r * .25), s.stroke(), s.createPattern(i, "repeat") }

        function f(e, t) { return function(r, i) { var s = t.invertX(r),
                    o = t.invertY(i),
                    u = null,
                    a = n.getFeatures(e); for (var f = 0; f < a.length; f++) { var l = t.getFeatureBounds(a[f]);
                    n.pointInBBox(s, o, l) && pointInPolygon(s, o, a[f]) && (u = a[f]) } return u } } var r = 1,
            i = {};
        i.create = function(e, t, n, r) { return new s(e, t, n, r) }; var u = function() { var t = {}; return function(i) { var s, o, u; return e.isString(i) ? s = i : e.isObject(i) ? (u = (i.width || 2) * r, o = n.getHatchId(i.colors, u), o in t == 0 && (t[o] = a(i.colors[0], i.colors[1], u)), s = t[o]) : s = "#ffcccc", s } }(); return i }),
    define("nytg-vote-map/lib/vmap-svg", ["./vmap-utils"],
        function(e) {
            function i(e, t, n) { e[n] = t[n] }

            function s(e, t) { var n; return _.isFunction(e) ? n = function(n) { return s(e(n), t) } : _.isString(e) ? n = e : _.isObject(e) && (n = o(e.colors, e.weight, t)), n }

            function o(n, r, i) { var s = e.getHatchId(n, r); return s += "_svg" + u(i), s in t == 0 && (t[s] = f(n[0], n[1], r, s, i)), t[s] }

            function u(e) { var t = e.node(),
                    r = n.indexOf(t); return r == -1 && (r = n.length, n.push(t)), r }

            function a(e) { var t = e.select("defs"); return t.size() < 1 && (t = e.append("defs")), t }

            function f(e, t, n, r, i) { var s = a(i).append("pattern"); return s.attr("id", r).attr({ id: r, patternUnits: "userSpaceOnUse", width: "4", height: "4", patternTransform: "rotate(-45 2 2)" }), s.append("rect").attr({ x: 0, y: 0, width: 4, height: 4, fill: t }), s.append("path").attr({ stroke: e, "stroke-width": "2", d: "M -1,2 l 6,0" }), "url(#" + r + ")" }
            var t = {},
                n = [],
                r = {};
            return
            r.parseStyle = function(e, t) { var n = Object.keys(e).reduce(function(t, n) { var r = e[n]; return n == "strokeWidth" ? t["stroke-width"] = r : n == "classname" ? t["class"] = r : n == "fill" ? t.fill = s(r) : n == "radius" ? t.r = r : t[n] = r, t }, {}); return n.fill || (n.fill = "none"), n },
                r.parseLabelStyle = function(e, t) { var n = r.parseStyle(e, t); return e.fill || (n.fill = "#000"), n }, r
        }),
    define("nytg-vote-map/lib/vmap-hit", ["underscore/nyt", "./vmap-utils"],
        function(e, t) {
            function r(e) {
                function s() { n && (n._out(), n = null, r = null) }

                function o(e) { u(e), n && r && n._click(r, e) }

                function u(e) { var i, o; for (var u = t.length - 1; u >= 0; u--) { i = t[u], o = i._test(e.x, e.y); if (o) break } if (n == i && o == r) return;
                    n && s(), o && (n = i, r = o, i._over(o, e)) }
                var t = [],
                    n, r;
                e.on("move", u), e.on("leave", s), e.on("click", o),
                    this.clear = function() { hitTests = [] },
                    this.getSelectionProxy = function(e) { var n = new i(e); return t.push(n), n }
            }

            function i(e) {
                var t = {};
                this._out = function() { t.mouseout && t.mouseout() },
                    this._over = function(e, n) { t.mouseover && t.mouseover(e) },
                    this._test = function(t, n) { return e(t, n) },
                    this.on = function(e, n) { t[e] = n },
                    this._click = function(e) { t.click && t.click(e) }
            }

            function s(e, t, n) { var r = n.type == "Feature" ? n.geometry : {},
                    i = r.type == "Polygon" && [r.coordinates] || r.type == "MultiPolygon" && r.coordinates || [],
                    s = !1; return i.forEach(function(n) { n.forEach(function(n) { var r = o(e, t, n);
                        s = s ? !r : r }) }), s }

            function o(e, t, n) { var r, i, s, o, u = !1; for (s = 0, j = n.length - 1; s < n.length; j = s++) r = n[s][0], yi = n[s][1], i = n[j][0], yj = n[j][1], o = yi > t != yj > t && e < (i - r) * (t - yi) / (yj - yi) + r, o && (u = !u); return u }
            var n = {};
            return
            n.create = function(e) { return new r(e) },
                n.getPolygonTest = function(e, t) { return function(r, i) { var s = t.invertX(r),
                            o = t.invertY(i); return n.findHitPolygon(s, o, e) } },
                n.findHitPolygon = function(e, n, r) { var i = null,
                        o = t.getFeatures(r); for (var u = 0; u < o.length; u++) { var a = t.getFeatureBounds(o[u]);
                        t.pointInBBox(e, n, a) && s(e, n, o[u]) && (i = o[u]) } return i },
                n.getCircleTest = function(n, r, i, s) {
                    function u(e, t, n) { var i = r(n),
                            u = s.projectX(i[0]),
                            a = s.projectY(i[1]),
                            f = 10,
                            l = 1e5,
                            c = (u - e) * (u - e) + (a - t) * (a - t); if (c > l) return 0; var h = o(n) || 0,
                            p = (h + f) * (h + f); return h <= 0 || c > p ? 0 : c > h * h ? (p - c) * .01 : 1e3 - h } var o = e.isFunction(i) ? i : function() { return i || 0 }; return function(e, r) { var i = null,
                            s = 0,
                            o; return t.getFeatures(n).forEach(function(t) { var n = u(e, r, t);
                            n > s && (i = t, s = n) }), i } }, n
        }),
    define("nytg-vote-map/lib/vmap-surface", ["d3/3", "underscore/nyt", "./vmap-utils", "./vmap-canvas", "./vmap-svg", "./vmap-hit"],
        function(e, t, n, r, i, s) {
            function o(o, a, l) {
                function N() { return S || (S = r.create(o, l, x, T)), S }

                function C() { var e = l.getDisplayWidth(),
                        t = l.getDisplayHeight(); if (e != x || t != T) x = e, T = t, g.attr("width", e).attr("height", t), S && S.setSize(e, t) }

                function k(e) { var t = d(e); if (!B(e)) { A(e); return } if (t == "path") F(e);
                    else if (t == "label") H(e);
                    else if (t == "circle") j(e);
                    else { if (t != "image") throw new Error("Unknown layer type:", e.type);
                        I(e) } O(e) }

                function L(e) { var n = t.extend({}, e),
                        r = m(n),
                        i = d(n); if (i == "image") c(n, l);
                    else if (!n.features) throw new Error('A layer is missing a "features" property.');
                    f(i) && h(n); if (r == "svg") n.container || (n.container = b.append("g")), n.classname && n.container.attr("class", n.classname), n.symbols = D(n);
                    else if (r != "canvas") throw new Error("Unknown render type: " + r); return u(n) ? q(n) : n.container && n.container.attr("pointer-events", "none"), y.push(n), n }

                function A(e) { e.container && e.container.attr("display", "none") }

                function O(e) { e.container && e.container.attr("display", "block") }

                function M(e) { var t = d(e),
                        n; return t == "path" ? n = s.getPolygonTest(e.features, l) : t == "circle" && (n = s.getCircleTest(e.features, e.point, e.style.radius, l)), E.getSelectionProxy(n) }

                function D(e) { var t = v(d(e)),
                        r = e.container.selectAll(t).data(n.getFeatures(e.features)).enter().append(t).attr(i.parseStyle(e.style, g)); return r }

                function P(e) { var t = l.getDisplayWidth(),
                        r = l.getDisplayHeight(),
                        i = [e[0], e[1], e[2] + t, e[3] + r]; return function(e, t) { return n.pointInBBox(e, t, i) } }

                function H(e) { if (!e.symbols) return; var t = e.point,
                        n = P([-50, -10, 50, 10]);
                    e.symbols.filter(function(e, r) { var i = l.project(t(e)),
                            s = i[0],
                            o = i[1],
                            u = n(s, o); return u ? (this.setAttribute("x", s), this.setAttribute("y", o), this.style.display = "block") : this.style.display = "none", u }).text(e.text).attr(i.parseLabelStyle(e.style, g)) }

                function B(e) { var t = l.getZoom(),
                        n = !0; if (e.minZoom && t < e.minZoom || e.maxZoom && t > e.maxZoom) n = !1; return n }

                function j(e) { var t = m(e),
                        r = e.point;
                    e.style.radius || n.error("Circle layer missing required style.radius property; style:", e.style), t == "svg" ? e.symbols.each(function(e, t) { var n = l.project(r(e));
                        this.setAttribute("cx", n[0]), this.setAttribute("cy", n[1]) }).attr(i.parseStyle(e.style, g)) : t == "canvas" && N().drawCircles(e.features, e.style, r, e.sortKey) }

                function F(t) { var n = m(t); if (n == "canvas") N().drawPaths(t.features, t.style);
                    else if (n == "svg") { var r = e.geo.path().projection(l);
                        t.symbols.attr("d", r) } }

                function I(e) { var n = e.style.opacity,
                        r = t.isFunction(n) ? n() : n || 1;
                    e.image && N().drawImage(e.image, e.bbox, r) }

                function q(e) { var t = e.symbols || M(e),
                        n, r; if (e.onHover || e.hoverStyle) n = R(e, e.hoverStyle, e.onHover), t.on("mouseover", function(e) { n(e, a.position()) }), t.on("mouseout", function(e) { n(null, a.position()) });
                    e.onSelect && t.on("click", function(t) { e.onSelect(t, a.position()) }) }

                function R(e, t, n) { if (!t) return n; var r = L({ container: w, style: t, renderer: "svg", features: [], point: e.point, type: e.type });
                    e.style.radius && !t.radius && (t.radius = e.style.radius); var i = function(e) { r.container.selectAll("*").remove(), r.features = e ? [e] : [], r.symbols = D(r), k(r), n && n(e) }; return i }
                var p = {},
                    g = o.append("svg").style({ position: "relative", overflow: "hidden", "z-index": 2, "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    y = [];
                g.append("defs");
                var b = g.append("g"),
                    w = g.append("g").attr("pointer-events", "none"),
                    E = s.create(a),
                    S, x, T;
                return p.svg = function() { return g }, p.initLayers = function(e) { E.clear(), b.selectAll("g").remove(), y = [], e.forEach(L), this.refreshLayers() }, p.refreshLayers = function() { C(), S && S.clear(), y.forEach(k) }, p
            }

            function u(e) { return !!(e.onHover || e.hoverStyle || e.onSelect) }

            function a(e) { return !!e.onHover || !!e.onSelect }

            function f(e) { return e == "label" || e == "circle" }

            function l(e, t, r, i, s) { var o = e[0],
                    u = Math.abs(e[3]),
                    a = e[4] + (i || 0) * o,
                    f = e[5] + (s || 0) * u,
                    l = [a, f - u * r, a + o * t, f]; if (!n.isValidBounds(l)) throw new Error("Invalid image bounds:", l); if (e[1] || e[2]) throw new Error("World file data is rotated -- not supported"); return l }

            function c(e, n) {
                function i(t) { var n = t.width,
                        r = t.height;
                    e.tfw && (e.bbox = l(e.tfw, n, r, e.dx, e.dy)) } e.style = t.extend({ opacity: 1 }, e.style); if (e.image) i(e.image);
                else if (e.url) { var r = new Image;
                    r.onload = function() { e.image = r, i(r), n.dispatchEvent("change") }, r.src = e.url } }

            function h(e) { e.point || (e.point = function(e) { var t; return e.type == "Feature" ? t = e.geometry ? p(e.geometry) : null : t = p(e), t }) }

            function p(e) { if (e.type == "Point") return e.coordinates; if (e.type == "MultiPoint") return e.coordinates[0]; throw new Error("Expected GeoJSON Point, found:", e) }

            function d(e) { var t = e.type; return t || (e.image || e.tfw ? t = "image" : e.text ? t = "label" : e.style && e.style.radius ? t = "circle" : t = "path"), t }

            function v(e) { var t = { circle: "circle", path: "path", label: "text" }; return t[e] || "path" }

            function m(e) { var t = d(e),
                    n = "svg"; if (t == "image" || (t == "path" || t == "circle") && e.renderer != "svg") n = "canvas"; return n }
            return { create: o, internal: { initPointLayer: h, getLayerType: d, getRenderType: m } }
        }),
    define("nytg-vote-map/lib/vmap-navigation", ["d3/3"], function(e) { var t = {}; return t.init = function(t, n, r) {
            function s() { return !r.maxZoom || r.maxZoom > 1 }

            function o() { return t.getZoom() > 1 } var i = !1;
            s() && (n.on("dblclick", function(e) { t.zoomInTo(e) }), n.on("pinch", function(e) { var n = t.getZoom(),
                    r = Math.max(n * (e.dz || 1), 1);
                t.zoomTo(e, r) }), t.on("zoom-in", function() { i = !0 }), t.on("zoom-out", function() { i = !1 }), n.on("drag", function(n) { i && (e.event && (e.event.stopPropagation(), e.event.preventDefault()), t.panBy(n.dx, n.dy)) })) }, t }),
    define("nytg-vote-map/lib/vmap-popup", ["d3/3", "./vmap-utils"], function(e, t) { var n = {}; return n.create = function(n) {
            function o() {}

            function u() { return i || (i = { viewportWidth: t.viewportWidth(), parentLeft: s.node().parentElement.getBoundingClientRect().left, width: s.node().offsetWidth }), i } n = n || {}; var r = !0,
                i = null,
                s = n.div ? e.select(n.div) : e.select("body").append("div"); return s.style("position", "absolute").classed(n.classname || "g-popup", !0).on("touchstart", o).on("touchend", o), s.hide = function() { r = !0, setTimeout(function() { r && (s.style("visibility", "hidden"), s.style("display", "none")) }, 10) }, s.show = function(e, n) { r = !1, s.style({ display: "block" }), t.isString(e) && (s.html(e), i = null), n && s.update(n), s.style("visibility", "visible") }, s.onHover = function(e) { return e = e || function() { return "TBD" },
                    function(t, n) { t ? s.show(e(t), n) : s.hide() } }, s.update = function(e) { var t = u(),
                    n = e.y + 30,
                    r = Math.round(e.x - t.width * .5 + 3),
                    i = t.viewportWidth - t.parentLeft - r - t.left,
                    o = t.parentLeft + r;
                n < 0 && (n = 0), o < 0 ? r -= o : i < 0 && (r += i), s.style({ left: r + "px", top: n + "px" }) }, s.hide(), s }, n }),
    define("nytg-vote-map/lib/vmap.js", ["d3/3", "underscore/nyt", "./vmap-utils", "./vmap-transform", "./vmap-surface", "./vmap-pointer", "./vmap-navigation", "./vmap-popup"], function(e, t, n, r, i, s, o, u) {
        function f(t, f) {
            function m() { var e = c.node().getBoundingClientRect(),
                    t = e.width,
                    n = f.height == "100%" ? e.height : null;
                p.setDisplaySize(t, n) }

            function g() { p.zoomInTo(b()) }

            function y() { var e = p.getZoom();
                e > 1 && (e < 4 ? w() : p.zoomOutTo(b())) }

            function b() { var e = h.node().getBoundingClientRect(),
                    t = n.viewportWidth(),
                    r = n.viewportHeight(),
                    i = Math.max(-e.left, 0),
                    s = Math.min(e.right, t) - e.left,
                    o = Math.max(-e.top, 0),
                    u = Math.min(e.bottom, r) - e.top,
                    a = (i + s) / 2,
                    f = (o + u) / 2; return { x: a, y: f } }

            function w() { p.zoomToFullExtent() }

            function E() { v.refreshLayers() } var l = this,
                c = e.select(t).style("position", "relative");
            c.node() || n.error("[vmap] Expected a DOM element or valid selector; received:", t), f || (f = {}); var h = c.append("div").style("position", "relative"),
                p = r.create(f),
                d = s.create(h),
                v = i.create(h, d, p);
            o.init(p, d, f), a.on("resize", m), m(), p.on("change", function() { l.dispatchEvent("resize"), E() }), p.on("zoom-in", function() { l.dispatchEvent("zoom-in") }), p.on("zoom-out", function() { l.dispatchEvent("zoom-out") }), p.on("zoom-max", function() { l.dispatchEvent("zoom-max") }), this.getZoom = p.getZoom, this.zoomIn = g, this.zoomOut = y, this.zoomReset = w, this.refresh = E, this.width = p.getDisplayWidth, this.height = p.getDisplayHeight, this.zoomToFeature = p.zoomToFeature, this.svg = v.svg, this.xscale = p.xscale, this.yscale = p.yscale, this.setLayers = function(e) { f.no_canvas && e.forEach(function(e) { e.renderer = "svg" }), f.bbox || (f.bbox = e.reduce(function(e, t) { var r; return t.features ? r = n.getFeatureCollectionBounds(t.features) : t.bbox && (r = t.bbox), r ? n.mergeBounds(r, e) : e }, null), p.setContentBounds(f.bbox)), v.initLayers(e) }, this.append = function(e) { c.node().appendChild(e.node ? e.node() : e) }, this.popup = function(e) { var t = u.create(e); return d.on("move", t.update), this.append(t), t } }

        function l() { var r = 0,
                i = { height: function() { return window.innerHeight || document.documentElement.clientHeight }, width: function() { return window.innerWidth || document.documentElement.clientWidth }, isPortraitMode: function() { return this.width() > this.height() } },
                s = n.debounce(function() { var e = i.width();
                    e != r && (r = e, i.dispatchEvent("resize")) }, 80); return e.select(window).on("resize.vmap", s).on("orientationchange.vmap", s), t.extend(i, n.EventDispatcher.prototype), i } n.opts.inherit(f, n.EventDispatcher); var a = l(); return { utils: n, create: function(e, t) { return new f(e, t) } } }),
    define("nytg-vote-map/lib/vmap-states-reference", [], function() {
        function s(e) { return e.split(",").reduce(function(e, t) { var n = t.split(":"); return e[n[0]] = n[1], e }, {}) } var e = {},
            t = s("AL:Ala.,AK:Alaska,AZ:Ariz.,AR:Ark.,CA:Calif.,CO:Colo.,CT:Conn.,DE:Del.,DC:D.C.,FL:Fla.,GA:Ga.,HI:Hawaii,ID:Idaho,IL:Ill.,IN:Ind.,IA:Iowa,KS:Kan.,KY:Ky.,LA:La.,ME:Me.,MD:Md.,MA:Mass.,MI:Mich.,MN:Minn.,MS:Miss.,MO:Mo.,MT:Mont.,NE:Neb.,NV:Nev.,NH:N.H.,NJ:N.J.,NM:N.M.,NY:N.Y.,NC:N.C.,ND:N.D.,OH:Ohio,OK:Okla.,OR:Ore.,PA:Pa.,PR:P.R.,RI:R.I.,SC:S.C.,SD:S.D.,TN:Tenn.,TX:Tex.,UT:Utah,VT:Vt.,VA:Va.,WA:Wash.,WV:W.Va.,WI:Wis.,WY:Wyo."),
            n = s("01:AL,02:AK,04:AZ,05:AR,06:CA,08:CO,09:CT,10:DE,11:DC,12:FL,13:GA,15:HI,16:ID,17:IL,18:IN,19:IA,20:KS,21:KY,22:LA,23:ME,24:MD,25:MA,26:MI,27:MN,28:MS,29:MO,30:MT,31:NE,32:NV,33:NH,34:NJ,35:NM,36:NY,37:NC,38:ND,39:OH,40:OK,41:OR,42:PA,72:PR,44:RI,45:SC,46:SD,47:TN,48:TX,49:UT,50:VT,51:VA,53:WA,54:WV,55:WI,56:WY"),
            r = s("AL:Alabama,AK:Alaska,AZ:Arizona,AR:Arkansas,CA:California,CO:Colorado,CT:Connecticut,DE:Delaware,DC:D.C.,FL:Florida,GA:Georgia,HI:Hawaii,ID:Idaho,IL:Illinois,IN:Indiana,IA:Iowa,KS:Kansas,KY:Kentucky,LA:Louisiana,ME:Maine,MD:Maryland,MA:Massachusetts,MI:Michigan,MN:Minnesota,MS:Mississippi,MO:Missouri,MT:Montana,NE:Nebraska,NV:Nevada,NH:New Hampshire,NJ:New Jersey,NM:New Mexico,NY:New York,NC:North Carolina,ND:North Dakota,OH:Ohio,OK:Oklahoma,OR:Oregon,PA:Pennsylvania,PR:Puerto Rico,RI:Rhode Island,SC:South Carolina,SD:South Dakota,TN:Tennessee,TX:Texas,UT:Utah,VT:Vermont,VA:Virginia,WA:Washington,WV:West Virginia,WI:Wisconsin,WY:Wyoming"),
            i = "VT,MA,NH,RI,CT,DE,MD,NJ,HI,DC".split(","); return e.getAbbrev = function(e) { return t[e.toUpperCase()] || "" }, e.getStateByFips = function(e) { return n[e] || "" }, e.getName = function(e) { return r[e] || "" }, e.hasLabel = function(e) { return i.indexOf(e) == -1 }, e }),
    define("nytg-vote-map/lib/vmap-projections", ["./vmap-utils"], function(e) {
        function r(t, r, i, s) { var o = { name: r, spherical: !1, x0: 0, y0: 0, k0: 1, R: 6378137, E: .0818191908426215, projectLatLng: function(e, t, r) { return r = r || {}, this.forward(t * n, e * n, r), r.x = this.R * r.x + this.x0, r.y = this.R * r.y + this.y0, r }, unprojectXY: function(e, t, r) { return e = (e - this.x0) / this.R, t = (t - this.y0) / this.R, r = r || {}, this.inverse(e, t, r), r.lat /= n, r.lng /= n, r }, inverseEllApprox: function(e, t, n) { var r = {},
                        i = 0,
                        s = 0,
                        o = 4; for (;;) { this.spherical = !0, this.inverse(e + i, t + s, n), this.spherical = !1; if (!--o) break;
                        this.forward(n.lng, n.lat, r), i += e - r.x, s += t - r.y } } };
            s && s.forEach(function(e) { if (e in i == 0) throw new Error("[" + r + "] Missing required parameter:", e);
                i[e] = i[e] * n }), e.extend(t, o, i) }

        function i() { return new s({ spherical: !0 }) }

        function s(t) { t = e.extend({ lng0: 0 }, t), r(this, "mercator", t, ["lng0"]), this.forward = function(e, t, n) { n.x = e - this.lng0, this.spherical ? n.y = Math.log(Math.tan(Math.PI * .25 + t * .5)) : n.y = Math.log(Math.tan(Math.PI * .25 + t * .5) * Math.pow((1 - this.E * Math.sin(t)) / (1 + this.E * Math.sin(t)), this.E * .5)) }, this.inverse = function(e, t, n) { this.spherical ? (n.lng = e + this.lng0, n.lat = Math.PI * .5 - 2 * Math.atan(Math.exp(-t))) : this.inverseEllApprox(e, t, n) } }

        function o(e) { var t = /^([\d]+)([NS])$/i.exec(e.zone || ""); if (!t) throw new Error("[UTM] Expected a UTM zone parameter of the form: 17N"); var n = parseFloat(t[1]),
                r = new u({ k0: .9996, lng0: n * 6 - 183, lat0: 0, x0: 5e5, y0: t[2].toUpperCase() == "S" ? 1e7 : 0 }); return r }

        function u(e) { r(this, "transverse_mercator", e, ["lat0", "lng0"]); var t = l(this.lat0, this.E);
            this.forward = function(e, n, r) { if (this.spherical) { var i = Math.cos(n) * Math.sin(e - this.lng0);
                    r.x = .5 * this.k0 * Math.log((1 + i) / (1 - i)), r.y = this.k0 * (Math.atan(Math.tan(n) / Math.cos(e - this.lng0)) - this.lat0) } else { var s = this.E * this.E,
                        o = s / (1 - s),
                        u = Math.sin(n),
                        a = Math.cos(n),
                        f = Math.tan(n),
                        c = 1 / Math.sqrt(1 - s * u * u),
                        h = f * f,
                        p = o * a * a,
                        d = a * (e - this.lng0),
                        v = d * d,
                        m = l(n, this.E);
                    r.x = this.k0 * c * (d + d * v / 6 * (1 - h + p) + v * v * d / 120 * (5 - 18 * h + h * h + 72 * p - 58 * o)), r.y = this.k0 * (m - t + c * f * (v / 2 + v * v / 24 * (5 - h + 9 * p + 4 * p * p))) } }, this.inverse = function(e, t, n) { if (this.spherical) { var r = t / this.k0 + this.lat0;
                    n.lat = Math.asin(Math.sin(r) / f(e / this.k0)), n.lng = this.lng0 + Math.atan(a(e / this.k0) / Math.cos(r)) } else this.inverseEllApprox(e, t, n) } }

        function a(e) { return (Math.exp(e) - Math.exp(-e)) * .5 }

        function f(e) { return (Math.exp(e) + Math.exp(-e)) * .5 }

        function l(e, t) { var n = t * t,
                r = n * n,
                i = r * n; return e * (1 - n / 4 - 3 * r / 64 - 5 * i / 256) - Math.sin(2 * e) * (3 * n / 8 + 3 * r / 32 + 45 * i / 1024) + Math.sin(4 * e) * (15 * r / 256 + 45 * i / 1024) - Math.sin(6 * e) * (35 * i / 3072) }

        function c(e) { var t = new m({ lng0: -96, lat1: 33, lat2: 45, lat0: 39, spherical: !0 }); return (new E(new h(e))).addFrame(t, { lat: 63, lng: -152 }, { lat: 27, lng: -115 }, 6e6, 3e6, .31, 29.2).addFrame(t, { lat: 20.9, lng: -157 }, { lat: 28.2, lng: -106.6 }, 2e6, 4e6, .9, 40) }

        function h(t) { return new p(e.extend({ lng0: -96, lat1: 29.5, lat2: 45.5, lat0: 37.5 }, t)) }

        function p(e) { r(this, "albers", e, ["lat0", "lat1", "lat2", "lng0"]); var t = this.E,
                n = Math.cos(this.lat1),
                i = Math.sin(this.lat1),
                s = .5 * (i + Math.sin(this.lat2)),
                o = n * n + 2 * s * i,
                u = Math.sqrt(o - 2 * s * Math.sin(this.lat0)) / s,
                a = v(t, this.lat1),
                f = v(t, this.lat2),
                l = d(t, this.lat0),
                c = d(t, this.lat1),
                h = d(t, this.lat2),
                p = (a * a - f * f) / (h - c),
                m = a * a + p * c,
                g = Math.sqrt(m - p * l) / p,
                y = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
            this.forward = function(e, n, r) { var i, a, f;
                this.spherical ? (i = Math.sqrt(o - 2 * s * Math.sin(n)) / s, a = s * (e - this.lng0), r.x = i * Math.sin(a), r.y = u - i * Math.cos(a)) : (f = d(t, n), i = Math.sqrt(m - p * f) / p, a = p * (e - this.lng0), r.x = i * Math.sin(a), r.y = g - i * Math.cos(a)) }, this.inverse = function(e, n, r) { var i, a, f, l, c, h;
                this.spherical ? (i = Math.sqrt(e * e + (u - n) * (u - n)), a = Math.atan(e / (u - n)), r.lat = Math.asin((o - i * i * s * s) * .5 / s), r.lng = a / s + this.lng0) : (a = Math.atan(e / (g - n)), r.lng = this.lng0 + a / p, f = t * t, l = f * f, i = Math.sqrt(e * e + (g - n) * (g - n)), c = (m - i * i * p * p) / p, h = Math.asin(c / y), r.lat = h + Math.sin(2 * h) * (f / 3 + 31 * l / 180 + 517 * l * f / 5040) + Math.sin(4 * h) * (23 * l / 360 + 251 * l * f / 3780) + Math.sin(6 * h) * 761 * l * f / 45360) } }

        function d(e, t) { var n = Math.sin(t); return (1 - e * e) * (n / (1 - e * e * n * n) - .5 / e * Math.log((1 - e * n) / (1 + e * n))) }

        function v(e, t) { var n = Math.sin(t); return Math.cos(t) / Math.sqrt(1 - e * e * n * n) }

        function m(e) { r(this, "lambertcc", e, ["lat0", "lat1", "lat2", "lng0"]); var t = this.E,
                n = Math.log(Math.cos(this.lat1) / Math.cos(this.lat2)) / Math.log(Math.tan(Math.PI / 4 + this.lat2 / 2) / Math.tan(Math.PI / 4 + this.lat1 / 2)),
                i = Math.cos(this.lat1) * Math.pow(Math.tan(Math.PI / 4 + this.lat1 / 2), n) / n,
                s = i / Math.pow(Math.tan(Math.PI / 4 + this.lat0 / 2), n),
                o = (Math.log(y(this.lat1, t)) - Math.log(y(this.lat2, t))) / (Math.log(g(this.lat1, t)) - Math.log(g(this.lat2, t))),
                u = y(this.lat1, t) / (o * Math.pow(g(this.lat1, t), o)),
                a = u * Math.pow(g(this.lat0, t), o);
            this.forward = function(e, r, f) { var l, c; if (!this.spherical) { var h = g(r, t);
                    l = u * Math.pow(h, o), c = o * (e - this.lng0), f.x = l * Math.sin(c), f.y = a - l * Math.cos(c) } else l = i / Math.pow(Math.tan(Math.PI / 4 + r / 2), n), c = n * (e - this.lng0), f.x = l * Math.sin(c), f.y = s - l * Math.cos(c) }, this.inverse = function(e, t, r) { if (!this.spherical) this.inverseEllApprox(e, t, r);
                else { var o = s,
                        u = Math.sqrt(e * e + (o - t) * (o - t));
                    n < 0 && (u = -u); var a = Math.atan(e / (o - t));
                    r.lat = 2 * Math.atan(Math.pow(i / u, 1 / n)) - .5 * Math.PI, r.lng = a / n + this.lng0 } } }

        function g(e, t) { var n = Math.sin(e); return Math.tan(Math.PI / 4 - e / 2) / Math.pow((1 - t * n) / (1 + t * n), t / 2) }

        function y(e, t) { var n = Math.sin(e); return Math.cos(e) / Math.sqrt(1 - t * t * n * n) }

        function b() { r(this, "winkel_tripel"), this.forward = function(e, t, r) { var i = 50.467 * n,
                    s = Math.acos(Math.cos(t) * Math.cos(e * .5)),
                    o = s === 0 ? 1 : Math.sin(s) / s;
                r.x = .5 * (e * Math.cos(i) + 2 * Math.cos(t) * Math.sin(.5 * e) / o), r.y = .5 * (t + Math.sin(t) / o) } }

        function w() { r(this, "robinson"); var e = .8487,
                t = 1.3523,
                i = [1, -5.67239e-12, -0.0000715511, 311028e-11, .9986, -0.000482241, -0.000024897, -0.00000133094, .9954, -0.000831031, -0.000044861, -9.86588e-7, .99, -0.00135363, -0.0000596598, 367749e-11, .9822, -0.00167442, -0.0000044975, -0.00000572394, .973, -0.00214869, -0.0000903565, 1.88767e-8, .96, -0.00305084, -0.0000900732, 164869e-11, .9427, -0.00382792, -0.0000653428, -0.00000261493, .9216, -0.00467747, -0.000104566, 48122e-10, .8962, -0.00536222, -0.0000323834, -0.00000543445, .8679, -0.00609364, -0.0001139, 332521e-11, .835, -0.00698325, -0.0000640219, 9.34582e-7, .7986, -0.00755337, -0.0000500038, 9.35532e-7, .7597, -0.00798325, -0.0000359716, -0.00000227604, .7186, -0.00851366, -0.000070112, -0.00000863072, .6732, -0.00986209, -0.000199572, 191978e-10, .6213, -0.010418, 883948e-10, 624031e-11, .5722, -0.00906601, 181999e-9, 624033e-11, .5322, 0, 0, 0],
                s = [0, .0124, 3.72529e-10, 1.15484e-9, .062, .0124001, 1.76951e-8, -5.92321e-9, .124, .0123998, -7.09668e-8, 2.25753e-8, .186, .0124008, 2.66917e-7, -8.44523e-8, .248, .0123971, -9.99682e-7, 3.15569e-7, .31, .0124108, 373349e-11, -0.0000011779, .372, .0123598, -0.000013935, 439588e-11, .434, .0125501, 520034e-10, -0.0000100051, .4968, .0123198, -0.0000980735, 922397e-11, .5571, .0120308, 402857e-10, -0.0000052901, .6176, .0120369, -0.0000390662, 7.36117e-7, .6769, .0117015, -0.0000280246, -8.54283e-7, .7346, .0113572, -0.0000408389, -5.18524e-7, .7903, .0109099, -0.0000486169, -0.0000010718, .8435, .0103433, -0.0000646934, 5.36384e-9, .8936, .00969679, -0.0000646129, -0.00000854894, .9394, .00840949, -0.000192847, -0.00000421023, .9761, .00616525, -0.000256001, -0.00000421021, 1, 0, 0, 0];
            this.forward = function(r, o, u) { var a = Math.abs(o),
                    f = Math.min(Math.floor(a * 11.459155902616464), 17),
                    l = (a - .08726646259971647 * f) / n,
                    c = o < 0 ? -1 : 1,
                    h = f * 4;
                u.x = (((l * i[h + 3] + i[h + 2]) * l + i[h + 1]) * l + i[h]) * r * e, u.y = (((l * s[h + 3] + s[h + 2]) * l + s[h + 1]) * l + s[h]) * t * c } }

        function E(e) { var t = [];
            this.addFrame = function(r, i, s, o, u, a, f) { var l = e.projectLatLng(i.lat, i.lng),
                    c = e.projectLatLng(s.lat, s.lng),
                    h = [l.x - o * .5, l.y - u * .5, l.x + o * .5, l.y + u * .5],
                    p = new S; return p.rotate(f * n, l.x, l.y), p.scale(a, a), p.transformXY(l.x, l.y, l), p.translate(c.x - l.x, c.y - l.y), t.push({ bbox: h, matrix: p, projection: r }), this }, this.projectLatLng = function(n, r, i) { var s, o;
                i = e.projectLatLng(n, r, i); for (var u = 0, a = t.length; u < a; u++) { s = t[u], o = s.bbox; if (i.x >= o[0] && i.x <= o[2] && i.y >= o[1] && i.y <= o[3]) { s.projection.projectLatLng(n, r, i), s.matrix.transformXY(i.x, i.y, i); break } } return i }, this.unprojectXY = function(t, n, r) { return e.unprojectXY.call(e, t, n, r) } }

        function S() { this.a = 1, this.c = 0, this.tx = 0, this.b = 0, this.d = 1, this.ty = 0 }

        function x(n, r) { if (n in t == 0) throw console.log("Supported projections:", Object.keys(t).join(", ")), new Error("Unknown projection: " + n); var i = new t[n](n, r),
                s = function(e) { var t = i.projectLatLng(e[1], e[0]); return [t.x, t.y] }; return i.unprojectXY && (s.invert = function(e) { var t = i.unprojectXY(e[0], e[1]); return [t.lng, t.lat] }), e.extend(s, i), s } var t = { webmercator: i, mercator: s, albers: p, albersusa: c, albersnyt: c, lambertcc: m, transversemercator: u, utm: o, winkeltripel: b, robinson: w },
            n = Math.PI / 180; return S.prototype.transformXY = function(e, t, n) { return n = n || {}, n.x = e * this.a + t * this.c + this.tx, n.y = e * this.b + t * this.d + this.ty, n }, S.prototype.translate = function(e, t) { this.tx += e, this.ty += t }, S.prototype.rotate = function(e, t, n) { var r = Math.cos(e),
                i = Math.sin(e);
            t = t || 0, n = n || 0, this.a = r, this.c = -i, this.b = i, this.d = r, this.tx += t - t * r + n * i, this.ty += n - t * i - n * r }, S.prototype.scale = function(e, t) { this.a *= e, this.c *= e, this.b *= t, this.d *= t }, { create: x } }),
    define("get-location", ["jquery/nyt", "d3/3"], function(e, t) { return function(t) { e.getJSON("http://geoip.newsdev.nytimes.com/").success(function(e) { e.response ? t(null, [e.d3.longitude, e.data.latitude]) : t(null, null) }).error(function() { t(null, null) }) } }),
    define("process-data", ["d3/3", "nytg-vote-map/lib/vmap-states-reference"],
        function(e, t) {
            var n = ["", "_m", "_f"],
                r = "kr26",
                i = [25, 50, 75, 100],
                s = e.format("05d"),
                o = "#f0f0f0";
            return

            function(a, f, l) {
                function d(e, t, n) { var i, s, u, a, f, h = "key_" + String(n) + t,
                        d = c[r + t + "_mean_inc"],
                        v = c[r + t + "_pctgain"],
                        y = m(d, n);
                    p.add(h); for (var b = 0, w = e.length; b < w; b++) i = e[b], s = t ? g(i, t, n) : (g(i, "_m", n) + g(i, "_f", n)) / 2, pctgain1 = m(v, n) * s, a = pctgain1 / 100 * y, f = isNaN(a) ? o : l(a), i[h] = { fillColor: f, pct: pctgain1, dollars: a } }

                function v(e, t) {
                    var n, r = p.length,
                        i, s = e + "rank",
                        o = e + "group",
                        u, a = t.length,
                        f,
                        l = function(e) { return !isNaN(e[i].pct) },
                        c = function(e, t) { return e[i].pct - t[i].pct };
                    for (n = 0; n < r; n++) { i = p[n]; for (u = 0; u < a; u++) { f = t[u]; var h = f.values.filter(l).sort(c),
                                d = h.length,
                                v, m; for (m = 0; m < d; m++) v = h[m][i], v[o] = h, v[s] = d - m } }
                }

                function m(e, t) { return e.intercept + t * e.slope }

                function g(e, t, n) { var i = e["causal_int_" + r + t],
                        s = e["causal_slope_" + r + t]; return isNaN(i) || isNaN(s) ? NaN : i + n * s }
                var c = e.nest().key(ƒ("varname")).rollup(ƒ(0)).map(f),
                    h = {},
                    p = e.set();
                return a.forEach(function(e) { e.niceStateAbbrv = t.getAbbrev(e.stateabbrv), e.nicePlace = e.ctyname + ", " + e.niceStateAbbrv, e.lcname = e.nicePlace.toLowerCase(), e.cty = s(e.cty), e.byKey = {}, h[e.cty] = e }), n.forEach(function(e) { i.forEach(function(t) { d(a, e, t) }) }), p = p.values(), v("national", [{ values: a }]), v("state", e.nest().key(ƒ("stateabbrv")).entries(a)), v("cz", e.nest().key(ƒ("cz")).entries(a)), firstRun = !1, { keys: p, list: a, byFips: h }
            }
        }),
    define("lib/typeahead.jquery", ["jquery/nyt"],
        function(e) {
            (function(e) {
                var t = function() {
                        "use strict";
                        return {
                            isMsie: function() { return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1 },
                            isBlankString: function(e) { return !e || /^\s*$/.test(e) },
                            escapeRegExChars: function(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") },
                            isString: function(e) { return typeof e == "string" },
                            isNumber: function(e) { return typeof e == "number" },
                            isArray: e.isArray,
                            isFunction: e.isFunction,
                            isObject: e.isPlainObject,
                            isUndefined: function(e) { return typeof e == "undefined" },
                            toStr: function(n) { return t.isUndefined(n) || n === null ? "" : n + "" },
                            bind: e.proxy,
                            each: function(t, n) {
                                function r(e, t) { return n(t, e) } e.each(t, r)
                            },
                            map: e.map,
                            filter: e.grep,
                            every: function(t, n) {
                                var r = !0;
                                return t ? (e.each(t,
                                    function(e, i) { if (!(r = n.call(null, i, e, t))) return !1 }), !!r) : r
                            },
                            some: function(t, n) {
                                var r = !1;
                                return t ? (e.each(t,
                                    function(e, i) { if (r = n.call(null, i, e, t)) return !1 }), !!r) : r
                            },
                            mixin: e.extend,
                            getUniqueId: function() { var e = 0; return function() { return e++ } }(),
                            templatify: function(n) {
                                function r() { return String(n) }
                                return e.isFunction(n) ? n : r
                            },
                            defer: function(e) { setTimeout(e, 0) },
                            debounce: function(e, t, n) {
                                var r, i;
                                return

                                function() {
                                    var s = this,
                                        o = arguments,
                                        u, a;
                                    return u =
                                        function() { r = null, n || (i = e.apply(s, o)) }, a = n && !r, clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                                }
                            },
                            throttle: function(e, t) {
                                var n, r, i, s, o, u;
                                return o = 0, u = function() { o = new Date, i = null, s = e.apply(n, r) },
                                    function() { var a = new Date,
                                            f = t - (a - o); return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s }
                            },
                            noop: function() {}
                        }
                    }(),
                    n = function() { return { wrapper: '<span class="twitter-typeahead"></span>', dropdown: '<span class="tt-dropdown-menu"></span>', dataset: '<div class="tt-dataset-%CLASS%"></div>', suggestions: '<span class="tt-suggestions"></span>', suggestion: '<div class="tt-suggestion"></div>' } }(),
                    r =
                    function() { "use strict"; var e = { wrapper: { position: "relative", display: "inline-block" }, hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none", opacity: "1" }, input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" }, inputWithNoHint: { position: "relative", verticalAlign: "top" }, dropdown: { position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none" }, suggestions: { display: "block" }, suggestion: { whiteSpace: "nowrap", cursor: "pointer" }, suggestionChild: { whiteSpace: "normal" }, ltr: { left: "0", right: "auto" }, rtl: { left: "auto", right: " 0" } }; return t.isMsie() && t.mixin(e.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }), t.isMsie() && t.isMsie() <= 7 && t.mixin(e.input, { marginTop: "-1px" }), e }(),
                    i =
                    function() {
                        "use strict";

                        function r(t) {
                            (!t || !t.el) && e.error("EventBus initialized without el"), this.$el = e(t.el) }
                        var n = "typeahead:";
                        return t.mixin(r.prototype, { trigger: function(e) { var t = [].slice.call(arguments, 1);
                                this.$el.trigger(n + e, t) } }), r
                    }(),
                    s =
                    function() {
                        "use strict";

                        function n(t, n, r, i) { var s; if (!r) return this;
                            n = n.split(e), r = i ? f(r, i) : r, this._callbacks = this._callbacks || {}; while (s = n.shift()) this._callbacks[s] = this._callbacks[s] || { sync: [], async: [] }, this._callbacks[s][t].push(r); return this }

                        function r(e, t, r) { return n.call(this, "async", e, t, r) }

                        function i(e, t, r) { return n.call(this, "sync", e, t, r) }

                        function s(t) { var n; if (!this._callbacks) return this;
                            t = t.split(e); while (n = t.shift()) delete this._callbacks[n]; return this }

                        function o(n) { var r, i, s, o, a; if (!this._callbacks) return this;
                            n = n.split(e), s = [].slice.call(arguments, 1); while ((r = n.shift()) && (i = this._callbacks[r])) o = u(i.sync, this, [r].concat(s)), a = u(i.async, this, [r].concat(s)), o() && t(a); return this }

                        function u(e, t, n) {
                            function r() { var r; for (var i = 0, s = e.length; !r && i < s; i += 1) r = e[i].apply(t, n) === !1; return !r }
                            return r
                        }

                        function a() {
                            var e;
                            return window.setImmediate ? e = function(t) {
                                setImmediate(
                                    function() { t() })
                            } : e = function(t) { setTimeout(function() { t() }, 0) }, e
                        }

                        function f(e, t) { return e.bind ? e.bind(t) : function() { e.apply(t, [].slice.call(arguments, 0)) } }
                        var e = /\s+/,
                            t = a();
                        return { onSync: i, onAsync: r, off: s, trigger: o }
                    }(),
                    o =
                    function(e) {
                        "use strict";

                        function r(e, n, r) { var i = [],
                                s; for (var o = 0, u = e.length; o < u; o++) i.push(t.escapeRegExChars(e[o])); return s = r ? "\\b(" + i.join("|") + ")\\b" : "(" + i.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i") }
                        var n = { node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1 };
                        return

                        function(s) {
                            function u(t) { var n, r, i; if (n = o.exec(t.data)) i = e.createElement(s.tagName), s.className && (i.className = s.className), r = t.splitText(n.index), r.splitText(n[0].length), i.appendChild(r.cloneNode(!0)), t.parentNode.replaceChild(i, r); return !!n }

                            function a(e, t) { var n, r = 3; for (var i = 0; i < e.childNodes.length; i++) n = e.childNodes[i], n.nodeType === r ? i += t(n) ? 1 : 0 : a(n, t) }
                            var o;
                            s = t.mixin({}, n, s);
                            if (!s.node || !s.pattern) return;
                            s.pattern = t.isArray(s.pattern) ? s.pattern : [s.pattern], o = r(s.pattern, s.caseSensitive, s.wordsOnly), a(s.node, u)
                        }
                    }(window.document),
                    u =
                    function() {
                        "use strict";

                        function r(r) {
                            var s = this,
                                o, u, a, f;
                            r = r || {}, r.input || e.error("input is missing"), o = t.bind(this._onBlur, this), u = t.bind(this._onFocus, this), a = t.bind(this._onKeydown, this), f = t.bind(this._onInput, this), this.$hint = e(r.hint), this.$input = e(r.input).on("blur.tt", o).on("focus.tt", u).on("keydown.tt", a), this.$hint.length === 0 && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop), t.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",
                                function(e) { if (n[e.which || e.keyCode]) return;
                                    t.defer(t.bind(s._onInput, s, e)) }) : this.$input.on("input.tt", f), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
                        }

                        function i(t) { return e('<pre aria-hidden="true"></pre>').css({ position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: t.css("font-family"), fontSize: t.css("font-size"), fontStyle: t.css("font-style"), fontVariant: t.css("font-variant"), fontWeight: t.css("font-weight"), wordSpacing: t.css("word-spacing"), letterSpacing: t.css("letter-spacing"), textIndent: t.css("text-indent"), textRendering: t.css("text-rendering"), textTransform: t.css("text-transform") }).insertAfter(t) }

                        function o(e, t) { return r.normalizeQuery(e) === r.normalizeQuery(t) }

                        function u(e) { return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey }
                        var n;
                        return n = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" }, r.normalizeQuery = function(e) { return (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ") }, t.mixin(r.prototype, s, {
                            _onBlur: function() { this.resetInputValue(), this.trigger("blurred") },
                            _onFocus: function() { this.trigger("focused") },
                            _onKeydown: function(t) { var r = n[t.which || t.keyCode];
                                this._managePreventDefault(r, t), r && this._shouldTrigger(r, t) && this.trigger(r + "Keyed", t) },
                            _onInput: function() { this._checkInputValue() },
                            _managePreventDefault: function(t, n) { var r, i, s; switch (t) {
                                    case "tab":
                                        i = this.getHint(), s = this.getInputValue(), r = i && i !== s && !u(n); break;
                                    case "up":
                                    case "down":
                                        r = !u(n); break;
                                    default:
                                        r = !1 } r && n.preventDefault() },
                            _shouldTrigger: function(t, n) { var r; switch (t) {
                                    case "tab":
                                        r = !u(n); break;
                                    default:
                                        r = !0 } return r },
                            _checkInputValue: function() { var t, n, r;
                                t = this.getInputValue(), n = o(t, this.query), r = n ? this.query.length !== t.length : !1, this.query = t, n ? r && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query) },
                            focus: function() { this.$input.focus() },
                            blur: function() { this.$input.blur() },
                            getQuery: function() { return this.query },
                            setQuery: function(t) { this.query = t },
                            getInputValue: function() { return this.$input.val() },
                            setInputValue: function(t, n) { this.$input.val(t), n ? this.clearHint() : this._checkInputValue() },
                            resetInputValue: function() { this.setInputValue(this.query, !0) },
                            getHint: function() { return this.$hint.val() },
                            setHint: function(t) { this.$hint.val(t) },
                            clearHint: function() { this.setHint("") },
                            clearHintIfInvalid: function() { var t, n, r, i;
                                t = this.getInputValue(), n = this.getHint(), r = t !== n && n.indexOf(t) === 0, i = t !== "" && r && !this.hasOverflow(), !i && this.clearHint() },
                            getLanguageDirection: function() { return (this.$input.css("direction") || "ltr").toLowerCase() },
                            hasOverflow: function() { var t = this.$input.width() - 2; return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t },
                            isCursorAtEnd: function() { var e, n, r; return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : document.selection ? (r = document.selection.createRange(), r.moveStart("character", -e), e === r.text.length) : !0 },
                            destroy: function() { this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null }
                        }), r
                    }(),
                    a = function() { "use strict";

                        function f(r) { r = r || {}, r.templates = r.templates || {}, r.source || e.error("missing source"), r.name && !h(r.name) && e.error("invalid dataset name: " + r.name), this.query = null, this.highlight = !!r.highlight, this.name = r.name || t.getUniqueId(), this.source = r.source, this.displayFn = l(r.display || r.displayKey), this.templates = c(r.templates, this.displayFn), this.$el = e(n.dataset.replace("%CLASS%", this.name)) }

                        function l(e) {
                            function n(t) { return t[e] } return e = e || "value", t.isFunction(e) ? e : n }

                        function c(e, n) {
                            function r(e) { return "<p>" + n(e) + "</p>" } return { empty: e.empty && t.templatify(e.empty), header: e.header && t.templatify(e.header), footer: e.footer && t.templatify(e.footer), suggestion: e.suggestion || r } }

                        function h(e) { return /^[_a-zA-Z0-9-]+$/.test(e) } var i = "ttDataset",
                            u = "ttValue",
                            a = "ttDatum"; return f.extractDatasetName = function(n) { return e(n).data(i) }, f.extractValue = function(n) { return e(n).data(u) }, f.extractDatum = function(n) { return e(n).data(a) }, t.mixin(f.prototype, s, { _render: function(f, l) {
                                function p() { return c.templates.empty({ query: f, isEmpty: !0 }) }

                                function d() {
                                    function p(t) { var s; return s = e(n.suggestion).append(c.templates.suggestion(t)).data(i, c.name).data(u, c.displayFn(t)).data(a, t), s.children().each(function() { e(this).css(r.suggestionChild) }), s } var s, h; return s = e(n.suggestions).css(r.suggestions), h = t.map(l, p), s.append.apply(s, h), c.highlight && o({ className: "tt-highlight", node: s[0], pattern: f }), s }

                                function v() { return c.templates.header({ query: f, isEmpty: !h }) }

                                function m() { return c.templates.footer({ query: f, isEmpty: !h }) } if (!this.$el) return; var c = this,
                                    h;
                                this.$el.empty(), h = l && l.length, !h && this.templates.empty ? this.$el.html(p()).prepend(c.templates.header ? v() : null).append(c.templates.footer ? m() : null) : h && this.$el.html(d()).prepend(c.templates.header ? v() : null).append(c.templates.footer ? m() : null), this.trigger("rendered") }, getRoot: function() { return this.$el }, update: function(t) {
                                function r(e) {!n.canceled && t === n.query && n._render(t, e) } var n = this;
                                this.query = t, this.canceled = !1, this.source(t, r) }, cancel: function() { this.canceled = !0 }, clear: function() { this.cancel(), this.$el.empty(), this.trigger("rendered") }, isEmpty: function() { return this.$el.is(":empty") }, destroy: function() { this.$el = null } }), f }(),
                    f = function() { "use strict";

                        function n(n) { var r = this,
                                s, o, u;
                            n = n || {}, n.menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = t.map(n.datasets, i), s = t.bind(this._onSuggestionClick, this), o = t.bind(this._onSuggestionMouseEnter, this), u = t.bind(this._onSuggestionMouseLeave, this), this.$menu = e(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", u), t.each(this.datasets, function(e) { r.$menu.append(e.getRoot()), e.onSync("rendered", r._onRendered, r) }) }

                        function i(e) { return new a(e) } return t.mixin(n.prototype, s, { _onSuggestionClick: function(n) { this.trigger("suggestionClicked", e(n.currentTarget)) }, _onSuggestionMouseEnter: function(n) { this._removeCursor(), this._setCursor(e(n.currentTarget), !0) }, _onSuggestionMouseLeave: function() { this._removeCursor() }, _onRendered: function() {
                                function n(e) { return e.isEmpty() } this.isEmpty = t.every(this.datasets, n), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered") }, _hide: function() { this.$menu.hide() }, _show: function() { this.$menu.css("display", "block") }, _getSuggestions: function() { return this.$menu.find(".tt-suggestion") }, _getCursor: function() { return this.$menu.find(".tt-cursor").first() }, _setCursor: function(t, n) { t.first().addClass("tt-cursor"), !n && this.trigger("cursorMoved") }, _removeCursor: function() { this._getCursor().removeClass("tt-cursor") }, _moveCursor: function(t) { var n, r, i, s; if (!this.isOpen) return;
                                r = this._getCursor(), n = this._getSuggestions(), this._removeCursor(), i = n.index(r) + t, i = (i + 1) % (n.length + 1) - 1; if (i === -1) { this.trigger("cursorRemoved"); return } i < -1 && (i = n.length - 1), this._setCursor(s = n.eq(i)), this._ensureVisible(s) }, _ensureVisible: function(t) { var n, r, i, s;
                                n = t.position().top, r = n + t.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), n < 0 ? this.$menu.scrollTop(i + n) : s < r && this.$menu.scrollTop(i + (r - s)) }, close: function() { this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed")) }, open: function() { this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened")) }, setLanguageDirection: function(t) { this.$menu.css(t === "ltr" ? r.ltr : r.rtl) }, moveCursorUp: function() { this._moveCursor(-1) }, moveCursorDown: function() { this._moveCursor(1) }, getDatumForSuggestion: function(t) { var n = null; return t.length && (n = { raw: a.extractDatum(t), value: a.extractValue(t), datasetName: a.extractDatasetName(t) }), n }, getDatumForCursor: function() { return this.getDatumForSuggestion(this._getCursor().first()) }, getDatumForTopSuggestion: function() { return this.getDatumForSuggestion(this._getSuggestions().first()) }, update: function(n) {
                                function r(e) { e.update(n) } t.each(this.datasets, r) }, empty: function() {
                                function n(e) { e.clear() } t.each(this.datasets, n), this.isEmpty = !0 }, isVisible: function() { return this.isOpen && !this.isEmpty }, destroy: function() {
                                function n(e) { e.destroy() } this.$menu.off(".tt"), this.$menu = null, t.each(this.datasets, n) } }), n }(),
                    l = function() { "use strict";

                        function o(n) { var r, s, o;
                            n = n || {}, n.input || e.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.$node = a(n.input, n.withHint), r = this.$node.find(".tt-dropdown-menu"), s = this.$node.find(".tt-input"), o = this.$node.find(".tt-hint"), s.on("blur.tt", function(e) { var n, i, o;
                                n = document.activeElement, i = r.is(n), o = r.has(n).length > 0, t.isMsie() && (i || o) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function() { s.focus() })) }), r.on("mousedown.tt", function(e) { e.preventDefault() }), this.eventBus = n.eventBus || new i({ el: s }), this.dropdown = (new f({ menu: r, datasets: n.datasets })).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = (new u({ input: s, hint: o })).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection() }

                        function a(t, i) { var o, u, a, f;
                            o = e(t), u = e(n.wrapper).css(r.wrapper), a = e(n.dropdown).css(r.dropdown), f = o.clone().css(r.hint).css(l(o)), f.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({ autocomplete: "off", spellcheck: "false", tabindex: -1 }), o.data(s, { dir: o.attr("dir"), autocomplete: o.attr("autocomplete"), spellcheck: o.attr("spellcheck"), style: o.attr("style") }), o.addClass("tt-input").attr({ autocomplete: "off", spellcheck: !1 }).css(i ? r.input : r.inputWithNoHint); try {!o.attr("dir") && o.attr("dir", "auto") } catch (c) {} return o.wrap(u).parent().prepend(i ? f : null).append(a) }

                        function l(e) { return { backgroundAttachment: e.css("background-attachment"), backgroundClip: e.css("background-clip"), backgroundColor: e.css("background-color"), backgroundImage: e.css("background-image"), backgroundOrigin: e.css("background-origin"), backgroundPosition: e.css("background-position"), backgroundRepeat: e.css("background-repeat"), backgroundSize: e.css("background-size") } }

                        function c(e) { var n = e.find(".tt-input");
                            t.each(n.data(s), function(e, r) { t.isUndefined(e) ? n.removeAttr(r) : n.attr(r, e) }), n.detach().removeData(s).removeClass("tt-input").insertAfter(e), e.remove() } var s = "ttAttrs"; return t.mixin(o.prototype, { _onSuggestionClicked: function(t, n) { var r;
                                (r = this.dropdown.getDatumForSuggestion(n)) && this._select(r) }, _onCursorMoved: function() { var t = this.dropdown.getDatumForCursor();
                                this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName) }, _onCursorRemoved: function() { this.input.resetInputValue(), this._updateHint() }, _onDatasetRendered: function() { this._updateHint() }, _onOpened: function() { this._updateHint(), this.eventBus.trigger("opened") }, _onClosed: function() { this.input.clearHint(), this.eventBus.trigger("closed") }, _onFocused: function() { this.isActivated = !0, this.dropdown.open() }, _onBlurred: function() { this.isActivated = !1, this.dropdown.empty(), this.dropdown.close() }, _onEnterKeyed: function(t, n) { var r, i;
                                r = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), r ? (this._select(r), n.preventDefault()) : this.autoselect && i && (this._select(i), n.preventDefault()) }, _onTabKeyed: function(t, n) { var r;
                                (r = this.dropdown.getDatumForCursor()) ? (this._select(r), n.preventDefault()) : this._autocomplete(!0) }, _onEscKeyed: function() { this.dropdown.close(), this.input.resetInputValue() }, _onUpKeyed: function() { var t = this.input.getQuery();
                                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open() }, _onDownKeyed: function() { var t = this.input.getQuery();
                                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open() }, _onLeftKeyed: function() { this.dir === "rtl" && this._autocomplete() }, _onRightKeyed: function() { this.dir === "ltr" && this._autocomplete() }, _onQueryChanged: function(t, n) { this.input.clearHintIfInvalid(), n.length >= this.minLength ? this.dropdown.update(n) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection() }, _onWhitespaceChanged: function() { this._updateHint(), this.dropdown.open() }, _setLanguageDirection: function() { var t;
                                this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t)) }, _updateHint: function() { var n, r, i, s, o, a;
                                n = this.dropdown.getDatumForTopSuggestion(), n && this.dropdown.isVisible() && !this.input.hasOverflow() ? (r = this.input.getInputValue(), i = u.normalizeQuery(r), s = t.escapeRegExChars(i), o = new RegExp("^(?:" + s + ")(.+$)", "i"), a = o.exec(n.value), a ? this.input.setHint(r + a[1]) : this.input.clearHint()) : this.input.clearHint() }, _autocomplete: function(t) { var n, r, i, s;
                                n = this.input.getHint(), r = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), n && r !== n && i && (s = this.dropdown.getDatumForTopSuggestion(), s && this.input.setInputValue(s.value), this.eventBus.trigger("autocompleted", s.raw, s.datasetName)) }, _select: function(n) { this.input.setQuery(n.value), this.input.setInputValue(n.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", n.raw, n.datasetName), this.dropdown.close(), t.defer(t.bind(this.dropdown.empty, this.dropdown)) }, open: function() { this.dropdown.open() }, close: function() { this.dropdown.close() }, setVal: function(n) { n = t.toStr(n), this.isActivated ? this.input.setInputValue(n) : (this.input.setQuery(n), this.input.setInputValue(n, !0)), this._setLanguageDirection() }, getVal: function() { return this.input.getQuery() }, destroy: function() { this.input.destroy(), this.dropdown.destroy(), c(this.$node), this.$node = null } }), o }();
                (function() {
                    "use strict";
                    var n, r, s;
                    n = e.fn.typeahead, r = "ttTypeahead", s = {
                        initialize: function(s, o) {
                            function u() { var n = e(this),
                                    u, a;
                                t.each(o, function(e) { e.highlight = !!s.highlight }), a = new l({ input: n, eventBus: u = new i({ el: n }), withHint: t.isUndefined(s.hint) ? !0 : !!s.hint, minLength: s.minLength, autoselect: s.autoselect, datasets: o }), n.data(r, a) } return o = t.isArray(o) ? o : [].slice.call(arguments, 1), s = s || {}, this.each(u) },
                        open: function() {
                            function n() { var t = e(this),
                                    n;
                                (n = t.data(r)) && n.open() } return this.each(n) },
                        close: function() {
                            function n() { var t = e(this),
                                    n;
                                (n = t.data(r)) && n.close() } return this.each(n) },
                        val: function(n) {
                            function i() { var t = e(this),
                                    i;
                                (i = t.data(r)) && i.setVal(n) }

                            function s(e) { var t, n; if (t = e.data(r)) n = t.getVal(); return n } return arguments.length ? this.each(i) : s(this.first()) },
                        destroy: function() {
                            function n() { var t = e(this),
                                    n; if (n = t.data(r)) n.destroy(), t.removeData(r) } return this.each(n) }
                    }, e.fn.typeahead = function(t) { var n; return s[t] && t !== "initialize" ? (n = this.filter(function() { return !!e(this).data(r) }), s[t].apply(n, [].slice.call(arguments, 1))) : s.initialize.apply(this, arguments) }, e.fn.typeahead.noConflict = function() { return e.fn.typeahead = n, this }
                })()
            })(e)
        }),
    function() {
        function e(e) {
            function n(e) { if (typeof e == "string") { var n = {},
                        r = e.split(t),
                        i;
                    e = r.shift(); while (i = r.shift()) i == "." ? n["class"] = n["class"] ? n["class"] + " " + r.shift() : r.shift() : i == "#" && (n.id = r.shift()); return n.id || n["class"] ? { tag: e, attr: n } : e } return e }

            function r(t) { return typeof t == "function" ? t : (t = e.ns.qualify(t)).local ? function() { return this.ownerDocument.createElementNS(t.space, t.local) } : function() { return this.ownerDocument.createElementNS(this.namespaceURI, t) } }

            function i(e) { return typeof e == "function" ? e : function() { return this.querySelector(e) } } e.selection.prototype.translate = function(e) { return this.attr("transform", function(t, n) { return "translate(" + [typeof e == "function" ? e(t, n) : e] + ")" }) }, e.selection.prototype.tspans = function(e, t) { return this.selectAll("tspan").data(function(n, r) { var i = typeof t == "function" ? t(n, r) : t || 15,
                        s = typeof e == "function" ? e(n, r) : e; return s.map(function(e) { return [e, i, s.length] }) }).enter().append("tspan").text(function(e) { return e[0] }).attr("x", 0).attr("dy", function(e, t) { return t ? e[1] : -e[1] * .5 * (e[2] - 1.7) }) }, e.selection.prototype.append = e.selection.enter.prototype.append = function(e) { var t = n(e),
                    i; return e = t.attr ? t.tag : e, e = r(e), i = this.select(function() { return this.appendChild(e.apply(this, arguments)) }), t.attr ? i.attr(t.attr) : i }, e.selection.prototype.insert = e.selection.enter.prototype.insert = function(e, t) { var s = n(e),
                    o; return e = s.attr ? s.tag : e, e = r(e), t = i(t), o = this.select(function() { return this.insertBefore(e.apply(this, arguments), t.apply(this, arguments) || null) }), s.attr ? o.attr(s.attr) : o }; var t = /([\.#])/g;
            e.wordwrap = function(e, t) { var n = e.split(" "),
                    r = [],
                    i = [],
                    s = t || 40,
                    o = 0; return n.forEach(function(e, t) { o + e.length > s && (i.join("").length > 5 || t == n.length - 2) && (r.push(i.join(" ")), i.length = 0, o = 0), o += e.length, i.push(e) }), i.length && r.push(i.join(" ")), r }, e.ascendingKey = function(e) { return typeof e == "function" ? function(t, n) { return e(t) < e(n) ? -1 : e(t) > e(n) ? 1 : e(t) >= e(n) ? 0 : NaN } : function(t, n) { return t[e] < n[e] ? -1 : t[e] > n[e] ? 1 : t[e] >= n[e] ? 0 : NaN } }, e.descendingKey = function(e) { return typeof e == "function" ? function(t, n) { return e(n) < e(t) ? -1 : e(n) > e(t) ? 1 : e(n) >= e(t) ? 0 : NaN } : function(t, n) { return n[e] < t[e] ? -1 : n[e] > t[e] ? 1 : n[e] >= t[e] ? 0 : NaN } }, e.f = function() { var e = arguments,
                    t = 0,
                    n = e.length; while (t < n) typeof e[t] == "string" || typeof e[t] == "number" ? e[t] = function(e) { return function(t) { return t[e] } }(e[t]) : typeof e[t] == "object" && (e[t] = function(e) { return function(t) { return e[t] } }(e[t])), t++; return function(t) { var n = 0,
                        r = e.length; while (n++ < r) t = e[n - 1].call(this, t); return t } }, window.hasOwnProperty("ƒ") || (window.ƒ = e.f) } typeof d3 == "object" && d3.version ? e(d3) : typeof define == "function" && define.amd && define("lib/d3-jetpack", ["d3/3"], e) }(), require(["jquery/nyt", "underscore/1.6", "foundation/views/page-manager", "nyt5/analytics", "d3/3", "queue/1", "nytg-vote-map/lib/topojson-utils.js", "nytg-vote-map/lib/vmap.js", "nytg-vote-map/lib/vmap-states-reference", "nytg-vote-map/lib/vmap-projections", "nytg-vote-map/lib/vmap-hit", "get-location", "process-data", "lib/typeahead.jquery", "lib/d3-jetpack"],
        function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
            function V(e) { return function(t) { var n, r; for (var i = 0, s = e.length; i < s; i++) n = e[i], r = t[n], t[n] = r == "" ? NaN : Number(r); return t } }

            function $(n, r, s, c, g) {
                function nt(e) { var t = $(e),
                        n = l.findHitPolygon(t[0], t[1], V); return n ? n.properties.ADMIN_FIPS : !1 }

                function rt() { y.refresh(), ft(SELECTEDFIPS) }

                function it(e) { return H[e] || _[e] }

                function st() { var e = d + v,
                        t = P[e].keyLabel;
                    t = t.replace("child in an", "children in").replace("child in a", "children in").replace("girl in an", "girls in").replace("girl in a", "girls in").replace("boy in an", "boys in").replace("boy in a", "boys in").replace("family", "families"), i.selectAll(".g-selected-group-name").text(t), i.select(".g-selected-income-type").text(t) }

                function ot(e) { x.style("display", "none"), T.style("display", "inline"); var t = e.properties.ADMIN_FIPS;
                    e.properties.record && ft(t) }

                function ut() { window.location.hash = SELECTEDFIPS + "-" + d + "-" + v }

                function at(e) { if (e > .95) return "It is among the best counties in the U.S."; if (e < .05) return "It is among the worst counties in the U.S."; var t = 'It is better than <span class="g-local-def g-nat-pct">' + e + "</span>."; return t }

                function ft(e, t) {
                    function I(e) { return e.map(ht) }

                    function X(e, t) {
                        var r = ["", "_m", "_f"].map(function(t) { return n["key_" + e + t] }),
                            i = [{
                                title: "Group",
                                cl: "g-group-type",
                                text: function(e, t) { return ["All kids", "Boys", "Girls"][t] }
                            }, {
                                title: "Income chg.",
                                cl: "g-sal-chg g-cell g-num",
                                textCol: function(e) { return textColor(e.dollars) },
                                color: function(e) { return A(e.dollars) },
                                text: function(e) { return B(20 * e.dollars) }
                            }, {
                                title: "Nat. pct.",
                                cl: "g-national-rank g-cell g-num",
                                text: function(e) { return M(ht(e)) }
                            }],
                            s = L.append("div").attr("class", function(t) { return "g-tbl-group g-tbl-" + e }),
                            o =
                            function() { var t = "For " + { 25: "poor", 50: "average-income", 75: "rich", 100: "the top 1% of" }[e] + " kids"; return t != "For the top 1% of kids" ? t : "For kids in the top 1%" };
                        s.append("h4").attr("class", "g-bottom-table-sentence").text(o());
                        var u = s.append("table");
                        return u.append("thead").append("tr").selectAll("th").data(i).enter().append("th").attr("class",
                            function(e) { return e.cl + " g-title" }).text(ƒ("title")), u.append("tbody").selectAll("tr").data(r).enter().append("tr").selectAll("td").data(function(e, t) { return i.map(function(n) { return { html: n.text(e, t), bg: n.color ? n.color(e, t) : "", tc: n.textCol ? n.textCol(e, t) : "", cl: n.cl } }) }).enter().append("td").attr("class",
                            function(e) { return e.cl }).style("background-color", function(e) { return e.bg }).style("color", function(e) { return e.tc }).html(function(e) { return e.html }), r
                    }
                    N.style("display", d === 25 ? "inline" : "none");
                    var n = b.byFips[e];
                    if (!n || isNaN(n[m].pct)) return setTimeout(function() { ft(w) }, 500), console.warn("no data for " + e);
                    S || C.attr("src", "https://int.nyt.com/newsgraphics/2015/20150504-upward-mobility/" + e + ".png"), e != SELECTEDFIPS && (SELECTEDFIPS = e, S && yt(e)), N.style("display", d === 25 ? "inline" : "none"), vt(n, n.cz, n.stateabbrv), t || (i.select(".g-default-headline").classed("g-hidden", !0), i.select(".g-custom-headline").classed("g-hidden", !1), i.select(".interactive-leadin.summary").classed("g-hidden", !1)), i.select(".g-upshot-sentence").style("display", "block");
                    var r = t ? "your county" : it(e).replace("District of Columbia", "Washington, D.C.,");
                    i.selectAll(".g-selected-county").text(r);
                    var s = r.replace("the Bronx", "The Bronx");
                    i.selectAll(".g-selected-county-firstword").text(s), i.selectAll(".g-selected-county-state").text(r + (H[e] ? "" : ", " + n.niceStateAbbrv));
                    var o = ht(n[m]),
                        u = ht(n.key_25);
                    i.select(".g-place-context").html(at(o)), at(o), i.selectAll(".g-nat-pct").text(D(o)), i.selectAll(".g-nat-pct25").text(D(u)), i.select(".g-county-adjective").text(U(o)), st();
                    var f = n.countyName,
                        l = "the " + n.cz_name + " area",
                        c = "cz",
                        l = l.replace("the Newark area", "the Northern New Jersey area").replace("the Bridgeport area", "Connecticut").replace("the Washington DC area", "the Washington, D.C., area"),
                        h = "key_25";
                    n[h].czgroup.length < 3 && (c = "state", l = a.getName(n.stateabbrv));
                    var v = n[h][c + "group"],
                        g = v[v.length - 1],
                        y = v[0],
                        E = v[1];
                    i.selectAll(".g-selected-cz").text(l), i.selectAll(".g-cz-best").text(it(g.cty)), i.selectAll(".g-cz-best-no-county").text(it(g.cty).replace(/ County$/, "").replace(/ Parish$/, "")), i.select(".g-cz-worst").text(it(y.cty)), i.select(".g-cz-worst2").text(it(E.cty));
                    var x = g[h].dollars;
                    i.selectAll(".g-okay").classed("g-hidden", x <= 0), i.selectAll(".g-notokay").classed("g-hidden", x > 0), i.select(".g-cz-bestValue").text(F(Math.abs(Math.round(x / 10) * 10))), i.select(".g-cz-bestValue20").text(F(Math.abs(Math.round(20 * x / 100) * 100)));
                    var T = i.format(".0f")(Math.abs(20 * g[h].pct));
                    T === 0 && (T = i.format(".1f")(Math.abs(20 * g[h].pct))), i.select(".g-cz-bestValue20pct").text(T), i.select(".g-county-overview").text(z(o));
                    var k = n.key_25.nationalgroup.length - n.key_25.nationalrank;
                    i.select(".g-county-rank").text(i.format(",")(k) + Number.getOrdinalFor(k)), i.select(".g-county-n").text(i.format(",")(n.key_25.nationalgroup.length));
                    var L = i.select(".g-real-table-cont").html(""),
                        O = X(25, "kr26"),
                        _ = X(50, "kr26"),
                        P = X(75, "kr26"),
                        j = X(100, "kr26");
                    O = I(O), _ = I(_), P = I(P), j = I(j);
                    var q = "",
                        R = .1,
                        W = O.concat(_).concat(P).concat(j);
                    i.max(W) < .2 && (q += "Compared with the rest of the country, it is also bad for rich boys and rich girls. "), i.min(W) > .3 & i.max(W) < .7 && (q += "Compared with the rest of the country, it is also about average for rich boys and rich girls. "), i.min(W) > .75 && (q += "It is also among the best counties in improving the outcomes of higher-income boys and girls. "), O[1] - O[2] > R & j[1] - j[2] > R & O[2] < .4 ? q += "It is relatively worse for girls than it is for boys. " : O[1] - O[2] > R & O[2] < .4 && (q += "It is relatively worse for poor girls than it is for poor boys. "), O[2] - O[2] > R & j[2] - j[1] > R & O[1] < .4 ? q += "It is relatively worse for boys than it is for girls. " : O[2] - O[1] > R & O[1] < .4 && (q += "It is relatively worse for poor boys than it is for poor girls. "), P[0] > .5 & j[0] > .5 & O[0] < .3 && (q += "Although bad for poor children, it is above average for higher-income children. "), (P[0] < .5 | j[0] < .5) & O[0] < .3 & P[0] - O[0] > .2 && (q += "Although bad for poor children, it is somewhat better for higher-income children. "), O[0] - P[0] > R & O[1] > j[1] & O[2] > j[2] & q.length < 10 & n.cty != "51510" && (q += "It ranks better for poor children than it does for rich children."), n.cty === "36061" && (q += "(The low-income population in Manhattan is concentrated in the far northern and southern parts of the borough.)"), i.select(".g-optional-sentence").text(q), !p && !lt() && i.selectAll(".g-custom-place").transition().style("background", "#ffffcc").each("end", function() { i.select(this).transition().duration(1e3).style("background", "#ffffff") }), p = !1;
                    return
                }

                function lt() { var e = window.navigator.userAgent; return e.indexOf("MSIE ") > -1 ? !0 : !1 }

                function ct(e) { return e.czgroup.length - e.czrank }

                function ht(e) { return 1 - e.nationalrank / e.nationalgroup.length }

                function pt(e) { return e.charAt(0).toUpperCase() + e.slice(1) }

                function dt(e) { var t = e.properties.ADMIN_NAME + ", " + a.getAbbrev(e.properties.STATE);
                    e.properties.STATE == "DC" && (t = "Washington, D.C."); var n = e.properties.record; if (n && n[m].dollars) { var r = m.replace("key_", ""),
                            s = n[m].dollars,
                            o = 20 * n[m].pct / 100,
                            u = "<span class='g-tt-highlight'>" + P[r].keyLabel + "</span>",
                            f = "<span class='g-tt-highlight'>" + pt(P[r].keyLabel) + "</span>",
                            l = "<span class='g-tt-highlight'>" + (s > 0 ? "more" : "less") + "</span>",
                            c = I(Math.abs(20 * s)),
                            h = "<span class='g-tt-highlight'>" + t + ", " + "</span>",
                            p = i.format(".0f")(Math.abs(20 * n[m].pct)),
                            d = "<span class='g-tt-highlight'>" + (c + ", or " + p + " percent, ") + "</span>",
                            v = P[r].keyLabel[0] === "c" ? "he or she" : P[r].keyLabel[0] === "g" ? "she" : "he";
                        O.html("If a " + u + " were to grow up in " + h + " instead of an average place, " + v + " would make " + d + l + " at age 26.") } else O.html("No data for <strong>" + t + "</strong>") }

                function vt(n, s, o) {
                    function l(e) {
                        return

                        function(t) { return t[e][h + "rank"] === undefined ? "–" : t[e][h + "rank"] + Number.getOrdinalFor(t[e][h + "rank"]) }
                    }
                    var u = ["key_25_m", "key_25_f", "key_50_m", "key_50_f", "key_75_m", "key_75_f", "key_100_m", "key_100_f"],
                        f = [{
                            key: "c",
                            title: "County",
                            cl: "g-cty-name",
                            text: function(e, t) { return it(e.cty).replace(/ County$/, "").replace(/ Parish$/, "").replace("the Bronx", "Bronx") }
                        }, { key: "key_25_m", title: "Poor boys", cl: "g-cell-val g-num g-b25", text: l("key_25_m") }, { key: "key_25_f", title: "Poor girls", cl: "g-cell-val g-num g-f25", text: l("key_25_f") }, { key: "key_50_m", title: "Average boys", cl: "g-cell-val g-num g-b50 g-desktop-only", text: l("key_50_m") }, { key: "key_50_f", title: "Average girls", cl: "g-cell-val g-num g-f50 g-desktop-only", text: l("key_50_f") }, { key: "key_75_m", title: "Rich boys", cl: "g-cell-val g-num g-b75", text: l("key_75_m") }, { key: "key_75_f", title: "Rich girls", cl: "g-cell-val g-num g-f75", text: l("key_75_f") }, { key: "key_100_m", title: "Richest boys", cl: "g-cell-val g-num g-b99 g-desktop-only", text: l("key_100_m") }, { key: "key_100_f", title: "Richest girls", cl: "g-cell-val g-num g-f99 g-desktop-only", text: l("key_100_f") }, {
                            key: "r",
                            title: "Median rent",
                            cl: "g-cz-rent g-cell-val g-desktop-only",
                            text: function(e, t) { return j(e.median_rent) }
                        }],
                        c = r.filter(
                            function(e) { return e.cz == s && (!isNaN(e.key_25_m.dollars) || !isNaN(e.key_25_m.dollars)) }),
                        h = "cz";
                    c.length < 3 && (c = r.filter(
                        function(e) { return e.stateabbrv == o && (!isNaN(e.key_25_m.dollars) || !isNaN(e.key_25_m.dollars)) }), h = "state"), c = c.sort(
                        function(e, t) { return u.indexOf(m) > -1 ? e[m][h + "rank"] - t[m][h + "rank"] : e.key_25_m[h + "rank"] - t.key_25_m[h + "rank"] });
                    var p = !1;
                    h == "state" && c.length > 20 && (c = t.unique([].concat(c.slice(0, 5), n, c.slice(-5))), p = !0), c.forEach(
                        function(e) { Object.keys(e).forEach(function(t) { var n = e[t];
                                n.czgroup && (n.czPctRank = n.czgroup.length - n.czrank, n.statePctRank = n.stategroup.length - n.staterank) }) });
                    var d = i.select(".g-cz-table").html(""),
                        v = d.append("table");
                    v.append("thead").append("tr").selectAll("th").data(f).enter().append("th").attr("class", ƒ("cl")).classed("g-current-sort-header",
                        function(e) { return e.key === m }).text(ƒ("title")), v.append("tbody").selectAll("tr").data(c).enter().append("tr").on("click",
                        function(t) { e("#g-lookup,#g-lookup2").typeahead("val", ""), ft(t.cty) }).classed("g-selected-county-row",
                        function(e) { return e.cty === SELECTEDFIPS }).selectAll("td").data(function(e, t) { return f.map(function(n) { return { html: n.text(e, t), cl: n.cl } }) }).enter().append("td").attr("class",
                        function(e) { return e.cl }).classed("g-top-ranked",
                        function(e) { return e.html === "1st" }).text(function(e) { return e.html }), p === !0 ? (d.append("div").attr("class", "g-note").text("A selection of the best and worst counties in " + a.getName(o) + " is shown."), i.select(".g-neighbors").text("other places in the state")) : i.select(".g-neighbors").text("its neighbors")
                }

                function mt() {
                    function r(r) {
                        function i(e) { ft(e), yt(e), r.typeahead("close"), x.style("display", "none"), T.style("display", "inline"), n.forEach(function(e) { e.input != r && e.input.typeahead("val", r.typeahead("val")) }) } r.typeahead({ minLength: 2, highlight: !0 }, { displayKey: "nicePlace", source: function(e, n) { t = L.filter(function(t) { return t.lcname.indexOf(e.toLowerCase()) >= 0 }), n(t.slice(0, 20)) } }).on("typeahead:selected", function(e, t) { i(t.ADMIN_FIPS) }).on("keyup",
                            function(e) {
                                var n = s.tthint.val(),
                                    o = s.ttval.val(),
                                    u = t.filter(
                                        function(e) { return e.nicePlace == n || e.nicePlace == o })[0];
                                e.keyCode == 13 && u && n !== undefined && (r.typeahead("val") != u.nicePlace && r.typeahead("val", u.nicePlace), i(u.ADMIN_FIPS))
                            });
                        var s = { input: r, tthint: e(".tt-hint", r.parent()), ttval: e(".tt-input", r.parent()) };
                        n.push(s)
                    }
                    var t = [],
                        n = [];
                    r(e("#g-lookup")), r(e("#g-lookup2"))
                }

                function gt(e) { return e.properties.ADMIN_FIPS == SELECTEDFIPS }

                function yt(e, n) {
                    var r = { duration: J && !n ? undefined : 0, spacing: "10%" },
                        i = t.find(V.features,
                            function(t) { return t.properties.ADMIN_FIPS == e });
                    if (!i) return;
                    var s = i.properties.SQ_KM,
                        o = 17;
                    s < 150 ? o = 33 : s < 300 ? o = 28 : s < 600 && (o = 22), r.maxZoom = o;
                    if (y) try { y.zoomToFeature(i, r), J || (y.setLayers([Q, G, Y, Z, et]), J = !0) } catch (u) { console.warn(u) }
                }

                function bt(e, t) {
                    var n = t === "value" ? "g-map-label g-map-label-value" : "g-map-label";
                    return {
                        features: e,
                        minZoom: 9,
                        text: function(e) { if (t === "value") { if (!e.properties.record || e.properties.NAME === "") return ""; var n = e.properties.record[m].dollars; return isNaN(n) ? "" : q(20 * n) } return e.properties.NAME },
                        point: function(e) { return [e.properties.x, e.properties.y] },
                        style: {
                            dx: 0,
                            dy: t === "value" ? 12 : 0,
                            fill: function(e) { var t = e.properties.record; if (!t) return "black"; var n = t[m].fillColor; return i.lab(n).l < 36 ? "#ddd" : "black" },
                            classname: function(e) { return n + (gt(e) ? " selected" : "") }
                        }
                    }
                }
                var y, b = h(r, s, A);
                r = b.list, g.objects.counties.geometries.forEach(function(e) { e.properties.record = b.byFips[e.properties.ADMIN_FIPS] });
                var L = g.objects.counties.geometries.map(ƒ("properties")).filter(function(e) { return e.record }),
                    _ = i.nest().key(ƒ("ADMIN_FIPS")).rollup(ƒ(0, "ADMIN_NAME")).map(L);
                L.forEach(function(e) { e.nicePlace = e.ADMIN_NAME + ", " + a.getAbbrev(e.STATE), e.lcname = e.nicePlace.toLowerCase() });
                var H = { 36005: "the Bronx", 36061: "Manhattan", 36047: "Brooklyn", 36085: "Staten Island", 11001: "Washington", 24510: "Baltimore City", 51600: "Fairfax City" };
                if (n) throw "error loading data";
                R.html("");
                var B = function(e) { return i.format("+$,.0f")(10 * Math.round(e / 10)) },
                    j = i.format("$,.0f"),
                    I =
                    function(e) { return i.format("$,.0f")(10 * Math.round(e / 10)) },
                    W = i.nest().key(
                        function(e) { return e.cz }).rollup(
                        function(e) {
                            return e.map(
                                function(e) { return e.cty })
                        }).map(r),
                    X = i.nest().key(
                        function(e) { return e.stateabbrv }).rollup(
                        function(e) {
                            return e.map(
                                function(e) { return e.cty })
                        }).map(r),
                    V = o.feature(g, g.objects.counties),
                    $ = f.create("albersnyt");
                mt();
                if (!S) console.log("hiding map container?", S), i.selectAll(".g-map-container").style("display", "none");
                else {
                    console.log("showing map container", S), i.selectAll(".g-map-container").style("display", "block"), y = u.create("#g-income-map", { maxZoom: 40, height: "100%", bbox: [-24e5, -13e5, 23e5, 16e5] });
                    var J = !1,
                        K = i.select(".g-tooltip"),
                        Q = {
                            features: V,
                            style: {
                                fill: function(e) { return e.properties.record ? e.properties.record[m].fillColor : k }
                            },
                            onSelect: ot
                        };
                    E || (Q.onHover = y.popup({ div: ".g-tooltip" }).onHover(dt), Q.hoverStyle = { stroke: "black" });
                    var G = { features: o.meshes(g, g.objects.states, function(e, t) { return e !== t }), style: { stroke: "#fff" } },
                        Y = {
                            features: V,
                            style: {
                                stroke: "#000",
                                strokeWidth: 2,
                                opacity: function(e) { return e.properties.ADMIN_FIPS == SELECTEDFIPS ? 1 : 0 }
                            }
                        };
                    i.select(".zoom-in").on("click", y.zoomIn), i.select(".zoom-out").on("click", y.zoomOut);
                    var Z = bt(V),
                        et = bt(V, "value")
                }
                if (INITIALFIPS) ft(INITIALFIPS);
                else {
                    var tt = w;
                    c && (tt = nt(c) || tt), ft(tt), c || navigator.geolocation && navigator.geolocation.getCurrentPosition(
                        function(e) { var t = nt([e.coords.longitude, e.coords.latitude]);
                            t && ft(t) })
                }
                e(".g-use-my-loc").click(function(t) {
                    t.preventDefault(), navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) { var n = nt([t.coords.longitude, t.coords.latitude]);
                            n && (e("#g-lookup,#g-lookup2").typeahead("val", ""), ft(n)) },
                        function(e) { e.code == 1 && alert("Please enable location services on your device to use this feature.") })
                }), navigator.geolocation || e(".g-use-my-loc").remove(), window.select = function(e) { SELECTEDFIPS = e, rt(), yt(SELECTEDFIPS, !0) }, i.selectAll(".g-sex").on("click",
                    function(e) { var t = i.select(this);
                        i.selectAll(".g-sex").classed("g-active", !1), t.classed("g-active", !0), v = t.attr("suffix"), m = "key_" + d + v, rt() }), i.selectAll(".g-income").on("click",
                    function(e) { var t = i.select(this);
                        i.selectAll(".g-income").classed("g-active", !1), t.classed("g-active", !0), d = +t.attr("val"), m = "key_" + d + v, rt() });
                return
            }
            var p = !0;
            location.search == "?forceRetina" && (window.devicePixelRatio = window.webkitDevicePixelRatio = 2);
            var d = 25,
                v = "",
                m = "key_" + d + v,
                g = 20,
                y = ["#B63132", "#ECCB7B", "#FDF6A3", "#CCDBA3", "#276c91"],
                b = [-225, -75, 0, 75, 225],
                w = "36061";
            INITIALFIPS = /^.[0-9]{5}/.test(location.hash || "") ? location.hash.substr(1, 5) : null, SELECTEDFIPS = null;
            var E = magnum.device === "mobile",
                S = !E,
                x = i.select(".g-geo-guess"),
                T = i.select(".g-reader-choice"),
                N = i.select(".g-show-for-poor"),
                C = i.select(".g-mobile-fallback-map");
            S || e(".g-top-section .g-upshot-sentence").insertBefore(".g-top-section .g-county-search");
            var k = "#f0f0f0",
                L = i.format(".0%"),
                A = i.scale.linear().domain(b).range(y);
            i.selection.prototype.moveToFront =
                function() { return this.each(function() { this.parentNode.appendChild(this) }) };
            var O = i.select(".g-tooltip-sentence");
            (
                function(e) { Number.getOrdinalFor = function(t, n) { return (n ? t : "") + (e[((t = Math.abs(t % 100)) - 20) % 10] || e[t] || "th") } })([, "st", "nd", "rd"]);
            var M =
                function(e) { return e > .99 ? ">99%" : e < .01 ? "<1%" : j(e) },
                _ = i.format("05d"),
                D =
                function(e) { if (e === 1) return "every county in the nation"; if (e >= .995) return "almost every county in the nation"; if (e < .01) return "almost no county in the nation"; var t = i.round(100 * e),
                        n = t < 20 ? "only " : "",
                        r = n + " about " + t + " percent of counties"; return r },
                P = { 25: { keyLabel: "child in a poor family", hedLabel: "a Poor Child" }, "25_m": { keyLabel: "boy in a poor family", hedLabel: "a Poor Boy" }, "25_f": { keyLabel: "girl in a poor family", hedLabel: "a Poor Girl" }, 50: { keyLabel: "child in an average-income family", hedLabel: "an Average-income Child" }, "50_m": { keyLabel: "boy in an average-income family", hedLabel: "an Average-income Boy" }, "50_f": { keyLabel: "girl in an average-income family", hedLabel: "an Average Girl" }, 75: { keyLabel: "child in a rich family", hedLabel: "a Rich Child" }, "75_m": { keyLabel: "boy in a rich family", hedLabel: "a Rich Boy" }, "75_f": { keyLabel: "girl in a rich family", hedLabel: "a Rich Girl" }, 100: { keyLabel: "child in a family in the top 1%", hedLabel: "the Richest 1% of Children" }, "100_m": { keyLabel: "a boy in a family in the top 1%", hedLabel: "the Richest 1% of Boys" }, "100_f": { keyLabel: "girl in a family in the top 1%", hedLabel: "the Richest 1% of Girls" } };
            textColor = i.scale.threshold().range(["#FFFFFF", "#000000", "#ffffff"]).domain([-150, 150]);
            var H = i.select(".g-bottom-tables-container"),
                B = i.format("$,"),
                j = i.format("%"),
                F = i.format("$,.0f"),
                I = i.format("+$,.0f"),
                q = f
            unction(e) { return I(10 * Math.round(e / 10)) }, R = i.select("#g-income-map"), U = i.scale.threshold().domain([.05, .2, .4, .6, .8, .95]).range(["extremely bad", "very bad", "pretty bad", "about average", "pretty good", "very good", "extremely good"]), z = i.scale.threshold().domain([.2, .4, .6, .8]).range(["among the worst counties in the U.S.", "below average", "about average", "one of the better counties in the U.S.", "among the best counties in the U.S."]), W = i.select(".g-key-bars-container").selectAll(".g-key-bar").data(b.reverse()).enter().append("div").attr("class", "g-key-bar").style("background-color",
                function(e) { return A(e) });
            W.append("div").attr("class", function(e, t) { return "g-key-label g-key-label-" + t }).html(function(e) { return I(20 * e) + (e === 0 ? (E ? "<br>" : "") + " U.S. avg." : "") });
            var X = s().defer(i.csv, NYTG_ASSETS + "Countycausalestimates25Apr2015smaller.csv", V("cty_pop2000,median_rent,causal_int_kr26,causal_slope_kr26,causal_slope_kir26,causal_int_kr26_f,causal_slope_kr26_f,causal_int_kr26_m,causal_slope_kr26_m".split(","))).defer(i.csv, NYTG_ASSETS + "PercentiletoDollarConversion25Apr2015.csv", V("intercept,slope".split(","))).defer(c).defer(i.json, NYTG_ASSETS + "us3.json");
            X.await($)
        }),
    define("script", function() {});
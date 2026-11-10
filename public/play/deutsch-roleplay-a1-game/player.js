var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  var _a2, _b2;
  const Fd = ["audio-close", "leave", "back", "battle-flee", "to-map", "to-office"];
  function Kd(t) {
    var _a3, _b3;
    return (_b3 = (_a3 = t.Capacitor) == null ? void 0 : _a3.Plugins) == null ? void 0 : _b3.App;
  }
  function qd(t = document) {
    for (const e of Fd) {
      const s = t.querySelector('[data-testid="'.concat(e, '"]'));
      if (!(!s || s.disabled || s.getAttribute("aria-hidden") === "true")) return s.click(), true;
    }
    return false;
  }
  function Gd(t = window) {
    const e = Kd(t);
    if (!e || typeof e.addListener != "function") return false;
    try {
      return e.addListener("backButton", () => {
        qd(t.document) || typeof e.exitApp == "function" && e.exitApp();
      }), true;
    } catch (e2) {
      return false;
    }
  }
  const Wd = "edu-game", ro = "edu-root", Ws = "quiz-arena";
  function ri(t) {
    const e = Object.values(t).filter((n) => typeof n == "number");
    return Object.entries(t).filter(([n, i]) => e.indexOf(+n) === -1).map(([n, i]) => i);
  }
  function oo(t, e = "|") {
    return t.map((s) => po(s)).join(e);
  }
  function oi(t, e) {
    return typeof e == "bigint" ? e.toString() : e;
  }
  class Hd {
    constructor(e) {
      this._getter = e, this._value = void 0;
    }
    get value() {
      const e = this._getter;
      return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
    }
  }
  function Hs(t) {
    return new Hd(t);
  }
  function Vd(t) {
    return t == null;
  }
  function ai(t) {
    const e = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(e, s);
  }
  function Yd(t, e) {
    const s = t / e, n = Math.round(s), i = 4 * Number.EPSILON * Math.max(Math.abs(s), 1);
    return Math.abs(s - n) < i ? 0 : s - n;
  }
  const ao = /* @__PURE__ */ Symbol("evaluating");
  function Jd(t, e, s) {
    let n;
    Object.defineProperty(t, e, { get() {
      if (n !== ao) return n === void 0 && (n = ao, n = s()), n;
    }, set(i) {
      Object.defineProperty(t, e, { value: i });
    }, configurable: true });
  }
  function Qe(t, e, s) {
    Object.defineProperty(t, e, { value: s, writable: true, enumerable: true, configurable: true });
  }
  function ci(t) {
    const e = Object.getOwnPropertyDescriptor(t, "shape");
    return (e == null ? void 0 : e.get) ? e.get.raw : e == null ? void 0 : e.value;
  }
  function Xe(t) {
    var _a3;
    return (_a3 = ci(t._zod.def)) != null ? _a3 : t._zod.def.shape;
  }
  function co(t, e, s) {
    Object.defineProperty(t, e, { get() {
      const n = s();
      return Qe(this, e, n), n;
    }, enumerable: true, configurable: true });
  }
  function lo(t, e, s) {
    e in t ? Qe(t, e, s) : t[e] = s;
  }
  function jt(t, e, s, n) {
    const i = Xe(e);
    for (const r of s) {
      const o = Object.getOwnPropertyDescriptor(i, r);
      o.enumerable && (o.get ? co(t, r, () => {
        const a = e._zod.def.shape[r];
        return n ? n(a, r) : a;
      }) : lo(t, r, n ? n(o.value, r) : o.value));
    }
  }
  function Qd(t, e) {
    for (const s of Reflect.ownKeys(e)) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.enumerable && (n.get ? co(t, s, () => e[s]) : lo(t, s, n.value));
    }
  }
  function Ee(...t) {
    const e = {};
    for (const s of t) {
      const n = Object.getOwnPropertyDescriptors(s);
      Object.assign(e, n);
    }
    return Object.defineProperties({}, e);
  }
  function Xd(t) {
    return JSON.stringify(t);
  }
  function eh(t) {
    return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const uo = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
  };
  function as(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  const th = Hs(() => {
    var _a3;
    if (Me.jitless || typeof navigator < "u" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) return false;
    try {
      const t = Function;
      return new t(""), true;
    } catch (e) {
      return false;
    }
  });
  function Ut(t) {
    if (as(t) === false) return false;
    const e = t.constructor;
    if (e === void 0 || typeof e != "function") return true;
    const s = e.prototype;
    return !(as(s) === false || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === false);
  }
  function ho(t) {
    return Ut(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
  }
  const sh = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  function Bt(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function dt(t, e, s) {
    const n = new t._zod.constr(e != null ? e : t._zod.def);
    return (!e || (s == null ? void 0 : s.parent)) && (n._zod.parent = t), n;
  }
  function q(t) {
    const e = t;
    if (!e) return {};
    if (typeof e == "string") return { error: () => e };
    if ((e == null ? void 0 : e.message) !== void 0) {
      if ((e == null ? void 0 : e.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
      e.error = e.message;
    }
    return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
  }
  function po(t) {
    return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? '"'.concat(t, '"') : "".concat(t);
  }
  function nh(t) {
    return Object.keys(t).filter((e) => t[e]._zod.optin !== void 0 && t[e]._zod.optout === "optional");
  }
  const fo = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, ih = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
  function rh(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const r = {};
    return jt(r, t, Vs(t, e)), dt(t, Ee(s, { shape: r, checks: [] }));
  }
  function Vs(t, e) {
    var _a3;
    const s = Xe(t), n = [];
    for (const i of Reflect.ownKeys(e)) {
      if (!((_a3 = Object.getOwnPropertyDescriptor(s, i)) == null ? void 0 : _a3.enumerable)) throw new Error('Unrecognized key: "'.concat(String(i), '"'));
      e[i] && n.push(i);
    }
    return n;
  }
  function oh(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const r = new Set(Vs(t, e)), o = {};
    return jt(o, t, Reflect.ownKeys(Xe(t)).filter((a) => !r.has(a))), dt(t, Ee(s, { shape: o, checks: [] }));
  }
  function ah(t, e) {
    if (!Ut(e)) throw new Error("Invalid input to extend: expected a plain object");
    const s = t._zod.def.checks;
    if (s && s.length > 0) {
      const i = Xe(t);
      for (const r of Reflect.ownKeys(e)) if (Object.getOwnPropertyDescriptor(i, r) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    return dt(t, Ee(t._zod.def, { shape: mo(t, e) }));
  }
  function mo(t, e) {
    const s = {};
    return jt(s, t, Reflect.ownKeys(Xe(t))), Qd(s, e), s;
  }
  function ch(t, e) {
    if (!Ut(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
    return dt(t, Ee(t._zod.def, { shape: mo(t, e) }));
  }
  function lh(t, e) {
    var _a3, _b3, _c2;
    if (!((_a3 = e == null ? void 0 : e._zod) == null ? void 0 : _a3.def)) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    if ((_b3 = t._zod.def.checks) == null ? void 0 : _b3.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    const s = {};
    jt(s, t, Reflect.ownKeys(Xe(t))), jt(s, e, Reflect.ownKeys(Xe(e)));
    const n = Ee(t._zod.def, { shape: s, get catchall() {
      return e._zod.def.catchall;
    }, checks: (_c2 = e._zod.def.checks) != null ? _c2 : [] });
    return dt(t, n);
  }
  function go(t, e, s, n = "partial") {
    const r = e._zod.def.checks;
    if (r && r.length > 0) throw new Error(".".concat(n, "() cannot be used on object schemas containing refinements"));
    const a = s ? new Set(Vs(e, s)) : void 0, c = {};
    return jt(c, e, Reflect.ownKeys(Xe(e)), t && ((l, u) => a && !a.has(u) ? l : new t({ type: "optional", innerType: l }))), dt(e, Ee(e._zod.def, { shape: c, checks: [] }));
  }
  function uh(t, e, s) {
    const n = s ? new Set(Vs(e, s)) : void 0, i = {};
    return jt(i, e, Reflect.ownKeys(Xe(e)), (r, o) => n && !n.has(o) ? r : new t({ type: "nonoptional", innerType: r })), dt(e, Ee(e._zod.def, { shape: i }));
  }
  function Be(t, e = 0) {
    var _a3;
    if (t.aborted === true) return true;
    for (let s = e; s < t.issues.length; s++) if (((_a3 = t.issues[s]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function dh(t, e = 0) {
    var _a3;
    if (t.aborted === true) return true;
    for (let s = e; s < t.issues.length; s++) if (((_a3 = t.issues[s]) == null ? void 0 : _a3.continue) === false) return true;
    return false;
  }
  function ht(t, e) {
    return e.map((s) => {
      var _a3;
      var n;
      return (_a3 = (n = s).path) != null ? _a3 : n.path = [], s.path.unshift(t), s;
    });
  }
  function cs(t) {
    return typeof t == "string" ? t : t == null ? void 0 : t.message;
  }
  function ko(t) {
    var _a3, _b3;
    const e = [];
    for (const s of t != null ? t : []) {
      const n = s._zod.def;
      if (!/_(length|size)$|_equals$/.test(n.check)) break;
      const i = (_b3 = (_a3 = n.maximum) != null ? _a3 : n.length) != null ? _b3 : n.size;
      i >= 0 && e.push([i, s]);
    }
    return e;
  }
  function li(t, e, s) {
    var _a3;
    var n;
    for (let i = e; i < t.length; i++) (_a3 = (n = t[i]).schema) != null ? _a3 : n.schema = s;
  }
  function pt(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q;
    var n;
    const i = (_b3 = (_a3 = t.inst) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.traits;
    (i == null ? void 0 : i.has("$ZodType")) && (i.has("$ZodCheck") ? (_c2 = (n = t).schema) != null ? _c2 : n.schema = t.inst : t.schema = t.inst);
    const r = t.schema !== t.inst ? (_e2 = (_d2 = t.schema) == null ? void 0 : _d2._zod.def) == null ? void 0 : _e2.error : void 0, o = t.message ? t.message : (_p2 = (_o2 = (_m2 = (_k2 = (_i2 = cs((_h2 = (_g2 = (_f2 = t.inst) == null ? void 0 : _f2._zod.def) == null ? void 0 : _g2.error) == null ? void 0 : _h2.call(_g2, t))) != null ? _i2 : cs(r == null ? void 0 : r(t))) != null ? _k2 : cs((_j = e == null ? void 0 : e.error) == null ? void 0 : _j.call(e, t))) != null ? _m2 : cs((_l2 = s.customError) == null ? void 0 : _l2.call(s, t))) != null ? _o2 : cs((_n2 = s.localeError) == null ? void 0 : _n2.call(s, t))) != null ? _p2 : "Invalid input", a = {};
    for (const c of Object.keys(t)) c === "inst" || c === "schema" || c === "continue" || c === "input" || c === "__proto__" || (a[c] = t[c]);
    return (_q = a.path) != null ? _q : a.path = [], a.message = o, (e == null ? void 0 : e.reportInput) && (a.input = t.input), a;
  }
  const hh = /[\uD800-\uDBFF]/;
  function ui(t) {
    const e = t.length;
    if (!hh.test(t)) return e;
    let s = e;
    for (let n = 0; n < e - 1; n++) (t.charCodeAt(n) & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 && (s--, n++);
    return s;
  }
  function di(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
  }
  function ph(t) {
    const e = typeof t;
    switch (e) {
      case "number":
        return Number.isNaN(t) ? "nan" : "number";
      case "object": {
        if (t === null) return "null";
        if (Array.isArray(t)) return "array";
        const s = t;
        if (s && Object.getPrototypeOf(s) !== Object.prototype && "constructor" in s && s.constructor) return s.constructor.name;
      }
    }
    return e;
  }
  function ls(...t) {
    const [e, s, n] = t;
    return typeof e == "string" ? { message: e, code: "custom", input: s, inst: n } : { ...e };
  }
  function fh(t, e) {
    for (const s in e) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.get ? Object.defineProperty(t, s, { ...n, enumerable: false }) : mh(t, s, n.value);
    }
  }
  function ft(t, e, s, n = true) {
    return Object.defineProperty(t, e, { configurable: true, writable: true, enumerable: n, value: s }), s;
  }
  function bo(t, e, s) {
    return ft(t, e, s, false);
  }
  function vo(t, e) {
    for (const s in t) {
      const n = t[s];
      Object.defineProperty(e, s, { configurable: true, enumerable: true, get() {
        return ft(this, s, n(this));
      }, set(i) {
        ft(this, s, i);
      } });
    }
    return e;
  }
  function mh(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, get() {
      return this == null ? s : ft(this, e, s.bind(this));
    }, set(n) {
      ft(this, e, n);
    } });
  }
  function gh(t, e) {
    const s = Object.getPrototypeOf(t);
    return e in s ? void 0 : s;
  }
  let hi, mt = false;
  const kh = { configurable: true, get() {
    mt = true;
  } };
  function X(t, e, s) {
    const n = Object.getPrototypeOf(t._zod);
    if (e in n && hi !== t._zod) {
      hi = void 0;
      return;
    }
    hi = t._zod, Object.defineProperty(n, e, { configurable: true, get() {
      Object.defineProperty(this, e, kh);
      const i = mt;
      mt = false;
      try {
        const r = s(this);
        return mt ? delete this[e] : Object.defineProperty(this, e, { configurable: true, writable: true, value: r }), mt = mt || i, r;
      } catch (r) {
        throw delete this[e], mt = mt || i, r;
      }
    }, set(i) {
      Object.defineProperty(this, e, { configurable: true, writable: true, value: i });
    } });
  }
  function bh(t, e, s, n) {
    const i = gh(t, e);
    i && Object.defineProperty(i, e, { configurable: true, get() {
      const r = { configurable: true, writable: true, enumerable: n, value: void 0 };
      return Object.defineProperty(this, e, r), r.value = s(this), Object.defineProperty(this, e, r), r.value;
    }, set(r) {
      Object.defineProperty(this, e, { configurable: true, writable: true, enumerable: n, value: r });
    } });
  }
  const vh = "~constantCatch";
  function wh(t) {
    const e = () => t;
    return e[vh] = true, e;
  }
  var wo;
  const pi = { value: void 0, enumerable: false };
  let yo = "captureStackTrace" in Error ? Error : null;
  function yh(t) {
    const e = yo;
    if (e) {
      const s = e.stackTraceLimit;
      if (typeof s == "number") {
        try {
          e.stackTraceLimit = 0;
        } catch (e2) {
          return yo = null, new t();
        }
        try {
          return new t();
        } finally {
          e.stackTraceLimit = s;
        }
      }
    }
    return new t();
  }
  function M(t, e, s, n) {
    var _a3;
    const i = {};
    function r(p) {
      this.def = p, this.constr = h, this.traits = /* @__PURE__ */ new Set();
    }
    r.prototype = i;
    const o = s, a = o && /* @__PURE__ */ new WeakSet();
    function c(p, f) {
      if (p._zod) {
        if (p._zod.traits.has(t)) return;
      } else {
        pi.value = new r(f);
        try {
          Object.defineProperty(p, "_zod", pi);
        } finally {
          pi.value = void 0;
        }
      }
      if (p._zod.traits.add(t), e(p, f), a) {
        const g = Object.getPrototypeOf(p), k = p._zod.constr.prototype;
        let b = g;
        for (; b && b !== k; ) b = Object.getPrototypeOf(b);
        const v = b != null ? b : g;
        a.has(v) || (a.add(v), fh(v, o));
      }
      const m = h.prototype;
      for (const g in m) Object.prototype.hasOwnProperty.call(m, g) && (g in p || (p[g] = m[g].bind(p)));
    }
    const l = (_a3 = n == null ? void 0 : n.Parent) != null ? _a3 : Object;
    class u extends l {
    }
    Object.defineProperty(u, "name", { value: t });
    function h(p) {
      var _a4;
      const f = (n == null ? void 0 : n.Parent) ? yh(u) : this;
      c(f, p);
      const m = f._zod.deferred;
      if (m) {
        for (const k of m) k();
        f._zod.deferred = void 0;
      }
      const g = (_a4 = globalThis.__zod_globalConfig) == null ? void 0 : _a4.postProcessor;
      return g && g(f), f;
    }
    return Object.defineProperty(h, "init", { value: c }), Object.defineProperty(h, Symbol.hasInstance, { value: (p) => {
      var _a4, _b3;
      return (n == null ? void 0 : n.Parent) && p instanceof n.Parent ? true : (_b3 = (_a4 = p == null ? void 0 : p._zod) == null ? void 0 : _a4.traits) == null ? void 0 : _b3.has(t);
    } }), Object.defineProperty(h, "name", { value: t }), h;
  }
  class xt extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class So extends Error {
    constructor(e) {
      super("Encountered unidirectional transform during encode: ".concat(e)), this.name = "ZodEncodeError";
    }
  }
  (_a2 = (wo = globalThis).__zod_globalConfig) != null ? _a2 : wo.__zod_globalConfig = {};
  const Me = globalThis.__zod_globalConfig;
  function Ge(t) {
    return t && Object.assign(Me, t), Me;
  }
  function Sh() {
    var _a3;
    const t = this._zod;
    return (_a3 = t.message) != null ? _a3 : t.message = JSON.stringify(t.def, oi, 2), t.message;
  }
  function $h(t) {
    this._zod.message = t;
  }
  const zh = { get: Sh, set: $h, enumerable: true, configurable: true }, fi = { value: void 0, enumerable: false }, $o = new WeakSet([Object.prototype, Error.prototype]), _h = M("$ZodError", (t, e) => {
    t.name = "$ZodError", fi.value = e, Object.defineProperty(t, "issues", fi), fi.value = void 0, Object.defineProperty(t, "message", zh);
    const s = Object.getPrototypeOf(t);
    $o.has(s) || ($o.add(s), Object.defineProperty(s, "toString", { configurable: true, enumerable: false, get() {
      const n = () => this.message;
      return Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true });
    } }));
  });
  function jh(t, e, s) {
    return Object.prototype.hasOwnProperty.call(t, e) || (e === "__proto__" ? Object.defineProperty(t, e, { value: s(), writable: true, enumerable: true, configurable: true }) : t[e] = s()), t[e];
  }
  function xh(t, e = (s) => s.message) {
    const s = {}, n = [];
    for (const i of t.issues) i.path.length > 0 ? jh(s, i.path[0], () => []).push(e(i)) : n.push(e(i));
    return { formErrors: n, fieldErrors: s };
  }
  function Eh(t, e = (s) => s.message) {
    const s = { _errors: [] }, n = (i, r = []) => {
      for (const o of i.issues) if (o.code === "invalid_union" && o.errors.length) o.errors.map((a) => n({ issues: a }, [...r, ...o.path]));
      else if (o.code === "invalid_key") n({ issues: o.issues }, [...r, ...o.path]);
      else if (o.code === "invalid_element") n({ issues: o.issues }, [...r, ...o.path]);
      else {
        const a = [...r, ...o.path];
        if (a.length === 0) s._errors.push(e(o));
        else {
          let c = s, l = 0;
          for (; l < a.length; ) {
            const u = a[l], h = l === a.length - 1;
            if (u === "_errors") {
              h && c._errors.push(e(o)), l++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(c, u) || Object.defineProperty(c, u, { value: { _errors: [] }, enumerable: true, writable: true, configurable: true });
            const p = c[u];
            h && p._errors.push(e(o)), c = p, l++;
          }
        }
      }
    };
    return n(t), s;
  }
  function Ys(t, e) {
    var _a3;
    return { callee: (_a3 = e == null ? void 0 : e.callee) != null ? _a3 : t, Err: e == null ? void 0 : e.Err };
  }
  const mi = (t) => {
    const e = (s, n, i, r) => {
      var _a3, _b3;
      const o = i ? { ...i, async: false } : { async: false }, a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise) throw new xt();
      if (a.issues.length) {
        const c = new ((_a3 = r == null ? void 0 : r.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, Ge())));
        throw uo(c, (_b3 = r == null ? void 0 : r.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, gi = (t) => {
    const e = async (s, n, i, r) => {
      var _a3, _b3;
      const o = i ? { ...i, async: true } : { async: true };
      let a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise && (a = await a), a.issues.length) {
        const c = new ((_a3 = r == null ? void 0 : r.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, Ge())));
        throw uo(c, (_b3 = r == null ? void 0 : r.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, ki = (t) => (e, s, n) => {
    const i = n ? { ...n, async: false } : { async: false }, r = e._zod.run({ value: s, issues: [] }, i);
    if (r instanceof Promise) throw new xt();
    return r.issues.length ? zo(t, r.issues, i) : { success: true, data: r.value };
  };
  function zo(t, e, s) {
    let n;
    return { success: false, get error() {
      return n || (n = new t(e.map((i) => pt(i, s, Ge()))), e = void 0, s = void 0), n;
    }, set error(i) {
      n = i, e = void 0, s = void 0;
    } };
  }
  const bi = (t) => async (e, s, n) => {
    const i = n ? { ...n, async: true } : { async: true };
    let r = e._zod.run({ value: s, issues: [] }, i);
    return r instanceof Promise && (r = await r), r.issues.length ? zo(t, r.issues, i) : { success: true, data: r.value };
  }, Ah = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Th = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Ih = ((t, e, s) => {
    const n = t._zod.bag.validator;
    if (n !== void 0) {
      if (n(e) !== Ah) return true;
      if (n.definite === true && s === void 0) return false;
    }
    return Mh(t, e, s);
  });
  function Mh(t, e, s) {
    const n = s ? { ...s, async: false, abortEarly: true } : { async: false, abortEarly: true }, i = t._zod.bag.fallbackRun;
    let r;
    if (i ? (n[Th] = true, r = i({ value: e, issues: [] }, n)) : r = t._zod.run({ value: e, issues: [] }, n), r instanceof Promise) throw new xt();
    return r.issues.length === 0;
  }
  const Oh = async (t, e, s) => {
    const n = s ? { ...s, async: true, abortEarly: true } : { async: true, abortEarly: true };
    let i = t._zod.run({ value: e, issues: [] }, n);
    return i instanceof Promise && (i = await i), i.issues.length === 0;
  }, Nh = (t) => {
    const e = mi(t), s = (n, i, r, o) => {
      const a = r ? { ...r, direction: "backward" } : { direction: "backward" };
      return e(n, i, a, Ys(s, o));
    };
    return s;
  }, Ph = (t) => {
    const e = mi(t), s = (n, i, r, o) => e(n, i, r, Ys(s, o));
    return s;
  }, Rh = (t) => {
    const e = gi(t), s = async (n, i, r, o) => {
      const a = r ? { ...r, direction: "backward" } : { direction: "backward" };
      return await e(n, i, a, Ys(s, o));
    };
    return s;
  }, Dh = (t) => {
    const e = gi(t), s = async (n, i, r, o) => await e(n, i, r, Ys(s, o));
    return s;
  }, Lh = (t) => (e, s, n) => {
    const i = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return ki(t)(e, s, i);
  }, Ch = (t) => (e, s, n) => ki(t)(e, s, n), Zh = (t) => async (e, s, n) => {
    const i = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return bi(t)(e, s, i);
  }, Uh = (t) => async (e, s, n) => bi(t)(e, s, n), Bh = /^[cC][0-9a-z]{6,}$/, Fh = /^[0-9a-z]+$/, Kh = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, qh = /^[0-9a-vA-V]{20}$/, Gh = /^[A-Za-z0-9]{27}$/, Wh = /^[a-zA-Z0-9_-]{21}$/;
  function Hh(t) {
    return new RegExp("^[a-zA-Z0-9_-]{".concat(t, "}$"));
  }
  const Vh = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yh = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, _o = (t) => t ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(t, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Jh = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Qh = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
  function Xh() {
    return new RegExp(Qh, "u");
  }
  const ep = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, tp = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, sp = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, np = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ip = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, rp = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, op = /^https?$/, ap = /^\+[1-9]\d{6,14}$/, jo = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  function cp(t) {
    return new RegExp("^".concat(t, "$"));
  }
  const lp = cp(jo);
  function vi(t) {
    const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number" ? t.precision === -1 ? "".concat(e) : t.precision === 0 ? "".concat(e, ":[0-5]\\d") : "".concat(e, ":[0-5]\\d\\.\\d{").concat(t.precision, "}") : t.seconds ? "".concat(e, ":[0-5]\\d(?:\\.\\d+)?") : "".concat(e, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  }
  function up(t) {
    return new RegExp("^".concat(vi(t), "$"));
  }
  function dp(t) {
    const e = ["Z"];
    t.offset && e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const s = "".concat(vi({ precision: t.precision, seconds: true }), "(?:").concat(e.join("|"), ")"), n = t.local ? "".concat(s, "|").concat(vi({ precision: t.precision })) : s;
    return new RegExp("^".concat(jo, "T(?:").concat(n, ")$"));
  }
  const hp = /^[\s\S]{0,}$/, pp = /^-?\d+$/, wi = /^-?\d+(?:\.\d+)?$/, fp = /^(?:true|false)$/i, mp = /^[^A-Z]*$/, gp = /^[^a-z]*$/, ze = M("$ZodCheck", (t, e) => {
    var _a3, _b3;
    var s;
    (_a3 = t._zod) != null ? _a3 : t._zod = {}, t._zod.def = e, (_b3 = (s = t._zod).onattach) != null ? _b3 : s.onattach = [];
  }), yi = (t) => {
    const e = t.value;
    return !Vd(e) && e.length !== void 0;
  }, Js = { number: "number", bigint: "bigint", object: "date" }, xo = M("$ZodCheckLessThan", (t, e) => {
    ze.init(t, e);
    const s = Js[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value <= e.value : n.value < e.value) || n.issues.push({ origin: (_a3 = Js[typeof n.value]) != null ? _a3 : s, code: "too_big", maximum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), Eo = M("$ZodCheckGreaterThan", (t, e) => {
    ze.init(t, e);
    const s = Js[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value >= e.value : n.value > e.value) || n.issues.push({ origin: (_a3 = Js[typeof n.value]) != null ? _a3 : s, code: "too_small", minimum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), kp = M("$ZodCheckMultipleOf", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      if (typeof s.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof s.value == "bigint" ? e.value !== BigInt(0) && s.value % e.value === BigInt(0) : Yd(s.value, e.value) === 0) || s.issues.push({ origin: typeof s.value, code: "not_multiple_of", divisor: e.value, input: s.value, inst: t, continue: !e.abort });
    };
  }), bp = M("$ZodCheckNumberFormat", (t, e) => {
    var _a3;
    ze.init(t, e), e.format = e.format || "float64";
    const s = (_a3 = e.format) == null ? void 0 : _a3.includes("int"), n = s ? "int" : "number", [i, r] = fo[e.format];
    t._zod.check = (o) => {
      const a = o.value;
      if (s) {
        if (!Number.isInteger(a)) {
          o.issues.push({ expected: n, format: e.format, code: "invalid_type", continue: false, input: a, inst: t });
          return;
        }
        if (!Number.isSafeInteger(a)) {
          a > 0 ? o.issues.push({ input: a, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t, origin: n, inclusive: true, continue: !e.abort }) : o.issues.push({ input: a, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t, origin: n, inclusive: true, continue: !e.abort });
          return;
        }
      }
      a < i && o.issues.push({ origin: "number", input: a, code: "too_small", minimum: i, inclusive: true, inst: t, continue: !e.abort }), a > r && o.issues.push({ origin: "number", input: a, code: "too_big", maximum: r, inclusive: true, inst: t, continue: !e.abort });
    };
  }), vp = M("$ZodCheckMaxLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = yi, t._zod.check = (n) => {
      const i = n.value, r = i.length;
      if ((typeof i == "string" && r > e.maximum ? ui(i) : r) <= e.maximum) return;
      const a = di(i);
      n.issues.push({ origin: a, code: "too_big", maximum: e.maximum, inclusive: true, input: i, inst: t, continue: !e.abort });
    };
  }), wp = M("$ZodCheckMinLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = yi, t._zod.check = (n) => {
      const i = n.value, r = i.length;
      if ((typeof i == "string" && r >= e.minimum && r < e.minimum * 2 ? ui(i) : r) >= e.minimum) return;
      const a = di(i);
      n.issues.push({ origin: a, code: "too_small", minimum: e.minimum, inclusive: true, input: i, inst: t, continue: !e.abort });
    };
  }), yp = M("$ZodCheckLengthEquals", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = yi, t._zod.check = (n) => {
      const i = n.value, r = i.length, o = typeof i == "string" && r >= e.length && r <= e.length * 2 ? ui(i) : r;
      if (o === e.length) return;
      const a = di(i), c = o > e.length;
      n.issues.push({ origin: a, ...c ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length }, inclusive: true, exact: true, input: n.value, inst: t, continue: !e.abort });
    };
  }), Qs = M("$ZodCheckStringFormat", (t, e) => {
    var _a3, _b3;
    var s, n;
    ze.init(t, e), e.pattern ? (_a3 = (s = t._zod).check) != null ? _a3 : s.check = (i) => {
      e.pattern.lastIndex = 0, !e.pattern.test(i.value) && i.issues.push({ origin: "string", code: "invalid_format", format: e.format, input: i.value, ...e.pattern ? { pattern: e.pattern.toString() } : {}, inst: t, continue: !e.abort });
    } : (_b3 = (n = t._zod).check) != null ? _b3 : n.check = () => {
    };
  }), Sp = M("$ZodCheckRegex", (t, e) => {
    Qs.init(t, e), t._zod.check = (s) => {
      e.pattern.lastIndex = 0, !e.pattern.test(s.value) && s.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: s.value, pattern: e.pattern.toString(), inst: t, continue: !e.abort });
    };
  }), $p = M("$ZodCheckLowerCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = mp, Qs.init(t, e);
  }), zp = M("$ZodCheckUpperCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = gp, Qs.init(t, e);
  }), _p = M("$ZodCheckIncludes", (t, e) => {
    ze.init(t, e);
    const s = Bt(e.includes), n = new RegExp(typeof e.position == "number" ? "^.{".concat(e.position, ",}").concat(s) : s);
    e.pattern = n, t._zod.check = (i) => {
      i.value.includes(e.includes, e.position) || i.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: e.includes, input: i.value, inst: t, continue: !e.abort });
    };
  }), jp = M("$ZodCheckStartsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp("^".concat(Bt(e.prefix), ".*"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.startsWith(e.prefix) || n.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: e.prefix, input: n.value, inst: t, continue: !e.abort });
    };
  }), xp = M("$ZodCheckEndsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp(".*".concat(Bt(e.suffix), "$"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.endsWith(e.suffix) || n.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: e.suffix, input: n.value, inst: t, continue: !e.abort });
    };
  }), Ep = M("$ZodCheckOverwrite", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      s.value = e.tx(s.value);
    };
  });
  class Ap {
    constructor(e = [], s = {}) {
      this.content = [], this.indent = 0, this.args = e, this.closed = s;
    }
    indented(e) {
      this.indent += 1;
      try {
        e(this);
      } finally {
        this.indent -= 1;
      }
    }
    write(e) {
      if (typeof e == "function") {
        e(this, { execution: "sync" }), e(this, { execution: "async" });
        return;
      }
      const n = e.split("\n").filter((o) => o), i = Math.min(...n.map((o) => o.length - o.trimStart().length)), r = n.map((o) => o.slice(i)).map((o) => " ".repeat(this.indent * 2) + o);
      for (const o of r) this.content.push(o);
    }
    compile() {
      var _a3;
      const e = Function, s = (_a3 = this == null ? void 0 : this.content) != null ? _a3 : [""];
      return new e(...Object.keys(this.closed), "return function (".concat(this.args.join(", "), ") {\n").concat(s.join("\n"), "\n};"))(...Object.values(this.closed));
    }
  }
  const Tp = { major: 4, minor: 6, patch: 7 }, re = M("$ZodType", (t, e) => {
    var _a3, _b3;
    var s;
    t != null ? t : t = {}, t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = Tp;
    const n = t._zod.def.checks, i = t._zod.traits.has("$ZodCheck") ? [t, ...n != null ? n : []] : (n == null ? void 0 : n.length) ? [...n] : [];
    for (const r of i) for (const o of r._zod.onattach) o(t);
    if (i.length === 0) (_a3 = (s = t._zod).deferred) != null ? _a3 : s.deferred = [], (_b3 = t._zod.deferred) == null ? void 0 : _b3.push(() => {
      t._zod.run = t._zod.parse;
    });
    else {
      const r = (a, c, l) => {
        if (a.memo) return a;
        let u = Be(a), h;
        for (const p of c) {
          if (p._zod.def.when) {
            if (dh(a) || !p._zod.def.when(a)) continue;
          } else if (u) continue;
          const f = a.issues.length, m = p._zod.check(a);
          if (m instanceof Promise && (l == null ? void 0 : l.async) === false) throw new xt();
          if (h || m instanceof Promise) h = (h != null ? h : Promise.resolve()).then(async () => {
            await m, a.issues.length !== f && (li(a.issues, f, t), u || (u = Be(a, f)));
          });
          else {
            if (a.issues.length === f) continue;
            li(a.issues, f, t), u || (u = Be(a, f));
          }
        }
        return h ? h.then(() => a) : a;
      }, o = (a, c, l) => {
        if (Be(a)) return a.aborted = true, a;
        const u = r(c, i, l);
        if (u instanceof Promise) {
          if (l.async === false) throw new xt();
          return u.then((h) => t._zod.parse(h, l));
        }
        return t._zod.parse(u, l);
      };
      t._zod.run = (a, c) => {
        if (c.skipChecks) return t._zod.parse(a, c);
        if (c.direction === "backward") {
          const u = t._zod.parse({ value: a.value, issues: [] }, { ...c, skipChecks: true });
          return u instanceof Promise ? u.then((h) => o(h, a, c)) : o(u, a, c);
        }
        const l = t._zod.parse(a, c);
        if (l instanceof Promise) {
          if (c.async === false) throw new xt();
          return l.then((u) => r(u, i, c));
        }
        return r(l, i, c);
      };
    }
  }, { get "~standard"() {
    return bo(this, "~standard", To(this));
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  } }), Ao = (t, e) => t.issues.length ? { issues: t.issues.map((s) => pt(s, e, Ge())) } : { value: t.value };
  async function Ip(t, e) {
    const s = { async: true };
    return Ao(await t._zod.run({ value: e, issues: [] }, s), s);
  }
  function To(t) {
    return { validate: (e) => {
      const s = { async: false };
      try {
        const n = t._zod.run({ value: e, issues: [] }, s);
        if (!(n instanceof Promise)) return Ao(n, s);
      } catch (e2) {
      }
      return Ip(t, e);
    }, vendor: "zod", version: 1 };
  }
  const Si = M("$ZodString", (t, e) => {
    var _a3;
    re.init(t, e), t._zod.pattern = (_a3 = e.pattern) != null ? _a3 : hp, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = String(s.value);
      } catch (e2) {
      }
      return typeof s.value == "string" || s.issues.push({ expected: "string", code: "invalid_type", input: s.value, inst: t }), s;
    };
  }), ae = M("$ZodStringFormat", (t, e) => {
    Qs.init(t, e), Si.init(t, e);
  }), Mp = M("$ZodGUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Yh, ae.init(t, e);
  }), Op = M("$ZodUUID", (t, e) => {
    var _a3, _b3;
    if (e.version) {
      const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e.version];
      if (n === void 0) throw new Error('Invalid UUID version: "'.concat(e.version, '"'));
      (_a3 = e.pattern) != null ? _a3 : e.pattern = _o(n);
    } else (_b3 = e.pattern) != null ? _b3 : e.pattern = _o();
    ae.init(t, e);
  }), Np = M("$ZodEmail", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Jh, ae.init(t, e);
  }), Io = 1, Xs = 2;
  function Mo(t) {
    try {
      return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), true);
    } catch (e) {
      return false;
    }
  }
  function Pp(t, e) {
    return !("normalize" in e) && !("hostname" in e) && !("protocol" in e) ? Mo(t) || Xs : Rp(t, e);
  }
  function Rp(t, e) {
    var _a3, _b3;
    if (!e.normalize && ((_a3 = e.protocol) == null ? void 0 : _a3.source) === op.source && !/^https?:\/\//i.test(t)) return Io;
    try {
      if (typeof URL < "u") {
        const s = URL;
        if (typeof s.parse == "function") return (_b3 = s.parse(t)) != null ? _b3 : Xs;
      }
      return new URL(t);
    } catch (e2) {
      return Xs;
    }
  }
  const Dp = /[\t\n\r]/g;
  function Oo(t) {
    return t.replace(Dp, "");
  }
  function Lp(t, e) {
    return e.lastIndex = 0, e.test(t.hostname);
  }
  function Cp(t, e) {
    return e.lastIndex = 0, e.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
  }
  const Zp = M("$ZodURL", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      try {
        const n = s.value.trim(), i = Pp(n, e);
        if (i === Io) {
          s.issues.push({ code: "invalid_format", format: "url", note: "Invalid URL format", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (i === Xs) {
          s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (i === true) {
          s.value = Oo(n);
          return;
        }
        e.hostname && !Lp(i, e.hostname) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: e.hostname.source, input: s.value, inst: t, continue: !e.abort }), e.protocol && !Cp(i, e.protocol) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: e.protocol.source, input: s.value, inst: t, continue: !e.abort }), s.value = e.normalize ? i.href : Oo(n);
        return;
      } catch (e2) {
        s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
      }
    };
  }), Up = M("$ZodEmoji", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Xh(), ae.init(t, e);
  }), Bp = M("$ZodNanoID", (t, e) => {
    var _a3;
    if (e.length !== void 0 && (!Number.isInteger(e.length) || e.length < 1)) throw new Error("Invalid nanoid length: ".concat(e.length));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = e.length === void 0 ? Wh : Hh(e.length), ae.init(t, e);
  }), Fp = M("$ZodCUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Bh, ae.init(t, e);
  }), Kp = M("$ZodCUID2", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Fh, ae.init(t, e);
  }), qp = M("$ZodULID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Kh, ae.init(t, e);
  }), Gp = M("$ZodXID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = qh, ae.init(t, e);
  }), Wp = M("$ZodKSUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Gh, ae.init(t, e);
  }), Hp = M("$ZodISODateTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = dp(e), ae.init(t, e);
  }), Vp = M("$ZodISODate", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = lp, ae.init(t, e);
  }), Yp = M("$ZodISOTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = up(e), ae.init(t, e);
  }), Jp = M("$ZodISODuration", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Vh, ae.init(t, e);
  }), Qp = M("$ZodIPv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = ep, ae.init(t, e);
  }), Xp = /^[0-9a-fA-F:.]+$/;
  function No(t) {
    return Xp.test(t) ? Mo("http://[".concat(t, "]")) : false;
  }
  const ef = M("$ZodIPv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = tp, ae.init(t, e), t._zod.check = (s) => {
      No(s.value) || s.issues.push({ code: "invalid_format", format: "ipv6", input: s.value, inst: t, continue: !e.abort });
    };
  }), tf = M("$ZodCIDRv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = sp, ae.init(t, e);
  });
  function sf(t) {
    const e = t.split("/");
    if (e.length !== 2) return false;
    const [s, n] = e;
    if (!n) return false;
    const i = Number(n);
    return "".concat(i) !== n || i < 0 || i > 128 ? false : No(s);
  }
  const nf = M("$ZodCIDRv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = np, ae.init(t, e), t._zod.check = (s) => {
      sf(s.value) || s.issues.push({ code: "invalid_format", format: "cidrv6", input: s.value, inst: t, continue: !e.abort });
    };
  });
  function Po(t) {
    if (t === "") return true;
    if (/\s/.test(t) || t.length % 4 !== 0) return false;
    try {
      return atob(t), true;
    } catch (e) {
      return false;
    }
  }
  const Ro = /^[0-9a-zA-Z+/]*={0,2}$/, rf = M("$ZodBase64", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Ro, ae.init(t, e), t._zod.check = (s) => {
      Po(s.value) || s.issues.push({ code: "invalid_format", format: "base64", input: s.value, inst: t, continue: !e.abort });
    };
  }), $i = /^[A-Za-z0-9_-]*$/;
  function of(t) {
    if (!$i.test(t)) return false;
    const e = t.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), s = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
    return Po(s);
  }
  const af = M("$ZodBase64URL", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = $i, ae.init(t, e), t._zod.check = (s) => {
      of(s.value) || s.issues.push({ code: "invalid_format", format: "base64url", input: s.value, inst: t, continue: !e.abort });
    };
  }), cf = M("$ZodE164", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = ap, ae.init(t, e);
  });
  function lf(t, e = null) {
    try {
      const s = t.split(".");
      if (s.length !== 3) return false;
      const [n] = s;
      if (!n) return false;
      const i = JSON.parse(atob(n));
      return !("typ" in i && (i == null ? void 0 : i.typ) !== "JWT" || !i.alg || e && (!("alg" in i) || i.alg !== e));
    } catch (e2) {
      return false;
    }
  }
  const uf = M("$ZodJWT", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      lf(s.value, e.alg) || s.issues.push({ code: "invalid_format", format: "jwt", input: s.value, inst: t, continue: !e.abort });
    };
  }), Do = M("$ZodNumber", (t, e) => {
    re.init(t, e), t._zod.pattern = wi, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = Number(s.value);
      } catch (e2) {
      }
      const i = s.value;
      if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return s;
      const r = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
      return s.issues.push({ expected: "number", code: "invalid_type", input: i, inst: t, ...r ? { received: r } : {} }), s;
    };
  }), df = M("$ZodNumberFormat", (t, e) => {
    bp.init(t, e), Do.init(t, e);
  }), hf = M("$ZodBoolean", (t, e) => {
    re.init(t, e), t._zod.pattern = fp, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = !!s.value;
      } catch (e2) {
      }
      const i = s.value;
      return typeof i == "boolean" || s.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: t }), s;
    };
  }), pf = M("$ZodUnknown", (t, e) => {
    re.init(t, e), t._zod.parse = (s) => s;
  }), ff = M("$ZodNever", (t, e) => {
    re.init(t, e), t._zod.parse = (s, n) => (s.issues.push({ expected: "never", code: "invalid_type", input: s.value, inst: t }), s);
  });
  function mf(t, e) {
    const s = ko(t._zod.def.checks);
    if (!s.length) return;
    const n = Math.min(...s.map((r) => r[0])), i = t._zod.parse;
    t._zod.parse = (r, o) => {
      const a = e(r.value);
      if (a > n && !(o == null ? void 0 : o.skipChecks) && (o == null ? void 0 : o.direction) !== "backward") {
        for (const [c, l] of ko(t._zod.def.checks)) if (a > c && l._zod.def.when(r)) {
          const u = r.issues.length;
          return l._zod.check(r), r.issues[u].continue = false, li(r.issues, u, t), r;
        }
      }
      return i(r, o);
    };
  }
  const gf = (t) => Array.isArray(t) ? t.length : -1;
  function Lo(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  const kf = M("$ZodArray", (t, e) => {
    re.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, i) => {
      const r = n.value;
      if (!Array.isArray(r)) return n.issues.push({ expected: "array", code: "invalid_type", input: r, inst: t }), n;
      n.value = s ? s.alloc(t, n, Array(r.length), i) : Array(r.length);
      const o = [], a = i == null ? void 0 : i.abortEarly;
      for (let c = 0; c < r.length; c++) {
        const l = r[c], u = e.element._zod.run({ value: l, issues: [] }, i);
        if (u instanceof Promise) o.push(u.then((h) => Lo(h, n, c)));
        else if (Lo(u, n, c), a && u.issues.length !== 0 && Be(u)) break;
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }, mf(t, gf);
  });
  function en(t, e, s, n, i, r) {
    const o = s in n, a = r === "optional";
    if (!(!o && a && i === "optional")) {
      if (t.issues.length) {
        if (i !== void 0 && a && !o) return;
        e.issues.push(...ht(s, t.issues));
      }
      if (!o && i === void 0) {
        t.issues.length || e.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [s] });
        return;
      }
      t.value === void 0 ? (o || i === "defaulted" && !a) && (e.value[s] = void 0) : e.value[s] = t.value;
    }
  }
  const bf = [];
  function Co(t) {
    var _a3, _b3, _c2, _d2;
    const e = Object.keys(t.shape), s = Object.getOwnPropertySymbols(t.shape), n = s.length ? s : bf, i = n.length ? [...e, ...n] : e;
    for (const o of i) if (!((_d2 = (_c2 = (_b3 = (_a3 = t.shape) == null ? void 0 : _a3[o]) == null ? void 0 : _b3._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error('Invalid element at key "'.concat(String(o), '": expected a Zod schema'));
    const r = nh(t.shape);
    return { ...t, allKeys: i, symbolKeys: n, keySet: new Set(e), numKeys: e.length, optionalKeys: new Set(r) };
  }
  function Zo(t, e, s, n, i, r, o) {
    const a = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, h = l.optin, p = l.optout;
    let f = 0;
    for (const m in e) {
      if (o && s.issues.length !== f) {
        if (Be(s, f)) break;
        f = s.issues.length;
      }
      if (c.has(m)) continue;
      if (m === "__proto__") {
        u === "never" && a.push(m);
        continue;
      }
      if (u === "never") {
        a.push(m);
        continue;
      }
      const g = l.run({ value: e[m], issues: [] }, n);
      g instanceof Promise ? t.push(g.then((k) => en(k, s, m, e, h, p))) : en(g, s, m, e, h, p);
    }
    return a.length && s.issues.push({ code: "unrecognized_keys", keys: a, input: e, inst: r, continue: true }), t.length ? Promise.all(t).then(() => s) : s;
  }
  const vf = M("$ZodObject", (t, e) => {
    var _a3;
    re.init(t, e);
    const s = Object.getOwnPropertyDescriptor(e, "shape"), n = (s == null ? void 0 : s.get) ? s.get.raw : (_a3 = e.shape) != null ? _a3 : {};
    if (n) {
      const l = () => {
        const u = { ...n };
        return Object.defineProperty(e, "shape", { value: u }), l.raw = u, u;
      };
      l.raw = n, Object.defineProperty(e, "shape", { get: l });
    }
    const i = Hs(() => Co(e));
    X(t, "propValues", (l) => {
      const u = l.def.shape, h = {};
      for (const p in u) {
        const f = u[p]._zod;
        if (f.values) {
          Object.prototype.hasOwnProperty.call(h, p) || Qe(h, p, /* @__PURE__ */ new Set());
          for (const m of f.values) h[p].add(m);
          f.optin !== void 0 && h[p].add(void 0);
        }
      }
      return h;
    });
    const r = as, o = e.catchall;
    let a;
    const c = Me.memoizer;
    c == null ? void 0 : c.attach(t), t._zod.parse = (l, u) => {
      a != null ? a : a = i.value;
      const h = l.value;
      if (!r(h)) return l.issues.push({ expected: "object", code: "invalid_type", input: h, inst: t }), l;
      l.value = c ? c.alloc(t, l, {}, u) : {};
      const p = [], f = a.shape, m = u == null ? void 0 : u.abortEarly;
      let g = l.issues.length;
      for (const k of a.allKeys) {
        if (m && l.issues.length !== g) {
          if (Be(l, g)) break;
          g = l.issues.length;
        }
        if (k === "__proto__") continue;
        const b = f[k], v = b._zod.optin, w = b._zod.optout, y = b._zod.run({ value: h[k], issues: [] }, u);
        y instanceof Promise ? p.push(y.then(($) => en($, l, k, h, v, w))) : en(y, l, k, h, v, w);
      }
      return o ? Zo(p, h, l, u, i.value, t, m === true) : p.length ? Promise.all(p).then(() => l) : l;
    };
  }), wf = M("$ZodObjectJIT", (t, e) => {
    vf.init(t, e);
    const s = t._zod.parse, n = Hs(() => Co(e)), i = Me.memoizer, r = (f) => {
      var _a3, _b3;
      const m = n.value, g = m.symbolKeys, k = new Ap(["payload", "ctx"], { shape: f, inst: t, memo: i, syms: g }), b = ($) => "shape[".concat($, "]._zod.run({ value: input[").concat($, "], issues: [] }, ctx)"), v = ($, x) => "\n          let ".concat($, "_ab = false;\n          for (let i = 0; i < ").concat($, ".issues.length; i++) {\n            const iss = ").concat($, ".issues[i];\n            iss.path = iss.path ? [").concat(x, ", ...iss.path] : [").concat(x, "];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ").concat($, "_ab = true;\n          }\n          if (").concat($, "_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }");
      k.write("const input = payload.value;");
      const w = /* @__PURE__ */ Object.create(null);
      let y = 0;
      for (const $ of m.allKeys) w[$] = "key_".concat(y++);
      k.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
      for (const $ of m.allKeys) {
        if ($ === "__proto__") continue;
        const x = w[$], _ = typeof $ == "symbol" ? "syms[".concat(g.indexOf($), "]") : Xd($), z = "".concat(_, " in input"), O = f[$], R = (_a3 = O == null ? void 0 : O._zod) == null ? void 0 : _a3.optin, S = R !== void 0, A = ((_b3 = O == null ? void 0 : O._zod) == null ? void 0 : _b3.optout) === "optional";
        if (k.write("const ".concat(x, " = ").concat(b(_), ";")), S && A) {
          const j = R === "optional" ? "".concat(x, "_present") : "".concat(x, ".value !== undefined || ").concat(x, "_present");
          k.write("\n        const ".concat(x, "_present = ").concat(z, ";\n        if (!").concat(x, ".issues.length || ").concat(x, "_present) {\n          if (").concat(x, ".issues.length) {").concat(v(x, _), "\n          }\n\n          if (").concat(j, ") {\n            newResult[").concat(_, "] = ").concat(x, ".value;\n          }\n        }\n\n      "));
        } else S ? (k.write("\n        if (".concat(x, ".issues.length) {").concat(v(x, _), "\n        }\n      ")), R === "defaulted" ? k.write("newResult[".concat(_, "] = ").concat(x, ".value;")) : k.write("\n        if (".concat(x, ".value !== undefined || ").concat(z, ") {\n          newResult[").concat(_, "] = ").concat(x, ".value;\n        }\n      "))) : k.write("\n        const ".concat(x, "_present = ").concat(z, ";\n        if (").concat(x, ".issues.length) {").concat(v(x, _), "\n        }\n        if (!").concat(x, "_present && !").concat(x, '.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [').concat(_, "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (").concat(x, "_present) {\n          newResult[").concat(_, "] = ").concat(x, ".value;\n        }\n\n      "));
      }
      return k.write("payload.value = newResult;"), k.write("return payload;"), k.compile();
    };
    let o;
    const a = as, c = !Me.jitless, u = c && th.value, h = e.catchall;
    let p;
    t._zod.parse = (f, m) => {
      p != null ? p : p = n.value;
      const g = f.value;
      return a(g) ? c && u && (m == null ? void 0 : m.async) === false && m.jitless !== true ? (o || (o = r(e.shape)), f = o(f, m), h ? Zo([], g, f, m, p, t, (m == null ? void 0 : m.abortEarly) === true) : f) : s(f, m) : (f.issues.push({ expected: "object", code: "invalid_type", input: g, inst: t }), f);
    };
  });
  function Uo(t, e, s, n) {
    for (const r of t) if (r.issues.length === 0) return e.value = r.value, e;
    const i = t.filter((r) => !Be(r));
    return i.length === 1 ? (e.value = i[0].value, i[0]) : (e.issues.push({ code: "invalid_union", input: e.value, inst: s, errors: t.map((r) => r.issues.map((o) => pt(o, n, Ge()))) }), e);
  }
  const Bo = M("$ZodUnion", (t, e) => {
    re.init(t, e), X(t, "optin", (n) => n.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : n.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), X(t, "optout", (n) => n.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), X(t, "values", (n) => {
      if (n.def.options.every((i) => i._zod.values)) return new Set(n.def.options.flatMap((i) => Array.from(i._zod.values)));
    }), X(t, "pattern", (n) => {
      if (n.def.options.every((i) => i._zod.pattern)) {
        const i = n.def.options.map((r) => r._zod.pattern);
        return new RegExp("^(".concat(i.map((r) => ai(r.source)).join("|"), ")$"));
      }
    });
    const s = e.options.length === 1 ? e.options[0]._zod.run : null;
    t._zod.parse = (n, i) => {
      if (s) return s(n, i);
      let r = false;
      const o = [];
      for (const a of e.options) {
        const c = a._zod.run({ value: n.value, issues: [] }, i);
        if (c instanceof Promise) o.push(c), r = true;
        else {
          if (c.issues.length === 0) return c;
          o.push(c);
        }
      }
      return r ? Promise.all(o).then((a) => Uo(a, n, t, i)) : Uo(o, n, t, i);
    };
  });
  function yf(t) {
    var _a3;
    const e = /* @__PURE__ */ new Map();
    for (const s of t.options) {
      const n = (_a3 = s._zod.propValues) == null ? void 0 : _a3[t.discriminator];
      if (!n || n.size === 0) throw new Error('Invalid discriminated union option at index "'.concat(t.options.indexOf(s), '"'));
      for (const i of n) if (e.has(i)) {
        if (i !== void 0) throw new Error('Duplicate discriminator value "'.concat(String(i), '"'));
        e.set(i, null);
      } else e.set(i, s);
    }
    return e;
  }
  const Sf = M("$ZodDiscriminatedUnion", (t, e) => {
    e.inclusive = false, Bo.init(t, e);
    const s = t._zod.parse;
    X(t, "propValues", (i) => {
      var _a3, _b3;
      const r = {};
      let o = 0;
      for (const a of i.def.options) {
        const c = a._zod.propValues;
        if (!c || Object.keys(c).length === 0) throw new Error('Invalid discriminated union option at index "'.concat(i.def.options.indexOf(a), '"'));
        ((_a3 = c[i.def.discriminator]) == null ? void 0 : _a3.has(void 0)) && o++;
        for (const [l, u] of Object.entries(c)) {
          Object.prototype.hasOwnProperty.call(r, l) || Qe(r, l, /* @__PURE__ */ new Set());
          for (const h of u) r[l].add(h);
        }
      }
      return !i.def.unionFallback && o > 1 && ((_b3 = r[i.def.discriminator]) == null ? void 0 : _b3.delete(void 0)), r;
    }), e.options.forEach((i, r) => {
      const o = ci(i._zod.def);
      if (o && !Object.prototype.hasOwnProperty.call(o, e.discriminator)) throw new Error('Invalid discriminated union option at index "'.concat(r, '"'));
    });
    const n = Hs(() => yf(e));
    t._zod.parse = (i, r) => {
      const o = i.value;
      if (!as(o)) return i.issues.push({ code: "invalid_type", expected: "object", input: o, inst: t }), i;
      const a = o == null ? void 0 : o[e.discriminator], c = n.value.get(a);
      return c && (a !== void 0 || r.direction !== "backward") ? c._zod.run(i, r) : e.unionFallback || r.direction === "backward" ? s(i, r) : (i.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: e.discriminator, options: Array.from(n.value.keys()).filter((l) => n.value.get(l) !== null), input: o, path: [e.discriminator], inst: t }), i);
    };
  }), $f = M("$ZodIntersection", (t, e) => {
    re.init(t, e), t._zod.parse = (s, n) => {
      const i = s.value, r = e.left._zod.run({ value: i, issues: [] }, n), o = e.right._zod.run({ value: i, issues: [] }, n);
      return r instanceof Promise || o instanceof Promise ? Promise.all([r, o]).then(([c, l]) => Fo(s, c, l)) : Fo(s, r, o);
    };
  });
  function zi(t, e) {
    if (t === e) return { valid: true, data: t };
    if (t instanceof Date && e instanceof Date && +t == +e) return { valid: true, data: t };
    if (Ut(t) && Ut(e)) {
      const s = Object.keys(e), n = Object.keys(t).filter((r) => s.indexOf(r) !== -1), i = { ...t, ...e };
      Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
      for (const r of n) {
        if (r === "__proto__") continue;
        const o = zi(t[r], e[r]);
        if (!o.valid) return { valid: false, mergeErrorPath: [r, ...o.mergeErrorPath] };
        i[r] = o.data;
      }
      return { valid: true, data: i };
    }
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length) return { valid: false, mergeErrorPath: [] };
      const s = [];
      for (let n = 0; n < t.length; n++) {
        const i = t[n], r = e[n], o = zi(i, r);
        if (!o.valid) return { valid: false, mergeErrorPath: [n, ...o.mergeErrorPath] };
        s.push(o.data);
      }
      return { valid: true, data: s };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function Fo(t, e, s) {
    const n = /* @__PURE__ */ new Map();
    let i;
    const r = /* @__PURE__ */ new Map(), o = (l, u) => {
      var _a3, _b3;
      let h;
      if (l.code === "unrecognized_keys" && !((_a3 = l.path) == null ? void 0 : _a3.length)) i != null ? i : i = l, h = l.keys;
      else if (l.code === "invalid_key" && l.origin === "record" && ((_b3 = l.path) == null ? void 0 : _b3.length) === 1) {
        const p = String(l.path[0]);
        r.has(p) || r.set(p, l), h = [p];
      } else return false;
      for (const p of h) n.has(p) || n.set(p, {}), n.get(p)[u] = true;
      return true;
    };
    for (const l of e.issues) o(l, "l") || t.issues.push(l);
    for (const l of s.issues) o(l, "r") || t.issues.push(l);
    const a = [...n].filter(([, l]) => l.l && l.r).map(([l]) => l);
    if (a.length) {
      const l = i ? a.filter((u) => i.keys.includes(u)) : [];
      l.length && t.issues.push({ ...i, keys: l });
      for (const u of a) !l.includes(u) && r.has(u) && t.issues.push(r.get(u));
    }
    const c = zi(e.value, s.value);
    if (!c.valid) {
      if (Be(t)) return t;
      throw new Error("Unmergable intersection. Error path: ".concat(JSON.stringify(c.mergeErrorPath)));
    }
    return t.value = c.data, t;
  }
  const zf = M("$ZodTuple", (t, e) => {
    re.init(t, e);
    const s = e.items, n = Me.memoizer;
    n == null ? void 0 : n.attach(t), t._zod.parse = (i, r) => {
      const o = i.value;
      if (!Array.isArray(o)) return i.issues.push({ input: o, inst: t, expected: "tuple", code: "invalid_type" }), i;
      i.value = n ? n.alloc(t, i, [], r) : [];
      const a = [], c = Ko(s, "optin"), l = Ko(s, "optout");
      if (!e.rest) {
        if (o.length < c) return i.issues.push({ code: "too_small", minimum: c, inclusive: true, input: o, inst: t, origin: "array" }), i;
        o.length > s.length && i.issues.push({ code: "too_big", maximum: s.length, inclusive: true, input: o, inst: t, origin: "array" });
      }
      const u = new Array(s.length), h = e.rest ? r == null ? void 0 : r.abortEarly : void 0;
      let p = false;
      for (let f = 0; f < s.length; f++) {
        const m = s[f]._zod.run({ value: o[f], issues: [] }, r);
        m instanceof Promise ? a.push(m.then((g) => {
          u[f] = g;
        })) : (u[f] = m, h && !p && m.issues.length && (p = Be(m)));
      }
      if (e.rest && !p) {
        let f = s.length - 1;
        const m = o.slice(s.length);
        let g = i.issues.length;
        for (const k of m) {
          if (h && i.issues.length !== g) {
            if (Be(i, g)) break;
            g = i.issues.length;
          }
          f++;
          const b = e.rest._zod.run({ value: k, issues: [] }, r);
          b instanceof Promise ? a.push(b.then((v) => qo(v, i, f))) : qo(b, i, f);
        }
      }
      return a.length ? Promise.all(a).then(() => Go(u, i, s, o, l)) : Go(u, i, s, o, l);
    };
  });
  function Ko(t, e) {
    for (let s = t.length - 1; s >= 0; s--) if (!(e === "optin" ? t[s]._zod.optin !== void 0 : t[s]._zod.optout === "optional")) return s + 1;
    return 0;
  }
  function qo(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  function Go(t, e, s, n, i) {
    for (let r = 0; r < s.length; r++) {
      const o = t[r], a = r < n.length;
      if (!a && r >= i && s[r]._zod.optin === "optional") {
        e.value.length = r;
        break;
      }
      if (o.issues.length) {
        if (!a && r >= i) {
          e.value.length = r;
          break;
        }
        e.issues.push(...ht(r, o.issues));
      }
      e.value[r] = o.value;
    }
    for (let r = e.value.length - 1; r >= n.length && (s[r]._zod.optout === "optional" && e.value[r] === void 0); r--) e.value.length = r;
    return e;
  }
  const _f = M("$ZodRecord", (t, e) => {
    re.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, i) => {
      const r = n.value;
      if (!Ut(r)) return n.issues.push({ expected: "record", code: "invalid_type", input: r, inst: t }), n;
      const o = [], a = e.keyType._zod.values;
      if (a && !e.partial) {
        n.value = s ? s.alloc(t, n, {}, i) : {};
        const c = /* @__PURE__ */ new Set();
        for (const u of a) if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          if (c.add(typeof u == "number" ? u.toString() : u), u === "__proto__") continue;
          const h = e.keyType._zod.run({ value: u, issues: [] }, i);
          if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (h.issues.length) {
            n.issues.push({ code: "invalid_key", origin: "record", issues: h.issues.map((m) => pt(m, i, Ge())), input: u, path: [u], inst: t });
            continue;
          }
          const p = h.value;
          if (p === "__proto__") continue;
          const f = e.valueType._zod.run({ value: r[u], issues: [] }, i);
          f instanceof Promise ? o.push(f.then((m) => {
            m.issues.length && n.issues.push(...ht(u, m.issues)), n.value[p] = m.value;
          })) : (f.issues.length && n.issues.push(...ht(u, f.issues)), n.value[p] = f.value);
        }
        let l;
        for (const u in r) if (!c.has(u)) if (e.mode === "loose") {
          if (u === "__proto__") continue;
          n.value[u] = r[u];
        } else l = l != null ? l : [], l.push(u);
        l && l.length > 0 && n.issues.push({ code: "unrecognized_keys", input: r, inst: t, keys: l, continue: true });
      } else {
        n.value = s ? s.alloc(t, n, {}, i) : {};
        let c;
        for (const l of Reflect.ownKeys(r)) {
          if (l === "__proto__" || !Object.prototype.propertyIsEnumerable.call(r, l)) continue;
          let u = e.keyType._zod.run({ value: l, issues: [] }, i);
          if (u instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof l == "string" && wi.test(l) && u.issues.length) {
            const m = e.keyType._zod.run({ value: Number(l), issues: [] }, i);
            if (m instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            m.issues.length === 0 && (u = m);
          }
          if (u.issues.length) {
            e.mode === "loose" ? n.value[l] = r[l] : a ? (c = c != null ? c : [], c.push(l)) : n.issues.push({ code: "invalid_key", origin: "record", issues: u.issues.map((m) => pt(m, i, Ge())), input: l, path: [l], inst: t });
            continue;
          }
          const p = u.value;
          if (p === "__proto__") continue;
          const f = e.valueType._zod.run({ value: r[l], issues: [] }, i);
          f instanceof Promise ? o.push(f.then((m) => {
            m.issues.length && n.issues.push(...ht(l, m.issues)), n.value[p] = m.value;
          })) : (f.issues.length && n.issues.push(...ht(l, f.issues)), n.value[p] = f.value);
        }
        c && c.length > 0 && n.issues.push({ code: "unrecognized_keys", input: r, inst: t, keys: c, continue: true });
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    };
  }), jf = M("$ZodEnum", (t, e) => {
    re.init(t, e);
    const s = ri(e.entries), n = new Set(s);
    t._zod.values = n, X(t, "pattern", (i) => {
      const r = ri(i.def.entries).filter((o) => sh.has(typeof o));
      return new RegExp(r.length ? "^(".concat(r.map((o) => Bt(o.toString())).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (i, r) => {
      const o = i.value;
      return n.has(o) || i.issues.push({ code: "invalid_value", values: s, input: o, inst: t }), i;
    };
  }), xf = M("$ZodLiteral", (t, e) => {
    re.init(t, e);
    const s = new Set(e.values);
    t._zod.values = s, X(t, "pattern", (n) => {
      const i = n.def.values;
      return new RegExp(i.length ? "^(".concat(i.map((r) => typeof r == "string" ? Bt(r) : r ? Bt(r.toString()) : String(r)).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (n, i) => {
      const r = n.value;
      return s.has(r) || n.issues.push({ code: "invalid_value", values: e.values, input: r, inst: t }), n;
    };
  }), Ef = M("$ZodTransform", (t, e) => {
    var _a3;
    re.init(t, e), t._zod.optin = "optional", (_a3 = Me.memoizer) == null ? void 0 : _a3.guard(t), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new So(t.constructor.name);
      const i = e.transform(s.value, s);
      if (n.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((o) => (s.value = o, s));
      if (i instanceof Promise) throw new xt();
      return s.value = i, s;
    };
  });
  function Wo(t, e) {
    return t.value = e.issues.length ? void 0 : e.value, t;
  }
  const Ho = M("$ZodOptional", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? /* @__PURE__ */ new Set([...n, void 0]) : void 0;
    }), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(ai(n.source), ")?$")) : void 0;
    }), t._zod.parse = (s, n) => {
      if (s.value === void 0) {
        if (e.innerType._zod.optin !== "defaulted") return s;
        const i = e.innerType._zod.run({ value: s.value, issues: [] }, n);
        return i instanceof Promise ? i.then((r) => Wo(s, r)) : Wo(s, i);
      }
      return e.innerType._zod.run(s, n);
    };
  }), Af = M("$ZodExactOptional", (t, e) => {
    Ho.init(t, e), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "pattern", (s) => s.def.innerType._zod.pattern), t._zod.parse = (s, n) => e.innerType._zod.run(s, n);
  }), Tf = M("$ZodNullable", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(ai(n.source), "|null)$")) : void 0;
    }), X(t, "values", (s) => s.def.innerType._zod.values ? /* @__PURE__ */ new Set([...s.def.innerType._zod.values, null]) : void 0), t._zod.parse = (s, n) => s.value === null ? s : e.innerType._zod.run(s, n);
  }), If = M("$ZodDefault", (t, e) => {
    re.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      if (s.value === void 0) return s.value = e.defaultValue, s;
      const i = e.innerType._zod.run(s, n);
      return i instanceof Promise ? i.then((r) => Vo(r, e)) : Vo(i, e);
    };
  });
  function Vo(t, e) {
    return t.value === void 0 && (t.value = e.defaultValue), t;
  }
  const Mf = M("$ZodPrefault", (t, e) => {
    re.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => (n.direction === "backward" || s.value === void 0 && (s.value = e.defaultValue), e.innerType._zod.run(s, n));
  }), Of = M("$ZodNonOptional", (t, e) => {
    re.init(t, e), X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
    }), t._zod.parse = (s, n) => {
      const i = e.innerType._zod.run(s, n);
      return i instanceof Promise ? i.then((r) => Yo(r, t)) : Yo(i, t);
    };
  });
  function Yo(t, e) {
    return !t.issues.length && t.value === void 0 && t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: e }), t;
  }
  function Jo(t, e, s, n) {
    return e.issues.length ? (t.value = s.catchValue({ ...e, value: t.value, error: { issues: e.issues.map((i) => pt(i, n, Ge())) }, input: t.value }), t) : (t.value = e.value, e.memo && (t.memo = true), t);
  }
  const Nf = M("$ZodCatch", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const i = e.innerType._zod.run({ value: s.value, issues: [] }, n);
      return i instanceof Promise ? i.then((r) => Jo(s, r, e, n)) : Jo(s, i, e, n);
    };
  }), Qo = M("$ZodPipe", (t, e) => {
    re.init(t, e), X(t, "values", (s) => s.def.in._zod.values), X(t, "optin", (s) => s.def.in._zod.optin), X(t, "optout", (s) => s.def.out._zod.optout), X(t, "propValues", (s) => s.def.in._zod.propValues), t._zod.parse = (s, n) => {
      if (n.direction === "backward") {
        const r = e.out._zod.run(s, n);
        return r instanceof Promise ? r.then((o) => tn(o, e.in, n)) : tn(r, e.in, n);
      }
      const i = e.in._zod.run(s, n);
      return i instanceof Promise ? i.then((r) => tn(r, e.out, n)) : tn(i, e.out, n);
    };
  });
  function tn(t, e, s) {
    return t.issues.some((n) => n.code !== "unrecognized_keys") ? (t.aborted = true, t) : e._zod.run({ value: t.value, issues: t.issues }, s);
  }
  const Pf = M("$ZodPreprocess", (t, e) => {
    Qo.init(t, e);
  }), Rf = M("$ZodReadonly", (t, e) => {
    re.init(t, e), X(t, "propValues", (s) => s.def.innerType._zod.propValues), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "optin", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), X(t, "optout", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const i = e.innerType._zod.run(s, n);
      return i instanceof Promise ? i.then(Xo) : Xo(i);
    };
  });
  function Xo(t) {
    return t.memo || (t.value = Object.freeze(t.value)), t;
  }
  const Df = M("$ZodLazy", (t, e) => {
    re.init(t, e), Jd(t._zod, "innerType", () => {
      const s = e;
      return s._cachedInner || (s._cachedInner = e.getter()), s._cachedInner;
    }), X(t, "pattern", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.pattern;
    }), X(t, "propValues", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.propValues;
    }), X(t, "optin", (s) => {
      var _a3, _b3, _c2;
      return (_c2 = (_b3 = (_a3 = s.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin) != null ? _c2 : void 0;
    }), X(t, "optout", (s) => {
      var _a3, _b3, _c2;
      return (_c2 = (_b3 = (_a3 = s.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout) != null ? _c2 : void 0;
    }), t._zod.parse = (s, n) => t._zod.innerType._zod.run(s, n);
  }), Lf = M("$ZodCustom", (t, e) => {
    ze.init(t, e), re.init(t, e), t._zod.parse = (s, n) => s, t._zod.check = (s) => {
      const n = s.value, i = e.fn(n);
      if (i instanceof Promise) return i.then((r) => ea(r, s, n, t));
      ea(i, s, n, t);
    };
  });
  function ea(t, e, s, n) {
    var _a3;
    if (!t) {
      const i = { code: "custom", input: s, inst: n, path: [...(_a3 = n._zod.def.path) != null ? _a3 : []], continue: !n._zod.def.abort };
      n._zod.def.params && (i.params = n._zod.def.params), e.issues.push(ls(i));
    }
  }
  class Cf extends Error {
    constructor() {
      super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
    }
  }
  const _i = "~memo", ta = [];
  function sa(t) {
    return t !== null && typeof t == "object";
  }
  function ji(t) {
    return t.map((e) => e.path ? { ...e, path: e.path.slice() } : { ...e });
  }
  const na = /* @__PURE__ */ new WeakMap(), us = 0, sn = 1, ds = 2;
  function nn(t, e, s) {
    var _a3;
    const n = na.get(t);
    if (n !== void 0) return n ? ds : us;
    if (e.has(t)) return ds;
    e.add(t);
    let i = us;
    const r = (u) => {
      if (i !== ds && (u == null ? void 0 : u._zod)) {
        const h = nn(u, e);
        h > i && (i = h);
      }
    }, o = (u, h) => {
      var _a4;
      let p = us;
      for (const f of Reflect.ownKeys(u)) {
        const m = Object.getOwnPropertyDescriptor(u, f);
        if (!m.enumerable) continue;
        const g = m.get ? sn : ((_a4 = m.value) == null ? void 0 : _a4._zod) ? nn(m.value, e) : us;
        g > p && (p = g);
      }
      return p;
    }, a = (u) => {
      u > i && (i = u);
    }, c = t._zod.def;
    switch (c.type) {
      case "object": {
        const u = ci(c);
        a(u ? o(u) : sn), r(c.catchall);
        break;
      }
      case "array":
        r(c.element);
        break;
      case "tuple":
        for (const u of c.items) r(u);
        r(c.rest);
        break;
      case "record":
      case "map":
        r(c.keyType), r(c.valueType);
        break;
      case "set":
        r(c.valueType);
        break;
      case "union":
        for (const u of c.options) r(u);
        break;
      case "intersection":
        r(c.left), r(c.right);
        break;
      case "optional":
      case "nullable":
      case "default":
      case "prefault":
      case "catch":
      case "readonly":
      case "nonoptional":
      case "promise":
      case "success":
        r(c.innerType);
        break;
      case "pipe":
        r(c.in), r(c.out);
        break;
      case "function":
        r(c.input), r(c.output);
        break;
      case "lazy": {
        const u = (_a3 = c._cachedInner) != null ? _a3 : void 0;
        a(u ? nn(u, e) : sn);
        break;
      }
      case "template_literal":
      case "string":
      case "number":
      case "int":
      case "boolean":
      case "bigint":
      case "symbol":
      case "undefined":
      case "null":
      case "void":
      case "never":
      case "any":
      case "unknown":
      case "date":
      case "nan":
      case "enum":
      case "literal":
      case "file":
      case "transform":
      case "custom":
        break;
      default:
        for (const u in c) {
          const h = Object.getOwnPropertyDescriptor(c, u);
          if (!h || h.get) continue;
          const p = h.value;
          if (!(!p || typeof p != "object")) {
            if (p._zod) r(p);
            else if (Array.isArray(p)) for (const f of p) r(f);
          }
        }
    }
    return e.delete(t), Zf(t, i);
  }
  function Zf(t, e) {
    return e !== sn && na.set(t, e === ds), e;
  }
  function Uf(t, e) {
    let s = t.buckets.get(e);
    return s || (s = /* @__PURE__ */ new WeakMap(), t.buckets.set(e, s)), s;
  }
  let rn;
  const on = [], Bf = { alloc(t, e, s) {
    const n = rn;
    if (!n) return s;
    rn = void 0;
    const i = { value: s, issues: null };
    return n.set(e.value, i), on.push(i), s;
  }, guard(t) {
    var _a3;
    var e;
    (_a3 = (e = t._zod).deferred) != null ? _a3 : e.deferred = [], t._zod.deferred.push(() => {
      const s = t._zod.parse, n = (i, r) => {
        if (r.direction !== "backward" && Kf(r, i.value)) throw new Cf();
        return s(i, r);
      };
      t._zod.parse = n, t._zod.run === s && (t._zod.run = n);
    });
  }, attach(t) {
    var _a3;
    var e;
    let s, n = false, i, r;
    (_a3 = (e = t._zod).deferred) != null ? _a3 : e.deferred = [], t._zod.deferred.push(() => {
      const o = t._zod.parse, a = (c, l) => {
        var _a4;
        if (s === void 0) {
          const b = nn(t, /* @__PURE__ */ new Set());
          if (b === us) return t._zod.parse = o, t._zod.run === a && (t._zod.run = o), o(c, l);
          b === ds || n ? s = true : n = true;
        }
        const u = c.value;
        if (!sa(u)) return o(c, l);
        let h = l[_i];
        h || (h = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, l[_i] = h);
        let p;
        i === l ? p = r : (p = Uf(h, t), i = l, r = p);
        const f = p.get(u);
        if (f) return c.value = f.value, f.issues ? f.issues.length && c.issues.push(...ji(f.issues)) : (c.memo = true, (_a4 = h.backEdges) != null ? _a4 : h.backEdges = /* @__PURE__ */ new WeakSet(), h.backEdges.add(f.value)), c;
        rn = p;
        const m = on.length, g = o(c, l);
        rn = void 0;
        const k = on.length > m ? on.pop() : void 0;
        return g instanceof Promise ? g.then((b) => (k && (k.issues = b.issues.length ? ji(b.issues) : ta), b)) : (k && (k.issues = g.issues.length ? ji(g.issues) : ta), g);
      };
      t._zod.parse = a, t._zod.run === o && (t._zod.run = a);
    });
  } };
  function Ff() {
    return Bf;
  }
  function Kf(t, e) {
    var _a3;
    const s = (_a3 = t[_i]) == null ? void 0 : _a3.backEdges;
    return s !== void 0 && sa(e) && s.has(e);
  }
  const qf = () => {
    const t = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
    function e(r) {
      var _a3;
      return (_a3 = t[r]) != null ? _a3 : null;
    }
    const s = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", currency_code: "currency code", credit_card: "credit card number", iban: "IBAN", jwt: "JWT", template_literal: "input" }, n = { nan: "NaN" };
    function i(r, o) {
      var _a3;
      return r === "number" && typeof o == "number" && !Number.isFinite(o) ? String(o) : (_a3 = n[r]) != null ? _a3 : r;
    }
    return (r) => {
      var _a3, _b3, _c2, _d2;
      switch (r.code) {
        case "invalid_type": {
          const o = i(r.expected), a = ph(r.input), c = i(a, r.input);
          return "Invalid input: expected ".concat(o, ", received ").concat(c);
        }
        case "invalid_value":
          return r.values.length === 1 ? "Invalid input: expected ".concat(po(r.values[0])) : "Invalid option: expected one of ".concat(oo(r.values, "|"));
        case "too_big": {
          const o = r.exact ? "exactly " : r.inclusive ? "<=" : "<", a = e(r.origin);
          return a ? "Too big: expected ".concat((_a3 = r.origin) != null ? _a3 : "value", " to have ").concat(o).concat(r.maximum.toString(), " ").concat((_b3 = a.unit) != null ? _b3 : "elements") : "Too big: expected ".concat((_c2 = r.origin) != null ? _c2 : "value", " to be ").concat(o).concat(r.maximum.toString());
        }
        case "too_small": {
          const o = r.exact ? "exactly " : r.inclusive ? ">=" : ">", a = e(r.origin);
          return a ? "Too small: expected ".concat(r.origin, " to have ").concat(o).concat(r.minimum.toString(), " ").concat(a.unit) : "Too small: expected ".concat(r.origin, " to be ").concat(o).concat(r.minimum.toString());
        }
        case "invalid_format": {
          const o = r;
          return o.format === "starts_with" ? 'Invalid string: must start with "'.concat(o.prefix, '"') : o.format === "ends_with" ? 'Invalid string: must end with "'.concat(o.suffix, '"') : o.format === "includes" ? 'Invalid string: must include "'.concat(o.includes, '"') : o.format === "regex" ? "Invalid string: must match pattern ".concat(o.pattern) : "Invalid ".concat((_d2 = s[o.format]) != null ? _d2 : r.format);
        }
        case "not_multiple_of":
          return "Invalid number: must be a multiple of ".concat(r.divisor);
        case "unrecognized_keys":
          return "Unrecognized key".concat(r.keys.length > 1 ? "s" : "", ": ").concat(oo(r.keys, ", "));
        case "invalid_key":
          return "Invalid key in ".concat(r.origin);
        case "invalid_union":
          return r.options && Array.isArray(r.options) && r.options.length > 0 ? "Invalid discriminator value. Expected ".concat(r.options.map((a) => "'".concat(a, "'")).join(" | ")) : r.inclusive === false ? "Invalid input: more than one option matched" : "Invalid input";
        case "invalid_element":
          return "Invalid value in ".concat(r.origin);
        default:
          return "Invalid input";
      }
    };
  };
  function Gf() {
    return { localeError: qf() };
  }
  var ia;
  class Wf {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(e, ...s) {
      const n = s[0];
      return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
    }
    clear() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(e) {
      const s = this._map.get(e);
      return s && typeof s == "object" && "id" in s && this._idmap.delete(s.id), this._map.delete(e), this;
    }
    get(e) {
      var _a3;
      const s = e._zod.parent;
      if (s) {
        const n = { ...(_a3 = this.get(s)) != null ? _a3 : {} };
        delete n.id;
        const i = { ...n, ...this._map.get(e) };
        return Object.keys(i).length ? i : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  }
  function Hf() {
    return new Wf();
  }
  (_b2 = (ia = globalThis).__zod_globalRegistry) != null ? _b2 : ia.__zod_globalRegistry = Hf();
  const hs = globalThis.__zod_globalRegistry;
  function ra(t) {
    return t.checks && (t.checks = [...t.checks]), t;
  }
  function Vf(t, e) {
    return new t(ra({ type: "string", ...q(e) }));
  }
  function Yf(t, e) {
    return new t({ type: "string", format: "email", check: "string_format", abort: false, ...q(e) });
  }
  function Jf(t, e) {
    return new t({ type: "string", format: "guid", check: "string_format", abort: false, ...q(e) });
  }
  function Qf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, ...q(e) });
  }
  function Xf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...q(e) });
  }
  function em(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...q(e) });
  }
  function tm(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...q(e) });
  }
  function oa(t, e) {
    return new t({ type: "string", format: "url", check: "string_format", abort: false, ...q(e) });
  }
  function sm(t, e) {
    return new t({ type: "string", format: "emoji", check: "string_format", abort: false, ...q(e) });
  }
  function nm(t, e) {
    return new t({ type: "string", format: "nanoid", check: "string_format", abort: false, ...q(e) });
  }
  function im(t, e) {
    return new t({ type: "string", format: "cuid", check: "string_format", abort: false, ...q(e) });
  }
  function rm(t, e) {
    return new t({ type: "string", format: "cuid2", check: "string_format", abort: false, ...q(e) });
  }
  function om(t, e) {
    return new t({ type: "string", format: "ulid", check: "string_format", abort: false, ...q(e) });
  }
  function am(t, e) {
    return new t({ type: "string", format: "xid", check: "string_format", abort: false, ...q(e) });
  }
  function cm(t, e) {
    return new t({ type: "string", format: "ksuid", check: "string_format", abort: false, ...q(e) });
  }
  function lm(t, e) {
    return new t({ type: "string", format: "ipv4", check: "string_format", abort: false, ...q(e) });
  }
  function um(t, e) {
    return new t({ type: "string", format: "ipv6", check: "string_format", abort: false, ...q(e) });
  }
  function dm(t, e) {
    return new t({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...q(e) });
  }
  function hm(t, e) {
    return new t({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...q(e) });
  }
  function pm(t, e) {
    return new t({ type: "string", format: "base64", check: "string_format", abort: false, ...q(e) });
  }
  function fm(t, e) {
    return new t({ type: "string", format: "base64url", check: "string_format", abort: false, ...q(e) });
  }
  function mm(t, e) {
    return new t({ type: "string", format: "e164", check: "string_format", abort: false, ...q(e) });
  }
  function gm(t, e) {
    return new t({ type: "string", format: "jwt", check: "string_format", abort: false, ...q(e) });
  }
  function km(t, e) {
    return new t({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...q(e) });
  }
  function bm(t, e) {
    return new t({ type: "string", format: "date", check: "string_format", ...q(e) });
  }
  function vm(t, e) {
    return new t({ type: "string", format: "time", check: "string_format", precision: null, ...q(e) });
  }
  function wm(t, e) {
    return new t({ type: "string", format: "duration", check: "string_format", ...q(e) });
  }
  function ym(t, e) {
    return new t(ra({ type: "number", checks: [], ...q(e) }));
  }
  function Sm(t, e) {
    return new t({ type: "number", check: "number_format", abort: false, format: "safeint", ...q(e) });
  }
  function $m(t, e) {
    return new t({ type: "boolean", ...q(e) });
  }
  function zm(t) {
    return new t({ type: "unknown" });
  }
  function _m(t, e) {
    return new t({ type: "never", ...q(e) });
  }
  function aa(t, e) {
    return new xo({ check: "less_than", ...q(e), value: t, inclusive: false });
  }
  function xi(t, e) {
    return new xo({ check: "less_than", ...q(e), value: t, inclusive: true });
  }
  function ca(t, e) {
    return new Eo({ check: "greater_than", ...q(e), value: t, inclusive: false });
  }
  function Ei(t, e) {
    return new Eo({ check: "greater_than", ...q(e), value: t, inclusive: true });
  }
  function la(t, e) {
    return new kp({ check: "multiple_of", ...q(e), value: t });
  }
  function ua(t, e) {
    return new vp({ check: "max_length", ...q(e), maximum: t });
  }
  function an(t, e) {
    return new wp({ check: "min_length", ...q(e), minimum: t });
  }
  function da(t, e) {
    return new yp({ check: "length_equals", ...q(e), length: t });
  }
  function jm(t, e) {
    return new Sp({ check: "string_format", format: "regex", ...q(e), pattern: t });
  }
  function xm(t) {
    return new $p({ check: "string_format", format: "lowercase", ...q(t) });
  }
  function Em(t) {
    return new zp({ check: "string_format", format: "uppercase", ...q(t) });
  }
  function Am(t, e) {
    return new _p({ check: "string_format", format: "includes", ...q(e), includes: t });
  }
  function Tm(t, e) {
    return new jp({ check: "string_format", format: "starts_with", ...q(e), prefix: t });
  }
  function Im(t, e) {
    return new xp({ check: "string_format", format: "ends_with", ...q(e), suffix: t });
  }
  function Ft(t) {
    return new Ep({ check: "overwrite", tx: t });
  }
  function Mm(t) {
    return Ft((e) => e.normalize(t));
  }
  function Om() {
    return Ft((t) => t.trim());
  }
  function Nm() {
    return Ft((t) => t.toLowerCase());
  }
  function Pm() {
    return Ft((t) => t.toUpperCase());
  }
  function Rm() {
    return Ft((t) => eh(t));
  }
  function Dm(t, e, s) {
    return new t({ type: "array", element: e, ...q(s) });
  }
  function Lm(t, e, s) {
    return new t({ type: "custom", check: "custom", fn: e, ...q(s) });
  }
  function Cm(t, e) {
    const s = Zm((n) => (n.addIssue = (i) => {
      var _a3, _b3, _c2;
      if (typeof i == "string") n.issues.push(ls(i, n.value, s._zod.def));
      else {
        const r = i;
        r.fatal && (r.continue = false), (_a3 = r.code) != null ? _a3 : r.code = "custom", "input" in r || (r.input = n.value), (_b3 = r.inst) != null ? _b3 : r.inst = s, (_c2 = r.continue) != null ? _c2 : r.continue = !s._zod.def.abort, n.issues.push(ls(r));
      }
    }, t(n.value, n)), e);
    return s;
  }
  function Zm(t, e) {
    const s = new ze({ check: "custom", ...q(e) });
    return s._zod.check = t, s;
  }
  function ps(t, ...e) {
    for (const s of e) for (const n of Reflect.ownKeys(s)) Object.prototype.propertyIsEnumerable.call(s, n) && Qe(t, n, s[n]);
    return t;
  }
  function ha(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
    let e = (_a3 = t == null ? void 0 : t.target) != null ? _a3 : "draft-2020-12";
    return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), { processors: (_b3 = t.processors) != null ? _b3 : {}, metadataRegistry: (_c2 = t == null ? void 0 : t.metadata) != null ? _c2 : hs, target: e, unrepresentable: (_d2 = t == null ? void 0 : t.unrepresentable) != null ? _d2 : "throw", override: (_e2 = t == null ? void 0 : t.override) != null ? _e2 : (() => {
    }), io: (_f2 = t == null ? void 0 : t.io) != null ? _f2 : "output", counter: 0, seen: /* @__PURE__ */ new Map(), sharedDefsExtractedFor: void 0, sharedEmitDoneFor: void 0, cycles: (_g2 = t == null ? void 0 : t.cycles) != null ? _g2 : "ref", reused: (_h2 = t == null ? void 0 : t.reused) != null ? _h2 : "inline", intersections: [], deferred: [], external: (_i2 = t == null ? void 0 : t.external) != null ? _i2 : void 0 };
  }
  function gt(t, e, s, n, i) {
    const r = typeof e.unrepresentable == "function" ? e.unrepresentable({ zodSchema: t, path: n.path, message: i }) : e.unrepresentable;
    if (r === "any") return false;
    if (r === void 0 || r === "throw") throw new Error(i);
    return Object.assign(s, r), true;
  }
  function le(t, e, s = { path: [], schemaPath: [] }) {
    var _a3, _b3, _c2;
    var n;
    const i = t._zod.def, r = e.seen.get(t);
    if (r) return r.count++, s.schemaPath.includes(t) && (r.cycle = s.path), r.schema;
    const o = { schema: {}, count: 1, cycle: void 0, path: s.path };
    e.seen.set(t, o), e.sharedDefsExtractedFor = void 0, e.sharedEmitDoneFor = void 0;
    const a = (_b3 = (_a3 = t._zod).toJSONSchema) == null ? void 0 : _b3.call(_a3);
    if (a) o.schema = a;
    else {
      const u = { ...s, schemaPath: [...s.schemaPath, t], path: s.path };
      if (t._zod.processJSONSchema) t._zod.processJSONSchema(e, o.schema, u);
      else {
        const p = o.schema, f = e.processors[i.type];
        if (!f) throw new Error("[toJSONSchema]: Non-representable type encountered: ".concat(i.type));
        f(t, e, p, u);
      }
      const h = t._zod.parent;
      h && (o.ref || (o.ref = h), le(h, e, u), e.seen.get(h).isParent = true);
    }
    const c = e.metadataRegistry.get(t);
    return c && ps(o.schema, c), e.io === "input" && we(t) && (delete o.schema.examples, delete o.schema.default), e.io === "input" && "_prefault" in o.schema && ((_c2 = (n = o.schema).default) != null ? _c2 : n.default = o.schema._prefault), delete o.schema._prefault, e.seen.get(t).schema;
  }
  function pa(t) {
    return t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function fa(t, e) {
    var _a3, _b3, _c2, _d2;
    const s = t.seen.get(e);
    if (!s) throw new Error("Unprocessed schema. This is a bug in Zod.");
    if (t.external && t.sharedDefsExtractedFor === t.external) return;
    const n = /* @__PURE__ */ new Map();
    for (const o of t.seen.entries()) {
      const a = (_a3 = t.metadataRegistry.get(o[0])) == null ? void 0 : _a3.id;
      if (a) {
        const c = n.get(a);
        if (c && c !== o[0]) throw new Error('Duplicate schema id "'.concat(a, '" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.'));
        n.set(a, o[0]);
      }
    }
    const i = (o) => {
      var _a4, _b4, _c3, _d3, _e2;
      const a = t.target === "draft-2020-12" ? "$defs" : "definitions";
      if (t.external) {
        const h = (_a4 = t.external.registry.get(o[0])) == null ? void 0 : _a4.id, p = (_b4 = t.external.uri) != null ? _b4 : ((m) => m);
        if (h) return { ref: p(h) };
        const f = (_d3 = (_c3 = o[1].defId) != null ? _c3 : o[1].schema.id) != null ? _d3 : "schema".concat(t.counter++);
        return o[1].defId = f, { defId: f, ref: "".concat(p("__shared"), "#/").concat(a, "/").concat(pa(f)) };
      }
      const c = "#", l = "".concat(c, "/").concat(a, "/");
      if (o[1] === s && !o[1].schema.id) return { ref: c };
      const u = (_e2 = o[1].schema.id) != null ? _e2 : "__schema".concat(t.counter++);
      return { defId: u, ref: l + pa(u) };
    }, r = (o) => {
      if (o[1].schema.$ref) return;
      const a = o[1], { ref: c, defId: l } = i(o);
      a.def = { ...a.schema }, l && (a.defId = l);
      const u = a.schema;
      for (const h in u) delete u[h];
      u.$ref = c;
    };
    if (t.cycles === "throw") for (const o of t.seen.entries()) {
      const a = o[1];
      if (a.cycle) throw new Error("Cycle detected: #/".concat((_b3 = a.cycle) == null ? void 0 : _b3.join("/"), '/<root>\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.'));
    }
    for (const o of t.seen.entries()) {
      const a = o[1];
      if (e === o[0]) {
        r(o);
        continue;
      }
      if (t.external) {
        const l = (_c2 = t.external.registry.get(o[0])) == null ? void 0 : _c2.id;
        if (e !== o[0] && l) {
          r(o);
          continue;
        }
      }
      if ((_d2 = t.metadataRegistry.get(o[0])) == null ? void 0 : _d2.id) {
        r(o);
        continue;
      }
      if (a.cycle) {
        r(o);
        continue;
      }
      a.count > 1 && t.reused === "ref" && r(o);
    }
    t.external && (t.sharedDefsExtractedFor = t.external);
  }
  function ma(t) {
    const e = t.anyOf;
    if (!Array.isArray(e) || e.length === 0 || t.type !== void 0) return;
    const s = [];
    for (const n of e) {
      if (!n || typeof n != "object") return;
      ma(n);
      const i = Object.keys(n);
      if (i.length !== 1 || i[0] !== "type") return;
      const r = n.type;
      for (const o of Array.isArray(r) ? r : [r]) {
        if (typeof o != "string") return;
        s.includes(o) || s.push(o);
      }
    }
    delete t.anyOf, t.type = s.length === 1 ? s[0] : s;
  }
  const ga = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), ka = ["oneOf", "anyOf"];
  function ba(t) {
    const e = t.additionalProperties;
    return e === void 0 || e === false || typeof e != "object" || e === null ? null : Object.keys(e).length ? e : null;
  }
  function Ai(t) {
    var _a3, _b3, _c2, _d2;
    const e = [];
    for (const r of t) {
      if (typeof r != "object" || r.type !== "object") return null;
      for (const o in r) if (!ga.has(o)) return null;
      e.push(r);
    }
    const s = {}, n = /* @__PURE__ */ new Set();
    for (const r of e) {
      for (const o in r.properties) {
        if (Object.prototype.hasOwnProperty.call(s, o)) continue;
        const a = [];
        for (const l of e) {
          const u = (_b3 = (_a3 = l.properties) == null ? void 0 : _a3[o]) != null ? _b3 : ba(l);
          u != null && (a.some((h) => JSON.stringify(h) === JSON.stringify(u)) || a.push(u));
        }
        const c = a.length === 1 ? a[0] : (_c2 = Ai(a)) != null ? _c2 : { allOf: a };
        Qe(s, o, c);
      }
      for (const o of (_d2 = r.required) != null ? _d2 : []) n.add(o);
    }
    const i = { type: "object", properties: s };
    if (n.size && (i.required = [...n]), e.every((r) => r.additionalProperties === false)) i.additionalProperties = false;
    else {
      const r = [];
      for (const o of e) {
        const a = ba(o);
        a && !r.some((c) => JSON.stringify(c) === JSON.stringify(a)) && r.push(a);
      }
      r.length === 1 ? i.additionalProperties = r[0] : r.length > 1 && (i.additionalProperties = { allOf: r });
    }
    return i;
  }
  function Um(t) {
    const e = t.allOf;
    if (!Array.isArray(e) || e.length < 2) return;
    for (const i of ga) if (i in t) return;
    const s = e.filter((i) => ka.some((r) => Array.isArray(i[r])));
    let n = null;
    if (!s.length) n = Ai(e);
    else {
      const i = s[0], r = ka.find((c) => Array.isArray(i[c]));
      if (Object.keys(i).length !== 1) return;
      const o = e.filter((c) => c !== i), a = i[r].map((c) => Ai([...o, c]));
      if (a.some((c) => !c)) return;
      n = { [r]: a };
    }
    n && (delete t.allOf, ps(t, n));
  }
  function va(t, e) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    const s = t.seen.get(e);
    if (!s) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const n = (a) => {
      var _a4, _b4, _c3;
      const c = t.seen.get(a);
      if (c.ref === null) return;
      const l = (_a4 = c.def) != null ? _a4 : c.schema, u = { ...l }, h = c.ref;
      if (c.ref = null, h) {
        n(h);
        const f = t.seen.get(h), m = f.schema;
        if (m.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (l.allOf = (_b4 = l.allOf) != null ? _b4 : [], l.allOf.push(m)) : ps(l, m), ps(l, u), a._zod.parent === h) for (const k in l) k === "$ref" || k === "allOf" || k in u || delete l[k];
        if (m.$ref && f.def) for (const k in l) k === "$ref" || k === "allOf" || k in f.def && JSON.stringify(l[k]) === JSON.stringify(f.def[k]) && delete l[k];
      }
      const p = a._zod.parent;
      if (p && p !== h) {
        n(p);
        const f = t.seen.get(p);
        if ((f == null ? void 0 : f.schema.$ref) && (l.$ref = f.schema.$ref, f.def)) for (const m in l) m === "$ref" || m === "allOf" || m in f.def && JSON.stringify(l[m]) === JSON.stringify(f.def[m]) && delete l[m];
      }
      t.override({ zodSchema: a, jsonSchema: l, path: (_c3 = c.path) != null ? _c3 : [] });
    };
    if (!t.external || t.sharedEmitDoneFor !== t.external) {
      for (const a of [...t.seen.entries()].reverse()) n(a[0]);
      if (t.target !== "openapi-3.0") for (const a of t.seen.entries()) ma((_a3 = a[1].def) != null ? _a3 : a[1].schema);
      for (const a of t.deferred) a();
      if (t.intersections.length) {
        const a = /* @__PURE__ */ new Map();
        for (const c of t.seen.values()) for (const l of [c.schema, c.def]) {
          const u = l == null ? void 0 : l.allOf;
          if (!Array.isArray(u)) continue;
          const h = a.get(u);
          h ? h.push(l) : a.set(u, [l]);
        }
        for (const c of t.intersections) for (const l of (_b3 = a.get(c)) != null ? _b3 : []) Um(l);
      }
    }
    const i = {};
    if (t.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : t.target, (_c2 = t.external) == null ? void 0 : _c2.uri) {
      const a = (_d2 = t.external.registry.get(e)) == null ? void 0 : _d2.id;
      if (!a) throw new Error("Schema is missing an `id` property");
      i.$id = t.external.uri(a);
    }
    ps(i, s.defId ? s.schema : (_e2 = s.def) != null ? _e2 : s.schema);
    const r = (_f2 = t.metadataRegistry.get(e)) == null ? void 0 : _f2.id;
    r !== void 0 && i.id === r && delete i.id;
    const o = (_h2 = (_g2 = t.external) == null ? void 0 : _g2.defs) != null ? _h2 : {};
    if (!t.external || t.sharedEmitDoneFor !== t.external) for (const a of t.seen.entries()) {
      const c = a[1];
      c.def && c.defId && (c.def.id === c.defId && delete c.def.id, Qe(o, c.defId, c.def));
    }
    t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(o).length > 0 && (t.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
    try {
      const a = JSON.parse(JSON.stringify(i));
      return Object.defineProperty(a, "~standard", { value: { ...e["~standard"], jsonSchema: { input: cn(e, "input", t.processors), output: cn(e, "output", t.processors) } }, enumerable: false, writable: false }), a;
    } catch (e2) {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function we(t, e) {
    const s = e != null ? e : { seen: /* @__PURE__ */ new Set() };
    if (s.seen.has(t)) return false;
    s.seen.add(t);
    const n = t._zod.def;
    if (n.type === "transform") return true;
    if (n.type === "array") return we(n.element, s);
    if (n.type === "set") return we(n.valueType, s);
    if (n.type === "lazy") return we(n.getter(), s);
    if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault" || n.type === "catch") return we(n.innerType, s);
    if (n.type === "intersection") return we(n.left, s) || we(n.right, s);
    if (n.type === "record" || n.type === "map") return we(n.keyType, s) || we(n.valueType, s);
    if (n.type === "pipe") return t._zod.traits.has("$ZodCodec") ? true : we(n.in, s) || we(n.out, s);
    if (n.type === "object") {
      for (const i in n.shape) if (we(n.shape[i], s)) return true;
      return false;
    }
    if (n.type === "union") {
      for (const i of n.options) if (we(i, s)) return true;
      return false;
    }
    if (n.type === "tuple") {
      for (const i of n.items) if (we(i, s)) return true;
      return !!(n.rest && we(n.rest, s));
    }
    return false;
  }
  const Bm = (t, e = {}) => (s) => {
    const n = ha({ ...s, processors: e });
    return le(t, n), fa(n, t), va(n, t);
  }, cn = (t, e, s = {}) => (n) => {
    const { libraryOptions: i, target: r } = n != null ? n : {}, o = ha({ ...i != null ? i : {}, target: r, io: e, processors: s });
    return le(t, o), fa(o, t), va(o, t);
  }, Kt = (t, e, s) => {
    (t[e] === void 0 || s > t[e]) && (t[e] = s);
  }, qt = (t, e, s) => {
    (t[e] === void 0 || s < t[e]) && (t[e] = s);
  }, wa = (t, e) => {
    Kt(t, "minimum", e), qt(t, "maximum", e);
  }, ya = (t, e) => {
    var _a3;
    (_a3 = t.multipleOf) != null ? _a3 : t.multipleOf = [], t.multipleOf.includes(e) || t.multipleOf.push(e);
  }, Sa = (t, e) => {
    var _a3;
    (_a3 = t.patterns) != null ? _a3 : t.patterns = /* @__PURE__ */ new Set(), t.patterns.add(e);
  }, $a = (t, e) => {
    t.mime = t.mime ? t.mime.filter((s) => e.includes(s)) : [...e];
  }, za = (t, e) => {
    t.format = e, e.includes("int") && (t.isInt = true);
  }, _a = (t, e) => Kt(t, "minimum", e.minimum), ja = (t, e) => qt(t, "maximum", e.maximum), xa = (t) => (e, s) => {
    za(e, s.format);
    const [n, i] = t[s.format];
    Kt(e, "minimum", n), qt(e, "maximum", i);
  }, Fm = { greater_than: (t, e) => Kt(t, e.inclusive ? "minimum" : "exclusiveMinimum", e.value), less_than: (t, e) => qt(t, e.inclusive ? "maximum" : "exclusiveMaximum", e.value), multiple_of: (t, e) => ya(t, e.value), number_format: xa(fo), bigint_format: xa(ih), min_length: _a, max_length: ja, length_equals: (t, e) => wa(t, e.length), min_size: _a, max_size: ja, size_equals: (t, e) => wa(t, e.size), string_format: (t, e) => {
    za(t, e.format), e.pattern && Sa(t, e.pattern), (e.format === "base64" || e.format === "base64url") && (t.contentEncoding = e.format), (e.local || e.precision === -1) && (t.laxFormat = true);
  }, mime_type: (t, e) => $a(t, e.mime) };
  function Oe(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = {}, s = t._zod.def, n = t._zod.traits.has("$ZodCheck") ? [t, ...(_a3 = s.checks) != null ? _a3 : []] : (_b3 = s.checks) != null ? _b3 : [];
    for (const r of n) (_c2 = Fm[r._zod.def.check]) == null ? void 0 : _c2.call(Fm, e, r._zod.def);
    const i = t._zod.bag;
    i.minimum !== void 0 && Kt(e, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && Kt(e, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && qt(e, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && qt(e, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && ya(e, i.multipleOf), i.format !== void 0 && ((_d2 = e.format) != null ? _d2 : e.format = i.format, i.format.includes("int") && (e.isInt = true)), i.mime && $a(e, i.mime);
    for (const r of (_e2 = i.patterns) != null ? _e2 : []) Sa(e, r);
    return e;
  }
  const Km = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, qm = /* @__PURE__ */ new Map([[Ro, ip], [$i, rp]]), Ea = (t) => {
    var _a3;
    return (_a3 = qm.get(t)) != null ? _a3 : t;
  }, Gm = (t, e, s, n) => {
    var _a3;
    const i = s;
    i.type = "string";
    const { minimum: r, maximum: o, format: a, patterns: c, contentEncoding: l, laxFormat: u } = Oe(t);
    if (typeof r == "number" && (i.minLength = r), typeof o == "number" && (i.maxLength = o), a && (i.format = (_a3 = Km[a]) != null ? _a3 : a, i.format === "" && delete i.format, (a === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
      const h = [...c].map(Ea);
      h.length === 1 ? i.pattern = h[0].source : h.length > 1 && (i.allOf = [...h.map((p) => ({ ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? { type: "string" } : {}, pattern: p.source }))]);
    }
  }, Wm = (t, e, s, n) => {
    var _a3;
    const i = s, { minimum: r, maximum: o, multipleOf: a, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = Oe(t);
    i.type = u ? "integer" : "number";
    const h = typeof l == "number" && l >= (r != null ? r : Number.NEGATIVE_INFINITY), p = typeof c == "number" && c <= (o != null ? o : Number.POSITIVE_INFINITY), f = e.target === "draft-04" || e.target === "openapi-3.0";
    if (h ? f ? (i.minimum = l, i.exclusiveMinimum = true) : i.exclusiveMinimum = l : typeof r == "number" && (i.minimum = r), p ? f ? (i.maximum = c, i.exclusiveMaximum = true) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), a) {
      const m = /* @__PURE__ */ new Set();
      for (const b of a) Number.isFinite(b) && b !== 0 ? m.add(Math.abs(b)) : gt(t, e, i, n, "A multipleOf divisor of ".concat(b, " cannot be represented in JSON Schema"));
      const [g, ...k] = m;
      g !== void 0 && (i.multipleOf = g), k.length && (i.allOf = [...(_a3 = i.allOf) != null ? _a3 : [], ...k.map((b) => ({ multipleOf: b }))]);
    }
  }, Hm = (t, e, s, n) => {
    s.type = "boolean";
  }, Vm = (t, e, s, n) => {
    s.not = {};
  }, Ym = (t, e, s, n) => {
  }, Jm = (t, e, s, n) => {
    const i = t._zod.def, r = ri(i.entries);
    if (r.length === 0) {
      s.not = {};
      return;
    }
    r.every((o) => typeof o == "number") && (s.type = "number"), r.every((o) => typeof o == "string") && (s.type = "string"), s.enum = r;
  }, Qm = (t, e, s, n) => {
    const i = t._zod.def;
    if (i.values.length === 0) {
      s.not = {};
      return;
    }
    const r = [];
    for (const o of i.values) if (o === void 0) {
      if (gt(t, e, s, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
    } else if (typeof o == "bigint") {
      if (gt(t, e, s, n, "BigInt literals cannot be represented in JSON Schema")) return;
      r.push(Number(o));
    } else r.push(o);
    if (r.length !== 0) if (r.length === 1) {
      const o = r[0];
      s.type = o === null ? "null" : typeof o, e.target === "draft-04" || e.target === "openapi-3.0" ? s.enum = [o] : s.const = o;
    } else r.every((o) => typeof o == "number") && (s.type = "number"), r.every((o) => typeof o == "string") && (s.type = "string"), r.every((o) => typeof o == "boolean") && (s.type = "boolean"), r.every((o) => o === null) && (s.type = "null"), s.enum = r;
  }, Xm = (t, e, s, n) => {
    gt(t, e, s, n, "Custom types cannot be represented in JSON Schema");
  }, eg = (t, e, s, n) => {
    gt(t, e, s, n, "Transforms cannot be represented in JSON Schema");
  }, tg = (t, e, s, n) => {
    const i = s, r = t._zod.def, { minimum: o, maximum: a } = Oe(t);
    typeof o == "number" && (i.minItems = o), typeof a == "number" && (i.maxItems = a), i.type = "array", i.items = le(r.element, e, { ...n, path: [...n.path, "items"] });
  };
  function fs(t) {
    const e = t._zod.def;
    return e.type === "pipe" && e.in._zod.traits.has("$ZodTransform") ? fs(e.out) : e.type === "catch" ? fs(e.innerType) : t._zod.optin;
  }
  const sg = (t, e, s, n) => {
    var _a3;
    const i = s, r = t._zod.def, o = r.shape;
    if (Object.getOwnPropertySymbols(o).length && gt(t, e, i, n, "Symbol keys cannot be represented in JSON Schema")) return;
    i.type = "object", i.properties = {};
    for (const l in o) Qe(i.properties, l, le(o[l], e, { ...n, path: [...n.path, "properties", l] }));
    const c = [];
    for (const l of Object.keys(o)) {
      const u = r.shape[l];
      (e.io === "input" ? fs(u) === void 0 : u._zod.optout === void 0) && c.push(l);
    }
    c.length > 0 && (i.required = c), ((_a3 = r.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? i.additionalProperties = false : r.catchall ? r.catchall && (i.additionalProperties = le(r.catchall, e, { ...n, path: [...n.path, "additionalProperties"] })) : e.io === "output" && (i.additionalProperties = false);
  }, ng = (t, e, s, n) => {
    const i = t._zod.def, r = i.inclusive === false, o = i.options.map((a, c) => le(a, e, { ...n, path: [...n.path, r ? "oneOf" : "anyOf", c] }));
    r ? s.oneOf = o : s.anyOf = o;
  }, ig = (t, e, s, n) => {
    const i = t._zod.def, r = le(i.left, e, { ...n, path: [...n.path, "allOf", 0] }), o = le(i.right, e, { ...n, path: [...n.path, "allOf", 1] }), a = (l) => "allOf" in l && Object.keys(l).length === 1, c = [...a(r) ? r.allOf : [r], ...a(o) ? o.allOf : [o]];
    s.allOf = c, e.intersections.push(c);
  }, rg = (t, e, s, n) => {
    const i = s, r = t._zod.def;
    i.type = "array";
    const o = e.target === "draft-2020-12" ? "prefixItems" : "items", a = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems", c = r.items.map((g, k) => le(g, e, { ...n, path: [...n.path, o, k] })), l = r.rest ? le(r.rest, e, { ...n, path: [...n.path, a, ...e.target === "openapi-3.0" ? [r.items.length] : []] }) : null;
    let u = r.items.length;
    for (; u > 0; ) {
      const g = r.items[u - 1];
      if (!(e.io === "input" ? fs(g) !== void 0 : g._zod.optout === "optional")) break;
      u--;
    }
    const h = r.items.length, p = !r.rest;
    e.target === "draft-2020-12" ? (i.prefixItems = c, p ? i.items = false : l && (i.items = l), u > 0 && (i.minItems = u), p && (i.maxItems = h)) : e.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), p && (i.maxItems = h)) : (i.items = c, p ? i.additionalItems = false : l && (i.additionalItems = l), u > 0 && (i.minItems = u), p && (i.maxItems = h));
    const { minimum: f, maximum: m } = Oe(t);
    typeof f == "number" && (i.minItems = f), typeof m == "number" && (i.maxItems = m);
  };
  function Ti(t, e, s) {
    var _a3, _b3;
    if (e.$ref) {
      if (s.has(e)) return e;
      s.add(e);
      const m = (_a3 = t.get(e)) == null ? void 0 : _a3.def;
      if (!m) return e;
      const g = Ti(t, m, s);
      return g === m ? e : g;
    }
    for (const m of ["anyOf", "oneOf"]) {
      const g = e[m];
      if (!Array.isArray(g)) continue;
      const k = g.map((b) => Ti(t, b, s));
      k.some((b, v) => b !== g[v]) && (e = { ...e, [m]: k });
    }
    const n = Array.isArray(e.type) ? e.type : [e.type], i = !n.includes("string") && n.some((m) => m === "number" || m === "integer"), r = (_b3 = e.enum) != null ? _b3 : e.const !== void 0 ? [e.const] : void 0;
    if (!i && !(r == null ? void 0 : r.some((m) => typeof m == "number"))) return e;
    const { minimum: o, maximum: a, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: h, id: p, ...f } = e;
    return f.enum ? f.enum = f.enum.map((m) => typeof m == "number" ? String(m) : m) : typeof f.const == "number" && (f.const = String(f.const)), i && (f.type = "string", r || (f.pattern = (n.includes("number") ? wi : pp).source)), f;
  }
  const Ii = /* @__PURE__ */ new WeakMap();
  function og(t) {
    var _a3, _b3, _c2;
    const e = /* @__PURE__ */ new Map();
    for (const n of t.seen.values()) n.def && !e.has(n.schema) && e.set(n.schema, n);
    const s = /* @__PURE__ */ new Map();
    for (const n of (_a3 = Ii.get(t)) != null ? _a3 : []) {
      const i = t.seen.get(n), r = (_c2 = (_b3 = i == null ? void 0 : i.def) != null ? _b3 : i == null ? void 0 : i.schema) == null ? void 0 : _c2.propertyNames;
      if (!r || r === true || s.has(r)) continue;
      const o = Ti(e, r, /* @__PURE__ */ new Set());
      o !== r && s.set(r, o);
    }
    if (s.size) for (const n of t.seen.values()) for (const i of [n.schema, n.def]) {
      const r = i && s.get(i.propertyNames);
      r && (i.propertyNames = r);
    }
  }
  const ag = (t, e, s, n) => {
    const i = s, r = t._zod.def;
    i.type = "object";
    const o = r.keyType, a = Oe(o).patterns;
    if (r.mode === "loose" && a && a.size > 0) {
      const u = le(r.valueType, e, { ...n, path: [...n.path, "patternProperties", "*"] });
      i.patternProperties = {};
      for (const h of a) Qe(i.patternProperties, Ea(h).source, u);
    } else {
      if (e.target === "draft-07" || e.target === "draft-2020-12") {
        i.propertyNames = le(r.keyType, e, { ...n, path: [...n.path, "propertyNames"] });
        let u = Ii.get(e);
        u || (u = [], Ii.set(e, u), e.deferred.push(() => og(e))), u.push(t);
      }
      i.additionalProperties = le(r.valueType, e, { ...n, path: [...n.path, "additionalProperties"] });
    }
    const c = o._zod.values, l = e.io === "input" && fs(r.valueType) !== void 0;
    if (c && !r.partial && !l) {
      const u = [...c].filter((h) => typeof h == "string" || typeof h == "number");
      u.length > 0 && (i.required = u.map(String));
    }
  }, cg = (t, e, s, n) => {
    const i = t._zod.def, r = le(i.innerType, e, n), o = e.seen.get(t);
    e.target === "openapi-3.0" ? (o.ref = i.innerType, s.nullable = true) : s.anyOf = [r, { type: "null" }];
  }, lg = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    r.ref = i.innerType;
  }, Mi = /* @__PURE__ */ Symbol();
  function Aa(t, e, s, n, i) {
    let r = false;
    const o = JSON.stringify(t, (a, c) => typeof c != "bigint" ? c : (r = true, null));
    return r ? (gt(e, s, n, i, "BigInt defaults cannot be represented in JSON Schema"), Mi) : JSON.parse(o);
  }
  const ug = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    r.ref = i.innerType;
    const o = Aa(i.defaultValue, t, e, s, n);
    o !== Mi && (s.default = o);
  }, dg = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    if (r.ref = i.innerType, e.io !== "input") return;
    const o = Aa(i.defaultValue, t, e, s, n);
    o !== Mi && (s._prefault = o);
  }, hg = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    r.ref = i.innerType;
    let o;
    try {
      o = i.catchValue(void 0);
    } catch (e2) {
      gt(t, e, s, n, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    s.default = o;
  }, pg = (t, e, s, n) => {
    const i = t._zod.def, r = i.in._zod.traits.has("$ZodTransform"), o = e.io === "input" ? r ? i.out : i.in : i.out;
    le(o, e, n);
    const a = e.seen.get(t);
    a.ref = o;
  }, fg = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    r.ref = i.innerType, s.readOnly = true;
  }, Ta = (t, e, s, n) => {
    const i = t._zod.def;
    le(i.innerType, e, n);
    const r = e.seen.get(t);
    r.ref = i.innerType;
  }, mg = (t, e, s, n) => {
    const i = t._zod.innerType;
    le(i, e, n);
    const r = e.seen.get(t);
    r.ref = i;
  }, Ia = new WeakSet([Object.prototype, Error.prototype]);
  function ln(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, enumerable: false, get() {
      const n = s(this);
      return Object.defineProperty(this, e, { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, e, { value: n, configurable: true, writable: true });
    } });
  }
  const Ne = M("ZodError", (t, e) => {
    _h.init(t, e), t.name = "ZodError";
    const s = Object.getPrototypeOf(t);
    Ia.has(s) || (Ia.add(s), ln(s, "format", (n) => (i) => Eh(n, i)), ln(s, "flatten", (n) => (i) => xh(n, i)), ln(s, "addIssue", (n) => (i) => {
      n.issues.push(i), n.message = JSON.stringify(n.issues, oi, 2);
    }), ln(s, "addIssues", (n) => (i) => {
      n.issues.push(...i), n.message = JSON.stringify(n.issues, oi, 2);
    }), Object.defineProperty(s, "isEmpty", { configurable: true, enumerable: false, get() {
      return this.issues.length === 0;
    } }));
  }, void 0, { Parent: Error }), gg = mi(Ne), kg = gi(Ne), bg = ki(Ne), vg = bi(Ne), wg = Nh(Ne), yg = Ph(Ne), Sg = Rh(Ne), $g = Dh(Ne), zg = Lh(Ne), _g = Ch(Ne), jg = Zh(Ne), xg = Uh(Ne);
  function Eg() {
    Me.localeError || Ge(Gf());
  }
  function ms() {
    Me.memoizer || Ge({ memoizer: Ff() });
  }
  const oe = M("ZodType", (t, e) => (Eg(), re.init(t, e), t.def = e, t.type = e.type, t), { check(...t) {
    var _a3;
    const e = this.def;
    return this.clone(Ee(e, { checks: [...(_a3 = e.checks) != null ? _a3 : [], ...t.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)] }), { parent: true });
  }, with(...t) {
    return this.check(...t);
  }, clone(t, e) {
    return dt(this, t, e);
  }, brand() {
    return this;
  }, register(t, e) {
    return t.add(this, e), this;
  }, refine(t, e) {
    return this.check(zk(t, e));
  }, superRefine(t, e) {
    return this.check(_k(t, e));
  }, overwrite(t) {
    return this.check(Ft(t));
  }, optional() {
    return Ua(this);
  }, exactOptional() {
    return lk(this);
  }, nullable() {
    return Fa(this);
  }, nullish() {
    return Ua(Fa(this));
  }, nonoptional(t) {
    return mk(this, t);
  }, array() {
    return N(this);
  }, or(t) {
    return et([this, t]);
  }, and(t) {
    return La(this, t);
  }, transform(t) {
    return Ga(this, Za(t));
  }, default(t) {
    return hk(this, t);
  }, prefault(t) {
    return fk(this, t);
  }, catch(t) {
    return kk(this, t);
  }, pipe(t) {
    return Ga(this, t);
  }, readonly() {
    return wk(this);
  }, describe(t) {
    const e = this.clone();
    return hs.add(e, { description: t }), e;
  }, meta(...t) {
    if (t.length === 0) return hs.get(this);
    const e = this.clone();
    return hs.add(e, t[0]), e;
  }, isOptional() {
    return this.safeParse(void 0).success;
  }, isNullable() {
    return this.safeParse(null).success;
  }, apply(t, ...e) {
    return e.length === 0 ? t(this) : t(this, ...e);
  }, get "~standard"() {
    return bo(this, "~standard", { ...To(this), jsonSchema: { input: cn(this, "input"), output: cn(this, "output") } });
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  }, parse: function t(e, s) {
    return gg(this, e, s, { callee: t });
  }, parseAsync: async function t(e, s) {
    return await kg(this, e, s, { callee: t });
  }, safeParse(t, e) {
    return bg(this, t, e);
  }, async safeParseAsync(t, e) {
    return vg(this, t, e);
  }, get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  }, set spa(t) {
    ft(this, "spa", t);
  }, validate(t, e) {
    return Ih(this, t, e);
  }, validateAsync(t, e) {
    return Oh(this, t, e);
  }, encode: function t(e, s) {
    return wg(this, e, s, { callee: t });
  }, decode: function t(e, s) {
    return yg(this, e, s, { callee: t });
  }, encodeAsync: async function t(e, s) {
    return await Sg(this, e, s, { callee: t });
  }, decodeAsync: async function t(e, s) {
    return await $g(this, e, s, { callee: t });
  }, safeEncode(t, e) {
    return zg(this, t, e);
  }, safeDecode(t, e) {
    return _g(this, t, e);
  }, async safeEncodeAsync(t, e) {
    return jg(this, t, e);
  }, async safeDecodeAsync(t, e) {
    return xg(this, t, e);
  }, toJSONSchema(t) {
    return Bm(this, {})(t);
  }, get description() {
    var _a3;
    return (_a3 = hs.get(this)) == null ? void 0 : _a3.description;
  }, get _def() {
    return this._zod.def;
  } }), Ma = M("_ZodString", (t, e) => {
    Si.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Gm(t, s, n);
  }, vo({ format: (t) => {
    var _a3;
    return (_a3 = Oe(t).format) != null ? _a3 : null;
  }, minLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).minimum) != null ? _a3 : null;
  }, maxLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).maximum) != null ? _a3 : null;
  } }, { regex(...t) {
    return this.check(jm(...t));
  }, includes(...t) {
    return this.check(Am(...t));
  }, startsWith(...t) {
    return this.check(Tm(...t));
  }, endsWith(...t) {
    return this.check(Im(...t));
  }, min(...t) {
    return this.check(an(...t));
  }, max(...t) {
    return this.check(ua(...t));
  }, length(...t) {
    return this.check(da(...t));
  }, nonempty(...t) {
    return this.check(an(1, ...t));
  }, lowercase(t) {
    return this.check(xm(t));
  }, uppercase(t) {
    return this.check(Em(t));
  }, trim() {
    return this.check(Om());
  }, normalize(...t) {
    return this.check(Mm(...t));
  }, toLowerCase() {
    return this.check(Nm());
  }, toUpperCase() {
    return this.check(Pm());
  }, slugify() {
    return this.check(Rm());
  } })), Ag = M("ZodString", (t, e) => {
    Si.init(t, e), Ma.init(t, e);
  }, { email(t) {
    return this.check(Yf(Ng, t));
  }, url(t) {
    return this.check(oa(Oa, t));
  }, jwt(t) {
    return this.check(gm(Jg, t));
  }, emoji(t) {
    return this.check(sm(Dg, t));
  }, guid(t) {
    return this.check(Jf(Pg, t));
  }, uuid(t) {
    return this.check(Qf(un, t));
  }, uuidv4(t) {
    return this.check(Xf(un, t));
  }, uuidv6(t) {
    return this.check(em(un, t));
  }, uuidv7(t) {
    return this.check(tm(un, t));
  }, nanoid(t) {
    return this.check(nm(Lg, t));
  }, cuid(t) {
    return this.check(im(Cg, t));
  }, cuid2(t) {
    return this.check(rm(Zg, t));
  }, ulid(t) {
    return this.check(om(Ug, t));
  }, base64(t) {
    return this.check(pm(Hg, t));
  }, base64url(t) {
    return this.check(fm(Vg, t));
  }, xid(t) {
    return this.check(am(Bg, t));
  }, ksuid(t) {
    return this.check(cm(Fg, t));
  }, ipv4(t) {
    return this.check(lm(Kg, t));
  }, ipv6(t) {
    return this.check(um(qg, t));
  }, cidrv4(t) {
    return this.check(dm(Gg, t));
  }, cidrv6(t) {
    return this.check(hm(Wg, t));
  }, e164(t) {
    return this.check(mm(Yg, t));
  }, datetime(t) {
    return this.check(km(Tg, t));
  }, date(t) {
    return this.check(bm(Ig, t));
  }, time(t) {
    return this.check(vm(Mg, t));
  }, duration(t) {
    return this.check(wm(Og, t));
  } });
  function E(t) {
    return Vf(Ag, t);
  }
  const ue = M("ZodStringFormat", (t, e) => {
    ae.init(t, e), Ma.init(t, e);
  }), Tg = M("ZodISODateTime", (t, e) => {
    Hp.init(t, e), ue.init(t, e);
  }), Ig = M("ZodISODate", (t, e) => {
    Vp.init(t, e), ue.init(t, e);
  }), Mg = M("ZodISOTime", (t, e) => {
    Yp.init(t, e), ue.init(t, e);
  }), Og = M("ZodISODuration", (t, e) => {
    Jp.init(t, e), ue.init(t, e);
  }), Ng = M("ZodEmail", (t, e) => {
    Np.init(t, e), ue.init(t, e);
  }), Pg = M("ZodGUID", (t, e) => {
    Mp.init(t, e), ue.init(t, e);
  }), un = M("ZodUUID", (t, e) => {
    Op.init(t, e), ue.init(t, e);
  }), Oa = M("ZodURL", (t, e) => {
    Zp.init(t, e), ue.init(t, e);
  });
  function Rg(t) {
    return oa(Oa, t);
  }
  const Dg = M("ZodEmoji", (t, e) => {
    Up.init(t, e), ue.init(t, e);
  }), Lg = M("ZodNanoID", (t, e) => {
    Bp.init(t, e), ue.init(t, e);
  }), Cg = M("ZodCUID", (t, e) => {
    Fp.init(t, e), ue.init(t, e);
  }), Zg = M("ZodCUID2", (t, e) => {
    Kp.init(t, e), ue.init(t, e);
  }), Ug = M("ZodULID", (t, e) => {
    qp.init(t, e), ue.init(t, e);
  }), Bg = M("ZodXID", (t, e) => {
    Gp.init(t, e), ue.init(t, e);
  }), Fg = M("ZodKSUID", (t, e) => {
    Wp.init(t, e), ue.init(t, e);
  }), Kg = M("ZodIPv4", (t, e) => {
    Qp.init(t, e), ue.init(t, e);
  }), qg = M("ZodIPv6", (t, e) => {
    ef.init(t, e), ue.init(t, e);
  }), Gg = M("ZodCIDRv4", (t, e) => {
    tf.init(t, e), ue.init(t, e);
  }), Wg = M("ZodCIDRv6", (t, e) => {
    nf.init(t, e), ue.init(t, e);
  }), Hg = M("ZodBase64", (t, e) => {
    rf.init(t, e), ue.init(t, e);
  }), Vg = M("ZodBase64URL", (t, e) => {
    af.init(t, e), ue.init(t, e);
  }), Yg = M("ZodE164", (t, e) => {
    cf.init(t, e), ue.init(t, e);
  }), Jg = M("ZodJWT", (t, e) => {
    uf.init(t, e), ue.init(t, e);
  }), Na = M("ZodNumber", (t, e) => {
    Do.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Wm(t, s, n, i), t.isFinite = true;
  }, vo({ minValue: (t) => {
    const { minimum: e, exclusiveMinimum: s } = Oe(t);
    return Math.max(e != null ? e : Number.NEGATIVE_INFINITY, s != null ? s : Number.NEGATIVE_INFINITY);
  }, maxValue: (t) => {
    const { maximum: e, exclusiveMaximum: s } = Oe(t);
    return Math.min(e != null ? e : Number.POSITIVE_INFINITY, s != null ? s : Number.POSITIVE_INFINITY);
  }, isInt: (t) => {
    const { isInt: e, multipleOf: s } = Oe(t);
    return !!e || !!(s == null ? void 0 : s.some(Number.isSafeInteger));
  }, format: (t) => {
    var _a3;
    return (_a3 = Oe(t).format) != null ? _a3 : null;
  } }, { gt(t, e) {
    return this.check(ca(t, e));
  }, gte(t, e) {
    return this.check(Ei(t, e));
  }, min(t, e) {
    return this.check(Ei(t, e));
  }, lt(t, e) {
    return this.check(aa(t, e));
  }, lte(t, e) {
    return this.check(xi(t, e));
  }, max(t, e) {
    return this.check(xi(t, e));
  }, int(t) {
    return this.check(Pa(t));
  }, safe(t) {
    return this.check(Pa(t));
  }, positive(t) {
    return this.check(ca(0, t));
  }, nonnegative(t) {
    return this.check(Ei(0, t));
  }, negative(t) {
    return this.check(aa(0, t));
  }, nonpositive(t) {
    return this.check(xi(0, t));
  }, multipleOf(t, e) {
    return this.check(la(t, e));
  }, step(t, e) {
    return this.check(la(t, e));
  }, finite() {
    return this;
  } }));
  function L(t) {
    return ym(Na, t);
  }
  const Qg = M("ZodNumberFormat", (t, e) => {
    df.init(t, e), Na.init(t, e);
  });
  function Pa(t) {
    return Sm(Qg, t);
  }
  const Xg = M("ZodBoolean", (t, e) => {
    hf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Hm(t, s, n);
  });
  function J(t) {
    return $m(Xg, t);
  }
  const ek = M("ZodUnknown", (t, e) => {
    pf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Ym();
  });
  function Et() {
    return zm(ek);
  }
  const tk = M("ZodNever", (t, e) => {
    ff.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Vm(t, s, n);
  });
  function Ra(t) {
    return _m(tk, t);
  }
  const sk = M("ZodArray", (t, e) => {
    ms(), kf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => tg(t, s, n, i), t.element = e.element;
  }, { min(t, e) {
    return this.check(an(t, e));
  }, nonempty(t) {
    return this.check(an(1, t));
  }, max(t, e) {
    return this.check(ua(t, e));
  }, length(t, e) {
    return this.check(da(t, e));
  }, unwrap() {
    return this.element;
  } });
  function N(t, e) {
    return Dm(sk, t, e);
  }
  const Oi = M("ZodObject", (t, e) => {
    ms(), wf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => sg(t, s, n, i), bh(t, "shape", (s) => s._zod.def.shape, false);
  }, { keyof() {
    return Y(Object.keys(this._zod.def.shape));
  }, catchall(t) {
    return this.clone(Ee(this._zod.def, { catchall: t }));
  }, passthrough() {
    return this.clone(Ee(this._zod.def, { catchall: Et() }));
  }, loose() {
    return this.clone(Ee(this._zod.def, { catchall: Et() }));
  }, strict() {
    return this.clone(Ee(this._zod.def, { catchall: Ra() }));
  }, strip() {
    return this.clone(Ee(this._zod.def, { catchall: void 0 }));
  }, extend(t) {
    return ah(this, t);
  }, safeExtend(t) {
    return ch(this, t);
  }, merge(t) {
    return lh(this, t);
  }, pick(t) {
    return rh(this, t);
  }, omit(t) {
    return oh(this, t);
  }, partial(...t) {
    return go(Ri, this, t[0]);
  }, exactPartial(...t) {
    return go(Ba, this, t[0], "exactPartial");
  }, required(...t) {
    return uh(Ka, this, t[0]);
  } });
  function F(t, e) {
    const s = { type: "object", shape: t != null ? t : {}, ...q(e) };
    return new Oi(s);
  }
  function U(t, e) {
    return new Oi({ type: "object", shape: t, catchall: Ra(), ...q(e) });
  }
  function nk(t, e) {
    return new Oi({ type: "object", shape: t, catchall: Et(), ...q(e) });
  }
  const Da = M("ZodUnion", (t, e) => {
    Bo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => ng(t, s, n, i), t.options = e.options;
  });
  function et(t, e) {
    return new Da({ type: "union", options: t, ...q(e) });
  }
  const ik = M("ZodDiscriminatedUnion", (t, e) => {
    Da.init(t, e), Sf.init(t, e);
  });
  function Ni(t, e, s) {
    return new ik({ type: "union", options: e, discriminator: t, ...q(s) });
  }
  const rk = M("ZodIntersection", (t, e) => {
    $f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => ig(t, s, n, i);
  });
  function La(t, e) {
    return new rk({ type: "intersection", left: t, right: e });
  }
  const ok = M("ZodTuple", (t, e) => {
    ms(), zf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => rg(t, s, n, i);
  }, { rest(t) {
    return this.clone({ ...this._zod.def, rest: t });
  }, partial() {
    var _a3;
    const t = this._zod.def;
    if ((_a3 = t.checks) == null ? void 0 : _a3.length) throw new Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({ ...t, items: t.items.map((e) => new Ri({ type: "optional", innerType: e })) });
  } });
  function At(t, e, s) {
    const n = e instanceof re, i = n ? s : e, r = n ? e : null;
    return new ok({ type: "tuple", items: t, rest: r, ...q(i) });
  }
  const Ca = M("ZodRecord", (t, e) => {
    ms(), _f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => ag(t, s, n, i), t.keyType = e.keyType, t.valueType = e.valueType;
  });
  function Q(t, e, s) {
    return !e || !e._zod ? new Ca({ type: "record", keyType: E(), valueType: t, ...q(e) }) : new Ca({ type: "record", keyType: t, valueType: e, ...q(s) });
  }
  const Pi = M("ZodEnum", (t, e) => {
    jf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (n, i, r) => Jm(t, n, i), t.enum = e.entries, t.options = [...t._zod.values];
    const s = new Set(Object.keys(e.entries));
    t.extract = (n, i) => {
      const r = {};
      for (const o of n) if (s.has(o)) r[o] = e.entries[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Pi({ ...e, checks: [], ...q(i), entries: r });
    }, t.exclude = (n, i) => {
      const r = { ...e.entries };
      for (const o of n) if (s.has(o)) delete r[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Pi({ ...e, checks: [], ...q(i), entries: r });
    };
  });
  function Y(t, e) {
    const s = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
    return new Pi({ type: "enum", entries: s, ...q(e) });
  }
  const ak = M("ZodLiteral", (t, e) => {
    xf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Qm(t, s, n, i), t.values = new Set(e.values), Object.defineProperty(t, "value", { get() {
      if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    } });
  });
  function se(t, e) {
    return new ak({ type: "literal", values: Array.isArray(t) ? t : [t], ...q(e) });
  }
  const ck = M("ZodTransform", (t, e) => {
    ms(), Ef.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => eg(t, s, n, i), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new So(t.constructor.name);
      s.addIssue = (r) => {
        var _a3, _b3;
        if (typeof r == "string") s.issues.push(ls(r, s.value, e));
        else {
          const o = r;
          o.fatal && (o.continue = false), (_a3 = o.code) != null ? _a3 : o.code = "custom", "input" in o || (o.input = s.value), (_b3 = o.inst) != null ? _b3 : o.inst = t, s.issues.push(ls(o));
        }
      };
      const i = e.transform(s.value, s);
      return i instanceof Promise ? i.then((r) => (s.value = r, s)) : (s.value = i, s);
    };
  });
  function Za(t) {
    return new ck({ type: "transform", transform: t });
  }
  const Ri = M("ZodOptional", (t, e) => {
    Ho.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Ta(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function Ua(t) {
    return new Ri({ type: "optional", innerType: t });
  }
  const Ba = M("ZodExactOptional", (t, e) => {
    Af.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Ta(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function lk(t) {
    return new Ba({ type: "optional", innerType: t });
  }
  const uk = M("ZodNullable", (t, e) => {
    Tf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => cg(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function Fa(t) {
    return new uk({ type: "nullable", innerType: t });
  }
  const dk = M("ZodDefault", (t, e) => {
    If.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => ug(t, s, n, i), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
  });
  function hk(t, e) {
    return new dk({ type: "default", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : ho(e);
    } });
  }
  const pk = M("ZodPrefault", (t, e) => {
    Mf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => dg(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function fk(t, e) {
    return new pk({ type: "prefault", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : ho(e);
    } });
  }
  const Ka = M("ZodNonOptional", (t, e) => {
    Of.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => lg(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function mk(t, e) {
    return new Ka({ type: "nonoptional", innerType: t, ...q(e) });
  }
  const gk = M("ZodCatch", (t, e) => {
    Nf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => hg(t, s, n, i), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
  });
  function kk(t, e) {
    return new gk({ type: "catch", innerType: t, catchValue: typeof e == "function" ? e : wh(e) });
  }
  const qa = M("ZodPipe", (t, e) => {
    Qo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => pg(t, s, n, i), t.in = e.in, t.out = e.out;
  });
  function Ga(t, e) {
    return new qa({ type: "pipe", in: t, out: e });
  }
  const bk = M("ZodPreprocess", (t, e) => {
    qa.init(t, e), Pf.init(t, e);
  }), vk = M("ZodReadonly", (t, e) => {
    Rf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => fg(t, s, n, i), t.unwrap = () => t._zod.def.innerType;
  });
  function wk(t) {
    return new vk({ type: "readonly", innerType: t });
  }
  const yk = M("ZodLazy", (t, e) => {
    Df.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => mg(t, s, n, i), t.unwrap = () => t._zod.def.getter();
  });
  function Sk(t) {
    return new yk({ type: "lazy", getter: t });
  }
  const $k = M("ZodCustom", (t, e) => {
    Lf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, i) => Xm(t, s, n, i);
  });
  function zk(t, e = {}) {
    return Lm($k, t, e);
  }
  function _k(t, e) {
    return Cm(t, e);
  }
  function Wa(t, e) {
    return new bk({ type: "pipe", in: Za(t), out: e });
  }
  const Di = { custom: "custom" }, jk = { hr: { Language: "Jezik", Start: "Započni", Next: "Dalje", Back: "Natrag", Check: "Provjeri", "Correct!": "Točno!", "Not quite": "Nije baš", Review: "Ponavljanje", Menu: "Izbornik", "Main Menu": "Glavni izbornik", Score: "Bodovi", Quit: "Izlaz" }, de: { Language: "Sprache", Start: "Starten", Next: "Weiter", Back: "Zurück", Check: "Prüfen", "Correct!": "Richtig!", "Not quite": "Nicht ganz", Review: "Wiederholen", Menu: "Menü", "Main Menu": "Hauptmenü", Score: "Punkte", Quit: "Beenden" } }, Ha = [["en", "English", "English", "latin"], ["hr", "Croatian", "Hrvatski", "latin"], ["ko", "Korean", "한국어", "hangul"], ["ja", "Japanese", "日本語", "kana"], ["ar", "Arabic", "العربية", "arabic", true], ["bg", "Bulgarian", "Български", "cyrillic"], ["cs", "Czech", "Čeština", "latin"], ["da", "Danish", "Dansk", "latin"], ["de", "German", "Deutsch", "latin"], ["el", "Greek", "Ελληνικά", "greek"], ["es", "Spanish", "Español", "latin"], ["et", "Estonian", "Eesti", "latin"], ["fi", "Finnish", "Suomi", "latin"], ["fr", "French", "Français", "latin"], ["hi", "Hindi", "हिन्दी", "devanagari"], ["hu", "Hungarian", "Magyar", "latin"], ["id", "Indonesian", "Bahasa Indonesia", "latin"], ["it", "Italian", "Italiano", "latin"], ["lt", "Lithuanian", "Lietuvių", "latin"], ["lv", "Latvian", "Latviešu", "latin"], ["nl", "Dutch", "Nederlands", "latin"], ["pl", "Polish", "Polski", "latin"], ["pt", "Portuguese", "Português", "latin"], ["ro", "Romanian", "Română", "latin"], ["ru", "Russian", "Русский", "cyrillic"], ["sk", "Slovak", "Slovenčina", "latin"], ["sl", "Slovenian", "Slovenščina", "latin"], ["sv", "Swedish", "Svenska", "latin"], ["tr", "Turkish", "Türkçe", "latin"], ["uk", "Ukrainian", "Українська", "cyrillic"], ["vi", "Vietnamese", "Tiếng Việt", "latin"], ["sr", "Serbian", "Српски", "cyrillic"], ["bs", "Bosnian", "Bosanski", "latin"], ["no", "Norwegian", "Norsk", "latin"], ["he", "Hebrew", "עברית", "hebrew", true], ["fa", "Persian", "فارسی", "arabic", true], ["zh", "Chinese", "中文", "han"]].map(([t, e, s, n, i]) => {
    const r = { code: t, name: e, native: s, script: n };
    i && (r.rtl = true);
    const o = jk[t];
    return o && (r.ui = { ...o }), r;
  }), Va = /* @__PURE__ */ new Map();
  function xk() {
    Va.clear();
    for (const t of Ha) Va.set(t.code, t);
  }
  xk(), Ha.map((t) => t.code);
  const tt = E().regex(/^[a-z]{2,3}(-[a-z0-9]{2,8})?$/, "a language code such as en, hr, de or pt-br"), Ek = ["comfy", "pixel-studio-draw", "hand", "flow"], Ak = ["builtin", "pixel-studio"], Tk = ["comfy", "chiptune", "flow"], Ik = ["auto", "gemini", "vibetts", "comfy"], Mk = ["nes", "gb", "genesis", "snes", "pce", "ps1", "dreamcast", "gm"], Ok = ["none", "ordered", "floyd"], Nk = F({ width: L().int().min(16).max(512).optional(), height: L().int().min(16).max(512).optional(), dither: Y(Ok).optional(), outline: J().optional() });
  function Pk(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) return t;
    const e = (n) => typeof n == "string" && (n.startsWith("gemini:") || n.startsWith("windows:")), s = {};
    for (const [n, i] of Object.entries(t)) {
      if (typeof i == "string") {
        e(i) && (s[n] = { en: i });
        continue;
      }
      if (!i || typeof i != "object" || Array.isArray(i)) continue;
      const r = Object.fromEntries(Object.entries(i).filter(([, o]) => e(o)));
      Object.keys(r).length > 0 && (s[n] = r);
    }
    return s;
  }
  function Rk(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) return t;
    const e = { ...t }, s = e.styles && typeof e.styles == "object" && !Array.isArray(e.styles) ? { ...e.styles } : {}, n = e.flowStyles;
    if (n && typeof n == "object" && !Array.isArray(n)) for (const [i, r] of Object.entries(n)) {
      const o = typeof s[i] == "string" ? s[i].trim() : "";
      typeof r == "string" && r.trim() && !o && (s[i] = r);
    }
    return e.styles = s, delete e.flowStyles, delete e.englishEngine, e.provider === "flow" && (e.provider = "gemini"), e;
  }
  const Ya = "omnivoice", dn = F({ slug: E(), primaryLang: tt, editions: N(tt).default([]), theme: E().nullable().default(null), models: Q(E(), E()).default({}), art: F({ enabled: J().default(true), style: Y(["illustrated", "pixel"]).default("illustrated"), generator: E().default("qwen-image-2.1"), editor: E().default("qwen-image-2.1-edit"), palette: E().optional(), review: J().default(true), stylePrompt: E().optional(), bgRemoval: Y(["birefnet", "qwen-edit", "key"]).default("birefnet"), provider: Y(Ek).optional(), flowModel: E().optional(), flowProject: E().optional(), pixelProvider: Y(Ak).optional(), pixel: Nk.optional() }).default({ enabled: true, style: "illustrated", generator: "qwen-image-2.1", editor: "qwen-image-2.1-edit", review: true, bgRemoval: "birefnet" }), music: F({ enabled: J().default(true), engine: E().default("ace-step-v1-instrumental"), tracks: L().int().nonnegative().default(3), provider: Y(Tk).optional(), flowCredits: J().default(false), chip: Y(Mk).optional() }).default({ enabled: true, engine: "ace-step-v1-instrumental", tracks: 3, flowCredits: false }), voice: Wa(Rk, F({ enabled: J().optional(), langs: N(tt).default([]), provider: Y(Ik).default("auto"), narration: J().optional(), passages: J().default(false), listening: J().default(true), listeningPerUnit: L().int().min(0).max(12).default(3), localVoices: Q(E(), E()).default({}), engine: E().default(Ya), engines: Q(E(), E()).default({}), styles: Q(E(), E()).default({}), refTexts: Q(E(), E()).default({}), voices: Wa(Pk, Q(E(), Q(tt, E()))).default({}) })).default({ langs: [], provider: "auto", passages: false, listening: true, listeningPerUnit: 3, localVoices: {}, engine: Ya, engines: {}, styles: {}, refTexts: {}, voices: {} }), sound: F({ ambienceEngine: E().default("ace-step-v1-instrumental"), sfxEngine: E().optional() }).default({ ambienceEngine: "ace-step-v1-instrumental" }) });
  F({ art: dn.shape.art, music: dn.shape.music, voice: dn.shape.voice, sound: dn.shape.sound });
  const Dk = /* @__PURE__ */ new Set(["music", "sfx", "ambience"]), Lk = "voice";
  [...Dk];
  const Ck = Y(["background", "sheet", "sprite", "cover", "cg", "illustration", "tileset", "music", "sfx", "ambience", "voiceRef", "voice"]), Zk = F({ texture: E().optional(), lead: E().optional(), pad: E().optional(), bass: E().optional(), bpm: L().optional(), key: E().optional(), scale: E().optional(), form: E().optional() }), Uk = F({ n: L().int().positive(), file: E(), createdAt: E(), seed: L().nullable(), engine: E(), prompt: E(), loopStartSec: L().nullable().optional(), loopEndSec: L().nullable().optional(), remote: F({ provider: Y(["flow", "flow-music"]), id: E(), project: E().optional() }).optional(), fingerprint: Zk.optional(), songFile: E().optional(), nativeFile: E().optional(), warnings: N(E()).optional(), custom: J().optional() }), Bk = F({ id: E(), kind: Ck, prompt: E(), negative: E().optional(), engine: E(), seed: L().nullable(), size: F({ w: L().int().positive(), h: L().int().positive() }).nullable(), refs: N(E()).optional(), versions: N(Uk), selected: L().int().positive().nullable(), source: Y(["generated", "custom"]), customFile: E().optional(), locked: J(), promptByHand: J().optional(), alt: E().optional(), style: Y(["illustrated", "pixel"]).optional(), provider: Y(["comfy", "flow"]).optional(), fit: F({ w: L().int().positive(), h: L().int().positive() }).optional(), voice: F({ lang: tt, key: E(), role: Y(["listening", "narration", "passage"]), text: E(), hash: E(), provider: E().optional(), imported: J().optional() }).optional(), placeholder: F({ file: E(), reason: E() }).optional(), review: F({ status: Y(["pending", "approved", "rejected"]), note: E().optional(), version: L().int().positive().optional(), rounds: L().int().nonnegative().optional() }).optional() });
  F({ assets: N(Bk) });
  const Fk = 1, P = E().regex(/^[A-Za-z0-9][A-Za-z0-9_-]*$/, "an id: letters, digits, - and _"), C = E().regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/, "a text key: letters, digits, . : - and _"), Kk = ["remember", "understand", "apply", "analyze", "evaluate", "create"], Li = ["A1", "A2", "B1", "B2", "C1", "C2"], qk = ["ignore", "warn", "strict"];
  U({ schema: se(1).default(1), lang: tt, strings: Q(C, E()), accepted: Q(C, N(E().min(1)).min(1)).optional() });
  const ye = { id: P, objective: P, prompt: C, explanation: C, didYouKnow: C.optional(), hint: C.optional(), asset: P.optional(), difficulty: L().int().min(1).max(5).default(3), tags: N(E()).default([]), extensions: Q(E(), Et()).optional() }, Ci = U({ id: P, text: C, why: C.optional() }), Ja = U({ ...ye, kind: se("mcq"), options: N(Ci).min(2).max(8), answer: P, shuffle: J().default(true) }), Qa = U({ ...ye, kind: se("true-false"), answer: J(), why: C.optional() }), Xa = U({ ...ye, kind: se("multi-select"), options: N(Ci).min(2).max(10), answers: N(P).min(1), shuffle: J().default(true) }), ec = U({ ...ye, kind: se("cloze"), text: C, gaps: N(U({ id: P, answer: C, bank: N(C).optional() })).min(1), strictDiacritics: J().optional() }), tc = U({ ...ye, kind: se("conjugation"), verb: C, tense: P, forms: N(U({ person: P, label: C, answer: C, given: J().default(false) })).min(2).max(7), ask: L().int().min(1).optional(), strictDiacritics: J().optional() }), sc = U({ ...ye, kind: se("typed"), answer: C, strictDiacritics: J().optional() }), nc = U({ ...ye, kind: se("match-pairs"), pairs: N(U({ id: P, left: C, right: C })).min(2).max(8) }), ic = U({ ...ye, kind: se("order"), items: N(U({ id: P, text: C, when: C.optional() })).min(2).max(10), timeline: J().default(false) }), rc = U({ ...ye, kind: se("sort-groups"), groups: N(U({ id: P, title: C })).min(2).max(5), items: N(U({ id: P, text: C, group: P, why: C.optional() })).min(2).max(12) }), Gk = Ni("type", [U({ type: se("circle"), cx: L(), cy: L(), r: L().positive() }), U({ type: se("rect"), x: L(), y: L(), w: L().positive(), h: L().positive() }), U({ type: se("poly"), points: N(At([L(), L()])).min(3) })]), oc = U({ ...ye, kind: se("hotspot"), asset: P, width: L().positive(), height: L().positive(), regions: N(U({ id: P, label: C, shape: Gk, why: C.optional() })).min(2), answer: P }), ac = U({ ...ye, kind: se("listening"), asset: P, transcript: C, mode: Y(["choose", "type"]), options: N(Ci).min(2).max(8).optional(), answer: E().min(1), shuffle: J().default(true), strictDiacritics: J().optional() }).superRefine((t, e) => {
    t.mode === "choose" && !t.options && e.addIssue({ code: "custom", path: ["options"], message: "a choose listening item needs options" }), t.mode === "type" && t.options && e.addIssue({ code: "custom", path: ["options"], message: "a type listening item has no options" });
  }), cc = U({ ...ye, kind: se("flashcard"), back: C, backAsset: P.optional() }), lc = U({ ...ye, kind: se("crossword"), words: N(U({ id: P, answer: C, clue: C })).min(3).max(20), seed: L().int(), maxSize: L().int().min(5).max(30).default(15) }), uc = U({ ...ye, kind: se("word-search"), words: N(U({ id: P, answer: C })).min(2).max(20), seed: L().int(), size: L().int().min(5).max(30).optional(), directions: Y(["forward", "diagonal", "all"]).default("diagonal") });
  Ni("kind", [Ja, Qa, Xa, ec, sc, nc, ic, rc, oc, ac, cc, lc, uc, tc]);
  const Wk = nk({ ...ye, kind: E().min(1) }), Hk = U({ id: P, title: C, summary: C.optional(), requires: N(P).default([]) }), Vk = U({ id: P, unit: P, bloom: Y(Kk), text: C, facts: N(P).default([]) }), Yk = U({ id: P, kind: Y(["image", "audio"]), file: E().min(1), alt: C }), Jk = U({ id: P, on: E().min(1), asset: P, loop: J().default(false), volume: L().min(0).max(1).default(1) }), Qk = U({ id: P, title: C, body: C, citations: N(P).default([]), asset: P.optional(), related: N(P).default([]), unit: P.optional() }), Xk = U({ id: P, claim: C.optional(), source: E().min(1), url: Rg().optional() });
  U({ schema: se(Fk), id: P, slug: E().regex(/^[a-z0-9][a-z0-9-]*$/, "a slug: lower-case letters, digits and -"), sourceLang: tt, languages: N(tt).min(1), targetLang: tt.optional(), subject: E().min(1), audience: E().min(1), cefr: Y(Li).optional(), matching: U({ diacritics: Y(qk).default("ignore"), typos: J().default(true) }).default({ diacritics: "ignore", typos: true }), units: N(Hk).min(1), objectives: N(Vk).min(1), items: N(Wk), shells: U({ enabled: N(E().min(1)).default(["quiz-arena"]), config: Q(E(), Q(E(), Et())).default({}) }).default({ enabled: ["quiz-arena"], config: {} }), assets: N(Yk).default([]), cues: N(Jk).default([]), encyclopedia: U({ articles: N(Qk).default([]) }).default({ articles: [] }), factbase: N(Xk).default([]), extensions: Q(E(), Et()).default({}) });
  const hn = (t, e) => t.objectives.filter((s) => s.unit === e), dc = (t, e) => t.items.filter((s) => s.objective === e);
  function eb(t, e) {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }
  function Tt(t) {
    const e = [], s = /* @__PURE__ */ new Set(), n = new Set(t.map((r) => r.id));
    let i = true;
    for (; i; ) {
      i = false;
      for (const r of t) s.has(r.id) || r.requires.every((o) => s.has(o) || !n.has(o)) && (e.push(r.id), s.add(r.id), i = true);
    }
    return e;
  }
  function Zi(t) {
    return t.replace(/đ/g, "d").replace(/Đ/g, "D").replace(/ß/g, "ss").replace(/ł/g, "l").replace(/Ł/g, "L").replace(/æ/g, "ae").replace(/Æ/g, "AE").replace(/œ/g, "oe").replace(/Œ/g, "OE").replace(/ø/g, "o").replace(/Ø/g, "O").normalize("NFD").replace(new RegExp("\\p{M}+", "gu"), "");
  }
  function Pe(t, e = {}) {
    let s = t.normalize("NFKC").toLowerCase();
    return s = s.replace(/['’‘`´]/g, ""), s = s.replace(/[^\p{L}\p{N}\p{M}]+/gu, " "), e.fold && (s = Zi(s).replace(/dj/g, "d")), s.replace(/\s+/g, " ").trim();
  }
  function kt(t) {
    return Zi(t.normalize("NFKC")).toUpperCase().replace(/[^\p{L}\p{N}]+/gu, "");
  }
  function hc(t, e, s = 1 / 0) {
    if (t === e) return 0;
    const n = Array.from(t), i = Array.from(e);
    if (Math.abs(n.length - i.length) > s) return s + 1;
    if (n.length === 0) return i.length;
    if (i.length === 0) return n.length;
    let r = Array.from({ length: i.length + 1 }, (o, a) => a);
    for (let o = 1; o <= n.length; o++) {
      const a = [o];
      let c = o;
      for (let l = 1; l <= i.length; l++) {
        const u = Math.min(r[l] + 1, a[l - 1] + 1, r[l - 1] + (n[o - 1] === i[l - 1] ? 0 : 1));
        a.push(u), u < c && (c = u);
      }
      if (c > s) return s + 1;
      r = a;
    }
    return r[i.length];
  }
  function tb(t) {
    const e = (i) => i.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue"), s = (i) => i.replace(/ß/g, "ss").replace(/ẞ/g, "SS"), n = /* @__PURE__ */ new Set([e(s(t)), s(t), e(t)]);
    return n.delete(t), [...n];
  }
  const pc = (t) => t.normalize("NFKC").replace(/['’‘`´]/g, "").split(/[^\p{L}\p{N}\p{M}]+/u).filter(Boolean), fc = (t) => t[0] !== void 0 && t[0] !== t[0].toLowerCase();
  function mc(t, e) {
    const s = pc(t), n = pc(e);
    return s.length !== n.length ? false : n.some((i, r) => (r > 0 || n.length === 1) && fc(i) && !fc(s[r]));
  }
  function sb(t, e, s = {}) {
    var _a3, _b3, _c2;
    const n = (_a3 = s.diacritics) != null ? _a3 : "ignore", i = s.typos !== false, r = (_b3 = s.minTypoLength) != null ? _b3 : 4, o = (_c2 = e[0]) != null ? _c2 : null, a = s.lang === "de", c = (k, b) => ({ correct: false, exact: false, typo: false, diacritics: false, matched: b, canonical: o, distance: k }), l = Pe(t);
    if (!l) return c(1 / 0, null);
    const u = Pe(t, { fold: true });
    let h = null, p = 1 / 0, f = null, m = null, g = null;
    for (const k of e) {
      const b = Pe(k);
      if (!b) continue;
      if (b === l) return { correct: true, exact: true, typo: false, diacritics: false, matched: k, canonical: o, distance: 0, ...a && mc(t, k) ? { caps: true } : {} };
      a && g === null && tb(k).some((y) => Pe(y) === l) && (g = k);
      const v = Pe(k, { fold: true });
      if (v === u) {
        f != null ? f : f = k;
        continue;
      }
      const w = hc(u, v, 2);
      if (w < p && (p = w, h = k), i && v.replace(/ /g, "").length >= r) {
        const y = n === "strict" ? hc(l, b, 1) : w;
        y <= 1 && (!m || y < m.d) && (m = { a: k, d: y });
      }
    }
    return g !== null ? { correct: true, exact: false, typo: false, diacritics: false, matched: g, canonical: o, distance: 0, translit: true, ...mc(t, g) ? { caps: true } : {} } : f !== null ? n === "strict" ? { correct: false, exact: false, typo: false, diacritics: true, matched: f, canonical: o, distance: 0 } : { correct: true, exact: false, typo: false, diacritics: n === "warn", matched: f, canonical: o, distance: 0 } : m ? { correct: true, exact: false, typo: true, diacritics: false, matched: m.a, canonical: o, distance: m.d } : c(p, h);
  }
  function nb(t, e, s) {
    if (t === true) return "strict";
    if (t === false) return "ignore";
    const n = e != null ? e : "ignore";
    return s === "de" && n === "ignore" ? "strict" : n;
  }
  class st {
    constructor(e = 0) {
      __publicField(this, "s");
      if (typeof e == "string") {
        let s = 2166136261;
        for (let n = 0; n < e.length; n++) s = Math.imul(s ^ e.charCodeAt(n), 16777619) >>> 0;
        this.s = s || 1;
      } else this.s = e >>> 0 || 1;
    }
    next() {
      let e = (this.s += 1831565813) >>> 0;
      return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
    }
    random() {
      return this.next();
    }
    randint(e, s) {
      if (e > s) throw new Error("randint: a (".concat(e, ") > b (").concat(s, ")"));
      return e + Math.floor(this.next() * (s - e + 1));
    }
    randrange(e, s) {
      if (s === void 0) {
        if (e <= 0) throw new Error("randrange: bound must be positive");
        return Math.floor(this.next() * e);
      }
      if (e >= s) throw new Error("randrange: a (".concat(e, ") must be less than b (").concat(s, ")"));
      return e + Math.floor(this.next() * (s - e));
    }
    choice(e) {
      if (e.length === 0) throw new Error("Cannot choose from an empty sequence");
      return e[this.randrange(e.length)];
    }
    sample(e, s) {
      if (s < 0 || s > e.length) throw new Error("Sample size (".concat(s, ") out of bounds for sequence of length ").concat(e.length));
      const n = [...e], i = [];
      for (let r = 0; r < s; r++) {
        const o = this.randint(0, n.length - 1);
        i.push(n[o]), n.splice(o, 1);
      }
      return i;
    }
    shuffle(e) {
      for (let s = e.length - 1; s > 0; s--) {
        const n = Math.floor(this.next() * (s + 1)), i = e[s];
        e[s] = e[n], e[n] = i;
      }
      return e;
    }
  }
  function Gt(t, ...e) {
    return new st([t, ...e].join(":"));
  }
  function gs(t, e) {
    const s = e.shuffle([...t]);
    return s.length > 1 && s.every((n, i) => n === t[i]) && s.push(s.shift()), s;
  }
  const nt = (t, e) => "".concat(t, ",").concat(e);
  function ib(t, e, s, n, i) {
    const r = i === "down" ? 1 : 0, o = i === "across" ? 1 : 0;
    if (t.has(nt(s - r, n - o)) || t.has(nt(s + e.length * r, n + e.length * o))) return -1;
    let a = 0;
    for (let c = 0; c < e.length; c++) {
      const l = s + c * r, u = n + c * o, h = t.get(nt(l, u));
      if (h) {
        if (h.ch !== e[c] || h[i]) return -1;
        a++;
      } else if (t.has(nt(l + o, u + r)) || t.has(nt(l - o, u - r))) return -1;
    }
    return a;
  }
  function Ui(t, e, s, n, i) {
    const r = i === "down" ? 1 : 0, o = i === "across" ? 1 : 0;
    e.forEach((a, c) => {
      var _a3;
      const l = nt(s + c * r, n + c * o), u = (_a3 = t.get(l)) != null ? _a3 : { ch: a, across: false, down: false };
      u[i] = true, t.set(l, u);
    });
  }
  function Bi(t) {
    let e = 1 / 0, s = -1 / 0, n = 1 / 0, i = -1 / 0;
    for (const r of t.keys()) {
      const [o, a] = r.split(",").map(Number);
      e = Math.min(e, o), s = Math.max(s, o), n = Math.min(n, a), i = Math.max(i, a);
    }
    return { r0: e, r1: s, c0: n, c1: i };
  }
  function rb(t, e, s, n) {
    const i = Gt(e, "crossword", s), r = [...t];
    s > 0 ? i.shuffle(r) : r.sort((p, f) => f.letters.length - p.letters.length || p.id.localeCompare(f.id));
    const o = /* @__PURE__ */ new Map(), a = [];
    let c = r, l = true, u = true;
    for (; c.length > 0 && u; ) {
      u = false;
      const p = [];
      for (const f of c) {
        const m = Array.from(f.letters);
        if (l) {
          Ui(o, m, 0, 0, "across"), a.push({ id: f.id, letters: f.letters, r: 0, c: 0, dir: "across" }), l = false, u = true;
          continue;
        }
        const g = [];
        for (const b of a) {
          const v = Array.from(b.letters), w = b.dir === "across" ? "down" : "across";
          for (let y = 0; y < v.length; y++) for (let $ = 0; $ < m.length; $++) {
            if (v[y] !== m[$]) continue;
            const x = b.dir === "across" ? b.r - $ : b.r + y, _ = b.dir === "across" ? b.c + y : b.c - $, z = ib(o, m, x, _, w);
            if (z < 1) continue;
            const O = w === "down" ? 1 : 0, R = w === "across" ? 1 : 0, S = Bi(o), A = Math.min(S.r0, x), j = Math.max(S.r1, x + (m.length - 1) * O), I = Math.min(S.c0, _), D = Math.max(S.c1, _ + (m.length - 1) * R);
            j - A + 1 > n || D - I + 1 > n || g.push({ r: x, c: _, dir: w, n: z, area: (j - A + 1) * (D - I + 1) });
          }
        }
        if (g.length === 0) {
          p.push(f);
          continue;
        }
        i.shuffle(g), g.sort((b, v) => v.n - b.n || b.area - v.area);
        const k = g[0];
        Ui(o, m, k.r, k.c, k.dir), a.push({ id: f.id, letters: f.letters, r: k.r, c: k.c, dir: k.dir }), u = true;
      }
      c = p;
    }
    const h = o.size > 0 ? Bi(o) : { r0: 0, r1: -1, c0: 0, c1: -1 };
    return { placed: a, unplaced: c.map((p) => p.id), area: (h.r1 - h.r0 + 1) * (h.c1 - h.c0 + 1) };
  }
  function ob(t, e, s = {}) {
    var _a3, _b3;
    const n = (_a3 = s.maxSize) != null ? _a3 : 15, i = [], r = [], o = /* @__PURE__ */ new Set();
    for (const k of t) {
      const b = kt(k.answer);
      b.length < 2 || o.has(k.id) || b.length > n ? r.push(k.id) : i.push({ id: k.id, letters: b }), o.add(k.id);
    }
    let a = null;
    const c = Math.max(1, (_b3 = s.attempts) != null ? _b3 : 24);
    for (let k = 0; k < c && i.length > 0; k++) {
      const b = rb(i, e, k, n);
      if ((!a || b.unplaced.length < a.unplaced.length || b.unplaced.length === a.unplaced.length && b.area < a.area) && (a = b), a.unplaced.length === 0 && k >= 8) break;
    }
    if (!a) return { width: 0, height: 0, cells: [], entries: [], unplaced: r };
    const l = /* @__PURE__ */ new Map();
    for (const k of a.placed) Ui(l, Array.from(k.letters), k.r, k.c, k.dir);
    const u = Bi(l), h = u.r1 - u.r0 + 1, p = u.c1 - u.c0 + 1, f = Array.from({ length: h }, () => Array(p).fill(null));
    for (const [k, b] of l) {
      const [v, w] = k.split(",").map(Number);
      f[v - u.r0][w - u.c0] = b.ch;
    }
    const m = a.placed.map((k) => ({ id: k.id, answer: k.letters, row: k.r - u.r0, col: k.c - u.c0, dir: k.dir, number: 0, length: Array.from(k.letters).length }));
    let g = 0;
    for (let k = 0; k < h; k++) for (let b = 0; b < p; b++) {
      const v = m.filter((w) => w.row === k && w.col === b);
      if (v.length !== 0) {
        g++;
        for (const w of v) w.number = g;
      }
    }
    return m.sort((k, b) => k.number - b.number || (k.dir === "across" ? -1 : 1)), { width: p, height: h, cells: f, entries: m, unplaced: [...r, ...a.unplaced] };
  }
  function ab(t, e) {
    const s = [], n = new Map(t.entries.map((a) => [a.id, a]));
    for (const a of e) {
      const c = kt(a.answer), l = n.get(a.id);
      if (!l) {
        t.unplaced.includes(a.id) || s.push("word ".concat(a.id, " is neither placed nor reported unplaced"));
        continue;
      }
      l.answer !== c && s.push("entry ".concat(a.id, " has other letters than its word"));
    }
    const i = (a, c) => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.cells[a]) == null ? void 0 : _a3[c]) != null ? _b3 : null;
    }, r = /* @__PURE__ */ new Set();
    for (const a of t.entries) for (let c = 0; c < a.length; c++) {
      const l = a.row + (a.dir === "down" ? c : 0), u = a.col + (a.dir === "across" ? c : 0);
      i(l, u) !== Array.from(a.answer)[c] && s.push("entry ".concat(a.id, " does not match the grid at ").concat(l, ",").concat(u)), r.add(nt(l, u));
    }
    for (let a = 0; a < t.height; a++) for (let c = 0; c < t.width; c++) i(a, c) !== null && !r.has(nt(a, c)) && s.push("cell ".concat(a, ",").concat(c, " belongs to no entry"));
    const o = (a, c, l, u) => t.entries.some((h) => h.row === a && h.col === c && h.dir === l && h.length === u);
    for (let a = 0; a < t.height; a++) for (let c = 0; c < t.width; c++) if (i(a, c) !== null) for (const l of ["across", "down"]) {
      const u = l === "down" ? a - 1 : a, h = l === "across" ? c - 1 : c;
      if (i(u, h) !== null) continue;
      let p = 0;
      for (; i(a + (l === "down" ? p : 0), c + (l === "across" ? p : 0)) !== null; ) p++;
      p >= 2 && !o(a, c, l, p) && s.push("a run of ".concat(p, " letters at ").concat(a, ",").concat(c, " (").concat(l, ") is not an entry"));
    }
    if (t.entries.length > 1) {
      const a = /* @__PURE__ */ new Map(), c = (u) => {
        let h = u;
        for (; a.get(h) !== h; ) h = a.get(h);
        return h;
      };
      for (const u of t.entries) a.set(u.id, u.id);
      const l = /* @__PURE__ */ new Map();
      for (const u of t.entries) for (let h = 0; h < u.length; h++) {
        const p = nt(u.row + (u.dir === "down" ? h : 0), u.col + (u.dir === "across" ? h : 0)), f = l.get(p);
        f !== void 0 ? a.set(c(u.id), c(f)) : l.set(p, u.id);
      }
      new Set(t.entries.map((u) => c(u.id))).size > 1 && s.push("the crossword is not one connected piece");
    }
    return s;
  }
  function cb(t) {
    return { across: t.entries.filter((e) => e.dir === "across"), down: t.entries.filter((e) => e.dir === "down") };
  }
  const pn = ["again", "hard", "good", "easy"], gc = (t) => typeof t == "string" && pn.includes(t), Fi = 864e5, lb = 1.3, ub = 2.5, db = { again: 2, hard: 3, good: 4, easy: 5 }, kc = (t) => typeof t == "number" ? t : t.getTime(), hb = (t) => Math.round(t * 100) / 100;
  function bc(t, e = 0) {
    return { id: t, ease: ub, interval: 0, reps: 0, lapses: 0, due: kc(e), last: null };
  }
  function vc(t, e, s) {
    const n = kc(s), i = db[e], r = Math.max(lb, hb(t.ease + (0.1 - (5 - i) * (0.08 + (5 - i) * 0.02))));
    if (i < 3) return { ...t, ease: r, interval: 1, reps: 0, lapses: t.lapses + 1, due: n + Fi, last: n };
    const o = t.reps + 1, a = o === 1 ? 1 : o === 2 ? 6 : Math.round(t.interval * r);
    return { ...t, ease: r, interval: a, reps: o, due: n + a * Fi, last: n };
  }
  function pb(t) {
    return t.last === null ? "new" : t.reps < 3 ? "learning" : t.interval >= 21 ? "mature" : "young";
  }
  const wc = () => ({ answered: 0, pending: [], misses: {} }), fb = (t) => Math.min(4, 1 + Math.max(1, t));
  function mb(t, e, s) {
    var _a3;
    const n = t.answered + 1, i = t.pending.filter((o) => o.id !== e);
    if (s !== "again") return { answered: n, pending: i, misses: t.misses };
    const r = ((_a3 = t.misses[e]) != null ? _a3 : 0) + 1;
    return { answered: n, pending: [...i, { id: e, dueAt: n + fb(r), misses: r }], misses: { ...t.misses, [e]: r } };
  }
  const gb = { forward: [[0, 1], [1, 0]], diagonal: [[0, 1], [1, 0], [1, 1], [-1, 1]], all: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]] };
  function kb(t) {
    const e = t.reduce((s, n) => s + n, 0);
    return Math.max(6, ...t, Math.ceil(Math.sqrt(e * 2.4)));
  }
  function bb(t, e, s, n, i) {
    const r = Gt(n, "wordsearch", e, i), o = Array.from({ length: e }, () => Array(e).fill(null)), a = [], c = [], l = [...t].sort((u, h) => h.letters.length - u.letters.length || u.id.localeCompare(h.id));
    for (const u of l) {
      let h = false;
      for (let p = 0; p < 400 && !h; p++) {
        const [f, m] = r.choice(s), g = r.randrange(e), k = r.randrange(e), b = g + f * (u.letters.length - 1), v = k + m * (u.letters.length - 1);
        if (b < 0 || b >= e || v < 0 || v >= e) continue;
        let w = true;
        for (let y = 0; y < u.letters.length && w; y++) {
          const $ = o[g + f * y][k + m * y];
          $ !== null && $ !== u.letters[y] && (w = false);
        }
        w && (u.letters.forEach((y, $) => {
          o[g + f * $][k + m * $] = y;
        }), a.push({ id: u.id, answer: u.letters.join(""), row: g, col: k, dr: f, dc: m }), h = true);
      }
      h || c.push(u.id);
    }
    return { cells: o, placements: a, unplaced: c };
  }
  function vb(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = gb[(_a3 = s.directions) != null ? _a3 : "diagonal"], i = [], r = [], o = /* @__PURE__ */ new Set();
    for (const k of t) {
      const b = Array.from(kt(k.answer));
      b.length < 2 || o.has(k.id) ? r.push(k.id) : i.push({ id: k.id, letters: b }), o.add(k.id);
    }
    const a = (_b3 = s.size) != null ? _b3 : kb(i.map((k) => k.letters.length)), c = s.size ? [s.size] : [a, a + 1, a + 2, a + 3];
    let l = null, u = a;
    for (const k of c) {
      for (let b = 0; b < 12; b++) {
        const v = bb(i.filter((y) => y.letters.length <= k), k, n, e, b), w = [...v.unplaced, ...i.filter((y) => y.letters.length > k).map((y) => y.id)];
        if ((!l || w.length < l.unplaced.length) && (l = { ...v, unplaced: w }, u = k), l.unplaced.length === 0) break;
      }
      if (l && l.unplaced.length === 0) break;
    }
    const h = u, p = (_c2 = l == null ? void 0 : l.cells) != null ? _c2 : Array.from({ length: h }, () => Array(h).fill(null)), f = i.flatMap((k) => k.letters), m = Gt(e, "wordsearch-fill", h), g = p.map((k) => k.map((b) => b != null ? b : f.length > 0 ? m.choice(f) : "A"));
    return { size: h, cells: g, placements: (_d2 = l == null ? void 0 : l.placements) != null ? _d2 : [], unplaced: [...r, ...(_e2 = l == null ? void 0 : l.unplaced) != null ? _e2 : []] };
  }
  function yc(t, e) {
    var _a3;
    const [s, n] = e.start, [i, r] = e.end, o = Math.sign(i - s), a = Math.sign(r - n), c = Math.max(Math.abs(i - s), Math.abs(r - n)) + 1;
    if (Math.abs(i - s) !== 0 && Math.abs(r - n) !== 0 && Math.abs(i - s) !== Math.abs(r - n)) return null;
    let l = "";
    for (let u = 0; u < c; u++) {
      const h = (_a3 = t.cells[s + o * u]) == null ? void 0 : _a3[n + a * u];
      if (h === void 0) return null;
      l += h;
    }
    return l;
  }
  function Sc(t) {
    const e = Array.from(t.answer).length - 1;
    return { start: [t.row, t.col], end: [t.row + t.dr * e, t.col + t.dc * e] };
  }
  function wb(t, e) {
    const s = [];
    (t.cells.length !== t.size || t.cells.some((n) => n.length !== t.size)) && s.push("the grid is not square");
    for (const n of e) {
      const i = t.placements.find((r) => r.id === n.id);
      if (!i) {
        t.unplaced.includes(n.id) || s.push("word ".concat(n.id, " is neither placed nor reported unplaced"));
        continue;
      }
      yc(t, Sc(i)) !== kt(n.answer) && s.push("word ".concat(n.id, " does not read back from its placement"));
    }
    for (const n of t.cells) for (const i of n) new RegExp("^\\p{L}$", "u").test(i) || s.push("a cell holds ".concat(JSON.stringify(i), ", not a letter"));
    return s;
  }
  const It = (t) => typeof t == "object" && t !== null && !Array.isArray(t), $c = (t) => Array.isArray(t) && t.every((e) => typeof e == "string"), ve = (t) => ({ correct: false, score: 0, expected: t, invalid: true }), Mt = (t, e, s, n) => {
    const i = e === 0 ? 0 : t / e, r = e > 0 && t === e;
    return { correct: r, partial: !r && t > 0, score: i, expected: s, ...n ? { detail: n } : {} };
  };
  function yb(t, e) {
    if (typeof e != "string") return ve(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function Sb(t, e) {
    if (typeof e != "boolean") return ve(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function $b(t, e) {
    const s = [...t.answers].sort();
    if (!$c(e)) return ve(s);
    const n = new Set(e), i = s.filter((c) => n.has(c)).length, r = [...n].filter((c) => !t.answers.includes(c)).length, o = i === s.length && r === 0, a = Math.max(0, (i - r) / s.length);
    return { correct: o, partial: !o && a > 0, score: a, expected: s };
  }
  function fn(t, e, s, n, i = false) {
    const r = s.text.accepted(e), o = sb(t, r, { diacritics: nb(n, s.diacritics, s.lang), typos: i ? false : s.typos, lang: s.lang });
    return { correct: o.correct, score: o.correct ? 1 : 0, expected: o.canonical, ...o.typo ? { typo: true } : {}, ...o.diacritics ? { diacritics: true } : {}, ...o.translit ? { translit: true } : {}, ...o.caps ? { caps: true } : {} };
  }
  function zb(t, e, s) {
    var _a3;
    return typeof e != "string" ? ve((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : fn(e, t.answer, s, t.strictDiacritics);
  }
  function _b(t, e, s) {
    var _a3;
    const n = Object.fromEntries(t.gaps.map((u) => {
      var _a4;
      return [u.id, (_a4 = s.text.canonical(u.answer)) != null ? _a4 : null];
    }));
    if (!It(e)) return ve(n);
    const i = {};
    let r = false, o = false, a = false, c = false;
    for (const u of t.gaps) {
      const h = e[u.id], p = typeof h == "string" ? fn(h, u.answer, s, t.strictDiacritics, !!((_a3 = u.bank) == null ? void 0 : _a3.length)) : { correct: false };
      i[u.id] = p.correct, "typo" in p && p.typo && (r = true), "diacritics" in p && p.diacritics && (o = true), "translit" in p && p.translit && (a = true), "caps" in p && p.caps && (c = true);
    }
    return { ...Mt(Object.values(i).filter(Boolean).length, t.gaps.length, n, i), ...r ? { typo: true } : {}, ...o ? { diacritics: true } : {}, ...a ? { translit: true } : {}, ...c ? { caps: true } : {} };
  }
  function jb(t) {
    const e = t.forms.filter((s) => !s.given);
    return t.ask === void 0 ? e : e.slice(0, t.ask);
  }
  function xb(t, e, s) {
    var _a3;
    const n = Object.fromEntries(t.forms.map((p) => {
      var _a4;
      return [p.person, (_a4 = s.text.canonical(p.answer)) != null ? _a4 : null];
    }));
    if (!It(e)) return ve(n);
    const i = t.forms.filter((p) => !p.given), r = i.filter((p) => typeof e[p.person] == "string");
    if (r.length === 0 || r.length !== Math.min((_a3 = t.ask) != null ? _a3 : i.length, i.length)) return ve(n);
    const o = { ...s, typos: false }, a = {};
    let c = false, l = false, u = false;
    for (const p of r) {
      const f = fn(e[p.person], p.answer, o, t.strictDiacritics);
      a[p.person] = f.correct, f.correct && f.diacritics && (c = true), f.translit && (l = true), f.caps && (u = true);
    }
    return { ...Mt(Object.values(a).filter(Boolean).length, r.length, n, a), ...c ? { diacritics: true } : {}, ...l ? { translit: true } : {}, ...u ? { caps: true } : {} };
  }
  function Eb(t, e) {
    const s = Object.fromEntries(t.pairs.map((i) => [i.id, i.id]));
    if (!It(e)) return ve(s);
    const n = {};
    for (const i of t.pairs) n[i.id] = e[i.id] === i.id;
    return Mt(Object.values(n).filter(Boolean).length, t.pairs.length, s, n);
  }
  function Ab(t, e) {
    const s = t.items.map((i) => i.id);
    if (!$c(e) || e.length !== s.length || new Set(e).size !== s.length || e.some((i) => !s.includes(i))) return ve(s);
    const n = {};
    return s.forEach((i, r) => {
      n[i] = e[r] === i;
    }), Mt(Object.values(n).filter(Boolean).length, s.length, s, n);
  }
  function Tb(t, e) {
    return gs(t.items.map((s) => s.id), Gt(e, t.id, "order"));
  }
  function Ib(t, e) {
    const s = Object.fromEntries(t.items.map((i) => [i.id, i.group]));
    if (!It(e)) return ve(s);
    const n = {};
    for (const i of t.items) n[i.id] = e[i.id] === i.group;
    return Mt(Object.values(n).filter(Boolean).length, t.items.length, s, n);
  }
  function Mb(t, e, s) {
    if (t.type === "circle") return (e - t.cx) ** 2 + (s - t.cy) ** 2 <= t.r ** 2;
    if (t.type === "rect") return e >= t.x && e <= t.x + t.w && s >= t.y && s <= t.y + t.h;
    let n = false;
    const i = t.points;
    for (let r = 0, o = i.length - 1; r < i.length; o = r++) {
      const [a, c] = i[r], [l, u] = i[o];
      c > s != u > s && e < (l - a) * (s - c) / (u - c) + a && (n = !n);
    }
    return n;
  }
  function zc(t, e, s) {
    var _a3;
    return (_a3 = t.regions.find((n) => Mb(n.shape, e, s))) == null ? void 0 : _a3.id;
  }
  function Ob(t, e) {
    var _a3;
    let s;
    if (typeof e == "string") s = e;
    else if (It(e) && typeof e.x == "number" && typeof e.y == "number") s = (_a3 = zc(t, e.x, e.y)) != null ? _a3 : "";
    else return ve(t.answer);
    const n = s === t.answer;
    return { correct: n, score: n ? 1 : 0, expected: t.answer };
  }
  function Nb(t, e, s) {
    var _a3;
    if (t.mode === "choose") {
      if (typeof e != "string") return ve(t.answer);
      const n = e === t.answer;
      return { correct: n, score: n ? 1 : 0, expected: t.answer };
    }
    return typeof e != "string" ? ve((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : fn(e, t.answer, s, t.strictDiacritics);
  }
  function Pb(t, e) {
    return gc(e) ? e === "again" ? { correct: false, score: 0, expected: null } : e === "hard" ? { correct: true, partial: true, score: 0.6, expected: null } : { correct: true, score: 1, expected: null } : ve(null);
  }
  function _c(t, e) {
    const s = t.words.flatMap((n) => {
      const i = e.text.canonical(n.answer);
      return i ? [{ id: n.id, answer: i }] : [];
    });
    return { grid: ob(s, t.seed, { maxSize: t.maxSize }), words: s };
  }
  function Rb(t, e, s) {
    const n = Object.fromEntries(t.words.map((r) => {
      var _a3;
      return [r.id, (_a3 = s.text.canonical(r.answer)) != null ? _a3 : null];
    }));
    if (!It(e)) return ve(n);
    const i = {};
    for (const r of t.words) {
      const o = s.text.canonical(r.answer), a = e[r.id];
      i[r.id] = o !== void 0 && typeof a == "string" && kt(a) !== "" && kt(a) === kt(o);
    }
    return Mt(Object.values(i).filter(Boolean).length, t.words.length, n, i);
  }
  function mn(t, e) {
    const s = t.words.flatMap((n) => {
      const i = e.text.canonical(n.answer);
      return i ? [{ id: n.id, answer: i }] : [];
    });
    return { grid: vb(s, t.seed, { size: t.size, directions: t.directions }), words: s };
  }
  const Db = (t) => It(t) && Array.isArray(t.start) && Array.isArray(t.end) && t.start.length === 2 && t.end.length === 2 && [...t.start, ...t.end].every((e) => Number.isInteger(e));
  function jc(t, e, s) {
    const n = /* @__PURE__ */ new Set();
    for (const i of s) {
      const r = yc(t, i);
      if (!r) continue;
      const o = Array.from(r).reverse().join("");
      for (const a of e) {
        const c = kt(a.answer);
        (c === r || c === o) && n.add(a.id);
      }
    }
    return [...n];
  }
  function Lb(t, e, s) {
    const n = t.words.map((c) => c.id);
    if (!Array.isArray(e) || !e.every(Db)) return ve(n);
    const { grid: i, words: r } = mn(t, s), o = new Set(jc(i, r, e)), a = Object.fromEntries(n.map((c) => [c, o.has(c)]));
    return Mt(o.size, n.length, n, a);
  }
  function Wt(t) {
    var _a3, _b3, _c2, _d2;
    return { text: t.text, diacritics: (_a3 = t.pack.matching) == null ? void 0 : _a3.diacritics, typos: (_b3 = t.pack.matching) == null ? void 0 : _b3.typos, lang: (_d2 = (_c2 = t.targetLang) != null ? _c2 : t.pack.targetLang) != null ? _d2 : t.text.lang };
  }
  const ks = /* @__PURE__ */ new Map();
  function Cb(t, e = {}) {
    if (ks.has(t.kind) && !e.replace) throw new Error('item kind "'.concat(t.kind, '" is already registered'));
    ks.set(t.kind, t);
  }
  function gn(t, e, s) {
    const n = ks.get(t.kind);
    if (!n) return { correct: false, score: 0, expected: null, invalid: true };
    try {
      return n.check(t, e, s);
    } catch (e2) {
      return { correct: false, score: 0, expected: n.keyOf(t), invalid: true };
    }
  }
  const Zb = (t, e) => {
    var _a3;
    return (_a3 = ks.get(t.kind)) == null ? void 0 : _a3.solve(t, e);
  };
  function Ht(t, e, s) {
    const n = t[e], i = s && s !== e ? t[s] : void 0, r = (a) => {
      var _a3;
      return (_a3 = n == null ? void 0 : n.strings[a]) != null ? _a3 : i == null ? void 0 : i.strings[a];
    }, o = (a) => {
      var _a3, _b3, _c2;
      const c = (_c2 = (_a3 = n == null ? void 0 : n.accepted) == null ? void 0 : _a3[a]) != null ? _c2 : (_b3 = i == null ? void 0 : i.accepted) == null ? void 0 : _b3[a];
      return c && c.length > 0 ? c : void 0;
    };
    return { lang: e, text: r, t: (a) => {
      var _a3;
      return (_a3 = r(a)) != null ? _a3 : a;
    }, accepted: (a) => {
      const c = o(a);
      if (c) return c;
      const l = r(a);
      return l ? [l] : [];
    }, canonical: (a) => {
      var _a3, _b3;
      return (_b3 = (_a3 = o(a)) == null ? void 0 : _a3[0]) != null ? _b3 : r(a);
    }, hasText: (a) => r(a) !== void 0, hasAccepted: (a) => o(a) !== void 0 };
  }
  const te = (t, e, s = "string") => e ? [{ path: t, key: e, role: s }] : [], _e = (t) => [...te("prompt", t.prompt), ...te("explanation", t.explanation), ...te("didYouKnow", t.didYouKnow), ...te("hint", t.hint)];
  function Fe(t, e) {
    const s = /* @__PURE__ */ new Set(), n = [];
    return t.forEach((i, r) => {
      s.has(i.id) && n.push({ code: "DUPLICATE_ID", path: "".concat(e, "[").concat(r, "].id"), message: 'the id "'.concat(i.id, '" is used twice in ').concat(e) }), s.add(i.id);
    }), n;
  }
  const xc = (t, e) => Ht(t.catalogs, e, t.pack.targetLang), Ec = (t, e) => Wt({ pack: t.pack, text: xc(t, e) });
  function Ac(t, e, s, n) {
    if (!e) return [];
    const i = t.assets.get(e);
    return i && i.kind !== s ? [{ code: "ASSET_KIND", path: n, message: 'asset "'.concat(e, '" is ').concat(i.kind, ", this item needs ").concat(s) }] : [];
  }
  function je(t) {
    Cb(t);
  }
  je({ kind: "mcq", form: "Multiple choice", recall: false, schema: Ja, check: (t, e) => yb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Fe(t.options, "options"), ...t.options.some((e) => e.id === t.answer) ? [] : [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }]], distractors: (t) => t.options.flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "true-false", form: "True or false", recall: false, schema: Qa, check: (t, e) => Sb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...te("why", t.why)] }), je({ kind: "multi-select", form: "Select all that apply", recall: false, schema: Xa, check: (t, e) => $b(t, e), keyOf: (t) => [...t.answers].sort(), solve: (t) => [...t.answers], textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Fe(t.options, "options"), ...t.answers.flatMap((e, s) => t.options.some((n) => n.id === e) ? [] : [{ code: "UNKNOWN_OPTION", path: "answers[".concat(s, "]"), message: 'the answer "'.concat(e, '" is not one of the options') }])], distractors: (t) => t.options.flatMap((e, s) => t.answers.includes(e.id) ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "cloze", form: "Fill the gap", recall: true, schema: ec, check: (t, e, s) => _b(t, e, s), keyOf: (t) => Object.fromEntries(t.gaps.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.gaps.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("text", t.text), ...t.gaps.flatMap((e, s) => [...te("gaps[".concat(s, "].answer"), e.answer, "accepted"), ...e.bank ? [...te("gaps[".concat(s, "].answer"), e.answer), ...e.bank.flatMap((n, i) => te("gaps[".concat(s, "].bank[").concat(i, "]"), n))] : []])], validate: (t, e) => {
    const s = [...Fe(t.gaps, "gaps")];
    t.gaps.forEach((n, i) => {
      n.bank && !n.bank.includes(n.answer) && s.push({ code: "UNKNOWN_OPTION", path: "gaps[".concat(i, "].bank"), message: 'the word bank of gap "'.concat(n.id, '" does not contain its answer key') });
    });
    for (const n of e.languages) {
      const i = xc(e, n).text(t.text);
      if (i !== void 0) for (const r of t.gaps) i.includes("{{".concat(r.id, "}}")) || s.push({ code: "MISSING_GAP_MARKER", path: "text", message: 'the text in "'.concat(n, '" has no {{').concat(r.id, "}} marker") });
    }
    return s;
  } }), je({ kind: "typed", form: "Type the answer", recall: true, schema: sc, check: (t, e, s) => zb(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => [..._e(t), ...te("answer", t.answer, "accepted")] }), je({ kind: "match-pairs", form: "Match the pairs", recall: false, schema: nc, check: (t, e) => Eb(t, e), keyOf: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), solve: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), textRefs: (t) => [..._e(t), ...t.pairs.flatMap((e, s) => [...te("pairs[".concat(s, "].left"), e.left), ...te("pairs[".concat(s, "].right"), e.right)])], validate: (t) => Fe(t.pairs, "pairs") }), je({ kind: "order", form: "Put in order", recall: true, schema: ic, check: (t, e) => Ab(t, e), keyOf: (t) => t.items.map((e) => e.id), solve: (t) => t.items.map((e) => e.id), textRefs: (t) => [..._e(t), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].when"), e.when)])], validate: (t) => Fe(t.items, "items") }), je({ kind: "sort-groups", form: "Sort into groups", recall: true, schema: rc, check: (t, e) => Ib(t, e), keyOf: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), solve: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), textRefs: (t) => [..._e(t), ...t.groups.flatMap((e, s) => te("groups[".concat(s, "].title"), e.title)), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].why"), e.why)])], validate: (t) => [...Fe(t.groups, "groups"), ...Fe(t.items, "items"), ...t.items.flatMap((e, s) => t.groups.some((n) => n.id === e.group) ? [] : [{ code: "UNKNOWN_GROUP", path: "items[".concat(s, "].group"), message: 'the group "'.concat(e.group, '" does not exist') }])] }), je({ kind: "hotspot", form: "Find it on the picture", recall: true, schema: oc, check: (t, e) => Ob(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.regions.flatMap((e, s) => [...te("regions[".concat(s, "].label"), e.label), ...te("regions[".concat(s, "].why"), e.why)])], validate: (t, e) => [...Fe(t.regions, "regions"), ...t.regions.some((s) => s.id === t.answer) ? [] : [{ code: "UNKNOWN_REGION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the regions') }], ...Ac(e, t.asset, "image", "asset")] }), je({ kind: "listening", form: "Listen and answer", recall: false, schema: ac, check: (t, e, s) => Nb(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return t.mode === "choose" ? t.answer : (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => {
    var _a3;
    return [..._e(t), ...te("transcript", t.transcript), ...t.mode === "type" ? te("answer", t.answer, "accepted") : [], ...((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])];
  }, validate: (t, e) => {
    var _a3, _b3;
    return [...Fe((_a3 = t.options) != null ? _a3 : [], "options"), ...t.mode === "choose" && !((_b3 = t.options) != null ? _b3 : []).some((s) => s.id === t.answer) ? [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }] : [], ...Ac(e, t.asset, "audio", "asset")];
  }, distractors: (t) => {
    var _a3;
    return t.mode === "choose" ? ((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) : [];
  } }), je({ kind: "flashcard", form: "Flashcard", recall: true, schema: cc, check: (t, e) => Pb(t, e), keyOf: () => null, solve: () => "good", textRefs: (t) => [..._e(t), ...te("back", t.back)], validate: (t, e) => t.backAsset && !e.assets.has(t.backAsset) ? [{ code: "UNKNOWN_ASSET", path: "backAsset", message: 'unknown asset "'.concat(t.backAsset, '"') }] : [] }), je({ kind: "crossword", form: "Crossword", recall: true, schema: lc, check: (t, e, s) => Rb(t, e, s), keyOf: (t) => Object.fromEntries(t.words.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.words.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => [...te("words[".concat(s, "].answer"), e.answer, "accepted"), ...te("words[".concat(s, "].clue"), e.clue)])], validate: (t, e) => {
    const s = Fe(t.words, "words");
    for (const n of e.languages) {
      const i = Ec(e, n);
      if (t.words.some((a) => !i.text.canonical(a.answer))) continue;
      const { grid: r, words: o } = _c(t, i);
      r.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the crossword cannot place: ').concat(r.unplaced.join(", ")) });
      for (const a of ab(r, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), je({ kind: "conjugation", form: "Conjugate the verb", recall: true, schema: tc, check: (t, e, s) => xb(t, e, s), keyOf: (t) => Object.fromEntries(t.forms.filter((e) => !e.given).map((e) => [e.person, e.answer])), solve: (t, e) => Object.fromEntries(jb(t).map((s) => {
    var _a3;
    return [s.person, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("verb", t.verb), ...t.forms.flatMap((e, s) => [...te("forms[".concat(s, "].label"), e.label), ...te("forms[".concat(s, "].answer"), e.answer, "accepted")])], validate: (t) => {
    const e = [];
    return t.forms.filter((n) => !n.given).length === 0 && e.push({ code: "CONJ_NOTHING_ASKED", path: "forms", message: "every form is given: the item asks nothing" }), e;
  } }), je({ kind: "word-search", form: "Word search", recall: true, schema: uc, check: (t, e, s) => Lb(t, e, s), keyOf: (t) => t.words.map((e) => e.id), solve: (t, e) => mn(t, e).grid.placements.map(Sc), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => te("words[".concat(s, "].answer"), e.answer, "accepted"))], validate: (t, e) => {
    const s = Fe(t.words, "words");
    for (const n of e.languages) {
      const i = Ec(e, n);
      if (t.words.some((a) => !i.text.canonical(a.answer))) continue;
      const { grid: r, words: o } = mn(t, i);
      r.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the word search cannot place: ').concat(r.unplaced.join(", ")) });
      for (const a of wb(r, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), [...ks.keys()];
  const Ub = 0.7, Bb = 0.85, Tc = (t = 3) => ({ window: [], difficulty: t });
  function Fb(t) {
    return t.length === 0 ? null : t.filter(Boolean).length / t.length;
  }
  function Kb(t, e = {}) {
    var _a3, _b3;
    return t < ((_a3 = e.low) != null ? _a3 : Ub) ? "low" : t > ((_b3 = e.high) != null ? _b3 : Bb) ? "high" : "in";
  }
  function qb(t, e, s = {}) {
    var _a3, _b3, _c2, _d2;
    const n = (_a3 = s.windowSize) != null ? _a3 : 10, i = [...t.window, e].slice(-n), r = Fb(i);
    if (r === null || i.length < ((_b3 = s.minSamples) != null ? _b3 : 4)) return { window: i, difficulty: t.difficulty };
    const o = (_c2 = s.minDifficulty) != null ? _c2 : 1, a = (_d2 = s.maxDifficulty) != null ? _d2 : 5, c = Kb(r, s), l = c === "low" ? Math.max(o, t.difficulty - 1) : c === "high" ? Math.min(a, t.difficulty + 1) : t.difficulty;
    return l === t.difficulty ? { window: i, difficulty: l } : { window: [], difficulty: l };
  }
  function Gb(t, e, s, n = []) {
    let i = t.filter((l) => !n.includes(l.id));
    if (i.length === 0 && (i = [...t]), i.length === 0) return null;
    const r = (l) => Math.abs(l.difficulty - e.difficulty);
    let o = i.map((l) => ({ c: l, w: r(l) === 0 ? 6 : r(l) === 1 ? 2 : r(l) === 2 ? 1 : 0 }));
    if (o.every((l) => l.w === 0)) {
      const l = Math.min(...i.map(r));
      o = i.map((u) => ({ c: u, w: r(u) === l ? 1 : 0 }));
    }
    const a = o.reduce((l, u) => l + u.w, 0);
    let c = s.next() * a;
    for (const l of o) if (l.w !== 0) {
      if (c < l.w) return l.c;
      c -= l.w;
    }
    return o.filter((l) => l.w > 0).at(-1).c;
  }
  const Ki = 1, Wb = ["murdle", "knights", "testimony", "logic", "quiz"], kn = ["easy", "medium", "hard"], ce = E().regex(/^[a-z][a-z0-9]*$/, "an item id such as s1, w2, p3"), qi = /^[a-z][a-z0-9_]*$/, Hb = F({ id: E().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either"]), a: ce, b: et([ce, At([ce, ce])]), descr: N(ce).optional() }), Gi = F({ rule: E(), cell: At([ce, ce]).optional(), value: E(), clue: E().optional(), from: N(At([ce, ce])).optional(), who: E().optional(), statement: E().optional() }).passthrough(), Ic = F({ steps: L().int(), score: L(), rules: Q(E(), L()) }), Vb = Ic, bn = { format: se(Ki), seed: L().int().optional(), band: Y(kn).optional(), difficulty: Vb, steps: N(Gi) }, Yb = F({ ...bn, kind: se("murdle"), size: L().int().min(3).max(5), categories: N(F({ key: E(), items: N(ce).min(3) })).min(3).max(4), descr: Q(E(), E()).optional(), solution: Q(E(), Q(E(), ce)), clues: N(Hb).min(1), murder: F({ place: ce, answer: F({ suspect: ce, weapon: ce, place: ce, motive: ce.optional() }) }) }), Ot = E().regex(/^k\d+$/, "a speaker id such as k1"), vn = Sk(() => et([F({ type: Y(["knight", "knave"]), who: Ot }), F({ type: Y(["same", "diff"]), a: Ot, b: Ot }), F({ type: Y(["some_knave", "all_knight"]), of: N(Ot).min(1) }), F({ type: se("exactly"), k: L().int().min(0), of: N(Ot).min(1) }), F({ type: se("not"), c: vn }), F({ type: Y(["and", "or"]), a: vn, b: vn })])), Jb = F({ ...bn, kind: se("knights"), size: L().int().min(2).max(5), speakers: N(Ot).min(2).max(5), statements: N(F({ id: E().regex(/^t\d+$/, "a statement id such as t1"), speaker: Ot, claim: vn })).min(1), solution: Q(E(), Y(["knight", "knave"])) }), wn = F({ key: E().regex(/^[a-z][a-z0-9_]*$/, "a key such as clock"), value: E().min(1) }), Qb = F({ ...bn, kind: se("testimony"), size: L().int().min(2).max(10), witness: se("wit"), keys: N(F({ key: wn.shape.key, label: E().optional(), values: N(E().min(1)).min(2), item: E().optional(), claim: E().optional(), fact: E().optional() })).min(1), statements: N(F({ id: E().regex(/^t\d+$/, "a statement id such as t1"), claims: N(wn).min(1), press: F({ claims: N(wn).min(1) }).optional() })).min(2), evidence: N(F({ id: E().regex(/^e\d+$/, "an evidence id such as e1"), facts: N(wn).min(1) })).min(1), solution: F({ statement: E(), evidence: E(), press: J().optional() }) }), Xb = F({ id: E().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([ce, At([ce, ce])]), b: et([ce, At([ce, ce])]), n: L().int().min(1).optional() }), ev = F({ ...bn, kind: se("logic"), size: L().int().min(3).max(5), categories: N(F({ key: E(), items: N(ce).min(3), ref: E().optional() })).min(3).max(5), ordinal: F({ category: E(), unit: E().optional() }), hardTrans: L().int().optional(), solution: Q(E(), Q(E(), ce)), clues: N(Xb).min(1) }), tv = F({ id: E().regex(qi), options: N(E().regex(qi)).min(2).max(6), answer: E().regex(qi) }).superRefine((t, e) => {
    t.options.includes(t.answer) || e.addIssue({ code: Di.custom, path: ["answer"], message: 'answer "'.concat(t.answer, '" is not in options') });
  }), sv = F({ format: se(Ki).optional(), band: Y(kn).optional(), steps: N(Gi).optional(), kind: se("quiz"), seed: L().int(), questions: N(tv).min(1).max(10), solution: Q(E(), E()), difficulty: Ic }).superRefine((t, e) => {
    const s = /* @__PURE__ */ new Set();
    for (const n of t.questions) s.has(n.id) && e.addIssue({ code: Di.custom, path: ["questions"], message: 'duplicate question id "'.concat(n.id, '"') }), s.add(n.id), t.solution[n.id] !== n.answer && e.addIssue({ code: Di.custom, path: ["solution", n.id], message: 'solution["'.concat(n.id, '"] must match question answer "').concat(n.answer, '"') });
  }), Mc = Ni("kind", [Yb, Jb, Qb, ev, sv]);
  La(Mc, F({ names: Q(E(), E()), text: Q(E(), E()) })), F({ unique: J(), solutions: L().int(), deducible: J(), band: Y(kn).nullable(), score: L(), steps: N(Gi), rules: Q(E(), L()) }), F({ key: E().regex(/^[a-z][a-z0-9_]*$/, "lowercase letters, digits and underscores, starting with a letter"), kind: Y(Wb), data: Mc, names: Q(E(), E()), text: Q(E(), E()), links: Q(E(), F({ type: Y(["character", "place", "image"]), key: E() })).optional(), clueAt: Q(E(), E()).optional(), onFail: F({ mode: Y(["retry", "continue", "chapter"]), to: L().int().positive().optional(), maxTries: L().int().positive().optional() }).optional(), hints: J().optional(), verified: F({ unique: J(), deducible: J(), score: L(), textChecked: J(), by: E() }) }), F({ names: Q(E(), E()), text: Q(E(), E()) }), et([F({ id: E(), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([E(), N(E()).length(2)]), b: et([E(), N(E()).length(2)]), n: L().int().optional() }), F({ id: E(), speaker: E(), claim: Q(E(), Et()) }), F({ id: E(), truthTellers: E(), liars: E() }), F({ id: E(), claims: N(F({ key: E(), value: E() })).optional(), facts: N(F({ key: E(), value: E() })).optional() }).refine((t) => t.claims !== void 0 || t.facts !== void 0, "testimony entry needs claims or facts"), F({ id: E(), prompt: E().optional(), options: N(E()).optional(), answer: E().optional() }).passthrough()]);
  const We = Ki, Vt = ["clue", "elim", "last", "either", "order", "trans"], nv = { clue: 1, elim: 1, last: 2, either: 2, order: 2, trans: 3 }, bs = kn, Oc = ["clue", "elim", "last"];
  class Z extends Error {
    constructor(e) {
      super(e), this.name = "PuzzleError";
    }
  }
  function vs(t) {
    const e = {};
    for (let s = 0; s < t.categories.length; s++) for (const n of t.categories[s].items) e[n] = s;
    return e;
  }
  function Yt(t, e) {
    const n = vs(t)[e];
    if (n === void 0) throw new Z("unknown item ".concat(e));
    return t.categories[n].key;
  }
  function Re(t) {
    const e = t.includes("|") ? t.split("|") : t.split(",");
    if (e.length !== 2) throw new Z('invalid cell key "'.concat(t, '"'));
    return [e[0], e[1]];
  }
  function it(t) {
    const e = t.categories, s = [];
    for (let n = 0; n < e.length; n++) for (let i = n + 1; i < e.length; i++) for (const r of e[n].items) for (const o of e[i].items) s.push("".concat(r, "|").concat(o));
    return s;
  }
  function Nt(t) {
    const e = t.categories[0].items, s = {};
    for (const n of e) s[n] = n;
    for (const n of e) {
      const i = t.solution[n];
      if (i) for (let r = 1; r < t.categories.length; r++) {
        const o = t.categories[r].key, a = i[o];
        a && (s[a] = n);
      }
    }
    return s;
  }
  function yn(t) {
    const e = t.ordinal;
    if (!e) return null;
    for (const s of t.categories) if (s.key === e.category) return [...s.items];
    throw new Z('no ordinal category "'.concat(e.category, '"'));
  }
  function Nc(t, e, s) {
    const n = t[s];
    for (let i = 0; i < e.length; i++) if (t[e[i]] === n) return i;
    throw new Z("".concat(s, " has no place in the ordinal category"));
  }
  function Wi(t, e, s) {
    const n = t.type;
    if (n === "is") return e[t.a] === e[t.b];
    if (n === "not") return e[t.a] !== e[t.b];
    if (n === "either") return t.b.some((i) => e[t.a] === e[i]);
    if (n === "neither") return t.b.every((i) => e[t.a] !== e[i]);
    if (n === "oneof") {
      const [i, r] = t.a, [o, a] = t.b;
      return e[i] === e[o] && e[r] === e[a] || e[i] === e[a] && e[r] === e[o];
    }
    if (n === "before" || n === "after" || n === "apart") {
      if (!s) throw new Z("an order clue needs an ordinal category");
      const i = Nc(e, s, t.a), r = Nc(e, s, t.b);
      if (n === "before") return i < r;
      if (n === "after") return i > r;
      if (typeof t.n != "number" || t.n < 1) throw new Z("an apart clue needs the number n");
      return Math.abs(i - r) === t.n;
    }
    throw new Z('unknown clue type "'.concat(n, '"'));
  }
  function Pc(t) {
    const e = [];
    for (const s of ["a", "b"]) {
      const n = t[s];
      Array.isArray(n) ? e.push(...n) : n !== void 0 && e.push(n);
    }
    return e;
  }
  function Hi(t) {
    var _a3, _b3;
    const e = t.murder.place;
    for (const s of t.categories[0].items) if (((_a3 = t.solution[s]) == null ? void 0 : _a3.place) === e) {
      const n = { suspect: s, weapon: t.solution[s].weapon, place: e };
      return ((_b3 = t.solution[s]) == null ? void 0 : _b3.motive) && (n.motive = t.solution[s].motive), n;
    }
    throw new Z("nobody was at the murder place");
  }
  function Rc(t) {
    var _a3;
    if (t.format !== void 0 && t.format !== We) throw new Z("unknown puzzle format ".concat(t.format));
    const e = t.categories || [];
    if (e.length < 3) throw new Z("a puzzle has at least 3 categories");
    const s = e[0].items.length, n = /* @__PURE__ */ new Set();
    for (const i of e) {
      if (i.items.length !== s) throw new Z("every category needs ".concat(s, " items"));
      for (const r of i.items) {
        if (n.has(r)) throw new Z("item ".concat(r, " is listed twice"));
        n.add(r);
      }
    }
    if (!t.solution) throw new Z("puzzle has no solution");
    for (const i of e[0].items) {
      const r = t.solution[i];
      if (!r) throw new Z("no solution for ".concat(i));
      for (let o = 1; o < e.length; o++) {
        const a = e[o].key;
        if (!e[o].items.includes(r[a])) throw new Z("the solution of ".concat(i, " has no valid ").concat(a));
      }
    }
    for (let i = 1; i < e.length; i++) {
      const r = e[i].key, o = e[0].items.map((a) => t.solution[a][r]);
      if (new Set(o).size !== s) throw new Z("each ".concat(r, " must be used once"));
    }
    for (const i of t.clues || []) {
      if (!["is", "not", "either", "neither", "oneof", "before", "after", "apart"].includes(i.type)) throw new Z('unknown clue type "'.concat(i.type, '"'));
      if (i.type === "apart" && (typeof i.n != "number" || i.n < 1)) throw new Z("an apart clue needs the number n");
      if ((i.type === "before" || i.type === "after" || i.type === "apart") && !t.ordinal) throw new Z("an order clue needs an ordinal category");
      for (const r of Pc(i)) if (!n.has(r)) throw new Z("clue ".concat((_a3 = i.id) != null ? _a3 : "", " names the unknown item ").concat(r));
    }
  }
  const Jt = "knight", ws = "knave", iv = { direct: 1, split: 4 }, Dc = ["Aldo", "Brin", "Cass", "Dara", "Evo"];
  function ys(t) {
    const e = t.type;
    if (e === "knight" || e === "knave") return /* @__PURE__ */ new Set([t.who]);
    if (e === "same" || e === "diff") return /* @__PURE__ */ new Set([t.a, t.b]);
    if (e === "some_knave" || e === "all_knight" || e === "exactly") return new Set(t.of);
    if (e === "not") return ys(t.c);
    if (e === "and" || e === "or") {
      const s = ys(t.a), n = ys(t.b);
      return /* @__PURE__ */ new Set([...s, ...n]);
    }
    throw new Z('unknown claim type "'.concat(e, '"'));
  }
  function rt(t, e) {
    const s = t.type;
    if (s === "knight") return !!e[t.who];
    if (s === "knave") return !e[t.who];
    if (s === "same") return e[t.a] === e[t.b];
    if (s === "diff") return e[t.a] !== e[t.b];
    if (s === "some_knave") return t.of.some((n) => !e[n]);
    if (s === "all_knight") return t.of.every((n) => !!e[n]);
    if (s === "exactly") return t.of.filter((n) => !!e[n]).length === t.k;
    if (s === "not") return !rt(t.c, e);
    if (s === "and") return rt(t.a, e) && rt(t.b, e);
    if (s === "or") return rt(t.a, e) || rt(t.b, e);
    throw new Z('unknown claim type "'.concat(s, '"'));
  }
  function* rv(t) {
    const e = t.length, s = 1 << e;
    for (let n = 0; n < s; n++) {
      const i = {};
      for (let r = 0; r < e; r++) i[t[r]] = (n & 1 << r) !== 0;
      yield i;
    }
  }
  function ov(t, e) {
    return t.every((s) => e[s.speaker] === rt(s.claim, e));
  }
  function av(t, e = 2, s) {
    const n = s != null ? s : t.statements;
    let i = 0;
    for (const r of rv(t.speakers)) if (ov(n, r) && (i++, i >= e)) break;
    return i;
  }
  const Sn = av;
  function Lc(t) {
    const e = {};
    for (const [s, n] of Object.entries(t.solution)) e[s] = n === Jt;
    return e;
  }
  function cv(t, e) {
    const s = Array.from(/* @__PURE__ */ new Set([t.speaker, ...ys(t.claim)])).sort(), n = s.filter((o) => e[o] === void 0), i = [], r = 1 << n.length;
    for (let o = 0; o < r; o++) {
      const a = {};
      for (const c of s) e[c] !== void 0 && (a[c] = e[c]);
      for (let c = 0; c < n.length; c++) a[n[c]] = (o & 1 << c) !== 0;
      a[t.speaker] === rt(t.claim, a) && i.push(a);
    }
    return [i, n];
  }
  function Vi(t, e, s) {
    let n = true;
    for (; n; ) {
      n = false;
      for (const i of t) {
        const [r, o] = cv(i, e);
        if (r.length === 0) return i.id;
        for (const a of o) {
          const c = new Set(r.map((l) => l[a]));
          if (c.size === 1) {
            const l = c.values().next().value;
            e[a] = l, s !== null && s.push({ rule: "direct", statement: i.id, who: a, value: l ? Jt : ws }), n = true;
          }
        }
      }
    }
    return null;
  }
  function Ss(t, e, s, n) {
    var _a3, _b3;
    const i = {};
    for (const o of s) i[o.rule] = ((_a3 = i[o.rule]) != null ? _a3 : 0) + 1;
    const r = Object.entries(i).reduce((o, [a, c]) => {
      var _a4;
      return o + ((_a4 = iv[a]) != null ? _a4 : 1) * c;
    }, 0);
    return { solved: n && Object.keys(e).length === t.speakers.length, steps: s, rules: i, score: r, splits: (_b3 = i.split) != null ? _b3 : 0 };
  }
  function lv(t, e) {
    const s = e != null ? e : t.statements, n = [], i = {};
    if (Vi(s, i, n) !== null) return Ss(t, i, n, false);
    for (; Object.keys(i).length < t.speakers.length; ) {
      let a = false;
      const c = t.speakers.filter((l) => i[l] === void 0);
      for (const l of c) {
        const u = {};
        for (const h of [true, false]) {
          const p = { ...i, [l]: h };
          u[String(h)] = Vi(s, p, null);
        }
        if (u.true !== null && u.false !== null) return Ss(t, i, n, false);
        if (u.true !== null || u.false !== null) {
          const h = u.true !== null;
          if (i[l] = !h, n.push({ rule: "split", who: l, value: h ? ws : Jt, contradicts: h ? Jt : ws, statement: u[String(h)] }), Vi(s, i, n) !== null) return Ss(t, i, n, false);
          a = true;
          break;
        }
      }
      if (!a) return Ss(t, i, n, false);
    }
    const r = Lc(t), o = t.speakers.every((a) => i[a] === r[a]);
    return Ss(t, i, n, o);
  }
  const Cc = lv;
  function uv(t) {
    var _a3;
    const e = (_a3 = t.splits) != null ? _a3 : 0;
    return e === 0 ? "easy" : e === 1 ? "medium" : "hard";
  }
  const dv = uv;
  function hv(t) {
    var _a3, _b3;
    if (t.format !== void 0 && t.format !== We) throw new Z("unknown puzzle format ".concat(t.format));
    if (t.kind !== "knights") throw new Z("not a knights puzzle");
    const e = t.speakers || [];
    if (e.length < 2 || e.length > 5 || new Set(e).size !== e.length) throw new Z("a Knights and Knaves puzzle has 2 to 5 different speakers");
    for (const n of e) if (((_a3 = t.solution) == null ? void 0 : _a3[n]) !== Jt && ((_b3 = t.solution) == null ? void 0 : _b3[n]) !== ws) throw new Z("the solution has no knight or knave for ".concat(n));
    const s = /* @__PURE__ */ new Set();
    for (const n of t.statements || []) {
      if (s.has(n.id)) throw new Z("statement ".concat(n.id, " is listed twice"));
      if (s.add(n.id), !e.includes(n.speaker)) throw new Z("statement ".concat(n.id, " has an unknown speaker ").concat(n.speaker));
      for (const i of ys(n.claim)) if (!e.includes(i)) throw new Z("statement ".concat(n.id, " names the unknown speaker ").concat(i));
    }
  }
  function pv(t) {
    hv(t);
    const e = Lc(t);
    for (const n of t.statements) if (e[n.speaker] !== rt(n.claim, e)) throw new Z("statement ".concat(n.id, " does not hold in the solution"));
    if (Sn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const s = Cc(t);
    if (!s.solved) throw new Z("the puzzle cannot be solved without guessing");
    return s;
  }
  function fv(t) {
    return t.length === 0 ? "" : t.length === 1 ? t[0] : t.slice(0, -1).join(", ") + " and " + t[t.length - 1];
  }
  function $n(t) {
    const e = t.split(" ")[0];
    return ["At", "All", "Exactly", "It", "Either"].includes(e != null ? e : "") ? t[0].toLowerCase() + t.slice(1) : t;
  }
  function Qt(t, e, s) {
    const n = e.type;
    let i = "";
    if (e.of && (i = e.of.length === t.speakers.length && e.of.every((o) => t.speakers.includes(o)) ? "us" : fv(e.of.map((o) => s[o]))), n === "knight") return "".concat(s[e.who], " is a knight");
    if (n === "knave") return "".concat(s[e.who], " is a knave");
    if (n === "same") return "".concat(s[e.a], " and ").concat(s[e.b], " are the same kind");
    if (n === "diff") return "".concat(s[e.a], " and ").concat(s[e.b], " are different kinds");
    if (n === "some_knave") return "At least one of ".concat(i, " is a knave");
    if (n === "all_knight") return "All of ".concat(i, " are knights");
    if (n === "exactly") return "Exactly ".concat(e.k, " of ").concat(i, " ").concat(e.k === 1 ? "is a knight" : "are knights");
    if (n === "not") return "It is not true that ".concat($n(Qt(t, e.c, s)));
    if (n === "and") return "".concat(Qt(t, e.a, s), ", and ").concat($n(Qt(t, e.b, s)));
    if (n === "or") return "Either ".concat($n(Qt(t, e.a, s)), ", or ").concat($n(Qt(t, e.b, s)));
    throw new Z("no sentence for a ".concat(n, " claim"));
  }
  function mv(t, e, s) {
    return "".concat(s[e.speaker], ' says: "').concat(Qt(t, e.claim, s), '."');
  }
  function Zc(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.speakers.length; n++) {
      const i = t.speakers[n];
      s[i] = (_b3 = e[i]) != null ? _b3 : n < Dc.length ? Dc[n] : i;
    }
    return s;
  }
  function Uc(t, e) {
    const s = Zc(t);
    t.names = s, t.text = {};
    for (const n of t.statements) t.text[n.id] = mv(t, n, s);
    return t.text.intro = "On this island knights always tell the truth and knaves always lie. Who is a knight and who is a knave?", t;
  }
  function gv(t, e, s = 2) {
    const n = [];
    for (let i = s; i <= e.length; i++) {
      const r = 1 << e.length;
      for (let o = 0; o < r; o++) {
        let a = 0;
        for (let c = 0; c < e.length; c++) o & 1 << c && a++;
        if (a === i) {
          const c = [];
          for (let l = 0; l < e.length; l++) o & 1 << l && c.push(e[l]);
          n.push(c);
        }
      }
    }
    return t.shuffle(n), n.slice(0, 8);
  }
  function kv(t, e, s) {
    const n = [];
    for (const i of e) n.push({ type: "knight", who: i }), n.push({ type: "knave", who: i });
    for (let i = 0; i < e.length; i++) for (let r = i + 1; r < e.length; r++) n.push({ type: "same", a: e[i], b: e[r] }), n.push({ type: "diff", a: e[i], b: e[r] });
    if (s !== "easy") for (const i of gv(t, e)) {
      n.push({ type: "some_knave", of: i }), n.push({ type: "all_knight", of: i });
      for (let r = 0; r <= i.length; r++) n.push({ type: "exactly", k: r, of: i });
    }
    if (s === "hard") {
      const i = n.filter((r) => ["knight", "knave", "same", "diff"].includes(r.type));
      for (let r = 0; r < 12; r++) {
        const [o, a] = t.sample(i, 2);
        n.push({ type: t.choice(["and", "or"]), a: o, b: a });
      }
      for (const r of t.sample(i, Math.min(4, i.length))) n.push({ type: "not", c: r });
    }
    return t.shuffle(n), n;
  }
  function zn(t, e) {
    return { ...t, statements: e.map((s, n) => ({ ...s, id: "t".concat(n + 1) })) };
  }
  function bv(t = 3, e = 0, s = "medium", n = 400) {
    if (t < 2 || t > 5) throw new Z("Knights and Knaves has 2 to 5 speakers, not ".concat(t));
    if (!bs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const i = new st("vno-puzzles:knights:".concat(e, ":").concat(s, ":").concat(t)), r = Array.from({ length: t }, (o, a) => "k".concat(a + 1));
    for (let o = 0; o < n; o++) {
      const a = {};
      for (const v of r) a[v] = i.random() < 0.5;
      if (t >= 3 && (Object.values(a).every(Boolean) || !Object.values(a).some(Boolean))) continue;
      const c = [];
      for (const v of kv(i, r, s)) for (const w of r) a[w] === rt(v, a) && !((v.type === "knight" || v.type === "knave") && v.who === w) && c.push({ speaker: w, claim: v });
      i.shuffle(c);
      const l = {};
      for (const v of r) l[v] = a[v] ? Jt : ws;
      const u = { format: We, kind: "knights", size: t, seed: e, band: s, speakers: r, solution: l }, h = [];
      for (const v of c) {
        h.push(v);
        const w = zn(u, h);
        if (Sn(w, 2) === 1) break;
      }
      if (Sn(zn(u, h), 2) !== 1) continue;
      const p = [...h];
      for (const v of r) if (!p.some((w) => w.speaker === v)) {
        const w = c.find((y) => y.speaker === v && !p.includes(y));
        w && p.push(w);
      }
      const f = Array.from({ length: p.length }, (v, w) => w);
      i.shuffle(f);
      const m = /* @__PURE__ */ new Set();
      for (const v of f) {
        const w = p.filter((y, $) => $ !== v && !m.has($));
        r.every((y) => w.some(($) => $.speaker === y)) && Sn(zn(u, w), 2) === 1 && m.add(v);
      }
      const g = p.filter((v, w) => !m.has(w));
      if (new Set(g.map((v) => v.speaker)).size !== r.length) continue;
      i.shuffle(g);
      const k = zn(u, g), b = Cc(k);
      if (!(!b.solved || dv(b) !== s)) return k.difficulty = { steps: b.steps.length, score: b.score, rules: b.rules }, k.steps = b.steps, Uc(k);
    }
    throw new Z("no ".concat(s, " knights puzzle found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function vv(t, e) {
    const s = t.speakers.filter((n) => e[n] !== t.solution[n]);
    return { correct: s.length === 0, wrong: s };
  }
  const _n = [{ key: "clock", label: "the hour the clock struck", values: ["nine", "ten", "eleven", "twelve"], item: "pocket watch", claim: "I heard the clock strike {v} just before the scream", fact: "It is stopped, and it reads {v} o'clock" }, { key: "door", label: "the state of the study door", values: ["locked", "open", "ajar"], item: "key log", claim: "The study door was {v} when I passed it", fact: "It says the study door was {v} that evening" }, { key: "lamp", label: "the hall lamp", values: ["lit", "dark", "dim"], item: "photograph", claim: "The lamp in the hall was {v}", fact: "It shows the hall lamp {v}" }, { key: "weather", label: "the weather that night", values: ["raining", "dry", "foggy"], item: "weather report", claim: "It was {v} outside", fact: "It says it was {v} that night" }, { key: "weapon", label: "what lay on the table", values: ["rope", "candlestick", "poison", "dagger"], item: "inventory", claim: "I saw the {v} on the table", fact: "It lists the {v} on the table" }, { key: "guest", label: "who left first", values: ["the doctor", "the colonel", "the cook"], item: "guest list", claim: "{v} left first", fact: "It shows {v} leaving first" }, { key: "window", label: "the library window", values: ["shut", "broken", "wide open"], item: "repair bill", claim: "The library window was {v}", fact: "It records the library window as {v}" }, { key: "shoes", label: "the shoes by the door", values: ["muddy", "polished", "missing"], item: "boot print", claim: "The shoes by the door were {v}", fact: "It shows the shoes by the door {v}" }], wv = Object.fromEntries(_n.map((t) => [t.key, t])), yv = { easy: [4, 3], medium: [5, 4], hard: [6, 5] }, Sv = "Mr Halloran";
  function Yi(t) {
    const e = /* @__PURE__ */ new Set();
    for (const s of t || []) e.add("".concat(s.key, "|").concat(s.value));
    return e;
  }
  function Ji(t) {
    return [...t.claims || [], ...t.press && t.press.claims || []];
  }
  function Qi(t, e, s) {
    const n = t.statements, i = t.evidence, r = [];
    for (const o of n) {
      const a = (o.press && o.press.claims || []).map((l) => ({ ...l, via: true })), c = (o.claims || []).map((l) => ({ ...l, via: false }));
      for (const l of [...c, ...a]) for (const u of i) for (const h of u.facts) h.key === l.key && h.value !== l.value && r.push({ statement: o.id, evidence: u.id, key: l.key, claim: l.value, fact: h.value, press: l.via });
    }
    return r;
  }
  function Xi(t) {
    let e = 0;
    for (const s of t.statements) for (const n of Ji(s)) for (const i of t.evidence) for (const r of i.facts) r.key === n.key && r.value === n.value && e++;
    return e;
  }
  function $v(t) {
    var _a3, _b3;
    const e = [], s = {};
    for (const o of t.statements) {
      const a = Array.from(Yi(o.claims)).sort().join(",");
      s[a] && e.push("".concat(o.id, " says what ").concat(s[a], " says")), s[a] = o.id;
      const c = Yi((_a3 = o.press) == null ? void 0 : _a3.claims), l = Yi(o.claims);
      if (c.size > 0) {
        let u = true;
        for (const p of c) l.has(p) || (u = false);
        u && e.push("the press line of ".concat(o.id, " only repeats the statement"));
        const h = new Set(o.claims.map((p) => p.key));
        for (const [p] of Array.from(c).map((f) => f.split("|"))) h.has(p) && e.push("the press line of ".concat(o.id, " is about the same thing as the statement"));
      }
    }
    const n = {};
    for (const o of t.statements) for (const a of o.claims) n[a.key] && e.push("".concat(n[a.key], " and ").concat(o.id, " both claim something about ").concat(a.key)), n[a.key] = o.id;
    const i = {};
    for (const o of t.statements) for (const a of ((_b3 = o.press) == null ? void 0 : _b3.claims) || []) i[a.key] && e.push("the press lines of ".concat(i[a.key], " and ").concat(o.id, " are about the same thing (").concat(a.key, ")")), i[a.key] = o.id;
    const r = {};
    for (const o of t.evidence) for (const a of o.facts) r[a.key] && e.push("".concat(r[a.key], " and ").concat(o.id, " show the same fact (").concat(a.key, ")")), r[a.key] = o.id;
    return e;
  }
  function zv(t, e) {
    return (e != null ? e : Qi(t)).some((i) => i.press) ? Xi(t) >= 4 ? "hard" : "medium" : "easy";
  }
  const Bc = zv;
  function _v(t) {
    if (t.format !== void 0 && t.format !== We) throw new Z("not a testimony puzzle of format ".concat(We));
    if (t.kind !== "testimony") throw new Z("not a testimony puzzle");
    const e = {};
    for (const r of t.keys || []) e[r.key] = r;
    if (Object.keys(e).length === 0) throw new Z("a testimony puzzle needs keys (the vocabulary of the facts)");
    for (const r of Object.values(e)) if (!r.values || r.values.length < 2) throw new Z("key ".concat(r.key, " needs at least two values"));
    const s = /* @__PURE__ */ new Set();
    for (const r of t.statements || []) {
      if (s.has(r.id)) throw new Z("statement ".concat(r.id, " is listed twice"));
      s.add(r.id);
      for (const o of Ji(r)) if (!e[o.key] || !e[o.key].values.includes(o.value)) throw new Z("statement ".concat(r.id, " claims ").concat(o.key, "=").concat(o.value, ", which is not in the keys"));
    }
    if ((t.statements || []).length < 2) throw new Z("a testimony needs at least two statements");
    const n = /* @__PURE__ */ new Set();
    for (const r of t.evidence || []) {
      if (n.has(r.id) || s.has(r.id)) throw new Z("id ".concat(r.id, " is used twice"));
      n.add(r.id);
      for (const o of r.facts) if (!e[o.key] || !e[o.key].values.includes(o.value)) throw new Z("evidence ".concat(r.id, " shows ").concat(o.key, "=").concat(o.value, ", which is not in the keys"));
    }
    if (n.size === 0) throw new Z("a testimony needs evidence");
    const i = t.solution || {};
    if (!s.has(i.statement) || !n.has(i.evidence)) throw new Z("the solution names a statement or evidence that is not there");
  }
  function jv(t, e) {
    const s = [{ rule: "look", statement: e.statement, who: e.evidence, value: e.key }];
    return e.press && s.push({ rule: "press", statement: e.statement, value: "" }), s.push({ rule: "present", statement: e.statement, who: e.evidence, value: "" }), s;
  }
  function Fc(t) {
    _v(t);
    const e = Qi(t), s = t.solution, n = e.length === 1 && e[0].statement === s.statement && e[0].evidence === s.evidence && e[0].press === !!s.press, i = e.length === 1 ? jv(t, e[0]) : [], r = t.statements.length * t.evidence.length + Xi(t) + (e.length > 0 && e.some((o) => o.press) ? 3 : 0);
    return { unique: e.length === 1, solutions: e.length, deducible: n, band: n ? Bc(t, e) : null, steps: i, score: r, rules: { clash: e.length, near: Xi(t) } };
  }
  function xv(t) {
    const e = Fc(t);
    if (!e.unique) throw new Z("the testimony has ".concat(e.solutions, " clashes, not one"));
    if (!e.deducible) throw new Z("the clash is not the pair the solution names");
    return e;
  }
  function er(t, e) {
    for (const s of t.keys) if (s.key === e) return s;
    throw new Z('no key "'.concat(e, '"'));
  }
  function Kc(t, e) {
    var _a3;
    const s = er(t, e.key), i = ((_a3 = s.claim) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
    return i.length > 0 ? i[0].toUpperCase() + i.slice(1) : i;
  }
  function Ev(t, e) {
    var _a3;
    const s = er(t, e.key);
    return ((_a3 = s.fact) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
  }
  function qc(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = { wit: (_b3 = e.wit) != null ? _b3 : Sv }, n = {};
    for (const i of t.evidence) {
      const o = (_c2 = er(t, i.facts[0].key).item) != null ? _c2 : i.id;
      n[o] = ((_d2 = n[o]) != null ? _d2 : 0) + 1, s[i.id] = (_e2 = e[i.id]) != null ? _e2 : n[o] === 1 ? o : "".concat(o, " ").concat(n[o]);
    }
    return s;
  }
  function Gc(t, e) {
    var _a3;
    const s = qc(t);
    t.names = s;
    const i = { intro: "".concat(s.wit, " is giving testimony. Press a statement to hear more, and present the evidence that proves one of them false.") };
    for (const r of t.statements) {
      i[r.id] = "".concat(r.claims.map((a) => Kc(t, a)).join(". "), ".");
      const o = ((_a3 = r.press) == null ? void 0 : _a3.claims) || [];
      o.length > 0 && (i["".concat(r.id, ".press")] = "Now that you ask. ".concat(o.map((a) => Kc(t, a)).join(". "), "."));
    }
    for (const r of t.evidence) i[r.id] = "".concat(s[r.id], ": ").concat(r.facts.map((o) => Ev(t, o)).join(". "), ".");
    return t.text = i, t;
  }
  function Av(t, e = 0, s = "medium", n = 200) {
    if (!bs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const [i, r] = yv[s], o = new st("vno-puzzles:testimony:".concat(e, ":").concat(s));
    for (let a = 0; a < n; a++) {
      const c = {};
      for (const S of _n) c[S.key] = o.choice(S.values);
      const l = _n.map((S) => S.key), u = (S, A = true) => {
        const j = wv[S].values, I = A ? c[S] : o.choice(j.filter((D) => D !== c[S]));
        return { key: S, value: I };
      }, h = o.choice(l), p = s !== "easy", f = l.filter((S) => S !== h), m = o.randrange(i), g = o.sample(f, p ? i : i - 1), k = new Set(g), b = [], v = p ? [h] : [];
      for (let S = 0; S < i; S++) {
        let A;
        if (S === m) if (p) {
          const j = g.pop();
          A = { claims: [u(j)], press: { claims: [u(h, false)] } };
        } else A = { claims: [u(h, false)] };
        else {
          const j = g.pop();
          if (A = { claims: [u(j)] }, p && o.random() < 0.5) {
            const I = f.filter((D) => !k.has(D) && !v.includes(D));
            if (I.length > 0) {
              const D = o.choice(I);
              v.push(D), A.press = { claims: [u(D)] };
            }
          }
        }
        b.push(A);
      }
      const w = o.sample(f, r - 1), y = [{ facts: [u(h)] }, ...w.map((S) => ({ facts: [u(S)] }))];
      if (s === "hard") {
        const S = f.filter((A) => !w.includes(A));
        for (let A = 1; A < y.length; A++) if (S.length > 0 && o.random() < 0.5) {
          const j = o.randrange(S.length);
          y[A].facts.push(u(S[j])), S.splice(j, 1);
        }
      }
      o.shuffle(y);
      for (let S = 0; S < b.length; S++) b[S].id = "t".concat(S + 1);
      for (let S = 0; S < y.length; S++) y[S].id = "e".concat(S + 1);
      const $ = b[m].id, x = y.find((S) => S.facts[0].key === h && S.facts[0].value === c[h] && S.facts.filter((A) => A.key === h).length === 1).id, _ = /* @__PURE__ */ new Set();
      for (const S of b) for (const A of Ji(S)) _.add(A.key);
      for (const S of y) for (const A of S.facts) _.add(A.key);
      const z = { format: We, kind: "testimony", size: i, seed: e, band: s, witness: "wit", keys: _n.filter((S) => _.has(S.key)).map((S) => ({ ...S })), statements: b, evidence: y, solution: { statement: $, evidence: x, press: p } };
      if ($v(z).length > 0) continue;
      const O = Qi(z);
      if (O.length !== 1 || O[0].statement !== $ || O[0].evidence !== x || Bc(z, O) !== s) continue;
      const R = Fc(z);
      return z.difficulty = { steps: R.steps.length, score: R.score, rules: R.rules }, z.steps = R.steps, Gc(z);
    }
    throw new Z("no ".concat(s, " testimony found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  const Tv = [{ prompt: "Who was observed in the grand library shortly before the grandfather clock struck nine?", correct: "Colonel Ash", distractors: ["Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"] }, { prompt: "Which weapon was retrieved from the locked conservatory display case?", correct: "antique dagger", distractors: ["silver candlestick", "braided rope", "heavy vase", "vial of poison"] }, { prompt: "Where was the secret passage behind the book shelves discovered?", correct: "study", distractors: ["wine cellar", "ballroom", "billiard room", "observatory"] }, { prompt: "What piece of physical evidence directly contradicted the witness testimony?", correct: "stopped pocket watch", distractors: ["torn letter", "muddy boot print", "forged will", "broken seal"] }, { prompt: "Which motive was confirmed by the intercepted encrypted ledger?", correct: "blackmail", distractors: ["jealousy", "inheritance", "professional rivalry", "political revenge"] }, { prompt: "What unusual scent was noted lingering near the crime scene?", correct: "bitter almonds", distractors: ["burnt pipe tobacco", "damp earth", "lavender water", "kerosene"] }, { prompt: "Who was the last person seen leaving through the side garden gate?", correct: "the hooded courier", distractors: ["the estate groundskeeper", "the evening maid", "the carriage driver", "the visiting doctor"] }, { prompt: "What item was found concealed beneath the floorboards in the attic?", correct: "brass key", distractors: ["leather diary", "ruby pendant", "stained handkerchief", "wax seal stamp"] }, { prompt: "At what time did the station train arrive on the night of the incident?", correct: "ten forty-five", distractors: ["nine fifteen", "eleven thirty", "midnight sharp", "ten o clock"] }, { prompt: "Which room had its window latch deliberately forced open from the inside?", correct: "parlor", distractors: ["scullery", "music room", "dining hall", "guest bedroom"] }];
  function Iv(t) {
    var _a3;
    return (_a3 = t.names) != null ? _a3 : {};
  }
  function Mv(t, e) {
    var _a3, _b3, _c2, _d2, _e2;
    const s = { ...(_a3 = t.names) != null ? _a3 : {} };
    for (const i of t.questions || []) for (const r of i.options || []) s[r] || (s[r] = r);
    const n = { intro: (_c2 = (_b3 = t.text) == null ? void 0 : _b3.intro) != null ? _c2 : "Answer the following multiple-choice questions." };
    for (const i of t.questions || []) n[i.id] = (_e2 = (_d2 = t.text) == null ? void 0 : _d2[i.id]) != null ? _e2 : "Question ".concat(i.id);
    return { names: s, text: n };
  }
  function Ov(t = 0, e, s = "medium") {
    if (!bs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const i = Math.max(1, Math.min(10, e != null ? e : s === "easy" ? 3 : s === "medium" ? 4 : 5)), r = new st("vno-puzzles:quiz:".concat(t, ":").concat(s, ":").concat(i)), o = s === "easy" ? 2 : s === "medium" ? 3 : 4, a = r.sample(Tv, i), c = [], l = {}, u = {}, h = { intro: "Answer the following questions carefully based on the investigation." };
    for (let g = 0; g < a.length; g++) {
      const k = a[g], b = "q".concat(g + 1);
      h[b] = k.prompt;
      const v = r.sample(k.distractors, o), w = [k.correct, ...v];
      r.shuffle(w);
      const y = [];
      let $ = "";
      for (let x = 0; x < w.length; x++) {
        const _ = "".concat(b, "_o").concat(x + 1);
        y.push(_), u[_] = w[x], w[x] === k.correct && ($ = _);
      }
      c.push({ id: b, options: y, answer: $ }), l[b] = $;
    }
    const p = s === "hard" ? 3 : s === "medium" ? 2 : 1, f = c.map((g) => ({ rule: "answer", who: g.id, value: g.answer })), m = { steps: i, score: i * p, rules: { quiz: i } };
    return { format: We, kind: "quiz", seed: t, band: s, questions: c, solution: l, difficulty: m, steps: f, names: u, text: h };
  }
  function Nv(t) {
    var _a3;
    if (t.format !== void 0 && t.format !== We) throw new Z("unknown puzzle format ".concat(t.format));
    if (t.kind !== "quiz") throw new Z("not a quiz puzzle");
    if (!Array.isArray(t.questions) || t.questions.length === 0 || t.questions.length > 10) throw new Z("a quiz puzzle must have between 1 and 10 questions");
    const e = /* @__PURE__ */ new Set();
    for (const s of t.questions) {
      if (e.has(s.id)) throw new Z('duplicate question id "'.concat(s.id, '"'));
      if (e.add(s.id), !Array.isArray(s.options) || s.options.length < 2 || s.options.length > 6) throw new Z('question "'.concat(s.id, '" options must have between 2 and 6 choices'));
      if (!s.options.includes(s.answer)) throw new Z('question "'.concat(s.id, '" answer "').concat(s.answer, '" is not in options'));
      if (((_a3 = t.solution) == null ? void 0 : _a3[s.id]) !== s.answer) throw new Z('solution["'.concat(s.id, '"] must match question answer "').concat(s.answer, '"'));
    }
  }
  function Pv(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    Nv(t);
    const e = (_a3 = t.steps) != null ? _a3 : t.questions.map((r) => ({ rule: "answer", who: r.id, value: r.answer })), s = (_c2 = (_b3 = t.difficulty) == null ? void 0 : _b3.score) != null ? _c2 : t.questions.length * 2, n = (_e2 = (_d2 = t.difficulty) == null ? void 0 : _d2.rules) != null ? _e2 : { quiz: t.questions.length };
    return { unique: true, solutions: 1, deducible: true, band: (_f2 = t.band) != null ? _f2 : "medium", steps: e, score: s, rules: n };
  }
  function Rv(t) {
    return Pv(t);
  }
  function Dv(t, e) {
    const s = [];
    for (const n of t.questions) e[n.id] !== n.answer && s.push(n.id);
    return { correct: s.length === 0, wrong: s, score: t.questions.length - s.length, total: t.questions.length };
  }
  const Wc = ["before", "after", "apart"];
  function Lv(t, e, s, n) {
    const i = t.categories, r = i[0].items, o = yn(t), a = [];
    for (let g = 1; g < i.length; g++) for (const k of i[g].items) a.push([g, k]);
    const c = {};
    for (let g = 0; g < a.length; g++) c[a[g][1]] = g;
    const l = o ? [...o] : [], u = Array.from({ length: a.length }, () => []);
    for (const g of e) {
      let k = Pc(g);
      Wc.includes(g.type) && (k = k.concat(l));
      let b = -1;
      for (const w of k) c[w] !== void 0 && c[w] > b && (b = c[w]);
      const v = Math.max(b, 0);
      v < u.length && u[v].push(g);
    }
    const h = {};
    for (const g of r) h[g] = g;
    const p = Array.from({ length: i.length }, () => /* @__PURE__ */ new Set());
    let f = 0;
    function m(g) {
      if (g === a.length) return f++, f >= s;
      const [k, b] = a[g];
      for (const v of r) if (!p[k].has(v)) {
        if (p[k].add(v), h[b] = v, u[g].every((w) => Wi(w, h, o)) && m(g + 1)) return true;
        p[k].delete(v);
      }
      return delete h[b], false;
    }
    return a.length > 0 && m(0), f;
  }
  function jn(t, e = 2, s) {
    return Lv(t, t.clues, e);
  }
  class Hc {
    constructor(e, s) {
      __publicField(this, "p");
      __publicField(this, "clues");
      __publicField(this, "idx");
      __publicField(this, "cats");
      __publicField(this, "ordinal");
      __publicField(this, "state");
      this.p = e, this.clues = s, this.idx = vs(e), this.cats = e.categories.map((n) => [...n.items]), this.ordinal = yn(e), this.state = /* @__PURE__ */ new Map();
      for (let n = 0; n < this.cats.length; n++) for (let i = n + 1; i < this.cats.length; i++) for (const r of this.cats[n]) for (const o of this.cats[i]) this.state.set(this.key(r, o), 0);
    }
    key(e, s) {
      return this.idx[e] < this.idx[s] ? "".concat(e, "|").concat(s) : "".concat(s, "|").concat(e);
    }
    get(e, s) {
      var _a3;
      return (_a3 = this.state.get(this.key(e, s))) != null ? _a3 : 0;
    }
    known() {
      for (const e of this.state.values()) if (e === 0) return false;
      return true;
    }
    positions(e) {
      const s = this.ordinal, n = s.indexOf(e);
      if (n !== -1) return /* @__PURE__ */ new Set([n]);
      const i = /* @__PURE__ */ new Set();
      for (let r = 0; r < s.length; r++) this.get(e, s[r]) !== -1 && i.add(r);
      return i;
    }
  }
  function* Cv(t) {
    for (const e of t.clues) {
      const s = e.type;
      if (s === "is") yield [t.key(e.a, e.b), 1, { clue: e.id }];
      else if (s === "not") yield [t.key(e.a, e.b), -1, { clue: e.id }];
      else if (s === "neither") for (const n of e.b) yield [t.key(e.a, n), -1, { clue: e.id }];
      else if (s === "either") {
        const n = t.cats[t.idx[e.b[0]]];
        for (const i of n) e.b.includes(i) || (yield [t.key(e.a, i), -1, { clue: e.id }]);
      } else if (s === "oneof") {
        const n = t.cats[t.idx[e.b[0]]];
        for (const i of e.a) for (const r of n) e.b.includes(r) || (yield [t.key(i, r), -1, { clue: e.id }]);
      }
    }
  }
  function* Zv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, i] = e.split("|"), r = t.cats[t.idx[i]];
      for (const a of r) a !== i && (yield [t.key(n, a), -1, { from: [[n, i]] }]);
      const o = t.cats[t.idx[n]];
      for (const a of o) a !== n && (yield [t.key(a, i), -1, { from: [[n, i]] }]);
    }
  }
  function* Uv(t) {
    for (let e = 0; e < t.cats.length; e++) for (let s = e + 1; s < t.cats.length; s++) {
      for (const n of t.cats[e]) {
        const i = t.cats[s].map((o) => t.key(n, o)), r = i.filter((o) => t.state.get(o) === 0);
        r.length === 1 && !i.some((o) => t.state.get(o) === 1) && (yield [r[0], 1, { from: i.filter((o) => o !== r[0]).map((o) => o.split("|")) }]);
      }
      for (const n of t.cats[s]) {
        const i = t.cats[e].map((o) => t.key(o, n)), r = i.filter((o) => t.state.get(o) === 0);
        r.length === 1 && !i.some((o) => t.state.get(o) === 1) && (yield [r[0], 1, { from: i.filter((o) => o !== r[0]).map((o) => o.split("|")) }]);
      }
    }
  }
  function* Bv(t) {
    for (const e of t.clues) if (e.type === "either") {
      const [s, n] = e.b;
      t.get(e.a, s) === -1 && (yield [t.key(e.a, n), 1, { clue: e.id, from: [t.key(e.a, s).split("|")] }]), t.get(e.a, n) === -1 && (yield [t.key(e.a, s), 1, { clue: e.id, from: [t.key(e.a, n).split("|")] }]);
    } else if (e.type === "oneof") {
      const [s, n] = e.a, [i, r] = e.b, o = [t.key(s, i), t.key(n, r)], a = [t.key(s, r), t.key(n, i)];
      if (o.some((c) => t.state.get(c) === -1)) for (const c of a) yield [c, 1, { clue: e.id, from: o.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
      if (a.some((c) => t.state.get(c) === -1)) for (const c of o) yield [c, 1, { clue: e.id, from: a.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
    }
  }
  function* Fv(t) {
    if (!t.ordinal) return;
    const e = t.ordinal;
    for (const s of t.clues) {
      const n = s.type;
      if (!Wc.includes(n)) continue;
      const i = s.a, r = s.b, o = t.positions(i), a = t.positions(r);
      let c;
      if (n === "before") c = (l, u) => l < u;
      else if (n === "after") c = (l, u) => l > u;
      else {
        const l = s.n;
        c = (u, h) => Math.abs(u - h) === l;
      }
      if (!e.includes(i)) for (const l of Array.from(o).sort((u, h) => u - h)) {
        let u = false;
        for (const h of a) if (c(l, h)) {
          u = true;
          break;
        }
        u || (yield [t.key(i, e[l]), -1, { clue: s.id }]);
      }
      if (!e.includes(r)) for (const l of Array.from(a).sort((u, h) => u - h)) {
        let u = false;
        for (const h of o) if (c(h, l)) {
          u = true;
          break;
        }
        u || (yield [t.key(r, e[l]), -1, { clue: s.id }]);
      }
    }
  }
  function* Kv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, i] = e.split("|"), r = [[n, i], [i, n]];
      for (const [o, a] of r) for (let c = 0; c < t.cats.length; c++) if (!(c === t.idx[o] || c === t.idx[a])) for (const l of t.cats[c]) {
        const u = t.get(o, l);
        u !== 0 && (yield [t.key(a, l), u, { from: [e.split("|"), t.key(o, l).split("|")] }]);
      }
    }
  }
  const Vc = { clue: Cv, elim: Zv, last: Uv, either: Bv, order: Fv, trans: Kv };
  function bt(t, e, s = Vt) {
    var _a3;
    const n = e != null ? e : t.clues, i = new Hc(t, n), r = [];
    let o = null, a = true;
    for (; a && !i.known(); ) {
      a = false;
      for (const f of Vt) if (s.includes(f)) {
        for (const [m, g, k] of Vc[f](i)) {
          const b = i.state.get(m);
          if (b === g) continue;
          if (b !== 0) {
            o = { rule: f, cell: m.split("|") };
            break;
          }
          i.state.set(m, g);
          const v = { rule: f, cell: m.split("|"), value: g === 1 ? "yes" : "no", ...k };
          r.push(v), a = true;
          break;
        }
        if (a || o) break;
      }
      if (o) break;
    }
    const c = {};
    for (const [f, m] of i.state.entries()) c[f] = m === 1 ? "yes" : m === -1 ? "no" : "";
    let l = false;
    if (!o && i.known()) {
      const f = Nt(t);
      l = Array.from(i.state.entries()).every(([m, g]) => {
        const [k, b] = m.split("|");
        return f[k] === f[b] == (g === 1);
      });
    }
    const u = {};
    for (const f of Vt) u[f] = 0;
    for (const f of r) u[f.rule] = ((_a3 = u[f.rule]) != null ? _a3 : 0) + 1;
    const h = {};
    for (const [f, m] of Object.entries(u)) m > 0 && (h[f] = m);
    const p = Object.entries(u).reduce((f, [m, g]) => {
      var _a4;
      return f + ((_a4 = nv[m]) != null ? _a4 : 1) * g;
    }, 0);
    return { solved: l, contradiction: o, grid: c, steps: r, rules: h, score: p };
  }
  function Xt(t, e, s = Vt) {
    const n = t.clues, i = new Hc(t, n);
    let r = true;
    for (; r && !i.known(); ) {
      r = false;
      for (const a of Vt) if (s.includes(a)) for (const [c, l] of Vc[a](i)) {
        const u = i.state.get(c);
        if (u !== l) {
          if (u !== 0) return false;
          i.state.set(c, l), r = true;
        }
      }
    }
    if (!i.known()) return false;
    const o = Nt(t);
    return Array.from(i.state.entries()).every(([a, c]) => {
      const [l, u] = a.split("|");
      return o[l] === o[u] == (c === 1);
    });
  }
  function tr(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = s != null ? s : t.clues, r = (e != null ? e : bt(t, n)).rules, o = (_a3 = r.trans) != null ? _a3 : 0;
    if (t.ordinal) return o >= ((_b3 = t.hardTrans) != null ? _b3 : 8) ? "hard" : o > 0 || ((_c2 = r.either) != null ? _c2 : 0) > 0 || n.some((c) => c.type === "either" || c.type === "oneof") ? "medium" : "easy";
    const a = n.some((c) => c.type === "is");
    return o >= 3 && !a ? "hard" : o > 0 || ((_d2 = r.either) != null ? _d2 : 0) > 0 || ((_e2 = r.order) != null ? _e2 : 0) > 0 ? "medium" : "easy";
  }
  function xn(t, e) {
    return t === "easy" ? e && e.ordinal ? [...Oc, "order"] : Oc : Vt;
  }
  function Yc(t, e) {
    const s = e != null ? e : bt(t);
    return { steps: s.steps.length, score: s.score, rules: s.rules };
  }
  const $s = { intro: "The bakery delivered one order each day. Work out which delivery was which.", categories: [{ key: "day", ref: "the {n} delivery", names: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], prefix: "d" }, { key: "customer", ref: "the delivery to {n}", names: ["Ana", "Boris", "Cleo", "Dino", "Eva"], prefix: "c" }, { key: "cake", ref: "the {n} delivery", names: ["lemon cake", "poppy roll", "plum tart", "honey bun", "rye loaf"], prefix: "k" }, { key: "town", ref: "the delivery to {n}", names: ["Oakville", "Pinebrook", "Riverton", "Stonegate", "Wheatley"], prefix: "t" }], unit: "days" }, Jc = [3, 4, 5], qv = { 3: 3, 4: 6, 5: 10 };
  function Gv(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.categories.length; n++) {
      const i = $s.categories[n], r = t.categories[n];
      for (let o = 0; o < r.items.length; o++) {
        const a = r.items[o];
        s[a] = (_b3 = e[a]) != null ? _b3 : i && o < i.names.length ? i.names[o] : a;
      }
    }
    return s;
  }
  const Wv = Gv;
  function Qc(t) {
    return $s.intro;
  }
  function Hv(t, e) {
    const s = [];
    for (const o of $s.categories) s.push({ key: o.key, items: Array.from({ length: e }, (a, c) => "".concat(o.prefix).concat(c + 1)), ref: o.ref });
    const n = [];
    for (let o = 1; o < s.length; o++) {
      const a = [...s[o].items];
      t.shuffle(a), n.push(a);
    }
    const i = {}, r = s[0].items;
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i[a] = {};
      for (let c = 0; c < n.length; c++) i[a][s[c + 1].key] = n[c][o];
    }
    return [s, i];
  }
  function Xc(t, e, s) {
    return e.indexOf(t[s]);
  }
  function Vv(t, e, s, n) {
    const i = e[0].items, r = [];
    for (let a = 0; a < e.length; a++) for (const c of e[a].items) r.push([a, c]);
    const o = [];
    for (let a = 0; a < r.length; a++) for (let c = 0; c < r.length; c++) {
      const [l, u] = r[a], [h, p] = r[c];
      if (l === h) continue;
      a < c && (s[u] === s[p] ? n !== "hard" && o.push({ type: "is", a: u, b: p }) : o.push({ type: "not", a: u, b: p }));
      const f = Xc(s, i, u), m = Xc(s, i, p);
      f < m && o.push({ type: "before", a: u, b: p }), a < c && f !== m && o.push({ type: "apart", a: u, b: p, n: Math.abs(f - m) });
    }
    if (n !== "easy") {
      for (const [a, c] of r) for (let l = 0; l < e.length; l++) {
        if (l === a) continue;
        const u = e[l].items.filter((p) => s[p] === s[c]), h = e[l].items.filter((p) => s[p] !== s[c]);
        for (const p of h) {
          const f = [u[0], p];
          t.shuffle(f), o.push({ type: "either", a: c, b: f });
        }
        if (h.length >= 2) for (let p = 0; p < h.length; p++) for (let f = p + 1; f < h.length; f++) o.push({ type: "neither", a: c, b: [h[p], h[f]] });
      }
      for (let a = 0; a < e.length; a++) for (let c = 0; c < e.length; c++) {
        if (a === c) continue;
        const l = e[a].items, u = e[c].items;
        for (let h = 0; h < l.length; h++) for (let p = h + 1; p < l.length; p++) {
          const f = l[h], m = l[p], g = u.find((v) => s[v] === s[f]), k = u.find((v) => s[v] === s[m]), b = [g, k];
          t.shuffle(b), o.push({ type: "oneof", a: [f, m], b });
        }
      }
    } else for (const [a, c] of r) for (let l = 0; l < e.length; l++) {
      if (l === a) continue;
      const u = e[l].items.filter((h) => s[h] !== s[c]);
      if (u.length >= 2) for (let h = 0; h < u.length; h++) for (let p = h + 1; p < u.length; p++) o.push({ type: "neither", a: c, b: [u[h], u[p]] });
    }
    return t.shuffle(o), o;
  }
  function Yv(t) {
    return t === "easy" ? xn("easy", { ordinal: true }) : t === "medium" ? [...xn("easy", { ordinal: true }), "either"] : xn("hard");
  }
  function Jv(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function En(t, e) {
    return { ...t, clues: Jv(e) };
  }
  function Qv(t, e, s, n) {
    const i = [...e], r = Array.from({ length: i.length }, (a, c) => c);
    n.shuffle(r);
    const o = /* @__PURE__ */ new Set();
    for (const a of r) {
      const c = i.filter((l, u) => u !== a && !o.has(u));
      Xt(En(t, c), void 0, s) && o.add(a);
    }
    return i.filter((a, c) => !o.has(c));
  }
  function Xv(t = 4, e = 0, s = "medium", n = 200) {
    if (!Jc.includes(t)) throw new Z("logic grids have ".concat(Jc.join(" or "), " items per category, not ").concat(t));
    if (!bs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const i = new st("vno-puzzles:logic:".concat(e, ":").concat(s, ":").concat(t));
    for (let r = 0; r < n; r++) {
      const [o, a] = Hv(i, t), c = { format: We, kind: "logic", size: t, seed: e, band: s, categories: o, solution: a, ordinal: { category: o[0].key, unit: $s.unit }, hardTrans: qv[t] }, l = Yv(s), u = Nt({ ...c }), h = Vv(i, o, u, s), p = [];
      for (const k of h) if (p.push(k), p.length % 3 === 0 && Xt(En(c, p), void 0, l)) break;
      if (!Xt(En(c, p), void 0, l)) continue;
      const f = Qv(c, p, l, i);
      i.shuffle(f);
      const m = En(c, f), g = bt(m);
      if (!(!g.solved || tr(m, g) !== s || jn(m, 2) !== 1) && !(s === "medium" && !f.some((k) => k.type === "either" || k.type === "oneof"))) return m.difficulty = Yc(m, g), m.steps = g.steps, ew(m);
    }
    throw new Z("no ".concat(s, " logic grid found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function ew(t, e) {
    const s = Wv(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = sr(t, n, s);
    return t.text.intro = Qc(), t;
  }
  function tw(t) {
    Rc(t);
    const e = Nt(t), s = yn(t);
    for (const i of t.clues) if (!Wi(i, e, s)) throw new Z("clue ".concat(i.id, " is false in the solution"));
    if (jn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const n = bt(t);
    if (!n.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return n;
  }
  const sw = { suspect: ["Colonel Ash", "Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"], weapon: ["rope", "candlestick", "poison", "dagger", "vase"], place: ["library", "kitchen", "garden", "cellar", "study"], motive: ["jealousy", "greed", "revenge", "fear", "love"] }, nw = { suspect: ["the tall guest", "the left-handed guest", "the youngest guest", "the quiet guest", "the guest in grey"], weapon: ["the heavy weapon", "the metal weapon", "the sharp weapon", "the silent weapon", "the fragile weapon"], place: ["the room upstairs", "the room by the stairs", "the room with the fire", "the room below ground", "the room facing east"] };
  function An(t) {
    var _a3, _b3, _c2, _d2, _e2;
    if (t.kind === "knights") return Zc(t);
    if (t.kind === "testimony") return qc(t);
    if (t.kind === "quiz") return Iv(t);
    if (t.kind === "logic") {
      const n = (_a3 = t.names) != null ? _a3 : {}, i = {};
      for (let r = 0; r < t.categories.length; r++) {
        const o = $s.categories[r], a = t.categories[r];
        for (let c = 0; c < a.items.length; c++) {
          const l = a.items[c];
          i[l] = (_b3 = n[l]) != null ? _b3 : o && c < o.names.length ? o.names[c] : l;
        }
      }
      return i;
    }
    const e = (_c2 = t.names) != null ? _c2 : {}, s = {};
    for (const n of t.categories) {
      const i = (_d2 = sw[n.key]) != null ? _d2 : [];
      for (let r = 0; r < n.items.length; r++) {
        const o = n.items[r];
        s[o] = (_e2 = e[o]) != null ? _e2 : r < i.length ? i[r] : o;
      }
    }
    return s;
  }
  function iw(t) {
    var _a3;
    const e = {};
    for (const s of t.categories) {
      const n = (_a3 = nw[s.key]) != null ? _a3 : [];
      for (let i = 0; i < s.items.length; i++) i < n.length && (e[s.items[i]] = n[i]);
    }
    return e;
  }
  function He(t) {
    return t.length > 0 ? t[0].toUpperCase() + t.slice(1) : t;
  }
  function rw(t, e) {
    return t === "suspect" || t === "motive" ? e : "the ".concat(e);
  }
  const ow = { "suspect,weapon": ["{X} had {Y}.", "{X} did not have {Y}."], "suspect,place": ["{X} was in {Y}.", "{X} was not in {Y}."], "suspect,motive": ["{X} acted out of {Y}.", "{X} did not act out of {Y}."], "weapon,place": ["Whoever had {X} was in {Y}.", "Whoever had {X} was not in {Y}."], "weapon,motive": ["Whoever had {X} acted out of {Y}.", "Whoever had {X} did not act out of {Y}."], "place,motive": ["Whoever was in {X} acted out of {Y}.", "Whoever was in {X} did not act out of {Y}."] }, aw = { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." };
  function cw(t, e, s) {
    var _a3, _b3;
    const n = (_a3 = t.descr) != null ? _a3 : {}, i = new Set((_b3 = e.descr) != null ? _b3 : []);
    function r(b) {
      return i.has(b) && n[b] ? n[b] : rw(Yt(t, b), s[b]);
    }
    const o = e.a, a = Array.isArray(e.b) ? e.b : [e.b], c = Yt(t, o), l = Yt(t, a[0]);
    if (e.type === "either") {
      const b = aw["".concat(c, ",").concat(l)];
      if (!b) throw new Error("no sentence for an either clue of ".concat(c, " and ").concat(l));
      return He(b.replace("{A}", r(o)).replace("{B1}", r(a[0])).replace("{B2}", r(a[1])));
    }
    const u = vs(t), [h, p] = u[o] < u[a[0]] ? [o, a[0]] : [a[0], o], f = Yt(t, h), m = Yt(t, p), g = ow["".concat(f, ",").concat(m)];
    if (!g) throw new Error("no sentence for a ".concat(e.type, " clue of ").concat(c, " and ").concat(l));
    const k = e.type === "not" ? g[1] : g[0];
    return He(k.replace("{X}", r(h)).replace("{Y}", r(p)));
  }
  function lw(t, e, s) {
    var _a3, _b3;
    return ((_a3 = t.categories[vs(t)[e]].ref) != null ? _a3 : "{n}").replace("{n}", (_b3 = s[e]) != null ? _b3 : e);
  }
  function uw(t, e, s) {
    var _a3, _b3;
    const n = e.type, i = (_b3 = (_a3 = t.ordinal) == null ? void 0 : _a3.unit) != null ? _b3 : "", r = (c) => lw(t, c, s), o = e.a, a = e.b;
    if (n === "is") return He("".concat(r(o), " is ").concat(r(a), "."));
    if (n === "not") return He("".concat(r(o), " is not ").concat(r(a), "."));
    if (n === "either") return He("".concat(r(o), " is either ").concat(r(a[0]), " or ").concat(r(a[1]), "."));
    if (n === "neither") return He("".concat(r(o), " is neither ").concat(r(a[0]), " nor ").concat(r(a[1]), "."));
    if (n === "oneof") return He("Of ".concat(r(o[0]), " and ").concat(r(o[1]), ", one is ").concat(r(a[0]), " and the other is ").concat(r(a[1]), "."));
    if (n === "before") return He("".concat(r(o), " came before ").concat(r(a), "."));
    if (n === "after") return He("".concat(r(o), " came after ").concat(r(a), "."));
    if (n === "apart") return He("".concat(r(o), " and ").concat(r(a), " are exactly ").concat(e.n, " ").concat(i || "places", " apart."));
    throw new Error("no sentence for a ".concat(n, " clue"));
  }
  function sr(t, e, s) {
    var _a3;
    const n = (_a3 = s != null ? s : t.names) != null ? _a3 : An(t);
    return t.kind === "logic" ? uw(t, e, n) : cw(t, e, n);
  }
  function dw(t, e) {
    var _a3;
    return "The body was found in the ".concat(((_a3 = e != null ? e : t.names) != null ? _a3 : An(t))[t.murder.place], ".");
  }
  function hw(t, e) {
    if (t.kind === "knights") return Uc(t);
    if (t.kind === "logic") {
      const n = An(t);
      t.names = n, t.text = {};
      for (const i of t.clues) t.text[i.id] = sr(t, i, n);
      return t.text.intro = Qc(), t;
    }
    if (t.kind === "testimony") return Gc(t);
    if (t.kind === "quiz") {
      const n = Mv(t);
      return t.names = n.names, t.text = n.text, t;
    }
    const s = An(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = sr(t, n, s);
    return t.murder && (t.text.murder = dw(t, s)), t;
  }
  const el = ["suspect", "weapon", "place"], pw = { suspect: "s", weapon: "w", place: "p", motive: "m" }, tl = [3, 4];
  function fw(t, e, s = false) {
    const i = (s ? [...el, "motive"] : [...el]).map((a) => ({ key: a, items: Array.from({ length: e }, (c, l) => "".concat(pw[a]).concat(l + 1)) })), r = [];
    for (let a = 1; a < i.length; a++) {
      const c = [...i[a].items];
      t.shuffle(c), r.push(c);
    }
    const o = {};
    for (let a = 0; a < i[0].items.length; a++) {
      const c = i[0].items[a];
      o[c] = {};
      for (let l = 0; l < r.length; l++) o[c][i[l + 1].key] = r[l][a];
    }
    return [i, o];
  }
  function mw(t, e, s, n) {
    const i = [], r = [];
    for (let o = 0; o < e.length; o++) for (const a of e[o].items) r.push([o, a]);
    for (let o = 0; o < r.length; o++) for (let a = o + 1; a < r.length; a++) {
      const [c, l] = r[o], [u, h] = r[a];
      c !== u && (s[l] === s[h] ? n !== "hard" && i.push({ type: "is", a: l, b: h }) : i.push({ type: "not", a: l, b: h }));
    }
    for (const [o, a] of r) for (let c = 0; c < e.length; c++) {
      if (c === o) continue;
      const l = e[c].items.filter((h) => s[h] === s[a]), u = e[c].items.filter((h) => s[h] !== s[a]);
      for (const h of u) {
        const p = [l[0], h];
        t.shuffle(p), i.push({ type: "either", a, b: p });
      }
    }
    return t.shuffle(i), i;
  }
  function gw(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function zs(t, e) {
    return { ...t, clues: gw(e) };
  }
  function kw(t, e, s, n) {
    const i = [...e], r = Array.from({ length: i.length }, (a, c) => c);
    n.shuffle(r);
    const o = /* @__PURE__ */ new Set();
    for (const a of r) {
      const c = i.filter((l, u) => u !== a && !o.has(u));
      Xt(zs(t, c), void 0, s) && o.add(a);
    }
    return i.filter((a, c) => !o.has(c));
  }
  function bw(t, e, s) {
    const n = iw(e), i = [];
    for (const r of s) {
      const a = [r.a].concat(Array.isArray(r.b) ? r.b : [r.b]).filter((c) => n[c] && t.random() < 0.5);
      i.push(a.length > 0 ? { ...r, descr: a } : r);
    }
    return [i, n];
  }
  function vw(t, e, s = 0, n = "medium", i = 200, r = false, o = false) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    let a = "murdle", c = 3, l = 0, u = "medium", h = 200, p = false, f = false, m;
    if (typeof t == "object" && t !== null ? (a = (_a3 = t.kind) != null ? _a3 : "murdle", c = (_b3 = t.size) != null ? _b3 : null, l = (_c2 = t.seed) != null ? _c2 : 0, u = (_d2 = t.band) != null ? _d2 : "medium", h = (_e2 = t.maxTries) != null ? _e2 : 200, p = (_f2 = t.motive) != null ? _f2 : false, f = (_g2 = t.attrs) != null ? _g2 : false, m = t.count) : typeof t == "string" && (a = t, c = null, l = s, u = n, h = i, p = r, f = o), c == null && (c = (_h2 = { murdle: 3, logic: 4, knights: 3, testimony: 3, quiz: 4 }[a]) != null ? _h2 : 3), a === "logic") return Xv(c, l, u, h);
    if (a === "knights") return bv(c, l, u, h);
    if (a === "testimony") return Av(c, l, u, h);
    if (a === "quiz") return Ov(l, m != null ? m : c, u);
    if (a !== "murdle") throw new Z('unknown puzzle kind "'.concat(a, '" (murdle, logic, knights, testimony or quiz)'));
    if (!tl.includes(c)) throw new Z("murdle makes puzzles of ".concat(tl.join(" or "), " items per category, not ").concat(c));
    if (!bs.includes(u)) throw new Z('unknown band "'.concat(u, '" (easy, medium or hard)'));
    let g = "vno-puzzles:".concat(a, ":").concat(l, ":").concat(u);
    (c !== 3 || p || f) && (g += ":".concat(c).concat(p ? "m" : "").concat(f ? "a" : ""));
    const k = new st(g), b = xn(u);
    for (let v = 0; v < h; v++) {
      const [w, y] = fw(k, c, p), $ = { format: We, kind: a, size: c, seed: l, band: u, categories: w, solution: y }, x = Nt({ ...$ }), _ = mw(k, w, x, u), z = [];
      let O = 0;
      for (const I of _) {
        if (I.type === "is" && u === "medium") {
          if (O > 0) continue;
          O++;
        }
        if (z.push(I), Xt(zs($, z), void 0, b)) break;
      }
      if (!Xt(zs($, z), void 0, b)) continue;
      const R = kw($, z, b, k);
      let S = zs($, R), A = bt(S);
      if (!A.solved || tr(S, A) !== u || (k.shuffle(R), S = zs($, R), A = bt(S), !A.solved || tr(S, A) !== u || jn(S, 2) !== 1)) continue;
      if (f) {
        const [I, D] = bw(k, S, S.clues);
        S.clues = I, S.descr = D;
      }
      const j = k.choice(w[2].items);
      return S.murder = { place: j }, S.murder.answer = Hi(S), S.difficulty = Yc(S, A), S.steps = A.steps, hw(S);
    }
    throw new Z("no ".concat(u, " puzzle found for seed ").concat(l, " in ").concat(h, " tries"));
  }
  function ww(t) {
    var _a3;
    const e = (_a3 = t.kind) != null ? _a3 : "murdle";
    if (e === "knights") return pv(t);
    if (e === "logic") return tw(t);
    if (e === "testimony") return xv(t);
    if (e === "quiz") return Rv(t);
    Rc(t);
    const s = Nt(t), n = yn(t);
    for (const r of t.clues) if (!Wi(r, s, n)) throw new Z("clue ".concat(r.id, " is false in the solution"));
    if (jn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const i = bt(t);
    if (!i.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return i;
  }
  function sl(t) {
    if (t.includes(",")) {
      const [e, s] = t.split(",");
      return "".concat(e, "|").concat(s);
    }
    return t;
  }
  function yw(t, e) {
    var _a3, _b3, _c2;
    const s = sl(e), n = { ...t }, i = (_b3 = (_a3 = n[e]) != null ? _a3 : n[s]) != null ? _b3 : "", o = (_c2 = { "": "no", no: "yes", yes: "" }[i]) != null ? _c2 : "";
    return o ? (n[e] = o, n[s] = o) : (delete n[e], delete n[s]), n;
  }
  function Sw(t, e, s) {
    var _a3;
    const n = sl(s);
    if (((_a3 = e[s]) != null ? _a3 : e[n]) !== "yes") return { ...e };
    const [i, r] = Re(n), o = vs(t), a = { ...e };
    for (const c of it(t)) {
      const [l, u] = Re(c);
      c === n || a[c] || a["".concat(l, ",").concat(u)] || o[l] === o[i] && o[u] === o[r] && (l === i || u === r) && (a[c] = "no", a["".concat(l, ",").concat(u)] = "no");
    }
    return a;
  }
  function nr(t) {
    const e = Nt(t), s = {};
    for (const n of it(t)) {
      const [i, r] = Re(n), o = e[i] === e[r] ? "yes" : "no";
      s[n] = o, s["".concat(i, ",").concat(r)] = o;
    }
    return s;
  }
  function $w(t, e) {
    const s = Hi(t), n = [];
    for (const i of Object.keys(s)) e[i] !== s[i] && n.push(i);
    return { correct: n.length === 0, wrong: n };
  }
  function zw(t, e) {
    var _a3;
    if (t.kind === "knights") return vv(t, e);
    if (t.kind === "quiz") {
      const r = Dv(t, e);
      return { correct: r.correct, wrong: r.wrong };
    }
    const s = nr(t), n = it(t), i = [];
    for (const r of n) {
      const [o, a] = Re(r), l = ((_a3 = e[r]) != null ? _a3 : e["".concat(o, ",").concat(a)]) === "yes", u = s[r] === "yes";
      l !== u && i.push(r);
    }
    return { correct: i.length === 0, wrong: i };
  }
  const _w = ["murdle", "logic"], jw = ["easy", "medium", "hard"], ir = [3, 4], xw = 8, nl = /* @__PURE__ */ new Map();
  function il(t, e) {
    const s = "".concat(t.kind, ":").concat(t.size, ":").concat(t.seed, ":").concat(t.band);
    {
      const r = nl.get(s);
      if (r) return r;
    }
    const n = ((r) => vw(r));
    let i = new Z("no seed tried");
    for (let r = 0; r < xw; r++) {
      const o = t.seed + r;
      try {
        const a = n({ kind: t.kind, size: t.size, seed: o, band: t.band });
        ww(a);
        const c = { puzzle: a, seed: o, skipped: r };
        return e || nl.set(s, c), c;
      } catch (a) {
        i = a;
      }
    }
    throw i instanceof Error ? i : new Z(String(i));
  }
  const Ew = (t) => t.categories.map((e) => e.key), Aw = (t) => t.categories.flatMap((e) => e.items), rr = (t, e) => Yt(t, e);
  function or(t) {
    return t.kind !== "murdle" ? [] : Ew(t).filter((e) => e !== "place");
  }
  function rl(t) {
    if (t.kind !== "murdle" || !t.murder) return null;
    const e = Hi({ categories: t.categories, murder: t.murder, solution: t.solution }), s = {};
    for (const n of or(t)) s[n] = e[n];
    return s;
  }
  function Tw(t) {
    const e = nr(t);
    return it(t).filter((s) => e[s] === "yes");
  }
  function Iw(t) {
    const e = [];
    for (let s = 0; s < t.categories.length; s++) for (let n = s + 1; n < t.categories.length; n++) e.push({ rows: t.categories[s], cols: t.categories[n], key: "".concat(t.categories[s].key, "-").concat(t.categories[n].key) });
    return e;
  }
  const vt = (t, e) => {
    var _a3, _b3;
    const [s, n] = Re(e);
    return (_b3 = (_a3 = t[e]) != null ? _a3 : t["".concat(s, ",").concat(n)]) != null ? _b3 : "";
  }, Mw = (t, e) => yw(t, e), Ow = (t, e, s) => Sw(t, e, s);
  function ol(t, e) {
    return it(t).filter((s) => vt(e, s) === "yes").map((s) => Re(s));
  }
  function Nw(t, e, s) {
    var _a3, _b3;
    if (t.kind === "murdle") {
      const i = { ...e, place: (_b3 = (_a3 = t.murder) == null ? void 0 : _a3.place) != null ? _b3 : "" }, r = $w(t, i);
      return { correct: r.correct, wrong: r.wrong.filter((o) => o !== "place") };
    }
    const n = zw(t, s);
    return { correct: n.correct, wrong: n.wrong };
  }
  const al = { is: { "suspect,weapon": "{X} had {Y}.", "suspect,place": "{X} was in {Y}.", "suspect,motive": "{X} acted out of {Y}.", "weapon,place": "Whoever had {X} was in {Y}.", "weapon,motive": "Whoever had {X} acted out of {Y}.", "place,motive": "Whoever was in {X} acted out of {Y}." }, not: { "suspect,weapon": "{X} did not have {Y}.", "suspect,place": "{X} was not in {Y}.", "suspect,motive": "{X} did not act out of {Y}.", "weapon,place": "Whoever had {X} was not in {Y}.", "weapon,motive": "Whoever had {X} did not act out of {Y}.", "place,motive": "Whoever was in {X} did not act out of {Y}." }, either: { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." }, isAny: "{X} goes with {Y}.", notAny: "{X} does not go with {Y}.", eitherAny: "{A} goes with either {B1} or {B2}.", logic: { is: "{A} goes with {B}.", not: "{A} does not go with {B}.", either: "{A} goes with either {B1} or {B2}.", neither: "{A} goes with neither {B1} nor {B2}.", oneof: "Of {A1} and {A2}, one goes with {B1} and the other with {B2}.", before: "{A} came before {B}.", after: "{A} came after {B}.", apart: "{A} and {B} are exactly {n} places apart." }, hint: { wrong: "Look again at {A} and {B}.", clue: "Clue {n} says: {text}", yes: "So {A} goes with {B}.", no: "So {A} cannot go with {B}.", elim: "{F0} goes with {F1}, so {A} cannot go with {B}.", last: "Everything else for {A} is ruled out, so {A} goes with {B}.", either: "One of the two is ruled out, so {A} goes with {B}.", order: "Counting the places in order, that rules out {A} {B}.", trans: "{A} and {B} are linked through {M}, so {A} {verb} {B}.", verbYes: "goes with", verbNo: "cannot go with", accuse: "The grid is complete. Make your accusation.", more: "The clues you have turned say no more. Turn another clue card." }, articles: true }, cl = { en: al, hr: { is: {}, not: {}, either: {}, isAny: "{X} i {Y} idu zajedno.", notAny: "{X} i {Y} ne idu zajedno.", eitherAny: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", logic: { is: "{A} i {B} idu zajedno.", not: "{A} i {B} ne idu zajedno.", either: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", neither: "{A} ne ide zajedno ni s jednim od ovih dvoje: {B1}, {B2}.", oneof: "Od ove dvije stvari, {A1} i {A2}, jedna ide uz {B1}, a druga uz {B2}.", before: "Redoslijed: {A}, a zatim {B}.", after: "Redoslijed: {B}, a zatim {A}.", apart: "{A} i {B}: u redoslijedu ih dijeli točno {n}." }, hint: { wrong: "Pogledaj ponovno: {A} i {B}.", clue: "Trag {n}: {text}", yes: "Zato {A} i {B} idu zajedno.", no: "Zato {A} i {B} ne idu zajedno.", elim: "{F0} i {F1} idu zajedno, pa {A} i {B} ne idu zajedno.", last: "Sve drugo za {A} je isključeno, pa {A} i {B} idu zajedno.", either: "Jedno od dvoje je isključeno, pa {A} i {B} idu zajedno.", order: "Brojanje u redoslijedu isključuje: {A}, {B}.", trans: "{A} i {B} povezani su preko: {M}, pa {verb}.", verbYes: "idu zajedno", verbNo: "ne idu zajedno", accuse: "Mreža je gotova. Podigni optužbu.", more: "Okrenuti tragovi ne govore više. Okreni još jedan trag." }, articles: false } }, ar = (t) => {
    var _a3, _b3, _c2;
    return (_c2 = (_b3 = cl[t]) != null ? _b3 : cl[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : al;
  }, ge = (t, e) => {
    let s = t;
    for (const [n, i] of Object.entries(e)) s = s.split("{".concat(n, "}")).join(String(i));
    return s;
  }, Ke = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t;
  function Tn(t, e, s, n) {
    var _a3;
    const i = (_a3 = s.alias) == null ? void 0 : _a3.call(s, e);
    if (i) return i;
    const r = s.name(e), o = rr(t, e);
    return ar(n).articles && t.kind === "murdle" && o !== "suspect" && o !== "motive" && new RegExp("^\\p{Ll}", "u").test(r) ? "the ".concat(r) : r;
  }
  const ll = (t, e, s) => "".concat(rr(t, e), ",").concat(rr(t, s));
  function ul(t, e, s, n) {
    var _a3, _b3, _c2;
    const i = ar(n), r = (m) => Tn(t, m, s, n), o = (m) => Array.isArray(m) ? m[0] : m;
    if (t.kind === "logic") {
      const m = i.logic, g = e.a, k = e.b;
      switch (e.type) {
        case "is":
          return Ke(ge(m.is, { A: r(o(g)), B: r(o(k)) }));
        case "not":
          return Ke(ge(m.not, { A: r(o(g)), B: r(o(k)) }));
        case "either":
          return Ke(ge(m.either, { A: r(o(g)), B1: r(k[0]), B2: r(k[1]) }));
        case "neither":
          return Ke(ge(m.neither, { A: r(o(g)), B1: r(k[0]), B2: r(k[1]) }));
        case "oneof":
          return Ke(ge(m.oneof, { A1: r(g[0]), A2: r(g[1]), B1: r(k[0]), B2: r(k[1]) }));
        case "before":
          return Ke(ge(m.before, { A: r(o(g)), B: r(o(k)) }));
        case "after":
          return Ke(ge(m.after, { A: r(o(g)), B: r(o(k)) }));
        case "apart":
          return Ke(ge(m.apart, { A: r(o(g)), B: r(o(k)), n: (_a3 = e.n) != null ? _a3 : 1 })).replace(/ exactly 1 places apart/, " exactly 1 place apart");
        default:
          throw new Z("no sentence for a ".concat(e.type, " clue"));
      }
    }
    const a = o(e.a), c = Array.isArray(e.b) ? e.b : [e.b];
    if (e.type === "either") {
      const m = (_b3 = i.either[ll(t, a, c[0])]) != null ? _b3 : i.eitherAny;
      return Ke(ge(m, { A: r(a), B1: r(c[0]), B2: r(c[1]) }));
    }
    const l = (m) => t.categories.findIndex((g) => g.items.includes(m)), [u, h] = l(a) < l(c[0]) ? [a, c[0]] : [c[0], a], f = (_c2 = (e.type === "not" ? i.not : i.is)[ll(t, u, h)]) != null ? _c2 : e.type === "not" ? i.notAny : i.isAny;
    return Ke(ge(f, { X: r(u), Y: r(h) }));
  }
  function Pw(t, e, s, n, i) {
    var _a3;
    const r = ar(i).hint, o = (u, h = false) => h ? Ke(Tn(t, u, n, i)) : Tn(t, u, n, i), a = nr(t);
    for (const u of it(t)) {
      const h = vt(s, u);
      if (h && h !== a[u]) {
        const [p, f] = Re(u);
        return { kind: "wrong", cell: u, text: ge(r.wrong, { A: o(p), B: o(f) }) };
      }
    }
    const c = t.clues.filter((u) => e.includes(u.id)), l = bt(t, c);
    for (const u of l.steps) {
      const [h, p] = u.cell, f = "".concat(h, "|").concat(p);
      if (vt(s, f) === u.value) continue;
      const m = u.value === "yes", g = ge(m ? r.yes : r.no, { A: o(h), B: o(p) });
      let k;
      const b = () => {
        const v = t.clues.find((w) => w.id === u.clue);
        return v ? ge(r.clue, { n: v.id.slice(1), text: ul(t, v, n, i) }) : "";
      };
      if (u.rule === "clue") k = "".concat(b(), " ").concat(g);
      else if (u.rule === "elim") {
        const v = u.from[0];
        k = ge(r.elim, { F0: o(v[0], true), F1: o(v[1]), A: o(h), B: o(p) });
      } else if (u.rule === "last") k = ge(r.last, { A: o(h), B: o(p) });
      else if (u.rule === "either") k = "".concat(b(), " ").concat(ge(r.either, { A: o(h), B: o(p) }));
      else if (u.rule === "order") k = "".concat(b(), " ").concat(ge(r.order, { A: o(h), B: o(p) }));
      else if (u.rule === "trans") {
        const [v, w] = u.from, y = (_a3 = v.find(($) => w.includes($))) != null ? _a3 : v[0];
        k = ge(r.trans, { A: o(h), B: o(p), M: o(y), verb: m ? r.verbYes : r.verbNo });
      } else k = g;
      return { kind: "step", cell: f, text: k };
    }
    return c.length < t.clues.length ? { kind: "more", cell: "", text: r.more } : { kind: "accuse", cell: "", text: r.accuse };
  }
  const De = E().min(1).max(64).regex(/^[A-Za-z0-9][A-Za-z0-9_.-]*$/, "an id of letters, digits, dots, dashes and underscores"), Ve = E().min(1), Rw = U({ kind: Y(_w).default("murdle"), size: L().int().min(ir[0]).max(ir[ir.length - 1]).default(3), seed: L().int().min(0).default(1), band: Y(jw).default("easy"), names: Q(E(), Ve), aliases: Q(E(), Ve).default({}), labels: Q(E(), Ve).default({}), items: N(De).min(1) }), Dw = U({ id: De, unit: De.optional(), title: Ve, story: Ve, case: Rw }), Lw = U({ id: De, name: Ve, x: L(), y: L() }), Cw = U({ from: De, to: De, item: De, decoys: N(De).max(5), clue: Ve.optional() }), Zw = U({ unit: De.optional(), final: J().default(false), suspect: Ve, title: Ve.optional(), story: Ve.optional(), start: De, places: N(Lw).min(2), route: N(Cw).min(1), map: De, width: L().positive().default(800), height: L().positive().default(600) }), Uw = U({ rooms: N(Dw).min(1), final: De.optional(), chase: Zw.optional() }), Bw = ["DET_UNIT_NO_ROOM", "DET_ROOM_UNIT_MISSING", "DET_FINAL_MISSING", "DET_PUZZLE_INVALID", "DET_PUZZLE_NOT_UNIQUE", "DET_PUZZLE_UNSOLVABLE", "DET_NAME_MISSING", "DET_CLUE_ITEM_MISSING", "DET_TOO_FEW_CLUE_ITEMS", "DET_CHASE_PLACE_MISSING", "DET_CHASE_ROUTE_BROKEN", "DET_CHASE_ITEM_MISSING", "DET_CHASE_FEW_DECOYS", "DET_ALIAS_NOT_FACT"], dl = (t) => t.route[t.route.length - 1].to, Fw = (t) => t.rooms.find((e) => e.id === t.final), hl = (t) => ({ kind: t.kind, size: t.size, seed: t.seed, band: t.band });
  function Kw(t) {
    const e = [], s = (n, i) => {
      i && e.push({ path: n, key: i, role: "string" });
    };
    return t.rooms.forEach((n, i) => {
      s("rooms[".concat(i, "].title"), n.title), s("rooms[".concat(i, "].story"), n.story);
      for (const [r, o] of Object.entries(n.case.names)) s("rooms[".concat(i, "].case.names.").concat(r), o);
      for (const [r, o] of Object.entries(n.case.aliases)) s("rooms[".concat(i, "].case.aliases.").concat(r), o);
      for (const [r, o] of Object.entries(n.case.labels)) s("rooms[".concat(i, "].case.labels.").concat(r), o);
    }), t.chase && (s("chase.suspect", t.chase.suspect), s("chase.title", t.chase.title), s("chase.story", t.chase.story), t.chase.places.forEach((n, i) => s("chase.places[".concat(i, "].name"), n.name)), t.chase.route.forEach((n, i) => s("chase.route[".concat(i, "].clue"), n.clue))), e;
  }
  function qw(t, e) {
    const s = [], n = new Set(e.items.map((o) => o.id)), i = new Set(e.units.map((o) => o.id)), r = /* @__PURE__ */ new Set();
    return t.rooms.forEach((o, a) => {
      r.has(o.id) && s.push({ code: "DUPLICATE_ID", path: "rooms[".concat(a, "].id"), message: 'the room id "'.concat(o.id, '" is used twice') }), r.add(o.id), o.unit !== void 0 && !i.has(o.unit) && s.push({ code: "UNKNOWN_UNIT", path: "rooms[".concat(a, "].unit"), message: 'unknown unit "'.concat(o.unit, '"') }), o.case.items.forEach((c, l) => {
        n.has(c) || s.push({ code: "UNKNOWN_ITEM", path: "rooms[".concat(a, "].case.items[").concat(l, "]"), message: 'unknown item "'.concat(c, '"') });
      });
    }), t.final !== void 0 && !r.has(t.final) && s.push({ code: "UNKNOWN_ROOM", path: "final", message: 'unknown room "'.concat(t.final, '"') }), t.chase && (t.chase.unit !== void 0 && !i.has(t.chase.unit) && s.push({ code: "UNKNOWN_UNIT", path: "chase.unit", message: 'unknown unit "'.concat(t.chase.unit, '"') }), t.chase.route.forEach((o, a) => {
      n.has(o.item) || s.push({ code: "UNKNOWN_ITEM", path: "chase.route[".concat(a, "].item"), message: 'unknown item "'.concat(o.item, '"') });
    })), s;
  }
  const Gw = (t) => t.chase ? [{ path: "chase.map", id: t.chase.map }] : [];
  function Ww(t, e) {
    const s = [], n = (i) => {
      if (typeof i == "string") {
        const r = e(i);
        r && s.push(r);
      } else Array.isArray(i) ? i.forEach(n) : i && typeof i == "object" && Object.values(i).forEach(n);
    };
    return n(t), s;
  }
  function Hw(t, e, s = {}) {
    var _a3, _b3;
    if (!t) return [];
    const n = [], i = (h, p, f, m = {}) => {
      n.push({ code: h, path: p, message: f, ...m });
    }, r = e.pack, o = new Set(r.units.map((h) => h.id)), a = new Map(r.items.map((h) => [h.id, h])), c = (_a3 = s.build) != null ? _a3 : ((h) => il(h));
    t.final === void 0 ? ((_b3 = t.chase) == null ? void 0 : _b3.final) || i("DET_FINAL_MISSING", "final", "the section has no final room (`final`) and the chase is not the final challenge (`chase.final`)") : t.rooms.some((h) => h.id === t.final) || i("DET_FINAL_MISSING", "final", 'the final room "'.concat(t.final, '" does not exist'));
    const l = /* @__PURE__ */ new Set();
    t.rooms.forEach((h, p) => {
      h.unit !== void 0 ? o.has(h.unit) ? l.add(h.unit) : i("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "].unit"), 'the room "'.concat(h.id, '" belongs to the unit "').concat(h.unit, '", which the course does not have')) : h.id !== t.final && i("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "]"), 'the room "'.concat(h.id, '" has no unit and is not the final room'));
    });
    for (const h of r.units) l.has(h.id) || i("DET_UNIT_NO_ROOM", "rooms", 'the unit "'.concat(h.id, '" has no escape room'));
    t.rooms.forEach((h, p) => {
      var _a4;
      const f = "rooms[".concat(p, "].case"), m = h.case;
      let g = null;
      try {
        g = c(hl(m));
      } catch (b) {
        const v = b instanceof Error ? b.message : String(b);
        /exactly one solution/i.test(v) ? i("DET_PUZZLE_NOT_UNIQUE", f, 'the puzzle of room "'.concat(h.id, '" does not have exactly one solution (').concat(v, ")")) : /deduction/i.test(v) ? i("DET_PUZZLE_UNSOLVABLE", f, 'the puzzle of room "'.concat(h.id, '" cannot be solved by deduction alone (').concat(v, ")")) : i("DET_PUZZLE_INVALID", f, "no ".concat(m.kind, " puzzle of size ").concat(m.size, ", band ").concat(m.band, " could be made from seed ").concat(m.seed, " (").concat(v, ")"));
      }
      if (g) for (const b of Aw(g.puzzle)) m.names[b] || i("DET_NAME_MISSING", "".concat(f, ".names"), 'the entity "'.concat(b, '" of the puzzle of room "').concat(h.id, '" has no name'));
      const k = /* @__PURE__ */ new Set();
      m.items.forEach((b, v) => {
        a.has(b) ? k.add(b) : i("DET_CLUE_ITEM_MISSING", "".concat(f, ".items[").concat(v, "]"), 'the clue item "'.concat(b, '" does not exist'));
      }), g && k.size < g.puzzle.clues.length && i("DET_TOO_FEW_CLUE_ITEMS", "".concat(f, ".items"), 'room "'.concat(h.id, '" has ').concat(g.puzzle.clues.length, " clue cards but only ").concat(k.size, " clue items"));
      for (const [b, v] of Object.entries(m.aliases)) {
        const w = m.names[b];
        if (w) for (const y of e.editions) {
          const $ = e.resolvers[y], x = $ == null ? void 0 : $.text(w);
          if (!$ || !x) continue;
          const _ = Pe(x, { fold: true });
          [...k].some((O) => Ww(a.get(O), (R) => $.text(R)).some((R) => Pe(R, { fold: true }).includes(_))) || i("DET_ALIAS_NOT_FACT", "".concat(f, ".aliases.").concat(b), 'the alias "'.concat((_a4 = $.text(v)) != null ? _a4 : v, '" stands for "').concat(x, '", but no item of room "').concat(h.id, '" asks about it (').concat(y, ")"), { severity: "warning", lang: y });
        }
      }
    });
    const u = t.chase;
    if (u) {
      const h = new Set(u.places.map((m) => m.id));
      h.has(u.start) || i("DET_CHASE_PLACE_MISSING", "chase.start", 'the start "'.concat(u.start, '" is not one of the places')), u.route.forEach((m, g) => {
        const k = "chase.route[".concat(g, "]");
        h.has(m.from) || i("DET_CHASE_PLACE_MISSING", "".concat(k, ".from"), 'the place "'.concat(m.from, '" does not exist')), h.has(m.to) || i("DET_CHASE_PLACE_MISSING", "".concat(k, ".to"), 'the place "'.concat(m.to, '" does not exist')), m.decoys.forEach((b, v) => {
          h.has(b) || i("DET_CHASE_PLACE_MISSING", "".concat(k, ".decoys[").concat(v, "]"), 'the decoy "'.concat(b, '" is not one of the places'));
        }), a.has(m.item) || i("DET_CHASE_ITEM_MISSING", "".concat(k, ".item"), 'the clue item "'.concat(m.item, '" does not exist')), new Set(m.decoys.filter((b) => b !== m.to)).size < 1 && i("DET_CHASE_FEW_DECOYS", "".concat(k, ".decoys"), "the leg ".concat(m.from, " -> ").concat(m.to, " needs at least 1 decoy place (other than ").concat(m.to, ")"));
      });
      const p = /* @__PURE__ */ new Set([u.start]);
      let f = u.start;
      u.route.forEach((m, g) => {
        m.from !== f && i("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(g, "].from"), "the leg ".concat(g + 1, ' starts at "').concat(m.from, '" but the trail is at "').concat(f, '"')), p.has(m.to) && i("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(g, "].to"), 'the trail goes back to "'.concat(m.to, '", a place it has already visited')), p.add(m.to), f = m.to;
      }), u.unit !== void 0 && !o.has(u.unit) && i("DET_ROOM_UNIT_MISSING", "chase.unit", 'the chase belongs to the unit "'.concat(u.unit, '", which the course does not have')), u.unit === void 0 && !u.final && i("DET_FINAL_MISSING", "chase", "the chase is neither the challenge of a unit (`unit`) nor the final challenge (`final`)");
    }
    return n;
  }
  const Vw = { id: "detective", theme: "noir", requiresSection: true, schema: Uw, textRefs: (t) => Kw(t), assetRefs: Gw, validate: qw, lint: (t, e) => Hw(t, e), codes: Bw, warnings: ["DET_ALIAS_NOT_FACT"] }, Yw = U({ id: P, year: L().int().refine((t) => t !== 0, "there is no year 0"), label: C, text: C.optional(), article: P.optional() }), Jw = U({ id: P, x: L(), y: L(), label: C, article: P }), Qw = U({ asset: P, width: L().positive(), height: L().positive(), places: N(Jw).default([]) }), Xw = U({ id: P, clue: C, article: P, item: P, collectible: C }), ey = U({ id: P, unit: P, title: C, intro: C.optional(), steps: N(Xw) }), ty = ["n", "v", "adj", "adv", "prep", "conj", "phrase"], sy = U({ id: P, term: C, lemma: C.optional(), gloss: C, pos: Y(ty).optional(), note: C.optional() }), pl = U({ timeline: N(Yw).default([]), map: Qw.optional(), hunts: N(ey).default([]), glossary: Q(E(), N(sy)).default({}), reader: J().default(false) }), ny = /* @__PURE__ */ new Set(["the", "and", "for", "are", "was", "its", "with", "from", "that", "this"]), _s = (t) => Pe(t, { fold: true });
  function iy(t, e) {
    const s = new Set(t.split(" ").filter(Boolean)), n = [...s], i = _s(e).split(" ").filter((r) => r.length > 2 || /^\d+$/.test(r)).filter((r) => !ny.has(r));
    return i.length === 0 ? true : i.every((r) => {
      if (/^\d+$/.test(r)) return s.has(r);
      const o = r.length >= 7 ? r.slice(0, r.length - 2) : r.length >= 5 ? r.slice(0, r.length - 1) : r;
      return n.some((a) => a.startsWith(o));
    });
  }
  function ry(t, e) {
    var _a3, _b3;
    const s = t, n = (r) => typeof r == "string" ? e.hasAccepted(r) ? e.accepted(r) : e.text(r) ? [e.text(r)] : [] : [], i = (r) => {
      var _a4;
      const o = (_a4 = s.options) == null ? void 0 : _a4.find((a) => a.id === r);
      return o ? n(o.text) : [];
    };
    switch (t.kind) {
      case "mcq":
        return [i(s.answer)];
      case "typed":
        return [n(s.answer)];
      case "cloze":
        return ((_a3 = s.gaps) != null ? _a3 : []).map((r) => n(r.answer));
      case "flashcard":
        return [n(s.back)];
      case "hotspot": {
        const r = (_b3 = s.regions) == null ? void 0 : _b3.find((o) => o.id === s.answer);
        return [r ? n(r.label) : []];
      }
      case "listening":
        return s.mode === "choose" ? [i(s.answer)] : [n(s.answer)];
      default:
        return null;
    }
  }
  function fl(t, e, s) {
    const n = ry(t, s);
    if (!n) return null;
    const i = _s(e.bodyKeys.map((r) => {
      var _a3;
      return (_a3 = s.text(r)) != null ? _a3 : "";
    }).join(" "));
    return n.every((r) => r.length === 0 || r.some((o) => iy(i, o)));
  }
  function oy(t) {
    const e = t.normalize("NFKC").toLowerCase(), s = /(\d{1,4})/.exec(e);
    if (!s) return;
    const n = Number(s[1]);
    return !Number.isFinite(n) || n === 0 ? void 0 : /\bbce?\b|\bb\.c\.|\bpr\.?\s*kr|\bpr\.?\s*n\.?\s*e\b|\bprije\s+krista/.test(e) ? -n : n;
  }
  const ay = { mcq: 0, typed: 1, cloze: 2, "true-false": 3, listening: 4, hotspot: 5, "multi-select": 6, flashcard: 7, "match-pairs": 8, order: 9, "sort-groups": 10, crossword: 11, "word-search": 12 }, ml = (t, e) => {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }, gl = (t) => t.flatMap((e) => e.split(/\n+/)).map((e) => e.trim()).filter(Boolean);
  function cy(t, e = vl(t)) {
    const s = Tt(t.units), n = (i) => {
      const r = i.unit ? s.indexOf(i.unit) : -1;
      return r < 0 ? s.length : r;
    };
    return e.filter((i) => !i.virtual).map((i, r) => ({ a: i, i: r })).sort((i, r) => n(i.a) - n(r.a) || i.i - r.i).map((i) => i.a);
  }
  const kl = (t, e) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t == null ? void 0 : t.glossary) == null ? void 0 : _a3[e]) != null ? _b3 : [];
  };
  function bl(t) {
    var _a3;
    const e = (_a3 = t.extensions) == null ? void 0 : _a3.passage;
    if (typeof e != "object" || e === null) return null;
    const s = e;
    if (typeof s.article != "string" || s.article === "") return null;
    const n = s.paragraphs;
    if (Array.isArray(n) && n.length === 2 && n.every((i) => Number.isInteger(i) && i >= 1)) {
      const [i, r] = n;
      return { article: s.article, paragraphs: [Math.min(i, r), Math.max(i, r)] };
    }
    return { article: s.article };
  }
  function vl(t) {
    const e = t.encyclopedia.articles.map((i) => ({ id: i.id, titleKey: i.title, bodyKeys: [i.body], ...i.unit ? { unit: i.unit } : {}, ...i.asset ? { assetId: i.asset } : {}, citations: i.citations, related: i.related, virtual: false })), s = [...e], n = new Map(t.factbase.map((i) => [i.id, i.claim]));
    for (const i of t.units) if (!e.some((r) => r.unit === i.id)) for (const r of t.objectives.filter((o) => o.unit === i.id)) s.push({ id: "auto-".concat(r.id), titleKey: r.text, bodyKeys: [r.text, ...r.facts.map((o) => n.get(o)).filter((o) => !!o)], unit: i.id, citations: r.facts, related: [], virtual: true });
    return s;
  }
  function ly(t, e, s) {
    const n = [], i = new Map(t.objectives.map((r) => [r.id, new Set(r.facts)]));
    for (const r of Tt(t.units)) {
      const o = t.items.filter((u) => ml(t, u) === r);
      if (o.length === 0) continue;
      const a = e.filter((u) => u.unit === r).slice(0, 6), c = /* @__PURE__ */ new Set(), l = [];
      for (const u of a) {
        const h = new Set(u.citations), p = o.filter((k) => {
          var _a3;
          return u.virtual ? k.objective === u.id.slice(5) : [...(_a3 = i.get(k.objective)) != null ? _a3 : []].some((b) => h.has(b));
        }), f = (p.length > 0 ? p : o).filter((k) => !c.has(k.id)), m = (k) => {
          var _a3;
          return (fl(k, u, s) === false ? 100 : 0) + ((_a3 = ay[k.kind]) != null ? _a3 : 20) + (p.includes(k) ? 0 : 40);
        }, g = [...f, ...o.filter((k) => !c.has(k.id) && !f.includes(k))].sort((k, b) => m(k) - m(b))[0];
        g && (c.add(g.id), l.push({ id: "s-".concat(u.id), article: u.id, item: g.id }));
      }
      l.length > 0 && n.push({ id: "h-".concat(r), unit: r, steps: l, auto: true });
    }
    return n;
  }
  function uy(t, e = 2) {
    const s = [...new Set(t.map((i) => i.unit))], n = [];
    for (const i of s) {
      const r = t.filter((a) => a.unit === i).flatMap((a) => a.steps), o = e >= 2 && r.length >= 2 ? [r[0], r[r.length - 1]] : r.slice(0, 1);
      for (const a of o) n.some((c) => c.id === a.id) || n.push(a);
    }
    return n;
  }
  function dy(t, e, s) {
    var _a3, _b3;
    const n = [];
    for (const i of t.items) if (!(i.kind !== "order" || i.timeline !== true)) for (const r of i.items) {
      const o = r.when ? s.text(r.when) : void 0, a = o ? oy(o) : void 0;
      if (a === void 0) continue;
      const c = _s((_a3 = s.text(r.text)) != null ? _a3 : ""), l = (_b3 = e.find((u) => {
        var _a4;
        return !u.virtual && c.includes(_s((_a4 = s.text(u.titleKey)) != null ? _a4 : "\0"));
      })) != null ? _b3 : e.find((u) => !u.virtual && hy(c, _s(u.bodyKeys.map((h) => {
        var _a4;
        return (_a4 = s.text(h)) != null ? _a4 : "";
      }).join(" "))) >= 2);
      n.push({ id: "".concat(i.id, ".").concat(r.id), year: a, label: r.text, ...r.when ? { whenKey: r.when } : {}, ...l ? { article: l.id } : {} });
    }
    return n.sort((i, r) => i.year - r.year);
  }
  const hy = (t, e) => {
    const s = new Set(e.split(" "));
    return t.split(" ").filter((n) => n.length >= 5 && s.has(n)).length;
  };
  function py(t) {
    const e = t.assets.find((s) => s.kind === "image");
    return e ? { asset: e.id, width: 0, height: 0, places: [], auto: true } : void 0;
  }
  function wl(t, e, s) {
    const n = vl(t), i = e && e.hunts.length > 0 ? e.hunts.map((a) => ({ id: a.id, unit: a.unit, title: a.title, ...a.intro ? { intro: a.intro } : {}, steps: a.steps.map((c) => ({ ...c })), auto: false })) : ly(t, n, s), r = e && e.timeline.length > 0 ? [...e.timeline].map((a) => ({ id: a.id, year: a.year, label: a.label, ...a.text ? { text: a.text } : {}, ...a.article ? { article: a.article } : {} })).sort((a, c) => a.year - c.year) : dy(t, n, s), o = (e == null ? void 0 : e.map) ? { asset: e.map.asset, width: e.map.width, height: e.map.height, places: e.map.places.map((a) => ({ ...a })), auto: false } : py(t);
    return { articles: n, hunts: i, timeline: r, ...o ? { map: o } : {}, finalSteps: uy(i) };
  }
  const fy = (t) => t;
  function my(t, e) {
    const s = [], n = new Set(e.units.map((c) => c.id)), i = (c, l, u) => {
      const h = /* @__PURE__ */ new Set();
      l.forEach((p, f) => {
        h.has(p) && s.push({ code: "DUPLICATE_ID", path: fy("".concat(u, "[").concat(f, "].id")), message: "the ".concat(c, ' id "').concat(p, '" is used twice') }), h.add(p);
      });
    };
    i("hunt", t.hunts.map((c) => c.id), "hunts"), i("timeline event", t.timeline.map((c) => c.id), "timeline"), t.map && i("place", t.map.places.map((c) => c.id), "map.places");
    const r = t.hunts.flatMap((c, l) => c.steps.map((u, h) => ({ id: u.id, path: "hunts[".concat(l, "].steps[").concat(h, "].id") }))), o = /* @__PURE__ */ new Set();
    for (const c of r) o.has(c.id) && s.push({ code: "DUPLICATE_ID", path: c.path, message: 'the step id "'.concat(c.id, '" is used twice (step ids are unique across all hunts)') }), o.add(c.id);
    t.hunts.forEach((c, l) => {
      n.has(c.unit) || s.push({ code: "UNKNOWN_UNIT", path: "hunts[".concat(l, "].unit"), message: 'unknown unit "'.concat(c.unit, '"') });
    });
    const a = new Set(e.encyclopedia.articles.map((c) => c.id));
    for (const [c, l] of Object.entries(t.glossary)) a.has(c) || s.push({ code: "UNKNOWN_ARTICLE", path: "glossary.".concat(c), message: 'the glossary belongs to the article "'.concat(c, '", which does not exist') }), i("gloss entry", l.map((u) => u.id), "glossary.".concat(c));
    return s;
  }
  const gy = (t, e) => {
    var _a3;
    const s = [], { pack: n } = e, i = (_a3 = e.resolvers[n.sourceLang]) != null ? _a3 : Object.values(e.resolvers)[0], r = wl(n, t, i), o = new Map(r.articles.map((u) => [u.id, u])), a = new Map(n.items.map((u) => [u.id, u])), c = new Map(n.assets.map((u) => [u.id, u]));
    r.hunts.forEach((u, h) => {
      u.steps.length === 0 && s.push({ code: "ENC_HUNT_EMPTY", path: "hunts[".concat(h, "]"), message: 'the hunt "'.concat(u.id, '" has no steps') });
      const p = /* @__PURE__ */ new Map();
      u.steps.forEach((f, m) => {
        const g = "hunts[".concat(h, "].steps[").concat(m, "]"), k = o.get(f.article), b = a.get(f.item);
        if (k || s.push({ code: "ENC_HUNT_TARGET_MISSING", path: "".concat(g, ".article"), message: 'the step "'.concat(f.id, '" sends the learner to the article "').concat(f.article, '", which does not exist') }), b || s.push({ code: "ENC_HUNT_ITEM_MISSING", path: "".concat(g, ".item"), message: 'the step "'.concat(f.id, '" asks the item "').concat(f.item, '", which does not exist') }), b) {
          const v = p.get(b.id);
          v ? s.push({ code: "ENC_HUNT_ITEM_DUPLICATE", path: "".concat(g, ".item"), message: 'the steps "'.concat(v, '" and "').concat(f.id, '" of the hunt "').concat(u.id, '" ask the same item "').concat(b.id, '"; the second can never come up') }) : p.set(b.id, f.id);
          const w = ml(n, b);
          w && w !== u.unit && s.push({ code: "ENC_HUNT_ITEM_OTHER_UNIT", severity: "warning", path: "".concat(g, ".item"), message: 'the item "'.concat(b.id, '" belongs to the unit "').concat(w, '", not to the hunt\'s unit "').concat(u.unit, '"') });
        }
        if (k && b) for (const v of e.editions) {
          const w = e.resolvers[v];
          w && fl(b, k, w) === false && s.push({ code: "ENC_ANSWER_NOT_IN_ARTICLE", severity: "warning", path: g, lang: v, message: 'the right answer of "'.concat(b.id, '" does not appear in the article "').concat(k.id, '": the hunt would send the learner to a page that does not hold the answer') });
        }
      });
    });
    const l = new Set(r.hunts.filter((u) => u.steps.length > 0).map((u) => u.unit));
    if (n.units.forEach((u, h) => {
      l.has(u.id) || s.push({ code: "ENC_UNIT_NO_HUNT", path: "hunts", message: 'no hunt covers the unit "'.concat(u.id, '" (units[').concat(h, "]): it could never be mastered in the encyclopedia") });
    }), r.timeline.forEach((u, h) => {
      u.article && !o.has(u.article) && s.push({ code: "ENC_TIMELINE_ARTICLE_MISSING", path: "timeline[".concat(h, "].article"), message: 'the event "'.concat(u.id, '" opens the article "').concat(u.article, '", which does not exist') });
    }), r.map) {
      const u = r.map, h = c.get(u.asset);
      h && h.kind !== "image" && s.push({ code: "ENC_MAP_NO_IMAGE", path: "map.asset", message: 'the map asset "'.concat(u.asset, '" is ').concat(h.kind === "audio" ? "audio" : "not an image", ", not an image") }), u.places.forEach((p, f) => {
        o.has(p.article) || s.push({ code: "ENC_MAP_ARTICLE_MISSING", path: "map.places[".concat(f, "].article"), message: 'the place "'.concat(p.id, '" opens the article "').concat(p.article, '", which does not exist') }), u.width > 0 && u.height > 0 && (p.x < 0 || p.x > u.width || p.y < 0 || p.y > u.height) && s.push({ code: "ENC_MAP_PLACE_OUTSIDE", path: "map.places[".concat(f, "]"), message: 'the place "'.concat(p.id, '" (').concat(p.x, ", ").concat(p.y, ") is outside the ").concat(u.width, " x ").concat(u.height, " image") });
      });
    }
    return s.push(...ky(t, e, i)), s;
  };
  function ky(t, e, s) {
    var _a3;
    const n = [], i = new Map(e.pack.encyclopedia.articles.map((r) => {
      var _a4;
      return [r.id, (_a4 = s.text(r.body)) != null ? _a4 : ""];
    }));
    for (const [r, o] of Object.entries((_a3 = t == null ? void 0 : t.glossary) != null ? _a3 : {})) {
      const a = i.get(r);
      if (a === void 0) continue;
      const c = /* @__PURE__ */ new Map();
      o.forEach((u, h) => {
        const p = s.text(u.term);
        if (p === void 0) return;
        const f = "glossary.".concat(r, "[").concat(h, "]");
        a.includes(p) || n.push({ code: "GLOSS_TERM_NOT_IN_TEXT", path: "".concat(f, ".term"), message: 'the gloss "'.concat(u.id, '" has the term "').concat(p, '", which is not in the text of the article "').concat(r, '"') });
        const m = c.get(p);
        m ? n.push({ code: "GLOSS_DUPLICATE", path: "".concat(f, ".term"), message: 'the glosses "'.concat(m, '" and "').concat(u.id, '" both gloss "').concat(p, '" in the article "').concat(r, '"') }) : c.set(p, u.id);
      });
      const l = a.split(/\s+/).filter(Boolean).length;
      l >= 300 && o.length < 8 && n.push({ code: "GLOSS_COVERAGE", severity: "warning", path: "glossary.".concat(r), message: 'the text "'.concat(r, '" has ').concat(l, " words but only ").concat(o.length, " glossed words (at least 8 help the learner)") });
    }
    return n;
  }
  const by = { id: "encyclopedia", theme: "parchment", requiresSection: false, schema: pl, textRefs: (t) => {
    var _a3, _b3;
    return [...t.timeline.flatMap((e, s) => [{ path: "timeline[".concat(s, "].label"), key: e.label, role: "string" }, ...e.text ? [{ path: "timeline[".concat(s, "].text"), key: e.text, role: "string" }] : []]), ...((_b3 = (_a3 = t.map) == null ? void 0 : _a3.places) != null ? _b3 : []).map((e, s) => ({ path: "map.places[".concat(s, "].label"), key: e.label, role: "string" })), ...t.hunts.flatMap((e, s) => [{ path: "hunts[".concat(s, "].title"), key: e.title, role: "string" }, ...e.intro ? [{ path: "hunts[".concat(s, "].intro"), key: e.intro, role: "string" }] : [], ...e.steps.flatMap((n, i) => [{ path: "hunts[".concat(s, "].steps[").concat(i, "].clue"), key: n.clue, role: "string" }, { path: "hunts[".concat(s, "].steps[").concat(i, "].collectible"), key: n.collectible, role: "string" }])]), ...Object.entries(t.glossary).flatMap(([e, s]) => s.flatMap((n, i) => {
      const r = "glossary.".concat(e, "[").concat(i, "]");
      return [{ path: "".concat(r, ".term"), key: n.term, role: "string" }, { path: "".concat(r, ".gloss"), key: n.gloss, role: "string" }, ...n.lemma ? [{ path: "".concat(r, ".lemma"), key: n.lemma, role: "string" }] : [], ...n.note ? [{ path: "".concat(r, ".note"), key: n.note, role: "string" }] : []];
    }))];
  }, assetRefs: (t) => t.map ? [{ path: "map.asset", id: t.map.asset }] : [], validate: my, lint: gy, codes: ["GLOSS_TERM_NOT_IN_TEXT", "GLOSS_DUPLICATE", "GLOSS_COVERAGE", "ENC_HUNT_TARGET_MISSING", "ENC_HUNT_ITEM_MISSING", "ENC_HUNT_ITEM_DUPLICATE", "ENC_UNIT_NO_HUNT", "ENC_HUNT_EMPTY", "ENC_TIMELINE_ARTICLE_MISSING", "ENC_MAP_ARTICLE_MISSING", "ENC_MAP_PLACE_OUTSIDE", "ENC_MAP_NO_IMAGE", "ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT"], warnings: ["ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT", "GLOSS_COVERAGE"] }, vy = U({ name: C, line: C, hint: C.optional(), right: C.optional(), wrong: C.optional(), portrait: P.optional() }), wy = U({ to: P, items: N(P).default([]) }), yy = U({ id: P, name: C, description: C.optional(), character: vy.optional(), doors: N(wy).default([]), key: J().default(false), objective: P.optional(), asset: P.optional() }), Sy = U({ id: P, unit: P, name: C, description: C.optional(), entry: P, rooms: N(yy).min(1) }), $y = U({ name: C.optional(), description: C.optional(), size: L().int().min(3).max(20).default(8) }), zy = U({ torches: L().int().min(0).max(9).default(3), wings: N(Sy).default([]), throne: $y.optional() }), _y = ["MAZE_WING_UNIT_MISSING", "MAZE_ENTRY_MISSING", "MAZE_DOOR_TARGET_MISSING", "MAZE_DOOR_ITEM_MISSING", "MAZE_OBJECTIVE_MISSING", "MAZE_DUPLICATE", "MAZE_UNIT_NO_WING", "MAZE_DOOR_NO_ITEMS", "MAZE_ROOM_UNREACHABLE", "MAZE_NO_KEY_ROOM", "MAZE_KEY_UNREACHABLE", "MAZE_KEY_AT_ENTRY", "MAZE_DEAD_END", "MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], jy = ["MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], yl = 3, xy = 8, Ey = 4, Le = (t) => ({ ui: t }), Ay = (t) => t ? { key: t } : void 0, Ty = (t, e) => t ? { name: { key: t.name }, line: { key: t.line }, ...t.hint ? { hint: { key: t.hint } } : {}, ...t.right ? { right: { key: t.right } } : {}, ...t.wrong ? { wrong: { key: t.wrong } } : {}, ...t.portrait ? { portrait: t.portrait } : {}, look: e % 6 } : void 0, Sl = (t, e) => ({ name: Le("maze.auto.".concat(t, ".name")), line: Le("maze.auto.".concat(t, ".line")), right: Le("maze.auto.".concat(t, ".right")), wrong: Le("maze.auto.".concat(t, ".wrong")), look: e % 6 }), $l = ["maze.auto.gallery", "maze.auto.gallery2", "maze.auto.gallery3"];
  function Iy(t, e, s = e) {
    var _a3, _b3, _c2;
    const n = t.units.find((h) => h.id === e), i = hn(t, e).map((h) => ({ o: h, items: dc(t, h.id).map((p) => p.id) })).filter((h) => h.items.length > 0), r = [...new Set(i.flatMap((h) => h.items))], o = [{ id: "hall", name: Le("maze.auto.hall"), pool: [], who: "gate", key: false, description: Le("maze.auto.hall.desc") }];
    i.forEach((h, p) => o.push({ id: "r-".concat(h.o.id), name: { key: h.o.text }, pool: h.items, who: p % 2 === 0 ? "scholar" : "archivist", key: false }));
    for (let h = 0; o.length < Ey; h++) o.push({ id: "gallery-".concat(h + 1), name: Le($l[h % $l.length]), pool: r, who: "scholar", key: false });
    o.push({ id: "key", name: Le("maze.auto.keyroom"), pool: r, who: "keeper", key: true, description: Le("maze.auto.keyroom.desc") });
    const a = o.map((h, p) => {
      const f = o[p + 1];
      return { id: h.id, name: h.name, ...h.description ? { description: h.description } : {}, character: Sl(h.who, p), doors: f ? [{ to: f.id, items: f.pool.length > 0 ? f.pool : r }] : [], key: h.key };
    }), c = Math.floor((o.length - 1) / 2), l = a[c], u = o[c + 1];
    if (l && u) {
      const h = (_b3 = (_a3 = l.doors[0]) == null ? void 0 : _a3.items) != null ? _b3 : r;
      a.push({ id: "side", name: Le("maze.auto.side"), description: Le("maze.auto.side.desc"), character: Sl("archivist", 3), doors: [{ to: u.id, items: h }], key: false }), l.doors.push({ to: "side", items: h });
    }
    return { id: s, unit: e, name: (_c2 = Ay(n == null ? void 0 : n.title)) != null ? _c2 : Le("maze.auto.wing"), entry: "hall", rooms: a, auto: true };
  }
  const My = (t, e, s) => {
    const n = new Set(t.items.map((o) => o.id)), i = new Map(e.rooms.map((o) => [o.id, o])), r = (o) => {
      var _a3, _b3;
      const a = o.items.length > 0 ? o.items : ((_a3 = i.get(o.to)) == null ? void 0 : _a3.objective) ? dc(t, (_b3 = i.get(o.to)) == null ? void 0 : _b3.objective).map((c) => c.id) : [];
      return [...new Set(a)].filter((c) => n.has(c));
    };
    return { id: e.id, unit: e.unit, name: { key: e.name }, ...e.description ? { description: { key: e.description } } : {}, entry: e.entry, auto: false, rooms: e.rooms.map((o, a) => {
      const c = Ty(o.character, s * 3 + a);
      return { id: o.id, name: { key: o.name }, ...o.description ? { description: { key: o.description } } : {}, ...c ? { character: c } : {}, doors: o.doors.map((l) => ({ to: l.to, items: r(l) })), key: o.key, ...o.asset ? { asset: o.asset } : {} };
    }) };
  };
  function zl(t, e) {
    var _a3, _b3, _c2;
    const s = ((_a3 = e == null ? void 0 : e.wings) != null ? _a3 : []).map((u, h) => My(t, u, h)), n = new Set(s.map((u) => u.unit)), i = new Set(s.map((u) => u.id)), r = t.units.filter((u) => !n.has(u.id)).map((u) => Iy(t, u.id, i.has(u.id) ? "".concat(u.id, "-auto") : u.id)), o = Tt(t.units), a = (u) => {
      const h = o.indexOf(u.unit);
      return h < 0 ? o.length : h;
    }, c = [...s, ...r].map((u, h) => ({ w: u, i: h })).sort((u, h) => a(u.w) - a(h.w) || u.i - h.i).map((u) => u.w), l = e == null ? void 0 : e.throne;
    return { torches: (_b3 = e == null ? void 0 : e.torches) != null ? _b3 : yl, wings: c, throne: { ...(l == null ? void 0 : l.name) ? { name: { key: l.name } } : {}, ...(l == null ? void 0 : l.description) ? { description: { key: l.description } } : {}, size: (_c2 = l == null ? void 0 : l.size) != null ? _c2 : xy } };
  }
  const In = (t, e) => "".concat(t, ">").concat(e), wt = (t, e) => t.rooms.find((s) => s.id === e), js = (t) => t.rooms.filter((e) => e.key).map((e) => e.id);
  function _l(t, e) {
    var _a3, _b3;
    const s = new Set(t.rooms.map((r) => r.id)), n = /* @__PURE__ */ new Set();
    if (!s.has(e)) return n;
    const i = [e];
    for (n.add(e); i.length > 0; ) {
      const r = i.shift();
      for (const o of (_b3 = (_a3 = wt(t, r)) == null ? void 0 : _a3.doors) != null ? _b3 : []) s.has(o.to) && !n.has(o.to) && (n.add(o.to), i.push(o.to));
    }
    return n;
  }
  const jl = (t, e) => {
    const s = new Set(js(t));
    for (const n of _l(t, e)) if (s.has(n)) return true;
    return false;
  };
  function xl(t, e, s = /* @__PURE__ */ new Set()) {
    var _a3, _b3, _c2, _d2;
    const n = t.rooms.map((h) => h.id);
    if (!n.includes(e)) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const i = new Set(js(t)), r = /* @__PURE__ */ new Map([[e, 0]]), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    for (; ; ) {
      let h;
      for (const p of n) r.has(p) && !a.has(p) && (h === void 0 || r.get(p) < r.get(h)) && (h = p);
      if (h === void 0) break;
      a.add(h);
      for (const p of (_b3 = (_a3 = wt(t, h)) == null ? void 0 : _a3.doors) != null ? _b3 : []) {
        if (!n.includes(p.to)) continue;
        const f = r.get(h) + (s.has(In(h, p.to)) ? 1e-3 : 1);
        f < ((_c2 = r.get(p.to)) != null ? _c2 : 1 / 0) - 1e-9 && (r.set(p.to, f), o.set(p.to, h));
      }
    }
    let c;
    for (const h of n) i.has(h) && r.has(h) && (c === void 0 || r.get(h) < r.get(c)) && (c = h);
    if (c === void 0) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const l = [c];
    for (; l[0] !== e; ) l.unshift(o.get(l[0]));
    let u = 0;
    for (let h = 0; h + 1 < l.length; h++) s.has(In(l[h], l[h + 1])) || u++;
    return { from: e, found: true, path: l, next: (_d2 = l[1]) != null ? _d2 : null, locked: u };
  }
  const Oy = (t, e) => t ? [{ path: "".concat(e, ".name"), key: t.name, role: "string" }, { path: "".concat(e, ".line"), key: t.line, role: "string" }, ...t.hint ? [{ path: "".concat(e, ".hint"), key: t.hint, role: "string" }] : [], ...t.right ? [{ path: "".concat(e, ".right"), key: t.right, role: "string" }] : [], ...t.wrong ? [{ path: "".concat(e, ".wrong"), key: t.wrong, role: "string" }] : []] : [];
  function Ny(t) {
    var _a3, _b3;
    const e = [];
    return t.wings.forEach((s, n) => {
      e.push({ path: "wings[".concat(n, "].name"), key: s.name, role: "string" }), s.description && e.push({ path: "wings[".concat(n, "].description"), key: s.description, role: "string" }), s.rooms.forEach((i, r) => {
        const o = "wings[".concat(n, "].rooms[").concat(r, "]");
        e.push({ path: "".concat(o, ".name"), key: i.name, role: "string" }), i.description && e.push({ path: "".concat(o, ".description"), key: i.description, role: "string" }), e.push(...Oy(i.character, "".concat(o, ".character")));
      });
    }), ((_a3 = t.throne) == null ? void 0 : _a3.name) && e.push({ path: "throne.name", key: t.throne.name, role: "string" }), ((_b3 = t.throne) == null ? void 0 : _b3.description) && e.push({ path: "throne.description", key: t.throne.description, role: "string" }), e;
  }
  function Py(t) {
    const e = [];
    return t.wings.forEach((s, n) => s.rooms.forEach((i, r) => {
      var _a3;
      i.asset && e.push({ path: "wings[".concat(n, "].rooms[").concat(r, "].asset"), id: i.asset }), ((_a3 = i.character) == null ? void 0 : _a3.portrait) && e.push({ path: "wings[".concat(n, "].rooms[").concat(r, "].character.portrait"), id: i.character.portrait });
    })), e;
  }
  function Ry(t, e) {
    const s = [], n = new Set(e.units.map((a) => a.id)), i = new Set(e.items.map((a) => a.id)), r = new Set(e.objectives.map((a) => a.id)), o = /* @__PURE__ */ new Set();
    return t.wings.forEach((a, c) => {
      const l = "wings[".concat(c, "]");
      o.has(a.id) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(l, ".id"), message: 'two wings are called "'.concat(a.id, '"') }), o.add(a.id), n.has(a.unit) || s.push({ code: "MAZE_WING_UNIT_MISSING", path: "".concat(l, ".unit"), message: 'the wing "'.concat(a.id, '" belongs to the unit "').concat(a.unit, '", which the course does not have') });
      const u = /* @__PURE__ */ new Set();
      for (const [h, p] of a.rooms.entries()) u.has(p.id) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(l, ".rooms[").concat(h, "].id"), message: 'two rooms of the wing "'.concat(a.id, '" are called "').concat(p.id, '"') }), u.add(p.id);
      u.has(a.entry) || s.push({ code: "MAZE_ENTRY_MISSING", path: "".concat(l, ".entry"), message: 'the entrance "'.concat(a.entry, '" is not a room of the wing "').concat(a.id, '"') }), a.rooms.forEach((h, p) => {
        const f = "".concat(l, ".rooms[").concat(p, "]");
        h.objective && !r.has(h.objective) && s.push({ code: "MAZE_OBJECTIVE_MISSING", path: "".concat(f, ".objective"), message: 'unknown objective "'.concat(h.objective, '"') });
        const m = /* @__PURE__ */ new Set();
        h.doors.forEach((g, k) => {
          const b = "".concat(f, ".doors[").concat(k, "]");
          u.has(g.to) || s.push({ code: "MAZE_DOOR_TARGET_MISSING", path: "".concat(b, ".to"), message: 'the door of "'.concat(h.id, '" leads to "').concat(g.to, '", which is not a room of the wing "').concat(a.id, '"') }), m.has(g.to) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(b, ".to"), message: '"'.concat(h.id, '" has two doors to "').concat(g.to, '"') }), m.add(g.to), g.items.forEach((v, w) => {
            i.has(v) || s.push({ code: "MAZE_DOOR_ITEM_MISSING", path: "".concat(b, ".items[").concat(w, "]"), message: 'the door to "'.concat(g.to, '" asks the unknown item "').concat(v, '"') });
          });
        });
      });
    }), s;
  }
  const Dy = (t, e, s, n) => {
    const i = new Set(t.rooms.map((a) => a.id));
    if (!i.has(t.entry)) return;
    const r = js(t), o = _l(t, t.entry);
    if (t.rooms.forEach((a, c) => {
      const l = "".concat(e, ".rooms[").concat(c, "]");
      o.has(a.id) || s.push({ code: "MAZE_ROOM_UNREACHABLE", path: l, message: 'the room "'.concat(a.id, '" of the wing "').concat(t.id, '" cannot be reached from the entrance "').concat(t.entry, '"') }), a.doors.forEach((u, h) => {
        var _a3, _b3;
        i.has(u.to) && u.items.length === 0 && s.push({ code: "MAZE_DOOR_NO_ITEMS", path: "".concat(l, ".doors[").concat(h, "]"), message: 'the door from "'.concat(a.id, '" to "').concat(u.to, '" has no question to ask (list items, or give the room beyond an objective)') });
        for (const p of u.items) {
          const f = (_a3 = n.items.find((g) => g.id === p)) == null ? void 0 : _a3.objective, m = (_b3 = n.objectives.find((g) => g.id === f)) == null ? void 0 : _b3.unit;
          m && m !== t.unit && s.push({ code: "MAZE_DOOR_ITEM_OTHER_UNIT", severity: "warning", path: "".concat(l, ".doors[").concat(h, "]"), message: 'the door to "'.concat(u.to, '" asks "').concat(p, '", which belongs to the unit "').concat(m, '", not to the wing\'s unit "').concat(t.unit, '"') });
        }
      });
    }), r.length === 0) {
      s.push({ code: "MAZE_NO_KEY_ROOM", path: e, message: 'the wing "'.concat(t.id, '" has no key room (a room with key: true), so it can never be won') });
      return;
    }
    if (r.includes(t.entry) && s.push({ code: "MAZE_KEY_AT_ENTRY", path: e, message: 'the key of the wing "'.concat(t.id, '" lies in the entrance hall: no door would ask a question') }), !r.some((a) => o.has(a))) {
      s.push({ code: "MAZE_KEY_UNREACHABLE", path: e, message: 'no key room of the wing "'.concat(t.id, '" can be reached from the entrance') });
      return;
    }
    t.rooms.forEach((a, c) => {
      o.has(a.id) && !jl(t, a.id) && s.push({ code: "MAZE_DEAD_END", path: "".concat(e, ".rooms[").concat(c, "]"), message: 'from the room "'.concat(a.id, '" no door leads on to a key room: a learner who walks in is stuck') });
    });
  };
  function Ly(t, e) {
    var _a3, _b3;
    const s = [], { pack: n } = e;
    ((_a3 = t == null ? void 0 : t.torches) != null ? _a3 : yl) < 1 && s.push({ code: "MAZE_TOO_FEW_TORCHES", severity: "warning", path: "torches", message: "with fewer than 1 torch the first wrong answer already sends the learner back to the entrance" });
    const i = (_b3 = t == null ? void 0 : t.wings) != null ? _b3 : [], r = zl(n, t);
    for (const o of n.units) i.length > 0 && !i.some((a) => a.unit === o.id) && s.push({ code: "MAZE_UNIT_NO_WING", path: "wings", message: 'no wing of the section covers the unit "'.concat(o.id, '": the castle builds an automatic wing for it, but a unit no authored wing covers is easy to forget') });
    return r.wings.forEach((o) => {
      const a = o.auto ? -1 : i.findIndex((c) => c.id === o.id);
      Dy(o, a < 0 ? "auto[".concat(o.id, "]") : "wings[".concat(a, "]"), s, n);
    }), s;
  }
  const Cy = { id: "mindmaze", theme: "castle", requiresSection: false, schema: zy, textRefs: Ny, assetRefs: Py, validate: Ry, lint: Ly, codes: _y, warnings: jy }, Zy = /* @__PURE__ */ new Set(["du", "dich", "dir", "dein", "deine", "deinen", "deinem", "deiner", "deines", "bist", "hast", "kannst", "willst", "musst", "sollst", "darfst", "möchtest", "wirst"]), Uy = /* @__PURE__ */ new Set(["Sie", "Ihr", "Ihre", "Ihren", "Ihrem", "Ihrer", "Ihres"]);
  function By(t) {
    var _a3;
    const e = { du: false, sie: false };
    let s = true, n = 0;
    for (const i of t.matchAll(new RegExp("\\p{L}+", "gu"))) {
      const r = t.slice(n, i.index);
      /[.!?:]/.test(r) && (s = true), n = ((_a3 = i.index) != null ? _a3 : 0) + i[0].length;
      const o = i[0];
      Zy.has(o.toLowerCase()) ? e.du = true : (o === "Ihnen" || !s && Uy.has(o)) && (e.sie = true), s = false;
    }
    return e;
  }
  const Fy = U({ id: P, name: C, learner: J().default(false), portrait: P.optional() }), Ky = U({ id: P, say: P, text: C, translation: C.optional(), audio: P.optional(), listen: J().default(false), next: P.nullable() }), qy = U({ id: P, reply: P, help: C.optional(), youSay: C.optional(), next: P.nullable() }), Gy = et([Ky, qy]), Wy = U({ id: P, unit: P.optional(), title: C, setting: C.optional(), cefr: Y(Li).optional(), start: P, lines: N(Gy).min(1) }), Hy = U({ id: P, text: C, gloss: C, item: P }), El = U({ speakers: N(Fy).default([]), scenes: N(Wy).default([]), garden: N(Hy).default([]), finale: P.optional(), theme: E().optional() }), qe = (t) => "reply" in t, Se = (t) => "say" in t, $e = (t, e) => e == null ? void 0 : t.lines.find((s) => s.id === e);
  function xs(t) {
    var _a3;
    const e = [], s = /* @__PURE__ */ new Set();
    let n = t.start;
    for (; n !== null; ) {
      const i = $e(t, n);
      if (!i) return { path: e, ends: false, dangling: n };
      if (s.has(i.id)) return { path: e, ends: false, loopAt: (_a3 = e[e.length - 1]) != null ? _a3 : i.id };
      s.add(i.id), e.push(i.id), n = i.next;
    }
    return { path: e, ends: true };
  }
  const Es = (t, e) => t.scenes.filter((s) => s.unit === e && s.id !== t.finale);
  function Vy(t) {
    var _a3;
    if (!t) return false;
    const e = t;
    switch (e.kind) {
      case "typed":
      case "crossword":
        return true;
      case "listening":
        return e.mode === "type";
      case "cloze":
        return ((_a3 = e.gaps) != null ? _a3 : []).some((s) => !s.bank);
      default:
        return false;
    }
  }
  const Yy = 0.5, Jy = [6, 14], Qy = [2, 6], Al = new Map(Li.map((t, e) => [t, e])), Xy = ["RP_UNIT_NO_SCENE", "RP_SCENE_UNIT_MISSING", "RP_START_MISSING", "RP_NEXT_MISSING", "RP_NO_END", "RP_LINE_UNREACHABLE", "RP_SPEAKER_MISSING", "RP_REPLY_ITEM_MISSING", "RP_SCENE_NO_REPLY", "RP_GARDEN_ITEM_MISSING", "RP_FINALE_MISSING", "RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE", "RP_REPLY_NO_HELP", "RP_UNIT_VOCAB_UNUSED", "RP_SCENE_LENGTH", "RP_SAY_GIVES_ANSWER", "RP_REGISTER_MIXED"], e0 = ["RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE", "RP_REPLY_NO_HELP", "RP_UNIT_VOCAB_UNUSED", "RP_SCENE_LENGTH", "RP_SAY_GIVES_ANSWER", "RP_REGISTER_MIXED"];
  function Tl(t, e) {
    var _a3, _b3;
    if (!t) return [];
    const s = t;
    switch (s.kind) {
      case "typed":
        return s.answer ? e.accepted(s.answer) : [];
      case "mcq": {
        const n = (_a3 = s.options) == null ? void 0 : _a3.find((r) => r.id === s.answer), i = n ? e.text(n.text) : void 0;
        return i ? [i] : [];
      }
      case "cloze":
        return ((_b3 = s.gaps) != null ? _b3 : []).flatMap((n) => e.accepted(n.answer));
      default:
        return [];
    }
  }
  const Mn = (t) => Pe(t, { fold: true });
  function t0(t) {
    const e = [], s = (n, i) => {
      i && e.push({ path: n, key: i, role: "string" });
    };
    return t.speakers.forEach((n, i) => s("speakers[".concat(i, "].name"), n.name)), t.scenes.forEach((n, i) => {
      s("scenes[".concat(i, "].title"), n.title), s("scenes[".concat(i, "].setting"), n.setting), n.lines.forEach((r, o) => {
        const a = "scenes[".concat(i, "].lines[").concat(o, "]");
        Se(r) ? (s("".concat(a, ".text"), r.text), s("".concat(a, ".translation"), r.translation)) : (s("".concat(a, ".help"), r.help), s("".concat(a, ".youSay"), r.youSay));
      });
    }), t.garden.forEach((n, i) => {
      s("garden[".concat(i, "].text"), n.text), s("garden[".concat(i, "].gloss"), n.gloss);
    }), e;
  }
  function s0(t) {
    const e = [];
    return t.speakers.forEach((s, n) => s.portrait && e.push({ path: "speakers[".concat(n, "].portrait"), id: s.portrait })), t.scenes.forEach((s, n) => s.lines.forEach((i, r) => {
      Se(i) && i.audio && e.push({ path: "scenes[".concat(n, "].lines[").concat(r, "].audio"), id: i.audio });
    })), e;
  }
  function n0(t) {
    const e = [], s = (n, i, r) => {
      const o = /* @__PURE__ */ new Set();
      n.forEach((a, c) => {
        o.has(a) && e.push({ code: "DUPLICATE_ID", path: i(c), message: "the ".concat(r, ' id "').concat(a, '" is used twice') }), o.add(a);
      });
    };
    return s(t.speakers.map((n) => n.id), (n) => "speakers[".concat(n, "].id"), "speaker"), s(t.scenes.map((n) => n.id), (n) => "scenes[".concat(n, "].id"), "scene"), t.scenes.forEach((n, i) => s(n.lines.map((r) => r.id), (r) => "scenes[".concat(i, "].lines[").concat(r, "].id"), 'line of scene "'.concat(n.id, '"'))), s(t.garden.map((n) => n.id), (n) => "garden[".concat(n, "].id"), "garden word"), e;
  }
  function i0(t, e) {
    var _a3, _b3, _c2;
    if (!t) return [];
    const { pack: s } = e, n = [], i = (f, m, g) => {
      n.push({ code: f, path: m, message: g });
    }, r = (f, m, g) => {
      n.push({ code: f, severity: "warning", path: m, message: g });
    }, o = new Map(s.items.map((f) => [f.id, f])), a = new Set(s.units.map((f) => f.id)), c = new Set(t.speakers.map((f) => f.id)), l = s.targetLang ? e.catalogs[s.targetLang] : void 0, u = s.cefr ? Al.get(s.cefr) : void 0, h = t.finale;
    h ? t.scenes.some((f) => f.id === h) || i("RP_FINALE_MISSING", "finale", 'the finale "'.concat(h, '" is not a scene of the section')) : i("RP_FINALE_MISSING", "finale", "the section names no finale scene: nothing mixes the units at the end (the boss)");
    for (const [f, m] of s.units.entries()) Es(t, m.id).length === 0 && i("RP_UNIT_NO_SCENE", "scenes", 'the unit "'.concat(m.id, '" (units[').concat(f, "]) has no scene: the learner cannot practise it in a conversation"));
    t.scenes.forEach((f, m) => {
      const g = "scenes[".concat(m, "]");
      f.id !== h && (!f.unit || !a.has(f.unit)) && i("RP_SCENE_UNIT_MISSING", "".concat(g, ".unit"), f.unit ? 'the scene "'.concat(f.id, '" belongs to the unknown unit "').concat(f.unit, '"') : 'the scene "'.concat(f.id, '" belongs to no unit (only the finale may)')), f.unit && f.id === h && !a.has(f.unit) && i("RP_SCENE_UNIT_MISSING", "".concat(g, ".unit"), 'the finale "'.concat(f.id, '" belongs to the unknown unit "').concat(f.unit, '"')), f.cefr && u !== void 0 && Al.get(f.cefr) > u && r("RP_CEFR_ABOVE_COURSE", "".concat(g, ".cefr"), 'the scene "'.concat(f.id, '" is ').concat(f.cefr, ", above the course level ").concat(s.cefr));
      const k = f.lines.some((b) => b.id === f.start);
      if (k || i("RP_START_MISSING", "".concat(g, ".start"), 'the start "'.concat(f.start, '" is not a line of the scene "').concat(f.id, '"')), f.lines.forEach((b, v) => {
        b.next !== null && !f.lines.some((w) => w.id === b.next) && i("RP_NEXT_MISSING", "".concat(g, ".lines[").concat(v, "].next"), 'the line "'.concat(b.id, '" goes on to "').concat(b.next, '", which is no line of the scene "').concat(f.id, '"')), Se(b) && !c.has(b.say) && i("RP_SPEAKER_MISSING", "".concat(g, ".lines[").concat(v, "].say"), 'the line "'.concat(b.id, '" is said by "').concat(b.say, '", who is not in speakers')), qe(b) && !o.has(b.reply) && i("RP_REPLY_ITEM_MISSING", "".concat(g, ".lines[").concat(v, "].reply"), 'the line "'.concat(b.id, '" asks the item "').concat(b.reply, '", which does not exist')), Se(b) && l && !l.strings[b.text] && r("RP_TEXT_NOT_TARGET", "".concat(g, ".lines[").concat(v, "].text"), 'the line "'.concat(b.id, '" says "').concat(b.text, '", which is not in the ').concat(s.targetLang, " catalog: a spoken line belongs to the target language"));
      }), k) {
        const b = xs(f);
        b.loopAt !== void 0 && i("RP_NO_END", "".concat(g, ".lines"), 'from the start of "'.concat(f.id, '" the lines lead round in a circle at "').concat(b.loopAt, '" and never reach a line whose next is null'));
        const v = new Set(b.path);
        f.lines.forEach((y, $) => {
          v.has(y.id) || i("RP_LINE_UNREACHABLE", "".concat(g, ".lines[").concat($, "]"), 'the line "'.concat(y.id, '" can never be reached from the start of "').concat(f.id, '"'));
        }), b.path.map((y) => $e(f, y)).filter(qe).length === 0 && i("RP_SCENE_NO_REPLY", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
      } else f.lines.some(qe) || i("RP_SCENE_NO_REPLY", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
    });
    const p = (_c2 = (_b3 = s.targetLang ? e.resolvers[s.targetLang] : void 0) != null ? _b3 : e.resolvers[(_a3 = e.editions[0]) != null ? _a3 : s.sourceLang]) != null ? _c2 : Object.values(e.resolvers)[0];
    if (t.scenes.forEach((f, m) => {
      const g = "scenes[".concat(m, "]"), k = f.lines.filter(qe);
      k.forEach((_) => {
        _.help || r("RP_REPLY_NO_HELP", "".concat(g, ".lines[").concat(f.lines.indexOf(_), "].help"), 'the reply "'.concat(_.id, '" has no help: after a miss the other speaker has nothing to say'));
      });
      const [b, v] = Jy, [w, y] = Qy;
      if ((f.lines.length < b || f.lines.length > v || k.length < w || k.length > y) && r("RP_SCENE_LENGTH", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has ').concat(f.lines.length, " lines and ").concat(k.length, " turns for the learner; a scene runs ").concat(b, " to ").concat(v, " lines with ").concat(w, " to ").concat(y, " turns")), !p) return;
      const $ = k.flatMap((_) => Tl(o.get(_.reply), p)), x = new Set($.map(Mn));
      for (const _ of f.lines) {
        const z = Se(_) && !_.listen ? p.text(_.text) : void 0;
        z && x.has(Mn(z)) && r("RP_SAY_GIVES_ANSWER", "".concat(g, ".lines[").concat(f.lines.indexOf(_), "].text"), 'the line "'.concat(_.id, '" says "').concat(z, '", which is also the answer to a turn of the scene: the learner can copy it'));
      }
      if (s.targetLang === "de") {
        const z = [...f.lines.filter(Se).map((O) => {
          var _a4;
          return (_a4 = p.text(O.text)) != null ? _a4 : "";
        }), ...$, ...k.map((O) => {
          var _a4;
          return O.youSay ? (_a4 = p.text(O.youSay)) != null ? _a4 : "" : "";
        })].map(By);
        z.some((O) => O.du) && z.some((O) => O.sie) && r("RP_REGISTER_MIXED", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" addresses people with both du and Sie: one scene keeps one register'));
      }
    }), p) for (const f of s.units) {
      const m = Es(t, f.id), g = t.garden.filter((v) => Il(s, v) === f.id);
      if (m.length === 0 || g.length < 2) continue;
      const k = " ".concat(m.flatMap((v) => v.lines.flatMap((w) => {
        var _a4, _b4;
        return Se(w) ? [(_a4 = p.text(w.text)) != null ? _a4 : ""] : [...Tl(o.get(w.reply), p), w.youSay ? (_b4 = p.text(w.youSay)) != null ? _b4 : "" : ""];
      })).map(Mn).join(" "), " "), b = g.filter((v) => {
        const w = p.text(v.text);
        return w !== void 0 && k.includes(" ".concat(Mn(w), " "));
      }).length;
      b / g.length < Yy && r("RP_UNIT_VOCAB_UNUSED", "scenes", 'the scenes of the unit "'.concat(f.id, '" use ').concat(b, " of its ").concat(g.length, " garden words: the conversation hardly practises what the unit teaches"));
    }
    for (const f of s.units) {
      const g = Es(t, f.id).flatMap((k) => k.lines.filter(qe)).map((k) => o.get(k.reply)).filter((k) => !!k);
      g.length > 0 && !g.some(Vy) && r("RP_REPLY_NOT_PRODUCTION", "scenes", 'every reply of the scenes of the unit "'.concat(f.id, '" is a choice: the learner never types the language'));
    }
    return t.garden.forEach((f, m) => {
      o.has(f.item) || i("RP_GARDEN_ITEM_MISSING", "garden[".concat(m, "].item"), 'the word "'.concat(f.id, '" is watered with the item "').concat(f.item, '", which does not exist')), l && !l.strings[f.text] && r("RP_TEXT_NOT_TARGET", "garden[".concat(m, "].text"), 'the word "'.concat(f.id, '" is "').concat(f.text, '", which is not in the ').concat(s.targetLang, " catalog"));
    }), n;
  }
  const r0 = { id: "roleplay", theme: "postcard", requiresSection: true, schema: El, textRefs: t0, assetRefs: s0, validate: n0, lint: i0, codes: Xy, warnings: e0 }, Il = (t, e) => {
    const s = t.items.find((n) => n.id === e.item);
    return s ? eb(t, s) : void 0;
  }, o0 = "#.,T~@NBG", a0 = "#T~", On = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }, Nn = ["up", "down", "left", "right"], Ce = (t) => "".concat(t[0], ",").concat(t[1]), ot = (t, e) => t[0] === e[0] && t[1] === e[1], Pn = (t, e) => Math.abs(t[0] - e[0]) + Math.abs(t[1] - e[1]), cr = (t, e) => Pn(t, e) === 1, es = (t, e) => {
    var _a3;
    return e[1] >= 0 ? (_a3 = t[e[1]]) == null ? void 0 : _a3[e[0]] : void 0;
  }, As = (t, e = false) => t !== void 0 && (t === "G" ? e : !a0.includes(t));
  function Ml(t) {
    const e = Math.max(0, ...t.map((r) => r.length));
    let s = null, n = null;
    const i = /* @__PURE__ */ new Set();
    return t.forEach((r, o) => {
      for (let a = 0; a < r.length; a++) {
        const c = r[a];
        o0.includes(c) || i.add(c), c === "@" && !s && (s = [a, o]), c === "G" && !n && (n = [a, o]);
      }
    }), { w: e, h: t.length, rows: [...t], ragged: t.some((r) => {
      var _a3, _b3;
      return r.length !== ((_b3 = (_a3 = t[0]) == null ? void 0 : _a3.length) != null ? _b3 : 0);
    }), start: s, gate: n, unknown: [...i] };
  }
  const Rn = (t, e) => [t[0] + On[e][0], t[1] + On[e][1]];
  function c0(t, e, s = {}) {
    var _a3;
    const n = /* @__PURE__ */ new Set([Ce(e)]), i = [e];
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      for (const a of Nn) {
        const c = Rn(o, a), l = Ce(c);
        n.has(l) || !As(es(t, c), s.gateOpen) || ((_a3 = s.blocked) == null ? void 0 : _a3.has(l)) || (n.add(l), i.push(c));
      }
    }
    return n;
  }
  function Ol(t, e, s, n = {}) {
    var _a3;
    if (s(e)) return [];
    const i = /* @__PURE__ */ new Map([[Ce(e), null]]), r = [e];
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      for (const c of Nn) {
        const l = Rn(a, c), u = Ce(l);
        if (!(i.has(u) || !As(es(t, l), n.gateOpen) || ((_a3 = n.blocked) == null ? void 0 : _a3.has(u)))) {
          if (i.set(u, a), s(l)) {
            const h = [l];
            for (let p = a; !ot(p, e); p = i.get(Ce(p))) h.unshift(p);
            return h;
          }
          r.push(l);
        }
      }
    }
    return null;
  }
  function Nl(t, e, s, n = {}) {
    return Ol(t, e, (i) => cr(i, s), n);
  }
  function Dn(t, e, s, n, i = false) {
    const r = new Set(n.filter((a) => !ot(a, s)).map(Ce)), o = c0(t, e, { blocked: r, gateOpen: i });
    return o.has(Ce(s)) ? true : Nn.some((a) => o.has(Ce(Rn(s, a))));
  }
  const Pl = 16, Rl = 11, l0 = (t) => Nn.map((e) => Rn(t, e));
  function u0(t, e) {
    const s = Math.max(0, Math.min(4, Math.floor(e)));
    for (let n = 0; n < 6; n++) {
      const i = d0("".concat(t, "#").concat(n), s, n >= 3);
      if (i) return i;
    }
    return h0(s);
  }
  function d0(t, e, s) {
    const n = new st("rpg-map:".concat(t)), i = Pl, r = Rl, o = Array.from({ length: r }, (j, I) => Array.from({ length: i }, (D, G) => G === 0 || I === 0 || G === i - 1 || I === r - 1 ? "#" : ".")), a = (j, I) => {
      const D = o[j[1]];
      D && (D[j[0]] = I);
    }, c = (j) => {
      var _a3, _b3;
      return (_b3 = (_a3 = o[j[1]]) == null ? void 0 : _a3[j[0]]) != null ? _b3 : "#";
    }, l = (j) => j[0] >= 1 && j[1] >= 1 && j[0] <= i - 2 && j[1] <= r - 2;
    if (!s) {
      const j = n.randint(5, i - 6), I = n.randint(2, r - 3), D = n.randint(1, 2);
      for (let G = 1; G <= r - 2; G++) for (let B = 1; B <= i - 2; B++) (B - j) ** 2 + (G - I) ** 2 * 1.5 <= D * D + n.random() * 1.6 && a([B, G], "~");
      for (let G = 1; G <= r - 2; G++) for (let B = 1; B <= i - 2; B++) {
        const H = B <= 1 || B >= i - 2 || G <= 1 || G >= r - 2;
        c([B, G]) === "." && n.random() < (H ? 0.34 : 0.1) && a([B, G], "T");
      }
    }
    const u = [1, n.randint(2, r - 3)], h = n.randint(2, r - 3), p = [i - 1, h], f = [i - 2, h];
    a(p, "G");
    const m = [u], g = 2 + n.randint(0, 1);
    for (let j = 1; j <= g; j++) m.push([Math.max(2, Math.min(i - 3, Math.round(1 + (i - 3) * j / (g + 1)) + n.randint(-1, 1))), n.randint(2, r - 3)]);
    m.push(f);
    const k = /* @__PURE__ */ new Set(), b = (j) => {
      l(j) && (a(j, ","), k.add(Ce(j)));
    };
    for (let j = 0; j + 1 < m.length; j++) {
      const I = m[j], D = m[j + 1], B = n.random() < 0.5 ? [D[0], I[1]] : [I[0], D[1]];
      for (const [H, ke] of [[I, B], [B, D]]) {
        const he = Math.sign(ke[0] - H[0]), Ie = Math.sign(ke[1] - H[1]);
        for (let Ue = H; b(Ue), !ot(Ue, ke); Ue = [Ue[0] + he, Ue[1] + Ie]) ;
      }
    }
    const w = (() => {
      const j = /* @__PURE__ */ new Map();
      for (const I of k) {
        const [D, G] = I.split(",").map(Number);
        for (const B of l0([D, G])) l(B) && !k.has(Ce(B)) && !ot(B, u) && j.set(Ce(B), B);
      }
      return [...j.values()].filter((I) => Pn(I, u) >= 2 && Pn(I, f) >= 2);
    })(), y = [], $ = (j, I) => {
      const D = w.filter((G) => j(G) && y.every((B) => Pn(G, B) >= I));
      return D.length === 0 ? null : n.choice(D);
    }, x = (j) => {
      var _a3, _b3, _c2;
      return (_c2 = (_b3 = (_a3 = $(j, 3)) != null ? _a3 : $(j, 2)) != null ? _b3 : $(() => true, 2)) != null ? _c2 : $(() => true, 1);
    }, _ = x((j) => j[0] <= 5), z = x((j) => j[0] >= i - 5);
    if (!_ || !z) return null;
    y.push(_, z);
    const O = [];
    for (let j = 0; j < e; j++) {
      const I = 5 + Math.floor((i - 10) * j / Math.max(1, e)), D = 5 + Math.ceil((i - 10) * (j + 1) / Math.max(1, e)), G = x((B) => B[0] >= I && B[0] <= D);
      if (!G) return null;
      y.push(G), O.push(G);
    }
    for (const j of [_, z, ...O]) c(j) !== "." && a(j, ".");
    a(_, "N"), a(z, "B"), a(u, "@");
    const R = o.map((j) => j.join("")), S = [_, z, ...O];
    return S.every((j) => Dn(R, u, j, S)) && Dn(R, u, p, S, true) ? { rows: R, start: u, npc: _, foes: O, boss: z, gate: p } : null;
  }
  function h0(t) {
    const e = Pl, s = Rl, n = Array.from({ length: s }, (l, u) => Array.from({ length: e }, (h, p) => p === 0 || u === 0 || p === e - 1 || u === s - 1 ? "#" : ".")), i = [1, 5], r = [e - 1, 5], o = [3, 3], a = [e - 4, 3], c = Array.from({ length: t }, (l, u) => [4 + u * 2, 7]);
    return n[5][e - 1] = "G", n[3][3] = "N", n[3][e - 4] = "B", n[5][1] = "@", { rows: n.map((l) => l.join("")), start: i, npc: o, foes: c, boss: a, gate: r };
  }
  const Dl = 200, Ll = 400, Cl = 800, Zl = 10, lr = At([L().int().min(0).max(99), L().int().min(0).max(99)]), ur = (t) => L().int().min(10).max(5e3).default(t), p0 = U({ id: P, name: C, at: lr, lines: N(C).default([]), quest: J().default(false), portrait: P.optional() }), f0 = U({ id: P, name: C, at: lr, hp: ur(Dl), items: N(P).default([]), sprite: P.optional() }), m0 = U({ id: P, name: C, at: lr, hp: ur(Ll), sprite: P.optional() }), g0 = U({ id: P, unit: P, name: C, map: N(E().min(1).regex(/^[#.,T~@NBG]+$/, "map characters are # . , T ~ @ N B G")).min(3).max(40), npcs: N(p0).default([]), foes: N(f0).default([]), boss: m0 }), k0 = U({ hero: U({ name: C }).optional(), story: U({ intro: N(C).default([]), outro: N(C).default([]) }).default({ intro: [], outro: [] }), tileset: P.optional(), sprites: U({ hero: P.optional(), npc: P.optional(), foe: P.optional(), boss: P.optional() }).optional(), areas: N(g0).default([]), finalBoss: U({ name: C.optional(), hp: ur(Cl), size: L().int().min(4).max(20).default(Zl) }).optional() });
  function b0(t) {
    var _a3, _b3;
    for (let e = 0; e < t.length; e++) for (let s = 0; s < ((_b3 = (_a3 = t[e]) == null ? void 0 : _a3.length) != null ? _b3 : 0); s++) if (As(es(t, [s, e]))) return [s, e];
    return [0, 0];
  }
  function Ul(t) {
    var _a3;
    const e = Ml(t.map);
    return { id: t.id, unitId: t.unit, nameKey: t.name, rows: [...t.map], start: (_a3 = e.start) != null ? _a3 : b0(t.map), gate: e.gate, npcs: t.npcs.map((s) => ({ id: s.id, nameKey: s.name, at: s.at, lines: [...s.lines], quest: s.quest, ...s.portrait ? { portrait: s.portrait } : {} })), foes: t.foes.map((s, n) => ({ id: s.id, nameKey: s.name, at: s.at, hp: s.hp, items: [...s.items], n: n + 1, ...s.sprite ? { sprite: s.sprite } : {} })), boss: { id: t.boss.id, nameKey: t.boss.name, at: t.boss.at, hp: t.boss.hp, ...t.boss.sprite ? { sprite: t.boss.sprite } : {} }, auto: false };
  }
  function dr(t, e) {
    const s = new Set(hn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective)).map((n) => n.id);
  }
  const v0 = 4;
  function w0(t, e) {
    const s = hn(t, e), n = Math.max(1, Math.min(v0, s.length)), i = Array.from({ length: n }, () => []);
    s.forEach((o, a) => {
      const c = i[a % n];
      for (const l of t.items) l.objective === o.id && c.push(l.id);
    });
    const r = u0("".concat(t.id, ":").concat(e), n);
    return { id: e, unitId: e, rows: r.rows, start: r.start, gate: r.gate, npcs: [{ id: "n-".concat(e), at: r.npc, lines: [], quest: true }], foes: r.foes.map((o, a) => {
      var _a3;
      return { id: "f-".concat(e, "-").concat(a + 1), at: o, hp: Dl, items: (_a3 = i[a]) != null ? _a3 : [], n: a + 1 };
    }), boss: { id: "b-".concat(e), at: r.boss, hp: Ll }, auto: true };
  }
  function Bl(t, e) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
    const s = new Set(t.units.map((c) => c.id)), n = ((_a3 = e == null ? void 0 : e.areas) != null ? _a3 : []).filter((c) => s.has(c.unit)).map(Ul), i = new Set(n.map((c) => c.unitId)), r = Tt(t.units), o = /* @__PURE__ */ new Map();
    for (const c of n) o.set(c.unitId, [...(_b3 = o.get(c.unitId)) != null ? _b3 : [], c]);
    const a = [];
    for (const c of r) o.has(c) ? a.push(...o.get(c)) : i.has(c) || a.push(w0(t, c));
    return { areas: a, ...(e == null ? void 0 : e.hero) ? { heroNameKey: e.hero.name } : {}, intro: (_c2 = e == null ? void 0 : e.story.intro) != null ? _c2 : [], outro: (_d2 = e == null ? void 0 : e.story.outro) != null ? _d2 : [], finalBoss: { ...((_e2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _e2.name) ? { nameKey: e.finalBoss.name } : {}, hp: (_g2 = (_f2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _f2.hp) != null ? _g2 : Cl, size: (_i2 = (_h2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _h2.size) != null ? _i2 : Zl }, ...(e == null ? void 0 : e.tileset) ? { tileset: e.tileset } : {}, sprites: (_j = e == null ? void 0 : e.sprites) != null ? _j : {}, authored: e !== void 0 };
  }
  const y0 = ["RPG_AREA_UNIT_MISSING", "RPG_UNIT_NO_AREA", "RPG_MAP_RAGGED", "RPG_MAP_NO_START", "RPG_MAP_UNREACHABLE", "RPG_SPOT_BLOCKED", "RPG_NO_QUEST_GIVER", "RPG_FOE_ITEM_MISSING", "RPG_FOE_NO_ITEMS", "RPG_DIALOGUE_EMPTY", "RPG_QUEST_UNWINNABLE"], Fl = ["RPG_FOE_ITEM_OTHER_UNIT", "RPG_NO_STORY"];
  function S0(t) {
    var _a3, _b3;
    const e = [], s = (n, i) => {
      i && e.push({ path: n, key: i, role: "string" });
    };
    return s("hero.name", (_a3 = t.hero) == null ? void 0 : _a3.name), t.story.intro.forEach((n, i) => s("story.intro[".concat(i, "]"), n)), t.story.outro.forEach((n, i) => s("story.outro[".concat(i, "]"), n)), s("finalBoss.name", (_b3 = t.finalBoss) == null ? void 0 : _b3.name), t.areas.forEach((n, i) => {
      s("areas[".concat(i, "].name"), n.name), n.npcs.forEach((r, o) => {
        s("areas[".concat(i, "].npcs[").concat(o, "].name"), r.name), r.lines.forEach((a, c) => s("areas[".concat(i, "].npcs[").concat(o, "].lines[").concat(c, "]"), a));
      }), n.foes.forEach((r, o) => s("areas[".concat(i, "].foes[").concat(o, "].name"), r.name)), s("areas[".concat(i, "].boss.name"), n.boss.name);
    }), e;
  }
  function $0(t) {
    var _a3;
    const e = [];
    t.tileset && e.push({ path: "tileset", id: t.tileset });
    for (const s of ["hero", "npc", "foe", "boss"]) ((_a3 = t.sprites) == null ? void 0 : _a3[s]) && e.push({ path: "sprites.".concat(s), id: t.sprites[s] });
    return t.areas.forEach((s, n) => {
      s.npcs.forEach((i, r) => i.portrait && e.push({ path: "areas[".concat(n, "].npcs[").concat(r, "].portrait"), id: i.portrait })), s.foes.forEach((i, r) => i.sprite && e.push({ path: "areas[".concat(n, "].foes[").concat(r, "].sprite"), id: i.sprite })), s.boss.sprite && e.push({ path: "areas[".concat(n, "].boss.sprite"), id: s.boss.sprite });
    }), e;
  }
  function z0(t, e) {
    const s = [], n = new Set(e.units.map((r) => r.id)), i = new Set(e.items.map((r) => r.id));
    return t.areas.forEach((r, o) => {
      n.has(r.unit) || s.push({ code: "UNKNOWN_UNIT", path: "areas[".concat(o, "].unit"), message: 'the area "'.concat(r.id, '" names the unit "').concat(r.unit, '", which does not exist') }), r.foes.forEach((a, c) => a.items.forEach((l, u) => !i.has(l) && s.push({ code: "UNKNOWN_ITEM", path: "areas[".concat(o, "].foes[").concat(c, "].items[").concat(u, "]"), message: 'the foe "'.concat(a.id, '" asks the item "').concat(l, '", which does not exist') })));
    }), s;
  }
  function Kl(t, e, s, n) {
    const i = s.pack, r = i.units.some((u) => u.id === t.unitId), o = new Set(r ? dr(i, t.unitId) : []), a = Ml(t.rows);
    a.ragged && n("RPG_MAP_RAGGED", "".concat(e, ".map"), 'the rows of the map of "'.concat(t.id, '" have different widths (').concat([...new Set(t.rows.map((u) => u.length))].join(", "), ")")), a.start || n("RPG_MAP_NO_START", "".concat(e, ".map"), 'the map of "'.concat(t.id, '" has no start tile "@"'));
    const c = [...t.npcs.map((u, h) => ({ at: u.at, path: "".concat(e, ".npcs[").concat(h, "].at"), label: 'the person "'.concat(u.id, '"') })), ...t.foes.map((u, h) => ({ at: u.at, path: "".concat(e, ".foes[").concat(h, "].at"), label: 'the foe "'.concat(u.id, '"') })), { at: t.boss.at, path: "".concat(e, ".boss.at"), label: 'the boss "'.concat(t.boss.id, '"') }], l = /* @__PURE__ */ new Set();
    if (c.forEach((u, h) => {
      const p = es(t.rows, u.at);
      p === void 0 ? (n("RPG_SPOT_BLOCKED", u.path, "".concat(u.label, " stands at ").concat(u.at[0], ",").concat(u.at[1], ", outside the map")), l.add(h)) : !As(p, true) || p === "G" ? (n("RPG_SPOT_BLOCKED", u.path, "".concat(u.label, " stands on ").concat(p === "#" ? "a wall" : p === "T" ? "a tree" : p === "~" ? "water" : "the gate", " at ").concat(u.at[0], ",").concat(u.at[1])), l.add(h)) : a.start && ot(u.at, a.start) ? (n("RPG_SPOT_BLOCKED", u.path, "".concat(u.label, " stands on the hero's start tile")), l.add(h)) : c.some((f, m) => m < h && ot(f.at, u.at)) && (n("RPG_SPOT_BLOCKED", u.path, "".concat(u.label, " shares the tile ").concat(u.at[0], ",").concat(u.at[1], " with someone else")), l.add(h));
    }), a.start) {
      const u = c.map((h) => h.at);
      c.forEach((h, p) => {
        l.has(p) || Dn(t.rows, a.start, h.at, u) || n("RPG_MAP_UNREACHABLE", h.path, "".concat(h.label, " cannot be reached from the start tile on walkable tiles"));
      }), a.gate && !Dn(t.rows, a.start, a.gate, u, true) && n("RPG_MAP_UNREACHABLE", "".concat(e, ".map"), 'the gate of "'.concat(t.id, '" cannot be reached from the start tile on walkable tiles'));
    }
    t.npcs.some((u) => u.quest) || n("RPG_NO_QUEST_GIVER", "".concat(e, ".npcs"), 'the area "'.concat(t.id, '" has no person with "quest": true, so nobody offers the quest')), t.npcs.forEach((u, h) => {
      !t.auto && u.lines.length === 0 && n("RPG_DIALOGUE_EMPTY", "".concat(e, ".npcs[").concat(h, "].lines"), '"'.concat(u.id, '" has nothing to say (no lines)'));
    }), t.foes.forEach((u, h) => {
      const p = "".concat(e, ".foes[").concat(h, "]");
      u.items.length === 0 && n("RPG_FOE_NO_ITEMS", "".concat(p, ".items"), 'the foe "'.concat(u.id, '" has no items: its battle has no questions'));
      const f = u.items.filter((m) => i.items.some((g) => g.id === m));
      u.items.forEach((m, g) => {
        i.items.some((k) => k.id === m) ? r && !o.has(m) && n("RPG_FOE_ITEM_OTHER_UNIT", "".concat(p, ".items[").concat(g, "]"), 'the item "'.concat(m, '" of the foe "').concat(u.id, '" belongs to another unit than "').concat(t.unitId, '"'), "warning") : n("RPG_FOE_ITEM_MISSING", "".concat(p, ".items[").concat(g, "]"), 'the foe "'.concat(u.id, '" asks the item "').concat(m, '", which does not exist'));
      }), f.length === 0 && n("RPG_QUEST_UNWINNABLE", p, 'the foe "'.concat(u.id, '" cannot be beaten: none of its items can be asked'));
    }), r && o.size === 0 && n("RPG_QUEST_UNWINNABLE", "".concat(e, ".boss"), 'the boss "'.concat(t.boss.id, '" cannot be beaten: the unit "').concat(t.unitId, '" has no items to ask'));
  }
  function _0(t, e) {
    const s = [], n = (o, a, c, l) => s.push({ code: o, path: a, message: c, ...l ? { severity: l } : {} }), i = e.pack;
    if (t === void 0 || t.areas.length === 0) Bl(i, t).areas.forEach((a, c) => Kl(a, "areas[".concat(c, "]"), e, n));
    else {
      t.areas.forEach((a, c) => Kl(Ul(a), "areas[".concat(c, "]"), e, n));
      const o = new Set(t.areas.map((a) => a.unit));
      t.areas.forEach((a, c) => {
        i.units.some((l) => l.id === a.unit) || n("RPG_AREA_UNIT_MISSING", "areas[".concat(c, "].unit"), 'the area "'.concat(a.id, '" names the unit "').concat(a.unit, '", which does not exist'));
      });
      for (const a of i.units) o.has(a.id) || n("RPG_UNIT_NO_AREA", "areas", 'the unit "'.concat(a.id, '" has no area, so its quest is made automatically'));
    }
    const r = t !== void 0 && (t.tileset !== void 0 || t.sprites !== void 0) && t.areas.length === 0 && !t.hero && !t.finalBoss;
    return t !== void 0 && !r && t.story.intro.length === 0 && n("RPG_NO_STORY", "story.intro", "the section has no frame story (no intro lines)", "warning"), i.items.length === 0 && n("RPG_QUEST_UNWINNABLE", "finalBoss", "the final boss cannot be beaten: the course has no items to ask"), s;
  }
  const j0 = { id: "rpg", theme: "pixel", requiresSection: false, schema: k0, textRefs: S0, assetRefs: $0, validate: z0, lint: _0, codes: [...y0, ...Fl], warnings: Fl }, Ln = new Map([by, Cy, j0, r0, Vw].map((t) => [t.id, t]));
  [...Ln.keys()];
  const x0 = (t, e) => t.shells.config[e], E0 = (t) => t.reduce((e, s) => typeof s == "number" ? "".concat(e, "[").concat(s, "]") : e ? "".concat(e, ".").concat(String(s)) : String(s), "");
  function A0(t, e) {
    const s = Ln.get(e), n = x0(t, e);
    if (!s || n === void 0) return { present: false };
    const i = s.schema.safeParse(n);
    return i.success ? { present: true, ok: true, data: i.data } : { present: true, ok: false, issues: i.error.issues.map((r) => ({ path: E0(r.path), message: r.message })) };
  }
  function T0(t, e) {
    const s = A0(t, e);
    return s.present && s.ok ? s.data : void 0;
  }
  [...[...Ln.values()].flatMap((t) => t.codes)], [...[...Ln.values()].flatMap((t) => {
    var _a3;
    return (_a3 = t.warnings) != null ? _a3 : [];
  })];
  const hr = (t, e) => {
    var _a3, _b3;
    const s = t.filter((n) => !e.includes(n.id));
    return (_b3 = (_a3 = s.find((n) => n.why)) != null ? _a3 : s[0]) == null ? void 0 : _b3.id;
  };
  function I0(t) {
    var _a3, _b3, _c2;
    switch (t.kind) {
      case "mcq": {
        const e = t;
        return hr(e.options, [e.answer]);
      }
      case "listening": {
        const e = t;
        return e.mode === "choose" ? hr((_a3 = e.options) != null ? _a3 : [], [e.answer]) : "zzzzzz";
      }
      case "true-false":
        return !t.answer;
      case "multi-select": {
        const e = t, s = hr(e.options, e.answers);
        return s === void 0 ? [] : [s];
      }
      case "cloze":
        return Object.fromEntries(t.gaps.map((e) => [e.id, "qqq"]));
      case "conjugation":
        return Object.fromEntries(t.forms.filter((e) => !e.given).map((e) => [e.person, "qqq"]));
      case "typed":
        return "qqqqq";
      case "match-pairs": {
        const e = t.pairs.map((s) => s.id);
        return Object.fromEntries(e.map((s, n) => [s, e[(n + 1) % e.length]]));
      }
      case "order":
        return t.items.map((e) => e.id).reverse();
      case "sort-groups": {
        const e = t;
        return Object.fromEntries(e.items.map((s) => {
          var _a4, _b4;
          return [s.id, (_b4 = (_a4 = e.groups.find((n) => n.id !== s.group)) == null ? void 0 : _a4.id) != null ? _b4 : s.group];
        }));
      }
      case "hotspot": {
        const e = t, s = e.regions.filter((n) => n.id !== e.answer);
        return (_c2 = (_b3 = s.find((n) => n.why)) != null ? _b3 : s[0]) == null ? void 0 : _c2.id;
      }
      case "flashcard":
        return "again";
      case "crossword":
        return Object.fromEntries(t.words.map((e) => [e.id, "x"]));
      case "word-search":
        return [];
      default:
        return;
    }
  }
  function M0(t) {
    const e = (s) => {
      const n = window.EDU_GAME_DATA, i = n == null ? void 0 : n.pack.items.find((o) => o.id === s);
      if (!n || !i) return;
      const r = t().lang || n.defaultLang;
      return { item: i, ctx: Wt({ pack: n.pack, text: Ht(n.catalogs, r, n.pack.targetLang) }) };
    };
    return { solve(s) {
      const n = e(s);
      if ((n == null ? void 0 : n.item.kind) === "conjugation") {
        const i = n.item;
        return Object.fromEntries(i.forms.filter((r) => !r.given).map((r) => {
          var _a3;
          return [r.person, (_a3 = n.ctx.text.canonical(r.answer)) != null ? _a3 : ""];
        }));
      }
      return n ? Zb(n.item, n.ctx) : void 0;
    }, wrong(s) {
      const n = e(s);
      return n ? I0(n.item) : void 0;
    } };
  }
  function d(t, e = {}, ...s) {
    const n = document.createElement(t);
    for (const [i, r] of Object.entries(e)) r == null || r === false || (typeof r == "function" ? n.addEventListener(i.replace(/^on/, "").toLowerCase(), r) : i === "class" ? n.className = String(r) : i === "testid" ? n.setAttribute("data-testid", String(r)) : i === "text" ? n.textContent = String(r) : n.setAttribute(i, r === true ? "" : String(r)));
    return ql(n, s), n;
  }
  function ql(t, e) {
    for (const s of e) s == null || s === false || (Array.isArray(s) ? ql(t, s) : t.appendChild(typeof s == "string" || typeof s == "number" ? document.createTextNode(String(s)) : s));
  }
  function Ts(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function T(t, e, s, n = {}) {
    return d("button", { type: "button", testid: t, ...n, onclick: s }, e);
  }
  function pr(t) {
    return t.ctrlKey || t.metaKey || t.altKey ? -1 : /^[1-9]$/.test(t.key) ? Number(t.key) - 1 : -1;
  }
  function Is(t) {
    const e = t;
    return !e || !e.tagName ? false : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable;
  }
  function Ms(t, e, s = 700) {
    t.classList.remove(e), t.offsetWidth, t.classList.add(e), window.setTimeout(() => t.classList.remove(e), s);
  }
  const O0 = "http://www.w3.org/2000/svg";
  function de(t, e = {}, ...s) {
    const n = document.createElementNS(O0, t);
    for (const [i, r] of Object.entries(e)) r !== void 0 && n.setAttribute(i === "testid" ? "data-testid" : i, String(r));
    for (const i of s) n.appendChild(i);
    return n;
  }
  const N0 = { "title.tagline": "Chalkboard quiz arena", start: "Start", continue: "Continue", language: "Language", timer: "Timed questions", "timer.hint": "About {s} seconds per question. Typing questions are never timed.", sound: "Sounds", reduceAudio: "Reduce audio", "reduceAudio.hint": "No music, and quieter sound effects.", "audio.settings": "Sound settings", "audio.title": "Sound settings", "audio.music": "Music", "audio.sfx": "Sound effects", "audio.voice": "Voices", "audio.mute": "Sound off", "audio.close": "Close", speak: "Speak", "speak.setting": "Speak your answers", "speak.privacy.web": "Uses your browser speech recognition; in Chrome and Edge the audio goes to the browser vendor. Typing always works.", "speak.privacy.local": "Speech is recognised on this computer; nothing is sent away. Typing always works.", "speak.listening": "Listening. Press the button again or Escape to stop.", "speak.thinking": "Working out what you said.", "speak.heard": "Heard: {text}. You can edit it before you check.", "speak.err.denied": "The microphone is not allowed. Type your answer instead.", "speak.err.no-speech": "Nothing was heard. Try again or type your answer.", "speak.err.unavailable": "Speech recognition is not available right now. Type your answer instead.", "speak.err.failed": "Could not recognise that. Try again or type your answer.", export: "Export progress", import: "Import progress", reset: "Reset progress", "reset.confirm": "Erase all saved progress for this course?", "reset.yes": "Yes, erase", "reset.no": "Keep it", "reset.done": "Progress erased.", "import.ok": "Progress imported.", "import.bad": "This file is not progress for this course: {why}", "export.done": "Progress file saved.", "storage.off": "Saving is off in this browser: progress is kept only until you close the page. Use Export to keep it.", "map.title": "Choose a unit", "map.stars": "{n} of {total} stars", "map.requires": "Needs: {units}", "map.locked": "Locked", "map.unitStars": "{n} of 3 stars", "map.items": "{n} questions", "map.boss": "Boss round", "map.boss.locked": "Master every unit (2 stars) to face the boss.", "map.boss.ready": "Questions from every unit, harder.", "map.review": "Review misses ({n})", "map.verbs": "Verb drill ({n} due)", menu: "Title screen", round: "Round {n}", question: "Question {i} of {n}", retry: "Second try", leave: "Leave round", score: "Score", combo: "Combo", time: "Time", hint: "Hint", submit: "Check", next: "Next", results: "See results", flip: "Show the answer", "selfcheck.hint": "Compare what you wrote or said with the model answer, then grade yourself. The program does not check it.", "grade.again": "Again", "grade.hard": "Hard", "grade.good": "Good", "grade.easy": "Easy", "grade.ask": "How well did you know it?", "answer.type": "Your answer", "gap.n": "Gap {n}", letters: "Special letters", play: "Play the sound", "play.again": "Play again", "audio.fail": "The sound could not be played.", transcript: "It says:", "order.up": "Move {item} up", "order.down": "Move {item} down", "order.first": "earliest", "order.last": "latest", "sort.assign": "{item}: put in {group}", "pairs.pick": "Pick one on each side to pair them. Pick a paired one again to undo.", "multi.hint": "Select all that apply, then check.", "cross.across": "Across", "cross.down": "Down", "cross.word": "Word {n}", "cross.cell": "Row {r}, column {c}", "ws.found": "Found {n} of {total}", "ws.pick": "Pick the first and the last letter of a word.", "ws.done": "Done", "hotspot.pick": "Pick the right place on the picture.", picture: "Picture", "verdict.correct": "Correct!", "verdict.partial": "Nearly there", "verdict.wrong": "Not quite", "verdict.timeout": "Time is up", "praise.1": "Spot on!", "praise.2": "Nicely done!", "praise.3": "You nailed it!", "praise.4": "Right!", "praise.5": "Great work!", "fb.why": "Why that is not it", "fb.explain": "The idea", "fb.answer": "The answer", "fb.dyk": "Did you know?", "fb.typo": "Accepted, but mind the spelling: {a}", "fb.accents": "Accepted, but mind the accents: {a}", "fb.accents.strict": "Almost! Check the accents: {a}", "fb.note.translit": "Accepted. The umlaut is written ä / ö / ü and ß; ae / oe / ue / ss is the keyboard spelling: {a}", "fb.note.caps": "Accepted. German nouns start with a capital letter: {a}", "fb.note.umlaut": "Almost: check the umlaut: {a}", "fb.invalid": "No answer was given.", "fb.true": "True", "fb.false": "False", "fb.missed": "You missed: {a}", "fb.matched": "Right pairs: {n} of {total}", "fb.detail.order": "In the right place: {n} of {total}", "fb.detail.sort": "Sorted right: {n} of {total}", "fb.detail.gaps": "Gaps right: {n} of {total}", "fb.detail.words": "Words right: {n} of {total}", "fb.detail.forms": "Forms right: {n} of {total}", "conj.tense.praesens": "Present", "conj.tense.perfekt": "Perfect", "conj.tense.praeteritum": "Simple past", "conj.tense.futur1": "Future", "conj.tense.imperativ": "Imperative", "conj.tense.konjunktiv2": "Subjunctive II", "conj.tense.passiv-praesens": "Passive, present", "conj.tense.passiv-praeteritum": "Passive, simple past", "conj.tense.perfekt-passiv": "Passive, perfect", "conj.tense.konjunktiv2-vergangenheit": "Subjunctive II, past", "conj.tense.konjunktiv1": "Subjunctive I", "conj.tense.konjunktiv1-vergangenheit": "Subjunctive I, past", "summary.title": "Round complete", "summary.accuracy": "{n}% right first time", "summary.score": "Score {n}", "summary.combo": "Best combo {n}", "summary.unlocked": "Unlocked: {units}", "summary.bossLocked": "The boss round is open!", "summary.again": "Play the round again", "summary.back": "Back to the map", "summary.finish": "Finish the course", "summary.needStars": "Two stars unlock the next units.", "summary.bossFail": "The boss held out. Review and try again.", "summary.perfect": "Perfect round!", review: "Review misses", "review.title": "Review misses", "review.empty": "Nothing to review. Everything you missed is already learned.", "review.practice": "Practise these", "review.back": "Back to the map", "review.answer": "The answer", "end.title": "Course complete!", "end.sub": "You mastered every unit and beat the boss.", "end.stars": "Stars", "end.score": "Total score", "end.accuracy": "Answered right first time: {n}%", "end.again": "Play again", "end.title.screen": "Back to the title", loading: "Loading...", error: "The game could not start.", "a11y.skip": "Skip to the question", stars: "{n} of 3 stars", burst: "Combo x{n}!", "start.choose": "Choose how to play", "mode.quiz-arena.name": "Quiz arena", "mode.quiz-arena.blurb": "Timed rounds of mixed questions", "mode.encyclopedia.name": "Encyclopedia", "mode.encyclopedia.blurb": "Read articles and explore the topic", "mode.mindmaze.name": "MindMaze castle", "mode.mindmaze.blurb": "Open the doors of a castle with right answers", "mode.rpg.name": "RPG quest", "mode.rpg.blurb": "A pixel adventure powered by your answers", "mode.roleplay.name": "Role-play", "mode.roleplay.blurb": "Talk your way through everyday dialogues", "mode.detective.name": "Detective", "mode.detective.blurb": "Solve cases from the clues you learned", "question.lead": "Question", "review.none": "Nothing to review yet.", "class.assignment": "Assignment from your teacher", "class.target": "Reach {n} stars in: {units}", "class.allUnits": "all units", "class.due": "Due: {date}", "class.yourName": "Your name", "class.send": "Send to my teacher", "class.sent": "Result file saved. Send it to your teacher.", "class.needName": "Type your name first.", "class.assigned": "Assigned", "reader.title": "Reader", "reader.nav": "Reader", "reader.open": "Open the reader", "reader.continue": "Continue reading", "reader.toc": "Chapters", "reader.chapter": "Chapter {n}", "reader.progress": "Chapter {n} of {total}", "reader.chapterRead": "read", "reader.prev": "Previous chapter", "reader.next": "Next chapter", "reader.hint": "Tap an underlined word to see what it means. The left and right arrow keys change chapter.", "reader.read": "You have read this chapter.", "reader.last": "That was the last chapter.", "reader.practice": "Practise this text", "reader.empty": "This course has no readings.", "reader.leave": "Back to the text", "gloss.panel": "Words in this text", "gloss.deck": "In my deck", "gloss.deck.for": 'Keep "{term}" in my vocabulary deck', "gloss.close": "Close the explanation", "gloss.pos.n": "noun", "gloss.pos.v": "verb", "gloss.pos.adj": "adjective", "gloss.pos.adv": "adverb", "gloss.pos.prep": "preposition", "gloss.pos.conj": "conjunction", "gloss.pos.phrase": "phrase", "passage.show": "Read the text", "passage.hide": "Hide the text", "passage.title": "The text" }, fr = { hr: { "title.tagline": "Kviz na školskoj ploči", start: "Započni", continue: "Nastavi", language: "Jezik", timer: "Pitanja na vrijeme", "timer.hint": "Oko {s} sekundi po pitanju. Pitanja s upisivanjem nikad nisu na vrijeme.", sound: "Zvukovi", reduceAudio: "Smanji zvuk", "reduceAudio.hint": "Bez glazbe, a zvučni efekti su tiši.", "audio.settings": "Postavke zvuka", "audio.title": "Postavke zvuka", "audio.music": "Glazba", "audio.sfx": "Zvučni efekti", "audio.voice": "Glasovi", "audio.mute": "Isključi zvuk", "audio.close": "Zatvori", speak: "Govori", "speak.setting": "Govori odgovore", "speak.privacy.web": "Koristi prepoznavanje govora u pregledniku; u Chromeu i Edgeu zvuk ide pružatelju preglednika. Upisivanje uvijek radi.", "speak.privacy.local": "Govor se prepoznaje na ovom računalu; ništa se ne šalje dalje. Upisivanje uvijek radi.", "speak.listening": "Slušam. Ponovo pritisni gumb ili Escape za kraj.", "speak.thinking": "Provjeravam što si rekao.", "speak.heard": "Čuo sam: {text}. Možeš to urediti prije provjere.", "speak.err.denied": "Mikrofon nije dopušten. Umjesto toga upiši odgovor.", "speak.err.no-speech": "Ništa se nije čulo. Pokušaj ponovo ili upiši odgovor.", "speak.err.unavailable": "Prepoznavanje govora trenutno nije dostupno. Umjesto toga upiši odgovor.", "speak.err.failed": "Nisam to prepoznao. Pokušaj ponovo ili upiši odgovor.", export: "Izvezi napredak", import: "Uvezi napredak", reset: "Obriši napredak", "reset.confirm": "Obrisati sav spremljeni napredak za ovaj tečaj?", "reset.yes": "Da, obriši", "reset.no": "Zadrži", "reset.done": "Napredak je obrisan.", "import.ok": "Napredak je uvezen.", "import.bad": "Ova datoteka nije napredak za ovaj tečaj: {why}", "export.done": "Datoteka napretka je spremljena.", "storage.off": "Spremanje je isključeno u ovom pregledniku: napredak traje dok ne zatvoriš stranicu. Koristi izvoz da ga sačuvaš.", "map.title": "Odaberi cjelinu", "map.stars": "{n} od {total} zvjezdica", "map.requires": "Treba: {units}", "map.locked": "Zaključano", "map.unitStars": "{n} od 3 zvjezdice", "map.items": "{n} pitanja", "map.boss": "Završni izazov", "map.boss.locked": "Savladaj svaku cjelinu (2 zvjezdice) da bi došao do izazova.", "map.boss.ready": "Pitanja iz svih cjelina, teža.", "map.review": "Ponovi pogreške ({n})", "map.verbs": "Vježba glagola ({n} za ponoviti)", menu: "Početni zaslon", round: "Runda {n}", question: "Pitanje {i} od {n}", retry: "Drugi pokušaj", leave: "Napusti rundu", score: "Bodovi", combo: "Niz", time: "Vrijeme", hint: "Pomoć", submit: "Provjeri", next: "Dalje", results: "Prikaži rezultat", flip: "Prikaži odgovor", "selfcheck.hint": "Usporedi što si napisao ili rekao s uzornim odgovorom, pa se sam ocijeni. Program to ne provjerava.", "grade.again": "Opet", "grade.hard": "Teško", "grade.good": "Dobro", "grade.easy": "Lako", "grade.ask": "Koliko si dobro znao/la?", "answer.type": "Tvoj odgovor", "gap.n": "Praznina {n}", letters: "Posebna slova", play: "Pusti zvuk", "play.again": "Pusti ponovno", "audio.fail": "Zvuk se nije mogao pustiti.", transcript: "Piše:", "order.up": "Pomakni {item} gore", "order.down": "Pomakni {item} dolje", "order.first": "najranije", "order.last": "najkasnije", "sort.assign": "{item}: stavi u {group}", "pairs.pick": "Odaberi po jedno sa svake strane da ih spojiš. Ponovno odaberi spojeno da poništiš.", "multi.hint": "Odaberi sve točne odgovore, pa provjeri.", "cross.across": "Vodoravno", "cross.down": "Okomito", "cross.word": "Riječ {n}", "cross.cell": "Redak {r}, stupac {c}", "ws.found": "Pronađeno {n} od {total}", "ws.pick": "Odaberi prvo i zadnje slovo riječi.", "ws.done": "Gotovo", "hotspot.pick": "Odaberi pravo mjesto na slici.", picture: "Slika", "verdict.correct": "Točno!", "verdict.partial": "Skoro", "verdict.wrong": "Nije baš", "verdict.timeout": "Vrijeme je isteklo", "praise.1": "U sridu!", "praise.2": "Lijepo!", "praise.3": "Savršeno!", "praise.4": "Točno tako!", "praise.5": "Odlično!", "fb.why": "Zašto to nije to", "fb.explain": "Ideja", "fb.answer": "Odgovor", "fb.dyk": "Jesi li znao/la?", "fb.typo": "Prihvaćeno, ali pazi na pravopis: {a}", "fb.accents": "Prihvaćeno, ali pazi na kvačice: {a}", "fb.accents.strict": "Skoro! Provjeri kvačice: {a}", "fb.note.translit": "Prihvaćeno. Umlaut se piše ä / ö / ü i ß; ae / oe / ue / ss je zapis za tipkovnicu: {a}", "fb.note.caps": "Prihvaćeno. Njemačke imenice pišu se velikim početnim slovom: {a}", "fb.note.umlaut": "Skoro: provjeri umlaut: {a}", "fb.invalid": "Nije dan odgovor.", "fb.true": "Točno", "fb.false": "Netočno", "fb.missed": "Propustio/la si: {a}", "fb.matched": "Točni parovi: {n} od {total}", "fb.detail.order": "Na pravom mjestu: {n} od {total}", "fb.detail.sort": "Točno razvrstano: {n} od {total}", "fb.detail.gaps": "Točne praznine: {n} od {total}", "fb.detail.words": "Točne riječi: {n} od {total}", "fb.detail.forms": "Točni oblici: {n} od {total}", "conj.tense.praesens": "Prezent", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Preterit", "conj.tense.futur1": "Futur I.", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II.", "conj.tense.passiv-praesens": "Pasiv, prezent", "conj.tense.passiv-praeteritum": "Pasiv, preterit", "conj.tense.perfekt-passiv": "Pasiv, perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II., prošlost", "conj.tense.konjunktiv1": "Konjunktiv I.", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I., prošlost", "summary.title": "Runda je gotova", "summary.accuracy": "{n}% točno iz prvog pokušaja", "summary.score": "Bodovi {n}", "summary.combo": "Najbolji niz {n}", "summary.unlocked": "Otključano: {units}", "summary.bossLocked": "Završni izazov je otvoren!", "summary.again": "Igraj rundu ponovno", "summary.back": "Natrag na kartu", "summary.finish": "Završi tečaj", "summary.needStars": "Dvije zvjezdice otključavaju sljedeće cjeline.", "summary.bossFail": "Izazov je izdržao. Ponovi pa pokušaj opet.", "summary.perfect": "Savršena runda!", review: "Ponovi pogreške", "review.title": "Ponavljanje pogrešaka", "review.empty": "Nema se što ponavljati. Sve što si pogriješio/la već znaš.", "review.practice": "Vježbaj ih", "review.back": "Natrag na kartu", "review.answer": "Odgovor", "end.title": "Tečaj je završen!", "end.sub": "Savladao/la si svaku cjelinu i pobijedio/la izazov.", "end.stars": "Zvjezdice", "end.score": "Ukupni bodovi", "end.accuracy": "Točno iz prvog pokušaja: {n}%", "end.again": "Igraj ponovno", "end.title.screen": "Natrag na početak", loading: "Učitavanje...", error: "Igra se nije mogla pokrenuti.", "a11y.skip": "Preskoči na pitanje", stars: "{n} od 3 zvjezdice", burst: "Niz x{n}!", "start.choose": "Odaberi način igranja", "mode.quiz-arena.name": "Kviz", "mode.quiz-arena.blurb": "Vremenski krugovi mješovitih pitanja", "mode.encyclopedia.name": "Enciklopedija", "mode.encyclopedia.blurb": "Čitaj članke i istraži temu", "mode.mindmaze.name": "Dvorac MindMaze", "mode.mindmaze.blurb": "Otvaraj vrata dvorca točnim odgovorima", "mode.rpg.name": "RPG pustolovina", "mode.rpg.blurb": "Pikselna pustolovina pokretana tvojim odgovorima", "mode.roleplay.name": "Igra uloga", "mode.roleplay.blurb": "Razgovaraj kroz svakodnevne dijaloge", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Riješi slučajeve na temelju naučenog", "question.lead": "Pitanje", "review.none": "Još nema ničega za ponavljanje.", "class.assignment": "Zadatak od učitelja", "class.target": "Dosegni {n} zvjezdice u: {units}", "class.allUnits": "svim cjelinama", "class.due": "Rok: {date}", "class.yourName": "Tvoje ime", "class.send": "Pošalji učitelju", "class.sent": "Datoteka s rezultatom je spremljena. Pošalji je učitelju.", "class.needName": "Prvo upiši svoje ime.", "class.assigned": "Zadano", "reader.title": "Čitanje", "reader.nav": "Čitanje", "reader.open": "Otvori čitanje", "reader.continue": "Nastavi čitati", "reader.toc": "Poglavlja", "reader.chapter": "Poglavlje {n}", "reader.progress": "Poglavlje {n} od {total}", "reader.chapterRead": "pročitano", "reader.prev": "Prethodno poglavlje", "reader.next": "Sljedeće poglavlje", "reader.hint": "Dodirni podcrtanu riječ da vidiš što znači. Lijeva i desna strelica mijenjaju poglavlje.", "reader.read": "Pročitao/la si ovo poglavlje.", "reader.last": "To je bilo posljednje poglavlje.", "reader.practice": "Vježbaj ovaj tekst", "reader.empty": "Ovaj tečaj nema tekstova za čitanje.", "reader.leave": "Natrag na tekst", "gloss.panel": "Riječi u ovom tekstu", "gloss.deck": "U mojem špilu", "gloss.deck.for": 'Zadrži "{term}" u mojem špilu rječnika', "gloss.close": "Zatvori objašnjenje", "gloss.pos.n": "imenica", "gloss.pos.v": "glagol", "gloss.pos.adj": "pridjev", "gloss.pos.adv": "prilog", "gloss.pos.prep": "prijedlog", "gloss.pos.conj": "veznik", "gloss.pos.phrase": "izraz", "passage.show": "Pročitaj tekst", "passage.hide": "Sakrij tekst", "passage.title": "Tekst" }, de: { "title.tagline": "Quiz an der Schultafel", start: "Starten", continue: "Weiter", language: "Sprache", timer: "Fragen mit Zeitlimit", "timer.hint": "Etwa {s} Sekunden pro Frage. Fragen zum Tippen haben nie ein Zeitlimit.", sound: "Töne", reduceAudio: "Ton reduzieren", "reduceAudio.hint": "Keine Musik und leisere Effekte.", "audio.settings": "Toneinstellungen", "audio.title": "Toneinstellungen", "audio.music": "Musik", "audio.sfx": "Soundeffekte", "audio.voice": "Stimmen", "audio.mute": "Ton aus", "audio.close": "Schließen", speak: "Sprechen", "speak.setting": "Antworten sprechen", "speak.privacy.web": "Nutzt die Spracherkennung deines Browsers; in Chrome und Edge geht das Audio an den Browser-Hersteller. Tippen funktioniert immer.", "speak.privacy.local": "Die Sprache wird auf diesem Computer erkannt; nichts wird verschickt. Tippen funktioniert immer.", "speak.listening": "Ich höre zu. Drücke die Taste noch einmal oder Escape zum Beenden.", "speak.thinking": "Ich werte aus, was du gesagt hast.", "speak.heard": "Verstanden: {text}. Du kannst es vor dem Prüfen ändern.", "speak.err.denied": "Das Mikrofon ist nicht erlaubt. Tippe stattdessen deine Antwort.", "speak.err.no-speech": "Es war nichts zu hören. Versuche es noch einmal oder tippe deine Antwort.", "speak.err.unavailable": "Die Spracherkennung ist gerade nicht verfügbar. Tippe stattdessen deine Antwort.", "speak.err.failed": "Das konnte nicht erkannt werden. Versuche es noch einmal oder tippe deine Antwort.", export: "Fortschritt exportieren", import: "Fortschritt importieren", reset: "Fortschritt zurücksetzen", "reset.confirm": "Den gesamten gespeicherten Fortschritt für diesen Kurs löschen?", "reset.yes": "Ja, löschen", "reset.no": "Behalten", "reset.done": "Fortschritt gelöscht.", "import.ok": "Fortschritt importiert.", "import.bad": "Diese Datei ist kein Fortschritt für diesen Kurs: {why}", "export.done": "Fortschrittsdatei gespeichert.", "storage.off": "Speichern ist in diesem Browser aus: Der Fortschritt bleibt nur, bis du die Seite schließt. Nutze „Exportieren“, um ihn zu behalten.", "map.title": "Wähle eine Einheit", "map.stars": "{n} von {total} Sternen", "map.requires": "Benötigt: {units}", "map.locked": "Gesperrt", "map.unitStars": "{n} von 3 Sternen", "map.items": "{n} Fragen", "map.boss": "Endgegner-Runde", "map.boss.locked": "Meistere jede Einheit (2 Sterne), um dich dem Endgegner zu stellen.", "map.boss.ready": "Fragen aus allen Einheiten, schwieriger.", "map.review": "Fehler wiederholen ({n})", "map.verbs": "Verbtraining ({n} fällig)", menu: "Titelbildschirm", round: "Runde {n}", question: "Frage {i} von {n}", retry: "Zweiter Versuch", leave: "Runde verlassen", score: "Punkte", combo: "Serie", time: "Zeit", hint: "Tipp", submit: "Prüfen", next: "Weiter", results: "Ergebnis ansehen", flip: "Antwort zeigen", "selfcheck.hint": "Vergleiche, was du geschrieben oder gesagt hast, mit der Musterantwort und bewerte dich dann selbst. Das Programm prüft es nicht.", "grade.again": "Nochmal", "grade.hard": "Schwer", "grade.good": "Gut", "grade.easy": "Leicht", "grade.ask": "Wie gut wusstest du es?", "answer.type": "Deine Antwort", "gap.n": "Lücke {n}", letters: "Sonderzeichen", play: "Ton abspielen", "play.again": "Noch einmal abspielen", "audio.fail": "Der Ton konnte nicht abgespielt werden.", transcript: "Es heißt:", "order.up": "{item} nach oben", "order.down": "{item} nach unten", "order.first": "am frühesten", "order.last": "am spätesten", "sort.assign": "{item}: in „{group}“ legen", "pairs.pick": "Wähle auf jeder Seite einen Eintrag, um sie zu verbinden. Wähle ein verbundenes Paar noch einmal, um es zu lösen.", "multi.hint": "Wähle alles Zutreffende aus und prüfe dann.", "cross.across": "Waagerecht", "cross.down": "Senkrecht", "cross.word": "Wort {n}", "cross.cell": "Zeile {r}, Spalte {c}", "ws.found": "{n} von {total} gefunden", "ws.pick": "Wähle den ersten und den letzten Buchstaben eines Wortes.", "ws.done": "Fertig", "hotspot.pick": "Wähle die richtige Stelle auf dem Bild.", picture: "Bild", "verdict.correct": "Richtig!", "verdict.partial": "Fast geschafft", "verdict.wrong": "Nicht ganz", "verdict.timeout": "Die Zeit ist um", "praise.1": "Genau richtig!", "praise.2": "Gut gemacht!", "praise.3": "Perfekt gelöst!", "praise.4": "Stimmt!", "praise.5": "Super Leistung!", "fb.why": "Warum das nicht stimmt", "fb.explain": "Die Idee", "fb.answer": "Die Antwort", "fb.dyk": "Wusstest du schon?", "fb.typo": "Akzeptiert, aber achte auf die Schreibweise: {a}", "fb.accents": "Akzeptiert, aber achte auf die Akzente: {a}", "fb.accents.strict": "Fast! Prüfe die Akzente: {a}", "fb.note.translit": "Akzeptiert. Umlaute schreibt man ä / ö / ü und ß; ae / oe / ue / ss ist die Tastatur-Schreibweise: {a}", "fb.note.caps": "Akzeptiert. Deutsche Nomen schreibt man groß: {a}", "fb.note.umlaut": "Fast: Prüfe den Umlaut: {a}", "fb.invalid": "Es wurde keine Antwort gegeben.", "fb.true": "Richtig", "fb.false": "Falsch", "fb.missed": "Das hast du verpasst: {a}", "fb.matched": "Richtige Paare: {n} von {total}", "fb.detail.order": "An der richtigen Stelle: {n} von {total}", "fb.detail.sort": "Richtig sortiert: {n} von {total}", "fb.detail.gaps": "Richtige Lücken: {n} von {total}", "fb.detail.words": "Richtige Wörter: {n} von {total}", "fb.detail.forms": "Richtige Formen: {n} von {total}", "conj.tense.praesens": "Präsens", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Präteritum", "conj.tense.futur1": "Futur I", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II", "conj.tense.passiv-praesens": "Passiv, Präsens", "conj.tense.passiv-praeteritum": "Passiv, Präteritum", "conj.tense.perfekt-passiv": "Passiv, Perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II, Vergangenheit", "conj.tense.konjunktiv1": "Konjunktiv I", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I, Vergangenheit", "summary.title": "Runde geschafft", "summary.accuracy": "{n} % gleich beim ersten Mal richtig", "summary.score": "Punkte: {n}", "summary.combo": "Beste Serie: {n}", "summary.unlocked": "Freigeschaltet: {units}", "summary.bossLocked": "Die Endgegner-Runde ist offen!", "summary.again": "Runde noch einmal spielen", "summary.back": "Zurück zur Karte", "summary.finish": "Kurs abschließen", "summary.needStars": "Zwei Sterne schalten die nächsten Einheiten frei.", "summary.bossFail": "Der Endgegner hat standgehalten. Wiederhole und versuche es noch einmal.", "summary.perfect": "Perfekte Runde!", review: "Fehler wiederholen", "review.title": "Fehler wiederholen", "review.empty": "Nichts zu wiederholen. Alles, was du verpasst hast, ist schon gelernt.", "review.practice": "Diese üben", "review.back": "Zurück zur Karte", "review.answer": "Die Antwort", "end.title": "Kurs abgeschlossen!", "end.sub": "Du hast jede Einheit gemeistert und den Endgegner besiegt.", "end.stars": "Sterne", "end.score": "Gesamtpunkte", "end.accuracy": "Gleich beim ersten Mal richtig: {n} %", "end.again": "Noch einmal spielen", "end.title.screen": "Zurück zum Titel", loading: "Lädt …", error: "Das Spiel konnte nicht starten.", "a11y.skip": "Zur Frage springen", stars: "{n} von 3 Sternen", burst: "Serie x{n}!", "start.choose": "Wähle, wie du spielen möchtest", "mode.quiz-arena.name": "Quiz-Arena", "mode.quiz-arena.blurb": "Runden mit gemischten Fragen auf Zeit", "mode.encyclopedia.name": "Enzyklopädie", "mode.encyclopedia.blurb": "Artikel lesen und das Thema erkunden", "mode.mindmaze.name": "MindMaze-Schloss", "mode.mindmaze.blurb": "Öffne die Türen eines Schlosses mit richtigen Antworten", "mode.rpg.name": "Rollenspiel-Abenteuer", "mode.rpg.blurb": "Ein Pixel-Abenteuer, angetrieben von deinen Antworten", "mode.roleplay.name": "Rollenspiel-Dialoge", "mode.roleplay.blurb": "Meistere Alltagsgespräche im Dialog", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Löse Fälle mit den Hinweisen, die du gelernt hast", "question.lead": "Frage", "review.none": "Noch nichts zu wiederholen.", "class.assignment": "Aufgabe von deiner Lehrkraft", "class.target": "Erreiche {n} Sterne in: {units}", "class.allUnits": "allen Einheiten", "class.due": "Fällig: {date}", "class.yourName": "Dein Name", "class.send": "An meine Lehrkraft senden", "class.sent": "Ergebnisdatei gespeichert. Schicke sie deiner Lehrkraft.", "class.needName": "Gib zuerst deinen Namen ein.", "class.assigned": "Zugewiesen", "reader.title": "Leser", "reader.nav": "Leser", "reader.open": "Leser öffnen", "reader.continue": "Weiterlesen", "reader.toc": "Kapitel", "reader.chapter": "Kapitel {n}", "reader.progress": "Kapitel {n} von {total}", "reader.chapterRead": "gelesen", "reader.prev": "Vorheriges Kapitel", "reader.next": "Nächstes Kapitel", "reader.hint": "Tippe auf ein unterstrichenes Wort, um die Bedeutung zu sehen. Mit den Pfeiltasten links und rechts wechselst du das Kapitel.", "reader.read": "Du hast dieses Kapitel gelesen.", "reader.last": "Das war das letzte Kapitel.", "reader.practice": "Diesen Text üben", "reader.empty": "Dieser Kurs hat keine Lesetexte.", "reader.leave": "Zurück zum Text", "gloss.panel": "Wörter in diesem Text", "gloss.deck": "In meinem Stapel", "gloss.deck.for": "„{term}“ in meinem Vokabelstapel behalten", "gloss.close": "Erklärung schließen", "gloss.pos.n": "Nomen", "gloss.pos.v": "Verb", "gloss.pos.adj": "Adjektiv", "gloss.pos.adv": "Adverb", "gloss.pos.prep": "Präposition", "gloss.pos.conj": "Konjunktion", "gloss.pos.phrase": "Wendung", "passage.show": "Den Text lesen", "passage.hide": "Text ausblenden", "passage.title": "Der Text" } };
  function Os(t, e) {
    var _a3, _b3, _c2;
    const s = (_c2 = (_b3 = fr[t]) != null ? _b3 : fr[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (n, i) => {
      var _a4, _b4;
      let r = (_b4 = (_a4 = e == null ? void 0 : e.strings["ui.".concat(n)]) != null ? _a4 : s[n]) != null ? _b4 : N0[n];
      if (i) for (const [o, a] of Object.entries(i)) r = r.split("{".concat(o, "}")).join(String(a));
      return r;
    };
  }
  [...Object.keys(fr)];
  const Gl = { hr: ["č", "ć", "š", "ž", "đ"], de: ["ä", "ö", "ü", "ß"], es: ["á", "é", "í", "ó", "ú", "ñ", "¿", "¡"], fr: ["é", "è", "ê", "à", "ç", "ô", "î"] }, P0 = /\s*\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, Wl = /^#{1,6}\s+/;
  function mr(t) {
    return t.map((e) => {
      var _a3, _b3;
      const s = Wl.test((_b3 = (_a3 = e[0]) == null ? void 0 : _a3.text) != null ? _b3 : ""), n = [];
      return e.forEach((i, r) => {
        if (i.link) {
          n.push({ ...i });
          return;
        }
        const o = r === 0 && s ? i.text.replace(Wl, "") : i.text;
        let a = 0;
        for (const c of o.matchAll(P0)) c.index > a && n.push({ text: o.slice(a, c.index) }), n.push({ text: c[1].replace(/\s+/g, ""), cite: true }), a = c.index + c[0].length;
        a < o.length && n.push({ text: o.slice(a) });
      }), { runs: n, heading: s };
    });
  }
  const R0 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function D0(t, e) {
    const s = new RegExp("(?<![\\p{L}\\p{N}])".concat(R0(e), "(?![\\p{L}\\p{N}])"), "u").exec(t);
    if (s) return { start: s.index, end: s.index + s[0].length };
    const n = t.indexOf(e);
    return n < 0 ? null : { start: n, end: n + e.length };
  }
  function gr(t, e) {
    const s = t.map((i) => i.map((r) => ({ ...r }))), n = e.filter((i) => i.term.trim() !== "").sort((i, r) => r.term.length - i.term.length);
    for (const i of n) {
      let r = false;
      for (const o of s) {
        if (r) break;
        for (let a = 0; a < o.length; a++) {
          const c = o[a];
          if (c.link || c.gloss || c.cite) continue;
          const l = D0(c.text, i.term);
          if (!l) continue;
          const u = [];
          l.start > 0 && u.push({ text: c.text.slice(0, l.start) }), u.push({ text: c.text.slice(l.start, l.end), gloss: i }), l.end < c.text.length && u.push({ text: c.text.slice(l.end) }), o.splice(a, 1, ...u), r = true;
          break;
        }
      }
    }
    return s;
  }
  let Hl = 0;
  const L0 = (t, e) => e ? t("gloss.pos.".concat(e)) : "";
  function kr(t) {
    const e = "gloss-pop-".concat(++Hl), s = d("strong", { class: "gloss-lemma", testid: "gloss-lemma" }), n = d("span", { class: "gloss-pos", testid: "gloss-pos" }), i = d("p", { class: "gloss-text", testid: "gloss-text" }), r = d("p", { class: "gloss-note", testid: "gloss-note" });
    let o = null;
    const a = d("div", { class: "gloss-pop", id: e, role: "status", testid: "gloss-popover", hidden: true }, d("div", { class: "gloss-head" }, s, n), i, r, T("gloss-close", "×", () => c.hide(), { class: "gloss-close", "aria-label": t("gloss.close") })), c = { el: a, show(l, u) {
      var _a3, _b3;
      if (o === l && !a.hidden) return c.hide();
      c.hide(), o = l, s.textContent = (_a3 = u.lemma) != null ? _a3 : u.term, n.textContent = L0(t, u.pos), n.hidden = !u.pos, i.textContent = u.gloss, r.textContent = (_b3 = u.note) != null ? _b3 : "", r.hidden = !u.note, a.hidden = false, l.setAttribute("aria-expanded", "true");
      const h = a.parentElement;
      if (h) {
        const p = l.getBoundingClientRect(), f = h.getBoundingClientRect(), m = Math.min(a.offsetWidth || 280, f.width);
        a.style.top = "".concat(Math.round(p.bottom - f.top + 6), "px"), a.style.left = "".concat(Math.round(Math.max(0, Math.min(p.left - f.left, f.width - m))), "px");
      }
    }, hide() {
      o && o.setAttribute("aria-expanded", "false"), o = null, a.hidden = true;
    } };
    return a.addEventListener("keydown", (l) => {
      if (l.key === "Escape") {
        const u = o;
        c.hide(), u == null ? void 0 : u.focus();
      }
    }), c;
  }
  function C0(t, e, s = {}) {
    const n = "gloss-d-".concat(++Hl), i = T("gloss-".concat(t.id), t.term, () => e.show(i, t), { class: "gloss".concat(s.off ? " is-off" : ""), "aria-expanded": "false", "aria-controls": e.el.id, "aria-describedby": n });
    return i.addEventListener("keydown", (r) => {
      r.key === "Escape" && e.hide();
    }), [i, d("span", { class: "sr-only", id: n }, ": ".concat(t.gloss))];
  }
  function br(t, e, s, n, i = false) {
    return d(i ? "h3" : "p", i ? { class: "enc-subhead" } : {}, t.map((r) => r.cite ? d("sup", { class: "enc-cite" }, r.text) : r.gloss ? C0(r.gloss, e, { off: (n == null ? void 0 : n.has(r.gloss.id)) === true }) : r.link && s ? s(r.link, r.text) : r.text));
  }
  function Cn(t, e, s) {
    return s === false ? [...e] : gs(e, t.rng);
  }
  const Ns = (t) => d("span", { class: "sr-only" }, t);
  function yt(t, e, s = false) {
    return T("submit", t.ui("submit"), e, { class: "btn btn-primary", ...s ? { disabled: true } : {} });
  }
  function at(t, e, s) {
    t.classList.add(e ? "is-correct" : "is-wrong");
    const n = t.querySelector(".mark");
    n && n.remove(), t.appendChild(d("span", { class: "mark", "aria-hidden": "true" }, e ? "✓" : "✗")), t.appendChild(Ns(e ? s.ui("verdict.correct") : s.ui("verdict.wrong")));
  }
  function vr(t, e) {
    return t.specialLetters.length === 0 ? null : d("div", { class: "letters", role: "group", "aria-label": t.ui("letters"), testid: "letters" }, t.specialLetters.map((s) => d("button", { type: "button", class: "letter", testid: "letter-".concat(s), onmousedown: (n) => n.preventDefault(), onclick: () => {
      var _a3, _b3;
      const n = e();
      if (!n) return;
      const i = (_a3 = n.selectionStart) != null ? _a3 : n.value.length, r = (_b3 = n.selectionEnd) != null ? _b3 : i;
      n.value = n.value.slice(0, i) + s + n.value.slice(r), n.setSelectionRange(i + s.length, i + s.length), n.focus(), n.dispatchEvent(new Event("input", { bubbles: true }));
    } }, s)));
  }
  function Vl(t) {
    const e = t.item.asset;
    if (!e) return null;
    const s = t.data.pack.assets.find((i) => i.id === e), n = t.assetUrl(e);
    return !s || s.kind !== "image" || !n ? null : d("figure", { class: "item-figure" }, d("img", { src: n, alt: t.assetAlt(e), testid: "item-image", loading: "eager" }));
  }
  let Z0 = 0;
  function U0(t, e) {
    var _a3, _b3, _c2, _d2;
    const s = bl(t.item);
    if (!s) return null;
    const n = t.data.pack, i = n.encyclopedia.articles.find((w) => w.id === s.article), r = i ? t.text.text(i.body) : void 0;
    if (!i || r === void 0) return null;
    const o = gl([r]), [a, c] = (_a3 = s.paragraphs) != null ? _a3 : [1, o.length], l = o.slice(a - 1, c);
    if (l.length === 0) return null;
    const u = pl.safeParse((_d2 = (_c2 = (_b3 = n.shells) == null ? void 0 : _b3.config) == null ? void 0 : _c2.encyclopedia) != null ? _d2 : {}), h = kl(u.success ? u.data : void 0, i.id).flatMap((w) => {
      const y = t.text.text(w.term), $ = t.text.text(w.gloss);
      if (y === void 0 || $ === void 0) return [];
      const x = w.lemma ? t.text.text(w.lemma) : void 0, _ = w.note ? t.text.text(w.note) : void 0;
      return [{ id: w.id, term: y, gloss: $, ...x ? { lemma: x } : {}, ...w.pos ? { pos: w.pos } : {}, ..._ ? { note: _ } : {} }];
    }), p = "passage-".concat(++Z0), f = kr(t.ui), m = mr(l.map((w) => [{ text: w }])), g = gr(m.map((w) => w.runs), h), k = d("div", { class: "passage-panel gloss-scope", id: p, role: "region", "aria-label": "".concat(t.ui("passage.title"), ": ").concat(t.text.t(i.title)), testid: "passage-panel", hidden: !e }, d("p", { class: "passage-title" }, t.text.t(i.title)), g.map((w, y) => {
      var _a4;
      return br(w, f, void 0, void 0, (_a4 = m[y]) == null ? void 0 : _a4.heading);
    }), f.el), b = T("passage-toggle", "", () => v(k.hidden), { class: "btn btn-small btn-ghost passage-toggle", "aria-controls": p });
    function v(w) {
      k.hidden = !w, b.textContent = "".concat(w ? "▾" : "▸", " ").concat(t.ui(w ? "passage.hide" : "passage.show")), b.setAttribute("aria-expanded", String(w)), w || f.hide();
    }
    return v(e), d("div", { class: "passage", testid: "passage", "data-article": i.id }, b, k);
  }
  function B0(t) {
    return { ...t, render(e) {
      const s = t.render(e), n = U0(e, e.passageOpen === true);
      return n ? { el: d("div", { class: "with-passage" }, n, s.el), focus: () => s.focus(), reveal: (i, r) => s.reveal(i, r), ...s.key ? { key: (i) => {
        var _a3, _b3;
        return (_b3 = (_a3 = s.key) == null ? void 0 : _a3.call(s, i)) != null ? _b3 : false;
      } } : {}, destroy: () => {
        var _a3;
        return (_a3 = s.destroy) == null ? void 0 : _a3.call(s);
      } } : s;
    } };
  }
  const F0 = "1.0.0";
  function K0(t = typeof location > "u" ? "" : location.search) {
    const e = new URLSearchParams(t).get("seed"), s = e === null ? NaN : Number(e);
    return Number.isInteger(s) && s >= 0 && s < 2 ** 31 ? s : Math.floor(Math.random() * 2 ** 31);
  }
  const Yl = (t) => "edu-studio:shell:".concat(t);
  function q0(t, e, s = Ws) {
    const n = (r) => Array.isArray(e) ? e.includes(r) : e.has(r), i = [...new Set(t)].filter(n);
    return i.length > 0 ? i : n(s) ? [s] : [];
  }
  function G0(t) {
    const e = new URLSearchParams(t.search).get("shell");
    for (const s of [e, t.saved, t.dataShell]) if (s && t.playable.includes(s)) return s;
    return t.playable[0];
  }
  const W0 = (t) => {
    try {
      return window.localStorage.getItem(t);
    } catch (e) {
      return null;
    }
  }, H0 = (t, e) => {
    try {
      window.localStorage.setItem(t, e);
    } catch (e2) {
    }
  }, V0 = (t) => {
    const e = t;
    return !!e && e.format === Wd && typeof e.pack == "object" && e.pack !== null && typeof e.catalogs == "object" && e.catalogs !== null;
  };
  function Y0() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    let s = { screen: "loading", shell: "", lang: "", seed: 0, combo: 0, score: 0, reviewQueue: [], mastery: {}, finished: false, steps: 0 }, n = null, i = null, r = null, o = null, a = 0;
    const c = () => r ? q0(r.pack.shells.enabled, [...t.keys()], r.shell || Ws) : [], l = (p, f, m = "en") => {
      s = { ...s, screen: "error" };
      const g = Os(m);
      p && (p.classList.add("edu-stage"), p.setAttribute("data-edu-theme", "chalkboard"), Ts(p), p.appendChild(d("div", { class: "edu-error", role: "alert", testid: "error" }, d("h1", {}, g("error")), d("p", {}, f)))), console.error("[EduEngine] ".concat(f));
    }, u = { version: F0, registerShell(p, f) {
      t.set(p, f);
    }, registerItemKind(p, f) {
      e.set(p, B0(f));
    }, getState() {
      return JSON.parse(JSON.stringify(s));
    }, debug: Object.defineProperty(M0(() => s), "shell", { enumerable: true, get: () => i != null ? i : void 0 }), playableShells: () => c(), start() {
      if (n) return;
      o = document.getElementById(ro);
      const p = window.EDU_GAME_DATA;
      if (!o) return l(null, "the page has no #".concat(ro, " element"));
      if (!V0(p)) return l(o, "game-data.js did not define window.EDU_GAME_DATA");
      r = p, a = K0();
      const f = G0({ search: typeof location > "u" ? "" : location.search, playable: c(), saved: W0(Yl(r.pack.id)), dataShell: r.shell || Ws });
      if (!f) return l(o, 'no shell "'.concat(r.shell || Ws, '" is registered'), r.defaultLang);
      h(f);
    }, switchShell(p) {
      var _a3;
      if (!(!r || !o || !n || !c().includes(p))) {
        H0(Yl(r.pack.id), p);
        try {
          (_a3 = n.unmount) == null ? void 0 : _a3.call(n);
        } catch (f) {
          console.error("[EduEngine] unmounting the shell failed: ".concat(f instanceof Error ? f.message : String(f)));
        }
        n = null, i = null, Ts(o), o.removeAttribute("data-edu-theme"), o.className = "", s = { ...s, screen: "loading" }, h(p);
      }
    } };
    function h(p) {
      const f = t.get(p);
      if (!r || !o || !f) return;
      n = f;
      const m = { root: o, data: r, seed: a, getItemRenderer: (g) => e.get(g), publish: (g) => {
        s = g;
      }, shells: c(), switchShell: (g) => u.switchShell(g), setDebug: (g) => {
        i = g;
      } };
      try {
        f.mount(m);
      } catch (g) {
        n = null, l(o, g instanceof Error ? g.message : String(g), r.defaultLang);
      }
    }
    return u;
  }
  function wr(t, e, s, n = (i) => i) {
    const i = /* @__PURE__ */ new Map();
    let r = false;
    const o = (c) => {
      r || (r = true, t.submit(n(c)));
    };
    return e.forEach((c, l) => {
      i.set(c.id, T("option-".concat(c.id), [d("span", { class: "choice-key", "aria-hidden": "true" }, l < 9 ? String(l + 1) : ""), d("span", { class: "choice-text" }, c.text)], () => o(c.id), { class: "choice", "data-option": c.id }));
    }), { el: d("div", { class: "choices", role: "group", "aria-label": t.text.t(t.item.prompt) }, [...i.values()]), buttons: i, focus: () => {
      var _a3;
      return (_a3 = [...i.values()][0]) == null ? void 0 : _a3.focus();
    }, key: (c) => {
      const l = pr(c), u = e[l];
      return l < 0 || !u ? false : (c.preventDefault(), o(u.id), true);
    }, reveal: (c, l) => {
      r = true;
      for (const [u, h] of i) h.disabled = true, u === s ? at(h, true, t) : u === String(l) && at(h, false, t);
    } };
  }
  const J0 = { kind: "mcq", render(t) {
    const e = t.item, s = Cn(t, e.options, e.shuffle).map((n) => ({ id: n.id, text: t.text.t(n.text) }));
    return wr(t, s, e.answer);
  } }, Q0 = { kind: "true-false", render(t) {
    const e = t.item;
    return wr(t, [{ id: "true", text: t.ui("fb.true") }, { id: "false", text: t.ui("fb.false") }], String(e.answer), (s) => s === "true");
  } }, X0 = { kind: "multi-select", render(t) {
    const e = t.item, s = Cn(t, e.options, e.shuffle), n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
    let r = false;
    const o = () => {
      for (const [u, h] of i) h.setAttribute("aria-pressed", String(n.has(u)));
      c.disabled = n.size === 0 || r;
    }, a = (u) => {
      r || (n.has(u) ? n.delete(u) : n.add(u), o());
    };
    s.forEach((u, h) => {
      i.set(u.id, T("option-".concat(u.id), [d("span", { class: "choice-key", "aria-hidden": "true" }, h < 9 ? String(h + 1) : ""), d("span", { class: "choice-box", "aria-hidden": "true" }), d("span", { class: "choice-text" }, t.text.t(u.text))], () => a(u.id), { class: "choice choice-multi", "aria-pressed": "false" }));
    });
    const c = yt(t, () => {
      r || n.size === 0 || (r = true, t.submit([...n]));
    }, true), l = d("div", { class: "multi" }, d("p", { class: "hint-line" }, t.ui("multi.hint")), d("div", { class: "choices", role: "group", "aria-label": t.text.t(e.prompt) }, [...i.values()]), d("div", { class: "actions" }, c));
    return o(), { el: l, focus: () => {
      var _a3;
      return (_a3 = [...i.values()][0]) == null ? void 0 : _a3.focus();
    }, key: (u) => {
      const h = pr(u), p = s[h];
      return h < 0 || !p ? false : (u.preventDefault(), a(p.id), true);
    }, reveal: (u) => {
      r = true, c.disabled = true;
      const h = new Set(Array.isArray(u.expected) ? u.expected : e.answers);
      for (const [p, f] of i) {
        f.disabled = true;
        const m = h.has(p);
        n.has(p) ? at(f, m, t) : m && (f.classList.add("is-missed"), f.appendChild(d("span", { class: "mark", "aria-hidden": "true" }, "!")));
      }
    } };
  } };
  function yr(t, e) {
    const s = t.speech;
    if (!s) return null;
    const n = d("button", { type: "button", class: "btn btn-mic", testid: "speak", "aria-pressed": "false", "data-state": "idle" }, t.ui("speak")), i = d("span", { class: "speak-status", testid: "speak-status", role: "status", "aria-live": "polite" });
    let r = null, o = "idle", a = false;
    const c = (h, p) => {
      var _a3, _b3;
      o = h, n.setAttribute("data-state", h), n.setAttribute("aria-pressed", String(h === "listening")), n.classList.toggle("is-listening", h === "listening"), h === "listening" ? (_a3 = t.duck) == null ? void 0 : _a3.call(t, true) : (_b3 = t.duck) == null ? void 0 : _b3.call(t, false), h === "listening" ? i.textContent = t.ui("speak.listening") : h === "thinking" ? i.textContent = t.ui("speak.thinking") : h === "error" && (i.textContent = t.ui("speak.err.".concat(p != null ? p : "failed"))), (h === "idle" || h === "error") && (r = null);
    }, l = () => {
      r == null ? void 0 : r.stop();
    }, u = () => {
      const h = e();
      a || !h || h.disabled || (i.textContent = "", r = s.start({ onState: c, onText: (p) => {
        const f = e();
        !f || f.disabled || (f.value = p, f.dispatchEvent(new Event("input", { bubbles: true })), i.textContent = t.ui("speak.heard", { text: p }), f.focus());
      } }));
    };
    return n.addEventListener("click", () => o === "idle" || o === "error" ? u() : o === "listening" ? l() : void 0), n.addEventListener("keydown", (h) => {
      h.key === "Escape" && o === "listening" && (h.preventDefault(), h.stopPropagation(), l());
    }), { button: n, status: i, stop: l, disable: () => {
      a = true, l(), n.disabled = true;
    } };
  }
  function Jl(t, e) {
    e && t.addEventListener("keydown", (s) => {
      s.key === "Escape" && e.button.getAttribute("aria-pressed") === "true" && (s.preventDefault(), s.stopPropagation(), e.stop());
    });
  }
  const eS = /* @__PURE__ */ new Set(["praesens", "perfekt", "praeteritum", "futur1", "imperativ", "konjunktiv2", "passiv-praesens", "passiv-praeteritum", "perfekt-passiv", "konjunktiv2-vergangenheit", "konjunktiv1", "konjunktiv1-vergangenheit"]);
  function tS(t, e) {
    const s = t.forms.filter((i) => !i.given).map((i) => i.person);
    if (t.ask === void 0 || t.ask >= s.length) return s;
    const n = new Set(gs(s, e.rng).slice(0, t.ask));
    return s.filter((i) => n.has(i));
  }
  const sS = { kind: "conjugation", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, s = new Set(tS(e, t)), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let r = false, o = null;
    const a = e.forms.filter((y) => s.has(y.person)).map((y) => y.person), c = () => a.every((y) => {
      var _a4, _b4;
      return ((_b4 = (_a4 = n.get(y)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : "") !== "";
    }), l = () => {
      k.disabled = r || !c();
    }, u = () => {
      r || !c() || (r = true, t.submit(Object.fromEntries(a.map((y) => {
        var _a4, _b4;
        return [y, (_b4 = (_a4 = n.get(y)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : ""];
      }))));
    }, h = d("tbody");
    for (const y of e.forms) {
      const $ = t.text.t(y.label);
      if (!s.has(y.person)) {
        h.appendChild(d("tr", { class: "conj-row is-given", testid: "conj-given-".concat(y.person) }, d("th", { scope: "row", class: "conj-label" }, $), d("td", { class: "conj-given" }, (_a3 = t.text.canonical(y.answer)) != null ? _a3 : ""), d("td", { class: "conj-result" })));
        continue;
      }
      const x = d("input", { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_b3 = t.data.pack.targetLang) != null ? _b3 : t.lang, class: "text-input conj-input", testid: "conj-".concat(y.person), "aria-label": "".concat($, ": ").concat(t.text.t(e.verb)) });
      x.addEventListener("input", l), x.addEventListener("focus", () => o = x), x.addEventListener("keydown", (O) => {
        if (O.key !== "Enter") return;
        O.preventDefault();
        const R = a.slice(a.indexOf(y.person) + 1).map((S) => n.get(S)).find((S) => S && S.value.trim() === "");
        R ? R.focus() : u();
      }), n.set(y.person, x);
      const _ = d("td", { class: "conj-result", testid: "conj-".concat(y.person, "-result"), "aria-live": "polite" }), z = d("tr", { class: "conj-row" }, d("th", { scope: "row", class: "conj-label" }, $), d("td", { class: "conj-cell" }, x), _);
      i.set(y.person, z), h.appendChild(z);
    }
    const p = "conj.tense.".concat(e.tense), f = eS.has(e.tense) ? t.ui(p) : e.tense, m = d("div", { class: "conj-head" }, d("p", { class: "conj-verb", testid: "conj-verb", lang: (_c2 = t.data.pack.targetLang) != null ? _c2 : t.lang }, t.text.t(e.verb)), d("span", { class: "badge conj-tense", testid: "conj-tense" }, f)), g = d("table", { class: "conj-table", "aria-label": "".concat(t.text.t(e.verb), ", ").concat(f) }, h), k = T("check", t.ui("submit"), u, { class: "btn btn-primary", disabled: true }), b = vr(t, () => {
      var _a4, _b4;
      return (_b4 = o != null ? o : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _b4 : null;
    }), v = yr(t, () => {
      var _a4, _b4, _c3;
      return (_c3 = (_b4 = o != null ? o : a.map((y) => n.get(y)).find((y) => y && y.value.trim() === "")) != null ? _b4 : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _c3 : null;
    });
    for (const y of n.values()) Jl(y, v);
    const w = d("div", { class: "conj" }, m, g, b, d("div", { class: "actions" }, v == null ? void 0 : v.button, k), v == null ? void 0 : v.status);
    return { el: w, focus: () => {
      var _a4, _b4;
      return (_b4 = n.get((_a4 = a[0]) != null ? _a4 : "")) == null ? void 0 : _b4.focus();
    }, destroy: () => v == null ? void 0 : v.stop(), reveal: (y) => {
      var _a4, _b4;
      v == null ? void 0 : v.disable(), r = true, k.disabled = true;
      const $ = y.expected && typeof y.expected == "object" ? y.expected : {};
      for (const x of a) {
        const _ = n.get(x), z = w.querySelector('[data-testid="conj-'.concat(x, '-result"]'));
        if (!_ || !z) continue;
        const O = ((_a4 = y.detail) == null ? void 0 : _a4[x]) === true;
        _.disabled = true, _.classList.add(O ? "is-correct" : "is-wrong"), (_b4 = i.get(x)) == null ? void 0 : _b4.classList.add(O ? "is-correct" : "is-wrong"), z.setAttribute("data-ok", String(O)), z.appendChild(d("span", { class: "mark", "aria-hidden": "true" }, O ? "✓" : "✗")), z.appendChild(Ns(O ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
        const R = $[x];
        !O && R && z.appendChild(d("span", { class: "conj-answer", testid: "conj-answer-".concat(x) }, R));
      }
    } };
  } }, Sr = "_", xe = (t, e) => "".concat(t, ",").concat(e), Ql = (t) => Zi(t).toUpperCase().replace(/[^A-Z0-9]/g, ""), nS = { kind: "crossword", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, { grid: s } = _c(e, t.check), n = new Map(e.words.map((S) => [S.id, t.text.t(S.clue)])), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = (S) => Array.from({ length: S.length }, (A, j) => [S.row + (S.dir === "down" ? j : 0), S.col + (S.dir === "across" ? j : 0)]);
    for (const S of s.entries) for (const [A, j] of a(S)) o.set(xe(A, j), [...(_a3 = o.get(xe(A, j))) != null ? _a3 : [], S]);
    let c = s.entries[0], l = false;
    const u = /* @__PURE__ */ new Map(), h = () => {
      var _a4;
      const S = new Set(c ? a(c).map(([A, j]) => xe(A, j)) : []);
      for (const [A, j] of r) (_a4 = j.parentElement) == null ? void 0 : _a4.classList.toggle("is-active", S.has(A));
      for (const [A, j] of $) j.classList.toggle("is-active", A === (c == null ? void 0 : c.id));
    }, p = (S) => {
      for (const A of s.entries) {
        const j = u.get(A.id);
        !j || j === S || (j.value = a(A).map(([I, D]) => i.get(xe(I, D)) || Sr).join(""), j.value === Sr.repeat(A.length) && (j.value = ""));
      }
      O.disabled = l || i.size === 0;
    }, f = (S, A, j) => {
      j ? i.set(xe(S, A), j) : i.delete(xe(S, A));
      const I = r.get(xe(S, A));
      I && (I.value = j);
    }, m = (S, A) => {
      const j = r.get(xe(S, A));
      return j ? (j.focus(), j.select(), true) : false;
    }, g = (S, A, j) => {
      var _a4, _b4;
      const I = (_a4 = o.get(xe(S, A))) != null ? _a4 : [];
      I.length !== 0 && (c && I.includes(c) ? j && I.length > 1 && (c = (_b4 = I.find((D) => D !== c)) != null ? _b4 : c) : c = I[0], h());
    }, k = (S, A, j) => {
      var _a4;
      const I = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across";
      m(S + (I === "down" ? j : 0), A + (I === "across" ? j : 0));
    };
    let b;
    const v = (S) => {
      b && b !== S && (b.tabIndex = -1), S.tabIndex = 0, b = S;
    }, w = d("div", { class: "cw-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.width) });
    for (let S = 0; S < s.height; S++) for (let A = 0; A < s.width; A++) {
      if (!((_b3 = s.cells[S]) == null ? void 0 : _b3[A])) {
        w.appendChild(d("span", { class: "cw-black", "aria-hidden": "true" }));
        continue;
      }
      const I = (_c2 = o.get(xe(S, A))) != null ? _c2 : [], D = s.entries.filter((H) => H.row === S && H.col === A), G = I.map((H) => "".concat(H.number, " ").concat(t.ui(H.dir === "across" ? "cross.across" : "cross.down"))).join(", "), B = d("input", { type: "text", class: "cw-input", maxlength: 2, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "cell-".concat(S, "-").concat(A), "aria-label": "".concat(t.ui("cross.cell", { r: S + 1, c: A + 1 }), ", ").concat(G) });
      B.addEventListener("focus", () => g(S, A, false)), B.addEventListener("click", () => {
        document.activeElement === B && g(S, A, true);
      }), B.addEventListener("input", () => {
        if (l) return;
        const H = Ql(B.value.slice(-1) || B.value);
        f(S, A, H.slice(-1)), p(), H && k(S, A, 1);
      }), B.addEventListener("keydown", (H) => {
        var _a4;
        const ke = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across", he = (Ie, Ue) => {
          var _a5;
          H.preventDefault();
          let W = S + Ie, ie = A + Ue;
          for (; W >= 0 && ie >= 0 && W < s.height && ie < s.width && !((_a5 = s.cells[W]) == null ? void 0 : _a5[ie]); ) W += Ie, ie += Ue;
          m(W, ie);
        };
        if (H.key === "ArrowRight") he(0, 1);
        else if (H.key === "ArrowLeft") he(0, -1);
        else if (H.key === "ArrowDown") he(1, 0);
        else if (H.key === "ArrowUp") he(-1, 0);
        else if (H.key === "Backspace" && !B.value && !l) {
          H.preventDefault(), k(S, A, -1);
          const Ie = ke === "down" ? [S - 1, A] : [S, A - 1];
          f(Ie[0], Ie[1], ""), p();
        } else H.key === "Enter" && (H.preventDefault(), O.disabled || O.click());
      }), r.set(xe(S, A), B), B.tabIndex = -1, B.addEventListener("focus", () => v(B)), w.appendChild(d("span", { class: "cw-cell" }, D[0] ? d("span", { class: "cw-num", "aria-hidden": "true" }, String(D[0].number)) : null, B));
    }
    const y = s.entries[0] ? r.get(xe(s.entries[0].row, s.entries[0].col)) : void 0;
    y && v(y);
    const $ = /* @__PURE__ */ new Map(), { across: x, down: _ } = cb(s), z = (S, A) => d("section", { class: "cw-clues" }, d("h2", {}, A), d("ol", {}, S.map((j) => {
      var _a4, _b4;
      const I = d("input", { type: "text", class: "word-input", maxlength: j.length, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "word-".concat(j.id), "aria-label": "".concat(j.number, " ").concat(t.ui(j.dir === "across" ? "cross.across" : "cross.down"), ": ").concat((_a4 = n.get(j.id)) != null ? _a4 : "", " (").concat(j.length, ")") });
      u.set(j.id, I), I.addEventListener("focus", () => {
        c = j, h();
      }), I.addEventListener("input", () => {
        if (l) return;
        const G = Array.from(I.value.toUpperCase().slice(0, j.length));
        a(j).forEach(([B, H], ke) => {
          var _a5;
          const he = G[ke] ? G[ke] === Sr || G[ke] === " " ? "" : Ql(G[ke]).slice(0, 1) : void 0;
          he !== void 0 && (he !== "" || !((_a5 = o.get(xe(B, H))) == null ? void 0 : _a5.some((Ie) => Ie !== j))) && f(B, H, he);
        }), p(I);
      }), I.addEventListener("keydown", (G) => {
        G.key === "Enter" && (G.preventDefault(), O.disabled || O.click());
      });
      const D = d("li", { class: "cw-clue", testid: "clue-".concat(j.id), value: j.number }, d("span", { class: "cw-clue-text" }, d("b", {}, "".concat(j.number, ". ")), (_b4 = n.get(j.id)) != null ? _b4 : "", " (".concat(j.length, ")")), I);
      return $.set(j.id, D), D;
    }))), O = yt(t, () => {
      l || (l = true, t.submit(Object.fromEntries(s.entries.map((S) => [S.id, a(S).map(([A, j]) => {
        var _a4;
        return (_a4 = i.get(xe(A, j))) != null ? _a4 : "";
      }).join("")]))));
    }, true), R = d("div", { class: "crossword" }, d("div", { class: "cw-board" }, d("div", { class: "cw-scroll" }, w), d("div", { class: "cw-side" }, z(x, t.ui("cross.across")), z(_, t.ui("cross.down")))), d("div", { class: "actions" }, O));
    return h(), { el: R, focus: () => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const S = s.entries[0];
      S && m(S.row, S.col);
    }, reveal: (S) => {
      var _a4, _b4, _c3;
      l = true, O.disabled = true;
      for (const [A, j] of r) {
        const [I, D] = A.split(",").map(Number), G = (_b4 = (_a4 = s.cells[I]) == null ? void 0 : _a4[D]) != null ? _b4 : "", B = i.get(A);
        j.value = G, j.disabled = true;
        const H = j.parentElement;
        H.classList.remove("is-active"), H.classList.add(B === G ? "is-correct" : "is-wrong");
      }
      for (const A of s.entries) {
        const j = $.get(A.id), I = u.get(A.id);
        I && (I.disabled = true, I.value = a(A).map(([D, G]) => {
          var _a5, _b5;
          return (_b5 = (_a5 = s.cells[D]) == null ? void 0 : _a5[G]) != null ? _b5 : "";
        }).join("")), j && at(j, ((_c3 = S.detail) == null ? void 0 : _c3[A.id]) === true, t);
      }
    } };
  } }, iS = { kind: "flashcard", ownsPrompt: true, render(t) {
    const e = t.item;
    let s = false, n = false;
    const i = t.item.asset && t.assetUrl(t.item.asset) ? d("img", { class: "flash-img", src: t.assetUrl(t.item.asset), alt: t.assetAlt(t.item.asset) }) : null, r = e.backAsset && t.assetUrl(e.backAsset) ? d("img", { class: "flash-img", src: t.assetUrl(e.backAsset), alt: t.assetAlt(e.backAsset) }) : null, o = d("span", { class: "flash-face flash-front", testid: "flash-front" }, d("span", { class: "flash-text" }, t.text.t(e.prompt)), i), a = d("span", { class: "flash-face flash-back", testid: "flash-back", "aria-hidden": "true" }, d("span", { class: "flash-text" }, t.text.t(e.back)), r), c = d("span", { class: "sr-only" }, " — ".concat(t.ui("flip"))), l = T("flip", [d("span", { class: "flash-inner" }, o, a), c], () => m(), { class: "flash-card" }), u = /* @__PURE__ */ new Map();
    for (const k of pn) u.set(k, T("grade-".concat(k), [d("span", { class: "grade-key", "aria-hidden": "true" }, String(pn.indexOf(k) + 1)), t.ui("grade.".concat(k))], () => g(k), { class: "btn grade grade-".concat(k) }));
    const h = d("div", { class: "grades", hidden: true, role: "group", "aria-label": t.ui("grade.ask") }, [...u.values()]), p = d("p", { class: "hint-line" }, t.ui("flip")), f = t.item.tags.includes("self-check") ? d("p", { class: "hint-line selfcheck-hint", testid: "selfcheck-hint", hidden: true }, t.ui("selfcheck.hint")) : null;
    function m() {
      var _a3;
      n || s || (s = true, l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), c.textContent = "", h.hidden = false, f && (f.hidden = false), p.textContent = t.ui("grade.ask"), (_a3 = u.get("good")) == null ? void 0 : _a3.focus());
    }
    function g(k) {
      n || !s || (n = true, t.submit(k));
    }
    return { el: d("div", { class: "flashcard" }, l, p, f, h), focus: () => l.focus(), key: (k) => {
      const b = pr(k), v = pn[b];
      return !s || b < 0 || !v ? false : (k.preventDefault(), g(v), true);
    }, reveal: (k, b) => {
      n = true, s || (l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), h.hidden = false), f && (f.hidden = false), l.disabled = true;
      for (const [v, w] of u) w.disabled = true, w.setAttribute("aria-pressed", String(v === b)), v === b && w.classList.add("is-chosen");
    } };
  } };
  function rS(t) {
    return t.type === "circle" ? de("circle", { cx: t.cx, cy: t.cy, r: t.r }) : t.type === "rect" ? de("rect", { x: t.x, y: t.y, width: t.w, height: t.h, rx: 4 }) : de("polygon", { points: t.points.map(([e, s]) => "".concat(e, ",").concat(s)).join(" ") });
  }
  const oS = { kind: "hotspot", render(t) {
    const e = t.item, s = t.assetUrl(e.asset);
    let n = false;
    const i = de("svg", { class: "hotspot-svg", viewBox: "0 0 ".concat(e.width, " ").concat(e.height), role: "group", "aria-label": t.assetAlt(e.asset) || t.ui("picture"), testid: "hotspot" });
    s && i.appendChild(de("image", { href: s, x: 0, y: 0, width: e.width, height: e.height, preserveAspectRatio: "xMidYMid meet" }));
    const r = /* @__PURE__ */ new Map();
    for (const l of e.regions) {
      const u = rS(l.shape);
      u.classList.add("region"), u.setAttribute("data-region", l.id), u.setAttribute("data-testid", "region-".concat(l.id)), u.setAttribute("role", "button"), u.setAttribute("tabindex", "0"), u.setAttribute("aria-label", t.text.t(l.label)), u.addEventListener("keydown", (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), o(l.id));
      }), r.set(l.id, u), i.appendChild(u);
    }
    const o = (l) => {
      n || (n = true, t.submit(l));
    };
    i.addEventListener("click", (l) => {
      if (n) return;
      const u = l.target.closest("[data-region]");
      if (u) return o(u.getAttribute("data-region"));
      const h = i.getScreenCTM();
      if (!h) return;
      const p = new DOMPoint(l.clientX, l.clientY).matrixTransform(h.inverse());
      a = { x: p.x, y: p.y }, o({ x: p.x, y: p.y });
    });
    let a = null;
    return { el: d("div", { class: "hotspot" }, d("p", { class: "hint-line" }, t.ui("hotspot.pick")), d("div", { class: "hotspot-frame" }, i)), focus: () => {
      var _a3;
      return (_a3 = r.values().next().value) == null ? void 0 : _a3.focus();
    }, reveal: (l, u) => {
      n = true;
      const h = typeof u == "string" ? u : void 0;
      for (const [p, f] of r) f.setAttribute("tabindex", "-1"), p === e.answer ? f.classList.add("is-correct") : p === h && f.classList.add("is-wrong");
      typeof u == "object" && u && a && i.appendChild(de("circle", { cx: a.x, cy: a.y, r: Math.max(6, e.width / 80), class: "miss-dot" }));
    } };
  } }, Xl = (t) => {
    var _a3;
    return { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_a3 = t.data.pack.targetLang) != null ? _a3 : t.lang };
  };
  function eu(t, e) {
    const s = d("input", { ...Xl(t), class: "text-input", testid: "answer-input", "aria-label": t.ui("answer.type"), placeholder: t.ui("answer.type") }), n = yt(t, () => i(), true), i = () => {
      const c = s.value.trim();
      c === "" || s.disabled || e(c);
    };
    s.addEventListener("input", () => {
      n.disabled = s.value.trim() === "" || s.disabled;
    }), s.addEventListener("keydown", (c) => {
      c.key === "Enter" && (c.preventDefault(), i());
    });
    const r = vr(t, () => s), o = yr(t, () => s);
    return Jl(s, o), { el: d("div", { class: "typed" }, d("div", { class: "typed-row" }, s, o == null ? void 0 : o.button, n), o == null ? void 0 : o.status, r), input: s, submit: n, mic: o };
  }
  const aS = [J0, Q0, X0, { kind: "cloze", render(t) {
    const e = t.item, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let r = false, o = null;
    const a = () => e.gaps.every((z) => {
      var _a3;
      return ((_a3 = n.get(z.id)) != null ? _a3 : "").trim() !== "";
    }), c = () => {
      b.disabled = r || !a();
    }, l = () => {
      r || !a() || (r = true, t.submit(Object.fromEntries(e.gaps.map((z) => {
        var _a3;
        return [z.id, (_a3 = n.get(z.id)) != null ? _a3 : ""];
      }))));
    }, u = (z, O) => {
      var _a3;
      const R = t.ui("gap.n", { n: O + 1 });
      if (z.bank) {
        const j = T("gap-".concat(z.id), "", () => h(z.id, ""), { class: "gap gap-slot", "aria-label": R });
        return j.appendChild(d("span", { class: "gap-text" }, " ")), { id: z.id, el: j, banked: true, value: () => {
          var _a4;
          return (_a4 = n.get(z.id)) != null ? _a4 : "";
        }, wrap: j };
      }
      const S = (_a3 = t.text.canonical(z.answer)) != null ? _a3 : "", A = d("input", { ...Xl(t), class: "gap gap-input", testid: "gap-".concat(z.id), "aria-label": R, size: Math.max(5, Math.min(22, S.length + 2)) });
      return A.addEventListener("input", () => {
        n.set(z.id, A.value), c();
      }), A.addEventListener("focus", () => o = A), A.addEventListener("keydown", (j) => {
        if (j.key !== "Enter") return;
        j.preventDefault();
        const I = e.gaps.slice(O + 1).map((D) => s.get(D.id)).find((D) => {
          var _a4;
          return D && !D.banked && !((_a4 = n.get(D.id)) != null ? _a4 : "").trim();
        });
        I ? I.el.focus() : l();
      }), { id: z.id, el: A, banked: false, value: () => A.value, wrap: A };
    }, h = (z, O, R) => {
      var _a3;
      if (r) return;
      const S = s.get(z);
      if (!S) return;
      n.set(z, O);
      const A = S.el.querySelector(".gap-text");
      A && (A.textContent = O === "" ? " " : O), S.el.classList.toggle("is-filled", O !== "");
      const j = t.ui("gap.n", { n: e.gaps.findIndex((I) => I.id === z) + 1 });
      S.el.setAttribute("aria-label", O === "" ? j : "".concat(j, ": ").concat(O));
      for (const I of (_a3 = i.get(z)) != null ? _a3 : []) I.setAttribute("aria-pressed", String(I === R));
      c();
    };
    e.gaps.forEach((z, O) => s.set(z.id, u(z, O)));
    const p = d("p", { class: "cloze-text" }), m = t.text.t(e.text).split(/(\{\{[^}]+\}\})/);
    for (const z of m) {
      const O = /^\{\{([^}]+)\}\}$/.exec(z), R = O ? s.get(O[1]) : void 0;
      R ? p.appendChild(R.wrap) : z && p.appendChild(document.createTextNode(z));
    }
    const g = e.gaps.filter((z) => z.bank).length, k = e.gaps.flatMap((z, O) => {
      if (!z.bank) return [];
      const S = Cn(t, z.bank, true).map((A) => {
        var _a3;
        const j = (_a3 = t.text.canonical(A)) != null ? _a3 : t.text.t(A), I = T("bank-".concat(z.id, "-").concat(A), j, () => h(z.id, j, I), { class: "chip", "aria-pressed": "false" });
        return I;
      });
      return i.set(z.id, S), [d("div", { class: "bank", role: "group", "aria-label": t.ui("gap.n", { n: O + 1 }), testid: "bank-".concat(z.id) }, g > 1 ? d("span", { class: "bank-label" }, t.ui("gap.n", { n: O + 1 })) : null, S)];
    }), b = yt(t, l, true), v = e.gaps.some((z) => !z.bank), w = v ? vr(t, () => {
      var _a3, _b3;
      return (_b3 = o != null ? o : (_a3 = e.gaps.map((z) => s.get(z.id)).find((z) => z && !z.banked)) == null ? void 0 : _a3.el) != null ? _b3 : null;
    }) : null, y = () => e.gaps.map((z) => s.get(z.id)).filter((z) => !!z && !z.banked).map((z) => z.el), $ = v ? yr(t, () => {
      var _a3, _b3;
      return (_b3 = (_a3 = o != null ? o : y().find((z) => z.value.trim() === "")) != null ? _a3 : y()[0]) != null ? _b3 : null;
    }) : null, x = d("div", { class: "cloze" }, p, k, w, d("div", { class: "actions" }, $ == null ? void 0 : $.button, b), $ == null ? void 0 : $.status);
    return c(), { el: x, focus: () => {
      var _a3, _b3, _c2, _d2, _e2, _f2;
      (_f2 = (_e2 = (_a3 = e.gaps.map((O) => s.get(O.id)).find((O) => O && !O.banked)) == null ? void 0 : _a3.el) != null ? _e2 : (_d2 = i.get((_c2 = (_b3 = e.gaps[0]) == null ? void 0 : _b3.id) != null ? _c2 : "")) == null ? void 0 : _d2[0]) == null ? void 0 : _f2.focus();
    }, destroy: () => $ == null ? void 0 : $.stop(), reveal: (z) => {
      var _a3;
      $ == null ? void 0 : $.disable(), r = true, b.disabled = true;
      const O = z.expected && typeof z.expected == "object" ? z.expected : {};
      for (const R of e.gaps) {
        const S = s.get(R.id);
        if (!S) continue;
        const A = ((_a3 = z.detail) == null ? void 0 : _a3[R.id]) === true;
        if (S.banked, S.el.disabled = true, S.el.classList.add(A ? "is-correct" : "is-wrong"), !A) {
          const j = O[R.id];
          j && S.el.insertAdjacentElement("afterend", d("span", { class: "gap-answer", testid: "gap-answer-".concat(R.id) }, j));
        }
        S.el.insertAdjacentElement("afterend", Ns(A ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
      }
      for (const R of i.values()) for (const S of R) S.disabled = true;
    } };
  } }, { kind: "typed", render(t) {
    const e = eu(t, (s) => {
      t.submit(s);
    });
    return { el: e.el, focus: () => e.input.focus(), reveal: (s) => {
      var _a3;
      (_a3 = e.mic) == null ? void 0 : _a3.disable(), e.input.disabled = true, e.submit.disabled = true, at(e.el.querySelector(".typed-row"), s.correct, t);
    }, destroy: () => {
      var _a3;
      return (_a3 = e.mic) == null ? void 0 : _a3.stop();
    } };
  } }, { kind: "match-pairs", render(t) {
    const e = t.item, s = gs(e.pairs.map(($) => $.id), t.rng), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let r = null, o = null, a = false;
    const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = () => {
      const $ = new Set(i.values());
      for (let x = 1; x <= e.pairs.length; x++) if (!$.has(x)) return x;
      return e.pairs.length + 1;
    }, h = ($) => {
      var _a3;
      return (_a3 = [...n].find(([, x]) => x === $)) == null ? void 0 : _a3[0];
    }, p = () => {
      for (const [$, x] of c) f(x, $, n.get($) !== void 0, r === $);
      for (const [$, x] of l) f(x, $, h($) !== void 0, o === $);
      w.disabled = a || n.size !== e.pairs.length;
    }, f = ($, x, _, z) => {
      const R = c.get(x) === $ ? x : h(x), S = R ? i.get(R) : void 0;
      $.setAttribute("aria-pressed", String(z)), $.classList.toggle("is-paired", _);
      for (const I of Array.from($.classList)) I.startsWith("pair-c") && $.classList.remove(I);
      _ && S && $.classList.add("pair-c".concat((S - 1) % 8 + 1));
      const A = $.querySelector(".pair-n");
      A && (A.textContent = _ && S ? String(S) : "");
      const j = $.querySelector(".sr-only");
      j && (j.textContent = _ && S ? " (".concat(S, ")") : "");
    }, m = ($) => {
      n.delete($), i.delete($);
    }, g = () => {
      if (r && o) {
        const $ = h(o);
        $ && m($), m(r), n.set(r, o), i.set(r, u()), r = null, o = null;
      }
    }, k = ($) => {
      a || (n.has($) ? m($) : r = r === $ ? null : $, g(), p());
    }, b = ($) => {
      if (a) return;
      const x = h($);
      x ? m(x) : o = o === $ ? null : $, g(), p();
    }, v = ($, x, _) => T($, [d("span", { class: "pair-n", "aria-hidden": "true" }), d("span", { class: "pair-text" }, x), Ns("")], _, { class: "pair-btn", "aria-pressed": "false" });
    for (const $ of e.pairs) c.set($.id, v("pair-left-".concat($.id), t.text.t($.left), () => k($.id)));
    for (const $ of s) {
      const x = e.pairs.find((_) => _.id === $);
      x && l.set($, v("pair-right-".concat($), t.text.t(x.right), () => b($)));
    }
    const w = yt(t, () => {
      a || n.size !== e.pairs.length || (a = true, t.submit(Object.fromEntries(n)));
    }, true), y = d("div", { class: "pairs" }, d("p", { class: "hint-line" }, t.ui("pairs.pick")), d("div", { class: "pairs-cols" }, d("div", { class: "pairs-col", role: "group" }, [...c.values()]), d("div", { class: "pairs-col", role: "group" }, [...l.values()])), d("div", { class: "actions" }, w));
    return p(), { el: y, focus: () => {
      var _a3;
      return (_a3 = [...c.values()][0]) == null ? void 0 : _a3.focus();
    }, reveal: ($) => {
      var _a3;
      a = true, w.disabled = true;
      for (const x of e.pairs) {
        const _ = ((_a3 = $.detail) == null ? void 0 : _a3[x.id]) === true, z = c.get(x.id), O = n.get(x.id) ? l.get(n.get(x.id)) : void 0;
        for (const R of [z, O]) R && (R.disabled = true, at(R, _, t));
      }
    } };
  } }, { kind: "order", render(t) {
    const e = t.item, s = new Map(e.items.map((p) => [p.id, p]));
    let n = Tb(e, t.seed), i = false, r = -1;
    const o = d("ol", { class: "order-list", "aria-label": t.text.t(e.prompt), testid: "order-list" }), a = (p, f, m, g) => {
      var _a3;
      if (i || f < 0 || f >= n.length || p === f) return;
      const k = [...n], [b] = k.splice(p, 1);
      if (k.splice(f, 0, b), n = k, c(), m) {
        const v = o.querySelector('[data-testid="order-'.concat(g, "-").concat(m, '"]'));
        (_a3 = v && !v.disabled ? v : o.querySelector('[data-testid="order-'.concat(g === "up" ? "down" : "up", "-").concat(m, '"]'))) == null ? void 0 : _a3.focus();
      }
    }, c = () => {
      o.replaceChildren(...n.map((p, f) => {
        var _a3;
        const m = s.get(p), g = t.text.t((_a3 = m == null ? void 0 : m.text) != null ? _a3 : p), k = d("li", { class: "order-row", testid: "order-row-".concat(p), draggable: i ? "false" : "true" }, d("span", { class: "order-n", "aria-hidden": "true" }, String(f + 1)), d("span", { class: "order-text" }, g), d("span", { class: "order-btns" }, T("order-up-".concat(p), "▲", () => a(f, f - 1, p, "up"), { class: "icon-btn", "aria-label": t.ui("order.up", { item: g }), ...i || f === 0 ? { disabled: true } : {} }), T("order-down-".concat(p), "▼", () => a(f, f + 1, p, "down"), { class: "icon-btn", "aria-label": t.ui("order.down", { item: g }), ...i || f === n.length - 1 ? { disabled: true } : {} })));
        return k.addEventListener("dragstart", (b) => {
          var _a4;
          r = f, k.classList.add("is-dragging"), (_a4 = b.dataTransfer) == null ? void 0 : _a4.setData("text/plain", p);
        }), k.addEventListener("dragend", () => k.classList.remove("is-dragging")), k.addEventListener("dragover", (b) => {
          !i && r >= 0 && b.preventDefault();
        }), k.addEventListener("drop", (b) => {
          b.preventDefault();
          const v = r;
          r = -1, a(v, f);
        }), k;
      }));
    };
    c();
    const l = yt(t, () => {
      i || (i = true, t.submit([...n]));
    }), u = e.timeline;
    return { el: d("div", { class: "order" }, u ? d("p", { class: "order-end" }, "▲ ".concat(t.ui("order.first"))) : null, o, u ? d("p", { class: "order-end" }, "▼ ".concat(t.ui("order.last"))) : null, d("div", { class: "actions" }, l)), focus: () => {
      var _a3;
      return (_a3 = o.querySelector("button:not([disabled])")) == null ? void 0 : _a3.focus();
    }, reveal: (p) => {
      i = true, l.disabled = true, c(), o.querySelectorAll(".order-row").forEach((m, g) => {
        var _a3, _b3;
        const k = n[g];
        m.setAttribute("draggable", "false");
        const b = ((_a3 = p.detail) == null ? void 0 : _a3[k]) === true;
        at(m, b, t);
        const v = (_b3 = s.get(k)) == null ? void 0 : _b3.when;
        v && m.appendChild(d("span", { class: "order-when" }, t.text.t(v))), m.appendChild(d("span", { class: "order-should" }, b ? "" : "→ ".concat(e.items.findIndex((w) => w.id === k) + 1)));
      });
    } };
  } }, { kind: "sort-groups", render(t) {
    const e = t.item, s = gs(e.items.map((p) => p.id), t.rng), n = new Map(e.items.map((p) => [p.id, p])), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let o = false;
    const a = (p) => e.groups.findIndex((f) => f.id === p) + 1, c = () => {
      var _a3;
      for (const [p, f] of r) {
        const [m, g] = p.split("\0");
        f.setAttribute("aria-pressed", String(i.get(g) === m));
      }
      for (const p of s) (_a3 = l.get(p)) == null ? void 0 : _a3.setAttribute("data-group", String(i.has(p) ? a(i.get(p)) : 0));
      u.disabled = o || i.size !== e.items.length;
    }, l = /* @__PURE__ */ new Map();
    for (const p of s) {
      const f = n.get(p);
      if (!f) continue;
      const m = t.text.t(f.text), g = e.groups.map((k) => {
        const b = T("group-".concat(k.id, "-").concat(p), t.text.t(k.title), () => {
          o || (i.get(p) === k.id ? i.delete(p) : i.set(p, k.id), c());
        }, { class: "pill pill-g".concat(a(k.id)), "aria-pressed": "false", "aria-label": t.ui("sort.assign", { item: m, group: t.text.t(k.title) }) });
        return r.set("".concat(k.id, "\0").concat(p), b), b;
      });
      l.set(p, d("li", { class: "sort-card", testid: "sort-card-".concat(p), "data-group": "0" }, d("span", { class: "sort-text" }, m), d("span", { class: "sort-pills", role: "group", "aria-label": m }, g)));
    }
    const u = yt(t, () => {
      o || i.size !== e.items.length || (o = true, t.submit(Object.fromEntries(i)));
    }, true), h = d("div", { class: "sort" }, d("ul", { class: "sort-list" }, [...l.values()]), d("div", { class: "actions" }, u));
    return c(), { el: h, focus: () => {
      var _a3;
      return (_a3 = [...r.values()][0]) == null ? void 0 : _a3.focus();
    }, reveal: (p) => {
      var _a3, _b3;
      o = true, u.disabled = true;
      for (const f of r.values()) f.disabled = true;
      for (const f of e.items) {
        const m = l.get(f.id);
        if (!m) continue;
        const g = ((_a3 = p.detail) == null ? void 0 : _a3[f.id]) === true;
        if (at(m, g, t), !g) {
          const k = e.groups.find((b) => b.id === f.group);
          m.appendChild(d("span", { class: "sort-should" }, "→ ".concat(t.text.t((_b3 = k == null ? void 0 : k.title) != null ? _b3 : f.group))));
        }
      }
    } };
  } }, oS, { kind: "listening", render(t) {
    var _a3;
    const e = t.item, s = t.assetUrl(e.asset), n = d("audio", { preload: "auto", testid: "audio", ...s ? { src: s } : {} }), i = d("p", { class: "audio-status", role: "status" });
    let r = false;
    const o = T("audio-play", [d("span", { class: "play-icon", "aria-hidden": "true" }, "🔊"), d("span", {}, t.ui("play"))], () => {
      var _a4;
      i.textContent = "", n.currentTime = 0, (_a4 = t.voice) == null ? void 0 : _a4.call(t, n), n.play().then(() => {
        var _a5;
        (_a5 = t.duck) == null ? void 0 : _a5.call(t, true), r || (r = true, o.lastElementChild.textContent = t.ui("play.again"));
      }, () => {
        i.textContent = t.ui("audio.fail");
      });
    }, { class: "btn btn-play" });
    n.addEventListener("error", () => {
      var _a4;
      i.textContent = t.ui("audio.fail"), (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
    });
    for (const u of ["ended", "pause"]) n.addEventListener(u, () => {
      var _a4;
      return (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
    });
    const a = d("div", { class: "audio-block" }, o, n, i);
    if (e.mode === "choose") {
      const u = Cn(t, (_a3 = e.options) != null ? _a3 : [], e.shuffle).map((f) => ({ id: f.id, text: t.text.t(f.text) })), h = wr(t, u, e.answer), p = d("div", { class: "listening" }, a, h.el);
      return { el: p, focus: () => o.focus(), key: h.key, reveal: (f, m) => {
        h.reveal(f, m), p.appendChild(d("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
      }, destroy: () => {
        var _a4;
        n.pause(), (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
      } };
    }
    const c = eu(t, (u) => t.submit(u)), l = d("div", { class: "listening" }, a, c.el);
    return { el: l, focus: () => o.focus(), reveal: (u) => {
      var _a4;
      (_a4 = c.mic) == null ? void 0 : _a4.disable(), c.input.disabled = true, c.submit.disabled = true, at(c.el.querySelector(".typed-row"), u.correct, t), l.appendChild(d("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
    }, destroy: () => {
      var _a4, _b3;
      (_a4 = c.mic) == null ? void 0 : _a4.stop(), n.pause(), (_b3 = t.duck) == null ? void 0 : _b3.call(t, false);
    } };
  } }, iS, nS, { kind: "word-search", render(t) {
    var _a3, _b3, _c2, _d2;
    const e = t.item, { grid: s, words: n } = mn(t.item, t.check), i = [], r = /* @__PURE__ */ new Set(), o = [];
    let a = null, c = [0, 0], l = false;
    const u = (x, _) => {
      var _a4;
      return (_a4 = o[x]) == null ? void 0 : _a4[_];
    }, h = (x) => {
      const [_, z] = x.start, [O, R] = x.end, S = Math.sign(O - _), A = Math.sign(R - z), j = Math.max(Math.abs(O - _), Math.abs(R - z)) + 1;
      return Array.from({ length: j }, (I, D) => [_ + S * D, z + A * D]);
    }, p = (x, _, z) => {
      var _a4;
      const O = u(x, _);
      O && ((_a4 = u(...c)) == null ? void 0 : _a4.setAttribute("tabindex", "-1"), c = [x, _], O.setAttribute("tabindex", "0"), z && O.focus());
    }, f = () => {
      var _a4, _b4;
      for (const x of o) for (const _ of x) _.classList.remove("is-first");
      a && ((_a4 = u(...a)) == null ? void 0 : _a4.classList.add("is-first"));
      for (const x of o) for (const _ of x) _.setAttribute("aria-pressed", "false");
      a && ((_b4 = u(...a)) == null ? void 0 : _b4.setAttribute("aria-pressed", "true"));
    }, m = () => {
      l || (l = true, t.submit([...i]));
    }, g = (x, _) => {
      var _a4;
      if (l) return;
      if (!a) {
        a = [x, _], f();
        return;
      }
      if (a[0] === x && a[1] === _) {
        a = null, f();
        return;
      }
      const z = { start: a, end: [x, _] };
      a = null;
      const O = jc(s, n, [z]).filter((S) => !r.has(S));
      if (f(), O.length === 0) {
        for (const [S, A] of h(z)) (_a4 = u(S, A)) == null ? void 0 : _a4.classList.add("is-miss");
        window.setTimeout(() => {
          for (const S of o) for (const A of S) A.classList.remove("is-miss");
        }, 450);
        return;
      }
      i.push(z);
      const R = r.size;
      O.forEach((S) => r.add(S)), h(z).forEach(([S, A]) => {
        const j = u(S, A);
        j && j.classList.add("is-found", "found-c".concat(R % 6 + 1));
      });
      for (const S of O) {
        const A = b.get(S);
        A && (A.classList.add("is-found"), A.appendChild(d("span", { class: "mark", "aria-hidden": "true" }, "✓")), A.appendChild(Ns(t.ui("verdict.correct"))));
      }
      w.textContent = t.ui("ws.found", { n: r.size, total: e.words.length }), r.size === e.words.length && m();
    }, k = d("div", { class: "ws-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.size) });
    for (let x = 0; x < s.size; x++) {
      const _ = [], z = d("div", { class: "ws-row" });
      for (let O = 0; O < s.size; O++) {
        const R = d("button", { type: "button", class: "ws-cell", testid: "cell-".concat(x, "-").concat(O), tabindex: x === 0 && O === 0 ? "0" : "-1", "aria-pressed": "false", "aria-label": "".concat((_b3 = (_a3 = s.cells[x]) == null ? void 0 : _a3[O]) != null ? _b3 : "", ", ").concat(t.ui("cross.cell", { r: x + 1, c: O + 1 })) }, (_d2 = (_c2 = s.cells[x]) == null ? void 0 : _c2[O]) != null ? _d2 : "");
        R.addEventListener("click", () => {
          p(x, O, false), g(x, O);
        }), R.addEventListener("keydown", (S) => {
          const j = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[S.key];
          j && (S.preventDefault(), p(Math.min(s.size - 1, Math.max(0, x + j[0])), Math.min(s.size - 1, Math.max(0, O + j[1])), true));
        }), _.push(R), z.appendChild(R);
      }
      o.push(_), k.appendChild(z);
    }
    const b = /* @__PURE__ */ new Map(), v = d("ul", { class: "ws-words" }, e.words.map((x) => {
      var _a4;
      const _ = d("li", { class: "ws-word", testid: "ws-word-".concat(x.id) }, (_a4 = t.text.canonical(x.answer)) != null ? _a4 : x.id);
      return b.set(x.id, _), _;
    })), w = d("p", { class: "ws-count", role: "status", testid: "ws-count" }, t.ui("ws.found", { n: 0, total: e.words.length })), y = yt(t, m);
    return y.textContent = t.ui("ws.done"), { el: d("div", { class: "wordsearch" }, d("p", { class: "hint-line" }, t.ui("ws.pick")), d("div", { class: "ws-board" }, d("div", { class: "ws-scroll" }, k), d("div", { class: "ws-side" }, w, v)), d("div", { class: "actions" }, y)), focus: () => {
      var _a4;
      return (_a4 = u(...c)) == null ? void 0 : _a4.focus();
    }, reveal: () => {
      var _a4, _b4;
      l = true, y.disabled = true;
      for (const x of o) for (const _ of x) _.disabled = true;
      for (const x of s.placements) {
        if (r.has(x.id)) continue;
        const _ = x.answer.length;
        for (let z = 0; z < _; z++) (_a4 = u(x.row + x.dr * z, x.col + x.dc * z)) == null ? void 0 : _a4.classList.add("is-missed");
      }
      for (const x of e.words) r.has(x.id) || ((_b4 = b.get(x.id)) == null ? void 0 : _b4.classList.add("is-missed"));
    } };
  } }, sS], cS = (t, e) => "".concat(t, "/").concat(e);
  function lS(t) {
    var _a3;
    const e = (_a3 = t.extensions) == null ? void 0 : _a3.gloss;
    if (typeof e != "object" || e === null) return null;
    const s = e;
    return typeof s.article == "string" && typeof s.entry == "string" ? { article: s.article, entry: s.entry } : null;
  }
  function tu(t, e) {
    const s = lS(t);
    return s !== null && e.has(cS(s.article, s.entry));
  }
  function uS(t, e) {
    const s = new Set(e);
    return new Set(t.filter((n) => tu(n, s)).map((n) => n.id));
  }
  const su = "edu-student-result", nu = 1, $r = 60, dS = 400, hS = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,79}$/, Zn = E().regex(hS), zr = E().max(40).regex(/^\d{4}-\d{2}-\d{2}(T[0-9:.]+(Z|[+-]\d{2}:?\d{2})?)?$/, "an ISO date such as 2026-11-20").refine((t) => Number.isFinite(Date.parse(t)), "not a real date"), pS = F({ id: E().min(1).max(60), title: E().min(1).max(120), units: N(Zn).max(200).default([]), targetStars: L().int().min(1).max(3).default(2), due: zr.optional(), message: E().max(dS).optional(), createdAt: zr });
  function fS(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.classroom) == null ? void 0 : _a3.assignment;
    if (e == null) return null;
    const s = pS.safeParse(e);
    return s.success ? s.data : null;
  }
  function iu(t, e) {
    const s = t.units.map((i) => i.id);
    if (!e || e.units.length === 0) return s;
    const n = s.filter((i) => e.units.includes(i));
    return n.length ? n : s;
  }
  const ru = F({ stars: L().int().min(0).max(3), best: L().min(0).max(1), rounds: L().int().min(0).max(1e6) }), mS = F({ schema: se(nu), kind: se(su), courseId: E().min(1).max(120), assignmentId: E().min(1).max(60).optional(), student: F({ name: E().min(1).max($r), id: E().min(1).max(80) }), exportedAt: zr, units: Q(Zn, ru), boss: ru, answered: L().int().min(0).max(1e9), right: L().int().min(0).max(1e9), queue: N(Zn).max(2e3), missed: Q(Zn, L().int().min(1).max(1e5)), playSeconds: L().int().min(0).max(36e6) });
  function ts(t) {
    return typeof t != "string" ? "" : t.replace(/[\u0000-\u001f\u007f-\u009f]/g, " ").replace(/\s+/g, " ").trim().slice(0, $r).trim();
  }
  const Un = (t, e) => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    return { stars: Math.max((_a3 = t == null ? void 0 : t.stars) != null ? _a3 : 0, (_b3 = e == null ? void 0 : e.stars) != null ? _b3 : 0), best: Math.max((_c2 = t == null ? void 0 : t.best) != null ? _c2 : 0, (_d2 = e == null ? void 0 : e.best) != null ? _d2 : 0), rounds: ((_e2 = t == null ? void 0 : t.rounds) != null ? _e2 : 0) + ((_f2 = e == null ? void 0 : e.rounds) != null ? _f2 : 0) };
  };
  function gS(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = {};
    let i = Un(e.boss, void 0);
    for (const l of t.units) {
      let u = Un(e.units[l.id], void 0);
      for (const h of Object.values((_a3 = e.shells) != null ? _a3 : {})) u = Un(u, h.units[l.id]);
      (u.stars > 0 || u.rounds > 0) && (n[l.id] = u);
    }
    for (const l of Object.values((_b3 = e.shells) != null ? _b3 : {})) i = Un(i, l.boss);
    const r = new Set(t.items.map((l) => l.id)), o = e.queue.filter((l) => r.has(l)), a = {};
    for (const [l, u] of Object.entries(e.cards)) r.has(l) && u.lapses > 0 && (a[l] = u.lapses);
    for (const l of o) a[l] = Math.max(1, (_c2 = a[l]) != null ? _c2 : 0);
    const c = Math.max(0, Math.round(e.answered));
    return mS.parse({ schema: nu, kind: su, courseId: t.id, ...s.assignmentId ? { assignmentId: s.assignmentId } : {}, student: { name: ts(s.name) || "Student", id: s.id }, exportedAt: ((_d2 = s.now) != null ? _d2 : /* @__PURE__ */ new Date()).toISOString(), units: n, boss: i, answered: c, right: Math.min(c, Math.max(0, Math.round(e.right))), queue: o, missed: a, playSeconds: Math.max(0, Math.round((_e2 = e.playSeconds) != null ? _e2 : 0)) });
  }
  const _r = 1, ou = "edu-progress", kS = 2, au = 36e4, bS = 2e5, cu = () => ({ units: {}, boss: Bn(), finished: false }), Bn = () => ({ stars: 0, best: 0, rounds: 0 });
  function Ps(t) {
    return { version: _r, pack: t, units: {}, boss: Bn(), cards: {}, queue: [], score: 0, bestCombo: 0, answered: 0, right: 0, settings: { timer: false, sound: true, reduceAudio: false, speak: true, musicVolume: 100, sfxVolume: 100, voiceVolume: 100 }, updatedAt: 0, shells: {} };
  }
  function jr(t) {
    return t >= 0.9 ? 3 : t >= 0.7 ? 2 : t >= 0.5 ? 1 : 0;
  }
  const Fn = (t, e) => {
    var _a3, _b3;
    return ((_b3 = (_a3 = t.units[e]) == null ? void 0 : _a3.stars) != null ? _b3 : 0) >= kS;
  };
  function Kn(t, e, s) {
    const n = t.units.find((i) => i.id === s);
    return n ? n.requires.every((i) => Fn(e, i)) : false;
  }
  const xr = (t, e) => t.units.every((s) => Fn(e, s.id));
  function lu(t, e, s) {
    return t.units.filter((n) => !Kn(t, e, n.id) && Kn(t, s, n.id)).map((n) => n.id);
  }
  const uu = (t, e) => Object.fromEntries(t.units.map((s) => {
    var _a3, _b3;
    return [s.id, (_b3 = (_a3 = e.units[s.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0];
  })), du = (t, e) => t.units.reduce((s, n) => {
    var _a3, _b3;
    return s + ((_b3 = (_a3 = e.units[n.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0);
  }, 0);
  function hu(t, e, s) {
    const n = jr(s), i = (r) => {
      const o = r != null ? r : Bn();
      return { stars: Math.max(o.stars, n), best: Math.max(o.best, s), rounds: o.rounds + 1 };
    };
    return e.boss ? { ...t, boss: i(t.boss) } : e.unitId ? { ...t, units: { ...t.units, [e.unitId]: i(t.units[e.unitId]) } } : t;
  }
  const pu = (t, e) => t.includes(e) ? [...t] : [...t, e], fu = (t, e) => t.filter((s) => s !== e), mu = (t, e, s) => {
    var _a3;
    return (_a3 = t.cards[e]) != null ? _a3 : bc(e, s);
  };
  function gu(t) {
    var _a3;
    const e = (_a3 = t.shells.encyclopedia) == null ? void 0 : _a3.data, s = typeof e == "object" && e !== null && !Array.isArray(e) ? e.glossOff : void 0;
    return new Set(Array.isArray(s) ? s.filter((n) => typeof n == "string") : []);
  }
  const vS = (t) => JSON.stringify({ format: ou, version: _r, pack: t.pack, progress: t }, null, 2), Ye = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Er = (t) => typeof t == "number" && Number.isFinite(t) ? Math.min(100, Math.max(0, Math.round(t))) : 100, ss = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, t)) : n, ct = (t, e, s, n) => Math.round(ss(t, e, s, n));
  function qn(t) {
    return Ye(t) ? { stars: ct(t.stars, 0, 3, 0), best: ss(t.best, 0, 1, 0), rounds: ct(t.rounds, 0, 1e6, 0) } : Bn();
  }
  function wS(t, e) {
    if (!Ye(e)) return null;
    const s = bc(t, 0);
    return { id: t, ease: ss(e.ease, 1.3, 5, s.ease), interval: ss(e.interval, 0, 36500, 0), reps: ct(e.reps, 0, 1e4, 0), lapses: ct(e.lapses, 0, 1e4, 0), due: ss(e.due, 0, 864e13, 0), last: typeof e.last == "number" && Number.isFinite(e.last) ? e.last : null };
  }
  function ku(t, e) {
    let s;
    try {
      s = JSON.parse(t);
    } catch (e2) {
      return { ok: false, error: "not JSON" };
    }
    if (!Ye(s)) return { ok: false, error: "not an object" };
    if ("format" in s && s.format !== ou) return { ok: false, error: "wrong file format" };
    const n = Ye(s.progress) ? s.progress : s;
    if (n.version !== _r) return { ok: false, error: "unknown version ".concat(String(n.version)) };
    if (n.pack !== e.id) return { ok: false, error: 'it is for the course "'.concat(String(n.pack), '"') };
    const i = Ps(e.id), r = new Set(e.units.map((a) => a.id));
    if (Ye(n.units)) for (const [a, c] of Object.entries(n.units)) r.has(a) && (i.units[a] = qn(c));
    i.boss = qn(n.boss);
    const o = new Set(e.items.map((a) => a.id));
    if (Ye(n.cards)) for (const [a, c] of Object.entries(n.cards)) {
      if (!o.has(a)) continue;
      const l = wS(a, c);
      l && (i.cards[a] = l);
    }
    if (Array.isArray(n.queue) && (i.queue = [...new Set(n.queue.filter((a) => typeof a == "string" && o.has(a)))]), i.score = ct(n.score, 0, 1e9, 0), i.bestCombo = ct(n.bestCombo, 0, 1e5, 0), i.answered = ct(n.answered, 0, 1e9, 0), i.right = Math.min(i.answered, ct(n.right, 0, 1e9, 0)), Ye(n.settings) && (i.settings = { timer: n.settings.timer === true, sound: n.settings.sound !== false, reduceAudio: n.settings.reduceAudio === true, speak: n.settings.speak !== false, musicVolume: Er(n.settings.musicVolume), sfxVolume: Er(n.settings.sfxVolume), voiceVolume: Er(n.settings.voiceVolume), ...typeof n.settings.lang == "string" ? { lang: n.settings.lang } : {}, ...ts(n.settings.name) ? { name: ts(n.settings.name) } : {}, ...typeof n.settings.studentId == "string" && /^[A-Za-z0-9_-]{6,64}$/.test(n.settings.studentId) ? { studentId: n.settings.studentId } : {} }), n.playSeconds !== void 0 && (i.playSeconds = ct(n.playSeconds, 0, au, 0)), i.updatedAt = ss(n.updatedAt, 0, 864e13, 0), Ye(n.shells)) for (const [a, c] of Object.entries(n.shells)) {
      if (!/^[a-z0-9][a-z0-9-]{0,40}$/.test(a) || !Ye(c)) continue;
      const l = cu();
      if (Ye(c.units)) for (const [u, h] of Object.entries(c.units)) r.has(u) && (l.units[u] = qn(h));
      if (l.boss = qn(c.boss), l.finished = c.finished === true, c.data !== void 0) try {
        const u = JSON.stringify(c.data);
        u !== void 0 && u.length <= bS && (l.data = JSON.parse(u));
      } catch (e2) {
      }
      i.shells[a] = l;
    }
    return { ok: true, progress: i };
  }
  const bu = (t) => t.answered > 0 || Object.keys(t.units).length > 0 || t.boss.rounds > 0, yS = (t, e) => {
    const s = t.shells[e];
    return !!s && (Object.keys(s.units).length > 0 || s.boss.rounds > 0 || s.finished || s.data !== void 0);
  }, Ar = (t) => "edu-studio:progress:".concat(t);
  class vu {
    constructor(e, s) {
      __publicField(this, "pack");
      __publicField(this, "storage");
      __publicField(this, "persistent", true);
      __publicField(this, "memory", null);
      this.pack = e, this.storage = s, s || (this.persistent = false);
    }
    load() {
      let e = this.memory;
      if (this.storage) try {
        e = this.storage.getItem(Ar(this.pack.id));
      } catch (e2) {
        this.persistent = false;
      }
      if (!e) return Ps(this.pack.id);
      const s = ku(e, this.pack);
      return s.ok ? s.progress : Ps(this.pack.id);
    }
    save(e) {
      const s = JSON.stringify({ ...e, updatedAt: Date.now() });
      if (this.memory = s, !!this.storage) try {
        this.storage.setItem(Ar(this.pack.id), s);
      } catch (e2) {
        this.persistent = false;
      }
    }
    clear() {
      if (this.memory = null, !!this.storage) try {
        this.storage.removeItem(Ar(this.pack.id));
      } catch (e) {
        this.persistent = false;
      }
    }
  }
  function wu() {
    try {
      const t = window.localStorage, e = "__edu_probe__";
      return t.setItem(e, "1"), t.removeItem(e), t;
    } catch (e) {
      return null;
    }
  }
  const Tr = (t) => fS(t.extensions), yu = (t, e) => {
    const s = Tr(t);
    return !!s && iu(t, s).includes(e);
  };
  function SS() {
    const t = new Uint8Array(12);
    try {
      crypto.getRandomValues(t);
    } catch (e) {
      for (let e2 = 0; e2 < t.length; e2++) t[e2] = Math.floor(Math.random() * 256);
    }
    return Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
  }
  const $S = (t) => t.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "student";
  function zS(t) {
    const e = new Date(t);
    return Number.isFinite(e.getTime()) ? e.toLocaleDateString() : t.slice(0, 10);
  }
  function _S(t) {
    var _a3;
    const e = Tr(t.pack);
    let s = t.getProgress();
    const n = ts(s.settings.name);
    if (!n) return t.say(t.ui("class.needName"), "bad");
    const i = (_a3 = s.settings.studentId) != null ? _a3 : SS();
    i !== s.settings.studentId && (s = { ...s, settings: { ...s.settings, studentId: i } }, t.setProgress(s), t.save());
    try {
      const r = gS(t.pack, s, { name: n, id: i, ...e ? { assignmentId: e.id } : {} }), o = new Blob([JSON.stringify(r, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), c = d("a", { href: a, download: "".concat(t.pack.slug, "-").concat($S(n), "-result.json"), class: "sr-only" });
      document.body.appendChild(c), c.click(), c.remove(), window.setTimeout(() => URL.revokeObjectURL(a), 2e3), t.say(t.ui("class.sent"), "ok");
    } catch (r) {
      t.say(String(r instanceof Error ? r.message : r), "bad");
    }
  }
  function jS(t) {
    var _a3;
    const e = Tr(t.pack);
    if (!e) return null;
    const s = t.ui, n = iu(t.pack, e), i = n.length === t.pack.units.length, r = s("class.target", { n: e.targetStars, units: i ? s("class.allUnits") : n.map((l) => t.unitTitle(l)).join(", ") }), o = d("input", { type: "text", class: "student-name-input", testid: "student-name", maxlength: String($r), autocomplete: "off", value: (_a3 = t.getProgress().settings.name) != null ? _a3 : "", onchange: (l) => {
      const u = ts(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...u ? { name: u } : { name: void 0 } } }), t.save();
    }, oninput: (l) => {
      const u = ts(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...u ? { name: u } : { name: void 0 } } });
    } }), a = d("p", { class: "assignment-message", testid: "assignment-message" });
    e.message && (a.textContent = e.message);
    const c = d("h2", { class: "assignment-title" });
    return c.textContent = e.title, d("section", { class: "assignment-banner", testid: "assignment-banner", "aria-label": s("class.assignment") }, d("p", { class: "eyebrow" }, s("class.assignment")), c, d("p", { class: "assignment-target", testid: "assignment-target" }, r), e.due ? d("p", { class: "assignment-due", testid: "assignment-due" }, s("class.due", { date: zS(e.due) })) : null, e.message ? a : null, d("div", { class: "student-box" }, d("label", { class: "student-label" }, d("span", {}, s("class.yourName")), o), T("send-teacher", s("class.send"), () => _S(t), { class: "btn btn-small" })));
  }
  class Su {
    constructor(e, s, n) {
      __publicField(this, "get");
      __publicField(this, "set");
      __publicField(this, "save");
      __publicField(this, "last", 0);
      __publicField(this, "pending", 0);
      __publicField(this, "timer");
      __publicField(this, "touch", () => {
        this.last = Date.now();
      });
      this.get = e, this.set = s, this.save = n;
    }
    start() {
      if (this.timer === void 0) {
        for (const e of ["keydown", "pointerdown", "touchstart"]) document.addEventListener(e, this.touch, true);
        this.touch(), this.timer = window.setInterval(() => this.tick(), 1e3);
      }
    }
    tick() {
      document.visibilityState === "hidden" || Date.now() - this.last > 2e4 || (this.pending++, this.pending >= 5 && this.flush());
    }
    flush() {
      var _a3;
      if (this.pending <= 0) return;
      const e = this.get(), s = Math.min(au, ((_a3 = e.playSeconds) != null ? _a3 : 0) + this.pending);
      this.pending = 0, s !== e.playSeconds && (this.set({ ...e, playSeconds: s }), this.save());
    }
    dispose() {
      this.timer !== void 0 && window.clearInterval(this.timer), this.timer = void 0;
      for (const e of ["keydown", "pointerdown", "touchstart"]) document.removeEventListener(e, this.touch, true);
      this.flush();
    }
  }
  const xS = 0.4, ES = 0.3, $u = 400, zu = 40, _u = 180, AS = 60, TS = { "level-up": ["level-up", "unit-complete"], "unit-complete": ["unit-complete", "level-up"] }, ju = ["pointerdown", "keydown", "touchstart"], Rs = (t) => Math.min(1, Math.max(0, t));
  function Pt(t) {
    return ((typeof t == "number" && Number.isFinite(t) ? Math.min(100, Math.max(0, t)) : 100) / 100) ** 1.6;
  }
  function xu(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.audio) == null ? void 0 : _a3.loops, s = {};
    if (e && typeof e == "object") for (const [n, i] of Object.entries(e)) {
      const r = i;
      r && typeof r.startSec == "number" && typeof r.endSec == "number" && Number.isFinite(r.startSec) && Number.isFinite(r.endSec) && r.endSec > r.startSec && r.startSec >= 0 && (s[n] = { startSec: r.startSec, endSec: r.endSec });
    }
    return s;
  }
  class Eu {
    constructor(e) {
      __publicField(this, "o");
      __publicField(this, "wanted", null);
      __publicField(this, "track", null);
      __publicField(this, "ducked", false);
      __publicField(this, "clip", null);
      __publicField(this, "gesture");
      __publicField(this, "onGesture", () => this.resume());
      if (this.o = e, this.gesture = e.gestureTarget === void 0 ? typeof document < "u" ? document : null : e.gestureTarget, this.gesture) for (const s of ju) this.gesture.addEventListener(s, this.onGesture, { capture: true, passive: true });
    }
    musicCue(e) {
      var _a3;
      const s = (n) => this.o.cues.find((i) => i.on === "music:".concat(n) && this.o.assets[i.asset]);
      return (_a3 = s(e)) != null ? _a3 : e === "menu" ? void 0 : s("menu");
    }
    get playing() {
      var _a3, _b3;
      const e = this.track;
      return e ? { area: e.area, asset: (_b3 = (_a3 = this.o.cues.find((s) => this.o.assets[s.asset] === e.url)) == null ? void 0 : _a3.asset) != null ? _b3 : "", url: e.url } : null;
    }
    create(e) {
      return this.o.create ? this.o.create(e) : new Audio(e);
    }
    report(e) {
      const s = "[EduAudio] the sound could not be loaded: ".concat(e);
      this.o.onError ? this.o.onError(s) : console.error(s);
    }
    attempt(e) {
      try {
        const s = e.play();
        s && typeof s.catch == "function" && s.catch(() => {
        });
      } catch (e2) {
      }
    }
    volumeOf(e) {
      return Rs(e.cueVolume * Pt(this.o.settings().musicVolume) * (this.ducked ? ES : 1));
    }
    setArea(e) {
      this.wanted = e, this.apply();
    }
    refresh() {
      this.apply(), this.clip && (this.clip.volume = Rs(Pt(this.o.settings().voiceVolume)));
    }
    apply() {
      const e = this.o.settings(), s = this.wanted && e.sound && !e.reduceAudio && Pt(e.musicVolume) > 0 ? this.musicCue(this.wanted) : void 0, n = s ? this.o.assets[s.asset] : void 0;
      if (!s || !n) return this.stopTrack(!e.sound || !!e.reduceAudio || Pt(e.musicVolume) === 0);
      const i = this.wanted;
      if (this.track && this.track.url === n) {
        this.track.area = i, this.track.cueVolume = s.volume, this.track.el.paused && this.attempt(this.track.el), this.fadeTo(this.track, this.volumeOf(this.track), _u);
        return;
      }
      this.stopTrack(false), this.startTrack(n, i, s);
    }
    startTrack(e, s, n) {
      var _a3;
      let i;
      try {
        i = this.create(e);
      } catch (e2) {
        return this.report(e);
      }
      i.loop = true, i.volume = 0, i.addEventListener("error", () => this.report(e));
      const r = { url: e, area: s, cueVolume: n.volume, el: i, level: 0 };
      this.track = r;
      const o = (_a3 = this.o.loops) == null ? void 0 : _a3[n.asset];
      o && o.endSec > o.startSec && (r.loopTimer = setInterval(() => {
        i.currentTime >= o.endSec - 0.05 && (i.currentTime = o.startSec);
      }, AS)), this.attempt(i), this.fadeTo(r, this.volumeOf(r), $u);
    }
    stopTrack(e) {
      const s = this.track;
      if (s) {
        if (this.track = null, s.loopTimer && clearInterval(s.loopTimer), e) {
          s.fade && clearInterval(s.fade), s.el.pause();
          return;
        }
        this.fadeTo(s, 0, $u, () => s.el.pause());
      }
    }
    setLevel(e, s) {
      e.level = Rs(s), e.el.volume = e.level;
    }
    fadeTo(e, s, n, i) {
      e.fade && clearInterval(e.fade);
      const r = e.level, o = Math.max(1, Math.round(n / zu));
      let a = 0;
      e.fade = setInterval(() => {
        a++, this.setLevel(e, r + (s - r) * a / o), a >= o && (e.fade && clearInterval(e.fade), e.fade = void 0, i == null ? void 0 : i());
      }, zu);
    }
    resume() {
      const e = this.track;
      e && e.el.paused && this.o.settings().sound && !this.o.settings().reduceAudio ? this.attempt(e.el) : e || this.apply();
    }
    duck(e) {
      this.ducked = e;
      const s = this.track;
      s && (s.fade ? this.fadeTo(s, this.volumeOf(s), _u) : this.setLevel(s, this.volumeOf(s)));
    }
    voice(e) {
      this.clip = e, e.volume = Rs(Pt(this.o.settings().voiceVolume));
    }
    sfx(e) {
      var _a3;
      const s = this.o.settings();
      if (!s.sound || Pt(s.sfxVolume) === 0) return;
      const n = (_a3 = TS[e]) != null ? _a3 : [e];
      for (const i of this.o.cues.filter((r) => n.includes(r.on) && !r.loop)) {
        const r = this.o.assets[i.asset];
        if (r) try {
          const o = this.create(r);
          o.volume = Rs(i.volume * Pt(s.sfxVolume) * (s.reduceAudio ? xS : 1)), o.addEventListener("error", () => this.report(r)), this.attempt(o);
        } catch (e2) {
          this.report(r);
        }
      }
    }
    dispose() {
      if (this.wanted = null, this.clip = null, this.stopTrack(true), this.gesture) for (const e of ju) this.gesture.removeEventListener(e, this.onGesture, { capture: true });
    }
  }
  const IS = /\.(mp3|ogg|wav|m4a|opus)(\?.*)?$/i, Au = (t) => IS.test(t) || t.startsWith("data:audio/");
  function Tu(t, e) {
    const s = new Set(t.map((n) => n.asset));
    return { music: t.some((n) => n.on.startsWith("music:")), sfx: t.some((n) => !n.on.startsWith("music:") && !n.loop), voice: Object.entries(e).some(([n, i]) => Au(i) && !s.has(n)) };
  }
  const Iu = (t, e) => t.length > 0 || Object.values(e).some(Au), MS = [{ key: "musicVolume", id: "setting-music-volume", label: "audio.music", channel: "music" }, { key: "sfxVolume", id: "setting-sfx-volume", label: "audio.sfx", channel: "sfx" }, { key: "voiceVolume", id: "setting-voice-volume", label: "audio.voice", channel: "voice" }], OS = (t) => t instanceof HTMLInputElement && t.type === "range", NS = (t) => t.key === "Escape" || t.key === "BrowserBack" || t.key === "GoBack" || t.keyCode === 4 || t.keyCode === 461 || t.keyCode === 10009;
  class Mu {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "isOpen", false);
      __publicField(this, "app", null);
      __publicField(this, "panelEl", null);
      __publicField(this, "focusId", "");
      __publicField(this, "listening", false);
      __publicField(this, "onKey", (e) => {
        const s = this.panelEl;
        if (!this.isOpen || !(s == null ? void 0 : s.isConnected)) return this.unlisten();
        const n = e.target instanceof Node && s.contains(e.target);
        if (NS(e)) {
          e.stopPropagation(), e.preventDefault(), this.close();
          return;
        }
        if (n) {
          if (e.key === "Tab") {
            const i = [...s.querySelectorAll("input, button")].filter((a) => !a.disabled), r = i[0], o = i[i.length - 1];
            r && o && (e.shiftKey && document.activeElement === r ? (e.preventDefault(), o.focus()) : !e.shiftKey && document.activeElement === o && (e.preventDefault(), r.focus()));
          }
          this.remoteKey(e, s) || e.stopPropagation();
        }
      });
      this.host = e;
    }
    get open() {
      return this.isOpen;
    }
    mount(e) {
      this.app = e, this.panelEl = null, e.appendChild(this.speaker()), this.isOpen && (this.showPanel(), this.focusPanel());
    }
    close() {
      var _a3, _b3;
      if (!this.isOpen) return false;
      this.isOpen = false, this.unlisten(), (_b3 = (_a3 = this.panelEl) == null ? void 0 : _a3.parentElement) == null ? void 0 : _b3.remove(), this.panelEl = null;
      const e = this.speakerButton();
      return e == null ? void 0 : e.setAttribute("aria-expanded", "false"), e == null ? void 0 : e.focus(), true;
    }
    speakerButton() {
      var _a3, _b3;
      return (_b3 = (_a3 = this.app) == null ? void 0 : _a3.querySelector('[data-testid="audio-settings"]')) != null ? _b3 : null;
    }
    speaker() {
      return T("audio-settings", d("span", { class: "edu-audio-icon", "aria-hidden": "true" }, this.host.settings().sound ? "🔊" : "🔇"), () => {
        this.isOpen ? this.close() : this.openPanel();
      }, { class: "edu-audio-btn", "aria-label": this.host.ui("audio.settings"), "aria-haspopup": "dialog", "aria-expanded": String(this.isOpen) });
    }
    openPanel() {
      var _a3;
      this.app && (this.isOpen = true, this.focusId = "", (_a3 = this.speakerButton()) == null ? void 0 : _a3.setAttribute("aria-expanded", "true"), this.showPanel(), this.focusPanel());
    }
    focusPanel() {
      var _a3, _b3;
      const e = this.panelEl;
      if (!e) return;
      (_b3 = (_a3 = this.focusId ? e.querySelector('[data-testid="'.concat(this.focusId, '"]')) : null) != null ? _a3 : e.querySelector("input, button")) == null ? void 0 : _b3.focus({ preventScroll: true });
    }
    showPanel() {
      const e = this.app;
      if (!e) return;
      const s = this.host.ui, n = MS.filter((u) => this.host.channels[u.channel]).map((u) => this.sliderRow(u)), i = this.host.settings().sound, r = T("audio-mute", s("audio.mute"), () => {
        var _a3;
        const u = !this.host.settings().sound;
        this.host.update({ sound: u }), this.host.refresh(), r.setAttribute("aria-pressed", String(!u));
        const h = (_a3 = this.speakerButton()) == null ? void 0 : _a3.querySelector(".edu-audio-icon");
        h && (h.textContent = u ? "🔊" : "🔇");
      }, { class: "btn edu-audio-mute", "aria-pressed": String(!i) }), o = d("input", { type: "checkbox", testid: "audio-reduce", ...this.host.settings().reduceAudio ? { checked: true } : {}, onchange: (u) => {
        this.host.update({ reduceAudio: u.target.checked }), this.host.refresh();
      } }), a = T("audio-close", s("audio.close"), () => {
        this.close();
      }, { class: "btn btn-primary edu-audio-close" }), c = d("div", { class: "edu-audio-panel", testid: "audio-panel", role: "dialog", "aria-modal": "true", "aria-labelledby": "edu-audio-title" }, d("h2", { id: "edu-audio-title", class: "edu-audio-title" }, s("audio.title")), ...n, d("div", { class: "edu-audio-toggles" }, r, d("label", { class: "toggle edu-audio-reduce" }, o, d("span", { class: "toggle-text" }, d("b", {}, s("reduceAudio"))))), d("div", { class: "actions actions-center" }, a));
      c.addEventListener("focusin", (u) => {
        var _a3;
        this.focusId = (_a3 = u.target.getAttribute("data-testid")) != null ? _a3 : "";
      });
      const l = d("div", { class: "edu-audio-backdrop", testid: "audio-backdrop" }, c);
      l.addEventListener("click", (u) => {
        u.target === l && this.close();
      }), this.panelEl = c, e.appendChild(l), this.listen();
    }
    sliderRow(e) {
      const s = "edu-audio-".concat(e.id), n = this.host.settings()[e.key], i = typeof n == "number" ? n : 100, r = d("output", { class: "edu-audio-value", id: "".concat(s, "-value"), testid: "".concat(e.id, "-value"), for: s }, String(i)), o = d("input", { type: "range", id: s, testid: e.id, min: "0", max: "100", step: "5", value: String(i), "aria-describedby": "".concat(s, "-value"), oninput: (a) => {
        const c = Number(a.target.value);
        r.textContent = String(c), this.host.update({ [e.key]: c }), this.host.refresh();
      } });
      return r.textContent = String(o.valueAsNumber), d("div", { class: "edu-audio-row" }, d("label", { for: s }, this.host.ui(e.label)), d("div", { class: "edu-audio-ctl" }, o, r));
    }
    remoteKey(e, s) {
      var _a3;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return false;
      const n = e.target;
      if (e.key === "Enter" && n instanceof HTMLInputElement && n.type === "checkbox") return e.stopPropagation(), e.preventDefault(), n.click(), true;
      const i = !OS(n), r = e.key === "ArrowDown" || e.key === "ArrowRight" && i ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" && i ? -1 : 0;
      if (!r) return false;
      const o = [...s.querySelectorAll("input, button")].filter((a) => !a.disabled);
      return e.stopPropagation(), e.preventDefault(), (_a3 = o[o.indexOf(n) + r]) == null ? void 0 : _a3.focus({ preventScroll: true }), true;
    }
    listen() {
      this.listening || (this.listening = true, window.addEventListener("keydown", this.onKey, true));
    }
    unlisten() {
      this.listening && (this.listening = false, window.removeEventListener("keydown", this.onKey, true));
    }
  }
  const Ou = (t) => typeof t == "object" && t !== null && !Array.isArray(t) ? t : {}, PS = (t, e) => t.replace(/\{\{([^}]+)\}\}/g, (s, n) => e(n));
  function Ds(t, e) {
    var _a3;
    const { text: s, ui: n } = e, i = (r) => s.t(r);
    switch (t.kind) {
      case "mcq": {
        const r = t, o = r.options.find((a) => a.id === r.answer);
        return o ? [i(o.text)] : [];
      }
      case "true-false":
        return [n(t.answer ? "fb.true" : "fb.false")];
      case "multi-select": {
        const r = t;
        return r.options.filter((o) => r.answers.includes(o.id)).map((o) => i(o.text));
      }
      case "cloze": {
        const r = t, o = new Map(r.gaps.map((a) => {
          var _a4;
          return [a.id, (_a4 = s.canonical(a.answer)) != null ? _a4 : "?"];
        }));
        return [PS(i(r.text), (a) => {
          var _a4;
          return (_a4 = o.get(a)) != null ? _a4 : "?";
        })];
      }
      case "conjugation":
        return t.forms.map((o) => {
          var _a4;
          return "".concat(i(o.label), " ").concat((_a4 = s.canonical(o.answer)) != null ? _a4 : "?");
        });
      case "typed": {
        const r = s.canonical(t.answer);
        return r ? [r] : [];
      }
      case "match-pairs":
        return t.pairs.map((r) => "".concat(i(r.left), " = ").concat(i(r.right)));
      case "order":
        return t.items.map((o, a) => "".concat(a + 1, ". ").concat(i(o.text)).concat(o.when ? " (".concat(i(o.when), ")") : ""));
      case "sort-groups": {
        const r = t;
        return r.groups.map((o) => "".concat(i(o.title), ": ").concat(r.items.filter((a) => a.group === o.id).map((a) => i(a.text)).join(", ")));
      }
      case "hotspot": {
        const r = t, o = r.regions.find((a) => a.id === r.answer);
        return o ? [i(o.label)] : [];
      }
      case "listening": {
        const r = t;
        if (r.mode === "choose") {
          const a = ((_a3 = r.options) != null ? _a3 : []).find((c) => c.id === r.answer);
          return a ? [i(a.text)] : [];
        }
        const o = s.canonical(r.answer);
        return o ? [o] : [];
      }
      case "flashcard":
        return [i(t.back)];
      case "crossword":
        return t.words.map((r) => {
          var _a4;
          return "".concat(i(r.clue), " = ").concat((_a4 = s.canonical(r.answer)) != null ? _a4 : "?");
        });
      case "word-search":
        return [t.words.map((r) => {
          var _a4;
          return (_a4 = s.canonical(r.answer)) != null ? _a4 : "?";
        }).join(", ")];
      default:
        return [];
    }
  }
  function RS(t, e, s) {
    var _a3, _b3, _c2, _d2;
    const n = (i) => i && s.hasText(i) ? [s.t(i)] : [];
    switch (t.kind) {
      case "mcq": {
        const i = t;
        return typeof e == "string" && e !== i.answer ? n((_a3 = i.options.find((r) => r.id === e)) == null ? void 0 : _a3.why) : [];
      }
      case "listening": {
        const i = t;
        return i.mode === "choose" && typeof e == "string" && e !== i.answer ? n((_c2 = ((_b3 = i.options) != null ? _b3 : []).find((r) => r.id === e)) == null ? void 0 : _c2.why) : [];
      }
      case "multi-select": {
        const i = t;
        return (Array.isArray(e) ? e.filter((o) => typeof o == "string") : []).filter((o) => !i.answers.includes(o)).flatMap((o) => {
          var _a4;
          return n((_a4 = i.options.find((a) => a.id === o)) == null ? void 0 : _a4.why);
        });
      }
      case "true-false": {
        const i = t;
        return typeof e == "boolean" && e !== i.answer ? n(i.why) : [];
      }
      case "hotspot": {
        const i = t, r = Ou(e), o = typeof e == "string" ? e : typeof r.x == "number" && typeof r.y == "number" ? zc(i, r.x, r.y) : void 0;
        return o && o !== i.answer ? n((_d2 = i.regions.find((a) => a.id === o)) == null ? void 0 : _d2.why) : [];
      }
      case "sort-groups": {
        const i = t, r = Ou(e);
        return i.items.filter((o) => r[o.id] !== o.group).flatMap((o) => n(o.why));
      }
      default:
        return [];
    }
  }
  const DS = (t) => t === "order" ? "fb.detail.order" : t === "sort-groups" ? "fb.detail.sort" : t === "cloze" ? "fb.detail.gaps" : t === "conjugation" ? "fb.detail.forms" : t === "crossword" || t === "word-search" ? "fb.detail.words" : "fb.matched";
  function Nu(t, e, s, n, i = false) {
    var _a3;
    const { text: r, ui: o } = n, a = i ? "timeout" : s.correct ? "correct" : s.partial ? "partial" : "wrong", c = o("praise.".concat(n.rng.randint(1, 5))), l = a === "correct" ? s.typo || s.diacritics || s.translit || s.caps ? o("verdict.correct") : c : o(a === "timeout" ? "verdict.timeout" : a === "partial" ? "verdict.partial" : "verdict.wrong"), u = Ds(t, n), h = [], p = typeof s.expected == "string" ? s.expected : u.join(" ");
    s.typo && h.push(o("fb.typo", { a: p })), s.diacritics && h.push(o(s.correct ? "fb.accents" : "fb.accents.strict", { a: p })), s.translit && h.push(o("fb.note.translit", { a: p })), s.caps && h.push(o("fb.note.caps", { a: p }));
    const f = s.detail && !s.correct && !i ? Object.values(s.detail) : void 0;
    return { verdict: a, title: l, whys: s.correct || i ? [] : RS(t, e, r), explanation: (_a3 = r.text(t.explanation)) != null ? _a3 : "", answer: s.correct && t.kind !== "flashcard" && !(t.kind === "order" && t.timeline) ? [] : u, ...s.correct && t.didYouKnow && r.hasText(t.didYouKnow) ? { dyk: r.t(t.didYouKnow) } : {}, notes: h, ...f && f.length > 1 ? { detail: o(DS(t.kind), { n: f.filter(Boolean).length, total: f.length }) } : {} };
  }
  const LS = /^https?:\/\/(127\.0\.0\.1|localhost|\[::1\])(:\d{1,5})?(\/.*)?$/i, CS = F({ enabled: J().optional(), whisperUrl: E().regex(LS).optional() });
  function ZS(t, e) {
    const s = t == null ? void 0 : t.speaking, n = CS.safeParse(s && typeof s == "object" ? s : {}), i = n.success ? n.data : {}, r = e ? i.enabled !== false : false;
    return { enabled: r, ...r && i.whisperUrl ? { whisperUrl: i.whisperUrl } : {} };
  }
  function US(t) {
    var _a3;
    const e = t;
    return (_a3 = e.SpeechRecognition) != null ? _a3 : e.webkitSpeechRecognition;
  }
  function BS(t, e) {
    return { kind: "web", lang: e, start(s) {
      let n, i = "", r = false;
      try {
        n = new t(), n.lang = e, n.interimResults = false, n.continuous = false, n.maxAlternatives = 1, n.onresult = (o) => {
          i = Array.from(o.results).map((a) => {
            var _a3, _b3;
            return (_b3 = (_a3 = a[0]) == null ? void 0 : _a3.transcript) != null ? _b3 : "";
          }).join(" ").trim();
        }, n.onerror = (o) => {
          r = true;
          const a = o.error;
          s.onState("error", a === "not-allowed" || a === "service-not-allowed" ? "denied" : a === "no-speech" ? "no-speech" : a === "network" || a === "audio-capture" ? "unavailable" : "failed");
        }, n.onend = () => {
          r || (i && s.onText(i), i ? s.onState("idle") : s.onState("error", "no-speech"));
        }, n.start(), s.onState("listening");
      } catch (e2) {
        return s.onState("error", "unavailable"), { stop: () => {
        } };
      }
      return { stop: () => n.stop() };
    } };
  }
  const Ir = 16e3;
  function FS(t) {
    var _a3;
    const e = t[0];
    if (!e) return new Float32Array(0);
    if (t.length === 1) return e;
    const s = new Float32Array(e.length);
    for (const n of t) for (let i = 0; i < s.length; i++) s[i] = s[i] + ((_a3 = n[i]) != null ? _a3 : 0);
    for (let n = 0; n < s.length; n++) s[n] = s[n] / t.length;
    return s;
  }
  function KS(t, e, s) {
    if (e === s || t.length === 0) return t;
    const n = Math.max(1, Math.round(t.length * s / e)), i = new Float32Array(n), r = e / s;
    for (let o = 0; o < n; o++) {
      const a = o * r, c = Math.min(Math.floor(a), t.length - 1), l = Math.min(c + 1, t.length - 1), u = a - c;
      i[o] = t[c] * (1 - u) + t[l] * u;
    }
    return i;
  }
  function qS(t, e) {
    const s = KS(FS(t), e, Ir), n = s.length * 2, i = new ArrayBuffer(44 + n), r = new DataView(i), o = (a, c) => {
      for (let l = 0; l < c.length; l++) r.setUint8(a + l, c.charCodeAt(l));
    };
    o(0, "RIFF"), r.setUint32(4, 36 + n, true), o(8, "WAVE"), o(12, "fmt "), r.setUint32(16, 16, true), r.setUint16(20, 1, true), r.setUint16(22, 1, true), r.setUint32(24, Ir, true), r.setUint32(28, Ir * 2, true), r.setUint16(32, 2, true), r.setUint16(34, 16, true), o(36, "data"), r.setUint32(40, n, true);
    for (let a = 0; a < s.length; a++) {
      const c = Math.max(-1, Math.min(1, s[a]));
      r.setInt16(44 + a * 2, c < 0 ? c * 32768 : c * 32767, true);
    }
    return new Uint8Array(i);
  }
  class Ls extends Error {
    constructor(e, s) {
      super(s);
      __publicField(this, "code");
      this.code = e;
    }
  }
  async function GS(t, e, s, n = {}) {
    var _a3, _b3;
    const i = (_a3 = n.fetchImpl) != null ? _a3 : fetch, r = new AbortController(), o = setTimeout(() => r.abort(), (_b3 = n.timeoutMs) != null ? _b3 : 3e4);
    try {
      const a = t.replace(/\/+$/, ""), c = "".concat(/\/stt$/.test(a) ? a : "".concat(a, "/stt"), "?lang=").concat(encodeURIComponent(s)), l = await i(c, { method: "POST", headers: { "content-type": "audio/wav" }, body: e, signal: r.signal });
      if (!l.ok) throw new Ls("failed", "the speech endpoint answered ".concat(l.status));
      const u = await l.json();
      if (typeof u.text != "string") throw new Ls("failed", "the speech endpoint sent no text");
      return u.text.trim();
    } catch (a) {
      throw a instanceof Ls ? a : new Ls("unavailable", a instanceof Error ? a.message : String(a));
    } finally {
      clearTimeout(o);
    }
  }
  const WS = 3e4;
  function HS(t) {
    var _a3, _b3, _c2;
    const e = t;
    return !!((_a3 = e.AudioContext) != null ? _a3 : e.webkitAudioContext) && !!((_c2 = (_b3 = t.navigator) == null ? void 0 : _b3.mediaDevices) == null ? void 0 : _c2.getUserMedia);
  }
  function VS(t) {
    const e = new Float32Array(t.reduce((n, i) => n + i.length, 0));
    let s = 0;
    for (const n of t) e.set(n, s), s += n.length;
    return e;
  }
  function YS(t, e, s) {
    return { kind: "whisper", lang: s, start(n) {
      var _a3;
      const i = t, r = (_a3 = i.AudioContext) != null ? _a3 : i.webkitAudioContext, o = [];
      let a, c, l, u, h = false;
      const p = () => {
        u && clearTimeout(u), l == null ? void 0 : l.disconnect(), a == null ? void 0 : a.getTracks().forEach((m) => m.stop()), c == null ? void 0 : c.close().catch(() => {
        });
      }, f = async () => {
        var _a4;
        if (h) return;
        h = true;
        const m = (_a4 = c == null ? void 0 : c.sampleRate) != null ? _a4 : 48e3;
        if (p(), o.length === 0) return n.onState("error", "no-speech");
        n.onState("thinking");
        try {
          const g = await GS(e, qS([VS(o)], m), s);
          g && n.onText(g), g ? n.onState("idle") : n.onState("error", "no-speech");
        } catch (g) {
          n.onState("error", g instanceof Ls ? g.code : "failed");
        }
      };
      return (async () => {
        try {
          if (a = await t.navigator.mediaDevices.getUserMedia({ audio: true }), h) return p();
          c = new r();
          const m = c.createMediaStreamSource(a);
          l = c.createScriptProcessor(4096, 1, 1), l.onaudioprocess = (g) => {
            h || o.push(new Float32Array(g.inputBuffer.getChannelData(0)));
          }, m.connect(l), l.connect(c.destination), u = setTimeout(() => {
            f();
          }, WS);
        } catch (m) {
          h = true, p(), n.onState("error", m.name === "NotAllowedError" ? "denied" : "unavailable");
        }
      })(), n.onState("listening"), { stop: () => {
        f();
      } };
    } };
  }
  function Pu(t, e, s) {
    const n = ZS(e, s);
    if (!n.enabled || !s) return;
    if (n.whisperUrl && HS(t)) return YS(t, n.whisperUrl, s);
    const i = US(t);
    return i ? BS(i, s) : void 0;
  }
  const JS = 2, QS = 7, XS = 10, e1 = 30, Mr = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, Math.round(t))) : n;
  function Or(t) {
    var _a3;
    const e = (_a3 = t.shells.config["quiz-arena"]) != null ? _a3 : {};
    return { roundLength: Mr(e.roundLength, 3, 12, QS), bossLength: Mr(e.bossLength, 4, 20, XS), timerSeconds: Mr(e.timerSeconds, 5, 120, e1) };
  }
  function Nr(t, e) {
    const s = new Set(hn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective));
  }
  const Ru = (t, e) => {
    var _a3;
    const s = t.items.find((n) => n.id === e);
    return (_a3 = t.objectives.find((n) => n.id === (s == null ? void 0 : s.objective))) == null ? void 0 : _a3.unit;
  };
  function t1(t) {
    var _a3, _b3;
    const e = (_b3 = (_a3 = t.extensions) == null ? void 0 : _a3.language) == null ? void 0 : _b3.verbUnits;
    return Array.isArray(e) ? e.filter((s) => typeof s == "string") : [];
  }
  function Pr(t) {
    const e = new Set(t1(t));
    if (e.size === 0) return [];
    const s = new Set(t.objectives.filter((n) => e.has(n.unit)).map((n) => n.id));
    return t.items.filter((n) => n.kind === "conjugation" && s.has(n.objective));
  }
  function Du(t, e, s) {
    return Pr(t).filter((n) => Gn(e[n.id], s)).length;
  }
  function s1(t, e, s, n) {
    const i = Pr(t), r = i.filter((l) => Gn(e[l.id], s)).sort((l, u) => e[l.id].due - e[u.id].due), o = i.filter((l) => e[l.id] === void 0 || e[l.id].last === null), a = new Set([...r, ...o].map((l) => l.id)), c = i.filter((l) => !a.has(l.id)).sort((l, u) => e[l.id].ease - e[u.id].ease);
    return [...r, ...o, ...c].slice(0, Math.max(0, n)).map((l) => l.id);
  }
  function n1(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    const n = Or(t), i = (_a3 = s.exclude) != null ? _a3 : /* @__PURE__ */ new Set();
    let r, o;
    if (e === "unit") r = Nr(t, (_b3 = s.unitId) != null ? _b3 : "").map((a) => a.id).filter((a) => !i.has(a)), o = Math.min(n.roundLength, r.length);
    else if (e === "verbs") r = s1(t, (_c2 = s.cards) != null ? _c2 : {}, (_d2 = s.now) != null ? _d2 : 0, n.roundLength), o = r.length;
    else if (e === "boss") r = t.items.map((a) => a.id).filter((a) => !i.has(a)), o = Math.min(n.bossLength, r.length);
    else {
      const a = new Set(t.items.map((c) => c.id));
      r = ((_e2 = s.queue) != null ? _e2 : []).filter((c) => a.has(c) && !i.has(c)), o = Math.min(n.roundLength, r.length);
    }
    return { kind: e, ...s.unitId ? { unitId: s.unitId } : {}, size: o, pool: r, asked: [], session: wc(), adaptive: Tc((_f2 = s.difficulty) != null ? _f2 : e === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  function i1(t, e = {}) {
    var _a3, _b3, _c2;
    const s = [...new Set(t)], n = (_a3 = e.kind) != null ? _a3 : "unit";
    return { kind: n, ...e.unitId ? { unitId: e.unitId } : {}, size: Math.max(0, Math.min((_b3 = e.size) != null ? _b3 : s.length, s.length)), pool: s, asked: [], session: wc(), adaptive: Tc((_c2 = e.difficulty) != null ? _c2 : n === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  const Gn = (t, e) => t !== void 0 && t.last !== null && t.due <= e;
  function Lu(t, e, s, n, i) {
    const r = new Map(e.items.map((l) => [l.id, l])), o = t.results.at(-1), a = t.session.pending.filter((l) => l.dueAt <= t.session.answered && l.id !== (o == null ? void 0 : o.id)).sort((l, u) => l.dueAt - u.dueAt)[0];
    if (a) return { id: a.id, retry: true };
    if (t.asked.length < t.size && t.pool.length > 0) {
      let l = t.pool.map((m) => r.get(m)).filter((m) => m !== void 0);
      const u = l.filter((m) => Gn(n[m.id], i));
      u.length > 0 && t.dueTaken < Math.ceil(t.size / 2) && (l = u);
      const h = o ? r.get(o.id) : void 0, p = h ? l.filter((m) => m.id === h.id || m.kind === h.kind || t.kind === "boss" && Ru(e, m.id) === Ru(e, h.id)).map((m) => m.id) : [], f = t.kind === "verbs" ? l[0] : Gb(l.map((m) => ({ id: m.id, difficulty: m.difficulty })), t.adaptive, s, p);
      if (f) return { id: f.id, retry: false };
    }
    const c = [...t.session.pending].sort((l, u) => l.dueAt - u.dueAt)[0];
    return c ? { id: c.id, retry: true } : null;
  }
  function Rr(t, e, s, n, i, r = {}, o = 0) {
    var _a3;
    let a = mb(t.session, e.id, i);
    ((_a3 = a.misses[e.id]) != null ? _a3 : 0) > JS && (a = { ...a, pending: a.pending.filter((l) => l.id !== e.id) });
    const c = !e.retry;
    return { ...t, session: a, adaptive: qb(t.adaptive, n.correct), pool: c ? t.pool.filter((l) => l !== e.id) : t.pool, asked: c ? [...t.asked, e.id] : t.asked, dueTaken: c && Gn(r[e.id], o) ? t.dueTaken + 1 : t.dueTaken, results: [...t.results, { id: e.id, kind: s.kind, retry: e.retry, correct: n.correct, score: n.score, grade: i }] };
  }
  function Dr(t) {
    const e = t.results.filter((s) => !s.retry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n.score, 0) / e.length;
  }
  const Lr = (t) => [...new Set(t.results.filter((e) => !e.retry && !e.correct).map((e) => e.id))];
  function Cu(t, e, s) {
    return t.kind === "flashcard" && gc(e) ? e : s.correct ? s.partial || s.typo || s.diacritics ? "hard" : "good" : t.kind === "conjugation" && s.partial && s.score >= 0.5 ? "hard" : "again";
  }
  function r1(t) {
    var _a3;
    return t.kind === "flashcard" || t.kind === "crossword" || t.kind === "word-search" || t.kind === "typed" || t.kind === "conjugation" ? false : t.kind === "listening" ? t.mode !== "type" : t.kind === "cloze" ? ((_a3 = t.gaps) != null ? _a3 : []).every((e) => e.bank !== void 0) : true;
  }
  function Zu(t) {
    const e = t.screen === "item" || t.screen === "feedback";
    return { screen: t.screen, shell: t.shell, lang: t.lang, seed: t.seed, ...t.unitId ? { unitId: t.unitId } : {}, ...t.roundNumber !== void 0 && t.roundNumber > 0 ? { round: t.roundNumber } : {}, ...t.roundKind ? { roundKind: t.roundKind } : {}, ...e && t.itemId ? { itemId: t.itemId } : {}, ...e && t.itemKind ? { itemKind: t.itemKind } : {}, ...e && t.itemIndex !== void 0 ? { itemIndex: t.itemIndex } : {}, ...t.roundSize !== void 0 && t.roundKind ? { roundSize: t.roundSize } : {}, combo: t.combo, score: t.score, ...t.lastResult && t.screen === "feedback" ? { lastResult: { correct: t.lastResult.correct, ...t.lastResult.typo ? { typo: true } : {}, ...t.lastResult.diacritics ? { diacritics: true } : {} } } : {}, reviewQueue: [...t.reviewQueue], mastery: { ...t.mastery }, finished: t.finished, steps: t.steps, ...e && t.context ? { context: t.context } : {}, ...t.view ? { view: JSON.parse(JSON.stringify(t.view)) } : {} };
  }
  function Uu(t, e, s) {
    var _a3, _b3, _c2;
    const n = (_c2 = (_b3 = t[e]) != null ? _b3 : t[(_a3 = e.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (i, r) => {
      var _a4, _b4, _c3;
      let o = (_c3 = (_b4 = (_a4 = s == null ? void 0 : s.strings["ui.".concat(i)]) != null ? _a4 : n[i]) != null ? _b4 : t.en[i]) != null ? _c3 : i;
      if (r) for (const [a, c] of Object.entries(r)) o = o.split("{".concat(a, "}")).join(String(c));
      return o;
    };
  }
  function o1(t, e, s, n) {
    return e ? d("label", { class: "toggle" }, d("input", { type: "checkbox", testid: "setting-speak", ...s ? { checked: true } : {}, onchange: (i) => n(i.target.checked) }), d("span", { class: "toggle-text" }, d("b", {}, t("speak.setting")), d("small", { testid: "speak-privacy" }, t(e.kind === "whisper" ? "speak.privacy.local" : "speak.privacy.web")))) : null;
  }
  const Ze = (t, e = {}) => de("path", { d: t, ...e }), Bu = (t, e, s, n = {}) => de("circle", { cx: t, cy: e, r: s, ...n }), a1 = { "quiz-arena": () => [Bu(16, 17, 11), Ze("M16 10v7l4 3"), Ze("M13 3h6")], encyclopedia: () => [Ze("M16 8c-3-2-7-2.5-11-2v18c4-.5 8 0 11 2 3-2 7-2.5 11-2V6c-4-.5-8 0-11 2z"), Ze("M16 8v18")], mindmaze: () => [Ze("M5 27V9h4v3h4V9h6v3h4V9h4v18z"), Ze("M13 27v-7a3 3 0 0 1 6 0v7")], rpg: () => [Ze("M7 25 22 10l3-6 3 3-6 3L7 25"), Ze("M5 27l3-3M9 21l3 3")], roleplay: () => [Ze("M4 6h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H11l-4 4v-4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"), Ze("M24 12h2a2 2 0 0 1 2 2v7a1 1 0 0 1-1 1h-3v3l-4-3h-5")], detective: () => [Bu(13, 13, 8), Ze("M19 19l9 9")] };
  function c1(t) {
    var _a3, _b3;
    const e = de("svg", { viewBox: "0 0 32 32", width: 32, height: 32, fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", focusable: "false", class: "mode-icon" }), s = (_b3 = (_a3 = a1[t]) == null ? void 0 : _a3.call(a1)) != null ? _b3 : [Ze("M16 4l3.7 7.8 8.3 1-6.1 5.8 1.6 8.4L16 22.8 8.5 27l1.6-8.4L4 12.8l8.3-1z")];
    for (const n of s) e.appendChild(n);
    return e;
  }
  const l1 = "menu";
  function Wn(t, e, s) {
    const n = e === "title" ? l1 : s;
    t.getAttribute("data-edu-theme") !== n && t.setAttribute("data-edu-theme", n);
  }
  const u1 = (t) => {
    try {
      const e = new Intl.DisplayNames([t], { type: "language" }).of(t);
      return e ? e.charAt(0).toLocaleUpperCase(t) + e.slice(1) : t.toUpperCase();
    } catch (e) {
      return t.toUpperCase();
    }
  }, Cr = (t, e) => {
    const s = t(e);
    return s && s !== e ? s : void 0;
  }, d1 = (t, e) => {
    var _a3;
    return (_a3 = Cr(t, "mode.".concat(e, ".name"))) != null ? _a3 : e;
  }, ns = () => ({ confirmReset: false, message: null });
  function h1(t) {
    if (t.shells.length < 2) return null;
    const e = t.ui;
    return d("div", { class: "mode-picker", role: "group", "aria-label": e("start.choose"), testid: "shell-picker" }, d("p", { class: "mode-picker-label", "aria-hidden": "true" }, e("start.choose")), d("div", { class: "mode-grid" }, t.shells.map((s) => {
      var _a3;
      return T("shell-".concat(s), [d("span", { class: "mode-pictogram" }, c1(s)), d("span", { class: "mode-text" }, d("b", { class: "mode-name" }, d1(e, s)), d("small", { class: "mode-blurb" }, (_a3 = Cr(e, "mode.".concat(s, ".blurb"))) != null ? _a3 : "")), d("span", { class: "mode-dot", "aria-hidden": "true" })], () => {
        s !== t.shellId && t.switchShell(s);
      }, { class: "mode-card", "data-mode": s, "aria-pressed": String(s === t.shellId) });
    })));
  }
  function Fu(t, e, s, n, i) {
    return d("label", { class: "toggle" }, d("input", { type: "checkbox", testid: t, ...n ? { checked: true } : {}, onchange: (r) => i(r.target.checked) }), d("span", { class: "toggle-text" }, d("b", {}, e), s ? d("small", {}, s) : null));
  }
  function Ku(t, e, s, n) {
    var _a3, _b3;
    const i = t.ui, r = t.pack, o = t.courseTitle(), a = (y, $) => {
      n.message = { text: y, kind: $ }, s();
    }, c = (y) => {
      t.progress = { ...t.progress, settings: { ...t.progress.settings, ...y } }, t.save();
    }, l = r.languages.length > 1 ? d("div", { class: "lang-picker", role: "group", "aria-label": i("language"), testid: "lang-picker" }, r.languages.map((y) => T("lang-".concat(y), u1(y), () => {
      t.setLang(y), s();
    }, { class: "chip", "aria-pressed": String(y === t.lang), lang: y }))) : null, u = r.cues.length ? Fu("setting-sound", i("sound"), null, !!t.progress.settings.sound, (y) => {
      c({ sound: y }), t.refreshAudio();
    }) : null, h = r.cues.length ? Fu("setting-reduce-audio", i("reduceAudio"), i("reduceAudio.hint"), !!t.progress.settings.reduceAudio, (y) => {
      c({ reduceAudio: y }), t.refreshAudio();
    }) : null, p = o1(i, t.speechService, t.progress.settings.speak !== false, (y) => c({ speak: y })), f = d("input", { type: "file", accept: "application/json,.json", class: "sr-only", testid: "import-file", tabindex: "-1", "aria-label": i("import"), onchange: (y) => {
      var _a4;
      const $ = (_a4 = y.target.files) == null ? void 0 : _a4[0];
      $ && $.text().then((x) => {
        const _ = ku(x, r);
        if (!_.ok) return a(i("import.bad", { why: _.error }), "bad");
        t.progress = _.progress, t.save();
        const z = _.progress.settings.lang;
        z && r.languages.includes(z) && z !== t.lang && t.setLang(z), a(i("import.ok"), "ok");
      }, () => a(i("import.bad", { why: "unreadable" }), "bad"));
    } }), m = () => {
      try {
        const y = new Blob([vS(t.progress)], { type: "application/json" }), $ = URL.createObjectURL(y), x = d("a", { href: $, download: "".concat(r.slug, "-progress.json"), class: "sr-only" });
        document.body.appendChild(x), x.click(), x.remove(), window.setTimeout(() => URL.revokeObjectURL($), 2e3), a(i("export.done"), "ok");
      } catch (y) {
        a(String(y instanceof Error ? y.message : y), "bad");
      }
    }, g = n.confirmReset ? d("span", { class: "confirm", role: "group", "aria-label": i("reset.confirm") }, d("span", {}, i("reset.confirm")), T("reset-confirm", i("reset.yes"), () => {
      t.reset(), n.confirmReset = false, a(i("reset.done"), "ok");
    }, { class: "btn btn-danger btn-small" }), T("reset-cancel", i("reset.no"), () => {
      n.confirmReset = false, s();
    }, { class: "btn btn-small", "data-autofocus": "" })) : T("reset", i("reset"), () => {
      n.confirmReset = true, s();
    }, { class: "btn btn-small btn-ghost" }), k = r.subject.charAt(0).toLocaleUpperCase() + r.subject.slice(1), b = n.message;
    n.message = null;
    const v = e.settings || u || h || p ? d("div", { class: "settings" }, (_a3 = e.settings) != null ? _a3 : null, u, h, p) : null, w = Cr(i, "mode.".concat(t.shellId, ".blurb"));
    return d("section", { class: "title-screen start-screen shell-title shell-title-".concat(t.shellId) }, d("header", { class: "start-head" }, w ? d("p", { class: "eyebrow", testid: "mode-blurb" }, w) : null, d("h1", { class: "screen-title", tabindex: "-1", testid: "course-title" }, o), o.toLocaleLowerCase() === r.subject.toLocaleLowerCase() ? null : d("p", { class: "subject", testid: "course-subject" }, k), d("p", { class: "audience" }, r.audience)), jS({ pack: r, ui: i, unitTitle: (y) => t.unitTitle(y), getProgress: () => t.progress, setProgress: (y) => {
      t.progress = y;
    }, save: () => t.save(), say: a }), l, h1(t), v, d("div", { class: "actions actions-center" }, T("start", (_b3 = e.startLabel) != null ? _b3 : t.started ? i("continue") : i("start"), () => e.onStart(), { class: "btn btn-primary btn-big", ...n.confirmReset ? {} : { "data-autofocus": "" } })), d("div", { class: "progress-tools", role: "group", "aria-label": i("export") + " / " + i("import") }, T("export", i("export"), m, { class: "btn btn-small btn-ghost" }), T("import", i("import"), () => f.click(), { class: "btn btn-small btn-ghost" }), f, g), b ? d("p", { class: "message message-".concat(b.kind), role: "status", testid: "title-message" }, b.text) : null, t.persistent ? null : d("p", { class: "message message-bad", testid: "storage-warning" }, i("storage.off")));
  }
  const p1 = (t, e) => {
    var _a3;
    const s = t.pack.languages;
    if (e && s.includes(e)) return e;
    const n = (typeof navigator < "u" ? (_a3 = navigator.languages) != null ? _a3 : [navigator.language] : []).map((i) => i.toLowerCase());
    for (const i of n) {
      const r = s.find((o) => o === i || o === i.split("-")[0]);
      if (r) return r;
    }
    return s.includes(t.defaultLang) ? t.defaultLang : s[0];
  }, f1 = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]);
  function m1(t, e) {
    return t === "end" ? "end" : e.roundKind === "boss" ? "boss" : t !== "title" && e.roundKind !== "review" && e.unitId ? "unit-".concat(e.unitId) : "menu";
  }
  class Cs {
    constructor(e, s) {
      __publicField(this, "host");
      __publicField(this, "data");
      __publicField(this, "pack");
      __publicField(this, "shellId");
      __publicField(this, "theme");
      __publicField(this, "store");
      __publicField(this, "rng");
      __publicField(this, "progress");
      __publicField(this, "lang");
      __publicField(this, "ui");
      __publicField(this, "s");
      __publicField(this, "text");
      __publicField(this, "check");
      __publicField(this, "combo", 0);
      __publicField(this, "steps", 0);
      __publicField(this, "turn", 0);
      __publicField(this, "passageOpen", false);
      __publicField(this, "finished", false);
      __publicField(this, "screen", "loading");
      __publicField(this, "questionKeys", null);
      __publicField(this, "keyHandler", null);
      __publicField(this, "playTimer", new Su(() => this.progress, (e) => {
        this.progress = e;
      }, () => this.save()));
      __publicField(this, "gameAudio", null);
      __publicField(this, "audioMenu");
      __publicField(this, "extra", {});
      __publicField(this, "strings");
      __publicField(this, "onKey", (e) => {
        var _a3;
        e.defaultPrevented || this.questionKeys && this.questionKeys(e) || this.questionKeys || ((_a3 = this.keyHandler) == null ? void 0 : _a3.call(this, e));
      });
      __publicField(this, "speechMade", null);
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.shellId = s.shellId, this.theme = s.theme, this.strings = s.strings, this.store = new vu(this.pack, wu()), this.progress = this.store.load(), this.rng = Gt(e.seed, s.shellId), this.lang = p1(this.data, this.progress.settings.lang), this.text = Ht(this.data.catalogs, this.lang, this.pack.targetLang), this.ui = Os(this.lang, this.data.catalogs[this.lang]), this.s = Uu(this.strings, this.lang, this.data.catalogs[this.lang]), this.check = Wt({ pack: this.pack, text: this.text }), this.audioMenu = new Mu({ ui: (n, i) => this.ui(n, i), channels: Tu(this.pack.cues, this.data.assets), settings: () => this.progress.settings, update: (n) => {
        this.progress = { ...this.progress, settings: { ...this.progress.settings, ...n } }, this.save();
      }, refresh: () => this.audio.refresh() }), this.applyLang();
    }
    mount() {
      const e = this.host.root;
      e.classList.add("edu-stage"), Wn(e, "title", this.theme), e.setAttribute("data-shell", this.shellId), document.addEventListener("keydown", this.onKey), this.playTimer.start();
    }
    get audio() {
      return this.gameAudio || (this.gameAudio = new Eu({ cues: this.pack.cues, assets: this.data.assets, loops: xu(this.pack.extensions), settings: () => this.progress.settings })), this.gameAudio;
    }
    unmount() {
      var _a3;
      this.playTimer.dispose(), this.audioMenu.close(), (_a3 = this.gameAudio) == null ? void 0 : _a3.dispose(), this.gameAudio = null, document.removeEventListener("keydown", this.onKey), this.questionKeys = null, this.host.setDebug(null), this.host.root.removeAttribute("data-shell");
    }
    setKeyHandler(e) {
      this.keyHandler = e;
    }
    setDebug(e) {
      this.host.setDebug(e);
    }
    applyLang() {
      document.documentElement.lang = this.lang, document.title = this.courseTitle();
    }
    setLang(e) {
      this.pack.languages.includes(e) && (this.lang = e, this.text = Ht(this.data.catalogs, e, this.pack.targetLang), this.ui = Os(e, this.data.catalogs[e]), this.s = Uu(this.strings, e, this.data.catalogs[e]), this.check = Wt({ pack: this.pack, text: this.text }), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.applyLang());
    }
    t(e) {
      return e ? this.text.t(e) : "";
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    section() {
      return T0(this.pack, this.shellId);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Pu(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    get specialLetters() {
      var _a3, _b3;
      return (_b3 = Gl[(_a3 = this.pack.targetLang) != null ? _a3 : this.lang]) != null ? _b3 : [];
    }
    save() {
      this.store.save(this.progress);
    }
    get sp() {
      var _a3;
      return (_a3 = this.progress.shells[this.shellId]) != null ? _a3 : cu();
    }
    setSp(e) {
      this.progress = { ...this.progress, shells: { ...this.progress.shells, [this.shellId]: e } }, this.save();
    }
    shellData() {
      return this.sp.data;
    }
    setShellData(e) {
      this.setSp({ ...this.sp, data: JSON.parse(JSON.stringify(e != null ? e : null)) });
    }
    get started() {
      return yS(this.progress, this.shellId) || bu(this.progress);
    }
    view() {
      const e = this.sp;
      return { ...this.progress, units: e.units, boss: e.boss };
    }
    unitStars(e) {
      var _a3, _b3;
      return (_b3 = (_a3 = this.sp.units[e]) == null ? void 0 : _a3.stars) != null ? _b3 : 0;
    }
    bossStars() {
      return this.sp.boss.stars;
    }
    isMastered(e) {
      return Fn(this.view(), e);
    }
    isUnlocked(e) {
      return Kn(this.pack, this.view(), e);
    }
    allMastered() {
      return xr(this.pack, this.view());
    }
    totalStars() {
      return du(this.pack, this.view());
    }
    mastery() {
      return uu(this.pack, this.view());
    }
    recordUnit(e, s) {
      const n = this.view(), i = hu(n, "boss" in e ? { boss: true } : { unitId: e.unitId }, s);
      return this.setSp({ ...this.sp, units: i.units, boss: i.boss }), { stars: jr(s), unlocked: lu(this.pack, n, i) };
    }
    finish() {
      this.finished = true, this.setSp({ ...this.sp, finished: true });
    }
    units() {
      return Tt(this.pack.units).map((e) => this.pack.units.find((s) => s.id === e));
    }
    unitTitle(e) {
      var _a3;
      return this.t((_a3 = this.pack.units.find((s) => s.id === e)) == null ? void 0 : _a3.title);
    }
    item(e) {
      return this.pack.items.find((s) => s.id === e);
    }
    itemsOfUnit(e) {
      return Nr(this.pack, e);
    }
    canAsk(e) {
      return !!e && !!this.host.getItemRenderer(e.kind) && !tu(e, gu(this.progress));
    }
    queueItems() {
      return this.progress.queue.map((e) => this.item(e)).filter((e) => !!e);
    }
    itemContext(e, s) {
      const n = "".concat(this.host.seed, ":").concat(this.shellId, ":").concat(e.id, ":").concat(this.turn), i = new Map(this.pack.assets.map((r) => [r.id, r]));
      return { item: e, data: this.data, lang: this.lang, text: this.text, check: this.check, rng: new st(n), seed: n, assetUrl: (r) => r ? this.data.assets[r] : void 0, assetAlt: (r) => {
        const o = r ? i.get(r) : void 0;
        return o ? this.text.t(o.alt) : "";
      }, ui: (r, o) => this.ui(r, o), specialLetters: this.specialLetters, ...this.passageOpen ? { passageOpen: true } : {}, submit: s, duck: (r) => this.audio.duck(r), voice: (r) => this.audio.voice(r), ...this.progress.settings.speak !== false && this.speechService ? { speech: this.speechService } : {} };
    }
    answer(e, s, n = {}) {
      const i = n.retry === true, r = n.timedOut === true, o = r ? gn(e, void 0, this.check) : gn(e, s, this.check), a = Cu(e, s, o), c = Date.now(), l = this.progress;
      let u = l.queue;
      o.correct ? i || (u = fu(u, e.id)) : u = pu(u, e.id);
      let h = Math.round(100 * o.score);
      o.correct ? (h += Math.min(this.combo, 10) * 10, i && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.steps += 1, this.progress = { ...l, cards: { ...l.cards, [e.id]: vc(mu(l, e.id, c), a, c) }, queue: u, score: l.score + h, bestCombo: Math.max(l.bestCombo, this.combo), answered: l.answered + (i ? 0 : 1), right: l.right + (!i && o.correct ? 1 : 0) }, this.save();
      const p = Nu(e, s, o, { text: this.text, ui: this.ui, rng: this.rng }, r);
      return { item: e, answer: s, result: o, grade: a, points: h, feedback: p, retry: i, timedOut: r };
    }
    startRun(e, s = {}) {
      const n = e.filter((i) => this.canAsk(this.item(i)));
      return i1(n, s);
    }
    next(e) {
      return Lu(e, this.pack, this.rng, this.progress.cards, Date.now());
    }
    record(e, s, n) {
      return Rr(e, s, n.item, n.result, n.grade, this.progress.cards, Date.now());
    }
    accuracy(e) {
      return Dr(e);
    }
    publish(e = this.screen, s = this.extra) {
      var _a3, _b3;
      this.screen = e, this.extra = s, this.pack.cues.length && this.audio.setArea(m1(e, s)), this.host.publish(Zu({ screen: e, shell: this.shellId, lang: this.lang, seed: this.host.seed, ...s.roundKind ? { roundKind: s.roundKind, roundSize: (_a3 = s.roundSize) != null ? _a3 : 0, ...s.roundNumber ? { roundNumber: s.roundNumber } : {} } : {}, ...s.unitId ? { unitId: s.unitId } : {}, ...s.item ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: (_b3 = s.item.index) != null ? _b3 : 0 } : {}, ...s.lastResult ? { lastResult: s.lastResult } : {}, ...s.context ? { context: s.context } : {}, ...s.view ? { view: s.view } : {}, combo: this.combo, score: this.progress.score, reviewQueue: this.progress.queue, mastery: this.mastery(), finished: this.finished, steps: this.steps }));
    }
    render(e, s, n = {}, i = {}) {
      var _a3, _b3;
      const r = this.host.root;
      Wn(r, e, this.theme), Ts(r);
      const o = d("main", { class: "board board-".concat(e), id: "edu-main" }, s), a = d("div", { class: "edu-app shell-".concat(this.shellId), testid: "app", "data-screen": e, "data-shell": this.shellId }, d("div", { class: "frame" }, o), d("div", { class: "burst-layer", "aria-hidden": "true" }), d("div", { class: "sr-only", role: "status", "aria-live": "polite", testid: "live" }));
      return r.appendChild(a), Iu(this.pack.cues, this.data.assets) && this.audioMenu.mount(a), this.publish(e, n), i.focus !== false && !this.audioMenu.open && ((_b3 = (_a3 = o.querySelector("[data-autofocus]")) != null ? _a3 : o.querySelector("h1, h2")) == null ? void 0 : _b3.focus({ preventScroll: false }), typeof window.scrollTo == "function" && window.scrollTo(0, 0)), o;
    }
    markScreen(e) {
      var _a3;
      (_a3 = this.host.root.querySelector(".edu-app")) == null ? void 0 : _a3.setAttribute("data-screen", e);
    }
    live(e) {
      const s = this.host.root.querySelector('[data-testid="live"]');
      s && (s.textContent = e);
    }
    stars(e, s) {
      return d("span", { class: "stars", role: "img", "aria-label": this.ui("stars", { n: e }), "data-stars": String(e), ...s ? { testid: s } : {} }, [1, 2, 3].map((n) => d("span", { class: "star ".concat(n <= e ? "on" : "off"), "aria-hidden": "true" }, n <= e ? "★" : "☆")));
    }
    playCue(e) {
      this.pack.cues.length && this.audio.sfx(e);
    }
  }
  function lt(t, e) {
    var _a3, _b3, _c2, _d2;
    const { item: s } = e, n = t.host.getItemRenderer(s.kind);
    if (!n) return console.warn('[EduEngine] no renderer for the item kind "'.concat(s.kind, '"; ').concat(t.shellId, " skips ").concat(s.id)), null;
    const i = t.ui;
    t.turn += 1;
    let r = null;
    const o = (A) => r ? r.outcome ? r.outcome.result : x(A) : { correct: false, score: 0, expected: null, invalid: true }, a = n.render(t.itemContext(s, o)), c = (A) => {
      var _a4, _b4;
      return { context: e.context, item: { id: s.id, kind: s.kind, index: (_a4 = e.index) != null ? _a4 : 0 }, ...e.unitId ? { unitId: e.unitId } : {}, ...e.roundKind ? { roundKind: e.roundKind, roundSize: (_b4 = e.roundSize) != null ? _b4 : 0 } : {}, ...e.view ? { view: e.view() } : {}, ...A ? { lastResult: A.result } : {} };
    }, l = s.hint && t.text.hasText(s.hint) ? t.text.t(s.hint) : null;
    let u = false;
    const h = d("p", { class: "hint-text", testid: "hint-text", hidden: true }, l != null ? l : ""), p = l ? T("hint", "💡 ".concat(i("hint")), () => {
      u = !u, h.hidden = !u, p == null ? void 0 : p.setAttribute("aria-expanded", String(u));
    }, { class: "btn btn-small btn-ghost", "aria-expanded": "false" }) : null, f = e.onLeave ? T("leave", "‹ ".concat((_a3 = e.leaveLabel) != null ? _a3 : i("leave")), () => {
      var _a4;
      r == null ? void 0 : r.close(), (_a4 = e.onLeave) == null ? void 0 : _a4.call(e);
    }, { class: "btn btn-small btn-ghost" }) : null, m = d("p", { class: "q-meta", testid: "question-number" }, e.retry ? d("span", { class: "tag tag-retry", testid: "retry-tag" }, i("retry")) : null, (_b3 = e.lead) != null ? _b3 : null), g = n.ownsPrompt ? d("h1", { class: "sr-only" }, typeof e.lead == "string" ? e.lead : i("question.lead")) : d("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, t.text.t(s.prompt)), k = t.itemContext(s, o), b = f1.has(s.kind) ? null : Vl(k), v = d("div", { class: "item-body kind-".concat(s.kind), testid: "item-body", "data-kind": s.kind }, a.el), w = d("div", { class: "feedback-slot", "aria-live": "polite" }), y = d("section", { class: "question shell-question context-".concat(e.context), "aria-label": t.text.t(s.prompt) }, f || e.hud ? d("header", { class: "shell-hud" }, f, (_c2 = e.hud) != null ? _c2 : null) : null, m, g, b, p, h, v, w), $ = () => {
      var _a4;
      t.questionKeys === R && (t.questionKeys = null), (_a4 = a.destroy) == null ? void 0 : _a4.call(a);
    };
    function x(A) {
      var _a4;
      const j = r, I = t.answer(s, A, { retry: e.retry === true });
      return j.outcome = I, a.reveal(I.result, A), (_a4 = e.onAnswered) == null ? void 0 : _a4.call(e, I), _(I), t.playCue(I.result.correct ? "correct" : "wrong"), I.result;
    }
    function _(A) {
      var _a4, _b4, _c3, _d3;
      const j = A.feedback, I = (_b4 = (_a4 = e.effect) == null ? void 0 : _a4.call(e, A)) != null ? _b4 : null, D = (H, ke, he, ...Ie) => d("div", { class: "fb-part ".concat(H), testid: ke }, d("h3", {}, he), Ie), G = typeof e.nextLabel == "function" ? e.nextLabel(A) : (_c3 = e.nextLabel) != null ? _c3 : i("next"), B = d("div", { class: "feedback is-".concat(j.verdict), testid: "feedback", "data-result": j.verdict, tabindex: "-1" }, d("h2", { class: "fb-title", testid: "feedback-title" }, d("span", { class: "fb-icon", "aria-hidden": "true" }, j.verdict === "correct" ? "✓" : j.verdict === "partial" ? "≈" : j.verdict === "timeout" ? "⏱" : "✗"), j.title), I ? d("p", { class: "fb-effect is-".concat(I.tone), testid: "feedback-effect" }, I.text) : null, j.notes.length ? d("ul", { class: "fb-notes", testid: "feedback-notes" }, j.notes.map((H) => d("li", {}, H))) : null, j.detail ? d("p", { class: "fb-detail", testid: "feedback-detail" }, j.detail) : null, j.whys.length ? D("fb-why", "feedback-why", i("fb.why"), j.whys.map((H) => d("p", {}, H))) : null, j.answer.length ? D("fb-answer", "feedback-answer", i("fb.answer"), j.answer.length === 1 ? d("p", { class: "fb-answer-text" }, j.answer[0]) : d("ul", {}, j.answer.map((H) => d("li", {}, H)))) : null, j.explanation ? D("fb-explain", "feedback-explanation", i("fb.explain"), d("p", {}, j.explanation)) : null, j.dyk ? D("fb-dyk", "feedback-dyk", "💡 ".concat(i("fb.dyk")), d("p", {}, j.dyk)) : null, d("div", { class: "actions" }, T("next", G, () => O(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      w.appendChild(B), v.classList.add("is-answered"), t.markScreen("feedback"), t.publish("feedback", c(A)), t.live("".concat(j.title, ". ").concat(I ? "".concat(I.text, " ") : "").concat(j.whys.join(" "), " ").concat(j.answer.join(". "))), Ms(v, A.result.correct ? "fx-glow" : "fx-shake"), typeof B.scrollIntoView == "function" && B.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_d3 = t.host.root.querySelector('[data-testid="next"]')) == null ? void 0 : _d3.focus({ preventScroll: true });
    }
    let z = false;
    function O() {
      const A = r == null ? void 0 : r.outcome;
      !A || z || (z = true, $(), e.onNext(A));
    }
    const R = (A) => {
      var _a4, _b4;
      const j = r;
      if (!j) return false;
      if (!j.outcome) return Is(A.target) && /^[0-9]$/.test(A.key) ? true : (_b4 = (_a4 = a.key) == null ? void 0 : _a4.call(a, A)) != null ? _b4 : false;
      if (A.key === "Enter" || A.key === " ") {
        const I = A.target;
        return I && (I.tagName === "BUTTON" || I.tagName === "A" || I.tagName === "INPUT" || I.tagName === "SELECT" || I.getAttribute("role") === "button") || (A.preventDefault(), O()), true;
      }
      return false;
    };
    r = { item: s, view: a, close: $ }, t.render("item", y, c(), { focus: false }), t.questionKeys = R, a.focus();
    const S = t.host.root.querySelector("#edu-main");
    return (S == null ? void 0 : S.contains(document.activeElement)) || ((_d2 = S == null ? void 0 : S.querySelector("[data-autofocus], .prompt")) == null ? void 0 : _d2.focus()), r;
  }
  function g1(t) {
    return { pack: t.pack, get ui() {
      return t.ui;
    }, shellId: t.shellId, shells: t.host.shells, switchShell: (e) => t.host.switchShell(e), courseTitle: () => t.courseTitle(), unitTitle: (e) => t.unitTitle(e), get lang() {
      return t.lang;
    }, setLang: (e) => t.setLang(e), get progress() {
      return t.progress;
    }, set progress(e) {
      t.progress = e;
    }, save: () => t.save(), persistent: t.store.persistent, get started() {
      return t.started;
    }, refreshAudio: () => t.audio.refresh(), get speechService() {
      return t.speechService;
    }, reset: () => {
      t.store.clear(), t.progress = Ps(t.pack.id), t.combo = 0, t.finished = false;
    } };
  }
  function Zs(t, e, s, n) {
    return Ku(g1(t), e, s, n);
  }
  function Us(t, e) {
    var _a3, _b3;
    const s = t.ui, n = t.progress, i = n.answered > 0 ? Math.round(n.right / n.answered * 100) : 0;
    return d("section", { class: "end-screen shell-end shell-end-".concat(t.shellId) }, d("p", { class: "eyebrow" }, t.courseTitle()), d("h1", { class: "screen-title", tabindex: "-1", testid: "end-title" }, (_a3 = e.title) != null ? _a3 : s("end.title")), e.sub ? d("p", { class: "subject" }, e.sub) : null, d("ul", { class: "end-stars", testid: "end-units" }, t.units().map((r) => d("li", {}, d("span", {}, t.t(r.title)), t.stars(t.unitStars(r.id))))), (_b3 = e.stats) != null ? _b3 : null, d("p", { class: "big-number", testid: "end-score" }, "".concat(s("end.score"), ": ").concat(n.score)), d("p", { testid: "end-accuracy" }, s("end.accuracy", { n: i })), d("div", { class: "actions actions-center" }, T("play-again", s("end.again"), () => e.onAgain(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), T("to-title", s("end.title.screen"), () => e.onTitle(), { class: "btn btn-big" })));
  }
  const be = (t, e = {}, ...s) => de(t, e, ...s);
  function qu(t) {
    const e = t === "locked" ? [be("path", { class: "dr-shackle", d: "M24 38 v-7 a8 8 0 0 1 16 0 v7" }), be("rect", { class: "dr-lock", x: 20, y: 38, width: 24, height: 18, rx: 3 }), be("circle", { class: "dr-keyhole", cx: 32, cy: 46, r: 2.5 })] : [];
    return be("svg", { class: "det-door-svg is-".concat(t), viewBox: "0 0 64 80", "aria-hidden": "true", focusable: "false" }, be("rect", { class: "dr-frame", x: 6, y: 4, width: 52, height: 72, rx: 2 }), be("rect", { class: "dr-opening", x: 11, y: 9, width: 42, height: 67 }), t === "locked" ? be("rect", { class: "dr-panel", x: 11, y: 9, width: 42, height: 67 }) : be("path", { class: "dr-panel dr-ajar", d: "M11 9 L30 14 V76 H11 Z" }), t === "locked" ? be("path", { class: "dr-plank", d: "M11 30 H53 M11 52 H53" }) : be("path", { class: "dr-plank", d: "M11 30 L30 32 M11 52 L30 52" }), t === "locked" ? be("circle", { class: "dr-knob", cx: 47, cy: 44, r: 2.6 }) : be("circle", { class: "dr-knob", cx: 26, cy: 44, r: 2.4 }), t === "solved" ? be("path", { class: "dr-tick", d: "M34 36 l6 7 l12 -14" }) : be("g", {}), ...e);
  }
  function Zr() {
    return be("svg", { class: "det-mag-svg", viewBox: "0 0 40 40", "aria-hidden": "true", focusable: "false" }, be("circle", { class: "mg-ring", cx: 17, cy: 17, r: 10 }), be("path", { class: "mg-handle", d: "M25 25 L35 35" }));
  }
  function k1(t, e, s, n) {
    const i = de("svg", { class: "det-strings", "aria-hidden": "true", focusable: "false" }), r = /* @__PURE__ */ new Map(), o = t.categories.map((f) => d("div", { class: "det-cork-col", "data-category": f.key }, d("h3", { class: "det-cork-label" }, s(f.key)), d("ul", { class: "det-cork-list" }, f.items.map((m) => {
      const g = d("li", { class: "det-pinned", "data-entity": m, testid: "board-entity-".concat(m) }, d("span", { class: "det-pin", "aria-hidden": "true" }), e(m));
      return r.set(m, g), g;
    })))), a = d("div", { class: "det-cork", testid: "board" }, i, d("div", { class: "det-cork-cols" }, o));
    let c = n;
    const l = () => {
      for (; i.firstChild; ) i.removeChild(i.firstChild);
      const f = a.getBoundingClientRect();
      if (f.width !== 0) {
        i.setAttribute("viewBox", "0 0 ".concat(Math.round(f.width), " ").concat(Math.round(f.height)));
        for (const m of it(t)) {
          if (vt(c, m) !== "yes") continue;
          const [g, k] = Re(m), b = r.get(g), v = r.get(k);
          if (!b || !v) continue;
          const w = b.getBoundingClientRect(), y = v.getBoundingClientRect(), $ = w.left <= y.left ? w : y, x = $ === w ? y : w, _ = $.right - f.left, z = $.top + $.height / 2 - f.top, O = x.left - f.left, R = x.top + x.height / 2 - f.top, S = Math.min(26, Math.abs(O - _) * 0.12 + 6), A = "M ".concat(_.toFixed(1), " ").concat(z.toFixed(1), " Q ").concat(((_ + O) / 2).toFixed(1), " ").concat(((z + R) / 2 + S).toFixed(1), " ").concat(O.toFixed(1), " ").concat(R.toFixed(1));
          i.appendChild(de("path", { class: "det-string", d: A, testid: "string-".concat(g, "-").concat(k) }));
        }
        for (const [m, g] of r) g.toggleAttribute("data-linked", it(t).some((k) => vt(c, k) === "yes" && Re(k).includes(m)));
      }
    };
    let u = 0;
    const h = () => {
      u && cancelAnimationFrame(u), u = requestAnimationFrame(() => {
        u = 0, l();
      });
    }, p = typeof ResizeObserver == "function" ? new ResizeObserver(h) : null;
    return p == null ? void 0 : p.observe(a), h(), { el: a, update(f) {
      c = f, h();
    }, dispose() {
      p == null ? void 0 : p.disconnect(), u && cancelAnimationFrame(u);
    } };
  }
  const b1 = { "": "", no: "✕", yes: "✓" };
  function v1(t, e, s, n, i, r) {
    const o = /* @__PURE__ */ new Map(), a = (h, p, f) => {
      const m = o.get(h);
      if (!m) return;
      const [g, k] = Re(h), b = vt(p, h);
      m.setAttribute("data-mark", b === "" ? "blank" : b), m.setAttribute("aria-label", i.cell(s(g), s(k), i.mark(b))), m.toggleAttribute("data-hinted", h === f);
      const v = m.querySelector(".det-glyph");
      v && (v.textContent = b1[b]);
    }, c = Iw(t).map((h) => d("figure", { class: "det-table-wrap" }, d("figcaption", { class: "det-table-cap" }, i.caption(n(h.rows.key), n(h.cols.key))), d("table", { class: "det-table", testid: "grid-".concat(h.key) }, d("thead", {}, d("tr", {}, d("td", { class: "det-corner" }), h.cols.items.map((p) => d("th", { scope: "col", class: "det-col" }, s(p))))), d("tbody", {}, h.rows.items.map((p) => d("tr", {}, d("th", { scope: "row", class: "det-row" }, s(p)), h.cols.items.map((f) => {
      const m = "".concat(p, "|").concat(f), g = d("button", { type: "button", class: "det-cell", testid: "cell-".concat(p, "-").concat(f), "data-cell": m, onclick: () => r(m) }, d("span", { class: "det-glyph", "aria-hidden": "true" }));
      return o.set(m, g), d("td", { class: "det-td" }, g);
    }))))))), l = d("div", { class: "det-grid", testid: "grid" }, c), u = (h, p = "") => {
      for (const f of it(t)) a(f, h, p);
    };
    return u(e), { el: l, update: u };
  }
  function w1(t) {
    const e = new Map(t.places.map((a) => [a.id, a])), s = (a, c) => "".concat((a / c * 100).toFixed(2), "%"), n = (a) => a === t.here ? "here" : t.trail.includes(a) ? "visited" : t.options.includes(a) ? "option" : "other", i = t.trail.flatMap((a) => {
      const c = e.get(a);
      return c ? ["".concat(c.x, ",").concat(c.y)] : [];
    }), r = de("svg", { class: "det-map-line", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), preserveAspectRatio: "none", "aria-hidden": "true", focusable: "false" }, ...i.length > 1 ? [de("polyline", { class: "det-map-route", points: i.join(" "), fill: "none", testid: "route-line" })] : []), o = t.places.map((a) => {
      const c = n(a.id);
      return d("div", { class: "det-map-pin is-".concat(c), style: "left:".concat(s(a.x, t.width), ";top:").concat(s(a.y, t.height)), "data-state": c, testid: "pin-".concat(a.id) }, d("span", { class: "det-map-dot", "aria-hidden": "true" }), c === "other" ? null : d("span", { class: "det-map-name" }, a.name));
    });
    return d("div", { class: "det-map", testid: "map", style: "aspect-ratio:".concat(t.width, " / ").concat(t.height) }, t.src ? d("img", { class: "det-map-img", src: t.src, alt: t.alt, draggable: "false" }) : d("div", { class: "det-map-img", role: "img", "aria-label": t.alt }), r, o);
  }
  function y1(t, e) {
    return { roomId: e, cards: Array.from({ length: t }, () => null), run: null, seen: [], firstTry: {}, marks: {}, hints: 0, accusation: {}, wrongAccusations: 0, solved: false };
  }
  const Gu = (t) => t.cards.flatMap((e, s) => e === null ? [s + 1] : []), Bs = (t) => t.cards.filter((e) => e !== null).length, S1 = (t) => t.cards.flatMap((e, s) => e === null ? [] : ["c".concat(s + 1)]), $1 = (t) => t.cards.filter((e) => e !== null), z1 = (t, e) => {
    const s = new Set($1(e));
    return t.filter((n) => !s.has(n));
  };
  function _1(t) {
    const e = Object.values(t.firstTry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n, 0) / e.length;
  }
  function j1(t, e, s, n, i) {
    const r = !t.seen.includes(s);
    return { ...t, seen: r ? [...t.seen, s] : t.seen, firstTry: r ? { ...t.firstTry, [s]: i } : t.firstTry, cards: n ? t.cards.map((o, a) => a === e - 1 ? s : o) : t.cards };
  }
  function x1(t, e, s) {
    if (Gu(e).length > 0) return { kind: "cards" };
    if (t.kind === "murdle" && or(t).some((i) => !e.accusation[i])) return { kind: "pick" };
    const n = s(e.accusation, e.marks);
    return n.correct ? { kind: "right" } : { kind: "wrong", wrong: n.wrong };
  }
  const E1 = 8, A1 = 2, Wu = 1;
  function Hu(t, e) {
    const s = [...new Set(t.decoys.filter((n) => n !== t.to))].slice(0, 3);
    return e.shuffle([t.to, ...s]);
  }
  function T1(t, e) {
    return { at: t.start, leg: 0, hours: 0, heard: false, options: Hu(t.route[0], e), cold: 0, coldHere: false, trail: [t.start], caught: false, scores: [], firstChoice: true };
  }
  function Vu(t, e, s) {
    return { ...t, heard: true, hours: t.hours + (e ? 0 : Wu), scores: [...t.scores, s] };
  }
  function I1(t, e, s, n) {
    const i = e.route[t.leg];
    if (s !== i.to) return { right: false, state: { ...t, hours: t.hours + Wu, cold: t.cold + 1, coldHere: true, scores: t.firstChoice ? [...t.scores, 0] : t.scores, firstChoice: false } };
    const r = t.leg + 1, o = r >= e.route.length;
    return { right: true, state: { ...t, at: i.to, leg: r, hours: t.hours + A1, heard: false, coldHere: false, trail: [...t.trail, i.to], caught: o, scores: t.firstChoice ? [...t.scores, 1] : t.scores, firstChoice: true, options: o ? [] : Hu(e.route[r], n) } };
  }
  const M1 = (t) => t.scores.length === 0 ? 0 : t.scores.reduce((e, s) => e + s, 0) / t.scores.length;
  function is(t) {
    const e = E1 + t, s = e % 24, n = Math.floor(e / 24) + 1, i = "".concat(String(s).padStart(2, "0"), ":00");
    return n > 1 ? "".concat(i, " (+").concat(n - 1, ")") : i;
  }
  const O1 = { en: { "det.tagline": "A case file to crack", "det.intro": "Every locked door has a case on it. Turn the clue cards by answering questions, work out who did it, and the door opens.", "det.office.title": "The case board", "det.office.lead": "Pick a case. A solved case opens the next door.", "det.office.rooms": "Escape rooms", "det.room.open": "Open the file", "det.room.again": "Reopen the case", "det.room.solved": "Solved", "det.room.locked": "Locked: solve {unit} with 2 stars first.", "det.room.final": "The final room", "det.room.final.locked": "Locked: master every room first.", "det.room.stars": "{n} of 3 stars", "det.finish": "Close the file", "det.finish.hint": "Solve the final challenge to close the file.", "det.finish.ready": "The final challenge is done. The file can be closed.", "det.office.progress": "{n} of {total} rooms solved", "det.room.resume": "Resume the case", "det.case.broken": "This case could not be made. Pick another one.", "det.grid.caption": "{rows} and {cols}", "det.chase.resume": "Continue the chase", "det.back": "Back to the case board", "det.title.screen": "Title screen", "det.case.crime": "The crime happened in {place}.", "det.case.clues": "Clue cards", "det.case.turned": "{n} of {total} clues turned", "det.case.no.cards": "Every card is face-up. Mark the grid, then accuse.", "det.clue.n": "Clue {n}", "det.clue.turn": "Turn over", "det.clue.down": "Clue {n}, face down. Answer a question to turn it over.", "det.clue.up": "Clue {n}, face up.", "det.clue.fact": "The fact from your answer", "det.case.grid": "The grid", "det.case.grid.help": "Press a cell: one press crosses it out, two mean yes, three clear it.", "det.mark.blank": "unknown", "det.mark.no": "no", "det.mark.yes": "yes", "det.cell.label": "{a} and {b}: {state}", "det.board.title": "The cork board", "det.board.help": "Every yes in the grid becomes a red string between the two.", "det.hint": "Ask for a hint", "det.hint.used": "Hints used: {n}", "det.accuse.title": "Your accusation", "det.accuse.row": "Who or what is it? {category}", "det.accuse.submit": "Make the accusation", "det.accuse.submit.grid": "Check the grid", "det.accuse.grid": "Fill the grid with the clues until every yes is marked, then check it.", "det.accuse.cards": "The file is incomplete: turn every clue card first. The case stays open.", "det.accuse.pick": "Choose one for every row first.", "det.accuse.wrong": "Not quite: look again at {what}. The case stays open.", "det.accuse.wrong.grid": "Something in the grid is not right. Check it against the clues. The case stays open.", "det.cat.suspect": "the suspect", "det.cat.weapon": "the weapon", "det.cat.place": "the place", "det.cat.motive": "the motive", "det.cat.suspect.label": "Suspect", "det.cat.weapon.label": "Weapon", "det.cat.place.label": "Place", "det.cat.motive.label": "Motive", "det.case.leave": "Back to the board", "det.case.nofacts": "No clue item could be asked, so the card turns by itself.", "det.hud.clue": "Clue {n} of {total}", "det.effect.up": "Clue {n} turns face-up.", "det.effect.down": "The card stays face-down. This one will be asked again.", "det.next.up": "Read the clue", "det.next.down": "Back to the case", "det.solved.title": "Case solved", "det.solved.stamp": "Solved", "det.solved.who": "The answer: {what}", "det.solved.door": "The door swings open.", "det.solved.door.final": "The final door swings open.", "det.solved.unlocked": "Now open: {units}", "det.solved.stars": "Stars for this case", "det.solved.accuracy": "First-try clue answers: {n} %", "det.solved.hints": "Hints used: {n}", "det.solved.facts": "What the clues rested on", "det.solved.more": "Two stars open the next doors. Solve the case again for more.", "det.solved.again": "Solve it again", "det.chase.title": "The chase", "det.chase.lead": "The suspect is on the run. At each place a witness saw something: answer the question to hear it, then pick where the suspect went.", "det.chase.start": "Start the chase", "det.chase.again": "Chase again", "det.chase.locked": "Locked: master {unit} first.", "det.chase.caught.tag": "Caught", "det.chase.suspect": "On the run: {who}", "det.chase.at": "You are in {place}.", "det.chase.clock": "Clock", "det.chase.clock.label": "The clock shows {time}", "det.chase.ask": "Question the witness", "det.chase.witness": "The witness says", "det.chase.heard": "Where did she go?", "det.chase.travel": "Travel to {place}", "det.chase.cold": "A cold trail: the suspect did not go to {place}. It costs an hour and you are back in {back}.", "det.chase.warm": "You follow the trail to {place}.", "det.chase.hazy": "The witness took a while to remember: that cost an hour.", "det.chase.map": "A map of the places in the chase", "det.chase.legs": "Leg {n} of {total}", "det.chase.leave": "Leave the chase", "det.chase.effect.right": "The witness remembers it clearly.", "det.chase.effect.wrong": "The witness is hazy: an hour is lost.", "det.chase.next": "Hear the witness", "det.caught.title": "The chase is over", "det.caught.text": "{who} is caught in {place}.", "det.caught.clock": "The chase took until {time}.", "det.caught.cold": "Cold trails: {n}", "det.caught.stars": "Stars for the chase", "det.caught.accuracy": "First-try answers on the chase: {n} %", "det.caught.facts": "The places on the trail", "det.caught.again": "Chase again for more stars", "det.end.title": "File closed", "det.end.sub": "Every door is open and the suspect is caught.", "det.end.rooms": "Rooms solved: {n} of {total}" }, hr: { "det.tagline": "Dosje za razrješavanje", "det.intro": "Na svakim zaključanim vratima čeka slučaj. Okreni karte s tragovima odgovarajući na pitanja, otkrij tko je to učinio i vrata se otvaraju.", "det.office.title": "Ploča slučajeva", "det.office.lead": "Odaberi slučaj. Riješen slučaj otvara sljedeća vrata.", "det.office.rooms": "Sobe za bijeg", "det.room.open": "Otvori dosje", "det.room.again": "Ponovno otvori slučaj", "det.room.solved": "Riješeno", "det.room.locked": "Zaključano: prvo riješi {unit} s 2 zvjezdice.", "det.room.final": "Završna soba", "det.room.final.locked": "Zaključano: prvo svladaj sve sobe.", "det.room.stars": "{n} od 3 zvjezdice", "det.finish": "Zatvori dosje", "det.finish.hint": "Riješi završni izazov da zatvoriš dosje.", "det.finish.ready": "Završni izazov je gotov. Dosje se može zatvoriti.", "det.office.progress": "Riješeno soba: {n} od {total}", "det.room.resume": "Nastavi slučaj", "det.case.broken": "Ovaj slučaj nije mogao biti sastavljen. Odaberi drugi.", "det.grid.caption": "{rows} i {cols}", "det.chase.resume": "Nastavi potjeru", "det.back": "Natrag na ploču slučajeva", "det.title.screen": "Naslovni zaslon", "det.case.crime": "Zločin se dogodio ovdje: {place}.", "det.case.clues": "Karte s tragovima", "det.case.turned": "Okrenuto tragova: {n} od {total}", "det.case.no.cards": "Sve su karte okrenute. Ispuni mrežu pa optuži.", "det.clue.n": "Trag {n}", "det.clue.turn": "Okreni", "det.clue.down": "Trag {n}, okrenut licem prema dolje. Odgovori na pitanje da ga okreneš.", "det.clue.up": "Trag {n}, okrenut licem prema gore.", "det.clue.fact": "Činjenica iz tvog odgovora", "det.case.grid": "Mreža", "det.case.grid.help": "Pritisni polje: jedan pritisak ga prekriži, dva znače da, tri ga brišu.", "det.mark.blank": "nepoznato", "det.mark.no": "ne", "det.mark.yes": "da", "det.cell.label": "{a} i {b}: {state}", "det.board.title": "Pluta s uzicama", "det.board.help": 'Svako "da" u mreži postaje crvena uzica između to dvoje.', "det.hint": "Zatraži nagovještaj", "det.hint.used": "Iskorišteni nagovještaji: {n}", "det.accuse.title": "Tvoja optužba", "det.accuse.row": "Tko ili što je to? {category}", "det.accuse.submit": "Podigni optužbu", "det.accuse.submit.grid": "Provjeri mrežu", "det.accuse.grid": 'Ispuni mrežu tragovima dok nije označeno svako "da", pa je provjeri.', "det.accuse.cards": "Dosje nije potpun: prvo okreni sve karte s tragovima. Slučaj ostaje otvoren.", "det.accuse.pick": "Prvo odaberi po jedno u svakom retku.", "det.accuse.wrong": "Nije baš: pogledaj ponovno ovo: {what}. Slučaj ostaje otvoren.", "det.accuse.wrong.grid": "Nešto u mreži nije točno. Provjeri je prema tragovima. Slučaj ostaje otvoren.", "det.cat.suspect": "osumnjičenik", "det.cat.weapon": "oružje", "det.cat.place": "mjesto", "det.cat.motive": "motiv", "det.cat.suspect.label": "Osumnjičenik", "det.cat.weapon.label": "Oružje", "det.cat.place.label": "Mjesto", "det.cat.motive.label": "Motiv", "det.case.leave": "Natrag na ploču", "det.case.nofacts": "Nijedno pitanje za trag nije moglo biti postavljeno pa se karta okreće sama.", "det.hud.clue": "Trag {n} od {total}", "det.effect.up": "Trag {n} se okreće.", "det.effect.down": "Karta ostaje okrenuta prema dolje. Ovo će se pitati ponovno.", "det.next.up": "Pročitaj trag", "det.next.down": "Natrag na slučaj", "det.solved.title": "Slučaj riješen", "det.solved.stamp": "Riješeno", "det.solved.who": "Odgovor: {what}", "det.solved.door": "Vrata se otvaraju.", "det.solved.door.final": "Završna vrata se otvaraju.", "det.solved.unlocked": "Sada otvoreno: {units}", "det.solved.stars": "Zvjezdice za ovaj slučaj", "det.solved.accuracy": "Točni odgovori iz prvog pokušaja: {n} %", "det.solved.hints": "Iskorišteni nagovještaji: {n}", "det.solved.facts": "Na čemu su se tragovi temeljili", "det.solved.more": "Dvije zvjezdice otvaraju sljedeća vrata. Riješi slučaj ponovno za više.", "det.solved.again": "Riješi ponovno", "det.chase.title": "Potjera", "det.chase.lead": "Osumnjičenik je u bijegu. Na svakom mjestu svjedok je nešto vidio: odgovori na pitanje da ga čuješ, pa odaberi kamo je osumnjičenik otišao.", "det.chase.start": "Započni potjeru", "det.chase.again": "Ponovno u potjeru", "det.chase.locked": "Zaključano: prvo svladaj {unit}.", "det.chase.caught.tag": "Uhvaćen", "det.chase.suspect": "U bijegu: {who}", "det.chase.at": "Nalaziš se ovdje: {place}.", "det.chase.clock": "Sat", "det.chase.clock.label": "Sat pokazuje {time}", "det.chase.ask": "Ispitaj svjedoka", "det.chase.witness": "Svjedok kaže", "det.chase.heard": "Kamo je otišla?", "det.chase.travel": "Otputuj: {place}", "det.chase.cold": "Hladan trag: osumnjičenik nije otišao ovamo: {place}. To košta sat vremena i vraćaš se ovamo: {back}.", "det.chase.warm": "Slijediš trag ovamo: {place}.", "det.chase.hazy": "Svjedok se dugo prisjećao: to je koštalo sat vremena.", "det.chase.map": "Karta mjesta u potjeri", "det.chase.legs": "Dionica {n} od {total}", "det.chase.leave": "Napusti potjeru", "det.chase.effect.right": "Svjedok se jasno sjeća.", "det.chase.effect.wrong": "Svjedok je zbunjen: sat vremena je izgubljeno.", "det.chase.next": "Saslušaj svjedoka", "det.caught.title": "Potjera je gotova", "det.caught.text": "Uhvaćen je: {who}. Mjesto: {place}.", "det.caught.clock": "Potjera je trajala do {time}.", "det.caught.cold": "Hladni tragovi: {n}", "det.caught.stars": "Zvjezdice za potjeru", "det.caught.accuracy": "Točni odgovori iz prvog pokušaja u potjeri: {n} %", "det.caught.facts": "Mjesta na tragu", "det.caught.again": "Potjera ponovno za više zvjezdica", "det.end.title": "Dosje zatvoren", "det.end.sub": "Sva su vrata otvorena i osumnjičenik je uhvaćen.", "det.end.rooms": "Riješeno soba: {n} od {total}" }, de: { "det.tagline": "Eine Fallakte zum Knacken", "det.intro": "Hinter jeder verschlossenen Tür wartet ein Fall. Drehe die Hinweiskarten um, indem du Fragen beantwortest, finde heraus, wer es war, und die Tür öffnet sich.", "det.office.title": "Die Falltafel", "det.office.lead": "Wähle einen Fall. Ein gelöster Fall öffnet die nächste Tür.", "det.office.rooms": "Rätselräume", "det.room.open": "Die Akte öffnen", "det.room.again": "Den Fall neu aufrollen", "det.room.solved": "Gelöst", "det.room.locked": "Gesperrt: Löse zuerst {unit} mit 2 Sternen.", "det.room.final": "Der letzte Raum", "det.room.final.locked": "Gesperrt: Meistere zuerst jeden Raum.", "det.room.stars": "{n} von 3 Sternen", "det.finish": "Die Akte schließen", "det.finish.hint": "Löse die letzte Aufgabe, um die Akte zu schließen.", "det.finish.ready": "Die letzte Aufgabe ist geschafft. Die Akte kann geschlossen werden.", "det.office.progress": "{n} von {total} Räumen gelöst", "det.room.resume": "Den Fall fortsetzen", "det.case.broken": "Dieser Fall konnte nicht erstellt werden. Wähle einen anderen.", "det.grid.caption": "{rows} und {cols}", "det.chase.resume": "Die Verfolgung fortsetzen", "det.back": "Zurück zur Falltafel", "det.title.screen": "Titelbildschirm", "det.case.crime": "Das Verbrechen geschah in: {place}.", "det.case.clues": "Hinweiskarten", "det.case.turned": "{n} von {total} Hinweisen umgedreht", "det.case.no.cards": "Jede Karte liegt offen. Markiere das Raster und erhebe dann Anklage.", "det.clue.n": "Hinweis {n}", "det.clue.turn": "Umdrehen", "det.clue.down": "Hinweis {n}, verdeckt. Beantworte eine Frage, um ihn umzudrehen.", "det.clue.up": "Hinweis {n}, aufgedeckt.", "det.clue.fact": "Die Tatsache aus deiner Antwort", "det.case.grid": "Das Raster", "det.case.grid.help": "Drücke auf ein Feld: Einmal streicht es durch, zweimal bedeutet ja, dreimal löscht es.", "det.mark.blank": "unbekannt", "det.mark.no": "nein", "det.mark.yes": "ja", "det.cell.label": "{a} und {b}: {state}", "det.board.title": "Die Pinnwand", "det.board.help": "Jedes Ja im Raster wird zu einem roten Faden zwischen den beiden.", "det.hint": "Um einen Tipp bitten", "det.hint.used": "Genutzte Tipps: {n}", "det.accuse.title": "Deine Anklage", "det.accuse.row": "Wer oder was ist es? {category}", "det.accuse.submit": "Anklage erheben", "det.accuse.submit.grid": "Das Raster prüfen", "det.accuse.grid": "Fülle das Raster mit den Hinweisen, bis jedes Ja markiert ist, und prüfe es dann.", "det.accuse.cards": "Die Akte ist unvollständig: Drehe zuerst jede Hinweiskarte um. Der Fall bleibt offen.", "det.accuse.pick": "Wähle zuerst für jede Zeile eine Antwort.", "det.accuse.wrong": "Nicht ganz: Sieh dir noch einmal {what} an. Der Fall bleibt offen.", "det.accuse.wrong.grid": "Im Raster stimmt etwas nicht. Prüfe es anhand der Hinweise. Der Fall bleibt offen.", "det.cat.suspect": "den Verdächtigen", "det.cat.weapon": "die Tatwaffe", "det.cat.place": "den Ort", "det.cat.motive": "das Motiv", "det.cat.suspect.label": "Verdächtiger", "det.cat.weapon.label": "Tatwaffe", "det.cat.place.label": "Ort", "det.cat.motive.label": "Motiv", "det.case.leave": "Zurück zur Tafel", "det.case.nofacts": "Zu diesem Hinweis konnte keine Frage gestellt werden, deshalb dreht sich die Karte von selbst um.", "det.hud.clue": "Hinweis {n} von {total}", "det.effect.up": "Hinweis {n} wird aufgedeckt.", "det.effect.down": "Die Karte bleibt verdeckt. Diese Frage kommt noch einmal.", "det.next.up": "Den Hinweis lesen", "det.next.down": "Zurück zum Fall", "det.solved.title": "Fall gelöst", "det.solved.stamp": "Gelöst", "det.solved.who": "Die Antwort: {what}", "det.solved.door": "Die Tür schwingt auf.", "det.solved.door.final": "Die letzte Tür schwingt auf.", "det.solved.unlocked": "Jetzt offen: {units}", "det.solved.stars": "Sterne für diesen Fall", "det.solved.accuracy": "Hinweisantworten beim ersten Versuch: {n} %", "det.solved.hints": "Genutzte Tipps: {n}", "det.solved.facts": "Worauf die Hinweise beruhten", "det.solved.more": "Zwei Sterne öffnen die nächsten Türen. Löse den Fall noch einmal für mehr.", "det.solved.again": "Noch einmal lösen", "det.chase.title": "Die Verfolgung", "det.chase.lead": "Der Verdächtige ist auf der Flucht. An jedem Ort hat ein Zeuge etwas gesehen: Beantworte die Frage, um es zu hören, und wähle dann, wohin der Verdächtige gegangen ist.", "det.chase.start": "Die Verfolgung starten", "det.chase.again": "Noch einmal verfolgen", "det.chase.locked": "Gesperrt: Meistere zuerst {unit}.", "det.chase.caught.tag": "Gefasst", "det.chase.suspect": "Auf der Flucht: {who}", "det.chase.at": "Du bist in {place}.", "det.chase.clock": "Uhr", "det.chase.clock.label": "Die Uhr zeigt {time}", "det.chase.ask": "Den Zeugen befragen", "det.chase.witness": "Der Zeuge sagt", "det.chase.heard": "Wohin ist sie gegangen?", "det.chase.travel": "Nach {place} reisen", "det.chase.cold": "Eine kalte Spur: Der Verdächtige ist nicht nach {place} gegangen. Das kostet eine Stunde, und du bist zurück in {back}.", "det.chase.warm": "Du folgst der Spur nach {place}.", "det.chase.hazy": "Der Zeuge hat sich nur langsam erinnert: Das hat eine Stunde gekostet.", "det.chase.map": "Eine Karte der Orte der Verfolgung", "det.chase.legs": "Etappe {n} von {total}", "det.chase.leave": "Die Verfolgung verlassen", "det.chase.effect.right": "Der Zeuge erinnert sich genau.", "det.chase.effect.wrong": "Der Zeuge ist unsicher: Eine Stunde geht verloren.", "det.chase.next": "Den Zeugen anhören", "det.caught.title": "Die Verfolgung ist vorbei", "det.caught.text": "{who} wird in {place} gefasst.", "det.caught.clock": "Die Verfolgung dauerte bis {time}.", "det.caught.cold": "Kalte Spuren: {n}", "det.caught.stars": "Sterne für die Verfolgung", "det.caught.accuracy": "Antworten beim ersten Versuch in der Verfolgung: {n} %", "det.caught.facts": "Die Orte auf der Spur", "det.caught.again": "Noch einmal verfolgen für mehr Sterne", "det.end.title": "Akte geschlossen", "det.end.sub": "Jede Tür ist offen und der Verdächtige ist gefasst.", "det.end.rooms": "Gelöste Räume: {n} von {total}" } }, Yu = "detective", N1 = "noir", P1 = "-", R1 = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t, D1 = { rooms: [] };
  class L1 {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "cases", /* @__PURE__ */ new Map());
      __publicField(this, "titleState", ns());
      __publicField(this, "room", null);
      __publicField(this, "chase", null);
      __publicField(this, "coldPlaces", /* @__PURE__ */ new Set());
      __publicField(this, "chaseNotice", null);
      __publicField(this, "cork", null);
      var _a3;
      this.host = e, this.session = new Cs(e, { shellId: Yu, theme: N1, strings: O1 }), this.section = (_a3 = this.session.section()) != null ? _a3 : D1;
    }
    get s() {
      return this.session.s;
    }
    mount() {
      const e = this.session;
      e.mount(), e.setDebug({ solution: () => this.solution(), route: () => this.route() }), this.title();
    }
    unmount() {
      var _a3;
      (_a3 = this.cork) == null ? void 0 : _a3.dispose(), this.cork = null, this.session.unmount();
    }
    saved() {
      const e = this.session.shellData();
      return { solved: Array.isArray(e == null ? void 0 : e.solved) ? e.solved.filter((n) => typeof n == "string") : [], caught: (e == null ? void 0 : e.caught) === true };
    }
    save(e) {
      this.session.setShellData(e);
    }
    rooms() {
      const e = this.session.units().map((n) => n.id), s = (n) => n.unit === void 0 ? 1e6 : e.indexOf(n.unit);
      return [...this.section.rooms].sort((n, i) => s(n) - s(i));
    }
    isFinal(e) {
      return e.unit === void 0;
    }
    roomLocked(e) {
      return e.unit === void 0 ? !this.session.allMastered() : !this.session.isUnlocked(e.unit);
    }
    roomStars(e) {
      return e.unit === void 0 ? this.session.bossStars() : this.session.unitStars(e.unit);
    }
    chaseOpen(e) {
      return e.unit === void 0 ? this.session.allMastered() : this.session.isUnlocked(e.unit);
    }
    chaseStars(e) {
      return e.unit === void 0 ? this.session.bossStars() : this.session.unitStars(e.unit);
    }
    needs(e) {
      var _a3, _b3;
      const s = this.session;
      return e.unit === void 0 ? "" : ((_b3 = (_a3 = s.pack.units.find((i) => i.id === e.unit)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((i) => !s.isMastered(i)).map((i) => s.unitTitle(i)).join(", ");
    }
    done() {
      return this.session.bossStars() >= 1;
    }
    nameOf(e) {
      return (s) => this.session.t(e.case.names[s]) || s;
    }
    labelOf(e) {
      const s = this.s, n = { suspect: "det.cat.suspect.label", weapon: "det.cat.weapon.label", place: "det.cat.place.label", motive: "det.cat.motive.label" };
      return (i) => {
        const r = e.case.labels[i];
        if (r) return this.session.t(r);
        const o = n[i];
        return o ? s(o) : i;
      };
    }
    namer(e) {
      return { name: this.nameOf(e), alias: (n) => e.case.aliases[n] ? this.session.t(e.case.aliases[n]) : void 0 };
    }
    factOf(e) {
      const s = this.session;
      if (!e) return "";
      for (const n of [e.didYouKnow, e.explanation]) if (n && s.text.hasText(n)) return s.t(n);
      return "";
    }
    caseOf(e, s) {
      const n = this.cases.get(e.id);
      if (n) return n;
      const i = y1(s.clues.length, e.id);
      return this.cases.set(e.id, i), i;
    }
    built(e) {
      try {
        return il(hl(e.case));
      } catch (e2) {
        return null;
      }
    }
    solution() {
      const e = this.room, s = e ? this.built(e) : null;
      if (!e || !s) return null;
      const n = s.puzzle, i = this.cases.get(e.id), r = rl(n), o = Tw(n);
      return { room: e.id, kind: n.kind, accusation: r, accuse: r ? Object.entries(r).map(([a, c]) => "accuse-".concat(a, "-").concat(c)) : [], yes: o, cells: o.map((a) => {
        const [c, l] = Re(a);
        return "cell-".concat(c, "-").concat(l);
      }), cards: i ? { turned: Bs(i), total: i.cards.length, faceDown: Gu(i) } : { turned: 0, total: n.clues.length, faceDown: n.clues.map((a, c) => c + 1) }, marks: i ? ol(n, i.marks).length : 0 };
    }
    route() {
      var _a3;
      const e = this.section.chase, s = this.chase;
      if (!e || !s) return null;
      const n = e.route[s.leg];
      return { active: !s.caught, caught: s.caught, at: s.at, leg: s.leg, legs: e.route.length, phase: s.caught ? "caught" : s.heard ? "travel" : "witness", next: (_a3 = n == null ? void 0 : n.to) != null ? _a3 : null, travel: n ? "travel-".concat(n.to) : null, options: s.options, decoys: s.options.filter((i) => i !== (n == null ? void 0 : n.to)), end: dl(e) };
    }
    title() {
      const e = this.session;
      e.finished = false, this.room = null, e.render("title", Zs(e, { onStart: () => this.office() }, () => this.title(), this.titleState));
    }
    office() {
      var _a3;
      const e = this.session, s = this.s;
      e.finished = false, this.room = null, this.disposeCork();
      const n = this.saved(), i = this.rooms(), r = this.section.chase, o = i.filter((h) => !this.roomLocked(h)), a = i.filter((h) => n.solved.includes(h.id)).length, c = (h) => {
        var _a4;
        const p = this.roomLocked(h), f = this.roomStars(h), m = n.solved.includes(h.id), g = this.cases.has(h.id) && !((_a4 = this.cases.get(h.id)) == null ? void 0 : _a4.solved), k = p ? "locked" : m ? "solved" : "open", b = p ? this.isFinal(h) ? s("det.room.final.locked") : s("det.room.locked", { unit: this.needs(h) }) : m ? s("det.room.solved") : g ? s("det.room.resume") : this.isFinal(h) ? s("det.room.final") : s("det.room.open");
        return d("li", { class: "det-room-item" }, d("button", { type: "button", class: "det-room is-".concat(k).concat(this.isFinal(h) ? " is-final" : ""), testid: "room-".concat(h.id), "data-state": k, "data-stars": String(f), "data-locked": String(p), ...h.unit ? { "data-unit": h.unit } : { "data-final": "true" }, ...p ? { disabled: true } : {}, onclick: () => this.openRoom(h) }, d("span", { class: "det-room-door" }, qu(p ? "locked" : m ? "solved" : "open")), d("span", { class: "det-room-body" }, d("span", { class: "det-room-name" }, e.t(h.title)), d("span", { class: "det-room-meta" }, b), e.stars(f))));
      }, l = r ? d("div", { class: "det-chase-card" }, d("h2", {}, e.t(r.title) || s("det.chase.title")), d("p", {}, r.story ? e.t(r.story) : s("det.chase.lead")), this.chaseOpen(r) ? T("chase-start", this.chase && !this.chase.caught ? s("det.chase.resume") : n.caught ? s("det.chase.again") : s("det.chase.start"), () => this.startChase(), { class: "btn btn-primary" }) : d("p", { class: "message" }, r.unit ? s("det.chase.locked", { unit: e.unitTitle(r.unit) }) : s("det.room.final.locked")), n.caught ? d("p", { class: "message message-ok", testid: "chase-caught-tag" }, s("det.chase.caught.tag")) : null) : null, u = d("section", { class: "office-screen det-office" }, d("div", { class: "topbar" }, T("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "office-progress" }, s("det.office.progress", { n: a, total: i.length }))), d("h1", { class: "screen-title", tabindex: "-1", testid: "office-title" }, s("det.office.title")), d("p", { class: "subject" }, s("det.office.lead")), d("h2", { class: "det-h2" }, s("det.office.rooms")), d("ol", { class: "det-rooms", testid: "rooms" }, i.map(c)), l, this.done() ? d("div", { class: "det-finish" }, d("p", { class: "message message-ok" }, s("det.finish.ready")), T("finish", s("det.finish"), () => this.end(), { class: "btn btn-primary btn-big" })) : d("p", { class: "det-finish-hint", testid: "finish-hint" }, s("det.finish.hint")));
      e.render("office", u, { view: { rooms: i.map((h) => {
        var _a4;
        return { id: h.id, unit: (_a4 = h.unit) != null ? _a4 : null, final: this.isFinal(h), stars: this.roomStars(h), locked: this.roomLocked(h), solved: n.solved.includes(h.id), open: o.includes(h) };
      }), chase: r ? { open: this.chaseOpen(r), caught: n.caught, stars: this.chaseStars(r) } : null, final: (_a3 = this.section.final) != null ? _a3 : null, done: this.done() } });
    }
    openRoom(e) {
      var _a3;
      this.room = e, ((_a3 = this.cases.get(e.id)) == null ? void 0 : _a3.solved) && this.cases.delete(e.id), this.caseScreen(e);
    }
    disposeCork() {
      var _a3;
      (_a3 = this.cork) == null ? void 0 : _a3.dispose(), this.cork = null;
    }
    caseView(e) {
      var _a3;
      const s = this.built(e), n = this.cases.get(e.id);
      if (!s || !n) return { room: e.id };
      const i = s.puzzle;
      return { room: e.id, unit: (_a3 = e.unit) != null ? _a3 : null, kind: i.kind, size: i.size, seed: s.seed, clues: n.cards.map((r, o) => ({ n: o + 1, state: r === null ? "down" : "up", item: r })), turned: Bs(n), total: n.cards.length, yes: ol(i, n.marks).length, hints: n.hints, accusation: n.accusation, wrongAccusations: n.wrongAccusations, solved: n.solved };
    }
    caseScreen(e, s) {
      const n = this.session, i = this.s;
      this.room = e, this.disposeCork();
      const r = this.built(e);
      if (!r) return this.caseBroken(e);
      const o = r.puzzle;
      let a = this.caseOf(e, o);
      const c = this.nameOf(e), l = this.labelOf(e), u = this.namer(e), h = (I) => {
        a = I, this.cases.set(e.id, a);
      };
      let p = "";
      const f = () => n.publish("case", { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), m = a.cards.length, g = o.clues.map((I, D) => {
        const G = D + 1, B = a.cards[D];
        if (B == null) return d("li", { class: "det-card is-down", "data-state": "down" }, T("clue-".concat(G), [d("span", { class: "det-card-art" }, Zr()), d("span", { class: "det-card-no" }, i("det.clue.n", { n: G })), d("span", { class: "det-card-act" }, i("det.clue.turn"))], () => this.turnCard(e, G), { class: "det-card-btn" }));
        const H = this.factOf(n.item(B));
        return d("li", { class: "det-card is-up", "data-state": "up", testid: "clue-".concat(G), tabindex: "-1", ...s === G ? { "data-autofocus": "" } : {} }, d("h3", { class: "det-card-no" }, i("det.clue.n", { n: G })), d("p", { class: "det-clue-text" }, ul(o, I, u, n.lang)), H ? d("p", { class: "det-clue-fact" }, d("span", { class: "det-fact-label" }, i("det.clue.fact")), " ", H) : null);
      }), k = { mark: (I) => i(I === "yes" ? "det.mark.yes" : I === "no" ? "det.mark.no" : "det.mark.blank"), cell: (I, D, G) => i("det.cell.label", { a: I, b: D, state: G }), caption: (I, D) => i("det.grid.caption", { rows: I, cols: D }) }, b = d("p", { class: "det-hint-text", testid: "hint-text", role: "status", hidden: true }), v = v1(o, a.marks, c, l, k, (I) => {
        var _a3;
        let D = Mw(a.marks, I);
        vt(D, I) === "yes" && (D = Ow(o, D, I)), h({ ...a, marks: D }), p = "", v.update(D), (_a3 = this.cork) == null ? void 0 : _a3.update(D);
        const [G, B] = Re(I);
        n.live(k.cell(c(G), c(B), k.mark(vt(D, I)))), f();
      }), w = k1(o, c, l, a.marks);
      this.cork = w;
      const y = T("hint", "💡 ".concat(i("det.hint")), () => {
        const I = Pw(o, S1(a), a.marks, u, n.lang);
        h({ ...a, hints: a.hints + 1 }), b.hidden = false, b.textContent = I.text, p = I.kind === "step" || I.kind === "wrong" ? I.cell : "", v.update(a.marks, p), $.textContent = i("det.hint.used", { n: a.hints }), f();
      }, { class: "btn btn-small" }), $ = d("span", { class: "det-hint-count", testid: "hint-count" }, i("det.hint.used", { n: a.hints })), x = /* @__PURE__ */ new Map(), _ = d("p", { class: "det-accuse-message", testid: "accuse-message", role: "status", hidden: true }), z = (I, D) => {
        _.hidden = false, _.className = "det-accuse-message message message-bad", _.textContent = I;
      }, R = or(o).map((I) => {
        var _a3;
        const D = o.categories.find((B) => B.key === I), G = l(I);
        return d("div", { class: "det-pick-row", role: "group", "aria-label": G }, d("span", { class: "det-pick-label" }, G), d("span", { class: "det-picks" }, ((_a3 = D == null ? void 0 : D.items) != null ? _a3 : []).map((B) => {
          const H = T("accuse-".concat(I, "-").concat(B), c(B), () => {
            h({ ...a, accusation: { ...a.accusation, [I]: a.accusation[I] === B ? "" : B } });
            for (const [ke, he] of x) he.setAttribute("aria-pressed", String(a.accusation[ke.split("|")[0]] === ke.split("|")[1]));
            f();
          }, { class: "det-pick", "aria-pressed": String(a.accusation[I] === B) });
          return x.set("".concat(I, "|").concat(B), H), H;
        })));
      }), S = T("accuse-submit", o.kind === "murdle" ? i("det.accuse.submit") : i("det.accuse.submit.grid"), () => {
        var _a3;
        const I = x1(o, a, (D, G) => Nw(o, D, G));
        if (I.kind === "cards") return z(i("det.accuse.cards"));
        if (I.kind === "pick") return z(i("det.accuse.pick"));
        if (I.kind === "wrong") return h({ ...a, wrongAccusations: a.wrongAccusations + 1 }), z(o.kind === "murdle" ? i("det.accuse.wrong", { what: I.wrong.map((D) => this.categoryWords(D, l)).join(", ") }) : i("det.accuse.wrong.grid")), n.live((_a3 = _.textContent) != null ? _a3 : ""), f();
        h({ ...a, solved: true }), this.solved(e, o, a);
      }, { class: "btn btn-primary btn-big" }), A = o.kind === "murdle" && o.murder ? d("p", { class: "det-crime", testid: "case-crime" }, i("det.case.crime", { place: Tn(o, o.murder.place, u, n.lang) })) : null, j = d("section", { class: "case-screen det-case" }, d("div", { class: "topbar" }, T("to-office", "‹ ".concat(i("det.back")), () => this.office(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "case-progress" }, i("det.case.turned", { n: Bs(a), total: m }))), d("h1", { class: "screen-title det-case-title", tabindex: "-1", testid: "case-title" }, n.t(e.title)), d("p", { class: "det-story", testid: "case-story" }, n.t(e.story)), A, d("div", { class: "det-layout" }, d("section", { class: "det-col-cards", "aria-labelledby": "det-cards-h" }, d("h2", { class: "det-h2", id: "det-cards-h" }, i("det.case.clues")), Bs(a) === m ? d("p", { class: "det-note" }, i("det.case.no.cards")) : null, d("ol", { class: "det-cards", testid: "clues" }, g)), d("section", { class: "det-col-grid", "aria-labelledby": "det-grid-h" }, d("h2", { class: "det-h2", id: "det-grid-h" }, i("det.case.grid")), d("p", { class: "det-help" }, i("det.case.grid.help")), v.el)), d("section", { class: "det-board-wrap", "aria-labelledby": "det-board-h" }, d("h2", { class: "det-h2", id: "det-board-h" }, i("det.board.title")), d("p", { class: "det-help" }, i("det.board.help")), w.el), d("section", { class: "det-accuse", "aria-labelledby": "det-accuse-h" }, d("h2", { class: "det-h2", id: "det-accuse-h" }, i("det.accuse.title")), d("div", { class: "det-hint-row" }, y, $), b, o.kind === "murdle" ? d("div", { class: "det-pick-rows" }, R) : d("p", { class: "det-help" }, i("det.accuse.grid")), d("div", { class: "actions" }, S), _));
      n.render("case", j, { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), w.update(a.marks);
    }
    categoryWords(e, s) {
      const n = this.s, r = { suspect: "det.cat.suspect", weapon: "det.cat.weapon", place: "det.cat.place", motive: "det.cat.motive" }[e];
      return r ? n(r) : s(e);
    }
    caseBroken(e) {
      const s = this.session, n = this.s;
      s.render("case", d("section", { class: "case-screen det-case" }, d("h1", { class: "screen-title", tabindex: "-1", testid: "case-title" }, s.t(e.title)), d("p", { class: "message message-bad", testid: "case-broken" }, n("det.case.broken")), d("div", { class: "actions" }, T("to-office", n("det.back"), () => this.office(), { class: "btn btn-primary" }))), { view: { room: e.id, broken: true } });
    }
    turnCard(e, s) {
      const n = this.session, i = this.s, r = this.built(e), o = this.cases.get(e.id);
      if (!r || !o) return this.caseScreen(e);
      const a = o.cards.length, c = e.unit ? "unit" : "boss";
      let l = o.run, u = l ? n.next(l) : null;
      u || (l = n.startRun(z1(e.case.items, o), { kind: c, ...e.unit ? { unitId: e.unit } : {} }), u = n.next(l));
      const h = u ? n.item(u.id) : void 0;
      if (!l || !u || !n.canAsk(h)) return this.cases.set(e.id, { ...o, run: l, cards: o.cards.map((g, k) => k === s - 1 ? P1 : g) }), this.caseScreen(e, s);
      this.cases.set(e.id, { ...o, run: l });
      const p = l, f = u, m = d("div", { class: "det-hud" }, d("span", { class: "det-hud-card" }, Zr()), d("div", { class: "det-hud-text" }, d("p", { class: "det-hud-room" }, n.t(e.title)), d("p", { class: "det-hud-count" }, i("det.case.turned", { n: Bs(o), total: a }))));
      lt(n, { item: h, context: "clue", retry: f.retry, hud: m, lead: d("span", {}, i("det.hud.clue", { n: s, total: a })), ...e.unit ? { unitId: e.unit } : {}, roundKind: c, roundSize: p.size, index: p.results.length, view: () => this.caseView(e), leaveLabel: i("det.case.leave"), onLeave: () => this.caseScreen(e), onAnswered: (g) => {
        const k = this.cases.get(e.id), b = j1({ ...k, run: n.record(p, f, g) }, s, h.id, g.result.correct, g.result.score);
        this.cases.set(e.id, b);
      }, effect: (g) => g.result.correct ? { text: i("det.effect.up", { n: s }), tone: "good" } : { text: i("det.effect.down"), tone: "bad" }, nextLabel: (g) => g.result.correct ? i("det.next.up") : i("det.next.down"), onNext: (g) => this.caseScreen(e, g.result.correct ? s : void 0) });
    }
    solved(e, s, n) {
      const i = this.session, r = this.s, o = _1(n), a = i.recordUnit(e.unit ? { unitId: e.unit } : { boss: true }, o), c = this.saved();
      c.solved.includes(e.id) || this.save({ ...c, solved: [...c.solved, e.id] }), i.playCue(e.unit ? "unit-complete" : "boss");
      const l = this.nameOf(e), u = this.labelOf(e), h = rl(s), p = h ? Object.entries(h).map(([v, w]) => "".concat(u(v), ": ").concat(l(w))).join("; ") : "", f = a.unlocked.map((v) => i.unitTitle(v)), m = Math.round(o * 100), g = n.cards.flatMap((v, w) => {
        const y = this.factOf(v ? i.item(v) : void 0);
        return y ? [{ n: w + 1, text: y }] : [];
      }), k = qu("locked"), b = d("section", { class: "solved-screen det-solved" }, d("div", { class: "det-solved-door", "aria-hidden": "true" }, k), d("p", { class: "det-stamp", "aria-hidden": "true" }, r("det.solved.stamp")), d("h1", { class: "screen-title", tabindex: "-1", testid: "solved-title" }, r("det.solved.title")), d("p", { class: "subject" }, i.t(e.title)), p ? d("p", { class: "det-answer", testid: "solved-answer" }, r("det.solved.who", { what: p })) : null, i.stars(a.stars, "case-stars"), d("p", { class: "big-number", testid: "case-accuracy" }, r("det.solved.accuracy", { n: m })), n.hints > 0 ? d("p", { class: "det-note", testid: "case-hints" }, r("det.solved.hints", { n: n.hints })) : null, d("p", { class: "message message-ok", testid: "door-open" }, e.unit ? r("det.solved.door", { unit: i.t(e.title) }) : r("det.solved.door.final")), f.length > 0 ? d("p", { class: "message", testid: "solved-unlocked" }, r("det.solved.unlocked", { units: f.join(", ") })) : null, a.stars < 2 ? d("p", { class: "message message-bad", testid: "solved-more" }, r("det.solved.more")) : null, g.length > 0 ? d("div", { class: "det-facts" }, d("h2", { class: "det-h2" }, r("det.solved.facts")), d("ul", { class: "det-fact-list", testid: "solved-facts" }, g.map((v) => d("li", {}, d("b", {}, r("det.clue.n", { n: v.n })), " ", v.text)))) : null, d("div", { class: "actions actions-center" }, T("to-office", r("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), a.stars < 3 ? T("solve-again", r("det.solved.again"), () => this.again(e), { class: "btn btn-big" }) : null));
      i.render("case-solved", b, { ...e.unit ? { unitId: e.unit } : {}, view: { room: e.id, stars: a.stars, accuracy: m, hints: n.hints, unlocked: a.unlocked, wrongAccusations: n.wrongAccusations } }), window.requestAnimationFrame(() => k.classList.add("is-swinging"));
    }
    again(e) {
      this.cases.delete(e.id), this.openRoom(e);
    }
    startChase() {
      const e = this.section.chase;
      if (!e) return this.office();
      (!this.chase || this.chase.caught) && (this.chase = T1(e, this.session.rng), this.coldPlaces = /* @__PURE__ */ new Set(), this.chaseNotice = null), this.chaseScreen();
    }
    placeName(e, s) {
      const n = e.places.find((i) => i.id === s);
      return n ? this.session.t(n.name) : s;
    }
    chaseView() {
      const e = this.section.chase, s = this.chase;
      return !e || !s ? {} : { phase: s.caught ? "caught" : s.heard ? "travel" : "witness", at: s.at, leg: s.leg, legs: e.route.length, hours: s.hours, clock: is(s.hours), heard: s.heard, options: s.heard ? s.options : [], cold: s.cold, trail: s.trail };
    }
    witnessText(e, s) {
      const n = this.session, i = e.route[s];
      if (!i) return "";
      if (i.clue) return n.t(i.clue);
      const r = n.item(i.item);
      return this.factOf(r) || (r ? n.t(r.prompt) : "");
    }
    chaseScreen() {
      const e = this.session, s = this.s, n = this.section.chase, i = this.chase;
      this.disposeCork();
      const r = n.route[i.leg], o = e.pack.assets.find((f) => f.id === n.map), a = w1({ src: e.data.assets[n.map], alt: o ? e.t(o.alt) : s("det.chase.map"), width: n.width, height: n.height, places: n.places.map((f) => ({ id: f.id, name: e.t(f.name), x: f.x, y: f.y })), trail: i.trail, options: i.heard ? i.options : [], here: i.at }), c = this.chaseNotice, l = c ? d("p", { class: "message ".concat(c.kind === "warm" ? "message-ok" : "message-bad"), role: "status", testid: "chase-notice", "data-kind": c.kind }, c.kind === "cold" ? s("det.chase.cold", { place: c.place, back: c.back }) : c.kind === "warm" ? s("det.chase.warm", { place: c.place }) : s("det.chase.hazy")) : null, u = i.heard && r ? i.options : [], h = r ? i.heard ? d("div", { class: "det-travel-panel" }, d("figure", { class: "det-witness", testid: "witness-line" }, d("figcaption", {}, s("det.chase.witness")), d("blockquote", {}, this.witnessText(n, i.leg))), d("h2", { class: "det-h2" }, s("det.chase.heard")), d("ul", { class: "det-travel", testid: "travel" }, u.map((f, m) => d("li", {}, T("travel-".concat(f), this.s("det.chase.travel", { place: this.placeName(n, f) }), () => this.go(f), { class: "btn det-go".concat(this.coldPlaces.has(f) ? " is-cold" : ""), ...this.coldPlaces.has(f) ? { disabled: true, "data-cold": "true" } : {}, ...m === u.findIndex((g) => !this.coldPlaces.has(g)) ? { "data-autofocus": "" } : {} }))))) : d("div", { class: "det-witness-panel" }, d("p", { class: "det-here", testid: "chase-here" }, s("det.chase.at", { place: this.placeName(n, i.at) })), T("ask-witness", s("det.chase.ask"), () => this.askWitness(), { class: "btn btn-primary btn-big", "data-autofocus": "" })) : null, p = d("section", { class: "chase-screen det-chase" }, d("div", { class: "topbar" }, T("to-office", "‹ ".concat(s("det.chase.leave")), () => this.office(), { class: "btn btn-small btn-ghost" }), d("span", { class: "det-clock", testid: "clock", role: "timer", "aria-label": s("det.chase.clock.label", { time: is(i.hours) }) }, d("span", { class: "det-clock-label" }, s("det.chase.clock")), " ", is(i.hours))), d("h1", { class: "screen-title", tabindex: "-1", testid: "chase-title" }, e.t(n.title) || s("det.chase.title")), d("p", { class: "subject", testid: "chase-suspect" }, s("det.chase.suspect", { who: e.t(n.suspect) })), d("p", { class: "det-legs", testid: "chase-legs" }, s("det.chase.legs", { n: Math.min(i.leg + 1, n.route.length), total: n.route.length })), d("div", { class: "det-chase-layout" }, a, d("div", { class: "det-chase-side" }, l, h)));
      e.render("chase", p, { ...n.unit ? { unitId: n.unit } : {}, view: this.chaseView() });
    }
    askWitness() {
      const e = this.session, s = this.s, n = this.section.chase, i = this.chase, r = n.route[i.leg];
      if (!r) return this.chaseScreen();
      const o = e.item(r.item);
      if (this.chaseNotice = null, !e.canAsk(o)) return this.chase = Vu(i, true, 1), this.chaseScreen();
      const a = d("div", { class: "det-hud" }, d("span", { class: "det-hud-card" }, Zr()), d("div", { class: "det-hud-text" }, d("p", { class: "det-hud-room" }, this.placeName(n, i.at)), d("p", { class: "det-hud-count" }, s("det.chase.clock.label", { time: is(i.hours) }))));
      lt(e, { item: o, context: "clue", hud: a, lead: d("span", {}, s("det.chase.legs", { n: i.leg + 1, total: n.route.length })), ...n.unit ? { unitId: n.unit } : {}, index: i.leg, view: () => this.chaseView(), leaveLabel: s("det.chase.leave"), onLeave: () => this.chaseScreen(), onAnswered: (c) => {
        this.chase = Vu(this.chase, c.result.correct, c.result.score), c.result.correct || (this.chaseNotice = { kind: "hazy", place: "", back: "" });
      }, effect: (c) => c.result.correct ? { text: s("det.chase.effect.right"), tone: "good" } : { text: s("det.chase.effect.wrong"), tone: "bad" }, nextLabel: s("det.chase.next"), onNext: () => this.chaseScreen() });
    }
    go(e) {
      const s = this.session, n = this.section.chase, i = this.chase, r = I1(i, n, e, s.rng);
      if (this.chase = r.state, !r.right) return this.coldPlaces.add(e), this.chaseNotice = { kind: "cold", place: this.placeName(n, e), back: this.placeName(n, i.at) }, s.live(this.s("det.chase.cold", { place: this.placeName(n, e), back: this.placeName(n, i.at) })), this.chaseScreen();
      if (this.coldPlaces = /* @__PURE__ */ new Set(), r.state.caught) return this.caught();
      this.chaseNotice = { kind: "warm", place: this.placeName(n, e), back: "" }, this.chaseScreen();
    }
    caught() {
      const e = this.session, s = this.s, n = this.section.chase, i = this.chase, r = M1(i), o = e.recordUnit(n.unit ? { unitId: n.unit } : { boss: true }, r);
      this.save({ ...this.saved(), caught: true }), e.playCue(n.unit ? "unit-complete" : "boss"), this.chaseNotice = null;
      const a = Math.round(r * 100), c = o.unlocked.map((u) => e.unitTitle(u)), l = d("section", { class: "caught-screen det-solved det-caught" }, d("p", { class: "det-stamp", "aria-hidden": "true" }, s("det.chase.caught.tag")), d("h1", { class: "screen-title", tabindex: "-1", testid: "caught-title" }, s("det.caught.title")), d("p", { class: "subject", testid: "caught-text" }, s("det.caught.text", { who: R1(e.t(n.suspect)), place: this.placeName(n, dl(n)) })), e.stars(o.stars, "chase-stars"), d("p", { class: "big-number", testid: "chase-accuracy" }, s("det.caught.accuracy", { n: a })), d("p", { class: "det-note", testid: "caught-clock" }, s("det.caught.clock", { time: is(i.hours) })), d("p", { class: "det-note", testid: "caught-cold" }, s("det.caught.cold", { n: i.cold })), c.length > 0 ? d("p", { class: "message", testid: "caught-unlocked" }, s("det.solved.unlocked", { units: c.join(", ") })) : null, d("div", { class: "det-facts" }, d("h2", { class: "det-h2" }, s("det.caught.facts")), d("ol", { class: "det-trail", testid: "caught-trail" }, i.trail.map((u) => d("li", {}, this.placeName(n, u))))), d("div", { class: "actions actions-center" }, T("to-office", s("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o.stars < 3 ? T("chase-again", s("det.caught.again"), () => this.restartChase(), { class: "btn btn-big" }) : null));
      e.render("caught", l, { ...n.unit ? { unitId: n.unit } : {}, view: { stars: o.stars, accuracy: a, hours: i.hours, clock: is(i.hours), cold: i.cold, trail: i.trail, unlocked: o.unlocked } });
    }
    restartChase() {
      this.chase = null, this.startChase();
    }
    end() {
      var _a3, _b3;
      const e = this.session, s = this.s;
      e.finish(), this.disposeCork();
      const n = this.rooms(), i = this.saved(), r = n.filter((o) => i.solved.includes(o.id)).length;
      e.render("end", Us(e, { title: s("det.end.title"), sub: s("det.end.sub"), stats: d("p", { class: "subject", testid: "end-rooms" }, s("det.end.rooms", { n: r, total: n.length })), onAgain: () => this.office(), onTitle: () => this.title() }), { view: { solved: r, total: n.length, caught: i.caught, final: (_b3 = (_a3 = Fw(this.section)) == null ? void 0 : _a3.id) != null ? _b3 : null } });
    }
  }
  const Ju = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Yu, mount(e) {
      t = new L1(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), C1 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function Z1(t, e, s) {
    const n = s.filter((r) => r.id !== e && r.title.trim().length >= 3).map((r) => ({ id: r.id, title: r.title.trim() })).sort((r, o) => o.title.length - r.title.length), i = /* @__PURE__ */ new Set();
    return t.map((r) => {
      const o = [];
      for (const l of n) {
        if (i.has(l.id)) continue;
        const h = new RegExp("(?<![\\p{L}\\p{N}])".concat(C1(l.title), "(?![\\p{L}\\p{N}])"), "iu").exec(r);
        if (!h) continue;
        const p = h.index, f = p + h[0].length;
        o.some((m) => p < m.end && f > m.start) || (o.push({ start: p, end: f, id: l.id }), i.add(l.id));
      }
      o.sort((l, u) => l.start - u.start);
      const a = [];
      let c = 0;
      for (const l of o) l.start > c && a.push({ text: r.slice(c, l.start) }), a.push({ text: r.slice(l.start, l.end), link: l.id }), c = l.end;
      return c < r.length && a.push({ text: r.slice(c) }), a.length > 0 ? a : [{ text: r }];
    });
  }
  const U1 = (t) => [...new Set(t.flat().flatMap((e) => e.link ? [e.link] : []))], Ur = (t) => Pe(t, { fold: true });
  function Qu(t, e, s = 8) {
    const n = Ur(t);
    if (n.replace(/ /g, "").length < 2) return [];
    const i = n.split(" ").filter(Boolean), r = [];
    for (const o of e) {
      const a = Ur(o.title), c = a.split(" ");
      let l = 0;
      a === n ? l = 120 : a.startsWith(n) ? l = 100 : c.some((f) => f.startsWith(n)) ? l = 80 : a.includes(n) ? l = 60 : i.every((f) => a.includes(f)) && (l = 50);
      let u = "";
      const p = o.paragraphs.flatMap((f) => f.split(new RegExp("(?<=[.!?])\\s+"))).find((f) => i.every((m) => Ur(f).includes(m)));
      p && (u = p.length > 150 ? "".concat(p.slice(0, 147).trimEnd(), "...") : p, l === 0 && (l = 20)), l > 0 && r.push({ id: o.id, score: l, snippet: l >= 50 ? "" : u });
    }
    return r.sort((o, a) => a.score - o.score).slice(0, s);
  }
  function Xu(t, e) {
    const n = [...t.title.split(/\s+/).filter((i) => i.replace(/[^\p{L}\p{N}]/gu, "").length >= 3).sort((i, r) => r.length - i.length), t.title];
    for (const i of n) if (Qu(i, e).some((r) => r.id === t.id)) return i.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
    return t.title;
  }
  const ed = () => ({ found: [], read: [] }), Hn = (t, e) => Array.isArray(t) ? [...new Set(t.filter((s) => typeof s == "string" && e.has(s)))] : [];
  function B1(t, e, s, n = /* @__PURE__ */ new Set()) {
    if (typeof t != "object" || t === null) return ed();
    const i = t, r = { found: Hn(i.found, e), read: Hn(i.read, s) }, o = i.reader;
    if (typeof o == "object" && o !== null) {
      const c = o, l = typeof c.chapter == "string" && s.has(c.chapter) ? c.chapter : void 0, u = typeof c.scroll == "number" && Number.isFinite(c.scroll) ? Math.min(1, Math.max(0, c.scroll)) : 0;
      r.reader = { ...l ? { chapter: l } : {}, scroll: u, done: Hn(c.done, s) };
    }
    const a = Hn(i.glossOff, n);
    return a.length > 0 && (r.glossOff = a), r;
  }
  const F1 = (t, e) => t.found.includes(e) ? t : { ...t, found: [...t.found, e] }, td = (t, e) => t.read.includes(e) ? t : { ...t, read: [...t.read, e] };
  function K1(t, e, s) {
    var _a3;
    const n = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] }, i = Math.min(1, Math.max(0, s));
    return n.chapter === e && Math.abs(n.scroll - i) < 5e-3 ? t : { ...t, reader: { ...n, chapter: e, scroll: i } };
  }
  function q1(t, e) {
    var _a3;
    const s = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] };
    return s.done.includes(e) ? t : { ...t, reader: { ...s, done: [...s.done, e] } };
  }
  function G1(t, e, s) {
    var _a3;
    const n = (_a3 = t.glossOff) != null ? _a3 : [];
    if (s) {
      if (!n.includes(e)) return t;
      const i = n.filter((a) => a !== e), { glossOff: r, ...o } = t;
      return i.length > 0 ? { ...o, glossOff: i } : o;
    }
    return n.includes(e) ? t : { ...t, glossOff: [...n, e] };
  }
  const sd = (t, e) => "".concat(t, "/").concat(e), W1 = { en: { "enc.tagline": "An illustrated encyclopedia to explore", "enc.open": "Open the book", "enc.continue": "Continue reading", "enc.nav.label": "Parts of the book", "enc.nav.title": "Title page", "enc.nav.index": "Index", "enc.nav.timeline": "Timeline", "enc.nav.map": "Map", "enc.nav.codex": "Codex", "enc.nav.hunts": "Hunts", "enc.masthead.sub": "Browse the articles, follow the links, then go hunting for the answers.", "enc.stat.found": "Collected", "enc.stat.stars": "Stars", "enc.stat.read": "Read", "enc.search.label": "Search the encyclopedia", "enc.search.placeholder": "A word, then Enter", "enc.search.none": 'No article matches "{q}".', "enc.search.count": "{n} found. Press Enter to open the first.", "enc.search.results": "Search results", "enc.index": "Index of articles", "enc.chapter": "Chapter {n}", "enc.locked": 'The hunts of this chapter open when you have mastered "{unit}". The articles are free to read.', "enc.readMark": "read", "enc.other": "More articles", "enc.plate": "Plate", "enc.back": "Back", "enc.seeAlso": "See also", "enc.sources": "Sources", "enc.openSource": "Open the source in a new tab", "enc.audio.play": "Listen", "enc.audio.stop": "Stop listening", "reader.listen": "Listen to paragraph {n}", "reader.listen.stop": "Stop paragraph {n}", "reader.listenAll": "Listen to the whole text", "reader.listenAll.stop": "Stop listening", "enc.runhead": "Article", "enc.collect": "Collect: {name}", "enc.collect.hint": "This page answers your clue.", "enc.clue.label": "Clue {n} of {total}", "enc.clue.bar": "Your hunt: {title}", "enc.clue.retry": "Back again. Read this page more closely.", "enc.clue.drop": "Put the hunt aside", "enc.tl.title": "Timeline", "enc.tl.intro": "Events along a ruler, true to scale. Use the left and right arrow keys to move between them.", "enc.tl.box": "Timeline of events", "enc.tl.read": "Read the article", "enc.tl.empty": "There are no dated events yet.", "enc.bc": "BC", "enc.map.title": "Map", "enc.map.intro": "Brass pins mark the places of the articles. Choose a pin, or a name from the list below it.", "enc.map.places": "Places on this map", "enc.map.none": "No places are marked on this map yet.", "enc.map.box": "The map", "enc.codex.title": "Codex", "enc.codex.intro": "Everything you have collected on your hunts, and the fact each one taught you.", "enc.codex.count": "{found} of {total} collected", "enc.codex.unknown": "Not found yet", "enc.codex.taught": "It taught you", "enc.codex.read": 'Read "{title}"', "enc.codex.empty": "Start a hunt to fill this page.", "enc.hunts.title": "Scavenger hunts", "enc.hunts.intro": "Each hunt gives you a clue. Find the article, collect the thing, and answer its question. Read first: the answer is in the article.", "enc.hunt.clues": "Clues: {n}", "enc.hunt.found": "{found} of {n} collected", "enc.hunt.start": "Start the hunt", "enc.hunt.again": "Hunt again", "enc.hunt.locked": 'Locked: master "{unit}" first.', "enc.hunt.empty": "No clues in this hunt.", "enc.hunt.final": "The grand hunt", "enc.hunt.final.intro": "Clues from every chapter, mixed up. Show that you remember.", "enc.hunt.final.locked": "Opens when every chapter is mastered.", "enc.hunt.auto": "Hunt: {unit}", "enc.hunt.auto.intro": "Find the pages and collect what they hold.", "enc.auto.clue": "Find the article about {title}.", "enc.auto.name": "Bookmark: {title}", "enc.res.title": "The hunt is over", "enc.res.good": "Well hunted! You collected {n} of {total}.", "enc.res.more": "You collected {n} of {total}. Read the articles again and hunt once more to master this chapter.", "enc.res.unlocked": "New hunts are open: {units}.", "enc.res.final": "The grand hunt is done. The book is yours.", "enc.finish": "Close the book", "enc.hud": "Hunt: {title}", "enc.lead": "To collect: {name}", "enc.q.back": "Back to the article", "enc.turn": "Turn the page", "enc.fx.found": "Collected: {name}. It is in your codex.", "enc.fx.again": "{name} is already in your codex. This answer counts for the hunt.", "enc.fx.missed": "Not collected yet. Read the article again: the clue comes back.", "enc.end.title": "Encyclopedia mastered!", "enc.end.sub": "You hunted through every chapter of the book.", "enc.end.stats": "Collected {found} of {total}. Articles read: {read} of {articles}." }, hr: { "enc.tagline": "Ilustrirana enciklopedija za istraživanje", "enc.open": "Otvori knjigu", "enc.continue": "Nastavi čitati", "enc.nav.label": "Dijelovi knjige", "enc.nav.title": "Naslovnica", "enc.nav.index": "Kazalo", "enc.nav.timeline": "Vremenska crta", "enc.nav.map": "Karta", "enc.nav.codex": "Kodeks", "enc.nav.hunts": "Potrage", "enc.masthead.sub": "Listaj članke, prati poveznice, a zatim kreni u potragu za odgovorima.", "enc.stat.found": "Skupljeno", "enc.stat.stars": "Zvjezdice", "enc.stat.read": "Pročitano", "enc.search.label": "Pretraži enciklopediju", "enc.search.placeholder": "Riječ, pa Enter", "enc.search.none": 'Nijedan članak ne odgovara upitu "{q}".', "enc.search.count": "Pronađeno: {n}. Pritisni Enter da otvoriš prvi.", "enc.search.results": "Rezultati pretrage", "enc.index": "Kazalo članaka", "enc.chapter": "Poglavlje {n}", "enc.locked": 'Potrage ovog poglavlja otvaraju se kad savladaš cjelinu "{unit}". Članke možeš čitati slobodno.', "enc.readMark": "pročitano", "enc.other": "Ostali članci", "enc.plate": "Ilustracija", "enc.back": "Natrag", "enc.seeAlso": "Vidi i", "enc.sources": "Izvori", "enc.openSource": "Otvori izvor u novoj kartici", "enc.audio.play": "Poslušaj", "enc.audio.stop": "Zaustavi slušanje", "reader.listen": "Poslušaj odlomak {n}", "reader.listen.stop": "Zaustavi odlomak {n}", "reader.listenAll": "Poslušaj cijeli tekst", "reader.listenAll.stop": "Zaustavi slušanje", "enc.runhead": "Članak", "enc.collect": "Uzmi: {name}", "enc.collect.hint": "Ova stranica odgovara na tvoj trag.", "enc.clue.label": "Trag {n} od {total}", "enc.clue.bar": "Tvoja potraga: {title}", "enc.clue.retry": "Opet na redu. Pročitaj ovu stranicu pažljivije.", "enc.clue.drop": "Odloži potragu", "enc.tl.title": "Vremenska crta", "enc.tl.intro": "Događaji na ravnalu, u mjerilu. Lijevom i desnom strelicom prelaziš s jednog na drugi.", "enc.tl.box": "Vremenska crta događaja", "enc.tl.read": "Pročitaj članak", "enc.tl.empty": "Još nema datiranih događaja.", "enc.bc": "pr. Kr.", "enc.map.title": "Karta", "enc.map.intro": "Mjedene pribadače označavaju mjesta iz članaka. Odaberi pribadaču ili ime s popisa ispod karte.", "enc.map.places": "Mjesta na karti", "enc.map.none": "Na ovoj karti još nema označenih mjesta.", "enc.map.box": "Karta", "enc.codex.title": "Kodeks", "enc.codex.intro": "Sve što si skupio u potragama i činjenica koju te je svaki predmet naučio.", "enc.codex.count": "Skupljeno {found} od {total}", "enc.codex.unknown": "Još nije pronađeno", "enc.codex.taught": "Naučio te je", "enc.codex.read": 'Pročitaj "{title}"', "enc.codex.empty": "Započni potragu da ispuniš ovu stranicu.", "enc.hunts.title": "Potrage", "enc.hunts.intro": "Svaka potraga daje trag. Pronađi članak, uzmi predmet i odgovori na njegovo pitanje. Prvo čitaj: odgovor je u članku.", "enc.hunt.clues": "Tragova: {n}", "enc.hunt.found": "Skupljeno {found} od {n}", "enc.hunt.start": "Kreni u potragu", "enc.hunt.again": "Potraži ponovno", "enc.hunt.locked": 'Zaključano: prvo savladaj cjelinu "{unit}".', "enc.hunt.empty": "Ova potraga nema tragova.", "enc.hunt.final": "Velika potraga", "enc.hunt.final.intro": "Tragovi iz svih poglavlja, pomiješani. Pokaži da pamtiš.", "enc.hunt.final.locked": "Otvara se kad su sva poglavlja savladana.", "enc.hunt.auto": "Potraga: {unit}", "enc.hunt.auto.intro": "Pronađi stranice i skupi što skrivaju.", "enc.auto.clue": "Pronađi članak o temi: {title}.", "enc.auto.name": "Straničnik: {title}", "enc.res.title": "Potraga je gotova", "enc.res.good": "Dobra potraga! Skupio/la si {n} od {total}.", "enc.res.more": "Skupio/la si {n} od {total}. Pročitaj članke ponovno i potraži još jednom da savladaš ovo poglavlje.", "enc.res.unlocked": "Otvorene su nove potrage: {units}.", "enc.res.final": "Velika potraga je gotova. Knjiga je tvoja.", "enc.finish": "Zatvori knjigu", "enc.hud": "Potraga: {title}", "enc.lead": "Za uzeti: {name}", "enc.q.back": "Natrag na članak", "enc.turn": "Okreni stranicu", "enc.fx.found": "Skupljeno: {name}. Nalazi se u tvom kodeksu.", "enc.fx.again": "{name} već imaš u kodeksu. Ovaj odgovor se ipak računa za potragu.", "enc.fx.missed": "Još nije skupljeno. Pročitaj članak ponovno: trag se vraća.", "enc.end.title": "Enciklopedija savladana!", "enc.end.sub": "Proveo/la si potragu kroz svako poglavlje knjige.", "enc.end.stats": "Skupljeno {found} od {total}. Pročitanih članaka: {read} od {articles}." }, de: { "enc.tagline": "Eine bebilderte Enzyklopädie zum Entdecken", "enc.open": "Das Buch öffnen", "enc.continue": "Weiterlesen", "enc.nav.label": "Teile des Buches", "enc.nav.title": "Titelseite", "enc.nav.index": "Register", "enc.nav.timeline": "Zeitleiste", "enc.nav.map": "Karte", "enc.nav.codex": "Kodex", "enc.nav.hunts": "Schnitzeljagden", "enc.masthead.sub": "Blättere durch die Artikel, folge den Verweisen und gehe dann auf die Suche nach den Antworten.", "enc.stat.found": "Gesammelt", "enc.stat.stars": "Sterne", "enc.stat.read": "Gelesen", "enc.search.label": "Die Enzyklopädie durchsuchen", "enc.search.placeholder": "Ein Wort, dann Enter", "enc.search.none": "Kein Artikel passt zu „{q}“.", "enc.search.count": "{n} gefunden. Drücke Enter, um den ersten zu öffnen.", "enc.search.results": "Suchergebnisse", "enc.index": "Artikelregister", "enc.chapter": "Kapitel {n}", "enc.locked": "Die Schnitzeljagden dieses Kapitels öffnen sich, wenn du „{unit}“ gemeistert hast. Die Artikel kannst du jederzeit lesen.", "enc.readMark": "gelesen", "enc.other": "Weitere Artikel", "enc.plate": "Tafel", "enc.back": "Zurück", "enc.seeAlso": "Siehe auch", "enc.sources": "Quellen", "enc.openSource": "Die Quelle in einem neuen Tab öffnen", "enc.audio.play": "Anhören", "enc.audio.stop": "Anhören beenden", "reader.listen": "Absatz {n} anhören", "reader.listen.stop": "Absatz {n} anhalten", "reader.listenAll": "Den ganzen Text anhören", "reader.listenAll.stop": "Anhören beenden", "enc.runhead": "Artikel", "enc.collect": "Sammeln: {name}", "enc.collect.hint": "Diese Seite beantwortet deinen Hinweis.", "enc.clue.label": "Hinweis {n} von {total}", "enc.clue.bar": "Deine Suche: {title}", "enc.clue.retry": "Wieder da. Lies diese Seite genauer.", "enc.clue.drop": "Die Suche beiseitelegen", "enc.tl.title": "Zeitleiste", "enc.tl.intro": "Ereignisse an einem Lineal, maßstabsgetreu. Mit den Pfeiltasten links und rechts wechselst du zwischen ihnen.", "enc.tl.box": "Zeitleiste der Ereignisse", "enc.tl.read": "Den Artikel lesen", "enc.tl.empty": "Es gibt noch keine datierten Ereignisse.", "enc.bc": "v. Chr.", "enc.map.title": "Karte", "enc.map.intro": "Messingnadeln markieren die Orte der Artikel. Wähle eine Nadel oder einen Namen aus der Liste darunter.", "enc.map.places": "Orte auf dieser Karte", "enc.map.none": "Auf dieser Karte sind noch keine Orte markiert.", "enc.map.box": "Die Karte", "enc.codex.title": "Kodex", "enc.codex.intro": "Alles, was du auf deinen Suchen gesammelt hast, und was dir jedes Stück beigebracht hat.", "enc.codex.count": "{found} von {total} gesammelt", "enc.codex.unknown": "Noch nicht gefunden", "enc.codex.taught": "Das hat es dich gelehrt", "enc.codex.read": "„{title}“ lesen", "enc.codex.empty": "Starte eine Suche, um diese Seite zu füllen.", "enc.hunts.title": "Schnitzeljagden", "enc.hunts.intro": "Jede Jagd gibt dir einen Hinweis. Finde den Artikel, sammle das Gesuchte und beantworte die Frage dazu. Lies zuerst: Die Antwort steht im Artikel.", "enc.hunt.clues": "Hinweise: {n}", "enc.hunt.found": "{found} von {n} gesammelt", "enc.hunt.start": "Die Jagd starten", "enc.hunt.again": "Noch einmal jagen", "enc.hunt.locked": "Gesperrt: Meistere zuerst „{unit}“.", "enc.hunt.empty": "Diese Jagd hat keine Hinweise.", "enc.hunt.final": "Die große Jagd", "enc.hunt.final.intro": "Hinweise aus allen Kapiteln, durcheinander. Zeige, dass du dich erinnerst.", "enc.hunt.final.locked": "Öffnet sich, wenn alle Kapitel gemeistert sind.", "enc.hunt.auto": "Jagd: {unit}", "enc.hunt.auto.intro": "Finde die Seiten und sammle, was sie enthalten.", "enc.auto.clue": "Finde den Artikel über {title}.", "enc.auto.name": "Lesezeichen: {title}", "enc.res.title": "Die Jagd ist vorbei", "enc.res.good": "Gut gejagt! Du hast {n} von {total} gesammelt.", "enc.res.more": "Du hast {n} von {total} gesammelt. Lies die Artikel noch einmal und jage erneut, um dieses Kapitel zu meistern.", "enc.res.unlocked": "Neue Jagden sind offen: {units}.", "enc.res.final": "Die große Jagd ist geschafft. Das Buch gehört dir.", "enc.finish": "Das Buch schließen", "enc.hud": "Jagd: {title}", "enc.lead": "Zu sammeln: {name}", "enc.q.back": "Zurück zum Artikel", "enc.turn": "Umblättern", "enc.fx.found": "Gesammelt: {name}. Es ist in deinem Kodex.", "enc.fx.again": "{name} ist schon in deinem Kodex. Diese Antwort zählt für die Jagd.", "enc.fx.missed": "Noch nicht gesammelt. Lies den Artikel noch einmal: Der Hinweis kommt wieder.", "enc.end.title": "Enzyklopädie gemeistert!", "enc.end.sub": "Du hast jedes Kapitel des Buches durchjagt.", "enc.end.stats": "{found} von {total} gesammelt. Gelesene Artikel: {read} von {articles}." } }, H1 = (t) => {
    try {
      return new URL(t).hostname.replace(/^www\./, "");
    } catch (e) {
      return t;
    }
  };
  function V1(t, e) {
    var _a3, _b3;
    const s = t.s, n = t.arts.get(e);
    if (!n) return d("div", {});
    const i = n.unit ? s.unitTitle(n.unit) : "", r = n.assetId ? s.pack.assets.find((_) => _.id === n.assetId) : void 0, o = r ? s.data.assets[r.id] : void 0, a = t.pinned(), c = a && a.step.article === e ? a : null, l = c ? d("div", { class: "enc-collect" }, d("span", { class: "enc-collect-hint" }, c.retry ? s.s("enc.clue.retry") : s.s("enc.collect.hint")), T("collect-".concat(c.step.id), d("span", { class: "enc-seal-label" }, s.s("enc.collect", { name: t.collectibleName(c.step) })), () => t.collect(c.step), { class: "btn btn-primary btn-big enc-seal", "data-autofocus": "" })) : null, u = r && o && r.kind === "image" ? d("figure", { class: "enc-figure", testid: "article-figure" }, d("div", { class: "enc-figure-frame" }, d("img", { src: o, alt: s.t(r.alt) })), d("figcaption", {}, s.t(r.alt))) : null, h = (_a3 = s.pack.extensions.narration) != null ? _a3 : {}, p = r && o && r.kind === "audio" ? o : s.data.assets[(_b3 = h["art.".concat(e, ".body")]) != null ? _b3 : ""];
    let f = null;
    if (p) {
      const _ = (z) => "".concat(z ? "■" : "▶", " ").concat(s.s(z ? "enc.audio.stop" : "enc.audio.play"));
      f = T("article-audio", _(false), () => {
        if (t.audio) {
          t.stopAudio(), f && (f.textContent = _(false));
          return;
        }
        try {
          const z = new Audio(p);
          s.audio.voice(z), t.audio = z, z.onended = () => {
            t.audio === z && (t.audio = null), f && (f.textContent = _(false)), s.audio.duck(false);
          }, z.play().then(() => s.audio.duck(true), () => {
          }), f && (f.textContent = _(true));
        } catch (e2) {
          t.audio = null;
        }
      }, { class: "btn btn-small enc-audio", "aria-describedby": "enc-audio-desc" });
    }
    const m = n.related.filter((_) => t.arts.has(_)), g = new Map(s.pack.factbase.map((_) => [_.id, _])), k = n.citations.map((_) => g.get(_)).filter((_) => !!_), b = t.glossWords(e), v = kr(s.ui), w = new Set(b.filter((_) => t.glossOff().has("".concat(e, "/").concat(_.id))).map((_) => _.id)), y = (_, z) => T("link-".concat(_), z, () => t.article(_, () => t.article(e)), { class: "enc-xlink" }), $ = mr(t.segments(e)), x = gr($.map((_) => _.runs), b);
    return d("div", { class: "enc-article" }, d("div", { class: "enc-toolbar" }, T("back", "‹ ".concat(s.s("enc.back")), () => t.back(), { class: "btn btn-small btn-ghost" })), d("article", { class: "enc-spread", testid: "article", "data-article": e }, d("div", { class: "enc-text" }, d("p", { class: "enc-runhead" }, d("span", {}, i || s.s("enc.runhead")), d("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), d("span", {}, s.courseTitle())), d("h1", { class: "screen-title enc-article-title", tabindex: "-1", testid: "article-title" }, n.title), d("p", { class: "enc-rule", "aria-hidden": "true" }), l, d("div", { class: "enc-body gloss-scope", testid: "article-body", ...b.length > 0 && s.pack.targetLang ? { lang: s.pack.targetLang } : {} }, x.map((_, z) => {
      var _a4;
      return br(_, v, y, w, (_a4 = $[z]) == null ? void 0 : _a4.heading);
    }), b.length > 0 ? v.el : null)), d("aside", { class: "enc-plates" }, u, f ? d("div", { class: "enc-audio-wrap" }, f, d("span", { class: "sr-only", id: "enc-audio-desc" }, r ? s.t(r.alt) : "")) : null, m.length > 0 ? d("section", { class: "enc-related", testid: "related" }, d("h2", {}, s.s("enc.seeAlso")), d("ul", {}, m.map((_) => d("li", {}, T("related-".concat(_), t.articleTitle(_), () => t.article(_, () => t.article(e)), { class: "enc-related-btn" }))))) : null, k.length > 0 ? d("section", { class: "enc-sources", testid: "citations" }, d("h2", {}, s.s("enc.sources")), d("ul", {}, k.map((_) => d("li", { testid: "citation-".concat(_.id) }, d("span", { class: "enc-source-name" }, _.source), _.claim && s.text.hasText(_.claim) ? d("span", { class: "enc-source-claim" }, s.t(_.claim)) : null, _.url ? d("a", { class: "enc-source-link", href: _.url, target: "_blank", rel: "noopener noreferrer", testid: "citation-link-".concat(_.id) }, H1(_.url), d("span", { class: "sr-only" }, " (".concat(s.s("enc.openSource"), ")"))) : null)))) : null)));
  }
  function nd(t) {
    const e = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    let s = "", n = Math.max(1, Math.floor(t));
    for (const [i, r] of e) for (; n >= i; ) s += r, n -= i;
    return s;
  }
  function Y1(t) {
    const e = t.s, s = t.statusCounts(), n = (b, v, w) => d("span", { class: "enc-stat", testid: w }, d("span", { class: "enc-stat-label" }, b), d("b", { class: "enc-stat-value" }, v)), i = d("ul", { class: "enc-results", testid: "search-results" }), r = d("p", { class: "enc-search-status", id: "enc-search-status", role: "status", testid: "search-status" }), o = (b) => {
      const v = t.search(b);
      Ts(i);
      for (const y of v) i.appendChild(d("li", {}, d("button", { type: "button", class: "enc-result", testid: "result-".concat(y.id), onclick: () => t.article(y.id, () => t.explore()) }, d("span", { class: "enc-result-title" }, t.articleTitle(y.id)), y.snippet ? d("span", { class: "enc-result-snippet" }, y.snippet) : null)));
      const w = b.trim();
      return r.textContent = w.replace(/\s/g, "").length < 2 ? "" : v.length === 0 ? e.s("enc.search.none", { q: w }) : e.s("enc.search.count", { n: v.length }), v;
    }, a = d("input", { type: "search", class: "enc-search-input", id: "enc-search", testid: "search", autocomplete: "off", spellcheck: "false", enterkeyhint: "search", placeholder: e.s("enc.search.placeholder"), "aria-describedby": "enc-search-status", value: t.query, oninput: (b) => {
      t.query = b.target.value, o(t.query);
    }, onkeydown: (b) => {
      const v = b;
      if (v.key !== "Enter") return;
      v.preventDefault();
      const w = o(t.query)[0];
      w && t.article(w.id, () => t.explore());
    } }), c = d("form", { class: "enc-search", role: "search", onsubmit: (b) => b.preventDefault() }, d("label", { class: "enc-search-label", for: "enc-search" }, e.s("enc.search.label")), d("div", { class: "enc-search-box" }, d("span", { class: "enc-search-glass", "aria-hidden": "true" }), a), r, d("div", { class: "enc-results-wrap", "aria-label": e.s("enc.search.results"), role: "group" }, i));
    t.query && o(t.query);
    const l = e.pack.assets.find((b) => b.kind === "image" && e.data.assets[b.id]), u = l ? d("figure", { class: "enc-plate", testid: "plate" }, d("div", { class: "enc-plate-frame" }, d("img", { src: e.data.assets[l.id], alt: e.t(l.alt), loading: "lazy" })), d("figcaption", {}, d("span", { class: "enc-plate-no" }, e.s("enc.plate")), " ", e.t(l.alt))) : null, h = e.units(), p = /* @__PURE__ */ new Set(), f = (b) => {
      p.add(b);
      const v = t.data.read.includes(b);
      return d("li", {}, d("button", { type: "button", class: "enc-entry", testid: "article-".concat(b), "data-read": v ? "true" : null, onclick: () => t.article(b, () => t.explore()) }, d("span", { class: "enc-entry-title" }, t.articleTitle(b)), d("span", { class: "enc-entry-leader", "aria-hidden": "true" }), v ? d("span", { class: "enc-entry-read" }, d("span", { "aria-hidden": "true" }, "✓"), d("span", { class: "sr-only" }, " ".concat(e.s("enc.readMark")))) : null));
    }, m = h.flatMap((b, v) => {
      const w = t.articleList().filter((_) => _.unit === b.id).map((_) => _.id);
      if (w.length === 0) return [];
      const $ = t.model.hunts.filter((_) => _.unit === b.id).length > 0 && !e.isUnlocked(b.id), x = b.requires.find((_) => !e.isMastered(_));
      return [d("section", { class: "enc-chapter", testid: "chapter-".concat(b.id), "data-locked": $ ? "true" : null }, d("h2", { class: "enc-chapter-title" }, d("span", { class: "enc-numeral", "aria-hidden": "true" }, nd(v + 1)), d("span", { class: "enc-chapter-name" }, e.unitTitle(b.id))), $ ? d("p", { class: "enc-chapter-note", testid: "chapter-locked-".concat(b.id) }, d("span", { "aria-hidden": "true" }, "🔒 "), e.s("enc.locked", { unit: x ? e.unitTitle(x) : e.unitTitle(b.id) })) : null, d("ul", { class: "enc-entries" }, w.map(f)))];
    }), g = t.articleList().filter((b) => !p.has(b.id) && !h.some((v) => v.id === b.unit)), k = g.length > 0 ? d("section", { class: "enc-chapter", testid: "chapter-other" }, d("h2", { class: "enc-chapter-title" }, d("span", { class: "enc-chapter-name" }, e.s("enc.other"))), d("ul", { class: "enc-entries" }, g.map((b) => f(b.id)))) : null;
    return d("div", { class: "enc-explore" }, d("header", { class: "enc-masthead" }, d("p", { class: "enc-eyebrow" }, e.pack.subject.charAt(0).toLocaleUpperCase() + e.pack.subject.slice(1)), d("h1", { class: "screen-title enc-title", tabindex: "-1", testid: "explore-title" }, e.courseTitle()), d("p", { class: "enc-orn", "aria-hidden": "true" }, "❦"), d("p", { class: "enc-sub" }, e.s("enc.masthead.sub")), d("p", { class: "enc-stats", testid: "status" }, n(e.s("enc.stat.found"), "".concat(s.found, " / ").concat(s.total), "status-found"), n(e.s("enc.stat.stars"), "".concat(s.stars, " / ").concat(s.maxStars), "status-stars"), n(e.s("enc.stat.read"), "".concat(s.read, " / ").concat(s.articles), "status-read"))), d("div", { class: "enc-columns" }, d("aside", { class: "enc-side" }, c, u), d("div", { class: "enc-indexwrap" }, d("h2", { class: "sr-only" }, e.s("enc.index")), d("div", { class: "enc-index" }, m, k))));
  }
  function J1(t) {
    const e = t.pinned(), s = t.hunt;
    if (!e || !s) return null;
    const n = t.s;
    return d("div", { class: "enc-clue".concat(e.retry ? " is-retry" : ""), role: "group", "aria-label": n.s("enc.clue.bar", { title: s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt) }), testid: "clue-bar", "data-step": e.step.id }, d("span", { class: "enc-clue-pin", "aria-hidden": "true" }), d("div", { class: "enc-clue-main" }, d("span", { class: "enc-clue-label" }, "".concat(s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt), " · ").concat(n.s("enc.clue.label", { n: e.n, total: e.total }))), d("p", { class: "enc-clue-text", testid: "clue" }, t.stepClue(e.step)), e.retry ? d("span", { class: "tag tag-retry enc-clue-retry", testid: "clue-retry" }, n.s("enc.clue.retry")) : null), T("clue-drop", n.s("enc.clue.drop"), () => t.dropHunt(), { class: "btn btn-small btn-ghost enc-clue-drop" }));
  }
  function Q1(t, e, s) {
    const n = t.s;
    return d("div", { class: "enc-hud", testid: "hunt-hud" }, d("span", { class: "enc-hud-title" }, n.s("enc.hud", { title: e.final ? n.s("enc.hunt.final") : t.huntTitle(e.hunt) })), d("span", { class: "enc-hud-step" }, n.s("enc.clue.label", { n: s, total: e.steps.length })), d("span", { class: "enc-hud-pips", role: "img", "aria-label": n.s("enc.hunt.found", { found: e.collected.length, n: e.steps.length }) }, e.steps.map((i) => d("span", { class: "enc-hud-pip".concat(e.collected.includes(i.id) ? " is-found" : ""), "aria-hidden": "true" }))));
  }
  function X1(t) {
    const e = t.s, s = t.statusCounts(), n = t.model.hunts.map((i) => ({ hunt: i, steps: t.stepsOf(i) })).filter((i) => i.steps.length > 0).map((i) => d("section", { class: "enc-codex-group", "data-unit": i.hunt.unit }, d("h2", {}, e.unitTitle(i.hunt.unit)), d("ul", { class: "enc-codex-grid" }, i.steps.map((r) => t.found(r) ? d("li", { class: "enc-specimen is-found", testid: "codex-".concat(r.id), "data-found": "true" }, d("span", { class: "enc-medal", "aria-hidden": "true" }, "✦"), d("h3", { class: "enc-specimen-name" }, t.collectibleName(r)), d("p", { class: "enc-specimen-taught" }, d("span", { class: "enc-specimen-taught-label" }, "".concat(e.s("enc.codex.taught"), ": ")), t.taught(r)), T("codex-link-".concat(r.id), e.s("enc.codex.read", { title: t.articleTitle(r.article) }), () => t.article(r.article, () => t.codex()), { class: "btn btn-small enc-specimen-link" })) : d("li", { class: "enc-specimen is-unknown", testid: "codex-".concat(r.id), "data-found": "false" }, d("span", { class: "enc-medal", "aria-hidden": "true" }, "?"), d("p", { class: "enc-specimen-name" }, e.s("enc.codex.unknown")))))));
    return d("div", { class: "enc-codex" }, d("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "codex-title" }, e.s("enc.codex.title")), d("p", { class: "enc-part-intro" }, e.s("enc.codex.intro")), d("p", { class: "enc-codex-count", testid: "codex-count", "data-found": String(s.found), "data-total": String(s.total) }, e.s("enc.codex.count", { found: s.found, total: s.total })), s.found === 0 ? d("p", { class: "enc-codex-empty", testid: "codex-empty" }, e.s("enc.codex.empty")) : null, n);
  }
  function e$(t, e) {
    const s = t.s, n = s.units(), i = e ? d("div", { class: "enc-result".concat(e.stars >= 2 ? " is-good" : ""), role: "group", "aria-label": s.s("enc.res.title"), testid: "hunt-result", "data-stars": String(e.stars), "data-final": e.final ? "true" : "false", "data-collected": String(e.collected), "data-total": String(e.total) }, d("h2", { class: "enc-result-title" }, s.s("enc.res.title")), s.stars(e.stars, "hunt-result-stars"), d("p", { class: "enc-result-text" }, t.resultText(e))) : null, r = n.flatMap((l, u) => {
      const h = t.model.hunts.filter((m) => m.unit === l.id);
      if (h.length === 0) return [];
      const p = !s.isUnlocked(l.id), f = l.requires.find((m) => !s.isMastered(m));
      return [d("section", { class: "enc-hunt-chapter", "data-unit": l.id, "data-locked": p ? "true" : null, testid: "hunt-chapter-".concat(l.id) }, d("div", { class: "enc-hunt-chapter-head" }, d("h2", { class: "enc-chapter-title" }, d("span", { class: "enc-numeral", "aria-hidden": "true" }, nd(u + 1)), d("span", { class: "enc-chapter-name" }, s.unitTitle(l.id))), s.stars(s.unitStars(l.id), "hunt-stars-".concat(l.id))), h.map((m) => {
        const g = t.stepsOf(m), k = g.filter((w) => t.found(w)).length, b = t.isHuntOpen(m), v = t.huntIntro(m);
        return d("article", { class: "enc-hunt-card", "data-locked": b ? null : "true" }, d("h3", { class: "enc-hunt-title" }, t.huntTitle(m)), v ? d("p", { class: "enc-hunt-intro" }, v) : null, d("p", { class: "enc-hunt-meta" }, "".concat(s.s("enc.hunt.clues", { n: g.length }), " · ").concat(s.s("enc.hunt.found", { found: k, n: g.length }))), g.length === 0 ? d("p", { class: "enc-hunt-note" }, s.s("enc.hunt.empty")) : p ? d("p", { class: "enc-hunt-note", testid: "hunt-locked-".concat(m.id) }, d("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.locked", { unit: f ? s.unitTitle(f) : s.unitTitle(l.id) })) : null, T("hunt-".concat(m.id), k === g.length && g.length > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startHunt(m), { class: "btn btn-primary enc-hunt-go", ...b ? {} : { disabled: true }, "data-locked": b ? null : "true", "data-stars": String(s.unitStars(l.id)) }));
      }))];
    }), o = t.isFinalOpen(), a = t.finalSteps(), c = a.length > 0 ? d("section", { class: "enc-hunt-chapter enc-grand", "data-locked": o ? null : "true", testid: "hunt-chapter-final" }, d("div", { class: "enc-hunt-chapter-head" }, d("h2", { class: "enc-chapter-title" }, d("span", { class: "enc-numeral", "aria-hidden": "true" }, "★"), d("span", { class: "enc-chapter-name" }, s.s("enc.hunt.final"))), s.stars(s.bossStars(), "hunt-stars-final")), d("article", { class: "enc-hunt-card", "data-locked": o ? null : "true" }, d("p", { class: "enc-hunt-intro" }, s.s("enc.hunt.final.intro")), d("p", { class: "enc-hunt-meta" }, s.s("enc.hunt.clues", { n: a.length })), o ? null : d("p", { class: "enc-hunt-note", testid: "hunt-locked-final" }, d("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.final.locked")), T("hunt-final", s.bossStars() > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startFinal(), { class: "btn btn-primary enc-hunt-go", ...o ? {} : { disabled: true }, "data-locked": o ? null : "true", "data-stars": String(s.bossStars()) }))) : null;
    return d("div", { class: "enc-hunts" }, d("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "hunts-title" }, s.s("enc.hunts.title")), d("p", { class: "enc-part-intro" }, s.s("enc.hunts.intro")), i, s.bossStars() >= 1 ? d("div", { class: "actions" }, T("finish", s.s("enc.finish"), () => t.end(), { class: "btn btn-big" })) : null, r, c);
  }
  function t$(t) {
    let e = 1 / 0;
    for (let s = 0; s < t.length; s++) for (let n = s + 1; n < t.length; n++) {
      const i = t[s], r = t[n];
      e = Math.min(e, Math.hypot(i.x - r.x, i.y - r.y));
    }
    return e;
  }
  function s$(t, e, s = 34, n = 300) {
    const i = t$(t);
    return !Number.isFinite(i) || i <= 0 ? Math.min(e, n) : Math.round(Math.min(e, Math.max(n, e * s / i)));
  }
  function n$(t, e, s) {
    const n = s === "left" || s === "right", i = [...t].sort((a, c) => (n ? a.x - c.x || a.y - c.y : a.y - c.y || a.x - c.x) || a.id.localeCompare(c.id)), r = i.findIndex((a) => a.id === e);
    return i.length === 0 ? void 0 : i[(r + (s === "right" || s === "down" ? 1 : -1) + i.length) % i.length];
  }
  const i$ = (t, e, s) => ({ left: "".concat(Math.round(t.x / e * 1e4) / 100, "%"), top: "".concat(Math.round(t.y / s * 1e4) / 100, "%") }), Br = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 5e3];
  function r$(t, e = 9) {
    for (const s of Br) if (t / s <= e) return s;
    return Br[Br.length - 1];
  }
  function o$(t, e) {
    const s = Math.max(1, e - t), n = r$(s), i = n >= 10 ? n / 5 : n >= 2 ? n / 2 : n, r = [], o = Math.ceil(t / i) * i;
    for (let a = o; a <= e; a += i) a !== 0 && r.push({ year: a, major: a % n === 0 });
    return r;
  }
  function a$(t, e = {}) {
    var _a3, _b3, _c2;
    const s = (_a3 = e.card) != null ? _a3 : 150, n = (_b3 = e.gap) != null ? _b3 : 12, i = Math.round(s / 2) + 14, r = [...t].sort((v, w) => v.year - w.year || v.id.localeCompare(w.id)), o = r.length, a = Math.ceil(o / 2), c = Math.max((_c2 = e.minWidth) != null ? _c2 : 760, a * (s + n) + 2 * i - n), l = o > 0 ? r[0].year : 0, u = o > 0 ? r[o - 1].year : 0, h = Math.max(1, u - l), p = (c - 2 * i) / h, f = (v) => o === 1 || u === l ? c / 2 : i + (v - l) * p, m = r.map((v, w) => ({ id: v.id, year: v.year, tick: f(v.year), x: f(v.year), lane: w % 2 })), g = s + n;
    for (const v of [0, 1]) {
      const w = m.filter((y) => y.lane === v);
      for (let y = 0; y < w.length; y++) {
        const $ = w[y];
        $.x = Math.max(i, $.x), y > 0 && ($.x = Math.max($.x, w[y - 1].x + g));
      }
      for (let y = w.length - 1; y >= 0; y--) {
        const $ = w[y];
        $.x = Math.min(c - i, $.x), y < w.length - 1 && ($.x = Math.min($.x, w[y + 1].x - g));
      }
    }
    const k = (v) => l + (v - i) / p, b = o === 0 || u === l ? [] : o$(Math.floor(k(0)), Math.ceil(k(c))).map((v) => ({ year: v.year, x: i + (v.year - l) * p, major: v.major }));
    return { width: c, pad: i, events: m, ticks: b.filter((v) => v.x >= 0 && v.x <= c), min: l, max: u };
  }
  const id = (t, e) => t < 0 ? "".concat(-t, " ").concat(e) : String(t), Fr = 150, Vn = 440, Yn = 54;
  function c$(t) {
    var _a3, _b3;
    const e = t.s, s = t.model.timeline, n = a$(s.map((m) => ({ id: m.id, year: m.year })), { card: Fr }), i = new Map(s.map((m) => [m.id, m])), r = e.s("enc.bc"), o = Vn / 2;
    (!t.eventId || !i.has(t.eventId)) && (t.eventId = (_b3 = (_a3 = n.events[0]) == null ? void 0 : _a3.id) != null ? _b3 : null);
    const a = d("div", { class: "enc-tl-detail", role: "status", testid: "event-detail" }), c = (m) => {
      const g = i.get(m);
      return g ? g.whenKey && e.text.hasText(g.whenKey) ? e.t(g.whenKey) : id(g.year, r) : "";
    }, l = (m) => {
      const g = i.get(m);
      g && (t.eventId = m, a.replaceChildren(d("b", { class: "enc-tl-detail-year" }, c(m)), " ", d("span", { class: "enc-tl-detail-label" }, e.t(g.label)), ...g.text ? [" ", d("span", { class: "enc-tl-detail-text" }, e.t(g.text))] : []), a.setAttribute("data-event", m));
    }, u = de("svg", { class: "enc-tl-lines", width: n.width, height: Vn, viewBox: "0 0 ".concat(n.width, " ").concat(Vn), "aria-hidden": "true", focusable: "false" }, ...n.events.map((m) => de("path", { d: "M ".concat(m.tick, " ").concat(o, " L ").concat(m.x, " ").concat(o + (m.lane === 0 ? -Yn : Yn)) }))), h = d("div", { class: "enc-tl-ruler", "aria-hidden": "true", style: "top:".concat(o - 21, "px") }, n.ticks.map((m) => d("span", { class: "enc-tl-tick".concat(m.major ? " is-major" : ""), style: "left:".concat(m.x, "px") }, m.major ? d("span", { class: "enc-tl-tick-label" }, id(m.year, r)) : null)), n.events.map((m) => d("span", { class: "enc-tl-mark", style: "left:".concat(m.tick, "px") }))), p = n.events.map((m) => {
      const g = i.get(m.id);
      if (!g) return null;
      const k = !!g.article && t.arts.has(g.article);
      return T("event-".concat(g.id), [d("span", { class: "enc-tl-card-year" }, c(g.id)), d("span", { class: "enc-tl-card-label" }, e.t(g.label)), k ? d("span", { class: "enc-tl-card-more" }, "".concat(e.s("enc.tl.read"), " ›")) : null], () => {
        l(g.id), k && t.article(g.article, () => t.timeline());
      }, { class: "enc-tl-card".concat(k ? " has-article" : ""), "data-lane": String(m.lane), "data-year": String(g.year), "data-article": k ? g.article : null, style: "left:".concat(Math.round(m.x - Fr / 2), "px;width:").concat(Fr, "px;").concat(m.lane === 0 ? "bottom:".concat(o + Yn, "px") : "top:".concat(o + Yn, "px")), onfocus: () => l(g.id), onmouseenter: () => l(g.id) });
    }), f = d("div", { class: "enc-tl-scroll", testid: "timeline", role: "group", "aria-label": e.s("enc.tl.box"), onkeydown: (m) => {
      var _a4;
      const g = m;
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(g.key) || g.altKey || g.ctrlKey || g.metaKey) return;
      const b = [...f.querySelectorAll(".enc-tl-card")], v = b.indexOf(document.activeElement);
      if (v < 0) return;
      const w = g.key === "Home" ? 0 : g.key === "End" ? b.length - 1 : Math.min(b.length - 1, Math.max(0, v + (g.key === "ArrowRight" ? 1 : -1)));
      g.preventDefault(), (_a4 = b[w]) == null ? void 0 : _a4.focus();
    } }, d("div", { class: "enc-tl-track", style: "width:".concat(n.width, "px;height:").concat(Vn, "px") }, u, h, p));
    return t.eventId && l(t.eventId), d("div", { class: "enc-timeline" }, d("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "timeline-title" }, e.s("enc.tl.title")), d("p", { class: "enc-part-intro" }, s.length > 0 ? e.s("enc.tl.intro") : e.s("enc.tl.empty")), f, a);
  }
  function l$(t) {
    const e = t.s, s = t.model.map, n = s ? e.pack.assets.find((h) => h.id === s.asset) : void 0, i = s ? e.data.assets[s.asset] : void 0;
    if (!s || !n || !i) return d("div", { class: "enc-map-view" }, d("h1", { class: "screen-title enc-part-title", tabindex: "-1" }, e.s("enc.map.title")), d("p", {}, e.s("enc.map.none")));
    const r = s.places.filter((h) => t.arts.has(h.article)), o = s.width > 0 && s.height > 0, a = (h) => t.article(h, () => t.map()), c = o ? s$(r, s.width) : 0, l = o ? r.map((h) => {
      const p = i$(h, s.width, s.height);
      return T("place-".concat(h.id), [d("span", { class: "enc-pin-head", "aria-hidden": "true" }), d("span", { class: "enc-pin-name", "aria-hidden": "true" }, e.t(h.label))], () => a(h.article), { class: "enc-pin", "aria-label": e.t(h.label), "data-article": h.article, style: "left:".concat(p.left, ";top:").concat(p.top) });
    }) : [], u = d("div", { class: "enc-map-stage", testid: "map", style: o ? "aspect-ratio:".concat(s.width, " / ").concat(s.height, ";min-width:").concat(c, "px") : "", onkeydown: (h) => {
      var _a3, _b3;
      const p = h, f = p.key === "ArrowLeft" ? "left" : p.key === "ArrowRight" ? "right" : p.key === "ArrowUp" ? "up" : p.key === "ArrowDown" ? "down" : null;
      if (!f || p.altKey || p.ctrlKey || p.metaKey) return;
      const m = (_a3 = document.activeElement) == null ? void 0 : _a3.getAttribute("data-testid");
      if (!(m == null ? void 0 : m.startsWith("place-"))) return;
      const g = n$(r, m.slice(6), f);
      g && (p.preventDefault(), (_b3 = u.querySelector('[data-testid="place-'.concat(g.id, '"]'))) == null ? void 0 : _b3.focus());
    } }, d("img", { class: "enc-map-img", src: i, alt: e.t(n.alt) }), l);
    return d("div", { class: "enc-map-view" }, d("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "map-title" }, e.s("enc.map.title")), d("p", { class: "enc-part-intro" }, r.length > 0 ? e.s("enc.map.intro") : e.s("enc.map.none")), d("figure", { class: "enc-map-figure" }, d("div", { class: "enc-map-scroll", role: "group", "aria-label": e.s("enc.map.box") }, u), d("figcaption", {}, e.t(n.alt))), r.length > 0 ? d("section", { class: "enc-places", testid: "places" }, d("h2", {}, e.s("enc.map.places")), d("ul", {}, r.map((h) => d("li", {}, T("place-link-".concat(h.id), [d("span", { class: "enc-place-dot", "aria-hidden": "true" }), e.t(h.label)], () => a(h.article), { class: "enc-place-btn" }))))) : null);
  }
  function u$(t, e, s) {
    const n = [];
    for (let i = 1; ; i++) {
      const r = t["art-".concat(e, "-p").concat(s).concat(i > 1 ? "-".concat(i) : "")];
      if (!r) break;
      n.push(r);
    }
    return n;
  }
  const rd = () => {
    var _a3;
    return (_a3 = document.scrollingElement) != null ? _a3 : document.documentElement;
  };
  function d$() {
    const t = rd(), e = t.scrollHeight - t.clientHeight;
    return e > 0 ? t.scrollTop / e : 0;
  }
  function h$(t, e, s) {
    if (s.length === 0) return null;
    const n = t.s.ui, i = t.glossOff();
    return d("section", { class: "enc-glossary", testid: "glossary-panel", "aria-labelledby": "enc-glossary-h" }, d("h2", { id: "enc-glossary-h" }, n("gloss.panel")), d("ul", {}, s.map((r) => {
      var _a3, _b3;
      const o = "".concat(e, "/").concat(r.id), a = d("input", { type: "checkbox", testid: "gloss-deck-".concat(r.id), "aria-label": n("gloss.deck.for", { term: (_a3 = r.lemma) != null ? _a3 : r.term }), checked: !i.has(o), onchange: () => t.setGlossDeck(e, r.id, a.checked) });
      return d("li", { testid: "glossary-entry-".concat(r.id) }, d("span", { class: "enc-gloss-main" }, d("strong", { class: "enc-gloss-lemma" }, (_b3 = r.lemma) != null ? _b3 : r.term), r.pos ? d("span", { class: "gloss-pos" }, n("gloss.pos.".concat(r.pos))) : null, d("span", { class: "enc-gloss-text" }, r.gloss), r.note ? d("span", { class: "enc-gloss-note" }, r.note) : null), d("label", { class: "enc-gloss-deck" }, a, d("span", {}, n("gloss.deck"))));
    })));
  }
  function p$(t, e) {
    var _a3;
    const s = t.s, n = s.ui, i = t.chapters(), r = Math.max(0, i.findIndex((W) => W.id === e)), o = i[r];
    if (!o) return d("div", {});
    const a = t.glossWords(e), c = kr(n), l = t.glossOff(), u = new Set(a.filter((W) => l.has("".concat(e, "/").concat(W.id))).map((W) => W.id)), h = mr(o.paragraphs.map((W) => [{ text: W }])), p = gr(h.map((W) => W.runs), a), f = t.chapterRead(e), m = i[r - 1], g = i[r + 1], k = o.unit ? s.unitTitle(o.unit) : "", b = t.chapterItems(e), v = d("nav", { class: "enc-reader-toc", "aria-label": n("reader.toc"), testid: "reader-toc" }, d("h2", {}, n("reader.toc")), d("ol", {}, i.map((W, ie) => d("li", {}, T("reader-chapter-".concat(W.id), [d("span", { class: "enc-reader-num" }, String(ie + 1)), d("span", { class: "enc-reader-toc-title" }, W.title), t.chapterRead(W.id) ? [d("span", { class: "mark", "aria-hidden": "true" }, "✓"), d("span", { class: "sr-only" }, " (".concat(n("reader.chapterRead"), ")"))] : null], () => t.reader(W.id), { class: "enc-reader-toc-btn", "data-read": String(t.chapterRead(W.id)), ...W.id === e ? { "aria-current": "true" } : {} }))))), w = d("div", { class: "enc-reader-end", testid: "reader-end", "aria-hidden": "true" }), y = d("p", { class: "enc-reader-progress", testid: "reader-progress", "data-chapter": e, "data-index": String(r + 1), "data-total": String(i.length), "data-read": String(f), "aria-live": "polite" }, n("reader.progress", { n: r + 1, total: i.length })), $ = (W) => {
      t.markChapterRead(e), W && t.reader(W);
    }, x = d("div", { class: "enc-reader-nav" }, T("reader-prev", "‹ ".concat(n("reader.prev")), () => m ? t.reader(m.id) : void 0, { class: "btn", ...m ? {} : { disabled: true } }), y, T("reader-next", "".concat(n("reader.next"), " ›"), () => $(g == null ? void 0 : g.id), { class: "btn btn-primary", ...g ? {} : { disabled: true } })), _ = o.paragraphs.map((W, ie) => u$(s.data.assets, e, ie + 1)), z = { from: -1 }, O = /* @__PURE__ */ new Map(), R = { el: null }, S = () => {
      for (const [W, ie] of O) {
        const zt = t.audio !== null && z.from >= 0 && W === z.from;
        ie.textContent = zt ? "■" : "▶", ie.setAttribute("aria-label", s.s(zt ? "reader.listen.stop" : "reader.listen", { n: W + 1 }));
      }
      R.el && (R.el.textContent = "".concat(t.audio ? "■" : "▶", " ").concat(s.s(t.audio ? "reader.listenAll.stop" : "reader.listenAll")));
    }, A = (W, ie) => {
      var _a4;
      if (t.audio) {
        t.stopAudio(), z.from = -1, S();
        return;
      }
      const zt = [];
      for (let _t = W; _t <= ie; _t++) for (const Zt of (_a4 = _[_t]) != null ? _a4 : []) zt.push({ p: _t, url: Zt });
      const Gs = () => {
        const _t = zt.shift();
        if (!_t) {
          t.stopAudio(), z.from = -1, S();
          return;
        }
        try {
          const Zt = new Audio(_t.url);
          s.audio.voice(Zt), t.audio = Zt, z.from = _t.p, Zt.onended = () => {
            t.audio === Zt && (t.audio = null), Gs();
          }, Zt.play().then(() => s.audio.duck(true), () => {
          });
        } catch (e2) {
          t.audio = null, z.from = -1;
        }
        S();
      };
      Gs();
    }, j = _.some((W) => W.length > 0), I = d("div", { class: "enc-reader-body enc-body gloss-scope", testid: "reader-body", lang: (_a3 = s.pack.targetLang) != null ? _a3 : void 0 }, p.map((W, ie) => {
      var _a4, _b3;
      const zt = br(W, c, void 0, u, (_a4 = h[ie]) == null ? void 0 : _a4.heading);
      if (!((_b3 = _[ie]) == null ? void 0 : _b3.length)) return zt;
      const Gs = T("reader-play-".concat(ie + 1), "▶", () => A(ie, ie), { class: "btn btn-small enc-reader-play", "aria-label": s.s("reader.listen", { n: ie + 1 }) });
      return O.set(ie, Gs), d("div", { class: "enc-reader-para" }, Gs, zt);
    }), c.el), D = j ? T("reader-play-all", "▶ ".concat(s.s("reader.listenAll")), () => A(0, o.paragraphs.length - 1), { class: "btn btn-small enc-reader-play-all" }) : null;
    R.el = D;
    const G = b.length > 0 ? T("reader-practice", n("reader.practice"), () => t.practice(e), { class: "btn btn-small" }) : null, B = d("div", { class: "enc-reader", testid: "reader", "data-chapter": e }, v, d("article", { class: "enc-reader-main" }, d("p", { class: "enc-runhead" }, d("span", {}, k || n("reader.title")), d("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), d("span", {}, n("reader.chapter", { n: r + 1 }))), d("h1", { class: "screen-title enc-reader-title", tabindex: "-1", testid: "reader-title", "data-autofocus": "" }, o.title), d("p", { class: "enc-rule", "aria-hidden": "true" }), a.length > 0 ? d("p", { class: "enc-reader-hint" }, n("reader.hint")) : null, D, I, w, d("p", { class: "enc-reader-done", testid: "reader-done", hidden: !f }, g ? n("reader.read") : "".concat(n("reader.read"), " ").concat(n("reader.last"))), x, G, h$(t, e, a)));
    B.addEventListener("keydown", (W) => {
      W.ctrlKey || W.metaKey || W.altKey || W.shiftKey || Is(W.target) || (W.key === "ArrowLeft" && m ? (W.preventDefault(), t.reader(m.id)) : W.key === "ArrowRight" && g && (W.preventDefault(), $(g.id)));
    });
    const H = t.data.reader, ke = () => {
      B.isConnected && he === void 0 && (he = window.setTimeout(Ie, 400));
    };
    let he;
    function Ie() {
      he = void 0, B.isConnected && t.rememberReader(e, d$());
    }
    window.addEventListener("scroll", ke, { passive: true });
    let Ue;
    return typeof IntersectionObserver < "u" && (Ue = new IntersectionObserver((W) => {
      B.isConnected && W.some((ie) => ie.isIntersecting) && t.markChapterRead(e);
    }), Ue.observe(w)), t.pendingCleanup.push(() => {
      window.removeEventListener("scroll", ke), Ue == null ? void 0 : Ue.disconnect(), he !== void 0 && (window.clearTimeout(he), he = void 0);
    }), window.requestAnimationFrame(() => {
      const W = rd(), ie = W.scrollHeight - W.clientHeight;
      W.scrollTop = (H == null ? void 0 : H.chapter) === e && ie > 0 ? Math.round(H.scroll * ie) : 0;
    }), B;
  }
  const f$ = ["index", "reader", "timeline", "map", "codex", "hunts"];
  class m$ {
    constructor(e) {
      __publicField(this, "s");
      __publicField(this, "model");
      __publicField(this, "arts", /* @__PURE__ */ new Map());
      __publicField(this, "data", ed());
      __publicField(this, "hunt", null);
      __publicField(this, "result", null);
      __publicField(this, "query", "");
      __publicField(this, "eventId", null);
      __publicField(this, "trail", []);
      __publicField(this, "audio", null);
      __publicField(this, "cleanup", []);
      __publicField(this, "pendingCleanup", []);
      __publicField(this, "titleState", ns());
      __publicField(this, "linkCache", /* @__PURE__ */ new Map());
      this.s = e, this.rebuild();
    }
    rebuild() {
      var _a3;
      this.model = wl(this.s.pack, this.s.section(), this.s.text), this.arts = new Map(this.model.articles.map((n) => [n.id, { id: n.id, title: this.s.t(n.titleKey), paragraphs: gl(n.bodyKeys.map((i) => this.s.t(i))), ...n.unit ? { unit: n.unit } : {}, ...n.assetId ? { assetId: n.assetId } : {}, citations: n.citations, related: n.related, virtual: n.virtual }])), this.linkCache = /* @__PURE__ */ new Map();
      const e = this.s.section(), s = new Set(Object.entries((_a3 = e == null ? void 0 : e.glossary) != null ? _a3 : {}).flatMap(([n, i]) => i.map((r) => sd(n, r.id))));
      this.data = B1(this.s.shellData(), new Set(this.allSteps().map((n) => n.id)), new Set(this.model.articles.map((n) => n.id)), s);
    }
    allSteps() {
      return this.model.hunts.flatMap((e) => e.steps);
    }
    validStep(e) {
      return this.arts.has(e.article) && this.s.canAsk(this.s.item(e.item));
    }
    stepsOf(e) {
      return e.steps.filter((s) => this.validStep(s));
    }
    finalSteps() {
      return this.model.finalSteps.filter((e) => this.validStep(e));
    }
    articleList() {
      return this.model.articles.map((e) => this.arts.get(e.id));
    }
    articleTexts() {
      return this.articleList().map((e) => ({ id: e.id, title: e.title, paragraphs: e.paragraphs }));
    }
    articleTitle(e) {
      var _a3, _b3;
      return (_b3 = (_a3 = this.arts.get(e)) == null ? void 0 : _a3.title) != null ? _b3 : e;
    }
    search(e) {
      return Qu(e, this.articleTexts());
    }
    segments(e) {
      const s = this.arts.get(e);
      return s ? Z1(s.paragraphs, e, this.articleList().map((n) => ({ id: n.id, title: n.title }))) : [];
    }
    linksFrom(e) {
      let s = this.linkCache.get(e);
      return s || (s = U1(this.segments(e)), this.linkCache.set(e, s)), s;
    }
    via(e) {
      for (const s of this.articleList()) if (s.id !== e && this.linksFrom(s.id).includes(e)) return { from: s.id, testid: "link-".concat(e) };
      for (const s of this.articleList()) if (s.id !== e && s.related.includes(e)) return { from: s.id, testid: "related-".concat(e) };
      return null;
    }
    chapters() {
      return cy(this.s.pack, this.model.articles).map((e) => this.arts.get(e.id));
    }
    hasReader() {
      var _a3;
      const e = this.s.section();
      return this.chapters().length > 0 && ((e == null ? void 0 : e.reader) === true || Object.values((_a3 = e == null ? void 0 : e.glossary) != null ? _a3 : {}).some((s) => s.length > 0));
    }
    readerFirst() {
      var _a3;
      return ((_a3 = this.s.section()) == null ? void 0 : _a3.reader) === true && this.chapters().length > 0;
    }
    glossWords(e) {
      return kl(this.s.section(), e).flatMap((s) => {
        const n = this.s.text.text(s.term), i = this.s.text.text(s.gloss);
        if (n === void 0 || i === void 0) return [];
        const r = s.lemma ? this.s.text.text(s.lemma) : void 0, o = s.note ? this.s.text.text(s.note) : void 0;
        return [{ id: s.id, term: n, gloss: i, ...r ? { lemma: r } : {}, ...s.pos ? { pos: s.pos } : {}, ...o ? { note: o } : {} }];
      });
    }
    glossOff() {
      var _a3;
      return new Set((_a3 = this.data.glossOff) != null ? _a3 : []);
    }
    setGlossDeck(e, s, n) {
      this.data = G1(this.data, sd(e, s), n), this.saveData();
    }
    readerChapter() {
      var _a3, _b3, _c2, _d2;
      const e = this.chapters(), s = (_a3 = this.data.reader) == null ? void 0 : _a3.chapter;
      return (_d2 = (_b3 = e.find((n) => n.id === s)) == null ? void 0 : _b3.id) != null ? _d2 : (_c2 = e[0]) == null ? void 0 : _c2.id;
    }
    rememberReader(e, s) {
      const n = K1(this.data, e, s);
      n !== this.data && (this.data = n, this.saveData());
    }
    chapterRead(e) {
      var _a3;
      return ((_a3 = this.data.reader) == null ? void 0 : _a3.done.includes(e)) === true;
    }
    markChapterRead(e) {
      var _a3, _b3, _c2;
      this.chapterRead(e) || (this.data = q1(td(this.data, e), e), this.saveData(), (_a3 = document.querySelector('[data-testid="reader-progress"]')) == null ? void 0 : _a3.setAttribute("data-read", "true"), (_b3 = document.querySelector('[data-testid="reader-done"]')) == null ? void 0 : _b3.removeAttribute("hidden"), (_c2 = document.querySelector('[data-testid="reader-chapter-'.concat(e, '"]'))) == null ? void 0 : _c2.setAttribute("data-read", "true"));
    }
    chapterItems(e) {
      return this.s.pack.items.filter((s) => {
        var _a3;
        return ((_a3 = bl(s)) == null ? void 0 : _a3.article) === e && this.s.canAsk(s);
      }).map((s) => s.id);
    }
    practice(e) {
      const s = this.chapterItems(e);
      s.length !== 0 && (this.s.passageOpen = true, this.askPractice(this.s.startRun(s, { kind: "review" }), e, 0));
    }
    askPractice(e, s, n) {
      const i = this.s, r = () => {
        i.passageOpen = false, this.reader(s);
      }, o = i.next(e), a = o ? i.item(o.id) : void 0;
      if (!o || !a) return r();
      let c = e;
      lt(i, { item: a, context: "reader", retry: o.retry, roundKind: "review", roundSize: e.size, index: n, view: () => ({ ...this.baseView(), chapter: s }), leaveLabel: i.ui("reader.leave"), onLeave: r, onAnswered: (l) => {
        c = i.record(c, o, l);
      }, onNext: () => this.askPractice(c, s, n + 1) });
    }
    stepClue(e) {
      return e.clue ? this.s.t(e.clue) : this.s.s("enc.auto.clue", { title: this.articleTitle(e.article) });
    }
    collectibleName(e) {
      return e.collectible ? this.s.t(e.collectible) : this.s.s("enc.auto.name", { title: this.articleTitle(e.article) });
    }
    huntTitle(e) {
      return e.title ? this.s.t(e.title) : this.s.s("enc.hunt.auto", { unit: this.s.unitTitle(e.unit) });
    }
    huntIntro(e) {
      return e.intro ? this.s.t(e.intro) : e.auto ? this.s.s("enc.hunt.auto.intro") : "";
    }
    taught(e) {
      var _a3;
      const s = this.s.item(e.item);
      return s ? s.didYouKnow && this.s.text.hasText(s.didYouKnow) ? this.s.t(s.didYouKnow) : (_a3 = this.s.text.text(s.explanation)) != null ? _a3 : "" : "";
    }
    pinned() {
      const e = this.hunt;
      if (!e || !e.pick) return null;
      const s = e.pick, n = e.steps.find((i) => i.item === s.id);
      return n ? { step: n, n: e.steps.indexOf(n) + 1, total: e.steps.length, retry: s.retry } : null;
    }
    found(e) {
      return this.data.found.includes(e.id);
    }
    statusCounts() {
      const e = this.allSteps().filter((s) => this.validStep(s));
      return { found: e.filter((s) => this.found(s)).length, total: e.length, stars: this.s.totalStars(), maxStars: this.s.pack.units.length * 3, read: this.data.read.length, articles: this.model.articles.length };
    }
    hasMap() {
      return !!this.model.map && !!this.s.data.assets[this.model.map.asset];
    }
    hasTimeline() {
      return this.model.timeline.length > 0;
    }
    partAvailable(e) {
      return e === "reader" ? this.hasReader() : e === "timeline" ? this.hasTimeline() : e === "map" ? this.hasMap() : true;
    }
    nav(e) {
      const s = this.s, n = { index: () => this.explore(), reader: () => this.reader(), timeline: () => this.timeline(), map: () => this.map(), codex: () => this.codex(), hunts: () => this.hunts() };
      return d("nav", { class: "enc-tabs", "aria-label": s.s("enc.nav.label") }, T("menu", s.s("enc.nav.title"), () => this.title(), { class: "enc-tab enc-tab-title" }), f$.filter((i) => this.partAvailable(i)).map((i) => T("nav-".concat(i), i === "reader" ? s.ui("reader.nav") : s.s("enc.nav.".concat(i)), () => {
        this.trail = [], n[i]();
      }, { class: "enc-tab", ...i === e ? { "aria-current": "page" } : {} })));
    }
    page(e, s, n, i = {}) {
      this.stopAudio();
      for (const o of this.cleanup.splice(0)) o();
      this.cleanup = this.pendingCleanup.splice(0);
      const r = d("div", { class: "enc-page enc-page-".concat(e), "data-part": s != null ? s : "" }, this.nav(s), J1(this), n);
      return this.s.render(e, r, { view: { ...this.baseView(), ...i } });
    }
    baseView() {
      var _a3, _b3, _c2, _d2, _e2;
      const e = this.statusCounts(), s = this.pinned(), n = this.hunt;
      return { found: [...this.data.found], read: [...this.data.read], counts: e, hunt: n ? { id: n.hunt.id, final: n.final, step: (_a3 = s == null ? void 0 : s.step.id) != null ? _a3 : null, article: (_b3 = s == null ? void 0 : s.step.article) != null ? _b3 : null, item: (_d2 = (_c2 = n.pick) == null ? void 0 : _c2.id) != null ? _d2 : null, retry: (_e2 = s == null ? void 0 : s.retry) != null ? _e2 : false, answered: n.answered, size: n.steps.length, collected: [...n.collected] } : null };
    }
    saveData() {
      this.s.setShellData(this.data);
    }
    stopAudio() {
      this.audio && (this.audio.pause(), this.audio = null, this.s.audio.duck(false));
    }
    title() {
      this.rebuild(), this.s.finished = false, this.trail = [], this.s.render("title", Zs(this.s, { startLabel: this.readerFirst() ? this.s.ui(this.data.reader ? "reader.continue" : "reader.open") : this.s.started ? this.s.s("enc.continue") : this.s.s("enc.open"), onStart: () => this.readerFirst() ? this.reader() : this.explore() }, () => this.title(), this.titleState));
    }
    explore() {
      this.s.finished = false, this.page("explore", "index", Y1(this), { query: this.query });
    }
    reader(e) {
      var _a3;
      const s = this.chapters();
      if (s.length === 0) return this.explore();
      const n = s.some((i) => i.id === e) ? e : this.readerChapter();
      n !== ((_a3 = this.data.reader) == null ? void 0 : _a3.chapter) && this.rememberReader(n, 0), this.trail = [], this.page("reader", "reader", p$(this, n), { chapter: n });
    }
    article(e, s) {
      if (!this.arts.has(e)) return this.explore();
      s && this.trail.push(s), this.data.read.includes(e) || (this.data = td(this.data, e), this.saveData()), this.page("article", null, V1(this, e), { article: e });
    }
    back() {
      const e = this.trail.pop();
      e ? e() : this.explore();
    }
    timeline() {
      this.page("timeline", "timeline", c$(this), { event: this.eventId });
    }
    map() {
      this.page("map", "map", l$(this));
    }
    codex() {
      this.page("codex", "codex", X1(this));
    }
    hunts() {
      const e = this.result;
      this.page("hunts", "hunts", e$(this, e), { result: e }), e && this.s.live(this.resultText(e));
    }
    resultText(e) {
      const s = this.s;
      if (e.final) return s.s("enc.res.final");
      const n = e.stars >= 2 ? s.s("enc.res.good", { n: e.collected, total: e.total }) : s.s("enc.res.more", { n: e.collected, total: e.total });
      return e.unlocked.length > 0 ? "".concat(n, " ").concat(s.s("enc.res.unlocked", { units: e.unlocked.join(", ") })) : n;
    }
    end() {
      const e = this.s;
      e.finish();
      const s = this.statusCounts();
      e.render("end", Us(e, { title: e.s("enc.end.title"), sub: e.s("enc.end.sub"), stats: d("p", { class: "enc-end-stats", testid: "end-collected" }, e.s("enc.end.stats", { found: s.found, total: s.total, read: s.read, articles: s.articles })), onAgain: () => {
        this.hunt = null, this.result = null, this.explore();
      }, onTitle: () => this.title() }), { view: this.baseView() });
    }
    isHuntOpen(e) {
      return this.s.isUnlocked(e.unit) && this.stepsOf(e).length > 0;
    }
    isFinalOpen() {
      return this.s.allMastered() && this.finalSteps().length > 0;
    }
    startHunt(e, s = false) {
      const n = s ? this.finalSteps() : this.stepsOf(e);
      if (n.length === 0) return;
      const i = this.s.startRun(n.map((o) => o.item), s ? { kind: "boss" } : { kind: "unit", unitId: e.unit }), r = this.s.next(i);
      r && (this.hunt = { hunt: e, final: s, steps: n, run: i, pick: r, answered: 0, collected: [] }, this.result = null, this.trail = [], this.explore());
    }
    startFinal() {
      this.startHunt({ id: "final", unit: "", steps: this.finalSteps(), auto: false }, true);
    }
    dropHunt() {
      this.hunt = null, this.result = null, this.hunts();
    }
    collect(e) {
      const s = this.hunt, n = s == null ? void 0 : s.pick;
      if (!s || !n || n.id !== e.item) return;
      const i = this.s.item(e.item);
      if (!i) return;
      const r = this.collectibleName(e), o = s.steps.indexOf(e) + 1, a = this.found(e), c = Q1(this, s, o);
      lt(this.s, { item: i, context: "hunt", retry: n.retry, ...s.final ? { roundKind: "boss" } : { roundKind: "unit", unitId: s.hunt.unit }, roundSize: s.run.size, index: s.answered, hud: c, lead: d("span", {}, this.s.s("enc.lead", { name: r })), view: () => ({ ...this.baseView(), step: e.id, article: e.article }), nextLabel: this.s.s("enc.turn"), leaveLabel: this.s.s("enc.q.back"), onLeave: () => this.article(e.article), onAnswered: (l) => {
        var _a3, _b3;
        s.run = this.s.record(s.run, n, l), s.answered += 1, l.result.correct && (s.collected.includes(e.id) || s.collected.push(e.id), this.data = F1(this.data, e.id), this.saveData(), (_a3 = c.querySelectorAll(".enc-hud-pip")[o - 1]) == null ? void 0 : _a3.classList.add("is-found"), (_b3 = c.querySelector(".enc-hud-pips")) == null ? void 0 : _b3.setAttribute("aria-label", this.s.s("enc.hunt.found", { found: s.collected.length, n: s.steps.length })));
      }, effect: (l) => l.result.correct ? { text: this.s.s(a ? "enc.fx.again" : "enc.fx.found", { name: r }), tone: "good" } : { text: this.s.s("enc.fx.missed"), tone: "bad" }, onNext: () => {
        s.pick = this.s.next(s.run), s.pick ? this.article(e.article) : this.finishHunt();
      } });
    }
    finishHunt() {
      const e = this.hunt;
      if (!e) return this.hunts();
      const s = this.s.accuracy(e.run), n = this.s.recordUnit(e.final ? { boss: true } : { unitId: e.hunt.unit }, s);
      this.result = { huntId: e.final ? "final" : e.hunt.id, final: e.final, stars: n.stars, accuracy: s, collected: e.collected.length, total: e.steps.length, unlocked: n.unlocked.map((i) => this.s.unitTitle(i)) }, this.hunt = null, this.trail = [], this.hunts();
    }
    debug() {
      return { hunts: () => this.model.hunts.map((e) => ({ id: e.id, unit: e.unit, open: this.isHuntOpen(e), stars: this.s.unitStars(e.unit), steps: this.stepsOf(e).map((s) => ({ id: s.id, article: s.article, item: s.item })) })), finalHunt: () => ({ open: this.isFinalOpen(), steps: this.finalSteps().map((e) => ({ id: e.id, article: e.article, item: e.item })) }), target: () => {
        var _a3, _b3, _c2, _d2;
        const e = this.pinned();
        if (!e) return null;
        const s = this.via(e.step.article);
        return { hunt: (_b3 = (_a3 = this.hunt) == null ? void 0 : _a3.hunt.id) != null ? _b3 : null, final: (_d2 = (_c2 = this.hunt) == null ? void 0 : _c2.final) != null ? _d2 : false, step: e.step.id, article: e.step.article, item: e.step.item, retry: e.retry, clue: this.stepClue(e.step), term: Xu(this.articleTexts().find((n) => n.id === e.step.article), this.articleTexts()), via: s };
      }, searchTerm: (e) => {
        const s = this.articleTexts(), n = s.find((i) => i.id === e);
        return n ? Xu(n, s) : null;
      }, chapters: () => this.chapters().map((e) => ({ id: e.id, read: this.chapterRead(e.id), glosses: this.glossWords(e.id).map((s) => s.id), items: this.chapterItems(e.id) })), links: (e) => {
        var _a3, _b3;
        return { links: this.linksFrom(e), related: (_b3 = (_a3 = this.arts.get(e)) == null ? void 0 : _a3.related) != null ? _b3 : [] };
      }, articles: () => this.model.articles.map((e) => e.id), timeline: () => this.model.timeline.map((e) => {
        var _a3;
        return { id: e.id, year: e.year, article: (_a3 = e.article) != null ? _a3 : null };
      }), places: () => {
        var _a3, _b3;
        return ((_b3 = (_a3 = this.model.map) == null ? void 0 : _a3.places) != null ? _b3 : []).map((e) => ({ id: e.id, article: e.article }));
      }, codex: () => this.allSteps().filter((e) => this.validStep(e)).map((e) => ({ id: e.id, found: this.found(e) })), queue: () => [...this.s.progress.queue] };
    }
  }
  function g$(t, e) {
    let s = null, n = null;
    return { id: t, mount(i) {
      const r = new Cs(i, { shellId: t, theme: e, strings: W1 });
      s = r, n = new m$(r), r.mount(), r.setDebug(n.debug()), n.title();
    }, unmount() {
      n == null ? void 0 : n.stopAudio(), s == null ? void 0 : s.unmount(), s = null, n = null;
    } };
  }
  const od = g$("encyclopedia", "parchment"), Rt = 40, ad = 80, cd = 60, Jn = 26;
  function k$(t) {
    var _a3, _b3, _c2;
    const e = t.rooms.map((h) => h.id), s = /* @__PURE__ */ new Map();
    if (e.includes(t.entry)) {
      s.set(t.entry, 0);
      const h = [t.entry];
      for (; h.length > 0; ) {
        const p = h.shift();
        for (const f of (_b3 = (_a3 = t.rooms.find((m) => m.id === p)) == null ? void 0 : _a3.doors) != null ? _b3 : []) e.includes(f.to) && !s.has(f.to) && (s.set(f.to, s.get(p) + 1), h.push(f.to));
      }
    }
    const n = e.filter((h) => !s.has(h)), i = Math.max(-1, ...s.values()) + 1;
    for (const h of n) s.set(h, i);
    const r = Math.max(0, ...s.values()) + 1, o = Array.from({ length: r }, () => []);
    for (const h of e) (_c2 = o[s.get(h)]) == null ? void 0 : _c2.push(h);
    const a = Math.max(1, ...o.map((h) => h.length)), c = [];
    o.forEach((h, p) => {
      h.forEach((f, m) => {
        const g = Jn + Rt / 2 + (m + (a - h.length) / 2) * cd;
        c.push({ id: f, col: p, row: m, x: Jn + Rt / 2 + p * ad, y: g, n: 0 });
      });
    }), [...c].sort((h, p) => h.col - p.col || h.y - p.y).forEach((h, p) => h.n = p + 1);
    const u = [];
    for (const h of t.rooms) for (const p of h.doors) e.includes(p.to) && p.to !== h.id && u.push({ from: h.id, to: p.to, back: s.get(p.to) <= s.get(h.id) });
    return { nodes: c, edges: u, width: Jn * 2 + Rt + (r - 1) * ad, height: Jn * 2 + Rt + (a - 1) * cd };
  }
  function b$(t, e) {
    var _a3, _b3;
    const s = /* @__PURE__ */ new Map(), n = (r, o) => {
      const a = s.get(r);
      if (a !== void 0) return a;
      if (o.includes(r)) return 0;
      const c = e.find((u) => u.id === r), l = !c || c.requires.length === 0 ? 0 : 1 + Math.max(...c.requires.map((u) => n(u, [...o, r])));
      return s.set(r, l), l;
    };
    for (const r of e) n(r.id, []);
    const i = [];
    for (const r of t) {
      const o = (_a3 = s.get(r.unit)) != null ? _a3 : 0;
      for (; i.length <= o; ) i.push([]);
      (_b3 = i[o]) == null ? void 0 : _b3.push(r.id);
    }
    return i.filter((r) => r.length > 0);
  }
  const Ae = (t, e = {}, ...s) => de(t, e, ...s.filter((n) => n !== null)), V = (t, e, s = {}) => Ae("path", { class: t, d: e, ...s }), pe = (t, e, s, n, i, r = {}) => Ae("rect", { class: t, x: e, y: s, width: n, height: i, ...r }), fe = (t, e, s, n) => Ae("circle", { class: t, cx: e, cy: s, r: n }), v$ = (t, e, s, n) => {
    const i = Ae("text", { class: t, x: e, y: s, "text-anchor": "middle" });
    return i.appendChild(document.createTextNode(n)), i;
  }, rs = (t, e, ...s) => de("svg", { class: t, viewBox: e, "aria-hidden": "true", focusable: "false", preserveAspectRatio: "xMidYMid meet" }, ...s.filter((n) => n !== null)), Kr = "M20 168V68C20 42 38 22 60 22S100 42 100 68V168Z";
  function qr(t) {
    const e = rs("mm-door-svg", "0 0 120 170", V("d-arch", "M6 170V66C6 30 32 6 60 6S114 30 114 66V170Z"), V("d-joint", "M60 6V22M33 13L39 28M87 13L81 28M13 40L28 47M107 40L92 47M8 90H20M100 90H112M8 130H20M100 130H112"), V("d-keystone", "M52 6H68L66 22H54Z"), V("d-opening", Kr), V("d-light", Kr), Ae("g", { class: "d-leaf" }, V("d-wood", Kr), V("d-plank", "M40 25V168M60 22V168M80 25V168"), pe("d-iron", 20, 62, 80, 8), pe("d-iron", 20, 114, 80, 8), fe("d-stud", 28, 66, 2.4), fe("d-stud", 52, 66, 2.4), fe("d-stud", 68, 66, 2.4), fe("d-stud", 92, 66, 2.4), fe("d-stud", 28, 118, 2.4), fe("d-stud", 92, 118, 2.4), fe("d-ring", 84, 92, 7), Ae("g", { class: "d-lock" }, V("d-shackle", "M52 84V78A8 8 0 0 1 68 78V84", { fill: "none" }), pe("d-lockbody", 48, 84, 24, 18, { rx: 2 }), fe("d-keyhole", 60, 92, 3))));
    return e.setAttribute("data-open", String(t)), e;
  }
  const w$ = (t, e) => t.setAttribute("data-open", String(e));
  function y$() {
    return rs("mm-torch-svg", "0 0 28 58", fe("t-glow", 14, 14, 20), V("t-bracket", "M14 58V34M6 32H22", { fill: "none" }), V("t-cup", "M7 24H21L18 36H10Z"), V("t-flame", "M14 2C19 9 23 14 21 19C20 23 17 25 14 25C11 25 8 23 7 19C6 15 9 11 11 8C12 11 13 12 14 2Z"), V("t-core", "M14 12C17 16 18 18 17 21C16 23 15 24 14 24C13 24 11 23 11 21C11 19 12 18 14 12Z"), V("t-ember", "M10 24H18", { fill: "none" }));
  }
  function Gr(t, e, s) {
    return d("span", { class: "mm-torches", testid: "torches", role: "img", "aria-label": s, "data-torches": String(t), "data-max": String(e) }, Array.from({ length: e }, (n, i) => d("span", { class: "mm-torch ".concat(i < t ? "is-lit" : "is-out"), "aria-hidden": "true" }, y$())));
  }
  const ld = (t, e, s, n) => {
    let i = "";
    for (let r = t; r + n * 0.6 <= e; r += n) i += "M".concat(r, " ").concat(s, "h").concat(n * 0.55, "v-9h-").concat(n * 0.55, "z");
    return i;
  };
  function S$(t) {
    const e = (t % 6 + 6) % 6, s = V("p-robe p-c".concat(e), "M8 120C8 96 26 84 50 84S92 96 92 120Z"), n = pe("p-skin", 44, 70, 12, 18, { rx: 4 }), i = Ae("ellipse", { class: "p-skin", cx: 50, cy: 54, rx: 19, ry: 22 }), r = [fe("p-eye", 43, 54, 2.2), fe("p-eye", 57, 54, 2.2), V("p-mouth", "M44 66Q50 70 56 66", { fill: "none" })], o = [];
    switch (e) {
      case 0:
        o.push(V("p-hood", "M24 66C20 30 34 12 50 12S80 30 76 66C70 54 66 40 50 40S30 54 24 66Z"), V("p-beard", "M36 62C40 80 60 80 64 62C60 70 40 70 36 62Z"));
        break;
      case 1:
        o.push(V("p-helm", "M28 54C26 26 38 14 50 14S74 26 72 54H62V44H38V54Z"), pe("p-nose", 47, 40, 6, 20, { rx: 2 }), V("p-crest", "M50 14C46 4 54 4 50 14", { fill: "none" }));
        break;
      case 2:
        o.push(V("p-hair", "M30 56C28 30 38 24 50 24S72 30 70 56C66 44 60 38 50 38S34 44 30 56Z"), V("p-crown", "M32 34L36 18L44 28L50 14L56 28L64 18L68 34Z"));
        break;
      case 3:
        o.push(V("p-hat", "M26 40C34 38 66 38 74 40L56 2C54 -2 46 -2 44 2Z"), pe("p-hatband", 26, 36, 48, 6, { rx: 3 }), V("p-beard", "M32 60C34 92 66 92 68 60C62 72 38 72 32 60Z"));
        break;
      case 4:
        o.push(V("p-hair", "M28 60C22 30 34 16 50 16S78 30 72 60C72 76 78 92 78 96C66 90 64 70 66 52C62 42 56 36 50 36S38 42 34 52C36 70 34 90 22 96C22 92 28 76 28 60Z"));
        break;
      default:
        return o.push(V("p-sheet", "M24 120V56C24 30 36 14 50 14S76 30 76 56V120L68 110L60 120L50 110L40 120L32 110Z")), rs("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), o[0], fe("p-eye p-ghost-eye", 41, 52, 4.5), fe("p-eye p-ghost-eye", 59, 52, 4.5), V("p-mouth", "M44 70Q50 75 56 70", { fill: "none" }));
    }
    return rs("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), s, n, i, ...r, ...o);
  }
  function $$(t, e) {
    return d("div", { class: "mm-portrait", "data-look": String(t.look % 6) }, e ? d("img", { src: e.url, alt: e.alt, class: "mm-portrait-img", loading: "lazy" }) : S$(t.look));
  }
  function Qn(t) {
    return rs("mm-throne-svg", "0 -34 200 224", V("th-floor", "M10 186H190L178 168H22Z"), V("th-step", "M30 168H170L162 150H38Z"), V("th-back", "M62 150V50C62 24 80 10 100 10S138 24 138 50V150Z"), V("th-back-in", "M72 146V54C72 34 85 22 100 22S128 34 128 54V146Z"), V("th-finial", "M56 52L62 28L68 52ZM132 52L138 28L144 52Z"), pe("th-seat", 56, 118, 88, 30, { rx: 4 }), pe("th-cushion", 64, 106, 72, 16, { rx: 8 }), pe("th-arm", 50, 98, 16, 52, { rx: 4 }), pe("th-arm", 134, 98, 16, 52, { rx: 4 }), V("th-gem", "M100 34L108 44L100 54L92 44Z"), fe("th-gem", 100, 80, 5), Ae("g", { class: "th-crown".concat(t ? " is-won" : "") }, fe("th-halo", 100, 0, 22), V("th-crown-shape", "M78 0L82 -18L92 -8L100 -22L108 -8L118 -18L122 0Z"), pe("th-crown-band", 78, 0, 44, 6, { rx: 2 })));
  }
  function Wr() {
    return rs("mm-key-svg", "0 0 64 64", fe("k-ring", 18, 18, 12), fe("k-hole", 18, 18, 5), V("k-shaft", "M26 26L56 56M44 44L52 36M50 50L58 42", { fill: "none" }));
  }
  function z$(t, e, s) {
    const n = new Map(t.nodes.map((l) => [l.id, l])), i = Rt / 2, r = t.edges.map((l) => {
      const u = n.get(l.from), h = n.get(l.to);
      if (!u || !h) return null;
      const p = e.open.has("".concat(l.from, ">").concat(l.to)), f = "m-door ".concat(p ? "is-open" : "is-locked"), m = Math.sign(h.x - u.x), g = u.x + (m === 0 ? 0 : m * i), k = h.x - (m === 0 ? 0 : m * i);
      if (l.back || m === 0) {
        const w = Math.min(u.y, h.y) - i - 14;
        return V("".concat(f, " is-back"), "M".concat(u.x, " ").concat(u.y - i, "C").concat(u.x, " ").concat(w, " ").concat(h.x, " ").concat(w, " ").concat(h.x, " ").concat(h.y - i), { fill: "none" });
      }
      const b = (u.y + h.y) / 2, v = (g + k) / 2;
      return Ae("g", { class: f }, V("m-line", "M".concat(g, " ").concat(u.y, "C").concat(v, " ").concat(u.y, " ").concat(v, " ").concat(h.y, " ").concat(k, " ").concat(h.y), { fill: "none" }), V("m-arrow", "M".concat(k, " ").concat(h.y, "l-9 -5v10z")), p ? null : fe("m-lock", v, b, 4.5));
    }), o = t.nodes.map((l) => {
      const u = l.id === e.here, h = "m-room".concat(u ? " is-here" : "").concat(e.keys.has(l.id) ? " is-key" : "").concat(l.id === e.entry ? " is-entry" : "");
      return Ae("g", { class: h, "data-room": l.id }, pe("m-stone", l.x - i, l.y - i, Rt, Rt, { rx: 5 }), v$("m-num", l.x, l.y + 6, String(l.n)), e.keys.has(l.id) ? V("m-key", "M".concat(l.x + i - 6, " ").concat(l.y - i - 3, "l5 -5l5 5l-5 5z")) : null, u ? V("m-here", "M".concat(l.x, " ").concat(l.y - i - 4, "l-6 -10l6 -4l6 4z")) : null);
    }), a = [...r, ...o].filter((l) => l !== null);
    return de("svg", { class: "mm-minimap-svg", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMid meet", testid: "minimap" }, ...a);
  }
  function _$(t, e, s) {
    const r = Math.ceil(t.length / 2), o = [...t.slice(0, r), "keep", ...t.slice(r)], a = t.length * 76 + 100 + 40, c = [pe("s-sky", 0, 0, a, 180), pe("s-ground", 0, 164, a, 16)];
    let l = 20;
    return o.forEach((u, h) => {
      if (u === "keep") {
        c.push(Ae("g", { class: "s-keep is-".concat(e), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, 40, 100, 126), V("s-merlon", ld(-4, 104, 40, 18).replace(/v-9h/g, "v-12h")), V("s-roof", "M-6 40L".concat(100 / 2, " 6L106 40Z")), V("s-flag", "M".concat(100 / 2, " 6V-8M").concat(100 / 2, " -6H").concat(100 / 2 + 22, "L").concat(100 / 2 + 16, " 0L").concat(100 / 2 + 22, " 6H").concat(100 / 2), { fill: "none" }), V("s-gate", "M".concat(100 / 2 - 16, " 166V138C").concat(100 / 2 - 16, " 124 ").concat(100 / 2 + 16, " 124 ").concat(100 / 2 + 16, " 138V166Z")), pe("s-window", 100 / 2 - 24, 62, 8, 20, { rx: 4 }), pe("s-window", 100 / 2 + 16, 62, 8, 20, { rx: 4 }))), l += 114;
        return;
      }
      const p = 86 + h * 37 % 4 * 14, f = 166 - p;
      c.push(Ae("g", { class: "s-tower is-".concat(u.state), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, f, 60, p), V("s-merlon", ld(-3, 63, f, 15).replace(/v-9h/g, "v-11h")), pe("s-window", 26, f + 22, 8, 18, { rx: 4 }), pe("s-window", 26, f + 54, 8, 18, { rx: 4 }), u.state === "won" ? Ae("g", { class: "s-won" }, V("s-pole", "M30 ".concat(f - 14, "V").concat(f - 34), { fill: "none" }), V("s-key-flag", "M30 ".concat(f - 34, "H52L46 ").concat(f - 27, "L52 ").concat(f - 20, "H30Z"))) : null)), l += 76;
    }), de("svg", { class: "mm-skyline-svg", viewBox: "-4 -12 ".concat(a, " 194"), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMax meet", testid: "castle-map" }, ...c.filter((u) => u !== null));
  }
  const j$ = { en: { "maze.tagline": "A castle of questions", "maze.title.art": "A castle gatehouse with a torch burning on each side of the gate.", "maze.title.intro": "Every door is a question. Answer it to open the door, win the key of each wing, then face the throne room.", "maze.castle.title": "The castle", "maze.castle.sub": "Pick a wing. Each wing hides a key; when you hold every key the throne room opens.", "maze.castle.map": "Map of the castle: {won} of {total} keys won.", "maze.keys": "Keys: {n} of {total}", "maze.wing.sealed": "Sealed", "maze.wing.needs": "Needs the key of: {wings}", "maze.wing.key": "Key won", "maze.wing.go": "Enter the wing", "maze.wing.resume": "Walk on", "maze.wing.rooms": "{n} rooms", "maze.throne.name": "The throne room", "maze.throne.sealed": "Sealed until you hold every key.", "maze.throne.ready": "The golden doors stand open.", "maze.throne.crowned": "Crowned", "maze.throne.desc": "A gauntlet of questions from every wing. Win one star or more and the crown is yours.", "maze.throne.begin": "Face the gauntlet", "maze.throne.won": "The crown is yours", "maze.throne.lost": "The crown slips away", "maze.throne.lost.text": "Fewer than 1 star. Look at what you missed and face the gauntlet again.", "maze.throne.retry": "Face the gauntlet again", "maze.throne.finish": "Claim the castle", "maze.throne.step": "Gauntlet, question {i} of {n}", "maze.to.castle": "Castle map", "maze.torches": "Torches: {n} of {max}", "maze.wing.of": "Wing: {wing}", "maze.back": "Go back to {room}", "maze.doors": "Doors", "maze.door.locked": "Locked: answer to open", "maze.door.open": "Open", "maze.talk": "Talk", "maze.hint": "Ask for a hint", "maze.keyroom": "The key of this wing lies here.", "maze.take": "Take the key", "maze.minimap": "Map of the wing", "maze.map.here": "you are here", "maze.map.key": "key room", "maze.map.open": "open door", "maze.map.locked": "locked door", "maze.map.alt": "Map of the wing {wing}: {n} rooms. You are in room {here}.", "maze.notice.ghost": "The castle ghost led you back to the entrance hall and relit your torches. The doors you opened stay open.", "maze.say.right": "Well done!", "maze.say.wrong": "Do not lose heart. That door will ask something else next time.", "maze.asks": "The door to {room} asks:", "maze.stepback": "Step back", "maze.fx.open": "The door swings open.", "maze.fx.torch": "Your torch gutters: {n} left.", "maze.fx.dark": "Your last torch dies. The castle ghost leads you back to the entrance hall.", "maze.fx.t.right": "The gold of the crown glows.", "maze.fx.t.torch": "A torch gutters in the throne room: {n} left.", "maze.fx.t.relit": "The last torch dies, but the ghost relights them all. The gauntlet goes on.", "maze.next.walk": "Walk through", "maze.next.room": "Back to the room", "maze.next.ghost": "Follow the ghost", "maze.next.throne": "Onward", "maze.done.won": "The wing is cleared", "maze.done.crumble": "The wing crumbles", "maze.done.key": "The key of {wing} is yours.", "maze.done.crumble.text": "Fewer than 2 stars: the doors close again. Walk the wing once more.", "maze.done.unlocked": "New wings open: {wings}", "maze.done.throne": "You hold every key. The throne room is open.", "maze.done.misses": "Questions that beat you", "maze.done.accuracy": "{n} % right first time", "maze.retry": "Walk the wing again", "maze.end.title": "The castle is yours!", "maze.end.sub": "You hold every key and wear the crown.", "maze.end.keys": "Keys won: {n} of {total}", "maze.portrait": "Portrait of {name}.", "maze.auto.wing": "A wing of the castle", "maze.auto.hall": "The entrance hall", "maze.auto.hall.desc": "Torches burn in iron rings and the stone floor is worn smooth. Doors wait ahead, and each one asks a question.", "maze.auto.gallery": "The portrait gallery", "maze.auto.gallery2": "The long gallery", "maze.auto.gallery3": "The echoing cloister", "maze.auto.keyroom": "The key chamber", "maze.auto.keyroom.desc": "On a stone table lies the key of this wing.", "maze.auto.side": "The side chamber", "maze.auto.side.desc": "A small study with a reading desk: a quieter way round, through two doors.", "maze.auto.gate.name": "The gatekeeper", "maze.auto.gate.line": "Welcome. Each door here asks a question; answer it and the way opens. Miss, and your torch gutters.", "maze.auto.gate.right": "Good. These doors like a quick mind.", "maze.auto.gate.wrong": "Never mind. A different question waits at that door.", "maze.auto.scholar.name": "The scholar", "maze.auto.scholar.line": "I have read everything on these shelves. Think it through and the door will open.", "maze.auto.scholar.right": "Splendid reasoning!", "maze.auto.scholar.wrong": "Hm. Read the explanation, then try again.", "maze.auto.archivist.name": "The archivist", "maze.auto.archivist.line": "The records are kept here: the long way round, but a gentle one.", "maze.auto.archivist.right": "Filed under: correct.", "maze.auto.archivist.wrong": "Misfiled! It happens. Read the note.", "maze.auto.keeper.name": "The keeper of keys", "maze.auto.keeper.line": "The key is nearly yours. Walk through the last door.", "maze.auto.keeper.right": "The lock likes you.", "maze.auto.keeper.wrong": "The lock stays shut, for now." }, hr: { "maze.tagline": "Dvorac pun pitanja", "maze.title.art": "Ulazna kula dvorca; s obje strane vrata gori baklja.", "maze.title.intro": "Svaka su vrata pitanje. Odgovori da ih otvoriš, osvoji ključ svakog krila pa se suoči s prijestolnom dvoranom.", "maze.castle.title": "Dvorac", "maze.castle.sub": "Odaberi krilo. U svakom je krilu skriven ključ; kad imaš sve ključeve, otvara se prijestolna dvorana.", "maze.castle.map": "Karta dvorca: osvojeno ključeva {won} od {total}.", "maze.keys": "Ključevi: {n} od {total}", "maze.wing.sealed": "Zapečaćeno", "maze.wing.needs": "Treba ključ krila: {wings}", "maze.wing.key": "Ključ osvojen", "maze.wing.go": "Uđi u krilo", "maze.wing.resume": "Nastavi hodati", "maze.wing.rooms": "{n} soba", "maze.throne.name": "Prijestolna dvorana", "maze.throne.sealed": "Zapečaćena dok nemaš sve ključeve.", "maze.throne.ready": "Zlatna su vrata otvorena.", "maze.throne.crowned": "Okrunjen", "maze.throne.desc": "Niz pitanja iz svakog krila. Osvoji jednu zvjezdicu ili više i kruna je tvoja.", "maze.throne.begin": "Suoči se s izazovom", "maze.throne.won": "Kruna je tvoja", "maze.throne.lost": "Kruna ti izmiče", "maze.throne.lost.text": "Manje od 1 zvjezdice. Pogledaj što si promašio i suoči se s izazovom ponovno.", "maze.throne.retry": "Suoči se s izazovom ponovno", "maze.throne.finish": "Preuzmi dvorac", "maze.throne.step": "Izazov, pitanje {i} od {n}", "maze.to.castle": "Karta dvorca", "maze.torches": "Baklje: {n} od {max}", "maze.wing.of": "Krilo: {wing}", "maze.back": "Vrati se u: {room}", "maze.doors": "Vrata", "maze.door.locked": "Zaključana: odgovori da ih otvoriš", "maze.door.open": "Otvorena", "maze.talk": "Razgovaraj", "maze.hint": "Zatraži savjet", "maze.keyroom": "Ovdje leži ključ ovog krila.", "maze.take": "Uzmi ključ", "maze.minimap": "Karta krila", "maze.map.here": "ovdje si", "maze.map.key": "soba s ključem", "maze.map.open": "otvorena vrata", "maze.map.locked": "zaključana vrata", "maze.map.alt": "Karta krila {wing}: {n} soba. Nalaziš se u sobi {here}.", "maze.notice.ghost": "Duh dvorca vratio te u ulaznu dvoranu i ponovno ti zapalio baklje. Vrata koja su otvorena ostaju otvorena.", "maze.say.right": "Odlično!", "maze.say.wrong": "Ne gubi hrabrost. Ta će vrata sljedeći put pitati nešto drugo.", "maze.asks": "Vrata u sobu {room} pitaju:", "maze.stepback": "Odstupi", "maze.fx.open": "Vrata se otvaraju.", "maze.fx.torch": "Tvoja baklja posustaje: preostalo ih je {n}.", "maze.fx.dark": "Tvoja posljednja baklja gasne. Duh dvorca vodi te natrag u ulaznu dvoranu.", "maze.fx.t.right": "Zlato krune zasjalo je.", "maze.fx.t.torch": "Baklja u prijestolnoj dvorani posustaje: preostalo ih je {n}.", "maze.fx.t.relit": "Posljednja baklja gasne, ali duh ih sve ponovno pali. Izazov se nastavlja.", "maze.next.walk": "Prođi kroz vrata", "maze.next.room": "Natrag u sobu", "maze.next.ghost": "Slijedi duha", "maze.next.throne": "Dalje", "maze.done.won": "Krilo je očišćeno", "maze.done.crumble": "Krilo se ruši", "maze.done.key": "Ključ krila {wing} je tvoj.", "maze.done.crumble.text": "Manje od 2 zvjezdice: vrata se opet zatvaraju. Prođi krilo još jednom.", "maze.done.unlocked": "Otvorena nova krila: {wings}", "maze.done.throne": "Imaš sve ključeve. Prijestolna dvorana je otvorena.", "maze.done.misses": "Pitanja koja su te svladala", "maze.done.accuracy": "{n} % točno iz prvog pokušaja", "maze.retry": "Prođi krilo ponovno", "maze.end.title": "Dvorac je tvoj!", "maze.end.sub": "Imaš sve ključeve i nosiš krunu.", "maze.end.keys": "Osvojeni ključevi: {n} od {total}", "maze.portrait": "Portret: {name}.", "maze.auto.wing": "Krilo dvorca", "maze.auto.hall": "Ulazna dvorana", "maze.auto.hall.desc": "Baklje gore u željeznim obručima, a kameni je pod izglačan. Pred tobom su vrata i svaka postavljaju pitanje.", "maze.auto.gallery": "Galerija portreta", "maze.auto.gallery2": "Duga galerija", "maze.auto.gallery3": "Odjekujući klaustar", "maze.auto.keyroom": "Soba s ključem", "maze.auto.keyroom.desc": "Na kamenom stolu leži ključ ovog krila.", "maze.auto.side": "Bočna odaja", "maze.auto.side.desc": "Mala radna soba s pultom za čitanje: mirniji put, kroz dvoja vrata.", "maze.auto.gate.name": "Vratar", "maze.auto.gate.line": "Dobro došao. Svaka vrata ovdje postavljaju pitanje; odgovori i put je slobodan. Pogriješiš li, baklja ti posustaje.", "maze.auto.gate.right": "Dobro. Ova vrata vole brz um.", "maze.auto.gate.wrong": "Ne mari. Na tim vratima čeka drugo pitanje.", "maze.auto.scholar.name": "Učenjak", "maze.auto.scholar.line": "Pročitao sam sve s ovih polica. Dobro razmisli i vrata će se otvoriti.", "maze.auto.scholar.right": "Izvrsno zaključivanje!", "maze.auto.scholar.wrong": "Hm. Pročitaj objašnjenje pa pokušaj ponovno.", "maze.auto.archivist.name": "Arhivar", "maze.auto.archivist.line": "Ovdje se čuvaju zapisi: dulji put, ali blag.", "maze.auto.archivist.right": "Arhivirano: točno.", "maze.auto.archivist.wrong": "Krivo razvrstano! Događa se. Pročitaj bilješku.", "maze.auto.keeper.name": "Čuvar ključeva", "maze.auto.keeper.line": "Ključ je gotovo tvoj. Prođi posljednja vrata.", "maze.auto.keeper.right": "Brava te voli.", "maze.auto.keeper.wrong": "Brava za sada ostaje zatvorena." }, de: { "maze.tagline": "Ein Schloss voller Fragen", "maze.title.art": "Ein Torhaus des Schlosses, an jeder Seite des Tors brennt eine Fackel.", "maze.title.intro": "Jede Tür ist eine Frage. Beantworte sie, um die Tür zu öffnen, gewinne den Schlüssel jedes Flügels und stelle dich dann im Thronsaal.", "maze.castle.title": "Das Schloss", "maze.castle.sub": "Wähle einen Flügel. Jeder Flügel versteckt einen Schlüssel; wenn du alle Schlüssel hast, öffnet sich der Thronsaal.", "maze.castle.map": "Karte des Schlosses: {won} von {total} Schlüsseln gewonnen.", "maze.keys": "Schlüssel: {n} von {total}", "maze.wing.sealed": "Versiegelt", "maze.wing.needs": "Braucht den Schlüssel von: {wings}", "maze.wing.key": "Schlüssel gewonnen", "maze.wing.go": "Den Flügel betreten", "maze.wing.resume": "Weitergehen", "maze.wing.rooms": "{n} Räume", "maze.throne.name": "Der Thronsaal", "maze.throne.sealed": "Versiegelt, bis du alle Schlüssel hast.", "maze.throne.ready": "Die goldenen Türen stehen offen.", "maze.throne.crowned": "Gekrönt", "maze.throne.desc": "Ein Fragenparcours aus allen Flügeln. Gewinne einen Stern oder mehr, und die Krone gehört dir.", "maze.throne.begin": "Den Parcours wagen", "maze.throne.won": "Die Krone gehört dir", "maze.throne.lost": "Die Krone entgleitet dir", "maze.throne.lost.text": "Weniger als 1 Stern. Sieh dir an, was du verpasst hast, und wage den Parcours noch einmal.", "maze.throne.retry": "Den Parcours noch einmal wagen", "maze.throne.finish": "Das Schloss einnehmen", "maze.throne.step": "Parcours, Frage {i} von {n}", "maze.to.castle": "Schlosskarte", "maze.torches": "Fackeln: {n} von {max}", "maze.wing.of": "Flügel: {wing}", "maze.back": "Zurück zu: {room}", "maze.doors": "Türen", "maze.door.locked": "Verschlossen: Antworte, um zu öffnen", "maze.door.open": "Offen", "maze.talk": "Sprechen", "maze.hint": "Um einen Tipp bitten", "maze.keyroom": "Der Schlüssel dieses Flügels liegt hier.", "maze.take": "Den Schlüssel nehmen", "maze.minimap": "Karte des Flügels", "maze.map.here": "du bist hier", "maze.map.key": "Schlüsselraum", "maze.map.open": "offene Tür", "maze.map.locked": "verschlossene Tür", "maze.map.alt": "Karte des Flügels {wing}: {n} Räume. Du bist in Raum {here}.", "maze.notice.ghost": "Der Schlossgeist hat dich zurück in die Eingangshalle geführt und deine Fackeln neu entzündet. Die Türen, die du geöffnet hast, bleiben offen.", "maze.say.right": "Gut gemacht!", "maze.say.wrong": "Lass den Mut nicht sinken. Diese Tür stellt dir beim nächsten Mal eine andere Frage.", "maze.asks": "Die Tür zu „{room}“ fragt:", "maze.stepback": "Zurücktreten", "maze.fx.open": "Die Tür schwingt auf.", "maze.fx.torch": "Deine Fackel flackert: noch {n} übrig.", "maze.fx.dark": "Deine letzte Fackel erlischt. Der Schlossgeist führt dich zurück in die Eingangshalle.", "maze.fx.t.right": "Das Gold der Krone leuchtet.", "maze.fx.t.torch": "Im Thronsaal flackert eine Fackel: noch {n} übrig.", "maze.fx.t.relit": "Die letzte Fackel erlischt, aber der Geist entzündet alle neu. Der Parcours geht weiter.", "maze.next.walk": "Hindurchgehen", "maze.next.room": "Zurück in den Raum", "maze.next.ghost": "Dem Geist folgen", "maze.next.throne": "Weiter", "maze.done.won": "Der Flügel ist bezwungen", "maze.done.crumble": "Der Flügel zerfällt", "maze.done.key": "Der Schlüssel von {wing} gehört dir.", "maze.done.crumble.text": "Weniger als 2 Sterne: Die Türen schließen sich wieder. Durchquere den Flügel noch einmal.", "maze.done.unlocked": "Neue Flügel öffnen sich: {wings}", "maze.done.throne": "Du hast alle Schlüssel. Der Thronsaal ist offen.", "maze.done.misses": "Fragen, die dich besiegt haben", "maze.done.accuracy": "{n} % gleich beim ersten Mal richtig", "maze.retry": "Den Flügel noch einmal durchqueren", "maze.end.title": "Das Schloss gehört dir!", "maze.end.sub": "Du hast alle Schlüssel und trägst die Krone.", "maze.end.keys": "Gewonnene Schlüssel: {n} von {total}", "maze.portrait": "Porträt von {name}.", "maze.auto.wing": "Ein Flügel des Schlosses", "maze.auto.hall": "Die Eingangshalle", "maze.auto.hall.desc": "Fackeln brennen in eisernen Ringen, und der Steinboden ist glatt getreten. Vor dir warten Türen, und jede stellt eine Frage.", "maze.auto.gallery": "Die Porträtgalerie", "maze.auto.gallery2": "Die lange Galerie", "maze.auto.gallery3": "Der hallende Kreuzgang", "maze.auto.keyroom": "Die Schlüsselkammer", "maze.auto.keyroom.desc": "Auf einem Steintisch liegt der Schlüssel dieses Flügels.", "maze.auto.side": "Die Seitenkammer", "maze.auto.side.desc": "Ein kleines Studierzimmer mit einem Lesepult: ein ruhigerer Weg, durch zwei Türen.", "maze.auto.gate.name": "Der Torwächter", "maze.auto.gate.line": "Willkommen. Jede Tür hier stellt eine Frage; beantworte sie, und der Weg öffnet sich. Liegst du falsch, flackert deine Fackel.", "maze.auto.gate.right": "Gut. Diese Türen mögen einen wachen Verstand.", "maze.auto.gate.wrong": "Macht nichts. An dieser Tür wartet eine andere Frage.", "maze.auto.scholar.name": "Der Gelehrte", "maze.auto.scholar.line": "Ich habe alles in diesen Regalen gelesen. Denk in Ruhe nach, und die Tür öffnet sich.", "maze.auto.scholar.right": "Hervorragend überlegt!", "maze.auto.scholar.wrong": "Hm. Lies die Erklärung und versuche es noch einmal.", "maze.auto.archivist.name": "Die Archivarin", "maze.auto.archivist.line": "Hier werden die Akten geführt: der lange Weg, aber ein sanfter.", "maze.auto.archivist.right": "Abgelegt unter: richtig.", "maze.auto.archivist.wrong": "Falsch abgelegt! Das passiert. Lies die Notiz.", "maze.auto.keeper.name": "Der Schlüsselbewahrer", "maze.auto.keeper.line": "Der Schlüssel ist fast dein. Geh durch die letzte Tür.", "maze.auto.keeper.right": "Das Schloss mag dich.", "maze.auto.keeper.wrong": "Das Schloss bleibt vorerst verschlossen." } };
  function x$(t, e, s) {
    return { wingId: t.id, run: e, room: t.entry, trail: [], open: [], torches: s, maxTorches: s, mood: "none", ghosted: false };
  }
  const os = (t, e, s) => t.open.includes(In(e, s)), ud = (t, e, s) => os(t, e, s) ? t : { ...t, open: [...t.open, In(e, s)] }, Hr = (t, e) => ({ ...t, trail: [...t.trail, t.room], room: e, ghosted: false });
  function E$(t) {
    const e = t.trail.at(-1);
    return e === void 0 ? t : { ...t, room: e, trail: t.trail.slice(0, -1), ghosted: false };
  }
  function A$(t) {
    const e = Math.max(0, t.torches - 1);
    return { walk: { ...t, torches: e }, dark: e === 0 };
  }
  const T$ = (t, e) => ({ ...t, room: e, trail: [], torches: t.maxTorches, ghosted: true, mood: "groan" });
  function I$(t, e) {
    return t ? e >= 2 ? "cheer" : "none" : "groan";
  }
  function M$(t, e, s, n) {
    var _a3;
    const i = t.pool.filter((u) => e.includes(u)), r = s({ ...t, pool: i, size: t.asked.length + i.length });
    if (r) return r;
    const o = s({ ...t, size: t.asked.length + t.pool.length });
    if (o) return o;
    const a = (_a3 = t.results.at(-1)) == null ? void 0 : _a3.id, c = e.filter((u) => u !== a), l = c.length > 0 ? c : [...e];
    return l.length > 0 ? { id: n.choice(l), retry: true } : null;
  }
  const dd = "mindmaze", O$ = "castle";
  class N$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "maze");
      __publicField(this, "walks", /* @__PURE__ */ new Map());
      __publicField(this, "throne", null);
      __publicField(this, "currentWing", null);
      __publicField(this, "titleState", ns());
      this.host = e, this.session = new Cs(e, { shellId: dd, theme: O$, strings: j$ }), this.maze = zl(this.session.pack, this.session.section());
    }
    get s() {
      return this.session.s;
    }
    mount() {
      const e = this.session;
      e.mount(), e.setKeyHandler((s) => this.onKey(s)), e.setDebug({ route: () => this.route(), view: () => this.roomView(), maze: () => this.mazeSummary() }), this.title();
    }
    unmount() {
      this.session.unmount();
    }
    label(e) {
      return e ? e.key ? this.session.t(e.key) : e.ui ? this.s(e.ui) : "" : "";
    }
    roomLabel(e) {
      return this.label(e).replace(/[.。]$/, "");
    }
    wing(e) {
      return this.maze.wings.find((s) => s.id === e);
    }
    roomName(e, s) {
      var _a3;
      return this.roomLabel((_a3 = wt(e, s)) == null ? void 0 : _a3.name) || s;
    }
    assetOf(e) {
      if (!e) return null;
      const s = this.session.data.assets[e], n = this.session.pack.assets.find((i) => i.id === e);
      return s && n ? { url: s, alt: this.session.t(n.alt) } : null;
    }
    poolOfWing(e) {
      return [...new Set(e.rooms.flatMap((s) => s.doors.flatMap((n) => n.items)))];
    }
    keysWon() {
      return this.maze.wings.filter((e) => this.session.isMastered(e.unit)).length;
    }
    everyKey() {
      return this.maze.wings.every((e) => this.session.isMastered(e.unit));
    }
    crowned() {
      return this.session.bossStars() >= 1;
    }
    castleView() {
      const e = this.session;
      return { wings: this.maze.wings.map((s) => ({ id: s.id, unit: s.unit, stars: e.unitStars(s.unit), locked: !e.isUnlocked(s.unit), key: e.isMastered(s.unit), walking: this.walks.has(s.id) })), keys: this.keysWon(), total: this.maze.wings.length, throneOpen: this.everyKey(), crowned: this.crowned() };
    }
    roomView() {
      var _a3;
      const e = this.currentWing, s = e ? this.walks.get(e) : void 0;
      if (!e || !s) return null;
      const n = this.wing(e), i = wt(n, s.room);
      return { wing: e, unit: n.unit, room: s.room, entry: n.entry, keyRoom: (i == null ? void 0 : i.key) === true, torches: s.torches, maxTorches: s.maxTorches, trail: s.trail, open: s.open, doors: ((_a3 = i == null ? void 0 : i.doors) != null ? _a3 : []).map((r) => ({ to: r.to, state: os(s, s.room, r.to) ? "open" : "locked" })), ghost: s.ghosted, mood: s.mood, answered: s.run.asked.length };
    }
    throneView(e, s = {}) {
      var _a3, _b3, _c2, _d2;
      const n = this.throne;
      return { phase: e, torches: (_a3 = n == null ? void 0 : n.torches) != null ? _a3 : 0, maxTorches: (_b3 = n == null ? void 0 : n.max) != null ? _b3 : this.maze.torches, size: (_c2 = n == null ? void 0 : n.run.size) != null ? _c2 : this.maze.throne.size, asked: (_d2 = n == null ? void 0 : n.run.asked.length) != null ? _d2 : 0, crowned: this.crowned(), ...s };
    }
    route() {
      const e = this.currentWing, s = e ? this.walks.get(e) : void 0;
      if (!e || !s) return null;
      const n = this.wing(e), i = xl(n, s.room, new Set(s.open)), r = wt(n, s.room);
      return { wing: e, room: s.room, found: i.found, path: i.path, locked: i.locked, door: i.next ? "door-".concat(i.next) : null, state: i.next ? os(s, s.room, i.next) ? "open" : "locked" : null, takeKey: (r == null ? void 0 : r.key) === true };
    }
    mazeSummary() {
      return { torches: this.maze.torches, throne: this.maze.throne.size, wings: this.maze.wings.map((e) => ({ id: e.id, unit: e.unit, entry: e.entry, auto: e.auto, rooms: e.rooms.map((s) => s.id), keys: js(e), doors: xl(e, e.entry).path.length - 1, solvable: jl(e, e.entry) })) };
    }
    onKey(e) {
      if (e.ctrlKey || e.metaKey || e.altKey || Is(e.target) || this.session.screen !== "room" || !/^[1-9]$/.test(e.key)) return;
      const n = [...this.host.root.querySelectorAll(".mm-door")][Number(e.key) - 1];
      n && (e.preventDefault(), n.click());
    }
    title() {
      const e = this.session;
      e.finished = false, this.walks.clear(), this.throne = null, this.currentWing = null, e.render("title", Zs(e, { onStart: () => this.castle() }, () => this.title(), this.titleState));
    }
    castle() {
      const e = this.session;
      e.finished = false, this.currentWing = null;
      const s = this.s, n = b$(this.maze.wings, e.units()), i = new Map(this.maze.wings.map((p) => [p.id, p])), r = this.everyKey(), o = this.maze.wings.length, a = this.keysWon(), c = this.maze.wings.map((p) => ({ state: e.isMastered(p.unit) ? "won" : e.isUnlocked(p.unit) ? "open" : "sealed" })), l = (p) => {
        var _a3, _b3, _c2, _d2;
        const f = !e.isUnlocked(p.unit), m = e.unitStars(p.unit), g = e.isMastered(p.unit), b = ((_b3 = (_a3 = e.pack.units.find((w) => w.id === p.unit)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((w) => !e.isMastered(w)).map((w) => {
          var _a4;
          return this.label((_a4 = this.maze.wings.find((y) => y.unit === w)) == null ? void 0 : _a4.name) || e.unitTitle(w);
        }).join(", "), v = this.walks.has(p.id);
        return d("li", { class: "mm-wing-item" }, d("button", { type: "button", class: "mm-wing ".concat(f ? "is-locked" : "is-open").concat(g ? " is-key" : ""), testid: "wing-".concat(p.id), "data-stars": String(m), "data-locked": String(f), "data-key": String(g), "data-unit": p.unit, "data-requires": ((_d2 = (_c2 = e.pack.units.find((w) => w.id === p.unit)) == null ? void 0 : _c2.requires) != null ? _d2 : []).join(" "), ...f ? { disabled: true } : {}, onclick: () => this.enterWing(p) }, d("span", { class: "mm-wing-name" }, this.label(p.name)), p.description ? d("span", { class: "mm-wing-desc" }, this.label(p.description)) : null, d("span", { class: "mm-wing-meta" }, f ? "".concat(s("maze.wing.sealed"), ". ").concat(s("maze.wing.needs", { wings: b })) : g ? "".concat(s("maze.wing.key")) : v ? s("maze.wing.resume") : s("maze.wing.rooms", { n: p.rooms.length })), g ? d("span", { class: "mm-wing-keyicon" }, Wr()) : null, e.stars(m)));
      }, u = d("button", { type: "button", class: "mm-throne-btn ".concat(r ? "is-open" : "is-locked").concat(this.crowned() ? " is-crowned" : ""), testid: "throne", "data-locked": String(!r), "data-stars": String(e.bossStars()), ...r ? {} : { disabled: true }, onclick: () => this.throneIntro() }, d("span", { class: "mm-throne-icon" }, Qn(this.crowned())), d("span", { class: "mm-wing-name" }, this.label(this.maze.throne.name) || s("maze.throne.name")), d("span", { class: "mm-wing-meta" }, this.crowned() ? s("maze.throne.crowned") : s(r ? "maze.throne.ready" : "maze.throne.sealed")), e.stars(e.bossStars())), h = d("section", { class: "castle-screen mm-castle" }, d("div", { class: "topbar" }, T("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "castle-keys" }, s("maze.keys", { n: a, total: o }))), d("h1", { class: "screen-title", tabindex: "-1", testid: "castle-title" }, s("maze.castle.title")), d("p", { class: "subject" }, s("maze.castle.sub")), d("div", { class: "mm-skyline" }, _$(c, this.crowned() ? "won" : r ? "open" : "sealed", s("maze.castle.map", { won: a, total: o }))), d("div", { class: "mm-throne-wrap" }, u), d("ol", { class: "mm-wing-rows", testid: "wing-map" }, [...n].reverse().map((p) => d("li", { class: "mm-wing-row" }, d("div", { class: "mm-corridor", "aria-hidden": "true" }), d("ul", { class: "mm-wing-list" }, p.map((f) => l(i.get(f))))))));
      e.render("castle", h, { view: this.castleView() });
    }
    enterWing(e) {
      const s = this.session;
      if (this.currentWing = e.id, !this.walks.has(e.id)) {
        const n = s.startRun(this.poolOfWing(e), { kind: "unit", unitId: e.unit });
        this.walks.set(e.id, x$(e, n, this.maze.torches));
      }
      this.room();
    }
    setWalk(e) {
      this.walks.set(e.wingId, e);
    }
    room() {
      var _a3, _b3, _c2;
      const e = this.session, s = this.currentWing, n = this.walks.get(s), i = this.wing(s), r = wt(i, n.room), o = this.s, a = new Set(n.open), c = this.roomLabel(r.name), l = this.label(r.description), u = this.assetOf(r.asset), h = n.trail.at(-1), p = (z, O) => {
        const R = os(n, r.id, z.to), S = wt(i, z.to), A = this.roomName(i, z.to);
        return d("li", { class: "mm-door-item" }, d("button", { type: "button", class: "mm-door ".concat(R ? "is-open" : "is-locked").concat((S == null ? void 0 : S.key) ? " is-key" : ""), testid: "door-".concat(z.to), "data-state": R ? "open" : "locked", ...(S == null ? void 0 : S.key) ? { "data-key": "true" } : {}, onclick: () => this.pressDoor(r, z) }, qr(R), d("span", { class: "mm-door-num", "aria-hidden": "true" }, String(O + 1)), d("span", { class: "mm-door-name" }, A), d("span", { class: "mm-door-state" }, R ? "✓ ".concat(o("maze.door.open")) : o("maze.door.locked"))));
      }, f = r.doors.length ? d("section", { class: "mm-doors", "aria-labelledby": "mm-doors-h" }, d("h2", { class: "sr-only", id: "mm-doors-h" }, o("maze.doors")), d("ul", { class: "mm-door-list", testid: "doors" }, r.doors.map(p))) : null, m = r.key ? d("div", { class: "mm-keybox" }, d("span", { class: "mm-keybox-icon" }, Wr()), d("p", {}, o("maze.keyroom")), T("take-key", o("maze.take"), () => this.takeKey(), { class: "btn btn-primary btn-big" })) : null, g = h !== void 0 ? T("back", "‹ ".concat(o("maze.back", { room: this.roomName(i, h) })), () => {
        this.setWalk({ ...E$(n), mood: "none" }), this.room();
      }, { class: "btn btn-ghost" }) : null, k = n.ghosted ? d("p", { class: "mm-notice", role: "status", testid: "notice" }, o("maze.notice.ghost")) : null, b = k$(i), v = new Set(js(i)), w = o("maze.map.alt", { wing: this.label(i.name), n: i.rooms.length, here: String((_b3 = (_a3 = b.nodes.find((z) => z.id === n.room)) == null ? void 0 : _a3.n) != null ? _b3 : 0) }), y = [...b.nodes].sort((z, O) => z.n - O.n).map((z) => {
        const O = wt(i, z.id), R = [z.id === n.room ? o("maze.map.here") : "", v.has(z.id) ? o("maze.map.key") : ""].filter(Boolean).join(", ");
        return d("li", { class: "mm-legend-item".concat(z.id === n.room ? " is-here" : ""), "data-room": z.id }, d("b", {}, "".concat(z.n, ".")), " ", this.roomLabel(O.name), R ? d("em", {}, " (".concat(R, ")")) : null);
      }), $ = d("section", { class: "mm-map", "aria-labelledby": "mm-map-h" }, d("h2", { id: "mm-map-h" }, o("maze.minimap")), d("div", { class: "mm-parchment" }, z$(b, { here: n.room, open: a, keys: v, entry: i.entry }, w)), d("ol", { class: "mm-legend", testid: "minimap-list" }, y)), x = this.characterPanel(r, i, n), _ = d("section", { class: "room-screen mm-room" }, d("div", { class: "topbar mm-topbar" }, T("to-castle", "‹ ".concat(o("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), d("span", { class: "mm-wing-tag", testid: "wing-tag" }, o("maze.wing.of", { wing: this.label(i.name) })), Gr(n.torches, n.maxTorches, o("maze.torches", { n: n.torches, max: n.maxTorches }))), k, d("div", { class: "mm-layout" }, d("div", { class: "mm-scene" }, d("h1", { class: "screen-title mm-room-name", tabindex: "-1", testid: "room-name" }, c), l ? d("p", { class: "mm-room-desc", testid: "room-desc" }, l) : null, u ? d("figure", { class: "mm-room-figure" }, d("img", { src: u.url, alt: u.alt, loading: "lazy" })) : null, f, m, g ? d("div", { class: "actions" }, g) : null), d("aside", { class: "mm-side" }, x, $)));
      e.render("room", _, { unitId: i.unit, roundKind: "unit", roundSize: n.run.size, view: (_c2 = this.roomView()) != null ? _c2 : {} });
    }
    characterPanel(e, s, n) {
      const i = e.character;
      if (!i) return null;
      const r = this.s, o = this.label(i.name), a = this.assetOf(i.portrait), c = $$(i, a ? { url: a.url, alt: r("maze.portrait", { name: o }) } : null), l = d("p", { class: "mm-bubble mm-line", testid: "character-line", hidden: true }, this.label(i.line)), u = this.hintFor(e, i, n), h = d("p", { class: "mm-bubble mm-hint", testid: "character-hint", hidden: true }, u != null ? u : ""), p = T("talk", r("maze.talk"), () => {
        l.hidden = !l.hidden, p.setAttribute("aria-expanded", String(!l.hidden));
      }, { class: "btn btn-small", "aria-expanded": "false" }), f = () => {
        h.hidden = !h.hidden, m == null ? void 0 : m.setAttribute("aria-expanded", String(!h.hidden));
      }, m = u ? T("hint", "💡 ".concat(r("maze.hint")), f, { class: "btn btn-small", "aria-expanded": "false" }) : null, g = n.mood === "none" ? "" : n.mood === "cheer" ? this.label(i.right) || r("maze.say.right") : this.label(i.wrong) || r("maze.say.wrong");
      return d("section", { class: "mm-char", "aria-labelledby": "mm-char-h", "data-mood": n.mood }, c, d("div", { class: "mm-char-body" }, d("h2", { class: "mm-char-name", id: "mm-char-h", testid: "character-name" }, o), d("div", { class: "mm-char-actions" }, p, m), l, h, g ? d("p", { class: "mm-bubble mm-react", testid: "character-reaction" }, g) : null));
    }
    hintFor(e, s, n) {
      if (s.hint) return this.label(s.hint);
      const i = this.session, r = [];
      for (const o of e.doors) if (!os(n, e.id, o.to)) for (const a of o.items) {
        const c = i.item(a);
        if ((c == null ? void 0 : c.hint) && i.text.hasText(c.hint)) {
          const l = i.t(c.hint);
          r.includes(l) || r.push(l);
        }
      }
      return r.length > 0 ? r.slice(0, 3).join(" ") : null;
    }
    pressDoor(e, s) {
      const n = this.currentWing, i = this.walks.get(n);
      if (os(i, e.id, s.to)) return this.setWalk({ ...Hr(i, s.to), mood: "none" }), this.room();
      this.askDoor(e, s);
    }
    askDoor(e, s) {
      const n = this.session, i = this.currentWing, r = this.wing(i), o = this.walks.get(i), a = this.s, c = M$(o.run, s.items, (f) => n.next(f), n.rng), l = c ? n.item(c.id) : void 0;
      if (!c || !n.canAsk(l)) return this.setWalk({ ...Hr(ud(o, e.id, s.to), s.to), mood: "none" }), this.room();
      const u = qr(false), h = Gr(o.torches, o.maxTorches, a("maze.torches", { n: o.torches, max: o.maxTorches })), p = d("div", { class: "mm-hud" }, d("div", { class: "mm-hud-door" }, u), d("div", { class: "mm-hud-text" }, d("p", { class: "mm-hud-wing" }, this.label(r.name)), h));
      lt(n, { item: l, context: "door", retry: c.retry, hud: p, lead: d("span", {}, a("maze.asks", { room: this.roomName(r, s.to) })), unitId: r.unit, roundKind: "unit", roundSize: o.run.size, index: o.run.results.length, view: () => {
        var _a3;
        return (_a3 = this.roomView()) != null ? _a3 : {};
      }, leaveLabel: a("maze.stepback"), onLeave: () => this.room(), onAnswered: (f) => {
        let m = this.walks.get(i);
        m = { ...m, run: n.record(m.run, c, f), ghosted: false };
        const g = f.result.correct;
        m = { ...m, mood: I$(g, n.combo) }, g ? (m = ud(m, e.id, s.to), w$(u, true), this.burst()) : (m = A$(m).walk, this.setTorches(h, m)), this.setWalk(m);
      }, effect: (f) => {
        const m = this.walks.get(i);
        return f.result.correct ? { text: a("maze.fx.open"), tone: "good" } : m.torches === 0 ? { text: a("maze.fx.dark"), tone: "bad" } : { text: a("maze.fx.torch", { n: m.torches }), tone: "bad" };
      }, nextLabel: (f) => f.result.correct ? a("maze.next.walk") : this.walks.get(i).torches === 0 ? a("maze.next.ghost") : a("maze.next.room"), onNext: (f) => {
        const m = this.walks.get(i);
        f.result.correct ? this.setWalk(Hr(m, s.to)) : m.torches === 0 && this.setWalk(T$(m, r.entry)), this.room();
      } });
    }
    setTorches(e, s) {
      e.setAttribute("data-torches", String(s.torches)), e.setAttribute("aria-label", this.s("maze.torches", { n: s.torches, max: s.maxTorches })), e.querySelectorAll(".mm-torch").forEach((n, i) => {
        n.classList.toggle("is-lit", i < s.torches), n.classList.toggle("is-out", i >= s.torches);
      });
    }
    burst() {
      const e = this.session.combo;
      if (![3, 5, 7, 10, 15, 20, 30].includes(e)) return;
      const s = this.host.root.querySelector(".burst-layer");
      if (!s) return;
      const n = Array.from({ length: 12 }, (r, o) => {
        const a = o / 12 * Math.PI * 2 + o % 2 * 0.22, c = 80 + o % 3 * 44;
        return d("span", { class: "dust", "aria-hidden": "true", style: "--dx:".concat(Math.round(Math.cos(a) * c), "px;--dy:").concat(Math.round(Math.sin(a) * c), "px;--s:").concat(5 + o % 4 * 2, "px;--delay:").concat(o % 5 * 30, "ms") });
      }), i = d("div", { class: "burst", testid: "combo-burst" }, this.session.ui("burst", { n: e }), n);
      s.appendChild(i), window.setTimeout(() => i.remove(), 1400);
    }
    takeKey() {
      const e = this.session, s = this.currentWing, n = this.walks.get(s), i = this.wing(s), r = e.accuracy(n.run), o = e.recordUnit({ unitId: i.unit }, r);
      this.walks.delete(s), e.playCue("unit-complete"), this.wingDone(i, o.stars, r, o.unlocked, Lr(n.run));
    }
    wingDone(e, s, n, i, r) {
      const o = this.session, a = this.s, c = o.isMastered(e.unit), l = this.maze.wings.filter((p) => i.includes(p.unit)).map((p) => this.label(p.name)), u = Math.round(n * 100), h = d("section", { class: "wingdone-screen mm-done ".concat(c ? "is-key" : "is-crumble") }, d("div", { class: "mm-done-art", "aria-hidden": "true" }, c ? Wr() : qr(false)), d("h1", { class: "screen-title", tabindex: "-1", testid: "wing-title" }, s >= 2 || c ? a("maze.done.won") : a("maze.done.crumble")), d("p", { class: "subject" }, this.label(e.name)), o.stars(s, "wing-stars"), d("p", { class: "big-number", testid: "wing-accuracy" }, a("maze.done.accuracy", { n: u })), c ? d("p", { class: "message message-ok", testid: "wing-key" }, a("maze.done.key", { wing: this.label(e.name) })) : d("p", { class: "message message-bad", testid: "wing-crumble" }, a("maze.done.crumble.text")), l.length > 0 ? d("p", { class: "message", testid: "wing-unlocked" }, a("maze.done.unlocked", { wings: l.join(", ") })) : null, this.everyKey() ? d("p", { class: "message message-ok", testid: "throne-open" }, a("maze.done.throne")) : null, r.length > 0 ? d("div", { class: "mm-misses" }, d("h2", {}, a("maze.done.misses")), d("ul", { class: "miss-list", testid: "wing-misses" }, r.map((p) => {
        var _a3;
        const f = o.item(p), m = f ? Ds(f, { text: o.text, ui: o.ui }).join(" / ") : "";
        return d("li", { testid: "miss-".concat(p) }, d("span", {}, o.t((_a3 = f == null ? void 0 : f.prompt) != null ? _a3 : p)), m ? d("small", { class: "miss-answer" }, m.length > 140 ? "".concat(m.slice(0, 139), "…") : m) : null);
      }))) : null, d("div", { class: "actions actions-center" }, T("to-castle", a("maze.to.castle"), () => this.castle(), { class: "btn btn-primary btn-big" }), s < 3 ? T("retry-wing", a("maze.retry"), () => this.enterWing(e), { class: "btn btn-big" }) : null));
      o.render("wing-done", h, { unitId: e.unit, roundKind: "unit", view: { wing: e.id, stars: s, key: c, accuracy: u, unlocked: i, misses: r } });
    }
    throneIntro() {
      const e = this.session, s = this.s;
      this.throne = null;
      const n = d("section", { class: "throne-screen mm-throne" }, d("div", { class: "topbar" }, T("to-castle", "‹ ".concat(s("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars" }, s("maze.keys", { n: this.keysWon(), total: this.maze.wings.length }))), d("div", { class: "mm-throne-art", "aria-hidden": "true" }, Qn(this.crowned())), d("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, this.label(this.maze.throne.name) || s("maze.throne.name")), d("p", { class: "mm-room-desc" }, this.label(this.maze.throne.description) || s("maze.throne.desc")), this.crowned() ? d("p", { class: "message message-ok", testid: "throne-crowned" }, s("maze.throne.crowned")) : null, e.stars(e.bossStars(), "throne-stars"), d("div", { class: "actions actions-center" }, T("throne-begin", s("maze.throne.begin"), () => this.startThrone(), { class: "btn btn-primary btn-big" }), this.crowned() ? T("finish", s("maze.throne.finish"), () => this.end(), { class: "btn btn-big" }) : null));
      e.render("throne", n, { view: this.throneView("intro") });
    }
    startThrone() {
      const e = this.session, s = e.pack.items.map((i) => i.id), n = e.startRun(s, { kind: "boss", size: Math.min(this.maze.throne.size, s.length) });
      this.throne = { run: n, torches: this.maze.torches, max: this.maze.torches, relit: false }, this.throneStep();
    }
    throneStep() {
      const e = this.session, s = this.throne;
      if (!s) return this.throneIntro();
      const n = this.s, i = e.next(s.run);
      if (!i) return this.throneResult();
      const r = e.item(i.id);
      if (!e.canAsk(r)) return s.run = { ...s.run, pool: s.run.pool.filter((c) => c !== i.id), size: Math.max(0, s.run.size - 1) }, this.throneStep();
      const o = Gr(s.torches, s.max, n("maze.torches", { n: s.torches, max: s.max })), a = d("div", { class: "mm-hud mm-hud-throne" }, d("div", { class: "mm-hud-door" }, Qn(false)), d("div", { class: "mm-hud-text" }, d("p", { class: "mm-hud-wing" }, this.label(this.maze.throne.name) || n("maze.throne.name")), o));
      lt(e, { item: r, context: "throne", retry: i.retry, hud: a, lead: d("span", {}, n("maze.throne.step", { i: Math.min(s.run.asked.length + (i.retry ? 0 : 1), s.run.size), n: s.run.size })), roundKind: "boss", roundSize: s.run.size, index: s.run.results.length, view: () => this.throneView("question"), leaveLabel: n("maze.stepback"), onLeave: () => this.throneIntro(), onAnswered: (c) => {
        s.run = e.record(s.run, i, c), s.relit = false, c.result.correct ? this.burst() : (s.torches = Math.max(0, s.torches - 1), s.torches === 0 && (s.torches = s.max, s.relit = true), this.setTorches(o, { torches: s.torches, maxTorches: s.max }));
      }, effect: (c) => c.result.correct ? { text: n("maze.fx.t.right"), tone: "good" } : s.relit ? { text: n("maze.fx.t.relit"), tone: "info" } : { text: n("maze.fx.t.torch", { n: s.torches }), tone: "bad" }, nextLabel: n("maze.next.throne"), onNext: () => this.throneStep() });
    }
    throneResult() {
      const e = this.session, s = this.throne, n = this.s, i = e.accuracy(s.run), r = e.recordUnit({ boss: true }, i);
      e.playCue("boss");
      const o = this.crowned(), a = Lr(s.run), c = Math.round(i * 100), l = d("section", { class: "throne-screen mm-throne ".concat(o ? "is-won" : "is-lost") }, d("div", { class: "mm-throne-art", "aria-hidden": "true" }, Qn(r.stars >= 1)), d("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, r.stars >= 1 ? n("maze.throne.won") : n("maze.throne.lost")), e.stars(r.stars, "throne-stars"), d("p", { class: "big-number", testid: "throne-accuracy" }, n("maze.done.accuracy", { n: c })), r.stars >= 1 ? null : d("p", { class: "message message-bad", testid: "throne-lost" }, n("maze.throne.lost.text")), a.length > 0 ? d("div", { class: "mm-misses" }, d("h2", {}, n("maze.done.misses")), d("ul", { class: "miss-list", testid: "throne-misses" }, a.map((u) => {
        var _a3;
        const h = e.item(u), p = h ? Ds(h, { text: e.text, ui: e.ui }).join(" / ") : "";
        return d("li", { testid: "miss-".concat(u) }, d("span", {}, e.t((_a3 = h == null ? void 0 : h.prompt) != null ? _a3 : u)), p ? d("small", { class: "miss-answer" }, p.length > 140 ? "".concat(p.slice(0, 139), "…") : p) : null);
      }))) : null, d("div", { class: "actions actions-center" }, o ? T("finish", n("maze.throne.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, r.stars < 3 ? T("retry-throne", n("maze.throne.retry"), () => this.startThrone(), { class: o ? "btn btn-big" : "btn btn-primary btn-big" }) : null, T("to-castle", n("maze.to.castle"), () => this.castle(), { class: "btn btn-big" })));
      e.render("throne", l, { view: this.throneView("result", { stars: r.stars, accuracy: c, misses: a }) });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.currentWing = null, e.render("end", Us(e, { title: s("maze.end.title"), sub: s("maze.end.sub"), stats: d("p", { class: "subject", testid: "end-keys" }, s("maze.end.keys", { n: this.keysWon(), total: this.maze.wings.length })), onAgain: () => this.castle(), onTitle: () => this.title() }), { view: { keys: this.keysWon(), total: this.maze.wings.length, crowned: this.crowned() } });
    }
  }
  const hd = /* @__PURE__ */ (() => {
    let t = null;
    return { id: dd, mount(e) {
      t = new N$(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), P$ = (t) => t.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, ""), R$ = (t) => "unit-".concat(P$(t)), Xn = "quiz-arena", pd = "chalkboard", D$ = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]), L$ = (t, e) => {
    var _a3;
    const s = t.pack.languages;
    if (e && s.includes(e)) return e;
    const n = (typeof navigator < "u" ? (_a3 = navigator.languages) != null ? _a3 : [navigator.language] : []).map((i) => i.toLowerCase());
    for (const i of n) {
      const r = s.find((o) => o === i || o === i.split("-")[0]);
      if (r) return r;
    }
    return s.includes(t.defaultLang) ? t.defaultLang : s[0];
  };
  class C$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "pack");
      __publicField(this, "data");
      __publicField(this, "store");
      __publicField(this, "progress");
      __publicField(this, "lang");
      __publicField(this, "ui");
      __publicField(this, "text");
      __publicField(this, "check");
      __publicField(this, "screen", "title");
      __publicField(this, "round", null);
      __publicField(this, "roundNumber", 0);
      __publicField(this, "roundScore", 0);
      __publicField(this, "roundBestCombo", 0);
      __publicField(this, "roundStars", 0);
      __publicField(this, "roundUnlocked", []);
      __publicField(this, "current", null);
      __publicField(this, "combo", 0);
      __publicField(this, "steps", 0);
      __publicField(this, "finished", false);
      __publicField(this, "turn", 0);
      __publicField(this, "difficulty", 3);
      __publicField(this, "lastResult");
      __publicField(this, "hud", {});
      __publicField(this, "rng");
      __publicField(this, "audio");
      __publicField(this, "audioMenu");
      __publicField(this, "onKey", (e) => this.handleKey(e));
      __publicField(this, "playTimer", new Su(() => this.progress, (e) => {
        this.progress = e;
      }, () => this.save()));
      __publicField(this, "speechMade", null);
      __publicField(this, "titleState", ns());
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.store = new vu(this.pack, wu()), this.progress = this.store.load(), this.lang = L$(this.data, this.progress.settings.lang), this.ui = Os(this.lang), this.text = Ht(this.data.catalogs, this.lang, this.pack.targetLang), this.check = Wt({ pack: this.pack, text: this.text }), this.rng = Gt(e.seed, "arena"), this.audio = new Eu({ cues: this.pack.cues, assets: this.data.assets, loops: xu(this.pack.extensions), settings: () => this.progress.settings }), this.audioMenu = new Mu({ ui: (s, n) => this.ui(s, n), channels: Tu(this.pack.cues, this.data.assets), settings: () => this.progress.settings, update: (s) => {
        this.progress = { ...this.progress, settings: { ...this.progress.settings, ...s } }, this.save();
      }, refresh: () => this.audio.refresh() }), this.setLang(this.lang, false);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Pu(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    mount() {
      this.host.root.classList.add("edu-stage"), Wn(this.host.root, "title", pd), document.addEventListener("keydown", this.onKey), this.playTimer.start(), this.go("title");
    }
    unmount() {
      var _a3, _b3, _c2;
      document.removeEventListener("keydown", this.onKey), this.playTimer.dispose(), this.audioMenu.close(), this.audio.dispose(), this.stopTimer(), (_c2 = (_a3 = this.current) == null ? void 0 : (_b3 = _a3.view).destroy) == null ? void 0 : _c2.call(_b3);
    }
    setLang(e, s = true) {
      this.lang = e, this.text = Ht(this.data.catalogs, e, this.pack.targetLang), this.ui = Os(e, this.data.catalogs[e]), this.check = Wt({ pack: this.pack, text: this.text }), document.documentElement.lang = e, document.title = this.courseTitle(), s && (this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.go(this.screen));
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    publish() {
      const e = this.round, s = this.current;
      this.host.publish(Zu({ screen: this.screen, shell: Xn, lang: this.lang, seed: this.host.seed, ...e ? { roundNumber: this.roundNumber, roundKind: e.kind, roundSize: e.size, ...e.unitId ? { unitId: e.unitId } : {} } : {}, ...s ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: e ? e.results.length - (s.answered ? 1 : 0) : 0 } : {}, combo: this.combo, score: this.progress.score, ...this.lastResult ? { lastResult: this.lastResult } : {}, reviewQueue: this.progress.queue, mastery: uu(this.pack, this.progress), finished: this.finished, steps: this.steps }));
    }
    save() {
      this.store.save(this.progress);
    }
    go(e) {
      var _a3, _b3, _c2;
      this.stopTimer(), e !== "item" && e !== "feedback" && ((_c2 = (_a3 = this.current) == null ? void 0 : (_b3 = _a3.view).destroy) == null ? void 0 : _c2.call(_b3), this.current = null), this.screen = e;
      const s = this.musicArea(e);
      s !== void 0 && this.audio.setArea(s), this.hud = {};
      const n = this.host.root;
      Wn(n, e, pd), Ts(n);
      const i = this.build(e), r = d("div", { class: "edu-app", testid: "app", "data-screen": e, "data-shell": Xn }, d("div", { class: "frame" }, d("main", { class: "board board-".concat(e), id: "edu-main" }, i)), d("div", { class: "burst-layer", "aria-hidden": "true" }), d("div", { class: "sr-only", role: "status", "aria-live": "polite", testid: "live" }));
      n.appendChild(r), Iu(this.pack.cues, this.data.assets) && this.audioMenu.mount(r), this.publish(), this.audioMenu.open || this.focusScreen();
    }
    musicArea(e) {
      var _a3;
      switch (e) {
        case "title":
        case "map":
        case "review":
          return "menu";
        case "item":
        case "feedback": {
          const s = this.round;
          return !s || s.kind === "review" || s.kind === "verbs" ? "menu" : s.kind === "boss" ? "boss" : R$((_a3 = s.unitId) != null ? _a3 : "");
        }
        case "end":
          return "end";
        default:
          return;
      }
    }
    focusScreen() {
      var _a3, _b3, _c2, _d2;
      const e = this.host.root.querySelector("#edu-main");
      if (this.screen === "item") {
        (_a3 = this.current) == null ? void 0 : _a3.view.focus(), (e == null ? void 0 : e.contains(document.activeElement)) || ((_b3 = e == null ? void 0 : e.querySelector("[data-autofocus]")) == null ? void 0 : _b3.focus());
        return;
      }
      if (this.screen === "feedback") return;
      (_d2 = (_c2 = e == null ? void 0 : e.querySelector("[data-autofocus]")) != null ? _c2 : e == null ? void 0 : e.querySelector("h1, h2")) == null ? void 0 : _d2.focus({ preventScroll: false }), window.scrollTo(0, 0);
    }
    build(e) {
      switch (e) {
        case "title":
          return this.buildTitle();
        case "map":
          return this.buildMap();
        case "item":
        case "feedback":
          return this.buildItem();
        case "summary":
          return this.buildSummary();
        case "review":
          return this.buildReview();
        case "end":
          return this.buildEnd();
        default:
          return d("p", {}, this.ui("loading"));
      }
    }
    heading(e, s, n) {
      return d(e, { class: "screen-title", tabindex: "-1", testid: n, "data-autofocus": "" }, s);
    }
    startHost() {
      const e = () => this.progress, s = (n) => {
        this.progress = n;
      };
      return { pack: this.pack, ui: this.ui, shellId: Xn, shells: this.host.shells, switchShell: (n) => this.host.switchShell(n), courseTitle: () => this.courseTitle(), unitTitle: (n) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((i) => i.id === n)) == null ? void 0 : _a3.title) != null ? _b3 : n);
      }, lang: this.lang, setLang: (n) => {
        this.setLang(n, false), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: n } }, this.save();
      }, get progress() {
        return e();
      }, set progress(n) {
        s(n);
      }, save: () => this.save(), persistent: this.store.persistent, started: bu(this.progress), refreshAudio: () => this.audio.refresh(), speechService: this.speechService, reset: () => {
        this.store.clear(), this.progress = Ps(this.pack.id), this.combo = 0, this.finished = false;
      } };
    }
    buildTitle() {
      const e = this.ui, s = d("label", { class: "toggle" }, d("input", { type: "checkbox", testid: "setting-timer", ...this.progress.settings.timer ? { checked: true } : {}, onchange: (n) => {
        this.progress = { ...this.progress, settings: { ...this.progress.settings, timer: n.target.checked } }, this.save();
      } }), d("span", { class: "toggle-text" }, d("b", {}, e("timer")), d("small", {}, e("timer.hint", { s: Or(this.pack).timerSeconds }))));
      return Ku(this.startHost(), { onStart: () => this.go("map"), settings: s }, () => this.go("title"), this.titleState);
    }
    unitLevels() {
      const e = /* @__PURE__ */ new Map();
      for (const s of Tt(this.pack.units)) {
        const n = this.pack.units.find((i) => i.id === s);
        e.set(s, n.requires.length === 0 ? 0 : 1 + Math.max(...n.requires.map((i) => {
          var _a3;
          return (_a3 = e.get(i)) != null ? _a3 : 0;
        })));
      }
      for (const s of this.pack.units) e.has(s.id) || e.set(s.id, 0);
      return e;
    }
    starsEl(e, s) {
      return d("span", { class: "stars", role: "img", "aria-label": this.ui("stars", { n: e }), "data-stars": String(e), ...s ? { testid: s } : {} }, [1, 2, 3].map((n) => d("span", { class: "star ".concat(n <= e ? "on" : "off"), "aria-hidden": "true" }, n <= e ? "★" : "☆")));
    }
    buildMap() {
      const e = this.ui, s = this.unitLevels(), n = Math.max(0, ...s.values()), i = (u) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((h) => h.id === u)) == null ? void 0 : _a3.title) != null ? _b3 : u);
      }, r = [];
      for (let u = 0; u <= n; u++) {
        const h = this.pack.units.filter((p) => s.get(p.id) === u);
        h.length !== 0 && r.push(d("li", { class: "map-level" }, u > 0 ? d("div", { class: "map-link", "aria-hidden": "true" }) : null, d("ul", { class: "map-row" }, h.map((p) => {
          var _a3, _b3;
          const f = Kn(this.pack, this.progress, p.id), m = (_b3 = (_a3 = this.progress.units[p.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0, g = Nr(this.pack, p.id).length;
          return d("li", {}, d("button", { type: "button", class: "unit-card ".concat(f ? "is-open" : "is-locked", " ").concat(Fn(this.progress, p.id) ? "is-mastered" : ""), testid: "unit-".concat(p.id), "data-stars": String(m), "data-locked": String(!f), "data-requires": p.requires.join(" "), ...yu(this.pack, p.id) ? { "data-assigned": "true" } : {}, ...f && g > 0 ? {} : { disabled: true }, onclick: () => this.beginRound("unit", p.id) }, d("span", { class: "unit-name" }, this.text.t(p.title)), p.summary ? d("span", { class: "unit-summary" }, this.text.t(p.summary)) : null, d("span", { class: "unit-meta" }, f ? e("map.items", { n: g }) : "🔒 ".concat(e("map.locked"))), p.requires.length ? d("span", { class: "unit-req" }, e("map.requires", { units: p.requires.map(i).join(", ") })) : null, yu(this.pack, p.id) ? d("span", { class: "unit-assigned", testid: "assigned-".concat(p.id) }, e("class.assigned")) : null, this.starsEl(m)));
        }))));
      }
      const o = xr(this.pack, this.progress), a = this.progress.boss.stars, c = d("li", { class: "map-level map-boss" }, d("div", { class: "map-link", "aria-hidden": "true" }), d("div", { class: "map-boss-wrap" }, d("button", { type: "button", class: "unit-card boss-card ".concat(o ? "is-open" : "is-locked"), testid: "boss", "data-stars": String(a), "data-locked": String(!o), ...o ? {} : { disabled: true }, onclick: () => this.beginRound("boss") }, d("span", { class: "unit-name" }, "👑 ".concat(e("map.boss"))), d("span", { class: "unit-summary" }, e(o ? "map.boss.ready" : "map.boss.locked")), this.starsEl(a)))), l = this.progress.queue;
      return d("section", { class: "map-screen" }, d("div", { class: "topbar" }, T("menu", "‹ ".concat(e("menu")), () => this.go("title"), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "map-stars" }, "★ ".concat(e("map.stars", { n: du(this.pack, this.progress), total: this.pack.units.length * 3 })))), this.heading("h1", e("map.title"), "map-title"), d("p", { class: "subject" }, this.courseTitle()), Pr(this.pack).length > 0 ? d("div", { class: "actions actions-center" }, T("verb-drill", "🔤 ".concat(e("map.verbs", { n: Du(this.pack, this.progress.cards, Date.now()) })), () => this.beginRound("verbs"), { class: "btn" })) : null, l.length > 0 ? d("div", { class: "actions actions-center" }, T("review", "↻ ".concat(e("map.review", { n: l.length })), () => this.go("review"), { class: "btn" })) : null, d("ol", { class: "map-levels", testid: "unit-map" }, r, c), a > 0 ? d("div", { class: "actions actions-center" }, T("finish", e("summary.finish"), () => this.finish(), { class: "btn btn-primary" })) : null);
    }
    beginRound(e, s) {
      const n = n1(this.pack, e, { ...s ? { unitId: s } : {}, queue: this.progress.queue, difficulty: e === "boss" ? 4 : this.difficulty, cards: this.progress.cards, now: Date.now(), exclude: uS(this.pack.items, gu(this.progress)) });
      if (n.size === 0) return this.go("map");
      this.round = n, this.roundNumber += 1, this.roundScore = 0, this.roundBestCombo = 0, this.combo = 0, this.lastResult = void 0, this.finished = false, this.nextQuestion();
    }
    nextQuestion() {
      if (!this.round) return this.go("map");
      const e = Lu(this.round, this.pack, this.rng, this.progress.cards, Date.now());
      if (!e) return this.endRound();
      const s = this.pack.items.find((r) => r.id === e.id);
      if (!s) return this.endRound();
      this.turn += 1, this.lastResult = void 0;
      const n = this.host.getItemRenderer(s.kind);
      if (!n) return this.unsupported(e, s);
      const i = n.render(this.itemContext(s));
      this.current = { pick: e, item: s, view: i, renderer: n, answered: false }, this.go("item"), this.startTimer();
    }
    unsupported(e, s) {
      console.warn('[EduEngine] no renderer for the item kind "'.concat(s.kind, '"; skipping ').concat(s.id)), this.round && (this.round = Rr(this.round, e, s, { correct: true, score: 1 }, "good")), this.nextQuestion();
    }
    itemContext(e) {
      var _a3, _b3;
      const s = "".concat(this.host.seed, ":").concat(e.id, ":").concat(this.turn), n = new Map(this.pack.assets.map((r) => [r.id, r])), i = (_a3 = this.pack.targetLang) != null ? _a3 : this.lang;
      return { item: e, data: this.data, lang: this.lang, text: this.text, check: this.check, rng: new st(s), seed: s, assetUrl: (r) => r ? this.data.assets[r] : void 0, assetAlt: (r) => {
        const o = r ? n.get(r) : void 0;
        return o ? this.text.t(o.alt) : "";
      }, ui: (r, o) => this.ui(r, o), specialLetters: (_b3 = Gl[i]) != null ? _b3 : [], submit: (r) => this.submit(r), duck: (r) => this.audio.duck(r), voice: (r) => this.audio.voice(r), ...this.progress.settings.speak !== false && this.speechService ? { speech: this.speechService } : {} };
    }
    submit(e) {
      const s = this.current;
      return s ? s.result ? s.result : this.answered(s, e, gn(s.item, e, this.check), false) : { correct: false, score: 0, expected: null, invalid: true };
    }
    answered(e, s, n, i) {
      if (this.stopTimer(), !this.round) return n;
      const r = Cu(e.item, s, n), o = Date.now(), a = e.deadline ? Math.max(0, e.deadline - o) / 1e3 : 0;
      this.round = Rr(this.round, e.pick, e.item, n, r, this.progress.cards, o), this.steps += 1;
      const c = this.progress, l = !e.pick.retry;
      let u = c.queue;
      n.correct ? (l || this.round.kind === "review") && (u = fu(u, e.item.id)) : u = pu(u, e.item.id);
      let h = Math.round(100 * n.score);
      n.correct ? (h += Math.min(this.combo, 10) * 10 + Math.round(a * 2), e.pick.retry && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.roundBestCombo = Math.max(this.roundBestCombo, this.combo), this.roundScore += h, this.progress = { ...c, cards: { ...c.cards, [e.item.id]: vc(mu(c, e.item.id, o), r, o) }, queue: u, score: c.score + h, bestCombo: Math.max(c.bestCombo, this.combo), answered: c.answered + (l ? 1 : 0), right: c.right + (l && n.correct ? 1 : 0) }, this.save(), e.answered = true, e.answer = s, e.result = n, this.lastResult = n, e.view.reveal(n, s);
      const p = Nu(e.item, s, n, { text: this.text, ui: this.ui, rng: this.rng }, i);
      return e.feedback = p, this.screen = "feedback", this.showFeedback(e, p), this.updateHud(), this.audio.sfx(n.correct ? "correct" : "wrong"), n.correct && [3, 5, 7, 10, 15, 20, 30].includes(this.combo) && (this.burst(this.combo), this.audio.sfx("combo")), this.publish(), n;
    }
    showFeedback(e, s) {
      var _a3, _b3;
      const n = this.host.root, i = n.querySelector(".edu-app");
      i && i.setAttribute("data-screen", "feedback");
      const r = n.querySelector(".item-body"), o = n.querySelector(".feedback-slot");
      if (!o) return;
      const a = this.ui, c = !!this.round && this.round.asked.length >= this.round.size && this.round.session.pending.length === 0, l = (p, f, m, ...g) => d("div", { class: "fb-part ".concat(p), testid: f }, d("h3", {}, m), g), u = d("div", { class: "feedback is-".concat(s.verdict), testid: "feedback", "data-result": s.verdict, tabindex: "-1" }, d("h2", { class: "fb-title", testid: "feedback-title" }, d("span", { class: "fb-icon", "aria-hidden": "true" }, s.verdict === "correct" ? "✓" : s.verdict === "partial" ? "≈" : s.verdict === "timeout" ? "⏱" : "✗"), s.title), s.notes.length ? d("ul", { class: "fb-notes", testid: "feedback-notes" }, s.notes.map((p) => d("li", {}, p))) : null, s.detail ? d("p", { class: "fb-detail", testid: "feedback-detail" }, s.detail) : null, s.whys.length ? l("fb-why", "feedback-why", a("fb.why"), s.whys.map((p) => d("p", {}, p))) : null, s.answer.length ? l("fb-answer", "feedback-answer", a("fb.answer"), s.answer.length === 1 ? d("p", { class: "fb-answer-text" }, s.answer[0]) : d("ul", {}, s.answer.map((p) => d("li", {}, p)))) : null, s.explanation ? l("fb-explain", "feedback-explanation", a("fb.explain"), d("p", {}, s.explanation)) : null, s.dyk ? l("fb-dyk", "feedback-dyk", "💡 ".concat(a("fb.dyk")), d("p", {}, s.dyk)) : null, d("div", { class: "actions" }, T("next", a(c ? "results" : "next"), () => this.nextQuestion(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      o.appendChild(u);
      const h = n.querySelector('[data-testid="live"]');
      h && (h.textContent = "".concat(s.title, ". ").concat(s.whys.join(" "), " ").concat(s.answer.join(". "))), r == null ? void 0 : r.classList.add("is-answered"), ((_a3 = e.result) == null ? void 0 : _a3.correct) ? Ms(r != null ? r : u, "fx-glow") : Ms(r != null ? r : u, "fx-shake"), u.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_b3 = n.querySelector('[data-testid="next"]')) == null ? void 0 : _b3.focus({ preventScroll: true });
    }
    burst(e) {
      const s = this.host.root.querySelector(".burst-layer");
      if (!s) return;
      const n = Array.from({ length: 14 }, (r, o) => {
        const a = o / 14 * Math.PI * 2 + o % 2 * 0.22, c = 90 + o % 3 * 48;
        return d("span", { class: "dust", "aria-hidden": "true", style: "--dx:".concat(Math.round(Math.cos(a) * c), "px;--dy:").concat(Math.round(Math.sin(a) * c), "px;--s:").concat(5 + o % 4 * 2, "px;--delay:").concat(o % 5 * 30, "ms") });
      }), i = d("div", { class: "burst", testid: "combo-burst" }, this.ui("burst", { n: e }), n);
      s.appendChild(i), window.setTimeout(() => i.remove(), 1400);
    }
    startTimer() {
      const e = this.current;
      if (!e || !this.progress.settings.timer || !r1(e.item)) return;
      const s = Or(this.pack).timerSeconds * 1e3;
      e.deadline = Date.now() + s;
      const n = () => {
        if (!this.current || this.current !== e || e.answered) return this.stopTimer();
        const i = e.deadline - Date.now();
        this.setTimer(Math.max(0, i), s), i <= 0 && (this.stopTimer(), this.answered(e, void 0, gn(e.item, void 0, this.check), true));
      };
      this.setTimer(s, s), e.timerId = window.setInterval(n, 200);
    }
    setTimer(e, s) {
      const n = this.hud.timer;
      if (!n) return;
      n.hidden = false, n.style.setProperty("--left", String(Math.max(0, e / s)));
      const i = n.querySelector(".timer-s");
      i && (i.textContent = String(Math.ceil(e / 1e3))), n.classList.toggle("is-low", e / s < 0.25);
    }
    stopTimer() {
      var _a3;
      const e = (_a3 = this.current) == null ? void 0 : _a3.timerId;
      e !== void 0 && window.clearInterval(e), this.current && (this.current.timerId = void 0);
    }
    updateHud() {
      if (this.hud.score && (this.hud.score.textContent = String(this.progress.score)), this.hud.combo) {
        this.hud.combo.textContent = "x".concat(this.combo);
        const e = this.hud.combo.closest(".combo");
        e == null ? void 0 : e.setAttribute("data-combo", String(Math.min(this.combo, 10))), e == null ? void 0 : e.classList.toggle("is-hot", this.combo >= 3), this.combo > 0 && Ms(this.hud.combo, "fx-pop", 500);
      }
      this.hud.progress && this.round && this.hud.progress.replaceChildren(...this.pips());
    }
    pips() {
      const e = this.round;
      if (!e) return [];
      const s = e.results.filter((n) => !n.retry);
      return Array.from({ length: e.size }, (n, i) => {
        const r = s[i], o = r ? r.correct ? "is-right" : "is-wrong" : i === s.length ? "is-now" : "";
        return d("span", { class: "pip ".concat(o), "aria-hidden": "true" });
      });
    }
    roundTitle() {
      var _a3, _b3;
      const e = this.round;
      return e ? e.kind === "boss" ? "👑 ".concat(this.ui("map.boss")) : e.kind === "review" ? "↻ ".concat(this.ui("review")) : e.kind === "verbs" ? "🔤 ".concat(this.ui("map.verbs", { n: Du(this.pack, this.progress.cards, Date.now()) })) : this.text.t((_b3 = (_a3 = this.pack.units.find((s) => s.id === e.unitId)) == null ? void 0 : _a3.title) != null ? _b3 : "") : "";
    }
    buildItem() {
      const e = this.current, s = this.round;
      if (!e || !s) return d("p", {}, this.ui("loading"));
      const n = this.ui, i = e.item;
      this.hud.score = d("b", { testid: "hud-score" }, String(this.progress.score)), this.hud.combo = d("b", { testid: "hud-combo" }, "x".concat(this.combo)), this.hud.progress = d("span", { class: "pips", testid: "hud-progress" }, this.pips()), this.hud.timer = d("div", { class: "timer", role: "timer", testid: "hud-timer", hidden: true }, d("span", { class: "timer-s" }), d("span", { class: "timer-bar" }, d("span", { class: "timer-fill" })));
      const r = d("header", { class: "hud" }, T("leave", "‹ ".concat(n("leave")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" }), d("div", { class: "hud-mid" }, d("span", { class: "hud-unit", testid: "hud-unit" }, this.roundTitle()), this.hud.progress), d("div", { class: "hud-stats" }, d("span", { class: "stat" }, d("small", {}, n("score")), this.hud.score), d("span", { class: "combo ".concat(this.combo >= 3 ? "is-hot" : ""), "data-combo": String(Math.min(this.combo, 10)) }, d("small", {}, n("combo")), this.hud.combo)), this.hud.timer), o = d("p", { class: "q-meta", testid: "question-number" }, e.pick.retry ? d("span", { class: "tag tag-retry", testid: "retry-tag" }, n("retry")) : n("question", { i: Math.min(s.asked.length + (e.answered ? 0 : 1), s.size), n: s.size })), a = e.renderer.ownsPrompt ? d("h1", { class: "sr-only" }, this.roundTitle()) : d("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, this.text.t(i.prompt)), c = D$.has(i.kind) ? null : Vl(this.itemContext(i)), l = i.hint, u = l && this.text.hasText(l) ? this.text.t(l) : null;
      let h = false;
      const p = d("p", { class: "hint-text", testid: "hint-text", hidden: true }, u != null ? u : ""), f = u ? T("hint", "💡 ".concat(n("hint")), () => {
        h = !h, p.hidden = !h, f == null ? void 0 : f.setAttribute("aria-expanded", String(h));
      }, { class: "btn btn-small btn-ghost", "aria-expanded": "false" }) : null, m = d("div", { class: "item-body kind-".concat(i.kind).concat(e.answered ? " is-answered" : ""), testid: "item-body", "data-kind": i.kind }, e.view.el);
      return d("section", { class: "question", "aria-label": this.text.t(i.prompt) }, r, o, a, c, f, p, m, d("div", { class: "feedback-slot", "aria-live": "polite" }));
    }
    leaveRound() {
      this.round = null, this.go("map");
    }
    endRound() {
      const e = this.round;
      if (!e) return this.go("map");
      const s = Dr(e), n = this.progress;
      e.kind === "unit" || e.kind === "boss" ? (this.progress = hu(this.progress, e.kind === "boss" ? { boss: true } : { unitId: e.unitId }, s), this.roundStars = jr(s), this.roundUnlocked = lu(this.pack, n, this.progress), e.kind === "unit" && (this.difficulty = e.adaptive.difficulty)) : (this.roundStars = 0, this.roundUnlocked = []), this.save(), (e.kind === "unit" || e.kind === "boss") && this.audio.sfx(e.kind === "boss" ? "boss" : "level-up"), this.go("summary");
    }
    buildSummary() {
      const e = this.round;
      if (!e) return this.buildMap();
      const s = this.ui, n = Math.round(Dr(e) * 100), i = Lr(e), r = e.kind === "unit" || e.kind === "boss", o = e.kind === "boss" && this.roundStars >= 1, a = (l) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((u) => u.id === l)) == null ? void 0 : _a3.title) != null ? _b3 : l);
      }, c = [];
      return this.roundUnlocked.length && c.push(d("p", { class: "message message-ok", testid: "summary-unlocked" }, "🔓 ".concat(s("summary.unlocked", { units: this.roundUnlocked.map(a).join(", ") })))), e.kind === "unit" && xr(this.pack, this.progress) && this.progress.boss.rounds === 0 && c.push(d("p", { class: "message message-ok", testid: "summary-boss-open" }, "👑 ".concat(s("summary.bossLocked")))), e.kind === "unit" && this.roundStars < 2 && c.push(d("p", { class: "message", testid: "summary-need-stars" }, s("summary.needStars"))), e.kind === "boss" && !o && c.push(d("p", { class: "message message-bad", testid: "summary-boss-fail" }, s("summary.bossFail"))), d("section", { class: "summary-screen" }, this.heading("h1", s(n === 100 && r ? "summary.perfect" : "summary.title"), "summary-title"), d("p", { class: "subject" }, this.roundTitle()), r ? this.starsEl(this.roundStars, "summary-stars") : null, d("p", { class: "big-number", testid: "summary-accuracy" }, s("summary.accuracy", { n })), d("p", { testid: "summary-score" }, "".concat(s("summary.score", { n: this.roundScore }), " · ").concat(s("summary.combo", { n: this.roundBestCombo }))), c, i.length ? d("ul", { class: "miss-list", testid: "summary-misses" }, i.map((l) => {
        var _a3;
        const u = this.pack.items.find((p) => p.id === l), h = u ? Ds(u, { text: this.text, ui: s }).join(" / ") : "";
        return d("li", { testid: "miss-".concat(l) }, d("span", {}, this.text.t((_a3 = u == null ? void 0 : u.prompt) != null ? _a3 : l)), h ? d("small", { class: "miss-answer" }, h.length > 140 ? "".concat(h.slice(0, 139), "…") : h) : null);
      })) : null, d("div", { class: "actions actions-center" }, o ? T("finish", s("summary.finish"), () => this.finish(), { class: "btn btn-primary btn-big" }) : null, T("to-map", s("summary.back"), () => this.leaveRound(), { class: "btn ".concat(o ? "" : "btn-primary", " btn-big") }), this.progress.queue.length > 0 ? T("review", "↻ ".concat(s("map.review", { n: this.progress.queue.length })), () => this.go("review"), { class: "btn" }) : null, e.kind !== "review" ? T("replay", s("summary.again"), () => this.beginRound(e.kind, e.unitId), { class: "btn" }) : null));
    }
    buildReview() {
      const e = this.ui, n = this.progress.queue.filter((i) => this.pack.items.some((r) => r.id === i)).map((i) => this.pack.items.find((r) => r.id === i));
      return d("section", { class: "review-screen" }, d("div", { class: "topbar" }, T("to-map", "‹ ".concat(e("review.back")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" })), this.heading("h1", e("review.title"), "review-title"), n.length === 0 ? d("p", { class: "message", testid: "review-empty" }, e("review.empty")) : d("ul", { class: "review-list", testid: "review-list" }, n.map((i) => {
        const r = Ds(i, { text: this.text, ui: e });
        return d("li", { class: "review-item", testid: "review-item-".concat(i.id) }, d("p", { class: "review-q" }, this.text.t(i.prompt)), r.length ? d("p", { class: "review-a" }, d("b", {}, "".concat(e("review.answer"), ": ")), r.join(" / ")) : null, this.text.text(i.explanation) ? d("p", { class: "review-e" }, this.text.t(i.explanation)) : null);
      })), d("div", { class: "actions actions-center" }, n.length ? T("practice", e("review.practice"), () => this.beginRound("review"), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, T("to-map", e("review.back"), () => this.leaveRound(), { class: "btn btn-big" })));
    }
    finish() {
      this.finished = true, this.round = null, this.go("end");
    }
    buildEnd() {
      const e = this.ui, s = this.progress, n = s.answered > 0 ? Math.round(s.right / s.answered * 100) : 0;
      return d("section", { class: "end-screen" }, d("p", { class: "eyebrow" }, this.courseTitle()), this.heading("h1", e("end.title"), "end-title"), d("p", { class: "subject" }, e("end.sub")), d("ul", { class: "end-stars", testid: "end-units" }, this.pack.units.map((i) => {
        var _a3, _b3;
        return d("li", {}, d("span", {}, this.text.t(i.title)), this.starsEl((_b3 = (_a3 = s.units[i.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0));
      }), d("li", { class: "end-boss" }, d("span", {}, "👑 ".concat(e("map.boss"))), this.starsEl(s.boss.stars))), d("p", { class: "big-number", testid: "end-score" }, "".concat(e("end.score"), ": ").concat(s.score)), d("p", { testid: "end-accuracy" }, e("end.accuracy", { n })), d("div", { class: "actions actions-center" }, T("play-again", e("end.again"), () => {
        this.finished = false, this.round = null, this.combo = 0, this.go("map");
      }, { class: "btn btn-primary btn-big", "data-autofocus": "" }), T("to-title", e("end.title.screen"), () => {
        this.finished = false, this.go("title");
      }, { class: "btn btn-big" })));
    }
    handleKey(e) {
      var _a3, _b3;
      if (e.defaultPrevented) return;
      const s = this.current;
      if (this.screen === "item" && s && !s.answered) {
        if (Is(e.target) && /^[0-9]$/.test(e.key)) return;
        (_b3 = (_a3 = s.view).key) == null ? void 0 : _b3.call(_a3, e);
        return;
      }
      if (this.screen === "feedback" && s && (e.key === "Enter" || e.key === " ")) {
        const n = e.target;
        if (n && (n.tagName === "BUTTON" || n.tagName === "A" || n.tagName === "INPUT" || n.tagName === "SELECT" || n.getAttribute("role") === "button")) return;
        e.preventDefault(), this.nextQuestion();
      }
    }
  }
  const fd = { id: Xn, mount(t) {
    const e = new C$(t);
    this.unmount = () => e.unmount(), e.mount();
  } };
  function md(t) {
    return d("span", { class: "pc-level", "data-level": t }, t);
  }
  function Z$(t) {
    var _a3;
    return t.url ? d("span", { class: "pc-avatar has-image", "aria-hidden": "true" }, d("img", { src: t.url, alt: "" })) : d("span", { class: "pc-avatar pc-av-".concat(t.index % 6 + 1), "aria-hidden": "true" }, (_a3 = [...t.name][0]) != null ? _a3 : "?");
  }
  function Vr(t) {
    var _a3, _b3;
    const e = d("div", { class: "pc-bubble" }, d("p", { class: "pc-name" }, t.speaker.name), t.lead ? d("p", { class: "pc-lead" }, t.lead) : null, t.text !== null ? d("p", { class: "pc-text", ...t.lang ? { lang: t.lang } : {} }, t.text) : d("p", { class: "pc-text pc-hidden-text" }, (_a3 = t.hidden) != null ? _a3 : "..."), t.note ? d("p", { class: "pc-note" }, t.note) : null, (_b3 = t.extra) != null ? _b3 : null, t.actions && t.actions.some(Boolean) ? d("div", { class: "pc-actions" }, t.actions) : null);
    return d("li", { class: "pc-line is-".concat(t.kind).concat(t.slow ? " is-slow" : ""), testid: t.testid, ...t.outcome ? { "data-outcome": t.outcome } : {} }, Z$(t.speaker), e);
  }
  const gd = (t, e, s, n = {}) => T(t, e, s, { class: "btn btn-small btn-ghost", ...n }), me = (t, e, ...s) => de(t, e, ...s);
  function U$() {
    return [me("path", { class: "pc-pot", d: "M34 110 L86 110 L79 136 Q78 138 76 138 L44 138 Q42 138 41 136 Z" }), me("path", { class: "pc-pot-shade", d: "M70 110 L86 110 L79 136 Q78 138 76 138 L62 138 Z" }), me("path", { class: "pc-rim", d: "M28 100 Q28 96 32 96 L88 96 Q92 96 92 100 L92 108 Q92 110 90 110 L30 110 Q28 110 28 108 Z" }), me("ellipse", { class: "pc-soil", cx: 60, cy: 96, rx: 28, ry: 4.5 })];
  }
  const St = (t, e) => me("path", { class: "pc-leaf ".concat(t), d: e });
  function B$(t) {
    switch (t) {
      case "seed":
        return [me("ellipse", { class: "pc-seed", cx: 60, cy: 93, rx: 5, ry: 3.2, transform: "rotate(-18 60 93)" }), me("circle", { class: "pc-seed-dot", cx: 50, cy: 94, r: 1.4 }), me("circle", { class: "pc-seed-dot", cx: 72, cy: 93.5, r: 1.2 })];
      case "sprout":
        return [me("path", { class: "pc-stem", d: "M60 96 Q60 86 60 78" }), St("pc-l1", "M60 80 Q47 80 43 69 Q56 66 60 80 Z"), St("pc-l2", "M60 82 Q73 82 77 71 Q64 68 60 82 Z")];
      case "bud":
        return [me("path", { class: "pc-stem", d: "M60 96 Q58 76 60 52" }), St("pc-l1", "M59 86 Q42 88 36 73 Q52 68 59 86 Z"), St("pc-l2", "M60 74 Q77 74 83 59 Q67 55 60 74 Z"), me("ellipse", { class: "pc-bud", cx: 60, cy: 46, rx: 8, ry: 11 }), me("path", { class: "pc-sepal", d: "M51 50 Q60 60 69 50 Q60 55 51 50 Z" })];
      case "bloom":
        return [me("path", { class: "pc-stem", d: "M60 96 Q58 74 60 46" }), St("pc-l1", "M59 86 Q40 90 33 73 Q51 67 59 86 Z"), St("pc-l2", "M60 72 Q80 72 87 55 Q69 51 60 72 Z"), me("g", { class: "pc-flower" }, ...[0, 60, 120, 180, 240, 300].map((e) => me("ellipse", { class: "pc-petal", cx: 60, cy: 24, rx: 7.5, ry: 12, transform: "rotate(".concat(e, " 60 38)") })), me("circle", { class: "pc-centre", cx: 60, cy: 38, r: 7 }))];
      case "wilted":
        return [me("path", { class: "pc-stem pc-stem-wilt", d: "M60 96 Q60 74 62 64 Q66 54 80 60" }), St("pc-l1 pc-leaf-wilt", "M60 88 Q44 94 34 90 Q42 80 60 88 Z"), St("pc-l2 pc-leaf-wilt", "M61 76 Q78 84 86 94 Q70 96 61 76 Z"), me("ellipse", { class: "pc-bud pc-bud-wilt", cx: 84, cy: 66, rx: 6, ry: 9, transform: "rotate(-35 84 66)" })];
    }
  }
  function kd(t) {
    return de("svg", { class: "pc-plant stage-".concat(t), viewBox: "0 0 120 142", "aria-hidden": "true", focusable: "false" }, ...U$(), me("g", { class: "pc-grow" }, ...B$(t)));
  }
  const F$ = 3;
  function bd(t) {
    return { sceneId: t.id, cursor: $e(t, t.start) ? t.start : null, log: [], turns: [], retry: null };
  }
  function Dt(t, e) {
    if (e.retry) {
      const n = $e(t, e.retry.lineId);
      if (n && qe(n)) return { type: "turn", line: n, retry: true, tries: e.retry.tries };
    }
    const s = $e(t, e.cursor);
    return s ? qe(s) ? { type: "turn", line: s, retry: false, tries: 0 } : { type: "say", line: s } : { type: "done" };
  }
  function K$(t, e) {
    const s = Dt(t, e);
    return s.type !== "say" ? e : { ...e, cursor: s.line.next, log: [...e.log, { kind: "say", lineId: s.line.id, speaker: s.line.say }] };
  }
  const Yr = (t) => [...t.log].reverse().find((e) => e.kind === "say");
  function q$(t, e, s) {
    var _a3, _b3;
    const n = Dt(t, e);
    if (n.type !== "turn") return e;
    const { line: i } = n, r = n.tries + 1, o = (_b3 = (_a3 = Yr(e)) == null ? void 0 : _a3.speaker) != null ? _b3 : "", c = !n.retry ? [...e.turns, { lineId: i.id, itemId: i.reply, tries: r, score: Math.max(0, Math.min(1, s.score)), right: s.correct, shown: false }] : e.turns.map((l) => l.lineId === i.id ? { ...l, tries: r, right: l.right || s.correct } : l);
    return s.correct ? { ...e, turns: c, retry: null, cursor: i.next, log: [...e.log, { kind: "you", lineId: i.id, outcome: "right", text: s.text }] } : r >= F$ ? { ...e, turns: c.map((l) => l.lineId === i.id ? { ...l, shown: true } : l), retry: null, cursor: i.next, log: [...e.log, { kind: "help", lineId: i.id, speaker: o, attempt: r }, { kind: "you", lineId: i.id, outcome: "shown", text: s.text }] } : { ...e, turns: c, retry: { lineId: i.id, tries: r }, log: [...e.log, { kind: "help", lineId: i.id, speaker: o, attempt: r }] };
  }
  function G$(t, e) {
    const s = Dt(t, e);
    return s.type !== "turn" ? e : { ...e, retry: null, cursor: s.line.next };
  }
  const W$ = (t, e) => Dt(t, e).type === "done";
  function H$(t) {
    return t.turns.length === 0 ? 0 : t.turns.reduce((e, s) => e + s.score, 0) / t.turns.length;
  }
  const Lt = (t) => xs(t).path.filter((e) => qe($e(t, e))).length;
  function Jr(t, e, s) {
    const n = xs(t).path, i = /* @__PURE__ */ new Set();
    return e.log.forEach((r, o) => {
      if (r.kind !== "say") return;
      const a = $e(t, r.lineId);
      if (!a || !Se(a) || !a.listen || !a.audio || !s(a.audio)) return;
      const c = n.indexOf(a.id), l = n.slice(c + 1).some((h) => qe($e(t, h))), u = e.log.slice(o + 1).some((h) => h.kind === "you");
      l && !u && i.add(a.id);
    }), i;
  }
  function V$(t, e, s) {
    var _a3, _b3, _c2, _d2;
    if (e.youSay && s.hasText(e.youSay)) return s.t(e.youSay);
    if (!t) return null;
    const n = t;
    switch (t.kind) {
      case "typed":
        return typeof n.answer == "string" ? (_a3 = s.canonical(n.answer)) != null ? _a3 : null : null;
      case "mcq": {
        const i = (_b3 = n.options) == null ? void 0 : _b3.find((r) => r.id === n.answer);
        return i ? s.t(i.text) : null;
      }
      case "listening": {
        if (n.mode !== "choose") return null;
        const i = (_c2 = n.options) == null ? void 0 : _c2.find((r) => r.id === n.answer);
        return i ? s.t(i.text) : null;
      }
      case "cloze": {
        if (!n.text || !n.gaps) return null;
        let i = s.t(n.text);
        for (const r of n.gaps) i = i.split("{{".concat(r.id, "}}")).join((_d2 = s.canonical(r.answer)) != null ? _d2 : s.t(r.answer));
        return i;
      }
      default:
        return null;
    }
  }
  function Y$(t) {
    const { section: e, pack: s } = t, n = new Set(s.units.filter((l) => Es(e, l.id).length > 0).map((l) => l.id)), i = [], r = Tt(s.units), o = (l, u = /* @__PURE__ */ new Set()) => l.flatMap((h) => {
      var _a3, _b3;
      return u.has(h) ? [] : (u.add(h), n.has(h) ? t.mastered(h) ? [] : [h] : o((_b3 = (_a3 = s.units.find((p) => p.id === h)) == null ? void 0 : _a3.requires) != null ? _b3 : [], u));
    });
    for (const l of r) {
      const u = s.units.find((p) => p.id === l);
      if (!u) continue;
      const h = o(u.requires);
      for (const p of Es(e, l)) i.push({ scene: p, unit: l, finale: false, locked: h.length > 0, stars: t.unitStars(l), needs: h, turns: Lt(p) });
    }
    const a = new Set(s.units.map((l) => l.id));
    for (const l of e.scenes) l.id === e.finale || l.unit && a.has(l.unit) || i.push({ scene: l, unit: l.unit, finale: false, locked: false, stars: 0, needs: [], turns: Lt(l) });
    const c = e.scenes.find((l) => l.id === e.finale);
    if (c) {
      const l = [...n].filter((u) => !t.mastered(u));
      i.push({ scene: c, unit: void 0, finale: true, locked: l.length > 0, stars: t.bossStars, needs: l, turns: Lt(c) });
    }
    return i;
  }
  function J$(t, e) {
    const s = new Set(t.filter((n) => n.locked).map((n) => n.scene.id));
    return e.filter((n) => !n.locked && s.has(n.scene.id)).map((n) => n.scene.id);
  }
  const vd = ["seed", "sprout", "bud", "bloom"];
  function wd(t, e) {
    if (e) return "wilted";
    if (!t || t.last === null) return "seed";
    if (t.reps === 0) return "wilted";
    switch (pb(t)) {
      case "mature":
        return "bloom";
      case "young":
        return "bud";
      case "learning":
        return "sprout";
      default:
        return "seed";
    }
  }
  function Q$(t) {
    const e = new Set(t.queue), s = new Set(t.doneUnits), n = new Set(t.pack.items.map((i) => i.id));
    return t.section.garden.filter((i) => n.has(i.item)).map((i) => {
      const r = t.cards[i.item], o = Il(t.pack, i), a = r !== void 0 || o !== void 0 && s.has(o);
      return { word: i, unit: o, planted: a, stage: wd(r, e.has(i.item)), due: a && (r === void 0 || r.last === null || r.due <= t.now), dueAt: r && r.last !== null ? r.due : null };
    });
  }
  function Qr(t) {
    return [...new Set(t.filter((e) => e.planted && (e.due || e.stage === "wilted" || e.stage === "seed")).map((e) => e.word.item))];
  }
  function Xr(t) {
    const e = { seed: 0, sprout: 0, bud: 0, bloom: 0, wilted: 0 };
    for (const s of t) s.planted && (e[s.stage] += 1);
    return e;
  }
  function X$(t, e) {
    if (e === "wilted") return t === "wilted" ? "same" : "wilted";
    const s = t === "wilted" ? -1 : vd.indexOf(t);
    return vd.indexOf(e) > s ? "grew" : "same";
  }
  function ez(t, e) {
    return t.dueAt === null ? null : t.dueAt <= e ? 0 : Math.ceil((t.dueAt - e) / Fi);
  }
  const tz = (t, e) => e !== "" && " ".concat(t, " ").includes(" ".concat(e, " "));
  function sz(t, e, s, n = /* @__PURE__ */ new Set()) {
    const i = Pe(s(e.text)), r = [...t.scenes.filter((o) => n.has(o.id)), ...t.scenes.filter((o) => !n.has(o.id))];
    for (const o of r) for (const a of xs(o).path) {
      const c = $e(o, a);
      if (c && Se(c) && tz(Pe(s(c.text)), i)) return { sceneId: o.id, lineId: c.id, speaker: c.say, text: c.text, how: "heard" };
    }
    for (const o of r) {
      const a = xs(o).path;
      for (const [c, l] of a.entries()) {
        const u = $e(o, l);
        if (!(!u || !qe(u) || u.reply !== e.item)) for (let h = c - 1; h >= 0; h--) {
          const p = $e(o, a[h]);
          if (p && Se(p)) return { sceneId: o.id, lineId: p.id, speaker: p.say, text: p.text, how: "used" };
        }
      }
    }
    return null;
  }
  const nz = { en: { "rp.tagline": "A postcard from a café on the Adriatic", "rp.title.level": "Level {level}", "rp.title.about": "Talk your way through three conversations, then keep the words alive in your garden.", "rp.scenes.title": "Conversations", "rp.scenes.sub": "Pick a scene. Answer in the language you are learning: choose or type.", "rp.scenes.stars": "{n} of {total} stars", "rp.scenes.locked": "Finish the earlier scenes first (2 stars).", "rp.scenes.finale": "The finale mixes everything you have learned.", "rp.scenes.finale.locked": "Open every scene with 2 stars to take the finale.", "rp.scenes.garden": "Vocabulary garden", "rp.scene.turns": "{n} turns", "rp.scene.open": "Play", "rp.scene.back": "Back to the scenes", "rp.scene.setting": "Setting", "rp.next": "Next line", "rp.turn": "Your turn", "rp.lead": "Your turn {i} of {n}", "rp.water.lead": "Watering {i} of {n}", "rp.garden.planted": "{n} of {total} words planted", "rp.cont": "Continue the conversation", "rp.retry": "Try again", "rp.finish": "Finish the scene", "rp.log": "The conversation so far", "rp.translate": "Translate", "rp.translate.hide": "Hide translation", "rp.play": "Play this line", "rp.listen": "Listen", "rp.hidden": "Listen to the clip: the words appear after your answer.", "rp.said": "{name} says:", "rp.you": "You", "rp.again": "{name} says it again, slowly:", "rp.again.second": "{name} tries once more, even more slowly:", "rp.again.plain": "Sorry? Once more, slowly.", "rp.model": "You could say:", "rp.model.shown": "The conversation goes on. Your words are saved for review.", "rp.effect.right": "{name} understands you and the conversation goes on.", "rp.effect.wrong": "{name} did not quite understand. The line comes again.", "rp.effect.shown": "{name} shows you what to say and the conversation goes on.", "rp.effect.grew": 'The plant for "{word}" grew: {from} to {to}.', "rp.effect.planted": 'The plant for "{word}" is in the garden.', "rp.effect.wilted": 'The plant for "{word}" wilts. Water it again soon.', "rp.effect.same": 'The plant for "{word}" stays a {stage}.', "rp.hud.last": "The last thing said to you", "rp.hud.plant": "The plant you are watering", "rp.done.title": "Scene finished", "rp.done.finale": "Finale finished", "rp.done.accuracy": "{n}% right first time", "rp.done.words": "New words in your garden", "rp.done.nowords": "No new words this time.", "rp.done.unlocked": "Opened: {scenes}", "rp.done.need": "Two stars open the next scene. Play this one again.", "rp.done.boss.fail": "Not yet: one star beats the finale. Play it again.", "rp.done.replay": "Play the scene again", "rp.done.garden": "Visit the garden", "rp.done.finish": "Finish the course", "rp.garden.title": "Vocabulary garden", "rp.garden.sub": "One plant for every word you have met. Plants grow when you remember the word and wilt when you forget it.", "rp.garden.stats": "{seed} seeds, {sprout} sprouts, {bud} buds, {bloom} in bloom, {wilted} wilted", "rp.garden.empty": "The garden is empty. Finish a scene and its words are planted here.", "rp.garden.packet": "{n} more words are still in the seed packet. Finish scenes to plant them.", "rp.garden.met": 'Heard in the scene "{scene}", where {name} said: "{line}"', "rp.garden.used": 'You used it in the scene "{scene}", after {name} said: "{line}"', "rp.garden.next": "Next watering: {when}", "rp.garden.next.due": "now", "rp.garden.next.days": "in {n} days", "rp.garden.next.day": "tomorrow", "rp.water": "Water the plants ({n})", "rp.water.none": "Nothing to water right now", "rp.water.done": "Watered: {right} of {n} remembered. Come back when the plants are thirsty again.", "rp.water.empty": "All the plants are happy for now.", "rp.garden.back": "Back to the scenes", "rp.stage.seed": "seed", "rp.stage.sprout": "sprout", "rp.stage.bud": "bud", "rp.stage.bloom": "bloom", "rp.stage.wilted": "wilted", "rp.stage.label": "Stage: {stage}", "rp.plant.alt": "A potted plant: {stage}", "rp.end.title": "You can hold a conversation!", "rp.end.sub": "You mastered every scene and finished the finale. Keep watering the garden.", "rp.end.words": "{n} words in the garden, {bloom} in bloom" }, hr: { "rp.tagline": "Razglednica iz kafića na Jadranu", "rp.title.level": "Razina {level}", "rp.title.about": "Prođite tri razgovora, a zatim održavajte riječi na životu u svom vrtu.", "rp.scenes.title": "Razgovori", "rp.scenes.sub": "Odaberite scenu. Odgovarajte na jeziku koji učite: birajte ili tipkajte.", "rp.scenes.stars": "{n} od {total} zvjezdica", "rp.scenes.locked": "Prvo završite prethodne scene (2 zvjezdice).", "rp.scenes.finale": "Finale miješa sve što ste naučili.", "rp.scenes.finale.locked": "Otvorite svaku scenu s 2 zvjezdice za finale.", "rp.scenes.garden": "Vrt riječi", "rp.scene.turns": "{n} odgovora", "rp.scene.open": "Igraj", "rp.scene.back": "Natrag na scene", "rp.scene.setting": "Mjesto radnje", "rp.next": "Sljedeća replika", "rp.turn": "Vi ste na redu", "rp.lead": "Vi ste na redu: {i} od {n}", "rp.water.lead": "Zalijevanje {i} od {n}", "rp.garden.planted": "{n} od {total} riječi posađeno", "rp.cont": "Nastavite razgovor", "rp.retry": "Pokušajte ponovno", "rp.finish": "Završi scenu", "rp.log": "Razgovor do sada", "rp.translate": "Prijevod", "rp.translate.hide": "Sakrij prijevod", "rp.play": "Poslušaj repliku", "rp.listen": "Slušajte", "rp.hidden": "Poslušajte snimku: riječi se pojave nakon vašeg odgovora.", "rp.said": "{name} kaže:", "rp.you": "Vi", "rp.again": "{name} ponavlja polako:", "rp.again.second": "{name} pokušava još jednom, još sporije:", "rp.again.plain": "Molim? Još jednom, polako.", "rp.model": "Mogli biste reći:", "rp.model.shown": "Razgovor ide dalje. Vaše riječi su spremljene za ponavljanje.", "rp.effect.right": "{name} vas razumije i razgovor ide dalje.", "rp.effect.wrong": "{name} vas nije baš razumio. Replika dolazi ponovno.", "rp.effect.shown": "{name} vam pokazuje što reći i razgovor ide dalje.", "rp.effect.grew": 'Biljka za "{word}" je narasla: {from} u {to}.', "rp.effect.planted": 'Biljka za "{word}" je u vrtu.', "rp.effect.wilted": 'Biljka za "{word}" vene. Uskoro je zalijte ponovno.', "rp.effect.same": 'Biljka za "{word}" ostaje: {stage}.', "rp.hud.last": "Zadnje što vam je rečeno", "rp.hud.plant": "Biljka koju zalijevate", "rp.done.title": "Scena je gotova", "rp.done.finale": "Finale je gotovo", "rp.done.accuracy": "{n}% točno iz prvog pokušaja", "rp.done.words": "Nove riječi u vašem vrtu", "rp.done.nowords": "Ovaj put nema novih riječi.", "rp.done.unlocked": "Otvoreno: {scenes}", "rp.done.need": "Dvije zvjezdice otvaraju sljedeću scenu. Odigrajte ovu ponovno.", "rp.done.boss.fail": "Još ne: jedna zvjezdica pobjeđuje finale. Odigrajte ga ponovno.", "rp.done.replay": "Odigraj scenu ponovno", "rp.done.garden": "Posjeti vrt", "rp.done.finish": "Završi tečaj", "rp.garden.title": "Vrt riječi", "rp.garden.sub": "Jedna biljka za svaku riječ koju ste upoznali. Biljke rastu kad se sjetite riječi, a venu kad je zaboravite.", "rp.garden.stats": "{seed} sjemenki, {sprout} klica, {bud} pupova, {bloom} u cvatu, {wilted} uvelih", "rp.garden.empty": "Vrt je prazan. Završite scenu i njezine riječi bit će posađene ovdje.", "rp.garden.packet": "Još {n} riječi je u vrećici sjemenki. Završite scene da ih posadite.", "rp.garden.met": 'Čuli ste je u sceni "{scene}", gdje je {name} rekao: "{line}"', "rp.garden.used": 'Upotrijebili ste je u sceni "{scene}", nakon što je {name} rekao: "{line}"', "rp.garden.next": "Sljedeće zalijevanje: {when}", "rp.garden.next.due": "sada", "rp.garden.next.days": "za {n} dana", "rp.garden.next.day": "sutra", "rp.water": "Zalij biljke ({n})", "rp.water.none": "Trenutno nema što zalijevati", "rp.water.done": "Zalijevanje: sjetili ste se {right} od {n}. Vratite se kad biljke ponovno ožedne.", "rp.water.empty": "Sve su biljke za sada zadovoljne.", "rp.garden.back": "Natrag na scene", "rp.stage.seed": "sjemenka", "rp.stage.sprout": "klica", "rp.stage.bud": "pup", "rp.stage.bloom": "cvijet", "rp.stage.wilted": "uvela", "rp.stage.label": "Stadij: {stage}", "rp.plant.alt": "Biljka u loncu: {stage}", "rp.end.title": "Znate voditi razgovor!", "rp.end.sub": "Savladali ste svaku scenu i završili finale. Nastavite zalijevati vrt.", "rp.end.words": "{n} riječi u vrtu, {bloom} u cvatu" }, de: { "rp.tagline": "Eine Postkarte aus einem Café an der Adria", "rp.title.level": "Stufe {level}", "rp.title.about": "Meistere drei Gespräche und halte dann die Wörter in deinem Garten lebendig.", "rp.scenes.title": "Gespräche", "rp.scenes.sub": "Wähle eine Szene. Antworte in der Sprache, die du lernst: auswählen oder tippen.", "rp.scenes.stars": "{n} von {total} Sternen", "rp.scenes.locked": "Beende zuerst die früheren Szenen (2 Sterne).", "rp.scenes.finale": "Das Finale mischt alles, was du gelernt hast.", "rp.scenes.finale.locked": "Öffne jede Szene mit 2 Sternen, um das Finale zu spielen.", "rp.scenes.garden": "Vokabelgarten", "rp.scene.turns": "{n} Runden", "rp.scene.open": "Spielen", "rp.scene.back": "Zurück zu den Szenen", "rp.scene.setting": "Schauplatz", "rp.next": "Nächste Zeile", "rp.turn": "Du bist dran", "rp.lead": "Du bist dran, {i} von {n}", "rp.water.lead": "Gießen {i} von {n}", "rp.garden.planted": "{n} von {total} Wörtern gepflanzt", "rp.cont": "Das Gespräch fortsetzen", "rp.retry": "Noch einmal versuchen", "rp.finish": "Die Szene beenden", "rp.log": "Das bisherige Gespräch", "rp.translate": "Übersetzen", "rp.translate.hide": "Übersetzung ausblenden", "rp.play": "Diese Zeile abspielen", "rp.listen": "Zuhören", "rp.hidden": "Höre dir den Clip an: Die Worte erscheinen nach deiner Antwort.", "rp.said": "{name} sagt:", "rp.you": "Du", "rp.again": "{name} sagt es noch einmal, langsam:", "rp.again.second": "{name} versucht es noch einmal, noch langsamer:", "rp.again.plain": "Wie bitte? Noch einmal, langsam.", "rp.model": "Du könntest sagen:", "rp.model.shown": "Das Gespräch geht weiter. Deine Worte sind zum Wiederholen gespeichert.", "rp.effect.right": "{name} versteht dich und das Gespräch geht weiter.", "rp.effect.wrong": "{name} hat dich nicht ganz verstanden. Die Zeile kommt noch einmal.", "rp.effect.shown": "{name} zeigt dir, was du sagen kannst, und das Gespräch geht weiter.", "rp.effect.grew": "Die Pflanze für „{word}“ ist gewachsen: {from} zu {to}.", "rp.effect.planted": "Die Pflanze für „{word}“ steht im Garten.", "rp.effect.wilted": "Die Pflanze für „{word}“ welkt. Gieße sie bald wieder.", "rp.effect.same": "Die Pflanze für „{word}“ bleibt: {stage}.", "rp.hud.last": "Das Letzte, was zu dir gesagt wurde", "rp.hud.plant": "Die Pflanze, die du gießt", "rp.done.title": "Szene beendet", "rp.done.finale": "Finale beendet", "rp.done.accuracy": "{n} % gleich beim ersten Mal richtig", "rp.done.words": "Neue Wörter in deinem Garten", "rp.done.nowords": "Diesmal keine neuen Wörter.", "rp.done.unlocked": "Geöffnet: {scenes}", "rp.done.need": "Zwei Sterne öffnen die nächste Szene. Spiele diese noch einmal.", "rp.done.boss.fail": "Noch nicht: Ein Stern besiegt das Finale. Spiele es noch einmal.", "rp.done.replay": "Die Szene noch einmal spielen", "rp.done.garden": "Den Garten besuchen", "rp.done.finish": "Den Kurs abschließen", "rp.garden.title": "Vokabelgarten", "rp.garden.sub": "Eine Pflanze für jedes Wort, dem du begegnet bist. Pflanzen wachsen, wenn du dich an das Wort erinnerst, und welken, wenn du es vergisst.", "rp.garden.stats": "{seed} Samen, {sprout} Sprossen, {bud} Knospen, {bloom} in Blüte, {wilted} welk", "rp.garden.empty": "Der Garten ist leer. Beende eine Szene, und ihre Wörter werden hier gepflanzt.", "rp.garden.packet": "{n} weitere Wörter sind noch in der Samentüte. Beende Szenen, um sie zu pflanzen.", "rp.garden.met": "Gehört in der Szene „{scene}“, in der {name} sagte: „{line}“", "rp.garden.used": "Verwendet in der Szene „{scene}“, nachdem {name} gesagt hatte: „{line}“", "rp.garden.next": "Nächstes Gießen: {when}", "rp.garden.next.due": "jetzt", "rp.garden.next.days": "in {n} Tagen", "rp.garden.next.day": "morgen", "rp.water": "Die Pflanzen gießen ({n})", "rp.water.none": "Im Moment gibt es nichts zu gießen", "rp.water.done": "Gegossen: {right} von {n} erinnert. Komm wieder, wenn die Pflanzen wieder durstig sind.", "rp.water.empty": "Alle Pflanzen sind vorerst zufrieden.", "rp.garden.back": "Zurück zu den Szenen", "rp.stage.seed": "Samen", "rp.stage.sprout": "Spross", "rp.stage.bud": "Knospe", "rp.stage.bloom": "Blüte", "rp.stage.wilted": "welk", "rp.stage.label": "Stufe: {stage}", "rp.plant.alt": "Eine Topfpflanze: {stage}", "rp.end.title": "Du kannst ein Gespräch führen!", "rp.end.sub": "Du hast jede Szene gemeistert und das Finale geschafft. Gieße den Garten weiter.", "rp.end.words": "{n} Wörter im Garten, {bloom} in Blüte" } }, yd = "roleplay", iz = "postcard", Sd = 8;
  class rz {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "playing", null);
      __publicField(this, "water", null);
      __publicField(this, "finishedScene", null);
      __publicField(this, "audio", null);
      __publicField(this, "titleState", ns());
      var _a3;
      this.host = e, this.session = new Cs(e, { shellId: yd, theme: iz, strings: nz }), this.section = (_a3 = this.session.section()) != null ? _a3 : El.parse({});
    }
    get s() {
      return this.session.s;
    }
    mount() {
      const e = this.session;
      e.mount(), e.setDebug({ scenes: () => this.board().map((s) => {
        var _a3;
        return { id: s.scene.id, unit: (_a3 = s.unit) != null ? _a3 : null, finale: s.finale, locked: s.locked, stars: s.stars, turns: s.turns, done: this.doneScenes().includes(s.scene.id) };
      }), scene: () => this.sceneView(), garden: () => this.gardenView(null) }), this.title();
    }
    unmount() {
      this.stopAudio(), this.session.unmount();
    }
    get targetLang() {
      return this.session.pack.targetLang;
    }
    doneScenes() {
      const e = this.session.shellData(), s = new Set(this.section.scenes.map((n) => n.id));
      return Array.isArray(e == null ? void 0 : e.done) ? e.done.filter((n) => typeof n == "string" && s.has(n)) : [];
    }
    markDone(e) {
      const s = this.doneScenes();
      s.includes(e) || this.session.setShellData({ done: [...s, e] });
    }
    doneUnits() {
      const e = new Set(this.doneScenes());
      return this.section.scenes.filter((s) => e.has(s.id) && s.unit).map((s) => s.unit);
    }
    board() {
      const e = this.session;
      return Y$({ section: this.section, pack: e.pack, mastered: (s) => e.isMastered(s), unitStars: (s) => e.unitStars(s), bossStars: e.bossStars() });
    }
    plants() {
      const e = this.session;
      return Q$({ section: this.section, pack: e.pack, cards: e.progress.cards, queue: e.progress.queue, doneUnits: this.doneUnits(), now: Date.now() });
    }
    wordsOfItem(e) {
      return this.section.garden.filter((s) => s.item === e);
    }
    stageOfItem(e) {
      const s = this.session;
      return wd(s.progress.cards[e], s.progress.queue.includes(e));
    }
    stageName(e) {
      return this.s("rp.stage.".concat(e));
    }
    who(e) {
      const s = this.session, n = this.section.speakers, i = n.findIndex((a) => a.id === e), r = n[i];
      if (!r) return { name: e != null ? e : this.s("rp.you"), index: 0 };
      const o = r.portrait ? s.data.assets[r.portrait] : void 0;
      return { name: s.t(r.name), index: i, ...o ? { url: o } : {} };
    }
    learner() {
      var _a3;
      const e = this.section.speakers.findIndex((s) => s.learner);
      return e >= 0 ? this.who((_a3 = this.section.speakers[e]) == null ? void 0 : _a3.id) : { name: this.s("rp.you"), index: 5 };
    }
    helperOf(e) {
      var _a3, _b3, _c2;
      return (_c2 = (_a3 = Yr(e)) == null ? void 0 : _a3.speaker) != null ? _c2 : (_b3 = this.section.speakers.find((s) => !s.learner)) == null ? void 0 : _b3.id;
    }
    audioUrl(e) {
      return e.audio ? this.session.data.assets[e.audio] : void 0;
    }
    playUrl(e) {
      this.stopAudio();
      try {
        const s = new Audio(e), n = this.session.audio;
        n.voice(s), this.audio = s, s.onended = () => {
          this.audio === s && n.duck(false);
        }, s.play().then(() => n.duck(true), () => {
        });
      } catch (e2) {
      }
    }
    stopAudio() {
      var _a3;
      try {
        (_a3 = this.audio) == null ? void 0 : _a3.pause();
      } catch (e) {
      }
      this.audio && this.session.pack.cues.length && this.session.audio.duck(false), this.audio = null;
    }
    sayBubble(e, s) {
      const n = this.session, i = this.s, r = !s.hidden && e.translation && n.text.hasText(e.translation) ? n.text.t(e.translation) : null, o = r ? d("p", { class: "pc-translation", testid: "translation-".concat(e.id), hidden: true, lang: n.lang }, r) : null, a = r ? gd("translate-".concat(e.id), i("rp.translate"), () => {
        const u = (o == null ? void 0 : o.hidden) === true;
        o && (o.hidden = !u), a == null ? void 0 : a.setAttribute("aria-expanded", String(u)), a && (a.textContent = i(u ? "rp.translate.hide" : "rp.translate"));
      }, { "aria-expanded": "false" }) : null, c = this.audioUrl(e), l = c && !s.noPlay ? gd("line-play-".concat(e.id), "▶ ".concat(i("rp.play")), () => this.playUrl(c)) : null;
      return Vr({ testid: s.testid, kind: s.kind, speaker: this.who(e.say), text: s.hidden ? null : n.text.t(e.text), ...this.targetLang ? { lang: this.targetLang } : {}, hidden: i("rp.hidden"), actions: [a, l], extra: o });
    }
    logBubbles(e, s) {
      const n = this.session, i = this.s, r = Jr(e, s, (c) => !!n.data.assets[c]), o = [];
      let a;
      for (const c of s.log) if (c.kind === "say") {
        const l = $e(e, c.lineId);
        if (!l || !Se(l)) continue;
        a = l, o.push(this.sayBubble(l, { testid: "line-".concat(l.id), kind: "say", hidden: r.has(l.id) }));
      } else if (c.kind === "you") {
        if (c.text === null) continue;
        o.push(Vr({ testid: "you-".concat(c.lineId), kind: "you", speaker: this.learner(), text: c.text, ...this.targetLang ? { lang: this.targetLang } : {}, outcome: c.outcome, lead: c.outcome === "shown" ? i("rp.model") : null, note: c.outcome === "shown" ? i("rp.model.shown") : null }));
      } else o.push(this.helpBubble(e, c, a, r));
      return o;
    }
    helpBubble(e, s, n, i) {
      const r = this.session, o = this.s, a = $e(e, s.lineId), c = a && qe(a) ? a.help : void 0, l = c && r.text.hasText(c) ? r.text.t(c) : null, u = this.who(s.speaker), h = !!n && !i.has(n.id);
      return Vr({ testid: "help-".concat(s.lineId, "-").concat(s.attempt), kind: "help", speaker: u, slow: true, lead: n ? o(s.attempt >= 2 ? "rp.again.second" : "rp.again", { name: u.name }) : o("rp.again.plain"), text: n && h ? r.text.t(n.text) : null, ...this.targetLang ? { lang: this.targetLang } : {}, hidden: o("rp.hidden"), note: l });
    }
    sceneView() {
      var _a3;
      const e = this.playing;
      if (!e) return null;
      const s = Dt(e.scene, e.st);
      return { scene: e.scene.id, unit: (_a3 = e.scene.unit) != null ? _a3 : null, finale: e.finale, step: s.type, line: s.type === "done" ? null : s.line.id, retry: s.type === "turn" ? s.retry : false, tries: s.type === "turn" ? s.tries : 0, said: e.st.log.filter((n) => n.kind === "say").length, turns: Lt(e.scene), answered: e.st.turns.length, helped: e.st.log.filter((n) => n.kind === "help").length, shown: e.st.turns.filter((n) => n.shown).length, hidden: [...Jr(e.scene, e.st, (n) => !!this.session.data.assets[n])] };
    }
    gardenView(e) {
      const s = this.plants();
      return { plants: s.filter((n) => n.planted).map((n) => ({ id: n.word.id, item: n.word.item, stage: n.stage, due: n.due })), counts: Xr(s), packet: s.filter((n) => !n.planted).length, pool: Qr(s).length, result: e };
    }
    title() {
      var _a3;
      const e = this.session;
      this.stopAudio(), e.finished = false, this.playing = null, this.water = null;
      const s = e.pack.cefr;
      e.render("title", Zs(e, { onStart: () => this.scenes() }, () => this.title(), this.titleState), { view: { cefr: s != null ? s : null, target: (_a3 = this.targetLang) != null ? _a3 : null, scenes: this.section.scenes.length } });
    }
    scenes() {
      const e = this.session, s = this.s;
      e.finished = false, this.playing = null, this.water = null, this.stopAudio();
      const n = this.board(), i = e.pack.units.length, r = e.totalStars(), o = n.find((h) => h.finale), a = o ? e.bossStars() >= 1 : e.allMastered(), c = this.plants().filter((h) => h.planted).length, l = (h) => {
        var _a3;
        const p = h.scene, f = (_a3 = p.cefr) != null ? _a3 : e.pack.cefr, m = h.needs.map((g) => e.unitTitle(g)).join(", ");
        return d("li", { class: "pc-scene-item" }, d("button", { type: "button", class: "pc-scene ".concat(h.locked ? "is-locked" : "is-open").concat(h.finale ? " is-finale" : "").concat(h.stars >= 2 ? " is-mastered" : ""), testid: "scene-".concat(p.id), "data-stars": String(h.stars), "data-locked": String(h.locked), "data-finale": String(h.finale), ...h.unit ? { "data-unit": h.unit } : {}, ...h.locked ? { disabled: true } : {}, onclick: () => this.openScene(h) }, d("span", { class: "pc-scene-kicker" }, h.finale ? s("rp.scenes.finale") : e.unitTitle(h.unit)), d("span", { class: "pc-scene-name" }, e.t(p.title)), p.setting ? d("span", { class: "pc-scene-setting" }, e.t(p.setting)) : null, d("span", { class: "pc-scene-meta" }, f ? md(f) : null, d("span", {}, s("rp.scene.turns", { n: h.turns })), h.locked ? d("span", { class: "pc-lock" }, "".concat(h.finale ? s("rp.scenes.finale.locked") : s("rp.scenes.locked")).concat(m ? " (".concat(m, ")") : "")) : null), e.stars(h.stars)));
      }, u = d("section", { class: "scenes-screen pc-scenes" }, d("div", { class: "topbar" }, T("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "scenes-stars" }, s("rp.scenes.stars", { n: r, total: i * 3 })), T("to-garden", "🌱 ".concat(s("rp.scenes.garden"), " (").concat(c, ")"), () => this.garden(), { class: "btn btn-small" })), d("h1", { class: "screen-title", tabindex: "-1", testid: "scenes-title" }, s("rp.scenes.title")), d("p", { class: "subject" }, s("rp.scenes.sub")), n.length === 0 ? d("p", { class: "message message-bad", testid: "scenes-empty" }, s("rp.garden.empty")) : null, d("ol", { class: "pc-scene-list", testid: "scene-list" }, n.map(l)), a ? d("div", { class: "actions actions-center" }, T("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" })) : null);
      e.render("scenes", u, { view: { scenes: n.map((h) => {
        var _a3;
        return { id: h.scene.id, unit: (_a3 = h.unit) != null ? _a3 : null, finale: h.finale, locked: h.locked, stars: h.stars };
      }), finaleOpen: o ? !o.locked : false, crowned: a, planted: c } });
    }
    openScene(e) {
      if (e.locked) return;
      const s = this.playing;
      this.playing = s && s.scene.id === e.scene.id ? s : { scene: e.scene, st: bd(e.scene), finale: e.finale }, this.scene();
    }
    scene() {
      var _a3, _b3;
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const { scene: i, st: r } = n, o = Dt(i, r), a = this.logBubbles(i, r), c = (_a3 = i.cefr) != null ? _a3 : e.pack.cefr, l = o.type === "say" ? T("scene-next", s("rp.next"), () => this.nextLine(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : o.type === "turn" ? T("scene-reply", o.retry ? s("rp.retry") : s("rp.turn"), () => this.askTurn(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : T("scene-finish", s("rp.finish"), () => this.sceneDone(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), u = d("section", { class: "scene-screen pc-scene-screen" }, d("div", { class: "topbar" }, T("to-scenes", "‹ ".concat(s("rp.scene.back")), () => {
        this.stopAudio(), this.scenes();
      }, { class: "btn btn-small btn-ghost" }), c ? md(c) : null), d("h1", { class: "screen-title pc-scene-title", tabindex: "-1", testid: "scene-title" }, e.t(i.title)), i.setting ? d("p", { class: "pc-setting", testid: "scene-setting" }, d("b", {}, "".concat(s("rp.scene.setting"), ": ")), e.t(i.setting)) : null, d("h2", { class: "sr-only" }, s("rp.log")), a.length > 0 ? d("ol", { class: "pc-log", testid: "scene-log" }, a) : null, d("div", { class: "pc-actionbar actions actions-center" }, l));
      e.render("scene", u, { ...i.unit ? { unitId: i.unit } : {}, view: (_b3 = this.sceneView()) != null ? _b3 : {} }, { focus: false });
      const h = r.log[r.log.length - 1];
      if (h && h.kind === "say") {
        const p = $e(i, h.lineId);
        p && Se(p) && e.live("".concat(this.who(p.say).name, ": ").concat(e.text.t(p.text)));
      }
      l.focus({ preventScroll: !(a.length > 0) }), a.length === 0 && window.scrollTo(0, 0);
    }
    nextLine() {
      const e = this.playing;
      e && (e.st = K$(e.scene, e.st), this.scene());
    }
    askTurn() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const i = n.scene, r = Dt(i, n.st);
      if (r.type !== "turn") return this.scene();
      this.stopAudio();
      const o = r.line, a = e.item(o.reply);
      if (!e.canAsk(a)) return n.st = G$(i, n.st), this.afterTurn();
      const c = this.stageOfItem(a.id), l = this.helperOf(n.st), u = this.who(l).name, h = Yr(n.st), p = h ? $e(i, h.lineId) : void 0, f = !!p && Se(p) && Jr(i, n.st, (v) => !!e.data.assets[v]).has(p.id);
      let m = null;
      p && Se(p) && (m = this.sayBubble(p, { testid: "hud-last", kind: "hud", hidden: f, noPlay: f && a.kind === "listening" }));
      const g = o.help && e.text.hasText(o.help) ? e.text.t(o.help) : null, k = d("div", { class: "pc-hud" }, d("p", { class: "pc-hud-label" }, s(p ? "rp.hud.last" : "rp.scene.setting")), m ? d("ul", { class: "pc-log pc-log-hud" }, m) : d("p", { class: "pc-setting", testid: "hud-setting" }, i.setting ? e.t(i.setting) : e.t(i.title)), r.retry && g ? d("p", { class: "pc-hud-help", testid: "hud-help" }, d("b", {}, "".concat(s(r.tries >= 2 ? "rp.again.second" : "rp.again", { name: u }), " ")), g) : null), b = n.st.turns.length + (r.retry ? 0 : 1);
      lt(e, { item: a, context: "line", retry: r.retry, hud: k, lead: d("span", {}, s("rp.lead", { i: Math.min(b, Lt(i)), n: Lt(i) })), ...i.unit && !n.finale ? { unitId: i.unit } : {}, roundKind: n.finale ? "boss" : "unit", roundSize: Lt(i), index: Math.max(0, n.st.turns.length - (r.retry ? 1 : 0)), view: () => {
        var _a3;
        return (_a3 = this.sceneView()) != null ? _a3 : {};
      }, leaveLabel: s("rp.scene.back"), onLeave: () => {
        this.stopAudio(), this.scene();
      }, onAnswered: (v) => {
        const w = V$(a, o, e.text);
        if (n.st = q$(i, n.st, { correct: v.result.correct, score: v.result.score, text: w }), f && p && Se(p) && m) {
          const y = m.querySelector(".pc-text");
          y && (y.textContent = e.text.t(p.text), y.classList.remove("pc-hidden-text"), this.targetLang && y.setAttribute("lang", this.targetLang));
        }
      }, effect: (v) => {
        const w = n.st, y = !v.result.correct, $ = y ? w.retry ? s("rp.effect.wrong", { name: u }) : s("rp.effect.shown", { name: u }) : s("rp.effect.right", { name: u }), x = this.plantNote(a.id, c);
        return { text: x ? "".concat($, " ").concat(x) : $, tone: y ? w.retry ? "bad" : "info" : "good" };
      }, nextLabel: (v) => v.result.correct || !n.st.retry ? s("rp.cont") : s("rp.retry"), onNext: () => this.afterTurn() });
    }
    afterTurn() {
      const e = this.playing;
      if (!e) return this.scenes();
      if (W$(e.scene, e.st)) return this.sceneDone();
      this.scene();
    }
    plantNote(e, s) {
      const n = this.wordsOfItem(e)[0];
      if (!n) return "";
      const i = this.s, r = this.session.text.t(n.text), o = this.stageOfItem(e), a = X$(s, o);
      return a === "wilted" ? i("rp.effect.wilted", { word: r }) : a === "grew" ? s === "seed" ? i("rp.effect.planted", { word: r }) : i("rp.effect.grew", { word: r, from: this.stageName(s), to: this.stageName(o) }) : i("rp.effect.same", { word: r, stage: this.stageName(o) });
    }
    sceneDone() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const i = n.scene, r = this.board(), o = H$(n.st), a = n.finale ? e.recordUnit({ boss: true }, o) : i.unit ? e.recordUnit({ unitId: i.unit }, o) : { stars: 0, unlocked: [] }, c = a.stars;
      this.markDone(i.id), e.playCue(n.finale ? "boss" : "unit-complete");
      const l = J$(r, this.board()).map((k) => {
        var _a3, _b3;
        return e.t(i.id === k ? i.title : (_b3 = (_a3 = this.section.scenes.find((b) => b.id === k)) == null ? void 0 : _a3.title) != null ? _b3 : k);
      }), u = new Set(n.st.turns.map((k) => k.itemId)), h = this.plants().filter((k) => u.has(k.word.item)), p = Math.round(o * 100), f = n.finale ? c >= 1 : c >= 2;
      this.stopAudio();
      const m = d("section", { class: "scenedone-screen pc-done ".concat(f ? "is-passed" : "is-again") }, d("p", { class: "eyebrow" }, e.t(i.title)), d("h1", { class: "screen-title", tabindex: "-1", testid: "done-title" }, n.finale ? s("rp.done.finale") : s("rp.done.title")), e.stars(c, "scene-stars"), d("p", { class: "big-number", testid: "scene-accuracy" }, s("rp.done.accuracy", { n: p })), d("div", { class: "pc-words" }, d("h2", {}, s("rp.done.words")), h.length > 0 ? d("ul", { class: "pc-word-list", testid: "scene-words" }, h.map((k) => d("li", { class: "pc-word stage-".concat(k.stage), testid: "word-".concat(k.word.id), "data-stage": k.stage }, d("b", { class: "pc-word-text", ...this.targetLang ? { lang: this.targetLang } : {} }, e.text.t(k.word.text)), d("span", { class: "pc-word-gloss" }, e.t(k.word.gloss)), d("span", { class: "pc-stage-chip" }, this.stageName(k.stage))))) : d("p", { class: "pc-none" }, s("rp.done.nowords"))), l.length > 0 ? d("p", { class: "message message-ok", testid: "scene-unlocked" }, s("rp.done.unlocked", { scenes: l.join(", ") })) : null, f ? null : d("p", { class: "message message-bad", testid: n.finale ? "finale-retry" : "scene-need" }, n.finale ? s("rp.done.boss.fail") : s("rp.done.need")), d("div", { class: "actions actions-center" }, n.finale && f ? T("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, T("to-scenes", s("rp.scene.back"), () => this.scenes(), { class: f && !n.finale ? "btn btn-primary btn-big" : "btn btn-big" }), c < 3 ? T("replay-scene", s("rp.done.replay"), () => this.replay(), { class: f ? "btn btn-big" : "btn btn-primary btn-big" }) : null, T("to-garden", s("rp.done.garden"), () => this.garden(), { class: "btn btn-big" }))), g = { scene: i.id, finale: n.finale, stars: c, accuracy: p, passed: f, unlocked: a.unlocked, opened: l, words: h.map((k) => ({ id: k.word.id, stage: k.stage })), helped: n.st.log.filter((k) => k.kind === "help").length, shown: n.st.turns.filter((k) => k.shown).length };
      this.finishedScene = n, e.render("scene-done", m, { ...i.unit && !n.finale ? { unitId: i.unit } : {}, view: g }), this.playing = null;
    }
    replay() {
      const e = this.finishedScene;
      if (!e) return this.scenes();
      this.playing = { scene: e.scene, st: bd(e.scene), finale: e.finale }, this.scene();
    }
    garden(e = null) {
      const s = this.session, n = this.s;
      this.playing = null, this.water = null, this.stopAudio();
      const i = this.plants(), r = i.filter((m) => m.planted), o = Xr(i), a = Qr(i), c = new Set(this.doneScenes()), l = Date.now(), u = (m) => s.text.t(m), h = (m) => {
        const g = sz(this.section, m.word, u, c), k = g ? this.section.scenes.find((y) => y.id === g.sceneId) : void 0, b = g && k ? n(g.how === "heard" ? "rp.garden.met" : "rp.garden.used", { scene: s.t(k.title), name: this.who(g.speaker).name, line: u(g.text) }) : null, v = ez(m, l), w = v === null || v === 0 ? n("rp.garden.next.due") : v === 1 ? n("rp.garden.next.day") : n("rp.garden.next.days", { n: v });
        return d("li", { class: "pc-plant-card stage-".concat(m.stage).concat(m.due ? " is-due" : ""), testid: "plant-".concat(m.word.id), "data-stage": m.stage, "data-due": String(m.due), "data-item": m.word.item }, d("div", { class: "pc-plant-pic" }, kd(m.stage)), d("div", { class: "pc-plant-body" }, d("p", { class: "pc-plant-word", ...this.targetLang ? { lang: this.targetLang } : {} }, u(m.word.text)), d("p", { class: "pc-plant-gloss" }, s.t(m.word.gloss)), d("p", { class: "pc-plant-stage" }, d("span", { class: "pc-stage-chip" }, this.stageName(m.stage)), " ", d("span", { class: "sr-only" }, n("rp.stage.label", { stage: this.stageName(m.stage) }))), b ? d("p", { class: "pc-plant-met" }, b) : null, d("p", { class: "pc-plant-next" }, n("rp.garden.next", { when: w }))));
      }, p = i.length - r.length, f = d("section", { class: "garden-screen pc-garden" }, d("div", { class: "topbar" }, T("to-scenes", "‹ ".concat(n("rp.garden.back")), () => this.scenes(), { class: "btn btn-small btn-ghost" }), d("span", { class: "topbar-stars", testid: "garden-planted" }, n("rp.garden.planted", { n: r.length, total: i.length }))), d("h1", { class: "screen-title", tabindex: "-1", testid: "garden-title" }, n("rp.garden.title")), d("p", { class: "subject" }, n("rp.garden.sub")), r.length > 0 ? d("p", { class: "pc-garden-stats", testid: "garden-stats" }, n("rp.garden.stats", o)) : d("p", { class: "message", testid: "garden-empty" }, n("rp.garden.empty")), e ? d("p", { class: "message message-ok", role: "status", testid: "water-result" }, n("rp.water.done", { right: e.right, n: e.n })) : null, d("div", { class: "actions actions-center" }, a.length > 0 ? T("water", "💧 ".concat(n("rp.water", { n: Math.min(a.length, Sd) })), () => this.startWater(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : d("p", { class: "message", testid: "water-empty" }, r.length > 0 ? n("rp.water.empty") : n("rp.water.none"))), r.length > 0 ? d("ul", { class: "pc-plant-list", testid: "plant-list" }, r.map(h)) : null, p > 0 ? d("p", { class: "pc-packet", testid: "garden-packet" }, n("rp.garden.packet", { n: p })) : null);
      s.render("garden", f, { view: this.gardenView(e) });
    }
    startWater() {
      const e = this.session, s = Qr(this.plants());
      if (s.length === 0) return this.garden();
      const n = Math.min(s.length, Sd);
      this.water = { run: e.startRun(s, { kind: "review", size: n }), n: 0, right: 0 }, this.waterStep();
    }
    waterStep() {
      const e = this.session, s = this.s, n = this.water;
      if (!n) return this.garden();
      const i = e.next(n.run);
      if (!i) {
        const l = { right: n.right, n: n.n };
        return this.water = null, this.garden(l);
      }
      const r = e.item(i.id), o = this.stageOfItem(r.id), a = this.wordsOfItem(r.id)[0], c = d("div", { class: "pc-hud pc-hud-plant" }, d("div", { class: "pc-hud-pot", "aria-hidden": "true" }, kd(o)), d("div", { class: "pc-hud-text" }, d("p", { class: "pc-hud-label" }, s("rp.hud.plant")), d("p", { class: "pc-hud-stage", testid: "hud-stage" }, this.stageName(o))));
      lt(e, { item: r, context: "garden", retry: i.retry, hud: c, lead: d("span", {}, s("rp.water.lead", { i: Math.min(n.run.asked.length + (i.retry ? 0 : 1), n.run.size), n: n.run.size })), roundKind: "review", roundSize: n.run.size, index: n.run.results.length, view: () => {
        var _a3;
        return { ...this.gardenView(null), word: (_a3 = a == null ? void 0 : a.id) != null ? _a3 : null, stage: o };
      }, leaveLabel: s("rp.garden.back"), onLeave: () => this.garden(), onAnswered: (l) => {
        n.run = e.record(n.run, i, l), i.retry || (n.n += 1, l.result.correct && (n.right += 1));
      }, effect: (l) => {
        const u = this.plantNote(r.id, o);
        return u ? { text: u, tone: l.result.correct ? "good" : "bad" } : null;
      }, nextLabel: s("rp.next"), onNext: () => this.waterStep() });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.playing = null;
      const n = this.plants(), i = Xr(n);
      e.render("end", Us(e, { title: s("rp.end.title"), sub: s("rp.end.sub"), stats: d("p", { class: "subject", testid: "end-words" }, s("rp.end.words", { n: n.filter((r) => r.planted).length, bloom: i.bloom })), onAgain: () => this.scenes(), onTitle: () => this.title() }), { view: { words: n.filter((r) => r.planted).length, bloom: i.bloom, scenes: this.board().length } });
    }
  }
  const $d = /* @__PURE__ */ (() => {
    let t = null;
    return { id: yd, mount(e) {
      t = new rz(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), Te = 100, oz = 100, eo = 25, az = 30, cz = 0.25, lz = 2, zd = (t) => Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0, to = (t) => Math.min(lz, 1 + cz * Math.max(0, t)), uz = (t, e, s = oz) => Math.round(s * zd(t) * to(e)), dz = (t, e, s = eo) => t ? 0 : Math.max(1, Math.round(s * (1 - zd(e)))), hz = (t, e = eo, s = Te, n = Te) => ({ foeHp: t, foeMax: t, hp: s, maxHp: n, streak: 0, turns: 0, strike: e });
  function pz(t, e) {
    const s = to(t.streak), n = uz(e.score, t.streak), i = Math.max(0, t.foeHp - n), r = i === 0, o = r ? 0 : dz(e.correct, e.score, t.strike), a = Math.max(0, t.hp - o);
    return { battle: { ...t, foeHp: i, hp: a, streak: e.correct ? t.streak + 1 : 0, turns: t.turns + 1 }, dealt: n, taken: o, multiplier: s, won: r, fainted: !r && a === 0 };
  }
  const fz = (t, e) => e <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(t / e * 100))), mz = { k: "ink", w: "white", g: "gold", G: "gold-dark", s: "skin", S: "skin-shade", h: "hair", t: "tunic", T: "tunic-dark", c: "cape", r: "red", R: "red-dark", C: "cape-dark", n: "green", N: "green-dark", p: "purple", P: "purple-dark", o: "orange", y: "cyan", b: "brown", m: "stone", M: "stone-dark" }, ei = ["................", ".....kkkkkk.....", "....khhhhhhk....", "...khhhhhhhhk...", "...khhssssshk...", "...kssksskssk...", "...kssssssssk...", "....kssSSssk....", "...kttttttttk...", "..ksttttttttsk..", "..kstttggtttsk..", "..ksttttttttsk..", "...kttttttttk...", "...kttkkkkttk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], _d = [".......kk.......", "......kppk......", ".....kppppk.....", "....kppgppPk....", "...kppppppppk...", "..kkkppppppkkk..", "...kssssssssk...", "...kskssskssk...", "...kwwwwwwwwk...", "..kpwwwwwwwwpk..", "..kpPwwwwwwPpk..", "..kspPppppPpsk..", "..kpppggggpppk..", "..kppppppppppk..", "..kpppppppppPk..", "..kkkkkkkkkkkk.."], jd = ["................", ".....kkkkkk.....", "....knnnnnnk....", "...knnnnnnnnk...", "...knnssssnnk...", "...knskssksnk...", "...kssssssssk...", "....kssSSssk....", "...kNnnnnnnNk...", "..ksNnnnnnnNsk..", "..ksNnggggnNsk..", "..kskNnnnnNksk..", "...kNnnnnnnNk...", "...kNnkkkknNk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], Fs = [["................", "................", "................", ".....kkkkkk.....", "...kknnnnnnkk...", "..knnwwnnnnnnk..", "..knwnnnnnnnnk..", ".knnnnnnnnnnnnk.", ".knnkkknnkkknnk.", ".knnkwknnkwknnk.", ".knnkkknnkkknnk.", ".knnnnnkknnnnNk.", ".kNnnnnnnnnnNNk.", "..kNNNNNNNNNNk..", "...kkkkkkkkkk...", "................"], ["................", "..k..........k..", ".kPk........kPk.", ".kPPk.kkkk.kPPk.", "kPPPPkkppkkPPPPk", "kPPpPPkppkPPpPPk", "kPpPPPpppppPPPpk", ".kPPPPpwkkwpPPPk", "..kkPPppkkppPkk.", "....kkppppppkk..", ".....kwppppwk...", "......kppppk....", ".......kkkk.....", "................", "................", "................"], ["................", "..kk........kk..", "..kck......kck..", "..kcCkkkkkkCck..", "...kccccccccck..", "...kcwkcccwkck..", "...kccccccccck..", "....kcckkkcck...", "...kcccwwwccck..", "..kcCcccccccCck.", "..kccCcccccCcck.", "...kccccccccck..", "....kcccccccck..", "....kcckkkkcck..", "...kCCk....kCCk.", "...kkkk....kkkk."], ["................", ".....kkkkkk.....", "...kkwwwwwwkk...", "..kwwwwwwwwwwk..", "..kwwkkwwwkkwk..", ".kwwwkykwwkykwwk", ".kwwwkkwwwkkwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwkkwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwkwwwkwwwkwk.", ".kwkkkwkkkwkkkk.", "..k..kk..kk..k..", "................"]], ti = ["..g.gg..gg.g....".slice(0, 16), "..gggggggggg....".slice(0, 16), "..kGggggggGk....".slice(0, 16), ".kkkmmmmmmmkk...".slice(0, 16), ".kmmmmmmmmmmmk..".slice(0, 16), ".kmmrrmmmrrmmk..".slice(0, 16), ".kmmrwmmmrwmmk..".slice(0, 16), ".kmmmmmkmmmmmk..".slice(0, 16), "..kmmkkkkkmmk...".slice(0, 16), ".kkmMmmmmmMmkk..".slice(0, 16), "kmmkMmmmmmMkmmk.".slice(0, 16), "kmmkmmmgmmmkmmk.".slice(0, 16), "kMMkmmmmmmmkMMk.".slice(0, 16), ".kkkmmMkMmmkkk..".slice(0, 16), "...kmmmkmmmk....".slice(0, 16), "...kkkkkkkkk....".slice(0, 16)], gz = ["................", "................", "................", "................", "......kkkk......", ".....kggggk.....", "....kggkkggk....", "....kgkkkgGk....", ".......kgGk.....", "......kgGk......", "......kgGk......", "......kkk.......", "................", "......kggk......", "......kGGk......", "......kkkk......"], ee = 16, kz = ["ink", "white", "gold", "gold-dark", "skin", "skin-shade", "hair", "tunic", "tunic-dark", "cape", "cape-dark", "red", "red-dark", "green", "green-dark", "purple", "purple-dark", "orange", "cyan", "brown", "stone", "stone-dark", "grass-1", "grass-2", "grass-3", "flower-1", "flower-2", "path-1", "path-2", "path-3", "water-1", "water-2", "water-3", "leaf-1", "leaf-2", "leaf-3", "trunk", "wall-1", "wall-2", "wall-3", "sky-1", "sky-2", "sky-3", "sky-4", "sky-5", "moon", "hill-1", "hill-2", "gate", "gate-dark", "glow"];
  function bz(t) {
    const e = document.createElement("span");
    e.setAttribute("aria-hidden", "true"), e.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:0;height:0", t.appendChild(e);
    const s = {};
    for (const n of kz) e.style.color = "", e.style.color = "var(--pixel-".concat(n, ")"), s[n] = getComputedStyle(e).color || "rgb(255 0 255)";
    return e.remove(), s;
  }
  const vz = () => ({ sprites: {} });
  function Ks(t) {
    return t ? new Promise((e) => {
      const s = new Image();
      s.onload = () => e(s), s.onerror = () => e(null), s.src = t;
    }) : Promise.resolve(null);
  }
  function ne(t, e, s, n = 0) {
    let i = Math.imul(t + 1, 374761393) + Math.imul(e + 1, 668265263) + Math.imul(s + 1, 2246822519) + Math.imul(n + 1, 3266489917) | 0;
    return i = Math.imul(i ^ i >>> 13, 1274126177), i ^= i >>> 16, (i >>> 0) / 4294967296;
  }
  const K = (t, e, s, n, i, r) => {
    t.fillStyle = r, t.fillRect(e, s, n, i);
  };
  function $t(t, e, s, n, i, r = 1, o = false) {
    for (let a = 0; a < e.length; a++) {
      const c = e[a];
      for (let l = 0; l < c.length; l++) {
        const u = c[o ? c.length - 1 - l : l];
        if (u === ".") continue;
        const h = mz[u];
        h && (t.fillStyle = s[h], t.fillRect(n + l * r, i + a * r, r, r));
      }
    }
  }
  const xd = ["................", ".....kkkkkk.....", "...kkbbbbbbkk...", "..kbbbcbbbbbbk..", "..kbbcbbbbabbk..", ".kbbbbbbbbbbabk.", ".kbcbbbbabbbbbk.", ".kbbbbbbbbbbbak.", ".kbbbabbbbbcbak.", "..kbbbbbbbbbbk..", "..kkaabbbbaakk..", "....kkaaaakk....", "......kttk......", "......kttk......", ".....kkttkk.....", "................"], wz = { k: "ink", a: "leaf-1", b: "leaf-2", c: "leaf-3", t: "trunk" }, Ed = (t, e, s, n, i) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t[s + i]) == null ? void 0 : _a3[e + n]) != null ? _b3 : "#";
  }, yz = (t) => t === "," || t === "@" || t === "N" || t === "B", Sz = (t) => t === "~";
  function Ad(t, e, s, n, i, r, o) {
    K(t, s, n, ee, ee, e["grass-1"]);
    for (let a = 0; a < 6; a++) {
      const c = Math.floor(ne(i, r, o.seed, a) * 14) + 1, l = Math.floor(ne(i, r, o.seed, a + 20) * 13) + 2;
      K(t, s + c, n + l, 1, 2, e["grass-2"]), K(t, s + c + 1, n + l - 1, 1, 1, e["grass-3"]);
    }
    for (let a = 0; a < 3; a++) K(t, s + Math.floor(ne(i, r, o.seed, a + 40) * 15), n + Math.floor(ne(i, r, o.seed, a + 50) * 15), 1, 1, e["grass-3"]);
    if (ne(i, r, o.seed, 60) < 0.1) {
      const a = Math.floor(ne(i, r, o.seed, 61) * 11) + 2, c = Math.floor(ne(i, r, o.seed, 62) * 11) + 2;
      K(t, s + a, n + c, 1, 1, e["flower-2"]), K(t, s + a - 1, n + c, 1, 1, e["flower-1"]), K(t, s + a + 1, n + c, 1, 1, e["flower-1"]), K(t, s + a, n + c - 1, 1, 1, e["flower-1"]), K(t, s + a, n + c + 1, 1, 1, e["flower-1"]);
    }
  }
  function Td(t, e, s, n, i, r, o, a) {
    K(t, n, i, ee, ee, e["path-1"]);
    for (let l = 0; l < 9; l++) K(t, n + Math.floor(ne(r, o, a.seed, l + 70) * 15), i + Math.floor(ne(r, o, a.seed, l + 80) * 15), 1, 1, e["path-2"]);
    for (let l = 0; l < 4; l++) K(t, n + Math.floor(ne(r, o, a.seed, l + 90) * 14), i + Math.floor(ne(r, o, a.seed, l + 100) * 14), 2, 1, e["path-3"]);
    const c = (l, u, h, p) => {
      const f = Ed(s, r, o, l, u);
      if (!(yz(f) || f === "#" || f === "G")) for (let m = 0; m < ee; m++) {
        const g = 1 + Math.floor(ne(r, o, a.seed, 110 + m + (l + 2) * 16 + (u + 2) * 64) * 3);
        for (let k = 0; k < g; k++) {
          const b = m, v = p ? ee - 1 - k : k;
          K(t, n + (h ? b : v), i + (h ? v : b), 1, 1, k === g - 1 ? e["grass-2"] : e["grass-1"]);
        }
      }
    };
    c(0, -1, true, false), c(0, 1, true, true), c(-1, 0, false, false), c(1, 0, false, true);
  }
  function $z(t, e, s, n, i, r, o, a) {
    K(t, n, i, ee, ee, e["water-1"]);
    const c = a.frame * 2;
    for (let u = 0; u < 3; u++) {
      const h = 2 + u * 5 + Math.floor(ne(r, o, a.seed, u + 120) * 2), p = (Math.floor(ne(r, o, a.seed, u + 130) * 8) + c) % 11;
      K(t, n + p, i + h, 4, 1, e["water-2"]), K(t, n + p + 6 - c, i + h + 2, 2, 1, e["water-2"]);
    }
    a.frame === 1 && ne(r, o, a.seed, 140) < 0.7 && K(t, n + Math.floor(ne(r, o, a.seed, 141) * 13) + 1, i + Math.floor(ne(r, o, a.seed, 142) * 13) + 1, 1, 1, e["water-3"]), a.frame === 0 && ne(r, o, a.seed, 143) < 0.5 && K(t, n + Math.floor(ne(r, o, a.seed, 144) * 13) + 1, i + Math.floor(ne(r, o, a.seed, 145) * 13) + 1, 1, 1, e["water-3"]);
    const l = (u, h, p, f) => {
      if (!Sz(Ed(s, r, o, u, h))) for (let m = 0; m < ee; m++) ne(r, o, a.seed, 150 + m + (u + 2) * 16 + (h + 2) * 64) < 0.8 && K(t, n + (p ? m : f ? ee - 1 : 0), i + (p ? f ? ee - 1 : 0 : m), 1, 1, e["water-3"]);
    };
    l(0, -1, true, false), l(0, 1, true, true), l(-1, 0, false, false), l(1, 0, false, true);
  }
  function zz(t, e, s, n, i, r, o) {
    Ad(t, e, s, n, i, r, o), K(t, s + 3, n + 13, 10, 2, e["grass-2"]);
    for (let a = 0; a < xd.length; a++) {
      const c = xd[a];
      for (let l = 0; l < c.length; l++) {
        const u = c[l];
        u !== "." && K(t, s + l, n + a, 1, 1, e[wz[u]]);
      }
    }
  }
  function Id(t, e, s, n, i, r, o) {
    K(t, s, n, ee, ee, e["wall-1"]);
    for (let a = 0; a < 4; a++) {
      const c = a * 4;
      K(t, s, n + c + 3, ee, 1, e["wall-2"]);
      const l = a % 2 === 0 ? 0 : 4;
      for (let u = l; u < ee; u += 8) K(t, s + u, n + c, 1, 3, e["wall-2"]);
      for (let u = l + 1; u < ee; u += 8) K(t, s + u, n + c, 6, 1, e["wall-3"]);
      ne(i, r, o.seed, 160 + a) < 0.4 && K(t, s + Math.floor(ne(i, r, o.seed, 170 + a) * 12) + 2, n + c + 1, 2, 1, e["wall-2"]);
    }
  }
  function _z(t, e, s, n, i, r, o, a) {
    if (Id(t, e, s, n, i, r, o), K(t, s + 2, n + 2, 12, 14, e.ink), a) K(t, s + 3, n + 3, 10, 13, e["sky-3"]), K(t, s + 4, n + 5, 8, 11, e["sky-4"]), K(t, s + 5, n + 8, 6, 8, e.glow), K(t, s + 6, n + 11, 4, 5, e.moon), o.frame === 1 ? K(t, s + 7, n + 6, 1, 1, e.gold) : K(t, s + 9, n + 7, 1, 1, e.gold);
    else {
      K(t, s + 3, n + 3, 10, 13, e.gate);
      for (let c = 5; c < 13; c += 3) K(t, s + c, n + 3, 1, 13, e["gate-dark"]);
      K(t, s + 3, n + 6, 10, 1, e.ink), K(t, s + 3, n + 12, 10, 1, e.ink), K(t, s + 7, n + 9, 2, 2, e.gold), K(t, s + 3, n + 2, 1, 1, e["wall-1"]), K(t, s + 12, n + 2, 1, 1, e["wall-1"]);
    }
  }
  function jz(t, e, s, n, i, r, o, a, c) {
    if (c === "B") {
      K(t, n, i, ee, ee, e["wall-2"]), K(t, n + 1, i + 1, 14, 14, e["wall-1"]), K(t, n + 2, i + 2, 12, 1, e["wall-3"]);
      for (const [l, u] of [[7, 3], [8, 3], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [10, 9], [6, 11], [9, 11], [7, 12], [8, 12]]) K(t, n + l, i + u, 1, 1, e["red-dark"]);
      return;
    }
    Td(t, e, s, n, i, r, o, a);
    for (const [l, u] of [[7, 4], [8, 4], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [6, 10], [9, 10], [10, 9], [7, 11], [8, 11]]) K(t, n + l, i + u, 1, 1, e["gold-dark"]);
  }
  function xz(t, e, s, n, i, r, o, a) {
    var _a3, _b3;
    const c = (_b3 = (_a3 = s[i]) == null ? void 0 : _a3[n]) != null ? _b3 : "#", l = n * ee, u = i * ee;
    if (a == null ? void 0 : a.tiles) {
      const h = c === "." || c === "@" ? 0 : c === "," || c === "N" || c === "B" ? 1 : c === "~" ? 2 + r.frame : c === "T" ? 4 : c === "#" ? 5 : o ? 7 : 6;
      t.imageSmoothingEnabled = false, t.drawImage(a.tiles, h * ee, 0, ee, ee, l, u, ee, ee);
      return;
    }
    switch (c) {
      case "#":
        return Id(t, e, l, u, n, i, r);
      case "T":
        return zz(t, e, l, u, n, i, r);
      case "~":
        return $z(t, e, s, l, u, n, i, r);
      case ",":
      case "@":
        return Td(t, e, s, l, u, n, i, r);
      case "N":
      case "B":
        return jz(t, e, s, l, u, n, i, r, c);
      case "G":
        return _z(t, e, l, u, n, i, r, o);
      default:
        return Ad(t, e, l, u, n, i, r);
    }
  }
  const Md = (t) => ({ w: Math.max(1, ...t.map((e) => e.length)) * ee, h: Math.max(1, t.length) * ee });
  function Od(t, e) {
    const s = document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
  function Ez(t, e, s, n, i, r) {
    var _a3, _b3;
    const { w: o, h: a } = Md(t), c = Od(o, a), l = c.getContext("2d");
    l.imageSmoothingEnabled = false;
    for (let u = 0; u < t.length; u++) for (let h = 0; h < ((_b3 = (_a3 = t[u]) == null ? void 0 : _a3.length) != null ? _b3 : 0); h++) xz(l, e, t, h, u, { seed: s, frame: n }, i, r);
    return c;
  }
  const Az = (t) => t.kind === "boss" ? ti : t.kind === "foe" ? Fs[(t.n - 1) % Fs.length] : t.kind === "giver" ? _d : jd;
  class Tz {
    constructor(e) {
      __publicField(this, "o");
      __publicField(this, "canvas");
      __publicField(this, "ctx");
      __publicField(this, "logical");
      __publicField(this, "layers", []);
      __publicField(this, "layerGate", null);
      __publicField(this, "frame", 0);
      __publicField(this, "scale", 0);
      __publicField(this, "timer", 0);
      __publicField(this, "observer", null);
      __publicField(this, "scene", null);
      __publicField(this, "ticks", 0);
      this.o = e, this.logical = Md(e.area.rows), this.canvas = Od(this.logical.w, this.logical.h), this.canvas.className = "rpg-canvas", this.ctx = this.canvas.getContext("2d"), this.resize(2), e.reduced || (this.timer = window.setInterval(() => this.tick(), 650));
    }
    fit(e) {
      const s = () => {
        const n = e.clientWidth || this.canvas.clientWidth;
        n > 0 && this.resize(Math.max(1, Math.min(6, Math.round(n / this.logical.w))));
      };
      s(), typeof ResizeObserver < "u" && (this.observer = new ResizeObserver(s), this.observer.observe(e));
    }
    resize(e) {
      e !== this.scale && (this.scale = e, this.canvas.width = this.logical.w * e, this.canvas.height = this.logical.h * e, this.draw());
    }
    setScene(e) {
      this.scene = e, this.draw();
    }
    tick() {
      this.frame = this.frame === 0 ? 1 : 0, this.ticks++, this.draw();
    }
    layer(e) {
      return (this.layerGate !== e || this.layers.length === 0) && (this.layers = [0, 1].map((s) => Ez(this.o.area.rows, this.o.pal, this.o.seed, s, e, this.o.skin)), this.layerGate = e), this.layers[this.o.reduced ? 0 : this.frame];
    }
    draw() {
      var _a3;
      const e = this.scene, s = this.ctx, n = this.scale;
      if (s.setTransform(n, 0, 0, n, 0, 0), s.imageSmoothingEnabled = false, s.drawImage(this.layer((_a3 = e == null ? void 0 : e.gateOpen) != null ? _a3 : false), 0, 0), !e) return;
      const i = this.o.pal, r = this.o.skin, o = [];
      for (const a of e.entities) {
        const c = (a.kind === "foe" || a.kind === "boss") && this.frame === 1 && !this.o.reduced ? -1 : 0;
        o.push({ y: a.at[1], paint: () => {
          const l = a.at[0] * ee, u = a.at[1] * ee;
          s.globalAlpha = 0.35, K(s, l + 3, u + 13, 10, 2, i.ink), s.globalAlpha = 1;
          const h = a.kind === "boss" ? r == null ? void 0 : r.sprites.boss : a.kind === "foe" ? r == null ? void 0 : r.sprites.foe : a.kind === "giver" || a.kind === "npc" ? r == null ? void 0 : r.sprites.npc : void 0;
          h ? s.drawImage(h, l, u + c, ee, ee) : $t(s, Az(a), i, l, u + c), a.mark && $t(s, gz, i, l, u - 11 + (this.frame === 1 && !this.o.reduced ? -1 : 0));
        } });
      }
      o.push({ y: e.hero[1], paint: () => {
        const a = e.hero[0] * ee, c = e.hero[1] * ee;
        s.globalAlpha = 0.35, K(s, a + 3, c + 13, 10, 2, i.ink), s.globalAlpha = 1;
        const l = r == null ? void 0 : r.sprites.hero;
        l ? s.drawImage(l, a, c - e.step, ee, ee) : $t(s, ei, i, a, c - e.step, 1, e.face === "left");
      } }), o.sort((a, c) => a.y - c.y);
      for (const a of o) a.paint();
    }
    destroy() {
      var _a3;
      this.timer && window.clearInterval(this.timer), this.timer = 0, (_a3 = this.observer) == null ? void 0 : _a3.disconnect(), this.observer = null;
    }
    get shimmerTicks() {
      return this.ticks;
    }
  }
  const ut = 160, Nd = 64;
  function Iz(t, e, s) {
    ["sky-1", "sky-2", "sky-3", "sky-4", "sky-5"].forEach((i, r) => K(t, 0, r * 8, ut, 8, e[i]));
    for (let i = 0; i < 26; i++) K(t, Math.floor(ne(i, 1, s, 3) * ut), Math.floor(ne(i, 2, s, 3) * 26), 1, 1, e.white);
    K(t, 128, 6, 8, 8, e.moon), K(t, 130, 5, 4, 10, e.moon), K(t, 126, 8, 12, 4, e.moon);
    for (let i = 0; i < ut; i++) {
      const r = 36 - Math.round(5 + 4 * Math.sin((i + s) / 14) + 3 * Math.sin((i + s) / 5));
      K(t, i, r, 1, 48 - r, e["hill-2"]);
      const o = 40 - Math.round(3 + 3 * Math.sin((i + s * 2) / 9 + 1));
      K(t, i, o, 1, 48 - o, e["hill-1"]);
    }
    for (let i = 40; i < Nd; i++) {
      const r = Math.floor((i - 40) / 4) % 2 === 0;
      K(t, 0, i, ut, 1, e[r ? "grass-1" : "grass-2"]);
    }
    for (let i = 0; i < ut; i += 5) K(t, i + Math.floor(ne(i, 5, s, 9) * 3), 42 + Math.floor(ne(i, 6, s, 9) * 20), 1, 1, e["grass-3"]);
    K(t, 0, 58, ut, 2, e["path-1"]), K(t, 0, 58, ut, 1, e["path-3"]);
  }
  function Mz(t, e, s, n, i) {
    const r = t.getContext("2d"), o = Math.max(1, Math.round(t.width / ut));
    r.setTransform(o, 0, 0, o, 0, 0), r.imageSmoothingEnabled = false, Iz(r, e, n);
    const a = (u, h) => {
      r.globalAlpha = 0.4, K(r, u, 57, h, 3, e.ink), r.globalAlpha = 1;
    };
    a(20, 50), a(92, 54), s.boss && !s.down && (r.globalAlpha = 0.16, K(r, 96, 10, 46, 50, e.gold), r.globalAlpha = 1);
    const c = i == null ? void 0 : i.sprites.hero;
    s.heroDown ? (r.globalAlpha = 0.6, r.save(), r.translate(70, 30), r.rotate(Math.PI / 2), c ? r.drawImage(c, 0, 0, 48, 48) : $t(r, ei, e, 0, 0, 3), r.restore(), r.globalAlpha = 1) : c ? r.drawImage(c, 22, 12, 48, 48) : $t(r, ei, e, 22, 12, 3);
    const l = s.boss ? i == null ? void 0 : i.sprites.boss : i == null ? void 0 : i.sprites.foe;
    s.down ? (r.globalAlpha = 0.5, l ? r.drawImage(l, 94, 30, 48, 30) : $t(r, s.foe, e, 94, 28, 3), r.globalAlpha = 1) : l ? r.drawImage(l, 94, 10, 48, 48) : $t(r, s.foe, e, 94, 10, 3);
  }
  function Oz(t, e, s, n) {
    const i = t.getContext("2d"), r = Math.max(1, Math.round(t.width / Math.max(1, ...s.map((a) => a.length))));
    i.imageSmoothingEnabled = false;
    const o = (a) => a === "#" ? e["wall-1"] : a === "T" ? e["leaf-2"] : a === "~" ? e["water-1"] : a === "," || a === "@" || a === "N" ? e["path-1"] : a === "B" ? e["wall-3"] : a === "G" ? e.gold : e["grass-1"];
    s.forEach((a, c) => [...a].forEach((l, u) => K(i, u * r, c * r, r, r, o(l))));
    for (const a of n) K(i, a.at[0] * r, a.at[1] * r, r, r, a.kind === "giver" ? e.gold : a.kind === "boss" ? e.purple : e.red);
  }
  const Pd = (t) => ({ pos: t.start, face: "right", accepted: false, foesDown: [], bossDown: false, scores: [], counted: [], done: false }), Nz = (t, e) => ({ ...Pd(t), accepted: e.accepted }), Pz = "goto-boss";
  function Ct(t, e) {
    const s = t.npcs.map((n) => ({ id: n.id, kind: "npc", at: n.at, giver: n.quest, goto: "goto-".concat(n.id) }));
    for (const n of t.foes) e.foesDown.includes(n.id) || s.push({ id: n.id, kind: "foe", at: n.at, giver: false, goto: "goto-".concat(n.id) });
    return e.bossDown || s.push({ id: t.boss.id, kind: "boss", at: t.boss.at, giver: false, goto: Pz }), s;
  }
  const Rz = (t, e) => new Set(Ct(t, e).map((s) => Ce(s.at)));
  function si(t, e) {
    return e.done ? "done" : e.accepted ? t.foes.every((s) => e.foesDown.includes(s.id)) ? "boss" : "foes" : "talk";
  }
  const so = (t, e) => [t[0] + On[e][0], t[1] + On[e][1]];
  function Dz(t, e, s, n) {
    const i = so(e.pos, s), r = Ct(t, e).find((a) => ot(a.at, i));
    if (r) return { kind: "bump", person: r };
    const o = es(t.rows, i);
    return o === "G" && n ? { kind: "gate" } : As(o, n) ? { kind: "move", pos: i } : { kind: "blocked" };
  }
  function qs(t, e) {
    const s = e[0] - t[0], n = e[1] - t[1];
    return Math.abs(s) >= Math.abs(n) ? s >= 0 ? "right" : "left" : n >= 0 ? "down" : "up";
  }
  function ni(t, e) {
    const s = so(e.pos, e.face), n = (i) => ot(i.at, s) ? 0 : i.giver ? 1 : i.kind === "foe" ? 2 : i.kind === "boss" ? 3 : 4;
    return Ct(t, e).filter((i) => cr(i.at, e.pos)).sort((i, r) => n(i) - n(r));
  }
  function ii(t, e) {
    const s = Ct(t, e).map((n) => ({ testid: n.goto, id: n.id, kind: n.giver ? "giver" : n.kind, at: n.at }));
    return t.gate && s.push({ testid: "goto-gate", id: "gate", kind: "gate", at: t.gate }), s;
  }
  function no(t, e, s, n) {
    const i = ii(t, e).find((o) => o.testid === s || o.id === s);
    if (!i) return null;
    const r = Rz(t, e);
    return i.kind === "gate" ? n ? Ol(t.rows, e.pos, (o) => ot(o, i.at), { blocked: r, gateOpen: n }) : Nl(t.rows, e.pos, i.at, { blocked: r }) : Nl(t.rows, e.pos, i.at, { blocked: r, gateOpen: n });
  }
  function Rd(t, e, s) {
    var _a3;
    const n = si(t, e), i = Ct(t, e), r = (o, a, c) => {
      var _a4;
      const l = no(t, e, c, s), u = i.find((h) => h.goto === c);
      return { kind: o, id: a, testid: c, adjacent: !!u && cr(u.at, e.pos), steps: (_a4 = l == null ? void 0 : l.length) != null ? _a4 : -1 };
    };
    if (n === "talk") {
      const o = (_a3 = i.find((a) => a.giver)) != null ? _a3 : i.find((a) => a.kind === "npc");
      if (o) return r("giver", o.id, o.goto);
    }
    if (n === "foes") {
      const o = t.foes.map((a) => i.find((c) => c.id === a.id)).find((a) => a !== void 0);
      if (o) return r("foe", o.id, o.goto);
    }
    if (n === "boss" || n === "talk" && !i.some((o) => o.kind === "npc")) {
      const o = i.find((a) => a.kind === "boss");
      if (o) return r("boss", o.id, o.goto);
    }
    return t.gate ? r("gate", "gate", "goto-gate") : { kind: "leave", id: "areas", adjacent: false, steps: 0 };
  }
  const Dd = (t) => t.length === 0 ? 0 : t.reduce((e, s) => e + s, 0) / t.length, Lz = { en: { "rpg.tagline": "A pixel quest through what you are learning", "rpg.title.art": "A pixel landscape: night sky, hills, a castle and a small hero", "rpg.hero.default": "Hero", "rpg.intro.title": "The story", "rpg.story.next": "Next", "rpg.story.begin": "Begin the quest", "rpg.story.skip": "Skip the story", "rpg.story.count": "Page {n} of {total}", "rpg.auto.intro.1": "A quiet land lies under a night sky, and its roads are blocked by foes made of muddled ideas.", "rpg.auto.intro.2": "You are {hero}, a young adventurer. Every right answer is a strike, and every fact you learn goes into your pack as a scroll.", "rpg.auto.intro.3": "Visit each area, speak with its sage and beat the foes. Then the gates will open.", "rpg.auto.outro.1": "The last foe falls and the muddle clears. Everything you learned is now yours to keep.", "rpg.areas.title": "The world map", "rpg.areas.intro": "Pick a place. Each area is a quest that teaches one unit.", "rpg.area.enter": "Enter", "rpg.area.locked": "Locked: master {units} first.", "rpg.area.quest": "Quest", "rpg.final.title": "The final battle", "rpg.final.ready": "The last foe mixes every unit. Answer well.", "rpg.final.locked": "Master every area (2 stars) to face the last foe.", "rpg.final.go": "Face the last foe", "rpg.auto.final": "The Grand Muddle", "rpg.to.title": "Back to the title", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Map of {area}", "rpg.where": "You are in {area}, at column {x}, row {y}.", "rpg.near": "Next to you: {names}.", "rpg.near.none": "Nobody is next to you.", "rpg.side.left": "left", "rpg.side.right": "right", "rpg.side.up": "above", "rpg.side.down": "below", "rpg.pad": "Walk", "rpg.move.up": "Up", "rpg.move.down": "Down", "rpg.move.left": "Left", "rpg.move.right": "Right", "rpg.talk": "Talk", "rpg.fight": "Fight", "rpg.talk.none": "Nobody is next to you. Walk up to someone first.", "rpg.keys": "Arrow keys or WASD walk, Enter talks.", "rpg.targets": "Walk to", "rpg.goto": "Walk to {name}", "rpg.goto.gate": "Walk to the gate", "rpg.inventory": "Scrolls ({n})", "rpg.to.areas": "World map", "rpg.quest.title": "Quest log", "rpg.quest.talk": "Talk to {name}", "rpg.quest.foes": "Beat the foes ({done} of {total})", "rpg.quest.boss": "Defeat {name}", "rpg.quest.gate": "Open the gate (2 stars)", "rpg.quest.done": "done", "rpg.quest.todo": "to do", "rpg.msg.need.giver": "Speak with {name} first: the quest has to begin.", "rpg.msg.need.foes": "Beat the other foes first ({n} left).", "rpg.msg.gate.shut": "The gate is shut. Finish the quest with 2 stars to open it.", "rpg.msg.noway": "There is no way there.", "rpg.msg.won": "You beat {name}!", "rpg.msg.inn": "You fainted and woke up at the inn with full HP. {name} is still waiting; the quest goes on.", "rpg.msg.fled": "You ran away. {name} is still waiting.", "rpg.msg.accepted": "Quest accepted: {area}.", "rpg.msg.walking": "Walking...", "rpg.dialogue.next": "Continue", "rpg.dialogue.bye": "Goodbye", "rpg.dialogue.later": "Not now", "rpg.dialogue.count": "Line {n} of {total}", "rpg.quest.accept": "Accept the quest", "rpg.portrait": "Portrait of {name}", "rpg.auto.sage": "The Sage", "rpg.auto.sage.1": 'Welcome, {hero}. This is the land of "{unit}".', "rpg.auto.sage.2": "Foes made of muddled ideas roam here: {n} of them, and {boss} guards the gate. Every right answer is a strike.", "rpg.auto.sage.3": "Beat them all with what you know, and the gate will open. Good luck!", "rpg.sage.hint": "Beat the foes ({n} left), then face {boss}.", "rpg.sage.boss": "Only {boss} is left. Face it!", "rpg.sage.done": "Well fought! The gate is open.", "rpg.sage.retry": "The gate needs 2 stars. Try the quest again and answer right the first time.", "rpg.auto.foe.1": "Fog Slime", "rpg.auto.foe.2": "Doubt Bat", "rpg.auto.foe.3": "Myth Imp", "rpg.auto.foe.4": "Rumour Ghost", "rpg.auto.boss": 'Guardian of "{unit}"', "rpg.battle.appears": "{name} blocks the way!", "rpg.battle.boss": "A boss: its strikes are harder.", "rpg.battle.hint": "Every question is a move. A right answer strikes the foe; a wrong one lets it hit back. Answers right in a row make your strikes stronger.", "rpg.battle.start": "Fight!", "rpg.battle.flee": "Run away", "rpg.battle.turn": "Turn {n}: answer to strike {name}.", "rpg.battle.hero": "You", "rpg.battle.foe.hp": "{name}: HP {hp} of {max}", "rpg.battle.hero.hp": "You: HP {hp} of {max}", "rpg.battle.streak": "Streak {n} (strike x{m})", "rpg.fx.strike": "You strike {name} for {n}!", "rpg.fx.strike.streak": "You strike {name} for {n}! (streak x{m})", "rpg.fx.hit": "{name} hits you for {n}.", "rpg.fx.both": "You hit {name} for {n}, and it hits back for {m}.", "rpg.fx.scroll": "A new scroll is in your pack.", "rpg.fx.fall": "{name} falls!", "rpg.fx.faint": "You faint...", "rpg.next.turn": "Next turn", "rpg.next.win": "Victory!", "rpg.next.faint": "Wake up at the inn", "rpg.inv.title": "Scrolls of knowledge", "rpg.inv.intro": "Every fact you earned with a right answer in battle.", "rpg.inv.empty": "No scrolls yet. Each right answer in battle adds one.", "rpg.inv.back": "Back", "rpg.inv.from": "From: {unit}", "rpg.qd.title": "Quest complete!", "rpg.qd.accuracy": "{n}% right the first time", "rpg.qd.gate.open": "The gate is open: walk through it to go on.", "rpg.qd.gate.shut": "The gate stays shut: you need 2 stars. Replay the quest.", "rpg.qd.unlocked": "New area: {units}", "rpg.qd.replay": "Replay the quest", "rpg.qd.world": "Back to the map", "rpg.outro.title": "The end of the quest", "rpg.end.sub": "Every area is mastered and the last foe has fallen.", "rpg.end.scrolls": "Scrolls collected: {n}", "rpg.story.end": "The end", "rpg.msg.rest": "You rest and win back {n} HP.", "rpg.battle.alt": "{hero} faces {foe} on a grassy field under a night sky.", "rpg.mini.alt": "Small map of {area}", "rpg.final.finish": "See the ending", "rpg.final.beaten": "The last foe is beaten.", "rpg.area.mastered": "Mastered", "rpg.story.alt": "Portrait of {name}", "rpg.quest.replay.hint": "Replay the quest to earn more stars." }, hr: { "rpg.tagline": "Pikselna pustolovina kroz ono što učiš", "rpg.title.art": "Pikselni krajolik: noćno nebo, brežuljci, dvorac i mali junak", "rpg.hero.default": "Junak", "rpg.intro.title": "Priča", "rpg.story.next": "Dalje", "rpg.story.begin": "Započni pustolovinu", "rpg.story.skip": "Preskoči priču", "rpg.story.count": "Stranica {n} od {total}", "rpg.auto.intro.1": "Mirna zemlja leži pod noćnim nebom, a putove joj zatvaraju neprijatelji sazdani od pomiješanih ideja.", "rpg.auto.intro.2": "Ti si {hero}, mladi pustolov. Svaki točan odgovor je udarac, a svaka činjenica koju naučiš ide u torbu kao svitak.", "rpg.auto.intro.3": "Posjeti svako područje, razgovaraj s mudracem i pobijedi neprijatelje. Tada će se vrata otvoriti.", "rpg.auto.outro.1": "Posljednji neprijatelj pada i zbrka se razbistrila. Sve što si naučio sada je tvoje.", "rpg.areas.title": "Karta svijeta", "rpg.areas.intro": "Odaberi mjesto. Svako područje je zadatak koji uči jednu cjelinu.", "rpg.area.enter": "Uđi", "rpg.area.locked": "Zaključano: prvo savladaj {units}.", "rpg.area.quest": "Zadatak", "rpg.final.title": "Završna bitka", "rpg.final.ready": "Posljednji neprijatelj miješa sve cjeline. Odgovaraj pažljivo.", "rpg.final.locked": "Savladaj svako područje (2 zvjezdice) da bi se suočio s posljednjim neprijateljem.", "rpg.final.go": "Suoči se s posljednjim neprijateljem", "rpg.auto.final": "Veliki Zbrkanac", "rpg.to.title": "Natrag na naslovnicu", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Karta područja: {area}", "rpg.where": "Nalaziš se u području {area}, u stupcu {x}, retku {y}.", "rpg.near": "Pokraj tebe: {names}.", "rpg.near.none": "Pokraj tebe nema nikoga.", "rpg.side.left": "lijevo", "rpg.side.right": "desno", "rpg.side.up": "iznad", "rpg.side.down": "ispod", "rpg.pad": "Hodaj", "rpg.move.up": "Gore", "rpg.move.down": "Dolje", "rpg.move.left": "Lijevo", "rpg.move.right": "Desno", "rpg.talk": "Razgovaraj", "rpg.fight": "Bori se", "rpg.talk.none": "Pokraj tebe nema nikoga. Prvo priđi nekome.", "rpg.keys": "Strelice ili WASD za hodanje, Enter za razgovor.", "rpg.targets": "Idi do", "rpg.goto": "Idi do: {name}", "rpg.goto.gate": "Idi do vrata", "rpg.inventory": "Svici ({n})", "rpg.to.areas": "Karta svijeta", "rpg.quest.title": "Dnevnik zadatka", "rpg.quest.talk": "Razgovaraj s: {name}", "rpg.quest.foes": "Pobijedi neprijatelje ({done} od {total})", "rpg.quest.boss": "Pobijedi: {name}", "rpg.quest.gate": "Otvori vrata (2 zvjezdice)", "rpg.quest.done": "gotovo", "rpg.quest.todo": "preostaje", "rpg.msg.need.giver": "Prvo razgovaraj s: {name}. Zadatak mora početi.", "rpg.msg.need.foes": "Prvo pobijedi ostale neprijatelje (još {n}).", "rpg.msg.gate.shut": "Vrata su zatvorena. Završi zadatak s 2 zvjezdice da ih otvoriš.", "rpg.msg.noway": "Tamo nema puta.", "rpg.msg.won": "Pobijedio si: {name}!", "rpg.msg.inn": "Onesvijestio si se i probudio u gostionici s punim HP-om. {name} te još čeka; zadatak se nastavlja.", "rpg.msg.fled": "Pobjegao si. {name} te još čeka.", "rpg.msg.accepted": "Zadatak prihvaćen: {area}.", "rpg.msg.walking": "Hodam...", "rpg.dialogue.next": "Nastavi", "rpg.dialogue.bye": "Doviđenja", "rpg.dialogue.later": "Ne sada", "rpg.dialogue.count": "Redak {n} od {total}", "rpg.quest.accept": "Prihvati zadatak", "rpg.portrait": "Portret: {name}", "rpg.auto.sage": "Mudrac", "rpg.auto.sage.1": 'Dobro došao, {hero}. Ovo je zemlja cjeline "{unit}".', "rpg.auto.sage.2": "Ovdje lutaju neprijatelji sazdani od pomiješanih ideja: njih {n}, a vrata čuva {boss}. Svaki točan odgovor je udarac.", "rpg.auto.sage.3": "Pobijedi ih svojim znanjem i vrata će se otvoriti. Sretno!", "rpg.sage.hint": "Pobijedi neprijatelje (još {n}), a zatim se suoči s: {boss}.", "rpg.sage.boss": "Ostao je samo {boss}. Suoči se s njim!", "rpg.sage.done": "Dobro si se borio! Vrata su otvorena.", "rpg.sage.retry": "Za vrata trebaju 2 zvjezdice. Ponovi zadatak i odgovori točno iz prvog pokušaja.", "rpg.auto.foe.1": "Magleni Sluz", "rpg.auto.foe.2": "Šišmiš Sumnje", "rpg.auto.foe.3": "Vragolan Mita", "rpg.auto.foe.4": "Duh Glasina", "rpg.auto.boss": 'Čuvar cjeline "{unit}"', "rpg.battle.appears": "{name} ti zatvara put!", "rpg.battle.boss": "Šef: njegovi su udarci jači.", "rpg.battle.hint": "Svako pitanje je potez. Točan odgovor udara neprijatelja, a netočan mu dopušta da uzvrati. Uzastopni točni odgovori jačaju tvoje udarce.", "rpg.battle.start": "U borbu!", "rpg.battle.flee": "Pobjegni", "rpg.battle.turn": "Potez {n}: odgovori i udari: {name}.", "rpg.battle.hero": "Ti", "rpg.battle.foe.hp": "{name}: HP {hp} od {max}", "rpg.battle.hero.hp": "Ti: HP {hp} od {max}", "rpg.battle.streak": "Niz {n} (udarac x{m})", "rpg.fx.strike": "Udaraš: {name}, šteta {n}!", "rpg.fx.strike.streak": "Udaraš: {name}, šteta {n}! (niz x{m})", "rpg.fx.hit": "{name} te udara, šteta {n}.", "rpg.fx.both": "Pogađaš: {name}, šteta {n}, a on uzvraća štetom {m}.", "rpg.fx.scroll": "Novi svitak je u tvojoj torbi.", "rpg.fx.fall": "{name} pada!", "rpg.fx.faint": "Onesvijestio si se...", "rpg.next.turn": "Sljedeći potez", "rpg.next.win": "Pobjeda!", "rpg.next.faint": "Probudi se u gostionici", "rpg.inv.title": "Svici znanja", "rpg.inv.intro": "Svaka činjenica koju si zaradio točnim odgovorom u borbi.", "rpg.inv.empty": "Još nema svitaka. Svaki točan odgovor u borbi dodaje jedan.", "rpg.inv.back": "Natrag", "rpg.inv.from": "Iz cjeline: {unit}", "rpg.qd.title": "Zadatak je gotov!", "rpg.qd.accuracy": "{n}% točno iz prvog pokušaja", "rpg.qd.gate.open": "Vrata su otvorena: prođi kroz njih da nastaviš.", "rpg.qd.gate.shut": "Vrata ostaju zatvorena: trebaju ti 2 zvjezdice. Ponovi zadatak.", "rpg.qd.unlocked": "Novo područje: {units}", "rpg.qd.replay": "Ponovi zadatak", "rpg.qd.world": "Natrag na kartu", "rpg.outro.title": "Kraj pustolovine", "rpg.end.sub": "Svako je područje savladano i posljednji je neprijatelj pao.", "rpg.end.scrolls": "Skupljeni svici: {n}", "rpg.story.end": "Kraj", "rpg.msg.rest": "Odmaraš i vraćaš {n} HP.", "rpg.battle.alt": "{hero} se suočava s neprijateljem {foe} na travnatom polju pod noćnim nebom.", "rpg.mini.alt": "Mala karta područja: {area}", "rpg.final.finish": "Pogledaj završetak", "rpg.final.beaten": "Posljednji neprijatelj je pobijeđen.", "rpg.area.mastered": "Savladano", "rpg.story.alt": "Portret: {name}", "rpg.quest.replay.hint": "Ponovi zadatak da zaradiš više zvjezdica." }, de: { "rpg.tagline": "Ein Pixel-Abenteuer durch das, was du lernst", "rpg.title.art": "Eine Pixel-Landschaft: Nachthimmel, Hügel, ein Schloss und ein kleiner Held", "rpg.hero.default": "Held", "rpg.intro.title": "Die Geschichte", "rpg.story.next": "Weiter", "rpg.story.begin": "Das Abenteuer beginnen", "rpg.story.skip": "Die Geschichte überspringen", "rpg.story.count": "Seite {n} von {total}", "rpg.auto.intro.1": "Ein stilles Land liegt unter einem Nachthimmel, und seine Wege werden von Feinden aus wirren Gedanken versperrt.", "rpg.auto.intro.2": "Du bist {hero}, ein junger Abenteurer. Jede richtige Antwort ist ein Schlag, und jede Tatsache, die du lernst, wandert als Schriftrolle in deinen Rucksack.", "rpg.auto.intro.3": "Besuche jedes Gebiet, sprich mit seinem Weisen und besiege die Feinde. Dann öffnen sich die Tore.", "rpg.auto.outro.1": "Der letzte Feind fällt und das Durcheinander lichtet sich. Alles, was du gelernt hast, gehört nun dir.", "rpg.areas.title": "Die Weltkarte", "rpg.areas.intro": "Wähle einen Ort. Jedes Gebiet ist ein Abenteuer, das eine Einheit lehrt.", "rpg.area.enter": "Betreten", "rpg.area.locked": "Gesperrt: Meistere zuerst {units}.", "rpg.area.quest": "Abenteuer", "rpg.final.title": "Der letzte Kampf", "rpg.final.ready": "Der letzte Feind mischt alle Einheiten. Antworte gut.", "rpg.final.locked": "Meistere jedes Gebiet (2 Sterne), um dich dem letzten Feind zu stellen.", "rpg.final.go": "Dem letzten Feind gegenübertreten", "rpg.auto.final": "Das Große Durcheinander", "rpg.to.title": "Zurück zum Titel", "rpg.hp": "LP {hp} / {max}", "rpg.map.label": "Karte von {area}", "rpg.where": "Du bist in {area}, in Spalte {x}, Zeile {y}.", "rpg.near": "Neben dir: {names}.", "rpg.near.none": "Niemand ist neben dir.", "rpg.side.left": "links", "rpg.side.right": "rechts", "rpg.side.up": "oben", "rpg.side.down": "unten", "rpg.pad": "Gehen", "rpg.move.up": "Hoch", "rpg.move.down": "Runter", "rpg.move.left": "Links", "rpg.move.right": "Rechts", "rpg.talk": "Sprechen", "rpg.fight": "Kämpfen", "rpg.talk.none": "Niemand ist neben dir. Geh zuerst zu jemandem hin.", "rpg.keys": "Pfeiltasten oder WASD zum Gehen, Enter zum Sprechen.", "rpg.targets": "Gehe zu", "rpg.goto": "Zu {name} gehen", "rpg.goto.gate": "Zum Tor gehen", "rpg.inventory": "Schriftrollen ({n})", "rpg.to.areas": "Weltkarte", "rpg.quest.title": "Questbuch", "rpg.quest.talk": "Sprich mit {name}", "rpg.quest.foes": "Besiege die Feinde ({done} von {total})", "rpg.quest.boss": "Besiege {name}", "rpg.quest.gate": "Öffne das Tor (2 Sterne)", "rpg.quest.done": "erledigt", "rpg.quest.todo": "offen", "rpg.msg.need.giver": "Sprich zuerst mit {name}: Das Abenteuer muss beginnen.", "rpg.msg.need.foes": "Besiege zuerst die anderen Feinde (noch {n}).", "rpg.msg.gate.shut": "Das Tor ist zu. Schließe das Abenteuer mit 2 Sternen ab, um es zu öffnen.", "rpg.msg.noway": "Dorthin führt kein Weg.", "rpg.msg.won": "Du hast {name} besiegt!", "rpg.msg.inn": "Du bist ohnmächtig geworden und im Gasthaus mit voller LP aufgewacht. {name} wartet noch; das Abenteuer geht weiter.", "rpg.msg.fled": "Du bist weggelaufen. {name} wartet noch.", "rpg.msg.accepted": "Auftrag angenommen: {area}.", "rpg.msg.walking": "Unterwegs …", "rpg.dialogue.next": "Weiter", "rpg.dialogue.bye": "Auf Wiedersehen", "rpg.dialogue.later": "Jetzt nicht", "rpg.dialogue.count": "Zeile {n} von {total}", "rpg.quest.accept": "Den Auftrag annehmen", "rpg.portrait": "Porträt von {name}", "rpg.auto.sage": "Der Weise", "rpg.auto.sage.1": "Willkommen, {hero}. Dies ist das Land von „{unit}“.", "rpg.auto.sage.2": "Hier streifen Feinde aus wirren Gedanken umher: {n} an der Zahl, und {boss} bewacht das Tor. Jede richtige Antwort ist ein Schlag.", "rpg.auto.sage.3": "Besiege sie alle mit dem, was du weißt, und das Tor öffnet sich. Viel Glück!", "rpg.sage.hint": "Besiege die Feinde (noch {n}), dann stelle dich {boss}.", "rpg.sage.boss": "Nur noch {boss} ist übrig. Stelle dich ihm!", "rpg.sage.done": "Gut gekämpft! Das Tor ist offen.", "rpg.sage.retry": "Das Tor braucht 2 Sterne. Versuche das Abenteuer noch einmal und antworte gleich beim ersten Mal richtig.", "rpg.auto.foe.1": "Nebelschleim", "rpg.auto.foe.2": "Zweifelfledermaus", "rpg.auto.foe.3": "Mythenwichtel", "rpg.auto.foe.4": "Gerüchtegeist", "rpg.auto.boss": "Wächter von „{unit}“", "rpg.battle.appears": "{name} versperrt den Weg!", "rpg.battle.boss": "Ein Endgegner: Seine Schläge sind härter.", "rpg.battle.hint": "Jede Frage ist ein Zug. Eine richtige Antwort trifft den Feind; eine falsche lässt ihn zurückschlagen. Mehrere richtige Antworten hintereinander machen deine Schläge stärker.", "rpg.battle.start": "Kämpfen!", "rpg.battle.flee": "Weglaufen", "rpg.battle.turn": "Runde {n}: Antworte, um {name} zu treffen.", "rpg.battle.hero": "Du", "rpg.battle.foe.hp": "{name}: LP {hp} von {max}", "rpg.battle.hero.hp": "Du: LP {hp} von {max}", "rpg.battle.streak": "Serie {n} (Schlag x{m})", "rpg.fx.strike": "Du triffst {name} mit {n}!", "rpg.fx.strike.streak": "Du triffst {name} mit {n}! (Serie x{m})", "rpg.fx.hit": "{name} trifft dich mit {n}.", "rpg.fx.both": "Du triffst {name} mit {n}, und er schlägt mit {m} zurück.", "rpg.fx.scroll": "Eine neue Schriftrolle ist in deinem Rucksack.", "rpg.fx.fall": "{name} fällt!", "rpg.fx.faint": "Du wirst ohnmächtig …", "rpg.next.turn": "Nächste Runde", "rpg.next.win": "Sieg!", "rpg.next.faint": "Im Gasthaus aufwachen", "rpg.inv.title": "Schriftrollen des Wissens", "rpg.inv.intro": "Jede Tatsache, die du mit einer richtigen Antwort im Kampf verdient hast.", "rpg.inv.empty": "Noch keine Schriftrollen. Jede richtige Antwort im Kampf bringt eine.", "rpg.inv.back": "Zurück", "rpg.inv.from": "Aus: {unit}", "rpg.qd.title": "Abenteuer geschafft!", "rpg.qd.accuracy": "{n} % gleich beim ersten Mal richtig", "rpg.qd.gate.open": "Das Tor ist offen: Geh hindurch, um weiterzukommen.", "rpg.qd.gate.shut": "Das Tor bleibt zu: Du brauchst 2 Sterne. Spiele das Abenteuer noch einmal.", "rpg.qd.unlocked": "Neues Gebiet: {units}", "rpg.qd.replay": "Das Abenteuer noch einmal spielen", "rpg.qd.world": "Zurück zur Karte", "rpg.outro.title": "Das Ende des Abenteuers", "rpg.end.sub": "Jedes Gebiet ist gemeistert und der letzte Feind ist gefallen.", "rpg.end.scrolls": "Gesammelte Schriftrollen: {n}", "rpg.story.end": "Ende", "rpg.msg.rest": "Du ruhst dich aus und gewinnst {n} LP zurück.", "rpg.battle.alt": "{hero} steht {foe} auf einer Wiese unter einem Nachthimmel gegenüber.", "rpg.mini.alt": "Kleine Karte von {area}", "rpg.final.finish": "Das Ende ansehen", "rpg.final.beaten": "Der letzte Feind ist besiegt.", "rpg.area.mastered": "Gemeistert", "rpg.story.alt": "Porträt von {name}", "rpg.quest.replay.hint": "Spiele das Abenteuer noch einmal, um mehr Sterne zu verdienen." } };
  function io(t, e, s, n, i) {
    const r = d("span", { class: "hp-fill ".concat(n === "foe" ? "is-foe" : "") }), o = d("span", { class: "hp-text" }), a = d("div", { class: "hp-line", testid: i }, o, d("span", { class: "hp-bar", "aria-hidden": "true" }, r)), c = (l, u) => {
      o.textContent = t(l, u);
      const h = fz(l, u);
      r.style.width = "".concat(h, "%"), r.classList.toggle("is-low", h <= 30 && n === "hero"), a.setAttribute("data-hp", String(l)), a.setAttribute("data-max", String(u));
    };
    return c(e, s), { el: a, set: c };
  }
  const Cz = (t) => Number.isInteger(t) ? String(t) : t.toFixed(2).replace(/0$/, "");
  function Zz(t) {
    const e = d("canvas", { class: "rpg-canvas rpg-battle-canvas", width: ut * 3, height: Nd * 3, role: "img", "aria-label": t.words.alt, testid: "battle-scene" }), s = io(t.words.heroLine, t.battle.hp, t.battle.maxHp, "hero", "hero-hp"), n = io(t.words.foeLine, t.battle.foeHp, t.battle.foeMax, "foe", "foe-hp"), i = d("p", { class: "rpg-streak", testid: "streak" }), r = d("div", { class: "rpg-scene-view" }, e), o = d("div", { class: "rpg-scene" }, d("div", { class: "rpg-scene-bars" }, d("div", { class: "rpg-panel" }, d("span", { class: "rpg-who" }, t.words.hero), s.el), d("div", { class: "rpg-panel" }, d("span", { class: "rpg-who" }, t.words.foeName), n.el)), r, i), a = (u, h) => Mz(e, t.pal, { foe: t.foe, boss: t.boss, down: u, heroDown: h }, t.seed, t.skin), c = (u, h) => {
      const p = d("span", { class: "rpg-pop ".concat(h), "aria-hidden": "true" }, u);
      r.appendChild(p), window.setTimeout(() => p.remove(), 1300);
    }, l = (u, h) => {
      var _a3, _b3;
      s.set(u.hp, u.maxHp), n.set(u.foeHp, u.foeMax);
      const p = to(u.streak);
      i.textContent = t.words.streakLine(u.streak, Cz(p)), i.classList.toggle("is-hot", u.streak > 0), o.setAttribute("data-streak", String(u.streak)), a((_a3 = h == null ? void 0 : h.foeDown) != null ? _a3 : false, (_b3 = h == null ? void 0 : h.heroDown) != null ? _b3 : false), h && (h.dealt > 0 && c("-".concat(h.dealt), "is-foe"), h.taken > 0 && (c("-".concat(h.taken), "is-hero"), Ms(r, "is-hit", 500)));
    };
    return l(t.battle), { el: o, update: l };
  }
  function Ld(t) {
    if (t.image) return d("img", { class: "rpg-portrait", src: t.image.url, alt: t.image.alt, testid: "portrait" });
    const e = d("canvas", { class: "rpg-portrait", width: 16, height: 16, role: "img", "aria-label": t.alt, testid: "portrait" }), s = e.getContext("2d");
    return s && (s.imageSmoothingEnabled = false, $t(s, t.sprite, t.pal, 0, 0)), e;
  }
  const Cd = "rpg", Uz = "pixel", Zd = 40, Bz = 70, Ud = (t) => {
    let e = 2166136261;
    for (let s = 0; s < t.length; s++) e = Math.imul(e ^ t.charCodeAt(s), 16777619);
    return e >>> 0;
  }, Fz = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", W: "up", s: "down", S: "down", a: "left", A: "left", d: "right", D: "right" };
  class Kz {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "layout");
      __publicField(this, "titleState", ns());
      __publicField(this, "progress", /* @__PURE__ */ new Map());
      __publicField(this, "palette", null);
      __publicField(this, "skin", vz());
      __publicField(this, "scrolls", []);
      __publicField(this, "hp", Te);
      __publicField(this, "w", null);
      __publicField(this, "message", "");
      __publicField(this, "event", "");
      __publicField(this, "reduced", typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      this.host = e, this.session = new Cs(e, { shellId: Cd, theme: Uz, strings: Lz }), this.layout = Bl(this.session.pack, this.session.section()), this.loadScrolls();
    }
    get s() {
      return this.session.s;
    }
    get pal() {
      var _a3;
      return (_a3 = this.palette) != null ? _a3 : this.palette = bz(this.host.root), this.palette;
    }
    mount() {
      const e = this.session;
      e.mount(), e.setKeyHandler((s) => this.onKey(s)), e.setDebug({ nextGoal: () => this.debugGoal(), pathTo: (s) => this.debugPath(s), layout: () => this.layoutSummary(), view: () => this.currentView() }), this.loadSkin(), this.title();
    }
    unmount() {
      this.leaveWorld(), this.session.unmount();
    }
    heroName() {
      return this.layout.heroNameKey ? this.session.t(this.layout.heroNameKey) : this.s("rpg.hero.default");
    }
    areaName(e) {
      return e.nameKey ? this.session.t(e.nameKey) : this.session.unitTitle(e.unitId);
    }
    foeName(e, s) {
      const n = e.foes.find((i) => i.id === s);
      return n ? n.nameKey ? this.session.t(n.nameKey) : this.s("rpg.auto.foe.".concat((n.n - 1) % 4 + 1)) : s;
    }
    bossName(e) {
      return e.boss.nameKey ? this.session.t(e.boss.nameKey) : this.s("rpg.auto.boss", { unit: this.session.unitTitle(e.unitId) });
    }
    npcName(e, s) {
      const n = e.npcs.find((i) => i.id === s);
      return n ? n.nameKey ? this.session.t(n.nameKey) : this.s("rpg.auto.sage") : s;
    }
    personName(e, s) {
      return s.kind === "npc" ? this.npcName(e, s.id) : s.kind === "foe" ? this.foeName(e, s.id) : this.bossName(e);
    }
    finalName() {
      return this.layout.finalBoss.nameKey ? this.session.t(this.layout.finalBoss.nameKey) : this.s("rpg.auto.final");
    }
    giverOf(e) {
      var _a3;
      return (_a3 = e.npcs.find((s) => s.quest)) != null ? _a3 : e.npcs[0];
    }
    gateOpen(e) {
      return this.session.isMastered(e.unitId);
    }
    progressOf(e) {
      let s = this.progress.get(e.id);
      return s || (s = Pd(e), this.progress.set(e.id, s)), s;
    }
    assetOf(e) {
      if (!e) return null;
      const s = this.session.data.assets[e], n = this.session.pack.assets.find((i) => i.id === e);
      return s && n ? { url: s, alt: this.session.t(n.alt) } : null;
    }
    async loadSkin() {
      const e = this.session, s = (l) => l ? e.data.assets[l] : void 0, [n, i, r, o, a] = await Promise.all([Ks(s(this.layout.tileset)), Ks(s(this.layout.sprites.hero)), Ks(s(this.layout.sprites.npc)), Ks(s(this.layout.sprites.foe)), Ks(s(this.layout.sprites.boss))]), c = { sprites: {} };
      n && (c.tiles = n), i && (c.sprites.hero = i), r && (c.sprites.npc = r), o && (c.sprites.foe = o), a && (c.sprites.boss = a), this.skin = c;
    }
    loadScrolls() {
      const e = this.session.shellData(), s = Array.isArray(e == null ? void 0 : e.scrolls) ? e.scrolls : [];
      this.scrolls = s.filter((n) => typeof n == "string" && !!this.session.item(n));
    }
    addScroll(e) {
      return this.scrolls.includes(e) || !this.scrollText(e) ? false : (this.scrolls = [...this.scrolls, e], this.session.setShellData({ scrolls: this.scrolls }), true);
    }
    scrollText(e) {
      const s = this.session, n = s.item(e);
      return n ? n.didYouKnow && s.text.hasText(n.didYouKnow) ? s.t(n.didYouKnow) : n.explanation && s.text.hasText(n.explanation) ? s.t(n.explanation) : "" : "";
    }
    introLines() {
      const e = this.layout.intro;
      return e.length > 0 ? e.map((s) => this.session.t(s)) : [this.s("rpg.auto.intro.1"), this.s("rpg.auto.intro.2", { hero: this.heroName() }), this.s("rpg.auto.intro.3")];
    }
    outroLines() {
      const e = this.layout.outro;
      return e.length > 0 ? e.map((s) => this.session.t(s)) : [this.s("rpg.auto.outro.1")];
    }
    worldView(e, s, n) {
      const i = this.gateOpen(e);
      return { area: e.id, areaIndex: this.layout.areas.indexOf(e), unit: e.unitId, size: [Math.max(...e.rows.map((r) => r.length)), e.rows.length], pos: [s.pos[0], s.pos[1]], face: s.face, hp: this.hp, maxHp: Te, stage: si(e, s), accepted: s.accepted, done: s.done, gateOpen: i, foesLeft: e.foes.filter((r) => !s.foesDown.includes(r.id)).map((r) => r.id), foesDown: [...s.foesDown], bossDown: s.bossDown, nearby: ni(e, s).map((r) => r.id), targets: ii(e, s).map((r) => r.testid), walking: n, scrolls: this.scrolls.length, event: this.event, goal: Rd(e, s, i) };
    }
    currentView() {
      const e = this.w;
      return e ? this.worldView(e.area, e.p, e.walking) : null;
    }
    debugGoal() {
      const e = this.w;
      return e ? { ...Rd(e.area, e.p, this.gateOpen(e.area)) } : null;
    }
    debugPath(e) {
      var _a3;
      const s = this.w;
      if (!s) return null;
      const n = no(s.area, s.p, e, this.gateOpen(s.area));
      return { id: e, found: n !== null, steps: (_a3 = n == null ? void 0 : n.length) != null ? _a3 : -1, path: (n != null ? n : []).map((i) => [i[0], i[1]]) };
    }
    layoutSummary() {
      return { authored: this.layout.authored, areas: this.layout.areas.map((e) => ({ id: e.id, unit: e.unitId, auto: e.auto, size: [Math.max(...e.rows.map((s) => s.length)), e.rows.length], npcs: e.npcs.map((s) => s.id), foes: e.foes.map((s) => ({ id: s.id, hp: s.hp, items: s.items })), boss: { id: e.boss.id, hp: e.boss.hp }, gate: e.gate ? [e.gate[0], e.gate[1]] : null })), finalBoss: this.layout.finalBoss };
    }
    leaveWorld() {
      const e = this.w;
      e && (window.clearTimeout(e.timer), e.canvas.destroy(), this.w = null);
    }
    show(e, s, n = {}) {
      return this.leaveWorld(), this.session.render(e, s, n);
    }
    takeMessage() {
      const e = this.message;
      return this.message = "", e;
    }
    title() {
      const e = this.session;
      e.finished = false, this.event = "", this.show("title", Zs(e, { onStart: () => this.hasPlayed() ? this.areas() : this.story("intro", 0) }, () => this.title(), this.titleState));
    }
    hasPlayed() {
      const e = this.session.sp;
      return Object.keys(e.units).length > 0 || e.boss.stars > 0 || this.scrolls.length > 0;
    }
    story(e, s) {
      var _a3;
      const n = this.s, i = e === "intro" ? this.introLines() : this.outroLines(), r = Math.max(0, Math.min(s, i.length - 1)), o = r >= i.length - 1, a = () => e === "intro" ? this.areas() : this.end(), c = this.heroName(), l = d("section", { class: "rpg-story" }, d("h1", { class: "screen-title", tabindex: "-1", testid: "story-title" }, n(e === "intro" ? "rpg.intro.title" : "rpg.outro.title")), d("div", { class: "rpg-speaker" }, Ld({ sprite: ei, pal: this.pal, image: this.assetOf(this.layout.sprites.hero), alt: n("rpg.story.alt", { name: c }) }), d("div", { class: "rpg-textbox", testid: "story-text" }, d("p", {}, (_a3 = i[r]) != null ? _a3 : ""), d("span", { class: "rpg-count" }, n("rpg.story.count", { n: r + 1, total: i.length })))), d("div", { class: "rpg-actions" }, o ? T("story-next", n(e === "intro" ? "rpg.story.begin" : "rpg.story.end"), a, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : T("story-next", n("rpg.story.next"), () => this.story(e, r + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o ? null : T("story-skip", n("rpg.story.skip"), a, { class: "btn btn-ghost" })));
      this.show(e, l, { view: { page: r, total: i.length, last: o } });
    }
    areas() {
      const e = this.session, s = this.s, n = e.allMastered(), i = this.takeMessage(), r = (l) => {
        var _a3, _b3;
        const u = !e.isUnlocked(l.unitId), h = e.unitStars(l.unitId), p = e.isMastered(l.unitId), f = ((_b3 = (_a3 = e.pack.units.find((k) => k.id === l.unitId)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((k) => !e.isMastered(k)).map((k) => e.unitTitle(k)), m = d("canvas", { class: "rpg-mini", width: 192, height: Math.round(192 * l.rows.length / Math.max(...l.rows.map((k) => k.length))), role: "img", "aria-label": s("rpg.mini.alt", { area: this.areaName(l) }) });
        Oz(m, this.pal, l.rows, [...l.npcs.map((k) => ({ at: k.at, kind: "giver" })), ...l.foes.map((k) => ({ at: k.at, kind: "foe" })), { at: l.boss.at, kind: "boss" }]);
        const g = T("area-".concat(l.id), [m, d("span", { class: "rpg-area-title" }, this.areaName(l)), d("span", { class: "rpg-area-unit" }, e.unitTitle(l.unitId)), u ? d("span", { class: "rpg-area-need" }, s("rpg.area.locked", { units: f.join(", ") })) : p ? d("span", { class: "rpg-area-need" }, s("rpg.area.mastered")) : d("span", { class: "rpg-area-need" }, s("rpg.area.quest")), e.stars(h)], () => this.enterArea(l), { class: "rpg-area-card".concat(u ? " is-locked" : "").concat(p ? " is-mastered" : ""), "data-stars": String(h), "data-locked": String(u), "data-unit": l.unitId, ...u ? { disabled: true } : {} });
        return d("li", {}, g);
      }, o = e.bossStars() >= 1, a = d("div", { class: "rpg-panel rpg-final" }, d("h2", {}, s("rpg.final.title")), d("p", {}, s(n ? "rpg.final.ready" : "rpg.final.locked")), e.stars(e.bossStars(), "final-stars"), d("div", { class: "rpg-actions" }, T("final-boss", s("rpg.final.go"), () => this.finalIntro(), { class: "btn btn-primary", "data-stars": String(e.bossStars()), "data-locked": String(!n), ...n ? {} : { disabled: true } }), o ? T("finish", s("rpg.final.finish"), () => this.story("outro", 0), { class: "btn" }) : null)), c = d("section", { class: "rpg-areas" }, d("h1", { class: "screen-title", tabindex: "-1", testid: "areas-title" }, s("rpg.areas.title")), d("p", { class: "subject" }, s("rpg.areas.intro")), i ? d("p", { class: "rpg-note rpg-message", role: "status", testid: "message" }, i) : null, d("ul", { class: "rpg-area-list", testid: "area-list" }, this.layout.areas.map(r)), a, d("div", { class: "rpg-actions" }, T("inventory", s("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.areas()), { class: "btn" }), T("to-title", s("rpg.to.title"), () => this.title(), { class: "btn btn-ghost" })));
      this.show("areas", c, { view: { areas: this.layout.areas.map((l) => ({ id: l.id, unit: l.unitId, locked: !e.isUnlocked(l.unitId), stars: e.unitStars(l.unitId) })), finalOpen: n, crowned: o, scrolls: this.scrolls.length, event: this.event } });
    }
    enterArea(e) {
      this.hp = Te, this.event = "entered", this.world(e);
    }
    surroundingsText(e, s) {
      const n = this.s, i = n("rpg.where", { area: this.areaName(e), x: s.pos[0] + 1, y: s.pos[1] + 1 }), r = ni(e, s);
      if (r.length === 0) return "".concat(i, " ").concat(n("rpg.near.none"));
      const o = (a) => {
        const c = qs(s.pos, a.at);
        return n("rpg.side.".concat(c));
      };
      return "".concat(i, " ").concat(n("rpg.near", { names: r.map((a) => "".concat(this.personName(e, a), " (").concat(o(a), ")")).join(", ") }));
    }
    sceneOf(e) {
      const { area: s, p: n } = e, i = Ct(s, n).map((r) => {
        var _a3, _b3;
        return r.kind === "npc" ? { at: r.at, kind: r.giver ? "giver" : "npc", n: 1, ...r.giver && !n.accepted ? { mark: true } : {} } : r.kind === "foe" ? { at: r.at, kind: "foe", n: (_b3 = (_a3 = s.foes.find((o) => o.id === r.id)) == null ? void 0 : _a3.n) != null ? _b3 : 1 } : { at: r.at, kind: "boss", n: 1 };
      });
      return { hero: n.pos, face: n.face, step: e.step, entities: i, gateOpen: this.gateOpen(s) };
    }
    world(e) {
      const s = this.session, n = this.s, i = this.progressOf(e);
      this.leaveWorld();
      const r = this.gateOpen(e), o = this.giverOf(e), a = io((_, z) => n("rpg.hp", { hp: _, max: z }), this.hp, Te, "hero", "hero-hp"), c = d("div", { class: "rpg-canvas-host" }), l = d("p", { class: "rpg-surroundings", "aria-live": "polite", testid: "surroundings" }, this.surroundingsText(e, i)), u = d("p", { class: "rpg-message", testid: "message" }, this.takeMessage()), h = T("talk", n("rpg.talk"), () => this.talk(), { class: "pad-btn pad-talk", "aria-disabled": "true" }), p = (_, z) => T("move-".concat(_), z, () => this.move(_), { class: "pad-btn pad-".concat(_), "aria-label": n("rpg.move.".concat(_)) }), f = d("div", { class: "rpg-panel" }, d("h2", {}, n("rpg.pad")), d("div", { class: "rpg-pad", role: "group", "aria-label": n("rpg.pad") }, p("up", "▲"), p("left", "◀"), h, p("right", "▶"), p("down", "▼")), d("p", { class: "rpg-keys" }, n("rpg.keys"))), m = ii(e, i), g = (_) => {
        const z = Ct(e, i).find((R) => R.goto === _.testid), O = _.kind === "gate" ? n("rpg.goto.gate") : n("rpg.goto", { name: z ? this.personName(e, z) : _.id });
        return d("li", {}, T(_.testid, O, () => this.gotoTarget(_.testid), { class: "btn btn-small", "data-kind": _.kind }));
      }, k = d("div", { class: "rpg-panel" }, d("h2", {}, n("rpg.targets")), d("ul", { class: "rpg-targets", testid: "targets" }, m.map(g))), b = e.foes.filter((_) => i.foesDown.includes(_.id)).length, v = (_, z, O) => d("li", { class: O ? "is-done" : "", testid: "quest-".concat(_), "data-done": String(O) }, d("span", { class: "tick", "aria-hidden": "true" }, O ? "✔" : "○"), d("span", {}, z), d("span", { class: "sr-only" }, O ? " (".concat(n("rpg.quest.done"), ")") : " (".concat(n("rpg.quest.todo"), ")"))), w = d("div", { class: "rpg-panel rpg-quest", testid: "quest-log" }, d("h2", {}, n("rpg.quest.title")), d("ol", {}, v("talk", n("rpg.quest.talk", { name: o ? this.npcName(e, o.id) : "" }), i.accepted), e.foes.length > 0 ? v("foes", n("rpg.quest.foes", { done: b, total: e.foes.length }), b === e.foes.length && i.accepted) : null, v("boss", n("rpg.quest.boss", { name: this.bossName(e) }), i.bossDown), e.gate ? v("gate", n("rpg.quest.gate"), r) : null)), y = d("section", { class: "rpg-world" }, d("header", { class: "rpg-hud" }, d("h1", { class: "screen-title rpg-area-name", tabindex: "-1", testid: "area-name" }, this.areaName(e)), d("div", { class: "rpg-hud-tools" }, a.el, T("inventory", n("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.world(e)), { class: "btn btn-small" }), T("to-areas", n("rpg.to.areas"), () => this.areas(), { class: "btn btn-small" }))), d("div", { class: "rpg-stage" }, d("div", { class: "rpg-view" }, c, l, d("div", { class: "rpg-note" }, u), w), d("aside", { class: "rpg-side" }, f, k)));
      this.session.render("world", y, { unitId: e.unitId, view: this.worldView(e, i, false) });
      const $ = new Tz({ area: e, pal: this.pal, seed: Ud("".concat(s.pack.id, ":").concat(e.id)) % 997, reduced: this.reduced, skin: this.skin });
      $.canvas.setAttribute("role", "img"), $.canvas.setAttribute("aria-label", n("rpg.map.label", { area: this.areaName(e) })), $.canvas.setAttribute("data-testid", "world-canvas"), c.appendChild($.canvas);
      const x = { area: e, p: i, canvas: $, surroundings: l, message: u, talk: h, hp: a, walking: false, step: 0, timer: 0 };
      this.w = x, $.fit(c), this.refresh();
    }
    refresh() {
      const e = this.w;
      if (!e) return;
      const { area: s, p: n } = e;
      e.canvas.setScene(this.sceneOf(e)), e.surroundings.textContent = this.surroundingsText(s, n);
      const i = ni(s, n)[0];
      e.talk.textContent = i && i.kind !== "npc" ? this.s("rpg.fight") : this.s("rpg.talk"), e.talk.setAttribute("aria-disabled", String(!i)), e.hp.set(this.hp, Te), this.session.publish("world", { unitId: s.unitId, view: this.worldView(s, n, e.walking) });
    }
    say(e, s = "") {
      const n = this.w;
      this.event = s, n && (n.message.textContent = e), this.session.live(e), this.refresh();
    }
    onKey(e) {
      if (!this.w || this.session.screen !== "world" || e.ctrlKey || e.metaKey || e.altKey || Is(e.target)) return;
      const n = Fz[e.key];
      if (n) {
        e.preventDefault(), this.move(n);
        return;
      }
      if (e.key === "Enter") {
        const i = e.target;
        if (i && (i.tagName === "BUTTON" || i.tagName === "A")) return;
        e.preventDefault(), this.talk();
      }
    }
    move(e) {
      const s = this.w;
      if (!s || s.walking) return;
      const { area: n, p: i } = s;
      i.face = e;
      const r = Dz(n, i, e, this.gateOpen(n));
      r.kind === "move" ? (i.pos = r.pos, s.step = s.step === 0 ? 1 : 0, this.event = "moved", this.refresh()) : r.kind === "bump" ? this.interact(r.person) : r.kind === "gate" ? this.areas() : es(n.rows, so(i.pos, e)) === "G" ? this.say(this.s("rpg.msg.gate.shut"), "gate-shut") : this.refresh();
    }
    talk() {
      const e = this.w;
      if (!e || e.walking) return;
      const s = ni(e.area, e.p)[0];
      if (!s) return this.say(this.s("rpg.talk.none"), "nobody");
      e.p.face = qs(e.p.pos, s.at), this.interact(s);
    }
    interact(e) {
      const s = this.w;
      if (!s) return;
      const { area: n, p: i } = s;
      if (e.kind === "npc") return this.dialogue(n, e.id, 0);
      const r = this.giverOf(n);
      if (si(n, i) === "talk" && r) return this.say(this.s("rpg.msg.need.giver", { name: this.npcName(n, r.id) }), "need-giver");
      const o = n.foes.filter((a) => !i.foesDown.includes(a.id)).length;
      if (e.kind === "boss" && o > 0) return this.say(this.s("rpg.msg.need.foes", { n: o }), "need-foes");
      this.startBattle(n, e);
    }
    gotoTarget(e) {
      const s = this.w;
      if (!s || s.walking) return;
      const { area: n, p: i } = s, r = this.gateOpen(n), o = no(n, i, e, r);
      if (!o) return this.say(this.s("rpg.msg.noway"), "noway");
      const a = ii(n, i).find((u) => u.testid === e), c = () => {
        if (s.walking = false, a && (i.face = qs(i.pos, a.at)), (a == null ? void 0 : a.kind) === "gate" && r && n.gate && i.pos[0] === n.gate[0] && i.pos[1] === n.gate[1]) return this.areas();
        this.say("", "arrived");
      };
      if (o.length === 0) return c();
      if (s.walking = true, this.reduced) {
        for (let u = 0; u < o.length; u++) {
          const h = o[u];
          i.face = qs(i.pos, h), i.pos = h;
        }
        return c();
      }
      this.event = "walking", this.refresh();
      const l = (u) => {
        if (this.w !== s) return;
        const h = o[u];
        i.face = qs(i.pos, h), i.pos = h, s.step = s.step === 0 ? 1 : 0, this.refresh(), u + 1 < o.length ? s.timer = window.setTimeout(() => l(u + 1), Bz) : c();
      };
      l(0);
    }
    dialogueLines(e, s) {
      var _a3;
      const n = this.s, i = this.progressOf(e), r = this.session, o = si(e, i), a = this.bossName(e), c = e.foes.filter((h) => !i.foesDown.includes(h.id)).length, l = s.quest ? o === "foes" ? n("rpg.sage.hint", { n: c, boss: a }) : o === "boss" ? n("rpg.sage.boss", { boss: a }) : o === "done" ? this.gateOpen(e) ? n("rpg.sage.done") : n("rpg.sage.retry") : null : null;
      if (s.lines.length === 0) {
        const h = [n("rpg.auto.sage.1", { hero: this.heroName(), unit: r.unitTitle(e.unitId) }), n("rpg.auto.sage.2", { n: e.foes.length, boss: a }), n("rpg.auto.sage.3")];
        return o === "talk" ? h : [(_a3 = l != null ? l : h[0]) != null ? _a3 : ""];
      }
      const u = s.lines.map((h) => r.t(h));
      return l ? [...u, l] : u;
    }
    dialogue(e, s, n) {
      var _a3, _b3;
      const i = this.session, r = this.s, o = e.npcs.find((w) => w.id === s);
      if (!o) return this.world(e);
      const a = this.progressOf(e), c = this.dialogueLines(e, o), l = Math.max(0, Math.min(n, c.length - 1)), u = l >= c.length - 1, h = this.npcName(e, o.id), p = o.quest && !a.accepted, f = o.quest && a.done && i.unitStars(e.unitId) < 3, m = () => {
        a.accepted = true, this.message = r("rpg.msg.accepted", { area: this.areaName(e) }), this.event = "accepted", this.world(e);
      }, g = () => this.replay(e), k = () => {
        this.event = "talked", this.world(e);
      }, b = o.quest ? _d : jd, v = d("section", { class: "rpg-dialogue" }, d("h1", { class: "screen-title rpg-name", tabindex: "-1", testid: "dialogue-name" }, h), d("div", { class: "rpg-speaker" }, Ld({ sprite: b, pal: this.pal, image: this.assetOf((_a3 = o.portrait) != null ? _a3 : this.layout.sprites.npc), alt: r("rpg.portrait", { name: h }) }), d("div", { class: "rpg-textbox", testid: "dialogue-text" }, d("p", {}, (_b3 = c[l]) != null ? _b3 : ""), d("span", { class: "rpg-count" }, r("rpg.dialogue.count", { n: l + 1, total: c.length })))), d("div", { class: "rpg-actions" }, u ? [p ? T("accept-quest", r("rpg.quest.accept"), m, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, f ? T("replay-quest", r("rpg.qd.replay"), g, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, T("dialogue-bye", r(p ? "rpg.dialogue.later" : "rpg.dialogue.bye"), k, { class: p || f ? "btn btn-big" : "btn btn-primary btn-big", ...p || f ? {} : { "data-autofocus": "" } })] : T("dialogue-next", r("rpg.dialogue.next"), () => this.dialogue(e, s, l + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      this.show("dialogue", v, { unitId: e.unitId, view: { npc: o.id, giver: o.quest, line: l, total: c.length, last: u, offer: p, replay: f } });
    }
    itemsFor(e, s) {
      const n = this.session, i = e.filter((o) => n.canAsk(n.item(o)));
      if (i.length > 0) return i;
      const r = s ? dr(n.pack, s.unitId).filter((o) => n.canAsk(n.item(o))) : [];
      return r.length > 0 ? r : n.pack.items.map((o) => o.id).filter((o) => n.canAsk(n.item(o)));
    }
    newFight(e) {
      var _a3, _b3;
      const s = this.session, n = e.kind === "foe" ? eo : az, i = this.itemsFor(e.items, e.area), r = (_a3 = e.area) == null ? void 0 : _a3.unitId;
      return { id: e.id, kind: e.kind, area: e.area, name: e.name, sprite: e.sprite, items: i, size: (_b3 = e.size) != null ? _b3 : i.length, battle: hz(e.hp, n, this.hp, Te), run: s.startRun(i, { kind: e.kind === "final" ? "boss" : "unit", ...r ? { unitId: r } : {}, ...e.size ? { size: e.size } : {} }), scoring: true, counts: e.counts, scores: [], last: null, newScroll: false };
    }
    startBattle(e, s) {
      const n = this.progressOf(e), i = s.kind === "foe" ? (() => {
        var _a3, _b3, _c2, _d2, _e2;
        const r = e.foes.find((o) => o.id === s.id);
        return this.newFight({ id: s.id, kind: "foe", area: e, name: this.foeName(e, s.id), sprite: (_c2 = (_b3 = Fs[(((_a3 = r == null ? void 0 : r.n) != null ? _a3 : 1) - 1) % Fs.length]) != null ? _b3 : Fs[0]) != null ? _c2 : ti, items: (_d2 = r == null ? void 0 : r.items) != null ? _d2 : [], hp: (_e2 = r == null ? void 0 : r.hp) != null ? _e2 : 200, counts: !n.counted.includes(s.id) });
      })() : this.newFight({ id: s.id, kind: "boss", area: e, name: this.bossName(e), sprite: ti, items: dr(this.session.pack, e.unitId), hp: e.boss.hp, counts: !n.counted.includes(s.id) });
      this.battleIntro(i);
    }
    sceneFor(e) {
      const s = this.s, n = this.heroName();
      return Zz({ words: { hero: n, foeName: e.name, foeLine: (i, r) => s("rpg.hp", { hp: i, max: r }), heroLine: (i, r) => s("rpg.hp", { hp: i, max: r }), streakLine: (i, r) => s("rpg.battle.streak", { n: i, m: r }), alt: s("rpg.battle.alt", { hero: n, foe: e.name }) }, pal: this.pal, seed: Ud("".concat(this.session.pack.id, ":").concat(e.id)) % 997, skin: this.skin, foe: e.sprite, boss: e.kind !== "foe", battle: e.battle });
    }
    fightView(e, s) {
      var _a3, _b3;
      return { phase: s, fight: e.id, kind: e.kind, foe: e.name, foeHp: e.battle.foeHp, foeMax: e.battle.foeMax, hp: e.battle.hp, maxHp: e.battle.maxHp, streak: e.battle.streak, turn: e.battle.turns, area: (_b3 = (_a3 = e.area) == null ? void 0 : _a3.id) != null ? _b3 : null };
    }
    battleIntro(e) {
      const s = this.s, n = this.sceneFor(e), i = e.kind === "final", r = d("section", { class: "rpg-battle" }, d("h1", { class: "screen-title rpg-name", tabindex: "-1", testid: "battle-title" }, e.name), d("p", { class: "subject", testid: "battle-appears" }, i ? s("rpg.final.ready") : s("rpg.battle.appears", { name: e.name })), n.el, d("div", { class: "rpg-textbox" }, d("p", {}, s("rpg.battle.hint")), e.kind !== "foe" ? d("p", {}, s("rpg.battle.boss")) : null), d("div", { class: "rpg-actions" }, T("battle-start", s("rpg.battle.start"), () => this.fightStep(e), { class: "btn btn-primary btn-big", "data-autofocus": "" }), T("battle-flee", s("rpg.battle.flee"), () => this.flee(e), { class: "btn btn-big" })));
      this.show(i ? "boss" : "battle", r, { ...e.area ? { unitId: e.area.unitId } : {}, view: this.fightView(e, "intro") });
    }
    fightStep(e) {
      const s = this.session, n = this.s;
      let i = s.next(e.run);
      i || (e.run = s.startRun(e.items, { kind: e.kind === "final" ? "boss" : "unit", ...e.area ? { unitId: e.area.unitId } : {}, ...e.kind === "final" ? { size: e.size } : {} }), e.scoring = false, i = s.next(e.run));
      const r = i ? s.item(i.id) : void 0;
      if (!i || !s.canAsk(r)) return this.won(e);
      const o = i, a = this.sceneFor(e);
      e.newScroll = false, lt(s, { item: r, context: e.kind === "foe" ? "battle" : "boss", retry: o.retry, hud: a.el, lead: d("span", {}, n("rpg.battle.turn", { n: e.battle.turns + 1, name: e.name })), ...e.area ? { unitId: e.area.unitId } : {}, roundKind: e.kind === "final" ? "boss" : "unit", roundSize: e.run.size, index: e.run.results.length, view: () => this.fightView(e, "turn"), leaveLabel: n("rpg.battle.flee"), onLeave: () => this.flee(e), onAnswered: (c) => {
        e.run = s.record(e.run, o, c), e.scoring && !o.retry && e.scores.push(c.result.score);
        const l = pz(e.battle, { correct: c.result.correct, score: c.result.score });
        e.battle = l.battle, e.last = l, this.hp = l.battle.hp, c.result.correct && this.addScroll(r.id) && (e.newScroll = true), a.update(l.battle, { dealt: l.dealt, taken: l.taken, foeDown: l.won, heroDown: l.fainted });
      }, effect: (c) => {
        const l = e.last;
        if (!l) return null;
        const u = l.multiplier > 1 ? n("rpg.fx.strike.streak", { name: e.name, n: l.dealt, m: Number.isInteger(l.multiplier) ? l.multiplier : l.multiplier.toFixed(2).replace(/0$/, "") }) : n("rpg.fx.strike", { name: e.name, n: l.dealt }), h = e.newScroll ? " ".concat(n("rpg.fx.scroll")) : "";
        return l.won ? { text: "".concat(u, " ").concat(n("rpg.fx.fall", { name: e.name })).concat(h), tone: "good" } : c.result.correct ? { text: "".concat(u).concat(h), tone: "good" } : l.fainted ? { text: "".concat(n("rpg.fx.hit", { name: e.name, n: l.taken }), " ").concat(n("rpg.fx.faint")), tone: "bad" } : l.dealt > 0 ? { text: n("rpg.fx.both", { name: e.name, n: l.dealt, m: l.taken }), tone: "bad" } : { text: n("rpg.fx.hit", { name: e.name, n: l.taken }), tone: "bad" };
      }, nextLabel: () => {
        var _a3, _b3;
        return ((_a3 = e.last) == null ? void 0 : _a3.won) ? n("rpg.next.win") : ((_b3 = e.last) == null ? void 0 : _b3.fainted) ? n("rpg.next.faint") : n("rpg.next.turn");
      }, onNext: () => {
        var _a3, _b3;
        ((_a3 = e.last) == null ? void 0 : _a3.won) ? this.won(e) : ((_b3 = e.last) == null ? void 0 : _b3.fainted) ? this.faint(e) : this.fightStep(e);
      } });
    }
    settle(e) {
      if (!e.area || !e.counts || e.scores.length === 0) return;
      const s = this.progressOf(e.area);
      s.scores.push(...e.scores), s.counted.includes(e.id) || s.counted.push(e.id), e.counts = false;
    }
    flee(e) {
      this.settle(e), this.event = "fled", this.message = this.s("rpg.msg.fled", { name: e.name }), e.area ? this.world(e.area) : this.areas();
    }
    faint(e) {
      if (this.settle(e), this.hp = Te, this.event = "inn", this.message = this.s("rpg.msg.inn", { name: e.name }), e.area) {
        const s = this.progressOf(e.area);
        s.pos = e.area.start, s.face = "right", this.world(e.area);
      } else this.areas();
    }
    won(e) {
      const s = this.session, n = this.s;
      if (this.settle(e), e.kind === "final") return this.finalWon(e);
      const i = e.area, r = this.progressOf(i);
      if (e.kind === "foe") {
        r.foesDown.includes(e.id) || r.foesDown.push(e.id);
        const c = Math.min(Zd, Te - this.hp);
        return this.hp = Math.min(Te, this.hp + Zd), this.event = "won", this.message = "".concat(n("rpg.msg.won", { name: e.name })).concat(c > 0 ? " ".concat(n("rpg.msg.rest", { n: c })) : ""), this.world(i);
      }
      r.bossDown = true, r.done = true;
      const o = r.scores.length > 0 ? Dd(r.scores) : 1, a = s.recordUnit({ unitId: i.unitId }, o);
      s.playCue("unit-complete"), this.event = "quest-done", this.questDone(i, a.stars, o, a.unlocked);
    }
    replay(e) {
      const s = this.progressOf(e);
      this.progress.set(e.id, Nz(e, s)), this.hp = Te, this.event = "replay", this.world(e);
    }
    questDone(e, s, n, i) {
      const r = this.session, o = this.s, a = Math.round(n * 100), c = r.isMastered(e.unitId), l = this.layout.areas.filter((h) => i.includes(h.unitId)).map((h) => this.areaName(h)), u = d("section", { class: "rpg-done" }, d("h1", { class: "screen-title", tabindex: "-1", testid: "quest-title" }, o("rpg.qd.title")), d("p", { class: "subject" }, this.areaName(e)), r.stars(s, "quest-stars"), d("p", { class: "big-number", testid: "quest-accuracy" }, o("rpg.qd.accuracy", { n: a })), d("p", { class: "message ".concat(c ? "message-ok" : "message-bad"), testid: "quest-gate" }, o(c ? "rpg.qd.gate.open" : "rpg.qd.gate.shut")), l.length > 0 ? d("p", { class: "message", testid: "quest-unlocked" }, o("rpg.qd.unlocked", { units: l.join(", ") })) : null, s < 3 ? d("p", { class: "subject" }, o("rpg.quest.replay.hint")) : null, d("div", { class: "rpg-actions" }, T("to-world", o("rpg.qd.world"), () => this.world(e), { class: c ? "btn btn-primary btn-big" : "btn btn-big", ...c ? { "data-autofocus": "" } : {} }), s < 3 ? T("replay-quest", o("rpg.qd.replay"), () => this.replay(e), { class: c ? "btn btn-big" : "btn btn-primary btn-big", ...c ? {} : { "data-autofocus": "" } }) : null, T("to-areas", o("rpg.to.areas"), () => this.areas(), { class: "btn btn-big" })));
      this.show("quest-done", u, { unitId: e.unitId, view: { area: e.id, unit: e.unitId, stars: s, accuracy: a, mastered: c, gateOpen: c, unlocked: i } });
    }
    finalIntro() {
      const e = this.session;
      this.hp = Te;
      const s = e.pack.items.map((i) => i.id), n = this.newFight({ id: "final", kind: "final", area: null, name: this.finalName(), sprite: ti, items: s, hp: this.layout.finalBoss.hp, size: Math.min(this.layout.finalBoss.size, Math.max(1, s.length)), counts: true });
      this.battleIntro(n);
    }
    finalWon(e) {
      const s = this.session, n = e.scores.length > 0 ? Dd(e.scores) : 1;
      s.recordUnit({ boss: true }, n), s.playCue("boss"), this.event = "final-won", this.message = this.s("rpg.final.beaten"), this.story("outro", 0);
    }
    inventory(e) {
      const s = this.session, n = this.s, i = (o) => {
        const a = s.pack.objectives.find((c) => {
          var _a3;
          return c.id === ((_a3 = s.item(o)) == null ? void 0 : _a3.objective);
        });
        return s.unitTitle(a == null ? void 0 : a.unit);
      }, r = d("section", { class: "rpg-inventory" }, d("h1", { class: "screen-title", tabindex: "-1", testid: "inventory-title" }, n("rpg.inv.title")), d("p", { class: "subject" }, this.scrolls.length === 0 ? n("rpg.inv.empty") : n("rpg.inv.intro")), d("ul", { class: "rpg-scrolls", testid: "scrolls" }, this.scrolls.map((o) => d("li", { class: "rpg-scroll", testid: "scroll-".concat(o) }, d("span", {}, this.scrollText(o)), d("span", { class: "scroll-from" }, n("rpg.inv.from", { unit: i(o) }))))), d("div", { class: "rpg-actions" }, T("inventory-back", n("rpg.inv.back"), e, { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      this.show("inventory", r, { view: { scrolls: [...this.scrolls] } });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.show("end", Us(e, { title: s("rpg.outro.title"), sub: s("rpg.end.sub"), stats: d("p", { class: "subject", testid: "end-scrolls" }, s("rpg.end.scrolls", { n: this.scrolls.length })), onAgain: () => this.areas(), onTitle: () => this.title() }), { view: { scrolls: this.scrolls.length, areas: this.layout.areas.length, crowned: e.bossStars() >= 1 } });
    }
  }
  const Bd = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Cd, mount(e) {
      t = new Kz(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })();
  document.addEventListener("error", (t) => {
    const e = t.target;
    (e instanceof HTMLImageElement || e instanceof HTMLMediaElement || e instanceof SVGImageElement) && console.error("media failed to load: ".concat(e.currentSrc || e.getAttribute("src") || e.getAttribute("href") || "(no source)"));
  }, true);
  const Je = Y0();
  for (const t of aS) Je.registerItemKind(t.kind, t);
  Je.registerShell(fd.id, fd), Je.registerShell(od.id, od), Je.registerShell(hd.id, hd), Je.registerShell(Bd.id, Bd), Je.registerShell($d.id, $d), Je.registerShell(Ju.id, Ju), window.EduEngine = Je, Gd(), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => Je.start()) : Je.start();
})();

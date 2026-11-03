var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  var _a2, _b2;
  const Ru = ["leave", "back", "battle-flee", "to-map", "to-office"];
  function Du(t) {
    var _a3, _b3;
    return (_b3 = (_a3 = t.Capacitor) == null ? void 0 : _a3.Plugins) == null ? void 0 : _b3.App;
  }
  function Lu(t = document) {
    for (const e of Ru) {
      const s = t.querySelector('[data-testid="'.concat(e, '"]'));
      if (!(!s || s.disabled || s.getAttribute("aria-hidden") === "true")) return s.click(), true;
    }
    return false;
  }
  function Cu(t = window) {
    const e = Du(t);
    if (!e || typeof e.addListener != "function") return false;
    try {
      return e.addListener("backButton", () => {
        Lu(t.document) || typeof e.exitApp == "function" && e.exitApp();
      }), true;
    } catch (e2) {
      return false;
    }
  }
  const Zu = "edu-game", no = "edu-root", qs = "quiz-arena";
  function nr(t) {
    const e = Object.values(t).filter((n) => typeof n == "number");
    return Object.entries(t).filter(([n, r]) => e.indexOf(+n) === -1).map(([n, r]) => r);
  }
  function ro(t, e = "|") {
    return t.map((s) => uo(s)).join(e);
  }
  function rr(t, e) {
    return typeof e == "bigint" ? e.toString() : e;
  }
  class Uu {
    constructor(e) {
      this._getter = e, this._value = void 0;
    }
    get value() {
      const e = this._getter;
      return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
    }
  }
  function Gs(t) {
    return new Uu(t);
  }
  function Fu(t) {
    return t == null;
  }
  function ir(t) {
    const e = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(e, s);
  }
  function Bu(t, e) {
    const s = t / e, n = Math.round(s), r = 4 * Number.EPSILON * Math.max(Math.abs(s), 1);
    return Math.abs(s - n) < r ? 0 : s - n;
  }
  const io = /* @__PURE__ */ Symbol("evaluating");
  function Ku(t, e, s) {
    let n;
    Object.defineProperty(t, e, { get() {
      if (n !== io) return n === void 0 && (n = io, n = s()), n;
    }, set(r) {
      Object.defineProperty(t, e, { value: r });
    }, configurable: true });
  }
  function Qe(t, e, s) {
    Object.defineProperty(t, e, { value: s, writable: true, enumerable: true, configurable: true });
  }
  function or(t) {
    const e = Object.getOwnPropertyDescriptor(t, "shape");
    return (e == null ? void 0 : e.get) ? e.get.raw : e == null ? void 0 : e.value;
  }
  function Xe(t) {
    var _a3;
    return (_a3 = or(t._zod.def)) != null ? _a3 : t._zod.def.shape;
  }
  function oo(t, e, s) {
    Object.defineProperty(t, e, { get() {
      const n = s();
      return Qe(this, e, n), n;
    }, enumerable: true, configurable: true });
  }
  function ao(t, e, s) {
    e in t ? Qe(t, e, s) : t[e] = s;
  }
  function jt(t, e, s, n) {
    const r = Xe(e);
    for (const i of s) {
      const o = Object.getOwnPropertyDescriptor(r, i);
      o.enumerable && (o.get ? oo(t, i, () => {
        const a = e._zod.def.shape[i];
        return n ? n(a, i) : a;
      }) : ao(t, i, n ? n(o.value, i) : o.value));
    }
  }
  function qu(t, e) {
    for (const s of Reflect.ownKeys(e)) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.enumerable && (n.get ? oo(t, s, () => e[s]) : ao(t, s, n.value));
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
  function Gu(t) {
    return JSON.stringify(t);
  }
  function Wu(t) {
    return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const co = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
  };
  function os(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  const Hu = Gs(() => {
    var _a3;
    if (Me.jitless || typeof navigator < "u" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) return false;
    try {
      const t = Function;
      return new t(""), true;
    } catch (e) {
      return false;
    }
  });
  function Ct(t) {
    if (os(t) === false) return false;
    const e = t.constructor;
    if (e === void 0 || typeof e != "function") return true;
    const s = e.prototype;
    return !(os(s) === false || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === false);
  }
  function lo(t) {
    return Ct(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
  }
  const Vu = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  function Zt(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function ut(t, e, s) {
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
  function uo(t) {
    return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? '"'.concat(t, '"') : "".concat(t);
  }
  function Yu(t) {
    return Object.keys(t).filter((e) => t[e]._zod.optin !== void 0 && t[e]._zod.optout === "optional");
  }
  const ho = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, Ju = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
  function Qu(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const i = {};
    return jt(i, t, Ws(t, e)), ut(t, Ee(s, { shape: i, checks: [] }));
  }
  function Ws(t, e) {
    var _a3;
    const s = Xe(t), n = [];
    for (const r of Reflect.ownKeys(e)) {
      if (!((_a3 = Object.getOwnPropertyDescriptor(s, r)) == null ? void 0 : _a3.enumerable)) throw new Error('Unrecognized key: "'.concat(String(r), '"'));
      e[r] && n.push(r);
    }
    return n;
  }
  function Xu(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const i = new Set(Ws(t, e)), o = {};
    return jt(o, t, Reflect.ownKeys(Xe(t)).filter((a) => !i.has(a))), ut(t, Ee(s, { shape: o, checks: [] }));
  }
  function eh(t, e) {
    if (!Ct(e)) throw new Error("Invalid input to extend: expected a plain object");
    const s = t._zod.def.checks;
    if (s && s.length > 0) {
      const r = Xe(t);
      for (const i of Reflect.ownKeys(e)) if (Object.getOwnPropertyDescriptor(r, i) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    return ut(t, Ee(t._zod.def, { shape: po(t, e) }));
  }
  function po(t, e) {
    const s = {};
    return jt(s, t, Reflect.ownKeys(Xe(t))), qu(s, e), s;
  }
  function th(t, e) {
    if (!Ct(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
    return ut(t, Ee(t._zod.def, { shape: po(t, e) }));
  }
  function sh(t, e) {
    var _a3, _b3, _c2;
    if (!((_a3 = e == null ? void 0 : e._zod) == null ? void 0 : _a3.def)) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    if ((_b3 = t._zod.def.checks) == null ? void 0 : _b3.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    const s = {};
    jt(s, t, Reflect.ownKeys(Xe(t))), jt(s, e, Reflect.ownKeys(Xe(e)));
    const n = Ee(t._zod.def, { shape: s, get catchall() {
      return e._zod.def.catchall;
    }, checks: (_c2 = e._zod.def.checks) != null ? _c2 : [] });
    return ut(t, n);
  }
  function fo(t, e, s, n = "partial") {
    const i = e._zod.def.checks;
    if (i && i.length > 0) throw new Error(".".concat(n, "() cannot be used on object schemas containing refinements"));
    const a = s ? new Set(Ws(e, s)) : void 0, c = {};
    return jt(c, e, Reflect.ownKeys(Xe(e)), t && ((l, d) => a && !a.has(d) ? l : new t({ type: "optional", innerType: l }))), ut(e, Ee(e._zod.def, { shape: c, checks: [] }));
  }
  function nh(t, e, s) {
    const n = s ? new Set(Ws(e, s)) : void 0, r = {};
    return jt(r, e, Reflect.ownKeys(Xe(e)), (i, o) => n && !n.has(o) ? i : new t({ type: "nonoptional", innerType: i })), ut(e, Ee(e._zod.def, { shape: r }));
  }
  function Fe(t, e = 0) {
    var _a3;
    if (t.aborted === true) return true;
    for (let s = e; s < t.issues.length; s++) if (((_a3 = t.issues[s]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function rh(t, e = 0) {
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
  function as(t) {
    return typeof t == "string" ? t : t == null ? void 0 : t.message;
  }
  function mo(t) {
    var _a3, _b3;
    const e = [];
    for (const s of t != null ? t : []) {
      const n = s._zod.def;
      if (!/_(length|size)$|_equals$/.test(n.check)) break;
      const r = (_b3 = (_a3 = n.maximum) != null ? _a3 : n.length) != null ? _b3 : n.size;
      r >= 0 && e.push([r, s]);
    }
    return e;
  }
  function ar(t, e, s) {
    var _a3;
    var n;
    for (let r = e; r < t.length; r++) (_a3 = (n = t[r]).schema) != null ? _a3 : n.schema = s;
  }
  function pt(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q;
    var n;
    const r = (_b3 = (_a3 = t.inst) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.traits;
    (r == null ? void 0 : r.has("$ZodType")) && (r.has("$ZodCheck") ? (_c2 = (n = t).schema) != null ? _c2 : n.schema = t.inst : t.schema = t.inst);
    const i = t.schema !== t.inst ? (_e2 = (_d2 = t.schema) == null ? void 0 : _d2._zod.def) == null ? void 0 : _e2.error : void 0, o = t.message ? t.message : (_p2 = (_o2 = (_m2 = (_k2 = (_i2 = as((_h2 = (_g2 = (_f2 = t.inst) == null ? void 0 : _f2._zod.def) == null ? void 0 : _g2.error) == null ? void 0 : _h2.call(_g2, t))) != null ? _i2 : as(i == null ? void 0 : i(t))) != null ? _k2 : as((_j = e == null ? void 0 : e.error) == null ? void 0 : _j.call(e, t))) != null ? _m2 : as((_l2 = s.customError) == null ? void 0 : _l2.call(s, t))) != null ? _o2 : as((_n2 = s.localeError) == null ? void 0 : _n2.call(s, t))) != null ? _p2 : "Invalid input", a = {};
    for (const c of Object.keys(t)) c === "inst" || c === "schema" || c === "continue" || c === "input" || c === "__proto__" || (a[c] = t[c]);
    return (_q = a.path) != null ? _q : a.path = [], a.message = o, (e == null ? void 0 : e.reportInput) && (a.input = t.input), a;
  }
  const ih = /[\uD800-\uDBFF]/;
  function cr(t) {
    const e = t.length;
    if (!ih.test(t)) return e;
    let s = e;
    for (let n = 0; n < e - 1; n++) (t.charCodeAt(n) & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 && (s--, n++);
    return s;
  }
  function lr(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
  }
  function oh(t) {
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
  function cs(...t) {
    const [e, s, n] = t;
    return typeof e == "string" ? { message: e, code: "custom", input: s, inst: n } : { ...e };
  }
  function ah(t, e) {
    for (const s in e) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.get ? Object.defineProperty(t, s, { ...n, enumerable: false }) : ch(t, s, n.value);
    }
  }
  function ft(t, e, s, n = true) {
    return Object.defineProperty(t, e, { configurable: true, writable: true, enumerable: n, value: s }), s;
  }
  function go(t, e, s) {
    return ft(t, e, s, false);
  }
  function ko(t, e) {
    for (const s in t) {
      const n = t[s];
      Object.defineProperty(e, s, { configurable: true, enumerable: true, get() {
        return ft(this, s, n(this));
      }, set(r) {
        ft(this, s, r);
      } });
    }
    return e;
  }
  function ch(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, get() {
      return this == null ? s : ft(this, e, s.bind(this));
    }, set(n) {
      ft(this, e, n);
    } });
  }
  function lh(t, e) {
    const s = Object.getPrototypeOf(t);
    return e in s ? void 0 : s;
  }
  let dr, mt = false;
  const dh = { configurable: true, get() {
    mt = true;
  } };
  function X(t, e, s) {
    const n = Object.getPrototypeOf(t._zod);
    if (e in n && dr !== t._zod) {
      dr = void 0;
      return;
    }
    dr = t._zod, Object.defineProperty(n, e, { configurable: true, get() {
      Object.defineProperty(this, e, dh);
      const r = mt;
      mt = false;
      try {
        const i = s(this);
        return mt ? delete this[e] : Object.defineProperty(this, e, { configurable: true, writable: true, value: i }), mt = mt || r, i;
      } catch (i) {
        throw delete this[e], mt = mt || r, i;
      }
    }, set(r) {
      Object.defineProperty(this, e, { configurable: true, writable: true, value: r });
    } });
  }
  function uh(t, e, s, n) {
    const r = lh(t, e);
    r && Object.defineProperty(r, e, { configurable: true, get() {
      const i = { configurable: true, writable: true, enumerable: n, value: void 0 };
      return Object.defineProperty(this, e, i), i.value = s(this), Object.defineProperty(this, e, i), i.value;
    }, set(i) {
      Object.defineProperty(this, e, { configurable: true, writable: true, enumerable: n, value: i });
    } });
  }
  const hh = "~constantCatch";
  function ph(t) {
    const e = () => t;
    return e[hh] = true, e;
  }
  var bo;
  const ur = { value: void 0, enumerable: false };
  let vo = "captureStackTrace" in Error ? Error : null;
  function fh(t) {
    const e = vo;
    if (e) {
      const s = e.stackTraceLimit;
      if (typeof s == "number") {
        try {
          e.stackTraceLimit = 0;
        } catch (e2) {
          return vo = null, new t();
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
    const r = {};
    function i(p) {
      this.def = p, this.constr = h, this.traits = /* @__PURE__ */ new Set();
    }
    i.prototype = r;
    const o = s, a = o && /* @__PURE__ */ new WeakSet();
    function c(p, f) {
      if (p._zod) {
        if (p._zod.traits.has(t)) return;
      } else {
        ur.value = new i(f);
        try {
          Object.defineProperty(p, "_zod", ur);
        } finally {
          ur.value = void 0;
        }
      }
      if (p._zod.traits.add(t), e(p, f), a) {
        const g = Object.getPrototypeOf(p), k = p._zod.constr.prototype;
        let b = g;
        for (; b && b !== k; ) b = Object.getPrototypeOf(b);
        const v = b != null ? b : g;
        a.has(v) || (a.add(v), ah(v, o));
      }
      const m = h.prototype;
      for (const g in m) Object.prototype.hasOwnProperty.call(m, g) && (g in p || (p[g] = m[g].bind(p)));
    }
    const l = (_a3 = n == null ? void 0 : n.Parent) != null ? _a3 : Object;
    class d extends l {
    }
    Object.defineProperty(d, "name", { value: t });
    function h(p) {
      var _a4;
      const f = (n == null ? void 0 : n.Parent) ? fh(d) : this;
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
  class wo extends Error {
    constructor(e) {
      super("Encountered unidirectional transform during encode: ".concat(e)), this.name = "ZodEncodeError";
    }
  }
  (_a2 = (bo = globalThis).__zod_globalConfig) != null ? _a2 : bo.__zod_globalConfig = {};
  const Me = globalThis.__zod_globalConfig;
  function Ge(t) {
    return t && Object.assign(Me, t), Me;
  }
  function mh() {
    var _a3;
    const t = this._zod;
    return (_a3 = t.message) != null ? _a3 : t.message = JSON.stringify(t.def, rr, 2), t.message;
  }
  function gh(t) {
    this._zod.message = t;
  }
  const kh = { get: mh, set: gh, enumerable: true, configurable: true }, hr = { value: void 0, enumerable: false }, yo = new WeakSet([Object.prototype, Error.prototype]), bh = M("$ZodError", (t, e) => {
    t.name = "$ZodError", hr.value = e, Object.defineProperty(t, "issues", hr), hr.value = void 0, Object.defineProperty(t, "message", kh);
    const s = Object.getPrototypeOf(t);
    yo.has(s) || (yo.add(s), Object.defineProperty(s, "toString", { configurable: true, enumerable: false, get() {
      const n = () => this.message;
      return Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true });
    } }));
  });
  function vh(t, e, s) {
    return Object.prototype.hasOwnProperty.call(t, e) || (e === "__proto__" ? Object.defineProperty(t, e, { value: s(), writable: true, enumerable: true, configurable: true }) : t[e] = s()), t[e];
  }
  function wh(t, e = (s) => s.message) {
    const s = {}, n = [];
    for (const r of t.issues) r.path.length > 0 ? vh(s, r.path[0], () => []).push(e(r)) : n.push(e(r));
    return { formErrors: n, fieldErrors: s };
  }
  function yh(t, e = (s) => s.message) {
    const s = { _errors: [] }, n = (r, i = []) => {
      for (const o of r.issues) if (o.code === "invalid_union" && o.errors.length) o.errors.map((a) => n({ issues: a }, [...i, ...o.path]));
      else if (o.code === "invalid_key") n({ issues: o.issues }, [...i, ...o.path]);
      else if (o.code === "invalid_element") n({ issues: o.issues }, [...i, ...o.path]);
      else {
        const a = [...i, ...o.path];
        if (a.length === 0) s._errors.push(e(o));
        else {
          let c = s, l = 0;
          for (; l < a.length; ) {
            const d = a[l], h = l === a.length - 1;
            if (d === "_errors") {
              h && c._errors.push(e(o)), l++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(c, d) || Object.defineProperty(c, d, { value: { _errors: [] }, enumerable: true, writable: true, configurable: true });
            const p = c[d];
            h && p._errors.push(e(o)), c = p, l++;
          }
        }
      }
    };
    return n(t), s;
  }
  function Hs(t, e) {
    var _a3;
    return { callee: (_a3 = e == null ? void 0 : e.callee) != null ? _a3 : t, Err: e == null ? void 0 : e.Err };
  }
  const pr = (t) => {
    const e = (s, n, r, i) => {
      var _a3, _b3;
      const o = r ? { ...r, async: false } : { async: false }, a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise) throw new xt();
      if (a.issues.length) {
        const c = new ((_a3 = i == null ? void 0 : i.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, Ge())));
        throw co(c, (_b3 = i == null ? void 0 : i.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, fr = (t) => {
    const e = async (s, n, r, i) => {
      var _a3, _b3;
      const o = r ? { ...r, async: true } : { async: true };
      let a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise && (a = await a), a.issues.length) {
        const c = new ((_a3 = i == null ? void 0 : i.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, Ge())));
        throw co(c, (_b3 = i == null ? void 0 : i.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, mr = (t) => (e, s, n) => {
    const r = n ? { ...n, async: false } : { async: false }, i = e._zod.run({ value: s, issues: [] }, r);
    if (i instanceof Promise) throw new xt();
    return i.issues.length ? So(t, i.issues, r) : { success: true, data: i.value };
  };
  function So(t, e, s) {
    let n;
    return { success: false, get error() {
      return n || (n = new t(e.map((r) => pt(r, s, Ge()))), e = void 0, s = void 0), n;
    }, set error(r) {
      n = r, e = void 0, s = void 0;
    } };
  }
  const gr = (t) => async (e, s, n) => {
    const r = n ? { ...n, async: true } : { async: true };
    let i = e._zod.run({ value: s, issues: [] }, r);
    return i instanceof Promise && (i = await i), i.issues.length ? So(t, i.issues, r) : { success: true, data: i.value };
  }, Sh = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), $h = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), zh = ((t, e, s) => {
    const n = t._zod.bag.validator;
    if (n !== void 0) {
      if (n(e) !== Sh) return true;
      if (n.definite === true && s === void 0) return false;
    }
    return _h(t, e, s);
  });
  function _h(t, e, s) {
    const n = s ? { ...s, async: false, abortEarly: true } : { async: false, abortEarly: true }, r = t._zod.bag.fallbackRun;
    let i;
    if (r ? (n[$h] = true, i = r({ value: e, issues: [] }, n)) : i = t._zod.run({ value: e, issues: [] }, n), i instanceof Promise) throw new xt();
    return i.issues.length === 0;
  }
  const jh = async (t, e, s) => {
    const n = s ? { ...s, async: true, abortEarly: true } : { async: true, abortEarly: true };
    let r = t._zod.run({ value: e, issues: [] }, n);
    return r instanceof Promise && (r = await r), r.issues.length === 0;
  }, xh = (t) => {
    const e = pr(t), s = (n, r, i, o) => {
      const a = i ? { ...i, direction: "backward" } : { direction: "backward" };
      return e(n, r, a, Hs(s, o));
    };
    return s;
  }, Eh = (t) => {
    const e = pr(t), s = (n, r, i, o) => e(n, r, i, Hs(s, o));
    return s;
  }, Ah = (t) => {
    const e = fr(t), s = async (n, r, i, o) => {
      const a = i ? { ...i, direction: "backward" } : { direction: "backward" };
      return await e(n, r, a, Hs(s, o));
    };
    return s;
  }, Th = (t) => {
    const e = fr(t), s = async (n, r, i, o) => await e(n, r, i, Hs(s, o));
    return s;
  }, Ih = (t) => (e, s, n) => {
    const r = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return mr(t)(e, s, r);
  }, Mh = (t) => (e, s, n) => mr(t)(e, s, n), Oh = (t) => async (e, s, n) => {
    const r = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return gr(t)(e, s, r);
  }, Nh = (t) => async (e, s, n) => gr(t)(e, s, n), Ph = /^[cC][0-9a-z]{6,}$/, Rh = /^[0-9a-z]+$/, Dh = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Lh = /^[0-9a-vA-V]{20}$/, Ch = /^[A-Za-z0-9]{27}$/, Zh = /^[a-zA-Z0-9_-]{21}$/;
  function Uh(t) {
    return new RegExp("^[a-zA-Z0-9_-]{".concat(t, "}$"));
  }
  const Fh = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Bh = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, $o = (t) => t ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(t, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Kh = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qh = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
  function Gh() {
    return new RegExp(qh, "u");
  }
  const Wh = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Hh = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Vh = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Yh = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jh = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qh = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Xh = /^https?$/, ep = /^\+[1-9]\d{6,14}$/, zo = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  function tp(t) {
    return new RegExp("^".concat(t, "$"));
  }
  const sp = tp(zo);
  function kr(t) {
    const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number" ? t.precision === -1 ? "".concat(e) : t.precision === 0 ? "".concat(e, ":[0-5]\\d") : "".concat(e, ":[0-5]\\d\\.\\d{").concat(t.precision, "}") : t.seconds ? "".concat(e, ":[0-5]\\d(?:\\.\\d+)?") : "".concat(e, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  }
  function np(t) {
    return new RegExp("^".concat(kr(t), "$"));
  }
  function rp(t) {
    const e = ["Z"];
    t.offset && e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const s = "".concat(kr({ precision: t.precision, seconds: true }), "(?:").concat(e.join("|"), ")"), n = t.local ? "".concat(s, "|").concat(kr({ precision: t.precision })) : s;
    return new RegExp("^".concat(zo, "T(?:").concat(n, ")$"));
  }
  const ip = /^[\s\S]{0,}$/, op = /^-?\d+$/, br = /^-?\d+(?:\.\d+)?$/, ap = /^(?:true|false)$/i, cp = /^[^A-Z]*$/, lp = /^[^a-z]*$/, ze = M("$ZodCheck", (t, e) => {
    var _a3, _b3;
    var s;
    (_a3 = t._zod) != null ? _a3 : t._zod = {}, t._zod.def = e, (_b3 = (s = t._zod).onattach) != null ? _b3 : s.onattach = [];
  }), vr = (t) => {
    const e = t.value;
    return !Fu(e) && e.length !== void 0;
  }, Vs = { number: "number", bigint: "bigint", object: "date" }, _o = M("$ZodCheckLessThan", (t, e) => {
    ze.init(t, e);
    const s = Vs[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value <= e.value : n.value < e.value) || n.issues.push({ origin: (_a3 = Vs[typeof n.value]) != null ? _a3 : s, code: "too_big", maximum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), jo = M("$ZodCheckGreaterThan", (t, e) => {
    ze.init(t, e);
    const s = Vs[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value >= e.value : n.value > e.value) || n.issues.push({ origin: (_a3 = Vs[typeof n.value]) != null ? _a3 : s, code: "too_small", minimum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), dp = M("$ZodCheckMultipleOf", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      if (typeof s.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof s.value == "bigint" ? e.value !== BigInt(0) && s.value % e.value === BigInt(0) : Bu(s.value, e.value) === 0) || s.issues.push({ origin: typeof s.value, code: "not_multiple_of", divisor: e.value, input: s.value, inst: t, continue: !e.abort });
    };
  }), up = M("$ZodCheckNumberFormat", (t, e) => {
    var _a3;
    ze.init(t, e), e.format = e.format || "float64";
    const s = (_a3 = e.format) == null ? void 0 : _a3.includes("int"), n = s ? "int" : "number", [r, i] = ho[e.format];
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
      a < r && o.issues.push({ origin: "number", input: a, code: "too_small", minimum: r, inclusive: true, inst: t, continue: !e.abort }), a > i && o.issues.push({ origin: "number", input: a, code: "too_big", maximum: i, inclusive: true, inst: t, continue: !e.abort });
    };
  }), hp = M("$ZodCheckMaxLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = vr, t._zod.check = (n) => {
      const r = n.value, i = r.length;
      if ((typeof r == "string" && i > e.maximum ? cr(r) : i) <= e.maximum) return;
      const a = lr(r);
      n.issues.push({ origin: a, code: "too_big", maximum: e.maximum, inclusive: true, input: r, inst: t, continue: !e.abort });
    };
  }), pp = M("$ZodCheckMinLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = vr, t._zod.check = (n) => {
      const r = n.value, i = r.length;
      if ((typeof r == "string" && i >= e.minimum && i < e.minimum * 2 ? cr(r) : i) >= e.minimum) return;
      const a = lr(r);
      n.issues.push({ origin: a, code: "too_small", minimum: e.minimum, inclusive: true, input: r, inst: t, continue: !e.abort });
    };
  }), fp = M("$ZodCheckLengthEquals", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = vr, t._zod.check = (n) => {
      const r = n.value, i = r.length, o = typeof r == "string" && i >= e.length && i <= e.length * 2 ? cr(r) : i;
      if (o === e.length) return;
      const a = lr(r), c = o > e.length;
      n.issues.push({ origin: a, ...c ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length }, inclusive: true, exact: true, input: n.value, inst: t, continue: !e.abort });
    };
  }), Ys = M("$ZodCheckStringFormat", (t, e) => {
    var _a3, _b3;
    var s, n;
    ze.init(t, e), e.pattern ? (_a3 = (s = t._zod).check) != null ? _a3 : s.check = (r) => {
      e.pattern.lastIndex = 0, !e.pattern.test(r.value) && r.issues.push({ origin: "string", code: "invalid_format", format: e.format, input: r.value, ...e.pattern ? { pattern: e.pattern.toString() } : {}, inst: t, continue: !e.abort });
    } : (_b3 = (n = t._zod).check) != null ? _b3 : n.check = () => {
    };
  }), mp = M("$ZodCheckRegex", (t, e) => {
    Ys.init(t, e), t._zod.check = (s) => {
      e.pattern.lastIndex = 0, !e.pattern.test(s.value) && s.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: s.value, pattern: e.pattern.toString(), inst: t, continue: !e.abort });
    };
  }), gp = M("$ZodCheckLowerCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = cp, Ys.init(t, e);
  }), kp = M("$ZodCheckUpperCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = lp, Ys.init(t, e);
  }), bp = M("$ZodCheckIncludes", (t, e) => {
    ze.init(t, e);
    const s = Zt(e.includes), n = new RegExp(typeof e.position == "number" ? "^.{".concat(e.position, ",}").concat(s) : s);
    e.pattern = n, t._zod.check = (r) => {
      r.value.includes(e.includes, e.position) || r.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: e.includes, input: r.value, inst: t, continue: !e.abort });
    };
  }), vp = M("$ZodCheckStartsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp("^".concat(Zt(e.prefix), ".*"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.startsWith(e.prefix) || n.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: e.prefix, input: n.value, inst: t, continue: !e.abort });
    };
  }), wp = M("$ZodCheckEndsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp(".*".concat(Zt(e.suffix), "$"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.endsWith(e.suffix) || n.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: e.suffix, input: n.value, inst: t, continue: !e.abort });
    };
  }), yp = M("$ZodCheckOverwrite", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      s.value = e.tx(s.value);
    };
  });
  class Sp {
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
      const n = e.split("\n").filter((o) => o), r = Math.min(...n.map((o) => o.length - o.trimStart().length)), i = n.map((o) => o.slice(r)).map((o) => " ".repeat(this.indent * 2) + o);
      for (const o of i) this.content.push(o);
    }
    compile() {
      var _a3;
      const e = Function, s = (_a3 = this == null ? void 0 : this.content) != null ? _a3 : [""];
      return new e(...Object.keys(this.closed), "return function (".concat(this.args.join(", "), ") {\n").concat(s.join("\n"), "\n};"))(...Object.values(this.closed));
    }
  }
  const $p = { major: 4, minor: 6, patch: 7 }, ie = M("$ZodType", (t, e) => {
    var _a3, _b3;
    var s;
    t != null ? t : t = {}, t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = $p;
    const n = t._zod.def.checks, r = t._zod.traits.has("$ZodCheck") ? [t, ...n != null ? n : []] : (n == null ? void 0 : n.length) ? [...n] : [];
    for (const i of r) for (const o of i._zod.onattach) o(t);
    if (r.length === 0) (_a3 = (s = t._zod).deferred) != null ? _a3 : s.deferred = [], (_b3 = t._zod.deferred) == null ? void 0 : _b3.push(() => {
      t._zod.run = t._zod.parse;
    });
    else {
      const i = (a, c, l) => {
        if (a.memo) return a;
        let d = Fe(a), h;
        for (const p of c) {
          if (p._zod.def.when) {
            if (rh(a) || !p._zod.def.when(a)) continue;
          } else if (d) continue;
          const f = a.issues.length, m = p._zod.check(a);
          if (m instanceof Promise && (l == null ? void 0 : l.async) === false) throw new xt();
          if (h || m instanceof Promise) h = (h != null ? h : Promise.resolve()).then(async () => {
            await m, a.issues.length !== f && (ar(a.issues, f, t), d || (d = Fe(a, f)));
          });
          else {
            if (a.issues.length === f) continue;
            ar(a.issues, f, t), d || (d = Fe(a, f));
          }
        }
        return h ? h.then(() => a) : a;
      }, o = (a, c, l) => {
        if (Fe(a)) return a.aborted = true, a;
        const d = i(c, r, l);
        if (d instanceof Promise) {
          if (l.async === false) throw new xt();
          return d.then((h) => t._zod.parse(h, l));
        }
        return t._zod.parse(d, l);
      };
      t._zod.run = (a, c) => {
        if (c.skipChecks) return t._zod.parse(a, c);
        if (c.direction === "backward") {
          const d = t._zod.parse({ value: a.value, issues: [] }, { ...c, skipChecks: true });
          return d instanceof Promise ? d.then((h) => o(h, a, c)) : o(d, a, c);
        }
        const l = t._zod.parse(a, c);
        if (l instanceof Promise) {
          if (c.async === false) throw new xt();
          return l.then((d) => i(d, r, c));
        }
        return i(l, r, c);
      };
    }
  }, { get "~standard"() {
    return go(this, "~standard", Eo(this));
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  } }), xo = (t, e) => t.issues.length ? { issues: t.issues.map((s) => pt(s, e, Ge())) } : { value: t.value };
  async function zp(t, e) {
    const s = { async: true };
    return xo(await t._zod.run({ value: e, issues: [] }, s), s);
  }
  function Eo(t) {
    return { validate: (e) => {
      const s = { async: false };
      try {
        const n = t._zod.run({ value: e, issues: [] }, s);
        if (!(n instanceof Promise)) return xo(n, s);
      } catch (e2) {
      }
      return zp(t, e);
    }, vendor: "zod", version: 1 };
  }
  const wr = M("$ZodString", (t, e) => {
    var _a3;
    ie.init(t, e), t._zod.pattern = (_a3 = e.pattern) != null ? _a3 : ip, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = String(s.value);
      } catch (e2) {
      }
      return typeof s.value == "string" || s.issues.push({ expected: "string", code: "invalid_type", input: s.value, inst: t }), s;
    };
  }), ae = M("$ZodStringFormat", (t, e) => {
    Ys.init(t, e), wr.init(t, e);
  }), _p = M("$ZodGUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Bh, ae.init(t, e);
  }), jp = M("$ZodUUID", (t, e) => {
    var _a3, _b3;
    if (e.version) {
      const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e.version];
      if (n === void 0) throw new Error('Invalid UUID version: "'.concat(e.version, '"'));
      (_a3 = e.pattern) != null ? _a3 : e.pattern = $o(n);
    } else (_b3 = e.pattern) != null ? _b3 : e.pattern = $o();
    ae.init(t, e);
  }), xp = M("$ZodEmail", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Kh, ae.init(t, e);
  }), Ao = 1, Js = 2;
  function To(t) {
    try {
      return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), true);
    } catch (e) {
      return false;
    }
  }
  function Ep(t, e) {
    return !("normalize" in e) && !("hostname" in e) && !("protocol" in e) ? To(t) || Js : Ap(t, e);
  }
  function Ap(t, e) {
    var _a3, _b3;
    if (!e.normalize && ((_a3 = e.protocol) == null ? void 0 : _a3.source) === Xh.source && !/^https?:\/\//i.test(t)) return Ao;
    try {
      if (typeof URL < "u") {
        const s = URL;
        if (typeof s.parse == "function") return (_b3 = s.parse(t)) != null ? _b3 : Js;
      }
      return new URL(t);
    } catch (e2) {
      return Js;
    }
  }
  const Tp = /[\t\n\r]/g;
  function Io(t) {
    return t.replace(Tp, "");
  }
  function Ip(t, e) {
    return e.lastIndex = 0, e.test(t.hostname);
  }
  function Mp(t, e) {
    return e.lastIndex = 0, e.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
  }
  const Op = M("$ZodURL", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      try {
        const n = s.value.trim(), r = Ep(n, e);
        if (r === Ao) {
          s.issues.push({ code: "invalid_format", format: "url", note: "Invalid URL format", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (r === Js) {
          s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (r === true) {
          s.value = Io(n);
          return;
        }
        e.hostname && !Ip(r, e.hostname) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: e.hostname.source, input: s.value, inst: t, continue: !e.abort }), e.protocol && !Mp(r, e.protocol) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: e.protocol.source, input: s.value, inst: t, continue: !e.abort }), s.value = e.normalize ? r.href : Io(n);
        return;
      } catch (e2) {
        s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
      }
    };
  }), Np = M("$ZodEmoji", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Gh(), ae.init(t, e);
  }), Pp = M("$ZodNanoID", (t, e) => {
    var _a3;
    if (e.length !== void 0 && (!Number.isInteger(e.length) || e.length < 1)) throw new Error("Invalid nanoid length: ".concat(e.length));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = e.length === void 0 ? Zh : Uh(e.length), ae.init(t, e);
  }), Rp = M("$ZodCUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Ph, ae.init(t, e);
  }), Dp = M("$ZodCUID2", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Rh, ae.init(t, e);
  }), Lp = M("$ZodULID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Dh, ae.init(t, e);
  }), Cp = M("$ZodXID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Lh, ae.init(t, e);
  }), Zp = M("$ZodKSUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Ch, ae.init(t, e);
  }), Up = M("$ZodISODateTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = rp(e), ae.init(t, e);
  }), Fp = M("$ZodISODate", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = sp, ae.init(t, e);
  }), Bp = M("$ZodISOTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = np(e), ae.init(t, e);
  }), Kp = M("$ZodISODuration", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Fh, ae.init(t, e);
  }), qp = M("$ZodIPv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Wh, ae.init(t, e);
  }), Gp = /^[0-9a-fA-F:.]+$/;
  function Mo(t) {
    return Gp.test(t) ? To("http://[".concat(t, "]")) : false;
  }
  const Wp = M("$ZodIPv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Hh, ae.init(t, e), t._zod.check = (s) => {
      Mo(s.value) || s.issues.push({ code: "invalid_format", format: "ipv6", input: s.value, inst: t, continue: !e.abort });
    };
  }), Hp = M("$ZodCIDRv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Vh, ae.init(t, e);
  });
  function Vp(t) {
    const e = t.split("/");
    if (e.length !== 2) return false;
    const [s, n] = e;
    if (!n) return false;
    const r = Number(n);
    return "".concat(r) !== n || r < 0 || r > 128 ? false : Mo(s);
  }
  const Yp = M("$ZodCIDRv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Yh, ae.init(t, e), t._zod.check = (s) => {
      Vp(s.value) || s.issues.push({ code: "invalid_format", format: "cidrv6", input: s.value, inst: t, continue: !e.abort });
    };
  });
  function Oo(t) {
    if (t === "") return true;
    if (/\s/.test(t) || t.length % 4 !== 0) return false;
    try {
      return atob(t), true;
    } catch (e) {
      return false;
    }
  }
  const No = /^[0-9a-zA-Z+/]*={0,2}$/, Jp = M("$ZodBase64", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = No, ae.init(t, e), t._zod.check = (s) => {
      Oo(s.value) || s.issues.push({ code: "invalid_format", format: "base64", input: s.value, inst: t, continue: !e.abort });
    };
  }), yr = /^[A-Za-z0-9_-]*$/;
  function Qp(t) {
    if (!yr.test(t)) return false;
    const e = t.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), s = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
    return Oo(s);
  }
  const Xp = M("$ZodBase64URL", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = yr, ae.init(t, e), t._zod.check = (s) => {
      Qp(s.value) || s.issues.push({ code: "invalid_format", format: "base64url", input: s.value, inst: t, continue: !e.abort });
    };
  }), ef = M("$ZodE164", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = ep, ae.init(t, e);
  });
  function tf(t, e = null) {
    try {
      const s = t.split(".");
      if (s.length !== 3) return false;
      const [n] = s;
      if (!n) return false;
      const r = JSON.parse(atob(n));
      return !("typ" in r && (r == null ? void 0 : r.typ) !== "JWT" || !r.alg || e && (!("alg" in r) || r.alg !== e));
    } catch (e2) {
      return false;
    }
  }
  const sf = M("$ZodJWT", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      tf(s.value, e.alg) || s.issues.push({ code: "invalid_format", format: "jwt", input: s.value, inst: t, continue: !e.abort });
    };
  }), Po = M("$ZodNumber", (t, e) => {
    ie.init(t, e), t._zod.pattern = br, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = Number(s.value);
      } catch (e2) {
      }
      const r = s.value;
      if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r)) return s;
      const i = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : String(r) : void 0;
      return s.issues.push({ expected: "number", code: "invalid_type", input: r, inst: t, ...i ? { received: i } : {} }), s;
    };
  }), nf = M("$ZodNumberFormat", (t, e) => {
    up.init(t, e), Po.init(t, e);
  }), rf = M("$ZodBoolean", (t, e) => {
    ie.init(t, e), t._zod.pattern = ap, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = !!s.value;
      } catch (e2) {
      }
      const r = s.value;
      return typeof r == "boolean" || s.issues.push({ expected: "boolean", code: "invalid_type", input: r, inst: t }), s;
    };
  }), of = M("$ZodUnknown", (t, e) => {
    ie.init(t, e), t._zod.parse = (s) => s;
  }), af = M("$ZodNever", (t, e) => {
    ie.init(t, e), t._zod.parse = (s, n) => (s.issues.push({ expected: "never", code: "invalid_type", input: s.value, inst: t }), s);
  });
  function cf(t, e) {
    const s = mo(t._zod.def.checks);
    if (!s.length) return;
    const n = Math.min(...s.map((i) => i[0])), r = t._zod.parse;
    t._zod.parse = (i, o) => {
      const a = e(i.value);
      if (a > n && !(o == null ? void 0 : o.skipChecks) && (o == null ? void 0 : o.direction) !== "backward") {
        for (const [c, l] of mo(t._zod.def.checks)) if (a > c && l._zod.def.when(i)) {
          const d = i.issues.length;
          return l._zod.check(i), i.issues[d].continue = false, ar(i.issues, d, t), i;
        }
      }
      return r(i, o);
    };
  }
  const lf = (t) => Array.isArray(t) ? t.length : -1;
  function Ro(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  const df = M("$ZodArray", (t, e) => {
    ie.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, r) => {
      const i = n.value;
      if (!Array.isArray(i)) return n.issues.push({ expected: "array", code: "invalid_type", input: i, inst: t }), n;
      n.value = s ? s.alloc(t, n, Array(i.length), r) : Array(i.length);
      const o = [], a = r == null ? void 0 : r.abortEarly;
      for (let c = 0; c < i.length; c++) {
        const l = i[c], d = e.element._zod.run({ value: l, issues: [] }, r);
        if (d instanceof Promise) o.push(d.then((h) => Ro(h, n, c)));
        else if (Ro(d, n, c), a && d.issues.length !== 0 && Fe(d)) break;
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }, cf(t, lf);
  });
  function Qs(t, e, s, n, r, i) {
    const o = s in n, a = i === "optional";
    if (!(!o && a && r === "optional")) {
      if (t.issues.length) {
        if (r !== void 0 && a && !o) return;
        e.issues.push(...ht(s, t.issues));
      }
      if (!o && r === void 0) {
        t.issues.length || e.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [s] });
        return;
      }
      t.value === void 0 ? (o || r === "defaulted" && !a) && (e.value[s] = void 0) : e.value[s] = t.value;
    }
  }
  const uf = [];
  function Do(t) {
    var _a3, _b3, _c2, _d2;
    const e = Object.keys(t.shape), s = Object.getOwnPropertySymbols(t.shape), n = s.length ? s : uf, r = n.length ? [...e, ...n] : e;
    for (const o of r) if (!((_d2 = (_c2 = (_b3 = (_a3 = t.shape) == null ? void 0 : _a3[o]) == null ? void 0 : _b3._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error('Invalid element at key "'.concat(String(o), '": expected a Zod schema'));
    const i = Yu(t.shape);
    return { ...t, allKeys: r, symbolKeys: n, keySet: new Set(e), numKeys: e.length, optionalKeys: new Set(i) };
  }
  function Lo(t, e, s, n, r, i, o) {
    const a = [], c = r.keySet, l = r.catchall._zod, d = l.def.type, h = l.optin, p = l.optout;
    let f = 0;
    for (const m in e) {
      if (o && s.issues.length !== f) {
        if (Fe(s, f)) break;
        f = s.issues.length;
      }
      if (c.has(m)) continue;
      if (m === "__proto__") {
        d === "never" && a.push(m);
        continue;
      }
      if (d === "never") {
        a.push(m);
        continue;
      }
      const g = l.run({ value: e[m], issues: [] }, n);
      g instanceof Promise ? t.push(g.then((k) => Qs(k, s, m, e, h, p))) : Qs(g, s, m, e, h, p);
    }
    return a.length && s.issues.push({ code: "unrecognized_keys", keys: a, input: e, inst: i, continue: true }), t.length ? Promise.all(t).then(() => s) : s;
  }
  const hf = M("$ZodObject", (t, e) => {
    var _a3;
    ie.init(t, e);
    const s = Object.getOwnPropertyDescriptor(e, "shape"), n = (s == null ? void 0 : s.get) ? s.get.raw : (_a3 = e.shape) != null ? _a3 : {};
    if (n) {
      const l = () => {
        const d = { ...n };
        return Object.defineProperty(e, "shape", { value: d }), l.raw = d, d;
      };
      l.raw = n, Object.defineProperty(e, "shape", { get: l });
    }
    const r = Gs(() => Do(e));
    X(t, "propValues", (l) => {
      const d = l.def.shape, h = {};
      for (const p in d) {
        const f = d[p]._zod;
        if (f.values) {
          Object.prototype.hasOwnProperty.call(h, p) || Qe(h, p, /* @__PURE__ */ new Set());
          for (const m of f.values) h[p].add(m);
          f.optin !== void 0 && h[p].add(void 0);
        }
      }
      return h;
    });
    const i = os, o = e.catchall;
    let a;
    const c = Me.memoizer;
    c == null ? void 0 : c.attach(t), t._zod.parse = (l, d) => {
      a != null ? a : a = r.value;
      const h = l.value;
      if (!i(h)) return l.issues.push({ expected: "object", code: "invalid_type", input: h, inst: t }), l;
      l.value = c ? c.alloc(t, l, {}, d) : {};
      const p = [], f = a.shape, m = d == null ? void 0 : d.abortEarly;
      let g = l.issues.length;
      for (const k of a.allKeys) {
        if (m && l.issues.length !== g) {
          if (Fe(l, g)) break;
          g = l.issues.length;
        }
        if (k === "__proto__") continue;
        const b = f[k], v = b._zod.optin, w = b._zod.optout, y = b._zod.run({ value: h[k], issues: [] }, d);
        y instanceof Promise ? p.push(y.then(($) => Qs($, l, k, h, v, w))) : Qs(y, l, k, h, v, w);
      }
      return o ? Lo(p, h, l, d, r.value, t, m === true) : p.length ? Promise.all(p).then(() => l) : l;
    };
  }), pf = M("$ZodObjectJIT", (t, e) => {
    hf.init(t, e);
    const s = t._zod.parse, n = Gs(() => Do(e)), r = Me.memoizer, i = (f) => {
      var _a3, _b3;
      const m = n.value, g = m.symbolKeys, k = new Sp(["payload", "ctx"], { shape: f, inst: t, memo: r, syms: g }), b = ($) => "shape[".concat($, "]._zod.run({ value: input[").concat($, "], issues: [] }, ctx)"), v = ($, x) => "\n          let ".concat($, "_ab = false;\n          for (let i = 0; i < ").concat($, ".issues.length; i++) {\n            const iss = ").concat($, ".issues[i];\n            iss.path = iss.path ? [").concat(x, ", ...iss.path] : [").concat(x, "];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ").concat($, "_ab = true;\n          }\n          if (").concat($, "_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }");
      k.write("const input = payload.value;");
      const w = /* @__PURE__ */ Object.create(null);
      let y = 0;
      for (const $ of m.allKeys) w[$] = "key_".concat(y++);
      k.write(r ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
      for (const $ of m.allKeys) {
        if ($ === "__proto__") continue;
        const x = w[$], z = typeof $ == "symbol" ? "syms[".concat(g.indexOf($), "]") : Gu($), _ = "".concat(z, " in input"), O = f[$], R = (_a3 = O == null ? void 0 : O._zod) == null ? void 0 : _a3.optin, S = R !== void 0, A = ((_b3 = O == null ? void 0 : O._zod) == null ? void 0 : _b3.optout) === "optional";
        if (k.write("const ".concat(x, " = ").concat(b(z), ";")), S && A) {
          const j = R === "optional" ? "".concat(x, "_present") : "".concat(x, ".value !== undefined || ").concat(x, "_present");
          k.write("\n        const ".concat(x, "_present = ").concat(_, ";\n        if (!").concat(x, ".issues.length || ").concat(x, "_present) {\n          if (").concat(x, ".issues.length) {").concat(v(x, z), "\n          }\n\n          if (").concat(j, ") {\n            newResult[").concat(z, "] = ").concat(x, ".value;\n          }\n        }\n\n      "));
        } else S ? (k.write("\n        if (".concat(x, ".issues.length) {").concat(v(x, z), "\n        }\n      ")), R === "defaulted" ? k.write("newResult[".concat(z, "] = ").concat(x, ".value;")) : k.write("\n        if (".concat(x, ".value !== undefined || ").concat(_, ") {\n          newResult[").concat(z, "] = ").concat(x, ".value;\n        }\n      "))) : k.write("\n        const ".concat(x, "_present = ").concat(_, ";\n        if (").concat(x, ".issues.length) {").concat(v(x, z), "\n        }\n        if (!").concat(x, "_present && !").concat(x, '.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [').concat(z, "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (").concat(x, "_present) {\n          newResult[").concat(z, "] = ").concat(x, ".value;\n        }\n\n      "));
      }
      return k.write("payload.value = newResult;"), k.write("return payload;"), k.compile();
    };
    let o;
    const a = os, c = !Me.jitless, d = c && Hu.value, h = e.catchall;
    let p;
    t._zod.parse = (f, m) => {
      p != null ? p : p = n.value;
      const g = f.value;
      return a(g) ? c && d && (m == null ? void 0 : m.async) === false && m.jitless !== true ? (o || (o = i(e.shape)), f = o(f, m), h ? Lo([], g, f, m, p, t, (m == null ? void 0 : m.abortEarly) === true) : f) : s(f, m) : (f.issues.push({ expected: "object", code: "invalid_type", input: g, inst: t }), f);
    };
  });
  function Co(t, e, s, n) {
    for (const i of t) if (i.issues.length === 0) return e.value = i.value, e;
    const r = t.filter((i) => !Fe(i));
    return r.length === 1 ? (e.value = r[0].value, r[0]) : (e.issues.push({ code: "invalid_union", input: e.value, inst: s, errors: t.map((i) => i.issues.map((o) => pt(o, n, Ge()))) }), e);
  }
  const Zo = M("$ZodUnion", (t, e) => {
    ie.init(t, e), X(t, "optin", (n) => n.def.options.some((r) => r._zod.optin === "defaulted") ? "defaulted" : n.def.options.some((r) => r._zod.optin !== void 0) ? "optional" : void 0), X(t, "optout", (n) => n.def.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), X(t, "values", (n) => {
      if (n.def.options.every((r) => r._zod.values)) return new Set(n.def.options.flatMap((r) => Array.from(r._zod.values)));
    }), X(t, "pattern", (n) => {
      if (n.def.options.every((r) => r._zod.pattern)) {
        const r = n.def.options.map((i) => i._zod.pattern);
        return new RegExp("^(".concat(r.map((i) => ir(i.source)).join("|"), ")$"));
      }
    });
    const s = e.options.length === 1 ? e.options[0]._zod.run : null;
    t._zod.parse = (n, r) => {
      if (s) return s(n, r);
      let i = false;
      const o = [];
      for (const a of e.options) {
        const c = a._zod.run({ value: n.value, issues: [] }, r);
        if (c instanceof Promise) o.push(c), i = true;
        else {
          if (c.issues.length === 0) return c;
          o.push(c);
        }
      }
      return i ? Promise.all(o).then((a) => Co(a, n, t, r)) : Co(o, n, t, r);
    };
  });
  function ff(t) {
    var _a3;
    const e = /* @__PURE__ */ new Map();
    for (const s of t.options) {
      const n = (_a3 = s._zod.propValues) == null ? void 0 : _a3[t.discriminator];
      if (!n || n.size === 0) throw new Error('Invalid discriminated union option at index "'.concat(t.options.indexOf(s), '"'));
      for (const r of n) if (e.has(r)) {
        if (r !== void 0) throw new Error('Duplicate discriminator value "'.concat(String(r), '"'));
        e.set(r, null);
      } else e.set(r, s);
    }
    return e;
  }
  const mf = M("$ZodDiscriminatedUnion", (t, e) => {
    e.inclusive = false, Zo.init(t, e);
    const s = t._zod.parse;
    X(t, "propValues", (r) => {
      var _a3, _b3;
      const i = {};
      let o = 0;
      for (const a of r.def.options) {
        const c = a._zod.propValues;
        if (!c || Object.keys(c).length === 0) throw new Error('Invalid discriminated union option at index "'.concat(r.def.options.indexOf(a), '"'));
        ((_a3 = c[r.def.discriminator]) == null ? void 0 : _a3.has(void 0)) && o++;
        for (const [l, d] of Object.entries(c)) {
          Object.prototype.hasOwnProperty.call(i, l) || Qe(i, l, /* @__PURE__ */ new Set());
          for (const h of d) i[l].add(h);
        }
      }
      return !r.def.unionFallback && o > 1 && ((_b3 = i[r.def.discriminator]) == null ? void 0 : _b3.delete(void 0)), i;
    }), e.options.forEach((r, i) => {
      const o = or(r._zod.def);
      if (o && !Object.prototype.hasOwnProperty.call(o, e.discriminator)) throw new Error('Invalid discriminated union option at index "'.concat(i, '"'));
    });
    const n = Gs(() => ff(e));
    t._zod.parse = (r, i) => {
      const o = r.value;
      if (!os(o)) return r.issues.push({ code: "invalid_type", expected: "object", input: o, inst: t }), r;
      const a = o == null ? void 0 : o[e.discriminator], c = n.value.get(a);
      return c && (a !== void 0 || i.direction !== "backward") ? c._zod.run(r, i) : e.unionFallback || i.direction === "backward" ? s(r, i) : (r.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: e.discriminator, options: Array.from(n.value.keys()).filter((l) => n.value.get(l) !== null), input: o, path: [e.discriminator], inst: t }), r);
    };
  }), gf = M("$ZodIntersection", (t, e) => {
    ie.init(t, e), t._zod.parse = (s, n) => {
      const r = s.value, i = e.left._zod.run({ value: r, issues: [] }, n), o = e.right._zod.run({ value: r, issues: [] }, n);
      return i instanceof Promise || o instanceof Promise ? Promise.all([i, o]).then(([c, l]) => Uo(s, c, l)) : Uo(s, i, o);
    };
  });
  function Sr(t, e) {
    if (t === e) return { valid: true, data: t };
    if (t instanceof Date && e instanceof Date && +t == +e) return { valid: true, data: t };
    if (Ct(t) && Ct(e)) {
      const s = Object.keys(e), n = Object.keys(t).filter((i) => s.indexOf(i) !== -1), r = { ...t, ...e };
      Object.prototype.hasOwnProperty.call(r, "__proto__") && delete r.__proto__;
      for (const i of n) {
        if (i === "__proto__") continue;
        const o = Sr(t[i], e[i]);
        if (!o.valid) return { valid: false, mergeErrorPath: [i, ...o.mergeErrorPath] };
        r[i] = o.data;
      }
      return { valid: true, data: r };
    }
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length) return { valid: false, mergeErrorPath: [] };
      const s = [];
      for (let n = 0; n < t.length; n++) {
        const r = t[n], i = e[n], o = Sr(r, i);
        if (!o.valid) return { valid: false, mergeErrorPath: [n, ...o.mergeErrorPath] };
        s.push(o.data);
      }
      return { valid: true, data: s };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function Uo(t, e, s) {
    const n = /* @__PURE__ */ new Map();
    let r;
    const i = /* @__PURE__ */ new Map(), o = (l, d) => {
      var _a3, _b3;
      let h;
      if (l.code === "unrecognized_keys" && !((_a3 = l.path) == null ? void 0 : _a3.length)) r != null ? r : r = l, h = l.keys;
      else if (l.code === "invalid_key" && l.origin === "record" && ((_b3 = l.path) == null ? void 0 : _b3.length) === 1) {
        const p = String(l.path[0]);
        i.has(p) || i.set(p, l), h = [p];
      } else return false;
      for (const p of h) n.has(p) || n.set(p, {}), n.get(p)[d] = true;
      return true;
    };
    for (const l of e.issues) o(l, "l") || t.issues.push(l);
    for (const l of s.issues) o(l, "r") || t.issues.push(l);
    const a = [...n].filter(([, l]) => l.l && l.r).map(([l]) => l);
    if (a.length) {
      const l = r ? a.filter((d) => r.keys.includes(d)) : [];
      l.length && t.issues.push({ ...r, keys: l });
      for (const d of a) !l.includes(d) && i.has(d) && t.issues.push(i.get(d));
    }
    const c = Sr(e.value, s.value);
    if (!c.valid) {
      if (Fe(t)) return t;
      throw new Error("Unmergable intersection. Error path: ".concat(JSON.stringify(c.mergeErrorPath)));
    }
    return t.value = c.data, t;
  }
  const kf = M("$ZodTuple", (t, e) => {
    ie.init(t, e);
    const s = e.items, n = Me.memoizer;
    n == null ? void 0 : n.attach(t), t._zod.parse = (r, i) => {
      const o = r.value;
      if (!Array.isArray(o)) return r.issues.push({ input: o, inst: t, expected: "tuple", code: "invalid_type" }), r;
      r.value = n ? n.alloc(t, r, [], i) : [];
      const a = [], c = Fo(s, "optin"), l = Fo(s, "optout");
      if (!e.rest) {
        if (o.length < c) return r.issues.push({ code: "too_small", minimum: c, inclusive: true, input: o, inst: t, origin: "array" }), r;
        o.length > s.length && r.issues.push({ code: "too_big", maximum: s.length, inclusive: true, input: o, inst: t, origin: "array" });
      }
      const d = new Array(s.length), h = e.rest ? i == null ? void 0 : i.abortEarly : void 0;
      let p = false;
      for (let f = 0; f < s.length; f++) {
        const m = s[f]._zod.run({ value: o[f], issues: [] }, i);
        m instanceof Promise ? a.push(m.then((g) => {
          d[f] = g;
        })) : (d[f] = m, h && !p && m.issues.length && (p = Fe(m)));
      }
      if (e.rest && !p) {
        let f = s.length - 1;
        const m = o.slice(s.length);
        let g = r.issues.length;
        for (const k of m) {
          if (h && r.issues.length !== g) {
            if (Fe(r, g)) break;
            g = r.issues.length;
          }
          f++;
          const b = e.rest._zod.run({ value: k, issues: [] }, i);
          b instanceof Promise ? a.push(b.then((v) => Bo(v, r, f))) : Bo(b, r, f);
        }
      }
      return a.length ? Promise.all(a).then(() => Ko(d, r, s, o, l)) : Ko(d, r, s, o, l);
    };
  });
  function Fo(t, e) {
    for (let s = t.length - 1; s >= 0; s--) if (!(e === "optin" ? t[s]._zod.optin !== void 0 : t[s]._zod.optout === "optional")) return s + 1;
    return 0;
  }
  function Bo(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  function Ko(t, e, s, n, r) {
    for (let i = 0; i < s.length; i++) {
      const o = t[i], a = i < n.length;
      if (!a && i >= r && s[i]._zod.optin === "optional") {
        e.value.length = i;
        break;
      }
      if (o.issues.length) {
        if (!a && i >= r) {
          e.value.length = i;
          break;
        }
        e.issues.push(...ht(i, o.issues));
      }
      e.value[i] = o.value;
    }
    for (let i = e.value.length - 1; i >= n.length && (s[i]._zod.optout === "optional" && e.value[i] === void 0); i--) e.value.length = i;
    return e;
  }
  const bf = M("$ZodRecord", (t, e) => {
    ie.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, r) => {
      const i = n.value;
      if (!Ct(i)) return n.issues.push({ expected: "record", code: "invalid_type", input: i, inst: t }), n;
      const o = [], a = e.keyType._zod.values;
      if (a && !e.partial) {
        n.value = s ? s.alloc(t, n, {}, r) : {};
        const c = /* @__PURE__ */ new Set();
        for (const d of a) if (typeof d == "string" || typeof d == "number" || typeof d == "symbol") {
          if (c.add(typeof d == "number" ? d.toString() : d), d === "__proto__") continue;
          const h = e.keyType._zod.run({ value: d, issues: [] }, r);
          if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (h.issues.length) {
            n.issues.push({ code: "invalid_key", origin: "record", issues: h.issues.map((m) => pt(m, r, Ge())), input: d, path: [d], inst: t });
            continue;
          }
          const p = h.value;
          if (p === "__proto__") continue;
          const f = e.valueType._zod.run({ value: i[d], issues: [] }, r);
          f instanceof Promise ? o.push(f.then((m) => {
            m.issues.length && n.issues.push(...ht(d, m.issues)), n.value[p] = m.value;
          })) : (f.issues.length && n.issues.push(...ht(d, f.issues)), n.value[p] = f.value);
        }
        let l;
        for (const d in i) if (!c.has(d)) if (e.mode === "loose") {
          if (d === "__proto__") continue;
          n.value[d] = i[d];
        } else l = l != null ? l : [], l.push(d);
        l && l.length > 0 && n.issues.push({ code: "unrecognized_keys", input: i, inst: t, keys: l, continue: true });
      } else {
        n.value = s ? s.alloc(t, n, {}, r) : {};
        let c;
        for (const l of Reflect.ownKeys(i)) {
          if (l === "__proto__" || !Object.prototype.propertyIsEnumerable.call(i, l)) continue;
          let d = e.keyType._zod.run({ value: l, issues: [] }, r);
          if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof l == "string" && br.test(l) && d.issues.length) {
            const m = e.keyType._zod.run({ value: Number(l), issues: [] }, r);
            if (m instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            m.issues.length === 0 && (d = m);
          }
          if (d.issues.length) {
            e.mode === "loose" ? n.value[l] = i[l] : a ? (c = c != null ? c : [], c.push(l)) : n.issues.push({ code: "invalid_key", origin: "record", issues: d.issues.map((m) => pt(m, r, Ge())), input: l, path: [l], inst: t });
            continue;
          }
          const p = d.value;
          if (p === "__proto__") continue;
          const f = e.valueType._zod.run({ value: i[l], issues: [] }, r);
          f instanceof Promise ? o.push(f.then((m) => {
            m.issues.length && n.issues.push(...ht(l, m.issues)), n.value[p] = m.value;
          })) : (f.issues.length && n.issues.push(...ht(l, f.issues)), n.value[p] = f.value);
        }
        c && c.length > 0 && n.issues.push({ code: "unrecognized_keys", input: i, inst: t, keys: c, continue: true });
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    };
  }), vf = M("$ZodEnum", (t, e) => {
    ie.init(t, e);
    const s = nr(e.entries), n = new Set(s);
    t._zod.values = n, X(t, "pattern", (r) => {
      const i = nr(r.def.entries).filter((o) => Vu.has(typeof o));
      return new RegExp(i.length ? "^(".concat(i.map((o) => Zt(o.toString())).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (r, i) => {
      const o = r.value;
      return n.has(o) || r.issues.push({ code: "invalid_value", values: s, input: o, inst: t }), r;
    };
  }), wf = M("$ZodLiteral", (t, e) => {
    ie.init(t, e);
    const s = new Set(e.values);
    t._zod.values = s, X(t, "pattern", (n) => {
      const r = n.def.values;
      return new RegExp(r.length ? "^(".concat(r.map((i) => typeof i == "string" ? Zt(i) : i ? Zt(i.toString()) : String(i)).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (n, r) => {
      const i = n.value;
      return s.has(i) || n.issues.push({ code: "invalid_value", values: e.values, input: i, inst: t }), n;
    };
  }), yf = M("$ZodTransform", (t, e) => {
    var _a3;
    ie.init(t, e), t._zod.optin = "optional", (_a3 = Me.memoizer) == null ? void 0 : _a3.guard(t), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new wo(t.constructor.name);
      const r = e.transform(s.value, s);
      if (n.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((o) => (s.value = o, s));
      if (r instanceof Promise) throw new xt();
      return s.value = r, s;
    };
  });
  function qo(t, e) {
    return t.value = e.issues.length ? void 0 : e.value, t;
  }
  const Go = M("$ZodOptional", (t, e) => {
    ie.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? /* @__PURE__ */ new Set([...n, void 0]) : void 0;
    }), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(ir(n.source), ")?$")) : void 0;
    }), t._zod.parse = (s, n) => {
      if (s.value === void 0) {
        if (e.innerType._zod.optin !== "defaulted") return s;
        const r = e.innerType._zod.run({ value: s.value, issues: [] }, n);
        return r instanceof Promise ? r.then((i) => qo(s, i)) : qo(s, r);
      }
      return e.innerType._zod.run(s, n);
    };
  }), Sf = M("$ZodExactOptional", (t, e) => {
    Go.init(t, e), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "pattern", (s) => s.def.innerType._zod.pattern), t._zod.parse = (s, n) => e.innerType._zod.run(s, n);
  }), $f = M("$ZodNullable", (t, e) => {
    ie.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(ir(n.source), "|null)$")) : void 0;
    }), X(t, "values", (s) => s.def.innerType._zod.values ? /* @__PURE__ */ new Set([...s.def.innerType._zod.values, null]) : void 0), t._zod.parse = (s, n) => s.value === null ? s : e.innerType._zod.run(s, n);
  }), zf = M("$ZodDefault", (t, e) => {
    ie.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      if (s.value === void 0) return s.value = e.defaultValue, s;
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => Wo(i, e)) : Wo(r, e);
    };
  });
  function Wo(t, e) {
    return t.value === void 0 && (t.value = e.defaultValue), t;
  }
  const _f = M("$ZodPrefault", (t, e) => {
    ie.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => (n.direction === "backward" || s.value === void 0 && (s.value = e.defaultValue), e.innerType._zod.run(s, n));
  }), jf = M("$ZodNonOptional", (t, e) => {
    ie.init(t, e), X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
    }), t._zod.parse = (s, n) => {
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => Ho(i, t)) : Ho(r, t);
    };
  });
  function Ho(t, e) {
    return !t.issues.length && t.value === void 0 && t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: e }), t;
  }
  function Vo(t, e, s, n) {
    return e.issues.length ? (t.value = s.catchValue({ ...e, value: t.value, error: { issues: e.issues.map((r) => pt(r, n, Ge())) }, input: t.value }), t) : (t.value = e.value, e.memo && (t.memo = true), t);
  }
  const xf = M("$ZodCatch", (t, e) => {
    ie.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const r = e.innerType._zod.run({ value: s.value, issues: [] }, n);
      return r instanceof Promise ? r.then((i) => Vo(s, i, e, n)) : Vo(s, r, e, n);
    };
  }), Yo = M("$ZodPipe", (t, e) => {
    ie.init(t, e), X(t, "values", (s) => s.def.in._zod.values), X(t, "optin", (s) => s.def.in._zod.optin), X(t, "optout", (s) => s.def.out._zod.optout), X(t, "propValues", (s) => s.def.in._zod.propValues), t._zod.parse = (s, n) => {
      if (n.direction === "backward") {
        const i = e.out._zod.run(s, n);
        return i instanceof Promise ? i.then((o) => Xs(o, e.in, n)) : Xs(i, e.in, n);
      }
      const r = e.in._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => Xs(i, e.out, n)) : Xs(r, e.out, n);
    };
  });
  function Xs(t, e, s) {
    return t.issues.some((n) => n.code !== "unrecognized_keys") ? (t.aborted = true, t) : e._zod.run({ value: t.value, issues: t.issues }, s);
  }
  const Ef = M("$ZodPreprocess", (t, e) => {
    Yo.init(t, e);
  }), Af = M("$ZodReadonly", (t, e) => {
    ie.init(t, e), X(t, "propValues", (s) => s.def.innerType._zod.propValues), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "optin", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), X(t, "optout", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then(Jo) : Jo(r);
    };
  });
  function Jo(t) {
    return t.memo || (t.value = Object.freeze(t.value)), t;
  }
  const Tf = M("$ZodLazy", (t, e) => {
    ie.init(t, e), Ku(t._zod, "innerType", () => {
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
  }), If = M("$ZodCustom", (t, e) => {
    ze.init(t, e), ie.init(t, e), t._zod.parse = (s, n) => s, t._zod.check = (s) => {
      const n = s.value, r = e.fn(n);
      if (r instanceof Promise) return r.then((i) => Qo(i, s, n, t));
      Qo(r, s, n, t);
    };
  });
  function Qo(t, e, s, n) {
    var _a3;
    if (!t) {
      const r = { code: "custom", input: s, inst: n, path: [...(_a3 = n._zod.def.path) != null ? _a3 : []], continue: !n._zod.def.abort };
      n._zod.def.params && (r.params = n._zod.def.params), e.issues.push(cs(r));
    }
  }
  class Mf extends Error {
    constructor() {
      super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
    }
  }
  const $r = "~memo", Xo = [];
  function ea(t) {
    return t !== null && typeof t == "object";
  }
  function zr(t) {
    return t.map((e) => e.path ? { ...e, path: e.path.slice() } : { ...e });
  }
  const ta = /* @__PURE__ */ new WeakMap(), ls = 0, en = 1, ds = 2;
  function tn(t, e, s) {
    var _a3;
    const n = ta.get(t);
    if (n !== void 0) return n ? ds : ls;
    if (e.has(t)) return ds;
    e.add(t);
    let r = ls;
    const i = (d) => {
      if (r !== ds && (d == null ? void 0 : d._zod)) {
        const h = tn(d, e);
        h > r && (r = h);
      }
    }, o = (d, h) => {
      var _a4;
      let p = ls;
      for (const f of Reflect.ownKeys(d)) {
        const m = Object.getOwnPropertyDescriptor(d, f);
        if (!m.enumerable) continue;
        const g = m.get ? en : ((_a4 = m.value) == null ? void 0 : _a4._zod) ? tn(m.value, e) : ls;
        g > p && (p = g);
      }
      return p;
    }, a = (d) => {
      d > r && (r = d);
    }, c = t._zod.def;
    switch (c.type) {
      case "object": {
        const d = or(c);
        a(d ? o(d) : en), i(c.catchall);
        break;
      }
      case "array":
        i(c.element);
        break;
      case "tuple":
        for (const d of c.items) i(d);
        i(c.rest);
        break;
      case "record":
      case "map":
        i(c.keyType), i(c.valueType);
        break;
      case "set":
        i(c.valueType);
        break;
      case "union":
        for (const d of c.options) i(d);
        break;
      case "intersection":
        i(c.left), i(c.right);
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
        i(c.innerType);
        break;
      case "pipe":
        i(c.in), i(c.out);
        break;
      case "function":
        i(c.input), i(c.output);
        break;
      case "lazy": {
        const d = (_a3 = c._cachedInner) != null ? _a3 : void 0;
        a(d ? tn(d, e) : en);
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
        for (const d in c) {
          const h = Object.getOwnPropertyDescriptor(c, d);
          if (!h || h.get) continue;
          const p = h.value;
          if (!(!p || typeof p != "object")) {
            if (p._zod) i(p);
            else if (Array.isArray(p)) for (const f of p) i(f);
          }
        }
    }
    return e.delete(t), Of(t, r);
  }
  function Of(t, e) {
    return e !== en && ta.set(t, e === ds), e;
  }
  function Nf(t, e) {
    let s = t.buckets.get(e);
    return s || (s = /* @__PURE__ */ new WeakMap(), t.buckets.set(e, s)), s;
  }
  let sn;
  const nn = [], Pf = { alloc(t, e, s) {
    const n = sn;
    if (!n) return s;
    sn = void 0;
    const r = { value: s, issues: null };
    return n.set(e.value, r), nn.push(r), s;
  }, guard(t) {
    var _a3;
    var e;
    (_a3 = (e = t._zod).deferred) != null ? _a3 : e.deferred = [], t._zod.deferred.push(() => {
      const s = t._zod.parse, n = (r, i) => {
        if (i.direction !== "backward" && Df(i, r.value)) throw new Mf();
        return s(r, i);
      };
      t._zod.parse = n, t._zod.run === s && (t._zod.run = n);
    });
  }, attach(t) {
    var _a3;
    var e;
    let s, n = false, r, i;
    (_a3 = (e = t._zod).deferred) != null ? _a3 : e.deferred = [], t._zod.deferred.push(() => {
      const o = t._zod.parse, a = (c, l) => {
        var _a4;
        if (s === void 0) {
          const b = tn(t, /* @__PURE__ */ new Set());
          if (b === ls) return t._zod.parse = o, t._zod.run === a && (t._zod.run = o), o(c, l);
          b === ds || n ? s = true : n = true;
        }
        const d = c.value;
        if (!ea(d)) return o(c, l);
        let h = l[$r];
        h || (h = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, l[$r] = h);
        let p;
        r === l ? p = i : (p = Nf(h, t), r = l, i = p);
        const f = p.get(d);
        if (f) return c.value = f.value, f.issues ? f.issues.length && c.issues.push(...zr(f.issues)) : (c.memo = true, (_a4 = h.backEdges) != null ? _a4 : h.backEdges = /* @__PURE__ */ new WeakSet(), h.backEdges.add(f.value)), c;
        sn = p;
        const m = nn.length, g = o(c, l);
        sn = void 0;
        const k = nn.length > m ? nn.pop() : void 0;
        return g instanceof Promise ? g.then((b) => (k && (k.issues = b.issues.length ? zr(b.issues) : Xo), b)) : (k && (k.issues = g.issues.length ? zr(g.issues) : Xo), g);
      };
      t._zod.parse = a, t._zod.run === o && (t._zod.run = a);
    });
  } };
  function Rf() {
    return Pf;
  }
  function Df(t, e) {
    var _a3;
    const s = (_a3 = t[$r]) == null ? void 0 : _a3.backEdges;
    return s !== void 0 && ea(e) && s.has(e);
  }
  const Lf = () => {
    const t = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
    function e(i) {
      var _a3;
      return (_a3 = t[i]) != null ? _a3 : null;
    }
    const s = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", currency_code: "currency code", credit_card: "credit card number", iban: "IBAN", jwt: "JWT", template_literal: "input" }, n = { nan: "NaN" };
    function r(i, o) {
      var _a3;
      return i === "number" && typeof o == "number" && !Number.isFinite(o) ? String(o) : (_a3 = n[i]) != null ? _a3 : i;
    }
    return (i) => {
      var _a3, _b3, _c2, _d2;
      switch (i.code) {
        case "invalid_type": {
          const o = r(i.expected), a = oh(i.input), c = r(a, i.input);
          return "Invalid input: expected ".concat(o, ", received ").concat(c);
        }
        case "invalid_value":
          return i.values.length === 1 ? "Invalid input: expected ".concat(uo(i.values[0])) : "Invalid option: expected one of ".concat(ro(i.values, "|"));
        case "too_big": {
          const o = i.exact ? "exactly " : i.inclusive ? "<=" : "<", a = e(i.origin);
          return a ? "Too big: expected ".concat((_a3 = i.origin) != null ? _a3 : "value", " to have ").concat(o).concat(i.maximum.toString(), " ").concat((_b3 = a.unit) != null ? _b3 : "elements") : "Too big: expected ".concat((_c2 = i.origin) != null ? _c2 : "value", " to be ").concat(o).concat(i.maximum.toString());
        }
        case "too_small": {
          const o = i.exact ? "exactly " : i.inclusive ? ">=" : ">", a = e(i.origin);
          return a ? "Too small: expected ".concat(i.origin, " to have ").concat(o).concat(i.minimum.toString(), " ").concat(a.unit) : "Too small: expected ".concat(i.origin, " to be ").concat(o).concat(i.minimum.toString());
        }
        case "invalid_format": {
          const o = i;
          return o.format === "starts_with" ? 'Invalid string: must start with "'.concat(o.prefix, '"') : o.format === "ends_with" ? 'Invalid string: must end with "'.concat(o.suffix, '"') : o.format === "includes" ? 'Invalid string: must include "'.concat(o.includes, '"') : o.format === "regex" ? "Invalid string: must match pattern ".concat(o.pattern) : "Invalid ".concat((_d2 = s[o.format]) != null ? _d2 : i.format);
        }
        case "not_multiple_of":
          return "Invalid number: must be a multiple of ".concat(i.divisor);
        case "unrecognized_keys":
          return "Unrecognized key".concat(i.keys.length > 1 ? "s" : "", ": ").concat(ro(i.keys, ", "));
        case "invalid_key":
          return "Invalid key in ".concat(i.origin);
        case "invalid_union":
          return i.options && Array.isArray(i.options) && i.options.length > 0 ? "Invalid discriminator value. Expected ".concat(i.options.map((a) => "'".concat(a, "'")).join(" | ")) : i.inclusive === false ? "Invalid input: more than one option matched" : "Invalid input";
        case "invalid_element":
          return "Invalid value in ".concat(i.origin);
        default:
          return "Invalid input";
      }
    };
  };
  function Cf() {
    return { localeError: Lf() };
  }
  var sa;
  class Zf {
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
        const r = { ...n, ...this._map.get(e) };
        return Object.keys(r).length ? r : void 0;
      }
      return this._map.get(e);
    }
    has(e) {
      return this._map.has(e);
    }
  }
  function Uf() {
    return new Zf();
  }
  (_b2 = (sa = globalThis).__zod_globalRegistry) != null ? _b2 : sa.__zod_globalRegistry = Uf();
  const us = globalThis.__zod_globalRegistry;
  function na(t) {
    return t.checks && (t.checks = [...t.checks]), t;
  }
  function Ff(t, e) {
    return new t(na({ type: "string", ...q(e) }));
  }
  function Bf(t, e) {
    return new t({ type: "string", format: "email", check: "string_format", abort: false, ...q(e) });
  }
  function Kf(t, e) {
    return new t({ type: "string", format: "guid", check: "string_format", abort: false, ...q(e) });
  }
  function qf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, ...q(e) });
  }
  function Gf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...q(e) });
  }
  function Wf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...q(e) });
  }
  function Hf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...q(e) });
  }
  function ra(t, e) {
    return new t({ type: "string", format: "url", check: "string_format", abort: false, ...q(e) });
  }
  function Vf(t, e) {
    return new t({ type: "string", format: "emoji", check: "string_format", abort: false, ...q(e) });
  }
  function Yf(t, e) {
    return new t({ type: "string", format: "nanoid", check: "string_format", abort: false, ...q(e) });
  }
  function Jf(t, e) {
    return new t({ type: "string", format: "cuid", check: "string_format", abort: false, ...q(e) });
  }
  function Qf(t, e) {
    return new t({ type: "string", format: "cuid2", check: "string_format", abort: false, ...q(e) });
  }
  function Xf(t, e) {
    return new t({ type: "string", format: "ulid", check: "string_format", abort: false, ...q(e) });
  }
  function em(t, e) {
    return new t({ type: "string", format: "xid", check: "string_format", abort: false, ...q(e) });
  }
  function tm(t, e) {
    return new t({ type: "string", format: "ksuid", check: "string_format", abort: false, ...q(e) });
  }
  function sm(t, e) {
    return new t({ type: "string", format: "ipv4", check: "string_format", abort: false, ...q(e) });
  }
  function nm(t, e) {
    return new t({ type: "string", format: "ipv6", check: "string_format", abort: false, ...q(e) });
  }
  function rm(t, e) {
    return new t({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...q(e) });
  }
  function im(t, e) {
    return new t({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...q(e) });
  }
  function om(t, e) {
    return new t({ type: "string", format: "base64", check: "string_format", abort: false, ...q(e) });
  }
  function am(t, e) {
    return new t({ type: "string", format: "base64url", check: "string_format", abort: false, ...q(e) });
  }
  function cm(t, e) {
    return new t({ type: "string", format: "e164", check: "string_format", abort: false, ...q(e) });
  }
  function lm(t, e) {
    return new t({ type: "string", format: "jwt", check: "string_format", abort: false, ...q(e) });
  }
  function dm(t, e) {
    return new t({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...q(e) });
  }
  function um(t, e) {
    return new t({ type: "string", format: "date", check: "string_format", ...q(e) });
  }
  function hm(t, e) {
    return new t({ type: "string", format: "time", check: "string_format", precision: null, ...q(e) });
  }
  function pm(t, e) {
    return new t({ type: "string", format: "duration", check: "string_format", ...q(e) });
  }
  function fm(t, e) {
    return new t(na({ type: "number", checks: [], ...q(e) }));
  }
  function mm(t, e) {
    return new t({ type: "number", check: "number_format", abort: false, format: "safeint", ...q(e) });
  }
  function gm(t, e) {
    return new t({ type: "boolean", ...q(e) });
  }
  function km(t) {
    return new t({ type: "unknown" });
  }
  function bm(t, e) {
    return new t({ type: "never", ...q(e) });
  }
  function ia(t, e) {
    return new _o({ check: "less_than", ...q(e), value: t, inclusive: false });
  }
  function _r(t, e) {
    return new _o({ check: "less_than", ...q(e), value: t, inclusive: true });
  }
  function oa(t, e) {
    return new jo({ check: "greater_than", ...q(e), value: t, inclusive: false });
  }
  function jr(t, e) {
    return new jo({ check: "greater_than", ...q(e), value: t, inclusive: true });
  }
  function aa(t, e) {
    return new dp({ check: "multiple_of", ...q(e), value: t });
  }
  function ca(t, e) {
    return new hp({ check: "max_length", ...q(e), maximum: t });
  }
  function rn(t, e) {
    return new pp({ check: "min_length", ...q(e), minimum: t });
  }
  function la(t, e) {
    return new fp({ check: "length_equals", ...q(e), length: t });
  }
  function vm(t, e) {
    return new mp({ check: "string_format", format: "regex", ...q(e), pattern: t });
  }
  function wm(t) {
    return new gp({ check: "string_format", format: "lowercase", ...q(t) });
  }
  function ym(t) {
    return new kp({ check: "string_format", format: "uppercase", ...q(t) });
  }
  function Sm(t, e) {
    return new bp({ check: "string_format", format: "includes", ...q(e), includes: t });
  }
  function $m(t, e) {
    return new vp({ check: "string_format", format: "starts_with", ...q(e), prefix: t });
  }
  function zm(t, e) {
    return new wp({ check: "string_format", format: "ends_with", ...q(e), suffix: t });
  }
  function Ut(t) {
    return new yp({ check: "overwrite", tx: t });
  }
  function _m(t) {
    return Ut((e) => e.normalize(t));
  }
  function jm() {
    return Ut((t) => t.trim());
  }
  function xm() {
    return Ut((t) => t.toLowerCase());
  }
  function Em() {
    return Ut((t) => t.toUpperCase());
  }
  function Am() {
    return Ut((t) => Wu(t));
  }
  function Tm(t, e, s) {
    return new t({ type: "array", element: e, ...q(s) });
  }
  function Im(t, e, s) {
    return new t({ type: "custom", check: "custom", fn: e, ...q(s) });
  }
  function Mm(t, e) {
    const s = Om((n) => (n.addIssue = (r) => {
      var _a3, _b3, _c2;
      if (typeof r == "string") n.issues.push(cs(r, n.value, s._zod.def));
      else {
        const i = r;
        i.fatal && (i.continue = false), (_a3 = i.code) != null ? _a3 : i.code = "custom", "input" in i || (i.input = n.value), (_b3 = i.inst) != null ? _b3 : i.inst = s, (_c2 = i.continue) != null ? _c2 : i.continue = !s._zod.def.abort, n.issues.push(cs(i));
      }
    }, t(n.value, n)), e);
    return s;
  }
  function Om(t, e) {
    const s = new ze({ check: "custom", ...q(e) });
    return s._zod.check = t, s;
  }
  function hs(t, ...e) {
    for (const s of e) for (const n of Reflect.ownKeys(s)) Object.prototype.propertyIsEnumerable.call(s, n) && Qe(t, n, s[n]);
    return t;
  }
  function da(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
    let e = (_a3 = t == null ? void 0 : t.target) != null ? _a3 : "draft-2020-12";
    return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), { processors: (_b3 = t.processors) != null ? _b3 : {}, metadataRegistry: (_c2 = t == null ? void 0 : t.metadata) != null ? _c2 : us, target: e, unrepresentable: (_d2 = t == null ? void 0 : t.unrepresentable) != null ? _d2 : "throw", override: (_e2 = t == null ? void 0 : t.override) != null ? _e2 : (() => {
    }), io: (_f2 = t == null ? void 0 : t.io) != null ? _f2 : "output", counter: 0, seen: /* @__PURE__ */ new Map(), sharedDefsExtractedFor: void 0, sharedEmitDoneFor: void 0, cycles: (_g2 = t == null ? void 0 : t.cycles) != null ? _g2 : "ref", reused: (_h2 = t == null ? void 0 : t.reused) != null ? _h2 : "inline", intersections: [], deferred: [], external: (_i2 = t == null ? void 0 : t.external) != null ? _i2 : void 0 };
  }
  function gt(t, e, s, n, r) {
    const i = typeof e.unrepresentable == "function" ? e.unrepresentable({ zodSchema: t, path: n.path, message: r }) : e.unrepresentable;
    if (i === "any") return false;
    if (i === void 0 || i === "throw") throw new Error(r);
    return Object.assign(s, i), true;
  }
  function le(t, e, s = { path: [], schemaPath: [] }) {
    var _a3, _b3, _c2;
    var n;
    const r = t._zod.def, i = e.seen.get(t);
    if (i) return i.count++, s.schemaPath.includes(t) && (i.cycle = s.path), i.schema;
    const o = { schema: {}, count: 1, cycle: void 0, path: s.path };
    e.seen.set(t, o), e.sharedDefsExtractedFor = void 0, e.sharedEmitDoneFor = void 0;
    const a = (_b3 = (_a3 = t._zod).toJSONSchema) == null ? void 0 : _b3.call(_a3);
    if (a) o.schema = a;
    else {
      const d = { ...s, schemaPath: [...s.schemaPath, t], path: s.path };
      if (t._zod.processJSONSchema) t._zod.processJSONSchema(e, o.schema, d);
      else {
        const p = o.schema, f = e.processors[r.type];
        if (!f) throw new Error("[toJSONSchema]: Non-representable type encountered: ".concat(r.type));
        f(t, e, p, d);
      }
      const h = t._zod.parent;
      h && (o.ref || (o.ref = h), le(h, e, d), e.seen.get(h).isParent = true);
    }
    const c = e.metadataRegistry.get(t);
    return c && hs(o.schema, c), e.io === "input" && we(t) && (delete o.schema.examples, delete o.schema.default), e.io === "input" && "_prefault" in o.schema && ((_c2 = (n = o.schema).default) != null ? _c2 : n.default = o.schema._prefault), delete o.schema._prefault, e.seen.get(t).schema;
  }
  function ua(t) {
    return t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function ha(t, e) {
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
    const r = (o) => {
      var _a4, _b4, _c3, _d3, _e2;
      const a = t.target === "draft-2020-12" ? "$defs" : "definitions";
      if (t.external) {
        const h = (_a4 = t.external.registry.get(o[0])) == null ? void 0 : _a4.id, p = (_b4 = t.external.uri) != null ? _b4 : ((m) => m);
        if (h) return { ref: p(h) };
        const f = (_d3 = (_c3 = o[1].defId) != null ? _c3 : o[1].schema.id) != null ? _d3 : "schema".concat(t.counter++);
        return o[1].defId = f, { defId: f, ref: "".concat(p("__shared"), "#/").concat(a, "/").concat(ua(f)) };
      }
      const c = "#", l = "".concat(c, "/").concat(a, "/");
      if (o[1] === s && !o[1].schema.id) return { ref: c };
      const d = (_e2 = o[1].schema.id) != null ? _e2 : "__schema".concat(t.counter++);
      return { defId: d, ref: l + ua(d) };
    }, i = (o) => {
      if (o[1].schema.$ref) return;
      const a = o[1], { ref: c, defId: l } = r(o);
      a.def = { ...a.schema }, l && (a.defId = l);
      const d = a.schema;
      for (const h in d) delete d[h];
      d.$ref = c;
    };
    if (t.cycles === "throw") for (const o of t.seen.entries()) {
      const a = o[1];
      if (a.cycle) throw new Error("Cycle detected: #/".concat((_b3 = a.cycle) == null ? void 0 : _b3.join("/"), '/<root>\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.'));
    }
    for (const o of t.seen.entries()) {
      const a = o[1];
      if (e === o[0]) {
        i(o);
        continue;
      }
      if (t.external) {
        const l = (_c2 = t.external.registry.get(o[0])) == null ? void 0 : _c2.id;
        if (e !== o[0] && l) {
          i(o);
          continue;
        }
      }
      if ((_d2 = t.metadataRegistry.get(o[0])) == null ? void 0 : _d2.id) {
        i(o);
        continue;
      }
      if (a.cycle) {
        i(o);
        continue;
      }
      a.count > 1 && t.reused === "ref" && i(o);
    }
    t.external && (t.sharedDefsExtractedFor = t.external);
  }
  function pa(t) {
    const e = t.anyOf;
    if (!Array.isArray(e) || e.length === 0 || t.type !== void 0) return;
    const s = [];
    for (const n of e) {
      if (!n || typeof n != "object") return;
      pa(n);
      const r = Object.keys(n);
      if (r.length !== 1 || r[0] !== "type") return;
      const i = n.type;
      for (const o of Array.isArray(i) ? i : [i]) {
        if (typeof o != "string") return;
        s.includes(o) || s.push(o);
      }
    }
    delete t.anyOf, t.type = s.length === 1 ? s[0] : s;
  }
  const fa = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), ma = ["oneOf", "anyOf"];
  function ga(t) {
    const e = t.additionalProperties;
    return e === void 0 || e === false || typeof e != "object" || e === null ? null : Object.keys(e).length ? e : null;
  }
  function xr(t) {
    var _a3, _b3, _c2, _d2;
    const e = [];
    for (const i of t) {
      if (typeof i != "object" || i.type !== "object") return null;
      for (const o in i) if (!fa.has(o)) return null;
      e.push(i);
    }
    const s = {}, n = /* @__PURE__ */ new Set();
    for (const i of e) {
      for (const o in i.properties) {
        if (Object.prototype.hasOwnProperty.call(s, o)) continue;
        const a = [];
        for (const l of e) {
          const d = (_b3 = (_a3 = l.properties) == null ? void 0 : _a3[o]) != null ? _b3 : ga(l);
          d != null && (a.some((h) => JSON.stringify(h) === JSON.stringify(d)) || a.push(d));
        }
        const c = a.length === 1 ? a[0] : (_c2 = xr(a)) != null ? _c2 : { allOf: a };
        Qe(s, o, c);
      }
      for (const o of (_d2 = i.required) != null ? _d2 : []) n.add(o);
    }
    const r = { type: "object", properties: s };
    if (n.size && (r.required = [...n]), e.every((i) => i.additionalProperties === false)) r.additionalProperties = false;
    else {
      const i = [];
      for (const o of e) {
        const a = ga(o);
        a && !i.some((c) => JSON.stringify(c) === JSON.stringify(a)) && i.push(a);
      }
      i.length === 1 ? r.additionalProperties = i[0] : i.length > 1 && (r.additionalProperties = { allOf: i });
    }
    return r;
  }
  function Nm(t) {
    const e = t.allOf;
    if (!Array.isArray(e) || e.length < 2) return;
    for (const r of fa) if (r in t) return;
    const s = e.filter((r) => ma.some((i) => Array.isArray(r[i])));
    let n = null;
    if (!s.length) n = xr(e);
    else {
      const r = s[0], i = ma.find((c) => Array.isArray(r[c]));
      if (Object.keys(r).length !== 1) return;
      const o = e.filter((c) => c !== r), a = r[i].map((c) => xr([...o, c]));
      if (a.some((c) => !c)) return;
      n = { [i]: a };
    }
    n && (delete t.allOf, hs(t, n));
  }
  function ka(t, e) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    const s = t.seen.get(e);
    if (!s) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const n = (a) => {
      var _a4, _b4, _c3;
      const c = t.seen.get(a);
      if (c.ref === null) return;
      const l = (_a4 = c.def) != null ? _a4 : c.schema, d = { ...l }, h = c.ref;
      if (c.ref = null, h) {
        n(h);
        const f = t.seen.get(h), m = f.schema;
        if (m.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (l.allOf = (_b4 = l.allOf) != null ? _b4 : [], l.allOf.push(m)) : hs(l, m), hs(l, d), a._zod.parent === h) for (const k in l) k === "$ref" || k === "allOf" || k in d || delete l[k];
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
      if (t.target !== "openapi-3.0") for (const a of t.seen.entries()) pa((_a3 = a[1].def) != null ? _a3 : a[1].schema);
      for (const a of t.deferred) a();
      if (t.intersections.length) {
        const a = /* @__PURE__ */ new Map();
        for (const c of t.seen.values()) for (const l of [c.schema, c.def]) {
          const d = l == null ? void 0 : l.allOf;
          if (!Array.isArray(d)) continue;
          const h = a.get(d);
          h ? h.push(l) : a.set(d, [l]);
        }
        for (const c of t.intersections) for (const l of (_b3 = a.get(c)) != null ? _b3 : []) Nm(l);
      }
    }
    const r = {};
    if (t.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : t.target, (_c2 = t.external) == null ? void 0 : _c2.uri) {
      const a = (_d2 = t.external.registry.get(e)) == null ? void 0 : _d2.id;
      if (!a) throw new Error("Schema is missing an `id` property");
      r.$id = t.external.uri(a);
    }
    hs(r, s.defId ? s.schema : (_e2 = s.def) != null ? _e2 : s.schema);
    const i = (_f2 = t.metadataRegistry.get(e)) == null ? void 0 : _f2.id;
    i !== void 0 && r.id === i && delete r.id;
    const o = (_h2 = (_g2 = t.external) == null ? void 0 : _g2.defs) != null ? _h2 : {};
    if (!t.external || t.sharedEmitDoneFor !== t.external) for (const a of t.seen.entries()) {
      const c = a[1];
      c.def && c.defId && (c.def.id === c.defId && delete c.def.id, Qe(o, c.defId, c.def));
    }
    t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(o).length > 0 && (t.target === "draft-2020-12" ? r.$defs = o : r.definitions = o);
    try {
      const a = JSON.parse(JSON.stringify(r));
      return Object.defineProperty(a, "~standard", { value: { ...e["~standard"], jsonSchema: { input: on(e, "input", t.processors), output: on(e, "output", t.processors) } }, enumerable: false, writable: false }), a;
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
      for (const r in n.shape) if (we(n.shape[r], s)) return true;
      return false;
    }
    if (n.type === "union") {
      for (const r of n.options) if (we(r, s)) return true;
      return false;
    }
    if (n.type === "tuple") {
      for (const r of n.items) if (we(r, s)) return true;
      return !!(n.rest && we(n.rest, s));
    }
    return false;
  }
  const Pm = (t, e = {}) => (s) => {
    const n = da({ ...s, processors: e });
    return le(t, n), ha(n, t), ka(n, t);
  }, on = (t, e, s = {}) => (n) => {
    const { libraryOptions: r, target: i } = n != null ? n : {}, o = da({ ...r != null ? r : {}, target: i, io: e, processors: s });
    return le(t, o), ha(o, t), ka(o, t);
  }, Ft = (t, e, s) => {
    (t[e] === void 0 || s > t[e]) && (t[e] = s);
  }, Bt = (t, e, s) => {
    (t[e] === void 0 || s < t[e]) && (t[e] = s);
  }, ba = (t, e) => {
    Ft(t, "minimum", e), Bt(t, "maximum", e);
  }, va = (t, e) => {
    var _a3;
    (_a3 = t.multipleOf) != null ? _a3 : t.multipleOf = [], t.multipleOf.includes(e) || t.multipleOf.push(e);
  }, wa = (t, e) => {
    var _a3;
    (_a3 = t.patterns) != null ? _a3 : t.patterns = /* @__PURE__ */ new Set(), t.patterns.add(e);
  }, ya = (t, e) => {
    t.mime = t.mime ? t.mime.filter((s) => e.includes(s)) : [...e];
  }, Sa = (t, e) => {
    t.format = e, e.includes("int") && (t.isInt = true);
  }, $a = (t, e) => Ft(t, "minimum", e.minimum), za = (t, e) => Bt(t, "maximum", e.maximum), _a = (t) => (e, s) => {
    Sa(e, s.format);
    const [n, r] = t[s.format];
    Ft(e, "minimum", n), Bt(e, "maximum", r);
  }, Rm = { greater_than: (t, e) => Ft(t, e.inclusive ? "minimum" : "exclusiveMinimum", e.value), less_than: (t, e) => Bt(t, e.inclusive ? "maximum" : "exclusiveMaximum", e.value), multiple_of: (t, e) => va(t, e.value), number_format: _a(ho), bigint_format: _a(Ju), min_length: $a, max_length: za, length_equals: (t, e) => ba(t, e.length), min_size: $a, max_size: za, size_equals: (t, e) => ba(t, e.size), string_format: (t, e) => {
    Sa(t, e.format), e.pattern && wa(t, e.pattern), (e.format === "base64" || e.format === "base64url") && (t.contentEncoding = e.format), (e.local || e.precision === -1) && (t.laxFormat = true);
  }, mime_type: (t, e) => ya(t, e.mime) };
  function Oe(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = {}, s = t._zod.def, n = t._zod.traits.has("$ZodCheck") ? [t, ...(_a3 = s.checks) != null ? _a3 : []] : (_b3 = s.checks) != null ? _b3 : [];
    for (const i of n) (_c2 = Rm[i._zod.def.check]) == null ? void 0 : _c2.call(Rm, e, i._zod.def);
    const r = t._zod.bag;
    r.minimum !== void 0 && Ft(e, "minimum", r.minimum), r.exclusiveMinimum !== void 0 && Ft(e, "exclusiveMinimum", r.exclusiveMinimum), r.maximum !== void 0 && Bt(e, "maximum", r.maximum), r.exclusiveMaximum !== void 0 && Bt(e, "exclusiveMaximum", r.exclusiveMaximum), r.multipleOf !== void 0 && va(e, r.multipleOf), r.format !== void 0 && ((_d2 = e.format) != null ? _d2 : e.format = r.format, r.format.includes("int") && (e.isInt = true)), r.mime && ya(e, r.mime);
    for (const i of (_e2 = r.patterns) != null ? _e2 : []) wa(e, i);
    return e;
  }
  const Dm = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, Lm = /* @__PURE__ */ new Map([[No, Jh], [yr, Qh]]), ja = (t) => {
    var _a3;
    return (_a3 = Lm.get(t)) != null ? _a3 : t;
  }, Cm = (t, e, s, n) => {
    var _a3;
    const r = s;
    r.type = "string";
    const { minimum: i, maximum: o, format: a, patterns: c, contentEncoding: l, laxFormat: d } = Oe(t);
    if (typeof i == "number" && (r.minLength = i), typeof o == "number" && (r.maxLength = o), a && (r.format = (_a3 = Dm[a]) != null ? _a3 : a, r.format === "" && delete r.format, (a === "time" || d) && delete r.format), l && (r.contentEncoding = l), c && c.size > 0) {
      const h = [...c].map(ja);
      h.length === 1 ? r.pattern = h[0].source : h.length > 1 && (r.allOf = [...h.map((p) => ({ ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? { type: "string" } : {}, pattern: p.source }))]);
    }
  }, Zm = (t, e, s, n) => {
    var _a3;
    const r = s, { minimum: i, maximum: o, multipleOf: a, exclusiveMaximum: c, exclusiveMinimum: l, isInt: d } = Oe(t);
    r.type = d ? "integer" : "number";
    const h = typeof l == "number" && l >= (i != null ? i : Number.NEGATIVE_INFINITY), p = typeof c == "number" && c <= (o != null ? o : Number.POSITIVE_INFINITY), f = e.target === "draft-04" || e.target === "openapi-3.0";
    if (h ? f ? (r.minimum = l, r.exclusiveMinimum = true) : r.exclusiveMinimum = l : typeof i == "number" && (r.minimum = i), p ? f ? (r.maximum = c, r.exclusiveMaximum = true) : r.exclusiveMaximum = c : typeof o == "number" && (r.maximum = o), a) {
      const m = /* @__PURE__ */ new Set();
      for (const b of a) Number.isFinite(b) && b !== 0 ? m.add(Math.abs(b)) : gt(t, e, r, n, "A multipleOf divisor of ".concat(b, " cannot be represented in JSON Schema"));
      const [g, ...k] = m;
      g !== void 0 && (r.multipleOf = g), k.length && (r.allOf = [...(_a3 = r.allOf) != null ? _a3 : [], ...k.map((b) => ({ multipleOf: b }))]);
    }
  }, Um = (t, e, s, n) => {
    s.type = "boolean";
  }, Fm = (t, e, s, n) => {
    s.not = {};
  }, Bm = (t, e, s, n) => {
  }, Km = (t, e, s, n) => {
    const r = t._zod.def, i = nr(r.entries);
    if (i.length === 0) {
      s.not = {};
      return;
    }
    i.every((o) => typeof o == "number") && (s.type = "number"), i.every((o) => typeof o == "string") && (s.type = "string"), s.enum = i;
  }, qm = (t, e, s, n) => {
    const r = t._zod.def;
    if (r.values.length === 0) {
      s.not = {};
      return;
    }
    const i = [];
    for (const o of r.values) if (o === void 0) {
      if (gt(t, e, s, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
    } else if (typeof o == "bigint") {
      if (gt(t, e, s, n, "BigInt literals cannot be represented in JSON Schema")) return;
      i.push(Number(o));
    } else i.push(o);
    if (i.length !== 0) if (i.length === 1) {
      const o = i[0];
      s.type = o === null ? "null" : typeof o, e.target === "draft-04" || e.target === "openapi-3.0" ? s.enum = [o] : s.const = o;
    } else i.every((o) => typeof o == "number") && (s.type = "number"), i.every((o) => typeof o == "string") && (s.type = "string"), i.every((o) => typeof o == "boolean") && (s.type = "boolean"), i.every((o) => o === null) && (s.type = "null"), s.enum = i;
  }, Gm = (t, e, s, n) => {
    gt(t, e, s, n, "Custom types cannot be represented in JSON Schema");
  }, Wm = (t, e, s, n) => {
    gt(t, e, s, n, "Transforms cannot be represented in JSON Schema");
  }, Hm = (t, e, s, n) => {
    const r = s, i = t._zod.def, { minimum: o, maximum: a } = Oe(t);
    typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = le(i.element, e, { ...n, path: [...n.path, "items"] });
  };
  function ps(t) {
    const e = t._zod.def;
    return e.type === "pipe" && e.in._zod.traits.has("$ZodTransform") ? ps(e.out) : e.type === "catch" ? ps(e.innerType) : t._zod.optin;
  }
  const Vm = (t, e, s, n) => {
    var _a3;
    const r = s, i = t._zod.def, o = i.shape;
    if (Object.getOwnPropertySymbols(o).length && gt(t, e, r, n, "Symbol keys cannot be represented in JSON Schema")) return;
    r.type = "object", r.properties = {};
    for (const l in o) Qe(r.properties, l, le(o[l], e, { ...n, path: [...n.path, "properties", l] }));
    const c = [];
    for (const l of Object.keys(o)) {
      const d = i.shape[l];
      (e.io === "input" ? ps(d) === void 0 : d._zod.optout === void 0) && c.push(l);
    }
    c.length > 0 && (r.required = c), ((_a3 = i.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? r.additionalProperties = false : i.catchall ? i.catchall && (r.additionalProperties = le(i.catchall, e, { ...n, path: [...n.path, "additionalProperties"] })) : e.io === "output" && (r.additionalProperties = false);
  }, Ym = (t, e, s, n) => {
    const r = t._zod.def, i = r.inclusive === false, o = r.options.map((a, c) => le(a, e, { ...n, path: [...n.path, i ? "oneOf" : "anyOf", c] }));
    i ? s.oneOf = o : s.anyOf = o;
  }, Jm = (t, e, s, n) => {
    const r = t._zod.def, i = le(r.left, e, { ...n, path: [...n.path, "allOf", 0] }), o = le(r.right, e, { ...n, path: [...n.path, "allOf", 1] }), a = (l) => "allOf" in l && Object.keys(l).length === 1, c = [...a(i) ? i.allOf : [i], ...a(o) ? o.allOf : [o]];
    s.allOf = c, e.intersections.push(c);
  }, Qm = (t, e, s, n) => {
    const r = s, i = t._zod.def;
    r.type = "array";
    const o = e.target === "draft-2020-12" ? "prefixItems" : "items", a = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems", c = i.items.map((g, k) => le(g, e, { ...n, path: [...n.path, o, k] })), l = i.rest ? le(i.rest, e, { ...n, path: [...n.path, a, ...e.target === "openapi-3.0" ? [i.items.length] : []] }) : null;
    let d = i.items.length;
    for (; d > 0; ) {
      const g = i.items[d - 1];
      if (!(e.io === "input" ? ps(g) !== void 0 : g._zod.optout === "optional")) break;
      d--;
    }
    const h = i.items.length, p = !i.rest;
    e.target === "draft-2020-12" ? (r.prefixItems = c, p ? r.items = false : l && (r.items = l), d > 0 && (r.minItems = d), p && (r.maxItems = h)) : e.target === "openapi-3.0" ? (r.items = { anyOf: c }, l && r.items.anyOf.push(l), d > 0 && (r.minItems = d), p && (r.maxItems = h)) : (r.items = c, p ? r.additionalItems = false : l && (r.additionalItems = l), d > 0 && (r.minItems = d), p && (r.maxItems = h));
    const { minimum: f, maximum: m } = Oe(t);
    typeof f == "number" && (r.minItems = f), typeof m == "number" && (r.maxItems = m);
  };
  function Er(t, e, s) {
    var _a3, _b3;
    if (e.$ref) {
      if (s.has(e)) return e;
      s.add(e);
      const m = (_a3 = t.get(e)) == null ? void 0 : _a3.def;
      if (!m) return e;
      const g = Er(t, m, s);
      return g === m ? e : g;
    }
    for (const m of ["anyOf", "oneOf"]) {
      const g = e[m];
      if (!Array.isArray(g)) continue;
      const k = g.map((b) => Er(t, b, s));
      k.some((b, v) => b !== g[v]) && (e = { ...e, [m]: k });
    }
    const n = Array.isArray(e.type) ? e.type : [e.type], r = !n.includes("string") && n.some((m) => m === "number" || m === "integer"), i = (_b3 = e.enum) != null ? _b3 : e.const !== void 0 ? [e.const] : void 0;
    if (!r && !(i == null ? void 0 : i.some((m) => typeof m == "number"))) return e;
    const { minimum: o, maximum: a, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: d, format: h, id: p, ...f } = e;
    return f.enum ? f.enum = f.enum.map((m) => typeof m == "number" ? String(m) : m) : typeof f.const == "number" && (f.const = String(f.const)), r && (f.type = "string", i || (f.pattern = (n.includes("number") ? br : op).source)), f;
  }
  const Ar = /* @__PURE__ */ new WeakMap();
  function Xm(t) {
    var _a3, _b3, _c2;
    const e = /* @__PURE__ */ new Map();
    for (const n of t.seen.values()) n.def && !e.has(n.schema) && e.set(n.schema, n);
    const s = /* @__PURE__ */ new Map();
    for (const n of (_a3 = Ar.get(t)) != null ? _a3 : []) {
      const r = t.seen.get(n), i = (_c2 = (_b3 = r == null ? void 0 : r.def) != null ? _b3 : r == null ? void 0 : r.schema) == null ? void 0 : _c2.propertyNames;
      if (!i || i === true || s.has(i)) continue;
      const o = Er(e, i, /* @__PURE__ */ new Set());
      o !== i && s.set(i, o);
    }
    if (s.size) for (const n of t.seen.values()) for (const r of [n.schema, n.def]) {
      const i = r && s.get(r.propertyNames);
      i && (r.propertyNames = i);
    }
  }
  const eg = (t, e, s, n) => {
    const r = s, i = t._zod.def;
    r.type = "object";
    const o = i.keyType, a = Oe(o).patterns;
    if (i.mode === "loose" && a && a.size > 0) {
      const d = le(i.valueType, e, { ...n, path: [...n.path, "patternProperties", "*"] });
      r.patternProperties = {};
      for (const h of a) Qe(r.patternProperties, ja(h).source, d);
    } else {
      if (e.target === "draft-07" || e.target === "draft-2020-12") {
        r.propertyNames = le(i.keyType, e, { ...n, path: [...n.path, "propertyNames"] });
        let d = Ar.get(e);
        d || (d = [], Ar.set(e, d), e.deferred.push(() => Xm(e))), d.push(t);
      }
      r.additionalProperties = le(i.valueType, e, { ...n, path: [...n.path, "additionalProperties"] });
    }
    const c = o._zod.values, l = e.io === "input" && ps(i.valueType) !== void 0;
    if (c && !i.partial && !l) {
      const d = [...c].filter((h) => typeof h == "string" || typeof h == "number");
      d.length > 0 && (r.required = d.map(String));
    }
  }, tg = (t, e, s, n) => {
    const r = t._zod.def, i = le(r.innerType, e, n), o = e.seen.get(t);
    e.target === "openapi-3.0" ? (o.ref = r.innerType, s.nullable = true) : s.anyOf = [i, { type: "null" }];
  }, sg = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
  }, Tr = /* @__PURE__ */ Symbol();
  function xa(t, e, s, n, r) {
    let i = false;
    const o = JSON.stringify(t, (a, c) => typeof c != "bigint" ? c : (i = true, null));
    return i ? (gt(e, s, n, r, "BigInt defaults cannot be represented in JSON Schema"), Tr) : JSON.parse(o);
  }
  const ng = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
    const o = xa(r.defaultValue, t, e, s, n);
    o !== Tr && (s.default = o);
  }, rg = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    if (i.ref = r.innerType, e.io !== "input") return;
    const o = xa(r.defaultValue, t, e, s, n);
    o !== Tr && (s._prefault = o);
  }, ig = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
    let o;
    try {
      o = r.catchValue(void 0);
    } catch (e2) {
      gt(t, e, s, n, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    s.default = o;
  }, og = (t, e, s, n) => {
    const r = t._zod.def, i = r.in._zod.traits.has("$ZodTransform"), o = e.io === "input" ? i ? r.out : r.in : r.out;
    le(o, e, n);
    const a = e.seen.get(t);
    a.ref = o;
  }, ag = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType, s.readOnly = true;
  }, Ea = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
  }, cg = (t, e, s, n) => {
    const r = t._zod.innerType;
    le(r, e, n);
    const i = e.seen.get(t);
    i.ref = r;
  }, Aa = new WeakSet([Object.prototype, Error.prototype]);
  function an(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, enumerable: false, get() {
      const n = s(this);
      return Object.defineProperty(this, e, { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, e, { value: n, configurable: true, writable: true });
    } });
  }
  const Ne = M("ZodError", (t, e) => {
    bh.init(t, e), t.name = "ZodError";
    const s = Object.getPrototypeOf(t);
    Aa.has(s) || (Aa.add(s), an(s, "format", (n) => (r) => yh(n, r)), an(s, "flatten", (n) => (r) => wh(n, r)), an(s, "addIssue", (n) => (r) => {
      n.issues.push(r), n.message = JSON.stringify(n.issues, rr, 2);
    }), an(s, "addIssues", (n) => (r) => {
      n.issues.push(...r), n.message = JSON.stringify(n.issues, rr, 2);
    }), Object.defineProperty(s, "isEmpty", { configurable: true, enumerable: false, get() {
      return this.issues.length === 0;
    } }));
  }, void 0, { Parent: Error }), lg = pr(Ne), dg = fr(Ne), ug = mr(Ne), hg = gr(Ne), pg = xh(Ne), fg = Eh(Ne), mg = Ah(Ne), gg = Th(Ne), kg = Ih(Ne), bg = Mh(Ne), vg = Oh(Ne), wg = Nh(Ne);
  function yg() {
    Me.localeError || Ge(Cf());
  }
  function fs() {
    Me.memoizer || Ge({ memoizer: Rf() });
  }
  const oe = M("ZodType", (t, e) => (yg(), ie.init(t, e), t.def = e, t.type = e.type, t), { check(...t) {
    var _a3;
    const e = this.def;
    return this.clone(Ee(e, { checks: [...(_a3 = e.checks) != null ? _a3 : [], ...t.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)] }), { parent: true });
  }, with(...t) {
    return this.check(...t);
  }, clone(t, e) {
    return ut(this, t, e);
  }, brand() {
    return this;
  }, register(t, e) {
    return t.add(this, e), this;
  }, refine(t, e) {
    return this.check(kk(t, e));
  }, superRefine(t, e) {
    return this.check(bk(t, e));
  }, overwrite(t) {
    return this.check(Ut(t));
  }, optional() {
    return Ca(this);
  }, exactOptional() {
    return sk(this);
  }, nullable() {
    return Ua(this);
  }, nullish() {
    return Ca(Ua(this));
  }, nonoptional(t) {
    return ck(this, t);
  }, array() {
    return N(this);
  }, or(t) {
    return et([this, t]);
  }, and(t) {
    return Ra(this, t);
  }, transform(t) {
    return Ka(this, La(t));
  }, default(t) {
    return ik(this, t);
  }, prefault(t) {
    return ak(this, t);
  }, catch(t) {
    return dk(this, t);
  }, pipe(t) {
    return Ka(this, t);
  }, readonly() {
    return pk(this);
  }, describe(t) {
    const e = this.clone();
    return us.add(e, { description: t }), e;
  }, meta(...t) {
    if (t.length === 0) return us.get(this);
    const e = this.clone();
    return us.add(e, t[0]), e;
  }, isOptional() {
    return this.safeParse(void 0).success;
  }, isNullable() {
    return this.safeParse(null).success;
  }, apply(t, ...e) {
    return e.length === 0 ? t(this) : t(this, ...e);
  }, get "~standard"() {
    return go(this, "~standard", { ...Eo(this), jsonSchema: { input: on(this, "input"), output: on(this, "output") } });
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  }, parse: function t(e, s) {
    return lg(this, e, s, { callee: t });
  }, parseAsync: async function t(e, s) {
    return await dg(this, e, s, { callee: t });
  }, safeParse(t, e) {
    return ug(this, t, e);
  }, async safeParseAsync(t, e) {
    return hg(this, t, e);
  }, get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  }, set spa(t) {
    ft(this, "spa", t);
  }, validate(t, e) {
    return zh(this, t, e);
  }, validateAsync(t, e) {
    return jh(this, t, e);
  }, encode: function t(e, s) {
    return pg(this, e, s, { callee: t });
  }, decode: function t(e, s) {
    return fg(this, e, s, { callee: t });
  }, encodeAsync: async function t(e, s) {
    return await mg(this, e, s, { callee: t });
  }, decodeAsync: async function t(e, s) {
    return await gg(this, e, s, { callee: t });
  }, safeEncode(t, e) {
    return kg(this, t, e);
  }, safeDecode(t, e) {
    return bg(this, t, e);
  }, async safeEncodeAsync(t, e) {
    return vg(this, t, e);
  }, async safeDecodeAsync(t, e) {
    return wg(this, t, e);
  }, toJSONSchema(t) {
    return Pm(this, {})(t);
  }, get description() {
    var _a3;
    return (_a3 = us.get(this)) == null ? void 0 : _a3.description;
  }, get _def() {
    return this._zod.def;
  } }), Ta = M("_ZodString", (t, e) => {
    wr.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Cm(t, s, n);
  }, ko({ format: (t) => {
    var _a3;
    return (_a3 = Oe(t).format) != null ? _a3 : null;
  }, minLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).minimum) != null ? _a3 : null;
  }, maxLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).maximum) != null ? _a3 : null;
  } }, { regex(...t) {
    return this.check(vm(...t));
  }, includes(...t) {
    return this.check(Sm(...t));
  }, startsWith(...t) {
    return this.check($m(...t));
  }, endsWith(...t) {
    return this.check(zm(...t));
  }, min(...t) {
    return this.check(rn(...t));
  }, max(...t) {
    return this.check(ca(...t));
  }, length(...t) {
    return this.check(la(...t));
  }, nonempty(...t) {
    return this.check(rn(1, ...t));
  }, lowercase(t) {
    return this.check(wm(t));
  }, uppercase(t) {
    return this.check(ym(t));
  }, trim() {
    return this.check(jm());
  }, normalize(...t) {
    return this.check(_m(...t));
  }, toLowerCase() {
    return this.check(xm());
  }, toUpperCase() {
    return this.check(Em());
  }, slugify() {
    return this.check(Am());
  } })), Sg = M("ZodString", (t, e) => {
    wr.init(t, e), Ta.init(t, e);
  }, { email(t) {
    return this.check(Bf(xg, t));
  }, url(t) {
    return this.check(ra(Ia, t));
  }, jwt(t) {
    return this.check(lm(Kg, t));
  }, emoji(t) {
    return this.check(Vf(Tg, t));
  }, guid(t) {
    return this.check(Kf(Eg, t));
  }, uuid(t) {
    return this.check(qf(cn, t));
  }, uuidv4(t) {
    return this.check(Gf(cn, t));
  }, uuidv6(t) {
    return this.check(Wf(cn, t));
  }, uuidv7(t) {
    return this.check(Hf(cn, t));
  }, nanoid(t) {
    return this.check(Yf(Ig, t));
  }, cuid(t) {
    return this.check(Jf(Mg, t));
  }, cuid2(t) {
    return this.check(Qf(Og, t));
  }, ulid(t) {
    return this.check(Xf(Ng, t));
  }, base64(t) {
    return this.check(om(Ug, t));
  }, base64url(t) {
    return this.check(am(Fg, t));
  }, xid(t) {
    return this.check(em(Pg, t));
  }, ksuid(t) {
    return this.check(tm(Rg, t));
  }, ipv4(t) {
    return this.check(sm(Dg, t));
  }, ipv6(t) {
    return this.check(nm(Lg, t));
  }, cidrv4(t) {
    return this.check(rm(Cg, t));
  }, cidrv6(t) {
    return this.check(im(Zg, t));
  }, e164(t) {
    return this.check(cm(Bg, t));
  }, datetime(t) {
    return this.check(dm($g, t));
  }, date(t) {
    return this.check(um(zg, t));
  }, time(t) {
    return this.check(hm(_g, t));
  }, duration(t) {
    return this.check(pm(jg, t));
  } });
  function E(t) {
    return Ff(Sg, t);
  }
  const de = M("ZodStringFormat", (t, e) => {
    ae.init(t, e), Ta.init(t, e);
  }), $g = M("ZodISODateTime", (t, e) => {
    Up.init(t, e), de.init(t, e);
  }), zg = M("ZodISODate", (t, e) => {
    Fp.init(t, e), de.init(t, e);
  }), _g = M("ZodISOTime", (t, e) => {
    Bp.init(t, e), de.init(t, e);
  }), jg = M("ZodISODuration", (t, e) => {
    Kp.init(t, e), de.init(t, e);
  }), xg = M("ZodEmail", (t, e) => {
    xp.init(t, e), de.init(t, e);
  }), Eg = M("ZodGUID", (t, e) => {
    _p.init(t, e), de.init(t, e);
  }), cn = M("ZodUUID", (t, e) => {
    jp.init(t, e), de.init(t, e);
  }), Ia = M("ZodURL", (t, e) => {
    Op.init(t, e), de.init(t, e);
  });
  function Ag(t) {
    return ra(Ia, t);
  }
  const Tg = M("ZodEmoji", (t, e) => {
    Np.init(t, e), de.init(t, e);
  }), Ig = M("ZodNanoID", (t, e) => {
    Pp.init(t, e), de.init(t, e);
  }), Mg = M("ZodCUID", (t, e) => {
    Rp.init(t, e), de.init(t, e);
  }), Og = M("ZodCUID2", (t, e) => {
    Dp.init(t, e), de.init(t, e);
  }), Ng = M("ZodULID", (t, e) => {
    Lp.init(t, e), de.init(t, e);
  }), Pg = M("ZodXID", (t, e) => {
    Cp.init(t, e), de.init(t, e);
  }), Rg = M("ZodKSUID", (t, e) => {
    Zp.init(t, e), de.init(t, e);
  }), Dg = M("ZodIPv4", (t, e) => {
    qp.init(t, e), de.init(t, e);
  }), Lg = M("ZodIPv6", (t, e) => {
    Wp.init(t, e), de.init(t, e);
  }), Cg = M("ZodCIDRv4", (t, e) => {
    Hp.init(t, e), de.init(t, e);
  }), Zg = M("ZodCIDRv6", (t, e) => {
    Yp.init(t, e), de.init(t, e);
  }), Ug = M("ZodBase64", (t, e) => {
    Jp.init(t, e), de.init(t, e);
  }), Fg = M("ZodBase64URL", (t, e) => {
    Xp.init(t, e), de.init(t, e);
  }), Bg = M("ZodE164", (t, e) => {
    ef.init(t, e), de.init(t, e);
  }), Kg = M("ZodJWT", (t, e) => {
    sf.init(t, e), de.init(t, e);
  }), Ma = M("ZodNumber", (t, e) => {
    Po.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Zm(t, s, n, r), t.isFinite = true;
  }, ko({ minValue: (t) => {
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
    return this.check(oa(t, e));
  }, gte(t, e) {
    return this.check(jr(t, e));
  }, min(t, e) {
    return this.check(jr(t, e));
  }, lt(t, e) {
    return this.check(ia(t, e));
  }, lte(t, e) {
    return this.check(_r(t, e));
  }, max(t, e) {
    return this.check(_r(t, e));
  }, int(t) {
    return this.check(Oa(t));
  }, safe(t) {
    return this.check(Oa(t));
  }, positive(t) {
    return this.check(oa(0, t));
  }, nonnegative(t) {
    return this.check(jr(0, t));
  }, negative(t) {
    return this.check(ia(0, t));
  }, nonpositive(t) {
    return this.check(_r(0, t));
  }, multipleOf(t, e) {
    return this.check(aa(t, e));
  }, step(t, e) {
    return this.check(aa(t, e));
  }, finite() {
    return this;
  } }));
  function L(t) {
    return fm(Ma, t);
  }
  const qg = M("ZodNumberFormat", (t, e) => {
    nf.init(t, e), Ma.init(t, e);
  });
  function Oa(t) {
    return mm(qg, t);
  }
  const Gg = M("ZodBoolean", (t, e) => {
    rf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Um(t, s, n);
  });
  function J(t) {
    return gm(Gg, t);
  }
  const Wg = M("ZodUnknown", (t, e) => {
    of.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Bm();
  });
  function Et() {
    return km(Wg);
  }
  const Hg = M("ZodNever", (t, e) => {
    af.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Fm(t, s, n);
  });
  function Na(t) {
    return bm(Hg, t);
  }
  const Vg = M("ZodArray", (t, e) => {
    fs(), df.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Hm(t, s, n, r), t.element = e.element;
  }, { min(t, e) {
    return this.check(rn(t, e));
  }, nonempty(t) {
    return this.check(rn(1, t));
  }, max(t, e) {
    return this.check(ca(t, e));
  }, length(t, e) {
    return this.check(la(t, e));
  }, unwrap() {
    return this.element;
  } });
  function N(t, e) {
    return Tm(Vg, t, e);
  }
  const Ir = M("ZodObject", (t, e) => {
    fs(), pf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Vm(t, s, n, r), uh(t, "shape", (s) => s._zod.def.shape, false);
  }, { keyof() {
    return Y(Object.keys(this._zod.def.shape));
  }, catchall(t) {
    return this.clone(Ee(this._zod.def, { catchall: t }));
  }, passthrough() {
    return this.clone(Ee(this._zod.def, { catchall: Et() }));
  }, loose() {
    return this.clone(Ee(this._zod.def, { catchall: Et() }));
  }, strict() {
    return this.clone(Ee(this._zod.def, { catchall: Na() }));
  }, strip() {
    return this.clone(Ee(this._zod.def, { catchall: void 0 }));
  }, extend(t) {
    return eh(this, t);
  }, safeExtend(t) {
    return th(this, t);
  }, merge(t) {
    return sh(this, t);
  }, pick(t) {
    return Qu(this, t);
  }, omit(t) {
    return Xu(this, t);
  }, partial(...t) {
    return fo(Nr, this, t[0]);
  }, exactPartial(...t) {
    return fo(Za, this, t[0], "exactPartial");
  }, required(...t) {
    return nh(Fa, this, t[0]);
  } });
  function B(t, e) {
    const s = { type: "object", shape: t != null ? t : {}, ...q(e) };
    return new Ir(s);
  }
  function U(t, e) {
    return new Ir({ type: "object", shape: t, catchall: Na(), ...q(e) });
  }
  function Yg(t, e) {
    return new Ir({ type: "object", shape: t, catchall: Et(), ...q(e) });
  }
  const Pa = M("ZodUnion", (t, e) => {
    Zo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Ym(t, s, n, r), t.options = e.options;
  });
  function et(t, e) {
    return new Pa({ type: "union", options: t, ...q(e) });
  }
  const Jg = M("ZodDiscriminatedUnion", (t, e) => {
    Pa.init(t, e), mf.init(t, e);
  });
  function Mr(t, e, s) {
    return new Jg({ type: "union", options: e, discriminator: t, ...q(s) });
  }
  const Qg = M("ZodIntersection", (t, e) => {
    gf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Jm(t, s, n, r);
  });
  function Ra(t, e) {
    return new Qg({ type: "intersection", left: t, right: e });
  }
  const Xg = M("ZodTuple", (t, e) => {
    fs(), kf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Qm(t, s, n, r);
  }, { rest(t) {
    return this.clone({ ...this._zod.def, rest: t });
  }, partial() {
    var _a3;
    const t = this._zod.def;
    if ((_a3 = t.checks) == null ? void 0 : _a3.length) throw new Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({ ...t, items: t.items.map((e) => new Nr({ type: "optional", innerType: e })) });
  } });
  function At(t, e, s) {
    const n = e instanceof ie, r = n ? s : e, i = n ? e : null;
    return new Xg({ type: "tuple", items: t, rest: i, ...q(r) });
  }
  const Da = M("ZodRecord", (t, e) => {
    fs(), bf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => eg(t, s, n, r), t.keyType = e.keyType, t.valueType = e.valueType;
  });
  function Q(t, e, s) {
    return !e || !e._zod ? new Da({ type: "record", keyType: E(), valueType: t, ...q(e) }) : new Da({ type: "record", keyType: t, valueType: e, ...q(s) });
  }
  const Or = M("ZodEnum", (t, e) => {
    vf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (n, r, i) => Km(t, n, r), t.enum = e.entries, t.options = [...t._zod.values];
    const s = new Set(Object.keys(e.entries));
    t.extract = (n, r) => {
      const i = {};
      for (const o of n) if (s.has(o)) i[o] = e.entries[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Or({ ...e, checks: [], ...q(r), entries: i });
    }, t.exclude = (n, r) => {
      const i = { ...e.entries };
      for (const o of n) if (s.has(o)) delete i[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Or({ ...e, checks: [], ...q(r), entries: i });
    };
  });
  function Y(t, e) {
    const s = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
    return new Or({ type: "enum", entries: s, ...q(e) });
  }
  const ek = M("ZodLiteral", (t, e) => {
    wf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => qm(t, s, n, r), t.values = new Set(e.values), Object.defineProperty(t, "value", { get() {
      if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    } });
  });
  function se(t, e) {
    return new ek({ type: "literal", values: Array.isArray(t) ? t : [t], ...q(e) });
  }
  const tk = M("ZodTransform", (t, e) => {
    fs(), yf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Wm(t, s, n, r), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new wo(t.constructor.name);
      s.addIssue = (i) => {
        var _a3, _b3;
        if (typeof i == "string") s.issues.push(cs(i, s.value, e));
        else {
          const o = i;
          o.fatal && (o.continue = false), (_a3 = o.code) != null ? _a3 : o.code = "custom", "input" in o || (o.input = s.value), (_b3 = o.inst) != null ? _b3 : o.inst = t, s.issues.push(cs(o));
        }
      };
      const r = e.transform(s.value, s);
      return r instanceof Promise ? r.then((i) => (s.value = i, s)) : (s.value = r, s);
    };
  });
  function La(t) {
    return new tk({ type: "transform", transform: t });
  }
  const Nr = M("ZodOptional", (t, e) => {
    Go.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Ea(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function Ca(t) {
    return new Nr({ type: "optional", innerType: t });
  }
  const Za = M("ZodExactOptional", (t, e) => {
    Sf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Ea(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function sk(t) {
    return new Za({ type: "optional", innerType: t });
  }
  const nk = M("ZodNullable", (t, e) => {
    $f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => tg(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function Ua(t) {
    return new nk({ type: "nullable", innerType: t });
  }
  const rk = M("ZodDefault", (t, e) => {
    zf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => ng(t, s, n, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
  });
  function ik(t, e) {
    return new rk({ type: "default", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : lo(e);
    } });
  }
  const ok = M("ZodPrefault", (t, e) => {
    _f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => rg(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function ak(t, e) {
    return new ok({ type: "prefault", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : lo(e);
    } });
  }
  const Fa = M("ZodNonOptional", (t, e) => {
    jf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => sg(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function ck(t, e) {
    return new Fa({ type: "nonoptional", innerType: t, ...q(e) });
  }
  const lk = M("ZodCatch", (t, e) => {
    xf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => ig(t, s, n, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
  });
  function dk(t, e) {
    return new lk({ type: "catch", innerType: t, catchValue: typeof e == "function" ? e : ph(e) });
  }
  const Ba = M("ZodPipe", (t, e) => {
    Yo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => og(t, s, n, r), t.in = e.in, t.out = e.out;
  });
  function Ka(t, e) {
    return new Ba({ type: "pipe", in: t, out: e });
  }
  const uk = M("ZodPreprocess", (t, e) => {
    Ba.init(t, e), Ef.init(t, e);
  }), hk = M("ZodReadonly", (t, e) => {
    Af.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => ag(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function pk(t) {
    return new hk({ type: "readonly", innerType: t });
  }
  const fk = M("ZodLazy", (t, e) => {
    Tf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => cg(t, s, n, r), t.unwrap = () => t._zod.def.getter();
  });
  function mk(t) {
    return new fk({ type: "lazy", getter: t });
  }
  const gk = M("ZodCustom", (t, e) => {
    If.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Gm(t, s, n, r);
  });
  function kk(t, e = {}) {
    return Im(gk, t, e);
  }
  function bk(t, e) {
    return Mm(t, e);
  }
  function qa(t, e) {
    return new uk({ type: "pipe", in: La(t), out: e });
  }
  const Pr = { custom: "custom" }, vk = { hr: { Language: "Jezik", Start: "Započni", Next: "Dalje", Back: "Natrag", Check: "Provjeri", "Correct!": "Točno!", "Not quite": "Nije baš", Review: "Ponavljanje", Menu: "Izbornik", "Main Menu": "Glavni izbornik", Score: "Bodovi", Quit: "Izlaz" }, de: { Language: "Sprache", Start: "Starten", Next: "Weiter", Back: "Zurück", Check: "Prüfen", "Correct!": "Richtig!", "Not quite": "Nicht ganz", Review: "Wiederholen", Menu: "Menü", "Main Menu": "Hauptmenü", Score: "Punkte", Quit: "Beenden" } }, Ga = [["en", "English", "English", "latin"], ["hr", "Croatian", "Hrvatski", "latin"], ["ko", "Korean", "한국어", "hangul"], ["ja", "Japanese", "日本語", "kana"], ["ar", "Arabic", "العربية", "arabic", true], ["bg", "Bulgarian", "Български", "cyrillic"], ["cs", "Czech", "Čeština", "latin"], ["da", "Danish", "Dansk", "latin"], ["de", "German", "Deutsch", "latin"], ["el", "Greek", "Ελληνικά", "greek"], ["es", "Spanish", "Español", "latin"], ["et", "Estonian", "Eesti", "latin"], ["fi", "Finnish", "Suomi", "latin"], ["fr", "French", "Français", "latin"], ["hi", "Hindi", "हिन्दी", "devanagari"], ["hu", "Hungarian", "Magyar", "latin"], ["id", "Indonesian", "Bahasa Indonesia", "latin"], ["it", "Italian", "Italiano", "latin"], ["lt", "Lithuanian", "Lietuvių", "latin"], ["lv", "Latvian", "Latviešu", "latin"], ["nl", "Dutch", "Nederlands", "latin"], ["pl", "Polish", "Polski", "latin"], ["pt", "Portuguese", "Português", "latin"], ["ro", "Romanian", "Română", "latin"], ["ru", "Russian", "Русский", "cyrillic"], ["sk", "Slovak", "Slovenčina", "latin"], ["sl", "Slovenian", "Slovenščina", "latin"], ["sv", "Swedish", "Svenska", "latin"], ["tr", "Turkish", "Türkçe", "latin"], ["uk", "Ukrainian", "Українська", "cyrillic"], ["vi", "Vietnamese", "Tiếng Việt", "latin"], ["sr", "Serbian", "Српски", "cyrillic"], ["bs", "Bosnian", "Bosanski", "latin"], ["no", "Norwegian", "Norsk", "latin"], ["he", "Hebrew", "עברית", "hebrew", true], ["fa", "Persian", "فارسی", "arabic", true], ["zh", "Chinese", "中文", "han"]].map(([t, e, s, n, r]) => {
    const i = { code: t, name: e, native: s, script: n };
    r && (i.rtl = true);
    const o = vk[t];
    return o && (i.ui = { ...o }), i;
  }), Wa = /* @__PURE__ */ new Map();
  function wk() {
    Wa.clear();
    for (const t of Ga) Wa.set(t.code, t);
  }
  wk(), Ga.map((t) => t.code);
  const tt = E().regex(/^[a-z]{2,3}(-[a-z0-9]{2,8})?$/, "a language code such as en, hr, de or pt-br"), yk = ["comfy", "pixel-studio-draw", "hand", "flow"], Sk = ["builtin", "pixel-studio"], $k = ["comfy", "chiptune", "flow"], zk = ["auto", "gemini", "vibetts", "comfy"], _k = ["nes", "gb", "genesis", "snes", "pce", "ps1", "dreamcast"], jk = ["none", "ordered", "floyd"], xk = B({ width: L().int().min(16).max(512).optional(), height: L().int().min(16).max(512).optional(), dither: Y(jk).optional(), outline: J().optional() });
  function Ek(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) return t;
    const e = (n) => typeof n == "string" && (n.startsWith("gemini:") || n.startsWith("windows:")), s = {};
    for (const [n, r] of Object.entries(t)) {
      if (typeof r == "string") {
        e(r) && (s[n] = { en: r });
        continue;
      }
      if (!r || typeof r != "object" || Array.isArray(r)) continue;
      const i = Object.fromEntries(Object.entries(r).filter(([, o]) => e(o)));
      Object.keys(i).length > 0 && (s[n] = i);
    }
    return s;
  }
  function Ak(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) return t;
    const e = { ...t }, s = e.styles && typeof e.styles == "object" && !Array.isArray(e.styles) ? { ...e.styles } : {}, n = e.flowStyles;
    if (n && typeof n == "object" && !Array.isArray(n)) for (const [r, i] of Object.entries(n)) {
      const o = typeof s[r] == "string" ? s[r].trim() : "";
      typeof i == "string" && i.trim() && !o && (s[r] = i);
    }
    return e.styles = s, delete e.flowStyles, delete e.englishEngine, e.provider === "flow" && (e.provider = "gemini"), e;
  }
  const Ha = "omnivoice", ln = B({ slug: E(), primaryLang: tt, editions: N(tt).default([]), theme: E().nullable().default(null), models: Q(E(), E()).default({}), art: B({ enabled: J().default(true), style: Y(["illustrated", "pixel"]).default("illustrated"), generator: E().default("qwen-image-2.1"), editor: E().default("qwen-image-2.1-edit"), palette: E().optional(), review: J().default(true), stylePrompt: E().optional(), bgRemoval: Y(["birefnet", "qwen-edit", "key"]).default("birefnet"), provider: Y(yk).optional(), flowModel: E().optional(), flowProject: E().optional(), pixelProvider: Y(Sk).optional(), pixel: xk.optional() }).default({ enabled: true, style: "illustrated", generator: "qwen-image-2.1", editor: "qwen-image-2.1-edit", review: true, bgRemoval: "birefnet" }), music: B({ enabled: J().default(true), engine: E().default("ace-step-v1-instrumental"), tracks: L().int().nonnegative().default(3), provider: Y($k).optional(), flowCredits: J().default(false), chip: Y(_k).optional() }).default({ enabled: true, engine: "ace-step-v1-instrumental", tracks: 3, flowCredits: false }), voice: qa(Ak, B({ enabled: J().optional(), langs: N(tt).default([]), provider: Y(zk).default("auto"), narration: J().optional(), passages: J().default(false), listening: J().default(true), listeningPerUnit: L().int().min(0).max(12).default(3), localVoices: Q(E(), E()).default({}), engine: E().default(Ha), engines: Q(E(), E()).default({}), styles: Q(E(), E()).default({}), refTexts: Q(E(), E()).default({}), voices: qa(Ek, Q(E(), Q(tt, E()))).default({}) })).default({ langs: [], provider: "auto", passages: false, listening: true, listeningPerUnit: 3, localVoices: {}, engine: Ha, engines: {}, styles: {}, refTexts: {}, voices: {} }), sound: B({ ambienceEngine: E().default("ace-step-v1-instrumental"), sfxEngine: E().optional() }).default({ ambienceEngine: "ace-step-v1-instrumental" }) });
  B({ art: ln.shape.art, music: ln.shape.music, voice: ln.shape.voice, sound: ln.shape.sound });
  const Tk = /* @__PURE__ */ new Set(["music", "sfx", "ambience"]), Ik = "voice";
  [...Tk];
  const Mk = Y(["background", "sheet", "sprite", "cover", "cg", "illustration", "tileset", "music", "sfx", "ambience", "voiceRef", "voice"]), Ok = B({ n: L().int().positive(), file: E(), createdAt: E(), seed: L().nullable(), engine: E(), prompt: E(), loopStartSec: L().nullable().optional(), loopEndSec: L().nullable().optional(), remote: B({ provider: Y(["flow", "flow-music"]), id: E(), project: E().optional() }).optional(), songFile: E().optional(), nativeFile: E().optional(), warnings: N(E()).optional(), custom: J().optional() }), Nk = B({ id: E(), kind: Mk, prompt: E(), negative: E().optional(), engine: E(), seed: L().nullable(), size: B({ w: L().int().positive(), h: L().int().positive() }).nullable(), refs: N(E()).optional(), versions: N(Ok), selected: L().int().positive().nullable(), source: Y(["generated", "custom"]), customFile: E().optional(), locked: J(), promptByHand: J().optional(), alt: E().optional(), style: Y(["illustrated", "pixel"]).optional(), provider: Y(["comfy", "flow"]).optional(), fit: B({ w: L().int().positive(), h: L().int().positive() }).optional(), voice: B({ lang: tt, key: E(), role: Y(["listening", "narration", "passage"]), text: E(), hash: E(), provider: E().optional(), imported: J().optional() }).optional(), placeholder: B({ file: E(), reason: E() }).optional(), review: B({ status: Y(["pending", "approved", "rejected"]), note: E().optional(), version: L().int().positive().optional(), rounds: L().int().nonnegative().optional() }).optional() });
  B({ assets: N(Nk) });
  const Pk = 1, P = E().regex(/^[A-Za-z0-9][A-Za-z0-9_-]*$/, "an id: letters, digits, - and _"), C = E().regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/, "a text key: letters, digits, . : - and _"), Rk = ["remember", "understand", "apply", "analyze", "evaluate", "create"], Rr = ["A1", "A2", "B1", "B2", "C1", "C2"], Dk = ["ignore", "warn", "strict"];
  U({ schema: se(1).default(1), lang: tt, strings: Q(C, E()), accepted: Q(C, N(E().min(1)).min(1)).optional() });
  const ye = { id: P, objective: P, prompt: C, explanation: C, didYouKnow: C.optional(), hint: C.optional(), asset: P.optional(), difficulty: L().int().min(1).max(5).default(3), tags: N(E()).default([]), extensions: Q(E(), Et()).optional() }, Dr = U({ id: P, text: C, why: C.optional() }), Va = U({ ...ye, kind: se("mcq"), options: N(Dr).min(2).max(8), answer: P, shuffle: J().default(true) }), Ya = U({ ...ye, kind: se("true-false"), answer: J(), why: C.optional() }), Ja = U({ ...ye, kind: se("multi-select"), options: N(Dr).min(2).max(10), answers: N(P).min(1), shuffle: J().default(true) }), Qa = U({ ...ye, kind: se("cloze"), text: C, gaps: N(U({ id: P, answer: C, bank: N(C).optional() })).min(1), strictDiacritics: J().optional() }), Xa = U({ ...ye, kind: se("conjugation"), verb: C, tense: P, forms: N(U({ person: P, label: C, answer: C, given: J().default(false) })).min(2).max(7), ask: L().int().min(1).optional(), strictDiacritics: J().optional() }), ec = U({ ...ye, kind: se("typed"), answer: C, strictDiacritics: J().optional() }), tc = U({ ...ye, kind: se("match-pairs"), pairs: N(U({ id: P, left: C, right: C })).min(2).max(8) }), sc = U({ ...ye, kind: se("order"), items: N(U({ id: P, text: C, when: C.optional() })).min(2).max(10), timeline: J().default(false) }), nc = U({ ...ye, kind: se("sort-groups"), groups: N(U({ id: P, title: C })).min(2).max(5), items: N(U({ id: P, text: C, group: P, why: C.optional() })).min(2).max(12) }), Lk = Mr("type", [U({ type: se("circle"), cx: L(), cy: L(), r: L().positive() }), U({ type: se("rect"), x: L(), y: L(), w: L().positive(), h: L().positive() }), U({ type: se("poly"), points: N(At([L(), L()])).min(3) })]), rc = U({ ...ye, kind: se("hotspot"), asset: P, width: L().positive(), height: L().positive(), regions: N(U({ id: P, label: C, shape: Lk, why: C.optional() })).min(2), answer: P }), ic = U({ ...ye, kind: se("listening"), asset: P, transcript: C, mode: Y(["choose", "type"]), options: N(Dr).min(2).max(8).optional(), answer: E().min(1), shuffle: J().default(true), strictDiacritics: J().optional() }).superRefine((t, e) => {
    t.mode === "choose" && !t.options && e.addIssue({ code: "custom", path: ["options"], message: "a choose listening item needs options" }), t.mode === "type" && t.options && e.addIssue({ code: "custom", path: ["options"], message: "a type listening item has no options" });
  }), oc = U({ ...ye, kind: se("flashcard"), back: C, backAsset: P.optional() }), ac = U({ ...ye, kind: se("crossword"), words: N(U({ id: P, answer: C, clue: C })).min(3).max(20), seed: L().int(), maxSize: L().int().min(5).max(30).default(15) }), cc = U({ ...ye, kind: se("word-search"), words: N(U({ id: P, answer: C })).min(2).max(20), seed: L().int(), size: L().int().min(5).max(30).optional(), directions: Y(["forward", "diagonal", "all"]).default("diagonal") });
  Mr("kind", [Va, Ya, Ja, Qa, ec, tc, sc, nc, rc, ic, oc, ac, cc, Xa]);
  const Ck = Yg({ ...ye, kind: E().min(1) }), Zk = U({ id: P, title: C, summary: C.optional(), requires: N(P).default([]) }), Uk = U({ id: P, unit: P, bloom: Y(Rk), text: C, facts: N(P).default([]) }), Fk = U({ id: P, kind: Y(["image", "audio"]), file: E().min(1), alt: C }), Bk = U({ id: P, on: E().min(1), asset: P, loop: J().default(false), volume: L().min(0).max(1).default(1) }), Kk = U({ id: P, title: C, body: C, citations: N(P).default([]), asset: P.optional(), related: N(P).default([]), unit: P.optional() }), qk = U({ id: P, claim: C.optional(), source: E().min(1), url: Ag().optional() });
  U({ schema: se(Pk), id: P, slug: E().regex(/^[a-z0-9][a-z0-9-]*$/, "a slug: lower-case letters, digits and -"), sourceLang: tt, languages: N(tt).min(1), targetLang: tt.optional(), subject: E().min(1), audience: E().min(1), cefr: Y(Rr).optional(), matching: U({ diacritics: Y(Dk).default("ignore"), typos: J().default(true) }).default({ diacritics: "ignore", typos: true }), units: N(Zk).min(1), objectives: N(Uk).min(1), items: N(Ck), shells: U({ enabled: N(E().min(1)).default(["quiz-arena"]), config: Q(E(), Q(E(), Et())).default({}) }).default({ enabled: ["quiz-arena"], config: {} }), assets: N(Fk).default([]), cues: N(Bk).default([]), encyclopedia: U({ articles: N(Kk).default([]) }).default({ articles: [] }), factbase: N(qk).default([]), extensions: Q(E(), Et()).default({}) });
  const dn = (t, e) => t.objectives.filter((s) => s.unit === e), lc = (t, e) => t.items.filter((s) => s.objective === e);
  function Gk(t, e) {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }
  function Tt(t) {
    const e = [], s = /* @__PURE__ */ new Set(), n = new Set(t.map((i) => i.id));
    let r = true;
    for (; r; ) {
      r = false;
      for (const i of t) s.has(i.id) || i.requires.every((o) => s.has(o) || !n.has(o)) && (e.push(i.id), s.add(i.id), r = true);
    }
    return e;
  }
  function Lr(t) {
    return t.replace(/đ/g, "d").replace(/Đ/g, "D").replace(/ß/g, "ss").replace(/ł/g, "l").replace(/Ł/g, "L").replace(/æ/g, "ae").replace(/Æ/g, "AE").replace(/œ/g, "oe").replace(/Œ/g, "OE").replace(/ø/g, "o").replace(/Ø/g, "O").normalize("NFD").replace(new RegExp("\\p{M}+", "gu"), "");
  }
  function Pe(t, e = {}) {
    let s = t.normalize("NFKC").toLowerCase();
    return s = s.replace(/['’‘`´]/g, ""), s = s.replace(/[^\p{L}\p{N}\p{M}]+/gu, " "), e.fold && (s = Lr(s).replace(/dj/g, "d")), s.replace(/\s+/g, " ").trim();
  }
  function kt(t) {
    return Lr(t.normalize("NFKC")).toUpperCase().replace(/[^\p{L}\p{N}]+/gu, "");
  }
  function dc(t, e, s = 1 / 0) {
    if (t === e) return 0;
    const n = Array.from(t), r = Array.from(e);
    if (Math.abs(n.length - r.length) > s) return s + 1;
    if (n.length === 0) return r.length;
    if (r.length === 0) return n.length;
    let i = Array.from({ length: r.length + 1 }, (o, a) => a);
    for (let o = 1; o <= n.length; o++) {
      const a = [o];
      let c = o;
      for (let l = 1; l <= r.length; l++) {
        const d = Math.min(i[l] + 1, a[l - 1] + 1, i[l - 1] + (n[o - 1] === r[l - 1] ? 0 : 1));
        a.push(d), d < c && (c = d);
      }
      if (c > s) return s + 1;
      i = a;
    }
    return i[r.length];
  }
  function Wk(t) {
    const e = (r) => r.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue"), s = (r) => r.replace(/ß/g, "ss").replace(/ẞ/g, "SS"), n = /* @__PURE__ */ new Set([e(s(t)), s(t), e(t)]);
    return n.delete(t), [...n];
  }
  const uc = (t) => t.normalize("NFKC").replace(/['’‘`´]/g, "").split(/[^\p{L}\p{N}\p{M}]+/u).filter(Boolean), hc = (t) => t[0] !== void 0 && t[0] !== t[0].toLowerCase();
  function pc(t, e) {
    const s = uc(t), n = uc(e);
    return s.length !== n.length ? false : n.some((r, i) => (i > 0 || n.length === 1) && hc(r) && !hc(s[i]));
  }
  function Hk(t, e, s = {}) {
    var _a3, _b3, _c2;
    const n = (_a3 = s.diacritics) != null ? _a3 : "ignore", r = s.typos !== false, i = (_b3 = s.minTypoLength) != null ? _b3 : 4, o = (_c2 = e[0]) != null ? _c2 : null, a = s.lang === "de", c = (k, b) => ({ correct: false, exact: false, typo: false, diacritics: false, matched: b, canonical: o, distance: k }), l = Pe(t);
    if (!l) return c(1 / 0, null);
    const d = Pe(t, { fold: true });
    let h = null, p = 1 / 0, f = null, m = null, g = null;
    for (const k of e) {
      const b = Pe(k);
      if (!b) continue;
      if (b === l) return { correct: true, exact: true, typo: false, diacritics: false, matched: k, canonical: o, distance: 0, ...a && pc(t, k) ? { caps: true } : {} };
      a && g === null && Wk(k).some((y) => Pe(y) === l) && (g = k);
      const v = Pe(k, { fold: true });
      if (v === d) {
        f != null ? f : f = k;
        continue;
      }
      const w = dc(d, v, 2);
      if (w < p && (p = w, h = k), r && v.replace(/ /g, "").length >= i) {
        const y = n === "strict" ? dc(l, b, 1) : w;
        y <= 1 && (!m || y < m.d) && (m = { a: k, d: y });
      }
    }
    return g !== null ? { correct: true, exact: false, typo: false, diacritics: false, matched: g, canonical: o, distance: 0, translit: true, ...pc(t, g) ? { caps: true } : {} } : f !== null ? n === "strict" ? { correct: false, exact: false, typo: false, diacritics: true, matched: f, canonical: o, distance: 0 } : { correct: true, exact: false, typo: false, diacritics: n === "warn", matched: f, canonical: o, distance: 0 } : m ? { correct: true, exact: false, typo: true, diacritics: false, matched: m.a, canonical: o, distance: m.d } : c(p, h);
  }
  function Vk(t, e, s) {
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
      const n = [...e], r = [];
      for (let i = 0; i < s; i++) {
        const o = this.randint(0, n.length - 1);
        r.push(n[o]), n.splice(o, 1);
      }
      return r;
    }
    shuffle(e) {
      for (let s = e.length - 1; s > 0; s--) {
        const n = Math.floor(this.next() * (s + 1)), r = e[s];
        e[s] = e[n], e[n] = r;
      }
      return e;
    }
  }
  function Kt(t, ...e) {
    return new st([t, ...e].join(":"));
  }
  function ms(t, e) {
    const s = e.shuffle([...t]);
    return s.length > 1 && s.every((n, r) => n === t[r]) && s.push(s.shift()), s;
  }
  const nt = (t, e) => "".concat(t, ",").concat(e);
  function Yk(t, e, s, n, r) {
    const i = r === "down" ? 1 : 0, o = r === "across" ? 1 : 0;
    if (t.has(nt(s - i, n - o)) || t.has(nt(s + e.length * i, n + e.length * o))) return -1;
    let a = 0;
    for (let c = 0; c < e.length; c++) {
      const l = s + c * i, d = n + c * o, h = t.get(nt(l, d));
      if (h) {
        if (h.ch !== e[c] || h[r]) return -1;
        a++;
      } else if (t.has(nt(l + o, d + i)) || t.has(nt(l - o, d - i))) return -1;
    }
    return a;
  }
  function Cr(t, e, s, n, r) {
    const i = r === "down" ? 1 : 0, o = r === "across" ? 1 : 0;
    e.forEach((a, c) => {
      var _a3;
      const l = nt(s + c * i, n + c * o), d = (_a3 = t.get(l)) != null ? _a3 : { ch: a, across: false, down: false };
      d[r] = true, t.set(l, d);
    });
  }
  function Zr(t) {
    let e = 1 / 0, s = -1 / 0, n = 1 / 0, r = -1 / 0;
    for (const i of t.keys()) {
      const [o, a] = i.split(",").map(Number);
      e = Math.min(e, o), s = Math.max(s, o), n = Math.min(n, a), r = Math.max(r, a);
    }
    return { r0: e, r1: s, c0: n, c1: r };
  }
  function Jk(t, e, s, n) {
    const r = Kt(e, "crossword", s), i = [...t];
    s > 0 ? r.shuffle(i) : i.sort((p, f) => f.letters.length - p.letters.length || p.id.localeCompare(f.id));
    const o = /* @__PURE__ */ new Map(), a = [];
    let c = i, l = true, d = true;
    for (; c.length > 0 && d; ) {
      d = false;
      const p = [];
      for (const f of c) {
        const m = Array.from(f.letters);
        if (l) {
          Cr(o, m, 0, 0, "across"), a.push({ id: f.id, letters: f.letters, r: 0, c: 0, dir: "across" }), l = false, d = true;
          continue;
        }
        const g = [];
        for (const b of a) {
          const v = Array.from(b.letters), w = b.dir === "across" ? "down" : "across";
          for (let y = 0; y < v.length; y++) for (let $ = 0; $ < m.length; $++) {
            if (v[y] !== m[$]) continue;
            const x = b.dir === "across" ? b.r - $ : b.r + y, z = b.dir === "across" ? b.c + y : b.c - $, _ = Yk(o, m, x, z, w);
            if (_ < 1) continue;
            const O = w === "down" ? 1 : 0, R = w === "across" ? 1 : 0, S = Zr(o), A = Math.min(S.r0, x), j = Math.max(S.r1, x + (m.length - 1) * O), T = Math.min(S.c0, z), D = Math.max(S.c1, z + (m.length - 1) * R);
            j - A + 1 > n || D - T + 1 > n || g.push({ r: x, c: z, dir: w, n: _, area: (j - A + 1) * (D - T + 1) });
          }
        }
        if (g.length === 0) {
          p.push(f);
          continue;
        }
        r.shuffle(g), g.sort((b, v) => v.n - b.n || b.area - v.area);
        const k = g[0];
        Cr(o, m, k.r, k.c, k.dir), a.push({ id: f.id, letters: f.letters, r: k.r, c: k.c, dir: k.dir }), d = true;
      }
      c = p;
    }
    const h = o.size > 0 ? Zr(o) : { r0: 0, r1: -1, c0: 0, c1: -1 };
    return { placed: a, unplaced: c.map((p) => p.id), area: (h.r1 - h.r0 + 1) * (h.c1 - h.c0 + 1) };
  }
  function Qk(t, e, s = {}) {
    var _a3, _b3;
    const n = (_a3 = s.maxSize) != null ? _a3 : 15, r = [], i = [], o = /* @__PURE__ */ new Set();
    for (const k of t) {
      const b = kt(k.answer);
      b.length < 2 || o.has(k.id) || b.length > n ? i.push(k.id) : r.push({ id: k.id, letters: b }), o.add(k.id);
    }
    let a = null;
    const c = Math.max(1, (_b3 = s.attempts) != null ? _b3 : 24);
    for (let k = 0; k < c && r.length > 0; k++) {
      const b = Jk(r, e, k, n);
      if ((!a || b.unplaced.length < a.unplaced.length || b.unplaced.length === a.unplaced.length && b.area < a.area) && (a = b), a.unplaced.length === 0 && k >= 8) break;
    }
    if (!a) return { width: 0, height: 0, cells: [], entries: [], unplaced: i };
    const l = /* @__PURE__ */ new Map();
    for (const k of a.placed) Cr(l, Array.from(k.letters), k.r, k.c, k.dir);
    const d = Zr(l), h = d.r1 - d.r0 + 1, p = d.c1 - d.c0 + 1, f = Array.from({ length: h }, () => Array(p).fill(null));
    for (const [k, b] of l) {
      const [v, w] = k.split(",").map(Number);
      f[v - d.r0][w - d.c0] = b.ch;
    }
    const m = a.placed.map((k) => ({ id: k.id, answer: k.letters, row: k.r - d.r0, col: k.c - d.c0, dir: k.dir, number: 0, length: Array.from(k.letters).length }));
    let g = 0;
    for (let k = 0; k < h; k++) for (let b = 0; b < p; b++) {
      const v = m.filter((w) => w.row === k && w.col === b);
      if (v.length !== 0) {
        g++;
        for (const w of v) w.number = g;
      }
    }
    return m.sort((k, b) => k.number - b.number || (k.dir === "across" ? -1 : 1)), { width: p, height: h, cells: f, entries: m, unplaced: [...i, ...a.unplaced] };
  }
  function Xk(t, e) {
    const s = [], n = new Map(t.entries.map((a) => [a.id, a]));
    for (const a of e) {
      const c = kt(a.answer), l = n.get(a.id);
      if (!l) {
        t.unplaced.includes(a.id) || s.push("word ".concat(a.id, " is neither placed nor reported unplaced"));
        continue;
      }
      l.answer !== c && s.push("entry ".concat(a.id, " has other letters than its word"));
    }
    const r = (a, c) => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.cells[a]) == null ? void 0 : _a3[c]) != null ? _b3 : null;
    }, i = /* @__PURE__ */ new Set();
    for (const a of t.entries) for (let c = 0; c < a.length; c++) {
      const l = a.row + (a.dir === "down" ? c : 0), d = a.col + (a.dir === "across" ? c : 0);
      r(l, d) !== Array.from(a.answer)[c] && s.push("entry ".concat(a.id, " does not match the grid at ").concat(l, ",").concat(d)), i.add(nt(l, d));
    }
    for (let a = 0; a < t.height; a++) for (let c = 0; c < t.width; c++) r(a, c) !== null && !i.has(nt(a, c)) && s.push("cell ".concat(a, ",").concat(c, " belongs to no entry"));
    const o = (a, c, l, d) => t.entries.some((h) => h.row === a && h.col === c && h.dir === l && h.length === d);
    for (let a = 0; a < t.height; a++) for (let c = 0; c < t.width; c++) if (r(a, c) !== null) for (const l of ["across", "down"]) {
      const d = l === "down" ? a - 1 : a, h = l === "across" ? c - 1 : c;
      if (r(d, h) !== null) continue;
      let p = 0;
      for (; r(a + (l === "down" ? p : 0), c + (l === "across" ? p : 0)) !== null; ) p++;
      p >= 2 && !o(a, c, l, p) && s.push("a run of ".concat(p, " letters at ").concat(a, ",").concat(c, " (").concat(l, ") is not an entry"));
    }
    if (t.entries.length > 1) {
      const a = /* @__PURE__ */ new Map(), c = (d) => {
        let h = d;
        for (; a.get(h) !== h; ) h = a.get(h);
        return h;
      };
      for (const d of t.entries) a.set(d.id, d.id);
      const l = /* @__PURE__ */ new Map();
      for (const d of t.entries) for (let h = 0; h < d.length; h++) {
        const p = nt(d.row + (d.dir === "down" ? h : 0), d.col + (d.dir === "across" ? h : 0)), f = l.get(p);
        f !== void 0 ? a.set(c(d.id), c(f)) : l.set(p, d.id);
      }
      new Set(t.entries.map((d) => c(d.id))).size > 1 && s.push("the crossword is not one connected piece");
    }
    return s;
  }
  function eb(t) {
    return { across: t.entries.filter((e) => e.dir === "across"), down: t.entries.filter((e) => e.dir === "down") };
  }
  const un = ["again", "hard", "good", "easy"], fc = (t) => typeof t == "string" && un.includes(t), Ur = 864e5, tb = 1.3, sb = 2.5, nb = { again: 2, hard: 3, good: 4, easy: 5 }, mc = (t) => typeof t == "number" ? t : t.getTime(), rb = (t) => Math.round(t * 100) / 100;
  function gc(t, e = 0) {
    return { id: t, ease: sb, interval: 0, reps: 0, lapses: 0, due: mc(e), last: null };
  }
  function kc(t, e, s) {
    const n = mc(s), r = nb[e], i = Math.max(tb, rb(t.ease + (0.1 - (5 - r) * (0.08 + (5 - r) * 0.02))));
    if (r < 3) return { ...t, ease: i, interval: 1, reps: 0, lapses: t.lapses + 1, due: n + Ur, last: n };
    const o = t.reps + 1, a = o === 1 ? 1 : o === 2 ? 6 : Math.round(t.interval * i);
    return { ...t, ease: i, interval: a, reps: o, due: n + a * Ur, last: n };
  }
  function ib(t) {
    return t.last === null ? "new" : t.reps < 3 ? "learning" : t.interval >= 21 ? "mature" : "young";
  }
  const bc = () => ({ answered: 0, pending: [], misses: {} }), ob = (t) => Math.min(4, 1 + Math.max(1, t));
  function ab(t, e, s) {
    var _a3;
    const n = t.answered + 1, r = t.pending.filter((o) => o.id !== e);
    if (s !== "again") return { answered: n, pending: r, misses: t.misses };
    const i = ((_a3 = t.misses[e]) != null ? _a3 : 0) + 1;
    return { answered: n, pending: [...r, { id: e, dueAt: n + ob(i), misses: i }], misses: { ...t.misses, [e]: i } };
  }
  const cb = { forward: [[0, 1], [1, 0]], diagonal: [[0, 1], [1, 0], [1, 1], [-1, 1]], all: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]] };
  function lb(t) {
    const e = t.reduce((s, n) => s + n, 0);
    return Math.max(6, ...t, Math.ceil(Math.sqrt(e * 2.4)));
  }
  function db(t, e, s, n, r) {
    const i = Kt(n, "wordsearch", e, r), o = Array.from({ length: e }, () => Array(e).fill(null)), a = [], c = [], l = [...t].sort((d, h) => h.letters.length - d.letters.length || d.id.localeCompare(h.id));
    for (const d of l) {
      let h = false;
      for (let p = 0; p < 400 && !h; p++) {
        const [f, m] = i.choice(s), g = i.randrange(e), k = i.randrange(e), b = g + f * (d.letters.length - 1), v = k + m * (d.letters.length - 1);
        if (b < 0 || b >= e || v < 0 || v >= e) continue;
        let w = true;
        for (let y = 0; y < d.letters.length && w; y++) {
          const $ = o[g + f * y][k + m * y];
          $ !== null && $ !== d.letters[y] && (w = false);
        }
        w && (d.letters.forEach((y, $) => {
          o[g + f * $][k + m * $] = y;
        }), a.push({ id: d.id, answer: d.letters.join(""), row: g, col: k, dr: f, dc: m }), h = true);
      }
      h || c.push(d.id);
    }
    return { cells: o, placements: a, unplaced: c };
  }
  function ub(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = cb[(_a3 = s.directions) != null ? _a3 : "diagonal"], r = [], i = [], o = /* @__PURE__ */ new Set();
    for (const k of t) {
      const b = Array.from(kt(k.answer));
      b.length < 2 || o.has(k.id) ? i.push(k.id) : r.push({ id: k.id, letters: b }), o.add(k.id);
    }
    const a = (_b3 = s.size) != null ? _b3 : lb(r.map((k) => k.letters.length)), c = s.size ? [s.size] : [a, a + 1, a + 2, a + 3];
    let l = null, d = a;
    for (const k of c) {
      for (let b = 0; b < 12; b++) {
        const v = db(r.filter((y) => y.letters.length <= k), k, n, e, b), w = [...v.unplaced, ...r.filter((y) => y.letters.length > k).map((y) => y.id)];
        if ((!l || w.length < l.unplaced.length) && (l = { ...v, unplaced: w }, d = k), l.unplaced.length === 0) break;
      }
      if (l && l.unplaced.length === 0) break;
    }
    const h = d, p = (_c2 = l == null ? void 0 : l.cells) != null ? _c2 : Array.from({ length: h }, () => Array(h).fill(null)), f = r.flatMap((k) => k.letters), m = Kt(e, "wordsearch-fill", h), g = p.map((k) => k.map((b) => b != null ? b : f.length > 0 ? m.choice(f) : "A"));
    return { size: h, cells: g, placements: (_d2 = l == null ? void 0 : l.placements) != null ? _d2 : [], unplaced: [...i, ...(_e2 = l == null ? void 0 : l.unplaced) != null ? _e2 : []] };
  }
  function vc(t, e) {
    var _a3;
    const [s, n] = e.start, [r, i] = e.end, o = Math.sign(r - s), a = Math.sign(i - n), c = Math.max(Math.abs(r - s), Math.abs(i - n)) + 1;
    if (Math.abs(r - s) !== 0 && Math.abs(i - n) !== 0 && Math.abs(r - s) !== Math.abs(i - n)) return null;
    let l = "";
    for (let d = 0; d < c; d++) {
      const h = (_a3 = t.cells[s + o * d]) == null ? void 0 : _a3[n + a * d];
      if (h === void 0) return null;
      l += h;
    }
    return l;
  }
  function wc(t) {
    const e = Array.from(t.answer).length - 1;
    return { start: [t.row, t.col], end: [t.row + t.dr * e, t.col + t.dc * e] };
  }
  function hb(t, e) {
    const s = [];
    (t.cells.length !== t.size || t.cells.some((n) => n.length !== t.size)) && s.push("the grid is not square");
    for (const n of e) {
      const r = t.placements.find((i) => i.id === n.id);
      if (!r) {
        t.unplaced.includes(n.id) || s.push("word ".concat(n.id, " is neither placed nor reported unplaced"));
        continue;
      }
      vc(t, wc(r)) !== kt(n.answer) && s.push("word ".concat(n.id, " does not read back from its placement"));
    }
    for (const n of t.cells) for (const r of n) new RegExp("^\\p{L}$", "u").test(r) || s.push("a cell holds ".concat(JSON.stringify(r), ", not a letter"));
    return s;
  }
  const It = (t) => typeof t == "object" && t !== null && !Array.isArray(t), yc = (t) => Array.isArray(t) && t.every((e) => typeof e == "string"), ve = (t) => ({ correct: false, score: 0, expected: t, invalid: true }), Mt = (t, e, s, n) => {
    const r = e === 0 ? 0 : t / e, i = e > 0 && t === e;
    return { correct: i, partial: !i && t > 0, score: r, expected: s, ...n ? { detail: n } : {} };
  };
  function pb(t, e) {
    if (typeof e != "string") return ve(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function fb(t, e) {
    if (typeof e != "boolean") return ve(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function mb(t, e) {
    const s = [...t.answers].sort();
    if (!yc(e)) return ve(s);
    const n = new Set(e), r = s.filter((c) => n.has(c)).length, i = [...n].filter((c) => !t.answers.includes(c)).length, o = r === s.length && i === 0, a = Math.max(0, (r - i) / s.length);
    return { correct: o, partial: !o && a > 0, score: a, expected: s };
  }
  function hn(t, e, s, n, r = false) {
    const i = s.text.accepted(e), o = Hk(t, i, { diacritics: Vk(n, s.diacritics, s.lang), typos: r ? false : s.typos, lang: s.lang });
    return { correct: o.correct, score: o.correct ? 1 : 0, expected: o.canonical, ...o.typo ? { typo: true } : {}, ...o.diacritics ? { diacritics: true } : {}, ...o.translit ? { translit: true } : {}, ...o.caps ? { caps: true } : {} };
  }
  function gb(t, e, s) {
    var _a3;
    return typeof e != "string" ? ve((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : hn(e, t.answer, s, t.strictDiacritics);
  }
  function kb(t, e, s) {
    var _a3;
    const n = Object.fromEntries(t.gaps.map((d) => {
      var _a4;
      return [d.id, (_a4 = s.text.canonical(d.answer)) != null ? _a4 : null];
    }));
    if (!It(e)) return ve(n);
    const r = {};
    let i = false, o = false, a = false, c = false;
    for (const d of t.gaps) {
      const h = e[d.id], p = typeof h == "string" ? hn(h, d.answer, s, t.strictDiacritics, !!((_a3 = d.bank) == null ? void 0 : _a3.length)) : { correct: false };
      r[d.id] = p.correct, "typo" in p && p.typo && (i = true), "diacritics" in p && p.diacritics && (o = true), "translit" in p && p.translit && (a = true), "caps" in p && p.caps && (c = true);
    }
    return { ...Mt(Object.values(r).filter(Boolean).length, t.gaps.length, n, r), ...i ? { typo: true } : {}, ...o ? { diacritics: true } : {}, ...a ? { translit: true } : {}, ...c ? { caps: true } : {} };
  }
  function bb(t) {
    const e = t.forms.filter((s) => !s.given);
    return t.ask === void 0 ? e : e.slice(0, t.ask);
  }
  function vb(t, e, s) {
    var _a3;
    const n = Object.fromEntries(t.forms.map((p) => {
      var _a4;
      return [p.person, (_a4 = s.text.canonical(p.answer)) != null ? _a4 : null];
    }));
    if (!It(e)) return ve(n);
    const r = t.forms.filter((p) => !p.given), i = r.filter((p) => typeof e[p.person] == "string");
    if (i.length === 0 || i.length !== Math.min((_a3 = t.ask) != null ? _a3 : r.length, r.length)) return ve(n);
    const o = { ...s, typos: false }, a = {};
    let c = false, l = false, d = false;
    for (const p of i) {
      const f = hn(e[p.person], p.answer, o, t.strictDiacritics);
      a[p.person] = f.correct, f.correct && f.diacritics && (c = true), f.translit && (l = true), f.caps && (d = true);
    }
    return { ...Mt(Object.values(a).filter(Boolean).length, i.length, n, a), ...c ? { diacritics: true } : {}, ...l ? { translit: true } : {}, ...d ? { caps: true } : {} };
  }
  function wb(t, e) {
    const s = Object.fromEntries(t.pairs.map((r) => [r.id, r.id]));
    if (!It(e)) return ve(s);
    const n = {};
    for (const r of t.pairs) n[r.id] = e[r.id] === r.id;
    return Mt(Object.values(n).filter(Boolean).length, t.pairs.length, s, n);
  }
  function yb(t, e) {
    const s = t.items.map((r) => r.id);
    if (!yc(e) || e.length !== s.length || new Set(e).size !== s.length || e.some((r) => !s.includes(r))) return ve(s);
    const n = {};
    return s.forEach((r, i) => {
      n[r] = e[i] === r;
    }), Mt(Object.values(n).filter(Boolean).length, s.length, s, n);
  }
  function Sb(t, e) {
    return ms(t.items.map((s) => s.id), Kt(e, t.id, "order"));
  }
  function $b(t, e) {
    const s = Object.fromEntries(t.items.map((r) => [r.id, r.group]));
    if (!It(e)) return ve(s);
    const n = {};
    for (const r of t.items) n[r.id] = e[r.id] === r.group;
    return Mt(Object.values(n).filter(Boolean).length, t.items.length, s, n);
  }
  function zb(t, e, s) {
    if (t.type === "circle") return (e - t.cx) ** 2 + (s - t.cy) ** 2 <= t.r ** 2;
    if (t.type === "rect") return e >= t.x && e <= t.x + t.w && s >= t.y && s <= t.y + t.h;
    let n = false;
    const r = t.points;
    for (let i = 0, o = r.length - 1; i < r.length; o = i++) {
      const [a, c] = r[i], [l, d] = r[o];
      c > s != d > s && e < (l - a) * (s - c) / (d - c) + a && (n = !n);
    }
    return n;
  }
  function Sc(t, e, s) {
    var _a3;
    return (_a3 = t.regions.find((n) => zb(n.shape, e, s))) == null ? void 0 : _a3.id;
  }
  function _b(t, e) {
    var _a3;
    let s;
    if (typeof e == "string") s = e;
    else if (It(e) && typeof e.x == "number" && typeof e.y == "number") s = (_a3 = Sc(t, e.x, e.y)) != null ? _a3 : "";
    else return ve(t.answer);
    const n = s === t.answer;
    return { correct: n, score: n ? 1 : 0, expected: t.answer };
  }
  function jb(t, e, s) {
    var _a3;
    if (t.mode === "choose") {
      if (typeof e != "string") return ve(t.answer);
      const n = e === t.answer;
      return { correct: n, score: n ? 1 : 0, expected: t.answer };
    }
    return typeof e != "string" ? ve((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : hn(e, t.answer, s, t.strictDiacritics);
  }
  function xb(t, e) {
    return fc(e) ? e === "again" ? { correct: false, score: 0, expected: null } : e === "hard" ? { correct: true, partial: true, score: 0.6, expected: null } : { correct: true, score: 1, expected: null } : ve(null);
  }
  function $c(t, e) {
    const s = t.words.flatMap((n) => {
      const r = e.text.canonical(n.answer);
      return r ? [{ id: n.id, answer: r }] : [];
    });
    return { grid: Qk(s, t.seed, { maxSize: t.maxSize }), words: s };
  }
  function Eb(t, e, s) {
    const n = Object.fromEntries(t.words.map((i) => {
      var _a3;
      return [i.id, (_a3 = s.text.canonical(i.answer)) != null ? _a3 : null];
    }));
    if (!It(e)) return ve(n);
    const r = {};
    for (const i of t.words) {
      const o = s.text.canonical(i.answer), a = e[i.id];
      r[i.id] = o !== void 0 && typeof a == "string" && kt(a) !== "" && kt(a) === kt(o);
    }
    return Mt(Object.values(r).filter(Boolean).length, t.words.length, n, r);
  }
  function pn(t, e) {
    const s = t.words.flatMap((n) => {
      const r = e.text.canonical(n.answer);
      return r ? [{ id: n.id, answer: r }] : [];
    });
    return { grid: ub(s, t.seed, { size: t.size, directions: t.directions }), words: s };
  }
  const Ab = (t) => It(t) && Array.isArray(t.start) && Array.isArray(t.end) && t.start.length === 2 && t.end.length === 2 && [...t.start, ...t.end].every((e) => Number.isInteger(e));
  function zc(t, e, s) {
    const n = /* @__PURE__ */ new Set();
    for (const r of s) {
      const i = vc(t, r);
      if (!i) continue;
      const o = Array.from(i).reverse().join("");
      for (const a of e) {
        const c = kt(a.answer);
        (c === i || c === o) && n.add(a.id);
      }
    }
    return [...n];
  }
  function Tb(t, e, s) {
    const n = t.words.map((c) => c.id);
    if (!Array.isArray(e) || !e.every(Ab)) return ve(n);
    const { grid: r, words: i } = pn(t, s), o = new Set(zc(r, i, e)), a = Object.fromEntries(n.map((c) => [c, o.has(c)]));
    return Mt(o.size, n.length, n, a);
  }
  function qt(t) {
    var _a3, _b3, _c2, _d2;
    return { text: t.text, diacritics: (_a3 = t.pack.matching) == null ? void 0 : _a3.diacritics, typos: (_b3 = t.pack.matching) == null ? void 0 : _b3.typos, lang: (_d2 = (_c2 = t.targetLang) != null ? _c2 : t.pack.targetLang) != null ? _d2 : t.text.lang };
  }
  const gs = /* @__PURE__ */ new Map();
  function Ib(t, e = {}) {
    if (gs.has(t.kind) && !e.replace) throw new Error('item kind "'.concat(t.kind, '" is already registered'));
    gs.set(t.kind, t);
  }
  function fn(t, e, s) {
    const n = gs.get(t.kind);
    if (!n) return { correct: false, score: 0, expected: null, invalid: true };
    try {
      return n.check(t, e, s);
    } catch (e2) {
      return { correct: false, score: 0, expected: n.keyOf(t), invalid: true };
    }
  }
  const Mb = (t, e) => {
    var _a3;
    return (_a3 = gs.get(t.kind)) == null ? void 0 : _a3.solve(t, e);
  };
  function Gt(t, e, s) {
    const n = t[e], r = s && s !== e ? t[s] : void 0, i = (a) => {
      var _a3;
      return (_a3 = n == null ? void 0 : n.strings[a]) != null ? _a3 : r == null ? void 0 : r.strings[a];
    }, o = (a) => {
      var _a3, _b3, _c2;
      const c = (_c2 = (_a3 = n == null ? void 0 : n.accepted) == null ? void 0 : _a3[a]) != null ? _c2 : (_b3 = r == null ? void 0 : r.accepted) == null ? void 0 : _b3[a];
      return c && c.length > 0 ? c : void 0;
    };
    return { lang: e, text: i, t: (a) => {
      var _a3;
      return (_a3 = i(a)) != null ? _a3 : a;
    }, accepted: (a) => {
      const c = o(a);
      if (c) return c;
      const l = i(a);
      return l ? [l] : [];
    }, canonical: (a) => {
      var _a3, _b3;
      return (_b3 = (_a3 = o(a)) == null ? void 0 : _a3[0]) != null ? _b3 : i(a);
    }, hasText: (a) => i(a) !== void 0, hasAccepted: (a) => o(a) !== void 0 };
  }
  const te = (t, e, s = "string") => e ? [{ path: t, key: e, role: s }] : [], _e = (t) => [...te("prompt", t.prompt), ...te("explanation", t.explanation), ...te("didYouKnow", t.didYouKnow), ...te("hint", t.hint)];
  function Be(t, e) {
    const s = /* @__PURE__ */ new Set(), n = [];
    return t.forEach((r, i) => {
      s.has(r.id) && n.push({ code: "DUPLICATE_ID", path: "".concat(e, "[").concat(i, "].id"), message: 'the id "'.concat(r.id, '" is used twice in ').concat(e) }), s.add(r.id);
    }), n;
  }
  const _c = (t, e) => Gt(t.catalogs, e, t.pack.targetLang), jc = (t, e) => qt({ pack: t.pack, text: _c(t, e) });
  function xc(t, e, s, n) {
    if (!e) return [];
    const r = t.assets.get(e);
    return r && r.kind !== s ? [{ code: "ASSET_KIND", path: n, message: 'asset "'.concat(e, '" is ').concat(r.kind, ", this item needs ").concat(s) }] : [];
  }
  function je(t) {
    Ib(t);
  }
  je({ kind: "mcq", form: "Multiple choice", recall: false, schema: Va, check: (t, e) => pb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.options, "options"), ...t.options.some((e) => e.id === t.answer) ? [] : [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }]], distractors: (t) => t.options.flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "true-false", form: "True or false", recall: false, schema: Ya, check: (t, e) => fb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...te("why", t.why)] }), je({ kind: "multi-select", form: "Select all that apply", recall: false, schema: Ja, check: (t, e) => mb(t, e), keyOf: (t) => [...t.answers].sort(), solve: (t) => [...t.answers], textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.options, "options"), ...t.answers.flatMap((e, s) => t.options.some((n) => n.id === e) ? [] : [{ code: "UNKNOWN_OPTION", path: "answers[".concat(s, "]"), message: 'the answer "'.concat(e, '" is not one of the options') }])], distractors: (t) => t.options.flatMap((e, s) => t.answers.includes(e.id) ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "cloze", form: "Fill the gap", recall: true, schema: Qa, check: (t, e, s) => kb(t, e, s), keyOf: (t) => Object.fromEntries(t.gaps.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.gaps.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("text", t.text), ...t.gaps.flatMap((e, s) => [...te("gaps[".concat(s, "].answer"), e.answer, "accepted"), ...e.bank ? [...te("gaps[".concat(s, "].answer"), e.answer), ...e.bank.flatMap((n, r) => te("gaps[".concat(s, "].bank[").concat(r, "]"), n))] : []])], validate: (t, e) => {
    const s = [...Be(t.gaps, "gaps")];
    t.gaps.forEach((n, r) => {
      n.bank && !n.bank.includes(n.answer) && s.push({ code: "UNKNOWN_OPTION", path: "gaps[".concat(r, "].bank"), message: 'the word bank of gap "'.concat(n.id, '" does not contain its answer key') });
    });
    for (const n of e.languages) {
      const r = _c(e, n).text(t.text);
      if (r !== void 0) for (const i of t.gaps) r.includes("{{".concat(i.id, "}}")) || s.push({ code: "MISSING_GAP_MARKER", path: "text", message: 'the text in "'.concat(n, '" has no {{').concat(i.id, "}} marker") });
    }
    return s;
  } }), je({ kind: "typed", form: "Type the answer", recall: true, schema: ec, check: (t, e, s) => gb(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => [..._e(t), ...te("answer", t.answer, "accepted")] }), je({ kind: "match-pairs", form: "Match the pairs", recall: false, schema: tc, check: (t, e) => wb(t, e), keyOf: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), solve: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), textRefs: (t) => [..._e(t), ...t.pairs.flatMap((e, s) => [...te("pairs[".concat(s, "].left"), e.left), ...te("pairs[".concat(s, "].right"), e.right)])], validate: (t) => Be(t.pairs, "pairs") }), je({ kind: "order", form: "Put in order", recall: true, schema: sc, check: (t, e) => yb(t, e), keyOf: (t) => t.items.map((e) => e.id), solve: (t) => t.items.map((e) => e.id), textRefs: (t) => [..._e(t), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].when"), e.when)])], validate: (t) => Be(t.items, "items") }), je({ kind: "sort-groups", form: "Sort into groups", recall: true, schema: nc, check: (t, e) => $b(t, e), keyOf: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), solve: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), textRefs: (t) => [..._e(t), ...t.groups.flatMap((e, s) => te("groups[".concat(s, "].title"), e.title)), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.groups, "groups"), ...Be(t.items, "items"), ...t.items.flatMap((e, s) => t.groups.some((n) => n.id === e.group) ? [] : [{ code: "UNKNOWN_GROUP", path: "items[".concat(s, "].group"), message: 'the group "'.concat(e.group, '" does not exist') }])] }), je({ kind: "hotspot", form: "Find it on the picture", recall: true, schema: rc, check: (t, e) => _b(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.regions.flatMap((e, s) => [...te("regions[".concat(s, "].label"), e.label), ...te("regions[".concat(s, "].why"), e.why)])], validate: (t, e) => [...Be(t.regions, "regions"), ...t.regions.some((s) => s.id === t.answer) ? [] : [{ code: "UNKNOWN_REGION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the regions') }], ...xc(e, t.asset, "image", "asset")] }), je({ kind: "listening", form: "Listen and answer", recall: false, schema: ic, check: (t, e, s) => jb(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return t.mode === "choose" ? t.answer : (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => {
    var _a3;
    return [..._e(t), ...te("transcript", t.transcript), ...t.mode === "type" ? te("answer", t.answer, "accepted") : [], ...((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])];
  }, validate: (t, e) => {
    var _a3, _b3;
    return [...Be((_a3 = t.options) != null ? _a3 : [], "options"), ...t.mode === "choose" && !((_b3 = t.options) != null ? _b3 : []).some((s) => s.id === t.answer) ? [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }] : [], ...xc(e, t.asset, "audio", "asset")];
  }, distractors: (t) => {
    var _a3;
    return t.mode === "choose" ? ((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) : [];
  } }), je({ kind: "flashcard", form: "Flashcard", recall: true, schema: oc, check: (t, e) => xb(t, e), keyOf: () => null, solve: () => "good", textRefs: (t) => [..._e(t), ...te("back", t.back)], validate: (t, e) => t.backAsset && !e.assets.has(t.backAsset) ? [{ code: "UNKNOWN_ASSET", path: "backAsset", message: 'unknown asset "'.concat(t.backAsset, '"') }] : [] }), je({ kind: "crossword", form: "Crossword", recall: true, schema: ac, check: (t, e, s) => Eb(t, e, s), keyOf: (t) => Object.fromEntries(t.words.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.words.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => [...te("words[".concat(s, "].answer"), e.answer, "accepted"), ...te("words[".concat(s, "].clue"), e.clue)])], validate: (t, e) => {
    const s = Be(t.words, "words");
    for (const n of e.languages) {
      const r = jc(e, n);
      if (t.words.some((a) => !r.text.canonical(a.answer))) continue;
      const { grid: i, words: o } = $c(t, r);
      i.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the crossword cannot place: ').concat(i.unplaced.join(", ")) });
      for (const a of Xk(i, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), je({ kind: "conjugation", form: "Conjugate the verb", recall: true, schema: Xa, check: (t, e, s) => vb(t, e, s), keyOf: (t) => Object.fromEntries(t.forms.filter((e) => !e.given).map((e) => [e.person, e.answer])), solve: (t, e) => Object.fromEntries(bb(t).map((s) => {
    var _a3;
    return [s.person, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("verb", t.verb), ...t.forms.flatMap((e, s) => [...te("forms[".concat(s, "].label"), e.label), ...te("forms[".concat(s, "].answer"), e.answer, "accepted")])], validate: (t) => {
    const e = [];
    return t.forms.filter((n) => !n.given).length === 0 && e.push({ code: "CONJ_NOTHING_ASKED", path: "forms", message: "every form is given: the item asks nothing" }), e;
  } }), je({ kind: "word-search", form: "Word search", recall: true, schema: cc, check: (t, e, s) => Tb(t, e, s), keyOf: (t) => t.words.map((e) => e.id), solve: (t, e) => pn(t, e).grid.placements.map(wc), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => te("words[".concat(s, "].answer"), e.answer, "accepted"))], validate: (t, e) => {
    const s = Be(t.words, "words");
    for (const n of e.languages) {
      const r = jc(e, n);
      if (t.words.some((a) => !r.text.canonical(a.answer))) continue;
      const { grid: i, words: o } = pn(t, r);
      i.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the word search cannot place: ').concat(i.unplaced.join(", ")) });
      for (const a of hb(i, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), [...gs.keys()];
  const Ob = 0.7, Nb = 0.85, Ec = (t = 3) => ({ window: [], difficulty: t });
  function Pb(t) {
    return t.length === 0 ? null : t.filter(Boolean).length / t.length;
  }
  function Rb(t, e = {}) {
    var _a3, _b3;
    return t < ((_a3 = e.low) != null ? _a3 : Ob) ? "low" : t > ((_b3 = e.high) != null ? _b3 : Nb) ? "high" : "in";
  }
  function Db(t, e, s = {}) {
    var _a3, _b3, _c2, _d2;
    const n = (_a3 = s.windowSize) != null ? _a3 : 10, r = [...t.window, e].slice(-n), i = Pb(r);
    if (i === null || r.length < ((_b3 = s.minSamples) != null ? _b3 : 4)) return { window: r, difficulty: t.difficulty };
    const o = (_c2 = s.minDifficulty) != null ? _c2 : 1, a = (_d2 = s.maxDifficulty) != null ? _d2 : 5, c = Rb(i, s), l = c === "low" ? Math.max(o, t.difficulty - 1) : c === "high" ? Math.min(a, t.difficulty + 1) : t.difficulty;
    return l === t.difficulty ? { window: r, difficulty: l } : { window: [], difficulty: l };
  }
  function Lb(t, e, s, n = []) {
    let r = t.filter((l) => !n.includes(l.id));
    if (r.length === 0 && (r = [...t]), r.length === 0) return null;
    const i = (l) => Math.abs(l.difficulty - e.difficulty);
    let o = r.map((l) => ({ c: l, w: i(l) === 0 ? 6 : i(l) === 1 ? 2 : i(l) === 2 ? 1 : 0 }));
    if (o.every((l) => l.w === 0)) {
      const l = Math.min(...r.map(i));
      o = r.map((d) => ({ c: d, w: i(d) === l ? 1 : 0 }));
    }
    const a = o.reduce((l, d) => l + d.w, 0);
    let c = s.next() * a;
    for (const l of o) if (l.w !== 0) {
      if (c < l.w) return l.c;
      c -= l.w;
    }
    return o.filter((l) => l.w > 0).at(-1).c;
  }
  const Fr = 1, Cb = ["murdle", "knights", "testimony", "logic", "quiz"], mn = ["easy", "medium", "hard"], ce = E().regex(/^[a-z][a-z0-9]*$/, "an item id such as s1, w2, p3"), Br = /^[a-z][a-z0-9_]*$/, Zb = B({ id: E().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either"]), a: ce, b: et([ce, At([ce, ce])]), descr: N(ce).optional() }), Kr = B({ rule: E(), cell: At([ce, ce]).optional(), value: E(), clue: E().optional(), from: N(At([ce, ce])).optional(), who: E().optional(), statement: E().optional() }).passthrough(), Ac = B({ steps: L().int(), score: L(), rules: Q(E(), L()) }), Ub = Ac, gn = { format: se(Fr), seed: L().int().optional(), band: Y(mn).optional(), difficulty: Ub, steps: N(Kr) }, Fb = B({ ...gn, kind: se("murdle"), size: L().int().min(3).max(5), categories: N(B({ key: E(), items: N(ce).min(3) })).min(3).max(4), descr: Q(E(), E()).optional(), solution: Q(E(), Q(E(), ce)), clues: N(Zb).min(1), murder: B({ place: ce, answer: B({ suspect: ce, weapon: ce, place: ce, motive: ce.optional() }) }) }), Ot = E().regex(/^k\d+$/, "a speaker id such as k1"), kn = mk(() => et([B({ type: Y(["knight", "knave"]), who: Ot }), B({ type: Y(["same", "diff"]), a: Ot, b: Ot }), B({ type: Y(["some_knave", "all_knight"]), of: N(Ot).min(1) }), B({ type: se("exactly"), k: L().int().min(0), of: N(Ot).min(1) }), B({ type: se("not"), c: kn }), B({ type: Y(["and", "or"]), a: kn, b: kn })])), Bb = B({ ...gn, kind: se("knights"), size: L().int().min(2).max(5), speakers: N(Ot).min(2).max(5), statements: N(B({ id: E().regex(/^t\d+$/, "a statement id such as t1"), speaker: Ot, claim: kn })).min(1), solution: Q(E(), Y(["knight", "knave"])) }), bn = B({ key: E().regex(/^[a-z][a-z0-9_]*$/, "a key such as clock"), value: E().min(1) }), Kb = B({ ...gn, kind: se("testimony"), size: L().int().min(2).max(10), witness: se("wit"), keys: N(B({ key: bn.shape.key, label: E().optional(), values: N(E().min(1)).min(2), item: E().optional(), claim: E().optional(), fact: E().optional() })).min(1), statements: N(B({ id: E().regex(/^t\d+$/, "a statement id such as t1"), claims: N(bn).min(1), press: B({ claims: N(bn).min(1) }).optional() })).min(2), evidence: N(B({ id: E().regex(/^e\d+$/, "an evidence id such as e1"), facts: N(bn).min(1) })).min(1), solution: B({ statement: E(), evidence: E(), press: J().optional() }) }), qb = B({ id: E().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([ce, At([ce, ce])]), b: et([ce, At([ce, ce])]), n: L().int().min(1).optional() }), Gb = B({ ...gn, kind: se("logic"), size: L().int().min(3).max(5), categories: N(B({ key: E(), items: N(ce).min(3), ref: E().optional() })).min(3).max(5), ordinal: B({ category: E(), unit: E().optional() }), hardTrans: L().int().optional(), solution: Q(E(), Q(E(), ce)), clues: N(qb).min(1) }), Wb = B({ id: E().regex(Br), options: N(E().regex(Br)).min(2).max(6), answer: E().regex(Br) }).superRefine((t, e) => {
    t.options.includes(t.answer) || e.addIssue({ code: Pr.custom, path: ["answer"], message: 'answer "'.concat(t.answer, '" is not in options') });
  }), Hb = B({ format: se(Fr).optional(), band: Y(mn).optional(), steps: N(Kr).optional(), kind: se("quiz"), seed: L().int(), questions: N(Wb).min(1).max(10), solution: Q(E(), E()), difficulty: Ac }).superRefine((t, e) => {
    const s = /* @__PURE__ */ new Set();
    for (const n of t.questions) s.has(n.id) && e.addIssue({ code: Pr.custom, path: ["questions"], message: 'duplicate question id "'.concat(n.id, '"') }), s.add(n.id), t.solution[n.id] !== n.answer && e.addIssue({ code: Pr.custom, path: ["solution", n.id], message: 'solution["'.concat(n.id, '"] must match question answer "').concat(n.answer, '"') });
  }), Tc = Mr("kind", [Fb, Bb, Kb, Gb, Hb]);
  Ra(Tc, B({ names: Q(E(), E()), text: Q(E(), E()) })), B({ unique: J(), solutions: L().int(), deducible: J(), band: Y(mn).nullable(), score: L(), steps: N(Kr), rules: Q(E(), L()) }), B({ key: E().regex(/^[a-z][a-z0-9_]*$/, "lowercase letters, digits and underscores, starting with a letter"), kind: Y(Cb), data: Tc, names: Q(E(), E()), text: Q(E(), E()), links: Q(E(), B({ type: Y(["character", "place", "image"]), key: E() })).optional(), clueAt: Q(E(), E()).optional(), onFail: B({ mode: Y(["retry", "continue", "chapter"]), to: L().int().positive().optional(), maxTries: L().int().positive().optional() }).optional(), hints: J().optional(), verified: B({ unique: J(), deducible: J(), score: L(), textChecked: J(), by: E() }) }), B({ names: Q(E(), E()), text: Q(E(), E()) }), et([B({ id: E(), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([E(), N(E()).length(2)]), b: et([E(), N(E()).length(2)]), n: L().int().optional() }), B({ id: E(), speaker: E(), claim: Q(E(), Et()) }), B({ id: E(), truthTellers: E(), liars: E() }), B({ id: E(), claims: N(B({ key: E(), value: E() })).optional(), facts: N(B({ key: E(), value: E() })).optional() }).refine((t) => t.claims !== void 0 || t.facts !== void 0, "testimony entry needs claims or facts"), B({ id: E(), prompt: E().optional(), options: N(E()).optional(), answer: E().optional() }).passthrough()]);
  const We = Fr, Wt = ["clue", "elim", "last", "either", "order", "trans"], Vb = { clue: 1, elim: 1, last: 2, either: 2, order: 2, trans: 3 }, ks = mn, Ic = ["clue", "elim", "last"];
  class Z extends Error {
    constructor(e) {
      super(e), this.name = "PuzzleError";
    }
  }
  function bs(t) {
    const e = {};
    for (let s = 0; s < t.categories.length; s++) for (const n of t.categories[s].items) e[n] = s;
    return e;
  }
  function Ht(t, e) {
    const n = bs(t)[e];
    if (n === void 0) throw new Z("unknown item ".concat(e));
    return t.categories[n].key;
  }
  function Re(t) {
    const e = t.includes("|") ? t.split("|") : t.split(",");
    if (e.length !== 2) throw new Z('invalid cell key "'.concat(t, '"'));
    return [e[0], e[1]];
  }
  function rt(t) {
    const e = t.categories, s = [];
    for (let n = 0; n < e.length; n++) for (let r = n + 1; r < e.length; r++) for (const i of e[n].items) for (const o of e[r].items) s.push("".concat(i, "|").concat(o));
    return s;
  }
  function Nt(t) {
    const e = t.categories[0].items, s = {};
    for (const n of e) s[n] = n;
    for (const n of e) {
      const r = t.solution[n];
      if (r) for (let i = 1; i < t.categories.length; i++) {
        const o = t.categories[i].key, a = r[o];
        a && (s[a] = n);
      }
    }
    return s;
  }
  function vn(t) {
    const e = t.ordinal;
    if (!e) return null;
    for (const s of t.categories) if (s.key === e.category) return [...s.items];
    throw new Z('no ordinal category "'.concat(e.category, '"'));
  }
  function Mc(t, e, s) {
    const n = t[s];
    for (let r = 0; r < e.length; r++) if (t[e[r]] === n) return r;
    throw new Z("".concat(s, " has no place in the ordinal category"));
  }
  function qr(t, e, s) {
    const n = t.type;
    if (n === "is") return e[t.a] === e[t.b];
    if (n === "not") return e[t.a] !== e[t.b];
    if (n === "either") return t.b.some((r) => e[t.a] === e[r]);
    if (n === "neither") return t.b.every((r) => e[t.a] !== e[r]);
    if (n === "oneof") {
      const [r, i] = t.a, [o, a] = t.b;
      return e[r] === e[o] && e[i] === e[a] || e[r] === e[a] && e[i] === e[o];
    }
    if (n === "before" || n === "after" || n === "apart") {
      if (!s) throw new Z("an order clue needs an ordinal category");
      const r = Mc(e, s, t.a), i = Mc(e, s, t.b);
      if (n === "before") return r < i;
      if (n === "after") return r > i;
      if (typeof t.n != "number" || t.n < 1) throw new Z("an apart clue needs the number n");
      return Math.abs(r - i) === t.n;
    }
    throw new Z('unknown clue type "'.concat(n, '"'));
  }
  function Oc(t) {
    const e = [];
    for (const s of ["a", "b"]) {
      const n = t[s];
      Array.isArray(n) ? e.push(...n) : n !== void 0 && e.push(n);
    }
    return e;
  }
  function Gr(t) {
    var _a3, _b3;
    const e = t.murder.place;
    for (const s of t.categories[0].items) if (((_a3 = t.solution[s]) == null ? void 0 : _a3.place) === e) {
      const n = { suspect: s, weapon: t.solution[s].weapon, place: e };
      return ((_b3 = t.solution[s]) == null ? void 0 : _b3.motive) && (n.motive = t.solution[s].motive), n;
    }
    throw new Z("nobody was at the murder place");
  }
  function Nc(t) {
    var _a3;
    if (t.format !== void 0 && t.format !== We) throw new Z("unknown puzzle format ".concat(t.format));
    const e = t.categories || [];
    if (e.length < 3) throw new Z("a puzzle has at least 3 categories");
    const s = e[0].items.length, n = /* @__PURE__ */ new Set();
    for (const r of e) {
      if (r.items.length !== s) throw new Z("every category needs ".concat(s, " items"));
      for (const i of r.items) {
        if (n.has(i)) throw new Z("item ".concat(i, " is listed twice"));
        n.add(i);
      }
    }
    if (!t.solution) throw new Z("puzzle has no solution");
    for (const r of e[0].items) {
      const i = t.solution[r];
      if (!i) throw new Z("no solution for ".concat(r));
      for (let o = 1; o < e.length; o++) {
        const a = e[o].key;
        if (!e[o].items.includes(i[a])) throw new Z("the solution of ".concat(r, " has no valid ").concat(a));
      }
    }
    for (let r = 1; r < e.length; r++) {
      const i = e[r].key, o = e[0].items.map((a) => t.solution[a][i]);
      if (new Set(o).size !== s) throw new Z("each ".concat(i, " must be used once"));
    }
    for (const r of t.clues || []) {
      if (!["is", "not", "either", "neither", "oneof", "before", "after", "apart"].includes(r.type)) throw new Z('unknown clue type "'.concat(r.type, '"'));
      if (r.type === "apart" && (typeof r.n != "number" || r.n < 1)) throw new Z("an apart clue needs the number n");
      if ((r.type === "before" || r.type === "after" || r.type === "apart") && !t.ordinal) throw new Z("an order clue needs an ordinal category");
      for (const i of Oc(r)) if (!n.has(i)) throw new Z("clue ".concat((_a3 = r.id) != null ? _a3 : "", " names the unknown item ").concat(i));
    }
  }
  const Vt = "knight", vs = "knave", Yb = { direct: 1, split: 4 }, Pc = ["Aldo", "Brin", "Cass", "Dara", "Evo"];
  function ws(t) {
    const e = t.type;
    if (e === "knight" || e === "knave") return /* @__PURE__ */ new Set([t.who]);
    if (e === "same" || e === "diff") return /* @__PURE__ */ new Set([t.a, t.b]);
    if (e === "some_knave" || e === "all_knight" || e === "exactly") return new Set(t.of);
    if (e === "not") return ws(t.c);
    if (e === "and" || e === "or") {
      const s = ws(t.a), n = ws(t.b);
      return /* @__PURE__ */ new Set([...s, ...n]);
    }
    throw new Z('unknown claim type "'.concat(e, '"'));
  }
  function it(t, e) {
    const s = t.type;
    if (s === "knight") return !!e[t.who];
    if (s === "knave") return !e[t.who];
    if (s === "same") return e[t.a] === e[t.b];
    if (s === "diff") return e[t.a] !== e[t.b];
    if (s === "some_knave") return t.of.some((n) => !e[n]);
    if (s === "all_knight") return t.of.every((n) => !!e[n]);
    if (s === "exactly") return t.of.filter((n) => !!e[n]).length === t.k;
    if (s === "not") return !it(t.c, e);
    if (s === "and") return it(t.a, e) && it(t.b, e);
    if (s === "or") return it(t.a, e) || it(t.b, e);
    throw new Z('unknown claim type "'.concat(s, '"'));
  }
  function* Jb(t) {
    const e = t.length, s = 1 << e;
    for (let n = 0; n < s; n++) {
      const r = {};
      for (let i = 0; i < e; i++) r[t[i]] = (n & 1 << i) !== 0;
      yield r;
    }
  }
  function Qb(t, e) {
    return t.every((s) => e[s.speaker] === it(s.claim, e));
  }
  function Xb(t, e = 2, s) {
    const n = s != null ? s : t.statements;
    let r = 0;
    for (const i of Jb(t.speakers)) if (Qb(n, i) && (r++, r >= e)) break;
    return r;
  }
  const wn = Xb;
  function Rc(t) {
    const e = {};
    for (const [s, n] of Object.entries(t.solution)) e[s] = n === Vt;
    return e;
  }
  function ev(t, e) {
    const s = Array.from(/* @__PURE__ */ new Set([t.speaker, ...ws(t.claim)])).sort(), n = s.filter((o) => e[o] === void 0), r = [], i = 1 << n.length;
    for (let o = 0; o < i; o++) {
      const a = {};
      for (const c of s) e[c] !== void 0 && (a[c] = e[c]);
      for (let c = 0; c < n.length; c++) a[n[c]] = (o & 1 << c) !== 0;
      a[t.speaker] === it(t.claim, a) && r.push(a);
    }
    return [r, n];
  }
  function Wr(t, e, s) {
    let n = true;
    for (; n; ) {
      n = false;
      for (const r of t) {
        const [i, o] = ev(r, e);
        if (i.length === 0) return r.id;
        for (const a of o) {
          const c = new Set(i.map((l) => l[a]));
          if (c.size === 1) {
            const l = c.values().next().value;
            e[a] = l, s !== null && s.push({ rule: "direct", statement: r.id, who: a, value: l ? Vt : vs }), n = true;
          }
        }
      }
    }
    return null;
  }
  function ys(t, e, s, n) {
    var _a3, _b3;
    const r = {};
    for (const o of s) r[o.rule] = ((_a3 = r[o.rule]) != null ? _a3 : 0) + 1;
    const i = Object.entries(r).reduce((o, [a, c]) => {
      var _a4;
      return o + ((_a4 = Yb[a]) != null ? _a4 : 1) * c;
    }, 0);
    return { solved: n && Object.keys(e).length === t.speakers.length, steps: s, rules: r, score: i, splits: (_b3 = r.split) != null ? _b3 : 0 };
  }
  function tv(t, e) {
    const s = e != null ? e : t.statements, n = [], r = {};
    if (Wr(s, r, n) !== null) return ys(t, r, n, false);
    for (; Object.keys(r).length < t.speakers.length; ) {
      let a = false;
      const c = t.speakers.filter((l) => r[l] === void 0);
      for (const l of c) {
        const d = {};
        for (const h of [true, false]) {
          const p = { ...r, [l]: h };
          d[String(h)] = Wr(s, p, null);
        }
        if (d.true !== null && d.false !== null) return ys(t, r, n, false);
        if (d.true !== null || d.false !== null) {
          const h = d.true !== null;
          if (r[l] = !h, n.push({ rule: "split", who: l, value: h ? vs : Vt, contradicts: h ? Vt : vs, statement: d[String(h)] }), Wr(s, r, n) !== null) return ys(t, r, n, false);
          a = true;
          break;
        }
      }
      if (!a) return ys(t, r, n, false);
    }
    const i = Rc(t), o = t.speakers.every((a) => r[a] === i[a]);
    return ys(t, r, n, o);
  }
  const Dc = tv;
  function sv(t) {
    var _a3;
    const e = (_a3 = t.splits) != null ? _a3 : 0;
    return e === 0 ? "easy" : e === 1 ? "medium" : "hard";
  }
  const nv = sv;
  function rv(t) {
    var _a3, _b3;
    if (t.format !== void 0 && t.format !== We) throw new Z("unknown puzzle format ".concat(t.format));
    if (t.kind !== "knights") throw new Z("not a knights puzzle");
    const e = t.speakers || [];
    if (e.length < 2 || e.length > 5 || new Set(e).size !== e.length) throw new Z("a Knights and Knaves puzzle has 2 to 5 different speakers");
    for (const n of e) if (((_a3 = t.solution) == null ? void 0 : _a3[n]) !== Vt && ((_b3 = t.solution) == null ? void 0 : _b3[n]) !== vs) throw new Z("the solution has no knight or knave for ".concat(n));
    const s = /* @__PURE__ */ new Set();
    for (const n of t.statements || []) {
      if (s.has(n.id)) throw new Z("statement ".concat(n.id, " is listed twice"));
      if (s.add(n.id), !e.includes(n.speaker)) throw new Z("statement ".concat(n.id, " has an unknown speaker ").concat(n.speaker));
      for (const r of ws(n.claim)) if (!e.includes(r)) throw new Z("statement ".concat(n.id, " names the unknown speaker ").concat(r));
    }
  }
  function iv(t) {
    rv(t);
    const e = Rc(t);
    for (const n of t.statements) if (e[n.speaker] !== it(n.claim, e)) throw new Z("statement ".concat(n.id, " does not hold in the solution"));
    if (wn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const s = Dc(t);
    if (!s.solved) throw new Z("the puzzle cannot be solved without guessing");
    return s;
  }
  function ov(t) {
    return t.length === 0 ? "" : t.length === 1 ? t[0] : t.slice(0, -1).join(", ") + " and " + t[t.length - 1];
  }
  function yn(t) {
    const e = t.split(" ")[0];
    return ["At", "All", "Exactly", "It", "Either"].includes(e != null ? e : "") ? t[0].toLowerCase() + t.slice(1) : t;
  }
  function Yt(t, e, s) {
    const n = e.type;
    let r = "";
    if (e.of && (r = e.of.length === t.speakers.length && e.of.every((o) => t.speakers.includes(o)) ? "us" : ov(e.of.map((o) => s[o]))), n === "knight") return "".concat(s[e.who], " is a knight");
    if (n === "knave") return "".concat(s[e.who], " is a knave");
    if (n === "same") return "".concat(s[e.a], " and ").concat(s[e.b], " are the same kind");
    if (n === "diff") return "".concat(s[e.a], " and ").concat(s[e.b], " are different kinds");
    if (n === "some_knave") return "At least one of ".concat(r, " is a knave");
    if (n === "all_knight") return "All of ".concat(r, " are knights");
    if (n === "exactly") return "Exactly ".concat(e.k, " of ").concat(r, " ").concat(e.k === 1 ? "is a knight" : "are knights");
    if (n === "not") return "It is not true that ".concat(yn(Yt(t, e.c, s)));
    if (n === "and") return "".concat(Yt(t, e.a, s), ", and ").concat(yn(Yt(t, e.b, s)));
    if (n === "or") return "Either ".concat(yn(Yt(t, e.a, s)), ", or ").concat(yn(Yt(t, e.b, s)));
    throw new Z("no sentence for a ".concat(n, " claim"));
  }
  function av(t, e, s) {
    return "".concat(s[e.speaker], ' says: "').concat(Yt(t, e.claim, s), '."');
  }
  function Lc(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.speakers.length; n++) {
      const r = t.speakers[n];
      s[r] = (_b3 = e[r]) != null ? _b3 : n < Pc.length ? Pc[n] : r;
    }
    return s;
  }
  function Cc(t, e) {
    const s = Lc(t);
    t.names = s, t.text = {};
    for (const n of t.statements) t.text[n.id] = av(t, n, s);
    return t.text.intro = "On this island knights always tell the truth and knaves always lie. Who is a knight and who is a knave?", t;
  }
  function cv(t, e, s = 2) {
    const n = [];
    for (let r = s; r <= e.length; r++) {
      const i = 1 << e.length;
      for (let o = 0; o < i; o++) {
        let a = 0;
        for (let c = 0; c < e.length; c++) o & 1 << c && a++;
        if (a === r) {
          const c = [];
          for (let l = 0; l < e.length; l++) o & 1 << l && c.push(e[l]);
          n.push(c);
        }
      }
    }
    return t.shuffle(n), n.slice(0, 8);
  }
  function lv(t, e, s) {
    const n = [];
    for (const r of e) n.push({ type: "knight", who: r }), n.push({ type: "knave", who: r });
    for (let r = 0; r < e.length; r++) for (let i = r + 1; i < e.length; i++) n.push({ type: "same", a: e[r], b: e[i] }), n.push({ type: "diff", a: e[r], b: e[i] });
    if (s !== "easy") for (const r of cv(t, e)) {
      n.push({ type: "some_knave", of: r }), n.push({ type: "all_knight", of: r });
      for (let i = 0; i <= r.length; i++) n.push({ type: "exactly", k: i, of: r });
    }
    if (s === "hard") {
      const r = n.filter((i) => ["knight", "knave", "same", "diff"].includes(i.type));
      for (let i = 0; i < 12; i++) {
        const [o, a] = t.sample(r, 2);
        n.push({ type: t.choice(["and", "or"]), a: o, b: a });
      }
      for (const i of t.sample(r, Math.min(4, r.length))) n.push({ type: "not", c: i });
    }
    return t.shuffle(n), n;
  }
  function Sn(t, e) {
    return { ...t, statements: e.map((s, n) => ({ ...s, id: "t".concat(n + 1) })) };
  }
  function dv(t = 3, e = 0, s = "medium", n = 400) {
    if (t < 2 || t > 5) throw new Z("Knights and Knaves has 2 to 5 speakers, not ".concat(t));
    if (!ks.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = new st("vno-puzzles:knights:".concat(e, ":").concat(s, ":").concat(t)), i = Array.from({ length: t }, (o, a) => "k".concat(a + 1));
    for (let o = 0; o < n; o++) {
      const a = {};
      for (const v of i) a[v] = r.random() < 0.5;
      if (t >= 3 && (Object.values(a).every(Boolean) || !Object.values(a).some(Boolean))) continue;
      const c = [];
      for (const v of lv(r, i, s)) for (const w of i) a[w] === it(v, a) && !((v.type === "knight" || v.type === "knave") && v.who === w) && c.push({ speaker: w, claim: v });
      r.shuffle(c);
      const l = {};
      for (const v of i) l[v] = a[v] ? Vt : vs;
      const d = { format: We, kind: "knights", size: t, seed: e, band: s, speakers: i, solution: l }, h = [];
      for (const v of c) {
        h.push(v);
        const w = Sn(d, h);
        if (wn(w, 2) === 1) break;
      }
      if (wn(Sn(d, h), 2) !== 1) continue;
      const p = [...h];
      for (const v of i) if (!p.some((w) => w.speaker === v)) {
        const w = c.find((y) => y.speaker === v && !p.includes(y));
        w && p.push(w);
      }
      const f = Array.from({ length: p.length }, (v, w) => w);
      r.shuffle(f);
      const m = /* @__PURE__ */ new Set();
      for (const v of f) {
        const w = p.filter((y, $) => $ !== v && !m.has($));
        i.every((y) => w.some(($) => $.speaker === y)) && wn(Sn(d, w), 2) === 1 && m.add(v);
      }
      const g = p.filter((v, w) => !m.has(w));
      if (new Set(g.map((v) => v.speaker)).size !== i.length) continue;
      r.shuffle(g);
      const k = Sn(d, g), b = Dc(k);
      if (!(!b.solved || nv(b) !== s)) return k.difficulty = { steps: b.steps.length, score: b.score, rules: b.rules }, k.steps = b.steps, Cc(k);
    }
    throw new Z("no ".concat(s, " knights puzzle found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function uv(t, e) {
    const s = t.speakers.filter((n) => e[n] !== t.solution[n]);
    return { correct: s.length === 0, wrong: s };
  }
  const $n = [{ key: "clock", label: "the hour the clock struck", values: ["nine", "ten", "eleven", "twelve"], item: "pocket watch", claim: "I heard the clock strike {v} just before the scream", fact: "It is stopped, and it reads {v} o'clock" }, { key: "door", label: "the state of the study door", values: ["locked", "open", "ajar"], item: "key log", claim: "The study door was {v} when I passed it", fact: "It says the study door was {v} that evening" }, { key: "lamp", label: "the hall lamp", values: ["lit", "dark", "dim"], item: "photograph", claim: "The lamp in the hall was {v}", fact: "It shows the hall lamp {v}" }, { key: "weather", label: "the weather that night", values: ["raining", "dry", "foggy"], item: "weather report", claim: "It was {v} outside", fact: "It says it was {v} that night" }, { key: "weapon", label: "what lay on the table", values: ["rope", "candlestick", "poison", "dagger"], item: "inventory", claim: "I saw the {v} on the table", fact: "It lists the {v} on the table" }, { key: "guest", label: "who left first", values: ["the doctor", "the colonel", "the cook"], item: "guest list", claim: "{v} left first", fact: "It shows {v} leaving first" }, { key: "window", label: "the library window", values: ["shut", "broken", "wide open"], item: "repair bill", claim: "The library window was {v}", fact: "It records the library window as {v}" }, { key: "shoes", label: "the shoes by the door", values: ["muddy", "polished", "missing"], item: "boot print", claim: "The shoes by the door were {v}", fact: "It shows the shoes by the door {v}" }], hv = Object.fromEntries($n.map((t) => [t.key, t])), pv = { easy: [4, 3], medium: [5, 4], hard: [6, 5] }, fv = "Mr Halloran";
  function Hr(t) {
    const e = /* @__PURE__ */ new Set();
    for (const s of t || []) e.add("".concat(s.key, "|").concat(s.value));
    return e;
  }
  function Vr(t) {
    return [...t.claims || [], ...t.press && t.press.claims || []];
  }
  function Yr(t, e, s) {
    const n = t.statements, r = t.evidence, i = [];
    for (const o of n) {
      const a = (o.press && o.press.claims || []).map((l) => ({ ...l, via: true })), c = (o.claims || []).map((l) => ({ ...l, via: false }));
      for (const l of [...c, ...a]) for (const d of r) for (const h of d.facts) h.key === l.key && h.value !== l.value && i.push({ statement: o.id, evidence: d.id, key: l.key, claim: l.value, fact: h.value, press: l.via });
    }
    return i;
  }
  function Jr(t) {
    let e = 0;
    for (const s of t.statements) for (const n of Vr(s)) for (const r of t.evidence) for (const i of r.facts) i.key === n.key && i.value === n.value && e++;
    return e;
  }
  function mv(t) {
    var _a3, _b3;
    const e = [], s = {};
    for (const o of t.statements) {
      const a = Array.from(Hr(o.claims)).sort().join(",");
      s[a] && e.push("".concat(o.id, " says what ").concat(s[a], " says")), s[a] = o.id;
      const c = Hr((_a3 = o.press) == null ? void 0 : _a3.claims), l = Hr(o.claims);
      if (c.size > 0) {
        let d = true;
        for (const p of c) l.has(p) || (d = false);
        d && e.push("the press line of ".concat(o.id, " only repeats the statement"));
        const h = new Set(o.claims.map((p) => p.key));
        for (const [p] of Array.from(c).map((f) => f.split("|"))) h.has(p) && e.push("the press line of ".concat(o.id, " is about the same thing as the statement"));
      }
    }
    const n = {};
    for (const o of t.statements) for (const a of o.claims) n[a.key] && e.push("".concat(n[a.key], " and ").concat(o.id, " both claim something about ").concat(a.key)), n[a.key] = o.id;
    const r = {};
    for (const o of t.statements) for (const a of ((_b3 = o.press) == null ? void 0 : _b3.claims) || []) r[a.key] && e.push("the press lines of ".concat(r[a.key], " and ").concat(o.id, " are about the same thing (").concat(a.key, ")")), r[a.key] = o.id;
    const i = {};
    for (const o of t.evidence) for (const a of o.facts) i[a.key] && e.push("".concat(i[a.key], " and ").concat(o.id, " show the same fact (").concat(a.key, ")")), i[a.key] = o.id;
    return e;
  }
  function gv(t, e) {
    return (e != null ? e : Yr(t)).some((r) => r.press) ? Jr(t) >= 4 ? "hard" : "medium" : "easy";
  }
  const Zc = gv;
  function kv(t) {
    if (t.format !== void 0 && t.format !== We) throw new Z("not a testimony puzzle of format ".concat(We));
    if (t.kind !== "testimony") throw new Z("not a testimony puzzle");
    const e = {};
    for (const i of t.keys || []) e[i.key] = i;
    if (Object.keys(e).length === 0) throw new Z("a testimony puzzle needs keys (the vocabulary of the facts)");
    for (const i of Object.values(e)) if (!i.values || i.values.length < 2) throw new Z("key ".concat(i.key, " needs at least two values"));
    const s = /* @__PURE__ */ new Set();
    for (const i of t.statements || []) {
      if (s.has(i.id)) throw new Z("statement ".concat(i.id, " is listed twice"));
      s.add(i.id);
      for (const o of Vr(i)) if (!e[o.key] || !e[o.key].values.includes(o.value)) throw new Z("statement ".concat(i.id, " claims ").concat(o.key, "=").concat(o.value, ", which is not in the keys"));
    }
    if ((t.statements || []).length < 2) throw new Z("a testimony needs at least two statements");
    const n = /* @__PURE__ */ new Set();
    for (const i of t.evidence || []) {
      if (n.has(i.id) || s.has(i.id)) throw new Z("id ".concat(i.id, " is used twice"));
      n.add(i.id);
      for (const o of i.facts) if (!e[o.key] || !e[o.key].values.includes(o.value)) throw new Z("evidence ".concat(i.id, " shows ").concat(o.key, "=").concat(o.value, ", which is not in the keys"));
    }
    if (n.size === 0) throw new Z("a testimony needs evidence");
    const r = t.solution || {};
    if (!s.has(r.statement) || !n.has(r.evidence)) throw new Z("the solution names a statement or evidence that is not there");
  }
  function bv(t, e) {
    const s = [{ rule: "look", statement: e.statement, who: e.evidence, value: e.key }];
    return e.press && s.push({ rule: "press", statement: e.statement, value: "" }), s.push({ rule: "present", statement: e.statement, who: e.evidence, value: "" }), s;
  }
  function Uc(t) {
    kv(t);
    const e = Yr(t), s = t.solution, n = e.length === 1 && e[0].statement === s.statement && e[0].evidence === s.evidence && e[0].press === !!s.press, r = e.length === 1 ? bv(t, e[0]) : [], i = t.statements.length * t.evidence.length + Jr(t) + (e.length > 0 && e.some((o) => o.press) ? 3 : 0);
    return { unique: e.length === 1, solutions: e.length, deducible: n, band: n ? Zc(t, e) : null, steps: r, score: i, rules: { clash: e.length, near: Jr(t) } };
  }
  function vv(t) {
    const e = Uc(t);
    if (!e.unique) throw new Z("the testimony has ".concat(e.solutions, " clashes, not one"));
    if (!e.deducible) throw new Z("the clash is not the pair the solution names");
    return e;
  }
  function Qr(t, e) {
    for (const s of t.keys) if (s.key === e) return s;
    throw new Z('no key "'.concat(e, '"'));
  }
  function Fc(t, e) {
    var _a3;
    const s = Qr(t, e.key), r = ((_a3 = s.claim) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
    return r.length > 0 ? r[0].toUpperCase() + r.slice(1) : r;
  }
  function wv(t, e) {
    var _a3;
    const s = Qr(t, e.key);
    return ((_a3 = s.fact) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
  }
  function Bc(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = { wit: (_b3 = e.wit) != null ? _b3 : fv }, n = {};
    for (const r of t.evidence) {
      const o = (_c2 = Qr(t, r.facts[0].key).item) != null ? _c2 : r.id;
      n[o] = ((_d2 = n[o]) != null ? _d2 : 0) + 1, s[r.id] = (_e2 = e[r.id]) != null ? _e2 : n[o] === 1 ? o : "".concat(o, " ").concat(n[o]);
    }
    return s;
  }
  function Kc(t, e) {
    var _a3;
    const s = Bc(t);
    t.names = s;
    const r = { intro: "".concat(s.wit, " is giving testimony. Press a statement to hear more, and present the evidence that proves one of them false.") };
    for (const i of t.statements) {
      r[i.id] = "".concat(i.claims.map((a) => Fc(t, a)).join(". "), ".");
      const o = ((_a3 = i.press) == null ? void 0 : _a3.claims) || [];
      o.length > 0 && (r["".concat(i.id, ".press")] = "Now that you ask. ".concat(o.map((a) => Fc(t, a)).join(". "), "."));
    }
    for (const i of t.evidence) r[i.id] = "".concat(s[i.id], ": ").concat(i.facts.map((o) => wv(t, o)).join(". "), ".");
    return t.text = r, t;
  }
  function yv(t, e = 0, s = "medium", n = 200) {
    if (!ks.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const [r, i] = pv[s], o = new st("vno-puzzles:testimony:".concat(e, ":").concat(s));
    for (let a = 0; a < n; a++) {
      const c = {};
      for (const S of $n) c[S.key] = o.choice(S.values);
      const l = $n.map((S) => S.key), d = (S, A = true) => {
        const j = hv[S].values, T = A ? c[S] : o.choice(j.filter((D) => D !== c[S]));
        return { key: S, value: T };
      }, h = o.choice(l), p = s !== "easy", f = l.filter((S) => S !== h), m = o.randrange(r), g = o.sample(f, p ? r : r - 1), k = new Set(g), b = [], v = p ? [h] : [];
      for (let S = 0; S < r; S++) {
        let A;
        if (S === m) if (p) {
          const j = g.pop();
          A = { claims: [d(j)], press: { claims: [d(h, false)] } };
        } else A = { claims: [d(h, false)] };
        else {
          const j = g.pop();
          if (A = { claims: [d(j)] }, p && o.random() < 0.5) {
            const T = f.filter((D) => !k.has(D) && !v.includes(D));
            if (T.length > 0) {
              const D = o.choice(T);
              v.push(D), A.press = { claims: [d(D)] };
            }
          }
        }
        b.push(A);
      }
      const w = o.sample(f, i - 1), y = [{ facts: [d(h)] }, ...w.map((S) => ({ facts: [d(S)] }))];
      if (s === "hard") {
        const S = f.filter((A) => !w.includes(A));
        for (let A = 1; A < y.length; A++) if (S.length > 0 && o.random() < 0.5) {
          const j = o.randrange(S.length);
          y[A].facts.push(d(S[j])), S.splice(j, 1);
        }
      }
      o.shuffle(y);
      for (let S = 0; S < b.length; S++) b[S].id = "t".concat(S + 1);
      for (let S = 0; S < y.length; S++) y[S].id = "e".concat(S + 1);
      const $ = b[m].id, x = y.find((S) => S.facts[0].key === h && S.facts[0].value === c[h] && S.facts.filter((A) => A.key === h).length === 1).id, z = /* @__PURE__ */ new Set();
      for (const S of b) for (const A of Vr(S)) z.add(A.key);
      for (const S of y) for (const A of S.facts) z.add(A.key);
      const _ = { format: We, kind: "testimony", size: r, seed: e, band: s, witness: "wit", keys: $n.filter((S) => z.has(S.key)).map((S) => ({ ...S })), statements: b, evidence: y, solution: { statement: $, evidence: x, press: p } };
      if (mv(_).length > 0) continue;
      const O = Yr(_);
      if (O.length !== 1 || O[0].statement !== $ || O[0].evidence !== x || Zc(_, O) !== s) continue;
      const R = Uc(_);
      return _.difficulty = { steps: R.steps.length, score: R.score, rules: R.rules }, _.steps = R.steps, Kc(_);
    }
    throw new Z("no ".concat(s, " testimony found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  const Sv = [{ prompt: "Who was observed in the grand library shortly before the grandfather clock struck nine?", correct: "Colonel Ash", distractors: ["Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"] }, { prompt: "Which weapon was retrieved from the locked conservatory display case?", correct: "antique dagger", distractors: ["silver candlestick", "braided rope", "heavy vase", "vial of poison"] }, { prompt: "Where was the secret passage behind the book shelves discovered?", correct: "study", distractors: ["wine cellar", "ballroom", "billiard room", "observatory"] }, { prompt: "What piece of physical evidence directly contradicted the witness testimony?", correct: "stopped pocket watch", distractors: ["torn letter", "muddy boot print", "forged will", "broken seal"] }, { prompt: "Which motive was confirmed by the intercepted encrypted ledger?", correct: "blackmail", distractors: ["jealousy", "inheritance", "professional rivalry", "political revenge"] }, { prompt: "What unusual scent was noted lingering near the crime scene?", correct: "bitter almonds", distractors: ["burnt pipe tobacco", "damp earth", "lavender water", "kerosene"] }, { prompt: "Who was the last person seen leaving through the side garden gate?", correct: "the hooded courier", distractors: ["the estate groundskeeper", "the evening maid", "the carriage driver", "the visiting doctor"] }, { prompt: "What item was found concealed beneath the floorboards in the attic?", correct: "brass key", distractors: ["leather diary", "ruby pendant", "stained handkerchief", "wax seal stamp"] }, { prompt: "At what time did the station train arrive on the night of the incident?", correct: "ten forty-five", distractors: ["nine fifteen", "eleven thirty", "midnight sharp", "ten o clock"] }, { prompt: "Which room had its window latch deliberately forced open from the inside?", correct: "parlor", distractors: ["scullery", "music room", "dining hall", "guest bedroom"] }];
  function $v(t) {
    var _a3;
    return (_a3 = t.names) != null ? _a3 : {};
  }
  function zv(t, e) {
    var _a3, _b3, _c2, _d2, _e2;
    const s = { ...(_a3 = t.names) != null ? _a3 : {} };
    for (const r of t.questions || []) for (const i of r.options || []) s[i] || (s[i] = i);
    const n = { intro: (_c2 = (_b3 = t.text) == null ? void 0 : _b3.intro) != null ? _c2 : "Answer the following multiple-choice questions." };
    for (const r of t.questions || []) n[r.id] = (_e2 = (_d2 = t.text) == null ? void 0 : _d2[r.id]) != null ? _e2 : "Question ".concat(r.id);
    return { names: s, text: n };
  }
  function _v(t = 0, e, s = "medium") {
    if (!ks.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = Math.max(1, Math.min(10, e != null ? e : s === "easy" ? 3 : s === "medium" ? 4 : 5)), i = new st("vno-puzzles:quiz:".concat(t, ":").concat(s, ":").concat(r)), o = s === "easy" ? 2 : s === "medium" ? 3 : 4, a = i.sample(Sv, r), c = [], l = {}, d = {}, h = { intro: "Answer the following questions carefully based on the investigation." };
    for (let g = 0; g < a.length; g++) {
      const k = a[g], b = "q".concat(g + 1);
      h[b] = k.prompt;
      const v = i.sample(k.distractors, o), w = [k.correct, ...v];
      i.shuffle(w);
      const y = [];
      let $ = "";
      for (let x = 0; x < w.length; x++) {
        const z = "".concat(b, "_o").concat(x + 1);
        y.push(z), d[z] = w[x], w[x] === k.correct && ($ = z);
      }
      c.push({ id: b, options: y, answer: $ }), l[b] = $;
    }
    const p = s === "hard" ? 3 : s === "medium" ? 2 : 1, f = c.map((g) => ({ rule: "answer", who: g.id, value: g.answer })), m = { steps: r, score: r * p, rules: { quiz: r } };
    return { format: We, kind: "quiz", seed: t, band: s, questions: c, solution: l, difficulty: m, steps: f, names: d, text: h };
  }
  function jv(t) {
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
  function xv(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    jv(t);
    const e = (_a3 = t.steps) != null ? _a3 : t.questions.map((i) => ({ rule: "answer", who: i.id, value: i.answer })), s = (_c2 = (_b3 = t.difficulty) == null ? void 0 : _b3.score) != null ? _c2 : t.questions.length * 2, n = (_e2 = (_d2 = t.difficulty) == null ? void 0 : _d2.rules) != null ? _e2 : { quiz: t.questions.length };
    return { unique: true, solutions: 1, deducible: true, band: (_f2 = t.band) != null ? _f2 : "medium", steps: e, score: s, rules: n };
  }
  function Ev(t) {
    return xv(t);
  }
  function Av(t, e) {
    const s = [];
    for (const n of t.questions) e[n.id] !== n.answer && s.push(n.id);
    return { correct: s.length === 0, wrong: s, score: t.questions.length - s.length, total: t.questions.length };
  }
  const qc = ["before", "after", "apart"];
  function Tv(t, e, s, n) {
    const r = t.categories, i = r[0].items, o = vn(t), a = [];
    for (let g = 1; g < r.length; g++) for (const k of r[g].items) a.push([g, k]);
    const c = {};
    for (let g = 0; g < a.length; g++) c[a[g][1]] = g;
    const l = o ? [...o] : [], d = Array.from({ length: a.length }, () => []);
    for (const g of e) {
      let k = Oc(g);
      qc.includes(g.type) && (k = k.concat(l));
      let b = -1;
      for (const w of k) c[w] !== void 0 && c[w] > b && (b = c[w]);
      const v = Math.max(b, 0);
      v < d.length && d[v].push(g);
    }
    const h = {};
    for (const g of i) h[g] = g;
    const p = Array.from({ length: r.length }, () => /* @__PURE__ */ new Set());
    let f = 0;
    function m(g) {
      if (g === a.length) return f++, f >= s;
      const [k, b] = a[g];
      for (const v of i) if (!p[k].has(v)) {
        if (p[k].add(v), h[b] = v, d[g].every((w) => qr(w, h, o)) && m(g + 1)) return true;
        p[k].delete(v);
      }
      return delete h[b], false;
    }
    return a.length > 0 && m(0), f;
  }
  function zn(t, e = 2, s) {
    return Tv(t, t.clues, e);
  }
  class Gc {
    constructor(e, s) {
      __publicField(this, "p");
      __publicField(this, "clues");
      __publicField(this, "idx");
      __publicField(this, "cats");
      __publicField(this, "ordinal");
      __publicField(this, "state");
      this.p = e, this.clues = s, this.idx = bs(e), this.cats = e.categories.map((n) => [...n.items]), this.ordinal = vn(e), this.state = /* @__PURE__ */ new Map();
      for (let n = 0; n < this.cats.length; n++) for (let r = n + 1; r < this.cats.length; r++) for (const i of this.cats[n]) for (const o of this.cats[r]) this.state.set(this.key(i, o), 0);
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
      const r = /* @__PURE__ */ new Set();
      for (let i = 0; i < s.length; i++) this.get(e, s[i]) !== -1 && r.add(i);
      return r;
    }
  }
  function* Iv(t) {
    for (const e of t.clues) {
      const s = e.type;
      if (s === "is") yield [t.key(e.a, e.b), 1, { clue: e.id }];
      else if (s === "not") yield [t.key(e.a, e.b), -1, { clue: e.id }];
      else if (s === "neither") for (const n of e.b) yield [t.key(e.a, n), -1, { clue: e.id }];
      else if (s === "either") {
        const n = t.cats[t.idx[e.b[0]]];
        for (const r of n) e.b.includes(r) || (yield [t.key(e.a, r), -1, { clue: e.id }]);
      } else if (s === "oneof") {
        const n = t.cats[t.idx[e.b[0]]];
        for (const r of e.a) for (const i of n) e.b.includes(i) || (yield [t.key(r, i), -1, { clue: e.id }]);
      }
    }
  }
  function* Mv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, r] = e.split("|"), i = t.cats[t.idx[r]];
      for (const a of i) a !== r && (yield [t.key(n, a), -1, { from: [[n, r]] }]);
      const o = t.cats[t.idx[n]];
      for (const a of o) a !== n && (yield [t.key(a, r), -1, { from: [[n, r]] }]);
    }
  }
  function* Ov(t) {
    for (let e = 0; e < t.cats.length; e++) for (let s = e + 1; s < t.cats.length; s++) {
      for (const n of t.cats[e]) {
        const r = t.cats[s].map((o) => t.key(n, o)), i = r.filter((o) => t.state.get(o) === 0);
        i.length === 1 && !r.some((o) => t.state.get(o) === 1) && (yield [i[0], 1, { from: r.filter((o) => o !== i[0]).map((o) => o.split("|")) }]);
      }
      for (const n of t.cats[s]) {
        const r = t.cats[e].map((o) => t.key(o, n)), i = r.filter((o) => t.state.get(o) === 0);
        i.length === 1 && !r.some((o) => t.state.get(o) === 1) && (yield [i[0], 1, { from: r.filter((o) => o !== i[0]).map((o) => o.split("|")) }]);
      }
    }
  }
  function* Nv(t) {
    for (const e of t.clues) if (e.type === "either") {
      const [s, n] = e.b;
      t.get(e.a, s) === -1 && (yield [t.key(e.a, n), 1, { clue: e.id, from: [t.key(e.a, s).split("|")] }]), t.get(e.a, n) === -1 && (yield [t.key(e.a, s), 1, { clue: e.id, from: [t.key(e.a, n).split("|")] }]);
    } else if (e.type === "oneof") {
      const [s, n] = e.a, [r, i] = e.b, o = [t.key(s, r), t.key(n, i)], a = [t.key(s, i), t.key(n, r)];
      if (o.some((c) => t.state.get(c) === -1)) for (const c of a) yield [c, 1, { clue: e.id, from: o.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
      if (a.some((c) => t.state.get(c) === -1)) for (const c of o) yield [c, 1, { clue: e.id, from: a.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
    }
  }
  function* Pv(t) {
    if (!t.ordinal) return;
    const e = t.ordinal;
    for (const s of t.clues) {
      const n = s.type;
      if (!qc.includes(n)) continue;
      const r = s.a, i = s.b, o = t.positions(r), a = t.positions(i);
      let c;
      if (n === "before") c = (l, d) => l < d;
      else if (n === "after") c = (l, d) => l > d;
      else {
        const l = s.n;
        c = (d, h) => Math.abs(d - h) === l;
      }
      if (!e.includes(r)) for (const l of Array.from(o).sort((d, h) => d - h)) {
        let d = false;
        for (const h of a) if (c(l, h)) {
          d = true;
          break;
        }
        d || (yield [t.key(r, e[l]), -1, { clue: s.id }]);
      }
      if (!e.includes(i)) for (const l of Array.from(a).sort((d, h) => d - h)) {
        let d = false;
        for (const h of o) if (c(h, l)) {
          d = true;
          break;
        }
        d || (yield [t.key(i, e[l]), -1, { clue: s.id }]);
      }
    }
  }
  function* Rv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, r] = e.split("|"), i = [[n, r], [r, n]];
      for (const [o, a] of i) for (let c = 0; c < t.cats.length; c++) if (!(c === t.idx[o] || c === t.idx[a])) for (const l of t.cats[c]) {
        const d = t.get(o, l);
        d !== 0 && (yield [t.key(a, l), d, { from: [e.split("|"), t.key(o, l).split("|")] }]);
      }
    }
  }
  const Wc = { clue: Iv, elim: Mv, last: Ov, either: Nv, order: Pv, trans: Rv };
  function bt(t, e, s = Wt) {
    var _a3;
    const n = e != null ? e : t.clues, r = new Gc(t, n), i = [];
    let o = null, a = true;
    for (; a && !r.known(); ) {
      a = false;
      for (const f of Wt) if (s.includes(f)) {
        for (const [m, g, k] of Wc[f](r)) {
          const b = r.state.get(m);
          if (b === g) continue;
          if (b !== 0) {
            o = { rule: f, cell: m.split("|") };
            break;
          }
          r.state.set(m, g);
          const v = { rule: f, cell: m.split("|"), value: g === 1 ? "yes" : "no", ...k };
          i.push(v), a = true;
          break;
        }
        if (a || o) break;
      }
      if (o) break;
    }
    const c = {};
    for (const [f, m] of r.state.entries()) c[f] = m === 1 ? "yes" : m === -1 ? "no" : "";
    let l = false;
    if (!o && r.known()) {
      const f = Nt(t);
      l = Array.from(r.state.entries()).every(([m, g]) => {
        const [k, b] = m.split("|");
        return f[k] === f[b] == (g === 1);
      });
    }
    const d = {};
    for (const f of Wt) d[f] = 0;
    for (const f of i) d[f.rule] = ((_a3 = d[f.rule]) != null ? _a3 : 0) + 1;
    const h = {};
    for (const [f, m] of Object.entries(d)) m > 0 && (h[f] = m);
    const p = Object.entries(d).reduce((f, [m, g]) => {
      var _a4;
      return f + ((_a4 = Vb[m]) != null ? _a4 : 1) * g;
    }, 0);
    return { solved: l, contradiction: o, grid: c, steps: i, rules: h, score: p };
  }
  function Jt(t, e, s = Wt) {
    const n = t.clues, r = new Gc(t, n);
    let i = true;
    for (; i && !r.known(); ) {
      i = false;
      for (const a of Wt) if (s.includes(a)) for (const [c, l] of Wc[a](r)) {
        const d = r.state.get(c);
        if (d !== l) {
          if (d !== 0) return false;
          r.state.set(c, l), i = true;
        }
      }
    }
    if (!r.known()) return false;
    const o = Nt(t);
    return Array.from(r.state.entries()).every(([a, c]) => {
      const [l, d] = a.split("|");
      return o[l] === o[d] == (c === 1);
    });
  }
  function Xr(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = s != null ? s : t.clues, i = (e != null ? e : bt(t, n)).rules, o = (_a3 = i.trans) != null ? _a3 : 0;
    if (t.ordinal) return o >= ((_b3 = t.hardTrans) != null ? _b3 : 8) ? "hard" : o > 0 || ((_c2 = i.either) != null ? _c2 : 0) > 0 || n.some((c) => c.type === "either" || c.type === "oneof") ? "medium" : "easy";
    const a = n.some((c) => c.type === "is");
    return o >= 3 && !a ? "hard" : o > 0 || ((_d2 = i.either) != null ? _d2 : 0) > 0 || ((_e2 = i.order) != null ? _e2 : 0) > 0 ? "medium" : "easy";
  }
  function _n(t, e) {
    return t === "easy" ? e && e.ordinal ? [...Ic, "order"] : Ic : Wt;
  }
  function Hc(t, e) {
    const s = e != null ? e : bt(t);
    return { steps: s.steps.length, score: s.score, rules: s.rules };
  }
  const Ss = { intro: "The bakery delivered one order each day. Work out which delivery was which.", categories: [{ key: "day", ref: "the {n} delivery", names: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], prefix: "d" }, { key: "customer", ref: "the delivery to {n}", names: ["Ana", "Boris", "Cleo", "Dino", "Eva"], prefix: "c" }, { key: "cake", ref: "the {n} delivery", names: ["lemon cake", "poppy roll", "plum tart", "honey bun", "rye loaf"], prefix: "k" }, { key: "town", ref: "the delivery to {n}", names: ["Oakville", "Pinebrook", "Riverton", "Stonegate", "Wheatley"], prefix: "t" }], unit: "days" }, Vc = [3, 4, 5], Dv = { 3: 3, 4: 6, 5: 10 };
  function Lv(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.categories.length; n++) {
      const r = Ss.categories[n], i = t.categories[n];
      for (let o = 0; o < i.items.length; o++) {
        const a = i.items[o];
        s[a] = (_b3 = e[a]) != null ? _b3 : r && o < r.names.length ? r.names[o] : a;
      }
    }
    return s;
  }
  const Cv = Lv;
  function Yc(t) {
    return Ss.intro;
  }
  function Zv(t, e) {
    const s = [];
    for (const o of Ss.categories) s.push({ key: o.key, items: Array.from({ length: e }, (a, c) => "".concat(o.prefix).concat(c + 1)), ref: o.ref });
    const n = [];
    for (let o = 1; o < s.length; o++) {
      const a = [...s[o].items];
      t.shuffle(a), n.push(a);
    }
    const r = {}, i = s[0].items;
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      r[a] = {};
      for (let c = 0; c < n.length; c++) r[a][s[c + 1].key] = n[c][o];
    }
    return [s, r];
  }
  function Jc(t, e, s) {
    return e.indexOf(t[s]);
  }
  function Uv(t, e, s, n) {
    const r = e[0].items, i = [];
    for (let a = 0; a < e.length; a++) for (const c of e[a].items) i.push([a, c]);
    const o = [];
    for (let a = 0; a < i.length; a++) for (let c = 0; c < i.length; c++) {
      const [l, d] = i[a], [h, p] = i[c];
      if (l === h) continue;
      a < c && (s[d] === s[p] ? n !== "hard" && o.push({ type: "is", a: d, b: p }) : o.push({ type: "not", a: d, b: p }));
      const f = Jc(s, r, d), m = Jc(s, r, p);
      f < m && o.push({ type: "before", a: d, b: p }), a < c && f !== m && o.push({ type: "apart", a: d, b: p, n: Math.abs(f - m) });
    }
    if (n !== "easy") {
      for (const [a, c] of i) for (let l = 0; l < e.length; l++) {
        if (l === a) continue;
        const d = e[l].items.filter((p) => s[p] === s[c]), h = e[l].items.filter((p) => s[p] !== s[c]);
        for (const p of h) {
          const f = [d[0], p];
          t.shuffle(f), o.push({ type: "either", a: c, b: f });
        }
        if (h.length >= 2) for (let p = 0; p < h.length; p++) for (let f = p + 1; f < h.length; f++) o.push({ type: "neither", a: c, b: [h[p], h[f]] });
      }
      for (let a = 0; a < e.length; a++) for (let c = 0; c < e.length; c++) {
        if (a === c) continue;
        const l = e[a].items, d = e[c].items;
        for (let h = 0; h < l.length; h++) for (let p = h + 1; p < l.length; p++) {
          const f = l[h], m = l[p], g = d.find((v) => s[v] === s[f]), k = d.find((v) => s[v] === s[m]), b = [g, k];
          t.shuffle(b), o.push({ type: "oneof", a: [f, m], b });
        }
      }
    } else for (const [a, c] of i) for (let l = 0; l < e.length; l++) {
      if (l === a) continue;
      const d = e[l].items.filter((h) => s[h] !== s[c]);
      if (d.length >= 2) for (let h = 0; h < d.length; h++) for (let p = h + 1; p < d.length; p++) o.push({ type: "neither", a: c, b: [d[h], d[p]] });
    }
    return t.shuffle(o), o;
  }
  function Fv(t) {
    return t === "easy" ? _n("easy", { ordinal: true }) : t === "medium" ? [..._n("easy", { ordinal: true }), "either"] : _n("hard");
  }
  function Bv(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function jn(t, e) {
    return { ...t, clues: Bv(e) };
  }
  function Kv(t, e, s, n) {
    const r = [...e], i = Array.from({ length: r.length }, (a, c) => c);
    n.shuffle(i);
    const o = /* @__PURE__ */ new Set();
    for (const a of i) {
      const c = r.filter((l, d) => d !== a && !o.has(d));
      Jt(jn(t, c), void 0, s) && o.add(a);
    }
    return r.filter((a, c) => !o.has(c));
  }
  function qv(t = 4, e = 0, s = "medium", n = 200) {
    if (!Vc.includes(t)) throw new Z("logic grids have ".concat(Vc.join(" or "), " items per category, not ").concat(t));
    if (!ks.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = new st("vno-puzzles:logic:".concat(e, ":").concat(s, ":").concat(t));
    for (let i = 0; i < n; i++) {
      const [o, a] = Zv(r, t), c = { format: We, kind: "logic", size: t, seed: e, band: s, categories: o, solution: a, ordinal: { category: o[0].key, unit: Ss.unit }, hardTrans: Dv[t] }, l = Fv(s), d = Nt({ ...c }), h = Uv(r, o, d, s), p = [];
      for (const k of h) if (p.push(k), p.length % 3 === 0 && Jt(jn(c, p), void 0, l)) break;
      if (!Jt(jn(c, p), void 0, l)) continue;
      const f = Kv(c, p, l, r);
      r.shuffle(f);
      const m = jn(c, f), g = bt(m);
      if (!(!g.solved || Xr(m, g) !== s || zn(m, 2) !== 1) && !(s === "medium" && !f.some((k) => k.type === "either" || k.type === "oneof"))) return m.difficulty = Hc(m, g), m.steps = g.steps, Gv(m);
    }
    throw new Z("no ".concat(s, " logic grid found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function Gv(t, e) {
    const s = Cv(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = ei(t, n, s);
    return t.text.intro = Yc(), t;
  }
  function Wv(t) {
    Nc(t);
    const e = Nt(t), s = vn(t);
    for (const r of t.clues) if (!qr(r, e, s)) throw new Z("clue ".concat(r.id, " is false in the solution"));
    if (zn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const n = bt(t);
    if (!n.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return n;
  }
  const Hv = { suspect: ["Colonel Ash", "Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"], weapon: ["rope", "candlestick", "poison", "dagger", "vase"], place: ["library", "kitchen", "garden", "cellar", "study"], motive: ["jealousy", "greed", "revenge", "fear", "love"] }, Vv = { suspect: ["the tall guest", "the left-handed guest", "the youngest guest", "the quiet guest", "the guest in grey"], weapon: ["the heavy weapon", "the metal weapon", "the sharp weapon", "the silent weapon", "the fragile weapon"], place: ["the room upstairs", "the room by the stairs", "the room with the fire", "the room below ground", "the room facing east"] };
  function xn(t) {
    var _a3, _b3, _c2, _d2, _e2;
    if (t.kind === "knights") return Lc(t);
    if (t.kind === "testimony") return Bc(t);
    if (t.kind === "quiz") return $v(t);
    if (t.kind === "logic") {
      const n = (_a3 = t.names) != null ? _a3 : {}, r = {};
      for (let i = 0; i < t.categories.length; i++) {
        const o = Ss.categories[i], a = t.categories[i];
        for (let c = 0; c < a.items.length; c++) {
          const l = a.items[c];
          r[l] = (_b3 = n[l]) != null ? _b3 : o && c < o.names.length ? o.names[c] : l;
        }
      }
      return r;
    }
    const e = (_c2 = t.names) != null ? _c2 : {}, s = {};
    for (const n of t.categories) {
      const r = (_d2 = Hv[n.key]) != null ? _d2 : [];
      for (let i = 0; i < n.items.length; i++) {
        const o = n.items[i];
        s[o] = (_e2 = e[o]) != null ? _e2 : i < r.length ? r[i] : o;
      }
    }
    return s;
  }
  function Yv(t) {
    var _a3;
    const e = {};
    for (const s of t.categories) {
      const n = (_a3 = Vv[s.key]) != null ? _a3 : [];
      for (let r = 0; r < s.items.length; r++) r < n.length && (e[s.items[r]] = n[r]);
    }
    return e;
  }
  function He(t) {
    return t.length > 0 ? t[0].toUpperCase() + t.slice(1) : t;
  }
  function Jv(t, e) {
    return t === "suspect" || t === "motive" ? e : "the ".concat(e);
  }
  const Qv = { "suspect,weapon": ["{X} had {Y}.", "{X} did not have {Y}."], "suspect,place": ["{X} was in {Y}.", "{X} was not in {Y}."], "suspect,motive": ["{X} acted out of {Y}.", "{X} did not act out of {Y}."], "weapon,place": ["Whoever had {X} was in {Y}.", "Whoever had {X} was not in {Y}."], "weapon,motive": ["Whoever had {X} acted out of {Y}.", "Whoever had {X} did not act out of {Y}."], "place,motive": ["Whoever was in {X} acted out of {Y}.", "Whoever was in {X} did not act out of {Y}."] }, Xv = { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." };
  function ew(t, e, s) {
    var _a3, _b3;
    const n = (_a3 = t.descr) != null ? _a3 : {}, r = new Set((_b3 = e.descr) != null ? _b3 : []);
    function i(b) {
      return r.has(b) && n[b] ? n[b] : Jv(Ht(t, b), s[b]);
    }
    const o = e.a, a = Array.isArray(e.b) ? e.b : [e.b], c = Ht(t, o), l = Ht(t, a[0]);
    if (e.type === "either") {
      const b = Xv["".concat(c, ",").concat(l)];
      if (!b) throw new Error("no sentence for an either clue of ".concat(c, " and ").concat(l));
      return He(b.replace("{A}", i(o)).replace("{B1}", i(a[0])).replace("{B2}", i(a[1])));
    }
    const d = bs(t), [h, p] = d[o] < d[a[0]] ? [o, a[0]] : [a[0], o], f = Ht(t, h), m = Ht(t, p), g = Qv["".concat(f, ",").concat(m)];
    if (!g) throw new Error("no sentence for a ".concat(e.type, " clue of ").concat(c, " and ").concat(l));
    const k = e.type === "not" ? g[1] : g[0];
    return He(k.replace("{X}", i(h)).replace("{Y}", i(p)));
  }
  function tw(t, e, s) {
    var _a3, _b3;
    return ((_a3 = t.categories[bs(t)[e]].ref) != null ? _a3 : "{n}").replace("{n}", (_b3 = s[e]) != null ? _b3 : e);
  }
  function sw(t, e, s) {
    var _a3, _b3;
    const n = e.type, r = (_b3 = (_a3 = t.ordinal) == null ? void 0 : _a3.unit) != null ? _b3 : "", i = (c) => tw(t, c, s), o = e.a, a = e.b;
    if (n === "is") return He("".concat(i(o), " is ").concat(i(a), "."));
    if (n === "not") return He("".concat(i(o), " is not ").concat(i(a), "."));
    if (n === "either") return He("".concat(i(o), " is either ").concat(i(a[0]), " or ").concat(i(a[1]), "."));
    if (n === "neither") return He("".concat(i(o), " is neither ").concat(i(a[0]), " nor ").concat(i(a[1]), "."));
    if (n === "oneof") return He("Of ".concat(i(o[0]), " and ").concat(i(o[1]), ", one is ").concat(i(a[0]), " and the other is ").concat(i(a[1]), "."));
    if (n === "before") return He("".concat(i(o), " came before ").concat(i(a), "."));
    if (n === "after") return He("".concat(i(o), " came after ").concat(i(a), "."));
    if (n === "apart") return He("".concat(i(o), " and ").concat(i(a), " are exactly ").concat(e.n, " ").concat(r || "places", " apart."));
    throw new Error("no sentence for a ".concat(n, " clue"));
  }
  function ei(t, e, s) {
    var _a3;
    const n = (_a3 = s != null ? s : t.names) != null ? _a3 : xn(t);
    return t.kind === "logic" ? sw(t, e, n) : ew(t, e, n);
  }
  function nw(t, e) {
    var _a3;
    return "The body was found in the ".concat(((_a3 = e != null ? e : t.names) != null ? _a3 : xn(t))[t.murder.place], ".");
  }
  function rw(t, e) {
    if (t.kind === "knights") return Cc(t);
    if (t.kind === "logic") {
      const n = xn(t);
      t.names = n, t.text = {};
      for (const r of t.clues) t.text[r.id] = ei(t, r, n);
      return t.text.intro = Yc(), t;
    }
    if (t.kind === "testimony") return Kc(t);
    if (t.kind === "quiz") {
      const n = zv(t);
      return t.names = n.names, t.text = n.text, t;
    }
    const s = xn(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = ei(t, n, s);
    return t.murder && (t.text.murder = nw(t, s)), t;
  }
  const Qc = ["suspect", "weapon", "place"], iw = { suspect: "s", weapon: "w", place: "p", motive: "m" }, Xc = [3, 4];
  function ow(t, e, s = false) {
    const r = (s ? [...Qc, "motive"] : [...Qc]).map((a) => ({ key: a, items: Array.from({ length: e }, (c, l) => "".concat(iw[a]).concat(l + 1)) })), i = [];
    for (let a = 1; a < r.length; a++) {
      const c = [...r[a].items];
      t.shuffle(c), i.push(c);
    }
    const o = {};
    for (let a = 0; a < r[0].items.length; a++) {
      const c = r[0].items[a];
      o[c] = {};
      for (let l = 0; l < i.length; l++) o[c][r[l + 1].key] = i[l][a];
    }
    return [r, o];
  }
  function aw(t, e, s, n) {
    const r = [], i = [];
    for (let o = 0; o < e.length; o++) for (const a of e[o].items) i.push([o, a]);
    for (let o = 0; o < i.length; o++) for (let a = o + 1; a < i.length; a++) {
      const [c, l] = i[o], [d, h] = i[a];
      c !== d && (s[l] === s[h] ? n !== "hard" && r.push({ type: "is", a: l, b: h }) : r.push({ type: "not", a: l, b: h }));
    }
    for (const [o, a] of i) for (let c = 0; c < e.length; c++) {
      if (c === o) continue;
      const l = e[c].items.filter((h) => s[h] === s[a]), d = e[c].items.filter((h) => s[h] !== s[a]);
      for (const h of d) {
        const p = [l[0], h];
        t.shuffle(p), r.push({ type: "either", a, b: p });
      }
    }
    return t.shuffle(r), r;
  }
  function cw(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function $s(t, e) {
    return { ...t, clues: cw(e) };
  }
  function lw(t, e, s, n) {
    const r = [...e], i = Array.from({ length: r.length }, (a, c) => c);
    n.shuffle(i);
    const o = /* @__PURE__ */ new Set();
    for (const a of i) {
      const c = r.filter((l, d) => d !== a && !o.has(d));
      Jt($s(t, c), void 0, s) && o.add(a);
    }
    return r.filter((a, c) => !o.has(c));
  }
  function dw(t, e, s) {
    const n = Yv(e), r = [];
    for (const i of s) {
      const a = [i.a].concat(Array.isArray(i.b) ? i.b : [i.b]).filter((c) => n[c] && t.random() < 0.5);
      r.push(a.length > 0 ? { ...i, descr: a } : i);
    }
    return [r, n];
  }
  function uw(t, e, s = 0, n = "medium", r = 200, i = false, o = false) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    let a = "murdle", c = 3, l = 0, d = "medium", h = 200, p = false, f = false, m;
    if (typeof t == "object" && t !== null ? (a = (_a3 = t.kind) != null ? _a3 : "murdle", c = (_b3 = t.size) != null ? _b3 : null, l = (_c2 = t.seed) != null ? _c2 : 0, d = (_d2 = t.band) != null ? _d2 : "medium", h = (_e2 = t.maxTries) != null ? _e2 : 200, p = (_f2 = t.motive) != null ? _f2 : false, f = (_g2 = t.attrs) != null ? _g2 : false, m = t.count) : typeof t == "string" && (a = t, c = null, l = s, d = n, h = r, p = i, f = o), c == null && (c = (_h2 = { murdle: 3, logic: 4, knights: 3, testimony: 3, quiz: 4 }[a]) != null ? _h2 : 3), a === "logic") return qv(c, l, d, h);
    if (a === "knights") return dv(c, l, d, h);
    if (a === "testimony") return yv(c, l, d, h);
    if (a === "quiz") return _v(l, m != null ? m : c, d);
    if (a !== "murdle") throw new Z('unknown puzzle kind "'.concat(a, '" (murdle, logic, knights, testimony or quiz)'));
    if (!Xc.includes(c)) throw new Z("murdle makes puzzles of ".concat(Xc.join(" or "), " items per category, not ").concat(c));
    if (!ks.includes(d)) throw new Z('unknown band "'.concat(d, '" (easy, medium or hard)'));
    let g = "vno-puzzles:".concat(a, ":").concat(l, ":").concat(d);
    (c !== 3 || p || f) && (g += ":".concat(c).concat(p ? "m" : "").concat(f ? "a" : ""));
    const k = new st(g), b = _n(d);
    for (let v = 0; v < h; v++) {
      const [w, y] = ow(k, c, p), $ = { format: We, kind: a, size: c, seed: l, band: d, categories: w, solution: y }, x = Nt({ ...$ }), z = aw(k, w, x, d), _ = [];
      let O = 0;
      for (const T of z) {
        if (T.type === "is" && d === "medium") {
          if (O > 0) continue;
          O++;
        }
        if (_.push(T), Jt($s($, _), void 0, b)) break;
      }
      if (!Jt($s($, _), void 0, b)) continue;
      const R = lw($, _, b, k);
      let S = $s($, R), A = bt(S);
      if (!A.solved || Xr(S, A) !== d || (k.shuffle(R), S = $s($, R), A = bt(S), !A.solved || Xr(S, A) !== d || zn(S, 2) !== 1)) continue;
      if (f) {
        const [T, D] = dw(k, S, S.clues);
        S.clues = T, S.descr = D;
      }
      const j = k.choice(w[2].items);
      return S.murder = { place: j }, S.murder.answer = Gr(S), S.difficulty = Hc(S, A), S.steps = A.steps, rw(S);
    }
    throw new Z("no ".concat(d, " puzzle found for seed ").concat(l, " in ").concat(h, " tries"));
  }
  function hw(t) {
    var _a3;
    const e = (_a3 = t.kind) != null ? _a3 : "murdle";
    if (e === "knights") return iv(t);
    if (e === "logic") return Wv(t);
    if (e === "testimony") return vv(t);
    if (e === "quiz") return Ev(t);
    Nc(t);
    const s = Nt(t), n = vn(t);
    for (const i of t.clues) if (!qr(i, s, n)) throw new Z("clue ".concat(i.id, " is false in the solution"));
    if (zn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const r = bt(t);
    if (!r.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return r;
  }
  function el(t) {
    if (t.includes(",")) {
      const [e, s] = t.split(",");
      return "".concat(e, "|").concat(s);
    }
    return t;
  }
  function pw(t, e) {
    var _a3, _b3, _c2;
    const s = el(e), n = { ...t }, r = (_b3 = (_a3 = n[e]) != null ? _a3 : n[s]) != null ? _b3 : "", o = (_c2 = { "": "no", no: "yes", yes: "" }[r]) != null ? _c2 : "";
    return o ? (n[e] = o, n[s] = o) : (delete n[e], delete n[s]), n;
  }
  function fw(t, e, s) {
    var _a3;
    const n = el(s);
    if (((_a3 = e[s]) != null ? _a3 : e[n]) !== "yes") return { ...e };
    const [r, i] = Re(n), o = bs(t), a = { ...e };
    for (const c of rt(t)) {
      const [l, d] = Re(c);
      c === n || a[c] || a["".concat(l, ",").concat(d)] || o[l] === o[r] && o[d] === o[i] && (l === r || d === i) && (a[c] = "no", a["".concat(l, ",").concat(d)] = "no");
    }
    return a;
  }
  function ti(t) {
    const e = Nt(t), s = {};
    for (const n of rt(t)) {
      const [r, i] = Re(n), o = e[r] === e[i] ? "yes" : "no";
      s[n] = o, s["".concat(r, ",").concat(i)] = o;
    }
    return s;
  }
  function mw(t, e) {
    const s = Gr(t), n = [];
    for (const r of Object.keys(s)) e[r] !== s[r] && n.push(r);
    return { correct: n.length === 0, wrong: n };
  }
  function gw(t, e) {
    var _a3;
    if (t.kind === "knights") return uv(t, e);
    if (t.kind === "quiz") {
      const i = Av(t, e);
      return { correct: i.correct, wrong: i.wrong };
    }
    const s = ti(t), n = rt(t), r = [];
    for (const i of n) {
      const [o, a] = Re(i), l = ((_a3 = e[i]) != null ? _a3 : e["".concat(o, ",").concat(a)]) === "yes", d = s[i] === "yes";
      l !== d && r.push(i);
    }
    return { correct: r.length === 0, wrong: r };
  }
  const kw = ["murdle", "logic"], bw = ["easy", "medium", "hard"], si = [3, 4], vw = 8, tl = /* @__PURE__ */ new Map();
  function sl(t, e) {
    const s = "".concat(t.kind, ":").concat(t.size, ":").concat(t.seed, ":").concat(t.band);
    {
      const i = tl.get(s);
      if (i) return i;
    }
    const n = ((i) => uw(i));
    let r = new Z("no seed tried");
    for (let i = 0; i < vw; i++) {
      const o = t.seed + i;
      try {
        const a = n({ kind: t.kind, size: t.size, seed: o, band: t.band });
        hw(a);
        const c = { puzzle: a, seed: o, skipped: i };
        return e || tl.set(s, c), c;
      } catch (a) {
        r = a;
      }
    }
    throw r instanceof Error ? r : new Z(String(r));
  }
  const ww = (t) => t.categories.map((e) => e.key), yw = (t) => t.categories.flatMap((e) => e.items), ni = (t, e) => Ht(t, e);
  function ri(t) {
    return t.kind !== "murdle" ? [] : ww(t).filter((e) => e !== "place");
  }
  function nl(t) {
    if (t.kind !== "murdle" || !t.murder) return null;
    const e = Gr({ categories: t.categories, murder: t.murder, solution: t.solution }), s = {};
    for (const n of ri(t)) s[n] = e[n];
    return s;
  }
  function Sw(t) {
    const e = ti(t);
    return rt(t).filter((s) => e[s] === "yes");
  }
  function $w(t) {
    const e = [];
    for (let s = 0; s < t.categories.length; s++) for (let n = s + 1; n < t.categories.length; n++) e.push({ rows: t.categories[s], cols: t.categories[n], key: "".concat(t.categories[s].key, "-").concat(t.categories[n].key) });
    return e;
  }
  const vt = (t, e) => {
    var _a3, _b3;
    const [s, n] = Re(e);
    return (_b3 = (_a3 = t[e]) != null ? _a3 : t["".concat(s, ",").concat(n)]) != null ? _b3 : "";
  }, zw = (t, e) => pw(t, e), _w = (t, e, s) => fw(t, e, s);
  function rl(t, e) {
    return rt(t).filter((s) => vt(e, s) === "yes").map((s) => Re(s));
  }
  function jw(t, e, s) {
    var _a3, _b3;
    if (t.kind === "murdle") {
      const r = { ...e, place: (_b3 = (_a3 = t.murder) == null ? void 0 : _a3.place) != null ? _b3 : "" }, i = mw(t, r);
      return { correct: i.correct, wrong: i.wrong.filter((o) => o !== "place") };
    }
    const n = gw(t, s);
    return { correct: n.correct, wrong: n.wrong };
  }
  const il = { is: { "suspect,weapon": "{X} had {Y}.", "suspect,place": "{X} was in {Y}.", "suspect,motive": "{X} acted out of {Y}.", "weapon,place": "Whoever had {X} was in {Y}.", "weapon,motive": "Whoever had {X} acted out of {Y}.", "place,motive": "Whoever was in {X} acted out of {Y}." }, not: { "suspect,weapon": "{X} did not have {Y}.", "suspect,place": "{X} was not in {Y}.", "suspect,motive": "{X} did not act out of {Y}.", "weapon,place": "Whoever had {X} was not in {Y}.", "weapon,motive": "Whoever had {X} did not act out of {Y}.", "place,motive": "Whoever was in {X} did not act out of {Y}." }, either: { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." }, isAny: "{X} goes with {Y}.", notAny: "{X} does not go with {Y}.", eitherAny: "{A} goes with either {B1} or {B2}.", logic: { is: "{A} goes with {B}.", not: "{A} does not go with {B}.", either: "{A} goes with either {B1} or {B2}.", neither: "{A} goes with neither {B1} nor {B2}.", oneof: "Of {A1} and {A2}, one goes with {B1} and the other with {B2}.", before: "{A} came before {B}.", after: "{A} came after {B}.", apart: "{A} and {B} are exactly {n} places apart." }, hint: { wrong: "Look again at {A} and {B}.", clue: "Clue {n} says: {text}", yes: "So {A} goes with {B}.", no: "So {A} cannot go with {B}.", elim: "{F0} goes with {F1}, so {A} cannot go with {B}.", last: "Everything else for {A} is ruled out, so {A} goes with {B}.", either: "One of the two is ruled out, so {A} goes with {B}.", order: "Counting the places in order, that rules out {A} {B}.", trans: "{A} and {B} are linked through {M}, so {A} {verb} {B}.", verbYes: "goes with", verbNo: "cannot go with", accuse: "The grid is complete. Make your accusation.", more: "The clues you have turned say no more. Turn another clue card." }, articles: true }, ol = { en: il, hr: { is: {}, not: {}, either: {}, isAny: "{X} i {Y} idu zajedno.", notAny: "{X} i {Y} ne idu zajedno.", eitherAny: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", logic: { is: "{A} i {B} idu zajedno.", not: "{A} i {B} ne idu zajedno.", either: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", neither: "{A} ne ide zajedno ni s jednim od ovih dvoje: {B1}, {B2}.", oneof: "Od ove dvije stvari, {A1} i {A2}, jedna ide uz {B1}, a druga uz {B2}.", before: "Redoslijed: {A}, a zatim {B}.", after: "Redoslijed: {B}, a zatim {A}.", apart: "{A} i {B}: u redoslijedu ih dijeli točno {n}." }, hint: { wrong: "Pogledaj ponovno: {A} i {B}.", clue: "Trag {n}: {text}", yes: "Zato {A} i {B} idu zajedno.", no: "Zato {A} i {B} ne idu zajedno.", elim: "{F0} i {F1} idu zajedno, pa {A} i {B} ne idu zajedno.", last: "Sve drugo za {A} je isključeno, pa {A} i {B} idu zajedno.", either: "Jedno od dvoje je isključeno, pa {A} i {B} idu zajedno.", order: "Brojanje u redoslijedu isključuje: {A}, {B}.", trans: "{A} i {B} povezani su preko: {M}, pa {verb}.", verbYes: "idu zajedno", verbNo: "ne idu zajedno", accuse: "Mreža je gotova. Podigni optužbu.", more: "Okrenuti tragovi ne govore više. Okreni još jedan trag." }, articles: false } }, ii = (t) => {
    var _a3, _b3, _c2;
    return (_c2 = (_b3 = ol[t]) != null ? _b3 : ol[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : il;
  }, ge = (t, e) => {
    let s = t;
    for (const [n, r] of Object.entries(e)) s = s.split("{".concat(n, "}")).join(String(r));
    return s;
  }, Ke = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t;
  function En(t, e, s, n) {
    var _a3;
    const r = (_a3 = s.alias) == null ? void 0 : _a3.call(s, e);
    if (r) return r;
    const i = s.name(e), o = ni(t, e);
    return ii(n).articles && t.kind === "murdle" && o !== "suspect" && o !== "motive" && new RegExp("^\\p{Ll}", "u").test(i) ? "the ".concat(i) : i;
  }
  const al = (t, e, s) => "".concat(ni(t, e), ",").concat(ni(t, s));
  function cl(t, e, s, n) {
    var _a3, _b3, _c2;
    const r = ii(n), i = (m) => En(t, m, s, n), o = (m) => Array.isArray(m) ? m[0] : m;
    if (t.kind === "logic") {
      const m = r.logic, g = e.a, k = e.b;
      switch (e.type) {
        case "is":
          return Ke(ge(m.is, { A: i(o(g)), B: i(o(k)) }));
        case "not":
          return Ke(ge(m.not, { A: i(o(g)), B: i(o(k)) }));
        case "either":
          return Ke(ge(m.either, { A: i(o(g)), B1: i(k[0]), B2: i(k[1]) }));
        case "neither":
          return Ke(ge(m.neither, { A: i(o(g)), B1: i(k[0]), B2: i(k[1]) }));
        case "oneof":
          return Ke(ge(m.oneof, { A1: i(g[0]), A2: i(g[1]), B1: i(k[0]), B2: i(k[1]) }));
        case "before":
          return Ke(ge(m.before, { A: i(o(g)), B: i(o(k)) }));
        case "after":
          return Ke(ge(m.after, { A: i(o(g)), B: i(o(k)) }));
        case "apart":
          return Ke(ge(m.apart, { A: i(o(g)), B: i(o(k)), n: (_a3 = e.n) != null ? _a3 : 1 })).replace(/ exactly 1 places apart/, " exactly 1 place apart");
        default:
          throw new Z("no sentence for a ".concat(e.type, " clue"));
      }
    }
    const a = o(e.a), c = Array.isArray(e.b) ? e.b : [e.b];
    if (e.type === "either") {
      const m = (_b3 = r.either[al(t, a, c[0])]) != null ? _b3 : r.eitherAny;
      return Ke(ge(m, { A: i(a), B1: i(c[0]), B2: i(c[1]) }));
    }
    const l = (m) => t.categories.findIndex((g) => g.items.includes(m)), [d, h] = l(a) < l(c[0]) ? [a, c[0]] : [c[0], a], f = (_c2 = (e.type === "not" ? r.not : r.is)[al(t, d, h)]) != null ? _c2 : e.type === "not" ? r.notAny : r.isAny;
    return Ke(ge(f, { X: i(d), Y: i(h) }));
  }
  function xw(t, e, s, n, r) {
    var _a3;
    const i = ii(r).hint, o = (d, h = false) => h ? Ke(En(t, d, n, r)) : En(t, d, n, r), a = ti(t);
    for (const d of rt(t)) {
      const h = vt(s, d);
      if (h && h !== a[d]) {
        const [p, f] = Re(d);
        return { kind: "wrong", cell: d, text: ge(i.wrong, { A: o(p), B: o(f) }) };
      }
    }
    const c = t.clues.filter((d) => e.includes(d.id)), l = bt(t, c);
    for (const d of l.steps) {
      const [h, p] = d.cell, f = "".concat(h, "|").concat(p);
      if (vt(s, f) === d.value) continue;
      const m = d.value === "yes", g = ge(m ? i.yes : i.no, { A: o(h), B: o(p) });
      let k;
      const b = () => {
        const v = t.clues.find((w) => w.id === d.clue);
        return v ? ge(i.clue, { n: v.id.slice(1), text: cl(t, v, n, r) }) : "";
      };
      if (d.rule === "clue") k = "".concat(b(), " ").concat(g);
      else if (d.rule === "elim") {
        const v = d.from[0];
        k = ge(i.elim, { F0: o(v[0], true), F1: o(v[1]), A: o(h), B: o(p) });
      } else if (d.rule === "last") k = ge(i.last, { A: o(h), B: o(p) });
      else if (d.rule === "either") k = "".concat(b(), " ").concat(ge(i.either, { A: o(h), B: o(p) }));
      else if (d.rule === "order") k = "".concat(b(), " ").concat(ge(i.order, { A: o(h), B: o(p) }));
      else if (d.rule === "trans") {
        const [v, w] = d.from, y = (_a3 = v.find(($) => w.includes($))) != null ? _a3 : v[0];
        k = ge(i.trans, { A: o(h), B: o(p), M: o(y), verb: m ? i.verbYes : i.verbNo });
      } else k = g;
      return { kind: "step", cell: f, text: k };
    }
    return c.length < t.clues.length ? { kind: "more", cell: "", text: i.more } : { kind: "accuse", cell: "", text: i.accuse };
  }
  const De = E().min(1).max(64).regex(/^[A-Za-z0-9][A-Za-z0-9_.-]*$/, "an id of letters, digits, dots, dashes and underscores"), Ve = E().min(1), Ew = U({ kind: Y(kw).default("murdle"), size: L().int().min(si[0]).max(si[si.length - 1]).default(3), seed: L().int().min(0).default(1), band: Y(bw).default("easy"), names: Q(E(), Ve), aliases: Q(E(), Ve).default({}), labels: Q(E(), Ve).default({}), items: N(De).min(1) }), Aw = U({ id: De, unit: De.optional(), title: Ve, story: Ve, case: Ew }), Tw = U({ id: De, name: Ve, x: L(), y: L() }), Iw = U({ from: De, to: De, item: De, decoys: N(De).max(5), clue: Ve.optional() }), Mw = U({ unit: De.optional(), final: J().default(false), suspect: Ve, title: Ve.optional(), story: Ve.optional(), start: De, places: N(Tw).min(2), route: N(Iw).min(1), map: De, width: L().positive().default(800), height: L().positive().default(600) }), Ow = U({ rooms: N(Aw).min(1), final: De.optional(), chase: Mw.optional() }), Nw = ["DET_UNIT_NO_ROOM", "DET_ROOM_UNIT_MISSING", "DET_FINAL_MISSING", "DET_PUZZLE_INVALID", "DET_PUZZLE_NOT_UNIQUE", "DET_PUZZLE_UNSOLVABLE", "DET_NAME_MISSING", "DET_CLUE_ITEM_MISSING", "DET_TOO_FEW_CLUE_ITEMS", "DET_CHASE_PLACE_MISSING", "DET_CHASE_ROUTE_BROKEN", "DET_CHASE_ITEM_MISSING", "DET_CHASE_FEW_DECOYS", "DET_ALIAS_NOT_FACT"], ll = (t) => t.route[t.route.length - 1].to, Pw = (t) => t.rooms.find((e) => e.id === t.final), dl = (t) => ({ kind: t.kind, size: t.size, seed: t.seed, band: t.band });
  function Rw(t) {
    const e = [], s = (n, r) => {
      r && e.push({ path: n, key: r, role: "string" });
    };
    return t.rooms.forEach((n, r) => {
      s("rooms[".concat(r, "].title"), n.title), s("rooms[".concat(r, "].story"), n.story);
      for (const [i, o] of Object.entries(n.case.names)) s("rooms[".concat(r, "].case.names.").concat(i), o);
      for (const [i, o] of Object.entries(n.case.aliases)) s("rooms[".concat(r, "].case.aliases.").concat(i), o);
      for (const [i, o] of Object.entries(n.case.labels)) s("rooms[".concat(r, "].case.labels.").concat(i), o);
    }), t.chase && (s("chase.suspect", t.chase.suspect), s("chase.title", t.chase.title), s("chase.story", t.chase.story), t.chase.places.forEach((n, r) => s("chase.places[".concat(r, "].name"), n.name)), t.chase.route.forEach((n, r) => s("chase.route[".concat(r, "].clue"), n.clue))), e;
  }
  function Dw(t, e) {
    const s = [], n = new Set(e.items.map((o) => o.id)), r = new Set(e.units.map((o) => o.id)), i = /* @__PURE__ */ new Set();
    return t.rooms.forEach((o, a) => {
      i.has(o.id) && s.push({ code: "DUPLICATE_ID", path: "rooms[".concat(a, "].id"), message: 'the room id "'.concat(o.id, '" is used twice') }), i.add(o.id), o.unit !== void 0 && !r.has(o.unit) && s.push({ code: "UNKNOWN_UNIT", path: "rooms[".concat(a, "].unit"), message: 'unknown unit "'.concat(o.unit, '"') }), o.case.items.forEach((c, l) => {
        n.has(c) || s.push({ code: "UNKNOWN_ITEM", path: "rooms[".concat(a, "].case.items[").concat(l, "]"), message: 'unknown item "'.concat(c, '"') });
      });
    }), t.final !== void 0 && !i.has(t.final) && s.push({ code: "UNKNOWN_ROOM", path: "final", message: 'unknown room "'.concat(t.final, '"') }), t.chase && (t.chase.unit !== void 0 && !r.has(t.chase.unit) && s.push({ code: "UNKNOWN_UNIT", path: "chase.unit", message: 'unknown unit "'.concat(t.chase.unit, '"') }), t.chase.route.forEach((o, a) => {
      n.has(o.item) || s.push({ code: "UNKNOWN_ITEM", path: "chase.route[".concat(a, "].item"), message: 'unknown item "'.concat(o.item, '"') });
    })), s;
  }
  const Lw = (t) => t.chase ? [{ path: "chase.map", id: t.chase.map }] : [];
  function Cw(t, e) {
    const s = [], n = (r) => {
      if (typeof r == "string") {
        const i = e(r);
        i && s.push(i);
      } else Array.isArray(r) ? r.forEach(n) : r && typeof r == "object" && Object.values(r).forEach(n);
    };
    return n(t), s;
  }
  function Zw(t, e, s = {}) {
    var _a3, _b3;
    if (!t) return [];
    const n = [], r = (h, p, f, m = {}) => {
      n.push({ code: h, path: p, message: f, ...m });
    }, i = e.pack, o = new Set(i.units.map((h) => h.id)), a = new Map(i.items.map((h) => [h.id, h])), c = (_a3 = s.build) != null ? _a3 : ((h) => sl(h));
    t.final === void 0 ? ((_b3 = t.chase) == null ? void 0 : _b3.final) || r("DET_FINAL_MISSING", "final", "the section has no final room (`final`) and the chase is not the final challenge (`chase.final`)") : t.rooms.some((h) => h.id === t.final) || r("DET_FINAL_MISSING", "final", 'the final room "'.concat(t.final, '" does not exist'));
    const l = /* @__PURE__ */ new Set();
    t.rooms.forEach((h, p) => {
      h.unit !== void 0 ? o.has(h.unit) ? l.add(h.unit) : r("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "].unit"), 'the room "'.concat(h.id, '" belongs to the unit "').concat(h.unit, '", which the course does not have')) : h.id !== t.final && r("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "]"), 'the room "'.concat(h.id, '" has no unit and is not the final room'));
    });
    for (const h of i.units) l.has(h.id) || r("DET_UNIT_NO_ROOM", "rooms", 'the unit "'.concat(h.id, '" has no escape room'));
    t.rooms.forEach((h, p) => {
      var _a4;
      const f = "rooms[".concat(p, "].case"), m = h.case;
      let g = null;
      try {
        g = c(dl(m));
      } catch (b) {
        const v = b instanceof Error ? b.message : String(b);
        /exactly one solution/i.test(v) ? r("DET_PUZZLE_NOT_UNIQUE", f, 'the puzzle of room "'.concat(h.id, '" does not have exactly one solution (').concat(v, ")")) : /deduction/i.test(v) ? r("DET_PUZZLE_UNSOLVABLE", f, 'the puzzle of room "'.concat(h.id, '" cannot be solved by deduction alone (').concat(v, ")")) : r("DET_PUZZLE_INVALID", f, "no ".concat(m.kind, " puzzle of size ").concat(m.size, ", band ").concat(m.band, " could be made from seed ").concat(m.seed, " (").concat(v, ")"));
      }
      if (g) for (const b of yw(g.puzzle)) m.names[b] || r("DET_NAME_MISSING", "".concat(f, ".names"), 'the entity "'.concat(b, '" of the puzzle of room "').concat(h.id, '" has no name'));
      const k = /* @__PURE__ */ new Set();
      m.items.forEach((b, v) => {
        a.has(b) ? k.add(b) : r("DET_CLUE_ITEM_MISSING", "".concat(f, ".items[").concat(v, "]"), 'the clue item "'.concat(b, '" does not exist'));
      }), g && k.size < g.puzzle.clues.length && r("DET_TOO_FEW_CLUE_ITEMS", "".concat(f, ".items"), 'room "'.concat(h.id, '" has ').concat(g.puzzle.clues.length, " clue cards but only ").concat(k.size, " clue items"));
      for (const [b, v] of Object.entries(m.aliases)) {
        const w = m.names[b];
        if (w) for (const y of e.editions) {
          const $ = e.resolvers[y], x = $ == null ? void 0 : $.text(w);
          if (!$ || !x) continue;
          const z = Pe(x, { fold: true });
          [...k].some((O) => Cw(a.get(O), (R) => $.text(R)).some((R) => Pe(R, { fold: true }).includes(z))) || r("DET_ALIAS_NOT_FACT", "".concat(f, ".aliases.").concat(b), 'the alias "'.concat((_a4 = $.text(v)) != null ? _a4 : v, '" stands for "').concat(x, '", but no item of room "').concat(h.id, '" asks about it (').concat(y, ")"), { severity: "warning", lang: y });
        }
      }
    });
    const d = t.chase;
    if (d) {
      const h = new Set(d.places.map((m) => m.id));
      h.has(d.start) || r("DET_CHASE_PLACE_MISSING", "chase.start", 'the start "'.concat(d.start, '" is not one of the places')), d.route.forEach((m, g) => {
        const k = "chase.route[".concat(g, "]");
        h.has(m.from) || r("DET_CHASE_PLACE_MISSING", "".concat(k, ".from"), 'the place "'.concat(m.from, '" does not exist')), h.has(m.to) || r("DET_CHASE_PLACE_MISSING", "".concat(k, ".to"), 'the place "'.concat(m.to, '" does not exist')), m.decoys.forEach((b, v) => {
          h.has(b) || r("DET_CHASE_PLACE_MISSING", "".concat(k, ".decoys[").concat(v, "]"), 'the decoy "'.concat(b, '" is not one of the places'));
        }), a.has(m.item) || r("DET_CHASE_ITEM_MISSING", "".concat(k, ".item"), 'the clue item "'.concat(m.item, '" does not exist')), new Set(m.decoys.filter((b) => b !== m.to)).size < 1 && r("DET_CHASE_FEW_DECOYS", "".concat(k, ".decoys"), "the leg ".concat(m.from, " -> ").concat(m.to, " needs at least 1 decoy place (other than ").concat(m.to, ")"));
      });
      const p = /* @__PURE__ */ new Set([d.start]);
      let f = d.start;
      d.route.forEach((m, g) => {
        m.from !== f && r("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(g, "].from"), "the leg ".concat(g + 1, ' starts at "').concat(m.from, '" but the trail is at "').concat(f, '"')), p.has(m.to) && r("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(g, "].to"), 'the trail goes back to "'.concat(m.to, '", a place it has already visited')), p.add(m.to), f = m.to;
      }), d.unit !== void 0 && !o.has(d.unit) && r("DET_ROOM_UNIT_MISSING", "chase.unit", 'the chase belongs to the unit "'.concat(d.unit, '", which the course does not have')), d.unit === void 0 && !d.final && r("DET_FINAL_MISSING", "chase", "the chase is neither the challenge of a unit (`unit`) nor the final challenge (`final`)");
    }
    return n;
  }
  const Uw = { id: "detective", theme: "noir", requiresSection: true, schema: Ow, textRefs: (t) => Rw(t), assetRefs: Lw, validate: Dw, lint: (t, e) => Zw(t, e), codes: Nw, warnings: ["DET_ALIAS_NOT_FACT"] }, Fw = U({ id: P, year: L().int().refine((t) => t !== 0, "there is no year 0"), label: C, text: C.optional(), article: P.optional() }), Bw = U({ id: P, x: L(), y: L(), label: C, article: P }), Kw = U({ asset: P, width: L().positive(), height: L().positive(), places: N(Bw).default([]) }), qw = U({ id: P, clue: C, article: P, item: P, collectible: C }), Gw = U({ id: P, unit: P, title: C, intro: C.optional(), steps: N(qw) }), Ww = ["n", "v", "adj", "adv", "prep", "conj", "phrase"], Hw = U({ id: P, term: C, lemma: C.optional(), gloss: C, pos: Y(Ww).optional(), note: C.optional() }), ul = U({ timeline: N(Fw).default([]), map: Kw.optional(), hunts: N(Gw).default([]), glossary: Q(E(), N(Hw)).default({}), reader: J().default(false) }), Vw = /* @__PURE__ */ new Set(["the", "and", "for", "are", "was", "its", "with", "from", "that", "this"]), zs = (t) => Pe(t, { fold: true });
  function Yw(t, e) {
    const s = new Set(t.split(" ").filter(Boolean)), n = [...s], r = zs(e).split(" ").filter((i) => i.length > 2 || /^\d+$/.test(i)).filter((i) => !Vw.has(i));
    return r.length === 0 ? true : r.every((i) => {
      if (/^\d+$/.test(i)) return s.has(i);
      const o = i.length >= 7 ? i.slice(0, i.length - 2) : i.length >= 5 ? i.slice(0, i.length - 1) : i;
      return n.some((a) => a.startsWith(o));
    });
  }
  function Jw(t, e) {
    var _a3, _b3;
    const s = t, n = (i) => typeof i == "string" ? e.hasAccepted(i) ? e.accepted(i) : e.text(i) ? [e.text(i)] : [] : [], r = (i) => {
      var _a4;
      const o = (_a4 = s.options) == null ? void 0 : _a4.find((a) => a.id === i);
      return o ? n(o.text) : [];
    };
    switch (t.kind) {
      case "mcq":
        return [r(s.answer)];
      case "typed":
        return [n(s.answer)];
      case "cloze":
        return ((_a3 = s.gaps) != null ? _a3 : []).map((i) => n(i.answer));
      case "flashcard":
        return [n(s.back)];
      case "hotspot": {
        const i = (_b3 = s.regions) == null ? void 0 : _b3.find((o) => o.id === s.answer);
        return [i ? n(i.label) : []];
      }
      case "listening":
        return s.mode === "choose" ? [r(s.answer)] : [n(s.answer)];
      default:
        return null;
    }
  }
  function hl(t, e, s) {
    const n = Jw(t, s);
    if (!n) return null;
    const r = zs(e.bodyKeys.map((i) => {
      var _a3;
      return (_a3 = s.text(i)) != null ? _a3 : "";
    }).join(" "));
    return n.every((i) => i.length === 0 || i.some((o) => Yw(r, o)));
  }
  function Qw(t) {
    const e = t.normalize("NFKC").toLowerCase(), s = /(\d{1,4})/.exec(e);
    if (!s) return;
    const n = Number(s[1]);
    return !Number.isFinite(n) || n === 0 ? void 0 : /\bbce?\b|\bb\.c\.|\bpr\.?\s*kr|\bpr\.?\s*n\.?\s*e\b|\bprije\s+krista/.test(e) ? -n : n;
  }
  const Xw = { mcq: 0, typed: 1, cloze: 2, "true-false": 3, listening: 4, hotspot: 5, "multi-select": 6, flashcard: 7, "match-pairs": 8, order: 9, "sort-groups": 10, crossword: 11, "word-search": 12 }, pl = (t, e) => {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }, fl = (t) => t.flatMap((e) => e.split(/\n+/)).map((e) => e.trim()).filter(Boolean);
  function ey(t, e = kl(t)) {
    const s = Tt(t.units), n = (r) => {
      const i = r.unit ? s.indexOf(r.unit) : -1;
      return i < 0 ? s.length : i;
    };
    return e.filter((r) => !r.virtual).map((r, i) => ({ a: r, i })).sort((r, i) => n(r.a) - n(i.a) || r.i - i.i).map((r) => r.a);
  }
  const ml = (t, e) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t == null ? void 0 : t.glossary) == null ? void 0 : _a3[e]) != null ? _b3 : [];
  };
  function gl(t) {
    var _a3;
    const e = (_a3 = t.extensions) == null ? void 0 : _a3.passage;
    if (typeof e != "object" || e === null) return null;
    const s = e;
    if (typeof s.article != "string" || s.article === "") return null;
    const n = s.paragraphs;
    if (Array.isArray(n) && n.length === 2 && n.every((r) => Number.isInteger(r) && r >= 1)) {
      const [r, i] = n;
      return { article: s.article, paragraphs: [Math.min(r, i), Math.max(r, i)] };
    }
    return { article: s.article };
  }
  function kl(t) {
    const e = t.encyclopedia.articles.map((r) => ({ id: r.id, titleKey: r.title, bodyKeys: [r.body], ...r.unit ? { unit: r.unit } : {}, ...r.asset ? { assetId: r.asset } : {}, citations: r.citations, related: r.related, virtual: false })), s = [...e], n = new Map(t.factbase.map((r) => [r.id, r.claim]));
    for (const r of t.units) if (!e.some((i) => i.unit === r.id)) for (const i of t.objectives.filter((o) => o.unit === r.id)) s.push({ id: "auto-".concat(i.id), titleKey: i.text, bodyKeys: [i.text, ...i.facts.map((o) => n.get(o)).filter((o) => !!o)], unit: r.id, citations: i.facts, related: [], virtual: true });
    return s;
  }
  function ty(t, e, s) {
    const n = [], r = new Map(t.objectives.map((i) => [i.id, new Set(i.facts)]));
    for (const i of Tt(t.units)) {
      const o = t.items.filter((d) => pl(t, d) === i);
      if (o.length === 0) continue;
      const a = e.filter((d) => d.unit === i).slice(0, 6), c = /* @__PURE__ */ new Set(), l = [];
      for (const d of a) {
        const h = new Set(d.citations), p = o.filter((k) => {
          var _a3;
          return d.virtual ? k.objective === d.id.slice(5) : [...(_a3 = r.get(k.objective)) != null ? _a3 : []].some((b) => h.has(b));
        }), f = (p.length > 0 ? p : o).filter((k) => !c.has(k.id)), m = (k) => {
          var _a3;
          return (hl(k, d, s) === false ? 100 : 0) + ((_a3 = Xw[k.kind]) != null ? _a3 : 20) + (p.includes(k) ? 0 : 40);
        }, g = [...f, ...o.filter((k) => !c.has(k.id) && !f.includes(k))].sort((k, b) => m(k) - m(b))[0];
        g && (c.add(g.id), l.push({ id: "s-".concat(d.id), article: d.id, item: g.id }));
      }
      l.length > 0 && n.push({ id: "h-".concat(i), unit: i, steps: l, auto: true });
    }
    return n;
  }
  function sy(t, e = 2) {
    const s = [...new Set(t.map((r) => r.unit))], n = [];
    for (const r of s) {
      const i = t.filter((a) => a.unit === r).flatMap((a) => a.steps), o = e >= 2 && i.length >= 2 ? [i[0], i[i.length - 1]] : i.slice(0, 1);
      for (const a of o) n.some((c) => c.id === a.id) || n.push(a);
    }
    return n;
  }
  function ny(t, e, s) {
    var _a3, _b3;
    const n = [];
    for (const r of t.items) if (!(r.kind !== "order" || r.timeline !== true)) for (const i of r.items) {
      const o = i.when ? s.text(i.when) : void 0, a = o ? Qw(o) : void 0;
      if (a === void 0) continue;
      const c = zs((_a3 = s.text(i.text)) != null ? _a3 : ""), l = (_b3 = e.find((d) => {
        var _a4;
        return !d.virtual && c.includes(zs((_a4 = s.text(d.titleKey)) != null ? _a4 : "\0"));
      })) != null ? _b3 : e.find((d) => !d.virtual && ry(c, zs(d.bodyKeys.map((h) => {
        var _a4;
        return (_a4 = s.text(h)) != null ? _a4 : "";
      }).join(" "))) >= 2);
      n.push({ id: "".concat(r.id, ".").concat(i.id), year: a, label: i.text, ...i.when ? { whenKey: i.when } : {}, ...l ? { article: l.id } : {} });
    }
    return n.sort((r, i) => r.year - i.year);
  }
  const ry = (t, e) => {
    const s = new Set(e.split(" "));
    return t.split(" ").filter((n) => n.length >= 5 && s.has(n)).length;
  };
  function iy(t) {
    const e = t.assets.find((s) => s.kind === "image");
    return e ? { asset: e.id, width: 0, height: 0, places: [], auto: true } : void 0;
  }
  function bl(t, e, s) {
    const n = kl(t), r = e && e.hunts.length > 0 ? e.hunts.map((a) => ({ id: a.id, unit: a.unit, title: a.title, ...a.intro ? { intro: a.intro } : {}, steps: a.steps.map((c) => ({ ...c })), auto: false })) : ty(t, n, s), i = e && e.timeline.length > 0 ? [...e.timeline].map((a) => ({ id: a.id, year: a.year, label: a.label, ...a.text ? { text: a.text } : {}, ...a.article ? { article: a.article } : {} })).sort((a, c) => a.year - c.year) : ny(t, n, s), o = (e == null ? void 0 : e.map) ? { asset: e.map.asset, width: e.map.width, height: e.map.height, places: e.map.places.map((a) => ({ ...a })), auto: false } : iy(t);
    return { articles: n, hunts: r, timeline: i, ...o ? { map: o } : {}, finalSteps: sy(r) };
  }
  const oy = (t) => t;
  function ay(t, e) {
    const s = [], n = new Set(e.units.map((c) => c.id)), r = (c, l, d) => {
      const h = /* @__PURE__ */ new Set();
      l.forEach((p, f) => {
        h.has(p) && s.push({ code: "DUPLICATE_ID", path: oy("".concat(d, "[").concat(f, "].id")), message: "the ".concat(c, ' id "').concat(p, '" is used twice') }), h.add(p);
      });
    };
    r("hunt", t.hunts.map((c) => c.id), "hunts"), r("timeline event", t.timeline.map((c) => c.id), "timeline"), t.map && r("place", t.map.places.map((c) => c.id), "map.places");
    const i = t.hunts.flatMap((c, l) => c.steps.map((d, h) => ({ id: d.id, path: "hunts[".concat(l, "].steps[").concat(h, "].id") }))), o = /* @__PURE__ */ new Set();
    for (const c of i) o.has(c.id) && s.push({ code: "DUPLICATE_ID", path: c.path, message: 'the step id "'.concat(c.id, '" is used twice (step ids are unique across all hunts)') }), o.add(c.id);
    t.hunts.forEach((c, l) => {
      n.has(c.unit) || s.push({ code: "UNKNOWN_UNIT", path: "hunts[".concat(l, "].unit"), message: 'unknown unit "'.concat(c.unit, '"') });
    });
    const a = new Set(e.encyclopedia.articles.map((c) => c.id));
    for (const [c, l] of Object.entries(t.glossary)) a.has(c) || s.push({ code: "UNKNOWN_ARTICLE", path: "glossary.".concat(c), message: 'the glossary belongs to the article "'.concat(c, '", which does not exist') }), r("gloss entry", l.map((d) => d.id), "glossary.".concat(c));
    return s;
  }
  const cy = (t, e) => {
    var _a3;
    const s = [], { pack: n } = e, r = (_a3 = e.resolvers[n.sourceLang]) != null ? _a3 : Object.values(e.resolvers)[0], i = bl(n, t, r), o = new Map(i.articles.map((d) => [d.id, d])), a = new Map(n.items.map((d) => [d.id, d])), c = new Map(n.assets.map((d) => [d.id, d]));
    i.hunts.forEach((d, h) => {
      d.steps.length === 0 && s.push({ code: "ENC_HUNT_EMPTY", path: "hunts[".concat(h, "]"), message: 'the hunt "'.concat(d.id, '" has no steps') });
      const p = /* @__PURE__ */ new Map();
      d.steps.forEach((f, m) => {
        const g = "hunts[".concat(h, "].steps[").concat(m, "]"), k = o.get(f.article), b = a.get(f.item);
        if (k || s.push({ code: "ENC_HUNT_TARGET_MISSING", path: "".concat(g, ".article"), message: 'the step "'.concat(f.id, '" sends the learner to the article "').concat(f.article, '", which does not exist') }), b || s.push({ code: "ENC_HUNT_ITEM_MISSING", path: "".concat(g, ".item"), message: 'the step "'.concat(f.id, '" asks the item "').concat(f.item, '", which does not exist') }), b) {
          const v = p.get(b.id);
          v ? s.push({ code: "ENC_HUNT_ITEM_DUPLICATE", path: "".concat(g, ".item"), message: 'the steps "'.concat(v, '" and "').concat(f.id, '" of the hunt "').concat(d.id, '" ask the same item "').concat(b.id, '"; the second can never come up') }) : p.set(b.id, f.id);
          const w = pl(n, b);
          w && w !== d.unit && s.push({ code: "ENC_HUNT_ITEM_OTHER_UNIT", severity: "warning", path: "".concat(g, ".item"), message: 'the item "'.concat(b.id, '" belongs to the unit "').concat(w, '", not to the hunt\'s unit "').concat(d.unit, '"') });
        }
        if (k && b) for (const v of e.editions) {
          const w = e.resolvers[v];
          w && hl(b, k, w) === false && s.push({ code: "ENC_ANSWER_NOT_IN_ARTICLE", severity: "warning", path: g, lang: v, message: 'the right answer of "'.concat(b.id, '" does not appear in the article "').concat(k.id, '": the hunt would send the learner to a page that does not hold the answer') });
        }
      });
    });
    const l = new Set(i.hunts.filter((d) => d.steps.length > 0).map((d) => d.unit));
    if (n.units.forEach((d, h) => {
      l.has(d.id) || s.push({ code: "ENC_UNIT_NO_HUNT", path: "hunts", message: 'no hunt covers the unit "'.concat(d.id, '" (units[').concat(h, "]): it could never be mastered in the encyclopedia") });
    }), i.timeline.forEach((d, h) => {
      d.article && !o.has(d.article) && s.push({ code: "ENC_TIMELINE_ARTICLE_MISSING", path: "timeline[".concat(h, "].article"), message: 'the event "'.concat(d.id, '" opens the article "').concat(d.article, '", which does not exist') });
    }), i.map) {
      const d = i.map, h = c.get(d.asset);
      h && h.kind !== "image" && s.push({ code: "ENC_MAP_NO_IMAGE", path: "map.asset", message: 'the map asset "'.concat(d.asset, '" is ').concat(h.kind === "audio" ? "audio" : "not an image", ", not an image") }), d.places.forEach((p, f) => {
        o.has(p.article) || s.push({ code: "ENC_MAP_ARTICLE_MISSING", path: "map.places[".concat(f, "].article"), message: 'the place "'.concat(p.id, '" opens the article "').concat(p.article, '", which does not exist') }), d.width > 0 && d.height > 0 && (p.x < 0 || p.x > d.width || p.y < 0 || p.y > d.height) && s.push({ code: "ENC_MAP_PLACE_OUTSIDE", path: "map.places[".concat(f, "]"), message: 'the place "'.concat(p.id, '" (').concat(p.x, ", ").concat(p.y, ") is outside the ").concat(d.width, " x ").concat(d.height, " image") });
      });
    }
    return s.push(...ly(t, e, r)), s;
  };
  function ly(t, e, s) {
    var _a3;
    const n = [], r = new Map(e.pack.encyclopedia.articles.map((i) => {
      var _a4;
      return [i.id, (_a4 = s.text(i.body)) != null ? _a4 : ""];
    }));
    for (const [i, o] of Object.entries((_a3 = t == null ? void 0 : t.glossary) != null ? _a3 : {})) {
      const a = r.get(i);
      if (a === void 0) continue;
      const c = /* @__PURE__ */ new Map();
      o.forEach((d, h) => {
        const p = s.text(d.term);
        if (p === void 0) return;
        const f = "glossary.".concat(i, "[").concat(h, "]");
        a.includes(p) || n.push({ code: "GLOSS_TERM_NOT_IN_TEXT", path: "".concat(f, ".term"), message: 'the gloss "'.concat(d.id, '" has the term "').concat(p, '", which is not in the text of the article "').concat(i, '"') });
        const m = c.get(p);
        m ? n.push({ code: "GLOSS_DUPLICATE", path: "".concat(f, ".term"), message: 'the glosses "'.concat(m, '" and "').concat(d.id, '" both gloss "').concat(p, '" in the article "').concat(i, '"') }) : c.set(p, d.id);
      });
      const l = a.split(/\s+/).filter(Boolean).length;
      l >= 300 && o.length < 8 && n.push({ code: "GLOSS_COVERAGE", severity: "warning", path: "glossary.".concat(i), message: 'the text "'.concat(i, '" has ').concat(l, " words but only ").concat(o.length, " glossed words (at least 8 help the learner)") });
    }
    return n;
  }
  const dy = { id: "encyclopedia", theme: "parchment", requiresSection: false, schema: ul, textRefs: (t) => {
    var _a3, _b3;
    return [...t.timeline.flatMap((e, s) => [{ path: "timeline[".concat(s, "].label"), key: e.label, role: "string" }, ...e.text ? [{ path: "timeline[".concat(s, "].text"), key: e.text, role: "string" }] : []]), ...((_b3 = (_a3 = t.map) == null ? void 0 : _a3.places) != null ? _b3 : []).map((e, s) => ({ path: "map.places[".concat(s, "].label"), key: e.label, role: "string" })), ...t.hunts.flatMap((e, s) => [{ path: "hunts[".concat(s, "].title"), key: e.title, role: "string" }, ...e.intro ? [{ path: "hunts[".concat(s, "].intro"), key: e.intro, role: "string" }] : [], ...e.steps.flatMap((n, r) => [{ path: "hunts[".concat(s, "].steps[").concat(r, "].clue"), key: n.clue, role: "string" }, { path: "hunts[".concat(s, "].steps[").concat(r, "].collectible"), key: n.collectible, role: "string" }])]), ...Object.entries(t.glossary).flatMap(([e, s]) => s.flatMap((n, r) => {
      const i = "glossary.".concat(e, "[").concat(r, "]");
      return [{ path: "".concat(i, ".term"), key: n.term, role: "string" }, { path: "".concat(i, ".gloss"), key: n.gloss, role: "string" }, ...n.lemma ? [{ path: "".concat(i, ".lemma"), key: n.lemma, role: "string" }] : [], ...n.note ? [{ path: "".concat(i, ".note"), key: n.note, role: "string" }] : []];
    }))];
  }, assetRefs: (t) => t.map ? [{ path: "map.asset", id: t.map.asset }] : [], validate: ay, lint: cy, codes: ["GLOSS_TERM_NOT_IN_TEXT", "GLOSS_DUPLICATE", "GLOSS_COVERAGE", "ENC_HUNT_TARGET_MISSING", "ENC_HUNT_ITEM_MISSING", "ENC_HUNT_ITEM_DUPLICATE", "ENC_UNIT_NO_HUNT", "ENC_HUNT_EMPTY", "ENC_TIMELINE_ARTICLE_MISSING", "ENC_MAP_ARTICLE_MISSING", "ENC_MAP_PLACE_OUTSIDE", "ENC_MAP_NO_IMAGE", "ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT"], warnings: ["ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT", "GLOSS_COVERAGE"] }, uy = U({ name: C, line: C, hint: C.optional(), right: C.optional(), wrong: C.optional(), portrait: P.optional() }), hy = U({ to: P, items: N(P).default([]) }), py = U({ id: P, name: C, description: C.optional(), character: uy.optional(), doors: N(hy).default([]), key: J().default(false), objective: P.optional(), asset: P.optional() }), fy = U({ id: P, unit: P, name: C, description: C.optional(), entry: P, rooms: N(py).min(1) }), my = U({ name: C.optional(), description: C.optional(), size: L().int().min(3).max(20).default(8) }), gy = U({ torches: L().int().min(0).max(9).default(3), wings: N(fy).default([]), throne: my.optional() }), ky = ["MAZE_WING_UNIT_MISSING", "MAZE_ENTRY_MISSING", "MAZE_DOOR_TARGET_MISSING", "MAZE_DOOR_ITEM_MISSING", "MAZE_OBJECTIVE_MISSING", "MAZE_DUPLICATE", "MAZE_UNIT_NO_WING", "MAZE_DOOR_NO_ITEMS", "MAZE_ROOM_UNREACHABLE", "MAZE_NO_KEY_ROOM", "MAZE_KEY_UNREACHABLE", "MAZE_KEY_AT_ENTRY", "MAZE_DEAD_END", "MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], by = ["MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], vl = 3, vy = 8, wy = 4, Le = (t) => ({ ui: t }), yy = (t) => t ? { key: t } : void 0, Sy = (t, e) => t ? { name: { key: t.name }, line: { key: t.line }, ...t.hint ? { hint: { key: t.hint } } : {}, ...t.right ? { right: { key: t.right } } : {}, ...t.wrong ? { wrong: { key: t.wrong } } : {}, ...t.portrait ? { portrait: t.portrait } : {}, look: e % 6 } : void 0, wl = (t, e) => ({ name: Le("maze.auto.".concat(t, ".name")), line: Le("maze.auto.".concat(t, ".line")), right: Le("maze.auto.".concat(t, ".right")), wrong: Le("maze.auto.".concat(t, ".wrong")), look: e % 6 }), yl = ["maze.auto.gallery", "maze.auto.gallery2", "maze.auto.gallery3"];
  function $y(t, e, s = e) {
    var _a3, _b3, _c2;
    const n = t.units.find((h) => h.id === e), r = dn(t, e).map((h) => ({ o: h, items: lc(t, h.id).map((p) => p.id) })).filter((h) => h.items.length > 0), i = [...new Set(r.flatMap((h) => h.items))], o = [{ id: "hall", name: Le("maze.auto.hall"), pool: [], who: "gate", key: false, description: Le("maze.auto.hall.desc") }];
    r.forEach((h, p) => o.push({ id: "r-".concat(h.o.id), name: { key: h.o.text }, pool: h.items, who: p % 2 === 0 ? "scholar" : "archivist", key: false }));
    for (let h = 0; o.length < wy; h++) o.push({ id: "gallery-".concat(h + 1), name: Le(yl[h % yl.length]), pool: i, who: "scholar", key: false });
    o.push({ id: "key", name: Le("maze.auto.keyroom"), pool: i, who: "keeper", key: true, description: Le("maze.auto.keyroom.desc") });
    const a = o.map((h, p) => {
      const f = o[p + 1];
      return { id: h.id, name: h.name, ...h.description ? { description: h.description } : {}, character: wl(h.who, p), doors: f ? [{ to: f.id, items: f.pool.length > 0 ? f.pool : i }] : [], key: h.key };
    }), c = Math.floor((o.length - 1) / 2), l = a[c], d = o[c + 1];
    if (l && d) {
      const h = (_b3 = (_a3 = l.doors[0]) == null ? void 0 : _a3.items) != null ? _b3 : i;
      a.push({ id: "side", name: Le("maze.auto.side"), description: Le("maze.auto.side.desc"), character: wl("archivist", 3), doors: [{ to: d.id, items: h }], key: false }), l.doors.push({ to: "side", items: h });
    }
    return { id: s, unit: e, name: (_c2 = yy(n == null ? void 0 : n.title)) != null ? _c2 : Le("maze.auto.wing"), entry: "hall", rooms: a, auto: true };
  }
  const zy = (t, e, s) => {
    const n = new Set(t.items.map((o) => o.id)), r = new Map(e.rooms.map((o) => [o.id, o])), i = (o) => {
      var _a3, _b3;
      const a = o.items.length > 0 ? o.items : ((_a3 = r.get(o.to)) == null ? void 0 : _a3.objective) ? lc(t, (_b3 = r.get(o.to)) == null ? void 0 : _b3.objective).map((c) => c.id) : [];
      return [...new Set(a)].filter((c) => n.has(c));
    };
    return { id: e.id, unit: e.unit, name: { key: e.name }, ...e.description ? { description: { key: e.description } } : {}, entry: e.entry, auto: false, rooms: e.rooms.map((o, a) => {
      const c = Sy(o.character, s * 3 + a);
      return { id: o.id, name: { key: o.name }, ...o.description ? { description: { key: o.description } } : {}, ...c ? { character: c } : {}, doors: o.doors.map((l) => ({ to: l.to, items: i(l) })), key: o.key, ...o.asset ? { asset: o.asset } : {} };
    }) };
  };
  function Sl(t, e) {
    var _a3, _b3, _c2;
    const s = ((_a3 = e == null ? void 0 : e.wings) != null ? _a3 : []).map((d, h) => zy(t, d, h)), n = new Set(s.map((d) => d.unit)), r = new Set(s.map((d) => d.id)), i = t.units.filter((d) => !n.has(d.id)).map((d) => $y(t, d.id, r.has(d.id) ? "".concat(d.id, "-auto") : d.id)), o = Tt(t.units), a = (d) => {
      const h = o.indexOf(d.unit);
      return h < 0 ? o.length : h;
    }, c = [...s, ...i].map((d, h) => ({ w: d, i: h })).sort((d, h) => a(d.w) - a(h.w) || d.i - h.i).map((d) => d.w), l = e == null ? void 0 : e.throne;
    return { torches: (_b3 = e == null ? void 0 : e.torches) != null ? _b3 : vl, wings: c, throne: { ...(l == null ? void 0 : l.name) ? { name: { key: l.name } } : {}, ...(l == null ? void 0 : l.description) ? { description: { key: l.description } } : {}, size: (_c2 = l == null ? void 0 : l.size) != null ? _c2 : vy } };
  }
  const An = (t, e) => "".concat(t, ">").concat(e), wt = (t, e) => t.rooms.find((s) => s.id === e), _s = (t) => t.rooms.filter((e) => e.key).map((e) => e.id);
  function $l(t, e) {
    var _a3, _b3;
    const s = new Set(t.rooms.map((i) => i.id)), n = /* @__PURE__ */ new Set();
    if (!s.has(e)) return n;
    const r = [e];
    for (n.add(e); r.length > 0; ) {
      const i = r.shift();
      for (const o of (_b3 = (_a3 = wt(t, i)) == null ? void 0 : _a3.doors) != null ? _b3 : []) s.has(o.to) && !n.has(o.to) && (n.add(o.to), r.push(o.to));
    }
    return n;
  }
  const zl = (t, e) => {
    const s = new Set(_s(t));
    for (const n of $l(t, e)) if (s.has(n)) return true;
    return false;
  };
  function _l(t, e, s = /* @__PURE__ */ new Set()) {
    var _a3, _b3, _c2, _d2;
    const n = t.rooms.map((h) => h.id);
    if (!n.includes(e)) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const r = new Set(_s(t)), i = /* @__PURE__ */ new Map([[e, 0]]), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    for (; ; ) {
      let h;
      for (const p of n) i.has(p) && !a.has(p) && (h === void 0 || i.get(p) < i.get(h)) && (h = p);
      if (h === void 0) break;
      a.add(h);
      for (const p of (_b3 = (_a3 = wt(t, h)) == null ? void 0 : _a3.doors) != null ? _b3 : []) {
        if (!n.includes(p.to)) continue;
        const f = i.get(h) + (s.has(An(h, p.to)) ? 1e-3 : 1);
        f < ((_c2 = i.get(p.to)) != null ? _c2 : 1 / 0) - 1e-9 && (i.set(p.to, f), o.set(p.to, h));
      }
    }
    let c;
    for (const h of n) r.has(h) && i.has(h) && (c === void 0 || i.get(h) < i.get(c)) && (c = h);
    if (c === void 0) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const l = [c];
    for (; l[0] !== e; ) l.unshift(o.get(l[0]));
    let d = 0;
    for (let h = 0; h + 1 < l.length; h++) s.has(An(l[h], l[h + 1])) || d++;
    return { from: e, found: true, path: l, next: (_d2 = l[1]) != null ? _d2 : null, locked: d };
  }
  const _y = (t, e) => t ? [{ path: "".concat(e, ".name"), key: t.name, role: "string" }, { path: "".concat(e, ".line"), key: t.line, role: "string" }, ...t.hint ? [{ path: "".concat(e, ".hint"), key: t.hint, role: "string" }] : [], ...t.right ? [{ path: "".concat(e, ".right"), key: t.right, role: "string" }] : [], ...t.wrong ? [{ path: "".concat(e, ".wrong"), key: t.wrong, role: "string" }] : []] : [];
  function jy(t) {
    var _a3, _b3;
    const e = [];
    return t.wings.forEach((s, n) => {
      e.push({ path: "wings[".concat(n, "].name"), key: s.name, role: "string" }), s.description && e.push({ path: "wings[".concat(n, "].description"), key: s.description, role: "string" }), s.rooms.forEach((r, i) => {
        const o = "wings[".concat(n, "].rooms[").concat(i, "]");
        e.push({ path: "".concat(o, ".name"), key: r.name, role: "string" }), r.description && e.push({ path: "".concat(o, ".description"), key: r.description, role: "string" }), e.push(..._y(r.character, "".concat(o, ".character")));
      });
    }), ((_a3 = t.throne) == null ? void 0 : _a3.name) && e.push({ path: "throne.name", key: t.throne.name, role: "string" }), ((_b3 = t.throne) == null ? void 0 : _b3.description) && e.push({ path: "throne.description", key: t.throne.description, role: "string" }), e;
  }
  function xy(t) {
    const e = [];
    return t.wings.forEach((s, n) => s.rooms.forEach((r, i) => {
      var _a3;
      r.asset && e.push({ path: "wings[".concat(n, "].rooms[").concat(i, "].asset"), id: r.asset }), ((_a3 = r.character) == null ? void 0 : _a3.portrait) && e.push({ path: "wings[".concat(n, "].rooms[").concat(i, "].character.portrait"), id: r.character.portrait });
    })), e;
  }
  function Ey(t, e) {
    const s = [], n = new Set(e.units.map((a) => a.id)), r = new Set(e.items.map((a) => a.id)), i = new Set(e.objectives.map((a) => a.id)), o = /* @__PURE__ */ new Set();
    return t.wings.forEach((a, c) => {
      const l = "wings[".concat(c, "]");
      o.has(a.id) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(l, ".id"), message: 'two wings are called "'.concat(a.id, '"') }), o.add(a.id), n.has(a.unit) || s.push({ code: "MAZE_WING_UNIT_MISSING", path: "".concat(l, ".unit"), message: 'the wing "'.concat(a.id, '" belongs to the unit "').concat(a.unit, '", which the course does not have') });
      const d = /* @__PURE__ */ new Set();
      for (const [h, p] of a.rooms.entries()) d.has(p.id) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(l, ".rooms[").concat(h, "].id"), message: 'two rooms of the wing "'.concat(a.id, '" are called "').concat(p.id, '"') }), d.add(p.id);
      d.has(a.entry) || s.push({ code: "MAZE_ENTRY_MISSING", path: "".concat(l, ".entry"), message: 'the entrance "'.concat(a.entry, '" is not a room of the wing "').concat(a.id, '"') }), a.rooms.forEach((h, p) => {
        const f = "".concat(l, ".rooms[").concat(p, "]");
        h.objective && !i.has(h.objective) && s.push({ code: "MAZE_OBJECTIVE_MISSING", path: "".concat(f, ".objective"), message: 'unknown objective "'.concat(h.objective, '"') });
        const m = /* @__PURE__ */ new Set();
        h.doors.forEach((g, k) => {
          const b = "".concat(f, ".doors[").concat(k, "]");
          d.has(g.to) || s.push({ code: "MAZE_DOOR_TARGET_MISSING", path: "".concat(b, ".to"), message: 'the door of "'.concat(h.id, '" leads to "').concat(g.to, '", which is not a room of the wing "').concat(a.id, '"') }), m.has(g.to) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(b, ".to"), message: '"'.concat(h.id, '" has two doors to "').concat(g.to, '"') }), m.add(g.to), g.items.forEach((v, w) => {
            r.has(v) || s.push({ code: "MAZE_DOOR_ITEM_MISSING", path: "".concat(b, ".items[").concat(w, "]"), message: 'the door to "'.concat(g.to, '" asks the unknown item "').concat(v, '"') });
          });
        });
      });
    }), s;
  }
  const Ay = (t, e, s, n) => {
    const r = new Set(t.rooms.map((a) => a.id));
    if (!r.has(t.entry)) return;
    const i = _s(t), o = $l(t, t.entry);
    if (t.rooms.forEach((a, c) => {
      const l = "".concat(e, ".rooms[").concat(c, "]");
      o.has(a.id) || s.push({ code: "MAZE_ROOM_UNREACHABLE", path: l, message: 'the room "'.concat(a.id, '" of the wing "').concat(t.id, '" cannot be reached from the entrance "').concat(t.entry, '"') }), a.doors.forEach((d, h) => {
        var _a3, _b3;
        r.has(d.to) && d.items.length === 0 && s.push({ code: "MAZE_DOOR_NO_ITEMS", path: "".concat(l, ".doors[").concat(h, "]"), message: 'the door from "'.concat(a.id, '" to "').concat(d.to, '" has no question to ask (list items, or give the room beyond an objective)') });
        for (const p of d.items) {
          const f = (_a3 = n.items.find((g) => g.id === p)) == null ? void 0 : _a3.objective, m = (_b3 = n.objectives.find((g) => g.id === f)) == null ? void 0 : _b3.unit;
          m && m !== t.unit && s.push({ code: "MAZE_DOOR_ITEM_OTHER_UNIT", severity: "warning", path: "".concat(l, ".doors[").concat(h, "]"), message: 'the door to "'.concat(d.to, '" asks "').concat(p, '", which belongs to the unit "').concat(m, '", not to the wing\'s unit "').concat(t.unit, '"') });
        }
      });
    }), i.length === 0) {
      s.push({ code: "MAZE_NO_KEY_ROOM", path: e, message: 'the wing "'.concat(t.id, '" has no key room (a room with key: true), so it can never be won') });
      return;
    }
    if (i.includes(t.entry) && s.push({ code: "MAZE_KEY_AT_ENTRY", path: e, message: 'the key of the wing "'.concat(t.id, '" lies in the entrance hall: no door would ask a question') }), !i.some((a) => o.has(a))) {
      s.push({ code: "MAZE_KEY_UNREACHABLE", path: e, message: 'no key room of the wing "'.concat(t.id, '" can be reached from the entrance') });
      return;
    }
    t.rooms.forEach((a, c) => {
      o.has(a.id) && !zl(t, a.id) && s.push({ code: "MAZE_DEAD_END", path: "".concat(e, ".rooms[").concat(c, "]"), message: 'from the room "'.concat(a.id, '" no door leads on to a key room: a learner who walks in is stuck') });
    });
  };
  function Ty(t, e) {
    var _a3, _b3;
    const s = [], { pack: n } = e;
    ((_a3 = t == null ? void 0 : t.torches) != null ? _a3 : vl) < 1 && s.push({ code: "MAZE_TOO_FEW_TORCHES", severity: "warning", path: "torches", message: "with fewer than 1 torch the first wrong answer already sends the learner back to the entrance" });
    const r = (_b3 = t == null ? void 0 : t.wings) != null ? _b3 : [], i = Sl(n, t);
    for (const o of n.units) r.length > 0 && !r.some((a) => a.unit === o.id) && s.push({ code: "MAZE_UNIT_NO_WING", path: "wings", message: 'no wing of the section covers the unit "'.concat(o.id, '": the castle builds an automatic wing for it, but a unit no authored wing covers is easy to forget') });
    return i.wings.forEach((o) => {
      const a = o.auto ? -1 : r.findIndex((c) => c.id === o.id);
      Ay(o, a < 0 ? "auto[".concat(o.id, "]") : "wings[".concat(a, "]"), s, n);
    }), s;
  }
  const Iy = { id: "mindmaze", theme: "castle", requiresSection: false, schema: gy, textRefs: jy, assetRefs: xy, validate: Ey, lint: Ty, codes: ky, warnings: by }, My = /* @__PURE__ */ new Set(["du", "dich", "dir", "dein", "deine", "deinen", "deinem", "deiner", "deines", "bist", "hast", "kannst", "willst", "musst", "sollst", "darfst", "möchtest", "wirst"]), Oy = /* @__PURE__ */ new Set(["Sie", "Ihr", "Ihre", "Ihren", "Ihrem", "Ihrer", "Ihres"]);
  function Ny(t) {
    var _a3;
    const e = { du: false, sie: false };
    let s = true, n = 0;
    for (const r of t.matchAll(new RegExp("\\p{L}+", "gu"))) {
      const i = t.slice(n, r.index);
      /[.!?:]/.test(i) && (s = true), n = ((_a3 = r.index) != null ? _a3 : 0) + r[0].length;
      const o = r[0];
      My.has(o.toLowerCase()) ? e.du = true : (o === "Ihnen" || !s && Oy.has(o)) && (e.sie = true), s = false;
    }
    return e;
  }
  const Py = U({ id: P, name: C, learner: J().default(false), portrait: P.optional() }), Ry = U({ id: P, say: P, text: C, translation: C.optional(), audio: P.optional(), listen: J().default(false), next: P.nullable() }), Dy = U({ id: P, reply: P, help: C.optional(), youSay: C.optional(), next: P.nullable() }), Ly = et([Ry, Dy]), Cy = U({ id: P, unit: P.optional(), title: C, setting: C.optional(), cefr: Y(Rr).optional(), start: P, lines: N(Ly).min(1) }), Zy = U({ id: P, text: C, gloss: C, item: P }), jl = U({ speakers: N(Py).default([]), scenes: N(Cy).default([]), garden: N(Zy).default([]), finale: P.optional(), theme: E().optional() }), qe = (t) => "reply" in t, Se = (t) => "say" in t, $e = (t, e) => e == null ? void 0 : t.lines.find((s) => s.id === e);
  function js(t) {
    var _a3;
    const e = [], s = /* @__PURE__ */ new Set();
    let n = t.start;
    for (; n !== null; ) {
      const r = $e(t, n);
      if (!r) return { path: e, ends: false, dangling: n };
      if (s.has(r.id)) return { path: e, ends: false, loopAt: (_a3 = e[e.length - 1]) != null ? _a3 : r.id };
      s.add(r.id), e.push(r.id), n = r.next;
    }
    return { path: e, ends: true };
  }
  const xs = (t, e) => t.scenes.filter((s) => s.unit === e && s.id !== t.finale);
  function Uy(t) {
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
  const Fy = 0.5, By = [6, 14], Ky = [2, 6], xl = new Map(Rr.map((t, e) => [t, e])), qy = ["RP_UNIT_NO_SCENE", "RP_SCENE_UNIT_MISSING", "RP_START_MISSING", "RP_NEXT_MISSING", "RP_NO_END", "RP_LINE_UNREACHABLE", "RP_SPEAKER_MISSING", "RP_REPLY_ITEM_MISSING", "RP_SCENE_NO_REPLY", "RP_GARDEN_ITEM_MISSING", "RP_FINALE_MISSING", "RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE", "RP_REPLY_NO_HELP", "RP_UNIT_VOCAB_UNUSED", "RP_SCENE_LENGTH", "RP_SAY_GIVES_ANSWER", "RP_REGISTER_MIXED"], Gy = ["RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE", "RP_REPLY_NO_HELP", "RP_UNIT_VOCAB_UNUSED", "RP_SCENE_LENGTH", "RP_SAY_GIVES_ANSWER", "RP_REGISTER_MIXED"];
  function El(t, e) {
    var _a3, _b3;
    if (!t) return [];
    const s = t;
    switch (s.kind) {
      case "typed":
        return s.answer ? e.accepted(s.answer) : [];
      case "mcq": {
        const n = (_a3 = s.options) == null ? void 0 : _a3.find((i) => i.id === s.answer), r = n ? e.text(n.text) : void 0;
        return r ? [r] : [];
      }
      case "cloze":
        return ((_b3 = s.gaps) != null ? _b3 : []).flatMap((n) => e.accepted(n.answer));
      default:
        return [];
    }
  }
  const Tn = (t) => Pe(t, { fold: true });
  function Wy(t) {
    const e = [], s = (n, r) => {
      r && e.push({ path: n, key: r, role: "string" });
    };
    return t.speakers.forEach((n, r) => s("speakers[".concat(r, "].name"), n.name)), t.scenes.forEach((n, r) => {
      s("scenes[".concat(r, "].title"), n.title), s("scenes[".concat(r, "].setting"), n.setting), n.lines.forEach((i, o) => {
        const a = "scenes[".concat(r, "].lines[").concat(o, "]");
        Se(i) ? (s("".concat(a, ".text"), i.text), s("".concat(a, ".translation"), i.translation)) : (s("".concat(a, ".help"), i.help), s("".concat(a, ".youSay"), i.youSay));
      });
    }), t.garden.forEach((n, r) => {
      s("garden[".concat(r, "].text"), n.text), s("garden[".concat(r, "].gloss"), n.gloss);
    }), e;
  }
  function Hy(t) {
    const e = [];
    return t.speakers.forEach((s, n) => s.portrait && e.push({ path: "speakers[".concat(n, "].portrait"), id: s.portrait })), t.scenes.forEach((s, n) => s.lines.forEach((r, i) => {
      Se(r) && r.audio && e.push({ path: "scenes[".concat(n, "].lines[").concat(i, "].audio"), id: r.audio });
    })), e;
  }
  function Vy(t) {
    const e = [], s = (n, r, i) => {
      const o = /* @__PURE__ */ new Set();
      n.forEach((a, c) => {
        o.has(a) && e.push({ code: "DUPLICATE_ID", path: r(c), message: "the ".concat(i, ' id "').concat(a, '" is used twice') }), o.add(a);
      });
    };
    return s(t.speakers.map((n) => n.id), (n) => "speakers[".concat(n, "].id"), "speaker"), s(t.scenes.map((n) => n.id), (n) => "scenes[".concat(n, "].id"), "scene"), t.scenes.forEach((n, r) => s(n.lines.map((i) => i.id), (i) => "scenes[".concat(r, "].lines[").concat(i, "].id"), 'line of scene "'.concat(n.id, '"'))), s(t.garden.map((n) => n.id), (n) => "garden[".concat(n, "].id"), "garden word"), e;
  }
  function Yy(t, e) {
    var _a3, _b3, _c2;
    if (!t) return [];
    const { pack: s } = e, n = [], r = (f, m, g) => {
      n.push({ code: f, path: m, message: g });
    }, i = (f, m, g) => {
      n.push({ code: f, severity: "warning", path: m, message: g });
    }, o = new Map(s.items.map((f) => [f.id, f])), a = new Set(s.units.map((f) => f.id)), c = new Set(t.speakers.map((f) => f.id)), l = s.targetLang ? e.catalogs[s.targetLang] : void 0, d = s.cefr ? xl.get(s.cefr) : void 0, h = t.finale;
    h ? t.scenes.some((f) => f.id === h) || r("RP_FINALE_MISSING", "finale", 'the finale "'.concat(h, '" is not a scene of the section')) : r("RP_FINALE_MISSING", "finale", "the section names no finale scene: nothing mixes the units at the end (the boss)");
    for (const [f, m] of s.units.entries()) xs(t, m.id).length === 0 && r("RP_UNIT_NO_SCENE", "scenes", 'the unit "'.concat(m.id, '" (units[').concat(f, "]) has no scene: the learner cannot practise it in a conversation"));
    t.scenes.forEach((f, m) => {
      const g = "scenes[".concat(m, "]");
      f.id !== h && (!f.unit || !a.has(f.unit)) && r("RP_SCENE_UNIT_MISSING", "".concat(g, ".unit"), f.unit ? 'the scene "'.concat(f.id, '" belongs to the unknown unit "').concat(f.unit, '"') : 'the scene "'.concat(f.id, '" belongs to no unit (only the finale may)')), f.unit && f.id === h && !a.has(f.unit) && r("RP_SCENE_UNIT_MISSING", "".concat(g, ".unit"), 'the finale "'.concat(f.id, '" belongs to the unknown unit "').concat(f.unit, '"')), f.cefr && d !== void 0 && xl.get(f.cefr) > d && i("RP_CEFR_ABOVE_COURSE", "".concat(g, ".cefr"), 'the scene "'.concat(f.id, '" is ').concat(f.cefr, ", above the course level ").concat(s.cefr));
      const k = f.lines.some((b) => b.id === f.start);
      if (k || r("RP_START_MISSING", "".concat(g, ".start"), 'the start "'.concat(f.start, '" is not a line of the scene "').concat(f.id, '"')), f.lines.forEach((b, v) => {
        b.next !== null && !f.lines.some((w) => w.id === b.next) && r("RP_NEXT_MISSING", "".concat(g, ".lines[").concat(v, "].next"), 'the line "'.concat(b.id, '" goes on to "').concat(b.next, '", which is no line of the scene "').concat(f.id, '"')), Se(b) && !c.has(b.say) && r("RP_SPEAKER_MISSING", "".concat(g, ".lines[").concat(v, "].say"), 'the line "'.concat(b.id, '" is said by "').concat(b.say, '", who is not in speakers')), qe(b) && !o.has(b.reply) && r("RP_REPLY_ITEM_MISSING", "".concat(g, ".lines[").concat(v, "].reply"), 'the line "'.concat(b.id, '" asks the item "').concat(b.reply, '", which does not exist')), Se(b) && l && !l.strings[b.text] && i("RP_TEXT_NOT_TARGET", "".concat(g, ".lines[").concat(v, "].text"), 'the line "'.concat(b.id, '" says "').concat(b.text, '", which is not in the ').concat(s.targetLang, " catalog: a spoken line belongs to the target language"));
      }), k) {
        const b = js(f);
        b.loopAt !== void 0 && r("RP_NO_END", "".concat(g, ".lines"), 'from the start of "'.concat(f.id, '" the lines lead round in a circle at "').concat(b.loopAt, '" and never reach a line whose next is null'));
        const v = new Set(b.path);
        f.lines.forEach((y, $) => {
          v.has(y.id) || r("RP_LINE_UNREACHABLE", "".concat(g, ".lines[").concat($, "]"), 'the line "'.concat(y.id, '" can never be reached from the start of "').concat(f.id, '"'));
        }), b.path.map((y) => $e(f, y)).filter(qe).length === 0 && r("RP_SCENE_NO_REPLY", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
      } else f.lines.some(qe) || r("RP_SCENE_NO_REPLY", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
    });
    const p = (_c2 = (_b3 = s.targetLang ? e.resolvers[s.targetLang] : void 0) != null ? _b3 : e.resolvers[(_a3 = e.editions[0]) != null ? _a3 : s.sourceLang]) != null ? _c2 : Object.values(e.resolvers)[0];
    if (t.scenes.forEach((f, m) => {
      const g = "scenes[".concat(m, "]"), k = f.lines.filter(qe);
      k.forEach((z) => {
        z.help || i("RP_REPLY_NO_HELP", "".concat(g, ".lines[").concat(f.lines.indexOf(z), "].help"), 'the reply "'.concat(z.id, '" has no help: after a miss the other speaker has nothing to say'));
      });
      const [b, v] = By, [w, y] = Ky;
      if ((f.lines.length < b || f.lines.length > v || k.length < w || k.length > y) && i("RP_SCENE_LENGTH", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" has ').concat(f.lines.length, " lines and ").concat(k.length, " turns for the learner; a scene runs ").concat(b, " to ").concat(v, " lines with ").concat(w, " to ").concat(y, " turns")), !p) return;
      const $ = k.flatMap((z) => El(o.get(z.reply), p)), x = new Set($.map(Tn));
      for (const z of f.lines) {
        const _ = Se(z) && !z.listen ? p.text(z.text) : void 0;
        _ && x.has(Tn(_)) && i("RP_SAY_GIVES_ANSWER", "".concat(g, ".lines[").concat(f.lines.indexOf(z), "].text"), 'the line "'.concat(z.id, '" says "').concat(_, '", which is also the answer to a turn of the scene: the learner can copy it'));
      }
      if (s.targetLang === "de") {
        const _ = [...f.lines.filter(Se).map((O) => {
          var _a4;
          return (_a4 = p.text(O.text)) != null ? _a4 : "";
        }), ...$, ...k.map((O) => {
          var _a4;
          return O.youSay ? (_a4 = p.text(O.youSay)) != null ? _a4 : "" : "";
        })].map(Ny);
        _.some((O) => O.du) && _.some((O) => O.sie) && i("RP_REGISTER_MIXED", "".concat(g, ".lines"), 'the scene "'.concat(f.id, '" addresses people with both du and Sie: one scene keeps one register'));
      }
    }), p) for (const f of s.units) {
      const m = xs(t, f.id), g = t.garden.filter((v) => Al(s, v) === f.id);
      if (m.length === 0 || g.length < 2) continue;
      const k = " ".concat(m.flatMap((v) => v.lines.flatMap((w) => {
        var _a4, _b4;
        return Se(w) ? [(_a4 = p.text(w.text)) != null ? _a4 : ""] : [...El(o.get(w.reply), p), w.youSay ? (_b4 = p.text(w.youSay)) != null ? _b4 : "" : ""];
      })).map(Tn).join(" "), " "), b = g.filter((v) => {
        const w = p.text(v.text);
        return w !== void 0 && k.includes(" ".concat(Tn(w), " "));
      }).length;
      b / g.length < Fy && i("RP_UNIT_VOCAB_UNUSED", "scenes", 'the scenes of the unit "'.concat(f.id, '" use ').concat(b, " of its ").concat(g.length, " garden words: the conversation hardly practises what the unit teaches"));
    }
    for (const f of s.units) {
      const g = xs(t, f.id).flatMap((k) => k.lines.filter(qe)).map((k) => o.get(k.reply)).filter((k) => !!k);
      g.length > 0 && !g.some(Uy) && i("RP_REPLY_NOT_PRODUCTION", "scenes", 'every reply of the scenes of the unit "'.concat(f.id, '" is a choice: the learner never types the language'));
    }
    return t.garden.forEach((f, m) => {
      o.has(f.item) || r("RP_GARDEN_ITEM_MISSING", "garden[".concat(m, "].item"), 'the word "'.concat(f.id, '" is watered with the item "').concat(f.item, '", which does not exist')), l && !l.strings[f.text] && i("RP_TEXT_NOT_TARGET", "garden[".concat(m, "].text"), 'the word "'.concat(f.id, '" is "').concat(f.text, '", which is not in the ').concat(s.targetLang, " catalog"));
    }), n;
  }
  const Jy = { id: "roleplay", theme: "postcard", requiresSection: true, schema: jl, textRefs: Wy, assetRefs: Hy, validate: Vy, lint: Yy, codes: qy, warnings: Gy }, Al = (t, e) => {
    const s = t.items.find((n) => n.id === e.item);
    return s ? Gk(t, s) : void 0;
  }, Qy = "#.,T~@NBG", Xy = "#T~", In = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }, Mn = ["up", "down", "left", "right"], Ce = (t) => "".concat(t[0], ",").concat(t[1]), ot = (t, e) => t[0] === e[0] && t[1] === e[1], On = (t, e) => Math.abs(t[0] - e[0]) + Math.abs(t[1] - e[1]), oi = (t, e) => On(t, e) === 1, Qt = (t, e) => {
    var _a3;
    return e[1] >= 0 ? (_a3 = t[e[1]]) == null ? void 0 : _a3[e[0]] : void 0;
  }, Es = (t, e = false) => t !== void 0 && (t === "G" ? e : !Xy.includes(t));
  function Tl(t) {
    const e = Math.max(0, ...t.map((i) => i.length));
    let s = null, n = null;
    const r = /* @__PURE__ */ new Set();
    return t.forEach((i, o) => {
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        Qy.includes(c) || r.add(c), c === "@" && !s && (s = [a, o]), c === "G" && !n && (n = [a, o]);
      }
    }), { w: e, h: t.length, rows: [...t], ragged: t.some((i) => {
      var _a3, _b3;
      return i.length !== ((_b3 = (_a3 = t[0]) == null ? void 0 : _a3.length) != null ? _b3 : 0);
    }), start: s, gate: n, unknown: [...r] };
  }
  const Nn = (t, e) => [t[0] + In[e][0], t[1] + In[e][1]];
  function e0(t, e, s = {}) {
    var _a3;
    const n = /* @__PURE__ */ new Set([Ce(e)]), r = [e];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      for (const a of Mn) {
        const c = Nn(o, a), l = Ce(c);
        n.has(l) || !Es(Qt(t, c), s.gateOpen) || ((_a3 = s.blocked) == null ? void 0 : _a3.has(l)) || (n.add(l), r.push(c));
      }
    }
    return n;
  }
  function Il(t, e, s, n = {}) {
    var _a3;
    if (s(e)) return [];
    const r = /* @__PURE__ */ new Map([[Ce(e), null]]), i = [e];
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      for (const c of Mn) {
        const l = Nn(a, c), d = Ce(l);
        if (!(r.has(d) || !Es(Qt(t, l), n.gateOpen) || ((_a3 = n.blocked) == null ? void 0 : _a3.has(d)))) {
          if (r.set(d, a), s(l)) {
            const h = [l];
            for (let p = a; !ot(p, e); p = r.get(Ce(p))) h.unshift(p);
            return h;
          }
          i.push(l);
        }
      }
    }
    return null;
  }
  function Ml(t, e, s, n = {}) {
    return Il(t, e, (r) => oi(r, s), n);
  }
  function Pn(t, e, s, n, r = false) {
    const i = new Set(n.filter((a) => !ot(a, s)).map(Ce)), o = e0(t, e, { blocked: i, gateOpen: r });
    return o.has(Ce(s)) ? true : Mn.some((a) => o.has(Ce(Nn(s, a))));
  }
  const Ol = 16, Nl = 11, t0 = (t) => Mn.map((e) => Nn(t, e));
  function s0(t, e) {
    const s = Math.max(0, Math.min(4, Math.floor(e)));
    for (let n = 0; n < 6; n++) {
      const r = n0("".concat(t, "#").concat(n), s, n >= 3);
      if (r) return r;
    }
    return r0(s);
  }
  function n0(t, e, s) {
    const n = new st("rpg-map:".concat(t)), r = Ol, i = Nl, o = Array.from({ length: i }, (j, T) => Array.from({ length: r }, (D, G) => G === 0 || T === 0 || G === r - 1 || T === i - 1 ? "#" : ".")), a = (j, T) => {
      const D = o[j[1]];
      D && (D[j[0]] = T);
    }, c = (j) => {
      var _a3, _b3;
      return (_b3 = (_a3 = o[j[1]]) == null ? void 0 : _a3[j[0]]) != null ? _b3 : "#";
    }, l = (j) => j[0] >= 1 && j[1] >= 1 && j[0] <= r - 2 && j[1] <= i - 2;
    if (!s) {
      const j = n.randint(5, r - 6), T = n.randint(2, i - 3), D = n.randint(1, 2);
      for (let G = 1; G <= i - 2; G++) for (let F = 1; F <= r - 2; F++) (F - j) ** 2 + (G - T) ** 2 * 1.5 <= D * D + n.random() * 1.6 && a([F, G], "~");
      for (let G = 1; G <= i - 2; G++) for (let F = 1; F <= r - 2; F++) {
        const H = F <= 1 || F >= r - 2 || G <= 1 || G >= i - 2;
        c([F, G]) === "." && n.random() < (H ? 0.34 : 0.1) && a([F, G], "T");
      }
    }
    const d = [1, n.randint(2, i - 3)], h = n.randint(2, i - 3), p = [r - 1, h], f = [r - 2, h];
    a(p, "G");
    const m = [d], g = 2 + n.randint(0, 1);
    for (let j = 1; j <= g; j++) m.push([Math.max(2, Math.min(r - 3, Math.round(1 + (r - 3) * j / (g + 1)) + n.randint(-1, 1))), n.randint(2, i - 3)]);
    m.push(f);
    const k = /* @__PURE__ */ new Set(), b = (j) => {
      l(j) && (a(j, ","), k.add(Ce(j)));
    };
    for (let j = 0; j + 1 < m.length; j++) {
      const T = m[j], D = m[j + 1], F = n.random() < 0.5 ? [D[0], T[1]] : [T[0], D[1]];
      for (const [H, ke] of [[T, F], [F, D]]) {
        const he = Math.sign(ke[0] - H[0]), Ie = Math.sign(ke[1] - H[1]);
        for (let Ue = H; b(Ue), !ot(Ue, ke); Ue = [Ue[0] + he, Ue[1] + Ie]) ;
      }
    }
    const w = (() => {
      const j = /* @__PURE__ */ new Map();
      for (const T of k) {
        const [D, G] = T.split(",").map(Number);
        for (const F of t0([D, G])) l(F) && !k.has(Ce(F)) && !ot(F, d) && j.set(Ce(F), F);
      }
      return [...j.values()].filter((T) => On(T, d) >= 2 && On(T, f) >= 2);
    })(), y = [], $ = (j, T) => {
      const D = w.filter((G) => j(G) && y.every((F) => On(G, F) >= T));
      return D.length === 0 ? null : n.choice(D);
    }, x = (j) => {
      var _a3, _b3, _c2;
      return (_c2 = (_b3 = (_a3 = $(j, 3)) != null ? _a3 : $(j, 2)) != null ? _b3 : $(() => true, 2)) != null ? _c2 : $(() => true, 1);
    }, z = x((j) => j[0] <= 5), _ = x((j) => j[0] >= r - 5);
    if (!z || !_) return null;
    y.push(z, _);
    const O = [];
    for (let j = 0; j < e; j++) {
      const T = 5 + Math.floor((r - 10) * j / Math.max(1, e)), D = 5 + Math.ceil((r - 10) * (j + 1) / Math.max(1, e)), G = x((F) => F[0] >= T && F[0] <= D);
      if (!G) return null;
      y.push(G), O.push(G);
    }
    for (const j of [z, _, ...O]) c(j) !== "." && a(j, ".");
    a(z, "N"), a(_, "B"), a(d, "@");
    const R = o.map((j) => j.join("")), S = [z, _, ...O];
    return S.every((j) => Pn(R, d, j, S)) && Pn(R, d, p, S, true) ? { rows: R, start: d, npc: z, foes: O, boss: _, gate: p } : null;
  }
  function r0(t) {
    const e = Ol, s = Nl, n = Array.from({ length: s }, (l, d) => Array.from({ length: e }, (h, p) => p === 0 || d === 0 || p === e - 1 || d === s - 1 ? "#" : ".")), r = [1, 5], i = [e - 1, 5], o = [3, 3], a = [e - 4, 3], c = Array.from({ length: t }, (l, d) => [4 + d * 2, 7]);
    return n[5][e - 1] = "G", n[3][3] = "N", n[3][e - 4] = "B", n[5][1] = "@", { rows: n.map((l) => l.join("")), start: r, npc: o, foes: c, boss: a, gate: i };
  }
  const Pl = 200, Rl = 400, Dl = 800, Ll = 10, ai = At([L().int().min(0).max(99), L().int().min(0).max(99)]), ci = (t) => L().int().min(10).max(5e3).default(t), i0 = U({ id: P, name: C, at: ai, lines: N(C).default([]), quest: J().default(false), portrait: P.optional() }), o0 = U({ id: P, name: C, at: ai, hp: ci(Pl), items: N(P).default([]), sprite: P.optional() }), a0 = U({ id: P, name: C, at: ai, hp: ci(Rl), sprite: P.optional() }), c0 = U({ id: P, unit: P, name: C, map: N(E().min(1).regex(/^[#.,T~@NBG]+$/, "map characters are # . , T ~ @ N B G")).min(3).max(40), npcs: N(i0).default([]), foes: N(o0).default([]), boss: a0 }), l0 = U({ hero: U({ name: C }).optional(), story: U({ intro: N(C).default([]), outro: N(C).default([]) }).default({ intro: [], outro: [] }), tileset: P.optional(), sprites: U({ hero: P.optional(), npc: P.optional(), foe: P.optional(), boss: P.optional() }).optional(), areas: N(c0).default([]), finalBoss: U({ name: C.optional(), hp: ci(Dl), size: L().int().min(4).max(20).default(Ll) }).optional() });
  function d0(t) {
    var _a3, _b3;
    for (let e = 0; e < t.length; e++) for (let s = 0; s < ((_b3 = (_a3 = t[e]) == null ? void 0 : _a3.length) != null ? _b3 : 0); s++) if (Es(Qt(t, [s, e]))) return [s, e];
    return [0, 0];
  }
  function Cl(t) {
    var _a3;
    const e = Tl(t.map);
    return { id: t.id, unitId: t.unit, nameKey: t.name, rows: [...t.map], start: (_a3 = e.start) != null ? _a3 : d0(t.map), gate: e.gate, npcs: t.npcs.map((s) => ({ id: s.id, nameKey: s.name, at: s.at, lines: [...s.lines], quest: s.quest, ...s.portrait ? { portrait: s.portrait } : {} })), foes: t.foes.map((s, n) => ({ id: s.id, nameKey: s.name, at: s.at, hp: s.hp, items: [...s.items], n: n + 1, ...s.sprite ? { sprite: s.sprite } : {} })), boss: { id: t.boss.id, nameKey: t.boss.name, at: t.boss.at, hp: t.boss.hp, ...t.boss.sprite ? { sprite: t.boss.sprite } : {} }, auto: false };
  }
  function li(t, e) {
    const s = new Set(dn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective)).map((n) => n.id);
  }
  const u0 = 4;
  function h0(t, e) {
    const s = dn(t, e), n = Math.max(1, Math.min(u0, s.length)), r = Array.from({ length: n }, () => []);
    s.forEach((o, a) => {
      const c = r[a % n];
      for (const l of t.items) l.objective === o.id && c.push(l.id);
    });
    const i = s0("".concat(t.id, ":").concat(e), n);
    return { id: e, unitId: e, rows: i.rows, start: i.start, gate: i.gate, npcs: [{ id: "n-".concat(e), at: i.npc, lines: [], quest: true }], foes: i.foes.map((o, a) => {
      var _a3;
      return { id: "f-".concat(e, "-").concat(a + 1), at: o, hp: Pl, items: (_a3 = r[a]) != null ? _a3 : [], n: a + 1 };
    }), boss: { id: "b-".concat(e), at: i.boss, hp: Rl }, auto: true };
  }
  function Zl(t, e) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
    const s = new Set(t.units.map((c) => c.id)), n = ((_a3 = e == null ? void 0 : e.areas) != null ? _a3 : []).filter((c) => s.has(c.unit)).map(Cl), r = new Set(n.map((c) => c.unitId)), i = Tt(t.units), o = /* @__PURE__ */ new Map();
    for (const c of n) o.set(c.unitId, [...(_b3 = o.get(c.unitId)) != null ? _b3 : [], c]);
    const a = [];
    for (const c of i) o.has(c) ? a.push(...o.get(c)) : r.has(c) || a.push(h0(t, c));
    return { areas: a, ...(e == null ? void 0 : e.hero) ? { heroNameKey: e.hero.name } : {}, intro: (_c2 = e == null ? void 0 : e.story.intro) != null ? _c2 : [], outro: (_d2 = e == null ? void 0 : e.story.outro) != null ? _d2 : [], finalBoss: { ...((_e2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _e2.name) ? { nameKey: e.finalBoss.name } : {}, hp: (_g2 = (_f2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _f2.hp) != null ? _g2 : Dl, size: (_i2 = (_h2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _h2.size) != null ? _i2 : Ll }, ...(e == null ? void 0 : e.tileset) ? { tileset: e.tileset } : {}, sprites: (_j = e == null ? void 0 : e.sprites) != null ? _j : {}, authored: e !== void 0 };
  }
  const p0 = ["RPG_AREA_UNIT_MISSING", "RPG_UNIT_NO_AREA", "RPG_MAP_RAGGED", "RPG_MAP_NO_START", "RPG_MAP_UNREACHABLE", "RPG_SPOT_BLOCKED", "RPG_NO_QUEST_GIVER", "RPG_FOE_ITEM_MISSING", "RPG_FOE_NO_ITEMS", "RPG_DIALOGUE_EMPTY", "RPG_QUEST_UNWINNABLE"], Ul = ["RPG_FOE_ITEM_OTHER_UNIT", "RPG_NO_STORY"];
  function f0(t) {
    var _a3, _b3;
    const e = [], s = (n, r) => {
      r && e.push({ path: n, key: r, role: "string" });
    };
    return s("hero.name", (_a3 = t.hero) == null ? void 0 : _a3.name), t.story.intro.forEach((n, r) => s("story.intro[".concat(r, "]"), n)), t.story.outro.forEach((n, r) => s("story.outro[".concat(r, "]"), n)), s("finalBoss.name", (_b3 = t.finalBoss) == null ? void 0 : _b3.name), t.areas.forEach((n, r) => {
      s("areas[".concat(r, "].name"), n.name), n.npcs.forEach((i, o) => {
        s("areas[".concat(r, "].npcs[").concat(o, "].name"), i.name), i.lines.forEach((a, c) => s("areas[".concat(r, "].npcs[").concat(o, "].lines[").concat(c, "]"), a));
      }), n.foes.forEach((i, o) => s("areas[".concat(r, "].foes[").concat(o, "].name"), i.name)), s("areas[".concat(r, "].boss.name"), n.boss.name);
    }), e;
  }
  function m0(t) {
    var _a3;
    const e = [];
    t.tileset && e.push({ path: "tileset", id: t.tileset });
    for (const s of ["hero", "npc", "foe", "boss"]) ((_a3 = t.sprites) == null ? void 0 : _a3[s]) && e.push({ path: "sprites.".concat(s), id: t.sprites[s] });
    return t.areas.forEach((s, n) => {
      s.npcs.forEach((r, i) => r.portrait && e.push({ path: "areas[".concat(n, "].npcs[").concat(i, "].portrait"), id: r.portrait })), s.foes.forEach((r, i) => r.sprite && e.push({ path: "areas[".concat(n, "].foes[").concat(i, "].sprite"), id: r.sprite })), s.boss.sprite && e.push({ path: "areas[".concat(n, "].boss.sprite"), id: s.boss.sprite });
    }), e;
  }
  function g0(t, e) {
    const s = [], n = new Set(e.units.map((i) => i.id)), r = new Set(e.items.map((i) => i.id));
    return t.areas.forEach((i, o) => {
      n.has(i.unit) || s.push({ code: "UNKNOWN_UNIT", path: "areas[".concat(o, "].unit"), message: 'the area "'.concat(i.id, '" names the unit "').concat(i.unit, '", which does not exist') }), i.foes.forEach((a, c) => a.items.forEach((l, d) => !r.has(l) && s.push({ code: "UNKNOWN_ITEM", path: "areas[".concat(o, "].foes[").concat(c, "].items[").concat(d, "]"), message: 'the foe "'.concat(a.id, '" asks the item "').concat(l, '", which does not exist') })));
    }), s;
  }
  function Fl(t, e, s, n) {
    const r = s.pack, i = r.units.some((d) => d.id === t.unitId), o = new Set(i ? li(r, t.unitId) : []), a = Tl(t.rows);
    a.ragged && n("RPG_MAP_RAGGED", "".concat(e, ".map"), 'the rows of the map of "'.concat(t.id, '" have different widths (').concat([...new Set(t.rows.map((d) => d.length))].join(", "), ")")), a.start || n("RPG_MAP_NO_START", "".concat(e, ".map"), 'the map of "'.concat(t.id, '" has no start tile "@"'));
    const c = [...t.npcs.map((d, h) => ({ at: d.at, path: "".concat(e, ".npcs[").concat(h, "].at"), label: 'the person "'.concat(d.id, '"') })), ...t.foes.map((d, h) => ({ at: d.at, path: "".concat(e, ".foes[").concat(h, "].at"), label: 'the foe "'.concat(d.id, '"') })), { at: t.boss.at, path: "".concat(e, ".boss.at"), label: 'the boss "'.concat(t.boss.id, '"') }], l = /* @__PURE__ */ new Set();
    if (c.forEach((d, h) => {
      const p = Qt(t.rows, d.at);
      p === void 0 ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands at ").concat(d.at[0], ",").concat(d.at[1], ", outside the map")), l.add(h)) : !Es(p, true) || p === "G" ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands on ").concat(p === "#" ? "a wall" : p === "T" ? "a tree" : p === "~" ? "water" : "the gate", " at ").concat(d.at[0], ",").concat(d.at[1])), l.add(h)) : a.start && ot(d.at, a.start) ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands on the hero's start tile")), l.add(h)) : c.some((f, m) => m < h && ot(f.at, d.at)) && (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " shares the tile ").concat(d.at[0], ",").concat(d.at[1], " with someone else")), l.add(h));
    }), a.start) {
      const d = c.map((h) => h.at);
      c.forEach((h, p) => {
        l.has(p) || Pn(t.rows, a.start, h.at, d) || n("RPG_MAP_UNREACHABLE", h.path, "".concat(h.label, " cannot be reached from the start tile on walkable tiles"));
      }), a.gate && !Pn(t.rows, a.start, a.gate, d, true) && n("RPG_MAP_UNREACHABLE", "".concat(e, ".map"), 'the gate of "'.concat(t.id, '" cannot be reached from the start tile on walkable tiles'));
    }
    t.npcs.some((d) => d.quest) || n("RPG_NO_QUEST_GIVER", "".concat(e, ".npcs"), 'the area "'.concat(t.id, '" has no person with "quest": true, so nobody offers the quest')), t.npcs.forEach((d, h) => {
      !t.auto && d.lines.length === 0 && n("RPG_DIALOGUE_EMPTY", "".concat(e, ".npcs[").concat(h, "].lines"), '"'.concat(d.id, '" has nothing to say (no lines)'));
    }), t.foes.forEach((d, h) => {
      const p = "".concat(e, ".foes[").concat(h, "]");
      d.items.length === 0 && n("RPG_FOE_NO_ITEMS", "".concat(p, ".items"), 'the foe "'.concat(d.id, '" has no items: its battle has no questions'));
      const f = d.items.filter((m) => r.items.some((g) => g.id === m));
      d.items.forEach((m, g) => {
        r.items.some((k) => k.id === m) ? i && !o.has(m) && n("RPG_FOE_ITEM_OTHER_UNIT", "".concat(p, ".items[").concat(g, "]"), 'the item "'.concat(m, '" of the foe "').concat(d.id, '" belongs to another unit than "').concat(t.unitId, '"'), "warning") : n("RPG_FOE_ITEM_MISSING", "".concat(p, ".items[").concat(g, "]"), 'the foe "'.concat(d.id, '" asks the item "').concat(m, '", which does not exist'));
      }), f.length === 0 && n("RPG_QUEST_UNWINNABLE", p, 'the foe "'.concat(d.id, '" cannot be beaten: none of its items can be asked'));
    }), i && o.size === 0 && n("RPG_QUEST_UNWINNABLE", "".concat(e, ".boss"), 'the boss "'.concat(t.boss.id, '" cannot be beaten: the unit "').concat(t.unitId, '" has no items to ask'));
  }
  function k0(t, e) {
    const s = [], n = (o, a, c, l) => s.push({ code: o, path: a, message: c, ...l ? { severity: l } : {} }), r = e.pack;
    if (t === void 0 || t.areas.length === 0) Zl(r, t).areas.forEach((a, c) => Fl(a, "areas[".concat(c, "]"), e, n));
    else {
      t.areas.forEach((a, c) => Fl(Cl(a), "areas[".concat(c, "]"), e, n));
      const o = new Set(t.areas.map((a) => a.unit));
      t.areas.forEach((a, c) => {
        r.units.some((l) => l.id === a.unit) || n("RPG_AREA_UNIT_MISSING", "areas[".concat(c, "].unit"), 'the area "'.concat(a.id, '" names the unit "').concat(a.unit, '", which does not exist'));
      });
      for (const a of r.units) o.has(a.id) || n("RPG_UNIT_NO_AREA", "areas", 'the unit "'.concat(a.id, '" has no area, so its quest is made automatically'));
    }
    const i = t !== void 0 && (t.tileset !== void 0 || t.sprites !== void 0) && t.areas.length === 0 && !t.hero && !t.finalBoss;
    return t !== void 0 && !i && t.story.intro.length === 0 && n("RPG_NO_STORY", "story.intro", "the section has no frame story (no intro lines)", "warning"), r.items.length === 0 && n("RPG_QUEST_UNWINNABLE", "finalBoss", "the final boss cannot be beaten: the course has no items to ask"), s;
  }
  const b0 = { id: "rpg", theme: "pixel", requiresSection: false, schema: l0, textRefs: f0, assetRefs: m0, validate: g0, lint: k0, codes: [...p0, ...Ul], warnings: Ul }, Rn = new Map([dy, Iy, b0, Jy, Uw].map((t) => [t.id, t]));
  [...Rn.keys()];
  const v0 = (t, e) => t.shells.config[e], w0 = (t) => t.reduce((e, s) => typeof s == "number" ? "".concat(e, "[").concat(s, "]") : e ? "".concat(e, ".").concat(String(s)) : String(s), "");
  function y0(t, e) {
    const s = Rn.get(e), n = v0(t, e);
    if (!s || n === void 0) return { present: false };
    const r = s.schema.safeParse(n);
    return r.success ? { present: true, ok: true, data: r.data } : { present: true, ok: false, issues: r.error.issues.map((i) => ({ path: w0(i.path), message: i.message })) };
  }
  function S0(t, e) {
    const s = y0(t, e);
    return s.present && s.ok ? s.data : void 0;
  }
  [...[...Rn.values()].flatMap((t) => t.codes)], [...[...Rn.values()].flatMap((t) => {
    var _a3;
    return (_a3 = t.warnings) != null ? _a3 : [];
  })];
  const di = (t, e) => {
    var _a3, _b3;
    const s = t.filter((n) => !e.includes(n.id));
    return (_b3 = (_a3 = s.find((n) => n.why)) != null ? _a3 : s[0]) == null ? void 0 : _b3.id;
  };
  function $0(t) {
    var _a3, _b3, _c2;
    switch (t.kind) {
      case "mcq": {
        const e = t;
        return di(e.options, [e.answer]);
      }
      case "listening": {
        const e = t;
        return e.mode === "choose" ? di((_a3 = e.options) != null ? _a3 : [], [e.answer]) : "zzzzzz";
      }
      case "true-false":
        return !t.answer;
      case "multi-select": {
        const e = t, s = di(e.options, e.answers);
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
  function z0(t) {
    const e = (s) => {
      const n = window.EDU_GAME_DATA, r = n == null ? void 0 : n.pack.items.find((o) => o.id === s);
      if (!n || !r) return;
      const i = t().lang || n.defaultLang;
      return { item: r, ctx: qt({ pack: n.pack, text: Gt(n.catalogs, i, n.pack.targetLang) }) };
    };
    return { solve(s) {
      const n = e(s);
      if ((n == null ? void 0 : n.item.kind) === "conjugation") {
        const r = n.item;
        return Object.fromEntries(r.forms.filter((i) => !i.given).map((i) => {
          var _a3;
          return [i.person, (_a3 = n.ctx.text.canonical(i.answer)) != null ? _a3 : ""];
        }));
      }
      return n ? Mb(n.item, n.ctx) : void 0;
    }, wrong(s) {
      const n = e(s);
      return n ? $0(n.item) : void 0;
    } };
  }
  function u(t, e = {}, ...s) {
    const n = document.createElement(t);
    for (const [r, i] of Object.entries(e)) i == null || i === false || (typeof i == "function" ? n.addEventListener(r.replace(/^on/, "").toLowerCase(), i) : r === "class" ? n.className = String(i) : r === "testid" ? n.setAttribute("data-testid", String(i)) : r === "text" ? n.textContent = String(i) : n.setAttribute(r, i === true ? "" : String(i)));
    return Bl(n, s), n;
  }
  function Bl(t, e) {
    for (const s of e) s == null || s === false || (Array.isArray(s) ? Bl(t, s) : t.appendChild(typeof s == "string" || typeof s == "number" ? document.createTextNode(String(s)) : s));
  }
  function As(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function I(t, e, s, n = {}) {
    return u("button", { type: "button", testid: t, ...n, onclick: s }, e);
  }
  function ui(t) {
    return t.ctrlKey || t.metaKey || t.altKey ? -1 : /^[1-9]$/.test(t.key) ? Number(t.key) - 1 : -1;
  }
  function Ts(t) {
    const e = t;
    return !e || !e.tagName ? false : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable;
  }
  function Is(t, e, s = 700) {
    t.classList.remove(e), t.offsetWidth, t.classList.add(e), window.setTimeout(() => t.classList.remove(e), s);
  }
  const _0 = "http://www.w3.org/2000/svg";
  function ue(t, e = {}, ...s) {
    const n = document.createElementNS(_0, t);
    for (const [r, i] of Object.entries(e)) i !== void 0 && n.setAttribute(r === "testid" ? "data-testid" : r, String(i));
    for (const r of s) n.appendChild(r);
    return n;
  }
  const j0 = { "title.tagline": "Chalkboard quiz arena", start: "Start", continue: "Continue", language: "Language", timer: "Timed questions", "timer.hint": "About {s} seconds per question. Typing questions are never timed.", sound: "Sounds", reduceAudio: "Reduce audio", "reduceAudio.hint": "No music, and quieter sound effects.", speak: "Speak", "speak.setting": "Speak your answers", "speak.privacy.web": "Uses your browser speech recognition; in Chrome and Edge the audio goes to the browser vendor. Typing always works.", "speak.privacy.local": "Speech is recognised on this computer; nothing is sent away. Typing always works.", "speak.listening": "Listening. Press the button again or Escape to stop.", "speak.thinking": "Working out what you said.", "speak.heard": "Heard: {text}. You can edit it before you check.", "speak.err.denied": "The microphone is not allowed. Type your answer instead.", "speak.err.no-speech": "Nothing was heard. Try again or type your answer.", "speak.err.unavailable": "Speech recognition is not available right now. Type your answer instead.", "speak.err.failed": "Could not recognise that. Try again or type your answer.", export: "Export progress", import: "Import progress", reset: "Reset progress", "reset.confirm": "Erase all saved progress for this course?", "reset.yes": "Yes, erase", "reset.no": "Keep it", "reset.done": "Progress erased.", "import.ok": "Progress imported.", "import.bad": "This file is not progress for this course: {why}", "export.done": "Progress file saved.", "storage.off": "Saving is off in this browser: progress is kept only until you close the page. Use Export to keep it.", "map.title": "Choose a unit", "map.stars": "{n} of {total} stars", "map.requires": "Needs: {units}", "map.locked": "Locked", "map.unitStars": "{n} of 3 stars", "map.items": "{n} questions", "map.boss": "Boss round", "map.boss.locked": "Master every unit (2 stars) to face the boss.", "map.boss.ready": "Questions from every unit, harder.", "map.review": "Review misses ({n})", "map.verbs": "Verb drill ({n} due)", menu: "Title screen", round: "Round {n}", question: "Question {i} of {n}", retry: "Second try", leave: "Leave round", score: "Score", combo: "Combo", time: "Time", hint: "Hint", submit: "Check", next: "Next", results: "See results", flip: "Show the answer", "selfcheck.hint": "Compare what you wrote or said with the model answer, then grade yourself. The program does not check it.", "grade.again": "Again", "grade.hard": "Hard", "grade.good": "Good", "grade.easy": "Easy", "grade.ask": "How well did you know it?", "answer.type": "Your answer", "gap.n": "Gap {n}", letters: "Special letters", play: "Play the sound", "play.again": "Play again", "audio.fail": "The sound could not be played.", transcript: "It says:", "order.up": "Move {item} up", "order.down": "Move {item} down", "order.first": "earliest", "order.last": "latest", "sort.assign": "{item}: put in {group}", "pairs.pick": "Pick one on each side to pair them. Pick a paired one again to undo.", "multi.hint": "Select all that apply, then check.", "cross.across": "Across", "cross.down": "Down", "cross.word": "Word {n}", "cross.cell": "Row {r}, column {c}", "ws.found": "Found {n} of {total}", "ws.pick": "Pick the first and the last letter of a word.", "ws.done": "Done", "hotspot.pick": "Pick the right place on the picture.", picture: "Picture", "verdict.correct": "Correct!", "verdict.partial": "Nearly there", "verdict.wrong": "Not quite", "verdict.timeout": "Time is up", "praise.1": "Spot on!", "praise.2": "Nicely done!", "praise.3": "You nailed it!", "praise.4": "Right!", "praise.5": "Great work!", "fb.why": "Why that is not it", "fb.explain": "The idea", "fb.answer": "The answer", "fb.dyk": "Did you know?", "fb.typo": "Accepted, but mind the spelling: {a}", "fb.accents": "Accepted, but mind the accents: {a}", "fb.accents.strict": "Almost! Check the accents: {a}", "fb.note.translit": "Accepted. The umlaut is written ä / ö / ü and ß; ae / oe / ue / ss is the keyboard spelling: {a}", "fb.note.caps": "Accepted. German nouns start with a capital letter: {a}", "fb.note.umlaut": "Almost: check the umlaut: {a}", "fb.invalid": "No answer was given.", "fb.true": "True", "fb.false": "False", "fb.missed": "You missed: {a}", "fb.matched": "Right pairs: {n} of {total}", "fb.detail.order": "In the right place: {n} of {total}", "fb.detail.sort": "Sorted right: {n} of {total}", "fb.detail.gaps": "Gaps right: {n} of {total}", "fb.detail.words": "Words right: {n} of {total}", "fb.detail.forms": "Forms right: {n} of {total}", "conj.tense.praesens": "Present", "conj.tense.perfekt": "Perfect", "conj.tense.praeteritum": "Simple past", "conj.tense.futur1": "Future", "conj.tense.imperativ": "Imperative", "conj.tense.konjunktiv2": "Subjunctive II", "conj.tense.passiv-praesens": "Passive, present", "conj.tense.passiv-praeteritum": "Passive, simple past", "conj.tense.perfekt-passiv": "Passive, perfect", "conj.tense.konjunktiv2-vergangenheit": "Subjunctive II, past", "conj.tense.konjunktiv1": "Subjunctive I", "conj.tense.konjunktiv1-vergangenheit": "Subjunctive I, past", "summary.title": "Round complete", "summary.accuracy": "{n}% right first time", "summary.score": "Score {n}", "summary.combo": "Best combo {n}", "summary.unlocked": "Unlocked: {units}", "summary.bossLocked": "The boss round is open!", "summary.again": "Play the round again", "summary.back": "Back to the map", "summary.finish": "Finish the course", "summary.needStars": "Two stars unlock the next units.", "summary.bossFail": "The boss held out. Review and try again.", "summary.perfect": "Perfect round!", review: "Review misses", "review.title": "Review misses", "review.empty": "Nothing to review. Everything you missed is already learned.", "review.practice": "Practise these", "review.back": "Back to the map", "review.answer": "The answer", "end.title": "Course complete!", "end.sub": "You mastered every unit and beat the boss.", "end.stars": "Stars", "end.score": "Total score", "end.accuracy": "Answered right first time: {n}%", "end.again": "Play again", "end.title.screen": "Back to the title", loading: "Loading...", error: "The game could not start.", "a11y.skip": "Skip to the question", stars: "{n} of 3 stars", burst: "Combo x{n}!", "start.choose": "Choose how to play", "mode.quiz-arena.name": "Quiz arena", "mode.quiz-arena.blurb": "Timed rounds of mixed questions", "mode.encyclopedia.name": "Encyclopedia", "mode.encyclopedia.blurb": "Read articles and explore the topic", "mode.mindmaze.name": "MindMaze castle", "mode.mindmaze.blurb": "Open the doors of a castle with right answers", "mode.rpg.name": "RPG quest", "mode.rpg.blurb": "A pixel adventure powered by your answers", "mode.roleplay.name": "Role-play", "mode.roleplay.blurb": "Talk your way through everyday dialogues", "mode.detective.name": "Detective", "mode.detective.blurb": "Solve cases from the clues you learned", "question.lead": "Question", "review.none": "Nothing to review yet.", "class.assignment": "Assignment from your teacher", "class.target": "Reach {n} stars in: {units}", "class.allUnits": "all units", "class.due": "Due: {date}", "class.yourName": "Your name", "class.send": "Send to my teacher", "class.sent": "Result file saved. Send it to your teacher.", "class.needName": "Type your name first.", "class.assigned": "Assigned", "reader.title": "Reader", "reader.nav": "Reader", "reader.open": "Open the reader", "reader.continue": "Continue reading", "reader.toc": "Chapters", "reader.chapter": "Chapter {n}", "reader.progress": "Chapter {n} of {total}", "reader.chapterRead": "read", "reader.prev": "Previous chapter", "reader.next": "Next chapter", "reader.hint": "Tap an underlined word to see what it means. The left and right arrow keys change chapter.", "reader.read": "You have read this chapter.", "reader.last": "That was the last chapter.", "reader.practice": "Practise this text", "reader.empty": "This course has no readings.", "reader.leave": "Back to the text", "gloss.panel": "Words in this text", "gloss.deck": "In my deck", "gloss.deck.for": 'Keep "{term}" in my vocabulary deck', "gloss.close": "Close the explanation", "gloss.pos.n": "noun", "gloss.pos.v": "verb", "gloss.pos.adj": "adjective", "gloss.pos.adv": "adverb", "gloss.pos.prep": "preposition", "gloss.pos.conj": "conjunction", "gloss.pos.phrase": "phrase", "passage.show": "Read the text", "passage.hide": "Hide the text", "passage.title": "The text" }, hi = { hr: { "title.tagline": "Kviz na školskoj ploči", start: "Započni", continue: "Nastavi", language: "Jezik", timer: "Pitanja na vrijeme", "timer.hint": "Oko {s} sekundi po pitanju. Pitanja s upisivanjem nikad nisu na vrijeme.", sound: "Zvukovi", reduceAudio: "Smanji zvuk", "reduceAudio.hint": "Bez glazbe, a zvučni efekti su tiši.", speak: "Govori", "speak.setting": "Govori odgovore", "speak.privacy.web": "Koristi prepoznavanje govora u pregledniku; u Chromeu i Edgeu zvuk ide pružatelju preglednika. Upisivanje uvijek radi.", "speak.privacy.local": "Govor se prepoznaje na ovom računalu; ništa se ne šalje dalje. Upisivanje uvijek radi.", "speak.listening": "Slušam. Ponovo pritisni gumb ili Escape za kraj.", "speak.thinking": "Provjeravam što si rekao.", "speak.heard": "Čuo sam: {text}. Možeš to urediti prije provjere.", "speak.err.denied": "Mikrofon nije dopušten. Umjesto toga upiši odgovor.", "speak.err.no-speech": "Ništa se nije čulo. Pokušaj ponovo ili upiši odgovor.", "speak.err.unavailable": "Prepoznavanje govora trenutno nije dostupno. Umjesto toga upiši odgovor.", "speak.err.failed": "Nisam to prepoznao. Pokušaj ponovo ili upiši odgovor.", export: "Izvezi napredak", import: "Uvezi napredak", reset: "Obriši napredak", "reset.confirm": "Obrisati sav spremljeni napredak za ovaj tečaj?", "reset.yes": "Da, obriši", "reset.no": "Zadrži", "reset.done": "Napredak je obrisan.", "import.ok": "Napredak je uvezen.", "import.bad": "Ova datoteka nije napredak za ovaj tečaj: {why}", "export.done": "Datoteka napretka je spremljena.", "storage.off": "Spremanje je isključeno u ovom pregledniku: napredak traje dok ne zatvoriš stranicu. Koristi izvoz da ga sačuvaš.", "map.title": "Odaberi cjelinu", "map.stars": "{n} od {total} zvjezdica", "map.requires": "Treba: {units}", "map.locked": "Zaključano", "map.unitStars": "{n} od 3 zvjezdice", "map.items": "{n} pitanja", "map.boss": "Završni izazov", "map.boss.locked": "Savladaj svaku cjelinu (2 zvjezdice) da bi došao do izazova.", "map.boss.ready": "Pitanja iz svih cjelina, teža.", "map.review": "Ponovi pogreške ({n})", "map.verbs": "Vježba glagola ({n} za ponoviti)", menu: "Početni zaslon", round: "Runda {n}", question: "Pitanje {i} od {n}", retry: "Drugi pokušaj", leave: "Napusti rundu", score: "Bodovi", combo: "Niz", time: "Vrijeme", hint: "Pomoć", submit: "Provjeri", next: "Dalje", results: "Prikaži rezultat", flip: "Prikaži odgovor", "selfcheck.hint": "Usporedi što si napisao ili rekao s uzornim odgovorom, pa se sam ocijeni. Program to ne provjerava.", "grade.again": "Opet", "grade.hard": "Teško", "grade.good": "Dobro", "grade.easy": "Lako", "grade.ask": "Koliko si dobro znao/la?", "answer.type": "Tvoj odgovor", "gap.n": "Praznina {n}", letters: "Posebna slova", play: "Pusti zvuk", "play.again": "Pusti ponovno", "audio.fail": "Zvuk se nije mogao pustiti.", transcript: "Piše:", "order.up": "Pomakni {item} gore", "order.down": "Pomakni {item} dolje", "order.first": "najranije", "order.last": "najkasnije", "sort.assign": "{item}: stavi u {group}", "pairs.pick": "Odaberi po jedno sa svake strane da ih spojiš. Ponovno odaberi spojeno da poništiš.", "multi.hint": "Odaberi sve točne odgovore, pa provjeri.", "cross.across": "Vodoravno", "cross.down": "Okomito", "cross.word": "Riječ {n}", "cross.cell": "Redak {r}, stupac {c}", "ws.found": "Pronađeno {n} od {total}", "ws.pick": "Odaberi prvo i zadnje slovo riječi.", "ws.done": "Gotovo", "hotspot.pick": "Odaberi pravo mjesto na slici.", picture: "Slika", "verdict.correct": "Točno!", "verdict.partial": "Skoro", "verdict.wrong": "Nije baš", "verdict.timeout": "Vrijeme je isteklo", "praise.1": "U sridu!", "praise.2": "Lijepo!", "praise.3": "Savršeno!", "praise.4": "Točno tako!", "praise.5": "Odlično!", "fb.why": "Zašto to nije to", "fb.explain": "Ideja", "fb.answer": "Odgovor", "fb.dyk": "Jesi li znao/la?", "fb.typo": "Prihvaćeno, ali pazi na pravopis: {a}", "fb.accents": "Prihvaćeno, ali pazi na kvačice: {a}", "fb.accents.strict": "Skoro! Provjeri kvačice: {a}", "fb.note.translit": "Prihvaćeno. Umlaut se piše ä / ö / ü i ß; ae / oe / ue / ss je zapis za tipkovnicu: {a}", "fb.note.caps": "Prihvaćeno. Njemačke imenice pišu se velikim početnim slovom: {a}", "fb.note.umlaut": "Skoro: provjeri umlaut: {a}", "fb.invalid": "Nije dan odgovor.", "fb.true": "Točno", "fb.false": "Netočno", "fb.missed": "Propustio/la si: {a}", "fb.matched": "Točni parovi: {n} od {total}", "fb.detail.order": "Na pravom mjestu: {n} od {total}", "fb.detail.sort": "Točno razvrstano: {n} od {total}", "fb.detail.gaps": "Točne praznine: {n} od {total}", "fb.detail.words": "Točne riječi: {n} od {total}", "fb.detail.forms": "Točni oblici: {n} od {total}", "conj.tense.praesens": "Prezent", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Preterit", "conj.tense.futur1": "Futur I.", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II.", "conj.tense.passiv-praesens": "Pasiv, prezent", "conj.tense.passiv-praeteritum": "Pasiv, preterit", "conj.tense.perfekt-passiv": "Pasiv, perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II., prošlost", "conj.tense.konjunktiv1": "Konjunktiv I.", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I., prošlost", "summary.title": "Runda je gotova", "summary.accuracy": "{n}% točno iz prvog pokušaja", "summary.score": "Bodovi {n}", "summary.combo": "Najbolji niz {n}", "summary.unlocked": "Otključano: {units}", "summary.bossLocked": "Završni izazov je otvoren!", "summary.again": "Igraj rundu ponovno", "summary.back": "Natrag na kartu", "summary.finish": "Završi tečaj", "summary.needStars": "Dvije zvjezdice otključavaju sljedeće cjeline.", "summary.bossFail": "Izazov je izdržao. Ponovi pa pokušaj opet.", "summary.perfect": "Savršena runda!", review: "Ponovi pogreške", "review.title": "Ponavljanje pogrešaka", "review.empty": "Nema se što ponavljati. Sve što si pogriješio/la već znaš.", "review.practice": "Vježbaj ih", "review.back": "Natrag na kartu", "review.answer": "Odgovor", "end.title": "Tečaj je završen!", "end.sub": "Savladao/la si svaku cjelinu i pobijedio/la izazov.", "end.stars": "Zvjezdice", "end.score": "Ukupni bodovi", "end.accuracy": "Točno iz prvog pokušaja: {n}%", "end.again": "Igraj ponovno", "end.title.screen": "Natrag na početak", loading: "Učitavanje...", error: "Igra se nije mogla pokrenuti.", "a11y.skip": "Preskoči na pitanje", stars: "{n} od 3 zvjezdice", burst: "Niz x{n}!", "start.choose": "Odaberi način igranja", "mode.quiz-arena.name": "Kviz", "mode.quiz-arena.blurb": "Vremenski krugovi mješovitih pitanja", "mode.encyclopedia.name": "Enciklopedija", "mode.encyclopedia.blurb": "Čitaj članke i istraži temu", "mode.mindmaze.name": "Dvorac MindMaze", "mode.mindmaze.blurb": "Otvaraj vrata dvorca točnim odgovorima", "mode.rpg.name": "RPG pustolovina", "mode.rpg.blurb": "Pikselna pustolovina pokretana tvojim odgovorima", "mode.roleplay.name": "Igra uloga", "mode.roleplay.blurb": "Razgovaraj kroz svakodnevne dijaloge", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Riješi slučajeve na temelju naučenog", "question.lead": "Pitanje", "review.none": "Još nema ničega za ponavljanje.", "class.assignment": "Zadatak od učitelja", "class.target": "Dosegni {n} zvjezdice u: {units}", "class.allUnits": "svim cjelinama", "class.due": "Rok: {date}", "class.yourName": "Tvoje ime", "class.send": "Pošalji učitelju", "class.sent": "Datoteka s rezultatom je spremljena. Pošalji je učitelju.", "class.needName": "Prvo upiši svoje ime.", "class.assigned": "Zadano", "reader.title": "Čitanje", "reader.nav": "Čitanje", "reader.open": "Otvori čitanje", "reader.continue": "Nastavi čitati", "reader.toc": "Poglavlja", "reader.chapter": "Poglavlje {n}", "reader.progress": "Poglavlje {n} od {total}", "reader.chapterRead": "pročitano", "reader.prev": "Prethodno poglavlje", "reader.next": "Sljedeće poglavlje", "reader.hint": "Dodirni podcrtanu riječ da vidiš što znači. Lijeva i desna strelica mijenjaju poglavlje.", "reader.read": "Pročitao/la si ovo poglavlje.", "reader.last": "To je bilo posljednje poglavlje.", "reader.practice": "Vježbaj ovaj tekst", "reader.empty": "Ovaj tečaj nema tekstova za čitanje.", "reader.leave": "Natrag na tekst", "gloss.panel": "Riječi u ovom tekstu", "gloss.deck": "U mojem špilu", "gloss.deck.for": 'Zadrži "{term}" u mojem špilu rječnika', "gloss.close": "Zatvori objašnjenje", "gloss.pos.n": "imenica", "gloss.pos.v": "glagol", "gloss.pos.adj": "pridjev", "gloss.pos.adv": "prilog", "gloss.pos.prep": "prijedlog", "gloss.pos.conj": "veznik", "gloss.pos.phrase": "izraz", "passage.show": "Pročitaj tekst", "passage.hide": "Sakrij tekst", "passage.title": "Tekst" }, de: { "title.tagline": "Quiz an der Schultafel", start: "Starten", continue: "Weiter", language: "Sprache", timer: "Fragen mit Zeitlimit", "timer.hint": "Etwa {s} Sekunden pro Frage. Fragen zum Tippen haben nie ein Zeitlimit.", sound: "Töne", reduceAudio: "Ton reduzieren", "reduceAudio.hint": "Keine Musik und leisere Effekte.", speak: "Sprechen", "speak.setting": "Antworten sprechen", "speak.privacy.web": "Nutzt die Spracherkennung deines Browsers; in Chrome und Edge geht das Audio an den Browser-Hersteller. Tippen funktioniert immer.", "speak.privacy.local": "Die Sprache wird auf diesem Computer erkannt; nichts wird verschickt. Tippen funktioniert immer.", "speak.listening": "Ich höre zu. Drücke die Taste noch einmal oder Escape zum Beenden.", "speak.thinking": "Ich werte aus, was du gesagt hast.", "speak.heard": "Verstanden: {text}. Du kannst es vor dem Prüfen ändern.", "speak.err.denied": "Das Mikrofon ist nicht erlaubt. Tippe stattdessen deine Antwort.", "speak.err.no-speech": "Es war nichts zu hören. Versuche es noch einmal oder tippe deine Antwort.", "speak.err.unavailable": "Die Spracherkennung ist gerade nicht verfügbar. Tippe stattdessen deine Antwort.", "speak.err.failed": "Das konnte nicht erkannt werden. Versuche es noch einmal oder tippe deine Antwort.", export: "Fortschritt exportieren", import: "Fortschritt importieren", reset: "Fortschritt zurücksetzen", "reset.confirm": "Den gesamten gespeicherten Fortschritt für diesen Kurs löschen?", "reset.yes": "Ja, löschen", "reset.no": "Behalten", "reset.done": "Fortschritt gelöscht.", "import.ok": "Fortschritt importiert.", "import.bad": "Diese Datei ist kein Fortschritt für diesen Kurs: {why}", "export.done": "Fortschrittsdatei gespeichert.", "storage.off": "Speichern ist in diesem Browser aus: Der Fortschritt bleibt nur, bis du die Seite schließt. Nutze „Exportieren“, um ihn zu behalten.", "map.title": "Wähle eine Einheit", "map.stars": "{n} von {total} Sternen", "map.requires": "Benötigt: {units}", "map.locked": "Gesperrt", "map.unitStars": "{n} von 3 Sternen", "map.items": "{n} Fragen", "map.boss": "Endgegner-Runde", "map.boss.locked": "Meistere jede Einheit (2 Sterne), um dich dem Endgegner zu stellen.", "map.boss.ready": "Fragen aus allen Einheiten, schwieriger.", "map.review": "Fehler wiederholen ({n})", "map.verbs": "Verbtraining ({n} fällig)", menu: "Titelbildschirm", round: "Runde {n}", question: "Frage {i} von {n}", retry: "Zweiter Versuch", leave: "Runde verlassen", score: "Punkte", combo: "Serie", time: "Zeit", hint: "Tipp", submit: "Prüfen", next: "Weiter", results: "Ergebnis ansehen", flip: "Antwort zeigen", "selfcheck.hint": "Vergleiche, was du geschrieben oder gesagt hast, mit der Musterantwort und bewerte dich dann selbst. Das Programm prüft es nicht.", "grade.again": "Nochmal", "grade.hard": "Schwer", "grade.good": "Gut", "grade.easy": "Leicht", "grade.ask": "Wie gut wusstest du es?", "answer.type": "Deine Antwort", "gap.n": "Lücke {n}", letters: "Sonderzeichen", play: "Ton abspielen", "play.again": "Noch einmal abspielen", "audio.fail": "Der Ton konnte nicht abgespielt werden.", transcript: "Es heißt:", "order.up": "{item} nach oben", "order.down": "{item} nach unten", "order.first": "am frühesten", "order.last": "am spätesten", "sort.assign": "{item}: in „{group}“ legen", "pairs.pick": "Wähle auf jeder Seite einen Eintrag, um sie zu verbinden. Wähle ein verbundenes Paar noch einmal, um es zu lösen.", "multi.hint": "Wähle alles Zutreffende aus und prüfe dann.", "cross.across": "Waagerecht", "cross.down": "Senkrecht", "cross.word": "Wort {n}", "cross.cell": "Zeile {r}, Spalte {c}", "ws.found": "{n} von {total} gefunden", "ws.pick": "Wähle den ersten und den letzten Buchstaben eines Wortes.", "ws.done": "Fertig", "hotspot.pick": "Wähle die richtige Stelle auf dem Bild.", picture: "Bild", "verdict.correct": "Richtig!", "verdict.partial": "Fast geschafft", "verdict.wrong": "Nicht ganz", "verdict.timeout": "Die Zeit ist um", "praise.1": "Genau richtig!", "praise.2": "Gut gemacht!", "praise.3": "Perfekt gelöst!", "praise.4": "Stimmt!", "praise.5": "Super Leistung!", "fb.why": "Warum das nicht stimmt", "fb.explain": "Die Idee", "fb.answer": "Die Antwort", "fb.dyk": "Wusstest du schon?", "fb.typo": "Akzeptiert, aber achte auf die Schreibweise: {a}", "fb.accents": "Akzeptiert, aber achte auf die Akzente: {a}", "fb.accents.strict": "Fast! Prüfe die Akzente: {a}", "fb.note.translit": "Akzeptiert. Umlaute schreibt man ä / ö / ü und ß; ae / oe / ue / ss ist die Tastatur-Schreibweise: {a}", "fb.note.caps": "Akzeptiert. Deutsche Nomen schreibt man groß: {a}", "fb.note.umlaut": "Fast: Prüfe den Umlaut: {a}", "fb.invalid": "Es wurde keine Antwort gegeben.", "fb.true": "Richtig", "fb.false": "Falsch", "fb.missed": "Das hast du verpasst: {a}", "fb.matched": "Richtige Paare: {n} von {total}", "fb.detail.order": "An der richtigen Stelle: {n} von {total}", "fb.detail.sort": "Richtig sortiert: {n} von {total}", "fb.detail.gaps": "Richtige Lücken: {n} von {total}", "fb.detail.words": "Richtige Wörter: {n} von {total}", "fb.detail.forms": "Richtige Formen: {n} von {total}", "conj.tense.praesens": "Präsens", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Präteritum", "conj.tense.futur1": "Futur I", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II", "conj.tense.passiv-praesens": "Passiv, Präsens", "conj.tense.passiv-praeteritum": "Passiv, Präteritum", "conj.tense.perfekt-passiv": "Passiv, Perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II, Vergangenheit", "conj.tense.konjunktiv1": "Konjunktiv I", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I, Vergangenheit", "summary.title": "Runde geschafft", "summary.accuracy": "{n} % gleich beim ersten Mal richtig", "summary.score": "Punkte: {n}", "summary.combo": "Beste Serie: {n}", "summary.unlocked": "Freigeschaltet: {units}", "summary.bossLocked": "Die Endgegner-Runde ist offen!", "summary.again": "Runde noch einmal spielen", "summary.back": "Zurück zur Karte", "summary.finish": "Kurs abschließen", "summary.needStars": "Zwei Sterne schalten die nächsten Einheiten frei.", "summary.bossFail": "Der Endgegner hat standgehalten. Wiederhole und versuche es noch einmal.", "summary.perfect": "Perfekte Runde!", review: "Fehler wiederholen", "review.title": "Fehler wiederholen", "review.empty": "Nichts zu wiederholen. Alles, was du verpasst hast, ist schon gelernt.", "review.practice": "Diese üben", "review.back": "Zurück zur Karte", "review.answer": "Die Antwort", "end.title": "Kurs abgeschlossen!", "end.sub": "Du hast jede Einheit gemeistert und den Endgegner besiegt.", "end.stars": "Sterne", "end.score": "Gesamtpunkte", "end.accuracy": "Gleich beim ersten Mal richtig: {n} %", "end.again": "Noch einmal spielen", "end.title.screen": "Zurück zum Titel", loading: "Lädt …", error: "Das Spiel konnte nicht starten.", "a11y.skip": "Zur Frage springen", stars: "{n} von 3 Sternen", burst: "Serie x{n}!", "start.choose": "Wähle, wie du spielen möchtest", "mode.quiz-arena.name": "Quiz-Arena", "mode.quiz-arena.blurb": "Runden mit gemischten Fragen auf Zeit", "mode.encyclopedia.name": "Enzyklopädie", "mode.encyclopedia.blurb": "Artikel lesen und das Thema erkunden", "mode.mindmaze.name": "MindMaze-Schloss", "mode.mindmaze.blurb": "Öffne die Türen eines Schlosses mit richtigen Antworten", "mode.rpg.name": "Rollenspiel-Abenteuer", "mode.rpg.blurb": "Ein Pixel-Abenteuer, angetrieben von deinen Antworten", "mode.roleplay.name": "Rollenspiel-Dialoge", "mode.roleplay.blurb": "Meistere Alltagsgespräche im Dialog", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Löse Fälle mit den Hinweisen, die du gelernt hast", "question.lead": "Frage", "review.none": "Noch nichts zu wiederholen.", "class.assignment": "Aufgabe von deiner Lehrkraft", "class.target": "Erreiche {n} Sterne in: {units}", "class.allUnits": "allen Einheiten", "class.due": "Fällig: {date}", "class.yourName": "Dein Name", "class.send": "An meine Lehrkraft senden", "class.sent": "Ergebnisdatei gespeichert. Schicke sie deiner Lehrkraft.", "class.needName": "Gib zuerst deinen Namen ein.", "class.assigned": "Zugewiesen", "reader.title": "Leser", "reader.nav": "Leser", "reader.open": "Leser öffnen", "reader.continue": "Weiterlesen", "reader.toc": "Kapitel", "reader.chapter": "Kapitel {n}", "reader.progress": "Kapitel {n} von {total}", "reader.chapterRead": "gelesen", "reader.prev": "Vorheriges Kapitel", "reader.next": "Nächstes Kapitel", "reader.hint": "Tippe auf ein unterstrichenes Wort, um die Bedeutung zu sehen. Mit den Pfeiltasten links und rechts wechselst du das Kapitel.", "reader.read": "Du hast dieses Kapitel gelesen.", "reader.last": "Das war das letzte Kapitel.", "reader.practice": "Diesen Text üben", "reader.empty": "Dieser Kurs hat keine Lesetexte.", "reader.leave": "Zurück zum Text", "gloss.panel": "Wörter in diesem Text", "gloss.deck": "In meinem Stapel", "gloss.deck.for": "„{term}“ in meinem Vokabelstapel behalten", "gloss.close": "Erklärung schließen", "gloss.pos.n": "Nomen", "gloss.pos.v": "Verb", "gloss.pos.adj": "Adjektiv", "gloss.pos.adv": "Adverb", "gloss.pos.prep": "Präposition", "gloss.pos.conj": "Konjunktion", "gloss.pos.phrase": "Wendung", "passage.show": "Den Text lesen", "passage.hide": "Text ausblenden", "passage.title": "Der Text" } };
  function Ms(t, e) {
    var _a3, _b3, _c2;
    const s = (_c2 = (_b3 = hi[t]) != null ? _b3 : hi[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (n, r) => {
      var _a4, _b4;
      let i = (_b4 = (_a4 = e == null ? void 0 : e.strings["ui.".concat(n)]) != null ? _a4 : s[n]) != null ? _b4 : j0[n];
      if (r) for (const [o, a] of Object.entries(r)) i = i.split("{".concat(o, "}")).join(String(a));
      return i;
    };
  }
  [...Object.keys(hi)];
  const Kl = { hr: ["č", "ć", "š", "ž", "đ"], de: ["ä", "ö", "ü", "ß"], es: ["á", "é", "í", "ó", "ú", "ñ", "¿", "¡"], fr: ["é", "è", "ê", "à", "ç", "ô", "î"] }, x0 = /\s*\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, ql = /^#{1,6}\s+/;
  function pi(t) {
    return t.map((e) => {
      var _a3, _b3;
      const s = ql.test((_b3 = (_a3 = e[0]) == null ? void 0 : _a3.text) != null ? _b3 : ""), n = [];
      return e.forEach((r, i) => {
        if (r.link) {
          n.push({ ...r });
          return;
        }
        const o = i === 0 && s ? r.text.replace(ql, "") : r.text;
        let a = 0;
        for (const c of o.matchAll(x0)) c.index > a && n.push({ text: o.slice(a, c.index) }), n.push({ text: c[1].replace(/\s+/g, ""), cite: true }), a = c.index + c[0].length;
        a < o.length && n.push({ text: o.slice(a) });
      }), { runs: n, heading: s };
    });
  }
  const E0 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function A0(t, e) {
    const s = new RegExp("(?<![\\p{L}\\p{N}])".concat(E0(e), "(?![\\p{L}\\p{N}])"), "u").exec(t);
    if (s) return { start: s.index, end: s.index + s[0].length };
    const n = t.indexOf(e);
    return n < 0 ? null : { start: n, end: n + e.length };
  }
  function fi(t, e) {
    const s = t.map((r) => r.map((i) => ({ ...i }))), n = e.filter((r) => r.term.trim() !== "").sort((r, i) => i.term.length - r.term.length);
    for (const r of n) {
      let i = false;
      for (const o of s) {
        if (i) break;
        for (let a = 0; a < o.length; a++) {
          const c = o[a];
          if (c.link || c.gloss || c.cite) continue;
          const l = A0(c.text, r.term);
          if (!l) continue;
          const d = [];
          l.start > 0 && d.push({ text: c.text.slice(0, l.start) }), d.push({ text: c.text.slice(l.start, l.end), gloss: r }), l.end < c.text.length && d.push({ text: c.text.slice(l.end) }), o.splice(a, 1, ...d), i = true;
          break;
        }
      }
    }
    return s;
  }
  let Gl = 0;
  const T0 = (t, e) => e ? t("gloss.pos.".concat(e)) : "";
  function mi(t) {
    const e = "gloss-pop-".concat(++Gl), s = u("strong", { class: "gloss-lemma", testid: "gloss-lemma" }), n = u("span", { class: "gloss-pos", testid: "gloss-pos" }), r = u("p", { class: "gloss-text", testid: "gloss-text" }), i = u("p", { class: "gloss-note", testid: "gloss-note" });
    let o = null;
    const a = u("div", { class: "gloss-pop", id: e, role: "status", testid: "gloss-popover", hidden: true }, u("div", { class: "gloss-head" }, s, n), r, i, I("gloss-close", "×", () => c.hide(), { class: "gloss-close", "aria-label": t("gloss.close") })), c = { el: a, show(l, d) {
      var _a3, _b3;
      if (o === l && !a.hidden) return c.hide();
      c.hide(), o = l, s.textContent = (_a3 = d.lemma) != null ? _a3 : d.term, n.textContent = T0(t, d.pos), n.hidden = !d.pos, r.textContent = d.gloss, i.textContent = (_b3 = d.note) != null ? _b3 : "", i.hidden = !d.note, a.hidden = false, l.setAttribute("aria-expanded", "true");
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
        const d = o;
        c.hide(), d == null ? void 0 : d.focus();
      }
    }), c;
  }
  function I0(t, e, s = {}) {
    const n = "gloss-d-".concat(++Gl), r = I("gloss-".concat(t.id), t.term, () => e.show(r, t), { class: "gloss".concat(s.off ? " is-off" : ""), "aria-expanded": "false", "aria-controls": e.el.id, "aria-describedby": n });
    return r.addEventListener("keydown", (i) => {
      i.key === "Escape" && e.hide();
    }), [r, u("span", { class: "sr-only", id: n }, ": ".concat(t.gloss))];
  }
  function gi(t, e, s, n, r = false) {
    return u(r ? "h3" : "p", r ? { class: "enc-subhead" } : {}, t.map((i) => i.cite ? u("sup", { class: "enc-cite" }, i.text) : i.gloss ? I0(i.gloss, e, { off: (n == null ? void 0 : n.has(i.gloss.id)) === true }) : i.link && s ? s(i.link, i.text) : i.text));
  }
  function Dn(t, e, s) {
    return s === false ? [...e] : ms(e, t.rng);
  }
  const Os = (t) => u("span", { class: "sr-only" }, t);
  function yt(t, e, s = false) {
    return I("submit", t.ui("submit"), e, { class: "btn btn-primary", ...s ? { disabled: true } : {} });
  }
  function at(t, e, s) {
    t.classList.add(e ? "is-correct" : "is-wrong");
    const n = t.querySelector(".mark");
    n && n.remove(), t.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, e ? "✓" : "✗")), t.appendChild(Os(e ? s.ui("verdict.correct") : s.ui("verdict.wrong")));
  }
  function ki(t, e) {
    return t.specialLetters.length === 0 ? null : u("div", { class: "letters", role: "group", "aria-label": t.ui("letters"), testid: "letters" }, t.specialLetters.map((s) => u("button", { type: "button", class: "letter", testid: "letter-".concat(s), onmousedown: (n) => n.preventDefault(), onclick: () => {
      var _a3, _b3;
      const n = e();
      if (!n) return;
      const r = (_a3 = n.selectionStart) != null ? _a3 : n.value.length, i = (_b3 = n.selectionEnd) != null ? _b3 : r;
      n.value = n.value.slice(0, r) + s + n.value.slice(i), n.setSelectionRange(r + s.length, r + s.length), n.focus(), n.dispatchEvent(new Event("input", { bubbles: true }));
    } }, s)));
  }
  function Wl(t) {
    const e = t.item.asset;
    if (!e) return null;
    const s = t.data.pack.assets.find((r) => r.id === e), n = t.assetUrl(e);
    return !s || s.kind !== "image" || !n ? null : u("figure", { class: "item-figure" }, u("img", { src: n, alt: t.assetAlt(e), testid: "item-image", loading: "eager" }));
  }
  let M0 = 0;
  function O0(t, e) {
    var _a3, _b3, _c2, _d2;
    const s = gl(t.item);
    if (!s) return null;
    const n = t.data.pack, r = n.encyclopedia.articles.find((w) => w.id === s.article), i = r ? t.text.text(r.body) : void 0;
    if (!r || i === void 0) return null;
    const o = fl([i]), [a, c] = (_a3 = s.paragraphs) != null ? _a3 : [1, o.length], l = o.slice(a - 1, c);
    if (l.length === 0) return null;
    const d = ul.safeParse((_d2 = (_c2 = (_b3 = n.shells) == null ? void 0 : _b3.config) == null ? void 0 : _c2.encyclopedia) != null ? _d2 : {}), h = ml(d.success ? d.data : void 0, r.id).flatMap((w) => {
      const y = t.text.text(w.term), $ = t.text.text(w.gloss);
      if (y === void 0 || $ === void 0) return [];
      const x = w.lemma ? t.text.text(w.lemma) : void 0, z = w.note ? t.text.text(w.note) : void 0;
      return [{ id: w.id, term: y, gloss: $, ...x ? { lemma: x } : {}, ...w.pos ? { pos: w.pos } : {}, ...z ? { note: z } : {} }];
    }), p = "passage-".concat(++M0), f = mi(t.ui), m = pi(l.map((w) => [{ text: w }])), g = fi(m.map((w) => w.runs), h), k = u("div", { class: "passage-panel gloss-scope", id: p, role: "region", "aria-label": "".concat(t.ui("passage.title"), ": ").concat(t.text.t(r.title)), testid: "passage-panel", hidden: !e }, u("p", { class: "passage-title" }, t.text.t(r.title)), g.map((w, y) => {
      var _a4;
      return gi(w, f, void 0, void 0, (_a4 = m[y]) == null ? void 0 : _a4.heading);
    }), f.el), b = I("passage-toggle", "", () => v(k.hidden), { class: "btn btn-small btn-ghost passage-toggle", "aria-controls": p });
    function v(w) {
      k.hidden = !w, b.textContent = "".concat(w ? "▾" : "▸", " ").concat(t.ui(w ? "passage.hide" : "passage.show")), b.setAttribute("aria-expanded", String(w)), w || f.hide();
    }
    return v(e), u("div", { class: "passage", testid: "passage", "data-article": r.id }, b, k);
  }
  function N0(t) {
    return { ...t, render(e) {
      const s = t.render(e), n = O0(e, e.passageOpen === true);
      return n ? { el: u("div", { class: "with-passage" }, n, s.el), focus: () => s.focus(), reveal: (r, i) => s.reveal(r, i), ...s.key ? { key: (r) => {
        var _a3, _b3;
        return (_b3 = (_a3 = s.key) == null ? void 0 : _a3.call(s, r)) != null ? _b3 : false;
      } } : {}, destroy: () => {
        var _a3;
        return (_a3 = s.destroy) == null ? void 0 : _a3.call(s);
      } } : s;
    } };
  }
  const P0 = "1.0.0";
  function R0(t = typeof location > "u" ? "" : location.search) {
    const e = new URLSearchParams(t).get("seed"), s = e === null ? NaN : Number(e);
    return Number.isInteger(s) && s >= 0 && s < 2 ** 31 ? s : Math.floor(Math.random() * 2 ** 31);
  }
  const Hl = (t) => "edu-studio:shell:".concat(t);
  function D0(t, e, s = qs) {
    const n = (i) => Array.isArray(e) ? e.includes(i) : e.has(i), r = [...new Set(t)].filter(n);
    return r.length > 0 ? r : n(s) ? [s] : [];
  }
  function L0(t) {
    const e = new URLSearchParams(t.search).get("shell");
    for (const s of [e, t.saved, t.dataShell]) if (s && t.playable.includes(s)) return s;
    return t.playable[0];
  }
  const C0 = (t) => {
    try {
      return window.localStorage.getItem(t);
    } catch (e) {
      return null;
    }
  }, Z0 = (t, e) => {
    try {
      window.localStorage.setItem(t, e);
    } catch (e2) {
    }
  }, U0 = (t) => {
    const e = t;
    return !!e && e.format === Zu && typeof e.pack == "object" && e.pack !== null && typeof e.catalogs == "object" && e.catalogs !== null;
  };
  function F0() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    let s = { screen: "loading", shell: "", lang: "", seed: 0, combo: 0, score: 0, reviewQueue: [], mastery: {}, finished: false, steps: 0 }, n = null, r = null, i = null, o = null, a = 0;
    const c = () => i ? D0(i.pack.shells.enabled, [...t.keys()], i.shell || qs) : [], l = (p, f, m = "en") => {
      s = { ...s, screen: "error" };
      const g = Ms(m);
      p && (p.classList.add("edu-stage"), p.setAttribute("data-edu-theme", "chalkboard"), As(p), p.appendChild(u("div", { class: "edu-error", role: "alert", testid: "error" }, u("h1", {}, g("error")), u("p", {}, f)))), console.error("[EduEngine] ".concat(f));
    }, d = { version: P0, registerShell(p, f) {
      t.set(p, f);
    }, registerItemKind(p, f) {
      e.set(p, N0(f));
    }, getState() {
      return JSON.parse(JSON.stringify(s));
    }, debug: Object.defineProperty(z0(() => s), "shell", { enumerable: true, get: () => r != null ? r : void 0 }), playableShells: () => c(), start() {
      if (n) return;
      o = document.getElementById(no);
      const p = window.EDU_GAME_DATA;
      if (!o) return l(null, "the page has no #".concat(no, " element"));
      if (!U0(p)) return l(o, "game-data.js did not define window.EDU_GAME_DATA");
      i = p, a = R0();
      const f = L0({ search: typeof location > "u" ? "" : location.search, playable: c(), saved: C0(Hl(i.pack.id)), dataShell: i.shell || qs });
      if (!f) return l(o, 'no shell "'.concat(i.shell || qs, '" is registered'), i.defaultLang);
      h(f);
    }, switchShell(p) {
      var _a3;
      if (!(!i || !o || !n || !c().includes(p))) {
        Z0(Hl(i.pack.id), p);
        try {
          (_a3 = n.unmount) == null ? void 0 : _a3.call(n);
        } catch (f) {
          console.error("[EduEngine] unmounting the shell failed: ".concat(f instanceof Error ? f.message : String(f)));
        }
        n = null, r = null, As(o), o.removeAttribute("data-edu-theme"), o.className = "", s = { ...s, screen: "loading" }, h(p);
      }
    } };
    function h(p) {
      const f = t.get(p);
      if (!i || !o || !f) return;
      n = f;
      const m = { root: o, data: i, seed: a, getItemRenderer: (g) => e.get(g), publish: (g) => {
        s = g;
      }, shells: c(), switchShell: (g) => d.switchShell(g), setDebug: (g) => {
        r = g;
      } };
      try {
        f.mount(m);
      } catch (g) {
        n = null, l(o, g instanceof Error ? g.message : String(g), i.defaultLang);
      }
    }
    return d;
  }
  function bi(t, e, s, n = (r) => r) {
    const r = /* @__PURE__ */ new Map();
    let i = false;
    const o = (c) => {
      i || (i = true, t.submit(n(c)));
    };
    return e.forEach((c, l) => {
      r.set(c.id, I("option-".concat(c.id), [u("span", { class: "choice-key", "aria-hidden": "true" }, l < 9 ? String(l + 1) : ""), u("span", { class: "choice-text" }, c.text)], () => o(c.id), { class: "choice", "data-option": c.id }));
    }), { el: u("div", { class: "choices", role: "group", "aria-label": t.text.t(t.item.prompt) }, [...r.values()]), buttons: r, focus: () => {
      var _a3;
      return (_a3 = [...r.values()][0]) == null ? void 0 : _a3.focus();
    }, key: (c) => {
      const l = ui(c), d = e[l];
      return l < 0 || !d ? false : (c.preventDefault(), o(d.id), true);
    }, reveal: (c, l) => {
      i = true;
      for (const [d, h] of r) h.disabled = true, d === s ? at(h, true, t) : d === String(l) && at(h, false, t);
    } };
  }
  const B0 = { kind: "mcq", render(t) {
    const e = t.item, s = Dn(t, e.options, e.shuffle).map((n) => ({ id: n.id, text: t.text.t(n.text) }));
    return bi(t, s, e.answer);
  } }, K0 = { kind: "true-false", render(t) {
    const e = t.item;
    return bi(t, [{ id: "true", text: t.ui("fb.true") }, { id: "false", text: t.ui("fb.false") }], String(e.answer), (s) => s === "true");
  } }, q0 = { kind: "multi-select", render(t) {
    const e = t.item, s = Dn(t, e.options, e.shuffle), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    let i = false;
    const o = () => {
      for (const [d, h] of r) h.setAttribute("aria-pressed", String(n.has(d)));
      c.disabled = n.size === 0 || i;
    }, a = (d) => {
      i || (n.has(d) ? n.delete(d) : n.add(d), o());
    };
    s.forEach((d, h) => {
      r.set(d.id, I("option-".concat(d.id), [u("span", { class: "choice-key", "aria-hidden": "true" }, h < 9 ? String(h + 1) : ""), u("span", { class: "choice-box", "aria-hidden": "true" }), u("span", { class: "choice-text" }, t.text.t(d.text))], () => a(d.id), { class: "choice choice-multi", "aria-pressed": "false" }));
    });
    const c = yt(t, () => {
      i || n.size === 0 || (i = true, t.submit([...n]));
    }, true), l = u("div", { class: "multi" }, u("p", { class: "hint-line" }, t.ui("multi.hint")), u("div", { class: "choices", role: "group", "aria-label": t.text.t(e.prompt) }, [...r.values()]), u("div", { class: "actions" }, c));
    return o(), { el: l, focus: () => {
      var _a3;
      return (_a3 = [...r.values()][0]) == null ? void 0 : _a3.focus();
    }, key: (d) => {
      const h = ui(d), p = s[h];
      return h < 0 || !p ? false : (d.preventDefault(), a(p.id), true);
    }, reveal: (d) => {
      i = true, c.disabled = true;
      const h = new Set(Array.isArray(d.expected) ? d.expected : e.answers);
      for (const [p, f] of r) {
        f.disabled = true;
        const m = h.has(p);
        n.has(p) ? at(f, m, t) : m && (f.classList.add("is-missed"), f.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, "!")));
      }
    } };
  } };
  function vi(t, e) {
    const s = t.speech;
    if (!s) return null;
    const n = u("button", { type: "button", class: "btn btn-mic", testid: "speak", "aria-pressed": "false", "data-state": "idle" }, t.ui("speak")), r = u("span", { class: "speak-status", testid: "speak-status", role: "status", "aria-live": "polite" });
    let i = null, o = "idle", a = false;
    const c = (h, p) => {
      var _a3, _b3;
      o = h, n.setAttribute("data-state", h), n.setAttribute("aria-pressed", String(h === "listening")), n.classList.toggle("is-listening", h === "listening"), h === "listening" ? (_a3 = t.duck) == null ? void 0 : _a3.call(t, true) : (_b3 = t.duck) == null ? void 0 : _b3.call(t, false), h === "listening" ? r.textContent = t.ui("speak.listening") : h === "thinking" ? r.textContent = t.ui("speak.thinking") : h === "error" && (r.textContent = t.ui("speak.err.".concat(p != null ? p : "failed"))), (h === "idle" || h === "error") && (i = null);
    }, l = () => {
      i == null ? void 0 : i.stop();
    }, d = () => {
      const h = e();
      a || !h || h.disabled || (r.textContent = "", i = s.start({ onState: c, onText: (p) => {
        const f = e();
        !f || f.disabled || (f.value = p, f.dispatchEvent(new Event("input", { bubbles: true })), r.textContent = t.ui("speak.heard", { text: p }), f.focus());
      } }));
    };
    return n.addEventListener("click", () => o === "idle" || o === "error" ? d() : o === "listening" ? l() : void 0), n.addEventListener("keydown", (h) => {
      h.key === "Escape" && o === "listening" && (h.preventDefault(), h.stopPropagation(), l());
    }), { button: n, status: r, stop: l, disable: () => {
      a = true, l(), n.disabled = true;
    } };
  }
  function Vl(t, e) {
    e && t.addEventListener("keydown", (s) => {
      s.key === "Escape" && e.button.getAttribute("aria-pressed") === "true" && (s.preventDefault(), s.stopPropagation(), e.stop());
    });
  }
  const G0 = /* @__PURE__ */ new Set(["praesens", "perfekt", "praeteritum", "futur1", "imperativ", "konjunktiv2", "passiv-praesens", "passiv-praeteritum", "perfekt-passiv", "konjunktiv2-vergangenheit", "konjunktiv1", "konjunktiv1-vergangenheit"]);
  function W0(t, e) {
    const s = t.forms.filter((r) => !r.given).map((r) => r.person);
    if (t.ask === void 0 || t.ask >= s.length) return s;
    const n = new Set(ms(s, e.rng).slice(0, t.ask));
    return s.filter((r) => n.has(r));
  }
  const H0 = { kind: "conjugation", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, s = new Set(W0(e, t)), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = false, o = null;
    const a = e.forms.filter((y) => s.has(y.person)).map((y) => y.person), c = () => a.every((y) => {
      var _a4, _b4;
      return ((_b4 = (_a4 = n.get(y)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : "") !== "";
    }), l = () => {
      k.disabled = i || !c();
    }, d = () => {
      i || !c() || (i = true, t.submit(Object.fromEntries(a.map((y) => {
        var _a4, _b4;
        return [y, (_b4 = (_a4 = n.get(y)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : ""];
      }))));
    }, h = u("tbody");
    for (const y of e.forms) {
      const $ = t.text.t(y.label);
      if (!s.has(y.person)) {
        h.appendChild(u("tr", { class: "conj-row is-given", testid: "conj-given-".concat(y.person) }, u("th", { scope: "row", class: "conj-label" }, $), u("td", { class: "conj-given" }, (_a3 = t.text.canonical(y.answer)) != null ? _a3 : ""), u("td", { class: "conj-result" })));
        continue;
      }
      const x = u("input", { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_b3 = t.data.pack.targetLang) != null ? _b3 : t.lang, class: "text-input conj-input", testid: "conj-".concat(y.person), "aria-label": "".concat($, ": ").concat(t.text.t(e.verb)) });
      x.addEventListener("input", l), x.addEventListener("focus", () => o = x), x.addEventListener("keydown", (O) => {
        if (O.key !== "Enter") return;
        O.preventDefault();
        const R = a.slice(a.indexOf(y.person) + 1).map((S) => n.get(S)).find((S) => S && S.value.trim() === "");
        R ? R.focus() : d();
      }), n.set(y.person, x);
      const z = u("td", { class: "conj-result", testid: "conj-".concat(y.person, "-result"), "aria-live": "polite" }), _ = u("tr", { class: "conj-row" }, u("th", { scope: "row", class: "conj-label" }, $), u("td", { class: "conj-cell" }, x), z);
      r.set(y.person, _), h.appendChild(_);
    }
    const p = "conj.tense.".concat(e.tense), f = G0.has(e.tense) ? t.ui(p) : e.tense, m = u("div", { class: "conj-head" }, u("p", { class: "conj-verb", testid: "conj-verb", lang: (_c2 = t.data.pack.targetLang) != null ? _c2 : t.lang }, t.text.t(e.verb)), u("span", { class: "badge conj-tense", testid: "conj-tense" }, f)), g = u("table", { class: "conj-table", "aria-label": "".concat(t.text.t(e.verb), ", ").concat(f) }, h), k = I("check", t.ui("submit"), d, { class: "btn btn-primary", disabled: true }), b = ki(t, () => {
      var _a4, _b4;
      return (_b4 = o != null ? o : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _b4 : null;
    }), v = vi(t, () => {
      var _a4, _b4, _c3;
      return (_c3 = (_b4 = o != null ? o : a.map((y) => n.get(y)).find((y) => y && y.value.trim() === "")) != null ? _b4 : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _c3 : null;
    });
    for (const y of n.values()) Vl(y, v);
    const w = u("div", { class: "conj" }, m, g, b, u("div", { class: "actions" }, v == null ? void 0 : v.button, k), v == null ? void 0 : v.status);
    return { el: w, focus: () => {
      var _a4, _b4;
      return (_b4 = n.get((_a4 = a[0]) != null ? _a4 : "")) == null ? void 0 : _b4.focus();
    }, destroy: () => v == null ? void 0 : v.stop(), reveal: (y) => {
      var _a4, _b4;
      v == null ? void 0 : v.disable(), i = true, k.disabled = true;
      const $ = y.expected && typeof y.expected == "object" ? y.expected : {};
      for (const x of a) {
        const z = n.get(x), _ = w.querySelector('[data-testid="conj-'.concat(x, '-result"]'));
        if (!z || !_) continue;
        const O = ((_a4 = y.detail) == null ? void 0 : _a4[x]) === true;
        z.disabled = true, z.classList.add(O ? "is-correct" : "is-wrong"), (_b4 = r.get(x)) == null ? void 0 : _b4.classList.add(O ? "is-correct" : "is-wrong"), _.setAttribute("data-ok", String(O)), _.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, O ? "✓" : "✗")), _.appendChild(Os(O ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
        const R = $[x];
        !O && R && _.appendChild(u("span", { class: "conj-answer", testid: "conj-answer-".concat(x) }, R));
      }
    } };
  } }, wi = "_", xe = (t, e) => "".concat(t, ",").concat(e), Yl = (t) => Lr(t).toUpperCase().replace(/[^A-Z0-9]/g, ""), V0 = { kind: "crossword", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, { grid: s } = $c(e, t.check), n = new Map(e.words.map((S) => [S.id, t.text.t(S.clue)])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = (S) => Array.from({ length: S.length }, (A, j) => [S.row + (S.dir === "down" ? j : 0), S.col + (S.dir === "across" ? j : 0)]);
    for (const S of s.entries) for (const [A, j] of a(S)) o.set(xe(A, j), [...(_a3 = o.get(xe(A, j))) != null ? _a3 : [], S]);
    let c = s.entries[0], l = false;
    const d = /* @__PURE__ */ new Map(), h = () => {
      var _a4;
      const S = new Set(c ? a(c).map(([A, j]) => xe(A, j)) : []);
      for (const [A, j] of i) (_a4 = j.parentElement) == null ? void 0 : _a4.classList.toggle("is-active", S.has(A));
      for (const [A, j] of $) j.classList.toggle("is-active", A === (c == null ? void 0 : c.id));
    }, p = (S) => {
      for (const A of s.entries) {
        const j = d.get(A.id);
        !j || j === S || (j.value = a(A).map(([T, D]) => r.get(xe(T, D)) || wi).join(""), j.value === wi.repeat(A.length) && (j.value = ""));
      }
      O.disabled = l || r.size === 0;
    }, f = (S, A, j) => {
      j ? r.set(xe(S, A), j) : r.delete(xe(S, A));
      const T = i.get(xe(S, A));
      T && (T.value = j);
    }, m = (S, A) => {
      const j = i.get(xe(S, A));
      return j ? (j.focus(), j.select(), true) : false;
    }, g = (S, A, j) => {
      var _a4, _b4;
      const T = (_a4 = o.get(xe(S, A))) != null ? _a4 : [];
      T.length !== 0 && (c && T.includes(c) ? j && T.length > 1 && (c = (_b4 = T.find((D) => D !== c)) != null ? _b4 : c) : c = T[0], h());
    }, k = (S, A, j) => {
      var _a4;
      const T = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across";
      m(S + (T === "down" ? j : 0), A + (T === "across" ? j : 0));
    };
    let b;
    const v = (S) => {
      b && b !== S && (b.tabIndex = -1), S.tabIndex = 0, b = S;
    }, w = u("div", { class: "cw-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.width) });
    for (let S = 0; S < s.height; S++) for (let A = 0; A < s.width; A++) {
      if (!((_b3 = s.cells[S]) == null ? void 0 : _b3[A])) {
        w.appendChild(u("span", { class: "cw-black", "aria-hidden": "true" }));
        continue;
      }
      const T = (_c2 = o.get(xe(S, A))) != null ? _c2 : [], D = s.entries.filter((H) => H.row === S && H.col === A), G = T.map((H) => "".concat(H.number, " ").concat(t.ui(H.dir === "across" ? "cross.across" : "cross.down"))).join(", "), F = u("input", { type: "text", class: "cw-input", maxlength: 2, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "cell-".concat(S, "-").concat(A), "aria-label": "".concat(t.ui("cross.cell", { r: S + 1, c: A + 1 }), ", ").concat(G) });
      F.addEventListener("focus", () => g(S, A, false)), F.addEventListener("click", () => {
        document.activeElement === F && g(S, A, true);
      }), F.addEventListener("input", () => {
        if (l) return;
        const H = Yl(F.value.slice(-1) || F.value);
        f(S, A, H.slice(-1)), p(), H && k(S, A, 1);
      }), F.addEventListener("keydown", (H) => {
        var _a4;
        const ke = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across", he = (Ie, Ue) => {
          var _a5;
          H.preventDefault();
          let W = S + Ie, re = A + Ue;
          for (; W >= 0 && re >= 0 && W < s.height && re < s.width && !((_a5 = s.cells[W]) == null ? void 0 : _a5[re]); ) W += Ie, re += Ue;
          m(W, re);
        };
        if (H.key === "ArrowRight") he(0, 1);
        else if (H.key === "ArrowLeft") he(0, -1);
        else if (H.key === "ArrowDown") he(1, 0);
        else if (H.key === "ArrowUp") he(-1, 0);
        else if (H.key === "Backspace" && !F.value && !l) {
          H.preventDefault(), k(S, A, -1);
          const Ie = ke === "down" ? [S - 1, A] : [S, A - 1];
          f(Ie[0], Ie[1], ""), p();
        } else H.key === "Enter" && (H.preventDefault(), O.disabled || O.click());
      }), i.set(xe(S, A), F), F.tabIndex = -1, F.addEventListener("focus", () => v(F)), w.appendChild(u("span", { class: "cw-cell" }, D[0] ? u("span", { class: "cw-num", "aria-hidden": "true" }, String(D[0].number)) : null, F));
    }
    const y = s.entries[0] ? i.get(xe(s.entries[0].row, s.entries[0].col)) : void 0;
    y && v(y);
    const $ = /* @__PURE__ */ new Map(), { across: x, down: z } = eb(s), _ = (S, A) => u("section", { class: "cw-clues" }, u("h2", {}, A), u("ol", {}, S.map((j) => {
      var _a4, _b4;
      const T = u("input", { type: "text", class: "word-input", maxlength: j.length, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "word-".concat(j.id), "aria-label": "".concat(j.number, " ").concat(t.ui(j.dir === "across" ? "cross.across" : "cross.down"), ": ").concat((_a4 = n.get(j.id)) != null ? _a4 : "", " (").concat(j.length, ")") });
      d.set(j.id, T), T.addEventListener("focus", () => {
        c = j, h();
      }), T.addEventListener("input", () => {
        if (l) return;
        const G = Array.from(T.value.toUpperCase().slice(0, j.length));
        a(j).forEach(([F, H], ke) => {
          var _a5;
          const he = G[ke] ? G[ke] === wi || G[ke] === " " ? "" : Yl(G[ke]).slice(0, 1) : void 0;
          he !== void 0 && (he !== "" || !((_a5 = o.get(xe(F, H))) == null ? void 0 : _a5.some((Ie) => Ie !== j))) && f(F, H, he);
        }), p(T);
      }), T.addEventListener("keydown", (G) => {
        G.key === "Enter" && (G.preventDefault(), O.disabled || O.click());
      });
      const D = u("li", { class: "cw-clue", testid: "clue-".concat(j.id), value: j.number }, u("span", { class: "cw-clue-text" }, u("b", {}, "".concat(j.number, ". ")), (_b4 = n.get(j.id)) != null ? _b4 : "", " (".concat(j.length, ")")), T);
      return $.set(j.id, D), D;
    }))), O = yt(t, () => {
      l || (l = true, t.submit(Object.fromEntries(s.entries.map((S) => [S.id, a(S).map(([A, j]) => {
        var _a4;
        return (_a4 = r.get(xe(A, j))) != null ? _a4 : "";
      }).join("")]))));
    }, true), R = u("div", { class: "crossword" }, u("div", { class: "cw-board" }, u("div", { class: "cw-scroll" }, w), u("div", { class: "cw-side" }, _(x, t.ui("cross.across")), _(z, t.ui("cross.down")))), u("div", { class: "actions" }, O));
    return h(), { el: R, focus: () => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const S = s.entries[0];
      S && m(S.row, S.col);
    }, reveal: (S) => {
      var _a4, _b4, _c3;
      l = true, O.disabled = true;
      for (const [A, j] of i) {
        const [T, D] = A.split(",").map(Number), G = (_b4 = (_a4 = s.cells[T]) == null ? void 0 : _a4[D]) != null ? _b4 : "", F = r.get(A);
        j.value = G, j.disabled = true;
        const H = j.parentElement;
        H.classList.remove("is-active"), H.classList.add(F === G ? "is-correct" : "is-wrong");
      }
      for (const A of s.entries) {
        const j = $.get(A.id), T = d.get(A.id);
        T && (T.disabled = true, T.value = a(A).map(([D, G]) => {
          var _a5, _b5;
          return (_b5 = (_a5 = s.cells[D]) == null ? void 0 : _a5[G]) != null ? _b5 : "";
        }).join("")), j && at(j, ((_c3 = S.detail) == null ? void 0 : _c3[A.id]) === true, t);
      }
    } };
  } }, Y0 = { kind: "flashcard", ownsPrompt: true, render(t) {
    const e = t.item;
    let s = false, n = false;
    const r = t.item.asset && t.assetUrl(t.item.asset) ? u("img", { class: "flash-img", src: t.assetUrl(t.item.asset), alt: t.assetAlt(t.item.asset) }) : null, i = e.backAsset && t.assetUrl(e.backAsset) ? u("img", { class: "flash-img", src: t.assetUrl(e.backAsset), alt: t.assetAlt(e.backAsset) }) : null, o = u("span", { class: "flash-face flash-front", testid: "flash-front" }, u("span", { class: "flash-text" }, t.text.t(e.prompt)), r), a = u("span", { class: "flash-face flash-back", testid: "flash-back", "aria-hidden": "true" }, u("span", { class: "flash-text" }, t.text.t(e.back)), i), c = u("span", { class: "sr-only" }, " — ".concat(t.ui("flip"))), l = I("flip", [u("span", { class: "flash-inner" }, o, a), c], () => m(), { class: "flash-card" }), d = /* @__PURE__ */ new Map();
    for (const k of un) d.set(k, I("grade-".concat(k), [u("span", { class: "grade-key", "aria-hidden": "true" }, String(un.indexOf(k) + 1)), t.ui("grade.".concat(k))], () => g(k), { class: "btn grade grade-".concat(k) }));
    const h = u("div", { class: "grades", hidden: true, role: "group", "aria-label": t.ui("grade.ask") }, [...d.values()]), p = u("p", { class: "hint-line" }, t.ui("flip")), f = t.item.tags.includes("self-check") ? u("p", { class: "hint-line selfcheck-hint", testid: "selfcheck-hint", hidden: true }, t.ui("selfcheck.hint")) : null;
    function m() {
      var _a3;
      n || s || (s = true, l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), c.textContent = "", h.hidden = false, f && (f.hidden = false), p.textContent = t.ui("grade.ask"), (_a3 = d.get("good")) == null ? void 0 : _a3.focus());
    }
    function g(k) {
      n || !s || (n = true, t.submit(k));
    }
    return { el: u("div", { class: "flashcard" }, l, p, f, h), focus: () => l.focus(), key: (k) => {
      const b = ui(k), v = un[b];
      return !s || b < 0 || !v ? false : (k.preventDefault(), g(v), true);
    }, reveal: (k, b) => {
      n = true, s || (l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), h.hidden = false), f && (f.hidden = false), l.disabled = true;
      for (const [v, w] of d) w.disabled = true, w.setAttribute("aria-pressed", String(v === b)), v === b && w.classList.add("is-chosen");
    } };
  } };
  function J0(t) {
    return t.type === "circle" ? ue("circle", { cx: t.cx, cy: t.cy, r: t.r }) : t.type === "rect" ? ue("rect", { x: t.x, y: t.y, width: t.w, height: t.h, rx: 4 }) : ue("polygon", { points: t.points.map(([e, s]) => "".concat(e, ",").concat(s)).join(" ") });
  }
  const Q0 = { kind: "hotspot", render(t) {
    const e = t.item, s = t.assetUrl(e.asset);
    let n = false;
    const r = ue("svg", { class: "hotspot-svg", viewBox: "0 0 ".concat(e.width, " ").concat(e.height), role: "group", "aria-label": t.assetAlt(e.asset) || t.ui("picture"), testid: "hotspot" });
    s && r.appendChild(ue("image", { href: s, x: 0, y: 0, width: e.width, height: e.height, preserveAspectRatio: "xMidYMid meet" }));
    const i = /* @__PURE__ */ new Map();
    for (const l of e.regions) {
      const d = J0(l.shape);
      d.classList.add("region"), d.setAttribute("data-region", l.id), d.setAttribute("data-testid", "region-".concat(l.id)), d.setAttribute("role", "button"), d.setAttribute("tabindex", "0"), d.setAttribute("aria-label", t.text.t(l.label)), d.addEventListener("keydown", (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), o(l.id));
      }), i.set(l.id, d), r.appendChild(d);
    }
    const o = (l) => {
      n || (n = true, t.submit(l));
    };
    r.addEventListener("click", (l) => {
      if (n) return;
      const d = l.target.closest("[data-region]");
      if (d) return o(d.getAttribute("data-region"));
      const h = r.getScreenCTM();
      if (!h) return;
      const p = new DOMPoint(l.clientX, l.clientY).matrixTransform(h.inverse());
      a = { x: p.x, y: p.y }, o({ x: p.x, y: p.y });
    });
    let a = null;
    return { el: u("div", { class: "hotspot" }, u("p", { class: "hint-line" }, t.ui("hotspot.pick")), u("div", { class: "hotspot-frame" }, r)), focus: () => {
      var _a3;
      return (_a3 = i.values().next().value) == null ? void 0 : _a3.focus();
    }, reveal: (l, d) => {
      n = true;
      const h = typeof d == "string" ? d : void 0;
      for (const [p, f] of i) f.setAttribute("tabindex", "-1"), p === e.answer ? f.classList.add("is-correct") : p === h && f.classList.add("is-wrong");
      typeof d == "object" && d && a && r.appendChild(ue("circle", { cx: a.x, cy: a.y, r: Math.max(6, e.width / 80), class: "miss-dot" }));
    } };
  } }, Jl = (t) => {
    var _a3;
    return { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_a3 = t.data.pack.targetLang) != null ? _a3 : t.lang };
  };
  function Ql(t, e) {
    const s = u("input", { ...Jl(t), class: "text-input", testid: "answer-input", "aria-label": t.ui("answer.type"), placeholder: t.ui("answer.type") }), n = yt(t, () => r(), true), r = () => {
      const c = s.value.trim();
      c === "" || s.disabled || e(c);
    };
    s.addEventListener("input", () => {
      n.disabled = s.value.trim() === "" || s.disabled;
    }), s.addEventListener("keydown", (c) => {
      c.key === "Enter" && (c.preventDefault(), r());
    });
    const i = ki(t, () => s), o = vi(t, () => s);
    return Vl(s, o), { el: u("div", { class: "typed" }, u("div", { class: "typed-row" }, s, o == null ? void 0 : o.button, n), o == null ? void 0 : o.status, i), input: s, submit: n, mic: o };
  }
  const X0 = [B0, K0, q0, { kind: "cloze", render(t) {
    const e = t.item, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = false, o = null;
    const a = () => e.gaps.every((_) => {
      var _a3;
      return ((_a3 = n.get(_.id)) != null ? _a3 : "").trim() !== "";
    }), c = () => {
      b.disabled = i || !a();
    }, l = () => {
      i || !a() || (i = true, t.submit(Object.fromEntries(e.gaps.map((_) => {
        var _a3;
        return [_.id, (_a3 = n.get(_.id)) != null ? _a3 : ""];
      }))));
    }, d = (_, O) => {
      var _a3;
      const R = t.ui("gap.n", { n: O + 1 });
      if (_.bank) {
        const j = I("gap-".concat(_.id), "", () => h(_.id, ""), { class: "gap gap-slot", "aria-label": R });
        return j.appendChild(u("span", { class: "gap-text" }, " ")), { id: _.id, el: j, banked: true, value: () => {
          var _a4;
          return (_a4 = n.get(_.id)) != null ? _a4 : "";
        }, wrap: j };
      }
      const S = (_a3 = t.text.canonical(_.answer)) != null ? _a3 : "", A = u("input", { ...Jl(t), class: "gap gap-input", testid: "gap-".concat(_.id), "aria-label": R, size: Math.max(5, Math.min(22, S.length + 2)) });
      return A.addEventListener("input", () => {
        n.set(_.id, A.value), c();
      }), A.addEventListener("focus", () => o = A), A.addEventListener("keydown", (j) => {
        if (j.key !== "Enter") return;
        j.preventDefault();
        const T = e.gaps.slice(O + 1).map((D) => s.get(D.id)).find((D) => {
          var _a4;
          return D && !D.banked && !((_a4 = n.get(D.id)) != null ? _a4 : "").trim();
        });
        T ? T.el.focus() : l();
      }), { id: _.id, el: A, banked: false, value: () => A.value, wrap: A };
    }, h = (_, O, R) => {
      var _a3;
      if (i) return;
      const S = s.get(_);
      if (!S) return;
      n.set(_, O);
      const A = S.el.querySelector(".gap-text");
      A && (A.textContent = O === "" ? " " : O), S.el.classList.toggle("is-filled", O !== "");
      const j = t.ui("gap.n", { n: e.gaps.findIndex((T) => T.id === _) + 1 });
      S.el.setAttribute("aria-label", O === "" ? j : "".concat(j, ": ").concat(O));
      for (const T of (_a3 = r.get(_)) != null ? _a3 : []) T.setAttribute("aria-pressed", String(T === R));
      c();
    };
    e.gaps.forEach((_, O) => s.set(_.id, d(_, O)));
    const p = u("p", { class: "cloze-text" }), m = t.text.t(e.text).split(/(\{\{[^}]+\}\})/);
    for (const _ of m) {
      const O = /^\{\{([^}]+)\}\}$/.exec(_), R = O ? s.get(O[1]) : void 0;
      R ? p.appendChild(R.wrap) : _ && p.appendChild(document.createTextNode(_));
    }
    const g = e.gaps.filter((_) => _.bank).length, k = e.gaps.flatMap((_, O) => {
      if (!_.bank) return [];
      const S = Dn(t, _.bank, true).map((A) => {
        var _a3;
        const j = (_a3 = t.text.canonical(A)) != null ? _a3 : t.text.t(A), T = I("bank-".concat(_.id, "-").concat(A), j, () => h(_.id, j, T), { class: "chip", "aria-pressed": "false" });
        return T;
      });
      return r.set(_.id, S), [u("div", { class: "bank", role: "group", "aria-label": t.ui("gap.n", { n: O + 1 }), testid: "bank-".concat(_.id) }, g > 1 ? u("span", { class: "bank-label" }, t.ui("gap.n", { n: O + 1 })) : null, S)];
    }), b = yt(t, l, true), v = e.gaps.some((_) => !_.bank), w = v ? ki(t, () => {
      var _a3, _b3;
      return (_b3 = o != null ? o : (_a3 = e.gaps.map((_) => s.get(_.id)).find((_) => _ && !_.banked)) == null ? void 0 : _a3.el) != null ? _b3 : null;
    }) : null, y = () => e.gaps.map((_) => s.get(_.id)).filter((_) => !!_ && !_.banked).map((_) => _.el), $ = v ? vi(t, () => {
      var _a3, _b3;
      return (_b3 = (_a3 = o != null ? o : y().find((_) => _.value.trim() === "")) != null ? _a3 : y()[0]) != null ? _b3 : null;
    }) : null, x = u("div", { class: "cloze" }, p, k, w, u("div", { class: "actions" }, $ == null ? void 0 : $.button, b), $ == null ? void 0 : $.status);
    return c(), { el: x, focus: () => {
      var _a3, _b3, _c2, _d2, _e2, _f2;
      (_f2 = (_e2 = (_a3 = e.gaps.map((O) => s.get(O.id)).find((O) => O && !O.banked)) == null ? void 0 : _a3.el) != null ? _e2 : (_d2 = r.get((_c2 = (_b3 = e.gaps[0]) == null ? void 0 : _b3.id) != null ? _c2 : "")) == null ? void 0 : _d2[0]) == null ? void 0 : _f2.focus();
    }, destroy: () => $ == null ? void 0 : $.stop(), reveal: (_) => {
      var _a3;
      $ == null ? void 0 : $.disable(), i = true, b.disabled = true;
      const O = _.expected && typeof _.expected == "object" ? _.expected : {};
      for (const R of e.gaps) {
        const S = s.get(R.id);
        if (!S) continue;
        const A = ((_a3 = _.detail) == null ? void 0 : _a3[R.id]) === true;
        if (S.banked, S.el.disabled = true, S.el.classList.add(A ? "is-correct" : "is-wrong"), !A) {
          const j = O[R.id];
          j && S.el.insertAdjacentElement("afterend", u("span", { class: "gap-answer", testid: "gap-answer-".concat(R.id) }, j));
        }
        S.el.insertAdjacentElement("afterend", Os(A ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
      }
      for (const R of r.values()) for (const S of R) S.disabled = true;
    } };
  } }, { kind: "typed", render(t) {
    const e = Ql(t, (s) => {
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
    const e = t.item, s = ms(e.pairs.map(($) => $.id), t.rng), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = null, o = null, a = false;
    const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = () => {
      const $ = new Set(r.values());
      for (let x = 1; x <= e.pairs.length; x++) if (!$.has(x)) return x;
      return e.pairs.length + 1;
    }, h = ($) => {
      var _a3;
      return (_a3 = [...n].find(([, x]) => x === $)) == null ? void 0 : _a3[0];
    }, p = () => {
      for (const [$, x] of c) f(x, $, n.get($) !== void 0, i === $);
      for (const [$, x] of l) f(x, $, h($) !== void 0, o === $);
      w.disabled = a || n.size !== e.pairs.length;
    }, f = ($, x, z, _) => {
      const R = c.get(x) === $ ? x : h(x), S = R ? r.get(R) : void 0;
      $.setAttribute("aria-pressed", String(_)), $.classList.toggle("is-paired", z);
      for (const T of Array.from($.classList)) T.startsWith("pair-c") && $.classList.remove(T);
      z && S && $.classList.add("pair-c".concat((S - 1) % 8 + 1));
      const A = $.querySelector(".pair-n");
      A && (A.textContent = z && S ? String(S) : "");
      const j = $.querySelector(".sr-only");
      j && (j.textContent = z && S ? " (".concat(S, ")") : "");
    }, m = ($) => {
      n.delete($), r.delete($);
    }, g = () => {
      if (i && o) {
        const $ = h(o);
        $ && m($), m(i), n.set(i, o), r.set(i, d()), i = null, o = null;
      }
    }, k = ($) => {
      a || (n.has($) ? m($) : i = i === $ ? null : $, g(), p());
    }, b = ($) => {
      if (a) return;
      const x = h($);
      x ? m(x) : o = o === $ ? null : $, g(), p();
    }, v = ($, x, z) => I($, [u("span", { class: "pair-n", "aria-hidden": "true" }), u("span", { class: "pair-text" }, x), Os("")], z, { class: "pair-btn", "aria-pressed": "false" });
    for (const $ of e.pairs) c.set($.id, v("pair-left-".concat($.id), t.text.t($.left), () => k($.id)));
    for (const $ of s) {
      const x = e.pairs.find((z) => z.id === $);
      x && l.set($, v("pair-right-".concat($), t.text.t(x.right), () => b($)));
    }
    const w = yt(t, () => {
      a || n.size !== e.pairs.length || (a = true, t.submit(Object.fromEntries(n)));
    }, true), y = u("div", { class: "pairs" }, u("p", { class: "hint-line" }, t.ui("pairs.pick")), u("div", { class: "pairs-cols" }, u("div", { class: "pairs-col", role: "group" }, [...c.values()]), u("div", { class: "pairs-col", role: "group" }, [...l.values()])), u("div", { class: "actions" }, w));
    return p(), { el: y, focus: () => {
      var _a3;
      return (_a3 = [...c.values()][0]) == null ? void 0 : _a3.focus();
    }, reveal: ($) => {
      var _a3;
      a = true, w.disabled = true;
      for (const x of e.pairs) {
        const z = ((_a3 = $.detail) == null ? void 0 : _a3[x.id]) === true, _ = c.get(x.id), O = n.get(x.id) ? l.get(n.get(x.id)) : void 0;
        for (const R of [_, O]) R && (R.disabled = true, at(R, z, t));
      }
    } };
  } }, { kind: "order", render(t) {
    const e = t.item, s = new Map(e.items.map((p) => [p.id, p]));
    let n = Sb(e, t.seed), r = false, i = -1;
    const o = u("ol", { class: "order-list", "aria-label": t.text.t(e.prompt), testid: "order-list" }), a = (p, f, m, g) => {
      var _a3;
      if (r || f < 0 || f >= n.length || p === f) return;
      const k = [...n], [b] = k.splice(p, 1);
      if (k.splice(f, 0, b), n = k, c(), m) {
        const v = o.querySelector('[data-testid="order-'.concat(g, "-").concat(m, '"]'));
        (_a3 = v && !v.disabled ? v : o.querySelector('[data-testid="order-'.concat(g === "up" ? "down" : "up", "-").concat(m, '"]'))) == null ? void 0 : _a3.focus();
      }
    }, c = () => {
      o.replaceChildren(...n.map((p, f) => {
        var _a3;
        const m = s.get(p), g = t.text.t((_a3 = m == null ? void 0 : m.text) != null ? _a3 : p), k = u("li", { class: "order-row", testid: "order-row-".concat(p), draggable: r ? "false" : "true" }, u("span", { class: "order-n", "aria-hidden": "true" }, String(f + 1)), u("span", { class: "order-text" }, g), u("span", { class: "order-btns" }, I("order-up-".concat(p), "▲", () => a(f, f - 1, p, "up"), { class: "icon-btn", "aria-label": t.ui("order.up", { item: g }), ...r || f === 0 ? { disabled: true } : {} }), I("order-down-".concat(p), "▼", () => a(f, f + 1, p, "down"), { class: "icon-btn", "aria-label": t.ui("order.down", { item: g }), ...r || f === n.length - 1 ? { disabled: true } : {} })));
        return k.addEventListener("dragstart", (b) => {
          var _a4;
          i = f, k.classList.add("is-dragging"), (_a4 = b.dataTransfer) == null ? void 0 : _a4.setData("text/plain", p);
        }), k.addEventListener("dragend", () => k.classList.remove("is-dragging")), k.addEventListener("dragover", (b) => {
          !r && i >= 0 && b.preventDefault();
        }), k.addEventListener("drop", (b) => {
          b.preventDefault();
          const v = i;
          i = -1, a(v, f);
        }), k;
      }));
    };
    c();
    const l = yt(t, () => {
      r || (r = true, t.submit([...n]));
    }), d = e.timeline;
    return { el: u("div", { class: "order" }, d ? u("p", { class: "order-end" }, "▲ ".concat(t.ui("order.first"))) : null, o, d ? u("p", { class: "order-end" }, "▼ ".concat(t.ui("order.last"))) : null, u("div", { class: "actions" }, l)), focus: () => {
      var _a3;
      return (_a3 = o.querySelector("button:not([disabled])")) == null ? void 0 : _a3.focus();
    }, reveal: (p) => {
      r = true, l.disabled = true, c(), o.querySelectorAll(".order-row").forEach((m, g) => {
        var _a3, _b3;
        const k = n[g];
        m.setAttribute("draggable", "false");
        const b = ((_a3 = p.detail) == null ? void 0 : _a3[k]) === true;
        at(m, b, t);
        const v = (_b3 = s.get(k)) == null ? void 0 : _b3.when;
        v && m.appendChild(u("span", { class: "order-when" }, t.text.t(v))), m.appendChild(u("span", { class: "order-should" }, b ? "" : "→ ".concat(e.items.findIndex((w) => w.id === k) + 1)));
      });
    } };
  } }, { kind: "sort-groups", render(t) {
    const e = t.item, s = ms(e.items.map((p) => p.id), t.rng), n = new Map(e.items.map((p) => [p.id, p])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let o = false;
    const a = (p) => e.groups.findIndex((f) => f.id === p) + 1, c = () => {
      var _a3;
      for (const [p, f] of i) {
        const [m, g] = p.split("\0");
        f.setAttribute("aria-pressed", String(r.get(g) === m));
      }
      for (const p of s) (_a3 = l.get(p)) == null ? void 0 : _a3.setAttribute("data-group", String(r.has(p) ? a(r.get(p)) : 0));
      d.disabled = o || r.size !== e.items.length;
    }, l = /* @__PURE__ */ new Map();
    for (const p of s) {
      const f = n.get(p);
      if (!f) continue;
      const m = t.text.t(f.text), g = e.groups.map((k) => {
        const b = I("group-".concat(k.id, "-").concat(p), t.text.t(k.title), () => {
          o || (r.get(p) === k.id ? r.delete(p) : r.set(p, k.id), c());
        }, { class: "pill pill-g".concat(a(k.id)), "aria-pressed": "false", "aria-label": t.ui("sort.assign", { item: m, group: t.text.t(k.title) }) });
        return i.set("".concat(k.id, "\0").concat(p), b), b;
      });
      l.set(p, u("li", { class: "sort-card", testid: "sort-card-".concat(p), "data-group": "0" }, u("span", { class: "sort-text" }, m), u("span", { class: "sort-pills", role: "group", "aria-label": m }, g)));
    }
    const d = yt(t, () => {
      o || r.size !== e.items.length || (o = true, t.submit(Object.fromEntries(r)));
    }, true), h = u("div", { class: "sort" }, u("ul", { class: "sort-list" }, [...l.values()]), u("div", { class: "actions" }, d));
    return c(), { el: h, focus: () => {
      var _a3;
      return (_a3 = [...i.values()][0]) == null ? void 0 : _a3.focus();
    }, reveal: (p) => {
      var _a3, _b3;
      o = true, d.disabled = true;
      for (const f of i.values()) f.disabled = true;
      for (const f of e.items) {
        const m = l.get(f.id);
        if (!m) continue;
        const g = ((_a3 = p.detail) == null ? void 0 : _a3[f.id]) === true;
        if (at(m, g, t), !g) {
          const k = e.groups.find((b) => b.id === f.group);
          m.appendChild(u("span", { class: "sort-should" }, "→ ".concat(t.text.t((_b3 = k == null ? void 0 : k.title) != null ? _b3 : f.group))));
        }
      }
    } };
  } }, Q0, { kind: "listening", render(t) {
    var _a3;
    const e = t.item, s = t.assetUrl(e.asset), n = u("audio", { preload: "auto", testid: "audio", ...s ? { src: s } : {} }), r = u("p", { class: "audio-status", role: "status" });
    let i = false;
    const o = I("audio-play", [u("span", { class: "play-icon", "aria-hidden": "true" }, "🔊"), u("span", {}, t.ui("play"))], () => {
      r.textContent = "", n.currentTime = 0, n.play().then(() => {
        var _a4;
        (_a4 = t.duck) == null ? void 0 : _a4.call(t, true), i || (i = true, o.lastElementChild.textContent = t.ui("play.again"));
      }, () => {
        r.textContent = t.ui("audio.fail");
      });
    }, { class: "btn btn-play" });
    n.addEventListener("error", () => {
      var _a4;
      r.textContent = t.ui("audio.fail"), (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
    });
    for (const d of ["ended", "pause"]) n.addEventListener(d, () => {
      var _a4;
      return (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
    });
    const a = u("div", { class: "audio-block" }, o, n, r);
    if (e.mode === "choose") {
      const d = Dn(t, (_a3 = e.options) != null ? _a3 : [], e.shuffle).map((f) => ({ id: f.id, text: t.text.t(f.text) })), h = bi(t, d, e.answer), p = u("div", { class: "listening" }, a, h.el);
      return { el: p, focus: () => o.focus(), key: h.key, reveal: (f, m) => {
        h.reveal(f, m), p.appendChild(u("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
      }, destroy: () => {
        var _a4;
        n.pause(), (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
      } };
    }
    const c = Ql(t, (d) => t.submit(d)), l = u("div", { class: "listening" }, a, c.el);
    return { el: l, focus: () => o.focus(), reveal: (d) => {
      var _a4;
      (_a4 = c.mic) == null ? void 0 : _a4.disable(), c.input.disabled = true, c.submit.disabled = true, at(c.el.querySelector(".typed-row"), d.correct, t), l.appendChild(u("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
    }, destroy: () => {
      var _a4, _b3;
      (_a4 = c.mic) == null ? void 0 : _a4.stop(), n.pause(), (_b3 = t.duck) == null ? void 0 : _b3.call(t, false);
    } };
  } }, Y0, V0, { kind: "word-search", render(t) {
    var _a3, _b3, _c2, _d2;
    const e = t.item, { grid: s, words: n } = pn(t.item, t.check), r = [], i = /* @__PURE__ */ new Set(), o = [];
    let a = null, c = [0, 0], l = false;
    const d = (x, z) => {
      var _a4;
      return (_a4 = o[x]) == null ? void 0 : _a4[z];
    }, h = (x) => {
      const [z, _] = x.start, [O, R] = x.end, S = Math.sign(O - z), A = Math.sign(R - _), j = Math.max(Math.abs(O - z), Math.abs(R - _)) + 1;
      return Array.from({ length: j }, (T, D) => [z + S * D, _ + A * D]);
    }, p = (x, z, _) => {
      var _a4;
      const O = d(x, z);
      O && ((_a4 = d(...c)) == null ? void 0 : _a4.setAttribute("tabindex", "-1"), c = [x, z], O.setAttribute("tabindex", "0"), _ && O.focus());
    }, f = () => {
      var _a4, _b4;
      for (const x of o) for (const z of x) z.classList.remove("is-first");
      a && ((_a4 = d(...a)) == null ? void 0 : _a4.classList.add("is-first"));
      for (const x of o) for (const z of x) z.setAttribute("aria-pressed", "false");
      a && ((_b4 = d(...a)) == null ? void 0 : _b4.setAttribute("aria-pressed", "true"));
    }, m = () => {
      l || (l = true, t.submit([...r]));
    }, g = (x, z) => {
      var _a4;
      if (l) return;
      if (!a) {
        a = [x, z], f();
        return;
      }
      if (a[0] === x && a[1] === z) {
        a = null, f();
        return;
      }
      const _ = { start: a, end: [x, z] };
      a = null;
      const O = zc(s, n, [_]).filter((S) => !i.has(S));
      if (f(), O.length === 0) {
        for (const [S, A] of h(_)) (_a4 = d(S, A)) == null ? void 0 : _a4.classList.add("is-miss");
        window.setTimeout(() => {
          for (const S of o) for (const A of S) A.classList.remove("is-miss");
        }, 450);
        return;
      }
      r.push(_);
      const R = i.size;
      O.forEach((S) => i.add(S)), h(_).forEach(([S, A]) => {
        const j = d(S, A);
        j && j.classList.add("is-found", "found-c".concat(R % 6 + 1));
      });
      for (const S of O) {
        const A = b.get(S);
        A && (A.classList.add("is-found"), A.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, "✓")), A.appendChild(Os(t.ui("verdict.correct"))));
      }
      w.textContent = t.ui("ws.found", { n: i.size, total: e.words.length }), i.size === e.words.length && m();
    }, k = u("div", { class: "ws-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.size) });
    for (let x = 0; x < s.size; x++) {
      const z = [], _ = u("div", { class: "ws-row" });
      for (let O = 0; O < s.size; O++) {
        const R = u("button", { type: "button", class: "ws-cell", testid: "cell-".concat(x, "-").concat(O), tabindex: x === 0 && O === 0 ? "0" : "-1", "aria-pressed": "false", "aria-label": "".concat((_b3 = (_a3 = s.cells[x]) == null ? void 0 : _a3[O]) != null ? _b3 : "", ", ").concat(t.ui("cross.cell", { r: x + 1, c: O + 1 })) }, (_d2 = (_c2 = s.cells[x]) == null ? void 0 : _c2[O]) != null ? _d2 : "");
        R.addEventListener("click", () => {
          p(x, O, false), g(x, O);
        }), R.addEventListener("keydown", (S) => {
          const j = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[S.key];
          j && (S.preventDefault(), p(Math.min(s.size - 1, Math.max(0, x + j[0])), Math.min(s.size - 1, Math.max(0, O + j[1])), true));
        }), z.push(R), _.appendChild(R);
      }
      o.push(z), k.appendChild(_);
    }
    const b = /* @__PURE__ */ new Map(), v = u("ul", { class: "ws-words" }, e.words.map((x) => {
      var _a4;
      const z = u("li", { class: "ws-word", testid: "ws-word-".concat(x.id) }, (_a4 = t.text.canonical(x.answer)) != null ? _a4 : x.id);
      return b.set(x.id, z), z;
    })), w = u("p", { class: "ws-count", role: "status", testid: "ws-count" }, t.ui("ws.found", { n: 0, total: e.words.length })), y = yt(t, m);
    return y.textContent = t.ui("ws.done"), { el: u("div", { class: "wordsearch" }, u("p", { class: "hint-line" }, t.ui("ws.pick")), u("div", { class: "ws-board" }, u("div", { class: "ws-scroll" }, k), u("div", { class: "ws-side" }, w, v)), u("div", { class: "actions" }, y)), focus: () => {
      var _a4;
      return (_a4 = d(...c)) == null ? void 0 : _a4.focus();
    }, reveal: () => {
      var _a4, _b4;
      l = true, y.disabled = true;
      for (const x of o) for (const z of x) z.disabled = true;
      for (const x of s.placements) {
        if (i.has(x.id)) continue;
        const z = x.answer.length;
        for (let _ = 0; _ < z; _++) (_a4 = d(x.row + x.dr * _, x.col + x.dc * _)) == null ? void 0 : _a4.classList.add("is-missed");
      }
      for (const x of e.words) i.has(x.id) || ((_b4 = b.get(x.id)) == null ? void 0 : _b4.classList.add("is-missed"));
    } };
  } }, H0], eS = (t, e) => "".concat(t, "/").concat(e);
  function tS(t) {
    var _a3;
    const e = (_a3 = t.extensions) == null ? void 0 : _a3.gloss;
    if (typeof e != "object" || e === null) return null;
    const s = e;
    return typeof s.article == "string" && typeof s.entry == "string" ? { article: s.article, entry: s.entry } : null;
  }
  function Xl(t, e) {
    const s = tS(t);
    return s !== null && e.has(eS(s.article, s.entry));
  }
  function sS(t, e) {
    const s = new Set(e);
    return new Set(t.filter((n) => Xl(n, s)).map((n) => n.id));
  }
  const ed = "edu-student-result", td = 1, yi = 60, nS = 400, rS = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,79}$/, Ln = E().regex(rS), Si = E().max(40).regex(/^\d{4}-\d{2}-\d{2}(T[0-9:.]+(Z|[+-]\d{2}:?\d{2})?)?$/, "an ISO date such as 2026-11-20").refine((t) => Number.isFinite(Date.parse(t)), "not a real date"), iS = B({ id: E().min(1).max(60), title: E().min(1).max(120), units: N(Ln).max(200).default([]), targetStars: L().int().min(1).max(3).default(2), due: Si.optional(), message: E().max(nS).optional(), createdAt: Si });
  function oS(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.classroom) == null ? void 0 : _a3.assignment;
    if (e == null) return null;
    const s = iS.safeParse(e);
    return s.success ? s.data : null;
  }
  function sd(t, e) {
    const s = t.units.map((r) => r.id);
    if (!e || e.units.length === 0) return s;
    const n = s.filter((r) => e.units.includes(r));
    return n.length ? n : s;
  }
  const nd = B({ stars: L().int().min(0).max(3), best: L().min(0).max(1), rounds: L().int().min(0).max(1e6) }), aS = B({ schema: se(td), kind: se(ed), courseId: E().min(1).max(120), assignmentId: E().min(1).max(60).optional(), student: B({ name: E().min(1).max(yi), id: E().min(1).max(80) }), exportedAt: Si, units: Q(Ln, nd), boss: nd, answered: L().int().min(0).max(1e9), right: L().int().min(0).max(1e9), queue: N(Ln).max(2e3), missed: Q(Ln, L().int().min(1).max(1e5)), playSeconds: L().int().min(0).max(36e6) });
  function Xt(t) {
    return typeof t != "string" ? "" : t.replace(/[\u0000-\u001f\u007f-\u009f]/g, " ").replace(/\s+/g, " ").trim().slice(0, yi).trim();
  }
  const Cn = (t, e) => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    return { stars: Math.max((_a3 = t == null ? void 0 : t.stars) != null ? _a3 : 0, (_b3 = e == null ? void 0 : e.stars) != null ? _b3 : 0), best: Math.max((_c2 = t == null ? void 0 : t.best) != null ? _c2 : 0, (_d2 = e == null ? void 0 : e.best) != null ? _d2 : 0), rounds: ((_e2 = t == null ? void 0 : t.rounds) != null ? _e2 : 0) + ((_f2 = e == null ? void 0 : e.rounds) != null ? _f2 : 0) };
  };
  function cS(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = {};
    let r = Cn(e.boss, void 0);
    for (const l of t.units) {
      let d = Cn(e.units[l.id], void 0);
      for (const h of Object.values((_a3 = e.shells) != null ? _a3 : {})) d = Cn(d, h.units[l.id]);
      (d.stars > 0 || d.rounds > 0) && (n[l.id] = d);
    }
    for (const l of Object.values((_b3 = e.shells) != null ? _b3 : {})) r = Cn(r, l.boss);
    const i = new Set(t.items.map((l) => l.id)), o = e.queue.filter((l) => i.has(l)), a = {};
    for (const [l, d] of Object.entries(e.cards)) i.has(l) && d.lapses > 0 && (a[l] = d.lapses);
    for (const l of o) a[l] = Math.max(1, (_c2 = a[l]) != null ? _c2 : 0);
    const c = Math.max(0, Math.round(e.answered));
    return aS.parse({ schema: td, kind: ed, courseId: t.id, ...s.assignmentId ? { assignmentId: s.assignmentId } : {}, student: { name: Xt(s.name) || "Student", id: s.id }, exportedAt: ((_d2 = s.now) != null ? _d2 : /* @__PURE__ */ new Date()).toISOString(), units: n, boss: r, answered: c, right: Math.min(c, Math.max(0, Math.round(e.right))), queue: o, missed: a, playSeconds: Math.max(0, Math.round((_e2 = e.playSeconds) != null ? _e2 : 0)) });
  }
  const $i = 1, rd = "edu-progress", lS = 2, id = 36e4, dS = 2e5, od = () => ({ units: {}, boss: Zn(), finished: false }), Zn = () => ({ stars: 0, best: 0, rounds: 0 });
  function Ns(t) {
    return { version: $i, pack: t, units: {}, boss: Zn(), cards: {}, queue: [], score: 0, bestCombo: 0, answered: 0, right: 0, settings: { timer: false, sound: true, reduceAudio: false, speak: true }, updatedAt: 0, shells: {} };
  }
  function zi(t) {
    return t >= 0.9 ? 3 : t >= 0.7 ? 2 : t >= 0.5 ? 1 : 0;
  }
  const Un = (t, e) => {
    var _a3, _b3;
    return ((_b3 = (_a3 = t.units[e]) == null ? void 0 : _a3.stars) != null ? _b3 : 0) >= lS;
  };
  function Fn(t, e, s) {
    const n = t.units.find((r) => r.id === s);
    return n ? n.requires.every((r) => Un(e, r)) : false;
  }
  const _i = (t, e) => t.units.every((s) => Un(e, s.id));
  function ad(t, e, s) {
    return t.units.filter((n) => !Fn(t, e, n.id) && Fn(t, s, n.id)).map((n) => n.id);
  }
  const cd = (t, e) => Object.fromEntries(t.units.map((s) => {
    var _a3, _b3;
    return [s.id, (_b3 = (_a3 = e.units[s.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0];
  })), ld = (t, e) => t.units.reduce((s, n) => {
    var _a3, _b3;
    return s + ((_b3 = (_a3 = e.units[n.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0);
  }, 0);
  function dd(t, e, s) {
    const n = zi(s), r = (i) => {
      const o = i != null ? i : Zn();
      return { stars: Math.max(o.stars, n), best: Math.max(o.best, s), rounds: o.rounds + 1 };
    };
    return e.boss ? { ...t, boss: r(t.boss) } : e.unitId ? { ...t, units: { ...t.units, [e.unitId]: r(t.units[e.unitId]) } } : t;
  }
  const ud = (t, e) => t.includes(e) ? [...t] : [...t, e], hd = (t, e) => t.filter((s) => s !== e), pd = (t, e, s) => {
    var _a3;
    return (_a3 = t.cards[e]) != null ? _a3 : gc(e, s);
  };
  function fd(t) {
    var _a3;
    const e = (_a3 = t.shells.encyclopedia) == null ? void 0 : _a3.data, s = typeof e == "object" && e !== null && !Array.isArray(e) ? e.glossOff : void 0;
    return new Set(Array.isArray(s) ? s.filter((n) => typeof n == "string") : []);
  }
  const uS = (t) => JSON.stringify({ format: rd, version: $i, pack: t.pack, progress: t }, null, 2), Ye = (t) => typeof t == "object" && t !== null && !Array.isArray(t), es = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, t)) : n, ct = (t, e, s, n) => Math.round(es(t, e, s, n));
  function Bn(t) {
    return Ye(t) ? { stars: ct(t.stars, 0, 3, 0), best: es(t.best, 0, 1, 0), rounds: ct(t.rounds, 0, 1e6, 0) } : Zn();
  }
  function hS(t, e) {
    if (!Ye(e)) return null;
    const s = gc(t, 0);
    return { id: t, ease: es(e.ease, 1.3, 5, s.ease), interval: es(e.interval, 0, 36500, 0), reps: ct(e.reps, 0, 1e4, 0), lapses: ct(e.lapses, 0, 1e4, 0), due: es(e.due, 0, 864e13, 0), last: typeof e.last == "number" && Number.isFinite(e.last) ? e.last : null };
  }
  function md(t, e) {
    let s;
    try {
      s = JSON.parse(t);
    } catch (e2) {
      return { ok: false, error: "not JSON" };
    }
    if (!Ye(s)) return { ok: false, error: "not an object" };
    if ("format" in s && s.format !== rd) return { ok: false, error: "wrong file format" };
    const n = Ye(s.progress) ? s.progress : s;
    if (n.version !== $i) return { ok: false, error: "unknown version ".concat(String(n.version)) };
    if (n.pack !== e.id) return { ok: false, error: 'it is for the course "'.concat(String(n.pack), '"') };
    const r = Ns(e.id), i = new Set(e.units.map((a) => a.id));
    if (Ye(n.units)) for (const [a, c] of Object.entries(n.units)) i.has(a) && (r.units[a] = Bn(c));
    r.boss = Bn(n.boss);
    const o = new Set(e.items.map((a) => a.id));
    if (Ye(n.cards)) for (const [a, c] of Object.entries(n.cards)) {
      if (!o.has(a)) continue;
      const l = hS(a, c);
      l && (r.cards[a] = l);
    }
    if (Array.isArray(n.queue) && (r.queue = [...new Set(n.queue.filter((a) => typeof a == "string" && o.has(a)))]), r.score = ct(n.score, 0, 1e9, 0), r.bestCombo = ct(n.bestCombo, 0, 1e5, 0), r.answered = ct(n.answered, 0, 1e9, 0), r.right = Math.min(r.answered, ct(n.right, 0, 1e9, 0)), Ye(n.settings) && (r.settings = { timer: n.settings.timer === true, sound: n.settings.sound !== false, reduceAudio: n.settings.reduceAudio === true, speak: n.settings.speak !== false, ...typeof n.settings.lang == "string" ? { lang: n.settings.lang } : {}, ...Xt(n.settings.name) ? { name: Xt(n.settings.name) } : {}, ...typeof n.settings.studentId == "string" && /^[A-Za-z0-9_-]{6,64}$/.test(n.settings.studentId) ? { studentId: n.settings.studentId } : {} }), n.playSeconds !== void 0 && (r.playSeconds = ct(n.playSeconds, 0, id, 0)), r.updatedAt = es(n.updatedAt, 0, 864e13, 0), Ye(n.shells)) for (const [a, c] of Object.entries(n.shells)) {
      if (!/^[a-z0-9][a-z0-9-]{0,40}$/.test(a) || !Ye(c)) continue;
      const l = od();
      if (Ye(c.units)) for (const [d, h] of Object.entries(c.units)) i.has(d) && (l.units[d] = Bn(h));
      if (l.boss = Bn(c.boss), l.finished = c.finished === true, c.data !== void 0) try {
        const d = JSON.stringify(c.data);
        d !== void 0 && d.length <= dS && (l.data = JSON.parse(d));
      } catch (e2) {
      }
      r.shells[a] = l;
    }
    return { ok: true, progress: r };
  }
  const gd = (t) => t.answered > 0 || Object.keys(t.units).length > 0 || t.boss.rounds > 0, pS = (t, e) => {
    const s = t.shells[e];
    return !!s && (Object.keys(s.units).length > 0 || s.boss.rounds > 0 || s.finished || s.data !== void 0);
  }, ji = (t) => "edu-studio:progress:".concat(t);
  class kd {
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
        e = this.storage.getItem(ji(this.pack.id));
      } catch (e2) {
        this.persistent = false;
      }
      if (!e) return Ns(this.pack.id);
      const s = md(e, this.pack);
      return s.ok ? s.progress : Ns(this.pack.id);
    }
    save(e) {
      const s = JSON.stringify({ ...e, updatedAt: Date.now() });
      if (this.memory = s, !!this.storage) try {
        this.storage.setItem(ji(this.pack.id), s);
      } catch (e2) {
        this.persistent = false;
      }
    }
    clear() {
      if (this.memory = null, !!this.storage) try {
        this.storage.removeItem(ji(this.pack.id));
      } catch (e) {
        this.persistent = false;
      }
    }
  }
  function bd() {
    try {
      const t = window.localStorage, e = "__edu_probe__";
      return t.setItem(e, "1"), t.removeItem(e), t;
    } catch (e) {
      return null;
    }
  }
  const xi = (t) => oS(t.extensions), vd = (t, e) => {
    const s = xi(t);
    return !!s && sd(t, s).includes(e);
  };
  function fS() {
    const t = new Uint8Array(12);
    try {
      crypto.getRandomValues(t);
    } catch (e) {
      for (let e2 = 0; e2 < t.length; e2++) t[e2] = Math.floor(Math.random() * 256);
    }
    return Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
  }
  const mS = (t) => t.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "student";
  function gS(t) {
    const e = new Date(t);
    return Number.isFinite(e.getTime()) ? e.toLocaleDateString() : t.slice(0, 10);
  }
  function kS(t) {
    var _a3;
    const e = xi(t.pack);
    let s = t.getProgress();
    const n = Xt(s.settings.name);
    if (!n) return t.say(t.ui("class.needName"), "bad");
    const r = (_a3 = s.settings.studentId) != null ? _a3 : fS();
    r !== s.settings.studentId && (s = { ...s, settings: { ...s.settings, studentId: r } }, t.setProgress(s), t.save());
    try {
      const i = cS(t.pack, s, { name: n, id: r, ...e ? { assignmentId: e.id } : {} }), o = new Blob([JSON.stringify(i, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), c = u("a", { href: a, download: "".concat(t.pack.slug, "-").concat(mS(n), "-result.json"), class: "sr-only" });
      document.body.appendChild(c), c.click(), c.remove(), window.setTimeout(() => URL.revokeObjectURL(a), 2e3), t.say(t.ui("class.sent"), "ok");
    } catch (i) {
      t.say(String(i instanceof Error ? i.message : i), "bad");
    }
  }
  function bS(t) {
    var _a3;
    const e = xi(t.pack);
    if (!e) return null;
    const s = t.ui, n = sd(t.pack, e), r = n.length === t.pack.units.length, i = s("class.target", { n: e.targetStars, units: r ? s("class.allUnits") : n.map((l) => t.unitTitle(l)).join(", ") }), o = u("input", { type: "text", class: "student-name-input", testid: "student-name", maxlength: String(yi), autocomplete: "off", value: (_a3 = t.getProgress().settings.name) != null ? _a3 : "", onchange: (l) => {
      const d = Xt(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...d ? { name: d } : { name: void 0 } } }), t.save();
    }, oninput: (l) => {
      const d = Xt(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...d ? { name: d } : { name: void 0 } } });
    } }), a = u("p", { class: "assignment-message", testid: "assignment-message" });
    e.message && (a.textContent = e.message);
    const c = u("h2", { class: "assignment-title" });
    return c.textContent = e.title, u("section", { class: "assignment-banner", testid: "assignment-banner", "aria-label": s("class.assignment") }, u("p", { class: "eyebrow" }, s("class.assignment")), c, u("p", { class: "assignment-target", testid: "assignment-target" }, i), e.due ? u("p", { class: "assignment-due", testid: "assignment-due" }, s("class.due", { date: gS(e.due) })) : null, e.message ? a : null, u("div", { class: "student-box" }, u("label", { class: "student-label" }, u("span", {}, s("class.yourName")), o), I("send-teacher", s("class.send"), () => kS(t), { class: "btn btn-small" })));
  }
  class wd {
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
      const e = this.get(), s = Math.min(id, ((_a3 = e.playSeconds) != null ? _a3 : 0) + this.pending);
      this.pending = 0, s !== e.playSeconds && (this.set({ ...e, playSeconds: s }), this.save());
    }
    dispose() {
      this.timer !== void 0 && window.clearInterval(this.timer), this.timer = void 0;
      for (const e of ["keydown", "pointerdown", "touchstart"]) document.removeEventListener(e, this.touch, true);
      this.flush();
    }
  }
  const vS = 0.4, wS = 0.3, yd = 400, Sd = 40, yS = 60, SS = { "level-up": ["level-up", "unit-complete"], "unit-complete": ["unit-complete", "level-up"] }, $d = ["pointerdown", "keydown", "touchstart"], Ei = (t) => Math.min(1, Math.max(0, t));
  function zd(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.audio) == null ? void 0 : _a3.loops, s = {};
    if (e && typeof e == "object") for (const [n, r] of Object.entries(e)) {
      const i = r;
      i && typeof i.startSec == "number" && typeof i.endSec == "number" && Number.isFinite(i.startSec) && Number.isFinite(i.endSec) && i.endSec > i.startSec && i.startSec >= 0 && (s[n] = { startSec: i.startSec, endSec: i.endSec });
    }
    return s;
  }
  class _d {
    constructor(e) {
      __publicField(this, "o");
      __publicField(this, "wanted", null);
      __publicField(this, "track", null);
      __publicField(this, "ducked", false);
      __publicField(this, "gesture");
      __publicField(this, "onGesture", () => this.resume());
      if (this.o = e, this.gesture = e.gestureTarget === void 0 ? typeof document < "u" ? document : null : e.gestureTarget, this.gesture) for (const s of $d) this.gesture.addEventListener(s, this.onGesture, { capture: true, passive: true });
    }
    musicCue(e) {
      var _a3;
      const s = (n) => this.o.cues.find((r) => r.on === "music:".concat(n) && this.o.assets[r.asset]);
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
      return Ei(e.cueVolume * (this.ducked ? wS : 1));
    }
    setArea(e) {
      this.wanted = e, this.apply();
    }
    refresh() {
      this.apply();
    }
    apply() {
      const e = this.o.settings(), s = this.wanted && e.sound && !e.reduceAudio ? this.musicCue(this.wanted) : void 0, n = s ? this.o.assets[s.asset] : void 0;
      if (!s || !n) return this.stopTrack(!e.sound || !!e.reduceAudio);
      const r = this.wanted;
      if (this.track && this.track.url === n) {
        this.track.area = r, this.track.cueVolume = s.volume, this.track.el.paused && this.attempt(this.track.el), this.setLevel(this.track, this.volumeOf(this.track));
        return;
      }
      this.stopTrack(false), this.startTrack(n, r, s);
    }
    startTrack(e, s, n) {
      var _a3;
      let r;
      try {
        r = this.create(e);
      } catch (e2) {
        return this.report(e);
      }
      r.loop = true, r.volume = 0, r.addEventListener("error", () => this.report(e));
      const i = { url: e, area: s, cueVolume: n.volume, el: r, level: 0 };
      this.track = i;
      const o = (_a3 = this.o.loops) == null ? void 0 : _a3[n.asset];
      o && o.endSec > o.startSec && (i.loopTimer = setInterval(() => {
        r.currentTime >= o.endSec - 0.05 && (r.currentTime = o.startSec);
      }, yS)), this.attempt(r), this.fadeTo(i, this.volumeOf(i), yd);
    }
    stopTrack(e) {
      const s = this.track;
      if (s) {
        if (this.track = null, s.loopTimer && clearInterval(s.loopTimer), e) {
          s.fade && clearInterval(s.fade), s.el.pause();
          return;
        }
        this.fadeTo(s, 0, yd, () => s.el.pause());
      }
    }
    setLevel(e, s) {
      e.level = Ei(s), e.el.volume = e.level;
    }
    fadeTo(e, s, n, r) {
      e.fade && clearInterval(e.fade);
      const i = e.level, o = Math.max(1, Math.round(n / Sd));
      let a = 0;
      e.fade = setInterval(() => {
        a++, this.setLevel(e, i + (s - i) * a / o), a >= o && (e.fade && clearInterval(e.fade), e.fade = void 0, r == null ? void 0 : r());
      }, Sd);
    }
    resume() {
      const e = this.track;
      e && e.el.paused && this.o.settings().sound && !this.o.settings().reduceAudio ? this.attempt(e.el) : e || this.apply();
    }
    duck(e) {
      this.ducked = e, this.track && this.setLevel(this.track, this.volumeOf(this.track));
    }
    sfx(e) {
      var _a3;
      const s = this.o.settings();
      if (!s.sound) return;
      const n = (_a3 = SS[e]) != null ? _a3 : [e];
      for (const r of this.o.cues.filter((i) => n.includes(i.on) && !i.loop)) {
        const i = this.o.assets[r.asset];
        if (i) try {
          const o = this.create(i);
          o.volume = Ei(r.volume * (s.reduceAudio ? vS : 1)), o.addEventListener("error", () => this.report(i)), this.attempt(o);
        } catch (e2) {
          this.report(i);
        }
      }
    }
    dispose() {
      if (this.wanted = null, this.stopTrack(true), this.gesture) for (const e of $d) this.gesture.removeEventListener(e, this.onGesture, { capture: true });
    }
  }
  const jd = (t) => typeof t == "object" && t !== null && !Array.isArray(t) ? t : {}, $S = (t, e) => t.replace(/\{\{([^}]+)\}\}/g, (s, n) => e(n));
  function Ps(t, e) {
    var _a3;
    const { text: s, ui: n } = e, r = (i) => s.t(i);
    switch (t.kind) {
      case "mcq": {
        const i = t, o = i.options.find((a) => a.id === i.answer);
        return o ? [r(o.text)] : [];
      }
      case "true-false":
        return [n(t.answer ? "fb.true" : "fb.false")];
      case "multi-select": {
        const i = t;
        return i.options.filter((o) => i.answers.includes(o.id)).map((o) => r(o.text));
      }
      case "cloze": {
        const i = t, o = new Map(i.gaps.map((a) => {
          var _a4;
          return [a.id, (_a4 = s.canonical(a.answer)) != null ? _a4 : "?"];
        }));
        return [$S(r(i.text), (a) => {
          var _a4;
          return (_a4 = o.get(a)) != null ? _a4 : "?";
        })];
      }
      case "conjugation":
        return t.forms.map((o) => {
          var _a4;
          return "".concat(r(o.label), " ").concat((_a4 = s.canonical(o.answer)) != null ? _a4 : "?");
        });
      case "typed": {
        const i = s.canonical(t.answer);
        return i ? [i] : [];
      }
      case "match-pairs":
        return t.pairs.map((i) => "".concat(r(i.left), " = ").concat(r(i.right)));
      case "order":
        return t.items.map((o, a) => "".concat(a + 1, ". ").concat(r(o.text)).concat(o.when ? " (".concat(r(o.when), ")") : ""));
      case "sort-groups": {
        const i = t;
        return i.groups.map((o) => "".concat(r(o.title), ": ").concat(i.items.filter((a) => a.group === o.id).map((a) => r(a.text)).join(", ")));
      }
      case "hotspot": {
        const i = t, o = i.regions.find((a) => a.id === i.answer);
        return o ? [r(o.label)] : [];
      }
      case "listening": {
        const i = t;
        if (i.mode === "choose") {
          const a = ((_a3 = i.options) != null ? _a3 : []).find((c) => c.id === i.answer);
          return a ? [r(a.text)] : [];
        }
        const o = s.canonical(i.answer);
        return o ? [o] : [];
      }
      case "flashcard":
        return [r(t.back)];
      case "crossword":
        return t.words.map((i) => {
          var _a4;
          return "".concat(r(i.clue), " = ").concat((_a4 = s.canonical(i.answer)) != null ? _a4 : "?");
        });
      case "word-search":
        return [t.words.map((i) => {
          var _a4;
          return (_a4 = s.canonical(i.answer)) != null ? _a4 : "?";
        }).join(", ")];
      default:
        return [];
    }
  }
  function zS(t, e, s) {
    var _a3, _b3, _c2, _d2;
    const n = (r) => r && s.hasText(r) ? [s.t(r)] : [];
    switch (t.kind) {
      case "mcq": {
        const r = t;
        return typeof e == "string" && e !== r.answer ? n((_a3 = r.options.find((i) => i.id === e)) == null ? void 0 : _a3.why) : [];
      }
      case "listening": {
        const r = t;
        return r.mode === "choose" && typeof e == "string" && e !== r.answer ? n((_c2 = ((_b3 = r.options) != null ? _b3 : []).find((i) => i.id === e)) == null ? void 0 : _c2.why) : [];
      }
      case "multi-select": {
        const r = t;
        return (Array.isArray(e) ? e.filter((o) => typeof o == "string") : []).filter((o) => !r.answers.includes(o)).flatMap((o) => {
          var _a4;
          return n((_a4 = r.options.find((a) => a.id === o)) == null ? void 0 : _a4.why);
        });
      }
      case "true-false": {
        const r = t;
        return typeof e == "boolean" && e !== r.answer ? n(r.why) : [];
      }
      case "hotspot": {
        const r = t, i = jd(e), o = typeof e == "string" ? e : typeof i.x == "number" && typeof i.y == "number" ? Sc(r, i.x, i.y) : void 0;
        return o && o !== r.answer ? n((_d2 = r.regions.find((a) => a.id === o)) == null ? void 0 : _d2.why) : [];
      }
      case "sort-groups": {
        const r = t, i = jd(e);
        return r.items.filter((o) => i[o.id] !== o.group).flatMap((o) => n(o.why));
      }
      default:
        return [];
    }
  }
  const _S = (t) => t === "order" ? "fb.detail.order" : t === "sort-groups" ? "fb.detail.sort" : t === "cloze" ? "fb.detail.gaps" : t === "conjugation" ? "fb.detail.forms" : t === "crossword" || t === "word-search" ? "fb.detail.words" : "fb.matched";
  function xd(t, e, s, n, r = false) {
    var _a3;
    const { text: i, ui: o } = n, a = r ? "timeout" : s.correct ? "correct" : s.partial ? "partial" : "wrong", c = o("praise.".concat(n.rng.randint(1, 5))), l = a === "correct" ? s.typo || s.diacritics || s.translit || s.caps ? o("verdict.correct") : c : o(a === "timeout" ? "verdict.timeout" : a === "partial" ? "verdict.partial" : "verdict.wrong"), d = Ps(t, n), h = [], p = typeof s.expected == "string" ? s.expected : d.join(" ");
    s.typo && h.push(o("fb.typo", { a: p })), s.diacritics && h.push(o(s.correct ? "fb.accents" : "fb.accents.strict", { a: p })), s.translit && h.push(o("fb.note.translit", { a: p })), s.caps && h.push(o("fb.note.caps", { a: p }));
    const f = s.detail && !s.correct && !r ? Object.values(s.detail) : void 0;
    return { verdict: a, title: l, whys: s.correct || r ? [] : zS(t, e, i), explanation: (_a3 = i.text(t.explanation)) != null ? _a3 : "", answer: s.correct && t.kind !== "flashcard" && !(t.kind === "order" && t.timeline) ? [] : d, ...s.correct && t.didYouKnow && i.hasText(t.didYouKnow) ? { dyk: i.t(t.didYouKnow) } : {}, notes: h, ...f && f.length > 1 ? { detail: o(_S(t.kind), { n: f.filter(Boolean).length, total: f.length }) } : {} };
  }
  const jS = /^https?:\/\/(127\.0\.0\.1|localhost|\[::1\])(:\d{1,5})?(\/.*)?$/i, xS = B({ enabled: J().optional(), whisperUrl: E().regex(jS).optional() });
  function ES(t, e) {
    const s = t == null ? void 0 : t.speaking, n = xS.safeParse(s && typeof s == "object" ? s : {}), r = n.success ? n.data : {}, i = e ? r.enabled !== false : false;
    return { enabled: i, ...i && r.whisperUrl ? { whisperUrl: r.whisperUrl } : {} };
  }
  function AS(t) {
    var _a3;
    const e = t;
    return (_a3 = e.SpeechRecognition) != null ? _a3 : e.webkitSpeechRecognition;
  }
  function TS(t, e) {
    return { kind: "web", lang: e, start(s) {
      let n, r = "", i = false;
      try {
        n = new t(), n.lang = e, n.interimResults = false, n.continuous = false, n.maxAlternatives = 1, n.onresult = (o) => {
          r = Array.from(o.results).map((a) => {
            var _a3, _b3;
            return (_b3 = (_a3 = a[0]) == null ? void 0 : _a3.transcript) != null ? _b3 : "";
          }).join(" ").trim();
        }, n.onerror = (o) => {
          i = true;
          const a = o.error;
          s.onState("error", a === "not-allowed" || a === "service-not-allowed" ? "denied" : a === "no-speech" ? "no-speech" : a === "network" || a === "audio-capture" ? "unavailable" : "failed");
        }, n.onend = () => {
          i || (r && s.onText(r), r ? s.onState("idle") : s.onState("error", "no-speech"));
        }, n.start(), s.onState("listening");
      } catch (e2) {
        return s.onState("error", "unavailable"), { stop: () => {
        } };
      }
      return { stop: () => n.stop() };
    } };
  }
  const Ai = 16e3;
  function IS(t) {
    var _a3;
    const e = t[0];
    if (!e) return new Float32Array(0);
    if (t.length === 1) return e;
    const s = new Float32Array(e.length);
    for (const n of t) for (let r = 0; r < s.length; r++) s[r] = s[r] + ((_a3 = n[r]) != null ? _a3 : 0);
    for (let n = 0; n < s.length; n++) s[n] = s[n] / t.length;
    return s;
  }
  function MS(t, e, s) {
    if (e === s || t.length === 0) return t;
    const n = Math.max(1, Math.round(t.length * s / e)), r = new Float32Array(n), i = e / s;
    for (let o = 0; o < n; o++) {
      const a = o * i, c = Math.min(Math.floor(a), t.length - 1), l = Math.min(c + 1, t.length - 1), d = a - c;
      r[o] = t[c] * (1 - d) + t[l] * d;
    }
    return r;
  }
  function OS(t, e) {
    const s = MS(IS(t), e, Ai), n = s.length * 2, r = new ArrayBuffer(44 + n), i = new DataView(r), o = (a, c) => {
      for (let l = 0; l < c.length; l++) i.setUint8(a + l, c.charCodeAt(l));
    };
    o(0, "RIFF"), i.setUint32(4, 36 + n, true), o(8, "WAVE"), o(12, "fmt "), i.setUint32(16, 16, true), i.setUint16(20, 1, true), i.setUint16(22, 1, true), i.setUint32(24, Ai, true), i.setUint32(28, Ai * 2, true), i.setUint16(32, 2, true), i.setUint16(34, 16, true), o(36, "data"), i.setUint32(40, n, true);
    for (let a = 0; a < s.length; a++) {
      const c = Math.max(-1, Math.min(1, s[a]));
      i.setInt16(44 + a * 2, c < 0 ? c * 32768 : c * 32767, true);
    }
    return new Uint8Array(r);
  }
  class Rs extends Error {
    constructor(e, s) {
      super(s);
      __publicField(this, "code");
      this.code = e;
    }
  }
  async function NS(t, e, s, n = {}) {
    var _a3, _b3;
    const r = (_a3 = n.fetchImpl) != null ? _a3 : fetch, i = new AbortController(), o = setTimeout(() => i.abort(), (_b3 = n.timeoutMs) != null ? _b3 : 3e4);
    try {
      const a = t.replace(/\/+$/, ""), c = "".concat(/\/stt$/.test(a) ? a : "".concat(a, "/stt"), "?lang=").concat(encodeURIComponent(s)), l = await r(c, { method: "POST", headers: { "content-type": "audio/wav" }, body: e, signal: i.signal });
      if (!l.ok) throw new Rs("failed", "the speech endpoint answered ".concat(l.status));
      const d = await l.json();
      if (typeof d.text != "string") throw new Rs("failed", "the speech endpoint sent no text");
      return d.text.trim();
    } catch (a) {
      throw a instanceof Rs ? a : new Rs("unavailable", a instanceof Error ? a.message : String(a));
    } finally {
      clearTimeout(o);
    }
  }
  const PS = 3e4;
  function RS(t) {
    var _a3, _b3, _c2;
    const e = t;
    return !!((_a3 = e.AudioContext) != null ? _a3 : e.webkitAudioContext) && !!((_c2 = (_b3 = t.navigator) == null ? void 0 : _b3.mediaDevices) == null ? void 0 : _c2.getUserMedia);
  }
  function DS(t) {
    const e = new Float32Array(t.reduce((n, r) => n + r.length, 0));
    let s = 0;
    for (const n of t) e.set(n, s), s += n.length;
    return e;
  }
  function LS(t, e, s) {
    return { kind: "whisper", lang: s, start(n) {
      var _a3;
      const r = t, i = (_a3 = r.AudioContext) != null ? _a3 : r.webkitAudioContext, o = [];
      let a, c, l, d, h = false;
      const p = () => {
        d && clearTimeout(d), l == null ? void 0 : l.disconnect(), a == null ? void 0 : a.getTracks().forEach((m) => m.stop()), c == null ? void 0 : c.close().catch(() => {
        });
      }, f = async () => {
        var _a4;
        if (h) return;
        h = true;
        const m = (_a4 = c == null ? void 0 : c.sampleRate) != null ? _a4 : 48e3;
        if (p(), o.length === 0) return n.onState("error", "no-speech");
        n.onState("thinking");
        try {
          const g = await NS(e, OS([DS(o)], m), s);
          g && n.onText(g), g ? n.onState("idle") : n.onState("error", "no-speech");
        } catch (g) {
          n.onState("error", g instanceof Rs ? g.code : "failed");
        }
      };
      return (async () => {
        try {
          if (a = await t.navigator.mediaDevices.getUserMedia({ audio: true }), h) return p();
          c = new i();
          const m = c.createMediaStreamSource(a);
          l = c.createScriptProcessor(4096, 1, 1), l.onaudioprocess = (g) => {
            h || o.push(new Float32Array(g.inputBuffer.getChannelData(0)));
          }, m.connect(l), l.connect(c.destination), d = setTimeout(() => {
            f();
          }, PS);
        } catch (m) {
          h = true, p(), n.onState("error", m.name === "NotAllowedError" ? "denied" : "unavailable");
        }
      })(), n.onState("listening"), { stop: () => {
        f();
      } };
    } };
  }
  function Ed(t, e, s) {
    const n = ES(e, s);
    if (!n.enabled || !s) return;
    if (n.whisperUrl && RS(t)) return LS(t, n.whisperUrl, s);
    const r = AS(t);
    return r ? TS(r, s) : void 0;
  }
  const CS = 2, ZS = 7, US = 10, FS = 30, Ti = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, Math.round(t))) : n;
  function Ii(t) {
    var _a3;
    const e = (_a3 = t.shells.config["quiz-arena"]) != null ? _a3 : {};
    return { roundLength: Ti(e.roundLength, 3, 12, ZS), bossLength: Ti(e.bossLength, 4, 20, US), timerSeconds: Ti(e.timerSeconds, 5, 120, FS) };
  }
  function Mi(t, e) {
    const s = new Set(dn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective));
  }
  const Ad = (t, e) => {
    var _a3;
    const s = t.items.find((n) => n.id === e);
    return (_a3 = t.objectives.find((n) => n.id === (s == null ? void 0 : s.objective))) == null ? void 0 : _a3.unit;
  };
  function BS(t) {
    var _a3, _b3;
    const e = (_b3 = (_a3 = t.extensions) == null ? void 0 : _a3.language) == null ? void 0 : _b3.verbUnits;
    return Array.isArray(e) ? e.filter((s) => typeof s == "string") : [];
  }
  function Oi(t) {
    const e = new Set(BS(t));
    if (e.size === 0) return [];
    const s = new Set(t.objectives.filter((n) => e.has(n.unit)).map((n) => n.id));
    return t.items.filter((n) => n.kind === "conjugation" && s.has(n.objective));
  }
  function Td(t, e, s) {
    return Oi(t).filter((n) => Kn(e[n.id], s)).length;
  }
  function KS(t, e, s, n) {
    const r = Oi(t), i = r.filter((l) => Kn(e[l.id], s)).sort((l, d) => e[l.id].due - e[d.id].due), o = r.filter((l) => e[l.id] === void 0 || e[l.id].last === null), a = new Set([...i, ...o].map((l) => l.id)), c = r.filter((l) => !a.has(l.id)).sort((l, d) => e[l.id].ease - e[d.id].ease);
    return [...i, ...o, ...c].slice(0, Math.max(0, n)).map((l) => l.id);
  }
  function qS(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    const n = Ii(t), r = (_a3 = s.exclude) != null ? _a3 : /* @__PURE__ */ new Set();
    let i, o;
    if (e === "unit") i = Mi(t, (_b3 = s.unitId) != null ? _b3 : "").map((a) => a.id).filter((a) => !r.has(a)), o = Math.min(n.roundLength, i.length);
    else if (e === "verbs") i = KS(t, (_c2 = s.cards) != null ? _c2 : {}, (_d2 = s.now) != null ? _d2 : 0, n.roundLength), o = i.length;
    else if (e === "boss") i = t.items.map((a) => a.id).filter((a) => !r.has(a)), o = Math.min(n.bossLength, i.length);
    else {
      const a = new Set(t.items.map((c) => c.id));
      i = ((_e2 = s.queue) != null ? _e2 : []).filter((c) => a.has(c) && !r.has(c)), o = Math.min(n.roundLength, i.length);
    }
    return { kind: e, ...s.unitId ? { unitId: s.unitId } : {}, size: o, pool: i, asked: [], session: bc(), adaptive: Ec((_f2 = s.difficulty) != null ? _f2 : e === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  function GS(t, e = {}) {
    var _a3, _b3, _c2;
    const s = [...new Set(t)], n = (_a3 = e.kind) != null ? _a3 : "unit";
    return { kind: n, ...e.unitId ? { unitId: e.unitId } : {}, size: Math.max(0, Math.min((_b3 = e.size) != null ? _b3 : s.length, s.length)), pool: s, asked: [], session: bc(), adaptive: Ec((_c2 = e.difficulty) != null ? _c2 : n === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  const Kn = (t, e) => t !== void 0 && t.last !== null && t.due <= e;
  function Id(t, e, s, n, r) {
    const i = new Map(e.items.map((l) => [l.id, l])), o = t.results.at(-1), a = t.session.pending.filter((l) => l.dueAt <= t.session.answered && l.id !== (o == null ? void 0 : o.id)).sort((l, d) => l.dueAt - d.dueAt)[0];
    if (a) return { id: a.id, retry: true };
    if (t.asked.length < t.size && t.pool.length > 0) {
      let l = t.pool.map((m) => i.get(m)).filter((m) => m !== void 0);
      const d = l.filter((m) => Kn(n[m.id], r));
      d.length > 0 && t.dueTaken < Math.ceil(t.size / 2) && (l = d);
      const h = o ? i.get(o.id) : void 0, p = h ? l.filter((m) => m.id === h.id || m.kind === h.kind || t.kind === "boss" && Ad(e, m.id) === Ad(e, h.id)).map((m) => m.id) : [], f = t.kind === "verbs" ? l[0] : Lb(l.map((m) => ({ id: m.id, difficulty: m.difficulty })), t.adaptive, s, p);
      if (f) return { id: f.id, retry: false };
    }
    const c = [...t.session.pending].sort((l, d) => l.dueAt - d.dueAt)[0];
    return c ? { id: c.id, retry: true } : null;
  }
  function Ni(t, e, s, n, r, i = {}, o = 0) {
    var _a3;
    let a = ab(t.session, e.id, r);
    ((_a3 = a.misses[e.id]) != null ? _a3 : 0) > CS && (a = { ...a, pending: a.pending.filter((l) => l.id !== e.id) });
    const c = !e.retry;
    return { ...t, session: a, adaptive: Db(t.adaptive, n.correct), pool: c ? t.pool.filter((l) => l !== e.id) : t.pool, asked: c ? [...t.asked, e.id] : t.asked, dueTaken: c && Kn(i[e.id], o) ? t.dueTaken + 1 : t.dueTaken, results: [...t.results, { id: e.id, kind: s.kind, retry: e.retry, correct: n.correct, score: n.score, grade: r }] };
  }
  function Pi(t) {
    const e = t.results.filter((s) => !s.retry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n.score, 0) / e.length;
  }
  const Ri = (t) => [...new Set(t.results.filter((e) => !e.retry && !e.correct).map((e) => e.id))];
  function Md(t, e, s) {
    return t.kind === "flashcard" && fc(e) ? e : s.correct ? s.partial || s.typo || s.diacritics ? "hard" : "good" : t.kind === "conjugation" && s.partial && s.score >= 0.5 ? "hard" : "again";
  }
  function WS(t) {
    var _a3;
    return t.kind === "flashcard" || t.kind === "crossword" || t.kind === "word-search" || t.kind === "typed" || t.kind === "conjugation" ? false : t.kind === "listening" ? t.mode !== "type" : t.kind === "cloze" ? ((_a3 = t.gaps) != null ? _a3 : []).every((e) => e.bank !== void 0) : true;
  }
  function Od(t) {
    const e = t.screen === "item" || t.screen === "feedback";
    return { screen: t.screen, shell: t.shell, lang: t.lang, seed: t.seed, ...t.unitId ? { unitId: t.unitId } : {}, ...t.roundNumber !== void 0 && t.roundNumber > 0 ? { round: t.roundNumber } : {}, ...t.roundKind ? { roundKind: t.roundKind } : {}, ...e && t.itemId ? { itemId: t.itemId } : {}, ...e && t.itemKind ? { itemKind: t.itemKind } : {}, ...e && t.itemIndex !== void 0 ? { itemIndex: t.itemIndex } : {}, ...t.roundSize !== void 0 && t.roundKind ? { roundSize: t.roundSize } : {}, combo: t.combo, score: t.score, ...t.lastResult && t.screen === "feedback" ? { lastResult: { correct: t.lastResult.correct, ...t.lastResult.typo ? { typo: true } : {}, ...t.lastResult.diacritics ? { diacritics: true } : {} } } : {}, reviewQueue: [...t.reviewQueue], mastery: { ...t.mastery }, finished: t.finished, steps: t.steps, ...e && t.context ? { context: t.context } : {}, ...t.view ? { view: JSON.parse(JSON.stringify(t.view)) } : {} };
  }
  function Nd(t, e, s) {
    var _a3, _b3, _c2;
    const n = (_c2 = (_b3 = t[e]) != null ? _b3 : t[(_a3 = e.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (r, i) => {
      var _a4, _b4, _c3;
      let o = (_c3 = (_b4 = (_a4 = s == null ? void 0 : s.strings["ui.".concat(r)]) != null ? _a4 : n[r]) != null ? _b4 : t.en[r]) != null ? _c3 : r;
      if (i) for (const [a, c] of Object.entries(i)) o = o.split("{".concat(a, "}")).join(String(c));
      return o;
    };
  }
  function HS(t, e, s, n) {
    return e ? u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: "setting-speak", ...s ? { checked: true } : {}, onchange: (r) => n(r.target.checked) }), u("span", { class: "toggle-text" }, u("b", {}, t("speak.setting")), u("small", { testid: "speak-privacy" }, t(e.kind === "whisper" ? "speak.privacy.local" : "speak.privacy.web")))) : null;
  }
  const Ze = (t, e = {}) => ue("path", { d: t, ...e }), Pd = (t, e, s, n = {}) => ue("circle", { cx: t, cy: e, r: s, ...n }), VS = { "quiz-arena": () => [Pd(16, 17, 11), Ze("M16 10v7l4 3"), Ze("M13 3h6")], encyclopedia: () => [Ze("M16 8c-3-2-7-2.5-11-2v18c4-.5 8 0 11 2 3-2 7-2.5 11-2V6c-4-.5-8 0-11 2z"), Ze("M16 8v18")], mindmaze: () => [Ze("M5 27V9h4v3h4V9h6v3h4V9h4v18z"), Ze("M13 27v-7a3 3 0 0 1 6 0v7")], rpg: () => [Ze("M7 25 22 10l3-6 3 3-6 3L7 25"), Ze("M5 27l3-3M9 21l3 3")], roleplay: () => [Ze("M4 6h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H11l-4 4v-4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"), Ze("M24 12h2a2 2 0 0 1 2 2v7a1 1 0 0 1-1 1h-3v3l-4-3h-5")], detective: () => [Pd(13, 13, 8), Ze("M19 19l9 9")] };
  function YS(t) {
    var _a3, _b3;
    const e = ue("svg", { viewBox: "0 0 32 32", width: 32, height: 32, fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", focusable: "false", class: "mode-icon" }), s = (_b3 = (_a3 = VS[t]) == null ? void 0 : _a3.call(VS)) != null ? _b3 : [Ze("M16 4l3.7 7.8 8.3 1-6.1 5.8 1.6 8.4L16 22.8 8.5 27l1.6-8.4L4 12.8l8.3-1z")];
    for (const n of s) e.appendChild(n);
    return e;
  }
  const JS = "menu";
  function qn(t, e, s) {
    const n = e === "title" ? JS : s;
    t.getAttribute("data-edu-theme") !== n && t.setAttribute("data-edu-theme", n);
  }
  const QS = (t) => {
    try {
      const e = new Intl.DisplayNames([t], { type: "language" }).of(t);
      return e ? e.charAt(0).toLocaleUpperCase(t) + e.slice(1) : t.toUpperCase();
    } catch (e) {
      return t.toUpperCase();
    }
  }, Di = (t, e) => {
    const s = t(e);
    return s && s !== e ? s : void 0;
  }, XS = (t, e) => {
    var _a3;
    return (_a3 = Di(t, "mode.".concat(e, ".name"))) != null ? _a3 : e;
  }, ts = () => ({ confirmReset: false, message: null });
  function e1(t) {
    if (t.shells.length < 2) return null;
    const e = t.ui;
    return u("div", { class: "mode-picker", role: "group", "aria-label": e("start.choose"), testid: "shell-picker" }, u("p", { class: "mode-picker-label", "aria-hidden": "true" }, e("start.choose")), u("div", { class: "mode-grid" }, t.shells.map((s) => {
      var _a3;
      return I("shell-".concat(s), [u("span", { class: "mode-pictogram" }, YS(s)), u("span", { class: "mode-text" }, u("b", { class: "mode-name" }, XS(e, s)), u("small", { class: "mode-blurb" }, (_a3 = Di(e, "mode.".concat(s, ".blurb"))) != null ? _a3 : "")), u("span", { class: "mode-dot", "aria-hidden": "true" })], () => {
        s !== t.shellId && t.switchShell(s);
      }, { class: "mode-card", "data-mode": s, "aria-pressed": String(s === t.shellId) });
    })));
  }
  function Rd(t, e, s, n, r) {
    return u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: t, ...n ? { checked: true } : {}, onchange: (i) => r(i.target.checked) }), u("span", { class: "toggle-text" }, u("b", {}, e), s ? u("small", {}, s) : null));
  }
  function Dd(t, e, s, n) {
    var _a3, _b3;
    const r = t.ui, i = t.pack, o = t.courseTitle(), a = (y, $) => {
      n.message = { text: y, kind: $ }, s();
    }, c = (y) => {
      t.progress = { ...t.progress, settings: { ...t.progress.settings, ...y } }, t.save();
    }, l = i.languages.length > 1 ? u("div", { class: "lang-picker", role: "group", "aria-label": r("language"), testid: "lang-picker" }, i.languages.map((y) => I("lang-".concat(y), QS(y), () => {
      t.setLang(y), s();
    }, { class: "chip", "aria-pressed": String(y === t.lang), lang: y }))) : null, d = i.cues.length ? Rd("setting-sound", r("sound"), null, !!t.progress.settings.sound, (y) => {
      c({ sound: y }), t.refreshAudio();
    }) : null, h = i.cues.length ? Rd("setting-reduce-audio", r("reduceAudio"), r("reduceAudio.hint"), !!t.progress.settings.reduceAudio, (y) => {
      c({ reduceAudio: y }), t.refreshAudio();
    }) : null, p = HS(r, t.speechService, t.progress.settings.speak !== false, (y) => c({ speak: y })), f = u("input", { type: "file", accept: "application/json,.json", class: "sr-only", testid: "import-file", tabindex: "-1", "aria-label": r("import"), onchange: (y) => {
      var _a4;
      const $ = (_a4 = y.target.files) == null ? void 0 : _a4[0];
      $ && $.text().then((x) => {
        const z = md(x, i);
        if (!z.ok) return a(r("import.bad", { why: z.error }), "bad");
        t.progress = z.progress, t.save();
        const _ = z.progress.settings.lang;
        _ && i.languages.includes(_) && _ !== t.lang && t.setLang(_), a(r("import.ok"), "ok");
      }, () => a(r("import.bad", { why: "unreadable" }), "bad"));
    } }), m = () => {
      try {
        const y = new Blob([uS(t.progress)], { type: "application/json" }), $ = URL.createObjectURL(y), x = u("a", { href: $, download: "".concat(i.slug, "-progress.json"), class: "sr-only" });
        document.body.appendChild(x), x.click(), x.remove(), window.setTimeout(() => URL.revokeObjectURL($), 2e3), a(r("export.done"), "ok");
      } catch (y) {
        a(String(y instanceof Error ? y.message : y), "bad");
      }
    }, g = n.confirmReset ? u("span", { class: "confirm", role: "group", "aria-label": r("reset.confirm") }, u("span", {}, r("reset.confirm")), I("reset-confirm", r("reset.yes"), () => {
      t.reset(), n.confirmReset = false, a(r("reset.done"), "ok");
    }, { class: "btn btn-danger btn-small" }), I("reset-cancel", r("reset.no"), () => {
      n.confirmReset = false, s();
    }, { class: "btn btn-small", "data-autofocus": "" })) : I("reset", r("reset"), () => {
      n.confirmReset = true, s();
    }, { class: "btn btn-small btn-ghost" }), k = i.subject.charAt(0).toLocaleUpperCase() + i.subject.slice(1), b = n.message;
    n.message = null;
    const v = e.settings || d || h || p ? u("div", { class: "settings" }, (_a3 = e.settings) != null ? _a3 : null, d, h, p) : null, w = Di(r, "mode.".concat(t.shellId, ".blurb"));
    return u("section", { class: "title-screen start-screen shell-title shell-title-".concat(t.shellId) }, u("header", { class: "start-head" }, w ? u("p", { class: "eyebrow", testid: "mode-blurb" }, w) : null, u("h1", { class: "screen-title", tabindex: "-1", testid: "course-title" }, o), o.toLocaleLowerCase() === i.subject.toLocaleLowerCase() ? null : u("p", { class: "subject", testid: "course-subject" }, k), u("p", { class: "audience" }, i.audience)), bS({ pack: i, ui: r, unitTitle: (y) => t.unitTitle(y), getProgress: () => t.progress, setProgress: (y) => {
      t.progress = y;
    }, save: () => t.save(), say: a }), l, e1(t), v, u("div", { class: "actions actions-center" }, I("start", (_b3 = e.startLabel) != null ? _b3 : t.started ? r("continue") : r("start"), () => e.onStart(), { class: "btn btn-primary btn-big", ...n.confirmReset ? {} : { "data-autofocus": "" } })), u("div", { class: "progress-tools", role: "group", "aria-label": r("export") + " / " + r("import") }, I("export", r("export"), m, { class: "btn btn-small btn-ghost" }), I("import", r("import"), () => f.click(), { class: "btn btn-small btn-ghost" }), f, g), b ? u("p", { class: "message message-".concat(b.kind), role: "status", testid: "title-message" }, b.text) : null, t.persistent ? null : u("p", { class: "message message-bad", testid: "storage-warning" }, r("storage.off")));
  }
  const t1 = (t, e) => {
    var _a3;
    const s = t.pack.languages;
    if (e && s.includes(e)) return e;
    const n = (typeof navigator < "u" ? (_a3 = navigator.languages) != null ? _a3 : [navigator.language] : []).map((r) => r.toLowerCase());
    for (const r of n) {
      const i = s.find((o) => o === r || o === r.split("-")[0]);
      if (i) return i;
    }
    return s.includes(t.defaultLang) ? t.defaultLang : s[0];
  }, s1 = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]);
  function n1(t, e) {
    return t === "end" ? "end" : e.roundKind === "boss" ? "boss" : t !== "title" && e.roundKind !== "review" && e.unitId ? "unit-".concat(e.unitId) : "menu";
  }
  class Ds {
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
      __publicField(this, "playTimer", new wd(() => this.progress, (e) => {
        this.progress = e;
      }, () => this.save()));
      __publicField(this, "gameAudio", null);
      __publicField(this, "extra", {});
      __publicField(this, "strings");
      __publicField(this, "onKey", (e) => {
        var _a3;
        e.defaultPrevented || this.questionKeys && this.questionKeys(e) || this.questionKeys || ((_a3 = this.keyHandler) == null ? void 0 : _a3.call(this, e));
      });
      __publicField(this, "speechMade", null);
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.shellId = s.shellId, this.theme = s.theme, this.strings = s.strings, this.store = new kd(this.pack, bd()), this.progress = this.store.load(), this.rng = Kt(e.seed, s.shellId), this.lang = t1(this.data, this.progress.settings.lang), this.text = Gt(this.data.catalogs, this.lang, this.pack.targetLang), this.ui = Ms(this.lang, this.data.catalogs[this.lang]), this.s = Nd(this.strings, this.lang, this.data.catalogs[this.lang]), this.check = qt({ pack: this.pack, text: this.text }), this.applyLang();
    }
    mount() {
      const e = this.host.root;
      e.classList.add("edu-stage"), qn(e, "title", this.theme), e.setAttribute("data-shell", this.shellId), document.addEventListener("keydown", this.onKey), this.playTimer.start();
    }
    get audio() {
      return this.gameAudio || (this.gameAudio = new _d({ cues: this.pack.cues, assets: this.data.assets, loops: zd(this.pack.extensions), settings: () => this.progress.settings })), this.gameAudio;
    }
    unmount() {
      var _a3;
      this.playTimer.dispose(), (_a3 = this.gameAudio) == null ? void 0 : _a3.dispose(), this.gameAudio = null, document.removeEventListener("keydown", this.onKey), this.questionKeys = null, this.host.setDebug(null), this.host.root.removeAttribute("data-shell");
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
      this.pack.languages.includes(e) && (this.lang = e, this.text = Gt(this.data.catalogs, e, this.pack.targetLang), this.ui = Ms(e, this.data.catalogs[e]), this.s = Nd(this.strings, e, this.data.catalogs[e]), this.check = qt({ pack: this.pack, text: this.text }), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.applyLang());
    }
    t(e) {
      return e ? this.text.t(e) : "";
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    section() {
      return S0(this.pack, this.shellId);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Ed(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    get specialLetters() {
      var _a3, _b3;
      return (_b3 = Kl[(_a3 = this.pack.targetLang) != null ? _a3 : this.lang]) != null ? _b3 : [];
    }
    save() {
      this.store.save(this.progress);
    }
    get sp() {
      var _a3;
      return (_a3 = this.progress.shells[this.shellId]) != null ? _a3 : od();
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
      return pS(this.progress, this.shellId) || gd(this.progress);
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
      return Un(this.view(), e);
    }
    isUnlocked(e) {
      return Fn(this.pack, this.view(), e);
    }
    allMastered() {
      return _i(this.pack, this.view());
    }
    totalStars() {
      return ld(this.pack, this.view());
    }
    mastery() {
      return cd(this.pack, this.view());
    }
    recordUnit(e, s) {
      const n = this.view(), r = dd(n, "boss" in e ? { boss: true } : { unitId: e.unitId }, s);
      return this.setSp({ ...this.sp, units: r.units, boss: r.boss }), { stars: zi(s), unlocked: ad(this.pack, n, r) };
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
      return Mi(this.pack, e);
    }
    canAsk(e) {
      return !!e && !!this.host.getItemRenderer(e.kind) && !Xl(e, fd(this.progress));
    }
    queueItems() {
      return this.progress.queue.map((e) => this.item(e)).filter((e) => !!e);
    }
    itemContext(e, s) {
      const n = "".concat(this.host.seed, ":").concat(this.shellId, ":").concat(e.id, ":").concat(this.turn), r = new Map(this.pack.assets.map((i) => [i.id, i]));
      return { item: e, data: this.data, lang: this.lang, text: this.text, check: this.check, rng: new st(n), seed: n, assetUrl: (i) => i ? this.data.assets[i] : void 0, assetAlt: (i) => {
        const o = i ? r.get(i) : void 0;
        return o ? this.text.t(o.alt) : "";
      }, ui: (i, o) => this.ui(i, o), specialLetters: this.specialLetters, ...this.passageOpen ? { passageOpen: true } : {}, submit: s, duck: (i) => this.audio.duck(i), ...this.progress.settings.speak !== false && this.speechService ? { speech: this.speechService } : {} };
    }
    answer(e, s, n = {}) {
      const r = n.retry === true, i = n.timedOut === true, o = i ? fn(e, void 0, this.check) : fn(e, s, this.check), a = Md(e, s, o), c = Date.now(), l = this.progress;
      let d = l.queue;
      o.correct ? r || (d = hd(d, e.id)) : d = ud(d, e.id);
      let h = Math.round(100 * o.score);
      o.correct ? (h += Math.min(this.combo, 10) * 10, r && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.steps += 1, this.progress = { ...l, cards: { ...l.cards, [e.id]: kc(pd(l, e.id, c), a, c) }, queue: d, score: l.score + h, bestCombo: Math.max(l.bestCombo, this.combo), answered: l.answered + (r ? 0 : 1), right: l.right + (!r && o.correct ? 1 : 0) }, this.save();
      const p = xd(e, s, o, { text: this.text, ui: this.ui, rng: this.rng }, i);
      return { item: e, answer: s, result: o, grade: a, points: h, feedback: p, retry: r, timedOut: i };
    }
    startRun(e, s = {}) {
      const n = e.filter((r) => this.canAsk(this.item(r)));
      return GS(n, s);
    }
    next(e) {
      return Id(e, this.pack, this.rng, this.progress.cards, Date.now());
    }
    record(e, s, n) {
      return Ni(e, s, n.item, n.result, n.grade, this.progress.cards, Date.now());
    }
    accuracy(e) {
      return Pi(e);
    }
    publish(e = this.screen, s = this.extra) {
      var _a3, _b3;
      this.screen = e, this.extra = s, this.pack.cues.length && this.audio.setArea(n1(e, s)), this.host.publish(Od({ screen: e, shell: this.shellId, lang: this.lang, seed: this.host.seed, ...s.roundKind ? { roundKind: s.roundKind, roundSize: (_a3 = s.roundSize) != null ? _a3 : 0, ...s.roundNumber ? { roundNumber: s.roundNumber } : {} } : {}, ...s.unitId ? { unitId: s.unitId } : {}, ...s.item ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: (_b3 = s.item.index) != null ? _b3 : 0 } : {}, ...s.lastResult ? { lastResult: s.lastResult } : {}, ...s.context ? { context: s.context } : {}, ...s.view ? { view: s.view } : {}, combo: this.combo, score: this.progress.score, reviewQueue: this.progress.queue, mastery: this.mastery(), finished: this.finished, steps: this.steps }));
    }
    render(e, s, n = {}, r = {}) {
      var _a3, _b3;
      const i = this.host.root;
      qn(i, e, this.theme), As(i);
      const o = u("main", { class: "board board-".concat(e), id: "edu-main" }, s), a = u("div", { class: "edu-app shell-".concat(this.shellId), testid: "app", "data-screen": e, "data-shell": this.shellId }, u("div", { class: "frame" }, o), u("div", { class: "burst-layer", "aria-hidden": "true" }), u("div", { class: "sr-only", role: "status", "aria-live": "polite", testid: "live" }));
      return i.appendChild(a), this.publish(e, n), r.focus !== false && ((_b3 = (_a3 = o.querySelector("[data-autofocus]")) != null ? _a3 : o.querySelector("h1, h2")) == null ? void 0 : _b3.focus({ preventScroll: false }), typeof window.scrollTo == "function" && window.scrollTo(0, 0)), o;
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
      return u("span", { class: "stars", role: "img", "aria-label": this.ui("stars", { n: e }), "data-stars": String(e), ...s ? { testid: s } : {} }, [1, 2, 3].map((n) => u("span", { class: "star ".concat(n <= e ? "on" : "off"), "aria-hidden": "true" }, n <= e ? "★" : "☆")));
    }
    playCue(e) {
      this.pack.cues.length && this.audio.sfx(e);
    }
  }
  function lt(t, e) {
    var _a3, _b3, _c2, _d2;
    const { item: s } = e, n = t.host.getItemRenderer(s.kind);
    if (!n) return console.warn('[EduEngine] no renderer for the item kind "'.concat(s.kind, '"; ').concat(t.shellId, " skips ").concat(s.id)), null;
    const r = t.ui;
    t.turn += 1;
    let i = null;
    const o = (A) => i ? i.outcome ? i.outcome.result : x(A) : { correct: false, score: 0, expected: null, invalid: true }, a = n.render(t.itemContext(s, o)), c = (A) => {
      var _a4, _b4;
      return { context: e.context, item: { id: s.id, kind: s.kind, index: (_a4 = e.index) != null ? _a4 : 0 }, ...e.unitId ? { unitId: e.unitId } : {}, ...e.roundKind ? { roundKind: e.roundKind, roundSize: (_b4 = e.roundSize) != null ? _b4 : 0 } : {}, ...e.view ? { view: e.view() } : {}, ...A ? { lastResult: A.result } : {} };
    }, l = s.hint && t.text.hasText(s.hint) ? t.text.t(s.hint) : null;
    let d = false;
    const h = u("p", { class: "hint-text", testid: "hint-text", hidden: true }, l != null ? l : ""), p = l ? I("hint", "💡 ".concat(r("hint")), () => {
      d = !d, h.hidden = !d, p == null ? void 0 : p.setAttribute("aria-expanded", String(d));
    }, { class: "btn btn-small btn-ghost", "aria-expanded": "false" }) : null, f = e.onLeave ? I("leave", "‹ ".concat((_a3 = e.leaveLabel) != null ? _a3 : r("leave")), () => {
      var _a4;
      i == null ? void 0 : i.close(), (_a4 = e.onLeave) == null ? void 0 : _a4.call(e);
    }, { class: "btn btn-small btn-ghost" }) : null, m = u("p", { class: "q-meta", testid: "question-number" }, e.retry ? u("span", { class: "tag tag-retry", testid: "retry-tag" }, r("retry")) : null, (_b3 = e.lead) != null ? _b3 : null), g = n.ownsPrompt ? u("h1", { class: "sr-only" }, typeof e.lead == "string" ? e.lead : r("question.lead")) : u("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, t.text.t(s.prompt)), k = t.itemContext(s, o), b = s1.has(s.kind) ? null : Wl(k), v = u("div", { class: "item-body kind-".concat(s.kind), testid: "item-body", "data-kind": s.kind }, a.el), w = u("div", { class: "feedback-slot", "aria-live": "polite" }), y = u("section", { class: "question shell-question context-".concat(e.context), "aria-label": t.text.t(s.prompt) }, f || e.hud ? u("header", { class: "shell-hud" }, f, (_c2 = e.hud) != null ? _c2 : null) : null, m, g, b, p, h, v, w), $ = () => {
      var _a4;
      t.questionKeys === R && (t.questionKeys = null), (_a4 = a.destroy) == null ? void 0 : _a4.call(a);
    };
    function x(A) {
      var _a4;
      const j = i, T = t.answer(s, A, { retry: e.retry === true });
      return j.outcome = T, a.reveal(T.result, A), (_a4 = e.onAnswered) == null ? void 0 : _a4.call(e, T), z(T), t.playCue(T.result.correct ? "correct" : "wrong"), T.result;
    }
    function z(A) {
      var _a4, _b4, _c3, _d3;
      const j = A.feedback, T = (_b4 = (_a4 = e.effect) == null ? void 0 : _a4.call(e, A)) != null ? _b4 : null, D = (H, ke, he, ...Ie) => u("div", { class: "fb-part ".concat(H), testid: ke }, u("h3", {}, he), Ie), G = typeof e.nextLabel == "function" ? e.nextLabel(A) : (_c3 = e.nextLabel) != null ? _c3 : r("next"), F = u("div", { class: "feedback is-".concat(j.verdict), testid: "feedback", "data-result": j.verdict, tabindex: "-1" }, u("h2", { class: "fb-title", testid: "feedback-title" }, u("span", { class: "fb-icon", "aria-hidden": "true" }, j.verdict === "correct" ? "✓" : j.verdict === "partial" ? "≈" : j.verdict === "timeout" ? "⏱" : "✗"), j.title), T ? u("p", { class: "fb-effect is-".concat(T.tone), testid: "feedback-effect" }, T.text) : null, j.notes.length ? u("ul", { class: "fb-notes", testid: "feedback-notes" }, j.notes.map((H) => u("li", {}, H))) : null, j.detail ? u("p", { class: "fb-detail", testid: "feedback-detail" }, j.detail) : null, j.whys.length ? D("fb-why", "feedback-why", r("fb.why"), j.whys.map((H) => u("p", {}, H))) : null, j.answer.length ? D("fb-answer", "feedback-answer", r("fb.answer"), j.answer.length === 1 ? u("p", { class: "fb-answer-text" }, j.answer[0]) : u("ul", {}, j.answer.map((H) => u("li", {}, H)))) : null, j.explanation ? D("fb-explain", "feedback-explanation", r("fb.explain"), u("p", {}, j.explanation)) : null, j.dyk ? D("fb-dyk", "feedback-dyk", "💡 ".concat(r("fb.dyk")), u("p", {}, j.dyk)) : null, u("div", { class: "actions" }, I("next", G, () => O(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      w.appendChild(F), v.classList.add("is-answered"), t.markScreen("feedback"), t.publish("feedback", c(A)), t.live("".concat(j.title, ". ").concat(T ? "".concat(T.text, " ") : "").concat(j.whys.join(" "), " ").concat(j.answer.join(". "))), Is(v, A.result.correct ? "fx-glow" : "fx-shake"), typeof F.scrollIntoView == "function" && F.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_d3 = t.host.root.querySelector('[data-testid="next"]')) == null ? void 0 : _d3.focus({ preventScroll: true });
    }
    let _ = false;
    function O() {
      const A = i == null ? void 0 : i.outcome;
      !A || _ || (_ = true, $(), e.onNext(A));
    }
    const R = (A) => {
      var _a4, _b4;
      const j = i;
      if (!j) return false;
      if (!j.outcome) return Ts(A.target) && /^[0-9]$/.test(A.key) ? true : (_b4 = (_a4 = a.key) == null ? void 0 : _a4.call(a, A)) != null ? _b4 : false;
      if (A.key === "Enter" || A.key === " ") {
        const T = A.target;
        return T && (T.tagName === "BUTTON" || T.tagName === "A" || T.tagName === "INPUT" || T.tagName === "SELECT" || T.getAttribute("role") === "button") || (A.preventDefault(), O()), true;
      }
      return false;
    };
    i = { item: s, view: a, close: $ }, t.render("item", y, c(), { focus: false }), t.questionKeys = R, a.focus();
    const S = t.host.root.querySelector("#edu-main");
    return (S == null ? void 0 : S.contains(document.activeElement)) || ((_d2 = S == null ? void 0 : S.querySelector("[data-autofocus], .prompt")) == null ? void 0 : _d2.focus()), i;
  }
  function r1(t) {
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
      t.store.clear(), t.progress = Ns(t.pack.id), t.combo = 0, t.finished = false;
    } };
  }
  function Ls(t, e, s, n) {
    return Dd(r1(t), e, s, n);
  }
  function Cs(t, e) {
    var _a3, _b3;
    const s = t.ui, n = t.progress, r = n.answered > 0 ? Math.round(n.right / n.answered * 100) : 0;
    return u("section", { class: "end-screen shell-end shell-end-".concat(t.shellId) }, u("p", { class: "eyebrow" }, t.courseTitle()), u("h1", { class: "screen-title", tabindex: "-1", testid: "end-title" }, (_a3 = e.title) != null ? _a3 : s("end.title")), e.sub ? u("p", { class: "subject" }, e.sub) : null, u("ul", { class: "end-stars", testid: "end-units" }, t.units().map((i) => u("li", {}, u("span", {}, t.t(i.title)), t.stars(t.unitStars(i.id))))), (_b3 = e.stats) != null ? _b3 : null, u("p", { class: "big-number", testid: "end-score" }, "".concat(s("end.score"), ": ").concat(n.score)), u("p", { testid: "end-accuracy" }, s("end.accuracy", { n: r })), u("div", { class: "actions actions-center" }, I("play-again", s("end.again"), () => e.onAgain(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), I("to-title", s("end.title.screen"), () => e.onTitle(), { class: "btn btn-big" })));
  }
  const be = (t, e = {}, ...s) => ue(t, e, ...s);
  function Ld(t) {
    const e = t === "locked" ? [be("path", { class: "dr-shackle", d: "M24 38 v-7 a8 8 0 0 1 16 0 v7" }), be("rect", { class: "dr-lock", x: 20, y: 38, width: 24, height: 18, rx: 3 }), be("circle", { class: "dr-keyhole", cx: 32, cy: 46, r: 2.5 })] : [];
    return be("svg", { class: "det-door-svg is-".concat(t), viewBox: "0 0 64 80", "aria-hidden": "true", focusable: "false" }, be("rect", { class: "dr-frame", x: 6, y: 4, width: 52, height: 72, rx: 2 }), be("rect", { class: "dr-opening", x: 11, y: 9, width: 42, height: 67 }), t === "locked" ? be("rect", { class: "dr-panel", x: 11, y: 9, width: 42, height: 67 }) : be("path", { class: "dr-panel dr-ajar", d: "M11 9 L30 14 V76 H11 Z" }), t === "locked" ? be("path", { class: "dr-plank", d: "M11 30 H53 M11 52 H53" }) : be("path", { class: "dr-plank", d: "M11 30 L30 32 M11 52 L30 52" }), t === "locked" ? be("circle", { class: "dr-knob", cx: 47, cy: 44, r: 2.6 }) : be("circle", { class: "dr-knob", cx: 26, cy: 44, r: 2.4 }), t === "solved" ? be("path", { class: "dr-tick", d: "M34 36 l6 7 l12 -14" }) : be("g", {}), ...e);
  }
  function Li() {
    return be("svg", { class: "det-mag-svg", viewBox: "0 0 40 40", "aria-hidden": "true", focusable: "false" }, be("circle", { class: "mg-ring", cx: 17, cy: 17, r: 10 }), be("path", { class: "mg-handle", d: "M25 25 L35 35" }));
  }
  function i1(t, e, s, n) {
    const r = ue("svg", { class: "det-strings", "aria-hidden": "true", focusable: "false" }), i = /* @__PURE__ */ new Map(), o = t.categories.map((f) => u("div", { class: "det-cork-col", "data-category": f.key }, u("h3", { class: "det-cork-label" }, s(f.key)), u("ul", { class: "det-cork-list" }, f.items.map((m) => {
      const g = u("li", { class: "det-pinned", "data-entity": m, testid: "board-entity-".concat(m) }, u("span", { class: "det-pin", "aria-hidden": "true" }), e(m));
      return i.set(m, g), g;
    })))), a = u("div", { class: "det-cork", testid: "board" }, r, u("div", { class: "det-cork-cols" }, o));
    let c = n;
    const l = () => {
      for (; r.firstChild; ) r.removeChild(r.firstChild);
      const f = a.getBoundingClientRect();
      if (f.width !== 0) {
        r.setAttribute("viewBox", "0 0 ".concat(Math.round(f.width), " ").concat(Math.round(f.height)));
        for (const m of rt(t)) {
          if (vt(c, m) !== "yes") continue;
          const [g, k] = Re(m), b = i.get(g), v = i.get(k);
          if (!b || !v) continue;
          const w = b.getBoundingClientRect(), y = v.getBoundingClientRect(), $ = w.left <= y.left ? w : y, x = $ === w ? y : w, z = $.right - f.left, _ = $.top + $.height / 2 - f.top, O = x.left - f.left, R = x.top + x.height / 2 - f.top, S = Math.min(26, Math.abs(O - z) * 0.12 + 6), A = "M ".concat(z.toFixed(1), " ").concat(_.toFixed(1), " Q ").concat(((z + O) / 2).toFixed(1), " ").concat(((_ + R) / 2 + S).toFixed(1), " ").concat(O.toFixed(1), " ").concat(R.toFixed(1));
          r.appendChild(ue("path", { class: "det-string", d: A, testid: "string-".concat(g, "-").concat(k) }));
        }
        for (const [m, g] of i) g.toggleAttribute("data-linked", rt(t).some((k) => vt(c, k) === "yes" && Re(k).includes(m)));
      }
    };
    let d = 0;
    const h = () => {
      d && cancelAnimationFrame(d), d = requestAnimationFrame(() => {
        d = 0, l();
      });
    }, p = typeof ResizeObserver == "function" ? new ResizeObserver(h) : null;
    return p == null ? void 0 : p.observe(a), h(), { el: a, update(f) {
      c = f, h();
    }, dispose() {
      p == null ? void 0 : p.disconnect(), d && cancelAnimationFrame(d);
    } };
  }
  const o1 = { "": "", no: "✕", yes: "✓" };
  function a1(t, e, s, n, r, i) {
    const o = /* @__PURE__ */ new Map(), a = (h, p, f) => {
      const m = o.get(h);
      if (!m) return;
      const [g, k] = Re(h), b = vt(p, h);
      m.setAttribute("data-mark", b === "" ? "blank" : b), m.setAttribute("aria-label", r.cell(s(g), s(k), r.mark(b))), m.toggleAttribute("data-hinted", h === f);
      const v = m.querySelector(".det-glyph");
      v && (v.textContent = o1[b]);
    }, c = $w(t).map((h) => u("figure", { class: "det-table-wrap" }, u("figcaption", { class: "det-table-cap" }, r.caption(n(h.rows.key), n(h.cols.key))), u("table", { class: "det-table", testid: "grid-".concat(h.key) }, u("thead", {}, u("tr", {}, u("td", { class: "det-corner" }), h.cols.items.map((p) => u("th", { scope: "col", class: "det-col" }, s(p))))), u("tbody", {}, h.rows.items.map((p) => u("tr", {}, u("th", { scope: "row", class: "det-row" }, s(p)), h.cols.items.map((f) => {
      const m = "".concat(p, "|").concat(f), g = u("button", { type: "button", class: "det-cell", testid: "cell-".concat(p, "-").concat(f), "data-cell": m, onclick: () => i(m) }, u("span", { class: "det-glyph", "aria-hidden": "true" }));
      return o.set(m, g), u("td", { class: "det-td" }, g);
    }))))))), l = u("div", { class: "det-grid", testid: "grid" }, c), d = (h, p = "") => {
      for (const f of rt(t)) a(f, h, p);
    };
    return d(e), { el: l, update: d };
  }
  function c1(t) {
    const e = new Map(t.places.map((a) => [a.id, a])), s = (a, c) => "".concat((a / c * 100).toFixed(2), "%"), n = (a) => a === t.here ? "here" : t.trail.includes(a) ? "visited" : t.options.includes(a) ? "option" : "other", r = t.trail.flatMap((a) => {
      const c = e.get(a);
      return c ? ["".concat(c.x, ",").concat(c.y)] : [];
    }), i = ue("svg", { class: "det-map-line", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), preserveAspectRatio: "none", "aria-hidden": "true", focusable: "false" }, ...r.length > 1 ? [ue("polyline", { class: "det-map-route", points: r.join(" "), fill: "none", testid: "route-line" })] : []), o = t.places.map((a) => {
      const c = n(a.id);
      return u("div", { class: "det-map-pin is-".concat(c), style: "left:".concat(s(a.x, t.width), ";top:").concat(s(a.y, t.height)), "data-state": c, testid: "pin-".concat(a.id) }, u("span", { class: "det-map-dot", "aria-hidden": "true" }), c === "other" ? null : u("span", { class: "det-map-name" }, a.name));
    });
    return u("div", { class: "det-map", testid: "map", style: "aspect-ratio:".concat(t.width, " / ").concat(t.height) }, t.src ? u("img", { class: "det-map-img", src: t.src, alt: t.alt, draggable: "false" }) : u("div", { class: "det-map-img", role: "img", "aria-label": t.alt }), i, o);
  }
  function l1(t, e) {
    return { roomId: e, cards: Array.from({ length: t }, () => null), run: null, seen: [], firstTry: {}, marks: {}, hints: 0, accusation: {}, wrongAccusations: 0, solved: false };
  }
  const Cd = (t) => t.cards.flatMap((e, s) => e === null ? [s + 1] : []), Zs = (t) => t.cards.filter((e) => e !== null).length, d1 = (t) => t.cards.flatMap((e, s) => e === null ? [] : ["c".concat(s + 1)]), u1 = (t) => t.cards.filter((e) => e !== null), h1 = (t, e) => {
    const s = new Set(u1(e));
    return t.filter((n) => !s.has(n));
  };
  function p1(t) {
    const e = Object.values(t.firstTry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n, 0) / e.length;
  }
  function f1(t, e, s, n, r) {
    const i = !t.seen.includes(s);
    return { ...t, seen: i ? [...t.seen, s] : t.seen, firstTry: i ? { ...t.firstTry, [s]: r } : t.firstTry, cards: n ? t.cards.map((o, a) => a === e - 1 ? s : o) : t.cards };
  }
  function m1(t, e, s) {
    if (Cd(e).length > 0) return { kind: "cards" };
    if (t.kind === "murdle" && ri(t).some((r) => !e.accusation[r])) return { kind: "pick" };
    const n = s(e.accusation, e.marks);
    return n.correct ? { kind: "right" } : { kind: "wrong", wrong: n.wrong };
  }
  const g1 = 8, k1 = 2, Zd = 1;
  function Ud(t, e) {
    const s = [...new Set(t.decoys.filter((n) => n !== t.to))].slice(0, 3);
    return e.shuffle([t.to, ...s]);
  }
  function b1(t, e) {
    return { at: t.start, leg: 0, hours: 0, heard: false, options: Ud(t.route[0], e), cold: 0, coldHere: false, trail: [t.start], caught: false, scores: [], firstChoice: true };
  }
  function Fd(t, e, s) {
    return { ...t, heard: true, hours: t.hours + (e ? 0 : Zd), scores: [...t.scores, s] };
  }
  function v1(t, e, s, n) {
    const r = e.route[t.leg];
    if (s !== r.to) return { right: false, state: { ...t, hours: t.hours + Zd, cold: t.cold + 1, coldHere: true, scores: t.firstChoice ? [...t.scores, 0] : t.scores, firstChoice: false } };
    const i = t.leg + 1, o = i >= e.route.length;
    return { right: true, state: { ...t, at: r.to, leg: i, hours: t.hours + k1, heard: false, coldHere: false, trail: [...t.trail, r.to], caught: o, scores: t.firstChoice ? [...t.scores, 1] : t.scores, firstChoice: true, options: o ? [] : Ud(e.route[i], n) } };
  }
  const w1 = (t) => t.scores.length === 0 ? 0 : t.scores.reduce((e, s) => e + s, 0) / t.scores.length;
  function ss(t) {
    const e = g1 + t, s = e % 24, n = Math.floor(e / 24) + 1, r = "".concat(String(s).padStart(2, "0"), ":00");
    return n > 1 ? "".concat(r, " (+").concat(n - 1, ")") : r;
  }
  const y1 = { en: { "det.tagline": "A case file to crack", "det.intro": "Every locked door has a case on it. Turn the clue cards by answering questions, work out who did it, and the door opens.", "det.office.title": "The case board", "det.office.lead": "Pick a case. A solved case opens the next door.", "det.office.rooms": "Escape rooms", "det.room.open": "Open the file", "det.room.again": "Reopen the case", "det.room.solved": "Solved", "det.room.locked": "Locked: solve {unit} with 2 stars first.", "det.room.final": "The final room", "det.room.final.locked": "Locked: master every room first.", "det.room.stars": "{n} of 3 stars", "det.finish": "Close the file", "det.finish.hint": "Solve the final challenge to close the file.", "det.finish.ready": "The final challenge is done. The file can be closed.", "det.office.progress": "{n} of {total} rooms solved", "det.room.resume": "Resume the case", "det.case.broken": "This case could not be made. Pick another one.", "det.grid.caption": "{rows} and {cols}", "det.chase.resume": "Continue the chase", "det.back": "Back to the case board", "det.title.screen": "Title screen", "det.case.crime": "The crime happened in {place}.", "det.case.clues": "Clue cards", "det.case.turned": "{n} of {total} clues turned", "det.case.no.cards": "Every card is face-up. Mark the grid, then accuse.", "det.clue.n": "Clue {n}", "det.clue.turn": "Turn over", "det.clue.down": "Clue {n}, face down. Answer a question to turn it over.", "det.clue.up": "Clue {n}, face up.", "det.clue.fact": "The fact from your answer", "det.case.grid": "The grid", "det.case.grid.help": "Press a cell: one press crosses it out, two mean yes, three clear it.", "det.mark.blank": "unknown", "det.mark.no": "no", "det.mark.yes": "yes", "det.cell.label": "{a} and {b}: {state}", "det.board.title": "The cork board", "det.board.help": "Every yes in the grid becomes a red string between the two.", "det.hint": "Ask for a hint", "det.hint.used": "Hints used: {n}", "det.accuse.title": "Your accusation", "det.accuse.row": "Who or what is it? {category}", "det.accuse.submit": "Make the accusation", "det.accuse.submit.grid": "Check the grid", "det.accuse.grid": "Fill the grid with the clues until every yes is marked, then check it.", "det.accuse.cards": "The file is incomplete: turn every clue card first. The case stays open.", "det.accuse.pick": "Choose one for every row first.", "det.accuse.wrong": "Not quite: look again at {what}. The case stays open.", "det.accuse.wrong.grid": "Something in the grid is not right. Check it against the clues. The case stays open.", "det.cat.suspect": "the suspect", "det.cat.weapon": "the weapon", "det.cat.place": "the place", "det.cat.motive": "the motive", "det.cat.suspect.label": "Suspect", "det.cat.weapon.label": "Weapon", "det.cat.place.label": "Place", "det.cat.motive.label": "Motive", "det.case.leave": "Back to the board", "det.case.nofacts": "No clue item could be asked, so the card turns by itself.", "det.hud.clue": "Clue {n} of {total}", "det.effect.up": "Clue {n} turns face-up.", "det.effect.down": "The card stays face-down. This one will be asked again.", "det.next.up": "Read the clue", "det.next.down": "Back to the case", "det.solved.title": "Case solved", "det.solved.stamp": "Solved", "det.solved.who": "The answer: {what}", "det.solved.door": "The door swings open.", "det.solved.door.final": "The final door swings open.", "det.solved.unlocked": "Now open: {units}", "det.solved.stars": "Stars for this case", "det.solved.accuracy": "First-try clue answers: {n} %", "det.solved.hints": "Hints used: {n}", "det.solved.facts": "What the clues rested on", "det.solved.more": "Two stars open the next doors. Solve the case again for more.", "det.solved.again": "Solve it again", "det.chase.title": "The chase", "det.chase.lead": "The suspect is on the run. At each place a witness saw something: answer the question to hear it, then pick where the suspect went.", "det.chase.start": "Start the chase", "det.chase.again": "Chase again", "det.chase.locked": "Locked: master {unit} first.", "det.chase.caught.tag": "Caught", "det.chase.suspect": "On the run: {who}", "det.chase.at": "You are in {place}.", "det.chase.clock": "Clock", "det.chase.clock.label": "The clock shows {time}", "det.chase.ask": "Question the witness", "det.chase.witness": "The witness says", "det.chase.heard": "Where did she go?", "det.chase.travel": "Travel to {place}", "det.chase.cold": "A cold trail: the suspect did not go to {place}. It costs an hour and you are back in {back}.", "det.chase.warm": "You follow the trail to {place}.", "det.chase.hazy": "The witness took a while to remember: that cost an hour.", "det.chase.map": "A map of the places in the chase", "det.chase.legs": "Leg {n} of {total}", "det.chase.leave": "Leave the chase", "det.chase.effect.right": "The witness remembers it clearly.", "det.chase.effect.wrong": "The witness is hazy: an hour is lost.", "det.chase.next": "Hear the witness", "det.caught.title": "The chase is over", "det.caught.text": "{who} is caught in {place}.", "det.caught.clock": "The chase took until {time}.", "det.caught.cold": "Cold trails: {n}", "det.caught.stars": "Stars for the chase", "det.caught.accuracy": "First-try answers on the chase: {n} %", "det.caught.facts": "The places on the trail", "det.caught.again": "Chase again for more stars", "det.end.title": "File closed", "det.end.sub": "Every door is open and the suspect is caught.", "det.end.rooms": "Rooms solved: {n} of {total}" }, hr: { "det.tagline": "Dosje za razrješavanje", "det.intro": "Na svakim zaključanim vratima čeka slučaj. Okreni karte s tragovima odgovarajući na pitanja, otkrij tko je to učinio i vrata se otvaraju.", "det.office.title": "Ploča slučajeva", "det.office.lead": "Odaberi slučaj. Riješen slučaj otvara sljedeća vrata.", "det.office.rooms": "Sobe za bijeg", "det.room.open": "Otvori dosje", "det.room.again": "Ponovno otvori slučaj", "det.room.solved": "Riješeno", "det.room.locked": "Zaključano: prvo riješi {unit} s 2 zvjezdice.", "det.room.final": "Završna soba", "det.room.final.locked": "Zaključano: prvo svladaj sve sobe.", "det.room.stars": "{n} od 3 zvjezdice", "det.finish": "Zatvori dosje", "det.finish.hint": "Riješi završni izazov da zatvoriš dosje.", "det.finish.ready": "Završni izazov je gotov. Dosje se može zatvoriti.", "det.office.progress": "Riješeno soba: {n} od {total}", "det.room.resume": "Nastavi slučaj", "det.case.broken": "Ovaj slučaj nije mogao biti sastavljen. Odaberi drugi.", "det.grid.caption": "{rows} i {cols}", "det.chase.resume": "Nastavi potjeru", "det.back": "Natrag na ploču slučajeva", "det.title.screen": "Naslovni zaslon", "det.case.crime": "Zločin se dogodio ovdje: {place}.", "det.case.clues": "Karte s tragovima", "det.case.turned": "Okrenuto tragova: {n} od {total}", "det.case.no.cards": "Sve su karte okrenute. Ispuni mrežu pa optuži.", "det.clue.n": "Trag {n}", "det.clue.turn": "Okreni", "det.clue.down": "Trag {n}, okrenut licem prema dolje. Odgovori na pitanje da ga okreneš.", "det.clue.up": "Trag {n}, okrenut licem prema gore.", "det.clue.fact": "Činjenica iz tvog odgovora", "det.case.grid": "Mreža", "det.case.grid.help": "Pritisni polje: jedan pritisak ga prekriži, dva znače da, tri ga brišu.", "det.mark.blank": "nepoznato", "det.mark.no": "ne", "det.mark.yes": "da", "det.cell.label": "{a} i {b}: {state}", "det.board.title": "Pluta s uzicama", "det.board.help": 'Svako "da" u mreži postaje crvena uzica između to dvoje.', "det.hint": "Zatraži nagovještaj", "det.hint.used": "Iskorišteni nagovještaji: {n}", "det.accuse.title": "Tvoja optužba", "det.accuse.row": "Tko ili što je to? {category}", "det.accuse.submit": "Podigni optužbu", "det.accuse.submit.grid": "Provjeri mrežu", "det.accuse.grid": 'Ispuni mrežu tragovima dok nije označeno svako "da", pa je provjeri.', "det.accuse.cards": "Dosje nije potpun: prvo okreni sve karte s tragovima. Slučaj ostaje otvoren.", "det.accuse.pick": "Prvo odaberi po jedno u svakom retku.", "det.accuse.wrong": "Nije baš: pogledaj ponovno ovo: {what}. Slučaj ostaje otvoren.", "det.accuse.wrong.grid": "Nešto u mreži nije točno. Provjeri je prema tragovima. Slučaj ostaje otvoren.", "det.cat.suspect": "osumnjičenik", "det.cat.weapon": "oružje", "det.cat.place": "mjesto", "det.cat.motive": "motiv", "det.cat.suspect.label": "Osumnjičenik", "det.cat.weapon.label": "Oružje", "det.cat.place.label": "Mjesto", "det.cat.motive.label": "Motiv", "det.case.leave": "Natrag na ploču", "det.case.nofacts": "Nijedno pitanje za trag nije moglo biti postavljeno pa se karta okreće sama.", "det.hud.clue": "Trag {n} od {total}", "det.effect.up": "Trag {n} se okreće.", "det.effect.down": "Karta ostaje okrenuta prema dolje. Ovo će se pitati ponovno.", "det.next.up": "Pročitaj trag", "det.next.down": "Natrag na slučaj", "det.solved.title": "Slučaj riješen", "det.solved.stamp": "Riješeno", "det.solved.who": "Odgovor: {what}", "det.solved.door": "Vrata se otvaraju.", "det.solved.door.final": "Završna vrata se otvaraju.", "det.solved.unlocked": "Sada otvoreno: {units}", "det.solved.stars": "Zvjezdice za ovaj slučaj", "det.solved.accuracy": "Točni odgovori iz prvog pokušaja: {n} %", "det.solved.hints": "Iskorišteni nagovještaji: {n}", "det.solved.facts": "Na čemu su se tragovi temeljili", "det.solved.more": "Dvije zvjezdice otvaraju sljedeća vrata. Riješi slučaj ponovno za više.", "det.solved.again": "Riješi ponovno", "det.chase.title": "Potjera", "det.chase.lead": "Osumnjičenik je u bijegu. Na svakom mjestu svjedok je nešto vidio: odgovori na pitanje da ga čuješ, pa odaberi kamo je osumnjičenik otišao.", "det.chase.start": "Započni potjeru", "det.chase.again": "Ponovno u potjeru", "det.chase.locked": "Zaključano: prvo svladaj {unit}.", "det.chase.caught.tag": "Uhvaćen", "det.chase.suspect": "U bijegu: {who}", "det.chase.at": "Nalaziš se ovdje: {place}.", "det.chase.clock": "Sat", "det.chase.clock.label": "Sat pokazuje {time}", "det.chase.ask": "Ispitaj svjedoka", "det.chase.witness": "Svjedok kaže", "det.chase.heard": "Kamo je otišla?", "det.chase.travel": "Otputuj: {place}", "det.chase.cold": "Hladan trag: osumnjičenik nije otišao ovamo: {place}. To košta sat vremena i vraćaš se ovamo: {back}.", "det.chase.warm": "Slijediš trag ovamo: {place}.", "det.chase.hazy": "Svjedok se dugo prisjećao: to je koštalo sat vremena.", "det.chase.map": "Karta mjesta u potjeri", "det.chase.legs": "Dionica {n} od {total}", "det.chase.leave": "Napusti potjeru", "det.chase.effect.right": "Svjedok se jasno sjeća.", "det.chase.effect.wrong": "Svjedok je zbunjen: sat vremena je izgubljeno.", "det.chase.next": "Saslušaj svjedoka", "det.caught.title": "Potjera je gotova", "det.caught.text": "Uhvaćen je: {who}. Mjesto: {place}.", "det.caught.clock": "Potjera je trajala do {time}.", "det.caught.cold": "Hladni tragovi: {n}", "det.caught.stars": "Zvjezdice za potjeru", "det.caught.accuracy": "Točni odgovori iz prvog pokušaja u potjeri: {n} %", "det.caught.facts": "Mjesta na tragu", "det.caught.again": "Potjera ponovno za više zvjezdica", "det.end.title": "Dosje zatvoren", "det.end.sub": "Sva su vrata otvorena i osumnjičenik je uhvaćen.", "det.end.rooms": "Riješeno soba: {n} od {total}" }, de: { "det.tagline": "Eine Fallakte zum Knacken", "det.intro": "Hinter jeder verschlossenen Tür wartet ein Fall. Drehe die Hinweiskarten um, indem du Fragen beantwortest, finde heraus, wer es war, und die Tür öffnet sich.", "det.office.title": "Die Falltafel", "det.office.lead": "Wähle einen Fall. Ein gelöster Fall öffnet die nächste Tür.", "det.office.rooms": "Rätselräume", "det.room.open": "Die Akte öffnen", "det.room.again": "Den Fall neu aufrollen", "det.room.solved": "Gelöst", "det.room.locked": "Gesperrt: Löse zuerst {unit} mit 2 Sternen.", "det.room.final": "Der letzte Raum", "det.room.final.locked": "Gesperrt: Meistere zuerst jeden Raum.", "det.room.stars": "{n} von 3 Sternen", "det.finish": "Die Akte schließen", "det.finish.hint": "Löse die letzte Aufgabe, um die Akte zu schließen.", "det.finish.ready": "Die letzte Aufgabe ist geschafft. Die Akte kann geschlossen werden.", "det.office.progress": "{n} von {total} Räumen gelöst", "det.room.resume": "Den Fall fortsetzen", "det.case.broken": "Dieser Fall konnte nicht erstellt werden. Wähle einen anderen.", "det.grid.caption": "{rows} und {cols}", "det.chase.resume": "Die Verfolgung fortsetzen", "det.back": "Zurück zur Falltafel", "det.title.screen": "Titelbildschirm", "det.case.crime": "Das Verbrechen geschah in: {place}.", "det.case.clues": "Hinweiskarten", "det.case.turned": "{n} von {total} Hinweisen umgedreht", "det.case.no.cards": "Jede Karte liegt offen. Markiere das Raster und erhebe dann Anklage.", "det.clue.n": "Hinweis {n}", "det.clue.turn": "Umdrehen", "det.clue.down": "Hinweis {n}, verdeckt. Beantworte eine Frage, um ihn umzudrehen.", "det.clue.up": "Hinweis {n}, aufgedeckt.", "det.clue.fact": "Die Tatsache aus deiner Antwort", "det.case.grid": "Das Raster", "det.case.grid.help": "Drücke auf ein Feld: Einmal streicht es durch, zweimal bedeutet ja, dreimal löscht es.", "det.mark.blank": "unbekannt", "det.mark.no": "nein", "det.mark.yes": "ja", "det.cell.label": "{a} und {b}: {state}", "det.board.title": "Die Pinnwand", "det.board.help": "Jedes Ja im Raster wird zu einem roten Faden zwischen den beiden.", "det.hint": "Um einen Tipp bitten", "det.hint.used": "Genutzte Tipps: {n}", "det.accuse.title": "Deine Anklage", "det.accuse.row": "Wer oder was ist es? {category}", "det.accuse.submit": "Anklage erheben", "det.accuse.submit.grid": "Das Raster prüfen", "det.accuse.grid": "Fülle das Raster mit den Hinweisen, bis jedes Ja markiert ist, und prüfe es dann.", "det.accuse.cards": "Die Akte ist unvollständig: Drehe zuerst jede Hinweiskarte um. Der Fall bleibt offen.", "det.accuse.pick": "Wähle zuerst für jede Zeile eine Antwort.", "det.accuse.wrong": "Nicht ganz: Sieh dir noch einmal {what} an. Der Fall bleibt offen.", "det.accuse.wrong.grid": "Im Raster stimmt etwas nicht. Prüfe es anhand der Hinweise. Der Fall bleibt offen.", "det.cat.suspect": "den Verdächtigen", "det.cat.weapon": "die Tatwaffe", "det.cat.place": "den Ort", "det.cat.motive": "das Motiv", "det.cat.suspect.label": "Verdächtiger", "det.cat.weapon.label": "Tatwaffe", "det.cat.place.label": "Ort", "det.cat.motive.label": "Motiv", "det.case.leave": "Zurück zur Tafel", "det.case.nofacts": "Zu diesem Hinweis konnte keine Frage gestellt werden, deshalb dreht sich die Karte von selbst um.", "det.hud.clue": "Hinweis {n} von {total}", "det.effect.up": "Hinweis {n} wird aufgedeckt.", "det.effect.down": "Die Karte bleibt verdeckt. Diese Frage kommt noch einmal.", "det.next.up": "Den Hinweis lesen", "det.next.down": "Zurück zum Fall", "det.solved.title": "Fall gelöst", "det.solved.stamp": "Gelöst", "det.solved.who": "Die Antwort: {what}", "det.solved.door": "Die Tür schwingt auf.", "det.solved.door.final": "Die letzte Tür schwingt auf.", "det.solved.unlocked": "Jetzt offen: {units}", "det.solved.stars": "Sterne für diesen Fall", "det.solved.accuracy": "Hinweisantworten beim ersten Versuch: {n} %", "det.solved.hints": "Genutzte Tipps: {n}", "det.solved.facts": "Worauf die Hinweise beruhten", "det.solved.more": "Zwei Sterne öffnen die nächsten Türen. Löse den Fall noch einmal für mehr.", "det.solved.again": "Noch einmal lösen", "det.chase.title": "Die Verfolgung", "det.chase.lead": "Der Verdächtige ist auf der Flucht. An jedem Ort hat ein Zeuge etwas gesehen: Beantworte die Frage, um es zu hören, und wähle dann, wohin der Verdächtige gegangen ist.", "det.chase.start": "Die Verfolgung starten", "det.chase.again": "Noch einmal verfolgen", "det.chase.locked": "Gesperrt: Meistere zuerst {unit}.", "det.chase.caught.tag": "Gefasst", "det.chase.suspect": "Auf der Flucht: {who}", "det.chase.at": "Du bist in {place}.", "det.chase.clock": "Uhr", "det.chase.clock.label": "Die Uhr zeigt {time}", "det.chase.ask": "Den Zeugen befragen", "det.chase.witness": "Der Zeuge sagt", "det.chase.heard": "Wohin ist sie gegangen?", "det.chase.travel": "Nach {place} reisen", "det.chase.cold": "Eine kalte Spur: Der Verdächtige ist nicht nach {place} gegangen. Das kostet eine Stunde, und du bist zurück in {back}.", "det.chase.warm": "Du folgst der Spur nach {place}.", "det.chase.hazy": "Der Zeuge hat sich nur langsam erinnert: Das hat eine Stunde gekostet.", "det.chase.map": "Eine Karte der Orte der Verfolgung", "det.chase.legs": "Etappe {n} von {total}", "det.chase.leave": "Die Verfolgung verlassen", "det.chase.effect.right": "Der Zeuge erinnert sich genau.", "det.chase.effect.wrong": "Der Zeuge ist unsicher: Eine Stunde geht verloren.", "det.chase.next": "Den Zeugen anhören", "det.caught.title": "Die Verfolgung ist vorbei", "det.caught.text": "{who} wird in {place} gefasst.", "det.caught.clock": "Die Verfolgung dauerte bis {time}.", "det.caught.cold": "Kalte Spuren: {n}", "det.caught.stars": "Sterne für die Verfolgung", "det.caught.accuracy": "Antworten beim ersten Versuch in der Verfolgung: {n} %", "det.caught.facts": "Die Orte auf der Spur", "det.caught.again": "Noch einmal verfolgen für mehr Sterne", "det.end.title": "Akte geschlossen", "det.end.sub": "Jede Tür ist offen und der Verdächtige ist gefasst.", "det.end.rooms": "Gelöste Räume: {n} von {total}" } }, Bd = "detective", S1 = "noir", $1 = "-", z1 = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t, _1 = { rooms: [] };
  class j1 {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "cases", /* @__PURE__ */ new Map());
      __publicField(this, "titleState", ts());
      __publicField(this, "room", null);
      __publicField(this, "chase", null);
      __publicField(this, "coldPlaces", /* @__PURE__ */ new Set());
      __publicField(this, "chaseNotice", null);
      __publicField(this, "cork", null);
      var _a3;
      this.host = e, this.session = new Ds(e, { shellId: Bd, theme: S1, strings: y1 }), this.section = (_a3 = this.session.section()) != null ? _a3 : _1;
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
      return [...this.section.rooms].sort((n, r) => s(n) - s(r));
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
      return e.unit === void 0 ? "" : ((_b3 = (_a3 = s.pack.units.find((r) => r.id === e.unit)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((r) => !s.isMastered(r)).map((r) => s.unitTitle(r)).join(", ");
    }
    done() {
      return this.session.bossStars() >= 1;
    }
    nameOf(e) {
      return (s) => this.session.t(e.case.names[s]) || s;
    }
    labelOf(e) {
      const s = this.s, n = { suspect: "det.cat.suspect.label", weapon: "det.cat.weapon.label", place: "det.cat.place.label", motive: "det.cat.motive.label" };
      return (r) => {
        const i = e.case.labels[r];
        if (i) return this.session.t(i);
        const o = n[r];
        return o ? s(o) : r;
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
      const r = l1(s.clues.length, e.id);
      return this.cases.set(e.id, r), r;
    }
    built(e) {
      try {
        return sl(dl(e.case));
      } catch (e2) {
        return null;
      }
    }
    solution() {
      const e = this.room, s = e ? this.built(e) : null;
      if (!e || !s) return null;
      const n = s.puzzle, r = this.cases.get(e.id), i = nl(n), o = Sw(n);
      return { room: e.id, kind: n.kind, accusation: i, accuse: i ? Object.entries(i).map(([a, c]) => "accuse-".concat(a, "-").concat(c)) : [], yes: o, cells: o.map((a) => {
        const [c, l] = Re(a);
        return "cell-".concat(c, "-").concat(l);
      }), cards: r ? { turned: Zs(r), total: r.cards.length, faceDown: Cd(r) } : { turned: 0, total: n.clues.length, faceDown: n.clues.map((a, c) => c + 1) }, marks: r ? rl(n, r.marks).length : 0 };
    }
    route() {
      var _a3;
      const e = this.section.chase, s = this.chase;
      if (!e || !s) return null;
      const n = e.route[s.leg];
      return { active: !s.caught, caught: s.caught, at: s.at, leg: s.leg, legs: e.route.length, phase: s.caught ? "caught" : s.heard ? "travel" : "witness", next: (_a3 = n == null ? void 0 : n.to) != null ? _a3 : null, travel: n ? "travel-".concat(n.to) : null, options: s.options, decoys: s.options.filter((r) => r !== (n == null ? void 0 : n.to)), end: ll(e) };
    }
    title() {
      const e = this.session;
      e.finished = false, this.room = null, e.render("title", Ls(e, { onStart: () => this.office() }, () => this.title(), this.titleState));
    }
    office() {
      var _a3;
      const e = this.session, s = this.s;
      e.finished = false, this.room = null, this.disposeCork();
      const n = this.saved(), r = this.rooms(), i = this.section.chase, o = r.filter((h) => !this.roomLocked(h)), a = r.filter((h) => n.solved.includes(h.id)).length, c = (h) => {
        var _a4;
        const p = this.roomLocked(h), f = this.roomStars(h), m = n.solved.includes(h.id), g = this.cases.has(h.id) && !((_a4 = this.cases.get(h.id)) == null ? void 0 : _a4.solved), k = p ? "locked" : m ? "solved" : "open", b = p ? this.isFinal(h) ? s("det.room.final.locked") : s("det.room.locked", { unit: this.needs(h) }) : m ? s("det.room.solved") : g ? s("det.room.resume") : this.isFinal(h) ? s("det.room.final") : s("det.room.open");
        return u("li", { class: "det-room-item" }, u("button", { type: "button", class: "det-room is-".concat(k).concat(this.isFinal(h) ? " is-final" : ""), testid: "room-".concat(h.id), "data-state": k, "data-stars": String(f), "data-locked": String(p), ...h.unit ? { "data-unit": h.unit } : { "data-final": "true" }, ...p ? { disabled: true } : {}, onclick: () => this.openRoom(h) }, u("span", { class: "det-room-door" }, Ld(p ? "locked" : m ? "solved" : "open")), u("span", { class: "det-room-body" }, u("span", { class: "det-room-name" }, e.t(h.title)), u("span", { class: "det-room-meta" }, b), e.stars(f))));
      }, l = i ? u("div", { class: "det-chase-card" }, u("h2", {}, e.t(i.title) || s("det.chase.title")), u("p", {}, i.story ? e.t(i.story) : s("det.chase.lead")), this.chaseOpen(i) ? I("chase-start", this.chase && !this.chase.caught ? s("det.chase.resume") : n.caught ? s("det.chase.again") : s("det.chase.start"), () => this.startChase(), { class: "btn btn-primary" }) : u("p", { class: "message" }, i.unit ? s("det.chase.locked", { unit: e.unitTitle(i.unit) }) : s("det.room.final.locked")), n.caught ? u("p", { class: "message message-ok", testid: "chase-caught-tag" }, s("det.chase.caught.tag")) : null) : null, d = u("section", { class: "office-screen det-office" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "office-progress" }, s("det.office.progress", { n: a, total: r.length }))), u("h1", { class: "screen-title", tabindex: "-1", testid: "office-title" }, s("det.office.title")), u("p", { class: "subject" }, s("det.office.lead")), u("h2", { class: "det-h2" }, s("det.office.rooms")), u("ol", { class: "det-rooms", testid: "rooms" }, r.map(c)), l, this.done() ? u("div", { class: "det-finish" }, u("p", { class: "message message-ok" }, s("det.finish.ready")), I("finish", s("det.finish"), () => this.end(), { class: "btn btn-primary btn-big" })) : u("p", { class: "det-finish-hint", testid: "finish-hint" }, s("det.finish.hint")));
      e.render("office", d, { view: { rooms: r.map((h) => {
        var _a4;
        return { id: h.id, unit: (_a4 = h.unit) != null ? _a4 : null, final: this.isFinal(h), stars: this.roomStars(h), locked: this.roomLocked(h), solved: n.solved.includes(h.id), open: o.includes(h) };
      }), chase: i ? { open: this.chaseOpen(i), caught: n.caught, stars: this.chaseStars(i) } : null, final: (_a3 = this.section.final) != null ? _a3 : null, done: this.done() } });
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
      const r = s.puzzle;
      return { room: e.id, unit: (_a3 = e.unit) != null ? _a3 : null, kind: r.kind, size: r.size, seed: s.seed, clues: n.cards.map((i, o) => ({ n: o + 1, state: i === null ? "down" : "up", item: i })), turned: Zs(n), total: n.cards.length, yes: rl(r, n.marks).length, hints: n.hints, accusation: n.accusation, wrongAccusations: n.wrongAccusations, solved: n.solved };
    }
    caseScreen(e, s) {
      const n = this.session, r = this.s;
      this.room = e, this.disposeCork();
      const i = this.built(e);
      if (!i) return this.caseBroken(e);
      const o = i.puzzle;
      let a = this.caseOf(e, o);
      const c = this.nameOf(e), l = this.labelOf(e), d = this.namer(e), h = (T) => {
        a = T, this.cases.set(e.id, a);
      };
      let p = "";
      const f = () => n.publish("case", { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), m = a.cards.length, g = o.clues.map((T, D) => {
        const G = D + 1, F = a.cards[D];
        if (F == null) return u("li", { class: "det-card is-down", "data-state": "down" }, I("clue-".concat(G), [u("span", { class: "det-card-art" }, Li()), u("span", { class: "det-card-no" }, r("det.clue.n", { n: G })), u("span", { class: "det-card-act" }, r("det.clue.turn"))], () => this.turnCard(e, G), { class: "det-card-btn" }));
        const H = this.factOf(n.item(F));
        return u("li", { class: "det-card is-up", "data-state": "up", testid: "clue-".concat(G), tabindex: "-1", ...s === G ? { "data-autofocus": "" } : {} }, u("h3", { class: "det-card-no" }, r("det.clue.n", { n: G })), u("p", { class: "det-clue-text" }, cl(o, T, d, n.lang)), H ? u("p", { class: "det-clue-fact" }, u("span", { class: "det-fact-label" }, r("det.clue.fact")), " ", H) : null);
      }), k = { mark: (T) => r(T === "yes" ? "det.mark.yes" : T === "no" ? "det.mark.no" : "det.mark.blank"), cell: (T, D, G) => r("det.cell.label", { a: T, b: D, state: G }), caption: (T, D) => r("det.grid.caption", { rows: T, cols: D }) }, b = u("p", { class: "det-hint-text", testid: "hint-text", role: "status", hidden: true }), v = a1(o, a.marks, c, l, k, (T) => {
        var _a3;
        let D = zw(a.marks, T);
        vt(D, T) === "yes" && (D = _w(o, D, T)), h({ ...a, marks: D }), p = "", v.update(D), (_a3 = this.cork) == null ? void 0 : _a3.update(D);
        const [G, F] = Re(T);
        n.live(k.cell(c(G), c(F), k.mark(vt(D, T)))), f();
      }), w = i1(o, c, l, a.marks);
      this.cork = w;
      const y = I("hint", "💡 ".concat(r("det.hint")), () => {
        const T = xw(o, d1(a), a.marks, d, n.lang);
        h({ ...a, hints: a.hints + 1 }), b.hidden = false, b.textContent = T.text, p = T.kind === "step" || T.kind === "wrong" ? T.cell : "", v.update(a.marks, p), $.textContent = r("det.hint.used", { n: a.hints }), f();
      }, { class: "btn btn-small" }), $ = u("span", { class: "det-hint-count", testid: "hint-count" }, r("det.hint.used", { n: a.hints })), x = /* @__PURE__ */ new Map(), z = u("p", { class: "det-accuse-message", testid: "accuse-message", role: "status", hidden: true }), _ = (T, D) => {
        z.hidden = false, z.className = "det-accuse-message message message-bad", z.textContent = T;
      }, R = ri(o).map((T) => {
        var _a3;
        const D = o.categories.find((F) => F.key === T), G = l(T);
        return u("div", { class: "det-pick-row", role: "group", "aria-label": G }, u("span", { class: "det-pick-label" }, G), u("span", { class: "det-picks" }, ((_a3 = D == null ? void 0 : D.items) != null ? _a3 : []).map((F) => {
          const H = I("accuse-".concat(T, "-").concat(F), c(F), () => {
            h({ ...a, accusation: { ...a.accusation, [T]: a.accusation[T] === F ? "" : F } });
            for (const [ke, he] of x) he.setAttribute("aria-pressed", String(a.accusation[ke.split("|")[0]] === ke.split("|")[1]));
            f();
          }, { class: "det-pick", "aria-pressed": String(a.accusation[T] === F) });
          return x.set("".concat(T, "|").concat(F), H), H;
        })));
      }), S = I("accuse-submit", o.kind === "murdle" ? r("det.accuse.submit") : r("det.accuse.submit.grid"), () => {
        var _a3;
        const T = m1(o, a, (D, G) => jw(o, D, G));
        if (T.kind === "cards") return _(r("det.accuse.cards"));
        if (T.kind === "pick") return _(r("det.accuse.pick"));
        if (T.kind === "wrong") return h({ ...a, wrongAccusations: a.wrongAccusations + 1 }), _(o.kind === "murdle" ? r("det.accuse.wrong", { what: T.wrong.map((D) => this.categoryWords(D, l)).join(", ") }) : r("det.accuse.wrong.grid")), n.live((_a3 = z.textContent) != null ? _a3 : ""), f();
        h({ ...a, solved: true }), this.solved(e, o, a);
      }, { class: "btn btn-primary btn-big" }), A = o.kind === "murdle" && o.murder ? u("p", { class: "det-crime", testid: "case-crime" }, r("det.case.crime", { place: En(o, o.murder.place, d, n.lang) })) : null, j = u("section", { class: "case-screen det-case" }, u("div", { class: "topbar" }, I("to-office", "‹ ".concat(r("det.back")), () => this.office(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "case-progress" }, r("det.case.turned", { n: Zs(a), total: m }))), u("h1", { class: "screen-title det-case-title", tabindex: "-1", testid: "case-title" }, n.t(e.title)), u("p", { class: "det-story", testid: "case-story" }, n.t(e.story)), A, u("div", { class: "det-layout" }, u("section", { class: "det-col-cards", "aria-labelledby": "det-cards-h" }, u("h2", { class: "det-h2", id: "det-cards-h" }, r("det.case.clues")), Zs(a) === m ? u("p", { class: "det-note" }, r("det.case.no.cards")) : null, u("ol", { class: "det-cards", testid: "clues" }, g)), u("section", { class: "det-col-grid", "aria-labelledby": "det-grid-h" }, u("h2", { class: "det-h2", id: "det-grid-h" }, r("det.case.grid")), u("p", { class: "det-help" }, r("det.case.grid.help")), v.el)), u("section", { class: "det-board-wrap", "aria-labelledby": "det-board-h" }, u("h2", { class: "det-h2", id: "det-board-h" }, r("det.board.title")), u("p", { class: "det-help" }, r("det.board.help")), w.el), u("section", { class: "det-accuse", "aria-labelledby": "det-accuse-h" }, u("h2", { class: "det-h2", id: "det-accuse-h" }, r("det.accuse.title")), u("div", { class: "det-hint-row" }, y, $), b, o.kind === "murdle" ? u("div", { class: "det-pick-rows" }, R) : u("p", { class: "det-help" }, r("det.accuse.grid")), u("div", { class: "actions" }, S), z));
      n.render("case", j, { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), w.update(a.marks);
    }
    categoryWords(e, s) {
      const n = this.s, i = { suspect: "det.cat.suspect", weapon: "det.cat.weapon", place: "det.cat.place", motive: "det.cat.motive" }[e];
      return i ? n(i) : s(e);
    }
    caseBroken(e) {
      const s = this.session, n = this.s;
      s.render("case", u("section", { class: "case-screen det-case" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "case-title" }, s.t(e.title)), u("p", { class: "message message-bad", testid: "case-broken" }, n("det.case.broken")), u("div", { class: "actions" }, I("to-office", n("det.back"), () => this.office(), { class: "btn btn-primary" }))), { view: { room: e.id, broken: true } });
    }
    turnCard(e, s) {
      const n = this.session, r = this.s, i = this.built(e), o = this.cases.get(e.id);
      if (!i || !o) return this.caseScreen(e);
      const a = o.cards.length, c = e.unit ? "unit" : "boss";
      let l = o.run, d = l ? n.next(l) : null;
      d || (l = n.startRun(h1(e.case.items, o), { kind: c, ...e.unit ? { unitId: e.unit } : {} }), d = n.next(l));
      const h = d ? n.item(d.id) : void 0;
      if (!l || !d || !n.canAsk(h)) return this.cases.set(e.id, { ...o, run: l, cards: o.cards.map((g, k) => k === s - 1 ? $1 : g) }), this.caseScreen(e, s);
      this.cases.set(e.id, { ...o, run: l });
      const p = l, f = d, m = u("div", { class: "det-hud" }, u("span", { class: "det-hud-card" }, Li()), u("div", { class: "det-hud-text" }, u("p", { class: "det-hud-room" }, n.t(e.title)), u("p", { class: "det-hud-count" }, r("det.case.turned", { n: Zs(o), total: a }))));
      lt(n, { item: h, context: "clue", retry: f.retry, hud: m, lead: u("span", {}, r("det.hud.clue", { n: s, total: a })), ...e.unit ? { unitId: e.unit } : {}, roundKind: c, roundSize: p.size, index: p.results.length, view: () => this.caseView(e), leaveLabel: r("det.case.leave"), onLeave: () => this.caseScreen(e), onAnswered: (g) => {
        const k = this.cases.get(e.id), b = f1({ ...k, run: n.record(p, f, g) }, s, h.id, g.result.correct, g.result.score);
        this.cases.set(e.id, b);
      }, effect: (g) => g.result.correct ? { text: r("det.effect.up", { n: s }), tone: "good" } : { text: r("det.effect.down"), tone: "bad" }, nextLabel: (g) => g.result.correct ? r("det.next.up") : r("det.next.down"), onNext: (g) => this.caseScreen(e, g.result.correct ? s : void 0) });
    }
    solved(e, s, n) {
      const r = this.session, i = this.s, o = p1(n), a = r.recordUnit(e.unit ? { unitId: e.unit } : { boss: true }, o), c = this.saved();
      c.solved.includes(e.id) || this.save({ ...c, solved: [...c.solved, e.id] }), r.playCue(e.unit ? "unit-complete" : "boss");
      const l = this.nameOf(e), d = this.labelOf(e), h = nl(s), p = h ? Object.entries(h).map(([v, w]) => "".concat(d(v), ": ").concat(l(w))).join("; ") : "", f = a.unlocked.map((v) => r.unitTitle(v)), m = Math.round(o * 100), g = n.cards.flatMap((v, w) => {
        const y = this.factOf(v ? r.item(v) : void 0);
        return y ? [{ n: w + 1, text: y }] : [];
      }), k = Ld("locked"), b = u("section", { class: "solved-screen det-solved" }, u("div", { class: "det-solved-door", "aria-hidden": "true" }, k), u("p", { class: "det-stamp", "aria-hidden": "true" }, i("det.solved.stamp")), u("h1", { class: "screen-title", tabindex: "-1", testid: "solved-title" }, i("det.solved.title")), u("p", { class: "subject" }, r.t(e.title)), p ? u("p", { class: "det-answer", testid: "solved-answer" }, i("det.solved.who", { what: p })) : null, r.stars(a.stars, "case-stars"), u("p", { class: "big-number", testid: "case-accuracy" }, i("det.solved.accuracy", { n: m })), n.hints > 0 ? u("p", { class: "det-note", testid: "case-hints" }, i("det.solved.hints", { n: n.hints })) : null, u("p", { class: "message message-ok", testid: "door-open" }, e.unit ? i("det.solved.door", { unit: r.t(e.title) }) : i("det.solved.door.final")), f.length > 0 ? u("p", { class: "message", testid: "solved-unlocked" }, i("det.solved.unlocked", { units: f.join(", ") })) : null, a.stars < 2 ? u("p", { class: "message message-bad", testid: "solved-more" }, i("det.solved.more")) : null, g.length > 0 ? u("div", { class: "det-facts" }, u("h2", { class: "det-h2" }, i("det.solved.facts")), u("ul", { class: "det-fact-list", testid: "solved-facts" }, g.map((v) => u("li", {}, u("b", {}, i("det.clue.n", { n: v.n })), " ", v.text)))) : null, u("div", { class: "actions actions-center" }, I("to-office", i("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), a.stars < 3 ? I("solve-again", i("det.solved.again"), () => this.again(e), { class: "btn btn-big" }) : null));
      r.render("case-solved", b, { ...e.unit ? { unitId: e.unit } : {}, view: { room: e.id, stars: a.stars, accuracy: m, hints: n.hints, unlocked: a.unlocked, wrongAccusations: n.wrongAccusations } }), window.requestAnimationFrame(() => k.classList.add("is-swinging"));
    }
    again(e) {
      this.cases.delete(e.id), this.openRoom(e);
    }
    startChase() {
      const e = this.section.chase;
      if (!e) return this.office();
      (!this.chase || this.chase.caught) && (this.chase = b1(e, this.session.rng), this.coldPlaces = /* @__PURE__ */ new Set(), this.chaseNotice = null), this.chaseScreen();
    }
    placeName(e, s) {
      const n = e.places.find((r) => r.id === s);
      return n ? this.session.t(n.name) : s;
    }
    chaseView() {
      const e = this.section.chase, s = this.chase;
      return !e || !s ? {} : { phase: s.caught ? "caught" : s.heard ? "travel" : "witness", at: s.at, leg: s.leg, legs: e.route.length, hours: s.hours, clock: ss(s.hours), heard: s.heard, options: s.heard ? s.options : [], cold: s.cold, trail: s.trail };
    }
    witnessText(e, s) {
      const n = this.session, r = e.route[s];
      if (!r) return "";
      if (r.clue) return n.t(r.clue);
      const i = n.item(r.item);
      return this.factOf(i) || (i ? n.t(i.prompt) : "");
    }
    chaseScreen() {
      const e = this.session, s = this.s, n = this.section.chase, r = this.chase;
      this.disposeCork();
      const i = n.route[r.leg], o = e.pack.assets.find((f) => f.id === n.map), a = c1({ src: e.data.assets[n.map], alt: o ? e.t(o.alt) : s("det.chase.map"), width: n.width, height: n.height, places: n.places.map((f) => ({ id: f.id, name: e.t(f.name), x: f.x, y: f.y })), trail: r.trail, options: r.heard ? r.options : [], here: r.at }), c = this.chaseNotice, l = c ? u("p", { class: "message ".concat(c.kind === "warm" ? "message-ok" : "message-bad"), role: "status", testid: "chase-notice", "data-kind": c.kind }, c.kind === "cold" ? s("det.chase.cold", { place: c.place, back: c.back }) : c.kind === "warm" ? s("det.chase.warm", { place: c.place }) : s("det.chase.hazy")) : null, d = r.heard && i ? r.options : [], h = i ? r.heard ? u("div", { class: "det-travel-panel" }, u("figure", { class: "det-witness", testid: "witness-line" }, u("figcaption", {}, s("det.chase.witness")), u("blockquote", {}, this.witnessText(n, r.leg))), u("h2", { class: "det-h2" }, s("det.chase.heard")), u("ul", { class: "det-travel", testid: "travel" }, d.map((f, m) => u("li", {}, I("travel-".concat(f), this.s("det.chase.travel", { place: this.placeName(n, f) }), () => this.go(f), { class: "btn det-go".concat(this.coldPlaces.has(f) ? " is-cold" : ""), ...this.coldPlaces.has(f) ? { disabled: true, "data-cold": "true" } : {}, ...m === d.findIndex((g) => !this.coldPlaces.has(g)) ? { "data-autofocus": "" } : {} }))))) : u("div", { class: "det-witness-panel" }, u("p", { class: "det-here", testid: "chase-here" }, s("det.chase.at", { place: this.placeName(n, r.at) })), I("ask-witness", s("det.chase.ask"), () => this.askWitness(), { class: "btn btn-primary btn-big", "data-autofocus": "" })) : null, p = u("section", { class: "chase-screen det-chase" }, u("div", { class: "topbar" }, I("to-office", "‹ ".concat(s("det.chase.leave")), () => this.office(), { class: "btn btn-small btn-ghost" }), u("span", { class: "det-clock", testid: "clock", role: "timer", "aria-label": s("det.chase.clock.label", { time: ss(r.hours) }) }, u("span", { class: "det-clock-label" }, s("det.chase.clock")), " ", ss(r.hours))), u("h1", { class: "screen-title", tabindex: "-1", testid: "chase-title" }, e.t(n.title) || s("det.chase.title")), u("p", { class: "subject", testid: "chase-suspect" }, s("det.chase.suspect", { who: e.t(n.suspect) })), u("p", { class: "det-legs", testid: "chase-legs" }, s("det.chase.legs", { n: Math.min(r.leg + 1, n.route.length), total: n.route.length })), u("div", { class: "det-chase-layout" }, a, u("div", { class: "det-chase-side" }, l, h)));
      e.render("chase", p, { ...n.unit ? { unitId: n.unit } : {}, view: this.chaseView() });
    }
    askWitness() {
      const e = this.session, s = this.s, n = this.section.chase, r = this.chase, i = n.route[r.leg];
      if (!i) return this.chaseScreen();
      const o = e.item(i.item);
      if (this.chaseNotice = null, !e.canAsk(o)) return this.chase = Fd(r, true, 1), this.chaseScreen();
      const a = u("div", { class: "det-hud" }, u("span", { class: "det-hud-card" }, Li()), u("div", { class: "det-hud-text" }, u("p", { class: "det-hud-room" }, this.placeName(n, r.at)), u("p", { class: "det-hud-count" }, s("det.chase.clock.label", { time: ss(r.hours) }))));
      lt(e, { item: o, context: "clue", hud: a, lead: u("span", {}, s("det.chase.legs", { n: r.leg + 1, total: n.route.length })), ...n.unit ? { unitId: n.unit } : {}, index: r.leg, view: () => this.chaseView(), leaveLabel: s("det.chase.leave"), onLeave: () => this.chaseScreen(), onAnswered: (c) => {
        this.chase = Fd(this.chase, c.result.correct, c.result.score), c.result.correct || (this.chaseNotice = { kind: "hazy", place: "", back: "" });
      }, effect: (c) => c.result.correct ? { text: s("det.chase.effect.right"), tone: "good" } : { text: s("det.chase.effect.wrong"), tone: "bad" }, nextLabel: s("det.chase.next"), onNext: () => this.chaseScreen() });
    }
    go(e) {
      const s = this.session, n = this.section.chase, r = this.chase, i = v1(r, n, e, s.rng);
      if (this.chase = i.state, !i.right) return this.coldPlaces.add(e), this.chaseNotice = { kind: "cold", place: this.placeName(n, e), back: this.placeName(n, r.at) }, s.live(this.s("det.chase.cold", { place: this.placeName(n, e), back: this.placeName(n, r.at) })), this.chaseScreen();
      if (this.coldPlaces = /* @__PURE__ */ new Set(), i.state.caught) return this.caught();
      this.chaseNotice = { kind: "warm", place: this.placeName(n, e), back: "" }, this.chaseScreen();
    }
    caught() {
      const e = this.session, s = this.s, n = this.section.chase, r = this.chase, i = w1(r), o = e.recordUnit(n.unit ? { unitId: n.unit } : { boss: true }, i);
      this.save({ ...this.saved(), caught: true }), e.playCue(n.unit ? "unit-complete" : "boss"), this.chaseNotice = null;
      const a = Math.round(i * 100), c = o.unlocked.map((d) => e.unitTitle(d)), l = u("section", { class: "caught-screen det-solved det-caught" }, u("p", { class: "det-stamp", "aria-hidden": "true" }, s("det.chase.caught.tag")), u("h1", { class: "screen-title", tabindex: "-1", testid: "caught-title" }, s("det.caught.title")), u("p", { class: "subject", testid: "caught-text" }, s("det.caught.text", { who: z1(e.t(n.suspect)), place: this.placeName(n, ll(n)) })), e.stars(o.stars, "chase-stars"), u("p", { class: "big-number", testid: "chase-accuracy" }, s("det.caught.accuracy", { n: a })), u("p", { class: "det-note", testid: "caught-clock" }, s("det.caught.clock", { time: ss(r.hours) })), u("p", { class: "det-note", testid: "caught-cold" }, s("det.caught.cold", { n: r.cold })), c.length > 0 ? u("p", { class: "message", testid: "caught-unlocked" }, s("det.solved.unlocked", { units: c.join(", ") })) : null, u("div", { class: "det-facts" }, u("h2", { class: "det-h2" }, s("det.caught.facts")), u("ol", { class: "det-trail", testid: "caught-trail" }, r.trail.map((d) => u("li", {}, this.placeName(n, d))))), u("div", { class: "actions actions-center" }, I("to-office", s("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o.stars < 3 ? I("chase-again", s("det.caught.again"), () => this.restartChase(), { class: "btn btn-big" }) : null));
      e.render("caught", l, { ...n.unit ? { unitId: n.unit } : {}, view: { stars: o.stars, accuracy: a, hours: r.hours, clock: ss(r.hours), cold: r.cold, trail: r.trail, unlocked: o.unlocked } });
    }
    restartChase() {
      this.chase = null, this.startChase();
    }
    end() {
      var _a3, _b3;
      const e = this.session, s = this.s;
      e.finish(), this.disposeCork();
      const n = this.rooms(), r = this.saved(), i = n.filter((o) => r.solved.includes(o.id)).length;
      e.render("end", Cs(e, { title: s("det.end.title"), sub: s("det.end.sub"), stats: u("p", { class: "subject", testid: "end-rooms" }, s("det.end.rooms", { n: i, total: n.length })), onAgain: () => this.office(), onTitle: () => this.title() }), { view: { solved: i, total: n.length, caught: r.caught, final: (_b3 = (_a3 = Pw(this.section)) == null ? void 0 : _a3.id) != null ? _b3 : null } });
    }
  }
  const Kd = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Bd, mount(e) {
      t = new j1(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), x1 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function E1(t, e, s) {
    const n = s.filter((i) => i.id !== e && i.title.trim().length >= 3).map((i) => ({ id: i.id, title: i.title.trim() })).sort((i, o) => o.title.length - i.title.length), r = /* @__PURE__ */ new Set();
    return t.map((i) => {
      const o = [];
      for (const l of n) {
        if (r.has(l.id)) continue;
        const h = new RegExp("(?<![\\p{L}\\p{N}])".concat(x1(l.title), "(?![\\p{L}\\p{N}])"), "iu").exec(i);
        if (!h) continue;
        const p = h.index, f = p + h[0].length;
        o.some((m) => p < m.end && f > m.start) || (o.push({ start: p, end: f, id: l.id }), r.add(l.id));
      }
      o.sort((l, d) => l.start - d.start);
      const a = [];
      let c = 0;
      for (const l of o) l.start > c && a.push({ text: i.slice(c, l.start) }), a.push({ text: i.slice(l.start, l.end), link: l.id }), c = l.end;
      return c < i.length && a.push({ text: i.slice(c) }), a.length > 0 ? a : [{ text: i }];
    });
  }
  const A1 = (t) => [...new Set(t.flat().flatMap((e) => e.link ? [e.link] : []))], Ci = (t) => Pe(t, { fold: true });
  function qd(t, e, s = 8) {
    const n = Ci(t);
    if (n.replace(/ /g, "").length < 2) return [];
    const r = n.split(" ").filter(Boolean), i = [];
    for (const o of e) {
      const a = Ci(o.title), c = a.split(" ");
      let l = 0;
      a === n ? l = 120 : a.startsWith(n) ? l = 100 : c.some((f) => f.startsWith(n)) ? l = 80 : a.includes(n) ? l = 60 : r.every((f) => a.includes(f)) && (l = 50);
      let d = "";
      const p = o.paragraphs.flatMap((f) => f.split(new RegExp("(?<=[.!?])\\s+"))).find((f) => r.every((m) => Ci(f).includes(m)));
      p && (d = p.length > 150 ? "".concat(p.slice(0, 147).trimEnd(), "...") : p, l === 0 && (l = 20)), l > 0 && i.push({ id: o.id, score: l, snippet: l >= 50 ? "" : d });
    }
    return i.sort((o, a) => a.score - o.score).slice(0, s);
  }
  function Gd(t, e) {
    const n = [...t.title.split(/\s+/).filter((r) => r.replace(/[^\p{L}\p{N}]/gu, "").length >= 3).sort((r, i) => i.length - r.length), t.title];
    for (const r of n) if (qd(r, e).some((i) => i.id === t.id)) return r.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
    return t.title;
  }
  const Wd = () => ({ found: [], read: [] }), Gn = (t, e) => Array.isArray(t) ? [...new Set(t.filter((s) => typeof s == "string" && e.has(s)))] : [];
  function T1(t, e, s, n = /* @__PURE__ */ new Set()) {
    if (typeof t != "object" || t === null) return Wd();
    const r = t, i = { found: Gn(r.found, e), read: Gn(r.read, s) }, o = r.reader;
    if (typeof o == "object" && o !== null) {
      const c = o, l = typeof c.chapter == "string" && s.has(c.chapter) ? c.chapter : void 0, d = typeof c.scroll == "number" && Number.isFinite(c.scroll) ? Math.min(1, Math.max(0, c.scroll)) : 0;
      i.reader = { ...l ? { chapter: l } : {}, scroll: d, done: Gn(c.done, s) };
    }
    const a = Gn(r.glossOff, n);
    return a.length > 0 && (i.glossOff = a), i;
  }
  const I1 = (t, e) => t.found.includes(e) ? t : { ...t, found: [...t.found, e] }, Hd = (t, e) => t.read.includes(e) ? t : { ...t, read: [...t.read, e] };
  function M1(t, e, s) {
    var _a3;
    const n = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] }, r = Math.min(1, Math.max(0, s));
    return n.chapter === e && Math.abs(n.scroll - r) < 5e-3 ? t : { ...t, reader: { ...n, chapter: e, scroll: r } };
  }
  function O1(t, e) {
    var _a3;
    const s = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] };
    return s.done.includes(e) ? t : { ...t, reader: { ...s, done: [...s.done, e] } };
  }
  function N1(t, e, s) {
    var _a3;
    const n = (_a3 = t.glossOff) != null ? _a3 : [];
    if (s) {
      if (!n.includes(e)) return t;
      const r = n.filter((a) => a !== e), { glossOff: i, ...o } = t;
      return r.length > 0 ? { ...o, glossOff: r } : o;
    }
    return n.includes(e) ? t : { ...t, glossOff: [...n, e] };
  }
  const Vd = (t, e) => "".concat(t, "/").concat(e), P1 = { en: { "enc.tagline": "An illustrated encyclopedia to explore", "enc.open": "Open the book", "enc.continue": "Continue reading", "enc.nav.label": "Parts of the book", "enc.nav.title": "Title page", "enc.nav.index": "Index", "enc.nav.timeline": "Timeline", "enc.nav.map": "Map", "enc.nav.codex": "Codex", "enc.nav.hunts": "Hunts", "enc.masthead.sub": "Browse the articles, follow the links, then go hunting for the answers.", "enc.stat.found": "Collected", "enc.stat.stars": "Stars", "enc.stat.read": "Read", "enc.search.label": "Search the encyclopedia", "enc.search.placeholder": "A word, then Enter", "enc.search.none": 'No article matches "{q}".', "enc.search.count": "{n} found. Press Enter to open the first.", "enc.search.results": "Search results", "enc.index": "Index of articles", "enc.chapter": "Chapter {n}", "enc.locked": 'The hunts of this chapter open when you have mastered "{unit}". The articles are free to read.', "enc.readMark": "read", "enc.other": "More articles", "enc.plate": "Plate", "enc.back": "Back", "enc.seeAlso": "See also", "enc.sources": "Sources", "enc.openSource": "Open the source in a new tab", "enc.audio.play": "Listen", "enc.audio.stop": "Stop listening", "reader.listen": "Listen to paragraph {n}", "reader.listen.stop": "Stop paragraph {n}", "reader.listenAll": "Listen to the whole text", "reader.listenAll.stop": "Stop listening", "enc.runhead": "Article", "enc.collect": "Collect: {name}", "enc.collect.hint": "This page answers your clue.", "enc.clue.label": "Clue {n} of {total}", "enc.clue.bar": "Your hunt: {title}", "enc.clue.retry": "Back again. Read this page more closely.", "enc.clue.drop": "Put the hunt aside", "enc.tl.title": "Timeline", "enc.tl.intro": "Events along a ruler, true to scale. Use the left and right arrow keys to move between them.", "enc.tl.box": "Timeline of events", "enc.tl.read": "Read the article", "enc.tl.empty": "There are no dated events yet.", "enc.bc": "BC", "enc.map.title": "Map", "enc.map.intro": "Brass pins mark the places of the articles. Choose a pin, or a name from the list below it.", "enc.map.places": "Places on this map", "enc.map.none": "No places are marked on this map yet.", "enc.map.box": "The map", "enc.codex.title": "Codex", "enc.codex.intro": "Everything you have collected on your hunts, and the fact each one taught you.", "enc.codex.count": "{found} of {total} collected", "enc.codex.unknown": "Not found yet", "enc.codex.taught": "It taught you", "enc.codex.read": 'Read "{title}"', "enc.codex.empty": "Start a hunt to fill this page.", "enc.hunts.title": "Scavenger hunts", "enc.hunts.intro": "Each hunt gives you a clue. Find the article, collect the thing, and answer its question. Read first: the answer is in the article.", "enc.hunt.clues": "Clues: {n}", "enc.hunt.found": "{found} of {n} collected", "enc.hunt.start": "Start the hunt", "enc.hunt.again": "Hunt again", "enc.hunt.locked": 'Locked: master "{unit}" first.', "enc.hunt.empty": "No clues in this hunt.", "enc.hunt.final": "The grand hunt", "enc.hunt.final.intro": "Clues from every chapter, mixed up. Show that you remember.", "enc.hunt.final.locked": "Opens when every chapter is mastered.", "enc.hunt.auto": "Hunt: {unit}", "enc.hunt.auto.intro": "Find the pages and collect what they hold.", "enc.auto.clue": "Find the article about {title}.", "enc.auto.name": "Bookmark: {title}", "enc.res.title": "The hunt is over", "enc.res.good": "Well hunted! You collected {n} of {total}.", "enc.res.more": "You collected {n} of {total}. Read the articles again and hunt once more to master this chapter.", "enc.res.unlocked": "New hunts are open: {units}.", "enc.res.final": "The grand hunt is done. The book is yours.", "enc.finish": "Close the book", "enc.hud": "Hunt: {title}", "enc.lead": "To collect: {name}", "enc.q.back": "Back to the article", "enc.turn": "Turn the page", "enc.fx.found": "Collected: {name}. It is in your codex.", "enc.fx.again": "{name} is already in your codex. This answer counts for the hunt.", "enc.fx.missed": "Not collected yet. Read the article again: the clue comes back.", "enc.end.title": "Encyclopedia mastered!", "enc.end.sub": "You hunted through every chapter of the book.", "enc.end.stats": "Collected {found} of {total}. Articles read: {read} of {articles}." }, hr: { "enc.tagline": "Ilustrirana enciklopedija za istraživanje", "enc.open": "Otvori knjigu", "enc.continue": "Nastavi čitati", "enc.nav.label": "Dijelovi knjige", "enc.nav.title": "Naslovnica", "enc.nav.index": "Kazalo", "enc.nav.timeline": "Vremenska crta", "enc.nav.map": "Karta", "enc.nav.codex": "Kodeks", "enc.nav.hunts": "Potrage", "enc.masthead.sub": "Listaj članke, prati poveznice, a zatim kreni u potragu za odgovorima.", "enc.stat.found": "Skupljeno", "enc.stat.stars": "Zvjezdice", "enc.stat.read": "Pročitano", "enc.search.label": "Pretraži enciklopediju", "enc.search.placeholder": "Riječ, pa Enter", "enc.search.none": 'Nijedan članak ne odgovara upitu "{q}".', "enc.search.count": "Pronađeno: {n}. Pritisni Enter da otvoriš prvi.", "enc.search.results": "Rezultati pretrage", "enc.index": "Kazalo članaka", "enc.chapter": "Poglavlje {n}", "enc.locked": 'Potrage ovog poglavlja otvaraju se kad savladaš cjelinu "{unit}". Članke možeš čitati slobodno.', "enc.readMark": "pročitano", "enc.other": "Ostali članci", "enc.plate": "Ilustracija", "enc.back": "Natrag", "enc.seeAlso": "Vidi i", "enc.sources": "Izvori", "enc.openSource": "Otvori izvor u novoj kartici", "enc.audio.play": "Poslušaj", "enc.audio.stop": "Zaustavi slušanje", "reader.listen": "Poslušaj odlomak {n}", "reader.listen.stop": "Zaustavi odlomak {n}", "reader.listenAll": "Poslušaj cijeli tekst", "reader.listenAll.stop": "Zaustavi slušanje", "enc.runhead": "Članak", "enc.collect": "Uzmi: {name}", "enc.collect.hint": "Ova stranica odgovara na tvoj trag.", "enc.clue.label": "Trag {n} od {total}", "enc.clue.bar": "Tvoja potraga: {title}", "enc.clue.retry": "Opet na redu. Pročitaj ovu stranicu pažljivije.", "enc.clue.drop": "Odloži potragu", "enc.tl.title": "Vremenska crta", "enc.tl.intro": "Događaji na ravnalu, u mjerilu. Lijevom i desnom strelicom prelaziš s jednog na drugi.", "enc.tl.box": "Vremenska crta događaja", "enc.tl.read": "Pročitaj članak", "enc.tl.empty": "Još nema datiranih događaja.", "enc.bc": "pr. Kr.", "enc.map.title": "Karta", "enc.map.intro": "Mjedene pribadače označavaju mjesta iz članaka. Odaberi pribadaču ili ime s popisa ispod karte.", "enc.map.places": "Mjesta na karti", "enc.map.none": "Na ovoj karti još nema označenih mjesta.", "enc.map.box": "Karta", "enc.codex.title": "Kodeks", "enc.codex.intro": "Sve što si skupio u potragama i činjenica koju te je svaki predmet naučio.", "enc.codex.count": "Skupljeno {found} od {total}", "enc.codex.unknown": "Još nije pronađeno", "enc.codex.taught": "Naučio te je", "enc.codex.read": 'Pročitaj "{title}"', "enc.codex.empty": "Započni potragu da ispuniš ovu stranicu.", "enc.hunts.title": "Potrage", "enc.hunts.intro": "Svaka potraga daje trag. Pronađi članak, uzmi predmet i odgovori na njegovo pitanje. Prvo čitaj: odgovor je u članku.", "enc.hunt.clues": "Tragova: {n}", "enc.hunt.found": "Skupljeno {found} od {n}", "enc.hunt.start": "Kreni u potragu", "enc.hunt.again": "Potraži ponovno", "enc.hunt.locked": 'Zaključano: prvo savladaj cjelinu "{unit}".', "enc.hunt.empty": "Ova potraga nema tragova.", "enc.hunt.final": "Velika potraga", "enc.hunt.final.intro": "Tragovi iz svih poglavlja, pomiješani. Pokaži da pamtiš.", "enc.hunt.final.locked": "Otvara se kad su sva poglavlja savladana.", "enc.hunt.auto": "Potraga: {unit}", "enc.hunt.auto.intro": "Pronađi stranice i skupi što skrivaju.", "enc.auto.clue": "Pronađi članak o temi: {title}.", "enc.auto.name": "Straničnik: {title}", "enc.res.title": "Potraga je gotova", "enc.res.good": "Dobra potraga! Skupio/la si {n} od {total}.", "enc.res.more": "Skupio/la si {n} od {total}. Pročitaj članke ponovno i potraži još jednom da savladaš ovo poglavlje.", "enc.res.unlocked": "Otvorene su nove potrage: {units}.", "enc.res.final": "Velika potraga je gotova. Knjiga je tvoja.", "enc.finish": "Zatvori knjigu", "enc.hud": "Potraga: {title}", "enc.lead": "Za uzeti: {name}", "enc.q.back": "Natrag na članak", "enc.turn": "Okreni stranicu", "enc.fx.found": "Skupljeno: {name}. Nalazi se u tvom kodeksu.", "enc.fx.again": "{name} već imaš u kodeksu. Ovaj odgovor se ipak računa za potragu.", "enc.fx.missed": "Još nije skupljeno. Pročitaj članak ponovno: trag se vraća.", "enc.end.title": "Enciklopedija savladana!", "enc.end.sub": "Proveo/la si potragu kroz svako poglavlje knjige.", "enc.end.stats": "Skupljeno {found} od {total}. Pročitanih članaka: {read} od {articles}." }, de: { "enc.tagline": "Eine bebilderte Enzyklopädie zum Entdecken", "enc.open": "Das Buch öffnen", "enc.continue": "Weiterlesen", "enc.nav.label": "Teile des Buches", "enc.nav.title": "Titelseite", "enc.nav.index": "Register", "enc.nav.timeline": "Zeitleiste", "enc.nav.map": "Karte", "enc.nav.codex": "Kodex", "enc.nav.hunts": "Schnitzeljagden", "enc.masthead.sub": "Blättere durch die Artikel, folge den Verweisen und gehe dann auf die Suche nach den Antworten.", "enc.stat.found": "Gesammelt", "enc.stat.stars": "Sterne", "enc.stat.read": "Gelesen", "enc.search.label": "Die Enzyklopädie durchsuchen", "enc.search.placeholder": "Ein Wort, dann Enter", "enc.search.none": "Kein Artikel passt zu „{q}“.", "enc.search.count": "{n} gefunden. Drücke Enter, um den ersten zu öffnen.", "enc.search.results": "Suchergebnisse", "enc.index": "Artikelregister", "enc.chapter": "Kapitel {n}", "enc.locked": "Die Schnitzeljagden dieses Kapitels öffnen sich, wenn du „{unit}“ gemeistert hast. Die Artikel kannst du jederzeit lesen.", "enc.readMark": "gelesen", "enc.other": "Weitere Artikel", "enc.plate": "Tafel", "enc.back": "Zurück", "enc.seeAlso": "Siehe auch", "enc.sources": "Quellen", "enc.openSource": "Die Quelle in einem neuen Tab öffnen", "enc.audio.play": "Anhören", "enc.audio.stop": "Anhören beenden", "reader.listen": "Absatz {n} anhören", "reader.listen.stop": "Absatz {n} anhalten", "reader.listenAll": "Den ganzen Text anhören", "reader.listenAll.stop": "Anhören beenden", "enc.runhead": "Artikel", "enc.collect": "Sammeln: {name}", "enc.collect.hint": "Diese Seite beantwortet deinen Hinweis.", "enc.clue.label": "Hinweis {n} von {total}", "enc.clue.bar": "Deine Suche: {title}", "enc.clue.retry": "Wieder da. Lies diese Seite genauer.", "enc.clue.drop": "Die Suche beiseitelegen", "enc.tl.title": "Zeitleiste", "enc.tl.intro": "Ereignisse an einem Lineal, maßstabsgetreu. Mit den Pfeiltasten links und rechts wechselst du zwischen ihnen.", "enc.tl.box": "Zeitleiste der Ereignisse", "enc.tl.read": "Den Artikel lesen", "enc.tl.empty": "Es gibt noch keine datierten Ereignisse.", "enc.bc": "v. Chr.", "enc.map.title": "Karte", "enc.map.intro": "Messingnadeln markieren die Orte der Artikel. Wähle eine Nadel oder einen Namen aus der Liste darunter.", "enc.map.places": "Orte auf dieser Karte", "enc.map.none": "Auf dieser Karte sind noch keine Orte markiert.", "enc.map.box": "Die Karte", "enc.codex.title": "Kodex", "enc.codex.intro": "Alles, was du auf deinen Suchen gesammelt hast, und was dir jedes Stück beigebracht hat.", "enc.codex.count": "{found} von {total} gesammelt", "enc.codex.unknown": "Noch nicht gefunden", "enc.codex.taught": "Das hat es dich gelehrt", "enc.codex.read": "„{title}“ lesen", "enc.codex.empty": "Starte eine Suche, um diese Seite zu füllen.", "enc.hunts.title": "Schnitzeljagden", "enc.hunts.intro": "Jede Jagd gibt dir einen Hinweis. Finde den Artikel, sammle das Gesuchte und beantworte die Frage dazu. Lies zuerst: Die Antwort steht im Artikel.", "enc.hunt.clues": "Hinweise: {n}", "enc.hunt.found": "{found} von {n} gesammelt", "enc.hunt.start": "Die Jagd starten", "enc.hunt.again": "Noch einmal jagen", "enc.hunt.locked": "Gesperrt: Meistere zuerst „{unit}“.", "enc.hunt.empty": "Diese Jagd hat keine Hinweise.", "enc.hunt.final": "Die große Jagd", "enc.hunt.final.intro": "Hinweise aus allen Kapiteln, durcheinander. Zeige, dass du dich erinnerst.", "enc.hunt.final.locked": "Öffnet sich, wenn alle Kapitel gemeistert sind.", "enc.hunt.auto": "Jagd: {unit}", "enc.hunt.auto.intro": "Finde die Seiten und sammle, was sie enthalten.", "enc.auto.clue": "Finde den Artikel über {title}.", "enc.auto.name": "Lesezeichen: {title}", "enc.res.title": "Die Jagd ist vorbei", "enc.res.good": "Gut gejagt! Du hast {n} von {total} gesammelt.", "enc.res.more": "Du hast {n} von {total} gesammelt. Lies die Artikel noch einmal und jage erneut, um dieses Kapitel zu meistern.", "enc.res.unlocked": "Neue Jagden sind offen: {units}.", "enc.res.final": "Die große Jagd ist geschafft. Das Buch gehört dir.", "enc.finish": "Das Buch schließen", "enc.hud": "Jagd: {title}", "enc.lead": "Zu sammeln: {name}", "enc.q.back": "Zurück zum Artikel", "enc.turn": "Umblättern", "enc.fx.found": "Gesammelt: {name}. Es ist in deinem Kodex.", "enc.fx.again": "{name} ist schon in deinem Kodex. Diese Antwort zählt für die Jagd.", "enc.fx.missed": "Noch nicht gesammelt. Lies den Artikel noch einmal: Der Hinweis kommt wieder.", "enc.end.title": "Enzyklopädie gemeistert!", "enc.end.sub": "Du hast jedes Kapitel des Buches durchjagt.", "enc.end.stats": "{found} von {total} gesammelt. Gelesene Artikel: {read} von {articles}." } }, R1 = (t) => {
    try {
      return new URL(t).hostname.replace(/^www\./, "");
    } catch (e) {
      return t;
    }
  };
  function D1(t, e) {
    var _a3, _b3;
    const s = t.s, n = t.arts.get(e);
    if (!n) return u("div", {});
    const r = n.unit ? s.unitTitle(n.unit) : "", i = n.assetId ? s.pack.assets.find((z) => z.id === n.assetId) : void 0, o = i ? s.data.assets[i.id] : void 0, a = t.pinned(), c = a && a.step.article === e ? a : null, l = c ? u("div", { class: "enc-collect" }, u("span", { class: "enc-collect-hint" }, c.retry ? s.s("enc.clue.retry") : s.s("enc.collect.hint")), I("collect-".concat(c.step.id), u("span", { class: "enc-seal-label" }, s.s("enc.collect", { name: t.collectibleName(c.step) })), () => t.collect(c.step), { class: "btn btn-primary btn-big enc-seal", "data-autofocus": "" })) : null, d = i && o && i.kind === "image" ? u("figure", { class: "enc-figure", testid: "article-figure" }, u("div", { class: "enc-figure-frame" }, u("img", { src: o, alt: s.t(i.alt) })), u("figcaption", {}, s.t(i.alt))) : null, h = (_a3 = s.pack.extensions.narration) != null ? _a3 : {}, p = i && o && i.kind === "audio" ? o : s.data.assets[(_b3 = h["art.".concat(e, ".body")]) != null ? _b3 : ""];
    let f = null;
    if (p) {
      const z = (_) => "".concat(_ ? "■" : "▶", " ").concat(s.s(_ ? "enc.audio.stop" : "enc.audio.play"));
      f = I("article-audio", z(false), () => {
        if (t.audio) {
          t.stopAudio(), f && (f.textContent = z(false));
          return;
        }
        try {
          const _ = new Audio(p);
          t.audio = _, _.onended = () => {
            t.audio === _ && (t.audio = null), f && (f.textContent = z(false)), s.audio.duck(false);
          }, _.play().then(() => s.audio.duck(true), () => {
          }), f && (f.textContent = z(true));
        } catch (e2) {
          t.audio = null;
        }
      }, { class: "btn btn-small enc-audio", "aria-describedby": "enc-audio-desc" });
    }
    const m = n.related.filter((z) => t.arts.has(z)), g = new Map(s.pack.factbase.map((z) => [z.id, z])), k = n.citations.map((z) => g.get(z)).filter((z) => !!z), b = t.glossWords(e), v = mi(s.ui), w = new Set(b.filter((z) => t.glossOff().has("".concat(e, "/").concat(z.id))).map((z) => z.id)), y = (z, _) => I("link-".concat(z), _, () => t.article(z, () => t.article(e)), { class: "enc-xlink" }), $ = pi(t.segments(e)), x = fi($.map((z) => z.runs), b);
    return u("div", { class: "enc-article" }, u("div", { class: "enc-toolbar" }, I("back", "‹ ".concat(s.s("enc.back")), () => t.back(), { class: "btn btn-small btn-ghost" })), u("article", { class: "enc-spread", testid: "article", "data-article": e }, u("div", { class: "enc-text" }, u("p", { class: "enc-runhead" }, u("span", {}, r || s.s("enc.runhead")), u("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), u("span", {}, s.courseTitle())), u("h1", { class: "screen-title enc-article-title", tabindex: "-1", testid: "article-title" }, n.title), u("p", { class: "enc-rule", "aria-hidden": "true" }), l, u("div", { class: "enc-body gloss-scope", testid: "article-body", ...b.length > 0 && s.pack.targetLang ? { lang: s.pack.targetLang } : {} }, x.map((z, _) => {
      var _a4;
      return gi(z, v, y, w, (_a4 = $[_]) == null ? void 0 : _a4.heading);
    }), b.length > 0 ? v.el : null)), u("aside", { class: "enc-plates" }, d, f ? u("div", { class: "enc-audio-wrap" }, f, u("span", { class: "sr-only", id: "enc-audio-desc" }, i ? s.t(i.alt) : "")) : null, m.length > 0 ? u("section", { class: "enc-related", testid: "related" }, u("h2", {}, s.s("enc.seeAlso")), u("ul", {}, m.map((z) => u("li", {}, I("related-".concat(z), t.articleTitle(z), () => t.article(z, () => t.article(e)), { class: "enc-related-btn" }))))) : null, k.length > 0 ? u("section", { class: "enc-sources", testid: "citations" }, u("h2", {}, s.s("enc.sources")), u("ul", {}, k.map((z) => u("li", { testid: "citation-".concat(z.id) }, u("span", { class: "enc-source-name" }, z.source), z.claim && s.text.hasText(z.claim) ? u("span", { class: "enc-source-claim" }, s.t(z.claim)) : null, z.url ? u("a", { class: "enc-source-link", href: z.url, target: "_blank", rel: "noopener noreferrer", testid: "citation-link-".concat(z.id) }, R1(z.url), u("span", { class: "sr-only" }, " (".concat(s.s("enc.openSource"), ")"))) : null)))) : null)));
  }
  function Yd(t) {
    const e = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    let s = "", n = Math.max(1, Math.floor(t));
    for (const [r, i] of e) for (; n >= r; ) s += i, n -= r;
    return s;
  }
  function L1(t) {
    const e = t.s, s = t.statusCounts(), n = (b, v, w) => u("span", { class: "enc-stat", testid: w }, u("span", { class: "enc-stat-label" }, b), u("b", { class: "enc-stat-value" }, v)), r = u("ul", { class: "enc-results", testid: "search-results" }), i = u("p", { class: "enc-search-status", id: "enc-search-status", role: "status", testid: "search-status" }), o = (b) => {
      const v = t.search(b);
      As(r);
      for (const y of v) r.appendChild(u("li", {}, u("button", { type: "button", class: "enc-result", testid: "result-".concat(y.id), onclick: () => t.article(y.id, () => t.explore()) }, u("span", { class: "enc-result-title" }, t.articleTitle(y.id)), y.snippet ? u("span", { class: "enc-result-snippet" }, y.snippet) : null)));
      const w = b.trim();
      return i.textContent = w.replace(/\s/g, "").length < 2 ? "" : v.length === 0 ? e.s("enc.search.none", { q: w }) : e.s("enc.search.count", { n: v.length }), v;
    }, a = u("input", { type: "search", class: "enc-search-input", id: "enc-search", testid: "search", autocomplete: "off", spellcheck: "false", enterkeyhint: "search", placeholder: e.s("enc.search.placeholder"), "aria-describedby": "enc-search-status", value: t.query, oninput: (b) => {
      t.query = b.target.value, o(t.query);
    }, onkeydown: (b) => {
      const v = b;
      if (v.key !== "Enter") return;
      v.preventDefault();
      const w = o(t.query)[0];
      w && t.article(w.id, () => t.explore());
    } }), c = u("form", { class: "enc-search", role: "search", onsubmit: (b) => b.preventDefault() }, u("label", { class: "enc-search-label", for: "enc-search" }, e.s("enc.search.label")), u("div", { class: "enc-search-box" }, u("span", { class: "enc-search-glass", "aria-hidden": "true" }), a), i, u("div", { class: "enc-results-wrap", "aria-label": e.s("enc.search.results"), role: "group" }, r));
    t.query && o(t.query);
    const l = e.pack.assets.find((b) => b.kind === "image" && e.data.assets[b.id]), d = l ? u("figure", { class: "enc-plate", testid: "plate" }, u("div", { class: "enc-plate-frame" }, u("img", { src: e.data.assets[l.id], alt: e.t(l.alt), loading: "lazy" })), u("figcaption", {}, u("span", { class: "enc-plate-no" }, e.s("enc.plate")), " ", e.t(l.alt))) : null, h = e.units(), p = /* @__PURE__ */ new Set(), f = (b) => {
      p.add(b);
      const v = t.data.read.includes(b);
      return u("li", {}, u("button", { type: "button", class: "enc-entry", testid: "article-".concat(b), "data-read": v ? "true" : null, onclick: () => t.article(b, () => t.explore()) }, u("span", { class: "enc-entry-title" }, t.articleTitle(b)), u("span", { class: "enc-entry-leader", "aria-hidden": "true" }), v ? u("span", { class: "enc-entry-read" }, u("span", { "aria-hidden": "true" }, "✓"), u("span", { class: "sr-only" }, " ".concat(e.s("enc.readMark")))) : null));
    }, m = h.flatMap((b, v) => {
      const w = t.articleList().filter((z) => z.unit === b.id).map((z) => z.id);
      if (w.length === 0) return [];
      const $ = t.model.hunts.filter((z) => z.unit === b.id).length > 0 && !e.isUnlocked(b.id), x = b.requires.find((z) => !e.isMastered(z));
      return [u("section", { class: "enc-chapter", testid: "chapter-".concat(b.id), "data-locked": $ ? "true" : null }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, Yd(v + 1)), u("span", { class: "enc-chapter-name" }, e.unitTitle(b.id))), $ ? u("p", { class: "enc-chapter-note", testid: "chapter-locked-".concat(b.id) }, u("span", { "aria-hidden": "true" }, "🔒 "), e.s("enc.locked", { unit: x ? e.unitTitle(x) : e.unitTitle(b.id) })) : null, u("ul", { class: "enc-entries" }, w.map(f)))];
    }), g = t.articleList().filter((b) => !p.has(b.id) && !h.some((v) => v.id === b.unit)), k = g.length > 0 ? u("section", { class: "enc-chapter", testid: "chapter-other" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-chapter-name" }, e.s("enc.other"))), u("ul", { class: "enc-entries" }, g.map((b) => f(b.id)))) : null;
    return u("div", { class: "enc-explore" }, u("header", { class: "enc-masthead" }, u("p", { class: "enc-eyebrow" }, e.pack.subject.charAt(0).toLocaleUpperCase() + e.pack.subject.slice(1)), u("h1", { class: "screen-title enc-title", tabindex: "-1", testid: "explore-title" }, e.courseTitle()), u("p", { class: "enc-orn", "aria-hidden": "true" }, "❦"), u("p", { class: "enc-sub" }, e.s("enc.masthead.sub")), u("p", { class: "enc-stats", testid: "status" }, n(e.s("enc.stat.found"), "".concat(s.found, " / ").concat(s.total), "status-found"), n(e.s("enc.stat.stars"), "".concat(s.stars, " / ").concat(s.maxStars), "status-stars"), n(e.s("enc.stat.read"), "".concat(s.read, " / ").concat(s.articles), "status-read"))), u("div", { class: "enc-columns" }, u("aside", { class: "enc-side" }, c, d), u("div", { class: "enc-indexwrap" }, u("h2", { class: "sr-only" }, e.s("enc.index")), u("div", { class: "enc-index" }, m, k))));
  }
  function C1(t) {
    const e = t.pinned(), s = t.hunt;
    if (!e || !s) return null;
    const n = t.s;
    return u("div", { class: "enc-clue".concat(e.retry ? " is-retry" : ""), role: "group", "aria-label": n.s("enc.clue.bar", { title: s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt) }), testid: "clue-bar", "data-step": e.step.id }, u("span", { class: "enc-clue-pin", "aria-hidden": "true" }), u("div", { class: "enc-clue-main" }, u("span", { class: "enc-clue-label" }, "".concat(s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt), " · ").concat(n.s("enc.clue.label", { n: e.n, total: e.total }))), u("p", { class: "enc-clue-text", testid: "clue" }, t.stepClue(e.step)), e.retry ? u("span", { class: "tag tag-retry enc-clue-retry", testid: "clue-retry" }, n.s("enc.clue.retry")) : null), I("clue-drop", n.s("enc.clue.drop"), () => t.dropHunt(), { class: "btn btn-small btn-ghost enc-clue-drop" }));
  }
  function Z1(t, e, s) {
    const n = t.s;
    return u("div", { class: "enc-hud", testid: "hunt-hud" }, u("span", { class: "enc-hud-title" }, n.s("enc.hud", { title: e.final ? n.s("enc.hunt.final") : t.huntTitle(e.hunt) })), u("span", { class: "enc-hud-step" }, n.s("enc.clue.label", { n: s, total: e.steps.length })), u("span", { class: "enc-hud-pips", role: "img", "aria-label": n.s("enc.hunt.found", { found: e.collected.length, n: e.steps.length }) }, e.steps.map((r) => u("span", { class: "enc-hud-pip".concat(e.collected.includes(r.id) ? " is-found" : ""), "aria-hidden": "true" }))));
  }
  function U1(t) {
    const e = t.s, s = t.statusCounts(), n = t.model.hunts.map((r) => ({ hunt: r, steps: t.stepsOf(r) })).filter((r) => r.steps.length > 0).map((r) => u("section", { class: "enc-codex-group", "data-unit": r.hunt.unit }, u("h2", {}, e.unitTitle(r.hunt.unit)), u("ul", { class: "enc-codex-grid" }, r.steps.map((i) => t.found(i) ? u("li", { class: "enc-specimen is-found", testid: "codex-".concat(i.id), "data-found": "true" }, u("span", { class: "enc-medal", "aria-hidden": "true" }, "✦"), u("h3", { class: "enc-specimen-name" }, t.collectibleName(i)), u("p", { class: "enc-specimen-taught" }, u("span", { class: "enc-specimen-taught-label" }, "".concat(e.s("enc.codex.taught"), ": ")), t.taught(i)), I("codex-link-".concat(i.id), e.s("enc.codex.read", { title: t.articleTitle(i.article) }), () => t.article(i.article, () => t.codex()), { class: "btn btn-small enc-specimen-link" })) : u("li", { class: "enc-specimen is-unknown", testid: "codex-".concat(i.id), "data-found": "false" }, u("span", { class: "enc-medal", "aria-hidden": "true" }, "?"), u("p", { class: "enc-specimen-name" }, e.s("enc.codex.unknown")))))));
    return u("div", { class: "enc-codex" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "codex-title" }, e.s("enc.codex.title")), u("p", { class: "enc-part-intro" }, e.s("enc.codex.intro")), u("p", { class: "enc-codex-count", testid: "codex-count", "data-found": String(s.found), "data-total": String(s.total) }, e.s("enc.codex.count", { found: s.found, total: s.total })), s.found === 0 ? u("p", { class: "enc-codex-empty", testid: "codex-empty" }, e.s("enc.codex.empty")) : null, n);
  }
  function F1(t, e) {
    const s = t.s, n = s.units(), r = e ? u("div", { class: "enc-result".concat(e.stars >= 2 ? " is-good" : ""), role: "group", "aria-label": s.s("enc.res.title"), testid: "hunt-result", "data-stars": String(e.stars), "data-final": e.final ? "true" : "false", "data-collected": String(e.collected), "data-total": String(e.total) }, u("h2", { class: "enc-result-title" }, s.s("enc.res.title")), s.stars(e.stars, "hunt-result-stars"), u("p", { class: "enc-result-text" }, t.resultText(e))) : null, i = n.flatMap((l, d) => {
      const h = t.model.hunts.filter((m) => m.unit === l.id);
      if (h.length === 0) return [];
      const p = !s.isUnlocked(l.id), f = l.requires.find((m) => !s.isMastered(m));
      return [u("section", { class: "enc-hunt-chapter", "data-unit": l.id, "data-locked": p ? "true" : null, testid: "hunt-chapter-".concat(l.id) }, u("div", { class: "enc-hunt-chapter-head" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, Yd(d + 1)), u("span", { class: "enc-chapter-name" }, s.unitTitle(l.id))), s.stars(s.unitStars(l.id), "hunt-stars-".concat(l.id))), h.map((m) => {
        const g = t.stepsOf(m), k = g.filter((w) => t.found(w)).length, b = t.isHuntOpen(m), v = t.huntIntro(m);
        return u("article", { class: "enc-hunt-card", "data-locked": b ? null : "true" }, u("h3", { class: "enc-hunt-title" }, t.huntTitle(m)), v ? u("p", { class: "enc-hunt-intro" }, v) : null, u("p", { class: "enc-hunt-meta" }, "".concat(s.s("enc.hunt.clues", { n: g.length }), " · ").concat(s.s("enc.hunt.found", { found: k, n: g.length }))), g.length === 0 ? u("p", { class: "enc-hunt-note" }, s.s("enc.hunt.empty")) : p ? u("p", { class: "enc-hunt-note", testid: "hunt-locked-".concat(m.id) }, u("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.locked", { unit: f ? s.unitTitle(f) : s.unitTitle(l.id) })) : null, I("hunt-".concat(m.id), k === g.length && g.length > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startHunt(m), { class: "btn btn-primary enc-hunt-go", ...b ? {} : { disabled: true }, "data-locked": b ? null : "true", "data-stars": String(s.unitStars(l.id)) }));
      }))];
    }), o = t.isFinalOpen(), a = t.finalSteps(), c = a.length > 0 ? u("section", { class: "enc-hunt-chapter enc-grand", "data-locked": o ? null : "true", testid: "hunt-chapter-final" }, u("div", { class: "enc-hunt-chapter-head" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, "★"), u("span", { class: "enc-chapter-name" }, s.s("enc.hunt.final"))), s.stars(s.bossStars(), "hunt-stars-final")), u("article", { class: "enc-hunt-card", "data-locked": o ? null : "true" }, u("p", { class: "enc-hunt-intro" }, s.s("enc.hunt.final.intro")), u("p", { class: "enc-hunt-meta" }, s.s("enc.hunt.clues", { n: a.length })), o ? null : u("p", { class: "enc-hunt-note", testid: "hunt-locked-final" }, u("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.final.locked")), I("hunt-final", s.bossStars() > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startFinal(), { class: "btn btn-primary enc-hunt-go", ...o ? {} : { disabled: true }, "data-locked": o ? null : "true", "data-stars": String(s.bossStars()) }))) : null;
    return u("div", { class: "enc-hunts" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "hunts-title" }, s.s("enc.hunts.title")), u("p", { class: "enc-part-intro" }, s.s("enc.hunts.intro")), r, s.bossStars() >= 1 ? u("div", { class: "actions" }, I("finish", s.s("enc.finish"), () => t.end(), { class: "btn btn-big" })) : null, i, c);
  }
  function B1(t) {
    let e = 1 / 0;
    for (let s = 0; s < t.length; s++) for (let n = s + 1; n < t.length; n++) {
      const r = t[s], i = t[n];
      e = Math.min(e, Math.hypot(r.x - i.x, r.y - i.y));
    }
    return e;
  }
  function K1(t, e, s = 34, n = 300) {
    const r = B1(t);
    return !Number.isFinite(r) || r <= 0 ? Math.min(e, n) : Math.round(Math.min(e, Math.max(n, e * s / r)));
  }
  function q1(t, e, s) {
    const n = s === "left" || s === "right", r = [...t].sort((a, c) => (n ? a.x - c.x || a.y - c.y : a.y - c.y || a.x - c.x) || a.id.localeCompare(c.id)), i = r.findIndex((a) => a.id === e);
    return r.length === 0 ? void 0 : r[(i + (s === "right" || s === "down" ? 1 : -1) + r.length) % r.length];
  }
  const G1 = (t, e, s) => ({ left: "".concat(Math.round(t.x / e * 1e4) / 100, "%"), top: "".concat(Math.round(t.y / s * 1e4) / 100, "%") }), Zi = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 5e3];
  function W1(t, e = 9) {
    for (const s of Zi) if (t / s <= e) return s;
    return Zi[Zi.length - 1];
  }
  function H1(t, e) {
    const s = Math.max(1, e - t), n = W1(s), r = n >= 10 ? n / 5 : n >= 2 ? n / 2 : n, i = [], o = Math.ceil(t / r) * r;
    for (let a = o; a <= e; a += r) a !== 0 && i.push({ year: a, major: a % n === 0 });
    return i;
  }
  function V1(t, e = {}) {
    var _a3, _b3, _c2;
    const s = (_a3 = e.card) != null ? _a3 : 150, n = (_b3 = e.gap) != null ? _b3 : 12, r = Math.round(s / 2) + 14, i = [...t].sort((v, w) => v.year - w.year || v.id.localeCompare(w.id)), o = i.length, a = Math.ceil(o / 2), c = Math.max((_c2 = e.minWidth) != null ? _c2 : 760, a * (s + n) + 2 * r - n), l = o > 0 ? i[0].year : 0, d = o > 0 ? i[o - 1].year : 0, h = Math.max(1, d - l), p = (c - 2 * r) / h, f = (v) => o === 1 || d === l ? c / 2 : r + (v - l) * p, m = i.map((v, w) => ({ id: v.id, year: v.year, tick: f(v.year), x: f(v.year), lane: w % 2 })), g = s + n;
    for (const v of [0, 1]) {
      const w = m.filter((y) => y.lane === v);
      for (let y = 0; y < w.length; y++) {
        const $ = w[y];
        $.x = Math.max(r, $.x), y > 0 && ($.x = Math.max($.x, w[y - 1].x + g));
      }
      for (let y = w.length - 1; y >= 0; y--) {
        const $ = w[y];
        $.x = Math.min(c - r, $.x), y < w.length - 1 && ($.x = Math.min($.x, w[y + 1].x - g));
      }
    }
    const k = (v) => l + (v - r) / p, b = o === 0 || d === l ? [] : H1(Math.floor(k(0)), Math.ceil(k(c))).map((v) => ({ year: v.year, x: r + (v.year - l) * p, major: v.major }));
    return { width: c, pad: r, events: m, ticks: b.filter((v) => v.x >= 0 && v.x <= c), min: l, max: d };
  }
  const Jd = (t, e) => t < 0 ? "".concat(-t, " ").concat(e) : String(t), Ui = 150, Wn = 440, Hn = 54;
  function Y1(t) {
    var _a3, _b3;
    const e = t.s, s = t.model.timeline, n = V1(s.map((m) => ({ id: m.id, year: m.year })), { card: Ui }), r = new Map(s.map((m) => [m.id, m])), i = e.s("enc.bc"), o = Wn / 2;
    (!t.eventId || !r.has(t.eventId)) && (t.eventId = (_b3 = (_a3 = n.events[0]) == null ? void 0 : _a3.id) != null ? _b3 : null);
    const a = u("div", { class: "enc-tl-detail", role: "status", testid: "event-detail" }), c = (m) => {
      const g = r.get(m);
      return g ? g.whenKey && e.text.hasText(g.whenKey) ? e.t(g.whenKey) : Jd(g.year, i) : "";
    }, l = (m) => {
      const g = r.get(m);
      g && (t.eventId = m, a.replaceChildren(u("b", { class: "enc-tl-detail-year" }, c(m)), " ", u("span", { class: "enc-tl-detail-label" }, e.t(g.label)), ...g.text ? [" ", u("span", { class: "enc-tl-detail-text" }, e.t(g.text))] : []), a.setAttribute("data-event", m));
    }, d = ue("svg", { class: "enc-tl-lines", width: n.width, height: Wn, viewBox: "0 0 ".concat(n.width, " ").concat(Wn), "aria-hidden": "true", focusable: "false" }, ...n.events.map((m) => ue("path", { d: "M ".concat(m.tick, " ").concat(o, " L ").concat(m.x, " ").concat(o + (m.lane === 0 ? -Hn : Hn)) }))), h = u("div", { class: "enc-tl-ruler", "aria-hidden": "true", style: "top:".concat(o - 21, "px") }, n.ticks.map((m) => u("span", { class: "enc-tl-tick".concat(m.major ? " is-major" : ""), style: "left:".concat(m.x, "px") }, m.major ? u("span", { class: "enc-tl-tick-label" }, Jd(m.year, i)) : null)), n.events.map((m) => u("span", { class: "enc-tl-mark", style: "left:".concat(m.tick, "px") }))), p = n.events.map((m) => {
      const g = r.get(m.id);
      if (!g) return null;
      const k = !!g.article && t.arts.has(g.article);
      return I("event-".concat(g.id), [u("span", { class: "enc-tl-card-year" }, c(g.id)), u("span", { class: "enc-tl-card-label" }, e.t(g.label)), k ? u("span", { class: "enc-tl-card-more" }, "".concat(e.s("enc.tl.read"), " ›")) : null], () => {
        l(g.id), k && t.article(g.article, () => t.timeline());
      }, { class: "enc-tl-card".concat(k ? " has-article" : ""), "data-lane": String(m.lane), "data-year": String(g.year), "data-article": k ? g.article : null, style: "left:".concat(Math.round(m.x - Ui / 2), "px;width:").concat(Ui, "px;").concat(m.lane === 0 ? "bottom:".concat(o + Hn, "px") : "top:".concat(o + Hn, "px")), onfocus: () => l(g.id), onmouseenter: () => l(g.id) });
    }), f = u("div", { class: "enc-tl-scroll", testid: "timeline", role: "group", "aria-label": e.s("enc.tl.box"), onkeydown: (m) => {
      var _a4;
      const g = m;
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(g.key) || g.altKey || g.ctrlKey || g.metaKey) return;
      const b = [...f.querySelectorAll(".enc-tl-card")], v = b.indexOf(document.activeElement);
      if (v < 0) return;
      const w = g.key === "Home" ? 0 : g.key === "End" ? b.length - 1 : Math.min(b.length - 1, Math.max(0, v + (g.key === "ArrowRight" ? 1 : -1)));
      g.preventDefault(), (_a4 = b[w]) == null ? void 0 : _a4.focus();
    } }, u("div", { class: "enc-tl-track", style: "width:".concat(n.width, "px;height:").concat(Wn, "px") }, d, h, p));
    return t.eventId && l(t.eventId), u("div", { class: "enc-timeline" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "timeline-title" }, e.s("enc.tl.title")), u("p", { class: "enc-part-intro" }, s.length > 0 ? e.s("enc.tl.intro") : e.s("enc.tl.empty")), f, a);
  }
  function J1(t) {
    const e = t.s, s = t.model.map, n = s ? e.pack.assets.find((h) => h.id === s.asset) : void 0, r = s ? e.data.assets[s.asset] : void 0;
    if (!s || !n || !r) return u("div", { class: "enc-map-view" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1" }, e.s("enc.map.title")), u("p", {}, e.s("enc.map.none")));
    const i = s.places.filter((h) => t.arts.has(h.article)), o = s.width > 0 && s.height > 0, a = (h) => t.article(h, () => t.map()), c = o ? K1(i, s.width) : 0, l = o ? i.map((h) => {
      const p = G1(h, s.width, s.height);
      return I("place-".concat(h.id), [u("span", { class: "enc-pin-head", "aria-hidden": "true" }), u("span", { class: "enc-pin-name", "aria-hidden": "true" }, e.t(h.label))], () => a(h.article), { class: "enc-pin", "aria-label": e.t(h.label), "data-article": h.article, style: "left:".concat(p.left, ";top:").concat(p.top) });
    }) : [], d = u("div", { class: "enc-map-stage", testid: "map", style: o ? "aspect-ratio:".concat(s.width, " / ").concat(s.height, ";min-width:").concat(c, "px") : "", onkeydown: (h) => {
      var _a3, _b3;
      const p = h, f = p.key === "ArrowLeft" ? "left" : p.key === "ArrowRight" ? "right" : p.key === "ArrowUp" ? "up" : p.key === "ArrowDown" ? "down" : null;
      if (!f || p.altKey || p.ctrlKey || p.metaKey) return;
      const m = (_a3 = document.activeElement) == null ? void 0 : _a3.getAttribute("data-testid");
      if (!(m == null ? void 0 : m.startsWith("place-"))) return;
      const g = q1(i, m.slice(6), f);
      g && (p.preventDefault(), (_b3 = d.querySelector('[data-testid="place-'.concat(g.id, '"]'))) == null ? void 0 : _b3.focus());
    } }, u("img", { class: "enc-map-img", src: r, alt: e.t(n.alt) }), l);
    return u("div", { class: "enc-map-view" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "map-title" }, e.s("enc.map.title")), u("p", { class: "enc-part-intro" }, i.length > 0 ? e.s("enc.map.intro") : e.s("enc.map.none")), u("figure", { class: "enc-map-figure" }, u("div", { class: "enc-map-scroll", role: "group", "aria-label": e.s("enc.map.box") }, d), u("figcaption", {}, e.t(n.alt))), i.length > 0 ? u("section", { class: "enc-places", testid: "places" }, u("h2", {}, e.s("enc.map.places")), u("ul", {}, i.map((h) => u("li", {}, I("place-link-".concat(h.id), [u("span", { class: "enc-place-dot", "aria-hidden": "true" }), e.t(h.label)], () => a(h.article), { class: "enc-place-btn" }))))) : null);
  }
  function Q1(t, e, s) {
    const n = [];
    for (let r = 1; ; r++) {
      const i = t["art-".concat(e, "-p").concat(s).concat(r > 1 ? "-".concat(r) : "")];
      if (!i) break;
      n.push(i);
    }
    return n;
  }
  const Qd = () => {
    var _a3;
    return (_a3 = document.scrollingElement) != null ? _a3 : document.documentElement;
  };
  function X1() {
    const t = Qd(), e = t.scrollHeight - t.clientHeight;
    return e > 0 ? t.scrollTop / e : 0;
  }
  function e$(t, e, s) {
    if (s.length === 0) return null;
    const n = t.s.ui, r = t.glossOff();
    return u("section", { class: "enc-glossary", testid: "glossary-panel", "aria-labelledby": "enc-glossary-h" }, u("h2", { id: "enc-glossary-h" }, n("gloss.panel")), u("ul", {}, s.map((i) => {
      var _a3, _b3;
      const o = "".concat(e, "/").concat(i.id), a = u("input", { type: "checkbox", testid: "gloss-deck-".concat(i.id), "aria-label": n("gloss.deck.for", { term: (_a3 = i.lemma) != null ? _a3 : i.term }), checked: !r.has(o), onchange: () => t.setGlossDeck(e, i.id, a.checked) });
      return u("li", { testid: "glossary-entry-".concat(i.id) }, u("span", { class: "enc-gloss-main" }, u("strong", { class: "enc-gloss-lemma" }, (_b3 = i.lemma) != null ? _b3 : i.term), i.pos ? u("span", { class: "gloss-pos" }, n("gloss.pos.".concat(i.pos))) : null, u("span", { class: "enc-gloss-text" }, i.gloss), i.note ? u("span", { class: "enc-gloss-note" }, i.note) : null), u("label", { class: "enc-gloss-deck" }, a, u("span", {}, n("gloss.deck"))));
    })));
  }
  function t$(t, e) {
    var _a3;
    const s = t.s, n = s.ui, r = t.chapters(), i = Math.max(0, r.findIndex((W) => W.id === e)), o = r[i];
    if (!o) return u("div", {});
    const a = t.glossWords(e), c = mi(n), l = t.glossOff(), d = new Set(a.filter((W) => l.has("".concat(e, "/").concat(W.id))).map((W) => W.id)), h = pi(o.paragraphs.map((W) => [{ text: W }])), p = fi(h.map((W) => W.runs), a), f = t.chapterRead(e), m = r[i - 1], g = r[i + 1], k = o.unit ? s.unitTitle(o.unit) : "", b = t.chapterItems(e), v = u("nav", { class: "enc-reader-toc", "aria-label": n("reader.toc"), testid: "reader-toc" }, u("h2", {}, n("reader.toc")), u("ol", {}, r.map((W, re) => u("li", {}, I("reader-chapter-".concat(W.id), [u("span", { class: "enc-reader-num" }, String(re + 1)), u("span", { class: "enc-reader-toc-title" }, W.title), t.chapterRead(W.id) ? [u("span", { class: "mark", "aria-hidden": "true" }, "✓"), u("span", { class: "sr-only" }, " (".concat(n("reader.chapterRead"), ")"))] : null], () => t.reader(W.id), { class: "enc-reader-toc-btn", "data-read": String(t.chapterRead(W.id)), ...W.id === e ? { "aria-current": "true" } : {} }))))), w = u("div", { class: "enc-reader-end", testid: "reader-end", "aria-hidden": "true" }), y = u("p", { class: "enc-reader-progress", testid: "reader-progress", "data-chapter": e, "data-index": String(i + 1), "data-total": String(r.length), "data-read": String(f), "aria-live": "polite" }, n("reader.progress", { n: i + 1, total: r.length })), $ = (W) => {
      t.markChapterRead(e), W && t.reader(W);
    }, x = u("div", { class: "enc-reader-nav" }, I("reader-prev", "‹ ".concat(n("reader.prev")), () => m ? t.reader(m.id) : void 0, { class: "btn", ...m ? {} : { disabled: true } }), y, I("reader-next", "".concat(n("reader.next"), " ›"), () => $(g == null ? void 0 : g.id), { class: "btn btn-primary", ...g ? {} : { disabled: true } })), z = o.paragraphs.map((W, re) => Q1(s.data.assets, e, re + 1)), _ = { from: -1 }, O = /* @__PURE__ */ new Map(), R = { el: null }, S = () => {
      for (const [W, re] of O) {
        const zt = t.audio !== null && _.from >= 0 && W === _.from;
        re.textContent = zt ? "■" : "▶", re.setAttribute("aria-label", s.s(zt ? "reader.listen.stop" : "reader.listen", { n: W + 1 }));
      }
      R.el && (R.el.textContent = "".concat(t.audio ? "■" : "▶", " ").concat(s.s(t.audio ? "reader.listenAll.stop" : "reader.listenAll")));
    }, A = (W, re) => {
      var _a4;
      if (t.audio) {
        t.stopAudio(), _.from = -1, S();
        return;
      }
      const zt = [];
      for (let _t = W; _t <= re; _t++) for (const is of (_a4 = z[_t]) != null ? _a4 : []) zt.push({ p: _t, url: is });
      const Ks = () => {
        const _t = zt.shift();
        if (!_t) {
          t.stopAudio(), _.from = -1, S();
          return;
        }
        try {
          const is = new Audio(_t.url);
          t.audio = is, _.from = _t.p, is.onended = () => {
            t.audio === is && (t.audio = null), Ks();
          }, is.play().then(() => s.audio.duck(true), () => {
          });
        } catch (e2) {
          t.audio = null, _.from = -1;
        }
        S();
      };
      Ks();
    }, j = z.some((W) => W.length > 0), T = u("div", { class: "enc-reader-body enc-body gloss-scope", testid: "reader-body", lang: (_a3 = s.pack.targetLang) != null ? _a3 : void 0 }, p.map((W, re) => {
      var _a4, _b3;
      const zt = gi(W, c, void 0, d, (_a4 = h[re]) == null ? void 0 : _a4.heading);
      if (!((_b3 = z[re]) == null ? void 0 : _b3.length)) return zt;
      const Ks = I("reader-play-".concat(re + 1), "▶", () => A(re, re), { class: "btn btn-small enc-reader-play", "aria-label": s.s("reader.listen", { n: re + 1 }) });
      return O.set(re, Ks), u("div", { class: "enc-reader-para" }, Ks, zt);
    }), c.el), D = j ? I("reader-play-all", "▶ ".concat(s.s("reader.listenAll")), () => A(0, o.paragraphs.length - 1), { class: "btn btn-small enc-reader-play-all" }) : null;
    R.el = D;
    const G = b.length > 0 ? I("reader-practice", n("reader.practice"), () => t.practice(e), { class: "btn btn-small" }) : null, F = u("div", { class: "enc-reader", testid: "reader", "data-chapter": e }, v, u("article", { class: "enc-reader-main" }, u("p", { class: "enc-runhead" }, u("span", {}, k || n("reader.title")), u("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), u("span", {}, n("reader.chapter", { n: i + 1 }))), u("h1", { class: "screen-title enc-reader-title", tabindex: "-1", testid: "reader-title", "data-autofocus": "" }, o.title), u("p", { class: "enc-rule", "aria-hidden": "true" }), a.length > 0 ? u("p", { class: "enc-reader-hint" }, n("reader.hint")) : null, D, T, w, u("p", { class: "enc-reader-done", testid: "reader-done", hidden: !f }, g ? n("reader.read") : "".concat(n("reader.read"), " ").concat(n("reader.last"))), x, G, e$(t, e, a)));
    F.addEventListener("keydown", (W) => {
      W.ctrlKey || W.metaKey || W.altKey || W.shiftKey || Ts(W.target) || (W.key === "ArrowLeft" && m ? (W.preventDefault(), t.reader(m.id)) : W.key === "ArrowRight" && g && (W.preventDefault(), $(g.id)));
    });
    const H = t.data.reader, ke = () => {
      F.isConnected && he === void 0 && (he = window.setTimeout(Ie, 400));
    };
    let he;
    function Ie() {
      he = void 0, F.isConnected && t.rememberReader(e, X1());
    }
    window.addEventListener("scroll", ke, { passive: true });
    let Ue;
    return typeof IntersectionObserver < "u" && (Ue = new IntersectionObserver((W) => {
      F.isConnected && W.some((re) => re.isIntersecting) && t.markChapterRead(e);
    }), Ue.observe(w)), t.pendingCleanup.push(() => {
      window.removeEventListener("scroll", ke), Ue == null ? void 0 : Ue.disconnect(), he !== void 0 && (window.clearTimeout(he), he = void 0);
    }), window.requestAnimationFrame(() => {
      const W = Qd(), re = W.scrollHeight - W.clientHeight;
      W.scrollTop = (H == null ? void 0 : H.chapter) === e && re > 0 ? Math.round(H.scroll * re) : 0;
    }), F;
  }
  const s$ = ["index", "reader", "timeline", "map", "codex", "hunts"];
  class n$ {
    constructor(e) {
      __publicField(this, "s");
      __publicField(this, "model");
      __publicField(this, "arts", /* @__PURE__ */ new Map());
      __publicField(this, "data", Wd());
      __publicField(this, "hunt", null);
      __publicField(this, "result", null);
      __publicField(this, "query", "");
      __publicField(this, "eventId", null);
      __publicField(this, "trail", []);
      __publicField(this, "audio", null);
      __publicField(this, "cleanup", []);
      __publicField(this, "pendingCleanup", []);
      __publicField(this, "titleState", ts());
      __publicField(this, "linkCache", /* @__PURE__ */ new Map());
      this.s = e, this.rebuild();
    }
    rebuild() {
      var _a3;
      this.model = bl(this.s.pack, this.s.section(), this.s.text), this.arts = new Map(this.model.articles.map((n) => [n.id, { id: n.id, title: this.s.t(n.titleKey), paragraphs: fl(n.bodyKeys.map((r) => this.s.t(r))), ...n.unit ? { unit: n.unit } : {}, ...n.assetId ? { assetId: n.assetId } : {}, citations: n.citations, related: n.related, virtual: n.virtual }])), this.linkCache = /* @__PURE__ */ new Map();
      const e = this.s.section(), s = new Set(Object.entries((_a3 = e == null ? void 0 : e.glossary) != null ? _a3 : {}).flatMap(([n, r]) => r.map((i) => Vd(n, i.id))));
      this.data = T1(this.s.shellData(), new Set(this.allSteps().map((n) => n.id)), new Set(this.model.articles.map((n) => n.id)), s);
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
      return qd(e, this.articleTexts());
    }
    segments(e) {
      const s = this.arts.get(e);
      return s ? E1(s.paragraphs, e, this.articleList().map((n) => ({ id: n.id, title: n.title }))) : [];
    }
    linksFrom(e) {
      let s = this.linkCache.get(e);
      return s || (s = A1(this.segments(e)), this.linkCache.set(e, s)), s;
    }
    via(e) {
      for (const s of this.articleList()) if (s.id !== e && this.linksFrom(s.id).includes(e)) return { from: s.id, testid: "link-".concat(e) };
      for (const s of this.articleList()) if (s.id !== e && s.related.includes(e)) return { from: s.id, testid: "related-".concat(e) };
      return null;
    }
    chapters() {
      return ey(this.s.pack, this.model.articles).map((e) => this.arts.get(e.id));
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
      return ml(this.s.section(), e).flatMap((s) => {
        const n = this.s.text.text(s.term), r = this.s.text.text(s.gloss);
        if (n === void 0 || r === void 0) return [];
        const i = s.lemma ? this.s.text.text(s.lemma) : void 0, o = s.note ? this.s.text.text(s.note) : void 0;
        return [{ id: s.id, term: n, gloss: r, ...i ? { lemma: i } : {}, ...s.pos ? { pos: s.pos } : {}, ...o ? { note: o } : {} }];
      });
    }
    glossOff() {
      var _a3;
      return new Set((_a3 = this.data.glossOff) != null ? _a3 : []);
    }
    setGlossDeck(e, s, n) {
      this.data = N1(this.data, Vd(e, s), n), this.saveData();
    }
    readerChapter() {
      var _a3, _b3, _c2, _d2;
      const e = this.chapters(), s = (_a3 = this.data.reader) == null ? void 0 : _a3.chapter;
      return (_d2 = (_b3 = e.find((n) => n.id === s)) == null ? void 0 : _b3.id) != null ? _d2 : (_c2 = e[0]) == null ? void 0 : _c2.id;
    }
    rememberReader(e, s) {
      const n = M1(this.data, e, s);
      n !== this.data && (this.data = n, this.saveData());
    }
    chapterRead(e) {
      var _a3;
      return ((_a3 = this.data.reader) == null ? void 0 : _a3.done.includes(e)) === true;
    }
    markChapterRead(e) {
      var _a3, _b3, _c2;
      this.chapterRead(e) || (this.data = O1(Hd(this.data, e), e), this.saveData(), (_a3 = document.querySelector('[data-testid="reader-progress"]')) == null ? void 0 : _a3.setAttribute("data-read", "true"), (_b3 = document.querySelector('[data-testid="reader-done"]')) == null ? void 0 : _b3.removeAttribute("hidden"), (_c2 = document.querySelector('[data-testid="reader-chapter-'.concat(e, '"]'))) == null ? void 0 : _c2.setAttribute("data-read", "true"));
    }
    chapterItems(e) {
      return this.s.pack.items.filter((s) => {
        var _a3;
        return ((_a3 = gl(s)) == null ? void 0 : _a3.article) === e && this.s.canAsk(s);
      }).map((s) => s.id);
    }
    practice(e) {
      const s = this.chapterItems(e);
      s.length !== 0 && (this.s.passageOpen = true, this.askPractice(this.s.startRun(s, { kind: "review" }), e, 0));
    }
    askPractice(e, s, n) {
      const r = this.s, i = () => {
        r.passageOpen = false, this.reader(s);
      }, o = r.next(e), a = o ? r.item(o.id) : void 0;
      if (!o || !a) return i();
      let c = e;
      lt(r, { item: a, context: "reader", retry: o.retry, roundKind: "review", roundSize: e.size, index: n, view: () => ({ ...this.baseView(), chapter: s }), leaveLabel: r.ui("reader.leave"), onLeave: i, onAnswered: (l) => {
        c = r.record(c, o, l);
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
      const s = e.pick, n = e.steps.find((r) => r.item === s.id);
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
      return u("nav", { class: "enc-tabs", "aria-label": s.s("enc.nav.label") }, I("menu", s.s("enc.nav.title"), () => this.title(), { class: "enc-tab enc-tab-title" }), s$.filter((r) => this.partAvailable(r)).map((r) => I("nav-".concat(r), r === "reader" ? s.ui("reader.nav") : s.s("enc.nav.".concat(r)), () => {
        this.trail = [], n[r]();
      }, { class: "enc-tab", ...r === e ? { "aria-current": "page" } : {} })));
    }
    page(e, s, n, r = {}) {
      this.stopAudio();
      for (const o of this.cleanup.splice(0)) o();
      this.cleanup = this.pendingCleanup.splice(0);
      const i = u("div", { class: "enc-page enc-page-".concat(e), "data-part": s != null ? s : "" }, this.nav(s), C1(this), n);
      return this.s.render(e, i, { view: { ...this.baseView(), ...r } });
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
      this.rebuild(), this.s.finished = false, this.trail = [], this.s.render("title", Ls(this.s, { startLabel: this.readerFirst() ? this.s.ui(this.data.reader ? "reader.continue" : "reader.open") : this.s.started ? this.s.s("enc.continue") : this.s.s("enc.open"), onStart: () => this.readerFirst() ? this.reader() : this.explore() }, () => this.title(), this.titleState));
    }
    explore() {
      this.s.finished = false, this.page("explore", "index", L1(this), { query: this.query });
    }
    reader(e) {
      var _a3;
      const s = this.chapters();
      if (s.length === 0) return this.explore();
      const n = s.some((r) => r.id === e) ? e : this.readerChapter();
      n !== ((_a3 = this.data.reader) == null ? void 0 : _a3.chapter) && this.rememberReader(n, 0), this.trail = [], this.page("reader", "reader", t$(this, n), { chapter: n });
    }
    article(e, s) {
      if (!this.arts.has(e)) return this.explore();
      s && this.trail.push(s), this.data.read.includes(e) || (this.data = Hd(this.data, e), this.saveData()), this.page("article", null, D1(this, e), { article: e });
    }
    back() {
      const e = this.trail.pop();
      e ? e() : this.explore();
    }
    timeline() {
      this.page("timeline", "timeline", Y1(this), { event: this.eventId });
    }
    map() {
      this.page("map", "map", J1(this));
    }
    codex() {
      this.page("codex", "codex", U1(this));
    }
    hunts() {
      const e = this.result;
      this.page("hunts", "hunts", F1(this, e), { result: e }), e && this.s.live(this.resultText(e));
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
      e.render("end", Cs(e, { title: e.s("enc.end.title"), sub: e.s("enc.end.sub"), stats: u("p", { class: "enc-end-stats", testid: "end-collected" }, e.s("enc.end.stats", { found: s.found, total: s.total, read: s.read, articles: s.articles })), onAgain: () => {
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
      const r = this.s.startRun(n.map((o) => o.item), s ? { kind: "boss" } : { kind: "unit", unitId: e.unit }), i = this.s.next(r);
      i && (this.hunt = { hunt: e, final: s, steps: n, run: r, pick: i, answered: 0, collected: [] }, this.result = null, this.trail = [], this.explore());
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
      const r = this.s.item(e.item);
      if (!r) return;
      const i = this.collectibleName(e), o = s.steps.indexOf(e) + 1, a = this.found(e), c = Z1(this, s, o);
      lt(this.s, { item: r, context: "hunt", retry: n.retry, ...s.final ? { roundKind: "boss" } : { roundKind: "unit", unitId: s.hunt.unit }, roundSize: s.run.size, index: s.answered, hud: c, lead: u("span", {}, this.s.s("enc.lead", { name: i })), view: () => ({ ...this.baseView(), step: e.id, article: e.article }), nextLabel: this.s.s("enc.turn"), leaveLabel: this.s.s("enc.q.back"), onLeave: () => this.article(e.article), onAnswered: (l) => {
        var _a3, _b3;
        s.run = this.s.record(s.run, n, l), s.answered += 1, l.result.correct && (s.collected.includes(e.id) || s.collected.push(e.id), this.data = I1(this.data, e.id), this.saveData(), (_a3 = c.querySelectorAll(".enc-hud-pip")[o - 1]) == null ? void 0 : _a3.classList.add("is-found"), (_b3 = c.querySelector(".enc-hud-pips")) == null ? void 0 : _b3.setAttribute("aria-label", this.s.s("enc.hunt.found", { found: s.collected.length, n: s.steps.length })));
      }, effect: (l) => l.result.correct ? { text: this.s.s(a ? "enc.fx.again" : "enc.fx.found", { name: i }), tone: "good" } : { text: this.s.s("enc.fx.missed"), tone: "bad" }, onNext: () => {
        s.pick = this.s.next(s.run), s.pick ? this.article(e.article) : this.finishHunt();
      } });
    }
    finishHunt() {
      const e = this.hunt;
      if (!e) return this.hunts();
      const s = this.s.accuracy(e.run), n = this.s.recordUnit(e.final ? { boss: true } : { unitId: e.hunt.unit }, s);
      this.result = { huntId: e.final ? "final" : e.hunt.id, final: e.final, stars: n.stars, accuracy: s, collected: e.collected.length, total: e.steps.length, unlocked: n.unlocked.map((r) => this.s.unitTitle(r)) }, this.hunt = null, this.trail = [], this.hunts();
    }
    debug() {
      return { hunts: () => this.model.hunts.map((e) => ({ id: e.id, unit: e.unit, open: this.isHuntOpen(e), stars: this.s.unitStars(e.unit), steps: this.stepsOf(e).map((s) => ({ id: s.id, article: s.article, item: s.item })) })), finalHunt: () => ({ open: this.isFinalOpen(), steps: this.finalSteps().map((e) => ({ id: e.id, article: e.article, item: e.item })) }), target: () => {
        var _a3, _b3, _c2, _d2;
        const e = this.pinned();
        if (!e) return null;
        const s = this.via(e.step.article);
        return { hunt: (_b3 = (_a3 = this.hunt) == null ? void 0 : _a3.hunt.id) != null ? _b3 : null, final: (_d2 = (_c2 = this.hunt) == null ? void 0 : _c2.final) != null ? _d2 : false, step: e.step.id, article: e.step.article, item: e.step.item, retry: e.retry, clue: this.stepClue(e.step), term: Gd(this.articleTexts().find((n) => n.id === e.step.article), this.articleTexts()), via: s };
      }, searchTerm: (e) => {
        const s = this.articleTexts(), n = s.find((r) => r.id === e);
        return n ? Gd(n, s) : null;
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
  function r$(t, e) {
    let s = null, n = null;
    return { id: t, mount(r) {
      const i = new Ds(r, { shellId: t, theme: e, strings: P1 });
      s = i, n = new n$(i), i.mount(), i.setDebug(n.debug()), n.title();
    }, unmount() {
      n == null ? void 0 : n.stopAudio(), s == null ? void 0 : s.unmount(), s = null, n = null;
    } };
  }
  const Xd = r$("encyclopedia", "parchment"), Pt = 40, eu = 80, tu = 60, Vn = 26;
  function i$(t) {
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
    const n = e.filter((h) => !s.has(h)), r = Math.max(-1, ...s.values()) + 1;
    for (const h of n) s.set(h, r);
    const i = Math.max(0, ...s.values()) + 1, o = Array.from({ length: i }, () => []);
    for (const h of e) (_c2 = o[s.get(h)]) == null ? void 0 : _c2.push(h);
    const a = Math.max(1, ...o.map((h) => h.length)), c = [];
    o.forEach((h, p) => {
      h.forEach((f, m) => {
        const g = Vn + Pt / 2 + (m + (a - h.length) / 2) * tu;
        c.push({ id: f, col: p, row: m, x: Vn + Pt / 2 + p * eu, y: g, n: 0 });
      });
    }), [...c].sort((h, p) => h.col - p.col || h.y - p.y).forEach((h, p) => h.n = p + 1);
    const d = [];
    for (const h of t.rooms) for (const p of h.doors) e.includes(p.to) && p.to !== h.id && d.push({ from: h.id, to: p.to, back: s.get(p.to) <= s.get(h.id) });
    return { nodes: c, edges: d, width: Vn * 2 + Pt + (i - 1) * eu, height: Vn * 2 + Pt + (a - 1) * tu };
  }
  function o$(t, e) {
    var _a3, _b3;
    const s = /* @__PURE__ */ new Map(), n = (i, o) => {
      const a = s.get(i);
      if (a !== void 0) return a;
      if (o.includes(i)) return 0;
      const c = e.find((d) => d.id === i), l = !c || c.requires.length === 0 ? 0 : 1 + Math.max(...c.requires.map((d) => n(d, [...o, i])));
      return s.set(i, l), l;
    };
    for (const i of e) n(i.id, []);
    const r = [];
    for (const i of t) {
      const o = (_a3 = s.get(i.unit)) != null ? _a3 : 0;
      for (; r.length <= o; ) r.push([]);
      (_b3 = r[o]) == null ? void 0 : _b3.push(i.id);
    }
    return r.filter((i) => i.length > 0);
  }
  const Ae = (t, e = {}, ...s) => ue(t, e, ...s.filter((n) => n !== null)), V = (t, e, s = {}) => Ae("path", { class: t, d: e, ...s }), pe = (t, e, s, n, r, i = {}) => Ae("rect", { class: t, x: e, y: s, width: n, height: r, ...i }), fe = (t, e, s, n) => Ae("circle", { class: t, cx: e, cy: s, r: n }), a$ = (t, e, s, n) => {
    const r = Ae("text", { class: t, x: e, y: s, "text-anchor": "middle" });
    return r.appendChild(document.createTextNode(n)), r;
  }, ns = (t, e, ...s) => ue("svg", { class: t, viewBox: e, "aria-hidden": "true", focusable: "false", preserveAspectRatio: "xMidYMid meet" }, ...s.filter((n) => n !== null)), Fi = "M20 168V68C20 42 38 22 60 22S100 42 100 68V168Z";
  function Bi(t) {
    const e = ns("mm-door-svg", "0 0 120 170", V("d-arch", "M6 170V66C6 30 32 6 60 6S114 30 114 66V170Z"), V("d-joint", "M60 6V22M33 13L39 28M87 13L81 28M13 40L28 47M107 40L92 47M8 90H20M100 90H112M8 130H20M100 130H112"), V("d-keystone", "M52 6H68L66 22H54Z"), V("d-opening", Fi), V("d-light", Fi), Ae("g", { class: "d-leaf" }, V("d-wood", Fi), V("d-plank", "M40 25V168M60 22V168M80 25V168"), pe("d-iron", 20, 62, 80, 8), pe("d-iron", 20, 114, 80, 8), fe("d-stud", 28, 66, 2.4), fe("d-stud", 52, 66, 2.4), fe("d-stud", 68, 66, 2.4), fe("d-stud", 92, 66, 2.4), fe("d-stud", 28, 118, 2.4), fe("d-stud", 92, 118, 2.4), fe("d-ring", 84, 92, 7), Ae("g", { class: "d-lock" }, V("d-shackle", "M52 84V78A8 8 0 0 1 68 78V84", { fill: "none" }), pe("d-lockbody", 48, 84, 24, 18, { rx: 2 }), fe("d-keyhole", 60, 92, 3))));
    return e.setAttribute("data-open", String(t)), e;
  }
  const c$ = (t, e) => t.setAttribute("data-open", String(e));
  function l$() {
    return ns("mm-torch-svg", "0 0 28 58", fe("t-glow", 14, 14, 20), V("t-bracket", "M14 58V34M6 32H22", { fill: "none" }), V("t-cup", "M7 24H21L18 36H10Z"), V("t-flame", "M14 2C19 9 23 14 21 19C20 23 17 25 14 25C11 25 8 23 7 19C6 15 9 11 11 8C12 11 13 12 14 2Z"), V("t-core", "M14 12C17 16 18 18 17 21C16 23 15 24 14 24C13 24 11 23 11 21C11 19 12 18 14 12Z"), V("t-ember", "M10 24H18", { fill: "none" }));
  }
  function Ki(t, e, s) {
    return u("span", { class: "mm-torches", testid: "torches", role: "img", "aria-label": s, "data-torches": String(t), "data-max": String(e) }, Array.from({ length: e }, (n, r) => u("span", { class: "mm-torch ".concat(r < t ? "is-lit" : "is-out"), "aria-hidden": "true" }, l$())));
  }
  const su = (t, e, s, n) => {
    let r = "";
    for (let i = t; i + n * 0.6 <= e; i += n) r += "M".concat(i, " ").concat(s, "h").concat(n * 0.55, "v-9h-").concat(n * 0.55, "z");
    return r;
  };
  function d$(t) {
    const e = (t % 6 + 6) % 6, s = V("p-robe p-c".concat(e), "M8 120C8 96 26 84 50 84S92 96 92 120Z"), n = pe("p-skin", 44, 70, 12, 18, { rx: 4 }), r = Ae("ellipse", { class: "p-skin", cx: 50, cy: 54, rx: 19, ry: 22 }), i = [fe("p-eye", 43, 54, 2.2), fe("p-eye", 57, 54, 2.2), V("p-mouth", "M44 66Q50 70 56 66", { fill: "none" })], o = [];
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
        return o.push(V("p-sheet", "M24 120V56C24 30 36 14 50 14S76 30 76 56V120L68 110L60 120L50 110L40 120L32 110Z")), ns("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), o[0], fe("p-eye p-ghost-eye", 41, 52, 4.5), fe("p-eye p-ghost-eye", 59, 52, 4.5), V("p-mouth", "M44 70Q50 75 56 70", { fill: "none" }));
    }
    return ns("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), s, n, r, ...i, ...o);
  }
  function u$(t, e) {
    return u("div", { class: "mm-portrait", "data-look": String(t.look % 6) }, e ? u("img", { src: e.url, alt: e.alt, class: "mm-portrait-img", loading: "lazy" }) : d$(t.look));
  }
  function Yn(t) {
    return ns("mm-throne-svg", "0 -34 200 224", V("th-floor", "M10 186H190L178 168H22Z"), V("th-step", "M30 168H170L162 150H38Z"), V("th-back", "M62 150V50C62 24 80 10 100 10S138 24 138 50V150Z"), V("th-back-in", "M72 146V54C72 34 85 22 100 22S128 34 128 54V146Z"), V("th-finial", "M56 52L62 28L68 52ZM132 52L138 28L144 52Z"), pe("th-seat", 56, 118, 88, 30, { rx: 4 }), pe("th-cushion", 64, 106, 72, 16, { rx: 8 }), pe("th-arm", 50, 98, 16, 52, { rx: 4 }), pe("th-arm", 134, 98, 16, 52, { rx: 4 }), V("th-gem", "M100 34L108 44L100 54L92 44Z"), fe("th-gem", 100, 80, 5), Ae("g", { class: "th-crown".concat(t ? " is-won" : "") }, fe("th-halo", 100, 0, 22), V("th-crown-shape", "M78 0L82 -18L92 -8L100 -22L108 -8L118 -18L122 0Z"), pe("th-crown-band", 78, 0, 44, 6, { rx: 2 })));
  }
  function qi() {
    return ns("mm-key-svg", "0 0 64 64", fe("k-ring", 18, 18, 12), fe("k-hole", 18, 18, 5), V("k-shaft", "M26 26L56 56M44 44L52 36M50 50L58 42", { fill: "none" }));
  }
  function h$(t, e, s) {
    const n = new Map(t.nodes.map((l) => [l.id, l])), r = Pt / 2, i = t.edges.map((l) => {
      const d = n.get(l.from), h = n.get(l.to);
      if (!d || !h) return null;
      const p = e.open.has("".concat(l.from, ">").concat(l.to)), f = "m-door ".concat(p ? "is-open" : "is-locked"), m = Math.sign(h.x - d.x), g = d.x + (m === 0 ? 0 : m * r), k = h.x - (m === 0 ? 0 : m * r);
      if (l.back || m === 0) {
        const w = Math.min(d.y, h.y) - r - 14;
        return V("".concat(f, " is-back"), "M".concat(d.x, " ").concat(d.y - r, "C").concat(d.x, " ").concat(w, " ").concat(h.x, " ").concat(w, " ").concat(h.x, " ").concat(h.y - r), { fill: "none" });
      }
      const b = (d.y + h.y) / 2, v = (g + k) / 2;
      return Ae("g", { class: f }, V("m-line", "M".concat(g, " ").concat(d.y, "C").concat(v, " ").concat(d.y, " ").concat(v, " ").concat(h.y, " ").concat(k, " ").concat(h.y), { fill: "none" }), V("m-arrow", "M".concat(k, " ").concat(h.y, "l-9 -5v10z")), p ? null : fe("m-lock", v, b, 4.5));
    }), o = t.nodes.map((l) => {
      const d = l.id === e.here, h = "m-room".concat(d ? " is-here" : "").concat(e.keys.has(l.id) ? " is-key" : "").concat(l.id === e.entry ? " is-entry" : "");
      return Ae("g", { class: h, "data-room": l.id }, pe("m-stone", l.x - r, l.y - r, Pt, Pt, { rx: 5 }), a$("m-num", l.x, l.y + 6, String(l.n)), e.keys.has(l.id) ? V("m-key", "M".concat(l.x + r - 6, " ").concat(l.y - r - 3, "l5 -5l5 5l-5 5z")) : null, d ? V("m-here", "M".concat(l.x, " ").concat(l.y - r - 4, "l-6 -10l6 -4l6 4z")) : null);
    }), a = [...i, ...o].filter((l) => l !== null);
    return ue("svg", { class: "mm-minimap-svg", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMid meet", testid: "minimap" }, ...a);
  }
  function p$(t, e, s) {
    const i = Math.ceil(t.length / 2), o = [...t.slice(0, i), "keep", ...t.slice(i)], a = t.length * 76 + 100 + 40, c = [pe("s-sky", 0, 0, a, 180), pe("s-ground", 0, 164, a, 16)];
    let l = 20;
    return o.forEach((d, h) => {
      if (d === "keep") {
        c.push(Ae("g", { class: "s-keep is-".concat(e), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, 40, 100, 126), V("s-merlon", su(-4, 104, 40, 18).replace(/v-9h/g, "v-12h")), V("s-roof", "M-6 40L".concat(100 / 2, " 6L106 40Z")), V("s-flag", "M".concat(100 / 2, " 6V-8M").concat(100 / 2, " -6H").concat(100 / 2 + 22, "L").concat(100 / 2 + 16, " 0L").concat(100 / 2 + 22, " 6H").concat(100 / 2), { fill: "none" }), V("s-gate", "M".concat(100 / 2 - 16, " 166V138C").concat(100 / 2 - 16, " 124 ").concat(100 / 2 + 16, " 124 ").concat(100 / 2 + 16, " 138V166Z")), pe("s-window", 100 / 2 - 24, 62, 8, 20, { rx: 4 }), pe("s-window", 100 / 2 + 16, 62, 8, 20, { rx: 4 }))), l += 114;
        return;
      }
      const p = 86 + h * 37 % 4 * 14, f = 166 - p;
      c.push(Ae("g", { class: "s-tower is-".concat(d.state), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, f, 60, p), V("s-merlon", su(-3, 63, f, 15).replace(/v-9h/g, "v-11h")), pe("s-window", 26, f + 22, 8, 18, { rx: 4 }), pe("s-window", 26, f + 54, 8, 18, { rx: 4 }), d.state === "won" ? Ae("g", { class: "s-won" }, V("s-pole", "M30 ".concat(f - 14, "V").concat(f - 34), { fill: "none" }), V("s-key-flag", "M30 ".concat(f - 34, "H52L46 ").concat(f - 27, "L52 ").concat(f - 20, "H30Z"))) : null)), l += 76;
    }), ue("svg", { class: "mm-skyline-svg", viewBox: "-4 -12 ".concat(a, " 194"), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMax meet", testid: "castle-map" }, ...c.filter((d) => d !== null));
  }
  const f$ = { en: { "maze.tagline": "A castle of questions", "maze.title.art": "A castle gatehouse with a torch burning on each side of the gate.", "maze.title.intro": "Every door is a question. Answer it to open the door, win the key of each wing, then face the throne room.", "maze.castle.title": "The castle", "maze.castle.sub": "Pick a wing. Each wing hides a key; when you hold every key the throne room opens.", "maze.castle.map": "Map of the castle: {won} of {total} keys won.", "maze.keys": "Keys: {n} of {total}", "maze.wing.sealed": "Sealed", "maze.wing.needs": "Needs the key of: {wings}", "maze.wing.key": "Key won", "maze.wing.go": "Enter the wing", "maze.wing.resume": "Walk on", "maze.wing.rooms": "{n} rooms", "maze.throne.name": "The throne room", "maze.throne.sealed": "Sealed until you hold every key.", "maze.throne.ready": "The golden doors stand open.", "maze.throne.crowned": "Crowned", "maze.throne.desc": "A gauntlet of questions from every wing. Win one star or more and the crown is yours.", "maze.throne.begin": "Face the gauntlet", "maze.throne.won": "The crown is yours", "maze.throne.lost": "The crown slips away", "maze.throne.lost.text": "Fewer than 1 star. Look at what you missed and face the gauntlet again.", "maze.throne.retry": "Face the gauntlet again", "maze.throne.finish": "Claim the castle", "maze.throne.step": "Gauntlet, question {i} of {n}", "maze.to.castle": "Castle map", "maze.torches": "Torches: {n} of {max}", "maze.wing.of": "Wing: {wing}", "maze.back": "Go back to {room}", "maze.doors": "Doors", "maze.door.locked": "Locked: answer to open", "maze.door.open": "Open", "maze.talk": "Talk", "maze.hint": "Ask for a hint", "maze.keyroom": "The key of this wing lies here.", "maze.take": "Take the key", "maze.minimap": "Map of the wing", "maze.map.here": "you are here", "maze.map.key": "key room", "maze.map.open": "open door", "maze.map.locked": "locked door", "maze.map.alt": "Map of the wing {wing}: {n} rooms. You are in room {here}.", "maze.notice.ghost": "The castle ghost led you back to the entrance hall and relit your torches. The doors you opened stay open.", "maze.say.right": "Well done!", "maze.say.wrong": "Do not lose heart. That door will ask something else next time.", "maze.asks": "The door to {room} asks:", "maze.stepback": "Step back", "maze.fx.open": "The door swings open.", "maze.fx.torch": "Your torch gutters: {n} left.", "maze.fx.dark": "Your last torch dies. The castle ghost leads you back to the entrance hall.", "maze.fx.t.right": "The gold of the crown glows.", "maze.fx.t.torch": "A torch gutters in the throne room: {n} left.", "maze.fx.t.relit": "The last torch dies, but the ghost relights them all. The gauntlet goes on.", "maze.next.walk": "Walk through", "maze.next.room": "Back to the room", "maze.next.ghost": "Follow the ghost", "maze.next.throne": "Onward", "maze.done.won": "The wing is cleared", "maze.done.crumble": "The wing crumbles", "maze.done.key": "The key of {wing} is yours.", "maze.done.crumble.text": "Fewer than 2 stars: the doors close again. Walk the wing once more.", "maze.done.unlocked": "New wings open: {wings}", "maze.done.throne": "You hold every key. The throne room is open.", "maze.done.misses": "Questions that beat you", "maze.done.accuracy": "{n} % right first time", "maze.retry": "Walk the wing again", "maze.end.title": "The castle is yours!", "maze.end.sub": "You hold every key and wear the crown.", "maze.end.keys": "Keys won: {n} of {total}", "maze.portrait": "Portrait of {name}.", "maze.auto.wing": "A wing of the castle", "maze.auto.hall": "The entrance hall", "maze.auto.hall.desc": "Torches burn in iron rings and the stone floor is worn smooth. Doors wait ahead, and each one asks a question.", "maze.auto.gallery": "The portrait gallery", "maze.auto.gallery2": "The long gallery", "maze.auto.gallery3": "The echoing cloister", "maze.auto.keyroom": "The key chamber", "maze.auto.keyroom.desc": "On a stone table lies the key of this wing.", "maze.auto.side": "The side chamber", "maze.auto.side.desc": "A small study with a reading desk: a quieter way round, through two doors.", "maze.auto.gate.name": "The gatekeeper", "maze.auto.gate.line": "Welcome. Each door here asks a question; answer it and the way opens. Miss, and your torch gutters.", "maze.auto.gate.right": "Good. These doors like a quick mind.", "maze.auto.gate.wrong": "Never mind. A different question waits at that door.", "maze.auto.scholar.name": "The scholar", "maze.auto.scholar.line": "I have read everything on these shelves. Think it through and the door will open.", "maze.auto.scholar.right": "Splendid reasoning!", "maze.auto.scholar.wrong": "Hm. Read the explanation, then try again.", "maze.auto.archivist.name": "The archivist", "maze.auto.archivist.line": "The records are kept here: the long way round, but a gentle one.", "maze.auto.archivist.right": "Filed under: correct.", "maze.auto.archivist.wrong": "Misfiled! It happens. Read the note.", "maze.auto.keeper.name": "The keeper of keys", "maze.auto.keeper.line": "The key is nearly yours. Walk through the last door.", "maze.auto.keeper.right": "The lock likes you.", "maze.auto.keeper.wrong": "The lock stays shut, for now." }, hr: { "maze.tagline": "Dvorac pun pitanja", "maze.title.art": "Ulazna kula dvorca; s obje strane vrata gori baklja.", "maze.title.intro": "Svaka su vrata pitanje. Odgovori da ih otvoriš, osvoji ključ svakog krila pa se suoči s prijestolnom dvoranom.", "maze.castle.title": "Dvorac", "maze.castle.sub": "Odaberi krilo. U svakom je krilu skriven ključ; kad imaš sve ključeve, otvara se prijestolna dvorana.", "maze.castle.map": "Karta dvorca: osvojeno ključeva {won} od {total}.", "maze.keys": "Ključevi: {n} od {total}", "maze.wing.sealed": "Zapečaćeno", "maze.wing.needs": "Treba ključ krila: {wings}", "maze.wing.key": "Ključ osvojen", "maze.wing.go": "Uđi u krilo", "maze.wing.resume": "Nastavi hodati", "maze.wing.rooms": "{n} soba", "maze.throne.name": "Prijestolna dvorana", "maze.throne.sealed": "Zapečaćena dok nemaš sve ključeve.", "maze.throne.ready": "Zlatna su vrata otvorena.", "maze.throne.crowned": "Okrunjen", "maze.throne.desc": "Niz pitanja iz svakog krila. Osvoji jednu zvjezdicu ili više i kruna je tvoja.", "maze.throne.begin": "Suoči se s izazovom", "maze.throne.won": "Kruna je tvoja", "maze.throne.lost": "Kruna ti izmiče", "maze.throne.lost.text": "Manje od 1 zvjezdice. Pogledaj što si promašio i suoči se s izazovom ponovno.", "maze.throne.retry": "Suoči se s izazovom ponovno", "maze.throne.finish": "Preuzmi dvorac", "maze.throne.step": "Izazov, pitanje {i} od {n}", "maze.to.castle": "Karta dvorca", "maze.torches": "Baklje: {n} od {max}", "maze.wing.of": "Krilo: {wing}", "maze.back": "Vrati se u: {room}", "maze.doors": "Vrata", "maze.door.locked": "Zaključana: odgovori da ih otvoriš", "maze.door.open": "Otvorena", "maze.talk": "Razgovaraj", "maze.hint": "Zatraži savjet", "maze.keyroom": "Ovdje leži ključ ovog krila.", "maze.take": "Uzmi ključ", "maze.minimap": "Karta krila", "maze.map.here": "ovdje si", "maze.map.key": "soba s ključem", "maze.map.open": "otvorena vrata", "maze.map.locked": "zaključana vrata", "maze.map.alt": "Karta krila {wing}: {n} soba. Nalaziš se u sobi {here}.", "maze.notice.ghost": "Duh dvorca vratio te u ulaznu dvoranu i ponovno ti zapalio baklje. Vrata koja su otvorena ostaju otvorena.", "maze.say.right": "Odlično!", "maze.say.wrong": "Ne gubi hrabrost. Ta će vrata sljedeći put pitati nešto drugo.", "maze.asks": "Vrata u sobu {room} pitaju:", "maze.stepback": "Odstupi", "maze.fx.open": "Vrata se otvaraju.", "maze.fx.torch": "Tvoja baklja posustaje: preostalo ih je {n}.", "maze.fx.dark": "Tvoja posljednja baklja gasne. Duh dvorca vodi te natrag u ulaznu dvoranu.", "maze.fx.t.right": "Zlato krune zasjalo je.", "maze.fx.t.torch": "Baklja u prijestolnoj dvorani posustaje: preostalo ih je {n}.", "maze.fx.t.relit": "Posljednja baklja gasne, ali duh ih sve ponovno pali. Izazov se nastavlja.", "maze.next.walk": "Prođi kroz vrata", "maze.next.room": "Natrag u sobu", "maze.next.ghost": "Slijedi duha", "maze.next.throne": "Dalje", "maze.done.won": "Krilo je očišćeno", "maze.done.crumble": "Krilo se ruši", "maze.done.key": "Ključ krila {wing} je tvoj.", "maze.done.crumble.text": "Manje od 2 zvjezdice: vrata se opet zatvaraju. Prođi krilo još jednom.", "maze.done.unlocked": "Otvorena nova krila: {wings}", "maze.done.throne": "Imaš sve ključeve. Prijestolna dvorana je otvorena.", "maze.done.misses": "Pitanja koja su te svladala", "maze.done.accuracy": "{n} % točno iz prvog pokušaja", "maze.retry": "Prođi krilo ponovno", "maze.end.title": "Dvorac je tvoj!", "maze.end.sub": "Imaš sve ključeve i nosiš krunu.", "maze.end.keys": "Osvojeni ključevi: {n} od {total}", "maze.portrait": "Portret: {name}.", "maze.auto.wing": "Krilo dvorca", "maze.auto.hall": "Ulazna dvorana", "maze.auto.hall.desc": "Baklje gore u željeznim obručima, a kameni je pod izglačan. Pred tobom su vrata i svaka postavljaju pitanje.", "maze.auto.gallery": "Galerija portreta", "maze.auto.gallery2": "Duga galerija", "maze.auto.gallery3": "Odjekujući klaustar", "maze.auto.keyroom": "Soba s ključem", "maze.auto.keyroom.desc": "Na kamenom stolu leži ključ ovog krila.", "maze.auto.side": "Bočna odaja", "maze.auto.side.desc": "Mala radna soba s pultom za čitanje: mirniji put, kroz dvoja vrata.", "maze.auto.gate.name": "Vratar", "maze.auto.gate.line": "Dobro došao. Svaka vrata ovdje postavljaju pitanje; odgovori i put je slobodan. Pogriješiš li, baklja ti posustaje.", "maze.auto.gate.right": "Dobro. Ova vrata vole brz um.", "maze.auto.gate.wrong": "Ne mari. Na tim vratima čeka drugo pitanje.", "maze.auto.scholar.name": "Učenjak", "maze.auto.scholar.line": "Pročitao sam sve s ovih polica. Dobro razmisli i vrata će se otvoriti.", "maze.auto.scholar.right": "Izvrsno zaključivanje!", "maze.auto.scholar.wrong": "Hm. Pročitaj objašnjenje pa pokušaj ponovno.", "maze.auto.archivist.name": "Arhivar", "maze.auto.archivist.line": "Ovdje se čuvaju zapisi: dulji put, ali blag.", "maze.auto.archivist.right": "Arhivirano: točno.", "maze.auto.archivist.wrong": "Krivo razvrstano! Događa se. Pročitaj bilješku.", "maze.auto.keeper.name": "Čuvar ključeva", "maze.auto.keeper.line": "Ključ je gotovo tvoj. Prođi posljednja vrata.", "maze.auto.keeper.right": "Brava te voli.", "maze.auto.keeper.wrong": "Brava za sada ostaje zatvorena." }, de: { "maze.tagline": "Ein Schloss voller Fragen", "maze.title.art": "Ein Torhaus des Schlosses, an jeder Seite des Tors brennt eine Fackel.", "maze.title.intro": "Jede Tür ist eine Frage. Beantworte sie, um die Tür zu öffnen, gewinne den Schlüssel jedes Flügels und stelle dich dann im Thronsaal.", "maze.castle.title": "Das Schloss", "maze.castle.sub": "Wähle einen Flügel. Jeder Flügel versteckt einen Schlüssel; wenn du alle Schlüssel hast, öffnet sich der Thronsaal.", "maze.castle.map": "Karte des Schlosses: {won} von {total} Schlüsseln gewonnen.", "maze.keys": "Schlüssel: {n} von {total}", "maze.wing.sealed": "Versiegelt", "maze.wing.needs": "Braucht den Schlüssel von: {wings}", "maze.wing.key": "Schlüssel gewonnen", "maze.wing.go": "Den Flügel betreten", "maze.wing.resume": "Weitergehen", "maze.wing.rooms": "{n} Räume", "maze.throne.name": "Der Thronsaal", "maze.throne.sealed": "Versiegelt, bis du alle Schlüssel hast.", "maze.throne.ready": "Die goldenen Türen stehen offen.", "maze.throne.crowned": "Gekrönt", "maze.throne.desc": "Ein Fragenparcours aus allen Flügeln. Gewinne einen Stern oder mehr, und die Krone gehört dir.", "maze.throne.begin": "Den Parcours wagen", "maze.throne.won": "Die Krone gehört dir", "maze.throne.lost": "Die Krone entgleitet dir", "maze.throne.lost.text": "Weniger als 1 Stern. Sieh dir an, was du verpasst hast, und wage den Parcours noch einmal.", "maze.throne.retry": "Den Parcours noch einmal wagen", "maze.throne.finish": "Das Schloss einnehmen", "maze.throne.step": "Parcours, Frage {i} von {n}", "maze.to.castle": "Schlosskarte", "maze.torches": "Fackeln: {n} von {max}", "maze.wing.of": "Flügel: {wing}", "maze.back": "Zurück zu: {room}", "maze.doors": "Türen", "maze.door.locked": "Verschlossen: Antworte, um zu öffnen", "maze.door.open": "Offen", "maze.talk": "Sprechen", "maze.hint": "Um einen Tipp bitten", "maze.keyroom": "Der Schlüssel dieses Flügels liegt hier.", "maze.take": "Den Schlüssel nehmen", "maze.minimap": "Karte des Flügels", "maze.map.here": "du bist hier", "maze.map.key": "Schlüsselraum", "maze.map.open": "offene Tür", "maze.map.locked": "verschlossene Tür", "maze.map.alt": "Karte des Flügels {wing}: {n} Räume. Du bist in Raum {here}.", "maze.notice.ghost": "Der Schlossgeist hat dich zurück in die Eingangshalle geführt und deine Fackeln neu entzündet. Die Türen, die du geöffnet hast, bleiben offen.", "maze.say.right": "Gut gemacht!", "maze.say.wrong": "Lass den Mut nicht sinken. Diese Tür stellt dir beim nächsten Mal eine andere Frage.", "maze.asks": "Die Tür zu „{room}“ fragt:", "maze.stepback": "Zurücktreten", "maze.fx.open": "Die Tür schwingt auf.", "maze.fx.torch": "Deine Fackel flackert: noch {n} übrig.", "maze.fx.dark": "Deine letzte Fackel erlischt. Der Schlossgeist führt dich zurück in die Eingangshalle.", "maze.fx.t.right": "Das Gold der Krone leuchtet.", "maze.fx.t.torch": "Im Thronsaal flackert eine Fackel: noch {n} übrig.", "maze.fx.t.relit": "Die letzte Fackel erlischt, aber der Geist entzündet alle neu. Der Parcours geht weiter.", "maze.next.walk": "Hindurchgehen", "maze.next.room": "Zurück in den Raum", "maze.next.ghost": "Dem Geist folgen", "maze.next.throne": "Weiter", "maze.done.won": "Der Flügel ist bezwungen", "maze.done.crumble": "Der Flügel zerfällt", "maze.done.key": "Der Schlüssel von {wing} gehört dir.", "maze.done.crumble.text": "Weniger als 2 Sterne: Die Türen schließen sich wieder. Durchquere den Flügel noch einmal.", "maze.done.unlocked": "Neue Flügel öffnen sich: {wings}", "maze.done.throne": "Du hast alle Schlüssel. Der Thronsaal ist offen.", "maze.done.misses": "Fragen, die dich besiegt haben", "maze.done.accuracy": "{n} % gleich beim ersten Mal richtig", "maze.retry": "Den Flügel noch einmal durchqueren", "maze.end.title": "Das Schloss gehört dir!", "maze.end.sub": "Du hast alle Schlüssel und trägst die Krone.", "maze.end.keys": "Gewonnene Schlüssel: {n} von {total}", "maze.portrait": "Porträt von {name}.", "maze.auto.wing": "Ein Flügel des Schlosses", "maze.auto.hall": "Die Eingangshalle", "maze.auto.hall.desc": "Fackeln brennen in eisernen Ringen, und der Steinboden ist glatt getreten. Vor dir warten Türen, und jede stellt eine Frage.", "maze.auto.gallery": "Die Porträtgalerie", "maze.auto.gallery2": "Die lange Galerie", "maze.auto.gallery3": "Der hallende Kreuzgang", "maze.auto.keyroom": "Die Schlüsselkammer", "maze.auto.keyroom.desc": "Auf einem Steintisch liegt der Schlüssel dieses Flügels.", "maze.auto.side": "Die Seitenkammer", "maze.auto.side.desc": "Ein kleines Studierzimmer mit einem Lesepult: ein ruhigerer Weg, durch zwei Türen.", "maze.auto.gate.name": "Der Torwächter", "maze.auto.gate.line": "Willkommen. Jede Tür hier stellt eine Frage; beantworte sie, und der Weg öffnet sich. Liegst du falsch, flackert deine Fackel.", "maze.auto.gate.right": "Gut. Diese Türen mögen einen wachen Verstand.", "maze.auto.gate.wrong": "Macht nichts. An dieser Tür wartet eine andere Frage.", "maze.auto.scholar.name": "Der Gelehrte", "maze.auto.scholar.line": "Ich habe alles in diesen Regalen gelesen. Denk in Ruhe nach, und die Tür öffnet sich.", "maze.auto.scholar.right": "Hervorragend überlegt!", "maze.auto.scholar.wrong": "Hm. Lies die Erklärung und versuche es noch einmal.", "maze.auto.archivist.name": "Die Archivarin", "maze.auto.archivist.line": "Hier werden die Akten geführt: der lange Weg, aber ein sanfter.", "maze.auto.archivist.right": "Abgelegt unter: richtig.", "maze.auto.archivist.wrong": "Falsch abgelegt! Das passiert. Lies die Notiz.", "maze.auto.keeper.name": "Der Schlüsselbewahrer", "maze.auto.keeper.line": "Der Schlüssel ist fast dein. Geh durch die letzte Tür.", "maze.auto.keeper.right": "Das Schloss mag dich.", "maze.auto.keeper.wrong": "Das Schloss bleibt vorerst verschlossen." } };
  function m$(t, e, s) {
    return { wingId: t.id, run: e, room: t.entry, trail: [], open: [], torches: s, maxTorches: s, mood: "none", ghosted: false };
  }
  const rs = (t, e, s) => t.open.includes(An(e, s)), nu = (t, e, s) => rs(t, e, s) ? t : { ...t, open: [...t.open, An(e, s)] }, Gi = (t, e) => ({ ...t, trail: [...t.trail, t.room], room: e, ghosted: false });
  function g$(t) {
    const e = t.trail.at(-1);
    return e === void 0 ? t : { ...t, room: e, trail: t.trail.slice(0, -1), ghosted: false };
  }
  function k$(t) {
    const e = Math.max(0, t.torches - 1);
    return { walk: { ...t, torches: e }, dark: e === 0 };
  }
  const b$ = (t, e) => ({ ...t, room: e, trail: [], torches: t.maxTorches, ghosted: true, mood: "groan" });
  function v$(t, e) {
    return t ? e >= 2 ? "cheer" : "none" : "groan";
  }
  function w$(t, e, s, n) {
    var _a3;
    const r = t.pool.filter((d) => e.includes(d)), i = s({ ...t, pool: r, size: t.asked.length + r.length });
    if (i) return i;
    const o = s({ ...t, size: t.asked.length + t.pool.length });
    if (o) return o;
    const a = (_a3 = t.results.at(-1)) == null ? void 0 : _a3.id, c = e.filter((d) => d !== a), l = c.length > 0 ? c : [...e];
    return l.length > 0 ? { id: n.choice(l), retry: true } : null;
  }
  const ru = "mindmaze", y$ = "castle";
  class S$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "maze");
      __publicField(this, "walks", /* @__PURE__ */ new Map());
      __publicField(this, "throne", null);
      __publicField(this, "currentWing", null);
      __publicField(this, "titleState", ts());
      this.host = e, this.session = new Ds(e, { shellId: ru, theme: y$, strings: f$ }), this.maze = Sl(this.session.pack, this.session.section());
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
      const s = this.session.data.assets[e], n = this.session.pack.assets.find((r) => r.id === e);
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
      const n = this.wing(e), r = wt(n, s.room);
      return { wing: e, unit: n.unit, room: s.room, entry: n.entry, keyRoom: (r == null ? void 0 : r.key) === true, torches: s.torches, maxTorches: s.maxTorches, trail: s.trail, open: s.open, doors: ((_a3 = r == null ? void 0 : r.doors) != null ? _a3 : []).map((i) => ({ to: i.to, state: rs(s, s.room, i.to) ? "open" : "locked" })), ghost: s.ghosted, mood: s.mood, answered: s.run.asked.length };
    }
    throneView(e, s = {}) {
      var _a3, _b3, _c2, _d2;
      const n = this.throne;
      return { phase: e, torches: (_a3 = n == null ? void 0 : n.torches) != null ? _a3 : 0, maxTorches: (_b3 = n == null ? void 0 : n.max) != null ? _b3 : this.maze.torches, size: (_c2 = n == null ? void 0 : n.run.size) != null ? _c2 : this.maze.throne.size, asked: (_d2 = n == null ? void 0 : n.run.asked.length) != null ? _d2 : 0, crowned: this.crowned(), ...s };
    }
    route() {
      const e = this.currentWing, s = e ? this.walks.get(e) : void 0;
      if (!e || !s) return null;
      const n = this.wing(e), r = _l(n, s.room, new Set(s.open)), i = wt(n, s.room);
      return { wing: e, room: s.room, found: r.found, path: r.path, locked: r.locked, door: r.next ? "door-".concat(r.next) : null, state: r.next ? rs(s, s.room, r.next) ? "open" : "locked" : null, takeKey: (i == null ? void 0 : i.key) === true };
    }
    mazeSummary() {
      return { torches: this.maze.torches, throne: this.maze.throne.size, wings: this.maze.wings.map((e) => ({ id: e.id, unit: e.unit, entry: e.entry, auto: e.auto, rooms: e.rooms.map((s) => s.id), keys: _s(e), doors: _l(e, e.entry).path.length - 1, solvable: zl(e, e.entry) })) };
    }
    onKey(e) {
      if (e.ctrlKey || e.metaKey || e.altKey || Ts(e.target) || this.session.screen !== "room" || !/^[1-9]$/.test(e.key)) return;
      const n = [...this.host.root.querySelectorAll(".mm-door")][Number(e.key) - 1];
      n && (e.preventDefault(), n.click());
    }
    title() {
      const e = this.session;
      e.finished = false, this.walks.clear(), this.throne = null, this.currentWing = null, e.render("title", Ls(e, { onStart: () => this.castle() }, () => this.title(), this.titleState));
    }
    castle() {
      const e = this.session;
      e.finished = false, this.currentWing = null;
      const s = this.s, n = o$(this.maze.wings, e.units()), r = new Map(this.maze.wings.map((p) => [p.id, p])), i = this.everyKey(), o = this.maze.wings.length, a = this.keysWon(), c = this.maze.wings.map((p) => ({ state: e.isMastered(p.unit) ? "won" : e.isUnlocked(p.unit) ? "open" : "sealed" })), l = (p) => {
        var _a3, _b3, _c2, _d2;
        const f = !e.isUnlocked(p.unit), m = e.unitStars(p.unit), g = e.isMastered(p.unit), b = ((_b3 = (_a3 = e.pack.units.find((w) => w.id === p.unit)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((w) => !e.isMastered(w)).map((w) => {
          var _a4;
          return this.label((_a4 = this.maze.wings.find((y) => y.unit === w)) == null ? void 0 : _a4.name) || e.unitTitle(w);
        }).join(", "), v = this.walks.has(p.id);
        return u("li", { class: "mm-wing-item" }, u("button", { type: "button", class: "mm-wing ".concat(f ? "is-locked" : "is-open").concat(g ? " is-key" : ""), testid: "wing-".concat(p.id), "data-stars": String(m), "data-locked": String(f), "data-key": String(g), "data-unit": p.unit, "data-requires": ((_d2 = (_c2 = e.pack.units.find((w) => w.id === p.unit)) == null ? void 0 : _c2.requires) != null ? _d2 : []).join(" "), ...f ? { disabled: true } : {}, onclick: () => this.enterWing(p) }, u("span", { class: "mm-wing-name" }, this.label(p.name)), p.description ? u("span", { class: "mm-wing-desc" }, this.label(p.description)) : null, u("span", { class: "mm-wing-meta" }, f ? "".concat(s("maze.wing.sealed"), ". ").concat(s("maze.wing.needs", { wings: b })) : g ? "".concat(s("maze.wing.key")) : v ? s("maze.wing.resume") : s("maze.wing.rooms", { n: p.rooms.length })), g ? u("span", { class: "mm-wing-keyicon" }, qi()) : null, e.stars(m)));
      }, d = u("button", { type: "button", class: "mm-throne-btn ".concat(i ? "is-open" : "is-locked").concat(this.crowned() ? " is-crowned" : ""), testid: "throne", "data-locked": String(!i), "data-stars": String(e.bossStars()), ...i ? {} : { disabled: true }, onclick: () => this.throneIntro() }, u("span", { class: "mm-throne-icon" }, Yn(this.crowned())), u("span", { class: "mm-wing-name" }, this.label(this.maze.throne.name) || s("maze.throne.name")), u("span", { class: "mm-wing-meta" }, this.crowned() ? s("maze.throne.crowned") : s(i ? "maze.throne.ready" : "maze.throne.sealed")), e.stars(e.bossStars())), h = u("section", { class: "castle-screen mm-castle" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "castle-keys" }, s("maze.keys", { n: a, total: o }))), u("h1", { class: "screen-title", tabindex: "-1", testid: "castle-title" }, s("maze.castle.title")), u("p", { class: "subject" }, s("maze.castle.sub")), u("div", { class: "mm-skyline" }, p$(c, this.crowned() ? "won" : i ? "open" : "sealed", s("maze.castle.map", { won: a, total: o }))), u("div", { class: "mm-throne-wrap" }, d), u("ol", { class: "mm-wing-rows", testid: "wing-map" }, [...n].reverse().map((p) => u("li", { class: "mm-wing-row" }, u("div", { class: "mm-corridor", "aria-hidden": "true" }), u("ul", { class: "mm-wing-list" }, p.map((f) => l(r.get(f))))))));
      e.render("castle", h, { view: this.castleView() });
    }
    enterWing(e) {
      const s = this.session;
      if (this.currentWing = e.id, !this.walks.has(e.id)) {
        const n = s.startRun(this.poolOfWing(e), { kind: "unit", unitId: e.unit });
        this.walks.set(e.id, m$(e, n, this.maze.torches));
      }
      this.room();
    }
    setWalk(e) {
      this.walks.set(e.wingId, e);
    }
    room() {
      var _a3, _b3, _c2;
      const e = this.session, s = this.currentWing, n = this.walks.get(s), r = this.wing(s), i = wt(r, n.room), o = this.s, a = new Set(n.open), c = this.roomLabel(i.name), l = this.label(i.description), d = this.assetOf(i.asset), h = n.trail.at(-1), p = (_, O) => {
        const R = rs(n, i.id, _.to), S = wt(r, _.to), A = this.roomName(r, _.to);
        return u("li", { class: "mm-door-item" }, u("button", { type: "button", class: "mm-door ".concat(R ? "is-open" : "is-locked").concat((S == null ? void 0 : S.key) ? " is-key" : ""), testid: "door-".concat(_.to), "data-state": R ? "open" : "locked", ...(S == null ? void 0 : S.key) ? { "data-key": "true" } : {}, onclick: () => this.pressDoor(i, _) }, Bi(R), u("span", { class: "mm-door-num", "aria-hidden": "true" }, String(O + 1)), u("span", { class: "mm-door-name" }, A), u("span", { class: "mm-door-state" }, R ? "✓ ".concat(o("maze.door.open")) : o("maze.door.locked"))));
      }, f = i.doors.length ? u("section", { class: "mm-doors", "aria-labelledby": "mm-doors-h" }, u("h2", { class: "sr-only", id: "mm-doors-h" }, o("maze.doors")), u("ul", { class: "mm-door-list", testid: "doors" }, i.doors.map(p))) : null, m = i.key ? u("div", { class: "mm-keybox" }, u("span", { class: "mm-keybox-icon" }, qi()), u("p", {}, o("maze.keyroom")), I("take-key", o("maze.take"), () => this.takeKey(), { class: "btn btn-primary btn-big" })) : null, g = h !== void 0 ? I("back", "‹ ".concat(o("maze.back", { room: this.roomName(r, h) })), () => {
        this.setWalk({ ...g$(n), mood: "none" }), this.room();
      }, { class: "btn btn-ghost" }) : null, k = n.ghosted ? u("p", { class: "mm-notice", role: "status", testid: "notice" }, o("maze.notice.ghost")) : null, b = i$(r), v = new Set(_s(r)), w = o("maze.map.alt", { wing: this.label(r.name), n: r.rooms.length, here: String((_b3 = (_a3 = b.nodes.find((_) => _.id === n.room)) == null ? void 0 : _a3.n) != null ? _b3 : 0) }), y = [...b.nodes].sort((_, O) => _.n - O.n).map((_) => {
        const O = wt(r, _.id), R = [_.id === n.room ? o("maze.map.here") : "", v.has(_.id) ? o("maze.map.key") : ""].filter(Boolean).join(", ");
        return u("li", { class: "mm-legend-item".concat(_.id === n.room ? " is-here" : ""), "data-room": _.id }, u("b", {}, "".concat(_.n, ".")), " ", this.roomLabel(O.name), R ? u("em", {}, " (".concat(R, ")")) : null);
      }), $ = u("section", { class: "mm-map", "aria-labelledby": "mm-map-h" }, u("h2", { id: "mm-map-h" }, o("maze.minimap")), u("div", { class: "mm-parchment" }, h$(b, { here: n.room, open: a, keys: v, entry: r.entry }, w)), u("ol", { class: "mm-legend", testid: "minimap-list" }, y)), x = this.characterPanel(i, r, n), z = u("section", { class: "room-screen mm-room" }, u("div", { class: "topbar mm-topbar" }, I("to-castle", "‹ ".concat(o("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), u("span", { class: "mm-wing-tag", testid: "wing-tag" }, o("maze.wing.of", { wing: this.label(r.name) })), Ki(n.torches, n.maxTorches, o("maze.torches", { n: n.torches, max: n.maxTorches }))), k, u("div", { class: "mm-layout" }, u("div", { class: "mm-scene" }, u("h1", { class: "screen-title mm-room-name", tabindex: "-1", testid: "room-name" }, c), l ? u("p", { class: "mm-room-desc", testid: "room-desc" }, l) : null, d ? u("figure", { class: "mm-room-figure" }, u("img", { src: d.url, alt: d.alt, loading: "lazy" })) : null, f, m, g ? u("div", { class: "actions" }, g) : null), u("aside", { class: "mm-side" }, x, $)));
      e.render("room", z, { unitId: r.unit, roundKind: "unit", roundSize: n.run.size, view: (_c2 = this.roomView()) != null ? _c2 : {} });
    }
    characterPanel(e, s, n) {
      const r = e.character;
      if (!r) return null;
      const i = this.s, o = this.label(r.name), a = this.assetOf(r.portrait), c = u$(r, a ? { url: a.url, alt: i("maze.portrait", { name: o }) } : null), l = u("p", { class: "mm-bubble mm-line", testid: "character-line", hidden: true }, this.label(r.line)), d = this.hintFor(e, r, n), h = u("p", { class: "mm-bubble mm-hint", testid: "character-hint", hidden: true }, d != null ? d : ""), p = I("talk", i("maze.talk"), () => {
        l.hidden = !l.hidden, p.setAttribute("aria-expanded", String(!l.hidden));
      }, { class: "btn btn-small", "aria-expanded": "false" }), f = () => {
        h.hidden = !h.hidden, m == null ? void 0 : m.setAttribute("aria-expanded", String(!h.hidden));
      }, m = d ? I("hint", "💡 ".concat(i("maze.hint")), f, { class: "btn btn-small", "aria-expanded": "false" }) : null, g = n.mood === "none" ? "" : n.mood === "cheer" ? this.label(r.right) || i("maze.say.right") : this.label(r.wrong) || i("maze.say.wrong");
      return u("section", { class: "mm-char", "aria-labelledby": "mm-char-h", "data-mood": n.mood }, c, u("div", { class: "mm-char-body" }, u("h2", { class: "mm-char-name", id: "mm-char-h", testid: "character-name" }, o), u("div", { class: "mm-char-actions" }, p, m), l, h, g ? u("p", { class: "mm-bubble mm-react", testid: "character-reaction" }, g) : null));
    }
    hintFor(e, s, n) {
      if (s.hint) return this.label(s.hint);
      const r = this.session, i = [];
      for (const o of e.doors) if (!rs(n, e.id, o.to)) for (const a of o.items) {
        const c = r.item(a);
        if ((c == null ? void 0 : c.hint) && r.text.hasText(c.hint)) {
          const l = r.t(c.hint);
          i.includes(l) || i.push(l);
        }
      }
      return i.length > 0 ? i.slice(0, 3).join(" ") : null;
    }
    pressDoor(e, s) {
      const n = this.currentWing, r = this.walks.get(n);
      if (rs(r, e.id, s.to)) return this.setWalk({ ...Gi(r, s.to), mood: "none" }), this.room();
      this.askDoor(e, s);
    }
    askDoor(e, s) {
      const n = this.session, r = this.currentWing, i = this.wing(r), o = this.walks.get(r), a = this.s, c = w$(o.run, s.items, (f) => n.next(f), n.rng), l = c ? n.item(c.id) : void 0;
      if (!c || !n.canAsk(l)) return this.setWalk({ ...Gi(nu(o, e.id, s.to), s.to), mood: "none" }), this.room();
      const d = Bi(false), h = Ki(o.torches, o.maxTorches, a("maze.torches", { n: o.torches, max: o.maxTorches })), p = u("div", { class: "mm-hud" }, u("div", { class: "mm-hud-door" }, d), u("div", { class: "mm-hud-text" }, u("p", { class: "mm-hud-wing" }, this.label(i.name)), h));
      lt(n, { item: l, context: "door", retry: c.retry, hud: p, lead: u("span", {}, a("maze.asks", { room: this.roomName(i, s.to) })), unitId: i.unit, roundKind: "unit", roundSize: o.run.size, index: o.run.results.length, view: () => {
        var _a3;
        return (_a3 = this.roomView()) != null ? _a3 : {};
      }, leaveLabel: a("maze.stepback"), onLeave: () => this.room(), onAnswered: (f) => {
        let m = this.walks.get(r);
        m = { ...m, run: n.record(m.run, c, f), ghosted: false };
        const g = f.result.correct;
        m = { ...m, mood: v$(g, n.combo) }, g ? (m = nu(m, e.id, s.to), c$(d, true), this.burst()) : (m = k$(m).walk, this.setTorches(h, m)), this.setWalk(m);
      }, effect: (f) => {
        const m = this.walks.get(r);
        return f.result.correct ? { text: a("maze.fx.open"), tone: "good" } : m.torches === 0 ? { text: a("maze.fx.dark"), tone: "bad" } : { text: a("maze.fx.torch", { n: m.torches }), tone: "bad" };
      }, nextLabel: (f) => f.result.correct ? a("maze.next.walk") : this.walks.get(r).torches === 0 ? a("maze.next.ghost") : a("maze.next.room"), onNext: (f) => {
        const m = this.walks.get(r);
        f.result.correct ? this.setWalk(Gi(m, s.to)) : m.torches === 0 && this.setWalk(b$(m, i.entry)), this.room();
      } });
    }
    setTorches(e, s) {
      e.setAttribute("data-torches", String(s.torches)), e.setAttribute("aria-label", this.s("maze.torches", { n: s.torches, max: s.maxTorches })), e.querySelectorAll(".mm-torch").forEach((n, r) => {
        n.classList.toggle("is-lit", r < s.torches), n.classList.toggle("is-out", r >= s.torches);
      });
    }
    burst() {
      const e = this.session.combo;
      if (![3, 5, 7, 10, 15, 20, 30].includes(e)) return;
      const s = this.host.root.querySelector(".burst-layer");
      if (!s) return;
      const n = Array.from({ length: 12 }, (i, o) => {
        const a = o / 12 * Math.PI * 2 + o % 2 * 0.22, c = 80 + o % 3 * 44;
        return u("span", { class: "dust", "aria-hidden": "true", style: "--dx:".concat(Math.round(Math.cos(a) * c), "px;--dy:").concat(Math.round(Math.sin(a) * c), "px;--s:").concat(5 + o % 4 * 2, "px;--delay:").concat(o % 5 * 30, "ms") });
      }), r = u("div", { class: "burst", testid: "combo-burst" }, this.session.ui("burst", { n: e }), n);
      s.appendChild(r), window.setTimeout(() => r.remove(), 1400);
    }
    takeKey() {
      const e = this.session, s = this.currentWing, n = this.walks.get(s), r = this.wing(s), i = e.accuracy(n.run), o = e.recordUnit({ unitId: r.unit }, i);
      this.walks.delete(s), e.playCue("unit-complete"), this.wingDone(r, o.stars, i, o.unlocked, Ri(n.run));
    }
    wingDone(e, s, n, r, i) {
      const o = this.session, a = this.s, c = o.isMastered(e.unit), l = this.maze.wings.filter((p) => r.includes(p.unit)).map((p) => this.label(p.name)), d = Math.round(n * 100), h = u("section", { class: "wingdone-screen mm-done ".concat(c ? "is-key" : "is-crumble") }, u("div", { class: "mm-done-art", "aria-hidden": "true" }, c ? qi() : Bi(false)), u("h1", { class: "screen-title", tabindex: "-1", testid: "wing-title" }, s >= 2 || c ? a("maze.done.won") : a("maze.done.crumble")), u("p", { class: "subject" }, this.label(e.name)), o.stars(s, "wing-stars"), u("p", { class: "big-number", testid: "wing-accuracy" }, a("maze.done.accuracy", { n: d })), c ? u("p", { class: "message message-ok", testid: "wing-key" }, a("maze.done.key", { wing: this.label(e.name) })) : u("p", { class: "message message-bad", testid: "wing-crumble" }, a("maze.done.crumble.text")), l.length > 0 ? u("p", { class: "message", testid: "wing-unlocked" }, a("maze.done.unlocked", { wings: l.join(", ") })) : null, this.everyKey() ? u("p", { class: "message message-ok", testid: "throne-open" }, a("maze.done.throne")) : null, i.length > 0 ? u("div", { class: "mm-misses" }, u("h2", {}, a("maze.done.misses")), u("ul", { class: "miss-list", testid: "wing-misses" }, i.map((p) => {
        var _a3;
        const f = o.item(p), m = f ? Ps(f, { text: o.text, ui: o.ui }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(p) }, u("span", {}, o.t((_a3 = f == null ? void 0 : f.prompt) != null ? _a3 : p)), m ? u("small", { class: "miss-answer" }, m.length > 140 ? "".concat(m.slice(0, 139), "…") : m) : null);
      }))) : null, u("div", { class: "actions actions-center" }, I("to-castle", a("maze.to.castle"), () => this.castle(), { class: "btn btn-primary btn-big" }), s < 3 ? I("retry-wing", a("maze.retry"), () => this.enterWing(e), { class: "btn btn-big" }) : null));
      o.render("wing-done", h, { unitId: e.unit, roundKind: "unit", view: { wing: e.id, stars: s, key: c, accuracy: d, unlocked: r, misses: i } });
    }
    throneIntro() {
      const e = this.session, s = this.s;
      this.throne = null;
      const n = u("section", { class: "throne-screen mm-throne" }, u("div", { class: "topbar" }, I("to-castle", "‹ ".concat(s("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars" }, s("maze.keys", { n: this.keysWon(), total: this.maze.wings.length }))), u("div", { class: "mm-throne-art", "aria-hidden": "true" }, Yn(this.crowned())), u("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, this.label(this.maze.throne.name) || s("maze.throne.name")), u("p", { class: "mm-room-desc" }, this.label(this.maze.throne.description) || s("maze.throne.desc")), this.crowned() ? u("p", { class: "message message-ok", testid: "throne-crowned" }, s("maze.throne.crowned")) : null, e.stars(e.bossStars(), "throne-stars"), u("div", { class: "actions actions-center" }, I("throne-begin", s("maze.throne.begin"), () => this.startThrone(), { class: "btn btn-primary btn-big" }), this.crowned() ? I("finish", s("maze.throne.finish"), () => this.end(), { class: "btn btn-big" }) : null));
      e.render("throne", n, { view: this.throneView("intro") });
    }
    startThrone() {
      const e = this.session, s = e.pack.items.map((r) => r.id), n = e.startRun(s, { kind: "boss", size: Math.min(this.maze.throne.size, s.length) });
      this.throne = { run: n, torches: this.maze.torches, max: this.maze.torches, relit: false }, this.throneStep();
    }
    throneStep() {
      const e = this.session, s = this.throne;
      if (!s) return this.throneIntro();
      const n = this.s, r = e.next(s.run);
      if (!r) return this.throneResult();
      const i = e.item(r.id);
      if (!e.canAsk(i)) return s.run = { ...s.run, pool: s.run.pool.filter((c) => c !== r.id), size: Math.max(0, s.run.size - 1) }, this.throneStep();
      const o = Ki(s.torches, s.max, n("maze.torches", { n: s.torches, max: s.max })), a = u("div", { class: "mm-hud mm-hud-throne" }, u("div", { class: "mm-hud-door" }, Yn(false)), u("div", { class: "mm-hud-text" }, u("p", { class: "mm-hud-wing" }, this.label(this.maze.throne.name) || n("maze.throne.name")), o));
      lt(e, { item: i, context: "throne", retry: r.retry, hud: a, lead: u("span", {}, n("maze.throne.step", { i: Math.min(s.run.asked.length + (r.retry ? 0 : 1), s.run.size), n: s.run.size })), roundKind: "boss", roundSize: s.run.size, index: s.run.results.length, view: () => this.throneView("question"), leaveLabel: n("maze.stepback"), onLeave: () => this.throneIntro(), onAnswered: (c) => {
        s.run = e.record(s.run, r, c), s.relit = false, c.result.correct ? this.burst() : (s.torches = Math.max(0, s.torches - 1), s.torches === 0 && (s.torches = s.max, s.relit = true), this.setTorches(o, { torches: s.torches, maxTorches: s.max }));
      }, effect: (c) => c.result.correct ? { text: n("maze.fx.t.right"), tone: "good" } : s.relit ? { text: n("maze.fx.t.relit"), tone: "info" } : { text: n("maze.fx.t.torch", { n: s.torches }), tone: "bad" }, nextLabel: n("maze.next.throne"), onNext: () => this.throneStep() });
    }
    throneResult() {
      const e = this.session, s = this.throne, n = this.s, r = e.accuracy(s.run), i = e.recordUnit({ boss: true }, r);
      e.playCue("boss");
      const o = this.crowned(), a = Ri(s.run), c = Math.round(r * 100), l = u("section", { class: "throne-screen mm-throne ".concat(o ? "is-won" : "is-lost") }, u("div", { class: "mm-throne-art", "aria-hidden": "true" }, Yn(i.stars >= 1)), u("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, i.stars >= 1 ? n("maze.throne.won") : n("maze.throne.lost")), e.stars(i.stars, "throne-stars"), u("p", { class: "big-number", testid: "throne-accuracy" }, n("maze.done.accuracy", { n: c })), i.stars >= 1 ? null : u("p", { class: "message message-bad", testid: "throne-lost" }, n("maze.throne.lost.text")), a.length > 0 ? u("div", { class: "mm-misses" }, u("h2", {}, n("maze.done.misses")), u("ul", { class: "miss-list", testid: "throne-misses" }, a.map((d) => {
        var _a3;
        const h = e.item(d), p = h ? Ps(h, { text: e.text, ui: e.ui }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(d) }, u("span", {}, e.t((_a3 = h == null ? void 0 : h.prompt) != null ? _a3 : d)), p ? u("small", { class: "miss-answer" }, p.length > 140 ? "".concat(p.slice(0, 139), "…") : p) : null);
      }))) : null, u("div", { class: "actions actions-center" }, o ? I("finish", n("maze.throne.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, i.stars < 3 ? I("retry-throne", n("maze.throne.retry"), () => this.startThrone(), { class: o ? "btn btn-big" : "btn btn-primary btn-big" }) : null, I("to-castle", n("maze.to.castle"), () => this.castle(), { class: "btn btn-big" })));
      e.render("throne", l, { view: this.throneView("result", { stars: i.stars, accuracy: c, misses: a }) });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.currentWing = null, e.render("end", Cs(e, { title: s("maze.end.title"), sub: s("maze.end.sub"), stats: u("p", { class: "subject", testid: "end-keys" }, s("maze.end.keys", { n: this.keysWon(), total: this.maze.wings.length })), onAgain: () => this.castle(), onTitle: () => this.title() }), { view: { keys: this.keysWon(), total: this.maze.wings.length, crowned: this.crowned() } });
    }
  }
  const iu = /* @__PURE__ */ (() => {
    let t = null;
    return { id: ru, mount(e) {
      t = new S$(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), $$ = (t) => t.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, ""), z$ = (t) => "unit-".concat($$(t)), Jn = "quiz-arena", ou = "chalkboard", _$ = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]), j$ = (t, e) => {
    var _a3;
    const s = t.pack.languages;
    if (e && s.includes(e)) return e;
    const n = (typeof navigator < "u" ? (_a3 = navigator.languages) != null ? _a3 : [navigator.language] : []).map((r) => r.toLowerCase());
    for (const r of n) {
      const i = s.find((o) => o === r || o === r.split("-")[0]);
      if (i) return i;
    }
    return s.includes(t.defaultLang) ? t.defaultLang : s[0];
  };
  class x$ {
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
      __publicField(this, "onKey", (e) => this.handleKey(e));
      __publicField(this, "playTimer", new wd(() => this.progress, (e) => {
        this.progress = e;
      }, () => this.save()));
      __publicField(this, "speechMade", null);
      __publicField(this, "titleState", ts());
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.store = new kd(this.pack, bd()), this.progress = this.store.load(), this.lang = j$(this.data, this.progress.settings.lang), this.ui = Ms(this.lang), this.text = Gt(this.data.catalogs, this.lang, this.pack.targetLang), this.check = qt({ pack: this.pack, text: this.text }), this.rng = Kt(e.seed, "arena"), this.audio = new _d({ cues: this.pack.cues, assets: this.data.assets, loops: zd(this.pack.extensions), settings: () => this.progress.settings }), this.setLang(this.lang, false);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Ed(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    mount() {
      this.host.root.classList.add("edu-stage"), qn(this.host.root, "title", ou), document.addEventListener("keydown", this.onKey), this.playTimer.start(), this.go("title");
    }
    unmount() {
      var _a3, _b3, _c2;
      document.removeEventListener("keydown", this.onKey), this.playTimer.dispose(), this.audio.dispose(), this.stopTimer(), (_c2 = (_a3 = this.current) == null ? void 0 : (_b3 = _a3.view).destroy) == null ? void 0 : _c2.call(_b3);
    }
    setLang(e, s = true) {
      this.lang = e, this.text = Gt(this.data.catalogs, e, this.pack.targetLang), this.ui = Ms(e, this.data.catalogs[e]), this.check = qt({ pack: this.pack, text: this.text }), document.documentElement.lang = e, document.title = this.courseTitle(), s && (this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.go(this.screen));
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    publish() {
      const e = this.round, s = this.current;
      this.host.publish(Od({ screen: this.screen, shell: Jn, lang: this.lang, seed: this.host.seed, ...e ? { roundNumber: this.roundNumber, roundKind: e.kind, roundSize: e.size, ...e.unitId ? { unitId: e.unitId } : {} } : {}, ...s ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: e ? e.results.length - (s.answered ? 1 : 0) : 0 } : {}, combo: this.combo, score: this.progress.score, ...this.lastResult ? { lastResult: this.lastResult } : {}, reviewQueue: this.progress.queue, mastery: cd(this.pack, this.progress), finished: this.finished, steps: this.steps }));
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
      qn(n, e, ou), As(n);
      const r = this.build(e), i = u("div", { class: "edu-app", testid: "app", "data-screen": e, "data-shell": Jn }, u("div", { class: "frame" }, u("main", { class: "board board-".concat(e), id: "edu-main" }, r)), u("div", { class: "burst-layer", "aria-hidden": "true" }), u("div", { class: "sr-only", role: "status", "aria-live": "polite", testid: "live" }));
      n.appendChild(i), this.publish(), this.focusScreen();
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
          return !s || s.kind === "review" || s.kind === "verbs" ? "menu" : s.kind === "boss" ? "boss" : z$((_a3 = s.unitId) != null ? _a3 : "");
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
          return u("p", {}, this.ui("loading"));
      }
    }
    heading(e, s, n) {
      return u(e, { class: "screen-title", tabindex: "-1", testid: n, "data-autofocus": "" }, s);
    }
    startHost() {
      const e = () => this.progress, s = (n) => {
        this.progress = n;
      };
      return { pack: this.pack, ui: this.ui, shellId: Jn, shells: this.host.shells, switchShell: (n) => this.host.switchShell(n), courseTitle: () => this.courseTitle(), unitTitle: (n) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((r) => r.id === n)) == null ? void 0 : _a3.title) != null ? _b3 : n);
      }, lang: this.lang, setLang: (n) => {
        this.setLang(n, false), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: n } }, this.save();
      }, get progress() {
        return e();
      }, set progress(n) {
        s(n);
      }, save: () => this.save(), persistent: this.store.persistent, started: gd(this.progress), refreshAudio: () => this.audio.refresh(), speechService: this.speechService, reset: () => {
        this.store.clear(), this.progress = Ns(this.pack.id), this.combo = 0, this.finished = false;
      } };
    }
    buildTitle() {
      const e = this.ui, s = u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: "setting-timer", ...this.progress.settings.timer ? { checked: true } : {}, onchange: (n) => {
        this.progress = { ...this.progress, settings: { ...this.progress.settings, timer: n.target.checked } }, this.save();
      } }), u("span", { class: "toggle-text" }, u("b", {}, e("timer")), u("small", {}, e("timer.hint", { s: Ii(this.pack).timerSeconds }))));
      return Dd(this.startHost(), { onStart: () => this.go("map"), settings: s }, () => this.go("title"), this.titleState);
    }
    unitLevels() {
      const e = /* @__PURE__ */ new Map();
      for (const s of Tt(this.pack.units)) {
        const n = this.pack.units.find((r) => r.id === s);
        e.set(s, n.requires.length === 0 ? 0 : 1 + Math.max(...n.requires.map((r) => {
          var _a3;
          return (_a3 = e.get(r)) != null ? _a3 : 0;
        })));
      }
      for (const s of this.pack.units) e.has(s.id) || e.set(s.id, 0);
      return e;
    }
    starsEl(e, s) {
      return u("span", { class: "stars", role: "img", "aria-label": this.ui("stars", { n: e }), "data-stars": String(e), ...s ? { testid: s } : {} }, [1, 2, 3].map((n) => u("span", { class: "star ".concat(n <= e ? "on" : "off"), "aria-hidden": "true" }, n <= e ? "★" : "☆")));
    }
    buildMap() {
      const e = this.ui, s = this.unitLevels(), n = Math.max(0, ...s.values()), r = (d) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((h) => h.id === d)) == null ? void 0 : _a3.title) != null ? _b3 : d);
      }, i = [];
      for (let d = 0; d <= n; d++) {
        const h = this.pack.units.filter((p) => s.get(p.id) === d);
        h.length !== 0 && i.push(u("li", { class: "map-level" }, d > 0 ? u("div", { class: "map-link", "aria-hidden": "true" }) : null, u("ul", { class: "map-row" }, h.map((p) => {
          var _a3, _b3;
          const f = Fn(this.pack, this.progress, p.id), m = (_b3 = (_a3 = this.progress.units[p.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0, g = Mi(this.pack, p.id).length;
          return u("li", {}, u("button", { type: "button", class: "unit-card ".concat(f ? "is-open" : "is-locked", " ").concat(Un(this.progress, p.id) ? "is-mastered" : ""), testid: "unit-".concat(p.id), "data-stars": String(m), "data-locked": String(!f), "data-requires": p.requires.join(" "), ...vd(this.pack, p.id) ? { "data-assigned": "true" } : {}, ...f && g > 0 ? {} : { disabled: true }, onclick: () => this.beginRound("unit", p.id) }, u("span", { class: "unit-name" }, this.text.t(p.title)), p.summary ? u("span", { class: "unit-summary" }, this.text.t(p.summary)) : null, u("span", { class: "unit-meta" }, f ? e("map.items", { n: g }) : "🔒 ".concat(e("map.locked"))), p.requires.length ? u("span", { class: "unit-req" }, e("map.requires", { units: p.requires.map(r).join(", ") })) : null, vd(this.pack, p.id) ? u("span", { class: "unit-assigned", testid: "assigned-".concat(p.id) }, e("class.assigned")) : null, this.starsEl(m)));
        }))));
      }
      const o = _i(this.pack, this.progress), a = this.progress.boss.stars, c = u("li", { class: "map-level map-boss" }, u("div", { class: "map-link", "aria-hidden": "true" }), u("div", { class: "map-boss-wrap" }, u("button", { type: "button", class: "unit-card boss-card ".concat(o ? "is-open" : "is-locked"), testid: "boss", "data-stars": String(a), "data-locked": String(!o), ...o ? {} : { disabled: true }, onclick: () => this.beginRound("boss") }, u("span", { class: "unit-name" }, "👑 ".concat(e("map.boss"))), u("span", { class: "unit-summary" }, e(o ? "map.boss.ready" : "map.boss.locked")), this.starsEl(a)))), l = this.progress.queue;
      return u("section", { class: "map-screen" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e("menu")), () => this.go("title"), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "map-stars" }, "★ ".concat(e("map.stars", { n: ld(this.pack, this.progress), total: this.pack.units.length * 3 })))), this.heading("h1", e("map.title"), "map-title"), u("p", { class: "subject" }, this.courseTitle()), Oi(this.pack).length > 0 ? u("div", { class: "actions actions-center" }, I("verb-drill", "🔤 ".concat(e("map.verbs", { n: Td(this.pack, this.progress.cards, Date.now()) })), () => this.beginRound("verbs"), { class: "btn" })) : null, l.length > 0 ? u("div", { class: "actions actions-center" }, I("review", "↻ ".concat(e("map.review", { n: l.length })), () => this.go("review"), { class: "btn" })) : null, u("ol", { class: "map-levels", testid: "unit-map" }, i, c), a > 0 ? u("div", { class: "actions actions-center" }, I("finish", e("summary.finish"), () => this.finish(), { class: "btn btn-primary" })) : null);
    }
    beginRound(e, s) {
      const n = qS(this.pack, e, { ...s ? { unitId: s } : {}, queue: this.progress.queue, difficulty: e === "boss" ? 4 : this.difficulty, cards: this.progress.cards, now: Date.now(), exclude: sS(this.pack.items, fd(this.progress)) });
      if (n.size === 0) return this.go("map");
      this.round = n, this.roundNumber += 1, this.roundScore = 0, this.roundBestCombo = 0, this.combo = 0, this.lastResult = void 0, this.finished = false, this.nextQuestion();
    }
    nextQuestion() {
      if (!this.round) return this.go("map");
      const e = Id(this.round, this.pack, this.rng, this.progress.cards, Date.now());
      if (!e) return this.endRound();
      const s = this.pack.items.find((i) => i.id === e.id);
      if (!s) return this.endRound();
      this.turn += 1, this.lastResult = void 0;
      const n = this.host.getItemRenderer(s.kind);
      if (!n) return this.unsupported(e, s);
      const r = n.render(this.itemContext(s));
      this.current = { pick: e, item: s, view: r, renderer: n, answered: false }, this.go("item"), this.startTimer();
    }
    unsupported(e, s) {
      console.warn('[EduEngine] no renderer for the item kind "'.concat(s.kind, '"; skipping ').concat(s.id)), this.round && (this.round = Ni(this.round, e, s, { correct: true, score: 1 }, "good")), this.nextQuestion();
    }
    itemContext(e) {
      var _a3, _b3;
      const s = "".concat(this.host.seed, ":").concat(e.id, ":").concat(this.turn), n = new Map(this.pack.assets.map((i) => [i.id, i])), r = (_a3 = this.pack.targetLang) != null ? _a3 : this.lang;
      return { item: e, data: this.data, lang: this.lang, text: this.text, check: this.check, rng: new st(s), seed: s, assetUrl: (i) => i ? this.data.assets[i] : void 0, assetAlt: (i) => {
        const o = i ? n.get(i) : void 0;
        return o ? this.text.t(o.alt) : "";
      }, ui: (i, o) => this.ui(i, o), specialLetters: (_b3 = Kl[r]) != null ? _b3 : [], submit: (i) => this.submit(i), duck: (i) => this.audio.duck(i), ...this.progress.settings.speak !== false && this.speechService ? { speech: this.speechService } : {} };
    }
    submit(e) {
      const s = this.current;
      return s ? s.result ? s.result : this.answered(s, e, fn(s.item, e, this.check), false) : { correct: false, score: 0, expected: null, invalid: true };
    }
    answered(e, s, n, r) {
      if (this.stopTimer(), !this.round) return n;
      const i = Md(e.item, s, n), o = Date.now(), a = e.deadline ? Math.max(0, e.deadline - o) / 1e3 : 0;
      this.round = Ni(this.round, e.pick, e.item, n, i, this.progress.cards, o), this.steps += 1;
      const c = this.progress, l = !e.pick.retry;
      let d = c.queue;
      n.correct ? (l || this.round.kind === "review") && (d = hd(d, e.item.id)) : d = ud(d, e.item.id);
      let h = Math.round(100 * n.score);
      n.correct ? (h += Math.min(this.combo, 10) * 10 + Math.round(a * 2), e.pick.retry && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.roundBestCombo = Math.max(this.roundBestCombo, this.combo), this.roundScore += h, this.progress = { ...c, cards: { ...c.cards, [e.item.id]: kc(pd(c, e.item.id, o), i, o) }, queue: d, score: c.score + h, bestCombo: Math.max(c.bestCombo, this.combo), answered: c.answered + (l ? 1 : 0), right: c.right + (l && n.correct ? 1 : 0) }, this.save(), e.answered = true, e.answer = s, e.result = n, this.lastResult = n, e.view.reveal(n, s);
      const p = xd(e.item, s, n, { text: this.text, ui: this.ui, rng: this.rng }, r);
      return e.feedback = p, this.screen = "feedback", this.showFeedback(e, p), this.updateHud(), this.audio.sfx(n.correct ? "correct" : "wrong"), n.correct && [3, 5, 7, 10, 15, 20, 30].includes(this.combo) && (this.burst(this.combo), this.audio.sfx("combo")), this.publish(), n;
    }
    showFeedback(e, s) {
      var _a3, _b3;
      const n = this.host.root, r = n.querySelector(".edu-app");
      r && r.setAttribute("data-screen", "feedback");
      const i = n.querySelector(".item-body"), o = n.querySelector(".feedback-slot");
      if (!o) return;
      const a = this.ui, c = !!this.round && this.round.asked.length >= this.round.size && this.round.session.pending.length === 0, l = (p, f, m, ...g) => u("div", { class: "fb-part ".concat(p), testid: f }, u("h3", {}, m), g), d = u("div", { class: "feedback is-".concat(s.verdict), testid: "feedback", "data-result": s.verdict, tabindex: "-1" }, u("h2", { class: "fb-title", testid: "feedback-title" }, u("span", { class: "fb-icon", "aria-hidden": "true" }, s.verdict === "correct" ? "✓" : s.verdict === "partial" ? "≈" : s.verdict === "timeout" ? "⏱" : "✗"), s.title), s.notes.length ? u("ul", { class: "fb-notes", testid: "feedback-notes" }, s.notes.map((p) => u("li", {}, p))) : null, s.detail ? u("p", { class: "fb-detail", testid: "feedback-detail" }, s.detail) : null, s.whys.length ? l("fb-why", "feedback-why", a("fb.why"), s.whys.map((p) => u("p", {}, p))) : null, s.answer.length ? l("fb-answer", "feedback-answer", a("fb.answer"), s.answer.length === 1 ? u("p", { class: "fb-answer-text" }, s.answer[0]) : u("ul", {}, s.answer.map((p) => u("li", {}, p)))) : null, s.explanation ? l("fb-explain", "feedback-explanation", a("fb.explain"), u("p", {}, s.explanation)) : null, s.dyk ? l("fb-dyk", "feedback-dyk", "💡 ".concat(a("fb.dyk")), u("p", {}, s.dyk)) : null, u("div", { class: "actions" }, I("next", a(c ? "results" : "next"), () => this.nextQuestion(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      o.appendChild(d);
      const h = n.querySelector('[data-testid="live"]');
      h && (h.textContent = "".concat(s.title, ". ").concat(s.whys.join(" "), " ").concat(s.answer.join(". "))), i == null ? void 0 : i.classList.add("is-answered"), ((_a3 = e.result) == null ? void 0 : _a3.correct) ? Is(i != null ? i : d, "fx-glow") : Is(i != null ? i : d, "fx-shake"), d.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_b3 = n.querySelector('[data-testid="next"]')) == null ? void 0 : _b3.focus({ preventScroll: true });
    }
    burst(e) {
      const s = this.host.root.querySelector(".burst-layer");
      if (!s) return;
      const n = Array.from({ length: 14 }, (i, o) => {
        const a = o / 14 * Math.PI * 2 + o % 2 * 0.22, c = 90 + o % 3 * 48;
        return u("span", { class: "dust", "aria-hidden": "true", style: "--dx:".concat(Math.round(Math.cos(a) * c), "px;--dy:").concat(Math.round(Math.sin(a) * c), "px;--s:").concat(5 + o % 4 * 2, "px;--delay:").concat(o % 5 * 30, "ms") });
      }), r = u("div", { class: "burst", testid: "combo-burst" }, this.ui("burst", { n: e }), n);
      s.appendChild(r), window.setTimeout(() => r.remove(), 1400);
    }
    startTimer() {
      const e = this.current;
      if (!e || !this.progress.settings.timer || !WS(e.item)) return;
      const s = Ii(this.pack).timerSeconds * 1e3;
      e.deadline = Date.now() + s;
      const n = () => {
        if (!this.current || this.current !== e || e.answered) return this.stopTimer();
        const r = e.deadline - Date.now();
        this.setTimer(Math.max(0, r), s), r <= 0 && (this.stopTimer(), this.answered(e, void 0, fn(e.item, void 0, this.check), true));
      };
      this.setTimer(s, s), e.timerId = window.setInterval(n, 200);
    }
    setTimer(e, s) {
      const n = this.hud.timer;
      if (!n) return;
      n.hidden = false, n.style.setProperty("--left", String(Math.max(0, e / s)));
      const r = n.querySelector(".timer-s");
      r && (r.textContent = String(Math.ceil(e / 1e3))), n.classList.toggle("is-low", e / s < 0.25);
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
        e == null ? void 0 : e.setAttribute("data-combo", String(Math.min(this.combo, 10))), e == null ? void 0 : e.classList.toggle("is-hot", this.combo >= 3), this.combo > 0 && Is(this.hud.combo, "fx-pop", 500);
      }
      this.hud.progress && this.round && this.hud.progress.replaceChildren(...this.pips());
    }
    pips() {
      const e = this.round;
      if (!e) return [];
      const s = e.results.filter((n) => !n.retry);
      return Array.from({ length: e.size }, (n, r) => {
        const i = s[r], o = i ? i.correct ? "is-right" : "is-wrong" : r === s.length ? "is-now" : "";
        return u("span", { class: "pip ".concat(o), "aria-hidden": "true" });
      });
    }
    roundTitle() {
      var _a3, _b3;
      const e = this.round;
      return e ? e.kind === "boss" ? "👑 ".concat(this.ui("map.boss")) : e.kind === "review" ? "↻ ".concat(this.ui("review")) : e.kind === "verbs" ? "🔤 ".concat(this.ui("map.verbs", { n: Td(this.pack, this.progress.cards, Date.now()) })) : this.text.t((_b3 = (_a3 = this.pack.units.find((s) => s.id === e.unitId)) == null ? void 0 : _a3.title) != null ? _b3 : "") : "";
    }
    buildItem() {
      const e = this.current, s = this.round;
      if (!e || !s) return u("p", {}, this.ui("loading"));
      const n = this.ui, r = e.item;
      this.hud.score = u("b", { testid: "hud-score" }, String(this.progress.score)), this.hud.combo = u("b", { testid: "hud-combo" }, "x".concat(this.combo)), this.hud.progress = u("span", { class: "pips", testid: "hud-progress" }, this.pips()), this.hud.timer = u("div", { class: "timer", role: "timer", testid: "hud-timer", hidden: true }, u("span", { class: "timer-s" }), u("span", { class: "timer-bar" }, u("span", { class: "timer-fill" })));
      const i = u("header", { class: "hud" }, I("leave", "‹ ".concat(n("leave")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" }), u("div", { class: "hud-mid" }, u("span", { class: "hud-unit", testid: "hud-unit" }, this.roundTitle()), this.hud.progress), u("div", { class: "hud-stats" }, u("span", { class: "stat" }, u("small", {}, n("score")), this.hud.score), u("span", { class: "combo ".concat(this.combo >= 3 ? "is-hot" : ""), "data-combo": String(Math.min(this.combo, 10)) }, u("small", {}, n("combo")), this.hud.combo)), this.hud.timer), o = u("p", { class: "q-meta", testid: "question-number" }, e.pick.retry ? u("span", { class: "tag tag-retry", testid: "retry-tag" }, n("retry")) : n("question", { i: Math.min(s.asked.length + (e.answered ? 0 : 1), s.size), n: s.size })), a = e.renderer.ownsPrompt ? u("h1", { class: "sr-only" }, this.roundTitle()) : u("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, this.text.t(r.prompt)), c = _$.has(r.kind) ? null : Wl(this.itemContext(r)), l = r.hint, d = l && this.text.hasText(l) ? this.text.t(l) : null;
      let h = false;
      const p = u("p", { class: "hint-text", testid: "hint-text", hidden: true }, d != null ? d : ""), f = d ? I("hint", "💡 ".concat(n("hint")), () => {
        h = !h, p.hidden = !h, f == null ? void 0 : f.setAttribute("aria-expanded", String(h));
      }, { class: "btn btn-small btn-ghost", "aria-expanded": "false" }) : null, m = u("div", { class: "item-body kind-".concat(r.kind).concat(e.answered ? " is-answered" : ""), testid: "item-body", "data-kind": r.kind }, e.view.el);
      return u("section", { class: "question", "aria-label": this.text.t(r.prompt) }, i, o, a, c, f, p, m, u("div", { class: "feedback-slot", "aria-live": "polite" }));
    }
    leaveRound() {
      this.round = null, this.go("map");
    }
    endRound() {
      const e = this.round;
      if (!e) return this.go("map");
      const s = Pi(e), n = this.progress;
      e.kind === "unit" || e.kind === "boss" ? (this.progress = dd(this.progress, e.kind === "boss" ? { boss: true } : { unitId: e.unitId }, s), this.roundStars = zi(s), this.roundUnlocked = ad(this.pack, n, this.progress), e.kind === "unit" && (this.difficulty = e.adaptive.difficulty)) : (this.roundStars = 0, this.roundUnlocked = []), this.save(), (e.kind === "unit" || e.kind === "boss") && this.audio.sfx(e.kind === "boss" ? "boss" : "level-up"), this.go("summary");
    }
    buildSummary() {
      const e = this.round;
      if (!e) return this.buildMap();
      const s = this.ui, n = Math.round(Pi(e) * 100), r = Ri(e), i = e.kind === "unit" || e.kind === "boss", o = e.kind === "boss" && this.roundStars >= 1, a = (l) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((d) => d.id === l)) == null ? void 0 : _a3.title) != null ? _b3 : l);
      }, c = [];
      return this.roundUnlocked.length && c.push(u("p", { class: "message message-ok", testid: "summary-unlocked" }, "🔓 ".concat(s("summary.unlocked", { units: this.roundUnlocked.map(a).join(", ") })))), e.kind === "unit" && _i(this.pack, this.progress) && this.progress.boss.rounds === 0 && c.push(u("p", { class: "message message-ok", testid: "summary-boss-open" }, "👑 ".concat(s("summary.bossLocked")))), e.kind === "unit" && this.roundStars < 2 && c.push(u("p", { class: "message", testid: "summary-need-stars" }, s("summary.needStars"))), e.kind === "boss" && !o && c.push(u("p", { class: "message message-bad", testid: "summary-boss-fail" }, s("summary.bossFail"))), u("section", { class: "summary-screen" }, this.heading("h1", s(n === 100 && i ? "summary.perfect" : "summary.title"), "summary-title"), u("p", { class: "subject" }, this.roundTitle()), i ? this.starsEl(this.roundStars, "summary-stars") : null, u("p", { class: "big-number", testid: "summary-accuracy" }, s("summary.accuracy", { n })), u("p", { testid: "summary-score" }, "".concat(s("summary.score", { n: this.roundScore }), " · ").concat(s("summary.combo", { n: this.roundBestCombo }))), c, r.length ? u("ul", { class: "miss-list", testid: "summary-misses" }, r.map((l) => {
        var _a3;
        const d = this.pack.items.find((p) => p.id === l), h = d ? Ps(d, { text: this.text, ui: s }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(l) }, u("span", {}, this.text.t((_a3 = d == null ? void 0 : d.prompt) != null ? _a3 : l)), h ? u("small", { class: "miss-answer" }, h.length > 140 ? "".concat(h.slice(0, 139), "…") : h) : null);
      })) : null, u("div", { class: "actions actions-center" }, o ? I("finish", s("summary.finish"), () => this.finish(), { class: "btn btn-primary btn-big" }) : null, I("to-map", s("summary.back"), () => this.leaveRound(), { class: "btn ".concat(o ? "" : "btn-primary", " btn-big") }), this.progress.queue.length > 0 ? I("review", "↻ ".concat(s("map.review", { n: this.progress.queue.length })), () => this.go("review"), { class: "btn" }) : null, e.kind !== "review" ? I("replay", s("summary.again"), () => this.beginRound(e.kind, e.unitId), { class: "btn" }) : null));
    }
    buildReview() {
      const e = this.ui, n = this.progress.queue.filter((r) => this.pack.items.some((i) => i.id === r)).map((r) => this.pack.items.find((i) => i.id === r));
      return u("section", { class: "review-screen" }, u("div", { class: "topbar" }, I("to-map", "‹ ".concat(e("review.back")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" })), this.heading("h1", e("review.title"), "review-title"), n.length === 0 ? u("p", { class: "message", testid: "review-empty" }, e("review.empty")) : u("ul", { class: "review-list", testid: "review-list" }, n.map((r) => {
        const i = Ps(r, { text: this.text, ui: e });
        return u("li", { class: "review-item", testid: "review-item-".concat(r.id) }, u("p", { class: "review-q" }, this.text.t(r.prompt)), i.length ? u("p", { class: "review-a" }, u("b", {}, "".concat(e("review.answer"), ": ")), i.join(" / ")) : null, this.text.text(r.explanation) ? u("p", { class: "review-e" }, this.text.t(r.explanation)) : null);
      })), u("div", { class: "actions actions-center" }, n.length ? I("practice", e("review.practice"), () => this.beginRound("review"), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, I("to-map", e("review.back"), () => this.leaveRound(), { class: "btn btn-big" })));
    }
    finish() {
      this.finished = true, this.round = null, this.go("end");
    }
    buildEnd() {
      const e = this.ui, s = this.progress, n = s.answered > 0 ? Math.round(s.right / s.answered * 100) : 0;
      return u("section", { class: "end-screen" }, u("p", { class: "eyebrow" }, this.courseTitle()), this.heading("h1", e("end.title"), "end-title"), u("p", { class: "subject" }, e("end.sub")), u("ul", { class: "end-stars", testid: "end-units" }, this.pack.units.map((r) => {
        var _a3, _b3;
        return u("li", {}, u("span", {}, this.text.t(r.title)), this.starsEl((_b3 = (_a3 = s.units[r.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0));
      }), u("li", { class: "end-boss" }, u("span", {}, "👑 ".concat(e("map.boss"))), this.starsEl(s.boss.stars))), u("p", { class: "big-number", testid: "end-score" }, "".concat(e("end.score"), ": ").concat(s.score)), u("p", { testid: "end-accuracy" }, e("end.accuracy", { n })), u("div", { class: "actions actions-center" }, I("play-again", e("end.again"), () => {
        this.finished = false, this.round = null, this.combo = 0, this.go("map");
      }, { class: "btn btn-primary btn-big", "data-autofocus": "" }), I("to-title", e("end.title.screen"), () => {
        this.finished = false, this.go("title");
      }, { class: "btn btn-big" })));
    }
    handleKey(e) {
      var _a3, _b3;
      if (e.defaultPrevented) return;
      const s = this.current;
      if (this.screen === "item" && s && !s.answered) {
        if (Ts(e.target) && /^[0-9]$/.test(e.key)) return;
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
  const au = { id: Jn, mount(t) {
    const e = new x$(t);
    this.unmount = () => e.unmount(), e.mount();
  } };
  function cu(t) {
    return u("span", { class: "pc-level", "data-level": t }, t);
  }
  function E$(t) {
    var _a3;
    return t.url ? u("span", { class: "pc-avatar has-image", "aria-hidden": "true" }, u("img", { src: t.url, alt: "" })) : u("span", { class: "pc-avatar pc-av-".concat(t.index % 6 + 1), "aria-hidden": "true" }, (_a3 = [...t.name][0]) != null ? _a3 : "?");
  }
  function Wi(t) {
    var _a3, _b3;
    const e = u("div", { class: "pc-bubble" }, u("p", { class: "pc-name" }, t.speaker.name), t.lead ? u("p", { class: "pc-lead" }, t.lead) : null, t.text !== null ? u("p", { class: "pc-text", ...t.lang ? { lang: t.lang } : {} }, t.text) : u("p", { class: "pc-text pc-hidden-text" }, (_a3 = t.hidden) != null ? _a3 : "..."), t.note ? u("p", { class: "pc-note" }, t.note) : null, (_b3 = t.extra) != null ? _b3 : null, t.actions && t.actions.some(Boolean) ? u("div", { class: "pc-actions" }, t.actions) : null);
    return u("li", { class: "pc-line is-".concat(t.kind).concat(t.slow ? " is-slow" : ""), testid: t.testid, ...t.outcome ? { "data-outcome": t.outcome } : {} }, E$(t.speaker), e);
  }
  const lu = (t, e, s, n = {}) => I(t, e, s, { class: "btn btn-small btn-ghost", ...n }), me = (t, e, ...s) => ue(t, e, ...s);
  function A$() {
    return [me("path", { class: "pc-pot", d: "M34 110 L86 110 L79 136 Q78 138 76 138 L44 138 Q42 138 41 136 Z" }), me("path", { class: "pc-pot-shade", d: "M70 110 L86 110 L79 136 Q78 138 76 138 L62 138 Z" }), me("path", { class: "pc-rim", d: "M28 100 Q28 96 32 96 L88 96 Q92 96 92 100 L92 108 Q92 110 90 110 L30 110 Q28 110 28 108 Z" }), me("ellipse", { class: "pc-soil", cx: 60, cy: 96, rx: 28, ry: 4.5 })];
  }
  const St = (t, e) => me("path", { class: "pc-leaf ".concat(t), d: e });
  function T$(t) {
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
  function du(t) {
    return ue("svg", { class: "pc-plant stage-".concat(t), viewBox: "0 0 120 142", "aria-hidden": "true", focusable: "false" }, ...A$(), me("g", { class: "pc-grow" }, ...T$(t)));
  }
  const I$ = 3;
  function uu(t) {
    return { sceneId: t.id, cursor: $e(t, t.start) ? t.start : null, log: [], turns: [], retry: null };
  }
  function Rt(t, e) {
    if (e.retry) {
      const n = $e(t, e.retry.lineId);
      if (n && qe(n)) return { type: "turn", line: n, retry: true, tries: e.retry.tries };
    }
    const s = $e(t, e.cursor);
    return s ? qe(s) ? { type: "turn", line: s, retry: false, tries: 0 } : { type: "say", line: s } : { type: "done" };
  }
  function M$(t, e) {
    const s = Rt(t, e);
    return s.type !== "say" ? e : { ...e, cursor: s.line.next, log: [...e.log, { kind: "say", lineId: s.line.id, speaker: s.line.say }] };
  }
  const Hi = (t) => [...t.log].reverse().find((e) => e.kind === "say");
  function O$(t, e, s) {
    var _a3, _b3;
    const n = Rt(t, e);
    if (n.type !== "turn") return e;
    const { line: r } = n, i = n.tries + 1, o = (_b3 = (_a3 = Hi(e)) == null ? void 0 : _a3.speaker) != null ? _b3 : "", c = !n.retry ? [...e.turns, { lineId: r.id, itemId: r.reply, tries: i, score: Math.max(0, Math.min(1, s.score)), right: s.correct, shown: false }] : e.turns.map((l) => l.lineId === r.id ? { ...l, tries: i, right: l.right || s.correct } : l);
    return s.correct ? { ...e, turns: c, retry: null, cursor: r.next, log: [...e.log, { kind: "you", lineId: r.id, outcome: "right", text: s.text }] } : i >= I$ ? { ...e, turns: c.map((l) => l.lineId === r.id ? { ...l, shown: true } : l), retry: null, cursor: r.next, log: [...e.log, { kind: "help", lineId: r.id, speaker: o, attempt: i }, { kind: "you", lineId: r.id, outcome: "shown", text: s.text }] } : { ...e, turns: c, retry: { lineId: r.id, tries: i }, log: [...e.log, { kind: "help", lineId: r.id, speaker: o, attempt: i }] };
  }
  function N$(t, e) {
    const s = Rt(t, e);
    return s.type !== "turn" ? e : { ...e, retry: null, cursor: s.line.next };
  }
  const P$ = (t, e) => Rt(t, e).type === "done";
  function R$(t) {
    return t.turns.length === 0 ? 0 : t.turns.reduce((e, s) => e + s.score, 0) / t.turns.length;
  }
  const Dt = (t) => js(t).path.filter((e) => qe($e(t, e))).length;
  function Vi(t, e, s) {
    const n = js(t).path, r = /* @__PURE__ */ new Set();
    return e.log.forEach((i, o) => {
      if (i.kind !== "say") return;
      const a = $e(t, i.lineId);
      if (!a || !Se(a) || !a.listen || !a.audio || !s(a.audio)) return;
      const c = n.indexOf(a.id), l = n.slice(c + 1).some((h) => qe($e(t, h))), d = e.log.slice(o + 1).some((h) => h.kind === "you");
      l && !d && r.add(a.id);
    }), r;
  }
  function D$(t, e, s) {
    var _a3, _b3, _c2, _d2;
    if (e.youSay && s.hasText(e.youSay)) return s.t(e.youSay);
    if (!t) return null;
    const n = t;
    switch (t.kind) {
      case "typed":
        return typeof n.answer == "string" ? (_a3 = s.canonical(n.answer)) != null ? _a3 : null : null;
      case "mcq": {
        const r = (_b3 = n.options) == null ? void 0 : _b3.find((i) => i.id === n.answer);
        return r ? s.t(r.text) : null;
      }
      case "listening": {
        if (n.mode !== "choose") return null;
        const r = (_c2 = n.options) == null ? void 0 : _c2.find((i) => i.id === n.answer);
        return r ? s.t(r.text) : null;
      }
      case "cloze": {
        if (!n.text || !n.gaps) return null;
        let r = s.t(n.text);
        for (const i of n.gaps) r = r.split("{{".concat(i.id, "}}")).join((_d2 = s.canonical(i.answer)) != null ? _d2 : s.t(i.answer));
        return r;
      }
      default:
        return null;
    }
  }
  function L$(t) {
    const { section: e, pack: s } = t, n = new Set(s.units.filter((l) => xs(e, l.id).length > 0).map((l) => l.id)), r = [], i = Tt(s.units), o = (l, d = /* @__PURE__ */ new Set()) => l.flatMap((h) => {
      var _a3, _b3;
      return d.has(h) ? [] : (d.add(h), n.has(h) ? t.mastered(h) ? [] : [h] : o((_b3 = (_a3 = s.units.find((p) => p.id === h)) == null ? void 0 : _a3.requires) != null ? _b3 : [], d));
    });
    for (const l of i) {
      const d = s.units.find((p) => p.id === l);
      if (!d) continue;
      const h = o(d.requires);
      for (const p of xs(e, l)) r.push({ scene: p, unit: l, finale: false, locked: h.length > 0, stars: t.unitStars(l), needs: h, turns: Dt(p) });
    }
    const a = new Set(s.units.map((l) => l.id));
    for (const l of e.scenes) l.id === e.finale || l.unit && a.has(l.unit) || r.push({ scene: l, unit: l.unit, finale: false, locked: false, stars: 0, needs: [], turns: Dt(l) });
    const c = e.scenes.find((l) => l.id === e.finale);
    if (c) {
      const l = [...n].filter((d) => !t.mastered(d));
      r.push({ scene: c, unit: void 0, finale: true, locked: l.length > 0, stars: t.bossStars, needs: l, turns: Dt(c) });
    }
    return r;
  }
  function C$(t, e) {
    const s = new Set(t.filter((n) => n.locked).map((n) => n.scene.id));
    return e.filter((n) => !n.locked && s.has(n.scene.id)).map((n) => n.scene.id);
  }
  const hu = ["seed", "sprout", "bud", "bloom"];
  function pu(t, e) {
    if (e) return "wilted";
    if (!t || t.last === null) return "seed";
    if (t.reps === 0) return "wilted";
    switch (ib(t)) {
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
  function Z$(t) {
    const e = new Set(t.queue), s = new Set(t.doneUnits), n = new Set(t.pack.items.map((r) => r.id));
    return t.section.garden.filter((r) => n.has(r.item)).map((r) => {
      const i = t.cards[r.item], o = Al(t.pack, r), a = i !== void 0 || o !== void 0 && s.has(o);
      return { word: r, unit: o, planted: a, stage: pu(i, e.has(r.item)), due: a && (i === void 0 || i.last === null || i.due <= t.now), dueAt: i && i.last !== null ? i.due : null };
    });
  }
  function Yi(t) {
    return [...new Set(t.filter((e) => e.planted && (e.due || e.stage === "wilted" || e.stage === "seed")).map((e) => e.word.item))];
  }
  function Ji(t) {
    const e = { seed: 0, sprout: 0, bud: 0, bloom: 0, wilted: 0 };
    for (const s of t) s.planted && (e[s.stage] += 1);
    return e;
  }
  function U$(t, e) {
    if (e === "wilted") return t === "wilted" ? "same" : "wilted";
    const s = t === "wilted" ? -1 : hu.indexOf(t);
    return hu.indexOf(e) > s ? "grew" : "same";
  }
  function F$(t, e) {
    return t.dueAt === null ? null : t.dueAt <= e ? 0 : Math.ceil((t.dueAt - e) / Ur);
  }
  const B$ = (t, e) => e !== "" && " ".concat(t, " ").includes(" ".concat(e, " "));
  function K$(t, e, s, n = /* @__PURE__ */ new Set()) {
    const r = Pe(s(e.text)), i = [...t.scenes.filter((o) => n.has(o.id)), ...t.scenes.filter((o) => !n.has(o.id))];
    for (const o of i) for (const a of js(o).path) {
      const c = $e(o, a);
      if (c && Se(c) && B$(Pe(s(c.text)), r)) return { sceneId: o.id, lineId: c.id, speaker: c.say, text: c.text, how: "heard" };
    }
    for (const o of i) {
      const a = js(o).path;
      for (const [c, l] of a.entries()) {
        const d = $e(o, l);
        if (!(!d || !qe(d) || d.reply !== e.item)) for (let h = c - 1; h >= 0; h--) {
          const p = $e(o, a[h]);
          if (p && Se(p)) return { sceneId: o.id, lineId: p.id, speaker: p.say, text: p.text, how: "used" };
        }
      }
    }
    return null;
  }
  const q$ = { en: { "rp.tagline": "A postcard from a café on the Adriatic", "rp.title.level": "Level {level}", "rp.title.about": "Talk your way through three conversations, then keep the words alive in your garden.", "rp.scenes.title": "Conversations", "rp.scenes.sub": "Pick a scene. Answer in the language you are learning: choose or type.", "rp.scenes.stars": "{n} of {total} stars", "rp.scenes.locked": "Finish the earlier scenes first (2 stars).", "rp.scenes.finale": "The finale mixes everything you have learned.", "rp.scenes.finale.locked": "Open every scene with 2 stars to take the finale.", "rp.scenes.garden": "Vocabulary garden", "rp.scene.turns": "{n} turns", "rp.scene.open": "Play", "rp.scene.back": "Back to the scenes", "rp.scene.setting": "Setting", "rp.next": "Next line", "rp.turn": "Your turn", "rp.lead": "Your turn {i} of {n}", "rp.water.lead": "Watering {i} of {n}", "rp.garden.planted": "{n} of {total} words planted", "rp.cont": "Continue the conversation", "rp.retry": "Try again", "rp.finish": "Finish the scene", "rp.log": "The conversation so far", "rp.translate": "Translate", "rp.translate.hide": "Hide translation", "rp.play": "Play this line", "rp.listen": "Listen", "rp.hidden": "Listen to the clip: the words appear after your answer.", "rp.said": "{name} says:", "rp.you": "You", "rp.again": "{name} says it again, slowly:", "rp.again.second": "{name} tries once more, even more slowly:", "rp.again.plain": "Sorry? Once more, slowly.", "rp.model": "You could say:", "rp.model.shown": "The conversation goes on. Your words are saved for review.", "rp.effect.right": "{name} understands you and the conversation goes on.", "rp.effect.wrong": "{name} did not quite understand. The line comes again.", "rp.effect.shown": "{name} shows you what to say and the conversation goes on.", "rp.effect.grew": 'The plant for "{word}" grew: {from} to {to}.', "rp.effect.planted": 'The plant for "{word}" is in the garden.', "rp.effect.wilted": 'The plant for "{word}" wilts. Water it again soon.', "rp.effect.same": 'The plant for "{word}" stays a {stage}.', "rp.hud.last": "The last thing said to you", "rp.hud.plant": "The plant you are watering", "rp.done.title": "Scene finished", "rp.done.finale": "Finale finished", "rp.done.accuracy": "{n}% right first time", "rp.done.words": "New words in your garden", "rp.done.nowords": "No new words this time.", "rp.done.unlocked": "Opened: {scenes}", "rp.done.need": "Two stars open the next scene. Play this one again.", "rp.done.boss.fail": "Not yet: one star beats the finale. Play it again.", "rp.done.replay": "Play the scene again", "rp.done.garden": "Visit the garden", "rp.done.finish": "Finish the course", "rp.garden.title": "Vocabulary garden", "rp.garden.sub": "One plant for every word you have met. Plants grow when you remember the word and wilt when you forget it.", "rp.garden.stats": "{seed} seeds, {sprout} sprouts, {bud} buds, {bloom} in bloom, {wilted} wilted", "rp.garden.empty": "The garden is empty. Finish a scene and its words are planted here.", "rp.garden.packet": "{n} more words are still in the seed packet. Finish scenes to plant them.", "rp.garden.met": 'Heard in the scene "{scene}", where {name} said: "{line}"', "rp.garden.used": 'You used it in the scene "{scene}", after {name} said: "{line}"', "rp.garden.next": "Next watering: {when}", "rp.garden.next.due": "now", "rp.garden.next.days": "in {n} days", "rp.garden.next.day": "tomorrow", "rp.water": "Water the plants ({n})", "rp.water.none": "Nothing to water right now", "rp.water.done": "Watered: {right} of {n} remembered. Come back when the plants are thirsty again.", "rp.water.empty": "All the plants are happy for now.", "rp.garden.back": "Back to the scenes", "rp.stage.seed": "seed", "rp.stage.sprout": "sprout", "rp.stage.bud": "bud", "rp.stage.bloom": "bloom", "rp.stage.wilted": "wilted", "rp.stage.label": "Stage: {stage}", "rp.plant.alt": "A potted plant: {stage}", "rp.end.title": "You can hold a conversation!", "rp.end.sub": "You mastered every scene and finished the finale. Keep watering the garden.", "rp.end.words": "{n} words in the garden, {bloom} in bloom" }, hr: { "rp.tagline": "Razglednica iz kafića na Jadranu", "rp.title.level": "Razina {level}", "rp.title.about": "Prođite tri razgovora, a zatim održavajte riječi na životu u svom vrtu.", "rp.scenes.title": "Razgovori", "rp.scenes.sub": "Odaberite scenu. Odgovarajte na jeziku koji učite: birajte ili tipkajte.", "rp.scenes.stars": "{n} od {total} zvjezdica", "rp.scenes.locked": "Prvo završite prethodne scene (2 zvjezdice).", "rp.scenes.finale": "Finale miješa sve što ste naučili.", "rp.scenes.finale.locked": "Otvorite svaku scenu s 2 zvjezdice za finale.", "rp.scenes.garden": "Vrt riječi", "rp.scene.turns": "{n} odgovora", "rp.scene.open": "Igraj", "rp.scene.back": "Natrag na scene", "rp.scene.setting": "Mjesto radnje", "rp.next": "Sljedeća replika", "rp.turn": "Vi ste na redu", "rp.lead": "Vi ste na redu: {i} od {n}", "rp.water.lead": "Zalijevanje {i} od {n}", "rp.garden.planted": "{n} od {total} riječi posađeno", "rp.cont": "Nastavite razgovor", "rp.retry": "Pokušajte ponovno", "rp.finish": "Završi scenu", "rp.log": "Razgovor do sada", "rp.translate": "Prijevod", "rp.translate.hide": "Sakrij prijevod", "rp.play": "Poslušaj repliku", "rp.listen": "Slušajte", "rp.hidden": "Poslušajte snimku: riječi se pojave nakon vašeg odgovora.", "rp.said": "{name} kaže:", "rp.you": "Vi", "rp.again": "{name} ponavlja polako:", "rp.again.second": "{name} pokušava još jednom, još sporije:", "rp.again.plain": "Molim? Još jednom, polako.", "rp.model": "Mogli biste reći:", "rp.model.shown": "Razgovor ide dalje. Vaše riječi su spremljene za ponavljanje.", "rp.effect.right": "{name} vas razumije i razgovor ide dalje.", "rp.effect.wrong": "{name} vas nije baš razumio. Replika dolazi ponovno.", "rp.effect.shown": "{name} vam pokazuje što reći i razgovor ide dalje.", "rp.effect.grew": 'Biljka za "{word}" je narasla: {from} u {to}.', "rp.effect.planted": 'Biljka za "{word}" je u vrtu.', "rp.effect.wilted": 'Biljka za "{word}" vene. Uskoro je zalijte ponovno.', "rp.effect.same": 'Biljka za "{word}" ostaje: {stage}.', "rp.hud.last": "Zadnje što vam je rečeno", "rp.hud.plant": "Biljka koju zalijevate", "rp.done.title": "Scena je gotova", "rp.done.finale": "Finale je gotovo", "rp.done.accuracy": "{n}% točno iz prvog pokušaja", "rp.done.words": "Nove riječi u vašem vrtu", "rp.done.nowords": "Ovaj put nema novih riječi.", "rp.done.unlocked": "Otvoreno: {scenes}", "rp.done.need": "Dvije zvjezdice otvaraju sljedeću scenu. Odigrajte ovu ponovno.", "rp.done.boss.fail": "Još ne: jedna zvjezdica pobjeđuje finale. Odigrajte ga ponovno.", "rp.done.replay": "Odigraj scenu ponovno", "rp.done.garden": "Posjeti vrt", "rp.done.finish": "Završi tečaj", "rp.garden.title": "Vrt riječi", "rp.garden.sub": "Jedna biljka za svaku riječ koju ste upoznali. Biljke rastu kad se sjetite riječi, a venu kad je zaboravite.", "rp.garden.stats": "{seed} sjemenki, {sprout} klica, {bud} pupova, {bloom} u cvatu, {wilted} uvelih", "rp.garden.empty": "Vrt je prazan. Završite scenu i njezine riječi bit će posađene ovdje.", "rp.garden.packet": "Još {n} riječi je u vrećici sjemenki. Završite scene da ih posadite.", "rp.garden.met": 'Čuli ste je u sceni "{scene}", gdje je {name} rekao: "{line}"', "rp.garden.used": 'Upotrijebili ste je u sceni "{scene}", nakon što je {name} rekao: "{line}"', "rp.garden.next": "Sljedeće zalijevanje: {when}", "rp.garden.next.due": "sada", "rp.garden.next.days": "za {n} dana", "rp.garden.next.day": "sutra", "rp.water": "Zalij biljke ({n})", "rp.water.none": "Trenutno nema što zalijevati", "rp.water.done": "Zalijevanje: sjetili ste se {right} od {n}. Vratite se kad biljke ponovno ožedne.", "rp.water.empty": "Sve su biljke za sada zadovoljne.", "rp.garden.back": "Natrag na scene", "rp.stage.seed": "sjemenka", "rp.stage.sprout": "klica", "rp.stage.bud": "pup", "rp.stage.bloom": "cvijet", "rp.stage.wilted": "uvela", "rp.stage.label": "Stadij: {stage}", "rp.plant.alt": "Biljka u loncu: {stage}", "rp.end.title": "Znate voditi razgovor!", "rp.end.sub": "Savladali ste svaku scenu i završili finale. Nastavite zalijevati vrt.", "rp.end.words": "{n} riječi u vrtu, {bloom} u cvatu" }, de: { "rp.tagline": "Eine Postkarte aus einem Café an der Adria", "rp.title.level": "Stufe {level}", "rp.title.about": "Meistere drei Gespräche und halte dann die Wörter in deinem Garten lebendig.", "rp.scenes.title": "Gespräche", "rp.scenes.sub": "Wähle eine Szene. Antworte in der Sprache, die du lernst: auswählen oder tippen.", "rp.scenes.stars": "{n} von {total} Sternen", "rp.scenes.locked": "Beende zuerst die früheren Szenen (2 Sterne).", "rp.scenes.finale": "Das Finale mischt alles, was du gelernt hast.", "rp.scenes.finale.locked": "Öffne jede Szene mit 2 Sternen, um das Finale zu spielen.", "rp.scenes.garden": "Vokabelgarten", "rp.scene.turns": "{n} Runden", "rp.scene.open": "Spielen", "rp.scene.back": "Zurück zu den Szenen", "rp.scene.setting": "Schauplatz", "rp.next": "Nächste Zeile", "rp.turn": "Du bist dran", "rp.lead": "Du bist dran, {i} von {n}", "rp.water.lead": "Gießen {i} von {n}", "rp.garden.planted": "{n} von {total} Wörtern gepflanzt", "rp.cont": "Das Gespräch fortsetzen", "rp.retry": "Noch einmal versuchen", "rp.finish": "Die Szene beenden", "rp.log": "Das bisherige Gespräch", "rp.translate": "Übersetzen", "rp.translate.hide": "Übersetzung ausblenden", "rp.play": "Diese Zeile abspielen", "rp.listen": "Zuhören", "rp.hidden": "Höre dir den Clip an: Die Worte erscheinen nach deiner Antwort.", "rp.said": "{name} sagt:", "rp.you": "Du", "rp.again": "{name} sagt es noch einmal, langsam:", "rp.again.second": "{name} versucht es noch einmal, noch langsamer:", "rp.again.plain": "Wie bitte? Noch einmal, langsam.", "rp.model": "Du könntest sagen:", "rp.model.shown": "Das Gespräch geht weiter. Deine Worte sind zum Wiederholen gespeichert.", "rp.effect.right": "{name} versteht dich und das Gespräch geht weiter.", "rp.effect.wrong": "{name} hat dich nicht ganz verstanden. Die Zeile kommt noch einmal.", "rp.effect.shown": "{name} zeigt dir, was du sagen kannst, und das Gespräch geht weiter.", "rp.effect.grew": "Die Pflanze für „{word}“ ist gewachsen: {from} zu {to}.", "rp.effect.planted": "Die Pflanze für „{word}“ steht im Garten.", "rp.effect.wilted": "Die Pflanze für „{word}“ welkt. Gieße sie bald wieder.", "rp.effect.same": "Die Pflanze für „{word}“ bleibt: {stage}.", "rp.hud.last": "Das Letzte, was zu dir gesagt wurde", "rp.hud.plant": "Die Pflanze, die du gießt", "rp.done.title": "Szene beendet", "rp.done.finale": "Finale beendet", "rp.done.accuracy": "{n} % gleich beim ersten Mal richtig", "rp.done.words": "Neue Wörter in deinem Garten", "rp.done.nowords": "Diesmal keine neuen Wörter.", "rp.done.unlocked": "Geöffnet: {scenes}", "rp.done.need": "Zwei Sterne öffnen die nächste Szene. Spiele diese noch einmal.", "rp.done.boss.fail": "Noch nicht: Ein Stern besiegt das Finale. Spiele es noch einmal.", "rp.done.replay": "Die Szene noch einmal spielen", "rp.done.garden": "Den Garten besuchen", "rp.done.finish": "Den Kurs abschließen", "rp.garden.title": "Vokabelgarten", "rp.garden.sub": "Eine Pflanze für jedes Wort, dem du begegnet bist. Pflanzen wachsen, wenn du dich an das Wort erinnerst, und welken, wenn du es vergisst.", "rp.garden.stats": "{seed} Samen, {sprout} Sprossen, {bud} Knospen, {bloom} in Blüte, {wilted} welk", "rp.garden.empty": "Der Garten ist leer. Beende eine Szene, und ihre Wörter werden hier gepflanzt.", "rp.garden.packet": "{n} weitere Wörter sind noch in der Samentüte. Beende Szenen, um sie zu pflanzen.", "rp.garden.met": "Gehört in der Szene „{scene}“, in der {name} sagte: „{line}“", "rp.garden.used": "Verwendet in der Szene „{scene}“, nachdem {name} gesagt hatte: „{line}“", "rp.garden.next": "Nächstes Gießen: {when}", "rp.garden.next.due": "jetzt", "rp.garden.next.days": "in {n} Tagen", "rp.garden.next.day": "morgen", "rp.water": "Die Pflanzen gießen ({n})", "rp.water.none": "Im Moment gibt es nichts zu gießen", "rp.water.done": "Gegossen: {right} von {n} erinnert. Komm wieder, wenn die Pflanzen wieder durstig sind.", "rp.water.empty": "Alle Pflanzen sind vorerst zufrieden.", "rp.garden.back": "Zurück zu den Szenen", "rp.stage.seed": "Samen", "rp.stage.sprout": "Spross", "rp.stage.bud": "Knospe", "rp.stage.bloom": "Blüte", "rp.stage.wilted": "welk", "rp.stage.label": "Stufe: {stage}", "rp.plant.alt": "Eine Topfpflanze: {stage}", "rp.end.title": "Du kannst ein Gespräch führen!", "rp.end.sub": "Du hast jede Szene gemeistert und das Finale geschafft. Gieße den Garten weiter.", "rp.end.words": "{n} Wörter im Garten, {bloom} in Blüte" } }, fu = "roleplay", G$ = "postcard", mu = 8;
  class W$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "playing", null);
      __publicField(this, "water", null);
      __publicField(this, "finishedScene", null);
      __publicField(this, "audio", null);
      __publicField(this, "titleState", ts());
      var _a3;
      this.host = e, this.session = new Ds(e, { shellId: fu, theme: G$, strings: q$ }), this.section = (_a3 = this.session.section()) != null ? _a3 : jl.parse({});
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
      return L$({ section: this.section, pack: e.pack, mastered: (s) => e.isMastered(s), unitStars: (s) => e.unitStars(s), bossStars: e.bossStars() });
    }
    plants() {
      const e = this.session;
      return Z$({ section: this.section, pack: e.pack, cards: e.progress.cards, queue: e.progress.queue, doneUnits: this.doneUnits(), now: Date.now() });
    }
    wordsOfItem(e) {
      return this.section.garden.filter((s) => s.item === e);
    }
    stageOfItem(e) {
      const s = this.session;
      return pu(s.progress.cards[e], s.progress.queue.includes(e));
    }
    stageName(e) {
      return this.s("rp.stage.".concat(e));
    }
    who(e) {
      const s = this.session, n = this.section.speakers, r = n.findIndex((a) => a.id === e), i = n[r];
      if (!i) return { name: e != null ? e : this.s("rp.you"), index: 0 };
      const o = i.portrait ? s.data.assets[i.portrait] : void 0;
      return { name: s.t(i.name), index: r, ...o ? { url: o } : {} };
    }
    learner() {
      var _a3;
      const e = this.section.speakers.findIndex((s) => s.learner);
      return e >= 0 ? this.who((_a3 = this.section.speakers[e]) == null ? void 0 : _a3.id) : { name: this.s("rp.you"), index: 5 };
    }
    helperOf(e) {
      var _a3, _b3, _c2;
      return (_c2 = (_a3 = Hi(e)) == null ? void 0 : _a3.speaker) != null ? _c2 : (_b3 = this.section.speakers.find((s) => !s.learner)) == null ? void 0 : _b3.id;
    }
    audioUrl(e) {
      return e.audio ? this.session.data.assets[e.audio] : void 0;
    }
    playUrl(e) {
      this.stopAudio();
      try {
        const s = new Audio(e);
        this.audio = s, s.play().catch(() => {
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
      this.audio = null;
    }
    sayBubble(e, s) {
      const n = this.session, r = this.s, i = !s.hidden && e.translation && n.text.hasText(e.translation) ? n.text.t(e.translation) : null, o = i ? u("p", { class: "pc-translation", testid: "translation-".concat(e.id), hidden: true, lang: n.lang }, i) : null, a = i ? lu("translate-".concat(e.id), r("rp.translate"), () => {
        const d = (o == null ? void 0 : o.hidden) === true;
        o && (o.hidden = !d), a == null ? void 0 : a.setAttribute("aria-expanded", String(d)), a && (a.textContent = r(d ? "rp.translate.hide" : "rp.translate"));
      }, { "aria-expanded": "false" }) : null, c = this.audioUrl(e), l = c && !s.noPlay ? lu("line-play-".concat(e.id), "▶ ".concat(r("rp.play")), () => this.playUrl(c)) : null;
      return Wi({ testid: s.testid, kind: s.kind, speaker: this.who(e.say), text: s.hidden ? null : n.text.t(e.text), ...this.targetLang ? { lang: this.targetLang } : {}, hidden: r("rp.hidden"), actions: [a, l], extra: o });
    }
    logBubbles(e, s) {
      const n = this.session, r = this.s, i = Vi(e, s, (c) => !!n.data.assets[c]), o = [];
      let a;
      for (const c of s.log) if (c.kind === "say") {
        const l = $e(e, c.lineId);
        if (!l || !Se(l)) continue;
        a = l, o.push(this.sayBubble(l, { testid: "line-".concat(l.id), kind: "say", hidden: i.has(l.id) }));
      } else if (c.kind === "you") {
        if (c.text === null) continue;
        o.push(Wi({ testid: "you-".concat(c.lineId), kind: "you", speaker: this.learner(), text: c.text, ...this.targetLang ? { lang: this.targetLang } : {}, outcome: c.outcome, lead: c.outcome === "shown" ? r("rp.model") : null, note: c.outcome === "shown" ? r("rp.model.shown") : null }));
      } else o.push(this.helpBubble(e, c, a, i));
      return o;
    }
    helpBubble(e, s, n, r) {
      const i = this.session, o = this.s, a = $e(e, s.lineId), c = a && qe(a) ? a.help : void 0, l = c && i.text.hasText(c) ? i.text.t(c) : null, d = this.who(s.speaker), h = !!n && !r.has(n.id);
      return Wi({ testid: "help-".concat(s.lineId, "-").concat(s.attempt), kind: "help", speaker: d, slow: true, lead: n ? o(s.attempt >= 2 ? "rp.again.second" : "rp.again", { name: d.name }) : o("rp.again.plain"), text: n && h ? i.text.t(n.text) : null, ...this.targetLang ? { lang: this.targetLang } : {}, hidden: o("rp.hidden"), note: l });
    }
    sceneView() {
      var _a3;
      const e = this.playing;
      if (!e) return null;
      const s = Rt(e.scene, e.st);
      return { scene: e.scene.id, unit: (_a3 = e.scene.unit) != null ? _a3 : null, finale: e.finale, step: s.type, line: s.type === "done" ? null : s.line.id, retry: s.type === "turn" ? s.retry : false, tries: s.type === "turn" ? s.tries : 0, said: e.st.log.filter((n) => n.kind === "say").length, turns: Dt(e.scene), answered: e.st.turns.length, helped: e.st.log.filter((n) => n.kind === "help").length, shown: e.st.turns.filter((n) => n.shown).length, hidden: [...Vi(e.scene, e.st, (n) => !!this.session.data.assets[n])] };
    }
    gardenView(e) {
      const s = this.plants();
      return { plants: s.filter((n) => n.planted).map((n) => ({ id: n.word.id, item: n.word.item, stage: n.stage, due: n.due })), counts: Ji(s), packet: s.filter((n) => !n.planted).length, pool: Yi(s).length, result: e };
    }
    title() {
      var _a3;
      const e = this.session;
      e.finished = false, this.playing = null, this.water = null;
      const s = e.pack.cefr;
      e.render("title", Ls(e, { onStart: () => this.scenes() }, () => this.title(), this.titleState), { view: { cefr: s != null ? s : null, target: (_a3 = this.targetLang) != null ? _a3 : null, scenes: this.section.scenes.length } });
    }
    scenes() {
      const e = this.session, s = this.s;
      e.finished = false, this.playing = null, this.water = null, this.stopAudio();
      const n = this.board(), r = e.pack.units.length, i = e.totalStars(), o = n.find((h) => h.finale), a = o ? e.bossStars() >= 1 : e.allMastered(), c = this.plants().filter((h) => h.planted).length, l = (h) => {
        var _a3;
        const p = h.scene, f = (_a3 = p.cefr) != null ? _a3 : e.pack.cefr, m = h.needs.map((g) => e.unitTitle(g)).join(", ");
        return u("li", { class: "pc-scene-item" }, u("button", { type: "button", class: "pc-scene ".concat(h.locked ? "is-locked" : "is-open").concat(h.finale ? " is-finale" : "").concat(h.stars >= 2 ? " is-mastered" : ""), testid: "scene-".concat(p.id), "data-stars": String(h.stars), "data-locked": String(h.locked), "data-finale": String(h.finale), ...h.unit ? { "data-unit": h.unit } : {}, ...h.locked ? { disabled: true } : {}, onclick: () => this.openScene(h) }, u("span", { class: "pc-scene-kicker" }, h.finale ? s("rp.scenes.finale") : e.unitTitle(h.unit)), u("span", { class: "pc-scene-name" }, e.t(p.title)), p.setting ? u("span", { class: "pc-scene-setting" }, e.t(p.setting)) : null, u("span", { class: "pc-scene-meta" }, f ? cu(f) : null, u("span", {}, s("rp.scene.turns", { n: h.turns })), h.locked ? u("span", { class: "pc-lock" }, "".concat(h.finale ? s("rp.scenes.finale.locked") : s("rp.scenes.locked")).concat(m ? " (".concat(m, ")") : "")) : null), e.stars(h.stars)));
      }, d = u("section", { class: "scenes-screen pc-scenes" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "scenes-stars" }, s("rp.scenes.stars", { n: i, total: r * 3 })), I("to-garden", "🌱 ".concat(s("rp.scenes.garden"), " (").concat(c, ")"), () => this.garden(), { class: "btn btn-small" })), u("h1", { class: "screen-title", tabindex: "-1", testid: "scenes-title" }, s("rp.scenes.title")), u("p", { class: "subject" }, s("rp.scenes.sub")), n.length === 0 ? u("p", { class: "message message-bad", testid: "scenes-empty" }, s("rp.garden.empty")) : null, u("ol", { class: "pc-scene-list", testid: "scene-list" }, n.map(l)), a ? u("div", { class: "actions actions-center" }, I("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" })) : null);
      e.render("scenes", d, { view: { scenes: n.map((h) => {
        var _a3;
        return { id: h.scene.id, unit: (_a3 = h.unit) != null ? _a3 : null, finale: h.finale, locked: h.locked, stars: h.stars };
      }), finaleOpen: o ? !o.locked : false, crowned: a, planted: c } });
    }
    openScene(e) {
      if (e.locked) return;
      const s = this.playing;
      this.playing = s && s.scene.id === e.scene.id ? s : { scene: e.scene, st: uu(e.scene), finale: e.finale }, this.scene();
    }
    scene() {
      var _a3, _b3;
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const { scene: r, st: i } = n, o = Rt(r, i), a = this.logBubbles(r, i), c = (_a3 = r.cefr) != null ? _a3 : e.pack.cefr, l = o.type === "say" ? I("scene-next", s("rp.next"), () => this.nextLine(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : o.type === "turn" ? I("scene-reply", o.retry ? s("rp.retry") : s("rp.turn"), () => this.askTurn(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : I("scene-finish", s("rp.finish"), () => this.sceneDone(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), d = u("section", { class: "scene-screen pc-scene-screen" }, u("div", { class: "topbar" }, I("to-scenes", "‹ ".concat(s("rp.scene.back")), () => {
        this.stopAudio(), this.scenes();
      }, { class: "btn btn-small btn-ghost" }), c ? cu(c) : null), u("h1", { class: "screen-title pc-scene-title", tabindex: "-1", testid: "scene-title" }, e.t(r.title)), r.setting ? u("p", { class: "pc-setting", testid: "scene-setting" }, u("b", {}, "".concat(s("rp.scene.setting"), ": ")), e.t(r.setting)) : null, u("h2", { class: "sr-only" }, s("rp.log")), a.length > 0 ? u("ol", { class: "pc-log", testid: "scene-log" }, a) : null, u("div", { class: "pc-actionbar actions actions-center" }, l));
      e.render("scene", d, { ...r.unit ? { unitId: r.unit } : {}, view: (_b3 = this.sceneView()) != null ? _b3 : {} }, { focus: false });
      const h = i.log[i.log.length - 1];
      if (h && h.kind === "say") {
        const p = $e(r, h.lineId);
        p && Se(p) && e.live("".concat(this.who(p.say).name, ": ").concat(e.text.t(p.text)));
      }
      l.focus({ preventScroll: !(a.length > 0) }), a.length === 0 && window.scrollTo(0, 0);
    }
    nextLine() {
      const e = this.playing;
      e && (e.st = M$(e.scene, e.st), this.scene());
    }
    askTurn() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const r = n.scene, i = Rt(r, n.st);
      if (i.type !== "turn") return this.scene();
      const o = i.line, a = e.item(o.reply);
      if (!e.canAsk(a)) return n.st = N$(r, n.st), this.afterTurn();
      const c = this.stageOfItem(a.id), l = this.helperOf(n.st), d = this.who(l).name, h = Hi(n.st), p = h ? $e(r, h.lineId) : void 0, f = !!p && Se(p) && Vi(r, n.st, (v) => !!e.data.assets[v]).has(p.id);
      let m = null;
      p && Se(p) && (m = this.sayBubble(p, { testid: "hud-last", kind: "hud", hidden: f, noPlay: f && a.kind === "listening" }));
      const g = o.help && e.text.hasText(o.help) ? e.text.t(o.help) : null, k = u("div", { class: "pc-hud" }, u("p", { class: "pc-hud-label" }, s(p ? "rp.hud.last" : "rp.scene.setting")), m ? u("ul", { class: "pc-log pc-log-hud" }, m) : u("p", { class: "pc-setting", testid: "hud-setting" }, r.setting ? e.t(r.setting) : e.t(r.title)), i.retry && g ? u("p", { class: "pc-hud-help", testid: "hud-help" }, u("b", {}, "".concat(s(i.tries >= 2 ? "rp.again.second" : "rp.again", { name: d }), " ")), g) : null), b = n.st.turns.length + (i.retry ? 0 : 1);
      lt(e, { item: a, context: "line", retry: i.retry, hud: k, lead: u("span", {}, s("rp.lead", { i: Math.min(b, Dt(r)), n: Dt(r) })), ...r.unit && !n.finale ? { unitId: r.unit } : {}, roundKind: n.finale ? "boss" : "unit", roundSize: Dt(r), index: Math.max(0, n.st.turns.length - (i.retry ? 1 : 0)), view: () => {
        var _a3;
        return (_a3 = this.sceneView()) != null ? _a3 : {};
      }, leaveLabel: s("rp.scene.back"), onLeave: () => this.scene(), onAnswered: (v) => {
        const w = D$(a, o, e.text);
        if (n.st = O$(r, n.st, { correct: v.result.correct, score: v.result.score, text: w }), f && p && Se(p) && m) {
          const y = m.querySelector(".pc-text");
          y && (y.textContent = e.text.t(p.text), y.classList.remove("pc-hidden-text"), this.targetLang && y.setAttribute("lang", this.targetLang));
        }
      }, effect: (v) => {
        const w = n.st, y = !v.result.correct, $ = y ? w.retry ? s("rp.effect.wrong", { name: d }) : s("rp.effect.shown", { name: d }) : s("rp.effect.right", { name: d }), x = this.plantNote(a.id, c);
        return { text: x ? "".concat($, " ").concat(x) : $, tone: y ? w.retry ? "bad" : "info" : "good" };
      }, nextLabel: (v) => v.result.correct || !n.st.retry ? s("rp.cont") : s("rp.retry"), onNext: () => this.afterTurn() });
    }
    afterTurn() {
      const e = this.playing;
      if (!e) return this.scenes();
      if (P$(e.scene, e.st)) return this.sceneDone();
      this.scene();
    }
    plantNote(e, s) {
      const n = this.wordsOfItem(e)[0];
      if (!n) return "";
      const r = this.s, i = this.session.text.t(n.text), o = this.stageOfItem(e), a = U$(s, o);
      return a === "wilted" ? r("rp.effect.wilted", { word: i }) : a === "grew" ? s === "seed" ? r("rp.effect.planted", { word: i }) : r("rp.effect.grew", { word: i, from: this.stageName(s), to: this.stageName(o) }) : r("rp.effect.same", { word: i, stage: this.stageName(o) });
    }
    sceneDone() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const r = n.scene, i = this.board(), o = R$(n.st), a = n.finale ? e.recordUnit({ boss: true }, o) : r.unit ? e.recordUnit({ unitId: r.unit }, o) : { stars: 0, unlocked: [] }, c = a.stars;
      this.markDone(r.id), e.playCue(n.finale ? "boss" : "unit-complete");
      const l = C$(i, this.board()).map((k) => {
        var _a3, _b3;
        return e.t(r.id === k ? r.title : (_b3 = (_a3 = this.section.scenes.find((b) => b.id === k)) == null ? void 0 : _a3.title) != null ? _b3 : k);
      }), d = new Set(n.st.turns.map((k) => k.itemId)), h = this.plants().filter((k) => d.has(k.word.item)), p = Math.round(o * 100), f = n.finale ? c >= 1 : c >= 2;
      this.stopAudio();
      const m = u("section", { class: "scenedone-screen pc-done ".concat(f ? "is-passed" : "is-again") }, u("p", { class: "eyebrow" }, e.t(r.title)), u("h1", { class: "screen-title", tabindex: "-1", testid: "done-title" }, n.finale ? s("rp.done.finale") : s("rp.done.title")), e.stars(c, "scene-stars"), u("p", { class: "big-number", testid: "scene-accuracy" }, s("rp.done.accuracy", { n: p })), u("div", { class: "pc-words" }, u("h2", {}, s("rp.done.words")), h.length > 0 ? u("ul", { class: "pc-word-list", testid: "scene-words" }, h.map((k) => u("li", { class: "pc-word stage-".concat(k.stage), testid: "word-".concat(k.word.id), "data-stage": k.stage }, u("b", { class: "pc-word-text", ...this.targetLang ? { lang: this.targetLang } : {} }, e.text.t(k.word.text)), u("span", { class: "pc-word-gloss" }, e.t(k.word.gloss)), u("span", { class: "pc-stage-chip" }, this.stageName(k.stage))))) : u("p", { class: "pc-none" }, s("rp.done.nowords"))), l.length > 0 ? u("p", { class: "message message-ok", testid: "scene-unlocked" }, s("rp.done.unlocked", { scenes: l.join(", ") })) : null, f ? null : u("p", { class: "message message-bad", testid: n.finale ? "finale-retry" : "scene-need" }, n.finale ? s("rp.done.boss.fail") : s("rp.done.need")), u("div", { class: "actions actions-center" }, n.finale && f ? I("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, I("to-scenes", s("rp.scene.back"), () => this.scenes(), { class: f && !n.finale ? "btn btn-primary btn-big" : "btn btn-big" }), c < 3 ? I("replay-scene", s("rp.done.replay"), () => this.replay(), { class: f ? "btn btn-big" : "btn btn-primary btn-big" }) : null, I("to-garden", s("rp.done.garden"), () => this.garden(), { class: "btn btn-big" }))), g = { scene: r.id, finale: n.finale, stars: c, accuracy: p, passed: f, unlocked: a.unlocked, opened: l, words: h.map((k) => ({ id: k.word.id, stage: k.stage })), helped: n.st.log.filter((k) => k.kind === "help").length, shown: n.st.turns.filter((k) => k.shown).length };
      this.finishedScene = n, e.render("scene-done", m, { ...r.unit && !n.finale ? { unitId: r.unit } : {}, view: g }), this.playing = null;
    }
    replay() {
      const e = this.finishedScene;
      if (!e) return this.scenes();
      this.playing = { scene: e.scene, st: uu(e.scene), finale: e.finale }, this.scene();
    }
    garden(e = null) {
      const s = this.session, n = this.s;
      this.playing = null, this.water = null, this.stopAudio();
      const r = this.plants(), i = r.filter((m) => m.planted), o = Ji(r), a = Yi(r), c = new Set(this.doneScenes()), l = Date.now(), d = (m) => s.text.t(m), h = (m) => {
        const g = K$(this.section, m.word, d, c), k = g ? this.section.scenes.find((y) => y.id === g.sceneId) : void 0, b = g && k ? n(g.how === "heard" ? "rp.garden.met" : "rp.garden.used", { scene: s.t(k.title), name: this.who(g.speaker).name, line: d(g.text) }) : null, v = F$(m, l), w = v === null || v === 0 ? n("rp.garden.next.due") : v === 1 ? n("rp.garden.next.day") : n("rp.garden.next.days", { n: v });
        return u("li", { class: "pc-plant-card stage-".concat(m.stage).concat(m.due ? " is-due" : ""), testid: "plant-".concat(m.word.id), "data-stage": m.stage, "data-due": String(m.due), "data-item": m.word.item }, u("div", { class: "pc-plant-pic" }, du(m.stage)), u("div", { class: "pc-plant-body" }, u("p", { class: "pc-plant-word", ...this.targetLang ? { lang: this.targetLang } : {} }, d(m.word.text)), u("p", { class: "pc-plant-gloss" }, s.t(m.word.gloss)), u("p", { class: "pc-plant-stage" }, u("span", { class: "pc-stage-chip" }, this.stageName(m.stage)), " ", u("span", { class: "sr-only" }, n("rp.stage.label", { stage: this.stageName(m.stage) }))), b ? u("p", { class: "pc-plant-met" }, b) : null, u("p", { class: "pc-plant-next" }, n("rp.garden.next", { when: w }))));
      }, p = r.length - i.length, f = u("section", { class: "garden-screen pc-garden" }, u("div", { class: "topbar" }, I("to-scenes", "‹ ".concat(n("rp.garden.back")), () => this.scenes(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "garden-planted" }, n("rp.garden.planted", { n: i.length, total: r.length }))), u("h1", { class: "screen-title", tabindex: "-1", testid: "garden-title" }, n("rp.garden.title")), u("p", { class: "subject" }, n("rp.garden.sub")), i.length > 0 ? u("p", { class: "pc-garden-stats", testid: "garden-stats" }, n("rp.garden.stats", o)) : u("p", { class: "message", testid: "garden-empty" }, n("rp.garden.empty")), e ? u("p", { class: "message message-ok", role: "status", testid: "water-result" }, n("rp.water.done", { right: e.right, n: e.n })) : null, u("div", { class: "actions actions-center" }, a.length > 0 ? I("water", "💧 ".concat(n("rp.water", { n: Math.min(a.length, mu) })), () => this.startWater(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : u("p", { class: "message", testid: "water-empty" }, i.length > 0 ? n("rp.water.empty") : n("rp.water.none"))), i.length > 0 ? u("ul", { class: "pc-plant-list", testid: "plant-list" }, i.map(h)) : null, p > 0 ? u("p", { class: "pc-packet", testid: "garden-packet" }, n("rp.garden.packet", { n: p })) : null);
      s.render("garden", f, { view: this.gardenView(e) });
    }
    startWater() {
      const e = this.session, s = Yi(this.plants());
      if (s.length === 0) return this.garden();
      const n = Math.min(s.length, mu);
      this.water = { run: e.startRun(s, { kind: "review", size: n }), n: 0, right: 0 }, this.waterStep();
    }
    waterStep() {
      const e = this.session, s = this.s, n = this.water;
      if (!n) return this.garden();
      const r = e.next(n.run);
      if (!r) {
        const l = { right: n.right, n: n.n };
        return this.water = null, this.garden(l);
      }
      const i = e.item(r.id), o = this.stageOfItem(i.id), a = this.wordsOfItem(i.id)[0], c = u("div", { class: "pc-hud pc-hud-plant" }, u("div", { class: "pc-hud-pot", "aria-hidden": "true" }, du(o)), u("div", { class: "pc-hud-text" }, u("p", { class: "pc-hud-label" }, s("rp.hud.plant")), u("p", { class: "pc-hud-stage", testid: "hud-stage" }, this.stageName(o))));
      lt(e, { item: i, context: "garden", retry: r.retry, hud: c, lead: u("span", {}, s("rp.water.lead", { i: Math.min(n.run.asked.length + (r.retry ? 0 : 1), n.run.size), n: n.run.size })), roundKind: "review", roundSize: n.run.size, index: n.run.results.length, view: () => {
        var _a3;
        return { ...this.gardenView(null), word: (_a3 = a == null ? void 0 : a.id) != null ? _a3 : null, stage: o };
      }, leaveLabel: s("rp.garden.back"), onLeave: () => this.garden(), onAnswered: (l) => {
        n.run = e.record(n.run, r, l), r.retry || (n.n += 1, l.result.correct && (n.right += 1));
      }, effect: (l) => {
        const d = this.plantNote(i.id, o);
        return d ? { text: d, tone: l.result.correct ? "good" : "bad" } : null;
      }, nextLabel: s("rp.next"), onNext: () => this.waterStep() });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.playing = null;
      const n = this.plants(), r = Ji(n);
      e.render("end", Cs(e, { title: s("rp.end.title"), sub: s("rp.end.sub"), stats: u("p", { class: "subject", testid: "end-words" }, s("rp.end.words", { n: n.filter((i) => i.planted).length, bloom: r.bloom })), onAgain: () => this.scenes(), onTitle: () => this.title() }), { view: { words: n.filter((i) => i.planted).length, bloom: r.bloom, scenes: this.board().length } });
    }
  }
  const gu = /* @__PURE__ */ (() => {
    let t = null;
    return { id: fu, mount(e) {
      t = new W$(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), Te = 100, H$ = 100, Qi = 25, V$ = 30, Y$ = 0.25, J$ = 2, ku = (t) => Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0, Xi = (t) => Math.min(J$, 1 + Y$ * Math.max(0, t)), Q$ = (t, e, s = H$) => Math.round(s * ku(t) * Xi(e)), X$ = (t, e, s = Qi) => t ? 0 : Math.max(1, Math.round(s * (1 - ku(e)))), ez = (t, e = Qi, s = Te, n = Te) => ({ foeHp: t, foeMax: t, hp: s, maxHp: n, streak: 0, turns: 0, strike: e });
  function tz(t, e) {
    const s = Xi(t.streak), n = Q$(e.score, t.streak), r = Math.max(0, t.foeHp - n), i = r === 0, o = i ? 0 : X$(e.correct, e.score, t.strike), a = Math.max(0, t.hp - o);
    return { battle: { ...t, foeHp: r, hp: a, streak: e.correct ? t.streak + 1 : 0, turns: t.turns + 1 }, dealt: n, taken: o, multiplier: s, won: i, fainted: !i && a === 0 };
  }
  const sz = (t, e) => e <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(t / e * 100))), nz = { k: "ink", w: "white", g: "gold", G: "gold-dark", s: "skin", S: "skin-shade", h: "hair", t: "tunic", T: "tunic-dark", c: "cape", r: "red", R: "red-dark", C: "cape-dark", n: "green", N: "green-dark", p: "purple", P: "purple-dark", o: "orange", y: "cyan", b: "brown", m: "stone", M: "stone-dark" }, Qn = ["................", ".....kkkkkk.....", "....khhhhhhk....", "...khhhhhhhhk...", "...khhssssshk...", "...kssksskssk...", "...kssssssssk...", "....kssSSssk....", "...kttttttttk...", "..ksttttttttsk..", "..kstttggtttsk..", "..ksttttttttsk..", "...kttttttttk...", "...kttkkkkttk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], bu = [".......kk.......", "......kppk......", ".....kppppk.....", "....kppgppPk....", "...kppppppppk...", "..kkkppppppkkk..", "...kssssssssk...", "...kskssskssk...", "...kwwwwwwwwk...", "..kpwwwwwwwwpk..", "..kpPwwwwwwPpk..", "..kspPppppPpsk..", "..kpppggggpppk..", "..kppppppppppk..", "..kpppppppppPk..", "..kkkkkkkkkkkk.."], vu = ["................", ".....kkkkkk.....", "....knnnnnnk....", "...knnnnnnnnk...", "...knnssssnnk...", "...knskssksnk...", "...kssssssssk...", "....kssSSssk....", "...kNnnnnnnNk...", "..ksNnnnnnnNsk..", "..ksNnggggnNsk..", "..kskNnnnnNksk..", "...kNnnnnnnNk...", "...kNnkkkknNk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], Us = [["................", "................", "................", ".....kkkkkk.....", "...kknnnnnnkk...", "..knnwwnnnnnnk..", "..knwnnnnnnnnk..", ".knnnnnnnnnnnnk.", ".knnkkknnkkknnk.", ".knnkwknnkwknnk.", ".knnkkknnkkknnk.", ".knnnnnkknnnnNk.", ".kNnnnnnnnnnNNk.", "..kNNNNNNNNNNk..", "...kkkkkkkkkk...", "................"], ["................", "..k..........k..", ".kPk........kPk.", ".kPPk.kkkk.kPPk.", "kPPPPkkppkkPPPPk", "kPPpPPkppkPPpPPk", "kPpPPPpppppPPPpk", ".kPPPPpwkkwpPPPk", "..kkPPppkkppPkk.", "....kkppppppkk..", ".....kwppppwk...", "......kppppk....", ".......kkkk.....", "................", "................", "................"], ["................", "..kk........kk..", "..kck......kck..", "..kcCkkkkkkCck..", "...kccccccccck..", "...kcwkcccwkck..", "...kccccccccck..", "....kcckkkcck...", "...kcccwwwccck..", "..kcCcccccccCck.", "..kccCcccccCcck.", "...kccccccccck..", "....kcccccccck..", "....kcckkkkcck..", "...kCCk....kCCk.", "...kkkk....kkkk."], ["................", ".....kkkkkk.....", "...kkwwwwwwkk...", "..kwwwwwwwwwwk..", "..kwwkkwwwkkwk..", ".kwwwkykwwkykwwk", ".kwwwkkwwwkkwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwkkwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwkwwwkwwwkwk.", ".kwkkkwkkkwkkkk.", "..k..kk..kk..k..", "................"]], Xn = ["..g.gg..gg.g....".slice(0, 16), "..gggggggggg....".slice(0, 16), "..kGggggggGk....".slice(0, 16), ".kkkmmmmmmmkk...".slice(0, 16), ".kmmmmmmmmmmmk..".slice(0, 16), ".kmmrrmmmrrmmk..".slice(0, 16), ".kmmrwmmmrwmmk..".slice(0, 16), ".kmmmmmkmmmmmk..".slice(0, 16), "..kmmkkkkkmmk...".slice(0, 16), ".kkmMmmmmmMmkk..".slice(0, 16), "kmmkMmmmmmMkmmk.".slice(0, 16), "kmmkmmmgmmmkmmk.".slice(0, 16), "kMMkmmmmmmmkMMk.".slice(0, 16), ".kkkmmMkMmmkkk..".slice(0, 16), "...kmmmkmmmk....".slice(0, 16), "...kkkkkkkkk....".slice(0, 16)], rz = ["................", "................", "................", "................", "......kkkk......", ".....kggggk.....", "....kggkkggk....", "....kgkkkgGk....", ".......kgGk.....", "......kgGk......", "......kgGk......", "......kkk.......", "................", "......kggk......", "......kGGk......", "......kkkk......"], ee = 16, iz = ["ink", "white", "gold", "gold-dark", "skin", "skin-shade", "hair", "tunic", "tunic-dark", "cape", "cape-dark", "red", "red-dark", "green", "green-dark", "purple", "purple-dark", "orange", "cyan", "brown", "stone", "stone-dark", "grass-1", "grass-2", "grass-3", "flower-1", "flower-2", "path-1", "path-2", "path-3", "water-1", "water-2", "water-3", "leaf-1", "leaf-2", "leaf-3", "trunk", "wall-1", "wall-2", "wall-3", "sky-1", "sky-2", "sky-3", "sky-4", "sky-5", "moon", "hill-1", "hill-2", "gate", "gate-dark", "glow"];
  function oz(t) {
    const e = document.createElement("span");
    e.setAttribute("aria-hidden", "true"), e.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:0;height:0", t.appendChild(e);
    const s = {};
    for (const n of iz) e.style.color = "", e.style.color = "var(--pixel-".concat(n, ")"), s[n] = getComputedStyle(e).color || "rgb(255 0 255)";
    return e.remove(), s;
  }
  const az = () => ({ sprites: {} });
  function Fs(t) {
    return t ? new Promise((e) => {
      const s = new Image();
      s.onload = () => e(s), s.onerror = () => e(null), s.src = t;
    }) : Promise.resolve(null);
  }
  function ne(t, e, s, n = 0) {
    let r = Math.imul(t + 1, 374761393) + Math.imul(e + 1, 668265263) + Math.imul(s + 1, 2246822519) + Math.imul(n + 1, 3266489917) | 0;
    return r = Math.imul(r ^ r >>> 13, 1274126177), r ^= r >>> 16, (r >>> 0) / 4294967296;
  }
  const K = (t, e, s, n, r, i) => {
    t.fillStyle = i, t.fillRect(e, s, n, r);
  };
  function $t(t, e, s, n, r, i = 1, o = false) {
    for (let a = 0; a < e.length; a++) {
      const c = e[a];
      for (let l = 0; l < c.length; l++) {
        const d = c[o ? c.length - 1 - l : l];
        if (d === ".") continue;
        const h = nz[d];
        h && (t.fillStyle = s[h], t.fillRect(n + l * i, r + a * i, i, i));
      }
    }
  }
  const wu = ["................", ".....kkkkkk.....", "...kkbbbbbbkk...", "..kbbbcbbbbbbk..", "..kbbcbbbbabbk..", ".kbbbbbbbbbbabk.", ".kbcbbbbabbbbbk.", ".kbbbbbbbbbbbak.", ".kbbbabbbbbcbak.", "..kbbbbbbbbbbk..", "..kkaabbbbaakk..", "....kkaaaakk....", "......kttk......", "......kttk......", ".....kkttkk.....", "................"], cz = { k: "ink", a: "leaf-1", b: "leaf-2", c: "leaf-3", t: "trunk" }, yu = (t, e, s, n, r) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t[s + r]) == null ? void 0 : _a3[e + n]) != null ? _b3 : "#";
  }, lz = (t) => t === "," || t === "@" || t === "N" || t === "B", dz = (t) => t === "~";
  function Su(t, e, s, n, r, i, o) {
    K(t, s, n, ee, ee, e["grass-1"]);
    for (let a = 0; a < 6; a++) {
      const c = Math.floor(ne(r, i, o.seed, a) * 14) + 1, l = Math.floor(ne(r, i, o.seed, a + 20) * 13) + 2;
      K(t, s + c, n + l, 1, 2, e["grass-2"]), K(t, s + c + 1, n + l - 1, 1, 1, e["grass-3"]);
    }
    for (let a = 0; a < 3; a++) K(t, s + Math.floor(ne(r, i, o.seed, a + 40) * 15), n + Math.floor(ne(r, i, o.seed, a + 50) * 15), 1, 1, e["grass-3"]);
    if (ne(r, i, o.seed, 60) < 0.1) {
      const a = Math.floor(ne(r, i, o.seed, 61) * 11) + 2, c = Math.floor(ne(r, i, o.seed, 62) * 11) + 2;
      K(t, s + a, n + c, 1, 1, e["flower-2"]), K(t, s + a - 1, n + c, 1, 1, e["flower-1"]), K(t, s + a + 1, n + c, 1, 1, e["flower-1"]), K(t, s + a, n + c - 1, 1, 1, e["flower-1"]), K(t, s + a, n + c + 1, 1, 1, e["flower-1"]);
    }
  }
  function $u(t, e, s, n, r, i, o, a) {
    K(t, n, r, ee, ee, e["path-1"]);
    for (let l = 0; l < 9; l++) K(t, n + Math.floor(ne(i, o, a.seed, l + 70) * 15), r + Math.floor(ne(i, o, a.seed, l + 80) * 15), 1, 1, e["path-2"]);
    for (let l = 0; l < 4; l++) K(t, n + Math.floor(ne(i, o, a.seed, l + 90) * 14), r + Math.floor(ne(i, o, a.seed, l + 100) * 14), 2, 1, e["path-3"]);
    const c = (l, d, h, p) => {
      const f = yu(s, i, o, l, d);
      if (!(lz(f) || f === "#" || f === "G")) for (let m = 0; m < ee; m++) {
        const g = 1 + Math.floor(ne(i, o, a.seed, 110 + m + (l + 2) * 16 + (d + 2) * 64) * 3);
        for (let k = 0; k < g; k++) {
          const b = m, v = p ? ee - 1 - k : k;
          K(t, n + (h ? b : v), r + (h ? v : b), 1, 1, k === g - 1 ? e["grass-2"] : e["grass-1"]);
        }
      }
    };
    c(0, -1, true, false), c(0, 1, true, true), c(-1, 0, false, false), c(1, 0, false, true);
  }
  function uz(t, e, s, n, r, i, o, a) {
    K(t, n, r, ee, ee, e["water-1"]);
    const c = a.frame * 2;
    for (let d = 0; d < 3; d++) {
      const h = 2 + d * 5 + Math.floor(ne(i, o, a.seed, d + 120) * 2), p = (Math.floor(ne(i, o, a.seed, d + 130) * 8) + c) % 11;
      K(t, n + p, r + h, 4, 1, e["water-2"]), K(t, n + p + 6 - c, r + h + 2, 2, 1, e["water-2"]);
    }
    a.frame === 1 && ne(i, o, a.seed, 140) < 0.7 && K(t, n + Math.floor(ne(i, o, a.seed, 141) * 13) + 1, r + Math.floor(ne(i, o, a.seed, 142) * 13) + 1, 1, 1, e["water-3"]), a.frame === 0 && ne(i, o, a.seed, 143) < 0.5 && K(t, n + Math.floor(ne(i, o, a.seed, 144) * 13) + 1, r + Math.floor(ne(i, o, a.seed, 145) * 13) + 1, 1, 1, e["water-3"]);
    const l = (d, h, p, f) => {
      if (!dz(yu(s, i, o, d, h))) for (let m = 0; m < ee; m++) ne(i, o, a.seed, 150 + m + (d + 2) * 16 + (h + 2) * 64) < 0.8 && K(t, n + (p ? m : f ? ee - 1 : 0), r + (p ? f ? ee - 1 : 0 : m), 1, 1, e["water-3"]);
    };
    l(0, -1, true, false), l(0, 1, true, true), l(-1, 0, false, false), l(1, 0, false, true);
  }
  function hz(t, e, s, n, r, i, o) {
    Su(t, e, s, n, r, i, o), K(t, s + 3, n + 13, 10, 2, e["grass-2"]);
    for (let a = 0; a < wu.length; a++) {
      const c = wu[a];
      for (let l = 0; l < c.length; l++) {
        const d = c[l];
        d !== "." && K(t, s + l, n + a, 1, 1, e[cz[d]]);
      }
    }
  }
  function zu(t, e, s, n, r, i, o) {
    K(t, s, n, ee, ee, e["wall-1"]);
    for (let a = 0; a < 4; a++) {
      const c = a * 4;
      K(t, s, n + c + 3, ee, 1, e["wall-2"]);
      const l = a % 2 === 0 ? 0 : 4;
      for (let d = l; d < ee; d += 8) K(t, s + d, n + c, 1, 3, e["wall-2"]);
      for (let d = l + 1; d < ee; d += 8) K(t, s + d, n + c, 6, 1, e["wall-3"]);
      ne(r, i, o.seed, 160 + a) < 0.4 && K(t, s + Math.floor(ne(r, i, o.seed, 170 + a) * 12) + 2, n + c + 1, 2, 1, e["wall-2"]);
    }
  }
  function pz(t, e, s, n, r, i, o, a) {
    if (zu(t, e, s, n, r, i, o), K(t, s + 2, n + 2, 12, 14, e.ink), a) K(t, s + 3, n + 3, 10, 13, e["sky-3"]), K(t, s + 4, n + 5, 8, 11, e["sky-4"]), K(t, s + 5, n + 8, 6, 8, e.glow), K(t, s + 6, n + 11, 4, 5, e.moon), o.frame === 1 ? K(t, s + 7, n + 6, 1, 1, e.gold) : K(t, s + 9, n + 7, 1, 1, e.gold);
    else {
      K(t, s + 3, n + 3, 10, 13, e.gate);
      for (let c = 5; c < 13; c += 3) K(t, s + c, n + 3, 1, 13, e["gate-dark"]);
      K(t, s + 3, n + 6, 10, 1, e.ink), K(t, s + 3, n + 12, 10, 1, e.ink), K(t, s + 7, n + 9, 2, 2, e.gold), K(t, s + 3, n + 2, 1, 1, e["wall-1"]), K(t, s + 12, n + 2, 1, 1, e["wall-1"]);
    }
  }
  function fz(t, e, s, n, r, i, o, a, c) {
    if (c === "B") {
      K(t, n, r, ee, ee, e["wall-2"]), K(t, n + 1, r + 1, 14, 14, e["wall-1"]), K(t, n + 2, r + 2, 12, 1, e["wall-3"]);
      for (const [l, d] of [[7, 3], [8, 3], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [10, 9], [6, 11], [9, 11], [7, 12], [8, 12]]) K(t, n + l, r + d, 1, 1, e["red-dark"]);
      return;
    }
    $u(t, e, s, n, r, i, o, a);
    for (const [l, d] of [[7, 4], [8, 4], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [6, 10], [9, 10], [10, 9], [7, 11], [8, 11]]) K(t, n + l, r + d, 1, 1, e["gold-dark"]);
  }
  function mz(t, e, s, n, r, i, o, a) {
    var _a3, _b3;
    const c = (_b3 = (_a3 = s[r]) == null ? void 0 : _a3[n]) != null ? _b3 : "#", l = n * ee, d = r * ee;
    if (a == null ? void 0 : a.tiles) {
      const h = c === "." || c === "@" ? 0 : c === "," || c === "N" || c === "B" ? 1 : c === "~" ? 2 + i.frame : c === "T" ? 4 : c === "#" ? 5 : o ? 7 : 6;
      t.imageSmoothingEnabled = false, t.drawImage(a.tiles, h * ee, 0, ee, ee, l, d, ee, ee);
      return;
    }
    switch (c) {
      case "#":
        return zu(t, e, l, d, n, r, i);
      case "T":
        return hz(t, e, l, d, n, r, i);
      case "~":
        return uz(t, e, s, l, d, n, r, i);
      case ",":
      case "@":
        return $u(t, e, s, l, d, n, r, i);
      case "N":
      case "B":
        return fz(t, e, s, l, d, n, r, i, c);
      case "G":
        return pz(t, e, l, d, n, r, i, o);
      default:
        return Su(t, e, l, d, n, r, i);
    }
  }
  const _u = (t) => ({ w: Math.max(1, ...t.map((e) => e.length)) * ee, h: Math.max(1, t.length) * ee });
  function ju(t, e) {
    const s = document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
  function gz(t, e, s, n, r, i) {
    var _a3, _b3;
    const { w: o, h: a } = _u(t), c = ju(o, a), l = c.getContext("2d");
    l.imageSmoothingEnabled = false;
    for (let d = 0; d < t.length; d++) for (let h = 0; h < ((_b3 = (_a3 = t[d]) == null ? void 0 : _a3.length) != null ? _b3 : 0); h++) mz(l, e, t, h, d, { seed: s, frame: n }, r, i);
    return c;
  }
  const kz = (t) => t.kind === "boss" ? Xn : t.kind === "foe" ? Us[(t.n - 1) % Us.length] : t.kind === "giver" ? bu : vu;
  class bz {
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
      this.o = e, this.logical = _u(e.area.rows), this.canvas = ju(this.logical.w, this.logical.h), this.canvas.className = "rpg-canvas", this.ctx = this.canvas.getContext("2d"), this.resize(2), e.reduced || (this.timer = window.setInterval(() => this.tick(), 650));
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
      return (this.layerGate !== e || this.layers.length === 0) && (this.layers = [0, 1].map((s) => gz(this.o.area.rows, this.o.pal, this.o.seed, s, e, this.o.skin)), this.layerGate = e), this.layers[this.o.reduced ? 0 : this.frame];
    }
    draw() {
      var _a3;
      const e = this.scene, s = this.ctx, n = this.scale;
      if (s.setTransform(n, 0, 0, n, 0, 0), s.imageSmoothingEnabled = false, s.drawImage(this.layer((_a3 = e == null ? void 0 : e.gateOpen) != null ? _a3 : false), 0, 0), !e) return;
      const r = this.o.pal, i = this.o.skin, o = [];
      for (const a of e.entities) {
        const c = (a.kind === "foe" || a.kind === "boss") && this.frame === 1 && !this.o.reduced ? -1 : 0;
        o.push({ y: a.at[1], paint: () => {
          const l = a.at[0] * ee, d = a.at[1] * ee;
          s.globalAlpha = 0.35, K(s, l + 3, d + 13, 10, 2, r.ink), s.globalAlpha = 1;
          const h = a.kind === "boss" ? i == null ? void 0 : i.sprites.boss : a.kind === "foe" ? i == null ? void 0 : i.sprites.foe : a.kind === "giver" || a.kind === "npc" ? i == null ? void 0 : i.sprites.npc : void 0;
          h ? s.drawImage(h, l, d + c, ee, ee) : $t(s, kz(a), r, l, d + c), a.mark && $t(s, rz, r, l, d - 11 + (this.frame === 1 && !this.o.reduced ? -1 : 0));
        } });
      }
      o.push({ y: e.hero[1], paint: () => {
        const a = e.hero[0] * ee, c = e.hero[1] * ee;
        s.globalAlpha = 0.35, K(s, a + 3, c + 13, 10, 2, r.ink), s.globalAlpha = 1;
        const l = i == null ? void 0 : i.sprites.hero;
        l ? s.drawImage(l, a, c - e.step, ee, ee) : $t(s, Qn, r, a, c - e.step, 1, e.face === "left");
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
  const dt = 160, xu = 64;
  function vz(t, e, s) {
    ["sky-1", "sky-2", "sky-3", "sky-4", "sky-5"].forEach((r, i) => K(t, 0, i * 8, dt, 8, e[r]));
    for (let r = 0; r < 26; r++) K(t, Math.floor(ne(r, 1, s, 3) * dt), Math.floor(ne(r, 2, s, 3) * 26), 1, 1, e.white);
    K(t, 128, 6, 8, 8, e.moon), K(t, 130, 5, 4, 10, e.moon), K(t, 126, 8, 12, 4, e.moon);
    for (let r = 0; r < dt; r++) {
      const i = 36 - Math.round(5 + 4 * Math.sin((r + s) / 14) + 3 * Math.sin((r + s) / 5));
      K(t, r, i, 1, 48 - i, e["hill-2"]);
      const o = 40 - Math.round(3 + 3 * Math.sin((r + s * 2) / 9 + 1));
      K(t, r, o, 1, 48 - o, e["hill-1"]);
    }
    for (let r = 40; r < xu; r++) {
      const i = Math.floor((r - 40) / 4) % 2 === 0;
      K(t, 0, r, dt, 1, e[i ? "grass-1" : "grass-2"]);
    }
    for (let r = 0; r < dt; r += 5) K(t, r + Math.floor(ne(r, 5, s, 9) * 3), 42 + Math.floor(ne(r, 6, s, 9) * 20), 1, 1, e["grass-3"]);
    K(t, 0, 58, dt, 2, e["path-1"]), K(t, 0, 58, dt, 1, e["path-3"]);
  }
  function wz(t, e, s, n, r) {
    const i = t.getContext("2d"), o = Math.max(1, Math.round(t.width / dt));
    i.setTransform(o, 0, 0, o, 0, 0), i.imageSmoothingEnabled = false, vz(i, e, n);
    const a = (d, h) => {
      i.globalAlpha = 0.4, K(i, d, 57, h, 3, e.ink), i.globalAlpha = 1;
    };
    a(20, 50), a(92, 54), s.boss && !s.down && (i.globalAlpha = 0.16, K(i, 96, 10, 46, 50, e.gold), i.globalAlpha = 1);
    const c = r == null ? void 0 : r.sprites.hero;
    s.heroDown ? (i.globalAlpha = 0.6, i.save(), i.translate(70, 30), i.rotate(Math.PI / 2), c ? i.drawImage(c, 0, 0, 48, 48) : $t(i, Qn, e, 0, 0, 3), i.restore(), i.globalAlpha = 1) : c ? i.drawImage(c, 22, 12, 48, 48) : $t(i, Qn, e, 22, 12, 3);
    const l = s.boss ? r == null ? void 0 : r.sprites.boss : r == null ? void 0 : r.sprites.foe;
    s.down ? (i.globalAlpha = 0.5, l ? i.drawImage(l, 94, 30, 48, 30) : $t(i, s.foe, e, 94, 28, 3), i.globalAlpha = 1) : l ? i.drawImage(l, 94, 10, 48, 48) : $t(i, s.foe, e, 94, 10, 3);
  }
  function yz(t, e, s, n) {
    const r = t.getContext("2d"), i = Math.max(1, Math.round(t.width / Math.max(1, ...s.map((a) => a.length))));
    r.imageSmoothingEnabled = false;
    const o = (a) => a === "#" ? e["wall-1"] : a === "T" ? e["leaf-2"] : a === "~" ? e["water-1"] : a === "," || a === "@" || a === "N" ? e["path-1"] : a === "B" ? e["wall-3"] : a === "G" ? e.gold : e["grass-1"];
    s.forEach((a, c) => [...a].forEach((l, d) => K(r, d * i, c * i, i, i, o(l))));
    for (const a of n) K(r, a.at[0] * i, a.at[1] * i, i, i, a.kind === "giver" ? e.gold : a.kind === "boss" ? e.purple : e.red);
  }
  const Eu = (t) => ({ pos: t.start, face: "right", accepted: false, foesDown: [], bossDown: false, scores: [], counted: [], done: false }), Sz = (t, e) => ({ ...Eu(t), accepted: e.accepted }), $z = "goto-boss";
  function Lt(t, e) {
    const s = t.npcs.map((n) => ({ id: n.id, kind: "npc", at: n.at, giver: n.quest, goto: "goto-".concat(n.id) }));
    for (const n of t.foes) e.foesDown.includes(n.id) || s.push({ id: n.id, kind: "foe", at: n.at, giver: false, goto: "goto-".concat(n.id) });
    return e.bossDown || s.push({ id: t.boss.id, kind: "boss", at: t.boss.at, giver: false, goto: $z }), s;
  }
  const zz = (t, e) => new Set(Lt(t, e).map((s) => Ce(s.at)));
  function er(t, e) {
    return e.done ? "done" : e.accepted ? t.foes.every((s) => e.foesDown.includes(s.id)) ? "boss" : "foes" : "talk";
  }
  const eo = (t, e) => [t[0] + In[e][0], t[1] + In[e][1]];
  function _z(t, e, s, n) {
    const r = eo(e.pos, s), i = Lt(t, e).find((a) => ot(a.at, r));
    if (i) return { kind: "bump", person: i };
    const o = Qt(t.rows, r);
    return o === "G" && n ? { kind: "gate" } : Es(o, n) ? { kind: "move", pos: r } : { kind: "blocked" };
  }
  function Bs(t, e) {
    const s = e[0] - t[0], n = e[1] - t[1];
    return Math.abs(s) >= Math.abs(n) ? s >= 0 ? "right" : "left" : n >= 0 ? "down" : "up";
  }
  function tr(t, e) {
    const s = eo(e.pos, e.face), n = (r) => ot(r.at, s) ? 0 : r.giver ? 1 : r.kind === "foe" ? 2 : r.kind === "boss" ? 3 : 4;
    return Lt(t, e).filter((r) => oi(r.at, e.pos)).sort((r, i) => n(r) - n(i));
  }
  function sr(t, e) {
    const s = Lt(t, e).map((n) => ({ testid: n.goto, id: n.id, kind: n.giver ? "giver" : n.kind, at: n.at }));
    return t.gate && s.push({ testid: "goto-gate", id: "gate", kind: "gate", at: t.gate }), s;
  }
  function to(t, e, s, n) {
    const r = sr(t, e).find((o) => o.testid === s || o.id === s);
    if (!r) return null;
    const i = zz(t, e);
    return r.kind === "gate" ? n ? Il(t.rows, e.pos, (o) => ot(o, r.at), { blocked: i, gateOpen: n }) : Ml(t.rows, e.pos, r.at, { blocked: i }) : Ml(t.rows, e.pos, r.at, { blocked: i, gateOpen: n });
  }
  function Au(t, e, s) {
    var _a3;
    const n = er(t, e), r = Lt(t, e), i = (o, a, c) => {
      var _a4;
      const l = to(t, e, c, s), d = r.find((h) => h.goto === c);
      return { kind: o, id: a, testid: c, adjacent: !!d && oi(d.at, e.pos), steps: (_a4 = l == null ? void 0 : l.length) != null ? _a4 : -1 };
    };
    if (n === "talk") {
      const o = (_a3 = r.find((a) => a.giver)) != null ? _a3 : r.find((a) => a.kind === "npc");
      if (o) return i("giver", o.id, o.goto);
    }
    if (n === "foes") {
      const o = t.foes.map((a) => r.find((c) => c.id === a.id)).find((a) => a !== void 0);
      if (o) return i("foe", o.id, o.goto);
    }
    if (n === "boss" || n === "talk" && !r.some((o) => o.kind === "npc")) {
      const o = r.find((a) => a.kind === "boss");
      if (o) return i("boss", o.id, o.goto);
    }
    return t.gate ? i("gate", "gate", "goto-gate") : { kind: "leave", id: "areas", adjacent: false, steps: 0 };
  }
  const Tu = (t) => t.length === 0 ? 0 : t.reduce((e, s) => e + s, 0) / t.length, jz = { en: { "rpg.tagline": "A pixel quest through what you are learning", "rpg.title.art": "A pixel landscape: night sky, hills, a castle and a small hero", "rpg.hero.default": "Hero", "rpg.intro.title": "The story", "rpg.story.next": "Next", "rpg.story.begin": "Begin the quest", "rpg.story.skip": "Skip the story", "rpg.story.count": "Page {n} of {total}", "rpg.auto.intro.1": "A quiet land lies under a night sky, and its roads are blocked by foes made of muddled ideas.", "rpg.auto.intro.2": "You are {hero}, a young adventurer. Every right answer is a strike, and every fact you learn goes into your pack as a scroll.", "rpg.auto.intro.3": "Visit each area, speak with its sage and beat the foes. Then the gates will open.", "rpg.auto.outro.1": "The last foe falls and the muddle clears. Everything you learned is now yours to keep.", "rpg.areas.title": "The world map", "rpg.areas.intro": "Pick a place. Each area is a quest that teaches one unit.", "rpg.area.enter": "Enter", "rpg.area.locked": "Locked: master {units} first.", "rpg.area.quest": "Quest", "rpg.final.title": "The final battle", "rpg.final.ready": "The last foe mixes every unit. Answer well.", "rpg.final.locked": "Master every area (2 stars) to face the last foe.", "rpg.final.go": "Face the last foe", "rpg.auto.final": "The Grand Muddle", "rpg.to.title": "Back to the title", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Map of {area}", "rpg.where": "You are in {area}, at column {x}, row {y}.", "rpg.near": "Next to you: {names}.", "rpg.near.none": "Nobody is next to you.", "rpg.side.left": "left", "rpg.side.right": "right", "rpg.side.up": "above", "rpg.side.down": "below", "rpg.pad": "Walk", "rpg.move.up": "Up", "rpg.move.down": "Down", "rpg.move.left": "Left", "rpg.move.right": "Right", "rpg.talk": "Talk", "rpg.fight": "Fight", "rpg.talk.none": "Nobody is next to you. Walk up to someone first.", "rpg.keys": "Arrow keys or WASD walk, Enter talks.", "rpg.targets": "Walk to", "rpg.goto": "Walk to {name}", "rpg.goto.gate": "Walk to the gate", "rpg.inventory": "Scrolls ({n})", "rpg.to.areas": "World map", "rpg.quest.title": "Quest log", "rpg.quest.talk": "Talk to {name}", "rpg.quest.foes": "Beat the foes ({done} of {total})", "rpg.quest.boss": "Defeat {name}", "rpg.quest.gate": "Open the gate (2 stars)", "rpg.quest.done": "done", "rpg.quest.todo": "to do", "rpg.msg.need.giver": "Speak with {name} first: the quest has to begin.", "rpg.msg.need.foes": "Beat the other foes first ({n} left).", "rpg.msg.gate.shut": "The gate is shut. Finish the quest with 2 stars to open it.", "rpg.msg.noway": "There is no way there.", "rpg.msg.won": "You beat {name}!", "rpg.msg.inn": "You fainted and woke up at the inn with full HP. {name} is still waiting; the quest goes on.", "rpg.msg.fled": "You ran away. {name} is still waiting.", "rpg.msg.accepted": "Quest accepted: {area}.", "rpg.msg.walking": "Walking...", "rpg.dialogue.next": "Continue", "rpg.dialogue.bye": "Goodbye", "rpg.dialogue.later": "Not now", "rpg.dialogue.count": "Line {n} of {total}", "rpg.quest.accept": "Accept the quest", "rpg.portrait": "Portrait of {name}", "rpg.auto.sage": "The Sage", "rpg.auto.sage.1": 'Welcome, {hero}. This is the land of "{unit}".', "rpg.auto.sage.2": "Foes made of muddled ideas roam here: {n} of them, and {boss} guards the gate. Every right answer is a strike.", "rpg.auto.sage.3": "Beat them all with what you know, and the gate will open. Good luck!", "rpg.sage.hint": "Beat the foes ({n} left), then face {boss}.", "rpg.sage.boss": "Only {boss} is left. Face it!", "rpg.sage.done": "Well fought! The gate is open.", "rpg.sage.retry": "The gate needs 2 stars. Try the quest again and answer right the first time.", "rpg.auto.foe.1": "Fog Slime", "rpg.auto.foe.2": "Doubt Bat", "rpg.auto.foe.3": "Myth Imp", "rpg.auto.foe.4": "Rumour Ghost", "rpg.auto.boss": 'Guardian of "{unit}"', "rpg.battle.appears": "{name} blocks the way!", "rpg.battle.boss": "A boss: its strikes are harder.", "rpg.battle.hint": "Every question is a move. A right answer strikes the foe; a wrong one lets it hit back. Answers right in a row make your strikes stronger.", "rpg.battle.start": "Fight!", "rpg.battle.flee": "Run away", "rpg.battle.turn": "Turn {n}: answer to strike {name}.", "rpg.battle.hero": "You", "rpg.battle.foe.hp": "{name}: HP {hp} of {max}", "rpg.battle.hero.hp": "You: HP {hp} of {max}", "rpg.battle.streak": "Streak {n} (strike x{m})", "rpg.fx.strike": "You strike {name} for {n}!", "rpg.fx.strike.streak": "You strike {name} for {n}! (streak x{m})", "rpg.fx.hit": "{name} hits you for {n}.", "rpg.fx.both": "You hit {name} for {n}, and it hits back for {m}.", "rpg.fx.scroll": "A new scroll is in your pack.", "rpg.fx.fall": "{name} falls!", "rpg.fx.faint": "You faint...", "rpg.next.turn": "Next turn", "rpg.next.win": "Victory!", "rpg.next.faint": "Wake up at the inn", "rpg.inv.title": "Scrolls of knowledge", "rpg.inv.intro": "Every fact you earned with a right answer in battle.", "rpg.inv.empty": "No scrolls yet. Each right answer in battle adds one.", "rpg.inv.back": "Back", "rpg.inv.from": "From: {unit}", "rpg.qd.title": "Quest complete!", "rpg.qd.accuracy": "{n}% right the first time", "rpg.qd.gate.open": "The gate is open: walk through it to go on.", "rpg.qd.gate.shut": "The gate stays shut: you need 2 stars. Replay the quest.", "rpg.qd.unlocked": "New area: {units}", "rpg.qd.replay": "Replay the quest", "rpg.qd.world": "Back to the map", "rpg.outro.title": "The end of the quest", "rpg.end.sub": "Every area is mastered and the last foe has fallen.", "rpg.end.scrolls": "Scrolls collected: {n}", "rpg.story.end": "The end", "rpg.msg.rest": "You rest and win back {n} HP.", "rpg.battle.alt": "{hero} faces {foe} on a grassy field under a night sky.", "rpg.mini.alt": "Small map of {area}", "rpg.final.finish": "See the ending", "rpg.final.beaten": "The last foe is beaten.", "rpg.area.mastered": "Mastered", "rpg.story.alt": "Portrait of {name}", "rpg.quest.replay.hint": "Replay the quest to earn more stars." }, hr: { "rpg.tagline": "Pikselna pustolovina kroz ono što učiš", "rpg.title.art": "Pikselni krajolik: noćno nebo, brežuljci, dvorac i mali junak", "rpg.hero.default": "Junak", "rpg.intro.title": "Priča", "rpg.story.next": "Dalje", "rpg.story.begin": "Započni pustolovinu", "rpg.story.skip": "Preskoči priču", "rpg.story.count": "Stranica {n} od {total}", "rpg.auto.intro.1": "Mirna zemlja leži pod noćnim nebom, a putove joj zatvaraju neprijatelji sazdani od pomiješanih ideja.", "rpg.auto.intro.2": "Ti si {hero}, mladi pustolov. Svaki točan odgovor je udarac, a svaka činjenica koju naučiš ide u torbu kao svitak.", "rpg.auto.intro.3": "Posjeti svako područje, razgovaraj s mudracem i pobijedi neprijatelje. Tada će se vrata otvoriti.", "rpg.auto.outro.1": "Posljednji neprijatelj pada i zbrka se razbistrila. Sve što si naučio sada je tvoje.", "rpg.areas.title": "Karta svijeta", "rpg.areas.intro": "Odaberi mjesto. Svako područje je zadatak koji uči jednu cjelinu.", "rpg.area.enter": "Uđi", "rpg.area.locked": "Zaključano: prvo savladaj {units}.", "rpg.area.quest": "Zadatak", "rpg.final.title": "Završna bitka", "rpg.final.ready": "Posljednji neprijatelj miješa sve cjeline. Odgovaraj pažljivo.", "rpg.final.locked": "Savladaj svako područje (2 zvjezdice) da bi se suočio s posljednjim neprijateljem.", "rpg.final.go": "Suoči se s posljednjim neprijateljem", "rpg.auto.final": "Veliki Zbrkanac", "rpg.to.title": "Natrag na naslovnicu", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Karta područja: {area}", "rpg.where": "Nalaziš se u području {area}, u stupcu {x}, retku {y}.", "rpg.near": "Pokraj tebe: {names}.", "rpg.near.none": "Pokraj tebe nema nikoga.", "rpg.side.left": "lijevo", "rpg.side.right": "desno", "rpg.side.up": "iznad", "rpg.side.down": "ispod", "rpg.pad": "Hodaj", "rpg.move.up": "Gore", "rpg.move.down": "Dolje", "rpg.move.left": "Lijevo", "rpg.move.right": "Desno", "rpg.talk": "Razgovaraj", "rpg.fight": "Bori se", "rpg.talk.none": "Pokraj tebe nema nikoga. Prvo priđi nekome.", "rpg.keys": "Strelice ili WASD za hodanje, Enter za razgovor.", "rpg.targets": "Idi do", "rpg.goto": "Idi do: {name}", "rpg.goto.gate": "Idi do vrata", "rpg.inventory": "Svici ({n})", "rpg.to.areas": "Karta svijeta", "rpg.quest.title": "Dnevnik zadatka", "rpg.quest.talk": "Razgovaraj s: {name}", "rpg.quest.foes": "Pobijedi neprijatelje ({done} od {total})", "rpg.quest.boss": "Pobijedi: {name}", "rpg.quest.gate": "Otvori vrata (2 zvjezdice)", "rpg.quest.done": "gotovo", "rpg.quest.todo": "preostaje", "rpg.msg.need.giver": "Prvo razgovaraj s: {name}. Zadatak mora početi.", "rpg.msg.need.foes": "Prvo pobijedi ostale neprijatelje (još {n}).", "rpg.msg.gate.shut": "Vrata su zatvorena. Završi zadatak s 2 zvjezdice da ih otvoriš.", "rpg.msg.noway": "Tamo nema puta.", "rpg.msg.won": "Pobijedio si: {name}!", "rpg.msg.inn": "Onesvijestio si se i probudio u gostionici s punim HP-om. {name} te još čeka; zadatak se nastavlja.", "rpg.msg.fled": "Pobjegao si. {name} te još čeka.", "rpg.msg.accepted": "Zadatak prihvaćen: {area}.", "rpg.msg.walking": "Hodam...", "rpg.dialogue.next": "Nastavi", "rpg.dialogue.bye": "Doviđenja", "rpg.dialogue.later": "Ne sada", "rpg.dialogue.count": "Redak {n} od {total}", "rpg.quest.accept": "Prihvati zadatak", "rpg.portrait": "Portret: {name}", "rpg.auto.sage": "Mudrac", "rpg.auto.sage.1": 'Dobro došao, {hero}. Ovo je zemlja cjeline "{unit}".', "rpg.auto.sage.2": "Ovdje lutaju neprijatelji sazdani od pomiješanih ideja: njih {n}, a vrata čuva {boss}. Svaki točan odgovor je udarac.", "rpg.auto.sage.3": "Pobijedi ih svojim znanjem i vrata će se otvoriti. Sretno!", "rpg.sage.hint": "Pobijedi neprijatelje (još {n}), a zatim se suoči s: {boss}.", "rpg.sage.boss": "Ostao je samo {boss}. Suoči se s njim!", "rpg.sage.done": "Dobro si se borio! Vrata su otvorena.", "rpg.sage.retry": "Za vrata trebaju 2 zvjezdice. Ponovi zadatak i odgovori točno iz prvog pokušaja.", "rpg.auto.foe.1": "Magleni Sluz", "rpg.auto.foe.2": "Šišmiš Sumnje", "rpg.auto.foe.3": "Vragolan Mita", "rpg.auto.foe.4": "Duh Glasina", "rpg.auto.boss": 'Čuvar cjeline "{unit}"', "rpg.battle.appears": "{name} ti zatvara put!", "rpg.battle.boss": "Šef: njegovi su udarci jači.", "rpg.battle.hint": "Svako pitanje je potez. Točan odgovor udara neprijatelja, a netočan mu dopušta da uzvrati. Uzastopni točni odgovori jačaju tvoje udarce.", "rpg.battle.start": "U borbu!", "rpg.battle.flee": "Pobjegni", "rpg.battle.turn": "Potez {n}: odgovori i udari: {name}.", "rpg.battle.hero": "Ti", "rpg.battle.foe.hp": "{name}: HP {hp} od {max}", "rpg.battle.hero.hp": "Ti: HP {hp} od {max}", "rpg.battle.streak": "Niz {n} (udarac x{m})", "rpg.fx.strike": "Udaraš: {name}, šteta {n}!", "rpg.fx.strike.streak": "Udaraš: {name}, šteta {n}! (niz x{m})", "rpg.fx.hit": "{name} te udara, šteta {n}.", "rpg.fx.both": "Pogađaš: {name}, šteta {n}, a on uzvraća štetom {m}.", "rpg.fx.scroll": "Novi svitak je u tvojoj torbi.", "rpg.fx.fall": "{name} pada!", "rpg.fx.faint": "Onesvijestio si se...", "rpg.next.turn": "Sljedeći potez", "rpg.next.win": "Pobjeda!", "rpg.next.faint": "Probudi se u gostionici", "rpg.inv.title": "Svici znanja", "rpg.inv.intro": "Svaka činjenica koju si zaradio točnim odgovorom u borbi.", "rpg.inv.empty": "Još nema svitaka. Svaki točan odgovor u borbi dodaje jedan.", "rpg.inv.back": "Natrag", "rpg.inv.from": "Iz cjeline: {unit}", "rpg.qd.title": "Zadatak je gotov!", "rpg.qd.accuracy": "{n}% točno iz prvog pokušaja", "rpg.qd.gate.open": "Vrata su otvorena: prođi kroz njih da nastaviš.", "rpg.qd.gate.shut": "Vrata ostaju zatvorena: trebaju ti 2 zvjezdice. Ponovi zadatak.", "rpg.qd.unlocked": "Novo područje: {units}", "rpg.qd.replay": "Ponovi zadatak", "rpg.qd.world": "Natrag na kartu", "rpg.outro.title": "Kraj pustolovine", "rpg.end.sub": "Svako je područje savladano i posljednji je neprijatelj pao.", "rpg.end.scrolls": "Skupljeni svici: {n}", "rpg.story.end": "Kraj", "rpg.msg.rest": "Odmaraš i vraćaš {n} HP.", "rpg.battle.alt": "{hero} se suočava s neprijateljem {foe} na travnatom polju pod noćnim nebom.", "rpg.mini.alt": "Mala karta područja: {area}", "rpg.final.finish": "Pogledaj završetak", "rpg.final.beaten": "Posljednji neprijatelj je pobijeđen.", "rpg.area.mastered": "Savladano", "rpg.story.alt": "Portret: {name}", "rpg.quest.replay.hint": "Ponovi zadatak da zaradiš više zvjezdica." }, de: { "rpg.tagline": "Ein Pixel-Abenteuer durch das, was du lernst", "rpg.title.art": "Eine Pixel-Landschaft: Nachthimmel, Hügel, ein Schloss und ein kleiner Held", "rpg.hero.default": "Held", "rpg.intro.title": "Die Geschichte", "rpg.story.next": "Weiter", "rpg.story.begin": "Das Abenteuer beginnen", "rpg.story.skip": "Die Geschichte überspringen", "rpg.story.count": "Seite {n} von {total}", "rpg.auto.intro.1": "Ein stilles Land liegt unter einem Nachthimmel, und seine Wege werden von Feinden aus wirren Gedanken versperrt.", "rpg.auto.intro.2": "Du bist {hero}, ein junger Abenteurer. Jede richtige Antwort ist ein Schlag, und jede Tatsache, die du lernst, wandert als Schriftrolle in deinen Rucksack.", "rpg.auto.intro.3": "Besuche jedes Gebiet, sprich mit seinem Weisen und besiege die Feinde. Dann öffnen sich die Tore.", "rpg.auto.outro.1": "Der letzte Feind fällt und das Durcheinander lichtet sich. Alles, was du gelernt hast, gehört nun dir.", "rpg.areas.title": "Die Weltkarte", "rpg.areas.intro": "Wähle einen Ort. Jedes Gebiet ist ein Abenteuer, das eine Einheit lehrt.", "rpg.area.enter": "Betreten", "rpg.area.locked": "Gesperrt: Meistere zuerst {units}.", "rpg.area.quest": "Abenteuer", "rpg.final.title": "Der letzte Kampf", "rpg.final.ready": "Der letzte Feind mischt alle Einheiten. Antworte gut.", "rpg.final.locked": "Meistere jedes Gebiet (2 Sterne), um dich dem letzten Feind zu stellen.", "rpg.final.go": "Dem letzten Feind gegenübertreten", "rpg.auto.final": "Das Große Durcheinander", "rpg.to.title": "Zurück zum Titel", "rpg.hp": "LP {hp} / {max}", "rpg.map.label": "Karte von {area}", "rpg.where": "Du bist in {area}, in Spalte {x}, Zeile {y}.", "rpg.near": "Neben dir: {names}.", "rpg.near.none": "Niemand ist neben dir.", "rpg.side.left": "links", "rpg.side.right": "rechts", "rpg.side.up": "oben", "rpg.side.down": "unten", "rpg.pad": "Gehen", "rpg.move.up": "Hoch", "rpg.move.down": "Runter", "rpg.move.left": "Links", "rpg.move.right": "Rechts", "rpg.talk": "Sprechen", "rpg.fight": "Kämpfen", "rpg.talk.none": "Niemand ist neben dir. Geh zuerst zu jemandem hin.", "rpg.keys": "Pfeiltasten oder WASD zum Gehen, Enter zum Sprechen.", "rpg.targets": "Gehe zu", "rpg.goto": "Zu {name} gehen", "rpg.goto.gate": "Zum Tor gehen", "rpg.inventory": "Schriftrollen ({n})", "rpg.to.areas": "Weltkarte", "rpg.quest.title": "Questbuch", "rpg.quest.talk": "Sprich mit {name}", "rpg.quest.foes": "Besiege die Feinde ({done} von {total})", "rpg.quest.boss": "Besiege {name}", "rpg.quest.gate": "Öffne das Tor (2 Sterne)", "rpg.quest.done": "erledigt", "rpg.quest.todo": "offen", "rpg.msg.need.giver": "Sprich zuerst mit {name}: Das Abenteuer muss beginnen.", "rpg.msg.need.foes": "Besiege zuerst die anderen Feinde (noch {n}).", "rpg.msg.gate.shut": "Das Tor ist zu. Schließe das Abenteuer mit 2 Sternen ab, um es zu öffnen.", "rpg.msg.noway": "Dorthin führt kein Weg.", "rpg.msg.won": "Du hast {name} besiegt!", "rpg.msg.inn": "Du bist ohnmächtig geworden und im Gasthaus mit voller LP aufgewacht. {name} wartet noch; das Abenteuer geht weiter.", "rpg.msg.fled": "Du bist weggelaufen. {name} wartet noch.", "rpg.msg.accepted": "Auftrag angenommen: {area}.", "rpg.msg.walking": "Unterwegs …", "rpg.dialogue.next": "Weiter", "rpg.dialogue.bye": "Auf Wiedersehen", "rpg.dialogue.later": "Jetzt nicht", "rpg.dialogue.count": "Zeile {n} von {total}", "rpg.quest.accept": "Den Auftrag annehmen", "rpg.portrait": "Porträt von {name}", "rpg.auto.sage": "Der Weise", "rpg.auto.sage.1": "Willkommen, {hero}. Dies ist das Land von „{unit}“.", "rpg.auto.sage.2": "Hier streifen Feinde aus wirren Gedanken umher: {n} an der Zahl, und {boss} bewacht das Tor. Jede richtige Antwort ist ein Schlag.", "rpg.auto.sage.3": "Besiege sie alle mit dem, was du weißt, und das Tor öffnet sich. Viel Glück!", "rpg.sage.hint": "Besiege die Feinde (noch {n}), dann stelle dich {boss}.", "rpg.sage.boss": "Nur noch {boss} ist übrig. Stelle dich ihm!", "rpg.sage.done": "Gut gekämpft! Das Tor ist offen.", "rpg.sage.retry": "Das Tor braucht 2 Sterne. Versuche das Abenteuer noch einmal und antworte gleich beim ersten Mal richtig.", "rpg.auto.foe.1": "Nebelschleim", "rpg.auto.foe.2": "Zweifelfledermaus", "rpg.auto.foe.3": "Mythenwichtel", "rpg.auto.foe.4": "Gerüchtegeist", "rpg.auto.boss": "Wächter von „{unit}“", "rpg.battle.appears": "{name} versperrt den Weg!", "rpg.battle.boss": "Ein Endgegner: Seine Schläge sind härter.", "rpg.battle.hint": "Jede Frage ist ein Zug. Eine richtige Antwort trifft den Feind; eine falsche lässt ihn zurückschlagen. Mehrere richtige Antworten hintereinander machen deine Schläge stärker.", "rpg.battle.start": "Kämpfen!", "rpg.battle.flee": "Weglaufen", "rpg.battle.turn": "Runde {n}: Antworte, um {name} zu treffen.", "rpg.battle.hero": "Du", "rpg.battle.foe.hp": "{name}: LP {hp} von {max}", "rpg.battle.hero.hp": "Du: LP {hp} von {max}", "rpg.battle.streak": "Serie {n} (Schlag x{m})", "rpg.fx.strike": "Du triffst {name} mit {n}!", "rpg.fx.strike.streak": "Du triffst {name} mit {n}! (Serie x{m})", "rpg.fx.hit": "{name} trifft dich mit {n}.", "rpg.fx.both": "Du triffst {name} mit {n}, und er schlägt mit {m} zurück.", "rpg.fx.scroll": "Eine neue Schriftrolle ist in deinem Rucksack.", "rpg.fx.fall": "{name} fällt!", "rpg.fx.faint": "Du wirst ohnmächtig …", "rpg.next.turn": "Nächste Runde", "rpg.next.win": "Sieg!", "rpg.next.faint": "Im Gasthaus aufwachen", "rpg.inv.title": "Schriftrollen des Wissens", "rpg.inv.intro": "Jede Tatsache, die du mit einer richtigen Antwort im Kampf verdient hast.", "rpg.inv.empty": "Noch keine Schriftrollen. Jede richtige Antwort im Kampf bringt eine.", "rpg.inv.back": "Zurück", "rpg.inv.from": "Aus: {unit}", "rpg.qd.title": "Abenteuer geschafft!", "rpg.qd.accuracy": "{n} % gleich beim ersten Mal richtig", "rpg.qd.gate.open": "Das Tor ist offen: Geh hindurch, um weiterzukommen.", "rpg.qd.gate.shut": "Das Tor bleibt zu: Du brauchst 2 Sterne. Spiele das Abenteuer noch einmal.", "rpg.qd.unlocked": "Neues Gebiet: {units}", "rpg.qd.replay": "Das Abenteuer noch einmal spielen", "rpg.qd.world": "Zurück zur Karte", "rpg.outro.title": "Das Ende des Abenteuers", "rpg.end.sub": "Jedes Gebiet ist gemeistert und der letzte Feind ist gefallen.", "rpg.end.scrolls": "Gesammelte Schriftrollen: {n}", "rpg.story.end": "Ende", "rpg.msg.rest": "Du ruhst dich aus und gewinnst {n} LP zurück.", "rpg.battle.alt": "{hero} steht {foe} auf einer Wiese unter einem Nachthimmel gegenüber.", "rpg.mini.alt": "Kleine Karte von {area}", "rpg.final.finish": "Das Ende ansehen", "rpg.final.beaten": "Der letzte Feind ist besiegt.", "rpg.area.mastered": "Gemeistert", "rpg.story.alt": "Porträt von {name}", "rpg.quest.replay.hint": "Spiele das Abenteuer noch einmal, um mehr Sterne zu verdienen." } };
  function so(t, e, s, n, r) {
    const i = u("span", { class: "hp-fill ".concat(n === "foe" ? "is-foe" : "") }), o = u("span", { class: "hp-text" }), a = u("div", { class: "hp-line", testid: r }, o, u("span", { class: "hp-bar", "aria-hidden": "true" }, i)), c = (l, d) => {
      o.textContent = t(l, d);
      const h = sz(l, d);
      i.style.width = "".concat(h, "%"), i.classList.toggle("is-low", h <= 30 && n === "hero"), a.setAttribute("data-hp", String(l)), a.setAttribute("data-max", String(d));
    };
    return c(e, s), { el: a, set: c };
  }
  const xz = (t) => Number.isInteger(t) ? String(t) : t.toFixed(2).replace(/0$/, "");
  function Ez(t) {
    const e = u("canvas", { class: "rpg-canvas rpg-battle-canvas", width: dt * 3, height: xu * 3, role: "img", "aria-label": t.words.alt, testid: "battle-scene" }), s = so(t.words.heroLine, t.battle.hp, t.battle.maxHp, "hero", "hero-hp"), n = so(t.words.foeLine, t.battle.foeHp, t.battle.foeMax, "foe", "foe-hp"), r = u("p", { class: "rpg-streak", testid: "streak" }), i = u("div", { class: "rpg-scene-view" }, e), o = u("div", { class: "rpg-scene" }, u("div", { class: "rpg-scene-bars" }, u("div", { class: "rpg-panel" }, u("span", { class: "rpg-who" }, t.words.hero), s.el), u("div", { class: "rpg-panel" }, u("span", { class: "rpg-who" }, t.words.foeName), n.el)), i, r), a = (d, h) => wz(e, t.pal, { foe: t.foe, boss: t.boss, down: d, heroDown: h }, t.seed, t.skin), c = (d, h) => {
      const p = u("span", { class: "rpg-pop ".concat(h), "aria-hidden": "true" }, d);
      i.appendChild(p), window.setTimeout(() => p.remove(), 1300);
    }, l = (d, h) => {
      var _a3, _b3;
      s.set(d.hp, d.maxHp), n.set(d.foeHp, d.foeMax);
      const p = Xi(d.streak);
      r.textContent = t.words.streakLine(d.streak, xz(p)), r.classList.toggle("is-hot", d.streak > 0), o.setAttribute("data-streak", String(d.streak)), a((_a3 = h == null ? void 0 : h.foeDown) != null ? _a3 : false, (_b3 = h == null ? void 0 : h.heroDown) != null ? _b3 : false), h && (h.dealt > 0 && c("-".concat(h.dealt), "is-foe"), h.taken > 0 && (c("-".concat(h.taken), "is-hero"), Is(i, "is-hit", 500)));
    };
    return l(t.battle), { el: o, update: l };
  }
  function Iu(t) {
    if (t.image) return u("img", { class: "rpg-portrait", src: t.image.url, alt: t.image.alt, testid: "portrait" });
    const e = u("canvas", { class: "rpg-portrait", width: 16, height: 16, role: "img", "aria-label": t.alt, testid: "portrait" }), s = e.getContext("2d");
    return s && (s.imageSmoothingEnabled = false, $t(s, t.sprite, t.pal, 0, 0)), e;
  }
  const Mu = "rpg", Az = "pixel", Ou = 40, Tz = 70, Nu = (t) => {
    let e = 2166136261;
    for (let s = 0; s < t.length; s++) e = Math.imul(e ^ t.charCodeAt(s), 16777619);
    return e >>> 0;
  }, Iz = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", W: "up", s: "down", S: "down", a: "left", A: "left", d: "right", D: "right" };
  class Mz {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "layout");
      __publicField(this, "titleState", ts());
      __publicField(this, "progress", /* @__PURE__ */ new Map());
      __publicField(this, "palette", null);
      __publicField(this, "skin", az());
      __publicField(this, "scrolls", []);
      __publicField(this, "hp", Te);
      __publicField(this, "w", null);
      __publicField(this, "message", "");
      __publicField(this, "event", "");
      __publicField(this, "reduced", typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      this.host = e, this.session = new Ds(e, { shellId: Mu, theme: Az, strings: jz }), this.layout = Zl(this.session.pack, this.session.section()), this.loadScrolls();
    }
    get s() {
      return this.session.s;
    }
    get pal() {
      var _a3;
      return (_a3 = this.palette) != null ? _a3 : this.palette = oz(this.host.root), this.palette;
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
      const n = e.foes.find((r) => r.id === s);
      return n ? n.nameKey ? this.session.t(n.nameKey) : this.s("rpg.auto.foe.".concat((n.n - 1) % 4 + 1)) : s;
    }
    bossName(e) {
      return e.boss.nameKey ? this.session.t(e.boss.nameKey) : this.s("rpg.auto.boss", { unit: this.session.unitTitle(e.unitId) });
    }
    npcName(e, s) {
      const n = e.npcs.find((r) => r.id === s);
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
      return s || (s = Eu(e), this.progress.set(e.id, s)), s;
    }
    assetOf(e) {
      if (!e) return null;
      const s = this.session.data.assets[e], n = this.session.pack.assets.find((r) => r.id === e);
      return s && n ? { url: s, alt: this.session.t(n.alt) } : null;
    }
    async loadSkin() {
      const e = this.session, s = (l) => l ? e.data.assets[l] : void 0, [n, r, i, o, a] = await Promise.all([Fs(s(this.layout.tileset)), Fs(s(this.layout.sprites.hero)), Fs(s(this.layout.sprites.npc)), Fs(s(this.layout.sprites.foe)), Fs(s(this.layout.sprites.boss))]), c = { sprites: {} };
      n && (c.tiles = n), r && (c.sprites.hero = r), i && (c.sprites.npc = i), o && (c.sprites.foe = o), a && (c.sprites.boss = a), this.skin = c;
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
      const r = this.gateOpen(e);
      return { area: e.id, areaIndex: this.layout.areas.indexOf(e), unit: e.unitId, size: [Math.max(...e.rows.map((i) => i.length)), e.rows.length], pos: [s.pos[0], s.pos[1]], face: s.face, hp: this.hp, maxHp: Te, stage: er(e, s), accepted: s.accepted, done: s.done, gateOpen: r, foesLeft: e.foes.filter((i) => !s.foesDown.includes(i.id)).map((i) => i.id), foesDown: [...s.foesDown], bossDown: s.bossDown, nearby: tr(e, s).map((i) => i.id), targets: sr(e, s).map((i) => i.testid), walking: n, scrolls: this.scrolls.length, event: this.event, goal: Au(e, s, r) };
    }
    currentView() {
      const e = this.w;
      return e ? this.worldView(e.area, e.p, e.walking) : null;
    }
    debugGoal() {
      const e = this.w;
      return e ? { ...Au(e.area, e.p, this.gateOpen(e.area)) } : null;
    }
    debugPath(e) {
      var _a3;
      const s = this.w;
      if (!s) return null;
      const n = to(s.area, s.p, e, this.gateOpen(s.area));
      return { id: e, found: n !== null, steps: (_a3 = n == null ? void 0 : n.length) != null ? _a3 : -1, path: (n != null ? n : []).map((r) => [r[0], r[1]]) };
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
      e.finished = false, this.event = "", this.show("title", Ls(e, { onStart: () => this.hasPlayed() ? this.areas() : this.story("intro", 0) }, () => this.title(), this.titleState));
    }
    hasPlayed() {
      const e = this.session.sp;
      return Object.keys(e.units).length > 0 || e.boss.stars > 0 || this.scrolls.length > 0;
    }
    story(e, s) {
      var _a3;
      const n = this.s, r = e === "intro" ? this.introLines() : this.outroLines(), i = Math.max(0, Math.min(s, r.length - 1)), o = i >= r.length - 1, a = () => e === "intro" ? this.areas() : this.end(), c = this.heroName(), l = u("section", { class: "rpg-story" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "story-title" }, n(e === "intro" ? "rpg.intro.title" : "rpg.outro.title")), u("div", { class: "rpg-speaker" }, Iu({ sprite: Qn, pal: this.pal, image: this.assetOf(this.layout.sprites.hero), alt: n("rpg.story.alt", { name: c }) }), u("div", { class: "rpg-textbox", testid: "story-text" }, u("p", {}, (_a3 = r[i]) != null ? _a3 : ""), u("span", { class: "rpg-count" }, n("rpg.story.count", { n: i + 1, total: r.length })))), u("div", { class: "rpg-actions" }, o ? I("story-next", n(e === "intro" ? "rpg.story.begin" : "rpg.story.end"), a, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : I("story-next", n("rpg.story.next"), () => this.story(e, i + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o ? null : I("story-skip", n("rpg.story.skip"), a, { class: "btn btn-ghost" })));
      this.show(e, l, { view: { page: i, total: r.length, last: o } });
    }
    areas() {
      const e = this.session, s = this.s, n = e.allMastered(), r = this.takeMessage(), i = (l) => {
        var _a3, _b3;
        const d = !e.isUnlocked(l.unitId), h = e.unitStars(l.unitId), p = e.isMastered(l.unitId), f = ((_b3 = (_a3 = e.pack.units.find((k) => k.id === l.unitId)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((k) => !e.isMastered(k)).map((k) => e.unitTitle(k)), m = u("canvas", { class: "rpg-mini", width: 192, height: Math.round(192 * l.rows.length / Math.max(...l.rows.map((k) => k.length))), role: "img", "aria-label": s("rpg.mini.alt", { area: this.areaName(l) }) });
        yz(m, this.pal, l.rows, [...l.npcs.map((k) => ({ at: k.at, kind: "giver" })), ...l.foes.map((k) => ({ at: k.at, kind: "foe" })), { at: l.boss.at, kind: "boss" }]);
        const g = I("area-".concat(l.id), [m, u("span", { class: "rpg-area-title" }, this.areaName(l)), u("span", { class: "rpg-area-unit" }, e.unitTitle(l.unitId)), d ? u("span", { class: "rpg-area-need" }, s("rpg.area.locked", { units: f.join(", ") })) : p ? u("span", { class: "rpg-area-need" }, s("rpg.area.mastered")) : u("span", { class: "rpg-area-need" }, s("rpg.area.quest")), e.stars(h)], () => this.enterArea(l), { class: "rpg-area-card".concat(d ? " is-locked" : "").concat(p ? " is-mastered" : ""), "data-stars": String(h), "data-locked": String(d), "data-unit": l.unitId, ...d ? { disabled: true } : {} });
        return u("li", {}, g);
      }, o = e.bossStars() >= 1, a = u("div", { class: "rpg-panel rpg-final" }, u("h2", {}, s("rpg.final.title")), u("p", {}, s(n ? "rpg.final.ready" : "rpg.final.locked")), e.stars(e.bossStars(), "final-stars"), u("div", { class: "rpg-actions" }, I("final-boss", s("rpg.final.go"), () => this.finalIntro(), { class: "btn btn-primary", "data-stars": String(e.bossStars()), "data-locked": String(!n), ...n ? {} : { disabled: true } }), o ? I("finish", s("rpg.final.finish"), () => this.story("outro", 0), { class: "btn" }) : null)), c = u("section", { class: "rpg-areas" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "areas-title" }, s("rpg.areas.title")), u("p", { class: "subject" }, s("rpg.areas.intro")), r ? u("p", { class: "rpg-note rpg-message", role: "status", testid: "message" }, r) : null, u("ul", { class: "rpg-area-list", testid: "area-list" }, this.layout.areas.map(i)), a, u("div", { class: "rpg-actions" }, I("inventory", s("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.areas()), { class: "btn" }), I("to-title", s("rpg.to.title"), () => this.title(), { class: "btn btn-ghost" })));
      this.show("areas", c, { view: { areas: this.layout.areas.map((l) => ({ id: l.id, unit: l.unitId, locked: !e.isUnlocked(l.unitId), stars: e.unitStars(l.unitId) })), finalOpen: n, crowned: o, scrolls: this.scrolls.length, event: this.event } });
    }
    enterArea(e) {
      this.hp = Te, this.event = "entered", this.world(e);
    }
    surroundingsText(e, s) {
      const n = this.s, r = n("rpg.where", { area: this.areaName(e), x: s.pos[0] + 1, y: s.pos[1] + 1 }), i = tr(e, s);
      if (i.length === 0) return "".concat(r, " ").concat(n("rpg.near.none"));
      const o = (a) => {
        const c = Bs(s.pos, a.at);
        return n("rpg.side.".concat(c));
      };
      return "".concat(r, " ").concat(n("rpg.near", { names: i.map((a) => "".concat(this.personName(e, a), " (").concat(o(a), ")")).join(", ") }));
    }
    sceneOf(e) {
      const { area: s, p: n } = e, r = Lt(s, n).map((i) => {
        var _a3, _b3;
        return i.kind === "npc" ? { at: i.at, kind: i.giver ? "giver" : "npc", n: 1, ...i.giver && !n.accepted ? { mark: true } : {} } : i.kind === "foe" ? { at: i.at, kind: "foe", n: (_b3 = (_a3 = s.foes.find((o) => o.id === i.id)) == null ? void 0 : _a3.n) != null ? _b3 : 1 } : { at: i.at, kind: "boss", n: 1 };
      });
      return { hero: n.pos, face: n.face, step: e.step, entities: r, gateOpen: this.gateOpen(s) };
    }
    world(e) {
      const s = this.session, n = this.s, r = this.progressOf(e);
      this.leaveWorld();
      const i = this.gateOpen(e), o = this.giverOf(e), a = so((z, _) => n("rpg.hp", { hp: z, max: _ }), this.hp, Te, "hero", "hero-hp"), c = u("div", { class: "rpg-canvas-host" }), l = u("p", { class: "rpg-surroundings", "aria-live": "polite", testid: "surroundings" }, this.surroundingsText(e, r)), d = u("p", { class: "rpg-message", testid: "message" }, this.takeMessage()), h = I("talk", n("rpg.talk"), () => this.talk(), { class: "pad-btn pad-talk", "aria-disabled": "true" }), p = (z, _) => I("move-".concat(z), _, () => this.move(z), { class: "pad-btn pad-".concat(z), "aria-label": n("rpg.move.".concat(z)) }), f = u("div", { class: "rpg-panel" }, u("h2", {}, n("rpg.pad")), u("div", { class: "rpg-pad", role: "group", "aria-label": n("rpg.pad") }, p("up", "▲"), p("left", "◀"), h, p("right", "▶"), p("down", "▼")), u("p", { class: "rpg-keys" }, n("rpg.keys"))), m = sr(e, r), g = (z) => {
        const _ = Lt(e, r).find((R) => R.goto === z.testid), O = z.kind === "gate" ? n("rpg.goto.gate") : n("rpg.goto", { name: _ ? this.personName(e, _) : z.id });
        return u("li", {}, I(z.testid, O, () => this.gotoTarget(z.testid), { class: "btn btn-small", "data-kind": z.kind }));
      }, k = u("div", { class: "rpg-panel" }, u("h2", {}, n("rpg.targets")), u("ul", { class: "rpg-targets", testid: "targets" }, m.map(g))), b = e.foes.filter((z) => r.foesDown.includes(z.id)).length, v = (z, _, O) => u("li", { class: O ? "is-done" : "", testid: "quest-".concat(z), "data-done": String(O) }, u("span", { class: "tick", "aria-hidden": "true" }, O ? "✔" : "○"), u("span", {}, _), u("span", { class: "sr-only" }, O ? " (".concat(n("rpg.quest.done"), ")") : " (".concat(n("rpg.quest.todo"), ")"))), w = u("div", { class: "rpg-panel rpg-quest", testid: "quest-log" }, u("h2", {}, n("rpg.quest.title")), u("ol", {}, v("talk", n("rpg.quest.talk", { name: o ? this.npcName(e, o.id) : "" }), r.accepted), e.foes.length > 0 ? v("foes", n("rpg.quest.foes", { done: b, total: e.foes.length }), b === e.foes.length && r.accepted) : null, v("boss", n("rpg.quest.boss", { name: this.bossName(e) }), r.bossDown), e.gate ? v("gate", n("rpg.quest.gate"), i) : null)), y = u("section", { class: "rpg-world" }, u("header", { class: "rpg-hud" }, u("h1", { class: "screen-title rpg-area-name", tabindex: "-1", testid: "area-name" }, this.areaName(e)), u("div", { class: "rpg-hud-tools" }, a.el, I("inventory", n("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.world(e)), { class: "btn btn-small" }), I("to-areas", n("rpg.to.areas"), () => this.areas(), { class: "btn btn-small" }))), u("div", { class: "rpg-stage" }, u("div", { class: "rpg-view" }, c, l, u("div", { class: "rpg-note" }, d), w), u("aside", { class: "rpg-side" }, f, k)));
      this.session.render("world", y, { unitId: e.unitId, view: this.worldView(e, r, false) });
      const $ = new bz({ area: e, pal: this.pal, seed: Nu("".concat(s.pack.id, ":").concat(e.id)) % 997, reduced: this.reduced, skin: this.skin });
      $.canvas.setAttribute("role", "img"), $.canvas.setAttribute("aria-label", n("rpg.map.label", { area: this.areaName(e) })), $.canvas.setAttribute("data-testid", "world-canvas"), c.appendChild($.canvas);
      const x = { area: e, p: r, canvas: $, surroundings: l, message: d, talk: h, hp: a, walking: false, step: 0, timer: 0 };
      this.w = x, $.fit(c), this.refresh();
    }
    refresh() {
      const e = this.w;
      if (!e) return;
      const { area: s, p: n } = e;
      e.canvas.setScene(this.sceneOf(e)), e.surroundings.textContent = this.surroundingsText(s, n);
      const r = tr(s, n)[0];
      e.talk.textContent = r && r.kind !== "npc" ? this.s("rpg.fight") : this.s("rpg.talk"), e.talk.setAttribute("aria-disabled", String(!r)), e.hp.set(this.hp, Te), this.session.publish("world", { unitId: s.unitId, view: this.worldView(s, n, e.walking) });
    }
    say(e, s = "") {
      const n = this.w;
      this.event = s, n && (n.message.textContent = e), this.session.live(e), this.refresh();
    }
    onKey(e) {
      if (!this.w || this.session.screen !== "world" || e.ctrlKey || e.metaKey || e.altKey || Ts(e.target)) return;
      const n = Iz[e.key];
      if (n) {
        e.preventDefault(), this.move(n);
        return;
      }
      if (e.key === "Enter") {
        const r = e.target;
        if (r && (r.tagName === "BUTTON" || r.tagName === "A")) return;
        e.preventDefault(), this.talk();
      }
    }
    move(e) {
      const s = this.w;
      if (!s || s.walking) return;
      const { area: n, p: r } = s;
      r.face = e;
      const i = _z(n, r, e, this.gateOpen(n));
      i.kind === "move" ? (r.pos = i.pos, s.step = s.step === 0 ? 1 : 0, this.event = "moved", this.refresh()) : i.kind === "bump" ? this.interact(i.person) : i.kind === "gate" ? this.areas() : Qt(n.rows, eo(r.pos, e)) === "G" ? this.say(this.s("rpg.msg.gate.shut"), "gate-shut") : this.refresh();
    }
    talk() {
      const e = this.w;
      if (!e || e.walking) return;
      const s = tr(e.area, e.p)[0];
      if (!s) return this.say(this.s("rpg.talk.none"), "nobody");
      e.p.face = Bs(e.p.pos, s.at), this.interact(s);
    }
    interact(e) {
      const s = this.w;
      if (!s) return;
      const { area: n, p: r } = s;
      if (e.kind === "npc") return this.dialogue(n, e.id, 0);
      const i = this.giverOf(n);
      if (er(n, r) === "talk" && i) return this.say(this.s("rpg.msg.need.giver", { name: this.npcName(n, i.id) }), "need-giver");
      const o = n.foes.filter((a) => !r.foesDown.includes(a.id)).length;
      if (e.kind === "boss" && o > 0) return this.say(this.s("rpg.msg.need.foes", { n: o }), "need-foes");
      this.startBattle(n, e);
    }
    gotoTarget(e) {
      const s = this.w;
      if (!s || s.walking) return;
      const { area: n, p: r } = s, i = this.gateOpen(n), o = to(n, r, e, i);
      if (!o) return this.say(this.s("rpg.msg.noway"), "noway");
      const a = sr(n, r).find((d) => d.testid === e), c = () => {
        if (s.walking = false, a && (r.face = Bs(r.pos, a.at)), (a == null ? void 0 : a.kind) === "gate" && i && n.gate && r.pos[0] === n.gate[0] && r.pos[1] === n.gate[1]) return this.areas();
        this.say("", "arrived");
      };
      if (o.length === 0) return c();
      if (s.walking = true, this.reduced) {
        for (let d = 0; d < o.length; d++) {
          const h = o[d];
          r.face = Bs(r.pos, h), r.pos = h;
        }
        return c();
      }
      this.event = "walking", this.refresh();
      const l = (d) => {
        if (this.w !== s) return;
        const h = o[d];
        r.face = Bs(r.pos, h), r.pos = h, s.step = s.step === 0 ? 1 : 0, this.refresh(), d + 1 < o.length ? s.timer = window.setTimeout(() => l(d + 1), Tz) : c();
      };
      l(0);
    }
    dialogueLines(e, s) {
      var _a3;
      const n = this.s, r = this.progressOf(e), i = this.session, o = er(e, r), a = this.bossName(e), c = e.foes.filter((h) => !r.foesDown.includes(h.id)).length, l = s.quest ? o === "foes" ? n("rpg.sage.hint", { n: c, boss: a }) : o === "boss" ? n("rpg.sage.boss", { boss: a }) : o === "done" ? this.gateOpen(e) ? n("rpg.sage.done") : n("rpg.sage.retry") : null : null;
      if (s.lines.length === 0) {
        const h = [n("rpg.auto.sage.1", { hero: this.heroName(), unit: i.unitTitle(e.unitId) }), n("rpg.auto.sage.2", { n: e.foes.length, boss: a }), n("rpg.auto.sage.3")];
        return o === "talk" ? h : [(_a3 = l != null ? l : h[0]) != null ? _a3 : ""];
      }
      const d = s.lines.map((h) => i.t(h));
      return l ? [...d, l] : d;
    }
    dialogue(e, s, n) {
      var _a3, _b3;
      const r = this.session, i = this.s, o = e.npcs.find((w) => w.id === s);
      if (!o) return this.world(e);
      const a = this.progressOf(e), c = this.dialogueLines(e, o), l = Math.max(0, Math.min(n, c.length - 1)), d = l >= c.length - 1, h = this.npcName(e, o.id), p = o.quest && !a.accepted, f = o.quest && a.done && r.unitStars(e.unitId) < 3, m = () => {
        a.accepted = true, this.message = i("rpg.msg.accepted", { area: this.areaName(e) }), this.event = "accepted", this.world(e);
      }, g = () => this.replay(e), k = () => {
        this.event = "talked", this.world(e);
      }, b = o.quest ? bu : vu, v = u("section", { class: "rpg-dialogue" }, u("h1", { class: "screen-title rpg-name", tabindex: "-1", testid: "dialogue-name" }, h), u("div", { class: "rpg-speaker" }, Iu({ sprite: b, pal: this.pal, image: this.assetOf((_a3 = o.portrait) != null ? _a3 : this.layout.sprites.npc), alt: i("rpg.portrait", { name: h }) }), u("div", { class: "rpg-textbox", testid: "dialogue-text" }, u("p", {}, (_b3 = c[l]) != null ? _b3 : ""), u("span", { class: "rpg-count" }, i("rpg.dialogue.count", { n: l + 1, total: c.length })))), u("div", { class: "rpg-actions" }, d ? [p ? I("accept-quest", i("rpg.quest.accept"), m, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, f ? I("replay-quest", i("rpg.qd.replay"), g, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, I("dialogue-bye", i(p ? "rpg.dialogue.later" : "rpg.dialogue.bye"), k, { class: p || f ? "btn btn-big" : "btn btn-primary btn-big", ...p || f ? {} : { "data-autofocus": "" } })] : I("dialogue-next", i("rpg.dialogue.next"), () => this.dialogue(e, s, l + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      this.show("dialogue", v, { unitId: e.unitId, view: { npc: o.id, giver: o.quest, line: l, total: c.length, last: d, offer: p, replay: f } });
    }
    itemsFor(e, s) {
      const n = this.session, r = e.filter((o) => n.canAsk(n.item(o)));
      if (r.length > 0) return r;
      const i = s ? li(n.pack, s.unitId).filter((o) => n.canAsk(n.item(o))) : [];
      return i.length > 0 ? i : n.pack.items.map((o) => o.id).filter((o) => n.canAsk(n.item(o)));
    }
    newFight(e) {
      var _a3, _b3;
      const s = this.session, n = e.kind === "foe" ? Qi : V$, r = this.itemsFor(e.items, e.area), i = (_a3 = e.area) == null ? void 0 : _a3.unitId;
      return { id: e.id, kind: e.kind, area: e.area, name: e.name, sprite: e.sprite, items: r, size: (_b3 = e.size) != null ? _b3 : r.length, battle: ez(e.hp, n, this.hp, Te), run: s.startRun(r, { kind: e.kind === "final" ? "boss" : "unit", ...i ? { unitId: i } : {}, ...e.size ? { size: e.size } : {} }), scoring: true, counts: e.counts, scores: [], last: null, newScroll: false };
    }
    startBattle(e, s) {
      const n = this.progressOf(e), r = s.kind === "foe" ? (() => {
        var _a3, _b3, _c2, _d2, _e2;
        const i = e.foes.find((o) => o.id === s.id);
        return this.newFight({ id: s.id, kind: "foe", area: e, name: this.foeName(e, s.id), sprite: (_c2 = (_b3 = Us[(((_a3 = i == null ? void 0 : i.n) != null ? _a3 : 1) - 1) % Us.length]) != null ? _b3 : Us[0]) != null ? _c2 : Xn, items: (_d2 = i == null ? void 0 : i.items) != null ? _d2 : [], hp: (_e2 = i == null ? void 0 : i.hp) != null ? _e2 : 200, counts: !n.counted.includes(s.id) });
      })() : this.newFight({ id: s.id, kind: "boss", area: e, name: this.bossName(e), sprite: Xn, items: li(this.session.pack, e.unitId), hp: e.boss.hp, counts: !n.counted.includes(s.id) });
      this.battleIntro(r);
    }
    sceneFor(e) {
      const s = this.s, n = this.heroName();
      return Ez({ words: { hero: n, foeName: e.name, foeLine: (r, i) => s("rpg.hp", { hp: r, max: i }), heroLine: (r, i) => s("rpg.hp", { hp: r, max: i }), streakLine: (r, i) => s("rpg.battle.streak", { n: r, m: i }), alt: s("rpg.battle.alt", { hero: n, foe: e.name }) }, pal: this.pal, seed: Nu("".concat(this.session.pack.id, ":").concat(e.id)) % 997, skin: this.skin, foe: e.sprite, boss: e.kind !== "foe", battle: e.battle });
    }
    fightView(e, s) {
      var _a3, _b3;
      return { phase: s, fight: e.id, kind: e.kind, foe: e.name, foeHp: e.battle.foeHp, foeMax: e.battle.foeMax, hp: e.battle.hp, maxHp: e.battle.maxHp, streak: e.battle.streak, turn: e.battle.turns, area: (_b3 = (_a3 = e.area) == null ? void 0 : _a3.id) != null ? _b3 : null };
    }
    battleIntro(e) {
      const s = this.s, n = this.sceneFor(e), r = e.kind === "final", i = u("section", { class: "rpg-battle" }, u("h1", { class: "screen-title rpg-name", tabindex: "-1", testid: "battle-title" }, e.name), u("p", { class: "subject", testid: "battle-appears" }, r ? s("rpg.final.ready") : s("rpg.battle.appears", { name: e.name })), n.el, u("div", { class: "rpg-textbox" }, u("p", {}, s("rpg.battle.hint")), e.kind !== "foe" ? u("p", {}, s("rpg.battle.boss")) : null), u("div", { class: "rpg-actions" }, I("battle-start", s("rpg.battle.start"), () => this.fightStep(e), { class: "btn btn-primary btn-big", "data-autofocus": "" }), I("battle-flee", s("rpg.battle.flee"), () => this.flee(e), { class: "btn btn-big" })));
      this.show(r ? "boss" : "battle", i, { ...e.area ? { unitId: e.area.unitId } : {}, view: this.fightView(e, "intro") });
    }
    fightStep(e) {
      const s = this.session, n = this.s;
      let r = s.next(e.run);
      r || (e.run = s.startRun(e.items, { kind: e.kind === "final" ? "boss" : "unit", ...e.area ? { unitId: e.area.unitId } : {}, ...e.kind === "final" ? { size: e.size } : {} }), e.scoring = false, r = s.next(e.run));
      const i = r ? s.item(r.id) : void 0;
      if (!r || !s.canAsk(i)) return this.won(e);
      const o = r, a = this.sceneFor(e);
      e.newScroll = false, lt(s, { item: i, context: e.kind === "foe" ? "battle" : "boss", retry: o.retry, hud: a.el, lead: u("span", {}, n("rpg.battle.turn", { n: e.battle.turns + 1, name: e.name })), ...e.area ? { unitId: e.area.unitId } : {}, roundKind: e.kind === "final" ? "boss" : "unit", roundSize: e.run.size, index: e.run.results.length, view: () => this.fightView(e, "turn"), leaveLabel: n("rpg.battle.flee"), onLeave: () => this.flee(e), onAnswered: (c) => {
        e.run = s.record(e.run, o, c), e.scoring && !o.retry && e.scores.push(c.result.score);
        const l = tz(e.battle, { correct: c.result.correct, score: c.result.score });
        e.battle = l.battle, e.last = l, this.hp = l.battle.hp, c.result.correct && this.addScroll(i.id) && (e.newScroll = true), a.update(l.battle, { dealt: l.dealt, taken: l.taken, foeDown: l.won, heroDown: l.fainted });
      }, effect: (c) => {
        const l = e.last;
        if (!l) return null;
        const d = l.multiplier > 1 ? n("rpg.fx.strike.streak", { name: e.name, n: l.dealt, m: Number.isInteger(l.multiplier) ? l.multiplier : l.multiplier.toFixed(2).replace(/0$/, "") }) : n("rpg.fx.strike", { name: e.name, n: l.dealt }), h = e.newScroll ? " ".concat(n("rpg.fx.scroll")) : "";
        return l.won ? { text: "".concat(d, " ").concat(n("rpg.fx.fall", { name: e.name })).concat(h), tone: "good" } : c.result.correct ? { text: "".concat(d).concat(h), tone: "good" } : l.fainted ? { text: "".concat(n("rpg.fx.hit", { name: e.name, n: l.taken }), " ").concat(n("rpg.fx.faint")), tone: "bad" } : l.dealt > 0 ? { text: n("rpg.fx.both", { name: e.name, n: l.dealt, m: l.taken }), tone: "bad" } : { text: n("rpg.fx.hit", { name: e.name, n: l.taken }), tone: "bad" };
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
      const r = e.area, i = this.progressOf(r);
      if (e.kind === "foe") {
        i.foesDown.includes(e.id) || i.foesDown.push(e.id);
        const c = Math.min(Ou, Te - this.hp);
        return this.hp = Math.min(Te, this.hp + Ou), this.event = "won", this.message = "".concat(n("rpg.msg.won", { name: e.name })).concat(c > 0 ? " ".concat(n("rpg.msg.rest", { n: c })) : ""), this.world(r);
      }
      i.bossDown = true, i.done = true;
      const o = i.scores.length > 0 ? Tu(i.scores) : 1, a = s.recordUnit({ unitId: r.unitId }, o);
      s.playCue("unit-complete"), this.event = "quest-done", this.questDone(r, a.stars, o, a.unlocked);
    }
    replay(e) {
      const s = this.progressOf(e);
      this.progress.set(e.id, Sz(e, s)), this.hp = Te, this.event = "replay", this.world(e);
    }
    questDone(e, s, n, r) {
      const i = this.session, o = this.s, a = Math.round(n * 100), c = i.isMastered(e.unitId), l = this.layout.areas.filter((h) => r.includes(h.unitId)).map((h) => this.areaName(h)), d = u("section", { class: "rpg-done" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "quest-title" }, o("rpg.qd.title")), u("p", { class: "subject" }, this.areaName(e)), i.stars(s, "quest-stars"), u("p", { class: "big-number", testid: "quest-accuracy" }, o("rpg.qd.accuracy", { n: a })), u("p", { class: "message ".concat(c ? "message-ok" : "message-bad"), testid: "quest-gate" }, o(c ? "rpg.qd.gate.open" : "rpg.qd.gate.shut")), l.length > 0 ? u("p", { class: "message", testid: "quest-unlocked" }, o("rpg.qd.unlocked", { units: l.join(", ") })) : null, s < 3 ? u("p", { class: "subject" }, o("rpg.quest.replay.hint")) : null, u("div", { class: "rpg-actions" }, I("to-world", o("rpg.qd.world"), () => this.world(e), { class: c ? "btn btn-primary btn-big" : "btn btn-big", ...c ? { "data-autofocus": "" } : {} }), s < 3 ? I("replay-quest", o("rpg.qd.replay"), () => this.replay(e), { class: c ? "btn btn-big" : "btn btn-primary btn-big", ...c ? {} : { "data-autofocus": "" } }) : null, I("to-areas", o("rpg.to.areas"), () => this.areas(), { class: "btn btn-big" })));
      this.show("quest-done", d, { unitId: e.unitId, view: { area: e.id, unit: e.unitId, stars: s, accuracy: a, mastered: c, gateOpen: c, unlocked: r } });
    }
    finalIntro() {
      const e = this.session;
      this.hp = Te;
      const s = e.pack.items.map((r) => r.id), n = this.newFight({ id: "final", kind: "final", area: null, name: this.finalName(), sprite: Xn, items: s, hp: this.layout.finalBoss.hp, size: Math.min(this.layout.finalBoss.size, Math.max(1, s.length)), counts: true });
      this.battleIntro(n);
    }
    finalWon(e) {
      const s = this.session, n = e.scores.length > 0 ? Tu(e.scores) : 1;
      s.recordUnit({ boss: true }, n), s.playCue("boss"), this.event = "final-won", this.message = this.s("rpg.final.beaten"), this.story("outro", 0);
    }
    inventory(e) {
      const s = this.session, n = this.s, r = (o) => {
        const a = s.pack.objectives.find((c) => {
          var _a3;
          return c.id === ((_a3 = s.item(o)) == null ? void 0 : _a3.objective);
        });
        return s.unitTitle(a == null ? void 0 : a.unit);
      }, i = u("section", { class: "rpg-inventory" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "inventory-title" }, n("rpg.inv.title")), u("p", { class: "subject" }, this.scrolls.length === 0 ? n("rpg.inv.empty") : n("rpg.inv.intro")), u("ul", { class: "rpg-scrolls", testid: "scrolls" }, this.scrolls.map((o) => u("li", { class: "rpg-scroll", testid: "scroll-".concat(o) }, u("span", {}, this.scrollText(o)), u("span", { class: "scroll-from" }, n("rpg.inv.from", { unit: r(o) }))))), u("div", { class: "rpg-actions" }, I("inventory-back", n("rpg.inv.back"), e, { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      this.show("inventory", i, { view: { scrolls: [...this.scrolls] } });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.show("end", Cs(e, { title: s("rpg.outro.title"), sub: s("rpg.end.sub"), stats: u("p", { class: "subject", testid: "end-scrolls" }, s("rpg.end.scrolls", { n: this.scrolls.length })), onAgain: () => this.areas(), onTitle: () => this.title() }), { view: { scrolls: this.scrolls.length, areas: this.layout.areas.length, crowned: e.bossStars() >= 1 } });
    }
  }
  const Pu = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Mu, mount(e) {
      t = new Mz(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })();
  document.addEventListener("error", (t) => {
    const e = t.target;
    (e instanceof HTMLImageElement || e instanceof HTMLMediaElement || e instanceof SVGImageElement) && console.error("media failed to load: ".concat(e.currentSrc || e.getAttribute("src") || e.getAttribute("href") || "(no source)"));
  }, true);
  const Je = F0();
  for (const t of X0) Je.registerItemKind(t.kind, t);
  Je.registerShell(au.id, au), Je.registerShell(Xd.id, Xd), Je.registerShell(iu.id, iu), Je.registerShell(Pu.id, Pu), Je.registerShell(gu.id, gu), Je.registerShell(Kd.id, Kd), window.EduEngine = Je, Cu(), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => Je.start()) : Je.start();
})();

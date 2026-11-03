var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  var _a2, _b2;
  const Tu = ["leave", "back", "battle-flee", "to-map", "to-office"];
  function Iu(t) {
    var _a3, _b3;
    return (_b3 = (_a3 = t.Capacitor) == null ? void 0 : _a3.Plugins) == null ? void 0 : _b3.App;
  }
  function Mu(t = document) {
    for (const e of Tu) {
      const s = t.querySelector('[data-testid="'.concat(e, '"]'));
      if (!(!s || s.disabled || s.getAttribute("aria-hidden") === "true")) return s.click(), true;
    }
    return false;
  }
  function Ou(t = window) {
    const e = Iu(t);
    if (!e || typeof e.addListener != "function") return false;
    try {
      return e.addListener("backButton", () => {
        Mu(t.document) || typeof e.exitApp == "function" && e.exitApp();
      }), true;
    } catch (e2) {
      return false;
    }
  }
  const Nu = "edu-game", eo = "edu-root", Bs = "quiz-arena";
  function tr(t) {
    const e = Object.values(t).filter((n) => typeof n == "number");
    return Object.entries(t).filter(([n, r]) => e.indexOf(+n) === -1).map(([n, r]) => r);
  }
  function to(t, e = "|") {
    return t.map((s) => ao(s)).join(e);
  }
  function sr(t, e) {
    return typeof e == "bigint" ? e.toString() : e;
  }
  class Pu {
    constructor(e) {
      this._getter = e, this._value = void 0;
    }
    get value() {
      const e = this._getter;
      return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
    }
  }
  function Ks(t) {
    return new Pu(t);
  }
  function Ru(t) {
    return t == null;
  }
  function nr(t) {
    const e = t.startsWith("^") ? 1 : 0, s = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(e, s);
  }
  function Du(t, e) {
    const s = t / e, n = Math.round(s), r = 4 * Number.EPSILON * Math.max(Math.abs(s), 1);
    return Math.abs(s - n) < r ? 0 : s - n;
  }
  const so = /* @__PURE__ */ Symbol("evaluating");
  function Lu(t, e, s) {
    let n;
    Object.defineProperty(t, e, { get() {
      if (n !== so) return n === void 0 && (n = so, n = s()), n;
    }, set(r) {
      Object.defineProperty(t, e, { value: r });
    }, configurable: true });
  }
  function Qe(t, e, s) {
    Object.defineProperty(t, e, { value: s, writable: true, enumerable: true, configurable: true });
  }
  function rr(t) {
    const e = Object.getOwnPropertyDescriptor(t, "shape");
    return (e == null ? void 0 : e.get) ? e.get.raw : e == null ? void 0 : e.value;
  }
  function Xe(t) {
    var _a3;
    return (_a3 = rr(t._zod.def)) != null ? _a3 : t._zod.def.shape;
  }
  function no(t, e, s) {
    Object.defineProperty(t, e, { get() {
      const n = s();
      return Qe(this, e, n), n;
    }, enumerable: true, configurable: true });
  }
  function ro(t, e, s) {
    e in t ? Qe(t, e, s) : t[e] = s;
  }
  function _t(t, e, s, n) {
    const r = Xe(e);
    for (const i of s) {
      const o = Object.getOwnPropertyDescriptor(r, i);
      o.enumerable && (o.get ? no(t, i, () => {
        const a = e._zod.def.shape[i];
        return n ? n(a, i) : a;
      }) : ro(t, i, n ? n(o.value, i) : o.value));
    }
  }
  function Cu(t, e) {
    for (const s of Reflect.ownKeys(e)) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.enumerable && (n.get ? no(t, s, () => e[s]) : ro(t, s, n.value));
    }
  }
  function Ae(...t) {
    const e = {};
    for (const s of t) {
      const n = Object.getOwnPropertyDescriptors(s);
      Object.assign(e, n);
    }
    return Object.defineProperties({}, e);
  }
  function Zu(t) {
    return JSON.stringify(t);
  }
  function Uu(t) {
    return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const io = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
  };
  function is(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  const Fu = Ks(() => {
    var _a3;
    if (Me.jitless || typeof navigator < "u" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) return false;
    try {
      const t = Function;
      return new t(""), true;
    } catch (e) {
      return false;
    }
  });
  function Lt(t) {
    if (is(t) === false) return false;
    const e = t.constructor;
    if (e === void 0 || typeof e != "function") return true;
    const s = e.prototype;
    return !(is(s) === false || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === false);
  }
  function oo(t) {
    return Lt(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
  }
  const Bu = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  function Ct(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function ut(t, e, s) {
    const n = new t._zod.constr(e != null ? e : t._zod.def);
    return (!e || (s == null ? void 0 : s.parent)) && (n._zod.parent = t), n;
  }
  function G(t) {
    const e = t;
    if (!e) return {};
    if (typeof e == "string") return { error: () => e };
    if ((e == null ? void 0 : e.message) !== void 0) {
      if ((e == null ? void 0 : e.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
      e.error = e.message;
    }
    return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
  }
  function ao(t) {
    return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? '"'.concat(t, '"') : "".concat(t);
  }
  function Ku(t) {
    return Object.keys(t).filter((e) => t[e]._zod.optin !== void 0 && t[e]._zod.optout === "optional");
  }
  const co = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, qu = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
  function Gu(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const i = {};
    return _t(i, t, qs(t, e)), ut(t, Ae(s, { shape: i, checks: [] }));
  }
  function qs(t, e) {
    var _a3;
    const s = Xe(t), n = [];
    for (const r of Reflect.ownKeys(e)) {
      if (!((_a3 = Object.getOwnPropertyDescriptor(s, r)) == null ? void 0 : _a3.enumerable)) throw new Error('Unrecognized key: "'.concat(String(r), '"'));
      e[r] && n.push(r);
    }
    return n;
  }
  function Wu(t, e) {
    const s = t._zod.def, n = s.checks;
    if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const i = new Set(qs(t, e)), o = {};
    return _t(o, t, Reflect.ownKeys(Xe(t)).filter((a) => !i.has(a))), ut(t, Ae(s, { shape: o, checks: [] }));
  }
  function Hu(t, e) {
    if (!Lt(e)) throw new Error("Invalid input to extend: expected a plain object");
    const s = t._zod.def.checks;
    if (s && s.length > 0) {
      const r = Xe(t);
      for (const i of Reflect.ownKeys(e)) if (Object.getOwnPropertyDescriptor(r, i) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    return ut(t, Ae(t._zod.def, { shape: lo(t, e) }));
  }
  function lo(t, e) {
    const s = {};
    return _t(s, t, Reflect.ownKeys(Xe(t))), Cu(s, e), s;
  }
  function Vu(t, e) {
    if (!Lt(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
    return ut(t, Ae(t._zod.def, { shape: lo(t, e) }));
  }
  function Yu(t, e) {
    var _a3, _b3, _c2;
    if (!((_a3 = e == null ? void 0 : e._zod) == null ? void 0 : _a3.def)) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    if ((_b3 = t._zod.def.checks) == null ? void 0 : _b3.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    const s = {};
    _t(s, t, Reflect.ownKeys(Xe(t))), _t(s, e, Reflect.ownKeys(Xe(e)));
    const n = Ae(t._zod.def, { shape: s, get catchall() {
      return e._zod.def.catchall;
    }, checks: (_c2 = e._zod.def.checks) != null ? _c2 : [] });
    return ut(t, n);
  }
  function uo(t, e, s, n = "partial") {
    const i = e._zod.def.checks;
    if (i && i.length > 0) throw new Error(".".concat(n, "() cannot be used on object schemas containing refinements"));
    const a = s ? new Set(qs(e, s)) : void 0, c = {};
    return _t(c, e, Reflect.ownKeys(Xe(e)), t && ((l, d) => a && !a.has(d) ? l : new t({ type: "optional", innerType: l }))), ut(e, Ae(e._zod.def, { shape: c, checks: [] }));
  }
  function Ju(t, e, s) {
    const n = s ? new Set(qs(e, s)) : void 0, r = {};
    return _t(r, e, Reflect.ownKeys(Xe(e)), (i, o) => n && !n.has(o) ? i : new t({ type: "nonoptional", innerType: i })), ut(e, Ae(e._zod.def, { shape: r }));
  }
  function Ue(t, e = 0) {
    var _a3;
    if (t.aborted === true) return true;
    for (let s = e; s < t.issues.length; s++) if (((_a3 = t.issues[s]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function Qu(t, e = 0) {
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
  function os(t) {
    return typeof t == "string" ? t : t == null ? void 0 : t.message;
  }
  function ho(t) {
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
  function ir(t, e, s) {
    var _a3;
    var n;
    for (let r = e; r < t.length; r++) (_a3 = (n = t[r]).schema) != null ? _a3 : n.schema = s;
  }
  function pt(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q;
    var n;
    const r = (_b3 = (_a3 = t.inst) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.traits;
    (r == null ? void 0 : r.has("$ZodType")) && (r.has("$ZodCheck") ? (_c2 = (n = t).schema) != null ? _c2 : n.schema = t.inst : t.schema = t.inst);
    const i = t.schema !== t.inst ? (_e2 = (_d2 = t.schema) == null ? void 0 : _d2._zod.def) == null ? void 0 : _e2.error : void 0, o = t.message ? t.message : (_p2 = (_o2 = (_m2 = (_k2 = (_i2 = os((_h2 = (_g2 = (_f2 = t.inst) == null ? void 0 : _f2._zod.def) == null ? void 0 : _g2.error) == null ? void 0 : _h2.call(_g2, t))) != null ? _i2 : os(i == null ? void 0 : i(t))) != null ? _k2 : os((_j = e == null ? void 0 : e.error) == null ? void 0 : _j.call(e, t))) != null ? _m2 : os((_l2 = s.customError) == null ? void 0 : _l2.call(s, t))) != null ? _o2 : os((_n2 = s.localeError) == null ? void 0 : _n2.call(s, t))) != null ? _p2 : "Invalid input", a = {};
    for (const c of Object.keys(t)) c === "inst" || c === "schema" || c === "continue" || c === "input" || c === "__proto__" || (a[c] = t[c]);
    return (_q = a.path) != null ? _q : a.path = [], a.message = o, (e == null ? void 0 : e.reportInput) && (a.input = t.input), a;
  }
  const Xu = /[\uD800-\uDBFF]/;
  function or(t) {
    const e = t.length;
    if (!Xu.test(t)) return e;
    let s = e;
    for (let n = 0; n < e - 1; n++) (t.charCodeAt(n) & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 && (s--, n++);
    return s;
  }
  function ar(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
  }
  function eh(t) {
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
  function as(...t) {
    const [e, s, n] = t;
    return typeof e == "string" ? { message: e, code: "custom", input: s, inst: n } : { ...e };
  }
  function th(t, e) {
    for (const s in e) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n.get ? Object.defineProperty(t, s, { ...n, enumerable: false }) : sh(t, s, n.value);
    }
  }
  function ft(t, e, s, n = true) {
    return Object.defineProperty(t, e, { configurable: true, writable: true, enumerable: n, value: s }), s;
  }
  function po(t, e, s) {
    return ft(t, e, s, false);
  }
  function fo(t, e) {
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
  function sh(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, get() {
      return this == null ? s : ft(this, e, s.bind(this));
    }, set(n) {
      ft(this, e, n);
    } });
  }
  function nh(t, e) {
    const s = Object.getPrototypeOf(t);
    return e in s ? void 0 : s;
  }
  let cr, mt = false;
  const rh = { configurable: true, get() {
    mt = true;
  } };
  function X(t, e, s) {
    const n = Object.getPrototypeOf(t._zod);
    if (e in n && cr !== t._zod) {
      cr = void 0;
      return;
    }
    cr = t._zod, Object.defineProperty(n, e, { configurable: true, get() {
      Object.defineProperty(this, e, rh);
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
  function ih(t, e, s, n) {
    const r = nh(t, e);
    r && Object.defineProperty(r, e, { configurable: true, get() {
      const i = { configurable: true, writable: true, enumerable: n, value: void 0 };
      return Object.defineProperty(this, e, i), i.value = s(this), Object.defineProperty(this, e, i), i.value;
    }, set(i) {
      Object.defineProperty(this, e, { configurable: true, writable: true, enumerable: n, value: i });
    } });
  }
  const oh = "~constantCatch";
  function ah(t) {
    const e = () => t;
    return e[oh] = true, e;
  }
  var mo;
  const lr = { value: void 0, enumerable: false };
  let go = "captureStackTrace" in Error ? Error : null;
  function ch(t) {
    const e = go;
    if (e) {
      const s = e.stackTraceLimit;
      if (typeof s == "number") {
        try {
          e.stackTraceLimit = 0;
        } catch (e2) {
          return go = null, new t();
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
        lr.value = new i(f);
        try {
          Object.defineProperty(p, "_zod", lr);
        } finally {
          lr.value = void 0;
        }
      }
      if (p._zod.traits.add(t), e(p, f), a) {
        const k = Object.getPrototypeOf(p), g = p._zod.constr.prototype;
        let b = k;
        for (; b && b !== g; ) b = Object.getPrototypeOf(b);
        const v = b != null ? b : k;
        a.has(v) || (a.add(v), th(v, o));
      }
      const m = h.prototype;
      for (const k in m) Object.prototype.hasOwnProperty.call(m, k) && (k in p || (p[k] = m[k].bind(p)));
    }
    const l = (_a3 = n == null ? void 0 : n.Parent) != null ? _a3 : Object;
    class d extends l {
    }
    Object.defineProperty(d, "name", { value: t });
    function h(p) {
      var _a4;
      const f = (n == null ? void 0 : n.Parent) ? ch(d) : this;
      c(f, p);
      const m = f._zod.deferred;
      if (m) {
        for (const g of m) g();
        f._zod.deferred = void 0;
      }
      const k = (_a4 = globalThis.__zod_globalConfig) == null ? void 0 : _a4.postProcessor;
      return k && k(f), f;
    }
    return Object.defineProperty(h, "init", { value: c }), Object.defineProperty(h, Symbol.hasInstance, { value: (p) => {
      var _a4, _b3;
      return (n == null ? void 0 : n.Parent) && p instanceof n.Parent ? true : (_b3 = (_a4 = p == null ? void 0 : p._zod) == null ? void 0 : _a4.traits) == null ? void 0 : _b3.has(t);
    } }), Object.defineProperty(h, "name", { value: t }), h;
  }
  class jt extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class ko extends Error {
    constructor(e) {
      super("Encountered unidirectional transform during encode: ".concat(e)), this.name = "ZodEncodeError";
    }
  }
  (_a2 = (mo = globalThis).__zod_globalConfig) != null ? _a2 : mo.__zod_globalConfig = {};
  const Me = globalThis.__zod_globalConfig;
  function qe(t) {
    return t && Object.assign(Me, t), Me;
  }
  function lh() {
    var _a3;
    const t = this._zod;
    return (_a3 = t.message) != null ? _a3 : t.message = JSON.stringify(t.def, sr, 2), t.message;
  }
  function dh(t) {
    this._zod.message = t;
  }
  const uh = { get: lh, set: dh, enumerable: true, configurable: true }, dr = { value: void 0, enumerable: false }, bo = new WeakSet([Object.prototype, Error.prototype]), hh = M("$ZodError", (t, e) => {
    t.name = "$ZodError", dr.value = e, Object.defineProperty(t, "issues", dr), dr.value = void 0, Object.defineProperty(t, "message", uh);
    const s = Object.getPrototypeOf(t);
    bo.has(s) || (bo.add(s), Object.defineProperty(s, "toString", { configurable: true, enumerable: false, get() {
      const n = () => this.message;
      return Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, "toString", { value: n, configurable: true, writable: true });
    } }));
  });
  function ph(t, e, s) {
    return Object.prototype.hasOwnProperty.call(t, e) || (e === "__proto__" ? Object.defineProperty(t, e, { value: s(), writable: true, enumerable: true, configurable: true }) : t[e] = s()), t[e];
  }
  function fh(t, e = (s) => s.message) {
    const s = {}, n = [];
    for (const r of t.issues) r.path.length > 0 ? ph(s, r.path[0], () => []).push(e(r)) : n.push(e(r));
    return { formErrors: n, fieldErrors: s };
  }
  function mh(t, e = (s) => s.message) {
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
  function Gs(t, e) {
    var _a3;
    return { callee: (_a3 = e == null ? void 0 : e.callee) != null ? _a3 : t, Err: e == null ? void 0 : e.Err };
  }
  const ur = (t) => {
    const e = (s, n, r, i) => {
      var _a3, _b3;
      const o = r ? { ...r, async: false } : { async: false }, a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise) throw new jt();
      if (a.issues.length) {
        const c = new ((_a3 = i == null ? void 0 : i.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, qe())));
        throw io(c, (_b3 = i == null ? void 0 : i.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, hr = (t) => {
    const e = async (s, n, r, i) => {
      var _a3, _b3;
      const o = r ? { ...r, async: true } : { async: true };
      let a = s._zod.run({ value: n, issues: [] }, o);
      if (a instanceof Promise && (a = await a), a.issues.length) {
        const c = new ((_a3 = i == null ? void 0 : i.Err) != null ? _a3 : t)(a.issues.map((l) => pt(l, o, qe())));
        throw io(c, (_b3 = i == null ? void 0 : i.callee) != null ? _b3 : e), c;
      }
      return a.value;
    };
    return e;
  }, pr = (t) => (e, s, n) => {
    const r = n ? { ...n, async: false } : { async: false }, i = e._zod.run({ value: s, issues: [] }, r);
    if (i instanceof Promise) throw new jt();
    return i.issues.length ? vo(t, i.issues, r) : { success: true, data: i.value };
  };
  function vo(t, e, s) {
    let n;
    return { success: false, get error() {
      return n || (n = new t(e.map((r) => pt(r, s, qe()))), e = void 0, s = void 0), n;
    }, set error(r) {
      n = r, e = void 0, s = void 0;
    } };
  }
  const fr = (t) => async (e, s, n) => {
    const r = n ? { ...n, async: true } : { async: true };
    let i = e._zod.run({ value: s, issues: [] }, r);
    return i instanceof Promise && (i = await i), i.issues.length ? vo(t, i.issues, r) : { success: true, data: i.value };
  }, gh = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), kh = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), bh = ((t, e, s) => {
    const n = t._zod.bag.validator;
    if (n !== void 0) {
      if (n(e) !== gh) return true;
      if (n.definite === true && s === void 0) return false;
    }
    return vh(t, e, s);
  });
  function vh(t, e, s) {
    const n = s ? { ...s, async: false, abortEarly: true } : { async: false, abortEarly: true }, r = t._zod.bag.fallbackRun;
    let i;
    if (r ? (n[kh] = true, i = r({ value: e, issues: [] }, n)) : i = t._zod.run({ value: e, issues: [] }, n), i instanceof Promise) throw new jt();
    return i.issues.length === 0;
  }
  const wh = async (t, e, s) => {
    const n = s ? { ...s, async: true, abortEarly: true } : { async: true, abortEarly: true };
    let r = t._zod.run({ value: e, issues: [] }, n);
    return r instanceof Promise && (r = await r), r.issues.length === 0;
  }, yh = (t) => {
    const e = ur(t), s = (n, r, i, o) => {
      const a = i ? { ...i, direction: "backward" } : { direction: "backward" };
      return e(n, r, a, Gs(s, o));
    };
    return s;
  }, Sh = (t) => {
    const e = ur(t), s = (n, r, i, o) => e(n, r, i, Gs(s, o));
    return s;
  }, $h = (t) => {
    const e = hr(t), s = async (n, r, i, o) => {
      const a = i ? { ...i, direction: "backward" } : { direction: "backward" };
      return await e(n, r, a, Gs(s, o));
    };
    return s;
  }, zh = (t) => {
    const e = hr(t), s = async (n, r, i, o) => await e(n, r, i, Gs(s, o));
    return s;
  }, _h = (t) => (e, s, n) => {
    const r = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return pr(t)(e, s, r);
  }, jh = (t) => (e, s, n) => pr(t)(e, s, n), xh = (t) => async (e, s, n) => {
    const r = n ? { ...n, direction: "backward" } : { direction: "backward" };
    return fr(t)(e, s, r);
  }, Eh = (t) => async (e, s, n) => fr(t)(e, s, n), Ah = /^[cC][0-9a-z]{6,}$/, Th = /^[0-9a-z]+$/, Ih = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Mh = /^[0-9a-vA-V]{20}$/, Oh = /^[A-Za-z0-9]{27}$/, Nh = /^[a-zA-Z0-9_-]{21}$/;
  function Ph(t) {
    return new RegExp("^[a-zA-Z0-9_-]{".concat(t, "}$"));
  }
  const Rh = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Dh = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, wo = (t) => t ? new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(t, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$")) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Lh = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ch = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
  function Zh() {
    return new RegExp(Ch, "u");
  }
  const Uh = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fh = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Bh = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Kh = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, qh = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Gh = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Wh = /^https?$/, Hh = /^\+[1-9]\d{6,14}$/, yo = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
  function Vh(t) {
    return new RegExp("^".concat(t, "$"));
  }
  const Yh = Vh(yo);
  function mr(t) {
    const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number" ? t.precision === -1 ? "".concat(e) : t.precision === 0 ? "".concat(e, ":[0-5]\\d") : "".concat(e, ":[0-5]\\d\\.\\d{").concat(t.precision, "}") : t.seconds ? "".concat(e, ":[0-5]\\d(?:\\.\\d+)?") : "".concat(e, "(?::[0-5]\\d(?:\\.\\d+)?)?");
  }
  function Jh(t) {
    return new RegExp("^".concat(mr(t), "$"));
  }
  function Qh(t) {
    const e = ["Z"];
    t.offset && e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const s = "".concat(mr({ precision: t.precision, seconds: true }), "(?:").concat(e.join("|"), ")"), n = t.local ? "".concat(s, "|").concat(mr({ precision: t.precision })) : s;
    return new RegExp("^".concat(yo, "T(?:").concat(n, ")$"));
  }
  const Xh = /^[\s\S]{0,}$/, ep = /^-?\d+$/, gr = /^-?\d+(?:\.\d+)?$/, tp = /^(?:true|false)$/i, sp = /^[^A-Z]*$/, np = /^[^a-z]*$/, ze = M("$ZodCheck", (t, e) => {
    var _a3, _b3;
    var s;
    (_a3 = t._zod) != null ? _a3 : t._zod = {}, t._zod.def = e, (_b3 = (s = t._zod).onattach) != null ? _b3 : s.onattach = [];
  }), kr = (t) => {
    const e = t.value;
    return !Ru(e) && e.length !== void 0;
  }, Ws = { number: "number", bigint: "bigint", object: "date" }, So = M("$ZodCheckLessThan", (t, e) => {
    ze.init(t, e);
    const s = Ws[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value <= e.value : n.value < e.value) || n.issues.push({ origin: (_a3 = Ws[typeof n.value]) != null ? _a3 : s, code: "too_big", maximum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), $o = M("$ZodCheckGreaterThan", (t, e) => {
    ze.init(t, e);
    const s = Ws[typeof e.value];
    t._zod.check = (n) => {
      var _a3;
      (e.inclusive ? n.value >= e.value : n.value > e.value) || n.issues.push({ origin: (_a3 = Ws[typeof n.value]) != null ? _a3 : s, code: "too_small", minimum: typeof e.value == "object" ? e.value.getTime() : e.value, input: n.value, inclusive: e.inclusive, inst: t, continue: !e.abort });
    };
  }), rp = M("$ZodCheckMultipleOf", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      if (typeof s.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof s.value == "bigint" ? e.value !== BigInt(0) && s.value % e.value === BigInt(0) : Du(s.value, e.value) === 0) || s.issues.push({ origin: typeof s.value, code: "not_multiple_of", divisor: e.value, input: s.value, inst: t, continue: !e.abort });
    };
  }), ip = M("$ZodCheckNumberFormat", (t, e) => {
    var _a3;
    ze.init(t, e), e.format = e.format || "float64";
    const s = (_a3 = e.format) == null ? void 0 : _a3.includes("int"), n = s ? "int" : "number", [r, i] = co[e.format];
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
  }), op = M("$ZodCheckMaxLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = kr, t._zod.check = (n) => {
      const r = n.value, i = r.length;
      if ((typeof r == "string" && i > e.maximum ? or(r) : i) <= e.maximum) return;
      const a = ar(r);
      n.issues.push({ origin: a, code: "too_big", maximum: e.maximum, inclusive: true, input: r, inst: t, continue: !e.abort });
    };
  }), ap = M("$ZodCheckMinLength", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = kr, t._zod.check = (n) => {
      const r = n.value, i = r.length;
      if ((typeof r == "string" && i >= e.minimum && i < e.minimum * 2 ? or(r) : i) >= e.minimum) return;
      const a = ar(r);
      n.issues.push({ origin: a, code: "too_small", minimum: e.minimum, inclusive: true, input: r, inst: t, continue: !e.abort });
    };
  }), cp = M("$ZodCheckLengthEquals", (t, e) => {
    var _a3;
    var s;
    ze.init(t, e), (_a3 = (s = t._zod.def).when) != null ? _a3 : s.when = kr, t._zod.check = (n) => {
      const r = n.value, i = r.length, o = typeof r == "string" && i >= e.length && i <= e.length * 2 ? or(r) : i;
      if (o === e.length) return;
      const a = ar(r), c = o > e.length;
      n.issues.push({ origin: a, ...c ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length }, inclusive: true, exact: true, input: n.value, inst: t, continue: !e.abort });
    };
  }), Hs = M("$ZodCheckStringFormat", (t, e) => {
    var _a3, _b3;
    var s, n;
    ze.init(t, e), e.pattern ? (_a3 = (s = t._zod).check) != null ? _a3 : s.check = (r) => {
      e.pattern.lastIndex = 0, !e.pattern.test(r.value) && r.issues.push({ origin: "string", code: "invalid_format", format: e.format, input: r.value, ...e.pattern ? { pattern: e.pattern.toString() } : {}, inst: t, continue: !e.abort });
    } : (_b3 = (n = t._zod).check) != null ? _b3 : n.check = () => {
    };
  }), lp = M("$ZodCheckRegex", (t, e) => {
    Hs.init(t, e), t._zod.check = (s) => {
      e.pattern.lastIndex = 0, !e.pattern.test(s.value) && s.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: s.value, pattern: e.pattern.toString(), inst: t, continue: !e.abort });
    };
  }), dp = M("$ZodCheckLowerCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = sp, Hs.init(t, e);
  }), up = M("$ZodCheckUpperCase", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = np, Hs.init(t, e);
  }), hp = M("$ZodCheckIncludes", (t, e) => {
    ze.init(t, e);
    const s = Ct(e.includes), n = new RegExp(typeof e.position == "number" ? "^.{".concat(e.position, ",}").concat(s) : s);
    e.pattern = n, t._zod.check = (r) => {
      r.value.includes(e.includes, e.position) || r.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: e.includes, input: r.value, inst: t, continue: !e.abort });
    };
  }), pp = M("$ZodCheckStartsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp("^".concat(Ct(e.prefix), ".*"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.startsWith(e.prefix) || n.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: e.prefix, input: n.value, inst: t, continue: !e.abort });
    };
  }), fp = M("$ZodCheckEndsWith", (t, e) => {
    var _a3;
    ze.init(t, e);
    const s = new RegExp(".*".concat(Ct(e.suffix), "$"));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = s, t._zod.check = (n) => {
      n.value.endsWith(e.suffix) || n.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: e.suffix, input: n.value, inst: t, continue: !e.abort });
    };
  }), mp = M("$ZodCheckOverwrite", (t, e) => {
    ze.init(t, e), t._zod.check = (s) => {
      s.value = e.tx(s.value);
    };
  });
  class gp {
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
  const kp = { major: 4, minor: 6, patch: 7 }, re = M("$ZodType", (t, e) => {
    var _a3, _b3;
    var s;
    t != null ? t : t = {}, t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = kp;
    const n = t._zod.def.checks, r = t._zod.traits.has("$ZodCheck") ? [t, ...n != null ? n : []] : (n == null ? void 0 : n.length) ? [...n] : [];
    for (const i of r) for (const o of i._zod.onattach) o(t);
    if (r.length === 0) (_a3 = (s = t._zod).deferred) != null ? _a3 : s.deferred = [], (_b3 = t._zod.deferred) == null ? void 0 : _b3.push(() => {
      t._zod.run = t._zod.parse;
    });
    else {
      const i = (a, c, l) => {
        if (a.memo) return a;
        let d = Ue(a), h;
        for (const p of c) {
          if (p._zod.def.when) {
            if (Qu(a) || !p._zod.def.when(a)) continue;
          } else if (d) continue;
          const f = a.issues.length, m = p._zod.check(a);
          if (m instanceof Promise && (l == null ? void 0 : l.async) === false) throw new jt();
          if (h || m instanceof Promise) h = (h != null ? h : Promise.resolve()).then(async () => {
            await m, a.issues.length !== f && (ir(a.issues, f, t), d || (d = Ue(a, f)));
          });
          else {
            if (a.issues.length === f) continue;
            ir(a.issues, f, t), d || (d = Ue(a, f));
          }
        }
        return h ? h.then(() => a) : a;
      }, o = (a, c, l) => {
        if (Ue(a)) return a.aborted = true, a;
        const d = i(c, r, l);
        if (d instanceof Promise) {
          if (l.async === false) throw new jt();
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
          if (c.async === false) throw new jt();
          return l.then((d) => i(d, r, c));
        }
        return i(l, r, c);
      };
    }
  }, { get "~standard"() {
    return po(this, "~standard", _o(this));
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  } }), zo = (t, e) => t.issues.length ? { issues: t.issues.map((s) => pt(s, e, qe())) } : { value: t.value };
  async function bp(t, e) {
    const s = { async: true };
    return zo(await t._zod.run({ value: e, issues: [] }, s), s);
  }
  function _o(t) {
    return { validate: (e) => {
      const s = { async: false };
      try {
        const n = t._zod.run({ value: e, issues: [] }, s);
        if (!(n instanceof Promise)) return zo(n, s);
      } catch (e2) {
      }
      return bp(t, e);
    }, vendor: "zod", version: 1 };
  }
  const br = M("$ZodString", (t, e) => {
    var _a3;
    re.init(t, e), t._zod.pattern = (_a3 = e.pattern) != null ? _a3 : Xh, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = String(s.value);
      } catch (e2) {
      }
      return typeof s.value == "string" || s.issues.push({ expected: "string", code: "invalid_type", input: s.value, inst: t }), s;
    };
  }), ae = M("$ZodStringFormat", (t, e) => {
    Hs.init(t, e), br.init(t, e);
  }), vp = M("$ZodGUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Dh, ae.init(t, e);
  }), wp = M("$ZodUUID", (t, e) => {
    var _a3, _b3;
    if (e.version) {
      const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e.version];
      if (n === void 0) throw new Error('Invalid UUID version: "'.concat(e.version, '"'));
      (_a3 = e.pattern) != null ? _a3 : e.pattern = wo(n);
    } else (_b3 = e.pattern) != null ? _b3 : e.pattern = wo();
    ae.init(t, e);
  }), yp = M("$ZodEmail", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Lh, ae.init(t, e);
  }), jo = 1, Vs = 2;
  function xo(t) {
    try {
      return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), true);
    } catch (e) {
      return false;
    }
  }
  function Sp(t, e) {
    return !("normalize" in e) && !("hostname" in e) && !("protocol" in e) ? xo(t) || Vs : $p(t, e);
  }
  function $p(t, e) {
    var _a3, _b3;
    if (!e.normalize && ((_a3 = e.protocol) == null ? void 0 : _a3.source) === Wh.source && !/^https?:\/\//i.test(t)) return jo;
    try {
      if (typeof URL < "u") {
        const s = URL;
        if (typeof s.parse == "function") return (_b3 = s.parse(t)) != null ? _b3 : Vs;
      }
      return new URL(t);
    } catch (e2) {
      return Vs;
    }
  }
  const zp = /[\t\n\r]/g;
  function Eo(t) {
    return t.replace(zp, "");
  }
  function _p(t, e) {
    return e.lastIndex = 0, e.test(t.hostname);
  }
  function jp(t, e) {
    return e.lastIndex = 0, e.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
  }
  const xp = M("$ZodURL", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      try {
        const n = s.value.trim(), r = Sp(n, e);
        if (r === jo) {
          s.issues.push({ code: "invalid_format", format: "url", note: "Invalid URL format", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (r === Vs) {
          s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
          return;
        }
        if (r === true) {
          s.value = Eo(n);
          return;
        }
        e.hostname && !_p(r, e.hostname) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: e.hostname.source, input: s.value, inst: t, continue: !e.abort }), e.protocol && !jp(r, e.protocol) && s.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: e.protocol.source, input: s.value, inst: t, continue: !e.abort }), s.value = e.normalize ? r.href : Eo(n);
        return;
      } catch (e2) {
        s.issues.push({ code: "invalid_format", format: "url", input: s.value, inst: t, continue: !e.abort });
      }
    };
  }), Ep = M("$ZodEmoji", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Zh(), ae.init(t, e);
  }), Ap = M("$ZodNanoID", (t, e) => {
    var _a3;
    if (e.length !== void 0 && (!Number.isInteger(e.length) || e.length < 1)) throw new Error("Invalid nanoid length: ".concat(e.length));
    (_a3 = e.pattern) != null ? _a3 : e.pattern = e.length === void 0 ? Nh : Ph(e.length), ae.init(t, e);
  }), Tp = M("$ZodCUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Ah, ae.init(t, e);
  }), Ip = M("$ZodCUID2", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Th, ae.init(t, e);
  }), Mp = M("$ZodULID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Ih, ae.init(t, e);
  }), Op = M("$ZodXID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Mh, ae.init(t, e);
  }), Np = M("$ZodKSUID", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Oh, ae.init(t, e);
  }), Pp = M("$ZodISODateTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Qh(e), ae.init(t, e);
  }), Rp = M("$ZodISODate", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Yh, ae.init(t, e);
  }), Dp = M("$ZodISOTime", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Jh(e), ae.init(t, e);
  }), Lp = M("$ZodISODuration", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Rh, ae.init(t, e);
  }), Cp = M("$ZodIPv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Uh, ae.init(t, e);
  }), Zp = /^[0-9a-fA-F:.]+$/;
  function Ao(t) {
    return Zp.test(t) ? xo("http://[".concat(t, "]")) : false;
  }
  const Up = M("$ZodIPv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Fh, ae.init(t, e), t._zod.check = (s) => {
      Ao(s.value) || s.issues.push({ code: "invalid_format", format: "ipv6", input: s.value, inst: t, continue: !e.abort });
    };
  }), Fp = M("$ZodCIDRv4", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Bh, ae.init(t, e);
  });
  function Bp(t) {
    const e = t.split("/");
    if (e.length !== 2) return false;
    const [s, n] = e;
    if (!n) return false;
    const r = Number(n);
    return "".concat(r) !== n || r < 0 || r > 128 ? false : Ao(s);
  }
  const Kp = M("$ZodCIDRv6", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Kh, ae.init(t, e), t._zod.check = (s) => {
      Bp(s.value) || s.issues.push({ code: "invalid_format", format: "cidrv6", input: s.value, inst: t, continue: !e.abort });
    };
  });
  function To(t) {
    if (t === "") return true;
    if (/\s/.test(t) || t.length % 4 !== 0) return false;
    try {
      return atob(t), true;
    } catch (e) {
      return false;
    }
  }
  const Io = /^[0-9a-zA-Z+/]*={0,2}$/, qp = M("$ZodBase64", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Io, ae.init(t, e), t._zod.check = (s) => {
      To(s.value) || s.issues.push({ code: "invalid_format", format: "base64", input: s.value, inst: t, continue: !e.abort });
    };
  }), vr = /^[A-Za-z0-9_-]*$/;
  function Gp(t) {
    if (!vr.test(t)) return false;
    const e = t.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), s = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
    return To(s);
  }
  const Wp = M("$ZodBase64URL", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = vr, ae.init(t, e), t._zod.check = (s) => {
      Gp(s.value) || s.issues.push({ code: "invalid_format", format: "base64url", input: s.value, inst: t, continue: !e.abort });
    };
  }), Hp = M("$ZodE164", (t, e) => {
    var _a3;
    (_a3 = e.pattern) != null ? _a3 : e.pattern = Hh, ae.init(t, e);
  });
  function Vp(t, e = null) {
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
  const Yp = M("$ZodJWT", (t, e) => {
    ae.init(t, e), t._zod.check = (s) => {
      Vp(s.value, e.alg) || s.issues.push({ code: "invalid_format", format: "jwt", input: s.value, inst: t, continue: !e.abort });
    };
  }), Mo = M("$ZodNumber", (t, e) => {
    re.init(t, e), t._zod.pattern = gr, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = Number(s.value);
      } catch (e2) {
      }
      const r = s.value;
      if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r)) return s;
      const i = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : String(r) : void 0;
      return s.issues.push({ expected: "number", code: "invalid_type", input: r, inst: t, ...i ? { received: i } : {} }), s;
    };
  }), Jp = M("$ZodNumberFormat", (t, e) => {
    ip.init(t, e), Mo.init(t, e);
  }), Qp = M("$ZodBoolean", (t, e) => {
    re.init(t, e), t._zod.pattern = tp, t._zod.parse = (s, n) => {
      if (e.coerce) try {
        s.value = !!s.value;
      } catch (e2) {
      }
      const r = s.value;
      return typeof r == "boolean" || s.issues.push({ expected: "boolean", code: "invalid_type", input: r, inst: t }), s;
    };
  }), Xp = M("$ZodUnknown", (t, e) => {
    re.init(t, e), t._zod.parse = (s) => s;
  }), ef = M("$ZodNever", (t, e) => {
    re.init(t, e), t._zod.parse = (s, n) => (s.issues.push({ expected: "never", code: "invalid_type", input: s.value, inst: t }), s);
  });
  function tf(t, e) {
    const s = ho(t._zod.def.checks);
    if (!s.length) return;
    const n = Math.min(...s.map((i) => i[0])), r = t._zod.parse;
    t._zod.parse = (i, o) => {
      const a = e(i.value);
      if (a > n && !(o == null ? void 0 : o.skipChecks) && (o == null ? void 0 : o.direction) !== "backward") {
        for (const [c, l] of ho(t._zod.def.checks)) if (a > c && l._zod.def.when(i)) {
          const d = i.issues.length;
          return l._zod.check(i), i.issues[d].continue = false, ir(i.issues, d, t), i;
        }
      }
      return r(i, o);
    };
  }
  const sf = (t) => Array.isArray(t) ? t.length : -1;
  function Oo(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  const nf = M("$ZodArray", (t, e) => {
    re.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, r) => {
      const i = n.value;
      if (!Array.isArray(i)) return n.issues.push({ expected: "array", code: "invalid_type", input: i, inst: t }), n;
      n.value = s ? s.alloc(t, n, Array(i.length), r) : Array(i.length);
      const o = [], a = r == null ? void 0 : r.abortEarly;
      for (let c = 0; c < i.length; c++) {
        const l = i[c], d = e.element._zod.run({ value: l, issues: [] }, r);
        if (d instanceof Promise) o.push(d.then((h) => Oo(h, n, c)));
        else if (Oo(d, n, c), a && d.issues.length !== 0 && Ue(d)) break;
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    }, tf(t, sf);
  });
  function Ys(t, e, s, n, r, i) {
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
  const rf = [];
  function No(t) {
    var _a3, _b3, _c2, _d2;
    const e = Object.keys(t.shape), s = Object.getOwnPropertySymbols(t.shape), n = s.length ? s : rf, r = n.length ? [...e, ...n] : e;
    for (const o of r) if (!((_d2 = (_c2 = (_b3 = (_a3 = t.shape) == null ? void 0 : _a3[o]) == null ? void 0 : _b3._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error('Invalid element at key "'.concat(String(o), '": expected a Zod schema'));
    const i = Ku(t.shape);
    return { ...t, allKeys: r, symbolKeys: n, keySet: new Set(e), numKeys: e.length, optionalKeys: new Set(i) };
  }
  function Po(t, e, s, n, r, i, o) {
    const a = [], c = r.keySet, l = r.catchall._zod, d = l.def.type, h = l.optin, p = l.optout;
    let f = 0;
    for (const m in e) {
      if (o && s.issues.length !== f) {
        if (Ue(s, f)) break;
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
      const k = l.run({ value: e[m], issues: [] }, n);
      k instanceof Promise ? t.push(k.then((g) => Ys(g, s, m, e, h, p))) : Ys(k, s, m, e, h, p);
    }
    return a.length && s.issues.push({ code: "unrecognized_keys", keys: a, input: e, inst: i, continue: true }), t.length ? Promise.all(t).then(() => s) : s;
  }
  const of = M("$ZodObject", (t, e) => {
    var _a3;
    re.init(t, e);
    const s = Object.getOwnPropertyDescriptor(e, "shape"), n = (s == null ? void 0 : s.get) ? s.get.raw : (_a3 = e.shape) != null ? _a3 : {};
    if (n) {
      const l = () => {
        const d = { ...n };
        return Object.defineProperty(e, "shape", { value: d }), l.raw = d, d;
      };
      l.raw = n, Object.defineProperty(e, "shape", { get: l });
    }
    const r = Ks(() => No(e));
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
    const i = is, o = e.catchall;
    let a;
    const c = Me.memoizer;
    c == null ? void 0 : c.attach(t), t._zod.parse = (l, d) => {
      a != null ? a : a = r.value;
      const h = l.value;
      if (!i(h)) return l.issues.push({ expected: "object", code: "invalid_type", input: h, inst: t }), l;
      l.value = c ? c.alloc(t, l, {}, d) : {};
      const p = [], f = a.shape, m = d == null ? void 0 : d.abortEarly;
      let k = l.issues.length;
      for (const g of a.allKeys) {
        if (m && l.issues.length !== k) {
          if (Ue(l, k)) break;
          k = l.issues.length;
        }
        if (g === "__proto__") continue;
        const b = f[g], v = b._zod.optin, $ = b._zod.optout, S = b._zod.run({ value: h[g], issues: [] }, d);
        S instanceof Promise ? p.push(S.then((_) => Ys(_, l, g, h, v, $))) : Ys(S, l, g, h, v, $);
      }
      return o ? Po(p, h, l, d, r.value, t, m === true) : p.length ? Promise.all(p).then(() => l) : l;
    };
  }), af = M("$ZodObjectJIT", (t, e) => {
    of.init(t, e);
    const s = t._zod.parse, n = Ks(() => No(e)), r = Me.memoizer, i = (f) => {
      var _a3, _b3;
      const m = n.value, k = m.symbolKeys, g = new gp(["payload", "ctx"], { shape: f, inst: t, memo: r, syms: k }), b = (_) => "shape[".concat(_, "]._zod.run({ value: input[").concat(_, "], issues: [] }, ctx)"), v = (_, w) => "\n          let ".concat(_, "_ab = false;\n          for (let i = 0; i < ").concat(_, ".issues.length; i++) {\n            const iss = ").concat(_, ".issues[i];\n            iss.path = iss.path ? [").concat(w, ", ...iss.path] : [").concat(w, "];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ").concat(_, "_ab = true;\n          }\n          if (").concat(_, "_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }");
      g.write("const input = payload.value;");
      const $ = /* @__PURE__ */ Object.create(null);
      let S = 0;
      for (const _ of m.allKeys) $[_] = "key_".concat(S++);
      g.write(r ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
      for (const _ of m.allKeys) {
        if (_ === "__proto__") continue;
        const w = $[_], A = typeof _ == "symbol" ? "syms[".concat(k.indexOf(_), "]") : Zu(_), j = "".concat(A, " in input"), O = f[_], R = (_a3 = O == null ? void 0 : O._zod) == null ? void 0 : _a3.optin, y = R !== void 0, E = ((_b3 = O == null ? void 0 : O._zod) == null ? void 0 : _b3.optout) === "optional";
        if (g.write("const ".concat(w, " = ").concat(b(A), ";")), y && E) {
          const z = R === "optional" ? "".concat(w, "_present") : "".concat(w, ".value !== undefined || ").concat(w, "_present");
          g.write("\n        const ".concat(w, "_present = ").concat(j, ";\n        if (!").concat(w, ".issues.length || ").concat(w, "_present) {\n          if (").concat(w, ".issues.length) {").concat(v(w, A), "\n          }\n\n          if (").concat(z, ") {\n            newResult[").concat(A, "] = ").concat(w, ".value;\n          }\n        }\n\n      "));
        } else y ? (g.write("\n        if (".concat(w, ".issues.length) {").concat(v(w, A), "\n        }\n      ")), R === "defaulted" ? g.write("newResult[".concat(A, "] = ").concat(w, ".value;")) : g.write("\n        if (".concat(w, ".value !== undefined || ").concat(j, ") {\n          newResult[").concat(A, "] = ").concat(w, ".value;\n        }\n      "))) : g.write("\n        const ".concat(w, "_present = ").concat(j, ";\n        if (").concat(w, ".issues.length) {").concat(v(w, A), "\n        }\n        if (!").concat(w, "_present && !").concat(w, '.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [').concat(A, "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (").concat(w, "_present) {\n          newResult[").concat(A, "] = ").concat(w, ".value;\n        }\n\n      "));
      }
      return g.write("payload.value = newResult;"), g.write("return payload;"), g.compile();
    };
    let o;
    const a = is, c = !Me.jitless, d = c && Fu.value, h = e.catchall;
    let p;
    t._zod.parse = (f, m) => {
      p != null ? p : p = n.value;
      const k = f.value;
      return a(k) ? c && d && (m == null ? void 0 : m.async) === false && m.jitless !== true ? (o || (o = i(e.shape)), f = o(f, m), h ? Po([], k, f, m, p, t, (m == null ? void 0 : m.abortEarly) === true) : f) : s(f, m) : (f.issues.push({ expected: "object", code: "invalid_type", input: k, inst: t }), f);
    };
  });
  function Ro(t, e, s, n) {
    for (const i of t) if (i.issues.length === 0) return e.value = i.value, e;
    const r = t.filter((i) => !Ue(i));
    return r.length === 1 ? (e.value = r[0].value, r[0]) : (e.issues.push({ code: "invalid_union", input: e.value, inst: s, errors: t.map((i) => i.issues.map((o) => pt(o, n, qe()))) }), e);
  }
  const Do = M("$ZodUnion", (t, e) => {
    re.init(t, e), X(t, "optin", (n) => n.def.options.some((r) => r._zod.optin === "defaulted") ? "defaulted" : n.def.options.some((r) => r._zod.optin !== void 0) ? "optional" : void 0), X(t, "optout", (n) => n.def.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), X(t, "values", (n) => {
      if (n.def.options.every((r) => r._zod.values)) return new Set(n.def.options.flatMap((r) => Array.from(r._zod.values)));
    }), X(t, "pattern", (n) => {
      if (n.def.options.every((r) => r._zod.pattern)) {
        const r = n.def.options.map((i) => i._zod.pattern);
        return new RegExp("^(".concat(r.map((i) => nr(i.source)).join("|"), ")$"));
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
      return i ? Promise.all(o).then((a) => Ro(a, n, t, r)) : Ro(o, n, t, r);
    };
  });
  function cf(t) {
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
  const lf = M("$ZodDiscriminatedUnion", (t, e) => {
    e.inclusive = false, Do.init(t, e);
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
      const o = rr(r._zod.def);
      if (o && !Object.prototype.hasOwnProperty.call(o, e.discriminator)) throw new Error('Invalid discriminated union option at index "'.concat(i, '"'));
    });
    const n = Ks(() => cf(e));
    t._zod.parse = (r, i) => {
      const o = r.value;
      if (!is(o)) return r.issues.push({ code: "invalid_type", expected: "object", input: o, inst: t }), r;
      const a = o == null ? void 0 : o[e.discriminator], c = n.value.get(a);
      return c && (a !== void 0 || i.direction !== "backward") ? c._zod.run(r, i) : e.unionFallback || i.direction === "backward" ? s(r, i) : (r.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: e.discriminator, options: Array.from(n.value.keys()).filter((l) => n.value.get(l) !== null), input: o, path: [e.discriminator], inst: t }), r);
    };
  }), df = M("$ZodIntersection", (t, e) => {
    re.init(t, e), t._zod.parse = (s, n) => {
      const r = s.value, i = e.left._zod.run({ value: r, issues: [] }, n), o = e.right._zod.run({ value: r, issues: [] }, n);
      return i instanceof Promise || o instanceof Promise ? Promise.all([i, o]).then(([c, l]) => Lo(s, c, l)) : Lo(s, i, o);
    };
  });
  function wr(t, e) {
    if (t === e) return { valid: true, data: t };
    if (t instanceof Date && e instanceof Date && +t == +e) return { valid: true, data: t };
    if (Lt(t) && Lt(e)) {
      const s = Object.keys(e), n = Object.keys(t).filter((i) => s.indexOf(i) !== -1), r = { ...t, ...e };
      Object.prototype.hasOwnProperty.call(r, "__proto__") && delete r.__proto__;
      for (const i of n) {
        if (i === "__proto__") continue;
        const o = wr(t[i], e[i]);
        if (!o.valid) return { valid: false, mergeErrorPath: [i, ...o.mergeErrorPath] };
        r[i] = o.data;
      }
      return { valid: true, data: r };
    }
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length) return { valid: false, mergeErrorPath: [] };
      const s = [];
      for (let n = 0; n < t.length; n++) {
        const r = t[n], i = e[n], o = wr(r, i);
        if (!o.valid) return { valid: false, mergeErrorPath: [n, ...o.mergeErrorPath] };
        s.push(o.data);
      }
      return { valid: true, data: s };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function Lo(t, e, s) {
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
    const c = wr(e.value, s.value);
    if (!c.valid) {
      if (Ue(t)) return t;
      throw new Error("Unmergable intersection. Error path: ".concat(JSON.stringify(c.mergeErrorPath)));
    }
    return t.value = c.data, t;
  }
  const uf = M("$ZodTuple", (t, e) => {
    re.init(t, e);
    const s = e.items, n = Me.memoizer;
    n == null ? void 0 : n.attach(t), t._zod.parse = (r, i) => {
      const o = r.value;
      if (!Array.isArray(o)) return r.issues.push({ input: o, inst: t, expected: "tuple", code: "invalid_type" }), r;
      r.value = n ? n.alloc(t, r, [], i) : [];
      const a = [], c = Co(s, "optin"), l = Co(s, "optout");
      if (!e.rest) {
        if (o.length < c) return r.issues.push({ code: "too_small", minimum: c, inclusive: true, input: o, inst: t, origin: "array" }), r;
        o.length > s.length && r.issues.push({ code: "too_big", maximum: s.length, inclusive: true, input: o, inst: t, origin: "array" });
      }
      const d = new Array(s.length), h = e.rest ? i == null ? void 0 : i.abortEarly : void 0;
      let p = false;
      for (let f = 0; f < s.length; f++) {
        const m = s[f]._zod.run({ value: o[f], issues: [] }, i);
        m instanceof Promise ? a.push(m.then((k) => {
          d[f] = k;
        })) : (d[f] = m, h && !p && m.issues.length && (p = Ue(m)));
      }
      if (e.rest && !p) {
        let f = s.length - 1;
        const m = o.slice(s.length);
        let k = r.issues.length;
        for (const g of m) {
          if (h && r.issues.length !== k) {
            if (Ue(r, k)) break;
            k = r.issues.length;
          }
          f++;
          const b = e.rest._zod.run({ value: g, issues: [] }, i);
          b instanceof Promise ? a.push(b.then((v) => Zo(v, r, f))) : Zo(b, r, f);
        }
      }
      return a.length ? Promise.all(a).then(() => Uo(d, r, s, o, l)) : Uo(d, r, s, o, l);
    };
  });
  function Co(t, e) {
    for (let s = t.length - 1; s >= 0; s--) if (!(e === "optin" ? t[s]._zod.optin !== void 0 : t[s]._zod.optout === "optional")) return s + 1;
    return 0;
  }
  function Zo(t, e, s) {
    t.issues.length && e.issues.push(...ht(s, t.issues)), e.value[s] = t.value;
  }
  function Uo(t, e, s, n, r) {
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
  const hf = M("$ZodRecord", (t, e) => {
    re.init(t, e);
    const s = Me.memoizer;
    s == null ? void 0 : s.attach(t), t._zod.parse = (n, r) => {
      const i = n.value;
      if (!Lt(i)) return n.issues.push({ expected: "record", code: "invalid_type", input: i, inst: t }), n;
      const o = [], a = e.keyType._zod.values;
      if (a && !e.partial) {
        n.value = s ? s.alloc(t, n, {}, r) : {};
        const c = /* @__PURE__ */ new Set();
        for (const d of a) if (typeof d == "string" || typeof d == "number" || typeof d == "symbol") {
          if (c.add(typeof d == "number" ? d.toString() : d), d === "__proto__") continue;
          const h = e.keyType._zod.run({ value: d, issues: [] }, r);
          if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (h.issues.length) {
            n.issues.push({ code: "invalid_key", origin: "record", issues: h.issues.map((m) => pt(m, r, qe())), input: d, path: [d], inst: t });
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
          if (typeof l == "string" && gr.test(l) && d.issues.length) {
            const m = e.keyType._zod.run({ value: Number(l), issues: [] }, r);
            if (m instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            m.issues.length === 0 && (d = m);
          }
          if (d.issues.length) {
            e.mode === "loose" ? n.value[l] = i[l] : a ? (c = c != null ? c : [], c.push(l)) : n.issues.push({ code: "invalid_key", origin: "record", issues: d.issues.map((m) => pt(m, r, qe())), input: l, path: [l], inst: t });
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
  }), pf = M("$ZodEnum", (t, e) => {
    re.init(t, e);
    const s = tr(e.entries), n = new Set(s);
    t._zod.values = n, X(t, "pattern", (r) => {
      const i = tr(r.def.entries).filter((o) => Bu.has(typeof o));
      return new RegExp(i.length ? "^(".concat(i.map((o) => Ct(o.toString())).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (r, i) => {
      const o = r.value;
      return n.has(o) || r.issues.push({ code: "invalid_value", values: s, input: o, inst: t }), r;
    };
  }), ff = M("$ZodLiteral", (t, e) => {
    re.init(t, e);
    const s = new Set(e.values);
    t._zod.values = s, X(t, "pattern", (n) => {
      const r = n.def.values;
      return new RegExp(r.length ? "^(".concat(r.map((i) => typeof i == "string" ? Ct(i) : i ? Ct(i.toString()) : String(i)).join("|"), ")$") : "^[^\\s\\S]$");
    }), t._zod.parse = (n, r) => {
      const i = n.value;
      return s.has(i) || n.issues.push({ code: "invalid_value", values: e.values, input: i, inst: t }), n;
    };
  }), mf = M("$ZodTransform", (t, e) => {
    var _a3;
    re.init(t, e), t._zod.optin = "optional", (_a3 = Me.memoizer) == null ? void 0 : _a3.guard(t), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new ko(t.constructor.name);
      const r = e.transform(s.value, s);
      if (n.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((o) => (s.value = o, s));
      if (r instanceof Promise) throw new jt();
      return s.value = r, s;
    };
  });
  function Fo(t, e) {
    return t.value = e.issues.length ? void 0 : e.value, t;
  }
  const Bo = M("$ZodOptional", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? /* @__PURE__ */ new Set([...n, void 0]) : void 0;
    }), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(nr(n.source), ")?$")) : void 0;
    }), t._zod.parse = (s, n) => {
      if (s.value === void 0) {
        if (e.innerType._zod.optin !== "defaulted") return s;
        const r = e.innerType._zod.run({ value: s.value, issues: [] }, n);
        return r instanceof Promise ? r.then((i) => Fo(s, i)) : Fo(s, r);
      }
      return e.innerType._zod.run(s, n);
    };
  }), gf = M("$ZodExactOptional", (t, e) => {
    Bo.init(t, e), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "pattern", (s) => s.def.innerType._zod.pattern), t._zod.parse = (s, n) => e.innerType._zod.run(s, n);
  }), kf = M("$ZodNullable", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "pattern", (s) => {
      const n = s.def.innerType._zod.pattern;
      return n ? new RegExp("^(".concat(nr(n.source), "|null)$")) : void 0;
    }), X(t, "values", (s) => s.def.innerType._zod.values ? /* @__PURE__ */ new Set([...s.def.innerType._zod.values, null]) : void 0), t._zod.parse = (s, n) => s.value === null ? s : e.innerType._zod.run(s, n);
  }), bf = M("$ZodDefault", (t, e) => {
    re.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      if (s.value === void 0) return s.value = e.defaultValue, s;
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => Ko(i, e)) : Ko(r, e);
    };
  });
  function Ko(t, e) {
    return t.value === void 0 && (t.value = e.defaultValue), t;
  }
  const vf = M("$ZodPrefault", (t, e) => {
    re.init(t, e), t._zod.optin = "defaulted", X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => (n.direction === "backward" || s.value === void 0 && (s.value = e.defaultValue), e.innerType._zod.run(s, n));
  }), wf = M("$ZodNonOptional", (t, e) => {
    re.init(t, e), X(t, "values", (s) => {
      const n = s.def.innerType._zod.values;
      return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
    }), t._zod.parse = (s, n) => {
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => qo(i, t)) : qo(r, t);
    };
  });
  function qo(t, e) {
    return !t.issues.length && t.value === void 0 && t.issues.push({ code: "invalid_type", expected: "nonoptional", input: t.value, inst: e }), t;
  }
  function Go(t, e, s, n) {
    return e.issues.length ? (t.value = s.catchValue({ ...e, value: t.value, error: { issues: e.issues.map((r) => pt(r, n, qe())) }, input: t.value }), t) : (t.value = e.value, e.memo && (t.memo = true), t);
  }
  const yf = M("$ZodCatch", (t, e) => {
    re.init(t, e), X(t, "optin", (s) => s.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), X(t, "optout", (s) => s.def.innerType._zod.optout), X(t, "values", (s) => s.def.innerType._zod.values), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const r = e.innerType._zod.run({ value: s.value, issues: [] }, n);
      return r instanceof Promise ? r.then((i) => Go(s, i, e, n)) : Go(s, r, e, n);
    };
  }), Wo = M("$ZodPipe", (t, e) => {
    re.init(t, e), X(t, "values", (s) => s.def.in._zod.values), X(t, "optin", (s) => s.def.in._zod.optin), X(t, "optout", (s) => s.def.out._zod.optout), X(t, "propValues", (s) => s.def.in._zod.propValues), t._zod.parse = (s, n) => {
      if (n.direction === "backward") {
        const i = e.out._zod.run(s, n);
        return i instanceof Promise ? i.then((o) => Js(o, e.in, n)) : Js(i, e.in, n);
      }
      const r = e.in._zod.run(s, n);
      return r instanceof Promise ? r.then((i) => Js(i, e.out, n)) : Js(r, e.out, n);
    };
  });
  function Js(t, e, s) {
    return t.issues.some((n) => n.code !== "unrecognized_keys") ? (t.aborted = true, t) : e._zod.run({ value: t.value, issues: t.issues }, s);
  }
  const Sf = M("$ZodPreprocess", (t, e) => {
    Wo.init(t, e);
  }), $f = M("$ZodReadonly", (t, e) => {
    re.init(t, e), X(t, "propValues", (s) => s.def.innerType._zod.propValues), X(t, "values", (s) => s.def.innerType._zod.values), X(t, "optin", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), X(t, "optout", (s) => {
      var _a3, _b3;
      return (_b3 = (_a3 = s.def.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), t._zod.parse = (s, n) => {
      if (n.direction === "backward") return e.innerType._zod.run(s, n);
      const r = e.innerType._zod.run(s, n);
      return r instanceof Promise ? r.then(Ho) : Ho(r);
    };
  });
  function Ho(t) {
    return t.memo || (t.value = Object.freeze(t.value)), t;
  }
  const zf = M("$ZodLazy", (t, e) => {
    re.init(t, e), Lu(t._zod, "innerType", () => {
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
  }), _f = M("$ZodCustom", (t, e) => {
    ze.init(t, e), re.init(t, e), t._zod.parse = (s, n) => s, t._zod.check = (s) => {
      const n = s.value, r = e.fn(n);
      if (r instanceof Promise) return r.then((i) => Vo(i, s, n, t));
      Vo(r, s, n, t);
    };
  });
  function Vo(t, e, s, n) {
    var _a3;
    if (!t) {
      const r = { code: "custom", input: s, inst: n, path: [...(_a3 = n._zod.def.path) != null ? _a3 : []], continue: !n._zod.def.abort };
      n._zod.def.params && (r.params = n._zod.def.params), e.issues.push(as(r));
    }
  }
  class jf extends Error {
    constructor() {
      super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
    }
  }
  const yr = "~memo", Yo = [];
  function Jo(t) {
    return t !== null && typeof t == "object";
  }
  function Sr(t) {
    return t.map((e) => e.path ? { ...e, path: e.path.slice() } : { ...e });
  }
  const Qo = /* @__PURE__ */ new WeakMap(), cs = 0, Qs = 1, ls = 2;
  function Xs(t, e, s) {
    var _a3;
    const n = Qo.get(t);
    if (n !== void 0) return n ? ls : cs;
    if (e.has(t)) return ls;
    e.add(t);
    let r = cs;
    const i = (d) => {
      if (r !== ls && (d == null ? void 0 : d._zod)) {
        const h = Xs(d, e);
        h > r && (r = h);
      }
    }, o = (d, h) => {
      var _a4;
      let p = cs;
      for (const f of Reflect.ownKeys(d)) {
        const m = Object.getOwnPropertyDescriptor(d, f);
        if (!m.enumerable) continue;
        const k = m.get ? Qs : ((_a4 = m.value) == null ? void 0 : _a4._zod) ? Xs(m.value, e) : cs;
        k > p && (p = k);
      }
      return p;
    }, a = (d) => {
      d > r && (r = d);
    }, c = t._zod.def;
    switch (c.type) {
      case "object": {
        const d = rr(c);
        a(d ? o(d) : Qs), i(c.catchall);
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
        a(d ? Xs(d, e) : Qs);
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
    return e.delete(t), xf(t, r);
  }
  function xf(t, e) {
    return e !== Qs && Qo.set(t, e === ls), e;
  }
  function Ef(t, e) {
    let s = t.buckets.get(e);
    return s || (s = /* @__PURE__ */ new WeakMap(), t.buckets.set(e, s)), s;
  }
  let en;
  const tn = [], Af = { alloc(t, e, s) {
    const n = en;
    if (!n) return s;
    en = void 0;
    const r = { value: s, issues: null };
    return n.set(e.value, r), tn.push(r), s;
  }, guard(t) {
    var _a3;
    var e;
    (_a3 = (e = t._zod).deferred) != null ? _a3 : e.deferred = [], t._zod.deferred.push(() => {
      const s = t._zod.parse, n = (r, i) => {
        if (i.direction !== "backward" && If(i, r.value)) throw new jf();
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
          const b = Xs(t, /* @__PURE__ */ new Set());
          if (b === cs) return t._zod.parse = o, t._zod.run === a && (t._zod.run = o), o(c, l);
          b === ls || n ? s = true : n = true;
        }
        const d = c.value;
        if (!Jo(d)) return o(c, l);
        let h = l[yr];
        h || (h = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, l[yr] = h);
        let p;
        r === l ? p = i : (p = Ef(h, t), r = l, i = p);
        const f = p.get(d);
        if (f) return c.value = f.value, f.issues ? f.issues.length && c.issues.push(...Sr(f.issues)) : (c.memo = true, (_a4 = h.backEdges) != null ? _a4 : h.backEdges = /* @__PURE__ */ new WeakSet(), h.backEdges.add(f.value)), c;
        en = p;
        const m = tn.length, k = o(c, l);
        en = void 0;
        const g = tn.length > m ? tn.pop() : void 0;
        return k instanceof Promise ? k.then((b) => (g && (g.issues = b.issues.length ? Sr(b.issues) : Yo), b)) : (g && (g.issues = k.issues.length ? Sr(k.issues) : Yo), k);
      };
      t._zod.parse = a, t._zod.run === o && (t._zod.run = a);
    });
  } };
  function Tf() {
    return Af;
  }
  function If(t, e) {
    var _a3;
    const s = (_a3 = t[yr]) == null ? void 0 : _a3.backEdges;
    return s !== void 0 && Jo(e) && s.has(e);
  }
  const Mf = () => {
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
          const o = r(i.expected), a = eh(i.input), c = r(a, i.input);
          return "Invalid input: expected ".concat(o, ", received ").concat(c);
        }
        case "invalid_value":
          return i.values.length === 1 ? "Invalid input: expected ".concat(ao(i.values[0])) : "Invalid option: expected one of ".concat(to(i.values, "|"));
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
          return "Unrecognized key".concat(i.keys.length > 1 ? "s" : "", ": ").concat(to(i.keys, ", "));
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
  function Of() {
    return { localeError: Mf() };
  }
  var Xo;
  class Nf {
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
  function Pf() {
    return new Nf();
  }
  (_b2 = (Xo = globalThis).__zod_globalRegistry) != null ? _b2 : Xo.__zod_globalRegistry = Pf();
  const ds = globalThis.__zod_globalRegistry;
  function ea(t) {
    return t.checks && (t.checks = [...t.checks]), t;
  }
  function Rf(t, e) {
    return new t(ea({ type: "string", ...G(e) }));
  }
  function Df(t, e) {
    return new t({ type: "string", format: "email", check: "string_format", abort: false, ...G(e) });
  }
  function Lf(t, e) {
    return new t({ type: "string", format: "guid", check: "string_format", abort: false, ...G(e) });
  }
  function Cf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, ...G(e) });
  }
  function Zf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...G(e) });
  }
  function Uf(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...G(e) });
  }
  function Ff(t, e) {
    return new t({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...G(e) });
  }
  function ta(t, e) {
    return new t({ type: "string", format: "url", check: "string_format", abort: false, ...G(e) });
  }
  function Bf(t, e) {
    return new t({ type: "string", format: "emoji", check: "string_format", abort: false, ...G(e) });
  }
  function Kf(t, e) {
    return new t({ type: "string", format: "nanoid", check: "string_format", abort: false, ...G(e) });
  }
  function qf(t, e) {
    return new t({ type: "string", format: "cuid", check: "string_format", abort: false, ...G(e) });
  }
  function Gf(t, e) {
    return new t({ type: "string", format: "cuid2", check: "string_format", abort: false, ...G(e) });
  }
  function Wf(t, e) {
    return new t({ type: "string", format: "ulid", check: "string_format", abort: false, ...G(e) });
  }
  function Hf(t, e) {
    return new t({ type: "string", format: "xid", check: "string_format", abort: false, ...G(e) });
  }
  function Vf(t, e) {
    return new t({ type: "string", format: "ksuid", check: "string_format", abort: false, ...G(e) });
  }
  function Yf(t, e) {
    return new t({ type: "string", format: "ipv4", check: "string_format", abort: false, ...G(e) });
  }
  function Jf(t, e) {
    return new t({ type: "string", format: "ipv6", check: "string_format", abort: false, ...G(e) });
  }
  function Qf(t, e) {
    return new t({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...G(e) });
  }
  function Xf(t, e) {
    return new t({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...G(e) });
  }
  function em(t, e) {
    return new t({ type: "string", format: "base64", check: "string_format", abort: false, ...G(e) });
  }
  function tm(t, e) {
    return new t({ type: "string", format: "base64url", check: "string_format", abort: false, ...G(e) });
  }
  function sm(t, e) {
    return new t({ type: "string", format: "e164", check: "string_format", abort: false, ...G(e) });
  }
  function nm(t, e) {
    return new t({ type: "string", format: "jwt", check: "string_format", abort: false, ...G(e) });
  }
  function rm(t, e) {
    return new t({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...G(e) });
  }
  function im(t, e) {
    return new t({ type: "string", format: "date", check: "string_format", ...G(e) });
  }
  function om(t, e) {
    return new t({ type: "string", format: "time", check: "string_format", precision: null, ...G(e) });
  }
  function am(t, e) {
    return new t({ type: "string", format: "duration", check: "string_format", ...G(e) });
  }
  function cm(t, e) {
    return new t(ea({ type: "number", checks: [], ...G(e) }));
  }
  function lm(t, e) {
    return new t({ type: "number", check: "number_format", abort: false, format: "safeint", ...G(e) });
  }
  function dm(t, e) {
    return new t({ type: "boolean", ...G(e) });
  }
  function um(t) {
    return new t({ type: "unknown" });
  }
  function hm(t, e) {
    return new t({ type: "never", ...G(e) });
  }
  function sa(t, e) {
    return new So({ check: "less_than", ...G(e), value: t, inclusive: false });
  }
  function $r(t, e) {
    return new So({ check: "less_than", ...G(e), value: t, inclusive: true });
  }
  function na(t, e) {
    return new $o({ check: "greater_than", ...G(e), value: t, inclusive: false });
  }
  function zr(t, e) {
    return new $o({ check: "greater_than", ...G(e), value: t, inclusive: true });
  }
  function ra(t, e) {
    return new rp({ check: "multiple_of", ...G(e), value: t });
  }
  function ia(t, e) {
    return new op({ check: "max_length", ...G(e), maximum: t });
  }
  function sn(t, e) {
    return new ap({ check: "min_length", ...G(e), minimum: t });
  }
  function oa(t, e) {
    return new cp({ check: "length_equals", ...G(e), length: t });
  }
  function pm(t, e) {
    return new lp({ check: "string_format", format: "regex", ...G(e), pattern: t });
  }
  function fm(t) {
    return new dp({ check: "string_format", format: "lowercase", ...G(t) });
  }
  function mm(t) {
    return new up({ check: "string_format", format: "uppercase", ...G(t) });
  }
  function gm(t, e) {
    return new hp({ check: "string_format", format: "includes", ...G(e), includes: t });
  }
  function km(t, e) {
    return new pp({ check: "string_format", format: "starts_with", ...G(e), prefix: t });
  }
  function bm(t, e) {
    return new fp({ check: "string_format", format: "ends_with", ...G(e), suffix: t });
  }
  function Zt(t) {
    return new mp({ check: "overwrite", tx: t });
  }
  function vm(t) {
    return Zt((e) => e.normalize(t));
  }
  function wm() {
    return Zt((t) => t.trim());
  }
  function ym() {
    return Zt((t) => t.toLowerCase());
  }
  function Sm() {
    return Zt((t) => t.toUpperCase());
  }
  function $m() {
    return Zt((t) => Uu(t));
  }
  function zm(t, e, s) {
    return new t({ type: "array", element: e, ...G(s) });
  }
  function _m(t, e, s) {
    return new t({ type: "custom", check: "custom", fn: e, ...G(s) });
  }
  function jm(t, e) {
    const s = xm((n) => (n.addIssue = (r) => {
      var _a3, _b3, _c2;
      if (typeof r == "string") n.issues.push(as(r, n.value, s._zod.def));
      else {
        const i = r;
        i.fatal && (i.continue = false), (_a3 = i.code) != null ? _a3 : i.code = "custom", "input" in i || (i.input = n.value), (_b3 = i.inst) != null ? _b3 : i.inst = s, (_c2 = i.continue) != null ? _c2 : i.continue = !s._zod.def.abort, n.issues.push(as(i));
      }
    }, t(n.value, n)), e);
    return s;
  }
  function xm(t, e) {
    const s = new ze({ check: "custom", ...G(e) });
    return s._zod.check = t, s;
  }
  function us(t, ...e) {
    for (const s of e) for (const n of Reflect.ownKeys(s)) Object.prototype.propertyIsEnumerable.call(s, n) && Qe(t, n, s[n]);
    return t;
  }
  function aa(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
    let e = (_a3 = t == null ? void 0 : t.target) != null ? _a3 : "draft-2020-12";
    return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), { processors: (_b3 = t.processors) != null ? _b3 : {}, metadataRegistry: (_c2 = t == null ? void 0 : t.metadata) != null ? _c2 : ds, target: e, unrepresentable: (_d2 = t == null ? void 0 : t.unrepresentable) != null ? _d2 : "throw", override: (_e2 = t == null ? void 0 : t.override) != null ? _e2 : (() => {
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
    return c && us(o.schema, c), e.io === "input" && we(t) && (delete o.schema.examples, delete o.schema.default), e.io === "input" && "_prefault" in o.schema && ((_c2 = (n = o.schema).default) != null ? _c2 : n.default = o.schema._prefault), delete o.schema._prefault, e.seen.get(t).schema;
  }
  function ca(t) {
    return t.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function la(t, e) {
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
        return o[1].defId = f, { defId: f, ref: "".concat(p("__shared"), "#/").concat(a, "/").concat(ca(f)) };
      }
      const c = "#", l = "".concat(c, "/").concat(a, "/");
      if (o[1] === s && !o[1].schema.id) return { ref: c };
      const d = (_e2 = o[1].schema.id) != null ? _e2 : "__schema".concat(t.counter++);
      return { defId: d, ref: l + ca(d) };
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
  function da(t) {
    const e = t.anyOf;
    if (!Array.isArray(e) || e.length === 0 || t.type !== void 0) return;
    const s = [];
    for (const n of e) {
      if (!n || typeof n != "object") return;
      da(n);
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
  const ua = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), ha = ["oneOf", "anyOf"];
  function pa(t) {
    const e = t.additionalProperties;
    return e === void 0 || e === false || typeof e != "object" || e === null ? null : Object.keys(e).length ? e : null;
  }
  function _r(t) {
    var _a3, _b3, _c2, _d2;
    const e = [];
    for (const i of t) {
      if (typeof i != "object" || i.type !== "object") return null;
      for (const o in i) if (!ua.has(o)) return null;
      e.push(i);
    }
    const s = {}, n = /* @__PURE__ */ new Set();
    for (const i of e) {
      for (const o in i.properties) {
        if (Object.prototype.hasOwnProperty.call(s, o)) continue;
        const a = [];
        for (const l of e) {
          const d = (_b3 = (_a3 = l.properties) == null ? void 0 : _a3[o]) != null ? _b3 : pa(l);
          d != null && (a.some((h) => JSON.stringify(h) === JSON.stringify(d)) || a.push(d));
        }
        const c = a.length === 1 ? a[0] : (_c2 = _r(a)) != null ? _c2 : { allOf: a };
        Qe(s, o, c);
      }
      for (const o of (_d2 = i.required) != null ? _d2 : []) n.add(o);
    }
    const r = { type: "object", properties: s };
    if (n.size && (r.required = [...n]), e.every((i) => i.additionalProperties === false)) r.additionalProperties = false;
    else {
      const i = [];
      for (const o of e) {
        const a = pa(o);
        a && !i.some((c) => JSON.stringify(c) === JSON.stringify(a)) && i.push(a);
      }
      i.length === 1 ? r.additionalProperties = i[0] : i.length > 1 && (r.additionalProperties = { allOf: i });
    }
    return r;
  }
  function Em(t) {
    const e = t.allOf;
    if (!Array.isArray(e) || e.length < 2) return;
    for (const r of ua) if (r in t) return;
    const s = e.filter((r) => ha.some((i) => Array.isArray(r[i])));
    let n = null;
    if (!s.length) n = _r(e);
    else {
      const r = s[0], i = ha.find((c) => Array.isArray(r[c]));
      if (Object.keys(r).length !== 1) return;
      const o = e.filter((c) => c !== r), a = r[i].map((c) => _r([...o, c]));
      if (a.some((c) => !c)) return;
      n = { [i]: a };
    }
    n && (delete t.allOf, us(t, n));
  }
  function fa(t, e) {
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
        if (m.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (l.allOf = (_b4 = l.allOf) != null ? _b4 : [], l.allOf.push(m)) : us(l, m), us(l, d), a._zod.parent === h) for (const g in l) g === "$ref" || g === "allOf" || g in d || delete l[g];
        if (m.$ref && f.def) for (const g in l) g === "$ref" || g === "allOf" || g in f.def && JSON.stringify(l[g]) === JSON.stringify(f.def[g]) && delete l[g];
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
      if (t.target !== "openapi-3.0") for (const a of t.seen.entries()) da((_a3 = a[1].def) != null ? _a3 : a[1].schema);
      for (const a of t.deferred) a();
      if (t.intersections.length) {
        const a = /* @__PURE__ */ new Map();
        for (const c of t.seen.values()) for (const l of [c.schema, c.def]) {
          const d = l == null ? void 0 : l.allOf;
          if (!Array.isArray(d)) continue;
          const h = a.get(d);
          h ? h.push(l) : a.set(d, [l]);
        }
        for (const c of t.intersections) for (const l of (_b3 = a.get(c)) != null ? _b3 : []) Em(l);
      }
    }
    const r = {};
    if (t.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : t.target, (_c2 = t.external) == null ? void 0 : _c2.uri) {
      const a = (_d2 = t.external.registry.get(e)) == null ? void 0 : _d2.id;
      if (!a) throw new Error("Schema is missing an `id` property");
      r.$id = t.external.uri(a);
    }
    us(r, s.defId ? s.schema : (_e2 = s.def) != null ? _e2 : s.schema);
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
      return Object.defineProperty(a, "~standard", { value: { ...e["~standard"], jsonSchema: { input: nn(e, "input", t.processors), output: nn(e, "output", t.processors) } }, enumerable: false, writable: false }), a;
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
  const Am = (t, e = {}) => (s) => {
    const n = aa({ ...s, processors: e });
    return le(t, n), la(n, t), fa(n, t);
  }, nn = (t, e, s = {}) => (n) => {
    const { libraryOptions: r, target: i } = n != null ? n : {}, o = aa({ ...r != null ? r : {}, target: i, io: e, processors: s });
    return le(t, o), la(o, t), fa(o, t);
  }, Ut = (t, e, s) => {
    (t[e] === void 0 || s > t[e]) && (t[e] = s);
  }, Ft = (t, e, s) => {
    (t[e] === void 0 || s < t[e]) && (t[e] = s);
  }, ma = (t, e) => {
    Ut(t, "minimum", e), Ft(t, "maximum", e);
  }, ga = (t, e) => {
    var _a3;
    (_a3 = t.multipleOf) != null ? _a3 : t.multipleOf = [], t.multipleOf.includes(e) || t.multipleOf.push(e);
  }, ka = (t, e) => {
    var _a3;
    (_a3 = t.patterns) != null ? _a3 : t.patterns = /* @__PURE__ */ new Set(), t.patterns.add(e);
  }, ba = (t, e) => {
    t.mime = t.mime ? t.mime.filter((s) => e.includes(s)) : [...e];
  }, va = (t, e) => {
    t.format = e, e.includes("int") && (t.isInt = true);
  }, wa = (t, e) => Ut(t, "minimum", e.minimum), ya = (t, e) => Ft(t, "maximum", e.maximum), Sa = (t) => (e, s) => {
    va(e, s.format);
    const [n, r] = t[s.format];
    Ut(e, "minimum", n), Ft(e, "maximum", r);
  }, Tm = { greater_than: (t, e) => Ut(t, e.inclusive ? "minimum" : "exclusiveMinimum", e.value), less_than: (t, e) => Ft(t, e.inclusive ? "maximum" : "exclusiveMaximum", e.value), multiple_of: (t, e) => ga(t, e.value), number_format: Sa(co), bigint_format: Sa(qu), min_length: wa, max_length: ya, length_equals: (t, e) => ma(t, e.length), min_size: wa, max_size: ya, size_equals: (t, e) => ma(t, e.size), string_format: (t, e) => {
    va(t, e.format), e.pattern && ka(t, e.pattern), (e.format === "base64" || e.format === "base64url") && (t.contentEncoding = e.format), (e.local || e.precision === -1) && (t.laxFormat = true);
  }, mime_type: (t, e) => ba(t, e.mime) };
  function Oe(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = {}, s = t._zod.def, n = t._zod.traits.has("$ZodCheck") ? [t, ...(_a3 = s.checks) != null ? _a3 : []] : (_b3 = s.checks) != null ? _b3 : [];
    for (const i of n) (_c2 = Tm[i._zod.def.check]) == null ? void 0 : _c2.call(Tm, e, i._zod.def);
    const r = t._zod.bag;
    r.minimum !== void 0 && Ut(e, "minimum", r.minimum), r.exclusiveMinimum !== void 0 && Ut(e, "exclusiveMinimum", r.exclusiveMinimum), r.maximum !== void 0 && Ft(e, "maximum", r.maximum), r.exclusiveMaximum !== void 0 && Ft(e, "exclusiveMaximum", r.exclusiveMaximum), r.multipleOf !== void 0 && ga(e, r.multipleOf), r.format !== void 0 && ((_d2 = e.format) != null ? _d2 : e.format = r.format, r.format.includes("int") && (e.isInt = true)), r.mime && ba(e, r.mime);
    for (const i of (_e2 = r.patterns) != null ? _e2 : []) ka(e, i);
    return e;
  }
  const Im = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, Mm = /* @__PURE__ */ new Map([[Io, qh], [vr, Gh]]), $a = (t) => {
    var _a3;
    return (_a3 = Mm.get(t)) != null ? _a3 : t;
  }, Om = (t, e, s, n) => {
    var _a3;
    const r = s;
    r.type = "string";
    const { minimum: i, maximum: o, format: a, patterns: c, contentEncoding: l, laxFormat: d } = Oe(t);
    if (typeof i == "number" && (r.minLength = i), typeof o == "number" && (r.maxLength = o), a && (r.format = (_a3 = Im[a]) != null ? _a3 : a, r.format === "" && delete r.format, (a === "time" || d) && delete r.format), l && (r.contentEncoding = l), c && c.size > 0) {
      const h = [...c].map($a);
      h.length === 1 ? r.pattern = h[0].source : h.length > 1 && (r.allOf = [...h.map((p) => ({ ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? { type: "string" } : {}, pattern: p.source }))]);
    }
  }, Nm = (t, e, s, n) => {
    var _a3;
    const r = s, { minimum: i, maximum: o, multipleOf: a, exclusiveMaximum: c, exclusiveMinimum: l, isInt: d } = Oe(t);
    r.type = d ? "integer" : "number";
    const h = typeof l == "number" && l >= (i != null ? i : Number.NEGATIVE_INFINITY), p = typeof c == "number" && c <= (o != null ? o : Number.POSITIVE_INFINITY), f = e.target === "draft-04" || e.target === "openapi-3.0";
    if (h ? f ? (r.minimum = l, r.exclusiveMinimum = true) : r.exclusiveMinimum = l : typeof i == "number" && (r.minimum = i), p ? f ? (r.maximum = c, r.exclusiveMaximum = true) : r.exclusiveMaximum = c : typeof o == "number" && (r.maximum = o), a) {
      const m = /* @__PURE__ */ new Set();
      for (const b of a) Number.isFinite(b) && b !== 0 ? m.add(Math.abs(b)) : gt(t, e, r, n, "A multipleOf divisor of ".concat(b, " cannot be represented in JSON Schema"));
      const [k, ...g] = m;
      k !== void 0 && (r.multipleOf = k), g.length && (r.allOf = [...(_a3 = r.allOf) != null ? _a3 : [], ...g.map((b) => ({ multipleOf: b }))]);
    }
  }, Pm = (t, e, s, n) => {
    s.type = "boolean";
  }, Rm = (t, e, s, n) => {
    s.not = {};
  }, Dm = (t, e, s, n) => {
  }, Lm = (t, e, s, n) => {
    const r = t._zod.def, i = tr(r.entries);
    if (i.length === 0) {
      s.not = {};
      return;
    }
    i.every((o) => typeof o == "number") && (s.type = "number"), i.every((o) => typeof o == "string") && (s.type = "string"), s.enum = i;
  }, Cm = (t, e, s, n) => {
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
  }, Zm = (t, e, s, n) => {
    gt(t, e, s, n, "Custom types cannot be represented in JSON Schema");
  }, Um = (t, e, s, n) => {
    gt(t, e, s, n, "Transforms cannot be represented in JSON Schema");
  }, Fm = (t, e, s, n) => {
    const r = s, i = t._zod.def, { minimum: o, maximum: a } = Oe(t);
    typeof o == "number" && (r.minItems = o), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = le(i.element, e, { ...n, path: [...n.path, "items"] });
  };
  function hs(t) {
    const e = t._zod.def;
    return e.type === "pipe" && e.in._zod.traits.has("$ZodTransform") ? hs(e.out) : e.type === "catch" ? hs(e.innerType) : t._zod.optin;
  }
  const Bm = (t, e, s, n) => {
    var _a3;
    const r = s, i = t._zod.def, o = i.shape;
    if (Object.getOwnPropertySymbols(o).length && gt(t, e, r, n, "Symbol keys cannot be represented in JSON Schema")) return;
    r.type = "object", r.properties = {};
    for (const l in o) Qe(r.properties, l, le(o[l], e, { ...n, path: [...n.path, "properties", l] }));
    const c = [];
    for (const l of Object.keys(o)) {
      const d = i.shape[l];
      (e.io === "input" ? hs(d) === void 0 : d._zod.optout === void 0) && c.push(l);
    }
    c.length > 0 && (r.required = c), ((_a3 = i.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? r.additionalProperties = false : i.catchall ? i.catchall && (r.additionalProperties = le(i.catchall, e, { ...n, path: [...n.path, "additionalProperties"] })) : e.io === "output" && (r.additionalProperties = false);
  }, Km = (t, e, s, n) => {
    const r = t._zod.def, i = r.inclusive === false, o = r.options.map((a, c) => le(a, e, { ...n, path: [...n.path, i ? "oneOf" : "anyOf", c] }));
    i ? s.oneOf = o : s.anyOf = o;
  }, qm = (t, e, s, n) => {
    const r = t._zod.def, i = le(r.left, e, { ...n, path: [...n.path, "allOf", 0] }), o = le(r.right, e, { ...n, path: [...n.path, "allOf", 1] }), a = (l) => "allOf" in l && Object.keys(l).length === 1, c = [...a(i) ? i.allOf : [i], ...a(o) ? o.allOf : [o]];
    s.allOf = c, e.intersections.push(c);
  }, Gm = (t, e, s, n) => {
    const r = s, i = t._zod.def;
    r.type = "array";
    const o = e.target === "draft-2020-12" ? "prefixItems" : "items", a = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems", c = i.items.map((k, g) => le(k, e, { ...n, path: [...n.path, o, g] })), l = i.rest ? le(i.rest, e, { ...n, path: [...n.path, a, ...e.target === "openapi-3.0" ? [i.items.length] : []] }) : null;
    let d = i.items.length;
    for (; d > 0; ) {
      const k = i.items[d - 1];
      if (!(e.io === "input" ? hs(k) !== void 0 : k._zod.optout === "optional")) break;
      d--;
    }
    const h = i.items.length, p = !i.rest;
    e.target === "draft-2020-12" ? (r.prefixItems = c, p ? r.items = false : l && (r.items = l), d > 0 && (r.minItems = d), p && (r.maxItems = h)) : e.target === "openapi-3.0" ? (r.items = { anyOf: c }, l && r.items.anyOf.push(l), d > 0 && (r.minItems = d), p && (r.maxItems = h)) : (r.items = c, p ? r.additionalItems = false : l && (r.additionalItems = l), d > 0 && (r.minItems = d), p && (r.maxItems = h));
    const { minimum: f, maximum: m } = Oe(t);
    typeof f == "number" && (r.minItems = f), typeof m == "number" && (r.maxItems = m);
  };
  function jr(t, e, s) {
    var _a3, _b3;
    if (e.$ref) {
      if (s.has(e)) return e;
      s.add(e);
      const m = (_a3 = t.get(e)) == null ? void 0 : _a3.def;
      if (!m) return e;
      const k = jr(t, m, s);
      return k === m ? e : k;
    }
    for (const m of ["anyOf", "oneOf"]) {
      const k = e[m];
      if (!Array.isArray(k)) continue;
      const g = k.map((b) => jr(t, b, s));
      g.some((b, v) => b !== k[v]) && (e = { ...e, [m]: g });
    }
    const n = Array.isArray(e.type) ? e.type : [e.type], r = !n.includes("string") && n.some((m) => m === "number" || m === "integer"), i = (_b3 = e.enum) != null ? _b3 : e.const !== void 0 ? [e.const] : void 0;
    if (!r && !(i == null ? void 0 : i.some((m) => typeof m == "number"))) return e;
    const { minimum: o, maximum: a, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: d, format: h, id: p, ...f } = e;
    return f.enum ? f.enum = f.enum.map((m) => typeof m == "number" ? String(m) : m) : typeof f.const == "number" && (f.const = String(f.const)), r && (f.type = "string", i || (f.pattern = (n.includes("number") ? gr : ep).source)), f;
  }
  const xr = /* @__PURE__ */ new WeakMap();
  function Wm(t) {
    var _a3, _b3, _c2;
    const e = /* @__PURE__ */ new Map();
    for (const n of t.seen.values()) n.def && !e.has(n.schema) && e.set(n.schema, n);
    const s = /* @__PURE__ */ new Map();
    for (const n of (_a3 = xr.get(t)) != null ? _a3 : []) {
      const r = t.seen.get(n), i = (_c2 = (_b3 = r == null ? void 0 : r.def) != null ? _b3 : r == null ? void 0 : r.schema) == null ? void 0 : _c2.propertyNames;
      if (!i || i === true || s.has(i)) continue;
      const o = jr(e, i, /* @__PURE__ */ new Set());
      o !== i && s.set(i, o);
    }
    if (s.size) for (const n of t.seen.values()) for (const r of [n.schema, n.def]) {
      const i = r && s.get(r.propertyNames);
      i && (r.propertyNames = i);
    }
  }
  const Hm = (t, e, s, n) => {
    const r = s, i = t._zod.def;
    r.type = "object";
    const o = i.keyType, a = Oe(o).patterns;
    if (i.mode === "loose" && a && a.size > 0) {
      const d = le(i.valueType, e, { ...n, path: [...n.path, "patternProperties", "*"] });
      r.patternProperties = {};
      for (const h of a) Qe(r.patternProperties, $a(h).source, d);
    } else {
      if (e.target === "draft-07" || e.target === "draft-2020-12") {
        r.propertyNames = le(i.keyType, e, { ...n, path: [...n.path, "propertyNames"] });
        let d = xr.get(e);
        d || (d = [], xr.set(e, d), e.deferred.push(() => Wm(e))), d.push(t);
      }
      r.additionalProperties = le(i.valueType, e, { ...n, path: [...n.path, "additionalProperties"] });
    }
    const c = o._zod.values, l = e.io === "input" && hs(i.valueType) !== void 0;
    if (c && !i.partial && !l) {
      const d = [...c].filter((h) => typeof h == "string" || typeof h == "number");
      d.length > 0 && (r.required = d.map(String));
    }
  }, Vm = (t, e, s, n) => {
    const r = t._zod.def, i = le(r.innerType, e, n), o = e.seen.get(t);
    e.target === "openapi-3.0" ? (o.ref = r.innerType, s.nullable = true) : s.anyOf = [i, { type: "null" }];
  }, Ym = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
  }, Er = /* @__PURE__ */ Symbol();
  function za(t, e, s, n, r) {
    let i = false;
    const o = JSON.stringify(t, (a, c) => typeof c != "bigint" ? c : (i = true, null));
    return i ? (gt(e, s, n, r, "BigInt defaults cannot be represented in JSON Schema"), Er) : JSON.parse(o);
  }
  const Jm = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
    const o = za(r.defaultValue, t, e, s, n);
    o !== Er && (s.default = o);
  }, Qm = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    if (i.ref = r.innerType, e.io !== "input") return;
    const o = za(r.defaultValue, t, e, s, n);
    o !== Er && (s._prefault = o);
  }, Xm = (t, e, s, n) => {
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
  }, eg = (t, e, s, n) => {
    const r = t._zod.def, i = r.in._zod.traits.has("$ZodTransform"), o = e.io === "input" ? i ? r.out : r.in : r.out;
    le(o, e, n);
    const a = e.seen.get(t);
    a.ref = o;
  }, tg = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType, s.readOnly = true;
  }, _a = (t, e, s, n) => {
    const r = t._zod.def;
    le(r.innerType, e, n);
    const i = e.seen.get(t);
    i.ref = r.innerType;
  }, sg = (t, e, s, n) => {
    const r = t._zod.innerType;
    le(r, e, n);
    const i = e.seen.get(t);
    i.ref = r;
  }, ja = new WeakSet([Object.prototype, Error.prototype]);
  function rn(t, e, s) {
    Object.defineProperty(t, e, { configurable: true, enumerable: false, get() {
      const n = s(this);
      return Object.defineProperty(this, e, { value: n, configurable: true, writable: true }), n;
    }, set(n) {
      Object.defineProperty(this, e, { value: n, configurable: true, writable: true });
    } });
  }
  const Ne = M("ZodError", (t, e) => {
    hh.init(t, e), t.name = "ZodError";
    const s = Object.getPrototypeOf(t);
    ja.has(s) || (ja.add(s), rn(s, "format", (n) => (r) => mh(n, r)), rn(s, "flatten", (n) => (r) => fh(n, r)), rn(s, "addIssue", (n) => (r) => {
      n.issues.push(r), n.message = JSON.stringify(n.issues, sr, 2);
    }), rn(s, "addIssues", (n) => (r) => {
      n.issues.push(...r), n.message = JSON.stringify(n.issues, sr, 2);
    }), Object.defineProperty(s, "isEmpty", { configurable: true, enumerable: false, get() {
      return this.issues.length === 0;
    } }));
  }, void 0, { Parent: Error }), ng = ur(Ne), rg = hr(Ne), ig = pr(Ne), og = fr(Ne), ag = yh(Ne), cg = Sh(Ne), lg = $h(Ne), dg = zh(Ne), ug = _h(Ne), hg = jh(Ne), pg = xh(Ne), fg = Eh(Ne);
  function mg() {
    Me.localeError || qe(Of());
  }
  function ps() {
    Me.memoizer || qe({ memoizer: Tf() });
  }
  const oe = M("ZodType", (t, e) => (mg(), re.init(t, e), t.def = e, t.type = e.type, t), { check(...t) {
    var _a3;
    const e = this.def;
    return this.clone(Ae(e, { checks: [...(_a3 = e.checks) != null ? _a3 : [], ...t.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)] }), { parent: true });
  }, with(...t) {
    return this.check(...t);
  }, clone(t, e) {
    return ut(this, t, e);
  }, brand() {
    return this;
  }, register(t, e) {
    return t.add(this, e), this;
  }, refine(t, e) {
    return this.check(uk(t, e));
  }, superRefine(t, e) {
    return this.check(hk(t, e));
  }, overwrite(t) {
    return this.check(Zt(t));
  }, optional() {
    return Ra(this);
  }, exactOptional() {
    return Yg(this);
  }, nullable() {
    return La(this);
  }, nullish() {
    return Ra(La(this));
  }, nonoptional(t) {
    return sk(this, t);
  }, array() {
    return N(this);
  }, or(t) {
    return et([this, t]);
  }, and(t) {
    return Oa(this, t);
  }, transform(t) {
    return Ua(this, Pa(t));
  }, default(t) {
    return Xg(this, t);
  }, prefault(t) {
    return tk(this, t);
  }, catch(t) {
    return rk(this, t);
  }, pipe(t) {
    return Ua(this, t);
  }, readonly() {
    return ak(this);
  }, describe(t) {
    const e = this.clone();
    return ds.add(e, { description: t }), e;
  }, meta(...t) {
    if (t.length === 0) return ds.get(this);
    const e = this.clone();
    return ds.add(e, t[0]), e;
  }, isOptional() {
    return this.safeParse(void 0).success;
  }, isNullable() {
    return this.safeParse(null).success;
  }, apply(t, ...e) {
    return e.length === 0 ? t(this) : t(this, ...e);
  }, get "~standard"() {
    return po(this, "~standard", { ..._o(this), jsonSchema: { input: nn(this, "input"), output: nn(this, "output") } });
  }, set "~standard"(t) {
    ft(this, "~standard", t);
  }, parse: function t(e, s) {
    return ng(this, e, s, { callee: t });
  }, parseAsync: async function t(e, s) {
    return await rg(this, e, s, { callee: t });
  }, safeParse(t, e) {
    return ig(this, t, e);
  }, async safeParseAsync(t, e) {
    return og(this, t, e);
  }, get spa() {
    return this == null ? void 0 : this.safeParseAsync;
  }, set spa(t) {
    ft(this, "spa", t);
  }, validate(t, e) {
    return bh(this, t, e);
  }, validateAsync(t, e) {
    return wh(this, t, e);
  }, encode: function t(e, s) {
    return ag(this, e, s, { callee: t });
  }, decode: function t(e, s) {
    return cg(this, e, s, { callee: t });
  }, encodeAsync: async function t(e, s) {
    return await lg(this, e, s, { callee: t });
  }, decodeAsync: async function t(e, s) {
    return await dg(this, e, s, { callee: t });
  }, safeEncode(t, e) {
    return ug(this, t, e);
  }, safeDecode(t, e) {
    return hg(this, t, e);
  }, async safeEncodeAsync(t, e) {
    return pg(this, t, e);
  }, async safeDecodeAsync(t, e) {
    return fg(this, t, e);
  }, toJSONSchema(t) {
    return Am(this, {})(t);
  }, get description() {
    var _a3;
    return (_a3 = ds.get(this)) == null ? void 0 : _a3.description;
  }, get _def() {
    return this._zod.def;
  } }), xa = M("_ZodString", (t, e) => {
    br.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Om(t, s, n);
  }, fo({ format: (t) => {
    var _a3;
    return (_a3 = Oe(t).format) != null ? _a3 : null;
  }, minLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).minimum) != null ? _a3 : null;
  }, maxLength: (t) => {
    var _a3;
    return (_a3 = Oe(t).maximum) != null ? _a3 : null;
  } }, { regex(...t) {
    return this.check(pm(...t));
  }, includes(...t) {
    return this.check(gm(...t));
  }, startsWith(...t) {
    return this.check(km(...t));
  }, endsWith(...t) {
    return this.check(bm(...t));
  }, min(...t) {
    return this.check(sn(...t));
  }, max(...t) {
    return this.check(ia(...t));
  }, length(...t) {
    return this.check(oa(...t));
  }, nonempty(...t) {
    return this.check(sn(1, ...t));
  }, lowercase(t) {
    return this.check(fm(t));
  }, uppercase(t) {
    return this.check(mm(t));
  }, trim() {
    return this.check(wm());
  }, normalize(...t) {
    return this.check(vm(...t));
  }, toLowerCase() {
    return this.check(ym());
  }, toUpperCase() {
    return this.check(Sm());
  }, slugify() {
    return this.check($m());
  } })), gg = M("ZodString", (t, e) => {
    br.init(t, e), xa.init(t, e);
  }, { email(t) {
    return this.check(Df(yg, t));
  }, url(t) {
    return this.check(ta(Ea, t));
  }, jwt(t) {
    return this.check(nm(Lg, t));
  }, emoji(t) {
    return this.check(Bf(zg, t));
  }, guid(t) {
    return this.check(Lf(Sg, t));
  }, uuid(t) {
    return this.check(Cf(on, t));
  }, uuidv4(t) {
    return this.check(Zf(on, t));
  }, uuidv6(t) {
    return this.check(Uf(on, t));
  }, uuidv7(t) {
    return this.check(Ff(on, t));
  }, nanoid(t) {
    return this.check(Kf(_g, t));
  }, cuid(t) {
    return this.check(qf(jg, t));
  }, cuid2(t) {
    return this.check(Gf(xg, t));
  }, ulid(t) {
    return this.check(Wf(Eg, t));
  }, base64(t) {
    return this.check(em(Pg, t));
  }, base64url(t) {
    return this.check(tm(Rg, t));
  }, xid(t) {
    return this.check(Hf(Ag, t));
  }, ksuid(t) {
    return this.check(Vf(Tg, t));
  }, ipv4(t) {
    return this.check(Yf(Ig, t));
  }, ipv6(t) {
    return this.check(Jf(Mg, t));
  }, cidrv4(t) {
    return this.check(Qf(Og, t));
  }, cidrv6(t) {
    return this.check(Xf(Ng, t));
  }, e164(t) {
    return this.check(sm(Dg, t));
  }, datetime(t) {
    return this.check(rm(kg, t));
  }, date(t) {
    return this.check(im(bg, t));
  }, time(t) {
    return this.check(om(vg, t));
  }, duration(t) {
    return this.check(am(wg, t));
  } });
  function x(t) {
    return Rf(gg, t);
  }
  const de = M("ZodStringFormat", (t, e) => {
    ae.init(t, e), xa.init(t, e);
  }), kg = M("ZodISODateTime", (t, e) => {
    Pp.init(t, e), de.init(t, e);
  }), bg = M("ZodISODate", (t, e) => {
    Rp.init(t, e), de.init(t, e);
  }), vg = M("ZodISOTime", (t, e) => {
    Dp.init(t, e), de.init(t, e);
  }), wg = M("ZodISODuration", (t, e) => {
    Lp.init(t, e), de.init(t, e);
  }), yg = M("ZodEmail", (t, e) => {
    yp.init(t, e), de.init(t, e);
  }), Sg = M("ZodGUID", (t, e) => {
    vp.init(t, e), de.init(t, e);
  }), on = M("ZodUUID", (t, e) => {
    wp.init(t, e), de.init(t, e);
  }), Ea = M("ZodURL", (t, e) => {
    xp.init(t, e), de.init(t, e);
  });
  function $g(t) {
    return ta(Ea, t);
  }
  const zg = M("ZodEmoji", (t, e) => {
    Ep.init(t, e), de.init(t, e);
  }), _g = M("ZodNanoID", (t, e) => {
    Ap.init(t, e), de.init(t, e);
  }), jg = M("ZodCUID", (t, e) => {
    Tp.init(t, e), de.init(t, e);
  }), xg = M("ZodCUID2", (t, e) => {
    Ip.init(t, e), de.init(t, e);
  }), Eg = M("ZodULID", (t, e) => {
    Mp.init(t, e), de.init(t, e);
  }), Ag = M("ZodXID", (t, e) => {
    Op.init(t, e), de.init(t, e);
  }), Tg = M("ZodKSUID", (t, e) => {
    Np.init(t, e), de.init(t, e);
  }), Ig = M("ZodIPv4", (t, e) => {
    Cp.init(t, e), de.init(t, e);
  }), Mg = M("ZodIPv6", (t, e) => {
    Up.init(t, e), de.init(t, e);
  }), Og = M("ZodCIDRv4", (t, e) => {
    Fp.init(t, e), de.init(t, e);
  }), Ng = M("ZodCIDRv6", (t, e) => {
    Kp.init(t, e), de.init(t, e);
  }), Pg = M("ZodBase64", (t, e) => {
    qp.init(t, e), de.init(t, e);
  }), Rg = M("ZodBase64URL", (t, e) => {
    Wp.init(t, e), de.init(t, e);
  }), Dg = M("ZodE164", (t, e) => {
    Hp.init(t, e), de.init(t, e);
  }), Lg = M("ZodJWT", (t, e) => {
    Yp.init(t, e), de.init(t, e);
  }), Aa = M("ZodNumber", (t, e) => {
    Mo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Nm(t, s, n, r), t.isFinite = true;
  }, fo({ minValue: (t) => {
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
    return this.check(na(t, e));
  }, gte(t, e) {
    return this.check(zr(t, e));
  }, min(t, e) {
    return this.check(zr(t, e));
  }, lt(t, e) {
    return this.check(sa(t, e));
  }, lte(t, e) {
    return this.check($r(t, e));
  }, max(t, e) {
    return this.check($r(t, e));
  }, int(t) {
    return this.check(Ta(t));
  }, safe(t) {
    return this.check(Ta(t));
  }, positive(t) {
    return this.check(na(0, t));
  }, nonnegative(t) {
    return this.check(zr(0, t));
  }, negative(t) {
    return this.check(sa(0, t));
  }, nonpositive(t) {
    return this.check($r(0, t));
  }, multipleOf(t, e) {
    return this.check(ra(t, e));
  }, step(t, e) {
    return this.check(ra(t, e));
  }, finite() {
    return this;
  } }));
  function L(t) {
    return cm(Aa, t);
  }
  const Cg = M("ZodNumberFormat", (t, e) => {
    Jp.init(t, e), Aa.init(t, e);
  });
  function Ta(t) {
    return lm(Cg, t);
  }
  const Zg = M("ZodBoolean", (t, e) => {
    Qp.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Pm(t, s, n);
  });
  function J(t) {
    return dm(Zg, t);
  }
  const Ug = M("ZodUnknown", (t, e) => {
    Xp.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Dm();
  });
  function xt() {
    return um(Ug);
  }
  const Fg = M("ZodNever", (t, e) => {
    ef.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Rm(t, s, n);
  });
  function Ia(t) {
    return hm(Fg, t);
  }
  const Bg = M("ZodArray", (t, e) => {
    ps(), nf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Fm(t, s, n, r), t.element = e.element;
  }, { min(t, e) {
    return this.check(sn(t, e));
  }, nonempty(t) {
    return this.check(sn(1, t));
  }, max(t, e) {
    return this.check(ia(t, e));
  }, length(t, e) {
    return this.check(oa(t, e));
  }, unwrap() {
    return this.element;
  } });
  function N(t, e) {
    return zm(Bg, t, e);
  }
  const Ar = M("ZodObject", (t, e) => {
    ps(), af.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Bm(t, s, n, r), ih(t, "shape", (s) => s._zod.def.shape, false);
  }, { keyof() {
    return Y(Object.keys(this._zod.def.shape));
  }, catchall(t) {
    return this.clone(Ae(this._zod.def, { catchall: t }));
  }, passthrough() {
    return this.clone(Ae(this._zod.def, { catchall: xt() }));
  }, loose() {
    return this.clone(Ae(this._zod.def, { catchall: xt() }));
  }, strict() {
    return this.clone(Ae(this._zod.def, { catchall: Ia() }));
  }, strip() {
    return this.clone(Ae(this._zod.def, { catchall: void 0 }));
  }, extend(t) {
    return Hu(this, t);
  }, safeExtend(t) {
    return Vu(this, t);
  }, merge(t) {
    return Yu(this, t);
  }, pick(t) {
    return Gu(this, t);
  }, omit(t) {
    return Wu(this, t);
  }, partial(...t) {
    return uo(Mr, this, t[0]);
  }, exactPartial(...t) {
    return uo(Da, this, t[0], "exactPartial");
  }, required(...t) {
    return Ju(Ca, this, t[0]);
  } });
  function B(t, e) {
    const s = { type: "object", shape: t != null ? t : {}, ...G(e) };
    return new Ar(s);
  }
  function U(t, e) {
    return new Ar({ type: "object", shape: t, catchall: Ia(), ...G(e) });
  }
  function Kg(t, e) {
    return new Ar({ type: "object", shape: t, catchall: xt(), ...G(e) });
  }
  const Ma = M("ZodUnion", (t, e) => {
    Do.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Km(t, s, n, r), t.options = e.options;
  });
  function et(t, e) {
    return new Ma({ type: "union", options: t, ...G(e) });
  }
  const qg = M("ZodDiscriminatedUnion", (t, e) => {
    Ma.init(t, e), lf.init(t, e);
  });
  function Tr(t, e, s) {
    return new qg({ type: "union", options: e, discriminator: t, ...G(s) });
  }
  const Gg = M("ZodIntersection", (t, e) => {
    df.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => qm(t, s, n, r);
  });
  function Oa(t, e) {
    return new Gg({ type: "intersection", left: t, right: e });
  }
  const Wg = M("ZodTuple", (t, e) => {
    ps(), uf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Gm(t, s, n, r);
  }, { rest(t) {
    return this.clone({ ...this._zod.def, rest: t });
  }, partial() {
    var _a3;
    const t = this._zod.def;
    if ((_a3 = t.checks) == null ? void 0 : _a3.length) throw new Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({ ...t, items: t.items.map((e) => new Mr({ type: "optional", innerType: e })) });
  } });
  function Et(t, e, s) {
    const n = e instanceof re, r = n ? s : e, i = n ? e : null;
    return new Wg({ type: "tuple", items: t, rest: i, ...G(r) });
  }
  const Na = M("ZodRecord", (t, e) => {
    ps(), hf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Hm(t, s, n, r), t.keyType = e.keyType, t.valueType = e.valueType;
  });
  function Q(t, e, s) {
    return !e || !e._zod ? new Na({ type: "record", keyType: x(), valueType: t, ...G(e) }) : new Na({ type: "record", keyType: t, valueType: e, ...G(s) });
  }
  const Ir = M("ZodEnum", (t, e) => {
    pf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (n, r, i) => Lm(t, n, r), t.enum = e.entries, t.options = [...t._zod.values];
    const s = new Set(Object.keys(e.entries));
    t.extract = (n, r) => {
      const i = {};
      for (const o of n) if (s.has(o)) i[o] = e.entries[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Ir({ ...e, checks: [], ...G(r), entries: i });
    }, t.exclude = (n, r) => {
      const i = { ...e.entries };
      for (const o of n) if (s.has(o)) delete i[o];
      else throw new Error("Key ".concat(o, " not found in enum"));
      return new Ir({ ...e, checks: [], ...G(r), entries: i });
    };
  });
  function Y(t, e) {
    const s = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
    return new Ir({ type: "enum", entries: s, ...G(e) });
  }
  const Hg = M("ZodLiteral", (t, e) => {
    ff.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Cm(t, s, n, r), t.values = new Set(e.values), Object.defineProperty(t, "value", { get() {
      if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    } });
  });
  function se(t, e) {
    return new Hg({ type: "literal", values: Array.isArray(t) ? t : [t], ...G(e) });
  }
  const Vg = M("ZodTransform", (t, e) => {
    ps(), mf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Um(t, s, n, r), t._zod.parse = (s, n) => {
      if (n.direction === "backward") throw new ko(t.constructor.name);
      s.addIssue = (i) => {
        var _a3, _b3;
        if (typeof i == "string") s.issues.push(as(i, s.value, e));
        else {
          const o = i;
          o.fatal && (o.continue = false), (_a3 = o.code) != null ? _a3 : o.code = "custom", "input" in o || (o.input = s.value), (_b3 = o.inst) != null ? _b3 : o.inst = t, s.issues.push(as(o));
        }
      };
      const r = e.transform(s.value, s);
      return r instanceof Promise ? r.then((i) => (s.value = i, s)) : (s.value = r, s);
    };
  });
  function Pa(t) {
    return new Vg({ type: "transform", transform: t });
  }
  const Mr = M("ZodOptional", (t, e) => {
    Bo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => _a(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function Ra(t) {
    return new Mr({ type: "optional", innerType: t });
  }
  const Da = M("ZodExactOptional", (t, e) => {
    gf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => _a(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function Yg(t) {
    return new Da({ type: "optional", innerType: t });
  }
  const Jg = M("ZodNullable", (t, e) => {
    kf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Vm(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function La(t) {
    return new Jg({ type: "nullable", innerType: t });
  }
  const Qg = M("ZodDefault", (t, e) => {
    bf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Jm(t, s, n, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
  });
  function Xg(t, e) {
    return new Qg({ type: "default", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : oo(e);
    } });
  }
  const ek = M("ZodPrefault", (t, e) => {
    vf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Qm(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function tk(t, e) {
    return new ek({ type: "prefault", innerType: t, get defaultValue() {
      return typeof e == "function" ? e() : oo(e);
    } });
  }
  const Ca = M("ZodNonOptional", (t, e) => {
    wf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Ym(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function sk(t, e) {
    return new Ca({ type: "nonoptional", innerType: t, ...G(e) });
  }
  const nk = M("ZodCatch", (t, e) => {
    yf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Xm(t, s, n, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
  });
  function rk(t, e) {
    return new nk({ type: "catch", innerType: t, catchValue: typeof e == "function" ? e : ah(e) });
  }
  const Za = M("ZodPipe", (t, e) => {
    Wo.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => eg(t, s, n, r), t.in = e.in, t.out = e.out;
  });
  function Ua(t, e) {
    return new Za({ type: "pipe", in: t, out: e });
  }
  const ik = M("ZodPreprocess", (t, e) => {
    Za.init(t, e), Sf.init(t, e);
  }), ok = M("ZodReadonly", (t, e) => {
    $f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => tg(t, s, n, r), t.unwrap = () => t._zod.def.innerType;
  });
  function ak(t) {
    return new ok({ type: "readonly", innerType: t });
  }
  const ck = M("ZodLazy", (t, e) => {
    zf.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => sg(t, s, n, r), t.unwrap = () => t._zod.def.getter();
  });
  function lk(t) {
    return new ck({ type: "lazy", getter: t });
  }
  const dk = M("ZodCustom", (t, e) => {
    _f.init(t, e), oe.init(t, e), t._zod.processJSONSchema = (s, n, r) => Zm(t, s, n, r);
  });
  function uk(t, e = {}) {
    return _m(dk, t, e);
  }
  function hk(t, e) {
    return jm(t, e);
  }
  function Fa(t, e) {
    return new ik({ type: "pipe", in: Pa(t), out: e });
  }
  const Or = { custom: "custom" }, pk = { hr: { Language: "Jezik", Start: "Započni", Next: "Dalje", Back: "Natrag", Check: "Provjeri", "Correct!": "Točno!", "Not quite": "Nije baš", Review: "Ponavljanje", Menu: "Izbornik", "Main Menu": "Glavni izbornik", Score: "Bodovi", Quit: "Izlaz" }, de: { Language: "Sprache", Start: "Starten", Next: "Weiter", Back: "Zurück", Check: "Prüfen", "Correct!": "Richtig!", "Not quite": "Nicht ganz", Review: "Wiederholen", Menu: "Menü", "Main Menu": "Hauptmenü", Score: "Punkte", Quit: "Beenden" } }, Ba = [["en", "English", "English", "latin"], ["hr", "Croatian", "Hrvatski", "latin"], ["ko", "Korean", "한국어", "hangul"], ["ja", "Japanese", "日本語", "kana"], ["ar", "Arabic", "العربية", "arabic", true], ["bg", "Bulgarian", "Български", "cyrillic"], ["cs", "Czech", "Čeština", "latin"], ["da", "Danish", "Dansk", "latin"], ["de", "German", "Deutsch", "latin"], ["el", "Greek", "Ελληνικά", "greek"], ["es", "Spanish", "Español", "latin"], ["et", "Estonian", "Eesti", "latin"], ["fi", "Finnish", "Suomi", "latin"], ["fr", "French", "Français", "latin"], ["hi", "Hindi", "हिन्दी", "devanagari"], ["hu", "Hungarian", "Magyar", "latin"], ["id", "Indonesian", "Bahasa Indonesia", "latin"], ["it", "Italian", "Italiano", "latin"], ["lt", "Lithuanian", "Lietuvių", "latin"], ["lv", "Latvian", "Latviešu", "latin"], ["nl", "Dutch", "Nederlands", "latin"], ["pl", "Polish", "Polski", "latin"], ["pt", "Portuguese", "Português", "latin"], ["ro", "Romanian", "Română", "latin"], ["ru", "Russian", "Русский", "cyrillic"], ["sk", "Slovak", "Slovenčina", "latin"], ["sl", "Slovenian", "Slovenščina", "latin"], ["sv", "Swedish", "Svenska", "latin"], ["tr", "Turkish", "Türkçe", "latin"], ["uk", "Ukrainian", "Українська", "cyrillic"], ["vi", "Vietnamese", "Tiếng Việt", "latin"], ["sr", "Serbian", "Српски", "cyrillic"], ["bs", "Bosnian", "Bosanski", "latin"], ["no", "Norwegian", "Norsk", "latin"], ["he", "Hebrew", "עברית", "hebrew", true], ["fa", "Persian", "فارسی", "arabic", true], ["zh", "Chinese", "中文", "han"]].map(([t, e, s, n, r]) => {
    const i = { code: t, name: e, native: s, script: n };
    r && (i.rtl = true);
    const o = pk[t];
    return o && (i.ui = { ...o }), i;
  }), Ka = /* @__PURE__ */ new Map();
  function fk() {
    Ka.clear();
    for (const t of Ba) Ka.set(t.code, t);
  }
  fk(), Ba.map((t) => t.code);
  const tt = x().regex(/^[a-z]{2,3}(-[a-z0-9]{2,8})?$/, "a language code such as en, hr, de or pt-br"), mk = ["comfy", "pixel-studio-draw", "hand", "flow"], gk = ["builtin", "pixel-studio"], kk = ["comfy", "chiptune", "flow"], bk = ["auto", "gemini", "vibetts", "comfy"], vk = ["nes", "gb", "genesis", "snes", "pce", "ps1", "dreamcast"], wk = ["none", "ordered", "floyd"], yk = B({ width: L().int().min(16).max(512).optional(), height: L().int().min(16).max(512).optional(), dither: Y(wk).optional(), outline: J().optional() });
  function Sk(t) {
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
  function $k(t) {
    if (!t || typeof t != "object" || Array.isArray(t)) return t;
    const e = { ...t }, s = e.styles && typeof e.styles == "object" && !Array.isArray(e.styles) ? { ...e.styles } : {}, n = e.flowStyles;
    if (n && typeof n == "object" && !Array.isArray(n)) for (const [r, i] of Object.entries(n)) {
      const o = typeof s[r] == "string" ? s[r].trim() : "";
      typeof i == "string" && i.trim() && !o && (s[r] = i);
    }
    return e.styles = s, delete e.flowStyles, delete e.englishEngine, e.provider === "flow" && (e.provider = "gemini"), e;
  }
  const qa = "omnivoice", an = B({ slug: x(), primaryLang: tt, editions: N(tt).default([]), theme: x().nullable().default(null), models: Q(x(), x()).default({}), art: B({ enabled: J().default(true), style: Y(["illustrated", "pixel"]).default("illustrated"), generator: x().default("qwen-image-2.1"), editor: x().default("qwen-image-2.1-edit"), palette: x().optional(), review: J().default(true), stylePrompt: x().optional(), bgRemoval: Y(["birefnet", "qwen-edit", "key"]).default("birefnet"), provider: Y(mk).optional(), flowModel: x().optional(), flowProject: x().optional(), pixelProvider: Y(gk).optional(), pixel: yk.optional() }).default({ enabled: true, style: "illustrated", generator: "qwen-image-2.1", editor: "qwen-image-2.1-edit", review: true, bgRemoval: "birefnet" }), music: B({ enabled: J().default(true), engine: x().default("ace-step-v1-instrumental"), tracks: L().int().nonnegative().default(3), provider: Y(kk).optional(), flowCredits: J().default(false), chip: Y(vk).optional() }).default({ enabled: true, engine: "ace-step-v1-instrumental", tracks: 3, flowCredits: false }), voice: Fa($k, B({ enabled: J().optional(), langs: N(tt).default([]), provider: Y(bk).default("auto"), narration: J().optional(), passages: J().default(false), listening: J().default(true), listeningPerUnit: L().int().min(0).max(12).default(3), localVoices: Q(x(), x()).default({}), engine: x().default(qa), engines: Q(x(), x()).default({}), styles: Q(x(), x()).default({}), refTexts: Q(x(), x()).default({}), voices: Fa(Sk, Q(x(), Q(tt, x()))).default({}) })).default({ langs: [], provider: "auto", passages: false, listening: true, listeningPerUnit: 3, localVoices: {}, engine: qa, engines: {}, styles: {}, refTexts: {}, voices: {} }), sound: B({ ambienceEngine: x().default("ace-step-v1-instrumental"), sfxEngine: x().optional() }).default({ ambienceEngine: "ace-step-v1-instrumental" }) });
  B({ art: an.shape.art, music: an.shape.music, voice: an.shape.voice, sound: an.shape.sound });
  const zk = /* @__PURE__ */ new Set(["music", "sfx", "ambience"]), _k = "voice";
  [...zk];
  const jk = Y(["background", "sheet", "sprite", "cover", "cg", "illustration", "tileset", "music", "sfx", "ambience", "voiceRef", "voice"]), xk = B({ n: L().int().positive(), file: x(), createdAt: x(), seed: L().nullable(), engine: x(), prompt: x(), loopStartSec: L().nullable().optional(), loopEndSec: L().nullable().optional(), remote: B({ provider: Y(["flow", "flow-music"]), id: x(), project: x().optional() }).optional(), songFile: x().optional(), nativeFile: x().optional(), warnings: N(x()).optional(), custom: J().optional() }), Ek = B({ id: x(), kind: jk, prompt: x(), negative: x().optional(), engine: x(), seed: L().nullable(), size: B({ w: L().int().positive(), h: L().int().positive() }).nullable(), refs: N(x()).optional(), versions: N(xk), selected: L().int().positive().nullable(), source: Y(["generated", "custom"]), customFile: x().optional(), locked: J(), promptByHand: J().optional(), alt: x().optional(), style: Y(["illustrated", "pixel"]).optional(), provider: Y(["comfy", "flow"]).optional(), fit: B({ w: L().int().positive(), h: L().int().positive() }).optional(), voice: B({ lang: tt, key: x(), role: Y(["listening", "narration", "passage"]), text: x(), hash: x(), provider: x().optional(), imported: J().optional() }).optional(), placeholder: B({ file: x(), reason: x() }).optional(), review: B({ status: Y(["pending", "approved", "rejected"]), note: x().optional(), version: L().int().positive().optional(), rounds: L().int().nonnegative().optional() }).optional() });
  B({ assets: N(Ek) });
  const Ak = 1, P = x().regex(/^[A-Za-z0-9][A-Za-z0-9_-]*$/, "an id: letters, digits, - and _"), C = x().regex(/^[A-Za-z0-9][A-Za-z0-9_.:-]*$/, "a text key: letters, digits, . : - and _"), Tk = ["remember", "understand", "apply", "analyze", "evaluate", "create"], Nr = ["A1", "A2", "B1", "B2", "C1", "C2"], Ik = ["ignore", "warn", "strict"];
  U({ schema: se(1).default(1), lang: tt, strings: Q(C, x()), accepted: Q(C, N(x().min(1)).min(1)).optional() });
  const ye = { id: P, objective: P, prompt: C, explanation: C, didYouKnow: C.optional(), hint: C.optional(), asset: P.optional(), difficulty: L().int().min(1).max(5).default(3), tags: N(x()).default([]), extensions: Q(x(), xt()).optional() }, Pr = U({ id: P, text: C, why: C.optional() }), Ga = U({ ...ye, kind: se("mcq"), options: N(Pr).min(2).max(8), answer: P, shuffle: J().default(true) }), Wa = U({ ...ye, kind: se("true-false"), answer: J(), why: C.optional() }), Ha = U({ ...ye, kind: se("multi-select"), options: N(Pr).min(2).max(10), answers: N(P).min(1), shuffle: J().default(true) }), Va = U({ ...ye, kind: se("cloze"), text: C, gaps: N(U({ id: P, answer: C, bank: N(C).optional() })).min(1), strictDiacritics: J().optional() }), Ya = U({ ...ye, kind: se("conjugation"), verb: C, tense: P, forms: N(U({ person: P, label: C, answer: C, given: J().default(false) })).min(2).max(7), ask: L().int().min(1).optional(), strictDiacritics: J().optional() }), Ja = U({ ...ye, kind: se("typed"), answer: C, strictDiacritics: J().optional() }), Qa = U({ ...ye, kind: se("match-pairs"), pairs: N(U({ id: P, left: C, right: C })).min(2).max(8) }), Xa = U({ ...ye, kind: se("order"), items: N(U({ id: P, text: C, when: C.optional() })).min(2).max(10), timeline: J().default(false) }), ec = U({ ...ye, kind: se("sort-groups"), groups: N(U({ id: P, title: C })).min(2).max(5), items: N(U({ id: P, text: C, group: P, why: C.optional() })).min(2).max(12) }), Mk = Tr("type", [U({ type: se("circle"), cx: L(), cy: L(), r: L().positive() }), U({ type: se("rect"), x: L(), y: L(), w: L().positive(), h: L().positive() }), U({ type: se("poly"), points: N(Et([L(), L()])).min(3) })]), tc = U({ ...ye, kind: se("hotspot"), asset: P, width: L().positive(), height: L().positive(), regions: N(U({ id: P, label: C, shape: Mk, why: C.optional() })).min(2), answer: P }), sc = U({ ...ye, kind: se("listening"), asset: P, transcript: C, mode: Y(["choose", "type"]), options: N(Pr).min(2).max(8).optional(), answer: x().min(1), shuffle: J().default(true), strictDiacritics: J().optional() }).superRefine((t, e) => {
    t.mode === "choose" && !t.options && e.addIssue({ code: "custom", path: ["options"], message: "a choose listening item needs options" }), t.mode === "type" && t.options && e.addIssue({ code: "custom", path: ["options"], message: "a type listening item has no options" });
  }), nc = U({ ...ye, kind: se("flashcard"), back: C, backAsset: P.optional() }), rc = U({ ...ye, kind: se("crossword"), words: N(U({ id: P, answer: C, clue: C })).min(3).max(20), seed: L().int(), maxSize: L().int().min(5).max(30).default(15) }), ic = U({ ...ye, kind: se("word-search"), words: N(U({ id: P, answer: C })).min(2).max(20), seed: L().int(), size: L().int().min(5).max(30).optional(), directions: Y(["forward", "diagonal", "all"]).default("diagonal") });
  Tr("kind", [Ga, Wa, Ha, Va, Ja, Qa, Xa, ec, tc, sc, nc, rc, ic, Ya]);
  const Ok = Kg({ ...ye, kind: x().min(1) }), Nk = U({ id: P, title: C, summary: C.optional(), requires: N(P).default([]) }), Pk = U({ id: P, unit: P, bloom: Y(Tk), text: C, facts: N(P).default([]) }), Rk = U({ id: P, kind: Y(["image", "audio"]), file: x().min(1), alt: C }), Dk = U({ id: P, on: x().min(1), asset: P, loop: J().default(false), volume: L().min(0).max(1).default(1) }), Lk = U({ id: P, title: C, body: C, citations: N(P).default([]), asset: P.optional(), related: N(P).default([]), unit: P.optional() }), Ck = U({ id: P, claim: C.optional(), source: x().min(1), url: $g().optional() });
  U({ schema: se(Ak), id: P, slug: x().regex(/^[a-z0-9][a-z0-9-]*$/, "a slug: lower-case letters, digits and -"), sourceLang: tt, languages: N(tt).min(1), targetLang: tt.optional(), subject: x().min(1), audience: x().min(1), cefr: Y(Nr).optional(), matching: U({ diacritics: Y(Ik).default("ignore"), typos: J().default(true) }).default({ diacritics: "ignore", typos: true }), units: N(Nk).min(1), objectives: N(Pk).min(1), items: N(Ok), shells: U({ enabled: N(x().min(1)).default(["quiz-arena"]), config: Q(x(), Q(x(), xt())).default({}) }).default({ enabled: ["quiz-arena"], config: {} }), assets: N(Rk).default([]), cues: N(Dk).default([]), encyclopedia: U({ articles: N(Lk).default([]) }).default({ articles: [] }), factbase: N(Ck).default([]), extensions: Q(x(), xt()).default({}) });
  const cn = (t, e) => t.objectives.filter((s) => s.unit === e), oc = (t, e) => t.items.filter((s) => s.objective === e);
  function Zk(t, e) {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }
  function At(t) {
    const e = [], s = /* @__PURE__ */ new Set(), n = new Set(t.map((i) => i.id));
    let r = true;
    for (; r; ) {
      r = false;
      for (const i of t) s.has(i.id) || i.requires.every((o) => s.has(o) || !n.has(o)) && (e.push(i.id), s.add(i.id), r = true);
    }
    return e;
  }
  function Rr(t) {
    return t.replace(/đ/g, "d").replace(/Đ/g, "D").replace(/ß/g, "ss").replace(/ł/g, "l").replace(/Ł/g, "L").replace(/æ/g, "ae").replace(/Æ/g, "AE").replace(/œ/g, "oe").replace(/Œ/g, "OE").replace(/ø/g, "o").replace(/Ø/g, "O").normalize("NFD").replace(new RegExp("\\p{M}+", "gu"), "");
  }
  function Fe(t, e = {}) {
    let s = t.normalize("NFKC").toLowerCase();
    return s = s.replace(/['’‘`´]/g, ""), s = s.replace(/[^\p{L}\p{N}\p{M}]+/gu, " "), e.fold && (s = Rr(s).replace(/dj/g, "d")), s.replace(/\s+/g, " ").trim();
  }
  function kt(t) {
    return Rr(t.normalize("NFKC")).toUpperCase().replace(/[^\p{L}\p{N}]+/gu, "");
  }
  function ac(t, e, s = 1 / 0) {
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
  function Uk(t) {
    const e = (r) => r.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue"), s = (r) => r.replace(/ß/g, "ss").replace(/ẞ/g, "SS"), n = /* @__PURE__ */ new Set([e(s(t)), s(t), e(t)]);
    return n.delete(t), [...n];
  }
  const cc = (t) => t.normalize("NFKC").replace(/['’‘`´]/g, "").split(/[^\p{L}\p{N}\p{M}]+/u).filter(Boolean), lc = (t) => t[0] !== void 0 && t[0] !== t[0].toLowerCase();
  function dc(t, e) {
    const s = cc(t), n = cc(e);
    return s.length !== n.length ? false : n.some((r, i) => (i > 0 || n.length === 1) && lc(r) && !lc(s[i]));
  }
  function Fk(t, e, s = {}) {
    var _a3, _b3, _c2;
    const n = (_a3 = s.diacritics) != null ? _a3 : "ignore", r = s.typos !== false, i = (_b3 = s.minTypoLength) != null ? _b3 : 4, o = (_c2 = e[0]) != null ? _c2 : null, a = s.lang === "de", c = (g, b) => ({ correct: false, exact: false, typo: false, diacritics: false, matched: b, canonical: o, distance: g }), l = Fe(t);
    if (!l) return c(1 / 0, null);
    const d = Fe(t, { fold: true });
    let h = null, p = 1 / 0, f = null, m = null, k = null;
    for (const g of e) {
      const b = Fe(g);
      if (!b) continue;
      if (b === l) return { correct: true, exact: true, typo: false, diacritics: false, matched: g, canonical: o, distance: 0, ...a && dc(t, g) ? { caps: true } : {} };
      a && k === null && Uk(g).some((S) => Fe(S) === l) && (k = g);
      const v = Fe(g, { fold: true });
      if (v === d) {
        f != null ? f : f = g;
        continue;
      }
      const $ = ac(d, v, 2);
      if ($ < p && (p = $, h = g), r && v.replace(/ /g, "").length >= i) {
        const S = n === "strict" ? ac(l, b, 1) : $;
        S <= 1 && (!m || S < m.d) && (m = { a: g, d: S });
      }
    }
    return k !== null ? { correct: true, exact: false, typo: false, diacritics: false, matched: k, canonical: o, distance: 0, translit: true, ...dc(t, k) ? { caps: true } : {} } : f !== null ? n === "strict" ? { correct: false, exact: false, typo: false, diacritics: true, matched: f, canonical: o, distance: 0 } : { correct: true, exact: false, typo: false, diacritics: n === "warn", matched: f, canonical: o, distance: 0 } : m ? { correct: true, exact: false, typo: true, diacritics: false, matched: m.a, canonical: o, distance: m.d } : c(p, h);
  }
  function Bk(t, e, s) {
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
  function Bt(t, ...e) {
    return new st([t, ...e].join(":"));
  }
  function fs(t, e) {
    const s = e.shuffle([...t]);
    return s.length > 1 && s.every((n, r) => n === t[r]) && s.push(s.shift()), s;
  }
  const nt = (t, e) => "".concat(t, ",").concat(e);
  function Kk(t, e, s, n, r) {
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
  function Dr(t, e, s, n, r) {
    const i = r === "down" ? 1 : 0, o = r === "across" ? 1 : 0;
    e.forEach((a, c) => {
      var _a3;
      const l = nt(s + c * i, n + c * o), d = (_a3 = t.get(l)) != null ? _a3 : { ch: a, across: false, down: false };
      d[r] = true, t.set(l, d);
    });
  }
  function Lr(t) {
    let e = 1 / 0, s = -1 / 0, n = 1 / 0, r = -1 / 0;
    for (const i of t.keys()) {
      const [o, a] = i.split(",").map(Number);
      e = Math.min(e, o), s = Math.max(s, o), n = Math.min(n, a), r = Math.max(r, a);
    }
    return { r0: e, r1: s, c0: n, c1: r };
  }
  function qk(t, e, s, n) {
    const r = Bt(e, "crossword", s), i = [...t];
    s > 0 ? r.shuffle(i) : i.sort((p, f) => f.letters.length - p.letters.length || p.id.localeCompare(f.id));
    const o = /* @__PURE__ */ new Map(), a = [];
    let c = i, l = true, d = true;
    for (; c.length > 0 && d; ) {
      d = false;
      const p = [];
      for (const f of c) {
        const m = Array.from(f.letters);
        if (l) {
          Dr(o, m, 0, 0, "across"), a.push({ id: f.id, letters: f.letters, r: 0, c: 0, dir: "across" }), l = false, d = true;
          continue;
        }
        const k = [];
        for (const b of a) {
          const v = Array.from(b.letters), $ = b.dir === "across" ? "down" : "across";
          for (let S = 0; S < v.length; S++) for (let _ = 0; _ < m.length; _++) {
            if (v[S] !== m[_]) continue;
            const w = b.dir === "across" ? b.r - _ : b.r + S, A = b.dir === "across" ? b.c + S : b.c - _, j = Kk(o, m, w, A, $);
            if (j < 1) continue;
            const O = $ === "down" ? 1 : 0, R = $ === "across" ? 1 : 0, y = Lr(o), E = Math.min(y.r0, w), z = Math.max(y.r1, w + (m.length - 1) * O), T = Math.min(y.c0, A), D = Math.max(y.c1, A + (m.length - 1) * R);
            z - E + 1 > n || D - T + 1 > n || k.push({ r: w, c: A, dir: $, n: j, area: (z - E + 1) * (D - T + 1) });
          }
        }
        if (k.length === 0) {
          p.push(f);
          continue;
        }
        r.shuffle(k), k.sort((b, v) => v.n - b.n || b.area - v.area);
        const g = k[0];
        Dr(o, m, g.r, g.c, g.dir), a.push({ id: f.id, letters: f.letters, r: g.r, c: g.c, dir: g.dir }), d = true;
      }
      c = p;
    }
    const h = o.size > 0 ? Lr(o) : { r0: 0, r1: -1, c0: 0, c1: -1 };
    return { placed: a, unplaced: c.map((p) => p.id), area: (h.r1 - h.r0 + 1) * (h.c1 - h.c0 + 1) };
  }
  function Gk(t, e, s = {}) {
    var _a3, _b3;
    const n = (_a3 = s.maxSize) != null ? _a3 : 15, r = [], i = [], o = /* @__PURE__ */ new Set();
    for (const g of t) {
      const b = kt(g.answer);
      b.length < 2 || o.has(g.id) || b.length > n ? i.push(g.id) : r.push({ id: g.id, letters: b }), o.add(g.id);
    }
    let a = null;
    const c = Math.max(1, (_b3 = s.attempts) != null ? _b3 : 24);
    for (let g = 0; g < c && r.length > 0; g++) {
      const b = qk(r, e, g, n);
      if ((!a || b.unplaced.length < a.unplaced.length || b.unplaced.length === a.unplaced.length && b.area < a.area) && (a = b), a.unplaced.length === 0 && g >= 8) break;
    }
    if (!a) return { width: 0, height: 0, cells: [], entries: [], unplaced: i };
    const l = /* @__PURE__ */ new Map();
    for (const g of a.placed) Dr(l, Array.from(g.letters), g.r, g.c, g.dir);
    const d = Lr(l), h = d.r1 - d.r0 + 1, p = d.c1 - d.c0 + 1, f = Array.from({ length: h }, () => Array(p).fill(null));
    for (const [g, b] of l) {
      const [v, $] = g.split(",").map(Number);
      f[v - d.r0][$ - d.c0] = b.ch;
    }
    const m = a.placed.map((g) => ({ id: g.id, answer: g.letters, row: g.r - d.r0, col: g.c - d.c0, dir: g.dir, number: 0, length: Array.from(g.letters).length }));
    let k = 0;
    for (let g = 0; g < h; g++) for (let b = 0; b < p; b++) {
      const v = m.filter(($) => $.row === g && $.col === b);
      if (v.length !== 0) {
        k++;
        for (const $ of v) $.number = k;
      }
    }
    return m.sort((g, b) => g.number - b.number || (g.dir === "across" ? -1 : 1)), { width: p, height: h, cells: f, entries: m, unplaced: [...i, ...a.unplaced] };
  }
  function Wk(t, e) {
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
  function Hk(t) {
    return { across: t.entries.filter((e) => e.dir === "across"), down: t.entries.filter((e) => e.dir === "down") };
  }
  const ln = ["again", "hard", "good", "easy"], uc = (t) => typeof t == "string" && ln.includes(t), Cr = 864e5, Vk = 1.3, Yk = 2.5, Jk = { again: 2, hard: 3, good: 4, easy: 5 }, hc = (t) => typeof t == "number" ? t : t.getTime(), Qk = (t) => Math.round(t * 100) / 100;
  function pc(t, e = 0) {
    return { id: t, ease: Yk, interval: 0, reps: 0, lapses: 0, due: hc(e), last: null };
  }
  function fc(t, e, s) {
    const n = hc(s), r = Jk[e], i = Math.max(Vk, Qk(t.ease + (0.1 - (5 - r) * (0.08 + (5 - r) * 0.02))));
    if (r < 3) return { ...t, ease: i, interval: 1, reps: 0, lapses: t.lapses + 1, due: n + Cr, last: n };
    const o = t.reps + 1, a = o === 1 ? 1 : o === 2 ? 6 : Math.round(t.interval * i);
    return { ...t, ease: i, interval: a, reps: o, due: n + a * Cr, last: n };
  }
  function Xk(t) {
    return t.last === null ? "new" : t.reps < 3 ? "learning" : t.interval >= 21 ? "mature" : "young";
  }
  const mc = () => ({ answered: 0, pending: [], misses: {} }), eb = (t) => Math.min(4, 1 + Math.max(1, t));
  function tb(t, e, s) {
    var _a3;
    const n = t.answered + 1, r = t.pending.filter((o) => o.id !== e);
    if (s !== "again") return { answered: n, pending: r, misses: t.misses };
    const i = ((_a3 = t.misses[e]) != null ? _a3 : 0) + 1;
    return { answered: n, pending: [...r, { id: e, dueAt: n + eb(i), misses: i }], misses: { ...t.misses, [e]: i } };
  }
  const sb = { forward: [[0, 1], [1, 0]], diagonal: [[0, 1], [1, 0], [1, 1], [-1, 1]], all: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]] };
  function nb(t) {
    const e = t.reduce((s, n) => s + n, 0);
    return Math.max(6, ...t, Math.ceil(Math.sqrt(e * 2.4)));
  }
  function rb(t, e, s, n, r) {
    const i = Bt(n, "wordsearch", e, r), o = Array.from({ length: e }, () => Array(e).fill(null)), a = [], c = [], l = [...t].sort((d, h) => h.letters.length - d.letters.length || d.id.localeCompare(h.id));
    for (const d of l) {
      let h = false;
      for (let p = 0; p < 400 && !h; p++) {
        const [f, m] = i.choice(s), k = i.randrange(e), g = i.randrange(e), b = k + f * (d.letters.length - 1), v = g + m * (d.letters.length - 1);
        if (b < 0 || b >= e || v < 0 || v >= e) continue;
        let $ = true;
        for (let S = 0; S < d.letters.length && $; S++) {
          const _ = o[k + f * S][g + m * S];
          _ !== null && _ !== d.letters[S] && ($ = false);
        }
        $ && (d.letters.forEach((S, _) => {
          o[k + f * _][g + m * _] = S;
        }), a.push({ id: d.id, answer: d.letters.join(""), row: k, col: g, dr: f, dc: m }), h = true);
      }
      h || c.push(d.id);
    }
    return { cells: o, placements: a, unplaced: c };
  }
  function ib(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = sb[(_a3 = s.directions) != null ? _a3 : "diagonal"], r = [], i = [], o = /* @__PURE__ */ new Set();
    for (const g of t) {
      const b = Array.from(kt(g.answer));
      b.length < 2 || o.has(g.id) ? i.push(g.id) : r.push({ id: g.id, letters: b }), o.add(g.id);
    }
    const a = (_b3 = s.size) != null ? _b3 : nb(r.map((g) => g.letters.length)), c = s.size ? [s.size] : [a, a + 1, a + 2, a + 3];
    let l = null, d = a;
    for (const g of c) {
      for (let b = 0; b < 12; b++) {
        const v = rb(r.filter((S) => S.letters.length <= g), g, n, e, b), $ = [...v.unplaced, ...r.filter((S) => S.letters.length > g).map((S) => S.id)];
        if ((!l || $.length < l.unplaced.length) && (l = { ...v, unplaced: $ }, d = g), l.unplaced.length === 0) break;
      }
      if (l && l.unplaced.length === 0) break;
    }
    const h = d, p = (_c2 = l == null ? void 0 : l.cells) != null ? _c2 : Array.from({ length: h }, () => Array(h).fill(null)), f = r.flatMap((g) => g.letters), m = Bt(e, "wordsearch-fill", h), k = p.map((g) => g.map((b) => b != null ? b : f.length > 0 ? m.choice(f) : "A"));
    return { size: h, cells: k, placements: (_d2 = l == null ? void 0 : l.placements) != null ? _d2 : [], unplaced: [...i, ...(_e2 = l == null ? void 0 : l.unplaced) != null ? _e2 : []] };
  }
  function gc(t, e) {
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
  function kc(t) {
    const e = Array.from(t.answer).length - 1;
    return { start: [t.row, t.col], end: [t.row + t.dr * e, t.col + t.dc * e] };
  }
  function ob(t, e) {
    const s = [];
    (t.cells.length !== t.size || t.cells.some((n) => n.length !== t.size)) && s.push("the grid is not square");
    for (const n of e) {
      const r = t.placements.find((i) => i.id === n.id);
      if (!r) {
        t.unplaced.includes(n.id) || s.push("word ".concat(n.id, " is neither placed nor reported unplaced"));
        continue;
      }
      gc(t, kc(r)) !== kt(n.answer) && s.push("word ".concat(n.id, " does not read back from its placement"));
    }
    for (const n of t.cells) for (const r of n) new RegExp("^\\p{L}$", "u").test(r) || s.push("a cell holds ".concat(JSON.stringify(r), ", not a letter"));
    return s;
  }
  const Tt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), bc = (t) => Array.isArray(t) && t.every((e) => typeof e == "string"), be = (t) => ({ correct: false, score: 0, expected: t, invalid: true }), It = (t, e, s, n) => {
    const r = e === 0 ? 0 : t / e, i = e > 0 && t === e;
    return { correct: i, partial: !i && t > 0, score: r, expected: s, ...n ? { detail: n } : {} };
  };
  function ab(t, e) {
    if (typeof e != "string") return be(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function cb(t, e) {
    if (typeof e != "boolean") return be(t.answer);
    const s = e === t.answer;
    return { correct: s, score: s ? 1 : 0, expected: t.answer };
  }
  function lb(t, e) {
    const s = [...t.answers].sort();
    if (!bc(e)) return be(s);
    const n = new Set(e), r = s.filter((c) => n.has(c)).length, i = [...n].filter((c) => !t.answers.includes(c)).length, o = r === s.length && i === 0, a = Math.max(0, (r - i) / s.length);
    return { correct: o, partial: !o && a > 0, score: a, expected: s };
  }
  function dn(t, e, s, n) {
    const r = s.text.accepted(e), i = Fk(t, r, { diacritics: Bk(n, s.diacritics, s.lang), typos: s.typos, lang: s.lang });
    return { correct: i.correct, score: i.correct ? 1 : 0, expected: i.canonical, ...i.typo ? { typo: true } : {}, ...i.diacritics ? { diacritics: true } : {}, ...i.translit ? { translit: true } : {}, ...i.caps ? { caps: true } : {} };
  }
  function db(t, e, s) {
    var _a3;
    return typeof e != "string" ? be((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : dn(e, t.answer, s, t.strictDiacritics);
  }
  function ub(t, e, s) {
    const n = Object.fromEntries(t.gaps.map((d) => {
      var _a3;
      return [d.id, (_a3 = s.text.canonical(d.answer)) != null ? _a3 : null];
    }));
    if (!Tt(e)) return be(n);
    const r = {};
    let i = false, o = false, a = false, c = false;
    for (const d of t.gaps) {
      const h = e[d.id], p = typeof h == "string" ? dn(h, d.answer, s, t.strictDiacritics) : { correct: false };
      r[d.id] = p.correct, "typo" in p && p.typo && (i = true), "diacritics" in p && p.diacritics && (o = true), "translit" in p && p.translit && (a = true), "caps" in p && p.caps && (c = true);
    }
    return { ...It(Object.values(r).filter(Boolean).length, t.gaps.length, n, r), ...i ? { typo: true } : {}, ...o ? { diacritics: true } : {}, ...a ? { translit: true } : {}, ...c ? { caps: true } : {} };
  }
  function hb(t) {
    const e = t.forms.filter((s) => !s.given);
    return t.ask === void 0 ? e : e.slice(0, t.ask);
  }
  function pb(t, e, s) {
    var _a3;
    const n = Object.fromEntries(t.forms.map((p) => {
      var _a4;
      return [p.person, (_a4 = s.text.canonical(p.answer)) != null ? _a4 : null];
    }));
    if (!Tt(e)) return be(n);
    const r = t.forms.filter((p) => !p.given), i = r.filter((p) => typeof e[p.person] == "string");
    if (i.length === 0 || i.length !== Math.min((_a3 = t.ask) != null ? _a3 : r.length, r.length)) return be(n);
    const o = { ...s, typos: false }, a = {};
    let c = false, l = false, d = false;
    for (const p of i) {
      const f = dn(e[p.person], p.answer, o, t.strictDiacritics);
      a[p.person] = f.correct, f.correct && f.diacritics && (c = true), f.translit && (l = true), f.caps && (d = true);
    }
    return { ...It(Object.values(a).filter(Boolean).length, i.length, n, a), ...c ? { diacritics: true } : {}, ...l ? { translit: true } : {}, ...d ? { caps: true } : {} };
  }
  function fb(t, e) {
    const s = Object.fromEntries(t.pairs.map((r) => [r.id, r.id]));
    if (!Tt(e)) return be(s);
    const n = {};
    for (const r of t.pairs) n[r.id] = e[r.id] === r.id;
    return It(Object.values(n).filter(Boolean).length, t.pairs.length, s, n);
  }
  function mb(t, e) {
    const s = t.items.map((r) => r.id);
    if (!bc(e) || e.length !== s.length || new Set(e).size !== s.length || e.some((r) => !s.includes(r))) return be(s);
    const n = {};
    return s.forEach((r, i) => {
      n[r] = e[i] === r;
    }), It(Object.values(n).filter(Boolean).length, s.length, s, n);
  }
  function gb(t, e) {
    return fs(t.items.map((s) => s.id), Bt(e, t.id, "order"));
  }
  function kb(t, e) {
    const s = Object.fromEntries(t.items.map((r) => [r.id, r.group]));
    if (!Tt(e)) return be(s);
    const n = {};
    for (const r of t.items) n[r.id] = e[r.id] === r.group;
    return It(Object.values(n).filter(Boolean).length, t.items.length, s, n);
  }
  function bb(t, e, s) {
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
  function vc(t, e, s) {
    var _a3;
    return (_a3 = t.regions.find((n) => bb(n.shape, e, s))) == null ? void 0 : _a3.id;
  }
  function vb(t, e) {
    var _a3;
    let s;
    if (typeof e == "string") s = e;
    else if (Tt(e) && typeof e.x == "number" && typeof e.y == "number") s = (_a3 = vc(t, e.x, e.y)) != null ? _a3 : "";
    else return be(t.answer);
    const n = s === t.answer;
    return { correct: n, score: n ? 1 : 0, expected: t.answer };
  }
  function wb(t, e, s) {
    var _a3;
    if (t.mode === "choose") {
      if (typeof e != "string") return be(t.answer);
      const n = e === t.answer;
      return { correct: n, score: n ? 1 : 0, expected: t.answer };
    }
    return typeof e != "string" ? be((_a3 = s.text.canonical(t.answer)) != null ? _a3 : null) : dn(e, t.answer, s, t.strictDiacritics);
  }
  function yb(t, e) {
    return uc(e) ? e === "again" ? { correct: false, score: 0, expected: null } : e === "hard" ? { correct: true, partial: true, score: 0.6, expected: null } : { correct: true, score: 1, expected: null } : be(null);
  }
  function wc(t, e) {
    const s = t.words.flatMap((n) => {
      const r = e.text.canonical(n.answer);
      return r ? [{ id: n.id, answer: r }] : [];
    });
    return { grid: Gk(s, t.seed, { maxSize: t.maxSize }), words: s };
  }
  function Sb(t, e, s) {
    const n = Object.fromEntries(t.words.map((i) => {
      var _a3;
      return [i.id, (_a3 = s.text.canonical(i.answer)) != null ? _a3 : null];
    }));
    if (!Tt(e)) return be(n);
    const r = {};
    for (const i of t.words) {
      const o = s.text.canonical(i.answer), a = e[i.id];
      r[i.id] = o !== void 0 && typeof a == "string" && kt(a) !== "" && kt(a) === kt(o);
    }
    return It(Object.values(r).filter(Boolean).length, t.words.length, n, r);
  }
  function un(t, e) {
    const s = t.words.flatMap((n) => {
      const r = e.text.canonical(n.answer);
      return r ? [{ id: n.id, answer: r }] : [];
    });
    return { grid: ib(s, t.seed, { size: t.size, directions: t.directions }), words: s };
  }
  const $b = (t) => Tt(t) && Array.isArray(t.start) && Array.isArray(t.end) && t.start.length === 2 && t.end.length === 2 && [...t.start, ...t.end].every((e) => Number.isInteger(e));
  function yc(t, e, s) {
    const n = /* @__PURE__ */ new Set();
    for (const r of s) {
      const i = gc(t, r);
      if (!i) continue;
      const o = Array.from(i).reverse().join("");
      for (const a of e) {
        const c = kt(a.answer);
        (c === i || c === o) && n.add(a.id);
      }
    }
    return [...n];
  }
  function zb(t, e, s) {
    const n = t.words.map((c) => c.id);
    if (!Array.isArray(e) || !e.every($b)) return be(n);
    const { grid: r, words: i } = un(t, s), o = new Set(yc(r, i, e)), a = Object.fromEntries(n.map((c) => [c, o.has(c)]));
    return It(o.size, n.length, n, a);
  }
  function Kt(t) {
    var _a3, _b3, _c2, _d2;
    return { text: t.text, diacritics: (_a3 = t.pack.matching) == null ? void 0 : _a3.diacritics, typos: (_b3 = t.pack.matching) == null ? void 0 : _b3.typos, lang: (_d2 = (_c2 = t.targetLang) != null ? _c2 : t.pack.targetLang) != null ? _d2 : t.text.lang };
  }
  const ms = /* @__PURE__ */ new Map();
  function _b(t, e = {}) {
    if (ms.has(t.kind) && !e.replace) throw new Error('item kind "'.concat(t.kind, '" is already registered'));
    ms.set(t.kind, t);
  }
  function hn(t, e, s) {
    const n = ms.get(t.kind);
    if (!n) return { correct: false, score: 0, expected: null, invalid: true };
    try {
      return n.check(t, e, s);
    } catch (e2) {
      return { correct: false, score: 0, expected: n.keyOf(t), invalid: true };
    }
  }
  const jb = (t, e) => {
    var _a3;
    return (_a3 = ms.get(t.kind)) == null ? void 0 : _a3.solve(t, e);
  };
  function qt(t, e, s) {
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
  const Sc = (t, e) => qt(t.catalogs, e, t.pack.targetLang), $c = (t, e) => Kt({ pack: t.pack, text: Sc(t, e) });
  function zc(t, e, s, n) {
    if (!e) return [];
    const r = t.assets.get(e);
    return r && r.kind !== s ? [{ code: "ASSET_KIND", path: n, message: 'asset "'.concat(e, '" is ').concat(r.kind, ", this item needs ").concat(s) }] : [];
  }
  function je(t) {
    _b(t);
  }
  je({ kind: "mcq", form: "Multiple choice", recall: false, schema: Ga, check: (t, e) => ab(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.options, "options"), ...t.options.some((e) => e.id === t.answer) ? [] : [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }]], distractors: (t) => t.options.flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "true-false", form: "True or false", recall: false, schema: Wa, check: (t, e) => cb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...te("why", t.why)] }), je({ kind: "multi-select", form: "Select all that apply", recall: false, schema: Ha, check: (t, e) => lb(t, e), keyOf: (t) => [...t.answers].sort(), solve: (t) => [...t.answers], textRefs: (t) => [..._e(t), ...t.options.flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.options, "options"), ...t.answers.flatMap((e, s) => t.options.some((n) => n.id === e) ? [] : [{ code: "UNKNOWN_OPTION", path: "answers[".concat(s, "]"), message: 'the answer "'.concat(e, '" is not one of the options') }])], distractors: (t) => t.options.flatMap((e, s) => t.answers.includes(e.id) ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) }), je({ kind: "cloze", form: "Fill the gap", recall: true, schema: Va, check: (t, e, s) => ub(t, e, s), keyOf: (t) => Object.fromEntries(t.gaps.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.gaps.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("text", t.text), ...t.gaps.flatMap((e, s) => [...te("gaps[".concat(s, "].answer"), e.answer, "accepted"), ...e.bank ? [...te("gaps[".concat(s, "].answer"), e.answer), ...e.bank.flatMap((n, r) => te("gaps[".concat(s, "].bank[").concat(r, "]"), n))] : []])], validate: (t, e) => {
    const s = [...Be(t.gaps, "gaps")];
    t.gaps.forEach((n, r) => {
      n.bank && !n.bank.includes(n.answer) && s.push({ code: "UNKNOWN_OPTION", path: "gaps[".concat(r, "].bank"), message: 'the word bank of gap "'.concat(n.id, '" does not contain its answer key') });
    });
    for (const n of e.languages) {
      const r = Sc(e, n).text(t.text);
      if (r !== void 0) for (const i of t.gaps) r.includes("{{".concat(i.id, "}}")) || s.push({ code: "MISSING_GAP_MARKER", path: "text", message: 'the text in "'.concat(n, '" has no {{').concat(i.id, "}} marker") });
    }
    return s;
  } }), je({ kind: "typed", form: "Type the answer", recall: true, schema: Ja, check: (t, e, s) => db(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => [..._e(t), ...te("answer", t.answer, "accepted")] }), je({ kind: "match-pairs", form: "Match the pairs", recall: false, schema: Qa, check: (t, e) => fb(t, e), keyOf: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), solve: (t) => Object.fromEntries(t.pairs.map((e) => [e.id, e.id])), textRefs: (t) => [..._e(t), ...t.pairs.flatMap((e, s) => [...te("pairs[".concat(s, "].left"), e.left), ...te("pairs[".concat(s, "].right"), e.right)])], validate: (t) => Be(t.pairs, "pairs") }), je({ kind: "order", form: "Put in order", recall: true, schema: Xa, check: (t, e) => mb(t, e), keyOf: (t) => t.items.map((e) => e.id), solve: (t) => t.items.map((e) => e.id), textRefs: (t) => [..._e(t), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].when"), e.when)])], validate: (t) => Be(t.items, "items") }), je({ kind: "sort-groups", form: "Sort into groups", recall: true, schema: ec, check: (t, e) => kb(t, e), keyOf: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), solve: (t) => Object.fromEntries(t.items.map((e) => [e.id, e.group])), textRefs: (t) => [..._e(t), ...t.groups.flatMap((e, s) => te("groups[".concat(s, "].title"), e.title)), ...t.items.flatMap((e, s) => [...te("items[".concat(s, "].text"), e.text), ...te("items[".concat(s, "].why"), e.why)])], validate: (t) => [...Be(t.groups, "groups"), ...Be(t.items, "items"), ...t.items.flatMap((e, s) => t.groups.some((n) => n.id === e.group) ? [] : [{ code: "UNKNOWN_GROUP", path: "items[".concat(s, "].group"), message: 'the group "'.concat(e.group, '" does not exist') }])] }), je({ kind: "hotspot", form: "Find it on the picture", recall: true, schema: tc, check: (t, e) => vb(t, e), keyOf: (t) => t.answer, solve: (t) => t.answer, textRefs: (t) => [..._e(t), ...t.regions.flatMap((e, s) => [...te("regions[".concat(s, "].label"), e.label), ...te("regions[".concat(s, "].why"), e.why)])], validate: (t, e) => [...Be(t.regions, "regions"), ...t.regions.some((s) => s.id === t.answer) ? [] : [{ code: "UNKNOWN_REGION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the regions') }], ...zc(e, t.asset, "image", "asset")] }), je({ kind: "listening", form: "Listen and answer", recall: false, schema: sc, check: (t, e, s) => wb(t, e, s), keyOf: (t) => t.answer, solve: (t, e) => {
    var _a3;
    return t.mode === "choose" ? t.answer : (_a3 = e.text.canonical(t.answer)) != null ? _a3 : "";
  }, textRefs: (t) => {
    var _a3;
    return [..._e(t), ...te("transcript", t.transcript), ...t.mode === "type" ? te("answer", t.answer, "accepted") : [], ...((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => [...te("options[".concat(s, "].text"), e.text), ...te("options[".concat(s, "].why"), e.why)])];
  }, validate: (t, e) => {
    var _a3, _b3;
    return [...Be((_a3 = t.options) != null ? _a3 : [], "options"), ...t.mode === "choose" && !((_b3 = t.options) != null ? _b3 : []).some((s) => s.id === t.answer) ? [{ code: "UNKNOWN_OPTION", path: "answer", message: 'the answer "'.concat(t.answer, '" is not one of the options') }] : [], ...zc(e, t.asset, "audio", "asset")];
  }, distractors: (t) => {
    var _a3;
    return t.mode === "choose" ? ((_a3 = t.options) != null ? _a3 : []).flatMap((e, s) => e.id === t.answer ? [] : [{ path: "options[".concat(s, "].why"), id: e.id, why: e.why }]) : [];
  } }), je({ kind: "flashcard", form: "Flashcard", recall: true, schema: nc, check: (t, e) => yb(t, e), keyOf: () => null, solve: () => "good", textRefs: (t) => [..._e(t), ...te("back", t.back)], validate: (t, e) => t.backAsset && !e.assets.has(t.backAsset) ? [{ code: "UNKNOWN_ASSET", path: "backAsset", message: 'unknown asset "'.concat(t.backAsset, '"') }] : [] }), je({ kind: "crossword", form: "Crossword", recall: true, schema: rc, check: (t, e, s) => Sb(t, e, s), keyOf: (t) => Object.fromEntries(t.words.map((e) => [e.id, e.answer])), solve: (t, e) => Object.fromEntries(t.words.map((s) => {
    var _a3;
    return [s.id, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => [...te("words[".concat(s, "].answer"), e.answer, "accepted"), ...te("words[".concat(s, "].clue"), e.clue)])], validate: (t, e) => {
    const s = Be(t.words, "words");
    for (const n of e.languages) {
      const r = $c(e, n);
      if (t.words.some((a) => !r.text.canonical(a.answer))) continue;
      const { grid: i, words: o } = wc(t, r);
      i.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the crossword cannot place: ').concat(i.unplaced.join(", ")) });
      for (const a of Wk(i, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), je({ kind: "conjugation", form: "Conjugate the verb", recall: true, schema: Ya, check: (t, e, s) => pb(t, e, s), keyOf: (t) => Object.fromEntries(t.forms.filter((e) => !e.given).map((e) => [e.person, e.answer])), solve: (t, e) => Object.fromEntries(hb(t).map((s) => {
    var _a3;
    return [s.person, (_a3 = e.text.canonical(s.answer)) != null ? _a3 : ""];
  })), textRefs: (t) => [..._e(t), ...te("verb", t.verb), ...t.forms.flatMap((e, s) => [...te("forms[".concat(s, "].label"), e.label), ...te("forms[".concat(s, "].answer"), e.answer, "accepted")])], validate: (t) => {
    const e = [];
    return t.forms.filter((n) => !n.given).length === 0 && e.push({ code: "CONJ_NOTHING_ASKED", path: "forms", message: "every form is given: the item asks nothing" }), e;
  } }), je({ kind: "word-search", form: "Word search", recall: true, schema: ic, check: (t, e, s) => zb(t, e, s), keyOf: (t) => t.words.map((e) => e.id), solve: (t, e) => un(t, e).grid.placements.map(kc), textRefs: (t) => [..._e(t), ...t.words.flatMap((e, s) => te("words[".concat(s, "].answer"), e.answer, "accepted"))], validate: (t, e) => {
    const s = Be(t.words, "words");
    for (const n of e.languages) {
      const r = $c(e, n);
      if (t.words.some((a) => !r.text.canonical(a.answer))) continue;
      const { grid: i, words: o } = un(t, r);
      i.unplaced.length > 0 && s.push({ code: "PUZZLE_UNPLACED", path: "words", message: 'in "'.concat(n, '" the word search cannot place: ').concat(i.unplaced.join(", ")) });
      for (const a of ob(i, o)) s.push({ code: "PUZZLE_INVALID", path: "words", message: 'in "'.concat(n, '": ').concat(a) });
    }
    return s;
  } }), [...ms.keys()];
  const xb = 0.7, Eb = 0.85, _c = (t = 3) => ({ window: [], difficulty: t });
  function Ab(t) {
    return t.length === 0 ? null : t.filter(Boolean).length / t.length;
  }
  function Tb(t, e = {}) {
    var _a3, _b3;
    return t < ((_a3 = e.low) != null ? _a3 : xb) ? "low" : t > ((_b3 = e.high) != null ? _b3 : Eb) ? "high" : "in";
  }
  function Ib(t, e, s = {}) {
    var _a3, _b3, _c2, _d2;
    const n = (_a3 = s.windowSize) != null ? _a3 : 10, r = [...t.window, e].slice(-n), i = Ab(r);
    if (i === null || r.length < ((_b3 = s.minSamples) != null ? _b3 : 4)) return { window: r, difficulty: t.difficulty };
    const o = (_c2 = s.minDifficulty) != null ? _c2 : 1, a = (_d2 = s.maxDifficulty) != null ? _d2 : 5, c = Tb(i, s), l = c === "low" ? Math.max(o, t.difficulty - 1) : c === "high" ? Math.min(a, t.difficulty + 1) : t.difficulty;
    return l === t.difficulty ? { window: r, difficulty: l } : { window: [], difficulty: l };
  }
  function Mb(t, e, s, n = []) {
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
  const Zr = 1, Ob = ["murdle", "knights", "testimony", "logic", "quiz"], pn = ["easy", "medium", "hard"], ce = x().regex(/^[a-z][a-z0-9]*$/, "an item id such as s1, w2, p3"), Ur = /^[a-z][a-z0-9_]*$/, Nb = B({ id: x().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either"]), a: ce, b: et([ce, Et([ce, ce])]), descr: N(ce).optional() }), Fr = B({ rule: x(), cell: Et([ce, ce]).optional(), value: x(), clue: x().optional(), from: N(Et([ce, ce])).optional(), who: x().optional(), statement: x().optional() }).passthrough(), jc = B({ steps: L().int(), score: L(), rules: Q(x(), L()) }), Pb = jc, fn = { format: se(Zr), seed: L().int().optional(), band: Y(pn).optional(), difficulty: Pb, steps: N(Fr) }, Rb = B({ ...fn, kind: se("murdle"), size: L().int().min(3).max(5), categories: N(B({ key: x(), items: N(ce).min(3) })).min(3).max(4), descr: Q(x(), x()).optional(), solution: Q(x(), Q(x(), ce)), clues: N(Nb).min(1), murder: B({ place: ce, answer: B({ suspect: ce, weapon: ce, place: ce, motive: ce.optional() }) }) }), Mt = x().regex(/^k\d+$/, "a speaker id such as k1"), mn = lk(() => et([B({ type: Y(["knight", "knave"]), who: Mt }), B({ type: Y(["same", "diff"]), a: Mt, b: Mt }), B({ type: Y(["some_knave", "all_knight"]), of: N(Mt).min(1) }), B({ type: se("exactly"), k: L().int().min(0), of: N(Mt).min(1) }), B({ type: se("not"), c: mn }), B({ type: Y(["and", "or"]), a: mn, b: mn })])), Db = B({ ...fn, kind: se("knights"), size: L().int().min(2).max(5), speakers: N(Mt).min(2).max(5), statements: N(B({ id: x().regex(/^t\d+$/, "a statement id such as t1"), speaker: Mt, claim: mn })).min(1), solution: Q(x(), Y(["knight", "knave"])) }), gn = B({ key: x().regex(/^[a-z][a-z0-9_]*$/, "a key such as clock"), value: x().min(1) }), Lb = B({ ...fn, kind: se("testimony"), size: L().int().min(2).max(10), witness: se("wit"), keys: N(B({ key: gn.shape.key, label: x().optional(), values: N(x().min(1)).min(2), item: x().optional(), claim: x().optional(), fact: x().optional() })).min(1), statements: N(B({ id: x().regex(/^t\d+$/, "a statement id such as t1"), claims: N(gn).min(1), press: B({ claims: N(gn).min(1) }).optional() })).min(2), evidence: N(B({ id: x().regex(/^e\d+$/, "an evidence id such as e1"), facts: N(gn).min(1) })).min(1), solution: B({ statement: x(), evidence: x(), press: J().optional() }) }), Cb = B({ id: x().regex(/^c\d+$/, "a clue id such as c1"), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([ce, Et([ce, ce])]), b: et([ce, Et([ce, ce])]), n: L().int().min(1).optional() }), Zb = B({ ...fn, kind: se("logic"), size: L().int().min(3).max(5), categories: N(B({ key: x(), items: N(ce).min(3), ref: x().optional() })).min(3).max(5), ordinal: B({ category: x(), unit: x().optional() }), hardTrans: L().int().optional(), solution: Q(x(), Q(x(), ce)), clues: N(Cb).min(1) }), Ub = B({ id: x().regex(Ur), options: N(x().regex(Ur)).min(2).max(6), answer: x().regex(Ur) }).superRefine((t, e) => {
    t.options.includes(t.answer) || e.addIssue({ code: Or.custom, path: ["answer"], message: 'answer "'.concat(t.answer, '" is not in options') });
  }), Fb = B({ format: se(Zr).optional(), band: Y(pn).optional(), steps: N(Fr).optional(), kind: se("quiz"), seed: L().int(), questions: N(Ub).min(1).max(10), solution: Q(x(), x()), difficulty: jc }).superRefine((t, e) => {
    const s = /* @__PURE__ */ new Set();
    for (const n of t.questions) s.has(n.id) && e.addIssue({ code: Or.custom, path: ["questions"], message: 'duplicate question id "'.concat(n.id, '"') }), s.add(n.id), t.solution[n.id] !== n.answer && e.addIssue({ code: Or.custom, path: ["solution", n.id], message: 'solution["'.concat(n.id, '"] must match question answer "').concat(n.answer, '"') });
  }), xc = Tr("kind", [Rb, Db, Lb, Zb, Fb]);
  Oa(xc, B({ names: Q(x(), x()), text: Q(x(), x()) })), B({ unique: J(), solutions: L().int(), deducible: J(), band: Y(pn).nullable(), score: L(), steps: N(Fr), rules: Q(x(), L()) }), B({ key: x().regex(/^[a-z][a-z0-9_]*$/, "lowercase letters, digits and underscores, starting with a letter"), kind: Y(Ob), data: xc, names: Q(x(), x()), text: Q(x(), x()), links: Q(x(), B({ type: Y(["character", "place", "image"]), key: x() })).optional(), clueAt: Q(x(), x()).optional(), onFail: B({ mode: Y(["retry", "continue", "chapter"]), to: L().int().positive().optional(), maxTries: L().int().positive().optional() }).optional(), hints: J().optional(), verified: B({ unique: J(), deducible: J(), score: L(), textChecked: J(), by: x() }) }), B({ names: Q(x(), x()), text: Q(x(), x()) }), et([B({ id: x(), type: Y(["is", "not", "either", "neither", "oneof", "before", "after", "apart"]), a: et([x(), N(x()).length(2)]), b: et([x(), N(x()).length(2)]), n: L().int().optional() }), B({ id: x(), speaker: x(), claim: Q(x(), xt()) }), B({ id: x(), truthTellers: x(), liars: x() }), B({ id: x(), claims: N(B({ key: x(), value: x() })).optional(), facts: N(B({ key: x(), value: x() })).optional() }).refine((t) => t.claims !== void 0 || t.facts !== void 0, "testimony entry needs claims or facts"), B({ id: x(), prompt: x().optional(), options: N(x()).optional(), answer: x().optional() }).passthrough()]);
  const Ge = Zr, Gt = ["clue", "elim", "last", "either", "order", "trans"], Bb = { clue: 1, elim: 1, last: 2, either: 2, order: 2, trans: 3 }, gs = pn, Ec = ["clue", "elim", "last"];
  class Z extends Error {
    constructor(e) {
      super(e), this.name = "PuzzleError";
    }
  }
  function ks(t) {
    const e = {};
    for (let s = 0; s < t.categories.length; s++) for (const n of t.categories[s].items) e[n] = s;
    return e;
  }
  function Wt(t, e) {
    const n = ks(t)[e];
    if (n === void 0) throw new Z("unknown item ".concat(e));
    return t.categories[n].key;
  }
  function Pe(t) {
    const e = t.includes("|") ? t.split("|") : t.split(",");
    if (e.length !== 2) throw new Z('invalid cell key "'.concat(t, '"'));
    return [e[0], e[1]];
  }
  function rt(t) {
    const e = t.categories, s = [];
    for (let n = 0; n < e.length; n++) for (let r = n + 1; r < e.length; r++) for (const i of e[n].items) for (const o of e[r].items) s.push("".concat(i, "|").concat(o));
    return s;
  }
  function Ot(t) {
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
  function kn(t) {
    const e = t.ordinal;
    if (!e) return null;
    for (const s of t.categories) if (s.key === e.category) return [...s.items];
    throw new Z('no ordinal category "'.concat(e.category, '"'));
  }
  function Ac(t, e, s) {
    const n = t[s];
    for (let r = 0; r < e.length; r++) if (t[e[r]] === n) return r;
    throw new Z("".concat(s, " has no place in the ordinal category"));
  }
  function Br(t, e, s) {
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
      const r = Ac(e, s, t.a), i = Ac(e, s, t.b);
      if (n === "before") return r < i;
      if (n === "after") return r > i;
      if (typeof t.n != "number" || t.n < 1) throw new Z("an apart clue needs the number n");
      return Math.abs(r - i) === t.n;
    }
    throw new Z('unknown clue type "'.concat(n, '"'));
  }
  function Tc(t) {
    const e = [];
    for (const s of ["a", "b"]) {
      const n = t[s];
      Array.isArray(n) ? e.push(...n) : n !== void 0 && e.push(n);
    }
    return e;
  }
  function Kr(t) {
    var _a3, _b3;
    const e = t.murder.place;
    for (const s of t.categories[0].items) if (((_a3 = t.solution[s]) == null ? void 0 : _a3.place) === e) {
      const n = { suspect: s, weapon: t.solution[s].weapon, place: e };
      return ((_b3 = t.solution[s]) == null ? void 0 : _b3.motive) && (n.motive = t.solution[s].motive), n;
    }
    throw new Z("nobody was at the murder place");
  }
  function Ic(t) {
    var _a3;
    if (t.format !== void 0 && t.format !== Ge) throw new Z("unknown puzzle format ".concat(t.format));
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
      for (const i of Tc(r)) if (!n.has(i)) throw new Z("clue ".concat((_a3 = r.id) != null ? _a3 : "", " names the unknown item ").concat(i));
    }
  }
  const Ht = "knight", bs = "knave", Kb = { direct: 1, split: 4 }, Mc = ["Aldo", "Brin", "Cass", "Dara", "Evo"];
  function vs(t) {
    const e = t.type;
    if (e === "knight" || e === "knave") return /* @__PURE__ */ new Set([t.who]);
    if (e === "same" || e === "diff") return /* @__PURE__ */ new Set([t.a, t.b]);
    if (e === "some_knave" || e === "all_knight" || e === "exactly") return new Set(t.of);
    if (e === "not") return vs(t.c);
    if (e === "and" || e === "or") {
      const s = vs(t.a), n = vs(t.b);
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
  function* qb(t) {
    const e = t.length, s = 1 << e;
    for (let n = 0; n < s; n++) {
      const r = {};
      for (let i = 0; i < e; i++) r[t[i]] = (n & 1 << i) !== 0;
      yield r;
    }
  }
  function Gb(t, e) {
    return t.every((s) => e[s.speaker] === it(s.claim, e));
  }
  function Wb(t, e = 2, s) {
    const n = s != null ? s : t.statements;
    let r = 0;
    for (const i of qb(t.speakers)) if (Gb(n, i) && (r++, r >= e)) break;
    return r;
  }
  const bn = Wb;
  function Oc(t) {
    const e = {};
    for (const [s, n] of Object.entries(t.solution)) e[s] = n === Ht;
    return e;
  }
  function Hb(t, e) {
    const s = Array.from(/* @__PURE__ */ new Set([t.speaker, ...vs(t.claim)])).sort(), n = s.filter((o) => e[o] === void 0), r = [], i = 1 << n.length;
    for (let o = 0; o < i; o++) {
      const a = {};
      for (const c of s) e[c] !== void 0 && (a[c] = e[c]);
      for (let c = 0; c < n.length; c++) a[n[c]] = (o & 1 << c) !== 0;
      a[t.speaker] === it(t.claim, a) && r.push(a);
    }
    return [r, n];
  }
  function qr(t, e, s) {
    let n = true;
    for (; n; ) {
      n = false;
      for (const r of t) {
        const [i, o] = Hb(r, e);
        if (i.length === 0) return r.id;
        for (const a of o) {
          const c = new Set(i.map((l) => l[a]));
          if (c.size === 1) {
            const l = c.values().next().value;
            e[a] = l, s !== null && s.push({ rule: "direct", statement: r.id, who: a, value: l ? Ht : bs }), n = true;
          }
        }
      }
    }
    return null;
  }
  function ws(t, e, s, n) {
    var _a3, _b3;
    const r = {};
    for (const o of s) r[o.rule] = ((_a3 = r[o.rule]) != null ? _a3 : 0) + 1;
    const i = Object.entries(r).reduce((o, [a, c]) => {
      var _a4;
      return o + ((_a4 = Kb[a]) != null ? _a4 : 1) * c;
    }, 0);
    return { solved: n && Object.keys(e).length === t.speakers.length, steps: s, rules: r, score: i, splits: (_b3 = r.split) != null ? _b3 : 0 };
  }
  function Vb(t, e) {
    const s = e != null ? e : t.statements, n = [], r = {};
    if (qr(s, r, n) !== null) return ws(t, r, n, false);
    for (; Object.keys(r).length < t.speakers.length; ) {
      let a = false;
      const c = t.speakers.filter((l) => r[l] === void 0);
      for (const l of c) {
        const d = {};
        for (const h of [true, false]) {
          const p = { ...r, [l]: h };
          d[String(h)] = qr(s, p, null);
        }
        if (d.true !== null && d.false !== null) return ws(t, r, n, false);
        if (d.true !== null || d.false !== null) {
          const h = d.true !== null;
          if (r[l] = !h, n.push({ rule: "split", who: l, value: h ? bs : Ht, contradicts: h ? Ht : bs, statement: d[String(h)] }), qr(s, r, n) !== null) return ws(t, r, n, false);
          a = true;
          break;
        }
      }
      if (!a) return ws(t, r, n, false);
    }
    const i = Oc(t), o = t.speakers.every((a) => r[a] === i[a]);
    return ws(t, r, n, o);
  }
  const Nc = Vb;
  function Yb(t) {
    var _a3;
    const e = (_a3 = t.splits) != null ? _a3 : 0;
    return e === 0 ? "easy" : e === 1 ? "medium" : "hard";
  }
  const Jb = Yb;
  function Qb(t) {
    var _a3, _b3;
    if (t.format !== void 0 && t.format !== Ge) throw new Z("unknown puzzle format ".concat(t.format));
    if (t.kind !== "knights") throw new Z("not a knights puzzle");
    const e = t.speakers || [];
    if (e.length < 2 || e.length > 5 || new Set(e).size !== e.length) throw new Z("a Knights and Knaves puzzle has 2 to 5 different speakers");
    for (const n of e) if (((_a3 = t.solution) == null ? void 0 : _a3[n]) !== Ht && ((_b3 = t.solution) == null ? void 0 : _b3[n]) !== bs) throw new Z("the solution has no knight or knave for ".concat(n));
    const s = /* @__PURE__ */ new Set();
    for (const n of t.statements || []) {
      if (s.has(n.id)) throw new Z("statement ".concat(n.id, " is listed twice"));
      if (s.add(n.id), !e.includes(n.speaker)) throw new Z("statement ".concat(n.id, " has an unknown speaker ").concat(n.speaker));
      for (const r of vs(n.claim)) if (!e.includes(r)) throw new Z("statement ".concat(n.id, " names the unknown speaker ").concat(r));
    }
  }
  function Xb(t) {
    Qb(t);
    const e = Oc(t);
    for (const n of t.statements) if (e[n.speaker] !== it(n.claim, e)) throw new Z("statement ".concat(n.id, " does not hold in the solution"));
    if (bn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const s = Nc(t);
    if (!s.solved) throw new Z("the puzzle cannot be solved without guessing");
    return s;
  }
  function ev(t) {
    return t.length === 0 ? "" : t.length === 1 ? t[0] : t.slice(0, -1).join(", ") + " and " + t[t.length - 1];
  }
  function vn(t) {
    const e = t.split(" ")[0];
    return ["At", "All", "Exactly", "It", "Either"].includes(e != null ? e : "") ? t[0].toLowerCase() + t.slice(1) : t;
  }
  function Vt(t, e, s) {
    const n = e.type;
    let r = "";
    if (e.of && (r = e.of.length === t.speakers.length && e.of.every((o) => t.speakers.includes(o)) ? "us" : ev(e.of.map((o) => s[o]))), n === "knight") return "".concat(s[e.who], " is a knight");
    if (n === "knave") return "".concat(s[e.who], " is a knave");
    if (n === "same") return "".concat(s[e.a], " and ").concat(s[e.b], " are the same kind");
    if (n === "diff") return "".concat(s[e.a], " and ").concat(s[e.b], " are different kinds");
    if (n === "some_knave") return "At least one of ".concat(r, " is a knave");
    if (n === "all_knight") return "All of ".concat(r, " are knights");
    if (n === "exactly") return "Exactly ".concat(e.k, " of ").concat(r, " ").concat(e.k === 1 ? "is a knight" : "are knights");
    if (n === "not") return "It is not true that ".concat(vn(Vt(t, e.c, s)));
    if (n === "and") return "".concat(Vt(t, e.a, s), ", and ").concat(vn(Vt(t, e.b, s)));
    if (n === "or") return "Either ".concat(vn(Vt(t, e.a, s)), ", or ").concat(vn(Vt(t, e.b, s)));
    throw new Z("no sentence for a ".concat(n, " claim"));
  }
  function tv(t, e, s) {
    return "".concat(s[e.speaker], ' says: "').concat(Vt(t, e.claim, s), '."');
  }
  function Pc(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.speakers.length; n++) {
      const r = t.speakers[n];
      s[r] = (_b3 = e[r]) != null ? _b3 : n < Mc.length ? Mc[n] : r;
    }
    return s;
  }
  function Rc(t, e) {
    const s = Pc(t);
    t.names = s, t.text = {};
    for (const n of t.statements) t.text[n.id] = tv(t, n, s);
    return t.text.intro = "On this island knights always tell the truth and knaves always lie. Who is a knight and who is a knave?", t;
  }
  function sv(t, e, s = 2) {
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
  function nv(t, e, s) {
    const n = [];
    for (const r of e) n.push({ type: "knight", who: r }), n.push({ type: "knave", who: r });
    for (let r = 0; r < e.length; r++) for (let i = r + 1; i < e.length; i++) n.push({ type: "same", a: e[r], b: e[i] }), n.push({ type: "diff", a: e[r], b: e[i] });
    if (s !== "easy") for (const r of sv(t, e)) {
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
  function wn(t, e) {
    return { ...t, statements: e.map((s, n) => ({ ...s, id: "t".concat(n + 1) })) };
  }
  function rv(t = 3, e = 0, s = "medium", n = 400) {
    if (t < 2 || t > 5) throw new Z("Knights and Knaves has 2 to 5 speakers, not ".concat(t));
    if (!gs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = new st("vno-puzzles:knights:".concat(e, ":").concat(s, ":").concat(t)), i = Array.from({ length: t }, (o, a) => "k".concat(a + 1));
    for (let o = 0; o < n; o++) {
      const a = {};
      for (const v of i) a[v] = r.random() < 0.5;
      if (t >= 3 && (Object.values(a).every(Boolean) || !Object.values(a).some(Boolean))) continue;
      const c = [];
      for (const v of nv(r, i, s)) for (const $ of i) a[$] === it(v, a) && !((v.type === "knight" || v.type === "knave") && v.who === $) && c.push({ speaker: $, claim: v });
      r.shuffle(c);
      const l = {};
      for (const v of i) l[v] = a[v] ? Ht : bs;
      const d = { format: Ge, kind: "knights", size: t, seed: e, band: s, speakers: i, solution: l }, h = [];
      for (const v of c) {
        h.push(v);
        const $ = wn(d, h);
        if (bn($, 2) === 1) break;
      }
      if (bn(wn(d, h), 2) !== 1) continue;
      const p = [...h];
      for (const v of i) if (!p.some(($) => $.speaker === v)) {
        const $ = c.find((S) => S.speaker === v && !p.includes(S));
        $ && p.push($);
      }
      const f = Array.from({ length: p.length }, (v, $) => $);
      r.shuffle(f);
      const m = /* @__PURE__ */ new Set();
      for (const v of f) {
        const $ = p.filter((S, _) => _ !== v && !m.has(_));
        i.every((S) => $.some((_) => _.speaker === S)) && bn(wn(d, $), 2) === 1 && m.add(v);
      }
      const k = p.filter((v, $) => !m.has($));
      if (new Set(k.map((v) => v.speaker)).size !== i.length) continue;
      r.shuffle(k);
      const g = wn(d, k), b = Nc(g);
      if (!(!b.solved || Jb(b) !== s)) return g.difficulty = { steps: b.steps.length, score: b.score, rules: b.rules }, g.steps = b.steps, Rc(g);
    }
    throw new Z("no ".concat(s, " knights puzzle found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function iv(t, e) {
    const s = t.speakers.filter((n) => e[n] !== t.solution[n]);
    return { correct: s.length === 0, wrong: s };
  }
  const yn = [{ key: "clock", label: "the hour the clock struck", values: ["nine", "ten", "eleven", "twelve"], item: "pocket watch", claim: "I heard the clock strike {v} just before the scream", fact: "It is stopped, and it reads {v} o'clock" }, { key: "door", label: "the state of the study door", values: ["locked", "open", "ajar"], item: "key log", claim: "The study door was {v} when I passed it", fact: "It says the study door was {v} that evening" }, { key: "lamp", label: "the hall lamp", values: ["lit", "dark", "dim"], item: "photograph", claim: "The lamp in the hall was {v}", fact: "It shows the hall lamp {v}" }, { key: "weather", label: "the weather that night", values: ["raining", "dry", "foggy"], item: "weather report", claim: "It was {v} outside", fact: "It says it was {v} that night" }, { key: "weapon", label: "what lay on the table", values: ["rope", "candlestick", "poison", "dagger"], item: "inventory", claim: "I saw the {v} on the table", fact: "It lists the {v} on the table" }, { key: "guest", label: "who left first", values: ["the doctor", "the colonel", "the cook"], item: "guest list", claim: "{v} left first", fact: "It shows {v} leaving first" }, { key: "window", label: "the library window", values: ["shut", "broken", "wide open"], item: "repair bill", claim: "The library window was {v}", fact: "It records the library window as {v}" }, { key: "shoes", label: "the shoes by the door", values: ["muddy", "polished", "missing"], item: "boot print", claim: "The shoes by the door were {v}", fact: "It shows the shoes by the door {v}" }], ov = Object.fromEntries(yn.map((t) => [t.key, t])), av = { easy: [4, 3], medium: [5, 4], hard: [6, 5] }, cv = "Mr Halloran";
  function Gr(t) {
    const e = /* @__PURE__ */ new Set();
    for (const s of t || []) e.add("".concat(s.key, "|").concat(s.value));
    return e;
  }
  function Wr(t) {
    return [...t.claims || [], ...t.press && t.press.claims || []];
  }
  function Hr(t, e, s) {
    const n = t.statements, r = t.evidence, i = [];
    for (const o of n) {
      const a = (o.press && o.press.claims || []).map((l) => ({ ...l, via: true })), c = (o.claims || []).map((l) => ({ ...l, via: false }));
      for (const l of [...c, ...a]) for (const d of r) for (const h of d.facts) h.key === l.key && h.value !== l.value && i.push({ statement: o.id, evidence: d.id, key: l.key, claim: l.value, fact: h.value, press: l.via });
    }
    return i;
  }
  function Vr(t) {
    let e = 0;
    for (const s of t.statements) for (const n of Wr(s)) for (const r of t.evidence) for (const i of r.facts) i.key === n.key && i.value === n.value && e++;
    return e;
  }
  function lv(t) {
    var _a3, _b3;
    const e = [], s = {};
    for (const o of t.statements) {
      const a = Array.from(Gr(o.claims)).sort().join(",");
      s[a] && e.push("".concat(o.id, " says what ").concat(s[a], " says")), s[a] = o.id;
      const c = Gr((_a3 = o.press) == null ? void 0 : _a3.claims), l = Gr(o.claims);
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
  function dv(t, e) {
    return (e != null ? e : Hr(t)).some((r) => r.press) ? Vr(t) >= 4 ? "hard" : "medium" : "easy";
  }
  const Dc = dv;
  function uv(t) {
    if (t.format !== void 0 && t.format !== Ge) throw new Z("not a testimony puzzle of format ".concat(Ge));
    if (t.kind !== "testimony") throw new Z("not a testimony puzzle");
    const e = {};
    for (const i of t.keys || []) e[i.key] = i;
    if (Object.keys(e).length === 0) throw new Z("a testimony puzzle needs keys (the vocabulary of the facts)");
    for (const i of Object.values(e)) if (!i.values || i.values.length < 2) throw new Z("key ".concat(i.key, " needs at least two values"));
    const s = /* @__PURE__ */ new Set();
    for (const i of t.statements || []) {
      if (s.has(i.id)) throw new Z("statement ".concat(i.id, " is listed twice"));
      s.add(i.id);
      for (const o of Wr(i)) if (!e[o.key] || !e[o.key].values.includes(o.value)) throw new Z("statement ".concat(i.id, " claims ").concat(o.key, "=").concat(o.value, ", which is not in the keys"));
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
  function hv(t, e) {
    const s = [{ rule: "look", statement: e.statement, who: e.evidence, value: e.key }];
    return e.press && s.push({ rule: "press", statement: e.statement, value: "" }), s.push({ rule: "present", statement: e.statement, who: e.evidence, value: "" }), s;
  }
  function Lc(t) {
    uv(t);
    const e = Hr(t), s = t.solution, n = e.length === 1 && e[0].statement === s.statement && e[0].evidence === s.evidence && e[0].press === !!s.press, r = e.length === 1 ? hv(t, e[0]) : [], i = t.statements.length * t.evidence.length + Vr(t) + (e.length > 0 && e.some((o) => o.press) ? 3 : 0);
    return { unique: e.length === 1, solutions: e.length, deducible: n, band: n ? Dc(t, e) : null, steps: r, score: i, rules: { clash: e.length, near: Vr(t) } };
  }
  function pv(t) {
    const e = Lc(t);
    if (!e.unique) throw new Z("the testimony has ".concat(e.solutions, " clashes, not one"));
    if (!e.deducible) throw new Z("the clash is not the pair the solution names");
    return e;
  }
  function Yr(t, e) {
    for (const s of t.keys) if (s.key === e) return s;
    throw new Z('no key "'.concat(e, '"'));
  }
  function Cc(t, e) {
    var _a3;
    const s = Yr(t, e.key), r = ((_a3 = s.claim) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
    return r.length > 0 ? r[0].toUpperCase() + r.slice(1) : r;
  }
  function fv(t, e) {
    var _a3;
    const s = Yr(t, e.key);
    return ((_a3 = s.fact) != null ? _a3 : "The ".concat(s.key, " is {v}")).replace("{v}", e.value);
  }
  function Zc(t) {
    var _a3, _b3, _c2, _d2, _e2;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = { wit: (_b3 = e.wit) != null ? _b3 : cv }, n = {};
    for (const r of t.evidence) {
      const o = (_c2 = Yr(t, r.facts[0].key).item) != null ? _c2 : r.id;
      n[o] = ((_d2 = n[o]) != null ? _d2 : 0) + 1, s[r.id] = (_e2 = e[r.id]) != null ? _e2 : n[o] === 1 ? o : "".concat(o, " ").concat(n[o]);
    }
    return s;
  }
  function Uc(t, e) {
    var _a3;
    const s = Zc(t);
    t.names = s;
    const r = { intro: "".concat(s.wit, " is giving testimony. Press a statement to hear more, and present the evidence that proves one of them false.") };
    for (const i of t.statements) {
      r[i.id] = "".concat(i.claims.map((a) => Cc(t, a)).join(". "), ".");
      const o = ((_a3 = i.press) == null ? void 0 : _a3.claims) || [];
      o.length > 0 && (r["".concat(i.id, ".press")] = "Now that you ask. ".concat(o.map((a) => Cc(t, a)).join(". "), "."));
    }
    for (const i of t.evidence) r[i.id] = "".concat(s[i.id], ": ").concat(i.facts.map((o) => fv(t, o)).join(". "), ".");
    return t.text = r, t;
  }
  function mv(t, e = 0, s = "medium", n = 200) {
    if (!gs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const [r, i] = av[s], o = new st("vno-puzzles:testimony:".concat(e, ":").concat(s));
    for (let a = 0; a < n; a++) {
      const c = {};
      for (const y of yn) c[y.key] = o.choice(y.values);
      const l = yn.map((y) => y.key), d = (y, E = true) => {
        const z = ov[y].values, T = E ? c[y] : o.choice(z.filter((D) => D !== c[y]));
        return { key: y, value: T };
      }, h = o.choice(l), p = s !== "easy", f = l.filter((y) => y !== h), m = o.randrange(r), k = o.sample(f, p ? r : r - 1), g = new Set(k), b = [], v = p ? [h] : [];
      for (let y = 0; y < r; y++) {
        let E;
        if (y === m) if (p) {
          const z = k.pop();
          E = { claims: [d(z)], press: { claims: [d(h, false)] } };
        } else E = { claims: [d(h, false)] };
        else {
          const z = k.pop();
          if (E = { claims: [d(z)] }, p && o.random() < 0.5) {
            const T = f.filter((D) => !g.has(D) && !v.includes(D));
            if (T.length > 0) {
              const D = o.choice(T);
              v.push(D), E.press = { claims: [d(D)] };
            }
          }
        }
        b.push(E);
      }
      const $ = o.sample(f, i - 1), S = [{ facts: [d(h)] }, ...$.map((y) => ({ facts: [d(y)] }))];
      if (s === "hard") {
        const y = f.filter((E) => !$.includes(E));
        for (let E = 1; E < S.length; E++) if (y.length > 0 && o.random() < 0.5) {
          const z = o.randrange(y.length);
          S[E].facts.push(d(y[z])), y.splice(z, 1);
        }
      }
      o.shuffle(S);
      for (let y = 0; y < b.length; y++) b[y].id = "t".concat(y + 1);
      for (let y = 0; y < S.length; y++) S[y].id = "e".concat(y + 1);
      const _ = b[m].id, w = S.find((y) => y.facts[0].key === h && y.facts[0].value === c[h] && y.facts.filter((E) => E.key === h).length === 1).id, A = /* @__PURE__ */ new Set();
      for (const y of b) for (const E of Wr(y)) A.add(E.key);
      for (const y of S) for (const E of y.facts) A.add(E.key);
      const j = { format: Ge, kind: "testimony", size: r, seed: e, band: s, witness: "wit", keys: yn.filter((y) => A.has(y.key)).map((y) => ({ ...y })), statements: b, evidence: S, solution: { statement: _, evidence: w, press: p } };
      if (lv(j).length > 0) continue;
      const O = Hr(j);
      if (O.length !== 1 || O[0].statement !== _ || O[0].evidence !== w || Dc(j, O) !== s) continue;
      const R = Lc(j);
      return j.difficulty = { steps: R.steps.length, score: R.score, rules: R.rules }, j.steps = R.steps, Uc(j);
    }
    throw new Z("no ".concat(s, " testimony found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  const gv = [{ prompt: "Who was observed in the grand library shortly before the grandfather clock struck nine?", correct: "Colonel Ash", distractors: ["Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"] }, { prompt: "Which weapon was retrieved from the locked conservatory display case?", correct: "antique dagger", distractors: ["silver candlestick", "braided rope", "heavy vase", "vial of poison"] }, { prompt: "Where was the secret passage behind the book shelves discovered?", correct: "study", distractors: ["wine cellar", "ballroom", "billiard room", "observatory"] }, { prompt: "What piece of physical evidence directly contradicted the witness testimony?", correct: "stopped pocket watch", distractors: ["torn letter", "muddy boot print", "forged will", "broken seal"] }, { prompt: "Which motive was confirmed by the intercepted encrypted ledger?", correct: "blackmail", distractors: ["jealousy", "inheritance", "professional rivalry", "political revenge"] }, { prompt: "What unusual scent was noted lingering near the crime scene?", correct: "bitter almonds", distractors: ["burnt pipe tobacco", "damp earth", "lavender water", "kerosene"] }, { prompt: "Who was the last person seen leaving through the side garden gate?", correct: "the hooded courier", distractors: ["the estate groundskeeper", "the evening maid", "the carriage driver", "the visiting doctor"] }, { prompt: "What item was found concealed beneath the floorboards in the attic?", correct: "brass key", distractors: ["leather diary", "ruby pendant", "stained handkerchief", "wax seal stamp"] }, { prompt: "At what time did the station train arrive on the night of the incident?", correct: "ten forty-five", distractors: ["nine fifteen", "eleven thirty", "midnight sharp", "ten o clock"] }, { prompt: "Which room had its window latch deliberately forced open from the inside?", correct: "parlor", distractors: ["scullery", "music room", "dining hall", "guest bedroom"] }];
  function kv(t) {
    var _a3;
    return (_a3 = t.names) != null ? _a3 : {};
  }
  function bv(t, e) {
    var _a3, _b3, _c2, _d2, _e2;
    const s = { ...(_a3 = t.names) != null ? _a3 : {} };
    for (const r of t.questions || []) for (const i of r.options || []) s[i] || (s[i] = i);
    const n = { intro: (_c2 = (_b3 = t.text) == null ? void 0 : _b3.intro) != null ? _c2 : "Answer the following multiple-choice questions." };
    for (const r of t.questions || []) n[r.id] = (_e2 = (_d2 = t.text) == null ? void 0 : _d2[r.id]) != null ? _e2 : "Question ".concat(r.id);
    return { names: s, text: n };
  }
  function vv(t = 0, e, s = "medium") {
    if (!gs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = Math.max(1, Math.min(10, e != null ? e : s === "easy" ? 3 : s === "medium" ? 4 : 5)), i = new st("vno-puzzles:quiz:".concat(t, ":").concat(s, ":").concat(r)), o = s === "easy" ? 2 : s === "medium" ? 3 : 4, a = i.sample(gv, r), c = [], l = {}, d = {}, h = { intro: "Answer the following questions carefully based on the investigation." };
    for (let k = 0; k < a.length; k++) {
      const g = a[k], b = "q".concat(k + 1);
      h[b] = g.prompt;
      const v = i.sample(g.distractors, o), $ = [g.correct, ...v];
      i.shuffle($);
      const S = [];
      let _ = "";
      for (let w = 0; w < $.length; w++) {
        const A = "".concat(b, "_o").concat(w + 1);
        S.push(A), d[A] = $[w], $[w] === g.correct && (_ = A);
      }
      c.push({ id: b, options: S, answer: _ }), l[b] = _;
    }
    const p = s === "hard" ? 3 : s === "medium" ? 2 : 1, f = c.map((k) => ({ rule: "answer", who: k.id, value: k.answer })), m = { steps: r, score: r * p, rules: { quiz: r } };
    return { format: Ge, kind: "quiz", seed: t, band: s, questions: c, solution: l, difficulty: m, steps: f, names: d, text: h };
  }
  function wv(t) {
    var _a3;
    if (t.format !== void 0 && t.format !== Ge) throw new Z("unknown puzzle format ".concat(t.format));
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
  function yv(t) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    wv(t);
    const e = (_a3 = t.steps) != null ? _a3 : t.questions.map((i) => ({ rule: "answer", who: i.id, value: i.answer })), s = (_c2 = (_b3 = t.difficulty) == null ? void 0 : _b3.score) != null ? _c2 : t.questions.length * 2, n = (_e2 = (_d2 = t.difficulty) == null ? void 0 : _d2.rules) != null ? _e2 : { quiz: t.questions.length };
    return { unique: true, solutions: 1, deducible: true, band: (_f2 = t.band) != null ? _f2 : "medium", steps: e, score: s, rules: n };
  }
  function Sv(t) {
    return yv(t);
  }
  function $v(t, e) {
    const s = [];
    for (const n of t.questions) e[n.id] !== n.answer && s.push(n.id);
    return { correct: s.length === 0, wrong: s, score: t.questions.length - s.length, total: t.questions.length };
  }
  const Fc = ["before", "after", "apart"];
  function zv(t, e, s, n) {
    const r = t.categories, i = r[0].items, o = kn(t), a = [];
    for (let k = 1; k < r.length; k++) for (const g of r[k].items) a.push([k, g]);
    const c = {};
    for (let k = 0; k < a.length; k++) c[a[k][1]] = k;
    const l = o ? [...o] : [], d = Array.from({ length: a.length }, () => []);
    for (const k of e) {
      let g = Tc(k);
      Fc.includes(k.type) && (g = g.concat(l));
      let b = -1;
      for (const $ of g) c[$] !== void 0 && c[$] > b && (b = c[$]);
      const v = Math.max(b, 0);
      v < d.length && d[v].push(k);
    }
    const h = {};
    for (const k of i) h[k] = k;
    const p = Array.from({ length: r.length }, () => /* @__PURE__ */ new Set());
    let f = 0;
    function m(k) {
      if (k === a.length) return f++, f >= s;
      const [g, b] = a[k];
      for (const v of i) if (!p[g].has(v)) {
        if (p[g].add(v), h[b] = v, d[k].every(($) => Br($, h, o)) && m(k + 1)) return true;
        p[g].delete(v);
      }
      return delete h[b], false;
    }
    return a.length > 0 && m(0), f;
  }
  function Sn(t, e = 2, s) {
    return zv(t, t.clues, e);
  }
  class Bc {
    constructor(e, s) {
      __publicField(this, "p");
      __publicField(this, "clues");
      __publicField(this, "idx");
      __publicField(this, "cats");
      __publicField(this, "ordinal");
      __publicField(this, "state");
      this.p = e, this.clues = s, this.idx = ks(e), this.cats = e.categories.map((n) => [...n.items]), this.ordinal = kn(e), this.state = /* @__PURE__ */ new Map();
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
  function* _v(t) {
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
  function* jv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, r] = e.split("|"), i = t.cats[t.idx[r]];
      for (const a of i) a !== r && (yield [t.key(n, a), -1, { from: [[n, r]] }]);
      const o = t.cats[t.idx[n]];
      for (const a of o) a !== n && (yield [t.key(a, r), -1, { from: [[n, r]] }]);
    }
  }
  function* xv(t) {
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
  function* Ev(t) {
    for (const e of t.clues) if (e.type === "either") {
      const [s, n] = e.b;
      t.get(e.a, s) === -1 && (yield [t.key(e.a, n), 1, { clue: e.id, from: [t.key(e.a, s).split("|")] }]), t.get(e.a, n) === -1 && (yield [t.key(e.a, s), 1, { clue: e.id, from: [t.key(e.a, n).split("|")] }]);
    } else if (e.type === "oneof") {
      const [s, n] = e.a, [r, i] = e.b, o = [t.key(s, r), t.key(n, i)], a = [t.key(s, i), t.key(n, r)];
      if (o.some((c) => t.state.get(c) === -1)) for (const c of a) yield [c, 1, { clue: e.id, from: o.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
      if (a.some((c) => t.state.get(c) === -1)) for (const c of o) yield [c, 1, { clue: e.id, from: a.filter((l) => t.state.get(l) === -1).map((l) => l.split("|")) }];
    }
  }
  function* Av(t) {
    if (!t.ordinal) return;
    const e = t.ordinal;
    for (const s of t.clues) {
      const n = s.type;
      if (!Fc.includes(n)) continue;
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
  function* Tv(t) {
    for (const [e, s] of t.state.entries()) {
      if (s !== 1) continue;
      const [n, r] = e.split("|"), i = [[n, r], [r, n]];
      for (const [o, a] of i) for (let c = 0; c < t.cats.length; c++) if (!(c === t.idx[o] || c === t.idx[a])) for (const l of t.cats[c]) {
        const d = t.get(o, l);
        d !== 0 && (yield [t.key(a, l), d, { from: [e.split("|"), t.key(o, l).split("|")] }]);
      }
    }
  }
  const Kc = { clue: _v, elim: jv, last: xv, either: Ev, order: Av, trans: Tv };
  function bt(t, e, s = Gt) {
    var _a3;
    const n = e != null ? e : t.clues, r = new Bc(t, n), i = [];
    let o = null, a = true;
    for (; a && !r.known(); ) {
      a = false;
      for (const f of Gt) if (s.includes(f)) {
        for (const [m, k, g] of Kc[f](r)) {
          const b = r.state.get(m);
          if (b === k) continue;
          if (b !== 0) {
            o = { rule: f, cell: m.split("|") };
            break;
          }
          r.state.set(m, k);
          const v = { rule: f, cell: m.split("|"), value: k === 1 ? "yes" : "no", ...g };
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
      const f = Ot(t);
      l = Array.from(r.state.entries()).every(([m, k]) => {
        const [g, b] = m.split("|");
        return f[g] === f[b] == (k === 1);
      });
    }
    const d = {};
    for (const f of Gt) d[f] = 0;
    for (const f of i) d[f.rule] = ((_a3 = d[f.rule]) != null ? _a3 : 0) + 1;
    const h = {};
    for (const [f, m] of Object.entries(d)) m > 0 && (h[f] = m);
    const p = Object.entries(d).reduce((f, [m, k]) => {
      var _a4;
      return f + ((_a4 = Bb[m]) != null ? _a4 : 1) * k;
    }, 0);
    return { solved: l, contradiction: o, grid: c, steps: i, rules: h, score: p };
  }
  function Yt(t, e, s = Gt) {
    const n = t.clues, r = new Bc(t, n);
    let i = true;
    for (; i && !r.known(); ) {
      i = false;
      for (const a of Gt) if (s.includes(a)) for (const [c, l] of Kc[a](r)) {
        const d = r.state.get(c);
        if (d !== l) {
          if (d !== 0) return false;
          r.state.set(c, l), i = true;
        }
      }
    }
    if (!r.known()) return false;
    const o = Ot(t);
    return Array.from(r.state.entries()).every(([a, c]) => {
      const [l, d] = a.split("|");
      return o[l] === o[d] == (c === 1);
    });
  }
  function Jr(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = s != null ? s : t.clues, i = (e != null ? e : bt(t, n)).rules, o = (_a3 = i.trans) != null ? _a3 : 0;
    if (t.ordinal) return o >= ((_b3 = t.hardTrans) != null ? _b3 : 8) ? "hard" : o > 0 || ((_c2 = i.either) != null ? _c2 : 0) > 0 || n.some((c) => c.type === "either" || c.type === "oneof") ? "medium" : "easy";
    const a = n.some((c) => c.type === "is");
    return o >= 3 && !a ? "hard" : o > 0 || ((_d2 = i.either) != null ? _d2 : 0) > 0 || ((_e2 = i.order) != null ? _e2 : 0) > 0 ? "medium" : "easy";
  }
  function $n(t, e) {
    return t === "easy" ? e && e.ordinal ? [...Ec, "order"] : Ec : Gt;
  }
  function qc(t, e) {
    const s = e != null ? e : bt(t);
    return { steps: s.steps.length, score: s.score, rules: s.rules };
  }
  const ys = { intro: "The bakery delivered one order each day. Work out which delivery was which.", categories: [{ key: "day", ref: "the {n} delivery", names: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], prefix: "d" }, { key: "customer", ref: "the delivery to {n}", names: ["Ana", "Boris", "Cleo", "Dino", "Eva"], prefix: "c" }, { key: "cake", ref: "the {n} delivery", names: ["lemon cake", "poppy roll", "plum tart", "honey bun", "rye loaf"], prefix: "k" }, { key: "town", ref: "the delivery to {n}", names: ["Oakville", "Pinebrook", "Riverton", "Stonegate", "Wheatley"], prefix: "t" }], unit: "days" }, Gc = [3, 4, 5], Iv = { 3: 3, 4: 6, 5: 10 };
  function Mv(t) {
    var _a3, _b3;
    const e = (_a3 = t.names) != null ? _a3 : {}, s = {};
    for (let n = 0; n < t.categories.length; n++) {
      const r = ys.categories[n], i = t.categories[n];
      for (let o = 0; o < i.items.length; o++) {
        const a = i.items[o];
        s[a] = (_b3 = e[a]) != null ? _b3 : r && o < r.names.length ? r.names[o] : a;
      }
    }
    return s;
  }
  const Ov = Mv;
  function Wc(t) {
    return ys.intro;
  }
  function Nv(t, e) {
    const s = [];
    for (const o of ys.categories) s.push({ key: o.key, items: Array.from({ length: e }, (a, c) => "".concat(o.prefix).concat(c + 1)), ref: o.ref });
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
  function Hc(t, e, s) {
    return e.indexOf(t[s]);
  }
  function Pv(t, e, s, n) {
    const r = e[0].items, i = [];
    for (let a = 0; a < e.length; a++) for (const c of e[a].items) i.push([a, c]);
    const o = [];
    for (let a = 0; a < i.length; a++) for (let c = 0; c < i.length; c++) {
      const [l, d] = i[a], [h, p] = i[c];
      if (l === h) continue;
      a < c && (s[d] === s[p] ? n !== "hard" && o.push({ type: "is", a: d, b: p }) : o.push({ type: "not", a: d, b: p }));
      const f = Hc(s, r, d), m = Hc(s, r, p);
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
          const f = l[h], m = l[p], k = d.find((v) => s[v] === s[f]), g = d.find((v) => s[v] === s[m]), b = [k, g];
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
  function Rv(t) {
    return t === "easy" ? $n("easy", { ordinal: true }) : t === "medium" ? [...$n("easy", { ordinal: true }), "either"] : $n("hard");
  }
  function Dv(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function zn(t, e) {
    return { ...t, clues: Dv(e) };
  }
  function Lv(t, e, s, n) {
    const r = [...e], i = Array.from({ length: r.length }, (a, c) => c);
    n.shuffle(i);
    const o = /* @__PURE__ */ new Set();
    for (const a of i) {
      const c = r.filter((l, d) => d !== a && !o.has(d));
      Yt(zn(t, c), void 0, s) && o.add(a);
    }
    return r.filter((a, c) => !o.has(c));
  }
  function Cv(t = 4, e = 0, s = "medium", n = 200) {
    if (!Gc.includes(t)) throw new Z("logic grids have ".concat(Gc.join(" or "), " items per category, not ").concat(t));
    if (!gs.includes(s)) throw new Z('unknown band "'.concat(s, '" (easy, medium or hard)'));
    const r = new st("vno-puzzles:logic:".concat(e, ":").concat(s, ":").concat(t));
    for (let i = 0; i < n; i++) {
      const [o, a] = Nv(r, t), c = { format: Ge, kind: "logic", size: t, seed: e, band: s, categories: o, solution: a, ordinal: { category: o[0].key, unit: ys.unit }, hardTrans: Iv[t] }, l = Rv(s), d = Ot({ ...c }), h = Pv(r, o, d, s), p = [];
      for (const g of h) if (p.push(g), p.length % 3 === 0 && Yt(zn(c, p), void 0, l)) break;
      if (!Yt(zn(c, p), void 0, l)) continue;
      const f = Lv(c, p, l, r);
      r.shuffle(f);
      const m = zn(c, f), k = bt(m);
      if (!(!k.solved || Jr(m, k) !== s || Sn(m, 2) !== 1) && !(s === "medium" && !f.some((g) => g.type === "either" || g.type === "oneof"))) return m.difficulty = qc(m, k), m.steps = k.steps, Zv(m);
    }
    throw new Z("no ".concat(s, " logic grid found for seed ").concat(e, " in ").concat(n, " tries"));
  }
  function Zv(t, e) {
    const s = Ov(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = Qr(t, n, s);
    return t.text.intro = Wc(), t;
  }
  function Uv(t) {
    Ic(t);
    const e = Ot(t), s = kn(t);
    for (const r of t.clues) if (!Br(r, e, s)) throw new Z("clue ".concat(r.id, " is false in the solution"));
    if (Sn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const n = bt(t);
    if (!n.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return n;
  }
  const Fv = { suspect: ["Colonel Ash", "Doctor Birch", "Miss Cole", "Lady Dunn", "Mr Frost"], weapon: ["rope", "candlestick", "poison", "dagger", "vase"], place: ["library", "kitchen", "garden", "cellar", "study"], motive: ["jealousy", "greed", "revenge", "fear", "love"] }, Bv = { suspect: ["the tall guest", "the left-handed guest", "the youngest guest", "the quiet guest", "the guest in grey"], weapon: ["the heavy weapon", "the metal weapon", "the sharp weapon", "the silent weapon", "the fragile weapon"], place: ["the room upstairs", "the room by the stairs", "the room with the fire", "the room below ground", "the room facing east"] };
  function _n(t) {
    var _a3, _b3, _c2, _d2, _e2;
    if (t.kind === "knights") return Pc(t);
    if (t.kind === "testimony") return Zc(t);
    if (t.kind === "quiz") return kv(t);
    if (t.kind === "logic") {
      const n = (_a3 = t.names) != null ? _a3 : {}, r = {};
      for (let i = 0; i < t.categories.length; i++) {
        const o = ys.categories[i], a = t.categories[i];
        for (let c = 0; c < a.items.length; c++) {
          const l = a.items[c];
          r[l] = (_b3 = n[l]) != null ? _b3 : o && c < o.names.length ? o.names[c] : l;
        }
      }
      return r;
    }
    const e = (_c2 = t.names) != null ? _c2 : {}, s = {};
    for (const n of t.categories) {
      const r = (_d2 = Fv[n.key]) != null ? _d2 : [];
      for (let i = 0; i < n.items.length; i++) {
        const o = n.items[i];
        s[o] = (_e2 = e[o]) != null ? _e2 : i < r.length ? r[i] : o;
      }
    }
    return s;
  }
  function Kv(t) {
    var _a3;
    const e = {};
    for (const s of t.categories) {
      const n = (_a3 = Bv[s.key]) != null ? _a3 : [];
      for (let r = 0; r < s.items.length; r++) r < n.length && (e[s.items[r]] = n[r]);
    }
    return e;
  }
  function We(t) {
    return t.length > 0 ? t[0].toUpperCase() + t.slice(1) : t;
  }
  function qv(t, e) {
    return t === "suspect" || t === "motive" ? e : "the ".concat(e);
  }
  const Gv = { "suspect,weapon": ["{X} had {Y}.", "{X} did not have {Y}."], "suspect,place": ["{X} was in {Y}.", "{X} was not in {Y}."], "suspect,motive": ["{X} acted out of {Y}.", "{X} did not act out of {Y}."], "weapon,place": ["Whoever had {X} was in {Y}.", "Whoever had {X} was not in {Y}."], "weapon,motive": ["Whoever had {X} acted out of {Y}.", "Whoever had {X} did not act out of {Y}."], "place,motive": ["Whoever was in {X} acted out of {Y}.", "Whoever was in {X} did not act out of {Y}."] }, Wv = { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." };
  function Hv(t, e, s) {
    var _a3, _b3;
    const n = (_a3 = t.descr) != null ? _a3 : {}, r = new Set((_b3 = e.descr) != null ? _b3 : []);
    function i(b) {
      return r.has(b) && n[b] ? n[b] : qv(Wt(t, b), s[b]);
    }
    const o = e.a, a = Array.isArray(e.b) ? e.b : [e.b], c = Wt(t, o), l = Wt(t, a[0]);
    if (e.type === "either") {
      const b = Wv["".concat(c, ",").concat(l)];
      if (!b) throw new Error("no sentence for an either clue of ".concat(c, " and ").concat(l));
      return We(b.replace("{A}", i(o)).replace("{B1}", i(a[0])).replace("{B2}", i(a[1])));
    }
    const d = ks(t), [h, p] = d[o] < d[a[0]] ? [o, a[0]] : [a[0], o], f = Wt(t, h), m = Wt(t, p), k = Gv["".concat(f, ",").concat(m)];
    if (!k) throw new Error("no sentence for a ".concat(e.type, " clue of ").concat(c, " and ").concat(l));
    const g = e.type === "not" ? k[1] : k[0];
    return We(g.replace("{X}", i(h)).replace("{Y}", i(p)));
  }
  function Vv(t, e, s) {
    var _a3, _b3;
    return ((_a3 = t.categories[ks(t)[e]].ref) != null ? _a3 : "{n}").replace("{n}", (_b3 = s[e]) != null ? _b3 : e);
  }
  function Yv(t, e, s) {
    var _a3, _b3;
    const n = e.type, r = (_b3 = (_a3 = t.ordinal) == null ? void 0 : _a3.unit) != null ? _b3 : "", i = (c) => Vv(t, c, s), o = e.a, a = e.b;
    if (n === "is") return We("".concat(i(o), " is ").concat(i(a), "."));
    if (n === "not") return We("".concat(i(o), " is not ").concat(i(a), "."));
    if (n === "either") return We("".concat(i(o), " is either ").concat(i(a[0]), " or ").concat(i(a[1]), "."));
    if (n === "neither") return We("".concat(i(o), " is neither ").concat(i(a[0]), " nor ").concat(i(a[1]), "."));
    if (n === "oneof") return We("Of ".concat(i(o[0]), " and ").concat(i(o[1]), ", one is ").concat(i(a[0]), " and the other is ").concat(i(a[1]), "."));
    if (n === "before") return We("".concat(i(o), " came before ").concat(i(a), "."));
    if (n === "after") return We("".concat(i(o), " came after ").concat(i(a), "."));
    if (n === "apart") return We("".concat(i(o), " and ").concat(i(a), " are exactly ").concat(e.n, " ").concat(r || "places", " apart."));
    throw new Error("no sentence for a ".concat(n, " clue"));
  }
  function Qr(t, e, s) {
    var _a3;
    const n = (_a3 = s != null ? s : t.names) != null ? _a3 : _n(t);
    return t.kind === "logic" ? Yv(t, e, n) : Hv(t, e, n);
  }
  function Jv(t, e) {
    var _a3;
    return "The body was found in the ".concat(((_a3 = e != null ? e : t.names) != null ? _a3 : _n(t))[t.murder.place], ".");
  }
  function Qv(t, e) {
    if (t.kind === "knights") return Rc(t);
    if (t.kind === "logic") {
      const n = _n(t);
      t.names = n, t.text = {};
      for (const r of t.clues) t.text[r.id] = Qr(t, r, n);
      return t.text.intro = Wc(), t;
    }
    if (t.kind === "testimony") return Uc(t);
    if (t.kind === "quiz") {
      const n = bv(t);
      return t.names = n.names, t.text = n.text, t;
    }
    const s = _n(t);
    t.names = s, t.text = {};
    for (const n of t.clues) t.text[n.id] = Qr(t, n, s);
    return t.murder && (t.text.murder = Jv(t, s)), t;
  }
  const Vc = ["suspect", "weapon", "place"], Xv = { suspect: "s", weapon: "w", place: "p", motive: "m" }, Yc = [3, 4];
  function ew(t, e, s = false) {
    const r = (s ? [...Vc, "motive"] : [...Vc]).map((a) => ({ key: a, items: Array.from({ length: e }, (c, l) => "".concat(Xv[a]).concat(l + 1)) })), i = [];
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
  function tw(t, e, s, n) {
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
  function sw(t) {
    return t.map((e, s) => ({ ...e, id: "c".concat(s + 1) }));
  }
  function Ss(t, e) {
    return { ...t, clues: sw(e) };
  }
  function nw(t, e, s, n) {
    const r = [...e], i = Array.from({ length: r.length }, (a, c) => c);
    n.shuffle(i);
    const o = /* @__PURE__ */ new Set();
    for (const a of i) {
      const c = r.filter((l, d) => d !== a && !o.has(d));
      Yt(Ss(t, c), void 0, s) && o.add(a);
    }
    return r.filter((a, c) => !o.has(c));
  }
  function rw(t, e, s) {
    const n = Kv(e), r = [];
    for (const i of s) {
      const a = [i.a].concat(Array.isArray(i.b) ? i.b : [i.b]).filter((c) => n[c] && t.random() < 0.5);
      r.push(a.length > 0 ? { ...i, descr: a } : i);
    }
    return [r, n];
  }
  function iw(t, e, s = 0, n = "medium", r = 200, i = false, o = false) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2;
    let a = "murdle", c = 3, l = 0, d = "medium", h = 200, p = false, f = false, m;
    if (typeof t == "object" && t !== null ? (a = (_a3 = t.kind) != null ? _a3 : "murdle", c = (_b3 = t.size) != null ? _b3 : null, l = (_c2 = t.seed) != null ? _c2 : 0, d = (_d2 = t.band) != null ? _d2 : "medium", h = (_e2 = t.maxTries) != null ? _e2 : 200, p = (_f2 = t.motive) != null ? _f2 : false, f = (_g2 = t.attrs) != null ? _g2 : false, m = t.count) : typeof t == "string" && (a = t, c = null, l = s, d = n, h = r, p = i, f = o), c == null && (c = (_h2 = { murdle: 3, logic: 4, knights: 3, testimony: 3, quiz: 4 }[a]) != null ? _h2 : 3), a === "logic") return Cv(c, l, d, h);
    if (a === "knights") return rv(c, l, d, h);
    if (a === "testimony") return mv(c, l, d, h);
    if (a === "quiz") return vv(l, m != null ? m : c, d);
    if (a !== "murdle") throw new Z('unknown puzzle kind "'.concat(a, '" (murdle, logic, knights, testimony or quiz)'));
    if (!Yc.includes(c)) throw new Z("murdle makes puzzles of ".concat(Yc.join(" or "), " items per category, not ").concat(c));
    if (!gs.includes(d)) throw new Z('unknown band "'.concat(d, '" (easy, medium or hard)'));
    let k = "vno-puzzles:".concat(a, ":").concat(l, ":").concat(d);
    (c !== 3 || p || f) && (k += ":".concat(c).concat(p ? "m" : "").concat(f ? "a" : ""));
    const g = new st(k), b = $n(d);
    for (let v = 0; v < h; v++) {
      const [$, S] = ew(g, c, p), _ = { format: Ge, kind: a, size: c, seed: l, band: d, categories: $, solution: S }, w = Ot({ ..._ }), A = tw(g, $, w, d), j = [];
      let O = 0;
      for (const T of A) {
        if (T.type === "is" && d === "medium") {
          if (O > 0) continue;
          O++;
        }
        if (j.push(T), Yt(Ss(_, j), void 0, b)) break;
      }
      if (!Yt(Ss(_, j), void 0, b)) continue;
      const R = nw(_, j, b, g);
      let y = Ss(_, R), E = bt(y);
      if (!E.solved || Jr(y, E) !== d || (g.shuffle(R), y = Ss(_, R), E = bt(y), !E.solved || Jr(y, E) !== d || Sn(y, 2) !== 1)) continue;
      if (f) {
        const [T, D] = rw(g, y, y.clues);
        y.clues = T, y.descr = D;
      }
      const z = g.choice($[2].items);
      return y.murder = { place: z }, y.murder.answer = Kr(y), y.difficulty = qc(y, E), y.steps = E.steps, Qv(y);
    }
    throw new Z("no ".concat(d, " puzzle found for seed ").concat(l, " in ").concat(h, " tries"));
  }
  function ow(t) {
    var _a3;
    const e = (_a3 = t.kind) != null ? _a3 : "murdle";
    if (e === "knights") return Xb(t);
    if (e === "logic") return Uv(t);
    if (e === "testimony") return pv(t);
    if (e === "quiz") return Sv(t);
    Ic(t);
    const s = Ot(t), n = kn(t);
    for (const i of t.clues) if (!Br(i, s, n)) throw new Z("clue ".concat(i.id, " is false in the solution"));
    if (Sn(t, 2) !== 1) throw new Z("the puzzle does not have exactly one solution");
    const r = bt(t);
    if (!r.solved) throw new Z("the puzzle cannot be solved by deduction alone");
    return r;
  }
  function Jc(t) {
    if (t.includes(",")) {
      const [e, s] = t.split(",");
      return "".concat(e, "|").concat(s);
    }
    return t;
  }
  function aw(t, e) {
    var _a3, _b3, _c2;
    const s = Jc(e), n = { ...t }, r = (_b3 = (_a3 = n[e]) != null ? _a3 : n[s]) != null ? _b3 : "", o = (_c2 = { "": "no", no: "yes", yes: "" }[r]) != null ? _c2 : "";
    return o ? (n[e] = o, n[s] = o) : (delete n[e], delete n[s]), n;
  }
  function cw(t, e, s) {
    var _a3;
    const n = Jc(s);
    if (((_a3 = e[s]) != null ? _a3 : e[n]) !== "yes") return { ...e };
    const [r, i] = Pe(n), o = ks(t), a = { ...e };
    for (const c of rt(t)) {
      const [l, d] = Pe(c);
      c === n || a[c] || a["".concat(l, ",").concat(d)] || o[l] === o[r] && o[d] === o[i] && (l === r || d === i) && (a[c] = "no", a["".concat(l, ",").concat(d)] = "no");
    }
    return a;
  }
  function Xr(t) {
    const e = Ot(t), s = {};
    for (const n of rt(t)) {
      const [r, i] = Pe(n), o = e[r] === e[i] ? "yes" : "no";
      s[n] = o, s["".concat(r, ",").concat(i)] = o;
    }
    return s;
  }
  function lw(t, e) {
    const s = Kr(t), n = [];
    for (const r of Object.keys(s)) e[r] !== s[r] && n.push(r);
    return { correct: n.length === 0, wrong: n };
  }
  function dw(t, e) {
    var _a3;
    if (t.kind === "knights") return iv(t, e);
    if (t.kind === "quiz") {
      const i = $v(t, e);
      return { correct: i.correct, wrong: i.wrong };
    }
    const s = Xr(t), n = rt(t), r = [];
    for (const i of n) {
      const [o, a] = Pe(i), l = ((_a3 = e[i]) != null ? _a3 : e["".concat(o, ",").concat(a)]) === "yes", d = s[i] === "yes";
      l !== d && r.push(i);
    }
    return { correct: r.length === 0, wrong: r };
  }
  const uw = ["murdle", "logic"], hw = ["easy", "medium", "hard"], ei = [3, 4], pw = 8, Qc = /* @__PURE__ */ new Map();
  function Xc(t, e) {
    const s = "".concat(t.kind, ":").concat(t.size, ":").concat(t.seed, ":").concat(t.band);
    {
      const i = Qc.get(s);
      if (i) return i;
    }
    const n = ((i) => iw(i));
    let r = new Z("no seed tried");
    for (let i = 0; i < pw; i++) {
      const o = t.seed + i;
      try {
        const a = n({ kind: t.kind, size: t.size, seed: o, band: t.band });
        ow(a);
        const c = { puzzle: a, seed: o, skipped: i };
        return e || Qc.set(s, c), c;
      } catch (a) {
        r = a;
      }
    }
    throw r instanceof Error ? r : new Z(String(r));
  }
  const fw = (t) => t.categories.map((e) => e.key), mw = (t) => t.categories.flatMap((e) => e.items), ti = (t, e) => Wt(t, e);
  function si(t) {
    return t.kind !== "murdle" ? [] : fw(t).filter((e) => e !== "place");
  }
  function el(t) {
    if (t.kind !== "murdle" || !t.murder) return null;
    const e = Kr({ categories: t.categories, murder: t.murder, solution: t.solution }), s = {};
    for (const n of si(t)) s[n] = e[n];
    return s;
  }
  function gw(t) {
    const e = Xr(t);
    return rt(t).filter((s) => e[s] === "yes");
  }
  function kw(t) {
    const e = [];
    for (let s = 0; s < t.categories.length; s++) for (let n = s + 1; n < t.categories.length; n++) e.push({ rows: t.categories[s], cols: t.categories[n], key: "".concat(t.categories[s].key, "-").concat(t.categories[n].key) });
    return e;
  }
  const vt = (t, e) => {
    var _a3, _b3;
    const [s, n] = Pe(e);
    return (_b3 = (_a3 = t[e]) != null ? _a3 : t["".concat(s, ",").concat(n)]) != null ? _b3 : "";
  }, bw = (t, e) => aw(t, e), vw = (t, e, s) => cw(t, e, s);
  function tl(t, e) {
    return rt(t).filter((s) => vt(e, s) === "yes").map((s) => Pe(s));
  }
  function ww(t, e, s) {
    var _a3, _b3;
    if (t.kind === "murdle") {
      const r = { ...e, place: (_b3 = (_a3 = t.murder) == null ? void 0 : _a3.place) != null ? _b3 : "" }, i = lw(t, r);
      return { correct: i.correct, wrong: i.wrong.filter((o) => o !== "place") };
    }
    const n = dw(t, s);
    return { correct: n.correct, wrong: n.wrong };
  }
  const sl = { is: { "suspect,weapon": "{X} had {Y}.", "suspect,place": "{X} was in {Y}.", "suspect,motive": "{X} acted out of {Y}.", "weapon,place": "Whoever had {X} was in {Y}.", "weapon,motive": "Whoever had {X} acted out of {Y}.", "place,motive": "Whoever was in {X} acted out of {Y}." }, not: { "suspect,weapon": "{X} did not have {Y}.", "suspect,place": "{X} was not in {Y}.", "suspect,motive": "{X} did not act out of {Y}.", "weapon,place": "Whoever had {X} was not in {Y}.", "weapon,motive": "Whoever had {X} did not act out of {Y}.", "place,motive": "Whoever was in {X} did not act out of {Y}." }, either: { "suspect,place": "{A} was either in {B1} or {B2}.", "suspect,weapon": "{A} had either {B1} or {B2}.", "weapon,place": "{A} was either in {B1} or {B2}.", "weapon,suspect": "Either {B1} or {B2} had {A}.", "place,suspect": "Either {B1} or {B2} was in {A}.", "place,weapon": "Either {B1} or {B2} was in {A}.", "suspect,motive": "{A} acted out of either {B1} or {B2}.", "motive,suspect": "Either {B1} or {B2} acted out of {A}.", "weapon,motive": "Whoever had {A} acted out of either {B1} or {B2}.", "motive,weapon": "Whoever acted out of {A} had either {B1} or {B2}.", "place,motive": "Whoever was in {A} acted out of either {B1} or {B2}.", "motive,place": "Whoever acted out of {A} was either in {B1} or {B2}." }, isAny: "{X} goes with {Y}.", notAny: "{X} does not go with {Y}.", eitherAny: "{A} goes with either {B1} or {B2}.", logic: { is: "{A} goes with {B}.", not: "{A} does not go with {B}.", either: "{A} goes with either {B1} or {B2}.", neither: "{A} goes with neither {B1} nor {B2}.", oneof: "Of {A1} and {A2}, one goes with {B1} and the other with {B2}.", before: "{A} came before {B}.", after: "{A} came after {B}.", apart: "{A} and {B} are exactly {n} places apart." }, hint: { wrong: "Look again at {A} and {B}.", clue: "Clue {n} says: {text}", yes: "So {A} goes with {B}.", no: "So {A} cannot go with {B}.", elim: "{F0} goes with {F1}, so {A} cannot go with {B}.", last: "Everything else for {A} is ruled out, so {A} goes with {B}.", either: "One of the two is ruled out, so {A} goes with {B}.", order: "Counting the places in order, that rules out {A} {B}.", trans: "{A} and {B} are linked through {M}, so {A} {verb} {B}.", verbYes: "goes with", verbNo: "cannot go with", accuse: "The grid is complete. Make your accusation.", more: "The clues you have turned say no more. Turn another clue card." }, articles: true }, nl = { en: sl, hr: { is: {}, not: {}, either: {}, isAny: "{X} i {Y} idu zajedno.", notAny: "{X} i {Y} ne idu zajedno.", eitherAny: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", logic: { is: "{A} i {B} idu zajedno.", not: "{A} i {B} ne idu zajedno.", either: "{A} ide zajedno s jednim od ovih dvoje: {B1} ili {B2}.", neither: "{A} ne ide zajedno ni s jednim od ovih dvoje: {B1}, {B2}.", oneof: "Od ove dvije stvari, {A1} i {A2}, jedna ide uz {B1}, a druga uz {B2}.", before: "Redoslijed: {A}, a zatim {B}.", after: "Redoslijed: {B}, a zatim {A}.", apart: "{A} i {B}: u redoslijedu ih dijeli točno {n}." }, hint: { wrong: "Pogledaj ponovno: {A} i {B}.", clue: "Trag {n}: {text}", yes: "Zato {A} i {B} idu zajedno.", no: "Zato {A} i {B} ne idu zajedno.", elim: "{F0} i {F1} idu zajedno, pa {A} i {B} ne idu zajedno.", last: "Sve drugo za {A} je isključeno, pa {A} i {B} idu zajedno.", either: "Jedno od dvoje je isključeno, pa {A} i {B} idu zajedno.", order: "Brojanje u redoslijedu isključuje: {A}, {B}.", trans: "{A} i {B} povezani su preko: {M}, pa {verb}.", verbYes: "idu zajedno", verbNo: "ne idu zajedno", accuse: "Mreža je gotova. Podigni optužbu.", more: "Okrenuti tragovi ne govore više. Okreni još jedan trag." }, articles: false } }, ni = (t) => {
    var _a3, _b3, _c2;
    return (_c2 = (_b3 = nl[t]) != null ? _b3 : nl[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : sl;
  }, ge = (t, e) => {
    let s = t;
    for (const [n, r] of Object.entries(e)) s = s.split("{".concat(n, "}")).join(String(r));
    return s;
  }, Ke = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t;
  function jn(t, e, s, n) {
    var _a3;
    const r = (_a3 = s.alias) == null ? void 0 : _a3.call(s, e);
    if (r) return r;
    const i = s.name(e), o = ti(t, e);
    return ni(n).articles && t.kind === "murdle" && o !== "suspect" && o !== "motive" && new RegExp("^\\p{Ll}", "u").test(i) ? "the ".concat(i) : i;
  }
  const rl = (t, e, s) => "".concat(ti(t, e), ",").concat(ti(t, s));
  function il(t, e, s, n) {
    var _a3, _b3, _c2;
    const r = ni(n), i = (m) => jn(t, m, s, n), o = (m) => Array.isArray(m) ? m[0] : m;
    if (t.kind === "logic") {
      const m = r.logic, k = e.a, g = e.b;
      switch (e.type) {
        case "is":
          return Ke(ge(m.is, { A: i(o(k)), B: i(o(g)) }));
        case "not":
          return Ke(ge(m.not, { A: i(o(k)), B: i(o(g)) }));
        case "either":
          return Ke(ge(m.either, { A: i(o(k)), B1: i(g[0]), B2: i(g[1]) }));
        case "neither":
          return Ke(ge(m.neither, { A: i(o(k)), B1: i(g[0]), B2: i(g[1]) }));
        case "oneof":
          return Ke(ge(m.oneof, { A1: i(k[0]), A2: i(k[1]), B1: i(g[0]), B2: i(g[1]) }));
        case "before":
          return Ke(ge(m.before, { A: i(o(k)), B: i(o(g)) }));
        case "after":
          return Ke(ge(m.after, { A: i(o(k)), B: i(o(g)) }));
        case "apart":
          return Ke(ge(m.apart, { A: i(o(k)), B: i(o(g)), n: (_a3 = e.n) != null ? _a3 : 1 })).replace(/ exactly 1 places apart/, " exactly 1 place apart");
        default:
          throw new Z("no sentence for a ".concat(e.type, " clue"));
      }
    }
    const a = o(e.a), c = Array.isArray(e.b) ? e.b : [e.b];
    if (e.type === "either") {
      const m = (_b3 = r.either[rl(t, a, c[0])]) != null ? _b3 : r.eitherAny;
      return Ke(ge(m, { A: i(a), B1: i(c[0]), B2: i(c[1]) }));
    }
    const l = (m) => t.categories.findIndex((k) => k.items.includes(m)), [d, h] = l(a) < l(c[0]) ? [a, c[0]] : [c[0], a], f = (_c2 = (e.type === "not" ? r.not : r.is)[rl(t, d, h)]) != null ? _c2 : e.type === "not" ? r.notAny : r.isAny;
    return Ke(ge(f, { X: i(d), Y: i(h) }));
  }
  function yw(t, e, s, n, r) {
    var _a3;
    const i = ni(r).hint, o = (d, h = false) => h ? Ke(jn(t, d, n, r)) : jn(t, d, n, r), a = Xr(t);
    for (const d of rt(t)) {
      const h = vt(s, d);
      if (h && h !== a[d]) {
        const [p, f] = Pe(d);
        return { kind: "wrong", cell: d, text: ge(i.wrong, { A: o(p), B: o(f) }) };
      }
    }
    const c = t.clues.filter((d) => e.includes(d.id)), l = bt(t, c);
    for (const d of l.steps) {
      const [h, p] = d.cell, f = "".concat(h, "|").concat(p);
      if (vt(s, f) === d.value) continue;
      const m = d.value === "yes", k = ge(m ? i.yes : i.no, { A: o(h), B: o(p) });
      let g;
      const b = () => {
        const v = t.clues.find(($) => $.id === d.clue);
        return v ? ge(i.clue, { n: v.id.slice(1), text: il(t, v, n, r) }) : "";
      };
      if (d.rule === "clue") g = "".concat(b(), " ").concat(k);
      else if (d.rule === "elim") {
        const v = d.from[0];
        g = ge(i.elim, { F0: o(v[0], true), F1: o(v[1]), A: o(h), B: o(p) });
      } else if (d.rule === "last") g = ge(i.last, { A: o(h), B: o(p) });
      else if (d.rule === "either") g = "".concat(b(), " ").concat(ge(i.either, { A: o(h), B: o(p) }));
      else if (d.rule === "order") g = "".concat(b(), " ").concat(ge(i.order, { A: o(h), B: o(p) }));
      else if (d.rule === "trans") {
        const [v, $] = d.from, S = (_a3 = v.find((_) => $.includes(_))) != null ? _a3 : v[0];
        g = ge(i.trans, { A: o(h), B: o(p), M: o(S), verb: m ? i.verbYes : i.verbNo });
      } else g = k;
      return { kind: "step", cell: f, text: g };
    }
    return c.length < t.clues.length ? { kind: "more", cell: "", text: i.more } : { kind: "accuse", cell: "", text: i.accuse };
  }
  const Re = x().min(1).max(64).regex(/^[A-Za-z0-9][A-Za-z0-9_.-]*$/, "an id of letters, digits, dots, dashes and underscores"), He = x().min(1), Sw = U({ kind: Y(uw).default("murdle"), size: L().int().min(ei[0]).max(ei[ei.length - 1]).default(3), seed: L().int().min(0).default(1), band: Y(hw).default("easy"), names: Q(x(), He), aliases: Q(x(), He).default({}), labels: Q(x(), He).default({}), items: N(Re).min(1) }), $w = U({ id: Re, unit: Re.optional(), title: He, story: He, case: Sw }), zw = U({ id: Re, name: He, x: L(), y: L() }), _w = U({ from: Re, to: Re, item: Re, decoys: N(Re).max(5), clue: He.optional() }), jw = U({ unit: Re.optional(), final: J().default(false), suspect: He, title: He.optional(), story: He.optional(), start: Re, places: N(zw).min(2), route: N(_w).min(1), map: Re, width: L().positive().default(800), height: L().positive().default(600) }), xw = U({ rooms: N($w).min(1), final: Re.optional(), chase: jw.optional() }), Ew = ["DET_UNIT_NO_ROOM", "DET_ROOM_UNIT_MISSING", "DET_FINAL_MISSING", "DET_PUZZLE_INVALID", "DET_PUZZLE_NOT_UNIQUE", "DET_PUZZLE_UNSOLVABLE", "DET_NAME_MISSING", "DET_CLUE_ITEM_MISSING", "DET_TOO_FEW_CLUE_ITEMS", "DET_CHASE_PLACE_MISSING", "DET_CHASE_ROUTE_BROKEN", "DET_CHASE_ITEM_MISSING", "DET_CHASE_FEW_DECOYS", "DET_ALIAS_NOT_FACT"], ol = (t) => t.route[t.route.length - 1].to, Aw = (t) => t.rooms.find((e) => e.id === t.final), al = (t) => ({ kind: t.kind, size: t.size, seed: t.seed, band: t.band });
  function Tw(t) {
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
  function Iw(t, e) {
    const s = [], n = new Set(e.items.map((o) => o.id)), r = new Set(e.units.map((o) => o.id)), i = /* @__PURE__ */ new Set();
    return t.rooms.forEach((o, a) => {
      i.has(o.id) && s.push({ code: "DUPLICATE_ID", path: "rooms[".concat(a, "].id"), message: 'the room id "'.concat(o.id, '" is used twice') }), i.add(o.id), o.unit !== void 0 && !r.has(o.unit) && s.push({ code: "UNKNOWN_UNIT", path: "rooms[".concat(a, "].unit"), message: 'unknown unit "'.concat(o.unit, '"') }), o.case.items.forEach((c, l) => {
        n.has(c) || s.push({ code: "UNKNOWN_ITEM", path: "rooms[".concat(a, "].case.items[").concat(l, "]"), message: 'unknown item "'.concat(c, '"') });
      });
    }), t.final !== void 0 && !i.has(t.final) && s.push({ code: "UNKNOWN_ROOM", path: "final", message: 'unknown room "'.concat(t.final, '"') }), t.chase && (t.chase.unit !== void 0 && !r.has(t.chase.unit) && s.push({ code: "UNKNOWN_UNIT", path: "chase.unit", message: 'unknown unit "'.concat(t.chase.unit, '"') }), t.chase.route.forEach((o, a) => {
      n.has(o.item) || s.push({ code: "UNKNOWN_ITEM", path: "chase.route[".concat(a, "].item"), message: 'unknown item "'.concat(o.item, '"') });
    })), s;
  }
  const Mw = (t) => t.chase ? [{ path: "chase.map", id: t.chase.map }] : [];
  function Ow(t, e) {
    const s = [], n = (r) => {
      if (typeof r == "string") {
        const i = e(r);
        i && s.push(i);
      } else Array.isArray(r) ? r.forEach(n) : r && typeof r == "object" && Object.values(r).forEach(n);
    };
    return n(t), s;
  }
  function Nw(t, e, s = {}) {
    var _a3, _b3;
    if (!t) return [];
    const n = [], r = (h, p, f, m = {}) => {
      n.push({ code: h, path: p, message: f, ...m });
    }, i = e.pack, o = new Set(i.units.map((h) => h.id)), a = new Map(i.items.map((h) => [h.id, h])), c = (_a3 = s.build) != null ? _a3 : ((h) => Xc(h));
    t.final === void 0 ? ((_b3 = t.chase) == null ? void 0 : _b3.final) || r("DET_FINAL_MISSING", "final", "the section has no final room (`final`) and the chase is not the final challenge (`chase.final`)") : t.rooms.some((h) => h.id === t.final) || r("DET_FINAL_MISSING", "final", 'the final room "'.concat(t.final, '" does not exist'));
    const l = /* @__PURE__ */ new Set();
    t.rooms.forEach((h, p) => {
      h.unit !== void 0 ? o.has(h.unit) ? l.add(h.unit) : r("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "].unit"), 'the room "'.concat(h.id, '" belongs to the unit "').concat(h.unit, '", which the course does not have')) : h.id !== t.final && r("DET_ROOM_UNIT_MISSING", "rooms[".concat(p, "]"), 'the room "'.concat(h.id, '" has no unit and is not the final room'));
    });
    for (const h of i.units) l.has(h.id) || r("DET_UNIT_NO_ROOM", "rooms", 'the unit "'.concat(h.id, '" has no escape room'));
    t.rooms.forEach((h, p) => {
      var _a4;
      const f = "rooms[".concat(p, "].case"), m = h.case;
      let k = null;
      try {
        k = c(al(m));
      } catch (b) {
        const v = b instanceof Error ? b.message : String(b);
        /exactly one solution/i.test(v) ? r("DET_PUZZLE_NOT_UNIQUE", f, 'the puzzle of room "'.concat(h.id, '" does not have exactly one solution (').concat(v, ")")) : /deduction/i.test(v) ? r("DET_PUZZLE_UNSOLVABLE", f, 'the puzzle of room "'.concat(h.id, '" cannot be solved by deduction alone (').concat(v, ")")) : r("DET_PUZZLE_INVALID", f, "no ".concat(m.kind, " puzzle of size ").concat(m.size, ", band ").concat(m.band, " could be made from seed ").concat(m.seed, " (").concat(v, ")"));
      }
      if (k) for (const b of mw(k.puzzle)) m.names[b] || r("DET_NAME_MISSING", "".concat(f, ".names"), 'the entity "'.concat(b, '" of the puzzle of room "').concat(h.id, '" has no name'));
      const g = /* @__PURE__ */ new Set();
      m.items.forEach((b, v) => {
        a.has(b) ? g.add(b) : r("DET_CLUE_ITEM_MISSING", "".concat(f, ".items[").concat(v, "]"), 'the clue item "'.concat(b, '" does not exist'));
      }), k && g.size < k.puzzle.clues.length && r("DET_TOO_FEW_CLUE_ITEMS", "".concat(f, ".items"), 'room "'.concat(h.id, '" has ').concat(k.puzzle.clues.length, " clue cards but only ").concat(g.size, " clue items"));
      for (const [b, v] of Object.entries(m.aliases)) {
        const $ = m.names[b];
        if ($) for (const S of e.editions) {
          const _ = e.resolvers[S], w = _ == null ? void 0 : _.text($);
          if (!_ || !w) continue;
          const A = Fe(w, { fold: true });
          [...g].some((O) => Ow(a.get(O), (R) => _.text(R)).some((R) => Fe(R, { fold: true }).includes(A))) || r("DET_ALIAS_NOT_FACT", "".concat(f, ".aliases.").concat(b), 'the alias "'.concat((_a4 = _.text(v)) != null ? _a4 : v, '" stands for "').concat(w, '", but no item of room "').concat(h.id, '" asks about it (').concat(S, ")"), { severity: "warning", lang: S });
        }
      }
    });
    const d = t.chase;
    if (d) {
      const h = new Set(d.places.map((m) => m.id));
      h.has(d.start) || r("DET_CHASE_PLACE_MISSING", "chase.start", 'the start "'.concat(d.start, '" is not one of the places')), d.route.forEach((m, k) => {
        const g = "chase.route[".concat(k, "]");
        h.has(m.from) || r("DET_CHASE_PLACE_MISSING", "".concat(g, ".from"), 'the place "'.concat(m.from, '" does not exist')), h.has(m.to) || r("DET_CHASE_PLACE_MISSING", "".concat(g, ".to"), 'the place "'.concat(m.to, '" does not exist')), m.decoys.forEach((b, v) => {
          h.has(b) || r("DET_CHASE_PLACE_MISSING", "".concat(g, ".decoys[").concat(v, "]"), 'the decoy "'.concat(b, '" is not one of the places'));
        }), a.has(m.item) || r("DET_CHASE_ITEM_MISSING", "".concat(g, ".item"), 'the clue item "'.concat(m.item, '" does not exist')), new Set(m.decoys.filter((b) => b !== m.to)).size < 1 && r("DET_CHASE_FEW_DECOYS", "".concat(g, ".decoys"), "the leg ".concat(m.from, " -> ").concat(m.to, " needs at least 1 decoy place (other than ").concat(m.to, ")"));
      });
      const p = /* @__PURE__ */ new Set([d.start]);
      let f = d.start;
      d.route.forEach((m, k) => {
        m.from !== f && r("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(k, "].from"), "the leg ".concat(k + 1, ' starts at "').concat(m.from, '" but the trail is at "').concat(f, '"')), p.has(m.to) && r("DET_CHASE_ROUTE_BROKEN", "chase.route[".concat(k, "].to"), 'the trail goes back to "'.concat(m.to, '", a place it has already visited')), p.add(m.to), f = m.to;
      }), d.unit !== void 0 && !o.has(d.unit) && r("DET_ROOM_UNIT_MISSING", "chase.unit", 'the chase belongs to the unit "'.concat(d.unit, '", which the course does not have')), d.unit === void 0 && !d.final && r("DET_FINAL_MISSING", "chase", "the chase is neither the challenge of a unit (`unit`) nor the final challenge (`final`)");
    }
    return n;
  }
  const Pw = { id: "detective", theme: "noir", requiresSection: true, schema: xw, textRefs: (t) => Tw(t), assetRefs: Mw, validate: Iw, lint: (t, e) => Nw(t, e), codes: Ew, warnings: ["DET_ALIAS_NOT_FACT"] }, Rw = U({ id: P, year: L().int().refine((t) => t !== 0, "there is no year 0"), label: C, text: C.optional(), article: P.optional() }), Dw = U({ id: P, x: L(), y: L(), label: C, article: P }), Lw = U({ asset: P, width: L().positive(), height: L().positive(), places: N(Dw).default([]) }), Cw = U({ id: P, clue: C, article: P, item: P, collectible: C }), Zw = U({ id: P, unit: P, title: C, intro: C.optional(), steps: N(Cw) }), Uw = ["n", "v", "adj", "adv", "prep", "conj", "phrase"], Fw = U({ id: P, term: C, lemma: C.optional(), gloss: C, pos: Y(Uw).optional(), note: C.optional() }), cl = U({ timeline: N(Rw).default([]), map: Lw.optional(), hunts: N(Zw).default([]), glossary: Q(x(), N(Fw)).default({}), reader: J().default(false) }), Bw = /* @__PURE__ */ new Set(["the", "and", "for", "are", "was", "its", "with", "from", "that", "this"]), $s = (t) => Fe(t, { fold: true });
  function Kw(t, e) {
    const s = new Set(t.split(" ").filter(Boolean)), n = [...s], r = $s(e).split(" ").filter((i) => i.length > 2 || /^\d+$/.test(i)).filter((i) => !Bw.has(i));
    return r.length === 0 ? true : r.every((i) => {
      if (/^\d+$/.test(i)) return s.has(i);
      const o = i.length >= 7 ? i.slice(0, i.length - 2) : i.length >= 5 ? i.slice(0, i.length - 1) : i;
      return n.some((a) => a.startsWith(o));
    });
  }
  function qw(t, e) {
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
  function ll(t, e, s) {
    const n = qw(t, s);
    if (!n) return null;
    const r = $s(e.bodyKeys.map((i) => {
      var _a3;
      return (_a3 = s.text(i)) != null ? _a3 : "";
    }).join(" "));
    return n.every((i) => i.length === 0 || i.some((o) => Kw(r, o)));
  }
  function Gw(t) {
    const e = t.normalize("NFKC").toLowerCase(), s = /(\d{1,4})/.exec(e);
    if (!s) return;
    const n = Number(s[1]);
    return !Number.isFinite(n) || n === 0 ? void 0 : /\bbce?\b|\bb\.c\.|\bpr\.?\s*kr|\bpr\.?\s*n\.?\s*e\b|\bprije\s+krista/.test(e) ? -n : n;
  }
  const Ww = { mcq: 0, typed: 1, cloze: 2, "true-false": 3, listening: 4, hotspot: 5, "multi-select": 6, flashcard: 7, "match-pairs": 8, order: 9, "sort-groups": 10, crossword: 11, "word-search": 12 }, dl = (t, e) => {
    var _a3;
    return (_a3 = t.objectives.find((s) => s.id === e.objective)) == null ? void 0 : _a3.unit;
  }, ul = (t) => t.flatMap((e) => e.split(/\n+/)).map((e) => e.trim()).filter(Boolean);
  function Hw(t, e = fl(t)) {
    const s = At(t.units), n = (r) => {
      const i = r.unit ? s.indexOf(r.unit) : -1;
      return i < 0 ? s.length : i;
    };
    return e.filter((r) => !r.virtual).map((r, i) => ({ a: r, i })).sort((r, i) => n(r.a) - n(i.a) || r.i - i.i).map((r) => r.a);
  }
  const hl = (t, e) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t == null ? void 0 : t.glossary) == null ? void 0 : _a3[e]) != null ? _b3 : [];
  };
  function pl(t) {
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
  function fl(t) {
    const e = t.encyclopedia.articles.map((r) => ({ id: r.id, titleKey: r.title, bodyKeys: [r.body], ...r.unit ? { unit: r.unit } : {}, ...r.asset ? { assetId: r.asset } : {}, citations: r.citations, related: r.related, virtual: false })), s = [...e], n = new Map(t.factbase.map((r) => [r.id, r.claim]));
    for (const r of t.units) if (!e.some((i) => i.unit === r.id)) for (const i of t.objectives.filter((o) => o.unit === r.id)) s.push({ id: "auto-".concat(i.id), titleKey: i.text, bodyKeys: [i.text, ...i.facts.map((o) => n.get(o)).filter((o) => !!o)], unit: r.id, citations: i.facts, related: [], virtual: true });
    return s;
  }
  function Vw(t, e, s) {
    const n = [], r = new Map(t.objectives.map((i) => [i.id, new Set(i.facts)]));
    for (const i of At(t.units)) {
      const o = t.items.filter((d) => dl(t, d) === i);
      if (o.length === 0) continue;
      const a = e.filter((d) => d.unit === i).slice(0, 6), c = /* @__PURE__ */ new Set(), l = [];
      for (const d of a) {
        const h = new Set(d.citations), p = o.filter((g) => {
          var _a3;
          return d.virtual ? g.objective === d.id.slice(5) : [...(_a3 = r.get(g.objective)) != null ? _a3 : []].some((b) => h.has(b));
        }), f = (p.length > 0 ? p : o).filter((g) => !c.has(g.id)), m = (g) => {
          var _a3;
          return (ll(g, d, s) === false ? 100 : 0) + ((_a3 = Ww[g.kind]) != null ? _a3 : 20) + (p.includes(g) ? 0 : 40);
        }, k = [...f, ...o.filter((g) => !c.has(g.id) && !f.includes(g))].sort((g, b) => m(g) - m(b))[0];
        k && (c.add(k.id), l.push({ id: "s-".concat(d.id), article: d.id, item: k.id }));
      }
      l.length > 0 && n.push({ id: "h-".concat(i), unit: i, steps: l, auto: true });
    }
    return n;
  }
  function Yw(t, e = 2) {
    const s = [...new Set(t.map((r) => r.unit))], n = [];
    for (const r of s) {
      const i = t.filter((a) => a.unit === r).flatMap((a) => a.steps), o = e >= 2 && i.length >= 2 ? [i[0], i[i.length - 1]] : i.slice(0, 1);
      for (const a of o) n.some((c) => c.id === a.id) || n.push(a);
    }
    return n;
  }
  function Jw(t, e, s) {
    var _a3, _b3;
    const n = [];
    for (const r of t.items) if (!(r.kind !== "order" || r.timeline !== true)) for (const i of r.items) {
      const o = i.when ? s.text(i.when) : void 0, a = o ? Gw(o) : void 0;
      if (a === void 0) continue;
      const c = $s((_a3 = s.text(i.text)) != null ? _a3 : ""), l = (_b3 = e.find((d) => {
        var _a4;
        return !d.virtual && c.includes($s((_a4 = s.text(d.titleKey)) != null ? _a4 : "\0"));
      })) != null ? _b3 : e.find((d) => !d.virtual && Qw(c, $s(d.bodyKeys.map((h) => {
        var _a4;
        return (_a4 = s.text(h)) != null ? _a4 : "";
      }).join(" "))) >= 2);
      n.push({ id: "".concat(r.id, ".").concat(i.id), year: a, label: i.text, ...i.when ? { whenKey: i.when } : {}, ...l ? { article: l.id } : {} });
    }
    return n.sort((r, i) => r.year - i.year);
  }
  const Qw = (t, e) => {
    const s = new Set(e.split(" "));
    return t.split(" ").filter((n) => n.length >= 5 && s.has(n)).length;
  };
  function Xw(t) {
    const e = t.assets.find((s) => s.kind === "image");
    return e ? { asset: e.id, width: 0, height: 0, places: [], auto: true } : void 0;
  }
  function ml(t, e, s) {
    const n = fl(t), r = e && e.hunts.length > 0 ? e.hunts.map((a) => ({ id: a.id, unit: a.unit, title: a.title, ...a.intro ? { intro: a.intro } : {}, steps: a.steps.map((c) => ({ ...c })), auto: false })) : Vw(t, n, s), i = e && e.timeline.length > 0 ? [...e.timeline].map((a) => ({ id: a.id, year: a.year, label: a.label, ...a.text ? { text: a.text } : {}, ...a.article ? { article: a.article } : {} })).sort((a, c) => a.year - c.year) : Jw(t, n, s), o = (e == null ? void 0 : e.map) ? { asset: e.map.asset, width: e.map.width, height: e.map.height, places: e.map.places.map((a) => ({ ...a })), auto: false } : Xw(t);
    return { articles: n, hunts: r, timeline: i, ...o ? { map: o } : {}, finalSteps: Yw(r) };
  }
  const ey = (t) => t;
  function ty(t, e) {
    const s = [], n = new Set(e.units.map((c) => c.id)), r = (c, l, d) => {
      const h = /* @__PURE__ */ new Set();
      l.forEach((p, f) => {
        h.has(p) && s.push({ code: "DUPLICATE_ID", path: ey("".concat(d, "[").concat(f, "].id")), message: "the ".concat(c, ' id "').concat(p, '" is used twice') }), h.add(p);
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
  const sy = (t, e) => {
    var _a3;
    const s = [], { pack: n } = e, r = (_a3 = e.resolvers[n.sourceLang]) != null ? _a3 : Object.values(e.resolvers)[0], i = ml(n, t, r), o = new Map(i.articles.map((d) => [d.id, d])), a = new Map(n.items.map((d) => [d.id, d])), c = new Map(n.assets.map((d) => [d.id, d]));
    i.hunts.forEach((d, h) => {
      d.steps.length === 0 && s.push({ code: "ENC_HUNT_EMPTY", path: "hunts[".concat(h, "]"), message: 'the hunt "'.concat(d.id, '" has no steps') });
      const p = /* @__PURE__ */ new Map();
      d.steps.forEach((f, m) => {
        const k = "hunts[".concat(h, "].steps[").concat(m, "]"), g = o.get(f.article), b = a.get(f.item);
        if (g || s.push({ code: "ENC_HUNT_TARGET_MISSING", path: "".concat(k, ".article"), message: 'the step "'.concat(f.id, '" sends the learner to the article "').concat(f.article, '", which does not exist') }), b || s.push({ code: "ENC_HUNT_ITEM_MISSING", path: "".concat(k, ".item"), message: 'the step "'.concat(f.id, '" asks the item "').concat(f.item, '", which does not exist') }), b) {
          const v = p.get(b.id);
          v ? s.push({ code: "ENC_HUNT_ITEM_DUPLICATE", path: "".concat(k, ".item"), message: 'the steps "'.concat(v, '" and "').concat(f.id, '" of the hunt "').concat(d.id, '" ask the same item "').concat(b.id, '"; the second can never come up') }) : p.set(b.id, f.id);
          const $ = dl(n, b);
          $ && $ !== d.unit && s.push({ code: "ENC_HUNT_ITEM_OTHER_UNIT", severity: "warning", path: "".concat(k, ".item"), message: 'the item "'.concat(b.id, '" belongs to the unit "').concat($, '", not to the hunt\'s unit "').concat(d.unit, '"') });
        }
        if (g && b) for (const v of e.editions) {
          const $ = e.resolvers[v];
          $ && ll(b, g, $) === false && s.push({ code: "ENC_ANSWER_NOT_IN_ARTICLE", severity: "warning", path: k, lang: v, message: 'the right answer of "'.concat(b.id, '" does not appear in the article "').concat(g.id, '": the hunt would send the learner to a page that does not hold the answer') });
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
    return s.push(...ny(t, e, r)), s;
  };
  function ny(t, e, s) {
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
  const ry = { id: "encyclopedia", theme: "parchment", requiresSection: false, schema: cl, textRefs: (t) => {
    var _a3, _b3;
    return [...t.timeline.flatMap((e, s) => [{ path: "timeline[".concat(s, "].label"), key: e.label, role: "string" }, ...e.text ? [{ path: "timeline[".concat(s, "].text"), key: e.text, role: "string" }] : []]), ...((_b3 = (_a3 = t.map) == null ? void 0 : _a3.places) != null ? _b3 : []).map((e, s) => ({ path: "map.places[".concat(s, "].label"), key: e.label, role: "string" })), ...t.hunts.flatMap((e, s) => [{ path: "hunts[".concat(s, "].title"), key: e.title, role: "string" }, ...e.intro ? [{ path: "hunts[".concat(s, "].intro"), key: e.intro, role: "string" }] : [], ...e.steps.flatMap((n, r) => [{ path: "hunts[".concat(s, "].steps[").concat(r, "].clue"), key: n.clue, role: "string" }, { path: "hunts[".concat(s, "].steps[").concat(r, "].collectible"), key: n.collectible, role: "string" }])]), ...Object.entries(t.glossary).flatMap(([e, s]) => s.flatMap((n, r) => {
      const i = "glossary.".concat(e, "[").concat(r, "]");
      return [{ path: "".concat(i, ".term"), key: n.term, role: "string" }, { path: "".concat(i, ".gloss"), key: n.gloss, role: "string" }, ...n.lemma ? [{ path: "".concat(i, ".lemma"), key: n.lemma, role: "string" }] : [], ...n.note ? [{ path: "".concat(i, ".note"), key: n.note, role: "string" }] : []];
    }))];
  }, assetRefs: (t) => t.map ? [{ path: "map.asset", id: t.map.asset }] : [], validate: ty, lint: sy, codes: ["GLOSS_TERM_NOT_IN_TEXT", "GLOSS_DUPLICATE", "GLOSS_COVERAGE", "ENC_HUNT_TARGET_MISSING", "ENC_HUNT_ITEM_MISSING", "ENC_HUNT_ITEM_DUPLICATE", "ENC_UNIT_NO_HUNT", "ENC_HUNT_EMPTY", "ENC_TIMELINE_ARTICLE_MISSING", "ENC_MAP_ARTICLE_MISSING", "ENC_MAP_PLACE_OUTSIDE", "ENC_MAP_NO_IMAGE", "ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT"], warnings: ["ENC_ANSWER_NOT_IN_ARTICLE", "ENC_HUNT_ITEM_OTHER_UNIT", "GLOSS_COVERAGE"] }, iy = U({ name: C, line: C, hint: C.optional(), right: C.optional(), wrong: C.optional(), portrait: P.optional() }), oy = U({ to: P, items: N(P).default([]) }), ay = U({ id: P, name: C, description: C.optional(), character: iy.optional(), doors: N(oy).default([]), key: J().default(false), objective: P.optional(), asset: P.optional() }), cy = U({ id: P, unit: P, name: C, description: C.optional(), entry: P, rooms: N(ay).min(1) }), ly = U({ name: C.optional(), description: C.optional(), size: L().int().min(3).max(20).default(8) }), dy = U({ torches: L().int().min(0).max(9).default(3), wings: N(cy).default([]), throne: ly.optional() }), uy = ["MAZE_WING_UNIT_MISSING", "MAZE_ENTRY_MISSING", "MAZE_DOOR_TARGET_MISSING", "MAZE_DOOR_ITEM_MISSING", "MAZE_OBJECTIVE_MISSING", "MAZE_DUPLICATE", "MAZE_UNIT_NO_WING", "MAZE_DOOR_NO_ITEMS", "MAZE_ROOM_UNREACHABLE", "MAZE_NO_KEY_ROOM", "MAZE_KEY_UNREACHABLE", "MAZE_KEY_AT_ENTRY", "MAZE_DEAD_END", "MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], hy = ["MAZE_DOOR_ITEM_OTHER_UNIT", "MAZE_TOO_FEW_TORCHES"], gl = 3, py = 8, fy = 4, De = (t) => ({ ui: t }), my = (t) => t ? { key: t } : void 0, gy = (t, e) => t ? { name: { key: t.name }, line: { key: t.line }, ...t.hint ? { hint: { key: t.hint } } : {}, ...t.right ? { right: { key: t.right } } : {}, ...t.wrong ? { wrong: { key: t.wrong } } : {}, ...t.portrait ? { portrait: t.portrait } : {}, look: e % 6 } : void 0, kl = (t, e) => ({ name: De("maze.auto.".concat(t, ".name")), line: De("maze.auto.".concat(t, ".line")), right: De("maze.auto.".concat(t, ".right")), wrong: De("maze.auto.".concat(t, ".wrong")), look: e % 6 }), bl = ["maze.auto.gallery", "maze.auto.gallery2", "maze.auto.gallery3"];
  function ky(t, e, s = e) {
    var _a3, _b3, _c2;
    const n = t.units.find((h) => h.id === e), r = cn(t, e).map((h) => ({ o: h, items: oc(t, h.id).map((p) => p.id) })).filter((h) => h.items.length > 0), i = [...new Set(r.flatMap((h) => h.items))], o = [{ id: "hall", name: De("maze.auto.hall"), pool: [], who: "gate", key: false, description: De("maze.auto.hall.desc") }];
    r.forEach((h, p) => o.push({ id: "r-".concat(h.o.id), name: { key: h.o.text }, pool: h.items, who: p % 2 === 0 ? "scholar" : "archivist", key: false }));
    for (let h = 0; o.length < fy; h++) o.push({ id: "gallery-".concat(h + 1), name: De(bl[h % bl.length]), pool: i, who: "scholar", key: false });
    o.push({ id: "key", name: De("maze.auto.keyroom"), pool: i, who: "keeper", key: true, description: De("maze.auto.keyroom.desc") });
    const a = o.map((h, p) => {
      const f = o[p + 1];
      return { id: h.id, name: h.name, ...h.description ? { description: h.description } : {}, character: kl(h.who, p), doors: f ? [{ to: f.id, items: f.pool.length > 0 ? f.pool : i }] : [], key: h.key };
    }), c = Math.floor((o.length - 1) / 2), l = a[c], d = o[c + 1];
    if (l && d) {
      const h = (_b3 = (_a3 = l.doors[0]) == null ? void 0 : _a3.items) != null ? _b3 : i;
      a.push({ id: "side", name: De("maze.auto.side"), description: De("maze.auto.side.desc"), character: kl("archivist", 3), doors: [{ to: d.id, items: h }], key: false }), l.doors.push({ to: "side", items: h });
    }
    return { id: s, unit: e, name: (_c2 = my(n == null ? void 0 : n.title)) != null ? _c2 : De("maze.auto.wing"), entry: "hall", rooms: a, auto: true };
  }
  const by = (t, e, s) => {
    const n = new Set(t.items.map((o) => o.id)), r = new Map(e.rooms.map((o) => [o.id, o])), i = (o) => {
      var _a3, _b3;
      const a = o.items.length > 0 ? o.items : ((_a3 = r.get(o.to)) == null ? void 0 : _a3.objective) ? oc(t, (_b3 = r.get(o.to)) == null ? void 0 : _b3.objective).map((c) => c.id) : [];
      return [...new Set(a)].filter((c) => n.has(c));
    };
    return { id: e.id, unit: e.unit, name: { key: e.name }, ...e.description ? { description: { key: e.description } } : {}, entry: e.entry, auto: false, rooms: e.rooms.map((o, a) => {
      const c = gy(o.character, s * 3 + a);
      return { id: o.id, name: { key: o.name }, ...o.description ? { description: { key: o.description } } : {}, ...c ? { character: c } : {}, doors: o.doors.map((l) => ({ to: l.to, items: i(l) })), key: o.key, ...o.asset ? { asset: o.asset } : {} };
    }) };
  };
  function vl(t, e) {
    var _a3, _b3, _c2;
    const s = ((_a3 = e == null ? void 0 : e.wings) != null ? _a3 : []).map((d, h) => by(t, d, h)), n = new Set(s.map((d) => d.unit)), r = new Set(s.map((d) => d.id)), i = t.units.filter((d) => !n.has(d.id)).map((d) => ky(t, d.id, r.has(d.id) ? "".concat(d.id, "-auto") : d.id)), o = At(t.units), a = (d) => {
      const h = o.indexOf(d.unit);
      return h < 0 ? o.length : h;
    }, c = [...s, ...i].map((d, h) => ({ w: d, i: h })).sort((d, h) => a(d.w) - a(h.w) || d.i - h.i).map((d) => d.w), l = e == null ? void 0 : e.throne;
    return { torches: (_b3 = e == null ? void 0 : e.torches) != null ? _b3 : gl, wings: c, throne: { ...(l == null ? void 0 : l.name) ? { name: { key: l.name } } : {}, ...(l == null ? void 0 : l.description) ? { description: { key: l.description } } : {}, size: (_c2 = l == null ? void 0 : l.size) != null ? _c2 : py } };
  }
  const xn = (t, e) => "".concat(t, ">").concat(e), wt = (t, e) => t.rooms.find((s) => s.id === e), zs = (t) => t.rooms.filter((e) => e.key).map((e) => e.id);
  function wl(t, e) {
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
  const yl = (t, e) => {
    const s = new Set(zs(t));
    for (const n of wl(t, e)) if (s.has(n)) return true;
    return false;
  };
  function Sl(t, e, s = /* @__PURE__ */ new Set()) {
    var _a3, _b3, _c2, _d2;
    const n = t.rooms.map((h) => h.id);
    if (!n.includes(e)) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const r = new Set(zs(t)), i = /* @__PURE__ */ new Map([[e, 0]]), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    for (; ; ) {
      let h;
      for (const p of n) i.has(p) && !a.has(p) && (h === void 0 || i.get(p) < i.get(h)) && (h = p);
      if (h === void 0) break;
      a.add(h);
      for (const p of (_b3 = (_a3 = wt(t, h)) == null ? void 0 : _a3.doors) != null ? _b3 : []) {
        if (!n.includes(p.to)) continue;
        const f = i.get(h) + (s.has(xn(h, p.to)) ? 1e-3 : 1);
        f < ((_c2 = i.get(p.to)) != null ? _c2 : 1 / 0) - 1e-9 && (i.set(p.to, f), o.set(p.to, h));
      }
    }
    let c;
    for (const h of n) r.has(h) && i.has(h) && (c === void 0 || i.get(h) < i.get(c)) && (c = h);
    if (c === void 0) return { from: e, found: false, path: [e], next: null, locked: 0 };
    const l = [c];
    for (; l[0] !== e; ) l.unshift(o.get(l[0]));
    let d = 0;
    for (let h = 0; h + 1 < l.length; h++) s.has(xn(l[h], l[h + 1])) || d++;
    return { from: e, found: true, path: l, next: (_d2 = l[1]) != null ? _d2 : null, locked: d };
  }
  const vy = (t, e) => t ? [{ path: "".concat(e, ".name"), key: t.name, role: "string" }, { path: "".concat(e, ".line"), key: t.line, role: "string" }, ...t.hint ? [{ path: "".concat(e, ".hint"), key: t.hint, role: "string" }] : [], ...t.right ? [{ path: "".concat(e, ".right"), key: t.right, role: "string" }] : [], ...t.wrong ? [{ path: "".concat(e, ".wrong"), key: t.wrong, role: "string" }] : []] : [];
  function wy(t) {
    var _a3, _b3;
    const e = [];
    return t.wings.forEach((s, n) => {
      e.push({ path: "wings[".concat(n, "].name"), key: s.name, role: "string" }), s.description && e.push({ path: "wings[".concat(n, "].description"), key: s.description, role: "string" }), s.rooms.forEach((r, i) => {
        const o = "wings[".concat(n, "].rooms[").concat(i, "]");
        e.push({ path: "".concat(o, ".name"), key: r.name, role: "string" }), r.description && e.push({ path: "".concat(o, ".description"), key: r.description, role: "string" }), e.push(...vy(r.character, "".concat(o, ".character")));
      });
    }), ((_a3 = t.throne) == null ? void 0 : _a3.name) && e.push({ path: "throne.name", key: t.throne.name, role: "string" }), ((_b3 = t.throne) == null ? void 0 : _b3.description) && e.push({ path: "throne.description", key: t.throne.description, role: "string" }), e;
  }
  function yy(t) {
    const e = [];
    return t.wings.forEach((s, n) => s.rooms.forEach((r, i) => {
      var _a3;
      r.asset && e.push({ path: "wings[".concat(n, "].rooms[").concat(i, "].asset"), id: r.asset }), ((_a3 = r.character) == null ? void 0 : _a3.portrait) && e.push({ path: "wings[".concat(n, "].rooms[").concat(i, "].character.portrait"), id: r.character.portrait });
    })), e;
  }
  function Sy(t, e) {
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
        h.doors.forEach((k, g) => {
          const b = "".concat(f, ".doors[").concat(g, "]");
          d.has(k.to) || s.push({ code: "MAZE_DOOR_TARGET_MISSING", path: "".concat(b, ".to"), message: 'the door of "'.concat(h.id, '" leads to "').concat(k.to, '", which is not a room of the wing "').concat(a.id, '"') }), m.has(k.to) && s.push({ code: "MAZE_DUPLICATE", path: "".concat(b, ".to"), message: '"'.concat(h.id, '" has two doors to "').concat(k.to, '"') }), m.add(k.to), k.items.forEach((v, $) => {
            r.has(v) || s.push({ code: "MAZE_DOOR_ITEM_MISSING", path: "".concat(b, ".items[").concat($, "]"), message: 'the door to "'.concat(k.to, '" asks the unknown item "').concat(v, '"') });
          });
        });
      });
    }), s;
  }
  const $y = (t, e, s, n) => {
    const r = new Set(t.rooms.map((a) => a.id));
    if (!r.has(t.entry)) return;
    const i = zs(t), o = wl(t, t.entry);
    if (t.rooms.forEach((a, c) => {
      const l = "".concat(e, ".rooms[").concat(c, "]");
      o.has(a.id) || s.push({ code: "MAZE_ROOM_UNREACHABLE", path: l, message: 'the room "'.concat(a.id, '" of the wing "').concat(t.id, '" cannot be reached from the entrance "').concat(t.entry, '"') }), a.doors.forEach((d, h) => {
        var _a3, _b3;
        r.has(d.to) && d.items.length === 0 && s.push({ code: "MAZE_DOOR_NO_ITEMS", path: "".concat(l, ".doors[").concat(h, "]"), message: 'the door from "'.concat(a.id, '" to "').concat(d.to, '" has no question to ask (list items, or give the room beyond an objective)') });
        for (const p of d.items) {
          const f = (_a3 = n.items.find((k) => k.id === p)) == null ? void 0 : _a3.objective, m = (_b3 = n.objectives.find((k) => k.id === f)) == null ? void 0 : _b3.unit;
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
      o.has(a.id) && !yl(t, a.id) && s.push({ code: "MAZE_DEAD_END", path: "".concat(e, ".rooms[").concat(c, "]"), message: 'from the room "'.concat(a.id, '" no door leads on to a key room: a learner who walks in is stuck') });
    });
  };
  function zy(t, e) {
    var _a3, _b3;
    const s = [], { pack: n } = e;
    ((_a3 = t == null ? void 0 : t.torches) != null ? _a3 : gl) < 1 && s.push({ code: "MAZE_TOO_FEW_TORCHES", severity: "warning", path: "torches", message: "with fewer than 1 torch the first wrong answer already sends the learner back to the entrance" });
    const r = (_b3 = t == null ? void 0 : t.wings) != null ? _b3 : [], i = vl(n, t);
    for (const o of n.units) r.length > 0 && !r.some((a) => a.unit === o.id) && s.push({ code: "MAZE_UNIT_NO_WING", path: "wings", message: 'no wing of the section covers the unit "'.concat(o.id, '": the castle builds an automatic wing for it, but a unit no authored wing covers is easy to forget') });
    return i.wings.forEach((o) => {
      const a = o.auto ? -1 : r.findIndex((c) => c.id === o.id);
      $y(o, a < 0 ? "auto[".concat(o.id, "]") : "wings[".concat(a, "]"), s, n);
    }), s;
  }
  const _y = { id: "mindmaze", theme: "castle", requiresSection: false, schema: dy, textRefs: wy, assetRefs: yy, validate: Sy, lint: zy, codes: uy, warnings: hy }, jy = U({ id: P, name: C, learner: J().default(false), portrait: P.optional() }), xy = U({ id: P, say: P, text: C, translation: C.optional(), audio: P.optional(), listen: J().default(false), next: P.nullable() }), Ey = U({ id: P, reply: P, help: C.optional(), youSay: C.optional(), next: P.nullable() }), Ay = et([xy, Ey]), Ty = U({ id: P, unit: P.optional(), title: C, setting: C.optional(), cefr: Y(Nr).optional(), start: P, lines: N(Ay).min(1) }), Iy = U({ id: P, text: C, gloss: C, item: P }), $l = U({ speakers: N(jy).default([]), scenes: N(Ty).default([]), garden: N(Iy).default([]), finale: P.optional(), theme: x().optional() }), Ve = (t) => "reply" in t, Le = (t) => "say" in t, Se = (t, e) => e == null ? void 0 : t.lines.find((s) => s.id === e);
  function _s(t) {
    var _a3;
    const e = [], s = /* @__PURE__ */ new Set();
    let n = t.start;
    for (; n !== null; ) {
      const r = Se(t, n);
      if (!r) return { path: e, ends: false, dangling: n };
      if (s.has(r.id)) return { path: e, ends: false, loopAt: (_a3 = e[e.length - 1]) != null ? _a3 : r.id };
      s.add(r.id), e.push(r.id), n = r.next;
    }
    return { path: e, ends: true };
  }
  const En = (t, e) => t.scenes.filter((s) => s.unit === e && s.id !== t.finale);
  function My(t) {
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
  const zl = new Map(Nr.map((t, e) => [t, e])), Oy = ["RP_UNIT_NO_SCENE", "RP_SCENE_UNIT_MISSING", "RP_START_MISSING", "RP_NEXT_MISSING", "RP_NO_END", "RP_LINE_UNREACHABLE", "RP_SPEAKER_MISSING", "RP_REPLY_ITEM_MISSING", "RP_SCENE_NO_REPLY", "RP_GARDEN_ITEM_MISSING", "RP_FINALE_MISSING", "RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE"], Ny = ["RP_TEXT_NOT_TARGET", "RP_REPLY_NOT_PRODUCTION", "RP_CEFR_ABOVE_COURSE"];
  function Py(t) {
    const e = [], s = (n, r) => {
      r && e.push({ path: n, key: r, role: "string" });
    };
    return t.speakers.forEach((n, r) => s("speakers[".concat(r, "].name"), n.name)), t.scenes.forEach((n, r) => {
      s("scenes[".concat(r, "].title"), n.title), s("scenes[".concat(r, "].setting"), n.setting), n.lines.forEach((i, o) => {
        const a = "scenes[".concat(r, "].lines[").concat(o, "]");
        Le(i) ? (s("".concat(a, ".text"), i.text), s("".concat(a, ".translation"), i.translation)) : (s("".concat(a, ".help"), i.help), s("".concat(a, ".youSay"), i.youSay));
      });
    }), t.garden.forEach((n, r) => {
      s("garden[".concat(r, "].text"), n.text), s("garden[".concat(r, "].gloss"), n.gloss);
    }), e;
  }
  function Ry(t) {
    const e = [];
    return t.speakers.forEach((s, n) => s.portrait && e.push({ path: "speakers[".concat(n, "].portrait"), id: s.portrait })), t.scenes.forEach((s, n) => s.lines.forEach((r, i) => {
      Le(r) && r.audio && e.push({ path: "scenes[".concat(n, "].lines[").concat(i, "].audio"), id: r.audio });
    })), e;
  }
  function Dy(t) {
    const e = [], s = (n, r, i) => {
      const o = /* @__PURE__ */ new Set();
      n.forEach((a, c) => {
        o.has(a) && e.push({ code: "DUPLICATE_ID", path: r(c), message: "the ".concat(i, ' id "').concat(a, '" is used twice') }), o.add(a);
      });
    };
    return s(t.speakers.map((n) => n.id), (n) => "speakers[".concat(n, "].id"), "speaker"), s(t.scenes.map((n) => n.id), (n) => "scenes[".concat(n, "].id"), "scene"), t.scenes.forEach((n, r) => s(n.lines.map((i) => i.id), (i) => "scenes[".concat(r, "].lines[").concat(i, "].id"), 'line of scene "'.concat(n.id, '"'))), s(t.garden.map((n) => n.id), (n) => "garden[".concat(n, "].id"), "garden word"), e;
  }
  function Ly(t, e) {
    if (!t) return [];
    const { pack: s } = e, n = [], r = (p, f, m) => {
      n.push({ code: p, path: f, message: m });
    }, i = (p, f, m) => {
      n.push({ code: p, severity: "warning", path: f, message: m });
    }, o = new Map(s.items.map((p) => [p.id, p])), a = new Set(s.units.map((p) => p.id)), c = new Set(t.speakers.map((p) => p.id)), l = s.targetLang ? e.catalogs[s.targetLang] : void 0, d = s.cefr ? zl.get(s.cefr) : void 0, h = t.finale;
    h ? t.scenes.some((p) => p.id === h) || r("RP_FINALE_MISSING", "finale", 'the finale "'.concat(h, '" is not a scene of the section')) : r("RP_FINALE_MISSING", "finale", "the section names no finale scene: nothing mixes the units at the end (the boss)");
    for (const [p, f] of s.units.entries()) En(t, f.id).length === 0 && r("RP_UNIT_NO_SCENE", "scenes", 'the unit "'.concat(f.id, '" (units[').concat(p, "]) has no scene: the learner cannot practise it in a conversation"));
    t.scenes.forEach((p, f) => {
      const m = "scenes[".concat(f, "]");
      p.id !== h && (!p.unit || !a.has(p.unit)) && r("RP_SCENE_UNIT_MISSING", "".concat(m, ".unit"), p.unit ? 'the scene "'.concat(p.id, '" belongs to the unknown unit "').concat(p.unit, '"') : 'the scene "'.concat(p.id, '" belongs to no unit (only the finale may)')), p.unit && p.id === h && !a.has(p.unit) && r("RP_SCENE_UNIT_MISSING", "".concat(m, ".unit"), 'the finale "'.concat(p.id, '" belongs to the unknown unit "').concat(p.unit, '"')), p.cefr && d !== void 0 && zl.get(p.cefr) > d && i("RP_CEFR_ABOVE_COURSE", "".concat(m, ".cefr"), 'the scene "'.concat(p.id, '" is ').concat(p.cefr, ", above the course level ").concat(s.cefr));
      const k = p.lines.some((g) => g.id === p.start);
      if (k || r("RP_START_MISSING", "".concat(m, ".start"), 'the start "'.concat(p.start, '" is not a line of the scene "').concat(p.id, '"')), p.lines.forEach((g, b) => {
        g.next !== null && !p.lines.some((v) => v.id === g.next) && r("RP_NEXT_MISSING", "".concat(m, ".lines[").concat(b, "].next"), 'the line "'.concat(g.id, '" goes on to "').concat(g.next, '", which is no line of the scene "').concat(p.id, '"')), Le(g) && !c.has(g.say) && r("RP_SPEAKER_MISSING", "".concat(m, ".lines[").concat(b, "].say"), 'the line "'.concat(g.id, '" is said by "').concat(g.say, '", who is not in speakers')), Ve(g) && !o.has(g.reply) && r("RP_REPLY_ITEM_MISSING", "".concat(m, ".lines[").concat(b, "].reply"), 'the line "'.concat(g.id, '" asks the item "').concat(g.reply, '", which does not exist')), Le(g) && l && !l.strings[g.text] && i("RP_TEXT_NOT_TARGET", "".concat(m, ".lines[").concat(b, "].text"), 'the line "'.concat(g.id, '" says "').concat(g.text, '", which is not in the ').concat(s.targetLang, " catalog: a spoken line belongs to the target language"));
      }), k) {
        const g = _s(p);
        g.loopAt !== void 0 && r("RP_NO_END", "".concat(m, ".lines"), 'from the start of "'.concat(p.id, '" the lines lead round in a circle at "').concat(g.loopAt, '" and never reach a line whose next is null'));
        const b = new Set(g.path);
        p.lines.forEach(($, S) => {
          b.has($.id) || r("RP_LINE_UNREACHABLE", "".concat(m, ".lines[").concat(S, "]"), 'the line "'.concat($.id, '" can never be reached from the start of "').concat(p.id, '"'));
        }), g.path.map(($) => Se(p, $)).filter(Ve).length === 0 && r("RP_SCENE_NO_REPLY", "".concat(m, ".lines"), 'the scene "'.concat(p.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
      } else p.lines.some(Ve) || r("RP_SCENE_NO_REPLY", "".concat(m, ".lines"), 'the scene "'.concat(p.id, '" has no turn for the learner: nothing is asked, so nothing is retrieved'));
    });
    for (const p of s.units) {
      const m = En(t, p.id).flatMap((k) => k.lines.filter(Ve)).map((k) => o.get(k.reply)).filter((k) => !!k);
      m.length > 0 && !m.some(My) && i("RP_REPLY_NOT_PRODUCTION", "scenes", 'every reply of the scenes of the unit "'.concat(p.id, '" is a choice: the learner never types the language'));
    }
    return t.garden.forEach((p, f) => {
      o.has(p.item) || r("RP_GARDEN_ITEM_MISSING", "garden[".concat(f, "].item"), 'the word "'.concat(p.id, '" is watered with the item "').concat(p.item, '", which does not exist')), l && !l.strings[p.text] && i("RP_TEXT_NOT_TARGET", "garden[".concat(f, "].text"), 'the word "'.concat(p.id, '" is "').concat(p.text, '", which is not in the ').concat(s.targetLang, " catalog"));
    }), n;
  }
  const Cy = { id: "roleplay", theme: "postcard", requiresSection: true, schema: $l, textRefs: Py, assetRefs: Ry, validate: Dy, lint: Ly, codes: Oy, warnings: Ny }, Zy = (t, e) => {
    const s = t.items.find((n) => n.id === e.item);
    return s ? Zk(t, s) : void 0;
  }, Uy = "#.,T~@NBG", Fy = "#T~", An = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }, Tn = ["up", "down", "left", "right"], Ce = (t) => "".concat(t[0], ",").concat(t[1]), ot = (t, e) => t[0] === e[0] && t[1] === e[1], In = (t, e) => Math.abs(t[0] - e[0]) + Math.abs(t[1] - e[1]), ri = (t, e) => In(t, e) === 1, Jt = (t, e) => {
    var _a3;
    return e[1] >= 0 ? (_a3 = t[e[1]]) == null ? void 0 : _a3[e[0]] : void 0;
  }, js = (t, e = false) => t !== void 0 && (t === "G" ? e : !Fy.includes(t));
  function _l(t) {
    const e = Math.max(0, ...t.map((i) => i.length));
    let s = null, n = null;
    const r = /* @__PURE__ */ new Set();
    return t.forEach((i, o) => {
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        Uy.includes(c) || r.add(c), c === "@" && !s && (s = [a, o]), c === "G" && !n && (n = [a, o]);
      }
    }), { w: e, h: t.length, rows: [...t], ragged: t.some((i) => {
      var _a3, _b3;
      return i.length !== ((_b3 = (_a3 = t[0]) == null ? void 0 : _a3.length) != null ? _b3 : 0);
    }), start: s, gate: n, unknown: [...r] };
  }
  const Mn = (t, e) => [t[0] + An[e][0], t[1] + An[e][1]];
  function By(t, e, s = {}) {
    var _a3;
    const n = /* @__PURE__ */ new Set([Ce(e)]), r = [e];
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      for (const a of Tn) {
        const c = Mn(o, a), l = Ce(c);
        n.has(l) || !js(Jt(t, c), s.gateOpen) || ((_a3 = s.blocked) == null ? void 0 : _a3.has(l)) || (n.add(l), r.push(c));
      }
    }
    return n;
  }
  function jl(t, e, s, n = {}) {
    var _a3;
    if (s(e)) return [];
    const r = /* @__PURE__ */ new Map([[Ce(e), null]]), i = [e];
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      for (const c of Tn) {
        const l = Mn(a, c), d = Ce(l);
        if (!(r.has(d) || !js(Jt(t, l), n.gateOpen) || ((_a3 = n.blocked) == null ? void 0 : _a3.has(d)))) {
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
  function xl(t, e, s, n = {}) {
    return jl(t, e, (r) => ri(r, s), n);
  }
  function On(t, e, s, n, r = false) {
    const i = new Set(n.filter((a) => !ot(a, s)).map(Ce)), o = By(t, e, { blocked: i, gateOpen: r });
    return o.has(Ce(s)) ? true : Tn.some((a) => o.has(Ce(Mn(s, a))));
  }
  const El = 16, Al = 11, Ky = (t) => Tn.map((e) => Mn(t, e));
  function qy(t, e) {
    const s = Math.max(0, Math.min(4, Math.floor(e)));
    for (let n = 0; n < 6; n++) {
      const r = Gy("".concat(t, "#").concat(n), s, n >= 3);
      if (r) return r;
    }
    return Wy(s);
  }
  function Gy(t, e, s) {
    const n = new st("rpg-map:".concat(t)), r = El, i = Al, o = Array.from({ length: i }, (z, T) => Array.from({ length: r }, (D, K) => K === 0 || T === 0 || K === r - 1 || T === i - 1 ? "#" : ".")), a = (z, T) => {
      const D = o[z[1]];
      D && (D[z[0]] = T);
    }, c = (z) => {
      var _a3, _b3;
      return (_b3 = (_a3 = o[z[1]]) == null ? void 0 : _a3[z[0]]) != null ? _b3 : "#";
    }, l = (z) => z[0] >= 1 && z[1] >= 1 && z[0] <= r - 2 && z[1] <= i - 2;
    if (!s) {
      const z = n.randint(5, r - 6), T = n.randint(2, i - 3), D = n.randint(1, 2);
      for (let K = 1; K <= i - 2; K++) for (let F = 1; F <= r - 2; F++) (F - z) ** 2 + (K - T) ** 2 * 1.5 <= D * D + n.random() * 1.6 && a([F, K], "~");
      for (let K = 1; K <= i - 2; K++) for (let F = 1; F <= r - 2; F++) {
        const H = F <= 1 || F >= r - 2 || K <= 1 || K >= i - 2;
        c([F, K]) === "." && n.random() < (H ? 0.34 : 0.1) && a([F, K], "T");
      }
    }
    const d = [1, n.randint(2, i - 3)], h = n.randint(2, i - 3), p = [r - 1, h], f = [r - 2, h];
    a(p, "G");
    const m = [d], k = 2 + n.randint(0, 1);
    for (let z = 1; z <= k; z++) m.push([Math.max(2, Math.min(r - 3, Math.round(1 + (r - 3) * z / (k + 1)) + n.randint(-1, 1))), n.randint(2, i - 3)]);
    m.push(f);
    const g = /* @__PURE__ */ new Set(), b = (z) => {
      l(z) && (a(z, ","), g.add(Ce(z)));
    };
    for (let z = 0; z + 1 < m.length; z++) {
      const T = m[z], D = m[z + 1], F = n.random() < 0.5 ? [D[0], T[1]] : [T[0], D[1]];
      for (const [H, he] of [[T, F], [F, D]]) {
        const ve = Math.sign(he[0] - H[0]), $e = Math.sign(he[1] - H[1]);
        for (let W = H; b(W), !ot(W, he); W = [W[0] + ve, W[1] + $e]) ;
      }
    }
    const $ = (() => {
      const z = /* @__PURE__ */ new Map();
      for (const T of g) {
        const [D, K] = T.split(",").map(Number);
        for (const F of Ky([D, K])) l(F) && !g.has(Ce(F)) && !ot(F, d) && z.set(Ce(F), F);
      }
      return [...z.values()].filter((T) => In(T, d) >= 2 && In(T, f) >= 2);
    })(), S = [], _ = (z, T) => {
      const D = $.filter((K) => z(K) && S.every((F) => In(K, F) >= T));
      return D.length === 0 ? null : n.choice(D);
    }, w = (z) => {
      var _a3, _b3, _c2;
      return (_c2 = (_b3 = (_a3 = _(z, 3)) != null ? _a3 : _(z, 2)) != null ? _b3 : _(() => true, 2)) != null ? _c2 : _(() => true, 1);
    }, A = w((z) => z[0] <= 5), j = w((z) => z[0] >= r - 5);
    if (!A || !j) return null;
    S.push(A, j);
    const O = [];
    for (let z = 0; z < e; z++) {
      const T = 5 + Math.floor((r - 10) * z / Math.max(1, e)), D = 5 + Math.ceil((r - 10) * (z + 1) / Math.max(1, e)), K = w((F) => F[0] >= T && F[0] <= D);
      if (!K) return null;
      S.push(K), O.push(K);
    }
    for (const z of [A, j, ...O]) c(z) !== "." && a(z, ".");
    a(A, "N"), a(j, "B"), a(d, "@");
    const R = o.map((z) => z.join("")), y = [A, j, ...O];
    return y.every((z) => On(R, d, z, y)) && On(R, d, p, y, true) ? { rows: R, start: d, npc: A, foes: O, boss: j, gate: p } : null;
  }
  function Wy(t) {
    const e = El, s = Al, n = Array.from({ length: s }, (l, d) => Array.from({ length: e }, (h, p) => p === 0 || d === 0 || p === e - 1 || d === s - 1 ? "#" : ".")), r = [1, 5], i = [e - 1, 5], o = [3, 3], a = [e - 4, 3], c = Array.from({ length: t }, (l, d) => [4 + d * 2, 7]);
    return n[5][e - 1] = "G", n[3][3] = "N", n[3][e - 4] = "B", n[5][1] = "@", { rows: n.map((l) => l.join("")), start: r, npc: o, foes: c, boss: a, gate: i };
  }
  const Tl = 200, Il = 400, Ml = 800, Ol = 10, ii = Et([L().int().min(0).max(99), L().int().min(0).max(99)]), oi = (t) => L().int().min(10).max(5e3).default(t), Hy = U({ id: P, name: C, at: ii, lines: N(C).default([]), quest: J().default(false), portrait: P.optional() }), Vy = U({ id: P, name: C, at: ii, hp: oi(Tl), items: N(P).default([]), sprite: P.optional() }), Yy = U({ id: P, name: C, at: ii, hp: oi(Il), sprite: P.optional() }), Jy = U({ id: P, unit: P, name: C, map: N(x().min(1).regex(/^[#.,T~@NBG]+$/, "map characters are # . , T ~ @ N B G")).min(3).max(40), npcs: N(Hy).default([]), foes: N(Vy).default([]), boss: Yy }), Qy = U({ hero: U({ name: C }).optional(), story: U({ intro: N(C).default([]), outro: N(C).default([]) }).default({ intro: [], outro: [] }), tileset: P.optional(), sprites: U({ hero: P.optional(), npc: P.optional(), foe: P.optional(), boss: P.optional() }).optional(), areas: N(Jy).default([]), finalBoss: U({ name: C.optional(), hp: oi(Ml), size: L().int().min(4).max(20).default(Ol) }).optional() });
  function Xy(t) {
    var _a3, _b3;
    for (let e = 0; e < t.length; e++) for (let s = 0; s < ((_b3 = (_a3 = t[e]) == null ? void 0 : _a3.length) != null ? _b3 : 0); s++) if (js(Jt(t, [s, e]))) return [s, e];
    return [0, 0];
  }
  function Nl(t) {
    var _a3;
    const e = _l(t.map);
    return { id: t.id, unitId: t.unit, nameKey: t.name, rows: [...t.map], start: (_a3 = e.start) != null ? _a3 : Xy(t.map), gate: e.gate, npcs: t.npcs.map((s) => ({ id: s.id, nameKey: s.name, at: s.at, lines: [...s.lines], quest: s.quest, ...s.portrait ? { portrait: s.portrait } : {} })), foes: t.foes.map((s, n) => ({ id: s.id, nameKey: s.name, at: s.at, hp: s.hp, items: [...s.items], n: n + 1, ...s.sprite ? { sprite: s.sprite } : {} })), boss: { id: t.boss.id, nameKey: t.boss.name, at: t.boss.at, hp: t.boss.hp, ...t.boss.sprite ? { sprite: t.boss.sprite } : {} }, auto: false };
  }
  function ai(t, e) {
    const s = new Set(cn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective)).map((n) => n.id);
  }
  const e0 = 4;
  function t0(t, e) {
    const s = cn(t, e), n = Math.max(1, Math.min(e0, s.length)), r = Array.from({ length: n }, () => []);
    s.forEach((o, a) => {
      const c = r[a % n];
      for (const l of t.items) l.objective === o.id && c.push(l.id);
    });
    const i = qy("".concat(t.id, ":").concat(e), n);
    return { id: e, unitId: e, rows: i.rows, start: i.start, gate: i.gate, npcs: [{ id: "n-".concat(e), at: i.npc, lines: [], quest: true }], foes: i.foes.map((o, a) => {
      var _a3;
      return { id: "f-".concat(e, "-").concat(a + 1), at: o, hp: Tl, items: (_a3 = r[a]) != null ? _a3 : [], n: a + 1 };
    }), boss: { id: "b-".concat(e), at: i.boss, hp: Il }, auto: true };
  }
  function Pl(t, e) {
    var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j;
    const s = new Set(t.units.map((c) => c.id)), n = ((_a3 = e == null ? void 0 : e.areas) != null ? _a3 : []).filter((c) => s.has(c.unit)).map(Nl), r = new Set(n.map((c) => c.unitId)), i = At(t.units), o = /* @__PURE__ */ new Map();
    for (const c of n) o.set(c.unitId, [...(_b3 = o.get(c.unitId)) != null ? _b3 : [], c]);
    const a = [];
    for (const c of i) o.has(c) ? a.push(...o.get(c)) : r.has(c) || a.push(t0(t, c));
    return { areas: a, ...(e == null ? void 0 : e.hero) ? { heroNameKey: e.hero.name } : {}, intro: (_c2 = e == null ? void 0 : e.story.intro) != null ? _c2 : [], outro: (_d2 = e == null ? void 0 : e.story.outro) != null ? _d2 : [], finalBoss: { ...((_e2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _e2.name) ? { nameKey: e.finalBoss.name } : {}, hp: (_g2 = (_f2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _f2.hp) != null ? _g2 : Ml, size: (_i2 = (_h2 = e == null ? void 0 : e.finalBoss) == null ? void 0 : _h2.size) != null ? _i2 : Ol }, ...(e == null ? void 0 : e.tileset) ? { tileset: e.tileset } : {}, sprites: (_j = e == null ? void 0 : e.sprites) != null ? _j : {}, authored: e !== void 0 };
  }
  const s0 = ["RPG_AREA_UNIT_MISSING", "RPG_UNIT_NO_AREA", "RPG_MAP_RAGGED", "RPG_MAP_NO_START", "RPG_MAP_UNREACHABLE", "RPG_SPOT_BLOCKED", "RPG_NO_QUEST_GIVER", "RPG_FOE_ITEM_MISSING", "RPG_FOE_NO_ITEMS", "RPG_DIALOGUE_EMPTY", "RPG_QUEST_UNWINNABLE"], Rl = ["RPG_FOE_ITEM_OTHER_UNIT", "RPG_NO_STORY"];
  function n0(t) {
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
  function r0(t) {
    var _a3;
    const e = [];
    t.tileset && e.push({ path: "tileset", id: t.tileset });
    for (const s of ["hero", "npc", "foe", "boss"]) ((_a3 = t.sprites) == null ? void 0 : _a3[s]) && e.push({ path: "sprites.".concat(s), id: t.sprites[s] });
    return t.areas.forEach((s, n) => {
      s.npcs.forEach((r, i) => r.portrait && e.push({ path: "areas[".concat(n, "].npcs[").concat(i, "].portrait"), id: r.portrait })), s.foes.forEach((r, i) => r.sprite && e.push({ path: "areas[".concat(n, "].foes[").concat(i, "].sprite"), id: r.sprite })), s.boss.sprite && e.push({ path: "areas[".concat(n, "].boss.sprite"), id: s.boss.sprite });
    }), e;
  }
  function i0(t, e) {
    const s = [], n = new Set(e.units.map((i) => i.id)), r = new Set(e.items.map((i) => i.id));
    return t.areas.forEach((i, o) => {
      n.has(i.unit) || s.push({ code: "UNKNOWN_UNIT", path: "areas[".concat(o, "].unit"), message: 'the area "'.concat(i.id, '" names the unit "').concat(i.unit, '", which does not exist') }), i.foes.forEach((a, c) => a.items.forEach((l, d) => !r.has(l) && s.push({ code: "UNKNOWN_ITEM", path: "areas[".concat(o, "].foes[").concat(c, "].items[").concat(d, "]"), message: 'the foe "'.concat(a.id, '" asks the item "').concat(l, '", which does not exist') })));
    }), s;
  }
  function Dl(t, e, s, n) {
    const r = s.pack, i = r.units.some((d) => d.id === t.unitId), o = new Set(i ? ai(r, t.unitId) : []), a = _l(t.rows);
    a.ragged && n("RPG_MAP_RAGGED", "".concat(e, ".map"), 'the rows of the map of "'.concat(t.id, '" have different widths (').concat([...new Set(t.rows.map((d) => d.length))].join(", "), ")")), a.start || n("RPG_MAP_NO_START", "".concat(e, ".map"), 'the map of "'.concat(t.id, '" has no start tile "@"'));
    const c = [...t.npcs.map((d, h) => ({ at: d.at, path: "".concat(e, ".npcs[").concat(h, "].at"), label: 'the person "'.concat(d.id, '"') })), ...t.foes.map((d, h) => ({ at: d.at, path: "".concat(e, ".foes[").concat(h, "].at"), label: 'the foe "'.concat(d.id, '"') })), { at: t.boss.at, path: "".concat(e, ".boss.at"), label: 'the boss "'.concat(t.boss.id, '"') }], l = /* @__PURE__ */ new Set();
    if (c.forEach((d, h) => {
      const p = Jt(t.rows, d.at);
      p === void 0 ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands at ").concat(d.at[0], ",").concat(d.at[1], ", outside the map")), l.add(h)) : !js(p, true) || p === "G" ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands on ").concat(p === "#" ? "a wall" : p === "T" ? "a tree" : p === "~" ? "water" : "the gate", " at ").concat(d.at[0], ",").concat(d.at[1])), l.add(h)) : a.start && ot(d.at, a.start) ? (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " stands on the hero's start tile")), l.add(h)) : c.some((f, m) => m < h && ot(f.at, d.at)) && (n("RPG_SPOT_BLOCKED", d.path, "".concat(d.label, " shares the tile ").concat(d.at[0], ",").concat(d.at[1], " with someone else")), l.add(h));
    }), a.start) {
      const d = c.map((h) => h.at);
      c.forEach((h, p) => {
        l.has(p) || On(t.rows, a.start, h.at, d) || n("RPG_MAP_UNREACHABLE", h.path, "".concat(h.label, " cannot be reached from the start tile on walkable tiles"));
      }), a.gate && !On(t.rows, a.start, a.gate, d, true) && n("RPG_MAP_UNREACHABLE", "".concat(e, ".map"), 'the gate of "'.concat(t.id, '" cannot be reached from the start tile on walkable tiles'));
    }
    t.npcs.some((d) => d.quest) || n("RPG_NO_QUEST_GIVER", "".concat(e, ".npcs"), 'the area "'.concat(t.id, '" has no person with "quest": true, so nobody offers the quest')), t.npcs.forEach((d, h) => {
      !t.auto && d.lines.length === 0 && n("RPG_DIALOGUE_EMPTY", "".concat(e, ".npcs[").concat(h, "].lines"), '"'.concat(d.id, '" has nothing to say (no lines)'));
    }), t.foes.forEach((d, h) => {
      const p = "".concat(e, ".foes[").concat(h, "]");
      d.items.length === 0 && n("RPG_FOE_NO_ITEMS", "".concat(p, ".items"), 'the foe "'.concat(d.id, '" has no items: its battle has no questions'));
      const f = d.items.filter((m) => r.items.some((k) => k.id === m));
      d.items.forEach((m, k) => {
        r.items.some((g) => g.id === m) ? i && !o.has(m) && n("RPG_FOE_ITEM_OTHER_UNIT", "".concat(p, ".items[").concat(k, "]"), 'the item "'.concat(m, '" of the foe "').concat(d.id, '" belongs to another unit than "').concat(t.unitId, '"'), "warning") : n("RPG_FOE_ITEM_MISSING", "".concat(p, ".items[").concat(k, "]"), 'the foe "'.concat(d.id, '" asks the item "').concat(m, '", which does not exist'));
      }), f.length === 0 && n("RPG_QUEST_UNWINNABLE", p, 'the foe "'.concat(d.id, '" cannot be beaten: none of its items can be asked'));
    }), i && o.size === 0 && n("RPG_QUEST_UNWINNABLE", "".concat(e, ".boss"), 'the boss "'.concat(t.boss.id, '" cannot be beaten: the unit "').concat(t.unitId, '" has no items to ask'));
  }
  function o0(t, e) {
    const s = [], n = (o, a, c, l) => s.push({ code: o, path: a, message: c, ...l ? { severity: l } : {} }), r = e.pack;
    if (t === void 0 || t.areas.length === 0) Pl(r, t).areas.forEach((a, c) => Dl(a, "areas[".concat(c, "]"), e, n));
    else {
      t.areas.forEach((a, c) => Dl(Nl(a), "areas[".concat(c, "]"), e, n));
      const o = new Set(t.areas.map((a) => a.unit));
      t.areas.forEach((a, c) => {
        r.units.some((l) => l.id === a.unit) || n("RPG_AREA_UNIT_MISSING", "areas[".concat(c, "].unit"), 'the area "'.concat(a.id, '" names the unit "').concat(a.unit, '", which does not exist'));
      });
      for (const a of r.units) o.has(a.id) || n("RPG_UNIT_NO_AREA", "areas", 'the unit "'.concat(a.id, '" has no area, so its quest is made automatically'));
    }
    const i = t !== void 0 && (t.tileset !== void 0 || t.sprites !== void 0) && t.areas.length === 0 && !t.hero && !t.finalBoss;
    return t !== void 0 && !i && t.story.intro.length === 0 && n("RPG_NO_STORY", "story.intro", "the section has no frame story (no intro lines)", "warning"), r.items.length === 0 && n("RPG_QUEST_UNWINNABLE", "finalBoss", "the final boss cannot be beaten: the course has no items to ask"), s;
  }
  const a0 = { id: "rpg", theme: "pixel", requiresSection: false, schema: Qy, textRefs: n0, assetRefs: r0, validate: i0, lint: o0, codes: [...s0, ...Rl], warnings: Rl }, Nn = new Map([ry, _y, a0, Cy, Pw].map((t) => [t.id, t]));
  [...Nn.keys()];
  const c0 = (t, e) => t.shells.config[e], l0 = (t) => t.reduce((e, s) => typeof s == "number" ? "".concat(e, "[").concat(s, "]") : e ? "".concat(e, ".").concat(String(s)) : String(s), "");
  function d0(t, e) {
    const s = Nn.get(e), n = c0(t, e);
    if (!s || n === void 0) return { present: false };
    const r = s.schema.safeParse(n);
    return r.success ? { present: true, ok: true, data: r.data } : { present: true, ok: false, issues: r.error.issues.map((i) => ({ path: l0(i.path), message: i.message })) };
  }
  function u0(t, e) {
    const s = d0(t, e);
    return s.present && s.ok ? s.data : void 0;
  }
  [...[...Nn.values()].flatMap((t) => t.codes)], [...[...Nn.values()].flatMap((t) => {
    var _a3;
    return (_a3 = t.warnings) != null ? _a3 : [];
  })];
  const ci = (t, e) => {
    var _a3, _b3;
    const s = t.filter((n) => !e.includes(n.id));
    return (_b3 = (_a3 = s.find((n) => n.why)) != null ? _a3 : s[0]) == null ? void 0 : _b3.id;
  };
  function h0(t) {
    var _a3, _b3, _c2;
    switch (t.kind) {
      case "mcq": {
        const e = t;
        return ci(e.options, [e.answer]);
      }
      case "listening": {
        const e = t;
        return e.mode === "choose" ? ci((_a3 = e.options) != null ? _a3 : [], [e.answer]) : "zzzzzz";
      }
      case "true-false":
        return !t.answer;
      case "multi-select": {
        const e = t, s = ci(e.options, e.answers);
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
  function p0(t) {
    const e = (s) => {
      const n = window.EDU_GAME_DATA, r = n == null ? void 0 : n.pack.items.find((o) => o.id === s);
      if (!n || !r) return;
      const i = t().lang || n.defaultLang;
      return { item: r, ctx: Kt({ pack: n.pack, text: qt(n.catalogs, i, n.pack.targetLang) }) };
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
      return n ? jb(n.item, n.ctx) : void 0;
    }, wrong(s) {
      const n = e(s);
      return n ? h0(n.item) : void 0;
    } };
  }
  function u(t, e = {}, ...s) {
    const n = document.createElement(t);
    for (const [r, i] of Object.entries(e)) i == null || i === false || (typeof i == "function" ? n.addEventListener(r.replace(/^on/, "").toLowerCase(), i) : r === "class" ? n.className = String(i) : r === "testid" ? n.setAttribute("data-testid", String(i)) : r === "text" ? n.textContent = String(i) : n.setAttribute(r, i === true ? "" : String(i)));
    return Ll(n, s), n;
  }
  function Ll(t, e) {
    for (const s of e) s == null || s === false || (Array.isArray(s) ? Ll(t, s) : t.appendChild(typeof s == "string" || typeof s == "number" ? document.createTextNode(String(s)) : s));
  }
  function xs(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function I(t, e, s, n = {}) {
    return u("button", { type: "button", testid: t, ...n, onclick: s }, e);
  }
  function li(t) {
    return t.ctrlKey || t.metaKey || t.altKey ? -1 : /^[1-9]$/.test(t.key) ? Number(t.key) - 1 : -1;
  }
  function Es(t) {
    const e = t;
    return !e || !e.tagName ? false : e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.isContentEditable;
  }
  function As(t, e, s = 700) {
    t.classList.remove(e), t.offsetWidth, t.classList.add(e), window.setTimeout(() => t.classList.remove(e), s);
  }
  const f0 = "http://www.w3.org/2000/svg";
  function ue(t, e = {}, ...s) {
    const n = document.createElementNS(f0, t);
    for (const [r, i] of Object.entries(e)) i !== void 0 && n.setAttribute(r === "testid" ? "data-testid" : r, String(i));
    for (const r of s) n.appendChild(r);
    return n;
  }
  const m0 = { "title.tagline": "Chalkboard quiz arena", start: "Start", continue: "Continue", language: "Language", timer: "Timed questions", "timer.hint": "About {s} seconds per question. Typing questions are never timed.", sound: "Sounds", reduceAudio: "Reduce audio", "reduceAudio.hint": "No music, and quieter sound effects.", speak: "Speak", "speak.setting": "Speak your answers", "speak.privacy.web": "Uses your browser speech recognition; in Chrome and Edge the audio goes to the browser vendor. Typing always works.", "speak.privacy.local": "Speech is recognised on this computer; nothing is sent away. Typing always works.", "speak.listening": "Listening. Press the button again or Escape to stop.", "speak.thinking": "Working out what you said.", "speak.heard": "Heard: {text}. You can edit it before you check.", "speak.err.denied": "The microphone is not allowed. Type your answer instead.", "speak.err.no-speech": "Nothing was heard. Try again or type your answer.", "speak.err.unavailable": "Speech recognition is not available right now. Type your answer instead.", "speak.err.failed": "Could not recognise that. Try again or type your answer.", export: "Export progress", import: "Import progress", reset: "Reset progress", "reset.confirm": "Erase all saved progress for this course?", "reset.yes": "Yes, erase", "reset.no": "Keep it", "reset.done": "Progress erased.", "import.ok": "Progress imported.", "import.bad": "This file is not progress for this course: {why}", "export.done": "Progress file saved.", "storage.off": "Saving is off in this browser: progress is kept only until you close the page. Use Export to keep it.", "map.title": "Choose a unit", "map.stars": "{n} of {total} stars", "map.requires": "Needs: {units}", "map.locked": "Locked", "map.unitStars": "{n} of 3 stars", "map.items": "{n} questions", "map.boss": "Boss round", "map.boss.locked": "Master every unit (2 stars) to face the boss.", "map.boss.ready": "Questions from every unit, harder.", "map.review": "Review misses ({n})", "map.verbs": "Verb drill ({n} due)", menu: "Title screen", round: "Round {n}", question: "Question {i} of {n}", retry: "Second try", leave: "Leave round", score: "Score", combo: "Combo", time: "Time", hint: "Hint", submit: "Check", next: "Next", results: "See results", flip: "Show the answer", "selfcheck.hint": "Compare what you wrote or said with the model answer, then grade yourself. The program does not check it.", "grade.again": "Again", "grade.hard": "Hard", "grade.good": "Good", "grade.easy": "Easy", "grade.ask": "How well did you know it?", "answer.type": "Your answer", "gap.n": "Gap {n}", letters: "Special letters", play: "Play the sound", "play.again": "Play again", "audio.fail": "The sound could not be played.", transcript: "It says:", "order.up": "Move {item} up", "order.down": "Move {item} down", "order.first": "earliest", "order.last": "latest", "sort.assign": "{item}: put in {group}", "pairs.pick": "Pick one on each side to pair them. Pick a paired one again to undo.", "multi.hint": "Select all that apply, then check.", "cross.across": "Across", "cross.down": "Down", "cross.word": "Word {n}", "cross.cell": "Row {r}, column {c}", "ws.found": "Found {n} of {total}", "ws.pick": "Pick the first and the last letter of a word.", "ws.done": "Done", "hotspot.pick": "Pick the right place on the picture.", picture: "Picture", "verdict.correct": "Correct!", "verdict.partial": "Nearly there", "verdict.wrong": "Not quite", "verdict.timeout": "Time is up", "praise.1": "Spot on!", "praise.2": "Nicely done!", "praise.3": "You nailed it!", "praise.4": "Right!", "praise.5": "Great work!", "fb.why": "Why that is not it", "fb.explain": "The idea", "fb.answer": "The answer", "fb.dyk": "Did you know?", "fb.typo": "Accepted, but mind the spelling: {a}", "fb.accents": "Accepted, but mind the accents: {a}", "fb.accents.strict": "Almost! Check the accents: {a}", "fb.note.translit": "Accepted. The umlaut is written ä / ö / ü and ß; ae / oe / ue / ss is the keyboard spelling: {a}", "fb.note.caps": "Accepted. German nouns start with a capital letter: {a}", "fb.note.umlaut": "Almost: check the umlaut: {a}", "fb.invalid": "No answer was given.", "fb.true": "True", "fb.false": "False", "fb.missed": "You missed: {a}", "fb.matched": "Right pairs: {n} of {total}", "fb.detail.order": "In the right place: {n} of {total}", "fb.detail.sort": "Sorted right: {n} of {total}", "fb.detail.gaps": "Gaps right: {n} of {total}", "fb.detail.words": "Words right: {n} of {total}", "fb.detail.forms": "Forms right: {n} of {total}", "conj.tense.praesens": "Present", "conj.tense.perfekt": "Perfect", "conj.tense.praeteritum": "Simple past", "conj.tense.futur1": "Future", "conj.tense.imperativ": "Imperative", "conj.tense.konjunktiv2": "Subjunctive II", "conj.tense.passiv-praesens": "Passive, present", "conj.tense.passiv-praeteritum": "Passive, simple past", "conj.tense.perfekt-passiv": "Passive, perfect", "conj.tense.konjunktiv2-vergangenheit": "Subjunctive II, past", "conj.tense.konjunktiv1": "Subjunctive I", "conj.tense.konjunktiv1-vergangenheit": "Subjunctive I, past", "summary.title": "Round complete", "summary.accuracy": "{n}% right first time", "summary.score": "Score {n}", "summary.combo": "Best combo {n}", "summary.unlocked": "Unlocked: {units}", "summary.bossLocked": "The boss round is open!", "summary.again": "Play the round again", "summary.back": "Back to the map", "summary.finish": "Finish the course", "summary.needStars": "Two stars unlock the next units.", "summary.bossFail": "The boss held out. Review and try again.", "summary.perfect": "Perfect round!", review: "Review misses", "review.title": "Review misses", "review.empty": "Nothing to review. Everything you missed is already learned.", "review.practice": "Practise these", "review.back": "Back to the map", "review.answer": "The answer", "end.title": "Course complete!", "end.sub": "You mastered every unit and beat the boss.", "end.stars": "Stars", "end.score": "Total score", "end.accuracy": "Answered right first time: {n}%", "end.again": "Play again", "end.title.screen": "Back to the title", loading: "Loading...", error: "The game could not start.", "a11y.skip": "Skip to the question", stars: "{n} of 3 stars", burst: "Combo x{n}!", "start.choose": "Choose how to play", "mode.quiz-arena.name": "Quiz arena", "mode.quiz-arena.blurb": "Timed rounds of mixed questions", "mode.encyclopedia.name": "Encyclopedia", "mode.encyclopedia.blurb": "Read articles and explore the topic", "mode.mindmaze.name": "MindMaze castle", "mode.mindmaze.blurb": "Open the doors of a castle with right answers", "mode.rpg.name": "RPG quest", "mode.rpg.blurb": "A pixel adventure powered by your answers", "mode.roleplay.name": "Role-play", "mode.roleplay.blurb": "Talk your way through everyday dialogues", "mode.detective.name": "Detective", "mode.detective.blurb": "Solve cases from the clues you learned", "question.lead": "Question", "review.none": "Nothing to review yet.", "class.assignment": "Assignment from your teacher", "class.target": "Reach {n} stars in: {units}", "class.allUnits": "all units", "class.due": "Due: {date}", "class.yourName": "Your name", "class.send": "Send to my teacher", "class.sent": "Result file saved. Send it to your teacher.", "class.needName": "Type your name first.", "class.assigned": "Assigned", "reader.title": "Reader", "reader.nav": "Reader", "reader.open": "Open the reader", "reader.continue": "Continue reading", "reader.toc": "Chapters", "reader.chapter": "Chapter {n}", "reader.progress": "Chapter {n} of {total}", "reader.chapterRead": "read", "reader.prev": "Previous chapter", "reader.next": "Next chapter", "reader.hint": "Tap an underlined word to see what it means. The left and right arrow keys change chapter.", "reader.read": "You have read this chapter.", "reader.last": "That was the last chapter.", "reader.practice": "Practise this text", "reader.empty": "This course has no readings.", "reader.leave": "Back to the text", "gloss.panel": "Words in this text", "gloss.deck": "In my deck", "gloss.deck.for": 'Keep "{term}" in my vocabulary deck', "gloss.close": "Close the explanation", "gloss.pos.n": "noun", "gloss.pos.v": "verb", "gloss.pos.adj": "adjective", "gloss.pos.adv": "adverb", "gloss.pos.prep": "preposition", "gloss.pos.conj": "conjunction", "gloss.pos.phrase": "phrase", "passage.show": "Read the text", "passage.hide": "Hide the text", "passage.title": "The text" }, di = { hr: { "title.tagline": "Kviz na školskoj ploči", start: "Započni", continue: "Nastavi", language: "Jezik", timer: "Pitanja na vrijeme", "timer.hint": "Oko {s} sekundi po pitanju. Pitanja s upisivanjem nikad nisu na vrijeme.", sound: "Zvukovi", reduceAudio: "Smanji zvuk", "reduceAudio.hint": "Bez glazbe, a zvučni efekti su tiši.", speak: "Govori", "speak.setting": "Govori odgovore", "speak.privacy.web": "Koristi prepoznavanje govora u pregledniku; u Chromeu i Edgeu zvuk ide pružatelju preglednika. Upisivanje uvijek radi.", "speak.privacy.local": "Govor se prepoznaje na ovom računalu; ništa se ne šalje dalje. Upisivanje uvijek radi.", "speak.listening": "Slušam. Ponovo pritisni gumb ili Escape za kraj.", "speak.thinking": "Provjeravam što si rekao.", "speak.heard": "Čuo sam: {text}. Možeš to urediti prije provjere.", "speak.err.denied": "Mikrofon nije dopušten. Umjesto toga upiši odgovor.", "speak.err.no-speech": "Ništa se nije čulo. Pokušaj ponovo ili upiši odgovor.", "speak.err.unavailable": "Prepoznavanje govora trenutno nije dostupno. Umjesto toga upiši odgovor.", "speak.err.failed": "Nisam to prepoznao. Pokušaj ponovo ili upiši odgovor.", export: "Izvezi napredak", import: "Uvezi napredak", reset: "Obriši napredak", "reset.confirm": "Obrisati sav spremljeni napredak za ovaj tečaj?", "reset.yes": "Da, obriši", "reset.no": "Zadrži", "reset.done": "Napredak je obrisan.", "import.ok": "Napredak je uvezen.", "import.bad": "Ova datoteka nije napredak za ovaj tečaj: {why}", "export.done": "Datoteka napretka je spremljena.", "storage.off": "Spremanje je isključeno u ovom pregledniku: napredak traje dok ne zatvoriš stranicu. Koristi izvoz da ga sačuvaš.", "map.title": "Odaberi cjelinu", "map.stars": "{n} od {total} zvjezdica", "map.requires": "Treba: {units}", "map.locked": "Zaključano", "map.unitStars": "{n} od 3 zvjezdice", "map.items": "{n} pitanja", "map.boss": "Završni izazov", "map.boss.locked": "Savladaj svaku cjelinu (2 zvjezdice) da bi došao do izazova.", "map.boss.ready": "Pitanja iz svih cjelina, teža.", "map.review": "Ponovi pogreške ({n})", "map.verbs": "Vježba glagola ({n} za ponoviti)", menu: "Početni zaslon", round: "Runda {n}", question: "Pitanje {i} od {n}", retry: "Drugi pokušaj", leave: "Napusti rundu", score: "Bodovi", combo: "Niz", time: "Vrijeme", hint: "Pomoć", submit: "Provjeri", next: "Dalje", results: "Prikaži rezultat", flip: "Prikaži odgovor", "selfcheck.hint": "Usporedi što si napisao ili rekao s uzornim odgovorom, pa se sam ocijeni. Program to ne provjerava.", "grade.again": "Opet", "grade.hard": "Teško", "grade.good": "Dobro", "grade.easy": "Lako", "grade.ask": "Koliko si dobro znao/la?", "answer.type": "Tvoj odgovor", "gap.n": "Praznina {n}", letters: "Posebna slova", play: "Pusti zvuk", "play.again": "Pusti ponovno", "audio.fail": "Zvuk se nije mogao pustiti.", transcript: "Piše:", "order.up": "Pomakni {item} gore", "order.down": "Pomakni {item} dolje", "order.first": "najranije", "order.last": "najkasnije", "sort.assign": "{item}: stavi u {group}", "pairs.pick": "Odaberi po jedno sa svake strane da ih spojiš. Ponovno odaberi spojeno da poništiš.", "multi.hint": "Odaberi sve točne odgovore, pa provjeri.", "cross.across": "Vodoravno", "cross.down": "Okomito", "cross.word": "Riječ {n}", "cross.cell": "Redak {r}, stupac {c}", "ws.found": "Pronađeno {n} od {total}", "ws.pick": "Odaberi prvo i zadnje slovo riječi.", "ws.done": "Gotovo", "hotspot.pick": "Odaberi pravo mjesto na slici.", picture: "Slika", "verdict.correct": "Točno!", "verdict.partial": "Skoro", "verdict.wrong": "Nije baš", "verdict.timeout": "Vrijeme je isteklo", "praise.1": "U sridu!", "praise.2": "Lijepo!", "praise.3": "Savršeno!", "praise.4": "Točno tako!", "praise.5": "Odlično!", "fb.why": "Zašto to nije to", "fb.explain": "Ideja", "fb.answer": "Odgovor", "fb.dyk": "Jesi li znao/la?", "fb.typo": "Prihvaćeno, ali pazi na pravopis: {a}", "fb.accents": "Prihvaćeno, ali pazi na kvačice: {a}", "fb.accents.strict": "Skoro! Provjeri kvačice: {a}", "fb.note.translit": "Prihvaćeno. Umlaut se piše ä / ö / ü i ß; ae / oe / ue / ss je zapis za tipkovnicu: {a}", "fb.note.caps": "Prihvaćeno. Njemačke imenice pišu se velikim početnim slovom: {a}", "fb.note.umlaut": "Skoro: provjeri umlaut: {a}", "fb.invalid": "Nije dan odgovor.", "fb.true": "Točno", "fb.false": "Netočno", "fb.missed": "Propustio/la si: {a}", "fb.matched": "Točni parovi: {n} od {total}", "fb.detail.order": "Na pravom mjestu: {n} od {total}", "fb.detail.sort": "Točno razvrstano: {n} od {total}", "fb.detail.gaps": "Točne praznine: {n} od {total}", "fb.detail.words": "Točne riječi: {n} od {total}", "fb.detail.forms": "Točni oblici: {n} od {total}", "conj.tense.praesens": "Prezent", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Preterit", "conj.tense.futur1": "Futur I.", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II.", "conj.tense.passiv-praesens": "Pasiv, prezent", "conj.tense.passiv-praeteritum": "Pasiv, preterit", "conj.tense.perfekt-passiv": "Pasiv, perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II., prošlost", "conj.tense.konjunktiv1": "Konjunktiv I.", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I., prošlost", "summary.title": "Runda je gotova", "summary.accuracy": "{n}% točno iz prvog pokušaja", "summary.score": "Bodovi {n}", "summary.combo": "Najbolji niz {n}", "summary.unlocked": "Otključano: {units}", "summary.bossLocked": "Završni izazov je otvoren!", "summary.again": "Igraj rundu ponovno", "summary.back": "Natrag na kartu", "summary.finish": "Završi tečaj", "summary.needStars": "Dvije zvjezdice otključavaju sljedeće cjeline.", "summary.bossFail": "Izazov je izdržao. Ponovi pa pokušaj opet.", "summary.perfect": "Savršena runda!", review: "Ponovi pogreške", "review.title": "Ponavljanje pogrešaka", "review.empty": "Nema se što ponavljati. Sve što si pogriješio/la već znaš.", "review.practice": "Vježbaj ih", "review.back": "Natrag na kartu", "review.answer": "Odgovor", "end.title": "Tečaj je završen!", "end.sub": "Savladao/la si svaku cjelinu i pobijedio/la izazov.", "end.stars": "Zvjezdice", "end.score": "Ukupni bodovi", "end.accuracy": "Točno iz prvog pokušaja: {n}%", "end.again": "Igraj ponovno", "end.title.screen": "Natrag na početak", loading: "Učitavanje...", error: "Igra se nije mogla pokrenuti.", "a11y.skip": "Preskoči na pitanje", stars: "{n} od 3 zvjezdice", burst: "Niz x{n}!", "start.choose": "Odaberi način igranja", "mode.quiz-arena.name": "Kviz", "mode.quiz-arena.blurb": "Vremenski krugovi mješovitih pitanja", "mode.encyclopedia.name": "Enciklopedija", "mode.encyclopedia.blurb": "Čitaj članke i istraži temu", "mode.mindmaze.name": "Dvorac MindMaze", "mode.mindmaze.blurb": "Otvaraj vrata dvorca točnim odgovorima", "mode.rpg.name": "RPG pustolovina", "mode.rpg.blurb": "Pikselna pustolovina pokretana tvojim odgovorima", "mode.roleplay.name": "Igra uloga", "mode.roleplay.blurb": "Razgovaraj kroz svakodnevne dijaloge", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Riješi slučajeve na temelju naučenog", "question.lead": "Pitanje", "review.none": "Još nema ničega za ponavljanje.", "class.assignment": "Zadatak od učitelja", "class.target": "Dosegni {n} zvjezdice u: {units}", "class.allUnits": "svim cjelinama", "class.due": "Rok: {date}", "class.yourName": "Tvoje ime", "class.send": "Pošalji učitelju", "class.sent": "Datoteka s rezultatom je spremljena. Pošalji je učitelju.", "class.needName": "Prvo upiši svoje ime.", "class.assigned": "Zadano", "reader.title": "Čitanje", "reader.nav": "Čitanje", "reader.open": "Otvori čitanje", "reader.continue": "Nastavi čitati", "reader.toc": "Poglavlja", "reader.chapter": "Poglavlje {n}", "reader.progress": "Poglavlje {n} od {total}", "reader.chapterRead": "pročitano", "reader.prev": "Prethodno poglavlje", "reader.next": "Sljedeće poglavlje", "reader.hint": "Dodirni podcrtanu riječ da vidiš što znači. Lijeva i desna strelica mijenjaju poglavlje.", "reader.read": "Pročitao/la si ovo poglavlje.", "reader.last": "To je bilo posljednje poglavlje.", "reader.practice": "Vježbaj ovaj tekst", "reader.empty": "Ovaj tečaj nema tekstova za čitanje.", "reader.leave": "Natrag na tekst", "gloss.panel": "Riječi u ovom tekstu", "gloss.deck": "U mojem špilu", "gloss.deck.for": 'Zadrži "{term}" u mojem špilu rječnika', "gloss.close": "Zatvori objašnjenje", "gloss.pos.n": "imenica", "gloss.pos.v": "glagol", "gloss.pos.adj": "pridjev", "gloss.pos.adv": "prilog", "gloss.pos.prep": "prijedlog", "gloss.pos.conj": "veznik", "gloss.pos.phrase": "izraz", "passage.show": "Pročitaj tekst", "passage.hide": "Sakrij tekst", "passage.title": "Tekst" }, de: { "title.tagline": "Quiz an der Schultafel", start: "Starten", continue: "Weiter", language: "Sprache", timer: "Fragen mit Zeitlimit", "timer.hint": "Etwa {s} Sekunden pro Frage. Fragen zum Tippen haben nie ein Zeitlimit.", sound: "Töne", reduceAudio: "Ton reduzieren", "reduceAudio.hint": "Keine Musik und leisere Effekte.", speak: "Sprechen", "speak.setting": "Antworten sprechen", "speak.privacy.web": "Nutzt die Spracherkennung deines Browsers; in Chrome und Edge geht das Audio an den Browser-Hersteller. Tippen funktioniert immer.", "speak.privacy.local": "Die Sprache wird auf diesem Computer erkannt; nichts wird verschickt. Tippen funktioniert immer.", "speak.listening": "Ich höre zu. Drücke die Taste noch einmal oder Escape zum Beenden.", "speak.thinking": "Ich werte aus, was du gesagt hast.", "speak.heard": "Verstanden: {text}. Du kannst es vor dem Prüfen ändern.", "speak.err.denied": "Das Mikrofon ist nicht erlaubt. Tippe stattdessen deine Antwort.", "speak.err.no-speech": "Es war nichts zu hören. Versuche es noch einmal oder tippe deine Antwort.", "speak.err.unavailable": "Die Spracherkennung ist gerade nicht verfügbar. Tippe stattdessen deine Antwort.", "speak.err.failed": "Das konnte nicht erkannt werden. Versuche es noch einmal oder tippe deine Antwort.", export: "Fortschritt exportieren", import: "Fortschritt importieren", reset: "Fortschritt zurücksetzen", "reset.confirm": "Den gesamten gespeicherten Fortschritt für diesen Kurs löschen?", "reset.yes": "Ja, löschen", "reset.no": "Behalten", "reset.done": "Fortschritt gelöscht.", "import.ok": "Fortschritt importiert.", "import.bad": "Diese Datei ist kein Fortschritt für diesen Kurs: {why}", "export.done": "Fortschrittsdatei gespeichert.", "storage.off": "Speichern ist in diesem Browser aus: Der Fortschritt bleibt nur, bis du die Seite schließt. Nutze „Exportieren“, um ihn zu behalten.", "map.title": "Wähle eine Einheit", "map.stars": "{n} von {total} Sternen", "map.requires": "Benötigt: {units}", "map.locked": "Gesperrt", "map.unitStars": "{n} von 3 Sternen", "map.items": "{n} Fragen", "map.boss": "Endgegner-Runde", "map.boss.locked": "Meistere jede Einheit (2 Sterne), um dich dem Endgegner zu stellen.", "map.boss.ready": "Fragen aus allen Einheiten, schwieriger.", "map.review": "Fehler wiederholen ({n})", "map.verbs": "Verbtraining ({n} fällig)", menu: "Titelbildschirm", round: "Runde {n}", question: "Frage {i} von {n}", retry: "Zweiter Versuch", leave: "Runde verlassen", score: "Punkte", combo: "Serie", time: "Zeit", hint: "Tipp", submit: "Prüfen", next: "Weiter", results: "Ergebnis ansehen", flip: "Antwort zeigen", "selfcheck.hint": "Vergleiche, was du geschrieben oder gesagt hast, mit der Musterantwort und bewerte dich dann selbst. Das Programm prüft es nicht.", "grade.again": "Nochmal", "grade.hard": "Schwer", "grade.good": "Gut", "grade.easy": "Leicht", "grade.ask": "Wie gut wusstest du es?", "answer.type": "Deine Antwort", "gap.n": "Lücke {n}", letters: "Sonderzeichen", play: "Ton abspielen", "play.again": "Noch einmal abspielen", "audio.fail": "Der Ton konnte nicht abgespielt werden.", transcript: "Es heißt:", "order.up": "{item} nach oben", "order.down": "{item} nach unten", "order.first": "am frühesten", "order.last": "am spätesten", "sort.assign": "{item}: in „{group}“ legen", "pairs.pick": "Wähle auf jeder Seite einen Eintrag, um sie zu verbinden. Wähle ein verbundenes Paar noch einmal, um es zu lösen.", "multi.hint": "Wähle alles Zutreffende aus und prüfe dann.", "cross.across": "Waagerecht", "cross.down": "Senkrecht", "cross.word": "Wort {n}", "cross.cell": "Zeile {r}, Spalte {c}", "ws.found": "{n} von {total} gefunden", "ws.pick": "Wähle den ersten und den letzten Buchstaben eines Wortes.", "ws.done": "Fertig", "hotspot.pick": "Wähle die richtige Stelle auf dem Bild.", picture: "Bild", "verdict.correct": "Richtig!", "verdict.partial": "Fast geschafft", "verdict.wrong": "Nicht ganz", "verdict.timeout": "Die Zeit ist um", "praise.1": "Genau richtig!", "praise.2": "Gut gemacht!", "praise.3": "Perfekt gelöst!", "praise.4": "Stimmt!", "praise.5": "Super Leistung!", "fb.why": "Warum das nicht stimmt", "fb.explain": "Die Idee", "fb.answer": "Die Antwort", "fb.dyk": "Wusstest du schon?", "fb.typo": "Akzeptiert, aber achte auf die Schreibweise: {a}", "fb.accents": "Akzeptiert, aber achte auf die Akzente: {a}", "fb.accents.strict": "Fast! Prüfe die Akzente: {a}", "fb.note.translit": "Akzeptiert. Umlaute schreibt man ä / ö / ü und ß; ae / oe / ue / ss ist die Tastatur-Schreibweise: {a}", "fb.note.caps": "Akzeptiert. Deutsche Nomen schreibt man groß: {a}", "fb.note.umlaut": "Fast: Prüfe den Umlaut: {a}", "fb.invalid": "Es wurde keine Antwort gegeben.", "fb.true": "Richtig", "fb.false": "Falsch", "fb.missed": "Das hast du verpasst: {a}", "fb.matched": "Richtige Paare: {n} von {total}", "fb.detail.order": "An der richtigen Stelle: {n} von {total}", "fb.detail.sort": "Richtig sortiert: {n} von {total}", "fb.detail.gaps": "Richtige Lücken: {n} von {total}", "fb.detail.words": "Richtige Wörter: {n} von {total}", "fb.detail.forms": "Richtige Formen: {n} von {total}", "conj.tense.praesens": "Präsens", "conj.tense.perfekt": "Perfekt", "conj.tense.praeteritum": "Präteritum", "conj.tense.futur1": "Futur I", "conj.tense.imperativ": "Imperativ", "conj.tense.konjunktiv2": "Konjunktiv II", "conj.tense.passiv-praesens": "Passiv, Präsens", "conj.tense.passiv-praeteritum": "Passiv, Präteritum", "conj.tense.perfekt-passiv": "Passiv, Perfekt", "conj.tense.konjunktiv2-vergangenheit": "Konjunktiv II, Vergangenheit", "conj.tense.konjunktiv1": "Konjunktiv I", "conj.tense.konjunktiv1-vergangenheit": "Konjunktiv I, Vergangenheit", "summary.title": "Runde geschafft", "summary.accuracy": "{n} % gleich beim ersten Mal richtig", "summary.score": "Punkte: {n}", "summary.combo": "Beste Serie: {n}", "summary.unlocked": "Freigeschaltet: {units}", "summary.bossLocked": "Die Endgegner-Runde ist offen!", "summary.again": "Runde noch einmal spielen", "summary.back": "Zurück zur Karte", "summary.finish": "Kurs abschließen", "summary.needStars": "Zwei Sterne schalten die nächsten Einheiten frei.", "summary.bossFail": "Der Endgegner hat standgehalten. Wiederhole und versuche es noch einmal.", "summary.perfect": "Perfekte Runde!", review: "Fehler wiederholen", "review.title": "Fehler wiederholen", "review.empty": "Nichts zu wiederholen. Alles, was du verpasst hast, ist schon gelernt.", "review.practice": "Diese üben", "review.back": "Zurück zur Karte", "review.answer": "Die Antwort", "end.title": "Kurs abgeschlossen!", "end.sub": "Du hast jede Einheit gemeistert und den Endgegner besiegt.", "end.stars": "Sterne", "end.score": "Gesamtpunkte", "end.accuracy": "Gleich beim ersten Mal richtig: {n} %", "end.again": "Noch einmal spielen", "end.title.screen": "Zurück zum Titel", loading: "Lädt …", error: "Das Spiel konnte nicht starten.", "a11y.skip": "Zur Frage springen", stars: "{n} von 3 Sternen", burst: "Serie x{n}!", "start.choose": "Wähle, wie du spielen möchtest", "mode.quiz-arena.name": "Quiz-Arena", "mode.quiz-arena.blurb": "Runden mit gemischten Fragen auf Zeit", "mode.encyclopedia.name": "Enzyklopädie", "mode.encyclopedia.blurb": "Artikel lesen und das Thema erkunden", "mode.mindmaze.name": "MindMaze-Schloss", "mode.mindmaze.blurb": "Öffne die Türen eines Schlosses mit richtigen Antworten", "mode.rpg.name": "Rollenspiel-Abenteuer", "mode.rpg.blurb": "Ein Pixel-Abenteuer, angetrieben von deinen Antworten", "mode.roleplay.name": "Rollenspiel-Dialoge", "mode.roleplay.blurb": "Meistere Alltagsgespräche im Dialog", "mode.detective.name": "Detektiv", "mode.detective.blurb": "Löse Fälle mit den Hinweisen, die du gelernt hast", "question.lead": "Frage", "review.none": "Noch nichts zu wiederholen.", "class.assignment": "Aufgabe von deiner Lehrkraft", "class.target": "Erreiche {n} Sterne in: {units}", "class.allUnits": "allen Einheiten", "class.due": "Fällig: {date}", "class.yourName": "Dein Name", "class.send": "An meine Lehrkraft senden", "class.sent": "Ergebnisdatei gespeichert. Schicke sie deiner Lehrkraft.", "class.needName": "Gib zuerst deinen Namen ein.", "class.assigned": "Zugewiesen", "reader.title": "Leser", "reader.nav": "Leser", "reader.open": "Leser öffnen", "reader.continue": "Weiterlesen", "reader.toc": "Kapitel", "reader.chapter": "Kapitel {n}", "reader.progress": "Kapitel {n} von {total}", "reader.chapterRead": "gelesen", "reader.prev": "Vorheriges Kapitel", "reader.next": "Nächstes Kapitel", "reader.hint": "Tippe auf ein unterstrichenes Wort, um die Bedeutung zu sehen. Mit den Pfeiltasten links und rechts wechselst du das Kapitel.", "reader.read": "Du hast dieses Kapitel gelesen.", "reader.last": "Das war das letzte Kapitel.", "reader.practice": "Diesen Text üben", "reader.empty": "Dieser Kurs hat keine Lesetexte.", "reader.leave": "Zurück zum Text", "gloss.panel": "Wörter in diesem Text", "gloss.deck": "In meinem Stapel", "gloss.deck.for": "„{term}“ in meinem Vokabelstapel behalten", "gloss.close": "Erklärung schließen", "gloss.pos.n": "Nomen", "gloss.pos.v": "Verb", "gloss.pos.adj": "Adjektiv", "gloss.pos.adv": "Adverb", "gloss.pos.prep": "Präposition", "gloss.pos.conj": "Konjunktion", "gloss.pos.phrase": "Wendung", "passage.show": "Den Text lesen", "passage.hide": "Text ausblenden", "passage.title": "Der Text" } };
  function Ts(t, e) {
    var _a3, _b3, _c2;
    const s = (_c2 = (_b3 = di[t]) != null ? _b3 : di[(_a3 = t.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (n, r) => {
      var _a4, _b4;
      let i = (_b4 = (_a4 = e == null ? void 0 : e.strings["ui.".concat(n)]) != null ? _a4 : s[n]) != null ? _b4 : m0[n];
      if (r) for (const [o, a] of Object.entries(r)) i = i.split("{".concat(o, "}")).join(String(a));
      return i;
    };
  }
  [...Object.keys(di)];
  const Cl = { hr: ["č", "ć", "š", "ž", "đ"], de: ["ä", "ö", "ü", "ß"], es: ["á", "é", "í", "ó", "ú", "ñ", "¿", "¡"], fr: ["é", "è", "ê", "à", "ç", "ô", "î"] }, g0 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function k0(t, e) {
    const s = new RegExp("(?<![\\p{L}\\p{N}])".concat(g0(e), "(?![\\p{L}\\p{N}])"), "u").exec(t);
    if (s) return { start: s.index, end: s.index + s[0].length };
    const n = t.indexOf(e);
    return n < 0 ? null : { start: n, end: n + e.length };
  }
  function ui(t, e) {
    const s = t.map((r) => r.map((i) => ({ ...i }))), n = e.filter((r) => r.term.trim() !== "").sort((r, i) => i.term.length - r.term.length);
    for (const r of n) {
      let i = false;
      for (const o of s) {
        if (i) break;
        for (let a = 0; a < o.length; a++) {
          const c = o[a];
          if (c.link || c.gloss) continue;
          const l = k0(c.text, r.term);
          if (!l) continue;
          const d = [];
          l.start > 0 && d.push({ text: c.text.slice(0, l.start) }), d.push({ text: c.text.slice(l.start, l.end), gloss: r }), l.end < c.text.length && d.push({ text: c.text.slice(l.end) }), o.splice(a, 1, ...d), i = true;
          break;
        }
      }
    }
    return s;
  }
  let Zl = 0;
  const b0 = (t, e) => e ? t("gloss.pos.".concat(e)) : "";
  function hi(t) {
    const e = "gloss-pop-".concat(++Zl), s = u("strong", { class: "gloss-lemma", testid: "gloss-lemma" }), n = u("span", { class: "gloss-pos", testid: "gloss-pos" }), r = u("p", { class: "gloss-text", testid: "gloss-text" }), i = u("p", { class: "gloss-note", testid: "gloss-note" });
    let o = null;
    const a = u("div", { class: "gloss-pop", id: e, role: "status", testid: "gloss-popover", hidden: true }, u("div", { class: "gloss-head" }, s, n), r, i, I("gloss-close", "×", () => c.hide(), { class: "gloss-close", "aria-label": t("gloss.close") })), c = { el: a, show(l, d) {
      var _a3, _b3;
      if (o === l && !a.hidden) return c.hide();
      c.hide(), o = l, s.textContent = (_a3 = d.lemma) != null ? _a3 : d.term, n.textContent = b0(t, d.pos), n.hidden = !d.pos, r.textContent = d.gloss, i.textContent = (_b3 = d.note) != null ? _b3 : "", i.hidden = !d.note, a.hidden = false, l.setAttribute("aria-expanded", "true");
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
  function v0(t, e, s = {}) {
    const n = "gloss-d-".concat(++Zl), r = I("gloss-".concat(t.id), t.term, () => e.show(r, t), { class: "gloss".concat(s.off ? " is-off" : ""), "aria-expanded": "false", "aria-controls": e.el.id, "aria-describedby": n });
    return r.addEventListener("keydown", (i) => {
      i.key === "Escape" && e.hide();
    }), [r, u("span", { class: "sr-only", id: n }, ": ".concat(t.gloss))];
  }
  function pi(t, e, s, n) {
    return u("p", {}, t.map((r) => r.gloss ? v0(r.gloss, e, { off: (n == null ? void 0 : n.has(r.gloss.id)) === true }) : r.link && s ? s(r.link, r.text) : r.text));
  }
  function Pn(t, e, s) {
    return s === false ? [...e] : fs(e, t.rng);
  }
  const Is = (t) => u("span", { class: "sr-only" }, t);
  function yt(t, e, s = false) {
    return I("submit", t.ui("submit"), e, { class: "btn btn-primary", ...s ? { disabled: true } : {} });
  }
  function at(t, e, s) {
    t.classList.add(e ? "is-correct" : "is-wrong");
    const n = t.querySelector(".mark");
    n && n.remove(), t.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, e ? "✓" : "✗")), t.appendChild(Is(e ? s.ui("verdict.correct") : s.ui("verdict.wrong")));
  }
  function fi(t, e) {
    return t.specialLetters.length === 0 ? null : u("div", { class: "letters", role: "group", "aria-label": t.ui("letters"), testid: "letters" }, t.specialLetters.map((s) => u("button", { type: "button", class: "letter", testid: "letter-".concat(s), onmousedown: (n) => n.preventDefault(), onclick: () => {
      var _a3, _b3;
      const n = e();
      if (!n) return;
      const r = (_a3 = n.selectionStart) != null ? _a3 : n.value.length, i = (_b3 = n.selectionEnd) != null ? _b3 : r;
      n.value = n.value.slice(0, r) + s + n.value.slice(i), n.setSelectionRange(r + s.length, r + s.length), n.focus(), n.dispatchEvent(new Event("input", { bubbles: true }));
    } }, s)));
  }
  function Ul(t) {
    const e = t.item.asset;
    if (!e) return null;
    const s = t.data.pack.assets.find((r) => r.id === e), n = t.assetUrl(e);
    return !s || s.kind !== "image" || !n ? null : u("figure", { class: "item-figure" }, u("img", { src: n, alt: t.assetAlt(e), testid: "item-image", loading: "eager" }));
  }
  let w0 = 0;
  function y0(t, e) {
    var _a3, _b3, _c2, _d2;
    const s = pl(t.item);
    if (!s) return null;
    const n = t.data.pack, r = n.encyclopedia.articles.find((v) => v.id === s.article), i = r ? t.text.text(r.body) : void 0;
    if (!r || i === void 0) return null;
    const o = ul([i]), [a, c] = (_a3 = s.paragraphs) != null ? _a3 : [1, o.length], l = o.slice(a - 1, c);
    if (l.length === 0) return null;
    const d = cl.safeParse((_d2 = (_c2 = (_b3 = n.shells) == null ? void 0 : _b3.config) == null ? void 0 : _c2.encyclopedia) != null ? _d2 : {}), h = hl(d.success ? d.data : void 0, r.id).flatMap((v) => {
      const $ = t.text.text(v.term), S = t.text.text(v.gloss);
      if ($ === void 0 || S === void 0) return [];
      const _ = v.lemma ? t.text.text(v.lemma) : void 0, w = v.note ? t.text.text(v.note) : void 0;
      return [{ id: v.id, term: $, gloss: S, ..._ ? { lemma: _ } : {}, ...v.pos ? { pos: v.pos } : {}, ...w ? { note: w } : {} }];
    }), p = "passage-".concat(++w0), f = hi(t.ui), m = ui(l.map((v) => [{ text: v }]), h), k = u("div", { class: "passage-panel gloss-scope", id: p, role: "region", "aria-label": "".concat(t.ui("passage.title"), ": ").concat(t.text.t(r.title)), testid: "passage-panel", hidden: !e }, u("p", { class: "passage-title" }, t.text.t(r.title)), m.map((v) => pi(v, f)), f.el), g = I("passage-toggle", "", () => b(k.hidden), { class: "btn btn-small btn-ghost passage-toggle", "aria-controls": p });
    function b(v) {
      k.hidden = !v, g.textContent = "".concat(v ? "▾" : "▸", " ").concat(t.ui(v ? "passage.hide" : "passage.show")), g.setAttribute("aria-expanded", String(v)), v || f.hide();
    }
    return b(e), u("div", { class: "passage", testid: "passage", "data-article": r.id }, g, k);
  }
  function S0(t) {
    return { ...t, render(e) {
      const s = t.render(e), n = y0(e, e.passageOpen === true);
      return n ? { el: u("div", { class: "with-passage" }, n, s.el), focus: () => s.focus(), reveal: (r, i) => s.reveal(r, i), ...s.key ? { key: (r) => {
        var _a3, _b3;
        return (_b3 = (_a3 = s.key) == null ? void 0 : _a3.call(s, r)) != null ? _b3 : false;
      } } : {}, destroy: () => {
        var _a3;
        return (_a3 = s.destroy) == null ? void 0 : _a3.call(s);
      } } : s;
    } };
  }
  const $0 = "1.0.0";
  function z0(t = typeof location > "u" ? "" : location.search) {
    const e = new URLSearchParams(t).get("seed"), s = e === null ? NaN : Number(e);
    return Number.isInteger(s) && s >= 0 && s < 2 ** 31 ? s : Math.floor(Math.random() * 2 ** 31);
  }
  const Fl = (t) => "edu-studio:shell:".concat(t);
  function _0(t, e, s = Bs) {
    const n = (i) => Array.isArray(e) ? e.includes(i) : e.has(i), r = [...new Set(t)].filter(n);
    return r.length > 0 ? r : n(s) ? [s] : [];
  }
  function j0(t) {
    const e = new URLSearchParams(t.search).get("shell");
    for (const s of [e, t.saved, t.dataShell]) if (s && t.playable.includes(s)) return s;
    return t.playable[0];
  }
  const x0 = (t) => {
    try {
      return window.localStorage.getItem(t);
    } catch (e) {
      return null;
    }
  }, E0 = (t, e) => {
    try {
      window.localStorage.setItem(t, e);
    } catch (e2) {
    }
  }, A0 = (t) => {
    const e = t;
    return !!e && e.format === Nu && typeof e.pack == "object" && e.pack !== null && typeof e.catalogs == "object" && e.catalogs !== null;
  };
  function T0() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    let s = { screen: "loading", shell: "", lang: "", seed: 0, combo: 0, score: 0, reviewQueue: [], mastery: {}, finished: false, steps: 0 }, n = null, r = null, i = null, o = null, a = 0;
    const c = () => i ? _0(i.pack.shells.enabled, [...t.keys()], i.shell || Bs) : [], l = (p, f, m = "en") => {
      s = { ...s, screen: "error" };
      const k = Ts(m);
      p && (p.classList.add("edu-stage"), p.setAttribute("data-edu-theme", "chalkboard"), xs(p), p.appendChild(u("div", { class: "edu-error", role: "alert", testid: "error" }, u("h1", {}, k("error")), u("p", {}, f)))), console.error("[EduEngine] ".concat(f));
    }, d = { version: $0, registerShell(p, f) {
      t.set(p, f);
    }, registerItemKind(p, f) {
      e.set(p, S0(f));
    }, getState() {
      return JSON.parse(JSON.stringify(s));
    }, debug: Object.defineProperty(p0(() => s), "shell", { enumerable: true, get: () => r != null ? r : void 0 }), playableShells: () => c(), start() {
      if (n) return;
      o = document.getElementById(eo);
      const p = window.EDU_GAME_DATA;
      if (!o) return l(null, "the page has no #".concat(eo, " element"));
      if (!A0(p)) return l(o, "game-data.js did not define window.EDU_GAME_DATA");
      i = p, a = z0();
      const f = j0({ search: typeof location > "u" ? "" : location.search, playable: c(), saved: x0(Fl(i.pack.id)), dataShell: i.shell || Bs });
      if (!f) return l(o, 'no shell "'.concat(i.shell || Bs, '" is registered'), i.defaultLang);
      h(f);
    }, switchShell(p) {
      var _a3;
      if (!(!i || !o || !n || !c().includes(p))) {
        E0(Fl(i.pack.id), p);
        try {
          (_a3 = n.unmount) == null ? void 0 : _a3.call(n);
        } catch (f) {
          console.error("[EduEngine] unmounting the shell failed: ".concat(f instanceof Error ? f.message : String(f)));
        }
        n = null, r = null, xs(o), o.removeAttribute("data-edu-theme"), o.className = "", s = { ...s, screen: "loading" }, h(p);
      }
    } };
    function h(p) {
      const f = t.get(p);
      if (!i || !o || !f) return;
      n = f;
      const m = { root: o, data: i, seed: a, getItemRenderer: (k) => e.get(k), publish: (k) => {
        s = k;
      }, shells: c(), switchShell: (k) => d.switchShell(k), setDebug: (k) => {
        r = k;
      } };
      try {
        f.mount(m);
      } catch (k) {
        n = null, l(o, k instanceof Error ? k.message : String(k), i.defaultLang);
      }
    }
    return d;
  }
  function mi(t, e, s, n = (r) => r) {
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
      const l = li(c), d = e[l];
      return l < 0 || !d ? false : (c.preventDefault(), o(d.id), true);
    }, reveal: (c, l) => {
      i = true;
      for (const [d, h] of r) h.disabled = true, d === s ? at(h, true, t) : d === String(l) && at(h, false, t);
    } };
  }
  const I0 = { kind: "mcq", render(t) {
    const e = t.item, s = Pn(t, e.options, e.shuffle).map((n) => ({ id: n.id, text: t.text.t(n.text) }));
    return mi(t, s, e.answer);
  } }, M0 = { kind: "true-false", render(t) {
    const e = t.item;
    return mi(t, [{ id: "true", text: t.ui("fb.true") }, { id: "false", text: t.ui("fb.false") }], String(e.answer), (s) => s === "true");
  } }, O0 = { kind: "multi-select", render(t) {
    const e = t.item, s = Pn(t, e.options, e.shuffle), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
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
      const h = li(d), p = s[h];
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
  function gi(t, e) {
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
  function Bl(t, e) {
    e && t.addEventListener("keydown", (s) => {
      s.key === "Escape" && e.button.getAttribute("aria-pressed") === "true" && (s.preventDefault(), s.stopPropagation(), e.stop());
    });
  }
  const N0 = /* @__PURE__ */ new Set(["praesens", "perfekt", "praeteritum", "futur1", "imperativ", "konjunktiv2", "passiv-praesens", "passiv-praeteritum", "perfekt-passiv", "konjunktiv2-vergangenheit", "konjunktiv1", "konjunktiv1-vergangenheit"]);
  function P0(t, e) {
    const s = t.forms.filter((r) => !r.given).map((r) => r.person);
    if (t.ask === void 0 || t.ask >= s.length) return s;
    const n = new Set(fs(s, e.rng).slice(0, t.ask));
    return s.filter((r) => n.has(r));
  }
  const R0 = { kind: "conjugation", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, s = new Set(P0(e, t)), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = false, o = null;
    const a = e.forms.filter((S) => s.has(S.person)).map((S) => S.person), c = () => a.every((S) => {
      var _a4, _b4;
      return ((_b4 = (_a4 = n.get(S)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : "") !== "";
    }), l = () => {
      g.disabled = i || !c();
    }, d = () => {
      i || !c() || (i = true, t.submit(Object.fromEntries(a.map((S) => {
        var _a4, _b4;
        return [S, (_b4 = (_a4 = n.get(S)) == null ? void 0 : _a4.value.trim()) != null ? _b4 : ""];
      }))));
    }, h = u("tbody");
    for (const S of e.forms) {
      const _ = t.text.t(S.label);
      if (!s.has(S.person)) {
        h.appendChild(u("tr", { class: "conj-row is-given", testid: "conj-given-".concat(S.person) }, u("th", { scope: "row", class: "conj-label" }, _), u("td", { class: "conj-given" }, (_a3 = t.text.canonical(S.answer)) != null ? _a3 : ""), u("td", { class: "conj-result" })));
        continue;
      }
      const w = u("input", { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_b3 = t.data.pack.targetLang) != null ? _b3 : t.lang, class: "text-input conj-input", testid: "conj-".concat(S.person), "aria-label": "".concat(_, ": ").concat(t.text.t(e.verb)) });
      w.addEventListener("input", l), w.addEventListener("focus", () => o = w), w.addEventListener("keydown", (O) => {
        if (O.key !== "Enter") return;
        O.preventDefault();
        const R = a.slice(a.indexOf(S.person) + 1).map((y) => n.get(y)).find((y) => y && y.value.trim() === "");
        R ? R.focus() : d();
      }), n.set(S.person, w);
      const A = u("td", { class: "conj-result", testid: "conj-".concat(S.person, "-result"), "aria-live": "polite" }), j = u("tr", { class: "conj-row" }, u("th", { scope: "row", class: "conj-label" }, _), u("td", { class: "conj-cell" }, w), A);
      r.set(S.person, j), h.appendChild(j);
    }
    const p = "conj.tense.".concat(e.tense), f = N0.has(e.tense) ? t.ui(p) : e.tense, m = u("div", { class: "conj-head" }, u("p", { class: "conj-verb", testid: "conj-verb", lang: (_c2 = t.data.pack.targetLang) != null ? _c2 : t.lang }, t.text.t(e.verb)), u("span", { class: "badge conj-tense", testid: "conj-tense" }, f)), k = u("table", { class: "conj-table", "aria-label": "".concat(t.text.t(e.verb), ", ").concat(f) }, h), g = I("check", t.ui("submit"), d, { class: "btn btn-primary", disabled: true }), b = fi(t, () => {
      var _a4, _b4;
      return (_b4 = o != null ? o : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _b4 : null;
    }), v = gi(t, () => {
      var _a4, _b4, _c3;
      return (_c3 = (_b4 = o != null ? o : a.map((S) => n.get(S)).find((S) => S && S.value.trim() === "")) != null ? _b4 : n.get((_a4 = a[0]) != null ? _a4 : "")) != null ? _c3 : null;
    });
    for (const S of n.values()) Bl(S, v);
    const $ = u("div", { class: "conj" }, m, k, b, u("div", { class: "actions" }, v == null ? void 0 : v.button, g), v == null ? void 0 : v.status);
    return { el: $, focus: () => {
      var _a4, _b4;
      return (_b4 = n.get((_a4 = a[0]) != null ? _a4 : "")) == null ? void 0 : _b4.focus();
    }, destroy: () => v == null ? void 0 : v.stop(), reveal: (S) => {
      var _a4, _b4;
      v == null ? void 0 : v.disable(), i = true, g.disabled = true;
      const _ = S.expected && typeof S.expected == "object" ? S.expected : {};
      for (const w of a) {
        const A = n.get(w), j = $.querySelector('[data-testid="conj-'.concat(w, '-result"]'));
        if (!A || !j) continue;
        const O = ((_a4 = S.detail) == null ? void 0 : _a4[w]) === true;
        A.disabled = true, A.classList.add(O ? "is-correct" : "is-wrong"), (_b4 = r.get(w)) == null ? void 0 : _b4.classList.add(O ? "is-correct" : "is-wrong"), j.setAttribute("data-ok", String(O)), j.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, O ? "✓" : "✗")), j.appendChild(Is(O ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
        const R = _[w];
        !O && R && j.appendChild(u("span", { class: "conj-answer", testid: "conj-answer-".concat(w) }, R));
      }
    } };
  } }, ki = "_", xe = (t, e) => "".concat(t, ",").concat(e), Kl = (t) => Rr(t).toUpperCase().replace(/[^A-Z0-9]/g, ""), D0 = { kind: "crossword", render(t) {
    var _a3, _b3, _c2;
    const e = t.item, { grid: s } = wc(e, t.check), n = new Map(e.words.map((y) => [y.id, t.text.t(y.clue)])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = (y) => Array.from({ length: y.length }, (E, z) => [y.row + (y.dir === "down" ? z : 0), y.col + (y.dir === "across" ? z : 0)]);
    for (const y of s.entries) for (const [E, z] of a(y)) o.set(xe(E, z), [...(_a3 = o.get(xe(E, z))) != null ? _a3 : [], y]);
    let c = s.entries[0], l = false;
    const d = /* @__PURE__ */ new Map(), h = () => {
      var _a4;
      const y = new Set(c ? a(c).map(([E, z]) => xe(E, z)) : []);
      for (const [E, z] of i) (_a4 = z.parentElement) == null ? void 0 : _a4.classList.toggle("is-active", y.has(E));
      for (const [E, z] of _) z.classList.toggle("is-active", E === (c == null ? void 0 : c.id));
    }, p = (y) => {
      for (const E of s.entries) {
        const z = d.get(E.id);
        !z || z === y || (z.value = a(E).map(([T, D]) => r.get(xe(T, D)) || ki).join(""), z.value === ki.repeat(E.length) && (z.value = ""));
      }
      O.disabled = l || r.size === 0;
    }, f = (y, E, z) => {
      z ? r.set(xe(y, E), z) : r.delete(xe(y, E));
      const T = i.get(xe(y, E));
      T && (T.value = z);
    }, m = (y, E) => {
      const z = i.get(xe(y, E));
      return z ? (z.focus(), z.select(), true) : false;
    }, k = (y, E, z) => {
      var _a4, _b4;
      const T = (_a4 = o.get(xe(y, E))) != null ? _a4 : [];
      T.length !== 0 && (c && T.includes(c) ? z && T.length > 1 && (c = (_b4 = T.find((D) => D !== c)) != null ? _b4 : c) : c = T[0], h());
    }, g = (y, E, z) => {
      var _a4;
      const T = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across";
      m(y + (T === "down" ? z : 0), E + (T === "across" ? z : 0));
    };
    let b;
    const v = (y) => {
      b && b !== y && (b.tabIndex = -1), y.tabIndex = 0, b = y;
    }, $ = u("div", { class: "cw-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.width) });
    for (let y = 0; y < s.height; y++) for (let E = 0; E < s.width; E++) {
      if (!((_b3 = s.cells[y]) == null ? void 0 : _b3[E])) {
        $.appendChild(u("span", { class: "cw-black", "aria-hidden": "true" }));
        continue;
      }
      const T = (_c2 = o.get(xe(y, E))) != null ? _c2 : [], D = s.entries.filter((H) => H.row === y && H.col === E), K = T.map((H) => "".concat(H.number, " ").concat(t.ui(H.dir === "across" ? "cross.across" : "cross.down"))).join(", "), F = u("input", { type: "text", class: "cw-input", maxlength: 2, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "cell-".concat(y, "-").concat(E), "aria-label": "".concat(t.ui("cross.cell", { r: y + 1, c: E + 1 }), ", ").concat(K) });
      F.addEventListener("focus", () => k(y, E, false)), F.addEventListener("click", () => {
        document.activeElement === F && k(y, E, true);
      }), F.addEventListener("input", () => {
        if (l) return;
        const H = Kl(F.value.slice(-1) || F.value);
        f(y, E, H.slice(-1)), p(), H && g(y, E, 1);
      }), F.addEventListener("keydown", (H) => {
        var _a4;
        const he = (_a4 = c == null ? void 0 : c.dir) != null ? _a4 : "across", ve = ($e, W) => {
          var _a5;
          H.preventDefault();
          let ie = y + $e, Ee = E + W;
          for (; ie >= 0 && Ee >= 0 && ie < s.height && Ee < s.width && !((_a5 = s.cells[ie]) == null ? void 0 : _a5[Ee]); ) ie += $e, Ee += W;
          m(ie, Ee);
        };
        if (H.key === "ArrowRight") ve(0, 1);
        else if (H.key === "ArrowLeft") ve(0, -1);
        else if (H.key === "ArrowDown") ve(1, 0);
        else if (H.key === "ArrowUp") ve(-1, 0);
        else if (H.key === "Backspace" && !F.value && !l) {
          H.preventDefault(), g(y, E, -1);
          const $e = he === "down" ? [y - 1, E] : [y, E - 1];
          f($e[0], $e[1], ""), p();
        } else H.key === "Enter" && (H.preventDefault(), O.disabled || O.click());
      }), i.set(xe(y, E), F), F.tabIndex = -1, F.addEventListener("focus", () => v(F)), $.appendChild(u("span", { class: "cw-cell" }, D[0] ? u("span", { class: "cw-num", "aria-hidden": "true" }, String(D[0].number)) : null, F));
    }
    const S = s.entries[0] ? i.get(xe(s.entries[0].row, s.entries[0].col)) : void 0;
    S && v(S);
    const _ = /* @__PURE__ */ new Map(), { across: w, down: A } = Hk(s), j = (y, E) => u("section", { class: "cw-clues" }, u("h2", {}, E), u("ol", {}, y.map((z) => {
      var _a4, _b4;
      const T = u("input", { type: "text", class: "word-input", maxlength: z.length, autocomplete: "off", autocapitalize: "characters", autocorrect: "off", spellcheck: "false", testid: "word-".concat(z.id), "aria-label": "".concat(z.number, " ").concat(t.ui(z.dir === "across" ? "cross.across" : "cross.down"), ": ").concat((_a4 = n.get(z.id)) != null ? _a4 : "", " (").concat(z.length, ")") });
      d.set(z.id, T), T.addEventListener("focus", () => {
        c = z, h();
      }), T.addEventListener("input", () => {
        if (l) return;
        const K = Array.from(T.value.toUpperCase().slice(0, z.length));
        a(z).forEach(([F, H], he) => {
          var _a5;
          const ve = K[he] ? K[he] === ki || K[he] === " " ? "" : Kl(K[he]).slice(0, 1) : void 0;
          ve !== void 0 && (ve !== "" || !((_a5 = o.get(xe(F, H))) == null ? void 0 : _a5.some(($e) => $e !== z))) && f(F, H, ve);
        }), p(T);
      }), T.addEventListener("keydown", (K) => {
        K.key === "Enter" && (K.preventDefault(), O.disabled || O.click());
      });
      const D = u("li", { class: "cw-clue", testid: "clue-".concat(z.id), value: z.number }, u("span", { class: "cw-clue-text" }, u("b", {}, "".concat(z.number, ". ")), (_b4 = n.get(z.id)) != null ? _b4 : "", " (".concat(z.length, ")")), T);
      return _.set(z.id, D), D;
    }))), O = yt(t, () => {
      l || (l = true, t.submit(Object.fromEntries(s.entries.map((y) => [y.id, a(y).map(([E, z]) => {
        var _a4;
        return (_a4 = r.get(xe(E, z))) != null ? _a4 : "";
      }).join("")]))));
    }, true), R = u("div", { class: "crossword" }, u("div", { class: "cw-board" }, u("div", { class: "cw-scroll" }, $), u("div", { class: "cw-side" }, j(w, t.ui("cross.across")), j(A, t.ui("cross.down")))), u("div", { class: "actions" }, O));
    return h(), { el: R, focus: () => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const y = s.entries[0];
      y && m(y.row, y.col);
    }, reveal: (y) => {
      var _a4, _b4, _c3;
      l = true, O.disabled = true;
      for (const [E, z] of i) {
        const [T, D] = E.split(",").map(Number), K = (_b4 = (_a4 = s.cells[T]) == null ? void 0 : _a4[D]) != null ? _b4 : "", F = r.get(E);
        z.value = K, z.disabled = true;
        const H = z.parentElement;
        H.classList.remove("is-active"), H.classList.add(F === K ? "is-correct" : "is-wrong");
      }
      for (const E of s.entries) {
        const z = _.get(E.id), T = d.get(E.id);
        T && (T.disabled = true, T.value = a(E).map(([D, K]) => {
          var _a5, _b5;
          return (_b5 = (_a5 = s.cells[D]) == null ? void 0 : _a5[K]) != null ? _b5 : "";
        }).join("")), z && at(z, ((_c3 = y.detail) == null ? void 0 : _c3[E.id]) === true, t);
      }
    } };
  } }, L0 = { kind: "flashcard", ownsPrompt: true, render(t) {
    const e = t.item;
    let s = false, n = false;
    const r = t.item.asset && t.assetUrl(t.item.asset) ? u("img", { class: "flash-img", src: t.assetUrl(t.item.asset), alt: t.assetAlt(t.item.asset) }) : null, i = e.backAsset && t.assetUrl(e.backAsset) ? u("img", { class: "flash-img", src: t.assetUrl(e.backAsset), alt: t.assetAlt(e.backAsset) }) : null, o = u("span", { class: "flash-face flash-front", testid: "flash-front" }, u("span", { class: "flash-text" }, t.text.t(e.prompt)), r), a = u("span", { class: "flash-face flash-back", testid: "flash-back", "aria-hidden": "true" }, u("span", { class: "flash-text" }, t.text.t(e.back)), i), c = u("span", { class: "sr-only" }, " — ".concat(t.ui("flip"))), l = I("flip", [u("span", { class: "flash-inner" }, o, a), c], () => m(), { class: "flash-card" }), d = /* @__PURE__ */ new Map();
    for (const g of ln) d.set(g, I("grade-".concat(g), [u("span", { class: "grade-key", "aria-hidden": "true" }, String(ln.indexOf(g) + 1)), t.ui("grade.".concat(g))], () => k(g), { class: "btn grade grade-".concat(g) }));
    const h = u("div", { class: "grades", hidden: true, role: "group", "aria-label": t.ui("grade.ask") }, [...d.values()]), p = u("p", { class: "hint-line" }, t.ui("flip")), f = t.item.tags.includes("self-check") ? u("p", { class: "hint-line selfcheck-hint", testid: "selfcheck-hint", hidden: true }, t.ui("selfcheck.hint")) : null;
    function m() {
      var _a3;
      n || s || (s = true, l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), c.textContent = "", h.hidden = false, f && (f.hidden = false), p.textContent = t.ui("grade.ask"), (_a3 = d.get("good")) == null ? void 0 : _a3.focus());
    }
    function k(g) {
      n || !s || (n = true, t.submit(g));
    }
    return { el: u("div", { class: "flashcard" }, l, p, f, h), focus: () => l.focus(), key: (g) => {
      const b = li(g), v = ln[b];
      return !s || b < 0 || !v ? false : (g.preventDefault(), k(v), true);
    }, reveal: (g, b) => {
      n = true, s || (l.classList.add("is-flipped"), o.setAttribute("aria-hidden", "true"), a.removeAttribute("aria-hidden"), h.hidden = false), f && (f.hidden = false), l.disabled = true;
      for (const [v, $] of d) $.disabled = true, $.setAttribute("aria-pressed", String(v === b)), v === b && $.classList.add("is-chosen");
    } };
  } };
  function C0(t) {
    return t.type === "circle" ? ue("circle", { cx: t.cx, cy: t.cy, r: t.r }) : t.type === "rect" ? ue("rect", { x: t.x, y: t.y, width: t.w, height: t.h, rx: 4 }) : ue("polygon", { points: t.points.map(([e, s]) => "".concat(e, ",").concat(s)).join(" ") });
  }
  const Z0 = { kind: "hotspot", render(t) {
    const e = t.item, s = t.assetUrl(e.asset);
    let n = false;
    const r = ue("svg", { class: "hotspot-svg", viewBox: "0 0 ".concat(e.width, " ").concat(e.height), role: "group", "aria-label": t.assetAlt(e.asset) || t.ui("picture"), testid: "hotspot" });
    s && r.appendChild(ue("image", { href: s, x: 0, y: 0, width: e.width, height: e.height, preserveAspectRatio: "xMidYMid meet" }));
    const i = /* @__PURE__ */ new Map();
    for (const l of e.regions) {
      const d = C0(l.shape);
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
  } }, ql = (t) => {
    var _a3;
    return { type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", lang: (_a3 = t.data.pack.targetLang) != null ? _a3 : t.lang };
  };
  function Gl(t, e) {
    const s = u("input", { ...ql(t), class: "text-input", testid: "answer-input", "aria-label": t.ui("answer.type"), placeholder: t.ui("answer.type") }), n = yt(t, () => r(), true), r = () => {
      const c = s.value.trim();
      c === "" || s.disabled || e(c);
    };
    s.addEventListener("input", () => {
      n.disabled = s.value.trim() === "" || s.disabled;
    }), s.addEventListener("keydown", (c) => {
      c.key === "Enter" && (c.preventDefault(), r());
    });
    const i = fi(t, () => s), o = gi(t, () => s);
    return Bl(s, o), { el: u("div", { class: "typed" }, u("div", { class: "typed-row" }, s, o == null ? void 0 : o.button, n), o == null ? void 0 : o.status, i), input: s, submit: n, mic: o };
  }
  const U0 = [I0, M0, O0, { kind: "cloze", render(t) {
    const e = t.item, s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = false, o = null;
    const a = () => e.gaps.every((j) => {
      var _a3;
      return ((_a3 = n.get(j.id)) != null ? _a3 : "").trim() !== "";
    }), c = () => {
      b.disabled = i || !a();
    }, l = () => {
      i || !a() || (i = true, t.submit(Object.fromEntries(e.gaps.map((j) => {
        var _a3;
        return [j.id, (_a3 = n.get(j.id)) != null ? _a3 : ""];
      }))));
    }, d = (j, O) => {
      var _a3;
      const R = t.ui("gap.n", { n: O + 1 });
      if (j.bank) {
        const z = I("gap-".concat(j.id), "", () => h(j.id, ""), { class: "gap gap-slot", "aria-label": R });
        return z.appendChild(u("span", { class: "gap-text" }, " ")), { id: j.id, el: z, banked: true, value: () => {
          var _a4;
          return (_a4 = n.get(j.id)) != null ? _a4 : "";
        }, wrap: z };
      }
      const y = (_a3 = t.text.canonical(j.answer)) != null ? _a3 : "", E = u("input", { ...ql(t), class: "gap gap-input", testid: "gap-".concat(j.id), "aria-label": R, size: Math.max(5, Math.min(22, y.length + 2)) });
      return E.addEventListener("input", () => {
        n.set(j.id, E.value), c();
      }), E.addEventListener("focus", () => o = E), E.addEventListener("keydown", (z) => {
        if (z.key !== "Enter") return;
        z.preventDefault();
        const T = e.gaps.slice(O + 1).map((D) => s.get(D.id)).find((D) => {
          var _a4;
          return D && !D.banked && !((_a4 = n.get(D.id)) != null ? _a4 : "").trim();
        });
        T ? T.el.focus() : l();
      }), { id: j.id, el: E, banked: false, value: () => E.value, wrap: E };
    }, h = (j, O, R) => {
      var _a3;
      if (i) return;
      const y = s.get(j);
      if (!y) return;
      n.set(j, O);
      const E = y.el.querySelector(".gap-text");
      E && (E.textContent = O === "" ? " " : O), y.el.classList.toggle("is-filled", O !== "");
      const z = t.ui("gap.n", { n: e.gaps.findIndex((T) => T.id === j) + 1 });
      y.el.setAttribute("aria-label", O === "" ? z : "".concat(z, ": ").concat(O));
      for (const T of (_a3 = r.get(j)) != null ? _a3 : []) T.setAttribute("aria-pressed", String(T === R));
      c();
    };
    e.gaps.forEach((j, O) => s.set(j.id, d(j, O)));
    const p = u("p", { class: "cloze-text" }), m = t.text.t(e.text).split(/(\{\{[^}]+\}\})/);
    for (const j of m) {
      const O = /^\{\{([^}]+)\}\}$/.exec(j), R = O ? s.get(O[1]) : void 0;
      R ? p.appendChild(R.wrap) : j && p.appendChild(document.createTextNode(j));
    }
    const k = e.gaps.filter((j) => j.bank).length, g = e.gaps.flatMap((j, O) => {
      if (!j.bank) return [];
      const y = Pn(t, j.bank, true).map((E) => {
        var _a3;
        const z = (_a3 = t.text.canonical(E)) != null ? _a3 : t.text.t(E), T = I("bank-".concat(j.id, "-").concat(E), z, () => h(j.id, z, T), { class: "chip", "aria-pressed": "false" });
        return T;
      });
      return r.set(j.id, y), [u("div", { class: "bank", role: "group", "aria-label": t.ui("gap.n", { n: O + 1 }), testid: "bank-".concat(j.id) }, k > 1 ? u("span", { class: "bank-label" }, t.ui("gap.n", { n: O + 1 })) : null, y)];
    }), b = yt(t, l, true), v = e.gaps.some((j) => !j.bank), $ = v ? fi(t, () => {
      var _a3, _b3;
      return (_b3 = o != null ? o : (_a3 = e.gaps.map((j) => s.get(j.id)).find((j) => j && !j.banked)) == null ? void 0 : _a3.el) != null ? _b3 : null;
    }) : null, S = () => e.gaps.map((j) => s.get(j.id)).filter((j) => !!j && !j.banked).map((j) => j.el), _ = v ? gi(t, () => {
      var _a3, _b3;
      return (_b3 = (_a3 = o != null ? o : S().find((j) => j.value.trim() === "")) != null ? _a3 : S()[0]) != null ? _b3 : null;
    }) : null, w = u("div", { class: "cloze" }, p, g, $, u("div", { class: "actions" }, _ == null ? void 0 : _.button, b), _ == null ? void 0 : _.status);
    return c(), { el: w, focus: () => {
      var _a3, _b3, _c2, _d2, _e2, _f2;
      (_f2 = (_e2 = (_a3 = e.gaps.map((O) => s.get(O.id)).find((O) => O && !O.banked)) == null ? void 0 : _a3.el) != null ? _e2 : (_d2 = r.get((_c2 = (_b3 = e.gaps[0]) == null ? void 0 : _b3.id) != null ? _c2 : "")) == null ? void 0 : _d2[0]) == null ? void 0 : _f2.focus();
    }, destroy: () => _ == null ? void 0 : _.stop(), reveal: (j) => {
      var _a3;
      _ == null ? void 0 : _.disable(), i = true, b.disabled = true;
      const O = j.expected && typeof j.expected == "object" ? j.expected : {};
      for (const R of e.gaps) {
        const y = s.get(R.id);
        if (!y) continue;
        const E = ((_a3 = j.detail) == null ? void 0 : _a3[R.id]) === true;
        if (y.banked, y.el.disabled = true, y.el.classList.add(E ? "is-correct" : "is-wrong"), !E) {
          const z = O[R.id];
          z && y.el.insertAdjacentElement("afterend", u("span", { class: "gap-answer", testid: "gap-answer-".concat(R.id) }, z));
        }
        y.el.insertAdjacentElement("afterend", Is(E ? t.ui("verdict.correct") : t.ui("verdict.wrong")));
      }
      for (const R of r.values()) for (const y of R) y.disabled = true;
    } };
  } }, { kind: "typed", render(t) {
    const e = Gl(t, (s) => {
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
    const e = t.item, s = fs(e.pairs.map((_) => _.id), t.rng), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    let i = null, o = null, a = false;
    const c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = () => {
      const _ = new Set(r.values());
      for (let w = 1; w <= e.pairs.length; w++) if (!_.has(w)) return w;
      return e.pairs.length + 1;
    }, h = (_) => {
      var _a3;
      return (_a3 = [...n].find(([, w]) => w === _)) == null ? void 0 : _a3[0];
    }, p = () => {
      for (const [_, w] of c) f(w, _, n.get(_) !== void 0, i === _);
      for (const [_, w] of l) f(w, _, h(_) !== void 0, o === _);
      $.disabled = a || n.size !== e.pairs.length;
    }, f = (_, w, A, j) => {
      const R = c.get(w) === _ ? w : h(w), y = R ? r.get(R) : void 0;
      _.setAttribute("aria-pressed", String(j)), _.classList.toggle("is-paired", A);
      for (const T of Array.from(_.classList)) T.startsWith("pair-c") && _.classList.remove(T);
      A && y && _.classList.add("pair-c".concat((y - 1) % 8 + 1));
      const E = _.querySelector(".pair-n");
      E && (E.textContent = A && y ? String(y) : "");
      const z = _.querySelector(".sr-only");
      z && (z.textContent = A && y ? " (".concat(y, ")") : "");
    }, m = (_) => {
      n.delete(_), r.delete(_);
    }, k = () => {
      if (i && o) {
        const _ = h(o);
        _ && m(_), m(i), n.set(i, o), r.set(i, d()), i = null, o = null;
      }
    }, g = (_) => {
      a || (n.has(_) ? m(_) : i = i === _ ? null : _, k(), p());
    }, b = (_) => {
      if (a) return;
      const w = h(_);
      w ? m(w) : o = o === _ ? null : _, k(), p();
    }, v = (_, w, A) => I(_, [u("span", { class: "pair-n", "aria-hidden": "true" }), u("span", { class: "pair-text" }, w), Is("")], A, { class: "pair-btn", "aria-pressed": "false" });
    for (const _ of e.pairs) c.set(_.id, v("pair-left-".concat(_.id), t.text.t(_.left), () => g(_.id)));
    for (const _ of s) {
      const w = e.pairs.find((A) => A.id === _);
      w && l.set(_, v("pair-right-".concat(_), t.text.t(w.right), () => b(_)));
    }
    const $ = yt(t, () => {
      a || n.size !== e.pairs.length || (a = true, t.submit(Object.fromEntries(n)));
    }, true), S = u("div", { class: "pairs" }, u("p", { class: "hint-line" }, t.ui("pairs.pick")), u("div", { class: "pairs-cols" }, u("div", { class: "pairs-col", role: "group" }, [...c.values()]), u("div", { class: "pairs-col", role: "group" }, [...l.values()])), u("div", { class: "actions" }, $));
    return p(), { el: S, focus: () => {
      var _a3;
      return (_a3 = [...c.values()][0]) == null ? void 0 : _a3.focus();
    }, reveal: (_) => {
      var _a3;
      a = true, $.disabled = true;
      for (const w of e.pairs) {
        const A = ((_a3 = _.detail) == null ? void 0 : _a3[w.id]) === true, j = c.get(w.id), O = n.get(w.id) ? l.get(n.get(w.id)) : void 0;
        for (const R of [j, O]) R && (R.disabled = true, at(R, A, t));
      }
    } };
  } }, { kind: "order", render(t) {
    const e = t.item, s = new Map(e.items.map((p) => [p.id, p]));
    let n = gb(e, t.seed), r = false, i = -1;
    const o = u("ol", { class: "order-list", "aria-label": t.text.t(e.prompt), testid: "order-list" }), a = (p, f, m, k) => {
      var _a3;
      if (r || f < 0 || f >= n.length || p === f) return;
      const g = [...n], [b] = g.splice(p, 1);
      if (g.splice(f, 0, b), n = g, c(), m) {
        const v = o.querySelector('[data-testid="order-'.concat(k, "-").concat(m, '"]'));
        (_a3 = v && !v.disabled ? v : o.querySelector('[data-testid="order-'.concat(k === "up" ? "down" : "up", "-").concat(m, '"]'))) == null ? void 0 : _a3.focus();
      }
    }, c = () => {
      o.replaceChildren(...n.map((p, f) => {
        var _a3;
        const m = s.get(p), k = t.text.t((_a3 = m == null ? void 0 : m.text) != null ? _a3 : p), g = u("li", { class: "order-row", testid: "order-row-".concat(p), draggable: r ? "false" : "true" }, u("span", { class: "order-n", "aria-hidden": "true" }, String(f + 1)), u("span", { class: "order-text" }, k), u("span", { class: "order-btns" }, I("order-up-".concat(p), "▲", () => a(f, f - 1, p, "up"), { class: "icon-btn", "aria-label": t.ui("order.up", { item: k }), ...r || f === 0 ? { disabled: true } : {} }), I("order-down-".concat(p), "▼", () => a(f, f + 1, p, "down"), { class: "icon-btn", "aria-label": t.ui("order.down", { item: k }), ...r || f === n.length - 1 ? { disabled: true } : {} })));
        return g.addEventListener("dragstart", (b) => {
          var _a4;
          i = f, g.classList.add("is-dragging"), (_a4 = b.dataTransfer) == null ? void 0 : _a4.setData("text/plain", p);
        }), g.addEventListener("dragend", () => g.classList.remove("is-dragging")), g.addEventListener("dragover", (b) => {
          !r && i >= 0 && b.preventDefault();
        }), g.addEventListener("drop", (b) => {
          b.preventDefault();
          const v = i;
          i = -1, a(v, f);
        }), g;
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
      r = true, l.disabled = true, c(), o.querySelectorAll(".order-row").forEach((m, k) => {
        var _a3, _b3;
        const g = n[k];
        m.setAttribute("draggable", "false");
        const b = ((_a3 = p.detail) == null ? void 0 : _a3[g]) === true;
        at(m, b, t);
        const v = (_b3 = s.get(g)) == null ? void 0 : _b3.when;
        v && m.appendChild(u("span", { class: "order-when" }, t.text.t(v))), m.appendChild(u("span", { class: "order-should" }, b ? "" : "→ ".concat(e.items.findIndex(($) => $.id === g) + 1)));
      });
    } };
  } }, { kind: "sort-groups", render(t) {
    const e = t.item, s = fs(e.items.map((p) => p.id), t.rng), n = new Map(e.items.map((p) => [p.id, p])), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    let o = false;
    const a = (p) => e.groups.findIndex((f) => f.id === p) + 1, c = () => {
      var _a3;
      for (const [p, f] of i) {
        const [m, k] = p.split("\0");
        f.setAttribute("aria-pressed", String(r.get(k) === m));
      }
      for (const p of s) (_a3 = l.get(p)) == null ? void 0 : _a3.setAttribute("data-group", String(r.has(p) ? a(r.get(p)) : 0));
      d.disabled = o || r.size !== e.items.length;
    }, l = /* @__PURE__ */ new Map();
    for (const p of s) {
      const f = n.get(p);
      if (!f) continue;
      const m = t.text.t(f.text), k = e.groups.map((g) => {
        const b = I("group-".concat(g.id, "-").concat(p), t.text.t(g.title), () => {
          o || (r.get(p) === g.id ? r.delete(p) : r.set(p, g.id), c());
        }, { class: "pill pill-g".concat(a(g.id)), "aria-pressed": "false", "aria-label": t.ui("sort.assign", { item: m, group: t.text.t(g.title) }) });
        return i.set("".concat(g.id, "\0").concat(p), b), b;
      });
      l.set(p, u("li", { class: "sort-card", testid: "sort-card-".concat(p), "data-group": "0" }, u("span", { class: "sort-text" }, m), u("span", { class: "sort-pills", role: "group", "aria-label": m }, k)));
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
        const k = ((_a3 = p.detail) == null ? void 0 : _a3[f.id]) === true;
        if (at(m, k, t), !k) {
          const g = e.groups.find((b) => b.id === f.group);
          m.appendChild(u("span", { class: "sort-should" }, "→ ".concat(t.text.t((_b3 = g == null ? void 0 : g.title) != null ? _b3 : f.group))));
        }
      }
    } };
  } }, Z0, { kind: "listening", render(t) {
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
      const d = Pn(t, (_a3 = e.options) != null ? _a3 : [], e.shuffle).map((f) => ({ id: f.id, text: t.text.t(f.text) })), h = mi(t, d, e.answer), p = u("div", { class: "listening" }, a, h.el);
      return { el: p, focus: () => o.focus(), key: h.key, reveal: (f, m) => {
        h.reveal(f, m), p.appendChild(u("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
      }, destroy: () => {
        var _a4;
        n.pause(), (_a4 = t.duck) == null ? void 0 : _a4.call(t, false);
      } };
    }
    const c = Gl(t, (d) => t.submit(d)), l = u("div", { class: "listening" }, a, c.el);
    return { el: l, focus: () => o.focus(), reveal: (d) => {
      var _a4;
      (_a4 = c.mic) == null ? void 0 : _a4.disable(), c.input.disabled = true, c.submit.disabled = true, at(c.el.querySelector(".typed-row"), d.correct, t), l.appendChild(u("p", { class: "transcript", testid: "transcript" }, "".concat(t.ui("transcript"), " ").concat(t.text.t(e.transcript))));
    }, destroy: () => {
      var _a4, _b3;
      (_a4 = c.mic) == null ? void 0 : _a4.stop(), n.pause(), (_b3 = t.duck) == null ? void 0 : _b3.call(t, false);
    } };
  } }, L0, D0, { kind: "word-search", render(t) {
    var _a3, _b3, _c2, _d2;
    const e = t.item, { grid: s, words: n } = un(t.item, t.check), r = [], i = /* @__PURE__ */ new Set(), o = [];
    let a = null, c = [0, 0], l = false;
    const d = (w, A) => {
      var _a4;
      return (_a4 = o[w]) == null ? void 0 : _a4[A];
    }, h = (w) => {
      const [A, j] = w.start, [O, R] = w.end, y = Math.sign(O - A), E = Math.sign(R - j), z = Math.max(Math.abs(O - A), Math.abs(R - j)) + 1;
      return Array.from({ length: z }, (T, D) => [A + y * D, j + E * D]);
    }, p = (w, A, j) => {
      var _a4;
      const O = d(w, A);
      O && ((_a4 = d(...c)) == null ? void 0 : _a4.setAttribute("tabindex", "-1"), c = [w, A], O.setAttribute("tabindex", "0"), j && O.focus());
    }, f = () => {
      var _a4, _b4;
      for (const w of o) for (const A of w) A.classList.remove("is-first");
      a && ((_a4 = d(...a)) == null ? void 0 : _a4.classList.add("is-first"));
      for (const w of o) for (const A of w) A.setAttribute("aria-pressed", "false");
      a && ((_b4 = d(...a)) == null ? void 0 : _b4.setAttribute("aria-pressed", "true"));
    }, m = () => {
      l || (l = true, t.submit([...r]));
    }, k = (w, A) => {
      var _a4;
      if (l) return;
      if (!a) {
        a = [w, A], f();
        return;
      }
      if (a[0] === w && a[1] === A) {
        a = null, f();
        return;
      }
      const j = { start: a, end: [w, A] };
      a = null;
      const O = yc(s, n, [j]).filter((y) => !i.has(y));
      if (f(), O.length === 0) {
        for (const [y, E] of h(j)) (_a4 = d(y, E)) == null ? void 0 : _a4.classList.add("is-miss");
        window.setTimeout(() => {
          for (const y of o) for (const E of y) E.classList.remove("is-miss");
        }, 450);
        return;
      }
      r.push(j);
      const R = i.size;
      O.forEach((y) => i.add(y)), h(j).forEach(([y, E]) => {
        const z = d(y, E);
        z && z.classList.add("is-found", "found-c".concat(R % 6 + 1));
      });
      for (const y of O) {
        const E = b.get(y);
        E && (E.classList.add("is-found"), E.appendChild(u("span", { class: "mark", "aria-hidden": "true" }, "✓")), E.appendChild(Is(t.ui("verdict.correct"))));
      }
      $.textContent = t.ui("ws.found", { n: i.size, total: e.words.length }), i.size === e.words.length && m();
    }, g = u("div", { class: "ws-grid", role: "group", "aria-label": t.text.t(e.prompt), style: "--cols:".concat(s.size) });
    for (let w = 0; w < s.size; w++) {
      const A = [], j = u("div", { class: "ws-row" });
      for (let O = 0; O < s.size; O++) {
        const R = u("button", { type: "button", class: "ws-cell", testid: "cell-".concat(w, "-").concat(O), tabindex: w === 0 && O === 0 ? "0" : "-1", "aria-pressed": "false", "aria-label": "".concat((_b3 = (_a3 = s.cells[w]) == null ? void 0 : _a3[O]) != null ? _b3 : "", ", ").concat(t.ui("cross.cell", { r: w + 1, c: O + 1 })) }, (_d2 = (_c2 = s.cells[w]) == null ? void 0 : _c2[O]) != null ? _d2 : "");
        R.addEventListener("click", () => {
          p(w, O, false), k(w, O);
        }), R.addEventListener("keydown", (y) => {
          const z = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[y.key];
          z && (y.preventDefault(), p(Math.min(s.size - 1, Math.max(0, w + z[0])), Math.min(s.size - 1, Math.max(0, O + z[1])), true));
        }), A.push(R), j.appendChild(R);
      }
      o.push(A), g.appendChild(j);
    }
    const b = /* @__PURE__ */ new Map(), v = u("ul", { class: "ws-words" }, e.words.map((w) => {
      var _a4;
      const A = u("li", { class: "ws-word", testid: "ws-word-".concat(w.id) }, (_a4 = t.text.canonical(w.answer)) != null ? _a4 : w.id);
      return b.set(w.id, A), A;
    })), $ = u("p", { class: "ws-count", role: "status", testid: "ws-count" }, t.ui("ws.found", { n: 0, total: e.words.length })), S = yt(t, m);
    return S.textContent = t.ui("ws.done"), { el: u("div", { class: "wordsearch" }, u("p", { class: "hint-line" }, t.ui("ws.pick")), u("div", { class: "ws-board" }, u("div", { class: "ws-scroll" }, g), u("div", { class: "ws-side" }, $, v)), u("div", { class: "actions" }, S)), focus: () => {
      var _a4;
      return (_a4 = d(...c)) == null ? void 0 : _a4.focus();
    }, reveal: () => {
      var _a4, _b4;
      l = true, S.disabled = true;
      for (const w of o) for (const A of w) A.disabled = true;
      for (const w of s.placements) {
        if (i.has(w.id)) continue;
        const A = w.answer.length;
        for (let j = 0; j < A; j++) (_a4 = d(w.row + w.dr * j, w.col + w.dc * j)) == null ? void 0 : _a4.classList.add("is-missed");
      }
      for (const w of e.words) i.has(w.id) || ((_b4 = b.get(w.id)) == null ? void 0 : _b4.classList.add("is-missed"));
    } };
  } }, R0], F0 = (t, e) => "".concat(t, "/").concat(e);
  function B0(t) {
    var _a3;
    const e = (_a3 = t.extensions) == null ? void 0 : _a3.gloss;
    if (typeof e != "object" || e === null) return null;
    const s = e;
    return typeof s.article == "string" && typeof s.entry == "string" ? { article: s.article, entry: s.entry } : null;
  }
  function Wl(t, e) {
    const s = B0(t);
    return s !== null && e.has(F0(s.article, s.entry));
  }
  function K0(t, e) {
    const s = new Set(e);
    return new Set(t.filter((n) => Wl(n, s)).map((n) => n.id));
  }
  const Hl = "edu-student-result", Vl = 1, bi = 60, q0 = 400, G0 = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,79}$/, Rn = x().regex(G0), vi = x().max(40).regex(/^\d{4}-\d{2}-\d{2}(T[0-9:.]+(Z|[+-]\d{2}:?\d{2})?)?$/, "an ISO date such as 2026-11-20").refine((t) => Number.isFinite(Date.parse(t)), "not a real date"), W0 = B({ id: x().min(1).max(60), title: x().min(1).max(120), units: N(Rn).max(200).default([]), targetStars: L().int().min(1).max(3).default(2), due: vi.optional(), message: x().max(q0).optional(), createdAt: vi });
  function H0(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.classroom) == null ? void 0 : _a3.assignment;
    if (e == null) return null;
    const s = W0.safeParse(e);
    return s.success ? s.data : null;
  }
  function Yl(t, e) {
    const s = t.units.map((r) => r.id);
    if (!e || e.units.length === 0) return s;
    const n = s.filter((r) => e.units.includes(r));
    return n.length ? n : s;
  }
  const Jl = B({ stars: L().int().min(0).max(3), best: L().min(0).max(1), rounds: L().int().min(0).max(1e6) }), V0 = B({ schema: se(Vl), kind: se(Hl), courseId: x().min(1).max(120), assignmentId: x().min(1).max(60).optional(), student: B({ name: x().min(1).max(bi), id: x().min(1).max(80) }), exportedAt: vi, units: Q(Rn, Jl), boss: Jl, answered: L().int().min(0).max(1e9), right: L().int().min(0).max(1e9), queue: N(Rn).max(2e3), missed: Q(Rn, L().int().min(1).max(1e5)), playSeconds: L().int().min(0).max(36e6) });
  function Qt(t) {
    return typeof t != "string" ? "" : t.replace(/[\u0000-\u001f\u007f-\u009f]/g, " ").replace(/\s+/g, " ").trim().slice(0, bi).trim();
  }
  const Dn = (t, e) => {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    return { stars: Math.max((_a3 = t == null ? void 0 : t.stars) != null ? _a3 : 0, (_b3 = e == null ? void 0 : e.stars) != null ? _b3 : 0), best: Math.max((_c2 = t == null ? void 0 : t.best) != null ? _c2 : 0, (_d2 = e == null ? void 0 : e.best) != null ? _d2 : 0), rounds: ((_e2 = t == null ? void 0 : t.rounds) != null ? _e2 : 0) + ((_f2 = e == null ? void 0 : e.rounds) != null ? _f2 : 0) };
  };
  function Y0(t, e, s) {
    var _a3, _b3, _c2, _d2, _e2;
    const n = {};
    let r = Dn(e.boss, void 0);
    for (const l of t.units) {
      let d = Dn(e.units[l.id], void 0);
      for (const h of Object.values((_a3 = e.shells) != null ? _a3 : {})) d = Dn(d, h.units[l.id]);
      (d.stars > 0 || d.rounds > 0) && (n[l.id] = d);
    }
    for (const l of Object.values((_b3 = e.shells) != null ? _b3 : {})) r = Dn(r, l.boss);
    const i = new Set(t.items.map((l) => l.id)), o = e.queue.filter((l) => i.has(l)), a = {};
    for (const [l, d] of Object.entries(e.cards)) i.has(l) && d.lapses > 0 && (a[l] = d.lapses);
    for (const l of o) a[l] = Math.max(1, (_c2 = a[l]) != null ? _c2 : 0);
    const c = Math.max(0, Math.round(e.answered));
    return V0.parse({ schema: Vl, kind: Hl, courseId: t.id, ...s.assignmentId ? { assignmentId: s.assignmentId } : {}, student: { name: Qt(s.name) || "Student", id: s.id }, exportedAt: ((_d2 = s.now) != null ? _d2 : /* @__PURE__ */ new Date()).toISOString(), units: n, boss: r, answered: c, right: Math.min(c, Math.max(0, Math.round(e.right))), queue: o, missed: a, playSeconds: Math.max(0, Math.round((_e2 = e.playSeconds) != null ? _e2 : 0)) });
  }
  const wi = 1, Ql = "edu-progress", J0 = 2, Xl = 36e4, Q0 = 2e5, ed = () => ({ units: {}, boss: Ln(), finished: false }), Ln = () => ({ stars: 0, best: 0, rounds: 0 });
  function Ms(t) {
    return { version: wi, pack: t, units: {}, boss: Ln(), cards: {}, queue: [], score: 0, bestCombo: 0, answered: 0, right: 0, settings: { timer: false, sound: true, reduceAudio: false, speak: true }, updatedAt: 0, shells: {} };
  }
  function yi(t) {
    return t >= 0.9 ? 3 : t >= 0.7 ? 2 : t >= 0.5 ? 1 : 0;
  }
  const Cn = (t, e) => {
    var _a3, _b3;
    return ((_b3 = (_a3 = t.units[e]) == null ? void 0 : _a3.stars) != null ? _b3 : 0) >= J0;
  };
  function Zn(t, e, s) {
    const n = t.units.find((r) => r.id === s);
    return n ? n.requires.every((r) => Cn(e, r)) : false;
  }
  const Si = (t, e) => t.units.every((s) => Cn(e, s.id));
  function td(t, e, s) {
    return t.units.filter((n) => !Zn(t, e, n.id) && Zn(t, s, n.id)).map((n) => n.id);
  }
  const sd = (t, e) => Object.fromEntries(t.units.map((s) => {
    var _a3, _b3;
    return [s.id, (_b3 = (_a3 = e.units[s.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0];
  })), nd = (t, e) => t.units.reduce((s, n) => {
    var _a3, _b3;
    return s + ((_b3 = (_a3 = e.units[n.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0);
  }, 0);
  function rd(t, e, s) {
    const n = yi(s), r = (i) => {
      const o = i != null ? i : Ln();
      return { stars: Math.max(o.stars, n), best: Math.max(o.best, s), rounds: o.rounds + 1 };
    };
    return e.boss ? { ...t, boss: r(t.boss) } : e.unitId ? { ...t, units: { ...t.units, [e.unitId]: r(t.units[e.unitId]) } } : t;
  }
  const id = (t, e) => t.includes(e) ? [...t] : [...t, e], od = (t, e) => t.filter((s) => s !== e), ad = (t, e, s) => {
    var _a3;
    return (_a3 = t.cards[e]) != null ? _a3 : pc(e, s);
  };
  function cd(t) {
    var _a3;
    const e = (_a3 = t.shells.encyclopedia) == null ? void 0 : _a3.data, s = typeof e == "object" && e !== null && !Array.isArray(e) ? e.glossOff : void 0;
    return new Set(Array.isArray(s) ? s.filter((n) => typeof n == "string") : []);
  }
  const X0 = (t) => JSON.stringify({ format: Ql, version: wi, pack: t.pack, progress: t }, null, 2), Ye = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Xt = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, t)) : n, ct = (t, e, s, n) => Math.round(Xt(t, e, s, n));
  function Un(t) {
    return Ye(t) ? { stars: ct(t.stars, 0, 3, 0), best: Xt(t.best, 0, 1, 0), rounds: ct(t.rounds, 0, 1e6, 0) } : Ln();
  }
  function eS(t, e) {
    if (!Ye(e)) return null;
    const s = pc(t, 0);
    return { id: t, ease: Xt(e.ease, 1.3, 5, s.ease), interval: Xt(e.interval, 0, 36500, 0), reps: ct(e.reps, 0, 1e4, 0), lapses: ct(e.lapses, 0, 1e4, 0), due: Xt(e.due, 0, 864e13, 0), last: typeof e.last == "number" && Number.isFinite(e.last) ? e.last : null };
  }
  function ld(t, e) {
    let s;
    try {
      s = JSON.parse(t);
    } catch (e2) {
      return { ok: false, error: "not JSON" };
    }
    if (!Ye(s)) return { ok: false, error: "not an object" };
    if ("format" in s && s.format !== Ql) return { ok: false, error: "wrong file format" };
    const n = Ye(s.progress) ? s.progress : s;
    if (n.version !== wi) return { ok: false, error: "unknown version ".concat(String(n.version)) };
    if (n.pack !== e.id) return { ok: false, error: 'it is for the course "'.concat(String(n.pack), '"') };
    const r = Ms(e.id), i = new Set(e.units.map((a) => a.id));
    if (Ye(n.units)) for (const [a, c] of Object.entries(n.units)) i.has(a) && (r.units[a] = Un(c));
    r.boss = Un(n.boss);
    const o = new Set(e.items.map((a) => a.id));
    if (Ye(n.cards)) for (const [a, c] of Object.entries(n.cards)) {
      if (!o.has(a)) continue;
      const l = eS(a, c);
      l && (r.cards[a] = l);
    }
    if (Array.isArray(n.queue) && (r.queue = [...new Set(n.queue.filter((a) => typeof a == "string" && o.has(a)))]), r.score = ct(n.score, 0, 1e9, 0), r.bestCombo = ct(n.bestCombo, 0, 1e5, 0), r.answered = ct(n.answered, 0, 1e9, 0), r.right = Math.min(r.answered, ct(n.right, 0, 1e9, 0)), Ye(n.settings) && (r.settings = { timer: n.settings.timer === true, sound: n.settings.sound !== false, reduceAudio: n.settings.reduceAudio === true, speak: n.settings.speak !== false, ...typeof n.settings.lang == "string" ? { lang: n.settings.lang } : {}, ...Qt(n.settings.name) ? { name: Qt(n.settings.name) } : {}, ...typeof n.settings.studentId == "string" && /^[A-Za-z0-9_-]{6,64}$/.test(n.settings.studentId) ? { studentId: n.settings.studentId } : {} }), n.playSeconds !== void 0 && (r.playSeconds = ct(n.playSeconds, 0, Xl, 0)), r.updatedAt = Xt(n.updatedAt, 0, 864e13, 0), Ye(n.shells)) for (const [a, c] of Object.entries(n.shells)) {
      if (!/^[a-z0-9][a-z0-9-]{0,40}$/.test(a) || !Ye(c)) continue;
      const l = ed();
      if (Ye(c.units)) for (const [d, h] of Object.entries(c.units)) i.has(d) && (l.units[d] = Un(h));
      if (l.boss = Un(c.boss), l.finished = c.finished === true, c.data !== void 0) try {
        const d = JSON.stringify(c.data);
        d !== void 0 && d.length <= Q0 && (l.data = JSON.parse(d));
      } catch (e2) {
      }
      r.shells[a] = l;
    }
    return { ok: true, progress: r };
  }
  const dd = (t) => t.answered > 0 || Object.keys(t.units).length > 0 || t.boss.rounds > 0, tS = (t, e) => {
    const s = t.shells[e];
    return !!s && (Object.keys(s.units).length > 0 || s.boss.rounds > 0 || s.finished || s.data !== void 0);
  }, $i = (t) => "edu-studio:progress:".concat(t);
  class ud {
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
        e = this.storage.getItem($i(this.pack.id));
      } catch (e2) {
        this.persistent = false;
      }
      if (!e) return Ms(this.pack.id);
      const s = ld(e, this.pack);
      return s.ok ? s.progress : Ms(this.pack.id);
    }
    save(e) {
      const s = JSON.stringify({ ...e, updatedAt: Date.now() });
      if (this.memory = s, !!this.storage) try {
        this.storage.setItem($i(this.pack.id), s);
      } catch (e2) {
        this.persistent = false;
      }
    }
    clear() {
      if (this.memory = null, !!this.storage) try {
        this.storage.removeItem($i(this.pack.id));
      } catch (e) {
        this.persistent = false;
      }
    }
  }
  function hd() {
    try {
      const t = window.localStorage, e = "__edu_probe__";
      return t.setItem(e, "1"), t.removeItem(e), t;
    } catch (e) {
      return null;
    }
  }
  const zi = (t) => H0(t.extensions), pd = (t, e) => {
    const s = zi(t);
    return !!s && Yl(t, s).includes(e);
  };
  function sS() {
    const t = new Uint8Array(12);
    try {
      crypto.getRandomValues(t);
    } catch (e) {
      for (let e2 = 0; e2 < t.length; e2++) t[e2] = Math.floor(Math.random() * 256);
    }
    return Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("");
  }
  const nS = (t) => t.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "student";
  function rS(t) {
    const e = new Date(t);
    return Number.isFinite(e.getTime()) ? e.toLocaleDateString() : t.slice(0, 10);
  }
  function iS(t) {
    var _a3;
    const e = zi(t.pack);
    let s = t.getProgress();
    const n = Qt(s.settings.name);
    if (!n) return t.say(t.ui("class.needName"), "bad");
    const r = (_a3 = s.settings.studentId) != null ? _a3 : sS();
    r !== s.settings.studentId && (s = { ...s, settings: { ...s.settings, studentId: r } }, t.setProgress(s), t.save());
    try {
      const i = Y0(t.pack, s, { name: n, id: r, ...e ? { assignmentId: e.id } : {} }), o = new Blob([JSON.stringify(i, null, 2)], { type: "application/json" }), a = URL.createObjectURL(o), c = u("a", { href: a, download: "".concat(t.pack.slug, "-").concat(nS(n), "-result.json"), class: "sr-only" });
      document.body.appendChild(c), c.click(), c.remove(), window.setTimeout(() => URL.revokeObjectURL(a), 2e3), t.say(t.ui("class.sent"), "ok");
    } catch (i) {
      t.say(String(i instanceof Error ? i.message : i), "bad");
    }
  }
  function oS(t) {
    var _a3;
    const e = zi(t.pack);
    if (!e) return null;
    const s = t.ui, n = Yl(t.pack, e), r = n.length === t.pack.units.length, i = s("class.target", { n: e.targetStars, units: r ? s("class.allUnits") : n.map((l) => t.unitTitle(l)).join(", ") }), o = u("input", { type: "text", class: "student-name-input", testid: "student-name", maxlength: String(bi), autocomplete: "off", value: (_a3 = t.getProgress().settings.name) != null ? _a3 : "", onchange: (l) => {
      const d = Qt(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...d ? { name: d } : { name: void 0 } } }), t.save();
    }, oninput: (l) => {
      const d = Qt(l.target.value), h = t.getProgress();
      t.setProgress({ ...h, settings: { ...h.settings, ...d ? { name: d } : { name: void 0 } } });
    } }), a = u("p", { class: "assignment-message", testid: "assignment-message" });
    e.message && (a.textContent = e.message);
    const c = u("h2", { class: "assignment-title" });
    return c.textContent = e.title, u("section", { class: "assignment-banner", testid: "assignment-banner", "aria-label": s("class.assignment") }, u("p", { class: "eyebrow" }, s("class.assignment")), c, u("p", { class: "assignment-target", testid: "assignment-target" }, i), e.due ? u("p", { class: "assignment-due", testid: "assignment-due" }, s("class.due", { date: rS(e.due) })) : null, e.message ? a : null, u("div", { class: "student-box" }, u("label", { class: "student-label" }, u("span", {}, s("class.yourName")), o), I("send-teacher", s("class.send"), () => iS(t), { class: "btn btn-small" })));
  }
  class fd {
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
      const e = this.get(), s = Math.min(Xl, ((_a3 = e.playSeconds) != null ? _a3 : 0) + this.pending);
      this.pending = 0, s !== e.playSeconds && (this.set({ ...e, playSeconds: s }), this.save());
    }
    dispose() {
      this.timer !== void 0 && window.clearInterval(this.timer), this.timer = void 0;
      for (const e of ["keydown", "pointerdown", "touchstart"]) document.removeEventListener(e, this.touch, true);
      this.flush();
    }
  }
  const aS = 0.4, cS = 0.3, md = 400, gd = 40, lS = 60, dS = { "level-up": ["level-up", "unit-complete"], "unit-complete": ["unit-complete", "level-up"] }, kd = ["pointerdown", "keydown", "touchstart"], _i = (t) => Math.min(1, Math.max(0, t));
  function bd(t) {
    var _a3;
    const e = (_a3 = t == null ? void 0 : t.audio) == null ? void 0 : _a3.loops, s = {};
    if (e && typeof e == "object") for (const [n, r] of Object.entries(e)) {
      const i = r;
      i && typeof i.startSec == "number" && typeof i.endSec == "number" && Number.isFinite(i.startSec) && Number.isFinite(i.endSec) && i.endSec > i.startSec && i.startSec >= 0 && (s[n] = { startSec: i.startSec, endSec: i.endSec });
    }
    return s;
  }
  class vd {
    constructor(e) {
      __publicField(this, "o");
      __publicField(this, "wanted", null);
      __publicField(this, "track", null);
      __publicField(this, "ducked", false);
      __publicField(this, "gesture");
      __publicField(this, "onGesture", () => this.resume());
      if (this.o = e, this.gesture = e.gestureTarget === void 0 ? typeof document < "u" ? document : null : e.gestureTarget, this.gesture) for (const s of kd) this.gesture.addEventListener(s, this.onGesture, { capture: true, passive: true });
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
      return _i(e.cueVolume * (this.ducked ? cS : 1));
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
      }, lS)), this.attempt(r), this.fadeTo(i, this.volumeOf(i), md);
    }
    stopTrack(e) {
      const s = this.track;
      if (s) {
        if (this.track = null, s.loopTimer && clearInterval(s.loopTimer), e) {
          s.fade && clearInterval(s.fade), s.el.pause();
          return;
        }
        this.fadeTo(s, 0, md, () => s.el.pause());
      }
    }
    setLevel(e, s) {
      e.level = _i(s), e.el.volume = e.level;
    }
    fadeTo(e, s, n, r) {
      e.fade && clearInterval(e.fade);
      const i = e.level, o = Math.max(1, Math.round(n / gd));
      let a = 0;
      e.fade = setInterval(() => {
        a++, this.setLevel(e, i + (s - i) * a / o), a >= o && (e.fade && clearInterval(e.fade), e.fade = void 0, r == null ? void 0 : r());
      }, gd);
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
      const n = (_a3 = dS[e]) != null ? _a3 : [e];
      for (const r of this.o.cues.filter((i) => n.includes(i.on) && !i.loop)) {
        const i = this.o.assets[r.asset];
        if (i) try {
          const o = this.create(i);
          o.volume = _i(r.volume * (s.reduceAudio ? aS : 1)), o.addEventListener("error", () => this.report(i)), this.attempt(o);
        } catch (e2) {
          this.report(i);
        }
      }
    }
    dispose() {
      if (this.wanted = null, this.stopTrack(true), this.gesture) for (const e of kd) this.gesture.removeEventListener(e, this.onGesture, { capture: true });
    }
  }
  const wd = (t) => typeof t == "object" && t !== null && !Array.isArray(t) ? t : {}, uS = (t, e) => t.replace(/\{\{([^}]+)\}\}/g, (s, n) => e(n));
  function Os(t, e) {
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
        return [uS(r(i.text), (a) => {
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
  function hS(t, e, s) {
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
        const r = t, i = wd(e), o = typeof e == "string" ? e : typeof i.x == "number" && typeof i.y == "number" ? vc(r, i.x, i.y) : void 0;
        return o && o !== r.answer ? n((_d2 = r.regions.find((a) => a.id === o)) == null ? void 0 : _d2.why) : [];
      }
      case "sort-groups": {
        const r = t, i = wd(e);
        return r.items.filter((o) => i[o.id] !== o.group).flatMap((o) => n(o.why));
      }
      default:
        return [];
    }
  }
  const pS = (t) => t === "order" ? "fb.detail.order" : t === "sort-groups" ? "fb.detail.sort" : t === "cloze" ? "fb.detail.gaps" : t === "conjugation" ? "fb.detail.forms" : t === "crossword" || t === "word-search" ? "fb.detail.words" : "fb.matched";
  function yd(t, e, s, n, r = false) {
    var _a3;
    const { text: i, ui: o } = n, a = r ? "timeout" : s.correct ? "correct" : s.partial ? "partial" : "wrong", c = o("praise.".concat(n.rng.randint(1, 5))), l = a === "correct" ? s.typo || s.diacritics || s.translit || s.caps ? o("verdict.correct") : c : o(a === "timeout" ? "verdict.timeout" : a === "partial" ? "verdict.partial" : "verdict.wrong"), d = Os(t, n), h = [], p = typeof s.expected == "string" ? s.expected : d.join(" ");
    s.typo && h.push(o("fb.typo", { a: p })), s.diacritics && h.push(o(s.correct ? "fb.accents" : "fb.accents.strict", { a: p })), s.translit && h.push(o("fb.note.translit", { a: p })), s.caps && h.push(o("fb.note.caps", { a: p }));
    const f = s.detail && !s.correct && !r ? Object.values(s.detail) : void 0;
    return { verdict: a, title: l, whys: s.correct || r ? [] : hS(t, e, i), explanation: (_a3 = i.text(t.explanation)) != null ? _a3 : "", answer: s.correct && t.kind !== "flashcard" && !(t.kind === "order" && t.timeline) ? [] : d, ...s.correct && t.didYouKnow && i.hasText(t.didYouKnow) ? { dyk: i.t(t.didYouKnow) } : {}, notes: h, ...f && f.length > 1 ? { detail: o(pS(t.kind), { n: f.filter(Boolean).length, total: f.length }) } : {} };
  }
  const fS = /^https?:\/\/(127\.0\.0\.1|localhost|\[::1\])(:\d{1,5})?(\/.*)?$/i, mS = B({ enabled: J().optional(), whisperUrl: x().regex(fS).optional() });
  function gS(t, e) {
    const s = t == null ? void 0 : t.speaking, n = mS.safeParse(s && typeof s == "object" ? s : {}), r = n.success ? n.data : {}, i = e ? r.enabled !== false : false;
    return { enabled: i, ...i && r.whisperUrl ? { whisperUrl: r.whisperUrl } : {} };
  }
  function kS(t) {
    var _a3;
    const e = t;
    return (_a3 = e.SpeechRecognition) != null ? _a3 : e.webkitSpeechRecognition;
  }
  function bS(t, e) {
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
  const ji = 16e3;
  function vS(t) {
    var _a3;
    const e = t[0];
    if (!e) return new Float32Array(0);
    if (t.length === 1) return e;
    const s = new Float32Array(e.length);
    for (const n of t) for (let r = 0; r < s.length; r++) s[r] = s[r] + ((_a3 = n[r]) != null ? _a3 : 0);
    for (let n = 0; n < s.length; n++) s[n] = s[n] / t.length;
    return s;
  }
  function wS(t, e, s) {
    if (e === s || t.length === 0) return t;
    const n = Math.max(1, Math.round(t.length * s / e)), r = new Float32Array(n), i = e / s;
    for (let o = 0; o < n; o++) {
      const a = o * i, c = Math.min(Math.floor(a), t.length - 1), l = Math.min(c + 1, t.length - 1), d = a - c;
      r[o] = t[c] * (1 - d) + t[l] * d;
    }
    return r;
  }
  function yS(t, e) {
    const s = wS(vS(t), e, ji), n = s.length * 2, r = new ArrayBuffer(44 + n), i = new DataView(r), o = (a, c) => {
      for (let l = 0; l < c.length; l++) i.setUint8(a + l, c.charCodeAt(l));
    };
    o(0, "RIFF"), i.setUint32(4, 36 + n, true), o(8, "WAVE"), o(12, "fmt "), i.setUint32(16, 16, true), i.setUint16(20, 1, true), i.setUint16(22, 1, true), i.setUint32(24, ji, true), i.setUint32(28, ji * 2, true), i.setUint16(32, 2, true), i.setUint16(34, 16, true), o(36, "data"), i.setUint32(40, n, true);
    for (let a = 0; a < s.length; a++) {
      const c = Math.max(-1, Math.min(1, s[a]));
      i.setInt16(44 + a * 2, c < 0 ? c * 32768 : c * 32767, true);
    }
    return new Uint8Array(r);
  }
  class Ns extends Error {
    constructor(e, s) {
      super(s);
      __publicField(this, "code");
      this.code = e;
    }
  }
  async function SS(t, e, s, n = {}) {
    var _a3, _b3;
    const r = (_a3 = n.fetchImpl) != null ? _a3 : fetch, i = new AbortController(), o = setTimeout(() => i.abort(), (_b3 = n.timeoutMs) != null ? _b3 : 3e4);
    try {
      const a = t.replace(/\/+$/, ""), c = "".concat(/\/stt$/.test(a) ? a : "".concat(a, "/stt"), "?lang=").concat(encodeURIComponent(s)), l = await r(c, { method: "POST", headers: { "content-type": "audio/wav" }, body: e, signal: i.signal });
      if (!l.ok) throw new Ns("failed", "the speech endpoint answered ".concat(l.status));
      const d = await l.json();
      if (typeof d.text != "string") throw new Ns("failed", "the speech endpoint sent no text");
      return d.text.trim();
    } catch (a) {
      throw a instanceof Ns ? a : new Ns("unavailable", a instanceof Error ? a.message : String(a));
    } finally {
      clearTimeout(o);
    }
  }
  const $S = 3e4;
  function zS(t) {
    var _a3, _b3, _c2;
    const e = t;
    return !!((_a3 = e.AudioContext) != null ? _a3 : e.webkitAudioContext) && !!((_c2 = (_b3 = t.navigator) == null ? void 0 : _b3.mediaDevices) == null ? void 0 : _c2.getUserMedia);
  }
  function _S(t) {
    const e = new Float32Array(t.reduce((n, r) => n + r.length, 0));
    let s = 0;
    for (const n of t) e.set(n, s), s += n.length;
    return e;
  }
  function jS(t, e, s) {
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
          const k = await SS(e, yS([_S(o)], m), s);
          k && n.onText(k), k ? n.onState("idle") : n.onState("error", "no-speech");
        } catch (k) {
          n.onState("error", k instanceof Ns ? k.code : "failed");
        }
      };
      return (async () => {
        try {
          if (a = await t.navigator.mediaDevices.getUserMedia({ audio: true }), h) return p();
          c = new i();
          const m = c.createMediaStreamSource(a);
          l = c.createScriptProcessor(4096, 1, 1), l.onaudioprocess = (k) => {
            h || o.push(new Float32Array(k.inputBuffer.getChannelData(0)));
          }, m.connect(l), l.connect(c.destination), d = setTimeout(() => {
            f();
          }, $S);
        } catch (m) {
          h = true, p(), n.onState("error", m.name === "NotAllowedError" ? "denied" : "unavailable");
        }
      })(), n.onState("listening"), { stop: () => {
        f();
      } };
    } };
  }
  function Sd(t, e, s) {
    const n = gS(e, s);
    if (!n.enabled || !s) return;
    if (n.whisperUrl && zS(t)) return jS(t, n.whisperUrl, s);
    const r = kS(t);
    return r ? bS(r, s) : void 0;
  }
  const xS = 2, ES = 7, AS = 10, TS = 30, xi = (t, e, s, n) => typeof t == "number" && Number.isFinite(t) ? Math.min(s, Math.max(e, Math.round(t))) : n;
  function Ei(t) {
    var _a3;
    const e = (_a3 = t.shells.config["quiz-arena"]) != null ? _a3 : {};
    return { roundLength: xi(e.roundLength, 3, 12, ES), bossLength: xi(e.bossLength, 4, 20, AS), timerSeconds: xi(e.timerSeconds, 5, 120, TS) };
  }
  function Ai(t, e) {
    const s = new Set(cn(t, e).map((n) => n.id));
    return t.items.filter((n) => s.has(n.objective));
  }
  const $d = (t, e) => {
    var _a3;
    const s = t.items.find((n) => n.id === e);
    return (_a3 = t.objectives.find((n) => n.id === (s == null ? void 0 : s.objective))) == null ? void 0 : _a3.unit;
  };
  function IS(t) {
    var _a3, _b3;
    const e = (_b3 = (_a3 = t.extensions) == null ? void 0 : _a3.language) == null ? void 0 : _b3.verbUnits;
    return Array.isArray(e) ? e.filter((s) => typeof s == "string") : [];
  }
  function Ti(t) {
    const e = new Set(IS(t));
    if (e.size === 0) return [];
    const s = new Set(t.objectives.filter((n) => e.has(n.unit)).map((n) => n.id));
    return t.items.filter((n) => n.kind === "conjugation" && s.has(n.objective));
  }
  function zd(t, e, s) {
    return Ti(t).filter((n) => Fn(e[n.id], s)).length;
  }
  function MS(t, e, s, n) {
    const r = Ti(t), i = r.filter((l) => Fn(e[l.id], s)).sort((l, d) => e[l.id].due - e[d.id].due), o = r.filter((l) => e[l.id] === void 0 || e[l.id].last === null), a = new Set([...i, ...o].map((l) => l.id)), c = r.filter((l) => !a.has(l.id)).sort((l, d) => e[l.id].ease - e[d.id].ease);
    return [...i, ...o, ...c].slice(0, Math.max(0, n)).map((l) => l.id);
  }
  function OS(t, e, s = {}) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    const n = Ei(t), r = (_a3 = s.exclude) != null ? _a3 : /* @__PURE__ */ new Set();
    let i, o;
    if (e === "unit") i = Ai(t, (_b3 = s.unitId) != null ? _b3 : "").map((a) => a.id).filter((a) => !r.has(a)), o = Math.min(n.roundLength, i.length);
    else if (e === "verbs") i = MS(t, (_c2 = s.cards) != null ? _c2 : {}, (_d2 = s.now) != null ? _d2 : 0, n.roundLength), o = i.length;
    else if (e === "boss") i = t.items.map((a) => a.id).filter((a) => !r.has(a)), o = Math.min(n.bossLength, i.length);
    else {
      const a = new Set(t.items.map((c) => c.id));
      i = ((_e2 = s.queue) != null ? _e2 : []).filter((c) => a.has(c) && !r.has(c)), o = Math.min(n.roundLength, i.length);
    }
    return { kind: e, ...s.unitId ? { unitId: s.unitId } : {}, size: o, pool: i, asked: [], session: mc(), adaptive: _c((_f2 = s.difficulty) != null ? _f2 : e === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  function NS(t, e = {}) {
    var _a3, _b3, _c2;
    const s = [...new Set(t)], n = (_a3 = e.kind) != null ? _a3 : "unit";
    return { kind: n, ...e.unitId ? { unitId: e.unitId } : {}, size: Math.max(0, Math.min((_b3 = e.size) != null ? _b3 : s.length, s.length)), pool: s, asked: [], session: mc(), adaptive: _c((_c2 = e.difficulty) != null ? _c2 : n === "boss" ? 4 : 3), results: [], dueTaken: 0 };
  }
  const Fn = (t, e) => t !== void 0 && t.last !== null && t.due <= e;
  function _d(t, e, s, n, r) {
    const i = new Map(e.items.map((l) => [l.id, l])), o = t.results.at(-1), a = t.session.pending.filter((l) => l.dueAt <= t.session.answered && l.id !== (o == null ? void 0 : o.id)).sort((l, d) => l.dueAt - d.dueAt)[0];
    if (a) return { id: a.id, retry: true };
    if (t.asked.length < t.size && t.pool.length > 0) {
      let l = t.pool.map((m) => i.get(m)).filter((m) => m !== void 0);
      const d = l.filter((m) => Fn(n[m.id], r));
      d.length > 0 && t.dueTaken < Math.ceil(t.size / 2) && (l = d);
      const h = o ? i.get(o.id) : void 0, p = h ? l.filter((m) => m.id === h.id || m.kind === h.kind || t.kind === "boss" && $d(e, m.id) === $d(e, h.id)).map((m) => m.id) : [], f = t.kind === "verbs" ? l[0] : Mb(l.map((m) => ({ id: m.id, difficulty: m.difficulty })), t.adaptive, s, p);
      if (f) return { id: f.id, retry: false };
    }
    const c = [...t.session.pending].sort((l, d) => l.dueAt - d.dueAt)[0];
    return c ? { id: c.id, retry: true } : null;
  }
  function Ii(t, e, s, n, r, i = {}, o = 0) {
    var _a3;
    let a = tb(t.session, e.id, r);
    ((_a3 = a.misses[e.id]) != null ? _a3 : 0) > xS && (a = { ...a, pending: a.pending.filter((l) => l.id !== e.id) });
    const c = !e.retry;
    return { ...t, session: a, adaptive: Ib(t.adaptive, n.correct), pool: c ? t.pool.filter((l) => l !== e.id) : t.pool, asked: c ? [...t.asked, e.id] : t.asked, dueTaken: c && Fn(i[e.id], o) ? t.dueTaken + 1 : t.dueTaken, results: [...t.results, { id: e.id, kind: s.kind, retry: e.retry, correct: n.correct, score: n.score, grade: r }] };
  }
  function Mi(t) {
    const e = t.results.filter((s) => !s.retry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n.score, 0) / e.length;
  }
  const Oi = (t) => [...new Set(t.results.filter((e) => !e.retry && !e.correct).map((e) => e.id))];
  function jd(t, e, s) {
    return t.kind === "flashcard" && uc(e) ? e : s.correct ? s.partial || s.typo || s.diacritics ? "hard" : "good" : t.kind === "conjugation" && s.partial && s.score >= 0.5 ? "hard" : "again";
  }
  function PS(t) {
    var _a3;
    return t.kind === "flashcard" || t.kind === "crossword" || t.kind === "word-search" || t.kind === "typed" || t.kind === "conjugation" ? false : t.kind === "listening" ? t.mode !== "type" : t.kind === "cloze" ? ((_a3 = t.gaps) != null ? _a3 : []).every((e) => e.bank !== void 0) : true;
  }
  function xd(t) {
    const e = t.screen === "item" || t.screen === "feedback";
    return { screen: t.screen, shell: t.shell, lang: t.lang, seed: t.seed, ...t.unitId ? { unitId: t.unitId } : {}, ...t.roundNumber !== void 0 && t.roundNumber > 0 ? { round: t.roundNumber } : {}, ...t.roundKind ? { roundKind: t.roundKind } : {}, ...e && t.itemId ? { itemId: t.itemId } : {}, ...e && t.itemKind ? { itemKind: t.itemKind } : {}, ...e && t.itemIndex !== void 0 ? { itemIndex: t.itemIndex } : {}, ...t.roundSize !== void 0 && t.roundKind ? { roundSize: t.roundSize } : {}, combo: t.combo, score: t.score, ...t.lastResult && t.screen === "feedback" ? { lastResult: { correct: t.lastResult.correct, ...t.lastResult.typo ? { typo: true } : {}, ...t.lastResult.diacritics ? { diacritics: true } : {} } } : {}, reviewQueue: [...t.reviewQueue], mastery: { ...t.mastery }, finished: t.finished, steps: t.steps, ...e && t.context ? { context: t.context } : {}, ...t.view ? { view: JSON.parse(JSON.stringify(t.view)) } : {} };
  }
  function Ed(t, e, s) {
    var _a3, _b3, _c2;
    const n = (_c2 = (_b3 = t[e]) != null ? _b3 : t[(_a3 = e.split("-")[0]) != null ? _a3 : ""]) != null ? _c2 : {};
    return (r, i) => {
      var _a4, _b4, _c3;
      let o = (_c3 = (_b4 = (_a4 = s == null ? void 0 : s.strings["ui.".concat(r)]) != null ? _a4 : n[r]) != null ? _b4 : t.en[r]) != null ? _c3 : r;
      if (i) for (const [a, c] of Object.entries(i)) o = o.split("{".concat(a, "}")).join(String(c));
      return o;
    };
  }
  function RS(t, e, s, n) {
    return e ? u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: "setting-speak", ...s ? { checked: true } : {}, onchange: (r) => n(r.target.checked) }), u("span", { class: "toggle-text" }, u("b", {}, t("speak.setting")), u("small", { testid: "speak-privacy" }, t(e.kind === "whisper" ? "speak.privacy.local" : "speak.privacy.web")))) : null;
  }
  const Ze = (t, e = {}) => ue("path", { d: t, ...e }), Ad = (t, e, s, n = {}) => ue("circle", { cx: t, cy: e, r: s, ...n }), DS = { "quiz-arena": () => [Ad(16, 17, 11), Ze("M16 10v7l4 3"), Ze("M13 3h6")], encyclopedia: () => [Ze("M16 8c-3-2-7-2.5-11-2v18c4-.5 8 0 11 2 3-2 7-2.5 11-2V6c-4-.5-8 0-11 2z"), Ze("M16 8v18")], mindmaze: () => [Ze("M5 27V9h4v3h4V9h6v3h4V9h4v18z"), Ze("M13 27v-7a3 3 0 0 1 6 0v7")], rpg: () => [Ze("M7 25 22 10l3-6 3 3-6 3L7 25"), Ze("M5 27l3-3M9 21l3 3")], roleplay: () => [Ze("M4 6h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H11l-4 4v-4H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"), Ze("M24 12h2a2 2 0 0 1 2 2v7a1 1 0 0 1-1 1h-3v3l-4-3h-5")], detective: () => [Ad(13, 13, 8), Ze("M19 19l9 9")] };
  function LS(t) {
    var _a3, _b3;
    const e = ue("svg", { viewBox: "0 0 32 32", width: 32, height: 32, fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", focusable: "false", class: "mode-icon" }), s = (_b3 = (_a3 = DS[t]) == null ? void 0 : _a3.call(DS)) != null ? _b3 : [Ze("M16 4l3.7 7.8 8.3 1-6.1 5.8 1.6 8.4L16 22.8 8.5 27l1.6-8.4L4 12.8l8.3-1z")];
    for (const n of s) e.appendChild(n);
    return e;
  }
  const CS = "menu";
  function Bn(t, e, s) {
    const n = e === "title" ? CS : s;
    t.getAttribute("data-edu-theme") !== n && t.setAttribute("data-edu-theme", n);
  }
  const ZS = (t) => {
    try {
      const e = new Intl.DisplayNames([t], { type: "language" }).of(t);
      return e ? e.charAt(0).toLocaleUpperCase(t) + e.slice(1) : t.toUpperCase();
    } catch (e) {
      return t.toUpperCase();
    }
  }, Ni = (t, e) => {
    const s = t(e);
    return s && s !== e ? s : void 0;
  }, US = (t, e) => {
    var _a3;
    return (_a3 = Ni(t, "mode.".concat(e, ".name"))) != null ? _a3 : e;
  }, es = () => ({ confirmReset: false, message: null });
  function FS(t) {
    if (t.shells.length < 2) return null;
    const e = t.ui;
    return u("div", { class: "mode-picker", role: "group", "aria-label": e("start.choose"), testid: "shell-picker" }, u("p", { class: "mode-picker-label", "aria-hidden": "true" }, e("start.choose")), u("div", { class: "mode-grid" }, t.shells.map((s) => {
      var _a3;
      return I("shell-".concat(s), [u("span", { class: "mode-pictogram" }, LS(s)), u("span", { class: "mode-text" }, u("b", { class: "mode-name" }, US(e, s)), u("small", { class: "mode-blurb" }, (_a3 = Ni(e, "mode.".concat(s, ".blurb"))) != null ? _a3 : "")), u("span", { class: "mode-dot", "aria-hidden": "true" })], () => {
        s !== t.shellId && t.switchShell(s);
      }, { class: "mode-card", "data-mode": s, "aria-pressed": String(s === t.shellId) });
    })));
  }
  function Td(t, e, s, n, r) {
    return u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: t, ...n ? { checked: true } : {}, onchange: (i) => r(i.target.checked) }), u("span", { class: "toggle-text" }, u("b", {}, e), s ? u("small", {}, s) : null));
  }
  function Id(t, e, s, n) {
    var _a3, _b3;
    const r = t.ui, i = t.pack, o = t.courseTitle(), a = (S, _) => {
      n.message = { text: S, kind: _ }, s();
    }, c = (S) => {
      t.progress = { ...t.progress, settings: { ...t.progress.settings, ...S } }, t.save();
    }, l = i.languages.length > 1 ? u("div", { class: "lang-picker", role: "group", "aria-label": r("language"), testid: "lang-picker" }, i.languages.map((S) => I("lang-".concat(S), ZS(S), () => {
      t.setLang(S), s();
    }, { class: "chip", "aria-pressed": String(S === t.lang), lang: S }))) : null, d = i.cues.length ? Td("setting-sound", r("sound"), null, !!t.progress.settings.sound, (S) => {
      c({ sound: S }), t.refreshAudio();
    }) : null, h = i.cues.length ? Td("setting-reduce-audio", r("reduceAudio"), r("reduceAudio.hint"), !!t.progress.settings.reduceAudio, (S) => {
      c({ reduceAudio: S }), t.refreshAudio();
    }) : null, p = RS(r, t.speechService, t.progress.settings.speak !== false, (S) => c({ speak: S })), f = u("input", { type: "file", accept: "application/json,.json", class: "sr-only", testid: "import-file", tabindex: "-1", "aria-label": r("import"), onchange: (S) => {
      var _a4;
      const _ = (_a4 = S.target.files) == null ? void 0 : _a4[0];
      _ && _.text().then((w) => {
        const A = ld(w, i);
        if (!A.ok) return a(r("import.bad", { why: A.error }), "bad");
        t.progress = A.progress, t.save();
        const j = A.progress.settings.lang;
        j && i.languages.includes(j) && j !== t.lang && t.setLang(j), a(r("import.ok"), "ok");
      }, () => a(r("import.bad", { why: "unreadable" }), "bad"));
    } }), m = () => {
      try {
        const S = new Blob([X0(t.progress)], { type: "application/json" }), _ = URL.createObjectURL(S), w = u("a", { href: _, download: "".concat(i.slug, "-progress.json"), class: "sr-only" });
        document.body.appendChild(w), w.click(), w.remove(), window.setTimeout(() => URL.revokeObjectURL(_), 2e3), a(r("export.done"), "ok");
      } catch (S) {
        a(String(S instanceof Error ? S.message : S), "bad");
      }
    }, k = n.confirmReset ? u("span", { class: "confirm", role: "group", "aria-label": r("reset.confirm") }, u("span", {}, r("reset.confirm")), I("reset-confirm", r("reset.yes"), () => {
      t.reset(), n.confirmReset = false, a(r("reset.done"), "ok");
    }, { class: "btn btn-danger btn-small" }), I("reset-cancel", r("reset.no"), () => {
      n.confirmReset = false, s();
    }, { class: "btn btn-small", "data-autofocus": "" })) : I("reset", r("reset"), () => {
      n.confirmReset = true, s();
    }, { class: "btn btn-small btn-ghost" }), g = i.subject.charAt(0).toLocaleUpperCase() + i.subject.slice(1), b = n.message;
    n.message = null;
    const v = e.settings || d || h || p ? u("div", { class: "settings" }, (_a3 = e.settings) != null ? _a3 : null, d, h, p) : null, $ = Ni(r, "mode.".concat(t.shellId, ".blurb"));
    return u("section", { class: "title-screen start-screen shell-title shell-title-".concat(t.shellId) }, u("header", { class: "start-head" }, $ ? u("p", { class: "eyebrow", testid: "mode-blurb" }, $) : null, u("h1", { class: "screen-title", tabindex: "-1", testid: "course-title" }, o), o.toLocaleLowerCase() === i.subject.toLocaleLowerCase() ? null : u("p", { class: "subject", testid: "course-subject" }, g), u("p", { class: "audience" }, i.audience)), oS({ pack: i, ui: r, unitTitle: (S) => t.unitTitle(S), getProgress: () => t.progress, setProgress: (S) => {
      t.progress = S;
    }, save: () => t.save(), say: a }), l, FS(t), v, u("div", { class: "actions actions-center" }, I("start", (_b3 = e.startLabel) != null ? _b3 : t.started ? r("continue") : r("start"), () => e.onStart(), { class: "btn btn-primary btn-big", ...n.confirmReset ? {} : { "data-autofocus": "" } })), u("div", { class: "progress-tools", role: "group", "aria-label": r("export") + " / " + r("import") }, I("export", r("export"), m, { class: "btn btn-small btn-ghost" }), I("import", r("import"), () => f.click(), { class: "btn btn-small btn-ghost" }), f, k), b ? u("p", { class: "message message-".concat(b.kind), role: "status", testid: "title-message" }, b.text) : null, t.persistent ? null : u("p", { class: "message message-bad", testid: "storage-warning" }, r("storage.off")));
  }
  const BS = (t, e) => {
    var _a3;
    const s = t.pack.languages;
    if (e && s.includes(e)) return e;
    const n = (typeof navigator < "u" ? (_a3 = navigator.languages) != null ? _a3 : [navigator.language] : []).map((r) => r.toLowerCase());
    for (const r of n) {
      const i = s.find((o) => o === r || o === r.split("-")[0]);
      if (i) return i;
    }
    return s.includes(t.defaultLang) ? t.defaultLang : s[0];
  }, KS = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]);
  function qS(t, e) {
    return t === "end" ? "end" : e.roundKind === "boss" ? "boss" : t !== "title" && e.roundKind !== "review" && e.unitId ? "unit-".concat(e.unitId) : "menu";
  }
  class Ps {
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
      __publicField(this, "playTimer", new fd(() => this.progress, (e) => {
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
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.shellId = s.shellId, this.theme = s.theme, this.strings = s.strings, this.store = new ud(this.pack, hd()), this.progress = this.store.load(), this.rng = Bt(e.seed, s.shellId), this.lang = BS(this.data, this.progress.settings.lang), this.text = qt(this.data.catalogs, this.lang, this.pack.targetLang), this.ui = Ts(this.lang, this.data.catalogs[this.lang]), this.s = Ed(this.strings, this.lang, this.data.catalogs[this.lang]), this.check = Kt({ pack: this.pack, text: this.text }), this.applyLang();
    }
    mount() {
      const e = this.host.root;
      e.classList.add("edu-stage"), Bn(e, "title", this.theme), e.setAttribute("data-shell", this.shellId), document.addEventListener("keydown", this.onKey), this.playTimer.start();
    }
    get audio() {
      return this.gameAudio || (this.gameAudio = new vd({ cues: this.pack.cues, assets: this.data.assets, loops: bd(this.pack.extensions), settings: () => this.progress.settings })), this.gameAudio;
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
      this.pack.languages.includes(e) && (this.lang = e, this.text = qt(this.data.catalogs, e, this.pack.targetLang), this.ui = Ts(e, this.data.catalogs[e]), this.s = Ed(this.strings, e, this.data.catalogs[e]), this.check = Kt({ pack: this.pack, text: this.text }), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.applyLang());
    }
    t(e) {
      return e ? this.text.t(e) : "";
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    section() {
      return u0(this.pack, this.shellId);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Sd(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    get specialLetters() {
      var _a3, _b3;
      return (_b3 = Cl[(_a3 = this.pack.targetLang) != null ? _a3 : this.lang]) != null ? _b3 : [];
    }
    save() {
      this.store.save(this.progress);
    }
    get sp() {
      var _a3;
      return (_a3 = this.progress.shells[this.shellId]) != null ? _a3 : ed();
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
      return tS(this.progress, this.shellId) || dd(this.progress);
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
      return Cn(this.view(), e);
    }
    isUnlocked(e) {
      return Zn(this.pack, this.view(), e);
    }
    allMastered() {
      return Si(this.pack, this.view());
    }
    totalStars() {
      return nd(this.pack, this.view());
    }
    mastery() {
      return sd(this.pack, this.view());
    }
    recordUnit(e, s) {
      const n = this.view(), r = rd(n, "boss" in e ? { boss: true } : { unitId: e.unitId }, s);
      return this.setSp({ ...this.sp, units: r.units, boss: r.boss }), { stars: yi(s), unlocked: td(this.pack, n, r) };
    }
    finish() {
      this.finished = true, this.setSp({ ...this.sp, finished: true });
    }
    units() {
      return At(this.pack.units).map((e) => this.pack.units.find((s) => s.id === e));
    }
    unitTitle(e) {
      var _a3;
      return this.t((_a3 = this.pack.units.find((s) => s.id === e)) == null ? void 0 : _a3.title);
    }
    item(e) {
      return this.pack.items.find((s) => s.id === e);
    }
    itemsOfUnit(e) {
      return Ai(this.pack, e);
    }
    canAsk(e) {
      return !!e && !!this.host.getItemRenderer(e.kind) && !Wl(e, cd(this.progress));
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
      const r = n.retry === true, i = n.timedOut === true, o = i ? hn(e, void 0, this.check) : hn(e, s, this.check), a = jd(e, s, o), c = Date.now(), l = this.progress;
      let d = l.queue;
      o.correct ? r || (d = od(d, e.id)) : d = id(d, e.id);
      let h = Math.round(100 * o.score);
      o.correct ? (h += Math.min(this.combo, 10) * 10, r && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.steps += 1, this.progress = { ...l, cards: { ...l.cards, [e.id]: fc(ad(l, e.id, c), a, c) }, queue: d, score: l.score + h, bestCombo: Math.max(l.bestCombo, this.combo), answered: l.answered + (r ? 0 : 1), right: l.right + (!r && o.correct ? 1 : 0) }, this.save();
      const p = yd(e, s, o, { text: this.text, ui: this.ui, rng: this.rng }, i);
      return { item: e, answer: s, result: o, grade: a, points: h, feedback: p, retry: r, timedOut: i };
    }
    startRun(e, s = {}) {
      const n = e.filter((r) => this.canAsk(this.item(r)));
      return NS(n, s);
    }
    next(e) {
      return _d(e, this.pack, this.rng, this.progress.cards, Date.now());
    }
    record(e, s, n) {
      return Ii(e, s, n.item, n.result, n.grade, this.progress.cards, Date.now());
    }
    accuracy(e) {
      return Mi(e);
    }
    publish(e = this.screen, s = this.extra) {
      var _a3, _b3;
      this.screen = e, this.extra = s, this.pack.cues.length && this.audio.setArea(qS(e, s)), this.host.publish(xd({ screen: e, shell: this.shellId, lang: this.lang, seed: this.host.seed, ...s.roundKind ? { roundKind: s.roundKind, roundSize: (_a3 = s.roundSize) != null ? _a3 : 0, ...s.roundNumber ? { roundNumber: s.roundNumber } : {} } : {}, ...s.unitId ? { unitId: s.unitId } : {}, ...s.item ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: (_b3 = s.item.index) != null ? _b3 : 0 } : {}, ...s.lastResult ? { lastResult: s.lastResult } : {}, ...s.context ? { context: s.context } : {}, ...s.view ? { view: s.view } : {}, combo: this.combo, score: this.progress.score, reviewQueue: this.progress.queue, mastery: this.mastery(), finished: this.finished, steps: this.steps }));
    }
    render(e, s, n = {}, r = {}) {
      var _a3, _b3;
      const i = this.host.root;
      Bn(i, e, this.theme), xs(i);
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
    const o = (E) => i ? i.outcome ? i.outcome.result : w(E) : { correct: false, score: 0, expected: null, invalid: true }, a = n.render(t.itemContext(s, o)), c = (E) => {
      var _a4, _b4;
      return { context: e.context, item: { id: s.id, kind: s.kind, index: (_a4 = e.index) != null ? _a4 : 0 }, ...e.unitId ? { unitId: e.unitId } : {}, ...e.roundKind ? { roundKind: e.roundKind, roundSize: (_b4 = e.roundSize) != null ? _b4 : 0 } : {}, ...e.view ? { view: e.view() } : {}, ...E ? { lastResult: E.result } : {} };
    }, l = s.hint && t.text.hasText(s.hint) ? t.text.t(s.hint) : null;
    let d = false;
    const h = u("p", { class: "hint-text", testid: "hint-text", hidden: true }, l != null ? l : ""), p = l ? I("hint", "💡 ".concat(r("hint")), () => {
      d = !d, h.hidden = !d, p == null ? void 0 : p.setAttribute("aria-expanded", String(d));
    }, { class: "btn btn-small btn-ghost", "aria-expanded": "false" }) : null, f = e.onLeave ? I("leave", "‹ ".concat((_a3 = e.leaveLabel) != null ? _a3 : r("leave")), () => {
      var _a4;
      i == null ? void 0 : i.close(), (_a4 = e.onLeave) == null ? void 0 : _a4.call(e);
    }, { class: "btn btn-small btn-ghost" }) : null, m = u("p", { class: "q-meta", testid: "question-number" }, e.retry ? u("span", { class: "tag tag-retry", testid: "retry-tag" }, r("retry")) : null, (_b3 = e.lead) != null ? _b3 : null), k = n.ownsPrompt ? u("h1", { class: "sr-only" }, typeof e.lead == "string" ? e.lead : r("question.lead")) : u("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, t.text.t(s.prompt)), g = t.itemContext(s, o), b = KS.has(s.kind) ? null : Ul(g), v = u("div", { class: "item-body kind-".concat(s.kind), testid: "item-body", "data-kind": s.kind }, a.el), $ = u("div", { class: "feedback-slot", "aria-live": "polite" }), S = u("section", { class: "question shell-question context-".concat(e.context), "aria-label": t.text.t(s.prompt) }, f || e.hud ? u("header", { class: "shell-hud" }, f, (_c2 = e.hud) != null ? _c2 : null) : null, m, k, b, p, h, v, $), _ = () => {
      var _a4;
      t.questionKeys === R && (t.questionKeys = null), (_a4 = a.destroy) == null ? void 0 : _a4.call(a);
    };
    function w(E) {
      var _a4;
      const z = i, T = t.answer(s, E, { retry: e.retry === true });
      return z.outcome = T, a.reveal(T.result, E), (_a4 = e.onAnswered) == null ? void 0 : _a4.call(e, T), A(T), t.playCue(T.result.correct ? "correct" : "wrong"), T.result;
    }
    function A(E) {
      var _a4, _b4, _c3, _d3;
      const z = E.feedback, T = (_b4 = (_a4 = e.effect) == null ? void 0 : _a4.call(e, E)) != null ? _b4 : null, D = (H, he, ve, ...$e) => u("div", { class: "fb-part ".concat(H), testid: he }, u("h3", {}, ve), $e), K = typeof e.nextLabel == "function" ? e.nextLabel(E) : (_c3 = e.nextLabel) != null ? _c3 : r("next"), F = u("div", { class: "feedback is-".concat(z.verdict), testid: "feedback", "data-result": z.verdict, tabindex: "-1" }, u("h2", { class: "fb-title", testid: "feedback-title" }, u("span", { class: "fb-icon", "aria-hidden": "true" }, z.verdict === "correct" ? "✓" : z.verdict === "partial" ? "≈" : z.verdict === "timeout" ? "⏱" : "✗"), z.title), T ? u("p", { class: "fb-effect is-".concat(T.tone), testid: "feedback-effect" }, T.text) : null, z.notes.length ? u("ul", { class: "fb-notes", testid: "feedback-notes" }, z.notes.map((H) => u("li", {}, H))) : null, z.detail ? u("p", { class: "fb-detail", testid: "feedback-detail" }, z.detail) : null, z.whys.length ? D("fb-why", "feedback-why", r("fb.why"), z.whys.map((H) => u("p", {}, H))) : null, z.answer.length ? D("fb-answer", "feedback-answer", r("fb.answer"), z.answer.length === 1 ? u("p", { class: "fb-answer-text" }, z.answer[0]) : u("ul", {}, z.answer.map((H) => u("li", {}, H)))) : null, z.explanation ? D("fb-explain", "feedback-explanation", r("fb.explain"), u("p", {}, z.explanation)) : null, z.dyk ? D("fb-dyk", "feedback-dyk", "💡 ".concat(r("fb.dyk")), u("p", {}, z.dyk)) : null, u("div", { class: "actions" }, I("next", K, () => O(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      $.appendChild(F), v.classList.add("is-answered"), t.markScreen("feedback"), t.publish("feedback", c(E)), t.live("".concat(z.title, ". ").concat(T ? "".concat(T.text, " ") : "").concat(z.whys.join(" "), " ").concat(z.answer.join(". "))), As(v, E.result.correct ? "fx-glow" : "fx-shake"), typeof F.scrollIntoView == "function" && F.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_d3 = t.host.root.querySelector('[data-testid="next"]')) == null ? void 0 : _d3.focus({ preventScroll: true });
    }
    let j = false;
    function O() {
      const E = i == null ? void 0 : i.outcome;
      !E || j || (j = true, _(), e.onNext(E));
    }
    const R = (E) => {
      var _a4, _b4;
      const z = i;
      if (!z) return false;
      if (!z.outcome) return Es(E.target) && /^[0-9]$/.test(E.key) ? true : (_b4 = (_a4 = a.key) == null ? void 0 : _a4.call(a, E)) != null ? _b4 : false;
      if (E.key === "Enter" || E.key === " ") {
        const T = E.target;
        return T && (T.tagName === "BUTTON" || T.tagName === "A" || T.tagName === "INPUT" || T.tagName === "SELECT" || T.getAttribute("role") === "button") || (E.preventDefault(), O()), true;
      }
      return false;
    };
    i = { item: s, view: a, close: _ }, t.render("item", S, c(), { focus: false }), t.questionKeys = R, a.focus();
    const y = t.host.root.querySelector("#edu-main");
    return (y == null ? void 0 : y.contains(document.activeElement)) || ((_d2 = y == null ? void 0 : y.querySelector("[data-autofocus], .prompt")) == null ? void 0 : _d2.focus()), i;
  }
  function GS(t) {
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
      t.store.clear(), t.progress = Ms(t.pack.id), t.combo = 0, t.finished = false;
    } };
  }
  function Rs(t, e, s, n) {
    return Id(GS(t), e, s, n);
  }
  function Ds(t, e) {
    var _a3, _b3;
    const s = t.ui, n = t.progress, r = n.answered > 0 ? Math.round(n.right / n.answered * 100) : 0;
    return u("section", { class: "end-screen shell-end shell-end-".concat(t.shellId) }, u("p", { class: "eyebrow" }, t.courseTitle()), u("h1", { class: "screen-title", tabindex: "-1", testid: "end-title" }, (_a3 = e.title) != null ? _a3 : s("end.title")), e.sub ? u("p", { class: "subject" }, e.sub) : null, u("ul", { class: "end-stars", testid: "end-units" }, t.units().map((i) => u("li", {}, u("span", {}, t.t(i.title)), t.stars(t.unitStars(i.id))))), (_b3 = e.stats) != null ? _b3 : null, u("p", { class: "big-number", testid: "end-score" }, "".concat(s("end.score"), ": ").concat(n.score)), u("p", { testid: "end-accuracy" }, s("end.accuracy", { n: r })), u("div", { class: "actions actions-center" }, I("play-again", s("end.again"), () => e.onAgain(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), I("to-title", s("end.title.screen"), () => e.onTitle(), { class: "btn btn-big" })));
  }
  const ke = (t, e = {}, ...s) => ue(t, e, ...s);
  function Md(t) {
    const e = t === "locked" ? [ke("path", { class: "dr-shackle", d: "M24 38 v-7 a8 8 0 0 1 16 0 v7" }), ke("rect", { class: "dr-lock", x: 20, y: 38, width: 24, height: 18, rx: 3 }), ke("circle", { class: "dr-keyhole", cx: 32, cy: 46, r: 2.5 })] : [];
    return ke("svg", { class: "det-door-svg is-".concat(t), viewBox: "0 0 64 80", "aria-hidden": "true", focusable: "false" }, ke("rect", { class: "dr-frame", x: 6, y: 4, width: 52, height: 72, rx: 2 }), ke("rect", { class: "dr-opening", x: 11, y: 9, width: 42, height: 67 }), t === "locked" ? ke("rect", { class: "dr-panel", x: 11, y: 9, width: 42, height: 67 }) : ke("path", { class: "dr-panel dr-ajar", d: "M11 9 L30 14 V76 H11 Z" }), t === "locked" ? ke("path", { class: "dr-plank", d: "M11 30 H53 M11 52 H53" }) : ke("path", { class: "dr-plank", d: "M11 30 L30 32 M11 52 L30 52" }), t === "locked" ? ke("circle", { class: "dr-knob", cx: 47, cy: 44, r: 2.6 }) : ke("circle", { class: "dr-knob", cx: 26, cy: 44, r: 2.4 }), t === "solved" ? ke("path", { class: "dr-tick", d: "M34 36 l6 7 l12 -14" }) : ke("g", {}), ...e);
  }
  function Pi() {
    return ke("svg", { class: "det-mag-svg", viewBox: "0 0 40 40", "aria-hidden": "true", focusable: "false" }, ke("circle", { class: "mg-ring", cx: 17, cy: 17, r: 10 }), ke("path", { class: "mg-handle", d: "M25 25 L35 35" }));
  }
  function WS(t, e, s, n) {
    const r = ue("svg", { class: "det-strings", "aria-hidden": "true", focusable: "false" }), i = /* @__PURE__ */ new Map(), o = t.categories.map((f) => u("div", { class: "det-cork-col", "data-category": f.key }, u("h3", { class: "det-cork-label" }, s(f.key)), u("ul", { class: "det-cork-list" }, f.items.map((m) => {
      const k = u("li", { class: "det-pinned", "data-entity": m, testid: "board-entity-".concat(m) }, u("span", { class: "det-pin", "aria-hidden": "true" }), e(m));
      return i.set(m, k), k;
    })))), a = u("div", { class: "det-cork", testid: "board" }, r, u("div", { class: "det-cork-cols" }, o));
    let c = n;
    const l = () => {
      for (; r.firstChild; ) r.removeChild(r.firstChild);
      const f = a.getBoundingClientRect();
      if (f.width !== 0) {
        r.setAttribute("viewBox", "0 0 ".concat(Math.round(f.width), " ").concat(Math.round(f.height)));
        for (const m of rt(t)) {
          if (vt(c, m) !== "yes") continue;
          const [k, g] = Pe(m), b = i.get(k), v = i.get(g);
          if (!b || !v) continue;
          const $ = b.getBoundingClientRect(), S = v.getBoundingClientRect(), _ = $.left <= S.left ? $ : S, w = _ === $ ? S : $, A = _.right - f.left, j = _.top + _.height / 2 - f.top, O = w.left - f.left, R = w.top + w.height / 2 - f.top, y = Math.min(26, Math.abs(O - A) * 0.12 + 6), E = "M ".concat(A.toFixed(1), " ").concat(j.toFixed(1), " Q ").concat(((A + O) / 2).toFixed(1), " ").concat(((j + R) / 2 + y).toFixed(1), " ").concat(O.toFixed(1), " ").concat(R.toFixed(1));
          r.appendChild(ue("path", { class: "det-string", d: E, testid: "string-".concat(k, "-").concat(g) }));
        }
        for (const [m, k] of i) k.toggleAttribute("data-linked", rt(t).some((g) => vt(c, g) === "yes" && Pe(g).includes(m)));
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
  const HS = { "": "", no: "✕", yes: "✓" };
  function VS(t, e, s, n, r, i) {
    const o = /* @__PURE__ */ new Map(), a = (h, p, f) => {
      const m = o.get(h);
      if (!m) return;
      const [k, g] = Pe(h), b = vt(p, h);
      m.setAttribute("data-mark", b === "" ? "blank" : b), m.setAttribute("aria-label", r.cell(s(k), s(g), r.mark(b))), m.toggleAttribute("data-hinted", h === f);
      const v = m.querySelector(".det-glyph");
      v && (v.textContent = HS[b]);
    }, c = kw(t).map((h) => u("figure", { class: "det-table-wrap" }, u("figcaption", { class: "det-table-cap" }, r.caption(n(h.rows.key), n(h.cols.key))), u("table", { class: "det-table", testid: "grid-".concat(h.key) }, u("thead", {}, u("tr", {}, u("td", { class: "det-corner" }), h.cols.items.map((p) => u("th", { scope: "col", class: "det-col" }, s(p))))), u("tbody", {}, h.rows.items.map((p) => u("tr", {}, u("th", { scope: "row", class: "det-row" }, s(p)), h.cols.items.map((f) => {
      const m = "".concat(p, "|").concat(f), k = u("button", { type: "button", class: "det-cell", testid: "cell-".concat(p, "-").concat(f), "data-cell": m, onclick: () => i(m) }, u("span", { class: "det-glyph", "aria-hidden": "true" }));
      return o.set(m, k), u("td", { class: "det-td" }, k);
    }))))))), l = u("div", { class: "det-grid", testid: "grid" }, c), d = (h, p = "") => {
      for (const f of rt(t)) a(f, h, p);
    };
    return d(e), { el: l, update: d };
  }
  function YS(t) {
    const e = new Map(t.places.map((a) => [a.id, a])), s = (a, c) => "".concat((a / c * 100).toFixed(2), "%"), n = (a) => a === t.here ? "here" : t.trail.includes(a) ? "visited" : t.options.includes(a) ? "option" : "other", r = t.trail.flatMap((a) => {
      const c = e.get(a);
      return c ? ["".concat(c.x, ",").concat(c.y)] : [];
    }), i = ue("svg", { class: "det-map-line", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), preserveAspectRatio: "none", "aria-hidden": "true", focusable: "false" }, ...r.length > 1 ? [ue("polyline", { class: "det-map-route", points: r.join(" "), fill: "none", testid: "route-line" })] : []), o = t.places.map((a) => {
      const c = n(a.id);
      return u("div", { class: "det-map-pin is-".concat(c), style: "left:".concat(s(a.x, t.width), ";top:").concat(s(a.y, t.height)), "data-state": c, testid: "pin-".concat(a.id) }, u("span", { class: "det-map-dot", "aria-hidden": "true" }), c === "other" ? null : u("span", { class: "det-map-name" }, a.name));
    });
    return u("div", { class: "det-map", testid: "map", style: "aspect-ratio:".concat(t.width, " / ").concat(t.height) }, t.src ? u("img", { class: "det-map-img", src: t.src, alt: t.alt, draggable: "false" }) : u("div", { class: "det-map-img", role: "img", "aria-label": t.alt }), i, o);
  }
  function JS(t, e) {
    return { roomId: e, cards: Array.from({ length: t }, () => null), run: null, seen: [], firstTry: {}, marks: {}, hints: 0, accusation: {}, wrongAccusations: 0, solved: false };
  }
  const Od = (t) => t.cards.flatMap((e, s) => e === null ? [s + 1] : []), Ls = (t) => t.cards.filter((e) => e !== null).length, QS = (t) => t.cards.flatMap((e, s) => e === null ? [] : ["c".concat(s + 1)]), XS = (t) => t.cards.filter((e) => e !== null), e1 = (t, e) => {
    const s = new Set(XS(e));
    return t.filter((n) => !s.has(n));
  };
  function t1(t) {
    const e = Object.values(t.firstTry);
    return e.length === 0 ? 0 : e.reduce((s, n) => s + n, 0) / e.length;
  }
  function s1(t, e, s, n, r) {
    const i = !t.seen.includes(s);
    return { ...t, seen: i ? [...t.seen, s] : t.seen, firstTry: i ? { ...t.firstTry, [s]: r } : t.firstTry, cards: n ? t.cards.map((o, a) => a === e - 1 ? s : o) : t.cards };
  }
  function n1(t, e, s) {
    if (Od(e).length > 0) return { kind: "cards" };
    if (t.kind === "murdle" && si(t).some((r) => !e.accusation[r])) return { kind: "pick" };
    const n = s(e.accusation, e.marks);
    return n.correct ? { kind: "right" } : { kind: "wrong", wrong: n.wrong };
  }
  const r1 = 8, i1 = 2, Nd = 1;
  function Pd(t, e) {
    const s = [...new Set(t.decoys.filter((n) => n !== t.to))].slice(0, 3);
    return e.shuffle([t.to, ...s]);
  }
  function o1(t, e) {
    return { at: t.start, leg: 0, hours: 0, heard: false, options: Pd(t.route[0], e), cold: 0, coldHere: false, trail: [t.start], caught: false, scores: [], firstChoice: true };
  }
  function Rd(t, e, s) {
    return { ...t, heard: true, hours: t.hours + (e ? 0 : Nd), scores: [...t.scores, s] };
  }
  function a1(t, e, s, n) {
    const r = e.route[t.leg];
    if (s !== r.to) return { right: false, state: { ...t, hours: t.hours + Nd, cold: t.cold + 1, coldHere: true, scores: t.firstChoice ? [...t.scores, 0] : t.scores, firstChoice: false } };
    const i = t.leg + 1, o = i >= e.route.length;
    return { right: true, state: { ...t, at: r.to, leg: i, hours: t.hours + i1, heard: false, coldHere: false, trail: [...t.trail, r.to], caught: o, scores: t.firstChoice ? [...t.scores, 1] : t.scores, firstChoice: true, options: o ? [] : Pd(e.route[i], n) } };
  }
  const c1 = (t) => t.scores.length === 0 ? 0 : t.scores.reduce((e, s) => e + s, 0) / t.scores.length;
  function ts(t) {
    const e = r1 + t, s = e % 24, n = Math.floor(e / 24) + 1, r = "".concat(String(s).padStart(2, "0"), ":00");
    return n > 1 ? "".concat(r, " (+").concat(n - 1, ")") : r;
  }
  const l1 = { en: { "det.tagline": "A case file to crack", "det.intro": "Every locked door has a case on it. Turn the clue cards by answering questions, work out who did it, and the door opens.", "det.office.title": "The case board", "det.office.lead": "Pick a case. A solved case opens the next door.", "det.office.rooms": "Escape rooms", "det.room.open": "Open the file", "det.room.again": "Reopen the case", "det.room.solved": "Solved", "det.room.locked": "Locked: solve {unit} with 2 stars first.", "det.room.final": "The final room", "det.room.final.locked": "Locked: master every room first.", "det.room.stars": "{n} of 3 stars", "det.finish": "Close the file", "det.finish.hint": "Solve the final challenge to close the file.", "det.finish.ready": "The final challenge is done. The file can be closed.", "det.office.progress": "{n} of {total} rooms solved", "det.room.resume": "Resume the case", "det.case.broken": "This case could not be made. Pick another one.", "det.grid.caption": "{rows} and {cols}", "det.chase.resume": "Continue the chase", "det.back": "Back to the case board", "det.title.screen": "Title screen", "det.case.crime": "The crime happened in {place}.", "det.case.clues": "Clue cards", "det.case.turned": "{n} of {total} clues turned", "det.case.no.cards": "Every card is face-up. Mark the grid, then accuse.", "det.clue.n": "Clue {n}", "det.clue.turn": "Turn over", "det.clue.down": "Clue {n}, face down. Answer a question to turn it over.", "det.clue.up": "Clue {n}, face up.", "det.clue.fact": "The fact from your answer", "det.case.grid": "The grid", "det.case.grid.help": "Press a cell: one press crosses it out, two mean yes, three clear it.", "det.mark.blank": "unknown", "det.mark.no": "no", "det.mark.yes": "yes", "det.cell.label": "{a} and {b}: {state}", "det.board.title": "The cork board", "det.board.help": "Every yes in the grid becomes a red string between the two.", "det.hint": "Ask for a hint", "det.hint.used": "Hints used: {n}", "det.accuse.title": "Your accusation", "det.accuse.row": "Who or what is it? {category}", "det.accuse.submit": "Make the accusation", "det.accuse.submit.grid": "Check the grid", "det.accuse.grid": "Fill the grid with the clues until every yes is marked, then check it.", "det.accuse.cards": "The file is incomplete: turn every clue card first. The case stays open.", "det.accuse.pick": "Choose one for every row first.", "det.accuse.wrong": "Not quite: look again at {what}. The case stays open.", "det.accuse.wrong.grid": "Something in the grid is not right. Check it against the clues. The case stays open.", "det.cat.suspect": "the suspect", "det.cat.weapon": "the weapon", "det.cat.place": "the place", "det.cat.motive": "the motive", "det.cat.suspect.label": "Suspect", "det.cat.weapon.label": "Weapon", "det.cat.place.label": "Place", "det.cat.motive.label": "Motive", "det.case.leave": "Back to the board", "det.case.nofacts": "No clue item could be asked, so the card turns by itself.", "det.hud.clue": "Clue {n} of {total}", "det.effect.up": "Clue {n} turns face-up.", "det.effect.down": "The card stays face-down. This one will be asked again.", "det.next.up": "Read the clue", "det.next.down": "Back to the case", "det.solved.title": "Case solved", "det.solved.stamp": "Solved", "det.solved.who": "The answer: {what}", "det.solved.door": "The door swings open.", "det.solved.door.final": "The final door swings open.", "det.solved.unlocked": "Now open: {units}", "det.solved.stars": "Stars for this case", "det.solved.accuracy": "First-try clue answers: {n} %", "det.solved.hints": "Hints used: {n}", "det.solved.facts": "What the clues rested on", "det.solved.more": "Two stars open the next doors. Solve the case again for more.", "det.solved.again": "Solve it again", "det.chase.title": "The chase", "det.chase.lead": "The suspect is on the run. At each place a witness saw something: answer the question to hear it, then pick where the suspect went.", "det.chase.start": "Start the chase", "det.chase.again": "Chase again", "det.chase.locked": "Locked: master {unit} first.", "det.chase.caught.tag": "Caught", "det.chase.suspect": "On the run: {who}", "det.chase.at": "You are in {place}.", "det.chase.clock": "Clock", "det.chase.clock.label": "The clock shows {time}", "det.chase.ask": "Question the witness", "det.chase.witness": "The witness says", "det.chase.heard": "Where did she go?", "det.chase.travel": "Travel to {place}", "det.chase.cold": "A cold trail: the suspect did not go to {place}. It costs an hour and you are back in {back}.", "det.chase.warm": "You follow the trail to {place}.", "det.chase.hazy": "The witness took a while to remember: that cost an hour.", "det.chase.map": "A map of the places in the chase", "det.chase.legs": "Leg {n} of {total}", "det.chase.leave": "Leave the chase", "det.chase.effect.right": "The witness remembers it clearly.", "det.chase.effect.wrong": "The witness is hazy: an hour is lost.", "det.chase.next": "Hear the witness", "det.caught.title": "The chase is over", "det.caught.text": "{who} is caught in {place}.", "det.caught.clock": "The chase took until {time}.", "det.caught.cold": "Cold trails: {n}", "det.caught.stars": "Stars for the chase", "det.caught.accuracy": "First-try answers on the chase: {n} %", "det.caught.facts": "The places on the trail", "det.caught.again": "Chase again for more stars", "det.end.title": "File closed", "det.end.sub": "Every door is open and the suspect is caught.", "det.end.rooms": "Rooms solved: {n} of {total}" }, hr: { "det.tagline": "Dosje za razrješavanje", "det.intro": "Na svakim zaključanim vratima čeka slučaj. Okreni karte s tragovima odgovarajući na pitanja, otkrij tko je to učinio i vrata se otvaraju.", "det.office.title": "Ploča slučajeva", "det.office.lead": "Odaberi slučaj. Riješen slučaj otvara sljedeća vrata.", "det.office.rooms": "Sobe za bijeg", "det.room.open": "Otvori dosje", "det.room.again": "Ponovno otvori slučaj", "det.room.solved": "Riješeno", "det.room.locked": "Zaključano: prvo riješi {unit} s 2 zvjezdice.", "det.room.final": "Završna soba", "det.room.final.locked": "Zaključano: prvo svladaj sve sobe.", "det.room.stars": "{n} od 3 zvjezdice", "det.finish": "Zatvori dosje", "det.finish.hint": "Riješi završni izazov da zatvoriš dosje.", "det.finish.ready": "Završni izazov je gotov. Dosje se može zatvoriti.", "det.office.progress": "Riješeno soba: {n} od {total}", "det.room.resume": "Nastavi slučaj", "det.case.broken": "Ovaj slučaj nije mogao biti sastavljen. Odaberi drugi.", "det.grid.caption": "{rows} i {cols}", "det.chase.resume": "Nastavi potjeru", "det.back": "Natrag na ploču slučajeva", "det.title.screen": "Naslovni zaslon", "det.case.crime": "Zločin se dogodio ovdje: {place}.", "det.case.clues": "Karte s tragovima", "det.case.turned": "Okrenuto tragova: {n} od {total}", "det.case.no.cards": "Sve su karte okrenute. Ispuni mrežu pa optuži.", "det.clue.n": "Trag {n}", "det.clue.turn": "Okreni", "det.clue.down": "Trag {n}, okrenut licem prema dolje. Odgovori na pitanje da ga okreneš.", "det.clue.up": "Trag {n}, okrenut licem prema gore.", "det.clue.fact": "Činjenica iz tvog odgovora", "det.case.grid": "Mreža", "det.case.grid.help": "Pritisni polje: jedan pritisak ga prekriži, dva znače da, tri ga brišu.", "det.mark.blank": "nepoznato", "det.mark.no": "ne", "det.mark.yes": "da", "det.cell.label": "{a} i {b}: {state}", "det.board.title": "Pluta s uzicama", "det.board.help": 'Svako "da" u mreži postaje crvena uzica između to dvoje.', "det.hint": "Zatraži nagovještaj", "det.hint.used": "Iskorišteni nagovještaji: {n}", "det.accuse.title": "Tvoja optužba", "det.accuse.row": "Tko ili što je to? {category}", "det.accuse.submit": "Podigni optužbu", "det.accuse.submit.grid": "Provjeri mrežu", "det.accuse.grid": 'Ispuni mrežu tragovima dok nije označeno svako "da", pa je provjeri.', "det.accuse.cards": "Dosje nije potpun: prvo okreni sve karte s tragovima. Slučaj ostaje otvoren.", "det.accuse.pick": "Prvo odaberi po jedno u svakom retku.", "det.accuse.wrong": "Nije baš: pogledaj ponovno ovo: {what}. Slučaj ostaje otvoren.", "det.accuse.wrong.grid": "Nešto u mreži nije točno. Provjeri je prema tragovima. Slučaj ostaje otvoren.", "det.cat.suspect": "osumnjičenik", "det.cat.weapon": "oružje", "det.cat.place": "mjesto", "det.cat.motive": "motiv", "det.cat.suspect.label": "Osumnjičenik", "det.cat.weapon.label": "Oružje", "det.cat.place.label": "Mjesto", "det.cat.motive.label": "Motiv", "det.case.leave": "Natrag na ploču", "det.case.nofacts": "Nijedno pitanje za trag nije moglo biti postavljeno pa se karta okreće sama.", "det.hud.clue": "Trag {n} od {total}", "det.effect.up": "Trag {n} se okreće.", "det.effect.down": "Karta ostaje okrenuta prema dolje. Ovo će se pitati ponovno.", "det.next.up": "Pročitaj trag", "det.next.down": "Natrag na slučaj", "det.solved.title": "Slučaj riješen", "det.solved.stamp": "Riješeno", "det.solved.who": "Odgovor: {what}", "det.solved.door": "Vrata se otvaraju.", "det.solved.door.final": "Završna vrata se otvaraju.", "det.solved.unlocked": "Sada otvoreno: {units}", "det.solved.stars": "Zvjezdice za ovaj slučaj", "det.solved.accuracy": "Točni odgovori iz prvog pokušaja: {n} %", "det.solved.hints": "Iskorišteni nagovještaji: {n}", "det.solved.facts": "Na čemu su se tragovi temeljili", "det.solved.more": "Dvije zvjezdice otvaraju sljedeća vrata. Riješi slučaj ponovno za više.", "det.solved.again": "Riješi ponovno", "det.chase.title": "Potjera", "det.chase.lead": "Osumnjičenik je u bijegu. Na svakom mjestu svjedok je nešto vidio: odgovori na pitanje da ga čuješ, pa odaberi kamo je osumnjičenik otišao.", "det.chase.start": "Započni potjeru", "det.chase.again": "Ponovno u potjeru", "det.chase.locked": "Zaključano: prvo svladaj {unit}.", "det.chase.caught.tag": "Uhvaćen", "det.chase.suspect": "U bijegu: {who}", "det.chase.at": "Nalaziš se ovdje: {place}.", "det.chase.clock": "Sat", "det.chase.clock.label": "Sat pokazuje {time}", "det.chase.ask": "Ispitaj svjedoka", "det.chase.witness": "Svjedok kaže", "det.chase.heard": "Kamo je otišla?", "det.chase.travel": "Otputuj: {place}", "det.chase.cold": "Hladan trag: osumnjičenik nije otišao ovamo: {place}. To košta sat vremena i vraćaš se ovamo: {back}.", "det.chase.warm": "Slijediš trag ovamo: {place}.", "det.chase.hazy": "Svjedok se dugo prisjećao: to je koštalo sat vremena.", "det.chase.map": "Karta mjesta u potjeri", "det.chase.legs": "Dionica {n} od {total}", "det.chase.leave": "Napusti potjeru", "det.chase.effect.right": "Svjedok se jasno sjeća.", "det.chase.effect.wrong": "Svjedok je zbunjen: sat vremena je izgubljeno.", "det.chase.next": "Saslušaj svjedoka", "det.caught.title": "Potjera je gotova", "det.caught.text": "Uhvaćen je: {who}. Mjesto: {place}.", "det.caught.clock": "Potjera je trajala do {time}.", "det.caught.cold": "Hladni tragovi: {n}", "det.caught.stars": "Zvjezdice za potjeru", "det.caught.accuracy": "Točni odgovori iz prvog pokušaja u potjeri: {n} %", "det.caught.facts": "Mjesta na tragu", "det.caught.again": "Potjera ponovno za više zvjezdica", "det.end.title": "Dosje zatvoren", "det.end.sub": "Sva su vrata otvorena i osumnjičenik je uhvaćen.", "det.end.rooms": "Riješeno soba: {n} od {total}" }, de: { "det.tagline": "Eine Fallakte zum Knacken", "det.intro": "Hinter jeder verschlossenen Tür wartet ein Fall. Drehe die Hinweiskarten um, indem du Fragen beantwortest, finde heraus, wer es war, und die Tür öffnet sich.", "det.office.title": "Die Falltafel", "det.office.lead": "Wähle einen Fall. Ein gelöster Fall öffnet die nächste Tür.", "det.office.rooms": "Rätselräume", "det.room.open": "Die Akte öffnen", "det.room.again": "Den Fall neu aufrollen", "det.room.solved": "Gelöst", "det.room.locked": "Gesperrt: Löse zuerst {unit} mit 2 Sternen.", "det.room.final": "Der letzte Raum", "det.room.final.locked": "Gesperrt: Meistere zuerst jeden Raum.", "det.room.stars": "{n} von 3 Sternen", "det.finish": "Die Akte schließen", "det.finish.hint": "Löse die letzte Aufgabe, um die Akte zu schließen.", "det.finish.ready": "Die letzte Aufgabe ist geschafft. Die Akte kann geschlossen werden.", "det.office.progress": "{n} von {total} Räumen gelöst", "det.room.resume": "Den Fall fortsetzen", "det.case.broken": "Dieser Fall konnte nicht erstellt werden. Wähle einen anderen.", "det.grid.caption": "{rows} und {cols}", "det.chase.resume": "Die Verfolgung fortsetzen", "det.back": "Zurück zur Falltafel", "det.title.screen": "Titelbildschirm", "det.case.crime": "Das Verbrechen geschah in: {place}.", "det.case.clues": "Hinweiskarten", "det.case.turned": "{n} von {total} Hinweisen umgedreht", "det.case.no.cards": "Jede Karte liegt offen. Markiere das Raster und erhebe dann Anklage.", "det.clue.n": "Hinweis {n}", "det.clue.turn": "Umdrehen", "det.clue.down": "Hinweis {n}, verdeckt. Beantworte eine Frage, um ihn umzudrehen.", "det.clue.up": "Hinweis {n}, aufgedeckt.", "det.clue.fact": "Die Tatsache aus deiner Antwort", "det.case.grid": "Das Raster", "det.case.grid.help": "Drücke auf ein Feld: Einmal streicht es durch, zweimal bedeutet ja, dreimal löscht es.", "det.mark.blank": "unbekannt", "det.mark.no": "nein", "det.mark.yes": "ja", "det.cell.label": "{a} und {b}: {state}", "det.board.title": "Die Pinnwand", "det.board.help": "Jedes Ja im Raster wird zu einem roten Faden zwischen den beiden.", "det.hint": "Um einen Tipp bitten", "det.hint.used": "Genutzte Tipps: {n}", "det.accuse.title": "Deine Anklage", "det.accuse.row": "Wer oder was ist es? {category}", "det.accuse.submit": "Anklage erheben", "det.accuse.submit.grid": "Das Raster prüfen", "det.accuse.grid": "Fülle das Raster mit den Hinweisen, bis jedes Ja markiert ist, und prüfe es dann.", "det.accuse.cards": "Die Akte ist unvollständig: Drehe zuerst jede Hinweiskarte um. Der Fall bleibt offen.", "det.accuse.pick": "Wähle zuerst für jede Zeile eine Antwort.", "det.accuse.wrong": "Nicht ganz: Sieh dir noch einmal {what} an. Der Fall bleibt offen.", "det.accuse.wrong.grid": "Im Raster stimmt etwas nicht. Prüfe es anhand der Hinweise. Der Fall bleibt offen.", "det.cat.suspect": "den Verdächtigen", "det.cat.weapon": "die Tatwaffe", "det.cat.place": "den Ort", "det.cat.motive": "das Motiv", "det.cat.suspect.label": "Verdächtiger", "det.cat.weapon.label": "Tatwaffe", "det.cat.place.label": "Ort", "det.cat.motive.label": "Motiv", "det.case.leave": "Zurück zur Tafel", "det.case.nofacts": "Zu diesem Hinweis konnte keine Frage gestellt werden, deshalb dreht sich die Karte von selbst um.", "det.hud.clue": "Hinweis {n} von {total}", "det.effect.up": "Hinweis {n} wird aufgedeckt.", "det.effect.down": "Die Karte bleibt verdeckt. Diese Frage kommt noch einmal.", "det.next.up": "Den Hinweis lesen", "det.next.down": "Zurück zum Fall", "det.solved.title": "Fall gelöst", "det.solved.stamp": "Gelöst", "det.solved.who": "Die Antwort: {what}", "det.solved.door": "Die Tür schwingt auf.", "det.solved.door.final": "Die letzte Tür schwingt auf.", "det.solved.unlocked": "Jetzt offen: {units}", "det.solved.stars": "Sterne für diesen Fall", "det.solved.accuracy": "Hinweisantworten beim ersten Versuch: {n} %", "det.solved.hints": "Genutzte Tipps: {n}", "det.solved.facts": "Worauf die Hinweise beruhten", "det.solved.more": "Zwei Sterne öffnen die nächsten Türen. Löse den Fall noch einmal für mehr.", "det.solved.again": "Noch einmal lösen", "det.chase.title": "Die Verfolgung", "det.chase.lead": "Der Verdächtige ist auf der Flucht. An jedem Ort hat ein Zeuge etwas gesehen: Beantworte die Frage, um es zu hören, und wähle dann, wohin der Verdächtige gegangen ist.", "det.chase.start": "Die Verfolgung starten", "det.chase.again": "Noch einmal verfolgen", "det.chase.locked": "Gesperrt: Meistere zuerst {unit}.", "det.chase.caught.tag": "Gefasst", "det.chase.suspect": "Auf der Flucht: {who}", "det.chase.at": "Du bist in {place}.", "det.chase.clock": "Uhr", "det.chase.clock.label": "Die Uhr zeigt {time}", "det.chase.ask": "Den Zeugen befragen", "det.chase.witness": "Der Zeuge sagt", "det.chase.heard": "Wohin ist sie gegangen?", "det.chase.travel": "Nach {place} reisen", "det.chase.cold": "Eine kalte Spur: Der Verdächtige ist nicht nach {place} gegangen. Das kostet eine Stunde, und du bist zurück in {back}.", "det.chase.warm": "Du folgst der Spur nach {place}.", "det.chase.hazy": "Der Zeuge hat sich nur langsam erinnert: Das hat eine Stunde gekostet.", "det.chase.map": "Eine Karte der Orte der Verfolgung", "det.chase.legs": "Etappe {n} von {total}", "det.chase.leave": "Die Verfolgung verlassen", "det.chase.effect.right": "Der Zeuge erinnert sich genau.", "det.chase.effect.wrong": "Der Zeuge ist unsicher: Eine Stunde geht verloren.", "det.chase.next": "Den Zeugen anhören", "det.caught.title": "Die Verfolgung ist vorbei", "det.caught.text": "{who} wird in {place} gefasst.", "det.caught.clock": "Die Verfolgung dauerte bis {time}.", "det.caught.cold": "Kalte Spuren: {n}", "det.caught.stars": "Sterne für die Verfolgung", "det.caught.accuracy": "Antworten beim ersten Versuch in der Verfolgung: {n} %", "det.caught.facts": "Die Orte auf der Spur", "det.caught.again": "Noch einmal verfolgen für mehr Sterne", "det.end.title": "Akte geschlossen", "det.end.sub": "Jede Tür ist offen und der Verdächtige ist gefasst.", "det.end.rooms": "Gelöste Räume: {n} von {total}" } }, Dd = "detective", d1 = "noir", u1 = "-", h1 = (t) => t.length > 0 ? t[0].toLocaleUpperCase() + t.slice(1) : t, p1 = { rooms: [] };
  class f1 {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "cases", /* @__PURE__ */ new Map());
      __publicField(this, "titleState", es());
      __publicField(this, "room", null);
      __publicField(this, "chase", null);
      __publicField(this, "coldPlaces", /* @__PURE__ */ new Set());
      __publicField(this, "chaseNotice", null);
      __publicField(this, "cork", null);
      var _a3;
      this.host = e, this.session = new Ps(e, { shellId: Dd, theme: d1, strings: l1 }), this.section = (_a3 = this.session.section()) != null ? _a3 : p1;
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
      const r = JS(s.clues.length, e.id);
      return this.cases.set(e.id, r), r;
    }
    built(e) {
      try {
        return Xc(al(e.case));
      } catch (e2) {
        return null;
      }
    }
    solution() {
      const e = this.room, s = e ? this.built(e) : null;
      if (!e || !s) return null;
      const n = s.puzzle, r = this.cases.get(e.id), i = el(n), o = gw(n);
      return { room: e.id, kind: n.kind, accusation: i, accuse: i ? Object.entries(i).map(([a, c]) => "accuse-".concat(a, "-").concat(c)) : [], yes: o, cells: o.map((a) => {
        const [c, l] = Pe(a);
        return "cell-".concat(c, "-").concat(l);
      }), cards: r ? { turned: Ls(r), total: r.cards.length, faceDown: Od(r) } : { turned: 0, total: n.clues.length, faceDown: n.clues.map((a, c) => c + 1) }, marks: r ? tl(n, r.marks).length : 0 };
    }
    route() {
      var _a3;
      const e = this.section.chase, s = this.chase;
      if (!e || !s) return null;
      const n = e.route[s.leg];
      return { active: !s.caught, caught: s.caught, at: s.at, leg: s.leg, legs: e.route.length, phase: s.caught ? "caught" : s.heard ? "travel" : "witness", next: (_a3 = n == null ? void 0 : n.to) != null ? _a3 : null, travel: n ? "travel-".concat(n.to) : null, options: s.options, decoys: s.options.filter((r) => r !== (n == null ? void 0 : n.to)), end: ol(e) };
    }
    title() {
      const e = this.session;
      e.finished = false, this.room = null, e.render("title", Rs(e, { onStart: () => this.office() }, () => this.title(), this.titleState));
    }
    office() {
      var _a3;
      const e = this.session, s = this.s;
      e.finished = false, this.room = null, this.disposeCork();
      const n = this.saved(), r = this.rooms(), i = this.section.chase, o = r.filter((h) => !this.roomLocked(h)), a = r.filter((h) => n.solved.includes(h.id)).length, c = (h) => {
        var _a4;
        const p = this.roomLocked(h), f = this.roomStars(h), m = n.solved.includes(h.id), k = this.cases.has(h.id) && !((_a4 = this.cases.get(h.id)) == null ? void 0 : _a4.solved), g = p ? "locked" : m ? "solved" : "open", b = p ? this.isFinal(h) ? s("det.room.final.locked") : s("det.room.locked", { unit: this.needs(h) }) : m ? s("det.room.solved") : k ? s("det.room.resume") : this.isFinal(h) ? s("det.room.final") : s("det.room.open");
        return u("li", { class: "det-room-item" }, u("button", { type: "button", class: "det-room is-".concat(g).concat(this.isFinal(h) ? " is-final" : ""), testid: "room-".concat(h.id), "data-state": g, "data-stars": String(f), "data-locked": String(p), ...h.unit ? { "data-unit": h.unit } : { "data-final": "true" }, ...p ? { disabled: true } : {}, onclick: () => this.openRoom(h) }, u("span", { class: "det-room-door" }, Md(p ? "locked" : m ? "solved" : "open")), u("span", { class: "det-room-body" }, u("span", { class: "det-room-name" }, e.t(h.title)), u("span", { class: "det-room-meta" }, b), e.stars(f))));
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
      return { room: e.id, unit: (_a3 = e.unit) != null ? _a3 : null, kind: r.kind, size: r.size, seed: s.seed, clues: n.cards.map((i, o) => ({ n: o + 1, state: i === null ? "down" : "up", item: i })), turned: Ls(n), total: n.cards.length, yes: tl(r, n.marks).length, hints: n.hints, accusation: n.accusation, wrongAccusations: n.wrongAccusations, solved: n.solved };
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
      const f = () => n.publish("case", { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), m = a.cards.length, k = o.clues.map((T, D) => {
        const K = D + 1, F = a.cards[D];
        if (F == null) return u("li", { class: "det-card is-down", "data-state": "down" }, I("clue-".concat(K), [u("span", { class: "det-card-art" }, Pi()), u("span", { class: "det-card-no" }, r("det.clue.n", { n: K })), u("span", { class: "det-card-act" }, r("det.clue.turn"))], () => this.turnCard(e, K), { class: "det-card-btn" }));
        const H = this.factOf(n.item(F));
        return u("li", { class: "det-card is-up", "data-state": "up", testid: "clue-".concat(K), tabindex: "-1", ...s === K ? { "data-autofocus": "" } : {} }, u("h3", { class: "det-card-no" }, r("det.clue.n", { n: K })), u("p", { class: "det-clue-text" }, il(o, T, d, n.lang)), H ? u("p", { class: "det-clue-fact" }, u("span", { class: "det-fact-label" }, r("det.clue.fact")), " ", H) : null);
      }), g = { mark: (T) => r(T === "yes" ? "det.mark.yes" : T === "no" ? "det.mark.no" : "det.mark.blank"), cell: (T, D, K) => r("det.cell.label", { a: T, b: D, state: K }), caption: (T, D) => r("det.grid.caption", { rows: T, cols: D }) }, b = u("p", { class: "det-hint-text", testid: "hint-text", role: "status", hidden: true }), v = VS(o, a.marks, c, l, g, (T) => {
        var _a3;
        let D = bw(a.marks, T);
        vt(D, T) === "yes" && (D = vw(o, D, T)), h({ ...a, marks: D }), p = "", v.update(D), (_a3 = this.cork) == null ? void 0 : _a3.update(D);
        const [K, F] = Pe(T);
        n.live(g.cell(c(K), c(F), g.mark(vt(D, T)))), f();
      }), $ = WS(o, c, l, a.marks);
      this.cork = $;
      const S = I("hint", "💡 ".concat(r("det.hint")), () => {
        const T = yw(o, QS(a), a.marks, d, n.lang);
        h({ ...a, hints: a.hints + 1 }), b.hidden = false, b.textContent = T.text, p = T.kind === "step" || T.kind === "wrong" ? T.cell : "", v.update(a.marks, p), _.textContent = r("det.hint.used", { n: a.hints }), f();
      }, { class: "btn btn-small" }), _ = u("span", { class: "det-hint-count", testid: "hint-count" }, r("det.hint.used", { n: a.hints })), w = /* @__PURE__ */ new Map(), A = u("p", { class: "det-accuse-message", testid: "accuse-message", role: "status", hidden: true }), j = (T, D) => {
        A.hidden = false, A.className = "det-accuse-message message message-bad", A.textContent = T;
      }, R = si(o).map((T) => {
        var _a3;
        const D = o.categories.find((F) => F.key === T), K = l(T);
        return u("div", { class: "det-pick-row", role: "group", "aria-label": K }, u("span", { class: "det-pick-label" }, K), u("span", { class: "det-picks" }, ((_a3 = D == null ? void 0 : D.items) != null ? _a3 : []).map((F) => {
          const H = I("accuse-".concat(T, "-").concat(F), c(F), () => {
            h({ ...a, accusation: { ...a.accusation, [T]: a.accusation[T] === F ? "" : F } });
            for (const [he, ve] of w) ve.setAttribute("aria-pressed", String(a.accusation[he.split("|")[0]] === he.split("|")[1]));
            f();
          }, { class: "det-pick", "aria-pressed": String(a.accusation[T] === F) });
          return w.set("".concat(T, "|").concat(F), H), H;
        })));
      }), y = I("accuse-submit", o.kind === "murdle" ? r("det.accuse.submit") : r("det.accuse.submit.grid"), () => {
        var _a3;
        const T = n1(o, a, (D, K) => ww(o, D, K));
        if (T.kind === "cards") return j(r("det.accuse.cards"));
        if (T.kind === "pick") return j(r("det.accuse.pick"));
        if (T.kind === "wrong") return h({ ...a, wrongAccusations: a.wrongAccusations + 1 }), j(o.kind === "murdle" ? r("det.accuse.wrong", { what: T.wrong.map((D) => this.categoryWords(D, l)).join(", ") }) : r("det.accuse.wrong.grid")), n.live((_a3 = A.textContent) != null ? _a3 : ""), f();
        h({ ...a, solved: true }), this.solved(e, o, a);
      }, { class: "btn btn-primary btn-big" }), E = o.kind === "murdle" && o.murder ? u("p", { class: "det-crime", testid: "case-crime" }, r("det.case.crime", { place: jn(o, o.murder.place, d, n.lang) })) : null, z = u("section", { class: "case-screen det-case" }, u("div", { class: "topbar" }, I("to-office", "‹ ".concat(r("det.back")), () => this.office(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "case-progress" }, r("det.case.turned", { n: Ls(a), total: m }))), u("h1", { class: "screen-title det-case-title", tabindex: "-1", testid: "case-title" }, n.t(e.title)), u("p", { class: "det-story", testid: "case-story" }, n.t(e.story)), E, u("div", { class: "det-layout" }, u("section", { class: "det-col-cards", "aria-labelledby": "det-cards-h" }, u("h2", { class: "det-h2", id: "det-cards-h" }, r("det.case.clues")), Ls(a) === m ? u("p", { class: "det-note" }, r("det.case.no.cards")) : null, u("ol", { class: "det-cards", testid: "clues" }, k)), u("section", { class: "det-col-grid", "aria-labelledby": "det-grid-h" }, u("h2", { class: "det-h2", id: "det-grid-h" }, r("det.case.grid")), u("p", { class: "det-help" }, r("det.case.grid.help")), v.el)), u("section", { class: "det-board-wrap", "aria-labelledby": "det-board-h" }, u("h2", { class: "det-h2", id: "det-board-h" }, r("det.board.title")), u("p", { class: "det-help" }, r("det.board.help")), $.el), u("section", { class: "det-accuse", "aria-labelledby": "det-accuse-h" }, u("h2", { class: "det-h2", id: "det-accuse-h" }, r("det.accuse.title")), u("div", { class: "det-hint-row" }, S, _), b, o.kind === "murdle" ? u("div", { class: "det-pick-rows" }, R) : u("p", { class: "det-help" }, r("det.accuse.grid")), u("div", { class: "actions" }, y), A));
      n.render("case", z, { ...e.unit ? { unitId: e.unit } : {}, view: this.caseView(e) }), $.update(a.marks);
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
      d || (l = n.startRun(e1(e.case.items, o), { kind: c, ...e.unit ? { unitId: e.unit } : {} }), d = n.next(l));
      const h = d ? n.item(d.id) : void 0;
      if (!l || !d || !n.canAsk(h)) return this.cases.set(e.id, { ...o, run: l, cards: o.cards.map((k, g) => g === s - 1 ? u1 : k) }), this.caseScreen(e, s);
      this.cases.set(e.id, { ...o, run: l });
      const p = l, f = d, m = u("div", { class: "det-hud" }, u("span", { class: "det-hud-card" }, Pi()), u("div", { class: "det-hud-text" }, u("p", { class: "det-hud-room" }, n.t(e.title)), u("p", { class: "det-hud-count" }, r("det.case.turned", { n: Ls(o), total: a }))));
      lt(n, { item: h, context: "clue", retry: f.retry, hud: m, lead: u("span", {}, r("det.hud.clue", { n: s, total: a })), ...e.unit ? { unitId: e.unit } : {}, roundKind: c, roundSize: p.size, index: p.results.length, view: () => this.caseView(e), leaveLabel: r("det.case.leave"), onLeave: () => this.caseScreen(e), onAnswered: (k) => {
        const g = this.cases.get(e.id), b = s1({ ...g, run: n.record(p, f, k) }, s, h.id, k.result.correct, k.result.score);
        this.cases.set(e.id, b);
      }, effect: (k) => k.result.correct ? { text: r("det.effect.up", { n: s }), tone: "good" } : { text: r("det.effect.down"), tone: "bad" }, nextLabel: (k) => k.result.correct ? r("det.next.up") : r("det.next.down"), onNext: (k) => this.caseScreen(e, k.result.correct ? s : void 0) });
    }
    solved(e, s, n) {
      const r = this.session, i = this.s, o = t1(n), a = r.recordUnit(e.unit ? { unitId: e.unit } : { boss: true }, o), c = this.saved();
      c.solved.includes(e.id) || this.save({ ...c, solved: [...c.solved, e.id] }), r.playCue(e.unit ? "unit-complete" : "boss");
      const l = this.nameOf(e), d = this.labelOf(e), h = el(s), p = h ? Object.entries(h).map(([v, $]) => "".concat(d(v), ": ").concat(l($))).join("; ") : "", f = a.unlocked.map((v) => r.unitTitle(v)), m = Math.round(o * 100), k = n.cards.flatMap((v, $) => {
        const S = this.factOf(v ? r.item(v) : void 0);
        return S ? [{ n: $ + 1, text: S }] : [];
      }), g = Md("locked"), b = u("section", { class: "solved-screen det-solved" }, u("div", { class: "det-solved-door", "aria-hidden": "true" }, g), u("p", { class: "det-stamp", "aria-hidden": "true" }, i("det.solved.stamp")), u("h1", { class: "screen-title", tabindex: "-1", testid: "solved-title" }, i("det.solved.title")), u("p", { class: "subject" }, r.t(e.title)), p ? u("p", { class: "det-answer", testid: "solved-answer" }, i("det.solved.who", { what: p })) : null, r.stars(a.stars, "case-stars"), u("p", { class: "big-number", testid: "case-accuracy" }, i("det.solved.accuracy", { n: m })), n.hints > 0 ? u("p", { class: "det-note", testid: "case-hints" }, i("det.solved.hints", { n: n.hints })) : null, u("p", { class: "message message-ok", testid: "door-open" }, e.unit ? i("det.solved.door", { unit: r.t(e.title) }) : i("det.solved.door.final")), f.length > 0 ? u("p", { class: "message", testid: "solved-unlocked" }, i("det.solved.unlocked", { units: f.join(", ") })) : null, a.stars < 2 ? u("p", { class: "message message-bad", testid: "solved-more" }, i("det.solved.more")) : null, k.length > 0 ? u("div", { class: "det-facts" }, u("h2", { class: "det-h2" }, i("det.solved.facts")), u("ul", { class: "det-fact-list", testid: "solved-facts" }, k.map((v) => u("li", {}, u("b", {}, i("det.clue.n", { n: v.n })), " ", v.text)))) : null, u("div", { class: "actions actions-center" }, I("to-office", i("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), a.stars < 3 ? I("solve-again", i("det.solved.again"), () => this.again(e), { class: "btn btn-big" }) : null));
      r.render("case-solved", b, { ...e.unit ? { unitId: e.unit } : {}, view: { room: e.id, stars: a.stars, accuracy: m, hints: n.hints, unlocked: a.unlocked, wrongAccusations: n.wrongAccusations } }), window.requestAnimationFrame(() => g.classList.add("is-swinging"));
    }
    again(e) {
      this.cases.delete(e.id), this.openRoom(e);
    }
    startChase() {
      const e = this.section.chase;
      if (!e) return this.office();
      (!this.chase || this.chase.caught) && (this.chase = o1(e, this.session.rng), this.coldPlaces = /* @__PURE__ */ new Set(), this.chaseNotice = null), this.chaseScreen();
    }
    placeName(e, s) {
      const n = e.places.find((r) => r.id === s);
      return n ? this.session.t(n.name) : s;
    }
    chaseView() {
      const e = this.section.chase, s = this.chase;
      return !e || !s ? {} : { phase: s.caught ? "caught" : s.heard ? "travel" : "witness", at: s.at, leg: s.leg, legs: e.route.length, hours: s.hours, clock: ts(s.hours), heard: s.heard, options: s.heard ? s.options : [], cold: s.cold, trail: s.trail };
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
      const i = n.route[r.leg], o = e.pack.assets.find((f) => f.id === n.map), a = YS({ src: e.data.assets[n.map], alt: o ? e.t(o.alt) : s("det.chase.map"), width: n.width, height: n.height, places: n.places.map((f) => ({ id: f.id, name: e.t(f.name), x: f.x, y: f.y })), trail: r.trail, options: r.heard ? r.options : [], here: r.at }), c = this.chaseNotice, l = c ? u("p", { class: "message ".concat(c.kind === "warm" ? "message-ok" : "message-bad"), role: "status", testid: "chase-notice", "data-kind": c.kind }, c.kind === "cold" ? s("det.chase.cold", { place: c.place, back: c.back }) : c.kind === "warm" ? s("det.chase.warm", { place: c.place }) : s("det.chase.hazy")) : null, d = r.heard && i ? r.options : [], h = i ? r.heard ? u("div", { class: "det-travel-panel" }, u("figure", { class: "det-witness", testid: "witness-line" }, u("figcaption", {}, s("det.chase.witness")), u("blockquote", {}, this.witnessText(n, r.leg))), u("h2", { class: "det-h2" }, s("det.chase.heard")), u("ul", { class: "det-travel", testid: "travel" }, d.map((f, m) => u("li", {}, I("travel-".concat(f), this.s("det.chase.travel", { place: this.placeName(n, f) }), () => this.go(f), { class: "btn det-go".concat(this.coldPlaces.has(f) ? " is-cold" : ""), ...this.coldPlaces.has(f) ? { disabled: true, "data-cold": "true" } : {}, ...m === d.findIndex((k) => !this.coldPlaces.has(k)) ? { "data-autofocus": "" } : {} }))))) : u("div", { class: "det-witness-panel" }, u("p", { class: "det-here", testid: "chase-here" }, s("det.chase.at", { place: this.placeName(n, r.at) })), I("ask-witness", s("det.chase.ask"), () => this.askWitness(), { class: "btn btn-primary btn-big", "data-autofocus": "" })) : null, p = u("section", { class: "chase-screen det-chase" }, u("div", { class: "topbar" }, I("to-office", "‹ ".concat(s("det.chase.leave")), () => this.office(), { class: "btn btn-small btn-ghost" }), u("span", { class: "det-clock", testid: "clock", role: "timer", "aria-label": s("det.chase.clock.label", { time: ts(r.hours) }) }, u("span", { class: "det-clock-label" }, s("det.chase.clock")), " ", ts(r.hours))), u("h1", { class: "screen-title", tabindex: "-1", testid: "chase-title" }, e.t(n.title) || s("det.chase.title")), u("p", { class: "subject", testid: "chase-suspect" }, s("det.chase.suspect", { who: e.t(n.suspect) })), u("p", { class: "det-legs", testid: "chase-legs" }, s("det.chase.legs", { n: Math.min(r.leg + 1, n.route.length), total: n.route.length })), u("div", { class: "det-chase-layout" }, a, u("div", { class: "det-chase-side" }, l, h)));
      e.render("chase", p, { ...n.unit ? { unitId: n.unit } : {}, view: this.chaseView() });
    }
    askWitness() {
      const e = this.session, s = this.s, n = this.section.chase, r = this.chase, i = n.route[r.leg];
      if (!i) return this.chaseScreen();
      const o = e.item(i.item);
      if (this.chaseNotice = null, !e.canAsk(o)) return this.chase = Rd(r, true, 1), this.chaseScreen();
      const a = u("div", { class: "det-hud" }, u("span", { class: "det-hud-card" }, Pi()), u("div", { class: "det-hud-text" }, u("p", { class: "det-hud-room" }, this.placeName(n, r.at)), u("p", { class: "det-hud-count" }, s("det.chase.clock.label", { time: ts(r.hours) }))));
      lt(e, { item: o, context: "clue", hud: a, lead: u("span", {}, s("det.chase.legs", { n: r.leg + 1, total: n.route.length })), ...n.unit ? { unitId: n.unit } : {}, index: r.leg, view: () => this.chaseView(), leaveLabel: s("det.chase.leave"), onLeave: () => this.chaseScreen(), onAnswered: (c) => {
        this.chase = Rd(this.chase, c.result.correct, c.result.score), c.result.correct || (this.chaseNotice = { kind: "hazy", place: "", back: "" });
      }, effect: (c) => c.result.correct ? { text: s("det.chase.effect.right"), tone: "good" } : { text: s("det.chase.effect.wrong"), tone: "bad" }, nextLabel: s("det.chase.next"), onNext: () => this.chaseScreen() });
    }
    go(e) {
      const s = this.session, n = this.section.chase, r = this.chase, i = a1(r, n, e, s.rng);
      if (this.chase = i.state, !i.right) return this.coldPlaces.add(e), this.chaseNotice = { kind: "cold", place: this.placeName(n, e), back: this.placeName(n, r.at) }, s.live(this.s("det.chase.cold", { place: this.placeName(n, e), back: this.placeName(n, r.at) })), this.chaseScreen();
      if (this.coldPlaces = /* @__PURE__ */ new Set(), i.state.caught) return this.caught();
      this.chaseNotice = { kind: "warm", place: this.placeName(n, e), back: "" }, this.chaseScreen();
    }
    caught() {
      const e = this.session, s = this.s, n = this.section.chase, r = this.chase, i = c1(r), o = e.recordUnit(n.unit ? { unitId: n.unit } : { boss: true }, i);
      this.save({ ...this.saved(), caught: true }), e.playCue(n.unit ? "unit-complete" : "boss"), this.chaseNotice = null;
      const a = Math.round(i * 100), c = o.unlocked.map((d) => e.unitTitle(d)), l = u("section", { class: "caught-screen det-solved det-caught" }, u("p", { class: "det-stamp", "aria-hidden": "true" }, s("det.chase.caught.tag")), u("h1", { class: "screen-title", tabindex: "-1", testid: "caught-title" }, s("det.caught.title")), u("p", { class: "subject", testid: "caught-text" }, s("det.caught.text", { who: h1(e.t(n.suspect)), place: this.placeName(n, ol(n)) })), e.stars(o.stars, "chase-stars"), u("p", { class: "big-number", testid: "chase-accuracy" }, s("det.caught.accuracy", { n: a })), u("p", { class: "det-note", testid: "caught-clock" }, s("det.caught.clock", { time: ts(r.hours) })), u("p", { class: "det-note", testid: "caught-cold" }, s("det.caught.cold", { n: r.cold })), c.length > 0 ? u("p", { class: "message", testid: "caught-unlocked" }, s("det.solved.unlocked", { units: c.join(", ") })) : null, u("div", { class: "det-facts" }, u("h2", { class: "det-h2" }, s("det.caught.facts")), u("ol", { class: "det-trail", testid: "caught-trail" }, r.trail.map((d) => u("li", {}, this.placeName(n, d))))), u("div", { class: "actions actions-center" }, I("to-office", s("det.back"), () => this.office(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o.stars < 3 ? I("chase-again", s("det.caught.again"), () => this.restartChase(), { class: "btn btn-big" }) : null));
      e.render("caught", l, { ...n.unit ? { unitId: n.unit } : {}, view: { stars: o.stars, accuracy: a, hours: r.hours, clock: ts(r.hours), cold: r.cold, trail: r.trail, unlocked: o.unlocked } });
    }
    restartChase() {
      this.chase = null, this.startChase();
    }
    end() {
      var _a3, _b3;
      const e = this.session, s = this.s;
      e.finish(), this.disposeCork();
      const n = this.rooms(), r = this.saved(), i = n.filter((o) => r.solved.includes(o.id)).length;
      e.render("end", Ds(e, { title: s("det.end.title"), sub: s("det.end.sub"), stats: u("p", { class: "subject", testid: "end-rooms" }, s("det.end.rooms", { n: i, total: n.length })), onAgain: () => this.office(), onTitle: () => this.title() }), { view: { solved: i, total: n.length, caught: r.caught, final: (_b3 = (_a3 = Aw(this.section)) == null ? void 0 : _a3.id) != null ? _b3 : null } });
    }
  }
  const Ld = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Dd, mount(e) {
      t = new f1(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), m1 = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function g1(t, e, s) {
    const n = s.filter((i) => i.id !== e && i.title.trim().length >= 3).map((i) => ({ id: i.id, title: i.title.trim() })).sort((i, o) => o.title.length - i.title.length), r = /* @__PURE__ */ new Set();
    return t.map((i) => {
      const o = [];
      for (const l of n) {
        if (r.has(l.id)) continue;
        const h = new RegExp("(?<![\\p{L}\\p{N}])".concat(m1(l.title), "(?![\\p{L}\\p{N}])"), "iu").exec(i);
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
  const k1 = (t) => [...new Set(t.flat().flatMap((e) => e.link ? [e.link] : []))], Ri = (t) => Fe(t, { fold: true });
  function Cd(t, e, s = 8) {
    const n = Ri(t);
    if (n.replace(/ /g, "").length < 2) return [];
    const r = n.split(" ").filter(Boolean), i = [];
    for (const o of e) {
      const a = Ri(o.title), c = a.split(" ");
      let l = 0;
      a === n ? l = 120 : a.startsWith(n) ? l = 100 : c.some((f) => f.startsWith(n)) ? l = 80 : a.includes(n) ? l = 60 : r.every((f) => a.includes(f)) && (l = 50);
      let d = "";
      const p = o.paragraphs.flatMap((f) => f.split(new RegExp("(?<=[.!?])\\s+"))).find((f) => r.every((m) => Ri(f).includes(m)));
      p && (d = p.length > 150 ? "".concat(p.slice(0, 147).trimEnd(), "...") : p, l === 0 && (l = 20)), l > 0 && i.push({ id: o.id, score: l, snippet: l >= 50 ? "" : d });
    }
    return i.sort((o, a) => a.score - o.score).slice(0, s);
  }
  function Zd(t, e) {
    const n = [...t.title.split(/\s+/).filter((r) => r.replace(/[^\p{L}\p{N}]/gu, "").length >= 3).sort((r, i) => i.length - r.length), t.title];
    for (const r of n) if (Cd(r, e).some((i) => i.id === t.id)) return r.replace(/[^\p{L}\p{N}\s]/gu, "").trim();
    return t.title;
  }
  const Ud = () => ({ found: [], read: [] }), Kn = (t, e) => Array.isArray(t) ? [...new Set(t.filter((s) => typeof s == "string" && e.has(s)))] : [];
  function b1(t, e, s, n = /* @__PURE__ */ new Set()) {
    if (typeof t != "object" || t === null) return Ud();
    const r = t, i = { found: Kn(r.found, e), read: Kn(r.read, s) }, o = r.reader;
    if (typeof o == "object" && o !== null) {
      const c = o, l = typeof c.chapter == "string" && s.has(c.chapter) ? c.chapter : void 0, d = typeof c.scroll == "number" && Number.isFinite(c.scroll) ? Math.min(1, Math.max(0, c.scroll)) : 0;
      i.reader = { ...l ? { chapter: l } : {}, scroll: d, done: Kn(c.done, s) };
    }
    const a = Kn(r.glossOff, n);
    return a.length > 0 && (i.glossOff = a), i;
  }
  const v1 = (t, e) => t.found.includes(e) ? t : { ...t, found: [...t.found, e] }, Fd = (t, e) => t.read.includes(e) ? t : { ...t, read: [...t.read, e] };
  function w1(t, e, s) {
    var _a3;
    const n = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] }, r = Math.min(1, Math.max(0, s));
    return n.chapter === e && Math.abs(n.scroll - r) < 5e-3 ? t : { ...t, reader: { ...n, chapter: e, scroll: r } };
  }
  function y1(t, e) {
    var _a3;
    const s = (_a3 = t.reader) != null ? _a3 : { scroll: 0, done: [] };
    return s.done.includes(e) ? t : { ...t, reader: { ...s, done: [...s.done, e] } };
  }
  function S1(t, e, s) {
    var _a3;
    const n = (_a3 = t.glossOff) != null ? _a3 : [];
    if (s) {
      if (!n.includes(e)) return t;
      const r = n.filter((a) => a !== e), { glossOff: i, ...o } = t;
      return r.length > 0 ? { ...o, glossOff: r } : o;
    }
    return n.includes(e) ? t : { ...t, glossOff: [...n, e] };
  }
  const Bd = (t, e) => "".concat(t, "/").concat(e), $1 = { en: { "enc.tagline": "An illustrated encyclopedia to explore", "enc.open": "Open the book", "enc.continue": "Continue reading", "enc.nav.label": "Parts of the book", "enc.nav.title": "Title page", "enc.nav.index": "Index", "enc.nav.timeline": "Timeline", "enc.nav.map": "Map", "enc.nav.codex": "Codex", "enc.nav.hunts": "Hunts", "enc.masthead.sub": "Browse the articles, follow the links, then go hunting for the answers.", "enc.stat.found": "Collected", "enc.stat.stars": "Stars", "enc.stat.read": "Read", "enc.search.label": "Search the encyclopedia", "enc.search.placeholder": "A word, then Enter", "enc.search.none": 'No article matches "{q}".', "enc.search.count": "{n} found. Press Enter to open the first.", "enc.search.results": "Search results", "enc.index": "Index of articles", "enc.chapter": "Chapter {n}", "enc.locked": 'The hunts of this chapter open when you have mastered "{unit}". The articles are free to read.', "enc.readMark": "read", "enc.other": "More articles", "enc.plate": "Plate", "enc.back": "Back", "enc.seeAlso": "See also", "enc.sources": "Sources", "enc.openSource": "Open the source in a new tab", "enc.audio.play": "Listen", "enc.audio.stop": "Stop listening", "reader.listen": "Listen to paragraph {n}", "reader.listen.stop": "Stop paragraph {n}", "reader.listenAll": "Listen to the whole text", "reader.listenAll.stop": "Stop listening", "enc.runhead": "Article", "enc.collect": "Collect: {name}", "enc.collect.hint": "This page answers your clue.", "enc.clue.label": "Clue {n} of {total}", "enc.clue.bar": "Your hunt: {title}", "enc.clue.retry": "Back again. Read this page more closely.", "enc.clue.drop": "Put the hunt aside", "enc.tl.title": "Timeline", "enc.tl.intro": "Events along a ruler, true to scale. Use the left and right arrow keys to move between them.", "enc.tl.box": "Timeline of events", "enc.tl.read": "Read the article", "enc.tl.empty": "There are no dated events yet.", "enc.bc": "BC", "enc.map.title": "Map", "enc.map.intro": "Brass pins mark the places of the articles. Choose a pin, or a name from the list below it.", "enc.map.places": "Places on this map", "enc.map.none": "No places are marked on this map yet.", "enc.map.box": "The map", "enc.codex.title": "Codex", "enc.codex.intro": "Everything you have collected on your hunts, and the fact each one taught you.", "enc.codex.count": "{found} of {total} collected", "enc.codex.unknown": "Not found yet", "enc.codex.taught": "It taught you", "enc.codex.read": 'Read "{title}"', "enc.codex.empty": "Start a hunt to fill this page.", "enc.hunts.title": "Scavenger hunts", "enc.hunts.intro": "Each hunt gives you a clue. Find the article, collect the thing, and answer its question. Read first: the answer is in the article.", "enc.hunt.clues": "Clues: {n}", "enc.hunt.found": "{found} of {n} collected", "enc.hunt.start": "Start the hunt", "enc.hunt.again": "Hunt again", "enc.hunt.locked": 'Locked: master "{unit}" first.', "enc.hunt.empty": "No clues in this hunt.", "enc.hunt.final": "The grand hunt", "enc.hunt.final.intro": "Clues from every chapter, mixed up. Show that you remember.", "enc.hunt.final.locked": "Opens when every chapter is mastered.", "enc.hunt.auto": "Hunt: {unit}", "enc.hunt.auto.intro": "Find the pages and collect what they hold.", "enc.auto.clue": "Find the article about {title}.", "enc.auto.name": "Bookmark: {title}", "enc.res.title": "The hunt is over", "enc.res.good": "Well hunted! You collected {n} of {total}.", "enc.res.more": "You collected {n} of {total}. Read the articles again and hunt once more to master this chapter.", "enc.res.unlocked": "New hunts are open: {units}.", "enc.res.final": "The grand hunt is done. The book is yours.", "enc.finish": "Close the book", "enc.hud": "Hunt: {title}", "enc.lead": "To collect: {name}", "enc.q.back": "Back to the article", "enc.turn": "Turn the page", "enc.fx.found": "Collected: {name}. It is in your codex.", "enc.fx.again": "{name} is already in your codex. This answer counts for the hunt.", "enc.fx.missed": "Not collected yet. Read the article again: the clue comes back.", "enc.end.title": "Encyclopedia mastered!", "enc.end.sub": "You hunted through every chapter of the book.", "enc.end.stats": "Collected {found} of {total}. Articles read: {read} of {articles}." }, hr: { "enc.tagline": "Ilustrirana enciklopedija za istraživanje", "enc.open": "Otvori knjigu", "enc.continue": "Nastavi čitati", "enc.nav.label": "Dijelovi knjige", "enc.nav.title": "Naslovnica", "enc.nav.index": "Kazalo", "enc.nav.timeline": "Vremenska crta", "enc.nav.map": "Karta", "enc.nav.codex": "Kodeks", "enc.nav.hunts": "Potrage", "enc.masthead.sub": "Listaj članke, prati poveznice, a zatim kreni u potragu za odgovorima.", "enc.stat.found": "Skupljeno", "enc.stat.stars": "Zvjezdice", "enc.stat.read": "Pročitano", "enc.search.label": "Pretraži enciklopediju", "enc.search.placeholder": "Riječ, pa Enter", "enc.search.none": 'Nijedan članak ne odgovara upitu "{q}".', "enc.search.count": "Pronađeno: {n}. Pritisni Enter da otvoriš prvi.", "enc.search.results": "Rezultati pretrage", "enc.index": "Kazalo članaka", "enc.chapter": "Poglavlje {n}", "enc.locked": 'Potrage ovog poglavlja otvaraju se kad savladaš cjelinu "{unit}". Članke možeš čitati slobodno.', "enc.readMark": "pročitano", "enc.other": "Ostali članci", "enc.plate": "Ilustracija", "enc.back": "Natrag", "enc.seeAlso": "Vidi i", "enc.sources": "Izvori", "enc.openSource": "Otvori izvor u novoj kartici", "enc.audio.play": "Poslušaj", "enc.audio.stop": "Zaustavi slušanje", "reader.listen": "Poslušaj odlomak {n}", "reader.listen.stop": "Zaustavi odlomak {n}", "reader.listenAll": "Poslušaj cijeli tekst", "reader.listenAll.stop": "Zaustavi slušanje", "enc.runhead": "Članak", "enc.collect": "Uzmi: {name}", "enc.collect.hint": "Ova stranica odgovara na tvoj trag.", "enc.clue.label": "Trag {n} od {total}", "enc.clue.bar": "Tvoja potraga: {title}", "enc.clue.retry": "Opet na redu. Pročitaj ovu stranicu pažljivije.", "enc.clue.drop": "Odloži potragu", "enc.tl.title": "Vremenska crta", "enc.tl.intro": "Događaji na ravnalu, u mjerilu. Lijevom i desnom strelicom prelaziš s jednog na drugi.", "enc.tl.box": "Vremenska crta događaja", "enc.tl.read": "Pročitaj članak", "enc.tl.empty": "Još nema datiranih događaja.", "enc.bc": "pr. Kr.", "enc.map.title": "Karta", "enc.map.intro": "Mjedene pribadače označavaju mjesta iz članaka. Odaberi pribadaču ili ime s popisa ispod karte.", "enc.map.places": "Mjesta na karti", "enc.map.none": "Na ovoj karti još nema označenih mjesta.", "enc.map.box": "Karta", "enc.codex.title": "Kodeks", "enc.codex.intro": "Sve što si skupio u potragama i činjenica koju te je svaki predmet naučio.", "enc.codex.count": "Skupljeno {found} od {total}", "enc.codex.unknown": "Još nije pronađeno", "enc.codex.taught": "Naučio te je", "enc.codex.read": 'Pročitaj "{title}"', "enc.codex.empty": "Započni potragu da ispuniš ovu stranicu.", "enc.hunts.title": "Potrage", "enc.hunts.intro": "Svaka potraga daje trag. Pronađi članak, uzmi predmet i odgovori na njegovo pitanje. Prvo čitaj: odgovor je u članku.", "enc.hunt.clues": "Tragova: {n}", "enc.hunt.found": "Skupljeno {found} od {n}", "enc.hunt.start": "Kreni u potragu", "enc.hunt.again": "Potraži ponovno", "enc.hunt.locked": 'Zaključano: prvo savladaj cjelinu "{unit}".', "enc.hunt.empty": "Ova potraga nema tragova.", "enc.hunt.final": "Velika potraga", "enc.hunt.final.intro": "Tragovi iz svih poglavlja, pomiješani. Pokaži da pamtiš.", "enc.hunt.final.locked": "Otvara se kad su sva poglavlja savladana.", "enc.hunt.auto": "Potraga: {unit}", "enc.hunt.auto.intro": "Pronađi stranice i skupi što skrivaju.", "enc.auto.clue": "Pronađi članak o temi: {title}.", "enc.auto.name": "Straničnik: {title}", "enc.res.title": "Potraga je gotova", "enc.res.good": "Dobra potraga! Skupio/la si {n} od {total}.", "enc.res.more": "Skupio/la si {n} od {total}. Pročitaj članke ponovno i potraži još jednom da savladaš ovo poglavlje.", "enc.res.unlocked": "Otvorene su nove potrage: {units}.", "enc.res.final": "Velika potraga je gotova. Knjiga je tvoja.", "enc.finish": "Zatvori knjigu", "enc.hud": "Potraga: {title}", "enc.lead": "Za uzeti: {name}", "enc.q.back": "Natrag na članak", "enc.turn": "Okreni stranicu", "enc.fx.found": "Skupljeno: {name}. Nalazi se u tvom kodeksu.", "enc.fx.again": "{name} već imaš u kodeksu. Ovaj odgovor se ipak računa za potragu.", "enc.fx.missed": "Još nije skupljeno. Pročitaj članak ponovno: trag se vraća.", "enc.end.title": "Enciklopedija savladana!", "enc.end.sub": "Proveo/la si potragu kroz svako poglavlje knjige.", "enc.end.stats": "Skupljeno {found} od {total}. Pročitanih članaka: {read} od {articles}." }, de: { "enc.tagline": "Eine bebilderte Enzyklopädie zum Entdecken", "enc.open": "Das Buch öffnen", "enc.continue": "Weiterlesen", "enc.nav.label": "Teile des Buches", "enc.nav.title": "Titelseite", "enc.nav.index": "Register", "enc.nav.timeline": "Zeitleiste", "enc.nav.map": "Karte", "enc.nav.codex": "Kodex", "enc.nav.hunts": "Schnitzeljagden", "enc.masthead.sub": "Blättere durch die Artikel, folge den Verweisen und gehe dann auf die Suche nach den Antworten.", "enc.stat.found": "Gesammelt", "enc.stat.stars": "Sterne", "enc.stat.read": "Gelesen", "enc.search.label": "Die Enzyklopädie durchsuchen", "enc.search.placeholder": "Ein Wort, dann Enter", "enc.search.none": "Kein Artikel passt zu „{q}“.", "enc.search.count": "{n} gefunden. Drücke Enter, um den ersten zu öffnen.", "enc.search.results": "Suchergebnisse", "enc.index": "Artikelregister", "enc.chapter": "Kapitel {n}", "enc.locked": "Die Schnitzeljagden dieses Kapitels öffnen sich, wenn du „{unit}“ gemeistert hast. Die Artikel kannst du jederzeit lesen.", "enc.readMark": "gelesen", "enc.other": "Weitere Artikel", "enc.plate": "Tafel", "enc.back": "Zurück", "enc.seeAlso": "Siehe auch", "enc.sources": "Quellen", "enc.openSource": "Die Quelle in einem neuen Tab öffnen", "enc.audio.play": "Anhören", "enc.audio.stop": "Anhören beenden", "reader.listen": "Absatz {n} anhören", "reader.listen.stop": "Absatz {n} anhalten", "reader.listenAll": "Den ganzen Text anhören", "reader.listenAll.stop": "Anhören beenden", "enc.runhead": "Artikel", "enc.collect": "Sammeln: {name}", "enc.collect.hint": "Diese Seite beantwortet deinen Hinweis.", "enc.clue.label": "Hinweis {n} von {total}", "enc.clue.bar": "Deine Suche: {title}", "enc.clue.retry": "Wieder da. Lies diese Seite genauer.", "enc.clue.drop": "Die Suche beiseitelegen", "enc.tl.title": "Zeitleiste", "enc.tl.intro": "Ereignisse an einem Lineal, maßstabsgetreu. Mit den Pfeiltasten links und rechts wechselst du zwischen ihnen.", "enc.tl.box": "Zeitleiste der Ereignisse", "enc.tl.read": "Den Artikel lesen", "enc.tl.empty": "Es gibt noch keine datierten Ereignisse.", "enc.bc": "v. Chr.", "enc.map.title": "Karte", "enc.map.intro": "Messingnadeln markieren die Orte der Artikel. Wähle eine Nadel oder einen Namen aus der Liste darunter.", "enc.map.places": "Orte auf dieser Karte", "enc.map.none": "Auf dieser Karte sind noch keine Orte markiert.", "enc.map.box": "Die Karte", "enc.codex.title": "Kodex", "enc.codex.intro": "Alles, was du auf deinen Suchen gesammelt hast, und was dir jedes Stück beigebracht hat.", "enc.codex.count": "{found} von {total} gesammelt", "enc.codex.unknown": "Noch nicht gefunden", "enc.codex.taught": "Das hat es dich gelehrt", "enc.codex.read": "„{title}“ lesen", "enc.codex.empty": "Starte eine Suche, um diese Seite zu füllen.", "enc.hunts.title": "Schnitzeljagden", "enc.hunts.intro": "Jede Jagd gibt dir einen Hinweis. Finde den Artikel, sammle das Gesuchte und beantworte die Frage dazu. Lies zuerst: Die Antwort steht im Artikel.", "enc.hunt.clues": "Hinweise: {n}", "enc.hunt.found": "{found} von {n} gesammelt", "enc.hunt.start": "Die Jagd starten", "enc.hunt.again": "Noch einmal jagen", "enc.hunt.locked": "Gesperrt: Meistere zuerst „{unit}“.", "enc.hunt.empty": "Diese Jagd hat keine Hinweise.", "enc.hunt.final": "Die große Jagd", "enc.hunt.final.intro": "Hinweise aus allen Kapiteln, durcheinander. Zeige, dass du dich erinnerst.", "enc.hunt.final.locked": "Öffnet sich, wenn alle Kapitel gemeistert sind.", "enc.hunt.auto": "Jagd: {unit}", "enc.hunt.auto.intro": "Finde die Seiten und sammle, was sie enthalten.", "enc.auto.clue": "Finde den Artikel über {title}.", "enc.auto.name": "Lesezeichen: {title}", "enc.res.title": "Die Jagd ist vorbei", "enc.res.good": "Gut gejagt! Du hast {n} von {total} gesammelt.", "enc.res.more": "Du hast {n} von {total} gesammelt. Lies die Artikel noch einmal und jage erneut, um dieses Kapitel zu meistern.", "enc.res.unlocked": "Neue Jagden sind offen: {units}.", "enc.res.final": "Die große Jagd ist geschafft. Das Buch gehört dir.", "enc.finish": "Das Buch schließen", "enc.hud": "Jagd: {title}", "enc.lead": "Zu sammeln: {name}", "enc.q.back": "Zurück zum Artikel", "enc.turn": "Umblättern", "enc.fx.found": "Gesammelt: {name}. Es ist in deinem Kodex.", "enc.fx.again": "{name} ist schon in deinem Kodex. Diese Antwort zählt für die Jagd.", "enc.fx.missed": "Noch nicht gesammelt. Lies den Artikel noch einmal: Der Hinweis kommt wieder.", "enc.end.title": "Enzyklopädie gemeistert!", "enc.end.sub": "Du hast jedes Kapitel des Buches durchjagt.", "enc.end.stats": "{found} von {total} gesammelt. Gelesene Artikel: {read} von {articles}." } }, z1 = (t) => {
    try {
      return new URL(t).hostname.replace(/^www\./, "");
    } catch (e) {
      return t;
    }
  };
  function _1(t, e) {
    var _a3, _b3;
    const s = t.s, n = t.arts.get(e);
    if (!n) return u("div", {});
    const r = n.unit ? s.unitTitle(n.unit) : "", i = n.assetId ? s.pack.assets.find((w) => w.id === n.assetId) : void 0, o = i ? s.data.assets[i.id] : void 0, a = t.pinned(), c = a && a.step.article === e ? a : null, l = c ? u("div", { class: "enc-collect" }, u("span", { class: "enc-collect-hint" }, c.retry ? s.s("enc.clue.retry") : s.s("enc.collect.hint")), I("collect-".concat(c.step.id), u("span", { class: "enc-seal-label" }, s.s("enc.collect", { name: t.collectibleName(c.step) })), () => t.collect(c.step), { class: "btn btn-primary btn-big enc-seal", "data-autofocus": "" })) : null, d = i && o && i.kind === "image" ? u("figure", { class: "enc-figure", testid: "article-figure" }, u("div", { class: "enc-figure-frame" }, u("img", { src: o, alt: s.t(i.alt) })), u("figcaption", {}, s.t(i.alt))) : null, h = (_a3 = s.pack.extensions.narration) != null ? _a3 : {}, p = i && o && i.kind === "audio" ? o : s.data.assets[(_b3 = h["art.".concat(e, ".body")]) != null ? _b3 : ""];
    let f = null;
    if (p) {
      const w = (A) => "".concat(A ? "■" : "▶", " ").concat(s.s(A ? "enc.audio.stop" : "enc.audio.play"));
      f = I("article-audio", w(false), () => {
        if (t.audio) {
          t.stopAudio(), f && (f.textContent = w(false));
          return;
        }
        try {
          const A = new Audio(p);
          t.audio = A, A.onended = () => {
            t.audio === A && (t.audio = null), f && (f.textContent = w(false)), s.audio.duck(false);
          }, A.play().then(() => s.audio.duck(true), () => {
          }), f && (f.textContent = w(true));
        } catch (e2) {
          t.audio = null;
        }
      }, { class: "btn btn-small enc-audio", "aria-describedby": "enc-audio-desc" });
    }
    const m = n.related.filter((w) => t.arts.has(w)), k = new Map(s.pack.factbase.map((w) => [w.id, w])), g = n.citations.map((w) => k.get(w)).filter((w) => !!w), b = t.glossWords(e), v = hi(s.ui), $ = new Set(b.filter((w) => t.glossOff().has("".concat(e, "/").concat(w.id))).map((w) => w.id)), S = (w, A) => I("link-".concat(w), A, () => t.article(w, () => t.article(e)), { class: "enc-xlink" }), _ = ui(t.segments(e), b);
    return u("div", { class: "enc-article" }, u("div", { class: "enc-toolbar" }, I("back", "‹ ".concat(s.s("enc.back")), () => t.back(), { class: "btn btn-small btn-ghost" })), u("article", { class: "enc-spread", testid: "article", "data-article": e }, u("div", { class: "enc-text" }, u("p", { class: "enc-runhead" }, u("span", {}, r || s.s("enc.runhead")), u("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), u("span", {}, s.courseTitle())), u("h1", { class: "screen-title enc-article-title", tabindex: "-1", testid: "article-title" }, n.title), u("p", { class: "enc-rule", "aria-hidden": "true" }), l, u("div", { class: "enc-body gloss-scope", testid: "article-body", ...b.length > 0 && s.pack.targetLang ? { lang: s.pack.targetLang } : {} }, _.map((w) => pi(w, v, S, $)), b.length > 0 ? v.el : null)), u("aside", { class: "enc-plates" }, d, f ? u("div", { class: "enc-audio-wrap" }, f, u("span", { class: "sr-only", id: "enc-audio-desc" }, i ? s.t(i.alt) : "")) : null, m.length > 0 ? u("section", { class: "enc-related", testid: "related" }, u("h2", {}, s.s("enc.seeAlso")), u("ul", {}, m.map((w) => u("li", {}, I("related-".concat(w), t.articleTitle(w), () => t.article(w, () => t.article(e)), { class: "enc-related-btn" }))))) : null, g.length > 0 ? u("section", { class: "enc-sources", testid: "citations" }, u("h2", {}, s.s("enc.sources")), u("ul", {}, g.map((w) => u("li", { testid: "citation-".concat(w.id) }, u("span", { class: "enc-source-name" }, w.source), w.claim && s.text.hasText(w.claim) ? u("span", { class: "enc-source-claim" }, s.t(w.claim)) : null, w.url ? u("a", { class: "enc-source-link", href: w.url, target: "_blank", rel: "noopener noreferrer", testid: "citation-link-".concat(w.id) }, z1(w.url), u("span", { class: "sr-only" }, " (".concat(s.s("enc.openSource"), ")"))) : null)))) : null)));
  }
  function Kd(t) {
    const e = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    let s = "", n = Math.max(1, Math.floor(t));
    for (const [r, i] of e) for (; n >= r; ) s += i, n -= r;
    return s;
  }
  function j1(t) {
    const e = t.s, s = t.statusCounts(), n = (b, v, $) => u("span", { class: "enc-stat", testid: $ }, u("span", { class: "enc-stat-label" }, b), u("b", { class: "enc-stat-value" }, v)), r = u("ul", { class: "enc-results", testid: "search-results" }), i = u("p", { class: "enc-search-status", id: "enc-search-status", role: "status", testid: "search-status" }), o = (b) => {
      const v = t.search(b);
      xs(r);
      for (const S of v) r.appendChild(u("li", {}, u("button", { type: "button", class: "enc-result", testid: "result-".concat(S.id), onclick: () => t.article(S.id, () => t.explore()) }, u("span", { class: "enc-result-title" }, t.articleTitle(S.id)), S.snippet ? u("span", { class: "enc-result-snippet" }, S.snippet) : null)));
      const $ = b.trim();
      return i.textContent = $.replace(/\s/g, "").length < 2 ? "" : v.length === 0 ? e.s("enc.search.none", { q: $ }) : e.s("enc.search.count", { n: v.length }), v;
    }, a = u("input", { type: "search", class: "enc-search-input", id: "enc-search", testid: "search", autocomplete: "off", spellcheck: "false", enterkeyhint: "search", placeholder: e.s("enc.search.placeholder"), "aria-describedby": "enc-search-status", value: t.query, oninput: (b) => {
      t.query = b.target.value, o(t.query);
    }, onkeydown: (b) => {
      const v = b;
      if (v.key !== "Enter") return;
      v.preventDefault();
      const $ = o(t.query)[0];
      $ && t.article($.id, () => t.explore());
    } }), c = u("form", { class: "enc-search", role: "search", onsubmit: (b) => b.preventDefault() }, u("label", { class: "enc-search-label", for: "enc-search" }, e.s("enc.search.label")), u("div", { class: "enc-search-box" }, u("span", { class: "enc-search-glass", "aria-hidden": "true" }), a), i, u("div", { class: "enc-results-wrap", "aria-label": e.s("enc.search.results"), role: "group" }, r));
    t.query && o(t.query);
    const l = e.pack.assets.find((b) => b.kind === "image" && e.data.assets[b.id]), d = l ? u("figure", { class: "enc-plate", testid: "plate" }, u("div", { class: "enc-plate-frame" }, u("img", { src: e.data.assets[l.id], alt: e.t(l.alt), loading: "lazy" })), u("figcaption", {}, u("span", { class: "enc-plate-no" }, e.s("enc.plate")), " ", e.t(l.alt))) : null, h = e.units(), p = /* @__PURE__ */ new Set(), f = (b) => {
      p.add(b);
      const v = t.data.read.includes(b);
      return u("li", {}, u("button", { type: "button", class: "enc-entry", testid: "article-".concat(b), "data-read": v ? "true" : null, onclick: () => t.article(b, () => t.explore()) }, u("span", { class: "enc-entry-title" }, t.articleTitle(b)), u("span", { class: "enc-entry-leader", "aria-hidden": "true" }), v ? u("span", { class: "enc-entry-read" }, u("span", { "aria-hidden": "true" }, "✓"), u("span", { class: "sr-only" }, " ".concat(e.s("enc.readMark")))) : null));
    }, m = h.flatMap((b, v) => {
      const $ = t.articleList().filter((A) => A.unit === b.id).map((A) => A.id);
      if ($.length === 0) return [];
      const _ = t.model.hunts.filter((A) => A.unit === b.id).length > 0 && !e.isUnlocked(b.id), w = b.requires.find((A) => !e.isMastered(A));
      return [u("section", { class: "enc-chapter", testid: "chapter-".concat(b.id), "data-locked": _ ? "true" : null }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, Kd(v + 1)), u("span", { class: "enc-chapter-name" }, e.unitTitle(b.id))), _ ? u("p", { class: "enc-chapter-note", testid: "chapter-locked-".concat(b.id) }, u("span", { "aria-hidden": "true" }, "🔒 "), e.s("enc.locked", { unit: w ? e.unitTitle(w) : e.unitTitle(b.id) })) : null, u("ul", { class: "enc-entries" }, $.map(f)))];
    }), k = t.articleList().filter((b) => !p.has(b.id) && !h.some((v) => v.id === b.unit)), g = k.length > 0 ? u("section", { class: "enc-chapter", testid: "chapter-other" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-chapter-name" }, e.s("enc.other"))), u("ul", { class: "enc-entries" }, k.map((b) => f(b.id)))) : null;
    return u("div", { class: "enc-explore" }, u("header", { class: "enc-masthead" }, u("p", { class: "enc-eyebrow" }, e.pack.subject.charAt(0).toLocaleUpperCase() + e.pack.subject.slice(1)), u("h1", { class: "screen-title enc-title", tabindex: "-1", testid: "explore-title" }, e.courseTitle()), u("p", { class: "enc-orn", "aria-hidden": "true" }, "❦"), u("p", { class: "enc-sub" }, e.s("enc.masthead.sub")), u("p", { class: "enc-stats", testid: "status" }, n(e.s("enc.stat.found"), "".concat(s.found, " / ").concat(s.total), "status-found"), n(e.s("enc.stat.stars"), "".concat(s.stars, " / ").concat(s.maxStars), "status-stars"), n(e.s("enc.stat.read"), "".concat(s.read, " / ").concat(s.articles), "status-read"))), u("div", { class: "enc-columns" }, u("aside", { class: "enc-side" }, c, d), u("div", { class: "enc-indexwrap" }, u("h2", { class: "sr-only" }, e.s("enc.index")), u("div", { class: "enc-index" }, m, g))));
  }
  function x1(t) {
    const e = t.pinned(), s = t.hunt;
    if (!e || !s) return null;
    const n = t.s;
    return u("div", { class: "enc-clue".concat(e.retry ? " is-retry" : ""), role: "group", "aria-label": n.s("enc.clue.bar", { title: s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt) }), testid: "clue-bar", "data-step": e.step.id }, u("span", { class: "enc-clue-pin", "aria-hidden": "true" }), u("div", { class: "enc-clue-main" }, u("span", { class: "enc-clue-label" }, "".concat(s.final ? n.s("enc.hunt.final") : t.huntTitle(s.hunt), " · ").concat(n.s("enc.clue.label", { n: e.n, total: e.total }))), u("p", { class: "enc-clue-text", testid: "clue" }, t.stepClue(e.step)), e.retry ? u("span", { class: "tag tag-retry enc-clue-retry", testid: "clue-retry" }, n.s("enc.clue.retry")) : null), I("clue-drop", n.s("enc.clue.drop"), () => t.dropHunt(), { class: "btn btn-small btn-ghost enc-clue-drop" }));
  }
  function E1(t, e, s) {
    const n = t.s;
    return u("div", { class: "enc-hud", testid: "hunt-hud" }, u("span", { class: "enc-hud-title" }, n.s("enc.hud", { title: e.final ? n.s("enc.hunt.final") : t.huntTitle(e.hunt) })), u("span", { class: "enc-hud-step" }, n.s("enc.clue.label", { n: s, total: e.steps.length })), u("span", { class: "enc-hud-pips", role: "img", "aria-label": n.s("enc.hunt.found", { found: e.collected.length, n: e.steps.length }) }, e.steps.map((r) => u("span", { class: "enc-hud-pip".concat(e.collected.includes(r.id) ? " is-found" : ""), "aria-hidden": "true" }))));
  }
  function A1(t) {
    const e = t.s, s = t.statusCounts(), n = t.model.hunts.map((r) => ({ hunt: r, steps: t.stepsOf(r) })).filter((r) => r.steps.length > 0).map((r) => u("section", { class: "enc-codex-group", "data-unit": r.hunt.unit }, u("h2", {}, e.unitTitle(r.hunt.unit)), u("ul", { class: "enc-codex-grid" }, r.steps.map((i) => t.found(i) ? u("li", { class: "enc-specimen is-found", testid: "codex-".concat(i.id), "data-found": "true" }, u("span", { class: "enc-medal", "aria-hidden": "true" }, "✦"), u("h3", { class: "enc-specimen-name" }, t.collectibleName(i)), u("p", { class: "enc-specimen-taught" }, u("span", { class: "enc-specimen-taught-label" }, "".concat(e.s("enc.codex.taught"), ": ")), t.taught(i)), I("codex-link-".concat(i.id), e.s("enc.codex.read", { title: t.articleTitle(i.article) }), () => t.article(i.article, () => t.codex()), { class: "btn btn-small enc-specimen-link" })) : u("li", { class: "enc-specimen is-unknown", testid: "codex-".concat(i.id), "data-found": "false" }, u("span", { class: "enc-medal", "aria-hidden": "true" }, "?"), u("p", { class: "enc-specimen-name" }, e.s("enc.codex.unknown")))))));
    return u("div", { class: "enc-codex" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "codex-title" }, e.s("enc.codex.title")), u("p", { class: "enc-part-intro" }, e.s("enc.codex.intro")), u("p", { class: "enc-codex-count", testid: "codex-count", "data-found": String(s.found), "data-total": String(s.total) }, e.s("enc.codex.count", { found: s.found, total: s.total })), s.found === 0 ? u("p", { class: "enc-codex-empty", testid: "codex-empty" }, e.s("enc.codex.empty")) : null, n);
  }
  function T1(t, e) {
    const s = t.s, n = s.units(), r = e ? u("div", { class: "enc-result".concat(e.stars >= 2 ? " is-good" : ""), role: "group", "aria-label": s.s("enc.res.title"), testid: "hunt-result", "data-stars": String(e.stars), "data-final": e.final ? "true" : "false", "data-collected": String(e.collected), "data-total": String(e.total) }, u("h2", { class: "enc-result-title" }, s.s("enc.res.title")), s.stars(e.stars, "hunt-result-stars"), u("p", { class: "enc-result-text" }, t.resultText(e))) : null, i = n.flatMap((l, d) => {
      const h = t.model.hunts.filter((m) => m.unit === l.id);
      if (h.length === 0) return [];
      const p = !s.isUnlocked(l.id), f = l.requires.find((m) => !s.isMastered(m));
      return [u("section", { class: "enc-hunt-chapter", "data-unit": l.id, "data-locked": p ? "true" : null, testid: "hunt-chapter-".concat(l.id) }, u("div", { class: "enc-hunt-chapter-head" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, Kd(d + 1)), u("span", { class: "enc-chapter-name" }, s.unitTitle(l.id))), s.stars(s.unitStars(l.id), "hunt-stars-".concat(l.id))), h.map((m) => {
        const k = t.stepsOf(m), g = k.filter(($) => t.found($)).length, b = t.isHuntOpen(m), v = t.huntIntro(m);
        return u("article", { class: "enc-hunt-card", "data-locked": b ? null : "true" }, u("h3", { class: "enc-hunt-title" }, t.huntTitle(m)), v ? u("p", { class: "enc-hunt-intro" }, v) : null, u("p", { class: "enc-hunt-meta" }, "".concat(s.s("enc.hunt.clues", { n: k.length }), " · ").concat(s.s("enc.hunt.found", { found: g, n: k.length }))), k.length === 0 ? u("p", { class: "enc-hunt-note" }, s.s("enc.hunt.empty")) : p ? u("p", { class: "enc-hunt-note", testid: "hunt-locked-".concat(m.id) }, u("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.locked", { unit: f ? s.unitTitle(f) : s.unitTitle(l.id) })) : null, I("hunt-".concat(m.id), g === k.length && k.length > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startHunt(m), { class: "btn btn-primary enc-hunt-go", ...b ? {} : { disabled: true }, "data-locked": b ? null : "true", "data-stars": String(s.unitStars(l.id)) }));
      }))];
    }), o = t.isFinalOpen(), a = t.finalSteps(), c = a.length > 0 ? u("section", { class: "enc-hunt-chapter enc-grand", "data-locked": o ? null : "true", testid: "hunt-chapter-final" }, u("div", { class: "enc-hunt-chapter-head" }, u("h2", { class: "enc-chapter-title" }, u("span", { class: "enc-numeral", "aria-hidden": "true" }, "★"), u("span", { class: "enc-chapter-name" }, s.s("enc.hunt.final"))), s.stars(s.bossStars(), "hunt-stars-final")), u("article", { class: "enc-hunt-card", "data-locked": o ? null : "true" }, u("p", { class: "enc-hunt-intro" }, s.s("enc.hunt.final.intro")), u("p", { class: "enc-hunt-meta" }, s.s("enc.hunt.clues", { n: a.length })), o ? null : u("p", { class: "enc-hunt-note", testid: "hunt-locked-final" }, u("span", { "aria-hidden": "true" }, "🔒 "), s.s("enc.hunt.final.locked")), I("hunt-final", s.bossStars() > 0 ? s.s("enc.hunt.again") : s.s("enc.hunt.start"), () => t.startFinal(), { class: "btn btn-primary enc-hunt-go", ...o ? {} : { disabled: true }, "data-locked": o ? null : "true", "data-stars": String(s.bossStars()) }))) : null;
    return u("div", { class: "enc-hunts" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "hunts-title" }, s.s("enc.hunts.title")), u("p", { class: "enc-part-intro" }, s.s("enc.hunts.intro")), r, s.bossStars() >= 1 ? u("div", { class: "actions" }, I("finish", s.s("enc.finish"), () => t.end(), { class: "btn btn-big" })) : null, i, c);
  }
  function I1(t) {
    let e = 1 / 0;
    for (let s = 0; s < t.length; s++) for (let n = s + 1; n < t.length; n++) {
      const r = t[s], i = t[n];
      e = Math.min(e, Math.hypot(r.x - i.x, r.y - i.y));
    }
    return e;
  }
  function M1(t, e, s = 34, n = 300) {
    const r = I1(t);
    return !Number.isFinite(r) || r <= 0 ? Math.min(e, n) : Math.round(Math.min(e, Math.max(n, e * s / r)));
  }
  function O1(t, e, s) {
    const n = s === "left" || s === "right", r = [...t].sort((a, c) => (n ? a.x - c.x || a.y - c.y : a.y - c.y || a.x - c.x) || a.id.localeCompare(c.id)), i = r.findIndex((a) => a.id === e);
    return r.length === 0 ? void 0 : r[(i + (s === "right" || s === "down" ? 1 : -1) + r.length) % r.length];
  }
  const N1 = (t, e, s) => ({ left: "".concat(Math.round(t.x / e * 1e4) / 100, "%"), top: "".concat(Math.round(t.y / s * 1e4) / 100, "%") }), Di = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 5e3];
  function P1(t, e = 9) {
    for (const s of Di) if (t / s <= e) return s;
    return Di[Di.length - 1];
  }
  function R1(t, e) {
    const s = Math.max(1, e - t), n = P1(s), r = n >= 10 ? n / 5 : n >= 2 ? n / 2 : n, i = [], o = Math.ceil(t / r) * r;
    for (let a = o; a <= e; a += r) a !== 0 && i.push({ year: a, major: a % n === 0 });
    return i;
  }
  function D1(t, e = {}) {
    var _a3, _b3, _c2;
    const s = (_a3 = e.card) != null ? _a3 : 150, n = (_b3 = e.gap) != null ? _b3 : 12, r = Math.round(s / 2) + 14, i = [...t].sort((v, $) => v.year - $.year || v.id.localeCompare($.id)), o = i.length, a = Math.ceil(o / 2), c = Math.max((_c2 = e.minWidth) != null ? _c2 : 760, a * (s + n) + 2 * r - n), l = o > 0 ? i[0].year : 0, d = o > 0 ? i[o - 1].year : 0, h = Math.max(1, d - l), p = (c - 2 * r) / h, f = (v) => o === 1 || d === l ? c / 2 : r + (v - l) * p, m = i.map((v, $) => ({ id: v.id, year: v.year, tick: f(v.year), x: f(v.year), lane: $ % 2 })), k = s + n;
    for (const v of [0, 1]) {
      const $ = m.filter((S) => S.lane === v);
      for (let S = 0; S < $.length; S++) {
        const _ = $[S];
        _.x = Math.max(r, _.x), S > 0 && (_.x = Math.max(_.x, $[S - 1].x + k));
      }
      for (let S = $.length - 1; S >= 0; S--) {
        const _ = $[S];
        _.x = Math.min(c - r, _.x), S < $.length - 1 && (_.x = Math.min(_.x, $[S + 1].x - k));
      }
    }
    const g = (v) => l + (v - r) / p, b = o === 0 || d === l ? [] : R1(Math.floor(g(0)), Math.ceil(g(c))).map((v) => ({ year: v.year, x: r + (v.year - l) * p, major: v.major }));
    return { width: c, pad: r, events: m, ticks: b.filter((v) => v.x >= 0 && v.x <= c), min: l, max: d };
  }
  const qd = (t, e) => t < 0 ? "".concat(-t, " ").concat(e) : String(t), Li = 150, qn = 440, Gn = 54;
  function L1(t) {
    var _a3, _b3;
    const e = t.s, s = t.model.timeline, n = D1(s.map((m) => ({ id: m.id, year: m.year })), { card: Li }), r = new Map(s.map((m) => [m.id, m])), i = e.s("enc.bc"), o = qn / 2;
    (!t.eventId || !r.has(t.eventId)) && (t.eventId = (_b3 = (_a3 = n.events[0]) == null ? void 0 : _a3.id) != null ? _b3 : null);
    const a = u("div", { class: "enc-tl-detail", role: "status", testid: "event-detail" }), c = (m) => {
      const k = r.get(m);
      return k ? k.whenKey && e.text.hasText(k.whenKey) ? e.t(k.whenKey) : qd(k.year, i) : "";
    }, l = (m) => {
      const k = r.get(m);
      k && (t.eventId = m, a.replaceChildren(u("b", { class: "enc-tl-detail-year" }, c(m)), " ", u("span", { class: "enc-tl-detail-label" }, e.t(k.label)), ...k.text ? [" ", u("span", { class: "enc-tl-detail-text" }, e.t(k.text))] : []), a.setAttribute("data-event", m));
    }, d = ue("svg", { class: "enc-tl-lines", width: n.width, height: qn, viewBox: "0 0 ".concat(n.width, " ").concat(qn), "aria-hidden": "true", focusable: "false" }, ...n.events.map((m) => ue("path", { d: "M ".concat(m.tick, " ").concat(o, " L ").concat(m.x, " ").concat(o + (m.lane === 0 ? -Gn : Gn)) }))), h = u("div", { class: "enc-tl-ruler", "aria-hidden": "true", style: "top:".concat(o - 21, "px") }, n.ticks.map((m) => u("span", { class: "enc-tl-tick".concat(m.major ? " is-major" : ""), style: "left:".concat(m.x, "px") }, m.major ? u("span", { class: "enc-tl-tick-label" }, qd(m.year, i)) : null)), n.events.map((m) => u("span", { class: "enc-tl-mark", style: "left:".concat(m.tick, "px") }))), p = n.events.map((m) => {
      const k = r.get(m.id);
      if (!k) return null;
      const g = !!k.article && t.arts.has(k.article);
      return I("event-".concat(k.id), [u("span", { class: "enc-tl-card-year" }, c(k.id)), u("span", { class: "enc-tl-card-label" }, e.t(k.label)), g ? u("span", { class: "enc-tl-card-more" }, "".concat(e.s("enc.tl.read"), " ›")) : null], () => {
        l(k.id), g && t.article(k.article, () => t.timeline());
      }, { class: "enc-tl-card".concat(g ? " has-article" : ""), "data-lane": String(m.lane), "data-year": String(k.year), "data-article": g ? k.article : null, style: "left:".concat(Math.round(m.x - Li / 2), "px;width:").concat(Li, "px;").concat(m.lane === 0 ? "bottom:".concat(o + Gn, "px") : "top:".concat(o + Gn, "px")), onfocus: () => l(k.id), onmouseenter: () => l(k.id) });
    }), f = u("div", { class: "enc-tl-scroll", testid: "timeline", role: "group", "aria-label": e.s("enc.tl.box"), onkeydown: (m) => {
      var _a4;
      const k = m;
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(k.key) || k.altKey || k.ctrlKey || k.metaKey) return;
      const b = [...f.querySelectorAll(".enc-tl-card")], v = b.indexOf(document.activeElement);
      if (v < 0) return;
      const $ = k.key === "Home" ? 0 : k.key === "End" ? b.length - 1 : Math.min(b.length - 1, Math.max(0, v + (k.key === "ArrowRight" ? 1 : -1)));
      k.preventDefault(), (_a4 = b[$]) == null ? void 0 : _a4.focus();
    } }, u("div", { class: "enc-tl-track", style: "width:".concat(n.width, "px;height:").concat(qn, "px") }, d, h, p));
    return t.eventId && l(t.eventId), u("div", { class: "enc-timeline" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "timeline-title" }, e.s("enc.tl.title")), u("p", { class: "enc-part-intro" }, s.length > 0 ? e.s("enc.tl.intro") : e.s("enc.tl.empty")), f, a);
  }
  function C1(t) {
    const e = t.s, s = t.model.map, n = s ? e.pack.assets.find((h) => h.id === s.asset) : void 0, r = s ? e.data.assets[s.asset] : void 0;
    if (!s || !n || !r) return u("div", { class: "enc-map-view" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1" }, e.s("enc.map.title")), u("p", {}, e.s("enc.map.none")));
    const i = s.places.filter((h) => t.arts.has(h.article)), o = s.width > 0 && s.height > 0, a = (h) => t.article(h, () => t.map()), c = o ? M1(i, s.width) : 0, l = o ? i.map((h) => {
      const p = N1(h, s.width, s.height);
      return I("place-".concat(h.id), [u("span", { class: "enc-pin-head", "aria-hidden": "true" }), u("span", { class: "enc-pin-name", "aria-hidden": "true" }, e.t(h.label))], () => a(h.article), { class: "enc-pin", "aria-label": e.t(h.label), "data-article": h.article, style: "left:".concat(p.left, ";top:").concat(p.top) });
    }) : [], d = u("div", { class: "enc-map-stage", testid: "map", style: o ? "aspect-ratio:".concat(s.width, " / ").concat(s.height, ";min-width:").concat(c, "px") : "", onkeydown: (h) => {
      var _a3, _b3;
      const p = h, f = p.key === "ArrowLeft" ? "left" : p.key === "ArrowRight" ? "right" : p.key === "ArrowUp" ? "up" : p.key === "ArrowDown" ? "down" : null;
      if (!f || p.altKey || p.ctrlKey || p.metaKey) return;
      const m = (_a3 = document.activeElement) == null ? void 0 : _a3.getAttribute("data-testid");
      if (!(m == null ? void 0 : m.startsWith("place-"))) return;
      const k = O1(i, m.slice(6), f);
      k && (p.preventDefault(), (_b3 = d.querySelector('[data-testid="place-'.concat(k.id, '"]'))) == null ? void 0 : _b3.focus());
    } }, u("img", { class: "enc-map-img", src: r, alt: e.t(n.alt) }), l);
    return u("div", { class: "enc-map-view" }, u("h1", { class: "screen-title enc-part-title", tabindex: "-1", testid: "map-title" }, e.s("enc.map.title")), u("p", { class: "enc-part-intro" }, i.length > 0 ? e.s("enc.map.intro") : e.s("enc.map.none")), u("figure", { class: "enc-map-figure" }, u("div", { class: "enc-map-scroll", role: "group", "aria-label": e.s("enc.map.box") }, d), u("figcaption", {}, e.t(n.alt))), i.length > 0 ? u("section", { class: "enc-places", testid: "places" }, u("h2", {}, e.s("enc.map.places")), u("ul", {}, i.map((h) => u("li", {}, I("place-link-".concat(h.id), [u("span", { class: "enc-place-dot", "aria-hidden": "true" }), e.t(h.label)], () => a(h.article), { class: "enc-place-btn" }))))) : null);
  }
  function Z1(t, e, s) {
    const n = [];
    for (let r = 1; ; r++) {
      const i = t["art-".concat(e, "-p").concat(s).concat(r > 1 ? "-".concat(r) : "")];
      if (!i) break;
      n.push(i);
    }
    return n;
  }
  const Gd = () => {
    var _a3;
    return (_a3 = document.scrollingElement) != null ? _a3 : document.documentElement;
  };
  function U1() {
    const t = Gd(), e = t.scrollHeight - t.clientHeight;
    return e > 0 ? t.scrollTop / e : 0;
  }
  function F1(t, e, s) {
    if (s.length === 0) return null;
    const n = t.s.ui, r = t.glossOff();
    return u("section", { class: "enc-glossary", testid: "glossary-panel", "aria-labelledby": "enc-glossary-h" }, u("h2", { id: "enc-glossary-h" }, n("gloss.panel")), u("ul", {}, s.map((i) => {
      var _a3, _b3;
      const o = "".concat(e, "/").concat(i.id), a = u("input", { type: "checkbox", testid: "gloss-deck-".concat(i.id), "aria-label": n("gloss.deck.for", { term: (_a3 = i.lemma) != null ? _a3 : i.term }), checked: !r.has(o), onchange: () => t.setGlossDeck(e, i.id, a.checked) });
      return u("li", { testid: "glossary-entry-".concat(i.id) }, u("span", { class: "enc-gloss-main" }, u("strong", { class: "enc-gloss-lemma" }, (_b3 = i.lemma) != null ? _b3 : i.term), i.pos ? u("span", { class: "gloss-pos" }, n("gloss.pos.".concat(i.pos))) : null, u("span", { class: "enc-gloss-text" }, i.gloss), i.note ? u("span", { class: "enc-gloss-note" }, i.note) : null), u("label", { class: "enc-gloss-deck" }, a, u("span", {}, n("gloss.deck"))));
    })));
  }
  function B1(t, e) {
    var _a3;
    const s = t.s, n = s.ui, r = t.chapters(), i = Math.max(0, r.findIndex((W) => W.id === e)), o = r[i];
    if (!o) return u("div", {});
    const a = t.glossWords(e), c = hi(n), l = t.glossOff(), d = new Set(a.filter((W) => l.has("".concat(e, "/").concat(W.id))).map((W) => W.id)), h = ui(o.paragraphs.map((W) => [{ text: W }]), a), p = t.chapterRead(e), f = r[i - 1], m = r[i + 1], k = o.unit ? s.unitTitle(o.unit) : "", g = t.chapterItems(e), b = u("nav", { class: "enc-reader-toc", "aria-label": n("reader.toc"), testid: "reader-toc" }, u("h2", {}, n("reader.toc")), u("ol", {}, r.map((W, ie) => u("li", {}, I("reader-chapter-".concat(W.id), [u("span", { class: "enc-reader-num" }, String(ie + 1)), u("span", { class: "enc-reader-toc-title" }, W.title), t.chapterRead(W.id) ? [u("span", { class: "mark", "aria-hidden": "true" }, "✓"), u("span", { class: "sr-only" }, " (".concat(n("reader.chapterRead"), ")"))] : null], () => t.reader(W.id), { class: "enc-reader-toc-btn", "data-read": String(t.chapterRead(W.id)), ...W.id === e ? { "aria-current": "true" } : {} }))))), v = u("div", { class: "enc-reader-end", testid: "reader-end", "aria-hidden": "true" }), $ = u("p", { class: "enc-reader-progress", testid: "reader-progress", "data-chapter": e, "data-index": String(i + 1), "data-total": String(r.length), "data-read": String(p), "aria-live": "polite" }, n("reader.progress", { n: i + 1, total: r.length })), S = (W) => {
      t.markChapterRead(e), W && t.reader(W);
    }, _ = u("div", { class: "enc-reader-nav" }, I("reader-prev", "‹ ".concat(n("reader.prev")), () => f ? t.reader(f.id) : void 0, { class: "btn", ...f ? {} : { disabled: true } }), $, I("reader-next", "".concat(n("reader.next"), " ›"), () => S(m == null ? void 0 : m.id), { class: "btn btn-primary", ...m ? {} : { disabled: true } })), w = o.paragraphs.map((W, ie) => Z1(s.data.assets, e, ie + 1)), A = { from: -1 }, j = /* @__PURE__ */ new Map(), O = { el: null }, R = () => {
      for (const [W, ie] of j) {
        const Ee = t.audio !== null && A.from >= 0 && W === A.from;
        ie.textContent = Ee ? "■" : "▶", ie.setAttribute("aria-label", s.s(Ee ? "reader.listen.stop" : "reader.listen", { n: W + 1 }));
      }
      O.el && (O.el.textContent = "".concat(t.audio ? "■" : "▶", " ").concat(s.s(t.audio ? "reader.listenAll.stop" : "reader.listenAll")));
    }, y = (W, ie) => {
      var _a4;
      if (t.audio) {
        t.stopAudio(), A.from = -1, R();
        return;
      }
      const Ee = [];
      for (let zt = W; zt <= ie; zt++) for (const rs of (_a4 = w[zt]) != null ? _a4 : []) Ee.push({ p: zt, url: rs });
      const Fs = () => {
        const zt = Ee.shift();
        if (!zt) {
          t.stopAudio(), A.from = -1, R();
          return;
        }
        try {
          const rs = new Audio(zt.url);
          t.audio = rs, A.from = zt.p, rs.onended = () => {
            t.audio === rs && (t.audio = null), Fs();
          }, rs.play().then(() => s.audio.duck(true), () => {
          });
        } catch (e2) {
          t.audio = null, A.from = -1;
        }
        R();
      };
      Fs();
    }, E = w.some((W) => W.length > 0), z = u("div", { class: "enc-reader-body enc-body gloss-scope", testid: "reader-body", lang: (_a3 = s.pack.targetLang) != null ? _a3 : void 0 }, h.map((W, ie) => {
      var _a4;
      const Ee = pi(W, c, void 0, d);
      if (!((_a4 = w[ie]) == null ? void 0 : _a4.length)) return Ee;
      const Fs = I("reader-play-".concat(ie + 1), "▶", () => y(ie, ie), { class: "btn btn-small enc-reader-play", "aria-label": s.s("reader.listen", { n: ie + 1 }) });
      return j.set(ie, Fs), u("div", { class: "enc-reader-para" }, Fs, Ee);
    }), c.el), T = E ? I("reader-play-all", "▶ ".concat(s.s("reader.listenAll")), () => y(0, o.paragraphs.length - 1), { class: "btn btn-small enc-reader-play-all" }) : null;
    O.el = T;
    const D = g.length > 0 ? I("reader-practice", n("reader.practice"), () => t.practice(e), { class: "btn btn-small" }) : null, K = u("div", { class: "enc-reader", testid: "reader", "data-chapter": e }, b, u("article", { class: "enc-reader-main" }, u("p", { class: "enc-runhead" }, u("span", {}, k || n("reader.title")), u("span", { class: "enc-runhead-sep", "aria-hidden": "true" }, "❦"), u("span", {}, n("reader.chapter", { n: i + 1 }))), u("h1", { class: "screen-title enc-reader-title", tabindex: "-1", testid: "reader-title", "data-autofocus": "" }, o.title), u("p", { class: "enc-rule", "aria-hidden": "true" }), a.length > 0 ? u("p", { class: "enc-reader-hint" }, n("reader.hint")) : null, T, z, v, u("p", { class: "enc-reader-done", testid: "reader-done", hidden: !p }, m ? n("reader.read") : "".concat(n("reader.read"), " ").concat(n("reader.last"))), _, D, F1(t, e, a)));
    K.addEventListener("keydown", (W) => {
      W.ctrlKey || W.metaKey || W.altKey || W.shiftKey || Es(W.target) || (W.key === "ArrowLeft" && f ? (W.preventDefault(), t.reader(f.id)) : W.key === "ArrowRight" && m && (W.preventDefault(), S(m.id)));
    });
    const F = t.data.reader, H = () => {
      K.isConnected && he === void 0 && (he = window.setTimeout(ve, 400));
    };
    let he;
    function ve() {
      he = void 0, K.isConnected && t.rememberReader(e, U1());
    }
    window.addEventListener("scroll", H, { passive: true });
    let $e;
    return typeof IntersectionObserver < "u" && ($e = new IntersectionObserver((W) => {
      K.isConnected && W.some((ie) => ie.isIntersecting) && t.markChapterRead(e);
    }), $e.observe(v)), t.pendingCleanup.push(() => {
      window.removeEventListener("scroll", H), $e == null ? void 0 : $e.disconnect(), he !== void 0 && (window.clearTimeout(he), he = void 0);
    }), window.requestAnimationFrame(() => {
      const W = Gd(), ie = W.scrollHeight - W.clientHeight;
      W.scrollTop = (F == null ? void 0 : F.chapter) === e && ie > 0 ? Math.round(F.scroll * ie) : 0;
    }), K;
  }
  const K1 = ["index", "reader", "timeline", "map", "codex", "hunts"];
  class q1 {
    constructor(e) {
      __publicField(this, "s");
      __publicField(this, "model");
      __publicField(this, "arts", /* @__PURE__ */ new Map());
      __publicField(this, "data", Ud());
      __publicField(this, "hunt", null);
      __publicField(this, "result", null);
      __publicField(this, "query", "");
      __publicField(this, "eventId", null);
      __publicField(this, "trail", []);
      __publicField(this, "audio", null);
      __publicField(this, "cleanup", []);
      __publicField(this, "pendingCleanup", []);
      __publicField(this, "titleState", es());
      __publicField(this, "linkCache", /* @__PURE__ */ new Map());
      this.s = e, this.rebuild();
    }
    rebuild() {
      var _a3;
      this.model = ml(this.s.pack, this.s.section(), this.s.text), this.arts = new Map(this.model.articles.map((n) => [n.id, { id: n.id, title: this.s.t(n.titleKey), paragraphs: ul(n.bodyKeys.map((r) => this.s.t(r))), ...n.unit ? { unit: n.unit } : {}, ...n.assetId ? { assetId: n.assetId } : {}, citations: n.citations, related: n.related, virtual: n.virtual }])), this.linkCache = /* @__PURE__ */ new Map();
      const e = this.s.section(), s = new Set(Object.entries((_a3 = e == null ? void 0 : e.glossary) != null ? _a3 : {}).flatMap(([n, r]) => r.map((i) => Bd(n, i.id))));
      this.data = b1(this.s.shellData(), new Set(this.allSteps().map((n) => n.id)), new Set(this.model.articles.map((n) => n.id)), s);
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
      return Cd(e, this.articleTexts());
    }
    segments(e) {
      const s = this.arts.get(e);
      return s ? g1(s.paragraphs, e, this.articleList().map((n) => ({ id: n.id, title: n.title }))) : [];
    }
    linksFrom(e) {
      let s = this.linkCache.get(e);
      return s || (s = k1(this.segments(e)), this.linkCache.set(e, s)), s;
    }
    via(e) {
      for (const s of this.articleList()) if (s.id !== e && this.linksFrom(s.id).includes(e)) return { from: s.id, testid: "link-".concat(e) };
      for (const s of this.articleList()) if (s.id !== e && s.related.includes(e)) return { from: s.id, testid: "related-".concat(e) };
      return null;
    }
    chapters() {
      return Hw(this.s.pack, this.model.articles).map((e) => this.arts.get(e.id));
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
      return hl(this.s.section(), e).flatMap((s) => {
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
      this.data = S1(this.data, Bd(e, s), n), this.saveData();
    }
    readerChapter() {
      var _a3, _b3, _c2, _d2;
      const e = this.chapters(), s = (_a3 = this.data.reader) == null ? void 0 : _a3.chapter;
      return (_d2 = (_b3 = e.find((n) => n.id === s)) == null ? void 0 : _b3.id) != null ? _d2 : (_c2 = e[0]) == null ? void 0 : _c2.id;
    }
    rememberReader(e, s) {
      const n = w1(this.data, e, s);
      n !== this.data && (this.data = n, this.saveData());
    }
    chapterRead(e) {
      var _a3;
      return ((_a3 = this.data.reader) == null ? void 0 : _a3.done.includes(e)) === true;
    }
    markChapterRead(e) {
      var _a3, _b3, _c2;
      this.chapterRead(e) || (this.data = y1(Fd(this.data, e), e), this.saveData(), (_a3 = document.querySelector('[data-testid="reader-progress"]')) == null ? void 0 : _a3.setAttribute("data-read", "true"), (_b3 = document.querySelector('[data-testid="reader-done"]')) == null ? void 0 : _b3.removeAttribute("hidden"), (_c2 = document.querySelector('[data-testid="reader-chapter-'.concat(e, '"]'))) == null ? void 0 : _c2.setAttribute("data-read", "true"));
    }
    chapterItems(e) {
      return this.s.pack.items.filter((s) => {
        var _a3;
        return ((_a3 = pl(s)) == null ? void 0 : _a3.article) === e && this.s.canAsk(s);
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
      return u("nav", { class: "enc-tabs", "aria-label": s.s("enc.nav.label") }, I("menu", s.s("enc.nav.title"), () => this.title(), { class: "enc-tab enc-tab-title" }), K1.filter((r) => this.partAvailable(r)).map((r) => I("nav-".concat(r), r === "reader" ? s.ui("reader.nav") : s.s("enc.nav.".concat(r)), () => {
        this.trail = [], n[r]();
      }, { class: "enc-tab", ...r === e ? { "aria-current": "page" } : {} })));
    }
    page(e, s, n, r = {}) {
      this.stopAudio();
      for (const o of this.cleanup.splice(0)) o();
      this.cleanup = this.pendingCleanup.splice(0);
      const i = u("div", { class: "enc-page enc-page-".concat(e), "data-part": s != null ? s : "" }, this.nav(s), x1(this), n);
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
      this.rebuild(), this.s.finished = false, this.trail = [], this.s.render("title", Rs(this.s, { startLabel: this.readerFirst() ? this.s.ui(this.data.reader ? "reader.continue" : "reader.open") : this.s.started ? this.s.s("enc.continue") : this.s.s("enc.open"), onStart: () => this.readerFirst() ? this.reader() : this.explore() }, () => this.title(), this.titleState));
    }
    explore() {
      this.s.finished = false, this.page("explore", "index", j1(this), { query: this.query });
    }
    reader(e) {
      var _a3;
      const s = this.chapters();
      if (s.length === 0) return this.explore();
      const n = s.some((r) => r.id === e) ? e : this.readerChapter();
      n !== ((_a3 = this.data.reader) == null ? void 0 : _a3.chapter) && this.rememberReader(n, 0), this.trail = [], this.page("reader", "reader", B1(this, n), { chapter: n });
    }
    article(e, s) {
      if (!this.arts.has(e)) return this.explore();
      s && this.trail.push(s), this.data.read.includes(e) || (this.data = Fd(this.data, e), this.saveData()), this.page("article", null, _1(this, e), { article: e });
    }
    back() {
      const e = this.trail.pop();
      e ? e() : this.explore();
    }
    timeline() {
      this.page("timeline", "timeline", L1(this), { event: this.eventId });
    }
    map() {
      this.page("map", "map", C1(this));
    }
    codex() {
      this.page("codex", "codex", A1(this));
    }
    hunts() {
      const e = this.result;
      this.page("hunts", "hunts", T1(this, e), { result: e }), e && this.s.live(this.resultText(e));
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
      e.render("end", Ds(e, { title: e.s("enc.end.title"), sub: e.s("enc.end.sub"), stats: u("p", { class: "enc-end-stats", testid: "end-collected" }, e.s("enc.end.stats", { found: s.found, total: s.total, read: s.read, articles: s.articles })), onAgain: () => {
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
      const i = this.collectibleName(e), o = s.steps.indexOf(e) + 1, a = this.found(e), c = E1(this, s, o);
      lt(this.s, { item: r, context: "hunt", retry: n.retry, ...s.final ? { roundKind: "boss" } : { roundKind: "unit", unitId: s.hunt.unit }, roundSize: s.run.size, index: s.answered, hud: c, lead: u("span", {}, this.s.s("enc.lead", { name: i })), view: () => ({ ...this.baseView(), step: e.id, article: e.article }), nextLabel: this.s.s("enc.turn"), leaveLabel: this.s.s("enc.q.back"), onLeave: () => this.article(e.article), onAnswered: (l) => {
        var _a3, _b3;
        s.run = this.s.record(s.run, n, l), s.answered += 1, l.result.correct && (s.collected.includes(e.id) || s.collected.push(e.id), this.data = v1(this.data, e.id), this.saveData(), (_a3 = c.querySelectorAll(".enc-hud-pip")[o - 1]) == null ? void 0 : _a3.classList.add("is-found"), (_b3 = c.querySelector(".enc-hud-pips")) == null ? void 0 : _b3.setAttribute("aria-label", this.s.s("enc.hunt.found", { found: s.collected.length, n: s.steps.length })));
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
        return { hunt: (_b3 = (_a3 = this.hunt) == null ? void 0 : _a3.hunt.id) != null ? _b3 : null, final: (_d2 = (_c2 = this.hunt) == null ? void 0 : _c2.final) != null ? _d2 : false, step: e.step.id, article: e.step.article, item: e.step.item, retry: e.retry, clue: this.stepClue(e.step), term: Zd(this.articleTexts().find((n) => n.id === e.step.article), this.articleTexts()), via: s };
      }, searchTerm: (e) => {
        const s = this.articleTexts(), n = s.find((r) => r.id === e);
        return n ? Zd(n, s) : null;
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
  function G1(t, e) {
    let s = null, n = null;
    return { id: t, mount(r) {
      const i = new Ps(r, { shellId: t, theme: e, strings: $1 });
      s = i, n = new q1(i), i.mount(), i.setDebug(n.debug()), n.title();
    }, unmount() {
      n == null ? void 0 : n.stopAudio(), s == null ? void 0 : s.unmount(), s = null, n = null;
    } };
  }
  const Wd = G1("encyclopedia", "parchment"), Nt = 40, Hd = 80, Vd = 60, Wn = 26;
  function W1(t) {
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
        const k = Wn + Nt / 2 + (m + (a - h.length) / 2) * Vd;
        c.push({ id: f, col: p, row: m, x: Wn + Nt / 2 + p * Hd, y: k, n: 0 });
      });
    }), [...c].sort((h, p) => h.col - p.col || h.y - p.y).forEach((h, p) => h.n = p + 1);
    const d = [];
    for (const h of t.rooms) for (const p of h.doors) e.includes(p.to) && p.to !== h.id && d.push({ from: h.id, to: p.to, back: s.get(p.to) <= s.get(h.id) });
    return { nodes: c, edges: d, width: Wn * 2 + Nt + (i - 1) * Hd, height: Wn * 2 + Nt + (a - 1) * Vd };
  }
  function H1(t, e) {
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
  const Te = (t, e = {}, ...s) => ue(t, e, ...s.filter((n) => n !== null)), V = (t, e, s = {}) => Te("path", { class: t, d: e, ...s }), pe = (t, e, s, n, r, i = {}) => Te("rect", { class: t, x: e, y: s, width: n, height: r, ...i }), fe = (t, e, s, n) => Te("circle", { class: t, cx: e, cy: s, r: n }), V1 = (t, e, s, n) => {
    const r = Te("text", { class: t, x: e, y: s, "text-anchor": "middle" });
    return r.appendChild(document.createTextNode(n)), r;
  }, ss = (t, e, ...s) => ue("svg", { class: t, viewBox: e, "aria-hidden": "true", focusable: "false", preserveAspectRatio: "xMidYMid meet" }, ...s.filter((n) => n !== null)), Ci = "M20 168V68C20 42 38 22 60 22S100 42 100 68V168Z";
  function Zi(t) {
    const e = ss("mm-door-svg", "0 0 120 170", V("d-arch", "M6 170V66C6 30 32 6 60 6S114 30 114 66V170Z"), V("d-joint", "M60 6V22M33 13L39 28M87 13L81 28M13 40L28 47M107 40L92 47M8 90H20M100 90H112M8 130H20M100 130H112"), V("d-keystone", "M52 6H68L66 22H54Z"), V("d-opening", Ci), V("d-light", Ci), Te("g", { class: "d-leaf" }, V("d-wood", Ci), V("d-plank", "M40 25V168M60 22V168M80 25V168"), pe("d-iron", 20, 62, 80, 8), pe("d-iron", 20, 114, 80, 8), fe("d-stud", 28, 66, 2.4), fe("d-stud", 52, 66, 2.4), fe("d-stud", 68, 66, 2.4), fe("d-stud", 92, 66, 2.4), fe("d-stud", 28, 118, 2.4), fe("d-stud", 92, 118, 2.4), fe("d-ring", 84, 92, 7), Te("g", { class: "d-lock" }, V("d-shackle", "M52 84V78A8 8 0 0 1 68 78V84", { fill: "none" }), pe("d-lockbody", 48, 84, 24, 18, { rx: 2 }), fe("d-keyhole", 60, 92, 3))));
    return e.setAttribute("data-open", String(t)), e;
  }
  const Y1 = (t, e) => t.setAttribute("data-open", String(e));
  function J1() {
    return ss("mm-torch-svg", "0 0 28 58", fe("t-glow", 14, 14, 20), V("t-bracket", "M14 58V34M6 32H22", { fill: "none" }), V("t-cup", "M7 24H21L18 36H10Z"), V("t-flame", "M14 2C19 9 23 14 21 19C20 23 17 25 14 25C11 25 8 23 7 19C6 15 9 11 11 8C12 11 13 12 14 2Z"), V("t-core", "M14 12C17 16 18 18 17 21C16 23 15 24 14 24C13 24 11 23 11 21C11 19 12 18 14 12Z"), V("t-ember", "M10 24H18", { fill: "none" }));
  }
  function Ui(t, e, s) {
    return u("span", { class: "mm-torches", testid: "torches", role: "img", "aria-label": s, "data-torches": String(t), "data-max": String(e) }, Array.from({ length: e }, (n, r) => u("span", { class: "mm-torch ".concat(r < t ? "is-lit" : "is-out"), "aria-hidden": "true" }, J1())));
  }
  const Yd = (t, e, s, n) => {
    let r = "";
    for (let i = t; i + n * 0.6 <= e; i += n) r += "M".concat(i, " ").concat(s, "h").concat(n * 0.55, "v-9h-").concat(n * 0.55, "z");
    return r;
  };
  function Q1(t) {
    const e = (t % 6 + 6) % 6, s = V("p-robe p-c".concat(e), "M8 120C8 96 26 84 50 84S92 96 92 120Z"), n = pe("p-skin", 44, 70, 12, 18, { rx: 4 }), r = Te("ellipse", { class: "p-skin", cx: 50, cy: 54, rx: 19, ry: 22 }), i = [fe("p-eye", 43, 54, 2.2), fe("p-eye", 57, 54, 2.2), V("p-mouth", "M44 66Q50 70 56 66", { fill: "none" })], o = [];
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
        return o.push(V("p-sheet", "M24 120V56C24 30 36 14 50 14S76 30 76 56V120L68 110L60 120L50 110L40 120L32 110Z")), ss("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), o[0], fe("p-eye p-ghost-eye", 41, 52, 4.5), fe("p-eye p-ghost-eye", 59, 52, 4.5), V("p-mouth", "M44 70Q50 75 56 70", { fill: "none" }));
    }
    return ss("mm-portrait-svg", "0 0 100 120", fe("p-back", 50, 60, 54), s, n, r, ...i, ...o);
  }
  function X1(t, e) {
    return u("div", { class: "mm-portrait", "data-look": String(t.look % 6) }, e ? u("img", { src: e.url, alt: e.alt, class: "mm-portrait-img", loading: "lazy" }) : Q1(t.look));
  }
  function Hn(t) {
    return ss("mm-throne-svg", "0 -34 200 224", V("th-floor", "M10 186H190L178 168H22Z"), V("th-step", "M30 168H170L162 150H38Z"), V("th-back", "M62 150V50C62 24 80 10 100 10S138 24 138 50V150Z"), V("th-back-in", "M72 146V54C72 34 85 22 100 22S128 34 128 54V146Z"), V("th-finial", "M56 52L62 28L68 52ZM132 52L138 28L144 52Z"), pe("th-seat", 56, 118, 88, 30, { rx: 4 }), pe("th-cushion", 64, 106, 72, 16, { rx: 8 }), pe("th-arm", 50, 98, 16, 52, { rx: 4 }), pe("th-arm", 134, 98, 16, 52, { rx: 4 }), V("th-gem", "M100 34L108 44L100 54L92 44Z"), fe("th-gem", 100, 80, 5), Te("g", { class: "th-crown".concat(t ? " is-won" : "") }, fe("th-halo", 100, 0, 22), V("th-crown-shape", "M78 0L82 -18L92 -8L100 -22L108 -8L118 -18L122 0Z"), pe("th-crown-band", 78, 0, 44, 6, { rx: 2 })));
  }
  function Fi() {
    return ss("mm-key-svg", "0 0 64 64", fe("k-ring", 18, 18, 12), fe("k-hole", 18, 18, 5), V("k-shaft", "M26 26L56 56M44 44L52 36M50 50L58 42", { fill: "none" }));
  }
  function e$(t, e, s) {
    const n = new Map(t.nodes.map((l) => [l.id, l])), r = Nt / 2, i = t.edges.map((l) => {
      const d = n.get(l.from), h = n.get(l.to);
      if (!d || !h) return null;
      const p = e.open.has("".concat(l.from, ">").concat(l.to)), f = "m-door ".concat(p ? "is-open" : "is-locked"), m = Math.sign(h.x - d.x), k = d.x + (m === 0 ? 0 : m * r), g = h.x - (m === 0 ? 0 : m * r);
      if (l.back || m === 0) {
        const $ = Math.min(d.y, h.y) - r - 14;
        return V("".concat(f, " is-back"), "M".concat(d.x, " ").concat(d.y - r, "C").concat(d.x, " ").concat($, " ").concat(h.x, " ").concat($, " ").concat(h.x, " ").concat(h.y - r), { fill: "none" });
      }
      const b = (d.y + h.y) / 2, v = (k + g) / 2;
      return Te("g", { class: f }, V("m-line", "M".concat(k, " ").concat(d.y, "C").concat(v, " ").concat(d.y, " ").concat(v, " ").concat(h.y, " ").concat(g, " ").concat(h.y), { fill: "none" }), V("m-arrow", "M".concat(g, " ").concat(h.y, "l-9 -5v10z")), p ? null : fe("m-lock", v, b, 4.5));
    }), o = t.nodes.map((l) => {
      const d = l.id === e.here, h = "m-room".concat(d ? " is-here" : "").concat(e.keys.has(l.id) ? " is-key" : "").concat(l.id === e.entry ? " is-entry" : "");
      return Te("g", { class: h, "data-room": l.id }, pe("m-stone", l.x - r, l.y - r, Nt, Nt, { rx: 5 }), V1("m-num", l.x, l.y + 6, String(l.n)), e.keys.has(l.id) ? V("m-key", "M".concat(l.x + r - 6, " ").concat(l.y - r - 3, "l5 -5l5 5l-5 5z")) : null, d ? V("m-here", "M".concat(l.x, " ").concat(l.y - r - 4, "l-6 -10l6 -4l6 4z")) : null);
    }), a = [...i, ...o].filter((l) => l !== null);
    return ue("svg", { class: "mm-minimap-svg", viewBox: "0 0 ".concat(t.width, " ").concat(t.height), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMid meet", testid: "minimap" }, ...a);
  }
  function t$(t, e, s) {
    const i = Math.ceil(t.length / 2), o = [...t.slice(0, i), "keep", ...t.slice(i)], a = t.length * 76 + 100 + 40, c = [pe("s-sky", 0, 0, a, 180), pe("s-ground", 0, 164, a, 16)];
    let l = 20;
    return o.forEach((d, h) => {
      if (d === "keep") {
        c.push(Te("g", { class: "s-keep is-".concat(e), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, 40, 100, 126), V("s-merlon", Yd(-4, 104, 40, 18).replace(/v-9h/g, "v-12h")), V("s-roof", "M-6 40L".concat(100 / 2, " 6L106 40Z")), V("s-flag", "M".concat(100 / 2, " 6V-8M").concat(100 / 2, " -6H").concat(100 / 2 + 22, "L").concat(100 / 2 + 16, " 0L").concat(100 / 2 + 22, " 6H").concat(100 / 2), { fill: "none" }), V("s-gate", "M".concat(100 / 2 - 16, " 166V138C").concat(100 / 2 - 16, " 124 ").concat(100 / 2 + 16, " 124 ").concat(100 / 2 + 16, " 138V166Z")), pe("s-window", 100 / 2 - 24, 62, 8, 20, { rx: 4 }), pe("s-window", 100 / 2 + 16, 62, 8, 20, { rx: 4 }))), l += 114;
        return;
      }
      const p = 86 + h * 37 % 4 * 14, f = 166 - p;
      c.push(Te("g", { class: "s-tower is-".concat(d.state), transform: "translate(".concat(l, " 0)") }, pe("s-wall", 0, f, 60, p), V("s-merlon", Yd(-3, 63, f, 15).replace(/v-9h/g, "v-11h")), pe("s-window", 26, f + 22, 8, 18, { rx: 4 }), pe("s-window", 26, f + 54, 8, 18, { rx: 4 }), d.state === "won" ? Te("g", { class: "s-won" }, V("s-pole", "M30 ".concat(f - 14, "V").concat(f - 34), { fill: "none" }), V("s-key-flag", "M30 ".concat(f - 34, "H52L46 ").concat(f - 27, "L52 ").concat(f - 20, "H30Z"))) : null)), l += 76;
    }), ue("svg", { class: "mm-skyline-svg", viewBox: "-4 -12 ".concat(a, " 194"), role: "img", "aria-label": s, preserveAspectRatio: "xMidYMax meet", testid: "castle-map" }, ...c.filter((d) => d !== null));
  }
  const s$ = { en: { "maze.tagline": "A castle of questions", "maze.title.art": "A castle gatehouse with a torch burning on each side of the gate.", "maze.title.intro": "Every door is a question. Answer it to open the door, win the key of each wing, then face the throne room.", "maze.castle.title": "The castle", "maze.castle.sub": "Pick a wing. Each wing hides a key; when you hold every key the throne room opens.", "maze.castle.map": "Map of the castle: {won} of {total} keys won.", "maze.keys": "Keys: {n} of {total}", "maze.wing.sealed": "Sealed", "maze.wing.needs": "Needs the key of: {wings}", "maze.wing.key": "Key won", "maze.wing.go": "Enter the wing", "maze.wing.resume": "Walk on", "maze.wing.rooms": "{n} rooms", "maze.throne.name": "The throne room", "maze.throne.sealed": "Sealed until you hold every key.", "maze.throne.ready": "The golden doors stand open.", "maze.throne.crowned": "Crowned", "maze.throne.desc": "A gauntlet of questions from every wing. Win one star or more and the crown is yours.", "maze.throne.begin": "Face the gauntlet", "maze.throne.won": "The crown is yours", "maze.throne.lost": "The crown slips away", "maze.throne.lost.text": "Fewer than 1 star. Look at what you missed and face the gauntlet again.", "maze.throne.retry": "Face the gauntlet again", "maze.throne.finish": "Claim the castle", "maze.throne.step": "Gauntlet, question {i} of {n}", "maze.to.castle": "Castle map", "maze.torches": "Torches: {n} of {max}", "maze.wing.of": "Wing: {wing}", "maze.back": "Go back to {room}", "maze.doors": "Doors", "maze.door.locked": "Locked: answer to open", "maze.door.open": "Open", "maze.talk": "Talk", "maze.hint": "Ask for a hint", "maze.keyroom": "The key of this wing lies here.", "maze.take": "Take the key", "maze.minimap": "Map of the wing", "maze.map.here": "you are here", "maze.map.key": "key room", "maze.map.open": "open door", "maze.map.locked": "locked door", "maze.map.alt": "Map of the wing {wing}: {n} rooms. You are in room {here}.", "maze.notice.ghost": "The castle ghost led you back to the entrance hall and relit your torches. The doors you opened stay open.", "maze.say.right": "Well done!", "maze.say.wrong": "Do not lose heart. That door will ask something else next time.", "maze.asks": "The door to {room} asks:", "maze.stepback": "Step back", "maze.fx.open": "The door swings open.", "maze.fx.torch": "Your torch gutters: {n} left.", "maze.fx.dark": "Your last torch dies. The castle ghost leads you back to the entrance hall.", "maze.fx.t.right": "The gold of the crown glows.", "maze.fx.t.torch": "A torch gutters in the throne room: {n} left.", "maze.fx.t.relit": "The last torch dies, but the ghost relights them all. The gauntlet goes on.", "maze.next.walk": "Walk through", "maze.next.room": "Back to the room", "maze.next.ghost": "Follow the ghost", "maze.next.throne": "Onward", "maze.done.won": "The wing is cleared", "maze.done.crumble": "The wing crumbles", "maze.done.key": "The key of {wing} is yours.", "maze.done.crumble.text": "Fewer than 2 stars: the doors close again. Walk the wing once more.", "maze.done.unlocked": "New wings open: {wings}", "maze.done.throne": "You hold every key. The throne room is open.", "maze.done.misses": "Questions that beat you", "maze.done.accuracy": "{n} % right first time", "maze.retry": "Walk the wing again", "maze.end.title": "The castle is yours!", "maze.end.sub": "You hold every key and wear the crown.", "maze.end.keys": "Keys won: {n} of {total}", "maze.portrait": "Portrait of {name}.", "maze.auto.wing": "A wing of the castle", "maze.auto.hall": "The entrance hall", "maze.auto.hall.desc": "Torches burn in iron rings and the stone floor is worn smooth. Doors wait ahead, and each one asks a question.", "maze.auto.gallery": "The portrait gallery", "maze.auto.gallery2": "The long gallery", "maze.auto.gallery3": "The echoing cloister", "maze.auto.keyroom": "The key chamber", "maze.auto.keyroom.desc": "On a stone table lies the key of this wing.", "maze.auto.side": "The side chamber", "maze.auto.side.desc": "A small study with a reading desk: a quieter way round, through two doors.", "maze.auto.gate.name": "The gatekeeper", "maze.auto.gate.line": "Welcome. Each door here asks a question; answer it and the way opens. Miss, and your torch gutters.", "maze.auto.gate.right": "Good. These doors like a quick mind.", "maze.auto.gate.wrong": "Never mind. A different question waits at that door.", "maze.auto.scholar.name": "The scholar", "maze.auto.scholar.line": "I have read everything on these shelves. Think it through and the door will open.", "maze.auto.scholar.right": "Splendid reasoning!", "maze.auto.scholar.wrong": "Hm. Read the explanation, then try again.", "maze.auto.archivist.name": "The archivist", "maze.auto.archivist.line": "The records are kept here: the long way round, but a gentle one.", "maze.auto.archivist.right": "Filed under: correct.", "maze.auto.archivist.wrong": "Misfiled! It happens. Read the note.", "maze.auto.keeper.name": "The keeper of keys", "maze.auto.keeper.line": "The key is nearly yours. Walk through the last door.", "maze.auto.keeper.right": "The lock likes you.", "maze.auto.keeper.wrong": "The lock stays shut, for now." }, hr: { "maze.tagline": "Dvorac pun pitanja", "maze.title.art": "Ulazna kula dvorca; s obje strane vrata gori baklja.", "maze.title.intro": "Svaka su vrata pitanje. Odgovori da ih otvoriš, osvoji ključ svakog krila pa se suoči s prijestolnom dvoranom.", "maze.castle.title": "Dvorac", "maze.castle.sub": "Odaberi krilo. U svakom je krilu skriven ključ; kad imaš sve ključeve, otvara se prijestolna dvorana.", "maze.castle.map": "Karta dvorca: osvojeno ključeva {won} od {total}.", "maze.keys": "Ključevi: {n} od {total}", "maze.wing.sealed": "Zapečaćeno", "maze.wing.needs": "Treba ključ krila: {wings}", "maze.wing.key": "Ključ osvojen", "maze.wing.go": "Uđi u krilo", "maze.wing.resume": "Nastavi hodati", "maze.wing.rooms": "{n} soba", "maze.throne.name": "Prijestolna dvorana", "maze.throne.sealed": "Zapečaćena dok nemaš sve ključeve.", "maze.throne.ready": "Zlatna su vrata otvorena.", "maze.throne.crowned": "Okrunjen", "maze.throne.desc": "Niz pitanja iz svakog krila. Osvoji jednu zvjezdicu ili više i kruna je tvoja.", "maze.throne.begin": "Suoči se s izazovom", "maze.throne.won": "Kruna je tvoja", "maze.throne.lost": "Kruna ti izmiče", "maze.throne.lost.text": "Manje od 1 zvjezdice. Pogledaj što si promašio i suoči se s izazovom ponovno.", "maze.throne.retry": "Suoči se s izazovom ponovno", "maze.throne.finish": "Preuzmi dvorac", "maze.throne.step": "Izazov, pitanje {i} od {n}", "maze.to.castle": "Karta dvorca", "maze.torches": "Baklje: {n} od {max}", "maze.wing.of": "Krilo: {wing}", "maze.back": "Vrati se u: {room}", "maze.doors": "Vrata", "maze.door.locked": "Zaključana: odgovori da ih otvoriš", "maze.door.open": "Otvorena", "maze.talk": "Razgovaraj", "maze.hint": "Zatraži savjet", "maze.keyroom": "Ovdje leži ključ ovog krila.", "maze.take": "Uzmi ključ", "maze.minimap": "Karta krila", "maze.map.here": "ovdje si", "maze.map.key": "soba s ključem", "maze.map.open": "otvorena vrata", "maze.map.locked": "zaključana vrata", "maze.map.alt": "Karta krila {wing}: {n} soba. Nalaziš se u sobi {here}.", "maze.notice.ghost": "Duh dvorca vratio te u ulaznu dvoranu i ponovno ti zapalio baklje. Vrata koja su otvorena ostaju otvorena.", "maze.say.right": "Odlično!", "maze.say.wrong": "Ne gubi hrabrost. Ta će vrata sljedeći put pitati nešto drugo.", "maze.asks": "Vrata u sobu {room} pitaju:", "maze.stepback": "Odstupi", "maze.fx.open": "Vrata se otvaraju.", "maze.fx.torch": "Tvoja baklja posustaje: preostalo ih je {n}.", "maze.fx.dark": "Tvoja posljednja baklja gasne. Duh dvorca vodi te natrag u ulaznu dvoranu.", "maze.fx.t.right": "Zlato krune zasjalo je.", "maze.fx.t.torch": "Baklja u prijestolnoj dvorani posustaje: preostalo ih je {n}.", "maze.fx.t.relit": "Posljednja baklja gasne, ali duh ih sve ponovno pali. Izazov se nastavlja.", "maze.next.walk": "Prođi kroz vrata", "maze.next.room": "Natrag u sobu", "maze.next.ghost": "Slijedi duha", "maze.next.throne": "Dalje", "maze.done.won": "Krilo je očišćeno", "maze.done.crumble": "Krilo se ruši", "maze.done.key": "Ključ krila {wing} je tvoj.", "maze.done.crumble.text": "Manje od 2 zvjezdice: vrata se opet zatvaraju. Prođi krilo još jednom.", "maze.done.unlocked": "Otvorena nova krila: {wings}", "maze.done.throne": "Imaš sve ključeve. Prijestolna dvorana je otvorena.", "maze.done.misses": "Pitanja koja su te svladala", "maze.done.accuracy": "{n} % točno iz prvog pokušaja", "maze.retry": "Prođi krilo ponovno", "maze.end.title": "Dvorac je tvoj!", "maze.end.sub": "Imaš sve ključeve i nosiš krunu.", "maze.end.keys": "Osvojeni ključevi: {n} od {total}", "maze.portrait": "Portret: {name}.", "maze.auto.wing": "Krilo dvorca", "maze.auto.hall": "Ulazna dvorana", "maze.auto.hall.desc": "Baklje gore u željeznim obručima, a kameni je pod izglačan. Pred tobom su vrata i svaka postavljaju pitanje.", "maze.auto.gallery": "Galerija portreta", "maze.auto.gallery2": "Duga galerija", "maze.auto.gallery3": "Odjekujući klaustar", "maze.auto.keyroom": "Soba s ključem", "maze.auto.keyroom.desc": "Na kamenom stolu leži ključ ovog krila.", "maze.auto.side": "Bočna odaja", "maze.auto.side.desc": "Mala radna soba s pultom za čitanje: mirniji put, kroz dvoja vrata.", "maze.auto.gate.name": "Vratar", "maze.auto.gate.line": "Dobro došao. Svaka vrata ovdje postavljaju pitanje; odgovori i put je slobodan. Pogriješiš li, baklja ti posustaje.", "maze.auto.gate.right": "Dobro. Ova vrata vole brz um.", "maze.auto.gate.wrong": "Ne mari. Na tim vratima čeka drugo pitanje.", "maze.auto.scholar.name": "Učenjak", "maze.auto.scholar.line": "Pročitao sam sve s ovih polica. Dobro razmisli i vrata će se otvoriti.", "maze.auto.scholar.right": "Izvrsno zaključivanje!", "maze.auto.scholar.wrong": "Hm. Pročitaj objašnjenje pa pokušaj ponovno.", "maze.auto.archivist.name": "Arhivar", "maze.auto.archivist.line": "Ovdje se čuvaju zapisi: dulji put, ali blag.", "maze.auto.archivist.right": "Arhivirano: točno.", "maze.auto.archivist.wrong": "Krivo razvrstano! Događa se. Pročitaj bilješku.", "maze.auto.keeper.name": "Čuvar ključeva", "maze.auto.keeper.line": "Ključ je gotovo tvoj. Prođi posljednja vrata.", "maze.auto.keeper.right": "Brava te voli.", "maze.auto.keeper.wrong": "Brava za sada ostaje zatvorena." }, de: { "maze.tagline": "Ein Schloss voller Fragen", "maze.title.art": "Ein Torhaus des Schlosses, an jeder Seite des Tors brennt eine Fackel.", "maze.title.intro": "Jede Tür ist eine Frage. Beantworte sie, um die Tür zu öffnen, gewinne den Schlüssel jedes Flügels und stelle dich dann im Thronsaal.", "maze.castle.title": "Das Schloss", "maze.castle.sub": "Wähle einen Flügel. Jeder Flügel versteckt einen Schlüssel; wenn du alle Schlüssel hast, öffnet sich der Thronsaal.", "maze.castle.map": "Karte des Schlosses: {won} von {total} Schlüsseln gewonnen.", "maze.keys": "Schlüssel: {n} von {total}", "maze.wing.sealed": "Versiegelt", "maze.wing.needs": "Braucht den Schlüssel von: {wings}", "maze.wing.key": "Schlüssel gewonnen", "maze.wing.go": "Den Flügel betreten", "maze.wing.resume": "Weitergehen", "maze.wing.rooms": "{n} Räume", "maze.throne.name": "Der Thronsaal", "maze.throne.sealed": "Versiegelt, bis du alle Schlüssel hast.", "maze.throne.ready": "Die goldenen Türen stehen offen.", "maze.throne.crowned": "Gekrönt", "maze.throne.desc": "Ein Fragenparcours aus allen Flügeln. Gewinne einen Stern oder mehr, und die Krone gehört dir.", "maze.throne.begin": "Den Parcours wagen", "maze.throne.won": "Die Krone gehört dir", "maze.throne.lost": "Die Krone entgleitet dir", "maze.throne.lost.text": "Weniger als 1 Stern. Sieh dir an, was du verpasst hast, und wage den Parcours noch einmal.", "maze.throne.retry": "Den Parcours noch einmal wagen", "maze.throne.finish": "Das Schloss einnehmen", "maze.throne.step": "Parcours, Frage {i} von {n}", "maze.to.castle": "Schlosskarte", "maze.torches": "Fackeln: {n} von {max}", "maze.wing.of": "Flügel: {wing}", "maze.back": "Zurück zu: {room}", "maze.doors": "Türen", "maze.door.locked": "Verschlossen: Antworte, um zu öffnen", "maze.door.open": "Offen", "maze.talk": "Sprechen", "maze.hint": "Um einen Tipp bitten", "maze.keyroom": "Der Schlüssel dieses Flügels liegt hier.", "maze.take": "Den Schlüssel nehmen", "maze.minimap": "Karte des Flügels", "maze.map.here": "du bist hier", "maze.map.key": "Schlüsselraum", "maze.map.open": "offene Tür", "maze.map.locked": "verschlossene Tür", "maze.map.alt": "Karte des Flügels {wing}: {n} Räume. Du bist in Raum {here}.", "maze.notice.ghost": "Der Schlossgeist hat dich zurück in die Eingangshalle geführt und deine Fackeln neu entzündet. Die Türen, die du geöffnet hast, bleiben offen.", "maze.say.right": "Gut gemacht!", "maze.say.wrong": "Lass den Mut nicht sinken. Diese Tür stellt dir beim nächsten Mal eine andere Frage.", "maze.asks": "Die Tür zu „{room}“ fragt:", "maze.stepback": "Zurücktreten", "maze.fx.open": "Die Tür schwingt auf.", "maze.fx.torch": "Deine Fackel flackert: noch {n} übrig.", "maze.fx.dark": "Deine letzte Fackel erlischt. Der Schlossgeist führt dich zurück in die Eingangshalle.", "maze.fx.t.right": "Das Gold der Krone leuchtet.", "maze.fx.t.torch": "Im Thronsaal flackert eine Fackel: noch {n} übrig.", "maze.fx.t.relit": "Die letzte Fackel erlischt, aber der Geist entzündet alle neu. Der Parcours geht weiter.", "maze.next.walk": "Hindurchgehen", "maze.next.room": "Zurück in den Raum", "maze.next.ghost": "Dem Geist folgen", "maze.next.throne": "Weiter", "maze.done.won": "Der Flügel ist bezwungen", "maze.done.crumble": "Der Flügel zerfällt", "maze.done.key": "Der Schlüssel von {wing} gehört dir.", "maze.done.crumble.text": "Weniger als 2 Sterne: Die Türen schließen sich wieder. Durchquere den Flügel noch einmal.", "maze.done.unlocked": "Neue Flügel öffnen sich: {wings}", "maze.done.throne": "Du hast alle Schlüssel. Der Thronsaal ist offen.", "maze.done.misses": "Fragen, die dich besiegt haben", "maze.done.accuracy": "{n} % gleich beim ersten Mal richtig", "maze.retry": "Den Flügel noch einmal durchqueren", "maze.end.title": "Das Schloss gehört dir!", "maze.end.sub": "Du hast alle Schlüssel und trägst die Krone.", "maze.end.keys": "Gewonnene Schlüssel: {n} von {total}", "maze.portrait": "Porträt von {name}.", "maze.auto.wing": "Ein Flügel des Schlosses", "maze.auto.hall": "Die Eingangshalle", "maze.auto.hall.desc": "Fackeln brennen in eisernen Ringen, und der Steinboden ist glatt getreten. Vor dir warten Türen, und jede stellt eine Frage.", "maze.auto.gallery": "Die Porträtgalerie", "maze.auto.gallery2": "Die lange Galerie", "maze.auto.gallery3": "Der hallende Kreuzgang", "maze.auto.keyroom": "Die Schlüsselkammer", "maze.auto.keyroom.desc": "Auf einem Steintisch liegt der Schlüssel dieses Flügels.", "maze.auto.side": "Die Seitenkammer", "maze.auto.side.desc": "Ein kleines Studierzimmer mit einem Lesepult: ein ruhigerer Weg, durch zwei Türen.", "maze.auto.gate.name": "Der Torwächter", "maze.auto.gate.line": "Willkommen. Jede Tür hier stellt eine Frage; beantworte sie, und der Weg öffnet sich. Liegst du falsch, flackert deine Fackel.", "maze.auto.gate.right": "Gut. Diese Türen mögen einen wachen Verstand.", "maze.auto.gate.wrong": "Macht nichts. An dieser Tür wartet eine andere Frage.", "maze.auto.scholar.name": "Der Gelehrte", "maze.auto.scholar.line": "Ich habe alles in diesen Regalen gelesen. Denk in Ruhe nach, und die Tür öffnet sich.", "maze.auto.scholar.right": "Hervorragend überlegt!", "maze.auto.scholar.wrong": "Hm. Lies die Erklärung und versuche es noch einmal.", "maze.auto.archivist.name": "Die Archivarin", "maze.auto.archivist.line": "Hier werden die Akten geführt: der lange Weg, aber ein sanfter.", "maze.auto.archivist.right": "Abgelegt unter: richtig.", "maze.auto.archivist.wrong": "Falsch abgelegt! Das passiert. Lies die Notiz.", "maze.auto.keeper.name": "Der Schlüsselbewahrer", "maze.auto.keeper.line": "Der Schlüssel ist fast dein. Geh durch die letzte Tür.", "maze.auto.keeper.right": "Das Schloss mag dich.", "maze.auto.keeper.wrong": "Das Schloss bleibt vorerst verschlossen." } };
  function n$(t, e, s) {
    return { wingId: t.id, run: e, room: t.entry, trail: [], open: [], torches: s, maxTorches: s, mood: "none", ghosted: false };
  }
  const ns = (t, e, s) => t.open.includes(xn(e, s)), Jd = (t, e, s) => ns(t, e, s) ? t : { ...t, open: [...t.open, xn(e, s)] }, Bi = (t, e) => ({ ...t, trail: [...t.trail, t.room], room: e, ghosted: false });
  function r$(t) {
    const e = t.trail.at(-1);
    return e === void 0 ? t : { ...t, room: e, trail: t.trail.slice(0, -1), ghosted: false };
  }
  function i$(t) {
    const e = Math.max(0, t.torches - 1);
    return { walk: { ...t, torches: e }, dark: e === 0 };
  }
  const o$ = (t, e) => ({ ...t, room: e, trail: [], torches: t.maxTorches, ghosted: true, mood: "groan" });
  function a$(t, e) {
    return t ? e >= 2 ? "cheer" : "none" : "groan";
  }
  function c$(t, e, s, n) {
    var _a3;
    const r = t.pool.filter((d) => e.includes(d)), i = s({ ...t, pool: r, size: t.asked.length + r.length });
    if (i) return i;
    const o = s({ ...t, size: t.asked.length + t.pool.length });
    if (o) return o;
    const a = (_a3 = t.results.at(-1)) == null ? void 0 : _a3.id, c = e.filter((d) => d !== a), l = c.length > 0 ? c : [...e];
    return l.length > 0 ? { id: n.choice(l), retry: true } : null;
  }
  const Qd = "mindmaze", l$ = "castle";
  class d$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "maze");
      __publicField(this, "walks", /* @__PURE__ */ new Map());
      __publicField(this, "throne", null);
      __publicField(this, "currentWing", null);
      __publicField(this, "titleState", es());
      this.host = e, this.session = new Ps(e, { shellId: Qd, theme: l$, strings: s$ }), this.maze = vl(this.session.pack, this.session.section());
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
      return { wing: e, unit: n.unit, room: s.room, entry: n.entry, keyRoom: (r == null ? void 0 : r.key) === true, torches: s.torches, maxTorches: s.maxTorches, trail: s.trail, open: s.open, doors: ((_a3 = r == null ? void 0 : r.doors) != null ? _a3 : []).map((i) => ({ to: i.to, state: ns(s, s.room, i.to) ? "open" : "locked" })), ghost: s.ghosted, mood: s.mood, answered: s.run.asked.length };
    }
    throneView(e, s = {}) {
      var _a3, _b3, _c2, _d2;
      const n = this.throne;
      return { phase: e, torches: (_a3 = n == null ? void 0 : n.torches) != null ? _a3 : 0, maxTorches: (_b3 = n == null ? void 0 : n.max) != null ? _b3 : this.maze.torches, size: (_c2 = n == null ? void 0 : n.run.size) != null ? _c2 : this.maze.throne.size, asked: (_d2 = n == null ? void 0 : n.run.asked.length) != null ? _d2 : 0, crowned: this.crowned(), ...s };
    }
    route() {
      const e = this.currentWing, s = e ? this.walks.get(e) : void 0;
      if (!e || !s) return null;
      const n = this.wing(e), r = Sl(n, s.room, new Set(s.open)), i = wt(n, s.room);
      return { wing: e, room: s.room, found: r.found, path: r.path, locked: r.locked, door: r.next ? "door-".concat(r.next) : null, state: r.next ? ns(s, s.room, r.next) ? "open" : "locked" : null, takeKey: (i == null ? void 0 : i.key) === true };
    }
    mazeSummary() {
      return { torches: this.maze.torches, throne: this.maze.throne.size, wings: this.maze.wings.map((e) => ({ id: e.id, unit: e.unit, entry: e.entry, auto: e.auto, rooms: e.rooms.map((s) => s.id), keys: zs(e), doors: Sl(e, e.entry).path.length - 1, solvable: yl(e, e.entry) })) };
    }
    onKey(e) {
      if (e.ctrlKey || e.metaKey || e.altKey || Es(e.target) || this.session.screen !== "room" || !/^[1-9]$/.test(e.key)) return;
      const n = [...this.host.root.querySelectorAll(".mm-door")][Number(e.key) - 1];
      n && (e.preventDefault(), n.click());
    }
    title() {
      const e = this.session;
      e.finished = false, this.walks.clear(), this.throne = null, this.currentWing = null, e.render("title", Rs(e, { onStart: () => this.castle() }, () => this.title(), this.titleState));
    }
    castle() {
      const e = this.session;
      e.finished = false, this.currentWing = null;
      const s = this.s, n = H1(this.maze.wings, e.units()), r = new Map(this.maze.wings.map((p) => [p.id, p])), i = this.everyKey(), o = this.maze.wings.length, a = this.keysWon(), c = this.maze.wings.map((p) => ({ state: e.isMastered(p.unit) ? "won" : e.isUnlocked(p.unit) ? "open" : "sealed" })), l = (p) => {
        var _a3, _b3, _c2, _d2;
        const f = !e.isUnlocked(p.unit), m = e.unitStars(p.unit), k = e.isMastered(p.unit), b = ((_b3 = (_a3 = e.pack.units.find(($) => $.id === p.unit)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter(($) => !e.isMastered($)).map(($) => {
          var _a4;
          return this.label((_a4 = this.maze.wings.find((S) => S.unit === $)) == null ? void 0 : _a4.name) || e.unitTitle($);
        }).join(", "), v = this.walks.has(p.id);
        return u("li", { class: "mm-wing-item" }, u("button", { type: "button", class: "mm-wing ".concat(f ? "is-locked" : "is-open").concat(k ? " is-key" : ""), testid: "wing-".concat(p.id), "data-stars": String(m), "data-locked": String(f), "data-key": String(k), "data-unit": p.unit, "data-requires": ((_d2 = (_c2 = e.pack.units.find(($) => $.id === p.unit)) == null ? void 0 : _c2.requires) != null ? _d2 : []).join(" "), ...f ? { disabled: true } : {}, onclick: () => this.enterWing(p) }, u("span", { class: "mm-wing-name" }, this.label(p.name)), p.description ? u("span", { class: "mm-wing-desc" }, this.label(p.description)) : null, u("span", { class: "mm-wing-meta" }, f ? "".concat(s("maze.wing.sealed"), ". ").concat(s("maze.wing.needs", { wings: b })) : k ? "".concat(s("maze.wing.key")) : v ? s("maze.wing.resume") : s("maze.wing.rooms", { n: p.rooms.length })), k ? u("span", { class: "mm-wing-keyicon" }, Fi()) : null, e.stars(m)));
      }, d = u("button", { type: "button", class: "mm-throne-btn ".concat(i ? "is-open" : "is-locked").concat(this.crowned() ? " is-crowned" : ""), testid: "throne", "data-locked": String(!i), "data-stars": String(e.bossStars()), ...i ? {} : { disabled: true }, onclick: () => this.throneIntro() }, u("span", { class: "mm-throne-icon" }, Hn(this.crowned())), u("span", { class: "mm-wing-name" }, this.label(this.maze.throne.name) || s("maze.throne.name")), u("span", { class: "mm-wing-meta" }, this.crowned() ? s("maze.throne.crowned") : s(i ? "maze.throne.ready" : "maze.throne.sealed")), e.stars(e.bossStars())), h = u("section", { class: "castle-screen mm-castle" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "castle-keys" }, s("maze.keys", { n: a, total: o }))), u("h1", { class: "screen-title", tabindex: "-1", testid: "castle-title" }, s("maze.castle.title")), u("p", { class: "subject" }, s("maze.castle.sub")), u("div", { class: "mm-skyline" }, t$(c, this.crowned() ? "won" : i ? "open" : "sealed", s("maze.castle.map", { won: a, total: o }))), u("div", { class: "mm-throne-wrap" }, d), u("ol", { class: "mm-wing-rows", testid: "wing-map" }, [...n].reverse().map((p) => u("li", { class: "mm-wing-row" }, u("div", { class: "mm-corridor", "aria-hidden": "true" }), u("ul", { class: "mm-wing-list" }, p.map((f) => l(r.get(f))))))));
      e.render("castle", h, { view: this.castleView() });
    }
    enterWing(e) {
      const s = this.session;
      if (this.currentWing = e.id, !this.walks.has(e.id)) {
        const n = s.startRun(this.poolOfWing(e), { kind: "unit", unitId: e.unit });
        this.walks.set(e.id, n$(e, n, this.maze.torches));
      }
      this.room();
    }
    setWalk(e) {
      this.walks.set(e.wingId, e);
    }
    room() {
      var _a3, _b3, _c2;
      const e = this.session, s = this.currentWing, n = this.walks.get(s), r = this.wing(s), i = wt(r, n.room), o = this.s, a = new Set(n.open), c = this.roomLabel(i.name), l = this.label(i.description), d = this.assetOf(i.asset), h = n.trail.at(-1), p = (j, O) => {
        const R = ns(n, i.id, j.to), y = wt(r, j.to), E = this.roomName(r, j.to);
        return u("li", { class: "mm-door-item" }, u("button", { type: "button", class: "mm-door ".concat(R ? "is-open" : "is-locked").concat((y == null ? void 0 : y.key) ? " is-key" : ""), testid: "door-".concat(j.to), "data-state": R ? "open" : "locked", ...(y == null ? void 0 : y.key) ? { "data-key": "true" } : {}, onclick: () => this.pressDoor(i, j) }, Zi(R), u("span", { class: "mm-door-num", "aria-hidden": "true" }, String(O + 1)), u("span", { class: "mm-door-name" }, E), u("span", { class: "mm-door-state" }, R ? "✓ ".concat(o("maze.door.open")) : o("maze.door.locked"))));
      }, f = i.doors.length ? u("section", { class: "mm-doors", "aria-labelledby": "mm-doors-h" }, u("h2", { class: "sr-only", id: "mm-doors-h" }, o("maze.doors")), u("ul", { class: "mm-door-list", testid: "doors" }, i.doors.map(p))) : null, m = i.key ? u("div", { class: "mm-keybox" }, u("span", { class: "mm-keybox-icon" }, Fi()), u("p", {}, o("maze.keyroom")), I("take-key", o("maze.take"), () => this.takeKey(), { class: "btn btn-primary btn-big" })) : null, k = h !== void 0 ? I("back", "‹ ".concat(o("maze.back", { room: this.roomName(r, h) })), () => {
        this.setWalk({ ...r$(n), mood: "none" }), this.room();
      }, { class: "btn btn-ghost" }) : null, g = n.ghosted ? u("p", { class: "mm-notice", role: "status", testid: "notice" }, o("maze.notice.ghost")) : null, b = W1(r), v = new Set(zs(r)), $ = o("maze.map.alt", { wing: this.label(r.name), n: r.rooms.length, here: String((_b3 = (_a3 = b.nodes.find((j) => j.id === n.room)) == null ? void 0 : _a3.n) != null ? _b3 : 0) }), S = [...b.nodes].sort((j, O) => j.n - O.n).map((j) => {
        const O = wt(r, j.id), R = [j.id === n.room ? o("maze.map.here") : "", v.has(j.id) ? o("maze.map.key") : ""].filter(Boolean).join(", ");
        return u("li", { class: "mm-legend-item".concat(j.id === n.room ? " is-here" : ""), "data-room": j.id }, u("b", {}, "".concat(j.n, ".")), " ", this.roomLabel(O.name), R ? u("em", {}, " (".concat(R, ")")) : null);
      }), _ = u("section", { class: "mm-map", "aria-labelledby": "mm-map-h" }, u("h2", { id: "mm-map-h" }, o("maze.minimap")), u("div", { class: "mm-parchment" }, e$(b, { here: n.room, open: a, keys: v, entry: r.entry }, $)), u("ol", { class: "mm-legend", testid: "minimap-list" }, S)), w = this.characterPanel(i, r, n), A = u("section", { class: "room-screen mm-room" }, u("div", { class: "topbar mm-topbar" }, I("to-castle", "‹ ".concat(o("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), u("span", { class: "mm-wing-tag", testid: "wing-tag" }, o("maze.wing.of", { wing: this.label(r.name) })), Ui(n.torches, n.maxTorches, o("maze.torches", { n: n.torches, max: n.maxTorches }))), g, u("div", { class: "mm-layout" }, u("div", { class: "mm-scene" }, u("h1", { class: "screen-title mm-room-name", tabindex: "-1", testid: "room-name" }, c), l ? u("p", { class: "mm-room-desc", testid: "room-desc" }, l) : null, d ? u("figure", { class: "mm-room-figure" }, u("img", { src: d.url, alt: d.alt, loading: "lazy" })) : null, f, m, k ? u("div", { class: "actions" }, k) : null), u("aside", { class: "mm-side" }, w, _)));
      e.render("room", A, { unitId: r.unit, roundKind: "unit", roundSize: n.run.size, view: (_c2 = this.roomView()) != null ? _c2 : {} });
    }
    characterPanel(e, s, n) {
      const r = e.character;
      if (!r) return null;
      const i = this.s, o = this.label(r.name), a = this.assetOf(r.portrait), c = X1(r, a ? { url: a.url, alt: i("maze.portrait", { name: o }) } : null), l = u("p", { class: "mm-bubble mm-line", testid: "character-line", hidden: true }, this.label(r.line)), d = this.hintFor(e, r, n), h = u("p", { class: "mm-bubble mm-hint", testid: "character-hint", hidden: true }, d != null ? d : ""), p = I("talk", i("maze.talk"), () => {
        l.hidden = !l.hidden, p.setAttribute("aria-expanded", String(!l.hidden));
      }, { class: "btn btn-small", "aria-expanded": "false" }), f = () => {
        h.hidden = !h.hidden, m == null ? void 0 : m.setAttribute("aria-expanded", String(!h.hidden));
      }, m = d ? I("hint", "💡 ".concat(i("maze.hint")), f, { class: "btn btn-small", "aria-expanded": "false" }) : null, k = n.mood === "none" ? "" : n.mood === "cheer" ? this.label(r.right) || i("maze.say.right") : this.label(r.wrong) || i("maze.say.wrong");
      return u("section", { class: "mm-char", "aria-labelledby": "mm-char-h", "data-mood": n.mood }, c, u("div", { class: "mm-char-body" }, u("h2", { class: "mm-char-name", id: "mm-char-h", testid: "character-name" }, o), u("div", { class: "mm-char-actions" }, p, m), l, h, k ? u("p", { class: "mm-bubble mm-react", testid: "character-reaction" }, k) : null));
    }
    hintFor(e, s, n) {
      if (s.hint) return this.label(s.hint);
      const r = this.session, i = [];
      for (const o of e.doors) if (!ns(n, e.id, o.to)) for (const a of o.items) {
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
      if (ns(r, e.id, s.to)) return this.setWalk({ ...Bi(r, s.to), mood: "none" }), this.room();
      this.askDoor(e, s);
    }
    askDoor(e, s) {
      const n = this.session, r = this.currentWing, i = this.wing(r), o = this.walks.get(r), a = this.s, c = c$(o.run, s.items, (f) => n.next(f), n.rng), l = c ? n.item(c.id) : void 0;
      if (!c || !n.canAsk(l)) return this.setWalk({ ...Bi(Jd(o, e.id, s.to), s.to), mood: "none" }), this.room();
      const d = Zi(false), h = Ui(o.torches, o.maxTorches, a("maze.torches", { n: o.torches, max: o.maxTorches })), p = u("div", { class: "mm-hud" }, u("div", { class: "mm-hud-door" }, d), u("div", { class: "mm-hud-text" }, u("p", { class: "mm-hud-wing" }, this.label(i.name)), h));
      lt(n, { item: l, context: "door", retry: c.retry, hud: p, lead: u("span", {}, a("maze.asks", { room: this.roomName(i, s.to) })), unitId: i.unit, roundKind: "unit", roundSize: o.run.size, index: o.run.results.length, view: () => {
        var _a3;
        return (_a3 = this.roomView()) != null ? _a3 : {};
      }, leaveLabel: a("maze.stepback"), onLeave: () => this.room(), onAnswered: (f) => {
        let m = this.walks.get(r);
        m = { ...m, run: n.record(m.run, c, f), ghosted: false };
        const k = f.result.correct;
        m = { ...m, mood: a$(k, n.combo) }, k ? (m = Jd(m, e.id, s.to), Y1(d, true), this.burst()) : (m = i$(m).walk, this.setTorches(h, m)), this.setWalk(m);
      }, effect: (f) => {
        const m = this.walks.get(r);
        return f.result.correct ? { text: a("maze.fx.open"), tone: "good" } : m.torches === 0 ? { text: a("maze.fx.dark"), tone: "bad" } : { text: a("maze.fx.torch", { n: m.torches }), tone: "bad" };
      }, nextLabel: (f) => f.result.correct ? a("maze.next.walk") : this.walks.get(r).torches === 0 ? a("maze.next.ghost") : a("maze.next.room"), onNext: (f) => {
        const m = this.walks.get(r);
        f.result.correct ? this.setWalk(Bi(m, s.to)) : m.torches === 0 && this.setWalk(o$(m, i.entry)), this.room();
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
      this.walks.delete(s), e.playCue("unit-complete"), this.wingDone(r, o.stars, i, o.unlocked, Oi(n.run));
    }
    wingDone(e, s, n, r, i) {
      const o = this.session, a = this.s, c = o.isMastered(e.unit), l = this.maze.wings.filter((p) => r.includes(p.unit)).map((p) => this.label(p.name)), d = Math.round(n * 100), h = u("section", { class: "wingdone-screen mm-done ".concat(c ? "is-key" : "is-crumble") }, u("div", { class: "mm-done-art", "aria-hidden": "true" }, c ? Fi() : Zi(false)), u("h1", { class: "screen-title", tabindex: "-1", testid: "wing-title" }, s >= 2 || c ? a("maze.done.won") : a("maze.done.crumble")), u("p", { class: "subject" }, this.label(e.name)), o.stars(s, "wing-stars"), u("p", { class: "big-number", testid: "wing-accuracy" }, a("maze.done.accuracy", { n: d })), c ? u("p", { class: "message message-ok", testid: "wing-key" }, a("maze.done.key", { wing: this.label(e.name) })) : u("p", { class: "message message-bad", testid: "wing-crumble" }, a("maze.done.crumble.text")), l.length > 0 ? u("p", { class: "message", testid: "wing-unlocked" }, a("maze.done.unlocked", { wings: l.join(", ") })) : null, this.everyKey() ? u("p", { class: "message message-ok", testid: "throne-open" }, a("maze.done.throne")) : null, i.length > 0 ? u("div", { class: "mm-misses" }, u("h2", {}, a("maze.done.misses")), u("ul", { class: "miss-list", testid: "wing-misses" }, i.map((p) => {
        var _a3;
        const f = o.item(p), m = f ? Os(f, { text: o.text, ui: o.ui }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(p) }, u("span", {}, o.t((_a3 = f == null ? void 0 : f.prompt) != null ? _a3 : p)), m ? u("small", { class: "miss-answer" }, m.length > 140 ? "".concat(m.slice(0, 139), "…") : m) : null);
      }))) : null, u("div", { class: "actions actions-center" }, I("to-castle", a("maze.to.castle"), () => this.castle(), { class: "btn btn-primary btn-big" }), s < 3 ? I("retry-wing", a("maze.retry"), () => this.enterWing(e), { class: "btn btn-big" }) : null));
      o.render("wing-done", h, { unitId: e.unit, roundKind: "unit", view: { wing: e.id, stars: s, key: c, accuracy: d, unlocked: r, misses: i } });
    }
    throneIntro() {
      const e = this.session, s = this.s;
      this.throne = null;
      const n = u("section", { class: "throne-screen mm-throne" }, u("div", { class: "topbar" }, I("to-castle", "‹ ".concat(s("maze.to.castle")), () => this.castle(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars" }, s("maze.keys", { n: this.keysWon(), total: this.maze.wings.length }))), u("div", { class: "mm-throne-art", "aria-hidden": "true" }, Hn(this.crowned())), u("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, this.label(this.maze.throne.name) || s("maze.throne.name")), u("p", { class: "mm-room-desc" }, this.label(this.maze.throne.description) || s("maze.throne.desc")), this.crowned() ? u("p", { class: "message message-ok", testid: "throne-crowned" }, s("maze.throne.crowned")) : null, e.stars(e.bossStars(), "throne-stars"), u("div", { class: "actions actions-center" }, I("throne-begin", s("maze.throne.begin"), () => this.startThrone(), { class: "btn btn-primary btn-big" }), this.crowned() ? I("finish", s("maze.throne.finish"), () => this.end(), { class: "btn btn-big" }) : null));
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
      const o = Ui(s.torches, s.max, n("maze.torches", { n: s.torches, max: s.max })), a = u("div", { class: "mm-hud mm-hud-throne" }, u("div", { class: "mm-hud-door" }, Hn(false)), u("div", { class: "mm-hud-text" }, u("p", { class: "mm-hud-wing" }, this.label(this.maze.throne.name) || n("maze.throne.name")), o));
      lt(e, { item: i, context: "throne", retry: r.retry, hud: a, lead: u("span", {}, n("maze.throne.step", { i: Math.min(s.run.asked.length + (r.retry ? 0 : 1), s.run.size), n: s.run.size })), roundKind: "boss", roundSize: s.run.size, index: s.run.results.length, view: () => this.throneView("question"), leaveLabel: n("maze.stepback"), onLeave: () => this.throneIntro(), onAnswered: (c) => {
        s.run = e.record(s.run, r, c), s.relit = false, c.result.correct ? this.burst() : (s.torches = Math.max(0, s.torches - 1), s.torches === 0 && (s.torches = s.max, s.relit = true), this.setTorches(o, { torches: s.torches, maxTorches: s.max }));
      }, effect: (c) => c.result.correct ? { text: n("maze.fx.t.right"), tone: "good" } : s.relit ? { text: n("maze.fx.t.relit"), tone: "info" } : { text: n("maze.fx.t.torch", { n: s.torches }), tone: "bad" }, nextLabel: n("maze.next.throne"), onNext: () => this.throneStep() });
    }
    throneResult() {
      const e = this.session, s = this.throne, n = this.s, r = e.accuracy(s.run), i = e.recordUnit({ boss: true }, r);
      e.playCue("boss");
      const o = this.crowned(), a = Oi(s.run), c = Math.round(r * 100), l = u("section", { class: "throne-screen mm-throne ".concat(o ? "is-won" : "is-lost") }, u("div", { class: "mm-throne-art", "aria-hidden": "true" }, Hn(i.stars >= 1)), u("h1", { class: "screen-title", tabindex: "-1", testid: "throne-title" }, i.stars >= 1 ? n("maze.throne.won") : n("maze.throne.lost")), e.stars(i.stars, "throne-stars"), u("p", { class: "big-number", testid: "throne-accuracy" }, n("maze.done.accuracy", { n: c })), i.stars >= 1 ? null : u("p", { class: "message message-bad", testid: "throne-lost" }, n("maze.throne.lost.text")), a.length > 0 ? u("div", { class: "mm-misses" }, u("h2", {}, n("maze.done.misses")), u("ul", { class: "miss-list", testid: "throne-misses" }, a.map((d) => {
        var _a3;
        const h = e.item(d), p = h ? Os(h, { text: e.text, ui: e.ui }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(d) }, u("span", {}, e.t((_a3 = h == null ? void 0 : h.prompt) != null ? _a3 : d)), p ? u("small", { class: "miss-answer" }, p.length > 140 ? "".concat(p.slice(0, 139), "…") : p) : null);
      }))) : null, u("div", { class: "actions actions-center" }, o ? I("finish", n("maze.throne.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, i.stars < 3 ? I("retry-throne", n("maze.throne.retry"), () => this.startThrone(), { class: o ? "btn btn-big" : "btn btn-primary btn-big" }) : null, I("to-castle", n("maze.to.castle"), () => this.castle(), { class: "btn btn-big" })));
      e.render("throne", l, { view: this.throneView("result", { stars: i.stars, accuracy: c, misses: a }) });
    }
    end() {
      const e = this.session, s = this.s;
      e.finish(), this.currentWing = null, e.render("end", Ds(e, { title: s("maze.end.title"), sub: s("maze.end.sub"), stats: u("p", { class: "subject", testid: "end-keys" }, s("maze.end.keys", { n: this.keysWon(), total: this.maze.wings.length })), onAgain: () => this.castle(), onTitle: () => this.title() }), { view: { keys: this.keysWon(), total: this.maze.wings.length, crowned: this.crowned() } });
    }
  }
  const Xd = /* @__PURE__ */ (() => {
    let t = null;
    return { id: Qd, mount(e) {
      t = new d$(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), u$ = (t) => t.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, ""), h$ = (t) => "unit-".concat(u$(t)), Vn = "quiz-arena", eu = "chalkboard", p$ = /* @__PURE__ */ new Set(["hotspot", "listening", "flashcard"]), f$ = (t, e) => {
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
  class m$ {
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
      __publicField(this, "playTimer", new fd(() => this.progress, (e) => {
        this.progress = e;
      }, () => this.save()));
      __publicField(this, "speechMade", null);
      __publicField(this, "titleState", es());
      this.host = e, this.data = e.data, this.pack = e.data.pack, this.store = new ud(this.pack, hd()), this.progress = this.store.load(), this.lang = f$(this.data, this.progress.settings.lang), this.ui = Ts(this.lang), this.text = qt(this.data.catalogs, this.lang, this.pack.targetLang), this.check = Kt({ pack: this.pack, text: this.text }), this.rng = Bt(e.seed, "arena"), this.audio = new vd({ cues: this.pack.cues, assets: this.data.assets, loops: bd(this.pack.extensions), settings: () => this.progress.settings }), this.setLang(this.lang, false);
    }
    get speechService() {
      return this.speechMade === null && (this.speechMade = Sd(window, this.pack.extensions, this.pack.targetLang)), this.speechMade;
    }
    mount() {
      this.host.root.classList.add("edu-stage"), Bn(this.host.root, "title", eu), document.addEventListener("keydown", this.onKey), this.playTimer.start(), this.go("title");
    }
    unmount() {
      var _a3, _b3, _c2;
      document.removeEventListener("keydown", this.onKey), this.playTimer.dispose(), this.audio.dispose(), this.stopTimer(), (_c2 = (_a3 = this.current) == null ? void 0 : (_b3 = _a3.view).destroy) == null ? void 0 : _c2.call(_b3);
    }
    setLang(e, s = true) {
      this.lang = e, this.text = qt(this.data.catalogs, e, this.pack.targetLang), this.ui = Ts(e, this.data.catalogs[e]), this.check = Kt({ pack: this.pack, text: this.text }), document.documentElement.lang = e, document.title = this.courseTitle(), s && (this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: e } }, this.save(), this.go(this.screen));
    }
    courseTitle() {
      const e = this.text.text("course.title");
      return e || this.pack.subject.charAt(0).toLocaleUpperCase() + this.pack.subject.slice(1);
    }
    publish() {
      const e = this.round, s = this.current;
      this.host.publish(xd({ screen: this.screen, shell: Vn, lang: this.lang, seed: this.host.seed, ...e ? { roundNumber: this.roundNumber, roundKind: e.kind, roundSize: e.size, ...e.unitId ? { unitId: e.unitId } : {} } : {}, ...s ? { itemId: s.item.id, itemKind: s.item.kind, itemIndex: e ? e.results.length - (s.answered ? 1 : 0) : 0 } : {}, combo: this.combo, score: this.progress.score, ...this.lastResult ? { lastResult: this.lastResult } : {}, reviewQueue: this.progress.queue, mastery: sd(this.pack, this.progress), finished: this.finished, steps: this.steps }));
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
      Bn(n, e, eu), xs(n);
      const r = this.build(e), i = u("div", { class: "edu-app", testid: "app", "data-screen": e, "data-shell": Vn }, u("div", { class: "frame" }, u("main", { class: "board board-".concat(e), id: "edu-main" }, r)), u("div", { class: "burst-layer", "aria-hidden": "true" }), u("div", { class: "sr-only", role: "status", "aria-live": "polite", testid: "live" }));
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
          return !s || s.kind === "review" || s.kind === "verbs" ? "menu" : s.kind === "boss" ? "boss" : h$((_a3 = s.unitId) != null ? _a3 : "");
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
      return { pack: this.pack, ui: this.ui, shellId: Vn, shells: this.host.shells, switchShell: (n) => this.host.switchShell(n), courseTitle: () => this.courseTitle(), unitTitle: (n) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((r) => r.id === n)) == null ? void 0 : _a3.title) != null ? _b3 : n);
      }, lang: this.lang, setLang: (n) => {
        this.setLang(n, false), this.progress = { ...this.progress, settings: { ...this.progress.settings, lang: n } }, this.save();
      }, get progress() {
        return e();
      }, set progress(n) {
        s(n);
      }, save: () => this.save(), persistent: this.store.persistent, started: dd(this.progress), refreshAudio: () => this.audio.refresh(), speechService: this.speechService, reset: () => {
        this.store.clear(), this.progress = Ms(this.pack.id), this.combo = 0, this.finished = false;
      } };
    }
    buildTitle() {
      const e = this.ui, s = u("label", { class: "toggle" }, u("input", { type: "checkbox", testid: "setting-timer", ...this.progress.settings.timer ? { checked: true } : {}, onchange: (n) => {
        this.progress = { ...this.progress, settings: { ...this.progress.settings, timer: n.target.checked } }, this.save();
      } }), u("span", { class: "toggle-text" }, u("b", {}, e("timer")), u("small", {}, e("timer.hint", { s: Ei(this.pack).timerSeconds }))));
      return Id(this.startHost(), { onStart: () => this.go("map"), settings: s }, () => this.go("title"), this.titleState);
    }
    unitLevels() {
      const e = /* @__PURE__ */ new Map();
      for (const s of At(this.pack.units)) {
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
          const f = Zn(this.pack, this.progress, p.id), m = (_b3 = (_a3 = this.progress.units[p.id]) == null ? void 0 : _a3.stars) != null ? _b3 : 0, k = Ai(this.pack, p.id).length;
          return u("li", {}, u("button", { type: "button", class: "unit-card ".concat(f ? "is-open" : "is-locked", " ").concat(Cn(this.progress, p.id) ? "is-mastered" : ""), testid: "unit-".concat(p.id), "data-stars": String(m), "data-locked": String(!f), "data-requires": p.requires.join(" "), ...pd(this.pack, p.id) ? { "data-assigned": "true" } : {}, ...f && k > 0 ? {} : { disabled: true }, onclick: () => this.beginRound("unit", p.id) }, u("span", { class: "unit-name" }, this.text.t(p.title)), p.summary ? u("span", { class: "unit-summary" }, this.text.t(p.summary)) : null, u("span", { class: "unit-meta" }, f ? e("map.items", { n: k }) : "🔒 ".concat(e("map.locked"))), p.requires.length ? u("span", { class: "unit-req" }, e("map.requires", { units: p.requires.map(r).join(", ") })) : null, pd(this.pack, p.id) ? u("span", { class: "unit-assigned", testid: "assigned-".concat(p.id) }, e("class.assigned")) : null, this.starsEl(m)));
        }))));
      }
      const o = Si(this.pack, this.progress), a = this.progress.boss.stars, c = u("li", { class: "map-level map-boss" }, u("div", { class: "map-link", "aria-hidden": "true" }), u("div", { class: "map-boss-wrap" }, u("button", { type: "button", class: "unit-card boss-card ".concat(o ? "is-open" : "is-locked"), testid: "boss", "data-stars": String(a), "data-locked": String(!o), ...o ? {} : { disabled: true }, onclick: () => this.beginRound("boss") }, u("span", { class: "unit-name" }, "👑 ".concat(e("map.boss"))), u("span", { class: "unit-summary" }, e(o ? "map.boss.ready" : "map.boss.locked")), this.starsEl(a)))), l = this.progress.queue;
      return u("section", { class: "map-screen" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e("menu")), () => this.go("title"), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "map-stars" }, "★ ".concat(e("map.stars", { n: nd(this.pack, this.progress), total: this.pack.units.length * 3 })))), this.heading("h1", e("map.title"), "map-title"), u("p", { class: "subject" }, this.courseTitle()), Ti(this.pack).length > 0 ? u("div", { class: "actions actions-center" }, I("verb-drill", "🔤 ".concat(e("map.verbs", { n: zd(this.pack, this.progress.cards, Date.now()) })), () => this.beginRound("verbs"), { class: "btn" })) : null, l.length > 0 ? u("div", { class: "actions actions-center" }, I("review", "↻ ".concat(e("map.review", { n: l.length })), () => this.go("review"), { class: "btn" })) : null, u("ol", { class: "map-levels", testid: "unit-map" }, i, c), a > 0 ? u("div", { class: "actions actions-center" }, I("finish", e("summary.finish"), () => this.finish(), { class: "btn btn-primary" })) : null);
    }
    beginRound(e, s) {
      const n = OS(this.pack, e, { ...s ? { unitId: s } : {}, queue: this.progress.queue, difficulty: e === "boss" ? 4 : this.difficulty, cards: this.progress.cards, now: Date.now(), exclude: K0(this.pack.items, cd(this.progress)) });
      if (n.size === 0) return this.go("map");
      this.round = n, this.roundNumber += 1, this.roundScore = 0, this.roundBestCombo = 0, this.combo = 0, this.lastResult = void 0, this.finished = false, this.nextQuestion();
    }
    nextQuestion() {
      if (!this.round) return this.go("map");
      const e = _d(this.round, this.pack, this.rng, this.progress.cards, Date.now());
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
      console.warn('[EduEngine] no renderer for the item kind "'.concat(s.kind, '"; skipping ').concat(s.id)), this.round && (this.round = Ii(this.round, e, s, { correct: true, score: 1 }, "good")), this.nextQuestion();
    }
    itemContext(e) {
      var _a3, _b3;
      const s = "".concat(this.host.seed, ":").concat(e.id, ":").concat(this.turn), n = new Map(this.pack.assets.map((i) => [i.id, i])), r = (_a3 = this.pack.targetLang) != null ? _a3 : this.lang;
      return { item: e, data: this.data, lang: this.lang, text: this.text, check: this.check, rng: new st(s), seed: s, assetUrl: (i) => i ? this.data.assets[i] : void 0, assetAlt: (i) => {
        const o = i ? n.get(i) : void 0;
        return o ? this.text.t(o.alt) : "";
      }, ui: (i, o) => this.ui(i, o), specialLetters: (_b3 = Cl[r]) != null ? _b3 : [], submit: (i) => this.submit(i), duck: (i) => this.audio.duck(i), ...this.progress.settings.speak !== false && this.speechService ? { speech: this.speechService } : {} };
    }
    submit(e) {
      const s = this.current;
      return s ? s.result ? s.result : this.answered(s, e, hn(s.item, e, this.check), false) : { correct: false, score: 0, expected: null, invalid: true };
    }
    answered(e, s, n, r) {
      if (this.stopTimer(), !this.round) return n;
      const i = jd(e.item, s, n), o = Date.now(), a = e.deadline ? Math.max(0, e.deadline - o) / 1e3 : 0;
      this.round = Ii(this.round, e.pick, e.item, n, i, this.progress.cards, o), this.steps += 1;
      const c = this.progress, l = !e.pick.retry;
      let d = c.queue;
      n.correct ? (l || this.round.kind === "review") && (d = od(d, e.item.id)) : d = id(d, e.item.id);
      let h = Math.round(100 * n.score);
      n.correct ? (h += Math.min(this.combo, 10) * 10 + Math.round(a * 2), e.pick.retry && (h = Math.round(h / 2)), this.combo += 1) : this.combo = 0, this.roundBestCombo = Math.max(this.roundBestCombo, this.combo), this.roundScore += h, this.progress = { ...c, cards: { ...c.cards, [e.item.id]: fc(ad(c, e.item.id, o), i, o) }, queue: d, score: c.score + h, bestCombo: Math.max(c.bestCombo, this.combo), answered: c.answered + (l ? 1 : 0), right: c.right + (l && n.correct ? 1 : 0) }, this.save(), e.answered = true, e.answer = s, e.result = n, this.lastResult = n, e.view.reveal(n, s);
      const p = yd(e.item, s, n, { text: this.text, ui: this.ui, rng: this.rng }, r);
      return e.feedback = p, this.screen = "feedback", this.showFeedback(e, p), this.updateHud(), this.audio.sfx(n.correct ? "correct" : "wrong"), n.correct && [3, 5, 7, 10, 15, 20, 30].includes(this.combo) && (this.burst(this.combo), this.audio.sfx("combo")), this.publish(), n;
    }
    showFeedback(e, s) {
      var _a3, _b3;
      const n = this.host.root, r = n.querySelector(".edu-app");
      r && r.setAttribute("data-screen", "feedback");
      const i = n.querySelector(".item-body"), o = n.querySelector(".feedback-slot");
      if (!o) return;
      const a = this.ui, c = !!this.round && this.round.asked.length >= this.round.size && this.round.session.pending.length === 0, l = (p, f, m, ...k) => u("div", { class: "fb-part ".concat(p), testid: f }, u("h3", {}, m), k), d = u("div", { class: "feedback is-".concat(s.verdict), testid: "feedback", "data-result": s.verdict, tabindex: "-1" }, u("h2", { class: "fb-title", testid: "feedback-title" }, u("span", { class: "fb-icon", "aria-hidden": "true" }, s.verdict === "correct" ? "✓" : s.verdict === "partial" ? "≈" : s.verdict === "timeout" ? "⏱" : "✗"), s.title), s.notes.length ? u("ul", { class: "fb-notes", testid: "feedback-notes" }, s.notes.map((p) => u("li", {}, p))) : null, s.detail ? u("p", { class: "fb-detail", testid: "feedback-detail" }, s.detail) : null, s.whys.length ? l("fb-why", "feedback-why", a("fb.why"), s.whys.map((p) => u("p", {}, p))) : null, s.answer.length ? l("fb-answer", "feedback-answer", a("fb.answer"), s.answer.length === 1 ? u("p", { class: "fb-answer-text" }, s.answer[0]) : u("ul", {}, s.answer.map((p) => u("li", {}, p)))) : null, s.explanation ? l("fb-explain", "feedback-explanation", a("fb.explain"), u("p", {}, s.explanation)) : null, s.dyk ? l("fb-dyk", "feedback-dyk", "💡 ".concat(a("fb.dyk")), u("p", {}, s.dyk)) : null, u("div", { class: "actions" }, I("next", a(c ? "results" : "next"), () => this.nextQuestion(), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      o.appendChild(d);
      const h = n.querySelector('[data-testid="live"]');
      h && (h.textContent = "".concat(s.title, ". ").concat(s.whys.join(" "), " ").concat(s.answer.join(". "))), i == null ? void 0 : i.classList.add("is-answered"), ((_a3 = e.result) == null ? void 0 : _a3.correct) ? As(i != null ? i : d, "fx-glow") : As(i != null ? i : d, "fx-shake"), d.scrollIntoView({ block: "nearest", behavior: "smooth" }), (_b3 = n.querySelector('[data-testid="next"]')) == null ? void 0 : _b3.focus({ preventScroll: true });
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
      if (!e || !this.progress.settings.timer || !PS(e.item)) return;
      const s = Ei(this.pack).timerSeconds * 1e3;
      e.deadline = Date.now() + s;
      const n = () => {
        if (!this.current || this.current !== e || e.answered) return this.stopTimer();
        const r = e.deadline - Date.now();
        this.setTimer(Math.max(0, r), s), r <= 0 && (this.stopTimer(), this.answered(e, void 0, hn(e.item, void 0, this.check), true));
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
        e == null ? void 0 : e.setAttribute("data-combo", String(Math.min(this.combo, 10))), e == null ? void 0 : e.classList.toggle("is-hot", this.combo >= 3), this.combo > 0 && As(this.hud.combo, "fx-pop", 500);
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
      return e ? e.kind === "boss" ? "👑 ".concat(this.ui("map.boss")) : e.kind === "review" ? "↻ ".concat(this.ui("review")) : e.kind === "verbs" ? "🔤 ".concat(this.ui("map.verbs", { n: zd(this.pack, this.progress.cards, Date.now()) })) : this.text.t((_b3 = (_a3 = this.pack.units.find((s) => s.id === e.unitId)) == null ? void 0 : _a3.title) != null ? _b3 : "") : "";
    }
    buildItem() {
      const e = this.current, s = this.round;
      if (!e || !s) return u("p", {}, this.ui("loading"));
      const n = this.ui, r = e.item;
      this.hud.score = u("b", { testid: "hud-score" }, String(this.progress.score)), this.hud.combo = u("b", { testid: "hud-combo" }, "x".concat(this.combo)), this.hud.progress = u("span", { class: "pips", testid: "hud-progress" }, this.pips()), this.hud.timer = u("div", { class: "timer", role: "timer", testid: "hud-timer", hidden: true }, u("span", { class: "timer-s" }), u("span", { class: "timer-bar" }, u("span", { class: "timer-fill" })));
      const i = u("header", { class: "hud" }, I("leave", "‹ ".concat(n("leave")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" }), u("div", { class: "hud-mid" }, u("span", { class: "hud-unit", testid: "hud-unit" }, this.roundTitle()), this.hud.progress), u("div", { class: "hud-stats" }, u("span", { class: "stat" }, u("small", {}, n("score")), this.hud.score), u("span", { class: "combo ".concat(this.combo >= 3 ? "is-hot" : ""), "data-combo": String(Math.min(this.combo, 10)) }, u("small", {}, n("combo")), this.hud.combo)), this.hud.timer), o = u("p", { class: "q-meta", testid: "question-number" }, e.pick.retry ? u("span", { class: "tag tag-retry", testid: "retry-tag" }, n("retry")) : n("question", { i: Math.min(s.asked.length + (e.answered ? 0 : 1), s.size), n: s.size })), a = e.renderer.ownsPrompt ? u("h1", { class: "sr-only" }, this.roundTitle()) : u("h1", { class: "prompt", testid: "prompt", tabindex: "-1" }, this.text.t(r.prompt)), c = p$.has(r.kind) ? null : Ul(this.itemContext(r)), l = r.hint, d = l && this.text.hasText(l) ? this.text.t(l) : null;
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
      const s = Mi(e), n = this.progress;
      e.kind === "unit" || e.kind === "boss" ? (this.progress = rd(this.progress, e.kind === "boss" ? { boss: true } : { unitId: e.unitId }, s), this.roundStars = yi(s), this.roundUnlocked = td(this.pack, n, this.progress), e.kind === "unit" && (this.difficulty = e.adaptive.difficulty)) : (this.roundStars = 0, this.roundUnlocked = []), this.save(), (e.kind === "unit" || e.kind === "boss") && this.audio.sfx(e.kind === "boss" ? "boss" : "level-up"), this.go("summary");
    }
    buildSummary() {
      const e = this.round;
      if (!e) return this.buildMap();
      const s = this.ui, n = Math.round(Mi(e) * 100), r = Oi(e), i = e.kind === "unit" || e.kind === "boss", o = e.kind === "boss" && this.roundStars >= 1, a = (l) => {
        var _a3, _b3;
        return this.text.t((_b3 = (_a3 = this.pack.units.find((d) => d.id === l)) == null ? void 0 : _a3.title) != null ? _b3 : l);
      }, c = [];
      return this.roundUnlocked.length && c.push(u("p", { class: "message message-ok", testid: "summary-unlocked" }, "🔓 ".concat(s("summary.unlocked", { units: this.roundUnlocked.map(a).join(", ") })))), e.kind === "unit" && Si(this.pack, this.progress) && this.progress.boss.rounds === 0 && c.push(u("p", { class: "message message-ok", testid: "summary-boss-open" }, "👑 ".concat(s("summary.bossLocked")))), e.kind === "unit" && this.roundStars < 2 && c.push(u("p", { class: "message", testid: "summary-need-stars" }, s("summary.needStars"))), e.kind === "boss" && !o && c.push(u("p", { class: "message message-bad", testid: "summary-boss-fail" }, s("summary.bossFail"))), u("section", { class: "summary-screen" }, this.heading("h1", s(n === 100 && i ? "summary.perfect" : "summary.title"), "summary-title"), u("p", { class: "subject" }, this.roundTitle()), i ? this.starsEl(this.roundStars, "summary-stars") : null, u("p", { class: "big-number", testid: "summary-accuracy" }, s("summary.accuracy", { n })), u("p", { testid: "summary-score" }, "".concat(s("summary.score", { n: this.roundScore }), " · ").concat(s("summary.combo", { n: this.roundBestCombo }))), c, r.length ? u("ul", { class: "miss-list", testid: "summary-misses" }, r.map((l) => {
        var _a3;
        const d = this.pack.items.find((p) => p.id === l), h = d ? Os(d, { text: this.text, ui: s }).join(" / ") : "";
        return u("li", { testid: "miss-".concat(l) }, u("span", {}, this.text.t((_a3 = d == null ? void 0 : d.prompt) != null ? _a3 : l)), h ? u("small", { class: "miss-answer" }, h.length > 140 ? "".concat(h.slice(0, 139), "…") : h) : null);
      })) : null, u("div", { class: "actions actions-center" }, o ? I("finish", s("summary.finish"), () => this.finish(), { class: "btn btn-primary btn-big" }) : null, I("to-map", s("summary.back"), () => this.leaveRound(), { class: "btn ".concat(o ? "" : "btn-primary", " btn-big") }), this.progress.queue.length > 0 ? I("review", "↻ ".concat(s("map.review", { n: this.progress.queue.length })), () => this.go("review"), { class: "btn" }) : null, e.kind !== "review" ? I("replay", s("summary.again"), () => this.beginRound(e.kind, e.unitId), { class: "btn" }) : null));
    }
    buildReview() {
      const e = this.ui, n = this.progress.queue.filter((r) => this.pack.items.some((i) => i.id === r)).map((r) => this.pack.items.find((i) => i.id === r));
      return u("section", { class: "review-screen" }, u("div", { class: "topbar" }, I("to-map", "‹ ".concat(e("review.back")), () => this.leaveRound(), { class: "btn btn-small btn-ghost" })), this.heading("h1", e("review.title"), "review-title"), n.length === 0 ? u("p", { class: "message", testid: "review-empty" }, e("review.empty")) : u("ul", { class: "review-list", testid: "review-list" }, n.map((r) => {
        const i = Os(r, { text: this.text, ui: e });
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
        if (Es(e.target) && /^[0-9]$/.test(e.key)) return;
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
  const tu = { id: Vn, mount(t) {
    const e = new m$(t);
    this.unmount = () => e.unmount(), e.mount();
  } };
  function su(t) {
    return u("span", { class: "pc-level", "data-level": t }, t);
  }
  function g$(t) {
    var _a3;
    return t.url ? u("span", { class: "pc-avatar has-image", "aria-hidden": "true" }, u("img", { src: t.url, alt: "" })) : u("span", { class: "pc-avatar pc-av-".concat(t.index % 6 + 1), "aria-hidden": "true" }, (_a3 = [...t.name][0]) != null ? _a3 : "?");
  }
  function Ki(t) {
    var _a3, _b3;
    const e = u("div", { class: "pc-bubble" }, u("p", { class: "pc-name" }, t.speaker.name), t.lead ? u("p", { class: "pc-lead" }, t.lead) : null, t.text !== null ? u("p", { class: "pc-text", ...t.lang ? { lang: t.lang } : {} }, t.text) : u("p", { class: "pc-text pc-hidden-text" }, (_a3 = t.hidden) != null ? _a3 : "..."), t.note ? u("p", { class: "pc-note" }, t.note) : null, (_b3 = t.extra) != null ? _b3 : null, t.actions && t.actions.some(Boolean) ? u("div", { class: "pc-actions" }, t.actions) : null);
    return u("li", { class: "pc-line is-".concat(t.kind).concat(t.slow ? " is-slow" : ""), testid: t.testid, ...t.outcome ? { "data-outcome": t.outcome } : {} }, g$(t.speaker), e);
  }
  const nu = (t, e, s, n = {}) => I(t, e, s, { class: "btn btn-small btn-ghost", ...n }), me = (t, e, ...s) => ue(t, e, ...s);
  function k$() {
    return [me("path", { class: "pc-pot", d: "M34 110 L86 110 L79 136 Q78 138 76 138 L44 138 Q42 138 41 136 Z" }), me("path", { class: "pc-pot-shade", d: "M70 110 L86 110 L79 136 Q78 138 76 138 L62 138 Z" }), me("path", { class: "pc-rim", d: "M28 100 Q28 96 32 96 L88 96 Q92 96 92 100 L92 108 Q92 110 90 110 L30 110 Q28 110 28 108 Z" }), me("ellipse", { class: "pc-soil", cx: 60, cy: 96, rx: 28, ry: 4.5 })];
  }
  const St = (t, e) => me("path", { class: "pc-leaf ".concat(t), d: e });
  function b$(t) {
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
  function ru(t) {
    return ue("svg", { class: "pc-plant stage-".concat(t), viewBox: "0 0 120 142", "aria-hidden": "true", focusable: "false" }, ...k$(), me("g", { class: "pc-grow" }, ...b$(t)));
  }
  const v$ = 3;
  function iu(t) {
    return { sceneId: t.id, cursor: Se(t, t.start) ? t.start : null, log: [], turns: [], retry: null };
  }
  function Pt(t, e) {
    if (e.retry) {
      const n = Se(t, e.retry.lineId);
      if (n && Ve(n)) return { type: "turn", line: n, retry: true, tries: e.retry.tries };
    }
    const s = Se(t, e.cursor);
    return s ? Ve(s) ? { type: "turn", line: s, retry: false, tries: 0 } : { type: "say", line: s } : { type: "done" };
  }
  function w$(t, e) {
    const s = Pt(t, e);
    return s.type !== "say" ? e : { ...e, cursor: s.line.next, log: [...e.log, { kind: "say", lineId: s.line.id, speaker: s.line.say }] };
  }
  const qi = (t) => [...t.log].reverse().find((e) => e.kind === "say");
  function y$(t, e, s) {
    var _a3, _b3;
    const n = Pt(t, e);
    if (n.type !== "turn") return e;
    const { line: r } = n, i = n.tries + 1, o = (_b3 = (_a3 = qi(e)) == null ? void 0 : _a3.speaker) != null ? _b3 : "", c = !n.retry ? [...e.turns, { lineId: r.id, itemId: r.reply, tries: i, score: Math.max(0, Math.min(1, s.score)), right: s.correct, shown: false }] : e.turns.map((l) => l.lineId === r.id ? { ...l, tries: i, right: l.right || s.correct } : l);
    return s.correct ? { ...e, turns: c, retry: null, cursor: r.next, log: [...e.log, { kind: "you", lineId: r.id, outcome: "right", text: s.text }] } : i >= v$ ? { ...e, turns: c.map((l) => l.lineId === r.id ? { ...l, shown: true } : l), retry: null, cursor: r.next, log: [...e.log, { kind: "help", lineId: r.id, speaker: o, attempt: i }, { kind: "you", lineId: r.id, outcome: "shown", text: s.text }] } : { ...e, turns: c, retry: { lineId: r.id, tries: i }, log: [...e.log, { kind: "help", lineId: r.id, speaker: o, attempt: i }] };
  }
  function S$(t, e) {
    const s = Pt(t, e);
    return s.type !== "turn" ? e : { ...e, retry: null, cursor: s.line.next };
  }
  const $$ = (t, e) => Pt(t, e).type === "done";
  function z$(t) {
    return t.turns.length === 0 ? 0 : t.turns.reduce((e, s) => e + s.score, 0) / t.turns.length;
  }
  const Rt = (t) => _s(t).path.filter((e) => Ve(Se(t, e))).length;
  function Gi(t, e, s) {
    const n = _s(t).path, r = /* @__PURE__ */ new Set();
    return e.log.forEach((i, o) => {
      if (i.kind !== "say") return;
      const a = Se(t, i.lineId);
      if (!a || !Le(a) || !a.listen || !a.audio || !s(a.audio)) return;
      const c = n.indexOf(a.id), l = n.slice(c + 1).some((h) => Ve(Se(t, h))), d = e.log.slice(o + 1).some((h) => h.kind === "you");
      l && !d && r.add(a.id);
    }), r;
  }
  function _$(t, e, s) {
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
  function j$(t) {
    const { section: e, pack: s } = t, n = new Set(s.units.filter((l) => En(e, l.id).length > 0).map((l) => l.id)), r = [], i = At(s.units), o = (l, d = /* @__PURE__ */ new Set()) => l.flatMap((h) => {
      var _a3, _b3;
      return d.has(h) ? [] : (d.add(h), n.has(h) ? t.mastered(h) ? [] : [h] : o((_b3 = (_a3 = s.units.find((p) => p.id === h)) == null ? void 0 : _a3.requires) != null ? _b3 : [], d));
    });
    for (const l of i) {
      const d = s.units.find((p) => p.id === l);
      if (!d) continue;
      const h = o(d.requires);
      for (const p of En(e, l)) r.push({ scene: p, unit: l, finale: false, locked: h.length > 0, stars: t.unitStars(l), needs: h, turns: Rt(p) });
    }
    const a = new Set(s.units.map((l) => l.id));
    for (const l of e.scenes) l.id === e.finale || l.unit && a.has(l.unit) || r.push({ scene: l, unit: l.unit, finale: false, locked: false, stars: 0, needs: [], turns: Rt(l) });
    const c = e.scenes.find((l) => l.id === e.finale);
    if (c) {
      const l = [...n].filter((d) => !t.mastered(d));
      r.push({ scene: c, unit: void 0, finale: true, locked: l.length > 0, stars: t.bossStars, needs: l, turns: Rt(c) });
    }
    return r;
  }
  function x$(t, e) {
    const s = new Set(t.filter((n) => n.locked).map((n) => n.scene.id));
    return e.filter((n) => !n.locked && s.has(n.scene.id)).map((n) => n.scene.id);
  }
  const ou = ["seed", "sprout", "bud", "bloom"];
  function au(t, e) {
    if (e) return "wilted";
    if (!t || t.last === null) return "seed";
    if (t.reps === 0) return "wilted";
    switch (Xk(t)) {
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
  function E$(t) {
    const e = new Set(t.queue), s = new Set(t.doneUnits), n = new Set(t.pack.items.map((r) => r.id));
    return t.section.garden.filter((r) => n.has(r.item)).map((r) => {
      const i = t.cards[r.item], o = Zy(t.pack, r), a = i !== void 0 || o !== void 0 && s.has(o);
      return { word: r, unit: o, planted: a, stage: au(i, e.has(r.item)), due: a && (i === void 0 || i.last === null || i.due <= t.now), dueAt: i && i.last !== null ? i.due : null };
    });
  }
  function Wi(t) {
    return [...new Set(t.filter((e) => e.planted && (e.due || e.stage === "wilted" || e.stage === "seed")).map((e) => e.word.item))];
  }
  function Hi(t) {
    const e = { seed: 0, sprout: 0, bud: 0, bloom: 0, wilted: 0 };
    for (const s of t) s.planted && (e[s.stage] += 1);
    return e;
  }
  function A$(t, e) {
    if (e === "wilted") return t === "wilted" ? "same" : "wilted";
    const s = t === "wilted" ? -1 : ou.indexOf(t);
    return ou.indexOf(e) > s ? "grew" : "same";
  }
  function T$(t, e) {
    return t.dueAt === null ? null : t.dueAt <= e ? 0 : Math.ceil((t.dueAt - e) / Cr);
  }
  const I$ = (t, e) => e !== "" && " ".concat(t, " ").includes(" ".concat(e, " "));
  function M$(t, e, s, n = /* @__PURE__ */ new Set()) {
    const r = Fe(s(e.text)), i = [...t.scenes.filter((o) => n.has(o.id)), ...t.scenes.filter((o) => !n.has(o.id))];
    for (const o of i) for (const a of _s(o).path) {
      const c = Se(o, a);
      if (c && Le(c) && I$(Fe(s(c.text)), r)) return { sceneId: o.id, lineId: c.id, speaker: c.say, text: c.text, how: "heard" };
    }
    for (const o of i) {
      const a = _s(o).path;
      for (const [c, l] of a.entries()) {
        const d = Se(o, l);
        if (!(!d || !Ve(d) || d.reply !== e.item)) for (let h = c - 1; h >= 0; h--) {
          const p = Se(o, a[h]);
          if (p && Le(p)) return { sceneId: o.id, lineId: p.id, speaker: p.say, text: p.text, how: "used" };
        }
      }
    }
    return null;
  }
  const O$ = { en: { "rp.tagline": "A postcard from a café on the Adriatic", "rp.title.level": "Level {level}", "rp.title.about": "Talk your way through three conversations, then keep the words alive in your garden.", "rp.scenes.title": "Conversations", "rp.scenes.sub": "Pick a scene. Answer in the language you are learning: choose or type.", "rp.scenes.stars": "{n} of {total} stars", "rp.scenes.locked": "Finish the earlier scenes first (2 stars).", "rp.scenes.finale": "The finale mixes everything you have learned.", "rp.scenes.finale.locked": "Open every scene with 2 stars to take the finale.", "rp.scenes.garden": "Vocabulary garden", "rp.scene.turns": "{n} turns", "rp.scene.open": "Play", "rp.scene.back": "Back to the scenes", "rp.scene.setting": "Setting", "rp.next": "Next line", "rp.turn": "Your turn", "rp.lead": "Your turn {i} of {n}", "rp.water.lead": "Watering {i} of {n}", "rp.garden.planted": "{n} of {total} words planted", "rp.cont": "Continue the conversation", "rp.retry": "Try again", "rp.finish": "Finish the scene", "rp.log": "The conversation so far", "rp.translate": "Translate", "rp.translate.hide": "Hide translation", "rp.play": "Play this line", "rp.listen": "Listen", "rp.hidden": "Listen to the clip: the words appear after your answer.", "rp.said": "{name} says:", "rp.you": "You", "rp.again": "{name} says it again, slowly:", "rp.again.second": "{name} tries once more, even more slowly:", "rp.again.plain": "Sorry? Once more, slowly.", "rp.model": "You could say:", "rp.model.shown": "The conversation goes on. Your words are saved for review.", "rp.effect.right": "{name} understands you and the conversation goes on.", "rp.effect.wrong": "{name} did not quite understand. The line comes again.", "rp.effect.shown": "{name} shows you what to say and the conversation goes on.", "rp.effect.grew": 'The plant for "{word}" grew: {from} to {to}.', "rp.effect.planted": 'The plant for "{word}" is in the garden.', "rp.effect.wilted": 'The plant for "{word}" wilts. Water it again soon.', "rp.effect.same": 'The plant for "{word}" stays a {stage}.', "rp.hud.last": "The last thing said to you", "rp.hud.plant": "The plant you are watering", "rp.done.title": "Scene finished", "rp.done.finale": "Finale finished", "rp.done.accuracy": "{n}% right first time", "rp.done.words": "New words in your garden", "rp.done.nowords": "No new words this time.", "rp.done.unlocked": "Opened: {scenes}", "rp.done.need": "Two stars open the next scene. Play this one again.", "rp.done.boss.fail": "Not yet: one star beats the finale. Play it again.", "rp.done.replay": "Play the scene again", "rp.done.garden": "Visit the garden", "rp.done.finish": "Finish the course", "rp.garden.title": "Vocabulary garden", "rp.garden.sub": "One plant for every word you have met. Plants grow when you remember the word and wilt when you forget it.", "rp.garden.stats": "{seed} seeds, {sprout} sprouts, {bud} buds, {bloom} in bloom, {wilted} wilted", "rp.garden.empty": "The garden is empty. Finish a scene and its words are planted here.", "rp.garden.packet": "{n} more words are still in the seed packet. Finish scenes to plant them.", "rp.garden.met": 'Heard in the scene "{scene}", where {name} said: "{line}"', "rp.garden.used": 'You used it in the scene "{scene}", after {name} said: "{line}"', "rp.garden.next": "Next watering: {when}", "rp.garden.next.due": "now", "rp.garden.next.days": "in {n} days", "rp.garden.next.day": "tomorrow", "rp.water": "Water the plants ({n})", "rp.water.none": "Nothing to water right now", "rp.water.done": "Watered: {right} of {n} remembered. Come back when the plants are thirsty again.", "rp.water.empty": "All the plants are happy for now.", "rp.garden.back": "Back to the scenes", "rp.stage.seed": "seed", "rp.stage.sprout": "sprout", "rp.stage.bud": "bud", "rp.stage.bloom": "bloom", "rp.stage.wilted": "wilted", "rp.stage.label": "Stage: {stage}", "rp.plant.alt": "A potted plant: {stage}", "rp.end.title": "You can hold a conversation!", "rp.end.sub": "You mastered every scene and finished the finale. Keep watering the garden.", "rp.end.words": "{n} words in the garden, {bloom} in bloom" }, hr: { "rp.tagline": "Razglednica iz kafića na Jadranu", "rp.title.level": "Razina {level}", "rp.title.about": "Prođite tri razgovora, a zatim održavajte riječi na životu u svom vrtu.", "rp.scenes.title": "Razgovori", "rp.scenes.sub": "Odaberite scenu. Odgovarajte na jeziku koji učite: birajte ili tipkajte.", "rp.scenes.stars": "{n} od {total} zvjezdica", "rp.scenes.locked": "Prvo završite prethodne scene (2 zvjezdice).", "rp.scenes.finale": "Finale miješa sve što ste naučili.", "rp.scenes.finale.locked": "Otvorite svaku scenu s 2 zvjezdice za finale.", "rp.scenes.garden": "Vrt riječi", "rp.scene.turns": "{n} odgovora", "rp.scene.open": "Igraj", "rp.scene.back": "Natrag na scene", "rp.scene.setting": "Mjesto radnje", "rp.next": "Sljedeća replika", "rp.turn": "Vi ste na redu", "rp.lead": "Vi ste na redu: {i} od {n}", "rp.water.lead": "Zalijevanje {i} od {n}", "rp.garden.planted": "{n} od {total} riječi posađeno", "rp.cont": "Nastavite razgovor", "rp.retry": "Pokušajte ponovno", "rp.finish": "Završi scenu", "rp.log": "Razgovor do sada", "rp.translate": "Prijevod", "rp.translate.hide": "Sakrij prijevod", "rp.play": "Poslušaj repliku", "rp.listen": "Slušajte", "rp.hidden": "Poslušajte snimku: riječi se pojave nakon vašeg odgovora.", "rp.said": "{name} kaže:", "rp.you": "Vi", "rp.again": "{name} ponavlja polako:", "rp.again.second": "{name} pokušava još jednom, još sporije:", "rp.again.plain": "Molim? Još jednom, polako.", "rp.model": "Mogli biste reći:", "rp.model.shown": "Razgovor ide dalje. Vaše riječi su spremljene za ponavljanje.", "rp.effect.right": "{name} vas razumije i razgovor ide dalje.", "rp.effect.wrong": "{name} vas nije baš razumio. Replika dolazi ponovno.", "rp.effect.shown": "{name} vam pokazuje što reći i razgovor ide dalje.", "rp.effect.grew": 'Biljka za "{word}" je narasla: {from} u {to}.', "rp.effect.planted": 'Biljka za "{word}" je u vrtu.', "rp.effect.wilted": 'Biljka za "{word}" vene. Uskoro je zalijte ponovno.', "rp.effect.same": 'Biljka za "{word}" ostaje: {stage}.', "rp.hud.last": "Zadnje što vam je rečeno", "rp.hud.plant": "Biljka koju zalijevate", "rp.done.title": "Scena je gotova", "rp.done.finale": "Finale je gotovo", "rp.done.accuracy": "{n}% točno iz prvog pokušaja", "rp.done.words": "Nove riječi u vašem vrtu", "rp.done.nowords": "Ovaj put nema novih riječi.", "rp.done.unlocked": "Otvoreno: {scenes}", "rp.done.need": "Dvije zvjezdice otvaraju sljedeću scenu. Odigrajte ovu ponovno.", "rp.done.boss.fail": "Još ne: jedna zvjezdica pobjeđuje finale. Odigrajte ga ponovno.", "rp.done.replay": "Odigraj scenu ponovno", "rp.done.garden": "Posjeti vrt", "rp.done.finish": "Završi tečaj", "rp.garden.title": "Vrt riječi", "rp.garden.sub": "Jedna biljka za svaku riječ koju ste upoznali. Biljke rastu kad se sjetite riječi, a venu kad je zaboravite.", "rp.garden.stats": "{seed} sjemenki, {sprout} klica, {bud} pupova, {bloom} u cvatu, {wilted} uvelih", "rp.garden.empty": "Vrt je prazan. Završite scenu i njezine riječi bit će posađene ovdje.", "rp.garden.packet": "Još {n} riječi je u vrećici sjemenki. Završite scene da ih posadite.", "rp.garden.met": 'Čuli ste je u sceni "{scene}", gdje je {name} rekao: "{line}"', "rp.garden.used": 'Upotrijebili ste je u sceni "{scene}", nakon što je {name} rekao: "{line}"', "rp.garden.next": "Sljedeće zalijevanje: {when}", "rp.garden.next.due": "sada", "rp.garden.next.days": "za {n} dana", "rp.garden.next.day": "sutra", "rp.water": "Zalij biljke ({n})", "rp.water.none": "Trenutno nema što zalijevati", "rp.water.done": "Zalijevanje: sjetili ste se {right} od {n}. Vratite se kad biljke ponovno ožedne.", "rp.water.empty": "Sve su biljke za sada zadovoljne.", "rp.garden.back": "Natrag na scene", "rp.stage.seed": "sjemenka", "rp.stage.sprout": "klica", "rp.stage.bud": "pup", "rp.stage.bloom": "cvijet", "rp.stage.wilted": "uvela", "rp.stage.label": "Stadij: {stage}", "rp.plant.alt": "Biljka u loncu: {stage}", "rp.end.title": "Znate voditi razgovor!", "rp.end.sub": "Savladali ste svaku scenu i završili finale. Nastavite zalijevati vrt.", "rp.end.words": "{n} riječi u vrtu, {bloom} u cvatu" }, de: { "rp.tagline": "Eine Postkarte aus einem Café an der Adria", "rp.title.level": "Stufe {level}", "rp.title.about": "Meistere drei Gespräche und halte dann die Wörter in deinem Garten lebendig.", "rp.scenes.title": "Gespräche", "rp.scenes.sub": "Wähle eine Szene. Antworte in der Sprache, die du lernst: auswählen oder tippen.", "rp.scenes.stars": "{n} von {total} Sternen", "rp.scenes.locked": "Beende zuerst die früheren Szenen (2 Sterne).", "rp.scenes.finale": "Das Finale mischt alles, was du gelernt hast.", "rp.scenes.finale.locked": "Öffne jede Szene mit 2 Sternen, um das Finale zu spielen.", "rp.scenes.garden": "Vokabelgarten", "rp.scene.turns": "{n} Runden", "rp.scene.open": "Spielen", "rp.scene.back": "Zurück zu den Szenen", "rp.scene.setting": "Schauplatz", "rp.next": "Nächste Zeile", "rp.turn": "Du bist dran", "rp.lead": "Du bist dran, {i} von {n}", "rp.water.lead": "Gießen {i} von {n}", "rp.garden.planted": "{n} von {total} Wörtern gepflanzt", "rp.cont": "Das Gespräch fortsetzen", "rp.retry": "Noch einmal versuchen", "rp.finish": "Die Szene beenden", "rp.log": "Das bisherige Gespräch", "rp.translate": "Übersetzen", "rp.translate.hide": "Übersetzung ausblenden", "rp.play": "Diese Zeile abspielen", "rp.listen": "Zuhören", "rp.hidden": "Höre dir den Clip an: Die Worte erscheinen nach deiner Antwort.", "rp.said": "{name} sagt:", "rp.you": "Du", "rp.again": "{name} sagt es noch einmal, langsam:", "rp.again.second": "{name} versucht es noch einmal, noch langsamer:", "rp.again.plain": "Wie bitte? Noch einmal, langsam.", "rp.model": "Du könntest sagen:", "rp.model.shown": "Das Gespräch geht weiter. Deine Worte sind zum Wiederholen gespeichert.", "rp.effect.right": "{name} versteht dich und das Gespräch geht weiter.", "rp.effect.wrong": "{name} hat dich nicht ganz verstanden. Die Zeile kommt noch einmal.", "rp.effect.shown": "{name} zeigt dir, was du sagen kannst, und das Gespräch geht weiter.", "rp.effect.grew": "Die Pflanze für „{word}“ ist gewachsen: {from} zu {to}.", "rp.effect.planted": "Die Pflanze für „{word}“ steht im Garten.", "rp.effect.wilted": "Die Pflanze für „{word}“ welkt. Gieße sie bald wieder.", "rp.effect.same": "Die Pflanze für „{word}“ bleibt: {stage}.", "rp.hud.last": "Das Letzte, was zu dir gesagt wurde", "rp.hud.plant": "Die Pflanze, die du gießt", "rp.done.title": "Szene beendet", "rp.done.finale": "Finale beendet", "rp.done.accuracy": "{n} % gleich beim ersten Mal richtig", "rp.done.words": "Neue Wörter in deinem Garten", "rp.done.nowords": "Diesmal keine neuen Wörter.", "rp.done.unlocked": "Geöffnet: {scenes}", "rp.done.need": "Zwei Sterne öffnen die nächste Szene. Spiele diese noch einmal.", "rp.done.boss.fail": "Noch nicht: Ein Stern besiegt das Finale. Spiele es noch einmal.", "rp.done.replay": "Die Szene noch einmal spielen", "rp.done.garden": "Den Garten besuchen", "rp.done.finish": "Den Kurs abschließen", "rp.garden.title": "Vokabelgarten", "rp.garden.sub": "Eine Pflanze für jedes Wort, dem du begegnet bist. Pflanzen wachsen, wenn du dich an das Wort erinnerst, und welken, wenn du es vergisst.", "rp.garden.stats": "{seed} Samen, {sprout} Sprossen, {bud} Knospen, {bloom} in Blüte, {wilted} welk", "rp.garden.empty": "Der Garten ist leer. Beende eine Szene, und ihre Wörter werden hier gepflanzt.", "rp.garden.packet": "{n} weitere Wörter sind noch in der Samentüte. Beende Szenen, um sie zu pflanzen.", "rp.garden.met": "Gehört in der Szene „{scene}“, in der {name} sagte: „{line}“", "rp.garden.used": "Verwendet in der Szene „{scene}“, nachdem {name} gesagt hatte: „{line}“", "rp.garden.next": "Nächstes Gießen: {when}", "rp.garden.next.due": "jetzt", "rp.garden.next.days": "in {n} Tagen", "rp.garden.next.day": "morgen", "rp.water": "Die Pflanzen gießen ({n})", "rp.water.none": "Im Moment gibt es nichts zu gießen", "rp.water.done": "Gegossen: {right} von {n} erinnert. Komm wieder, wenn die Pflanzen wieder durstig sind.", "rp.water.empty": "Alle Pflanzen sind vorerst zufrieden.", "rp.garden.back": "Zurück zu den Szenen", "rp.stage.seed": "Samen", "rp.stage.sprout": "Spross", "rp.stage.bud": "Knospe", "rp.stage.bloom": "Blüte", "rp.stage.wilted": "welk", "rp.stage.label": "Stufe: {stage}", "rp.plant.alt": "Eine Topfpflanze: {stage}", "rp.end.title": "Du kannst ein Gespräch führen!", "rp.end.sub": "Du hast jede Szene gemeistert und das Finale geschafft. Gieße den Garten weiter.", "rp.end.words": "{n} Wörter im Garten, {bloom} in Blüte" } }, cu = "roleplay", N$ = "postcard", lu = 8;
  class P$ {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "section");
      __publicField(this, "playing", null);
      __publicField(this, "water", null);
      __publicField(this, "finishedScene", null);
      __publicField(this, "audio", null);
      __publicField(this, "titleState", es());
      var _a3;
      this.host = e, this.session = new Ps(e, { shellId: cu, theme: N$, strings: O$ }), this.section = (_a3 = this.session.section()) != null ? _a3 : $l.parse({});
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
      return j$({ section: this.section, pack: e.pack, mastered: (s) => e.isMastered(s), unitStars: (s) => e.unitStars(s), bossStars: e.bossStars() });
    }
    plants() {
      const e = this.session;
      return E$({ section: this.section, pack: e.pack, cards: e.progress.cards, queue: e.progress.queue, doneUnits: this.doneUnits(), now: Date.now() });
    }
    wordsOfItem(e) {
      return this.section.garden.filter((s) => s.item === e);
    }
    stageOfItem(e) {
      const s = this.session;
      return au(s.progress.cards[e], s.progress.queue.includes(e));
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
      return (_c2 = (_a3 = qi(e)) == null ? void 0 : _a3.speaker) != null ? _c2 : (_b3 = this.section.speakers.find((s) => !s.learner)) == null ? void 0 : _b3.id;
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
      const n = this.session, r = this.s, i = !s.hidden && e.translation && n.text.hasText(e.translation) ? n.text.t(e.translation) : null, o = i ? u("p", { class: "pc-translation", testid: "translation-".concat(e.id), hidden: true, lang: n.lang }, i) : null, a = i ? nu("translate-".concat(e.id), r("rp.translate"), () => {
        const d = (o == null ? void 0 : o.hidden) === true;
        o && (o.hidden = !d), a == null ? void 0 : a.setAttribute("aria-expanded", String(d)), a && (a.textContent = r(d ? "rp.translate.hide" : "rp.translate"));
      }, { "aria-expanded": "false" }) : null, c = this.audioUrl(e), l = c && !s.noPlay ? nu("line-play-".concat(e.id), "▶ ".concat(r("rp.play")), () => this.playUrl(c)) : null;
      return Ki({ testid: s.testid, kind: s.kind, speaker: this.who(e.say), text: s.hidden ? null : n.text.t(e.text), ...this.targetLang ? { lang: this.targetLang } : {}, hidden: r("rp.hidden"), actions: [a, l], extra: o });
    }
    logBubbles(e, s) {
      const n = this.session, r = this.s, i = Gi(e, s, (c) => !!n.data.assets[c]), o = [];
      let a;
      for (const c of s.log) if (c.kind === "say") {
        const l = Se(e, c.lineId);
        if (!l || !Le(l)) continue;
        a = l, o.push(this.sayBubble(l, { testid: "line-".concat(l.id), kind: "say", hidden: i.has(l.id) }));
      } else if (c.kind === "you") {
        if (c.text === null) continue;
        o.push(Ki({ testid: "you-".concat(c.lineId), kind: "you", speaker: this.learner(), text: c.text, ...this.targetLang ? { lang: this.targetLang } : {}, outcome: c.outcome, lead: c.outcome === "shown" ? r("rp.model") : null, note: c.outcome === "shown" ? r("rp.model.shown") : null }));
      } else o.push(this.helpBubble(e, c, a, i));
      return o;
    }
    helpBubble(e, s, n, r) {
      const i = this.session, o = this.s, a = Se(e, s.lineId), c = a && Ve(a) ? a.help : void 0, l = c && i.text.hasText(c) ? i.text.t(c) : null, d = this.who(s.speaker), h = !!n && !r.has(n.id);
      return Ki({ testid: "help-".concat(s.lineId, "-").concat(s.attempt), kind: "help", speaker: d, slow: true, lead: n ? o(s.attempt >= 2 ? "rp.again.second" : "rp.again", { name: d.name }) : o("rp.again.plain"), text: n && h ? i.text.t(n.text) : null, ...this.targetLang ? { lang: this.targetLang } : {}, hidden: o("rp.hidden"), note: l });
    }
    sceneView() {
      var _a3;
      const e = this.playing;
      if (!e) return null;
      const s = Pt(e.scene, e.st);
      return { scene: e.scene.id, unit: (_a3 = e.scene.unit) != null ? _a3 : null, finale: e.finale, step: s.type, line: s.type === "done" ? null : s.line.id, retry: s.type === "turn" ? s.retry : false, tries: s.type === "turn" ? s.tries : 0, said: e.st.log.filter((n) => n.kind === "say").length, turns: Rt(e.scene), answered: e.st.turns.length, helped: e.st.log.filter((n) => n.kind === "help").length, shown: e.st.turns.filter((n) => n.shown).length, hidden: [...Gi(e.scene, e.st, (n) => !!this.session.data.assets[n])] };
    }
    gardenView(e) {
      const s = this.plants();
      return { plants: s.filter((n) => n.planted).map((n) => ({ id: n.word.id, item: n.word.item, stage: n.stage, due: n.due })), counts: Hi(s), packet: s.filter((n) => !n.planted).length, pool: Wi(s).length, result: e };
    }
    title() {
      var _a3;
      const e = this.session;
      e.finished = false, this.playing = null, this.water = null;
      const s = e.pack.cefr;
      e.render("title", Rs(e, { onStart: () => this.scenes() }, () => this.title(), this.titleState), { view: { cefr: s != null ? s : null, target: (_a3 = this.targetLang) != null ? _a3 : null, scenes: this.section.scenes.length } });
    }
    scenes() {
      const e = this.session, s = this.s;
      e.finished = false, this.playing = null, this.water = null, this.stopAudio();
      const n = this.board(), r = e.pack.units.length, i = e.totalStars(), o = n.find((h) => h.finale), a = o ? e.bossStars() >= 1 : e.allMastered(), c = this.plants().filter((h) => h.planted).length, l = (h) => {
        var _a3;
        const p = h.scene, f = (_a3 = p.cefr) != null ? _a3 : e.pack.cefr, m = h.needs.map((k) => e.unitTitle(k)).join(", ");
        return u("li", { class: "pc-scene-item" }, u("button", { type: "button", class: "pc-scene ".concat(h.locked ? "is-locked" : "is-open").concat(h.finale ? " is-finale" : "").concat(h.stars >= 2 ? " is-mastered" : ""), testid: "scene-".concat(p.id), "data-stars": String(h.stars), "data-locked": String(h.locked), "data-finale": String(h.finale), ...h.unit ? { "data-unit": h.unit } : {}, ...h.locked ? { disabled: true } : {}, onclick: () => this.openScene(h) }, u("span", { class: "pc-scene-kicker" }, h.finale ? s("rp.scenes.finale") : e.unitTitle(h.unit)), u("span", { class: "pc-scene-name" }, e.t(p.title)), p.setting ? u("span", { class: "pc-scene-setting" }, e.t(p.setting)) : null, u("span", { class: "pc-scene-meta" }, f ? su(f) : null, u("span", {}, s("rp.scene.turns", { n: h.turns })), h.locked ? u("span", { class: "pc-lock" }, "".concat(h.finale ? s("rp.scenes.finale.locked") : s("rp.scenes.locked")).concat(m ? " (".concat(m, ")") : "")) : null), e.stars(h.stars)));
      }, d = u("section", { class: "scenes-screen pc-scenes" }, u("div", { class: "topbar" }, I("menu", "‹ ".concat(e.ui("menu")), () => this.title(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "scenes-stars" }, s("rp.scenes.stars", { n: i, total: r * 3 })), I("to-garden", "🌱 ".concat(s("rp.scenes.garden"), " (").concat(c, ")"), () => this.garden(), { class: "btn btn-small" })), u("h1", { class: "screen-title", tabindex: "-1", testid: "scenes-title" }, s("rp.scenes.title")), u("p", { class: "subject" }, s("rp.scenes.sub")), n.length === 0 ? u("p", { class: "message message-bad", testid: "scenes-empty" }, s("rp.garden.empty")) : null, u("ol", { class: "pc-scene-list", testid: "scene-list" }, n.map(l)), a ? u("div", { class: "actions actions-center" }, I("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" })) : null);
      e.render("scenes", d, { view: { scenes: n.map((h) => {
        var _a3;
        return { id: h.scene.id, unit: (_a3 = h.unit) != null ? _a3 : null, finale: h.finale, locked: h.locked, stars: h.stars };
      }), finaleOpen: o ? !o.locked : false, crowned: a, planted: c } });
    }
    openScene(e) {
      if (e.locked) return;
      const s = this.playing;
      this.playing = s && s.scene.id === e.scene.id ? s : { scene: e.scene, st: iu(e.scene), finale: e.finale }, this.scene();
    }
    scene() {
      var _a3, _b3;
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const { scene: r, st: i } = n, o = Pt(r, i), a = this.logBubbles(r, i), c = (_a3 = r.cefr) != null ? _a3 : e.pack.cefr, l = o.type === "say" ? I("scene-next", s("rp.next"), () => this.nextLine(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : o.type === "turn" ? I("scene-reply", o.retry ? s("rp.retry") : s("rp.turn"), () => this.askTurn(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : I("scene-finish", s("rp.finish"), () => this.sceneDone(), { class: "btn btn-primary btn-big", "data-autofocus": "" }), d = u("section", { class: "scene-screen pc-scene-screen" }, u("div", { class: "topbar" }, I("to-scenes", "‹ ".concat(s("rp.scene.back")), () => {
        this.stopAudio(), this.scenes();
      }, { class: "btn btn-small btn-ghost" }), c ? su(c) : null), u("h1", { class: "screen-title pc-scene-title", tabindex: "-1", testid: "scene-title" }, e.t(r.title)), r.setting ? u("p", { class: "pc-setting", testid: "scene-setting" }, u("b", {}, "".concat(s("rp.scene.setting"), ": ")), e.t(r.setting)) : null, u("h2", { class: "sr-only" }, s("rp.log")), a.length > 0 ? u("ol", { class: "pc-log", testid: "scene-log" }, a) : null, u("div", { class: "pc-actionbar actions actions-center" }, l));
      e.render("scene", d, { ...r.unit ? { unitId: r.unit } : {}, view: (_b3 = this.sceneView()) != null ? _b3 : {} }, { focus: false });
      const h = i.log[i.log.length - 1];
      if (h && h.kind === "say") {
        const p = Se(r, h.lineId);
        p && Le(p) && e.live("".concat(this.who(p.say).name, ": ").concat(e.text.t(p.text)));
      }
      l.focus({ preventScroll: !(a.length > 0) }), a.length === 0 && window.scrollTo(0, 0);
    }
    nextLine() {
      const e = this.playing;
      e && (e.st = w$(e.scene, e.st), this.scene());
    }
    askTurn() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const r = n.scene, i = Pt(r, n.st);
      if (i.type !== "turn") return this.scene();
      const o = i.line, a = e.item(o.reply);
      if (!e.canAsk(a)) return n.st = S$(r, n.st), this.afterTurn();
      const c = this.stageOfItem(a.id), l = this.helperOf(n.st), d = this.who(l).name, h = qi(n.st), p = h ? Se(r, h.lineId) : void 0, f = !!p && Le(p) && Gi(r, n.st, (v) => !!e.data.assets[v]).has(p.id);
      let m = null;
      p && Le(p) && (m = this.sayBubble(p, { testid: "hud-last", kind: "hud", hidden: f, noPlay: f && a.kind === "listening" }));
      const k = o.help && e.text.hasText(o.help) ? e.text.t(o.help) : null, g = u("div", { class: "pc-hud" }, u("p", { class: "pc-hud-label" }, s(p ? "rp.hud.last" : "rp.scene.setting")), m ? u("ul", { class: "pc-log pc-log-hud" }, m) : u("p", { class: "pc-setting", testid: "hud-setting" }, r.setting ? e.t(r.setting) : e.t(r.title)), i.retry && k ? u("p", { class: "pc-hud-help", testid: "hud-help" }, u("b", {}, "".concat(s(i.tries >= 2 ? "rp.again.second" : "rp.again", { name: d }), " ")), k) : null), b = n.st.turns.length + (i.retry ? 0 : 1);
      lt(e, { item: a, context: "line", retry: i.retry, hud: g, lead: u("span", {}, s("rp.lead", { i: Math.min(b, Rt(r)), n: Rt(r) })), ...r.unit && !n.finale ? { unitId: r.unit } : {}, roundKind: n.finale ? "boss" : "unit", roundSize: Rt(r), index: Math.max(0, n.st.turns.length - (i.retry ? 1 : 0)), view: () => {
        var _a3;
        return (_a3 = this.sceneView()) != null ? _a3 : {};
      }, leaveLabel: s("rp.scene.back"), onLeave: () => this.scene(), onAnswered: (v) => {
        const $ = _$(a, o, e.text);
        if (n.st = y$(r, n.st, { correct: v.result.correct, score: v.result.score, text: $ }), f && p && Le(p) && m) {
          const S = m.querySelector(".pc-text");
          S && (S.textContent = e.text.t(p.text), S.classList.remove("pc-hidden-text"), this.targetLang && S.setAttribute("lang", this.targetLang));
        }
      }, effect: (v) => {
        const $ = n.st, S = !v.result.correct, _ = S ? $.retry ? s("rp.effect.wrong", { name: d }) : s("rp.effect.shown", { name: d }) : s("rp.effect.right", { name: d }), w = this.plantNote(a.id, c);
        return { text: w ? "".concat(_, " ").concat(w) : _, tone: S ? $.retry ? "bad" : "info" : "good" };
      }, nextLabel: (v) => v.result.correct || !n.st.retry ? s("rp.cont") : s("rp.retry"), onNext: () => this.afterTurn() });
    }
    afterTurn() {
      const e = this.playing;
      if (!e) return this.scenes();
      if ($$(e.scene, e.st)) return this.sceneDone();
      this.scene();
    }
    plantNote(e, s) {
      const n = this.wordsOfItem(e)[0];
      if (!n) return "";
      const r = this.s, i = this.session.text.t(n.text), o = this.stageOfItem(e), a = A$(s, o);
      return a === "wilted" ? r("rp.effect.wilted", { word: i }) : a === "grew" ? s === "seed" ? r("rp.effect.planted", { word: i }) : r("rp.effect.grew", { word: i, from: this.stageName(s), to: this.stageName(o) }) : r("rp.effect.same", { word: i, stage: this.stageName(o) });
    }
    sceneDone() {
      const e = this.session, s = this.s, n = this.playing;
      if (!n) return this.scenes();
      const r = n.scene, i = this.board(), o = z$(n.st), a = n.finale ? e.recordUnit({ boss: true }, o) : r.unit ? e.recordUnit({ unitId: r.unit }, o) : { stars: 0, unlocked: [] }, c = a.stars;
      this.markDone(r.id), e.playCue(n.finale ? "boss" : "unit-complete");
      const l = x$(i, this.board()).map((g) => {
        var _a3, _b3;
        return e.t(r.id === g ? r.title : (_b3 = (_a3 = this.section.scenes.find((b) => b.id === g)) == null ? void 0 : _a3.title) != null ? _b3 : g);
      }), d = new Set(n.st.turns.map((g) => g.itemId)), h = this.plants().filter((g) => d.has(g.word.item)), p = Math.round(o * 100), f = n.finale ? c >= 1 : c >= 2;
      this.stopAudio();
      const m = u("section", { class: "scenedone-screen pc-done ".concat(f ? "is-passed" : "is-again") }, u("p", { class: "eyebrow" }, e.t(r.title)), u("h1", { class: "screen-title", tabindex: "-1", testid: "done-title" }, n.finale ? s("rp.done.finale") : s("rp.done.title")), e.stars(c, "scene-stars"), u("p", { class: "big-number", testid: "scene-accuracy" }, s("rp.done.accuracy", { n: p })), u("div", { class: "pc-words" }, u("h2", {}, s("rp.done.words")), h.length > 0 ? u("ul", { class: "pc-word-list", testid: "scene-words" }, h.map((g) => u("li", { class: "pc-word stage-".concat(g.stage), testid: "word-".concat(g.word.id), "data-stage": g.stage }, u("b", { class: "pc-word-text", ...this.targetLang ? { lang: this.targetLang } : {} }, e.text.t(g.word.text)), u("span", { class: "pc-word-gloss" }, e.t(g.word.gloss)), u("span", { class: "pc-stage-chip" }, this.stageName(g.stage))))) : u("p", { class: "pc-none" }, s("rp.done.nowords"))), l.length > 0 ? u("p", { class: "message message-ok", testid: "scene-unlocked" }, s("rp.done.unlocked", { scenes: l.join(", ") })) : null, f ? null : u("p", { class: "message message-bad", testid: n.finale ? "finale-retry" : "scene-need" }, n.finale ? s("rp.done.boss.fail") : s("rp.done.need")), u("div", { class: "actions actions-center" }, n.finale && f ? I("finish", s("rp.done.finish"), () => this.end(), { class: "btn btn-primary btn-big" }) : null, I("to-scenes", s("rp.scene.back"), () => this.scenes(), { class: f && !n.finale ? "btn btn-primary btn-big" : "btn btn-big" }), c < 3 ? I("replay-scene", s("rp.done.replay"), () => this.replay(), { class: f ? "btn btn-big" : "btn btn-primary btn-big" }) : null, I("to-garden", s("rp.done.garden"), () => this.garden(), { class: "btn btn-big" }))), k = { scene: r.id, finale: n.finale, stars: c, accuracy: p, passed: f, unlocked: a.unlocked, opened: l, words: h.map((g) => ({ id: g.word.id, stage: g.stage })), helped: n.st.log.filter((g) => g.kind === "help").length, shown: n.st.turns.filter((g) => g.shown).length };
      this.finishedScene = n, e.render("scene-done", m, { ...r.unit && !n.finale ? { unitId: r.unit } : {}, view: k }), this.playing = null;
    }
    replay() {
      const e = this.finishedScene;
      if (!e) return this.scenes();
      this.playing = { scene: e.scene, st: iu(e.scene), finale: e.finale }, this.scene();
    }
    garden(e = null) {
      const s = this.session, n = this.s;
      this.playing = null, this.water = null, this.stopAudio();
      const r = this.plants(), i = r.filter((m) => m.planted), o = Hi(r), a = Wi(r), c = new Set(this.doneScenes()), l = Date.now(), d = (m) => s.text.t(m), h = (m) => {
        const k = M$(this.section, m.word, d, c), g = k ? this.section.scenes.find((S) => S.id === k.sceneId) : void 0, b = k && g ? n(k.how === "heard" ? "rp.garden.met" : "rp.garden.used", { scene: s.t(g.title), name: this.who(k.speaker).name, line: d(k.text) }) : null, v = T$(m, l), $ = v === null || v === 0 ? n("rp.garden.next.due") : v === 1 ? n("rp.garden.next.day") : n("rp.garden.next.days", { n: v });
        return u("li", { class: "pc-plant-card stage-".concat(m.stage).concat(m.due ? " is-due" : ""), testid: "plant-".concat(m.word.id), "data-stage": m.stage, "data-due": String(m.due), "data-item": m.word.item }, u("div", { class: "pc-plant-pic" }, ru(m.stage)), u("div", { class: "pc-plant-body" }, u("p", { class: "pc-plant-word", ...this.targetLang ? { lang: this.targetLang } : {} }, d(m.word.text)), u("p", { class: "pc-plant-gloss" }, s.t(m.word.gloss)), u("p", { class: "pc-plant-stage" }, u("span", { class: "pc-stage-chip" }, this.stageName(m.stage)), " ", u("span", { class: "sr-only" }, n("rp.stage.label", { stage: this.stageName(m.stage) }))), b ? u("p", { class: "pc-plant-met" }, b) : null, u("p", { class: "pc-plant-next" }, n("rp.garden.next", { when: $ }))));
      }, p = r.length - i.length, f = u("section", { class: "garden-screen pc-garden" }, u("div", { class: "topbar" }, I("to-scenes", "‹ ".concat(n("rp.garden.back")), () => this.scenes(), { class: "btn btn-small btn-ghost" }), u("span", { class: "topbar-stars", testid: "garden-planted" }, n("rp.garden.planted", { n: i.length, total: r.length }))), u("h1", { class: "screen-title", tabindex: "-1", testid: "garden-title" }, n("rp.garden.title")), u("p", { class: "subject" }, n("rp.garden.sub")), i.length > 0 ? u("p", { class: "pc-garden-stats", testid: "garden-stats" }, n("rp.garden.stats", o)) : u("p", { class: "message", testid: "garden-empty" }, n("rp.garden.empty")), e ? u("p", { class: "message message-ok", role: "status", testid: "water-result" }, n("rp.water.done", { right: e.right, n: e.n })) : null, u("div", { class: "actions actions-center" }, a.length > 0 ? I("water", "💧 ".concat(n("rp.water", { n: Math.min(a.length, lu) })), () => this.startWater(), { class: "btn btn-primary btn-big", "data-autofocus": "" }) : u("p", { class: "message", testid: "water-empty" }, i.length > 0 ? n("rp.water.empty") : n("rp.water.none"))), i.length > 0 ? u("ul", { class: "pc-plant-list", testid: "plant-list" }, i.map(h)) : null, p > 0 ? u("p", { class: "pc-packet", testid: "garden-packet" }, n("rp.garden.packet", { n: p })) : null);
      s.render("garden", f, { view: this.gardenView(e) });
    }
    startWater() {
      const e = this.session, s = Wi(this.plants());
      if (s.length === 0) return this.garden();
      const n = Math.min(s.length, lu);
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
      const i = e.item(r.id), o = this.stageOfItem(i.id), a = this.wordsOfItem(i.id)[0], c = u("div", { class: "pc-hud pc-hud-plant" }, u("div", { class: "pc-hud-pot", "aria-hidden": "true" }, ru(o)), u("div", { class: "pc-hud-text" }, u("p", { class: "pc-hud-label" }, s("rp.hud.plant")), u("p", { class: "pc-hud-stage", testid: "hud-stage" }, this.stageName(o))));
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
      const n = this.plants(), r = Hi(n);
      e.render("end", Ds(e, { title: s("rp.end.title"), sub: s("rp.end.sub"), stats: u("p", { class: "subject", testid: "end-words" }, s("rp.end.words", { n: n.filter((i) => i.planted).length, bloom: r.bloom })), onAgain: () => this.scenes(), onTitle: () => this.title() }), { view: { words: n.filter((i) => i.planted).length, bloom: r.bloom, scenes: this.board().length } });
    }
  }
  const du = /* @__PURE__ */ (() => {
    let t = null;
    return { id: cu, mount(e) {
      t = new P$(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })(), Ie = 100, R$ = 100, Vi = 25, D$ = 30, L$ = 0.25, C$ = 2, uu = (t) => Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0, Yi = (t) => Math.min(C$, 1 + L$ * Math.max(0, t)), Z$ = (t, e, s = R$) => Math.round(s * uu(t) * Yi(e)), U$ = (t, e, s = Vi) => t ? 0 : Math.max(1, Math.round(s * (1 - uu(e)))), F$ = (t, e = Vi, s = Ie, n = Ie) => ({ foeHp: t, foeMax: t, hp: s, maxHp: n, streak: 0, turns: 0, strike: e });
  function B$(t, e) {
    const s = Yi(t.streak), n = Z$(e.score, t.streak), r = Math.max(0, t.foeHp - n), i = r === 0, o = i ? 0 : U$(e.correct, e.score, t.strike), a = Math.max(0, t.hp - o);
    return { battle: { ...t, foeHp: r, hp: a, streak: e.correct ? t.streak + 1 : 0, turns: t.turns + 1 }, dealt: n, taken: o, multiplier: s, won: i, fainted: !i && a === 0 };
  }
  const K$ = (t, e) => e <= 0 ? 0 : Math.max(0, Math.min(100, Math.round(t / e * 100))), q$ = { k: "ink", w: "white", g: "gold", G: "gold-dark", s: "skin", S: "skin-shade", h: "hair", t: "tunic", T: "tunic-dark", c: "cape", r: "red", R: "red-dark", C: "cape-dark", n: "green", N: "green-dark", p: "purple", P: "purple-dark", o: "orange", y: "cyan", b: "brown", m: "stone", M: "stone-dark" }, Yn = ["................", ".....kkkkkk.....", "....khhhhhhk....", "...khhhhhhhhk...", "...khhssssshk...", "...kssksskssk...", "...kssssssssk...", "....kssSSssk....", "...kttttttttk...", "..ksttttttttsk..", "..kstttggtttsk..", "..ksttttttttsk..", "...kttttttttk...", "...kttkkkkttk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], hu = [".......kk.......", "......kppk......", ".....kppppk.....", "....kppgppPk....", "...kppppppppk...", "..kkkppppppkkk..", "...kssssssssk...", "...kskssskssk...", "...kwwwwwwwwk...", "..kpwwwwwwwwpk..", "..kpPwwwwwwPpk..", "..kspPppppPpsk..", "..kpppggggpppk..", "..kppppppppppk..", "..kpppppppppPk..", "..kkkkkkkkkkkk.."], pu = ["................", ".....kkkkkk.....", "....knnnnnnk....", "...knnnnnnnnk...", "...knnssssnnk...", "...knskssksnk...", "...kssssssssk...", "....kssSSssk....", "...kNnnnnnnNk...", "..ksNnnnnnnNsk..", "..ksNnggggnNsk..", "..kskNnnnnNksk..", "...kNnnnnnnNk...", "...kNnkkkknNk...", "...kbbk..kbbk...", "...kkkk..kkkk..."], Cs = [["................", "................", "................", ".....kkkkkk.....", "...kknnnnnnkk...", "..knnwwnnnnnnk..", "..knwnnnnnnnnk..", ".knnnnnnnnnnnnk.", ".knnkkknnkkknnk.", ".knnkwknnkwknnk.", ".knnkkknnkkknnk.", ".knnnnnkknnnnNk.", ".kNnnnnnnnnnNNk.", "..kNNNNNNNNNNk..", "...kkkkkkkkkk...", "................"], ["................", "..k..........k..", ".kPk........kPk.", ".kPPk.kkkk.kPPk.", "kPPPPkkppkkPPPPk", "kPPpPPkppkPPpPPk", "kPpPPPpppppPPPpk", ".kPPPPpwkkwpPPPk", "..kkPPppkkppPkk.", "....kkppppppkk..", ".....kwppppwk...", "......kppppk....", ".......kkkk.....", "................", "................", "................"], ["................", "..kk........kk..", "..kck......kck..", "..kcCkkkkkkCck..", "...kccccccccck..", "...kcwkcccwkck..", "...kccccccccck..", "....kcckkkcck...", "...kcccwwwccck..", "..kcCcccccccCck.", "..kccCcccccCcck.", "...kccccccccck..", "....kcccccccck..", "....kcckkkkcck..", "...kCCk....kCCk.", "...kkkk....kkkk."], ["................", ".....kkkkkk.....", "...kkwwwwwwkk...", "..kwwwwwwwwwwk..", "..kwwkkwwwkkwk..", ".kwwwkykwwkykwwk", ".kwwwkkwwwkkwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwkkwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwkwwwkwwwkwk.", ".kwkkkwkkkwkkkk.", "..k..kk..kk..k..", "................"]], Jn = ["..g.gg..gg.g....".slice(0, 16), "..gggggggggg....".slice(0, 16), "..kGggggggGk....".slice(0, 16), ".kkkmmmmmmmkk...".slice(0, 16), ".kmmmmmmmmmmmk..".slice(0, 16), ".kmmrrmmmrrmmk..".slice(0, 16), ".kmmrwmmmrwmmk..".slice(0, 16), ".kmmmmmkmmmmmk..".slice(0, 16), "..kmmkkkkkmmk...".slice(0, 16), ".kkmMmmmmmMmkk..".slice(0, 16), "kmmkMmmmmmMkmmk.".slice(0, 16), "kmmkmmmgmmmkmmk.".slice(0, 16), "kMMkmmmmmmmkMMk.".slice(0, 16), ".kkkmmMkMmmkkk..".slice(0, 16), "...kmmmkmmmk....".slice(0, 16), "...kkkkkkkkk....".slice(0, 16)], G$ = ["................", "................", "................", "................", "......kkkk......", ".....kggggk.....", "....kggkkggk....", "....kgkkkgGk....", ".......kgGk.....", "......kgGk......", "......kgGk......", "......kkk.......", "................", "......kggk......", "......kGGk......", "......kkkk......"], ee = 16, W$ = ["ink", "white", "gold", "gold-dark", "skin", "skin-shade", "hair", "tunic", "tunic-dark", "cape", "cape-dark", "red", "red-dark", "green", "green-dark", "purple", "purple-dark", "orange", "cyan", "brown", "stone", "stone-dark", "grass-1", "grass-2", "grass-3", "flower-1", "flower-2", "path-1", "path-2", "path-3", "water-1", "water-2", "water-3", "leaf-1", "leaf-2", "leaf-3", "trunk", "wall-1", "wall-2", "wall-3", "sky-1", "sky-2", "sky-3", "sky-4", "sky-5", "moon", "hill-1", "hill-2", "gate", "gate-dark", "glow"];
  function H$(t) {
    const e = document.createElement("span");
    e.setAttribute("aria-hidden", "true"), e.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:0;height:0", t.appendChild(e);
    const s = {};
    for (const n of W$) e.style.color = "", e.style.color = "var(--pixel-".concat(n, ")"), s[n] = getComputedStyle(e).color || "rgb(255 0 255)";
    return e.remove(), s;
  }
  const V$ = () => ({ sprites: {} });
  function Zs(t) {
    return t ? new Promise((e) => {
      const s = new Image();
      s.onload = () => e(s), s.onerror = () => e(null), s.src = t;
    }) : Promise.resolve(null);
  }
  function ne(t, e, s, n = 0) {
    let r = Math.imul(t + 1, 374761393) + Math.imul(e + 1, 668265263) + Math.imul(s + 1, 2246822519) + Math.imul(n + 1, 3266489917) | 0;
    return r = Math.imul(r ^ r >>> 13, 1274126177), r ^= r >>> 16, (r >>> 0) / 4294967296;
  }
  const q = (t, e, s, n, r, i) => {
    t.fillStyle = i, t.fillRect(e, s, n, r);
  };
  function $t(t, e, s, n, r, i = 1, o = false) {
    for (let a = 0; a < e.length; a++) {
      const c = e[a];
      for (let l = 0; l < c.length; l++) {
        const d = c[o ? c.length - 1 - l : l];
        if (d === ".") continue;
        const h = q$[d];
        h && (t.fillStyle = s[h], t.fillRect(n + l * i, r + a * i, i, i));
      }
    }
  }
  const fu = ["................", ".....kkkkkk.....", "...kkbbbbbbkk...", "..kbbbcbbbbbbk..", "..kbbcbbbbabbk..", ".kbbbbbbbbbbabk.", ".kbcbbbbabbbbbk.", ".kbbbbbbbbbbbak.", ".kbbbabbbbbcbak.", "..kbbbbbbbbbbk..", "..kkaabbbbaakk..", "....kkaaaakk....", "......kttk......", "......kttk......", ".....kkttkk.....", "................"], Y$ = { k: "ink", a: "leaf-1", b: "leaf-2", c: "leaf-3", t: "trunk" }, mu = (t, e, s, n, r) => {
    var _a3, _b3;
    return (_b3 = (_a3 = t[s + r]) == null ? void 0 : _a3[e + n]) != null ? _b3 : "#";
  }, J$ = (t) => t === "," || t === "@" || t === "N" || t === "B", Q$ = (t) => t === "~";
  function gu(t, e, s, n, r, i, o) {
    q(t, s, n, ee, ee, e["grass-1"]);
    for (let a = 0; a < 6; a++) {
      const c = Math.floor(ne(r, i, o.seed, a) * 14) + 1, l = Math.floor(ne(r, i, o.seed, a + 20) * 13) + 2;
      q(t, s + c, n + l, 1, 2, e["grass-2"]), q(t, s + c + 1, n + l - 1, 1, 1, e["grass-3"]);
    }
    for (let a = 0; a < 3; a++) q(t, s + Math.floor(ne(r, i, o.seed, a + 40) * 15), n + Math.floor(ne(r, i, o.seed, a + 50) * 15), 1, 1, e["grass-3"]);
    if (ne(r, i, o.seed, 60) < 0.1) {
      const a = Math.floor(ne(r, i, o.seed, 61) * 11) + 2, c = Math.floor(ne(r, i, o.seed, 62) * 11) + 2;
      q(t, s + a, n + c, 1, 1, e["flower-2"]), q(t, s + a - 1, n + c, 1, 1, e["flower-1"]), q(t, s + a + 1, n + c, 1, 1, e["flower-1"]), q(t, s + a, n + c - 1, 1, 1, e["flower-1"]), q(t, s + a, n + c + 1, 1, 1, e["flower-1"]);
    }
  }
  function ku(t, e, s, n, r, i, o, a) {
    q(t, n, r, ee, ee, e["path-1"]);
    for (let l = 0; l < 9; l++) q(t, n + Math.floor(ne(i, o, a.seed, l + 70) * 15), r + Math.floor(ne(i, o, a.seed, l + 80) * 15), 1, 1, e["path-2"]);
    for (let l = 0; l < 4; l++) q(t, n + Math.floor(ne(i, o, a.seed, l + 90) * 14), r + Math.floor(ne(i, o, a.seed, l + 100) * 14), 2, 1, e["path-3"]);
    const c = (l, d, h, p) => {
      const f = mu(s, i, o, l, d);
      if (!(J$(f) || f === "#" || f === "G")) for (let m = 0; m < ee; m++) {
        const k = 1 + Math.floor(ne(i, o, a.seed, 110 + m + (l + 2) * 16 + (d + 2) * 64) * 3);
        for (let g = 0; g < k; g++) {
          const b = m, v = p ? ee - 1 - g : g;
          q(t, n + (h ? b : v), r + (h ? v : b), 1, 1, g === k - 1 ? e["grass-2"] : e["grass-1"]);
        }
      }
    };
    c(0, -1, true, false), c(0, 1, true, true), c(-1, 0, false, false), c(1, 0, false, true);
  }
  function X$(t, e, s, n, r, i, o, a) {
    q(t, n, r, ee, ee, e["water-1"]);
    const c = a.frame * 2;
    for (let d = 0; d < 3; d++) {
      const h = 2 + d * 5 + Math.floor(ne(i, o, a.seed, d + 120) * 2), p = (Math.floor(ne(i, o, a.seed, d + 130) * 8) + c) % 11;
      q(t, n + p, r + h, 4, 1, e["water-2"]), q(t, n + p + 6 - c, r + h + 2, 2, 1, e["water-2"]);
    }
    a.frame === 1 && ne(i, o, a.seed, 140) < 0.7 && q(t, n + Math.floor(ne(i, o, a.seed, 141) * 13) + 1, r + Math.floor(ne(i, o, a.seed, 142) * 13) + 1, 1, 1, e["water-3"]), a.frame === 0 && ne(i, o, a.seed, 143) < 0.5 && q(t, n + Math.floor(ne(i, o, a.seed, 144) * 13) + 1, r + Math.floor(ne(i, o, a.seed, 145) * 13) + 1, 1, 1, e["water-3"]);
    const l = (d, h, p, f) => {
      if (!Q$(mu(s, i, o, d, h))) for (let m = 0; m < ee; m++) ne(i, o, a.seed, 150 + m + (d + 2) * 16 + (h + 2) * 64) < 0.8 && q(t, n + (p ? m : f ? ee - 1 : 0), r + (p ? f ? ee - 1 : 0 : m), 1, 1, e["water-3"]);
    };
    l(0, -1, true, false), l(0, 1, true, true), l(-1, 0, false, false), l(1, 0, false, true);
  }
  function ez(t, e, s, n, r, i, o) {
    gu(t, e, s, n, r, i, o), q(t, s + 3, n + 13, 10, 2, e["grass-2"]);
    for (let a = 0; a < fu.length; a++) {
      const c = fu[a];
      for (let l = 0; l < c.length; l++) {
        const d = c[l];
        d !== "." && q(t, s + l, n + a, 1, 1, e[Y$[d]]);
      }
    }
  }
  function bu(t, e, s, n, r, i, o) {
    q(t, s, n, ee, ee, e["wall-1"]);
    for (let a = 0; a < 4; a++) {
      const c = a * 4;
      q(t, s, n + c + 3, ee, 1, e["wall-2"]);
      const l = a % 2 === 0 ? 0 : 4;
      for (let d = l; d < ee; d += 8) q(t, s + d, n + c, 1, 3, e["wall-2"]);
      for (let d = l + 1; d < ee; d += 8) q(t, s + d, n + c, 6, 1, e["wall-3"]);
      ne(r, i, o.seed, 160 + a) < 0.4 && q(t, s + Math.floor(ne(r, i, o.seed, 170 + a) * 12) + 2, n + c + 1, 2, 1, e["wall-2"]);
    }
  }
  function tz(t, e, s, n, r, i, o, a) {
    if (bu(t, e, s, n, r, i, o), q(t, s + 2, n + 2, 12, 14, e.ink), a) q(t, s + 3, n + 3, 10, 13, e["sky-3"]), q(t, s + 4, n + 5, 8, 11, e["sky-4"]), q(t, s + 5, n + 8, 6, 8, e.glow), q(t, s + 6, n + 11, 4, 5, e.moon), o.frame === 1 ? q(t, s + 7, n + 6, 1, 1, e.gold) : q(t, s + 9, n + 7, 1, 1, e.gold);
    else {
      q(t, s + 3, n + 3, 10, 13, e.gate);
      for (let c = 5; c < 13; c += 3) q(t, s + c, n + 3, 1, 13, e["gate-dark"]);
      q(t, s + 3, n + 6, 10, 1, e.ink), q(t, s + 3, n + 12, 10, 1, e.ink), q(t, s + 7, n + 9, 2, 2, e.gold), q(t, s + 3, n + 2, 1, 1, e["wall-1"]), q(t, s + 12, n + 2, 1, 1, e["wall-1"]);
    }
  }
  function sz(t, e, s, n, r, i, o, a, c) {
    if (c === "B") {
      q(t, n, r, ee, ee, e["wall-2"]), q(t, n + 1, r + 1, 14, 14, e["wall-1"]), q(t, n + 2, r + 2, 12, 1, e["wall-3"]);
      for (const [l, d] of [[7, 3], [8, 3], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [10, 9], [6, 11], [9, 11], [7, 12], [8, 12]]) q(t, n + l, r + d, 1, 1, e["red-dark"]);
      return;
    }
    ku(t, e, s, n, r, i, o, a);
    for (const [l, d] of [[7, 4], [8, 4], [5, 5], [6, 5], [9, 5], [10, 5], [4, 7], [11, 7], [5, 9], [6, 10], [9, 10], [10, 9], [7, 11], [8, 11]]) q(t, n + l, r + d, 1, 1, e["gold-dark"]);
  }
  function nz(t, e, s, n, r, i, o, a) {
    var _a3, _b3;
    const c = (_b3 = (_a3 = s[r]) == null ? void 0 : _a3[n]) != null ? _b3 : "#", l = n * ee, d = r * ee;
    if (a == null ? void 0 : a.tiles) {
      const h = c === "." || c === "@" ? 0 : c === "," || c === "N" || c === "B" ? 1 : c === "~" ? 2 + i.frame : c === "T" ? 4 : c === "#" ? 5 : o ? 7 : 6;
      t.imageSmoothingEnabled = false, t.drawImage(a.tiles, h * ee, 0, ee, ee, l, d, ee, ee);
      return;
    }
    switch (c) {
      case "#":
        return bu(t, e, l, d, n, r, i);
      case "T":
        return ez(t, e, l, d, n, r, i);
      case "~":
        return X$(t, e, s, l, d, n, r, i);
      case ",":
      case "@":
        return ku(t, e, s, l, d, n, r, i);
      case "N":
      case "B":
        return sz(t, e, s, l, d, n, r, i, c);
      case "G":
        return tz(t, e, l, d, n, r, i, o);
      default:
        return gu(t, e, l, d, n, r, i);
    }
  }
  const vu = (t) => ({ w: Math.max(1, ...t.map((e) => e.length)) * ee, h: Math.max(1, t.length) * ee });
  function wu(t, e) {
    const s = document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
  function rz(t, e, s, n, r, i) {
    var _a3, _b3;
    const { w: o, h: a } = vu(t), c = wu(o, a), l = c.getContext("2d");
    l.imageSmoothingEnabled = false;
    for (let d = 0; d < t.length; d++) for (let h = 0; h < ((_b3 = (_a3 = t[d]) == null ? void 0 : _a3.length) != null ? _b3 : 0); h++) nz(l, e, t, h, d, { seed: s, frame: n }, r, i);
    return c;
  }
  const iz = (t) => t.kind === "boss" ? Jn : t.kind === "foe" ? Cs[(t.n - 1) % Cs.length] : t.kind === "giver" ? hu : pu;
  class oz {
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
      this.o = e, this.logical = vu(e.area.rows), this.canvas = wu(this.logical.w, this.logical.h), this.canvas.className = "rpg-canvas", this.ctx = this.canvas.getContext("2d"), this.resize(2), e.reduced || (this.timer = window.setInterval(() => this.tick(), 650));
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
      return (this.layerGate !== e || this.layers.length === 0) && (this.layers = [0, 1].map((s) => rz(this.o.area.rows, this.o.pal, this.o.seed, s, e, this.o.skin)), this.layerGate = e), this.layers[this.o.reduced ? 0 : this.frame];
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
          s.globalAlpha = 0.35, q(s, l + 3, d + 13, 10, 2, r.ink), s.globalAlpha = 1;
          const h = a.kind === "boss" ? i == null ? void 0 : i.sprites.boss : a.kind === "foe" ? i == null ? void 0 : i.sprites.foe : a.kind === "giver" || a.kind === "npc" ? i == null ? void 0 : i.sprites.npc : void 0;
          h ? s.drawImage(h, l, d + c, ee, ee) : $t(s, iz(a), r, l, d + c), a.mark && $t(s, G$, r, l, d - 11 + (this.frame === 1 && !this.o.reduced ? -1 : 0));
        } });
      }
      o.push({ y: e.hero[1], paint: () => {
        const a = e.hero[0] * ee, c = e.hero[1] * ee;
        s.globalAlpha = 0.35, q(s, a + 3, c + 13, 10, 2, r.ink), s.globalAlpha = 1;
        const l = i == null ? void 0 : i.sprites.hero;
        l ? s.drawImage(l, a, c - e.step, ee, ee) : $t(s, Yn, r, a, c - e.step, 1, e.face === "left");
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
  const dt = 160, yu = 64;
  function az(t, e, s) {
    ["sky-1", "sky-2", "sky-3", "sky-4", "sky-5"].forEach((r, i) => q(t, 0, i * 8, dt, 8, e[r]));
    for (let r = 0; r < 26; r++) q(t, Math.floor(ne(r, 1, s, 3) * dt), Math.floor(ne(r, 2, s, 3) * 26), 1, 1, e.white);
    q(t, 128, 6, 8, 8, e.moon), q(t, 130, 5, 4, 10, e.moon), q(t, 126, 8, 12, 4, e.moon);
    for (let r = 0; r < dt; r++) {
      const i = 36 - Math.round(5 + 4 * Math.sin((r + s) / 14) + 3 * Math.sin((r + s) / 5));
      q(t, r, i, 1, 48 - i, e["hill-2"]);
      const o = 40 - Math.round(3 + 3 * Math.sin((r + s * 2) / 9 + 1));
      q(t, r, o, 1, 48 - o, e["hill-1"]);
    }
    for (let r = 40; r < yu; r++) {
      const i = Math.floor((r - 40) / 4) % 2 === 0;
      q(t, 0, r, dt, 1, e[i ? "grass-1" : "grass-2"]);
    }
    for (let r = 0; r < dt; r += 5) q(t, r + Math.floor(ne(r, 5, s, 9) * 3), 42 + Math.floor(ne(r, 6, s, 9) * 20), 1, 1, e["grass-3"]);
    q(t, 0, 58, dt, 2, e["path-1"]), q(t, 0, 58, dt, 1, e["path-3"]);
  }
  function cz(t, e, s, n, r) {
    const i = t.getContext("2d"), o = Math.max(1, Math.round(t.width / dt));
    i.setTransform(o, 0, 0, o, 0, 0), i.imageSmoothingEnabled = false, az(i, e, n);
    const a = (d, h) => {
      i.globalAlpha = 0.4, q(i, d, 57, h, 3, e.ink), i.globalAlpha = 1;
    };
    a(20, 50), a(92, 54), s.boss && !s.down && (i.globalAlpha = 0.16, q(i, 96, 10, 46, 50, e.gold), i.globalAlpha = 1);
    const c = r == null ? void 0 : r.sprites.hero;
    s.heroDown ? (i.globalAlpha = 0.6, i.save(), i.translate(70, 30), i.rotate(Math.PI / 2), c ? i.drawImage(c, 0, 0, 48, 48) : $t(i, Yn, e, 0, 0, 3), i.restore(), i.globalAlpha = 1) : c ? i.drawImage(c, 22, 12, 48, 48) : $t(i, Yn, e, 22, 12, 3);
    const l = s.boss ? r == null ? void 0 : r.sprites.boss : r == null ? void 0 : r.sprites.foe;
    s.down ? (i.globalAlpha = 0.5, l ? i.drawImage(l, 94, 30, 48, 30) : $t(i, s.foe, e, 94, 28, 3), i.globalAlpha = 1) : l ? i.drawImage(l, 94, 10, 48, 48) : $t(i, s.foe, e, 94, 10, 3);
  }
  function lz(t, e, s, n) {
    const r = t.getContext("2d"), i = Math.max(1, Math.round(t.width / Math.max(1, ...s.map((a) => a.length))));
    r.imageSmoothingEnabled = false;
    const o = (a) => a === "#" ? e["wall-1"] : a === "T" ? e["leaf-2"] : a === "~" ? e["water-1"] : a === "," || a === "@" || a === "N" ? e["path-1"] : a === "B" ? e["wall-3"] : a === "G" ? e.gold : e["grass-1"];
    s.forEach((a, c) => [...a].forEach((l, d) => q(r, d * i, c * i, i, i, o(l))));
    for (const a of n) q(r, a.at[0] * i, a.at[1] * i, i, i, a.kind === "giver" ? e.gold : a.kind === "boss" ? e.purple : e.red);
  }
  const Su = (t) => ({ pos: t.start, face: "right", accepted: false, foesDown: [], bossDown: false, scores: [], counted: [], done: false }), dz = (t, e) => ({ ...Su(t), accepted: e.accepted }), uz = "goto-boss";
  function Dt(t, e) {
    const s = t.npcs.map((n) => ({ id: n.id, kind: "npc", at: n.at, giver: n.quest, goto: "goto-".concat(n.id) }));
    for (const n of t.foes) e.foesDown.includes(n.id) || s.push({ id: n.id, kind: "foe", at: n.at, giver: false, goto: "goto-".concat(n.id) });
    return e.bossDown || s.push({ id: t.boss.id, kind: "boss", at: t.boss.at, giver: false, goto: uz }), s;
  }
  const hz = (t, e) => new Set(Dt(t, e).map((s) => Ce(s.at)));
  function Qn(t, e) {
    return e.done ? "done" : e.accepted ? t.foes.every((s) => e.foesDown.includes(s.id)) ? "boss" : "foes" : "talk";
  }
  const Ji = (t, e) => [t[0] + An[e][0], t[1] + An[e][1]];
  function pz(t, e, s, n) {
    const r = Ji(e.pos, s), i = Dt(t, e).find((a) => ot(a.at, r));
    if (i) return { kind: "bump", person: i };
    const o = Jt(t.rows, r);
    return o === "G" && n ? { kind: "gate" } : js(o, n) ? { kind: "move", pos: r } : { kind: "blocked" };
  }
  function Us(t, e) {
    const s = e[0] - t[0], n = e[1] - t[1];
    return Math.abs(s) >= Math.abs(n) ? s >= 0 ? "right" : "left" : n >= 0 ? "down" : "up";
  }
  function Xn(t, e) {
    const s = Ji(e.pos, e.face), n = (r) => ot(r.at, s) ? 0 : r.giver ? 1 : r.kind === "foe" ? 2 : r.kind === "boss" ? 3 : 4;
    return Dt(t, e).filter((r) => ri(r.at, e.pos)).sort((r, i) => n(r) - n(i));
  }
  function er(t, e) {
    const s = Dt(t, e).map((n) => ({ testid: n.goto, id: n.id, kind: n.giver ? "giver" : n.kind, at: n.at }));
    return t.gate && s.push({ testid: "goto-gate", id: "gate", kind: "gate", at: t.gate }), s;
  }
  function Qi(t, e, s, n) {
    const r = er(t, e).find((o) => o.testid === s || o.id === s);
    if (!r) return null;
    const i = hz(t, e);
    return r.kind === "gate" ? n ? jl(t.rows, e.pos, (o) => ot(o, r.at), { blocked: i, gateOpen: n }) : xl(t.rows, e.pos, r.at, { blocked: i }) : xl(t.rows, e.pos, r.at, { blocked: i, gateOpen: n });
  }
  function $u(t, e, s) {
    var _a3;
    const n = Qn(t, e), r = Dt(t, e), i = (o, a, c) => {
      var _a4;
      const l = Qi(t, e, c, s), d = r.find((h) => h.goto === c);
      return { kind: o, id: a, testid: c, adjacent: !!d && ri(d.at, e.pos), steps: (_a4 = l == null ? void 0 : l.length) != null ? _a4 : -1 };
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
  const zu = (t) => t.length === 0 ? 0 : t.reduce((e, s) => e + s, 0) / t.length, fz = { en: { "rpg.tagline": "A pixel quest through what you are learning", "rpg.title.art": "A pixel landscape: night sky, hills, a castle and a small hero", "rpg.hero.default": "Hero", "rpg.intro.title": "The story", "rpg.story.next": "Next", "rpg.story.begin": "Begin the quest", "rpg.story.skip": "Skip the story", "rpg.story.count": "Page {n} of {total}", "rpg.auto.intro.1": "A quiet land lies under a night sky, and its roads are blocked by foes made of muddled ideas.", "rpg.auto.intro.2": "You are {hero}, a young adventurer. Every right answer is a strike, and every fact you learn goes into your pack as a scroll.", "rpg.auto.intro.3": "Visit each area, speak with its sage and beat the foes. Then the gates will open.", "rpg.auto.outro.1": "The last foe falls and the muddle clears. Everything you learned is now yours to keep.", "rpg.areas.title": "The world map", "rpg.areas.intro": "Pick a place. Each area is a quest that teaches one unit.", "rpg.area.enter": "Enter", "rpg.area.locked": "Locked: master {units} first.", "rpg.area.quest": "Quest", "rpg.final.title": "The final battle", "rpg.final.ready": "The last foe mixes every unit. Answer well.", "rpg.final.locked": "Master every area (2 stars) to face the last foe.", "rpg.final.go": "Face the last foe", "rpg.auto.final": "The Grand Muddle", "rpg.to.title": "Back to the title", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Map of {area}", "rpg.where": "You are in {area}, at column {x}, row {y}.", "rpg.near": "Next to you: {names}.", "rpg.near.none": "Nobody is next to you.", "rpg.side.left": "left", "rpg.side.right": "right", "rpg.side.up": "above", "rpg.side.down": "below", "rpg.pad": "Walk", "rpg.move.up": "Up", "rpg.move.down": "Down", "rpg.move.left": "Left", "rpg.move.right": "Right", "rpg.talk": "Talk", "rpg.fight": "Fight", "rpg.talk.none": "Nobody is next to you. Walk up to someone first.", "rpg.keys": "Arrow keys or WASD walk, Enter talks.", "rpg.targets": "Walk to", "rpg.goto": "Walk to {name}", "rpg.goto.gate": "Walk to the gate", "rpg.inventory": "Scrolls ({n})", "rpg.to.areas": "World map", "rpg.quest.title": "Quest log", "rpg.quest.talk": "Talk to {name}", "rpg.quest.foes": "Beat the foes ({done} of {total})", "rpg.quest.boss": "Defeat {name}", "rpg.quest.gate": "Open the gate (2 stars)", "rpg.quest.done": "done", "rpg.quest.todo": "to do", "rpg.msg.need.giver": "Speak with {name} first: the quest has to begin.", "rpg.msg.need.foes": "Beat the other foes first ({n} left).", "rpg.msg.gate.shut": "The gate is shut. Finish the quest with 2 stars to open it.", "rpg.msg.noway": "There is no way there.", "rpg.msg.won": "You beat {name}!", "rpg.msg.inn": "You fainted and woke up at the inn with full HP. {name} is still waiting; the quest goes on.", "rpg.msg.fled": "You ran away. {name} is still waiting.", "rpg.msg.accepted": "Quest accepted: {area}.", "rpg.msg.walking": "Walking...", "rpg.dialogue.next": "Continue", "rpg.dialogue.bye": "Goodbye", "rpg.dialogue.later": "Not now", "rpg.dialogue.count": "Line {n} of {total}", "rpg.quest.accept": "Accept the quest", "rpg.portrait": "Portrait of {name}", "rpg.auto.sage": "The Sage", "rpg.auto.sage.1": 'Welcome, {hero}. This is the land of "{unit}".', "rpg.auto.sage.2": "Foes made of muddled ideas roam here: {n} of them, and {boss} guards the gate. Every right answer is a strike.", "rpg.auto.sage.3": "Beat them all with what you know, and the gate will open. Good luck!", "rpg.sage.hint": "Beat the foes ({n} left), then face {boss}.", "rpg.sage.boss": "Only {boss} is left. Face it!", "rpg.sage.done": "Well fought! The gate is open.", "rpg.sage.retry": "The gate needs 2 stars. Try the quest again and answer right the first time.", "rpg.auto.foe.1": "Fog Slime", "rpg.auto.foe.2": "Doubt Bat", "rpg.auto.foe.3": "Myth Imp", "rpg.auto.foe.4": "Rumour Ghost", "rpg.auto.boss": 'Guardian of "{unit}"', "rpg.battle.appears": "{name} blocks the way!", "rpg.battle.boss": "A boss: its strikes are harder.", "rpg.battle.hint": "Every question is a move. A right answer strikes the foe; a wrong one lets it hit back. Answers right in a row make your strikes stronger.", "rpg.battle.start": "Fight!", "rpg.battle.flee": "Run away", "rpg.battle.turn": "Turn {n}: answer to strike {name}.", "rpg.battle.hero": "You", "rpg.battle.foe.hp": "{name}: HP {hp} of {max}", "rpg.battle.hero.hp": "You: HP {hp} of {max}", "rpg.battle.streak": "Streak {n} (strike x{m})", "rpg.fx.strike": "You strike {name} for {n}!", "rpg.fx.strike.streak": "You strike {name} for {n}! (streak x{m})", "rpg.fx.hit": "{name} hits you for {n}.", "rpg.fx.both": "You hit {name} for {n}, and it hits back for {m}.", "rpg.fx.scroll": "A new scroll is in your pack.", "rpg.fx.fall": "{name} falls!", "rpg.fx.faint": "You faint...", "rpg.next.turn": "Next turn", "rpg.next.win": "Victory!", "rpg.next.faint": "Wake up at the inn", "rpg.inv.title": "Scrolls of knowledge", "rpg.inv.intro": "Every fact you earned with a right answer in battle.", "rpg.inv.empty": "No scrolls yet. Each right answer in battle adds one.", "rpg.inv.back": "Back", "rpg.inv.from": "From: {unit}", "rpg.qd.title": "Quest complete!", "rpg.qd.accuracy": "{n}% right the first time", "rpg.qd.gate.open": "The gate is open: walk through it to go on.", "rpg.qd.gate.shut": "The gate stays shut: you need 2 stars. Replay the quest.", "rpg.qd.unlocked": "New area: {units}", "rpg.qd.replay": "Replay the quest", "rpg.qd.world": "Back to the map", "rpg.outro.title": "The end of the quest", "rpg.end.sub": "Every area is mastered and the last foe has fallen.", "rpg.end.scrolls": "Scrolls collected: {n}", "rpg.story.end": "The end", "rpg.msg.rest": "You rest and win back {n} HP.", "rpg.battle.alt": "{hero} faces {foe} on a grassy field under a night sky.", "rpg.mini.alt": "Small map of {area}", "rpg.final.finish": "See the ending", "rpg.final.beaten": "The last foe is beaten.", "rpg.area.mastered": "Mastered", "rpg.story.alt": "Portrait of {name}", "rpg.quest.replay.hint": "Replay the quest to earn more stars." }, hr: { "rpg.tagline": "Pikselna pustolovina kroz ono što učiš", "rpg.title.art": "Pikselni krajolik: noćno nebo, brežuljci, dvorac i mali junak", "rpg.hero.default": "Junak", "rpg.intro.title": "Priča", "rpg.story.next": "Dalje", "rpg.story.begin": "Započni pustolovinu", "rpg.story.skip": "Preskoči priču", "rpg.story.count": "Stranica {n} od {total}", "rpg.auto.intro.1": "Mirna zemlja leži pod noćnim nebom, a putove joj zatvaraju neprijatelji sazdani od pomiješanih ideja.", "rpg.auto.intro.2": "Ti si {hero}, mladi pustolov. Svaki točan odgovor je udarac, a svaka činjenica koju naučiš ide u torbu kao svitak.", "rpg.auto.intro.3": "Posjeti svako područje, razgovaraj s mudracem i pobijedi neprijatelje. Tada će se vrata otvoriti.", "rpg.auto.outro.1": "Posljednji neprijatelj pada i zbrka se razbistrila. Sve što si naučio sada je tvoje.", "rpg.areas.title": "Karta svijeta", "rpg.areas.intro": "Odaberi mjesto. Svako područje je zadatak koji uči jednu cjelinu.", "rpg.area.enter": "Uđi", "rpg.area.locked": "Zaključano: prvo savladaj {units}.", "rpg.area.quest": "Zadatak", "rpg.final.title": "Završna bitka", "rpg.final.ready": "Posljednji neprijatelj miješa sve cjeline. Odgovaraj pažljivo.", "rpg.final.locked": "Savladaj svako područje (2 zvjezdice) da bi se suočio s posljednjim neprijateljem.", "rpg.final.go": "Suoči se s posljednjim neprijateljem", "rpg.auto.final": "Veliki Zbrkanac", "rpg.to.title": "Natrag na naslovnicu", "rpg.hp": "HP {hp} / {max}", "rpg.map.label": "Karta područja: {area}", "rpg.where": "Nalaziš se u području {area}, u stupcu {x}, retku {y}.", "rpg.near": "Pokraj tebe: {names}.", "rpg.near.none": "Pokraj tebe nema nikoga.", "rpg.side.left": "lijevo", "rpg.side.right": "desno", "rpg.side.up": "iznad", "rpg.side.down": "ispod", "rpg.pad": "Hodaj", "rpg.move.up": "Gore", "rpg.move.down": "Dolje", "rpg.move.left": "Lijevo", "rpg.move.right": "Desno", "rpg.talk": "Razgovaraj", "rpg.fight": "Bori se", "rpg.talk.none": "Pokraj tebe nema nikoga. Prvo priđi nekome.", "rpg.keys": "Strelice ili WASD za hodanje, Enter za razgovor.", "rpg.targets": "Idi do", "rpg.goto": "Idi do: {name}", "rpg.goto.gate": "Idi do vrata", "rpg.inventory": "Svici ({n})", "rpg.to.areas": "Karta svijeta", "rpg.quest.title": "Dnevnik zadatka", "rpg.quest.talk": "Razgovaraj s: {name}", "rpg.quest.foes": "Pobijedi neprijatelje ({done} od {total})", "rpg.quest.boss": "Pobijedi: {name}", "rpg.quest.gate": "Otvori vrata (2 zvjezdice)", "rpg.quest.done": "gotovo", "rpg.quest.todo": "preostaje", "rpg.msg.need.giver": "Prvo razgovaraj s: {name}. Zadatak mora početi.", "rpg.msg.need.foes": "Prvo pobijedi ostale neprijatelje (još {n}).", "rpg.msg.gate.shut": "Vrata su zatvorena. Završi zadatak s 2 zvjezdice da ih otvoriš.", "rpg.msg.noway": "Tamo nema puta.", "rpg.msg.won": "Pobijedio si: {name}!", "rpg.msg.inn": "Onesvijestio si se i probudio u gostionici s punim HP-om. {name} te još čeka; zadatak se nastavlja.", "rpg.msg.fled": "Pobjegao si. {name} te još čeka.", "rpg.msg.accepted": "Zadatak prihvaćen: {area}.", "rpg.msg.walking": "Hodam...", "rpg.dialogue.next": "Nastavi", "rpg.dialogue.bye": "Doviđenja", "rpg.dialogue.later": "Ne sada", "rpg.dialogue.count": "Redak {n} od {total}", "rpg.quest.accept": "Prihvati zadatak", "rpg.portrait": "Portret: {name}", "rpg.auto.sage": "Mudrac", "rpg.auto.sage.1": 'Dobro došao, {hero}. Ovo je zemlja cjeline "{unit}".', "rpg.auto.sage.2": "Ovdje lutaju neprijatelji sazdani od pomiješanih ideja: njih {n}, a vrata čuva {boss}. Svaki točan odgovor je udarac.", "rpg.auto.sage.3": "Pobijedi ih svojim znanjem i vrata će se otvoriti. Sretno!", "rpg.sage.hint": "Pobijedi neprijatelje (još {n}), a zatim se suoči s: {boss}.", "rpg.sage.boss": "Ostao je samo {boss}. Suoči se s njim!", "rpg.sage.done": "Dobro si se borio! Vrata su otvorena.", "rpg.sage.retry": "Za vrata trebaju 2 zvjezdice. Ponovi zadatak i odgovori točno iz prvog pokušaja.", "rpg.auto.foe.1": "Magleni Sluz", "rpg.auto.foe.2": "Šišmiš Sumnje", "rpg.auto.foe.3": "Vragolan Mita", "rpg.auto.foe.4": "Duh Glasina", "rpg.auto.boss": 'Čuvar cjeline "{unit}"', "rpg.battle.appears": "{name} ti zatvara put!", "rpg.battle.boss": "Šef: njegovi su udarci jači.", "rpg.battle.hint": "Svako pitanje je potez. Točan odgovor udara neprijatelja, a netočan mu dopušta da uzvrati. Uzastopni točni odgovori jačaju tvoje udarce.", "rpg.battle.start": "U borbu!", "rpg.battle.flee": "Pobjegni", "rpg.battle.turn": "Potez {n}: odgovori i udari: {name}.", "rpg.battle.hero": "Ti", "rpg.battle.foe.hp": "{name}: HP {hp} od {max}", "rpg.battle.hero.hp": "Ti: HP {hp} od {max}", "rpg.battle.streak": "Niz {n} (udarac x{m})", "rpg.fx.strike": "Udaraš: {name}, šteta {n}!", "rpg.fx.strike.streak": "Udaraš: {name}, šteta {n}! (niz x{m})", "rpg.fx.hit": "{name} te udara, šteta {n}.", "rpg.fx.both": "Pogađaš: {name}, šteta {n}, a on uzvraća štetom {m}.", "rpg.fx.scroll": "Novi svitak je u tvojoj torbi.", "rpg.fx.fall": "{name} pada!", "rpg.fx.faint": "Onesvijestio si se...", "rpg.next.turn": "Sljedeći potez", "rpg.next.win": "Pobjeda!", "rpg.next.faint": "Probudi se u gostionici", "rpg.inv.title": "Svici znanja", "rpg.inv.intro": "Svaka činjenica koju si zaradio točnim odgovorom u borbi.", "rpg.inv.empty": "Još nema svitaka. Svaki točan odgovor u borbi dodaje jedan.", "rpg.inv.back": "Natrag", "rpg.inv.from": "Iz cjeline: {unit}", "rpg.qd.title": "Zadatak je gotov!", "rpg.qd.accuracy": "{n}% točno iz prvog pokušaja", "rpg.qd.gate.open": "Vrata su otvorena: prođi kroz njih da nastaviš.", "rpg.qd.gate.shut": "Vrata ostaju zatvorena: trebaju ti 2 zvjezdice. Ponovi zadatak.", "rpg.qd.unlocked": "Novo područje: {units}", "rpg.qd.replay": "Ponovi zadatak", "rpg.qd.world": "Natrag na kartu", "rpg.outro.title": "Kraj pustolovine", "rpg.end.sub": "Svako je područje savladano i posljednji je neprijatelj pao.", "rpg.end.scrolls": "Skupljeni svici: {n}", "rpg.story.end": "Kraj", "rpg.msg.rest": "Odmaraš i vraćaš {n} HP.", "rpg.battle.alt": "{hero} se suočava s neprijateljem {foe} na travnatom polju pod noćnim nebom.", "rpg.mini.alt": "Mala karta područja: {area}", "rpg.final.finish": "Pogledaj završetak", "rpg.final.beaten": "Posljednji neprijatelj je pobijeđen.", "rpg.area.mastered": "Savladano", "rpg.story.alt": "Portret: {name}", "rpg.quest.replay.hint": "Ponovi zadatak da zaradiš više zvjezdica." }, de: { "rpg.tagline": "Ein Pixel-Abenteuer durch das, was du lernst", "rpg.title.art": "Eine Pixel-Landschaft: Nachthimmel, Hügel, ein Schloss und ein kleiner Held", "rpg.hero.default": "Held", "rpg.intro.title": "Die Geschichte", "rpg.story.next": "Weiter", "rpg.story.begin": "Das Abenteuer beginnen", "rpg.story.skip": "Die Geschichte überspringen", "rpg.story.count": "Seite {n} von {total}", "rpg.auto.intro.1": "Ein stilles Land liegt unter einem Nachthimmel, und seine Wege werden von Feinden aus wirren Gedanken versperrt.", "rpg.auto.intro.2": "Du bist {hero}, ein junger Abenteurer. Jede richtige Antwort ist ein Schlag, und jede Tatsache, die du lernst, wandert als Schriftrolle in deinen Rucksack.", "rpg.auto.intro.3": "Besuche jedes Gebiet, sprich mit seinem Weisen und besiege die Feinde. Dann öffnen sich die Tore.", "rpg.auto.outro.1": "Der letzte Feind fällt und das Durcheinander lichtet sich. Alles, was du gelernt hast, gehört nun dir.", "rpg.areas.title": "Die Weltkarte", "rpg.areas.intro": "Wähle einen Ort. Jedes Gebiet ist ein Abenteuer, das eine Einheit lehrt.", "rpg.area.enter": "Betreten", "rpg.area.locked": "Gesperrt: Meistere zuerst {units}.", "rpg.area.quest": "Abenteuer", "rpg.final.title": "Der letzte Kampf", "rpg.final.ready": "Der letzte Feind mischt alle Einheiten. Antworte gut.", "rpg.final.locked": "Meistere jedes Gebiet (2 Sterne), um dich dem letzten Feind zu stellen.", "rpg.final.go": "Dem letzten Feind gegenübertreten", "rpg.auto.final": "Das Große Durcheinander", "rpg.to.title": "Zurück zum Titel", "rpg.hp": "LP {hp} / {max}", "rpg.map.label": "Karte von {area}", "rpg.where": "Du bist in {area}, in Spalte {x}, Zeile {y}.", "rpg.near": "Neben dir: {names}.", "rpg.near.none": "Niemand ist neben dir.", "rpg.side.left": "links", "rpg.side.right": "rechts", "rpg.side.up": "oben", "rpg.side.down": "unten", "rpg.pad": "Gehen", "rpg.move.up": "Hoch", "rpg.move.down": "Runter", "rpg.move.left": "Links", "rpg.move.right": "Rechts", "rpg.talk": "Sprechen", "rpg.fight": "Kämpfen", "rpg.talk.none": "Niemand ist neben dir. Geh zuerst zu jemandem hin.", "rpg.keys": "Pfeiltasten oder WASD zum Gehen, Enter zum Sprechen.", "rpg.targets": "Gehe zu", "rpg.goto": "Zu {name} gehen", "rpg.goto.gate": "Zum Tor gehen", "rpg.inventory": "Schriftrollen ({n})", "rpg.to.areas": "Weltkarte", "rpg.quest.title": "Questbuch", "rpg.quest.talk": "Sprich mit {name}", "rpg.quest.foes": "Besiege die Feinde ({done} von {total})", "rpg.quest.boss": "Besiege {name}", "rpg.quest.gate": "Öffne das Tor (2 Sterne)", "rpg.quest.done": "erledigt", "rpg.quest.todo": "offen", "rpg.msg.need.giver": "Sprich zuerst mit {name}: Das Abenteuer muss beginnen.", "rpg.msg.need.foes": "Besiege zuerst die anderen Feinde (noch {n}).", "rpg.msg.gate.shut": "Das Tor ist zu. Schließe das Abenteuer mit 2 Sternen ab, um es zu öffnen.", "rpg.msg.noway": "Dorthin führt kein Weg.", "rpg.msg.won": "Du hast {name} besiegt!", "rpg.msg.inn": "Du bist ohnmächtig geworden und im Gasthaus mit voller LP aufgewacht. {name} wartet noch; das Abenteuer geht weiter.", "rpg.msg.fled": "Du bist weggelaufen. {name} wartet noch.", "rpg.msg.accepted": "Auftrag angenommen: {area}.", "rpg.msg.walking": "Unterwegs …", "rpg.dialogue.next": "Weiter", "rpg.dialogue.bye": "Auf Wiedersehen", "rpg.dialogue.later": "Jetzt nicht", "rpg.dialogue.count": "Zeile {n} von {total}", "rpg.quest.accept": "Den Auftrag annehmen", "rpg.portrait": "Porträt von {name}", "rpg.auto.sage": "Der Weise", "rpg.auto.sage.1": "Willkommen, {hero}. Dies ist das Land von „{unit}“.", "rpg.auto.sage.2": "Hier streifen Feinde aus wirren Gedanken umher: {n} an der Zahl, und {boss} bewacht das Tor. Jede richtige Antwort ist ein Schlag.", "rpg.auto.sage.3": "Besiege sie alle mit dem, was du weißt, und das Tor öffnet sich. Viel Glück!", "rpg.sage.hint": "Besiege die Feinde (noch {n}), dann stelle dich {boss}.", "rpg.sage.boss": "Nur noch {boss} ist übrig. Stelle dich ihm!", "rpg.sage.done": "Gut gekämpft! Das Tor ist offen.", "rpg.sage.retry": "Das Tor braucht 2 Sterne. Versuche das Abenteuer noch einmal und antworte gleich beim ersten Mal richtig.", "rpg.auto.foe.1": "Nebelschleim", "rpg.auto.foe.2": "Zweifelfledermaus", "rpg.auto.foe.3": "Mythenwichtel", "rpg.auto.foe.4": "Gerüchtegeist", "rpg.auto.boss": "Wächter von „{unit}“", "rpg.battle.appears": "{name} versperrt den Weg!", "rpg.battle.boss": "Ein Endgegner: Seine Schläge sind härter.", "rpg.battle.hint": "Jede Frage ist ein Zug. Eine richtige Antwort trifft den Feind; eine falsche lässt ihn zurückschlagen. Mehrere richtige Antworten hintereinander machen deine Schläge stärker.", "rpg.battle.start": "Kämpfen!", "rpg.battle.flee": "Weglaufen", "rpg.battle.turn": "Runde {n}: Antworte, um {name} zu treffen.", "rpg.battle.hero": "Du", "rpg.battle.foe.hp": "{name}: LP {hp} von {max}", "rpg.battle.hero.hp": "Du: LP {hp} von {max}", "rpg.battle.streak": "Serie {n} (Schlag x{m})", "rpg.fx.strike": "Du triffst {name} mit {n}!", "rpg.fx.strike.streak": "Du triffst {name} mit {n}! (Serie x{m})", "rpg.fx.hit": "{name} trifft dich mit {n}.", "rpg.fx.both": "Du triffst {name} mit {n}, und er schlägt mit {m} zurück.", "rpg.fx.scroll": "Eine neue Schriftrolle ist in deinem Rucksack.", "rpg.fx.fall": "{name} fällt!", "rpg.fx.faint": "Du wirst ohnmächtig …", "rpg.next.turn": "Nächste Runde", "rpg.next.win": "Sieg!", "rpg.next.faint": "Im Gasthaus aufwachen", "rpg.inv.title": "Schriftrollen des Wissens", "rpg.inv.intro": "Jede Tatsache, die du mit einer richtigen Antwort im Kampf verdient hast.", "rpg.inv.empty": "Noch keine Schriftrollen. Jede richtige Antwort im Kampf bringt eine.", "rpg.inv.back": "Zurück", "rpg.inv.from": "Aus: {unit}", "rpg.qd.title": "Abenteuer geschafft!", "rpg.qd.accuracy": "{n} % gleich beim ersten Mal richtig", "rpg.qd.gate.open": "Das Tor ist offen: Geh hindurch, um weiterzukommen.", "rpg.qd.gate.shut": "Das Tor bleibt zu: Du brauchst 2 Sterne. Spiele das Abenteuer noch einmal.", "rpg.qd.unlocked": "Neues Gebiet: {units}", "rpg.qd.replay": "Das Abenteuer noch einmal spielen", "rpg.qd.world": "Zurück zur Karte", "rpg.outro.title": "Das Ende des Abenteuers", "rpg.end.sub": "Jedes Gebiet ist gemeistert und der letzte Feind ist gefallen.", "rpg.end.scrolls": "Gesammelte Schriftrollen: {n}", "rpg.story.end": "Ende", "rpg.msg.rest": "Du ruhst dich aus und gewinnst {n} LP zurück.", "rpg.battle.alt": "{hero} steht {foe} auf einer Wiese unter einem Nachthimmel gegenüber.", "rpg.mini.alt": "Kleine Karte von {area}", "rpg.final.finish": "Das Ende ansehen", "rpg.final.beaten": "Der letzte Feind ist besiegt.", "rpg.area.mastered": "Gemeistert", "rpg.story.alt": "Porträt von {name}", "rpg.quest.replay.hint": "Spiele das Abenteuer noch einmal, um mehr Sterne zu verdienen." } };
  function Xi(t, e, s, n, r) {
    const i = u("span", { class: "hp-fill ".concat(n === "foe" ? "is-foe" : "") }), o = u("span", { class: "hp-text" }), a = u("div", { class: "hp-line", testid: r }, o, u("span", { class: "hp-bar", "aria-hidden": "true" }, i)), c = (l, d) => {
      o.textContent = t(l, d);
      const h = K$(l, d);
      i.style.width = "".concat(h, "%"), i.classList.toggle("is-low", h <= 30 && n === "hero"), a.setAttribute("data-hp", String(l)), a.setAttribute("data-max", String(d));
    };
    return c(e, s), { el: a, set: c };
  }
  const mz = (t) => Number.isInteger(t) ? String(t) : t.toFixed(2).replace(/0$/, "");
  function gz(t) {
    const e = u("canvas", { class: "rpg-canvas rpg-battle-canvas", width: dt * 3, height: yu * 3, role: "img", "aria-label": t.words.alt, testid: "battle-scene" }), s = Xi(t.words.heroLine, t.battle.hp, t.battle.maxHp, "hero", "hero-hp"), n = Xi(t.words.foeLine, t.battle.foeHp, t.battle.foeMax, "foe", "foe-hp"), r = u("p", { class: "rpg-streak", testid: "streak" }), i = u("div", { class: "rpg-scene-view" }, e), o = u("div", { class: "rpg-scene" }, u("div", { class: "rpg-scene-bars" }, u("div", { class: "rpg-panel" }, u("span", { class: "rpg-who" }, t.words.hero), s.el), u("div", { class: "rpg-panel" }, u("span", { class: "rpg-who" }, t.words.foeName), n.el)), i, r), a = (d, h) => cz(e, t.pal, { foe: t.foe, boss: t.boss, down: d, heroDown: h }, t.seed, t.skin), c = (d, h) => {
      const p = u("span", { class: "rpg-pop ".concat(h), "aria-hidden": "true" }, d);
      i.appendChild(p), window.setTimeout(() => p.remove(), 1300);
    }, l = (d, h) => {
      var _a3, _b3;
      s.set(d.hp, d.maxHp), n.set(d.foeHp, d.foeMax);
      const p = Yi(d.streak);
      r.textContent = t.words.streakLine(d.streak, mz(p)), r.classList.toggle("is-hot", d.streak > 0), o.setAttribute("data-streak", String(d.streak)), a((_a3 = h == null ? void 0 : h.foeDown) != null ? _a3 : false, (_b3 = h == null ? void 0 : h.heroDown) != null ? _b3 : false), h && (h.dealt > 0 && c("-".concat(h.dealt), "is-foe"), h.taken > 0 && (c("-".concat(h.taken), "is-hero"), As(i, "is-hit", 500)));
    };
    return l(t.battle), { el: o, update: l };
  }
  function _u(t) {
    if (t.image) return u("img", { class: "rpg-portrait", src: t.image.url, alt: t.image.alt, testid: "portrait" });
    const e = u("canvas", { class: "rpg-portrait", width: 16, height: 16, role: "img", "aria-label": t.alt, testid: "portrait" }), s = e.getContext("2d");
    return s && (s.imageSmoothingEnabled = false, $t(s, t.sprite, t.pal, 0, 0)), e;
  }
  const ju = "rpg", kz = "pixel", xu = 40, bz = 70, Eu = (t) => {
    let e = 2166136261;
    for (let s = 0; s < t.length; s++) e = Math.imul(e ^ t.charCodeAt(s), 16777619);
    return e >>> 0;
  }, vz = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", W: "up", s: "down", S: "down", a: "left", A: "left", d: "right", D: "right" };
  class wz {
    constructor(e) {
      __publicField(this, "host");
      __publicField(this, "session");
      __publicField(this, "layout");
      __publicField(this, "titleState", es());
      __publicField(this, "progress", /* @__PURE__ */ new Map());
      __publicField(this, "palette", null);
      __publicField(this, "skin", V$());
      __publicField(this, "scrolls", []);
      __publicField(this, "hp", Ie);
      __publicField(this, "w", null);
      __publicField(this, "message", "");
      __publicField(this, "event", "");
      __publicField(this, "reduced", typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      this.host = e, this.session = new Ps(e, { shellId: ju, theme: kz, strings: fz }), this.layout = Pl(this.session.pack, this.session.section()), this.loadScrolls();
    }
    get s() {
      return this.session.s;
    }
    get pal() {
      var _a3;
      return (_a3 = this.palette) != null ? _a3 : this.palette = H$(this.host.root), this.palette;
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
      return s || (s = Su(e), this.progress.set(e.id, s)), s;
    }
    assetOf(e) {
      if (!e) return null;
      const s = this.session.data.assets[e], n = this.session.pack.assets.find((r) => r.id === e);
      return s && n ? { url: s, alt: this.session.t(n.alt) } : null;
    }
    async loadSkin() {
      const e = this.session, s = (l) => l ? e.data.assets[l] : void 0, [n, r, i, o, a] = await Promise.all([Zs(s(this.layout.tileset)), Zs(s(this.layout.sprites.hero)), Zs(s(this.layout.sprites.npc)), Zs(s(this.layout.sprites.foe)), Zs(s(this.layout.sprites.boss))]), c = { sprites: {} };
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
      return { area: e.id, areaIndex: this.layout.areas.indexOf(e), unit: e.unitId, size: [Math.max(...e.rows.map((i) => i.length)), e.rows.length], pos: [s.pos[0], s.pos[1]], face: s.face, hp: this.hp, maxHp: Ie, stage: Qn(e, s), accepted: s.accepted, done: s.done, gateOpen: r, foesLeft: e.foes.filter((i) => !s.foesDown.includes(i.id)).map((i) => i.id), foesDown: [...s.foesDown], bossDown: s.bossDown, nearby: Xn(e, s).map((i) => i.id), targets: er(e, s).map((i) => i.testid), walking: n, scrolls: this.scrolls.length, event: this.event, goal: $u(e, s, r) };
    }
    currentView() {
      const e = this.w;
      return e ? this.worldView(e.area, e.p, e.walking) : null;
    }
    debugGoal() {
      const e = this.w;
      return e ? { ...$u(e.area, e.p, this.gateOpen(e.area)) } : null;
    }
    debugPath(e) {
      var _a3;
      const s = this.w;
      if (!s) return null;
      const n = Qi(s.area, s.p, e, this.gateOpen(s.area));
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
      e.finished = false, this.event = "", this.show("title", Rs(e, { onStart: () => this.hasPlayed() ? this.areas() : this.story("intro", 0) }, () => this.title(), this.titleState));
    }
    hasPlayed() {
      const e = this.session.sp;
      return Object.keys(e.units).length > 0 || e.boss.stars > 0 || this.scrolls.length > 0;
    }
    story(e, s) {
      var _a3;
      const n = this.s, r = e === "intro" ? this.introLines() : this.outroLines(), i = Math.max(0, Math.min(s, r.length - 1)), o = i >= r.length - 1, a = () => e === "intro" ? this.areas() : this.end(), c = this.heroName(), l = u("section", { class: "rpg-story" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "story-title" }, n(e === "intro" ? "rpg.intro.title" : "rpg.outro.title")), u("div", { class: "rpg-speaker" }, _u({ sprite: Yn, pal: this.pal, image: this.assetOf(this.layout.sprites.hero), alt: n("rpg.story.alt", { name: c }) }), u("div", { class: "rpg-textbox", testid: "story-text" }, u("p", {}, (_a3 = r[i]) != null ? _a3 : ""), u("span", { class: "rpg-count" }, n("rpg.story.count", { n: i + 1, total: r.length })))), u("div", { class: "rpg-actions" }, o ? I("story-next", n(e === "intro" ? "rpg.story.begin" : "rpg.story.end"), a, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : I("story-next", n("rpg.story.next"), () => this.story(e, i + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" }), o ? null : I("story-skip", n("rpg.story.skip"), a, { class: "btn btn-ghost" })));
      this.show(e, l, { view: { page: i, total: r.length, last: o } });
    }
    areas() {
      const e = this.session, s = this.s, n = e.allMastered(), r = this.takeMessage(), i = (l) => {
        var _a3, _b3;
        const d = !e.isUnlocked(l.unitId), h = e.unitStars(l.unitId), p = e.isMastered(l.unitId), f = ((_b3 = (_a3 = e.pack.units.find((g) => g.id === l.unitId)) == null ? void 0 : _a3.requires) != null ? _b3 : []).filter((g) => !e.isMastered(g)).map((g) => e.unitTitle(g)), m = u("canvas", { class: "rpg-mini", width: 192, height: Math.round(192 * l.rows.length / Math.max(...l.rows.map((g) => g.length))), role: "img", "aria-label": s("rpg.mini.alt", { area: this.areaName(l) }) });
        lz(m, this.pal, l.rows, [...l.npcs.map((g) => ({ at: g.at, kind: "giver" })), ...l.foes.map((g) => ({ at: g.at, kind: "foe" })), { at: l.boss.at, kind: "boss" }]);
        const k = I("area-".concat(l.id), [m, u("span", { class: "rpg-area-title" }, this.areaName(l)), u("span", { class: "rpg-area-unit" }, e.unitTitle(l.unitId)), d ? u("span", { class: "rpg-area-need" }, s("rpg.area.locked", { units: f.join(", ") })) : p ? u("span", { class: "rpg-area-need" }, s("rpg.area.mastered")) : u("span", { class: "rpg-area-need" }, s("rpg.area.quest")), e.stars(h)], () => this.enterArea(l), { class: "rpg-area-card".concat(d ? " is-locked" : "").concat(p ? " is-mastered" : ""), "data-stars": String(h), "data-locked": String(d), "data-unit": l.unitId, ...d ? { disabled: true } : {} });
        return u("li", {}, k);
      }, o = e.bossStars() >= 1, a = u("div", { class: "rpg-panel rpg-final" }, u("h2", {}, s("rpg.final.title")), u("p", {}, s(n ? "rpg.final.ready" : "rpg.final.locked")), e.stars(e.bossStars(), "final-stars"), u("div", { class: "rpg-actions" }, I("final-boss", s("rpg.final.go"), () => this.finalIntro(), { class: "btn btn-primary", "data-stars": String(e.bossStars()), "data-locked": String(!n), ...n ? {} : { disabled: true } }), o ? I("finish", s("rpg.final.finish"), () => this.story("outro", 0), { class: "btn" }) : null)), c = u("section", { class: "rpg-areas" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "areas-title" }, s("rpg.areas.title")), u("p", { class: "subject" }, s("rpg.areas.intro")), r ? u("p", { class: "rpg-note rpg-message", role: "status", testid: "message" }, r) : null, u("ul", { class: "rpg-area-list", testid: "area-list" }, this.layout.areas.map(i)), a, u("div", { class: "rpg-actions" }, I("inventory", s("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.areas()), { class: "btn" }), I("to-title", s("rpg.to.title"), () => this.title(), { class: "btn btn-ghost" })));
      this.show("areas", c, { view: { areas: this.layout.areas.map((l) => ({ id: l.id, unit: l.unitId, locked: !e.isUnlocked(l.unitId), stars: e.unitStars(l.unitId) })), finalOpen: n, crowned: o, scrolls: this.scrolls.length, event: this.event } });
    }
    enterArea(e) {
      this.hp = Ie, this.event = "entered", this.world(e);
    }
    surroundingsText(e, s) {
      const n = this.s, r = n("rpg.where", { area: this.areaName(e), x: s.pos[0] + 1, y: s.pos[1] + 1 }), i = Xn(e, s);
      if (i.length === 0) return "".concat(r, " ").concat(n("rpg.near.none"));
      const o = (a) => {
        const c = Us(s.pos, a.at);
        return n("rpg.side.".concat(c));
      };
      return "".concat(r, " ").concat(n("rpg.near", { names: i.map((a) => "".concat(this.personName(e, a), " (").concat(o(a), ")")).join(", ") }));
    }
    sceneOf(e) {
      const { area: s, p: n } = e, r = Dt(s, n).map((i) => {
        var _a3, _b3;
        return i.kind === "npc" ? { at: i.at, kind: i.giver ? "giver" : "npc", n: 1, ...i.giver && !n.accepted ? { mark: true } : {} } : i.kind === "foe" ? { at: i.at, kind: "foe", n: (_b3 = (_a3 = s.foes.find((o) => o.id === i.id)) == null ? void 0 : _a3.n) != null ? _b3 : 1 } : { at: i.at, kind: "boss", n: 1 };
      });
      return { hero: n.pos, face: n.face, step: e.step, entities: r, gateOpen: this.gateOpen(s) };
    }
    world(e) {
      const s = this.session, n = this.s, r = this.progressOf(e);
      this.leaveWorld();
      const i = this.gateOpen(e), o = this.giverOf(e), a = Xi((A, j) => n("rpg.hp", { hp: A, max: j }), this.hp, Ie, "hero", "hero-hp"), c = u("div", { class: "rpg-canvas-host" }), l = u("p", { class: "rpg-surroundings", "aria-live": "polite", testid: "surroundings" }, this.surroundingsText(e, r)), d = u("p", { class: "rpg-message", testid: "message" }, this.takeMessage()), h = I("talk", n("rpg.talk"), () => this.talk(), { class: "pad-btn pad-talk", "aria-disabled": "true" }), p = (A, j) => I("move-".concat(A), j, () => this.move(A), { class: "pad-btn pad-".concat(A), "aria-label": n("rpg.move.".concat(A)) }), f = u("div", { class: "rpg-panel" }, u("h2", {}, n("rpg.pad")), u("div", { class: "rpg-pad", role: "group", "aria-label": n("rpg.pad") }, p("up", "▲"), p("left", "◀"), h, p("right", "▶"), p("down", "▼")), u("p", { class: "rpg-keys" }, n("rpg.keys"))), m = er(e, r), k = (A) => {
        const j = Dt(e, r).find((R) => R.goto === A.testid), O = A.kind === "gate" ? n("rpg.goto.gate") : n("rpg.goto", { name: j ? this.personName(e, j) : A.id });
        return u("li", {}, I(A.testid, O, () => this.gotoTarget(A.testid), { class: "btn btn-small", "data-kind": A.kind }));
      }, g = u("div", { class: "rpg-panel" }, u("h2", {}, n("rpg.targets")), u("ul", { class: "rpg-targets", testid: "targets" }, m.map(k))), b = e.foes.filter((A) => r.foesDown.includes(A.id)).length, v = (A, j, O) => u("li", { class: O ? "is-done" : "", testid: "quest-".concat(A), "data-done": String(O) }, u("span", { class: "tick", "aria-hidden": "true" }, O ? "✔" : "○"), u("span", {}, j), u("span", { class: "sr-only" }, O ? " (".concat(n("rpg.quest.done"), ")") : " (".concat(n("rpg.quest.todo"), ")"))), $ = u("div", { class: "rpg-panel rpg-quest", testid: "quest-log" }, u("h2", {}, n("rpg.quest.title")), u("ol", {}, v("talk", n("rpg.quest.talk", { name: o ? this.npcName(e, o.id) : "" }), r.accepted), e.foes.length > 0 ? v("foes", n("rpg.quest.foes", { done: b, total: e.foes.length }), b === e.foes.length && r.accepted) : null, v("boss", n("rpg.quest.boss", { name: this.bossName(e) }), r.bossDown), e.gate ? v("gate", n("rpg.quest.gate"), i) : null)), S = u("section", { class: "rpg-world" }, u("header", { class: "rpg-hud" }, u("h1", { class: "screen-title rpg-area-name", tabindex: "-1", testid: "area-name" }, this.areaName(e)), u("div", { class: "rpg-hud-tools" }, a.el, I("inventory", n("rpg.inventory", { n: this.scrolls.length }), () => this.inventory(() => this.world(e)), { class: "btn btn-small" }), I("to-areas", n("rpg.to.areas"), () => this.areas(), { class: "btn btn-small" }))), u("div", { class: "rpg-stage" }, u("div", { class: "rpg-view" }, c, l, u("div", { class: "rpg-note" }, d), $), u("aside", { class: "rpg-side" }, f, g)));
      this.session.render("world", S, { unitId: e.unitId, view: this.worldView(e, r, false) });
      const _ = new oz({ area: e, pal: this.pal, seed: Eu("".concat(s.pack.id, ":").concat(e.id)) % 997, reduced: this.reduced, skin: this.skin });
      _.canvas.setAttribute("role", "img"), _.canvas.setAttribute("aria-label", n("rpg.map.label", { area: this.areaName(e) })), _.canvas.setAttribute("data-testid", "world-canvas"), c.appendChild(_.canvas);
      const w = { area: e, p: r, canvas: _, surroundings: l, message: d, talk: h, hp: a, walking: false, step: 0, timer: 0 };
      this.w = w, _.fit(c), this.refresh();
    }
    refresh() {
      const e = this.w;
      if (!e) return;
      const { area: s, p: n } = e;
      e.canvas.setScene(this.sceneOf(e)), e.surroundings.textContent = this.surroundingsText(s, n);
      const r = Xn(s, n)[0];
      e.talk.textContent = r && r.kind !== "npc" ? this.s("rpg.fight") : this.s("rpg.talk"), e.talk.setAttribute("aria-disabled", String(!r)), e.hp.set(this.hp, Ie), this.session.publish("world", { unitId: s.unitId, view: this.worldView(s, n, e.walking) });
    }
    say(e, s = "") {
      const n = this.w;
      this.event = s, n && (n.message.textContent = e), this.session.live(e), this.refresh();
    }
    onKey(e) {
      if (!this.w || this.session.screen !== "world" || e.ctrlKey || e.metaKey || e.altKey || Es(e.target)) return;
      const n = vz[e.key];
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
      const i = pz(n, r, e, this.gateOpen(n));
      i.kind === "move" ? (r.pos = i.pos, s.step = s.step === 0 ? 1 : 0, this.event = "moved", this.refresh()) : i.kind === "bump" ? this.interact(i.person) : i.kind === "gate" ? this.areas() : Jt(n.rows, Ji(r.pos, e)) === "G" ? this.say(this.s("rpg.msg.gate.shut"), "gate-shut") : this.refresh();
    }
    talk() {
      const e = this.w;
      if (!e || e.walking) return;
      const s = Xn(e.area, e.p)[0];
      if (!s) return this.say(this.s("rpg.talk.none"), "nobody");
      e.p.face = Us(e.p.pos, s.at), this.interact(s);
    }
    interact(e) {
      const s = this.w;
      if (!s) return;
      const { area: n, p: r } = s;
      if (e.kind === "npc") return this.dialogue(n, e.id, 0);
      const i = this.giverOf(n);
      if (Qn(n, r) === "talk" && i) return this.say(this.s("rpg.msg.need.giver", { name: this.npcName(n, i.id) }), "need-giver");
      const o = n.foes.filter((a) => !r.foesDown.includes(a.id)).length;
      if (e.kind === "boss" && o > 0) return this.say(this.s("rpg.msg.need.foes", { n: o }), "need-foes");
      this.startBattle(n, e);
    }
    gotoTarget(e) {
      const s = this.w;
      if (!s || s.walking) return;
      const { area: n, p: r } = s, i = this.gateOpen(n), o = Qi(n, r, e, i);
      if (!o) return this.say(this.s("rpg.msg.noway"), "noway");
      const a = er(n, r).find((d) => d.testid === e), c = () => {
        if (s.walking = false, a && (r.face = Us(r.pos, a.at)), (a == null ? void 0 : a.kind) === "gate" && i && n.gate && r.pos[0] === n.gate[0] && r.pos[1] === n.gate[1]) return this.areas();
        this.say("", "arrived");
      };
      if (o.length === 0) return c();
      if (s.walking = true, this.reduced) {
        for (let d = 0; d < o.length; d++) {
          const h = o[d];
          r.face = Us(r.pos, h), r.pos = h;
        }
        return c();
      }
      this.event = "walking", this.refresh();
      const l = (d) => {
        if (this.w !== s) return;
        const h = o[d];
        r.face = Us(r.pos, h), r.pos = h, s.step = s.step === 0 ? 1 : 0, this.refresh(), d + 1 < o.length ? s.timer = window.setTimeout(() => l(d + 1), bz) : c();
      };
      l(0);
    }
    dialogueLines(e, s) {
      var _a3;
      const n = this.s, r = this.progressOf(e), i = this.session, o = Qn(e, r), a = this.bossName(e), c = e.foes.filter((h) => !r.foesDown.includes(h.id)).length, l = s.quest ? o === "foes" ? n("rpg.sage.hint", { n: c, boss: a }) : o === "boss" ? n("rpg.sage.boss", { boss: a }) : o === "done" ? this.gateOpen(e) ? n("rpg.sage.done") : n("rpg.sage.retry") : null : null;
      if (s.lines.length === 0) {
        const h = [n("rpg.auto.sage.1", { hero: this.heroName(), unit: i.unitTitle(e.unitId) }), n("rpg.auto.sage.2", { n: e.foes.length, boss: a }), n("rpg.auto.sage.3")];
        return o === "talk" ? h : [(_a3 = l != null ? l : h[0]) != null ? _a3 : ""];
      }
      const d = s.lines.map((h) => i.t(h));
      return l ? [...d, l] : d;
    }
    dialogue(e, s, n) {
      var _a3, _b3;
      const r = this.session, i = this.s, o = e.npcs.find(($) => $.id === s);
      if (!o) return this.world(e);
      const a = this.progressOf(e), c = this.dialogueLines(e, o), l = Math.max(0, Math.min(n, c.length - 1)), d = l >= c.length - 1, h = this.npcName(e, o.id), p = o.quest && !a.accepted, f = o.quest && a.done && r.unitStars(e.unitId) < 3, m = () => {
        a.accepted = true, this.message = i("rpg.msg.accepted", { area: this.areaName(e) }), this.event = "accepted", this.world(e);
      }, k = () => this.replay(e), g = () => {
        this.event = "talked", this.world(e);
      }, b = o.quest ? hu : pu, v = u("section", { class: "rpg-dialogue" }, u("h1", { class: "screen-title rpg-name", tabindex: "-1", testid: "dialogue-name" }, h), u("div", { class: "rpg-speaker" }, _u({ sprite: b, pal: this.pal, image: this.assetOf((_a3 = o.portrait) != null ? _a3 : this.layout.sprites.npc), alt: i("rpg.portrait", { name: h }) }), u("div", { class: "rpg-textbox", testid: "dialogue-text" }, u("p", {}, (_b3 = c[l]) != null ? _b3 : ""), u("span", { class: "rpg-count" }, i("rpg.dialogue.count", { n: l + 1, total: c.length })))), u("div", { class: "rpg-actions" }, d ? [p ? I("accept-quest", i("rpg.quest.accept"), m, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, f ? I("replay-quest", i("rpg.qd.replay"), k, { class: "btn btn-primary btn-big", "data-autofocus": "" }) : null, I("dialogue-bye", i(p ? "rpg.dialogue.later" : "rpg.dialogue.bye"), g, { class: p || f ? "btn btn-big" : "btn btn-primary btn-big", ...p || f ? {} : { "data-autofocus": "" } })] : I("dialogue-next", i("rpg.dialogue.next"), () => this.dialogue(e, s, l + 1), { class: "btn btn-primary btn-big", "data-autofocus": "" })));
      this.show("dialogue", v, { unitId: e.unitId, view: { npc: o.id, giver: o.quest, line: l, total: c.length, last: d, offer: p, replay: f } });
    }
    itemsFor(e, s) {
      const n = this.session, r = e.filter((o) => n.canAsk(n.item(o)));
      if (r.length > 0) return r;
      const i = s ? ai(n.pack, s.unitId).filter((o) => n.canAsk(n.item(o))) : [];
      return i.length > 0 ? i : n.pack.items.map((o) => o.id).filter((o) => n.canAsk(n.item(o)));
    }
    newFight(e) {
      var _a3, _b3;
      const s = this.session, n = e.kind === "foe" ? Vi : D$, r = this.itemsFor(e.items, e.area), i = (_a3 = e.area) == null ? void 0 : _a3.unitId;
      return { id: e.id, kind: e.kind, area: e.area, name: e.name, sprite: e.sprite, items: r, size: (_b3 = e.size) != null ? _b3 : r.length, battle: F$(e.hp, n, this.hp, Ie), run: s.startRun(r, { kind: e.kind === "final" ? "boss" : "unit", ...i ? { unitId: i } : {}, ...e.size ? { size: e.size } : {} }), scoring: true, counts: e.counts, scores: [], last: null, newScroll: false };
    }
    startBattle(e, s) {
      const n = this.progressOf(e), r = s.kind === "foe" ? (() => {
        var _a3, _b3, _c2, _d2, _e2;
        const i = e.foes.find((o) => o.id === s.id);
        return this.newFight({ id: s.id, kind: "foe", area: e, name: this.foeName(e, s.id), sprite: (_c2 = (_b3 = Cs[(((_a3 = i == null ? void 0 : i.n) != null ? _a3 : 1) - 1) % Cs.length]) != null ? _b3 : Cs[0]) != null ? _c2 : Jn, items: (_d2 = i == null ? void 0 : i.items) != null ? _d2 : [], hp: (_e2 = i == null ? void 0 : i.hp) != null ? _e2 : 200, counts: !n.counted.includes(s.id) });
      })() : this.newFight({ id: s.id, kind: "boss", area: e, name: this.bossName(e), sprite: Jn, items: ai(this.session.pack, e.unitId), hp: e.boss.hp, counts: !n.counted.includes(s.id) });
      this.battleIntro(r);
    }
    sceneFor(e) {
      const s = this.s, n = this.heroName();
      return gz({ words: { hero: n, foeName: e.name, foeLine: (r, i) => s("rpg.hp", { hp: r, max: i }), heroLine: (r, i) => s("rpg.hp", { hp: r, max: i }), streakLine: (r, i) => s("rpg.battle.streak", { n: r, m: i }), alt: s("rpg.battle.alt", { hero: n, foe: e.name }) }, pal: this.pal, seed: Eu("".concat(this.session.pack.id, ":").concat(e.id)) % 997, skin: this.skin, foe: e.sprite, boss: e.kind !== "foe", battle: e.battle });
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
        const l = B$(e.battle, { correct: c.result.correct, score: c.result.score });
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
      if (this.settle(e), this.hp = Ie, this.event = "inn", this.message = this.s("rpg.msg.inn", { name: e.name }), e.area) {
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
        const c = Math.min(xu, Ie - this.hp);
        return this.hp = Math.min(Ie, this.hp + xu), this.event = "won", this.message = "".concat(n("rpg.msg.won", { name: e.name })).concat(c > 0 ? " ".concat(n("rpg.msg.rest", { n: c })) : ""), this.world(r);
      }
      i.bossDown = true, i.done = true;
      const o = i.scores.length > 0 ? zu(i.scores) : 1, a = s.recordUnit({ unitId: r.unitId }, o);
      s.playCue("unit-complete"), this.event = "quest-done", this.questDone(r, a.stars, o, a.unlocked);
    }
    replay(e) {
      const s = this.progressOf(e);
      this.progress.set(e.id, dz(e, s)), this.hp = Ie, this.event = "replay", this.world(e);
    }
    questDone(e, s, n, r) {
      const i = this.session, o = this.s, a = Math.round(n * 100), c = i.isMastered(e.unitId), l = this.layout.areas.filter((h) => r.includes(h.unitId)).map((h) => this.areaName(h)), d = u("section", { class: "rpg-done" }, u("h1", { class: "screen-title", tabindex: "-1", testid: "quest-title" }, o("rpg.qd.title")), u("p", { class: "subject" }, this.areaName(e)), i.stars(s, "quest-stars"), u("p", { class: "big-number", testid: "quest-accuracy" }, o("rpg.qd.accuracy", { n: a })), u("p", { class: "message ".concat(c ? "message-ok" : "message-bad"), testid: "quest-gate" }, o(c ? "rpg.qd.gate.open" : "rpg.qd.gate.shut")), l.length > 0 ? u("p", { class: "message", testid: "quest-unlocked" }, o("rpg.qd.unlocked", { units: l.join(", ") })) : null, s < 3 ? u("p", { class: "subject" }, o("rpg.quest.replay.hint")) : null, u("div", { class: "rpg-actions" }, I("to-world", o("rpg.qd.world"), () => this.world(e), { class: c ? "btn btn-primary btn-big" : "btn btn-big", ...c ? { "data-autofocus": "" } : {} }), s < 3 ? I("replay-quest", o("rpg.qd.replay"), () => this.replay(e), { class: c ? "btn btn-big" : "btn btn-primary btn-big", ...c ? {} : { "data-autofocus": "" } }) : null, I("to-areas", o("rpg.to.areas"), () => this.areas(), { class: "btn btn-big" })));
      this.show("quest-done", d, { unitId: e.unitId, view: { area: e.id, unit: e.unitId, stars: s, accuracy: a, mastered: c, gateOpen: c, unlocked: r } });
    }
    finalIntro() {
      const e = this.session;
      this.hp = Ie;
      const s = e.pack.items.map((r) => r.id), n = this.newFight({ id: "final", kind: "final", area: null, name: this.finalName(), sprite: Jn, items: s, hp: this.layout.finalBoss.hp, size: Math.min(this.layout.finalBoss.size, Math.max(1, s.length)), counts: true });
      this.battleIntro(n);
    }
    finalWon(e) {
      const s = this.session, n = e.scores.length > 0 ? zu(e.scores) : 1;
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
      e.finish(), this.show("end", Ds(e, { title: s("rpg.outro.title"), sub: s("rpg.end.sub"), stats: u("p", { class: "subject", testid: "end-scrolls" }, s("rpg.end.scrolls", { n: this.scrolls.length })), onAgain: () => this.areas(), onTitle: () => this.title() }), { view: { scrolls: this.scrolls.length, areas: this.layout.areas.length, crowned: e.bossStars() >= 1 } });
    }
  }
  const Au = /* @__PURE__ */ (() => {
    let t = null;
    return { id: ju, mount(e) {
      t = new wz(e), t.mount();
    }, unmount() {
      t == null ? void 0 : t.unmount(), t = null;
    } };
  })();
  document.addEventListener("error", (t) => {
    const e = t.target;
    (e instanceof HTMLImageElement || e instanceof HTMLMediaElement || e instanceof SVGImageElement) && console.error("media failed to load: ".concat(e.currentSrc || e.getAttribute("src") || e.getAttribute("href") || "(no source)"));
  }, true);
  const Je = T0();
  for (const t of U0) Je.registerItemKind(t.kind, t);
  Je.registerShell(tu.id, tu), Je.registerShell(Wd.id, Wd), Je.registerShell(Xd.id, Xd), Je.registerShell(Au.id, Au), Je.registerShell(du.id, du), Je.registerShell(Ld.id, Ld), window.EduEngine = Je, Ou(), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => Je.start()) : Je.start();
})();

var Qr = { exports: {} }, ei = {};
var gh;
function L0() {
  if (gh) return ei;
  gh = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function f(r, h, S) {
    var w = null;
    if (S !== void 0 && (w = "" + S), h.key !== void 0 && (w = "" + h.key), "key" in h) {
      S = {};
      for (var E in h)
        E !== "key" && (S[E] = h[E]);
    } else S = h;
    return h = S.ref, {
      $$typeof: c,
      type: r,
      key: w,
      ref: h !== void 0 ? h : null,
      props: S
    };
  }
  return ei.Fragment = o, ei.jsx = f, ei.jsxs = f, ei;
}
var vh;
function q0() {
  return vh || (vh = 1, Qr.exports = L0()), Qr.exports;
}
var ee = q0(), Zr = { exports: {} }, le = {};
var yh;
function j0() {
  if (yh) return le;
  yh = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), w = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), D = Symbol.iterator;
  function q(g) {
    return g === null || typeof g != "object" ? null : (g = D && g[D] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var H = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, W = {};
  function Z(g, N, j) {
    this.props = g, this.context = N, this.refs = W, this.updater = j || H;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(g, N) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, N, "setState");
  }, Z.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function te() {
  }
  te.prototype = Z.prototype;
  function ne(g, N, j) {
    this.props = g, this.context = N, this.refs = W, this.updater = j || H;
  }
  var me = ne.prototype = new te();
  me.constructor = ne, L(me, Z.prototype), me.isPureReactComponent = !0;
  var ye = Array.isArray;
  function $() {
  }
  var G = { H: null, A: null, T: null, S: null }, re = Object.prototype.hasOwnProperty;
  function ae(g, N, j) {
    var k = j.ref;
    return {
      $$typeof: c,
      type: g,
      key: N,
      ref: k !== void 0 ? k : null,
      props: j
    };
  }
  function Ke(g, N) {
    return ae(g.type, N, g.props);
  }
  function se(g) {
    return typeof g == "object" && g !== null && g.$$typeof === c;
  }
  function be(g) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(j) {
      return N[j];
    });
  }
  var F = /\/+/g;
  function Ee(g, N) {
    return typeof g == "object" && g !== null && g.key != null ? be("" + g.key) : N.toString(36);
  }
  function I(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then($, $) : (g.status = "pending", g.then(
          function(N) {
            g.status === "pending" && (g.status = "fulfilled", g.value = N);
          },
          function(N) {
            g.status === "pending" && (g.status = "rejected", g.reason = N);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function M(g, N, j, k, P) {
    var ie = typeof g;
    (ie === "undefined" || ie === "boolean") && (g = null);
    var fe = !1;
    if (g === null) fe = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case c:
            case o:
              fe = !0;
              break;
            case U:
              return fe = g._init, M(
                fe(g._payload),
                N,
                j,
                k,
                P
              );
          }
      }
    if (fe)
      return P = P(g), fe = k === "" ? "." + Ee(g, 0) : k, ye(P) ? (j = "", fe != null && (j = fe.replace(F, "$&/") + "/"), M(P, N, j, "", function(Qt) {
        return Qt;
      })) : P != null && (se(P) && (P = Ke(
        P,
        j + (P.key == null || g && g.key === P.key ? "" : ("" + P.key).replace(
          F,
          "$&/"
        ) + "/") + fe
      )), N.push(P)), 1;
    fe = 0;
    var Je = k === "" ? "." : k + ":";
    if (ye(g))
      for (var xe = 0; xe < g.length; xe++)
        k = g[xe], ie = Je + Ee(k, xe), fe += M(
          k,
          N,
          j,
          ie,
          P
        );
    else if (xe = q(g), typeof xe == "function")
      for (g = xe.call(g), xe = 0; !(k = g.next()).done; )
        k = k.value, ie = Je + Ee(k, xe++), fe += M(
          k,
          N,
          j,
          ie,
          P
        );
    else if (ie === "object") {
      if (typeof g.then == "function")
        return M(
          I(g),
          N,
          j,
          k,
          P
        );
      throw N = String(g), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return fe;
  }
  function x(g, N, j) {
    if (g == null) return g;
    var k = [], P = 0;
    return M(g, k, "", "", function(ie) {
      return N.call(j, ie, P++);
    }), k;
  }
  function Q(g) {
    if (g._status === -1) {
      var N = g._result;
      N = N(), N.then(
        function(j) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = j);
        },
        function(j) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = j);
        }
      ), g._status === -1 && (g._status = 0, g._result = N);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  }, Se = {
    map: x,
    forEach: function(g, N, j) {
      x(
        g,
        function() {
          N.apply(this, arguments);
        },
        j
      );
    },
    count: function(g) {
      var N = 0;
      return x(g, function() {
        N++;
      }), N;
    },
    toArray: function(g) {
      return x(g, function(N) {
        return N;
      }) || [];
    },
    only: function(g) {
      if (!se(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  };
  return le.Activity = A, le.Children = Se, le.Component = Z, le.Fragment = f, le.Profiler = h, le.PureComponent = ne, le.StrictMode = r, le.Suspense = m, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return G.H.useMemoCache(g);
    }
  }, le.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(g, N, j) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var k = L({}, g.props), P = g.key;
    if (N != null)
      for (ie in N.key !== void 0 && (P = "" + N.key), N)
        !re.call(N, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && N.ref === void 0 || (k[ie] = N[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) k.children = j;
    else if (1 < ie) {
      for (var fe = Array(ie), Je = 0; Je < ie; Je++)
        fe[Je] = arguments[Je + 2];
      k.children = fe;
    }
    return ae(g.type, P, k);
  }, le.createContext = function(g) {
    return g = {
      $$typeof: w,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: S,
      _context: g
    }, g;
  }, le.createElement = function(g, N, j) {
    var k, P = {}, ie = null;
    if (N != null)
      for (k in N.key !== void 0 && (ie = "" + N.key), N)
        re.call(N, k) && k !== "key" && k !== "__self" && k !== "__source" && (P[k] = N[k]);
    var fe = arguments.length - 2;
    if (fe === 1) P.children = j;
    else if (1 < fe) {
      for (var Je = Array(fe), xe = 0; xe < fe; xe++)
        Je[xe] = arguments[xe + 2];
      P.children = Je;
    }
    if (g && g.defaultProps)
      for (k in fe = g.defaultProps, fe)
        P[k] === void 0 && (P[k] = fe[k]);
    return ae(g, ie, P);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(g) {
    return { $$typeof: E, render: g };
  }, le.isValidElement = se, le.lazy = function(g) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: g },
      _init: Q
    };
  }, le.memo = function(g, N) {
    return {
      $$typeof: v,
      type: g,
      compare: N === void 0 ? null : N
    };
  }, le.startTransition = function(g) {
    var N = G.T, j = {};
    G.T = j;
    try {
      var k = g(), P = G.S;
      P !== null && P(j, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then($, oe);
    } catch (ie) {
      oe(ie);
    } finally {
      N !== null && j.types !== null && (N.types = j.types), G.T = N;
    }
  }, le.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, le.use = function(g) {
    return G.H.use(g);
  }, le.useActionState = function(g, N, j) {
    return G.H.useActionState(g, N, j);
  }, le.useCallback = function(g, N) {
    return G.H.useCallback(g, N);
  }, le.useContext = function(g) {
    return G.H.useContext(g);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(g, N) {
    return G.H.useDeferredValue(g, N);
  }, le.useEffect = function(g, N) {
    return G.H.useEffect(g, N);
  }, le.useEffectEvent = function(g) {
    return G.H.useEffectEvent(g);
  }, le.useId = function() {
    return G.H.useId();
  }, le.useImperativeHandle = function(g, N, j) {
    return G.H.useImperativeHandle(g, N, j);
  }, le.useInsertionEffect = function(g, N) {
    return G.H.useInsertionEffect(g, N);
  }, le.useLayoutEffect = function(g, N) {
    return G.H.useLayoutEffect(g, N);
  }, le.useMemo = function(g, N) {
    return G.H.useMemo(g, N);
  }, le.useOptimistic = function(g, N) {
    return G.H.useOptimistic(g, N);
  }, le.useReducer = function(g, N, j) {
    return G.H.useReducer(g, N, j);
  }, le.useRef = function(g) {
    return G.H.useRef(g);
  }, le.useState = function(g) {
    return G.H.useState(g);
  }, le.useSyncExternalStore = function(g, N, j) {
    return G.H.useSyncExternalStore(
      g,
      N,
      j
    );
  }, le.useTransition = function() {
    return G.H.useTransition();
  }, le.version = "19.2.0", le;
}
var ph;
function ss() {
  return ph || (ph = 1, Zr.exports = j0()), Zr.exports;
}
var b = ss(), Kr = { exports: {} }, ti = {}, Jr = { exports: {} }, Wr = {};
var bh;
function G0() {
  return bh || (bh = 1, (function(c) {
    function o(M, x) {
      var Q = M.length;
      M.push(x);
      e: for (; 0 < Q; ) {
        var oe = Q - 1 >>> 1, Se = M[oe];
        if (0 < h(Se, x))
          M[oe] = x, M[Q] = Se, Q = oe;
        else break e;
      }
    }
    function f(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var x = M[0], Q = M.pop();
      if (Q !== x) {
        M[0] = Q;
        e: for (var oe = 0, Se = M.length, g = Se >>> 1; oe < g; ) {
          var N = 2 * (oe + 1) - 1, j = M[N], k = N + 1, P = M[k];
          if (0 > h(j, Q))
            k < Se && 0 > h(P, j) ? (M[oe] = P, M[k] = Q, oe = k) : (M[oe] = j, M[N] = Q, oe = N);
          else if (k < Se && 0 > h(P, Q))
            M[oe] = P, M[k] = Q, oe = k;
          else break e;
        }
      }
      return x;
    }
    function h(M, x) {
      var Q = M.sortIndex - x.sortIndex;
      return Q !== 0 ? Q : M.id - x.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      c.unstable_now = function() {
        return S.now();
      };
    } else {
      var w = Date, E = w.now();
      c.unstable_now = function() {
        return w.now() - E;
      };
    }
    var m = [], v = [], U = 1, A = null, D = 3, q = !1, H = !1, L = !1, W = !1, Z = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
    function me(M) {
      for (var x = f(v); x !== null; ) {
        if (x.callback === null) r(v);
        else if (x.startTime <= M)
          r(v), x.sortIndex = x.expirationTime, o(m, x);
        else break;
        x = f(v);
      }
    }
    function ye(M) {
      if (L = !1, me(M), !H)
        if (f(m) !== null)
          H = !0, $ || ($ = !0, be());
        else {
          var x = f(v);
          x !== null && I(ye, x.startTime - M);
        }
    }
    var $ = !1, G = -1, re = 5, ae = -1;
    function Ke() {
      return W ? !0 : !(c.unstable_now() - ae < re);
    }
    function se() {
      if (W = !1, $) {
        var M = c.unstable_now();
        ae = M;
        var x = !0;
        try {
          e: {
            H = !1, L && (L = !1, te(G), G = -1), q = !0;
            var Q = D;
            try {
              t: {
                for (me(M), A = f(m); A !== null && !(A.expirationTime > M && Ke()); ) {
                  var oe = A.callback;
                  if (typeof oe == "function") {
                    A.callback = null, D = A.priorityLevel;
                    var Se = oe(
                      A.expirationTime <= M
                    );
                    if (M = c.unstable_now(), typeof Se == "function") {
                      A.callback = Se, me(M), x = !0;
                      break t;
                    }
                    A === f(m) && r(m), me(M);
                  } else r(m);
                  A = f(m);
                }
                if (A !== null) x = !0;
                else {
                  var g = f(v);
                  g !== null && I(
                    ye,
                    g.startTime - M
                  ), x = !1;
                }
              }
              break e;
            } finally {
              A = null, D = Q, q = !1;
            }
            x = void 0;
          }
        } finally {
          x ? be() : $ = !1;
        }
      }
    }
    var be;
    if (typeof ne == "function")
      be = function() {
        ne(se);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), Ee = F.port2;
      F.port1.onmessage = se, be = function() {
        Ee.postMessage(null);
      };
    } else
      be = function() {
        Z(se, 0);
      };
    function I(M, x) {
      G = Z(function() {
        M(c.unstable_now());
      }, x);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, c.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : re = 0 < M ? Math.floor(1e3 / M) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, c.unstable_next = function(M) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = D;
      }
      var Q = D;
      D = x;
      try {
        return M();
      } finally {
        D = Q;
      }
    }, c.unstable_requestPaint = function() {
      W = !0;
    }, c.unstable_runWithPriority = function(M, x) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = D;
      D = M;
      try {
        return x();
      } finally {
        D = Q;
      }
    }, c.unstable_scheduleCallback = function(M, x, Q) {
      var oe = c.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? oe + Q : oe) : Q = oe, M) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return Se = Q + Se, M = {
        id: U++,
        callback: x,
        priorityLevel: M,
        startTime: Q,
        expirationTime: Se,
        sortIndex: -1
      }, Q > oe ? (M.sortIndex = Q, o(v, M), f(m) === null && M === f(v) && (L ? (te(G), G = -1) : L = !0, I(ye, Q - oe))) : (M.sortIndex = Se, o(m, M), H || q || (H = !0, $ || ($ = !0, be()))), M;
    }, c.unstable_shouldYield = Ke, c.unstable_wrapCallback = function(M) {
      var x = D;
      return function() {
        var Q = D;
        D = x;
        try {
          return M.apply(this, arguments);
        } finally {
          D = Q;
        }
      };
    };
  })(Wr)), Wr;
}
var Sh;
function Y0() {
  return Sh || (Sh = 1, Jr.exports = G0()), Jr.exports;
}
var $r = { exports: {} }, ut = {};
var Eh;
function k0() {
  if (Eh) return ut;
  Eh = 1;
  var c = ss();
  function o(m) {
    var v = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        v += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + m + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var r = {
    d: {
      f,
      r: function() {
        throw Error(o(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, h = Symbol.for("react.portal");
  function S(m, v, U) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: A == null ? null : "" + A,
      children: m,
      containerInfo: v,
      implementation: U
    };
  }
  var w = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(m, v) {
    if (m === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ut.createPortal = function(m, v) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(o(299));
    return S(m, v, null, U);
  }, ut.flushSync = function(m) {
    var v = w.T, U = r.p;
    try {
      if (w.T = null, r.p = 2, m) return m();
    } finally {
      w.T = v, r.p = U, r.d.f();
    }
  }, ut.preconnect = function(m, v) {
    typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, r.d.C(m, v));
  }, ut.prefetchDNS = function(m) {
    typeof m == "string" && r.d.D(m);
  }, ut.preinit = function(m, v) {
    if (typeof m == "string" && v && typeof v.as == "string") {
      var U = v.as, A = E(U, v.crossOrigin), D = typeof v.integrity == "string" ? v.integrity : void 0, q = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      U === "style" ? r.d.S(
        m,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: A,
          integrity: D,
          fetchPriority: q
        }
      ) : U === "script" && r.d.X(m, {
        crossOrigin: A,
        integrity: D,
        fetchPriority: q,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, ut.preinitModule = function(m, v) {
    if (typeof m == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var U = E(
            v.as,
            v.crossOrigin
          );
          r.d.M(m, {
            crossOrigin: U,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && r.d.M(m);
  }, ut.preload = function(m, v) {
    if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var U = v.as, A = E(U, v.crossOrigin);
      r.d.L(m, U, {
        crossOrigin: A,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, ut.preloadModule = function(m, v) {
    if (typeof m == "string")
      if (v) {
        var U = E(v.as, v.crossOrigin);
        r.d.m(m, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: U,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else r.d.m(m);
  }, ut.requestFormReset = function(m) {
    r.d.r(m);
  }, ut.unstable_batchedUpdates = function(m, v) {
    return m(v);
  }, ut.useFormState = function(m, v, U) {
    return w.H.useFormState(m, v, U);
  }, ut.useFormStatus = function() {
    return w.H.useHostTransitionStatus();
  }, ut.version = "19.2.0", ut;
}
var zh;
function Lh() {
  if (zh) return $r.exports;
  zh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), $r.exports = k0(), $r.exports;
}
var Th;
function X0() {
  if (Th) return ti;
  Th = 1;
  var c = Y0(), o = ss(), f = Lh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function S(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function w(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function E(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (S(e) !== e)
      throw Error(r(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = S(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === n) return m(a), e;
          if (i === l) return m(a), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) n = a, l = i;
      else {
        for (var u = !1, s = a.child; s; ) {
          if (s === n) {
            u = !0, n = a, l = i;
            break;
          }
          if (s === l) {
            u = !0, l = a, n = i;
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === n) {
              u = !0, n = i, l = a;
              break;
            }
            if (s === l) {
              u = !0, l = i, n = a;
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (n.alternate !== l) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, D = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), Ke = Symbol.for("react.memo_cache_sentinel"), se = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case Z:
        return "Profiler";
      case W:
        return "StrictMode";
      case ye:
        return "Suspense";
      case $:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return "Portal";
        case ne:
          return e.displayName || "Context";
        case te:
          return (e._context.displayName || "Context") + ".Consumer";
        case me:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
        case re:
          t = e._payload, e = e._init;
          try {
            return Ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var I = Array.isArray, M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, oe = [], Se = -1;
  function g(e) {
    return { current: e };
  }
  function N(e) {
    0 > Se || (e.current = oe[Se], oe[Se] = null, Se--);
  }
  function j(e, t) {
    Se++, oe[Se] = e.current, e.current = t;
  }
  var k = g(null), P = g(null), ie = g(null), fe = g(null);
  function Je(e, t) {
    switch (j(ie, t), j(P, e), j(k, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? qd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = qd(t), e = jd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    N(k), j(k, e);
  }
  function xe() {
    N(k), N(P), N(ie);
  }
  function Qt(e) {
    e.memoizedState !== null && j(fe, e);
    var t = k.current, n = jd(t, e.type);
    t !== n && (j(P, e), j(k, n));
  }
  function ml(e) {
    P.current === e && (N(k), N(P)), fe.current === e && (N(fe), $a._currentValue = Q);
  }
  var gl, ri;
  function Zt(e) {
    if (gl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        gl = t && t[1] || "", ri = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gl + e + ri;
  }
  var Kt = !1;
  function vl(e, t) {
    if (!e || Kt) return "";
    Kt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (O) {
                  var _ = O;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  _ = O;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                _ = O;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (O) {
            if (O && _ && typeof O.stack == "string")
              return [O.stack, _.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = l.DetermineComponentFrameRoot(), u = i[0], s = i[1];
      if (u && s) {
        var d = u.split(`
`), T = s.split(`
`);
        for (a = l = 0; l < d.length && !d[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < T.length && !T[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === d.length || a === T.length)
          for (l = d.length - 1, a = T.length - 1; 1 <= l && 0 <= a && d[l] !== T[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (d[l] !== T[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || d[l] !== T[a]) {
                  var C = `
` + d[l].replace(" at new ", " at ");
                  return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Kt = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Zt(n) : "";
  }
  function Ru(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Zt(e.type);
      case 16:
        return Zt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Zt("Suspense Fallback") : Zt("Suspense");
      case 19:
        return Zt("SuspenseList");
      case 0:
      case 15:
        return vl(e.type, !1);
      case 11:
        return vl(e.type.render, !1);
      case 1:
        return vl(e.type, !0);
      case 31:
        return Zt("Activity");
      default:
        return "";
    }
  }
  function ia(e) {
    try {
      var t = "", n = null;
      do
        t += Ru(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var yl = Object.prototype.hasOwnProperty, ua = c.unstable_scheduleCallback, Y = c.unstable_cancelCallback, Re = c.unstable_shouldYield, Ie = c.unstable_requestPaint, He = c.unstable_now, st = c.unstable_getCurrentPriorityLevel, gn = c.unstable_ImmediatePriority, Vn = c.unstable_UserBlockingPriority, Jt = c.unstable_NormalPriority, ca = c.unstable_LowPriority, pt = c.unstable_IdlePriority, ra = c.log, Qn = c.unstable_setDisableYieldValue, vn = null, et = null;
  function yn(e) {
    if (typeof ra == "function" && Qn(e), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(vn, e);
      } catch {
      }
  }
  var bt = Math.clz32 ? Math.clz32 : Tm, Em = Math.log, zm = Math.LN2;
  function Tm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / zm | 0) | 0;
  }
  var si = 256, oi = 262144, fi = 4194304;
  function Zn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function di(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, i = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var s = l & 134217727;
    return s !== 0 ? (l = s & ~i, l !== 0 ? a = Zn(l) : (u &= s, u !== 0 ? a = Zn(u) : n || (n = s & ~e, n !== 0 && (a = Zn(n))))) : (s = l & ~i, s !== 0 ? a = Zn(s) : u !== 0 ? a = Zn(u) : n || (n = l & ~e, n !== 0 && (a = Zn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function sa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Am(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ys() {
    var e = fi;
    return fi <<= 1, (fi & 62914560) === 0 && (fi = 4194304), e;
  }
  function Uu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function oa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wm(e, t, n, l, a, i) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var s = e.entanglements, d = e.expirationTimes, T = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var C = 31 - bt(n), B = 1 << C;
      s[C] = 0, d[C] = -1;
      var _ = T[C];
      if (_ !== null)
        for (T[C] = null, C = 0; C < _.length; C++) {
          var O = _[C];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~B;
    }
    l !== 0 && ps(e, l, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function ps(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - bt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function bs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - bt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Ss(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Bu(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Bu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function xu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Es() {
    var e = x.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rh(e.type));
  }
  function zs(e, t) {
    var n = x.p;
    try {
      return x.p = e, t();
    } finally {
      x.p = n;
    }
  }
  var pn = Math.random().toString(36).slice(2), tt = "__reactFiber$" + pn, ot = "__reactProps$" + pn, pl = "__reactContainer$" + pn, Hu = "__reactEvents$" + pn, _m = "__reactListeners$" + pn, Nm = "__reactHandles$" + pn, Ts = "__reactResources$" + pn, fa = "__reactMarker$" + pn;
  function Lu(e) {
    delete e[tt], delete e[ot], delete e[Hu], delete e[_m], delete e[Nm];
  }
  function bl(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[pl] || n[tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Zd(e); e !== null; ) {
            if (n = e[tt]) return n;
            e = Zd(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Sl(e) {
    if (e = e[tt] || e[pl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function da(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function El(e) {
    var t = e[Ts];
    return t || (t = e[Ts] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[fa] = !0;
  }
  var As = /* @__PURE__ */ new Set(), ws = {};
  function Kn(e, t) {
    zl(e, t), zl(e + "Capture", t);
  }
  function zl(e, t) {
    for (ws[e] = t, e = 0; e < t.length; e++)
      As.add(t[e]);
  }
  var Mm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _s = {}, Ns = {};
  function Om(e) {
    return yl.call(Ns, e) ? !0 : yl.call(_s, e) ? !1 : Mm.test(e) ? Ns[e] = !0 : (_s[e] = !0, !1);
  }
  function hi(e, t, n) {
    if (Om(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function mi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Wt(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ms(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dm(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(u) {
          n = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(u) {
          n = "" + u;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function qu(e) {
    if (!e._valueTracker) {
      var t = Ms(e) ? "checked" : "value";
      e._valueTracker = Dm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Os(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Ms(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cm = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(
      Cm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ju(e, t, n, l, a, i, u, s) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? Gu(e, u, Nt(t)) : n != null ? Gu(e, u, Nt(n)) : l != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Nt(s) : e.removeAttribute("name");
  }
  function Ds(e, t, n, l, a, i, u, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        qu(e);
        return;
      }
      n = n != null ? "" + Nt(n) : "", t = t != null ? "" + Nt(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = s ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), qu(e);
  }
  function Gu(e, t, n) {
    t === "number" && gi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Tl(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cs(e, t, n) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Nt(n) : "";
  }
  function Rs(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (I(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Nt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), qu(e);
  }
  function Al(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Rm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Us(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Rm.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Bs(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && Us(e, a, l);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Us(e, i, t[i]);
  }
  function Yu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Um = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Bm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vi(e) {
    return Bm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $t() {
  }
  var ku = null;
  function Xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var wl = null, _l = null;
  function xs(e) {
    var t = Sl(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ju(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[ot] || null;
                if (!a) throw Error(r(90));
                ju(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Os(l);
          }
          break e;
        case "textarea":
          Cs(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Tl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Vu = !1;
  function Hs(e, t, n) {
    if (Vu) return e(t, n);
    Vu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Vu = !1, (wl !== null || _l !== null) && (lu(), wl && (t = wl, e = _l, _l = wl = null, xs(t), e)))
        for (t = 0; t < e.length; t++) xs(e[t]);
    }
  }
  function ha(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[ot] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, t, typeof n)
      );
    return n;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qu = !1;
  if (Ft)
    try {
      var ma = {};
      Object.defineProperty(ma, "passive", {
        get: function() {
          Qu = !0;
        }
      }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
    } catch {
      Qu = !1;
    }
  var bn = null, Zu = null, yi = null;
  function Ls() {
    if (yi) return yi;
    var e, t = Zu, n = t.length, l, a = "value" in bn ? bn.value : bn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (l = 1; l <= u && t[n - l] === a[i - l]; l++) ;
    return yi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bi() {
    return !0;
  }
  function qs() {
    return !1;
  }
  function ft(e) {
    function t(n, l, a, i, u) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bi : qs, this.isPropagationStopped = qs, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bi);
      },
      persist: function() {
      },
      isPersistent: bi
    }), t;
  }
  var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Si = ft(Jn), ga = A({}, Jn, { view: 0, detail: 0 }), xm = ft(ga), Ku, Ju, va, Ei = A({}, ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== va && (va && e.type === "mousemove" ? (Ku = e.screenX - va.screenX, Ju = e.screenY - va.screenY) : Ju = Ku = 0, va = e), Ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ju;
    }
  }), js = ft(Ei), Hm = A({}, Ei, { dataTransfer: 0 }), Lm = ft(Hm), qm = A({}, ga, { relatedTarget: 0 }), Wu = ft(qm), jm = A({}, Jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gm = ft(jm), Ym = A({}, Jn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), km = ft(Ym), Xm = A({}, Jn, { data: 0 }), Gs = ft(Xm), Vm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Qm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Km(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
  }
  function $u() {
    return Km;
  }
  var Jm = A({}, ga, {
    key: function(e) {
      if (e.key) {
        var t = Vm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
      return e.type === "keypress" ? pi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wm = ft(Jm), $m = A({}, Ei, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ys = ft($m), Fm = A({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), Pm = ft(Fm), Im = A({}, Jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eg = ft(Im), tg = A({}, Ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ng = ft(tg), lg = A({}, Jn, {
    newState: 0,
    oldState: 0
  }), ag = ft(lg), ig = [9, 13, 27, 32], Fu = Ft && "CompositionEvent" in window, ya = null;
  Ft && "documentMode" in document && (ya = document.documentMode);
  var ug = Ft && "TextEvent" in window && !ya, ks = Ft && (!Fu || ya && 8 < ya && 11 >= ya), Xs = " ", Vs = !1;
  function Qs(e, t) {
    switch (e) {
      case "keyup":
        return ig.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nl = !1;
  function cg(e, t) {
    switch (e) {
      case "compositionend":
        return Zs(t);
      case "keypress":
        return t.which !== 32 ? null : (Vs = !0, Xs);
      case "textInput":
        return e = t.data, e === Xs && Vs ? null : e;
      default:
        return null;
    }
  }
  function rg(e, t) {
    if (Nl)
      return e === "compositionend" || !Fu && Qs(e, t) ? (e = Ls(), yi = Zu = bn = null, Nl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ks && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ks(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sg[e.type] : t === "textarea";
  }
  function Js(e, t, n, l) {
    wl ? _l ? _l.push(l) : _l = [l] : wl = l, t = ou(t, "onChange"), 0 < t.length && (n = new Si(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var pa = null, ba = null;
  function og(e) {
    Rd(e, 0);
  }
  function zi(e) {
    var t = da(e);
    if (Os(t)) return e;
  }
  function Ws(e, t) {
    if (e === "change") return t;
  }
  var $s = !1;
  if (Ft) {
    var Pu;
    if (Ft) {
      var Iu = "oninput" in document;
      if (!Iu) {
        var Fs = document.createElement("div");
        Fs.setAttribute("oninput", "return;"), Iu = typeof Fs.oninput == "function";
      }
      Pu = Iu;
    } else Pu = !1;
    $s = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ps() {
    pa && (pa.detachEvent("onpropertychange", Is), ba = pa = null);
  }
  function Is(e) {
    if (e.propertyName === "value" && zi(ba)) {
      var t = [];
      Js(
        t,
        ba,
        e,
        Xu(e)
      ), Hs(og, t);
    }
  }
  function fg(e, t, n) {
    e === "focusin" ? (Ps(), pa = t, ba = n, pa.attachEvent("onpropertychange", Is)) : e === "focusout" && Ps();
  }
  function dg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zi(ba);
  }
  function hg(e, t) {
    if (e === "click") return zi(t);
  }
  function mg(e, t) {
    if (e === "input" || e === "change")
      return zi(t);
  }
  function gg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : gg;
  function Sa(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!yl.call(t, a) || !St(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function eo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function to(e, t) {
    var n = eo(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = eo(n);
    }
  }
  function no(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? no(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gi(e.document);
    }
    return t;
  }
  function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var vg = Ft && "documentMode" in document && 11 >= document.documentMode, Ml = null, tc = null, Ea = null, nc = !1;
  function ao(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nc || Ml == null || Ml !== gi(l) || (l = Ml, "selectionStart" in l && ec(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ea && Sa(Ea, l) || (Ea = l, l = ou(tc, "onSelect"), 0 < l.length && (t = new Si(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Ml)));
  }
  function Wn(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ol = {
    animationend: Wn("Animation", "AnimationEnd"),
    animationiteration: Wn("Animation", "AnimationIteration"),
    animationstart: Wn("Animation", "AnimationStart"),
    transitionrun: Wn("Transition", "TransitionRun"),
    transitionstart: Wn("Transition", "TransitionStart"),
    transitioncancel: Wn("Transition", "TransitionCancel"),
    transitionend: Wn("Transition", "TransitionEnd")
  }, lc = {}, io = {};
  Ft && (io = document.createElement("div").style, "AnimationEvent" in window || (delete Ol.animationend.animation, delete Ol.animationiteration.animation, delete Ol.animationstart.animation), "TransitionEvent" in window || delete Ol.transitionend.transition);
  function $n(e) {
    if (lc[e]) return lc[e];
    if (!Ol[e]) return e;
    var t = Ol[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in io)
        return lc[e] = t[n];
    return e;
  }
  var uo = $n("animationend"), co = $n("animationiteration"), ro = $n("animationstart"), yg = $n("transitionrun"), pg = $n("transitionstart"), bg = $n("transitioncancel"), so = $n("transitionend"), oo = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function Lt(e, t) {
    oo.set(e, t), Kn(t, [e]);
  }
  var Ti = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Ot = [], Dl = 0, ic = 0;
  function Ai() {
    for (var e = Dl, t = ic = Dl = 0; t < e; ) {
      var n = Ot[t];
      Ot[t++] = null;
      var l = Ot[t];
      Ot[t++] = null;
      var a = Ot[t];
      Ot[t++] = null;
      var i = Ot[t];
      if (Ot[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      i !== 0 && fo(n, a, i);
    }
  }
  function wi(e, t, n, l) {
    Ot[Dl++] = e, Ot[Dl++] = t, Ot[Dl++] = n, Ot[Dl++] = l, ic |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function uc(e, t, n, l) {
    return wi(e, t, n, l), _i(e);
  }
  function Fn(e, t) {
    return wi(e, null, null, t), _i(e);
  }
  function fo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= n, l = i.alternate, l !== null && (l.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - bt(n), e = i.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), i) : null;
  }
  function _i(e) {
    if (50 < Xa)
      throw Xa = 0, gr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Cl = {};
  function Sg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, l) {
    return new Sg(e, t, n, l);
  }
  function cc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function ho(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ni(e, t, n, l, a, i) {
    var u = 0;
    if (l = e, typeof e == "function") cc(e) && (u = 1);
    else if (typeof e == "string")
      u = w0(
        e,
        n,
        k.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ae:
          return e = Et(31, n, t, a), e.elementType = ae, e.lanes = i, e;
        case L:
          return Pn(n.children, a, i, t);
        case W:
          u = 8, a |= 24;
          break;
        case Z:
          return e = Et(12, n, t, a | 2), e.elementType = Z, e.lanes = i, e;
        case ye:
          return e = Et(13, n, t, a), e.elementType = ye, e.lanes = i, e;
        case $:
          return e = Et(19, n, t, a), e.elementType = $, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ne:
                u = 10;
                break e;
              case te:
                u = 9;
                break e;
              case me:
                u = 11;
                break e;
              case G:
                u = 14;
                break e;
              case re:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Et(u, n, t, a), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function Pn(e, t, n, l) {
    return e = Et(7, e, l, t), e.lanes = n, e;
  }
  function rc(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function mo(e) {
    var t = Et(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function sc(e, t, n) {
    return t = Et(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var go = /* @__PURE__ */ new WeakMap();
  function Dt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = go.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: ia(t)
      }, go.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ia(t)
    };
  }
  var Rl = [], Ul = 0, Mi = null, za = 0, Ct = [], Rt = 0, Sn = null, Yt = 1, kt = "";
  function It(e, t) {
    Rl[Ul++] = za, Rl[Ul++] = Mi, Mi = e, za = t;
  }
  function vo(e, t, n) {
    Ct[Rt++] = Yt, Ct[Rt++] = kt, Ct[Rt++] = Sn, Sn = e;
    var l = Yt;
    e = kt;
    var a = 32 - bt(l) - 1;
    l &= ~(1 << a), n += 1;
    var i = 32 - bt(t) + a;
    if (30 < i) {
      var u = a - a % 5;
      i = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, Yt = 1 << 32 - bt(t) + a | n << a | l, kt = i + e;
    } else
      Yt = 1 << i | n << a | l, kt = e;
  }
  function oc(e) {
    e.return !== null && (It(e, 1), vo(e, 1, 0));
  }
  function fc(e) {
    for (; e === Mi; )
      Mi = Rl[--Ul], Rl[Ul] = null, za = Rl[--Ul], Rl[Ul] = null;
    for (; e === Sn; )
      Sn = Ct[--Rt], Ct[Rt] = null, kt = Ct[--Rt], Ct[Rt] = null, Yt = Ct[--Rt], Ct[Rt] = null;
  }
  function yo(e, t) {
    Ct[Rt++] = Yt, Ct[Rt++] = kt, Ct[Rt++] = Sn, Yt = t.id, kt = t.overflow, Sn = e;
  }
  var nt = null, Ue = null, pe = !1, En = null, Ut = !1, dc = Error(r(519));
  function zn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ta(Dt(t, e)), dc;
  }
  function po(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[tt] = e, t[ot] = l, n) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Qa.length; n++)
          he(Qa[n], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t), Ds(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), Rs(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Hd(t.textContent, n) ? (l.popover != null && (he("beforetoggle", t), he("toggle", t)), l.onScroll != null && he("scroll", t), l.onScrollEnd != null && he("scrollend", t), l.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || zn(e, !0);
  }
  function bo(e) {
    for (nt = e.return; nt; )
      switch (nt.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          nt = nt.return;
      }
  }
  function Bl(e) {
    if (e !== nt) return !1;
    if (!pe) return bo(e), pe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Dr(e.type, e.memoizedProps)), n = !n), n && Ue && zn(e), bo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Qd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Qd(e);
    } else
      t === 27 ? (t = Ue, Hn(e.type) ? (e = xr, xr = null, Ue = e) : Ue = t) : Ue = nt ? xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function In() {
    Ue = nt = null, pe = !1;
  }
  function hc() {
    var e = En;
    return e !== null && (gt === null ? gt = e : gt.push.apply(
      gt,
      e
    ), En = null), e;
  }
  function Ta(e) {
    En === null ? En = [e] : En.push(e);
  }
  var mc = g(null), el = null, en = null;
  function Tn(e, t, n) {
    j(mc, t._currentValue), t._currentValue = n;
  }
  function tn(e) {
    e._currentValue = mc.current, N(mc);
  }
  function gc(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function vc(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var u = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var s = i;
          i = a;
          for (var d = 0; d < t.length; d++)
            if (s.context === t[d]) {
              i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), gc(
                i.return,
                n,
                e
              ), l || (u = null);
              break e;
            }
          i = s.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(r(341));
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), gc(u, n, e), u = null;
      } else u = a.child;
      if (u !== null) u.return = a;
      else
        for (u = a; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (a = u.sibling, a !== null) {
            a.return = u.return, u = a;
            break;
          }
          u = u.return;
        }
      a = u;
    }
  }
  function xl(e, t, n, l) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(r(387));
        if (u = u.memoizedProps, u !== null) {
          var s = a.type;
          St(a.pendingProps.value, u.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (a === fe.current) {
        if (u = a.alternate, u === null) throw Error(r(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push($a) : e = [$a]);
      }
      a = a.return;
    }
    e !== null && vc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Oi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!St(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function tl(e) {
    el = e, en = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return So(el, e);
  }
  function Di(e, t) {
    return el === null && tl(e), So(e, t);
  }
  function So(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, en === null) {
      if (e === null) throw Error(r(308));
      en = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else en = en.next = t;
    return n;
  }
  var Eg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, zg = c.unstable_scheduleCallback, Tg = c.unstable_NormalPriority, ke = {
    $$typeof: ne,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new Eg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Aa(e) {
    e.refCount--, e.refCount === 0 && zg(Tg, function() {
      e.controller.abort();
    });
  }
  var wa = null, pc = 0, Hl = 0, Ll = null;
  function Ag(e, t) {
    if (wa === null) {
      var n = wa = [];
      pc = 0, Hl = Er(), Ll = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return pc++, t.then(Eo, Eo), t;
  }
  function Eo() {
    if (--pc === 0 && wa !== null) {
      Ll !== null && (Ll.status = "fulfilled");
      var e = wa;
      wa = null, Hl = 0, Ll = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wg(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var zo = M.S;
  M.S = function(e, t) {
    ud = He(), typeof t == "object" && t !== null && typeof t.then == "function" && Ag(e, t), zo !== null && zo(e, t);
  };
  var nl = g(null);
  function bc() {
    var e = nl.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Ci(e, t) {
    t === null ? j(nl, nl.current) : j(nl, t.pool);
  }
  function To() {
    var e = bc();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var ql = Error(r(460)), Sc = Error(r(474)), Ri = Error(r(542)), Ui = { then: function() {
  } };
  function Ao(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function wo(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then($t, $t), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, No(e), e;
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, No(e), e;
        }
        throw al = t, ql;
    }
  }
  function ll(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (al = n, ql) : n;
    }
  }
  var al = null;
  function _o() {
    if (al === null) throw Error(r(459));
    var e = al;
    return al = null, e;
  }
  function No(e) {
    if (e === ql || e === Ri)
      throw Error(r(483));
  }
  var jl = null, _a = 0;
  function Bi(e) {
    var t = _a;
    return _a += 1, jl === null && (jl = []), wo(jl, e, t);
  }
  function Na(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function xi(e, t) {
    throw t.$$typeof === D ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Mo(e) {
    function t(p, y) {
      if (e) {
        var z = p.deletions;
        z === null ? (p.deletions = [y], p.flags |= 16) : z.push(y);
      }
    }
    function n(p, y) {
      if (!e) return null;
      for (; y !== null; )
        t(p, y), y = y.sibling;
      return null;
    }
    function l(p) {
      for (var y = /* @__PURE__ */ new Map(); p !== null; )
        p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
      return y;
    }
    function a(p, y) {
      return p = Pt(p, y), p.index = 0, p.sibling = null, p;
    }
    function i(p, y, z) {
      return p.index = z, e ? (z = p.alternate, z !== null ? (z = z.index, z < y ? (p.flags |= 67108866, y) : z) : (p.flags |= 67108866, y)) : (p.flags |= 1048576, y);
    }
    function u(p) {
      return e && p.alternate === null && (p.flags |= 67108866), p;
    }
    function s(p, y, z, R) {
      return y === null || y.tag !== 6 ? (y = rc(z, p.mode, R), y.return = p, y) : (y = a(y, z), y.return = p, y);
    }
    function d(p, y, z, R) {
      var K = z.type;
      return K === L ? C(
        p,
        y,
        z.props.children,
        R,
        z.key
      ) : y !== null && (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === re && ll(K) === y.type) ? (y = a(y, z.props), Na(y, z), y.return = p, y) : (y = Ni(
        z.type,
        z.key,
        z.props,
        null,
        p.mode,
        R
      ), Na(y, z), y.return = p, y);
    }
    function T(p, y, z, R) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== z.containerInfo || y.stateNode.implementation !== z.implementation ? (y = sc(z, p.mode, R), y.return = p, y) : (y = a(y, z.children || []), y.return = p, y);
    }
    function C(p, y, z, R, K) {
      return y === null || y.tag !== 7 ? (y = Pn(
        z,
        p.mode,
        R,
        K
      ), y.return = p, y) : (y = a(y, z), y.return = p, y);
    }
    function B(p, y, z) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = rc(
          "" + y,
          p.mode,
          z
        ), y.return = p, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case q:
            return z = Ni(
              y.type,
              y.key,
              y.props,
              null,
              p.mode,
              z
            ), Na(z, y), z.return = p, z;
          case H:
            return y = sc(
              y,
              p.mode,
              z
            ), y.return = p, y;
          case re:
            return y = ll(y), B(p, y, z);
        }
        if (I(y) || be(y))
          return y = Pn(
            y,
            p.mode,
            z,
            null
          ), y.return = p, y;
        if (typeof y.then == "function")
          return B(p, Bi(y), z);
        if (y.$$typeof === ne)
          return B(
            p,
            Di(p, y),
            z
          );
        xi(p, y);
      }
      return null;
    }
    function _(p, y, z, R) {
      var K = y !== null ? y.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return K !== null ? null : s(p, y, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            return z.key === K ? d(p, y, z, R) : null;
          case H:
            return z.key === K ? T(p, y, z, R) : null;
          case re:
            return z = ll(z), _(p, y, z, R);
        }
        if (I(z) || be(z))
          return K !== null ? null : C(p, y, z, R, null);
        if (typeof z.then == "function")
          return _(
            p,
            y,
            Bi(z),
            R
          );
        if (z.$$typeof === ne)
          return _(
            p,
            y,
            Di(p, z),
            R
          );
        xi(p, z);
      }
      return null;
    }
    function O(p, y, z, R, K) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return p = p.get(z) || null, s(y, p, "" + R, K);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case q:
            return p = p.get(
              R.key === null ? z : R.key
            ) || null, d(y, p, R, K);
          case H:
            return p = p.get(
              R.key === null ? z : R.key
            ) || null, T(y, p, R, K);
          case re:
            return R = ll(R), O(
              p,
              y,
              z,
              R,
              K
            );
        }
        if (I(R) || be(R))
          return p = p.get(z) || null, C(y, p, R, K, null);
        if (typeof R.then == "function")
          return O(
            p,
            y,
            z,
            Bi(R),
            K
          );
        if (R.$$typeof === ne)
          return O(
            p,
            y,
            z,
            Di(y, R),
            K
          );
        xi(y, R);
      }
      return null;
    }
    function X(p, y, z, R) {
      for (var K = null, ze = null, V = y, ce = y = 0, ve = null; V !== null && ce < z.length; ce++) {
        V.index > ce ? (ve = V, V = null) : ve = V.sibling;
        var Te = _(
          p,
          V,
          z[ce],
          R
        );
        if (Te === null) {
          V === null && (V = ve);
          break;
        }
        e && V && Te.alternate === null && t(p, V), y = i(Te, y, ce), ze === null ? K = Te : ze.sibling = Te, ze = Te, V = ve;
      }
      if (ce === z.length)
        return n(p, V), pe && It(p, ce), K;
      if (V === null) {
        for (; ce < z.length; ce++)
          V = B(p, z[ce], R), V !== null && (y = i(
            V,
            y,
            ce
          ), ze === null ? K = V : ze.sibling = V, ze = V);
        return pe && It(p, ce), K;
      }
      for (V = l(V); ce < z.length; ce++)
        ve = O(
          V,
          p,
          ce,
          z[ce],
          R
        ), ve !== null && (e && ve.alternate !== null && V.delete(
          ve.key === null ? ce : ve.key
        ), y = i(
          ve,
          y,
          ce
        ), ze === null ? K = ve : ze.sibling = ve, ze = ve);
      return e && V.forEach(function(Yn) {
        return t(p, Yn);
      }), pe && It(p, ce), K;
    }
    function J(p, y, z, R) {
      if (z == null) throw Error(r(151));
      for (var K = null, ze = null, V = y, ce = y = 0, ve = null, Te = z.next(); V !== null && !Te.done; ce++, Te = z.next()) {
        V.index > ce ? (ve = V, V = null) : ve = V.sibling;
        var Yn = _(p, V, Te.value, R);
        if (Yn === null) {
          V === null && (V = ve);
          break;
        }
        e && V && Yn.alternate === null && t(p, V), y = i(Yn, y, ce), ze === null ? K = Yn : ze.sibling = Yn, ze = Yn, V = ve;
      }
      if (Te.done)
        return n(p, V), pe && It(p, ce), K;
      if (V === null) {
        for (; !Te.done; ce++, Te = z.next())
          Te = B(p, Te.value, R), Te !== null && (y = i(Te, y, ce), ze === null ? K = Te : ze.sibling = Te, ze = Te);
        return pe && It(p, ce), K;
      }
      for (V = l(V); !Te.done; ce++, Te = z.next())
        Te = O(V, p, ce, Te.value, R), Te !== null && (e && Te.alternate !== null && V.delete(Te.key === null ? ce : Te.key), y = i(Te, y, ce), ze === null ? K = Te : ze.sibling = Te, ze = Te);
      return e && V.forEach(function(H0) {
        return t(p, H0);
      }), pe && It(p, ce), K;
    }
    function De(p, y, z, R) {
      if (typeof z == "object" && z !== null && z.type === L && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            e: {
              for (var K = z.key; y !== null; ) {
                if (y.key === K) {
                  if (K = z.type, K === L) {
                    if (y.tag === 7) {
                      n(
                        p,
                        y.sibling
                      ), R = a(
                        y,
                        z.props.children
                      ), R.return = p, p = R;
                      break e;
                    }
                  } else if (y.elementType === K || typeof K == "object" && K !== null && K.$$typeof === re && ll(K) === y.type) {
                    n(
                      p,
                      y.sibling
                    ), R = a(y, z.props), Na(R, z), R.return = p, p = R;
                    break e;
                  }
                  n(p, y);
                  break;
                } else t(p, y);
                y = y.sibling;
              }
              z.type === L ? (R = Pn(
                z.props.children,
                p.mode,
                R,
                z.key
              ), R.return = p, p = R) : (R = Ni(
                z.type,
                z.key,
                z.props,
                null,
                p.mode,
                R
              ), Na(R, z), R.return = p, p = R);
            }
            return u(p);
          case H:
            e: {
              for (K = z.key; y !== null; ) {
                if (y.key === K)
                  if (y.tag === 4 && y.stateNode.containerInfo === z.containerInfo && y.stateNode.implementation === z.implementation) {
                    n(
                      p,
                      y.sibling
                    ), R = a(y, z.children || []), R.return = p, p = R;
                    break e;
                  } else {
                    n(p, y);
                    break;
                  }
                else t(p, y);
                y = y.sibling;
              }
              R = sc(z, p.mode, R), R.return = p, p = R;
            }
            return u(p);
          case re:
            return z = ll(z), De(
              p,
              y,
              z,
              R
            );
        }
        if (I(z))
          return X(
            p,
            y,
            z,
            R
          );
        if (be(z)) {
          if (K = be(z), typeof K != "function") throw Error(r(150));
          return z = K.call(z), J(
            p,
            y,
            z,
            R
          );
        }
        if (typeof z.then == "function")
          return De(
            p,
            y,
            Bi(z),
            R
          );
        if (z.$$typeof === ne)
          return De(
            p,
            y,
            Di(p, z),
            R
          );
        xi(p, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, y !== null && y.tag === 6 ? (n(p, y.sibling), R = a(y, z), R.return = p, p = R) : (n(p, y), R = rc(z, p.mode, R), R.return = p, p = R), u(p)) : n(p, y);
    }
    return function(p, y, z, R) {
      try {
        _a = 0;
        var K = De(
          p,
          y,
          z,
          R
        );
        return jl = null, K;
      } catch (V) {
        if (V === ql || V === Ri) throw V;
        var ze = Et(29, V, null, p.mode);
        return ze.lanes = R, ze.return = p, ze;
      } finally {
      }
    };
  }
  var il = Mo(!0), Oo = Mo(!1), An = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function zc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function wn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ae & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = _i(e), fo(e, null, n), t;
    }
    return wi(e, l, t, n), _i(e);
  }
  function Ma(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, bs(e, n);
    }
  }
  function Tc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Ac = !1;
  function Oa() {
    if (Ac) {
      var e = Ll;
      if (e !== null) throw e;
    }
  }
  function Da(e, t, n, l) {
    Ac = !1;
    var a = e.updateQueue;
    An = !1;
    var i = a.firstBaseUpdate, u = a.lastBaseUpdate, s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var d = s, T = d.next;
      d.next = null, u === null ? i = T : u.next = T, u = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, s = C.lastBaseUpdate, s !== u && (s === null ? C.firstBaseUpdate = T : s.next = T, C.lastBaseUpdate = d));
    }
    if (i !== null) {
      var B = a.baseState;
      u = 0, C = T = d = null, s = i;
      do {
        var _ = s.lane & -536870913, O = _ !== s.lane;
        if (O ? (ge & _) === _ : (l & _) === _) {
          _ !== 0 && _ === Hl && (Ac = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, J = s;
            _ = t;
            var De = n;
            switch (J.tag) {
              case 1:
                if (X = J.payload, typeof X == "function") {
                  B = X.call(De, B, _);
                  break e;
                }
                B = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = J.payload, _ = typeof X == "function" ? X.call(De, B, _) : X, _ == null) break e;
                B = A({}, B, _);
                break e;
              case 2:
                An = !0;
            }
          }
          _ = s.callback, _ !== null && (e.flags |= 64, O && (e.flags |= 8192), O = a.callbacks, O === null ? a.callbacks = [_] : O.push(_));
        } else
          O = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, C === null ? (T = C = O, d = B) : C = C.next = O, u |= _;
        if (s = s.next, s === null) {
          if (s = a.shared.pending, s === null)
            break;
          O = s, s = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      C === null && (d = B), a.baseState = d, a.firstBaseUpdate = T, a.lastBaseUpdate = C, i === null && (a.shared.lanes = 0), Cn |= u, e.lanes = u, e.memoizedState = B;
    }
  }
  function Do(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Co(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Do(n[e], t);
  }
  var Gl = g(null), Hi = g(0);
  function Ro(e, t) {
    e = fn, j(Hi, e), j(Gl, t), fn = e | t.baseLanes;
  }
  function wc() {
    j(Hi, fn), j(Gl, Gl.current);
  }
  function _c() {
    fn = Hi.current, N(Gl), N(Hi);
  }
  var zt = g(null), Bt = null;
  function Nn(e) {
    var t = e.alternate;
    j(Ge, Ge.current & 1), j(zt, e), Bt === null && (t === null || Gl.current !== null || t.memoizedState !== null) && (Bt = e);
  }
  function Nc(e) {
    j(Ge, Ge.current), j(zt, e), Bt === null && (Bt = e);
  }
  function Uo(e) {
    e.tag === 22 ? (j(Ge, Ge.current), j(zt, e), Bt === null && (Bt = e)) : Mn();
  }
  function Mn() {
    j(Ge, Ge.current), j(zt, zt.current);
  }
  function Tt(e) {
    N(zt), Bt === e && (Bt = null), N(Ge);
  }
  var Ge = g(0);
  function Li(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Ur(n) || Br(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var nn = 0, ue = null, Me = null, Xe = null, qi = !1, Yl = !1, ul = !1, ji = 0, Ca = 0, kl = null, _g = 0;
  function qe() {
    throw Error(r(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function Oc(e, t, n, l, a, i) {
    return nn = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? yf : Vc, ul = !1, i = n(l, a), ul = !1, Yl && (i = xo(
      t,
      n,
      l,
      a
    )), Bo(e), i;
  }
  function Bo(e) {
    M.H = Ba;
    var t = Me !== null && Me.next !== null;
    if (nn = 0, Xe = Me = ue = null, qi = !1, Ca = 0, kl = null, t) throw Error(r(300));
    e === null || Ve || (e = e.dependencies, e !== null && Oi(e) && (Ve = !0));
  }
  function xo(e, t, n, l) {
    ue = e;
    var a = 0;
    do {
      if (Yl && (kl = null), Ca = 0, Yl = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Xe = Me = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = pf, i = t(n, l);
    } while (Yl);
    return i;
  }
  function Ng() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ra(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Dc() {
    var e = ji !== 0;
    return ji = 0, e;
  }
  function Cc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Rc(e) {
    if (qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qi = !1;
    }
    nn = 0, Xe = Me = ue = null, Yl = !1, Ca = ji = 0, kl = null;
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Ye() {
    if (Me === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Xe === null ? ue.memoizedState : Xe.next;
    if (t !== null)
      Xe = t, Me = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(r(467)) : Error(r(310));
      Me = e, e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null
      }, Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function Gi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ra(e) {
    var t = Ca;
    return Ca += 1, kl === null && (kl = []), e = wo(kl, e, t), t = ue, (Xe === null ? t.memoizedState : Xe.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? yf : Vc), e;
  }
  function Yi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ra(e);
      if (e.$$typeof === ne) return lt(e);
    }
    throw Error(r(438, String(e)));
  }
  function Uc(e) {
    var t = null, n = ue.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = ue.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gi(), ue.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Ke;
    return t.index++, n;
  }
  function ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ki(e) {
    var t = Ye();
    return Bc(t, Me, e);
  }
  function Bc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = i.next, i.next = u;
      }
      t.baseQueue = a = i, l.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var s = u = null, d = null, T = t, C = !1;
      do {
        var B = T.lane & -536870913;
        if (B !== T.lane ? (ge & B) === B : (nn & B) === B) {
          var _ = T.revertLane;
          if (_ === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), B === Hl && (C = !0);
          else if ((nn & _) === _) {
            T = T.next, _ === Hl && (C = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, d === null ? (s = d = B, u = i) : d = d.next = B, ue.lanes |= _, Cn |= _;
          B = T.action, ul && n(i, B), i = T.hasEagerState ? T.eagerState : n(i, B);
        } else
          _ = {
            lane: B,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, d === null ? (s = d = _, u = i) : d = d.next = _, ue.lanes |= B, Cn |= B;
        T = T.next;
      } while (T !== null && T !== t);
      if (d === null ? u = i : d.next = s, !St(i, e.memoizedState) && (Ve = !0, C && (n = Ll, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = u, e.baseQueue = d, l.lastRenderedState = i;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function xc(e) {
    var t = Ye(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, i = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== a);
      St(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, l];
  }
  function Ho(e, t, n) {
    var l = ue, a = Ye(), i = pe;
    if (i) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var u = !St(
      (Me || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Ve = !0), a = a.queue, qc(jo.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || Xe !== null && Xe.memoizedState.tag & 1) {
      if (l.flags |= 2048, Xl(
        9,
        { destroy: void 0 },
        qo.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), Ce === null) throw Error(r(349));
      i || (nn & 127) !== 0 || Lo(l, t, n);
    }
    return n;
  }
  function Lo(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = Gi(), ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function qo(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Go(t) && Yo(e);
  }
  function jo(e, t, n) {
    return n(function() {
      Go(t) && Yo(e);
    });
  }
  function Go(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function Yo(e) {
    var t = Fn(e, 2);
    t !== null && vt(t, e, 2);
  }
  function Hc(e) {
    var t = rt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), ul) {
        yn(!0);
        try {
          n();
        } finally {
          yn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ln,
      lastRenderedState: e
    }, t;
  }
  function ko(e, t, n, l) {
    return e.baseState = n, Bc(
      e,
      Me,
      typeof l == "function" ? l : ln
    );
  }
  function Mg(e, t, n, l, a) {
    if (Qi(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      M.T !== null ? n(!0) : i.isTransition = !1, l(i), n = t.pending, n === null ? (i.next = t.pending = i, Xo(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Xo(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var i = M.T, u = {};
      M.T = u;
      try {
        var s = n(a, l), d = M.S;
        d !== null && d(u, s), Vo(e, t, s);
      } catch (T) {
        Lc(e, t, T);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), M.T = i;
      }
    } else
      try {
        i = n(a, l), Vo(e, t, i);
      } catch (T) {
        Lc(e, t, T);
      }
  }
  function Vo(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Qo(e, t, l);
      },
      function(l) {
        return Lc(e, t, l);
      }
    ) : Qo(e, t, n);
  }
  function Qo(e, t, n) {
    t.status = "fulfilled", t.value = n, Zo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Xo(e, n)));
  }
  function Lc(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Zo(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Zo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ko(e, t) {
    return t;
  }
  function Jo(e, t) {
    if (pe) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var l = ue;
          if (pe) {
            if (Ue) {
              t: {
                for (var a = Ue, i = Ut; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = xt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Ue = xt(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            zn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = rt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ko,
      lastRenderedState: t
    }, n.queue = l, n = mf.bind(
      null,
      ue,
      l
    ), l.dispatch = n, l = Hc(!1), i = Xc.bind(
      null,
      ue,
      !1,
      l.queue
    ), l = rt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Mg.bind(
      null,
      ue,
      a,
      i,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Wo(e) {
    var t = Ye();
    return $o(t, Me, e);
  }
  function $o(e, t, n) {
    if (t = Bc(
      e,
      t,
      Ko
    )[0], e = ki(ln)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ra(t);
      } catch (u) {
        throw u === ql ? Ri : u;
      }
    else l = t;
    t = Ye();
    var a = t.queue, i = a.dispatch;
    return n !== t.memoizedState && (ue.flags |= 2048, Xl(
      9,
      { destroy: void 0 },
      Og.bind(null, a, n),
      null
    )), [l, i, e];
  }
  function Og(e, t) {
    e.action = t;
  }
  function Fo(e) {
    var t = Ye(), n = Me;
    if (n !== null)
      return $o(t, n, e);
    Ye(), t = t.memoizedState, n = Ye();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Xl(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Gi(), ue.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Po() {
    return Ye().memoizedState;
  }
  function Xi(e, t, n, l) {
    var a = rt();
    ue.flags |= e, a.memoizedState = Xl(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Vi(e, t, n, l) {
    var a = Ye();
    l = l === void 0 ? null : l;
    var i = a.memoizedState.inst;
    Me !== null && l !== null && Mc(l, Me.memoizedState.deps) ? a.memoizedState = Xl(t, i, n, l) : (ue.flags |= e, a.memoizedState = Xl(
      1 | t,
      i,
      n,
      l
    ));
  }
  function Io(e, t) {
    Xi(8390656, 8, e, t);
  }
  function qc(e, t) {
    Vi(2048, 8, e, t);
  }
  function Dg(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Gi(), ue.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function ef(e) {
    var t = Ye().memoizedState;
    return Dg({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function tf(e, t) {
    return Vi(4, 2, e, t);
  }
  function nf(e, t) {
    return Vi(4, 4, e, t);
  }
  function lf(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function af(e, t, n) {
    n = n != null ? n.concat([e]) : null, Vi(4, 4, lf.bind(null, t, e), n);
  }
  function jc() {
  }
  function uf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Mc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function cf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Mc(t, l[1]))
      return l[0];
    if (l = e(), ul) {
      yn(!0);
      try {
        e();
      } finally {
        yn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Gc(e, t, n) {
    return n === void 0 || (nn & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = rd(), ue.lanes |= e, Cn |= e, n);
  }
  function rf(e, t, n, l) {
    return St(n, t) ? n : Gl.current !== null ? (e = Gc(e, n, l), St(e, t) || (Ve = !0), e) : (nn & 42) === 0 || (nn & 1073741824) !== 0 && (ge & 261930) === 0 ? (Ve = !0, e.memoizedState = n) : (e = rd(), ue.lanes |= e, Cn |= e, t);
  }
  function sf(e, t, n, l, a) {
    var i = x.p;
    x.p = i !== 0 && 8 > i ? i : 8;
    var u = M.T, s = {};
    M.T = s, Xc(e, !1, t, n);
    try {
      var d = a(), T = M.S;
      if (T !== null && T(s, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var C = wg(
          d,
          l
        );
        Ua(
          e,
          t,
          C,
          _t(e)
        );
      } else
        Ua(
          e,
          t,
          l,
          _t(e)
        );
    } catch (B) {
      Ua(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        _t()
      );
    } finally {
      x.p = i, u !== null && s.types !== null && (u.types = s.types), M.T = u;
    }
  }
  function Cg() {
  }
  function Yc(e, t, n, l) {
    if (e.tag !== 5) throw Error(r(476));
    var a = of(e).queue;
    sf(
      e,
      a,
      t,
      Q,
      n === null ? Cg : function() {
        return ff(e), n(l);
      }
    );
  }
  function of(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: Q
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ff(e) {
    var t = of(e);
    t.next === null && (t = e.alternate.memoizedState), Ua(
      e,
      t.next.queue,
      {},
      _t()
    );
  }
  function kc() {
    return lt($a);
  }
  function df() {
    return Ye().memoizedState;
  }
  function hf() {
    return Ye().memoizedState;
  }
  function Rg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = _t();
          e = wn(n);
          var l = _n(t, e, n);
          l !== null && (vt(l, t, n), Ma(l, t, n)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ug(e, t, n) {
    var l = _t();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e) ? gf(t, n) : (n = uc(e, t, n, l), n !== null && (vt(n, e, l), vf(n, t, l)));
  }
  function mf(e, t, n) {
    var l = _t();
    Ua(e, t, n, l);
  }
  function Ua(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Qi(e)) gf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, s = i(u, n);
          if (a.hasEagerState = !0, a.eagerState = s, St(s, u))
            return wi(e, t, a, 0), Ce === null && Ai(), !1;
        } catch {
        } finally {
        }
      if (n = uc(e, t, a, l), n !== null)
        return vt(n, e, l), vf(n, t, l), !0;
    }
    return !1;
  }
  function Xc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Er(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e)) {
      if (t) throw Error(r(479));
    } else
      t = uc(
        e,
        n,
        l,
        2
      ), t !== null && vt(t, e, 2);
  }
  function Qi(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function gf(e, t) {
    Yl = qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, bs(e, n);
    }
  }
  var Ba = {
    readContext: lt,
    use: Yi,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe
  };
  Ba.useEffectEvent = qe;
  var yf = {
    readContext: lt,
    use: Yi,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: Io,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Xi(
        4194308,
        4,
        lf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Xi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Xi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = rt();
      t = t === void 0 ? null : t;
      var l = e();
      if (ul) {
        yn(!0);
        try {
          e();
        } finally {
          yn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = rt();
      if (n !== void 0) {
        var a = n(t);
        if (ul) {
          yn(!0);
          try {
            n(t);
          } finally {
            yn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Ug.bind(
        null,
        ue,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = rt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Hc(e);
      var t = e.queue, n = mf.bind(null, ue, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var n = rt();
      return Gc(n, e, t);
    },
    useTransition: function() {
      var e = Hc(!1);
      return e = sf.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), rt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ue, a = rt();
      if (pe) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(r(349));
        (ge & 127) !== 0 || Lo(l, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return a.queue = i, Io(jo.bind(null, l, i, e), [
        e
      ]), l.flags |= 2048, Xl(
        9,
        { destroy: void 0 },
        qo.bind(
          null,
          l,
          i,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = rt(), t = Ce.identifierPrefix;
      if (pe) {
        var n = kt, l = Yt;
        n = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ji++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = _g++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: kc,
    useFormState: Jo,
    useActionState: Jo,
    useOptimistic: function(e) {
      var t = rt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Xc.bind(
        null,
        ue,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return rt().memoizedState = Rg.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = rt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ae & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Vc = {
    readContext: lt,
    use: Yi,
    useCallback: uf,
    useContext: lt,
    useEffect: qc,
    useImperativeHandle: af,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: cf,
    useReducer: ki,
    useRef: Po,
    useState: function() {
      return ki(ln);
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return rf(
        n,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ki(ln)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        t
      ];
    },
    useSyncExternalStore: Ho,
    useId: df,
    useHostTransitionStatus: kc,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: function(e, t) {
      var n = Ye();
      return ko(n, Me, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: hf
  };
  Vc.useEffectEvent = ef;
  var pf = {
    readContext: lt,
    use: Yi,
    useCallback: uf,
    useContext: lt,
    useEffect: qc,
    useImperativeHandle: af,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: cf,
    useReducer: xc,
    useRef: Po,
    useState: function() {
      return xc(ln);
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var n = Ye();
      return Me === null ? Gc(n, e, t) : rf(
        n,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = xc(ln)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        t
      ];
    },
    useSyncExternalStore: Ho,
    useId: df,
    useHostTransitionStatus: kc,
    useFormState: Fo,
    useActionState: Fo,
    useOptimistic: function(e, t) {
      var n = Ye();
      return Me !== null ? ko(n, Me, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: hf
  };
  pf.useEffectEvent = ef;
  function Qc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : A({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Zc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = _t(), a = wn(l);
      a.payload = t, n != null && (a.callback = n), t = _n(e, a, l), t !== null && (vt(t, e, l), Ma(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = _t(), a = wn(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = _n(e, a, l), t !== null && (vt(t, e, l), Ma(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = _t(), l = wn(n);
      l.tag = 2, t != null && (l.callback = t), t = _n(e, l, n), t !== null && (vt(t, e, n), Ma(t, e, n));
    }
  };
  function bf(e, t, n, l, a, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Sa(n, l) || !Sa(a, i) : !0;
  }
  function Sf(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Zc.enqueueReplaceState(t, t.state, null);
  }
  function cl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = A({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Ef(e) {
    Ti(e);
  }
  function zf(e) {
    console.error(e);
  }
  function Tf(e) {
    Ti(e);
  }
  function Zi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Af(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Kc(e, t, n) {
    return n = wn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Zi(e, t);
    }, n;
  }
  function wf(e) {
    return e = wn(e), e.tag = 3, e;
  }
  function _f(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = l.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Af(t, n, l);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Af(t, n, l), typeof a != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var s = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Bg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && xl(
        t,
        n,
        a,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Bt === null ? au() : n.alternate === null && je === 0 && (je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Ui ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), pr(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Ui ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), pr(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return pr(e, l, a), au(), !1;
    }
    if (pe)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== dc && (e = Error(r(422), { cause: l }), Ta(Dt(e, n)))) : (l !== dc && (t = Error(r(423), {
        cause: l
      }), Ta(
        Dt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Dt(l, n), a = Kc(
        e.stateNode,
        l,
        a
      ), Tc(e, a), je !== 4 && (je = 2)), !1;
    var i = Error(r(520), { cause: l });
    if (i = Dt(i, n), ka === null ? ka = [i] : ka.push(i), je !== 4 && (je = 2), t === null) return !0;
    l = Dt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Kc(n.stateNode, l, e), Tc(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rn === null || !Rn.has(i))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = wf(a), _f(
              a,
              e,
              n,
              l
            ), Tc(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Jc = Error(r(461)), Ve = !1;
  function at(e, t, n, l) {
    t.child = e === null ? Oo(t, null, n, l) : il(
      t,
      e.child,
      n,
      l
    );
  }
  function Nf(e, t, n, l, a) {
    n = n.render;
    var i = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var s in l)
        s !== "ref" && (u[s] = l[s]);
    } else u = l;
    return tl(t), l = Oc(
      e,
      t,
      n,
      u,
      i,
      a
    ), s = Dc(), e !== null && !Ve ? (Cc(e, t, a), an(e, t, a)) : (pe && s && oc(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function Mf(e, t, n, l, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !cc(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Of(
        e,
        t,
        i,
        l,
        a
      )) : (e = Ni(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !nr(e, a)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Sa, n(u, l) && e.ref === t.ref)
        return an(e, t, a);
    }
    return t.flags |= 1, e = Pt(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Of(e, t, n, l, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Sa(i, l) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = l = i, nr(e, a))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else
          return t.lanes = e.lanes, an(e, t, a);
    }
    return Wc(
      e,
      t,
      n,
      l,
      a
    );
  }
  function Df(e, t, n, l) {
    var a = l.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~i;
        } else l = 0, t.child = null;
        return Cf(
          e,
          t,
          i,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ci(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Ro(t, i) : wc(), Uo(t);
      else
        return l = t.lanes = 536870912, Cf(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          l
        );
    } else
      i !== null ? (Ci(t, i.cachePool), Ro(t, i), Mn(), t.memoizedState = null) : (e !== null && Ci(t, null), wc(), Mn());
    return at(e, t, a, n), t.child;
  }
  function xa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cf(e, t, n, l, a) {
    var i = bc();
    return i = i === null ? null : { parent: ke._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Ci(t, null), wc(), Uo(t), e !== null && xl(e, t, l, !0), t.childLanes = a, null;
  }
  function Ki(e, t) {
    return t = Wi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rf(e, t, n) {
    return il(t, e.child, null, n), e = Ki(t, t.pendingProps), e.flags |= 2, Tt(t), t.memoizedState = null, e;
  }
  function xg(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (l.mode === "hidden")
          return e = Ki(t, l), t.lanes = 536870912, xa(null, e);
        if (Nc(t), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sn !== null ? { id: Yt, overflow: kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mo(e), n.return = t, t.child = n, nt = t, Ue = null)) : e = null, e === null) throw zn(t);
        return t.lanes = 536870912, null;
      }
      return Ki(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Nc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Rf(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ve || xl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ve || a) {
        if (l = Ce, l !== null && (u = Ss(l, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Fn(e, u), vt(l, e, u), Jc;
        au(), t = Rf(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Ue = xt(u.nextSibling), nt = t, pe = !0, En = null, Ut = !1, e !== null && yo(t, e), t = Ki(t, l), t.flags |= 4096;
      return t;
    }
    return e = Pt(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ji(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, n, l, a) {
    return tl(t), n = Oc(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Dc(), e !== null && !Ve ? (Cc(e, t, a), an(e, t, a)) : (pe && l && oc(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function Uf(e, t, n, l, a, i) {
    return tl(t), t.updateQueue = null, n = xo(
      t,
      l,
      n,
      a
    ), Bo(e), l = Dc(), e !== null && !Ve ? (Cc(e, t, i), an(e, t, i)) : (pe && l && oc(t), t.flags |= 1, at(e, t, n, i), t.child);
  }
  function Bf(e, t, n, l, a) {
    if (tl(t), t.stateNode === null) {
      var i = Cl, u = n.contextType;
      typeof u == "object" && u !== null && (i = lt(u)), i = new n(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Zc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Ec(t), u = n.contextType, i.context = typeof u == "object" && u !== null ? lt(u) : Cl, i.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Qc(
        t,
        n,
        u,
        l
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Zc.enqueueReplaceState(i, i.state, null), Da(t, l, i, a), Oa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      i = t.stateNode;
      var s = t.memoizedProps, d = cl(n, s);
      i.props = d;
      var T = i.context, C = n.contextType;
      u = Cl, typeof C == "object" && C !== null && (u = lt(C));
      var B = n.getDerivedStateFromProps;
      C = typeof B == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, C || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || T !== u) && Sf(
        t,
        i,
        l,
        u
      ), An = !1;
      var _ = t.memoizedState;
      i.state = _, Da(t, l, i, a), Oa(), T = t.memoizedState, s || _ !== T || An ? (typeof B == "function" && (Qc(
        t,
        n,
        B,
        l
      ), T = t.memoizedState), (d = An || bf(
        t,
        n,
        d,
        l,
        _,
        T,
        u
      )) ? (C || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), i.props = l, i.state = T, i.context = u, l = d) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      i = t.stateNode, zc(e, t), u = t.memoizedProps, C = cl(n, u), i.props = C, B = t.pendingProps, _ = i.context, T = n.contextType, d = Cl, typeof T == "object" && T !== null && (d = lt(T)), s = n.getDerivedStateFromProps, (T = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== B || _ !== d) && Sf(
        t,
        i,
        l,
        d
      ), An = !1, _ = t.memoizedState, i.state = _, Da(t, l, i, a), Oa();
      var O = t.memoizedState;
      u !== B || _ !== O || An || e !== null && e.dependencies !== null && Oi(e.dependencies) ? (typeof s == "function" && (Qc(
        t,
        n,
        s,
        l
      ), O = t.memoizedState), (C = An || bf(
        t,
        n,
        C,
        l,
        _,
        O,
        d
      ) || e !== null && e.dependencies !== null && Oi(e.dependencies)) ? (T || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, O, d), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        l,
        O,
        d
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), i.props = l, i.state = O, i.context = d, l = C) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return i = l, Ji(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = il(
      t,
      e.child,
      null,
      a
    ), t.child = il(
      t,
      null,
      n,
      a
    )) : at(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = an(
      e,
      t,
      a
    ), e;
  }
  function xf(e, t, n, l) {
    return In(), t.flags |= 256, at(e, t, n, l), t.child;
  }
  var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Fc(e) {
    return { baseLanes: e, cachePool: To() };
  }
  function Pc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= wt), e;
  }
  function Hf(e, t, n) {
    var l = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (pe) {
        if (a ? Nn(t) : Mn(), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sn !== null ? { id: Yt, overflow: kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mo(e), n.return = t, t.child = n, nt = t, Ue = null)) : e = null, e === null) throw zn(t);
        return Br(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var s = l.children;
      return l = l.fallback, a ? (Mn(), a = t.mode, s = Wi(
        { mode: "hidden", children: s },
        a
      ), l = Pn(
        l,
        a,
        n,
        null
      ), s.return = t, l.return = t, s.sibling = l, t.child = s, l = t.child, l.memoizedState = Fc(n), l.childLanes = Pc(
        e,
        u,
        n
      ), t.memoizedState = $c, xa(null, l)) : (Nn(t), Ic(t, s));
    }
    var d = e.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (i)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = er(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Mn(), t.child = e.child, t.flags |= 128, t = null) : (Mn(), s = l.fallback, a = t.mode, l = Wi(
          { mode: "visible", children: l.children },
          a
        ), s = Pn(
          s,
          a,
          n,
          null
        ), s.flags |= 2, l.return = t, s.return = t, l.sibling = s, t.child = l, il(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Fc(n), l.childLanes = Pc(
          e,
          u,
          n
        ), t.memoizedState = $c, t = xa(null, l));
      else if (Nn(t), Br(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset, u) var T = u.dgst;
        u = T, l = Error(r(419)), l.stack = "", l.digest = u, Ta({ value: l, source: null, stack: null }), t = er(
          e,
          t,
          n
        );
      } else if (Ve || xl(e, t, n, !1), u = (n & e.childLanes) !== 0, Ve || u) {
        if (u = Ce, u !== null && (l = Ss(u, n), l !== 0 && l !== d.retryLane))
          throw d.retryLane = l, Fn(e, l), vt(u, e, l), Jc;
        Ur(s) || au(), t = er(
          e,
          t,
          n
        );
      } else
        Ur(s) ? (t.flags |= 192, t.child = e.child, t = null) : (e = d.treeContext, Ue = xt(
          s.nextSibling
        ), nt = t, pe = !0, En = null, Ut = !1, e !== null && yo(t, e), t = Ic(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Mn(), s = l.fallback, a = t.mode, d = e.child, T = d.sibling, l = Pt(d, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = d.subtreeFlags & 65011712, T !== null ? s = Pt(
      T,
      s
    ) : (s = Pn(
      s,
      a,
      n,
      null
    ), s.flags |= 2), s.return = t, l.return = t, l.sibling = s, t.child = l, xa(null, l), l = t.child, s = e.child.memoizedState, s === null ? s = Fc(n) : (a = s.cachePool, a !== null ? (d = ke._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = To(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: a
    }), l.memoizedState = s, l.childLanes = Pc(
      e,
      u,
      n
    ), t.memoizedState = $c, xa(e.child, l)) : (Nn(t), n = e.child, e = n.sibling, n = Pt(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ic(e, t) {
    return t = Wi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wi(e, t) {
    return e = Et(22, e, null, t), e.lanes = 0, e;
  }
  function er(e, t, n) {
    return il(t, e.child, null, n), e = Ic(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lf(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gc(e.return, t, n);
  }
  function tr(e, t, n, l, a, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: i
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = a, u.treeForkCount = i);
  }
  function qf(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, i = l.tail;
    l = l.children;
    var u = Ge.current, s = (u & 2) !== 0;
    if (s ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, j(Ge, u), at(e, t, l, n), l = pe ? za : 0, !s && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Lf(e, n, t);
        else if (e.tag === 19)
          Lf(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && Li(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), tr(
          t,
          !1,
          a,
          n,
          i,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Li(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        tr(
          t,
          !0,
          n,
          null,
          i,
          l
        );
        break;
      case "together":
        tr(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (xl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Oi(e)));
  }
  function Hg(e, t, n) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo), Tn(t, ke, e.memoizedState.cache), In();
        break;
      case 27:
      case 5:
        Qt(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Nc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Hf(e, t, n) : (Nn(t), e = an(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (xl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return qf(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), j(Ge, Ge.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Df(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Tn(t, ke, e.memoizedState.cache);
    }
    return an(e, t, n);
  }
  function jf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ve = !0;
      else {
        if (!nr(e, n) && (t.flags & 128) === 0)
          return Ve = !1, Hg(
            e,
            t,
            n
          );
        Ve = (e.flags & 131072) !== 0;
      }
    else
      Ve = !1, pe && (t.flags & 1048576) !== 0 && vo(t, za, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ll(t.elementType), t.type = e, typeof e == "function")
            cc(e) ? (l = cl(e, l), t.tag = 1, t = Bf(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Wc(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === me) {
                t.tag = 11, t = Nf(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === G) {
                t.tag = 14, t = Mf(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = Ee(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = cl(
          l,
          t.pendingProps
        ), Bf(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (Je(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, zc(e, t), Da(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, Tn(t, ke, l), l !== i.cache && vc(
            t,
            [ke],
            n,
            !0
          ), Oa(), l = u.element, i.isDehydrated)
            if (i = {
              element: l,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = xf(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = Dt(
                Error(r(424)),
                t
              ), Ta(a), t = xf(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ue = xt(e.firstChild), nt = t, pe = !0, En = null, Ut = !0, n = Oo(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (In(), l === a) {
              t = an(
                e,
                t,
                n
              );
              break e;
            }
            at(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ji(e, t), e === null ? (n = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : pe || (n = t.type, e = t.pendingProps, l = fu(
          ie.current
        ).createElement(n), l[tt] = t, l[ot] = e, it(l, n, e), $e(l), t.stateNode = l) : t.memoizedState = $d(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qt(t), e === null && pe && (l = t.stateNode = Kd(
          t.type,
          t.pendingProps,
          ie.current
        ), nt = t, Ut = !0, a = Ue, Hn(t.type) ? (xr = a, Ue = xt(l.firstChild)) : Ue = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ji(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((a = l = Ue) && (l = d0(
          l,
          t.type,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, nt = t, Ue = xt(l.firstChild), Ut = !1, a = !0) : a = !1), a || zn(t)), Qt(t), a = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = i.children, Dr(a, i) ? l = null : u !== null && Dr(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = Oc(
          e,
          t,
          Ng,
          null,
          null,
          n
        ), $a._currentValue = a), Ji(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && pe && ((e = n = Ue) && (n = h0(
          n,
          t.pendingProps,
          Ut
        ), n !== null ? (t.stateNode = n, nt = t, Ue = null, e = !0) : e = !1), e || zn(t)), null;
      case 13:
        return Hf(e, t, n);
      case 4:
        return Je(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = il(
          t,
          null,
          l,
          n
        ) : at(e, t, l, n), t.child;
      case 11:
        return Nf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Tn(t, t.type, l.value), at(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, tl(t), a = lt(a), l = l(a), t.flags |= 1, at(e, t, l, n), t.child;
      case 14:
        return Mf(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Of(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return qf(e, t, n);
      case 31:
        return xg(e, t, n);
      case 22:
        return Df(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return tl(t), l = lt(ke), e === null ? (a = bc(), a === null && (a = Ce, i = yc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= n), a = i), t.memoizedState = { parent: l, cache: a }, Ec(t), Tn(t, ke, a)) : ((e.lanes & n) !== 0 && (zc(e, t), Da(t, null, null, n), Oa()), a = e.memoizedState, i = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Tn(t, ke, l)) : (l = i.cache, Tn(t, ke, l), l !== a.cache && vc(
          t,
          [ke],
          n,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function un(e) {
    e.flags |= 4;
  }
  function lr(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dd()) e.flags |= 8192;
        else
          throw al = Ui, Sc;
    } else e.flags &= -16777217;
  }
  function Gf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !th(t))
      if (dd()) e.flags |= 8192;
      else
        throw al = Ui, Sc;
  }
  function $i(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ys() : 536870912, e.lanes |= t, Kl |= t);
  }
  function Ha(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Lg(e, t, n) {
    var l = t.pendingProps;
    switch (fc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tn(ke), xe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Bl(t) ? un(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), Be(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (un(t), i !== null ? (Be(t), Gf(t, i)) : (Be(t), lr(
          t,
          a,
          null,
          l,
          n
        ))) : i ? i !== e.memoizedState ? (un(t), Be(t), Gf(t, i)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && un(t), Be(t), lr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (ml(t), n = ie.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && un(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Be(t), null;
          }
          e = k.current, Bl(t) ? po(t) : (e = Kd(a, l, n), t.stateNode = e, un(t));
        }
        return Be(t), null;
      case 5:
        if (ml(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && un(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Be(t), null;
          }
          if (i = k.current, Bl(t))
            po(t);
          else {
            var u = fu(
              ie.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof l.is == "string" ? u.createElement("select", {
                      is: l.is
                    }) : u.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? u.createElement(a, { is: l.is }) : u.createElement(a);
                }
            }
            i[tt] = t, i[ot] = l;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            t.stateNode = i;
            e: switch (it(i, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && un(t);
          }
        }
        return Be(t), lr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && un(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = ie.current, Bl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Hd(e.nodeValue, n)), e || zn(t, !0);
          } else
            e = fu(e).createTextNode(
              l
            ), e[tt] = t, t.stateNode = e;
        }
        return Be(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Bl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[tt] = t;
            } else
              In(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else
            n = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Be(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Bl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[tt] = t;
            } else
              In(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), a = !1;
          } else
            a = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), $i(t, t.updateQueue), Be(t), null);
      case 4:
        return xe(), e === null && wr(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return tn(t.type), Be(t), null;
      case 19:
        if (N(Ge), l = t.memoizedState, l === null) return Be(t), null;
        if (a = (t.flags & 128) !== 0, i = l.rendering, i === null)
          if (a) Ha(l, !1);
          else {
            if (je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Li(e), i !== null) {
                  for (t.flags |= 128, Ha(l, !1), e = i.updateQueue, t.updateQueue = e, $i(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    ho(n, e), n = n.sibling;
                  return j(
                    Ge,
                    Ge.current & 1 | 2
                  ), pe && It(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && He() > tu && (t.flags |= 128, a = !0, Ha(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Li(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, $i(t, e), Ha(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !pe)
                return Be(t), null;
            } else
              2 * He() - l.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128, a = !0, Ha(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = He(), e.sibling = null, n = Ge.current, j(
          Ge,
          a ? n & 1 | 2 : n & 1
        ), pe && It(t, l.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return Tt(t), _c(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), n = t.updateQueue, n !== null && $i(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && N(nl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), tn(ke), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function qg(e, t) {
    switch (fc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tn(ke), xe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ml(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(r(340));
          In();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          In();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return N(Ge), null;
      case 4:
        return xe(), null;
      case 10:
        return tn(t.type), null;
      case 22:
      case 23:
        return Tt(t), _c(), e !== null && N(nl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tn(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yf(e, t) {
    switch (fc(t), t.tag) {
      case 3:
        tn(ke), xe();
        break;
      case 26:
      case 27:
      case 5:
        ml(t);
        break;
      case 4:
        xe();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        N(Ge);
        break;
      case 10:
        tn(t.type);
        break;
      case 22:
      case 23:
        Tt(t), _c(), e !== null && N(nl);
        break;
      case 24:
        tn(ke);
    }
  }
  function La(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var i = n.create, u = n.inst;
            l = i(), u.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (s) {
      Ne(t, t.return, s);
    }
  }
  function On(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var u = l.inst, s = u.destroy;
            if (s !== void 0) {
              u.destroy = void 0, a = t;
              var d = n, T = s;
              try {
                T();
              } catch (C) {
                Ne(
                  a,
                  d,
                  C
                );
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (C) {
      Ne(t, t.return, C);
    }
  }
  function kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Co(t, n);
      } catch (l) {
        Ne(e, e.return, l);
      }
    }
  }
  function Xf(e, t, n) {
    n.props = cl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ne(e, t, l);
    }
  }
  function qa(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function Xt(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Ne(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Ne(e, t, a);
        }
      else n.current = null;
  }
  function Vf(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Ne(e, e.return, a);
    }
  }
  function ar(e, t, n) {
    try {
      var l = e.stateNode;
      u0(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Ne(e, e.return, a);
    }
  }
  function Qf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
  }
  function ir(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ur(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $t));
    else if (l !== 4 && (l === 27 && Hn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ur(e, t, n), e = e.sibling; e !== null; )
        ur(e, t, n), e = e.sibling;
  }
  function Fi(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Hn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Fi(e, t, n), e = e.sibling; e !== null; )
        Fi(e, t, n), e = e.sibling;
  }
  function Zf(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      it(t, l, n), t[tt] = e, t[ot] = n;
    } catch (i) {
      Ne(e, e.return, i);
    }
  }
  var cn = !1, Qe = !1, cr = !1, Kf = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function jg(e, t) {
    if (e = e.containerInfo, Mr = pu, e = lo(e), ec(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset, i = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, s = -1, d = -1, T = 0, C = 0, B = e, _ = null;
            t: for (; ; ) {
              for (var O; B !== n || a !== 0 && B.nodeType !== 3 || (s = u + a), B !== i || l !== 0 && B.nodeType !== 3 || (d = u + l), B.nodeType === 3 && (u += B.nodeValue.length), (O = B.firstChild) !== null; )
                _ = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (_ === n && ++T === a && (s = u), _ === i && ++C === l && (d = u), (O = B.nextSibling) !== null) break;
                B = _, _ = B.parentNode;
              }
              B = O;
            }
            n = s === -1 || d === -1 ? null : { start: s, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Or = { focusedElem: e, selectionRange: n }, pu = !1, Fe = t; Fe !== null; )
      if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Fe = e;
      else
        for (; Fe !== null; ) {
          switch (t = Fe, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, n = t, a = i.memoizedProps, i = i.memoizedState, l = n.stateNode;
                try {
                  var X = cl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    X,
                    i
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  Ne(
                    n,
                    n.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Rr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Fe = e;
            break;
          }
          Fe = t.return;
        }
  }
  function Jf(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        sn(e, n), l & 4 && La(5, n);
        break;
      case 1:
        if (sn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              Ne(n, n.return, u);
            }
          else {
            var a = cl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              Ne(
                n,
                n.return,
                u
              );
            }
          }
        l & 64 && kf(n), l & 512 && qa(n, n.return);
        break;
      case 3:
        if (sn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Co(e, t);
          } catch (u) {
            Ne(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Zf(n);
      case 26:
      case 5:
        sn(e, n), t === null && l & 4 && Vf(n), l & 512 && qa(n, n.return);
        break;
      case 12:
        sn(e, n);
        break;
      case 31:
        sn(e, n), l & 4 && Ff(e, n);
        break;
      case 13:
        sn(e, n), l & 4 && Pf(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Jg.bind(
          null,
          n
        ), m0(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || cn, !l) {
          t = t !== null && t.memoizedState !== null || Qe, a = cn;
          var i = Qe;
          cn = l, (Qe = t) && !i ? on(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : sn(e, n), cn = a, Qe = i;
        }
        break;
      case 30:
        break;
      default:
        sn(e, n);
    }
  }
  function Wf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, dt = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; )
      $f(e, t, n), n = n.sibling;
  }
  function $f(e, t, n) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(vn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Qe || Xt(n, t), rn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || Xt(n, t);
        var l = Le, a = dt;
        Hn(n.type) && (Le = n.stateNode, dt = !1), rn(
          e,
          t,
          n
        ), Ka(n.stateNode), Le = l, dt = a;
        break;
      case 5:
        Qe || Xt(n, t);
      case 6:
        if (l = Le, a = dt, Le = null, rn(
          e,
          t,
          n
        ), Le = l, dt = a, Le !== null)
          if (dt)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(n.stateNode);
            } catch (i) {
              Ne(
                n,
                t,
                i
              );
            }
          else
            try {
              Le.removeChild(n.stateNode);
            } catch (i) {
              Ne(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Le !== null && (dt ? (e = Le, kd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ta(e)) : kd(Le, n.stateNode));
        break;
      case 4:
        l = Le, a = dt, Le = n.stateNode.containerInfo, dt = !0, rn(
          e,
          t,
          n
        ), Le = l, dt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        On(2, n, t), Qe || On(4, n, t), rn(
          e,
          t,
          n
        );
        break;
      case 1:
        Qe || (Xt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Xf(
          n,
          t,
          l
        )), rn(
          e,
          t,
          n
        );
        break;
      case 21:
        rn(
          e,
          t,
          n
        );
        break;
      case 22:
        Qe = (l = Qe) || n.memoizedState !== null, rn(
          e,
          t,
          n
        ), Qe = l;
        break;
      default:
        rn(
          e,
          t,
          n
        );
    }
  }
  function Ff(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ta(e);
      } catch (n) {
        Ne(t, t.return, n);
      }
    }
  }
  function Pf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ta(e);
      } catch (n) {
        Ne(t, t.return, n);
      }
  }
  function Gg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Kf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Kf()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Pi(e, t) {
    var n = Gg(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Wg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], i = e, u = t, s = u;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Hn(s.type)) {
                Le = s.stateNode, dt = !1;
                break e;
              }
              break;
            case 5:
              Le = s.stateNode, dt = !1;
              break e;
            case 3:
            case 4:
              Le = s.stateNode.containerInfo, dt = !0;
              break e;
          }
          s = s.return;
        }
        if (Le === null) throw Error(r(160));
        $f(i, u, a), Le = null, dt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        If(t, e), t = t.sibling;
  }
  var qt = null;
  function If(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), mt(e), l & 4 && (On(3, e, e.return), La(3, e), On(5, e, e.return));
        break;
      case 1:
        ht(t, e), mt(e), l & 512 && (Qe || n === null || Xt(n, n.return)), l & 64 && cn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = qt;
        if (ht(t, e), mt(e), l & 512 && (Qe || n === null || Xt(n, n.return)), l & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[fa] || i[tt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(l), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), it(i, l, n), i[tt] = e, $e(i), l = i;
                      break e;
                    case "link":
                      var u = Id(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), it(i, l, n), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Id(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            u.splice(s, 1);
                            break t;
                          }
                      }
                      i = a.createElement(l), it(i, l, n), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  i[tt] = e, $e(i), l = i;
                }
                e.stateNode = l;
              } else
                eh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pd(
                a,
                l,
                e.memoizedProps
              );
          else
            i !== l ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, l === null ? eh(
              a,
              e.type,
              e.stateNode
            ) : Pd(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && ar(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), mt(e), l & 512 && (Qe || n === null || Xt(n, n.return)), n !== null && l & 4 && ar(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), mt(e), l & 512 && (Qe || n === null || Xt(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Al(a, "");
          } catch (X) {
            Ne(e, e.return, X);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, ar(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (cr = !0);
        break;
      case 6:
        if (ht(t, e), mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (X) {
            Ne(e, e.return, X);
          }
        }
        break;
      case 3:
        if (mu = null, a = qt, qt = du(t.containerInfo), ht(t, e), qt = a, mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ta(t.containerInfo);
          } catch (X) {
            Ne(e, e.return, X);
          }
        cr && (cr = !1, ed(e));
        break;
      case 4:
        l = qt, qt = du(
          e.stateNode.containerInfo
        ), ht(t, e), mt(e), qt = l;
        break;
      case 12:
        ht(t, e), mt(e);
        break;
      case 31:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Pi(e, l)));
        break;
      case 13:
        ht(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (eu = He()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Pi(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var d = n !== null && n.memoizedState !== null, T = cn, C = Qe;
        if (cn = T || a, Qe = C || d, ht(t, e), Qe = C, cn = T, mt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || d || cn || Qe || rl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                d = n = t;
                try {
                  if (i = d.stateNode, a)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = d.stateNode;
                    var B = d.memoizedProps.style, _ = B != null && B.hasOwnProperty("display") ? B.display : null;
                    s.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (X) {
                  Ne(d, d.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (X) {
                  Ne(d, d.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                d = t;
                try {
                  var O = d.stateNode;
                  a ? Xd(O, !0) : Xd(d.stateNode, !1);
                } catch (X) {
                  Ne(d, d.return, X);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Pi(e, n))));
        break;
      case 19:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Pi(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), mt(e);
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Qf(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, i = ir(e);
            Fi(e, i, a);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (Al(u, ""), n.flags &= -33);
            var s = ir(e);
            Fi(e, s, u);
            break;
          case 3:
          case 4:
            var d = n.stateNode.containerInfo, T = ir(e);
            ur(
              e,
              T,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (C) {
        Ne(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ed(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ed(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Jf(e, t.alternate, t), t = t.sibling;
  }
  function rl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          On(4, t, t.return), rl(t);
          break;
        case 1:
          Xt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Xf(
            t,
            t.return,
            n
          ), rl(t);
          break;
        case 27:
          Ka(t.stateNode);
        case 26:
        case 5:
          Xt(t, t.return), rl(t);
          break;
        case 22:
          t.memoizedState === null && rl(t);
          break;
        case 30:
          rl(t);
          break;
        default:
          rl(t);
      }
      e = e.sibling;
    }
  }
  function on(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, i = t, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          on(
            a,
            i,
            n
          ), La(4, i);
          break;
        case 1:
          if (on(
            a,
            i,
            n
          ), l = i, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              Ne(l, l.return, T);
            }
          if (l = i, a = l.updateQueue, a !== null) {
            var s = l.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  Do(d[a], s);
            } catch (T) {
              Ne(l, l.return, T);
            }
          }
          n && u & 64 && kf(i), qa(i, i.return);
          break;
        case 27:
          Zf(i);
        case 26:
        case 5:
          on(
            a,
            i,
            n
          ), n && l === null && u & 4 && Vf(i), qa(i, i.return);
          break;
        case 12:
          on(
            a,
            i,
            n
          );
          break;
        case 31:
          on(
            a,
            i,
            n
          ), n && u & 4 && Ff(a, i);
          break;
        case 13:
          on(
            a,
            i,
            n
          ), n && u & 4 && Pf(a, i);
          break;
        case 22:
          i.memoizedState === null && on(
            a,
            i,
            n
          ), qa(i, i.return);
          break;
        case 30:
          break;
        default:
          on(
            a,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function rr(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Aa(n));
  }
  function sr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Aa(e));
  }
  function jt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        td(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function td(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jt(
          e,
          t,
          n,
          l
        ), a & 2048 && La(9, t);
        break;
      case 1:
        jt(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        jt(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Aa(e)));
        break;
      case 12:
        if (a & 2048) {
          jt(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, u = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              u,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (d) {
            Ne(t, t.return, d);
          }
        } else
          jt(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        jt(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        jt(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? jt(
          e,
          t,
          n,
          l
        ) : ja(e, t) : i._visibility & 2 ? jt(
          e,
          t,
          n,
          l
        ) : (i._visibility |= 2, Vl(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && rr(u, t);
        break;
      case 24:
        jt(
          e,
          t,
          n,
          l
        ), a & 2048 && sr(t.alternate, t);
        break;
      default:
        jt(
          e,
          t,
          n,
          l
        );
    }
  }
  function Vl(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, u = t, s = n, d = l, T = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Vl(
            i,
            u,
            s,
            d,
            a
          ), La(8, u);
          break;
        case 23:
          break;
        case 22:
          var C = u.stateNode;
          u.memoizedState !== null ? C._visibility & 2 ? Vl(
            i,
            u,
            s,
            d,
            a
          ) : ja(
            i,
            u
          ) : (C._visibility |= 2, Vl(
            i,
            u,
            s,
            d,
            a
          )), a && T & 2048 && rr(
            u.alternate,
            u
          );
          break;
        case 24:
          Vl(
            i,
            u,
            s,
            d,
            a
          ), a && T & 2048 && sr(u.alternate, u);
          break;
        default:
          Vl(
            i,
            u,
            s,
            d,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ja(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            ja(n, l), a & 2048 && rr(
              l.alternate,
              l
            );
            break;
          case 24:
            ja(n, l), a & 2048 && sr(l.alternate, l);
            break;
          default:
            ja(n, l);
        }
        t = t.sibling;
      }
  }
  var Ga = 8192;
  function Ql(e, t, n) {
    if (e.subtreeFlags & Ga)
      for (e = e.child; e !== null; )
        nd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function nd(e, t, n) {
    switch (e.tag) {
      case 26:
        Ql(
          e,
          t,
          n
        ), e.flags & Ga && e.memoizedState !== null && _0(
          n,
          qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ql(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = qt;
        qt = du(e.stateNode.containerInfo), Ql(
          e,
          t,
          n
        ), qt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Ga, Ga = 16777216, Ql(
          e,
          t,
          n
        ), Ga = l) : Ql(
          e,
          t,
          n
        ));
        break;
      default:
        Ql(
          e,
          t,
          n
        );
    }
  }
  function ld(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ya(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Fe = l, id(
            l,
            e
          );
        }
      ld(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ad(e), e = e.sibling;
  }
  function ad(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ya(e), e.flags & 2048 && On(9, e, e.return);
        break;
      case 3:
        Ya(e);
        break;
      case 12:
        Ya(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ii(e)) : Ya(e);
        break;
      default:
        Ya(e);
    }
  }
  function Ii(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Fe = l, id(
            l,
            e
          );
        }
      ld(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          On(8, t, t.return), Ii(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ii(t));
          break;
        default:
          Ii(t);
      }
      e = e.sibling;
    }
  }
  function id(e, t) {
    for (; Fe !== null; ) {
      var n = Fe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Aa(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, Fe = l;
      else
        e: for (n = e; Fe !== null; ) {
          l = Fe;
          var a = l.sibling, i = l.return;
          if (Wf(l), l === n) {
            Fe = null;
            break e;
          }
          if (a !== null) {
            a.return = i, Fe = a;
            break e;
          }
          Fe = i;
        }
    }
  }
  var Yg = {
    getCacheForType: function(e) {
      var t = lt(ke), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(ke).controller.signal;
    }
  }, kg = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Ce = null, de = null, ge = 0, _e = 0, At = null, Dn = !1, Zl = !1, or = !1, fn = 0, je = 0, Cn = 0, sl = 0, fr = 0, wt = 0, Kl = 0, ka = null, gt = null, dr = !1, eu = 0, ud = 0, tu = 1 / 0, nu = null, Rn = null, We = 0, Un = null, Jl = null, dn = 0, hr = 0, mr = null, cd = null, Xa = 0, gr = null;
  function _t() {
    return (Ae & 2) !== 0 && ge !== 0 ? ge & -ge : M.T !== null ? Er() : Es();
  }
  function rd() {
    if (wt === 0)
      if ((ge & 536870912) === 0 || pe) {
        var e = oi;
        oi <<= 1, (oi & 3932160) === 0 && (oi = 262144), wt = e;
      } else wt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), wt;
  }
  function vt(e, t, n) {
    (e === Ce && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (Wl(e, 0), Bn(
      e,
      ge,
      wt,
      !1
    )), oa(e, n), ((Ae & 2) === 0 || e !== Ce) && (e === Ce && ((Ae & 2) === 0 && (sl |= n), je === 4 && Bn(
      e,
      ge,
      wt,
      !1
    )), Vt(e));
  }
  function sd(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || sa(e, t), a = l ? Qg(e, t) : yr(e, t, !0), i = l;
    do {
      if (a === 0) {
        Zl && !l && Bn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Xg(n)) {
          a = yr(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = e.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            t = u;
            e: {
              var s = e;
              a = ka;
              var d = s.current.memoizedState.isDehydrated;
              if (d && (Wl(s, u).flags |= 256), u = yr(
                s,
                u,
                !1
              ), u !== 2) {
                if (or && !d) {
                  s.errorRecoveryDisabledLanes |= i, sl |= i, a = 4;
                  break e;
                }
                i = gt, gt = a, i !== null && (gt === null ? gt = i : gt.push.apply(
                  gt,
                  i
                ));
              }
              a = u;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Wl(e, 0), Bn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bn(
                l,
                t,
                wt,
                !Dn
              );
              break e;
            case 2:
              gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = eu + 300 - He(), 10 < a)) {
            if (Bn(
              l,
              t,
              wt,
              !Dn
            ), di(l, 0, !0) !== 0) break e;
            dn = t, l.timeoutHandle = Gd(
              od.bind(
                null,
                l,
                n,
                gt,
                nu,
                dr,
                t,
                wt,
                sl,
                Kl,
                Dn,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          od(
            l,
            n,
            gt,
            nu,
            dr,
            t,
            wt,
            sl,
            Kl,
            Dn,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vt(e);
  }
  function od(e, t, n, l, a, i, u, s, d, T, C, B, _, O) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $t
      }, nd(
        t,
        i,
        B
      );
      var X = (i & 62914560) === i ? eu - He() : (i & 4194048) === i ? ud - He() : 0;
      if (X = N0(
        B,
        X
      ), X !== null) {
        dn = i, e.cancelPendingCommit = X(
          pd.bind(
            null,
            e,
            t,
            i,
            n,
            l,
            a,
            u,
            s,
            d,
            C,
            B,
            null,
            _,
            O
          )
        ), Bn(e, i, u, !T);
        return;
      }
    }
    pd(
      e,
      t,
      i,
      n,
      l,
      a,
      u,
      s,
      d
    );
  }
  function Xg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], i = a.getSnapshot;
          a = a.value;
          try {
            if (!St(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Bn(e, t, n, l) {
    t &= ~fr, t &= ~sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - bt(a), u = 1 << i;
      l[i] = -1, a &= ~u;
    }
    n !== 0 && ps(e, n, t);
  }
  function lu() {
    return (Ae & 6) === 0 ? (Va(0), !1) : !0;
  }
  function vr() {
    if (de !== null) {
      if (_e === 0)
        var e = de.return;
      else
        e = de, en = el = null, Rc(e), jl = null, _a = 0, e = de;
      for (; e !== null; )
        Yf(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Wl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, s0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), dn = 0, vr(), Ce = e, de = n = Pt(e.current, null), ge = t, _e = 0, At = null, Dn = !1, Zl = sa(e, t), or = !1, Kl = wt = fr = sl = Cn = je = 0, gt = ka = null, dr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - bt(l), i = 1 << a;
        t |= e[a], l &= ~i;
      }
    return fn = t, Ai(), n;
  }
  function fd(e, t) {
    ue = null, M.H = Ba, t === ql || t === Ri ? (t = _o(), _e = 3) : t === Sc ? (t = _o(), _e = 4) : _e = t === Jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, At = t, de === null && (je = 1, Zi(
      e,
      Dt(t, e.current)
    ));
  }
  function dd() {
    var e = zt.current;
    return e === null ? !0 : (ge & 4194048) === ge ? Bt === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === Bt : !1;
  }
  function hd() {
    var e = M.H;
    return M.H = Ba, e === null ? Ba : e;
  }
  function md() {
    var e = M.A;
    return M.A = Yg, e;
  }
  function au() {
    je = 4, Dn || (ge & 4194048) !== ge && zt.current !== null || (Zl = !0), (Cn & 134217727) === 0 && (sl & 134217727) === 0 || Ce === null || Bn(
      Ce,
      ge,
      wt,
      !1
    );
  }
  function yr(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var a = hd(), i = md();
    (Ce !== e || ge !== t) && (nu = null, Wl(e, t)), t = !1;
    var u = je;
    e: do
      try {
        if (_e !== 0 && de !== null) {
          var s = de, d = At;
          switch (_e) {
            case 8:
              vr(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var T = _e;
              if (_e = 0, At = null, $l(e, s, d, T), n && Zl) {
                u = 0;
                break e;
              }
              break;
            default:
              T = _e, _e = 0, At = null, $l(e, s, d, T);
          }
        }
        Vg(), u = je;
        break;
      } catch (C) {
        fd(e, C);
      }
    while (!0);
    return t && e.shellSuspendCounter++, en = el = null, Ae = l, M.H = a, M.A = i, de === null && (Ce = null, ge = 0, Ai()), u;
  }
  function Vg() {
    for (; de !== null; ) gd(de);
  }
  function Qg(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = hd(), a = md();
    Ce !== e || ge !== t ? (nu = null, tu = He() + 500, Wl(e, t)) : Zl = sa(
      e,
      t
    );
    e: do
      try {
        if (_e !== 0 && de !== null) {
          t = de;
          var i = At;
          t: switch (_e) {
            case 1:
              _e = 0, At = null, $l(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Ao(i)) {
                _e = 0, At = null, vd(t);
                break;
              }
              t = function() {
                _e !== 2 && _e !== 9 || Ce !== e || (_e = 7), Vt(e);
              }, i.then(t, t);
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              Ao(i) ? (_e = 0, At = null, vd(t)) : (_e = 0, At = null, $l(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (de.tag) {
                case 26:
                  u = de.memoizedState;
                case 5:
                case 27:
                  var s = de;
                  if (u ? th(u) : s.stateNode.complete) {
                    _e = 0, At = null;
                    var d = s.sibling;
                    if (d !== null) de = d;
                    else {
                      var T = s.return;
                      T !== null ? (de = T, iu(T)) : de = null;
                    }
                    break t;
                  }
              }
              _e = 0, At = null, $l(e, t, i, 5);
              break;
            case 6:
              _e = 0, At = null, $l(e, t, i, 6);
              break;
            case 8:
              vr(), je = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Zg();
        break;
      } catch (C) {
        fd(e, C);
      }
    while (!0);
    return en = el = null, M.H = l, M.A = a, Ae = n, de !== null ? 0 : (Ce = null, ge = 0, Ai(), je);
  }
  function Zg() {
    for (; de !== null && !Re(); )
      gd(de);
  }
  function gd(e) {
    var t = jf(e.alternate, e, fn);
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : de = t;
  }
  function vd(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uf(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ge
        );
        break;
      case 11:
        t = Uf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ge
        );
        break;
      case 5:
        Rc(t);
      default:
        Yf(n, t), t = de = ho(t, fn), t = jf(n, t, fn);
    }
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : de = t;
  }
  function $l(e, t, n, l) {
    en = el = null, Rc(t), jl = null, _a = 0;
    var a = t.return;
    try {
      if (Bg(
        e,
        a,
        t,
        n,
        ge
      )) {
        je = 1, Zi(
          e,
          Dt(n, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw de = a, i;
      je = 1, Zi(
        e,
        Dt(n, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (pe || l === 1 ? e = !0 : Zl || (ge & 536870912) !== 0 ? e = !1 : (Dn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = zt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yd(t, e)) : iu(t);
  }
  function iu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yd(
          t,
          Dn
        );
        return;
      }
      e = t.return;
      var n = Lg(
        t.alternate,
        t,
        fn
      );
      if (n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function yd(e, t) {
    do {
      var n = qg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = n;
    } while (e !== null);
    je = 6, de = null;
  }
  function pd(e, t, n, l, a, i, u, s, d) {
    e.cancelPendingCommit = null;
    do
      uu();
    while (We !== 0);
    if ((Ae & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= ic, wm(
        e,
        n,
        i,
        u,
        s,
        d
      ), e === Ce && (de = Ce = null, ge = 0), Jl = t, Un = e, dn = n, hr = i, mr = a, cd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $g(Jt, function() {
        return Td(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = x.p, x.p = 2, u = Ae, Ae |= 4;
        try {
          jg(e, t, n);
        } finally {
          Ae = u, x.p = a, M.T = l;
        }
      }
      We = 1, bd(), Sd(), Ed();
    }
  }
  function bd() {
    if (We === 1) {
      We = 0;
      var e = Un, t = Jl, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = x.p;
        x.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          If(t, e);
          var i = Or, u = lo(e.containerInfo), s = i.focusedElem, d = i.selectionRange;
          if (u !== s && s && s.ownerDocument && no(
            s.ownerDocument.documentElement,
            s
          )) {
            if (d !== null && ec(s)) {
              var T = d.start, C = d.end;
              if (C === void 0 && (C = T), "selectionStart" in s)
                s.selectionStart = T, s.selectionEnd = Math.min(
                  C,
                  s.value.length
                );
              else {
                var B = s.ownerDocument || document, _ = B && B.defaultView || window;
                if (_.getSelection) {
                  var O = _.getSelection(), X = s.textContent.length, J = Math.min(d.start, X), De = d.end === void 0 ? J : Math.min(d.end, X);
                  !O.extend && J > De && (u = De, De = J, J = u);
                  var p = to(
                    s,
                    J
                  ), y = to(
                    s,
                    De
                  );
                  if (p && y && (O.rangeCount !== 1 || O.anchorNode !== p.node || O.anchorOffset !== p.offset || O.focusNode !== y.node || O.focusOffset !== y.offset)) {
                    var z = B.createRange();
                    z.setStart(p.node, p.offset), O.removeAllRanges(), J > De ? (O.addRange(z), O.extend(y.node, y.offset)) : (z.setEnd(y.node, y.offset), O.addRange(z));
                  }
                }
              }
            }
            for (B = [], O = s; O = O.parentNode; )
              O.nodeType === 1 && B.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < B.length; s++) {
              var R = B[s];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          pu = !!Mr, Or = Mr = null;
        } finally {
          Ae = a, x.p = l, M.T = n;
        }
      }
      e.current = t, We = 2;
    }
  }
  function Sd() {
    if (We === 2) {
      We = 0;
      var e = Un, t = Jl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = x.p;
        x.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Jf(e, t.alternate, t);
        } finally {
          Ae = a, x.p = l, M.T = n;
        }
      }
      We = 3;
    }
  }
  function Ed() {
    if (We === 4 || We === 3) {
      We = 0, Ie();
      var e = Un, t = Jl, n = dn, l = cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, Jl = Un = null, zd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Rn = null), xu(n), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function")
        try {
          et.onCommitFiberRoot(
            vn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, a = x.p, x.p = 2, M.T = null;
        try {
          for (var i = e.onRecoverableError, u = 0; u < l.length; u++) {
            var s = l[u];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          M.T = t, x.p = a;
        }
      }
      (dn & 3) !== 0 && uu(), Vt(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === gr ? Xa++ : (Xa = 0, gr = e) : Xa = 0, Va(0);
    }
  }
  function zd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Aa(t)));
  }
  function uu() {
    return bd(), Sd(), Ed(), Td();
  }
  function Td() {
    if (We !== 5) return !1;
    var e = Un, t = hr;
    hr = 0;
    var n = xu(dn), l = M.T, a = x.p;
    try {
      x.p = 32 > n ? 32 : n, M.T = null, n = mr, mr = null;
      var i = Un, u = dn;
      if (We = 0, Jl = Un = null, dn = 0, (Ae & 6) !== 0) throw Error(r(331));
      var s = Ae;
      if (Ae |= 4, ad(i.current), td(
        i,
        i.current,
        u,
        n
      ), Ae = s, Va(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(vn, i);
        } catch {
        }
      return !0;
    } finally {
      x.p = a, M.T = l, zd(e, t);
    }
  }
  function Ad(e, t, n) {
    t = Dt(n, t), t = Kc(e.stateNode, t, 2), e = _n(e, t, 2), e !== null && (oa(e, 2), Vt(e));
  }
  function Ne(e, t, n) {
    if (e.tag === 3)
      Ad(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ad(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Rn === null || !Rn.has(l))) {
            e = Dt(n, e), n = wf(2), l = _n(t, n, 2), l !== null && (_f(
              n,
              l,
              t,
              e
            ), oa(l, 2), Vt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function pr(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new kg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (or = !0, a.add(n), e = Kg.bind(null, e, t, n), t.then(e, e));
  }
  function Kg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (ge & n) === n && (je === 4 || je === 3 && (ge & 62914560) === ge && 300 > He() - eu ? (Ae & 2) === 0 && Wl(e, 0) : fr |= n, Kl === ge && (Kl = 0)), Vt(e);
  }
  function wd(e, t) {
    t === 0 && (t = ys()), e = Fn(e, t), e !== null && (oa(e, t), Vt(e));
  }
  function Jg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wd(e, n);
  }
  function Wg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), wd(e, n);
  }
  function $g(e, t) {
    return ua(e, t);
  }
  var cu = null, Fl = null, br = !1, ru = !1, Sr = !1, xn = 0;
  function Vt(e) {
    e !== Fl && e.next === null && (Fl === null ? cu = Fl = e : Fl = Fl.next = e), ru = !0, br || (br = !0, Pg());
  }
  function Va(e, t) {
    if (!Sr && ru) {
      Sr = !0;
      do
        for (var n = !1, l = cu; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var u = l.suspendedLanes, s = l.pingedLanes;
              i = (1 << 31 - bt(42 | e) + 1) - 1, i &= a & ~(u & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Od(l, i));
          } else
            i = ge, i = di(
              l,
              l === Ce ? i : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (i & 3) === 0 || sa(l, i) || (n = !0, Od(l, i));
          l = l.next;
        }
      while (n);
      Sr = !1;
    }
  }
  function Fg() {
    _d();
  }
  function _d() {
    ru = br = !1;
    var e = 0;
    xn !== 0 && r0() && (e = xn);
    for (var t = He(), n = null, l = cu; l !== null; ) {
      var a = l.next, i = Nd(l, t);
      i === 0 ? (l.next = null, n === null ? cu = a : n.next = a, a === null && (Fl = n)) : (n = l, (e !== 0 || (i & 3) !== 0) && (ru = !0)), l = a;
    }
    We !== 0 && We !== 5 || Va(e), xn !== 0 && (xn = 0);
  }
  function Nd(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - bt(i), s = 1 << u, d = a[u];
      d === -1 ? ((s & n) === 0 || (s & l) !== 0) && (a[u] = Am(s, t)) : d <= t && (e.expiredLanes |= s), i &= ~s;
    }
    if (t = Ce, n = ge, n = di(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Y(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || sa(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Y(l), xu(n)) {
        case 2:
        case 8:
          n = Vn;
          break;
        case 32:
          n = Jt;
          break;
        case 268435456:
          n = pt;
          break;
        default:
          n = Jt;
      }
      return l = Md.bind(null, e), n = ua(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Y(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Md(e, t) {
    if (We !== 0 && We !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (uu() && e.callbackNode !== n)
      return null;
    var l = ge;
    return l = di(
      e,
      e === Ce ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (sd(e, l, t), Nd(e, He()), e.callbackNode != null && e.callbackNode === n ? Md.bind(null, e) : null);
  }
  function Od(e, t) {
    if (uu()) return null;
    sd(e, t, !0);
  }
  function Pg() {
    o0(function() {
      (Ae & 6) !== 0 ? ua(
        gn,
        Fg
      ) : _d();
    });
  }
  function Er() {
    if (xn === 0) {
      var e = Hl;
      e === 0 && (e = si, si <<= 1, (si & 261888) === 0 && (si = 256)), xn = e;
    }
    return xn;
  }
  function Dd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vi("" + e);
  }
  function Cd(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Ig(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var i = Dd(
        (a[ot] || null).action
      ), u = l.submitter;
      u && (t = (t = u[ot] || null) ? Dd(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var s = new Si(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (xn !== 0) {
                  var d = u ? Cd(a, u) : new FormData(a);
                  Yc(
                    n,
                    {
                      pending: !0,
                      data: d,
                      method: a.method,
                      action: i
                    },
                    null,
                    d
                  );
                }
              } else
                typeof i == "function" && (s.preventDefault(), d = u ? Cd(a, u) : new FormData(a), Yc(
                  n,
                  {
                    pending: !0,
                    data: d,
                    method: a.method,
                    action: i
                  },
                  i,
                  d
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var zr = 0; zr < ac.length; zr++) {
    var Tr = ac[zr], e0 = Tr.toLowerCase(), t0 = Tr[0].toUpperCase() + Tr.slice(1);
    Lt(
      e0,
      "on" + t0
    );
  }
  Lt(uo, "onAnimationEnd"), Lt(co, "onAnimationIteration"), Lt(ro, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(yg, "onTransitionRun"), Lt(pg, "onTransitionStart"), Lt(bg, "onTransitionCancel"), Lt(so, "onTransitionEnd"), zl("onMouseEnter", ["mouseout", "mouseover"]), zl("onMouseLeave", ["mouseout", "mouseover"]), zl("onPointerEnter", ["pointerout", "pointerover"]), zl("onPointerLeave", ["pointerout", "pointerover"]), Kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), n0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa)
  );
  function Rd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var s = l[u], d = s.instance, T = s.currentTarget;
            if (s = s.listener, d !== i && a.isPropagationStopped())
              break e;
            i = s, a.currentTarget = T;
            try {
              i(a);
            } catch (C) {
              Ti(C);
            }
            a.currentTarget = null, i = d;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (s = l[u], d = s.instance, T = s.currentTarget, s = s.listener, d !== i && a.isPropagationStopped())
              break e;
            i = s, a.currentTarget = T;
            try {
              i(a);
            } catch (C) {
              Ti(C);
            }
            a.currentTarget = null, i = d;
          }
      }
    }
  }
  function he(e, t) {
    var n = t[Hu];
    n === void 0 && (n = t[Hu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Ud(t, e, 2, !1), n.add(l));
  }
  function Ar(e, t, n) {
    var l = 0;
    t && (l |= 4), Ud(
      n,
      e,
      l,
      t
    );
  }
  var su = "_reactListening" + Math.random().toString(36).slice(2);
  function wr(e) {
    if (!e[su]) {
      e[su] = !0, As.forEach(function(n) {
        n !== "selectionchange" && (n0.has(n) || Ar(n, !1, e), Ar(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[su] || (t[su] = !0, Ar("selectionchange", !1, t));
    }
  }
  function Ud(e, t, n, l) {
    switch (rh(t)) {
      case 2:
        var a = D0;
        break;
      case 8:
        a = C0;
        break;
      default:
        a = Gr;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !Qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function _r(e, t, n, l, a) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var s = l.stateNode.containerInfo;
          if (s === a) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
              var d = u.tag;
              if ((d === 3 || d === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (u = bl(s), u === null) return;
            if (d = u.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              l = i = u;
              continue e;
            }
            s = s.parentNode;
          }
        }
        l = l.return;
      }
    Hs(function() {
      var T = i, C = Xu(n), B = [];
      e: {
        var _ = oo.get(e);
        if (_ !== void 0) {
          var O = Si, X = e;
          switch (e) {
            case "keypress":
              if (pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              O = Wm;
              break;
            case "focusin":
              X = "focus", O = Wu;
              break;
            case "focusout":
              X = "blur", O = Wu;
              break;
            case "beforeblur":
            case "afterblur":
              O = Wu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = js;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Pm;
              break;
            case uo:
            case co:
            case ro:
              O = Gm;
              break;
            case so:
              O = eg;
              break;
            case "scroll":
            case "scrollend":
              O = xm;
              break;
            case "wheel":
              O = ng;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = km;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Ys;
              break;
            case "toggle":
            case "beforetoggle":
              O = ag;
          }
          var J = (t & 4) !== 0, De = !J && (e === "scroll" || e === "scrollend"), p = J ? _ !== null ? _ + "Capture" : null : _;
          J = [];
          for (var y = T, z; y !== null; ) {
            var R = y;
            if (z = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || z === null || p === null || (R = ha(y, p), R != null && J.push(
              Za(y, R, z)
            )), De) break;
            y = y.return;
          }
          0 < J.length && (_ = new O(
            _,
            X,
            null,
            n,
            C
          ), B.push({ event: _, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", _ && n !== ku && (X = n.relatedTarget || n.fromElement) && (bl(X) || X[pl]))
            break e;
          if ((O || _) && (_ = C.window === C ? C : (_ = C.ownerDocument) ? _.defaultView || _.parentWindow : window, O ? (X = n.relatedTarget || n.toElement, O = T, X = X ? bl(X) : null, X !== null && (De = S(X), J = X.tag, X !== De || J !== 5 && J !== 27 && J !== 6) && (X = null)) : (O = null, X = T), O !== X)) {
            if (J = js, R = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (J = Ys, R = "onPointerLeave", p = "onPointerEnter", y = "pointer"), De = O == null ? _ : da(O), z = X == null ? _ : da(X), _ = new J(
              R,
              y + "leave",
              O,
              n,
              C
            ), _.target = De, _.relatedTarget = z, R = null, bl(C) === T && (J = new J(
              p,
              y + "enter",
              X,
              n,
              C
            ), J.target = z, J.relatedTarget = De, R = J), De = R, O && X)
              t: {
                for (J = l0, p = O, y = X, z = 0, R = p; R; R = J(R))
                  z++;
                R = 0;
                for (var K = y; K; K = J(K))
                  R++;
                for (; 0 < z - R; )
                  p = J(p), z--;
                for (; 0 < R - z; )
                  y = J(y), R--;
                for (; z--; ) {
                  if (p === y || y !== null && p === y.alternate) {
                    J = p;
                    break t;
                  }
                  p = J(p), y = J(y);
                }
                J = null;
              }
            else J = null;
            O !== null && Bd(
              B,
              _,
              O,
              J,
              !1
            ), X !== null && De !== null && Bd(
              B,
              De,
              X,
              J,
              !0
            );
          }
        }
        e: {
          if (_ = T ? da(T) : window, O = _.nodeName && _.nodeName.toLowerCase(), O === "select" || O === "input" && _.type === "file")
            var ze = Ws;
          else if (Ks(_))
            if ($s)
              ze = mg;
            else {
              ze = dg;
              var V = fg;
            }
          else
            O = _.nodeName, !O || O.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? T && Yu(T.elementType) && (ze = Ws) : ze = hg;
          if (ze && (ze = ze(e, T))) {
            Js(
              B,
              ze,
              n,
              C
            );
            break e;
          }
          V && V(e, _, T), e === "focusout" && T && _.type === "number" && T.memoizedProps.value != null && Gu(_, "number", _.value);
        }
        switch (V = T ? da(T) : window, e) {
          case "focusin":
            (Ks(V) || V.contentEditable === "true") && (Ml = V, tc = T, Ea = null);
            break;
          case "focusout":
            Ea = tc = Ml = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, ao(B, n, C);
            break;
          case "selectionchange":
            if (vg) break;
          case "keydown":
          case "keyup":
            ao(B, n, C);
        }
        var ce;
        if (Fu)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          Nl ? Qs(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ve = "onCompositionStart");
        ve && (ks && n.locale !== "ko" && (Nl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Nl && (ce = Ls()) : (bn = C, Zu = "value" in bn ? bn.value : bn.textContent, Nl = !0)), V = ou(T, ve), 0 < V.length && (ve = new Gs(
          ve,
          e,
          null,
          n,
          C
        ), B.push({ event: ve, listeners: V }), ce ? ve.data = ce : (ce = Zs(n), ce !== null && (ve.data = ce)))), (ce = ug ? cg(e, n) : rg(e, n)) && (ve = ou(T, "onBeforeInput"), 0 < ve.length && (V = new Gs(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          C
        ), B.push({
          event: V,
          listeners: ve
        }), V.data = ce)), Ig(
          B,
          e,
          T,
          n,
          C
        );
      }
      Rd(B, t);
    });
  }
  function Za(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function ou(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ha(e, n), a != null && l.unshift(
        Za(e, a, i)
      ), a = ha(e, t), a != null && l.push(
        Za(e, a, i)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function l0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Bd(e, t, n, l, a) {
    for (var i = t._reactName, u = []; n !== null && n !== l; ) {
      var s = n, d = s.alternate, T = s.stateNode;
      if (s = s.tag, d !== null && d === l) break;
      s !== 5 && s !== 26 && s !== 27 || T === null || (d = T, a ? (T = ha(n, i), T != null && u.unshift(
        Za(n, T, d)
      )) : a || (T = ha(n, i), T != null && u.push(
        Za(n, T, d)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var a0 = /\r\n?/g, i0 = /\u0000|\uFFFD/g;
  function xd(e) {
    return (typeof e == "string" ? e : "" + e).replace(a0, `
`).replace(i0, "");
  }
  function Hd(e, t) {
    return t = xd(t), xd(e) === t;
  }
  function Oe(e, t, n, l, a, i) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Al(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Al(e, "" + l);
        break;
      case "className":
        mi(e, "class", l);
        break;
      case "tabIndex":
        mi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mi(e, n, l);
        break;
      case "style":
        Bs(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          mi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = vi("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", a.name, a, null), Oe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Oe(e, t, "encType", a.encType, a, null), Oe(e, t, "method", a.method, a, null), Oe(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = vi("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = $t);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = vi("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        he("beforetoggle", e), he("toggle", e), hi(e, "popover", l);
        break;
      case "xlinkActuate":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        hi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Um.get(n) || n, hi(e, n, l));
    }
  }
  function Nr(e, t, n, l, a, i) {
    switch (n) {
      case "style":
        Bs(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(r(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Al(e, l) : (typeof l == "number" || typeof l == "bigint") && Al(e, "" + l);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = $t);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ws.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof l == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : hi(e, n, l);
          }
    }
  }
  function it(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        he("error", e), he("load", e);
        var l = !1, a = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var u = n[i];
            if (u != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Oe(e, t, i, u, n, null);
              }
          }
        a && Oe(e, t, "srcSet", n.srcSet, n, null), l && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        he("invalid", e);
        var s = i = u = a = null, d = null, T = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var C = n[l];
            if (C != null)
              switch (l) {
                case "name":
                  a = C;
                  break;
                case "type":
                  u = C;
                  break;
                case "checked":
                  d = C;
                  break;
                case "defaultChecked":
                  T = C;
                  break;
                case "value":
                  i = C;
                  break;
                case "defaultValue":
                  s = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Oe(e, t, l, C, n, null);
              }
          }
        Ds(
          e,
          i,
          s,
          d,
          T,
          u,
          a,
          !1
        );
        return;
      case "select":
        he("invalid", e), l = u = i = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (s = n[a], s != null))
            switch (a) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                l = s;
              default:
                Oe(e, t, a, s, n, null);
            }
        t = i, n = u, e.multiple = !!l, t != null ? Tl(e, !!l, t, !1) : n != null && Tl(e, !!l, n, !0);
        return;
      case "textarea":
        he("invalid", e), i = a = l = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (s = n[u], s != null))
            switch (u) {
              case "value":
                l = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                Oe(e, t, u, s, n, null);
            }
        Rs(e, l, a, i);
        return;
      case "option":
        for (d in n)
          if (n.hasOwnProperty(d) && (l = n[d], l != null))
            switch (d) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Oe(e, t, d, l, n, null);
            }
        return;
      case "dialog":
        he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Qa.length; l++)
          he(Qa[l], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in n)
          if (n.hasOwnProperty(T) && (l = n[T], l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Oe(e, t, T, l, n, null);
            }
        return;
      default:
        if (Yu(t)) {
          for (C in n)
            n.hasOwnProperty(C) && (l = n[C], l !== void 0 && Nr(
              e,
              t,
              C,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (s in n)
      n.hasOwnProperty(s) && (l = n[s], l != null && Oe(e, t, s, l, n, null));
  }
  function u0(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, u = null, s = null, d = null, T = null, C = null;
        for (O in n) {
          var B = n[O];
          if (n.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = B;
              default:
                l.hasOwnProperty(O) || Oe(e, t, O, null, l, B);
            }
        }
        for (var _ in l) {
          var O = l[_];
          if (B = n[_], l.hasOwnProperty(_) && (O != null || B != null))
            switch (_) {
              case "type":
                i = O;
                break;
              case "name":
                a = O;
                break;
              case "checked":
                T = O;
                break;
              case "defaultChecked":
                C = O;
                break;
              case "value":
                u = O;
                break;
              case "defaultValue":
                s = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== B && Oe(
                  e,
                  t,
                  _,
                  O,
                  l,
                  B
                );
            }
        }
        ju(
          e,
          u,
          s,
          d,
          T,
          C,
          i,
          a
        );
        return;
      case "select":
        O = u = s = _ = null;
        for (i in n)
          if (d = n[i], n.hasOwnProperty(i) && d != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                O = d;
              default:
                l.hasOwnProperty(i) || Oe(
                  e,
                  t,
                  i,
                  null,
                  l,
                  d
                );
            }
        for (a in l)
          if (i = l[a], d = n[a], l.hasOwnProperty(a) && (i != null || d != null))
            switch (a) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== d && Oe(
                  e,
                  t,
                  a,
                  i,
                  l,
                  d
                );
            }
        t = s, n = u, l = O, _ != null ? Tl(e, !!n, _, !1) : !!l != !!n && (t != null ? Tl(e, !!n, t, !0) : Tl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = _ = null;
        for (s in n)
          if (a = n[s], n.hasOwnProperty(s) && a != null && !l.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, s, null, l, a);
            }
        for (u in l)
          if (a = l[u], i = n[u], l.hasOwnProperty(u) && (a != null || i != null))
            switch (u) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                O = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && Oe(e, t, u, a, l, i);
            }
        Cs(e, _, O);
        return;
      case "option":
        for (var X in n)
          if (_ = n[X], n.hasOwnProperty(X) && _ != null && !l.hasOwnProperty(X))
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Oe(
                  e,
                  t,
                  X,
                  null,
                  l,
                  _
                );
            }
        for (d in l)
          if (_ = l[d], O = n[d], l.hasOwnProperty(d) && _ !== O && (_ != null || O != null))
            switch (d) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Oe(
                  e,
                  t,
                  d,
                  _,
                  l,
                  O
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in n)
          _ = n[J], n.hasOwnProperty(J) && _ != null && !l.hasOwnProperty(J) && Oe(e, t, J, null, l, _);
        for (T in l)
          if (_ = l[T], O = n[T], l.hasOwnProperty(T) && _ !== O && (_ != null || O != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(r(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  T,
                  _,
                  l,
                  O
                );
            }
        return;
      default:
        if (Yu(t)) {
          for (var De in n)
            _ = n[De], n.hasOwnProperty(De) && _ !== void 0 && !l.hasOwnProperty(De) && Nr(
              e,
              t,
              De,
              void 0,
              l,
              _
            );
          for (C in l)
            _ = l[C], O = n[C], !l.hasOwnProperty(C) || _ === O || _ === void 0 && O === void 0 || Nr(
              e,
              t,
              C,
              _,
              l,
              O
            );
          return;
        }
    }
    for (var p in n)
      _ = n[p], n.hasOwnProperty(p) && _ != null && !l.hasOwnProperty(p) && Oe(e, t, p, null, l, _);
    for (B in l)
      _ = l[B], O = n[B], !l.hasOwnProperty(B) || _ === O || _ == null && O == null || Oe(e, t, B, _, l, O);
  }
  function Ld(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function c0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], i = a.transferSize, u = a.initiatorType, s = a.duration;
        if (i && s && Ld(u)) {
          for (u = 0, s = a.responseEnd, l += 1; l < n.length; l++) {
            var d = n[l], T = d.startTime;
            if (T > s) break;
            var C = d.transferSize, B = d.initiatorType;
            C && Ld(B) && (d = d.responseEnd, u += C * (d < s ? 1 : (s - T) / (d - T)));
          }
          if (--l, t += 8 * (i + u) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Mr = null, Or = null;
  function fu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function qd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Dr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cr = null;
  function r0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Cr ? !1 : (Cr = e, !0) : (Cr = null, !1);
  }
  var Gd = typeof setTimeout == "function" ? setTimeout : void 0, s0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Yd = typeof Promise == "function" ? Promise : void 0, o0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yd < "u" ? function(e) {
    return Yd.resolve(null).then(e).catch(f0);
  } : Gd;
  function f0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hn(e) {
    return e === "head";
  }
  function kd(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), ta(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          Ka(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Ka(n);
          for (var i = n.firstChild; i; ) {
            var u = i.nextSibling, s = i.nodeName;
            i[fa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = u;
          }
        } else
          n === "body" && Ka(e.ownerDocument.body);
      n = a;
    } while (n);
    ta(t);
  }
  function Xd(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Rr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rr(n), Lu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function d0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[fa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = xt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function h0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ur(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Br(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function m0(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var xr = null;
  function Qd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return xt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Zd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Kd(e, t, n) {
    switch (t = fu(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Ka(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Lu(e);
  }
  var Ht = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function du(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var hn = x.d;
  x.d = {
    f: g0,
    r: v0,
    D: y0,
    C: p0,
    L: b0,
    m: S0,
    X: z0,
    S: E0,
    M: T0
  };
  function g0() {
    var e = hn.f(), t = lu();
    return e || t;
  }
  function v0(e) {
    var t = Sl(e);
    t !== null && t.tag === 5 && t.type === "form" ? ff(t) : hn.r(e);
  }
  var Pl = typeof document > "u" ? null : document;
  function Wd(e, t, n) {
    var l = Pl;
    if (l && typeof t == "string" && t) {
      var a = Mt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Jd.has(a) || (Jd.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), it(t, "link", e), $e(t), l.head.appendChild(t)));
    }
  }
  function y0(e) {
    hn.D(e), Wd("dns-prefetch", e, null);
  }
  function p0(e, t) {
    hn.C(e, t), Wd("preconnect", e, t);
  }
  function b0(e, t, n) {
    hn.L(e, t, n);
    var l = Pl;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Mt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Mt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Mt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Il(e);
          break;
        case "script":
          i = ea(e);
      }
      Ht.has(i) || (e = A(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Ht.set(i, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Ja(i)) || t === "script" && l.querySelector(Wa(i)) || (t = l.createElement("link"), it(t, "link", e), $e(t), l.head.appendChild(t)));
    }
  }
  function S0(e, t) {
    hn.m(e, t);
    var n = Pl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Mt(l) + '"][href="' + Mt(e) + '"]', i = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ea(e);
      }
      if (!Ht.has(i) && (e = A({ rel: "modulepreload", href: e }, t), Ht.set(i, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wa(i)))
              return;
        }
        l = n.createElement("link"), it(l, "link", e), $e(l), n.head.appendChild(l);
      }
    }
  }
  function E0(e, t, n) {
    hn.S(e, t, n);
    var l = Pl;
    if (l && e) {
      var a = El(l).hoistableStyles, i = Il(e);
      t = t || "default";
      var u = a.get(i);
      if (!u) {
        var s = { loading: 0, preload: null };
        if (u = l.querySelector(
          Ja(i)
        ))
          s.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Ht.get(i)) && Hr(e, n);
          var d = u = l.createElement("link");
          $e(d), it(d, "link", e), d._p = new Promise(function(T, C) {
            d.onload = T, d.onerror = C;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, hu(u, t, l);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: s
        }, a.set(i, u);
      }
    }
  }
  function z0(e, t) {
    hn.X(e, t);
    var n = Pl;
    if (n && e) {
      var l = El(n).hoistableScripts, a = ea(e), i = l.get(a);
      i || (i = n.querySelector(Wa(a)), i || (e = A({ src: e, async: !0 }, t), (t = Ht.get(a)) && Lr(e, t), i = n.createElement("script"), $e(i), it(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function T0(e, t) {
    hn.M(e, t);
    var n = Pl;
    if (n && e) {
      var l = El(n).hoistableScripts, a = ea(e), i = l.get(a);
      i || (i = n.querySelector(Wa(a)), i || (e = A({ src: e, async: !0, type: "module" }, t), (t = Ht.get(a)) && Lr(e, t), i = n.createElement("script"), $e(i), it(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, l.set(a, i));
    }
  }
  function $d(e, t, n, l) {
    var a = (a = ie.current) ? du(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Il(n.href), n = El(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Il(n.href);
          var i = El(
            a
          ).hoistableStyles, u = i.get(e);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, u), (i = a.querySelector(
            Ja(e)
          )) && !i._p && (u.instance = i, u.state.loading = 5), Ht.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ht.set(e, n), i || A0(
            a,
            e,
            n,
            u.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return u;
        }
        if (t && l !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ea(n), n = El(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Il(e) {
    return 'href="' + Mt(e) + '"';
  }
  function Ja(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fd(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function A0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), it(t, "link", n), $e(t), e.head.appendChild(t));
  }
  function ea(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function Wa(e) {
    return "script[async]" + e;
  }
  function Pd(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Mt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, $e(l), l;
          var a = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), $e(l), it(l, "style", a), hu(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = Il(n.href);
          var i = e.querySelector(
            Ja(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          l = Fd(n), (a = Ht.get(a)) && Hr(l, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var u = i;
          return u._p = new Promise(function(s, d) {
            u.onload = s, u.onerror = d;
          }), it(i, "link", l), t.state.loading |= 4, hu(i, n.precedence, e), t.instance = i;
        case "script":
          return i = ea(n.src), (a = e.querySelector(
            Wa(i)
          )) ? (t.instance = a, $e(a), a) : (l = n, (a = Ht.get(i)) && (l = A({}, n), Lr(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), it(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, hu(l, n.precedence, e));
    return t.instance;
  }
  function hu(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, i = a, u = 0; u < l.length; u++) {
      var s = l[u];
      if (s.dataset.precedence === t) i = s;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Hr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Lr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var mu = null;
  function Id(e, t, n) {
    if (mu === null) {
      var l = /* @__PURE__ */ new Map(), a = mu = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = mu, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var i = n[a];
      if (!(i[fa] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var s = l.get(u);
        s ? s.push(i) : l.set(u, [i]);
      }
    }
    return l;
  }
  function eh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function w0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function th(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _0(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = Il(l.href), i = t.querySelector(
          Ja(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, l = Fd(l), (a = Ht.get(a)) && Hr(l, a), i = i.createElement("link"), $e(i);
        var u = i;
        u._p = new Promise(function(s, d) {
          u.onload = s, u.onerror = d;
        }), it(i, "link", l), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = gu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var qr = 0;
  function N0(e, t) {
    return e.stylesheets && e.count === 0 && yu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && yu(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && qr === 0 && (qr = 62500 * c0());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yu(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > qr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function gu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) yu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vu = null;
  function yu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vu = /* @__PURE__ */ new Map(), t.forEach(M0, e), vu = null, gu.call(e));
  }
  function M0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = vu.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), vu.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var u = a[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), l = u);
        }
        l && n.set(null, l);
      }
      a = t.instance, u = a.getAttribute("data-precedence"), i = n.get(u) || l, i === l && n.set(null, a), n.set(u, a), this.count++, l = gu.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var $a = {
    $$typeof: ne,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function O0(e, t, n, l, a, i, u, s, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Uu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uu(0), this.hiddenUpdates = Uu(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, t, n, l, a, i, u, s, d, T, C, B) {
    return e = new O0(
      e,
      t,
      n,
      u,
      d,
      T,
      C,
      B,
      s
    ), t = 1, i === !0 && (t |= 24), i = Et(3, null, null, t), e.current = i, i.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Ec(i), e;
  }
  function lh(e) {
    return e ? (e = Cl, e) : Cl;
  }
  function ah(e, t, n, l, a, i) {
    a = lh(a), l.context === null ? l.context = a : l.pendingContext = a, l = wn(t), l.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (l.callback = i), n = _n(e, l, t), n !== null && (vt(n, e, t), Ma(n, e, t));
  }
  function ih(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jr(e, t) {
    ih(e, t), (e = e.alternate) && ih(e, t);
  }
  function uh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Fn(e, 67108864);
      t !== null && vt(t, e, 67108864), jr(e, 67108864);
    }
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = _t();
      t = Bu(t);
      var n = Fn(e, t);
      n !== null && vt(n, e, t), jr(e, t);
    }
  }
  var pu = !0;
  function D0(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var i = x.p;
    try {
      x.p = 2, Gr(e, t, n, l);
    } finally {
      x.p = i, M.T = a;
    }
  }
  function C0(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var i = x.p;
    try {
      x.p = 8, Gr(e, t, n, l);
    } finally {
      x.p = i, M.T = a;
    }
  }
  function Gr(e, t, n, l) {
    if (pu) {
      var a = Yr(l);
      if (a === null)
        _r(
          e,
          t,
          l,
          bu,
          n
        ), sh(e, l);
      else if (U0(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (sh(e, l), t & 4 && -1 < R0.indexOf(e)) {
        for (; a !== null; ) {
          var i = Sl(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Zn(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var d = 1 << 31 - bt(u);
                      s.entanglements[1] |= d, u &= ~d;
                    }
                    Vt(i), (Ae & 6) === 0 && (tu = He() + 500, Va(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Fn(i, 2), s !== null && vt(s, i, 2), lu(), jr(i, 2);
            }
          if (i = Yr(l), i === null && _r(
            e,
            t,
            l,
            bu,
            n
          ), i === a) break;
          a = i;
        }
        a !== null && l.stopPropagation();
      } else
        _r(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Yr(e) {
    return e = Xu(e), kr(e);
  }
  var bu = null;
  function kr(e) {
    if (bu = null, e = bl(e), e !== null) {
      var t = S(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = w(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = E(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return bu = e, null;
  }
  function rh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (st()) {
          case gn:
            return 2;
          case Vn:
            return 8;
          case Jt:
          case ca:
            return 32;
          case pt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xr = !1, Ln = null, qn = null, jn = null, Fa = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map(), Gn = [], R0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        jn = null;
        break;
      case "pointerover":
      case "pointerout":
        Fa.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pa.delete(t.pointerId);
    }
  }
  function Ia(e, t, n, l, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = Sl(t), t !== null && uh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function U0(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Ln = Ia(
          Ln,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return qn = Ia(
          qn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return jn = Ia(
          jn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Fa.set(
          i,
          Ia(
            Fa.get(i) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Pa.set(
          i,
          Ia(
            Pa.get(i) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function oh(e) {
    var t = bl(e.target);
    if (t !== null) {
      var n = S(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = w(n), t !== null) {
            e.blockedOn = t, zs(e.priority, function() {
              ch(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = E(n), t !== null) {
            e.blockedOn = t, zs(e.priority, function() {
              ch(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Su(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        ku = l, n.target.dispatchEvent(l), ku = null;
      } else
        return t = Sl(n), t !== null && uh(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fh(e, t, n) {
    Su(e) && n.delete(t);
  }
  function B0() {
    Xr = !1, Ln !== null && Su(Ln) && (Ln = null), qn !== null && Su(qn) && (qn = null), jn !== null && Su(jn) && (jn = null), Fa.forEach(fh), Pa.forEach(fh);
  }
  function Eu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xr || (Xr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      B0
    )));
  }
  var zu = null;
  function dh(e) {
    zu !== e && (zu = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        zu === e && (zu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (kr(l || n) === null)
              continue;
            break;
          }
          var i = Sl(n);
          i !== null && (e.splice(t, 3), t -= 3, Yc(
            i,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function ta(e) {
    function t(d) {
      return Eu(d, e);
    }
    Ln !== null && Eu(Ln, e), qn !== null && Eu(qn, e), jn !== null && Eu(jn, e), Fa.forEach(t), Pa.forEach(t);
    for (var n = 0; n < Gn.length; n++) {
      var l = Gn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null); )
      oh(n), n.blockedOn === null && Gn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], i = n[l + 1], u = a[ot] || null;
        if (typeof i == "function")
          u || dh(n);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, u = i[ot] || null)
              s = u.formAction;
            else if (kr(a) !== null) continue;
          } else s = u.action;
          typeof s == "function" ? n[l + 1] = s : (n.splice(l, 3), l -= 3), dh(n);
        }
      }
  }
  function hh() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return a = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Vr(e) {
    this._internalRoot = e;
  }
  Tu.prototype.render = Vr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = _t();
    ah(n, l, e, t, null, null);
  }, Tu.prototype.unmount = Vr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), lu(), t[pl] = null;
    }
  };
  function Tu(e) {
    this._internalRoot = e;
  }
  Tu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Es();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++) ;
      Gn.splice(n, 0, e), n === 0 && oh(e);
    }
  };
  var mh = o.version;
  if (mh !== "19.2.0")
    throw Error(
      r(
        527,
        mh,
        "19.2.0"
      )
    );
  x.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = v(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var x0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Au.isDisabled && Au.supportsFiber)
      try {
        vn = Au.inject(
          x0
        ), et = Au;
      } catch {
      }
  }
  return ti.createRoot = function(e, t) {
    if (!h(e)) throw Error(r(299));
    var n = !1, l = "", a = Ef, i = zf, u = Tf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = nh(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      i,
      u,
      hh
    ), e[pl] = t.current, wr(e), new Vr(t);
  }, ti.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(r(299));
    var l = !1, a = "", i = Ef, u = zf, s = Tf, d = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (d = n.formState)), t = nh(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      d,
      i,
      u,
      s,
      hh
    ), t.context = lh(null), n = t.current, l = _t(), l = Bu(l), a = wn(l), a.callback = null, _n(n, a, l), n = l, t.current.lanes = n, oa(t, n), Vt(t), e[pl] = t.current, wr(e), new Tu(t);
  }, ti.version = "19.2.0", ti;
}
var Ah;
function V0() {
  if (Ah) return Kr.exports;
  Ah = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Kr.exports = X0(), Kr.exports;
}
var Q0 = V0();
function Z0(c) {
  const [o, f] = b.useState(c);
  return c !== o && (!c || !o || c.length !== o.length || c.some((r, h) => r !== o[h])) ? (f(c), c) : o;
}
function K0(c, [o, f]) {
  const [r, h] = c;
  return r !== void 0 && h !== void 0 && o !== void 0 && f !== void 0 && o > r && o - r <= 20 && f < h ? [r, f] : r !== o || h !== f ? [o, f] : c;
}
function J0(c, o) {
  let f = c?.clientWidth;
  if (f !== void 0 && o && o.length > 0) {
    const r = [...o.filter((h) => h > 0)].sort((h, S) => S - h);
    r.push(Math.floor(r[r.length - 1] / 2)), f = r.find((h, S) => h <= f || S === r.length - 1);
  }
  return f;
}
function W0(c, o, f) {
  const [[r], h] = b.useReducer(K0, [f]), S = Z0(o), w = b.useRef(void 0);
  return { containerRef: b.useCallback(
    (m) => {
      w.current?.disconnect(), w.current = void 0;
      const v = () => h([J0(m, S), window.innerWidth - document.documentElement.clientWidth]);
      v(), m && typeof ResizeObserver < "u" && (w.current = new ResizeObserver(v), w.current.observe(m)), typeof c == "function" ? c(m) : c && (c.current = m);
    },
    [c, S]
  ), containerWidth: r };
}
function $0(...c) {
  return [...c].filter(Boolean).join(" ");
}
function qh(c) {
  return ["react-photo-album", c].filter(Boolean).join("--");
}
function F0(c) {
  return `--${qh(c)}`;
}
function os({ width: c, height: o }) {
  return c / o;
}
const P0 = Object.freeze([1200, 600, 300, 0]);
function kn(c, o) {
  return typeof c == "function" ? c(o) : c;
}
function jh(c, o) {
  return o !== void 0 ? kn(c, o) : void 0;
}
function I0(c, o) {
  const f = P0.findIndex((r) => r <= o);
  return kn(c[Math.max(f, 0)], o);
}
function as(c, o, f, r = 0) {
  if (o === void 0) return;
  const h = jh(c, o);
  return Math.round(Math.max(h === void 0 ? I0(f, o) : h, r));
}
function ev(c, {
  spacing: o,
  padding: f,
  componentsProps: r,
  render: h
}) {
  return {
    spacing: as(o, c, [20, 15, 10, 5]),
    padding: as(f, c, [0, 0, 0, 0]),
    componentsProps: kn(r, c) || {},
    render: kn(h, c)
  };
}
function ni(c, o = 0) {
  const f = 10 ** o;
  return Math.round((c + Number.EPSILON) * f) / f;
}
function tv(c, o, f, r, h, S, w) {
  let E, m;
  const v = (A) => {
    const D = S * (h - 1) + 2 * w * h;
    return `calc((${A.match(/^\s*calc\((.*)\)\s*$/)?.[1] ?? A} - ${D}px) / ${ni((r - D) / f, 5)})`;
  }, U = c.srcSet;
  return U && U.length > 0 && (E = U.concat(
    U.some(({ width: A }) => A === c.width) ? [] : [{ src: c.src, width: c.width, height: c.height }]
  ).sort((A, D) => A.width - D.width).map((A) => `${A.src} ${A.width}w`).join(", ")), o?.size ? m = (o.sizes || []).map(({ viewport: A, size: D }) => `${A} ${v(D)}`).concat(v(o.size)).join(", ") : m = `${Math.ceil(f / r * 100)}vw`, { srcSet: E, sizes: m };
}
function nv({
  as: c,
  render: o,
  context: f,
  classes: r = [],
  variables: h = {},
  style: S,
  className: w,
  children: E,
  ...m
}, v) {
  const U = $0(
    ...(Array.isArray(r) ? r : [r]).filter((H) => typeof H == "string").map(qh),
    w
  ), D = { style: {
    ...Object.fromEntries(
      Object.entries(h).map(([H, L]) => [
        F0(H.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
        typeof L == "number" ? ni(L, 5) : L
      ])
    ),
    ...S
  }, className: U, children: E, ...m };
  if (o) {
    const H = o({ ref: v, ...D }, f);
    if (H) return H;
  }
  const q = c || "div";
  return ee.jsx(q, { ref: v, ...D });
}
const _u = b.forwardRef(nv);
function lv({
  photo: c,
  index: o,
  width: f,
  height: r,
  onClick: h,
  render: { wrapper: S, link: w, button: E, image: m, extras: v } = {},
  componentsProps: { link: U, button: A, wrapper: D, image: q } = {}
}, H) {
  const { href: L } = c, W = { photo: c, index: o, width: ni(f, 3), height: ni(r, 3) };
  let Z;
  return L ? Z = { ...U, as: "a", render: w, classes: ["photo", "link"], href: L, onClick: h } : h ? Z = { ...A, as: "button", type: "button", render: E, classes: ["photo", "button"], onClick: h } : Z = { ...D, render: S, classes: "photo" }, ee.jsxs(
    _u,
    {
      ref: H,
      variables: { photoWidth: W.width, photoHeight: W.height },
      context: W,
      ...Z,
      children: [
        ee.jsx(_u, { as: "img", classes: "image", render: m, context: W, ...q }),
        v?.({}, W)
      ]
    }
  );
}
const av = b.forwardRef(lv);
function iv({
  layout: c,
  sizes: o,
  model: f,
  skeleton: r,
  onClick: h,
  render: { container: S, track: w, photo: E, ...m } = {},
  componentsProps: {
    container: v,
    track: U,
    link: A,
    button: D,
    wrapper: q,
    image: H
  } = {}
}, L) {
  const { spacing: W, padding: Z, containerWidth: te, tracks: ne, variables: me, horizontal: ye } = f || {};
  return ee.jsxs(
    _u,
    {
      role: "group",
      "aria-label": "Photo album",
      ...v,
      variables: { spacing: W, padding: Z, containerWidth: te, ...me },
      classes: ["", c],
      render: S,
      ref: L,
      children: [
        W !== void 0 && Z !== void 0 && te !== void 0 && ne?.map(({ photos: $, variables: G }, re) => {
          const ae = $.length, Ke = ye ? ae : ne.length;
          return b.createElement(
            _u,
            {
              ...U,
              key: re,
              render: w,
              classes: "track",
              variables: { trackSize: ae, ...G }
            },
            $.map((se) => {
              const { photo: be, index: F, width: Ee } = se, { key: I, src: M, alt: x, title: Q, label: oe } = be, Se = h ? (N) => {
                h({ event: N, photo: be, index: F });
              } : void 0;
              if (E) {
                const N = E({ onClick: Se }, se);
                if (N) return N;
              }
              const g = (N) => oe ? { "aria-label": oe, ...N } : N;
              return ee.jsx(
                av,
                {
                  onClick: Se,
                  render: m,
                  componentsProps: {
                    image: {
                      loading: "lazy",
                      decoding: "async",
                      src: M,
                      alt: x,
                      title: Q,
                      ...tv(be, o, Ee, te, Ke, W, Z),
                      ...kn(H, se)
                    },
                    link: g(kn(A, se)),
                    button: g(kn(D, se)),
                    wrapper: kn(q, se)
                  },
                  ...se
                },
                I ?? M
              );
            })
          );
        }),
        te === void 0 && r
      ]
    }
  );
}
const uv = b.forwardRef(iv);
function cv(c, { photos: o, targetRowHeight: f, rowConstraints: r, ...h }) {
  const { spacing: S, padding: w, componentsProps: E, render: m } = ev(c, h), { singleRowMaxHeight: v, minPhotos: U, maxPhotos: A } = jh(r, c) || {};
  if (v !== void 0 && S !== void 0 && w !== void 0) {
    const D = Math.floor(
      o.reduce(
        (q, { width: H, height: L }) => q + H / L * v - 2 * w,
        w * o.length * 2 + S * (o.length - 1)
      )
    );
    D > 0 && (E.container = { ...E.container }, E.container.style = { maxWidth: D, ...E.container.style });
  }
  return {
    ...h,
    targetRowHeight: as(f, c, [
      (D) => D / 5,
      (D) => D / 4,
      (D) => D / 3,
      (D) => D / 2
    ]),
    render: m,
    spacing: S,
    padding: w,
    minPhotos: U,
    maxPhotos: A,
    componentsProps: E
  };
}
function rv(c) {
  return (o, f) => c(f) - c(o);
}
function sv(c) {
  let o = 0;
  const f = [], r = (U, A) => c(f[U], f[A]) < 0, h = (U, A) => {
    const D = f[U];
    f[U] = f[A], f[A] = D;
  }, S = (U) => {
    let A = U, D = Math.floor(A / 2);
    for (; A > 1 && r(D, A); )
      h(D, A), A = D, D = Math.floor(A / 2);
  }, w = (U) => {
    let A = U, D = A * 2;
    for (; D <= o && (D < o && r(D, D + 1) && (D += 1), !!r(A, D)); )
      h(A, D), A = D, D = A * 2;
  };
  return { push: (U) => {
    o += 1, f[o] = U, S(o);
  }, pop: () => {
    if (o === 0) return;
    h(1, o), o -= 1;
    const U = f.pop();
    return w(1), U;
  }, size: () => o };
}
function ov(c, o, f) {
  const r = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
  S.set(o, 0);
  const w = sv(rv((E) => E[1]));
  for (w.push([o, 0]); w.size() > 0; ) {
    const [E, m] = w.pop();
    if (!h.has(E)) {
      const v = c(E);
      h.add(E), v.forEach((U, A) => {
        const D = m + U, q = r.get(A), H = S.get(A);
        (H === void 0 || H > D && (H / D > 1.005 || q !== void 0 && q < E)) && (S.set(A, D), w.push([A, D]), r.set(A, E));
      });
    }
  }
  return S.has(f) ? r : void 0;
}
function fv(c, o) {
  if (!c) return;
  const f = [];
  for (let r = o; r !== void 0; r = c.get(r))
    f.push(r);
  return f.reverse();
}
function dv(c, o, f) {
  return fv(ov(c, o, f), f);
}
function hv(c, o, f, r) {
  return ni(o / f / Math.min(...c.map((h) => os(h)))) + (r || 0) + 2;
}
function Gh(c, o, f, r) {
  return (o - (c.length - 1) * f - 2 * r * c.length) / c.reduce((h, S) => h + os(S), 0);
}
function mv(c, o, f, r, h, S, w) {
  const E = c.slice(o, f), m = Gh(E, r, h, S);
  return m > 0 ? (m - w) ** 2 * E.length : void 0;
}
function gv(c, o, f, r, h, S, w, E) {
  return (m) => {
    const v = /* @__PURE__ */ new Map();
    v.set(m, 0);
    const U = w || 1, A = Math.min(S, E || 1 / 0);
    for (let D = m + U; D < c.length + 1 && !(D - m > A); D += 1) {
      const q = mv(c, m, D, r, o, f, h);
      if (q === void 0) break;
      v.set(D, q);
    }
    return v;
  };
}
function vv(c, o, f, r, h, S, w) {
  const E = hv(c, r, h, S), m = gv(
    c,
    o,
    f,
    r,
    h,
    E,
    S,
    w
  ), v = dv(m, 0, c.length);
  if (!v) return;
  const U = [];
  for (let A = 1; A < v.length; A += 1) {
    const D = c.map((H, L) => ({ photo: H, index: L })).slice(v[A - 1], v[A]), q = Gh(
      D.map(({ photo: H }) => H),
      r,
      o,
      f
    );
    U.push({
      photos: D.map(({ photo: H, index: L }) => ({
        photo: H,
        index: L,
        width: q * os(H),
        height: q
      }))
    });
  }
  return { spacing: o, padding: f, containerWidth: r, tracks: U, horizontal: !0 };
}
function yv({ photos: c, breakpoints: o, defaultContainerWidth: f, ...r }, h) {
  const { containerRef: S, containerWidth: w } = W0(h, o, f), { spacing: E, padding: m, targetRowHeight: v, minPhotos: U, maxPhotos: A, ...D } = cv(w, {
    photos: c,
    ...r
  }), q = b.useMemo(
    () => w !== void 0 && E !== void 0 && m !== void 0 && v !== void 0 ? vv(c, E, m, w, v, U, A) : void 0,
    [c, E, m, w, v, U, A]
  );
  return ee.jsx(uv, { layout: "rows", ref: S, model: q, ...D });
}
const pv = b.forwardRef(yv), Yh = "carousel", kh = "controller", bv = "navigation", Sv = "no-scroll", fs = "portal", Ev = "root", Xh = "toolbar", Fr = "loading", Pr = "error", Ir = "complete", zv = "placeholder", Tv = (c) => `active-slide-${c}`, Vh = "flex_center", Av = "no_scroll", Qh = "no_scroll_padding", ds = "slide", wv = "slide_wrapper", fl = "prev", dl = "next", wh = "swipe", la = "close", Zh = "onPointerDown", Kh = "onPointerMove", Jh = "onPointerUp", Wh = "onPointerLeave", $h = "onPointerCancel", Fh = "onKeyDown", _v = "onKeyUp", Ph = "onWheel", Nv = "Escape", Mv = "ArrowLeft", Ov = "ArrowRight", Dv = "button", is = "icon", Ih = "contain", _h = "cover", Cv = "Unknown action type";
var Rv = Lh();
const em = "yarl__";
function mn(...c) {
  return [...c].filter(Boolean).join(" ");
}
function we(c) {
  return `${em}${c}`;
}
function yt(c) {
  return `--${em}${c}`;
}
function li(c, o) {
  return `${c}${o ? `_${o}` : ""}`;
}
function hs(c) {
  return (o) => li(c, o);
}
function aa(c, o) {
  var f;
  return (f = c?.[o]) !== null && f !== void 0 ? f : o;
}
function Uv(c, o, f) {
  return aa(c, "{index} of {total}").replace(/\{index}/g, `${ms(f, o.length) + 1}`).replace(/\{total}/g, `${o.length}`);
}
function tm(...c) {
  return () => {
    c.forEach((o) => {
      o();
    });
  };
}
function Xn(c, o, f) {
  return () => {
    const r = b.useContext(f);
    if (!r)
      throw new Error(`${c} must be used within a ${o}.Provider`);
    return r;
  };
}
function nm() {
  return typeof window < "u";
}
function Bv(c, o = 0) {
  const f = 10 ** o;
  return Math.round((c + Number.EPSILON) * f) / f;
}
function lm(c) {
  return c.type === void 0 || c.type === "image";
}
function xv(c, o) {
  return c.imageFit === _h || c.imageFit !== Ih && o === _h;
}
function Mu(c) {
  return typeof c == "string" ? Number.parseInt(c, 10) : c;
}
function Nu(c) {
  if (typeof c == "number")
    return { pixel: c };
  if (typeof c == "string") {
    const o = Mu(c);
    return c.endsWith("%") ? { percent: o } : { pixel: o };
  }
  return { pixel: 0 };
}
function Hv(c, o) {
  const f = Nu(o), r = f.percent !== void 0 ? c.width / 100 * f.percent : f.pixel;
  return {
    width: Math.max(c.width - 2 * r, 0),
    height: Math.max(c.height - 2 * r, 0)
  };
}
function ms(c, o) {
  return o > 0 ? (c % o + o) % o : 0;
}
function am(c) {
  return c.length > 0;
}
function im(c, o) {
  return c[ms(o, c.length)];
}
function us(c, o) {
  return am(c) ? im(c, o) : void 0;
}
function Lv(c) {
  return lm(c) ? c.src : void 0;
}
function qv(c, o, f = 0) {
  return Math.min(c.preload, Math.max(c.finite ? o.length - 1 : Math.floor(o.length / 2), f));
}
const jv = Number(b.version.split(".")[0]) >= 19;
function Gv(c) {
  return { inert: jv ? c : c ? "" : void 0 };
}
function Yv(c) {
  c.scrollTop;
}
const cs = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [la] },
  labels: {},
  animation: {
    fade: 250,
    swipe: 500,
    easing: {
      fade: "ease",
      swipe: "ease-out",
      navigation: "ease-in-out"
    }
  },
  carousel: {
    finite: !1,
    preload: 2,
    padding: "16px",
    spacing: "30%",
    imageFit: Ih,
    imageProps: {}
  },
  controller: {
    ref: null,
    focus: !0,
    aria: !1,
    touchAction: "none",
    closeOnPullUp: !1,
    closeOnPullDown: !1,
    closeOnBackdropClick: !1,
    preventDefaultWheelX: !0,
    preventDefaultWheelY: !1,
    disableSwipeNavigation: !1
  },
  portal: {},
  noScroll: {
    disabled: !1
  },
  on: {},
  styles: {},
  className: ""
};
function hl(c, o) {
  return { name: c, component: o };
}
function Pe(c, o) {
  return { module: c, children: o };
}
function um(c, o, f) {
  return c.module.name === o ? f(c) : c.children ? [
    Pe(c.module, c.children.flatMap((r) => {
      var h;
      return (h = um(r, o, f)) !== null && h !== void 0 ? h : [];
    }))
  ] : [c];
}
function na(c, o, f) {
  return c.flatMap((r) => {
    var h;
    return (h = um(r, o, f)) !== null && h !== void 0 ? h : [];
  });
}
function kv(c, o = [], f = []) {
  let r = c;
  const h = (q) => {
    const H = [...r];
    for (; H.length > 0; ) {
      const L = H.pop();
      if (L?.module.name === q)
        return !0;
      L?.children && H.push(...L.children);
    }
    return !1;
  }, S = (q, H) => {
    if (q === "") {
      r = [Pe(H, r)];
      return;
    }
    r = na(r, q, (L) => [Pe(H, [L])]);
  }, w = (q, H) => {
    r = na(r, q, (L) => [Pe(L.module, [Pe(H, L.children)])]);
  }, E = (q, H, L) => {
    r = na(r, q, (W) => {
      var Z;
      return [
        Pe(W.module, [
          ...L ? [Pe(H)] : [],
          ...(Z = W.children) !== null && Z !== void 0 ? Z : [],
          ...L ? [] : [Pe(H)]
        ])
      ];
    });
  }, m = (q, H, L) => {
    r = na(r, q, (W) => [
      ...L ? [Pe(H)] : [],
      W,
      ...L ? [] : [Pe(H)]
    ]);
  }, v = (q) => {
    w(kh, q);
  }, U = (q, H) => {
    r = na(r, q, (L) => [Pe(H, L.children)]);
  }, A = (q) => {
    r = na(r, q, (H) => H.children);
  }, D = (q) => {
    f.push(q);
  };
  return o.forEach((q) => {
    q({
      contains: h,
      addParent: S,
      append: w,
      addChild: E,
      addSibling: m,
      addModule: v,
      replace: U,
      remove: A,
      augment: D
    });
  }), {
    config: r,
    augmentation: (q) => f.reduce((H, L) => L(H), q)
  };
}
const cm = b.createContext(null), rm = Xn("useA11yContext", "A11yContext", cm);
function Xv({ children: c }) {
  const [o, f] = b.useState(!1), [r, h] = b.useState(!1), S = b.useMemo(() => ({ focusWithin: o, trackFocusWithin: (E, m) => {
    const v = (U) => (A) => {
      var D;
      A.currentTarget.contains(A.relatedTarget) || f(U), (D = U ? E : m) === null || D === void 0 || D(A);
    };
    return {
      onFocus: v(!0),
      onBlur: v(!1)
    };
  }, autoPlaying: r, setAutoPlaying: h }), [o, r]);
  return b.createElement(cm.Provider, { value: S }, c);
}
const sm = b.createContext(null), gs = Xn("useDocument", "DocumentContext", sm);
function Vv({ nodeRef: c, children: o }) {
  const f = b.useMemo(() => {
    const r = (S) => {
      var w;
      return ((w = S || c.current) === null || w === void 0 ? void 0 : w.ownerDocument) || document;
    };
    return { getOwnerDocument: r, getOwnerWindow: (S) => {
      var w;
      return ((w = r(S)) === null || w === void 0 ? void 0 : w.defaultView) || window;
    } };
  }, [c]);
  return b.createElement(sm.Provider, { value: f }, o);
}
const om = b.createContext(null), Ou = Xn("useEvents", "EventsContext", om);
function Qv({ children: c }) {
  const [o] = b.useState({});
  b.useEffect(() => () => {
    Object.keys(o).forEach((r) => delete o[r]);
  }, [o]);
  const f = b.useMemo(() => {
    const r = (w, E) => {
      var m;
      (m = o[w]) === null || m === void 0 || m.splice(0, o[w].length, ...o[w].filter((v) => v !== E));
    };
    return { publish: (...[w, E]) => {
      var m;
      (m = o[w]) === null || m === void 0 || m.forEach((v) => v(E));
    }, subscribe: (w, E) => (o[w] || (o[w] = []), o[w].push(E), () => r(w, E)), unsubscribe: r };
  }, [o]);
  return b.createElement(om.Provider, { value: f }, c);
}
const fm = b.createContext(null), ai = Xn("useLightboxProps", "LightboxPropsContext", fm);
function Zv({ children: c, ...o }) {
  return b.createElement(fm.Provider, { value: o }, c);
}
const dm = b.createContext(null), Du = Xn("useLightboxState", "LightboxStateContext", dm), hm = b.createContext(null), Kv = Xn("useLightboxDispatch", "LightboxDispatchContext", hm);
function Jv(c, o) {
  switch (o.type) {
    case "swipe": {
      const { slides: f } = c, r = o?.increment || 0, h = c.globalIndex + r, S = ms(h, f.length), w = us(f, S), E = r || o.duration !== void 0 ? {
        increment: r,
        duration: o.duration,
        easing: o.easing
      } : void 0;
      return { slides: f, currentIndex: S, globalIndex: h, currentSlide: w, animation: E };
    }
    case "update":
      return o.slides !== c.slides || o.index !== c.currentIndex ? {
        slides: o.slides,
        currentIndex: o.index,
        globalIndex: o.index,
        currentSlide: us(o.slides, o.index)
      } : c;
    default:
      throw new Error(Cv);
  }
}
function Wv({ slides: c, index: o, children: f }) {
  const [r, h] = b.useReducer(Jv, {
    slides: c,
    currentIndex: o,
    globalIndex: o,
    currentSlide: us(c, o)
  });
  b.useEffect(() => {
    h({ type: "update", slides: c, index: o });
  }, [c, o]);
  const S = b.useMemo(() => ({ ...r, state: r, dispatch: h }), [r, h]);
  return b.createElement(
    hm.Provider,
    { value: h },
    b.createElement(dm.Provider, { value: S }, f)
  );
}
const mm = b.createContext(null), Cu = Xn("useTimeouts", "TimeoutsContext", mm);
function $v({ children: c }) {
  const [o] = b.useState([]);
  b.useEffect(() => () => {
    o.forEach((r) => window.clearTimeout(r)), o.splice(0, o.length);
  }, [o]);
  const f = b.useMemo(() => {
    const r = (w) => {
      o.splice(0, o.length, ...o.filter((E) => E !== w));
    };
    return { setTimeout: (w, E) => {
      const m = window.setTimeout(() => {
        r(m), w();
      }, E);
      return o.push(m), m;
    }, clearTimeout: (w) => {
      w !== void 0 && (r(w), window.clearTimeout(w));
    } };
  }, [o]);
  return b.createElement(mm.Provider, { value: f }, c);
}
const gm = b.forwardRef(function({ label: o, className: f, icon: r, renderIcon: h, onClick: S, style: w, ...E }, m) {
  const { styles: v, labels: U } = ai(), A = aa(U, o);
  return b.createElement("button", { ref: m, type: "button", title: A, "aria-label": A, className: mn(we(Dv), f), onClick: S, style: { ...w, ...v.button }, ...E }, h ? h() : b.createElement(r, { className: we(is), style: v.icon }));
});
function Fv(c, o) {
  const f = (r) => b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, o);
  return f.displayName = c, f;
}
function ii(c, o) {
  return Fv(c, b.createElement(
    "g",
    { fill: "currentColor" },
    b.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    o
  ));
}
const Pv = ii("Close", b.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), Iv = ii("Previous", b.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), ey = ii("Next", b.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), ty = ii("Loading", b.createElement(b.Fragment, null, Array.from({ length: 8 }).map((c, o, f) => b.createElement("line", { key: o, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / f.length * (o + 1), transform: `rotate(${360 / f.length * o}, 12, 12)` })))), ny = ii("Error", b.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), ui = nm() ? b.useLayoutEffect : b.useEffect;
function vm() {
  const [c, o] = b.useState(!1);
  return b.useEffect(() => {
    var f, r;
    const h = (f = window.matchMedia) === null || f === void 0 ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)");
    o(h?.matches);
    const S = (w) => o(w.matches);
    return (r = h?.addEventListener) === null || r === void 0 || r.call(h, "change", S), () => {
      var w;
      return (w = h?.removeEventListener) === null || w === void 0 ? void 0 : w.call(h, "change", S);
    };
  }, []), c;
}
function ly(c) {
  let o = 0, f = 0, r = 0;
  const S = window.getComputedStyle(c).transform.match(/matrix.*\((.+)\)/);
  if (S) {
    const w = S[1].split(",").map(Mu);
    w.length === 6 ? (o = w[4], f = w[5]) : w.length === 16 && (o = w[12], f = w[13], r = w[14]);
  }
  return { x: o, y: f, z: r };
}
function Nh(c, o) {
  const f = b.useRef(void 0), r = b.useRef(void 0), h = vm();
  return ui(() => {
    var S, w, E;
    if (c.current && f.current !== void 0 && !h) {
      const { keyframes: m, duration: v, easing: U, onfinish: A } = o(f.current, c.current.getBoundingClientRect(), ly(c.current)) || {};
      if (m && v) {
        (S = r.current) === null || S === void 0 || S.cancel(), r.current = void 0;
        try {
          r.current = (E = (w = c.current).animate) === null || E === void 0 ? void 0 : E.call(w, m, { duration: v, easing: U });
        } catch (D) {
          console.error(D);
        }
        r.current && (r.current.onfinish = () => {
          r.current = void 0, A?.();
        });
      }
    }
    f.current = void 0;
  }), {
    prepareAnimation: (S) => {
      f.current = S;
    },
    isAnimationPlaying: () => {
      var S;
      return ((S = r.current) === null || S === void 0 ? void 0 : S.playState) === "running";
    }
  };
}
function ym() {
  const c = b.useRef(null), o = b.useRef(void 0), [f, r] = b.useState();
  return { setContainerRef: b.useCallback((S) => {
    c.current = S, o.current && (o.current.disconnect(), o.current = void 0);
    const w = () => {
      if (S) {
        const E = window.getComputedStyle(S), m = (v) => parseFloat(v) || 0;
        r({
          width: Math.round(S.clientWidth - m(E.paddingLeft) - m(E.paddingRight)),
          height: Math.round(S.clientHeight - m(E.paddingTop) - m(E.paddingBottom))
        });
      } else
        r(void 0);
    };
    w(), S && typeof ResizeObserver < "u" && (o.current = new ResizeObserver(w), o.current.observe(S));
  }, []), containerRef: c, containerRect: f };
}
function wu() {
  const c = b.useRef(void 0), { setTimeout: o, clearTimeout: f } = Cu();
  return b.useCallback((r, h) => {
    f(c.current), c.current = o(r, h > 0 ? h : 0);
  }, [o, f]);
}
function Ze(c) {
  const o = b.useRef(c);
  return ui(() => {
    o.current = c;
  }), b.useCallback((...f) => {
    var r;
    return (r = o.current) === null || r === void 0 ? void 0 : r.call(o, ...f);
  }, []);
}
function Mh(c, o) {
  typeof c == "function" ? c(o) : c && (c.current = o);
}
function rs(c, o) {
  return b.useMemo(() => c == null && o == null ? null : (f) => {
    Mh(c, f), Mh(o, f);
  }, [c, o]);
}
function ay(c, o = !1) {
  const f = b.useRef(!1);
  ui(() => {
    o && f.current && (f.current = !1, c());
  }, [o, c]);
  const r = b.useCallback(() => {
    f.current = !0;
  }, []), h = b.useCallback(() => {
    f.current = !1;
  }, []);
  return { onFocus: r, onBlur: h };
}
function vs() {
  const [c, o] = b.useState(!1);
  return ui(() => {
    o(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []), c;
}
function iy() {
  const [c] = b.useState({}), o = b.useCallback((h, S) => {
    var w;
    (w = c[h]) === null || w === void 0 || w.forEach((E) => {
      S.isPropagationStopped() || E(S);
    });
  }, [c]), f = b.useMemo(() => ({
    onPointerDown: (h) => o(Zh, h),
    onPointerMove: (h) => o(Kh, h),
    onPointerUp: (h) => o(Jh, h),
    onPointerLeave: (h) => o(Wh, h),
    onPointerCancel: (h) => o($h, h),
    onKeyDown: (h) => o(Fh, h),
    onKeyUp: (h) => o(_v, h),
    onWheel: (h) => o(Ph, h)
  }), [o]), r = b.useCallback((h, S) => (c[h] || (c[h] = []), c[h].unshift(S), () => {
    const w = c[h];
    w && w.splice(0, w.length, ...w.filter((E) => E !== S));
  }), [c]);
  return { registerSensors: f, subscribeSensors: r };
}
function Oh(c, o) {
  const f = b.useRef(0), r = wu(), h = Ze((...S) => {
    f.current = Date.now(), c(S);
  });
  return b.useCallback((...S) => {
    r(() => {
      h(S);
    }, o - (Date.now() - f.current));
  }, [o, h, r]);
}
const es = hs("slide"), ts = hs("slide_image");
function uy({ slide: c, offset: o, render: f, rect: r, imageFit: h, imageProps: S, onClick: w, onLoad: E, onError: m, style: v }) {
  var U, A, D, q, H, L, W, Z;
  const [te, ne] = b.useState(Fr), { publish: me } = Ou(), { setTimeout: ye } = Cu(), $ = b.useRef(null);
  b.useEffect(() => {
    o === 0 && me(Tv(te));
  }, [o, te, me]);
  const G = Ze((N) => {
    ("decode" in N ? N.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      N.parentNode && (ne(Ir), ye(() => {
        E?.(N);
      }, 0));
    });
  }), re = b.useCallback((N) => {
    $.current = N, N?.complete && G(N);
  }, [G]), ae = b.useCallback((N) => {
    G(N.currentTarget);
  }, [G]), Ke = Ze(() => {
    ne(Pr), m?.();
  }), se = xv(c, h), be = (N, j) => Number.isFinite(N) ? N : j, F = be(Math.max(...((A = (U = c.srcSet) === null || U === void 0 ? void 0 : U.map((N) => N.width)) !== null && A !== void 0 ? A : []).concat(c.width ? [c.width] : []).filter(Boolean)), ((D = $.current) === null || D === void 0 ? void 0 : D.naturalWidth) || 0), Ee = be(Math.max(...((H = (q = c.srcSet) === null || q === void 0 ? void 0 : q.map((N) => N.height)) !== null && H !== void 0 ? H : []).concat(c.height ? [c.height] : []).filter(Boolean)), ((L = $.current) === null || L === void 0 ? void 0 : L.naturalHeight) || 0), I = F && Ee ? {
    maxWidth: `min(${F}px, 100%)`,
    maxHeight: `min(${Ee}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, M = (W = c.srcSet) === null || W === void 0 ? void 0 : W.sort((N, j) => N.width - j.width).map((N) => `${N.src} ${N.width}w`).join(", "), x = () => r && !se && c.width && c.height ? r.height / c.height * c.width : Number.MAX_VALUE, Q = M && r && nm() ? `${Math.round(Math.min(x(), r.width))}px` : void 0, { style: oe, className: Se, ...g } = S || {};
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("img", { ref: re, onLoad: ae, onError: Ke, onClick: w, draggable: !1, className: mn(we(ts()), se && we(ts("cover")), te !== Ir && we(ts("loading")), Se), style: { ...I, ...v, ...oe }, ...g, alt: (Z = c.alt) !== null && Z !== void 0 ? Z : "", sizes: Q, srcSet: M, src: c.src }),
    te !== Ir && b.createElement(
      "div",
      { className: we(es(zv)) },
      te === Fr && (f?.iconLoading ? f.iconLoading() : b.createElement(ty, { className: mn(we(is), we(es(Fr))) })),
      te === Pr && (f?.iconError ? f.iconError() : b.createElement(ny, { className: mn(we(is), we(es(Pr))) }))
    )
  );
}
const cy = b.forwardRef(function({ className: o, children: f, onFocus: r, onBlur: h, ...S }, w) {
  const E = b.useRef(null), { trackFocusWithin: m } = rm();
  return b.createElement(
    Vv,
    { nodeRef: E },
    b.createElement("div", { ref: rs(w, E), className: mn(we("root"), o), ...m(r, h), ...S }, f)
  );
});
var ct;
(function(c) {
  c[c.NONE = 0] = "NONE", c[c.SWIPE = 1] = "SWIPE", c[c.PULL = 2] = "PULL", c[c.ANIMATION = 3] = "ANIMATION";
})(ct || (ct = {}));
function ry(c, o, f, r, h) {
  b.useEffect(
    () => tm(c(Zh, o), c(Kh, f), c(Jh, r), c(Wh, r), c($h, r)),
    [c, o, f, r, h]
  );
}
var Gt;
(function(c) {
  c[c.NONE = 0] = "NONE", c[c.SWIPE = 1] = "SWIPE", c[c.PULL = 2] = "PULL";
})(Gt || (Gt = {}));
const ns = 30;
function sy({ disableSwipeNavigation: c, closeOnBackdropClick: o }, f, r, h, S, w, E, m, v, U, A, D, q, H, L, W) {
  const Z = b.useRef(0), te = b.useRef([]), ne = b.useRef(void 0), me = b.useRef(0), ye = b.useRef(Gt.NONE), $ = b.useCallback((F) => {
    ne.current === F.pointerId && (ne.current = void 0, ye.current = Gt.NONE);
    const Ee = te.current;
    Ee.splice(0, Ee.length, ...Ee.filter((I) => I.pointerId !== F.pointerId));
  }, []), G = b.useCallback((F) => {
    $(F), F.persist(), te.current.push(F);
  }, [$]), re = b.useCallback((F) => te.current.find(({ pointerId: Ee }) => F.pointerId === Ee), []), ae = Ze((F) => {
    G(F);
  }), Ke = (F, Ee) => A && F > Ee || U && F < -Ee, se = Ze((F) => {
    const Ee = re(F);
    if (Ee)
      if (ne.current === F.pointerId) {
        const I = Date.now() - me.current, M = Z.current;
        ye.current === Gt.SWIPE ? Math.abs(M) > 0.3 * h || Math.abs(M) > 5 && I < S ? m(M, I) : v(M) : ye.current === Gt.PULL && (Ke(M, 2 * ns) ? H(M, I) : L(M)), Z.current = 0, ye.current = Gt.NONE;
      } else {
        const { target: I } = F;
        o && I instanceof HTMLElement && I === Ee.target && (I.classList.contains(we(ds)) || I.classList.contains(we(wv))) && W();
      }
    $(F);
  }), be = Ze((F) => {
    const Ee = re(F);
    if (Ee) {
      const I = ne.current === F.pointerId;
      if (F.buttons === 0) {
        I && Z.current !== 0 ? se(F) : $(Ee);
        return;
      }
      const M = F.clientX - Ee.clientX, x = F.clientY - Ee.clientY;
      if (ne.current === void 0) {
        const Q = (oe) => {
          G(F), ne.current = F.pointerId, me.current = Date.now(), ye.current = oe;
        };
        Math.abs(M) > Math.abs(x) && Math.abs(M) > ns && r(M) ? c || (Q(Gt.SWIPE), w()) : Math.abs(x) > Math.abs(M) && Ke(x, ns) && (Q(Gt.PULL), D());
      } else I && (ye.current === Gt.SWIPE ? (Z.current = M, E(M)) : ye.current === Gt.PULL && (Z.current = x, q(x)));
    }
  });
  ry(f, ae, be, se);
}
function oy({ preventDefaultWheelX: c, preventDefaultWheelY: o }) {
  const f = b.useRef(null), r = Ze((h) => {
    const S = Math.abs(h.deltaX) > Math.abs(h.deltaY);
    (S && c || !S && o || h.ctrlKey) && h.preventDefault();
  });
  return b.useCallback((h) => {
    var S;
    h ? h.addEventListener("wheel", r, { passive: !1 }) : (S = f.current) === null || S === void 0 || S.removeEventListener("wheel", r), f.current = h;
  }, [r]);
}
function fy(c, o, f, r, h, S, w, E, m) {
  const v = b.useRef(0), U = b.useRef(0), A = b.useRef(void 0), D = b.useRef(void 0), q = b.useRef(0), H = b.useRef(void 0), L = b.useRef(0), { setTimeout: W, clearTimeout: Z } = Cu(), te = b.useCallback(() => {
    A.current && (Z(A.current), A.current = void 0);
  }, [Z]), ne = b.useCallback(() => {
    D.current && (Z(D.current), D.current = void 0);
  }, [Z]), me = Ze(() => {
    c !== ct.SWIPE && (v.current = 0, L.current = 0, te(), ne());
  });
  b.useEffect(me, [c, me]);
  const ye = Ze((G) => {
    D.current = void 0, v.current === G && m(v.current);
  }), $ = Ze((G) => {
    if (G.ctrlKey || Math.abs(G.deltaY) > Math.abs(G.deltaX))
      return;
    const re = (ae) => {
      q.current = ae, Z(H.current), H.current = ae > 0 ? W(() => {
        q.current = 0, H.current = void 0;
      }, 300) : void 0;
    };
    if (c === ct.NONE) {
      if (Math.abs(G.deltaX) <= 1.2 * Math.abs(q.current)) {
        re(G.deltaX);
        return;
      }
      if (!f(-G.deltaX))
        return;
      if (U.current += G.deltaX, te(), Math.abs(U.current) > 30)
        U.current = 0, re(0), L.current = Date.now(), S();
      else {
        const ae = U.current;
        A.current = W(() => {
          A.current = void 0, ae === U.current && (U.current = 0);
        }, h);
      }
    } else if (c === ct.SWIPE) {
      let ae = v.current - G.deltaX;
      if (ae = Math.min(Math.abs(ae), r) * Math.sign(ae), v.current = ae, w(ae), ne(), Math.abs(ae) > 0.2 * r) {
        re(G.deltaX), E(ae, Date.now() - L.current);
        return;
      }
      D.current = W(() => ye(ae), 2 * h);
    } else
      re(G.deltaX);
  });
  b.useEffect(() => o(Ph, $), [o, $]);
}
const Dh = hs("container"), pm = b.createContext(null), ci = Xn("useController", "ControllerContext", pm);
function dy({ children: c, ...o }) {
  var f;
  const { carousel: r, animation: h, controller: S, on: w, styles: E, render: m } = o, { closeOnPullUp: v, closeOnPullDown: U, preventDefaultWheelX: A, preventDefaultWheelY: D } = S, [q, H] = b.useState(), L = Du(), W = Kv(), [Z, te] = b.useState(ct.NONE), ne = b.useRef(0), me = b.useRef(0), ye = b.useRef(1), { registerSensors: $, subscribeSensors: G } = iy(), { subscribe: re, publish: ae } = Ou(), Ke = wu(), se = wu(), be = wu(), { containerRef: F, setContainerRef: Ee, containerRect: I } = ym(), M = rs(oy({ preventDefaultWheelX: A, preventDefaultWheelY: D }), Ee), x = b.useRef(null), Q = rs(x, void 0), { getOwnerDocument: oe } = gs(), Se = vs(), g = (Y) => (Se ? -1 : 1) * (typeof Y == "number" ? Y : 1), N = Ze(() => {
    var Y;
    return (Y = F.current) === null || Y === void 0 ? void 0 : Y.focus();
  }), j = Ze(() => o), k = Ze(() => L), P = b.useCallback((Y) => ae(fl, Y), [ae]), ie = b.useCallback((Y) => ae(dl, Y), [ae]), fe = b.useCallback(() => ae(la), [ae]), Je = (Y) => !(r.finite && (g(Y) > 0 && L.currentIndex === 0 || g(Y) < 0 && L.currentIndex === L.slides.length - 1)), xe = (Y) => {
    var Re;
    ne.current = Y, (Re = F.current) === null || Re === void 0 || Re.style.setProperty(yt("swipe_offset"), `${Math.round(Y)}px`);
  }, Qt = (Y) => {
    var Re, Ie;
    me.current = Y, ye.current = (() => {
      const gn = U && Y > 0 ? Y : v && Y < 0 ? -Y : 0;
      return Math.min(Math.max(Bv(1 - gn / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (Re = F.current) === null || Re === void 0 || Re.style.setProperty(yt("pull_offset"), `${Math.round(Y)}px`), (Ie = F.current) === null || Ie === void 0 || Ie.style.setProperty(yt("pull_opacity"), `${ye.current}`);
  }, { prepareAnimation: ml } = Nh(x, (Y, Re, Ie) => {
    if (x.current && I)
      return {
        keyframes: [
          {
            transform: `translate(0, ${Y.rect.y - Re.y + Ie.y}px)`,
            opacity: Y.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: Y.duration,
        easing: h.easing.fade
      };
  }), gl = (Y, Re) => {
    if (v || U) {
      Qt(Y);
      let Ie = 0;
      x.current && (Ie = h.fade * (Re ? 2 : 1), ml({
        rect: x.current.getBoundingClientRect(),
        opacity: ye.current,
        duration: Ie
      })), be(() => {
        Qt(0), te(ct.NONE);
      }, Ie), te(ct.ANIMATION), Re || fe();
    }
  }, { prepareAnimation: ri, isAnimationPlaying: Zt } = Nh(x, (Y, Re, Ie) => {
    var He;
    if (x.current && I && (!((He = L.animation) === null || He === void 0) && He.duration)) {
      const st = Nu(r.spacing), gn = (st.percent ? st.percent * I.width / 100 : st.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${g(L.globalIndex - Y.index) * (I.width + gn) + Y.rect.x - Re.x + Ie.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: L.animation.duration,
        easing: L.animation.easing
      };
    }
  }), Kt = Ze((Y) => {
    var Re, Ie;
    const He = Y.offset || 0, st = He ? h.swipe : (Re = h.navigation) !== null && Re !== void 0 ? Re : h.swipe, gn = !He && !Zt() ? h.easing.navigation : h.easing.swipe;
    let { direction: Vn } = Y;
    const Jt = (Ie = Y.count) !== null && Ie !== void 0 ? Ie : 1;
    let ca = ct.ANIMATION, pt = st * Jt;
    if (!Vn) {
      const Qn = I?.width, vn = Y.duration || 0, et = Qn ? st / Qn * Math.abs(He) : st;
      Jt !== 0 ? (vn < et ? pt = pt / et * Math.max(vn, et / 5) : Qn && (pt = st / Qn * (Qn - Math.abs(He))), Vn = g(He) > 0 ? fl : dl) : pt = st / 2;
    }
    let ra = 0;
    Vn === fl ? Je(g(1)) ? ra = -Jt : (ca = ct.NONE, pt = st) : Vn === dl && (Je(g(-1)) ? ra = Jt : (ca = ct.NONE, pt = st)), pt = Math.round(pt), se(() => {
      xe(0), te(ct.NONE);
    }, pt), x.current && ri({
      rect: x.current.getBoundingClientRect(),
      index: L.globalIndex
    }), te(ca), ae(wh, {
      type: "swipe",
      increment: ra,
      duration: pt,
      easing: gn
    });
  });
  b.useEffect(() => {
    var Y, Re;
    !((Y = L.animation) === null || Y === void 0) && Y.increment && (!((Re = L.animation) === null || Re === void 0) && Re.duration) && Ke(() => W({ type: "swipe", increment: 0 }), L.animation.duration);
  }, [L.animation, W, Ke]);
  const vl = [
    G,
    Je,
    I?.width || 0,
    h.swipe,
    () => te(ct.SWIPE),
    (Y) => xe(Y),
    (Y, Re) => Kt({ offset: Y, duration: Re, count: 1 }),
    (Y) => Kt({ offset: Y, count: 0 })
  ], Ru = [
    () => {
      U && te(ct.PULL);
    },
    (Y) => Qt(Y),
    (Y) => gl(Y),
    (Y) => gl(Y, !0)
  ];
  sy(S, ...vl, v, U, ...Ru, fe), fy(Z, ...vl);
  const ia = Ze(() => {
    S.focus && oe().querySelector(`.${we(fs)} .${we(Dh())}`) && N();
  });
  b.useEffect(ia, [ia]);
  const yl = Ze(() => {
    var Y;
    (Y = w.view) === null || Y === void 0 || Y.call(w, { index: L.currentIndex });
  });
  b.useEffect(yl, [L.globalIndex, yl]), b.useEffect(() => tm(re(fl, (Y) => Kt({ direction: fl, ...Y })), re(dl, (Y) => Kt({ direction: dl, ...Y })), re(wh, (Y) => W(Y))), [re, Kt, W]);
  const ua = b.useMemo(() => ({
    prev: P,
    next: ie,
    close: fe,
    focus: N,
    slideRect: I ? Hv(I, r.padding) : { width: 0, height: 0 },
    containerRect: I || { width: 0, height: 0 },
    subscribeSensors: G,
    containerRef: F,
    setCarouselRef: Q,
    toolbarWidth: q,
    setToolbarWidth: H
  }), [
    P,
    ie,
    fe,
    N,
    G,
    I,
    F,
    Q,
    q,
    H,
    r.padding
  ]);
  return b.useImperativeHandle(S.ref, () => ({
    prev: P,
    next: ie,
    close: fe,
    focus: N,
    getLightboxProps: j,
    getLightboxState: k
  }), [P, ie, fe, N, j, k]), b.createElement("div", { ref: M, className: mn(we(Dh()), we(Vh)), style: {
    ...Z === ct.SWIPE ? { [yt("swipe_offset")]: `${Math.round(ne.current)}px` } : null,
    ...Z === ct.PULL ? {
      [yt("pull_offset")]: `${Math.round(me.current)}px`,
      [yt("pull_opacity")]: `${ye.current}`
    } : null,
    ...S.touchAction !== "none" ? { [yt("controller_touch_action")]: S.touchAction } : null,
    ...E.container
  }, tabIndex: -1, ...$ }, I && b.createElement(
    pm.Provider,
    { value: ua },
    c,
    (f = m.controls) === null || f === void 0 ? void 0 : f.call(m)
  ));
}
const hy = hl(kh, dy);
function ol(c) {
  return li(Yh, c);
}
function Ch(c) {
  return li(ds, c);
}
function my({ slide: c, offset: o }) {
  const f = b.useRef(null), { currentIndex: r, slides: h } = Du(), { slideRect: S, focus: w } = ci(), { render: E, carousel: { imageFit: m, imageProps: v }, on: { click: U }, styles: { slide: A }, labels: D } = ai(), { getOwnerDocument: q } = gs(), H = o !== 0;
  b.useEffect(() => {
    var W;
    H && (!((W = f.current) === null || W === void 0) && W.contains(q().activeElement)) && w();
  }, [H, w, q]);
  const L = () => {
    var W, Z, te, ne;
    let me = (W = E.slide) === null || W === void 0 ? void 0 : W.call(E, { slide: c, offset: o, rect: S });
    return !me && lm(c) && (me = b.createElement(uy, { slide: c, offset: o, render: E, rect: S, imageFit: m, imageProps: v, onClick: H ? void 0 : () => U?.({ index: r }) })), me ? b.createElement(
      b.Fragment,
      null,
      (Z = E.slideHeader) === null || Z === void 0 ? void 0 : Z.call(E, { slide: c }),
      ((te = E.slideContainer) !== null && te !== void 0 ? te : (({ children: ye }) => ye))({ slide: c, children: me }),
      (ne = E.slideFooter) === null || ne === void 0 ? void 0 : ne.call(E, { slide: c })
    ) : null;
  };
  return b.createElement("div", { ref: f, className: mn(we(Ch()), !H && we(Ch("current")), we(Vh)), ...Gv(H), style: A, role: "group", "aria-roledescription": aa(D, "Slide"), "aria-label": Uv(D, h, r + o) }, L());
}
function gy() {
  const c = ai().styles.slide;
  return b.createElement("div", { className: we(ds), style: c });
}
function vy({ carousel: c, labels: o }) {
  const { slides: f, currentIndex: r, globalIndex: h } = Du(), { setCarouselRef: S } = ci(), { autoPlaying: w, focusWithin: E } = rm(), m = Nu(c.spacing), v = Nu(c.padding), U = qv(c, f, 1), A = [];
  if (am(f))
    for (let D = r - U; D <= r + U; D += 1) {
      const q = im(f, D), H = h - r + D, L = c.finite && (D < 0 || D > f.length - 1);
      A.push(L ? { key: H } : {
        key: [`${H}`, Lv(q)].filter(Boolean).join("|"),
        offset: D - r,
        slide: q
      });
    }
  return b.createElement("div", { ref: S, className: mn(we(ol()), A.length > 0 && we(ol("with_slides"))), style: {
    [`${yt(ol("slides_count"))}`]: A.length,
    [`${yt(ol("spacing_px"))}`]: m.pixel || 0,
    [`${yt(ol("spacing_percent"))}`]: m.percent || 0,
    [`${yt(ol("padding_px"))}`]: v.pixel || 0,
    [`${yt(ol("padding_percent"))}`]: v.percent || 0
  }, role: "region", "aria-live": w && !E ? "off" : "polite", "aria-roledescription": aa(o, "Carousel"), "aria-label": aa(o, "Photo gallery") }, A.map(({ key: D, slide: q, offset: H }) => q ? b.createElement(my, { key: D, slide: q, offset: H }) : b.createElement(gy, { key: D })));
}
const yy = hl(Yh, vy);
function bm() {
  const { carousel: c } = ai(), { slides: o, currentIndex: f } = Du(), r = o.length === 0 || c.finite && f === 0, h = o.length === 0 || c.finite && f === o.length - 1;
  return { prevDisabled: r, nextDisabled: h };
}
function py(c) {
  var o;
  const f = vs(), { publish: r } = Ou(), { animation: h } = ai(), { prevDisabled: S, nextDisabled: w } = bm(), E = ((o = h.navigation) !== null && o !== void 0 ? o : h.swipe) / 2, m = Oh(() => r(fl), E), v = Oh(() => r(dl), E), U = Ze((A) => {
    switch (A.key) {
      case Nv:
        r(la);
        break;
      case Mv:
        (f ? w : S) || (f ? v : m)();
        break;
      case Ov:
        (f ? S : w) || (f ? m : v)();
        break;
    }
  });
  b.useEffect(() => c(Fh, U), [c, U]);
}
function Rh({ label: c, icon: o, renderIcon: f, action: r, onClick: h, disabled: S, style: w }) {
  return b.createElement(gm, { label: c, icon: o, renderIcon: f, className: we(`navigation_${r}`), disabled: S, onClick: h, style: w, ...ay(ci().focus, S) });
}
function by({ render: { buttonPrev: c, buttonNext: o, iconPrev: f, iconNext: r }, styles: h }) {
  const { prev: S, next: w, subscribeSensors: E } = ci(), { prevDisabled: m, nextDisabled: v } = bm();
  return py(E), b.createElement(
    b.Fragment,
    null,
    c ? c() : b.createElement(Rh, { label: "Previous", action: fl, icon: Iv, renderIcon: f, style: h.navigationPrev, disabled: m, onClick: S }),
    o ? o() : b.createElement(Rh, { label: "Next", action: dl, icon: ey, renderIcon: r, style: h.navigationNext, disabled: v, onClick: w })
  );
}
const Sy = hl(bv, by), Uh = we(Av), Ey = we(Qh);
function zy(c) {
  return "style" in c;
}
function Bh(c, o, f) {
  const r = window.getComputedStyle(c), h = f ? "padding-left" : "padding-right", S = f ? r.paddingLeft : r.paddingRight, w = c.style.getPropertyValue(h);
  return c.style.setProperty(h, `${(Mu(S) || 0) + o}px`), () => {
    w ? c.style.setProperty(h, w) : c.style.removeProperty(h);
  };
}
function Ty({ noScroll: { disabled: c }, children: o }) {
  const f = vs(), { getOwnerDocument: r, getOwnerWindow: h } = gs();
  return b.useEffect(() => {
    if (c)
      return () => {
      };
    const S = [], w = h(), { body: E, documentElement: m } = r(), v = Math.round(w.innerWidth - m.clientWidth);
    if (v > 0) {
      S.push(Bh(E, v, f));
      const U = E.getElementsByTagName("*");
      for (let A = 0; A < U.length; A += 1) {
        const D = U[A];
        zy(D) && w.getComputedStyle(D).getPropertyValue("position") === "fixed" && !D.classList.contains(Ey) && S.push(Bh(D, v, f));
      }
    }
    return E.classList.add(Uh), () => {
      E.classList.remove(Uh), S.forEach((U) => U());
    };
  }, [f, c, r, h]), b.createElement(b.Fragment, null, o);
}
const Ay = hl(Sv, Ty);
function xh(c) {
  return li(fs, c);
}
function Hh(c, o, f) {
  const r = c.getAttribute(o);
  return c.setAttribute(o, f), () => {
    r ? c.setAttribute(o, r) : c.removeAttribute(o);
  };
}
function wy({ children: c, animation: o, styles: f, className: r, on: h, portal: S, close: w, labels: E }) {
  const [m, v] = b.useState(!1), [U, A] = b.useState(!1), D = b.useRef([]), q = b.useRef(null), { setTimeout: H } = Cu(), { subscribe: L } = Ou(), Z = vm() ? 0 : o.fade;
  b.useEffect(() => (v(!0), () => {
    v(!1), A(!1);
  }), []);
  const te = Ze(() => {
    D.current.forEach(($) => $()), D.current = [];
  }), ne = Ze(() => {
    var $;
    A(!1), te(), ($ = h.exiting) === null || $ === void 0 || $.call(h), H(() => {
      var G;
      (G = h.exited) === null || G === void 0 || G.call(h), w();
    }, Z);
  });
  b.useEffect(() => L(la, ne), [L, ne]);
  const me = Ze(($) => {
    var G, re, ae;
    Yv($), A(!0), (G = h.entering) === null || G === void 0 || G.call(h);
    const Ke = (ae = (re = $.parentNode) === null || re === void 0 ? void 0 : re.children) !== null && ae !== void 0 ? ae : [];
    for (let se = 0; se < Ke.length; se += 1) {
      const be = Ke[se];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(be.tagName) === -1 && be !== $ && (D.current.push(Hh(be, "inert", "")), D.current.push(Hh(be, "aria-hidden", "true")));
    }
    D.current.push(() => {
      var se, be;
      (be = (se = q.current) === null || se === void 0 ? void 0 : se.focus) === null || be === void 0 || be.call(se);
    }), H(() => {
      var se;
      (se = h.entered) === null || se === void 0 || se.call(h);
    }, Z);
  }), ye = b.useCallback(($) => {
    $ ? me($) : te();
  }, [me, te]);
  return m ? Rv.createPortal(b.createElement(cy, { ref: ye, className: mn(r, we(xh()), we(Qh), U && we(xh("open"))), "aria-modal": !0, role: "dialog", "aria-label": aa(E, "Lightbox"), style: {
    ...o.fade !== cs.animation.fade ? { [yt("fade_animation_duration")]: `${Z}ms` } : null,
    ...o.easing.fade !== cs.animation.easing.fade ? { [yt("fade_animation_timing_function")]: o.easing.fade } : null,
    ...f.root
  }, onFocus: ($) => {
    q.current || (q.current = $.relatedTarget);
  } }, c), S.root || document.body) : null;
}
const _y = hl(fs, wy);
function Ny({ children: c }) {
  return b.createElement(b.Fragment, null, c);
}
const My = hl(Ev, Ny);
function Oy(c) {
  return li(Xh, c);
}
function Dy({ toolbar: { buttons: c }, render: { buttonClose: o, iconClose: f }, styles: r }) {
  const { close: h, setToolbarWidth: S } = ci(), { setContainerRef: w, containerRect: E } = ym();
  ui(() => {
    S(E?.width);
  }, [S, E?.width]);
  const m = () => o ? o() : b.createElement(gm, { key: la, label: "Close", icon: Pv, renderIcon: f, onClick: h });
  return b.createElement("div", { ref: w, style: r.toolbar, className: we(Oy()) }, c?.map((v) => v === la ? m() : v));
}
const Cy = hl(Xh, Dy);
function Sm(c, o) {
  var f;
  return b.createElement(c.module.component, { key: c.module.name, ...o }, (f = c.children) === null || f === void 0 ? void 0 : f.map((r) => Sm(r, o)));
}
function Ry(c, o = {}) {
  const { easing: f, ...r } = c, { easing: h, ...S } = o;
  return {
    easing: { ...f, ...h },
    ...r,
    ...S
  };
}
function Uy({ carousel: c, animation: o, render: f, toolbar: r, controller: h, noScroll: S, on: w, plugins: E, slides: m, index: v, ...U }) {
  const { animation: A, carousel: D, render: q, toolbar: H, controller: L, noScroll: W, on: Z, slides: te, index: ne, plugins: me, ...ye } = cs, { config: $, augmentation: G } = kv([
    Pe(_y, [
      Pe(Ay, [
        Pe(hy, [
          Pe(yy),
          Pe(Cy),
          Pe(Sy)
        ])
      ])
    ])
  ], E || me), re = G({
    animation: Ry(A, o),
    carousel: { ...D, ...c },
    render: { ...q, ...f },
    toolbar: { ...H, ...r },
    controller: { ...L, ...h },
    noScroll: { ...W, ...S },
    on: { ...Z, ...w },
    ...ye,
    ...U
  });
  return re.open ? b.createElement(
    Zv,
    { ...re },
    b.createElement(
      Wv,
      { slides: m || te, index: Mu(v || ne) },
      b.createElement(
        $v,
        null,
        b.createElement(
          Qv,
          null,
          b.createElement(Xv, null, Sm(Pe(My, $), re))
        )
      )
    )
  ) : null;
}
const ls = [
  {
    src: "/src/img/1.jpg",
    width: 1800,
    height: 2585,
    title: "Herbst II",
    titleEn: "Autumn II",
    description: "Hier in Europa, findet man diesen schönen Baum hauptsächlich in der Südtürkei und auf der griechischen Insel Rhodos.  Schätzungen zufolge ist das Verbreitungsgebiet dieser Art in den letzten 200 Jahren von 7000 Hektar auf 1657 Hektar zurückgegangen. Das Harz des Baumes wird seit über 700 Jahren als Allzweckheilmittel verwendet. Früher war es die Harzernte, die eine große Bedrohung für den Orientalischer Amberbaum darstelle. Heute führt die Zerstörung seines Lebensraums zu einem besorgniserregenden Bestandsrückgang. Entwaldung ist ein großes Problem, bedingt durch die intensive Stadtentwicklung und den Bedarf an Platz für Sommerhäuser und Zweitwohnungen (viele Einwohner sind in die Städte gezogen). Man könnte sagen, seine neuen Feinde sind Tourismus und Bebauung. Der Orientalischer Amberbaum steht nun auf der Roten Liste der IUCN (gefährdet, VU).(Quellen: de.wikipedia.org, www.sciencedirect.com,  http://journals.tubitak.gov.tr)",
    descriptionEn: "In Europe, this beautiful tree is found mainly in southern Turkey and on the Greek island of Rhodes. Its range has shrunk dramatically over the past 200 years, from around 7,000 hectares to 1,657 hectares. The tree’s resin has been used for over 700 years as a remedy; historically resin harvesting threatened the species, but today habitat destruction drives a worrying decline. Deforestation linked to urban development and the demand for summer houses and second homes are major pressures — in short, tourism and construction are its new enemies. The Oriental sweetgum is now listed by the IUCN as Vulnerable (VU).",
    author: "Sue Hénon",
    plantCommonName: "Orientalischer Amberbaum",
    plantCommonNameEn: "Oriental Sweetgum",
    plantBotanicalName: "Liquidambar orientalis",
    artworkYear: "2024",
    artworkSize: "50×70cm",
    artworkTechnique: "Farbstift auf Papier",
    artworkTechniqueEn: "Colored pencil on paper",
    contactEmail: "atelierhenon@googlemail.com",
    contactPhone: "06071-21613",
    lowSrc: "/src/thumbs/1.jpg",
    lowWidth: 400,
    lowHeight: 575
  },
  {
    src: "/src/img/2.jpg",
    width: 1800,
    height: 2545,
    title: "Aerangis Punctata",
    titleEn: "Aerangis Punctata",
    description: "Aerangis punctata ist eine seltene, auf Bäumen wachsende Orchidee aus den feuchten Hochwäldern Madagaskars. Ihr zartes Gleichgewicht mit dem Lebensraum ist durch Abholzung und Klimaveränderungen bedroht. Um die wenigen verbliebenen Populationen zu schützen, steht sie heute als gefährdete Art (vulnerable) unter internationalem Schutz.",
    descriptionEn: "Aerangis punctata is a rare, epiphytic orchid from the humid montane forests of Madagascar. Its delicate balance with its habitat is threatened by deforestation and climate change. To protect the few remaining populations, it is listed internationally as Vulnerable.",
    author: "Kristin Tessen",
    plantCommonName: "gepunktete Aerangis",
    plantCommonNameEn: "Spotted Aerangis",
    plantBotanicalName: "Aerangis punctata ",
    artworkYear: "2025",
    artworkSize: "29.7×42cm",
    artworkTechnique: "Aquarell",
    artworkTechniqueEn: "Watercolor",
    contactWebsite: "https://www.instagram.com/kristintessen/",
    lowSrc: "/src/thumbs/2.jpg",
    lowWidth: 400,
    lowHeight: 566
  },
  {
    src: "/src/img/3.jpg",
    width: 1800,
    height: 2546,
    title: "Round leaved sundew",
    titleEn: "Round-leaved Sundew",
    description: `Drosera rotundifolia, der Rundblättrige Sonnentau, ist eine mehrjährige, fleischfressende Pflanze. Sie besiedelt offene, feuchte und nährstoffarme Standorte wie saure Hochmoore und wächst insbesondere in Pflanzengesellschaften, die von Torfmoosen (Sphagnum) dominiert werden.

Hochmoore reagieren äußerst empfindlich auf Veränderungen. Entwässerung und Nährstoffeintrag zerstören ihre ökologische Funktion für Artenschutz und Klima. Die Zerstörung in kurzer Zeit machte zunichte, was über Jahrtausende entstand. Die Wiederherstellung der Moore zielt daher auf natürliche Bedingungen – vor allem einen intakten Wasserhaushalt – und benötigt gezielte Impulse und viel Zeit.
`,
    descriptionEn: `Drosera rotundifolia, the round-leaved sundew, is a perennial carnivorous plant. It inhabits open, wet, nutrient-poor sites such as acidic raised bogs and grows particularly in plant communities dominated by peat mosses (Sphagnum).

Raised bogs are extremely sensitive to change. Drainage and nutrient input destroy their ecological functions for biodiversity and climate. What formed over millennia has been destroyed in a short time. Bog restoration therefore aims to re-establish natural conditions — above all an intact water balance — and requires targeted actions and plenty of time.`,
    author: "Audrey Reilly",
    plantCommonName: "Rundblättriger Sonnentau",
    plantCommonNameEn: "Round-leaved Sundew",
    plantBotanicalName: "Drosera rotundifolia L.",
    artworkYear: "2024",
    artworkSize: "34×41cm",
    artworkTechnique: "Aquarell auf Papier",
    artworkTechniqueEn: "Watercolor on paper",
    contactWebsite: "www.audreyreilly-art.com",
    contactSocial: "@audrey.reilly",
    lowSrc: "/src/thumbs/3.jpg",
    lowWidth: 400,
    lowHeight: 566
  },
  {
    src: "/src/img/4.jpg",
    width: 1800,
    height: 2546,
    title: "Bog rosemary",
    titleEn: "Bog Rosemary",
    description: `Andromeda polifolia, die Rosmarinheide, wächst ausschließlich in Hochmooren kälterer Regionen. Der kleine, immergrüne Zwergstrauch mit zierlichen rosa Blüten ist in den nördlichen Gebieten Nordamerikas, Asiens und Europas verbreitet.

Ihr Bestand geht jedoch stark zurück - in England und Irland ist die Art bereits stark dezimiert. Der Lebensraum Hochmoor hat unter Entwässerung, Aufforstung und Torfabbau gelitten, was die Rosmarinheide immer seltener werden lässt. Ihr Verschwinden in Westeuropa ist meist eine direkte Folge der Moorentwässerung.

Hochmoore reagieren äußerst empfindlich. Entwässerung zerstört ihre ökologische Funktion für Artenschutz und Klima. Was über Jahrtausende entstand, wurde in kurzer Zeit zerstört. Die Wiederherstellung der Moore benötigt daher natürliche Bedingungen – vor allem einen intakten Wasserhaushalt – und braucht gezielte Maßnahmen sowie viel Zeit.
`,
    descriptionEn: `Andromeda polifolia, bog rosemary, grows exclusively in raised bogs of cooler regions. This small evergreen shrub with delicate pink flowers is found in northern North America, Asia, and Europe.

Its populations are declining sharply — in England and Ireland it has already been greatly reduced. The bog habitat has suffered from drainage, afforestation, and peat extraction, making bog rosemary ever rarer. Its disappearance in Western Europe is mostly a direct consequence of bog drainage.

Raised bogs are extremely sensitive. Drainage destroys their ecological functions for biodiversity and climate. What formed over millennia has been destroyed in a short time. Restoring bogs requires natural conditions — above all an intact water balance — plus targeted measures and time.`,
    author: "Audrey Reilly",
    plantCommonName: "Rosmarinheide",
    plantCommonNameEn: "Bog Rosemary",
    plantBotanicalName: "Andromeda polifolia",
    artworkYear: "2024",
    artworkSize: "34×41cm",
    artworkTechnique: "Aquarell auf Papier",
    artworkTechniqueEn: "Watercolor on paper",
    contactWebsite: "www.audreyreilly-art.com",
    lowSrc: "/src/thumbs/4.jpg",
    lowWidth: 400,
    lowHeight: 566
  },
  {
    src: "/src/img/5.jpg",
    width: 1800,
    height: 2219,
    title: "Purple Marshlock (Blume des Jahres 2025)",
    titleEn: "Purple Marshlock (Flower of the Year 2025)",
    description: `Das Sumpf-Blutauge kommt vom Tiefland bis ins Gebirge vor und besiedelt bevorzugt nasse, zeitweise überflutete Torf- und Schlammböden in Niedermooren. Es gedeiht besonders auf offenen Schlammstellen, wo es sich mit seinem langen Wurzelstock gut ausbreiten kann. Sogar auf Schwingrasen bildet es allmählich schwankende Teppiche auf der Wasseroberfläche mooriger Gewässer.

Als Spezialist für den stark bedrohten Lebensraum Moor steht die Art in vielen Regionen auf der Roten Liste. Die Loki Schmidt Stiftung hat sie zur Blume des Jahres 2025 ernannt.

Hochmoore reagieren äußerst empfindlich auf Störungen. Entwässerung und Nährstoffeintrag zerstören ihre ökologischen Funktionen für Artenschutz und Klima. Was über Jahrtausende entstand, wurde in kurzer Zeit zerstört. Die Wiederherstellung der Moore zielt daher auf natürliche Bedingungen – besonders einen intakten Wasserhaushalt – und benötigt gezielte Maßnahmen und viel Zeit.`,
    descriptionEn: `Purple marshlock (Comarum palustre) occurs from lowland to mountain regions and colonizes wet, periodically flooded peat and mud soils in fens. It thrives especially on open mud patches, where its long rhizome allows it to spread well, even forming floating mats on quaking bog surfaces.

As a specialist of the highly threatened moor habitat, it is Red-Listed in many regions. The Loki Schmidt Foundation named it Flower of the Year 2025.

Raised bogs are extremely sensitive to disturbance. Drainage and nutrient input destroy their ecological functions for biodiversity and climate. What formed over millennia has been destroyed in a short time. Restoration aims to re-establish natural conditions — especially an intact water balance — and requires targeted measures and time.`,
    author: "Audrey Reilly",
    plantCommonName: "Blutauge, Sumpf-Fingerkraut",
    plantCommonNameEn: "Purple Marshlock, Marsh Cinquefoil",
    plantBotanicalName: "Comarum palustre",
    artworkYear: "2024",
    artworkSize: "40×50cm",
    artworkTechnique: "Aquarell auf Papier",
    artworkTechniqueEn: "Watercolor on paper",
    contactWebsite: "www.audreyreilly-art.com",
    lowSrc: "/src/thumbs/5.jpg",
    lowWidth: 400,
    lowHeight: 493
  },
  {
    src: "/src/img/6.png",
    width: 1800,
    height: 1350,
    title: "Echte Lungenflechte ",
    titleEn: "Tree Lungwort",
    description: `Durch Luftverschmutzung und die Zerstörung ihrer Lebensräume u. a. durch intensive forstwirtschaftliche Nutzung steht die Echte Lungenflechte mittlerweile in Deutschland auf der Roten Liste und gilt als "Vom Aussterben bedroht".
Denn sie benötigt sehr saubere Luft, alte Bäume und eine hohe Luftfeuchtigkeit, um zu gedeihen. `,
    descriptionEn: 'Due to air pollution and the destruction of its habitats — including intensive forestry — tree lungwort is now on Germany’s Red List and considered "critically endangered". It requires very clean air, old trees, and high humidity to thrive.',
    author: "Katrin Koch ",
    plantCommonName: "Echte Lungenflechte ",
    plantCommonNameEn: "Tree Lungwort",
    plantBotanicalName: "Lobaria pulmonaria ",
    artworkYear: "2025",
    artworkSize: "7.5×26cm",
    artworkTechnique: 'Graphit und Farbstift auf Papier /Fabriano Artistico Hot Pressed "Extra White" ',
    artworkTechniqueEn: 'Graphite and colored pencil on paper / Fabriano Artistico Hot Pressed "Extra White"',
    contactEmail: "malusred@gmx.de",
    lowSrc: "/src/thumbs/6.jpg",
    lowWidth: 533,
    lowHeight: 400
  },
  {
    src: "/src/img/9.png",
    width: 1800,
    height: 2250,
    title: "Der Stern der Alpen",
    titleEn: "The Star of the Alps",
    description: `Das Edelweiß ist in seinem natürlichen Lebensraum nach wie vor durch übertriebenes Pflücken bedroht. An vielen leicht zugänglichen Standorten war es dadurch fast ausgestorben. Seit die Art in vielen Ländern und Regionen unter Naturschutz steht, haben sich die Bestände in der freien Natur erholt. Die wilden Pflanzen sind jedoch nach wie vor durch unkontrolliertes Sammeln und Lebensraumverlust bedroht.

Die Pflanze wird gerne in vielen Gärten kultiviert. Kulturpflanzen sehen im Vergleich zu Wildpflanzen meist anders aus. Sie sind oft deutlich höher und weniger weiß behaart. Die hier abgebildete Pflanze ist ein Kulturexemplar.`,
    descriptionEn: `Edelweiss remains threatened in its natural habitat by excessive picking. At many easily accessible sites it had nearly disappeared. Since the species gained protection in many countries and regions, wild populations have recovered, yet wild plants are still threatened by uncontrolled collecting and habitat loss.

The plant is widely cultivated in gardens. Cultivars often look different from wild plants — typically taller and less densely white-haired. The specimen shown here is cultivated.`,
    author: "Maxim Shirshin",
    plantCommonName: "Alpen-Edelweiß",
    plantCommonNameEn: "Alpine Edelweiss",
    plantBotanicalName: "Leontopodium nivale",
    artworkYear: "2025",
    artworkSize: "21×29.7cm",
    artworkTechnique: "Buntstifte auf Papier",
    artworkTechniqueEn: "Colored pencils on paper",
    contactPhone: "+447376444778",
    contactEmail: "max.shirshin@gmail.com",
    contactSocial: "max.shirshin",
    lowSrc: "/src/thumbs/9.png",
    lowWidth: 400,
    lowHeight: 500
  },
  {
    src: "/src/img/13.jpg",
    width: 1800,
    height: 2250,
    title: "Frauenschuh",
    titleEn: "Lady's Slipper Orchid",
    description: `Der Frauenschuh gilt nach der Roten Liste als gefährdet und ist nach der Bundesartenschutzverordnung streng geschützt. Er steht auch unter besonderem Schutz der Europäischen Union. 
Als ursächlich für die Gefährdung wird vor allem die weitreichende Forstwirtschaft gesehen, die eine natürliche Waldentwicklung und -dynamik kaum zulässt. Fototourismus trägt zu einem Rückgang der Art bei, da der Boden sich durch häufiges Betreten verdichtet und dadurch neuen Exemplaren eine Ansiedlung erschwert wird. 
Auch Pflanzenliebhaber, die den Frauenschuh ausgraben, tragen wesentlich zum Rückgang der verbliebenen Vorkommen bei.
 (Vgl. https://de.wikipedia.org/wiki/Gelber_Frauenschuh, 08.10.2025)`,
    descriptionEn: "The lady's slipper orchid is classified as endangered on the Red List and is strictly protected under federal species conservation regulations and by the European Union. Extensive forestry, which leaves little room for natural forest dynamics, is a primary cause of endangerment. Photo tourism contributes to the decline as repeated trampling compacts the soil, hindering establishment of new plants. Plant enthusiasts who dig up wild specimens further reduce the remaining populations.",
    author: "Leslie Bocker",
    plantCommonName: "Frauenschuh",
    plantCommonNameEn: "Lady's Slipper Orchid",
    plantBotanicalName: "Cypripedium calceolus L.",
    artworkYear: "2025",
    artworkSize: "25×50cm",
    artworkTechnique: "Aquarell",
    artworkTechniqueEn: "Watercolor",
    contactSocial: "leslie.bocker",
    lowSrc: "/src/thumbs/13.jpg",
    lowWidth: 400,
    lowHeight: 500
  },
  {
    src: "/src/img/15.jpg",
    width: 1800,
    height: 1440,
    title: "Kastanie",
    titleEn: "Horse Chestnut",
    description: `Die Rosskastanie hierzulande hat gleich mit mehreren Problemen auf einmal zu kämpfen: Zum einen mit der sogenannten Miniermotte, zum anderen mit einem Bakterium namens Pseudomonas. Auch der Klimawandel stresst die Bäume zunehmend. Die Weltnaturschutzunion (IUCN) hat die Gewöhnliche Rosskastanie deshalb mittlerweile als "gefährdet" eingestuft.
( https://www.oekotest.de/freizeit-technik/Kastanienblaetter-schon-im-Sommer-braun-So-reagieren-Sie-richtig_12142_1.html, 25.09.2025)`,
    descriptionEn: "The horse chestnut is facing several problems at once: the leaf miner moth, a bacterium called Pseudomonas, and increasing stress from climate change. The IUCN has classified the common horse chestnut as Vulnerable.",
    author: "Leslie Bocker",
    plantCommonName: "Gewöhnliche Rosskastanie",
    plantCommonNameEn: "Common Horse Chestnut",
    plantBotanicalName: "Aesculus hippocastanum",
    artworkYear: "2024",
    artworkSize: "25×23cm",
    artworkTechnique: "Aquarell",
    artworkTechniqueEn: "Watercolor",
    contactSocial: "leslie.bocker",
    lowSrc: "/src/thumbs/15.jpg",
    lowWidth: 500,
    lowHeight: 400
  },
  {
    src: "/src/img/16.jpg",
    width: 1800,
    height: 2388,
    title: "Maiglöckchen",
    titleEn: "Lily of the Valley",
    description: "Diese zarte Blume wächst in vielen europäischen Ländern in der freien Natur, jedoch ist die Anzahl der Pflanzen sehr gering. In vielen Ländern ist das Pfücken der Blumen verboten, wie z.B. im Ruhrgebiet in Deutschland. Obwohl in Deutschland kleine Sträußchen für den Eigenbedarf erlaubt sind, ist das Ausgraben der unterirdischen Teile wie der Rhizome in der freien Natur untersagt, um die Bestände zu erhalten. ",
    descriptionEn: "This delicate flower grows in the wild in many European countries, yet plant numbers are very low. In many regions, picking the flowers is prohibited, such as in Germany’s Ruhr area. Although small bouquets for personal use are permitted in Germany, digging up underground parts like rhizomes is forbidden in the wild to preserve populations.",
    author: "Nadiya Kyrylenko",
    plantCommonName: "Maiglöckchen",
    plantCommonNameEn: "Lily of the Valley",
    plantBotanicalName: "Convallaria majalis",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Mischtechnik: Aquarell und Bleistift",
    artworkTechniqueEn: "Mixed media: Watercolor and pencil",
    contactPhone: "01791314354",
    contactWebsite: "https://www.instagram.com/nadiya_kyrylenko/",
    lowSrc: "/src/thumbs/16.jpg",
    lowWidth: 400,
    lowHeight: 531
  },
  {
    src: "/src/img/17.jpg",
    width: 1800,
    height: 1817,
    title: "Stille der Frühlingswiesen",
    titleEn: "Silence of Spring Meadows",
    description: `Schachblume (Fritillaria meleagris)
Aquarell und Graphit auf Papier

Eine seltene, in Deutschland geschützte Art.
Ihre natürlichen Lebensräume – feuchte Wiesen und Flussauen – verschwinden nach und nach, und mit ihnen verschwindet auch die Schachblume.
Zart und zugleich widerstandsfähig verkörpert sie die Idee des Überlebens durch Sanftheit.
Diese Arbeit ist eine Hommage an ihre stille Schönheit und ihre flüchtige Präsenz in der Natur.`,
    descriptionEn: `Snake's head fritillary (Fritillaria meleagris)
Watercolor and graphite on paper

A rare species protected in Germany. Its natural habitats — damp meadows and river floodplains — are disappearing, and with them the fritillary itself. Delicate yet resilient, it embodies the idea of surviving through gentleness. This work is a homage to its quiet beauty and fleeting presence in nature.`,
    author: "Lesia Zaitseva",
    plantCommonName: "Schachblume (Fritillaria meleagris)",
    plantCommonNameEn: "Snake's Head Fritillary",
    plantBotanicalName: "Fritillaria meleagris",
    artworkYear: "2025",
    artworkSize: "56×56cm",
    artworkTechnique: "Aquarell und Graphit auf Papier Saunders Waterford HP 425 g/m²",
    artworkTechniqueEn: "Watercolor and graphite on Saunders Waterford HP 425 gsm paper",
    contactSocial: "Lesia_botanicalart",
    lowSrc: "/src/thumbs/17.jpg",
    lowWidth: 400,
    lowHeight: 404
  },
  {
    src: "/src/img/18.jpg",
    width: 1800,
    height: 2408,
    title: "Lion's Tooth (Deutscher Löwenzahn)",
    titleEn: "Lion's Tooth (German Dandelion)",
    description: `Der deutsche Löwenzahn (Taraxacum germanium), einst Teil der einheimischen Flora Deutschlands, ist heute vom Aussterben bedroht und überlebt nur noch an wenigen verstreuten Standorten in Hessen, Unterfranken und Oberbayern. Die meisten dieser Populationen bestehen aus nur wenigen einzelnen Pflanzen und überschreiten selten fünfzig Exemplare. Diese Art gedeiht in Niederungs-Feuchtwiesen, oft auf leicht salzhaltigen Böden, doch ihre Empfindlichkeit gegenüber Düngung und Störungen des Lebensraums hat sie äußerst verletzlich gemacht. Landwirtschaftliche Intensivierung, Lebensraumverlust und Verschmutzung haben sie an den Rand des Aussterbens gedrängt.

Während der Gewöhnliche Löwenzahn (Taraxacum officinale) heute noch weit verbreitet ist, werden auch seine natürlichen Lebensräume zunehmend durch ähnliche Bedrohungen – Herbizideinsatz, Monokultur-Landwirtschaft, städtische Bebauung und den Klimawandel – beeinträchtigt. Wenn diese Belastungen anhalten, könnte selbst diese widerstandsfähige und weit verbreitete Pflanze dem Beispiel des deutschen Löwenzahns folgen und zurückgehen – ein mahnendes Zeichen dafür, dass keine Art vor den Folgen menschengemachter Umweltveränderungen gefeit ist.`,
    descriptionEn: `German dandelion (Taraxacum germanicum), once part of Germany’s native flora, is now threatened with extinction, surviving only at scattered sites in Hesse, Lower Franconia, and Upper Bavaria. Most populations consist of very few plants, rarely exceeding fifty. It thrives in lowland wet meadows, often on slightly saline soils, but sensitivity to fertilization and habitat disturbance has left it highly vulnerable. Agricultural intensification, habitat loss, and pollution have pushed it to the brink.

While the common dandelion (Taraxacum officinale) remains widespread, its natural habitats are also increasingly affected by similar pressures — herbicides, monoculture agriculture, urban development, and climate change. If these pressures continue, even this resilient species may decline — a reminder that no species is immune to human-driven environmental change.`,
    author: "Kate Rolshoven",
    plantCommonName: "Deutscher Löwenzahn",
    plantCommonNameEn: "German Dandelion",
    plantBotanicalName: "Taraxacum germanicum",
    artworkYear: "2023",
    artworkSize: "56×76cm",
    artworkTechnique: "Aquarell on Arches 640gsm Baumwollpapier",
    artworkTechniqueEn: "Watercolor on Arches 640gsm cotton paper",
    contactWebsite: "www.katerolshovenart.com",
    contactSocial: "katerolshovenart",
    lowSrc: "/src/thumbs/18.jpg",
    lowWidth: 400,
    lowHeight: 535
  },
  {
    src: "/src/img/19.jpg",
    width: 1800,
    height: 1273,
    title: "Beta vulgaris",
    titleEn: "Beta vulgaris",
    description: "Die wilde Rübe die Urpflanze unseres heutigen Mangolds und der Roten Bete. Die Wildform gilt in Deutschland als potenziell gefährdet. Auf Helgoland, wo sie früher weit verbreitet war, gibt es noch einige wenige Bestände. Die Beta vulgaris wurde sonst nur noch an einigen Orten an der Ostseeküste verzeichnet.",
    descriptionEn: "The wild beet, ancestor of today’s chard and red beet, is considered potentially threatened in Germany. On Heligoland, where it was once widespread, only a few populations remain. Elsewhere, Beta vulgaris has been recorded only at a handful of sites along the Baltic coast.",
    author: "Manuela Herhaus",
    plantCommonName: "Wilde Rübe",
    plantCommonNameEn: "Wild Beet",
    plantBotanicalName: "Beta vulgaris",
    artworkYear: "2025",
    artworkSize: "30×42cm",
    artworkTechnique: "Tusche auf Zeichenfolie mit Beschreibung auf Papier",
    artworkTechniqueEn: "Ink on drafting film with description on paper",
    contactEmail: "herhaus@wortimpulse.de",
    lowSrc: "/src/thumbs/19.jpg",
    lowWidth: 566,
    lowHeight: 400
  },
  {
    src: "/src/img/22.png",
    width: 1443,
    height: 1337,
    title: "Deutsche Ufertamariske - Früchte und Samen",
    titleEn: "German River Tamarisk – Fruits and Seeds",
    description: "Die dynamischen, regelmäßig überschotterten Ufer alpiner Wildflüsse – die natürlichen Lebensräume der Deutschen Tamariske – sind durch umfassende Flussregulierungen fast vollständig zerstört worden. Ohne diese natürliche Gewässerdynamik breiten sich Weiden und Erlen aus und verdrängen die Tamariske. Deshalb wird die Art in der Roten Liste Deutschlands als „vom Aussterben bedroht“ geführt und kommt nur noch in wenigen stark beeinträchtigten Resthabitaten vor.",
    descriptionEn: "The dynamic, regularly gravel-covered banks of alpine wild rivers — the natural habitats of the German tamarisk — have been almost completely destroyed by extensive river regulation. Without natural river dynamics, willows and alders spread and outcompete the tamarisk. As a result, the species is listed in Germany’s Red List as critically endangered and persists only in a few heavily impacted remnant habitats.",
    author: "Elisabeth Lázár ",
    plantCommonName: "Deutsche Tamariske",
    plantCommonNameEn: "German Tamarisk",
    plantBotanicalName: "Myricaria germanica",
    artworkYear: "2025",
    artworkSize: "29×29cm",
    artworkTechnique: "Graphit, Papier",
    artworkTechniqueEn: "Graphite, paper",
    lowSrc: "/src/thumbs/22.jpg",
    lowWidth: 432,
    lowHeight: 400
  },
  {
    src: "/src/img/23.png",
    width: 1800,
    height: 2286,
    title: "Karlszepter-Läusekraut - Kapselfrucht",
    titleEn: "King's Scepter Lousewort – Capsule Fruit",
    description: "Die Samen des Karlszepters reifen in den charakteristischen Kapselfrüchten. Die Keimung gelingt nur auf dauerhaft nassen, torfigen Moorböden, weshalb sich die Art nur sehr begrenzt ausbreiten kann. Als halbparasitische Pflanze ist sie auf die Wurzeln bestimmter Wirtsarten angewiesen, was ihre erfolgreiche Etablierung zusätzlich einschränkt.",
    descriptionEn: "The seeds of the king’s scepter ripen in characteristic capsule fruits. Germination succeeds only on permanently wet, peaty bog soils, which greatly limits the species’ ability to spread. As a hemiparasitic plant, it depends on the roots of specific host species, further constraining successful establishment.",
    author: "Elisabeth Lázár",
    plantCommonName: "Karlszepter-Läusekraut",
    plantCommonNameEn: "King's Scepter Lousewort",
    plantBotanicalName: "Pedicularis sceptrum-carolinum L.",
    artworkYear: "2025",
    artworkSize: "21×27cm",
    artworkTechnique: "Tinte, Papier",
    artworkTechniqueEn: "Ink, paper",
    lowSrc: "/src/thumbs/23.png",
    lowWidth: 400,
    lowHeight: 508
  },
  {
    src: "/src/img/24.png",
    width: 1800,
    height: 2660,
    title: "Karlszepter-Läusekraut - Grundblätter und Kapselfrüchte",
    titleEn: "King's Scepter Lousewort – Basal Leaves and Capsule Fruits",
    description: "Das Karlszepter ist ein seltenes Relikt der Eiszeit und gilt daher als besonders wertvoll für die botanische Vielfalt. Es bevorzugt nährstoffarme Moorwiesen, Flachmoore und feuchte Wegränder, Lebensräume, die durch Entwässerung, Nutzungsänderungen und Klimawandel stark zurückgegangen sind. Dadurch ist die Art in vielen südlichen Regionen selten geworden und gilt heute als stark gefährdet. Ihre besondere ökologische Rolle als typische Moorart macht sie zu einem wichtigen Indikator für intakte, besonders empfindliche Feuchtökosysteme.",
    descriptionEn: "The king’s scepter is a rare Ice Age relict and thus particularly valuable for botanical diversity. It favors nutrient-poor moor meadows, fens, and damp path edges — habitats that have strongly declined due to drainage, land-use change, and climate change. Consequently, the species has become rare in many southern regions and is now considered highly endangered. Its ecological role as a typical moor species makes it an important indicator of intact, highly sensitive wetland ecosystems.",
    author: "Elisabeth Lázár ",
    plantCommonName: "Karlszepter-Läusekraut",
    plantCommonNameEn: "King's Scepter Lousewort",
    plantBotanicalName: "Pedicularis sceptrum-carolinum L.",
    artworkYear: "2025",
    artworkSize: "28×42cm",
    artworkTechnique: "Aquarell, Graphit, Papier",
    artworkTechniqueEn: "Watercolor, graphite, paper",
    lowSrc: "/src/thumbs/24.jpg",
    lowWidth: 400,
    lowHeight: 591
  },
  {
    src: "/src/img/25.jpg",
    width: 1365,
    height: 2048,
    title: "Geweihförmige Wiesenkoralle ",
    titleEn: "Antler-shaped Meadow Coral",
    description: `Durch die intensive Nutzung ihres speziellen Lebensraumes - dem Magerrasen, gingen die Bestände dieser Art in den letzten Jahrzehnten deutlich zurück und die Geweihförmige Wiesenkoralle steht mittlerweile als "Gefährdet" auf der Roten Liste in Deutschland.
Denn Überdüngung, Bebauung und Überwässerung verändert ihr Ökosystem und so ist der Lebensraum mittlerweile nur noch selten in unserer Landschaft zu finden. `,
    descriptionEn: 'Due to intensive use of its specific habitat — nutrient-poor grasslands — populations of this species have declined markedly in recent decades, and the antler-shaped meadow coral is now listed as "Vulnerable" on Germany’s Red List. Over-fertilization, construction, and over-watering alter its ecosystem, making its habitat increasingly rare in our landscape.',
    author: "Katrin Koch ",
    plantCommonName: "Geweihförmige Wiesenkoralle ",
    plantCommonNameEn: "Antler-shaped Meadow Coral",
    plantBotanicalName: "Clavulinopsis corniculata",
    artworkYear: "2025",
    artworkSize: "11×11.8cm",
    artworkTechnique: 'Farbstift auf Papier /Fabriano Artistico Hot Pressed "Extra White" ',
    artworkTechniqueEn: 'Colored pencil on paper / Fabriano Artistico Hot Pressed "Extra White"',
    contactEmail: "malusred@gmx.de",
    lowSrc: "/src/thumbs/25.jpg",
    lowWidth: 400,
    lowHeight: 600
  },
  {
    src: "/src/img/26.jpg",
    width: 1800,
    height: 1361,
    title: "Vom Blühen und Reifen",
    titleEn: "On Blooming and Ripening",
    description: `Die Preiselbeere begleitet mich seit meiner Kindheit. Als ich im Sommer im Norden war, wuchsen sie dort in unglaublicher Fülle – ganze Teppiche aus kleinen, glänzenden Blättern und tiefroten Beeren. Für mich trägt diese Pflanze deshalb eine ganz eigene, nostalgische Wärme. Heute jedoch ist ihr Lebensraum in Deutschland und vielen Teilen Europas stark geschrumpft. Moore, Heiden und lichte Kiefernwälder, in denen die Preiselbeere einst heimisch war, verschwinden durch Entwässerung, Aufforstung, Landwirtschaft und den Klimawandel. In manchen Regionen Europas ist die Art bereits deutlich zurückgegangen.
Was oft übersehen wird: Ihr Rückgang betrifft nicht nur die Pflanze selbst, sondern auch das Netzwerk an Leben um sie herum. Die Blüten der Preiselbeere werden vor allem von Hummeln und verschiedenen Wildbienen bestäubt – Insekten, deren Populationen ebenfalls unter Druck stehen. Wenn ihre Bestäuber seltener werden, sinkt auch die Fruchtbildung der Preiselbeere. Beide Seiten verlieren also gemeinsam ihren Platz.
Mit meinem Bild möchte ich diese leise, doch bedeutende Verbindung sichtbar machen: die Verwundbarkeit der Preiselbeere und die fragile Gemeinschaft, die sie trägt – und die sie zugleich braucht, um weiter zu bestehen.`,
    descriptionEn: "Lingonberry has accompanied me since childhood, growing in incredible abundance in the north — carpets of small, glossy leaves and deep red berries. Today its habitats in Germany and across Europe have shrunk. Bogs, heaths, and open pine forests are disappearing due to drainage, afforestation, agriculture, and climate change. This decline affects the plant and its pollinators — mainly bumblebees and wild bees. As pollinators become rarer, fruit set falls; both lose their place together. This painting aims to show that quiet, significant connection: the vulnerability of lingonberry and the fragile community it supports and needs.",
    author: "Daria Beizerov",
    plantCommonName: "Preiselbeere",
    plantCommonNameEn: "Lingonberry",
    plantBotanicalName: "Vaccinium vitis-idaea",
    artworkYear: "2025",
    artworkSize: "41×31cm",
    artworkTechnique: "Aquarell auf Papier (HP)",
    artworkTechniqueEn: "Watercolor on paper (HP)",
    contactWebsite: "https://www.instagram.com/daria.botanicals/",
    lowSrc: "/src/thumbs/26.jpg",
    lowWidth: 529,
    lowHeight: 400
  },
  {
    src: "/src/img/28.jpg",
    width: 1800,
    height: 2195,
    title: "Weiße Schlauchpflanze",
    titleEn: "White Pitcher Plant",
    description: "Die Weiße Schlauchpflanze (Sarracenia leucophylla) kommt ursprünglich im Südosten der Vereinigten Staaten vor, insbesondere in Alabama, Georgia, Florida und Mississippi. Obwohl sie dort noch in der Wildnis vorkommt, ist sie durch das Sammeln zu Dekorationszwecken und durch Landentwicklung bedroht. Daher ist sie in der Roten Liste der bedrohten Arten der IUCN aufgeführt. Als Zimmerpflanze ist sie beliebt, weil sie mit ihren auffällig gezeichneten Schläuchen und ihrer Fähigkeit, Insekten zu fangen, ein außergewöhnliches und dekoratives Element darstellt.",
    descriptionEn: "The white pitcher plant (Sarracenia leucophylla) is native to the southeastern United States, especially Alabama, Georgia, Florida, and Mississippi. Though it still occurs in the wild, it is threatened by collection for decorative use and by land development. It is listed on the IUCN Red List. As a houseplant, it is popular for its strikingly patterned pitchers and its ability to capture insects.",
    author: "Sophie Crossart",
    plantCommonName: "Weiße Schlauchpflanze",
    plantCommonNameEn: "White Pitcher Plant",
    plantBotanicalName: "Sarracenia leucophylla",
    artworkYear: "2025",
    artworkSize: "17×20cm",
    artworkTechnique: "Aquarell und ein wenig Gouache auf Kalbsvellum",
    artworkTechniqueEn: "Watercolor and a touch of gouache on calf vellum",
    contactEmail: "contact@sophiecrossart.com",
    contactWebsite: "www.sophiecrossart.com",
    contactSocial: "sophiecrossart",
    lowSrc: "/src/thumbs/28.jpg",
    lowWidth: 400,
    lowHeight: 487
  },
  {
    src: "/src/img/29.png",
    width: 1800,
    height: 2547,
    title: "Zahnbürstchenwiese",
    titleEn: "Toothbrush Meadow",
    description: `Der Schlangenknöterich ist eine typische Pflanze feuchter, artenreicher Lebensräume. Er wächst bevorzugt in Feuchtwiesen, an den Ufern von Bächen, an Moorrändern sowie in lichten Auwäldern. Doch sind diese Lebensräume zunehmend im Rückgang begriffen. 
Trockenlegungen, intensive Bewirtschaftung durch die Landwirtschaft und das Verschwinden naturnaher Auwälder führen zum Verlust geeigneter Standorte. 
Hinzu kommen die Auswirkungen des Klimawandels.
Der Schlangenknöterich steht in Bayern auf Platz 3 der Gefährdungsliste.
So wird er zunehmend zum Symbol für die bedrohte Schönheit unserer Feuchtlandschaften.`,
    descriptionEn: "Common bistort is a characteristic plant of wet, species-rich habitats. It favors wet meadows, stream banks, bog margins, and open floodplain forests. These habitats are increasingly in decline due to drainage, intensive agriculture, and the loss of near-natural floodplain forests, compounded by climate change. In Bavaria, common bistort ranks third on the threat list, symbolizing the endangered beauty of our wetlands.",
    author: "Susanne Jampen",
    plantCommonName: "Schlangenknöterich",
    plantCommonNameEn: "Common Bistort",
    plantBotanicalName: "Bistorta officinalis",
    artworkYear: "Sommer 2025",
    artworkSize: "20×32cm",
    artworkTechnique: "Aquarell auf Fabriano artistico hot press",
    artworkTechniqueEn: "Watercolor on Fabriano Artistico hot press",
    contactEmail: "s.jampen@icloud.com",
    lowSrc: "/src/thumbs/29.png",
    lowWidth: 400,
    lowHeight: 566
  },
  {
    src: "/src/img/30.jpg",
    width: 1800,
    height: 2342,
    title: "Sumpf-Herzblatt",
    titleEn: "Marsh Grass-of-Parnassus",
    description: "Diese seltene Pflanze gehört zu den Steinbrech-Gewächsen und steht auf der Roten Liste Bayerns und gilt als gefährdet. Ursache für die Gefährdung der Pflanze sind etwa die Entwässerung und Aufforstung von Moor-Standorten oder Trockenlegungen von Feuchtwiesen. Aber auch durch die Eutrophierungen, sprich Dünger-Eintragungen, werde die konkurrenzschwache Art zurückgedrängt (https://pfaffenhofen-today.de/46272-p-serie-sumpf-herzblatt. 08.10.2025)",
    descriptionEn: "This rare plant belongs to the saxifrage family and is listed as endangered on Bavaria’s Red List. Threats include drainage and afforestation of bog sites, and the drying of wet meadows. Eutrophication — i.e., fertilizer inputs — also pushes back this weak competitor.",
    author: "Leslie Bocker",
    plantCommonName: "Sumpf-Herzblatt",
    plantCommonNameEn: "Marsh Grass-of-Parnassus",
    plantBotanicalName: "Parnassia palustris",
    artworkYear: "2025",
    artworkSize: "31×39cm",
    artworkTechnique: "Aquarell",
    artworkTechniqueEn: "Watercolor",
    contactSocial: "leslie.bocker",
    lowSrc: "/src/thumbs/30.jpg",
    lowWidth: 400,
    lowHeight: 520
  },
  {
    src: "/src/img/31.png",
    width: 1427,
    height: 2008,
    title: "Die Geneigte",
    titleEn: "The Leaning One",
    description: `Die Bach-Nelkenwurz ist eine typische Pflanze in feuchten Lebensräumen. Sie wächst in Flachmooren, Feuchtwiesen, an Bächen und Teichufern und am Rande von Auwäldern.
Trotz ihres ursprünglich großen Verbreitungsareals gilt die Bach-Nelkenwurz in mehreren deutschen Bundesländern mittlerweile als gefährdet und ist dort auf den regionalen roten Listen verzeichnet. 
Die Hauptursachen dafür liegen in der Zerstörung und Veränderung der Lebensräume.
Die Trockenlegung von Feuchtgebieten, die Intensivnutzung der Wiesen, und das Verschwinden der naturnahen Auwälder führen zu einem drastischen Rückgang der Standorte. Dazu kommen die durch den Klimawandel veränderten Niederschlagsmuster und die steigenden Temperaturen, die zur Austrocknung der Lebensräume beitragen.`,
    descriptionEn: "Water avens is a typical plant of wet habitats — fens, wet meadows, stream and pond margins, and floodplains. Despite its formerly broad range, it is now considered threatened in several German states and appears on regional Red Lists. Draining wetlands, intensive meadow use, and the loss of near-natural floodplain forests, together with climate-change-driven shifts in precipitation and higher temperatures, are driving habitat decline.",
    author: "Susanne Jampen",
    plantCommonName: "Bach-Nelkenwurz",
    plantCommonNameEn: "Water Avens",
    plantBotanicalName: "Geum rivale",
    artworkYear: "Sommer 2024",
    artworkSize: "20×32cm",
    artworkTechnique: "Aquarell auf Fabriano Artistico hot pressd ",
    artworkTechniqueEn: "Watercolor on Fabriano Artistico hot pressed",
    contactEmail: "s.jampen@icloud.com",
    lowSrc: "/src/thumbs/31.jpg",
    lowWidth: 400,
    lowHeight: 563
  },
  {
    src: "/src/img/32.png",
    width: 1600,
    height: 1200,
    title: "Enzian",
    titleEn: "Gentian",
    description: `Gentiana acaulis gehört zur Familie der Enziangewächse (Gentianaceae) und ist in Bergregionen Mittel- und Südeuropas heimisch, insbesondere in den Alpen aber auch im Jura und den Pyrenäen. Dieser Enzian wächst in Höhen von 800 bis 3000 m auf gut mit Wasser versorgten Silikatböden. Ein besonderes Kennzeichen von Gentiana acaulis sind kurze Blütenstände, die aus den grundständigen dichten Blattrosetten zu entspringen scheinen. Die intensiv blauen Blüten locken zur Blütezeit von April bis Juni Hummeln und Schmetterlinge zur Bestäubung an.
Die natürlichen Lebensräume nehmen auch für den Kiesel-Glocken-Enzian immer mehr ab, weil auch die Bergwiesen immer häufiger überdüngt sind. Schon eine Portion Gülle vertreibt die Pflanze in kurzer Zeit und danach bleibt sie auch für Jahrzehnte noch verschwunden. Gentiana acaulis steht wie alle Enzianarten unter Naturschutz und ist in der Roten Liste als gefährdet eingestuft.`,
    descriptionEn: "Gentiana acaulis belongs to the gentian family and is native to mountainous regions of Central and Southern Europe, especially the Alps. It grows from 800–3000 m on well-watered silicate soils. Short flower stalks appear to emerge from dense basal rosettes, and the intensely blue flowers attract bumblebees and butterflies from April to June. Its habitats are shrinking due to over-fertilization of mountain meadows. Even a single slurry application can drive it away for years. Like all gentians, it is protected and Red-Listed as endangered.",
    author: "Brigitte Rückle",
    plantCommonName: "Kiesel-Glocken-Enzian",
    plantCommonNameEn: "Trumpet Gentian",
    plantBotanicalName: "Gentiana acaulis",
    artworkYear: "2025",
    artworkSize: "31.5×29.5cm",
    artworkTechnique: "Buntstifte",
    artworkTechniqueEn: "Colored pencils",
    contactNote: "Brigitte Rückle c/o VBKD",
    lowSrc: "/src/thumbs/32.jpg",
    lowWidth: 451,
    lowHeight: 400
  },
  {
    src: "/src/img/33.png",
    width: 2629,
    height: 3440,
    title: "Platterbse/Duftwicke",
    titleEn: "Pea-vine / Sweet Pea",
    description: `Bei meinen Recherchen in Vorbereitung der Ausstellung bin ich auf www.rote-liste-zentrum.de darauf gestossen, dass verschiedene Wildformen, wie z.B. die Lathyrus nissolia L. (Gras-Platterbse) und die Lathyrus heterophyllus L. (Verschiedenblättrige Platterbse) gefährdet sind und die Lathyrus bauhini P.A. Genty (Schwert-Platterbse) sogar vom Aussterben bedroht ist. Es gibt noch einige andere Gefährdete, die man auf der genannten Internetseite finden kann.
Um dem Sammeln der Samen von Wildformen entgegenzuwirken, bietet der Handel zahlreiche kultivierte Sorten von Platterbsen oder auch Wicken an. Ich mag die bizarren Blüten in den unterschiedlichen Farben sehr gern und so zog ich sie auf meinem Balkon heran, um sie für das eingereichte Bild zu malen.`,
    descriptionEn: "In preparing for the exhibition, I found that various wild Lathyrus forms are threatened, and some even critically endangered. To counter wild seed collecting, many cultivated varieties are available. I love the bizarre flowers in their many colors, so I grew them on my balcony to paint this piece.",
    author: "Margitta Baum",
    plantCommonName: "Platterbse",
    plantCommonNameEn: "Pea-vine (Lathyrus)",
    plantBotanicalName: "Lathyrus sp.",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Aquarell / Papier",
    artworkTechniqueEn: "Watercolor / paper",
    lowSrc: "/src/thumbs/33.jpg",
    lowWidth: 400,
    lowHeight: 523
  },
  {
    src: "/src/img/34.jpg",
    width: 1800,
    height: 2592,
    title: "Die Früchte des Olivenbaums",
    titleEn: "The Fruits of the Olive Tree",
    description: `Obwohl der Olivenbaum noch nicht auf der Liste der gefährdeten Arten steht, ist er durch verschiedene Faktoren bedroht.
Olivenbäume können mehrere hundert Jahre alt werden. Das Olivebaumsterben wurde in Europa zuerst in Süditalien festgestellt. Auch andere südeuropäische Länder wie Spanien, Griechenland, Portugal und die Türkei hatten ähnliche Probleme. Leider wurde die Ernte aufgrund extremer Hitze, Wassermangel und Schädlingen in den vergangenen Sommern stark beeinträchtigt. Während der Blütezeit führte die Hitze zum Austrocknen der Blütenstände. Die extremen Wetterbedingungen im Sommer verhindern, dass die Früchte reifen und das Öl unter kühleren und feuchteren Bedingungen gebildet wird. Hinzu kommt, dass Waldbrände die Olivenhaine vernichten. Und dann ist da natürlich noch der tödliche bakterielle Krankheitserreger, Xylella fastidiosa, der die Ernte bedroht. Die Bäume ersticken schließlich, verdorren und vertrocknen. Die einst frühen Blätter fallen ab, und die Rinde vergraut und hinterlässt eine Spur des Todes. Millionen von Olivenbäumen wurden dadurch vernichtet, insbesondere in Italien und Spanien. In den Jahren 2022/2023 und 2023/2024 ging die Olivenölproduktion in der EU stark zurück. Der Anstieg der Olivenölpreise in unseren Supermärkten spiegelt die Tragödie der Olivenernte in den betroffenen Regionen wider. Derzeit laufen Forschungs- und Entwicklungsarbeiten, um das Problem von Xylella fastidiosa zu lösen.
(Quellen: https://bbc.com accessscience.com theguardian.org en.wikipedia.org nature.com https://wearewater.org)`,
    descriptionEn: "Although not yet listed as endangered, the olive tree faces multiple threats — extreme heat, water scarcity, pests, wildfires, and the bacterial pathogen Xylella fastidiosa. Millions of trees have been lost, especially in Italy and Spain; EU olive oil production fell sharply in 2022/2023 and 2023/2024, and rising prices reflect harvest losses in affected regions. Research is underway to address Xylella fastidiosa.",
    author: "Sue Hénon",
    plantCommonName: "Olive",
    plantCommonNameEn: "Olive",
    plantBotanicalName: "Olea europaea",
    artworkYear: "2024",
    artworkSize: "50×70cm",
    artworkTechnique: "Farbstift und Graphit auf Papier",
    artworkTechniqueEn: "Colored pencil and graphite on paper",
    contactEmail: "atelierhenon@googlemail.com",
    lowSrc: "/src/thumbs/34.jpg",
    lowWidth: 400,
    lowHeight: 576
  },
  {
    src: "/src/img/35.jpg",
    width: 1800,
    height: 2546,
    title: "Sanddorn ",
    titleEn: "Sea Buckthorn",
    description: "Der Sanddorn ist eine charakteristische Pflanze der Küstenregionen Deutschlands und besiedelt vor allem die Graudünen. Dieser Lebensraum ist jedoch zunehmend gefährdet: Küstenschutzmaßnahmen wie Eindeichungen, die intensive touristische Nutzung mit Trittschäden und Abfall sowie die Verdrängung durch die invasive Kartoffelrose bedrohen den Bestand der Graudünen und damit auch den Sanddorn selbst.",
    descriptionEn: "Sea buckthorn is characteristic of Germany’s coastal regions, colonizing grey dunes. These habitats are threatened by coastal protection measures, intensive tourism, and displacement by the invasive rugosa rose.",
    author: "Yana Andryeyeva",
    plantCommonName: "Sanddorn",
    plantCommonNameEn: "Sea Buckthorn",
    plantBotanicalName: "Hippophae rhamnoides",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Aquarell auf Papier (Echt-Bütten von Hahnemühle, hot pressed, satiniert, 600 g/m², ",
    artworkTechniqueEn: "Watercolor on paper (Hahnemühle mould-made, hot pressed, satinated, 600 g/m²)",
    contactEmail: "info@andryeyeva.de",
    contactSocial: "@andryeyevart (Instagram)",
    lowSrc: "/src/thumbs/35.jpg",
    lowWidth: 400,
    lowHeight: 566
  }
];
function By() {
  const [c, o] = b.useState(-1), [f, r] = b.useState("de"), h = "https://maxshirshin.github.io/vbkd2025";
  function S(m) {
    if (!m) return "";
    if (/^(https?:)?\/\//i.test(m) || /^[a-z0-9+.-]+:/i.test(m)) return m;
    const v = h.replace(/\/+$/, "");
    return v ? m.startsWith(v) ? m : m.startsWith("/") ? `${v}${m}` : `${v}/${m}` : m.startsWith("/") ? m : `/${m}`;
  }
  b.useEffect(() => {
    const m = new URLSearchParams(window.location.search), v = m.get("lang");
    if (v) {
      const A = v.toLowerCase();
      r(A === "en" || A === "de" ? A : "de");
    }
    const U = m.get("image");
    if (U) {
      const A = parseInt(U, 10);
      !isNaN(A) && A >= 0 && A < ls.length && o(A);
    }
  }, []), b.useEffect(() => {
    const m = new URLSearchParams(window.location.search);
    c >= 0 ? m.set("image", c.toString()) : m.delete("image"), m.set("lang", f);
    const v = m.toString();
    v ? window.history.replaceState(null, "", `?${v}`) : window.history.replaceState(null, "", window.location.pathname);
  }, [c, f]), b.useEffect(() => {
    const m = new URLSearchParams(window.location.search);
    m.set("lang", f), c >= 0 && m.set("image", c.toString());
    const v = m.toString();
    window.history.replaceState(
      null,
      "",
      v ? `?${v}` : window.location.pathname
    );
  }, [f]);
  const w = JSON.parse(
    JSON.stringify(ls)
  ), E = JSON.parse(
    JSON.stringify(ls)
  );
  for (const m of E)
    m.src = S(m.src), m.lowSrc = S(m.lowSrc), f === "en" && (m.title = m.titleEn, m.description = m.descriptionEn, m.plantCommonName = m.plantCommonNameEn, m.artworkTechnique = m.artworkTechniqueEn);
  for (const m of w)
    m.lowSrc = S(m.lowSrc), m.src = m.lowSrc || S(m.src), m.width = m.lowWidth, m.height = m.lowHeight, f === "en" && (m.title = m.titleEn || m.title, m.description = m.descriptionEn, m.plantCommonName = m.plantCommonNameEn, m.artworkTechnique = m.artworkTechniqueEn), m.alt = m.title;
  return /* @__PURE__ */ ee.jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ ee.jsxs("div", { className: "intro", children: [
      /* @__PURE__ */ ee.jsx("div", { className: "intro__poster", children: /* @__PURE__ */ ee.jsx(
        "img",
        {
          src: S("/src/img/poster.jpeg"),
          height: 320,
          alt: "VBKD Online Ausstellung 2025"
        }
      ) }),
      /* @__PURE__ */ ee.jsxs("div", { className: "intro__text", children: [
        /* @__PURE__ */ ee.jsx("h3", { children: "Herzlich willkommen zur Ausstellung „Gefährdete Pflanzen“ des Vereins Botanische Kunst Deutschland!" }),
        /* @__PURE__ */ ee.jsx("p", { children: "Im Mittelpunkt der diesjährigen Ausstellung stehen Pflanzenarten, die zwar als gefährdet gelten, aber nicht unbedingt auf der nationalen Roten Liste geführt werden. Einige der hier gezeigten Pflanzen sind naheliegend, andere werden Sie überraschen. Es gibt viele Gründe, warum eine Pflanze als besorgniserregend gelten kann. Dazu gehört die Zerstörung ihres Lebensraums durch großflächige Bauvorhaben, sei es für den Wohnungsbau, andere Bauprojekte oder den Straßenbau. Der Klimawandel ist ein großes Problem, mit Waldbränden, steigenden Temperaturen und Überschwemmungen. Hinzu kommen Insektenbefall, tödliche Bakterien, Übernutzung und sogar Vandalismus. Interessanterweise bedeutet die Gefährdung einer Pflanze an einem Ort – ob in Deutschland oder weltweit – nicht zwangsläufig, dass sie auch überall gefährdet ist." }),
        /* @__PURE__ */ ee.jsx("p", { children: "Deutschland ist ein gutes Beispiel: Der Gewöhnliche Löwenzahn steht in Bayern und Hessen auf der Roten Liste, in anderen Teilen Deutschlands jedoch nicht. Manche Pflanzen stehen kurz vor dem Aussterben, während andere erst jetzt die Auswirkungen verschiedener Probleme zu spüren bekommen." }),
        /* @__PURE__ */ ee.jsx("p", { children: "Ein kleiner beruhigender Aspekt ist die bemerkenswerte Anpassungsfähigkeit einiger Pflanzen an andere Regionen der Erde. Während sich unsere Landmassen durch den Klimawandel verändern und manche Pflanzen absterben oder verschwinden, beginnen dieselben Pflanzen in Umgebungen, die ihren früheren Lebensräumen ähneln, wieder aufzutauchen und zu gedeihen. Leider schreitet die Zerstörung unserer Pflanzenwelt so schnell voran, dass wir möglicherweise nicht genug Zeit haben, dies noch zu verhindern, selbst angesichts der positiven Nachrichten über die Anpassungsfähigkeit der Pflanzen an neue Umgebungen." }),
        /* @__PURE__ */ ee.jsxs("p", { className: "intro__eng", children: [
          /* @__PURE__ */ ee.jsx("strong", { children: 'Welcome to the VBKD 2025 Online Exhibition "Threatened Plants"!' }),
          " ",
          "This year’s exhibition highlights plant species considered threatened even if not on the national Red List, showing both expected and surprising examples. Their vulnerability stems from habitat destruction through construction and roads, climate change with fires, rising temperatures and floods, insect infestations, lethal pathogens, overuse and even vandalism. Threat status can be highly local: for instance, the common dandelion is red-listed in parts of Germany but not elsewhere. While some species are near extinction and others are only beginning to feel emerging pressures, a modest source of hope lies in the remarkable ability of certain plants to adapt and reestablish themselves in new regions resembling their former habitats — though the pace of environmental loss may outstrip these adaptive successes."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ ee.jsxs("div", { className: "gallery-container", children: [
      /* @__PURE__ */ ee.jsx(
        pv,
        {
          photos: w,
          onClick: ({ index: m }) => o(m),
          spacing: 8,
          padding: 0,
          targetRowHeight: 400,
          render: {
            extras: (m, { photo: v }) => /* @__PURE__ */ ee.jsxs("div", { className: "gallery-image-title", children: [
              v.author,
              " - ",
              v.title
            ] })
          }
        }
      ),
      /* @__PURE__ */ ee.jsx(
        Uy,
        {
          slides: E,
          open: c >= 0,
          index: c,
          close: () => o(-1),
          on: {
            view: ({ index: m }) => {
              o(m);
            }
          },
          render: {
            slide: ({ slide: m }) => /* @__PURE__ */ ee.jsxs("div", { className: "b-content", children: [
              /* @__PURE__ */ ee.jsx("div", { className: "b-content__pic", children: /* @__PURE__ */ ee.jsx(
                "img",
                {
                  src: m.src,
                  alt: E[c]?.title ?? ""
                }
              ) }),
              /* @__PURE__ */ ee.jsxs("div", { className: "b-content__info", children: [
                /* @__PURE__ */ ee.jsx("div", { className: "b-content__author", children: E[c]?.author }),
                /* @__PURE__ */ ee.jsxs("div", { children: [
                  E[c]?.contactEmail && /* @__PURE__ */ ee.jsx(
                    "a",
                    {
                      className: "b-content__meta",
                      href: `mailto:${E[c]?.contactEmail}`,
                      children: E[c]?.contactEmail
                    }
                  ),
                  E[c]?.contactPhone && /* @__PURE__ */ ee.jsx(
                    "a",
                    {
                      className: "b-content__meta",
                      href: `tel:${E[c]?.contactPhone}`,
                      children: E[c]?.contactPhone
                    }
                  ),
                  E[c]?.contactSocial && /* @__PURE__ */ ee.jsx(
                    "a",
                    {
                      className: "b-content__meta",
                      href: /^https?:\/\//i.test(
                        E[c]?.contactSocial || ""
                      ) ? E[c]?.contactSocial : (E[c]?.contactSocial || "").startsWith("@") ? `https://instagram.com/${(E[c]?.contactSocial || "").slice(1)}` : `https://instagram.com/${E[c]?.contactSocial}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: E[c]?.contactSocial
                    }
                  ),
                  E[c]?.contactWebsite && /* @__PURE__ */ ee.jsx(
                    "a",
                    {
                      className: "b-content__meta",
                      href: /^https?:\/\//i.test(
                        E[c]?.contactWebsite || ""
                      ) ? E[c]?.contactWebsite : `https://${E[c]?.contactWebsite}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: E[c]?.contactWebsite
                    }
                  ),
                  E[c]?.contactNote && /* @__PURE__ */ ee.jsx("span", { className: "b-content__meta", children: E[c]?.contactNote })
                ] }),
                /* @__PURE__ */ ee.jsx("div", { className: "b-content__title", children: E[c]?.title }),
                /* @__PURE__ */ ee.jsxs("div", { children: [
                  /* @__PURE__ */ ee.jsx("span", { className: "b-content__meta", children: E[c]?.artworkSize }),
                  /* @__PURE__ */ ee.jsx("span", { className: "b-content__meta", children: E[c]?.artworkYear }),
                  /* @__PURE__ */ ee.jsx("span", { className: "b-content__meta", children: E[c]?.artworkTechnique })
                ] }),
                /* @__PURE__ */ ee.jsxs("div", { children: [
                  /* @__PURE__ */ ee.jsx("span", { className: "b-content__cn", children: E[c]?.plantCommonName }),
                  " ",
                  /* @__PURE__ */ ee.jsxs("span", { className: "b-content__bn", children: [
                    "(",
                    E[c]?.plantBotanicalName,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ ee.jsx("div", { children: /* @__PURE__ */ ee.jsx(
                  "button",
                  {
                    className: "b-content__lang-btn",
                    onClick: () => r(f === "de" ? "en" : "de"),
                    children: f === "de" ? "Read in English (automatic translation)" : "Auf Deutsch lesen"
                  }
                ) }),
                /* @__PURE__ */ ee.jsx("div", { className: "b-content__desc", children: E[c]?.description })
              ] })
            ] })
          }
        }
      )
    ] })
  ] });
}
function xy(c = "root") {
  const o = document.getElementById(c);
  if (!o) {
    console.error(`Element with id "${c}" not found`);
    return;
  }
  Q0.createRoot(o).render(
    /* @__PURE__ */ ee.jsx(b.StrictMode, { children: /* @__PURE__ */ ee.jsx(By, {}) })
  );
}
export {
  xy as initVBKDGallery
};

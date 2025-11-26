var Qr = { exports: {} }, eu = {};
var gh;
function L0() {
  if (gh) return eu;
  gh = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function f(r, h, S) {
    var A = null;
    if (S !== void 0 && (A = "" + S), h.key !== void 0 && (A = "" + h.key), "key" in h) {
      S = {};
      for (var E in h)
        E !== "key" && (S[E] = h[E]);
    } else S = h;
    return h = S.ref, {
      $$typeof: c,
      type: r,
      key: A,
      ref: h !== void 0 ? h : null,
      props: S
    };
  }
  return eu.Fragment = o, eu.jsx = f, eu.jsxs = f, eu;
}
var vh;
function q0() {
  return vh || (vh = 1, Qr.exports = L0()), Qr.exports;
}
var pe = q0(), Zr = { exports: {} }, ne = {};
var yh;
function j0() {
  if (yh) return ne;
  yh = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), A = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), D = Symbol.iterator;
  function q(m) {
    return m === null || typeof m != "object" ? null : (m = D && m[D] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var x = {
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
  function Z(m, _, j) {
    this.props = m, this.context = _, this.refs = W, this.updater = j || x;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(m, _) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, _, "setState");
  }, Z.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = Z.prototype;
  function te(m, _, j) {
    this.props = m, this.context = _, this.refs = W, this.updater = j || x;
  }
  var he = te.prototype = new ee();
  he.constructor = te, L(he, Z.prototype), he.isPureReactComponent = !0;
  var ve = Array.isArray;
  function $() {
  }
  var G = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function le(m, _, j) {
    var X = j.ref;
    return {
      $$typeof: c,
      type: m,
      key: _,
      ref: X !== void 0 ? X : null,
      props: j
    };
  }
  function Ke(m, _) {
    return le(m.type, _, m.props);
  }
  function re(m) {
    return typeof m == "object" && m !== null && m.$$typeof === c;
  }
  function be(m) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(j) {
      return _[j];
    });
  }
  var F = /\/+/g;
  function Ee(m, _) {
    return typeof m == "object" && m !== null && m.key != null ? be("" + m.key) : _.toString(36);
  }
  function P(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then($, $) : (m.status = "pending", m.then(
          function(_) {
            m.status === "pending" && (m.status = "fulfilled", m.value = _);
          },
          function(_) {
            m.status === "pending" && (m.status = "rejected", m.reason = _);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function M(m, _, j, X, I) {
    var ae = typeof m;
    (ae === "undefined" || ae === "boolean") && (m = null);
    var oe = !1;
    if (m === null) oe = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case c:
            case o:
              oe = !0;
              break;
            case U:
              return oe = m._init, M(
                oe(m._payload),
                _,
                j,
                X,
                I
              );
          }
      }
    if (oe)
      return I = I(m), oe = X === "" ? "." + Ee(m, 0) : X, ve(I) ? (j = "", oe != null && (j = oe.replace(F, "$&/") + "/"), M(I, _, j, "", function(Qt) {
        return Qt;
      })) : I != null && (re(I) && (I = Ke(
        I,
        j + (I.key == null || m && m.key === I.key ? "" : ("" + I.key).replace(
          F,
          "$&/"
        ) + "/") + oe
      )), _.push(I)), 1;
    oe = 0;
    var Je = X === "" ? "." : X + ":";
    if (ve(m))
      for (var He = 0; He < m.length; He++)
        X = m[He], ae = Je + Ee(X, He), oe += M(
          X,
          _,
          j,
          ae,
          I
        );
    else if (He = q(m), typeof He == "function")
      for (m = He.call(m), He = 0; !(X = m.next()).done; )
        X = X.value, ae = Je + Ee(X, He++), oe += M(
          X,
          _,
          j,
          ae,
          I
        );
    else if (ae === "object") {
      if (typeof m.then == "function")
        return M(
          P(m),
          _,
          j,
          X,
          I
        );
      throw _ = String(m), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return oe;
  }
  function H(m, _, j) {
    if (m == null) return m;
    var X = [], I = 0;
    return M(m, X, "", "", function(ae) {
      return _.call(j, ae, I++);
    }), X;
  }
  function Q(m) {
    if (m._status === -1) {
      var _ = m._result;
      _ = _(), _.then(
        function(j) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = j);
        },
        function(j) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = j);
        }
      ), m._status === -1 && (m._status = 0, m._result = _);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var se = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, Se = {
    map: H,
    forEach: function(m, _, j) {
      H(
        m,
        function() {
          _.apply(this, arguments);
        },
        j
      );
    },
    count: function(m) {
      var _ = 0;
      return H(m, function() {
        _++;
      }), _;
    },
    toArray: function(m) {
      return H(m, function(_) {
        return _;
      }) || [];
    },
    only: function(m) {
      if (!re(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return ne.Activity = N, ne.Children = Se, ne.Component = Z, ne.Fragment = f, ne.Profiler = h, ne.PureComponent = te, ne.StrictMode = r, ne.Suspense = g, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return G.H.useMemoCache(m);
    }
  }, ne.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(m, _, j) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var X = L({}, m.props), I = m.key;
    if (_ != null)
      for (ae in _.key !== void 0 && (I = "" + _.key), _)
        !ce.call(_, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && _.ref === void 0 || (X[ae] = _[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) X.children = j;
    else if (1 < ae) {
      for (var oe = Array(ae), Je = 0; Je < ae; Je++)
        oe[Je] = arguments[Je + 2];
      X.children = oe;
    }
    return le(m.type, I, X);
  }, ne.createContext = function(m) {
    return m = {
      $$typeof: A,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: S,
      _context: m
    }, m;
  }, ne.createElement = function(m, _, j) {
    var X, I = {}, ae = null;
    if (_ != null)
      for (X in _.key !== void 0 && (ae = "" + _.key), _)
        ce.call(_, X) && X !== "key" && X !== "__self" && X !== "__source" && (I[X] = _[X]);
    var oe = arguments.length - 2;
    if (oe === 1) I.children = j;
    else if (1 < oe) {
      for (var Je = Array(oe), He = 0; He < oe; He++)
        Je[He] = arguments[He + 2];
      I.children = Je;
    }
    if (m && m.defaultProps)
      for (X in oe = m.defaultProps, oe)
        I[X] === void 0 && (I[X] = oe[X]);
    return le(m, ae, I);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(m) {
    return { $$typeof: E, render: m };
  }, ne.isValidElement = re, ne.lazy = function(m) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: m },
      _init: Q
    };
  }, ne.memo = function(m, _) {
    return {
      $$typeof: y,
      type: m,
      compare: _ === void 0 ? null : _
    };
  }, ne.startTransition = function(m) {
    var _ = G.T, j = {};
    G.T = j;
    try {
      var X = m(), I = G.S;
      I !== null && I(j, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then($, se);
    } catch (ae) {
      se(ae);
    } finally {
      _ !== null && j.types !== null && (_.types = j.types), G.T = _;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, ne.use = function(m) {
    return G.H.use(m);
  }, ne.useActionState = function(m, _, j) {
    return G.H.useActionState(m, _, j);
  }, ne.useCallback = function(m, _) {
    return G.H.useCallback(m, _);
  }, ne.useContext = function(m) {
    return G.H.useContext(m);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(m, _) {
    return G.H.useDeferredValue(m, _);
  }, ne.useEffect = function(m, _) {
    return G.H.useEffect(m, _);
  }, ne.useEffectEvent = function(m) {
    return G.H.useEffectEvent(m);
  }, ne.useId = function() {
    return G.H.useId();
  }, ne.useImperativeHandle = function(m, _, j) {
    return G.H.useImperativeHandle(m, _, j);
  }, ne.useInsertionEffect = function(m, _) {
    return G.H.useInsertionEffect(m, _);
  }, ne.useLayoutEffect = function(m, _) {
    return G.H.useLayoutEffect(m, _);
  }, ne.useMemo = function(m, _) {
    return G.H.useMemo(m, _);
  }, ne.useOptimistic = function(m, _) {
    return G.H.useOptimistic(m, _);
  }, ne.useReducer = function(m, _, j) {
    return G.H.useReducer(m, _, j);
  }, ne.useRef = function(m) {
    return G.H.useRef(m);
  }, ne.useState = function(m) {
    return G.H.useState(m);
  }, ne.useSyncExternalStore = function(m, _, j) {
    return G.H.useSyncExternalStore(
      m,
      _,
      j
    );
  }, ne.useTransition = function() {
    return G.H.useTransition();
  }, ne.version = "19.2.0", ne;
}
var ph;
function ss() {
  return ph || (ph = 1, Zr.exports = j0()), Zr.exports;
}
var b = ss(), Kr = { exports: {} }, tu = {}, Jr = { exports: {} }, Wr = {};
var bh;
function G0() {
  return bh || (bh = 1, (function(c) {
    function o(M, H) {
      var Q = M.length;
      M.push(H);
      e: for (; 0 < Q; ) {
        var se = Q - 1 >>> 1, Se = M[se];
        if (0 < h(Se, H))
          M[se] = H, M[Q] = Se, Q = se;
        else break e;
      }
    }
    function f(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var H = M[0], Q = M.pop();
      if (Q !== H) {
        M[0] = Q;
        e: for (var se = 0, Se = M.length, m = Se >>> 1; se < m; ) {
          var _ = 2 * (se + 1) - 1, j = M[_], X = _ + 1, I = M[X];
          if (0 > h(j, Q))
            X < Se && 0 > h(I, j) ? (M[se] = I, M[X] = Q, se = X) : (M[se] = j, M[_] = Q, se = _);
          else if (X < Se && 0 > h(I, Q))
            M[se] = I, M[X] = Q, se = X;
          else break e;
        }
      }
      return H;
    }
    function h(M, H) {
      var Q = M.sortIndex - H.sortIndex;
      return Q !== 0 ? Q : M.id - H.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      c.unstable_now = function() {
        return S.now();
      };
    } else {
      var A = Date, E = A.now();
      c.unstable_now = function() {
        return A.now() - E;
      };
    }
    var g = [], y = [], U = 1, N = null, D = 3, q = !1, x = !1, L = !1, W = !1, Z = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    function he(M) {
      for (var H = f(y); H !== null; ) {
        if (H.callback === null) r(y);
        else if (H.startTime <= M)
          r(y), H.sortIndex = H.expirationTime, o(g, H);
        else break;
        H = f(y);
      }
    }
    function ve(M) {
      if (L = !1, he(M), !x)
        if (f(g) !== null)
          x = !0, $ || ($ = !0, be());
        else {
          var H = f(y);
          H !== null && P(ve, H.startTime - M);
        }
    }
    var $ = !1, G = -1, ce = 5, le = -1;
    function Ke() {
      return W ? !0 : !(c.unstable_now() - le < ce);
    }
    function re() {
      if (W = !1, $) {
        var M = c.unstable_now();
        le = M;
        var H = !0;
        try {
          e: {
            x = !1, L && (L = !1, ee(G), G = -1), q = !0;
            var Q = D;
            try {
              t: {
                for (he(M), N = f(g); N !== null && !(N.expirationTime > M && Ke()); ) {
                  var se = N.callback;
                  if (typeof se == "function") {
                    N.callback = null, D = N.priorityLevel;
                    var Se = se(
                      N.expirationTime <= M
                    );
                    if (M = c.unstable_now(), typeof Se == "function") {
                      N.callback = Se, he(M), H = !0;
                      break t;
                    }
                    N === f(g) && r(g), he(M);
                  } else r(g);
                  N = f(g);
                }
                if (N !== null) H = !0;
                else {
                  var m = f(y);
                  m !== null && P(
                    ve,
                    m.startTime - M
                  ), H = !1;
                }
              }
              break e;
            } finally {
              N = null, D = Q, q = !1;
            }
            H = void 0;
          }
        } finally {
          H ? be() : $ = !1;
        }
      }
    }
    var be;
    if (typeof te == "function")
      be = function() {
        te(re);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), Ee = F.port2;
      F.port1.onmessage = re, be = function() {
        Ee.postMessage(null);
      };
    } else
      be = function() {
        Z(re, 0);
      };
    function P(M, H) {
      G = Z(function() {
        M(c.unstable_now());
      }, H);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, c.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < M ? Math.floor(1e3 / M) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, c.unstable_next = function(M) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = D;
      }
      var Q = D;
      D = H;
      try {
        return M();
      } finally {
        D = Q;
      }
    }, c.unstable_requestPaint = function() {
      W = !0;
    }, c.unstable_runWithPriority = function(M, H) {
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
        return H();
      } finally {
        D = Q;
      }
    }, c.unstable_scheduleCallback = function(M, H, Q) {
      var se = c.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? se + Q : se) : Q = se, M) {
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
        callback: H,
        priorityLevel: M,
        startTime: Q,
        expirationTime: Se,
        sortIndex: -1
      }, Q > se ? (M.sortIndex = Q, o(y, M), f(g) === null && M === f(y) && (L ? (ee(G), G = -1) : L = !0, P(ve, Q - se))) : (M.sortIndex = Se, o(g, M), x || q || (x = !0, $ || ($ = !0, be()))), M;
    }, c.unstable_shouldYield = Ke, c.unstable_wrapCallback = function(M) {
      var H = D;
      return function() {
        var Q = D;
        D = H;
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
var $r = { exports: {} }, it = {};
var Eh;
function X0() {
  if (Eh) return it;
  Eh = 1;
  var c = ss();
  function o(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        y += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function S(g, y, U) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: N == null ? null : "" + N,
      children: g,
      containerInfo: y,
      implementation: U
    };
  }
  var A = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(g, y) {
    if (g === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, it.createPortal = function(g, y) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(o(299));
    return S(g, y, null, U);
  }, it.flushSync = function(g) {
    var y = A.T, U = r.p;
    try {
      if (A.T = null, r.p = 2, g) return g();
    } finally {
      A.T = y, r.p = U, r.d.f();
    }
  }, it.preconnect = function(g, y) {
    typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(g, y));
  }, it.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g);
  }, it.preinit = function(g, y) {
    if (typeof g == "string" && y && typeof y.as == "string") {
      var U = y.as, N = E(U, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      U === "style" ? r.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: N,
          integrity: D,
          fetchPriority: q
        }
      ) : U === "script" && r.d.X(g, {
        crossOrigin: N,
        integrity: D,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, it.preinitModule = function(g, y) {
    if (typeof g == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var U = E(
            y.as,
            y.crossOrigin
          );
          r.d.M(g, {
            crossOrigin: U,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(g);
  }, it.preload = function(g, y) {
    if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var U = y.as, N = E(U, y.crossOrigin);
      r.d.L(g, U, {
        crossOrigin: N,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, it.preloadModule = function(g, y) {
    if (typeof g == "string")
      if (y) {
        var U = E(y.as, y.crossOrigin);
        r.d.m(g, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: U,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(g);
  }, it.requestFormReset = function(g) {
    r.d.r(g);
  }, it.unstable_batchedUpdates = function(g, y) {
    return g(y);
  }, it.useFormState = function(g, y, U) {
    return A.H.useFormState(g, y, U);
  }, it.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, it.version = "19.2.0", it;
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
  return c(), $r.exports = X0(), $r.exports;
}
var Th;
function k0() {
  if (Th) return tu;
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
  function A(e) {
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
  function g(e) {
    if (S(e) !== e)
      throw Error(r(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (t = S(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return g(a), e;
          if (u === l) return g(a), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) n = a, l = u;
      else {
        for (var i = !1, s = a.child; s; ) {
          if (s === n) {
            i = !0, n = a, l = u;
            break;
          }
          if (s === l) {
            i = !0, l = a, n = u;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === n) {
              i = !0, n = u, l = a;
              break;
            }
            if (s === l) {
              i = !0, l = u, n = a;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(r(189));
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
  var N = Object.assign, D = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), te = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), Ke = Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
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
      case ve:
        return "Suspense";
      case $:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case he:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return Ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var P = Array.isArray, M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], Se = -1;
  function m(e) {
    return { current: e };
  }
  function _(e) {
    0 > Se || (e.current = se[Se], se[Se] = null, Se--);
  }
  function j(e, t) {
    Se++, se[Se] = e.current, e.current = t;
  }
  var X = m(null), I = m(null), ae = m(null), oe = m(null);
  function Je(e, t) {
    switch (j(ae, t), j(I, e), j(X, null), t.nodeType) {
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
    _(X), j(X, e);
  }
  function He() {
    _(X), _(I), _(ae);
  }
  function Qt(e) {
    e.memoizedState !== null && j(oe, e);
    var t = X.current, n = jd(t, e.type);
    t !== n && (j(I, e), j(X, n));
  }
  function ml(e) {
    I.current === e && (_(X), _(I)), oe.current === e && (_(oe), $a._currentValue = Q);
  }
  var gl, ru;
  function Zt(e) {
    if (gl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        gl = t && t[1] || "", ru = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gl + e + ru;
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
                  var w = O;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  w = O;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                w = O;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (O) {
            if (O && w && typeof O.stack == "string")
              return [O.stack, w.stack];
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
      var u = l.DetermineComponentFrameRoot(), i = u[0], s = u[1];
      if (i && s) {
        var d = i.split(`
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
  function Ri(e, t) {
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
  function ua(e) {
    try {
      var t = "", n = null;
      do
        t += Ri(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var yl = Object.prototype.hasOwnProperty, ia = c.unstable_scheduleCallback, Y = c.unstable_cancelCallback, Re = c.unstable_shouldYield, Pe = c.unstable_requestPaint, xe = c.unstable_now, st = c.unstable_getCurrentPriorityLevel, gn = c.unstable_ImmediatePriority, Vn = c.unstable_UserBlockingPriority, Jt = c.unstable_NormalPriority, ca = c.unstable_LowPriority, pt = c.unstable_IdlePriority, ra = c.log, Qn = c.unstable_setDisableYieldValue, vn = null, et = null;
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
  var su = 256, ou = 262144, fu = 4194304;
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
  function du(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var s = l & 134217727;
    return s !== 0 ? (l = s & ~u, l !== 0 ? a = Zn(l) : (i &= s, i !== 0 ? a = Zn(i) : n || (n = s & ~e, n !== 0 && (a = Zn(n))))) : (s = l & ~u, s !== 0 ? a = Zn(s) : i !== 0 ? a = Zn(i) : n || (n = l & ~e, n !== 0 && (a = Zn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a;
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
    var e = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), e;
  }
  function Ui(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function oa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wm(e, t, n, l, a, u) {
    var i = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var s = e.entanglements, d = e.expirationTimes, T = e.hiddenUpdates;
    for (n = i & ~n; 0 < n; ) {
      var C = 31 - bt(n), B = 1 << C;
      s[C] = 0, d[C] = -1;
      var w = T[C];
      if (w !== null)
        for (T[C] = null, C = 0; C < w.length; C++) {
          var O = w[C];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~B;
    }
    l !== 0 && ps(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
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
    return n = (n & 42) !== 0 ? 1 : Bi(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Bi(e) {
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
  function Hi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Es() {
    var e = H.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rh(e.type));
  }
  function zs(e, t) {
    var n = H.p;
    try {
      return H.p = e, t();
    } finally {
      H.p = n;
    }
  }
  var pn = Math.random().toString(36).slice(2), tt = "__reactFiber$" + pn, ot = "__reactProps$" + pn, pl = "__reactContainer$" + pn, xi = "__reactEvents$" + pn, _m = "__reactListeners$" + pn, Nm = "__reactHandles$" + pn, Ts = "__reactResources$" + pn, fa = "__reactMarker$" + pn;
  function Li(e) {
    delete e[tt], delete e[ot], delete e[xi], delete e[_m], delete e[Nm];
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
  function hu(e, t, n) {
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
  function mu(e, t, n) {
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
      var a = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(i) {
          n = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(i) {
          n = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function qi(e) {
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
  function gu(e) {
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
  function ji(e, t, n, l, a, u, i, s) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? Gi(e, i, Nt(t)) : n != null ? Gi(e, i, Nt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Nt(s) : e.removeAttribute("name");
  }
  function Ds(e, t, n, l, a, u, i, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        qi(e);
        return;
      }
      n = n != null ? "" + Nt(n) : "", t = t != null ? "" + Nt(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = s ? e.checked : !!l, e.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), qi(e);
  }
  function Gi(e, t, n) {
    t === "number" && gu(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
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
        if (P(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Nt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), qi(e);
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
      for (var u in t)
        t.hasOwnProperty(u) && Us(e, u, t[u]);
  }
  function Yi(e) {
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
  function vu(e) {
    return Bm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $t() {
  }
  var Xi = null;
  function ki(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var wl = null, _l = null;
  function Hs(e) {
    var t = Sl(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ji(
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
                ji(
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
  var Vi = !1;
  function xs(e, t, n) {
    if (Vi) return e(t, n);
    Vi = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Vi = !1, (wl !== null || _l !== null) && (li(), wl && (t = wl, e = _l, _l = wl = null, Hs(t), e)))
        for (t = 0; t < e.length; t++) Hs(e[t]);
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
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qi = !1;
  if (Ft)
    try {
      var ma = {};
      Object.defineProperty(ma, "passive", {
        get: function() {
          Qi = !0;
        }
      }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
    } catch {
      Qi = !1;
    }
  var bn = null, Zi = null, yu = null;
  function Ls() {
    if (yu) return yu;
    var e, t = Zi, n = t.length, l, a = "value" in bn ? bn.value : bn.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var i = n - e;
    for (l = 1; l <= i && t[n - l] === a[u - l]; l++) ;
    return yu = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function pu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bu() {
    return !0;
  }
  function qs() {
    return !1;
  }
  function ft(e) {
    function t(n, l, a, u, i) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var s in e)
        e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? bu : qs, this.isPropagationStopped = qs, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bu);
      },
      persist: function() {
      },
      isPersistent: bu
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
  }, Su = ft(Jn), ga = N({}, Jn, { view: 0, detail: 0 }), Hm = ft(ga), Ki, Ji, va, Eu = N({}, ga, {
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
    getModifierState: $i,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== va && (va && e.type === "mousemove" ? (Ki = e.screenX - va.screenX, Ji = e.screenY - va.screenY) : Ji = Ki = 0, va = e), Ki);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ji;
    }
  }), js = ft(Eu), xm = N({}, Eu, { dataTransfer: 0 }), Lm = ft(xm), qm = N({}, ga, { relatedTarget: 0 }), Wi = ft(qm), jm = N({}, Jn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gm = ft(jm), Ym = N({}, Jn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xm = ft(Ym), km = N({}, Jn, { data: 0 }), Gs = ft(km), Vm = {
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
  function $i() {
    return Km;
  }
  var Jm = N({}, ga, {
    key: function(e) {
      if (e.key) {
        var t = Vm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $i,
    charCode: function(e) {
      return e.type === "keypress" ? pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wm = ft(Jm), $m = N({}, Eu, {
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
  }), Ys = ft($m), Fm = N({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $i
  }), Im = ft(Fm), Pm = N({}, Jn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), eg = ft(Pm), tg = N({}, Eu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ng = ft(tg), lg = N({}, Jn, {
    newState: 0,
    oldState: 0
  }), ag = ft(lg), ug = [9, 13, 27, 32], Fi = Ft && "CompositionEvent" in window, ya = null;
  Ft && "documentMode" in document && (ya = document.documentMode);
  var ig = Ft && "TextEvent" in window && !ya, Xs = Ft && (!Fi || ya && 8 < ya && 11 >= ya), ks = " ", Vs = !1;
  function Qs(e, t) {
    switch (e) {
      case "keyup":
        return ug.indexOf(t.keyCode) !== -1;
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
        return t.which !== 32 ? null : (Vs = !0, ks);
      case "textInput":
        return e = t.data, e === ks && Vs ? null : e;
      default:
        return null;
    }
  }
  function rg(e, t) {
    if (Nl)
      return e === "compositionend" || !Fi && Qs(e, t) ? (e = Ls(), yu = Zi = bn = null, Nl = !1, e) : null;
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
        return Xs && t.locale !== "ko" ? null : t.data;
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
    wl ? _l ? _l.push(l) : _l = [l] : wl = l, t = oi(t, "onChange"), 0 < t.length && (n = new Su(
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
  function zu(e) {
    var t = da(e);
    if (Os(t)) return e;
  }
  function Ws(e, t) {
    if (e === "change") return t;
  }
  var $s = !1;
  if (Ft) {
    var Ii;
    if (Ft) {
      var Pi = "oninput" in document;
      if (!Pi) {
        var Fs = document.createElement("div");
        Fs.setAttribute("oninput", "return;"), Pi = typeof Fs.oninput == "function";
      }
      Ii = Pi;
    } else Ii = !1;
    $s = Ii && (!document.documentMode || 9 < document.documentMode);
  }
  function Is() {
    pa && (pa.detachEvent("onpropertychange", Ps), ba = pa = null);
  }
  function Ps(e) {
    if (e.propertyName === "value" && zu(ba)) {
      var t = [];
      Js(
        t,
        ba,
        e,
        ki(e)
      ), xs(og, t);
    }
  }
  function fg(e, t, n) {
    e === "focusin" ? (Is(), pa = t, ba = n, pa.attachEvent("onpropertychange", Ps)) : e === "focusout" && Is();
  }
  function dg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zu(ba);
  }
  function hg(e, t) {
    if (e === "click") return zu(t);
  }
  function mg(e, t) {
    if (e === "input" || e === "change")
      return zu(t);
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
    for (var t = gu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gu(e.document);
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
    nc || Ml == null || Ml !== gu(l) || (l = Ml, "selectionStart" in l && ec(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ea && Sa(Ea, l) || (Ea = l, l = oi(tc, "onSelect"), 0 < l.length && (t = new Su(
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
  }, lc = {}, uo = {};
  Ft && (uo = document.createElement("div").style, "AnimationEvent" in window || (delete Ol.animationend.animation, delete Ol.animationiteration.animation, delete Ol.animationstart.animation), "TransitionEvent" in window || delete Ol.transitionend.transition);
  function $n(e) {
    if (lc[e]) return lc[e];
    if (!Ol[e]) return e;
    var t = Ol[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in uo)
        return lc[e] = t[n];
    return e;
  }
  var io = $n("animationend"), co = $n("animationiteration"), ro = $n("animationstart"), yg = $n("transitionrun"), pg = $n("transitionstart"), bg = $n("transitioncancel"), so = $n("transitionend"), oo = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function Lt(e, t) {
    oo.set(e, t), Kn(t, [e]);
  }
  var Tu = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ot = [], Dl = 0, uc = 0;
  function Au() {
    for (var e = Dl, t = uc = Dl = 0; t < e; ) {
      var n = Ot[t];
      Ot[t++] = null;
      var l = Ot[t];
      Ot[t++] = null;
      var a = Ot[t];
      Ot[t++] = null;
      var u = Ot[t];
      if (Ot[t++] = null, l !== null && a !== null) {
        var i = l.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), l.pending = a;
      }
      u !== 0 && fo(n, a, u);
    }
  }
  function wu(e, t, n, l) {
    Ot[Dl++] = e, Ot[Dl++] = t, Ot[Dl++] = n, Ot[Dl++] = l, uc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ic(e, t, n, l) {
    return wu(e, t, n, l), _u(e);
  }
  function Fn(e, t) {
    return wu(e, null, null, t), _u(e);
  }
  function fo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - bt(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function _u(e) {
    if (50 < ka)
      throw ka = 0, gr = null, Error(r(185));
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
  function It(e, t) {
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
  function Nu(e, t, n, l, a, u) {
    var i = 0;
    if (l = e, typeof e == "function") cc(e) && (i = 1);
    else if (typeof e == "string")
      i = w0(
        e,
        n,
        X.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case le:
          return e = Et(31, n, t, a), e.elementType = le, e.lanes = u, e;
        case L:
          return In(n.children, a, u, t);
        case W:
          i = 8, a |= 24;
          break;
        case Z:
          return e = Et(12, n, t, a | 2), e.elementType = Z, e.lanes = u, e;
        case ve:
          return e = Et(13, n, t, a), e.elementType = ve, e.lanes = u, e;
        case $:
          return e = Et(19, n, t, a), e.elementType = $, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                i = 10;
                break e;
              case ee:
                i = 9;
                break e;
              case he:
                i = 11;
                break e;
              case G:
                i = 14;
                break e;
              case ce:
                i = 16, l = null;
                break e;
            }
          i = 29, n = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Et(i, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function In(e, t, n, l) {
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
        stack: ua(t)
      }, go.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ua(t)
    };
  }
  var Rl = [], Ul = 0, Mu = null, za = 0, Ct = [], Rt = 0, Sn = null, Yt = 1, Xt = "";
  function Pt(e, t) {
    Rl[Ul++] = za, Rl[Ul++] = Mu, Mu = e, za = t;
  }
  function vo(e, t, n) {
    Ct[Rt++] = Yt, Ct[Rt++] = Xt, Ct[Rt++] = Sn, Sn = e;
    var l = Yt;
    e = Xt;
    var a = 32 - bt(l) - 1;
    l &= ~(1 << a), n += 1;
    var u = 32 - bt(t) + a;
    if (30 < u) {
      var i = a - a % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, a -= i, Yt = 1 << 32 - bt(t) + a | n << a | l, Xt = u + e;
    } else
      Yt = 1 << u | n << a | l, Xt = e;
  }
  function oc(e) {
    e.return !== null && (Pt(e, 1), vo(e, 1, 0));
  }
  function fc(e) {
    for (; e === Mu; )
      Mu = Rl[--Ul], Rl[Ul] = null, za = Rl[--Ul], Rl[Ul] = null;
    for (; e === Sn; )
      Sn = Ct[--Rt], Ct[Rt] = null, Xt = Ct[--Rt], Ct[Rt] = null, Yt = Ct[--Rt], Ct[Rt] = null;
  }
  function yo(e, t) {
    Ct[Rt++] = Yt, Ct[Rt++] = Xt, Ct[Rt++] = Sn, Yt = t.id, Xt = t.overflow, Sn = e;
  }
  var nt = null, Ue = null, ye = !1, En = null, Ut = !1, dc = Error(r(519));
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
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Qa.length; n++)
          de(Qa[n], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), Ds(
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Rs(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || xd(t.textContent, n) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || zn(e, !0);
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
    if (!ye) return bo(e), ye = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Dr(e.type, e.memoizedProps)), n = !n), n && Ue && zn(e), bo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Qd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = Qd(e);
    } else
      t === 27 ? (t = Ue, xn(e.type) ? (e = Hr, Hr = null, Ue = e) : Ue = t) : Ue = nt ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pn() {
    Ue = nt = null, ye = !1;
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
  var mc = m(null), el = null, en = null;
  function Tn(e, t, n) {
    j(mc, t._currentValue), t._currentValue = n;
  }
  function tn(e) {
    e._currentValue = mc.current, _(mc);
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
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = a;
          for (var d = 0; d < t.length; d++)
            if (s.context === t[d]) {
              u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), gc(
                u.return,
                n,
                e
              ), l || (i = null);
              break e;
            }
          u = s.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(r(341));
        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), gc(i, n, e), i = null;
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (a = i.sibling, a !== null) {
            a.return = i.return, i = a;
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function Hl(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var s = a.type;
          St(a.pendingProps.value, i.value) || (e !== null ? e.push(s) : e = [s]);
        }
      } else if (a === oe.current) {
        if (i = a.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push($a) : e = [$a]);
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
  function Ou(e) {
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
  function Du(e, t) {
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
  }, zg = c.unstable_scheduleCallback, Tg = c.unstable_NormalPriority, Xe = {
    $$typeof: te,
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
  var wa = null, pc = 0, xl = 0, Ll = null;
  function Ag(e, t) {
    if (wa === null) {
      var n = wa = [];
      pc = 0, xl = Er(), Ll = {
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
      wa = null, xl = 0, Ll = null;
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
    id = xe(), typeof t == "object" && t !== null && typeof t.then == "function" && Ag(e, t), zo !== null && zo(e, t);
  };
  var nl = m(null);
  function bc() {
    var e = nl.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Cu(e, t) {
    t === null ? j(nl, nl.current) : j(nl, t.pool);
  }
  function To() {
    var e = bc();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var ql = Error(r(460)), Sc = Error(r(474)), Ru = Error(r(542)), Uu = { then: function() {
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
    if (e === ql || e === Ru)
      throw Error(r(483));
  }
  var jl = null, _a = 0;
  function Bu(e) {
    var t = _a;
    return _a += 1, jl === null && (jl = []), wo(jl, e, t);
  }
  function Na(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Hu(e, t) {
    throw t.$$typeof === D ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Mo(e) {
    function t(p, v) {
      if (e) {
        var z = p.deletions;
        z === null ? (p.deletions = [v], p.flags |= 16) : z.push(v);
      }
    }
    function n(p, v) {
      if (!e) return null;
      for (; v !== null; )
        t(p, v), v = v.sibling;
      return null;
    }
    function l(p) {
      for (var v = /* @__PURE__ */ new Map(); p !== null; )
        p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
      return v;
    }
    function a(p, v) {
      return p = It(p, v), p.index = 0, p.sibling = null, p;
    }
    function u(p, v, z) {
      return p.index = z, e ? (z = p.alternate, z !== null ? (z = z.index, z < v ? (p.flags |= 67108866, v) : z) : (p.flags |= 67108866, v)) : (p.flags |= 1048576, v);
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 67108866), p;
    }
    function s(p, v, z, R) {
      return v === null || v.tag !== 6 ? (v = rc(z, p.mode, R), v.return = p, v) : (v = a(v, z), v.return = p, v);
    }
    function d(p, v, z, R) {
      var K = z.type;
      return K === L ? C(
        p,
        v,
        z.props.children,
        R,
        z.key
      ) : v !== null && (v.elementType === K || typeof K == "object" && K !== null && K.$$typeof === ce && ll(K) === v.type) ? (v = a(v, z.props), Na(v, z), v.return = p, v) : (v = Nu(
        z.type,
        z.key,
        z.props,
        null,
        p.mode,
        R
      ), Na(v, z), v.return = p, v);
    }
    function T(p, v, z, R) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== z.containerInfo || v.stateNode.implementation !== z.implementation ? (v = sc(z, p.mode, R), v.return = p, v) : (v = a(v, z.children || []), v.return = p, v);
    }
    function C(p, v, z, R, K) {
      return v === null || v.tag !== 7 ? (v = In(
        z,
        p.mode,
        R,
        K
      ), v.return = p, v) : (v = a(v, z), v.return = p, v);
    }
    function B(p, v, z) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = rc(
          "" + v,
          p.mode,
          z
        ), v.return = p, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case q:
            return z = Nu(
              v.type,
              v.key,
              v.props,
              null,
              p.mode,
              z
            ), Na(z, v), z.return = p, z;
          case x:
            return v = sc(
              v,
              p.mode,
              z
            ), v.return = p, v;
          case ce:
            return v = ll(v), B(p, v, z);
        }
        if (P(v) || be(v))
          return v = In(
            v,
            p.mode,
            z,
            null
          ), v.return = p, v;
        if (typeof v.then == "function")
          return B(p, Bu(v), z);
        if (v.$$typeof === te)
          return B(
            p,
            Du(p, v),
            z
          );
        Hu(p, v);
      }
      return null;
    }
    function w(p, v, z, R) {
      var K = v !== null ? v.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return K !== null ? null : s(p, v, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            return z.key === K ? d(p, v, z, R) : null;
          case x:
            return z.key === K ? T(p, v, z, R) : null;
          case ce:
            return z = ll(z), w(p, v, z, R);
        }
        if (P(z) || be(z))
          return K !== null ? null : C(p, v, z, R, null);
        if (typeof z.then == "function")
          return w(
            p,
            v,
            Bu(z),
            R
          );
        if (z.$$typeof === te)
          return w(
            p,
            v,
            Du(p, z),
            R
          );
        Hu(p, z);
      }
      return null;
    }
    function O(p, v, z, R, K) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return p = p.get(z) || null, s(v, p, "" + R, K);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case q:
            return p = p.get(
              R.key === null ? z : R.key
            ) || null, d(v, p, R, K);
          case x:
            return p = p.get(
              R.key === null ? z : R.key
            ) || null, T(v, p, R, K);
          case ce:
            return R = ll(R), O(
              p,
              v,
              z,
              R,
              K
            );
        }
        if (P(R) || be(R))
          return p = p.get(z) || null, C(v, p, R, K, null);
        if (typeof R.then == "function")
          return O(
            p,
            v,
            z,
            Bu(R),
            K
          );
        if (R.$$typeof === te)
          return O(
            p,
            v,
            z,
            Du(v, R),
            K
          );
        Hu(v, R);
      }
      return null;
    }
    function k(p, v, z, R) {
      for (var K = null, ze = null, V = v, ie = v = 0, ge = null; V !== null && ie < z.length; ie++) {
        V.index > ie ? (ge = V, V = null) : ge = V.sibling;
        var Te = w(
          p,
          V,
          z[ie],
          R
        );
        if (Te === null) {
          V === null && (V = ge);
          break;
        }
        e && V && Te.alternate === null && t(p, V), v = u(Te, v, ie), ze === null ? K = Te : ze.sibling = Te, ze = Te, V = ge;
      }
      if (ie === z.length)
        return n(p, V), ye && Pt(p, ie), K;
      if (V === null) {
        for (; ie < z.length; ie++)
          V = B(p, z[ie], R), V !== null && (v = u(
            V,
            v,
            ie
          ), ze === null ? K = V : ze.sibling = V, ze = V);
        return ye && Pt(p, ie), K;
      }
      for (V = l(V); ie < z.length; ie++)
        ge = O(
          V,
          p,
          ie,
          z[ie],
          R
        ), ge !== null && (e && ge.alternate !== null && V.delete(
          ge.key === null ? ie : ge.key
        ), v = u(
          ge,
          v,
          ie
        ), ze === null ? K = ge : ze.sibling = ge, ze = ge);
      return e && V.forEach(function(Yn) {
        return t(p, Yn);
      }), ye && Pt(p, ie), K;
    }
    function J(p, v, z, R) {
      if (z == null) throw Error(r(151));
      for (var K = null, ze = null, V = v, ie = v = 0, ge = null, Te = z.next(); V !== null && !Te.done; ie++, Te = z.next()) {
        V.index > ie ? (ge = V, V = null) : ge = V.sibling;
        var Yn = w(p, V, Te.value, R);
        if (Yn === null) {
          V === null && (V = ge);
          break;
        }
        e && V && Yn.alternate === null && t(p, V), v = u(Yn, v, ie), ze === null ? K = Yn : ze.sibling = Yn, ze = Yn, V = ge;
      }
      if (Te.done)
        return n(p, V), ye && Pt(p, ie), K;
      if (V === null) {
        for (; !Te.done; ie++, Te = z.next())
          Te = B(p, Te.value, R), Te !== null && (v = u(Te, v, ie), ze === null ? K = Te : ze.sibling = Te, ze = Te);
        return ye && Pt(p, ie), K;
      }
      for (V = l(V); !Te.done; ie++, Te = z.next())
        Te = O(V, p, ie, Te.value, R), Te !== null && (e && Te.alternate !== null && V.delete(Te.key === null ? ie : Te.key), v = u(Te, v, ie), ze === null ? K = Te : ze.sibling = Te, ze = Te);
      return e && V.forEach(function(x0) {
        return t(p, x0);
      }), ye && Pt(p, ie), K;
    }
    function De(p, v, z, R) {
      if (typeof z == "object" && z !== null && z.type === L && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            e: {
              for (var K = z.key; v !== null; ) {
                if (v.key === K) {
                  if (K = z.type, K === L) {
                    if (v.tag === 7) {
                      n(
                        p,
                        v.sibling
                      ), R = a(
                        v,
                        z.props.children
                      ), R.return = p, p = R;
                      break e;
                    }
                  } else if (v.elementType === K || typeof K == "object" && K !== null && K.$$typeof === ce && ll(K) === v.type) {
                    n(
                      p,
                      v.sibling
                    ), R = a(v, z.props), Na(R, z), R.return = p, p = R;
                    break e;
                  }
                  n(p, v);
                  break;
                } else t(p, v);
                v = v.sibling;
              }
              z.type === L ? (R = In(
                z.props.children,
                p.mode,
                R,
                z.key
              ), R.return = p, p = R) : (R = Nu(
                z.type,
                z.key,
                z.props,
                null,
                p.mode,
                R
              ), Na(R, z), R.return = p, p = R);
            }
            return i(p);
          case x:
            e: {
              for (K = z.key; v !== null; ) {
                if (v.key === K)
                  if (v.tag === 4 && v.stateNode.containerInfo === z.containerInfo && v.stateNode.implementation === z.implementation) {
                    n(
                      p,
                      v.sibling
                    ), R = a(v, z.children || []), R.return = p, p = R;
                    break e;
                  } else {
                    n(p, v);
                    break;
                  }
                else t(p, v);
                v = v.sibling;
              }
              R = sc(z, p.mode, R), R.return = p, p = R;
            }
            return i(p);
          case ce:
            return z = ll(z), De(
              p,
              v,
              z,
              R
            );
        }
        if (P(z))
          return k(
            p,
            v,
            z,
            R
          );
        if (be(z)) {
          if (K = be(z), typeof K != "function") throw Error(r(150));
          return z = K.call(z), J(
            p,
            v,
            z,
            R
          );
        }
        if (typeof z.then == "function")
          return De(
            p,
            v,
            Bu(z),
            R
          );
        if (z.$$typeof === te)
          return De(
            p,
            v,
            Du(p, z),
            R
          );
        Hu(p, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, v !== null && v.tag === 6 ? (n(p, v.sibling), R = a(v, z), R.return = p, p = R) : (n(p, v), R = rc(z, p.mode, R), R.return = p, p = R), i(p)) : n(p, v);
    }
    return function(p, v, z, R) {
      try {
        _a = 0;
        var K = De(
          p,
          v,
          z,
          R
        );
        return jl = null, K;
      } catch (V) {
        if (V === ql || V === Ru) throw V;
        var ze = Et(29, V, null, p.mode);
        return ze.lanes = R, ze.return = p, ze;
      } finally {
      }
    };
  }
  var ul = Mo(!0), Oo = Mo(!1), An = !1;
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
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = _u(e), fo(e, null, n), t;
    }
    return wu(e, l, t, n), _u(e);
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
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = i : u = u.next = i, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
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
    var u = a.firstBaseUpdate, i = a.lastBaseUpdate, s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var d = s, T = d.next;
      d.next = null, i === null ? u = T : i.next = T, i = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, s = C.lastBaseUpdate, s !== i && (s === null ? C.firstBaseUpdate = T : s.next = T, C.lastBaseUpdate = d));
    }
    if (u !== null) {
      var B = a.baseState;
      i = 0, C = T = d = null, s = u;
      do {
        var w = s.lane & -536870913, O = w !== s.lane;
        if (O ? (me & w) === w : (l & w) === w) {
          w !== 0 && w === xl && (Ac = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, J = s;
            w = t;
            var De = n;
            switch (J.tag) {
              case 1:
                if (k = J.payload, typeof k == "function") {
                  B = k.call(De, B, w);
                  break e;
                }
                B = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = J.payload, w = typeof k == "function" ? k.call(De, B, w) : k, w == null) break e;
                B = N({}, B, w);
                break e;
              case 2:
                An = !0;
            }
          }
          w = s.callback, w !== null && (e.flags |= 64, O && (e.flags |= 8192), O = a.callbacks, O === null ? a.callbacks = [w] : O.push(w));
        } else
          O = {
            lane: w,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, C === null ? (T = C = O, d = B) : C = C.next = O, i |= w;
        if (s = s.next, s === null) {
          if (s = a.shared.pending, s === null)
            break;
          O = s, s = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      C === null && (d = B), a.baseState = d, a.firstBaseUpdate = T, a.lastBaseUpdate = C, u === null && (a.shared.lanes = 0), Cn |= i, e.lanes = i, e.memoizedState = B;
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
  var Gl = m(null), xu = m(0);
  function Ro(e, t) {
    e = fn, j(xu, e), j(Gl, t), fn = e | t.baseLanes;
  }
  function wc() {
    j(xu, fn), j(Gl, Gl.current);
  }
  function _c() {
    fn = xu.current, _(Gl), _(xu);
  }
  var zt = m(null), Bt = null;
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
    _(zt), Bt === e && (Bt = null), _(Ge);
  }
  var Ge = m(0);
  function Lu(e) {
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
  var nn = 0, ue = null, Me = null, ke = null, qu = !1, Yl = !1, il = !1, ju = 0, Ca = 0, Xl = null, _g = 0;
  function qe() {
    throw Error(r(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function Oc(e, t, n, l, a, u) {
    return nn = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? yf : Vc, il = !1, u = n(l, a), il = !1, Yl && (u = Ho(
      t,
      n,
      l,
      a
    )), Bo(e), u;
  }
  function Bo(e) {
    M.H = Ba;
    var t = Me !== null && Me.next !== null;
    if (nn = 0, ke = Me = ue = null, qu = !1, Ca = 0, Xl = null, t) throw Error(r(300));
    e === null || Ve || (e = e.dependencies, e !== null && Ou(e) && (Ve = !0));
  }
  function Ho(e, t, n, l) {
    ue = e;
    var a = 0;
    do {
      if (Yl && (Xl = null), Ca = 0, Yl = !1, 25 <= a) throw Error(r(301));
      if (a += 1, ke = Me = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      M.H = pf, u = t(n, l);
    } while (Yl);
    return u;
  }
  function Ng() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ra(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Dc() {
    var e = ju !== 0;
    return ju = 0, e;
  }
  function Cc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Rc(e) {
    if (qu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qu = !1;
    }
    nn = 0, ke = Me = ue = null, Yl = !1, Ca = ju = 0, Xl = null;
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ke === null ? ue.memoizedState = ke = e : ke = ke.next = e, ke;
  }
  function Ye() {
    if (Me === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = ke === null ? ue.memoizedState : ke.next;
    if (t !== null)
      ke = t, Me = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(r(467)) : Error(r(310));
      Me = e, e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null
      }, ke === null ? ue.memoizedState = ke = e : ke = ke.next = e;
    }
    return ke;
  }
  function Gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ra(e) {
    var t = Ca;
    return Ca += 1, Xl === null && (Xl = []), e = wo(Xl, e, t), t = ue, (ke === null ? t.memoizedState : ke.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? yf : Vc), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ra(e);
      if (e.$$typeof === te) return lt(e);
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gu(), ue.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Ke;
    return t.index++, n;
  }
  function ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = Ye();
    return Bc(t, Me, e);
  }
  function Bc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = u.next, u.next = i;
      }
      t.baseQueue = a = u, l.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var s = i = null, d = null, T = t, C = !1;
      do {
        var B = T.lane & -536870913;
        if (B !== T.lane ? (me & B) === B : (nn & B) === B) {
          var w = T.revertLane;
          if (w === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), B === xl && (C = !0);
          else if ((nn & w) === w) {
            T = T.next, w === xl && (C = !0);
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
            }, d === null ? (s = d = B, i = u) : d = d.next = B, ue.lanes |= w, Cn |= w;
          B = T.action, il && n(u, B), u = T.hasEagerState ? T.eagerState : n(u, B);
        } else
          w = {
            lane: B,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, d === null ? (s = d = w, i = u) : d = d.next = w, ue.lanes |= B, Cn |= B;
        T = T.next;
      } while (T !== null && T !== t);
      if (d === null ? i = u : d.next = s, !St(u, e.memoizedState) && (Ve = !0, C && (n = Ll, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = i, e.baseQueue = d, l.lastRenderedState = u;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Hc(e) {
    var t = Ye(), n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var i = a = a.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== a);
      St(u, t.memoizedState) || (Ve = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function xo(e, t, n) {
    var l = ue, a = Ye(), u = ye;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var i = !St(
      (Me || a).memoizedState,
      n
    );
    if (i && (a.memoizedState = n, Ve = !0), a = a.queue, qc(jo.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || i || ke !== null && ke.memoizedState.tag & 1) {
      if (l.flags |= 2048, kl(
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
      u || (nn & 127) !== 0 || Lo(l, t, n);
    }
    return n;
  }
  function Lo(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = Gu(), ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
  function xc(e) {
    var t = rt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), il) {
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
  function Xo(e, t, n, l) {
    return e.baseState = n, Bc(
      e,
      Me,
      typeof l == "function" ? l : ln
    );
  }
  function Mg(e, t, n, l, a) {
    if (Qu(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      M.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, ko(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function ko(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var u = M.T, i = {};
      M.T = i;
      try {
        var s = n(a, l), d = M.S;
        d !== null && d(i, s), Vo(e, t, s);
      } catch (T) {
        Lc(e, t, T);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), M.T = u;
      }
    } else
      try {
        u = n(a, l), Vo(e, t, u);
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
    t.status = "fulfilled", t.value = n, Zo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ko(e, n)));
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
    if (ye) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var l = ue;
          if (ye) {
            if (Ue) {
              t: {
                for (var a = Ue, u = Ut; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = Ht(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Ue = Ht(
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
    ), l.dispatch = n, l = xc(!1), u = kc.bind(
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
      u,
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
    )[0], e = Xu(ln)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Ra(t);
      } catch (i) {
        throw i === ql ? Ru : i;
      }
    else l = t;
    t = Ye();
    var a = t.queue, u = a.dispatch;
    return n !== t.memoizedState && (ue.flags |= 2048, kl(
      9,
      { destroy: void 0 },
      Og.bind(null, a, n),
      null
    )), [l, u, e];
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
  function kl(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Gu(), ue.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Io() {
    return Ye().memoizedState;
  }
  function ku(e, t, n, l) {
    var a = rt();
    ue.flags |= e, a.memoizedState = kl(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Vu(e, t, n, l) {
    var a = Ye();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Me !== null && l !== null && Mc(l, Me.memoizedState.deps) ? a.memoizedState = kl(t, u, n, l) : (ue.flags |= e, a.memoizedState = kl(
      1 | t,
      u,
      n,
      l
    ));
  }
  function Po(e, t) {
    ku(8390656, 8, e, t);
  }
  function qc(e, t) {
    Vu(2048, 8, e, t);
  }
  function Dg(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Gu(), ue.updateQueue = t, t.events = [e];
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
    return Vu(4, 2, e, t);
  }
  function nf(e, t) {
    return Vu(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, Vu(4, 4, lf.bind(null, t, e), n);
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
    if (l = e(), il) {
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
    return n === void 0 || (nn & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = rd(), ue.lanes |= e, Cn |= e, n);
  }
  function rf(e, t, n, l) {
    return St(n, t) ? n : Gl.current !== null ? (e = Gc(e, n, l), St(e, t) || (Ve = !0), e) : (nn & 42) === 0 || (nn & 1073741824) !== 0 && (me & 261930) === 0 ? (Ve = !0, e.memoizedState = n) : (e = rd(), ue.lanes |= e, Cn |= e, t);
  }
  function sf(e, t, n, l, a) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = M.T, s = {};
    M.T = s, kc(e, !1, t, n);
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
      H.p = u, i !== null && s.types !== null && (i.types = s.types), M.T = i;
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
  function Xc() {
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
    }, Qu(e) ? gf(t, n) : (n = ic(e, t, n, l), n !== null && (vt(n, e, l), vf(n, t, l)));
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
    if (Qu(e)) gf(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, s = u(i, n);
          if (a.hasEagerState = !0, a.eagerState = s, St(s, i))
            return wu(e, t, a, 0), Ce === null && Au(), !1;
        } catch {
        } finally {
        }
      if (n = ic(e, t, a, l), n !== null)
        return vt(n, e, l), vf(n, t, l), !0;
    }
    return !1;
  }
  function kc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Er(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e)) {
      if (t) throw Error(r(479));
    } else
      t = ic(
        e,
        n,
        l,
        2
      ), t !== null && vt(t, e, 2);
  }
  function Qu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function gf(e, t) {
    Yl = qu = !0;
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
    use: Yu,
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
    use: Yu,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: lt,
    useEffect: Po,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ku(
        4194308,
        4,
        lf.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ku(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ku(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = rt();
      t = t === void 0 ? null : t;
      var l = e();
      if (il) {
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
        if (il) {
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
      e = xc(e);
      var t = e.queue, n = mf.bind(null, ue, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var n = rt();
      return Gc(n, e, t);
    },
    useTransition: function() {
      var e = xc(!1);
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
      if (ye) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = t(), Ce === null)
          throw Error(r(349));
        (me & 127) !== 0 || Lo(l, t, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return a.queue = u, Po(jo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, kl(
        9,
        { destroy: void 0 },
        qo.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = rt(), t = Ce.identifierPrefix;
      if (ye) {
        var n = Xt, l = Yt;
        n = (l & ~(1 << 32 - bt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ju++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = _g++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xc,
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
      return t.queue = n, t = kc.bind(
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
    use: Yu,
    useCallback: uf,
    useContext: lt,
    useEffect: qc,
    useImperativeHandle: af,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: cf,
    useReducer: Xu,
    useRef: Io,
    useState: function() {
      return Xu(ln);
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
      var e = Xu(ln)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        t
      ];
    },
    useSyncExternalStore: xo,
    useId: df,
    useHostTransitionStatus: Xc,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: function(e, t) {
      var n = Ye();
      return Xo(n, Me, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: hf
  };
  Vc.useEffectEvent = ef;
  var pf = {
    readContext: lt,
    use: Yu,
    useCallback: uf,
    useContext: lt,
    useEffect: qc,
    useImperativeHandle: af,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: cf,
    useReducer: Hc,
    useRef: Io,
    useState: function() {
      return Hc(ln);
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
      var e = Hc(ln)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ra(e),
        t
      ];
    },
    useSyncExternalStore: xo,
    useId: df,
    useHostTransitionStatus: Xc,
    useFormState: Fo,
    useActionState: Fo,
    useOptimistic: function(e, t) {
      var n = Ye();
      return Me !== null ? Xo(n, Me, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: hf
  };
  pf.useEffectEvent = ef;
  function Qc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
  function bf(e, t, n, l, a, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Sa(n, l) || !Sa(a, u) : !0;
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
      n === t && (n = N({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Ef(e) {
    Tu(e);
  }
  function zf(e) {
    console.error(e);
  }
  function Tf(e) {
    Tu(e);
  }
  function Zu(e, t) {
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
      Zu(e, t);
    }, n;
  }
  function wf(e) {
    return e = wn(e), e.tag = 3, e;
  }
  function _f(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = l.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Af(t, n, l);
      };
    }
    var i = n.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      Af(t, n, l), typeof a != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var s = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function Bg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Hl(
        t,
        n,
        a,
        !0
      ), n = zt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Bt === null ? ai() : n.alternate === null && je === 0 && (je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Uu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), pr(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Uu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), pr(e, l, a)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return pr(e, l, a), ai(), !1;
    }
    if (ye)
      return t = zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== dc && (e = Error(r(422), { cause: l }), Ta(Dt(e, n)))) : (l !== dc && (t = Error(r(423), {
        cause: l
      }), Ta(
        Dt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = Dt(l, n), a = Kc(
        e.stateNode,
        l,
        a
      ), Tc(e, a), je !== 4 && (je = 2)), !1;
    var u = Error(r(520), { cause: l });
    if (u = Dt(u, n), Xa === null ? Xa = [u] : Xa.push(u), je !== 4 && (je = 2), t === null) return !0;
    l = Dt(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Kc(n.stateNode, l, e), Tc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rn === null || !Rn.has(u))))
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
    t.child = e === null ? Oo(t, null, n, l) : ul(
      t,
      e.child,
      n,
      l
    );
  }
  function Nf(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var i = {};
      for (var s in l)
        s !== "ref" && (i[s] = l[s]);
    } else i = l;
    return tl(t), l = Oc(
      e,
      t,
      n,
      i,
      u,
      a
    ), s = Dc(), e !== null && !Ve ? (Cc(e, t, a), an(e, t, a)) : (ye && s && oc(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function Mf(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !cc(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Of(
        e,
        t,
        u,
        l,
        a
      )) : (e = Nu(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !nr(e, a)) {
      var i = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Sa, n(i, l) && e.ref === t.ref)
        return an(e, t, a);
    }
    return t.flags |= 1, e = It(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Of(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Sa(u, l) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = l = u, nr(e, a))
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
    var a = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~u;
        } else l = 0, t.child = null;
        return Cf(
          e,
          t,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Cu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Ro(t, u) : wc(), Uo(t);
      else
        return l = t.lanes = 536870912, Cf(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (Cu(t, u.cachePool), Ro(t, u), Mn(), t.memoizedState = null) : (e !== null && Cu(t, null), wc(), Mn());
    return at(e, t, a, n), t.child;
  }
  function Ha(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cf(e, t, n, l, a) {
    var u = bc();
    return u = u === null ? null : { parent: Xe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && Cu(t, null), wc(), Uo(t), e !== null && Hl(e, t, l, !0), t.childLanes = a, null;
  }
  function Ku(e, t) {
    return t = Wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rf(e, t, n) {
    return ul(t, e.child, null, n), e = Ku(t, t.pendingProps), e.flags |= 2, Tt(t), t.memoizedState = null, e;
  }
  function Hg(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (l.mode === "hidden")
          return e = Ku(t, l), t.lanes = 536870912, Ha(null, e);
        if (Nc(t), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sn !== null ? { id: Yt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mo(e), n.return = t, t.child = n, nt = t, Ue = null)) : e = null, e === null) throw zn(t);
        return t.lanes = 536870912, null;
      }
      return Ku(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
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
      else if (Ve || Hl(e, t, n, !1), a = (n & e.childLanes) !== 0, Ve || a) {
        if (l = Ce, l !== null && (i = Ss(l, n), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Fn(e, i), vt(l, e, i), Jc;
        ai(), t = Rf(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Ue = Ht(i.nextSibling), nt = t, ye = !0, En = null, Ut = !1, e !== null && yo(t, e), t = Ku(t, l), t.flags |= 4096;
      return t;
    }
    return e = It(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ju(e, t) {
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
    ), l = Dc(), e !== null && !Ve ? (Cc(e, t, a), an(e, t, a)) : (ye && l && oc(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function Uf(e, t, n, l, a, u) {
    return tl(t), t.updateQueue = null, n = Ho(
      t,
      l,
      n,
      a
    ), Bo(e), l = Dc(), e !== null && !Ve ? (Cc(e, t, u), an(e, t, u)) : (ye && l && oc(t), t.flags |= 1, at(e, t, n, u), t.child);
  }
  function Bf(e, t, n, l, a) {
    if (tl(t), t.stateNode === null) {
      var u = Cl, i = n.contextType;
      typeof i == "object" && i !== null && (u = lt(i)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Zc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Ec(t), i = n.contextType, u.context = typeof i == "object" && i !== null ? lt(i) : Cl, u.state = t.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (Qc(
        t,
        n,
        i,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Zc.enqueueReplaceState(u, u.state, null), Da(t, l, u, a), Oa(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps, d = cl(n, s);
      u.props = d;
      var T = u.context, C = n.contextType;
      i = Cl, typeof C == "object" && C !== null && (i = lt(C));
      var B = n.getDerivedStateFromProps;
      C = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || T !== i) && Sf(
        t,
        u,
        l,
        i
      ), An = !1;
      var w = t.memoizedState;
      u.state = w, Da(t, l, u, a), Oa(), T = t.memoizedState, s || w !== T || An ? (typeof B == "function" && (Qc(
        t,
        n,
        B,
        l
      ), T = t.memoizedState), (d = An || bf(
        t,
        n,
        d,
        l,
        w,
        T,
        i
      )) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), u.props = l, u.state = T, u.context = i, l = d) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, zc(e, t), i = t.memoizedProps, C = cl(n, i), u.props = C, B = t.pendingProps, w = u.context, T = n.contextType, d = Cl, typeof T == "object" && T !== null && (d = lt(T)), s = n.getDerivedStateFromProps, (T = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== B || w !== d) && Sf(
        t,
        u,
        l,
        d
      ), An = !1, w = t.memoizedState, u.state = w, Da(t, l, u, a), Oa();
      var O = t.memoizedState;
      i !== B || w !== O || An || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof s == "function" && (Qc(
        t,
        n,
        s,
        l
      ), O = t.memoizedState), (C = An || bf(
        t,
        n,
        C,
        l,
        w,
        O,
        d
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, O, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        O,
        d
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), u.props = l, u.state = O, u.context = d, l = C) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, Ju(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = ul(
      t,
      e.child,
      null,
      a
    ), t.child = ul(
      t,
      null,
      n,
      a
    )) : at(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = an(
      e,
      t,
      a
    ), e;
  }
  function Hf(e, t, n, l) {
    return Pn(), t.flags |= 256, at(e, t, n, l), t.child;
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
  function Ic(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= wt), e;
  }
  function xf(e, t, n) {
    var l = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), i && (a = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (a ? Nn(t) : Mn(), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sn !== null ? { id: Yt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mo(e), n.return = t, t.child = n, nt = t, Ue = null)) : e = null, e === null) throw zn(t);
        return Br(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var s = l.children;
      return l = l.fallback, a ? (Mn(), a = t.mode, s = Wu(
        { mode: "hidden", children: s },
        a
      ), l = In(
        l,
        a,
        n,
        null
      ), s.return = t, l.return = t, s.sibling = l, t.child = s, l = t.child, l.memoizedState = Fc(n), l.childLanes = Ic(
        e,
        i,
        n
      ), t.memoizedState = $c, Ha(null, l)) : (Nn(t), Pc(t, s));
    }
    var d = e.memoizedState;
    if (d !== null && (s = d.dehydrated, s !== null)) {
      if (u)
        t.flags & 256 ? (Nn(t), t.flags &= -257, t = er(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Mn(), t.child = e.child, t.flags |= 128, t = null) : (Mn(), s = l.fallback, a = t.mode, l = Wu(
          { mode: "visible", children: l.children },
          a
        ), s = In(
          s,
          a,
          n,
          null
        ), s.flags |= 2, l.return = t, s.return = t, l.sibling = s, t.child = l, ul(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Fc(n), l.childLanes = Ic(
          e,
          i,
          n
        ), t.memoizedState = $c, t = Ha(null, l));
      else if (Nn(t), Br(s)) {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var T = i.dgst;
        i = T, l = Error(r(419)), l.stack = "", l.digest = i, Ta({ value: l, source: null, stack: null }), t = er(
          e,
          t,
          n
        );
      } else if (Ve || Hl(e, t, n, !1), i = (n & e.childLanes) !== 0, Ve || i) {
        if (i = Ce, i !== null && (l = Ss(i, n), l !== 0 && l !== d.retryLane))
          throw d.retryLane = l, Fn(e, l), vt(i, e, l), Jc;
        Ur(s) || ai(), t = er(
          e,
          t,
          n
        );
      } else
        Ur(s) ? (t.flags |= 192, t.child = e.child, t = null) : (e = d.treeContext, Ue = Ht(
          s.nextSibling
        ), nt = t, ye = !0, En = null, Ut = !1, e !== null && yo(t, e), t = Pc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Mn(), s = l.fallback, a = t.mode, d = e.child, T = d.sibling, l = It(d, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = d.subtreeFlags & 65011712, T !== null ? s = It(
      T,
      s
    ) : (s = In(
      s,
      a,
      n,
      null
    ), s.flags |= 2), s.return = t, l.return = t, l.sibling = s, t.child = l, Ha(null, l), l = t.child, s = e.child.memoizedState, s === null ? s = Fc(n) : (a = s.cachePool, a !== null ? (d = Xe._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = To(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: a
    }), l.memoizedState = s, l.childLanes = Ic(
      e,
      i,
      n
    ), t.memoizedState = $c, Ha(e.child, l)) : (Nn(t), n = e.child, e = n.sibling, n = It(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Pc(e, t) {
    return t = Wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wu(e, t) {
    return e = Et(22, e, null, t), e.lanes = 0, e;
  }
  function er(e, t, n) {
    return ul(t, e.child, null, n), e = Pc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lf(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), gc(e.return, t, n);
  }
  function tr(e, t, n, l, a, u) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = l, i.tail = n, i.tailMode = a, i.treeForkCount = u);
  }
  function qf(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, u = l.tail;
    l = l.children;
    var i = Ge.current, s = (i & 2) !== 0;
    if (s ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, j(Ge, i), at(e, t, l, n), l = ye ? za : 0, !s && e !== null && (e.flags & 128) !== 0)
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
          e = n.alternate, e !== null && Lu(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), tr(
          t,
          !1,
          a,
          n,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Lu(e) === null) {
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
          u,
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
        if (Hl(
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
      for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function xg(e, t, n) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo), Tn(t, Xe, e.memoizedState.cache), Pn();
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
          return l.dehydrated !== null ? (Nn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xf(e, t, n) : (Nn(t), e = an(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Hl(
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
        Tn(t, Xe, e.memoizedState.cache);
    }
    return an(e, t, n);
  }
  function jf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ve = !0;
      else {
        if (!nr(e, n) && (t.flags & 128) === 0)
          return Ve = !1, xg(
            e,
            t,
            n
          );
        Ve = (e.flags & 131072) !== 0;
      }
    else
      Ve = !1, ye && (t.flags & 1048576) !== 0 && vo(t, za, t.index);
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
              if (a === he) {
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
          var u = t.memoizedState;
          a = u.element, zc(e, t), Da(t, l, null, n);
          var i = t.memoizedState;
          if (l = i.cache, Tn(t, Xe, l), l !== u.cache && vc(
            t,
            [Xe],
            n,
            !0
          ), Oa(), l = i.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Hf(
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
              ), Ta(a), t = Hf(
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
              for (Ue = Ht(e.firstChild), nt = t, ye = !0, En = null, Ut = !0, n = Oo(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Pn(), l === a) {
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
        return Ju(e, t), e === null ? (n = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ye || (n = t.type, e = t.pendingProps, l = fi(
          ae.current
        ).createElement(n), l[tt] = t, l[ot] = e, ut(l, n, e), $e(l), t.stateNode = l) : t.memoizedState = $d(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qt(t), e === null && ye && (l = t.stateNode = Kd(
          t.type,
          t.pendingProps,
          ae.current
        ), nt = t, Ut = !0, a = Ue, xn(t.type) ? (Hr = a, Ue = Ht(l.firstChild)) : Ue = a), at(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ju(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((a = l = Ue) && (l = d0(
          l,
          t.type,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, nt = t, Ue = Ht(l.firstChild), Ut = !1, a = !0) : a = !1), a || zn(t)), Qt(t), a = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = u.children, Dr(a, u) ? l = null : i !== null && Dr(a, i) && (t.flags |= 32), t.memoizedState !== null && (a = Oc(
          e,
          t,
          Ng,
          null,
          null,
          n
        ), $a._currentValue = a), Ju(e, t), at(e, t, l, n), t.child;
      case 6:
        return e === null && ye && ((e = n = Ue) && (n = h0(
          n,
          t.pendingProps,
          Ut
        ), n !== null ? (t.stateNode = n, nt = t, Ue = null, e = !0) : e = !1), e || zn(t)), null;
      case 13:
        return xf(e, t, n);
      case 4:
        return Je(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ul(
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
        return Hg(e, t, n);
      case 22:
        return Df(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return tl(t), l = lt(Xe), e === null ? (a = bc(), a === null && (a = Ce, u = yc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = { parent: l, cache: a }, Ec(t), Tn(t, Xe, a)) : ((e.lanes & n) !== 0 && (zc(e, t), Da(t, null, null, n), Oa()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Tn(t, Xe, l)) : (l = u.cache, Tn(t, Xe, l), l !== a.cache && vc(
          t,
          [Xe],
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
          throw al = Uu, Sc;
    } else e.flags &= -16777217;
  }
  function Gf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !th(t))
      if (dd()) e.flags |= 8192;
      else
        throw al = Uu, Sc;
  }
  function $u(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ys() : 536870912, e.lanes |= t, Kl |= t);
  }
  function xa(e, t) {
    if (!ye)
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tn(Xe), He(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Bl(t) ? un(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), Be(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (un(t), u !== null ? (Be(t), Gf(t, u)) : (Be(t), lr(
          t,
          a,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (un(t), Be(t), Gf(t, u)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && un(t), Be(t), lr(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (ml(t), n = ae.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && un(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(r(166));
            return Be(t), null;
          }
          e = X.current, Bl(t) ? po(t) : (e = Kd(a, l, n), t.stateNode = e, un(t));
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
          if (u = X.current, Bl(t))
            po(t);
          else {
            var i = fi(
              ae.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? i.createElement("select", {
                      is: l.is
                    }) : i.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? i.createElement(a, { is: l.is }) : i.createElement(a);
                }
            }
            u[tt] = t, u[ot] = l;
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break e;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = u;
            e: switch (ut(u, a, l), a) {
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
          if (e = ae.current, Bl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = nt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || xd(e.nodeValue, n)), e || zn(t, !0);
          } else
            e = fi(e).createTextNode(
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
              Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
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
              Pn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), a = !1;
          } else
            a = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), $u(t, t.updateQueue), Be(t), null);
      case 4:
        return He(), e === null && wr(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return tn(t.type), Be(t), null;
      case 19:
        if (_(Ge), l = t.memoizedState, l === null) return Be(t), null;
        if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (a) xa(l, !1);
          else {
            if (je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Lu(e), u !== null) {
                  for (t.flags |= 128, xa(l, !1), e = u.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    ho(n, e), n = n.sibling;
                  return j(
                    Ge,
                    Ge.current & 1 | 2
                  ), ye && Pt(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && xe() > ti && (t.flags |= 128, a = !0, xa(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Lu(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), xa(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !ye)
                return Be(t), null;
            } else
              2 * xe() - l.renderingStartTime > ti && n !== 536870912 && (t.flags |= 128, a = !0, xa(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = xe(), e.sibling = null, n = Ge.current, j(
          Ge,
          a ? n & 1 | 2 : n & 1
        ), ye && Pt(t, l.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return Tt(t), _c(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), n = t.updateQueue, n !== null && $u(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && _(nl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), tn(Xe), Be(t), null;
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
        return tn(Xe), He(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ml(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(r(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _(Ge), null;
      case 4:
        return He(), null;
      case 10:
        return tn(t.type), null;
      case 22:
      case 23:
        return Tt(t), _c(), e !== null && _(nl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yf(e, t) {
    switch (fc(t), t.tag) {
      case 3:
        tn(Xe), He();
        break;
      case 26:
      case 27:
      case 5:
        ml(t);
        break;
      case 4:
        He();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        _(Ge);
        break;
      case 10:
        tn(t.type);
        break;
      case 22:
      case 23:
        Tt(t), _c(), e !== null && _(nl);
        break;
      case 24:
        tn(Xe);
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
            var u = n.create, i = n.inst;
            l = u(), i.destroy = l;
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
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var i = l.inst, s = i.destroy;
            if (s !== void 0) {
              i.destroy = void 0, a = t;
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
        } while (l !== u);
      }
    } catch (C) {
      Ne(t, t.return, C);
    }
  }
  function Xf(e) {
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
  function kf(e, t, n) {
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
  function kt(e, t) {
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
      i0(l, e.type, n, t), l[ot] = t;
    } catch (a) {
      Ne(e, e.return, a);
    }
  }
  function Qf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xn(e.type) || e.tag === 4;
  }
  function ur(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && xn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ir(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $t));
    else if (l !== 4 && (l === 27 && xn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (ir(e, t, n), e = e.sibling; e !== null; )
        ir(e, t, n), e = e.sibling;
  }
  function Fu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && xn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Fu(e, t, n), e = e.sibling; e !== null; )
        Fu(e, t, n), e = e.sibling;
  }
  function Zf(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, l, n), t[tt] = e, t[ot] = n;
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var cn = !1, Qe = !1, cr = !1, Kf = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function jg(e, t) {
    if (e = e.containerInfo, Mr = pi, e = lo(e), ec(e)) {
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
            var a = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var i = 0, s = -1, d = -1, T = 0, C = 0, B = e, w = null;
            t: for (; ; ) {
              for (var O; B !== n || a !== 0 && B.nodeType !== 3 || (s = i + a), B !== u || l !== 0 && B.nodeType !== 3 || (d = i + l), B.nodeType === 3 && (i += B.nodeValue.length), (O = B.firstChild) !== null; )
                w = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (w === n && ++T === a && (s = i), w === u && ++C === l && (d = i), (O = B.nextSibling) !== null) break;
                B = w, w = B.parentNode;
              }
              B = O;
            }
            n = s === -1 || d === -1 ? null : { start: s, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Or = { focusedElem: e, selectionRange: n }, pi = !1, Fe = t; Fe !== null; )
      if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Fe = e;
      else
        for (; Fe !== null; ) {
          switch (t = Fe, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  a = e[n], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, a = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                try {
                  var k = cl(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    k,
                    u
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
            } catch (i) {
              Ne(n, n.return, i);
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
            } catch (i) {
              Ne(
                n,
                n.return,
                i
              );
            }
          }
        l & 64 && Xf(n), l & 512 && qa(n, n.return);
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
          } catch (i) {
            Ne(n, n.return, i);
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
        sn(e, n), l & 4 && If(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Jg.bind(
          null,
          n
        ), m0(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || cn, !l) {
          t = t !== null && t.memoizedState !== null || Qe, a = cn;
          var u = Qe;
          cn = l, (Qe = t) && !u ? on(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : sn(e, n), cn = a, Qe = u;
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
    t !== null && (e.alternate = null, Wf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Li(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
        Qe || kt(n, t), rn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || kt(n, t);
        var l = Le, a = dt;
        xn(n.type) && (Le = n.stateNode, dt = !1), rn(
          e,
          t,
          n
        ), Ka(n.stateNode), Le = l, dt = a;
        break;
      case 5:
        Qe || kt(n, t);
      case 6:
        if (l = Le, a = dt, Le = null, rn(
          e,
          t,
          n
        ), Le = l, dt = a, Le !== null)
          if (dt)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(n.stateNode);
            } catch (u) {
              Ne(
                n,
                t,
                u
              );
            }
          else
            try {
              Le.removeChild(n.stateNode);
            } catch (u) {
              Ne(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Le !== null && (dt ? (e = Le, Xd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ta(e)) : Xd(Le, n.stateNode));
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
        Qe || (kt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && kf(
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
  function If(e, t) {
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
  function Iu(e, t) {
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
        var a = n[l], u = e, i = t, s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (xn(s.type)) {
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
        $f(u, i, a), Le = null, dt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Pf(t, e), t = t.sibling;
  }
  var qt = null;
  function Pf(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), mt(e), l & 4 && (On(3, e, e.return), La(3, e), On(5, e, e.return));
        break;
      case 1:
        ht(t, e), mt(e), l & 512 && (Qe || n === null || kt(n, n.return)), l & 64 && cn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = qt;
        if (ht(t, e), mt(e), l & 512 && (Qe || n === null || kt(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[fa] || u[tt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ut(u, l, n), u[tt] = e, $e(u), l = u;
                      break e;
                    case "link":
                      var i = Pd(
                        "link",
                        "href",
                        a
                      ).get(l + (n.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), ut(u, l, n), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Pd(
                        "meta",
                        "content",
                        a
                      ).get(l + (n.content || ""))) {
                        for (s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      u = a.createElement(l), ut(u, l, n), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  u[tt] = e, $e(u), l = u;
                }
                e.stateNode = l;
              } else
                eh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Id(
                a,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? eh(
              a,
              e.type,
              e.stateNode
            ) : Id(
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
        ht(t, e), mt(e), l & 512 && (Qe || n === null || kt(n, n.return)), n !== null && l & 4 && ar(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), mt(e), l & 512 && (Qe || n === null || kt(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Al(a, "");
          } catch (k) {
            Ne(e, e.return, k);
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
          } catch (k) {
            Ne(e, e.return, k);
          }
        }
        break;
      case 3:
        if (mi = null, a = qt, qt = di(t.containerInfo), ht(t, e), qt = a, mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ta(t.containerInfo);
          } catch (k) {
            Ne(e, e.return, k);
          }
        cr && (cr = !1, ed(e));
        break;
      case 4:
        l = qt, qt = di(
          e.stateNode.containerInfo
        ), ht(t, e), mt(e), qt = l;
        break;
      case 12:
        ht(t, e), mt(e);
        break;
      case 31:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Iu(e, l)));
        break;
      case 13:
        ht(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ei = xe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Iu(e, l)));
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
                  if (u = d.stateNode, a)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = d.stateNode;
                    var B = d.memoizedProps.style, w = B != null && B.hasOwnProperty("display") ? B.display : null;
                    s.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (k) {
                  Ne(d, d.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (k) {
                  Ne(d, d.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                d = t;
                try {
                  var O = d.stateNode;
                  a ? kd(O, !0) : kd(d.stateNode, !1);
                } catch (k) {
                  Ne(d, d.return, k);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Iu(e, n))));
        break;
      case 19:
        ht(t, e), mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Iu(e, l)));
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
            var a = n.stateNode, u = ur(e);
            Fu(e, u, a);
            break;
          case 5:
            var i = n.stateNode;
            n.flags & 32 && (Al(i, ""), n.flags &= -33);
            var s = ur(e);
            Fu(e, s, i);
            break;
          case 3:
          case 4:
            var d = n.stateNode.containerInfo, T = ur(e);
            ir(
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
          kt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && kf(
            t,
            t.return,
            n
          ), rl(t);
          break;
        case 27:
          Ka(t.stateNode);
        case 26:
        case 5:
          kt(t, t.return), rl(t);
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
      var l = t.alternate, a = e, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          on(
            a,
            u,
            n
          ), La(4, u);
          break;
        case 1:
          if (on(
            a,
            u,
            n
          ), l = u, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (T) {
              Ne(l, l.return, T);
            }
          if (l = u, a = l.updateQueue, a !== null) {
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
          n && i & 64 && Xf(u), qa(u, u.return);
          break;
        case 27:
          Zf(u);
        case 26:
        case 5:
          on(
            a,
            u,
            n
          ), n && l === null && i & 4 && Vf(u), qa(u, u.return);
          break;
        case 12:
          on(
            a,
            u,
            n
          );
          break;
        case 31:
          on(
            a,
            u,
            n
          ), n && i & 4 && Ff(a, u);
          break;
        case 13:
          on(
            a,
            u,
            n
          ), n && i & 4 && If(a, u);
          break;
        case 22:
          u.memoizedState === null && on(
            a,
            u,
            n
          ), qa(u, u.return);
          break;
        case 30:
          break;
        default:
          on(
            a,
            u,
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
            var u = t.memoizedProps, i = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              i,
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
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? jt(
          e,
          t,
          n,
          l
        ) : ja(e, t) : u._visibility & 2 ? jt(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, Vl(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && rr(i, t);
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
      var u = e, i = t, s = n, d = l, T = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Vl(
            u,
            i,
            s,
            d,
            a
          ), La(8, i);
          break;
        case 23:
          break;
        case 22:
          var C = i.stateNode;
          i.memoizedState !== null ? C._visibility & 2 ? Vl(
            u,
            i,
            s,
            d,
            a
          ) : ja(
            u,
            i
          ) : (C._visibility |= 2, Vl(
            u,
            i,
            s,
            d,
            a
          )), a && T & 2048 && rr(
            i.alternate,
            i
          );
          break;
        case 24:
          Vl(
            u,
            i,
            s,
            d,
            a
          ), a && T & 2048 && sr(i.alternate, i);
          break;
        default:
          Vl(
            u,
            i,
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
        qt = di(e.stateNode.containerInfo), Ql(
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
          Fe = l, ud(
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Pu(e)) : Ya(e);
        break;
      default:
        Ya(e);
    }
  }
  function Pu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          Fe = l, ud(
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
          On(8, t, t.return), Pu(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Pu(t));
          break;
        default:
          Pu(t);
      }
      e = e.sibling;
    }
  }
  function ud(e, t) {
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
          var a = l.sibling, u = l.return;
          if (Wf(l), l === n) {
            Fe = null;
            break e;
          }
          if (a !== null) {
            a.return = u, Fe = a;
            break e;
          }
          Fe = u;
        }
    }
  }
  var Yg = {
    getCacheForType: function(e) {
      var t = lt(Xe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return lt(Xe).controller.signal;
    }
  }, Xg = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Ce = null, fe = null, me = 0, _e = 0, At = null, Dn = !1, Zl = !1, or = !1, fn = 0, je = 0, Cn = 0, sl = 0, fr = 0, wt = 0, Kl = 0, Xa = null, gt = null, dr = !1, ei = 0, id = 0, ti = 1 / 0, ni = null, Rn = null, We = 0, Un = null, Jl = null, dn = 0, hr = 0, mr = null, cd = null, ka = 0, gr = null;
  function _t() {
    return (Ae & 2) !== 0 && me !== 0 ? me & -me : M.T !== null ? Er() : Es();
  }
  function rd() {
    if (wt === 0)
      if ((me & 536870912) === 0 || ye) {
        var e = ou;
        ou <<= 1, (ou & 3932160) === 0 && (ou = 262144), wt = e;
      } else wt = 536870912;
    return e = zt.current, e !== null && (e.flags |= 32), wt;
  }
  function vt(e, t, n) {
    (e === Ce && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (Wl(e, 0), Bn(
      e,
      me,
      wt,
      !1
    )), oa(e, n), ((Ae & 2) === 0 || e !== Ce) && (e === Ce && ((Ae & 2) === 0 && (sl |= n), je === 4 && Bn(
      e,
      me,
      wt,
      !1
    )), Vt(e));
  }
  function sd(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(r(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || sa(e, t), a = l ? Qg(e, t) : yr(e, t, !0), u = l;
    do {
      if (a === 0) {
        Zl && !l && Bn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !kg(n)) {
          a = yr(e, t, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            e: {
              var s = e;
              a = Xa;
              var d = s.current.memoizedState.isDehydrated;
              if (d && (Wl(s, i).flags |= 256), i = yr(
                s,
                i,
                !1
              ), i !== 2) {
                if (or && !d) {
                  s.errorRecoveryDisabledLanes |= u, sl |= u, a = 4;
                  break e;
                }
                u = gt, gt = a, u !== null && (gt === null ? gt = u : gt.push.apply(
                  gt,
                  u
                ));
              }
              a = i;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Wl(e, 0), Bn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = a, u) {
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
          if ((t & 62914560) === t && (a = ei + 300 - xe(), 10 < a)) {
            if (Bn(
              l,
              t,
              wt,
              !Dn
            ), du(l, 0, !0) !== 0) break e;
            dn = t, l.timeoutHandle = Gd(
              od.bind(
                null,
                l,
                n,
                gt,
                ni,
                dr,
                t,
                wt,
                sl,
                Kl,
                Dn,
                u,
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
            ni,
            dr,
            t,
            wt,
            sl,
            Kl,
            Dn,
            u,
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
  function od(e, t, n, l, a, u, i, s, d, T, C, B, w, O) {
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
        u,
        B
      );
      var k = (u & 62914560) === u ? ei - xe() : (u & 4194048) === u ? id - xe() : 0;
      if (k = N0(
        B,
        k
      ), k !== null) {
        dn = u, e.cancelPendingCommit = k(
          pd.bind(
            null,
            e,
            t,
            u,
            n,
            l,
            a,
            i,
            s,
            d,
            C,
            B,
            null,
            w,
            O
          )
        ), Bn(e, u, i, !T);
        return;
      }
    }
    pd(
      e,
      t,
      u,
      n,
      l,
      a,
      i,
      s,
      d
    );
  }
  function kg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], u = a.getSnapshot;
          a = a.value;
          try {
            if (!St(u(), a)) return !1;
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
      var u = 31 - bt(a), i = 1 << u;
      l[u] = -1, a &= ~i;
    }
    n !== 0 && ps(e, n, t);
  }
  function li() {
    return (Ae & 6) === 0 ? (Va(0), !1) : !0;
  }
  function vr() {
    if (fe !== null) {
      if (_e === 0)
        var e = fe.return;
      else
        e = fe, en = el = null, Rc(e), jl = null, _a = 0, e = fe;
      for (; e !== null; )
        Yf(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Wl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, s0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), dn = 0, vr(), Ce = e, fe = n = It(e.current, null), me = t, _e = 0, At = null, Dn = !1, Zl = sa(e, t), or = !1, Kl = wt = fr = sl = Cn = je = 0, gt = Xa = null, dr = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - bt(l), u = 1 << a;
        t |= e[a], l &= ~u;
      }
    return fn = t, Au(), n;
  }
  function fd(e, t) {
    ue = null, M.H = Ba, t === ql || t === Ru ? (t = _o(), _e = 3) : t === Sc ? (t = _o(), _e = 4) : _e = t === Jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, At = t, fe === null && (je = 1, Zu(
      e,
      Dt(t, e.current)
    ));
  }
  function dd() {
    var e = zt.current;
    return e === null ? !0 : (me & 4194048) === me ? Bt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Bt : !1;
  }
  function hd() {
    var e = M.H;
    return M.H = Ba, e === null ? Ba : e;
  }
  function md() {
    var e = M.A;
    return M.A = Yg, e;
  }
  function ai() {
    je = 4, Dn || (me & 4194048) !== me && zt.current !== null || (Zl = !0), (Cn & 134217727) === 0 && (sl & 134217727) === 0 || Ce === null || Bn(
      Ce,
      me,
      wt,
      !1
    );
  }
  function yr(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var a = hd(), u = md();
    (Ce !== e || me !== t) && (ni = null, Wl(e, t)), t = !1;
    var i = je;
    e: do
      try {
        if (_e !== 0 && fe !== null) {
          var s = fe, d = At;
          switch (_e) {
            case 8:
              vr(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zt.current === null && (t = !0);
              var T = _e;
              if (_e = 0, At = null, $l(e, s, d, T), n && Zl) {
                i = 0;
                break e;
              }
              break;
            default:
              T = _e, _e = 0, At = null, $l(e, s, d, T);
          }
        }
        Vg(), i = je;
        break;
      } catch (C) {
        fd(e, C);
      }
    while (!0);
    return t && e.shellSuspendCounter++, en = el = null, Ae = l, M.H = a, M.A = u, fe === null && (Ce = null, me = 0, Au()), i;
  }
  function Vg() {
    for (; fe !== null; ) gd(fe);
  }
  function Qg(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = hd(), a = md();
    Ce !== e || me !== t ? (ni = null, ti = xe() + 500, Wl(e, t)) : Zl = sa(
      e,
      t
    );
    e: do
      try {
        if (_e !== 0 && fe !== null) {
          t = fe;
          var u = At;
          t: switch (_e) {
            case 1:
              _e = 0, At = null, $l(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ao(u)) {
                _e = 0, At = null, vd(t);
                break;
              }
              t = function() {
                _e !== 2 && _e !== 9 || Ce !== e || (_e = 7), Vt(e);
              }, u.then(t, t);
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              Ao(u) ? (_e = 0, At = null, vd(t)) : (_e = 0, At = null, $l(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (fe.tag) {
                case 26:
                  i = fe.memoizedState;
                case 5:
                case 27:
                  var s = fe;
                  if (i ? th(i) : s.stateNode.complete) {
                    _e = 0, At = null;
                    var d = s.sibling;
                    if (d !== null) fe = d;
                    else {
                      var T = s.return;
                      T !== null ? (fe = T, ui(T)) : fe = null;
                    }
                    break t;
                  }
              }
              _e = 0, At = null, $l(e, t, u, 5);
              break;
            case 6:
              _e = 0, At = null, $l(e, t, u, 6);
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
    return en = el = null, M.H = l, M.A = a, Ae = n, fe !== null ? 0 : (Ce = null, me = 0, Au(), je);
  }
  function Zg() {
    for (; fe !== null && !Re(); )
      gd(fe);
  }
  function gd(e) {
    var t = jf(e.alternate, e, fn);
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : fe = t;
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
          me
        );
        break;
      case 11:
        t = Uf(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Rc(t);
      default:
        Yf(n, t), t = fe = ho(t, fn), t = jf(n, t, fn);
    }
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : fe = t;
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
        me
      )) {
        je = 1, Zu(
          e,
          Dt(n, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw fe = a, u;
      je = 1, Zu(
        e,
        Dt(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ye || l === 1 ? e = !0 : Zl || (me & 536870912) !== 0 ? e = !1 : (Dn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = zt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yd(t, e)) : ui(t);
  }
  function ui(e) {
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
        fe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function yd(e, t) {
    do {
      var n = qg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = n;
    } while (e !== null);
    je = 6, fe = null;
  }
  function pd(e, t, n, l, a, u, i, s, d) {
    e.cancelPendingCommit = null;
    do
      ii();
    while (We !== 0);
    if ((Ae & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= uc, wm(
        e,
        n,
        u,
        i,
        s,
        d
      ), e === Ce && (fe = Ce = null, me = 0), Jl = t, Un = e, dn = n, hr = u, mr = a, cd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $g(Jt, function() {
        return Td(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = H.p, H.p = 2, i = Ae, Ae |= 4;
        try {
          jg(e, t, n);
        } finally {
          Ae = i, H.p = a, M.T = l;
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
        var l = H.p;
        H.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Pf(t, e);
          var u = Or, i = lo(e.containerInfo), s = u.focusedElem, d = u.selectionRange;
          if (i !== s && s && s.ownerDocument && no(
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
                var B = s.ownerDocument || document, w = B && B.defaultView || window;
                if (w.getSelection) {
                  var O = w.getSelection(), k = s.textContent.length, J = Math.min(d.start, k), De = d.end === void 0 ? J : Math.min(d.end, k);
                  !O.extend && J > De && (i = De, De = J, J = i);
                  var p = to(
                    s,
                    J
                  ), v = to(
                    s,
                    De
                  );
                  if (p && v && (O.rangeCount !== 1 || O.anchorNode !== p.node || O.anchorOffset !== p.offset || O.focusNode !== v.node || O.focusOffset !== v.offset)) {
                    var z = B.createRange();
                    z.setStart(p.node, p.offset), O.removeAllRanges(), J > De ? (O.addRange(z), O.extend(v.node, v.offset)) : (z.setEnd(v.node, v.offset), O.addRange(z));
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
          pi = !!Mr, Or = Mr = null;
        } finally {
          Ae = a, H.p = l, M.T = n;
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
        var l = H.p;
        H.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Jf(e, t.alternate, t);
        } finally {
          Ae = a, H.p = l, M.T = n;
        }
      }
      We = 3;
    }
  }
  function Ed() {
    if (We === 4 || We === 3) {
      We = 0, Pe();
      var e = Un, t = Jl, n = dn, l = cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, Jl = Un = null, zd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Rn = null), Hi(n), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function")
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
        t = M.T, a = H.p, H.p = 2, M.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < l.length; i++) {
            var s = l[i];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          M.T = t, H.p = a;
        }
      }
      (dn & 3) !== 0 && ii(), Vt(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === gr ? ka++ : (ka = 0, gr = e) : ka = 0, Va(0);
    }
  }
  function zd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Aa(t)));
  }
  function ii() {
    return bd(), Sd(), Ed(), Td();
  }
  function Td() {
    if (We !== 5) return !1;
    var e = Un, t = hr;
    hr = 0;
    var n = Hi(dn), l = M.T, a = H.p;
    try {
      H.p = 32 > n ? 32 : n, M.T = null, n = mr, mr = null;
      var u = Un, i = dn;
      if (We = 0, Jl = Un = null, dn = 0, (Ae & 6) !== 0) throw Error(r(331));
      var s = Ae;
      if (Ae |= 4, ad(u.current), td(
        u,
        u.current,
        i,
        n
      ), Ae = s, Va(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(vn, u);
        } catch {
        }
      return !0;
    } finally {
      H.p = a, M.T = l, zd(e, t);
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
      l = e.pingCache = new Xg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (or = !0, a.add(n), e = Kg.bind(null, e, t, n), t.then(e, e));
  }
  function Kg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (me & n) === n && (je === 4 || je === 3 && (me & 62914560) === me && 300 > xe() - ei ? (Ae & 2) === 0 && Wl(e, 0) : fr |= n, Kl === me && (Kl = 0)), Vt(e);
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
    return ia(e, t);
  }
  var ci = null, Fl = null, br = !1, ri = !1, Sr = !1, Hn = 0;
  function Vt(e) {
    e !== Fl && e.next === null && (Fl === null ? ci = Fl = e : Fl = Fl.next = e), ri = !0, br || (br = !0, Ig());
  }
  function Va(e, t) {
    if (!Sr && ri) {
      Sr = !0;
      do
        for (var n = !1, l = ci; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = l.suspendedLanes, s = l.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= a & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Od(l, u));
          } else
            u = me, u = du(
              l,
              l === Ce ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || sa(l, u) || (n = !0, Od(l, u));
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
    ri = br = !1;
    var e = 0;
    Hn !== 0 && r0() && (e = Hn);
    for (var t = xe(), n = null, l = ci; l !== null; ) {
      var a = l.next, u = Nd(l, t);
      u === 0 ? (l.next = null, n === null ? ci = a : n.next = a, a === null && (Fl = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (ri = !0)), l = a;
    }
    We !== 0 && We !== 5 || Va(e), Hn !== 0 && (Hn = 0);
  }
  function Nd(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - bt(u), s = 1 << i, d = a[i];
      d === -1 ? ((s & n) === 0 || (s & l) !== 0) && (a[i] = Am(s, t)) : d <= t && (e.expiredLanes |= s), u &= ~s;
    }
    if (t = Ce, n = me, n = du(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Y(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || sa(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Y(l), Hi(n)) {
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
      return l = Md.bind(null, e), n = ia(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Y(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Md(e, t) {
    if (We !== 0 && We !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (ii() && e.callbackNode !== n)
      return null;
    var l = me;
    return l = du(
      e,
      e === Ce ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (sd(e, l, t), Nd(e, xe()), e.callbackNode != null && e.callbackNode === n ? Md.bind(null, e) : null);
  }
  function Od(e, t) {
    if (ii()) return null;
    sd(e, t, !0);
  }
  function Ig() {
    o0(function() {
      (Ae & 6) !== 0 ? ia(
        gn,
        Fg
      ) : _d();
    });
  }
  function Er() {
    if (Hn === 0) {
      var e = xl;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), Hn = e;
    }
    return Hn;
  }
  function Dd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vu("" + e);
  }
  function Cd(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Pg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var u = Dd(
        (a[ot] || null).action
      ), i = l.submitter;
      i && (t = (t = i[ot] || null) ? Dd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var s = new Su(
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
                if (Hn !== 0) {
                  var d = i ? Cd(a, i) : new FormData(a);
                  Yc(
                    n,
                    {
                      pending: !0,
                      data: d,
                      method: a.method,
                      action: u
                    },
                    null,
                    d
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), d = i ? Cd(a, i) : new FormData(a), Yc(
                  n,
                  {
                    pending: !0,
                    data: d,
                    method: a.method,
                    action: u
                  },
                  u,
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
  Lt(io, "onAnimationEnd"), Lt(co, "onAnimationIteration"), Lt(ro, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(yg, "onTransitionRun"), Lt(pg, "onTransitionStart"), Lt(bg, "onTransitionCancel"), Lt(so, "onTransitionEnd"), zl("onMouseEnter", ["mouseout", "mouseover"]), zl("onMouseLeave", ["mouseout", "mouseover"]), zl("onPointerEnter", ["pointerout", "pointerover"]), zl("onPointerLeave", ["pointerout", "pointerover"]), Kn(
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
        var u = void 0;
        if (t)
          for (var i = l.length - 1; 0 <= i; i--) {
            var s = l[i], d = s.instance, T = s.currentTarget;
            if (s = s.listener, d !== u && a.isPropagationStopped())
              break e;
            u = s, a.currentTarget = T;
            try {
              u(a);
            } catch (C) {
              Tu(C);
            }
            a.currentTarget = null, u = d;
          }
        else
          for (i = 0; i < l.length; i++) {
            if (s = l[i], d = s.instance, T = s.currentTarget, s = s.listener, d !== u && a.isPropagationStopped())
              break e;
            u = s, a.currentTarget = T;
            try {
              u(a);
            } catch (C) {
              Tu(C);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = /* @__PURE__ */ new Set());
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
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function wr(e) {
    if (!e[si]) {
      e[si] = !0, As.forEach(function(n) {
        n !== "selectionchange" && (n0.has(n) || Ar(n, !1, e), Ar(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[si] || (t[si] = !0, Ar("selectionchange", !1, t));
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
    ), a = void 0, !Qi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function _r(e, t, n, l, a) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var s = l.stateNode.containerInfo;
          if (s === a) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = bl(s), i === null) return;
            if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              l = u = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        l = l.return;
      }
    xs(function() {
      var T = u, C = ki(n), B = [];
      e: {
        var w = oo.get(e);
        if (w !== void 0) {
          var O = Su, k = e;
          switch (e) {
            case "keypress":
              if (pu(n) === 0) break e;
            case "keydown":
            case "keyup":
              O = Wm;
              break;
            case "focusin":
              k = "focus", O = Wi;
              break;
            case "focusout":
              k = "blur", O = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              O = Wi;
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
              O = Im;
              break;
            case io:
            case co:
            case ro:
              O = Gm;
              break;
            case so:
              O = eg;
              break;
            case "scroll":
            case "scrollend":
              O = Hm;
              break;
            case "wheel":
              O = ng;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Xm;
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
          var J = (t & 4) !== 0, De = !J && (e === "scroll" || e === "scrollend"), p = J ? w !== null ? w + "Capture" : null : w;
          J = [];
          for (var v = T, z; v !== null; ) {
            var R = v;
            if (z = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || z === null || p === null || (R = ha(v, p), R != null && J.push(
              Za(v, R, z)
            )), De) break;
            v = v.return;
          }
          0 < J.length && (w = new O(
            w,
            k,
            null,
            n,
            C
          ), B.push({ event: w, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", w && n !== Xi && (k = n.relatedTarget || n.fromElement) && (bl(k) || k[pl]))
            break e;
          if ((O || w) && (w = C.window === C ? C : (w = C.ownerDocument) ? w.defaultView || w.parentWindow : window, O ? (k = n.relatedTarget || n.toElement, O = T, k = k ? bl(k) : null, k !== null && (De = S(k), J = k.tag, k !== De || J !== 5 && J !== 27 && J !== 6) && (k = null)) : (O = null, k = T), O !== k)) {
            if (J = js, R = "onMouseLeave", p = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (J = Ys, R = "onPointerLeave", p = "onPointerEnter", v = "pointer"), De = O == null ? w : da(O), z = k == null ? w : da(k), w = new J(
              R,
              v + "leave",
              O,
              n,
              C
            ), w.target = De, w.relatedTarget = z, R = null, bl(C) === T && (J = new J(
              p,
              v + "enter",
              k,
              n,
              C
            ), J.target = z, J.relatedTarget = De, R = J), De = R, O && k)
              t: {
                for (J = l0, p = O, v = k, z = 0, R = p; R; R = J(R))
                  z++;
                R = 0;
                for (var K = v; K; K = J(K))
                  R++;
                for (; 0 < z - R; )
                  p = J(p), z--;
                for (; 0 < R - z; )
                  v = J(v), R--;
                for (; z--; ) {
                  if (p === v || v !== null && p === v.alternate) {
                    J = p;
                    break t;
                  }
                  p = J(p), v = J(v);
                }
                J = null;
              }
            else J = null;
            O !== null && Bd(
              B,
              w,
              O,
              J,
              !1
            ), k !== null && De !== null && Bd(
              B,
              De,
              k,
              J,
              !0
            );
          }
        }
        e: {
          if (w = T ? da(T) : window, O = w.nodeName && w.nodeName.toLowerCase(), O === "select" || O === "input" && w.type === "file")
            var ze = Ws;
          else if (Ks(w))
            if ($s)
              ze = mg;
            else {
              ze = dg;
              var V = fg;
            }
          else
            O = w.nodeName, !O || O.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? T && Yi(T.elementType) && (ze = Ws) : ze = hg;
          if (ze && (ze = ze(e, T))) {
            Js(
              B,
              ze,
              n,
              C
            );
            break e;
          }
          V && V(e, w, T), e === "focusout" && T && w.type === "number" && T.memoizedProps.value != null && Gi(w, "number", w.value);
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
        var ie;
        if (Fi)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          Nl ? Qs(e, n) && (ge = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ge = "onCompositionStart");
        ge && (Xs && n.locale !== "ko" && (Nl || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Nl && (ie = Ls()) : (bn = C, Zi = "value" in bn ? bn.value : bn.textContent, Nl = !0)), V = oi(T, ge), 0 < V.length && (ge = new Gs(
          ge,
          e,
          null,
          n,
          C
        ), B.push({ event: ge, listeners: V }), ie ? ge.data = ie : (ie = Zs(n), ie !== null && (ge.data = ie)))), (ie = ig ? cg(e, n) : rg(e, n)) && (ge = oi(T, "onBeforeInput"), 0 < ge.length && (V = new Gs(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          C
        ), B.push({
          event: V,
          listeners: ge
        }), V.data = ie)), Pg(
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
  function oi(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ha(e, n), a != null && l.unshift(
        Za(e, a, u)
      ), a = ha(e, t), a != null && l.push(
        Za(e, a, u)
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
    for (var u = t._reactName, i = []; n !== null && n !== l; ) {
      var s = n, d = s.alternate, T = s.stateNode;
      if (s = s.tag, d !== null && d === l) break;
      s !== 5 && s !== 26 && s !== 27 || T === null || (d = T, a ? (T = ha(n, u), T != null && i.unshift(
        Za(n, T, d)
      )) : a || (T = ha(n, u), T != null && i.push(
        Za(n, T, d)
      ))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var a0 = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
  function Hd(e) {
    return (typeof e == "string" ? e : "" + e).replace(a0, `
`).replace(u0, "");
  }
  function xd(e, t) {
    return t = Hd(t), Hd(e) === t;
  }
  function Oe(e, t, n, l, a, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Al(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Al(e, "" + l);
        break;
      case "className":
        mu(e, "class", l);
        break;
      case "tabIndex":
        mu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(e, n, l);
        break;
      case "style":
        Bs(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          mu(e, "data", l);
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
        l = vu("" + l), e.setAttribute(n, l);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Oe(e, t, "name", a.name, a, null), Oe(
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
        l = vu("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = $t);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
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
        n = vu("" + l), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), hu(e, "popover", l);
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
        hu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Um.get(n) || n, hu(e, n, l));
    }
  }
  function Nr(e, t, n, l, a, u) {
    switch (n) {
      case "style":
        Bs(e, l, u);
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
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
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
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[ot] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : hu(e, n, l);
          }
    }
  }
  function ut(e, t, n) {
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
        de("error", e), de("load", e);
        var l = !1, a = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var i = n[u];
            if (i != null)
              switch (u) {
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
                  Oe(e, t, u, i, n, null);
              }
          }
        a && Oe(e, t, "srcSet", n.srcSet, n, null), l && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var s = u = i = a = null, d = null, T = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var C = n[l];
            if (C != null)
              switch (l) {
                case "name":
                  a = C;
                  break;
                case "type":
                  i = C;
                  break;
                case "checked":
                  d = C;
                  break;
                case "defaultChecked":
                  T = C;
                  break;
                case "value":
                  u = C;
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
          u,
          s,
          d,
          T,
          i,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), l = i = u = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (s = n[a], s != null))
            switch (a) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                l = s;
              default:
                Oe(e, t, a, s, n, null);
            }
        t = u, n = i, e.multiple = !!l, t != null ? Tl(e, !!l, t, !1) : n != null && Tl(e, !!l, n, !0);
        return;
      case "textarea":
        de("invalid", e), u = a = l = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (s = n[i], s != null))
            switch (i) {
              case "value":
                l = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                Oe(e, t, i, s, n, null);
            }
        Rs(e, l, a, u);
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
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Qa.length; l++)
          de(Qa[l], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        if (Yi(t)) {
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
  function i0(e, t, n, l) {
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
        var a = null, u = null, i = null, s = null, d = null, T = null, C = null;
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
        for (var w in l) {
          var O = l[w];
          if (B = n[w], l.hasOwnProperty(w) && (O != null || B != null))
            switch (w) {
              case "type":
                u = O;
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
                i = O;
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
                  w,
                  O,
                  l,
                  B
                );
            }
        }
        ji(
          e,
          i,
          s,
          d,
          T,
          C,
          u,
          a
        );
        return;
      case "select":
        O = i = s = w = null;
        for (u in n)
          if (d = n[u], n.hasOwnProperty(u) && d != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = d;
              default:
                l.hasOwnProperty(u) || Oe(
                  e,
                  t,
                  u,
                  null,
                  l,
                  d
                );
            }
        for (a in l)
          if (u = l[a], d = n[a], l.hasOwnProperty(a) && (u != null || d != null))
            switch (a) {
              case "value":
                w = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== d && Oe(
                  e,
                  t,
                  a,
                  u,
                  l,
                  d
                );
            }
        t = s, n = i, l = O, w != null ? Tl(e, !!n, w, !1) : !!l != !!n && (t != null ? Tl(e, !!n, t, !0) : Tl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = w = null;
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
        for (i in l)
          if (a = l[i], u = n[i], l.hasOwnProperty(i) && (a != null || u != null))
            switch (i) {
              case "value":
                w = a;
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
                a !== u && Oe(e, t, i, a, l, u);
            }
        Cs(e, w, O);
        return;
      case "option":
        for (var k in n)
          if (w = n[k], n.hasOwnProperty(k) && w != null && !l.hasOwnProperty(k))
            switch (k) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Oe(
                  e,
                  t,
                  k,
                  null,
                  l,
                  w
                );
            }
        for (d in l)
          if (w = l[d], O = n[d], l.hasOwnProperty(d) && w !== O && (w != null || O != null))
            switch (d) {
              case "selected":
                e.selected = w && typeof w != "function" && typeof w != "symbol";
                break;
              default:
                Oe(
                  e,
                  t,
                  d,
                  w,
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
          w = n[J], n.hasOwnProperty(J) && w != null && !l.hasOwnProperty(J) && Oe(e, t, J, null, l, w);
        for (T in l)
          if (w = l[T], O = n[T], l.hasOwnProperty(T) && w !== O && (w != null || O != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(r(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  T,
                  w,
                  l,
                  O
                );
            }
        return;
      default:
        if (Yi(t)) {
          for (var De in n)
            w = n[De], n.hasOwnProperty(De) && w !== void 0 && !l.hasOwnProperty(De) && Nr(
              e,
              t,
              De,
              void 0,
              l,
              w
            );
          for (C in l)
            w = l[C], O = n[C], !l.hasOwnProperty(C) || w === O || w === void 0 && O === void 0 || Nr(
              e,
              t,
              C,
              w,
              l,
              O
            );
          return;
        }
    }
    for (var p in n)
      w = n[p], n.hasOwnProperty(p) && w != null && !l.hasOwnProperty(p) && Oe(e, t, p, null, l, w);
    for (B in l)
      w = l[B], O = n[B], !l.hasOwnProperty(B) || w === O || w == null && O == null || Oe(e, t, B, w, l, O);
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
        var a = n[l], u = a.transferSize, i = a.initiatorType, s = a.duration;
        if (u && s && Ld(i)) {
          for (i = 0, s = a.responseEnd, l += 1; l < n.length; l++) {
            var d = n[l], T = d.startTime;
            if (T > s) break;
            var C = d.transferSize, B = d.initiatorType;
            C && Ld(B) && (d = d.responseEnd, i += C * (d < s ? 1 : (s - T) / (d - T)));
          }
          if (--l, t += 8 * (u + i) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Mr = null, Or = null;
  function fi(e) {
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
  function xn(e) {
    return e === "head";
  }
  function Xd(e, t) {
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
          for (var u = n.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[fa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = i;
          }
        } else
          n === "body" && Ka(e.ownerDocument.body);
      n = a;
    } while (n);
    ta(t);
  }
  function kd(e, t) {
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
          Rr(n), Li(n);
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
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Ht(e.nextSibling), e === null) break;
    }
    return null;
  }
  function h0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ht(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ht(e.nextSibling), e === null)) return null;
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
  function Ht(e) {
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
  var Hr = null;
  function Qd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Ht(e.nextSibling);
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
    switch (t = fi(n), e) {
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
    Li(e);
  }
  var xt = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function di(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var hn = H.d;
  H.d = {
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
    var e = hn.f(), t = li();
    return e || t;
  }
  function v0(e) {
    var t = Sl(e);
    t !== null && t.tag === 5 && t.type === "form" ? ff(t) : hn.r(e);
  }
  var Il = typeof document > "u" ? null : document;
  function Wd(e, t, n) {
    var l = Il;
    if (l && typeof t == "string" && t) {
      var a = Mt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Jd.has(a) || (Jd.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ut(t, "link", e), $e(t), l.head.appendChild(t)));
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
    var l = Il;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + Mt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + Mt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + Mt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = Pl(e);
          break;
        case "script":
          u = ea(e);
      }
      xt.has(u) || (e = N(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), xt.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Ja(u)) || t === "script" && l.querySelector(Wa(u)) || (t = l.createElement("link"), ut(t, "link", e), $e(t), l.head.appendChild(t)));
    }
  }
  function S0(e, t) {
    hn.m(e, t);
    var n = Il;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Mt(l) + '"][href="' + Mt(e) + '"]', u = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ea(e);
      }
      if (!xt.has(u) && (e = N({ rel: "modulepreload", href: e }, t), xt.set(u, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wa(u)))
              return;
        }
        l = n.createElement("link"), ut(l, "link", e), $e(l), n.head.appendChild(l);
      }
    }
  }
  function E0(e, t, n) {
    hn.S(e, t, n);
    var l = Il;
    if (l && e) {
      var a = El(l).hoistableStyles, u = Pl(e);
      t = t || "default";
      var i = a.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if (i = l.querySelector(
          Ja(u)
        ))
          s.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = xt.get(u)) && xr(e, n);
          var d = i = l.createElement("link");
          $e(d), ut(d, "link", e), d._p = new Promise(function(T, C) {
            d.onload = T, d.onerror = C;
          }), d.addEventListener("load", function() {
            s.loading |= 1;
          }), d.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, hi(i, t, l);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: s
        }, a.set(u, i);
      }
    }
  }
  function z0(e, t) {
    hn.X(e, t);
    var n = Il;
    if (n && e) {
      var l = El(n).hoistableScripts, a = ea(e), u = l.get(a);
      u || (u = n.querySelector(Wa(a)), u || (e = N({ src: e, async: !0 }, t), (t = xt.get(a)) && Lr(e, t), u = n.createElement("script"), $e(u), ut(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function T0(e, t) {
    hn.M(e, t);
    var n = Il;
    if (n && e) {
      var l = El(n).hoistableScripts, a = ea(e), u = l.get(a);
      u || (u = n.querySelector(Wa(a)), u || (e = N({ src: e, async: !0, type: "module" }, t), (t = xt.get(a)) && Lr(e, t), u = n.createElement("script"), $e(u), ut(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function $d(e, t, n, l) {
    var a = (a = ae.current) ? di(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Pl(n.href), n = El(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Pl(n.href);
          var u = El(
            a
          ).hoistableStyles, i = u.get(e);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, i), (u = a.querySelector(
            Ja(e)
          )) && !u._p && (i.instance = u, i.state.loading = 5), xt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, xt.set(e, n), u || A0(
            a,
            e,
            n,
            i.state
          ))), t && l === null)
            throw Error(r(528, ""));
          return i;
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
  function Pl(e) {
    return 'href="' + Mt(e) + '"';
  }
  function Ja(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fd(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function A0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ut(t, "link", n), $e(t), e.head.appendChild(t));
  }
  function ea(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function Wa(e) {
    return "script[async]" + e;
  }
  function Id(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Mt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, $e(l), l;
          var a = N({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), $e(l), ut(l, "style", a), hi(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = Pl(n.href);
          var u = e.querySelector(
            Ja(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, $e(u), u;
          l = Fd(n), (a = xt.get(a)) && xr(l, a), u = (e.ownerDocument || e).createElement("link"), $e(u);
          var i = u;
          return i._p = new Promise(function(s, d) {
            i.onload = s, i.onerror = d;
          }), ut(u, "link", l), t.state.loading |= 4, hi(u, n.precedence, e), t.instance = u;
        case "script":
          return u = ea(n.src), (a = e.querySelector(
            Wa(u)
          )) ? (t.instance = a, $e(a), a) : (l = n, (a = xt.get(u)) && (l = N({}, n), Lr(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), ut(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, hi(l, n.precedence, e));
    return t.instance;
  }
  function hi(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, u = a, i = 0; i < l.length; i++) {
      var s = l[i];
      if (s.dataset.precedence === t) u = s;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function xr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Lr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var mi = null;
  function Pd(e, t, n) {
    if (mi === null) {
      var l = /* @__PURE__ */ new Map(), a = mi = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = mi, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (!(u[fa] || u[tt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var s = l.get(i);
        s ? s.push(u) : l.set(i, [u]);
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
        var a = Pl(l.href), u = t.querySelector(
          Ja(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, $e(u);
          return;
        }
        u = t.ownerDocument || t, l = Fd(l), (a = xt.get(a)) && xr(l, a), u = u.createElement("link"), $e(u);
        var i = u;
        i._p = new Promise(function(s, d) {
          i.onload = s, i.onerror = d;
        }), ut(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = gi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var qr = 0;
  function N0(e, t) {
    return e.stylesheets && e.count === 0 && yi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && yi(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && qr === 0 && (qr = 62500 * c0());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yi(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > qr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function gi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) yi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vi = null;
  function yi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vi = /* @__PURE__ */ new Map(), t.forEach(M0, e), vi = null, gi.call(e));
  }
  function M0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = vi.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), vi.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var i = a[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (n.set(i.dataset.precedence, i), l = i);
        }
        l && n.set(null, l);
      }
      a = t.instance, i = a.getAttribute("data-precedence"), u = n.get(i) || l, u === l && n.set(null, a), n.set(i, a), this.count++, l = gi.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var $a = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function O0(e, t, n, l, a, u, i, s, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ui(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ui(0), this.hiddenUpdates = Ui(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, t, n, l, a, u, i, s, d, T, C, B) {
    return e = new O0(
      e,
      t,
      n,
      i,
      d,
      T,
      C,
      B,
      s
    ), t = 1, u === !0 && (t |= 24), u = Et(3, null, null, t), e.current = u, u.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Ec(u), e;
  }
  function lh(e) {
    return e ? (e = Cl, e) : Cl;
  }
  function ah(e, t, n, l, a, u) {
    a = lh(a), l.context === null ? l.context = a : l.pendingContext = a, l = wn(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = _n(e, l, t), n !== null && (vt(n, e, t), Ma(n, e, t));
  }
  function uh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jr(e, t) {
    uh(e, t), (e = e.alternate) && uh(e, t);
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Fn(e, 67108864);
      t !== null && vt(t, e, 67108864), jr(e, 67108864);
    }
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = _t();
      t = Bi(t);
      var n = Fn(e, t);
      n !== null && vt(n, e, t), jr(e, t);
    }
  }
  var pi = !0;
  function D0(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var u = H.p;
    try {
      H.p = 2, Gr(e, t, n, l);
    } finally {
      H.p = u, M.T = a;
    }
  }
  function C0(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var u = H.p;
    try {
      H.p = 8, Gr(e, t, n, l);
    } finally {
      H.p = u, M.T = a;
    }
  }
  function Gr(e, t, n, l) {
    if (pi) {
      var a = Yr(l);
      if (a === null)
        _r(
          e,
          t,
          l,
          bi,
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
          var u = Sl(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Zn(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var d = 1 << 31 - bt(i);
                      s.entanglements[1] |= d, i &= ~d;
                    }
                    Vt(u), (Ae & 6) === 0 && (ti = xe() + 500, Va(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Fn(u, 2), s !== null && vt(s, u, 2), li(), jr(u, 2);
            }
          if (u = Yr(l), u === null && _r(
            e,
            t,
            l,
            bi,
            n
          ), u === a) break;
          a = u;
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
    return e = ki(e), Xr(e);
  }
  var bi = null;
  function Xr(e) {
    if (bi = null, e = bl(e), e !== null) {
      var t = S(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = A(t), e !== null) return e;
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
    return bi = e, null;
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
  var kr = !1, Ln = null, qn = null, jn = null, Fa = /* @__PURE__ */ new Map(), Ia = /* @__PURE__ */ new Map(), Gn = [], R0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Ia.delete(t.pointerId);
    }
  }
  function Pa(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = Sl(t), t !== null && ih(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function U0(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Ln = Pa(
          Ln,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return qn = Pa(
          qn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return jn = Pa(
          jn,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Fa.set(
          u,
          Pa(
            Fa.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ia.set(
          u,
          Pa(
            Ia.get(u) || null,
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
          if (t = A(n), t !== null) {
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
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Xi = l, n.target.dispatchEvent(l), Xi = null;
      } else
        return t = Sl(n), t !== null && ih(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fh(e, t, n) {
    Si(e) && n.delete(t);
  }
  function B0() {
    kr = !1, Ln !== null && Si(Ln) && (Ln = null), qn !== null && Si(qn) && (qn = null), jn !== null && Si(jn) && (jn = null), Fa.forEach(fh), Ia.forEach(fh);
  }
  function Ei(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kr || (kr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      B0
    )));
  }
  var zi = null;
  function dh(e) {
    zi !== e && (zi = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        zi === e && (zi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (Xr(l || n) === null)
              continue;
            break;
          }
          var u = Sl(n);
          u !== null && (e.splice(t, 3), t -= 3, Yc(
            u,
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
      return Ei(d, e);
    }
    Ln !== null && Ei(Ln, e), qn !== null && Ei(qn, e), jn !== null && Ei(jn, e), Fa.forEach(t), Ia.forEach(t);
    for (var n = 0; n < Gn.length; n++) {
      var l = Gn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Gn.length && (n = Gn[0], n.blockedOn === null); )
      oh(n), n.blockedOn === null && Gn.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], u = n[l + 1], i = a[ot] || null;
        if (typeof u == "function")
          i || dh(n);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, i = u[ot] || null)
              s = i.formAction;
            else if (Xr(a) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? n[l + 1] = s : (n.splice(l, 3), l -= 3), dh(n);
        }
      }
  }
  function hh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return a = i;
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
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
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
  Ti.prototype.render = Vr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var n = t.current, l = _t();
    ah(n, l, e, t, null, null);
  }, Ti.prototype.unmount = Vr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), li(), t[pl] = null;
    }
  };
  function Ti(e) {
    this._internalRoot = e;
  }
  Ti.prototype.unstable_scheduleHydration = function(e) {
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
  H.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = y(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var H0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber)
      try {
        vn = Ai.inject(
          H0
        ), et = Ai;
      } catch {
      }
  }
  return tu.createRoot = function(e, t) {
    if (!h(e)) throw Error(r(299));
    var n = !1, l = "", a = Ef, u = zf, i = Tf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = nh(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      u,
      i,
      hh
    ), e[pl] = t.current, wr(e), new Vr(t);
  }, tu.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(r(299));
    var l = !1, a = "", u = Ef, i = zf, s = Tf, d = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (i = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (d = n.formState)), t = nh(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      d,
      u,
      i,
      s,
      hh
    ), t.context = lh(null), n = t.current, l = _t(), l = Bi(l), a = wn(l), a.callback = null, _n(n, a, l), n = l, t.current.lanes = n, oa(t, n), Vt(t), e[pl] = t.current, wr(e), new Ti(t);
  }, tu.version = "19.2.0", tu;
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
  return c(), Kr.exports = k0(), Kr.exports;
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
  const [[r], h] = b.useReducer(K0, [f]), S = Z0(o), A = b.useRef(void 0);
  return { containerRef: b.useCallback(
    (g) => {
      A.current?.disconnect(), A.current = void 0;
      const y = () => h([J0(g, S), window.innerWidth - document.documentElement.clientWidth]);
      y(), g && typeof ResizeObserver < "u" && (A.current = new ResizeObserver(y), A.current.observe(g)), typeof c == "function" ? c(g) : c && (c.current = g);
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
const I0 = Object.freeze([1200, 600, 300, 0]);
function Xn(c, o) {
  return typeof c == "function" ? c(o) : c;
}
function jh(c, o) {
  return o !== void 0 ? Xn(c, o) : void 0;
}
function P0(c, o) {
  const f = I0.findIndex((r) => r <= o);
  return Xn(c[Math.max(f, 0)], o);
}
function as(c, o, f, r = 0) {
  if (o === void 0) return;
  const h = jh(c, o);
  return Math.round(Math.max(h === void 0 ? P0(f, o) : h, r));
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
    componentsProps: Xn(r, c) || {},
    render: Xn(h, c)
  };
}
function nu(c, o = 0) {
  const f = 10 ** o;
  return Math.round((c + Number.EPSILON) * f) / f;
}
function tv(c, o, f, r, h, S, A) {
  let E, g;
  const y = (N) => {
    const D = S * (h - 1) + 2 * A * h;
    return `calc((${N.match(/^\s*calc\((.*)\)\s*$/)?.[1] ?? N} - ${D}px) / ${nu((r - D) / f, 5)})`;
  }, U = c.srcSet;
  return U && U.length > 0 && (E = U.concat(
    U.some(({ width: N }) => N === c.width) ? [] : [{ src: c.src, width: c.width, height: c.height }]
  ).sort((N, D) => N.width - D.width).map((N) => `${N.src} ${N.width}w`).join(", ")), o?.size ? g = (o.sizes || []).map(({ viewport: N, size: D }) => `${N} ${y(D)}`).concat(y(o.size)).join(", ") : g = `${Math.ceil(f / r * 100)}vw`, { srcSet: E, sizes: g };
}
function nv({
  as: c,
  render: o,
  context: f,
  classes: r = [],
  variables: h = {},
  style: S,
  className: A,
  children: E,
  ...g
}, y) {
  const U = $0(
    ...(Array.isArray(r) ? r : [r]).filter((x) => typeof x == "string").map(qh),
    A
  ), D = { style: {
    ...Object.fromEntries(
      Object.entries(h).map(([x, L]) => [
        F0(x.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
        typeof L == "number" ? nu(L, 5) : L
      ])
    ),
    ...S
  }, className: U, children: E, ...g };
  if (o) {
    const x = o({ ref: y, ...D }, f);
    if (x) return x;
  }
  const q = c || "div";
  return pe.jsx(q, { ref: y, ...D });
}
const _i = b.forwardRef(nv);
function lv({
  photo: c,
  index: o,
  width: f,
  height: r,
  onClick: h,
  render: { wrapper: S, link: A, button: E, image: g, extras: y } = {},
  componentsProps: { link: U, button: N, wrapper: D, image: q } = {}
}, x) {
  const { href: L } = c, W = { photo: c, index: o, width: nu(f, 3), height: nu(r, 3) };
  let Z;
  return L ? Z = { ...U, as: "a", render: A, classes: ["photo", "link"], href: L, onClick: h } : h ? Z = { ...N, as: "button", type: "button", render: E, classes: ["photo", "button"], onClick: h } : Z = { ...D, render: S, classes: "photo" }, pe.jsxs(
    _i,
    {
      ref: x,
      variables: { photoWidth: W.width, photoHeight: W.height },
      context: W,
      ...Z,
      children: [
        pe.jsx(_i, { as: "img", classes: "image", render: g, context: W, ...q }),
        y?.({}, W)
      ]
    }
  );
}
const av = b.forwardRef(lv);
function uv({
  layout: c,
  sizes: o,
  model: f,
  skeleton: r,
  onClick: h,
  render: { container: S, track: A, photo: E, ...g } = {},
  componentsProps: {
    container: y,
    track: U,
    link: N,
    button: D,
    wrapper: q,
    image: x
  } = {}
}, L) {
  const { spacing: W, padding: Z, containerWidth: ee, tracks: te, variables: he, horizontal: ve } = f || {};
  return pe.jsxs(
    _i,
    {
      role: "group",
      "aria-label": "Photo album",
      ...y,
      variables: { spacing: W, padding: Z, containerWidth: ee, ...he },
      classes: ["", c],
      render: S,
      ref: L,
      children: [
        W !== void 0 && Z !== void 0 && ee !== void 0 && te?.map(({ photos: $, variables: G }, ce) => {
          const le = $.length, Ke = ve ? le : te.length;
          return b.createElement(
            _i,
            {
              ...U,
              key: ce,
              render: A,
              classes: "track",
              variables: { trackSize: le, ...G }
            },
            $.map((re) => {
              const { photo: be, index: F, width: Ee } = re, { key: P, src: M, alt: H, title: Q, label: se } = be, Se = h ? (_) => {
                h({ event: _, photo: be, index: F });
              } : void 0;
              if (E) {
                const _ = E({ onClick: Se }, re);
                if (_) return _;
              }
              const m = (_) => se ? { "aria-label": se, ..._ } : _;
              return pe.jsx(
                av,
                {
                  onClick: Se,
                  render: g,
                  componentsProps: {
                    image: {
                      loading: "lazy",
                      decoding: "async",
                      src: M,
                      alt: H,
                      title: Q,
                      ...tv(be, o, Ee, ee, Ke, W, Z),
                      ...Xn(x, re)
                    },
                    link: m(Xn(N, re)),
                    button: m(Xn(D, re)),
                    wrapper: Xn(q, re)
                  },
                  ...re
                },
                P ?? M
              );
            })
          );
        }),
        ee === void 0 && r
      ]
    }
  );
}
const iv = b.forwardRef(uv);
function cv(c, { photos: o, targetRowHeight: f, rowConstraints: r, ...h }) {
  const { spacing: S, padding: A, componentsProps: E, render: g } = ev(c, h), { singleRowMaxHeight: y, minPhotos: U, maxPhotos: N } = jh(r, c) || {};
  if (y !== void 0 && S !== void 0 && A !== void 0) {
    const D = Math.floor(
      o.reduce(
        (q, { width: x, height: L }) => q + x / L * y - 2 * A,
        A * o.length * 2 + S * (o.length - 1)
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
    render: g,
    spacing: S,
    padding: A,
    minPhotos: U,
    maxPhotos: N,
    componentsProps: E
  };
}
function rv(c) {
  return (o, f) => c(f) - c(o);
}
function sv(c) {
  let o = 0;
  const f = [], r = (U, N) => c(f[U], f[N]) < 0, h = (U, N) => {
    const D = f[U];
    f[U] = f[N], f[N] = D;
  }, S = (U) => {
    let N = U, D = Math.floor(N / 2);
    for (; N > 1 && r(D, N); )
      h(D, N), N = D, D = Math.floor(N / 2);
  }, A = (U) => {
    let N = U, D = N * 2;
    for (; D <= o && (D < o && r(D, D + 1) && (D += 1), !!r(N, D)); )
      h(N, D), N = D, D = N * 2;
  };
  return { push: (U) => {
    o += 1, f[o] = U, S(o);
  }, pop: () => {
    if (o === 0) return;
    h(1, o), o -= 1;
    const U = f.pop();
    return A(1), U;
  }, size: () => o };
}
function ov(c, o, f) {
  const r = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
  S.set(o, 0);
  const A = sv(rv((E) => E[1]));
  for (A.push([o, 0]); A.size() > 0; ) {
    const [E, g] = A.pop();
    if (!h.has(E)) {
      const y = c(E);
      h.add(E), y.forEach((U, N) => {
        const D = g + U, q = r.get(N), x = S.get(N);
        (x === void 0 || x > D && (x / D > 1.005 || q !== void 0 && q < E)) && (S.set(N, D), A.push([N, D]), r.set(N, E));
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
  return nu(o / f / Math.min(...c.map((h) => os(h)))) + (r || 0) + 2;
}
function Gh(c, o, f, r) {
  return (o - (c.length - 1) * f - 2 * r * c.length) / c.reduce((h, S) => h + os(S), 0);
}
function mv(c, o, f, r, h, S, A) {
  const E = c.slice(o, f), g = Gh(E, r, h, S);
  return g > 0 ? (g - A) ** 2 * E.length : void 0;
}
function gv(c, o, f, r, h, S, A, E) {
  return (g) => {
    const y = /* @__PURE__ */ new Map();
    y.set(g, 0);
    const U = A || 1, N = Math.min(S, E || 1 / 0);
    for (let D = g + U; D < c.length + 1 && !(D - g > N); D += 1) {
      const q = mv(c, g, D, r, o, f, h);
      if (q === void 0) break;
      y.set(D, q);
    }
    return y;
  };
}
function vv(c, o, f, r, h, S, A) {
  const E = hv(c, r, h, S), g = gv(
    c,
    o,
    f,
    r,
    h,
    E,
    S,
    A
  ), y = dv(g, 0, c.length);
  if (!y) return;
  const U = [];
  for (let N = 1; N < y.length; N += 1) {
    const D = c.map((x, L) => ({ photo: x, index: L })).slice(y[N - 1], y[N]), q = Gh(
      D.map(({ photo: x }) => x),
      r,
      o,
      f
    );
    U.push({
      photos: D.map(({ photo: x, index: L }) => ({
        photo: x,
        index: L,
        width: q * os(x),
        height: q
      }))
    });
  }
  return { spacing: o, padding: f, containerWidth: r, tracks: U, horizontal: !0 };
}
function yv({ photos: c, breakpoints: o, defaultContainerWidth: f, ...r }, h) {
  const { containerRef: S, containerWidth: A } = W0(h, o, f), { spacing: E, padding: g, targetRowHeight: y, minPhotos: U, maxPhotos: N, ...D } = cv(A, {
    photos: c,
    ...r
  }), q = b.useMemo(
    () => A !== void 0 && E !== void 0 && g !== void 0 && y !== void 0 ? vv(c, E, g, A, y, U, N) : void 0,
    [c, E, g, A, y, U, N]
  );
  return pe.jsx(iv, { layout: "rows", ref: S, model: q, ...D });
}
const pv = b.forwardRef(yv), Yh = "carousel", Xh = "controller", bv = "navigation", Sv = "no-scroll", fs = "portal", Ev = "root", kh = "toolbar", Fr = "loading", Ir = "error", Pr = "complete", zv = "placeholder", Tv = (c) => `active-slide-${c}`, Vh = "flex_center", Av = "no_scroll", Qh = "no_scroll_padding", ds = "slide", wv = "slide_wrapper", fl = "prev", dl = "next", wh = "swipe", la = "close", Zh = "onPointerDown", Kh = "onPointerMove", Jh = "onPointerUp", Wh = "onPointerLeave", $h = "onPointerCancel", Fh = "onKeyDown", _v = "onKeyUp", Ih = "onWheel", Nv = "Escape", Mv = "ArrowLeft", Ov = "ArrowRight", Dv = "button", us = "icon", Ph = "contain", _h = "cover", Cv = "Unknown action type";
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
function lu(c, o) {
  return `${c}${o ? `_${o}` : ""}`;
}
function hs(c) {
  return (o) => lu(c, o);
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
function kn(c, o, f) {
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
function Hv(c, o) {
  return c.imageFit === _h || c.imageFit !== Ph && o === _h;
}
function Mi(c) {
  return typeof c == "string" ? Number.parseInt(c, 10) : c;
}
function Ni(c) {
  if (typeof c == "number")
    return { pixel: c };
  if (typeof c == "string") {
    const o = Mi(c);
    return c.endsWith("%") ? { percent: o } : { pixel: o };
  }
  return { pixel: 0 };
}
function xv(c, o) {
  const f = Ni(o), r = f.percent !== void 0 ? c.width / 100 * f.percent : f.pixel;
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
function um(c, o) {
  return c[ms(o, c.length)];
}
function is(c, o) {
  return am(c) ? um(c, o) : void 0;
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
    imageFit: Ph,
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
function Ie(c, o) {
  return { module: c, children: o };
}
function im(c, o, f) {
  return c.module.name === o ? f(c) : c.children ? [
    Ie(c.module, c.children.flatMap((r) => {
      var h;
      return (h = im(r, o, f)) !== null && h !== void 0 ? h : [];
    }))
  ] : [c];
}
function na(c, o, f) {
  return c.flatMap((r) => {
    var h;
    return (h = im(r, o, f)) !== null && h !== void 0 ? h : [];
  });
}
function Xv(c, o = [], f = []) {
  let r = c;
  const h = (q) => {
    const x = [...r];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L?.module.name === q)
        return !0;
      L?.children && x.push(...L.children);
    }
    return !1;
  }, S = (q, x) => {
    if (q === "") {
      r = [Ie(x, r)];
      return;
    }
    r = na(r, q, (L) => [Ie(x, [L])]);
  }, A = (q, x) => {
    r = na(r, q, (L) => [Ie(L.module, [Ie(x, L.children)])]);
  }, E = (q, x, L) => {
    r = na(r, q, (W) => {
      var Z;
      return [
        Ie(W.module, [
          ...L ? [Ie(x)] : [],
          ...(Z = W.children) !== null && Z !== void 0 ? Z : [],
          ...L ? [] : [Ie(x)]
        ])
      ];
    });
  }, g = (q, x, L) => {
    r = na(r, q, (W) => [
      ...L ? [Ie(x)] : [],
      W,
      ...L ? [] : [Ie(x)]
    ]);
  }, y = (q) => {
    A(Xh, q);
  }, U = (q, x) => {
    r = na(r, q, (L) => [Ie(x, L.children)]);
  }, N = (q) => {
    r = na(r, q, (x) => x.children);
  }, D = (q) => {
    f.push(q);
  };
  return o.forEach((q) => {
    q({
      contains: h,
      addParent: S,
      append: A,
      addChild: E,
      addSibling: g,
      addModule: y,
      replace: U,
      remove: N,
      augment: D
    });
  }), {
    config: r,
    augmentation: (q) => f.reduce((x, L) => L(x), q)
  };
}
const cm = b.createContext(null), rm = kn("useA11yContext", "A11yContext", cm);
function kv({ children: c }) {
  const [o, f] = b.useState(!1), [r, h] = b.useState(!1), S = b.useMemo(() => ({ focusWithin: o, trackFocusWithin: (E, g) => {
    const y = (U) => (N) => {
      var D;
      N.currentTarget.contains(N.relatedTarget) || f(U), (D = U ? E : g) === null || D === void 0 || D(N);
    };
    return {
      onFocus: y(!0),
      onBlur: y(!1)
    };
  }, autoPlaying: r, setAutoPlaying: h }), [o, r]);
  return b.createElement(cm.Provider, { value: S }, c);
}
const sm = b.createContext(null), gs = kn("useDocument", "DocumentContext", sm);
function Vv({ nodeRef: c, children: o }) {
  const f = b.useMemo(() => {
    const r = (S) => {
      var A;
      return ((A = S || c.current) === null || A === void 0 ? void 0 : A.ownerDocument) || document;
    };
    return { getOwnerDocument: r, getOwnerWindow: (S) => {
      var A;
      return ((A = r(S)) === null || A === void 0 ? void 0 : A.defaultView) || window;
    } };
  }, [c]);
  return b.createElement(sm.Provider, { value: f }, o);
}
const om = b.createContext(null), Oi = kn("useEvents", "EventsContext", om);
function Qv({ children: c }) {
  const [o] = b.useState({});
  b.useEffect(() => () => {
    Object.keys(o).forEach((r) => delete o[r]);
  }, [o]);
  const f = b.useMemo(() => {
    const r = (A, E) => {
      var g;
      (g = o[A]) === null || g === void 0 || g.splice(0, o[A].length, ...o[A].filter((y) => y !== E));
    };
    return { publish: (...[A, E]) => {
      var g;
      (g = o[A]) === null || g === void 0 || g.forEach((y) => y(E));
    }, subscribe: (A, E) => (o[A] || (o[A] = []), o[A].push(E), () => r(A, E)), unsubscribe: r };
  }, [o]);
  return b.createElement(om.Provider, { value: f }, c);
}
const fm = b.createContext(null), au = kn("useLightboxProps", "LightboxPropsContext", fm);
function Zv({ children: c, ...o }) {
  return b.createElement(fm.Provider, { value: o }, c);
}
const dm = b.createContext(null), Di = kn("useLightboxState", "LightboxStateContext", dm), hm = b.createContext(null), Kv = kn("useLightboxDispatch", "LightboxDispatchContext", hm);
function Jv(c, o) {
  switch (o.type) {
    case "swipe": {
      const { slides: f } = c, r = o?.increment || 0, h = c.globalIndex + r, S = ms(h, f.length), A = is(f, S), E = r || o.duration !== void 0 ? {
        increment: r,
        duration: o.duration,
        easing: o.easing
      } : void 0;
      return { slides: f, currentIndex: S, globalIndex: h, currentSlide: A, animation: E };
    }
    case "update":
      return o.slides !== c.slides || o.index !== c.currentIndex ? {
        slides: o.slides,
        currentIndex: o.index,
        globalIndex: o.index,
        currentSlide: is(o.slides, o.index)
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
    currentSlide: is(c, o)
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
const mm = b.createContext(null), Ci = kn("useTimeouts", "TimeoutsContext", mm);
function $v({ children: c }) {
  const [o] = b.useState([]);
  b.useEffect(() => () => {
    o.forEach((r) => window.clearTimeout(r)), o.splice(0, o.length);
  }, [o]);
  const f = b.useMemo(() => {
    const r = (A) => {
      o.splice(0, o.length, ...o.filter((E) => E !== A));
    };
    return { setTimeout: (A, E) => {
      const g = window.setTimeout(() => {
        r(g), A();
      }, E);
      return o.push(g), g;
    }, clearTimeout: (A) => {
      A !== void 0 && (r(A), window.clearTimeout(A));
    } };
  }, [o]);
  return b.createElement(mm.Provider, { value: f }, c);
}
const gm = b.forwardRef(function({ label: o, className: f, icon: r, renderIcon: h, onClick: S, style: A, ...E }, g) {
  const { styles: y, labels: U } = au(), N = aa(U, o);
  return b.createElement("button", { ref: g, type: "button", title: N, "aria-label": N, className: mn(we(Dv), f), onClick: S, style: { ...A, ...y.button }, ...E }, h ? h() : b.createElement(r, { className: we(us), style: y.icon }));
});
function Fv(c, o) {
  const f = (r) => b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, o);
  return f.displayName = c, f;
}
function uu(c, o) {
  return Fv(c, b.createElement(
    "g",
    { fill: "currentColor" },
    b.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    o
  ));
}
const Iv = uu("Close", b.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), Pv = uu("Previous", b.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), ey = uu("Next", b.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), ty = uu("Loading", b.createElement(b.Fragment, null, Array.from({ length: 8 }).map((c, o, f) => b.createElement("line", { key: o, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / f.length * (o + 1), transform: `rotate(${360 / f.length * o}, 12, 12)` })))), ny = uu("Error", b.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), iu = nm() ? b.useLayoutEffect : b.useEffect;
function vm() {
  const [c, o] = b.useState(!1);
  return b.useEffect(() => {
    var f, r;
    const h = (f = window.matchMedia) === null || f === void 0 ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)");
    o(h?.matches);
    const S = (A) => o(A.matches);
    return (r = h?.addEventListener) === null || r === void 0 || r.call(h, "change", S), () => {
      var A;
      return (A = h?.removeEventListener) === null || A === void 0 ? void 0 : A.call(h, "change", S);
    };
  }, []), c;
}
function ly(c) {
  let o = 0, f = 0, r = 0;
  const S = window.getComputedStyle(c).transform.match(/matrix.*\((.+)\)/);
  if (S) {
    const A = S[1].split(",").map(Mi);
    A.length === 6 ? (o = A[4], f = A[5]) : A.length === 16 && (o = A[12], f = A[13], r = A[14]);
  }
  return { x: o, y: f, z: r };
}
function Nh(c, o) {
  const f = b.useRef(void 0), r = b.useRef(void 0), h = vm();
  return iu(() => {
    var S, A, E;
    if (c.current && f.current !== void 0 && !h) {
      const { keyframes: g, duration: y, easing: U, onfinish: N } = o(f.current, c.current.getBoundingClientRect(), ly(c.current)) || {};
      if (g && y) {
        (S = r.current) === null || S === void 0 || S.cancel(), r.current = void 0;
        try {
          r.current = (E = (A = c.current).animate) === null || E === void 0 ? void 0 : E.call(A, g, { duration: y, easing: U });
        } catch (D) {
          console.error(D);
        }
        r.current && (r.current.onfinish = () => {
          r.current = void 0, N?.();
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
    const A = () => {
      if (S) {
        const E = window.getComputedStyle(S), g = (y) => parseFloat(y) || 0;
        r({
          width: Math.round(S.clientWidth - g(E.paddingLeft) - g(E.paddingRight)),
          height: Math.round(S.clientHeight - g(E.paddingTop) - g(E.paddingBottom))
        });
      } else
        r(void 0);
    };
    A(), S && typeof ResizeObserver < "u" && (o.current = new ResizeObserver(A), o.current.observe(S));
  }, []), containerRef: c, containerRect: f };
}
function wi() {
  const c = b.useRef(void 0), { setTimeout: o, clearTimeout: f } = Ci();
  return b.useCallback((r, h) => {
    f(c.current), c.current = o(r, h > 0 ? h : 0);
  }, [o, f]);
}
function Ze(c) {
  const o = b.useRef(c);
  return iu(() => {
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
  iu(() => {
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
  return iu(() => {
    o(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []), c;
}
function uy() {
  const [c] = b.useState({}), o = b.useCallback((h, S) => {
    var A;
    (A = c[h]) === null || A === void 0 || A.forEach((E) => {
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
    onWheel: (h) => o(Ih, h)
  }), [o]), r = b.useCallback((h, S) => (c[h] || (c[h] = []), c[h].unshift(S), () => {
    const A = c[h];
    A && A.splice(0, A.length, ...A.filter((E) => E !== S));
  }), [c]);
  return { registerSensors: f, subscribeSensors: r };
}
function Oh(c, o) {
  const f = b.useRef(0), r = wi(), h = Ze((...S) => {
    f.current = Date.now(), c(S);
  });
  return b.useCallback((...S) => {
    r(() => {
      h(S);
    }, o - (Date.now() - f.current));
  }, [o, h, r]);
}
const es = hs("slide"), ts = hs("slide_image");
function iy({ slide: c, offset: o, render: f, rect: r, imageFit: h, imageProps: S, onClick: A, onLoad: E, onError: g, style: y }) {
  var U, N, D, q, x, L, W, Z;
  const [ee, te] = b.useState(Fr), { publish: he } = Oi(), { setTimeout: ve } = Ci(), $ = b.useRef(null);
  b.useEffect(() => {
    o === 0 && he(Tv(ee));
  }, [o, ee, he]);
  const G = Ze((_) => {
    ("decode" in _ ? _.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      _.parentNode && (te(Pr), ve(() => {
        E?.(_);
      }, 0));
    });
  }), ce = b.useCallback((_) => {
    $.current = _, _?.complete && G(_);
  }, [G]), le = b.useCallback((_) => {
    G(_.currentTarget);
  }, [G]), Ke = Ze(() => {
    te(Ir), g?.();
  }), re = Hv(c, h), be = (_, j) => Number.isFinite(_) ? _ : j, F = be(Math.max(...((N = (U = c.srcSet) === null || U === void 0 ? void 0 : U.map((_) => _.width)) !== null && N !== void 0 ? N : []).concat(c.width ? [c.width] : []).filter(Boolean)), ((D = $.current) === null || D === void 0 ? void 0 : D.naturalWidth) || 0), Ee = be(Math.max(...((x = (q = c.srcSet) === null || q === void 0 ? void 0 : q.map((_) => _.height)) !== null && x !== void 0 ? x : []).concat(c.height ? [c.height] : []).filter(Boolean)), ((L = $.current) === null || L === void 0 ? void 0 : L.naturalHeight) || 0), P = F && Ee ? {
    maxWidth: `min(${F}px, 100%)`,
    maxHeight: `min(${Ee}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, M = (W = c.srcSet) === null || W === void 0 ? void 0 : W.sort((_, j) => _.width - j.width).map((_) => `${_.src} ${_.width}w`).join(", "), H = () => r && !re && c.width && c.height ? r.height / c.height * c.width : Number.MAX_VALUE, Q = M && r && nm() ? `${Math.round(Math.min(H(), r.width))}px` : void 0, { style: se, className: Se, ...m } = S || {};
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("img", { ref: ce, onLoad: le, onError: Ke, onClick: A, draggable: !1, className: mn(we(ts()), re && we(ts("cover")), ee !== Pr && we(ts("loading")), Se), style: { ...P, ...y, ...se }, ...m, alt: (Z = c.alt) !== null && Z !== void 0 ? Z : "", sizes: Q, srcSet: M, src: c.src }),
    ee !== Pr && b.createElement(
      "div",
      { className: we(es(zv)) },
      ee === Fr && (f?.iconLoading ? f.iconLoading() : b.createElement(ty, { className: mn(we(us), we(es(Fr))) })),
      ee === Ir && (f?.iconError ? f.iconError() : b.createElement(ny, { className: mn(we(us), we(es(Ir))) }))
    )
  );
}
const cy = b.forwardRef(function({ className: o, children: f, onFocus: r, onBlur: h, ...S }, A) {
  const E = b.useRef(null), { trackFocusWithin: g } = rm();
  return b.createElement(
    Vv,
    { nodeRef: E },
    b.createElement("div", { ref: rs(A, E), className: mn(we("root"), o), ...g(r, h), ...S }, f)
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
function sy({ disableSwipeNavigation: c, closeOnBackdropClick: o }, f, r, h, S, A, E, g, y, U, N, D, q, x, L, W) {
  const Z = b.useRef(0), ee = b.useRef([]), te = b.useRef(void 0), he = b.useRef(0), ve = b.useRef(Gt.NONE), $ = b.useCallback((F) => {
    te.current === F.pointerId && (te.current = void 0, ve.current = Gt.NONE);
    const Ee = ee.current;
    Ee.splice(0, Ee.length, ...Ee.filter((P) => P.pointerId !== F.pointerId));
  }, []), G = b.useCallback((F) => {
    $(F), F.persist(), ee.current.push(F);
  }, [$]), ce = b.useCallback((F) => ee.current.find(({ pointerId: Ee }) => F.pointerId === Ee), []), le = Ze((F) => {
    G(F);
  }), Ke = (F, Ee) => N && F > Ee || U && F < -Ee, re = Ze((F) => {
    const Ee = ce(F);
    if (Ee)
      if (te.current === F.pointerId) {
        const P = Date.now() - he.current, M = Z.current;
        ve.current === Gt.SWIPE ? Math.abs(M) > 0.3 * h || Math.abs(M) > 5 && P < S ? g(M, P) : y(M) : ve.current === Gt.PULL && (Ke(M, 2 * ns) ? x(M, P) : L(M)), Z.current = 0, ve.current = Gt.NONE;
      } else {
        const { target: P } = F;
        o && P instanceof HTMLElement && P === Ee.target && (P.classList.contains(we(ds)) || P.classList.contains(we(wv))) && W();
      }
    $(F);
  }), be = Ze((F) => {
    const Ee = ce(F);
    if (Ee) {
      const P = te.current === F.pointerId;
      if (F.buttons === 0) {
        P && Z.current !== 0 ? re(F) : $(Ee);
        return;
      }
      const M = F.clientX - Ee.clientX, H = F.clientY - Ee.clientY;
      if (te.current === void 0) {
        const Q = (se) => {
          G(F), te.current = F.pointerId, he.current = Date.now(), ve.current = se;
        };
        Math.abs(M) > Math.abs(H) && Math.abs(M) > ns && r(M) ? c || (Q(Gt.SWIPE), A()) : Math.abs(H) > Math.abs(M) && Ke(H, ns) && (Q(Gt.PULL), D());
      } else P && (ve.current === Gt.SWIPE ? (Z.current = M, E(M)) : ve.current === Gt.PULL && (Z.current = H, q(H)));
    }
  });
  ry(f, le, be, re);
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
function fy(c, o, f, r, h, S, A, E, g) {
  const y = b.useRef(0), U = b.useRef(0), N = b.useRef(void 0), D = b.useRef(void 0), q = b.useRef(0), x = b.useRef(void 0), L = b.useRef(0), { setTimeout: W, clearTimeout: Z } = Ci(), ee = b.useCallback(() => {
    N.current && (Z(N.current), N.current = void 0);
  }, [Z]), te = b.useCallback(() => {
    D.current && (Z(D.current), D.current = void 0);
  }, [Z]), he = Ze(() => {
    c !== ct.SWIPE && (y.current = 0, L.current = 0, ee(), te());
  });
  b.useEffect(he, [c, he]);
  const ve = Ze((G) => {
    D.current = void 0, y.current === G && g(y.current);
  }), $ = Ze((G) => {
    if (G.ctrlKey || Math.abs(G.deltaY) > Math.abs(G.deltaX))
      return;
    const ce = (le) => {
      q.current = le, Z(x.current), x.current = le > 0 ? W(() => {
        q.current = 0, x.current = void 0;
      }, 300) : void 0;
    };
    if (c === ct.NONE) {
      if (Math.abs(G.deltaX) <= 1.2 * Math.abs(q.current)) {
        ce(G.deltaX);
        return;
      }
      if (!f(-G.deltaX))
        return;
      if (U.current += G.deltaX, ee(), Math.abs(U.current) > 30)
        U.current = 0, ce(0), L.current = Date.now(), S();
      else {
        const le = U.current;
        N.current = W(() => {
          N.current = void 0, le === U.current && (U.current = 0);
        }, h);
      }
    } else if (c === ct.SWIPE) {
      let le = y.current - G.deltaX;
      if (le = Math.min(Math.abs(le), r) * Math.sign(le), y.current = le, A(le), te(), Math.abs(le) > 0.2 * r) {
        ce(G.deltaX), E(le, Date.now() - L.current);
        return;
      }
      D.current = W(() => ve(le), 2 * h);
    } else
      ce(G.deltaX);
  });
  b.useEffect(() => o(Ih, $), [o, $]);
}
const Dh = hs("container"), pm = b.createContext(null), cu = kn("useController", "ControllerContext", pm);
function dy({ children: c, ...o }) {
  var f;
  const { carousel: r, animation: h, controller: S, on: A, styles: E, render: g } = o, { closeOnPullUp: y, closeOnPullDown: U, preventDefaultWheelX: N, preventDefaultWheelY: D } = S, [q, x] = b.useState(), L = Di(), W = Kv(), [Z, ee] = b.useState(ct.NONE), te = b.useRef(0), he = b.useRef(0), ve = b.useRef(1), { registerSensors: $, subscribeSensors: G } = uy(), { subscribe: ce, publish: le } = Oi(), Ke = wi(), re = wi(), be = wi(), { containerRef: F, setContainerRef: Ee, containerRect: P } = ym(), M = rs(oy({ preventDefaultWheelX: N, preventDefaultWheelY: D }), Ee), H = b.useRef(null), Q = rs(H, void 0), { getOwnerDocument: se } = gs(), Se = vs(), m = (Y) => (Se ? -1 : 1) * (typeof Y == "number" ? Y : 1), _ = Ze(() => {
    var Y;
    return (Y = F.current) === null || Y === void 0 ? void 0 : Y.focus();
  }), j = Ze(() => o), X = Ze(() => L), I = b.useCallback((Y) => le(fl, Y), [le]), ae = b.useCallback((Y) => le(dl, Y), [le]), oe = b.useCallback(() => le(la), [le]), Je = (Y) => !(r.finite && (m(Y) > 0 && L.currentIndex === 0 || m(Y) < 0 && L.currentIndex === L.slides.length - 1)), He = (Y) => {
    var Re;
    te.current = Y, (Re = F.current) === null || Re === void 0 || Re.style.setProperty(yt("swipe_offset"), `${Math.round(Y)}px`);
  }, Qt = (Y) => {
    var Re, Pe;
    he.current = Y, ve.current = (() => {
      const gn = U && Y > 0 ? Y : y && Y < 0 ? -Y : 0;
      return Math.min(Math.max(Bv(1 - gn / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (Re = F.current) === null || Re === void 0 || Re.style.setProperty(yt("pull_offset"), `${Math.round(Y)}px`), (Pe = F.current) === null || Pe === void 0 || Pe.style.setProperty(yt("pull_opacity"), `${ve.current}`);
  }, { prepareAnimation: ml } = Nh(H, (Y, Re, Pe) => {
    if (H.current && P)
      return {
        keyframes: [
          {
            transform: `translate(0, ${Y.rect.y - Re.y + Pe.y}px)`,
            opacity: Y.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: Y.duration,
        easing: h.easing.fade
      };
  }), gl = (Y, Re) => {
    if (y || U) {
      Qt(Y);
      let Pe = 0;
      H.current && (Pe = h.fade * (Re ? 2 : 1), ml({
        rect: H.current.getBoundingClientRect(),
        opacity: ve.current,
        duration: Pe
      })), be(() => {
        Qt(0), ee(ct.NONE);
      }, Pe), ee(ct.ANIMATION), Re || oe();
    }
  }, { prepareAnimation: ru, isAnimationPlaying: Zt } = Nh(H, (Y, Re, Pe) => {
    var xe;
    if (H.current && P && (!((xe = L.animation) === null || xe === void 0) && xe.duration)) {
      const st = Ni(r.spacing), gn = (st.percent ? st.percent * P.width / 100 : st.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${m(L.globalIndex - Y.index) * (P.width + gn) + Y.rect.x - Re.x + Pe.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: L.animation.duration,
        easing: L.animation.easing
      };
    }
  }), Kt = Ze((Y) => {
    var Re, Pe;
    const xe = Y.offset || 0, st = xe ? h.swipe : (Re = h.navigation) !== null && Re !== void 0 ? Re : h.swipe, gn = !xe && !Zt() ? h.easing.navigation : h.easing.swipe;
    let { direction: Vn } = Y;
    const Jt = (Pe = Y.count) !== null && Pe !== void 0 ? Pe : 1;
    let ca = ct.ANIMATION, pt = st * Jt;
    if (!Vn) {
      const Qn = P?.width, vn = Y.duration || 0, et = Qn ? st / Qn * Math.abs(xe) : st;
      Jt !== 0 ? (vn < et ? pt = pt / et * Math.max(vn, et / 5) : Qn && (pt = st / Qn * (Qn - Math.abs(xe))), Vn = m(xe) > 0 ? fl : dl) : pt = st / 2;
    }
    let ra = 0;
    Vn === fl ? Je(m(1)) ? ra = -Jt : (ca = ct.NONE, pt = st) : Vn === dl && (Je(m(-1)) ? ra = Jt : (ca = ct.NONE, pt = st)), pt = Math.round(pt), re(() => {
      He(0), ee(ct.NONE);
    }, pt), H.current && ru({
      rect: H.current.getBoundingClientRect(),
      index: L.globalIndex
    }), ee(ca), le(wh, {
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
    P?.width || 0,
    h.swipe,
    () => ee(ct.SWIPE),
    (Y) => He(Y),
    (Y, Re) => Kt({ offset: Y, duration: Re, count: 1 }),
    (Y) => Kt({ offset: Y, count: 0 })
  ], Ri = [
    () => {
      U && ee(ct.PULL);
    },
    (Y) => Qt(Y),
    (Y) => gl(Y),
    (Y) => gl(Y, !0)
  ];
  sy(S, ...vl, y, U, ...Ri, oe), fy(Z, ...vl);
  const ua = Ze(() => {
    S.focus && se().querySelector(`.${we(fs)} .${we(Dh())}`) && _();
  });
  b.useEffect(ua, [ua]);
  const yl = Ze(() => {
    var Y;
    (Y = A.view) === null || Y === void 0 || Y.call(A, { index: L.currentIndex });
  });
  b.useEffect(yl, [L.globalIndex, yl]), b.useEffect(() => tm(ce(fl, (Y) => Kt({ direction: fl, ...Y })), ce(dl, (Y) => Kt({ direction: dl, ...Y })), ce(wh, (Y) => W(Y))), [ce, Kt, W]);
  const ia = b.useMemo(() => ({
    prev: I,
    next: ae,
    close: oe,
    focus: _,
    slideRect: P ? xv(P, r.padding) : { width: 0, height: 0 },
    containerRect: P || { width: 0, height: 0 },
    subscribeSensors: G,
    containerRef: F,
    setCarouselRef: Q,
    toolbarWidth: q,
    setToolbarWidth: x
  }), [
    I,
    ae,
    oe,
    _,
    G,
    P,
    F,
    Q,
    q,
    x,
    r.padding
  ]);
  return b.useImperativeHandle(S.ref, () => ({
    prev: I,
    next: ae,
    close: oe,
    focus: _,
    getLightboxProps: j,
    getLightboxState: X
  }), [I, ae, oe, _, j, X]), b.createElement("div", { ref: M, className: mn(we(Dh()), we(Vh)), style: {
    ...Z === ct.SWIPE ? { [yt("swipe_offset")]: `${Math.round(te.current)}px` } : null,
    ...Z === ct.PULL ? {
      [yt("pull_offset")]: `${Math.round(he.current)}px`,
      [yt("pull_opacity")]: `${ve.current}`
    } : null,
    ...S.touchAction !== "none" ? { [yt("controller_touch_action")]: S.touchAction } : null,
    ...E.container
  }, tabIndex: -1, ...$ }, P && b.createElement(
    pm.Provider,
    { value: ia },
    c,
    (f = g.controls) === null || f === void 0 ? void 0 : f.call(g)
  ));
}
const hy = hl(Xh, dy);
function ol(c) {
  return lu(Yh, c);
}
function Ch(c) {
  return lu(ds, c);
}
function my({ slide: c, offset: o }) {
  const f = b.useRef(null), { currentIndex: r, slides: h } = Di(), { slideRect: S, focus: A } = cu(), { render: E, carousel: { imageFit: g, imageProps: y }, on: { click: U }, styles: { slide: N }, labels: D } = au(), { getOwnerDocument: q } = gs(), x = o !== 0;
  b.useEffect(() => {
    var W;
    x && (!((W = f.current) === null || W === void 0) && W.contains(q().activeElement)) && A();
  }, [x, A, q]);
  const L = () => {
    var W, Z, ee, te;
    let he = (W = E.slide) === null || W === void 0 ? void 0 : W.call(E, { slide: c, offset: o, rect: S });
    return !he && lm(c) && (he = b.createElement(iy, { slide: c, offset: o, render: E, rect: S, imageFit: g, imageProps: y, onClick: x ? void 0 : () => U?.({ index: r }) })), he ? b.createElement(
      b.Fragment,
      null,
      (Z = E.slideHeader) === null || Z === void 0 ? void 0 : Z.call(E, { slide: c }),
      ((ee = E.slideContainer) !== null && ee !== void 0 ? ee : (({ children: ve }) => ve))({ slide: c, children: he }),
      (te = E.slideFooter) === null || te === void 0 ? void 0 : te.call(E, { slide: c })
    ) : null;
  };
  return b.createElement("div", { ref: f, className: mn(we(Ch()), !x && we(Ch("current")), we(Vh)), ...Gv(x), style: N, role: "group", "aria-roledescription": aa(D, "Slide"), "aria-label": Uv(D, h, r + o) }, L());
}
function gy() {
  const c = au().styles.slide;
  return b.createElement("div", { className: we(ds), style: c });
}
function vy({ carousel: c, labels: o }) {
  const { slides: f, currentIndex: r, globalIndex: h } = Di(), { setCarouselRef: S } = cu(), { autoPlaying: A, focusWithin: E } = rm(), g = Ni(c.spacing), y = Ni(c.padding), U = qv(c, f, 1), N = [];
  if (am(f))
    for (let D = r - U; D <= r + U; D += 1) {
      const q = um(f, D), x = h - r + D, L = c.finite && (D < 0 || D > f.length - 1);
      N.push(L ? { key: x } : {
        key: [`${x}`, Lv(q)].filter(Boolean).join("|"),
        offset: D - r,
        slide: q
      });
    }
  return b.createElement("div", { ref: S, className: mn(we(ol()), N.length > 0 && we(ol("with_slides"))), style: {
    [`${yt(ol("slides_count"))}`]: N.length,
    [`${yt(ol("spacing_px"))}`]: g.pixel || 0,
    [`${yt(ol("spacing_percent"))}`]: g.percent || 0,
    [`${yt(ol("padding_px"))}`]: y.pixel || 0,
    [`${yt(ol("padding_percent"))}`]: y.percent || 0
  }, role: "region", "aria-live": A && !E ? "off" : "polite", "aria-roledescription": aa(o, "Carousel"), "aria-label": aa(o, "Photo gallery") }, N.map(({ key: D, slide: q, offset: x }) => q ? b.createElement(my, { key: D, slide: q, offset: x }) : b.createElement(gy, { key: D })));
}
const yy = hl(Yh, vy);
function bm() {
  const { carousel: c } = au(), { slides: o, currentIndex: f } = Di(), r = o.length === 0 || c.finite && f === 0, h = o.length === 0 || c.finite && f === o.length - 1;
  return { prevDisabled: r, nextDisabled: h };
}
function py(c) {
  var o;
  const f = vs(), { publish: r } = Oi(), { animation: h } = au(), { prevDisabled: S, nextDisabled: A } = bm(), E = ((o = h.navigation) !== null && o !== void 0 ? o : h.swipe) / 2, g = Oh(() => r(fl), E), y = Oh(() => r(dl), E), U = Ze((N) => {
    switch (N.key) {
      case Nv:
        r(la);
        break;
      case Mv:
        (f ? A : S) || (f ? y : g)();
        break;
      case Ov:
        (f ? S : A) || (f ? g : y)();
        break;
    }
  });
  b.useEffect(() => c(Fh, U), [c, U]);
}
function Rh({ label: c, icon: o, renderIcon: f, action: r, onClick: h, disabled: S, style: A }) {
  return b.createElement(gm, { label: c, icon: o, renderIcon: f, className: we(`navigation_${r}`), disabled: S, onClick: h, style: A, ...ay(cu().focus, S) });
}
function by({ render: { buttonPrev: c, buttonNext: o, iconPrev: f, iconNext: r }, styles: h }) {
  const { prev: S, next: A, subscribeSensors: E } = cu(), { prevDisabled: g, nextDisabled: y } = bm();
  return py(E), b.createElement(
    b.Fragment,
    null,
    c ? c() : b.createElement(Rh, { label: "Previous", action: fl, icon: Pv, renderIcon: f, style: h.navigationPrev, disabled: g, onClick: S }),
    o ? o() : b.createElement(Rh, { label: "Next", action: dl, icon: ey, renderIcon: r, style: h.navigationNext, disabled: y, onClick: A })
  );
}
const Sy = hl(bv, by), Uh = we(Av), Ey = we(Qh);
function zy(c) {
  return "style" in c;
}
function Bh(c, o, f) {
  const r = window.getComputedStyle(c), h = f ? "padding-left" : "padding-right", S = f ? r.paddingLeft : r.paddingRight, A = c.style.getPropertyValue(h);
  return c.style.setProperty(h, `${(Mi(S) || 0) + o}px`), () => {
    A ? c.style.setProperty(h, A) : c.style.removeProperty(h);
  };
}
function Ty({ noScroll: { disabled: c }, children: o }) {
  const f = vs(), { getOwnerDocument: r, getOwnerWindow: h } = gs();
  return b.useEffect(() => {
    if (c)
      return () => {
      };
    const S = [], A = h(), { body: E, documentElement: g } = r(), y = Math.round(A.innerWidth - g.clientWidth);
    if (y > 0) {
      S.push(Bh(E, y, f));
      const U = E.getElementsByTagName("*");
      for (let N = 0; N < U.length; N += 1) {
        const D = U[N];
        zy(D) && A.getComputedStyle(D).getPropertyValue("position") === "fixed" && !D.classList.contains(Ey) && S.push(Bh(D, y, f));
      }
    }
    return E.classList.add(Uh), () => {
      E.classList.remove(Uh), S.forEach((U) => U());
    };
  }, [f, c, r, h]), b.createElement(b.Fragment, null, o);
}
const Ay = hl(Sv, Ty);
function Hh(c) {
  return lu(fs, c);
}
function xh(c, o, f) {
  const r = c.getAttribute(o);
  return c.setAttribute(o, f), () => {
    r ? c.setAttribute(o, r) : c.removeAttribute(o);
  };
}
function wy({ children: c, animation: o, styles: f, className: r, on: h, portal: S, close: A, labels: E }) {
  const [g, y] = b.useState(!1), [U, N] = b.useState(!1), D = b.useRef([]), q = b.useRef(null), { setTimeout: x } = Ci(), { subscribe: L } = Oi(), Z = vm() ? 0 : o.fade;
  b.useEffect(() => (y(!0), () => {
    y(!1), N(!1);
  }), []);
  const ee = Ze(() => {
    D.current.forEach(($) => $()), D.current = [];
  }), te = Ze(() => {
    var $;
    N(!1), ee(), ($ = h.exiting) === null || $ === void 0 || $.call(h), x(() => {
      var G;
      (G = h.exited) === null || G === void 0 || G.call(h), A();
    }, Z);
  });
  b.useEffect(() => L(la, te), [L, te]);
  const he = Ze(($) => {
    var G, ce, le;
    Yv($), N(!0), (G = h.entering) === null || G === void 0 || G.call(h);
    const Ke = (le = (ce = $.parentNode) === null || ce === void 0 ? void 0 : ce.children) !== null && le !== void 0 ? le : [];
    for (let re = 0; re < Ke.length; re += 1) {
      const be = Ke[re];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(be.tagName) === -1 && be !== $ && (D.current.push(xh(be, "inert", "")), D.current.push(xh(be, "aria-hidden", "true")));
    }
    D.current.push(() => {
      var re, be;
      (be = (re = q.current) === null || re === void 0 ? void 0 : re.focus) === null || be === void 0 || be.call(re);
    }), x(() => {
      var re;
      (re = h.entered) === null || re === void 0 || re.call(h);
    }, Z);
  }), ve = b.useCallback(($) => {
    $ ? he($) : ee();
  }, [he, ee]);
  return g ? Rv.createPortal(b.createElement(cy, { ref: ve, className: mn(r, we(Hh()), we(Qh), U && we(Hh("open"))), "aria-modal": !0, role: "dialog", "aria-label": aa(E, "Lightbox"), style: {
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
  return lu(kh, c);
}
function Dy({ toolbar: { buttons: c }, render: { buttonClose: o, iconClose: f }, styles: r }) {
  const { close: h, setToolbarWidth: S } = cu(), { setContainerRef: A, containerRect: E } = ym();
  iu(() => {
    S(E?.width);
  }, [S, E?.width]);
  const g = () => o ? o() : b.createElement(gm, { key: la, label: "Close", icon: Iv, renderIcon: f, onClick: h });
  return b.createElement("div", { ref: A, style: r.toolbar, className: we(Oy()) }, c?.map((y) => y === la ? g() : y));
}
const Cy = hl(kh, Dy);
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
function Uy({ carousel: c, animation: o, render: f, toolbar: r, controller: h, noScroll: S, on: A, plugins: E, slides: g, index: y, ...U }) {
  const { animation: N, carousel: D, render: q, toolbar: x, controller: L, noScroll: W, on: Z, slides: ee, index: te, plugins: he, ...ve } = cs, { config: $, augmentation: G } = Xv([
    Ie(_y, [
      Ie(Ay, [
        Ie(hy, [
          Ie(yy),
          Ie(Cy),
          Ie(Sy)
        ])
      ])
    ])
  ], E || he), ce = G({
    animation: Ry(N, o),
    carousel: { ...D, ...c },
    render: { ...q, ...f },
    toolbar: { ...x, ...r },
    controller: { ...L, ...h },
    noScroll: { ...W, ...S },
    on: { ...Z, ...A },
    ...ve,
    ...U
  });
  return ce.open ? b.createElement(
    Zv,
    { ...ce },
    b.createElement(
      Wv,
      { slides: g || ee, index: Mi(y || te) },
      b.createElement(
        $v,
        null,
        b.createElement(
          Qv,
          null,
          b.createElement(kv, null, Sm(Ie(My, $), ce))
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
    src: "/src/img/22.jpg",
    width: 1800,
    height: 1813,
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
    lowWidth: 400,
    lowHeight: 403
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
    src: "/src/img/31.jpg",
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
  function S(g) {
    if (!g) return "";
    if (/^(https?:)?\/\//i.test(g) || /^[a-z0-9+.-]+:/i.test(g)) return g;
    const y = h.replace(/\/+$/, "");
    return y ? g.startsWith(y) ? g : g.startsWith("/") ? `${y}${g}` : `${y}/${g}` : g.startsWith("/") ? g : `/${g}`;
  }
  b.useEffect(() => {
    const y = new URLSearchParams(window.location.search).get("image");
    if (y) {
      const U = parseInt(y, 10);
      !isNaN(U) && U >= 0 && U < ls.length && o(U);
    }
  }, []), b.useEffect(() => {
    if (c >= 0) {
      const g = new URLSearchParams(window.location.search);
      g.set("image", c.toString()), window.history.replaceState(null, "", `?${g.toString()}`);
    } else
      window.history.replaceState(null, "", window.location.pathname);
  }, [c]);
  const A = JSON.parse(
    JSON.stringify(ls)
  ), E = JSON.parse(
    JSON.stringify(ls)
  );
  for (const g of E)
    g.src = S(g.src), g.lowSrc = S(g.lowSrc), f === "en" && (g.title = g.titleEn, g.description = g.descriptionEn, g.plantCommonName = g.plantCommonNameEn, g.artworkTechnique = g.artworkTechniqueEn);
  for (const g of A)
    g.lowSrc = S(g.lowSrc), g.src = g.lowSrc || S(g.src), g.width = g.lowWidth, g.height = g.lowHeight, f === "en" && (g.title = g.titleEn || g.title, g.description = g.descriptionEn, g.plantCommonName = g.plantCommonNameEn, g.artworkTechnique = g.artworkTechniqueEn), g.alt = g.title;
  return /* @__PURE__ */ pe.jsx("div", { className: "app-container", children: /* @__PURE__ */ pe.jsxs("div", { className: "gallery-container", children: [
    /* @__PURE__ */ pe.jsx(
      pv,
      {
        photos: A,
        onClick: ({ index: g }) => o(g),
        spacing: 8,
        padding: 0,
        targetRowHeight: 400,
        render: {
          extras: (g, { photo: y }) => /* @__PURE__ */ pe.jsxs("div", { className: "gallery-image-title", children: [
            y.author,
            " - ",
            y.title
          ] })
        }
      }
    ),
    /* @__PURE__ */ pe.jsx(
      Uy,
      {
        slides: E,
        open: c >= 0,
        index: c,
        close: () => o(-1),
        on: {
          view: ({ index: g }) => {
            o(g);
          }
        },
        render: {
          slide: ({ slide: g }) => /* @__PURE__ */ pe.jsxs("div", { className: "b-content", children: [
            /* @__PURE__ */ pe.jsx("div", { className: "b-content__pic", children: /* @__PURE__ */ pe.jsx(
              "img",
              {
                src: g.src,
                alt: E[c]?.title ?? ""
              }
            ) }),
            /* @__PURE__ */ pe.jsxs("div", { className: "b-content__info", children: [
              /* @__PURE__ */ pe.jsx("div", { className: "b-content__author", children: E[c]?.author }),
              /* @__PURE__ */ pe.jsxs("div", { children: [
                E[c]?.contactEmail && /* @__PURE__ */ pe.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `mailto:${E[c]?.contactEmail}`,
                    children: E[c]?.contactEmail
                  }
                ),
                E[c]?.contactPhone && /* @__PURE__ */ pe.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `tel:${E[c]?.contactPhone}`,
                    children: E[c]?.contactPhone
                  }
                ),
                E[c]?.contactSocial && /* @__PURE__ */ pe.jsx(
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
                E[c]?.contactWebsite && /* @__PURE__ */ pe.jsx(
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
                E[c]?.contactNote && /* @__PURE__ */ pe.jsx("span", { className: "b-content__meta", children: E[c]?.contactNote })
              ] }),
              /* @__PURE__ */ pe.jsx("div", { className: "b-content__title", children: E[c]?.title }),
              /* @__PURE__ */ pe.jsxs("div", { children: [
                /* @__PURE__ */ pe.jsx("span", { className: "b-content__meta", children: E[c]?.artworkSize }),
                /* @__PURE__ */ pe.jsx("span", { className: "b-content__meta", children: E[c]?.artworkYear }),
                /* @__PURE__ */ pe.jsx("span", { className: "b-content__meta", children: E[c]?.artworkTechnique })
              ] }),
              /* @__PURE__ */ pe.jsxs("div", { children: [
                /* @__PURE__ */ pe.jsx("span", { className: "b-content__cn", children: E[c]?.plantCommonName }),
                " ",
                /* @__PURE__ */ pe.jsxs("span", { className: "b-content__bn", children: [
                  "(",
                  E[c]?.plantBotanicalName,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ pe.jsx("div", { children: /* @__PURE__ */ pe.jsx(
                "button",
                {
                  className: "b-content__lang-btn",
                  onClick: () => r(f === "de" ? "en" : "de"),
                  children: f === "de" ? "Switch to English" : "Auf Deutsch lesen"
                }
              ) }),
              /* @__PURE__ */ pe.jsx("div", { className: "b-content__desc", children: E[c]?.description })
            ] })
          ] })
        }
      }
    )
  ] }) });
}
function Hy(c = "root") {
  const o = document.getElementById(c);
  if (!o) {
    console.error(`Element with id "${c}" not found`);
    return;
  }
  Q0.createRoot(o).render(
    /* @__PURE__ */ pe.jsx(b.StrictMode, { children: /* @__PURE__ */ pe.jsx(By, {}) })
  );
}
export {
  Hy as initVBKDGallery
};

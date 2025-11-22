var Kf = { exports: {} }, eu = {};
var gh;
function Lg() {
  if (gh) return eu;
  gh = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function o(f, h, y) {
    var v = null;
    if (y !== void 0 && (v = "" + y), h.key !== void 0 && (v = "" + h.key), "key" in h) {
      y = {};
      for (var N in h)
        N !== "key" && (y[N] = h[N]);
    } else y = h;
    return h = y.ref, {
      $$typeof: c,
      type: f,
      key: v,
      ref: h !== void 0 ? h : null,
      props: y
    };
  }
  return eu.Fragment = s, eu.jsx = o, eu.jsxs = o, eu;
}
var vh;
function qg() {
  return vh || (vh = 1, Kf.exports = Lg()), Kf.exports;
}
var ze = qg(), kf = { exports: {} }, le = {};
var yh;
function jg() {
  if (yh) return le;
  yh = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), v = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), w = Symbol.iterator;
  function q(m) {
    return m === null || typeof m != "object" ? null : (m = w && m[w] || m["@@iterator"], typeof m == "function" ? m : null);
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
  function K(m, _, j) {
    this.props = m, this.context = _, this.refs = W, this.updater = j || x;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(m, _) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, _, "setState");
  }, K.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = K.prototype;
  function te(m, _, j) {
    this.props = m, this.context = _, this.refs = W, this.updater = j || x;
  }
  var he = te.prototype = new ee();
  he.constructor = te, L(he, K.prototype), he.isPureReactComponent = !0;
  var ve = Array.isArray;
  function $() {
  }
  var Y = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function ne(m, _, j) {
    var X = j.ref;
    return {
      $$typeof: c,
      type: m,
      key: _,
      ref: X !== void 0 ? X : null,
      props: j
    };
  }
  function ke(m, _) {
    return ne(m.type, _, m.props);
  }
  function fe(m) {
    return typeof m == "object" && m !== null && m.$$typeof === c;
  }
  function be(m) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(j) {
      return _[j];
    });
  }
  var F = /\/+/g;
  function pe(m, _) {
    return typeof m == "object" && m !== null && m.key != null ? be("" + m.key) : _.toString(36);
  }
  function I(m) {
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
  function O(m, _, j, X, P) {
    var ae = typeof m;
    (ae === "undefined" || ae === "boolean") && (m = null);
    var se = !1;
    if (m === null) se = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case c:
            case s:
              se = !0;
              break;
            case H:
              return se = m._init, O(
                se(m._payload),
                _,
                j,
                X,
                P
              );
          }
      }
    if (se)
      return P = P(m), se = X === "" ? "." + pe(m, 0) : X, ve(P) ? (j = "", se != null && (j = se.replace(F, "$&/") + "/"), O(P, _, j, "", function(Zt) {
        return Zt;
      })) : P != null && (fe(P) && (P = ke(
        P,
        j + (P.key == null || m && m.key === P.key ? "" : ("" + P.key).replace(
          F,
          "$&/"
        ) + "/") + se
      )), _.push(P)), 1;
    se = 0;
    var Je = X === "" ? "." : X + ":";
    if (ve(m))
      for (var Be = 0; Be < m.length; Be++)
        X = m[Be], ae = Je + pe(X, Be), se += O(
          X,
          _,
          j,
          ae,
          P
        );
    else if (Be = q(m), typeof Be == "function")
      for (m = Be.call(m), Be = 0; !(X = m.next()).done; )
        X = X.value, ae = Je + pe(X, Be++), se += O(
          X,
          _,
          j,
          ae,
          P
        );
    else if (ae === "object") {
      if (typeof m.then == "function")
        return O(
          I(m),
          _,
          j,
          X,
          P
        );
      throw _ = String(m), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function B(m, _, j) {
    if (m == null) return m;
    var X = [], P = 0;
    return O(m, X, "", "", function(ae) {
      return _.call(j, ae, P++);
    }), X;
  }
  function Z(m) {
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
  var re = typeof reportError == "function" ? reportError : function(m) {
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
    map: B,
    forEach: function(m, _, j) {
      B(
        m,
        function() {
          _.apply(this, arguments);
        },
        j
      );
    },
    count: function(m) {
      var _ = 0;
      return B(m, function() {
        _++;
      }), _;
    },
    toArray: function(m) {
      return B(m, function(_) {
        return _;
      }) || [];
    },
    only: function(m) {
      if (!fe(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return le.Activity = M, le.Children = Se, le.Component = K, le.Fragment = o, le.Profiler = h, le.PureComponent = te, le.StrictMode = f, le.Suspense = T, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return Y.H.useMemoCache(m);
    }
  }, le.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(m, _, j) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var X = L({}, m.props), P = m.key;
    if (_ != null)
      for (ae in _.key !== void 0 && (P = "" + _.key), _)
        !ce.call(_, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && _.ref === void 0 || (X[ae] = _[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) X.children = j;
    else if (1 < ae) {
      for (var se = Array(ae), Je = 0; Je < ae; Je++)
        se[Je] = arguments[Je + 2];
      X.children = se;
    }
    return ne(m.type, P, X);
  }, le.createContext = function(m) {
    return m = {
      $$typeof: v,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: y,
      _context: m
    }, m;
  }, le.createElement = function(m, _, j) {
    var X, P = {}, ae = null;
    if (_ != null)
      for (X in _.key !== void 0 && (ae = "" + _.key), _)
        ce.call(_, X) && X !== "key" && X !== "__self" && X !== "__source" && (P[X] = _[X]);
    var se = arguments.length - 2;
    if (se === 1) P.children = j;
    else if (1 < se) {
      for (var Je = Array(se), Be = 0; Be < se; Be++)
        Je[Be] = arguments[Be + 2];
      P.children = Je;
    }
    if (m && m.defaultProps)
      for (X in se = m.defaultProps, se)
        P[X] === void 0 && (P[X] = se[X]);
    return ne(m, ae, P);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(m) {
    return { $$typeof: N, render: m };
  }, le.isValidElement = fe, le.lazy = function(m) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: m },
      _init: Z
    };
  }, le.memo = function(m, _) {
    return {
      $$typeof: b,
      type: m,
      compare: _ === void 0 ? null : _
    };
  }, le.startTransition = function(m) {
    var _ = Y.T, j = {};
    Y.T = j;
    try {
      var X = m(), P = Y.S;
      P !== null && P(j, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then($, re);
    } catch (ae) {
      re(ae);
    } finally {
      _ !== null && j.types !== null && (_.types = j.types), Y.T = _;
    }
  }, le.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, le.use = function(m) {
    return Y.H.use(m);
  }, le.useActionState = function(m, _, j) {
    return Y.H.useActionState(m, _, j);
  }, le.useCallback = function(m, _) {
    return Y.H.useCallback(m, _);
  }, le.useContext = function(m) {
    return Y.H.useContext(m);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(m, _) {
    return Y.H.useDeferredValue(m, _);
  }, le.useEffect = function(m, _) {
    return Y.H.useEffect(m, _);
  }, le.useEffectEvent = function(m) {
    return Y.H.useEffectEvent(m);
  }, le.useId = function() {
    return Y.H.useId();
  }, le.useImperativeHandle = function(m, _, j) {
    return Y.H.useImperativeHandle(m, _, j);
  }, le.useInsertionEffect = function(m, _) {
    return Y.H.useInsertionEffect(m, _);
  }, le.useLayoutEffect = function(m, _) {
    return Y.H.useLayoutEffect(m, _);
  }, le.useMemo = function(m, _) {
    return Y.H.useMemo(m, _);
  }, le.useOptimistic = function(m, _) {
    return Y.H.useOptimistic(m, _);
  }, le.useReducer = function(m, _, j) {
    return Y.H.useReducer(m, _, j);
  }, le.useRef = function(m) {
    return Y.H.useRef(m);
  }, le.useState = function(m) {
    return Y.H.useState(m);
  }, le.useSyncExternalStore = function(m, _, j) {
    return Y.H.useSyncExternalStore(
      m,
      _,
      j
    );
  }, le.useTransition = function() {
    return Y.H.useTransition();
  }, le.version = "19.2.0", le;
}
var bh;
function sr() {
  return bh || (bh = 1, kf.exports = jg()), kf.exports;
}
var p = sr(), Jf = { exports: {} }, tu = {}, Wf = { exports: {} }, $f = {};
var Sh;
function Yg() {
  return Sh || (Sh = 1, (function(c) {
    function s(O, B) {
      var Z = O.length;
      O.push(B);
      e: for (; 0 < Z; ) {
        var re = Z - 1 >>> 1, Se = O[re];
        if (0 < h(Se, B))
          O[re] = B, O[Z] = Se, Z = re;
        else break e;
      }
    }
    function o(O) {
      return O.length === 0 ? null : O[0];
    }
    function f(O) {
      if (O.length === 0) return null;
      var B = O[0], Z = O.pop();
      if (Z !== B) {
        O[0] = Z;
        e: for (var re = 0, Se = O.length, m = Se >>> 1; re < m; ) {
          var _ = 2 * (re + 1) - 1, j = O[_], X = _ + 1, P = O[X];
          if (0 > h(j, Z))
            X < Se && 0 > h(P, j) ? (O[re] = P, O[X] = Z, re = X) : (O[re] = j, O[_] = Z, re = _);
          else if (X < Se && 0 > h(P, Z))
            O[re] = P, O[X] = Z, re = X;
          else break e;
        }
      }
      return B;
    }
    function h(O, B) {
      var Z = O.sortIndex - B.sortIndex;
      return Z !== 0 ? Z : O.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      c.unstable_now = function() {
        return y.now();
      };
    } else {
      var v = Date, N = v.now();
      c.unstable_now = function() {
        return v.now() - N;
      };
    }
    var T = [], b = [], H = 1, M = null, w = 3, q = !1, x = !1, L = !1, W = !1, K = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    function he(O) {
      for (var B = o(b); B !== null; ) {
        if (B.callback === null) f(b);
        else if (B.startTime <= O)
          f(b), B.sortIndex = B.expirationTime, s(T, B);
        else break;
        B = o(b);
      }
    }
    function ve(O) {
      if (L = !1, he(O), !x)
        if (o(T) !== null)
          x = !0, $ || ($ = !0, be());
        else {
          var B = o(b);
          B !== null && I(ve, B.startTime - O);
        }
    }
    var $ = !1, Y = -1, ce = 5, ne = -1;
    function ke() {
      return W ? !0 : !(c.unstable_now() - ne < ce);
    }
    function fe() {
      if (W = !1, $) {
        var O = c.unstable_now();
        ne = O;
        var B = !0;
        try {
          e: {
            x = !1, L && (L = !1, ee(Y), Y = -1), q = !0;
            var Z = w;
            try {
              t: {
                for (he(O), M = o(T); M !== null && !(M.expirationTime > O && ke()); ) {
                  var re = M.callback;
                  if (typeof re == "function") {
                    M.callback = null, w = M.priorityLevel;
                    var Se = re(
                      M.expirationTime <= O
                    );
                    if (O = c.unstable_now(), typeof Se == "function") {
                      M.callback = Se, he(O), B = !0;
                      break t;
                    }
                    M === o(T) && f(T), he(O);
                  } else f(T);
                  M = o(T);
                }
                if (M !== null) B = !0;
                else {
                  var m = o(b);
                  m !== null && I(
                    ve,
                    m.startTime - O
                  ), B = !1;
                }
              }
              break e;
            } finally {
              M = null, w = Z, q = !1;
            }
            B = void 0;
          }
        } finally {
          B ? be() : $ = !1;
        }
      }
    }
    var be;
    if (typeof te == "function")
      be = function() {
        te(fe);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), pe = F.port2;
      F.port1.onmessage = fe, be = function() {
        pe.postMessage(null);
      };
    } else
      be = function() {
        K(fe, 0);
      };
    function I(O, B) {
      Y = K(function() {
        O(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, c.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < O ? Math.floor(1e3 / O) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, c.unstable_next = function(O) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = w;
      }
      var Z = w;
      w = B;
      try {
        return O();
      } finally {
        w = Z;
      }
    }, c.unstable_requestPaint = function() {
      W = !0;
    }, c.unstable_runWithPriority = function(O, B) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = w;
      w = O;
      try {
        return B();
      } finally {
        w = Z;
      }
    }, c.unstable_scheduleCallback = function(O, B, Z) {
      var re = c.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? re + Z : re) : Z = re, O) {
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
      return Se = Z + Se, O = {
        id: H++,
        callback: B,
        priorityLevel: O,
        startTime: Z,
        expirationTime: Se,
        sortIndex: -1
      }, Z > re ? (O.sortIndex = Z, s(b, O), o(T) === null && O === o(b) && (L ? (ee(Y), Y = -1) : L = !0, I(ve, Z - re))) : (O.sortIndex = Se, s(T, O), x || q || (x = !0, $ || ($ = !0, be()))), O;
    }, c.unstable_shouldYield = ke, c.unstable_wrapCallback = function(O) {
      var B = w;
      return function() {
        var Z = w;
        w = B;
        try {
          return O.apply(this, arguments);
        } finally {
          w = Z;
        }
      };
    };
  })($f)), $f;
}
var ph;
function Gg() {
  return ph || (ph = 1, Wf.exports = Yg()), Wf.exports;
}
var Ff = { exports: {} }, it = {};
var zh;
function Xg() {
  if (zh) return it;
  zh = 1;
  var c = sr();
  function s(T) {
    var b = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        b += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + T + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var f = {
    d: {
      f: o,
      r: function() {
        throw Error(s(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, h = Symbol.for("react.portal");
  function y(T, b, H) {
    var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: M == null ? null : "" + M,
      children: T,
      containerInfo: b,
      implementation: H
    };
  }
  var v = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(T, b) {
    if (T === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, it.createPortal = function(T, b) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(s(299));
    return y(T, b, null, H);
  }, it.flushSync = function(T) {
    var b = v.T, H = f.p;
    try {
      if (v.T = null, f.p = 2, T) return T();
    } finally {
      v.T = b, f.p = H, f.d.f();
    }
  }, it.preconnect = function(T, b) {
    typeof T == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, f.d.C(T, b));
  }, it.prefetchDNS = function(T) {
    typeof T == "string" && f.d.D(T);
  }, it.preinit = function(T, b) {
    if (typeof T == "string" && b && typeof b.as == "string") {
      var H = b.as, M = N(H, b.crossOrigin), w = typeof b.integrity == "string" ? b.integrity : void 0, q = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      H === "style" ? f.d.S(
        T,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: M,
          integrity: w,
          fetchPriority: q
        }
      ) : H === "script" && f.d.X(T, {
        crossOrigin: M,
        integrity: w,
        fetchPriority: q,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, it.preinitModule = function(T, b) {
    if (typeof T == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var H = N(
            b.as,
            b.crossOrigin
          );
          f.d.M(T, {
            crossOrigin: H,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && f.d.M(T);
  }, it.preload = function(T, b) {
    if (typeof T == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var H = b.as, M = N(H, b.crossOrigin);
      f.d.L(T, H, {
        crossOrigin: M,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, it.preloadModule = function(T, b) {
    if (typeof T == "string")
      if (b) {
        var H = N(b.as, b.crossOrigin);
        f.d.m(T, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: H,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else f.d.m(T);
  }, it.requestFormReset = function(T) {
    f.d.r(T);
  }, it.unstable_batchedUpdates = function(T, b) {
    return T(b);
  }, it.useFormState = function(T, b, H) {
    return v.H.useFormState(T, b, H);
  }, it.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, it.version = "19.2.0", it;
}
var Eh;
function Lh() {
  if (Eh) return Ff.exports;
  Eh = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Ff.exports = Xg(), Ff.exports;
}
var Ah;
function Qg() {
  if (Ah) return tu;
  Ah = 1;
  var c = Gg(), s = sr(), o = Lh();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function y(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (y(e) !== e)
      throw Error(f(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = y(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var a = l.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === l) return T(a), e;
          if (u === n) return T(a), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== n.return) l = a, n = u;
      else {
        for (var i = !1, r = a.child; r; ) {
          if (r === l) {
            i = !0, l = a, n = u;
            break;
          }
          if (r === n) {
            i = !0, n = a, l = u;
            break;
          }
          r = r.sibling;
        }
        if (!i) {
          for (r = u.child; r; ) {
            if (r === l) {
              i = !0, l = u, n = a;
              break;
            }
            if (r === n) {
              i = !0, n = u, l = a;
              break;
            }
            r = r.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function H(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = H(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var M = Object.assign, w = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), te = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), ke = Symbol.for("react.memo_cache_sentinel"), fe = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != "object" ? null : (e = fe && e[fe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Symbol.for("react.client.reference");
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case K:
        return "Profiler";
      case W:
        return "StrictMode";
      case ve:
        return "Suspense";
      case $:
        return "SuspenseList";
      case ne:
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
        case Y:
          return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return pe(e(t));
          } catch {
          }
      }
    return null;
  }
  var I = Array.isArray, O = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], Se = -1;
  function m(e) {
    return { current: e };
  }
  function _(e) {
    0 > Se || (e.current = re[Se], re[Se] = null, Se--);
  }
  function j(e, t) {
    Se++, re[Se] = e.current, e.current = t;
  }
  var X = m(null), P = m(null), ae = m(null), se = m(null);
  function Je(e, t) {
    switch (j(ae, t), j(P, e), j(X, null), t.nodeType) {
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
  function Be() {
    _(X), _(P), _(ae);
  }
  function Zt(e) {
    e.memoizedState !== null && j(se, e);
    var t = X.current, l = jd(t, e.type);
    t !== l && (j(P, e), j(X, l));
  }
  function mn(e) {
    P.current === e && (_(X), _(P)), se.current === e && (_(se), $a._currentValue = Z);
  }
  var gn, fu;
  function Kt(e) {
    if (gn === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        gn = t && t[1] || "", fu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + gn + e + fu;
  }
  var kt = !1;
  function vn(e, t) {
    if (!e || kt) return "";
    kt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (D) {
                  var A = D;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (D) {
                  A = D;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                A = D;
              }
              (U = e()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (D) {
            if (D && A && typeof D.stack == "string")
              return [D.stack, A.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), i = u[0], r = u[1];
      if (i && r) {
        var d = i.split(`
`), E = r.split(`
`);
        for (a = n = 0; n < d.length && !d[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < E.length && !E[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === d.length || a === E.length)
          for (n = d.length - 1, a = E.length - 1; 1 <= n && 0 <= a && d[n] !== E[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (d[n] !== E[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || d[n] !== E[a]) {
                  var R = `
` + d[n].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      kt = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Kt(l) : "";
  }
  function Ci(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Kt(e.type);
      case 16:
        return Kt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Kt("Suspense Fallback") : Kt("Suspense");
      case 19:
        return Kt("SuspenseList");
      case 0:
      case 15:
        return vn(e.type, !1);
      case 11:
        return vn(e.type.render, !1);
      case 1:
        return vn(e.type, !0);
      case 31:
        return Kt("Activity");
      default:
        return "";
    }
  }
  function ua(e) {
    try {
      var t = "", l = null;
      do
        t += Ci(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var yn = Object.prototype.hasOwnProperty, ia = c.unstable_scheduleCallback, G = c.unstable_cancelCallback, Ce = c.unstable_shouldYield, Ie = c.unstable_requestPaint, xe = c.unstable_now, rt = c.unstable_getCurrentPriorityLevel, ml = c.unstable_ImmediatePriority, Ql = c.unstable_UserBlockingPriority, Jt = c.unstable_NormalPriority, ca = c.unstable_LowPriority, bt = c.unstable_IdlePriority, fa = c.log, Vl = c.unstable_setDisableYieldValue, gl = null, et = null;
  function vl(e) {
    if (typeof fa == "function" && Vl(e), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(gl, e);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : Am, zm = Math.log, Em = Math.LN2;
  function Am(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zm(e) / Em | 0) | 0;
  }
  var ru = 256, su = 262144, ou = 4194304;
  function Zl(e) {
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
  function du(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var r = n & 134217727;
    return r !== 0 ? (n = r & ~u, n !== 0 ? a = Zl(n) : (i &= r, i !== 0 ? a = Zl(i) : l || (l = r & ~e, l !== 0 && (a = Zl(l))))) : (r = n & ~u, r !== 0 ? a = Zl(r) : i !== 0 ? a = Zl(i) : l || (l = n & ~e, l !== 0 && (a = Zl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ra(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Tm(e, t) {
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
  function br() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Ui(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function sa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function _m(e, t, l, n, a, u) {
    var i = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var r = e.entanglements, d = e.expirationTimes, E = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var R = 31 - St(l), U = 1 << R;
      r[R] = 0, d[R] = -1;
      var A = E[R];
      if (A !== null)
        for (E[R] = null, R = 0; R < A.length; R++) {
          var D = A[R];
          D !== null && (D.lane &= -536870913);
        }
      l &= ~U;
    }
    n !== 0 && Sr(e, n, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
  }
  function Sr(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - St(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function pr(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - St(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function zr(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Hi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Hi(e) {
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
  function Bi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Er() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fh(e.type));
  }
  function Ar(e, t) {
    var l = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = l;
    }
  }
  var yl = Math.random().toString(36).slice(2), tt = "__reactFiber$" + yl, st = "__reactProps$" + yl, bn = "__reactContainer$" + yl, xi = "__reactEvents$" + yl, Mm = "__reactListeners$" + yl, Om = "__reactHandles$" + yl, Tr = "__reactResources$" + yl, oa = "__reactMarker$" + yl;
  function Li(e) {
    delete e[tt], delete e[st], delete e[xi], delete e[Mm], delete e[Om];
  }
  function Sn(e) {
    var t = e[tt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[bn] || l[tt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Kd(e); e !== null; ) {
            if (l = e[tt]) return l;
            e = Kd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function pn(e) {
    if (e = e[tt] || e[bn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function da(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function zn(e) {
    var t = e[Tr];
    return t || (t = e[Tr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[oa] = !0;
  }
  var _r = /* @__PURE__ */ new Set(), Mr = {};
  function Kl(e, t) {
    En(e, t), En(e + "Capture", t);
  }
  function En(e, t) {
    for (Mr[e] = t, e = 0; e < t.length; e++)
      _r.add(t[e]);
  }
  var Nm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Or = {}, Nr = {};
  function Dm(e) {
    return yn.call(Nr, e) ? !0 : yn.call(Or, e) ? !1 : Nm.test(e) ? Nr[e] = !0 : (Or[e] = !0, !1);
  }
  function hu(e, t, l) {
    if (Dm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function mu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Wt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function Ot(e) {
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
  function Dr(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function wm(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function qi(e) {
    if (!e._valueTracker) {
      var t = Dr(e) ? "checked" : "value";
      e._valueTracker = wm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function wr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Dr(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function gu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Rm = /[\n"\\]/g;
  function Nt(e) {
    return e.replace(
      Rm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ji(e, t, l, n, a, u, i, r) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? Yi(e, i, Ot(t)) : l != null ? Yi(e, i, Ot(l)) : n != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Ot(r) : e.removeAttribute("name");
  }
  function Rr(e, t, l, n, a, u, i, r) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        qi(e);
        return;
      }
      l = l != null ? "" + Ot(l) : "", t = t != null ? "" + Ot(t) : l, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = r ? e.checked : !!n, e.defaultChecked = !!n, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), qi(e);
  }
  function Yi(e, t, l) {
    t === "number" && gu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function An(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ot(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cr(e, t, l) {
    if (t != null && (t = "" + Ot(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ot(l) : "";
  }
  function Ur(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (I(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = Ot(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), qi(e);
  }
  function Tn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hr(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Cm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Br(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && Hr(e, a, n);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Hr(e, u, t[u]);
  }
  function Gi(e) {
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
  ]), Hm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vu(e) {
    return Hm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $t() {
  }
  var Xi = null;
  function Qi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var _n = null, Mn = null;
  function xr(e) {
    var t = pn(e);
    if (t && (e = t.stateNode)) {
      var l = e[st] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ji(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Nt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[st] || null;
                if (!a) throw Error(f(90));
                ji(
                  n,
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
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && wr(n);
          }
          break e;
        case "textarea":
          Cr(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && An(e, !!l.multiple, t, !1);
      }
    }
  }
  var Vi = !1;
  function Lr(e, t, l) {
    if (Vi) return e(t, l);
    Vi = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Vi = !1, (_n !== null || Mn !== null) && (ni(), _n && (t = _n, e = Mn, Mn = _n = null, xr(t), e)))
        for (t = 0; t < e.length; t++) xr(e[t]);
    }
  }
  function ha(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[st] || null;
    if (n === null) return null;
    l = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, t, typeof l)
      );
    return l;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zi = !1;
  if (Ft)
    try {
      var ma = {};
      Object.defineProperty(ma, "passive", {
        get: function() {
          Zi = !0;
        }
      }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma);
    } catch {
      Zi = !1;
    }
  var bl = null, Ki = null, yu = null;
  function qr() {
    if (yu) return yu;
    var e, t = Ki, l = t.length, n, a = "value" in bl ? bl.value : bl.textContent, u = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var i = l - e;
    for (n = 1; n <= i && t[l - n] === a[u - n]; n++) ;
    return yu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function bu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Su() {
    return !0;
  }
  function jr() {
    return !1;
  }
  function ot(e) {
    function t(l, n, a, u, i) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var r in e)
        e.hasOwnProperty(r) && (l = e[r], this[r] = l ? l(u) : u[r]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Su : jr, this.isPropagationStopped = jr, this;
    }
    return M(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Su);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Su);
      },
      persist: function() {
      },
      isPersistent: Su
    }), t;
  }
  var kl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pu = ot(kl), ga = M({}, kl, { view: 0, detail: 0 }), Bm = ot(ga), ki, Ji, va, zu = M({}, ga, {
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
      return "movementX" in e ? e.movementX : (e !== va && (va && e.type === "mousemove" ? (ki = e.screenX - va.screenX, Ji = e.screenY - va.screenY) : Ji = ki = 0, va = e), ki);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ji;
    }
  }), Yr = ot(zu), xm = M({}, zu, { dataTransfer: 0 }), Lm = ot(xm), qm = M({}, ga, { relatedTarget: 0 }), Wi = ot(qm), jm = M({}, kl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ym = ot(jm), Gm = M({}, kl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xm = ot(Gm), Qm = M({}, kl, { data: 0 }), Gr = ot(Qm), Vm = {
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
  }, Zm = {
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
  }, Km = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function km(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Km[e]) ? !!t[e] : !1;
  }
  function $i() {
    return km;
  }
  var Jm = M({}, ga, {
    key: function(e) {
      if (e.key) {
        var t = Vm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = bu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zm[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? bu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wm = ot(Jm), $m = M({}, zu, {
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
  }), Xr = ot($m), Fm = M({}, ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $i
  }), Pm = ot(Fm), Im = M({}, kl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), e0 = ot(Im), t0 = M({}, zu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), l0 = ot(t0), n0 = M({}, kl, {
    newState: 0,
    oldState: 0
  }), a0 = ot(n0), u0 = [9, 13, 27, 32], Fi = Ft && "CompositionEvent" in window, ya = null;
  Ft && "documentMode" in document && (ya = document.documentMode);
  var i0 = Ft && "TextEvent" in window && !ya, Qr = Ft && (!Fi || ya && 8 < ya && 11 >= ya), Vr = " ", Zr = !1;
  function Kr(e, t) {
    switch (e) {
      case "keyup":
        return u0.indexOf(t.keyCode) !== -1;
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
  function kr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var On = !1;
  function c0(e, t) {
    switch (e) {
      case "compositionend":
        return kr(t);
      case "keypress":
        return t.which !== 32 ? null : (Zr = !0, Vr);
      case "textInput":
        return e = t.data, e === Vr && Zr ? null : e;
      default:
        return null;
    }
  }
  function f0(e, t) {
    if (On)
      return e === "compositionend" || !Fi && Kr(e, t) ? (e = qr(), yu = Ki = bl = null, On = !1, e) : null;
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
        return Qr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var r0 = {
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
  function Jr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!r0[e.type] : t === "textarea";
  }
  function Wr(e, t, l, n) {
    _n ? Mn ? Mn.push(n) : Mn = [n] : _n = n, t = si(t, "onChange"), 0 < t.length && (l = new pu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var ba = null, Sa = null;
  function s0(e) {
    Cd(e, 0);
  }
  function Eu(e) {
    var t = da(e);
    if (wr(t)) return e;
  }
  function $r(e, t) {
    if (e === "change") return t;
  }
  var Fr = !1;
  if (Ft) {
    var Pi;
    if (Ft) {
      var Ii = "oninput" in document;
      if (!Ii) {
        var Pr = document.createElement("div");
        Pr.setAttribute("oninput", "return;"), Ii = typeof Pr.oninput == "function";
      }
      Pi = Ii;
    } else Pi = !1;
    Fr = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ir() {
    ba && (ba.detachEvent("onpropertychange", es), Sa = ba = null);
  }
  function es(e) {
    if (e.propertyName === "value" && Eu(Sa)) {
      var t = [];
      Wr(
        t,
        Sa,
        e,
        Qi(e)
      ), Lr(s0, t);
    }
  }
  function o0(e, t, l) {
    e === "focusin" ? (Ir(), ba = t, Sa = l, ba.attachEvent("onpropertychange", es)) : e === "focusout" && Ir();
  }
  function d0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Eu(Sa);
  }
  function h0(e, t) {
    if (e === "click") return Eu(t);
  }
  function m0(e, t) {
    if (e === "input" || e === "change")
      return Eu(t);
  }
  function g0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var pt = typeof Object.is == "function" ? Object.is : g0;
  function pa(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!yn.call(t, a) || !pt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function ts(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ls(e, t) {
    var l = ts(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ts(l);
    }
  }
  function ns(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ns(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function as(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = gu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = gu(e.document);
    }
    return t;
  }
  function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var v0 = Ft && "documentMode" in document && 11 >= document.documentMode, Nn = null, tc = null, za = null, lc = !1;
  function us(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    lc || Nn == null || Nn !== gu(n) || (n = Nn, "selectionStart" in n && ec(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), za && pa(za, n) || (za = n, n = si(tc, "onSelect"), 0 < n.length && (t = new pu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = Nn)));
  }
  function Jl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Dn = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionrun: Jl("Transition", "TransitionRun"),
    transitionstart: Jl("Transition", "TransitionStart"),
    transitioncancel: Jl("Transition", "TransitionCancel"),
    transitionend: Jl("Transition", "TransitionEnd")
  }, nc = {}, is = {};
  Ft && (is = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
  function Wl(e) {
    if (nc[e]) return nc[e];
    if (!Dn[e]) return e;
    var t = Dn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in is)
        return nc[e] = t[l];
    return e;
  }
  var cs = Wl("animationend"), fs = Wl("animationiteration"), rs = Wl("animationstart"), y0 = Wl("transitionrun"), b0 = Wl("transitionstart"), S0 = Wl("transitioncancel"), ss = Wl("transitionend"), os = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function Lt(e, t) {
    os.set(e, t), Kl(t, [e]);
  }
  var Au = typeof reportError == "function" ? reportError : function(e) {
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
  }, Dt = [], wn = 0, uc = 0;
  function Tu() {
    for (var e = wn, t = uc = wn = 0; t < e; ) {
      var l = Dt[t];
      Dt[t++] = null;
      var n = Dt[t];
      Dt[t++] = null;
      var a = Dt[t];
      Dt[t++] = null;
      var u = Dt[t];
      if (Dt[t++] = null, n !== null && a !== null) {
        var i = n.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), n.pending = a;
      }
      u !== 0 && ds(l, a, u);
    }
  }
  function _u(e, t, l, n) {
    Dt[wn++] = e, Dt[wn++] = t, Dt[wn++] = l, Dt[wn++] = n, uc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function ic(e, t, l, n) {
    return _u(e, t, l, n), Mu(e);
  }
  function $l(e, t) {
    return _u(e, null, null, t), Mu(e);
  }
  function ds(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= l, n = u.alternate, n !== null && (n.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - St(l), e = u.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), u) : null;
  }
  function Mu(e) {
    if (50 < Qa)
      throw Qa = 0, vf = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rn = {};
  function p0(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, l, n) {
    return new p0(e, t, l, n);
  }
  function cc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pt(e, t) {
    var l = e.alternate;
    return l === null ? (l = zt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function hs(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, l, n, a, u) {
    var i = 0;
    if (n = e, typeof e == "function") cc(e) && (i = 1);
    else if (typeof e == "string")
      i = _g(
        e,
        l,
        X.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ne:
          return e = zt(31, l, t, a), e.elementType = ne, e.lanes = u, e;
        case L:
          return Fl(l.children, a, u, t);
        case W:
          i = 8, a |= 24;
          break;
        case K:
          return e = zt(12, l, t, a | 2), e.elementType = K, e.lanes = u, e;
        case ve:
          return e = zt(13, l, t, a), e.elementType = ve, e.lanes = u, e;
        case $:
          return e = zt(19, l, t, a), e.elementType = $, e.lanes = u, e;
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
              case Y:
                i = 14;
                break e;
              case ce:
                i = 16, n = null;
                break e;
            }
          i = 29, l = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = zt(i, l, t, a), t.elementType = e, t.type = n, t.lanes = u, t;
  }
  function Fl(e, t, l, n) {
    return e = zt(7, e, n, t), e.lanes = l, e;
  }
  function fc(e, t, l) {
    return e = zt(6, e, null, t), e.lanes = l, e;
  }
  function ms(e) {
    var t = zt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function rc(e, t, l) {
    return t = zt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var gs = /* @__PURE__ */ new WeakMap();
  function wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = gs.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: ua(t)
      }, gs.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ua(t)
    };
  }
  var Cn = [], Un = 0, Nu = null, Ea = 0, Rt = [], Ct = 0, Sl = null, Gt = 1, Xt = "";
  function It(e, t) {
    Cn[Un++] = Ea, Cn[Un++] = Nu, Nu = e, Ea = t;
  }
  function vs(e, t, l) {
    Rt[Ct++] = Gt, Rt[Ct++] = Xt, Rt[Ct++] = Sl, Sl = e;
    var n = Gt;
    e = Xt;
    var a = 32 - St(n) - 1;
    n &= ~(1 << a), l += 1;
    var u = 32 - St(t) + a;
    if (30 < u) {
      var i = a - a % 5;
      u = (n & (1 << i) - 1).toString(32), n >>= i, a -= i, Gt = 1 << 32 - St(t) + a | l << a | n, Xt = u + e;
    } else
      Gt = 1 << u | l << a | n, Xt = e;
  }
  function sc(e) {
    e.return !== null && (It(e, 1), vs(e, 1, 0));
  }
  function oc(e) {
    for (; e === Nu; )
      Nu = Cn[--Un], Cn[Un] = null, Ea = Cn[--Un], Cn[Un] = null;
    for (; e === Sl; )
      Sl = Rt[--Ct], Rt[Ct] = null, Xt = Rt[--Ct], Rt[Ct] = null, Gt = Rt[--Ct], Rt[Ct] = null;
  }
  function ys(e, t) {
    Rt[Ct++] = Gt, Rt[Ct++] = Xt, Rt[Ct++] = Sl, Gt = t.id, Xt = t.overflow, Sl = e;
  }
  var lt = null, Ue = null, ye = !1, pl = null, Ut = !1, dc = Error(f(519));
  function zl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Aa(wt(t, e)), dc;
  }
  function bs(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[tt] = e, t[st] = n, l) {
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
        for (l = 0; l < Za.length; l++)
          de(Za[l], t);
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
        de("invalid", t), Rr(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Ur(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || xd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || zl(e, !0);
  }
  function Ss(e) {
    for (lt = e.return; lt; )
      switch (lt.tag) {
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
          lt = lt.return;
      }
  }
  function Hn(e) {
    if (e !== lt) return !1;
    if (!ye) return Ss(e), ye = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Rf(e.type, e.memoizedProps)), l = !l), l && Ue && zl(e), Ss(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ue = Zd(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      Ue = Zd(e);
    } else
      t === 27 ? (t = Ue, Bl(e.type) ? (e = xf, xf = null, Ue = e) : Ue = t) : Ue = lt ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pl() {
    Ue = lt = null, ye = !1;
  }
  function hc() {
    var e = pl;
    return e !== null && (gt === null ? gt = e : gt.push.apply(
      gt,
      e
    ), pl = null), e;
  }
  function Aa(e) {
    pl === null ? pl = [e] : pl.push(e);
  }
  var mc = m(null), Il = null, el = null;
  function El(e, t, l) {
    j(mc, t._currentValue), t._currentValue = l;
  }
  function tl(e) {
    e._currentValue = mc.current, _(mc);
  }
  function gc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function vc(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = a;
          for (var d = 0; d < t.length; d++)
            if (r.context === t[d]) {
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), gc(
                u.return,
                l,
                e
              ), n || (i = null);
              break e;
            }
          u = r.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(f(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), gc(i, l, e), i = null;
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
  function Bn(e, t, l, n) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var r = a.type;
          pt(a.pendingProps.value, i.value) || (e !== null ? e.push(r) : e = [r]);
        }
      } else if (a === se.current) {
        if (i = a.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push($a) : e = [$a]);
      }
      a = a.return;
    }
    e !== null && vc(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function Du(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function en(e) {
    Il = e, el = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function nt(e) {
    return ps(Il, e);
  }
  function wu(e, t) {
    return Il === null && en(e), ps(e, t);
  }
  function ps(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, el === null) {
      if (e === null) throw Error(f(308));
      el = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else el = el.next = t;
    return l;
  }
  var z0 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, E0 = c.unstable_scheduleCallback, A0 = c.unstable_NormalPriority, Xe = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new z0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ta(e) {
    e.refCount--, e.refCount === 0 && E0(A0, function() {
      e.controller.abort();
    });
  }
  var _a = null, bc = 0, xn = 0, Ln = null;
  function T0(e, t) {
    if (_a === null) {
      var l = _a = [];
      bc = 0, xn = Ef(), Ln = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return bc++, t.then(zs, zs), t;
  }
  function zs() {
    if (--bc === 0 && _a !== null) {
      Ln !== null && (Ln.status = "fulfilled");
      var e = _a;
      _a = null, xn = 0, Ln = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function _0(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Es = O.S;
  O.S = function(e, t) {
    id = xe(), typeof t == "object" && t !== null && typeof t.then == "function" && T0(e, t), Es !== null && Es(e, t);
  };
  var tn = m(null);
  function Sc() {
    var e = tn.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Ru(e, t) {
    t === null ? j(tn, tn.current) : j(tn, t.pool);
  }
  function As() {
    var e = Sc();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var qn = Error(f(460)), pc = Error(f(474)), Cu = Error(f(542)), Uu = { then: function() {
  } };
  function Ts(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _s(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then($t, $t), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Os(e), e;
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Os(e), e;
        }
        throw nn = t, qn;
    }
  }
  function ln(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (nn = l, qn) : l;
    }
  }
  var nn = null;
  function Ms() {
    if (nn === null) throw Error(f(459));
    var e = nn;
    return nn = null, e;
  }
  function Os(e) {
    if (e === qn || e === Cu)
      throw Error(f(483));
  }
  var jn = null, Ma = 0;
  function Hu(e) {
    var t = Ma;
    return Ma += 1, jn === null && (jn = []), _s(jn, e, t);
  }
  function Oa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Bu(e, t) {
    throw t.$$typeof === w ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ns(e) {
    function t(S, g) {
      if (e) {
        var z = S.deletions;
        z === null ? (S.deletions = [g], S.flags |= 16) : z.push(g);
      }
    }
    function l(S, g) {
      if (!e) return null;
      for (; g !== null; )
        t(S, g), g = g.sibling;
      return null;
    }
    function n(S) {
      for (var g = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? g.set(S.key, S) : g.set(S.index, S), S = S.sibling;
      return g;
    }
    function a(S, g) {
      return S = Pt(S, g), S.index = 0, S.sibling = null, S;
    }
    function u(S, g, z) {
      return S.index = z, e ? (z = S.alternate, z !== null ? (z = z.index, z < g ? (S.flags |= 67108866, g) : z) : (S.flags |= 67108866, g)) : (S.flags |= 1048576, g);
    }
    function i(S) {
      return e && S.alternate === null && (S.flags |= 67108866), S;
    }
    function r(S, g, z, C) {
      return g === null || g.tag !== 6 ? (g = fc(z, S.mode, C), g.return = S, g) : (g = a(g, z), g.return = S, g);
    }
    function d(S, g, z, C) {
      var k = z.type;
      return k === L ? R(
        S,
        g,
        z.props.children,
        C,
        z.key
      ) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ce && ln(k) === g.type) ? (g = a(g, z.props), Oa(g, z), g.return = S, g) : (g = Ou(
        z.type,
        z.key,
        z.props,
        null,
        S.mode,
        C
      ), Oa(g, z), g.return = S, g);
    }
    function E(S, g, z, C) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== z.containerInfo || g.stateNode.implementation !== z.implementation ? (g = rc(z, S.mode, C), g.return = S, g) : (g = a(g, z.children || []), g.return = S, g);
    }
    function R(S, g, z, C, k) {
      return g === null || g.tag !== 7 ? (g = Fl(
        z,
        S.mode,
        C,
        k
      ), g.return = S, g) : (g = a(g, z), g.return = S, g);
    }
    function U(S, g, z) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = fc(
          "" + g,
          S.mode,
          z
        ), g.return = S, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case q:
            return z = Ou(
              g.type,
              g.key,
              g.props,
              null,
              S.mode,
              z
            ), Oa(z, g), z.return = S, z;
          case x:
            return g = rc(
              g,
              S.mode,
              z
            ), g.return = S, g;
          case ce:
            return g = ln(g), U(S, g, z);
        }
        if (I(g) || be(g))
          return g = Fl(
            g,
            S.mode,
            z,
            null
          ), g.return = S, g;
        if (typeof g.then == "function")
          return U(S, Hu(g), z);
        if (g.$$typeof === te)
          return U(
            S,
            wu(S, g),
            z
          );
        Bu(S, g);
      }
      return null;
    }
    function A(S, g, z, C) {
      var k = g !== null ? g.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return k !== null ? null : r(S, g, "" + z, C);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            return z.key === k ? d(S, g, z, C) : null;
          case x:
            return z.key === k ? E(S, g, z, C) : null;
          case ce:
            return z = ln(z), A(S, g, z, C);
        }
        if (I(z) || be(z))
          return k !== null ? null : R(S, g, z, C, null);
        if (typeof z.then == "function")
          return A(
            S,
            g,
            Hu(z),
            C
          );
        if (z.$$typeof === te)
          return A(
            S,
            g,
            wu(S, z),
            C
          );
        Bu(S, z);
      }
      return null;
    }
    function D(S, g, z, C, k) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return S = S.get(z) || null, r(g, S, "" + C, k);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return S = S.get(
              C.key === null ? z : C.key
            ) || null, d(g, S, C, k);
          case x:
            return S = S.get(
              C.key === null ? z : C.key
            ) || null, E(g, S, C, k);
          case ce:
            return C = ln(C), D(
              S,
              g,
              z,
              C,
              k
            );
        }
        if (I(C) || be(C))
          return S = S.get(z) || null, R(g, S, C, k, null);
        if (typeof C.then == "function")
          return D(
            S,
            g,
            z,
            Hu(C),
            k
          );
        if (C.$$typeof === te)
          return D(
            S,
            g,
            z,
            wu(g, C),
            k
          );
        Bu(g, C);
      }
      return null;
    }
    function Q(S, g, z, C) {
      for (var k = null, Ee = null, V = g, ie = g = 0, ge = null; V !== null && ie < z.length; ie++) {
        V.index > ie ? (ge = V, V = null) : ge = V.sibling;
        var Ae = A(
          S,
          V,
          z[ie],
          C
        );
        if (Ae === null) {
          V === null && (V = ge);
          break;
        }
        e && V && Ae.alternate === null && t(S, V), g = u(Ae, g, ie), Ee === null ? k = Ae : Ee.sibling = Ae, Ee = Ae, V = ge;
      }
      if (ie === z.length)
        return l(S, V), ye && It(S, ie), k;
      if (V === null) {
        for (; ie < z.length; ie++)
          V = U(S, z[ie], C), V !== null && (g = u(
            V,
            g,
            ie
          ), Ee === null ? k = V : Ee.sibling = V, Ee = V);
        return ye && It(S, ie), k;
      }
      for (V = n(V); ie < z.length; ie++)
        ge = D(
          V,
          S,
          ie,
          z[ie],
          C
        ), ge !== null && (e && ge.alternate !== null && V.delete(
          ge.key === null ? ie : ge.key
        ), g = u(
          ge,
          g,
          ie
        ), Ee === null ? k = ge : Ee.sibling = ge, Ee = ge);
      return e && V.forEach(function(Yl) {
        return t(S, Yl);
      }), ye && It(S, ie), k;
    }
    function J(S, g, z, C) {
      if (z == null) throw Error(f(151));
      for (var k = null, Ee = null, V = g, ie = g = 0, ge = null, Ae = z.next(); V !== null && !Ae.done; ie++, Ae = z.next()) {
        V.index > ie ? (ge = V, V = null) : ge = V.sibling;
        var Yl = A(S, V, Ae.value, C);
        if (Yl === null) {
          V === null && (V = ge);
          break;
        }
        e && V && Yl.alternate === null && t(S, V), g = u(Yl, g, ie), Ee === null ? k = Yl : Ee.sibling = Yl, Ee = Yl, V = ge;
      }
      if (Ae.done)
        return l(S, V), ye && It(S, ie), k;
      if (V === null) {
        for (; !Ae.done; ie++, Ae = z.next())
          Ae = U(S, Ae.value, C), Ae !== null && (g = u(Ae, g, ie), Ee === null ? k = Ae : Ee.sibling = Ae, Ee = Ae);
        return ye && It(S, ie), k;
      }
      for (V = n(V); !Ae.done; ie++, Ae = z.next())
        Ae = D(V, S, ie, Ae.value, C), Ae !== null && (e && Ae.alternate !== null && V.delete(Ae.key === null ? ie : Ae.key), g = u(Ae, g, ie), Ee === null ? k = Ae : Ee.sibling = Ae, Ee = Ae);
      return e && V.forEach(function(xg) {
        return t(S, xg);
      }), ye && It(S, ie), k;
    }
    function we(S, g, z, C) {
      if (typeof z == "object" && z !== null && z.type === L && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            e: {
              for (var k = z.key; g !== null; ) {
                if (g.key === k) {
                  if (k = z.type, k === L) {
                    if (g.tag === 7) {
                      l(
                        S,
                        g.sibling
                      ), C = a(
                        g,
                        z.props.children
                      ), C.return = S, S = C;
                      break e;
                    }
                  } else if (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ce && ln(k) === g.type) {
                    l(
                      S,
                      g.sibling
                    ), C = a(g, z.props), Oa(C, z), C.return = S, S = C;
                    break e;
                  }
                  l(S, g);
                  break;
                } else t(S, g);
                g = g.sibling;
              }
              z.type === L ? (C = Fl(
                z.props.children,
                S.mode,
                C,
                z.key
              ), C.return = S, S = C) : (C = Ou(
                z.type,
                z.key,
                z.props,
                null,
                S.mode,
                C
              ), Oa(C, z), C.return = S, S = C);
            }
            return i(S);
          case x:
            e: {
              for (k = z.key; g !== null; ) {
                if (g.key === k)
                  if (g.tag === 4 && g.stateNode.containerInfo === z.containerInfo && g.stateNode.implementation === z.implementation) {
                    l(
                      S,
                      g.sibling
                    ), C = a(g, z.children || []), C.return = S, S = C;
                    break e;
                  } else {
                    l(S, g);
                    break;
                  }
                else t(S, g);
                g = g.sibling;
              }
              C = rc(z, S.mode, C), C.return = S, S = C;
            }
            return i(S);
          case ce:
            return z = ln(z), we(
              S,
              g,
              z,
              C
            );
        }
        if (I(z))
          return Q(
            S,
            g,
            z,
            C
          );
        if (be(z)) {
          if (k = be(z), typeof k != "function") throw Error(f(150));
          return z = k.call(z), J(
            S,
            g,
            z,
            C
          );
        }
        if (typeof z.then == "function")
          return we(
            S,
            g,
            Hu(z),
            C
          );
        if (z.$$typeof === te)
          return we(
            S,
            g,
            wu(S, z),
            C
          );
        Bu(S, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, g !== null && g.tag === 6 ? (l(S, g.sibling), C = a(g, z), C.return = S, S = C) : (l(S, g), C = fc(z, S.mode, C), C.return = S, S = C), i(S)) : l(S, g);
    }
    return function(S, g, z, C) {
      try {
        Ma = 0;
        var k = we(
          S,
          g,
          z,
          C
        );
        return jn = null, k;
      } catch (V) {
        if (V === qn || V === Cu) throw V;
        var Ee = zt(29, V, null, S.mode);
        return Ee.lanes = C, Ee.return = S, Ee;
      } finally {
      }
    };
  }
  var an = Ns(!0), Ds = Ns(!1), Al = !1;
  function zc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Tl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Te & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Mu(e), ds(e, null, l), t;
    }
    return _u(e, n, t, l), Mu(e);
  }
  function Na(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, pr(e, l);
    }
  }
  function Ac(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Tc = !1;
  function Da() {
    if (Tc) {
      var e = Ln;
      if (e !== null) throw e;
    }
  }
  function wa(e, t, l, n) {
    Tc = !1;
    var a = e.updateQueue;
    Al = !1;
    var u = a.firstBaseUpdate, i = a.lastBaseUpdate, r = a.shared.pending;
    if (r !== null) {
      a.shared.pending = null;
      var d = r, E = d.next;
      d.next = null, i === null ? u = E : i.next = E, i = d;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, r = R.lastBaseUpdate, r !== i && (r === null ? R.firstBaseUpdate = E : r.next = E, R.lastBaseUpdate = d));
    }
    if (u !== null) {
      var U = a.baseState;
      i = 0, R = E = d = null, r = u;
      do {
        var A = r.lane & -536870913, D = A !== r.lane;
        if (D ? (me & A) === A : (n & A) === A) {
          A !== 0 && A === xn && (Tc = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, J = r;
            A = t;
            var we = l;
            switch (J.tag) {
              case 1:
                if (Q = J.payload, typeof Q == "function") {
                  U = Q.call(we, U, A);
                  break e;
                }
                U = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = J.payload, A = typeof Q == "function" ? Q.call(we, U, A) : Q, A == null) break e;
                U = M({}, U, A);
                break e;
              case 2:
                Al = !0;
            }
          }
          A = r.callback, A !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [A] : D.push(A));
        } else
          D = {
            lane: A,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, R === null ? (E = R = D, d = U) : R = R.next = D, i |= A;
        if (r = r.next, r === null) {
          if (r = a.shared.pending, r === null)
            break;
          D = r, r = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
        }
      } while (!0);
      R === null && (d = U), a.baseState = d, a.firstBaseUpdate = E, a.lastBaseUpdate = R, u === null && (a.shared.lanes = 0), wl |= i, e.lanes = i, e.memoizedState = U;
    }
  }
  function ws(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Rs(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        ws(l[e], t);
  }
  var Yn = m(null), xu = m(0);
  function Cs(e, t) {
    e = sl, j(xu, e), j(Yn, t), sl = e | t.baseLanes;
  }
  function _c() {
    j(xu, sl), j(Yn, Yn.current);
  }
  function Mc() {
    sl = xu.current, _(Yn), _(xu);
  }
  var Et = m(null), Ht = null;
  function Ml(e) {
    var t = e.alternate;
    j(Ye, Ye.current & 1), j(Et, e), Ht === null && (t === null || Yn.current !== null || t.memoizedState !== null) && (Ht = e);
  }
  function Oc(e) {
    j(Ye, Ye.current), j(Et, e), Ht === null && (Ht = e);
  }
  function Us(e) {
    e.tag === 22 ? (j(Ye, Ye.current), j(Et, e), Ht === null && (Ht = e)) : Ol();
  }
  function Ol() {
    j(Ye, Ye.current), j(Et, Et.current);
  }
  function At(e) {
    _(Et), Ht === e && (Ht = null), _(Ye);
  }
  var Ye = m(0);
  function Lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Hf(l) || Bf(l)))
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
  var ll = 0, ue = null, Ne = null, Qe = null, qu = !1, Gn = !1, un = !1, ju = 0, Ra = 0, Xn = null, M0 = 0;
  function qe() {
    throw Error(f(321));
  }
  function Nc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!pt(e[l], t[l])) return !1;
    return !0;
  }
  function Dc(e, t, l, n, a, u) {
    return ll = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? yo : Vc, un = !1, u = l(n, a), un = !1, Gn && (u = Bs(
      t,
      l,
      n,
      a
    )), Hs(e), u;
  }
  function Hs(e) {
    O.H = Ha;
    var t = Ne !== null && Ne.next !== null;
    if (ll = 0, Qe = Ne = ue = null, qu = !1, Ra = 0, Xn = null, t) throw Error(f(300));
    e === null || Ve || (e = e.dependencies, e !== null && Du(e) && (Ve = !0));
  }
  function Bs(e, t, l, n) {
    ue = e;
    var a = 0;
    do {
      if (Gn && (Xn = null), Ra = 0, Gn = !1, 25 <= a) throw Error(f(301));
      if (a += 1, Qe = Ne = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      O.H = bo, u = t(l, n);
    } while (Gn);
    return u;
  }
  function O0() {
    var e = O.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ca(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function wc() {
    var e = ju !== 0;
    return ju = 0, e;
  }
  function Rc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Cc(e) {
    if (qu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qu = !1;
    }
    ll = 0, Qe = Ne = ue = null, Gn = !1, Ra = ju = 0, Xn = null;
  }
  function ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ue.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ge() {
    if (Ne === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Qe === null ? ue.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, Ne = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(f(467)) : Error(f(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, Qe === null ? ue.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ca(e) {
    var t = Ra;
    return Ra += 1, Xn === null && (Xn = []), e = _s(Xn, e, t), t = ue, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? yo : Vc), e;
  }
  function Gu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ca(e);
      if (e.$$typeof === te) return nt(e);
    }
    throw Error(f(438, String(e)));
  }
  function Uc(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ue.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Yu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = ke;
    return t.index++, l;
  }
  function nl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = Ge();
    return Hc(t, Ne, e);
  }
  function Hc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = u.next, u.next = i;
      }
      t.baseQueue = a = u, n.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var r = i = null, d = null, E = t, R = !1;
      do {
        var U = E.lane & -536870913;
        if (U !== E.lane ? (me & U) === U : (ll & U) === U) {
          var A = E.revertLane;
          if (A === 0)
            d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), U === xn && (R = !0);
          else if ((ll & A) === A) {
            E = E.next, A === xn && (R = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, d === null ? (r = d = U, i = u) : d = d.next = U, ue.lanes |= A, wl |= A;
          U = E.action, un && l(u, U), u = E.hasEagerState ? E.eagerState : l(u, U);
        } else
          A = {
            lane: U,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, d === null ? (r = d = A, i = u) : d = d.next = A, ue.lanes |= U, wl |= U;
        E = E.next;
      } while (E !== null && E !== t);
      if (d === null ? i = u : d.next = r, !pt(u, e.memoizedState) && (Ve = !0, R && (l = Ln, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = i, e.baseQueue = d, n.lastRenderedState = u;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Bc(e) {
    var t = Ge(), l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, u = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var i = a = a.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== a);
      pt(u, t.memoizedState) || (Ve = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, n];
  }
  function xs(e, t, l) {
    var n = ue, a = Ge(), u = ye;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var i = !pt(
      (Ne || a).memoizedState,
      l
    );
    if (i && (a.memoizedState = l, Ve = !0), a = a.queue, qc(js.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || i || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qn(
        9,
        { destroy: void 0 },
        qs.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Re === null) throw Error(f(349));
      u || (ll & 127) !== 0 || Ls(n, t, l);
    }
    return l;
  }
  function Ls(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Yu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function qs(e, t, l, n) {
    t.value = l, t.getSnapshot = n, Ys(t) && Gs(e);
  }
  function js(e, t, l) {
    return l(function() {
      Ys(t) && Gs(e);
    });
  }
  function Ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !pt(e, l);
    } catch {
      return !0;
    }
  }
  function Gs(e) {
    var t = $l(e, 2);
    t !== null && vt(t, e, 2);
  }
  function xc(e) {
    var t = ft();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), un) {
        vl(!0);
        try {
          l();
        } finally {
          vl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e
    }, t;
  }
  function Xs(e, t, l, n) {
    return e.baseState = l, Hc(
      e,
      Ne,
      typeof n == "function" ? n : nl
    );
  }
  function N0(e, t, l, n, a) {
    if (Zu(e)) throw Error(f(485));
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
      O.T !== null ? l(!0) : u.isTransition = !1, n(u), l = t.pending, l === null ? (u.next = t.pending = u, Qs(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Qs(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var u = O.T, i = {};
      O.T = i;
      try {
        var r = l(a, n), d = O.S;
        d !== null && d(i, r), Vs(e, t, r);
      } catch (E) {
        Lc(e, t, E);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), O.T = u;
      }
    } else
      try {
        u = l(a, n), Vs(e, t, u);
      } catch (E) {
        Lc(e, t, E);
      }
  }
  function Vs(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Zs(e, t, n);
      },
      function(n) {
        return Lc(e, t, n);
      }
    ) : Zs(e, t, l);
  }
  function Zs(e, t, l) {
    t.status = "fulfilled", t.value = l, Ks(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Qs(e, l)));
  }
  function Lc(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Ks(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Ks(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ks(e, t) {
    return t;
  }
  function Js(e, t) {
    if (ye) {
      var l = Re.formState;
      if (l !== null) {
        e: {
          var n = ue;
          if (ye) {
            if (Ue) {
              t: {
                for (var a = Ue, u = Ut; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = Bt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Ue = Bt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            zl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = ft(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: t
    }, l.queue = n, l = mo.bind(
      null,
      ue,
      n
    ), n.dispatch = l, n = xc(!1), u = Qc.bind(
      null,
      ue,
      !1,
      n.queue
    ), n = ft(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = N0.bind(
      null,
      ue,
      a,
      u,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function Ws(e) {
    var t = Ge();
    return $s(t, Ne, e);
  }
  function $s(e, t, l) {
    if (t = Hc(
      e,
      t,
      ks
    )[0], e = Xu(nl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Ca(t);
      } catch (i) {
        throw i === qn ? Cu : i;
      }
    else n = t;
    t = Ge();
    var a = t.queue, u = a.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Qn(
      9,
      { destroy: void 0 },
      D0.bind(null, a, l),
      null
    )), [n, u, e];
  }
  function D0(e, t) {
    e.action = t;
  }
  function Fs(e) {
    var t = Ge(), l = Ne;
    if (l !== null)
      return $s(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Qn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Yu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Ps() {
    return Ge().memoizedState;
  }
  function Qu(e, t, l, n) {
    var a = ft();
    ue.flags |= e, a.memoizedState = Qn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Vu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var u = a.memoizedState.inst;
    Ne !== null && n !== null && Nc(n, Ne.memoizedState.deps) ? a.memoizedState = Qn(t, u, l, n) : (ue.flags |= e, a.memoizedState = Qn(
      1 | t,
      u,
      l,
      n
    ));
  }
  function Is(e, t) {
    Qu(8390656, 8, e, t);
  }
  function qc(e, t) {
    Vu(2048, 8, e, t);
  }
  function w0(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Yu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function eo(e) {
    var t = Ge().memoizedState;
    return w0({ ref: t, nextImpl: e }), function() {
      if ((Te & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function to(e, t) {
    return Vu(4, 2, e, t);
  }
  function lo(e, t) {
    return Vu(4, 4, e, t);
  }
  function no(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ao(e, t, l) {
    l = l != null ? l.concat([e]) : null, Vu(4, 4, no.bind(null, t, e), l);
  }
  function jc() {
  }
  function uo(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Nc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function io(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Nc(t, n[1]))
      return n[0];
    if (n = e(), un) {
      vl(!0);
      try {
        e();
      } finally {
        vl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Yc(e, t, l) {
    return l === void 0 || (ll & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = fd(), ue.lanes |= e, wl |= e, l);
  }
  function co(e, t, l, n) {
    return pt(l, t) ? l : Yn.current !== null ? (e = Yc(e, l, n), pt(e, t) || (Ve = !0), e) : (ll & 42) === 0 || (ll & 1073741824) !== 0 && (me & 261930) === 0 ? (Ve = !0, e.memoizedState = l) : (e = fd(), ue.lanes |= e, wl |= e, t);
  }
  function fo(e, t, l, n, a) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var i = O.T, r = {};
    O.T = r, Qc(e, !1, t, l);
    try {
      var d = a(), E = O.S;
      if (E !== null && E(r, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var R = _0(
          d,
          n
        );
        Ua(
          e,
          t,
          R,
          Mt(e)
        );
      } else
        Ua(
          e,
          t,
          n,
          Mt(e)
        );
    } catch (U) {
      Ua(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: U },
        Mt()
      );
    } finally {
      B.p = u, i !== null && r.types !== null && (i.types = r.types), O.T = i;
    }
  }
  function R0() {
  }
  function Gc(e, t, l, n) {
    if (e.tag !== 5) throw Error(f(476));
    var a = ro(e).queue;
    fo(
      e,
      a,
      t,
      Z,
      l === null ? R0 : function() {
        return so(e), l(n);
      }
    );
  }
  function ro(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: Z
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function so(e) {
    var t = ro(e);
    t.next === null && (t = e.alternate.memoizedState), Ua(
      e,
      t.next.queue,
      {},
      Mt()
    );
  }
  function Xc() {
    return nt($a);
  }
  function oo() {
    return Ge().memoizedState;
  }
  function ho() {
    return Ge().memoizedState;
  }
  function C0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Mt();
          e = Tl(l);
          var n = _l(t, e, l);
          n !== null && (vt(n, t, l), Na(n, t, l)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function U0(e, t, l) {
    var n = Mt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e) ? go(t, l) : (l = ic(e, t, l, n), l !== null && (vt(l, e, n), vo(l, t, n)));
  }
  function mo(e, t, l) {
    var n = Mt();
    Ua(e, t, l, n);
  }
  function Ua(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zu(e)) go(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, r = u(i, l);
          if (a.hasEagerState = !0, a.eagerState = r, pt(r, i))
            return _u(e, t, a, 0), Re === null && Tu(), !1;
        } catch {
        } finally {
        }
      if (l = ic(e, t, a, n), l !== null)
        return vt(l, e, n), vo(l, t, n), !0;
    }
    return !1;
  }
  function Qc(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Ef(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e)) {
      if (t) throw Error(f(479));
    } else
      t = ic(
        e,
        l,
        n,
        2
      ), t !== null && vt(t, e, 2);
  }
  function Zu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function go(e, t) {
    Gn = qu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function vo(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, pr(e, l);
    }
  }
  var Ha = {
    readContext: nt,
    use: Gu,
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
  Ha.useEffectEvent = qe;
  var yo = {
    readContext: nt,
    use: Gu,
    useCallback: function(e, t) {
      return ft().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: nt,
    useEffect: Is,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Qu(
        4194308,
        4,
        no.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Qu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Qu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ft();
      t = t === void 0 ? null : t;
      var n = e();
      if (un) {
        vl(!0);
        try {
          e();
        } finally {
          vl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ft();
      if (l !== void 0) {
        var a = l(t);
        if (un) {
          vl(!0);
          try {
            l(t);
          } finally {
            vl(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = U0.bind(
        null,
        ue,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ft();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = xc(e);
      var t = e.queue, l = mo.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var l = ft();
      return Yc(l, e, t);
    },
    useTransition: function() {
      var e = xc(!1);
      return e = fo.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ft().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ue, a = ft();
      if (ye) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = t(), Re === null)
          throw Error(f(349));
        (me & 127) !== 0 || Ls(n, t, l);
      }
      a.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return a.queue = u, Is(js.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Qn(
        9,
        { destroy: void 0 },
        qs.bind(
          null,
          n,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = ft(), t = Re.identifierPrefix;
      if (ye) {
        var l = Xt, n = Gt;
        l = (n & ~(1 << 32 - St(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = ju++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = M0++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Xc,
    useFormState: Js,
    useActionState: Js,
    useOptimistic: function(e) {
      var t = ft();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Qc.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return ft().memoizedState = C0.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = ft(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Te & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Vc = {
    readContext: nt,
    use: Gu,
    useCallback: uo,
    useContext: nt,
    useEffect: qc,
    useImperativeHandle: ao,
    useInsertionEffect: to,
    useLayoutEffect: lo,
    useMemo: io,
    useReducer: Xu,
    useRef: Ps,
    useState: function() {
      return Xu(nl);
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return co(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ca(e),
        t
      ];
    },
    useSyncExternalStore: xs,
    useId: oo,
    useHostTransitionStatus: Xc,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Xs(l, Ne, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: ho
  };
  Vc.useEffectEvent = eo;
  var bo = {
    readContext: nt,
    use: Gu,
    useCallback: uo,
    useContext: nt,
    useEffect: qc,
    useImperativeHandle: ao,
    useInsertionEffect: to,
    useLayoutEffect: lo,
    useMemo: io,
    useReducer: Bc,
    useRef: Ps,
    useState: function() {
      return Bc(nl);
    },
    useDebugValue: jc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ne === null ? Yc(l, e, t) : co(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bc(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ca(e),
        t
      ];
    },
    useSyncExternalStore: xs,
    useId: oo,
    useHostTransitionStatus: Xc,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ne !== null ? Xs(l, Ne, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: ho
  };
  bo.useEffectEvent = eo;
  function Zc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : M({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Kc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Mt(), a = Tl(n);
      a.payload = t, l != null && (a.callback = l), t = _l(e, a, n), t !== null && (vt(t, e, n), Na(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Mt(), a = Tl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = _l(e, a, n), t !== null && (vt(t, e, n), Na(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Mt(), n = Tl(l);
      n.tag = 2, t != null && (n.callback = t), t = _l(e, n, l), t !== null && (vt(t, e, l), Na(t, e, l));
    }
  };
  function So(e, t, l, n, a, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, i) : t.prototype && t.prototype.isPureReactComponent ? !pa(l, n) || !pa(a, u) : !0;
  }
  function po(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Kc.enqueueReplaceState(t, t.state, null);
  }
  function cn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = M({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function zo(e) {
    Au(e);
  }
  function Eo(e) {
    console.error(e);
  }
  function Ao(e) {
    Au(e);
  }
  function Ku(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function To(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function kc(e, t, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ku(e, t);
    }, l;
  }
  function _o(e) {
    return e = Tl(e), e.tag = 3, e;
  }
  function Mo(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        To(t, l, n);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      To(t, l, n), typeof a != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var r = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function H0(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && Bn(
        t,
        l,
        a,
        !0
      ), l = Et.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ht === null ? ai() : l.alternate === null && je === 0 && (je = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Uu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Sf(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Uu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Sf(e, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Sf(e, n, a), ai(), !1;
    }
    if (ye)
      return t = Et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== dc && (e = Error(f(422), { cause: n }), Aa(wt(e, l)))) : (n !== dc && (t = Error(f(423), {
        cause: n
      }), Aa(
        wt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = wt(n, l), a = kc(
        e.stateNode,
        n,
        a
      ), Ac(e, a), je !== 4 && (je = 2)), !1;
    var u = Error(f(520), { cause: n });
    if (u = wt(u, l), Xa === null ? Xa = [u] : Xa.push(u), je !== 4 && (je = 2), t === null) return !0;
    n = wt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = kc(l.stateNode, n, e), Ac(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rl === null || !Rl.has(u))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = _o(a), Mo(
              a,
              e,
              l,
              n
            ), Ac(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Jc = Error(f(461)), Ve = !1;
  function at(e, t, l, n) {
    t.child = e === null ? Ds(t, null, l, n) : an(
      t,
      e.child,
      l,
      n
    );
  }
  function Oo(e, t, l, n, a) {
    l = l.render;
    var u = t.ref;
    if ("ref" in n) {
      var i = {};
      for (var r in n)
        r !== "ref" && (i[r] = n[r]);
    } else i = n;
    return en(t), n = Dc(
      e,
      t,
      l,
      i,
      u,
      a
    ), r = wc(), e !== null && !Ve ? (Rc(e, t, a), al(e, t, a)) : (ye && r && sc(t), t.flags |= 1, at(e, t, n, a), t.child);
  }
  function No(e, t, l, n, a) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !cc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Do(
        e,
        t,
        u,
        n,
        a
      )) : (e = Ou(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !lf(e, a)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : pa, l(i, n) && e.ref === t.ref)
        return al(e, t, a);
    }
    return t.flags |= 1, e = Pt(u, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Do(e, t, l, n, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (pa(u, n) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = n = u, lf(e, a))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else
          return t.lanes = e.lanes, al(e, t, a);
    }
    return Wc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function wo(e, t, l, n) {
    var a = n.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~u;
        } else n = 0, t.child = null;
        return Ro(
          e,
          t,
          u,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ru(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Cs(t, u) : _c(), Us(t);
      else
        return n = t.lanes = 536870912, Ro(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          n
        );
    } else
      u !== null ? (Ru(t, u.cachePool), Cs(t, u), Ol(), t.memoizedState = null) : (e !== null && Ru(t, null), _c(), Ol());
    return at(e, t, a, l), t.child;
  }
  function Ba(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ro(e, t, l, n, a) {
    var u = Sc();
    return u = u === null ? null : { parent: Xe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && Ru(t, null), _c(), Us(t), e !== null && Bn(e, t, n, !0), t.childLanes = a, null;
  }
  function ku(e, t) {
    return t = Wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Co(e, t, l) {
    return an(t, e.child, null, l), e = ku(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function B0(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (n.mode === "hidden")
          return e = ku(t, n), t.lanes = 536870912, Ba(null, e);
        if (Oc(t), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Gt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ms(e), l.return = t, t.child = l, lt = t, Ue = null)) : e = null, e === null) throw zl(t);
        return t.lanes = 536870912, null;
      }
      return ku(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Oc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Co(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Ve || Bn(e, t, l, !1), a = (l & e.childLanes) !== 0, Ve || a) {
        if (n = Re, n !== null && (i = zr(n, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, $l(e, i), vt(n, e, i), Jc;
        ai(), t = Co(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Ue = Bt(i.nextSibling), lt = t, ye = !0, pl = null, Ut = !1, e !== null && ys(t, e), t = ku(t, n), t.flags |= 4096;
      return t;
    }
    return e = Pt(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ju(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, l, n, a) {
    return en(t), l = Dc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = wc(), e !== null && !Ve ? (Rc(e, t, a), al(e, t, a)) : (ye && n && sc(t), t.flags |= 1, at(e, t, l, a), t.child);
  }
  function Uo(e, t, l, n, a, u) {
    return en(t), t.updateQueue = null, l = Bs(
      t,
      n,
      l,
      a
    ), Hs(e), n = wc(), e !== null && !Ve ? (Rc(e, t, u), al(e, t, u)) : (ye && n && sc(t), t.flags |= 1, at(e, t, l, u), t.child);
  }
  function Ho(e, t, l, n, a) {
    if (en(t), t.stateNode === null) {
      var u = Rn, i = l.contextType;
      typeof i == "object" && i !== null && (u = nt(i)), u = new l(n, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Kc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = n, u.state = t.memoizedState, u.refs = {}, zc(t), i = l.contextType, u.context = typeof i == "object" && i !== null ? nt(i) : Rn, u.state = t.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Zc(
        t,
        l,
        i,
        n
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Kc.enqueueReplaceState(u, u.state, null), wa(t, n, u, a), Da(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps, d = cn(l, r);
      u.props = d;
      var E = u.context, R = l.contextType;
      i = Rn, typeof R == "object" && R !== null && (i = nt(R));
      var U = l.getDerivedStateFromProps;
      R = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = t.pendingProps !== r, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || E !== i) && po(
        t,
        u,
        n,
        i
      ), Al = !1;
      var A = t.memoizedState;
      u.state = A, wa(t, n, u, a), Da(), E = t.memoizedState, r || A !== E || Al ? (typeof U == "function" && (Zc(
        t,
        l,
        U,
        n
      ), E = t.memoizedState), (d = Al || So(
        t,
        l,
        d,
        n,
        A,
        E,
        i
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = E), u.props = n, u.state = E, u.context = i, n = d) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      u = t.stateNode, Ec(e, t), i = t.memoizedProps, R = cn(l, i), u.props = R, U = t.pendingProps, A = u.context, E = l.contextType, d = Rn, typeof E == "object" && E !== null && (d = nt(E)), r = l.getDerivedStateFromProps, (E = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== U || A !== d) && po(
        t,
        u,
        n,
        d
      ), Al = !1, A = t.memoizedState, u.state = A, wa(t, n, u, a), Da();
      var D = t.memoizedState;
      i !== U || A !== D || Al || e !== null && e.dependencies !== null && Du(e.dependencies) ? (typeof r == "function" && (Zc(
        t,
        l,
        r,
        n
      ), D = t.memoizedState), (R = Al || So(
        t,
        l,
        R,
        n,
        A,
        D,
        d
      ) || e !== null && e.dependencies !== null && Du(e.dependencies)) ? (E || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, D, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        D,
        d
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), u.props = n, u.state = D, u.context = d, n = R) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return u = n, Ju(e, t), n = (t.flags & 128) !== 0, u || n ? (u = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && n ? (t.child = an(
      t,
      e.child,
      null,
      a
    ), t.child = an(
      t,
      null,
      l,
      a
    )) : at(e, t, l, a), t.memoizedState = u.state, e = t.child) : e = al(
      e,
      t,
      a
    ), e;
  }
  function Bo(e, t, l, n) {
    return Pl(), t.flags |= 256, at(e, t, l, n), t.child;
  }
  var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Fc(e) {
    return { baseLanes: e, cachePool: As() };
  }
  function Pc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= _t), e;
  }
  function xo(e, t, l) {
    var n = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0), i && (a = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (a ? Ml(t) : Ol(), (e = Ue) ? (e = Vd(
          e,
          Ut
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Gt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ms(e), l.return = t, t.child = l, lt = t, Ue = null)) : e = null, e === null) throw zl(t);
        return Bf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var r = n.children;
      return n = n.fallback, a ? (Ol(), a = t.mode, r = Wu(
        { mode: "hidden", children: r },
        a
      ), n = Fl(
        n,
        a,
        l,
        null
      ), r.return = t, n.return = t, r.sibling = n, t.child = r, n = t.child, n.memoizedState = Fc(l), n.childLanes = Pc(
        e,
        i,
        l
      ), t.memoizedState = $c, Ba(null, n)) : (Ml(t), Ic(t, r));
    }
    var d = e.memoizedState;
    if (d !== null && (r = d.dehydrated, r !== null)) {
      if (u)
        t.flags & 256 ? (Ml(t), t.flags &= -257, t = ef(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Ol(), t.child = e.child, t.flags |= 128, t = null) : (Ol(), r = n.fallback, a = t.mode, n = Wu(
          { mode: "visible", children: n.children },
          a
        ), r = Fl(
          r,
          a,
          l,
          null
        ), r.flags |= 2, n.return = t, r.return = t, n.sibling = r, t.child = n, an(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = Fc(l), n.childLanes = Pc(
          e,
          i,
          l
        ), t.memoizedState = $c, t = Ba(null, n));
      else if (Ml(t), Bf(r)) {
        if (i = r.nextSibling && r.nextSibling.dataset, i) var E = i.dgst;
        i = E, n = Error(f(419)), n.stack = "", n.digest = i, Aa({ value: n, source: null, stack: null }), t = ef(
          e,
          t,
          l
        );
      } else if (Ve || Bn(e, t, l, !1), i = (l & e.childLanes) !== 0, Ve || i) {
        if (i = Re, i !== null && (n = zr(i, l), n !== 0 && n !== d.retryLane))
          throw d.retryLane = n, $l(e, n), vt(i, e, n), Jc;
        Hf(r) || ai(), t = ef(
          e,
          t,
          l
        );
      } else
        Hf(r) ? (t.flags |= 192, t.child = e.child, t = null) : (e = d.treeContext, Ue = Bt(
          r.nextSibling
        ), lt = t, ye = !0, pl = null, Ut = !1, e !== null && ys(t, e), t = Ic(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Ol(), r = n.fallback, a = t.mode, d = e.child, E = d.sibling, n = Pt(d, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = d.subtreeFlags & 65011712, E !== null ? r = Pt(
      E,
      r
    ) : (r = Fl(
      r,
      a,
      l,
      null
    ), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, Ba(null, n), n = t.child, r = e.child.memoizedState, r === null ? r = Fc(l) : (a = r.cachePool, a !== null ? (d = Xe._currentValue, a = a.parent !== d ? { parent: d, pool: d } : a) : a = As(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: a
    }), n.memoizedState = r, n.childLanes = Pc(
      e,
      i,
      l
    ), t.memoizedState = $c, Ba(e.child, n)) : (Ml(t), l = e.child, e = l.sibling, l = Pt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Ic(e, t) {
    return t = Wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wu(e, t) {
    return e = zt(22, e, null, t), e.lanes = 0, e;
  }
  function ef(e, t, l) {
    return an(t, e.child, null, l), e = Ic(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lo(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), gc(e.return, t, l);
  }
  function tf(e, t, l, n, a, u) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = l, i.tailMode = a, i.treeForkCount = u);
  }
  function qo(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, u = n.tail;
    n = n.children;
    var i = Ye.current, r = (i & 2) !== 0;
    if (r ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, j(Ye, i), at(e, t, n, l), n = ye ? Ea : 0, !r && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Lo(e, l, t);
        else if (e.tag === 19)
          Lo(e, l, t);
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
        for (l = t.child, a = null; l !== null; )
          e = l.alternate, e !== null && Lu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), tf(
          t,
          !1,
          a,
          l,
          u,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Lu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        tf(
          t,
          !0,
          l,
          null,
          u,
          n
        );
        break;
      case "together":
        tf(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function al(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), wl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Bn(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, l = Pt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Pt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function lf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Du(e)));
  }
  function x0(e, t, l) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo), El(t, Xe, e.memoizedState.cache), Pl();
        break;
      case 27:
      case 5:
        Zt(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        El(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Oc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? xo(e, t, l) : (Ml(t), e = al(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Ml(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (Bn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return qo(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), j(Ye, Ye.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, wo(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        El(t, Xe, e.memoizedState.cache);
    }
    return al(e, t, l);
  }
  function jo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ve = !0;
      else {
        if (!lf(e, l) && (t.flags & 128) === 0)
          return Ve = !1, x0(
            e,
            t,
            l
          );
        Ve = (e.flags & 131072) !== 0;
      }
    else
      Ve = !1, ye && (t.flags & 1048576) !== 0 && vs(t, Ea, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = ln(t.elementType), t.type = e, typeof e == "function")
            cc(e) ? (n = cn(e, n), t.tag = 1, t = Ho(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = Wc(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === he) {
                t.tag = 11, t = Oo(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === Y) {
                t.tag = 14, t = No(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = pe(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return Wc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = cn(
          n,
          t.pendingProps
        ), Ho(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (Je(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, Ec(e, t), wa(t, n, null, l);
          var i = t.memoizedState;
          if (n = i.cache, El(t, Xe, n), n !== u.cache && vc(
            t,
            [Xe],
            l,
            !0
          ), Da(), n = i.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Bo(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = wt(
                Error(f(424)),
                t
              ), Aa(a), t = Bo(
                e,
                t,
                n,
                l
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
              for (Ue = Bt(e.firstChild), lt = t, ye = !0, pl = null, Ut = !0, l = Ds(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Pl(), n === a) {
              t = al(
                e,
                t,
                l
              );
              break e;
            }
            at(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ju(e, t), e === null ? (l = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = oi(
          ae.current
        ).createElement(l), n[tt] = t, n[st] = e, ut(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = $d(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Zt(t), e === null && ye && (n = t.stateNode = kd(
          t.type,
          t.pendingProps,
          ae.current
        ), lt = t, Ut = !0, a = Ue, Bl(t.type) ? (xf = a, Ue = Bt(n.firstChild)) : Ue = a), at(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ju(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((a = n = Ue) && (n = dg(
          n,
          t.type,
          t.pendingProps,
          Ut
        ), n !== null ? (t.stateNode = n, lt = t, Ue = Bt(n.firstChild), Ut = !1, a = !0) : a = !1), a || zl(t)), Zt(t), a = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, n = u.children, Rf(a, u) ? n = null : i !== null && Rf(a, i) && (t.flags |= 32), t.memoizedState !== null && (a = Dc(
          e,
          t,
          O0,
          null,
          null,
          l
        ), $a._currentValue = a), Ju(e, t), at(e, t, n, l), t.child;
      case 6:
        return e === null && ye && ((e = l = Ue) && (l = hg(
          l,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, lt = t, Ue = null, e = !0) : e = !1), e || zl(t)), null;
      case 13:
        return xo(e, t, l);
      case 4:
        return Je(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = an(
          t,
          null,
          n,
          l
        ) : at(e, t, n, l), t.child;
      case 11:
        return Oo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, El(t, t.type, n.value), at(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, en(t), a = nt(a), n = n(a), t.flags |= 1, at(e, t, n, l), t.child;
      case 14:
        return No(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Do(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return qo(e, t, l);
      case 31:
        return B0(e, t, l);
      case 22:
        return wo(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return en(t), n = nt(Xe), e === null ? (a = Sc(), a === null && (a = Re, u = yc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= l), a = u), t.memoizedState = { parent: n, cache: a }, zc(t), El(t, Xe, a)) : ((e.lanes & l) !== 0 && (Ec(e, t), wa(t, null, null, l), Da()), a = e.memoizedState, u = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), El(t, Xe, n)) : (n = u.cache, El(t, Xe, n), n !== a.cache && vc(
          t,
          [Xe],
          l,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function ul(e) {
    e.flags |= 4;
  }
  function nf(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dd()) e.flags |= 8192;
        else
          throw nn = Uu, pc;
    } else e.flags &= -16777217;
  }
  function Yo(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !th(t))
      if (dd()) e.flags |= 8192;
      else
        throw nn = Uu, pc;
  }
  function $u(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? br() : 536870912, e.lanes |= t, kn |= t);
  }
  function xa(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function L0(e, t, l) {
    var n = t.pendingProps;
    switch (oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return He(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), tl(Xe), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Hn(t) ? ul(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hc())), He(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (ul(t), u !== null ? (He(t), Yo(t, u)) : (He(t), nf(
          t,
          a,
          null,
          n,
          l
        ))) : u ? u !== e.memoizedState ? (ul(t), He(t), Yo(t, u)) : (He(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ul(t), He(t), nf(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (mn(t), l = ae.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(f(166));
            return He(t), null;
          }
          e = X.current, Hn(t) ? bs(t) : (e = kd(a, n, l), t.stateNode = e, ul(t));
        }
        return He(t), null;
      case 5:
        if (mn(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(f(166));
            return He(t), null;
          }
          if (u = X.current, Hn(t))
            bs(t);
          else {
            var i = oi(
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
                    u = typeof n.is == "string" ? i.createElement("select", {
                      is: n.is
                    }) : i.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? i.createElement(a, { is: n.is }) : i.createElement(a);
                }
            }
            u[tt] = t, u[st] = n;
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
            e: switch (ut(u, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ul(t);
          }
        }
        return He(t), nf(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = ae.current, Hn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = lt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[tt] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || xd(e.nodeValue, l)), e || zl(t, !0);
          } else
            e = oi(e).createTextNode(
              n
            ), e[tt] = t, t.stateNode = e;
        }
        return He(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Hn(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[tt] = t;
            } else
              Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), e = !1;
          } else
            l = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return He(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Hn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[tt] = t;
            } else
              Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), a = !1;
          } else
            a = hc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), $u(t, t.updateQueue), He(t), null);
      case 4:
        return Be(), e === null && Mf(t.stateNode.containerInfo), He(t), null;
      case 10:
        return tl(t.type), He(t), null;
      case 19:
        if (_(Ye), n = t.memoizedState, n === null) return He(t), null;
        if (a = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) xa(n, !1);
          else {
            if (je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Lu(e), u !== null) {
                  for (t.flags |= 128, xa(n, !1), e = u.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    hs(l, e), l = l.sibling;
                  return j(
                    Ye,
                    Ye.current & 1 | 2
                  ), ye && It(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && xe() > ti && (t.flags |= 128, a = !0, xa(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Lu(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), xa(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ye)
                return He(t), null;
            } else
              2 * xe() - n.renderingStartTime > ti && l !== 536870912 && (t.flags |= 128, a = !0, xa(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = xe(), e.sibling = null, l = Ye.current, j(
          Ye,
          a ? l & 1 | 2 : l & 1
        ), ye && It(t, n.treeForkCount), e) : (He(t), null);
      case 22:
      case 23:
        return At(t), Mc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && _(tn), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tl(Xe), He(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function q0(e, t) {
    switch (oc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tl(Xe), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(f(340));
          Pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _(Ye), null;
      case 4:
        return Be(), null;
      case 10:
        return tl(t.type), null;
      case 22:
      case 23:
        return At(t), Mc(), e !== null && _(tn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tl(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Go(e, t) {
    switch (oc(t), t.tag) {
      case 3:
        tl(Xe), Be();
        break;
      case 26:
      case 27:
      case 5:
        mn(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        _(Ye);
        break;
      case 10:
        tl(t.type);
        break;
      case 22:
      case 23:
        At(t), Mc(), e !== null && _(tn);
        break;
      case 24:
        tl(Xe);
    }
  }
  function La(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var u = l.create, i = l.inst;
            n = u(), i.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (r) {
      Oe(t, t.return, r);
    }
  }
  function Nl(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var i = n.inst, r = i.destroy;
            if (r !== void 0) {
              i.destroy = void 0, a = t;
              var d = l, E = r;
              try {
                E();
              } catch (R) {
                Oe(
                  a,
                  d,
                  R
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (R) {
      Oe(t, t.return, R);
    }
  }
  function Xo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Rs(t, l);
      } catch (n) {
        Oe(e, e.return, n);
      }
    }
  }
  function Qo(e, t, l) {
    l.props = cn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Oe(e, t, n);
    }
  }
  function qa(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      Oe(e, t, a);
    }
  }
  function Qt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Oe(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Oe(e, t, a);
        }
      else l.current = null;
  }
  function Vo(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function af(e, t, l) {
    try {
      var n = e.stateNode;
      ig(n, e.type, l, t), n[st] = t;
    } catch (a) {
      Oe(e, e.return, a);
    }
  }
  function Zo(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Bl(e.type) || e.tag === 4;
  }
  function uf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zo(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Bl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cf(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = $t));
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (cf(e, t, l), e = e.sibling; e !== null; )
        cf(e, t, l), e = e.sibling;
  }
  function Fu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Fu(e, t, l), e = e.sibling; e !== null; )
        Fu(e, t, l), e = e.sibling;
  }
  function Ko(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ut(t, n, l), t[tt] = e, t[st] = l;
    } catch (u) {
      Oe(e, e.return, u);
    }
  }
  var il = !1, Ze = !1, ff = !1, ko = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function j0(e, t) {
    if (e = e.containerInfo, Df = bi, e = as(e), ec(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var i = 0, r = -1, d = -1, E = 0, R = 0, U = e, A = null;
            t: for (; ; ) {
              for (var D; U !== l || a !== 0 && U.nodeType !== 3 || (r = i + a), U !== u || n !== 0 && U.nodeType !== 3 || (d = i + n), U.nodeType === 3 && (i += U.nodeValue.length), (D = U.firstChild) !== null; )
                A = U, U = D;
              for (; ; ) {
                if (U === e) break t;
                if (A === l && ++E === a && (r = i), A === u && ++R === n && (d = i), (D = U.nextSibling) !== null) break;
                U = A, A = U.parentNode;
              }
              U = D;
            }
            l = r === -1 || d === -1 ? null : { start: r, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (wf = { focusedElem: e, selectionRange: l }, bi = !1, Fe = t; Fe !== null; )
      if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Fe = e;
      else
        for (; Fe !== null; ) {
          switch (t = Fe, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  a = e[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, a = u.memoizedProps, u = u.memoizedState, n = l.stateNode;
                try {
                  var Q = cn(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  Oe(
                    l,
                    l.return,
                    J
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Uf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uf(e);
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
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Fe = e;
            break;
          }
          Fe = t.return;
        }
  }
  function Jo(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fl(e, l), n & 4 && La(5, l);
        break;
      case 1:
        if (fl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (i) {
              Oe(l, l.return, i);
            }
          else {
            var a = cn(
              l.type,
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
              Oe(
                l,
                l.return,
                i
              );
            }
          }
        n & 64 && Xo(l), n & 512 && qa(l, l.return);
        break;
      case 3:
        if (fl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Rs(e, t);
          } catch (i) {
            Oe(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Ko(l);
      case 26:
      case 5:
        fl(e, l), t === null && n & 4 && Vo(l), n & 512 && qa(l, l.return);
        break;
      case 12:
        fl(e, l);
        break;
      case 31:
        fl(e, l), n & 4 && Fo(e, l);
        break;
      case 13:
        fl(e, l), n & 4 && Po(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = J0.bind(
          null,
          l
        ), mg(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || il, !n) {
          t = t !== null && t.memoizedState !== null || Ze, a = il;
          var u = Ze;
          il = n, (Ze = t) && !u ? rl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : fl(e, l), il = a, Ze = u;
        }
        break;
      case 30:
        break;
      default:
        fl(e, l);
    }
  }
  function Wo(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Li(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, dt = !1;
  function cl(e, t, l) {
    for (l = l.child; l !== null; )
      $o(e, t, l), l = l.sibling;
  }
  function $o(e, t, l) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(gl, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ze || Qt(l, t), cl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ze || Qt(l, t);
        var n = Le, a = dt;
        Bl(l.type) && (Le = l.stateNode, dt = !1), cl(
          e,
          t,
          l
        ), ka(l.stateNode), Le = n, dt = a;
        break;
      case 5:
        Ze || Qt(l, t);
      case 6:
        if (n = Le, a = dt, Le = null, cl(
          e,
          t,
          l
        ), Le = n, dt = a, Le !== null)
          if (dt)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(l.stateNode);
            } catch (u) {
              Oe(
                l,
                t,
                u
              );
            }
          else
            try {
              Le.removeChild(l.stateNode);
            } catch (u) {
              Oe(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Le !== null && (dt ? (e = Le, Xd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), ta(e)) : Xd(Le, l.stateNode));
        break;
      case 4:
        n = Le, a = dt, Le = l.stateNode.containerInfo, dt = !0, cl(
          e,
          t,
          l
        ), Le = n, dt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(2, l, t), Ze || Nl(4, l, t), cl(
          e,
          t,
          l
        );
        break;
      case 1:
        Ze || (Qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Qo(
          l,
          t,
          n
        )), cl(
          e,
          t,
          l
        );
        break;
      case 21:
        cl(
          e,
          t,
          l
        );
        break;
      case 22:
        Ze = (n = Ze) || l.memoizedState !== null, cl(
          e,
          t,
          l
        ), Ze = n;
        break;
      default:
        cl(
          e,
          t,
          l
        );
    }
  }
  function Fo(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ta(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
    }
  }
  function Po(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ta(e);
      } catch (l) {
        Oe(t, t.return, l);
      }
  }
  function Y0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ko()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ko()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Pu(e, t) {
    var l = Y0(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = W0.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function ht(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], u = e, i = t, r = i;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Bl(r.type)) {
                Le = r.stateNode, dt = !1;
                break e;
              }
              break;
            case 5:
              Le = r.stateNode, dt = !1;
              break e;
            case 3:
            case 4:
              Le = r.stateNode.containerInfo, dt = !0;
              break e;
          }
          r = r.return;
        }
        if (Le === null) throw Error(f(160));
        $o(u, i, a), Le = null, dt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Io(t, e), t = t.sibling;
  }
  var qt = null;
  function Io(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e), mt(e), n & 4 && (Nl(3, e, e.return), La(3, e), Nl(5, e, e.return));
        break;
      case 1:
        ht(t, e), mt(e), n & 512 && (Ze || l === null || Qt(l, l.return)), n & 64 && il && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = qt;
        if (ht(t, e), mt(e), n & 512 && (Ze || l === null || Qt(l, l.return)), n & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      u = a.getElementsByTagName("title")[0], (!u || u[oa] || u[tt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(n), a.head.insertBefore(
                        u,
                        a.querySelector("head > title")
                      )), ut(u, n, l), u[tt] = e, $e(u), n = u;
                      break e;
                    case "link":
                      var i = Id(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (i) {
                        for (var r = 0; r < i.length; r++)
                          if (u = i[r], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(r, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), ut(u, n, l), a.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Id(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (r = 0; r < i.length; r++)
                          if (u = i[r], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(r, 1);
                            break t;
                          }
                      }
                      u = a.createElement(n), ut(u, n, l), a.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  u[tt] = e, $e(u), n = u;
                }
                e.stateNode = n;
              } else
                eh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pd(
                a,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, n === null ? eh(
              a,
              e.type,
              e.stateNode
            ) : Pd(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && af(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ht(t, e), mt(e), n & 512 && (Ze || l === null || Qt(l, l.return)), l !== null && n & 4 && af(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ht(t, e), mt(e), n & 512 && (Ze || l === null || Qt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            Tn(a, "");
          } catch (Q) {
            Oe(e, e.return, Q);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, af(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (ff = !0);
        break;
      case 6:
        if (ht(t, e), mt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (Q) {
            Oe(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (mi = null, a = qt, qt = di(t.containerInfo), ht(t, e), qt = a, mt(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ta(t.containerInfo);
          } catch (Q) {
            Oe(e, e.return, Q);
          }
        ff && (ff = !1, ed(e));
        break;
      case 4:
        n = qt, qt = di(
          e.stateNode.containerInfo
        ), ht(t, e), mt(e), qt = n;
        break;
      case 12:
        ht(t, e), mt(e);
        break;
      case 31:
        ht(t, e), mt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
        break;
      case 13:
        ht(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ei = xe()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var d = l !== null && l.memoizedState !== null, E = il, R = Ze;
        if (il = E || a, Ze = R || d, ht(t, e), Ze = R, il = E, mt(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || d || il || Ze || fn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                d = l = t;
                try {
                  if (u = d.stateNode, a)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    r = d.stateNode;
                    var U = d.memoizedProps.style, A = U != null && U.hasOwnProperty("display") ? U.display : null;
                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Q) {
                  Oe(d, d.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (Q) {
                  Oe(d, d.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                d = t;
                try {
                  var D = d.stateNode;
                  a ? Qd(D, !0) : Qd(d.stateNode, !1);
                } catch (Q) {
                  Oe(d, d.return, Q);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Pu(e, l))));
        break;
      case 19:
        ht(t, e), mt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
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
        for (var l, n = e.return; n !== null; ) {
          if (Zo(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, u = uf(e);
            Fu(e, u, a);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (Tn(i, ""), l.flags &= -33);
            var r = uf(e);
            Fu(e, r, i);
            break;
          case 3:
          case 4:
            var d = l.stateNode.containerInfo, E = uf(e);
            cf(
              e,
              E,
              d
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (R) {
        Oe(e, e.return, R);
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
  function fl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Jo(e, t.alternate, t), t = t.sibling;
  }
  function fn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nl(4, t, t.return), fn(t);
          break;
        case 1:
          Qt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Qo(
            t,
            t.return,
            l
          ), fn(t);
          break;
        case 27:
          ka(t.stateNode);
        case 26:
        case 5:
          Qt(t, t.return), fn(t);
          break;
        case 22:
          t.memoizedState === null && fn(t);
          break;
        case 30:
          fn(t);
          break;
        default:
          fn(t);
      }
      e = e.sibling;
    }
  }
  function rl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          rl(
            a,
            u,
            l
          ), La(4, u);
          break;
        case 1:
          if (rl(
            a,
            u,
            l
          ), n = u, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (E) {
              Oe(n, n.return, E);
            }
          if (n = u, a = n.updateQueue, a !== null) {
            var r = n.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  ws(d[a], r);
            } catch (E) {
              Oe(n, n.return, E);
            }
          }
          l && i & 64 && Xo(u), qa(u, u.return);
          break;
        case 27:
          Ko(u);
        case 26:
        case 5:
          rl(
            a,
            u,
            l
          ), l && n === null && i & 4 && Vo(u), qa(u, u.return);
          break;
        case 12:
          rl(
            a,
            u,
            l
          );
          break;
        case 31:
          rl(
            a,
            u,
            l
          ), l && i & 4 && Fo(a, u);
          break;
        case 13:
          rl(
            a,
            u,
            l
          ), l && i & 4 && Po(a, u);
          break;
        case 22:
          u.memoizedState === null && rl(
            a,
            u,
            l
          ), qa(u, u.return);
          break;
        case 30:
          break;
        default:
          rl(
            a,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function rf(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ta(l));
  }
  function sf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ta(e));
  }
  function jt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        td(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function td(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && La(9, t);
        break;
      case 1:
        jt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ta(e)));
        break;
      case 12:
        if (a & 2048) {
          jt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, r = u.onPostCommit;
            typeof r == "function" && r(
              i,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (d) {
            Oe(t, t.return, d);
          }
        } else
          jt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        jt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        jt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? jt(
          e,
          t,
          l,
          n
        ) : ja(e, t) : u._visibility & 2 ? jt(
          e,
          t,
          l,
          n
        ) : (u._visibility |= 2, Vn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && rf(i, t);
        break;
      case 24:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && sf(t.alternate, t);
        break;
      default:
        jt(
          e,
          t,
          l,
          n
        );
    }
  }
  function Vn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, i = t, r = l, d = n, E = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Vn(
            u,
            i,
            r,
            d,
            a
          ), La(8, i);
          break;
        case 23:
          break;
        case 22:
          var R = i.stateNode;
          i.memoizedState !== null ? R._visibility & 2 ? Vn(
            u,
            i,
            r,
            d,
            a
          ) : ja(
            u,
            i
          ) : (R._visibility |= 2, Vn(
            u,
            i,
            r,
            d,
            a
          )), a && E & 2048 && rf(
            i.alternate,
            i
          );
          break;
        case 24:
          Vn(
            u,
            i,
            r,
            d,
            a
          ), a && E & 2048 && sf(i.alternate, i);
          break;
        default:
          Vn(
            u,
            i,
            r,
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
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            ja(l, n), a & 2048 && rf(
              n.alternate,
              n
            );
            break;
          case 24:
            ja(l, n), a & 2048 && sf(n.alternate, n);
            break;
          default:
            ja(l, n);
        }
        t = t.sibling;
      }
  }
  var Ya = 8192;
  function Zn(e, t, l) {
    if (e.subtreeFlags & Ya)
      for (e = e.child; e !== null; )
        ld(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function ld(e, t, l) {
    switch (e.tag) {
      case 26:
        Zn(
          e,
          t,
          l
        ), e.flags & Ya && e.memoizedState !== null && Mg(
          l,
          qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Zn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = qt;
        qt = di(e.stateNode.containerInfo), Zn(
          e,
          t,
          l
        ), qt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ya, Ya = 16777216, Zn(
          e,
          t,
          l
        ), Ya = n) : Zn(
          e,
          t,
          l
        ));
        break;
      default:
        Zn(
          e,
          t,
          l
        );
    }
  }
  function nd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ga(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Fe = n, ud(
            n,
            e
          );
        }
      nd(e);
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
        Ga(e), e.flags & 2048 && Nl(9, e, e.return);
        break;
      case 3:
        Ga(e);
        break;
      case 12:
        Ga(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Iu(e)) : Ga(e);
        break;
      default:
        Ga(e);
    }
  }
  function Iu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Fe = n, ud(
            n,
            e
          );
        }
      nd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, t, t.return), Iu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Iu(t));
          break;
        default:
          Iu(t);
      }
      e = e.sibling;
    }
  }
  function ud(e, t) {
    for (; Fe !== null; ) {
      var l = Fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ta(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Fe = n;
      else
        e: for (l = e; Fe !== null; ) {
          n = Fe;
          var a = n.sibling, u = n.return;
          if (Wo(n), n === l) {
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
  var G0 = {
    getCacheForType: function(e) {
      var t = nt(Xe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return nt(Xe).controller.signal;
    }
  }, X0 = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Re = null, oe = null, me = 0, Me = 0, Tt = null, Dl = !1, Kn = !1, of = !1, sl = 0, je = 0, wl = 0, rn = 0, df = 0, _t = 0, kn = 0, Xa = null, gt = null, hf = !1, ei = 0, id = 0, ti = 1 / 0, li = null, Rl = null, We = 0, Cl = null, Jn = null, ol = 0, mf = 0, gf = null, cd = null, Qa = 0, vf = null;
  function Mt() {
    return (Te & 2) !== 0 && me !== 0 ? me & -me : O.T !== null ? Ef() : Er();
  }
  function fd() {
    if (_t === 0)
      if ((me & 536870912) === 0 || ye) {
        var e = su;
        su <<= 1, (su & 3932160) === 0 && (su = 262144), _t = e;
      } else _t = 536870912;
    return e = Et.current, e !== null && (e.flags |= 32), _t;
  }
  function vt(e, t, l) {
    (e === Re && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (Wn(e, 0), Ul(
      e,
      me,
      _t,
      !1
    )), sa(e, l), ((Te & 2) === 0 || e !== Re) && (e === Re && ((Te & 2) === 0 && (rn |= l), je === 4 && Ul(
      e,
      me,
      _t,
      !1
    )), Vt(e));
  }
  function rd(e, t, l) {
    if ((Te & 6) !== 0) throw Error(f(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ra(e, t), a = n ? Z0(e, t) : bf(e, t, !0), u = n;
    do {
      if (a === 0) {
        Kn && !n && Ul(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Q0(l)) {
          a = bf(e, t, !1), u = !1;
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
              var r = e;
              a = Xa;
              var d = r.current.memoizedState.isDehydrated;
              if (d && (Wn(r, i).flags |= 256), i = bf(
                r,
                i,
                !1
              ), i !== 2) {
                if (of && !d) {
                  r.errorRecoveryDisabledLanes |= u, rn |= u, a = 4;
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
          Wn(e, 0), Ul(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, u = a, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ul(
                n,
                t,
                _t,
                !Dl
              );
              break e;
            case 2:
              gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (a = ei + 300 - xe(), 10 < a)) {
            if (Ul(
              n,
              t,
              _t,
              !Dl
            ), du(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = Yd(
              sd.bind(
                null,
                n,
                l,
                gt,
                li,
                hf,
                t,
                _t,
                rn,
                kn,
                Dl,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          sd(
            n,
            l,
            gt,
            li,
            hf,
            t,
            _t,
            rn,
            kn,
            Dl,
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
  function sd(e, t, l, n, a, u, i, r, d, E, R, U, A, D) {
    if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $t
      }, ld(
        t,
        u,
        U
      );
      var Q = (u & 62914560) === u ? ei - xe() : (u & 4194048) === u ? id - xe() : 0;
      if (Q = Og(
        U,
        Q
      ), Q !== null) {
        ol = u, e.cancelPendingCommit = Q(
          bd.bind(
            null,
            e,
            t,
            u,
            l,
            n,
            a,
            i,
            r,
            d,
            R,
            U,
            null,
            A,
            D
          )
        ), Ul(e, u, i, !E);
        return;
      }
    }
    bd(
      e,
      t,
      u,
      l,
      n,
      a,
      i,
      r,
      d
    );
  }
  function Q0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], u = a.getSnapshot;
          a = a.value;
          try {
            if (!pt(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
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
  function Ul(e, t, l, n) {
    t &= ~df, t &= ~rn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - St(a), i = 1 << u;
      n[u] = -1, a &= ~i;
    }
    l !== 0 && Sr(e, l, t);
  }
  function ni() {
    return (Te & 6) === 0 ? (Va(0), !1) : !0;
  }
  function yf() {
    if (oe !== null) {
      if (Me === 0)
        var e = oe.return;
      else
        e = oe, el = Il = null, Cc(e), jn = null, Ma = 0, e = oe;
      for (; e !== null; )
        Go(e.alternate, e), e = e.return;
      oe = null;
    }
  }
  function Wn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, rg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, yf(), Re = e, oe = l = Pt(e.current, null), me = t, Me = 0, Tt = null, Dl = !1, Kn = ra(e, t), of = !1, kn = _t = df = rn = wl = je = 0, gt = Xa = null, hf = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - St(n), u = 1 << a;
        t |= e[a], n &= ~u;
      }
    return sl = t, Tu(), l;
  }
  function od(e, t) {
    ue = null, O.H = Ha, t === qn || t === Cu ? (t = Ms(), Me = 3) : t === pc ? (t = Ms(), Me = 4) : Me = t === Jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, oe === null && (je = 1, Ku(
      e,
      wt(t, e.current)
    ));
  }
  function dd() {
    var e = Et.current;
    return e === null ? !0 : (me & 4194048) === me ? Ht === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Ht : !1;
  }
  function hd() {
    var e = O.H;
    return O.H = Ha, e === null ? Ha : e;
  }
  function md() {
    var e = O.A;
    return O.A = G0, e;
  }
  function ai() {
    je = 4, Dl || (me & 4194048) !== me && Et.current !== null || (Kn = !0), (wl & 134217727) === 0 && (rn & 134217727) === 0 || Re === null || Ul(
      Re,
      me,
      _t,
      !1
    );
  }
  function bf(e, t, l) {
    var n = Te;
    Te |= 2;
    var a = hd(), u = md();
    (Re !== e || me !== t) && (li = null, Wn(e, t)), t = !1;
    var i = je;
    e: do
      try {
        if (Me !== 0 && oe !== null) {
          var r = oe, d = Tt;
          switch (Me) {
            case 8:
              yf(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Et.current === null && (t = !0);
              var E = Me;
              if (Me = 0, Tt = null, $n(e, r, d, E), l && Kn) {
                i = 0;
                break e;
              }
              break;
            default:
              E = Me, Me = 0, Tt = null, $n(e, r, d, E);
          }
        }
        V0(), i = je;
        break;
      } catch (R) {
        od(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, el = Il = null, Te = n, O.H = a, O.A = u, oe === null && (Re = null, me = 0, Tu()), i;
  }
  function V0() {
    for (; oe !== null; ) gd(oe);
  }
  function Z0(e, t) {
    var l = Te;
    Te |= 2;
    var n = hd(), a = md();
    Re !== e || me !== t ? (li = null, ti = xe() + 500, Wn(e, t)) : Kn = ra(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && oe !== null) {
          t = oe;
          var u = Tt;
          t: switch (Me) {
            case 1:
              Me = 0, Tt = null, $n(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ts(u)) {
                Me = 0, Tt = null, vd(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || Re !== e || (Me = 7), Vt(e);
              }, u.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              Ts(u) ? (Me = 0, Tt = null, vd(t)) : (Me = 0, Tt = null, $n(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (oe.tag) {
                case 26:
                  i = oe.memoizedState;
                case 5:
                case 27:
                  var r = oe;
                  if (i ? th(i) : r.stateNode.complete) {
                    Me = 0, Tt = null;
                    var d = r.sibling;
                    if (d !== null) oe = d;
                    else {
                      var E = r.return;
                      E !== null ? (oe = E, ui(E)) : oe = null;
                    }
                    break t;
                  }
              }
              Me = 0, Tt = null, $n(e, t, u, 5);
              break;
            case 6:
              Me = 0, Tt = null, $n(e, t, u, 6);
              break;
            case 8:
              yf(), je = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        K0();
        break;
      } catch (R) {
        od(e, R);
      }
    while (!0);
    return el = Il = null, O.H = n, O.A = a, Te = l, oe !== null ? 0 : (Re = null, me = 0, Tu(), je);
  }
  function K0() {
    for (; oe !== null && !Ce(); )
      gd(oe);
  }
  function gd(e) {
    var t = jo(e.alternate, e, sl);
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : oe = t;
  }
  function vd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Uo(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = Uo(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Cc(t);
      default:
        Go(l, t), t = oe = hs(t, sl), t = jo(l, t, sl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : oe = t;
  }
  function $n(e, t, l, n) {
    el = Il = null, Cc(t), jn = null, Ma = 0;
    var a = t.return;
    try {
      if (H0(
        e,
        a,
        t,
        l,
        me
      )) {
        je = 1, Ku(
          e,
          wt(l, e.current)
        ), oe = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw oe = a, u;
      je = 1, Ku(
        e,
        wt(l, e.current)
      ), oe = null;
      return;
    }
    t.flags & 32768 ? (ye || n === 1 ? e = !0 : Kn || (me & 536870912) !== 0 ? e = !1 : (Dl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Et.current, n !== null && n.tag === 13 && (n.flags |= 16384))), yd(t, e)) : ui(t);
  }
  function ui(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        yd(
          t,
          Dl
        );
        return;
      }
      e = t.return;
      var l = L0(
        t.alternate,
        t,
        sl
      );
      if (l !== null) {
        oe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        oe = t;
        return;
      }
      oe = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function yd(e, t) {
    do {
      var l = q0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, oe = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        oe = e;
        return;
      }
      oe = e = l;
    } while (e !== null);
    je = 6, oe = null;
  }
  function bd(e, t, l, n, a, u, i, r, d) {
    e.cancelPendingCommit = null;
    do
      ii();
    while (We !== 0);
    if ((Te & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= uc, _m(
        e,
        l,
        u,
        i,
        r,
        d
      ), e === Re && (oe = Re = null, me = 0), Jn = t, Cl = e, ol = l, mf = u, gf = a, cd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $0(Jt, function() {
        return Ad(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null, a = B.p, B.p = 2, i = Te, Te |= 4;
        try {
          j0(e, t, l);
        } finally {
          Te = i, B.p = a, O.T = n;
        }
      }
      We = 1, Sd(), pd(), zd();
    }
  }
  function Sd() {
    if (We === 1) {
      We = 0;
      var e = Cl, t = Jn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = O.T, O.T = null;
        var n = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Io(t, e);
          var u = wf, i = as(e.containerInfo), r = u.focusedElem, d = u.selectionRange;
          if (i !== r && r && r.ownerDocument && ns(
            r.ownerDocument.documentElement,
            r
          )) {
            if (d !== null && ec(r)) {
              var E = d.start, R = d.end;
              if (R === void 0 && (R = E), "selectionStart" in r)
                r.selectionStart = E, r.selectionEnd = Math.min(
                  R,
                  r.value.length
                );
              else {
                var U = r.ownerDocument || document, A = U && U.defaultView || window;
                if (A.getSelection) {
                  var D = A.getSelection(), Q = r.textContent.length, J = Math.min(d.start, Q), we = d.end === void 0 ? J : Math.min(d.end, Q);
                  !D.extend && J > we && (i = we, we = J, J = i);
                  var S = ls(
                    r,
                    J
                  ), g = ls(
                    r,
                    we
                  );
                  if (S && g && (D.rangeCount !== 1 || D.anchorNode !== S.node || D.anchorOffset !== S.offset || D.focusNode !== g.node || D.focusOffset !== g.offset)) {
                    var z = U.createRange();
                    z.setStart(S.node, S.offset), D.removeAllRanges(), J > we ? (D.addRange(z), D.extend(g.node, g.offset)) : (z.setEnd(g.node, g.offset), D.addRange(z));
                  }
                }
              }
            }
            for (U = [], D = r; D = D.parentNode; )
              D.nodeType === 1 && U.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < U.length; r++) {
              var C = U[r];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          bi = !!Df, wf = Df = null;
        } finally {
          Te = a, B.p = n, O.T = l;
        }
      }
      e.current = t, We = 2;
    }
  }
  function pd() {
    if (We === 2) {
      We = 0;
      var e = Cl, t = Jn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = O.T, O.T = null;
        var n = B.p;
        B.p = 2;
        var a = Te;
        Te |= 4;
        try {
          Jo(e, t.alternate, t);
        } finally {
          Te = a, B.p = n, O.T = l;
        }
      }
      We = 3;
    }
  }
  function zd() {
    if (We === 4 || We === 3) {
      We = 0, Ie();
      var e = Cl, t = Jn, l = ol, n = cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, Jn = Cl = null, Ed(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Rl = null), Bi(l), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function")
        try {
          et.onCommitFiberRoot(
            gl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = O.T, a = B.p, B.p = 2, O.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < n.length; i++) {
            var r = n[i];
            u(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          O.T = t, B.p = a;
        }
      }
      (ol & 3) !== 0 && ii(), Vt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === vf ? Qa++ : (Qa = 0, vf = e) : Qa = 0, Va(0);
    }
  }
  function Ed(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ta(t)));
  }
  function ii() {
    return Sd(), pd(), zd(), Ad();
  }
  function Ad() {
    if (We !== 5) return !1;
    var e = Cl, t = mf;
    mf = 0;
    var l = Bi(ol), n = O.T, a = B.p;
    try {
      B.p = 32 > l ? 32 : l, O.T = null, l = gf, gf = null;
      var u = Cl, i = ol;
      if (We = 0, Jn = Cl = null, ol = 0, (Te & 6) !== 0) throw Error(f(331));
      var r = Te;
      if (Te |= 4, ad(u.current), td(
        u,
        u.current,
        i,
        l
      ), Te = r, Va(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(gl, u);
        } catch {
        }
      return !0;
    } finally {
      B.p = a, O.T = n, Ed(e, t);
    }
  }
  function Td(e, t, l) {
    t = wt(l, t), t = kc(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (sa(e, 2), Vt(e));
  }
  function Oe(e, t, l) {
    if (e.tag === 3)
      Td(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Td(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rl === null || !Rl.has(n))) {
            e = wt(l, e), l = _o(2), n = _l(t, l, 2), n !== null && (Mo(
              l,
              n,
              t,
              e
            ), sa(n, 2), Vt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sf(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new X0();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (of = !0, a.add(l), e = k0.bind(null, e, t, l), t.then(e, e));
  }
  function k0(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Re === e && (me & l) === l && (je === 4 || je === 3 && (me & 62914560) === me && 300 > xe() - ei ? (Te & 2) === 0 && Wn(e, 0) : df |= l, kn === me && (kn = 0)), Vt(e);
  }
  function _d(e, t) {
    t === 0 && (t = br()), e = $l(e, t), e !== null && (sa(e, t), Vt(e));
  }
  function J0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), _d(e, l);
  }
  function W0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    n !== null && n.delete(t), _d(e, l);
  }
  function $0(e, t) {
    return ia(e, t);
  }
  var ci = null, Fn = null, pf = !1, fi = !1, zf = !1, Hl = 0;
  function Vt(e) {
    e !== Fn && e.next === null && (Fn === null ? ci = Fn = e : Fn = Fn.next = e), fi = !0, pf || (pf = !0, P0());
  }
  function Va(e, t) {
    if (!zf && fi) {
      zf = !0;
      do
        for (var l = !1, n = ci; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = n.suspendedLanes, r = n.pingedLanes;
              u = (1 << 31 - St(42 | e) + 1) - 1, u &= a & ~(i & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Dd(n, u));
          } else
            u = me, u = du(
              n,
              n === Re ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || ra(n, u) || (l = !0, Dd(n, u));
          n = n.next;
        }
      while (l);
      zf = !1;
    }
  }
  function F0() {
    Md();
  }
  function Md() {
    fi = pf = !1;
    var e = 0;
    Hl !== 0 && fg() && (e = Hl);
    for (var t = xe(), l = null, n = ci; n !== null; ) {
      var a = n.next, u = Od(n, t);
      u === 0 ? (n.next = null, l === null ? ci = a : l.next = a, a === null && (Fn = l)) : (l = n, (e !== 0 || (u & 3) !== 0) && (fi = !0)), n = a;
    }
    We !== 0 && We !== 5 || Va(e), Hl !== 0 && (Hl = 0);
  }
  function Od(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - St(u), r = 1 << i, d = a[i];
      d === -1 ? ((r & l) === 0 || (r & n) !== 0) && (a[i] = Tm(r, t)) : d <= t && (e.expiredLanes |= r), u &= ~r;
    }
    if (t = Re, l = me, l = du(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && G(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ra(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && G(n), Bi(l)) {
        case 2:
        case 8:
          l = Ql;
          break;
        case 32:
          l = Jt;
          break;
        case 268435456:
          l = bt;
          break;
        default:
          l = Jt;
      }
      return n = Nd.bind(null, e), l = ia(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && G(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Nd(e, t) {
    if (We !== 0 && We !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ii() && e.callbackNode !== l)
      return null;
    var n = me;
    return n = du(
      e,
      e === Re ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (rd(e, n, t), Od(e, xe()), e.callbackNode != null && e.callbackNode === l ? Nd.bind(null, e) : null);
  }
  function Dd(e, t) {
    if (ii()) return null;
    rd(e, t, !0);
  }
  function P0() {
    sg(function() {
      (Te & 6) !== 0 ? ia(
        ml,
        F0
      ) : Md();
    });
  }
  function Ef() {
    if (Hl === 0) {
      var e = xn;
      e === 0 && (e = ru, ru <<= 1, (ru & 261888) === 0 && (ru = 256)), Hl = e;
    }
    return Hl;
  }
  function wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vu("" + e);
  }
  function Rd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function I0(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var u = wd(
        (a[st] || null).action
      ), i = n.submitter;
      i && (t = (t = i[st] || null) ? wd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var r = new pu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Hl !== 0) {
                  var d = i ? Rd(a, i) : new FormData(a);
                  Gc(
                    l,
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
                typeof u == "function" && (r.preventDefault(), d = i ? Rd(a, i) : new FormData(a), Gc(
                  l,
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
  for (var Af = 0; Af < ac.length; Af++) {
    var Tf = ac[Af], eg = Tf.toLowerCase(), tg = Tf[0].toUpperCase() + Tf.slice(1);
    Lt(
      eg,
      "on" + tg
    );
  }
  Lt(cs, "onAnimationEnd"), Lt(fs, "onAnimationIteration"), Lt(rs, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(y0, "onTransitionRun"), Lt(b0, "onTransitionStart"), Lt(S0, "onTransitionCancel"), Lt(ss, "onTransitionEnd"), En("onMouseEnter", ["mouseout", "mouseover"]), En("onMouseLeave", ["mouseout", "mouseover"]), En("onPointerEnter", ["pointerout", "pointerover"]), En("onPointerLeave", ["pointerout", "pointerover"]), Kl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), lg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za)
  );
  function Cd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = n.length - 1; 0 <= i; i--) {
            var r = n[i], d = r.instance, E = r.currentTarget;
            if (r = r.listener, d !== u && a.isPropagationStopped())
              break e;
            u = r, a.currentTarget = E;
            try {
              u(a);
            } catch (R) {
              Au(R);
            }
            a.currentTarget = null, u = d;
          }
        else
          for (i = 0; i < n.length; i++) {
            if (r = n[i], d = r.instance, E = r.currentTarget, r = r.listener, d !== u && a.isPropagationStopped())
              break e;
            u = r, a.currentTarget = E;
            try {
              u(a);
            } catch (R) {
              Au(R);
            }
            a.currentTarget = null, u = d;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[xi];
    l === void 0 && (l = t[xi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Ud(t, e, 2, !1), l.add(n));
  }
  function _f(e, t, l) {
    var n = 0;
    t && (n |= 4), Ud(
      l,
      e,
      n,
      t
    );
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2);
  function Mf(e) {
    if (!e[ri]) {
      e[ri] = !0, _r.forEach(function(l) {
        l !== "selectionchange" && (lg.has(l) || _f(l, !1, e), _f(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ri] || (t[ri] = !0, _f("selectionchange", !1, t));
    }
  }
  function Ud(e, t, l, n) {
    switch (fh(t)) {
      case 2:
        var a = wg;
        break;
      case 8:
        a = Rg;
        break;
      default:
        a = Gf;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !Zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Of(e, t, l, n, a) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
          var r = n.stateNode.containerInfo;
          if (r === a) break;
          if (i === 4)
            for (i = n.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; r !== null; ) {
            if (i = Sn(r), i === null) return;
            if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              n = u = i;
              continue e;
            }
            r = r.parentNode;
          }
        }
        n = n.return;
      }
    Lr(function() {
      var E = u, R = Qi(l), U = [];
      e: {
        var A = os.get(e);
        if (A !== void 0) {
          var D = pu, Q = e;
          switch (e) {
            case "keypress":
              if (bu(l) === 0) break e;
            case "keydown":
            case "keyup":
              D = Wm;
              break;
            case "focusin":
              Q = "focus", D = Wi;
              break;
            case "focusout":
              Q = "blur", D = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              D = Wi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Yr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Lm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Pm;
              break;
            case cs:
            case fs:
            case rs:
              D = Ym;
              break;
            case ss:
              D = e0;
              break;
            case "scroll":
            case "scrollend":
              D = Bm;
              break;
            case "wheel":
              D = l0;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Xm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Xr;
              break;
            case "toggle":
            case "beforetoggle":
              D = a0;
          }
          var J = (t & 4) !== 0, we = !J && (e === "scroll" || e === "scrollend"), S = J ? A !== null ? A + "Capture" : null : A;
          J = [];
          for (var g = E, z; g !== null; ) {
            var C = g;
            if (z = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || z === null || S === null || (C = ha(g, S), C != null && J.push(
              Ka(g, C, z)
            )), we) break;
            g = g.return;
          }
          0 < J.length && (A = new D(
            A,
            Q,
            null,
            l,
            R
          ), U.push({ event: A, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", A && l !== Xi && (Q = l.relatedTarget || l.fromElement) && (Sn(Q) || Q[bn]))
            break e;
          if ((D || A) && (A = R.window === R ? R : (A = R.ownerDocument) ? A.defaultView || A.parentWindow : window, D ? (Q = l.relatedTarget || l.toElement, D = E, Q = Q ? Sn(Q) : null, Q !== null && (we = y(Q), J = Q.tag, Q !== we || J !== 5 && J !== 27 && J !== 6) && (Q = null)) : (D = null, Q = E), D !== Q)) {
            if (J = Yr, C = "onMouseLeave", S = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (J = Xr, C = "onPointerLeave", S = "onPointerEnter", g = "pointer"), we = D == null ? A : da(D), z = Q == null ? A : da(Q), A = new J(
              C,
              g + "leave",
              D,
              l,
              R
            ), A.target = we, A.relatedTarget = z, C = null, Sn(R) === E && (J = new J(
              S,
              g + "enter",
              Q,
              l,
              R
            ), J.target = z, J.relatedTarget = we, C = J), we = C, D && Q)
              t: {
                for (J = ng, S = D, g = Q, z = 0, C = S; C; C = J(C))
                  z++;
                C = 0;
                for (var k = g; k; k = J(k))
                  C++;
                for (; 0 < z - C; )
                  S = J(S), z--;
                for (; 0 < C - z; )
                  g = J(g), C--;
                for (; z--; ) {
                  if (S === g || g !== null && S === g.alternate) {
                    J = S;
                    break t;
                  }
                  S = J(S), g = J(g);
                }
                J = null;
              }
            else J = null;
            D !== null && Hd(
              U,
              A,
              D,
              J,
              !1
            ), Q !== null && we !== null && Hd(
              U,
              we,
              Q,
              J,
              !0
            );
          }
        }
        e: {
          if (A = E ? da(E) : window, D = A.nodeName && A.nodeName.toLowerCase(), D === "select" || D === "input" && A.type === "file")
            var Ee = $r;
          else if (Jr(A))
            if (Fr)
              Ee = m0;
            else {
              Ee = d0;
              var V = o0;
            }
          else
            D = A.nodeName, !D || D.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? E && Gi(E.elementType) && (Ee = $r) : Ee = h0;
          if (Ee && (Ee = Ee(e, E))) {
            Wr(
              U,
              Ee,
              l,
              R
            );
            break e;
          }
          V && V(e, A, E), e === "focusout" && E && A.type === "number" && E.memoizedProps.value != null && Yi(A, "number", A.value);
        }
        switch (V = E ? da(E) : window, e) {
          case "focusin":
            (Jr(V) || V.contentEditable === "true") && (Nn = V, tc = E, za = null);
            break;
          case "focusout":
            za = tc = Nn = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, us(U, l, R);
            break;
          case "selectionchange":
            if (v0) break;
          case "keydown":
          case "keyup":
            us(U, l, R);
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
          On ? Kr(e, l) && (ge = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ge = "onCompositionStart");
        ge && (Qr && l.locale !== "ko" && (On || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && On && (ie = qr()) : (bl = R, Ki = "value" in bl ? bl.value : bl.textContent, On = !0)), V = si(E, ge), 0 < V.length && (ge = new Gr(
          ge,
          e,
          null,
          l,
          R
        ), U.push({ event: ge, listeners: V }), ie ? ge.data = ie : (ie = kr(l), ie !== null && (ge.data = ie)))), (ie = i0 ? c0(e, l) : f0(e, l)) && (ge = si(E, "onBeforeInput"), 0 < ge.length && (V = new Gr(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          R
        ), U.push({
          event: V,
          listeners: ge
        }), V.data = ie)), I0(
          U,
          e,
          E,
          l,
          R
        );
      }
      Cd(U, t);
    });
  }
  function Ka(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function si(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = ha(e, l), a != null && n.unshift(
        Ka(e, a, u)
      ), a = ha(e, t), a != null && n.push(
        Ka(e, a, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function ng(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Hd(e, t, l, n, a) {
    for (var u = t._reactName, i = []; l !== null && l !== n; ) {
      var r = l, d = r.alternate, E = r.stateNode;
      if (r = r.tag, d !== null && d === n) break;
      r !== 5 && r !== 26 && r !== 27 || E === null || (d = E, a ? (E = ha(l, u), E != null && i.unshift(
        Ka(l, E, d)
      )) : a || (E = ha(l, u), E != null && i.push(
        Ka(l, E, d)
      ))), l = l.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var ag = /\r\n?/g, ug = /\u0000|\uFFFD/g;
  function Bd(e) {
    return (typeof e == "string" ? e : "" + e).replace(ag, `
`).replace(ug, "");
  }
  function xd(e, t) {
    return t = Bd(t), Bd(e) === t;
  }
  function De(e, t, l, n, a, u) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Tn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Tn(e, "" + n);
        break;
      case "className":
        mu(e, "class", n);
        break;
      case "tabIndex":
        mu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(e, l, n);
        break;
      case "style":
        Br(e, n, u);
        break;
      case "data":
        if (t !== "object") {
          mu(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = vu("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && De(e, t, "name", a.name, a, null), De(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), De(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), De(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (De(e, t, "encType", a.encType, a, null), De(e, t, "method", a.method, a, null), De(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = vu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = $t);
        break;
      case "onScroll":
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
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
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = vu("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
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
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
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
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), hu(e, "popover", n);
        break;
      case "xlinkActuate":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        hu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Um.get(l) || l, hu(e, l, n));
    }
  }
  function Nf(e, t, l, n, a, u) {
    switch (l) {
      case "style":
        Br(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Tn(e, n) : (typeof n == "number" || typeof n == "bigint") && Tn(e, "" + n);
        break;
      case "onScroll":
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = $t);
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
        if (!Mr.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), u = e[st] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof n == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : hu(e, l, n);
          }
    }
  }
  function ut(e, t, l) {
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
        var n = !1, a = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  De(e, t, u, i, l, null);
              }
          }
        a && De(e, t, "srcSet", l.srcSet, l, null), n && De(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var r = u = i = a = null, d = null, E = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var R = l[n];
            if (R != null)
              switch (n) {
                case "name":
                  a = R;
                  break;
                case "type":
                  i = R;
                  break;
                case "checked":
                  d = R;
                  break;
                case "defaultChecked":
                  E = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  r = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(f(137, t));
                  break;
                default:
                  De(e, t, n, R, l, null);
              }
          }
        Rr(
          e,
          u,
          r,
          d,
          E,
          i,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), n = i = u = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (r = l[a], r != null))
            switch (a) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "multiple":
                n = r;
              default:
                De(e, t, a, r, l, null);
            }
        t = u, l = i, e.multiple = !!n, t != null ? An(e, !!n, t, !1) : l != null && An(e, !!n, l, !0);
        return;
      case "textarea":
        de("invalid", e), u = a = n = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (r = l[i], r != null))
            switch (i) {
              case "value":
                n = r;
                break;
              case "defaultValue":
                a = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                De(e, t, i, r, l, null);
            }
        Ur(e, n, a, u);
        return;
      case "option":
        for (d in l)
          if (l.hasOwnProperty(d) && (n = l[d], n != null))
            switch (d) {
              case "selected":
                e.selected = n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                De(e, t, d, n, l, null);
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
        for (n = 0; n < Za.length; n++)
          de(Za[n], e);
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
        for (E in l)
          if (l.hasOwnProperty(E) && (n = l[E], n != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                De(e, t, E, n, l, null);
            }
        return;
      default:
        if (Gi(t)) {
          for (R in l)
            l.hasOwnProperty(R) && (n = l[R], n !== void 0 && Nf(
              e,
              t,
              R,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && (n = l[r], n != null && De(e, t, r, n, l, null));
  }
  function ig(e, t, l, n) {
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
        var a = null, u = null, i = null, r = null, d = null, E = null, R = null;
        for (D in l) {
          var U = l[D];
          if (l.hasOwnProperty(D) && U != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = U;
              default:
                n.hasOwnProperty(D) || De(e, t, D, null, n, U);
            }
        }
        for (var A in n) {
          var D = n[A];
          if (U = l[A], n.hasOwnProperty(A) && (D != null || U != null))
            switch (A) {
              case "type":
                u = D;
                break;
              case "name":
                a = D;
                break;
              case "checked":
                E = D;
                break;
              case "defaultChecked":
                R = D;
                break;
              case "value":
                i = D;
                break;
              case "defaultValue":
                r = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(f(137, t));
                break;
              default:
                D !== U && De(
                  e,
                  t,
                  A,
                  D,
                  n,
                  U
                );
            }
        }
        ji(
          e,
          i,
          r,
          d,
          E,
          R,
          u,
          a
        );
        return;
      case "select":
        D = i = r = A = null;
        for (u in l)
          if (d = l[u], l.hasOwnProperty(u) && d != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = d;
              default:
                n.hasOwnProperty(u) || De(
                  e,
                  t,
                  u,
                  null,
                  n,
                  d
                );
            }
        for (a in n)
          if (u = n[a], d = l[a], n.hasOwnProperty(a) && (u != null || d != null))
            switch (a) {
              case "value":
                A = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== d && De(
                  e,
                  t,
                  a,
                  u,
                  n,
                  d
                );
            }
        t = r, l = i, n = D, A != null ? An(e, !!l, A, !1) : !!n != !!l && (t != null ? An(e, !!l, t, !0) : An(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        D = A = null;
        for (r in l)
          if (a = l[r], l.hasOwnProperty(r) && a != null && !n.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(e, t, r, null, n, a);
            }
        for (i in n)
          if (a = n[i], u = l[i], n.hasOwnProperty(i) && (a != null || u != null))
            switch (i) {
              case "value":
                A = a;
                break;
              case "defaultValue":
                D = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== u && De(e, t, i, a, n, u);
            }
        Cr(e, A, D);
        return;
      case "option":
        for (var Q in l)
          if (A = l[Q], l.hasOwnProperty(Q) && A != null && !n.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                De(
                  e,
                  t,
                  Q,
                  null,
                  n,
                  A
                );
            }
        for (d in n)
          if (A = n[d], D = l[d], n.hasOwnProperty(d) && A !== D && (A != null || D != null))
            switch (d) {
              case "selected":
                e.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                De(
                  e,
                  t,
                  d,
                  A,
                  n,
                  D
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
        for (var J in l)
          A = l[J], l.hasOwnProperty(J) && A != null && !n.hasOwnProperty(J) && De(e, t, J, null, n, A);
        for (E in n)
          if (A = n[E], D = l[E], n.hasOwnProperty(E) && A !== D && (A != null || D != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(f(137, t));
                break;
              default:
                De(
                  e,
                  t,
                  E,
                  A,
                  n,
                  D
                );
            }
        return;
      default:
        if (Gi(t)) {
          for (var we in l)
            A = l[we], l.hasOwnProperty(we) && A !== void 0 && !n.hasOwnProperty(we) && Nf(
              e,
              t,
              we,
              void 0,
              n,
              A
            );
          for (R in n)
            A = n[R], D = l[R], !n.hasOwnProperty(R) || A === D || A === void 0 && D === void 0 || Nf(
              e,
              t,
              R,
              A,
              n,
              D
            );
          return;
        }
    }
    for (var S in l)
      A = l[S], l.hasOwnProperty(S) && A != null && !n.hasOwnProperty(S) && De(e, t, S, null, n, A);
    for (U in n)
      A = n[U], D = l[U], !n.hasOwnProperty(U) || A === D || A == null && D == null || De(e, t, U, A, n, D);
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
  function cg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], u = a.transferSize, i = a.initiatorType, r = a.duration;
        if (u && r && Ld(i)) {
          for (i = 0, r = a.responseEnd, n += 1; n < l.length; n++) {
            var d = l[n], E = d.startTime;
            if (E > r) break;
            var R = d.transferSize, U = d.initiatorType;
            R && Ld(U) && (d = d.responseEnd, i += R * (d < r ? 1 : (r - E) / (d - E)));
          }
          if (--n, t += 8 * (u + i) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Df = null, wf = null;
  function oi(e) {
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
  function Rf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cf = null;
  function fg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Cf ? !1 : (Cf = e, !0) : (Cf = null, !1);
  }
  var Yd = typeof setTimeout == "function" ? setTimeout : void 0, rg = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, sg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(e) {
    return Gd.resolve(null).then(e).catch(og);
  } : Yd;
  function og(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Bl(e) {
    return e === "head";
  }
  function Xd(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), ta(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          ka(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ka(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, r = u.nodeName;
            u[oa] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && ka(e.ownerDocument.body);
      l = a;
    } while (l);
    ta(t);
  }
  function Qd(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function Uf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uf(l), Li(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function dg(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[oa])
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
      if (e = Bt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hg(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Bf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function mg(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Bt(e) {
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
  var xf = null;
  function Zd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Bt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Kd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function kd(e, t, l) {
    switch (t = oi(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(f(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(f(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function ka(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Li(e);
  }
  var xt = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Set();
  function di(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var dl = B.d;
  B.d = {
    f: gg,
    r: vg,
    D: yg,
    C: bg,
    L: Sg,
    m: pg,
    X: Eg,
    S: zg,
    M: Ag
  };
  function gg() {
    var e = dl.f(), t = ni();
    return e || t;
  }
  function vg(e) {
    var t = pn(e);
    t !== null && t.tag === 5 && t.type === "form" ? so(t) : dl.r(e);
  }
  var Pn = typeof document > "u" ? null : document;
  function Wd(e, t, l) {
    var n = Pn;
    if (n && typeof t == "string" && t) {
      var a = Nt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Jd.has(a) || (Jd.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), ut(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function yg(e) {
    dl.D(e), Wd("dns-prefetch", e, null);
  }
  function bg(e, t) {
    dl.C(e, t), Wd("preconnect", e, t);
  }
  function Sg(e, t, l) {
    dl.L(e, t, l);
    var n = Pn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Nt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Nt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Nt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Nt(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = In(e);
          break;
        case "script":
          u = ea(e);
      }
      xt.has(u) || (e = M(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), xt.set(u, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ja(u)) || t === "script" && n.querySelector(Wa(u)) || (t = n.createElement("link"), ut(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function pg(e, t) {
    dl.m(e, t);
    var l = Pn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Nt(n) + '"][href="' + Nt(e) + '"]', u = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ea(e);
      }
      if (!xt.has(u) && (e = M({ rel: "modulepreload", href: e }, t), xt.set(u, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Wa(u)))
              return;
        }
        n = l.createElement("link"), ut(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function zg(e, t, l) {
    dl.S(e, t, l);
    var n = Pn;
    if (n && e) {
      var a = zn(n).hoistableStyles, u = In(e);
      t = t || "default";
      var i = a.get(u);
      if (!i) {
        var r = { loading: 0, preload: null };
        if (i = n.querySelector(
          Ja(u)
        ))
          r.loading = 5;
        else {
          e = M(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = xt.get(u)) && Lf(e, l);
          var d = i = n.createElement("link");
          $e(d), ut(d, "link", e), d._p = new Promise(function(E, R) {
            d.onload = E, d.onerror = R;
          }), d.addEventListener("load", function() {
            r.loading |= 1;
          }), d.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, hi(i, t, n);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: r
        }, a.set(u, i);
      }
    }
  }
  function Eg(e, t) {
    dl.X(e, t);
    var l = Pn;
    if (l && e) {
      var n = zn(l).hoistableScripts, a = ea(e), u = n.get(a);
      u || (u = l.querySelector(Wa(a)), u || (e = M({ src: e, async: !0 }, t), (t = xt.get(a)) && qf(e, t), u = l.createElement("script"), $e(u), ut(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function Ag(e, t) {
    dl.M(e, t);
    var l = Pn;
    if (l && e) {
      var n = zn(l).hoistableScripts, a = ea(e), u = n.get(a);
      u || (u = l.querySelector(Wa(a)), u || (e = M({ src: e, async: !0, type: "module" }, t), (t = xt.get(a)) && qf(e, t), u = l.createElement("script"), $e(u), ut(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(a, u));
    }
  }
  function $d(e, t, l, n) {
    var a = (a = ae.current) ? di(a) : null;
    if (!a) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = In(l.href), l = zn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = In(l.href);
          var u = zn(
            a
          ).hoistableStyles, i = u.get(e);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, i), (u = a.querySelector(
            Ja(e)
          )) && !u._p && (i.instance = u, i.state.loading = 5), xt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, xt.set(e, l), u || Tg(
            a,
            e,
            l,
            i.state
          ))), t && n === null)
            throw Error(f(528, ""));
          return i;
        }
        if (t && n !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ea(l), l = zn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function In(e) {
    return 'href="' + Nt(e) + '"';
  }
  function Ja(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fd(e) {
    return M({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Tg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), ut(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function ea(e) {
    return '[src="' + Nt(e) + '"]';
  }
  function Wa(e) {
    return "script[async]" + e;
  }
  function Pd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Nt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, $e(n), n;
          var a = M({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), $e(n), ut(n, "style", a), hi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = In(l.href);
          var u = e.querySelector(
            Ja(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, $e(u), u;
          n = Fd(l), (a = xt.get(a)) && Lf(n, a), u = (e.ownerDocument || e).createElement("link"), $e(u);
          var i = u;
          return i._p = new Promise(function(r, d) {
            i.onload = r, i.onerror = d;
          }), ut(u, "link", n), t.state.loading |= 4, hi(u, l.precedence, e), t.instance = u;
        case "script":
          return u = ea(l.src), (a = e.querySelector(
            Wa(u)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = xt.get(u)) && (n = M({}, l), qf(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), ut(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, hi(n, l.precedence, e));
    return t.instance;
  }
  function hi(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, u = a, i = 0; i < n.length; i++) {
      var r = n[i];
      if (r.dataset.precedence === t) u = r;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Lf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function qf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var mi = null;
  function Id(e, t, l) {
    if (mi === null) {
      var n = /* @__PURE__ */ new Map(), a = mi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = mi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var u = l[a];
      if (!(u[oa] || u[tt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var r = n.get(i);
        r ? r.push(u) : n.set(i, [u]);
      }
    }
    return n;
  }
  function eh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function _g(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
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
  function Mg(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = In(n.href), u = t.querySelector(
          Ja(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, $e(u);
          return;
        }
        u = t.ownerDocument || t, n = Fd(n), (a = xt.get(a)) && Lf(n, a), u = u.createElement("link"), $e(u);
        var i = u;
        i._p = new Promise(function(r, d) {
          i.onload = r, i.onerror = d;
        }), ut(u, "link", n), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = gi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var jf = 0;
  function Og(e, t) {
    return e.stylesheets && e.count === 0 && yi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && yi(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && jf === 0 && (jf = 62500 * cg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yi(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > jf ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vi = /* @__PURE__ */ new Map(), t.forEach(Ng, e), vi = null, gi.call(e));
  }
  function Ng(e, t) {
    if (!(t.state.loading & 4)) {
      var l = vi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), vi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var i = a[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), n = i);
        }
        n && l.set(null, n);
      }
      a = t.instance, i = a.getAttribute("data-precedence"), u = l.get(i) || n, u === n && l.set(null, a), l.set(i, a), this.count++, n = gi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var $a = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Dg(e, t, l, n, a, u, i, r, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ui(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ui(0), this.hiddenUpdates = Ui(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e, t, l, n, a, u, i, r, d, E, R, U) {
    return e = new Dg(
      e,
      t,
      l,
      i,
      d,
      E,
      R,
      U,
      r
    ), t = 1, u === !0 && (t |= 24), u = zt(3, null, null, t), e.current = u, u.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, zc(u), e;
  }
  function nh(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function ah(e, t, l, n, a, u) {
    a = nh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Tl(t), n.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (n.callback = u), l = _l(e, n, t), l !== null && (vt(l, e, t), Na(l, e, t));
  }
  function uh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Yf(e, t) {
    uh(e, t), (e = e.alternate) && uh(e, t);
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $l(e, 67108864);
      t !== null && vt(t, e, 67108864), Yf(e, 67108864);
    }
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mt();
      t = Hi(t);
      var l = $l(e, t);
      l !== null && vt(l, e, t), Yf(e, t);
    }
  }
  var bi = !0;
  function wg(e, t, l, n) {
    var a = O.T;
    O.T = null;
    var u = B.p;
    try {
      B.p = 2, Gf(e, t, l, n);
    } finally {
      B.p = u, O.T = a;
    }
  }
  function Rg(e, t, l, n) {
    var a = O.T;
    O.T = null;
    var u = B.p;
    try {
      B.p = 8, Gf(e, t, l, n);
    } finally {
      B.p = u, O.T = a;
    }
  }
  function Gf(e, t, l, n) {
    if (bi) {
      var a = Xf(n);
      if (a === null)
        Of(
          e,
          t,
          n,
          Si,
          l
        ), rh(e, n);
      else if (Ug(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (rh(e, n), t & 4 && -1 < Cg.indexOf(e)) {
        for (; a !== null; ) {
          var u = pn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Zl(u.pendingLanes);
                  if (i !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                      var d = 1 << 31 - St(i);
                      r.entanglements[1] |= d, i &= ~d;
                    }
                    Vt(u), (Te & 6) === 0 && (ti = xe() + 500, Va(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = $l(u, 2), r !== null && vt(r, u, 2), ni(), Yf(u, 2);
            }
          if (u = Xf(n), u === null && Of(
            e,
            t,
            n,
            Si,
            l
          ), u === a) break;
          a = u;
        }
        a !== null && n.stopPropagation();
      } else
        Of(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function Xf(e) {
    return e = Qi(e), Qf(e);
  }
  var Si = null;
  function Qf(e) {
    if (Si = null, e = Sn(e), e !== null) {
      var t = y(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = N(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Si = e, null;
  }
  function fh(e) {
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
        switch (rt()) {
          case ml:
            return 2;
          case Ql:
            return 8;
          case Jt:
          case ca:
            return 32;
          case bt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vf = !1, xl = null, Ll = null, ql = null, Fa = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map(), jl = [], Cg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        xl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ll = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
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
  function Ia(e, t, l, n, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = pn(t), t !== null && ih(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ug(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return xl = Ia(
          xl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Ll = Ia(
          Ll,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return ql = Ia(
          ql,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Fa.set(
          u,
          Ia(
            Fa.get(u) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Pa.set(
          u,
          Ia(
            Pa.get(u) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function sh(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var l = y(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = v(l), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              ch(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = N(l), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              ch(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Xf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Xi = n, l.target.dispatchEvent(n), Xi = null;
      } else
        return t = pn(l), t !== null && ih(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function oh(e, t, l) {
    pi(e) && l.delete(t);
  }
  function Hg() {
    Vf = !1, xl !== null && pi(xl) && (xl = null), Ll !== null && pi(Ll) && (Ll = null), ql !== null && pi(ql) && (ql = null), Fa.forEach(oh), Pa.forEach(oh);
  }
  function zi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Vf || (Vf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Hg
    )));
  }
  var Ei = null;
  function dh(e) {
    Ei !== e && (Ei = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Ei === e && (Ei = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (Qf(n || l) === null)
              continue;
            break;
          }
          var u = pn(l);
          u !== null && (e.splice(t, 3), t -= 3, Gc(
            u,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function ta(e) {
    function t(d) {
      return zi(d, e);
    }
    xl !== null && zi(xl, e), Ll !== null && zi(Ll, e), ql !== null && zi(ql, e), Fa.forEach(t), Pa.forEach(t);
    for (var l = 0; l < jl.length; l++) {
      var n = jl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < jl.length && (l = jl[0], l.blockedOn === null); )
      sh(l), l.blockedOn === null && jl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], u = l[n + 1], i = a[st] || null;
        if (typeof u == "function")
          i || dh(l);
        else if (i) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, i = u[st] || null)
              r = i.formAction;
            else if (Qf(a) !== null) continue;
          } else r = i.action;
          typeof r == "function" ? l[n + 1] = r : (l.splice(n, 3), n -= 3), dh(l);
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
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Zf(e) {
    this._internalRoot = e;
  }
  Ai.prototype.render = Zf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var l = t.current, n = Mt();
    ah(l, n, e, t, null, null);
  }, Ai.prototype.unmount = Zf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ah(e.current, 2, null, e, null, null), ni(), t[bn] = null;
    }
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  Ai.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Er();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < jl.length && t !== 0 && t < jl[l].priority; l++) ;
      jl.splice(l, 0, e), l === 0 && sh(e);
    }
  };
  var mh = s.version;
  if (mh !== "19.2.0")
    throw Error(
      f(
        527,
        mh,
        "19.2.0"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = b(t), e = e !== null ? H(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Bg = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
      try {
        gl = Ti.inject(
          Bg
        ), et = Ti;
      } catch {
      }
  }
  return tu.createRoot = function(e, t) {
    if (!h(e)) throw Error(f(299));
    var l = !1, n = "", a = zo, u = Eo, i = Ao;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lh(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      u,
      i,
      hh
    ), e[bn] = t.current, Mf(e), new Zf(t);
  }, tu.hydrateRoot = function(e, t, l) {
    if (!h(e)) throw Error(f(299));
    var n = !1, a = "", u = zo, i = Eo, r = Ao, d = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (d = l.formState)), t = lh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      d,
      u,
      i,
      r,
      hh
    ), t.context = nh(null), l = t.current, n = Mt(), n = Hi(n), a = Tl(n), a.callback = null, _l(l, a, n), l = n, t.current.lanes = l, sa(t, l), Vt(t), e[bn] = t.current, Mf(e), new Ai(t);
  }, tu.version = "19.2.0", tu;
}
var Th;
function Vg() {
  if (Th) return Jf.exports;
  Th = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), Jf.exports = Qg(), Jf.exports;
}
var Zg = Vg();
function Kg(c) {
  const [s, o] = p.useState(c);
  return c !== s && (!c || !s || c.length !== s.length || c.some((f, h) => f !== s[h])) ? (o(c), c) : s;
}
function kg(c, [s, o]) {
  const [f, h] = c;
  return f !== void 0 && h !== void 0 && s !== void 0 && o !== void 0 && s > f && s - f <= 20 && o < h ? [f, o] : f !== s || h !== o ? [s, o] : c;
}
function Jg(c, s) {
  let o = c?.clientWidth;
  if (o !== void 0 && s && s.length > 0) {
    const f = [...s.filter((h) => h > 0)].sort((h, y) => y - h);
    f.push(Math.floor(f[f.length - 1] / 2)), o = f.find((h, y) => h <= o || y === f.length - 1);
  }
  return o;
}
function Wg(c, s, o) {
  const [[f], h] = p.useReducer(kg, [o]), y = Kg(s), v = p.useRef(void 0);
  return { containerRef: p.useCallback(
    (T) => {
      v.current?.disconnect(), v.current = void 0;
      const b = () => h([Jg(T, y), window.innerWidth - document.documentElement.clientWidth]);
      b(), T && typeof ResizeObserver < "u" && (v.current = new ResizeObserver(b), v.current.observe(T)), typeof c == "function" ? c(T) : c && (c.current = T);
    },
    [c, y]
  ), containerWidth: f };
}
function $g(...c) {
  return [...c].filter(Boolean).join(" ");
}
function qh(c) {
  return ["react-photo-album", c].filter(Boolean).join("--");
}
function Fg(c) {
  return `--${qh(c)}`;
}
function or({ width: c, height: s }) {
  return c / s;
}
const Pg = Object.freeze([1200, 600, 300, 0]);
function Gl(c, s) {
  return typeof c == "function" ? c(s) : c;
}
function jh(c, s) {
  return s !== void 0 ? Gl(c, s) : void 0;
}
function Ig(c, s) {
  const o = Pg.findIndex((f) => f <= s);
  return Gl(c[Math.max(o, 0)], s);
}
function ur(c, s, o, f = 0) {
  if (s === void 0) return;
  const h = jh(c, s);
  return Math.round(Math.max(h === void 0 ? Ig(o, s) : h, f));
}
function ev(c, {
  spacing: s,
  padding: o,
  componentsProps: f,
  render: h
}) {
  return {
    spacing: ur(s, c, [20, 15, 10, 5]),
    padding: ur(o, c, [0, 0, 0, 0]),
    componentsProps: Gl(f, c) || {},
    render: Gl(h, c)
  };
}
function lu(c, s = 0) {
  const o = 10 ** s;
  return Math.round((c + Number.EPSILON) * o) / o;
}
function tv(c, s, o, f, h, y, v) {
  let N, T;
  const b = (M) => {
    const w = y * (h - 1) + 2 * v * h;
    return `calc((${M.match(/^\s*calc\((.*)\)\s*$/)?.[1] ?? M} - ${w}px) / ${lu((f - w) / o, 5)})`;
  }, H = c.srcSet;
  return H && H.length > 0 && (N = H.concat(
    H.some(({ width: M }) => M === c.width) ? [] : [{ src: c.src, width: c.width, height: c.height }]
  ).sort((M, w) => M.width - w.width).map((M) => `${M.src} ${M.width}w`).join(", ")), s?.size ? T = (s.sizes || []).map(({ viewport: M, size: w }) => `${M} ${b(w)}`).concat(b(s.size)).join(", ") : T = `${Math.ceil(o / f * 100)}vw`, { srcSet: N, sizes: T };
}
function lv({
  as: c,
  render: s,
  context: o,
  classes: f = [],
  variables: h = {},
  style: y,
  className: v,
  children: N,
  ...T
}, b) {
  const H = $g(
    ...(Array.isArray(f) ? f : [f]).filter((x) => typeof x == "string").map(qh),
    v
  ), w = { style: {
    ...Object.fromEntries(
      Object.entries(h).map(([x, L]) => [
        Fg(x.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
        typeof L == "number" ? lu(L, 5) : L
      ])
    ),
    ...y
  }, className: H, children: N, ...T };
  if (s) {
    const x = s({ ref: b, ...w }, o);
    if (x) return x;
  }
  const q = c || "div";
  return ze.jsx(q, { ref: b, ...w });
}
const Mi = p.forwardRef(lv);
function nv({
  photo: c,
  index: s,
  width: o,
  height: f,
  onClick: h,
  render: { wrapper: y, link: v, button: N, image: T, extras: b } = {},
  componentsProps: { link: H, button: M, wrapper: w, image: q } = {}
}, x) {
  const { href: L } = c, W = { photo: c, index: s, width: lu(o, 3), height: lu(f, 3) };
  let K;
  return L ? K = { ...H, as: "a", render: v, classes: ["photo", "link"], href: L, onClick: h } : h ? K = { ...M, as: "button", type: "button", render: N, classes: ["photo", "button"], onClick: h } : K = { ...w, render: y, classes: "photo" }, ze.jsxs(
    Mi,
    {
      ref: x,
      variables: { photoWidth: W.width, photoHeight: W.height },
      context: W,
      ...K,
      children: [
        ze.jsx(Mi, { as: "img", classes: "image", render: T, context: W, ...q }),
        b?.({}, W)
      ]
    }
  );
}
const av = p.forwardRef(nv);
function uv({
  layout: c,
  sizes: s,
  model: o,
  skeleton: f,
  onClick: h,
  render: { container: y, track: v, photo: N, ...T } = {},
  componentsProps: {
    container: b,
    track: H,
    link: M,
    button: w,
    wrapper: q,
    image: x
  } = {}
}, L) {
  const { spacing: W, padding: K, containerWidth: ee, tracks: te, variables: he, horizontal: ve } = o || {};
  return ze.jsxs(
    Mi,
    {
      role: "group",
      "aria-label": "Photo album",
      ...b,
      variables: { spacing: W, padding: K, containerWidth: ee, ...he },
      classes: ["", c],
      render: y,
      ref: L,
      children: [
        W !== void 0 && K !== void 0 && ee !== void 0 && te?.map(({ photos: $, variables: Y }, ce) => {
          const ne = $.length, ke = ve ? ne : te.length;
          return p.createElement(
            Mi,
            {
              ...H,
              key: ce,
              render: v,
              classes: "track",
              variables: { trackSize: ne, ...Y }
            },
            $.map((fe) => {
              const { photo: be, index: F, width: pe } = fe, { key: I, src: O, alt: B, title: Z, label: re } = be, Se = h ? (_) => {
                h({ event: _, photo: be, index: F });
              } : void 0;
              if (N) {
                const _ = N({ onClick: Se }, fe);
                if (_) return _;
              }
              const m = (_) => re ? { "aria-label": re, ..._ } : _;
              return ze.jsx(
                av,
                {
                  onClick: Se,
                  render: T,
                  componentsProps: {
                    image: {
                      loading: "lazy",
                      decoding: "async",
                      src: O,
                      alt: B,
                      title: Z,
                      ...tv(be, s, pe, ee, ke, W, K),
                      ...Gl(x, fe)
                    },
                    link: m(Gl(M, fe)),
                    button: m(Gl(w, fe)),
                    wrapper: Gl(q, fe)
                  },
                  ...fe
                },
                I ?? O
              );
            })
          );
        }),
        ee === void 0 && f
      ]
    }
  );
}
const iv = p.forwardRef(uv);
function cv(c, { photos: s, targetRowHeight: o, rowConstraints: f, ...h }) {
  const { spacing: y, padding: v, componentsProps: N, render: T } = ev(c, h), { singleRowMaxHeight: b, minPhotos: H, maxPhotos: M } = jh(f, c) || {};
  if (b !== void 0 && y !== void 0 && v !== void 0) {
    const w = Math.floor(
      s.reduce(
        (q, { width: x, height: L }) => q + x / L * b - 2 * v,
        v * s.length * 2 + y * (s.length - 1)
      )
    );
    w > 0 && (N.container = { ...N.container }, N.container.style = { maxWidth: w, ...N.container.style });
  }
  return {
    ...h,
    targetRowHeight: ur(o, c, [
      (w) => w / 5,
      (w) => w / 4,
      (w) => w / 3,
      (w) => w / 2
    ]),
    render: T,
    spacing: y,
    padding: v,
    minPhotos: H,
    maxPhotos: M,
    componentsProps: N
  };
}
function fv(c) {
  return (s, o) => c(o) - c(s);
}
function rv(c) {
  let s = 0;
  const o = [], f = (H, M) => c(o[H], o[M]) < 0, h = (H, M) => {
    const w = o[H];
    o[H] = o[M], o[M] = w;
  }, y = (H) => {
    let M = H, w = Math.floor(M / 2);
    for (; M > 1 && f(w, M); )
      h(w, M), M = w, w = Math.floor(M / 2);
  }, v = (H) => {
    let M = H, w = M * 2;
    for (; w <= s && (w < s && f(w, w + 1) && (w += 1), !!f(M, w)); )
      h(M, w), M = w, w = M * 2;
  };
  return { push: (H) => {
    s += 1, o[s] = H, y(s);
  }, pop: () => {
    if (s === 0) return;
    h(1, s), s -= 1;
    const H = o.pop();
    return v(1), H;
  }, size: () => s };
}
function sv(c, s, o) {
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
  y.set(s, 0);
  const v = rv(fv((N) => N[1]));
  for (v.push([s, 0]); v.size() > 0; ) {
    const [N, T] = v.pop();
    if (!h.has(N)) {
      const b = c(N);
      h.add(N), b.forEach((H, M) => {
        const w = T + H, q = f.get(M), x = y.get(M);
        (x === void 0 || x > w && (x / w > 1.005 || q !== void 0 && q < N)) && (y.set(M, w), v.push([M, w]), f.set(M, N));
      });
    }
  }
  return y.has(o) ? f : void 0;
}
function ov(c, s) {
  if (!c) return;
  const o = [];
  for (let f = s; f !== void 0; f = c.get(f))
    o.push(f);
  return o.reverse();
}
function dv(c, s, o) {
  return ov(sv(c, s, o), o);
}
function hv(c, s, o, f) {
  return lu(s / o / Math.min(...c.map((h) => or(h)))) + (f || 0) + 2;
}
function Yh(c, s, o, f) {
  return (s - (c.length - 1) * o - 2 * f * c.length) / c.reduce((h, y) => h + or(y), 0);
}
function mv(c, s, o, f, h, y, v) {
  const N = c.slice(s, o), T = Yh(N, f, h, y);
  return T > 0 ? (T - v) ** 2 * N.length : void 0;
}
function gv(c, s, o, f, h, y, v, N) {
  return (T) => {
    const b = /* @__PURE__ */ new Map();
    b.set(T, 0);
    const H = v || 1, M = Math.min(y, N || 1 / 0);
    for (let w = T + H; w < c.length + 1 && !(w - T > M); w += 1) {
      const q = mv(c, T, w, f, s, o, h);
      if (q === void 0) break;
      b.set(w, q);
    }
    return b;
  };
}
function vv(c, s, o, f, h, y, v) {
  const N = hv(c, f, h, y), T = gv(
    c,
    s,
    o,
    f,
    h,
    N,
    y,
    v
  ), b = dv(T, 0, c.length);
  if (!b) return;
  const H = [];
  for (let M = 1; M < b.length; M += 1) {
    const w = c.map((x, L) => ({ photo: x, index: L })).slice(b[M - 1], b[M]), q = Yh(
      w.map(({ photo: x }) => x),
      f,
      s,
      o
    );
    H.push({
      photos: w.map(({ photo: x, index: L }) => ({
        photo: x,
        index: L,
        width: q * or(x),
        height: q
      }))
    });
  }
  return { spacing: s, padding: o, containerWidth: f, tracks: H, horizontal: !0 };
}
function yv({ photos: c, breakpoints: s, defaultContainerWidth: o, ...f }, h) {
  const { containerRef: y, containerWidth: v } = Wg(h, s, o), { spacing: N, padding: T, targetRowHeight: b, minPhotos: H, maxPhotos: M, ...w } = cv(v, {
    photos: c,
    ...f
  }), q = p.useMemo(
    () => v !== void 0 && N !== void 0 && T !== void 0 && b !== void 0 ? vv(c, N, T, v, b, H, M) : void 0,
    [c, N, T, v, b, H, M]
  );
  return ze.jsx(iv, { layout: "rows", ref: y, model: q, ...w });
}
const bv = p.forwardRef(yv), Gh = "carousel", Xh = "controller", Sv = "navigation", pv = "no-scroll", dr = "portal", zv = "root", Qh = "toolbar", Pf = "loading", If = "error", er = "complete", Ev = "placeholder", Av = (c) => `active-slide-${c}`, Vh = "flex_center", Tv = "no_scroll", Zh = "no_scroll_padding", hr = "slide", _v = "slide_wrapper", on = "prev", dn = "next", _h = "swipe", na = "close", Kh = "onPointerDown", kh = "onPointerMove", Jh = "onPointerUp", Wh = "onPointerLeave", $h = "onPointerCancel", Fh = "onKeyDown", Mv = "onKeyUp", Ph = "onWheel", Ov = "Escape", Nv = "ArrowLeft", Dv = "ArrowRight", wv = "button", ir = "icon", Ih = "contain", Mh = "cover", Rv = "Unknown action type";
var Cv = Lh();
const em = "yarl__";
function hl(...c) {
  return [...c].filter(Boolean).join(" ");
}
function _e(c) {
  return `${em}${c}`;
}
function yt(c) {
  return `--${em}${c}`;
}
function nu(c, s) {
  return `${c}${s ? `_${s}` : ""}`;
}
function mr(c) {
  return (s) => nu(c, s);
}
function aa(c, s) {
  var o;
  return (o = c?.[s]) !== null && o !== void 0 ? o : s;
}
function Uv(c, s, o) {
  return aa(c, "{index} of {total}").replace(/\{index}/g, `${gr(o, s.length) + 1}`).replace(/\{total}/g, `${s.length}`);
}
function tm(...c) {
  return () => {
    c.forEach((s) => {
      s();
    });
  };
}
function Xl(c, s, o) {
  return () => {
    const f = p.useContext(o);
    if (!f)
      throw new Error(`${c} must be used within a ${s}.Provider`);
    return f;
  };
}
function lm() {
  return typeof window < "u";
}
function Hv(c, s = 0) {
  const o = 10 ** s;
  return Math.round((c + Number.EPSILON) * o) / o;
}
function nm(c) {
  return c.type === void 0 || c.type === "image";
}
function Bv(c, s) {
  return c.imageFit === Mh || c.imageFit !== Ih && s === Mh;
}
function Ni(c) {
  return typeof c == "string" ? Number.parseInt(c, 10) : c;
}
function Oi(c) {
  if (typeof c == "number")
    return { pixel: c };
  if (typeof c == "string") {
    const s = Ni(c);
    return c.endsWith("%") ? { percent: s } : { pixel: s };
  }
  return { pixel: 0 };
}
function xv(c, s) {
  const o = Oi(s), f = o.percent !== void 0 ? c.width / 100 * o.percent : o.pixel;
  return {
    width: Math.max(c.width - 2 * f, 0),
    height: Math.max(c.height - 2 * f, 0)
  };
}
function gr(c, s) {
  return s > 0 ? (c % s + s) % s : 0;
}
function am(c) {
  return c.length > 0;
}
function um(c, s) {
  return c[gr(s, c.length)];
}
function cr(c, s) {
  return am(c) ? um(c, s) : void 0;
}
function Lv(c) {
  return nm(c) ? c.src : void 0;
}
function qv(c, s, o = 0) {
  return Math.min(c.preload, Math.max(c.finite ? s.length - 1 : Math.floor(s.length / 2), o));
}
const jv = Number(p.version.split(".")[0]) >= 19;
function Yv(c) {
  return { inert: jv ? c : c ? "" : void 0 };
}
function Gv(c) {
  c.scrollTop;
}
const fr = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [na] },
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
function hn(c, s) {
  return { name: c, component: s };
}
function Pe(c, s) {
  return { module: c, children: s };
}
function im(c, s, o) {
  return c.module.name === s ? o(c) : c.children ? [
    Pe(c.module, c.children.flatMap((f) => {
      var h;
      return (h = im(f, s, o)) !== null && h !== void 0 ? h : [];
    }))
  ] : [c];
}
function la(c, s, o) {
  return c.flatMap((f) => {
    var h;
    return (h = im(f, s, o)) !== null && h !== void 0 ? h : [];
  });
}
function Xv(c, s = [], o = []) {
  let f = c;
  const h = (q) => {
    const x = [...f];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L?.module.name === q)
        return !0;
      L?.children && x.push(...L.children);
    }
    return !1;
  }, y = (q, x) => {
    if (q === "") {
      f = [Pe(x, f)];
      return;
    }
    f = la(f, q, (L) => [Pe(x, [L])]);
  }, v = (q, x) => {
    f = la(f, q, (L) => [Pe(L.module, [Pe(x, L.children)])]);
  }, N = (q, x, L) => {
    f = la(f, q, (W) => {
      var K;
      return [
        Pe(W.module, [
          ...L ? [Pe(x)] : [],
          ...(K = W.children) !== null && K !== void 0 ? K : [],
          ...L ? [] : [Pe(x)]
        ])
      ];
    });
  }, T = (q, x, L) => {
    f = la(f, q, (W) => [
      ...L ? [Pe(x)] : [],
      W,
      ...L ? [] : [Pe(x)]
    ]);
  }, b = (q) => {
    v(Xh, q);
  }, H = (q, x) => {
    f = la(f, q, (L) => [Pe(x, L.children)]);
  }, M = (q) => {
    f = la(f, q, (x) => x.children);
  }, w = (q) => {
    o.push(q);
  };
  return s.forEach((q) => {
    q({
      contains: h,
      addParent: y,
      append: v,
      addChild: N,
      addSibling: T,
      addModule: b,
      replace: H,
      remove: M,
      augment: w
    });
  }), {
    config: f,
    augmentation: (q) => o.reduce((x, L) => L(x), q)
  };
}
const cm = p.createContext(null), fm = Xl("useA11yContext", "A11yContext", cm);
function Qv({ children: c }) {
  const [s, o] = p.useState(!1), [f, h] = p.useState(!1), y = p.useMemo(() => ({ focusWithin: s, trackFocusWithin: (N, T) => {
    const b = (H) => (M) => {
      var w;
      M.currentTarget.contains(M.relatedTarget) || o(H), (w = H ? N : T) === null || w === void 0 || w(M);
    };
    return {
      onFocus: b(!0),
      onBlur: b(!1)
    };
  }, autoPlaying: f, setAutoPlaying: h }), [s, f]);
  return p.createElement(cm.Provider, { value: y }, c);
}
const rm = p.createContext(null), vr = Xl("useDocument", "DocumentContext", rm);
function Vv({ nodeRef: c, children: s }) {
  const o = p.useMemo(() => {
    const f = (y) => {
      var v;
      return ((v = y || c.current) === null || v === void 0 ? void 0 : v.ownerDocument) || document;
    };
    return { getOwnerDocument: f, getOwnerWindow: (y) => {
      var v;
      return ((v = f(y)) === null || v === void 0 ? void 0 : v.defaultView) || window;
    } };
  }, [c]);
  return p.createElement(rm.Provider, { value: o }, s);
}
const sm = p.createContext(null), Di = Xl("useEvents", "EventsContext", sm);
function Zv({ children: c }) {
  const [s] = p.useState({});
  p.useEffect(() => () => {
    Object.keys(s).forEach((f) => delete s[f]);
  }, [s]);
  const o = p.useMemo(() => {
    const f = (v, N) => {
      var T;
      (T = s[v]) === null || T === void 0 || T.splice(0, s[v].length, ...s[v].filter((b) => b !== N));
    };
    return { publish: (...[v, N]) => {
      var T;
      (T = s[v]) === null || T === void 0 || T.forEach((b) => b(N));
    }, subscribe: (v, N) => (s[v] || (s[v] = []), s[v].push(N), () => f(v, N)), unsubscribe: f };
  }, [s]);
  return p.createElement(sm.Provider, { value: o }, c);
}
const om = p.createContext(null), au = Xl("useLightboxProps", "LightboxPropsContext", om);
function Kv({ children: c, ...s }) {
  return p.createElement(om.Provider, { value: s }, c);
}
const dm = p.createContext(null), wi = Xl("useLightboxState", "LightboxStateContext", dm), hm = p.createContext(null), kv = Xl("useLightboxDispatch", "LightboxDispatchContext", hm);
function Jv(c, s) {
  switch (s.type) {
    case "swipe": {
      const { slides: o } = c, f = s?.increment || 0, h = c.globalIndex + f, y = gr(h, o.length), v = cr(o, y), N = f || s.duration !== void 0 ? {
        increment: f,
        duration: s.duration,
        easing: s.easing
      } : void 0;
      return { slides: o, currentIndex: y, globalIndex: h, currentSlide: v, animation: N };
    }
    case "update":
      return s.slides !== c.slides || s.index !== c.currentIndex ? {
        slides: s.slides,
        currentIndex: s.index,
        globalIndex: s.index,
        currentSlide: cr(s.slides, s.index)
      } : c;
    default:
      throw new Error(Rv);
  }
}
function Wv({ slides: c, index: s, children: o }) {
  const [f, h] = p.useReducer(Jv, {
    slides: c,
    currentIndex: s,
    globalIndex: s,
    currentSlide: cr(c, s)
  });
  p.useEffect(() => {
    h({ type: "update", slides: c, index: s });
  }, [c, s]);
  const y = p.useMemo(() => ({ ...f, state: f, dispatch: h }), [f, h]);
  return p.createElement(
    hm.Provider,
    { value: h },
    p.createElement(dm.Provider, { value: y }, o)
  );
}
const mm = p.createContext(null), Ri = Xl("useTimeouts", "TimeoutsContext", mm);
function $v({ children: c }) {
  const [s] = p.useState([]);
  p.useEffect(() => () => {
    s.forEach((f) => window.clearTimeout(f)), s.splice(0, s.length);
  }, [s]);
  const o = p.useMemo(() => {
    const f = (v) => {
      s.splice(0, s.length, ...s.filter((N) => N !== v));
    };
    return { setTimeout: (v, N) => {
      const T = window.setTimeout(() => {
        f(T), v();
      }, N);
      return s.push(T), T;
    }, clearTimeout: (v) => {
      v !== void 0 && (f(v), window.clearTimeout(v));
    } };
  }, [s]);
  return p.createElement(mm.Provider, { value: o }, c);
}
const gm = p.forwardRef(function({ label: s, className: o, icon: f, renderIcon: h, onClick: y, style: v, ...N }, T) {
  const { styles: b, labels: H } = au(), M = aa(H, s);
  return p.createElement("button", { ref: T, type: "button", title: M, "aria-label": M, className: hl(_e(wv), o), onClick: y, style: { ...v, ...b.button }, ...N }, h ? h() : p.createElement(f, { className: _e(ir), style: b.icon }));
});
function Fv(c, s) {
  const o = (f) => p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...f }, s);
  return o.displayName = c, o;
}
function uu(c, s) {
  return Fv(c, p.createElement(
    "g",
    { fill: "currentColor" },
    p.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    s
  ));
}
const Pv = uu("Close", p.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), Iv = uu("Previous", p.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), ey = uu("Next", p.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), ty = uu("Loading", p.createElement(p.Fragment, null, Array.from({ length: 8 }).map((c, s, o) => p.createElement("line", { key: s, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / o.length * (s + 1), transform: `rotate(${360 / o.length * s}, 12, 12)` })))), ly = uu("Error", p.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), iu = lm() ? p.useLayoutEffect : p.useEffect;
function vm() {
  const [c, s] = p.useState(!1);
  return p.useEffect(() => {
    var o, f;
    const h = (o = window.matchMedia) === null || o === void 0 ? void 0 : o.call(window, "(prefers-reduced-motion: reduce)");
    s(h?.matches);
    const y = (v) => s(v.matches);
    return (f = h?.addEventListener) === null || f === void 0 || f.call(h, "change", y), () => {
      var v;
      return (v = h?.removeEventListener) === null || v === void 0 ? void 0 : v.call(h, "change", y);
    };
  }, []), c;
}
function ny(c) {
  let s = 0, o = 0, f = 0;
  const y = window.getComputedStyle(c).transform.match(/matrix.*\((.+)\)/);
  if (y) {
    const v = y[1].split(",").map(Ni);
    v.length === 6 ? (s = v[4], o = v[5]) : v.length === 16 && (s = v[12], o = v[13], f = v[14]);
  }
  return { x: s, y: o, z: f };
}
function Oh(c, s) {
  const o = p.useRef(void 0), f = p.useRef(void 0), h = vm();
  return iu(() => {
    var y, v, N;
    if (c.current && o.current !== void 0 && !h) {
      const { keyframes: T, duration: b, easing: H, onfinish: M } = s(o.current, c.current.getBoundingClientRect(), ny(c.current)) || {};
      if (T && b) {
        (y = f.current) === null || y === void 0 || y.cancel(), f.current = void 0;
        try {
          f.current = (N = (v = c.current).animate) === null || N === void 0 ? void 0 : N.call(v, T, { duration: b, easing: H });
        } catch (w) {
          console.error(w);
        }
        f.current && (f.current.onfinish = () => {
          f.current = void 0, M?.();
        });
      }
    }
    o.current = void 0;
  }), {
    prepareAnimation: (y) => {
      o.current = y;
    },
    isAnimationPlaying: () => {
      var y;
      return ((y = f.current) === null || y === void 0 ? void 0 : y.playState) === "running";
    }
  };
}
function ym() {
  const c = p.useRef(null), s = p.useRef(void 0), [o, f] = p.useState();
  return { setContainerRef: p.useCallback((y) => {
    c.current = y, s.current && (s.current.disconnect(), s.current = void 0);
    const v = () => {
      if (y) {
        const N = window.getComputedStyle(y), T = (b) => parseFloat(b) || 0;
        f({
          width: Math.round(y.clientWidth - T(N.paddingLeft) - T(N.paddingRight)),
          height: Math.round(y.clientHeight - T(N.paddingTop) - T(N.paddingBottom))
        });
      } else
        f(void 0);
    };
    v(), y && typeof ResizeObserver < "u" && (s.current = new ResizeObserver(v), s.current.observe(y));
  }, []), containerRef: c, containerRect: o };
}
function _i() {
  const c = p.useRef(void 0), { setTimeout: s, clearTimeout: o } = Ri();
  return p.useCallback((f, h) => {
    o(c.current), c.current = s(f, h > 0 ? h : 0);
  }, [s, o]);
}
function Ke(c) {
  const s = p.useRef(c);
  return iu(() => {
    s.current = c;
  }), p.useCallback((...o) => {
    var f;
    return (f = s.current) === null || f === void 0 ? void 0 : f.call(s, ...o);
  }, []);
}
function Nh(c, s) {
  typeof c == "function" ? c(s) : c && (c.current = s);
}
function rr(c, s) {
  return p.useMemo(() => c == null && s == null ? null : (o) => {
    Nh(c, o), Nh(s, o);
  }, [c, s]);
}
function ay(c, s = !1) {
  const o = p.useRef(!1);
  iu(() => {
    s && o.current && (o.current = !1, c());
  }, [s, c]);
  const f = p.useCallback(() => {
    o.current = !0;
  }, []), h = p.useCallback(() => {
    o.current = !1;
  }, []);
  return { onFocus: f, onBlur: h };
}
function yr() {
  const [c, s] = p.useState(!1);
  return iu(() => {
    s(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []), c;
}
function uy() {
  const [c] = p.useState({}), s = p.useCallback((h, y) => {
    var v;
    (v = c[h]) === null || v === void 0 || v.forEach((N) => {
      y.isPropagationStopped() || N(y);
    });
  }, [c]), o = p.useMemo(() => ({
    onPointerDown: (h) => s(Kh, h),
    onPointerMove: (h) => s(kh, h),
    onPointerUp: (h) => s(Jh, h),
    onPointerLeave: (h) => s(Wh, h),
    onPointerCancel: (h) => s($h, h),
    onKeyDown: (h) => s(Fh, h),
    onKeyUp: (h) => s(Mv, h),
    onWheel: (h) => s(Ph, h)
  }), [s]), f = p.useCallback((h, y) => (c[h] || (c[h] = []), c[h].unshift(y), () => {
    const v = c[h];
    v && v.splice(0, v.length, ...v.filter((N) => N !== y));
  }), [c]);
  return { registerSensors: o, subscribeSensors: f };
}
function Dh(c, s) {
  const o = p.useRef(0), f = _i(), h = Ke((...y) => {
    o.current = Date.now(), c(y);
  });
  return p.useCallback((...y) => {
    f(() => {
      h(y);
    }, s - (Date.now() - o.current));
  }, [s, h, f]);
}
const tr = mr("slide"), lr = mr("slide_image");
function iy({ slide: c, offset: s, render: o, rect: f, imageFit: h, imageProps: y, onClick: v, onLoad: N, onError: T, style: b }) {
  var H, M, w, q, x, L, W, K;
  const [ee, te] = p.useState(Pf), { publish: he } = Di(), { setTimeout: ve } = Ri(), $ = p.useRef(null);
  p.useEffect(() => {
    s === 0 && he(Av(ee));
  }, [s, ee, he]);
  const Y = Ke((_) => {
    ("decode" in _ ? _.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      _.parentNode && (te(er), ve(() => {
        N?.(_);
      }, 0));
    });
  }), ce = p.useCallback((_) => {
    $.current = _, _?.complete && Y(_);
  }, [Y]), ne = p.useCallback((_) => {
    Y(_.currentTarget);
  }, [Y]), ke = Ke(() => {
    te(If), T?.();
  }), fe = Bv(c, h), be = (_, j) => Number.isFinite(_) ? _ : j, F = be(Math.max(...((M = (H = c.srcSet) === null || H === void 0 ? void 0 : H.map((_) => _.width)) !== null && M !== void 0 ? M : []).concat(c.width ? [c.width] : []).filter(Boolean)), ((w = $.current) === null || w === void 0 ? void 0 : w.naturalWidth) || 0), pe = be(Math.max(...((x = (q = c.srcSet) === null || q === void 0 ? void 0 : q.map((_) => _.height)) !== null && x !== void 0 ? x : []).concat(c.height ? [c.height] : []).filter(Boolean)), ((L = $.current) === null || L === void 0 ? void 0 : L.naturalHeight) || 0), I = F && pe ? {
    maxWidth: `min(${F}px, 100%)`,
    maxHeight: `min(${pe}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, O = (W = c.srcSet) === null || W === void 0 ? void 0 : W.sort((_, j) => _.width - j.width).map((_) => `${_.src} ${_.width}w`).join(", "), B = () => f && !fe && c.width && c.height ? f.height / c.height * c.width : Number.MAX_VALUE, Z = O && f && lm() ? `${Math.round(Math.min(B(), f.width))}px` : void 0, { style: re, className: Se, ...m } = y || {};
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("img", { ref: ce, onLoad: ne, onError: ke, onClick: v, draggable: !1, className: hl(_e(lr()), fe && _e(lr("cover")), ee !== er && _e(lr("loading")), Se), style: { ...I, ...b, ...re }, ...m, alt: (K = c.alt) !== null && K !== void 0 ? K : "", sizes: Z, srcSet: O, src: c.src }),
    ee !== er && p.createElement(
      "div",
      { className: _e(tr(Ev)) },
      ee === Pf && (o?.iconLoading ? o.iconLoading() : p.createElement(ty, { className: hl(_e(ir), _e(tr(Pf))) })),
      ee === If && (o?.iconError ? o.iconError() : p.createElement(ly, { className: hl(_e(ir), _e(tr(If))) }))
    )
  );
}
const cy = p.forwardRef(function({ className: s, children: o, onFocus: f, onBlur: h, ...y }, v) {
  const N = p.useRef(null), { trackFocusWithin: T } = fm();
  return p.createElement(
    Vv,
    { nodeRef: N },
    p.createElement("div", { ref: rr(v, N), className: hl(_e("root"), s), ...T(f, h), ...y }, o)
  );
});
var ct;
(function(c) {
  c[c.NONE = 0] = "NONE", c[c.SWIPE = 1] = "SWIPE", c[c.PULL = 2] = "PULL", c[c.ANIMATION = 3] = "ANIMATION";
})(ct || (ct = {}));
function fy(c, s, o, f, h) {
  p.useEffect(
    () => tm(c(Kh, s), c(kh, o), c(Jh, f), c(Wh, f), c($h, f)),
    [c, s, o, f, h]
  );
}
var Yt;
(function(c) {
  c[c.NONE = 0] = "NONE", c[c.SWIPE = 1] = "SWIPE", c[c.PULL = 2] = "PULL";
})(Yt || (Yt = {}));
const nr = 30;
function ry({ disableSwipeNavigation: c, closeOnBackdropClick: s }, o, f, h, y, v, N, T, b, H, M, w, q, x, L, W) {
  const K = p.useRef(0), ee = p.useRef([]), te = p.useRef(void 0), he = p.useRef(0), ve = p.useRef(Yt.NONE), $ = p.useCallback((F) => {
    te.current === F.pointerId && (te.current = void 0, ve.current = Yt.NONE);
    const pe = ee.current;
    pe.splice(0, pe.length, ...pe.filter((I) => I.pointerId !== F.pointerId));
  }, []), Y = p.useCallback((F) => {
    $(F), F.persist(), ee.current.push(F);
  }, [$]), ce = p.useCallback((F) => ee.current.find(({ pointerId: pe }) => F.pointerId === pe), []), ne = Ke((F) => {
    Y(F);
  }), ke = (F, pe) => M && F > pe || H && F < -pe, fe = Ke((F) => {
    const pe = ce(F);
    if (pe)
      if (te.current === F.pointerId) {
        const I = Date.now() - he.current, O = K.current;
        ve.current === Yt.SWIPE ? Math.abs(O) > 0.3 * h || Math.abs(O) > 5 && I < y ? T(O, I) : b(O) : ve.current === Yt.PULL && (ke(O, 2 * nr) ? x(O, I) : L(O)), K.current = 0, ve.current = Yt.NONE;
      } else {
        const { target: I } = F;
        s && I instanceof HTMLElement && I === pe.target && (I.classList.contains(_e(hr)) || I.classList.contains(_e(_v))) && W();
      }
    $(F);
  }), be = Ke((F) => {
    const pe = ce(F);
    if (pe) {
      const I = te.current === F.pointerId;
      if (F.buttons === 0) {
        I && K.current !== 0 ? fe(F) : $(pe);
        return;
      }
      const O = F.clientX - pe.clientX, B = F.clientY - pe.clientY;
      if (te.current === void 0) {
        const Z = (re) => {
          Y(F), te.current = F.pointerId, he.current = Date.now(), ve.current = re;
        };
        Math.abs(O) > Math.abs(B) && Math.abs(O) > nr && f(O) ? c || (Z(Yt.SWIPE), v()) : Math.abs(B) > Math.abs(O) && ke(B, nr) && (Z(Yt.PULL), w());
      } else I && (ve.current === Yt.SWIPE ? (K.current = O, N(O)) : ve.current === Yt.PULL && (K.current = B, q(B)));
    }
  });
  fy(o, ne, be, fe);
}
function sy({ preventDefaultWheelX: c, preventDefaultWheelY: s }) {
  const o = p.useRef(null), f = Ke((h) => {
    const y = Math.abs(h.deltaX) > Math.abs(h.deltaY);
    (y && c || !y && s || h.ctrlKey) && h.preventDefault();
  });
  return p.useCallback((h) => {
    var y;
    h ? h.addEventListener("wheel", f, { passive: !1 }) : (y = o.current) === null || y === void 0 || y.removeEventListener("wheel", f), o.current = h;
  }, [f]);
}
function oy(c, s, o, f, h, y, v, N, T) {
  const b = p.useRef(0), H = p.useRef(0), M = p.useRef(void 0), w = p.useRef(void 0), q = p.useRef(0), x = p.useRef(void 0), L = p.useRef(0), { setTimeout: W, clearTimeout: K } = Ri(), ee = p.useCallback(() => {
    M.current && (K(M.current), M.current = void 0);
  }, [K]), te = p.useCallback(() => {
    w.current && (K(w.current), w.current = void 0);
  }, [K]), he = Ke(() => {
    c !== ct.SWIPE && (b.current = 0, L.current = 0, ee(), te());
  });
  p.useEffect(he, [c, he]);
  const ve = Ke((Y) => {
    w.current = void 0, b.current === Y && T(b.current);
  }), $ = Ke((Y) => {
    if (Y.ctrlKey || Math.abs(Y.deltaY) > Math.abs(Y.deltaX))
      return;
    const ce = (ne) => {
      q.current = ne, K(x.current), x.current = ne > 0 ? W(() => {
        q.current = 0, x.current = void 0;
      }, 300) : void 0;
    };
    if (c === ct.NONE) {
      if (Math.abs(Y.deltaX) <= 1.2 * Math.abs(q.current)) {
        ce(Y.deltaX);
        return;
      }
      if (!o(-Y.deltaX))
        return;
      if (H.current += Y.deltaX, ee(), Math.abs(H.current) > 30)
        H.current = 0, ce(0), L.current = Date.now(), y();
      else {
        const ne = H.current;
        M.current = W(() => {
          M.current = void 0, ne === H.current && (H.current = 0);
        }, h);
      }
    } else if (c === ct.SWIPE) {
      let ne = b.current - Y.deltaX;
      if (ne = Math.min(Math.abs(ne), f) * Math.sign(ne), b.current = ne, v(ne), te(), Math.abs(ne) > 0.2 * f) {
        ce(Y.deltaX), N(ne, Date.now() - L.current);
        return;
      }
      w.current = W(() => ve(ne), 2 * h);
    } else
      ce(Y.deltaX);
  });
  p.useEffect(() => s(Ph, $), [s, $]);
}
const wh = mr("container"), bm = p.createContext(null), cu = Xl("useController", "ControllerContext", bm);
function dy({ children: c, ...s }) {
  var o;
  const { carousel: f, animation: h, controller: y, on: v, styles: N, render: T } = s, { closeOnPullUp: b, closeOnPullDown: H, preventDefaultWheelX: M, preventDefaultWheelY: w } = y, [q, x] = p.useState(), L = wi(), W = kv(), [K, ee] = p.useState(ct.NONE), te = p.useRef(0), he = p.useRef(0), ve = p.useRef(1), { registerSensors: $, subscribeSensors: Y } = uy(), { subscribe: ce, publish: ne } = Di(), ke = _i(), fe = _i(), be = _i(), { containerRef: F, setContainerRef: pe, containerRect: I } = ym(), O = rr(sy({ preventDefaultWheelX: M, preventDefaultWheelY: w }), pe), B = p.useRef(null), Z = rr(B, void 0), { getOwnerDocument: re } = vr(), Se = yr(), m = (G) => (Se ? -1 : 1) * (typeof G == "number" ? G : 1), _ = Ke(() => {
    var G;
    return (G = F.current) === null || G === void 0 ? void 0 : G.focus();
  }), j = Ke(() => s), X = Ke(() => L), P = p.useCallback((G) => ne(on, G), [ne]), ae = p.useCallback((G) => ne(dn, G), [ne]), se = p.useCallback(() => ne(na), [ne]), Je = (G) => !(f.finite && (m(G) > 0 && L.currentIndex === 0 || m(G) < 0 && L.currentIndex === L.slides.length - 1)), Be = (G) => {
    var Ce;
    te.current = G, (Ce = F.current) === null || Ce === void 0 || Ce.style.setProperty(yt("swipe_offset"), `${Math.round(G)}px`);
  }, Zt = (G) => {
    var Ce, Ie;
    he.current = G, ve.current = (() => {
      const ml = H && G > 0 ? G : b && G < 0 ? -G : 0;
      return Math.min(Math.max(Hv(1 - ml / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (Ce = F.current) === null || Ce === void 0 || Ce.style.setProperty(yt("pull_offset"), `${Math.round(G)}px`), (Ie = F.current) === null || Ie === void 0 || Ie.style.setProperty(yt("pull_opacity"), `${ve.current}`);
  }, { prepareAnimation: mn } = Oh(B, (G, Ce, Ie) => {
    if (B.current && I)
      return {
        keyframes: [
          {
            transform: `translate(0, ${G.rect.y - Ce.y + Ie.y}px)`,
            opacity: G.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: G.duration,
        easing: h.easing.fade
      };
  }), gn = (G, Ce) => {
    if (b || H) {
      Zt(G);
      let Ie = 0;
      B.current && (Ie = h.fade * (Ce ? 2 : 1), mn({
        rect: B.current.getBoundingClientRect(),
        opacity: ve.current,
        duration: Ie
      })), be(() => {
        Zt(0), ee(ct.NONE);
      }, Ie), ee(ct.ANIMATION), Ce || se();
    }
  }, { prepareAnimation: fu, isAnimationPlaying: Kt } = Oh(B, (G, Ce, Ie) => {
    var xe;
    if (B.current && I && (!((xe = L.animation) === null || xe === void 0) && xe.duration)) {
      const rt = Oi(f.spacing), ml = (rt.percent ? rt.percent * I.width / 100 : rt.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${m(L.globalIndex - G.index) * (I.width + ml) + G.rect.x - Ce.x + Ie.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: L.animation.duration,
        easing: L.animation.easing
      };
    }
  }), kt = Ke((G) => {
    var Ce, Ie;
    const xe = G.offset || 0, rt = xe ? h.swipe : (Ce = h.navigation) !== null && Ce !== void 0 ? Ce : h.swipe, ml = !xe && !Kt() ? h.easing.navigation : h.easing.swipe;
    let { direction: Ql } = G;
    const Jt = (Ie = G.count) !== null && Ie !== void 0 ? Ie : 1;
    let ca = ct.ANIMATION, bt = rt * Jt;
    if (!Ql) {
      const Vl = I?.width, gl = G.duration || 0, et = Vl ? rt / Vl * Math.abs(xe) : rt;
      Jt !== 0 ? (gl < et ? bt = bt / et * Math.max(gl, et / 5) : Vl && (bt = rt / Vl * (Vl - Math.abs(xe))), Ql = m(xe) > 0 ? on : dn) : bt = rt / 2;
    }
    let fa = 0;
    Ql === on ? Je(m(1)) ? fa = -Jt : (ca = ct.NONE, bt = rt) : Ql === dn && (Je(m(-1)) ? fa = Jt : (ca = ct.NONE, bt = rt)), bt = Math.round(bt), fe(() => {
      Be(0), ee(ct.NONE);
    }, bt), B.current && fu({
      rect: B.current.getBoundingClientRect(),
      index: L.globalIndex
    }), ee(ca), ne(_h, {
      type: "swipe",
      increment: fa,
      duration: bt,
      easing: ml
    });
  });
  p.useEffect(() => {
    var G, Ce;
    !((G = L.animation) === null || G === void 0) && G.increment && (!((Ce = L.animation) === null || Ce === void 0) && Ce.duration) && ke(() => W({ type: "swipe", increment: 0 }), L.animation.duration);
  }, [L.animation, W, ke]);
  const vn = [
    Y,
    Je,
    I?.width || 0,
    h.swipe,
    () => ee(ct.SWIPE),
    (G) => Be(G),
    (G, Ce) => kt({ offset: G, duration: Ce, count: 1 }),
    (G) => kt({ offset: G, count: 0 })
  ], Ci = [
    () => {
      H && ee(ct.PULL);
    },
    (G) => Zt(G),
    (G) => gn(G),
    (G) => gn(G, !0)
  ];
  ry(y, ...vn, b, H, ...Ci, se), oy(K, ...vn);
  const ua = Ke(() => {
    y.focus && re().querySelector(`.${_e(dr)} .${_e(wh())}`) && _();
  });
  p.useEffect(ua, [ua]);
  const yn = Ke(() => {
    var G;
    (G = v.view) === null || G === void 0 || G.call(v, { index: L.currentIndex });
  });
  p.useEffect(yn, [L.globalIndex, yn]), p.useEffect(() => tm(ce(on, (G) => kt({ direction: on, ...G })), ce(dn, (G) => kt({ direction: dn, ...G })), ce(_h, (G) => W(G))), [ce, kt, W]);
  const ia = p.useMemo(() => ({
    prev: P,
    next: ae,
    close: se,
    focus: _,
    slideRect: I ? xv(I, f.padding) : { width: 0, height: 0 },
    containerRect: I || { width: 0, height: 0 },
    subscribeSensors: Y,
    containerRef: F,
    setCarouselRef: Z,
    toolbarWidth: q,
    setToolbarWidth: x
  }), [
    P,
    ae,
    se,
    _,
    Y,
    I,
    F,
    Z,
    q,
    x,
    f.padding
  ]);
  return p.useImperativeHandle(y.ref, () => ({
    prev: P,
    next: ae,
    close: se,
    focus: _,
    getLightboxProps: j,
    getLightboxState: X
  }), [P, ae, se, _, j, X]), p.createElement("div", { ref: O, className: hl(_e(wh()), _e(Vh)), style: {
    ...K === ct.SWIPE ? { [yt("swipe_offset")]: `${Math.round(te.current)}px` } : null,
    ...K === ct.PULL ? {
      [yt("pull_offset")]: `${Math.round(he.current)}px`,
      [yt("pull_opacity")]: `${ve.current}`
    } : null,
    ...y.touchAction !== "none" ? { [yt("controller_touch_action")]: y.touchAction } : null,
    ...N.container
  }, tabIndex: -1, ...$ }, I && p.createElement(
    bm.Provider,
    { value: ia },
    c,
    (o = T.controls) === null || o === void 0 ? void 0 : o.call(T)
  ));
}
const hy = hn(Xh, dy);
function sn(c) {
  return nu(Gh, c);
}
function Rh(c) {
  return nu(hr, c);
}
function my({ slide: c, offset: s }) {
  const o = p.useRef(null), { currentIndex: f, slides: h } = wi(), { slideRect: y, focus: v } = cu(), { render: N, carousel: { imageFit: T, imageProps: b }, on: { click: H }, styles: { slide: M }, labels: w } = au(), { getOwnerDocument: q } = vr(), x = s !== 0;
  p.useEffect(() => {
    var W;
    x && (!((W = o.current) === null || W === void 0) && W.contains(q().activeElement)) && v();
  }, [x, v, q]);
  const L = () => {
    var W, K, ee, te;
    let he = (W = N.slide) === null || W === void 0 ? void 0 : W.call(N, { slide: c, offset: s, rect: y });
    return !he && nm(c) && (he = p.createElement(iy, { slide: c, offset: s, render: N, rect: y, imageFit: T, imageProps: b, onClick: x ? void 0 : () => H?.({ index: f }) })), he ? p.createElement(
      p.Fragment,
      null,
      (K = N.slideHeader) === null || K === void 0 ? void 0 : K.call(N, { slide: c }),
      ((ee = N.slideContainer) !== null && ee !== void 0 ? ee : (({ children: ve }) => ve))({ slide: c, children: he }),
      (te = N.slideFooter) === null || te === void 0 ? void 0 : te.call(N, { slide: c })
    ) : null;
  };
  return p.createElement("div", { ref: o, className: hl(_e(Rh()), !x && _e(Rh("current")), _e(Vh)), ...Yv(x), style: M, role: "group", "aria-roledescription": aa(w, "Slide"), "aria-label": Uv(w, h, f + s) }, L());
}
function gy() {
  const c = au().styles.slide;
  return p.createElement("div", { className: _e(hr), style: c });
}
function vy({ carousel: c, labels: s }) {
  const { slides: o, currentIndex: f, globalIndex: h } = wi(), { setCarouselRef: y } = cu(), { autoPlaying: v, focusWithin: N } = fm(), T = Oi(c.spacing), b = Oi(c.padding), H = qv(c, o, 1), M = [];
  if (am(o))
    for (let w = f - H; w <= f + H; w += 1) {
      const q = um(o, w), x = h - f + w, L = c.finite && (w < 0 || w > o.length - 1);
      M.push(L ? { key: x } : {
        key: [`${x}`, Lv(q)].filter(Boolean).join("|"),
        offset: w - f,
        slide: q
      });
    }
  return p.createElement("div", { ref: y, className: hl(_e(sn()), M.length > 0 && _e(sn("with_slides"))), style: {
    [`${yt(sn("slides_count"))}`]: M.length,
    [`${yt(sn("spacing_px"))}`]: T.pixel || 0,
    [`${yt(sn("spacing_percent"))}`]: T.percent || 0,
    [`${yt(sn("padding_px"))}`]: b.pixel || 0,
    [`${yt(sn("padding_percent"))}`]: b.percent || 0
  }, role: "region", "aria-live": v && !N ? "off" : "polite", "aria-roledescription": aa(s, "Carousel"), "aria-label": aa(s, "Photo gallery") }, M.map(({ key: w, slide: q, offset: x }) => q ? p.createElement(my, { key: w, slide: q, offset: x }) : p.createElement(gy, { key: w })));
}
const yy = hn(Gh, vy);
function Sm() {
  const { carousel: c } = au(), { slides: s, currentIndex: o } = wi(), f = s.length === 0 || c.finite && o === 0, h = s.length === 0 || c.finite && o === s.length - 1;
  return { prevDisabled: f, nextDisabled: h };
}
function by(c) {
  var s;
  const o = yr(), { publish: f } = Di(), { animation: h } = au(), { prevDisabled: y, nextDisabled: v } = Sm(), N = ((s = h.navigation) !== null && s !== void 0 ? s : h.swipe) / 2, T = Dh(() => f(on), N), b = Dh(() => f(dn), N), H = Ke((M) => {
    switch (M.key) {
      case Ov:
        f(na);
        break;
      case Nv:
        (o ? v : y) || (o ? b : T)();
        break;
      case Dv:
        (o ? y : v) || (o ? T : b)();
        break;
    }
  });
  p.useEffect(() => c(Fh, H), [c, H]);
}
function Ch({ label: c, icon: s, renderIcon: o, action: f, onClick: h, disabled: y, style: v }) {
  return p.createElement(gm, { label: c, icon: s, renderIcon: o, className: _e(`navigation_${f}`), disabled: y, onClick: h, style: v, ...ay(cu().focus, y) });
}
function Sy({ render: { buttonPrev: c, buttonNext: s, iconPrev: o, iconNext: f }, styles: h }) {
  const { prev: y, next: v, subscribeSensors: N } = cu(), { prevDisabled: T, nextDisabled: b } = Sm();
  return by(N), p.createElement(
    p.Fragment,
    null,
    c ? c() : p.createElement(Ch, { label: "Previous", action: on, icon: Iv, renderIcon: o, style: h.navigationPrev, disabled: T, onClick: y }),
    s ? s() : p.createElement(Ch, { label: "Next", action: dn, icon: ey, renderIcon: f, style: h.navigationNext, disabled: b, onClick: v })
  );
}
const py = hn(Sv, Sy), Uh = _e(Tv), zy = _e(Zh);
function Ey(c) {
  return "style" in c;
}
function Hh(c, s, o) {
  const f = window.getComputedStyle(c), h = o ? "padding-left" : "padding-right", y = o ? f.paddingLeft : f.paddingRight, v = c.style.getPropertyValue(h);
  return c.style.setProperty(h, `${(Ni(y) || 0) + s}px`), () => {
    v ? c.style.setProperty(h, v) : c.style.removeProperty(h);
  };
}
function Ay({ noScroll: { disabled: c }, children: s }) {
  const o = yr(), { getOwnerDocument: f, getOwnerWindow: h } = vr();
  return p.useEffect(() => {
    if (c)
      return () => {
      };
    const y = [], v = h(), { body: N, documentElement: T } = f(), b = Math.round(v.innerWidth - T.clientWidth);
    if (b > 0) {
      y.push(Hh(N, b, o));
      const H = N.getElementsByTagName("*");
      for (let M = 0; M < H.length; M += 1) {
        const w = H[M];
        Ey(w) && v.getComputedStyle(w).getPropertyValue("position") === "fixed" && !w.classList.contains(zy) && y.push(Hh(w, b, o));
      }
    }
    return N.classList.add(Uh), () => {
      N.classList.remove(Uh), y.forEach((H) => H());
    };
  }, [o, c, f, h]), p.createElement(p.Fragment, null, s);
}
const Ty = hn(pv, Ay);
function Bh(c) {
  return nu(dr, c);
}
function xh(c, s, o) {
  const f = c.getAttribute(s);
  return c.setAttribute(s, o), () => {
    f ? c.setAttribute(s, f) : c.removeAttribute(s);
  };
}
function _y({ children: c, animation: s, styles: o, className: f, on: h, portal: y, close: v, labels: N }) {
  const [T, b] = p.useState(!1), [H, M] = p.useState(!1), w = p.useRef([]), q = p.useRef(null), { setTimeout: x } = Ri(), { subscribe: L } = Di(), K = vm() ? 0 : s.fade;
  p.useEffect(() => (b(!0), () => {
    b(!1), M(!1);
  }), []);
  const ee = Ke(() => {
    w.current.forEach(($) => $()), w.current = [];
  }), te = Ke(() => {
    var $;
    M(!1), ee(), ($ = h.exiting) === null || $ === void 0 || $.call(h), x(() => {
      var Y;
      (Y = h.exited) === null || Y === void 0 || Y.call(h), v();
    }, K);
  });
  p.useEffect(() => L(na, te), [L, te]);
  const he = Ke(($) => {
    var Y, ce, ne;
    Gv($), M(!0), (Y = h.entering) === null || Y === void 0 || Y.call(h);
    const ke = (ne = (ce = $.parentNode) === null || ce === void 0 ? void 0 : ce.children) !== null && ne !== void 0 ? ne : [];
    for (let fe = 0; fe < ke.length; fe += 1) {
      const be = ke[fe];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(be.tagName) === -1 && be !== $ && (w.current.push(xh(be, "inert", "")), w.current.push(xh(be, "aria-hidden", "true")));
    }
    w.current.push(() => {
      var fe, be;
      (be = (fe = q.current) === null || fe === void 0 ? void 0 : fe.focus) === null || be === void 0 || be.call(fe);
    }), x(() => {
      var fe;
      (fe = h.entered) === null || fe === void 0 || fe.call(h);
    }, K);
  }), ve = p.useCallback(($) => {
    $ ? he($) : ee();
  }, [he, ee]);
  return T ? Cv.createPortal(p.createElement(cy, { ref: ve, className: hl(f, _e(Bh()), _e(Zh), H && _e(Bh("open"))), "aria-modal": !0, role: "dialog", "aria-label": aa(N, "Lightbox"), style: {
    ...s.fade !== fr.animation.fade ? { [yt("fade_animation_duration")]: `${K}ms` } : null,
    ...s.easing.fade !== fr.animation.easing.fade ? { [yt("fade_animation_timing_function")]: s.easing.fade } : null,
    ...o.root
  }, onFocus: ($) => {
    q.current || (q.current = $.relatedTarget);
  } }, c), y.root || document.body) : null;
}
const My = hn(dr, _y);
function Oy({ children: c }) {
  return p.createElement(p.Fragment, null, c);
}
const Ny = hn(zv, Oy);
function Dy(c) {
  return nu(Qh, c);
}
function wy({ toolbar: { buttons: c }, render: { buttonClose: s, iconClose: o }, styles: f }) {
  const { close: h, setToolbarWidth: y } = cu(), { setContainerRef: v, containerRect: N } = ym();
  iu(() => {
    y(N?.width);
  }, [y, N?.width]);
  const T = () => s ? s() : p.createElement(gm, { key: na, label: "Close", icon: Pv, renderIcon: o, onClick: h });
  return p.createElement("div", { ref: v, style: f.toolbar, className: _e(Dy()) }, c?.map((b) => b === na ? T() : b));
}
const Ry = hn(Qh, wy);
function pm(c, s) {
  var o;
  return p.createElement(c.module.component, { key: c.module.name, ...s }, (o = c.children) === null || o === void 0 ? void 0 : o.map((f) => pm(f, s)));
}
function Cy(c, s = {}) {
  const { easing: o, ...f } = c, { easing: h, ...y } = s;
  return {
    easing: { ...o, ...h },
    ...f,
    ...y
  };
}
function Uy({ carousel: c, animation: s, render: o, toolbar: f, controller: h, noScroll: y, on: v, plugins: N, slides: T, index: b, ...H }) {
  const { animation: M, carousel: w, render: q, toolbar: x, controller: L, noScroll: W, on: K, slides: ee, index: te, plugins: he, ...ve } = fr, { config: $, augmentation: Y } = Xv([
    Pe(My, [
      Pe(Ty, [
        Pe(hy, [
          Pe(yy),
          Pe(Ry),
          Pe(py)
        ])
      ])
    ])
  ], N || he), ce = Y({
    animation: Cy(M, s),
    carousel: { ...w, ...c },
    render: { ...q, ...o },
    toolbar: { ...x, ...f },
    controller: { ...L, ...h },
    noScroll: { ...W, ...y },
    on: { ...K, ...v },
    ...ve,
    ...H
  });
  return ce.open ? p.createElement(
    Kv,
    { ...ce },
    p.createElement(
      Wv,
      { slides: T || ee, index: Ni(b || te) },
      p.createElement(
        $v,
        null,
        p.createElement(
          Zv,
          null,
          p.createElement(Qv, null, pm(Pe(Ny, $), ce))
        )
      )
    )
  ) : null;
}
const ar = [
  {
    src: "/src/img/1.jpg",
    width: 1800,
    height: 2585,
    title: "Herbst II",
    description: "Hier in Europa, findet man diesen schönen Baum hauptsächlich in der Südtürkei und auf der griechischen Insel Rhodos.  Schätzungen zufolge ist das Verbreitungsgebiet dieser Art in den letzten 200 Jahren von 7000 Hektar auf 1657 Hektar zurückgegangen. Das Harz des Baumes wird seit über 700 Jahren als Allzweckheilmittel verwendet. Früher war es die Harzernte, die eine große Bedrohung für den Orientalischer Amberbaum darstelle. Heute führt die Zerstörung seines Lebensraums zu einem besorgniserregenden Bestandsrückgang. Entwaldung ist ein großes Problem, bedingt durch die intensive Stadtentwicklung und den Bedarf an Platz für Sommerhäuser und Zweitwohnungen (viele Einwohner sind in die Städte gezogen). Man könnte sagen, seine neuen Feinde sind Tourismus und Bebauung. Der Orientalischer Amberbaum steht nun auf der Roten Liste der IUCN (gefährdet, VU).(Quellen: de.wikipedia.org, www.sciencedirect.com,  http://journals.tubitak.gov.tr)",
    author: "Sue Hénon",
    plantCommonName: "Orientalischer Amberbaum",
    plantBotanicalName: "Liquidambar orientalis",
    artworkYear: "2024",
    artworkSize: "50×70cm",
    artworkTechnique: "Farbstift auf Papier",
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
    description: "Aerangis punctata ist eine seltene, auf Bäumen wachsende Orchidee aus den feuchten Hochwäldern Madagaskars. Ihr zartes Gleichgewicht mit dem Lebensraum ist durch Abholzung und Klimaveränderungen bedroht. Um die wenigen verbliebenen Populationen zu schützen, steht sie heute als gefährdete Art (vulnerable) unter internationalem Schutz.",
    author: "Kristin Tessen",
    plantCommonName: "gepunktete Aerangis",
    plantBotanicalName: "Aerangis punctata ",
    artworkYear: "2025",
    artworkSize: "29.7×42cm",
    artworkTechnique: "Aquarell",
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
    description: `Drosera rotundifolia, der Rundblättrige Sonnentau, ist eine mehrjährige, fleischfressende Pflanze. Sie besiedelt offene, feuchte und nährstoffarme Standorte wie saure Hochmoore und wächst insbesondere in Pflanzengesellschaften, die von Torfmoosen (Sphagnum) dominiert werden.

Hochmoore reagieren äußerst empfindlich auf Veränderungen. Entwässerung und Nährstoffeintrag zerstören ihre ökologische Funktion für Artenschutz und Klima. Die Zerstörung in kurzer Zeit machte zunichte, was über Jahrtausende entstand. Die Wiederherstellung der Moore zielt daher auf natürliche Bedingungen – vor allem einen intakten Wasserhaushalt – und benötigt gezielte Impulse und viel Zeit.
`,
    author: "Audrey Reilly",
    plantCommonName: "Rundblättriger Sonnentau",
    plantBotanicalName: "Drosera rotundifolia L.",
    artworkYear: "2024",
    artworkSize: "34×41cm",
    artworkTechnique: "Aquarell auf Papier",
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
    description: `Andromeda polifolia, die Rosmarinheide, wächst ausschließlich in Hochmooren kälterer Regionen. Der kleine, immergrüne Zwergstrauch mit zierlichen rosa Blüten ist in den nördlichen Gebieten Nordamerikas, Asiens und Europas verbreitet.

Ihr Bestand geht jedoch stark zurück - in England und Irland ist die Art bereits stark dezimiert. Der Lebensraum Hochmoor hat unter Entwässerung, Aufforstung und Torfabbau gelitten, was die Rosmarinheide immer seltener werden lässt. Ihr Verschwinden in Westeuropa ist meist eine direkte Folge der Moorentwässerung.

Hochmoore reagieren äußerst empfindlich. Entwässerung zerstört ihre ökologische Funktion für Artenschutz und Klima. Was über Jahrtausende entstand, wurde in kurzer Zeit zerstört. Die Wiederherstellung der Moore benötigt daher natürliche Bedingungen – vor allem einen intakten Wasserhaushalt – und braucht gezielte Maßnahmen sowie viel Zeit.
`,
    author: "Audrey Reilly",
    plantCommonName: "Rosmarinheide",
    plantBotanicalName: "Andromeda polifolia",
    artworkYear: "2024",
    artworkSize: "34×41cm",
    artworkTechnique: "Aquarell auf Papier",
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
    description: `Das Sumpf-Blutauge kommt vom Tiefland bis ins Gebirge vor und besiedelt bevorzugt nasse, zeitweise überflutete Torf- und Schlammböden in Niedermooren. Es gedeiht besonders auf offenen Schlammstellen, wo es sich mit seinem langen Wurzelstock gut ausbreiten kann. Sogar auf Schwingrasen bildet es allmählich schwankende Teppiche auf der Wasseroberfläche mooriger Gewässer.

Als Spezialist für den stark bedrohten Lebensraum Moor steht die Art in vielen Regionen auf der Roten Liste. Die Loki Schmidt Stiftung hat sie zur Blume des Jahres 2025 ernannt.

Hochmoore reagieren äußerst empfindlich auf Störungen. Entwässerung und Nährstoffeintrag zerstören ihre ökologischen Funktionen für Artenschutz und Klima. Was über Jahrtausende entstand, wurde in kurzer Zeit zerstört. Die Wiederherstellung der Moore zielt daher auf natürliche Bedingungen – besonders einen intakten Wasserhaushalt – und benötigt gezielte Maßnahmen und viel Zeit.`,
    author: "Audrey Reilly",
    plantCommonName: "Blutauge, Sumpf-Fingerkraut",
    plantBotanicalName: "Comarum palustre",
    artworkYear: "2024",
    artworkSize: "40×50cm",
    artworkTechnique: "Aquarell auf Papier",
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
    description: `Durch Luftverschmutzung und die Zerstörung ihrer Lebensräume u. a. durch intensive forstwirtschaftliche Nutzung steht die Echte Lungenflechte mittlerweile in Deutschland auf der Roten Liste und gilt als "Vom Aussterben bedroht".
Denn sie benötigt sehr saubere Luft, alte Bäume und eine hohe Luftfeuchtigkeit, um zu gedeihen. `,
    author: "Katrin Koch ",
    plantCommonName: "Echte Lungenflechte ",
    plantBotanicalName: "Lobaria pulmonaria ",
    artworkYear: "2025",
    artworkSize: "7.5×26cm",
    artworkTechnique: 'Graphit und Farbstift auf Papier /Fabriano Artistico Hot Pressed "Extra White" ',
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
    description: `Das Edelweiß ist in seinem natürlichen Lebensraum nach wie vor durch übertriebenes Pflücken bedroht. An vielen leicht zugänglichen Standorten war es dadurch fast ausgestorben. Seit die Art in vielen Ländern und Regionen unter Naturschutz steht, haben sich die Bestände in der freien Natur erholt. Die wilden Pflanzen sind jedoch nach wie vor durch unkontrolliertes Sammeln und Lebensraumverlust bedroht.

Die Pflanze wird gerne in vielen Gärten kultiviert. Kulturpflanzen sehen im Vergleich zu Wildpflanzen meist anders aus. Sie sind oft deutlich höher und weniger weiß behaart. Die hier abgebildete Pflanze ist ein Kulturexemplar.`,
    author: "Maxim Shirshin",
    plantCommonName: "Alpen-Edelweiß",
    plantBotanicalName: "Leontopodium nivale",
    artworkYear: "2025",
    artworkSize: "21×29.7cm",
    artworkTechnique: "Buntstifte auf Papier",
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
    description: `Der Frauenschuh gilt nach der Roten Liste als gefährdet und ist nach der Bundesartenschutzverordnung streng geschützt. Er steht auch unter besonderem Schutz der Europäischen Union. 
Als ursächlich für die Gefährdung wird vor allem die weitreichende Forstwirtschaft gesehen, die eine natürliche Waldentwicklung und -dynamik kaum zulässt. Fototourismus trägt zu einem Rückgang der Art bei, da der Boden sich durch häufiges Betreten verdichtet und dadurch neuen Exemplaren eine Ansiedlung erschwert wird. 
Auch Pflanzenliebhaber, die den Frauenschuh ausgraben, tragen wesentlich zum Rückgang der verbliebenen Vorkommen bei.
 (Vgl. https://de.wikipedia.org/wiki/Gelber_Frauenschuh, 08.10.2025)`,
    author: "Leslie Bocker",
    plantCommonName: "Frauenschuh",
    plantBotanicalName: "Cypripedium calceolus L.",
    artworkYear: "2025",
    artworkSize: "25×50cm",
    artworkTechnique: "Aquarell",
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
    description: `Die Rosskastanie hierzulande hat gleich mit mehreren Problemen auf einmal zu kämpfen: Zum einen mit der sogenannten Miniermotte, zum anderen mit einem Bakterium namens Pseudomonas. Auch der Klimawandel stresst die Bäume zunehmend. Die Weltnaturschutzunion (IUCN) hat die Gewöhnliche Rosskastanie deshalb mittlerweile als "gefährdet" eingestuft.
( https://www.oekotest.de/freizeit-technik/Kastanienblaetter-schon-im-Sommer-braun-So-reagieren-Sie-richtig_12142_1.html, 25.09.2025)`,
    author: "Leslie Bocker",
    plantCommonName: "Gewöhnliche Rosskastanie",
    plantBotanicalName: "Aesculus hippocastanum",
    artworkYear: "2024",
    artworkSize: "25×23cm",
    artworkTechnique: "Aquarell",
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
    description: "Diese zarte Blume wächst in vielen europäischen Ländern in der freien Natur, jedoch ist die Anzahl der Pflanzen sehr gering. In vielen Ländern ist das Pfücken der Blumen verboten, wie z.B. im Ruhrgebiet in Deutschland. Obwohl in Deutschland kleine Sträußchen für den Eigenbedarf erlaubt sind, ist das Ausgraben der unterirdischen Teile wie der Rhizome in der freien Natur untersagt, um die Bestände zu erhalten. ",
    author: "Nadiya Kyrylenko",
    plantCommonName: "Maiglöckchen",
    plantBotanicalName: "Convallaria majalis",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Mischtechnik: Aquarell und Bleistift",
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
    description: `Schachblume (Fritillaria meleagris)
Aquarell und Graphit auf Papier

Eine seltene, in Deutschland geschützte Art.
Ihre natürlichen Lebensräume – feuchte Wiesen und Flussauen – verschwinden nach und nach, und mit ihnen verschwindet auch die Schachblume.
Zart und zugleich widerstandsfähig verkörpert sie die Idee des Überlebens durch Sanftheit.
Diese Arbeit ist eine Hommage an ihre stille Schönheit und ihre flüchtige Präsenz in der Natur.`,
    author: "Lesia Zaitseva",
    plantCommonName: "Schachblume (Fritillaria meleagris)",
    plantBotanicalName: "Fritillaria meleagris",
    artworkYear: "2025",
    artworkSize: "56×56cm",
    artworkTechnique: "Aquarell und Graphit auf Papier Saunders Waterford HP 425 g/m²",
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
    description: `Der deutsche Löwenzahn (Taraxacum germanium), einst Teil der einheimischen Flora Deutschlands, ist heute vom Aussterben bedroht und überlebt nur noch an wenigen verstreuten Standorten in Hessen, Unterfranken und Oberbayern. Die meisten dieser Populationen bestehen aus nur wenigen einzelnen Pflanzen und überschreiten selten fünfzig Exemplare. Diese Art gedeiht in Niederungs-Feuchtwiesen, oft auf leicht salzhaltigen Böden, doch ihre Empfindlichkeit gegenüber Düngung und Störungen des Lebensraums hat sie äußerst verletzlich gemacht. Landwirtschaftliche Intensivierung, Lebensraumverlust und Verschmutzung haben sie an den Rand des Aussterbens gedrängt.

Während der Gewöhnliche Löwenzahn (Taraxacum officinale) heute noch weit verbreitet ist, werden auch seine natürlichen Lebensräume zunehmend durch ähnliche Bedrohungen – Herbizideinsatz, Monokultur-Landwirtschaft, städtische Bebauung und den Klimawandel – beeinträchtigt. Wenn diese Belastungen anhalten, könnte selbst diese widerstandsfähige und weit verbreitete Pflanze dem Beispiel des deutschen Löwenzahns folgen und zurückgehen – ein mahnendes Zeichen dafür, dass keine Art vor den Folgen menschengemachter Umweltveränderungen gefeit ist.`,
    author: "Kate Rolshoven",
    plantCommonName: "Deutscher Löwenzahn",
    plantBotanicalName: "Taraxacum germanicum",
    artworkYear: "2023",
    artworkSize: "56×76cm",
    artworkTechnique: "Aquarell on Arches 640gsm Baumwollpapier",
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
    description: "Die wilde Rübe die Urpflanze unseres heutigen Mangolds und der Roten Bete. Die Wildform gilt in Deutschland als potenziell gefährdet. Auf Helgoland, wo sie früher weit verbreitet war, gibt es noch einige wenige Bestände. Die Beta vulgaris wurde sonst nur noch an einigen Orten an der Ostseeküste verzeichnet.",
    author: "Manuela Herhaus",
    plantCommonName: "Wilde Rübe",
    plantBotanicalName: "Beta vulgaris",
    artworkYear: "2025",
    artworkSize: "30×42cm",
    artworkTechnique: "Tusche auf Zeichenfolie mit Beschreibung auf Papier",
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
    description: "Die dynamischen, regelmäßig überschotterten Ufer alpiner Wildflüsse – die natürlichen Lebensräume der Deutschen Tamariske – sind durch umfassende Flussregulierungen fast vollständig zerstört worden. Ohne diese natürliche Gewässerdynamik breiten sich Weiden und Erlen aus und verdrängen die Tamariske. Deshalb wird die Art in der Roten Liste Deutschlands als „vom Aussterben bedroht“ geführt und kommt nur noch in wenigen stark beeinträchtigten Resthabitaten vor.",
    author: "Elisabeth Lázár ",
    plantCommonName: "Deutsche Tamariske",
    plantBotanicalName: "Myricaria germanica",
    artworkYear: "2025",
    artworkSize: "29×29cm",
    artworkTechnique: "Graphit, Papier",
    lowSrc: "/src/thumbs/22.jpg",
    lowWidth: 400,
    lowHeight: 403
  },
  {
    src: "/src/img/23.png",
    width: 1800,
    height: 2286,
    title: "Karlszepter-Läusekraut - Kapselfrucht",
    description: "Die Samen des Karlszepters reifen in den charakteristischen Kapselfrüchten. Die Keimung gelingt nur auf dauerhaft nassen, torfigen Moorböden, weshalb sich die Art nur sehr begrenzt ausbreiten kann. Als halbparasitische Pflanze ist sie auf die Wurzeln bestimmter Wirtsarten angewiesen, was ihre erfolgreiche Etablierung zusätzlich einschränkt.",
    author: "Elisabeth Lázár",
    plantCommonName: "Karlszepter-Läusekraut",
    plantBotanicalName: "Pedicularis sceptrum-carolinum L.",
    artworkYear: "2025",
    artworkSize: "21×27cm",
    artworkTechnique: "Tinte, Papier",
    lowSrc: "/src/thumbs/23.png",
    lowWidth: 400,
    lowHeight: 508
  },
  {
    src: "/src/img/24.png",
    width: 1800,
    height: 2660,
    title: "Karlszepter-Läusekraut - Grundblätter und Kapselfrüchte",
    description: "Das Karlszepter ist ein seltenes Relikt der Eiszeit und gilt daher als besonders wertvoll für die botanische Vielfalt. Es bevorzugt nährstoffarme Moorwiesen, Flachmoore und feuchte Wegränder, Lebensräume, die durch Entwässerung, Nutzungsänderungen und Klimawandel stark zurückgegangen sind. Dadurch ist die Art in vielen südlichen Regionen selten geworden und gilt heute als stark gefährdet. Ihre besondere ökologische Rolle als typische Moorart macht sie zu einem wichtigen Indikator für intakte, besonders empfindliche Feuchtökosysteme.",
    author: "Elisabeth Lázár ",
    plantCommonName: "Karlszepter-Läusekraut",
    plantBotanicalName: "Pedicularis sceptrum-carolinum L.",
    artworkYear: "2025",
    artworkSize: "28×42cm",
    artworkTechnique: "Aquarell, Graphit, Papier",
    lowSrc: "/src/thumbs/24.jpg",
    lowWidth: 400,
    lowHeight: 591
  },
  {
    src: "/src/img/25.jpg",
    width: 1365,
    height: 2048,
    title: "Geweihförmige Wiesenkoralle ",
    description: `Durch die intensive Nutzung ihres speziellen Lebensraumes - dem Magerrasen, gingen die Bestände dieser Art in den letzten Jahrzehnten deutlich zurück und die Geweihförmige Wiesenkoralle steht mittlerweile als "Gefährdet" auf der Roten Liste in Deutschland.
Denn Überdüngung, Bebauung und Überwässerung verändert ihr Ökosystem und so ist der Lebensraum mittlerweile nur noch selten in unserer Landschaft zu finden. `,
    author: "Katrin Koch ",
    plantCommonName: "Geweihförmige Wiesenkoralle ",
    plantBotanicalName: "Clavulinopsis corniculata",
    artworkYear: "2025",
    artworkSize: "11×11.8cm",
    artworkTechnique: 'Farbstift auf Papier /Fabriano Artistico Hot Pressed "Extra White" ',
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
    description: `Die Preiselbeere begleitet mich seit meiner Kindheit. Als ich im Sommer im Norden war, wuchsen sie dort in unglaublicher Fülle – ganze Teppiche aus kleinen, glänzenden Blättern und tiefroten Beeren. Für mich trägt diese Pflanze deshalb eine ganz eigene, nostalgische Wärme. Heute jedoch ist ihr Lebensraum in Deutschland und vielen Teilen Europas stark geschrumpft. Moore, Heiden und lichte Kiefernwälder, in denen die Preiselbeere einst heimisch war, verschwinden durch Entwässerung, Aufforstung, Landwirtschaft und den Klimawandel. In manchen Regionen Europas ist die Art bereits deutlich zurückgegangen.
Was oft übersehen wird: Ihr Rückgang betrifft nicht nur die Pflanze selbst, sondern auch das Netzwerk an Leben um sie herum. Die Blüten der Preiselbeere werden vor allem von Hummeln und verschiedenen Wildbienen bestäubt – Insekten, deren Populationen ebenfalls unter Druck stehen. Wenn ihre Bestäuber seltener werden, sinkt auch die Fruchtbildung der Preiselbeere. Beide Seiten verlieren also gemeinsam ihren Platz.
Mit meinem Bild möchte ich diese leise, doch bedeutende Verbindung sichtbar machen: die Verwundbarkeit der Preiselbeere und die fragile Gemeinschaft, die sie trägt – und die sie zugleich braucht, um weiter zu bestehen.`,
    author: "Daria Beizerov",
    plantCommonName: "Preiselbeere",
    plantBotanicalName: "Vaccinium vitis-idaea",
    artworkYear: "2025",
    artworkSize: "41×31cm",
    artworkTechnique: "Aquarell auf Papier (HP)",
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
    description: "Die Weiße Schlauchpflanze (Sarracenia leucophylla) kommt ursprünglich im Südosten der Vereinigten Staaten vor, insbesondere in Alabama, Georgia, Florida und Mississippi. Obwohl sie dort noch in der Wildnis vorkommt, ist sie durch das Sammeln zu Dekorationszwecken und durch Landentwicklung bedroht. Daher ist sie in der Roten Liste der bedrohten Arten der IUCN aufgeführt. Als Zimmerpflanze ist sie beliebt, weil sie mit ihren auffällig gezeichneten Schläuchen und ihrer Fähigkeit, Insekten zu fangen, ein außergewöhnliches und dekoratives Element darstellt.",
    author: "Sophie Crossart",
    plantCommonName: "Weiße Schlauchpflanze",
    plantBotanicalName: "Sarracenia leucophylla",
    artworkYear: "2025",
    artworkSize: "17×20cm",
    artworkTechnique: "Aquarell und ein wenig Gouache auf Kalbsvellum",
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
    description: `Der Schlangenknöterich ist eine typische Pflanze feuchter, artenreicher Lebensräume. Er wächst bevorzugt in Feuchtwiesen, an den Ufern von Bächen, an Moorrändern sowie in lichten Auwäldern. Doch sind diese Lebensräume zunehmend im Rückgang begriffen. 
Trockenlegungen, intensive Bewirtschaftung durch die Landwirtschaft und das Verschwinden naturnaher Auwälder führen zum Verlust geeigneter Standorte. 
Hinzu kommen die Auswirkungen des Klimawandels.
Der Schlangenknöterich steht in Bayern auf Platz 3 der Gefährdungsliste.
So wird er zunehmend zum Symbol für die bedrohte Schönheit unserer Feuchtlandschaften.`,
    author: "Susanne Jampen",
    plantCommonName: "Schlangenknöterich",
    plantBotanicalName: "Bistorta officinalis",
    artworkYear: "Sommer 2025",
    artworkSize: "20×32cm",
    artworkTechnique: "Aquarell auf Fabriano artistico hot press",
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
    description: "Diese seltene Pflanze gehört zu den Steinbrech-Gewächsen und steht auf der Roten Liste Bayerns und gilt als gefährdet. Ursache für die Gefährdung der Pflanze sind etwa die Entwässerung und Aufforstung von Moor-Standorten oder Trockenlegungen von Feuchtwiesen. Aber auch durch die Eutrophierungen, sprich Dünger-Eintragungen, werde die konkurrenzschwache Art zurückgedrängt (https://pfaffenhofen-today.de/46272-p-serie-sumpf-herzblatt. 08.10.2025)",
    author: "Leslie Bocker",
    plantCommonName: "Sumpf-Herzblatt",
    plantBotanicalName: "Parnassia palustris",
    artworkYear: "2025",
    artworkSize: "31×39cm",
    artworkTechnique: "Aquarell",
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
    description: `Die Bach-Nelkenwurz ist eine typische Pflanze in feuchten Lebensräumen. Sie wächst in Flachmooren, Feuchtwiesen, an Bächen und Teichufern und am Rande von Auwäldern.
Trotz ihres ursprünglich großen Verbreitungsareals gilt die Bach-Nelkenwurz in mehreren deutschen Bundesländern mittlerweile als gefährdet und ist dort auf den regionalen roten Listen verzeichnet. 
Die Hauptursachen dafür liegen in der Zerstörung und Veränderung der Lebensräume.
Die Trockenlegung von Feuchtgebieten, die Intensivnutzung der Wiesen, und das Verschwinden der naturnahen Auwälder führen zu einem drastischen Rückgang der Standorte. Dazu kommen die durch den Klimawandel veränderten Niederschlagsmuster und die steigenden Temperaturen, die zur Austrocknung der Lebensräume beitragen.`,
    author: "Susanne Jampen",
    plantCommonName: "Bach-Nelkenwurz",
    plantBotanicalName: "Geum rivale",
    artworkYear: "Sommer 2024",
    artworkSize: "20×32cm",
    artworkTechnique: "Aquarell auf Fabriano Artistico hot pressd ",
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
    description: `Gentiana acaulis gehört zur Familie der Enziangewächse (Gentianaceae) und ist in Bergregionen Mittel- und
Südeuropas heimisch, insbesondere in den Alpen aber auch im Jura und den Pyrenäen. Dieser Enzian wächst in
Höhen von 800 bis 3000 m auf gut mit Wasser versorgten Silikatböden. Ein besonderes Kennzeichen von
Gentiana acaulis sind kurze Blütenstände, die aus den grundständigen dichten Blattrosetten zu entspringen
scheinen. Die intensiv blauen Blüten locken zur Blütezeit von April bis Juni Hummeln und Schmetterlinge zur
Bestäubung an.
Die natürlichen Lebensräume nehmen auch für den Kiesel-Glocken-Enzian immer mehr ab, weil auch die
Bergwiesen immer häufiger überdüngt sind. Schon eine Portion Gülle vertreibt die Pflanze in kurzer Zeit und
danach bleibt sie auch für Jahrzehnte noch verschwunden. Gentiana acaulis steht wie alle Enzianarten unter
Naturschutz und ist in der Roten Liste als gefährdet eingestuft.`,
    author: "Brigitte Rückle",
    plantCommonName: "Kiesel-Glocken-Enzian",
    plantBotanicalName: "Gentiana acaulis",
    artworkYear: "2025",
    artworkSize: "31.5×29.5cm",
    artworkTechnique: "Buntstifte",
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
    description: `Bei meinen Recherchen in Vorbereitung der Ausstellung bin ich auf www.rote-liste-zentrum.de
darauf gestossen , dass verschiedene Wildformen ,wie z.B. die Lathyrus nissolia L. Gras-Platterbse die Lathyrus heterophyllus L. Verschiedenblättrige Platterbse gefährdet sind und
die Lathyrus bauhini P.A. Genty Schwert Platterbse sogar vom Aussterben bedroht ist.
Es gibt noch einige andere Gefährdete, die man auf der genannten Internetseite finden kann.
Um dem Sammeln der Samen von Wildformen entgegenzuwirken, bietet der Handel zahlreiche
kultivierte Sorten von Platterbsen oder auch Wicken an. Ich mag die bizarren Blüten in den unterschiedlichen Farben sehr gern und so zog ich sie auf meinem Balkon heran um sie für das eingereichte Bild zu malen.`,
    author: "Margitta Baum",
    plantCommonName: "Platterbse",
    plantBotanicalName: "Lathyrus sp.",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Aquarell / Papier",
    lowSrc: "/src/thumbs/33.jpg",
    lowWidth: 400,
    lowHeight: 523
  },
  {
    src: "/src/img/34.jpg",
    width: 1800,
    height: 2592,
    title: "Die Früchte des Olivenbaums",
    description: `Obwohl der Olivenbaum noch nicht auf der Liste der gefährdeten Arten steht, ist er durch verschiedene Faktoren bedroht. 
Olivenbäume können mehrere hundert Jahre alt werden.  Das Olivebaumsterben wurde in Europa zuerst in Süditalien festgestellt. Auch andere südeuropäische Länder wie Spanien, Griechenland, Portugal und die Türkei hatten ähnliche Probleme. Leider wurde die Ernte aufgrund extremer Hitze, Wassermangel und Schädlingen in den vergangenen Sommern stark beeinträchtigt. Während der Blütezeit führte die Hitze zum Austrocknen der Blütenstände. Die extremen Wetterbedingungen im Sommer verhindern, dass die Früchte reifen und das Öl unter kühleren und feuchteren Bedingungen gebildet wird. Hinzu kommt, dass Waldbrände die Olivenhaine vernichten. Und dann ist da natürlich noch der tödliche bakterielle Krankheitserreger, Xylella fastidiosa, der die Ernte bedroht. Die Bäume ersticken,schließlich, verdorren und vertrocknen. Die einst frühen Blätter fallen ab, und die Rinde vergraut und hinterlässt eine Spur des Todes. Millionen von Olivenbäumen wurden dadurch vernichtet, insbesondere in Italien und Spanien.  In den Jahren 2022/2023 und 2023/2024 ging die Olivenölproduktion in der EU stark zurück.  Die Anstieg der Olivenölpreise in unseren Supermärkten spiegelt die Tragödie der Olivenernte in den betroffenen Regionen wider. Derzeit laufen Forschungs- und Entwicklungsarbeiten um das Problem von Xylella fastidiosa zu lösen.
(Quellen: https://bbc.com  accessscience.com  theguardian.org  en.wikipedia.org, nature.com, https://wearewater.org)`,
    author: "Sue Hénon",
    plantCommonName: "Olive",
    plantBotanicalName: "Olea europaea",
    artworkYear: "2024",
    artworkSize: "50×70cm",
    artworkTechnique: "Farbstift und Graphit auf Papier",
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
    description: "Der Sanddorn ist eine charakteristische Pflanze der Küstenregionen Deutschlands und besiedelt vor allem die Graudünen. Dieser Lebensraum ist jedoch zunehmend gefährdet: Küstenschutzmaßnahmen wie Eindeichungen, die intensive touristische Nutzung mit Trittschäden und Abfall sowie die Verdrängung durch die invasive Kartoffelrose bedrohen den Bestand der Graudünen und damit auch den Sanddorn selbst.",
    author: "Yana Andryeyeva",
    plantCommonName: "Sanddorn",
    plantBotanicalName: "Hippophae rhamnoides",
    artworkYear: "2025",
    artworkSize: "30×40cm",
    artworkTechnique: "Aquarell auf Papier (Echt-Bütten von Hahnemühle, hot pressed, satiniert, 600 g/m², ",
    contactEmail: "info@andryeyeva.de",
    contactSocial: "@andryeyevart (Instagram)",
    lowSrc: "/src/thumbs/35.jpg",
    lowWidth: 400,
    lowHeight: 566
  }
];
function Hy() {
  const [c, s] = p.useState(-1), o = "https://maxshirshin.github.io/vbkd2025";
  function f(v) {
    if (!v) return "";
    if (/^(https?:)?\/\//i.test(v) || /^[a-z0-9+.-]+:/i.test(v)) return v;
    const N = o.replace(/\/+$/, "");
    return N ? v.startsWith(N) ? v : v.startsWith("/") ? `${N}${v}` : `${N}/${v}` : v.startsWith("/") ? v : `/${v}`;
  }
  p.useEffect(() => {
    const N = new URLSearchParams(window.location.search).get("image");
    if (N) {
      const T = parseInt(N, 10);
      !isNaN(T) && T >= 0 && T < ar.length && s(T);
    }
  }, []), p.useEffect(() => {
    if (c >= 0) {
      const v = new URLSearchParams(window.location.search);
      v.set("image", c.toString()), window.history.replaceState(null, "", `?${v.toString()}`);
    } else
      window.history.replaceState(null, "", window.location.pathname);
  }, [c]);
  const h = JSON.parse(
    JSON.stringify(ar)
  ), y = JSON.parse(
    JSON.stringify(ar)
  );
  for (const v of y)
    v.src = f(v.src), v.lowSrc = f(v.lowSrc);
  for (const v of h)
    v.lowSrc = f(v.lowSrc), v.src = v.lowSrc || f(v.src), v.width = v.lowWidth, v.height = v.lowHeight, v.alt = v.title;
  return /* @__PURE__ */ ze.jsx("div", { className: "app-container", children: /* @__PURE__ */ ze.jsxs("div", { className: "gallery-container", children: [
    /* @__PURE__ */ ze.jsx(
      bv,
      {
        photos: h,
        onClick: ({ index: v }) => s(v),
        spacing: 8,
        padding: 0,
        targetRowHeight: 400,
        render: {
          extras: (v, { photo: N }) => /* @__PURE__ */ ze.jsxs("div", { className: "gallery-image-title", children: [
            N.author,
            " - ",
            N.title
          ] })
        }
      }
    ),
    /* @__PURE__ */ ze.jsx(
      Uy,
      {
        slides: y,
        open: c >= 0,
        index: c,
        close: () => s(-1),
        on: {
          view: ({ index: v }) => {
            s(v);
          }
        },
        render: {
          slide: ({ slide: v }) => /* @__PURE__ */ ze.jsxs("div", { className: "b-content", children: [
            /* @__PURE__ */ ze.jsx("div", { className: "b-content__pic", children: /* @__PURE__ */ ze.jsx(
              "img",
              {
                src: v.src,
                alt: y[c]?.title ?? ""
              }
            ) }),
            /* @__PURE__ */ ze.jsxs("div", { className: "b-content__info", children: [
              /* @__PURE__ */ ze.jsx("div", { className: "b-content__author", children: y[c]?.author }),
              /* @__PURE__ */ ze.jsxs("div", { children: [
                y[c]?.contactEmail && /* @__PURE__ */ ze.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `mailto:${y[c]?.contactEmail}`,
                    children: y[c]?.contactEmail
                  }
                ),
                y[c]?.contactPhone && /* @__PURE__ */ ze.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `tel:${y[c]?.contactPhone}`,
                    children: y[c]?.contactPhone
                  }
                ),
                y[c]?.contactSocial && /* @__PURE__ */ ze.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: /^https?:\/\//i.test(
                      y[c]?.contactSocial || ""
                    ) ? y[c]?.contactSocial : (y[c]?.contactSocial || "").startsWith("@") ? `https://instagram.com/${(y[c]?.contactSocial || "").slice(1)}` : `https://instagram.com/${y[c]?.contactSocial}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: y[c]?.contactSocial
                  }
                ),
                y[c]?.contactWebsite && /* @__PURE__ */ ze.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: /^https?:\/\//i.test(
                      y[c]?.contactWebsite || ""
                    ) ? y[c]?.contactWebsite : `https://${y[c]?.contactWebsite}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: y[c]?.contactWebsite
                  }
                ),
                y[c]?.contactNote && /* @__PURE__ */ ze.jsx("span", { className: "b-content__meta", children: y[c]?.contactNote })
              ] }),
              /* @__PURE__ */ ze.jsx("div", { className: "b-content__title", children: y[c]?.title }),
              /* @__PURE__ */ ze.jsxs("div", { children: [
                /* @__PURE__ */ ze.jsx("span", { className: "b-content__meta", children: y[c]?.artworkSize }),
                /* @__PURE__ */ ze.jsx("span", { className: "b-content__meta", children: y[c]?.artworkYear }),
                /* @__PURE__ */ ze.jsx("span", { className: "b-content__meta", children: y[c]?.artworkTechnique })
              ] }),
              /* @__PURE__ */ ze.jsxs("div", { children: [
                /* @__PURE__ */ ze.jsx("span", { className: "b-content__cn", children: y[c]?.plantCommonName }),
                " ",
                /* @__PURE__ */ ze.jsxs("span", { className: "b-content__bn", children: [
                  "(",
                  y[c]?.plantBotanicalName,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ ze.jsx("div", { className: "b-content__desc", children: y[c]?.description })
            ] })
          ] })
        }
      }
    )
  ] }) });
}
function By(c = "root") {
  const s = document.getElementById(c);
  if (!s) {
    console.error(`Element with id "${c}" not found`);
    return;
  }
  Zg.createRoot(s).render(
    /* @__PURE__ */ ze.jsx(p.StrictMode, { children: /* @__PURE__ */ ze.jsx(Hy, {}) })
  );
}
export {
  By as initVBKDGallery
};

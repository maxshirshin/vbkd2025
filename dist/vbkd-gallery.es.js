import * as j from "react";
import tS, { useReducer as $z, useRef as Wz, useCallback as Fz, useState as GE, forwardRef as r1, createElement as Iz, useMemo as Pz, useEffect as bE, StrictMode as eA } from "react";
import VE, { createPortal as tA } from "react-dom";
var u1 = { exports: {} }, Og = {};
var SE;
function lA() {
  if (SE) return Og;
  SE = 1;
  var p = Symbol.for("react.transitional.element"), S = Symbol.for("react.fragment");
  function E(v, T, H) {
    var q = null;
    if (H !== void 0 && (q = "" + H), T.key !== void 0 && (q = "" + T.key), "key" in T) {
      H = {};
      for (var w in T)
        w !== "key" && (H[w] = T[w]);
    } else H = T;
    return T = H.ref, {
      $$typeof: p,
      type: v,
      key: q,
      ref: T !== void 0 ? T : null,
      props: H
    };
  }
  return Og.Fragment = S, Og.jsx = E, Og.jsxs = E, Og;
}
var Rg = {};
var EE;
function nA() {
  return EE || (EE = 1, process.env.NODE_ENV !== "production" && (function() {
    function p(K) {
      if (K == null) return null;
      if (typeof K == "function")
        return K.$$typeof === Ne ? null : K.displayName || K.name || null;
      if (typeof K == "string") return K;
      switch (K) {
        case pe:
          return "Fragment";
        case qe:
          return "Profiler";
        case se:
          return "StrictMode";
        case we:
          return "Suspense";
        case ze:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof K == "object")
        switch (typeof K.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), K.$$typeof) {
          case ie:
            return "Portal";
          case Ze:
            return K.displayName || "Context";
          case xe:
            return (K._context.displayName || "Context") + ".Consumer";
          case lt:
            var ee = K.render;
            return K = K.displayName, K || (K = ee.displayName || ee.name || "", K = K !== "" ? "ForwardRef(" + K + ")" : "ForwardRef"), K;
          case Se:
            return ee = K.displayName || null, ee !== null ? ee : p(K.type) || "Memo";
          case Ce:
            ee = K._payload, K = K._init;
            try {
              return p(K(ee));
            } catch {
            }
        }
      return null;
    }
    function S(K) {
      return "" + K;
    }
    function E(K) {
      try {
        S(K);
        var ee = !1;
      } catch {
        ee = !0;
      }
      if (ee) {
        ee = console;
        var ge = ee.error, Ee = typeof Symbol == "function" && Symbol.toStringTag && K[Symbol.toStringTag] || K.constructor.name || "Object";
        return ge.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Ee
        ), S(K);
      }
    }
    function v(K) {
      if (K === pe) return "<>";
      if (typeof K == "object" && K !== null && K.$$typeof === Ce)
        return "<...>";
      try {
        var ee = p(K);
        return ee ? "<" + ee + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function T() {
      var K = Ae.A;
      return K === null ? null : K.getOwner();
    }
    function H() {
      return Error("react-stack-top-frame");
    }
    function q(K) {
      if (oe.call(K, "key")) {
        var ee = Object.getOwnPropertyDescriptor(K, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return K.key !== void 0;
    }
    function w(K, ee) {
      function ge() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      ge.isReactWarning = !0, Object.defineProperty(K, "key", {
        get: ge,
        configurable: !0
      });
    }
    function P() {
      var K = p(this.type);
      return J[K] || (J[K] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), K = this.props.ref, K !== void 0 ? K : null;
    }
    function te(K, ee, ge, Ee, xt, Gl) {
      var dt = ge.ref;
      return K = {
        $$typeof: ne,
        type: K,
        key: ee,
        props: ge,
        _owner: Ee
      }, (dt !== void 0 ? dt : null) !== null ? Object.defineProperty(K, "ref", {
        enumerable: !1,
        get: P
      }) : Object.defineProperty(K, "ref", { enumerable: !1, value: null }), K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(K, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(K, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xt
      }), Object.defineProperty(K, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Gl
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    }
    function ue(K, ee, ge, Ee, xt, Gl) {
      var dt = ee.children;
      if (dt !== void 0)
        if (Ee)
          if ($e(dt)) {
            for (Ee = 0; Ee < dt.length; Ee++)
              G(dt[Ee]);
            Object.freeze && Object.freeze(dt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else G(dt);
      if (oe.call(ee, "key")) {
        dt = p(K);
        var kl = Object.keys(ee).filter(function(Wu) {
          return Wu !== "key";
        });
        Ee = 0 < kl.length ? "{key: someKey, " + kl.join(": ..., ") + ": ...}" : "{key: someKey}", Oe[dt + Ee] || (kl = 0 < kl.length ? "{" + kl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Ee,
          dt,
          kl,
          dt
        ), Oe[dt + Ee] = !0);
      }
      if (dt = null, ge !== void 0 && (E(ge), dt = "" + ge), q(ee) && (E(ee.key), dt = "" + ee.key), "key" in ee) {
        ge = {};
        for (var $l in ee)
          $l !== "key" && (ge[$l] = ee[$l]);
      } else ge = ee;
      return dt && w(
        ge,
        typeof K == "function" ? K.displayName || K.name || "Unknown" : K
      ), te(
        K,
        dt,
        ge,
        T(),
        xt,
        Gl
      );
    }
    function G(K) {
      X(K) ? K._store && (K._store.validated = 1) : typeof K == "object" && K !== null && K.$$typeof === Ce && (K._payload.status === "fulfilled" ? X(K._payload.value) && K._payload.value._store && (K._payload.value._store.validated = 1) : K._store && (K._store.validated = 1));
    }
    function X(K) {
      return typeof K == "object" && K !== null && K.$$typeof === ne;
    }
    var ae = tS, ne = Symbol.for("react.transitional.element"), ie = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), xe = Symbol.for("react.consumer"), Ze = Symbol.for("react.context"), lt = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), Ne = Symbol.for("react.client.reference"), Ae = ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = Object.prototype.hasOwnProperty, $e = Array.isArray, _e = console.createTask ? console.createTask : function() {
      return null;
    };
    ae = {
      react_stack_bottom_frame: function(K) {
        return K();
      }
    };
    var R, J = {}, le = ae.react_stack_bottom_frame.bind(
      ae,
      H
    )(), ve = _e(v(H)), Oe = {};
    Rg.Fragment = pe, Rg.jsx = function(K, ee, ge) {
      var Ee = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return ue(
        K,
        ee,
        ge,
        !1,
        Ee ? Error("react-stack-top-frame") : le,
        Ee ? _e(v(K)) : ve
      );
    }, Rg.jsxs = function(K, ee, ge) {
      var Ee = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return ue(
        K,
        ee,
        ge,
        !0,
        Ee ? Error("react-stack-top-frame") : le,
        Ee ? _e(v(K)) : ve
      );
    };
  })()), Rg;
}
var TE;
function aA() {
  return TE || (TE = 1, process.env.NODE_ENV === "production" ? u1.exports = lA() : u1.exports = nA()), u1.exports;
}
var St = aA(), i1 = { exports: {} }, Mg = {}, c1 = { exports: {} }, Gb = {};
var zE;
function uA() {
  return zE || (zE = 1, (function(p) {
    function S(R, J) {
      var le = R.length;
      R.push(J);
      e: for (; 0 < le; ) {
        var ve = le - 1 >>> 1, Oe = R[ve];
        if (0 < T(Oe, J))
          R[ve] = J, R[le] = Oe, le = ve;
        else break e;
      }
    }
    function E(R) {
      return R.length === 0 ? null : R[0];
    }
    function v(R) {
      if (R.length === 0) return null;
      var J = R[0], le = R.pop();
      if (le !== J) {
        R[0] = le;
        e: for (var ve = 0, Oe = R.length, K = Oe >>> 1; ve < K; ) {
          var ee = 2 * (ve + 1) - 1, ge = R[ee], Ee = ee + 1, xt = R[Ee];
          if (0 > T(ge, le))
            Ee < Oe && 0 > T(xt, ge) ? (R[ve] = xt, R[Ee] = le, ve = Ee) : (R[ve] = ge, R[ee] = le, ve = ee);
          else if (Ee < Oe && 0 > T(xt, le))
            R[ve] = xt, R[Ee] = le, ve = Ee;
          else break e;
        }
      }
      return J;
    }
    function T(R, J) {
      var le = R.sortIndex - J.sortIndex;
      return le !== 0 ? le : R.id - J.id;
    }
    if (p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      p.unstable_now = function() {
        return H.now();
      };
    } else {
      var q = Date, w = q.now();
      p.unstable_now = function() {
        return q.now() - w;
      };
    }
    var P = [], te = [], ue = 1, G = null, X = 3, ae = !1, ne = !1, ie = !1, pe = !1, se = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    function Ze(R) {
      for (var J = E(te); J !== null; ) {
        if (J.callback === null) v(te);
        else if (J.startTime <= R)
          v(te), J.sortIndex = J.expirationTime, S(P, J);
        else break;
        J = E(te);
      }
    }
    function lt(R) {
      if (ie = !1, Ze(R), !ne)
        if (E(P) !== null)
          ne = !0, we || (we = !0, Ae());
        else {
          var J = E(te);
          J !== null && _e(lt, J.startTime - R);
        }
    }
    var we = !1, ze = -1, Se = 5, Ce = -1;
    function de() {
      return pe ? !0 : !(p.unstable_now() - Ce < Se);
    }
    function Ne() {
      if (pe = !1, we) {
        var R = p.unstable_now();
        Ce = R;
        var J = !0;
        try {
          e: {
            ne = !1, ie && (ie = !1, qe(ze), ze = -1), ae = !0;
            var le = X;
            try {
              t: {
                for (Ze(R), G = E(P); G !== null && !(G.expirationTime > R && de()); ) {
                  var ve = G.callback;
                  if (typeof ve == "function") {
                    G.callback = null, X = G.priorityLevel;
                    var Oe = ve(
                      G.expirationTime <= R
                    );
                    if (R = p.unstable_now(), typeof Oe == "function") {
                      G.callback = Oe, Ze(R), J = !0;
                      break t;
                    }
                    G === E(P) && v(P), Ze(R);
                  } else v(P);
                  G = E(P);
                }
                if (G !== null) J = !0;
                else {
                  var K = E(te);
                  K !== null && _e(
                    lt,
                    K.startTime - R
                  ), J = !1;
                }
              }
              break e;
            } finally {
              G = null, X = le, ae = !1;
            }
            J = void 0;
          }
        } finally {
          J ? Ae() : we = !1;
        }
      }
    }
    var Ae;
    if (typeof xe == "function")
      Ae = function() {
        xe(Ne);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), $e = oe.port2;
      oe.port1.onmessage = Ne, Ae = function() {
        $e.postMessage(null);
      };
    } else
      Ae = function() {
        se(Ne, 0);
      };
    function _e(R, J) {
      ze = se(function() {
        R(p.unstable_now());
      }, J);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, p.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Se = 0 < R ? Math.floor(1e3 / R) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, p.unstable_next = function(R) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = X;
      }
      var le = X;
      X = J;
      try {
        return R();
      } finally {
        X = le;
      }
    }, p.unstable_requestPaint = function() {
      pe = !0;
    }, p.unstable_runWithPriority = function(R, J) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var le = X;
      X = R;
      try {
        return J();
      } finally {
        X = le;
      }
    }, p.unstable_scheduleCallback = function(R, J, le) {
      var ve = p.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? ve + le : ve) : le = ve, R) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = le + Oe, R = {
        id: ue++,
        callback: J,
        priorityLevel: R,
        startTime: le,
        expirationTime: Oe,
        sortIndex: -1
      }, le > ve ? (R.sortIndex = le, S(te, R), E(P) === null && R === E(te) && (ie ? (qe(ze), ze = -1) : ie = !0, _e(lt, le - ve))) : (R.sortIndex = Oe, S(P, R), ne || ae || (ne = !0, we || (we = !0, Ae()))), R;
    }, p.unstable_shouldYield = de, p.unstable_wrapCallback = function(R) {
      var J = X;
      return function() {
        var le = X;
        X = J;
        try {
          return R.apply(this, arguments);
        } finally {
          X = le;
        }
      };
    };
  })(Gb)), Gb;
}
var Vb = {};
var AE;
function iA() {
  return AE || (AE = 1, (function(p) {
    process.env.NODE_ENV !== "production" && (function() {
      function S() {
        if (lt = !1, Ce) {
          var R = p.unstable_now();
          Ae = R;
          var J = !0;
          try {
            e: {
              xe = !1, Ze && (Ze = !1, ze(de), de = -1), qe = !0;
              var le = se;
              try {
                t: {
                  for (q(R), pe = v(ae); pe !== null && !(pe.expirationTime > R && P()); ) {
                    var ve = pe.callback;
                    if (typeof ve == "function") {
                      pe.callback = null, se = pe.priorityLevel;
                      var Oe = ve(
                        pe.expirationTime <= R
                      );
                      if (R = p.unstable_now(), typeof Oe == "function") {
                        pe.callback = Oe, q(R), J = !0;
                        break t;
                      }
                      pe === v(ae) && T(ae), q(R);
                    } else T(ae);
                    pe = v(ae);
                  }
                  if (pe !== null) J = !0;
                  else {
                    var K = v(ne);
                    K !== null && te(
                      w,
                      K.startTime - R
                    ), J = !1;
                  }
                }
                break e;
              } finally {
                pe = null, se = le, qe = !1;
              }
              J = void 0;
            }
          } finally {
            J ? oe() : Ce = !1;
          }
        }
      }
      function E(R, J) {
        var le = R.length;
        R.push(J);
        e: for (; 0 < le; ) {
          var ve = le - 1 >>> 1, Oe = R[ve];
          if (0 < H(Oe, J))
            R[ve] = J, R[le] = Oe, le = ve;
          else break e;
        }
      }
      function v(R) {
        return R.length === 0 ? null : R[0];
      }
      function T(R) {
        if (R.length === 0) return null;
        var J = R[0], le = R.pop();
        if (le !== J) {
          R[0] = le;
          e: for (var ve = 0, Oe = R.length, K = Oe >>> 1; ve < K; ) {
            var ee = 2 * (ve + 1) - 1, ge = R[ee], Ee = ee + 1, xt = R[Ee];
            if (0 > H(ge, le))
              Ee < Oe && 0 > H(xt, ge) ? (R[ve] = xt, R[Ee] = le, ve = Ee) : (R[ve] = ge, R[ee] = le, ve = ee);
            else if (Ee < Oe && 0 > H(xt, le))
              R[ve] = xt, R[Ee] = le, ve = Ee;
            else break e;
          }
        }
        return J;
      }
      function H(R, J) {
        var le = R.sortIndex - J.sortIndex;
        return le !== 0 ? le : R.id - J.id;
      }
      function q(R) {
        for (var J = v(ne); J !== null; ) {
          if (J.callback === null) T(ne);
          else if (J.startTime <= R)
            T(ne), J.sortIndex = J.expirationTime, E(ae, J);
          else break;
          J = v(ne);
        }
      }
      function w(R) {
        if (Ze = !1, q(R), !xe)
          if (v(ae) !== null)
            xe = !0, Ce || (Ce = !0, oe());
          else {
            var J = v(ne);
            J !== null && te(
              w,
              J.startTime - R
            );
          }
      }
      function P() {
        return lt ? !0 : !(p.unstable_now() - Ae < Ne);
      }
      function te(R, J) {
        de = we(function() {
          R(p.unstable_now());
        }, J);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), p.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ue = performance;
        p.unstable_now = function() {
          return ue.now();
        };
      } else {
        var G = Date, X = G.now();
        p.unstable_now = function() {
          return G.now() - X;
        };
      }
      var ae = [], ne = [], ie = 1, pe = null, se = 3, qe = !1, xe = !1, Ze = !1, lt = !1, we = typeof setTimeout == "function" ? setTimeout : null, ze = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null, Ce = !1, de = -1, Ne = 5, Ae = -1;
      if (typeof Se == "function")
        var oe = function() {
          Se(S);
        };
      else if (typeof MessageChannel < "u") {
        var $e = new MessageChannel(), _e = $e.port2;
        $e.port1.onmessage = S, oe = function() {
          _e.postMessage(null);
        };
      } else
        oe = function() {
          we(S, 0);
        };
      p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(R) {
        R.callback = null;
      }, p.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ne = 0 < R ? Math.floor(1e3 / R) : 5;
      }, p.unstable_getCurrentPriorityLevel = function() {
        return se;
      }, p.unstable_next = function(R) {
        switch (se) {
          case 1:
          case 2:
          case 3:
            var J = 3;
            break;
          default:
            J = se;
        }
        var le = se;
        se = J;
        try {
          return R();
        } finally {
          se = le;
        }
      }, p.unstable_requestPaint = function() {
        lt = !0;
      }, p.unstable_runWithPriority = function(R, J) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var le = se;
        se = R;
        try {
          return J();
        } finally {
          se = le;
        }
      }, p.unstable_scheduleCallback = function(R, J, le) {
        var ve = p.unstable_now();
        switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? ve + le : ve) : le = ve, R) {
          case 1:
            var Oe = -1;
            break;
          case 2:
            Oe = 250;
            break;
          case 5:
            Oe = 1073741823;
            break;
          case 4:
            Oe = 1e4;
            break;
          default:
            Oe = 5e3;
        }
        return Oe = le + Oe, R = {
          id: ie++,
          callback: J,
          priorityLevel: R,
          startTime: le,
          expirationTime: Oe,
          sortIndex: -1
        }, le > ve ? (R.sortIndex = le, E(ne, R), v(ae) === null && R === v(ne) && (Ze ? (ze(de), de = -1) : Ze = !0, te(w, le - ve))) : (R.sortIndex = Oe, E(ae, R), xe || qe || (xe = !0, Ce || (Ce = !0, oe()))), R;
      }, p.unstable_shouldYield = P, p.unstable_wrapCallback = function(R) {
        var J = se;
        return function() {
          var le = se;
          se = J;
          try {
            return R.apply(this, arguments);
          } finally {
            se = le;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Vb)), Vb;
}
var DE;
function XE() {
  return DE || (DE = 1, process.env.NODE_ENV === "production" ? c1.exports = uA() : c1.exports = iA()), c1.exports;
}
var OE;
function cA() {
  if (OE) return Mg;
  OE = 1;
  var p = XE(), S = tS, E = VE;
  function v(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        a += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function H(l) {
    var a = l, u = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, (a.flags & 4098) !== 0 && (u = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? u : null;
  }
  function q(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (l.tag === 31) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function P(l) {
    if (H(l) !== l)
      throw Error(v(188));
  }
  function te(l) {
    var a = l.alternate;
    if (!a) {
      if (a = H(l), a === null) throw Error(v(188));
      return a !== l ? null : l;
    }
    for (var u = l, c = a; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return P(s), l;
          if (r === c) return P(s), a;
          r = r.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, b = s.child; b; ) {
          if (b === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (b === c) {
            m = !0, c = s, u = r;
            break;
          }
          b = b.sibling;
        }
        if (!m) {
          for (b = r.child; b; ) {
            if (b === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (b === c) {
              m = !0, c = r, u = s;
              break;
            }
            b = b.sibling;
          }
          if (!m) throw Error(v(189));
        }
      }
      if (u.alternate !== c) throw Error(v(190));
    }
    if (u.tag !== 3) throw Error(v(188));
    return u.stateNode.current === u ? l : a;
  }
  function ue(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = ue(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var G = Object.assign, X = Symbol.for("react.element"), ae = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), qe = Symbol.for("react.consumer"), xe = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), lt = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), Ce = Symbol.for("react.activity"), de = Symbol.for("react.memo_cache_sentinel"), Ne = Symbol.iterator;
  function Ae(l) {
    return l === null || typeof l != "object" ? null : (l = Ne && l[Ne] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var oe = Symbol.for("react.client.reference");
  function $e(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === oe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ie:
        return "Fragment";
      case se:
        return "Profiler";
      case pe:
        return "StrictMode";
      case lt:
        return "Suspense";
      case we:
        return "SuspenseList";
      case Ce:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ne:
          return "Portal";
        case xe:
          return l.displayName || "Context";
        case qe:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ze:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ze:
          return a = l.displayName || null, a !== null ? a : $e(l.type) || "Memo";
        case Se:
          a = l._payload, l = l._init;
          try {
            return $e(l(a));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, R = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], Oe = -1;
  function K(l) {
    return { current: l };
  }
  function ee(l) {
    0 > Oe || (l.current = ve[Oe], ve[Oe] = null, Oe--);
  }
  function ge(l, a) {
    Oe++, ve[Oe] = l.current, l.current = a;
  }
  var Ee = K(null), xt = K(null), Gl = K(null), dt = K(null);
  function kl(l, a) {
    switch (ge(Gl, a), ge(xt, l), ge(Ee, null), a.nodeType) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? Wy(l) : 0;
        break;
      default:
        if (l = a.tagName, a = a.namespaceURI)
          a = Wy(a), l = Ep(a, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    ee(Ee), ge(Ee, l);
  }
  function $l() {
    ee(Ee), ee(xt), ee(Gl);
  }
  function Wu(l) {
    l.memoizedState !== null && ge(dt, l);
    var a = Ee.current, u = Ep(a, l.type);
    a !== u && (ge(xt, l), ge(Ee, u));
  }
  function he(l) {
    xt.current === l && (ee(Ee), ee(xt)), dt.current === l && (ee(dt), Cr._currentValue = le);
  }
  var Ci, bc;
  function oa(l) {
    if (Ci === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        Ci = a && a[1] || "", bc = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ci + l + bc;
  }
  var Bn = !1;
  function gt(l, a) {
    if (!l || Bn) return "";
    Bn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (Z) {
                  var Y = Z;
                }
                Reflect.construct(l, [], F);
              } else {
                try {
                  F.call();
                } catch (Z) {
                  Y = Z;
                }
                l.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                Y = Z;
              }
              (F = l()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && Y && typeof Z.stack == "string")
              return [Z.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], b = r[1];
      if (m && b) {
        var O = m.split(`
`), B = b.split(`
`);
        for (s = c = 0; c < O.length && !O[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < B.length && !B[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === O.length || s === B.length)
          for (c = O.length - 1, s = B.length - 1; 1 <= c && 0 <= s && O[c] !== B[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (O[c] !== B[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || O[c] !== B[s]) {
                  var k = `
` + O[c].replace(" at new ", " at ");
                  return l.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", l.displayName)), k;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Bn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? oa(u) : "";
  }
  function ps(l, a) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return oa(l.type);
      case 16:
        return oa("Lazy");
      case 13:
        return l.child !== a && a !== null ? oa("Suspense Fallback") : oa("Suspense");
      case 19:
        return oa("SuspenseList");
      case 0:
      case 15:
        return gt(l.type, !1);
      case 11:
        return gt(l.type.render, !1);
      case 1:
        return gt(l.type, !0);
      case 31:
        return oa("Activity");
      default:
        return "";
    }
  }
  function Sc(l) {
    try {
      var a = "", u = null;
      do
        a += ps(l, u), u = l, l = l.return;
      while (l);
      return a;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var wo = Object.prototype.hasOwnProperty, Ot = p.unstable_scheduleCallback, me = p.unstable_cancelCallback, ht = p.unstable_shouldYield, dl = p.unstable_requestPaint, Rt = p.unstable_now, An = p.unstable_getCurrentPriorityLevel, au = p.unstable_ImmediatePriority, Fu = p.unstable_UserBlockingPriority, qn = p.unstable_NormalPriority, gs = p.unstable_LowPriority, Dn = p.unstable_IdlePriority, No = p.log, Ui = p.unstable_setDisableYieldValue, uu = null, Al = null;
  function Iu(l) {
    if (typeof No == "function" && Ui(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(uu, l);
      } catch {
      }
  }
  var un = Math.clz32 ? Math.clz32 : Cm, Bg = Math.log, qg = Math.LN2;
  function Cm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Bg(l) / qg | 0) | 0;
  }
  var Pu = 256, Ra = 262144, wi = 4194304;
  function fa(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function ul(l, a, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var b = c & 134217727;
    return b !== 0 ? (c = b & ~r, c !== 0 ? s = fa(c) : (m &= b, m !== 0 ? s = fa(m) : u || (u = b & ~l, u !== 0 && (s = fa(u))))) : (b = c & ~r, b !== 0 ? s = fa(b) : m !== 0 ? s = fa(m) : u || (u = c & ~l, u !== 0 && (s = fa(u)))), s === 0 ? 0 : a !== 0 && a !== s && (a & r) === 0 && (r = s & -s, u = a & -a, r >= u || r === 32 && (u & 4194048) !== 0) ? a : s;
  }
  function Ma(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function Ho(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
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
        return a + 5e3;
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
  function Ec() {
    var l = wi;
    return wi <<= 1, (wi & 62914560) === 0 && (wi = 4194304), l;
  }
  function ys(l) {
    for (var a = [], u = 0; 31 > u; u++) a.push(l);
    return a;
  }
  function xo(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function cd(l, a, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var b = l.entanglements, O = l.expirationTimes, B = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var k = 31 - un(u), F = 1 << k;
      b[k] = 0, O[k] = -1;
      var Y = B[k];
      if (Y !== null)
        for (B[k] = null, k = 0; k < Y.length; k++) {
          var Z = Y[k];
          Z !== null && (Z.lane &= -536870913);
        }
      u &= ~F;
    }
    c !== 0 && vs(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~a));
  }
  function vs(l, a, u) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var c = 31 - un(a);
    l.entangledLanes |= a, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function iu(l, a) {
    var u = l.entangledLanes |= a;
    for (l = l.entanglements; u; ) {
      var c = 31 - un(u), s = 1 << c;
      s & a | l[c] & a && (l[c] |= a), u &= ~s;
    }
  }
  function jn(l, a) {
    var u = a & -a;
    return u = (u & 42) !== 0 ? 1 : od(u), (u & (l.suspendedLanes | a)) !== 0 ? 0 : u;
  }
  function od(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Um(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function fd() {
    var l = J.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ur(l.type));
  }
  function wm(l, a) {
    var u = J.p;
    try {
      return J.p = l, a();
    } finally {
      J.p = u;
    }
  }
  var _a = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + _a, cn = "__reactProps$" + _a, Ni = "__reactContainer$" + _a, sd = "__reactEvents$" + _a, Nm = "__reactListeners$" + _a, jg = "__reactHandles$" + _a, Hm = "__reactResources$" + _a, cu = "__reactMarker$" + _a;
  function rd(l) {
    delete l[Mt], delete l[cn], delete l[sd], delete l[Nm], delete l[jg];
  }
  function Tc(l) {
    var a = l[Mt];
    if (a) return a;
    for (var u = l.parentNode; u; ) {
      if (a = u[Ni] || u[Mt]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (l = Wa(l); l !== null; ) {
            if (u = l[Mt]) return u;
            l = Wa(l);
          }
        return a;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function zc(l) {
    if (l = l[Mt] || l[Ni]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function Bo(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ac(l) {
    var a = l[Hm];
    return a || (a = l[Hm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Et(l) {
    l[cu] = !0;
  }
  var Dc = /* @__PURE__ */ new Set(), Hi = {};
  function xi(l, a) {
    ou(l, a), ou(l + "Capture", a);
  }
  function ou(l, a) {
    for (Hi[l] = a, l = 0; l < a.length; l++)
      Dc.add(a[l]);
  }
  var dd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hd = {}, qo = {};
  function jo(l) {
    return wo.call(qo, l) ? !0 : wo.call(hd, l) ? !1 : dd.test(l) ? qo[l] = !0 : (hd[l] = !0, !1);
  }
  function Yo(l, a, u) {
    if (jo(a))
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var c = a.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + u);
      }
  }
  function md(l, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + u);
    }
  }
  function ei(l, a, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(a, u, "" + c);
    }
  }
  function Yn(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pd(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function xm(l, a, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    );
    if (!l.hasOwnProperty(a) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, a, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function gd(l) {
    if (!l._valueTracker) {
      var a = pd(l) ? "checked" : "value";
      l._valueTracker = xm(
        l,
        a,
        "" + l[a]
      );
    }
  }
  function Bm(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var u = a.getValue(), c = "";
    return l && (c = pd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (a.setValue(l), !0) : !1;
  }
  function bs(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var g1 = /[\n"\\]/g;
  function Ln(l) {
    return l.replace(
      g1,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ss(l, a, u, c, s, r, m, b) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), a != null ? m === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + Yn(a)) : l.value !== "" + Yn(a) && (l.value = "" + Yn(a)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), a != null ? Oc(l, m, Yn(a)) : u != null ? Oc(l, m, Yn(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? l.name = "" + Yn(b) : l.removeAttribute("name");
  }
  function Es(l, a, u, c, s, r, m, b) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), a != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || a != null)) {
        gd(l);
        return;
      }
      u = u != null ? "" + Yn(u) : "", a = a != null ? "" + Yn(a) : u, b || a === l.value || (l.value = a), l.defaultValue = a;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = b ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), gd(l);
  }
  function Oc(l, a, u) {
    a === "number" && bs(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Lo(l, a, u, c) {
    if (l = l.options, a) {
      a = {};
      for (var s = 0; s < u.length; s++)
        a["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = a.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Yn(u), a = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        a !== null || l[s].disabled || (a = l[s]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function qm(l, a, u) {
    if (a != null && (a = "" + Yn(a), a !== l.value && (l.value = a), u == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = u != null ? "" + Yn(u) : "";
  }
  function jm(l, a, u, c) {
    if (a == null) {
      if (c != null) {
        if (u != null) throw Error(v(92));
        if (_e(c)) {
          if (1 < c.length) throw Error(v(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), a = u;
    }
    u = Yn(a), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), gd(l);
  }
  function fu(l, a) {
    if (a) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var Yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lg(l, a, u) {
    var c = a.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : c ? l.setProperty(a, u) : typeof u != "number" || u === 0 || Yg.has(a) ? a === "float" ? l.cssFloat = u : l[a] = ("" + u).trim() : l[a] = u + "px";
  }
  function Gg(l, a, u) {
    if (a != null && typeof a != "object")
      throw Error(v(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || a != null && a.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in a)
        c = a[s], a.hasOwnProperty(s) && u[s] !== c && Lg(l, s, c);
    } else
      for (var r in a)
        a.hasOwnProperty(r) && Lg(l, r, a[r]);
  }
  function Ym(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var y1 = /* @__PURE__ */ new Map([
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
  ]), Ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sa(l) {
    return Ts.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ca() {
  }
  var yd = null;
  function vd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var su = null, Rc = null;
  function zs(l) {
    var a = zc(l);
    if (a && (l = a.stateNode)) {
      var u = l[cn] || null;
      e: switch (l = a.stateNode, a.type) {
        case "input":
          if (Ss(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), a = u.name, u.type === "radio" && a != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ln(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < u.length; a++) {
              var c = u[a];
              if (c !== l && c.form === l.form) {
                var s = c[cn] || null;
                if (!s) throw Error(v(90));
                Ss(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (a = 0; a < u.length; a++)
              c = u[a], c.form === l.form && Bm(c);
          }
          break e;
        case "textarea":
          qm(l, u.value, u.defaultValue);
          break e;
        case "select":
          a = u.value, a != null && Lo(l, !!u.multiple, a, !1);
      }
    }
  }
  var Go = !1;
  function Lm(l, a, u) {
    if (Go) return l(a, u);
    Go = !0;
    try {
      var c = l(a);
      return c;
    } finally {
      if (Go = !1, (su !== null || Rc !== null) && (Af(), su && (a = su, l = Rc, Rc = su = null, zs(a), l)))
        for (a = 0; a < l.length; a++) zs(l[a]);
    }
  }
  function Dl(l, a) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[cn] || null;
    if (c === null) return null;
    u = c[a];
    e: switch (a) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        v(231, a, typeof u)
      );
    return u;
  }
  var ti = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), As = !1;
  if (ti)
    try {
      var Vo = {};
      Object.defineProperty(Vo, "passive", {
        get: function() {
          As = !0;
        }
      }), window.addEventListener("test", Vo, Vo), window.removeEventListener("test", Vo, Vo);
    } catch {
      As = !1;
    }
  var li = null, Gm = null, bd = null;
  function Vm() {
    if (bd) return bd;
    var l, a = Gm, u = a.length, c, s = "value" in li ? li.value : li.textContent, r = s.length;
    for (l = 0; l < u && a[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && a[u - c] === s[r - c]; c++) ;
    return bd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Sd(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ds() {
    return !0;
  }
  function Vg() {
    return !1;
  }
  function Vl(l) {
    function a(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var b in l)
        l.hasOwnProperty(b) && (u = l[b], this[b] = u ? u(r) : r[b]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ds : Vg, this.isPropagationStopped = Vg, this;
    }
    return G(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ds);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ds);
      },
      persist: function() {
      },
      isPersistent: Ds
    }), a;
  }
  var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Os = Vl(Bi), Xo = G({}, Bi, { view: 0, detail: 0 }), v1 = Vl(Xo), Xm, Qm, Rs, Ed = G({}, Xo, {
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
    getModifierState: ra,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Rs && (Rs && l.type === "mousemove" ? (Xm = l.screenX - Rs.screenX, Qm = l.screenY - Rs.screenY) : Qm = Xm = 0, Rs = l), Xm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Qm;
    }
  }), Qo = Vl(Ed), Xg = G({}, Ed, { dataTransfer: 0 }), Qg = Vl(Xg), Zg = G({}, Xo, { relatedTarget: 0 }), Td = Vl(Zg), Zm = G({}, Bi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jg = Vl(Zm), Mc = G({}, Bi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _c = Vl(Mc), Ua = G({}, Bi, { data: 0 }), Kg = Vl(Ua), Jm = {
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
  }, ru = {
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
  }, kg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wa(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = kg[l]) ? !!a[l] : !1;
  }
  function ra() {
    return wa;
  }
  var zd = G({}, Xo, {
    key: function(l) {
      if (l.key) {
        var a = Jm[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = Sd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ru[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ra,
    charCode: function(l) {
      return l.type === "keypress" ? Sd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Sd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ad = Vl(zd), Km = G({}, Ed, {
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
  }), Na = Vl(Km), b1 = G({}, Xo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ra
  }), $g = Vl(b1), Wg = G({}, Bi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), S1 = Vl(Wg), km = G({}, Ed, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), E1 = Vl(km), Fg = G({}, Bi, {
    newState: 0,
    oldState: 0
  }), $m = Vl(Fg), Dd = [9, 13, 27, 32], Zo = ti && "CompositionEvent" in window, Cc = null;
  ti && "documentMode" in document && (Cc = document.documentMode);
  var Wl = ti && "TextEvent" in window && !Cc, Wm = ti && (!Zo || Cc && 8 < Cc && 11 >= Cc), Ms = " ", qi = !1;
  function Od(l, a) {
    switch (l) {
      case "keyup":
        return Dd.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Uc = !1;
  function Ig(l, a) {
    switch (l) {
      case "compositionend":
        return Fm(a);
      case "keypress":
        return a.which !== 32 ? null : (qi = !0, Ms);
      case "textInput":
        return l = a.data, l === Ms && qi ? null : l;
      default:
        return null;
    }
  }
  function T1(l, a) {
    if (Uc)
      return l === "compositionend" || !Zo && Od(l, a) ? (l = Vm(), bd = Gm = li = null, Uc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Wm && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var Im = {
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
  function du(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!Im[l.type] : a === "textarea";
  }
  function Pm(l, a, u, c) {
    su ? Rc ? Rc.push(c) : Rc = [c] : su = c, a = Ar(a, "onChange"), 0 < a.length && (u = new Os(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: a }));
  }
  var wc = null, ji = null;
  function Nc(l) {
    Ky(l, 0);
  }
  function Jo(l) {
    var a = Bo(l);
    if (Bm(a)) return l;
  }
  function e0(l, a) {
    if (l === "change") return a;
  }
  var Rd = !1;
  if (ti) {
    var on;
    if (ti) {
      var Ha = "oninput" in document;
      if (!Ha) {
        var t0 = document.createElement("div");
        t0.setAttribute("oninput", "return;"), Ha = typeof t0.oninput == "function";
      }
      on = Ha;
    } else on = !1;
    Rd = on && (!document.documentMode || 9 < document.documentMode);
  }
  function Md() {
    wc && (wc.detachEvent("onpropertychange", _d), ji = wc = null);
  }
  function _d(l) {
    if (l.propertyName === "value" && Jo(ji)) {
      var a = [];
      Pm(
        a,
        ji,
        l,
        vd(l)
      ), Lm(Nc, a);
    }
  }
  function Pg(l, a, u) {
    l === "focusin" ? (Md(), wc = a, ji = u, wc.attachEvent("onpropertychange", _d)) : l === "focusout" && Md();
  }
  function ey(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Jo(ji);
  }
  function Yi(l, a) {
    if (l === "click") return Jo(a);
  }
  function Hc(l, a) {
    if (l === "input" || l === "change")
      return Jo(a);
  }
  function ty(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Fl = typeof Object.is == "function" ? Object.is : ty;
  function da(l, a) {
    if (Fl(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(a);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!wo.call(a, s) || !Fl(l[s], a[s]))
        return !1;
    }
    return !0;
  }
  function l0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function n0(l, a) {
    var u = l0(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= a && c >= a)
          return { node: u, offset: a - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = l0(u);
    }
  }
  function xc(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? xc(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Li(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = bs(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = a.contentWindow;
      else break;
      a = bs(l.document);
    }
    return a;
  }
  function _s(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  var Cs = ti && "documentMode" in document && 11 >= document.documentMode, Gi = null, Ko = null, ha = null, xa = !1;
  function Cd(l, a, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    xa || Gi == null || Gi !== bs(c) || (c = Gi, "selectionStart" in c && _s(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ha && da(ha, c) || (ha = c, c = Ar(Ko, "onSelect"), 0 < c.length && (a = new Os(
      "onSelect",
      "select",
      null,
      a,
      u
    ), l.push({ event: a, listeners: c }), a.target = Gi)));
  }
  function ni(l, a) {
    var u = {};
    return u[l.toLowerCase()] = a.toLowerCase(), u["Webkit" + l] = "webkit" + a, u["Moz" + l] = "moz" + a, u;
  }
  var Ba = {
    animationend: ni("Animation", "AnimationEnd"),
    animationiteration: ni("Animation", "AnimationIteration"),
    animationstart: ni("Animation", "AnimationStart"),
    transitionrun: ni("Transition", "TransitionRun"),
    transitionstart: ni("Transition", "TransitionStart"),
    transitioncancel: ni("Transition", "TransitionCancel"),
    transitionend: ni("Transition", "TransitionEnd")
  }, ko = {}, Vi = {};
  ti && (Vi = document.createElement("div").style, "AnimationEvent" in window || (delete Ba.animationend.animation, delete Ba.animationiteration.animation, delete Ba.animationstart.animation), "TransitionEvent" in window || delete Ba.transitionend.transition);
  function yt(l) {
    if (ko[l]) return ko[l];
    if (!Ba[l]) return l;
    var a = Ba[l], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in Vi)
        return ko[l] = a[u];
    return l;
  }
  var Us = yt("animationend"), a0 = yt("animationiteration"), Ud = yt("animationstart"), Bc = yt("transitionrun"), ws = yt("transitionstart"), hu = yt("transitioncancel"), ly = yt("transitionend"), mu = /* @__PURE__ */ new Map(), $o = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $o.push("scrollEnd");
  function fn(l, a) {
    mu.set(l, a), xi(a, [l]);
  }
  var qc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Xt = [], Ol = 0, ma = 0;
  function Gn() {
    for (var l = Ol, a = ma = Ol = 0; a < l; ) {
      var u = Xt[a];
      Xt[a++] = null;
      var c = Xt[a];
      Xt[a++] = null;
      var s = Xt[a];
      Xt[a++] = null;
      var r = Xt[a];
      if (Xt[a++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && wd(u, s, r);
    }
  }
  function Vn(l, a, u, c) {
    Xt[Ol++] = l, Xt[Ol++] = a, Xt[Ol++] = u, Xt[Ol++] = c, ma |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function pa(l, a, u, c) {
    return Vn(l, a, u, c), Ns(l);
  }
  function ai(l, a) {
    return Vn(l, null, null, a), Ns(l);
  }
  function wd(l, a, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && a !== null && (s = 31 - un(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [a] : c.push(a), a.lane = u | 536870912), r) : null;
  }
  function Ns(l) {
    if (50 < zf)
      throw zf = 0, pr = null, Error(v(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var sn = {};
  function ny(l, a, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function el(l, a, u, c) {
    return new ny(l, a, u, c);
  }
  function jc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ui(l, a) {
    var u = l.alternate;
    return u === null ? (u = el(
      l.tag,
      a,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = a, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, a = l.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function u0(l, a) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, a = u.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function Nd(l, a, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") jc(l) && (m = 1);
    else if (typeof l == "string")
      m = Mp(
        l,
        u,
        Ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Ce:
          return l = el(31, u, a, s), l.elementType = Ce, l.lanes = r, l;
        case ie:
          return ii(u.children, s, r, a);
        case pe:
          m = 8, s |= 24;
          break;
        case se:
          return l = el(12, u, a, s | 2), l.elementType = se, l.lanes = r, l;
        case lt:
          return l = el(13, u, a, s), l.elementType = lt, l.lanes = r, l;
        case we:
          return l = el(19, u, a, s), l.elementType = we, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xe:
                m = 10;
                break e;
              case qe:
                m = 9;
                break e;
              case Ze:
                m = 11;
                break e;
              case ze:
                m = 14;
                break e;
              case Se:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            v(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return a = el(m, u, a, s), a.elementType = l, a.type = c, a.lanes = r, a;
  }
  function ii(l, a, u, c) {
    return l = el(7, l, c, a), l.lanes = u, l;
  }
  function Wo(l, a, u) {
    return l = el(6, l, null, a), l.lanes = u, l;
  }
  function i0(l) {
    var a = el(18, null, null, 0);
    return a.stateNode = l, a;
  }
  function Hd(l, a, u) {
    return a = el(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = u, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  var c0 = /* @__PURE__ */ new WeakMap();
  function Xn(l, a) {
    if (typeof l == "object" && l !== null) {
      var u = c0.get(l);
      return u !== void 0 ? u : (a = {
        value: l,
        source: a,
        stack: Sc(a)
      }, c0.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: Sc(a)
    };
  }
  var Qn = [], Yc = 0, Hs = null, il = 0, On = [], rn = 0, qa = null, Rn = 1, ja = "";
  function ga(l, a) {
    Qn[Yc++] = il, Qn[Yc++] = Hs, Hs = l, il = a;
  }
  function o0(l, a, u) {
    On[rn++] = Rn, On[rn++] = ja, On[rn++] = qa, qa = l;
    var c = Rn;
    l = ja;
    var s = 32 - un(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - un(a) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Rn = 1 << 32 - un(a) + s | u << s | c, ja = r + l;
    } else
      Rn = 1 << r | u << s | c, ja = l;
  }
  function Fo(l) {
    l.return !== null && (ga(l, 1), o0(l, 1, 0));
  }
  function xd(l) {
    for (; l === Hs; )
      Hs = Qn[--Yc], Qn[Yc] = null, il = Qn[--Yc], Qn[Yc] = null;
    for (; l === qa; )
      qa = On[--rn], On[rn] = null, ja = On[--rn], On[rn] = null, Rn = On[--rn], On[rn] = null;
  }
  function xs(l, a) {
    On[rn++] = Rn, On[rn++] = ja, On[rn++] = qa, Rn = a.id, ja = a.overflow, qa = l;
  }
  var Rl = null, Bt = null, at = !1, pu = null, yl = !1, gu = Error(v(519));
  function ya(l) {
    var a = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Po(Xn(a, l)), gu;
  }
  function Bs(l) {
    var a = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (a[Mt] = l, a[cn] = c, u) {
      case "dialog":
        nt("cancel", a), nt("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", a);
        break;
      case "video":
      case "audio":
        for (u = 0; u < _f.length; u++)
          nt(_f[u], a);
        break;
      case "source":
        nt("error", a);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", a), nt("load", a);
        break;
      case "details":
        nt("toggle", a);
        break;
      case "input":
        nt("invalid", a), Es(
          a,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        nt("invalid", a);
        break;
      case "textarea":
        nt("invalid", a), jm(a, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || a.textContent === "" + u || c.suppressHydrationWarning === !0 || yp(a.textContent, u) ? (c.popover != null && (nt("beforetoggle", a), nt("toggle", a)), c.onScroll != null && nt("scroll", a), c.onScrollEnd != null && nt("scrollend", a), c.onClick != null && (a.onclick = Ca), a = !0) : a = !1, a || ya(l, !0);
  }
  function Io(l) {
    for (Rl = l.return; Rl; )
      switch (Rl.tag) {
        case 5:
        case 31:
        case 13:
          yl = !1;
          return;
        case 27:
        case 3:
          yl = !0;
          return;
        default:
          Rl = Rl.return;
      }
  }
  function yu(l) {
    if (l !== Rl) return !1;
    if (!at) return Io(l), at = !0, !1;
    var a = l.tag, u;
    if ((u = a !== 3 && a !== 27) && ((u = a === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Uf(l.type, l.memoizedProps)), u = !u), u && Bt && ya(l), Io(l), a === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      Bt = jh(l);
    } else if (a === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      Bt = jh(l);
    } else
      a === 27 ? (a = Bt, $a(l.type) ? (l = Rr, Rr = null, Bt = l) : Bt = a) : Bt = Rl ? En(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    Bt = Rl = null, at = !1;
  }
  function f0() {
    var l = pu;
    return l !== null && (It === null ? It = l : It.push.apply(
      It,
      l
    ), pu = null), l;
  }
  function Po(l) {
    pu === null ? pu = [l] : pu.push(l);
  }
  var Bd = K(null), ci = null, Ya = null;
  function dn(l, a, u) {
    ge(Bd, a._currentValue), a._currentValue = u;
  }
  function La(l) {
    l._currentValue = Bd.current, ee(Bd);
  }
  function qd(l, a, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, c !== null && (c.childLanes |= a)) : c !== null && (c.childLanes & a) !== a && (c.childLanes |= a), l === u) break;
      l = l.return;
    }
  }
  function vu(l, a, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var b = r;
          r = s;
          for (var O = 0; O < a.length; O++)
            if (b.context === a[O]) {
              r.lanes |= u, b = r.alternate, b !== null && (b.lanes |= u), qd(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = b.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(v(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), qd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Ml(l, a, u, c) {
    l = null;
    for (var s = a, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(v(387));
        if (m = m.memoizedProps, m !== null) {
          var b = s.type;
          Fl(s.pendingProps.value, m.value) || (l !== null ? l.push(b) : l = [b]);
        }
      } else if (s === dt.current) {
        if (m = s.alternate, m === null) throw Error(v(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Cr) : l = [Cr]);
      }
      s = s.return;
    }
    l !== null && vu(
      a,
      l,
      u,
      c
    ), a.flags |= 262144;
  }
  function Lc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Fl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Le(l) {
    ci = l, Ya = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function I(l) {
    return qs(ci, l);
  }
  function oi(l, a) {
    return ci === null && Le(l), qs(l, a);
  }
  function qs(l, a) {
    var u = a._currentValue;
    if (a = { context: a, memoizedValue: u, next: null }, Ya === null) {
      if (l === null) throw Error(v(308));
      Ya = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else Ya = Ya.next = a;
    return u;
  }
  var tl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, s0 = p.unstable_scheduleCallback, r0 = p.unstable_NormalPriority, cl = {
    $$typeof: xe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function js() {
    return {
      controller: new tl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ys(l) {
    l.refCount--, l.refCount === 0 && s0(r0, function() {
      l.controller.abort();
    });
  }
  var Gc = null, Ls = 0, Qi = 0, hl = null;
  function Tt(l, a) {
    if (Gc === null) {
      var u = Gc = [];
      Ls = 0, Qi = Ch(), hl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ls++, a.then(Gs, Gs), a;
  }
  function Gs() {
    if (--Ls === 0 && Gc !== null) {
      hl !== null && (hl.status = "fulfilled");
      var l = Gc;
      Gc = null, Qi = 0, hl = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function Vs(l, a) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = a;
        for (var s = 0; s < u.length; s++) (0, u[s])(a);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var fi = R.S;
  R.S = function(l, a) {
    ap = Rt(), typeof a == "object" && a !== null && typeof a.then == "function" && Tt(l, a), fi !== null && fi(l, a);
  };
  var Zn = K(null);
  function Jn() {
    var l = Zn.current;
    return l !== null ? l : Ct.pooledCache;
  }
  function ef(l, a) {
    a === null ? ge(Zn, Zn.current) : ge(Zn, a.pool);
  }
  function Vc() {
    var l = Jn();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var Zi = Error(v(460)), Xc = Error(v(474)), tf = Error(v(542)), Qc = { then: function() {
  } };
  function d0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function h0(l, a, u) {
    switch (u = l[u], u === void 0 ? l.push(a) : u !== a && (a.then(Ca, Ca), a = u), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, jd(l), l;
      default:
        if (typeof a.status == "string") a.then(Ca, Ca);
        else {
          if (l = Ct, l !== null && 100 < l.shellSuspendCounter)
            throw Error(v(482));
          l = a, l.status = "pending", l.then(
            function(c) {
              if (a.status === "pending") {
                var s = a;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (a.status === "pending") {
                var s = a;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, jd(l), l;
        }
        throw Ki = a, Zi;
    }
  }
  function Ji(l) {
    try {
      var a = l._init;
      return a(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ki = u, Zi) : u;
    }
  }
  var Ki = null;
  function m0() {
    if (Ki === null) throw Error(v(459));
    var l = Ki;
    return Ki = null, l;
  }
  function jd(l) {
    if (l === Zi || l === tf)
      throw Error(v(483));
  }
  var ki = null, Zc = 0;
  function Xs(l) {
    var a = Zc;
    return Zc += 1, ki === null && (ki = []), h0(ki, l, a);
  }
  function lf(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function Qs(l, a) {
    throw a.$$typeof === X ? Error(v(525)) : (l = Object.prototype.toString.call(a), Error(
      v(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function ay(l) {
    function a(N, C) {
      if (l) {
        var x = N.deletions;
        x === null ? (N.deletions = [C], N.flags |= 16) : x.push(C);
      }
    }
    function u(N, C) {
      if (!l) return null;
      for (; C !== null; )
        a(N, C), C = C.sibling;
      return null;
    }
    function c(N) {
      for (var C = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? C.set(N.key, N) : C.set(N.index, N), N = N.sibling;
      return C;
    }
    function s(N, C) {
      return N = ui(N, C), N.index = 0, N.sibling = null, N;
    }
    function r(N, C, x) {
      return N.index = x, l ? (x = N.alternate, x !== null ? (x = x.index, x < C ? (N.flags |= 67108866, C) : x) : (N.flags |= 67108866, C)) : (N.flags |= 1048576, C);
    }
    function m(N) {
      return l && N.alternate === null && (N.flags |= 67108866), N;
    }
    function b(N, C, x, W) {
      return C === null || C.tag !== 6 ? (C = Wo(x, N.mode, W), C.return = N, C) : (C = s(C, x), C.return = N, C);
    }
    function O(N, C, x, W) {
      var De = x.type;
      return De === ie ? k(
        N,
        C,
        x.props.children,
        W,
        x.key
      ) : C !== null && (C.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Se && Ji(De) === C.type) ? (C = s(C, x.props), lf(C, x), C.return = N, C) : (C = Nd(
        x.type,
        x.key,
        x.props,
        null,
        N.mode,
        W
      ), lf(C, x), C.return = N, C);
    }
    function B(N, C, x, W) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== x.containerInfo || C.stateNode.implementation !== x.implementation ? (C = Hd(x, N.mode, W), C.return = N, C) : (C = s(C, x.children || []), C.return = N, C);
    }
    function k(N, C, x, W, De) {
      return C === null || C.tag !== 7 ? (C = ii(
        x,
        N.mode,
        W,
        De
      ), C.return = N, C) : (C = s(C, x), C.return = N, C);
    }
    function F(N, C, x) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = Wo(
          "" + C,
          N.mode,
          x
        ), C.return = N, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case ae:
            return x = Nd(
              C.type,
              C.key,
              C.props,
              null,
              N.mode,
              x
            ), lf(x, C), x.return = N, x;
          case ne:
            return C = Hd(
              C,
              N.mode,
              x
            ), C.return = N, C;
          case Se:
            return C = Ji(C), F(N, C, x);
        }
        if (_e(C) || Ae(C))
          return C = ii(
            C,
            N.mode,
            x,
            null
          ), C.return = N, C;
        if (typeof C.then == "function")
          return F(N, Xs(C), x);
        if (C.$$typeof === xe)
          return F(
            N,
            oi(N, C),
            x
          );
        Qs(N, C);
      }
      return null;
    }
    function Y(N, C, x, W) {
      var De = C !== null ? C.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return De !== null ? null : b(N, C, "" + x, W);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ae:
            return x.key === De ? O(N, C, x, W) : null;
          case ne:
            return x.key === De ? B(N, C, x, W) : null;
          case Se:
            return x = Ji(x), Y(N, C, x, W);
        }
        if (_e(x) || Ae(x))
          return De !== null ? null : k(N, C, x, W, null);
        if (typeof x.then == "function")
          return Y(
            N,
            C,
            Xs(x),
            W
          );
        if (x.$$typeof === xe)
          return Y(
            N,
            C,
            oi(N, x),
            W
          );
        Qs(N, x);
      }
      return null;
    }
    function Z(N, C, x, W, De) {
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return N = N.get(x) || null, b(C, N, "" + W, De);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ae:
            return N = N.get(
              W.key === null ? x : W.key
            ) || null, O(C, N, W, De);
          case ne:
            return N = N.get(
              W.key === null ? x : W.key
            ) || null, B(C, N, W, De);
          case Se:
            return W = Ji(W), Z(
              N,
              C,
              x,
              W,
              De
            );
        }
        if (_e(W) || Ae(W))
          return N = N.get(x) || null, k(C, N, W, De, null);
        if (typeof W.then == "function")
          return Z(
            N,
            C,
            x,
            Xs(W),
            De
          );
        if (W.$$typeof === xe)
          return Z(
            N,
            C,
            x,
            oi(C, W),
            De
          );
        Qs(C, W);
      }
      return null;
    }
    function ye(N, C, x, W) {
      for (var De = null, st = null, be = C, Xe = C = 0, Ke = null; be !== null && Xe < x.length; Xe++) {
        be.index > Xe ? (Ke = be, be = null) : Ke = be.sibling;
        var pt = Y(
          N,
          be,
          x[Xe],
          W
        );
        if (pt === null) {
          be === null && (be = Ke);
          break;
        }
        l && be && pt.alternate === null && a(N, be), C = r(pt, C, Xe), st === null ? De = pt : st.sibling = pt, st = pt, be = Ke;
      }
      if (Xe === x.length)
        return u(N, be), at && ga(N, Xe), De;
      if (be === null) {
        for (; Xe < x.length; Xe++)
          be = F(N, x[Xe], W), be !== null && (C = r(
            be,
            C,
            Xe
          ), st === null ? De = be : st.sibling = be, st = be);
        return at && ga(N, Xe), De;
      }
      for (be = c(be); Xe < x.length; Xe++)
        Ke = Z(
          be,
          N,
          Xe,
          x[Xe],
          W
        ), Ke !== null && (l && Ke.alternate !== null && be.delete(
          Ke.key === null ? Xe : Ke.key
        ), C = r(
          Ke,
          C,
          Xe
        ), st === null ? De = Ke : st.sibling = Ke, st = Ke);
      return l && be.forEach(function(Ia) {
        return a(N, Ia);
      }), at && ga(N, Xe), De;
    }
    function Ue(N, C, x, W) {
      if (x == null) throw Error(v(151));
      for (var De = null, st = null, be = C, Xe = C = 0, Ke = null, pt = x.next(); be !== null && !pt.done; Xe++, pt = x.next()) {
        be.index > Xe ? (Ke = be, be = null) : Ke = be.sibling;
        var Ia = Y(N, be, pt.value, W);
        if (Ia === null) {
          be === null && (be = Ke);
          break;
        }
        l && be && Ia.alternate === null && a(N, be), C = r(Ia, C, Xe), st === null ? De = Ia : st.sibling = Ia, st = Ia, be = Ke;
      }
      if (pt.done)
        return u(N, be), at && ga(N, Xe), De;
      if (be === null) {
        for (; !pt.done; Xe++, pt = x.next())
          pt = F(N, pt.value, W), pt !== null && (C = r(pt, C, Xe), st === null ? De = pt : st.sibling = pt, st = pt);
        return at && ga(N, Xe), De;
      }
      for (be = c(be); !pt.done; Xe++, pt = x.next())
        pt = Z(be, N, Xe, pt.value, W), pt !== null && (l && pt.alternate !== null && be.delete(pt.key === null ? Xe : pt.key), C = r(pt, C, Xe), st === null ? De = pt : st.sibling = pt, st = pt);
      return l && be.forEach(function(ov) {
        return a(N, ov);
      }), at && ga(N, Xe), De;
    }
    function wt(N, C, x, W) {
      if (typeof x == "object" && x !== null && x.type === ie && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ae:
            e: {
              for (var De = x.key; C !== null; ) {
                if (C.key === De) {
                  if (De = x.type, De === ie) {
                    if (C.tag === 7) {
                      u(
                        N,
                        C.sibling
                      ), W = s(
                        C,
                        x.props.children
                      ), W.return = N, N = W;
                      break e;
                    }
                  } else if (C.elementType === De || typeof De == "object" && De !== null && De.$$typeof === Se && Ji(De) === C.type) {
                    u(
                      N,
                      C.sibling
                    ), W = s(C, x.props), lf(W, x), W.return = N, N = W;
                    break e;
                  }
                  u(N, C);
                  break;
                } else a(N, C);
                C = C.sibling;
              }
              x.type === ie ? (W = ii(
                x.props.children,
                N.mode,
                W,
                x.key
              ), W.return = N, N = W) : (W = Nd(
                x.type,
                x.key,
                x.props,
                null,
                N.mode,
                W
              ), lf(W, x), W.return = N, N = W);
            }
            return m(N);
          case ne:
            e: {
              for (De = x.key; C !== null; ) {
                if (C.key === De)
                  if (C.tag === 4 && C.stateNode.containerInfo === x.containerInfo && C.stateNode.implementation === x.implementation) {
                    u(
                      N,
                      C.sibling
                    ), W = s(C, x.children || []), W.return = N, N = W;
                    break e;
                  } else {
                    u(N, C);
                    break;
                  }
                else a(N, C);
                C = C.sibling;
              }
              W = Hd(x, N.mode, W), W.return = N, N = W;
            }
            return m(N);
          case Se:
            return x = Ji(x), wt(
              N,
              C,
              x,
              W
            );
        }
        if (_e(x))
          return ye(
            N,
            C,
            x,
            W
          );
        if (Ae(x)) {
          if (De = Ae(x), typeof De != "function") throw Error(v(150));
          return x = De.call(x), Ue(
            N,
            C,
            x,
            W
          );
        }
        if (typeof x.then == "function")
          return wt(
            N,
            C,
            Xs(x),
            W
          );
        if (x.$$typeof === xe)
          return wt(
            N,
            C,
            oi(N, x),
            W
          );
        Qs(N, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, C !== null && C.tag === 6 ? (u(N, C.sibling), W = s(C, x), W.return = N, N = W) : (u(N, C), W = Wo(x, N.mode, W), W.return = N, N = W), m(N)) : u(N, C);
    }
    return function(N, C, x, W) {
      try {
        Zc = 0;
        var De = wt(
          N,
          C,
          x,
          W
        );
        return ki = null, De;
      } catch (be) {
        if (be === Zi || be === tf) throw be;
        var st = el(29, be, null, N.mode);
        return st.lanes = W, st.return = N, st;
      } finally {
      }
    };
  }
  var $i = ay(!0), p0 = ay(!1), si = !1;
  function Zs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yd(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ri(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Kn(l, a, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (mt & 2) !== 0) {
      var s = c.pending;
      return s === null ? a.next = a : (a.next = s.next, s.next = a), c.pending = a, a = Ns(l), wd(l, null, u), a;
    }
    return Vn(l, c, a, u), Ns(l);
  }
  function Wi(l, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194048) !== 0)) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, iu(l, u);
    }
  }
  function Ld(l, a) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = a : r = r.next = a;
      } else s = r = a;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = a : l.next = a, u.lastBaseUpdate = a;
  }
  var g0 = !1;
  function Fi() {
    if (g0) {
      var l = hl;
      if (l !== null) throw l;
    }
  }
  function bu(l, a, u, c) {
    g0 = !1;
    var s = l.updateQueue;
    si = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, b = s.shared.pending;
    if (b !== null) {
      s.shared.pending = null;
      var O = b, B = O.next;
      O.next = null, m === null ? r = B : m.next = B, m = O;
      var k = l.alternate;
      k !== null && (k = k.updateQueue, b = k.lastBaseUpdate, b !== m && (b === null ? k.firstBaseUpdate = B : b.next = B, k.lastBaseUpdate = O));
    }
    if (r !== null) {
      var F = s.baseState;
      m = 0, k = B = O = null, b = r;
      do {
        var Y = b.lane & -536870913, Z = Y !== b.lane;
        if (Z ? (et & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Qi && (g0 = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var ye = l, Ue = b;
            Y = a;
            var wt = u;
            switch (Ue.tag) {
              case 1:
                if (ye = Ue.payload, typeof ye == "function") {
                  F = ye.call(wt, F, Y);
                  break e;
                }
                F = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ue.payload, Y = typeof ye == "function" ? ye.call(wt, F, Y) : ye, Y == null) break e;
                F = G({}, F, Y);
                break e;
              case 2:
                si = !0;
            }
          }
          Y = b.callback, Y !== null && (l.flags |= 64, Z && (l.flags |= 8192), Z = s.callbacks, Z === null ? s.callbacks = [Y] : Z.push(Y));
        } else
          Z = {
            lane: Y,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, k === null ? (B = k = Z, O = F) : k = k.next = Z, m |= Y;
        if (b = b.next, b === null) {
          if (b = s.shared.pending, b === null)
            break;
          Z = b, b = Z.next, Z.next = null, s.lastBaseUpdate = Z, s.shared.pending = null;
        }
      } while (!0);
      k === null && (O = F), s.baseState = O, s.firstBaseUpdate = B, s.lastBaseUpdate = k, r === null && (s.shared.lanes = 0), Ka |= m, l.lanes = m, l.memoizedState = F;
    }
  }
  function Gd(l, a) {
    if (typeof l != "function")
      throw Error(v(191, l));
    l.call(a);
  }
  function Ii(l, a) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Gd(u[l], a);
  }
  var vl = K(null), Jc = K(0);
  function uy(l, a) {
    l = Ja, ge(Jc, l), ge(vl, a), Ja = l | a.baseLanes;
  }
  function Js() {
    ge(Jc, Ja), ge(vl, vl.current);
  }
  function nf() {
    Ja = Jc.current, ee(vl), ee(Jc);
  }
  var hn = K(null), kn = null;
  function Su(l) {
    var a = l.alternate;
    ge(Qt, Qt.current & 1), ge(hn, l), kn === null && (a === null || vl.current !== null || a.memoizedState !== null) && (kn = l);
  }
  function af(l) {
    ge(Qt, Qt.current), ge(hn, l), kn === null && (kn = l);
  }
  function Vd(l) {
    l.tag === 22 ? (ge(Qt, Qt.current), ge(hn, l), kn === null && (kn = l)) : Ga();
  }
  function Ga() {
    ge(Qt, Qt.current), ge(hn, hn.current);
  }
  function mn(l) {
    ee(hn), kn === l && (kn = null), ee(Qt);
  }
  var Qt = K(0);
  function uf(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Ea(u) || sc(u)))
          return a;
      } else if (a.tag === 19 && (a.memoizedProps.revealOrder === "forwards" || a.memoizedProps.revealOrder === "backwards" || a.memoizedProps.revealOrder === "unstable_legacy-backwards" || a.memoizedProps.revealOrder === "together")) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Eu = 0, Qe = null, zt = null, ol = null, Kc = !1, kc = !1, di = !1, Ks = 0, cf = 0, Pi = null, iy = 0;
  function Wt() {
    throw Error(v(321));
  }
  function hi(l, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < l.length; u++)
      if (!Fl(l[u], a[u])) return !1;
    return !0;
  }
  function ks(l, a, u, c, s, r) {
    return Eu = r, Qe = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, R.H = l === null || l.memoizedState === null ? my : uh, di = !1, r = u(c, s), di = !1, kc && (r = cy(
      a,
      u,
      c,
      s
    )), Xd(l), r;
  }
  function Xd(l) {
    R.H = nr;
    var a = zt !== null && zt.next !== null;
    if (Eu = 0, ol = zt = Qe = null, Kc = !1, cf = 0, Pi = null, a) throw Error(v(300));
    l === null || fl || (l = l.dependencies, l !== null && Lc(l) && (fl = !0));
  }
  function cy(l, a, u, c) {
    Qe = l;
    var s = 0;
    do {
      if (kc && (Pi = null), cf = 0, kc = !1, 25 <= s) throw Error(v(301));
      if (s += 1, ol = zt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = py, r = a(u, c);
    } while (kc);
    return r;
  }
  function z1() {
    var l = R.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? Wc(a) : a, l = l.useState()[0], (zt !== null ? zt.memoizedState : null) !== l && (Qe.flags |= 1024), a;
  }
  function Qd() {
    var l = Ks !== 0;
    return Ks = 0, l;
  }
  function $c(l, a, u) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~u;
  }
  function $s(l) {
    if (Kc) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      Kc = !1;
    }
    Eu = 0, ol = zt = Qe = null, kc = !1, cf = Ks = 0, Pi = null;
  }
  function _l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ol === null ? Qe.memoizedState = ol = l : ol = ol.next = l, ol;
  }
  function ll() {
    if (zt === null) {
      var l = Qe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = zt.next;
    var a = ol === null ? Qe.memoizedState : ol.next;
    if (a !== null)
      ol = a, zt = l;
    else {
      if (l === null)
        throw Qe.alternate === null ? Error(v(467)) : Error(v(310));
      zt = l, l = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null
      }, ol === null ? Qe.memoizedState = ol = l : ol = ol.next = l;
    }
    return ol;
  }
  function Ws() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wc(l) {
    var a = cf;
    return cf += 1, Pi === null && (Pi = []), l = h0(Pi, l, a), a = Qe, (ol === null ? a.memoizedState : ol.next) === null && (a = a.alternate, R.H = a === null || a.memoizedState === null ? my : uh), l;
  }
  function of(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Wc(l);
      if (l.$$typeof === xe) return I(l);
    }
    throw Error(v(438, String(l)));
  }
  function Zd(l) {
    var a = null, u = Qe.updateQueue;
    if (u !== null && (a = u.memoCache), a == null) {
      var c = Qe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (a = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), u === null && (u = Ws(), Qe.updateQueue = u), u.memoCache = a, u = a.data[a.index], u === void 0)
      for (u = a.data[a.index] = Array(l), c = 0; c < l; c++)
        u[c] = de;
    return a.index++, u;
  }
  function Tu(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function zu(l) {
    var a = ll();
    return Jd(a, zt, l);
  }
  function Jd(l, a, u) {
    var c = l.queue;
    if (c === null) throw Error(v(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      a.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      a = s.next;
      var b = m = null, O = null, B = a, k = !1;
      do {
        var F = B.lane & -536870913;
        if (F !== B.lane ? (et & F) === F : (Eu & F) === F) {
          var Y = B.revertLane;
          if (Y === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }), F === Qi && (k = !0);
          else if ((Eu & Y) === Y) {
            B = B.next, Y === Qi && (k = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null
            }, O === null ? (b = O = F, m = r) : O = O.next = F, Qe.lanes |= Y, Ka |= Y;
          F = B.action, di && u(r, F), r = B.hasEagerState ? B.eagerState : u(r, F);
        } else
          Y = {
            lane: F,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          }, O === null ? (b = O = Y, m = r) : O = O.next = Y, Qe.lanes |= F, Ka |= F;
        B = B.next;
      } while (B !== null && B !== a);
      if (O === null ? m = r : O.next = b, !Fl(r, l.memoizedState) && (fl = !0, k && (u = hl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = O, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Kd(l) {
    var a = ll(), u = a.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = a.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Fl(r, a.memoizedState) || (fl = !0), a.memoizedState = r, a.baseQueue === null && (a.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function y0(l, a, u) {
    var c = Qe, s = ll(), r = at;
    if (r) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else u = a();
    var m = !Fl(
      (zt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, fl = !0), s = s.queue, Id(kd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== a || m || ol !== null && ol.memoizedState.tag & 1) {
      if (c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        v0.bind(
          null,
          c,
          s,
          u,
          a
        ),
        null
      ), Ct === null) throw Error(v(349));
      r || (Eu & 127) !== 0 || Fs(c, a, u);
    }
    return u;
  }
  function Fs(l, a, u) {
    l.flags |= 16384, l = { getSnapshot: a, value: u }, a = Qe.updateQueue, a === null ? (a = Ws(), Qe.updateQueue = a, a.stores = [l]) : (u = a.stores, u === null ? a.stores = [l] : u.push(l));
  }
  function v0(l, a, u, c) {
    a.value = u, a.getSnapshot = c, $d(a) && Wd(l);
  }
  function kd(l, a, u) {
    return u(function() {
      $d(a) && Wd(l);
    });
  }
  function $d(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var u = a();
      return !Fl(l, u);
    } catch {
      return !0;
    }
  }
  function Wd(l) {
    var a = ai(l, 2);
    a !== null && Sn(a, l, 2);
  }
  function b0(l) {
    var a = _l();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), di) {
        Iu(!0);
        try {
          u();
        } finally {
          Iu(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tu,
      lastRenderedState: l
    }, a;
  }
  function Cl(l, a, u, c) {
    return l.baseState = u, Jd(
      l,
      zt,
      typeof c == "function" ? c : Tu
    );
  }
  function oy(l, a, u, c, s) {
    if (lr(l)) throw Error(v(485));
    if (l = a.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      R.T !== null ? u(!0) : r.isTransition = !1, c(r), u = a.pending, u === null ? (r.next = a.pending = r, S0(a, r)) : (r.next = u.next, a.pending = u.next = r);
    }
  }
  function S0(l, a) {
    var u = a.action, c = a.payload, s = l.state;
    if (a.isTransition) {
      var r = R.T, m = {};
      R.T = m;
      try {
        var b = u(s, c), O = R.S;
        O !== null && O(m, b), E0(l, a, b);
      } catch (B) {
        Fc(l, a, B);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), R.T = r;
      }
    } else
      try {
        r = u(s, c), E0(l, a, r);
      } catch (B) {
        Fc(l, a, B);
      }
  }
  function E0(l, a, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        T0(l, a, c);
      },
      function(c) {
        return Fc(l, a, c);
      }
    ) : T0(l, a, u);
  }
  function T0(l, a, u) {
    a.status = "fulfilled", a.value = u, z0(a), l.state = u, a = l.pending, a !== null && (u = a.next, u === a ? l.pending = null : (u = u.next, a.next = u, S0(l, u)));
  }
  function Fc(l, a, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        a.status = "rejected", a.reason = u, z0(a), a = a.next;
      while (a !== c);
    }
    l.action = null;
  }
  function z0(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function Is(l, a) {
    return a;
  }
  function A0(l, a) {
    if (at) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var c = Qe;
          if (at) {
            if (Bt) {
              t: {
                for (var s = Bt, r = yl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = En(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Bt = En(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            ya(c);
          }
          c = !1;
        }
        c && (a = u[0]);
      }
    }
    return u = _l(), u.memoizedState = u.baseState = a, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Is,
      lastRenderedState: a
    }, u.queue = c, u = nh.bind(
      null,
      Qe,
      c
    ), c.dispatch = u, c = b0(!1), r = ec.bind(
      null,
      Qe,
      !1,
      c.queue
    ), c = _l(), s = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = oy.bind(
      null,
      Qe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [a, u, !1];
  }
  function fy(l) {
    var a = ll();
    return Ps(a, zt, l);
  }
  function Ps(l, a, u) {
    if (a = Jd(
      l,
      a,
      Is
    )[0], l = zu(Tu)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var c = Wc(a);
      } catch (m) {
        throw m === Zi ? tf : m;
      }
    else c = a;
    a = ll();
    var s = a.queue, r = s.dispatch;
    return u !== a.memoizedState && (Qe.flags |= 2048, Ic(
      9,
      { destroy: void 0 },
      D0.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function D0(l, a) {
    l.action = a;
  }
  function O0(l) {
    var a = ll(), u = zt;
    if (u !== null)
      return Ps(a, u, l);
    ll(), a = a.memoizedState, u = ll();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [a, c, !1];
  }
  function Ic(l, a, u, c) {
    return l = { tag: l, create: u, deps: c, inst: a, next: null }, a = Qe.updateQueue, a === null && (a = Ws(), Qe.updateQueue = a), u = a.lastEffect, u === null ? a.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, a.lastEffect = l), l;
  }
  function R0() {
    return ll().memoizedState;
  }
  function ff(l, a, u, c) {
    var s = _l();
    Qe.flags |= l, s.memoizedState = Ic(
      1 | a,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function sf(l, a, u, c) {
    var s = ll();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    zt !== null && c !== null && hi(c, zt.memoizedState.deps) ? s.memoizedState = Ic(a, r, u, c) : (Qe.flags |= l, s.memoizedState = Ic(
      1 | a,
      r,
      u,
      c
    ));
  }
  function Fd(l, a) {
    ff(8390656, 8, l, a);
  }
  function Id(l, a) {
    sf(2048, 8, l, a);
  }
  function M0(l) {
    Qe.flags |= 4;
    var a = Qe.updateQueue;
    if (a === null)
      a = Ws(), Qe.updateQueue = a, a.events = [l];
    else {
      var u = a.events;
      u === null ? a.events = [l] : u.push(l);
    }
  }
  function er(l) {
    var a = ll().memoizedState;
    return M0({ ref: a, nextImpl: l }), function() {
      if ((mt & 2) !== 0) throw Error(v(440));
      return a.impl.apply(void 0, arguments);
    };
  }
  function Pd(l, a) {
    return sf(4, 2, l, a);
  }
  function _0(l, a) {
    return sf(4, 4, l, a);
  }
  function eh(l, a) {
    if (typeof a == "function") {
      l = l();
      var u = a(l);
      return function() {
        typeof u == "function" ? u() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function C0(l, a, u) {
    u = u != null ? u.concat([l]) : null, sf(4, 4, eh.bind(null, a, l), u);
  }
  function Va() {
  }
  function th(l, a) {
    var u = ll();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    return a !== null && hi(a, c[1]) ? c[0] : (u.memoizedState = [l, a], l);
  }
  function sy(l, a) {
    var u = ll();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    if (a !== null && hi(a, c[1]))
      return c[0];
    if (c = l(), di) {
      Iu(!0);
      try {
        l();
      } finally {
        Iu(!1);
      }
    }
    return u.memoizedState = [c, a], c;
  }
  function tr(l, a, u) {
    return u === void 0 || (Eu & 1073741824) !== 0 && (et & 261930) === 0 ? l.memoizedState = a : (l.memoizedState = u, l = Dy(), Qe.lanes |= l, Ka |= l, u);
  }
  function Au(l, a, u, c) {
    return Fl(u, a) ? u : vl.current !== null ? (l = tr(l, u, c), Fl(l, a) || (fl = !0), l) : (Eu & 42) === 0 || (Eu & 1073741824) !== 0 && (et & 261930) === 0 ? (fl = !0, l.memoizedState = u) : (l = Dy(), Qe.lanes |= l, Ka |= l, a);
  }
  function lh(l, a, u, c, s) {
    var r = J.p;
    J.p = r !== 0 && 8 > r ? r : 8;
    var m = R.T, b = {};
    R.T = b, ec(l, !1, a, u);
    try {
      var O = s(), B = R.S;
      if (B !== null && B(b, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var k = Vs(
          O,
          c
        );
        mi(
          l,
          a,
          k,
          Un(l)
        );
      } else
        mi(
          l,
          a,
          c,
          Un(l)
        );
    } catch (F) {
      mi(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: F },
        Un()
      );
    } finally {
      J.p = r, m !== null && b.types !== null && (m.types = b.types), R.T = m;
    }
  }
  function ry() {
  }
  function rf(l, a, u, c) {
    if (l.tag !== 5) throw Error(v(476));
    var s = df(l).queue;
    lh(
      l,
      s,
      a,
      le,
      u === null ? ry : function() {
        return _t(l), u(c);
      }
    );
  }
  function df(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tu,
        lastRenderedState: le
      },
      next: null
    };
    var u = {};
    return a.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function _t(l) {
    var a = df(l);
    a.next === null && (a = l.alternate.memoizedState), mi(
      l,
      a.next.queue,
      {},
      Un()
    );
  }
  function U0() {
    return I(Cr);
  }
  function dy() {
    return ll().memoizedState;
  }
  function w0() {
    return ll().memoizedState;
  }
  function Du(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var u = Un();
          l = ri(u);
          var c = Kn(a, l, u);
          c !== null && (Sn(c, a, u), Wi(c, a, u)), a = { cache: js() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function hy(l, a, u) {
    var c = Un();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lr(l) ? ah(a, u) : (u = pa(l, a, u, c), u !== null && (Sn(u, l, c), N0(u, a, c)));
  }
  function nh(l, a, u) {
    var c = Un();
    mi(l, a, u, c);
  }
  function mi(l, a, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (lr(l)) ah(a, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = a.lastRenderedReducer, r !== null))
        try {
          var m = a.lastRenderedState, b = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = b, Fl(b, m))
            return Vn(l, a, s, 0), Ct === null && Gn(), !1;
        } catch {
        } finally {
        }
      if (u = pa(l, a, s, c), u !== null)
        return Sn(u, l, c), N0(u, a, c), !0;
    }
    return !1;
  }
  function ec(l, a, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ch(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, lr(l)) {
      if (a) throw Error(v(479));
    } else
      a = pa(
        l,
        u,
        c,
        2
      ), a !== null && Sn(a, l, 2);
  }
  function lr(l) {
    var a = l.alternate;
    return l === Qe || a !== null && a === Qe;
  }
  function ah(l, a) {
    kc = Kc = !0;
    var u = l.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
  }
  function N0(l, a, u) {
    if ((u & 4194048) !== 0) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, iu(l, u);
    }
  }
  var nr = {
    readContext: I,
    use: of,
    useCallback: Wt,
    useContext: Wt,
    useEffect: Wt,
    useImperativeHandle: Wt,
    useLayoutEffect: Wt,
    useInsertionEffect: Wt,
    useMemo: Wt,
    useReducer: Wt,
    useRef: Wt,
    useState: Wt,
    useDebugValue: Wt,
    useDeferredValue: Wt,
    useTransition: Wt,
    useSyncExternalStore: Wt,
    useId: Wt,
    useHostTransitionStatus: Wt,
    useFormState: Wt,
    useActionState: Wt,
    useOptimistic: Wt,
    useMemoCache: Wt,
    useCacheRefresh: Wt
  };
  nr.useEffectEvent = Wt;
  var my = {
    readContext: I,
    use: of,
    useCallback: function(l, a) {
      return _l().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: I,
    useEffect: Fd,
    useImperativeHandle: function(l, a, u) {
      u = u != null ? u.concat([l]) : null, ff(
        4194308,
        4,
        eh.bind(null, a, l),
        u
      );
    },
    useLayoutEffect: function(l, a) {
      return ff(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      ff(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var u = _l();
      a = a === void 0 ? null : a;
      var c = l();
      if (di) {
        Iu(!0);
        try {
          l();
        } finally {
          Iu(!1);
        }
      }
      return u.memoizedState = [c, a], c;
    },
    useReducer: function(l, a, u) {
      var c = _l();
      if (u !== void 0) {
        var s = u(a);
        if (di) {
          Iu(!0);
          try {
            u(a);
          } finally {
            Iu(!1);
          }
        }
      } else s = a;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = hy.bind(
        null,
        Qe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var a = _l();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = b0(l);
      var a = l.queue, u = nh.bind(null, Qe, a);
      return a.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Va,
    useDeferredValue: function(l, a) {
      var u = _l();
      return tr(u, l, a);
    },
    useTransition: function() {
      var l = b0(!1);
      return l = lh.bind(
        null,
        Qe,
        l.queue,
        !0,
        !1
      ), _l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, u) {
      var c = Qe, s = _l();
      if (at) {
        if (u === void 0)
          throw Error(v(407));
        u = u();
      } else {
        if (u = a(), Ct === null)
          throw Error(v(349));
        (et & 127) !== 0 || Fs(c, a, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: a };
      return s.queue = r, Fd(kd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        v0.bind(
          null,
          c,
          r,
          u,
          a
        ),
        null
      ), u;
    },
    useId: function() {
      var l = _l(), a = Ct.identifierPrefix;
      if (at) {
        var u = ja, c = Rn;
        u = (c & ~(1 << 32 - un(c) - 1)).toString(32) + u, a = "_" + a + "R_" + u, u = Ks++, 0 < u && (a += "H" + u.toString(32)), a += "_";
      } else
        u = iy++, a = "_" + a + "r_" + u.toString(32) + "_";
      return l.memoizedState = a;
    },
    useHostTransitionStatus: U0,
    useFormState: A0,
    useActionState: A0,
    useOptimistic: function(l) {
      var a = _l();
      a.memoizedState = a.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = u, a = ec.bind(
        null,
        Qe,
        !0,
        u
      ), u.dispatch = a, [l, a];
    },
    useMemoCache: Zd,
    useCacheRefresh: function() {
      return _l().memoizedState = Du.bind(
        null,
        Qe
      );
    },
    useEffectEvent: function(l) {
      var a = _l(), u = { impl: l };
      return a.memoizedState = u, function() {
        if ((mt & 2) !== 0)
          throw Error(v(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, uh = {
    readContext: I,
    use: of,
    useCallback: th,
    useContext: I,
    useEffect: Id,
    useImperativeHandle: C0,
    useInsertionEffect: Pd,
    useLayoutEffect: _0,
    useMemo: sy,
    useReducer: zu,
    useRef: R0,
    useState: function() {
      return zu(Tu);
    },
    useDebugValue: Va,
    useDeferredValue: function(l, a) {
      var u = ll();
      return Au(
        u,
        zt.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = zu(Tu)[0], a = ll().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        a
      ];
    },
    useSyncExternalStore: y0,
    useId: dy,
    useHostTransitionStatus: U0,
    useFormState: fy,
    useActionState: fy,
    useOptimistic: function(l, a) {
      var u = ll();
      return Cl(u, zt, l, a);
    },
    useMemoCache: Zd,
    useCacheRefresh: w0
  };
  uh.useEffectEvent = er;
  var py = {
    readContext: I,
    use: of,
    useCallback: th,
    useContext: I,
    useEffect: Id,
    useImperativeHandle: C0,
    useInsertionEffect: Pd,
    useLayoutEffect: _0,
    useMemo: sy,
    useReducer: Kd,
    useRef: R0,
    useState: function() {
      return Kd(Tu);
    },
    useDebugValue: Va,
    useDeferredValue: function(l, a) {
      var u = ll();
      return zt === null ? tr(u, l, a) : Au(
        u,
        zt.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = Kd(Tu)[0], a = ll().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        a
      ];
    },
    useSyncExternalStore: y0,
    useId: dy,
    useHostTransitionStatus: U0,
    useFormState: O0,
    useActionState: O0,
    useOptimistic: function(l, a) {
      var u = ll();
      return zt !== null ? Cl(u, zt, l, a) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zd,
    useCacheRefresh: w0
  };
  py.useEffectEvent = er;
  function Pc(l, a, u, c) {
    a = l.memoizedState, u = u(c, a), u = u == null ? a : G({}, a, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var va = {
    enqueueSetState: function(l, a, u) {
      l = l._reactInternals;
      var c = Un(), s = ri(c);
      s.payload = a, u != null && (s.callback = u), a = Kn(l, s, c), a !== null && (Sn(a, l, c), Wi(a, l, c));
    },
    enqueueReplaceState: function(l, a, u) {
      l = l._reactInternals;
      var c = Un(), s = ri(c);
      s.tag = 1, s.payload = a, u != null && (s.callback = u), a = Kn(l, s, c), a !== null && (Sn(a, l, c), Wi(a, l, c));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var u = Un(), c = ri(u);
      c.tag = 2, a != null && (c.callback = a), a = Kn(l, c, u), a !== null && (Sn(a, l, u), Wi(a, l, u));
    }
  };
  function H0(l, a, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : a.prototype && a.prototype.isPureReactComponent ? !da(u, c) || !da(s, r) : !0;
  }
  function gy(l, a, u, c) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, c), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, c), a.state !== l && va.enqueueReplaceState(a, a.state, null);
  }
  function tc(l, a) {
    var u = a;
    if ("ref" in a) {
      u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    }
    if (l = l.defaultProps) {
      u === a && (u = G({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function ih(l) {
    qc(l);
  }
  function x0(l) {
    console.error(l);
  }
  function ch(l) {
    qc(l);
  }
  function hf(l, a) {
    try {
      var u = l.onUncaughtError;
      u(a.value, { componentStack: a.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function ar(l, a, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function B0(l, a, u) {
    return u = ri(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      hf(l, a);
    }, u;
  }
  function q0(l) {
    return l = ri(l), l.tag = 3, l;
  }
  function j0(l, a, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        ar(a, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      ar(a, u, c), typeof s != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
      var b = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function A1(l, a, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (a = u.alternate, a !== null && Ml(
        a,
        u,
        s,
        !0
      ), u = hn.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return kn === null ? Oh() : u.alternate === null && jt === 0 && (jt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Qc ? u.flags |= 16384 : (a = u.updateQueue, a === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : a.add(c), vr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Qc ? u.flags |= 16384 : (a = u.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = a) : (u = a.retryQueue, u === null ? a.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), vr(l, c, s)), !1;
        }
        throw Error(v(435, u.tag));
      }
      return vr(l, c, s), Oh(), !1;
    }
    if (at)
      return a = hn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = s, c !== gu && (l = Error(v(422), { cause: c }), Po(Xn(l, u)))) : (c !== gu && (a = Error(v(423), {
        cause: c
      }), Po(
        Xn(a, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Xn(c, u), s = B0(
        l.stateNode,
        c,
        s
      ), Ld(l, s), jt !== 4 && (jt = 2)), !1;
    var r = Error(v(520), { cause: c });
    if (r = Xn(r, u), mr === null ? mr = [r] : mr.push(r), jt !== 4 && (jt = 2), a === null) return !0;
    c = Xn(c, u), u = a;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = B0(u.stateNode, c, l), Ld(u, l), !1;
        case 1:
          if (a = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = q0(s), j0(
              s,
              l,
              u,
              c
            ), Ld(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var oh = Error(v(461)), fl = !1;
  function Gt(l, a, u, c) {
    a.child = l === null ? p0(a, null, u, c) : $i(
      a,
      l.child,
      u,
      c
    );
  }
  function Y0(l, a, u, c, s) {
    u = u.render;
    var r = a.ref;
    if ("ref" in c) {
      var m = {};
      for (var b in c)
        b !== "ref" && (m[b] = c[b]);
    } else m = c;
    return Le(a), c = ks(
      l,
      a,
      u,
      m,
      r,
      s
    ), b = Qd(), l !== null && !fl ? ($c(l, a, s), Fn(l, a, s)) : (at && b && Fo(a), a.flags |= 1, Gt(l, a, c, s), a.child);
  }
  function L0(l, a, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !jc(r) && r.defaultProps === void 0 && u.compare === null ? (a.tag = 15, a.type = r, G0(
        l,
        a,
        r,
        c,
        s
      )) : (l = Nd(
        u.type,
        null,
        c,
        a,
        a.mode,
        s
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (r = l.child, !rh(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : da, u(m, c) && l.ref === a.ref)
        return Fn(l, a, s);
    }
    return a.flags |= 1, l = ui(r, c), l.ref = a.ref, l.return = a, a.child = l;
  }
  function G0(l, a, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (da(r, c) && l.ref === a.ref)
        if (fl = !1, a.pendingProps = c = r, rh(l, s))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return a.lanes = l.lanes, Fn(l, a, s);
    }
    return fh(
      l,
      a,
      u,
      c,
      s
    );
  }
  function yy(l, a, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && a.stateNode === null && (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = a.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, a.child = null;
        return pn(
          l,
          a,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ef(
          a,
          r !== null ? r.cachePool : null
        ), r !== null ? uy(a, r) : Js(), Vd(a);
      else
        return c = a.lanes = 536870912, pn(
          l,
          a,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (ef(a, r.cachePool), uy(a, r), Ga(), a.memoizedState = null) : (l !== null && ef(a, null), Js(), Ga());
    return Gt(l, a, s, u), a.child;
  }
  function lc(l, a) {
    return l !== null && l.tag === 22 || a.stateNode !== null || (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.sibling;
  }
  function pn(l, a, u, c, s) {
    var r = Jn();
    return r = r === null ? null : { parent: cl._currentValue, pool: r }, a.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && ef(a, null), Js(), Vd(a), l !== null && Ml(l, a, c, !0), a.childLanes = s, null;
  }
  function ur(l, a) {
    return a = or(
      { mode: a.mode, children: a.children },
      l.mode
    ), a.ref = l.ref, l.child = a, a.return = l, a;
  }
  function gn(l, a, u) {
    return $i(a, l.child, null, u), l = ur(a, a.pendingProps), l.flags |= 2, mn(a), a.memoizedState = null, l;
  }
  function vy(l, a, u) {
    var c = a.pendingProps, s = (a.flags & 128) !== 0;
    if (a.flags &= -129, l === null) {
      if (at) {
        if (c.mode === "hidden")
          return l = ur(a, c), a.lanes = 536870912, lc(null, l);
        if (af(a), (l = Bt) ? (l = Py(
          l,
          yl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (a.memoizedState = {
          dehydrated: l,
          treeContext: qa !== null ? { id: Rn, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = i0(l), u.return = a, a.child = u, Rl = a, Bt = null)) : l = null, l === null) throw ya(a);
        return a.lanes = 536870912, null;
      }
      return ur(a, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (af(a), s)
        if (a.flags & 256)
          a.flags &= -257, a = gn(
            l,
            a,
            u
          );
        else if (a.memoizedState !== null)
          a.child = l.child, a.flags |= 128, a = null;
        else throw Error(v(558));
      else if (fl || Ml(l, a, u, !1), s = (u & l.childLanes) !== 0, fl || s) {
        if (c = Ct, c !== null && (m = jn(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ai(l, m), Sn(c, l, m), oh;
        Oh(), a = gn(
          l,
          a,
          u
        );
      } else
        l = r.treeContext, Bt = En(m.nextSibling), Rl = a, at = !0, pu = null, yl = !1, l !== null && xs(a, l), a = ur(a, c), a.flags |= 4096;
      return a;
    }
    return l = ui(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = a.ref, a.child = l, l.return = a, l;
  }
  function $n(l, a) {
    var u = a.ref;
    if (u === null)
      l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(v(284));
      (l === null || l.ref !== u) && (a.flags |= 4194816);
    }
  }
  function fh(l, a, u, c, s) {
    return Le(a), u = ks(
      l,
      a,
      u,
      c,
      void 0,
      s
    ), c = Qd(), l !== null && !fl ? ($c(l, a, s), Fn(l, a, s)) : (at && c && Fo(a), a.flags |= 1, Gt(l, a, u, s), a.child);
  }
  function nc(l, a, u, c, s, r) {
    return Le(a), a.updateQueue = null, u = cy(
      a,
      c,
      u,
      s
    ), Xd(l), c = Qd(), l !== null && !fl ? ($c(l, a, r), Fn(l, a, r)) : (at && c && Fo(a), a.flags |= 1, Gt(l, a, u, r), a.child);
  }
  function V0(l, a, u, c, s) {
    if (Le(a), a.stateNode === null) {
      var r = sn, m = u.contextType;
      typeof m == "object" && m !== null && (r = I(m)), r = new u(c, r), a.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = va, a.stateNode = r, r._reactInternals = a, r = a.stateNode, r.props = c, r.state = a.memoizedState, r.refs = {}, Zs(a), m = u.contextType, r.context = typeof m == "object" && m !== null ? I(m) : sn, r.state = a.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Pc(
        a,
        u,
        m,
        c
      ), r.state = a.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && va.enqueueReplaceState(r, r.state, null), bu(a, c, r, s), Fi(), r.state = a.memoizedState), typeof r.componentDidMount == "function" && (a.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = a.stateNode;
      var b = a.memoizedProps, O = tc(u, b);
      r.props = O;
      var B = r.context, k = u.contextType;
      m = sn, typeof k == "object" && k !== null && (m = I(k));
      var F = u.getDerivedStateFromProps;
      k = typeof F == "function" || typeof r.getSnapshotBeforeUpdate == "function", b = a.pendingProps !== b, k || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (b || B !== m) && gy(
        a,
        r,
        c,
        m
      ), si = !1;
      var Y = a.memoizedState;
      r.state = Y, bu(a, c, r, s), Fi(), B = a.memoizedState, b || Y !== B || si ? (typeof F == "function" && (Pc(
        a,
        u,
        F,
        c
      ), B = a.memoizedState), (O = si || H0(
        a,
        u,
        O,
        c,
        Y,
        B,
        m
      )) ? (k || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = c, a.memoizedState = B), r.props = c, r.state = B, r.context = m, c = O) : (typeof r.componentDidMount == "function" && (a.flags |= 4194308), c = !1);
    } else {
      r = a.stateNode, Yd(l, a), m = a.memoizedProps, k = tc(u, m), r.props = k, F = a.pendingProps, Y = r.context, B = u.contextType, O = sn, typeof B == "object" && B !== null && (O = I(B)), b = u.getDerivedStateFromProps, (B = typeof b == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== F || Y !== O) && gy(
        a,
        r,
        c,
        O
      ), si = !1, Y = a.memoizedState, r.state = Y, bu(a, c, r, s), Fi();
      var Z = a.memoizedState;
      m !== F || Y !== Z || si || l !== null && l.dependencies !== null && Lc(l.dependencies) ? (typeof b == "function" && (Pc(
        a,
        u,
        b,
        c
      ), Z = a.memoizedState), (k = si || H0(
        a,
        u,
        k,
        c,
        Y,
        Z,
        O
      ) || l !== null && l.dependencies !== null && Lc(l.dependencies)) ? (B || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, Z, O), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        Z,
        O
      )), typeof r.componentDidUpdate == "function" && (a.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (a.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (a.flags |= 1024), a.memoizedProps = c, a.memoizedState = Z), r.props = c, r.state = Z, r.context = O, c = k) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (a.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (a.flags |= 1024), c = !1);
    }
    return r = c, $n(l, a), c = (a.flags & 128) !== 0, r || c ? (r = a.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), a.flags |= 1, l !== null && c ? (a.child = $i(
      a,
      l.child,
      null,
      s
    ), a.child = $i(
      a,
      null,
      u,
      s
    )) : Gt(l, a, u, s), a.memoizedState = r.state, l = a.child) : l = Fn(
      l,
      a,
      s
    ), l;
  }
  function Xa(l, a, u, c) {
    return Xi(), a.flags |= 256, Gt(l, a, u, c), a.child;
  }
  var ir = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cr(l) {
    return { baseLanes: l, cachePool: Vc() };
  }
  function Wn(l, a, u) {
    return l = l !== null ? l.childLanes & ~u : 0, a && (l |= bn), l;
  }
  function X0(l, a, u) {
    var c = a.pendingProps, s = !1, r = (a.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Qt.current & 2) !== 0), m && (s = !0, a.flags &= -129), m = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (at) {
        if (s ? Su(a) : Ga(), (l = Bt) ? (l = Py(
          l,
          yl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (a.memoizedState = {
          dehydrated: l,
          treeContext: qa !== null ? { id: Rn, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = i0(l), u.return = a, a.child = u, Rl = a, Bt = null)) : l = null, l === null) throw ya(a);
        return sc(l) ? a.lanes = 32 : a.lanes = 536870912, null;
      }
      var b = c.children;
      return c = c.fallback, s ? (Ga(), s = a.mode, b = or(
        { mode: "hidden", children: b },
        s
      ), c = ii(
        c,
        s,
        u,
        null
      ), b.return = a, c.return = a, b.sibling = c, a.child = b, c = a.child, c.memoizedState = cr(u), c.childLanes = Wn(
        l,
        m,
        u
      ), a.memoizedState = ir, lc(null, c)) : (Su(a), ac(a, b));
    }
    var O = l.memoizedState;
    if (O !== null && (b = O.dehydrated, b !== null)) {
      if (r)
        a.flags & 256 ? (Su(a), a.flags &= -257, a = eo(
          l,
          a,
          u
        )) : a.memoizedState !== null ? (Ga(), a.child = l.child, a.flags |= 128, a = null) : (Ga(), b = c.fallback, s = a.mode, c = or(
          { mode: "visible", children: c.children },
          s
        ), b = ii(
          b,
          s,
          u,
          null
        ), b.flags |= 2, c.return = a, b.return = a, c.sibling = b, a.child = c, $i(
          a,
          l.child,
          null,
          u
        ), c = a.child, c.memoizedState = cr(u), c.childLanes = Wn(
          l,
          m,
          u
        ), a.memoizedState = ir, a = lc(null, c));
      else if (Su(a), sc(b)) {
        if (m = b.nextSibling && b.nextSibling.dataset, m) var B = m.dgst;
        m = B, c = Error(v(419)), c.stack = "", c.digest = m, Po({ value: c, source: null, stack: null }), a = eo(
          l,
          a,
          u
        );
      } else if (fl || Ml(l, a, u, !1), m = (u & l.childLanes) !== 0, fl || m) {
        if (m = Ct, m !== null && (c = jn(m, u), c !== 0 && c !== O.retryLane))
          throw O.retryLane = c, ai(l, c), Sn(m, l, c), oh;
        Ea(b) || Oh(), a = eo(
          l,
          a,
          u
        );
      } else
        Ea(b) ? (a.flags |= 192, a.child = l.child, a = null) : (l = O.treeContext, Bt = En(
          b.nextSibling
        ), Rl = a, at = !0, pu = null, yl = !1, l !== null && xs(a, l), a = ac(
          a,
          c.children
        ), a.flags |= 4096);
      return a;
    }
    return s ? (Ga(), b = c.fallback, s = a.mode, O = l.child, B = O.sibling, c = ui(O, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = O.subtreeFlags & 65011712, B !== null ? b = ui(
      B,
      b
    ) : (b = ii(
      b,
      s,
      u,
      null
    ), b.flags |= 2), b.return = a, c.return = a, c.sibling = b, a.child = c, lc(null, c), c = a.child, b = l.child.memoizedState, b === null ? b = cr(u) : (s = b.cachePool, s !== null ? (O = cl._currentValue, s = s.parent !== O ? { parent: O, pool: O } : s) : s = Vc(), b = {
      baseLanes: b.baseLanes | u,
      cachePool: s
    }), c.memoizedState = b, c.childLanes = Wn(
      l,
      m,
      u
    ), a.memoizedState = ir, lc(l.child, c)) : (Su(a), u = l.child, l = u.sibling, u = ui(u, {
      mode: "visible",
      children: c.children
    }), u.return = a, u.sibling = null, l !== null && (m = a.deletions, m === null ? (a.deletions = [l], a.flags |= 16) : m.push(l)), a.child = u, a.memoizedState = null, u);
  }
  function ac(l, a) {
    return a = or(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function or(l, a) {
    return l = el(22, l, null, a), l.lanes = 0, l;
  }
  function eo(l, a, u) {
    return $i(a, l.child, null, u), l = ac(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function to(l, a, u) {
    l.lanes |= a;
    var c = l.alternate;
    c !== null && (c.lanes |= a), qd(l.return, a, u);
  }
  function sh(l, a, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = a, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Q0(l, a, u) {
    var c = a.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = Qt.current, b = (m & 2) !== 0;
    if (b ? (m = m & 1 | 2, a.flags |= 128) : m &= 1, ge(Qt, m), Gt(l, a, c, u), c = at ? il : 0, !b && l !== null && (l.flags & 128) !== 0)
      e: for (l = a.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && to(l, u, a);
        else if (l.tag === 19)
          to(l, u, a);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === a) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === a)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = a.child, s = null; u !== null; )
          l = u.alternate, l !== null && uf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = a.child, a.child = null) : (s = u.sibling, u.sibling = null), sh(
          a,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = a.child, a.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && uf(l) === null) {
            a.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        sh(
          a,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        sh(
          a,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Fn(l, a, u) {
    if (l !== null && (a.dependencies = l.dependencies), Ka |= a.lanes, (u & a.childLanes) === 0)
      if (l !== null) {
        if (Ml(
          l,
          a,
          u,
          !1
        ), (u & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(v(153));
    if (a.child !== null) {
      for (l = a.child, u = ui(l, l.pendingProps), a.child = u, u.return = a; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ui(l, l.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function rh(l, a) {
    return (l.lanes & a) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Lc(l)));
  }
  function dh(l, a, u) {
    switch (a.tag) {
      case 3:
        kl(a, a.stateNode.containerInfo), dn(a, cl, l.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        Wu(a);
        break;
      case 4:
        kl(a, a.stateNode.containerInfo);
        break;
      case 10:
        dn(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 31:
        if (a.memoizedState !== null)
          return a.flags |= 128, af(a), null;
        break;
      case 13:
        var c = a.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Su(a), a.flags |= 128, null) : (u & a.child.childLanes) !== 0 ? X0(l, a, u) : (Su(a), l = Fn(
            l,
            a,
            u
          ), l !== null ? l.sibling : null);
        Su(a);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & a.childLanes) !== 0, c || (Ml(
          l,
          a,
          u,
          !1
        ), c = (u & a.childLanes) !== 0), s) {
          if (c)
            return Q0(
              l,
              a,
              u
            );
          a.flags |= 128;
        }
        if (s = a.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ge(Qt, Qt.current), c) break;
        return null;
      case 22:
        return a.lanes = 0, yy(
          l,
          a,
          u,
          a.pendingProps
        );
      case 24:
        dn(a, cl, l.memoizedState.cache);
    }
    return Fn(l, a, u);
  }
  function Z0(l, a, u) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        fl = !0;
      else {
        if (!rh(l, u) && (a.flags & 128) === 0)
          return fl = !1, dh(
            l,
            a,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, at && (a.flags & 1048576) !== 0 && o0(a, il, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          var c = a.pendingProps;
          if (l = Ji(a.elementType), a.type = l, typeof l == "function")
            jc(l) ? (c = tc(l, c), a.tag = 1, a = V0(
              null,
              a,
              l,
              c,
              u
            )) : (a.tag = 0, a = fh(
              null,
              a,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Ze) {
                a.tag = 11, a = Y0(
                  null,
                  a,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === ze) {
                a.tag = 14, a = L0(
                  null,
                  a,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw a = $e(l) || l, Error(v(306, a, ""));
          }
        }
        return a;
      case 0:
        return fh(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 1:
        return c = a.type, s = tc(
          c,
          a.pendingProps
        ), V0(
          l,
          a,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (kl(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(v(387));
          c = a.pendingProps;
          var r = a.memoizedState;
          s = r.element, Yd(l, a), bu(a, c, null, u);
          var m = a.memoizedState;
          if (c = m.cache, dn(a, cl, c), c !== r.cache && vu(
            a,
            [cl],
            u,
            !0
          ), Fi(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, a.updateQueue.baseState = r, a.memoizedState = r, a.flags & 256) {
              a = Xa(
                l,
                a,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = Xn(
                Error(v(424)),
                a
              ), Po(s), a = Xa(
                l,
                a,
                c,
                u
              );
              break e;
            } else {
              switch (l = a.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Bt = En(l.firstChild), Rl = a, at = !0, pu = null, yl = !0, u = p0(
                a,
                null,
                c,
                u
              ), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Xi(), c === s) {
              a = Fn(
                l,
                a,
                u
              );
              break e;
            }
            Gt(l, a, c, u);
          }
          a = a.child;
        }
        return a;
      case 26:
        return $n(l, a), l === null ? (u = xf(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = u : at || (u = a.type, l = a.pendingProps, c = fc(
          Gl.current
        ).createElement(u), c[Mt] = a, c[cn] = l, Xl(c, u, l), Et(c), a.stateNode = c) : a.memoizedState = xf(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Wu(a), l === null && at && (c = a.stateNode = Nf(
          a.type,
          a.pendingProps,
          Gl.current
        ), Rl = a, yl = !0, s = Bt, $a(a.type) ? (Rr = s, Bt = En(c.firstChild)) : Bt = s), Gt(
          l,
          a,
          a.pendingProps.children,
          u
        ), $n(l, a), l === null && (a.flags |= 4194304), a.child;
      case 5:
        return l === null && at && ((s = c = Bt) && (c = R1(
          c,
          a.type,
          a.pendingProps,
          yl
        ), c !== null ? (a.stateNode = c, Rl = a, Bt = En(c.firstChild), yl = !1, s = !0) : s = !1), s || ya(a)), Wu(a), s = a.type, r = a.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Uf(s, r) ? c = null : m !== null && Uf(s, m) && (a.flags |= 32), a.memoizedState !== null && (s = ks(
          l,
          a,
          z1,
          null,
          null,
          u
        ), Cr._currentValue = s), $n(l, a), Gt(l, a, c, u), a.child;
      case 6:
        return l === null && at && ((l = u = Bt) && (u = We(
          u,
          a.pendingProps,
          yl
        ), u !== null ? (a.stateNode = u, Rl = a, Bt = null, l = !0) : l = !1), l || ya(a)), null;
      case 13:
        return X0(l, a, u);
      case 4:
        return kl(
          a,
          a.stateNode.containerInfo
        ), c = a.pendingProps, l === null ? a.child = $i(
          a,
          null,
          c,
          u
        ) : Gt(l, a, c, u), a.child;
      case 11:
        return Y0(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 7:
        return Gt(
          l,
          a,
          a.pendingProps,
          u
        ), a.child;
      case 8:
        return Gt(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 12:
        return Gt(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 10:
        return c = a.pendingProps, dn(a, a.type, c.value), Gt(l, a, c.children, u), a.child;
      case 9:
        return s = a.type._context, c = a.pendingProps.children, Le(a), s = I(s), c = c(s), a.flags |= 1, Gt(l, a, c, u), a.child;
      case 14:
        return L0(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 15:
        return G0(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 19:
        return Q0(l, a, u);
      case 31:
        return vy(l, a, u);
      case 22:
        return yy(
          l,
          a,
          u,
          a.pendingProps
        );
      case 24:
        return Le(a), c = I(cl), l === null ? (s = Jn(), s === null && (s = Ct, r = js(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), a.memoizedState = { parent: c, cache: s }, Zs(a), dn(a, cl, s)) : ((l.lanes & u) !== 0 && (Yd(l, a), bu(a, null, null, u), Fi()), s = l.memoizedState, r = a.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, a.memoizedState = s, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = s), dn(a, cl, c)) : (c = r.cache, dn(a, cl, c), c !== s.cache && vu(
          a,
          [cl],
          u,
          !0
        ))), Gt(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(v(156, a.tag));
  }
  function Ou(l) {
    l.flags |= 4;
  }
  function J0(l, a, u, c, s) {
    if ((a = (l.mode & 32) !== 0) && (a = !1), a) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (My()) l.flags |= 8192;
        else
          throw Ki = Qc, Xc;
    } else l.flags &= -16777217;
  }
  function K0(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Nn(a))
      if (My()) l.flags |= 8192;
      else
        throw Ki = Qc, Xc;
  }
  function Il(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? Ec() : 536870912, l.lanes |= a, Ft |= a);
  }
  function mf(l, a) {
    if (!at)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ye(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (a)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, a;
  }
  function by(l, a, u) {
    var c = a.pendingProps;
    switch (xd(a), a.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ye(a), null;
      case 1:
        return Ye(a), null;
      case 3:
        return u = a.stateNode, c = null, l !== null && (c = l.memoizedState.cache), a.memoizedState.cache !== c && (a.flags |= 2048), La(cl), $l(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (yu(a) ? Ou(a) : l === null || l.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, f0())), Ye(a), null;
      case 26:
        var s = a.type, r = a.memoizedState;
        return l === null ? (Ou(a), r !== null ? (Ye(a), K0(a, r)) : (Ye(a), J0(
          a,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Ou(a), Ye(a), K0(a, r)) : (Ye(a), a.flags &= -16777217) : (l = l.memoizedProps, l !== c && Ou(a), Ye(a), J0(
          a,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (he(a), u = Gl.current, s = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== c && Ou(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return Ye(a), null;
          }
          l = Ee.current, yu(a) ? Bs(a) : (l = Nf(s, c, u), a.stateNode = l, Ou(a));
        }
        return Ye(a), null;
      case 5:
        if (he(a), s = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== c && Ou(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return Ye(a), null;
          }
          if (r = Ee.current, yu(a))
            Bs(a);
          else {
            var m = fc(
              Gl.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Mt] = a, r[cn] = c;
            e: for (m = a.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === a) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === a)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            a.stateNode = r;
            e: switch (Xl(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Ou(a);
          }
        }
        return Ye(a), J0(
          a,
          a.type,
          l === null ? null : l.memoizedProps,
          a.pendingProps,
          u
        ), null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== c && Ou(a);
        else {
          if (typeof c != "string" && a.stateNode === null)
            throw Error(v(166));
          if (l = Gl.current, yu(a)) {
            if (l = a.stateNode, u = a.memoizedProps, c = null, s = Rl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Mt] = a, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || yp(l.nodeValue, u)), l || ya(a, !0);
          } else
            l = fc(l).createTextNode(
              c
            ), l[Mt] = a, a.stateNode = l;
        }
        return Ye(a), null;
      case 31:
        if (u = a.memoizedState, l === null || l.memoizedState !== null) {
          if (c = yu(a), u !== null) {
            if (l === null) {
              if (!c) throw Error(v(318));
              if (l = a.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(557));
              l[Mt] = a;
            } else
              Xi(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            Ye(a), l = !1;
          } else
            u = f0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return a.flags & 256 ? (mn(a), a) : (mn(a), null);
          if ((a.flags & 128) !== 0)
            throw Error(v(558));
        }
        return Ye(a), null;
      case 13:
        if (c = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = yu(a), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(v(318));
              if (s = a.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(v(317));
              s[Mt] = a;
            } else
              Xi(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            Ye(a), s = !1;
          } else
            s = f0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return a.flags & 256 ? (mn(a), a) : (mn(a), null);
        }
        return mn(a), (a.flags & 128) !== 0 ? (a.lanes = u, a) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = a.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (a.child.flags |= 8192), Il(a, a.updateQueue), Ye(a), null);
      case 4:
        return $l(), l === null && Cf(a.stateNode.containerInfo), Ye(a), null;
      case 10:
        return La(a.type), Ye(a), null;
      case 19:
        if (ee(Qt), c = a.memoizedState, c === null) return Ye(a), null;
        if (s = (a.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) mf(c, !1);
          else {
            if (jt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = a.child; l !== null; ) {
                if (r = uf(l), r !== null) {
                  for (a.flags |= 128, mf(c, !1), l = r.updateQueue, a.updateQueue = l, Il(a, l), a.subtreeFlags = 0, l = u, u = a.child; u !== null; )
                    u0(u, l), u = u.sibling;
                  return ge(
                    Qt,
                    Qt.current & 1 | 2
                  ), at && ga(a, c.treeForkCount), a.child;
                }
                l = l.sibling;
              }
            c.tail !== null && Rt() > vt && (a.flags |= 128, s = !0, mf(c, !1), a.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = uf(r), l !== null) {
              if (a.flags |= 128, s = !0, l = l.updateQueue, a.updateQueue = l, Il(a, l), mf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !at)
                return Ye(a), null;
            } else
              2 * Rt() - c.renderingStartTime > vt && u !== 536870912 && (a.flags |= 128, s = !0, mf(c, !1), a.lanes = 4194304);
          c.isBackwards ? (r.sibling = a.child, a.child = r) : (l = c.last, l !== null ? l.sibling = r : a.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Rt(), l.sibling = null, u = Qt.current, ge(
          Qt,
          s ? u & 1 | 2 : u & 1
        ), at && ga(a, c.treeForkCount), l) : (Ye(a), null);
      case 22:
      case 23:
        return mn(a), nf(), c = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (a.flags |= 8192) : c && (a.flags |= 8192), c ? (u & 536870912) !== 0 && (a.flags & 128) === 0 && (Ye(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Ye(a), u = a.updateQueue, u !== null && Il(a, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048), l !== null && ee(Zn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), La(cl), Ye(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, a.tag));
  }
  function Sy(l, a) {
    switch (xd(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return La(cl), $l(), l = a.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return he(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if (mn(a), a.alternate === null)
            throw Error(v(340));
          Xi();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 13:
        if (mn(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(v(340));
          Xi();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return ee(Qt), null;
      case 4:
        return $l(), null;
      case 10:
        return La(a.type), null;
      case 22:
      case 23:
        return mn(a), nf(), l !== null && ee(Zn), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return La(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ey(l, a) {
    switch (xd(a), a.tag) {
      case 3:
        La(cl), $l();
        break;
      case 26:
      case 27:
      case 5:
        he(a);
        break;
      case 4:
        $l();
        break;
      case 31:
        a.memoizedState !== null && mn(a);
        break;
      case 13:
        mn(a);
        break;
      case 19:
        ee(Qt);
        break;
      case 10:
        La(a.type);
        break;
      case 22:
      case 23:
        mn(a), nf(), l !== null && ee(Zn);
        break;
      case 24:
        La(cl);
    }
  }
  function ba(l, a) {
    try {
      var u = a.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (b) {
      Dt(a, a.return, b);
    }
  }
  function In(l, a, u) {
    try {
      var c = a.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, b = m.destroy;
            if (b !== void 0) {
              m.destroy = void 0, s = a;
              var O = u, B = b;
              try {
                B();
              } catch (k) {
                Dt(
                  s,
                  O,
                  k
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (k) {
      Dt(a, a.return, k);
    }
  }
  function hh(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var u = l.stateNode;
      try {
        Ii(a, u);
      } catch (c) {
        Dt(l, l.return, c);
      }
    }
  }
  function uc(l, a, u) {
    u.props = tc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Dt(l, a, c);
    }
  }
  function Ru(l, a) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Dt(l, a, s);
    }
  }
  function Qa(l, a) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Dt(l, a, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Dt(l, a, s);
        }
      else u.current = null;
  }
  function k0(l) {
    var a = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Dt(l, l.return, s);
    }
  }
  function mh(l, a, u) {
    try {
      var c = l.stateNode;
      bp(c, l.type, u, a), c[cn] = a;
    } catch (s) {
      Dt(l, l.return, s);
    }
  }
  function $0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && $a(l.type) || l.tag === 4;
  }
  function pf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || $0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && $a(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gf(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, a) : (a = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, a.appendChild(l), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = Ca));
    else if (c !== 4 && (c === 27 && $a(l.type) && (u = l.stateNode, a = null), l = l.child, l !== null))
      for (gf(l, a, u), l = l.sibling; l !== null; )
        gf(l, a, u), l = l.sibling;
  }
  function yf(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? u.insertBefore(l, a) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && $a(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (yf(l, a, u), l = l.sibling; l !== null; )
        yf(l, a, u), l = l.sibling;
  }
  function W0(l) {
    var a = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = a.attributes; s.length; )
        a.removeAttributeNode(s[0]);
      Xl(a, c, u), a[Mt] = l, a[cn] = u;
    } catch (r) {
      Dt(l, l.return, r);
    }
  }
  var pi = !1, ml = !1, ph = !1, F0 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function vf(l, a) {
    if (l = l.containerInfo, xh = Sl, l = Li(l), _s(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, b = -1, O = -1, B = 0, k = 0, F = l, Y = null;
            t: for (; ; ) {
              for (var Z; F !== u || s !== 0 && F.nodeType !== 3 || (b = m + s), F !== r || c !== 0 && F.nodeType !== 3 || (O = m + c), F.nodeType === 3 && (m += F.nodeValue.length), (Z = F.firstChild) !== null; )
                Y = F, F = Z;
              for (; ; ) {
                if (F === l) break t;
                if (Y === u && ++B === s && (b = m), Y === r && ++k === c && (O = m), (Z = F.nextSibling) !== null) break;
                F = Y, Y = F.parentNode;
              }
              F = Z;
            }
            u = b === -1 || O === -1 ? null : { start: b, end: O };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bh = { focusedElem: l, selectionRange: u }, Sl = !1, Ul = a; Ul !== null; )
      if (a = Ul, l = a.child, (a.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = a, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (a = Ul, r = a.alternate, l = a.flags, a.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = a.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = a, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ye = tc(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ye,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ue) {
                  Dt(
                    u,
                    u.return,
                    Ue
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = a.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Or(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Or(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, Ul = l;
            break;
          }
          Ul = a.return;
        }
  }
  function fr(l, a, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        gi(l, u), c & 4 && ba(5, u);
        break;
      case 1:
        if (gi(l, u), c & 4)
          if (l = u.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Dt(u, u.return, m);
            }
          else {
            var s = tc(
              u.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Dt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && hh(u), c & 512 && Ru(u, u.return);
        break;
      case 3:
        if (gi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (a = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                a = u.child.stateNode;
                break;
              case 1:
                a = u.child.stateNode;
            }
          try {
            Ii(l, a);
          } catch (m) {
            Dt(u, u.return, m);
          }
        }
        break;
      case 27:
        a === null && c & 4 && W0(u);
      case 26:
      case 5:
        gi(l, u), a === null && c & 4 && k0(u), c & 512 && Ru(u, u.return);
        break;
      case 12:
        gi(l, u);
        break;
      case 31:
        gi(l, u), c & 4 && Ty(l, u);
        break;
      case 13:
        gi(l, u), c & 4 && ep(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Pn.bind(
          null,
          u
        ), wf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || pi, !c) {
          a = a !== null && a.memoizedState !== null || ml, s = pi;
          var r = ml;
          pi = c, (ml = a) && !r ? Za(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : gi(l, u), pi = s, ml = r;
        }
        break;
      case 30:
        break;
      default:
        gi(l, u);
    }
  }
  function I0(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, I0(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && rd(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var qt = null, yn = !1;
  function Mu(l, a, u) {
    for (u = u.child; u !== null; )
      P0(l, a, u), u = u.sibling;
  }
  function P0(l, a, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(uu, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        ml || Qa(u, a), Mu(
          l,
          a,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        ml || Qa(u, a);
        var c = qt, s = yn;
        $a(u.type) && (qt = u.stateNode, yn = !1), Mu(
          l,
          a,
          u
        ), fo(u.stateNode), qt = c, yn = s;
        break;
      case 5:
        ml || Qa(u, a);
      case 6:
        if (c = qt, s = yn, qt = null, Mu(
          l,
          a,
          u
        ), qt = c, yn = s, qt !== null)
          if (yn)
            try {
              (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(u.stateNode);
            } catch (r) {
              Dt(
                u,
                a,
                r
              );
            }
          else
            try {
              qt.removeChild(u.stateNode);
            } catch (r) {
              Dt(
                u,
                a,
                r
              );
            }
        break;
      case 18:
        qt !== null && (yn ? (l = qt, zp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xf(l)) : zp(qt, u.stateNode));
        break;
      case 4:
        c = qt, s = yn, qt = u.stateNode.containerInfo, yn = !0, Mu(
          l,
          a,
          u
        ), qt = c, yn = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        In(2, u, a), ml || In(4, u, a), Mu(
          l,
          a,
          u
        );
        break;
      case 1:
        ml || (Qa(u, a), c = u.stateNode, typeof c.componentWillUnmount == "function" && uc(
          u,
          a,
          c
        )), Mu(
          l,
          a,
          u
        );
        break;
      case 21:
        Mu(
          l,
          a,
          u
        );
        break;
      case 22:
        ml = (c = ml) || u.memoizedState !== null, Mu(
          l,
          a,
          u
        ), ml = c;
        break;
      default:
        Mu(
          l,
          a,
          u
        );
    }
  }
  function Ty(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Xf(l);
      } catch (u) {
        Dt(a, a.return, u);
      }
    }
  }
  function ep(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xf(l);
      } catch (u) {
        Dt(a, a.return, u);
      }
  }
  function sr(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new F0()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new F0()), a;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function rr(l, a) {
    var u = sr(l);
    a.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Xy.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function vn(l, a) {
    var u = a.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = a, b = m;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if ($a(b.type)) {
                qt = b.stateNode, yn = !1;
                break e;
              }
              break;
            case 5:
              qt = b.stateNode, yn = !1;
              break e;
            case 3:
            case 4:
              qt = b.stateNode.containerInfo, yn = !0;
              break e;
          }
          b = b.return;
        }
        if (qt === null) throw Error(v(160));
        P0(r, m, s), qt = null, yn = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; )
        gh(a, l), a = a.sibling;
  }
  var Je = null;
  function gh(l, a) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vn(a, l), Mn(l), c & 4 && (In(3, l, l.return), ba(3, l), In(5, l, l.return));
        break;
      case 1:
        vn(a, l), Mn(l), c & 512 && (ml || u === null || Qa(u, u.return)), c & 64 && pi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Je;
        if (vn(a, l), Mn(l), c & 512 && (ml || u === null || Qa(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[cu] || r[Mt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Xl(r, c, u), r[Mt] = l, Et(r), c = r;
                      break e;
                    case "link":
                      var m = Rp(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var b = 0; b < m.length; b++)
                          if (r = m[b], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(b, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Xl(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Rp(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (b = 0; b < m.length; b++)
                          if (r = m[b], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(b, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Xl(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(v(468, c));
                  }
                  r[Mt] = l, Et(r), c = r;
                }
                l.stateNode = c;
              } else
                Gh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Op(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Gh(
              s,
              l.type,
              l.stateNode
            ) : Op(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && mh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        vn(a, l), Mn(l), c & 512 && (ml || u === null || Qa(u, u.return)), u !== null && c & 4 && mh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (vn(a, l), Mn(l), c & 512 && (ml || u === null || Qa(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            fu(s, "");
          } catch (ye) {
            Dt(l, l.return, ye);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, mh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ph = !0);
        break;
      case 6:
        if (vn(a, l), Mn(l), c & 4) {
          if (l.stateNode === null)
            throw Error(v(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (ye) {
            Dt(l, l.return, ye);
          }
        }
        break;
      case 3:
        if (jf = null, s = Je, Je = Pl(a.containerInfo), vn(a, l), Je = s, Mn(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xf(a.containerInfo);
          } catch (ye) {
            Dt(l, l.return, ye);
          }
        ph && (ph = !1, tp(l));
        break;
      case 4:
        c = Je, Je = Pl(
          l.stateNode.containerInfo
        ), vn(a, l), Mn(l), Je = c;
        break;
      case 12:
        vn(a, l), Mn(l);
        break;
      case 31:
        vn(a, l), Mn(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rr(l, c)));
        break;
      case 13:
        vn(a, l), Mn(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (ka = Rt()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rr(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var O = u !== null && u.memoizedState !== null, B = pi, k = ml;
        if (pi = B || s, ml = k || O, vn(a, l), ml = k, pi = B, Mn(l), c & 8192)
          e: for (a = l.stateNode, a._visibility = s ? a._visibility & -2 : a._visibility | 1, s && (u === null || O || pi || ml || lo(l)), u = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (u === null) {
                O = u = a;
                try {
                  if (r = O.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    b = O.stateNode;
                    var F = O.memoizedProps.style, Y = F != null && F.hasOwnProperty("display") ? F.display : null;
                    b.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (ye) {
                  Dt(O, O.return, ye);
                }
              }
            } else if (a.tag === 6) {
              if (u === null) {
                O = a;
                try {
                  O.stateNode.nodeValue = s ? "" : O.memoizedProps;
                } catch (ye) {
                  Dt(O, O.return, ye);
                }
              }
            } else if (a.tag === 18) {
              if (u === null) {
                O = a;
                try {
                  var Z = O.stateNode;
                  s ? sl(Z, !0) : sl(O.stateNode, !1);
                } catch (ye) {
                  Dt(O, O.return, ye);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break e;
              u === a && (u = null), a = a.return;
            }
            u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, rr(l, u))));
        break;
      case 19:
        vn(a, l), Mn(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rr(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        vn(a, l), Mn(l);
    }
  }
  function Mn(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if ($0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(v(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = pf(l);
            yf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (fu(m, ""), u.flags &= -33);
            var b = pf(l);
            yf(l, b, m);
            break;
          case 3:
          case 4:
            var O = u.stateNode.containerInfo, B = pf(l);
            gf(
              l,
              B,
              O
            );
            break;
          default:
            throw Error(v(161));
        }
      } catch (k) {
        Dt(l, l.return, k);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function tp(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        tp(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function gi(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        fr(l, a.alternate, a), a = a.sibling;
  }
  function lo(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          In(4, a, a.return), lo(a);
          break;
        case 1:
          Qa(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && uc(
            a,
            a.return,
            u
          ), lo(a);
          break;
        case 27:
          fo(a.stateNode);
        case 26:
        case 5:
          Qa(a, a.return), lo(a);
          break;
        case 22:
          a.memoizedState === null && lo(a);
          break;
        case 30:
          lo(a);
          break;
        default:
          lo(a);
      }
      l = l.sibling;
    }
  }
  function Za(l, a, u) {
    for (u = u && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var c = a.alternate, s = l, r = a, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Za(
            s,
            r,
            u
          ), ba(4, r);
          break;
        case 1:
          if (Za(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (B) {
              Dt(c, c.return, B);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var b = c.stateNode;
            try {
              var O = s.shared.hiddenCallbacks;
              if (O !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < O.length; s++)
                  Gd(O[s], b);
            } catch (B) {
              Dt(c, c.return, B);
            }
          }
          u && m & 64 && hh(r), Ru(r, r.return);
          break;
        case 27:
          W0(r);
        case 26:
        case 5:
          Za(
            s,
            r,
            u
          ), u && c === null && m & 4 && k0(r), Ru(r, r.return);
          break;
        case 12:
          Za(
            s,
            r,
            u
          );
          break;
        case 31:
          Za(
            s,
            r,
            u
          ), u && m & 4 && Ty(s, r);
          break;
        case 13:
          Za(
            s,
            r,
            u
          ), u && m & 4 && ep(s, r);
          break;
        case 22:
          r.memoizedState === null && Za(
            s,
            r,
            u
          ), Ru(r, r.return);
          break;
        case 30:
          break;
        default:
          Za(
            s,
            r,
            u
          );
      }
      a = a.sibling;
    }
  }
  function yh(l, a) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ys(u));
  }
  function vh(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ys(l));
  }
  function Sa(l, a, u, c) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        bf(
          l,
          a,
          u,
          c
        ), a = a.sibling;
  }
  function bf(l, a, u, c) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Sa(
          l,
          a,
          u,
          c
        ), s & 2048 && ba(9, a);
        break;
      case 1:
        Sa(
          l,
          a,
          u,
          c
        );
        break;
      case 3:
        Sa(
          l,
          a,
          u,
          c
        ), s & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ys(l)));
        break;
      case 12:
        if (s & 2048) {
          Sa(
            l,
            a,
            u,
            c
          ), l = a.stateNode;
          try {
            var r = a.memoizedProps, m = r.id, b = r.onPostCommit;
            typeof b == "function" && b(
              m,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (O) {
            Dt(a, a.return, O);
          }
        } else
          Sa(
            l,
            a,
            u,
            c
          );
        break;
      case 31:
        Sa(
          l,
          a,
          u,
          c
        );
        break;
      case 13:
        Sa(
          l,
          a,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = a.stateNode, m = a.alternate, a.memoizedState !== null ? r._visibility & 2 ? Sa(
          l,
          a,
          u,
          c
        ) : dr(l, a) : r._visibility & 2 ? Sa(
          l,
          a,
          u,
          c
        ) : (r._visibility |= 2, Sf(
          l,
          a,
          u,
          c,
          (a.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && yh(m, a);
        break;
      case 24:
        Sa(
          l,
          a,
          u,
          c
        ), s & 2048 && vh(a.alternate, a);
        break;
      default:
        Sa(
          l,
          a,
          u,
          c
        );
    }
  }
  function Sf(l, a, u, c, s) {
    for (s = s && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child; a !== null; ) {
      var r = l, m = a, b = u, O = c, B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Sf(
            r,
            m,
            b,
            O,
            s
          ), ba(8, m);
          break;
        case 23:
          break;
        case 22:
          var k = m.stateNode;
          m.memoizedState !== null ? k._visibility & 2 ? Sf(
            r,
            m,
            b,
            O,
            s
          ) : dr(
            r,
            m
          ) : (k._visibility |= 2, Sf(
            r,
            m,
            b,
            O,
            s
          )), s && B & 2048 && yh(
            m.alternate,
            m
          );
          break;
        case 24:
          Sf(
            r,
            m,
            b,
            O,
            s
          ), s && B & 2048 && vh(m.alternate, m);
          break;
        default:
          Sf(
            r,
            m,
            b,
            O,
            s
          );
      }
      a = a.sibling;
    }
  }
  function dr(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var u = l, c = a, s = c.flags;
        switch (c.tag) {
          case 22:
            dr(u, c), s & 2048 && yh(
              c.alternate,
              c
            );
            break;
          case 24:
            dr(u, c), s & 2048 && vh(c.alternate, c);
            break;
          default:
            dr(u, c);
        }
        a = a.sibling;
      }
  }
  var _n = 8192;
  function _u(l, a, u) {
    if (l.subtreeFlags & _n)
      for (l = l.child; l !== null; )
        zy(
          l,
          a,
          u
        ), l = l.sibling;
  }
  function zy(l, a, u) {
    switch (l.tag) {
      case 26:
        _u(
          l,
          a,
          u
        ), l.flags & _n && l.memoizedState !== null && Hu(
          u,
          Je,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        _u(
          l,
          a,
          u
        );
        break;
      case 3:
      case 4:
        var c = Je;
        Je = Pl(l.stateNode.containerInfo), _u(
          l,
          a,
          u
        ), Je = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = _n, _n = 16777216, _u(
          l,
          a,
          u
        ), _n = c) : _u(
          l,
          a,
          u
        ));
        break;
      default:
        _u(
          l,
          a,
          u
        );
    }
  }
  function bh(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function Ef(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          Ul = c, Sh(
            c,
            l
          );
        }
      bh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        lp(l), l = l.sibling;
  }
  function lp(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ef(l), l.flags & 2048 && In(9, l, l.return);
        break;
      case 3:
        Ef(l);
        break;
      case 12:
        Ef(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -3, hr(l)) : Ef(l);
        break;
      default:
        Ef(l);
    }
  }
  function hr(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          Ul = c, Sh(
            c,
            l
          );
        }
      bh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          In(8, a, a.return), hr(a);
          break;
        case 22:
          u = a.stateNode, u._visibility & 2 && (u._visibility &= -3, hr(a));
          break;
        default:
          hr(a);
      }
      l = l.sibling;
    }
  }
  function Sh(l, a) {
    for (; Ul !== null; ) {
      var u = Ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          In(8, u, a);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ys(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Ul = c;
      else
        e: for (u = l; Ul !== null; ) {
          c = Ul;
          var s = c.sibling, r = c.return;
          if (I0(c), c === u) {
            Ul = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Ul = s;
            break e;
          }
          Ul = r;
        }
    }
  }
  var Ay = {
    getCacheForType: function(l) {
      var a = I(cl), u = a.data.get(l);
      return u === void 0 && (u = l(), a.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return I(cl).controller.signal;
    }
  }, np = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, Ct = null, ut = null, et = 0, At = 0, Be = null, Cu = !1, ic = !1, Eh = !1, Ja = 0, jt = 0, Ka = 0, no = 0, Th = 0, bn = 0, Ft = 0, mr = null, It = null, zh = !1, ka = 0, ap = 0, vt = 1 / 0, Tf = null, Zt = null, bl = 0, yi = null, cc = null, Uu = 0, Cn = 0, Ah = null, Dh = null, zf = 0, pr = null;
  function Un() {
    return (mt & 2) !== 0 && et !== 0 ? et & -et : R.T !== null ? Ch() : fd();
  }
  function Dy() {
    if (bn === 0)
      if ((et & 536870912) === 0 || at) {
        var l = Ra;
        Ra <<= 1, (Ra & 3932160) === 0 && (Ra = 262144), bn = l;
      } else bn = 536870912;
    return l = hn.current, l !== null && (l.flags |= 32), bn;
  }
  function Sn(l, a, u) {
    (l === Ct && (At === 2 || At === 9) || l.cancelPendingCommit !== null) && (wu(l, 0), vi(
      l,
      et,
      bn,
      !1
    )), xo(l, u), ((mt & 2) === 0 || l !== Ct) && (l === Ct && ((mt & 2) === 0 && (no |= u), jt === 4 && vi(
      l,
      et,
      bn,
      !1
    )), Nu(l));
  }
  function Oy(l, a, u) {
    if ((mt & 6) !== 0) throw Error(v(327));
    var c = !u && (a & 127) === 0 && (a & l.expiredLanes) === 0 || Ma(l, a), s = c ? Uy(l, a) : Rh(l, a, !0), r = c;
    do {
      if (s === 0) {
        ic && !c && vi(l, a, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !Ry(u)) {
          s = Rh(l, a, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = a, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            a = m;
            e: {
              var b = l;
              s = mr;
              var O = b.current.memoizedState.isDehydrated;
              if (O && (wu(b, m).flags |= 256), m = Rh(
                b,
                m,
                !1
              ), m !== 2) {
                if (Eh && !O) {
                  b.errorRecoveryDisabledLanes |= r, no |= r, s = 4;
                  break e;
                }
                r = It, It = s, r !== null && (It === null ? It = r : It.push.apply(
                  It,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          wu(l, 0), vi(l, a, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              vi(
                c,
                a,
                bn,
                !Cu
              );
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((a & 62914560) === a && (s = ka + 300 - Rt(), 10 < s)) {
            if (vi(
              c,
              a,
              bn,
              !Cu
            ), ul(c, 0, !0) !== 0) break e;
            Uu = a, c.timeoutHandle = Dr(
              gr.bind(
                null,
                c,
                u,
                It,
                Tf,
                zh,
                a,
                bn,
                no,
                Ft,
                Cu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          gr(
            c,
            u,
            It,
            Tf,
            zh,
            a,
            bn,
            no,
            Ft,
            Cu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Nu(l);
  }
  function gr(l, a, u, c, s, r, m, b, O, B, k, F, Y, Z) {
    if (l.timeoutHandle = -1, F = a.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ca
      }, zy(
        a,
        r,
        F
      );
      var ye = (r & 62914560) === r ? ka - Rt() : (r & 4194048) === r ? ap - Rt() : 0;
      if (ye = _p(
        F,
        ye
      ), ye !== null) {
        Uu = r, l.cancelPendingCommit = ye(
          xy.bind(
            null,
            l,
            a,
            r,
            u,
            c,
            s,
            m,
            b,
            O,
            k,
            F,
            null,
            Y,
            Z
          )
        ), vi(l, r, m, !B);
        return;
      }
    }
    xy(
      l,
      a,
      r,
      u,
      c,
      s,
      m,
      b,
      O
    );
  }
  function Ry(l) {
    for (var a = l; ; ) {
      var u = a.tag;
      if ((u === 0 || u === 11 || u === 15) && a.flags & 16384 && (u = a.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Fl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function vi(l, a, u, c) {
    a &= ~Th, a &= ~no, l.suspendedLanes |= a, l.pingedLanes &= ~a, c && (l.warmLanes |= a), c = l.expirationTimes;
    for (var s = a; 0 < s; ) {
      var r = 31 - un(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && vs(l, u, a);
  }
  function Af() {
    return (mt & 6) === 0 ? (Si(0), !1) : !0;
  }
  function up() {
    if (ut !== null) {
      if (At === 0)
        var l = ut.return;
      else
        l = ut, Ya = ci = null, $s(l), ki = null, Zc = 0, l = ut;
      for (; l !== null; )
        Ey(l.alternate, l), l = l.return;
      ut = null;
    }
  }
  function wu(l, a) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Fy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Uu = 0, up(), Ct = l, ut = u = ui(l.current, null), et = a, At = 0, Be = null, Cu = !1, ic = Ma(l, a), Eh = !1, Ft = bn = Th = no = Ka = jt = 0, It = mr = null, zh = !1, (a & 8) !== 0 && (a |= a & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= a; 0 < c; ) {
        var s = 31 - un(c), r = 1 << s;
        a |= l[s], c &= ~r;
      }
    return Ja = a, Gn(), u;
  }
  function Df(l, a) {
    Qe = null, R.H = nr, a === Zi || a === tf ? (a = m0(), At = 3) : a === Xc ? (a = m0(), At = 4) : At = a === oh ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Be = a, ut === null && (jt = 1, hf(
      l,
      Xn(a, l.current)
    ));
  }
  function My() {
    var l = hn.current;
    return l === null ? !0 : (et & 4194048) === et ? kn === null : (et & 62914560) === et || (et & 536870912) !== 0 ? l === kn : !1;
  }
  function _y() {
    var l = R.H;
    return R.H = nr, l === null ? nr : l;
  }
  function Cy() {
    var l = R.A;
    return R.A = Ay, l;
  }
  function Oh() {
    jt = 4, Cu || (et & 4194048) !== et && hn.current !== null || (ic = !0), (Ka & 134217727) === 0 && (no & 134217727) === 0 || Ct === null || vi(
      Ct,
      et,
      bn,
      !1
    );
  }
  function Rh(l, a, u) {
    var c = mt;
    mt |= 2;
    var s = _y(), r = Cy();
    (Ct !== l || et !== a) && (Tf = null, wu(l, a)), a = !1;
    var m = jt;
    e: do
      try {
        if (At !== 0 && ut !== null) {
          var b = ut, O = Be;
          switch (At) {
            case 8:
              up(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              hn.current === null && (a = !0);
              var B = At;
              if (At = 0, Be = null, ao(l, b, O, B), u && ic) {
                m = 0;
                break e;
              }
              break;
            default:
              B = At, At = 0, Be = null, ao(l, b, O, B);
          }
        }
        D1(), m = jt;
        break;
      } catch (k) {
        Df(l, k);
      }
    while (!0);
    return a && l.shellSuspendCounter++, Ya = ci = null, mt = c, R.H = s, R.A = r, ut === null && (Ct = null, et = 0, Gn()), m;
  }
  function D1() {
    for (; ut !== null; ) wy(ut);
  }
  function Uy(l, a) {
    var u = mt;
    mt |= 2;
    var c = _y(), s = Cy();
    Ct !== l || et !== a ? (Tf = null, vt = Rt() + 500, wu(l, a)) : ic = Ma(
      l,
      a
    );
    e: do
      try {
        if (At !== 0 && ut !== null) {
          a = ut;
          var r = Be;
          t: switch (At) {
            case 1:
              At = 0, Be = null, ao(l, a, r, 1);
              break;
            case 2:
            case 9:
              if (d0(r)) {
                At = 0, Be = null, Ny(a);
                break;
              }
              a = function() {
                At !== 2 && At !== 9 || Ct !== l || (At = 7), Nu(l);
              }, r.then(a, a);
              break e;
            case 3:
              At = 7;
              break e;
            case 4:
              At = 5;
              break e;
            case 7:
              d0(r) ? (At = 0, Be = null, Ny(a)) : (At = 0, Be = null, ao(l, a, r, 7));
              break;
            case 5:
              var m = null;
              switch (ut.tag) {
                case 26:
                  m = ut.memoizedState;
                case 5:
                case 27:
                  var b = ut;
                  if (m ? Nn(m) : b.stateNode.complete) {
                    At = 0, Be = null;
                    var O = b.sibling;
                    if (O !== null) ut = O;
                    else {
                      var B = b.return;
                      B !== null ? (ut = B, yr(B)) : ut = null;
                    }
                    break t;
                  }
              }
              At = 0, Be = null, ao(l, a, r, 5);
              break;
            case 6:
              At = 0, Be = null, ao(l, a, r, 6);
              break;
            case 8:
              up(), jt = 6;
              break e;
            default:
              throw Error(v(462));
          }
        }
        oc();
        break;
      } catch (k) {
        Df(l, k);
      }
    while (!0);
    return Ya = ci = null, R.H = c, R.A = s, mt = u, ut !== null ? 0 : (Ct = null, et = 0, Gn(), jt);
  }
  function oc() {
    for (; ut !== null && !ht(); )
      wy(ut);
  }
  function wy(l) {
    var a = Z0(l.alternate, l, Ja);
    l.memoizedProps = l.pendingProps, a === null ? yr(l) : ut = a;
  }
  function Ny(l) {
    var a = l, u = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = nc(
          u,
          a,
          a.pendingProps,
          a.type,
          void 0,
          et
        );
        break;
      case 11:
        a = nc(
          u,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          et
        );
        break;
      case 5:
        $s(a);
      default:
        Ey(u, a), a = ut = u0(a, Ja), a = Z0(u, a, Ja);
    }
    l.memoizedProps = l.pendingProps, a === null ? yr(l) : ut = a;
  }
  function ao(l, a, u, c) {
    Ya = ci = null, $s(a), ki = null, Zc = 0;
    var s = a.return;
    try {
      if (A1(
        l,
        s,
        a,
        u,
        et
      )) {
        jt = 1, hf(
          l,
          Xn(u, l.current)
        ), ut = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ut = s, r;
      jt = 1, hf(
        l,
        Xn(u, l.current)
      ), ut = null;
      return;
    }
    a.flags & 32768 ? (at || c === 1 ? l = !0 : ic || (et & 536870912) !== 0 ? l = !1 : (Cu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = hn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Hy(a, l)) : yr(a);
  }
  function yr(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        Hy(
          a,
          Cu
        );
        return;
      }
      l = a.return;
      var u = by(
        a.alternate,
        a,
        Ja
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        ut = a;
        return;
      }
      ut = a = l;
    } while (a !== null);
    jt === 0 && (jt = 5);
  }
  function Hy(l, a) {
    do {
      var u = Sy(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !a && (l = l.sibling, l !== null)) {
        ut = l;
        return;
      }
      ut = l = u;
    } while (l !== null);
    jt = 6, ut = null;
  }
  function xy(l, a, u, c, s, r, m, b, O) {
    l.cancelPendingCommit = null;
    do
      Of();
    while (bl !== 0);
    if ((mt & 6) !== 0) throw Error(v(327));
    if (a !== null) {
      if (a === l.current) throw Error(v(177));
      if (r = a.lanes | a.childLanes, r |= ma, cd(
        l,
        u,
        r,
        m,
        b,
        O
      ), l === Ct && (ut = Ct = null, et = 0), cc = a, yi = l, Uu = u, Cn = r, Ah = s, Dh = c, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Qy(qn, function() {
        return Ly(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || c) {
        c = R.T, R.T = null, s = J.p, J.p = 2, m = mt, mt |= 4;
        try {
          vf(l, a, u);
        } finally {
          mt = m, J.p = s, R.T = c;
        }
      }
      bl = 1, By(), qy(), jy();
    }
  }
  function By() {
    if (bl === 1) {
      bl = 0;
      var l = yi, a = cc, u = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || u) {
        u = R.T, R.T = null;
        var c = J.p;
        J.p = 2;
        var s = mt;
        mt |= 4;
        try {
          gh(a, l);
          var r = Bh, m = Li(l.containerInfo), b = r.focusedElem, O = r.selectionRange;
          if (m !== b && b && b.ownerDocument && xc(
            b.ownerDocument.documentElement,
            b
          )) {
            if (O !== null && _s(b)) {
              var B = O.start, k = O.end;
              if (k === void 0 && (k = B), "selectionStart" in b)
                b.selectionStart = B, b.selectionEnd = Math.min(
                  k,
                  b.value.length
                );
              else {
                var F = b.ownerDocument || document, Y = F && F.defaultView || window;
                if (Y.getSelection) {
                  var Z = Y.getSelection(), ye = b.textContent.length, Ue = Math.min(O.start, ye), wt = O.end === void 0 ? Ue : Math.min(O.end, ye);
                  !Z.extend && Ue > wt && (m = wt, wt = Ue, Ue = m);
                  var N = n0(
                    b,
                    Ue
                  ), C = n0(
                    b,
                    wt
                  );
                  if (N && C && (Z.rangeCount !== 1 || Z.anchorNode !== N.node || Z.anchorOffset !== N.offset || Z.focusNode !== C.node || Z.focusOffset !== C.offset)) {
                    var x = F.createRange();
                    x.setStart(N.node, N.offset), Z.removeAllRanges(), Ue > wt ? (Z.addRange(x), Z.extend(C.node, C.offset)) : (x.setEnd(C.node, C.offset), Z.addRange(x));
                  }
                }
              }
            }
            for (F = [], Z = b; Z = Z.parentNode; )
              Z.nodeType === 1 && F.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < F.length; b++) {
              var W = F[b];
              W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
            }
          }
          Sl = !!xh, Bh = xh = null;
        } finally {
          mt = s, J.p = c, R.T = u;
        }
      }
      l.current = a, bl = 2;
    }
  }
  function qy() {
    if (bl === 2) {
      bl = 0;
      var l = yi, a = cc, u = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var c = J.p;
        J.p = 2;
        var s = mt;
        mt |= 4;
        try {
          fr(l, a.alternate, a);
        } finally {
          mt = s, J.p = c, R.T = u;
        }
      }
      bl = 3;
    }
  }
  function jy() {
    if (bl === 4 || bl === 3) {
      bl = 0, dl();
      var l = yi, a = cc, u = Uu, c = Dh;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? bl = 5 : (bl = 0, cc = yi = null, Yy(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Zt = null), Um(u), a = a.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            uu,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        a = R.T, s = J.p, J.p = 2, R.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var b = c[m];
            r(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          R.T = a, J.p = s;
        }
      }
      (Uu & 3) !== 0 && Of(), Nu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === pr ? zf++ : (zf = 0, pr = l) : zf = 0, Si(0);
    }
  }
  function Yy(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, Ys(a)));
  }
  function Of() {
    return By(), qy(), jy(), Ly();
  }
  function Ly() {
    if (bl !== 5) return !1;
    var l = yi, a = Cn;
    Cn = 0;
    var u = Um(Uu), c = R.T, s = J.p;
    try {
      J.p = 32 > u ? 32 : u, R.T = null, u = Ah, Ah = null;
      var r = yi, m = Uu;
      if (bl = 0, cc = yi = null, Uu = 0, (mt & 6) !== 0) throw Error(v(331));
      var b = mt;
      if (mt |= 4, lp(r.current), bf(
        r,
        r.current,
        m,
        u
      ), mt = b, Si(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(uu, r);
        } catch {
        }
      return !0;
    } finally {
      J.p = s, R.T = c, Yy(l, a);
    }
  }
  function Gy(l, a, u) {
    a = Xn(u, a), a = B0(l.stateNode, a, 2), l = Kn(l, a, 2), l !== null && (xo(l, 2), Nu(l));
  }
  function Dt(l, a, u) {
    if (l.tag === 3)
      Gy(l, l, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Gy(
            a,
            l,
            u
          );
          break;
        } else if (a.tag === 1) {
          var c = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Zt === null || !Zt.has(c))) {
            l = Xn(u, l), u = q0(2), c = Kn(a, u, 2), c !== null && (j0(
              u,
              c,
              a,
              l
            ), xo(c, 2), Nu(c));
            break;
          }
        }
        a = a.return;
      }
  }
  function vr(l, a, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new np();
      var s = /* @__PURE__ */ new Set();
      c.set(a, s);
    } else
      s = c.get(a), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(a, s));
    s.has(u) || (Eh = !0, s.add(u), l = ip.bind(null, l, a, u), a.then(l, l));
  }
  function ip(l, a, u) {
    var c = l.pingCache;
    c !== null && c.delete(a), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ct === l && (et & u) === u && (jt === 4 || jt === 3 && (et & 62914560) === et && 300 > Rt() - ka ? (mt & 2) === 0 && wu(l, 0) : Th |= u, Ft === et && (Ft = 0)), Nu(l);
  }
  function Vy(l, a) {
    a === 0 && (a = Ec()), l = ai(l, a), l !== null && (xo(l, a), Nu(l));
  }
  function Pn(l) {
    var a = l.memoizedState, u = 0;
    a !== null && (u = a.retryLane), Vy(l, u);
  }
  function Xy(l, a) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    c !== null && c.delete(a), Vy(l, u);
  }
  function Qy(l, a) {
    return Ot(l, a);
  }
  var Rf = null, uo = null, cp = !1, Mh = !1, op = !1, bi = 0;
  function Nu(l) {
    l !== uo && l.next === null && (uo === null ? Rf = uo = l : uo = uo.next = l), Mh = !0, cp || (cp = !0, Sr());
  }
  function Si(l, a) {
    if (!op && Mh) {
      op = !0;
      do
        for (var u = !1, c = Rf; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, b = c.pingedLanes;
              r = (1 << 31 - un(42 | l) + 1) - 1, r &= s & ~(m & ~b), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, io(c, r));
          } else
            r = et, r = ul(
              c,
              c === Ct ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Ma(c, r) || (u = !0, io(c, r));
          c = c.next;
        }
      while (u);
      op = !1;
    }
  }
  function _h() {
    fp();
  }
  function fp() {
    Mh = cp = !1;
    var l = 0;
    bi !== 0 && O1() && (l = bi);
    for (var a = Rt(), u = null, c = Rf; c !== null; ) {
      var s = c.next, r = sp(c, a);
      r === 0 ? (c.next = null, u === null ? Rf = s : u.next = s, s === null && (uo = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Mh = !0)), c = s;
    }
    bl !== 0 && bl !== 5 || Si(l), bi !== 0 && (bi = 0);
  }
  function sp(l, a) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - un(r), b = 1 << m, O = s[m];
      O === -1 ? ((b & u) === 0 || (b & c) !== 0) && (s[m] = Ho(b, a)) : O <= a && (l.expiredLanes |= b), r &= ~b;
    }
    if (a = Ct, u = et, u = ul(
      l,
      l === a ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === a && (At === 2 || At === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && me(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ma(l, u)) {
      if (a = u & -u, a === l.callbackPriority) return a;
      switch (c !== null && me(c), Um(u)) {
        case 2:
        case 8:
          u = Fu;
          break;
        case 32:
          u = qn;
          break;
        case 268435456:
          u = Dn;
          break;
        default:
          u = qn;
      }
      return c = br.bind(null, l), u = Ot(u, c), l.callbackPriority = a, l.callbackNode = u, a;
    }
    return c !== null && c !== null && me(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function br(l, a) {
    if (bl !== 0 && bl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Of() && l.callbackNode !== u)
      return null;
    var c = et;
    return c = ul(
      l,
      l === Ct ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Oy(l, c, a), sp(l, Rt()), l.callbackNode != null && l.callbackNode === u ? br.bind(null, l) : null);
  }
  function io(l, a) {
    if (Of()) return null;
    Oy(l, a, !0);
  }
  function Sr() {
    Iy(function() {
      (mt & 6) !== 0 ? Ot(
        au,
        _h
      ) : fp();
    });
  }
  function Ch() {
    if (bi === 0) {
      var l = Qi;
      l === 0 && (l = Pu, Pu <<= 1, (Pu & 261888) === 0 && (Pu = 256)), bi = l;
    }
    return bi;
  }
  function Zy(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : sa("" + l);
  }
  function co(l, a) {
    var u = a.ownerDocument.createElement("input");
    return u.name = a.name, u.value = a.value, l.id && u.setAttribute("form", l.id), a.parentNode.insertBefore(u, a), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Er(l, a, u, c, s) {
    if (a === "submit" && u && u.stateNode === s) {
      var r = Zy(
        (s[cn] || null).action
      ), m = c.submitter;
      m && (a = (a = m[cn] || null) ? Zy(a.formAction) : m.getAttribute("formAction"), a !== null && (r = a, m = null));
      var b = new Os(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (bi !== 0) {
                  var O = m ? co(s, m) : new FormData(s);
                  rf(
                    u,
                    {
                      pending: !0,
                      data: O,
                      method: s.method,
                      action: r
                    },
                    null,
                    O
                  );
                }
              } else
                typeof r == "function" && (b.preventDefault(), O = m ? co(s, m) : new FormData(s), rf(
                  u,
                  {
                    pending: !0,
                    data: O,
                    method: s.method,
                    action: r
                  },
                  r,
                  O
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Uh = 0; Uh < $o.length; Uh++) {
    var Mf = $o[Uh], rp = Mf.toLowerCase(), dp = Mf[0].toUpperCase() + Mf.slice(1);
    fn(
      rp,
      "on" + dp
    );
  }
  fn(Us, "onAnimationEnd"), fn(a0, "onAnimationIteration"), fn(Ud, "onAnimationStart"), fn("dblclick", "onDoubleClick"), fn("focusin", "onFocus"), fn("focusout", "onBlur"), fn(Bc, "onTransitionRun"), fn(ws, "onTransitionStart"), fn(hu, "onTransitionCancel"), fn(ly, "onTransitionEnd"), ou("onMouseEnter", ["mouseout", "mouseover"]), ou("onMouseLeave", ["mouseout", "mouseover"]), ou("onPointerEnter", ["pointerout", "pointerover"]), ou("onPointerLeave", ["pointerout", "pointerover"]), xi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), xi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), xi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), xi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), xi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _f = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Jy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_f)
  );
  function Ky(l, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (a)
          for (var m = c.length - 1; 0 <= m; m--) {
            var b = c[m], O = b.instance, B = b.currentTarget;
            if (b = b.listener, O !== r && s.isPropagationStopped())
              break e;
            r = b, s.currentTarget = B;
            try {
              r(s);
            } catch (k) {
              qc(k);
            }
            s.currentTarget = null, r = O;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (b = c[m], O = b.instance, B = b.currentTarget, b = b.listener, O !== r && s.isPropagationStopped())
              break e;
            r = b, s.currentTarget = B;
            try {
              r(s);
            } catch (k) {
              qc(k);
            }
            s.currentTarget = null, r = O;
          }
      }
    }
  }
  function nt(l, a) {
    var u = a[sd];
    u === void 0 && (u = a[sd] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Tr(a, l, 2, !1), u.add(c));
  }
  function hp(l, a, u) {
    var c = 0;
    a && (c |= 4), Tr(
      u,
      l,
      c,
      a
    );
  }
  var wh = "_reactListening" + Math.random().toString(36).slice(2);
  function Cf(l) {
    if (!l[wh]) {
      l[wh] = !0, Dc.forEach(function(u) {
        u !== "selectionchange" && (Jy.has(u) || hp(u, !1, l), hp(u, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[wh] || (a[wh] = !0, hp("selectionchange", !1, a));
    }
  }
  function Tr(l, a, u, c) {
    switch (Ur(a)) {
      case 2:
        var s = xu;
        break;
      case 8:
        s = Bu;
        break;
      default:
        s = Ql;
    }
    u = s.bind(
      null,
      a,
      u,
      l
    ), s = void 0, !As || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(a, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(a, u, !0) : s !== void 0 ? l.addEventListener(a, u, {
      passive: s
    }) : l.addEventListener(a, u, !1);
  }
  function mp(l, a, u, c, s) {
    var r = c;
    if ((a & 1) === 0 && (a & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var b = c.stateNode.containerInfo;
          if (b === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; b !== null; ) {
            if (m = Tc(b), m === null) return;
            if (O = m.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              c = r = m;
              continue e;
            }
            b = b.parentNode;
          }
        }
        c = c.return;
      }
    Lm(function() {
      var B = r, k = vd(u), F = [];
      e: {
        var Y = mu.get(l);
        if (Y !== void 0) {
          var Z = Os, ye = l;
          switch (l) {
            case "keypress":
              if (Sd(u) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Ad;
              break;
            case "focusin":
              ye = "focus", Z = Td;
              break;
            case "focusout":
              ye = "blur", Z = Td;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Td;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Qo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Qg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = $g;
              break;
            case Us:
            case a0:
            case Ud:
              Z = Jg;
              break;
            case ly:
              Z = S1;
              break;
            case "scroll":
            case "scrollend":
              Z = v1;
              break;
            case "wheel":
              Z = E1;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = _c;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Na;
              break;
            case "toggle":
            case "beforetoggle":
              Z = $m;
          }
          var Ue = (a & 4) !== 0, wt = !Ue && (l === "scroll" || l === "scrollend"), N = Ue ? Y !== null ? Y + "Capture" : null : Y;
          Ue = [];
          for (var C = B, x; C !== null; ) {
            var W = C;
            if (x = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || x === null || N === null || (W = Dl(C, N), W != null && Ue.push(
              zr(C, W, x)
            )), wt) break;
            C = C.return;
          }
          0 < Ue.length && (Y = new Z(
            Y,
            ye,
            null,
            u,
            k
          ), F.push({ event: Y, listeners: Ue }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (Y = l === "mouseover" || l === "pointerover", Z = l === "mouseout" || l === "pointerout", Y && u !== yd && (ye = u.relatedTarget || u.fromElement) && (Tc(ye) || ye[Ni]))
            break e;
          if ((Z || Y) && (Y = k.window === k ? k : (Y = k.ownerDocument) ? Y.defaultView || Y.parentWindow : window, Z ? (ye = u.relatedTarget || u.toElement, Z = B, ye = ye ? Tc(ye) : null, ye !== null && (wt = H(ye), Ue = ye.tag, ye !== wt || Ue !== 5 && Ue !== 27 && Ue !== 6) && (ye = null)) : (Z = null, ye = B), Z !== ye)) {
            if (Ue = Qo, W = "onMouseLeave", N = "onMouseEnter", C = "mouse", (l === "pointerout" || l === "pointerover") && (Ue = Na, W = "onPointerLeave", N = "onPointerEnter", C = "pointer"), wt = Z == null ? Y : Bo(Z), x = ye == null ? Y : Bo(ye), Y = new Ue(
              W,
              C + "leave",
              Z,
              u,
              k
            ), Y.target = wt, Y.relatedTarget = x, W = null, Tc(k) === B && (Ue = new Ue(
              N,
              C + "enter",
              ye,
              u,
              k
            ), Ue.target = x, Ue.relatedTarget = wt, W = Ue), wt = W, Z && ye)
              t: {
                for (Ue = ky, N = Z, C = ye, x = 0, W = N; W; W = Ue(W))
                  x++;
                W = 0;
                for (var De = C; De; De = Ue(De))
                  W++;
                for (; 0 < x - W; )
                  N = Ue(N), x--;
                for (; 0 < W - x; )
                  C = Ue(C), W--;
                for (; x--; ) {
                  if (N === C || C !== null && N === C.alternate) {
                    Ue = N;
                    break t;
                  }
                  N = Ue(N), C = Ue(C);
                }
                Ue = null;
              }
            else Ue = null;
            Z !== null && Nh(
              F,
              Y,
              Z,
              Ue,
              !1
            ), ye !== null && wt !== null && Nh(
              F,
              wt,
              ye,
              Ue,
              !0
            );
          }
        }
        e: {
          if (Y = B ? Bo(B) : window, Z = Y.nodeName && Y.nodeName.toLowerCase(), Z === "select" || Z === "input" && Y.type === "file")
            var st = e0;
          else if (du(Y))
            if (Rd)
              st = Hc;
            else {
              st = ey;
              var be = Pg;
            }
          else
            Z = Y.nodeName, !Z || Z.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? B && Ym(B.elementType) && (st = e0) : st = Yi;
          if (st && (st = st(l, B))) {
            Pm(
              F,
              st,
              u,
              k
            );
            break e;
          }
          be && be(l, Y, B), l === "focusout" && B && Y.type === "number" && B.memoizedProps.value != null && Oc(Y, "number", Y.value);
        }
        switch (be = B ? Bo(B) : window, l) {
          case "focusin":
            (du(be) || be.contentEditable === "true") && (Gi = be, Ko = B, ha = null);
            break;
          case "focusout":
            ha = Ko = Gi = null;
            break;
          case "mousedown":
            xa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xa = !1, Cd(F, u, k);
            break;
          case "selectionchange":
            if (Cs) break;
          case "keydown":
          case "keyup":
            Cd(F, u, k);
        }
        var Xe;
        if (Zo)
          e: {
            switch (l) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          Uc ? Od(l, u) && (Ke = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Wm && u.locale !== "ko" && (Uc || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Uc && (Xe = Vm()) : (li = k, Gm = "value" in li ? li.value : li.textContent, Uc = !0)), be = Ar(B, Ke), 0 < be.length && (Ke = new Kg(
          Ke,
          l,
          null,
          u,
          k
        ), F.push({ event: Ke, listeners: be }), Xe ? Ke.data = Xe : (Xe = Fm(u), Xe !== null && (Ke.data = Xe)))), (Xe = Wl ? Ig(l, u) : T1(l, u)) && (Ke = Ar(B, "onBeforeInput"), 0 < Ke.length && (be = new Kg(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          k
        ), F.push({
          event: be,
          listeners: Ke
        }), be.data = Xe)), Er(
          F,
          l,
          B,
          u,
          k
        );
      }
      Ky(F, a);
    });
  }
  function zr(l, a, u) {
    return {
      instance: l,
      listener: a,
      currentTarget: u
    };
  }
  function Ar(l, a) {
    for (var u = a + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Dl(l, u), s != null && c.unshift(
        zr(l, s, r)
      ), s = Dl(l, a), s != null && c.push(
        zr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function ky(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Nh(l, a, u, c, s) {
    for (var r = a._reactName, m = []; u !== null && u !== c; ) {
      var b = u, O = b.alternate, B = b.stateNode;
      if (b = b.tag, O !== null && O === c) break;
      b !== 5 && b !== 26 && b !== 27 || B === null || (O = B, s ? (B = Dl(u, r), B != null && m.unshift(
        zr(u, B, O)
      )) : s || (B = Dl(u, r), B != null && m.push(
        zr(u, B, O)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: a, listeners: m });
  }
  var $y = /\r\n?/g, pp = /\u0000|\uFFFD/g;
  function gp(l) {
    return (typeof l == "string" ? l : "" + l).replace($y, `
`).replace(pp, "");
  }
  function yp(l, a) {
    return a = gp(a), gp(l) === a;
  }
  function Ut(l, a, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? a === "body" || a === "textarea" && c === "" || fu(l, c) : (typeof c == "number" || typeof c == "bigint") && a !== "body" && fu(l, "" + c);
        break;
      case "className":
        md(l, "class", c);
        break;
      case "tabIndex":
        md(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        md(l, u, c);
        break;
      case "style":
        Gg(l, c, r);
        break;
      case "data":
        if (a !== "object") {
          md(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (a !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = sa("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (a !== "input" && Ut(l, a, "name", s.name, s, null), Ut(
            l,
            a,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            a,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            a,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, a, "encType", s.encType, s, null), Ut(l, a, "method", s.method, s, null), Ut(l, a, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = sa("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Ca);
        break;
      case "onScroll":
        c != null && nt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && nt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
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
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = sa("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
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
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
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
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        nt("beforetoggle", l), nt("toggle", l), Yo(l, "popover", c);
        break;
      case "xlinkActuate":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        ei(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        ei(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        ei(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        ei(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Yo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = y1.get(u) || u, Yo(l, u, c));
    }
  }
  function vp(l, a, u, c, s, r) {
    switch (u) {
      case "style":
        Gg(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? fu(l, c) : (typeof c == "number" || typeof c == "bigint") && fu(l, "" + c);
        break;
      case "onScroll":
        c != null && nt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && nt("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Ca);
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
        if (!Hi.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), a = u.slice(2, s ? u.length - 7 : void 0), r = l[cn] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(a, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(a, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Yo(l, u, c);
          }
    }
  }
  function Xl(l, a, u) {
    switch (a) {
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
        nt("error", l), nt("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, a));
                default:
                  Ut(l, a, r, m, u, null);
              }
          }
        s && Ut(l, a, "srcSet", u.srcSet, u, null), c && Ut(l, a, "src", u.src, u, null);
        return;
      case "input":
        nt("invalid", l);
        var b = r = m = s = null, O = null, B = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var k = u[c];
            if (k != null)
              switch (c) {
                case "name":
                  s = k;
                  break;
                case "type":
                  m = k;
                  break;
                case "checked":
                  O = k;
                  break;
                case "defaultChecked":
                  B = k;
                  break;
                case "value":
                  r = k;
                  break;
                case "defaultValue":
                  b = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(v(137, a));
                  break;
                default:
                  Ut(l, a, c, k, u, null);
              }
          }
        Es(
          l,
          r,
          b,
          O,
          B,
          m,
          s,
          !1
        );
        return;
      case "select":
        nt("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (b = u[s], b != null))
            switch (s) {
              case "value":
                r = b;
                break;
              case "defaultValue":
                m = b;
                break;
              case "multiple":
                c = b;
              default:
                Ut(l, a, s, b, u, null);
            }
        a = r, u = m, l.multiple = !!c, a != null ? Lo(l, !!c, a, !1) : u != null && Lo(l, !!c, u, !0);
        return;
      case "textarea":
        nt("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (b = u[m], b != null))
            switch (m) {
              case "value":
                c = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
                r = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(v(91));
                break;
              default:
                Ut(l, a, m, b, u, null);
            }
        jm(l, c, s, r);
        return;
      case "option":
        for (O in u)
          if (u.hasOwnProperty(O) && (c = u[O], c != null))
            switch (O) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ut(l, a, O, c, u, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", l), nt("toggle", l), nt("cancel", l), nt("close", l);
        break;
      case "iframe":
      case "object":
        nt("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < _f.length; c++)
          nt(_f[c], l);
        break;
      case "image":
        nt("error", l), nt("load", l);
        break;
      case "details":
        nt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", l), nt("load", l);
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
        for (B in u)
          if (u.hasOwnProperty(B) && (c = u[B], c != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, a));
              default:
                Ut(l, a, B, c, u, null);
            }
        return;
      default:
        if (Ym(a)) {
          for (k in u)
            u.hasOwnProperty(k) && (c = u[k], c !== void 0 && vp(
              l,
              a,
              k,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (b in u)
      u.hasOwnProperty(b) && (c = u[b], c != null && Ut(l, a, b, c, u, null));
  }
  function bp(l, a, u, c) {
    switch (a) {
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
        var s = null, r = null, m = null, b = null, O = null, B = null, k = null;
        for (Z in u) {
          var F = u[Z];
          if (u.hasOwnProperty(Z) && F != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = F;
              default:
                c.hasOwnProperty(Z) || Ut(l, a, Z, null, c, F);
            }
        }
        for (var Y in c) {
          var Z = c[Y];
          if (F = u[Y], c.hasOwnProperty(Y) && (Z != null || F != null))
            switch (Y) {
              case "type":
                r = Z;
                break;
              case "name":
                s = Z;
                break;
              case "checked":
                B = Z;
                break;
              case "defaultChecked":
                k = Z;
                break;
              case "value":
                m = Z;
                break;
              case "defaultValue":
                b = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(v(137, a));
                break;
              default:
                Z !== F && Ut(
                  l,
                  a,
                  Y,
                  Z,
                  c,
                  F
                );
            }
        }
        Ss(
          l,
          m,
          b,
          O,
          B,
          k,
          r,
          s
        );
        return;
      case "select":
        Z = m = b = Y = null;
        for (r in u)
          if (O = u[r], u.hasOwnProperty(r) && O != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                Z = O;
              default:
                c.hasOwnProperty(r) || Ut(
                  l,
                  a,
                  r,
                  null,
                  c,
                  O
                );
            }
        for (s in c)
          if (r = c[s], O = u[s], c.hasOwnProperty(s) && (r != null || O != null))
            switch (s) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                b = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== O && Ut(
                  l,
                  a,
                  s,
                  r,
                  c,
                  O
                );
            }
        a = b, u = m, c = Z, Y != null ? Lo(l, !!u, Y, !1) : !!c != !!u && (a != null ? Lo(l, !!u, a, !0) : Lo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Z = Y = null;
        for (b in u)
          if (s = u[b], u.hasOwnProperty(b) && s != null && !c.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, a, b, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                Z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(v(91));
                break;
              default:
                s !== r && Ut(l, a, m, s, c, r);
            }
        qm(l, Y, Z);
        return;
      case "option":
        for (var ye in u)
          if (Y = u[ye], u.hasOwnProperty(ye) && Y != null && !c.hasOwnProperty(ye))
            switch (ye) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ut(
                  l,
                  a,
                  ye,
                  null,
                  c,
                  Y
                );
            }
        for (O in c)
          if (Y = c[O], Z = u[O], c.hasOwnProperty(O) && Y !== Z && (Y != null || Z != null))
            switch (O) {
              case "selected":
                l.selected = Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                Ut(
                  l,
                  a,
                  O,
                  Y,
                  c,
                  Z
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
        for (var Ue in u)
          Y = u[Ue], u.hasOwnProperty(Ue) && Y != null && !c.hasOwnProperty(Ue) && Ut(l, a, Ue, null, c, Y);
        for (B in c)
          if (Y = c[B], Z = u[B], c.hasOwnProperty(B) && Y !== Z && (Y != null || Z != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(v(137, a));
                break;
              default:
                Ut(
                  l,
                  a,
                  B,
                  Y,
                  c,
                  Z
                );
            }
        return;
      default:
        if (Ym(a)) {
          for (var wt in u)
            Y = u[wt], u.hasOwnProperty(wt) && Y !== void 0 && !c.hasOwnProperty(wt) && vp(
              l,
              a,
              wt,
              void 0,
              c,
              Y
            );
          for (k in c)
            Y = c[k], Z = u[k], !c.hasOwnProperty(k) || Y === Z || Y === void 0 && Z === void 0 || vp(
              l,
              a,
              k,
              Y,
              c,
              Z
            );
          return;
        }
    }
    for (var N in u)
      Y = u[N], u.hasOwnProperty(N) && Y != null && !c.hasOwnProperty(N) && Ut(l, a, N, null, c, Y);
    for (F in c)
      Y = c[F], Z = u[F], !c.hasOwnProperty(F) || Y === Z || Y == null && Z == null || Ut(l, a, F, Y, c, Z);
  }
  function Hh(l) {
    switch (l) {
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
  function Sp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, a = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, b = s.duration;
        if (r && b && Hh(m)) {
          for (m = 0, b = s.responseEnd, c += 1; c < u.length; c++) {
            var O = u[c], B = O.startTime;
            if (B > b) break;
            var k = O.transferSize, F = O.initiatorType;
            k && Hh(F) && (O = O.responseEnd, m += k * (O < b ? 1 : (b - B) / (O - B)));
          }
          if (--c, a += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return a / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var xh = null, Bh = null;
  function fc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Wy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ep(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Uf(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var qh = null;
  function O1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === qh ? !1 : (qh = l, !0) : (qh = null, !1);
  }
  var Dr = typeof setTimeout == "function" ? setTimeout : void 0, Fy = typeof clearTimeout == "function" ? clearTimeout : void 0, oo = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof oo < "u" ? function(l) {
    return oo.resolve(null).then(l).catch(Tp);
  } : Dr;
  function Tp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function $a(l) {
    return l === "head";
  }
  function zp(l, a) {
    var u = a, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Xf(a);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          fo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, fo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, b = r.nodeName;
            r[cu] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && fo(l.ownerDocument.body);
      u = s;
    } while (u);
    Xf(a);
  }
  function sl(l, a) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? a ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (a ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Or(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var u = a;
      switch (a = a.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Or(u), rd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function R1(l, a, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[cu])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = En(l.nextSibling), l === null) break;
    }
    return null;
  }
  function We(l, a, u) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = En(l.nextSibling), l === null)) return null;
    return l;
  }
  function Py(l, a) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = En(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ea(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function sc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function wf(l, a) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = a;
    else if (l.data !== "$?" || u.readyState !== "loading")
      a();
    else {
      var c = function() {
        a(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function En(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F")
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return l;
  }
  var Rr = null;
  function jh(l) {
    l = l.nextSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (a === 0)
            return En(l.nextSibling);
          a--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || a++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Wa(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (a === 0) return l;
          a--;
        } else u !== "/$" && u !== "/&" || a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nf(l, a, u) {
    switch (a = fc(u), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(v(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(v(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function fo(l) {
    for (var a = l.attributes; a.length; )
      l.removeAttributeNode(a[0]);
    rd(l);
  }
  var wn = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Set();
  function Pl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Fa = J.d;
  J.d = {
    f: M1,
    r: ev,
    D: Q,
    C: bt,
    L: _1,
    m: Ap,
    X: Ei,
    S: Dp,
    M: rc
  };
  function M1() {
    var l = Fa.f(), a = Af();
    return l || a;
  }
  function ev(l) {
    var a = zc(l);
    a !== null && a.tag === 5 && a.type === "form" ? _t(a) : Fa.r(l);
  }
  var Hf = typeof document > "u" ? null : document;
  function pl(l, a, u) {
    var c = Hf;
    if (c && typeof a == "string" && a) {
      var s = Ln(a);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Mr.has(s) || (Mr.add(s), l = { rel: l, crossOrigin: u, href: a }, c.querySelector(s) === null && (a = c.createElement("link"), Xl(a, "link", l), Et(a), c.head.appendChild(a)));
    }
  }
  function Q(l) {
    Fa.D(l), pl("dns-prefetch", l, null);
  }
  function bt(l, a) {
    Fa.C(l, a), pl("preconnect", l, a);
  }
  function _1(l, a, u) {
    Fa.L(l, a, u);
    var c = Hf;
    if (c && l && a) {
      var s = 'link[rel="preload"][as="' + Ln(a) + '"]';
      a === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ln(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ln(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ln(l) + '"]';
      var r = s;
      switch (a) {
        case "style":
          r = ea(l);
          break;
        case "script":
          r = so(l);
      }
      wn.has(r) || (l = G(
        {
          rel: "preload",
          href: a === "image" && u && u.imageSrcSet ? void 0 : l,
          as: a
        },
        u
      ), wn.set(r, l), c.querySelector(s) !== null || a === "style" && c.querySelector(dc(r)) || a === "script" && c.querySelector(qf(r)) || (a = c.createElement("link"), Xl(a, "link", l), Et(a), c.head.appendChild(a)));
    }
  }
  function Ap(l, a) {
    Fa.m(l, a);
    var u = Hf;
    if (u && l) {
      var c = a && typeof a.as == "string" ? a.as : "script", s = 'link[rel="modulepreload"][as="' + Ln(c) + '"][href="' + Ln(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = so(l);
      }
      if (!wn.has(r) && (l = G({ rel: "modulepreload", href: l }, a), wn.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(qf(r)))
              return;
        }
        c = u.createElement("link"), Xl(c, "link", l), Et(c), u.head.appendChild(c);
      }
    }
  }
  function Dp(l, a, u) {
    Fa.S(l, a, u);
    var c = Hf;
    if (c && l) {
      var s = Ac(c).hoistableStyles, r = ea(l);
      a = a || "default";
      var m = s.get(r);
      if (!m) {
        var b = { loading: 0, preload: null };
        if (m = c.querySelector(
          dc(r)
        ))
          b.loading = 5;
        else {
          l = G(
            { rel: "stylesheet", href: l, "data-precedence": a },
            u
          ), (u = wn.get(r)) && Yh(l, u);
          var O = m = c.createElement("link");
          Et(O), Xl(O, "link", l), O._p = new Promise(function(B, k) {
            O.onload = B, O.onerror = k;
          }), O.addEventListener("load", function() {
            b.loading |= 1;
          }), O.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, _r(m, a, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: b
        }, s.set(r, m);
      }
    }
  }
  function Ei(l, a) {
    Fa.X(l, a);
    var u = Hf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = so(l), r = c.get(s);
      r || (r = u.querySelector(qf(s)), r || (l = G({ src: l, async: !0 }, a), (a = wn.get(s)) && Lh(l, a), r = u.createElement("script"), Et(r), Xl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function rc(l, a) {
    Fa.M(l, a);
    var u = Hf;
    if (u && l) {
      var c = Ac(u).hoistableScripts, s = so(l), r = c.get(s);
      r || (r = u.querySelector(qf(s)), r || (l = G({ src: l, async: !0, type: "module" }, a), (a = wn.get(s)) && Lh(l, a), r = u.createElement("script"), Et(r), Xl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function xf(l, a, u, c) {
    var s = (s = Gl.current) ? Pl(s) : null;
    if (!s) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (a = ea(u.href), u = Ac(
          s
        ).hoistableStyles, c = u.get(a), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ea(u.href);
          var r = Ac(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            dc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), wn.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, wn.set(l, u), r || tv(
            s,
            l,
            u,
            m.state
          ))), a && c === null)
            throw Error(v(528, ""));
          return m;
        }
        if (a && c !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return a = u.async, u = u.src, typeof u == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = so(u), u = Ac(
          s
        ).hoistableScripts, c = u.get(a), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function ea(l) {
    return 'href="' + Ln(l) + '"';
  }
  function dc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bf(l) {
    return G({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function tv(l, a, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? c.loading = 1 : (a = l.createElement("link"), c.preload = a, a.addEventListener("load", function() {
      return c.loading |= 1;
    }), a.addEventListener("error", function() {
      return c.loading |= 2;
    }), Xl(a, "link", u), Et(a), l.head.appendChild(a));
  }
  function so(l) {
    return '[src="' + Ln(l) + '"]';
  }
  function qf(l) {
    return "script[async]" + l;
  }
  function Op(l, a, u) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ln(u.href) + '"]'
          );
          if (c)
            return a.instance = c, Et(c), c;
          var s = G({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Et(c), Xl(c, "style", s), _r(c, u.precedence, l), a.instance = c;
        case "stylesheet":
          s = ea(u.href);
          var r = l.querySelector(
            dc(s)
          );
          if (r)
            return a.state.loading |= 4, a.instance = r, Et(r), r;
          c = Bf(u), (s = wn.get(s)) && Yh(c, s), r = (l.ownerDocument || l).createElement("link"), Et(r);
          var m = r;
          return m._p = new Promise(function(b, O) {
            m.onload = b, m.onerror = O;
          }), Xl(r, "link", c), a.state.loading |= 4, _r(r, u.precedence, l), a.instance = r;
        case "script":
          return r = so(u.src), (s = l.querySelector(
            qf(r)
          )) ? (a.instance = s, Et(s), s) : (c = u, (s = wn.get(r)) && (c = G({}, u), Lh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Et(s), Xl(s, "link", c), l.head.appendChild(s), a.instance = s);
        case "void":
          return null;
        default:
          throw Error(v(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (c = a.instance, a.state.loading |= 4, _r(c, u.precedence, l));
    return a.instance;
  }
  function _r(l, a, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var b = c[m];
      if (b.dataset.precedence === a) r = b;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (a = u.nodeType === 9 ? u.head : u, a.insertBefore(l, a.firstChild));
  }
  function Yh(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function Lh(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var jf = null;
  function Rp(l, a, u) {
    if (jf === null) {
      var c = /* @__PURE__ */ new Map(), s = jf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = jf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[cu] || r[Mt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(a) || "";
        m = l + m;
        var b = c.get(m);
        b ? b.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Gh(l, a, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function Mp(l, a, u) {
    if (u === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function Nn(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Hu(l, a, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = ea(c.href), r = a.querySelector(
          dc(s)
        );
        if (r) {
          a = r._p, a !== null && typeof a == "object" && typeof a.then == "function" && (l.count++, l = Vh.bind(l), a.then(l, l)), u.state.loading |= 4, u.instance = r, Et(r);
          return;
        }
        r = a.ownerDocument || a, c = Bf(c), (s = wn.get(s)) && Yh(c, s), r = r.createElement("link"), Et(r);
        var m = r;
        m._p = new Promise(function(b, O) {
          m.onload = b, m.onerror = O;
        }), Xl(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, a), (a = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Vh.bind(l), a.addEventListener("load", u), a.addEventListener("error", u));
    }
  }
  var ta = 0;
  function _p(l, a) {
    return l.stylesheets && l.count === 0 && Qh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Qh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + a);
      0 < l.imgBytes && ta === 0 && (ta = 62500 * Sp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Qh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > ta ? 50 : 800) + a
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Vh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Xh = null;
  function Qh(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Xh = /* @__PURE__ */ new Map(), a.forEach(wl, l), Xh = null, Vh.call(l));
  }
  function wl(l, a) {
    if (!(a.state.loading & 4)) {
      var u = Xh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Xh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = a.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Vh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), a.state.loading |= 4;
    }
  }
  var Cr = {
    $$typeof: xe,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function Cp(l, a, u, c, s, r, m, b, O) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ys(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ys(0), this.hiddenUpdates = ys(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zh(l, a, u, c, s, r, m, b, O, B, k, F) {
    return l = new Cp(
      l,
      a,
      u,
      m,
      O,
      B,
      k,
      F,
      b
    ), a = 1, r === !0 && (a |= 24), r = el(3, null, null, a), l.current = r, r.stateNode = l, a = js(), a.refCount++, l.pooledCache = a, a.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: a
    }, Zs(r), l;
  }
  function ro(l) {
    return l ? (l = sn, l) : sn;
  }
  function lv(l, a, u, c, s, r) {
    s = ro(s), c.context === null ? c.context = s : c.pendingContext = s, c = ri(a), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Kn(l, c, a), u !== null && (Sn(u, l, a), Wi(u, l, a));
  }
  function Jh(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function Up(l, a) {
    Jh(l, a), (l = l.alternate) && Jh(l, a);
  }
  function nv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = ai(l, 67108864);
      a !== null && Sn(a, l, 67108864), Up(l, 67108864);
    }
  }
  function ho(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = Un();
      a = od(a);
      var u = ai(l, a);
      u !== null && Sn(u, l, a), Up(l, a);
    }
  }
  var Sl = !0;
  function xu(l, a, u, c) {
    var s = R.T;
    R.T = null;
    var r = J.p;
    try {
      J.p = 2, Ql(l, a, u, c);
    } finally {
      J.p = r, R.T = s;
    }
  }
  function Bu(l, a, u, c) {
    var s = R.T;
    R.T = null;
    var r = J.p;
    try {
      J.p = 8, Ql(l, a, u, c);
    } finally {
      J.p = r, R.T = s;
    }
  }
  function Ql(l, a, u, c) {
    if (Sl) {
      var s = wp(c);
      if (s === null)
        mp(
          l,
          a,
          c,
          Kh,
          u
        ), Ti(l, c);
      else if (C1(
        s,
        l,
        a,
        u,
        c
      ))
        c.stopPropagation();
      else if (Ti(l, c), a & 4 && -1 < Tn.indexOf(l)) {
        for (; s !== null; ) {
          var r = zc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = fa(r.pendingLanes);
                  if (m !== 0) {
                    var b = r;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; m; ) {
                      var O = 1 << 31 - un(m);
                      b.entanglements[1] |= O, m &= ~O;
                    }
                    Nu(r), (mt & 6) === 0 && (vt = Rt() + 500, Si(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = ai(r, 2), b !== null && Sn(b, r, 2), Af(), Up(r, 2);
            }
          if (r = wp(c), r === null && mp(
            l,
            a,
            c,
            Kh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        mp(
          l,
          a,
          c,
          null,
          u
        );
    }
  }
  function wp(l) {
    return l = vd(l), Yf(l);
  }
  var Kh = null;
  function Yf(l) {
    if (Kh = null, l = Tc(l), l !== null) {
      var a = H(l);
      if (a === null) l = null;
      else {
        var u = a.tag;
        if (u === 13) {
          if (l = q(a), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = w(a), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return Kh = l, null;
  }
  function Ur(l) {
    switch (l) {
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
        switch (An()) {
          case au:
            return 2;
          case Fu:
            return 8;
          case qn:
          case gs:
            return 32;
          case Dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lf = !1, El = null, Zl = null, en = null, hc = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), Jt = [], Tn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ti(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        El = null;
        break;
      case "dragenter":
      case "dragleave":
        Zl = null;
        break;
      case "mouseover":
      case "mouseout":
        en = null;
        break;
      case "pointerover":
      case "pointerout":
        hc.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ta.delete(a.pointerId);
    }
  }
  function mo(l, a, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: a,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, a !== null && (a = zc(a), a !== null && nv(a)), l) : (l.eventSystemFlags |= c, a = l.targetContainers, s !== null && a.indexOf(s) === -1 && a.push(s), l);
  }
  function C1(l, a, u, c, s) {
    switch (a) {
      case "focusin":
        return El = mo(
          El,
          l,
          a,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Zl = mo(
          Zl,
          l,
          a,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return en = mo(
          en,
          l,
          a,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return hc.set(
          r,
          mo(
            hc.get(r) || null,
            l,
            a,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Ta.set(
          r,
          mo(
            Ta.get(r) || null,
            l,
            a,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function av(l) {
    var a = Tc(l.target);
    if (a !== null) {
      var u = H(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = q(u), a !== null) {
            l.blockedOn = a, wm(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (a === 31) {
          if (a = w(u), a !== null) {
            l.blockedOn = a, wm(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function wr(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var u = wp(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        yd = c, u.target.dispatchEvent(c), yd = null;
      } else
        return a = zc(u), a !== null && nv(a), l.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Gf(l, a, u) {
    wr(l) && u.delete(a);
  }
  function uv() {
    Lf = !1, El !== null && wr(El) && (El = null), Zl !== null && wr(Zl) && (Zl = null), en !== null && wr(en) && (en = null), hc.forEach(Gf), Ta.forEach(Gf);
  }
  function qu(l, a) {
    l.blockedOn === a && (l.blockedOn = null, Lf || (Lf = !0, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      uv
    )));
  }
  var Vf = null;
  function iv(l) {
    Vf !== l && (Vf = l, p.unstable_scheduleCallback(
      p.unstable_NormalPriority,
      function() {
        Vf === l && (Vf = null);
        for (var a = 0; a < l.length; a += 3) {
          var u = l[a], c = l[a + 1], s = l[a + 2];
          if (typeof c != "function") {
            if (Yf(c || u) === null)
              continue;
            break;
          }
          var r = zc(u);
          r !== null && (l.splice(a, 3), a -= 3, rf(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Xf(l) {
    function a(O) {
      return qu(O, l);
    }
    El !== null && qu(El, l), Zl !== null && qu(Zl, l), en !== null && qu(en, l), hc.forEach(a), Ta.forEach(a);
    for (var u = 0; u < Jt.length; u++) {
      var c = Jt[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Jt.length && (u = Jt[0], u.blockedOn === null); )
      av(u), u.blockedOn === null && Jt.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[cn] || null;
        if (typeof r == "function")
          m || iv(u);
        else if (m) {
          var b = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[cn] || null)
              b = m.formAction;
            else if (Yf(s) !== null) continue;
          } else b = m.action;
          typeof b == "function" ? u[c + 1] = b : (u.splice(c, 3), c -= 3), iv(u);
        }
      }
  }
  function Np() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function a() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", a), navigation.addEventListener("navigateerror", a), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", a), navigation.removeEventListener("navigateerror", a), s !== null && (s(), s = null);
      };
    }
  }
  function kh(l) {
    this._internalRoot = l;
  }
  $h.prototype.render = kh.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(v(409));
    var u = a.current, c = Un();
    lv(u, c, l, a, null, null);
  }, $h.prototype.unmount = kh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      lv(l.current, 2, null, l, null, null), Af(), a[Ni] = null;
    }
  };
  function $h(l) {
    this._internalRoot = l;
  }
  $h.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = fd();
      l = { blockedOn: null, target: l, priority: a };
      for (var u = 0; u < Jt.length && a !== 0 && a < Jt[u].priority; u++) ;
      Jt.splice(u, 0, l), u === 0 && av(l);
    }
  };
  var Hp = S.version;
  if (Hp !== "19.2.0")
    throw Error(
      v(
        527,
        Hp,
        "19.2.0"
      )
    );
  J.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = te(a), l = l !== null ? ue(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var cv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber)
      try {
        uu = Nr.inject(
          cv
        ), Al = Nr;
      } catch {
      }
  }
  return Mg.createRoot = function(l, a) {
    if (!T(l)) throw Error(v(299));
    var u = !1, c = "", s = ih, r = x0, m = ch;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (r = a.onCaughtError), a.onRecoverableError !== void 0 && (m = a.onRecoverableError)), a = Zh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Np
    ), l[Ni] = a.current, Cf(l), new kh(a);
  }, Mg.hydrateRoot = function(l, a, u) {
    if (!T(l)) throw Error(v(299));
    var c = !1, s = "", r = ih, m = x0, b = ch, O = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (b = u.onRecoverableError), u.formState !== void 0 && (O = u.formState)), a = Zh(
      l,
      1,
      !0,
      a,
      u ?? null,
      c,
      s,
      O,
      r,
      m,
      b,
      Np
    ), a.context = ro(null), u = a.current, c = Un(), c = od(c), s = ri(c), s.callback = null, Kn(u, s, c), u = c, a.current.lanes = u, xo(a, u), Nu(a), l[Ni] = a.current, Cf(l), new $h(a);
  }, Mg.version = "19.2.0", Mg;
}
var _g = {};
var RE;
function oA() {
  return RE || (RE = 1, process.env.NODE_ENV !== "production" && (function() {
    function p(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function S(e, t, n, i) {
      if (n >= t.length) return i;
      var o = t[n], f = pl(e) ? e.slice() : We({}, e);
      return f[o] = S(e[o], t, n + 1, i), f;
    }
    function E(e, t, n) {
      if (t.length !== n.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < n.length - 1; i++)
          if (t[i] !== n[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return v(e, t, n, 0);
      }
    }
    function v(e, t, n, i) {
      var o = t[i], f = pl(e) ? e.slice() : We({}, e);
      return i + 1 === t.length ? (f[n[i]] = f[o], pl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = v(
        e[o],
        t,
        n,
        i + 1
      ), f;
    }
    function T(e, t, n) {
      var i = t[n], o = pl(e) ? e.slice() : We({}, e);
      return n + 1 === t.length ? (pl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = T(e[i], t, n + 1), o);
    }
    function H() {
      return !1;
    }
    function q() {
      return null;
    }
    function w() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function P() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function te() {
    }
    function ue() {
    }
    function G(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }
    function X(e, t, n, i) {
      return new T1(e, t, n, i);
    }
    function ae(e, t) {
      e.context === Kf && (Nh(e.current, 2, t, e, null, null), In());
    }
    function ne(e, t) {
      if (Lu !== null) {
        var n = t.staleFamilies;
        t = t.updatedFamilies, sr(), Ig(
          e.current,
          t,
          n
        ), In();
      }
    }
    function ie(e) {
      Lu = e;
    }
    function pe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function se(e) {
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
    function qe(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function xe(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ze(e) {
      if (se(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function lt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = se(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var n = e, i = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            n = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === n) return Ze(o), e;
            if (f === i) return Ze(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (n.return !== i.return) n = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === n) {
              d = !0, n = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, n = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === n) {
                d = !0, n = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, n = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (n.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (n.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return n.stateNode.current === n ? e : t;
    }
    function we(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = we(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ze(e) {
      return e === null || typeof e != "object" ? null : (e = ev && e[ev] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Se(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Hf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case wf:
          return "Fragment";
        case Rr:
          return "Profiler";
        case En:
          return "StrictMode";
        case fo:
          return "Suspense";
        case wn:
          return "SuspenseList";
        case Fa:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case sc:
            return "Portal";
          case Wa:
            return e.displayName || "Context";
          case jh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Nf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Mr:
            return t = e.displayName || null, t !== null ? t : Se(e.type) || "Memo";
          case Pl:
            t = e._payload, e = e._init;
            try {
              return Se(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ce(e) {
      return typeof e.tag == "number" ? de(e) : typeof e.name == "string" ? e.name : null;
    }
    function de(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Se(t);
        case 8:
          return t === En ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var n = t.length - 1; 0 <= n; n--)
              if (typeof t[n].name == "string") return t[n].name;
          }
          if (e.return !== null)
            return de(e.return);
      }
      return null;
    }
    function Ne(e) {
      return { current: e };
    }
    function Ae(e, t) {
      0 > Ei ? console.error("Unexpected pop.") : (t !== Dp[Ei] && console.error("Unexpected Fiber popped."), e.current = Ap[Ei], Ap[Ei] = null, Dp[Ei] = null, Ei--);
    }
    function oe(e, t, n) {
      Ei++, Ap[Ei] = e.current, Dp[Ei] = n, e.current = t;
    }
    function $e(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function _e(e, t) {
      oe(ea, t, e), oe(xf, e, e), oe(rc, null, e);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Ry(t) : Mo;
          break;
        default:
          if (n = t.tagName, t = t.namespaceURI)
            t = Ry(t), t = vi(
              t,
              n
            );
          else
            switch (n) {
              case "svg":
                t = Dm;
                break;
              case "math":
                t = Iv;
                break;
              default:
                t = Mo;
            }
      }
      n = n.toLowerCase(), n = Bm(null, n), n = {
        context: t,
        ancestorInfo: n
      }, Ae(rc, e), oe(rc, n, e);
    }
    function R(e) {
      Ae(rc, e), Ae(xf, e), Ae(ea, e);
    }
    function J() {
      return $e(rc.current);
    }
    function le(e) {
      e.memoizedState !== null && oe(dc, e, e);
      var t = $e(rc.current), n = e.type, i = vi(t.context, n);
      n = Bm(t.ancestorInfo, n), i = { context: i, ancestorInfo: n }, t !== i && (oe(xf, e, e), oe(rc, i, e));
    }
    function ve(e) {
      xf.current === e && (Ae(rc, e), Ae(xf, e)), dc.current === e && (Ae(dc, e), zg._currentValue = ld);
    }
    function Oe() {
    }
    function K() {
      if (Bf === 0) {
        tv = console.log, so = console.info, qf = console.warn, Op = console.error, _r = console.group, Yh = console.groupCollapsed, Lh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Oe,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Bf++;
    }
    function ee() {
      if (Bf--, Bf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: We({}, e, { value: tv }),
          info: We({}, e, { value: so }),
          warn: We({}, e, { value: qf }),
          error: We({}, e, { value: Op }),
          group: We({}, e, { value: _r }),
          groupCollapsed: We({}, e, { value: Yh }),
          groupEnd: We({}, e, { value: Lh })
        });
      }
      0 > Bf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ge(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Ee(e) {
      if (jf === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          jf = t && t[1] || "", Rp = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + jf + e + Rp;
    }
    function xt(e, t) {
      if (!e || Gh) return "";
      var n = Mp.get(e);
      if (n !== void 0) return n;
      Gh = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Q.H, Q.H = null, K();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var A = function() {
                  throw Error();
                };
                if (Object.defineProperty(A.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(A, []);
                  } catch (ce) {
                    var L = ce;
                  }
                  Reflect.construct(e, [], A);
                } else {
                  try {
                    A.call();
                  } catch (ce) {
                    L = ce;
                  }
                  e.call(A.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ce) {
                  L = ce;
                }
                (A = e()) && typeof A.catch == "function" && A.catch(function() {
                });
              }
            } catch (ce) {
              if (ce && L && typeof ce.stack == "string")
                return [ce.stack, L.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], g = d[1];
        if (h && g) {
          var y = h.split(`
`), _ = g.split(`
`);
          for (d = f = 0; f < y.length && !y[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < _.length && !_[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === y.length || d === _.length)
            for (f = y.length - 1, d = _.length - 1; 1 <= f && 0 <= d && y[f] !== _[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (y[f] !== _[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || y[f] !== _[d]) {
                    var U = `
` + y[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && Mp.set(e, U), U;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Gh = !1, Q.H = i, ee(), Error.prepareStackTrace = n;
      }
      return y = (y = e ? e.displayName || e.name : "") ? Ee(y) : "", typeof e == "function" && Mp.set(e, y), y;
    }
    function Gl(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ee(e.type);
        case 16:
          return Ee("Lazy");
        case 13:
          return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
        case 19:
          return Ee("SuspenseList");
        case 0:
        case 15:
          return xt(e.type, !1);
        case 11:
          return xt(e.type.render, !1);
        case 1:
          return xt(e.type, !0);
        case 31:
          return Ee("Activity");
        default:
          return "";
      }
    }
    function dt(e) {
      try {
        var t = "", n = null;
        do {
          t += Gl(e, n);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, g = f.env, y = f.debugLocation;
                  if (y != null) {
                    var _ = ge(y), U = _.lastIndexOf(`
`), A = U === -1 ? _ : _.slice(U + 1);
                    if (A.indexOf(h) !== -1) {
                      var L = `
` + A;
                      break e;
                    }
                  }
                  L = Ee(
                    h + (g ? " [" + g + "]" : "")
                  );
                }
                t = d + L;
              }
            }
          n = e, e = e.return;
        } while (e);
        return t;
      } catch (ce) {
        return `
Error generating stack: ` + ce.message + `
` + ce.stack;
      }
    }
    function kl(e) {
      return (e = e ? e.displayName || e.name : "") ? Ee(e) : "";
    }
    function $l() {
      if (Nn === null) return null;
      var e = Nn._debugOwner;
      return e != null ? Ce(e) : null;
    }
    function Wu() {
      if (Nn === null) return "";
      var e = Nn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Ee(e.type);
            break;
          case 13:
            t += Ee("Suspense");
            break;
          case 19:
            t += Ee("SuspenseList");
            break;
          case 31:
            t += Ee("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += kl(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += kl(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var n = e;
            e = n._debugOwner;
            var i = n._debugStack;
            if (e && i) {
              var o = ge(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + ge(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function he(e, t, n, i, o, f, d) {
      var h = Nn;
      Ci(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, n, i, o, f, d)
        ) : t(n, i, o, f, d);
      } finally {
        Ci(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ci(e) {
      Q.getCurrentStack = e === null ? null : Wu, Hu = !1, Nn = e;
    }
    function bc(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function oa(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function gt(e, t) {
      if (oa(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          bc(e)
        ), Bn(e);
    }
    function ps(e, t) {
      if (oa(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          bc(e)
        ), Bn(e);
    }
    function Sc(e) {
      if (oa(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          bc(e)
        ), Bn(e);
    }
    function wo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ho = t.inject(e), Sl = t;
      } catch (n) {
        console.error("React instrumentation encountered an error: %o.", n);
      }
      return !!t.checkDCE;
    }
    function Ot(e) {
      if (typeof Up == "function" && nv(e), Sl && typeof Sl.setStrictMode == "function")
        try {
          Sl.setStrictMode(ho, e);
        } catch (t) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function me(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (wp(e) / Kh | 0) | 0;
    }
    function ht(e) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function dl(e, t, n) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = ht(i) : (d &= h, d !== 0 ? o = ht(d) : n || (n = h & ~e, n !== 0 && (o = ht(n))))) : (h = i & ~f, h !== 0 ? o = ht(h) : d !== 0 ? o = ht(d) : n || (n = i & ~e, n !== 0 && (o = ht(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : o;
    }
    function Rt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function An(e, t) {
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function au() {
      var e = Lf;
      return Lf <<= 1, (Lf & 62914560) === 0 && (Lf = 4194304), e;
    }
    function Fu(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function qn(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function gs(e, t, n, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var h = e.entanglements, g = e.expirationTimes, y = e.hiddenUpdates;
      for (n = d & ~n; 0 < n; ) {
        var _ = 31 - Ql(n), U = 1 << _;
        h[_] = 0, g[_] = -1;
        var A = y[_];
        if (A !== null)
          for (y[_] = null, _ = 0; _ < A.length; _++) {
            var L = A[_];
            L !== null && (L.lane &= -536870913);
          }
        n &= ~U;
      }
      i !== 0 && Dn(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Dn(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ql(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 261930;
    }
    function No(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var i = 31 - Ql(n), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), n &= ~o;
      }
    }
    function Ui(e, t) {
      var n = t & -t;
      return n = (n & 42) !== 0 ? 1 : uu(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
    }
    function uu(e) {
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
    function Al(e, t, n) {
      if (Bu)
        for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
          var i = 31 - Ql(n), o = 1 << i;
          e[i].add(t), n &= ~o;
        }
    }
    function Iu(e, t) {
      if (Bu)
        for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ql(t);
          e = 1 << o, o = n[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function un(e) {
      return e &= -e, El < e ? Zl < e ? (e & 134217727) !== 0 ? en : hc : Zl : El;
    }
    function Bg() {
      var e = bt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? en : xh(e.type));
    }
    function qg(e, t) {
      var n = bt.p;
      try {
        return bt.p = e, t();
      } finally {
        bt.p = n;
      }
    }
    function Cm(e) {
      delete e[Jt], delete e[Tn], delete e[mo], delete e[C1], delete e[av];
    }
    function Pu(e) {
      var t = e[Jt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Ti] || n[Jt]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = uo(e); e !== null; ) {
              if (n = e[Jt])
                return n;
              e = uo(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Ra(e) {
      if (e = e[Jt] || e[Ti]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function wi(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function fa(e) {
      var t = e[wr];
      return t || (t = e[wr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ul(e) {
      e[Gf] = !0;
    }
    function Ma(e, t) {
      Ho(e, t), Ho(e + "Capture", t);
    }
    function Ho(e, t) {
      qu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), qu[e] = t;
      var n = e.toLowerCase();
      for (Vf[n] = e, e === "onDoubleClick" && (Vf.ondblclick = e), e = 0; e < t.length; e++)
        uv.add(t[e]);
    }
    function Ec(e, t) {
      iv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function ys(e) {
      return ta.call(kh, e) ? !0 : ta.call(Np, e) ? !1 : Xf.test(e) ? kh[e] = !0 : (Np[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function xo(e, t, n) {
      if (ys(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof n) {
            case "symbol":
            case "object":
              return n;
            case "function":
              return n;
            case "boolean":
              if (n === !1) return n;
          }
          return n === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && n === !0 ? !0 : (gt(n, t), e === "" + n ? n : e);
      }
    }
    function cd(e, t, n) {
      if (ys(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          gt(n, t), e.setAttribute(t, "" + n);
        }
    }
    function vs(e, t, n) {
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
        gt(n, t), e.setAttribute(t, "" + n);
      }
    }
    function iu(e, t, n, i) {
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        gt(i, n), e.setAttributeNS(t, n, "" + i);
      }
    }
    function jn(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Sc(e), e;
        default:
          return "";
      }
    }
    function od(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Um(e, t, n) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Sc(d), n = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return n;
          },
          setValue: function(d) {
            Sc(d), n = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function fd(e) {
      if (!e._valueTracker) {
        var t = od(e) ? "checked" : "value";
        e._valueTracker = Um(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function wm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(), i = "";
      return e && (i = od(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
    }
    function _a(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Mt(e) {
      return e.replace(
        $h,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function cn(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || cv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        $l() || "A component",
        t.type
      ), cv = !0), t.value === void 0 || t.defaultValue === void 0 || Hp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        $l() || "A component",
        t.type
      ), Hp = !0);
    }
    function Ni(e, t, n, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (gt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jn(t)) : e.value !== "" + jn(t) && (e.value = "" + jn(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Nm(e, d, jn(t)) : n != null ? Nm(e, d, jn(n)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (gt(h, "name"), e.name = "" + jn(h)) : e.removeAttribute("name");
    }
    function sd(e, t, n, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (gt(f, "type"), e.type = f), t != null || n != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          fd(e);
          return;
        }
        n = n != null ? "" + jn(n) : "", t = t != null ? "" + jn(t) : n, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (gt(d, "name"), e.name = d), fd(e);
    }
    function Nm(e, t, n) {
      t === "number" && _a(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function jg(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Or.Children.forEach(t.children, function(n) {
        n == null || typeof n == "string" || typeof n == "number" || typeof n == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || a || (a = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Nr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Nr = !0);
    }
    function Hm() {
      var e = $l();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function cu(e, t, n, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + jn(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function rd(e, t) {
      for (e = 0; e < c.length; e++) {
        var n = c[e];
        if (t[n] != null) {
          var i = pl(t[n]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            n,
            Hm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            n,
            Hm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Tc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        $l() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function zc(e, t, n) {
      if (t != null && (t = "" + jn(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + jn(n) : "";
    }
    function Bo(e, t, n, i) {
      if (t == null) {
        if (i != null) {
          if (n != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (pl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          n = i;
        }
        n == null && (n = ""), t = n;
      }
      n = jn(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i), fd(e);
    }
    function Ac(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ac(e.children[0], t) : e;
    }
    function Et(e) {
      return "  " + "  ".repeat(e);
    }
    function Dc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Hi(e) {
      return "- " + "  ".repeat(e);
    }
    function xi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ou(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function dd(e, t, n) {
      var i = 120 - 2 * n;
      if (t === null)
        return Dc(n) + ou(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Dc(n) + ou(e, i) + `
` + Hi(n) + ou(t, i) + `
`;
      }
      return Et(n) + ou(e, i) + `
`;
    }
    function hd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, n) {
        return n;
      });
    }
    function qo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (pl(e)) return "[...]";
          if (e.$$typeof === Ea)
            return (t = Se(e.type)) ? "<" + t + ">" : "<...>";
          var n = hd(e);
          if (n === "Object") {
            n = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = qo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  n += n === "" ? "..." : ", ...";
                  break;
                }
                n += (n === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + n + "}";
          }
          return n;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function jo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + qo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Yo(e, t, n) {
      var i = 120 - n.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = jo(
            t[f],
            120 - n.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? n + "<" + e + `>
` : 0 < i ? n + "<" + e + " " + o.join(" ") + `>
` : n + "<" + e + `
` + n + "  " + o.join(`
` + n + "  ") + `
` + n + `>
`;
    }
    function md(e, t, n) {
      var i = "", o = We({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * n - f.length - 2, h = qo(e[f], d);
          t.hasOwnProperty(f) ? (d = qo(t[f], d), i += Dc(n) + f + ": " + h + `
`, i += Hi(n) + f + ": " + d + `
`) : i += Dc(n) + f + ": " + h + `
`;
        }
      for (var g in o)
        o.hasOwnProperty(g) && (e = qo(
          o[g],
          120 - 2 * n - g.length - 2
        ), i += Hi(n) + g + ": " + e + `
`);
      return i;
    }
    function ei(e, t, n, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (y in n)
        n.hasOwnProperty(y) && f.set(
          y.toLowerCase(),
          y
        );
      if (f.size === 1 && f.has("children"))
        o += Yo(
          e,
          t,
          Et(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, g = f.get(d.toLowerCase());
            if (g !== void 0) {
              f.delete(d.toLowerCase());
              var y = t[d];
              g = n[g];
              var _ = jo(
                y,
                h
              );
              h = jo(
                g,
                h
              ), typeof y == "object" && y !== null && typeof g == "object" && g !== null && hd(y) === "Object" && hd(g) === "Object" && (2 < Object.keys(y).length || 2 < Object.keys(g).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Et(i + 1) + d + `={{
` + md(
                y,
                g,
                i + 2
              ) + Et(i + 1) + `}}
` : (o += Dc(i + 1) + d + "=" + _ + `
`, o += Hi(i + 1) + d + "=" + h + `
`);
            } else
              o += Et(i + 1) + d + "=" + jo(t[d], h) + `
`;
          }
        f.forEach(function(U) {
          if (U !== "children") {
            var A = 120 - 2 * (i + 1) - U.length - 1;
            o += Hi(i + 1) + U + "=" + jo(n[U], A) + `
`;
          }
        }), o = o === "" ? Et(i) + "<" + e + `>
` : Et(i) + "<" + e + `
` + o + Et(i) + `>
`;
      }
      return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += dd(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + dd("" + t, null, i + 1) : o + dd("" + t, void 0, i + 1)), o;
    }
    function Yn(e, t) {
      var n = xi(e);
      if (n === null) {
        for (n = "", e = e.child; e; )
          n += Yn(e, t), e = e.sibling;
        return n;
      }
      return Et(t) + "<" + n + `>
`;
    }
    function pd(e, t) {
      var n = Ac(e, t);
      if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
        return Et(t) + `...
` + pd(n, t + 1);
      n = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (n += Et(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = dd(o, e.serverProps, t), t++;
      else if (f = xi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (y in o)
            if (o.hasOwnProperty(y) && y !== "children") {
              var g = jo(o[y], 15);
              if (d -= y.length + g.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + y + "=" + g;
            }
          i = Et(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Yo(
            f,
            o,
            Dc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = ei(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var y = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (y += pd(d, t), f++) : y += Yn(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (y += Et(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], y = typeof f == "string" ? y + (Hi(t) + ou(f, 120 - 2 * t) + `
`) : y + Yo(
          f.type,
          f.props,
          Hi(t)
        );
      return n + i + y;
    }
    function xm(e) {
      try {
        return `

` + pd(e, 0);
      } catch {
        return "";
      }
    }
    function gd(e, t, n) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? n : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? xm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Bm(e, t) {
      var n = We({}, e || k), i = { tag: t };
      return b.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), O.indexOf(t) !== -1 && (n.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = i, t === "form" && (n.formTag = i), t === "a" && (n.aTagInScope = i), t === "button" && (n.buttonTagInScope = i), t === "nobr" && (n.nobrTagInScope = i), t === "p" && (n.pTagInButtonScope = i), t === "li" && (n.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope || (n.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? n.implicitRootScope === !0 && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
    }
    function bs(e, t, n) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (n) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!n) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return B.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return n || t === null;
        case "html":
          return n && t === "#document" || t === null;
        case "body":
          return n && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function g1(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Ln(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Ss(e, t) {
      t = t || k;
      var n = t.current;
      if (t = (n = bs(
        e,
        n && n.tag,
        t.implicitRootScope
      ) ? null : n) ? null : g1(e, t), t = n || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!n) + "|" + e + "|" + i, F[t]) return !1;
      F[t] = !0;
      var o = (t = Nn) ? Ln(t.return, i) : null, f = t !== null && o !== null ? gd(o, t, null) : "", d = "<" + e + ">";
      return n ? (n = "", i === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        n,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || he(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Es(e, t, n) {
      if (n || bs("#text", t, !1))
        return !0;
      if (n = "#text|" + t, F[n]) return !1;
      F[n] = !0;
      var i = (n = Nn) ? Ln(n, t) : null;
      return n = n !== null && i !== null ? gd(
        i,
        n,
        n.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        n
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        n
      ), !1;
    }
    function Oc(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Lo(e) {
      return e.replace(N, function(t, n) {
        return n.toUpperCase();
      });
    }
    function qm(e, t, n) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? x.hasOwnProperty(t) && x[t] || (x[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Lo(t.replace(wt, "ms-"))
      )) : Ue.test(t) ? x.hasOwnProperty(t) && x[t] || (x[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !C.test(n) || W.hasOwnProperty(n) && W[n] || (W[n] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        n.replace(C, "")
      )), typeof n == "number" && (isNaN(n) ? De || (De = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(n) || st || (st = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || be.has(t) ? t === "float" ? e.cssFloat = n : (ps(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
    }
    function jm(e, t, n) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, n != null) {
        if (t) {
          var i = {};
          if (n) {
            for (var o in n)
              if (n.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Y[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!n || n[h] !== t[h]))
              for (o = Y[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var g in t)
            for (o = Y[g] || [g], f = 0; f < o.length; f++)
              h[o[f]] = g;
          g = {};
          for (var y in i)
            if (o = i[y], (f = h[y]) && o !== f && (d = o + "," + f, !g[d])) {
              g[d] = !0, d = console;
              var _ = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                _ == null || typeof _ == "boolean" || _ === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var U in n)
          !n.hasOwnProperty(U) || t != null && t.hasOwnProperty(U) || (U.indexOf("--") === 0 ? e.setProperty(U, "") : U === "float" ? e.cssFloat = "" : e[U] = "");
        for (var A in t)
          y = t[A], t.hasOwnProperty(A) && n[A] !== y && qm(e, A, y);
      } else
        for (i in t)
          t.hasOwnProperty(i) && qm(e, i, t[i]);
    }
    function fu(e) {
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
    function Yg(e) {
      return pt.get(e) || e;
    }
    function Lg(e, t) {
      if (ta.call(Wh, t) && Wh[t])
        return !0;
      if (MT.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = ov.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Wh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Wh[t] = !0;
      }
      if (RT.test(t)) {
        if (e = t.toLowerCase(), e = ov.hasOwnProperty(e) ? e : null, e == null) return Wh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Wh[t] = !0);
      }
      return !0;
    }
    function Gg(e, t) {
      var n = [], i;
      for (i in t)
        Lg(e, i) || n.push(i);
      t = n.map(function(o) {
        return "`" + o + "`";
      }).join(", "), n.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < n.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Ym(e, t, n, i) {
      if (ta.call(la, t) && la[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), la[t] = !0;
      if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), la[t] = !0;
        if (sS.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), la[t] = !0;
      } else if (sS.test(t))
        return _T.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), la[t] = !0;
      if (CT.test(t) || UT.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), la[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), la[t] = !0;
      if (o === "is" && n !== null && n !== void 0 && typeof n != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof n
        ), la[t] = !0;
      if (typeof n == "number" && isNaN(n))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), la[t] = !0;
      if (Ia.hasOwnProperty(o)) {
        if (o = Ia[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), la[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), la[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof n) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (n ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ), la[t] = !0);
          }
        case "function":
        case "symbol":
          return la[t] = !0, !1;
        case "string":
          if (n === "false" || n === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              n,
              t,
              n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ), la[t] = !0;
          }
      }
      return !0;
    }
    function y1(e, t, n) {
      var i = [], o;
      for (o in t)
        Ym(e, o, t[o], n) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Ts(e) {
      return wT.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function sa() {
    }
    function Ca(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function yd(e) {
      var t = Ra(e);
      if (t && (e = t.stateNode)) {
        var n = e[Tn] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ni(
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
              for (gt(t, "name"), n = n.querySelectorAll(
                'input[name="' + Mt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Tn] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ni(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                i = n[t], i.form === e.form && wm(i);
            }
            break e;
          case "textarea":
            zc(e, n.value, n.defaultValue);
            break e;
          case "select":
            t = n.value, t != null && cu(e, !!n.multiple, t, !1);
        }
      }
    }
    function vd(e, t, n) {
      if (U1) return e(t, n);
      U1 = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (U1 = !1, (Fh !== null || Ih !== null) && (In(), Fh && (t = Fh, e = Ih, Ih = Fh = null, yd(t), e)))
          for (t = 0; t < e.length; t++) yd(e[t]);
      }
    }
    function su(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = n[Tn] || null;
      if (i === null) return null;
      n = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type."
        );
      return n;
    }
    function Rc() {
      if (fv) return fv;
      var e, t = N1, n = t.length, i, o = "value" in Qf ? Qf.value : Qf.textContent, f = o.length;
      for (e = 0; e < n && t[e] === o[e]; e++) ;
      var d = n - e;
      for (i = 1; i <= d && t[n - i] === o[f - i]; i++) ;
      return fv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function zs(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Go() {
      return !0;
    }
    function Lm() {
      return !1;
    }
    function Dl(e) {
      function t(n, i, o, f, d) {
        this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Go : Lm, this.isPropagationStopped = Lm, this;
      }
      return We(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Go);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Go);
        },
        persist: function() {
        },
        isPersistent: Go
      }), t;
    }
    function ti(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = ZT[e]) ? !!t[e] : !1;
    }
    function As() {
      return ti;
    }
    function Vo(e, t) {
      switch (e) {
        case "keyup":
          return nz.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== mS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function li(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Gm(e, t) {
      switch (e) {
        case "compositionend":
          return li(t);
        case "keypress":
          return t.which !== gS ? null : (vS = !0, yS);
        case "textInput":
          return e = t.data, e === yS && vS ? null : e;
        default:
          return null;
      }
    }
    function bd(e, t) {
      if (Ph)
        return e === "compositionend" || !q1 && Vo(e, t) ? (e = Rc(), fv = N1 = Qf = null, Ph = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return pS && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Vm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!uz[e.type] : t === "textarea";
    }
    function Sd(e) {
      if (!mc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Ds(e, t, n, i) {
      Fh ? Ih ? Ih.push(i) : Ih = [i] : Fh = i, t = Ka(t, "onChange"), 0 < t.length && (n = new sv(
        "onChange",
        "change",
        null,
        n,
        i
      ), e.push({ event: n, listeners: t }));
    }
    function Vg(e) {
      At(e, 0);
    }
    function Vl(e) {
      var t = wi(e);
      if (wm(t)) return e;
    }
    function Bi(e, t) {
      if (e === "change") return t;
    }
    function Os() {
      Lp && (Lp.detachEvent("onpropertychange", Xo), Gp = Lp = null);
    }
    function Xo(e) {
      if (e.propertyName === "value" && Vl(Gp)) {
        var t = [];
        Ds(
          t,
          Gp,
          e,
          Ca(e)
        ), vd(Vg, t);
      }
    }
    function v1(e, t, n) {
      e === "focusin" ? (Os(), Lp = t, Gp = n, Lp.attachEvent("onpropertychange", Xo)) : e === "focusout" && Os();
    }
    function Xm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Vl(Gp);
    }
    function Qm(e, t) {
      if (e === "click") return Vl(t);
    }
    function Rs(e, t) {
      if (e === "input" || e === "change")
        return Vl(t);
    }
    function Ed(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Qo(e, t) {
      if (na(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (!ta.call(t, o) || !na(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Xg(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Qg(e, t) {
      var n = Xg(e);
      e = 0;
      for (var i; n; ) {
        if (n.nodeType === 3) {
          if (i = e + n.textContent.length, e <= t && i >= t)
            return { node: n, offset: t - e };
          e = i;
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
        n = Xg(n);
      }
    }
    function Zg(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Td(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = _a(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = _a(e.document);
      }
      return t;
    }
    function Zm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Jg(e, t, n) {
      var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Y1 || em == null || em !== _a(i) || (i = em, "selectionStart" in i && Zm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Vp && Qo(Vp, i) || (Vp = i, i = Ka(j1, "onSelect"), 0 < i.length && (t = new sv(
        "onSelect",
        "select",
        null,
        t,
        n
      ), e.push({ event: t, listeners: i }), t.target = em)));
    }
    function Mc(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    function _c(e) {
      if (L1[e]) return L1[e];
      if (!tm[e]) return e;
      var t = tm[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in SS)
          return L1[e] = t[n];
      return e;
    }
    function Ua(e, t) {
      DS.set(e, t), Ma(t, [e]);
    }
    function Kg(e) {
      for (var t = dv, n = 0; n < e.length; n++) {
        var i = e[n];
        if (typeof i == "object" && i !== null)
          if (pl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== dv && t !== Z1)
              return X1;
            t = Z1;
          } else return X1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== dv && t !== Q1)
            return X1;
          t = Q1;
        }
      }
      return t;
    }
    function Jm(e, t, n, i) {
      for (var o in e)
        ta.call(e, o) && o[0] !== "_" && ru(o, e[o], t, n, i);
    }
    function ru(e, t, n, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Ea) {
              var f = Se(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), g = h.length;
              if (d == null && g === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || g === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              n.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && ru(
                "key",
                d,
                n,
                i + 1,
                o
              ), e = !1;
              for (var y in t)
                y === "children" ? t.children != null && (!pl(t.children) || 0 < t.children.length) && (e = !0) : ta.call(t, y) && y[0] !== "_" && ru(
                  y,
                  t[y],
                  n,
                  i + 1,
                  o
                );
              n.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (y = Kg(t), y === Q1 || y === dv) {
                t = JSON.stringify(t);
                break;
              } else if (y === Z1) {
                for (n.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], ru(
                    f[0],
                    f[1],
                    n,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = n.length, ru(
                  e,
                  t.value,
                  n,
                  i,
                  o
                ), n.length > f) {
                  n = n[f], n[1] = "Promise<" + (n[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = n.length, ru(
                e,
                t.reason,
                n,
                i,
                o
              ), n.length > f)) {
                n = n[f], n[1] = "Rejected Promise<" + n[1] + ">";
                return;
              }
              n.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (y = Object.getPrototypeOf(t)) && typeof y.constructor == "function" && (f = y.constructor.name), n.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Jm(t, n, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === dz ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      n.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function kg(e, t, n, i) {
      var o = !0;
      for (d in e)
        d in t || (n.push([
          hv + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, n.push(
                [hv + o, "…"],
                [mv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Ea) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Se(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", n.push(
                        [hv + o, d],
                        [mv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var g = Object.prototype.toString.call(d), y = Object.prototype.toString.call(h);
                    if (g === y && (y === "[object Object]" || y === "[object Array]")) {
                      g = [
                        MS + "  ".repeat(i) + f,
                        y === "[object Array]" ? "Array" : ""
                      ], n.push(g), y = n.length, kg(
                        d,
                        h,
                        n,
                        i + 1
                      ) ? y === n.length && (g[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (g = Function.prototype.toString.call(d), y = Function.prototype.toString.call(h), g === y)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", n.push([
                    MS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              ru(f, d, n, i, hv), ru(f, h, n, i, mv);
            }
            o = !1;
          }
        } else
          n.push([
            mv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function wa(e) {
      ft = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function ra(e, t, n, i) {
      Kt && (Jf.start = t, Jf.end = n, po.color = "warning", po.tooltipText = i, po.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Jf
        )
      ) : performance.measure(i, Jf));
    }
    function zd(e, t, n) {
      ra(e, t, n, "Reconnect");
    }
    function Ad(e, t, n, i, o) {
      var f = de(e);
      if (f !== null && Kt) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var g = e.child; g !== null; g = g.sibling)
            h -= g.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var y = e.memoizedProps;
        h = e._debugTask, y !== null && d !== null && d.memoizedProps !== y ? (g = [hz], y = kg(
          d.memoizedProps,
          y,
          g,
          0
        ), 1 < g.length && (y && !Zf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Zf = !0, g[0] = mz, po.color = "warning", po.tooltipText = _S) : (po.color = i, po.tooltipText = f), po.properties = g, Jf.start = t, Jf.end = n, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Jf
          )
        ) : performance.measure(
          "​" + f,
          Jf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            n,
            ju,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          n,
          ju,
          void 0,
          i
        );
      }
    }
    function Km(e, t, n, i) {
      if (Kt) {
        var o = de(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var g = i[h];
            f == null && g.source !== null && (f = g.source._debugTask), g = g.value, d.push([
              "Error",
              typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g)
            ]);
          }
          e.key !== null && ru("key", e.key, d, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: n,
            detail: {
              devtools: {
                color: "error",
                track: ju,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function Na(e, t, n, i, o) {
      if (o !== null) {
        if (Kt) {
          var f = de(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && ru("key", e.key, i, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: n,
              detail: {
                devtools: {
                  color: "error",
                  track: ju,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = de(e), f !== null && Kt && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            n,
            ju,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          n,
          ju,
          void 0,
          o
        ));
    }
    function b1(e, t, n, i) {
      if (Kt && !(t <= e)) {
        var o = (n & 738197653) === n ? "tertiary-dark" : "primary-dark";
        n = (n & 536870912) === n ? "Prepared" : (n & 201326741) === n ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            n,
            e,
            t,
            ft,
            ct,
            o
          )
        ) : console.timeStamp(
          n,
          e,
          t,
          ft,
          ct,
          o
        );
      }
    }
    function $g(e, t, n, i) {
      !Kt || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          ft,
          ct,
          n
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        ft,
        ct,
        n
      ));
    }
    function Wg(e, t, n, i) {
      !Kt || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          ft,
          ct,
          n
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        ft,
        ct,
        n
      ));
    }
    function S1(e, t, n, i, o, f) {
      if (Kt && !(t <= e)) {
        n = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          n.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: ft,
              trackGroup: ct,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: n
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function km(e, t, n, i) {
      !Kt || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          ft,
          ct,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        ft,
        ct,
        "error"
      ));
    }
    function E1(e, t, n, i) {
      !Kt || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          n,
          e,
          t,
          ft,
          ct,
          "secondary-light"
        )
      ) : console.timeStamp(
        n,
        e,
        t,
        ft,
        ct,
        "secondary-light"
      ));
    }
    function Fg(e, t, n, i, o) {
      if (Kt && !(t <= e)) {
        for (var f = [], d = 0; d < n.length; d++) {
          var h = n[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: ft,
              trackGroup: ct,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function $m(e, t, n) {
      !Kt || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        ft,
        ct,
        "secondary-dark"
      );
    }
    function Dd() {
      for (var e = lm, t = J1 = lm = 0; t < e; ) {
        var n = Yu[t];
        Yu[t++] = null;
        var i = Yu[t];
        Yu[t++] = null;
        var o = Yu[t];
        Yu[t++] = null;
        var f = Yu[t];
        if (Yu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Wm(n, o, f);
      }
    }
    function Zo(e, t, n, i) {
      Yu[lm++] = e, Yu[lm++] = t, Yu[lm++] = n, Yu[lm++] = i, J1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Cc(e, t, n, i) {
      return Zo(e, t, n, i), Ms(e);
    }
    function Wl(e, t) {
      return Zo(e, null, null, t), Ms(e);
    }
    function Wm(e, t, n) {
      e.lanes |= n;
      var i = e.alternate;
      i !== null && (i.lanes |= n);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= n, i = f.alternate, i !== null && (i.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Xp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ql(n), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), f) : null;
    }
    function Ms(e) {
      if (gg > Cz)
        throw Wr = gg = 0, yg = Db = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Wr > Uz && (Wr = 0, yg = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Sa(e);
      for (var t = e, n = t.return; n !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Sa(e), t = n, n = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function qi(e) {
      if (Lu === null) return e;
      var t = Lu(e);
      return t === void 0 ? e : t.current;
    }
    function Od(e) {
      if (Lu === null) return e;
      var t = Lu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = qi(e.render), e.render !== t) ? (t = { $$typeof: Nf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Fm(e, t) {
      if (Lu === null) return !1;
      var n = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Pl) && (i = !0);
          break;
        case 11:
          (o === Nf || o === Pl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Mr || o === Pl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Lu(n), e !== void 0 && e === Lu(t)));
    }
    function Uc(e) {
      Lu !== null && typeof WeakSet == "function" && (nm === null && (nm = /* @__PURE__ */ new WeakSet()), nm.add(e));
    }
    function Ig(e, t, n) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var g = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            g = i;
            break;
          case 11:
            g = i.render;
        }
        if (Lu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var y = !1;
        if (i = !1, g !== null && (g = Lu(g), g !== void 0 && (n.has(g) ? i = !0 : t.has(g) && (h === 1 ? i = !0 : y = !0))), nm !== null && (nm.has(e) || o !== null && nm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || y) && (o = Wl(e, 2), o !== null && Ye(o, e, 2)), f === null || i || Ig(
          f,
          t,
          n
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function T1(e, t, n, i) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, CS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Im(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function du(e, t) {
      var n = e.alternate;
      switch (n === null ? (n = X(
        e.tag,
        t,
        e.key,
        e.mode
      ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case 0:
        case 15:
          n.type = qi(e.type);
          break;
        case 1:
          n.type = qi(e.type);
          break;
        case 11:
          n.type = Od(e.type);
      }
      return n;
    }
    function Pm(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
    }
    function wc(e, t, n, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Im(e) && (d = 1), h = qi(h);
      else if (typeof e == "string")
        d = J(), d = Ky(e, n, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Fa:
            return t = X(31, n, t, o), t.elementType = Fa, t.lanes = f, t;
          case wf:
            return Nc(
              n.children,
              o,
              f,
              t
            );
          case En:
            d = 8, o |= Hn, o |= zi;
            break;
          case Rr:
            return e = n, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = X(12, e, t, i | Fe), t.elementType = Rr, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case fo:
            return t = X(13, n, t, o), t.elementType = fo, t.lanes = f, t;
          case wn:
            return t = X(19, n, t, o), t.elementType = wn, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Wa:
                  d = 10;
                  break e;
                case jh:
                  d = 9;
                  break e;
                case Nf:
                  d = 11, h = Od(h);
                  break e;
                case Mr:
                  d = 14;
                  break e;
                case Pl:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : pl(e) ? n = "array" : e !== void 0 && e.$$typeof === Ea ? (n = "<" + (Se(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (d = i ? Ce(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, n = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + h)
            ), h = null;
        }
      return t = X(d, n, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function ji(e, t, n) {
      return t = wc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        n
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Nc(e, t, n, i) {
      return e = X(7, e, i, t), e.lanes = n, e;
    }
    function Jo(e, t, n) {
      return e = X(6, e, null, t), e.lanes = n, e;
    }
    function e0(e) {
      var t = X(18, null, null, je);
      return t.stateNode = e, t;
    }
    function Rd(e, t, n) {
      return t = X(
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
    function on(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = K1.get(e);
        return n !== void 0 ? n : (t = {
          value: e,
          source: t,
          stack: dt(t)
        }, K1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: dt(t)
      };
    }
    function Ha(e, t) {
      Yi(), am[um++] = Qp, am[um++] = pv, pv = e, Qp = t;
    }
    function t0(e, t, n) {
      Yi(), Gu[Vu++] = yo, Gu[Vu++] = vo, Gu[Vu++] = xr, xr = e;
      var i = yo;
      e = vo;
      var o = 32 - Ql(i) - 1;
      i &= ~(1 << o), n += 1;
      var f = 32 - Ql(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, yo = 1 << 32 - Ql(t) + o | n << o | i, vo = f + e;
      } else
        yo = 1 << f | n << o | i, vo = e;
    }
    function Md(e) {
      Yi(), e.return !== null && (Ha(e, 1), t0(e, 1, 0));
    }
    function _d(e) {
      for (; e === pv; )
        pv = am[--um], am[um] = null, Qp = am[--um], am[um] = null;
      for (; e === xr; )
        xr = Gu[--Vu], Gu[Vu] = null, vo = Gu[--Vu], Gu[Vu] = null, yo = Gu[--Vu], Gu[Vu] = null;
    }
    function Pg() {
      return Yi(), xr !== null ? { id: yo, overflow: vo } : null;
    }
    function ey(e, t) {
      Yi(), Gu[Vu++] = yo, Gu[Vu++] = vo, Gu[Vu++] = xr, yo = t.id, vo = t.overflow, xr = e;
    }
    function Yi() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Hc(e, t) {
      if (e.return === null) {
        if (Pa === null)
          Pa = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Pa.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Pa.distanceFromLeaf > t && (Pa.distanceFromLeaf = t);
        }
        return Pa;
      }
      var n = Hc(
        e.return,
        t + 1
      ).children;
      return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, n.push(t), t);
    }
    function ty() {
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Fl(e, t) {
      pc || (e = Hc(e, 0), e.serverProps = null, t !== null && (t = Xy(t), e.serverTail.push(t)));
    }
    function da(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, n = "", i = Pa;
      throw i !== null && (Pa = null, n = xm(i)), Cs(
        on(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + n
          ),
          e
        )
      ), k1;
    }
    function l0(e) {
      var t = e.stateNode, n = e.type, i = e.memoizedProps;
      switch (t[Jt] = e, t[Tn] = i, bn(n, i), n) {
        case "dialog":
          Be("cancel", t), Be("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Be("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < vg.length; n++)
            Be(vg[n], t);
          break;
        case "source":
          Be("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Be("error", t), Be("load", t);
          break;
        case "details":
          Be("toggle", t);
          break;
        case "input":
          Ec("input", i), Be("invalid", t), cn(t, i), sd(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          jg(t, i);
          break;
        case "select":
          Ec("select", i), Be("invalid", t), rd(t, i);
          break;
        case "textarea":
          Ec("textarea", i), Be("invalid", t), Tc(t, i), Bo(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || ap(t.textContent, n) ? (i.popover != null && (Be("beforetoggle", t), Be("toggle", t)), i.onScroll != null && Be("scroll", t), i.onScrollEnd != null && Be("scrollend", t), i.onClick != null && (t.onclick = sa), t = !0) : t = !1, t || da(e, !0);
    }
    function n0(e) {
      for (zn = e.return; zn; )
        switch (zn.tag) {
          case 5:
          case 31:
          case 13:
            Xu = !1;
            return;
          case 27:
          case 3:
            Xu = !0;
            return;
          default:
            zn = zn.return;
        }
    }
    function xc(e) {
      if (e !== zn) return !1;
      if (!it)
        return n0(e), it = !0, !1;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Af(e.type, e.memoizedProps)), n = !n), n && kt) {
        for (n = kt; n; ) {
          var i = Hc(e, 0), o = Xy(n);
          i.serverTail.push(o), n = o.type === "Suspense" ? Rf(n) : Pn(n.nextSibling);
        }
        da(e);
      }
      if (n0(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kt = Rf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kt = Rf(e);
      } else
        t === 27 ? (t = kt, oc(e.type) ? (e = qb, qb = null, kt = e) : kt = t) : kt = zn ? Pn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Li() {
      kt = zn = null, pc = it = !1;
    }
    function _s() {
      var e = kf;
      return e !== null && (ca === null ? ca = e : ca.push.apply(
        ca,
        e
      ), kf = null), e;
    }
    function Cs(e) {
      kf === null ? kf = [e] : kf.push(e);
    }
    function Gi() {
      var e = Pa;
      if (e !== null) {
        Pa = null;
        for (var t = xm(e); 0 < e.children.length; )
          e = e.children[0];
        he(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Ko() {
      im = gv = null, cm = !1;
    }
    function ha(e, t, n) {
      oe($1, t._currentValue, e), t._currentValue = n, oe(W1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== wS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = wS;
    }
    function xa(e, t) {
      e._currentValue = $1.current;
      var n = W1.current;
      Ae(W1, t), e._currentRenderer = n, Ae($1, t);
    }
    function Cd(e, t, n) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
        e = e.return;
      }
      e !== n && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ni(e, t, n, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var g = 0; g < t.length; g++)
              if (h.context === t[g]) {
                f.lanes |= n, h = f.alternate, h !== null && (h.lanes |= n), Cd(
                  f.return,
                  n,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= n, f = d.alternate, f !== null && (f.lanes |= n), Cd(
            d,
            n,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Ba(e, t, n, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            na(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === dc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(zg) : e = [zg]);
        }
        o = o.return;
      }
      e !== null && ni(
        t,
        e,
        n,
        i
      ), t.flags |= 262144;
    }
    function ko(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!na(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Vi(e) {
      gv = e, im = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function yt(e) {
      return cm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), a0(gv, e);
    }
    function Us(e, t) {
      return gv === null && Vi(e), a0(e, t);
    }
    function a0(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, im === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        im = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else im = im.next = t;
      return n;
    }
    function Ud() {
      return {
        controller: new yz(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Bc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function ws(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && vz(bz, function() {
        e.controller.abort();
      });
    }
    function hu(e, t, n) {
      (e & 127) !== 0 ? 0 > gc && (gc = Hl(), Jp = yv(t), F1 = t, n != null && (I1 = de(n)), (rt & (Kl | lu)) !== nn && (rl = !0, Wf = Zp), e = Df(), t = wu(), e !== om || t !== Kp ? om = -1.1 : t !== null && (Wf = Zp), jr = e, Kp = t) : (e & 4194048) !== 0 && 0 > Qu && (Qu = Hl(), kp = yv(t), NS = t, n != null && (HS = de(n)), 0 > To) && (e = Df(), t = wu(), (e !== If || t !== Yr) && (If = -1.1), Ff = e, Yr = t);
    }
    function ly(e) {
      if (0 > gc) {
        gc = Hl(), Jp = e._debugTask != null ? e._debugTask : null, (rt & (Kl | lu)) !== nn && (Wf = Zp);
        var t = Df(), n = wu();
        t !== om || n !== Kp ? om = -1.1 : n !== null && (Wf = Zp), jr = t, Kp = n;
      }
      0 > Qu && (Qu = Hl(), kp = e._debugTask != null ? e._debugTask : null, 0 > To) && (e = Df(), t = wu(), (e !== If || t !== Yr) && (If = -1.1), Ff = e, Yr = t);
    }
    function mu() {
      var e = Br;
      return Br = 0, e;
    }
    function $o(e) {
      var t = Br;
      return Br = e, t;
    }
    function fn(e) {
      var t = Br;
      return Br += e, t;
    }
    function qc() {
      He = Me = -1.1;
    }
    function Xt() {
      var e = Me;
      return Me = -1.1, e;
    }
    function Ol(e) {
      0 <= e && (Me = e);
    }
    function ma() {
      var e = nl;
      return nl = -0, e;
    }
    function Gn(e) {
      0 <= e && (nl = e);
    }
    function Vn() {
      var e = Pt;
      return Pt = null, e;
    }
    function pa() {
      var e = rl;
      return rl = !1, e;
    }
    function ai(e) {
      aa = Hl(), 0 > e.actualStartTime && (e.actualStartTime = aa);
    }
    function wd(e) {
      if (0 <= aa) {
        var t = Hl() - aa;
        e.actualDuration += t, e.selfBaseDuration = t, aa = -1;
      }
    }
    function Ns(e) {
      if (0 <= aa) {
        var t = Hl() - aa;
        e.actualDuration += t, aa = -1;
      }
    }
    function sn() {
      if (0 <= aa) {
        var e = Hl(), t = e - aa;
        aa = -1, Br += t, nl += t, He = e;
      }
    }
    function ny(e) {
      Pt === null && (Pt = []), Pt.push(e), So === null && (So = []), So.push(e);
    }
    function el() {
      aa = Hl(), 0 > Me && (Me = aa);
    }
    function jc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ui(e, t) {
      if (Wp === null) {
        var n = Wp = [];
        eb = 0, Lr = np(), fm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            n.push(i);
          }
        };
      }
      return eb++, t.then(u0, u0), t;
    }
    function u0() {
      if (--eb === 0 && (-1 < Qu || (To = -1.1), Wp !== null)) {
        fm !== null && (fm.status = "fulfilled");
        var e = Wp;
        Wp = null, Lr = 0, fm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Nd(e, t) {
      var n = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          n.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        }
      ), i;
    }
    function ii() {
      var e = Gr.current;
      return e !== null ? e : Lt.pooledCache;
    }
    function Wo(e, t) {
      t === null ? oe(Gr, Gr.current, e) : oe(Gr, t.pool, e);
    }
    function i0() {
      var e = ii();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Hd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function c0(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Xn(e, t, n) {
      Q.actQueue !== null && (Q.didUsePromise = !0);
      var i = e.thenables;
      if (n = i[n], n === void 0 ? i.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(sa, sa), t = n), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Hs(e), e;
        default:
          if (typeof t.status == "string")
            t.then(sa, sa);
          else {
            if (e = Lt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Hs(e), e;
          }
          throw Xr = t, ng = !0, sm;
      }
    }
    function Qn(e) {
      try {
        return Az(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Xr = t, ng = !0, sm) : t;
      }
    }
    function Yc() {
      if (Xr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Xr;
      return Xr = null, ng = !1, e;
    }
    function Hs(e) {
      if (e === sm || e === Dv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function il(e) {
      var t = Ie;
      return e != null && (Ie = t === null ? e : t.concat(e)), t;
    }
    function On() {
      var e = Ie;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var n = e[t].debugTask;
            if (n != null) return n;
          }
      }
      return null;
    }
    function rn(e, t, n) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = ji(e, n.mode, 0), t._debugInfo = Ie, t.return = n), he(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function qa(e) {
      var t = ag;
      return ag += 1, rm === null && (rm = Hd()), Xn(rm, e, t);
    }
    function Rn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function ja(e, t) {
      throw t.$$typeof === Py ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ga(e, t) {
      var n = On();
      n !== null ? n.run(
        ja.bind(null, e, t)
      ) : ja(e, t);
    }
    function o0(e, t) {
      var n = de(e) || "Component";
      e2[n] || (e2[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        n,
        t,
        n
      ));
    }
    function Fo(e, t) {
      var n = On();
      n !== null ? n.run(
        o0.bind(null, e, t)
      ) : o0(e, t);
    }
    function xd(e, t) {
      var n = de(e) || "Component";
      t2[n] || (t2[n] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        n,
        t,
        n
      ));
    }
    function xs(e, t) {
      var n = On();
      n !== null ? n.run(
        xd.bind(null, e, t)
      ) : xd(e, t);
    }
    function Rl(e) {
      function t(z, D) {
        if (e) {
          var M = z.deletions;
          M === null ? (z.deletions = [D], z.flags |= 16) : M.push(D);
        }
      }
      function n(z, D) {
        if (!e) return null;
        for (; D !== null; )
          t(z, D), D = D.sibling;
        return null;
      }
      function i(z) {
        for (var D = /* @__PURE__ */ new Map(); z !== null; )
          z.key !== null ? D.set(z.key, z) : D.set(z.index, z), z = z.sibling;
        return D;
      }
      function o(z, D) {
        return z = du(z, D), z.index = 0, z.sibling = null, z;
      }
      function f(z, D, M) {
        return z.index = M, e ? (M = z.alternate, M !== null ? (M = M.index, M < D ? (z.flags |= 67108866, D) : M) : (z.flags |= 67108866, D)) : (z.flags |= 1048576, D);
      }
      function d(z) {
        return e && z.alternate === null && (z.flags |= 67108866), z;
      }
      function h(z, D, M, $) {
        return D === null || D.tag !== 6 ? (D = Jo(
          M,
          z.mode,
          $
        ), D.return = z, D._debugOwner = z, D._debugTask = z._debugTask, D._debugInfo = Ie, D) : (D = o(D, M), D.return = z, D._debugInfo = Ie, D);
      }
      function g(z, D, M, $) {
        var fe = M.type;
        return fe === wf ? (D = _(
          z,
          D,
          M.props.children,
          $,
          M.key
        ), rn(M, D, z), D) : D !== null && (D.elementType === fe || Fm(D, M) || typeof fe == "object" && fe !== null && fe.$$typeof === Pl && Qn(fe) === D.type) ? (D = o(D, M.props), Rn(D, M), D.return = z, D._debugOwner = M._owner, D._debugInfo = Ie, D) : (D = ji(M, z.mode, $), Rn(D, M), D.return = z, D._debugInfo = Ie, D);
      }
      function y(z, D, M, $) {
        return D === null || D.tag !== 4 || D.stateNode.containerInfo !== M.containerInfo || D.stateNode.implementation !== M.implementation ? (D = Rd(M, z.mode, $), D.return = z, D._debugInfo = Ie, D) : (D = o(D, M.children || []), D.return = z, D._debugInfo = Ie, D);
      }
      function _(z, D, M, $, fe) {
        return D === null || D.tag !== 7 ? (D = Nc(
          M,
          z.mode,
          $,
          fe
        ), D.return = z, D._debugOwner = z, D._debugTask = z._debugTask, D._debugInfo = Ie, D) : (D = o(D, M), D.return = z, D._debugInfo = Ie, D);
      }
      function U(z, D, M) {
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
          return D = Jo(
            "" + D,
            z.mode,
            M
          ), D.return = z, D._debugOwner = z, D._debugTask = z._debugTask, D._debugInfo = Ie, D;
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ea:
              return M = ji(
                D,
                z.mode,
                M
              ), Rn(M, D), M.return = z, z = il(D._debugInfo), M._debugInfo = Ie, Ie = z, M;
            case sc:
              return D = Rd(
                D,
                z.mode,
                M
              ), D.return = z, D._debugInfo = Ie, D;
            case Pl:
              var $ = il(D._debugInfo);
              return D = Qn(D), z = U(z, D, M), Ie = $, z;
          }
          if (pl(D) || ze(D))
            return M = Nc(
              D,
              z.mode,
              M,
              null
            ), M.return = z, M._debugOwner = z, M._debugTask = z._debugTask, z = il(D._debugInfo), M._debugInfo = Ie, Ie = z, M;
          if (typeof D.then == "function")
            return $ = il(D._debugInfo), z = U(
              z,
              qa(D),
              M
            ), Ie = $, z;
          if (D.$$typeof === Wa)
            return U(
              z,
              Us(z, D),
              M
            );
          ga(z, D);
        }
        return typeof D == "function" && Fo(z, D), typeof D == "symbol" && xs(z, D), null;
      }
      function A(z, D, M, $) {
        var fe = D !== null ? D.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
          return fe !== null ? null : h(z, D, "" + M, $);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case Ea:
              return M.key === fe ? (fe = il(M._debugInfo), z = g(
                z,
                D,
                M,
                $
              ), Ie = fe, z) : null;
            case sc:
              return M.key === fe ? y(z, D, M, $) : null;
            case Pl:
              return fe = il(M._debugInfo), M = Qn(M), z = A(
                z,
                D,
                M,
                $
              ), Ie = fe, z;
          }
          if (pl(M) || ze(M))
            return fe !== null ? null : (fe = il(M._debugInfo), z = _(
              z,
              D,
              M,
              $,
              null
            ), Ie = fe, z);
          if (typeof M.then == "function")
            return fe = il(M._debugInfo), z = A(
              z,
              D,
              qa(M),
              $
            ), Ie = fe, z;
          if (M.$$typeof === Wa)
            return A(
              z,
              D,
              Us(z, M),
              $
            );
          ga(z, M);
        }
        return typeof M == "function" && Fo(z, M), typeof M == "symbol" && xs(z, M), null;
      }
      function L(z, D, M, $, fe) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
          return z = z.get(M) || null, h(D, z, "" + $, fe);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ea:
              return M = z.get(
                $.key === null ? M : $.key
              ) || null, z = il($._debugInfo), D = g(
                D,
                M,
                $,
                fe
              ), Ie = z, D;
            case sc:
              return z = z.get(
                $.key === null ? M : $.key
              ) || null, y(D, z, $, fe);
            case Pl:
              var Ve = il($._debugInfo);
              return $ = Qn($), D = L(
                z,
                D,
                M,
                $,
                fe
              ), Ie = Ve, D;
          }
          if (pl($) || ze($))
            return M = z.get(M) || null, z = il($._debugInfo), D = _(
              D,
              M,
              $,
              fe,
              null
            ), Ie = z, D;
          if (typeof $.then == "function")
            return Ve = il($._debugInfo), D = L(
              z,
              D,
              M,
              qa($),
              fe
            ), Ie = Ve, D;
          if ($.$$typeof === Wa)
            return L(
              z,
              D,
              M,
              Us(D, $),
              fe
            );
          ga(D, $);
        }
        return typeof $ == "function" && Fo(D, $), typeof $ == "symbol" && xs(D, $), null;
      }
      function ce(z, D, M, $) {
        if (typeof M != "object" || M === null) return $;
        switch (M.$$typeof) {
          case Ea:
          case sc:
            ue(z, D, M);
            var fe = M.key;
            if (typeof fe != "string") break;
            if ($ === null) {
              $ = /* @__PURE__ */ new Set(), $.add(fe);
              break;
            }
            if (!$.has(fe)) {
              $.add(fe);
              break;
            }
            he(D, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                fe
              );
            });
            break;
          case Pl:
            M = Qn(M), ce(z, D, M, $);
        }
        return $;
      }
      function re(z, D, M, $) {
        for (var fe = null, Ve = null, Re = null, Te = D, ke = D = 0, $t = null; Te !== null && ke < M.length; ke++) {
          Te.index > ke ? ($t = Te, Te = null) : $t = Te.sibling;
          var zl = A(
            z,
            Te,
            M[ke],
            $
          );
          if (zl === null) {
            Te === null && (Te = $t);
            break;
          }
          fe = ce(
            z,
            zl,
            M[ke],
            fe
          ), e && Te && zl.alternate === null && t(z, Te), D = f(zl, D, ke), Re === null ? Ve = zl : Re.sibling = zl, Re = zl, Te = $t;
        }
        if (ke === M.length)
          return n(z, Te), it && Ha(z, ke), Ve;
        if (Te === null) {
          for (; ke < M.length; ke++)
            Te = U(z, M[ke], $), Te !== null && (fe = ce(
              z,
              Te,
              M[ke],
              fe
            ), D = f(
              Te,
              D,
              ke
            ), Re === null ? Ve = Te : Re.sibling = Te, Re = Te);
          return it && Ha(z, ke), Ve;
        }
        for (Te = i(Te); ke < M.length; ke++)
          $t = L(
            Te,
            z,
            ke,
            M[ke],
            $
          ), $t !== null && (fe = ce(
            z,
            $t,
            M[ke],
            fe
          ), e && $t.alternate !== null && Te.delete(
            $t.key === null ? ke : $t.key
          ), D = f(
            $t,
            D,
            ke
          ), Re === null ? Ve = $t : Re.sibling = $t, Re = $t);
        return e && Te.forEach(function(Co) {
          return t(z, Co);
        }), it && Ha(z, ke), Ve;
      }
      function Vt(z, D, M, $) {
        if (M == null)
          throw Error("An iterable object provided no iterator.");
        for (var fe = null, Ve = null, Re = D, Te = D = 0, ke = null, $t = null, zl = M.next(); Re !== null && !zl.done; Te++, zl = M.next()) {
          Re.index > Te ? (ke = Re, Re = null) : ke = Re.sibling;
          var Co = A(z, Re, zl.value, $);
          if (Co === null) {
            Re === null && (Re = ke);
            break;
          }
          $t = ce(
            z,
            Co,
            zl.value,
            $t
          ), e && Re && Co.alternate === null && t(z, Re), D = f(Co, D, Te), Ve === null ? fe = Co : Ve.sibling = Co, Ve = Co, Re = ke;
        }
        if (zl.done)
          return n(z, Re), it && Ha(z, Te), fe;
        if (Re === null) {
          for (; !zl.done; Te++, zl = M.next())
            Re = U(z, zl.value, $), Re !== null && ($t = ce(
              z,
              Re,
              zl.value,
              $t
            ), D = f(
              Re,
              D,
              Te
            ), Ve === null ? fe = Re : Ve.sibling = Re, Ve = Re);
          return it && Ha(z, Te), fe;
        }
        for (Re = i(Re); !zl.done; Te++, zl = M.next())
          ke = L(
            Re,
            z,
            Te,
            zl.value,
            $
          ), ke !== null && ($t = ce(
            z,
            ke,
            zl.value,
            $t
          ), e && ke.alternate !== null && Re.delete(
            ke.key === null ? Te : ke.key
          ), D = f(
            ke,
            D,
            Te
          ), Ve === null ? fe = ke : Ve.sibling = ke, Ve = ke);
        return e && Re.forEach(function(kz) {
          return t(z, kz);
        }), it && Ha(z, Te), fe;
      }
      function ot(z, D, M, $) {
        if (typeof M == "object" && M !== null && M.type === wf && M.key === null && (rn(M, null, z), M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case Ea:
              var fe = il(M._debugInfo);
              e: {
                for (var Ve = M.key; D !== null; ) {
                  if (D.key === Ve) {
                    if (Ve = M.type, Ve === wf) {
                      if (D.tag === 7) {
                        n(
                          z,
                          D.sibling
                        ), $ = o(
                          D,
                          M.props.children
                        ), $.return = z, $._debugOwner = M._owner, $._debugInfo = Ie, rn(M, $, z), z = $;
                        break e;
                      }
                    } else if (D.elementType === Ve || Fm(
                      D,
                      M
                    ) || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Pl && Qn(Ve) === D.type) {
                      n(
                        z,
                        D.sibling
                      ), $ = o(D, M.props), Rn($, M), $.return = z, $._debugOwner = M._owner, $._debugInfo = Ie, z = $;
                      break e;
                    }
                    n(z, D);
                    break;
                  } else t(z, D);
                  D = D.sibling;
                }
                M.type === wf ? ($ = Nc(
                  M.props.children,
                  z.mode,
                  $,
                  M.key
                ), $.return = z, $._debugOwner = z, $._debugTask = z._debugTask, $._debugInfo = Ie, rn(M, $, z), z = $) : ($ = ji(
                  M,
                  z.mode,
                  $
                ), Rn($, M), $.return = z, $._debugInfo = Ie, z = $);
              }
              return z = d(z), Ie = fe, z;
            case sc:
              e: {
                for (fe = M, M = fe.key; D !== null; ) {
                  if (D.key === M)
                    if (D.tag === 4 && D.stateNode.containerInfo === fe.containerInfo && D.stateNode.implementation === fe.implementation) {
                      n(
                        z,
                        D.sibling
                      ), $ = o(
                        D,
                        fe.children || []
                      ), $.return = z, z = $;
                      break e;
                    } else {
                      n(z, D);
                      break;
                    }
                  else t(z, D);
                  D = D.sibling;
                }
                $ = Rd(
                  fe,
                  z.mode,
                  $
                ), $.return = z, z = $;
              }
              return d(z);
            case Pl:
              return fe = il(M._debugInfo), M = Qn(M), z = ot(
                z,
                D,
                M,
                $
              ), Ie = fe, z;
          }
          if (pl(M))
            return fe = il(M._debugInfo), z = re(
              z,
              D,
              M,
              $
            ), Ie = fe, z;
          if (ze(M)) {
            if (fe = il(M._debugInfo), Ve = ze(M), typeof Ve != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Re = Ve.call(M);
            return Re === M ? (z.tag !== 0 || Object.prototype.toString.call(z.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Re) !== "[object Generator]") && (IS || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), IS = !0) : M.entries !== Ve || ab || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), ab = !0), z = Vt(
              z,
              D,
              Re,
              $
            ), Ie = fe, z;
          }
          if (typeof M.then == "function")
            return fe = il(M._debugInfo), z = ot(
              z,
              D,
              qa(M),
              $
            ), Ie = fe, z;
          if (M.$$typeof === Wa)
            return ot(
              z,
              D,
              Us(z, M),
              $
            );
          ga(z, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (fe = "" + M, D !== null && D.tag === 6 ? (n(
          z,
          D.sibling
        ), $ = o(D, fe), $.return = z, z = $) : (n(z, D), $ = Jo(
          fe,
          z.mode,
          $
        ), $.return = z, $._debugOwner = z, $._debugTask = z._debugTask, $._debugInfo = Ie, z = $), d(z)) : (typeof M == "function" && Fo(z, M), typeof M == "symbol" && xs(z, M), n(z, D));
      }
      return function(z, D, M, $) {
        var fe = Ie;
        Ie = null;
        try {
          ag = 0;
          var Ve = ot(
            z,
            D,
            M,
            $
          );
          return rm = null, Ve;
        } catch ($t) {
          if ($t === sm || $t === Dv) throw $t;
          var Re = X(29, $t, null, z.mode);
          Re.lanes = $, Re.return = z;
          var Te = Re._debugInfo = Ie;
          if (Re._debugOwner = z._debugOwner, Re._debugTask = z._debugTask, Te != null) {
            for (var ke = Te.length - 1; 0 <= ke; ke--)
              if (typeof Te[ke].stack == "string") {
                Re._debugOwner = Te[ke], Re._debugTask = Te[ke].debugTask;
                break;
              }
          }
          return Re;
        } finally {
          Ie = fe;
        }
      };
    }
    function Bt(e, t) {
      var n = pl(e);
      return e = !n && typeof ze(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        n,
        t,
        n
      ), !1) : !0;
    }
    function at(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function pu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function yl(e) {
      return {
        lane: e,
        tag: n2,
        payload: null,
        callback: null,
        next: null
      };
    }
    function gu(e, t, n) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, ib === i && !i2) {
        var o = de(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), i2 = !0;
      }
      return (rt & Kl) !== nn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Ms(e), Wm(e, null, n), t) : (Zo(e, i, t, n), Ms(e));
    }
    function ya(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, No(e, n);
      }
    }
    function Bs(e, t) {
      var n = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, n === i)) {
        var o = null, f = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var d = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, n = n.next;
          } while (n !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function Io() {
      if (cb) {
        var e = fm;
        if (e !== null) throw e;
      }
    }
    function yu(e, t, n, i) {
      cb = !1;
      var o = e.updateQueue;
      Pf = !1, ib = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, y = g.next;
        g.next = null, d === null ? f = y : d.next = y, d = g;
        var _ = e.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== d && (h === null ? _.firstBaseUpdate = y : h.next = y, _.lastBaseUpdate = g));
      }
      if (f !== null) {
        var U = o.baseState;
        d = 0, _ = y = g = null, h = f;
        do {
          var A = h.lane & -536870913, L = A !== h.lane;
          if (L ? (Pe & A) === A : (i & A) === A) {
            A !== 0 && A === Lr && (cb = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              A = e;
              var ce = h, re = t, Vt = n;
              switch (ce.tag) {
                case a2:
                  if (ce = ce.payload, typeof ce == "function") {
                    cm = !0;
                    var ot = ce.call(
                      Vt,
                      U,
                      re
                    );
                    if (A.mode & Hn) {
                      Ot(!0);
                      try {
                        ce.call(Vt, U, re);
                      } finally {
                        Ot(!1);
                      }
                    }
                    cm = !1, U = ot;
                    break e;
                  }
                  U = ce;
                  break e;
                case ub:
                  A.flags = A.flags & -65537 | 128;
                case n2:
                  if (ot = ce.payload, typeof ot == "function") {
                    if (cm = !0, ce = ot.call(
                      Vt,
                      U,
                      re
                    ), A.mode & Hn) {
                      Ot(!0);
                      try {
                        ot.call(Vt, U, re);
                      } finally {
                        Ot(!1);
                      }
                    }
                    cm = !1;
                  } else ce = ot;
                  if (ce == null) break e;
                  U = We({}, U, ce);
                  break e;
                case u2:
                  Pf = !0;
              }
            }
            A = h.callback, A !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [A] : L.push(A));
          } else
            L = {
              lane: A,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (y = _ = L, g = U) : _ = _.next = L, d |= A;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            L = h, h = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (g = U), o.baseState = g, o.firstBaseUpdate = y, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), ls |= d, e.lanes = d, e.memoizedState = U;
      }
      ib = null;
    }
    function Xi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function f0(e, t) {
      var n = e.shared.hiddenCallbacks;
      if (n !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++)
          Xi(n[e], t);
    }
    function Po(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Xi(n[e], t);
    }
    function Bd(e, t) {
      var n = vc;
      oe(Rv, n, e), oe(dm, t, e), vc = n | t.baseLanes;
    }
    function ci(e) {
      oe(Rv, vc, e), oe(
        dm,
        dm.current,
        e
      );
    }
    function Ya(e) {
      vc = Rv.current, Ae(dm, e), Ae(Rv, e);
    }
    function dn(e) {
      var t = e.alternate;
      oe(
        Tl,
        Tl.current & hm,
        e
      ), oe(eu, e, e), Zu === null && (t === null || dm.current !== null || t.memoizedState !== null) && (Zu = e);
    }
    function La(e) {
      oe(Tl, Tl.current, e), oe(eu, e, e), Zu === null && (Zu = e);
    }
    function qd(e) {
      e.tag === 22 ? (oe(Tl, Tl.current, e), oe(eu, e, e), Zu === null && (Zu = e)) : vu(e);
    }
    function vu(e) {
      oe(Tl, Tl.current, e), oe(
        eu,
        eu.current,
        e
      );
    }
    function Ml(e) {
      Ae(eu, e), Zu === e && (Zu = null), Ae(Tl, e);
    }
    function Lc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || vr(n) || ip(n)))
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
    function Le() {
      var e = V;
      Ku === null ? Ku = [e] : Ku.push(e);
    }
    function I() {
      var e = V;
      if (Ku !== null && (Do++, Ku[Do] !== e)) {
        var t = de(Ge);
        if (!c2.has(t) && (c2.add(t), Ku !== null)) {
          for (var n = "", i = 0; i <= Do; i++) {
            var o = Ku[i], f = i === Do ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, n += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            n
          );
        }
      }
    }
    function oi(e) {
      e == null || pl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        V,
        typeof e
      );
    }
    function qs() {
      var e = de(Ge);
      f2.has(e) || (f2.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function tl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function s0(e, t) {
      if (cg) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          V
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        V,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!na(e[n], t[n])) return !1;
      return !0;
    }
    function r0(e, t, n, i, o, f) {
      zo = f, Ge = t, Ku = e !== null ? e._debugHookTypes : null, Do = -1, cg = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (f = de(Ge), ob.has(f) || (ob.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Q.H = e !== null && e.memoizedState !== null ? sb : Ku !== null ? s2 : fb, Zr = f = (t.mode & Hn) !== je;
      var d = tb(n, i, o);
      if (Zr = !1, pm && (d = js(
        t,
        n,
        i,
        o
      )), f) {
        Ot(!0);
        try {
          d = js(
            t,
            n,
            i,
            o
          );
        } finally {
          Ot(!1);
        }
      }
      return cl(e, t), d;
    }
    function cl(e, t) {
      t._debugHookTypes = Ku, t.dependencies === null ? Ao !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ao
      }) : t.dependencies._debugThenableState = Ao, Q.H = og;
      var n = Yt !== null && Yt.next !== null;
      if (zo = 0, Ku = V = xl = Yt = Ge = null, Do = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), _v = !1, ig = 0, Ao = null, n)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Bl || (e = e.dependencies, e !== null && ko(e) && (Bl = !0)), ng ? (ng = !1, e = !0) : e = !1, e && (t = de(t) || "Unknown", o2.has(t) || ob.has(t) || (o2.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function js(e, t, n, i) {
      Ge = e;
      var o = 0;
      do {
        if (pm && (Ao = null), ig = 0, pm = !1, o >= Oz)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, cg = !1, xl = Yt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Do = -1, Q.H = r2, f = tb(t, n, i);
      } while (pm);
      return f;
    }
    function Ys() {
      var e = Q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Vs(t) : t, e = e.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== e && (Ge.flags |= 1024), t;
    }
    function Gc() {
      var e = Cv !== 0;
      return Cv = 0, e;
    }
    function Ls(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & zi) !== je ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~n;
    }
    function Qi(e) {
      if (_v) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        _v = !1;
      }
      zo = 0, Ku = xl = Yt = Ge = null, Do = -1, V = null, pm = !1, ig = Cv = 0, Ao = null;
    }
    function hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return xl === null ? Ge.memoizedState = xl = e : xl = xl.next = e, xl;
    }
    function Tt() {
      if (Yt === null) {
        var e = Ge.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Yt.next;
      var t = xl === null ? Ge.memoizedState : xl.next;
      if (t !== null)
        xl = t, Yt = e;
      else {
        if (e === null)
          throw Ge.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Yt = e, e = {
          memoizedState: Yt.memoizedState,
          baseState: Yt.baseState,
          baseQueue: Yt.baseQueue,
          queue: Yt.queue,
          next: null
        }, xl === null ? Ge.memoizedState = xl = e : xl = xl.next = e;
      }
      return xl;
    }
    function Gs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Vs(e) {
      var t = ig;
      return ig += 1, Ao === null && (Ao = Hd()), e = Xn(Ao, e, t), t = Ge, (xl === null ? t.memoizedState : xl.next) === null && (t = t.alternate, Q.H = t !== null && t.memoizedState !== null ? sb : fb), e;
    }
    function fi(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Vs(e);
        if (e.$$typeof === Wa) return yt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Zn(e) {
      var t = null, n = Ge.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var i = Ge.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gs(), Ge.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || cg)
        for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
          n[i] = M1;
      else
        n.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          n.length,
          e
        );
      return t.index++, n;
    }
    function Jn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ef(e, t, n) {
      var i = hl();
      if (n !== void 0) {
        var o = n(t);
        if (Zr) {
          Ot(!0);
          try {
            n(t);
          } finally {
            Ot(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = z1.bind(
        null,
        Ge,
        e
      ), [i.memoizedState, e];
    }
    function Vc(e) {
      var t = Tt();
      return Zi(t, Yt, e);
    }
    function Zi(e, t, n) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = n;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, g = null, y = t, _ = !1;
        do {
          var U = y.lane & -536870913;
          if (U !== y.lane ? (Pe & U) === U : (zo & U) === U) {
            var A = y.revertLane;
            if (A === 0)
              g !== null && (g = g.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null
              }), U === Lr && (_ = !0);
            else if ((zo & A) === A) {
              y = y.next, A === Lr && (_ = !0);
              continue;
            } else
              U = {
                lane: 0,
                revertLane: y.revertLane,
                gesture: null,
                action: y.action,
                hasEagerState: y.hasEagerState,
                eagerState: y.eagerState,
                next: null
              }, g === null ? (h = g = U, d = f) : g = g.next = U, Ge.lanes |= A, ls |= A;
            U = y.action, Zr && n(f, U), f = y.hasEagerState ? y.eagerState : n(f, U);
          } else
            A = {
              lane: U,
              revertLane: y.revertLane,
              gesture: y.gesture,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, g === null ? (h = g = A, d = f) : g = g.next = A, Ge.lanes |= U, ls |= U;
          y = y.next;
        } while (y !== null && y !== t);
        if (g === null ? d = f : g.next = h, !na(f, e.memoizedState) && (Bl = !0, _ && (n = fm, n !== null)))
          throw n;
        e.memoizedState = f, e.baseState = d, e.baseQueue = g, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Xc(e) {
      var t = Tt(), n = t.queue;
      if (n === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      n.lastRenderedReducer = e;
      var i = n.dispatch, o = n.pending, f = t.memoizedState;
      if (o !== null) {
        n.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        na(f, t.memoizedState) || (Bl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
      }
      return [f, i];
    }
    function tf(e, t, n) {
      var i = Ge, o = hl();
      if (it) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = n();
        mm || f === n() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), mm = !0);
      } else {
        if (f = t(), mm || (n = t(), na(f, n) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), mm = !0)), Lt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Pe & 127) !== 0 || d0(i, t, f);
      }
      return o.memoizedState = f, n = { value: f, getSnapshot: t }, o.queue = n, Jc(
        Ji.bind(null, i, n, e),
        [e]
      ), i.flags |= 2048, bu(
        Ju | ia,
        { destroy: void 0 },
        h0.bind(
          null,
          i,
          n,
          f,
          t
        ),
        null
      ), f;
    }
    function Qc(e, t, n) {
      var i = Ge, o = Tt(), f = it;
      if (f) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        n = n();
      } else if (n = t(), !mm) {
        var d = t();
        na(n, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), mm = !0);
      }
      (d = !na(
        (Yt || o).memoizedState,
        n
      )) && (o.memoizedState = n, Bl = !0), o = o.queue;
      var h = Ji.bind(null, i, o, e);
      if (vl(2048, ia, h, [e]), o.getSnapshot !== t || d || xl !== null && xl.memoizedState.tag & Ju) {
        if (i.flags |= 2048, bu(
          Ju | ia,
          { destroy: void 0 },
          h0.bind(
            null,
            i,
            o,
            n,
            t
          ),
          null
        ), Lt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (zo & 127) !== 0 || d0(i, t, n);
      }
      return n;
    }
    function d0(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ge.updateQueue, t === null ? (t = Gs(), Ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function h0(e, t, n, i) {
      t.value = n, t.getSnapshot = i, Ki(t) && m0(e);
    }
    function Ji(e, t, n) {
      return n(function() {
        Ki(t) && (hu(2, "updateSyncExternalStore()", e), m0(e));
      });
    }
    function Ki(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !na(e, n);
      } catch {
        return !0;
      }
    }
    function m0(e) {
      var t = Wl(e, 2);
      t !== null && Ye(t, e, 2);
    }
    function jd(e) {
      var t = hl();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), Zr) {
          Ot(!0);
          try {
            n();
          } finally {
            Ot(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jn,
        lastRenderedState: e
      }, t;
    }
    function ki(e) {
      e = jd(e);
      var t = e.queue, n = Qd.bind(null, Ge, t);
      return t.dispatch = n, [e.memoizedState, n];
    }
    function Zc(e) {
      var t = hl();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = $s.bind(
        null,
        Ge,
        !0,
        n
      ), n.dispatch = t, [e, t];
    }
    function Xs(e, t) {
      var n = Tt();
      return lf(n, Yt, e, t);
    }
    function lf(e, t, n, i) {
      return e.baseState = n, Zi(
        e,
        Yt,
        typeof i == "function" ? i : Jn
      );
    }
    function Qs(e, t) {
      var n = Tt();
      return Yt !== null ? lf(n, Yt, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }
    function ay(e, t, n, i, o) {
      if (_l(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Q.T !== null ? n(!0) : f.isTransition = !1, i(f), n = t.pending, n === null ? (f.next = t.pending = f, $i(t, f)) : (f.next = n.next, t.pending = n.next = f);
      }
    }
    function $i(e, t) {
      var n = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Q.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), Q.T = d;
        try {
          var h = n(o, i), g = Q.S;
          g !== null && g(d, h), p0(e, t, h);
        } catch (y) {
          Zs(e, t, y);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), Q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = n(o, i), p0(e, t, d);
        } catch (y) {
          Zs(e, t, y);
        }
    }
    function p0(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? (Q.asyncTransitions++, n.then(Kc, Kc), n.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return Zs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, n);
    }
    function si(e, t, n) {
      t.status = "fulfilled", t.value = n, Yd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, $i(e, n)));
    }
    function Zs(e, t, n) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = n, Yd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Yd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ri(e, t) {
      return t;
    }
    function Kn(e, t) {
      if (it) {
        var n = Lt.formState;
        if (n !== null) {
          e: {
            var i = Ge;
            if (it) {
              if (kt) {
                t: {
                  for (var o = kt, f = Xu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Pn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Nb || f === W2 ? o : null;
                }
                if (o) {
                  kt = Pn(
                    o.nextSibling
                  ), i = o.data === Nb;
                  break e;
                }
              }
              da(i);
            }
            i = !1;
          }
          i && (t = n[0]);
        }
      }
      return n = hl(), n.memoizedState = n.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ri,
        lastRenderedState: t
      }, n.queue = i, n = Qd.bind(
        null,
        Ge,
        i
      ), i.dispatch = n, i = jd(!1), f = $s.bind(
        null,
        Ge,
        !1,
        i.queue
      ), i = hl(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, n = ay.bind(
        null,
        Ge,
        o,
        f,
        n
      ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
    }
    function Wi(e) {
      var t = Tt();
      return Ld(t, Yt, e);
    }
    function Ld(e, t, n) {
      if (t = Zi(
        e,
        t,
        ri
      )[0], e = Vc(Jn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Vs(t);
        } catch (d) {
          throw d === sm ? Dv : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return n !== t.memoizedState && (Ge.flags |= 2048, bu(
        Ju | ia,
        { destroy: void 0 },
        g0.bind(null, o, n),
        null
      )), [i, f, e];
    }
    function g0(e, t) {
      e.action = t;
    }
    function Fi(e) {
      var t = Tt(), n = Yt;
      if (n !== null)
        return Ld(t, n, e);
      Tt(), t = t.memoizedState, n = Tt();
      var i = n.queue.dispatch;
      return n.memoizedState = e, [t, i, !1];
    }
    function bu(e, t, n, i) {
      return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = Ge.updateQueue, t === null && (t = Gs(), Ge.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Gd(e) {
      var t = hl();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ii(e, t, n, i) {
      var o = hl();
      Ge.flags |= e, o.memoizedState = bu(
        Ju | t,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i
      );
    }
    function vl(e, t, n, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Yt !== null && i !== null && s0(i, Yt.memoizedState.deps) ? o.memoizedState = bu(t, f, n, i) : (Ge.flags |= e, o.memoizedState = bu(
        Ju | t,
        f,
        n,
        i
      ));
    }
    function Jc(e, t) {
      (Ge.mode & zi) !== je ? Ii(276826112, ia, e, t) : Ii(8390656, ia, e, t);
    }
    function uy(e) {
      Ge.flags |= 4;
      var t = Ge.updateQueue;
      if (t === null)
        t = Gs(), Ge.updateQueue = t, t.events = [e];
      else {
        var n = t.events;
        n === null ? t.events = [e] : n.push(e);
      }
    }
    function Js(e) {
      var t = hl(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((rt & Kl) !== nn)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return n.impl.apply(void 0, arguments);
      };
    }
    function nf(e) {
      var t = Tt().memoizedState;
      return uy({ ref: t, nextImpl: e }), function() {
        if ((rt & Kl) !== nn)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function hn(e, t) {
      var n = 4194308;
      return (Ge.mode & zi) !== je && (n |= 134217728), Ii(n, tu, e, t);
    }
    function kn(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Su(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null;
      var i = 4194308;
      (Ge.mode & zi) !== je && (i |= 134217728), Ii(
        i,
        tu,
        kn.bind(null, t, e),
        n
      );
    }
    function af(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null, vl(
        4,
        tu,
        kn.bind(null, t, e),
        n
      );
    }
    function Vd(e, t) {
      return hl().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ga(e, t) {
      var n = Tt();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      return t !== null && s0(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
    }
    function mn(e, t) {
      var n = hl();
      t = t === void 0 ? null : t;
      var i = e();
      if (Zr) {
        Ot(!0);
        try {
          e();
        } finally {
          Ot(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function Qt(e, t) {
      var n = Tt();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      if (t !== null && s0(t, i[1]))
        return i[0];
      if (i = e(), Zr) {
        Ot(!0);
        try {
          e();
        } finally {
          Ot(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function uf(e, t) {
      var n = hl();
      return zt(n, e, t);
    }
    function Eu(e, t) {
      var n = Tt();
      return ol(
        n,
        Yt.memoizedState,
        e,
        t
      );
    }
    function Qe(e, t) {
      var n = Tt();
      return Yt === null ? zt(n, e, t) : ol(
        n,
        Yt.memoizedState,
        e,
        t
      );
    }
    function zt(e, t, n) {
      return n === void 0 || (zo & 1073741824) !== 0 && (Pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = mf(), Ge.lanes |= e, ls |= e, n);
    }
    function ol(e, t, n, i) {
      return na(n, t) ? n : dm.current !== null ? (e = zt(e, n, i), na(e, t) || (Bl = !0), e) : (zo & 42) === 0 || (zo & 1073741824) !== 0 && (Pe & 261930) === 0 ? (Bl = !0, e.memoizedState = n) : (e = mf(), Ge.lanes |= e, ls |= e, t);
    }
    function Kc() {
      Q.asyncTransitions--;
    }
    function kc(e, t, n, i, o) {
      var f = bt.p;
      bt.p = f !== 0 && f < Zl ? f : Zl;
      var d = Q.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), Q.T = h, $s(e, !1, t, n);
      try {
        var g = o(), y = Q.S;
        if (y !== null && y(h, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          Q.asyncTransitions++, g.then(Kc, Kc);
          var _ = Nd(
            g,
            i
          );
          $c(
            e,
            t,
            _,
            Il(e)
          );
        } else
          $c(
            e,
            t,
            i,
            Il(e)
          );
      } catch (U) {
        $c(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: U },
          Il(e)
        );
      } finally {
        bt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), Q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function di(e, t, n, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ks(e).queue;
      ly(e), kc(
        e,
        o,
        t,
        ld,
        n === null ? te : function() {
          return cf(e), n(i);
        }
      );
    }
    function Ks(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ld,
        baseState: ld,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Jn,
          lastRenderedState: ld
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
          lastRenderedReducer: Jn,
          lastRenderedState: n
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function cf(e) {
      Q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Ks(e);
      t.next === null && (t = e.alternate.memoizedState), $c(
        e,
        t.next.queue,
        {},
        Il(e)
      );
    }
    function Pi() {
      var e = jd(!1);
      return e = kc.bind(
        null,
        Ge,
        e.queue,
        !0,
        !1
      ), hl().memoizedState = e, [!1, e];
    }
    function iy() {
      var e = Vc(Jn)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Vs(e),
        t
      ];
    }
    function Wt() {
      var e = Xc(Jn)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Vs(e),
        t
      ];
    }
    function hi() {
      return yt(zg);
    }
    function ks() {
      var e = hl(), t = Lt.identifierPrefix;
      if (it) {
        var n = vo, i = yo;
        n = (i & ~(1 << 32 - Ql(i) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Cv++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Dz++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Xd() {
      return hl().memoizedState = cy.bind(
        null,
        Ge
      );
    }
    function cy(e, t) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var i = Il(n), o = yl(i), f = gu(n, o, i);
            f !== null && (hu(i, "refresh()", e), Ye(f, n, i), ya(f, n, i)), e = Ud(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        n = n.return;
      }
    }
    function z1(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Il(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      _l(e) ? ll(t, o) : (o = Cc(e, t, o, i), o !== null && (hu(i, "dispatch()", e), Ye(o, e, i), Ws(o, t, i)));
    }
    function Qd(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Il(e), $c(e, t, n, i) && hu(i, "setState()", e);
    }
    function $c(e, t, n, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_l(e)) ll(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Q.H;
          Q.H = Di;
          try {
            var h = t.lastRenderedState, g = f(h, n);
            if (o.hasEagerState = !0, o.eagerState = g, na(g, h))
              return Zo(e, t, o, 0), Lt === null && Dd(), !1;
          } catch {
          } finally {
            Q.H = d;
          }
        }
        if (n = Cc(e, t, o, i), n !== null)
          return Ye(n, e, i), Ws(n, t, i), !0;
      }
      return !1;
    }
    function $s(e, t, n, i) {
      if (Q.T === null && Lr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: np(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, _l(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Cc(
          e,
          n,
          i,
          2
        ), t !== null && (hu(2, "setOptimistic()", e), Ye(t, e, 2));
    }
    function _l(e) {
      var t = e.alternate;
      return e === Ge || t !== null && t === Ge;
    }
    function ll(e, t) {
      pm = _v = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Ws(e, t, n) {
      if ((n & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, No(e, n);
      }
    }
    function Wc(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        T2.has(t) || (T2.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function of(e, t, n, i) {
      var o = e.memoizedState, f = n(i, o);
      if (e.mode & Hn) {
        Ot(!0);
        try {
          f = n(i, o);
        } finally {
          Ot(!1);
        }
      }
      f === void 0 && (t = Se(t) || "Component", v2.has(t) || (v2.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : We({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Zd(e, t, n, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (n = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Hn) {
          Ot(!0);
          try {
            n = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Ot(!1);
          }
        }
        return n === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Se(t) || "Component"
        ), n;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qo(n, i) || !Qo(o, f) : !0;
    }
    function Tu(e, t, n, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== o && (e = de(e) || "Component", h2.has(e) || (h2.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), rb.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function zu(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var i in t)
          i !== "ref" && (n[i] = t[i]);
      }
      if (e = e.defaultProps) {
        n === t && (n = We({}, n));
        for (var o in e)
          n[o] === void 0 && (n[o] = e[o]);
      }
      return n;
    }
    function Jd(e) {
      V1(e), console.warn(
        `%s

%s
`,
        gm ? "An error occurred in the <" + gm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Kd(e) {
      var t = gm ? "The above error occurred in the <" + gm + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((db || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          n
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          aE + " " + e[0],
          uE,
          t1 + i + t1,
          iE
        ) : e.splice(
          0,
          0,
          aE,
          uE,
          t1 + i + t1,
          iE
        ), e.unshift(console), i = Jz.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          n
        );
    }
    function y0(e) {
      V1(e);
    }
    function Fs(e, t) {
      try {
        gm = t.source ? de(t.source) : null, db = null;
        var n = t.value;
        if (Q.actQueue !== null)
          Q.thrownErrors.push(n);
        else {
          var i = e.onUncaughtError;
          i(n, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function v0(e, t, n) {
      try {
        gm = n.source ? de(n.source) : null, db = de(t);
        var i = e.onCaughtError;
        i(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function kd(e, t, n) {
      return n = yl(n), n.tag = ub, n.payload = { element: null }, n.callback = function() {
        he(t.source, Fs, e, t);
      }, n;
    }
    function $d(e) {
      return e = yl(e), e.tag = ub, e;
    }
    function Wd(e, t, n, i) {
      var o = n.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Uc(n), he(
            i.source,
            v0,
            t,
            n,
            i
          );
        };
      }
      var d = n.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Uc(n), he(
          i.source,
          v0,
          t,
          n,
          i
        ), typeof o != "function" && (as === null ? as = /* @__PURE__ */ new Set([this]) : as.add(this)), Ez(this, i), typeof o == "function" || (n.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          de(n) || "Unknown"
        );
      });
    }
    function b0(e, t, n, i, o) {
      if (n.flags |= 32768, Bu && bf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = n.alternate, t !== null && Ba(
          t,
          n,
          o,
          !0
        ), it && (pc = !0), n = eu.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return Zu === null ? gf() : n.alternate === null && al === Ro && (al = Nv), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Ov ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), gh(e, i, o)), !1;
            case 22:
              return n.flags |= 65536, i === Ov ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), gh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React."
          );
        }
        return gh(e, i, o), gf(), !1;
      }
      if (it)
        return pc = !0, t = eu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== k1 && Cs(
          on(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            n
          )
        )) : (i !== k1 && Cs(
          on(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            n
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = on(i, n), o = kd(
          e.stateNode,
          i,
          o
        ), Bs(e, o), al !== es && (al = Jr)), !1;
      var f = on(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        n
      );
      if (mg === null ? mg = [f] : mg.push(f), al !== es && (al = Jr), t === null) return !0;
      i = on(i, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = o & -o, n.lanes |= e, e = kd(
              n.stateNode,
              i,
              e
            ), Bs(n, e), !1;
          case 1:
            if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (as === null || !as.has(f))))
              return n.flags |= 65536, o &= -o, n.lanes |= o, o = $d(o), Wd(
                o,
                e,
                n,
                i
              ), Bs(n, o), !1;
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    function Cl(e, t, n, i) {
      t.child = e === null ? l2(t, null, n, i) : Qr(
        t,
        e.child,
        n,
        i
      );
    }
    function oy(e, t, n, i, o) {
      n = n.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Vi(t), i = r0(
        e,
        t,
        n,
        d,
        f,
        o
      ), h = Gc(), e !== null && !Bl ? (Ls(e, t, o), Va(e, t, o)) : (it && h && Md(t), t.flags |= 1, Cl(e, t, i, o), t.child);
    }
    function S0(e, t, n, i, o) {
      if (e === null) {
        var f = n.type;
        return typeof f == "function" && !Im(f) && f.defaultProps === void 0 && n.compare === null ? (n = qi(f), t.tag = 15, t.type = n, ff(t, f), E0(
          e,
          t,
          n,
          i,
          o
        )) : (e = wc(
          n.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !th(e, o)) {
        var d = f.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Qo, n(d, i) && e.ref === t.ref)
          return Va(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = du(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function E0(e, t, n, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Qo(f, i) && e.ref === t.ref && t.type === e.type)
          if (Bl = !1, t.pendingProps = i = f, th(e, o))
            (e.flags & 131072) !== 0 && (Bl = !0);
          else
            return t.lanes = e.lanes, Va(e, t, o);
      }
      return D0(
        e,
        t,
        n,
        i,
        o
      );
    }
    function T0(e, t, n, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Xp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | n : n, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return z0(
            e,
            t,
            f,
            n,
            i
          );
        }
        if ((n & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Wo(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Bd(t, f) : ci(t), qd(t);
        else
          return i = t.lanes = 536870912, z0(
            e,
            t,
            f !== null ? f.baseLanes | n : n,
            n,
            i
          );
      } else
        f !== null ? (Wo(t, f.cachePool), Bd(t, f), vu(t), t.memoizedState = null) : (e !== null && Wo(t, null), ci(t), vu(t));
      return Cl(e, t, o, n), t.child;
    }
    function Fc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Xp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function z0(e, t, n, i, o) {
      var f = ii();
      return f = f === null ? null : {
        parent: Nl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: n,
        cachePool: f
      }, e !== null && Wo(t, null), ci(t), qd(t), e !== null && Ba(e, t, i, !0), t.childLanes = o, null;
    }
    function Is(e, t) {
      var n = t.hidden;
      return n !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        n === !0 ? "hidden" : n === !1 ? "hidden={false}" : "hidden={...}",
        n ? 'mode="hidden"' : 'mode="visible"'
      ), t = er(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function A0(e, t, n) {
      return Qr(t, e.child, null, n), e = Is(
        t,
        t.pendingProps
      ), e.flags |= 2, Ml(t), t.memoizedState = null, e;
    }
    function fy(e, t, n) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = Is(t, i), t.lanes = 536870912, Fc(null, e);
          if (La(t), (e = kt) ? (n = Dt(
            e,
            Xu
          ), n = n !== null && n.data === Ir ? n : null, n !== null && (i = {
            dehydrated: n,
            treeContext: Pg(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = e0(n), i.return = t, t.child = i, zn = t, kt = null)) : n = null, n === null)
            throw Fl(t, e), da(t);
          return t.lanes = 536870912, null;
        }
        return Is(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (La(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = A0(
              e,
              t,
              n
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (ty(), (n & 536870912) !== 0 && pf(t), Bl || Ba(
          e,
          t,
          n,
          !1
        ), o = (n & e.childLanes) !== 0, Bl || o) {
          if (i = Lt, i !== null && (d = Ui(
            i,
            n
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Wl(e, d), Ye(i, e, d), hb;
          gf(), t = A0(
            e,
            t,
            n
          );
        } else
          e = f.treeContext, kt = Pn(
            d.nextSibling
          ), zn = t, it = !0, kf = null, pc = !1, Pa = null, Xu = !1, e !== null && ey(t, e), t = Is(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (n & 536870912) !== 0 && (n & e.lanes) !== 0 && pf(t), e = du(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ps(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function D0(e, t, n, i, o) {
      if (n.prototype && typeof n.prototype.render == "function") {
        var f = Se(n) || "Unknown";
        z2[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), z2[f] = !0);
      }
      return t.mode & Hn && Ai.recordLegacyContextWarning(
        t,
        null
      ), e === null && (ff(t, t.type), n.contextTypes && (f = Se(n) || "Unknown", D2[f] || (D2[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Vi(t), n = r0(
        e,
        t,
        n,
        i,
        void 0,
        o
      ), i = Gc(), e !== null && !Bl ? (Ls(e, t, o), Va(e, t, o)) : (it && i && Md(t), t.flags |= 1, Cl(e, t, n, o), t.child);
    }
    function O0(e, t, n, i, o, f) {
      return Vi(t), Do = -1, cg = e !== null && e.type !== t.type, t.updateQueue = null, n = js(
        t,
        i,
        n,
        o
      ), cl(e, t), i = Gc(), e !== null && !Bl ? (Ls(e, t, f), Va(e, t, f)) : (it && i && Md(t), t.flags |= 1, Cl(e, t, n, f), t.child);
    }
    function Ic(e, t, n, i, o) {
      switch (q(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Lt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = $d(h), Wd(
            h,
            d,
            t,
            on(f, t)
          ), Bs(t, h);
      }
      if (Vi(t), t.stateNode === null) {
        if (d = Kf, f = n.contextType, "contextType" in n && f !== null && (f === void 0 || f.$$typeof !== Wa) && !E2.has(n) && (E2.add(n), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === jh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Se(n) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = yt(f)), f = new n(i, d), t.mode & Hn) {
          Ot(!0);
          try {
            f = new n(i, d);
          } finally {
            Ot(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = rb, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = d2, typeof n.getDerivedStateFromProps == "function" && d === null && (d = Se(n) || "Component", m2.has(d) || (m2.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var g = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), d !== null || h !== null || g !== null) {
            f = Se(n) || "Component";
            var y = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            g2.has(f) || (g2.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              y,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              g !== null ? `
  ` + g : ""
            ));
          }
        }
        f = t.stateNode, d = Se(n) || "Component", f.render || (n.prototype && typeof n.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), n.childContextTypes && !S2.has(n) && (S2.add(n), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), n.contextTypes && !b2.has(n) && (b2.add(n), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), n.prototype && n.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Se(n) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || p2.has(n) || (p2.add(n), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Se(n)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof n.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || pl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, at(t), d = n.contextType, f.context = typeof d == "object" && d !== null ? yt(d) : Kf, f.state === i && (d = Se(n) || "Component", y2.has(d) || (y2.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Hn && Ai.recordLegacyContextWarning(
          t,
          f
        ), Ai.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (of(
          t,
          n,
          d,
          i
        ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          de(t) || "Component"
        ), rb.enqueueReplaceState(
          f,
          f.state,
          null
        )), yu(t, i, f, o), Io(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zi) !== je && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var _ = t.memoizedProps;
        h = zu(n, _), f.props = h;
        var U = f.context;
        g = n.contextType, d = Kf, typeof g == "object" && g !== null && (d = yt(g)), y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, g || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || U !== d) && Tu(
          t,
          f,
          i,
          d
        ), Pf = !1;
        var A = t.memoizedState;
        f.state = A, yu(t, i, f, o), Io(), U = t.memoizedState, _ || A !== U || Pf ? (typeof y == "function" && (of(
          t,
          n,
          y,
          i
        ), U = t.memoizedState), (h = Pf || Zd(
          t,
          n,
          h,
          i,
          A,
          U,
          d
        )) ? (g || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zi) !== je && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zi) !== je && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = U), f.props = i, f.state = U, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & zi) !== je && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, pu(e, t), d = t.memoizedProps, g = zu(n, d), f.props = g, y = t.pendingProps, A = f.context, U = n.contextType, h = Kf, typeof U == "object" && U !== null && (h = yt(U)), _ = n.getDerivedStateFromProps, (U = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== y || A !== h) && Tu(
          t,
          f,
          i,
          h
        ), Pf = !1, A = t.memoizedState, f.state = A, yu(t, i, f, o), Io();
        var L = t.memoizedState;
        d !== y || A !== L || Pf || e !== null && e.dependencies !== null && ko(e.dependencies) ? (typeof _ == "function" && (of(
          t,
          n,
          _,
          i
        ), L = t.memoizedState), (g = Pf || Zd(
          t,
          n,
          g,
          i,
          A,
          L,
          h
        ) || e !== null && e.dependencies !== null && ko(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, L, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          L,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = h, f = g) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Ps(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ci(t), d && typeof n.getDerivedStateFromError != "function")
          n = null, aa = -1;
        else if (n = VS(h), t.mode & Hn) {
          Ot(!0);
          try {
            VS(h);
          } finally {
            Ot(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Qr(
          t,
          e.child,
          null,
          o
        ), t.child = Qr(
          t,
          null,
          n,
          o
        )) : Cl(e, t, n, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Va(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (ym || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        de(t) || "a component"
      ), ym = !0), e;
    }
    function R0(e, t, n, i) {
      return Li(), t.flags |= 256, Cl(e, t, n, i), t.child;
    }
    function ff(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Se(t) || "Unknown", O2[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), O2[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Se(t) || "Unknown", A2[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), A2[t] = !0));
    }
    function sf(e) {
      return { baseLanes: e, cachePool: i0() };
    }
    function Fd(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Da), e;
    }
    function Id(e, t, n) {
      var i, o = t.pendingProps;
      H(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Tl.current & ug) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? dn(t) : vu(t), (e = kt) ? (n = Dt(
            e,
            Xu
          ), n = n !== null && n.data !== Ir ? n : null, n !== null && (i = {
            dehydrated: n,
            treeContext: Pg(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = e0(n), i.return = t, t.child = i, zn = t, kt = null)) : n = null, n === null)
            throw Fl(t, e), da(t);
          return ip(n) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          vu(t);
          var g = t.mode;
          return h = er(
            { mode: "hidden", children: h },
            g
          ), o = Nc(
            o,
            g,
            n,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = sf(n), o.childLanes = Fd(
            e,
            i,
            n
          ), t.memoizedState = mb, Fc(
            null,
            o
          );
        }
        return dn(t), M0(
          t,
          h
        );
      }
      var y = e.memoizedState;
      if (y !== null) {
        var _ = y.dehydrated;
        if (_ !== null) {
          if (d)
            t.flags & 256 ? (dn(t), t.flags &= -257, t = Pd(
              e,
              t,
              n
            )) : t.memoizedState !== null ? (vu(t), t.child = e.child, t.flags |= 128, t = null) : (vu(t), h = o.fallback, g = t.mode, o = er(
              {
                mode: "visible",
                children: o.children
              },
              g
            ), h = Nc(
              h,
              g,
              n,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Qr(
              t,
              e.child,
              null,
              n
            ), o = t.child, o.memoizedState = sf(n), o.childLanes = Fd(
              e,
              i,
              n
            ), t.memoizedState = mb, t = Fc(
              null,
              o
            ));
          else if (dn(t), ty(), (n & 536870912) !== 0 && pf(t), ip(
            _
          )) {
            if (i = _.nextSibling && _.nextSibling.dataset, i) {
              h = i.dgst;
              var U = i.msg;
              g = i.stck;
              var A = i.cstck;
            }
            f = U, i = h, o = g, _ = A, h = f, g = _, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = g === void 0 ? null : g, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && K1.set(
              h,
              o
            ), Cs(o), t = Pd(
              e,
              t,
              n
            );
          } else if (Bl || Ba(
            e,
            t,
            n,
            !1
          ), i = (n & e.childLanes) !== 0, Bl || i) {
            if (i = Lt, i !== null && (o = Ui(
              i,
              n
            ), o !== 0 && o !== y.retryLane))
              throw y.retryLane = o, Wl(
                e,
                o
              ), Ye(
                i,
                e,
                o
              ), hb;
            vr(
              _
            ) || gf(), t = Pd(
              e,
              t,
              n
            );
          } else
            vr(
              _
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, kt = Pn(
              _.nextSibling
            ), zn = t, it = !0, kf = null, pc = !1, Pa = null, Xu = !1, e !== null && ey(t, e), t = M0(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (vu(t), h = o.fallback, g = t.mode, A = e.child, _ = A.sibling, o = du(
        A,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = A.subtreeFlags & 65011712, _ !== null ? h = du(
        _,
        h
      ) : (h = Nc(
        h,
        g,
        n,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, Fc(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = sf(n) : (g = h.cachePool, g !== null ? (A = Nl._currentValue, g = g.parent !== A ? { parent: A, pool: A } : g) : g = i0(), h = {
        baseLanes: h.baseLanes | n,
        cachePool: g
      }), o.memoizedState = h, o.childLanes = Fd(
        e,
        i,
        n
      ), t.memoizedState = mb, Fc(
        e.child,
        o
      )) : (y !== null && (n & 62914560) === n && (n & e.lanes) !== 0 && pf(t), dn(t), n = e.child, e = n.sibling, n = du(n, {
        mode: "visible",
        children: o.children
      }), n.return = t, n.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function M0(e, t) {
      return t = er(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function er(e, t) {
      return e = X(22, e, null, t), e.lanes = 0, e;
    }
    function Pd(e, t, n) {
      return Qr(t, e.child, null, n), e = M0(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function _0(e, t, n) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Cd(
        e.return,
        t,
        n
      );
    }
    function eh(e, t, n, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = n, d.tailMode = o, d.treeForkCount = f);
    }
    function C0(e, t, n) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Tl.current;
      if ((i = (h & ug) !== 0) ? (h = h & hm | ug, t.flags |= 128) : h &= hm, oe(Tl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !R2[h])
        if (R2[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", wv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (wv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (wv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (wv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (pl(d)) {
          for (h = 0; h < d.length; h++)
            if (!Bt(
              d[h],
              h
            ))
              break e;
        } else if (h = ze(d), typeof h == "function") {
          if (h = h.call(d))
            for (var g = h.next(), y = 0; !g.done; g = h.next()) {
              if (!Bt(g.value, y)) break e;
              y++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Cl(e, t, d, n), it ? (Yi(), d = Qp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && _0(e, n, t);
          else if (e.tag === 19)
            _0(e, n, t);
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
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            e = n.alternate, e !== null && Lc(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), eh(
            t,
            !1,
            o,
            n,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Lc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          eh(
            t,
            !0,
            n,
            null,
            f,
            d
          );
          break;
        case "together":
          eh(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Va(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), aa = -1, ls |= t.lanes, (n & t.childLanes) === 0)
        if (e !== null) {
          if (Ba(
            e,
            t,
            n,
            !1
          ), (n & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, n = du(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
          e = e.sibling, n = n.sibling = du(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function th(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ko(e)));
    }
    function sy(e, t, n) {
      switch (t.tag) {
        case 3:
          _e(
            t,
            t.stateNode.containerInfo
          ), ha(
            t,
            Nl,
            e.memoizedState.cache
          ), Li();
          break;
        case 27:
        case 5:
          le(t);
          break;
        case 4:
          _e(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ha(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, La(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (dn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Id(
              e,
              t,
              n
            ) : (dn(t), e = Va(
              e,
              t,
              n
            ), e !== null ? e.sibling : null);
          dn(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (n & t.childLanes) !== 0, i || (Ba(
            e,
            t,
            n,
            !1
          ), i = (n & t.childLanes) !== 0), o) {
            if (i)
              return C0(
                e,
                t,
                n
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), oe(
            Tl,
            Tl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, T0(
            e,
            t,
            n,
            t.pendingProps
          );
        case 24:
          ha(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Va(e, t, n);
    }
    function tr(e, t, n) {
      if (t._debugNeedsRemount && e !== null) {
        n = wc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === i.child)
          i.child = n;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = n;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), n.flags |= 2, n;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Bl = !0;
        else {
          if (!th(e, n) && (t.flags & 128) === 0)
            return Bl = !1, sy(
              e,
              t,
              n
            );
          Bl = (e.flags & 131072) !== 0;
        }
      else
        Bl = !1, (i = it) && (Yi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Yi(), t0(t, Qp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Qn(t.elementType), t.type = e, typeof e == "function")
            Im(e) ? (i = zu(
              e,
              i
            ), t.tag = 1, t.type = e = qi(e), t = Ic(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, ff(t, e), t.type = e = qi(e), t = D0(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Nf) {
                t.tag = 11, t.type = e = Od(e), t = oy(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === Mr) {
                t.tag = 14, t = S0(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Pl && (t = " Did you wrap a component in React.lazy() more than once?"), n = Se(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + n + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return D0(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 1:
          return i = t.type, o = zu(
            i,
            t.pendingProps
          ), Ic(
            e,
            t,
            i,
            o,
            n
          );
        case 3:
          e: {
            if (_e(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, pu(e, t), yu(t, i, null, n);
            var d = t.memoizedState;
            if (i = d.cache, ha(t, Nl, i), i !== f.cache && ni(
              t,
              [Nl],
              n,
              !0
            ), Io(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = R0(
                  e,
                  t,
                  i,
                  n
                );
                break e;
              } else if (i !== o) {
                o = on(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Cs(o), t = R0(
                  e,
                  t,
                  i,
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
                for (kt = Pn(e.firstChild), zn = t, it = !0, kf = null, pc = !1, Pa = null, Xu = !0, n = l2(
                  t,
                  null,
                  i,
                  n
                ), t.child = n; n; )
                  n.flags = n.flags & -3 | 4096, n = n.sibling;
              }
            else {
              if (Li(), i === o) {
                t = Va(
                  e,
                  t,
                  n
                );
                break e;
              }
              Cl(
                e,
                t,
                i,
                n
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Ps(e, t), e === null ? (n = sp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = n : it || (n = t.type, e = t.pendingProps, i = $e(
            ea.current
          ), i = gr(
            i
          ).createElement(n), i[Jt] = t, i[Tn] = e, Zt(i, n, e), ul(i), t.stateNode = i) : t.memoizedState = sp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return le(t), e === null && it && (i = $e(ea.current), o = J(), i = t.stateNode = bi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), pc || (o = Un(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Hc(t, 0).serverProps = o)), zn = t, Xu = !0, o = kt, oc(t.type) ? (qb = o, kt = Pn(
            i.firstChild
          )) : kt = o), Cl(
            e,
            t,
            t.pendingProps.children,
            n
          ), Ps(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = J(), i = Ss(
            t.type,
            f.ancestorInfo
          ), o = kt, (d = !o) || (d = Ly(
            o,
            t.type,
            t.pendingProps,
            Xu
          ), d !== null ? (t.stateNode = d, pc || (f = Un(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Hc(t, 0).serverProps = f)), zn = t, kt = Pn(
            d.firstChild
          ), Xu = !1, f = !0) : f = !1, d = !f), d && (i && Fl(t, o), da(t))), le(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Af(o, f) ? i = null : d !== null && Af(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = r0(
            e,
            t,
            Ys,
            null,
            null,
            n
          ), zg._currentValue = o), Ps(e, t), Cl(
            e,
            t,
            i,
            n
          ), t.child;
        case 6:
          return e === null && it && (n = t.pendingProps, e = J(), i = e.ancestorInfo.current, n = i != null ? Es(
            n,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = kt, (i = !e) || (i = Gy(
            e,
            t.pendingProps,
            Xu
          ), i !== null ? (t.stateNode = i, zn = t, kt = null, i = !0) : i = !1, i = !i), i && (n && Fl(t, e), da(t))), null;
        case 13:
          return Id(e, t, n);
        case 4:
          return _e(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Qr(
            t,
            null,
            i,
            n
          ) : Cl(
            e,
            t,
            i,
            n
          ), t.child;
        case 11:
          return oy(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 7:
          return Cl(
            e,
            t,
            t.pendingProps,
            n
          ), t.child;
        case 8:
          return Cl(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Cl(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || M2 || (M2 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ha(t, i, f), Cl(
            e,
            t,
            o.children,
            n
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Vi(t), o = yt(o), i = tb(
            i,
            o,
            void 0
          ), t.flags |= 1, Cl(
            e,
            t,
            i,
            n
          ), t.child;
        case 14:
          return S0(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 15:
          return E0(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 19:
          return C0(
            e,
            t,
            n
          );
        case 31:
          return fy(e, t, n);
        case 22:
          return T0(
            e,
            t,
            n,
            t.pendingProps
          );
        case 24:
          return Vi(t), i = yt(Nl), e === null ? (o = ii(), o === null && (o = Lt, f = Ud(), o.pooledCache = f, Bc(f), f !== null && (o.pooledCacheLanes |= n), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, at(t), ha(t, Nl, o)) : ((e.lanes & n) !== 0 && (pu(e, t), yu(t, null, null, n), Io()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ha(t, Nl, i)) : (i = f.cache, ha(t, Nl, i), i !== o.cache && ni(
            t,
            [Nl],
            n,
            !0
          ))), Cl(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Au(e) {
      e.flags |= 4;
    }
    function lh(e, t, n, i, o) {
      if ((t = (e.mode & gz) !== je) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (k0()) e.flags |= 8192;
          else
            throw Xr = Ov, nb;
      } else e.flags &= -16777217;
    }
    function ry(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ku) !== td)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !nt(t))
        if (k0()) e.flags |= 8192;
        else
          throw Xr = Ov, nb;
    }
    function rf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? au() : 536870912, e.lanes |= t, $r |= t);
    }
    function df(e, t) {
      if (!it)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
              n.alternate !== null && (i = n), n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function _t(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
      if (t)
        if ((e.mode & Fe) !== je) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            n |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Fe) !== je) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          n |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = n, t;
    }
    function U0(e, t, n) {
      var i = t.pendingProps;
      switch (_d(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return _t(t), null;
        case 1:
          return _t(t), null;
        case 3:
          return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), xa(Nl, t), R(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (xc(t) ? (Gi(), Au(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _s())), _t(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Au(t), f !== null ? (_t(t), ry(
            t,
            f
          )) : (_t(t), lh(
            t,
            o,
            null,
            i,
            n
          ))) : f ? f !== e.memoizedState ? (Au(t), _t(t), ry(
            t,
            f
          )) : (_t(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Au(t), _t(t), lh(
            t,
            o,
            e,
            i,
            n
          )), null;
        case 27:
          if (ve(t), n = $e(ea.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Au(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return _t(t), null;
            }
            e = J(), xc(t) ? l0(t) : (e = bi(
              o,
              i,
              n,
              e,
              !0
            ), t.stateNode = e, Au(t));
          }
          return _t(t), null;
        case 5:
          if (ve(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Au(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return _t(t), null;
            }
            var d = J();
            if (xc(t))
              l0(t);
            else {
              switch (f = $e(ea.current), Ss(o, d.ancestorInfo), d = d.context, f = gr(f), d) {
                case Dm:
                  f = f.createElementNS(
                    Ke,
                    o
                  );
                  break;
                case Iv:
                  f = f.createElementNS(
                    Xe,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Ke,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Xe,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || ta.call(I2, o) || (I2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Jt] = t, f[Tn] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (Zt(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Au(t);
            }
          }
          return _t(t), lh(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            n
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Au(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = $e(ea.current), n = J(), xc(t)) {
              if (e = t.stateNode, n = t.memoizedProps, o = !pc, i = null, f = zn, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Qy(
                      e,
                      n,
                      i
                    ), o !== null && (Hc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Qy(
                      e,
                      n,
                      i
                    ), o !== null && (Hc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Jt] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || ap(e.nodeValue, n)), e || da(t, !0);
            } else
              o = n.ancestorInfo.current, o != null && Es(
                i,
                o.tag,
                n.ancestorInfo.implicitRootScope
              ), e = gr(e).createTextNode(
                i
              ), e[Jt] = t, t.stateNode = e;
          }
          return _t(t), null;
        case 31:
          if (n = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = xc(t), n !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Jt] = t, _t(t), (t.mode & Fe) !== je && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Gi(), Li(), (t.flags & 128) === 0 && (n = t.memoizedState = null), t.flags |= 4, _t(t), (t.mode & Fe) !== je && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              n = _s(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
            if (!e)
              return t.flags & 256 ? (Ml(t), t) : (Ml(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return _t(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = xc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Jt] = t, _t(t), (t.mode & Fe) !== je && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Gi(), Li(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, _t(t), (t.mode & Fe) !== je && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = _s(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Ml(t), t) : (Ml(t), null);
          }
          return Ml(t), (t.flags & 128) !== 0 ? (t.lanes = n, (t.mode & Fe) !== je && jc(t), t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), rf(t, t.updateQueue), _t(t), (t.mode & Fe) !== je && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return R(t), e === null && ic(
            t.stateNode.containerInfo
          ), _t(t), null;
        case 10:
          return xa(t.type, t), _t(t), null;
        case 19:
          if (Ae(Tl, t), i = t.memoizedState, i === null) return _t(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) df(i, !1);
            else {
              if (al !== Ro || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Lc(e), f !== null) {
                    for (t.flags |= 128, df(i, !1), e = f.updateQueue, t.updateQueue = e, rf(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                      Pm(n, e), n = n.sibling;
                    return oe(
                      Tl,
                      Tl.current & hm | ug,
                      t
                    ), it && Ha(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && wl() > Yv && (t.flags |= 128, o = !0, df(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Lc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, rf(t, e), df(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return _t(t), null;
              } else
                2 * wl() - i.renderingStartTime > Yv && n !== 536870912 && (t.flags |= 128, o = !0, df(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = wl(), e.sibling = null, n = Tl.current, n = o ? n & hm | ug : n & hm, oe(Tl, n, t), it && Ha(t, i.treeForkCount), e) : (_t(t), null);
        case 22:
        case 23:
          return Ml(t), Ya(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), n = t.updateQueue, n !== null && rf(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && Ae(Gr, t), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), xa(Nl, t), _t(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function dy(e, t) {
      switch (_d(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== je && jc(t), t) : null;
        case 3:
          return xa(Nl, t), R(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ve(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Ml(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Li();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== je && jc(t), t) : null;
        case 13:
          if (Ml(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Li();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== je && jc(t), t) : null;
        case 19:
          return Ae(Tl, t), null;
        case 4:
          return R(t), null;
        case 10:
          return xa(t.type, t), null;
        case 22:
        case 23:
          return Ml(t), Ya(t), e !== null && Ae(Gr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== je && jc(t), t) : null;
        case 24:
          return xa(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function w0(e, t) {
      switch (_d(t), t.tag) {
        case 3:
          xa(Nl, t), R(t);
          break;
        case 26:
        case 27:
        case 5:
          ve(t);
          break;
        case 4:
          R(t);
          break;
        case 31:
          t.memoizedState !== null && Ml(t);
          break;
        case 13:
          Ml(t);
          break;
        case 19:
          Ae(Tl, t);
          break;
        case 10:
          xa(t.type, t);
          break;
        case 22:
        case 23:
          Ml(t), Ya(t), e !== null && Ae(Gr, t);
          break;
        case 24:
          xa(Nl, t);
      }
    }
    function Du(e) {
      return (e.mode & Fe) !== je;
    }
    function hy(e, t) {
      Du(e) ? (el(), mi(t, e), sn()) : mi(t, e);
    }
    function nh(e, t, n) {
      Du(e) ? (el(), ec(
        n,
        e,
        t
      ), sn()) : ec(
        n,
        e,
        t
      );
    }
    function mi(e, t) {
      try {
        var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          n = o;
          do {
            if ((n.tag & e) === e && (i = void 0, (e & ua) !== Mv && (Tm = !0), i = he(
              t,
              Tz,
              n
            ), (e & ua) !== Mv && (Tm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (n.tag & tu) !== 0 ? "useLayoutEffect" : (n.tag & ua) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, he(
                t,
                function(h, g) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    g
                  );
                },
                f,
                d
              );
            }
            n = n.next;
          } while (n !== o);
        }
      } catch (h) {
        Je(t, t.return, h);
      }
    }
    function ec(e, t, n) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & ua) !== Mv && (Tm = !0), o = t, he(
                o,
                zz,
                o,
                n,
                h
              ), (e & ua) !== Mv && (Tm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (g) {
        Je(t, t.return, g);
      }
    }
    function lr(e, t) {
      Du(e) ? (el(), mi(t, e), sn()) : mi(t, e);
    }
    function ah(e, t, n) {
      Du(e) ? (el(), ec(
        n,
        e,
        t
      ), sn()) : ec(
        n,
        e,
        t
      );
    }
    function N0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || ym || (n.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          de(e) || "instance"
        ), n.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          de(e) || "instance"
        ));
        try {
          he(
            e,
            Po,
            t,
            n
          );
        } catch (i) {
          Je(e, e.return, i);
        }
      }
    }
    function nr(e, t, n) {
      return e.getSnapshotBeforeUpdate(t, n);
    }
    function my(e, t) {
      var n = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || ym || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        de(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        de(e) || "instance"
      ));
      try {
        var o = zu(
          e.type,
          n
        ), f = he(
          e,
          nr,
          t,
          o,
          i
        );
        n = _2, f !== void 0 || n.has(e.type) || (n.add(e.type), he(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            de(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Je(e, e.return, d);
      }
    }
    function uh(e, t, n) {
      n.props = zu(
        e.type,
        e.memoizedProps
      ), n.state = e.memoizedState, Du(e) ? (el(), he(
        e,
        kS,
        e,
        t,
        n
      ), sn()) : he(
        e,
        kS,
        e,
        t,
        n
      );
    }
    function py(e) {
      var t = e.ref;
      if (t !== null) {
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
        if (typeof t == "function")
          if (Du(e))
            try {
              el(), e.refCleanup = t(n);
            } finally {
              sn();
            }
          else e.refCleanup = t(n);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            de(e)
          ), t.current = n;
      }
    }
    function Pc(e, t) {
      try {
        he(e, py, e);
      } catch (n) {
        Je(e, t, n);
      }
    }
    function va(e, t) {
      var n = e.ref, i = e.refCleanup;
      if (n !== null)
        if (typeof i == "function")
          try {
            if (Du(e))
              try {
                el(), he(e, i);
              } finally {
                sn(e);
              }
            else he(e, i);
          } catch (o) {
            Je(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            if (Du(e))
              try {
                el(), he(e, n, null);
              } finally {
                sn(e);
              }
            else he(e, n, null);
          } catch (o) {
            Je(e, t, o);
          }
        else n.current = null;
    }
    function H0(e, t, n, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Tv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        n
      ), typeof d == "function" && d(f, t, i, n);
    }
    function gy(e, t, n, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Tv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        n
      );
    }
    function tc(e) {
      var t = e.type, n = e.memoizedProps, i = e.stateNode;
      try {
        he(
          e,
          _y,
          i,
          t,
          n,
          e
        );
      } catch (o) {
        Je(e, e.return, o);
      }
    }
    function ih(e, t, n) {
      try {
        he(
          e,
          Oh,
          e.stateNode,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Je(e, e.return, i);
      }
    }
    function x0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && oc(e.type) || e.tag === 4;
    }
    function ch(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || x0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && oc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function hf(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (Uy(n), (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t)) : (Uy(n), t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sa));
      else if (i !== 4 && (i === 27 && oc(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (hf(e, t, n), e = e.sibling; e !== null; )
          hf(e, t, n), e = e.sibling;
    }
    function ar(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (i !== 4 && (i === 27 && oc(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for (ar(e, t, n), e = e.sibling; e !== null; )
          ar(e, t, n), e = e.sibling;
    }
    function B0(e) {
      for (var t, n = e.return; n !== null; ) {
        if (x0(n)) {
          t = n;
          break;
        }
        n = n.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, n = ch(e), ar(
            e,
            n,
            t
          );
          break;
        case 5:
          n = t.stateNode, t.flags & 32 && (Rh(n), t.flags &= -33), t = ch(e), ar(
            e,
            t,
            n
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, n = ch(e), hf(
            e,
            n,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function q0(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        he(
          e,
          Nu,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Je(e, e.return, i);
      }
    }
    function j0(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function A1(e, t) {
      if (e = e.containerInfo, Hb = l1, e = Td(e), Zm(e)) {
        if ("selectionStart" in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                n.nodeType, f.nodeType;
              } catch {
                n = null;
                break e;
              }
              var d = 0, h = -1, g = -1, y = 0, _ = 0, U = e, A = null;
              t: for (; ; ) {
                for (var L; U !== n || o !== 0 && U.nodeType !== 3 || (h = d + o), U !== f || i !== 0 && U.nodeType !== 3 || (g = d + i), U.nodeType === 3 && (d += U.nodeValue.length), (L = U.firstChild) !== null; )
                  A = U, U = L;
                for (; ; ) {
                  if (U === e) break t;
                  if (A === n && ++y === o && (h = d), A === f && ++_ === i && (g = d), (L = U.nextSibling) !== null) break;
                  U = A, A = U.parentNode;
                }
                U = L;
              }
              n = h === -1 || g === -1 ? null : { start: h, end: g };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (xb = {
        focusedElem: e,
        selectionRange: n
      }, l1 = !1, ln = t; ln !== null; )
        if (t = ln, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ln = e;
        else
          for (; ln !== null; ) {
            switch (e = t = ln, n = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (n = 0; n < e.length; n++)
                    o = e[n], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && n !== null && my(e, n);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9)
                    Of(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Of(e);
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, ln = e;
              break;
            }
            ln = t.return;
          }
    }
    function oh(e, t, n) {
      var i = Xt(), o = ma(), f = Vn(), d = pa(), h = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $n(e, n), h & 4 && hy(n, tu | Ju);
          break;
        case 1:
          if ($n(e, n), h & 4)
            if (e = n.stateNode, t === null)
              n.type.defaultProps || "ref" in n.memoizedProps || ym || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(n) || "instance"
              )), Du(n) ? (el(), he(
                n,
                lb,
                n,
                e
              ), sn()) : he(
                n,
                lb,
                n,
                e
              );
            else {
              var g = zu(
                n.type,
                t.memoizedProps
              );
              t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || ym || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(n) || "instance"
              )), Du(n) ? (el(), he(
                n,
                ZS,
                n,
                e,
                g,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), sn()) : he(
                n,
                ZS,
                n,
                e,
                g,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && N0(n), h & 512 && Pc(n, n.return);
          break;
        case 3:
          if (t = mu(), $n(e, n), h & 64 && (h = n.updateQueue, h !== null)) {
            if (g = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  g = n.child.stateNode;
                  break;
                case 1:
                  g = n.child.stateNode;
              }
            try {
              he(
                n,
                Po,
                h,
                g
              );
            } catch (_) {
              Je(n, n.return, _);
            }
          }
          e.effectDuration += $o(t);
          break;
        case 27:
          t === null && h & 4 && q0(n);
        case 26:
        case 5:
          if ($n(e, n), t === null) {
            if (h & 4) tc(n);
            else if (h & 64) {
              e = n.type, t = n.memoizedProps, g = n.stateNode;
              try {
                he(
                  n,
                  Cy,
                  g,
                  e,
                  t,
                  n
                );
              } catch (_) {
                Je(
                  n,
                  n.return,
                  _
                );
              }
            }
          }
          h & 512 && Pc(n, n.return);
          break;
        case 12:
          if (h & 4) {
            h = mu(), $n(e, n), e = n.stateNode, e.effectDuration += fn(h);
            try {
              he(
                n,
                H0,
                n,
                t,
                $f,
                e.effectDuration
              );
            } catch (_) {
              Je(n, n.return, _);
            }
          } else $n(e, n);
          break;
        case 31:
          $n(e, n), h & 4 && L0(e, n);
          break;
        case 13:
          $n(e, n), h & 4 && G0(e, n), h & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = gi.bind(
            null,
            n
          ), Vy(e, h))));
          break;
        case 22:
          if (h = n.memoizedState !== null || Oo, !h) {
            t = t !== null && t.memoizedState !== null || ql, g = Oo;
            var y = ql;
            Oo = h, (ql = t) && !y ? (Xa(
              e,
              n,
              (n.subtreeFlags & 8772) !== 0
            ), (n.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && zd(
              n,
              Me,
              He
            )) : $n(e, n), Oo = g, ql = y;
          }
          break;
        case 30:
          break;
        default:
          $n(e, n);
      }
      (n.mode & Fe) !== je && 0 <= Me && 0 <= He && ((rl || 0.05 < nl) && Na(
        n,
        Me,
        He,
        nl,
        Pt
      ), n.alternate === null && n.return !== null && n.return.alternate !== null && 0.05 < He - Me && (j0(
        n.return.alternate,
        n.return
      ) || ra(
        n,
        Me,
        He,
        "Mount"
      ))), Ol(i), Gn(o), Pt = f, rl = d;
    }
    function fl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, fl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cm(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Gt(e, t, n) {
      for (n = n.child; n !== null; )
        Y0(
          e,
          t,
          n
        ), n = n.sibling;
    }
    function Y0(e, t, n) {
      if (Sl && typeof Sl.onCommitFiberUnmount == "function")
        try {
          Sl.onCommitFiberUnmount(ho, n);
        } catch (y) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            y
          ));
        }
      var i = Xt(), o = ma(), f = Vn(), d = pa();
      switch (n.tag) {
        case 26:
          ql || va(n, t), Gt(
            e,
            t,
            n
          ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (e = n.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          ql || va(n, t);
          var h = jl, g = za;
          oc(n.type) && (jl = n.stateNode, za = !1), Gt(
            e,
            t,
            n
          ), he(
            n,
            Si,
            n.stateNode
          ), jl = h, za = g;
          break;
        case 5:
          ql || va(n, t);
        case 6:
          if (h = jl, g = za, jl = null, Gt(
            e,
            t,
            n
          ), jl = h, za = g, jl !== null)
            if (za)
              try {
                he(
                  n,
                  Ny,
                  jl,
                  n.stateNode
                );
              } catch (y) {
                Je(
                  n,
                  t,
                  y
                );
              }
            else
              try {
                he(
                  n,
                  wy,
                  jl,
                  n.stateNode
                );
              } catch (y) {
                Je(
                  n,
                  t,
                  y
                );
              }
          break;
        case 18:
          jl !== null && (za ? (e = jl, ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            n.stateNode
          ), oo(e)) : ao(jl, n.stateNode));
          break;
        case 4:
          h = jl, g = za, jl = n.stateNode.containerInfo, za = !0, Gt(
            e,
            t,
            n
          ), jl = h, za = g;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ec(
            ua,
            n,
            t
          ), ql || nh(
            n,
            t,
            tu
          ), Gt(
            e,
            t,
            n
          );
          break;
        case 1:
          ql || (va(n, t), h = n.stateNode, typeof h.componentWillUnmount == "function" && uh(
            n,
            t,
            h
          )), Gt(
            e,
            t,
            n
          );
          break;
        case 21:
          Gt(
            e,
            t,
            n
          );
          break;
        case 22:
          ql = (h = ql) || n.memoizedState !== null, Gt(
            e,
            t,
            n
          ), ql = h;
          break;
        default:
          Gt(
            e,
            t,
            n
          );
      }
      (n.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        n,
        Me,
        He,
        nl,
        Pt
      ), Ol(i), Gn(o), Pt = f, rl = d;
    }
    function L0(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          he(
            t,
            Mh,
            e
          );
        } catch (n) {
          Je(t, t.return, n);
        }
      }
    }
    function G0(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          he(
            t,
            op,
            e
          );
        } catch (n) {
          Je(t, t.return, n);
        }
    }
    function yy(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new C2()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new C2()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function lc(e, t) {
      var n = yy(e);
      t.forEach(function(i) {
        if (!n.has(i)) {
          if (n.add(i), Bu)
            if (vm !== null && bm !== null)
              bf(bm, vm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = lo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function pn(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = e, f = t, d = n[i], h = Xt(), g = f;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 27:
                if (oc(g.type)) {
                  jl = g.stateNode, za = !1;
                  break e;
                }
                break;
              case 5:
                jl = g.stateNode, za = !1;
                break e;
              case 3:
              case 4:
                jl = g.stateNode.containerInfo, za = !0;
                break e;
            }
            g = g.return;
          }
          if (jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Y0(o, f, d), jl = null, za = !1, (d.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && ra(
            d,
            Me,
            He,
            "Unmount"
          ), Ol(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          ur(t, e), t = t.sibling;
    }
    function ur(e, t) {
      var n = Xt(), i = ma(), o = Vn(), f = pa(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pn(t, e), gn(e), h & 4 && (ec(
            ua | Ju,
            e,
            e.return
          ), mi(ua | Ju, e), nh(
            e,
            e.return,
            tu | Ju
          ));
          break;
        case 1:
          if (pn(t, e), gn(e), h & 512 && (ql || d === null || va(d, d.return)), h & 64 && Oo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var g = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = g === null ? d : g.concat(d);
          }
          break;
        case 26:
          if (g = Oi, pn(t, e), gn(e), h & 512 && (ql || d === null || va(d, d.return)), h & 4) {
            var y = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, g = g.ownerDocument || g;
                    t: switch (h) {
                      case "title":
                        y = g.getElementsByTagName(
                          "title"
                        )[0], (!y || y[Gf] || y[Jt] || y.namespaceURI === Ke || y.hasAttribute("itemprop")) && (y = g.createElement(h), g.head.insertBefore(
                          y,
                          g.querySelector(
                            "head > title"
                          )
                        )), Zt(y, h, d), y[Jt] = e, ul(y), h = y;
                        break e;
                      case "link":
                        var _ = _f(
                          "link",
                          "href",
                          g
                        ).get(h + (d.href || ""));
                        if (_) {
                          for (var U = 0; U < _.length; U++)
                            if (y = _[U], y.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && y.getAttribute("rel") === (d.rel == null ? null : d.rel) && y.getAttribute("title") === (d.title == null ? null : d.title) && y.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              _.splice(U, 1);
                              break t;
                            }
                        }
                        y = g.createElement(h), Zt(y, h, d), g.head.appendChild(
                          y
                        );
                        break;
                      case "meta":
                        if (_ = _f(
                          "meta",
                          "content",
                          g
                        ).get(h + (d.content || ""))) {
                          for (U = 0; U < _.length; U++)
                            if (y = _[U], gt(
                              d.content,
                              "content"
                            ), y.getAttribute("content") === (d.content == null ? null : "" + d.content) && y.getAttribute("name") === (d.name == null ? null : d.name) && y.getAttribute("property") === (d.property == null ? null : d.property) && y.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && y.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(U, 1);
                              break t;
                            }
                        }
                        y = g.createElement(h), Zt(y, h, d), g.head.appendChild(
                          y
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    y[Jt] = e, ul(y), h = y;
                  }
                  e.stateNode = h;
                } else
                  Jy(
                    g,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Uh(
                  g,
                  h,
                  e.memoizedProps
                );
            else
              y !== h ? (y === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : y.count--, h === null ? Jy(
                g,
                e.type,
                e.stateNode
              ) : Uh(
                g,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && ih(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          pn(t, e), gn(e), h & 512 && (ql || d === null || va(d, d.return)), d !== null && h & 4 && ih(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (pn(t, e), gn(e), h & 512 && (ql || d === null || va(d, d.return)), e.flags & 32) {
            g = e.stateNode;
            try {
              he(
                e,
                Rh,
                g
              );
            } catch (re) {
              Je(e, e.return, re);
            }
          }
          h & 4 && e.stateNode != null && (g = e.memoizedProps, ih(
            e,
            g,
            d !== null ? d.memoizedProps : g
          )), h & 1024 && (pb = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (pn(t, e), gn(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, g = e.stateNode;
            try {
              he(
                e,
                D1,
                g,
                d,
                h
              );
            } catch (re) {
              Je(e, e.return, re);
            }
          }
          break;
        case 3:
          if (g = mu(), Pv = null, y = Oi, Oi = _h(t.containerInfo), pn(t, e), Oi = y, gn(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              he(
                e,
                cp,
                t.containerInfo
              );
            } catch (re) {
              Je(e, e.return, re);
            }
          pb && (pb = !1, vy(e)), t.effectDuration += $o(
            g
          );
          break;
        case 4:
          h = Oi, Oi = _h(
            e.stateNode.containerInfo
          ), pn(t, e), gn(e), Oi = h;
          break;
        case 12:
          h = mu(), pn(t, e), gn(e), e.stateNode.effectDuration += fn(h);
          break;
        case 31:
          pn(t, e), gn(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 13:
          pn(t, e), gn(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (jv = wl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 22:
          g = e.memoizedState !== null;
          var A = d !== null && d.memoizedState !== null, L = Oo, ce = ql;
          if (Oo = L || g, ql = ce || A, pn(t, e), ql = ce, Oo = L, A && !g && !L && !ce && (e.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && zd(
            e,
            Me,
            He
          ), gn(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = g ? t._visibility & ~Xp : t._visibility | Xp, !g || d === null || A || Oo || ql || (nc(e), (e.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && ra(
              e,
              Me,
              He,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  A = d = t;
                  try {
                    y = A.stateNode, g ? he(
                      A,
                      xy,
                      y
                    ) : he(
                      A,
                      jy,
                      A.stateNode,
                      A.memoizedProps
                    );
                  } catch (re) {
                    Je(A, A.return, re);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  A = t;
                  try {
                    _ = A.stateNode, g ? he(
                      A,
                      By,
                      _
                    ) : he(
                      A,
                      Yy,
                      _,
                      A.memoizedProps
                    );
                  } catch (re) {
                    Je(A, A.return, re);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  A = t;
                  try {
                    U = A.stateNode, g ? he(
                      A,
                      Hy,
                      U
                    ) : he(
                      A,
                      qy,
                      A.stateNode
                    );
                  } catch (re) {
                    Je(A, A.return, re);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, lc(e, d))));
          break;
        case 19:
          pn(t, e), gn(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          pn(t, e), gn(e);
      }
      (e.mode & Fe) !== je && 0 <= Me && 0 <= He && ((rl || 0.05 < nl) && Na(
        e,
        Me,
        He,
        nl,
        Pt
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < He - Me && (j0(
        e.return.alternate,
        e.return
      ) || ra(
        e,
        Me,
        He,
        "Mount"
      ))), Ol(n), Gn(i), Pt = o, rl = f;
    }
    function gn(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          he(e, B0, e);
        } catch (n) {
          Je(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function vy(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          vy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function $n(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          oh(e, t.alternate, t), t = t.sibling;
    }
    function fh(e) {
      var t = Xt(), n = ma(), i = Vn(), o = pa();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nh(
            e,
            e.return,
            tu
          ), nc(e);
          break;
        case 1:
          va(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && uh(
            e,
            e.return,
            f
          ), nc(e);
          break;
        case 27:
          he(
            e,
            Si,
            e.stateNode
          );
        case 26:
        case 5:
          va(e, e.return), nc(e);
          break;
        case 22:
          e.memoizedState === null && nc(e);
          break;
        case 30:
          nc(e);
          break;
        default:
          nc(e);
      }
      (e.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        e,
        Me,
        He,
        nl,
        Pt
      ), Ol(t), Gn(n), Pt = i, rl = o;
    }
    function nc(e) {
      for (e = e.child; e !== null; )
        fh(e), e = e.sibling;
    }
    function V0(e, t, n, i) {
      var o = Xt(), f = ma(), d = Vn(), h = pa(), g = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            e,
            n,
            i
          ), hy(n, tu);
          break;
        case 1:
          if (Xa(
            e,
            n,
            i
          ), t = n.stateNode, typeof t.componentDidMount == "function" && he(
            n,
            lb,
            n,
            t
          ), t = n.updateQueue, t !== null) {
            e = n.stateNode;
            try {
              he(
                n,
                f0,
                t,
                e
              );
            } catch (y) {
              Je(n, n.return, y);
            }
          }
          i && g & 64 && N0(n), Pc(n, n.return);
          break;
        case 27:
          q0(n);
        case 26:
        case 5:
          Xa(
            e,
            n,
            i
          ), i && t === null && g & 4 && tc(n), Pc(n, n.return);
          break;
        case 12:
          if (i && g & 4) {
            g = mu(), Xa(
              e,
              n,
              i
            ), i = n.stateNode, i.effectDuration += fn(g);
            try {
              he(
                n,
                H0,
                n,
                t,
                $f,
                i.effectDuration
              );
            } catch (y) {
              Je(n, n.return, y);
            }
          } else
            Xa(
              e,
              n,
              i
            );
          break;
        case 31:
          Xa(
            e,
            n,
            i
          ), i && g & 4 && L0(e, n);
          break;
        case 13:
          Xa(
            e,
            n,
            i
          ), i && g & 4 && G0(e, n);
          break;
        case 22:
          n.memoizedState === null && Xa(
            e,
            n,
            i
          ), Pc(n, n.return);
          break;
        case 30:
          break;
        default:
          Xa(
            e,
            n,
            i
          );
      }
      (n.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        n,
        Me,
        He,
        nl,
        Pt
      ), Ol(o), Gn(f), Pt = d, rl = h;
    }
    function Xa(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        V0(
          e,
          t.alternate,
          t,
          n
        ), t = t.sibling;
    }
    function ir(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && Bc(e), n != null && ws(n));
    }
    function cr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Bc(t), e != null && ws(e));
    }
    function Wn(e, t, n, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          X0(
            e,
            t,
            n,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function X0(e, t, n, i, o) {
      var f = Xt(), d = ma(), h = Vn(), g = pa(), y = Zf, _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & Fe) !== je && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            Jl,
            n
          ), Wn(
            e,
            t,
            n,
            i,
            o
          ), _ & 2048 && lr(t, ia | Ju);
          break;
        case 1:
          (t.mode & Fe) !== je && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Km(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            Jl,
            n
          )), Wn(
            e,
            t,
            n,
            i,
            o
          );
          break;
        case 3:
          var U = mu(), A = Jl;
          Jl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Wn(
            e,
            t,
            n,
            i,
            o
          ), Jl = A, _ & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== n && (Bc(i), n != null && ws(n))), e.passiveEffectDuration += $o(
            U
          );
          break;
        case 12:
          if (_ & 2048) {
            _ = mu(), Wn(
              e,
              t,
              n,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += fn(_);
            try {
              he(
                t,
                gy,
                t,
                t.alternate,
                $f,
                e.passiveEffectDuration
              );
            } catch (L) {
              Je(t, t.return, L);
            }
          } else
            Wn(
              e,
              t,
              n,
              i,
              o
            );
          break;
        case 31:
          _ = Jl, U = t.alternate !== null ? t.alternate.memoizedState : null, A = t.memoizedState, U !== null && A === null ? (A = t.deletions, A !== null && 0 < A.length && A[0].tag === 18 ? (Jl = !1, U = U.hydrationErrors, U !== null && Km(
            t,
            t.actualStartTime,
            o,
            U
          )) : Jl = !0) : Jl = !1, Wn(
            e,
            t,
            n,
            i,
            o
          ), Jl = _;
          break;
        case 13:
          _ = Jl, U = t.alternate !== null ? t.alternate.memoizedState : null, A = t.memoizedState, U === null || U.dehydrated === null || A !== null && A.dehydrated !== null ? Jl = !1 : (A = t.deletions, A !== null && 0 < A.length && A[0].tag === 18 ? (Jl = !1, U = U.hydrationErrors, U !== null && Km(
            t,
            t.actualStartTime,
            o,
            U
          )) : Jl = !0), Wn(
            e,
            t,
            n,
            i,
            o
          ), Jl = _;
          break;
        case 23:
          break;
        case 22:
          A = t.stateNode, U = t.alternate, t.memoizedState !== null ? A._visibility & go ? Wn(
            e,
            t,
            n,
            i,
            o
          ) : eo(
            e,
            t,
            n,
            i,
            o
          ) : A._visibility & go ? Wn(
            e,
            t,
            n,
            i,
            o
          ) : (A._visibility |= go, ac(
            e,
            t,
            n,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & Fe) === je || Jl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && zd(t, e, o), 0 <= Me && 0 <= He && 0.05 < He - Me && zd(
            t,
            Me,
            He
          ))), _ & 2048 && ir(
            U,
            t
          );
          break;
        case 24:
          Wn(
            e,
            t,
            n,
            i,
            o
          ), _ & 2048 && cr(t.alternate, t);
          break;
        default:
          Wn(
            e,
            t,
            n,
            i,
            o
          );
      }
      (t.mode & Fe) !== je && ((e = !Jl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (n = t.actualStartTime, 0 <= n && 0.05 < o - n && ra(
        t,
        n,
        o,
        "Mount"
      )), 0 <= Me && 0 <= He && ((rl || 0.05 < nl) && Na(
        t,
        Me,
        He,
        nl,
        Pt
      ), e && 0.05 < He - Me && ra(
        t,
        Me,
        He,
        "Mount"
      ))), Ol(f), Gn(d), Pt = h, rl = g, Zf = y;
    }
    function ac(e, t, n, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        or(
          e,
          t,
          n,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function or(e, t, n, i, o, f) {
      var d = Xt(), h = ma(), g = Vn(), y = pa(), _ = Zf;
      o && (t.mode & Fe) !== je && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
        t,
        t.actualStartTime,
        f,
        Jl,
        n
      );
      var U = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ac(
            e,
            t,
            n,
            i,
            o,
            f
          ), lr(t, ia);
          break;
        case 23:
          break;
        case 22:
          var A = t.stateNode;
          t.memoizedState !== null ? A._visibility & go ? ac(
            e,
            t,
            n,
            i,
            o,
            f
          ) : eo(
            e,
            t,
            n,
            i,
            f
          ) : (A._visibility |= go, ac(
            e,
            t,
            n,
            i,
            o,
            f
          )), o && U & 2048 && ir(
            t.alternate,
            t
          );
          break;
        case 24:
          ac(
            e,
            t,
            n,
            i,
            o,
            f
          ), o && U & 2048 && cr(t.alternate, t);
          break;
        default:
          ac(
            e,
            t,
            n,
            i,
            o,
            f
          );
      }
      (t.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        t,
        Me,
        He,
        nl,
        Pt
      ), Ol(d), Gn(h), Pt = g, rl = y, Zf = _;
    }
    function eo(e, t, n, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = n, g = i, y = t !== null ? t.actualStartTime : o, _ = Zf;
          (f.mode & Fe) !== je && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ad(
            f,
            f.actualStartTime,
            y,
            Jl,
            h
          );
          var U = f.flags;
          switch (f.tag) {
            case 22:
              eo(
                d,
                f,
                h,
                g,
                y
              ), U & 2048 && ir(f.alternate, f);
              break;
            case 24:
              eo(
                d,
                f,
                h,
                g,
                y
              ), U & 2048 && cr(f.alternate, f);
              break;
            default:
              eo(
                d,
                f,
                h,
                g,
                y
              );
          }
          Zf = _, f = t;
        }
    }
    function to(e, t, n) {
      if (e.subtreeFlags & fg)
        for (e = e.child; e !== null; )
          sh(
            e,
            t,
            n
          ), e = e.sibling;
    }
    function sh(e, t, n) {
      switch (e.tag) {
        case 26:
          to(
            e,
            t,
            n
          ), e.flags & fg && e.memoizedState !== null && hp(
            n,
            Oi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          to(
            e,
            t,
            n
          );
          break;
        case 3:
        case 4:
          var i = Oi;
          Oi = _h(
            e.stateNode.containerInfo
          ), to(
            e,
            t,
            n
          ), Oi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = fg, fg = 16777216, to(
            e,
            t,
            n
          ), fg = i) : to(
            e,
            t,
            n
          ));
          break;
        default:
          to(
            e,
            t,
            n
          );
      }
    }
    function Q0(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Fn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n], o = Xt();
            ln = i, Ou(
              i,
              e
            ), (i.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && ra(
              i,
              Me,
              He,
              "Unmount"
            ), Ol(o);
          }
        Q0(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          rh(e), e = e.sibling;
    }
    function rh(e) {
      var t = Xt(), n = ma(), i = Vn(), o = pa();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fn(e), e.flags & 2048 && ah(
            e,
            e.return,
            ia | Ju
          );
          break;
        case 3:
          var f = mu();
          Fn(e), e.stateNode.passiveEffectDuration += $o(f);
          break;
        case 12:
          f = mu(), Fn(e), e.stateNode.passiveEffectDuration += fn(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & go && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~go, dh(e), (e.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && ra(
            e,
            Me,
            He,
            "Disconnect"
          )) : Fn(e);
          break;
        default:
          Fn(e);
      }
      (e.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        e,
        Me,
        He,
        nl,
        Pt
      ), Ol(t), Gn(n), rl = o, Pt = i;
    }
    function dh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n], o = Xt();
            ln = i, Ou(
              i,
              e
            ), (i.mode & Fe) !== je && 0 <= Me && 0 <= He && 0.05 < He - Me && ra(
              i,
              Me,
              He,
              "Unmount"
            ), Ol(o);
          }
        Q0(e);
      }
      for (e = e.child; e !== null; )
        Z0(e), e = e.sibling;
    }
    function Z0(e) {
      var t = Xt(), n = ma(), i = Vn(), o = pa();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ah(
            e,
            e.return,
            ia
          ), dh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & go && (f._visibility &= ~go, dh(e));
          break;
        default:
          dh(e);
      }
      (e.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
        e,
        Me,
        He,
        nl,
        Pt
      ), Ol(t), Gn(n), rl = o, Pt = i;
    }
    function Ou(e, t) {
      for (; ln !== null; ) {
        var n = ln, i = n, o = t, f = Xt(), d = ma(), h = Vn(), g = pa();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            ah(
              i,
              o,
              ia
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Bc(o));
            break;
          case 24:
            ws(i.memoizedState.cache);
        }
        if ((i.mode & Fe) !== je && 0 <= Me && 0 <= He && (rl || 0.05 < nl) && Na(
          i,
          Me,
          He,
          nl,
          Pt
        ), Ol(f), Gn(d), rl = g, Pt = h, i = n.child, i !== null) i.return = n, ln = i;
        else
          e: for (n = e; ln !== null; ) {
            if (i = ln, f = i.sibling, d = i.return, fl(i), i === n) {
              ln = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ln = f;
              break e;
            }
            ln = d;
          }
      }
    }
    function J0() {
      Mz.forEach(function(e) {
        return e();
      });
    }
    function K0() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Il(e) {
      if ((rt & Kl) !== nn && Pe !== 0)
        return Pe & -Pe;
      var t = Q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), np()) : Bg();
    }
    function mf() {
      if (Da === 0)
        if ((Pe & 536870912) === 0 || it) {
          var e = Ur;
          Ur <<= 1, (Ur & 3932160) === 0 && (Ur = 262144), Da = e;
        } else Da = 536870912;
      return e = eu.current, e !== null && (e.flags |= 32), Da;
    }
    function Ye(e, t, n) {
      if (Tm && console.error("useInsertionEffect must not schedule updates."), Ob && (Vv = !0), (e === Lt && (Nt === Kr || Nt === kr) || e.cancelPendingCommit !== null) && (Ru(e, 0), ba(
        e,
        Pe,
        Da,
        !1
      )), qn(e, n), (rt & Kl) !== nn && e === Lt) {
        if (Hu)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = tt && de(tt) || "Unknown", Z2.has(e) || (Z2.add(e), t = de(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              Q2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Q2 = !0);
          }
      } else
        Bu && Al(e, t, n), dr(t), e === Lt && ((rt & Kl) === nn && (ns |= n), al === es && ba(
          e,
          Pe,
          Da,
          !1
        )), _n(e);
    }
    function by(e, t, n) {
      if ((rt & (Kl | lu)) !== nn)
        throw Error("Should not already be working.");
      if (Pe !== 0 && tt !== null) {
        var i = tt, o = wl();
        switch (qS) {
          case dg:
          case Kr:
            var f = $p;
            Kt && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                ju,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              ju,
              void 0,
              "primary-light"
            ));
            break;
          case kr:
            f = $p, Kt && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                ju,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              ju,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Kt && (i = o - $p, 3 > i || console.timeStamp(
              "Blocked",
              $p,
              o,
              ju,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (n = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Rt(e, t)) ? pi(e, t) : yf(e, t, !0);
      var d = n;
      do {
        if (f === Ro) {
          Sm && !n && ba(e, t, 0, !1), t = Nt, $p = Hl(), qS = t;
          break;
        } else {
          if (i = wl(), o = e.current.alternate, d && !Ey(o)) {
            wa(t), o = tn, f = i, !Kt || f <= o || (gl ? gl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                ft,
                ct,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              ft,
              ct,
              "error"
            )), uc(t, i), f = yf(e, t, !1), d = !1;
            continue;
          }
          if (f === Jr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              wa(t), km(
                tn,
                i,
                t,
                gl
              ), uc(t, i), t = h;
              e: {
                i = e, f = d, d = mg;
                var g = i.current.memoizedState.isDehydrated;
                if (g && (Ru(i, h).flags |= 256), h = yf(
                  i,
                  h,
                  !1
                ), h !== Jr) {
                  if (vb && !g) {
                    i.errorRecoveryDisabledLanes |= f, ns |= f, f = es;
                    break e;
                  }
                  i = ca, ca = d, i !== null && (ca === null ? ca = i : ca.push.apply(
                    ca,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Jr) continue;
              i = wl();
            }
          }
          if (f === rg) {
            wa(t), km(
              tn,
              i,
              t,
              gl
            ), uc(t, i), Ru(e, 0), ba(e, t, 0, !0);
            break;
          }
          e: {
            switch (n = e, f) {
              case Ro:
              case rg:
                throw Error("Root did not complete. This is a bug in React.");
              case es:
                if ((t & 4194048) !== t) break;
              case Hv:
                wa(t), $g(
                  tn,
                  i,
                  t,
                  gl
                ), uc(t, i), o = t, (o & 127) !== 0 ? bv = i : (o & 4194048) !== 0 && (Sv = i), ba(
                  n,
                  t,
                  Da,
                  !ts
                );
                break e;
              case Jr:
                ca = null;
                break;
              case Nv:
              case U2:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Q.actQueue !== null)
              qt(
                n,
                o,
                t,
                ca,
                pg,
                qv,
                Da,
                ns,
                $r,
                f,
                null,
                null,
                tn,
                i
              );
            else {
              if ((t & 62914560) === t && (d = jv + H2 - wl(), 10 < d)) {
                if (ba(
                  n,
                  t,
                  Da,
                  !ts
                ), dl(n, 0, !0) !== 0) break e;
                Ri = t, n.timeoutHandle = P2(
                  Sy.bind(
                    null,
                    n,
                    o,
                    ca,
                    pg,
                    qv,
                    t,
                    Da,
                    ns,
                    $r,
                    ts,
                    f,
                    "Throttled",
                    tn,
                    i
                  ),
                  d
                );
                break e;
              }
              Sy(
                n,
                o,
                ca,
                pg,
                qv,
                t,
                Da,
                ns,
                $r,
                ts,
                f,
                null,
                tn,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      _n(e);
    }
    function Sy(e, t, n, i, o, f, d, h, g, y, _, U, A, L) {
      e.timeoutHandle = ed;
      var ce = t.subtreeFlags, re = null;
      if ((ce & 8192 || (ce & 16785408) === 16785408) && (re = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sa
      }, sh(t, f, re), ce = (f & 62914560) === f ? jv - wl() : (f & 4194048) === f ? N2 - wl() : 0, ce = wh(re, ce), ce !== null)) {
        Ri = f, e.cancelPendingCommit = ce(
          qt.bind(
            null,
            e,
            t,
            f,
            n,
            i,
            o,
            d,
            h,
            g,
            _,
            re,
            re.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < re.count ? 0 < re.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : re.imgCount === 1 ? "Suspended on an Image" : 0 < re.imgCount ? "Suspended on Images" : null,
            A,
            L
          )
        ), ba(
          e,
          f,
          d,
          !y
        );
        return;
      }
      qt(
        e,
        t,
        f,
        n,
        i,
        o,
        d,
        h,
        g,
        _,
        re,
        U,
        A,
        L
      );
    }
    function Ey(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var i = 0; i < n.length; i++) {
            var o = n[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!na(f(), o)) return !1;
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
    function ba(e, t, n, i) {
      t &= ~bb, t &= ~ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ql(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      n !== 0 && Dn(e, n, t);
    }
    function In() {
      return (rt & (Kl | lu)) === nn ? (_u(0), !1) : !0;
    }
    function hh() {
      if (tt !== null) {
        if (Nt === Aa)
          var e = tt.return;
        else
          e = tt, Ko(), Qi(e), rm = null, ag = 0, e = tt;
        for (; e !== null; )
          w0(e.alternate, e), e = e.return;
        tt = null;
      }
    }
    function uc(e, t) {
      (e & 127) !== 0 && (qr = t), (e & 4194048) !== 0 && (Eo = t), (e & 62914560) !== 0 && (xS = t), (e & 2080374784) !== 0 && (BS = t);
    }
    function Ru(e, t) {
      Kt && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ct,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ct,
        "primary-light"
      ));
      var n = tn;
      if (tn = Hl(), Pe !== 0 && 0 < n) {
        if (wa(Pe), al === Nv || al === es)
          $g(
            n,
            tn,
            t,
            gl
          );
        else {
          var i = tn, o = gl;
          if (Kt && !(i <= n)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                n,
                i,
                ft,
                ct,
                f
              )
            ) : console.timeStamp(
              d,
              n,
              i,
              ft,
              ct,
              f
            );
          }
        }
        uc(Pe, tn);
      }
      if (n = gl, gl = null, (t & 127) !== 0) {
        gl = Jp, o = 0 <= gc && gc < qr ? qr : gc, i = 0 <= jr && jr < qr ? qr : jr, f = 0 <= i ? i : 0 <= o ? o : tn, 0 <= bv ? (wa(2), Wg(
          bv,
          f,
          t,
          n
        )) : Ev & 127, n = o;
        var h = i, g = Kp, y = 0 < om, _ = Wf === Zp, U = Wf === vv;
        if (o = tn, i = Jp, f = F1, d = I1, Kt) {
          if (ft = "Blocking", 0 < n ? n > o && (n = o) : n = o, 0 < h ? h > n && (h = n) : h = n, g !== null && n > h) {
            var A = y ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                y ? "Consecutive" : "Event: " + g,
                h,
                n,
                ft,
                ct,
                A
              )
            ) : console.timeStamp(
              y ? "Consecutive" : "Event: " + g,
              h,
              n,
              ft,
              ct,
              A
            );
          }
          o > n && (h = _ ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", _ = U ? "Promise Resolved" : _ ? "Cascading Update" : 5 < o - n ? "Update Blocked" : "Update", U = [], d != null && U.push(["Component name", d]), f != null && U.push(["Method name", f]), n = {
            start: n,
            end: o,
            detail: {
              devtools: {
                properties: U,
                track: ft,
                trackGroup: ct,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              _,
              n
            )
          ) : performance.measure(_, n));
        }
        gc = -1.1, Wf = 0, I1 = F1 = null, bv = -1.1, om = jr, jr = -1.1, qr = Hl();
      }
      if ((t & 4194048) !== 0 && (gl = kp, o = 0 <= To && To < Eo ? Eo : To, n = 0 <= Qu && Qu < Eo ? Eo : Qu, i = 0 <= Ff && Ff < Eo ? Eo : Ff, f = 0 <= i ? i : 0 <= n ? n : tn, 0 <= Sv ? (wa(256), Wg(
        Sv,
        f,
        t,
        gl
      )) : Ev & 4194048, U = i, h = Yr, g = 0 < If, y = P1 === vv, f = tn, i = kp, d = NS, _ = HS, Kt && (ft = "Transition", 0 < n ? n > f && (n = f) : n = f, 0 < o ? o > n && (o = n) : o = n, 0 < U ? U > o && (U = o) : U = o, o > U && h !== null && (A = g ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          g ? "Consecutive" : "Event: " + h,
          U,
          o,
          ft,
          ct,
          A
        )
      ) : console.timeStamp(
        g ? "Consecutive" : "Event: " + h,
        U,
        o,
        ft,
        ct,
        A
      )), n > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          n,
          ft,
          ct,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        n,
        ft,
        ct,
        "primary-dark"
      )), f > n && (o = y ? "Promise Resolved" : 5 < f - n ? "Update Blocked" : "Update", U = [], _ != null && U.push(["Component name", _]), d != null && U.push(["Method name", d]), n = {
        start: n,
        end: f,
        detail: {
          devtools: {
            properties: U,
            track: ft,
            trackGroup: ct,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          n
        )
      ) : performance.measure(o, n))), Qu = To = -1.1, P1 = 0, Sv = -1.1, If = Ff, Ff = -1.1, Eo = Hl()), (t & 62914560) !== 0 && (Ev & 62914560) !== 0 && (wa(4194304), $m(xS, tn)), (t & 2080374784) !== 0 && (Ev & 2080374784) !== 0 && (wa(268435456), $m(BS, tn)), n = e.timeoutHandle, n !== ed && (e.timeoutHandle = ed, Gz(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Ri = 0, hh(), Lt = e, tt = n = du(
        e.current,
        null
      ), Pe = t, Nt = Aa, nu = null, ts = !1, Sm = Rt(e, t), vb = !1, al = Ro, $r = Da = bb = ns = ls = 0, ca = mg = null, qv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Ql(i), f = 1 << o, t |= e[o], i &= ~f;
      return vc = t, Dd(), e = RS(), 1e3 < e - OS && (Q.recentlyCreatedOwnerStacks = 0, OS = e), Ai.discardPendingWarnings(), n;
    }
    function Qa(e, t) {
      Ge = null, Q.H = og, Q.getCurrentStack = null, Hu = !1, Nn = null, t === sm || t === Dv ? (t = Yc(), Nt = dg) : t === nb ? (t = Yc(), Nt = w2) : Nt = t === hb ? yb : t !== null && typeof t == "object" && typeof t.then == "function" ? hg : xv, nu = t;
      var n = tt;
      n === null ? (al = rg, Fs(
        e,
        on(t, e.current)
      )) : n.mode & Fe && wd(n);
    }
    function k0() {
      var e = eu.current;
      return e === null ? !0 : (Pe & 4194048) === Pe ? Zu === null : (Pe & 62914560) === Pe || (Pe & 536870912) !== 0 ? e === Zu : !1;
    }
    function mh() {
      var e = Q.H;
      return Q.H = og, e === null ? og : e;
    }
    function $0() {
      var e = Q.A;
      return Q.A = Rz, e;
    }
    function pf(e) {
      gl === null && (gl = e._debugTask == null ? null : e._debugTask);
    }
    function gf() {
      al = es, ts || (Pe & 4194048) !== Pe && eu.current !== null || (Sm = !0), (ls & 134217727) === 0 && (ns & 134217727) === 0 || Lt === null || ba(
        Lt,
        Pe,
        Da,
        !1
      );
    }
    function yf(e, t, n) {
      var i = rt;
      rt |= Kl;
      var o = mh(), f = $0();
      if (Lt !== e || Pe !== t) {
        if (Bu) {
          var d = e.memoizedUpdaters;
          0 < d.size && (bf(e, Pe), d.clear()), Iu(e, t);
        }
        pg = null, Ru(e, t);
      }
      t = !1, d = al;
      e: do
        try {
          if (Nt !== Aa && tt !== null) {
            var h = tt, g = nu;
            switch (Nt) {
              case yb:
                hh(), d = Hv;
                break e;
              case dg:
              case Kr:
              case kr:
              case hg:
                eu.current === null && (t = !0);
                var y = Nt;
                if (Nt = Aa, nu = null, vf(e, h, g, y), n && Sm) {
                  d = Ro;
                  break e;
                }
                break;
              default:
                y = Nt, Nt = Aa, nu = null, vf(e, h, g, y);
            }
          }
          W0(), d = al;
          break;
        } catch (_) {
          Qa(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Ko(), rt = i, Q.H = o, Q.A = f, tt === null && (Lt = null, Pe = 0, Dd()), d;
    }
    function W0() {
      for (; tt !== null; ) ph(tt);
    }
    function pi(e, t) {
      var n = rt;
      rt |= Kl;
      var i = mh(), o = $0();
      if (Lt !== e || Pe !== t) {
        if (Bu) {
          var f = e.memoizedUpdaters;
          0 < f.size && (bf(e, Pe), f.clear()), Iu(e, t);
        }
        pg = null, Yv = wl() + x2, Ru(e, t);
      } else
        Sm = Rt(
          e,
          t
        );
      e: do
        try {
          if (Nt !== Aa && tt !== null)
            t: switch (t = tt, f = nu, Nt) {
              case xv:
                Nt = Aa, nu = null, vf(
                  e,
                  t,
                  f,
                  xv
                );
                break;
              case Kr:
              case kr:
                if (c0(f)) {
                  Nt = Aa, nu = null, F0(t);
                  break;
                }
                t = function() {
                  Nt !== Kr && Nt !== kr || Lt !== e || (Nt = Bv), _n(e);
                }, f.then(t, t);
                break e;
              case dg:
                Nt = Bv;
                break e;
              case w2:
                Nt = gb;
                break e;
              case Bv:
                c0(f) ? (Nt = Aa, nu = null, F0(t)) : (Nt = Aa, nu = null, vf(
                  e,
                  t,
                  f,
                  Bv
                ));
                break;
              case gb:
                var d = null;
                switch (tt.tag) {
                  case 26:
                    d = tt.memoizedState;
                  case 5:
                  case 27:
                    var h = tt;
                    if (d ? nt(d) : h.stateNode.complete) {
                      Nt = Aa, nu = null;
                      var g = h.sibling;
                      if (g !== null) tt = g;
                      else {
                        var y = h.return;
                        y !== null ? (tt = y, fr(y)) : tt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = Aa, nu = null, vf(
                  e,
                  t,
                  f,
                  gb
                );
                break;
              case hg:
                Nt = Aa, nu = null, vf(
                  e,
                  t,
                  f,
                  hg
                );
                break;
              case yb:
                hh(), al = Hv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Q.actQueue !== null ? W0() : ml();
          break;
        } catch (_) {
          Qa(e, _);
        }
      while (!0);
      return Ko(), Q.H = i, Q.A = o, rt = n, tt !== null ? Ro : (Lt = null, Pe = 0, Dd(), al);
    }
    function ml() {
      for (; tt !== null && !Xh(); )
        ph(tt);
    }
    function ph(e) {
      var t = e.alternate;
      (e.mode & Fe) !== je ? (ai(e), t = he(
        e,
        tr,
        t,
        e,
        vc
      ), wd(e)) : t = he(
        e,
        tr,
        t,
        e,
        vc
      ), e.memoizedProps = e.pendingProps, t === null ? fr(e) : tt = t;
    }
    function F0(e) {
      var t = he(e, Ul, e);
      e.memoizedProps = e.pendingProps, t === null ? fr(e) : tt = t;
    }
    function Ul(e) {
      var t = e.alternate, n = (e.mode & Fe) !== je;
      switch (n && ai(e), e.tag) {
        case 15:
        case 0:
          t = O0(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Pe
          );
          break;
        case 11:
          t = O0(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Pe
          );
          break;
        case 5:
          Qi(e);
        default:
          w0(t, e), e = tt = Pm(e, vc), t = tr(t, e, vc);
      }
      return n && wd(e), t;
    }
    function vf(e, t, n, i) {
      Ko(), Qi(t), rm = null, ag = 0;
      var o = t.return;
      try {
        if (b0(
          e,
          o,
          t,
          n,
          Pe
        )) {
          al = rg, Fs(
            e,
            on(n, e.current)
          ), tt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw tt = o, f;
        al = rg, Fs(
          e,
          on(n, e.current)
        ), tt = null;
        return;
      }
      t.flags & 32768 ? (it || i === xv ? e = !0 : Sm || (Pe & 536870912) !== 0 ? e = !1 : (ts = e = !0, (i === Kr || i === kr || i === dg || i === hg) && (i = eu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), I0(t, e)) : fr(t);
    }
    function fr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          I0(
            t,
            ts
          );
          return;
        }
        var n = t.alternate;
        if (e = t.return, ai(t), n = he(
          t,
          U0,
          n,
          t,
          vc
        ), (t.mode & Fe) !== je && Ns(t), n !== null) {
          tt = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          tt = t;
          return;
        }
        tt = t = e;
      } while (t !== null);
      al === Ro && (al = U2);
    }
    function I0(e, t) {
      do {
        var n = dy(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, tt = n;
          return;
        }
        if ((e.mode & Fe) !== je) {
          Ns(e), n = e.actualDuration;
          for (var i = e.child; i !== null; )
            n += i.actualDuration, i = i.sibling;
          e.actualDuration = n;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          tt = e;
          return;
        }
        tt = e = n;
      } while (e !== null);
      al = Hv, tt = null;
    }
    function qt(e, t, n, i, o, f, d, h, g, y, _, U, A, L) {
      e.cancelPendingCommit = null;
      do
        sr();
      while (Yl !== us);
      if (Ai.flushLegacyContextWarning(), Ai.flushPendingUnsafeLifecycleWarnings(), (rt & (Kl | lu)) !== nn)
        throw Error("Should not already be working.");
      if (wa(n), y === Jr ? km(
        A,
        L,
        n,
        gl
      ) : i !== null ? S1(
        A,
        L,
        n,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        gl
      ) : b1(
        A,
        L,
        n,
        gl
      ), t !== null) {
        if (n === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= J1, gs(
          e,
          n,
          f,
          d,
          h,
          g
        ), e === Lt && (tt = Lt = null, Pe = 0), Em = t, is = e, Ri = n, Tb = f, Ab = o, G2 = i, zb = L, V2 = U, Mi = Lv, X2 = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Sf(ro, function() {
          return Eg = window.event, Mi === Lv && (Mi = Eb), rr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), So = null, $f = Hl(), U !== null && E1(
          L,
          $f,
          U,
          gl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null, o = bt.p, bt.p = El, d = rt, rt |= lu;
          try {
            A1(e, t, n);
          } finally {
            rt = d, bt.p = o, Q.T = i;
          }
        }
        Yl = q2, yn(), Mu(), P0();
      }
    }
    function yn() {
      if (Yl === q2) {
        Yl = us;
        var e = is, t = Em, n = Ri, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = bt.p;
          bt.p = El;
          var f = rt;
          rt |= lu;
          try {
            vm = n, bm = e, qc(), ur(t, e), bm = vm = null, n = xb;
            var d = Td(e.containerInfo), h = n.focusedElem, g = n.selectionRange;
            if (d !== h && h && h.ownerDocument && Zg(
              h.ownerDocument.documentElement,
              h
            )) {
              if (g !== null && Zm(h)) {
                var y = g.start, _ = g.end;
                if (_ === void 0 && (_ = y), "selectionStart" in h)
                  h.selectionStart = y, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var U = h.ownerDocument || document, A = U && U.defaultView || window;
                  if (A.getSelection) {
                    var L = A.getSelection(), ce = h.textContent.length, re = Math.min(
                      g.start,
                      ce
                    ), Vt = g.end === void 0 ? re : Math.min(g.end, ce);
                    !L.extend && re > Vt && (d = Vt, Vt = re, re = d);
                    var ot = Qg(
                      h,
                      re
                    ), z = Qg(
                      h,
                      Vt
                    );
                    if (ot && z && (L.rangeCount !== 1 || L.anchorNode !== ot.node || L.anchorOffset !== ot.offset || L.focusNode !== z.node || L.focusOffset !== z.offset)) {
                      var D = U.createRange();
                      D.setStart(ot.node, ot.offset), L.removeAllRanges(), re > Vt ? (L.addRange(D), L.extend(z.node, z.offset)) : (D.setEnd(z.node, z.offset), L.addRange(D));
                    }
                  }
                }
              }
              for (U = [], L = h; L = L.parentNode; )
                L.nodeType === 1 && U.push({
                  element: L,
                  left: L.scrollLeft,
                  top: L.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < U.length; h++) {
                var M = U[h];
                M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
              }
            }
            l1 = !!Hb, xb = Hb = null;
          } finally {
            rt = f, bt.p = o, Q.T = i;
          }
        }
        e.current = t, Yl = j2;
      }
    }
    function Mu() {
      if (Yl === j2) {
        Yl = us;
        var e = X2;
        if (e !== null) {
          $f = Hl();
          var t = bo, n = $f;
          !Kt || n <= t || console.timeStamp(
            e,
            t,
            n,
            ft,
            ct,
            "secondary-light"
          );
        }
        e = is, t = Em, n = Ri;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Q.T, Q.T = null;
          var o = bt.p;
          bt.p = El;
          var f = rt;
          rt |= lu;
          try {
            vm = n, bm = e, qc(), oh(
              e,
              t.alternate,
              t
            ), bm = vm = null;
          } finally {
            rt = f, bt.p = o, Q.T = i;
          }
        }
        e = zb, t = V2, bo = Hl(), e = t === null ? e : $f, t = bo, n = Mi === Sb, i = gl, So !== null ? Fg(
          e,
          t,
          So,
          !1,
          i
        ) : !Kt || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            n ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            ft,
            ct,
            n ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          n ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          ft,
          ct,
          n ? "error" : "secondary-dark"
        )), Yl = Y2;
      }
    }
    function P0() {
      if (Yl === L2 || Yl === Y2) {
        if (Yl === L2) {
          var e = bo;
          bo = Hl();
          var t = bo, n = Mi === Sb;
          !Kt || t <= e || console.timeStamp(
            n ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            ft,
            ct,
            n ? " error" : "secondary-light"
          ), Mi !== Sb && (Mi = B2);
        }
        Yl = us, Qh(), e = is;
        var i = Em;
        t = Ri, n = G2;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Yl = Gv : (Yl = us, Em = is = null, ep(
          e,
          e.pendingLanes
        ), Wr = 0, yg = null);
        var f = e.pendingLanes;
        if (f === 0 && (as = null), o || vh(e), f = un(t), i = i.stateNode, Sl && typeof Sl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case El:
                var h = Cp;
                break;
              case Zl:
                h = Zh;
                break;
              case en:
                h = ro;
                break;
              case hc:
                h = Jh;
                break;
              default:
                h = ro;
            }
            Sl.onCommitFiberRoot(
              ho,
              i,
              h,
              d
            );
          } catch (U) {
            xu || (xu = !0, console.error(
              "React instrumentation encountered an error: %o",
              U
            ));
          }
        if (Bu && e.memoizedUpdaters.clear(), J0(), n !== null) {
          d = Q.T, h = bt.p, bt.p = El, Q.T = null;
          try {
            var g = e.onRecoverableError;
            for (i = 0; i < n.length; i++) {
              var y = n[i], _ = Ty(y.stack);
              he(
                y.source,
                g,
                y.value,
                _
              );
            }
          } finally {
            Q.T = d, bt.p = h;
          }
        }
        (Ri & 3) !== 0 && sr(), _n(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (zv = !0, e === Db ? gg++ : (gg = 0, Db = e)) : gg = 0, o || uc(t, bo), _u(0);
      }
    }
    function Ty(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function ep(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ws(t)));
    }
    function sr() {
      return yn(), Mu(), P0(), rr();
    }
    function rr() {
      if (Yl !== Gv) return !1;
      var e = is, t = Tb;
      Tb = 0;
      var n = un(Ri), i = en > n ? en : n;
      n = Q.T;
      var o = bt.p;
      try {
        bt.p = i, Q.T = null;
        var f = Ab;
        Ab = null, i = is;
        var d = Ri;
        if (Yl = us, Em = is = null, Ri = 0, (rt & (Kl | lu)) !== nn)
          throw Error("Cannot flush passive effects while already rendering.");
        wa(d), Ob = !0, Vv = !1;
        var h = 0;
        if (So = null, h = wl(), Mi === B2)
          $m(
            bo,
            h,
            Sz
          );
        else {
          var g = bo, y = h, _ = Mi === Eb;
          !Kt || y <= g || (gl ? gl.run(
            console.timeStamp.bind(
              console,
              _ ? "Waiting for Paint" : "Waiting",
              g,
              y,
              ft,
              ct,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            g,
            y,
            ft,
            ct,
            "secondary-light"
          ));
        }
        g = rt, rt |= lu;
        var U = i.current;
        qc(), rh(U);
        var A = i.current;
        U = zb, qc(), X0(
          i,
          A,
          d,
          f,
          U
        ), vh(i), rt = g;
        var L = wl();
        if (A = h, U = gl, So !== null ? Fg(
          A,
          L,
          So,
          !0,
          U
        ) : !Kt || L <= A || (U ? U.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            A,
            L,
            ft,
            ct,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          A,
          L,
          ft,
          ct,
          "secondary-dark"
        )), uc(d, L), _u(0, !1), Vv ? i === yg ? Wr++ : (Wr = 0, yg = i) : Wr = 0, Vv = Ob = !1, Sl && typeof Sl.onPostCommitFiberRoot == "function")
          try {
            Sl.onPostCommitFiberRoot(ho, i);
          } catch (re) {
            xu || (xu = !0, console.error(
              "React instrumentation encountered an error: %o",
              re
            ));
          }
        var ce = i.current.stateNode;
        return ce.effectDuration = 0, ce.passiveEffectDuration = 0, !0;
      } finally {
        bt.p = o, Q.T = n, ep(e, t);
      }
    }
    function vn(e, t, n) {
      t = on(n, t), ny(t), t = kd(e.stateNode, t, 2), e = gu(e, t, 2), e !== null && (qn(e, 2), _n(e));
    }
    function Je(e, t, n) {
      if (Tm = !1, e.tag === 3)
        vn(e, e, n);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            vn(
              t,
              e,
              n
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (as === null || !as.has(i))) {
              e = on(n, e), ny(e), n = $d(2), i = gu(t, n, 2), i !== null && (Wd(
                n,
                i,
                t,
                e
              ), qn(i, 2), _n(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          n
        );
      }
    }
    function gh(e, t, n) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new _z();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(n) || (vb = !0, o.add(n), i = Mn.bind(null, e, t, n), Bu && bf(e, n), t.then(i, i));
    }
    function Mn(e, t, n) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, (n & 127) !== 0 ? 0 > gc && (qr = gc = Hl(), Jp = yv("Promise Resolved"), Wf = vv) : (n & 4194048) !== 0 && 0 > Qu && (Eo = Qu = Hl(), kp = yv("Promise Resolved"), P1 = vv), K0() && Q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Lt === e && (Pe & n) === n && (al === es || al === Nv && (Pe & 62914560) === Pe && wl() - jv < H2 ? (rt & Kl) === nn && Ru(e, 0) : bb |= n, $r === Pe && ($r = 0)), _n(e);
    }
    function tp(e, t) {
      t === 0 && (t = au()), e = Wl(e, t), e !== null && (qn(e, t), _n(e));
    }
    function gi(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), tp(e, n);
    }
    function lo(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), tp(e, n);
    }
    function Za(e, t, n) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === En;
          f = n || f, o.tag !== 22 ? o.flags & 67108864 ? f && he(
            o,
            yh,
            i,
            o
          ) : Za(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? he(
            o,
            yh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && he(
            o,
            Za,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function yh(e, t) {
      Ot(!0);
      try {
        fh(t), Z0(t), V0(e, t.alternate, t, !1), or(e, t, 0, null, !1, 0);
      } finally {
        Ot(!1);
      }
    }
    function vh(e) {
      var t = !0;
      e.current.mode & (Hn | zi) || (t = !1), Za(
        e,
        e.current,
        t
      );
    }
    function Sa(e) {
      if ((rt & Kl) === nn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = de(e) || "ReactComponent", Xv !== null) {
            if (Xv.has(t)) return;
            Xv.add(t);
          } else Xv = /* @__PURE__ */ new Set([t]);
          he(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function bf(e, t) {
      Bu && e.memoizedUpdaters.forEach(function(n) {
        Al(e, n, t);
      });
    }
    function Sf(e, t) {
      var n = Q.actQueue;
      return n !== null ? (n.push(t), wz) : _p(e, t);
    }
    function dr(e) {
      K0() && Q.actQueue === null && he(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          de(e)
        );
      });
    }
    function _n(e) {
      e !== zm && e.next === null && (zm === null ? Qv = zm = e : zm = zm.next = e), Zv = !0, Q.actQueue !== null ? Mb || (Mb = !0, Ay()) : Rb || (Rb = !0, Ay());
    }
    function _u(e, t) {
      if (!_b && Zv) {
        _b = !0;
        do
          for (var n = !1, i = Qv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ql(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (n = !0, hr(i, f));
            } else
              f = Pe, f = dl(
                i,
                i === Lt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== ed
              ), (f & 3) === 0 || Rt(i, f) || (n = !0, hr(i, f));
            i = i.next;
          }
        while (n);
        _b = !1;
      }
    }
    function zy() {
      Eg = window.event, bh();
    }
    function bh() {
      Zv = Mb = Rb = !1;
      var e = 0;
      cs !== 0 && up() && (e = cs);
      for (var t = wl(), n = null, i = Qv; i !== null; ) {
        var o = i.next, f = Ef(i, t);
        f === 0 ? (i.next = null, n === null ? Qv = o : n.next = o, o === null && (zm = n)) : (n = i, (e !== 0 || (f & 3) !== 0) && (Zv = !0)), i = o;
      }
      Yl !== us && Yl !== Gv || _u(e), cs !== 0 && (cs = 0);
    }
    function Ef(e, t) {
      for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ql(f), h = 1 << d, g = o[d];
        g === -1 ? ((h & n) === 0 || (h & i) !== 0) && (o[d] = An(h, t)) : g <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Lt, n = Pe, n = dl(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ed
      ), i = e.callbackNode, n === 0 || e === t && (Nt === Kr || Nt === kr) || e.cancelPendingCommit !== null)
        return i !== null && Sh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Rt(e, n)) {
        if (t = n & -n, t !== e.callbackPriority || Q.actQueue !== null && i !== Cb)
          Sh(i);
        else return t;
        switch (un(n)) {
          case El:
          case Zl:
            n = Zh;
            break;
          case en:
            n = ro;
            break;
          case hc:
            n = Jh;
            break;
          default:
            n = ro;
        }
        return i = lp.bind(null, e), Q.actQueue !== null ? (Q.actQueue.push(i), n = Cb) : n = _p(n, i), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return i !== null && Sh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function lp(e, t) {
      if (zv = Tv = !1, Eg = window.event, Yl !== us && Yl !== Gv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (Mi === Lv && (Mi = Eb), sr() && e.callbackNode !== n)
        return null;
      var i = Pe;
      return i = dl(
        e,
        e === Lt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ed
      ), i === 0 ? null : (by(
        e,
        i,
        t
      ), Ef(e, wl()), e.callbackNode != null && e.callbackNode === n ? lp.bind(null, e) : null);
    }
    function hr(e, t) {
      if (sr()) return null;
      Tv = zv, zv = !1, by(e, t, !0);
    }
    function Sh(e) {
      e !== Cb && e !== null && Vh(e);
    }
    function Ay() {
      Q.actQueue !== null && Q.actQueue.push(function() {
        return bh(), null;
      }), Vz(function() {
        (rt & (Kl | lu)) !== nn ? _p(
          Cp,
          zy
        ) : bh();
      });
    }
    function np() {
      if (cs === 0) {
        var e = Lr;
        e === 0 && (e = Yf, Yf <<= 1, (Yf & 261888) === 0 && (Yf = 256)), cs = e;
      }
      return cs;
    }
    function mt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (gt(e, "action"), Ts("" + e));
    }
    function Ct(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function ut(e, t, n, i, o) {
      if (t === "submit" && n && n.stateNode === o) {
        var f = mt(
          (o[Tn] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Tn] || null) ? mt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new sv(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (cs !== 0) {
                    var g = d ? Ct(
                      o,
                      d
                    ) : new FormData(o), y = {
                      pending: !0,
                      data: g,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(y), di(
                      n,
                      y,
                      null,
                      g
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), g = d ? Ct(
                    o,
                    d
                  ) : new FormData(o), y = {
                    pending: !0,
                    data: g,
                    method: o.method,
                    action: f
                  }, Object.freeze(y), di(
                    n,
                    y,
                    f,
                    g
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function et(e, t, n) {
      e.currentTarget = n;
      try {
        t(e);
      } catch (i) {
        V1(i);
      }
      e.currentTarget = null;
    }
    function At(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], g = h.instance, y = h.currentTarget;
              if (h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? he(
                g,
                et,
                f,
                h,
                y
              ) : et(f, h, y), o = g;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], g = h.instance, y = h.currentTarget, h = h.listener, g !== o && f.isPropagationStopped())
                break e;
              g !== null ? he(
                g,
                et,
                f,
                h,
                y
              ) : et(f, h, y), o = g;
            }
        }
      }
    }
    function Be(e, t) {
      Ub.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var n = t[mo];
      n === void 0 && (n = t[mo] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      n.has(i) || (Eh(t, e, 2, !1), n.add(i));
    }
    function Cu(e, t, n) {
      Ub.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Eh(
        n,
        e,
        i,
        t
      );
    }
    function ic(e) {
      if (!e[Jv]) {
        e[Jv] = !0, uv.forEach(function(n) {
          n !== "selectionchange" && (Ub.has(n) || Cu(n, !1, e), Cu(n, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Jv] || (t[Jv] = !0, Cu("selectionchange", !1, t));
      }
    }
    function Eh(e, t, n, i) {
      switch (xh(t)) {
        case El:
          var o = vp;
          break;
        case Zl:
          o = Xl;
          break;
        default:
          o = bp;
      }
      n = o.bind(
        null,
        t,
        n,
        e
      ), o = void 0, !w1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
      }) : e.addEventListener(
        t,
        n,
        !1
      );
    }
    function Ja(e, t, n, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var g = d.tag;
                if ((g === 3 || g === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Pu(h), d === null) return;
              if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      vd(function() {
        var y = f, _ = Ca(n), U = [];
        e: {
          var A = DS.get(e);
          if (A !== void 0) {
            var L = sv, ce = e;
            switch (e) {
              case "keypress":
                if (zs(n) === 0) break e;
              case "keydown":
              case "keyup":
                L = KT;
                break;
              case "focusin":
                ce = "focus", L = B1;
                break;
              case "focusout":
                ce = "blur", L = B1;
                break;
              case "beforeblur":
              case "afterblur":
                L = B1;
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
                L = rS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = xT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = WT;
                break;
              case ES:
              case TS:
              case zS:
                L = jT;
                break;
              case AS:
                L = IT;
                break;
              case "scroll":
              case "scrollend":
                L = NT;
                break;
              case "wheel":
                L = ez;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = LT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = hS;
                break;
              case "toggle":
              case "beforetoggle":
                L = lz;
            }
            var re = (t & 4) !== 0, Vt = !re && (e === "scroll" || e === "scrollend"), ot = re ? A !== null ? A + "Capture" : null : A;
            re = [];
            for (var z = y, D; z !== null; ) {
              var M = z;
              if (D = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || D === null || ot === null || (M = su(z, ot), M != null && re.push(
                jt(
                  z,
                  M,
                  D
                )
              )), Vt) break;
              z = z.return;
            }
            0 < re.length && (A = new L(
              A,
              ce,
              null,
              n,
              _
            ), U.push({
              event: A,
              listeners: re
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (A = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", A && n !== xp && (ce = n.relatedTarget || n.fromElement) && (Pu(ce) || ce[Ti]))
              break e;
            if ((L || A) && (A = _.window === _ ? _ : (A = _.ownerDocument) ? A.defaultView || A.parentWindow : window, L ? (ce = n.relatedTarget || n.toElement, L = y, ce = ce ? Pu(ce) : null, ce !== null && (Vt = se(ce), re = ce.tag, ce !== Vt || re !== 5 && re !== 27 && re !== 6) && (ce = null)) : (L = null, ce = y), L !== ce)) {
              if (re = rS, M = "onMouseLeave", ot = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (re = hS, M = "onPointerLeave", ot = "onPointerEnter", z = "pointer"), Vt = L == null ? A : wi(L), D = ce == null ? A : wi(ce), A = new re(
                M,
                z + "leave",
                L,
                n,
                _
              ), A.target = Vt, A.relatedTarget = D, M = null, Pu(_) === y && (re = new re(
                ot,
                z + "enter",
                ce,
                n,
                _
              ), re.target = D, re.relatedTarget = Vt, M = re), Vt = M, L && ce)
                t: {
                  for (re = no, ot = L, z = ce, D = 0, M = ot; M; M = re(M))
                    D++;
                  M = 0;
                  for (var $ = z; $; $ = re($))
                    M++;
                  for (; 0 < D - M; )
                    ot = re(ot), D--;
                  for (; 0 < M - D; )
                    z = re(z), M--;
                  for (; D--; ) {
                    if (ot === z || z !== null && ot === z.alternate) {
                      re = ot;
                      break t;
                    }
                    ot = re(ot), z = re(z);
                  }
                  re = null;
                }
              else re = null;
              L !== null && Th(
                U,
                A,
                L,
                re,
                !1
              ), ce !== null && Vt !== null && Th(
                U,
                Vt,
                ce,
                re,
                !0
              );
            }
          }
          e: {
            if (A = y ? wi(y) : window, L = A.nodeName && A.nodeName.toLowerCase(), L === "select" || L === "input" && A.type === "file")
              var fe = Bi;
            else if (Vm(A))
              if (bS)
                fe = Rs;
              else {
                fe = Xm;
                var Ve = v1;
              }
            else
              L = A.nodeName, !L || L.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? y && fu(y.elementType) && (fe = Bi) : fe = Qm;
            if (fe && (fe = fe(e, y))) {
              Ds(
                U,
                fe,
                n,
                _
              );
              break e;
            }
            Ve && Ve(e, A, y), e === "focusout" && y && A.type === "number" && y.memoizedProps.value != null && Nm(A, "number", A.value);
          }
          switch (Ve = y ? wi(y) : window, e) {
            case "focusin":
              (Vm(Ve) || Ve.contentEditable === "true") && (em = Ve, j1 = y, Vp = null);
              break;
            case "focusout":
              Vp = j1 = em = null;
              break;
            case "mousedown":
              Y1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Y1 = !1, Jg(
                U,
                n,
                _
              );
              break;
            case "selectionchange":
              if (iz) break;
            case "keydown":
            case "keyup":
              Jg(
                U,
                n,
                _
              );
          }
          var Re;
          if (q1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Te = "onCompositionStart";
                  break e;
                case "compositionend":
                  Te = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Te = "onCompositionUpdate";
                  break e;
              }
              Te = void 0;
            }
          else
            Ph ? Vo(e, n) && (Te = "onCompositionEnd") : e === "keydown" && n.keyCode === mS && (Te = "onCompositionStart");
          Te && (pS && n.locale !== "ko" && (Ph || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Ph && (Re = Rc()) : (Qf = _, N1 = "value" in Qf ? Qf.value : Qf.textContent, Ph = !0)), Ve = Ka(
            y,
            Te
          ), 0 < Ve.length && (Te = new dS(
            Te,
            e,
            null,
            n,
            _
          ), U.push({
            event: Te,
            listeners: Ve
          }), Re ? Te.data = Re : (Re = li(n), Re !== null && (Te.data = Re)))), (Re = az ? Gm(e, n) : bd(e, n)) && (Te = Ka(
            y,
            "onBeforeInput"
          ), 0 < Te.length && (Ve = new VT(
            "onBeforeInput",
            "beforeinput",
            null,
            n,
            _
          ), U.push({
            event: Ve,
            listeners: Te
          }), Ve.data = Re)), ut(
            U,
            e,
            y,
            n,
            _
          );
        }
        At(U, t);
      });
    }
    function jt(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function Ka(e, t) {
      for (var n = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = su(e, n), o != null && i.unshift(
          jt(e, o, f)
        ), o = su(e, t), o != null && i.push(
          jt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function no(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Th(e, t, n, i, o) {
      for (var f = t._reactName, d = []; n !== null && n !== i; ) {
        var h = n, g = h.alternate, y = h.stateNode;
        if (h = h.tag, g !== null && g === i) break;
        h !== 5 && h !== 26 && h !== 27 || y === null || (g = y, o ? (y = su(n, f), y != null && d.unshift(
          jt(n, y, g)
        )) : o || (y = su(n, f), y != null && d.push(
          jt(n, y, g)
        ))), n = n.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function bn(e, t) {
      Gg(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || fS || (fS = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var n = {
        registrationNameDependencies: qu,
        possibleRegistrationNames: Vf
      };
      fu(e) || typeof t.is == "string" || y1(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ft(e, t, n, i) {
      t !== n && (n = ka(n), ka(t) !== n && (i[e] = t));
    }
    function mr(e, t, n) {
      t.forEach(function(i) {
        n[yi(i)] = i === "style" ? cc(e) : e.getAttribute(i);
      });
    }
    function It(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function zh(e, t) {
      return e = e.namespaceURI === Xe || e.namespaceURI === Ke ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function ka(e) {
      return oa(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        bc(e)
      ), Bn(e)), (typeof e == "string" ? e : "" + e).replace(Nz, `
`).replace(Hz, "");
    }
    function ap(e, t) {
      return t = ka(t), ka(e) === t;
    }
    function vt(e, t, n, i, o, f) {
      switch (n) {
        case "children":
          typeof i == "string" ? (Es(i, t, !1), t === "body" || t === "textarea" && i === "" || Oc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Es("" + i, t, !1), t !== "body" && Oc(e, "" + i));
          break;
        case "className":
          vs(e, "class", i);
          break;
        case "tabIndex":
          vs(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          vs(e, n, i);
          break;
        case "style":
          jm(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            vs(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || n !== "href")) {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            ), e.removeAttribute(n);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          gt(i, n), i = Ts("" + i), e.setAttribute(n, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? n === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || $v || ($v = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || kv || (kv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? n === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Kv ? t !== "button" || o.type == null || o.type === "submit" || Kv ? typeof i == "function" && (o.name == null || k2 || (k2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || $v || ($v = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || kv || (kv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Kv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Kv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (n === "formAction" ? (t !== "input" && vt(e, t, "name", o.name, o, null), vt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), vt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), vt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (vt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), vt(e, t, "method", o.method, o, null), vt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          gt(i, n), i = Ts("" + i), e.setAttribute(n, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && It(n, i), e.onclick = sa);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && It(n, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && It(n, i), Be("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
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
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          gt(i, n), n = Ts("" + i), e.setAttributeNS(Fr, "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (gt(i, n), e.setAttribute(n, "" + i)) : e.removeAttribute(n);
          break;
        case "inert":
          i !== "" || Wv[n] || (Wv[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
          ));
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
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (gt(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (gt(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : (gt(i, n), e.setAttribute(n, i));
          break;
        case "popover":
          Be("beforetoggle", e), Be("toggle", e), cd(e, "popover", i);
          break;
        case "xlinkActuate":
          iu(
            e,
            Fr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          iu(
            e,
            Fr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          iu(
            e,
            Fr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          iu(
            e,
            Fr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          iu(
            e,
            Fr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          iu(
            e,
            Fr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          iu(
            e,
            wb,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          iu(
            e,
            wb,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          iu(
            e,
            wb,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), cd(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          $2 || i == null || typeof i != "object" || ($2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = Yg(n), cd(e, n, i)) : qu.hasOwnProperty(n) && i != null && typeof i != "function" && It(n, i);
      }
    }
    function Tf(e, t, n, i, o, f) {
      switch (n) {
        case "style":
          jm(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Oc(e, i) : (typeof i == "number" || typeof i == "bigint") && Oc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && It(n, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && It(n, i), Be("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && It(n, i), e.onclick = sa);
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
          if (qu.hasOwnProperty(n))
            i != null && typeof i != "function" && It(n, i);
          else
            e: {
              if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), f = e[Tn] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
                break e;
              }
              n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : cd(e, n, i);
            }
      }
    }
    function Zt(e, t, n) {
      switch (bn(t, n), t) {
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
          Be("error", e), Be("load", e);
          var i = !1, o = !1, f;
          for (f in n)
            if (n.hasOwnProperty(f)) {
              var d = n[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    vt(e, t, f, d, n, null);
                }
            }
          o && vt(e, t, "srcSet", n.srcSet, n, null), i && vt(e, t, "src", n.src, n, null);
          return;
        case "input":
          Ec("input", n), Be("invalid", e);
          var h = f = d = o = null, g = null, y = null;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              var _ = n[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    o = _;
                    break;
                  case "type":
                    d = _;
                    break;
                  case "checked":
                    g = _;
                    break;
                  case "defaultChecked":
                    y = _;
                    break;
                  case "value":
                    f = _;
                    break;
                  case "defaultValue":
                    h = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    vt(e, t, i, _, n, null);
                }
            }
          cn(e, n), sd(
            e,
            f,
            h,
            g,
            y,
            d,
            o,
            !1
          );
          return;
        case "select":
          Ec("select", n), Be("invalid", e), i = d = f = null;
          for (o in n)
            if (n.hasOwnProperty(o) && (h = n[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  vt(
                    e,
                    t,
                    o,
                    h,
                    n,
                    null
                  );
              }
          rd(e, n), t = f, n = d, e.multiple = !!i, t != null ? cu(e, !!i, t, !1) : n != null && cu(e, !!i, n, !0);
          return;
        case "textarea":
          Ec("textarea", n), Be("invalid", e), f = o = i = null;
          for (d in n)
            if (n.hasOwnProperty(d) && (h = n[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  vt(
                    e,
                    t,
                    d,
                    h,
                    n,
                    null
                  );
              }
          Tc(e, n), Bo(e, i, o, f);
          return;
        case "option":
          jg(e, n);
          for (g in n)
            if (n.hasOwnProperty(g) && (i = n[g], i != null))
              switch (g) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  vt(e, t, g, i, n, null);
              }
          return;
        case "dialog":
          Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
          break;
        case "iframe":
        case "object":
          Be("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < vg.length; i++)
            Be(vg[i], e);
          break;
        case "image":
          Be("error", e), Be("load", e);
          break;
        case "details":
          Be("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Be("error", e), Be("load", e);
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
          for (y in n)
            if (n.hasOwnProperty(y) && (i = n[y], i != null))
              switch (y) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  vt(e, t, y, i, n, null);
              }
          return;
        default:
          if (fu(t)) {
            for (_ in n)
              n.hasOwnProperty(_) && (i = n[_], i !== void 0 && Tf(
                e,
                t,
                _,
                i,
                n,
                void 0
              ));
            return;
          }
      }
      for (h in n)
        n.hasOwnProperty(h) && (i = n[h], i != null && vt(e, t, h, i, n, null));
    }
    function bl(e, t, n, i) {
      switch (bn(t, i), t) {
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
          var o = null, f = null, d = null, h = null, g = null, y = null, _ = null;
          for (L in n) {
            var U = n[L];
            if (n.hasOwnProperty(L) && U != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  g = U;
                default:
                  i.hasOwnProperty(L) || vt(
                    e,
                    t,
                    L,
                    null,
                    i,
                    U
                  );
              }
          }
          for (var A in i) {
            var L = i[A];
            if (U = n[A], i.hasOwnProperty(A) && (L != null || U != null))
              switch (A) {
                case "type":
                  f = L;
                  break;
                case "name":
                  o = L;
                  break;
                case "checked":
                  y = L;
                  break;
                case "defaultChecked":
                  _ = L;
                  break;
                case "value":
                  d = L;
                  break;
                case "defaultValue":
                  h = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  L !== U && vt(
                    e,
                    t,
                    A,
                    L,
                    i,
                    U
                  );
              }
          }
          t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || K2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), K2 = !0), !t || i || J2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), J2 = !0), Ni(
            e,
            d,
            h,
            g,
            y,
            _,
            f,
            o
          );
          return;
        case "select":
          L = d = h = A = null;
          for (f in n)
            if (g = n[f], n.hasOwnProperty(f) && g != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  L = g;
                default:
                  i.hasOwnProperty(f) || vt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    g
                  );
              }
          for (o in i)
            if (f = i[o], g = n[o], i.hasOwnProperty(o) && (f != null || g != null))
              switch (o) {
                case "value":
                  A = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== g && vt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    g
                  );
              }
          i = h, t = d, n = L, A != null ? cu(e, !!t, A, !1) : !!n != !!t && (i != null ? cu(e, !!t, i, !0) : cu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          L = A = null;
          for (h in n)
            if (o = n[h], n.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  vt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = n[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  A = o;
                  break;
                case "defaultValue":
                  L = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && vt(e, t, d, o, i, f);
              }
          zc(e, A, L);
          return;
        case "option":
          for (var ce in n)
            if (A = n[ce], n.hasOwnProperty(ce) && A != null && !i.hasOwnProperty(ce))
              switch (ce) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  vt(
                    e,
                    t,
                    ce,
                    null,
                    i,
                    A
                  );
              }
          for (g in i)
            if (A = i[g], L = n[g], i.hasOwnProperty(g) && A !== L && (A != null || L != null))
              switch (g) {
                case "selected":
                  e.selected = A && typeof A != "function" && typeof A != "symbol";
                  break;
                default:
                  vt(
                    e,
                    t,
                    g,
                    A,
                    i,
                    L
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
          for (var re in n)
            A = n[re], n.hasOwnProperty(re) && A != null && !i.hasOwnProperty(re) && vt(
              e,
              t,
              re,
              null,
              i,
              A
            );
          for (y in i)
            if (A = i[y], L = n[y], i.hasOwnProperty(y) && A !== L && (A != null || L != null))
              switch (y) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  vt(
                    e,
                    t,
                    y,
                    A,
                    i,
                    L
                  );
              }
          return;
        default:
          if (fu(t)) {
            for (var Vt in n)
              A = n[Vt], n.hasOwnProperty(Vt) && A !== void 0 && !i.hasOwnProperty(Vt) && Tf(
                e,
                t,
                Vt,
                void 0,
                i,
                A
              );
            for (_ in i)
              A = i[_], L = n[_], !i.hasOwnProperty(_) || A === L || A === void 0 && L === void 0 || Tf(
                e,
                t,
                _,
                A,
                i,
                L
              );
            return;
          }
      }
      for (var ot in n)
        A = n[ot], n.hasOwnProperty(ot) && A != null && !i.hasOwnProperty(ot) && vt(e, t, ot, null, i, A);
      for (U in i)
        A = i[U], L = n[U], !i.hasOwnProperty(U) || A === L || A == null && L == null || vt(e, t, U, A, i, L);
    }
    function yi(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function cc(e) {
      var t = {};
      e = e.style;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Uu(e, t, n) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ps(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || be.has(f) ? (ps(d, f), i += o + f.replace(Z, "-$1").toLowerCase().replace(ye, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Z, "-$1").toLowerCase().replace(ye, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = ka(i), ka(t) !== i && (n.style = cc(e)));
      }
    }
    function Cn(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (gt(i, t), e === "" + i)
              return;
        }
      Ft(t, e, i, f);
    }
    function Ah(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Ft(t, e, i, f);
    }
    function Dh(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (gt(i, n), e === "" + i)
              return;
        }
      Ft(t, e, i, f);
    }
    function zf(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (gt(i, t), e === "" + i))
              return;
        }
      Ft(t, e, i, f);
    }
    function pr(e, t, n, i, o, f) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (gt(i, t), n = Ts("" + i), e === n)
              return;
        }
      Ft(t, e, i, f);
    }
    function Un(e, t, n, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (fu(t)) {
        for (var g in n)
          if (n.hasOwnProperty(g)) {
            var y = n[g];
            if (y != null) {
              if (qu.hasOwnProperty(g))
                typeof y != "function" && It(g, y);
              else if (n.suppressHydrationWarning !== !0)
                switch (g) {
                  case "children":
                    typeof y != "string" && typeof y != "number" || Ft(
                      "children",
                      e.textContent,
                      y,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = zh(e, y), Ft(
                      g,
                      d,
                      y,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(g), Uu(e, y, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(g.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      g
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = xo(
                      e,
                      "class",
                      y
                    ), Ft(
                      "className",
                      d,
                      y,
                      o
                    );
                    continue;
                  default:
                    i.context === Mo && t !== "svg" && t !== "math" ? f.delete(g.toLowerCase()) : f.delete(g), d = xo(
                      e,
                      g,
                      y
                    ), Ft(
                      g,
                      d,
                      y,
                      o
                    );
                }
            }
          }
      } else
        for (y in n)
          if (n.hasOwnProperty(y) && (g = n[y], g != null)) {
            if (qu.hasOwnProperty(y))
              typeof g != "function" && It(y, g);
            else if (n.suppressHydrationWarning !== !0)
              switch (y) {
                case "children":
                  typeof g != "string" && typeof g != "number" || Ft(
                    "children",
                    e.textContent,
                    g,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = zh(e, g), d !== g && (o[y] = { __html: d }));
                  continue;
                case "className":
                  Cn(
                    e,
                    y,
                    "class",
                    g,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Cn(
                    e,
                    y,
                    "tabindex",
                    g,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(y), Uu(e, g, o);
                  continue;
                case "multiple":
                  f.delete(y), Ft(
                    y,
                    e.multiple,
                    g,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(y), Ft(
                    y,
                    e.muted,
                    g,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ft(
                    y,
                    e.autofocus,
                    g,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(y), d = e.getAttribute("data"), Ft(
                      y,
                      d,
                      g,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(g !== "" || t === "a" && y === "href" || t === "object" && y === "data")) {
                    console.error(
                      y === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      y,
                      y
                    );
                    continue;
                  }
                  pr(
                    e,
                    y,
                    y,
                    g,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(y), typeof g == "function") {
                    f.delete(y.toLowerCase()), y === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === xz) {
                    f.delete(y.toLowerCase()), Ft(
                      y,
                      "function",
                      g,
                      o
                    );
                    continue;
                  }
                  pr(
                    e,
                    y,
                    y.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  pr(
                    e,
                    y,
                    "xlink:href",
                    g,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Dh(
                    e,
                    y,
                    "contenteditable",
                    g,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Dh(
                    e,
                    y,
                    "spellcheck",
                    g,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Dh(
                    e,
                    y,
                    y,
                    g,
                    f,
                    o
                  );
                  continue;
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
                  Ah(
                    e,
                    y,
                    y.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var _ = d = y, U = o;
                    if (f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (g === !1) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (g === !0 && h === "") break e;
                          break;
                        default:
                          if (gt(g, d), h === "" + g)
                            break e;
                      }
                    Ft(
                      d,
                      h,
                      g,
                      U
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, _ = d = y, U = o, f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(g) || 1 > g) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(g) || 1 > g) && (gt(g, d), h === "" + g))
                            break e;
                      }
                    Ft(
                      d,
                      h,
                      g,
                      U
                    );
                  }
                  continue;
                case "rowSpan":
                  zf(
                    e,
                    y,
                    "rowspan",
                    g,
                    f,
                    o
                  );
                  continue;
                case "start":
                  zf(
                    e,
                    y,
                    y,
                    g,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Cn(
                    e,
                    y,
                    "x-height",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Cn(
                    e,
                    y,
                    "xlink:actuate",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Cn(
                    e,
                    y,
                    "xlink:arcrole",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Cn(
                    e,
                    y,
                    "xlink:role",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Cn(
                    e,
                    y,
                    "xlink:show",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Cn(
                    e,
                    y,
                    "xlink:title",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Cn(
                    e,
                    y,
                    "xlink:type",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Cn(
                    e,
                    y,
                    "xml:base",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Cn(
                    e,
                    y,
                    "xml:lang",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Cn(
                    e,
                    y,
                    "xml:space",
                    g,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  g !== "" || Wv[y] || (Wv[y] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    y
                  )), Ah(
                    e,
                    y,
                    y,
                    g,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
                    h = Yg(y), d = !1, i.context === Mo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (_ = y.toLowerCase(), _ = Ia.hasOwnProperty(
                      _
                    ) && Ia[_] || null, _ !== null && _ !== y && (d = !0, f.delete(_)), f.delete(h));
                    e: if (_ = e, U = h, h = g, ys(U))
                      if (_.hasAttribute(U))
                        _ = _.getAttribute(
                          U
                        ), gt(
                          h,
                          U
                        ), h = _ === "" + h ? h : _;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (_ = U.toLowerCase().slice(0, 5), _ !== "data-" && _ !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ft(
                      y,
                      h,
                      g,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && n.suppressHydrationWarning !== !0 && mr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Dy(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Sn(e) {
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
    function Oy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
          var o = n[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Sn(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < n.length; i++) {
              var g = n[i], y = g.startTime;
              if (y > h) break;
              var _ = g.transferSize, U = g.initiatorType;
              _ && Sn(U) && (g = g.responseEnd, d += _ * (g < h ? 1 : (h - y) / (g - y)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function gr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ry(e) {
      switch (e) {
        case Ke:
          return Dm;
        case Xe:
          return Iv;
        default:
          return Mo;
      }
    }
    function vi(e, t) {
      if (e === Mo)
        switch (t) {
          case "svg":
            return Dm;
          case "math":
            return Iv;
          default:
            return Mo;
        }
      return e === Dm && t === "foreignObject" ? Mo : e;
    }
    function Af(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function up() {
      var e = window.event;
      return e && e.type === "popstate" ? e === Bb ? !1 : (Bb = e, !0) : (Bb = null, !1);
    }
    function wu() {
      var e = window.event;
      return e && e !== Eg ? e.type : null;
    }
    function Df() {
      var e = window.event;
      return e && e !== Eg ? e.timeStamp : -1.1;
    }
    function My(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _y(e, t, n) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          break;
        case "img":
          n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
      }
    }
    function Cy() {
    }
    function Oh(e, t, n, i) {
      bl(e, t, n, i), e[Tn] = i;
    }
    function Rh(e) {
      Oc(e, "");
    }
    function D1(e, t, n) {
      e.nodeValue = n;
    }
    function Uy(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Tn] || null;
        if (t !== null) {
          var n = Ra(e);
          n !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, he(n, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, he(n, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function oc(e) {
      return e === "head";
    }
    function wy(e, t) {
      e.removeChild(t);
    }
    function Ny(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function ao(e, t) {
      var n = t, i = 0;
      do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
          if (n = o.data, n === Sg || n === Fv) {
            if (i === 0) {
              e.removeChild(o), oo(t);
              return;
            }
            i--;
          } else if (n === bg || n === os || n === Pr || n === Am || n === Ir)
            i++;
          else if (n === qz)
            Si(
              e.ownerDocument.documentElement
            );
          else if (n === Yz) {
            n = e.ownerDocument.head, Si(n);
            for (var f = n.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Gf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f), f = d;
            }
          } else
            n === jz && Si(e.ownerDocument.body);
        n = o;
      } while (n);
      oo(t);
    }
    function yr(e, t) {
      var n = e;
      e = 0;
      do {
        var i = n.nextSibling;
        if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
          if (n = i.data, n === Sg) {
            if (e === 0) break;
            e--;
          } else
            n !== bg && n !== os && n !== Pr && n !== Am || e++;
        n = i;
      } while (n);
    }
    function Hy(e) {
      yr(e, !0);
    }
    function xy(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function By(e) {
      e.nodeValue = "";
    }
    function qy(e) {
      yr(e, !1);
    }
    function jy(e, t) {
      t = t[Lz], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Yy(e, t) {
      e.nodeValue = t;
    }
    function Of(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Of(n), Cm(n);
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
    function Ly(e, t, n, i) {
      for (; e.nodeType === 1; ) {
        var o = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Gf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          gt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Pn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Gy(e, t, n) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Pn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Dt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Pn(e.nextSibling), e === null)) return null;
      return e;
    }
    function vr(e) {
      return e.data === os || e.data === Pr;
    }
    function ip(e) {
      return e.data === Am || e.data === os && e.ownerDocument.readyState !== F2;
    }
    function Vy(e, t) {
      var n = e.ownerDocument;
      if (e.data === Pr)
        e._reactRetry = t;
      else if (e.data !== os || n.readyState !== F2)
        t();
      else {
        var i = function() {
          t(), n.removeEventListener("DOMContentLoaded", i);
        };
        n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Pn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === bg || t === Am || t === os || t === Pr || t === Ir || t === Nb || t === W2)
            break;
          if (t === Sg || t === Fv)
            return null;
        }
      }
      return e;
    }
    function Xy(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), n = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          n[yi(f.name)] = f.name.toLowerCase() === "style" ? cc(e) : f.value;
        }
        return { type: t, props: n };
      }
      return e.nodeType === 8 ? e.data === Ir ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Qy(e, t, n) {
      return n === null || n[Bz] !== !0 ? (e.nodeValue === t ? e = null : (t = ka(t), e = ka(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Rf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === Sg || n === Fv) {
            if (t === 0)
              return Pn(e.nextSibling);
            t--;
          } else
            n !== bg && n !== Am && n !== os && n !== Pr && n !== Ir || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function uo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === bg || n === Am || n === os || n === Pr || n === Ir) {
            if (t === 0) return e;
            t--;
          } else
            n !== Sg && n !== Fv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function cp(e) {
      oo(e);
    }
    function Mh(e) {
      oo(e);
    }
    function op(e) {
      oo(e);
    }
    function bi(e, t, n, i, o) {
      switch (o && Ss(e, i.ancestorInfo), t = gr(n), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Nu(e, t, n, i) {
      if (!n[Ti] && Ra(n)) {
        var o = n.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = n.attributes; o.length; )
        n.removeAttributeNode(o[0]);
      Zt(n, e, t), n[Jt] = i, n[Tn] = t;
    }
    function Si(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Cm(e);
    }
    function _h(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function fp(e, t, n) {
      var i = Om;
      if (i && typeof t == "string" && t) {
        var o = Mt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), nE.has(o) || (nE.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Zt(t, "link", e), ul(t), i.head.appendChild(t)));
      }
    }
    function sp(e, t, n, i) {
      var o = (o = ea.current) ? _h(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (n = io(n.href), t = fa(o).hoistableStyles, i = t.get(n), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = io(n.href);
            var f = fa(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: td, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Sr(e)
            )) && !f._p && (d.instance = f, d.state.loading = Tg | ku), !$u.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              };
              $u.set(e, h), f || Zy(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw n = `

  - ` + br(t) + `
  + ` + br(n), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
              );
            return d;
          }
          if (t && i !== null)
            throw n = `

  - ` + br(t) + `
  + ` + br(n), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
            );
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = co(n), t = fa(o).hoistableScripts, i = t.get(n), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function br(e) {
      var t = 0, n = "<link";
      return typeof e.rel == "string" ? (t++, n += ' rel="' + e.rel + '"') : ta.call(e, "rel") && (t++, n += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, n += ' href="' + e.href + '"') : ta.call(e, "href") && (t++, n += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, n += ' precedence="' + e.precedence + '"') : ta.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
    }
    function io(e) {
      return 'href="' + Mt(e) + '"';
    }
    function Sr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ch(e) {
      return We({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Zy(e, t, n, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Tg : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Tg;
      }), t.addEventListener("error", function() {
        return i.loading |= tE;
      }), Zt(t, "link", n), ul(t), e.head.appendChild(t));
    }
    function co(e) {
      return '[src="' + Mt(e) + '"]';
    }
    function Er(e) {
      return "script[async]" + e;
    }
    function Uh(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Mt(n.href) + '"]'
            );
            if (i)
              return t.instance = i, ul(i), i;
            var o = We({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ul(i), Zt(i, "style", o), Mf(i, n.precedence, e), t.instance = i;
          case "stylesheet":
            o = io(n.href);
            var f = e.querySelector(
              Sr(o)
            );
            if (f)
              return t.state.loading |= ku, t.instance = f, ul(f), f;
            i = Ch(n), (o = $u.get(o)) && rp(i, o), f = (e.ownerDocument || e).createElement("link"), ul(f);
            var d = f;
            return d._p = new Promise(function(h, g) {
              d.onload = h, d.onerror = g;
            }), Zt(f, "link", i), t.state.loading |= ku, Mf(f, n.precedence, e), t.instance = f;
          case "script":
            return f = co(n.src), (o = e.querySelector(
              Er(f)
            )) ? (t.instance = o, ul(o), o) : (i = n, (o = $u.get(f)) && (i = We({}, n), dp(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ul(o), Zt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ku) === td && (i = t.instance, t.state.loading |= ku, Mf(i, n.precedence, e));
      return t.instance;
    }
    function Mf(e, t, n) {
      for (var i = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function rp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function dp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function _f(e, t, n) {
      if (Pv === null) {
        var i = /* @__PURE__ */ new Map(), o = Pv = /* @__PURE__ */ new Map();
        o.set(n, i);
      } else
        o = Pv, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
      if (i.has(e)) return i;
      for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
        var f = n[o];
        if (!(f[Gf] || f[Jt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Ke) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Jy(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Ky(e, t, n) {
      var i = !n.ancestorInfo.containerTagInScope;
      if (n.context === Dm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              n = [], t.onLoad && n.push("`onLoad`"), o && n.push("`onError`"), f != null && n.push("`disabled`"), o = Dy(n, "and"), o += n.length === 1 ? " prop" : " props", f = n.length === 1 ? "an " + o : "the " + o, n.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function nt(e) {
      return !(e.type === "stylesheet" && (e.state.loading & lE) === td);
    }
    function hp(e, t, n, i) {
      if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & ku) === td) {
        if (n.instance === null) {
          var o = io(i.href), f = t.querySelector(
            Sr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Cf.bind(e), t.then(e, e)), n.state.loading |= ku, n.instance = f, ul(f);
            return;
          }
          f = t.ownerDocument || t, i = Ch(i), (o = $u.get(o)) && rp(i, o), f = f.createElement("link"), ul(f);
          var d = f;
          d._p = new Promise(function(h, g) {
            d.onload = h, d.onerror = g;
          }), Zt(f, "link", i), n.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & lE) === td && (e.count++, n = Cf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
      }
    }
    function wh(e, t) {
      return e.stylesheets && e.count === 0 && Tr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
        var i = setTimeout(function() {
          if (e.stylesheets && Tr(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, Xz + t);
        0 < e.imgBytes && jb === 0 && (jb = 125 * Oy() * Zz);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tr(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > jb ? 50 : Qz) + t
        );
        return e.unsuspend = n, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Cf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Tr(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Tr(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, e1 = /* @__PURE__ */ new Map(), t.forEach(mp, e), e1 = null, Cf.call(e));
    }
    function mp(e, t) {
      if (!(t.state.loading & ku)) {
        var n = e1.get(e);
        if (n) var i = n.get(Yb);
        else {
          n = /* @__PURE__ */ new Map(), e1.set(e, n);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), i = d);
          }
          i && n.set(Yb, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = n.get(d) || i, f === i && n.set(Yb, o), n.set(d, o), this.count++, i = Cf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ku;
      }
    }
    function zr(e, t, n, i, o, f, d, h, g) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ed, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fu(0), this.hiddenUpdates = Fu(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
    }
    function Ar(e, t, n, i, o, f, d, h, g, y, _, U) {
      return e = new zr(
        e,
        t,
        n,
        d,
        g,
        y,
        _,
        U,
        h
      ), t = pz, f === !0 && (t |= Hn | zi), t |= Fe, f = X(3, null, null, t), e.current = f, f.stateNode = e, t = Ud(), Bc(t), e.pooledCache = t, Bc(t), f.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: t
      }, at(f), e;
    }
    function ky(e) {
      return e ? (e = Kf, e) : Kf;
    }
    function Nh(e, t, n, i, o, f) {
      if (Sl && typeof Sl.onScheduleFiberRoot == "function")
        try {
          Sl.onScheduleFiberRoot(ho, i, n);
        } catch (d) {
          xu || (xu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = ky(o), i.context === null ? i.context = o : i.pendingContext = o, Hu && Nn !== null && !cE && (cE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        de(Nn) || "Unknown"
      )), i = yl(t), i.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), n = gu(e, i, t), n !== null && (hu(t, "root.render()", null), Ye(n, e, t), ya(n, e, t));
    }
    function $y(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function pp(e, t) {
      $y(e, t), (e = e.alternate) && $y(e, t);
    }
    function gp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Wl(e, 67108864);
        t !== null && Ye(t, e, 67108864), pp(e, 67108864);
      }
    }
    function yp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Il(e);
        t = uu(t);
        var n = Wl(e, t);
        n !== null && Ye(n, e, t), pp(e, t);
      }
    }
    function Ut() {
      return Nn;
    }
    function vp(e, t, n, i) {
      var o = Q.T;
      Q.T = null;
      var f = bt.p;
      try {
        bt.p = El, bp(e, t, n, i);
      } finally {
        bt.p = f, Q.T = o;
      }
    }
    function Xl(e, t, n, i) {
      var o = Q.T;
      Q.T = null;
      var f = bt.p;
      try {
        bt.p = Zl, bp(e, t, n, i);
      } finally {
        bt.p = f, Q.T = o;
      }
    }
    function bp(e, t, n, i) {
      if (l1) {
        var o = Hh(i);
        if (o === null)
          Ja(
            e,
            t,
            i,
            n1,
            n
          ), Bh(e, i);
        else if (Wy(
          o,
          e,
          t,
          n,
          i
        ))
          i.stopPropagation();
        else if (Bh(e, i), t & 4 && -1 < Kz.indexOf(e)) {
          for (; o !== null; ) {
            var f = Ra(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ht(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var g = 1 << 31 - Ql(d);
                        h.entanglements[1] |= g, d &= ~g;
                      }
                      _n(f), (rt & (Kl | lu)) === nn && (Yv = wl() + x2, _u(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Wl(f, 2), h !== null && Ye(h, f, 2), In(), pp(f, 2);
              }
            if (f = Hh(i), f === null && Ja(
              e,
              t,
              i,
              n1,
              n
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Ja(
            e,
            t,
            i,
            null,
            n
          );
      }
    }
    function Hh(e) {
      return e = Ca(e), Sp(e);
    }
    function Sp(e) {
      if (n1 = null, e = Pu(e), e !== null) {
        var t = se(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = qe(t), e !== null) return e;
            e = null;
          } else if (n === 31) {
            if (e = xe(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return n1 = e, null;
    }
    function xh(e) {
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
          return El;
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
          return Zl;
        case "message":
          switch (Cr()) {
            case Cp:
              return El;
            case Zh:
              return Zl;
            case ro:
            case lv:
              return en;
            case Jh:
              return hc;
            default:
              return en;
          }
        default:
          return en;
      }
    }
    function Bh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fs = null;
          break;
        case "dragenter":
        case "dragleave":
          ss = null;
          break;
        case "mouseover":
        case "mouseout":
          rs = null;
          break;
        case "pointerover":
        case "pointerout":
          Ag.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Dg.delete(t.pointerId);
      }
    }
    function fc(e, t, n, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Ra(t), t !== null && gp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Wy(e, t, n, i, o) {
      switch (t) {
        case "focusin":
          return fs = fc(
            fs,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "dragenter":
          return ss = fc(
            ss,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "mouseover":
          return rs = fc(
            rs,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Ag.set(
            f,
            fc(
              Ag.get(f) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Dg.set(
            f,
            fc(
              Dg.get(f) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Ep(e) {
      var t = Pu(e.target);
      if (t !== null) {
        var n = se(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = qe(n), t !== null) {
              e.blockedOn = t, qg(e.priority, function() {
                yp(n);
              });
              return;
            }
          } else if (t === 31) {
            if (t = xe(n), t !== null) {
              e.blockedOn = t, qg(e.priority, function() {
                yp(n);
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
    function Uf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Hh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var i = new n.constructor(
            n.type,
            n
          ), o = i;
          xp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), xp = o, n.target.dispatchEvent(i), xp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), xp = null;
        } else
          return t = Ra(n), t !== null && gp(t), e.blockedOn = n, !1;
        t.shift();
      }
      return !0;
    }
    function qh(e, t, n) {
      Uf(e) && n.delete(t);
    }
    function O1() {
      Lb = !1, fs !== null && Uf(fs) && (fs = null), ss !== null && Uf(ss) && (ss = null), rs !== null && Uf(rs) && (rs = null), Ag.forEach(qh), Dg.forEach(qh);
    }
    function Dr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Lb || (Lb = !0, sl.unstable_scheduleCallback(
        sl.unstable_NormalPriority,
        O1
      )));
    }
    function Fy(e) {
      a1 !== e && (a1 = e, sl.unstable_scheduleCallback(
        sl.unstable_NormalPriority,
        function() {
          a1 === e && (a1 = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Sp(i || n) === null)
                continue;
              break;
            }
            var f = Ra(n);
            f !== null && (e.splice(t, 3), t -= 3, n = {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            }, Object.freeze(n), di(
              f,
              n,
              i,
              o
            ));
          }
        }
      ));
    }
    function oo(e) {
      function t(g) {
        return Dr(g, e);
      }
      fs !== null && Dr(fs, e), ss !== null && Dr(ss, e), rs !== null && Dr(rs, e), Ag.forEach(t), Dg.forEach(t);
      for (var n = 0; n < ds.length; n++) {
        var i = ds[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < ds.length && (n = ds[0], n.blockedOn === null); )
        Ep(n), n.blockedOn === null && ds.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (i = 0; i < n.length; i += 3) {
          var o = n[i], f = n[i + 1], d = o[Tn] || null;
          if (typeof f == "function")
            d || Fy(n);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Tn] || null)
                h = d.formAction;
              else if (Sp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? n[i + 1] = h : (n.splice(i, 3), i -= 3), Fy(n);
          }
        }
    }
    function Iy() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(n, 20);
      }
      function n() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function Tp(e) {
      this._internalRoot = e;
    }
    function $a(e) {
      this._internalRoot = e;
    }
    function zp(e) {
      e[Ti] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var sl = XE(), Or = tS, R1 = VE, We = Object.assign, Py = Symbol.for("react.element"), Ea = Symbol.for("react.transitional.element"), sc = Symbol.for("react.portal"), wf = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), Rr = Symbol.for("react.profiler"), jh = Symbol.for("react.consumer"), Wa = Symbol.for("react.context"), Nf = Symbol.for("react.forward_ref"), fo = Symbol.for("react.suspense"), wn = Symbol.for("react.suspense_list"), Mr = Symbol.for("react.memo"), Pl = Symbol.for("react.lazy"), Fa = Symbol.for("react.activity"), M1 = Symbol.for("react.memo_cache_sentinel"), ev = Symbol.iterator, Hf = Symbol.for("react.client.reference"), pl = Array.isArray, Q = Or.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bt = R1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Ap = [], Dp = [], Ei = -1, rc = Ne(null), xf = Ne(null), ea = Ne(null), dc = Ne(null), Bf = 0, tv, so, qf, Op, _r, Yh, Lh;
    Oe.__reactDisabledLog = !0;
    var jf, Rp, Gh = !1, Mp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Nn = null, Hu = !1, ta = Object.prototype.hasOwnProperty, _p = sl.unstable_scheduleCallback, Vh = sl.unstable_cancelCallback, Xh = sl.unstable_shouldYield, Qh = sl.unstable_requestPaint, wl = sl.unstable_now, Cr = sl.unstable_getCurrentPriorityLevel, Cp = sl.unstable_ImmediatePriority, Zh = sl.unstable_UserBlockingPriority, ro = sl.unstable_NormalPriority, lv = sl.unstable_LowPriority, Jh = sl.unstable_IdlePriority, Up = sl.log, nv = sl.unstable_setDisableYieldValue, ho = null, Sl = null, xu = !1, Bu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ql = Math.clz32 ? Math.clz32 : me, wp = Math.log, Kh = Math.LN2, Yf = 256, Ur = 262144, Lf = 4194304, El = 2, Zl = 8, en = 32, hc = 268435456, Ta = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + Ta, Tn = "__reactProps$" + Ta, Ti = "__reactContainer$" + Ta, mo = "__reactEvents$" + Ta, C1 = "__reactListeners$" + Ta, av = "__reactHandles$" + Ta, wr = "__reactResources$" + Ta, Gf = "__reactMarker$" + Ta, uv = /* @__PURE__ */ new Set(), qu = {}, Vf = {}, iv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Np = {}, kh = {}, $h = /[\n"\\]/g, Hp = !1, cv = !1, Nr = !1, l = !1, a = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), b = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), O = b.concat(["button"]), B = "dd dt li option optgroup p rp rt".split(" "), k = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, F = {}, Y = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Z = /([A-Z])/g, ye = /^ms-/, Ue = /^(?:webkit|moz|o)[A-Z]/, wt = /^-ms-/, N = /-(.)/g, C = /;\s*$/, x = {}, W = {}, De = !1, st = !1, be = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Xe = "http://www.w3.org/1998/Math/MathML", Ke = "http://www.w3.org/2000/svg", pt = /* @__PURE__ */ new Map([
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
    ]), Ia = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, ov = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Wh = {}, RT = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), MT = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), fS = !1, la = {}, sS = /^on./, _T = /^on[^A-Z]/, CT = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), UT = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), wT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, xp = null, Fh = null, Ih = null, U1 = !1, mc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w1 = !1;
    if (mc)
      try {
        var Bp = {};
        Object.defineProperty(Bp, "passive", {
          get: function() {
            w1 = !0;
          }
        }), window.addEventListener("test", Bp, Bp), window.removeEventListener("test", Bp, Bp);
      } catch {
        w1 = !1;
      }
    var Qf = null, N1 = null, fv = null, Hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, sv = Dl(Hr), qp = We({}, Hr, { view: 0, detail: 0 }), NT = Dl(qp), H1, x1, jp, rv = We({}, qp, {
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
      getModifierState: As,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== jp && (jp && e.type === "mousemove" ? (H1 = e.screenX - jp.screenX, x1 = e.screenY - jp.screenY) : x1 = H1 = 0, jp = e), H1);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : x1;
      }
    }), rS = Dl(rv), HT = We({}, rv, { dataTransfer: 0 }), xT = Dl(HT), BT = We({}, qp, { relatedTarget: 0 }), B1 = Dl(BT), qT = We({}, Hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), jT = Dl(qT), YT = We({}, Hr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), LT = Dl(YT), GT = We({}, Hr, { data: 0 }), dS = Dl(
      GT
    ), VT = dS, XT = {
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
    }, QT = {
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
    }, ZT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, JT = We({}, qp, {
      key: function(e) {
        if (e.key) {
          var t = XT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? QT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: As,
      charCode: function(e) {
        return e.type === "keypress" ? zs(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), KT = Dl(JT), kT = We({}, rv, {
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
    }), hS = Dl(kT), $T = We({}, qp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: As
    }), WT = Dl($T), FT = We({}, Hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), IT = Dl(FT), PT = We({}, rv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), ez = Dl(PT), tz = We({}, Hr, {
      newState: 0,
      oldState: 0
    }), lz = Dl(tz), nz = [9, 13, 27, 32], mS = 229, q1 = mc && "CompositionEvent" in window, Yp = null;
    mc && "documentMode" in document && (Yp = document.documentMode);
    var az = mc && "TextEvent" in window && !Yp, pS = mc && (!q1 || Yp && 8 < Yp && 11 >= Yp), gS = 32, yS = String.fromCharCode(gS), vS = !1, Ph = !1, uz = {
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
    }, Lp = null, Gp = null, bS = !1;
    mc && (bS = Sd("input") && (!document.documentMode || 9 < document.documentMode));
    var na = typeof Object.is == "function" ? Object.is : Ed, iz = mc && "documentMode" in document && 11 >= document.documentMode, em = null, j1 = null, Vp = null, Y1 = !1, tm = {
      animationend: Mc("Animation", "AnimationEnd"),
      animationiteration: Mc("Animation", "AnimationIteration"),
      animationstart: Mc("Animation", "AnimationStart"),
      transitionrun: Mc("Transition", "TransitionRun"),
      transitionstart: Mc("Transition", "TransitionStart"),
      transitioncancel: Mc("Transition", "TransitionCancel"),
      transitionend: Mc("Transition", "TransitionEnd")
    }, L1 = {}, SS = {};
    mc && (SS = document.createElement("div").style, "AnimationEvent" in window || (delete tm.animationend.animation, delete tm.animationiteration.animation, delete tm.animationstart.animation), "TransitionEvent" in window || delete tm.transitionend.transition);
    var ES = _c("animationend"), TS = _c("animationiteration"), zS = _c("animationstart"), cz = _c("transitionrun"), oz = _c("transitionstart"), fz = _c("transitioncancel"), AS = _c("transitionend"), DS = /* @__PURE__ */ new Map(), G1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    G1.push("scrollEnd");
    var OS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var sz = performance, RS = function() {
        return sz.now();
      };
    else {
      var rz = Date;
      RS = function() {
        return rz.now();
      };
    }
    var V1 = typeof reportError == "function" ? reportError : function(e) {
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
    }, dz = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", dv = 0, X1 = 1, Q1 = 2, Z1 = 3, hv = "– ", mv = "+ ", MS = "  ", Kt = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", ju = "Components ⚛", ct = "Scheduler ⚛", ft = "Blocking", Zf = !1, po = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: ju
    }, Jf = {
      start: -0,
      end: -0,
      detail: { devtools: po }
    }, hz = ["Changed Props", ""], _S = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", mz = ["Changed Props", _S], Xp = 1, go = 2, Yu = [], lm = 0, J1 = 0, Kf = {};
    Object.freeze(Kf);
    var Lu = null, nm = null, je = 0, pz = 1, Fe = 2, Hn = 8, zi = 16, gz = 32, CS = !1;
    try {
      var US = Object.preventExtensions({});
    } catch {
      CS = !0;
    }
    var K1 = /* @__PURE__ */ new WeakMap(), am = [], um = 0, pv = null, Qp = 0, Gu = [], Vu = 0, xr = null, yo = 1, vo = "", zn = null, kt = null, it = !1, pc = !1, Pa = null, kf = null, Xu = !1, k1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), $1 = Ne(null), W1 = Ne(null), wS = {}, gv = null, im = null, cm = !1, yz = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(n, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(n) {
          return n();
        });
      };
    }, vz = sl.unstable_scheduleCallback, bz = sl.unstable_NormalPriority, Nl = {
      $$typeof: Wa,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Hl = sl.unstable_now, yv = console.createTask ? console.createTask : function() {
      return null;
    }, Zp = 1, vv = 2, tn = -0, $f = -0, bo = -0, So = null, aa = -1.1, Br = -0, nl = -0, Me = -1.1, He = -1.1, Pt = null, rl = !1, qr = -0, gc = -1.1, Jp = null, Wf = 0, F1 = null, I1 = null, jr = -1.1, Kp = null, om = -1.1, bv = -1.1, Eo = -0, To = -1.1, Qu = -1.1, P1 = 0, kp = null, NS = null, HS = null, Ff = -1.1, Yr = null, If = -1.1, Sv = -1.1, xS = -0, BS = -0, Ev = 0, Sz = null, qS = 0, $p = -1.1, Tv = !1, zv = !1, Wp = null, eb = 0, Lr = 0, fm = null, jS = Q.S;
    Q.S = function(e, t) {
      if (N2 = wl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > To && 0 > Qu) {
          To = Hl();
          var n = Df(), i = wu();
          (n !== If || i !== Yr) && (If = -1.1), Ff = n, Yr = i;
        }
        ui(e, t);
      }
      jS !== null && jS(e, t);
    };
    var Gr = Ne(null), Ai = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Fp = [], Ip = [], Pp = [], eg = [], tg = [], lg = [], Vr = /* @__PURE__ */ new Set();
    Ai.recordUnsafeLifecycleWarnings = function(e, t) {
      Vr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillMount == "function" && Ip.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillReceiveProps == "function" && eg.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && tg.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillUpdate == "function" && lg.push(e));
    }, Ai.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        e.add(
          de(h) || "Component"
        ), Vr.add(h.type);
      }), Fp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        t.add(
          de(h) || "Component"
        ), Vr.add(h.type);
      }), Ip = []);
      var n = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(function(h) {
        n.add(
          de(h) || "Component"
        ), Vr.add(h.type);
      }), Pp = []);
      var i = /* @__PURE__ */ new Set();
      0 < eg.length && (eg.forEach(
        function(h) {
          i.add(
            de(h) || "Component"
          ), Vr.add(h.type);
        }
      ), eg = []);
      var o = /* @__PURE__ */ new Set();
      0 < tg.length && (tg.forEach(function(h) {
        o.add(
          de(h) || "Component"
        ), Vr.add(h.type);
      }), tg = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < lg.length && (lg.forEach(function(h) {
        f.add(
          de(h) || "Component"
        ), Vr.add(h.type);
      }), lg = []), 0 < t.size) {
        var d = G(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = G(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = G(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = G(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < n.size && (d = G(
        n
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = G(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Av = /* @__PURE__ */ new Map(), YS = /* @__PURE__ */ new Set();
    Ai.recordLegacyContextWarning = function(e, t) {
      for (var n = null, i = e; i !== null; )
        i.mode & Hn && (n = i), i = i.return;
      n === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !YS.has(e.type) && (i = Av.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Av.set(n, i)), i.push(e));
    }, Ai.flushLegacyContextWarning = function() {
      Av.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], n = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            n.add(de(o) || "Component"), YS.add(o.type);
          });
          var i = G(n);
          he(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ai.discardPendingWarnings = function() {
      Fp = [], Ip = [], Pp = [], eg = [], tg = [], lg = [], Av = /* @__PURE__ */ new Map();
    };
    var LS = {
      react_stack_bottom_frame: function(e, t, n) {
        var i = Hu;
        Hu = !0;
        try {
          return e(t, n);
        } finally {
          Hu = i;
        }
      }
    }, tb = LS.react_stack_bottom_frame.bind(LS), GS = {
      react_stack_bottom_frame: function(e) {
        var t = Hu;
        Hu = !0;
        try {
          return e.render();
        } finally {
          Hu = t;
        }
      }
    }, VS = GS.react_stack_bottom_frame.bind(GS), XS = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (n) {
          Je(e, e.return, n);
        }
      }
    }, lb = XS.react_stack_bottom_frame.bind(
      XS
    ), QS = {
      react_stack_bottom_frame: function(e, t, n, i, o) {
        try {
          t.componentDidUpdate(n, i, o);
        } catch (f) {
          Je(e, e.return, f);
        }
      }
    }, ZS = QS.react_stack_bottom_frame.bind(
      QS
    ), JS = {
      react_stack_bottom_frame: function(e, t) {
        var n = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: n !== null ? n : ""
        });
      }
    }, Ez = JS.react_stack_bottom_frame.bind(
      JS
    ), KS = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n.componentWillUnmount();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, kS = KS.react_stack_bottom_frame.bind(
      KS
    ), $S = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, Tz = $S.react_stack_bottom_frame.bind($S), WS = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n();
        } catch (i) {
          Je(e, t, i);
        }
      }
    }, zz = WS.react_stack_bottom_frame.bind(WS), FS = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Az = FS.react_stack_bottom_frame.bind(FS), sm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), nb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Dv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Ov = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Xr = null, ng = !1, rm = null, ag = 0, Ie = null, ab, IS = ab = !1, PS = {}, e2 = {}, t2 = {};
    ue = function(e, t, n) {
      if (n !== null && typeof n == "object" && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
        if (typeof n._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        n._store.validated = 1;
        var i = de(e), o = i || "null";
        if (!PS[o]) {
          PS[o] = !0, n = n._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = de(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          n != null && e !== n && (i = null, typeof n.tag == "number" ? i = de(n) : typeof n.name == "string" && (i = n.name), i && (d = " It was passed a child from " + i + ".")), he(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Qr = Rl(!0), l2 = Rl(!1), n2 = 0, a2 = 1, u2 = 2, ub = 3, Pf = !1, i2 = !1, ib = null, cb = !1, dm = Ne(null), Rv = Ne(0), eu = Ne(null), Zu = null, hm = 1, ug = 2, Tl = Ne(0), Mv = 0, Ju = 1, ua = 2, tu = 4, ia = 8, mm, c2 = /* @__PURE__ */ new Set(), o2 = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), f2 = /* @__PURE__ */ new Set(), zo = 0, Ge = null, Yt = null, xl = null, _v = !1, pm = !1, Zr = !1, Cv = 0, ig = 0, Ao = null, Dz = 0, Oz = 25, V = null, Ku = null, Do = -1, cg = !1, og = {
      readContext: yt,
      use: fi,
      useCallback: tl,
      useContext: tl,
      useEffect: tl,
      useImperativeHandle: tl,
      useLayoutEffect: tl,
      useInsertionEffect: tl,
      useMemo: tl,
      useReducer: tl,
      useRef: tl,
      useState: tl,
      useDebugValue: tl,
      useDeferredValue: tl,
      useTransition: tl,
      useSyncExternalStore: tl,
      useId: tl,
      useHostTransitionStatus: tl,
      useFormState: tl,
      useActionState: tl,
      useOptimistic: tl,
      useMemoCache: tl,
      useCacheRefresh: tl
    };
    og.useEffectEvent = tl;
    var fb = null, s2 = null, sb = null, r2 = null, yc = null, Di = null, Uv = null;
    fb = {
      readContext: function(e) {
        return yt(e);
      },
      use: fi,
      useCallback: function(e, t) {
        return V = "useCallback", Le(), oi(t), Vd(e, t);
      },
      useContext: function(e) {
        return V = "useContext", Le(), yt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", Le(), oi(t), Jc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", Le(), oi(n), Su(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", Le(), oi(t), Ii(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", Le(), oi(t), hn(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", Le(), oi(t);
        var n = Q.H;
        Q.H = yc;
        try {
          return mn(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", Le();
        var i = Q.H;
        Q.H = yc;
        try {
          return ef(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", Le(), Gd(e);
      },
      useState: function(e) {
        V = "useState", Le();
        var t = Q.H;
        Q.H = yc;
        try {
          return ki(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", Le();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", Le(), uf(e, t);
      },
      useTransition: function() {
        return V = "useTransition", Le(), Pi();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", Le(), tf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", Le(), ks();
      },
      useFormState: function(e, t) {
        return V = "useFormState", Le(), qs(), Kn(e, t);
      },
      useActionState: function(e, t) {
        return V = "useActionState", Le(), Kn(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", Le(), Zc(e);
      },
      useHostTransitionStatus: hi,
      useMemoCache: Zn,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", Le(), Xd();
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", Le(), Js(e);
      }
    }, s2 = {
      readContext: function(e) {
        return yt(e);
      },
      use: fi,
      useCallback: function(e, t) {
        return V = "useCallback", I(), Vd(e, t);
      },
      useContext: function(e) {
        return V = "useContext", I(), yt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", I(), Jc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", I(), Su(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", I(), Ii(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", I(), hn(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", I();
        var n = Q.H;
        Q.H = yc;
        try {
          return mn(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", I();
        var i = Q.H;
        Q.H = yc;
        try {
          return ef(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", I(), Gd(e);
      },
      useState: function(e) {
        V = "useState", I();
        var t = Q.H;
        Q.H = yc;
        try {
          return ki(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", I(), uf(e, t);
      },
      useTransition: function() {
        return V = "useTransition", I(), Pi();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", I(), tf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", I(), ks();
      },
      useActionState: function(e, t) {
        return V = "useActionState", I(), Kn(e, t);
      },
      useFormState: function(e, t) {
        return V = "useFormState", I(), qs(), Kn(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", I(), Zc(e);
      },
      useHostTransitionStatus: hi,
      useMemoCache: Zn,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", I(), Xd();
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", I(), Js(e);
      }
    }, sb = {
      readContext: function(e) {
        return yt(e);
      },
      use: fi,
      useCallback: function(e, t) {
        return V = "useCallback", I(), Ga(e, t);
      },
      useContext: function(e) {
        return V = "useContext", I(), yt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", I(), vl(2048, ia, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", I(), af(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", I(), vl(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", I(), vl(4, tu, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", I();
        var n = Q.H;
        Q.H = Di;
        try {
          return Qt(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Vc(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", I(), Tt().memoizedState;
      },
      useState: function() {
        V = "useState", I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Vc(Jn);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", I(), Eu(e, t);
      },
      useTransition: function() {
        return V = "useTransition", I(), iy();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", I(), Qc(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", I(), qs(), Wi(e);
      },
      useActionState: function(e) {
        return V = "useActionState", I(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", I(), Xs(e, t);
      },
      useHostTransitionStatus: hi,
      useMemoCache: Zn,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", I(), nf(e);
      }
    }, r2 = {
      readContext: function(e) {
        return yt(e);
      },
      use: fi,
      useCallback: function(e, t) {
        return V = "useCallback", I(), Ga(e, t);
      },
      useContext: function(e) {
        return V = "useContext", I(), yt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", I(), vl(2048, ia, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", I(), af(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", I(), vl(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", I(), vl(4, tu, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", I();
        var n = Q.H;
        Q.H = Uv;
        try {
          return Qt(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", I();
        var i = Q.H;
        Q.H = Uv;
        try {
          return Xc(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", I(), Tt().memoizedState;
      },
      useState: function() {
        V = "useState", I();
        var e = Q.H;
        Q.H = Uv;
        try {
          return Xc(Jn);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", I(), Qe(e, t);
      },
      useTransition: function() {
        return V = "useTransition", I(), Wt();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", I(), Qc(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", I(), qs(), Fi(e);
      },
      useActionState: function(e) {
        return V = "useActionState", I(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", I(), Qs(e, t);
      },
      useHostTransitionStatus: hi,
      useMemoCache: Zn,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", I(), nf(e);
      }
    }, yc = {
      readContext: function(e) {
        return P(), yt(e);
      },
      use: function(e) {
        return w(), fi(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", w(), Le(), Vd(e, t);
      },
      useContext: function(e) {
        return V = "useContext", w(), Le(), yt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", w(), Le(), Jc(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", w(), Le(), Su(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", w(), Le(), Ii(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", w(), Le(), hn(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", w(), Le();
        var n = Q.H;
        Q.H = yc;
        try {
          return mn(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", w(), Le();
        var i = Q.H;
        Q.H = yc;
        try {
          return ef(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", w(), Le(), Gd(e);
      },
      useState: function(e) {
        V = "useState", w(), Le();
        var t = Q.H;
        Q.H = yc;
        try {
          return ki(e);
        } finally {
          Q.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", w(), Le();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", w(), Le(), uf(e, t);
      },
      useTransition: function() {
        return V = "useTransition", w(), Le(), Pi();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", w(), Le(), tf(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", w(), Le(), ks();
      },
      useFormState: function(e, t) {
        return V = "useFormState", w(), Le(), Kn(e, t);
      },
      useActionState: function(e, t) {
        return V = "useActionState", w(), Le(), Kn(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", w(), Le(), Zc(e);
      },
      useMemoCache: function(e) {
        return w(), Zn(e);
      },
      useHostTransitionStatus: hi,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", Le(), Xd();
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", w(), Le(), Js(e);
      }
    }, Di = {
      readContext: function(e) {
        return P(), yt(e);
      },
      use: function(e) {
        return w(), fi(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", w(), I(), Ga(e, t);
      },
      useContext: function(e) {
        return V = "useContext", w(), I(), yt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", w(), I(), vl(2048, ia, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", w(), I(), af(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", w(), I(), vl(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", w(), I(), vl(4, tu, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", w(), I();
        var n = Q.H;
        Q.H = Di;
        try {
          return Qt(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", w(), I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Vc(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", w(), I(), Tt().memoizedState;
      },
      useState: function() {
        V = "useState", w(), I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Vc(Jn);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", w(), I();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", w(), I(), Eu(e, t);
      },
      useTransition: function() {
        return V = "useTransition", w(), I(), iy();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", w(), I(), Qc(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", w(), I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", w(), I(), Wi(e);
      },
      useActionState: function(e) {
        return V = "useActionState", w(), I(), Wi(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", w(), I(), Xs(e, t);
      },
      useMemoCache: function(e) {
        return w(), Zn(e);
      },
      useHostTransitionStatus: hi,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", w(), I(), nf(e);
      }
    }, Uv = {
      readContext: function(e) {
        return P(), yt(e);
      },
      use: function(e) {
        return w(), fi(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", w(), I(), Ga(e, t);
      },
      useContext: function(e) {
        return V = "useContext", w(), I(), yt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", w(), I(), vl(2048, ia, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return V = "useImperativeHandle", w(), I(), af(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", w(), I(), vl(4, ua, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", w(), I(), vl(4, tu, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", w(), I();
        var n = Q.H;
        Q.H = Di;
        try {
          return Qt(e, t);
        } finally {
          Q.H = n;
        }
      },
      useReducer: function(e, t, n) {
        V = "useReducer", w(), I();
        var i = Q.H;
        Q.H = Di;
        try {
          return Xc(e, t, n);
        } finally {
          Q.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", w(), I(), Tt().memoizedState;
      },
      useState: function() {
        V = "useState", w(), I();
        var e = Q.H;
        Q.H = Di;
        try {
          return Xc(Jn);
        } finally {
          Q.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", w(), I();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", w(), I(), Qe(e, t);
      },
      useTransition: function() {
        return V = "useTransition", w(), I(), Wt();
      },
      useSyncExternalStore: function(e, t, n) {
        return V = "useSyncExternalStore", w(), I(), Qc(
          e,
          t,
          n
        );
      },
      useId: function() {
        return V = "useId", w(), I(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", w(), I(), Fi(e);
      },
      useActionState: function(e) {
        return V = "useActionState", w(), I(), Fi(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", w(), I(), Qs(e, t);
      },
      useMemoCache: function(e) {
        return w(), Zn(e);
      },
      useHostTransitionStatus: hi,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", I(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return V = "useEffectEvent", w(), I(), nf(e);
      }
    };
    var d2 = {}, h2 = /* @__PURE__ */ new Set(), m2 = /* @__PURE__ */ new Set(), p2 = /* @__PURE__ */ new Set(), g2 = /* @__PURE__ */ new Set(), y2 = /* @__PURE__ */ new Set(), v2 = /* @__PURE__ */ new Set(), b2 = /* @__PURE__ */ new Set(), S2 = /* @__PURE__ */ new Set(), E2 = /* @__PURE__ */ new Set(), T2 = /* @__PURE__ */ new Set();
    Object.freeze(d2);
    var rb = {
      enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = Il(e), o = yl(i);
        o.payload = t, n != null && (Wc(n), o.callback = n), t = gu(e, o, i), t !== null && (hu(i, "this.setState()", e), Ye(t, e, i), ya(t, e, i));
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = Il(e), o = yl(i);
        o.tag = a2, o.payload = t, n != null && (Wc(n), o.callback = n), t = gu(e, o, i), t !== null && (hu(i, "this.replaceState()", e), Ye(t, e, i), ya(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Il(e), i = yl(n);
        i.tag = u2, t != null && (Wc(t), i.callback = t), t = gu(e, i, n), t !== null && (hu(n, "this.forceUpdate()", e), Ye(t, e, n), ya(t, e, n));
      }
    }, gm = null, db = null, hb = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Bl = !1, z2 = {}, A2 = {}, D2 = {}, O2 = {}, ym = !1, R2 = {}, wv = {}, mb = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, M2 = !1, _2 = null;
    _2 = /* @__PURE__ */ new Set();
    var Oo = !1, ql = !1, pb = !1, C2 = typeof WeakSet == "function" ? WeakSet : Set, ln = null, vm = null, bm = null, jl = null, za = !1, Oi = null, Jl = !1, fg = 8192, Rz = {
      getCacheForType: function(e) {
        var t = yt(Nl), n = t.data.get(e);
        return n === void 0 && (n = e(), t.data.set(e, n)), n;
      },
      cacheSignal: function() {
        return yt(Nl).controller.signal;
      },
      getOwner: function() {
        return Nn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var sg = Symbol.for;
      sg("selector.component"), sg("selector.has_pseudo_class"), sg("selector.role"), sg("selector.test_id"), sg("selector.text");
    }
    var Mz = [], _z = typeof WeakMap == "function" ? WeakMap : Map, nn = 0, Kl = 2, lu = 4, Ro = 0, rg = 1, Jr = 2, Nv = 3, es = 4, Hv = 6, U2 = 5, rt = nn, Lt = null, tt = null, Pe = 0, Aa = 0, xv = 1, Kr = 2, dg = 3, w2 = 4, gb = 5, hg = 6, Bv = 7, yb = 8, kr = 9, Nt = Aa, nu = null, ts = !1, Sm = !1, vb = !1, vc = 0, al = Ro, ls = 0, ns = 0, bb = 0, Da = 0, $r = 0, mg = null, ca = null, qv = !1, jv = 0, N2 = 0, H2 = 300, Yv = 1 / 0, x2 = 500, pg = null, gl = null, as = null, Lv = 0, Sb = 1, Eb = 2, B2 = 3, us = 0, q2 = 1, j2 = 2, Y2 = 3, L2 = 4, Gv = 5, Yl = 0, is = null, Em = null, Ri = 0, Tb = 0, zb = -0, Ab = null, G2 = null, V2 = null, Mi = Lv, X2 = null, Cz = 50, gg = 0, Db = null, Ob = !1, Vv = !1, Uz = 50, Wr = 0, yg = null, Tm = !1, Xv = null, Q2 = !1, Z2 = /* @__PURE__ */ new Set(), wz = {}, Qv = null, zm = null, Rb = !1, Mb = !1, Zv = !1, _b = !1, cs = 0, Cb = {};
    (function() {
      for (var e = 0; e < G1.length; e++) {
        var t = G1[e], n = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Ua(n, "on" + t);
      }
      Ua(ES, "onAnimationEnd"), Ua(TS, "onAnimationIteration"), Ua(zS, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(cz, "onTransitionRun"), Ua(oz, "onTransitionStart"), Ua(fz, "onTransitionCancel"), Ua(AS, "onTransitionEnd");
    })(), Ho("onMouseEnter", ["mouseout", "mouseover"]), Ho("onMouseLeave", ["mouseout", "mouseover"]), Ho("onPointerEnter", ["pointerout", "pointerover"]), Ho("onPointerLeave", ["pointerout", "pointerover"]), Ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Ma("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var vg = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Ub = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vg)
    ), Jv = "_reactListening" + Math.random().toString(36).slice(2), J2 = !1, K2 = !1, Kv = !1, k2 = !1, kv = !1, $v = !1, $2 = !1, Wv = {}, Nz = /\r\n?/g, Hz = /\u0000|\uFFFD/g, Fr = "http://www.w3.org/1999/xlink", wb = "http://www.w3.org/XML/1998/namespace", xz = "javascript:throw new Error('React form unexpectedly submitted.')", Bz = "suppressHydrationWarning", Ir = "&", Fv = "/&", bg = "$", Sg = "/$", os = "$?", Pr = "$~", Am = "$!", qz = "html", jz = "body", Yz = "head", Nb = "F!", W2 = "F", F2 = "loading", Lz = "style", Mo = 0, Dm = 1, Iv = 2, Hb = null, xb = null, I2 = { dialog: !0, webview: !0 }, Bb = null, Eg = void 0, P2 = typeof setTimeout == "function" ? setTimeout : void 0, Gz = typeof clearTimeout == "function" ? clearTimeout : void 0, ed = -1, eE = typeof Promise == "function" ? Promise : void 0, Vz = typeof queueMicrotask == "function" ? queueMicrotask : typeof eE < "u" ? function(e) {
      return eE.resolve(null).then(e).catch(My);
    } : P2, qb = null, td = 0, Tg = 1, tE = 2, lE = 3, ku = 4, $u = /* @__PURE__ */ new Map(), nE = /* @__PURE__ */ new Set(), _o = bt.d;
    bt.d = {
      f: function() {
        var e = _o.f(), t = In();
        return e || t;
      },
      r: function(e) {
        var t = Ra(e);
        t !== null && t.tag === 5 && t.type === "form" ? cf(t) : _o.r(e);
      },
      D: function(e) {
        _o.D(e), fp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _o.C(e, t), fp("preconnect", e, t);
      },
      L: function(e, t, n) {
        _o.L(e, t, n);
        var i = Om;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Mt(t) + '"]';
          t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Mt(
            n.imageSrcSet
          ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Mt(
            n.imageSizes
          ) + '"]')) : o += '[href="' + Mt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = io(e);
              break;
            case "script":
              f = co(e);
          }
          $u.has(f) || (e = We(
            {
              rel: "preload",
              href: t === "image" && n && n.imageSrcSet ? void 0 : e,
              as: t
            },
            n
          ), $u.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Sr(f)
          ) || t === "script" && i.querySelector(Er(f)) || (t = i.createElement("link"), Zt(t, "link", e), ul(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _o.m(e, t);
        var n = Om;
        if (n && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Mt(i) + '"][href="' + Mt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = co(e);
          }
          if (!$u.has(f) && (e = We({ rel: "modulepreload", href: e }, t), $u.set(f, e), n.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (n.querySelector(Er(f)))
                  return;
            }
            i = n.createElement("link"), Zt(i, "link", e), ul(i), n.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _o.X(e, t);
        var n = Om;
        if (n && e) {
          var i = fa(n).hoistableScripts, o = co(e), f = i.get(o);
          f || (f = n.querySelector(
            Er(o)
          ), f || (e = We({ src: e, async: !0 }, t), (t = $u.get(o)) && dp(e, t), f = n.createElement("script"), ul(f), Zt(f, "link", e), n.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, n) {
        _o.S(e, t, n);
        var i = Om;
        if (i && e) {
          var o = fa(i).hoistableStyles, f = io(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: td, preload: null };
            if (d = i.querySelector(
              Sr(f)
            ))
              h.loading = Tg | ku;
            else {
              e = We(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                n
              ), (n = $u.get(f)) && rp(e, n);
              var g = d = i.createElement("link");
              ul(g), Zt(g, "link", e), g._p = new Promise(function(y, _) {
                g.onload = y, g.onerror = _;
              }), g.addEventListener("load", function() {
                h.loading |= Tg;
              }), g.addEventListener("error", function() {
                h.loading |= tE;
              }), h.loading |= ku, Mf(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        _o.M(e, t);
        var n = Om;
        if (n && e) {
          var i = fa(n).hoistableScripts, o = co(e), f = i.get(o);
          f || (f = n.querySelector(
            Er(o)
          ), f || (e = We({ src: e, async: !0, type: "module" }, t), (t = $u.get(o)) && dp(e, t), f = n.createElement("script"), ul(f), Zt(f, "link", e), n.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Om = typeof document > "u" ? null : document, Pv = null, Xz = 6e4, Qz = 800, Zz = 500, jb = 0, Yb = null, e1 = null, ld = _1, zg = {
      $$typeof: Wa,
      Provider: null,
      Consumer: null,
      _currentValue: ld,
      _currentValue2: ld,
      _threadCount: 0
    }, aE = "%c%s%c", uE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", iE = "", t1 = " ", Jz = Function.prototype.bind, cE = !1, oE = null, fE = null, sE = null, rE = null, dE = null, hE = null, mE = null, pE = null, gE = null, yE = null;
    oE = function(e, t, n, i) {
      t = p(e, t), t !== null && (n = S(t.memoizedState, n, 0, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = We({}, e.memoizedProps), n = Wl(e, 2), n !== null && Ye(n, e, 2));
    }, fE = function(e, t, n) {
      t = p(e, t), t !== null && (n = T(t.memoizedState, n, 0), t.memoizedState = n, t.baseState = n, e.memoizedProps = We({}, e.memoizedProps), n = Wl(e, 2), n !== null && Ye(n, e, 2));
    }, sE = function(e, t, n, i) {
      t = p(e, t), t !== null && (n = E(t.memoizedState, n, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = We({}, e.memoizedProps), n = Wl(e, 2), n !== null && Ye(n, e, 2));
    }, rE = function(e, t, n) {
      e.pendingProps = S(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Wl(e, 2), t !== null && Ye(t, e, 2);
    }, dE = function(e, t) {
      e.pendingProps = T(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Wl(e, 2), t !== null && Ye(t, e, 2);
    }, hE = function(e, t, n) {
      e.pendingProps = E(
        e.memoizedProps,
        t,
        n
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Wl(e, 2), t !== null && Ye(t, e, 2);
    }, mE = function(e) {
      var t = Wl(e, 2);
      t !== null && Ye(t, e, 2);
    }, pE = function(e) {
      var t = au(), n = Wl(e, t);
      n !== null && Ye(n, e, t);
    }, gE = function(e) {
      q = e;
    }, yE = function(e) {
      H = e;
    };
    var l1 = !0, n1 = null, Lb = !1, fs = null, ss = null, rs = null, Ag = /* @__PURE__ */ new Map(), Dg = /* @__PURE__ */ new Map(), ds = [], Kz = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), a1 = null;
    if ($a.prototype.render = Tp.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var n = arguments;
      typeof n[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : pe(n[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof n[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), n = e;
      var i = t.current, o = Il(i);
      Nh(i, o, n, t, null, null);
    }, $a.prototype.unmount = Tp.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (rt & (Kl | lu)) !== nn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Nh(e.current, 2, null, e, null, null), In(), t[Ti] = null;
      }
    }, $a.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Bg();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < ds.length && t !== 0 && t < ds[n].priority; n++) ;
        ds.splice(n, 0, e), n === 0 && Ep(e);
      }
    }, (function() {
      var e = Or.version;
      if (e !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), bt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = lt(t), e = e !== null ? we(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Q,
        reconcilerVersion: "19.2.0"
      };
      return e.overrideHookState = oE, e.overrideHookStateDeletePath = fE, e.overrideHookStateRenamePath = sE, e.overrideProps = rE, e.overridePropsDeletePath = dE, e.overridePropsRenamePath = hE, e.scheduleUpdate = mE, e.scheduleRetry = pE, e.setErrorHandler = gE, e.setSuspenseHandler = yE, e.scheduleRefresh = ne, e.scheduleRoot = ae, e.setRefreshHandler = ie, e.getCurrentFiber = Ut, wo(e);
    })() && mc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var vE = window.location.protocol;
      /^(https?|file):$/.test(vE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (vE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    _g.createRoot = function(e, t) {
      if (!pe(e))
        throw Error("Target container is not a DOM element.");
      zp(e);
      var n = !1, i = "", o = Jd, f = Kd, d = y0;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Ea && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Ar(
        e,
        1,
        !1,
        null,
        null,
        n,
        i,
        null,
        o,
        f,
        d,
        Iy
      ), e[Ti] = t.current, ic(e), new Tp(t);
    }, _g.hydrateRoot = function(e, t, n) {
      if (!pe(e))
        throw Error("Target container is not a DOM element.");
      zp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Jd, d = Kd, h = y0, g = null;
      return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (g = n.formState)), t = Ar(
        e,
        1,
        !0,
        t,
        n ?? null,
        i,
        o,
        g,
        f,
        d,
        h,
        Iy
      ), t.context = ky(null), n = t.current, i = Il(n), i = uu(i), o = yl(i), o.callback = null, gu(n, o, i), hu(i, "hydrateRoot()", null), n = i, t.current.lanes = n, qn(t, n), _n(t), e[Ti] = t.current, ic(e), new $a(t);
    }, _g.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), _g;
}
var ME;
function fA() {
  if (ME) return i1.exports;
  ME = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (S) {
        console.error(S);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (p(), i1.exports = cA()) : i1.exports = oA(), i1.exports;
}
var sA = fA();
function rA(p) {
  const [S, E] = GE(p);
  return p !== S && (!p || !S || p.length !== S.length || p.some((v, T) => v !== S[T])) ? (E(p), p) : S;
}
function dA(p, [S, E]) {
  const [v, T] = p;
  return v !== void 0 && T !== void 0 && S !== void 0 && E !== void 0 && S > v && S - v <= 20 && E < T ? [v, E] : v !== S || T !== E ? [S, E] : p;
}
function hA(p, S) {
  let E = p?.clientWidth;
  if (E !== void 0 && S && S.length > 0) {
    const v = [...S.filter((T) => T > 0)].sort((T, H) => H - T);
    v.push(Math.floor(v[v.length - 1] / 2)), E = v.find((T, H) => T <= E || H === v.length - 1);
  }
  return E;
}
function mA(p, S, E) {
  const [[v], T] = $z(dA, [E]), H = rA(S), q = Wz(void 0);
  return { containerRef: Fz(
    (P) => {
      q.current?.disconnect(), q.current = void 0;
      const te = () => T([hA(P, H), window.innerWidth - document.documentElement.clientWidth]);
      te(), P && typeof ResizeObserver < "u" && (q.current = new ResizeObserver(te), q.current.observe(P)), typeof p == "function" ? p(P) : p && (p.current = P);
    },
    [p, H]
  ), containerWidth: v };
}
function pA(...p) {
  return [...p].filter(Boolean).join(" ");
}
function QE(p) {
  return ["react-photo-album", p].filter(Boolean).join("--");
}
function gA(p) {
  return `--${QE(p)}`;
}
function lS({ width: p, height: S }) {
  return p / S;
}
const yA = Object.freeze([1200, 600, 300, 0]);
function hs(p, S) {
  return typeof p == "function" ? p(S) : p;
}
function ZE(p, S) {
  return S !== void 0 ? hs(p, S) : void 0;
}
function vA(p, S) {
  const E = yA.findIndex((v) => v <= S);
  return hs(p[Math.max(E, 0)], S);
}
function Wb(p, S, E, v = 0) {
  if (S === void 0) return;
  const T = ZE(p, S);
  return Math.round(Math.max(T === void 0 ? vA(E, S) : T, v));
}
function bA(p, {
  spacing: S,
  padding: E,
  componentsProps: v,
  render: T
}) {
  return {
    spacing: Wb(S, p, [20, 15, 10, 5]),
    padding: Wb(E, p, [0, 0, 0, 0]),
    componentsProps: hs(v, p) || {},
    render: hs(T, p)
  };
}
function Cg(p, S = 0) {
  const E = 10 ** S;
  return Math.round((p + Number.EPSILON) * E) / E;
}
function SA(p, S, E, v, T, H, q) {
  let w, P;
  const te = (G) => {
    const X = H * (T - 1) + 2 * q * T;
    return `calc((${G.match(/^\s*calc\((.*)\)\s*$/)?.[1] ?? G} - ${X}px) / ${Cg((v - X) / E, 5)})`;
  }, ue = p.srcSet;
  return ue && ue.length > 0 && (w = ue.concat(
    ue.some(({ width: G }) => G === p.width) ? [] : [{ src: p.src, width: p.width, height: p.height }]
  ).sort((G, X) => G.width - X.width).map((G) => `${G.src} ${G.width}w`).join(", ")), S?.size ? P = (S.sizes || []).map(({ viewport: G, size: X }) => `${G} ${te(X)}`).concat(te(S.size)).join(", ") : P = `${Math.ceil(E / v * 100)}vw`, { srcSet: w, sizes: P };
}
function EA({
  as: p,
  render: S,
  context: E,
  classes: v = [],
  variables: T = {},
  style: H,
  className: q,
  children: w,
  ...P
}, te) {
  const ue = pA(
    ...(Array.isArray(v) ? v : [v]).filter((ne) => typeof ne == "string").map(QE),
    q
  ), X = { style: {
    ...Object.fromEntries(
      Object.entries(T).map(([ne, ie]) => [
        gA(ne.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
        typeof ie == "number" ? Cg(ie, 5) : ie
      ])
    ),
    ...H
  }, className: ue, children: w, ...P };
  if (S) {
    const ne = S({ ref: te, ...X }, E);
    if (ne) return ne;
  }
  const ae = p || "div";
  return St.jsx(ae, { ref: te, ...X });
}
const f1 = r1(EA);
function TA({
  photo: p,
  index: S,
  width: E,
  height: v,
  onClick: T,
  render: { wrapper: H, link: q, button: w, image: P, extras: te } = {},
  componentsProps: { link: ue, button: G, wrapper: X, image: ae } = {}
}, ne) {
  const { href: ie } = p, pe = { photo: p, index: S, width: Cg(E, 3), height: Cg(v, 3) };
  let se;
  return ie ? se = { ...ue, as: "a", render: q, classes: ["photo", "link"], href: ie, onClick: T } : T ? se = { ...G, as: "button", type: "button", render: w, classes: ["photo", "button"], onClick: T } : se = { ...X, render: H, classes: "photo" }, St.jsxs(
    f1,
    {
      ref: ne,
      variables: { photoWidth: pe.width, photoHeight: pe.height },
      context: pe,
      ...se,
      children: [
        St.jsx(f1, { as: "img", classes: "image", render: P, context: pe, ...ae }),
        te?.({}, pe)
      ]
    }
  );
}
const zA = r1(TA);
function AA({
  layout: p,
  sizes: S,
  model: E,
  skeleton: v,
  onClick: T,
  render: { container: H, track: q, photo: w, ...P } = {},
  componentsProps: {
    container: te,
    track: ue,
    link: G,
    button: X,
    wrapper: ae,
    image: ne
  } = {}
}, ie) {
  const { spacing: pe, padding: se, containerWidth: qe, tracks: xe, variables: Ze, horizontal: lt } = E || {};
  return St.jsxs(
    f1,
    {
      role: "group",
      "aria-label": "Photo album",
      ...te,
      variables: { spacing: pe, padding: se, containerWidth: qe, ...Ze },
      classes: ["", p],
      render: H,
      ref: ie,
      children: [
        pe !== void 0 && se !== void 0 && qe !== void 0 && xe?.map(({ photos: we, variables: ze }, Se) => {
          const Ce = we.length, de = lt ? Ce : xe.length;
          return Iz(
            f1,
            {
              ...ue,
              key: Se,
              render: q,
              classes: "track",
              variables: { trackSize: Ce, ...ze }
            },
            we.map((Ne) => {
              const { photo: Ae, index: oe, width: $e } = Ne, { key: _e, src: R, alt: J, title: le, label: ve } = Ae, Oe = T ? (ee) => {
                T({ event: ee, photo: Ae, index: oe });
              } : void 0;
              if (w) {
                const ee = w({ onClick: Oe }, Ne);
                if (ee) return ee;
              }
              const K = (ee) => ve ? { "aria-label": ve, ...ee } : ee;
              return St.jsx(
                zA,
                {
                  onClick: Oe,
                  render: P,
                  componentsProps: {
                    image: {
                      loading: "lazy",
                      decoding: "async",
                      src: R,
                      alt: J,
                      title: le,
                      ...SA(Ae, S, $e, qe, de, pe, se),
                      ...hs(ne, Ne)
                    },
                    link: K(hs(G, Ne)),
                    button: K(hs(X, Ne)),
                    wrapper: hs(ae, Ne)
                  },
                  ...Ne
                },
                _e ?? R
              );
            })
          );
        }),
        qe === void 0 && v
      ]
    }
  );
}
const DA = r1(AA);
function OA(p, { photos: S, targetRowHeight: E, rowConstraints: v, ...T }) {
  const { spacing: H, padding: q, componentsProps: w, render: P } = bA(p, T), { singleRowMaxHeight: te, minPhotos: ue, maxPhotos: G } = ZE(v, p) || {};
  if (te !== void 0 && H !== void 0 && q !== void 0) {
    const X = Math.floor(
      S.reduce(
        (ae, { width: ne, height: ie }) => ae + ne / ie * te - 2 * q,
        q * S.length * 2 + H * (S.length - 1)
      )
    );
    X > 0 && (w.container = { ...w.container }, w.container.style = { maxWidth: X, ...w.container.style });
  }
  return {
    ...T,
    targetRowHeight: Wb(E, p, [
      (X) => X / 5,
      (X) => X / 4,
      (X) => X / 3,
      (X) => X / 2
    ]),
    render: P,
    spacing: H,
    padding: q,
    minPhotos: ue,
    maxPhotos: G,
    componentsProps: w
  };
}
function RA(p) {
  return (S, E) => p(E) - p(S);
}
function MA(p) {
  let S = 0;
  const E = [], v = (ue, G) => p(E[ue], E[G]) < 0, T = (ue, G) => {
    const X = E[ue];
    E[ue] = E[G], E[G] = X;
  }, H = (ue) => {
    let G = ue, X = Math.floor(G / 2);
    for (; G > 1 && v(X, G); )
      T(X, G), G = X, X = Math.floor(G / 2);
  }, q = (ue) => {
    let G = ue, X = G * 2;
    for (; X <= S && (X < S && v(X, X + 1) && (X += 1), !!v(G, X)); )
      T(G, X), G = X, X = G * 2;
  };
  return { push: (ue) => {
    S += 1, E[S] = ue, H(S);
  }, pop: () => {
    if (S === 0) return;
    T(1, S), S -= 1;
    const ue = E.pop();
    return q(1), ue;
  }, size: () => S };
}
function _A(p, S, E) {
  const v = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Map();
  H.set(S, 0);
  const q = MA(RA((w) => w[1]));
  for (q.push([S, 0]); q.size() > 0; ) {
    const [w, P] = q.pop();
    if (!T.has(w)) {
      const te = p(w);
      T.add(w), te.forEach((ue, G) => {
        const X = P + ue, ae = v.get(G), ne = H.get(G);
        (ne === void 0 || ne > X && (ne / X > 1.005 || ae !== void 0 && ae < w)) && (H.set(G, X), q.push([G, X]), v.set(G, w));
      });
    }
  }
  return H.has(E) ? v : void 0;
}
function CA(p, S) {
  if (!p) return;
  const E = [];
  for (let v = S; v !== void 0; v = p.get(v))
    E.push(v);
  return E.reverse();
}
function UA(p, S, E) {
  return CA(_A(p, S, E), E);
}
function wA(p, S, E, v) {
  return Cg(S / E / Math.min(...p.map((T) => lS(T)))) + (v || 0) + 2;
}
function JE(p, S, E, v) {
  return (S - (p.length - 1) * E - 2 * v * p.length) / p.reduce((T, H) => T + lS(H), 0);
}
function NA(p, S, E, v, T, H, q) {
  const w = p.slice(S, E), P = JE(w, v, T, H);
  return P > 0 ? (P - q) ** 2 * w.length : void 0;
}
function HA(p, S, E, v, T, H, q, w) {
  return (P) => {
    const te = /* @__PURE__ */ new Map();
    te.set(P, 0);
    const ue = q || 1, G = Math.min(H, w || 1 / 0);
    for (let X = P + ue; X < p.length + 1 && !(X - P > G); X += 1) {
      const ae = NA(p, P, X, v, S, E, T);
      if (ae === void 0) break;
      te.set(X, ae);
    }
    return te;
  };
}
function xA(p, S, E, v, T, H, q) {
  const w = wA(p, v, T, H), P = HA(
    p,
    S,
    E,
    v,
    T,
    w,
    H,
    q
  ), te = UA(P, 0, p.length);
  if (!te) return;
  const ue = [];
  for (let G = 1; G < te.length; G += 1) {
    const X = p.map((ne, ie) => ({ photo: ne, index: ie })).slice(te[G - 1], te[G]), ae = JE(
      X.map(({ photo: ne }) => ne),
      v,
      S,
      E
    );
    ue.push({
      photos: X.map(({ photo: ne, index: ie }) => ({
        photo: ne,
        index: ie,
        width: ae * lS(ne),
        height: ae
      }))
    });
  }
  return { spacing: S, padding: E, containerWidth: v, tracks: ue, horizontal: !0 };
}
function BA({ photos: p, breakpoints: S, defaultContainerWidth: E, ...v }, T) {
  const { containerRef: H, containerWidth: q } = mA(T, S, E), { spacing: w, padding: P, targetRowHeight: te, minPhotos: ue, maxPhotos: G, ...X } = OA(q, {
    photos: p,
    ...v
  }), ae = Pz(
    () => q !== void 0 && w !== void 0 && P !== void 0 && te !== void 0 ? xA(p, w, P, q, te, ue, G) : void 0,
    [p, w, P, q, te, ue, G]
  );
  return St.jsx(DA, { layout: "rows", ref: H, model: ae, ...X });
}
const qA = r1(BA), KE = "carousel", kE = "controller", jA = "navigation", YA = "no-scroll", nS = "portal", LA = "root", $E = "toolbar", Xb = "loading", Qb = "error", Zb = "complete", GA = "placeholder", VA = (p) => `active-slide-${p}`, WE = "flex_center", XA = "no_scroll", FE = "no_scroll_padding", aS = "slide", QA = "slide_wrapper", ad = "prev", ud = "next", _E = "swipe", Mm = "close", IE = "onPointerDown", PE = "onPointerMove", eT = "onPointerUp", tT = "onPointerLeave", lT = "onPointerCancel", nT = "onKeyDown", ZA = "onKeyUp", aT = "onWheel", JA = "Escape", KA = "ArrowLeft", kA = "ArrowRight", $A = "button", Fb = "icon", uT = "contain", CE = "cover", WA = "Unknown action type", iT = "yarl__";
function Uo(...p) {
  return [...p].filter(Boolean).join(" ");
}
function Ht(p) {
  return `${iT}${p}`;
}
function Oa(p) {
  return `--${iT}${p}`;
}
function Ug(p, S) {
  return `${p}${S ? `_${S}` : ""}`;
}
function uS(p) {
  return (S) => Ug(p, S);
}
function _m(p, S) {
  var E;
  return (E = p?.[S]) !== null && E !== void 0 ? E : S;
}
function FA(p, S, E) {
  return _m(p, "{index} of {total}").replace(/\{index}/g, `${iS(E, S.length) + 1}`).replace(/\{total}/g, `${S.length}`);
}
function cT(...p) {
  return () => {
    p.forEach((S) => {
      S();
    });
  };
}
function ms(p, S, E) {
  return () => {
    const v = j.useContext(E);
    if (!v)
      throw new Error(`${p} must be used within a ${S}.Provider`);
    return v;
  };
}
function oT() {
  return typeof window < "u";
}
function IA(p, S = 0) {
  const E = 10 ** S;
  return Math.round((p + Number.EPSILON) * E) / E;
}
function fT(p) {
  return p.type === void 0 || p.type === "image";
}
function PA(p, S) {
  return p.imageFit === CE || p.imageFit !== uT && S === CE;
}
function d1(p) {
  return typeof p == "string" ? Number.parseInt(p, 10) : p;
}
function s1(p) {
  if (typeof p == "number")
    return { pixel: p };
  if (typeof p == "string") {
    const S = d1(p);
    return p.endsWith("%") ? { percent: S } : { pixel: S };
  }
  return { pixel: 0 };
}
function e3(p, S) {
  const E = s1(S), v = E.percent !== void 0 ? p.width / 100 * E.percent : E.pixel;
  return {
    width: Math.max(p.width - 2 * v, 0),
    height: Math.max(p.height - 2 * v, 0)
  };
}
function iS(p, S) {
  return S > 0 ? (p % S + S) % S : 0;
}
function sT(p) {
  return p.length > 0;
}
function rT(p, S) {
  return p[iS(S, p.length)];
}
function Ib(p, S) {
  return sT(p) ? rT(p, S) : void 0;
}
function t3(p) {
  return fT(p) ? p.src : void 0;
}
function l3(p, S, E = 0) {
  return Math.min(p.preload, Math.max(p.finite ? S.length - 1 : Math.floor(S.length / 2), E));
}
const n3 = Number(j.version.split(".")[0]) >= 19;
function a3(p) {
  return { inert: n3 ? p : p ? "" : void 0 };
}
function u3(p) {
  p.scrollTop;
}
const Pb = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [Mm] },
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
    imageFit: uT,
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
function id(p, S) {
  return { name: p, component: S };
}
function an(p, S) {
  return { module: p, children: S };
}
function dT(p, S, E) {
  return p.module.name === S ? E(p) : p.children ? [
    an(p.module, p.children.flatMap((v) => {
      var T;
      return (T = dT(v, S, E)) !== null && T !== void 0 ? T : [];
    }))
  ] : [p];
}
function Rm(p, S, E) {
  return p.flatMap((v) => {
    var T;
    return (T = dT(v, S, E)) !== null && T !== void 0 ? T : [];
  });
}
function i3(p, S = [], E = []) {
  let v = p;
  const T = (ae) => {
    const ne = [...v];
    for (; ne.length > 0; ) {
      const ie = ne.pop();
      if (ie?.module.name === ae)
        return !0;
      ie?.children && ne.push(...ie.children);
    }
    return !1;
  }, H = (ae, ne) => {
    if (ae === "") {
      v = [an(ne, v)];
      return;
    }
    v = Rm(v, ae, (ie) => [an(ne, [ie])]);
  }, q = (ae, ne) => {
    v = Rm(v, ae, (ie) => [an(ie.module, [an(ne, ie.children)])]);
  }, w = (ae, ne, ie) => {
    v = Rm(v, ae, (pe) => {
      var se;
      return [
        an(pe.module, [
          ...ie ? [an(ne)] : [],
          ...(se = pe.children) !== null && se !== void 0 ? se : [],
          ...ie ? [] : [an(ne)]
        ])
      ];
    });
  }, P = (ae, ne, ie) => {
    v = Rm(v, ae, (pe) => [
      ...ie ? [an(ne)] : [],
      pe,
      ...ie ? [] : [an(ne)]
    ]);
  }, te = (ae) => {
    q(kE, ae);
  }, ue = (ae, ne) => {
    v = Rm(v, ae, (ie) => [an(ne, ie.children)]);
  }, G = (ae) => {
    v = Rm(v, ae, (ne) => ne.children);
  }, X = (ae) => {
    E.push(ae);
  };
  return S.forEach((ae) => {
    ae({
      contains: T,
      addParent: H,
      append: q,
      addChild: w,
      addSibling: P,
      addModule: te,
      replace: ue,
      remove: G,
      augment: X
    });
  }), {
    config: v,
    augmentation: (ae) => E.reduce((ne, ie) => ie(ne), ae)
  };
}
const hT = j.createContext(null), mT = ms("useA11yContext", "A11yContext", hT);
function c3({ children: p }) {
  const [S, E] = j.useState(!1), [v, T] = j.useState(!1), H = j.useMemo(() => ({ focusWithin: S, trackFocusWithin: (w, P) => {
    const te = (ue) => (G) => {
      var X;
      G.currentTarget.contains(G.relatedTarget) || E(ue), (X = ue ? w : P) === null || X === void 0 || X(G);
    };
    return {
      onFocus: te(!0),
      onBlur: te(!1)
    };
  }, autoPlaying: v, setAutoPlaying: T }), [S, v]);
  return j.createElement(hT.Provider, { value: H }, p);
}
const pT = j.createContext(null), cS = ms("useDocument", "DocumentContext", pT);
function o3({ nodeRef: p, children: S }) {
  const E = j.useMemo(() => {
    const v = (H) => {
      var q;
      return ((q = H || p.current) === null || q === void 0 ? void 0 : q.ownerDocument) || document;
    };
    return { getOwnerDocument: v, getOwnerWindow: (H) => {
      var q;
      return ((q = v(H)) === null || q === void 0 ? void 0 : q.defaultView) || window;
    } };
  }, [p]);
  return j.createElement(pT.Provider, { value: E }, S);
}
const gT = j.createContext(null), h1 = ms("useEvents", "EventsContext", gT);
function f3({ children: p }) {
  const [S] = j.useState({});
  j.useEffect(() => () => {
    Object.keys(S).forEach((v) => delete S[v]);
  }, [S]);
  const E = j.useMemo(() => {
    const v = (q, w) => {
      var P;
      (P = S[q]) === null || P === void 0 || P.splice(0, S[q].length, ...S[q].filter((te) => te !== w));
    };
    return { publish: (...[q, w]) => {
      var P;
      (P = S[q]) === null || P === void 0 || P.forEach((te) => te(w));
    }, subscribe: (q, w) => (S[q] || (S[q] = []), S[q].push(w), () => v(q, w)), unsubscribe: v };
  }, [S]);
  return j.createElement(gT.Provider, { value: E }, p);
}
const yT = j.createContext(null), wg = ms("useLightboxProps", "LightboxPropsContext", yT);
function s3({ children: p, ...S }) {
  return j.createElement(yT.Provider, { value: S }, p);
}
const vT = j.createContext(null), m1 = ms("useLightboxState", "LightboxStateContext", vT), bT = j.createContext(null), r3 = ms("useLightboxDispatch", "LightboxDispatchContext", bT);
function d3(p, S) {
  switch (S.type) {
    case "swipe": {
      const { slides: E } = p, v = S?.increment || 0, T = p.globalIndex + v, H = iS(T, E.length), q = Ib(E, H), w = v || S.duration !== void 0 ? {
        increment: v,
        duration: S.duration,
        easing: S.easing
      } : void 0;
      return { slides: E, currentIndex: H, globalIndex: T, currentSlide: q, animation: w };
    }
    case "update":
      return S.slides !== p.slides || S.index !== p.currentIndex ? {
        slides: S.slides,
        currentIndex: S.index,
        globalIndex: S.index,
        currentSlide: Ib(S.slides, S.index)
      } : p;
    default:
      throw new Error(WA);
  }
}
function h3({ slides: p, index: S, children: E }) {
  const [v, T] = j.useReducer(d3, {
    slides: p,
    currentIndex: S,
    globalIndex: S,
    currentSlide: Ib(p, S)
  });
  j.useEffect(() => {
    T({ type: "update", slides: p, index: S });
  }, [p, S]);
  const H = j.useMemo(() => ({ ...v, state: v, dispatch: T }), [v, T]);
  return j.createElement(
    bT.Provider,
    { value: T },
    j.createElement(vT.Provider, { value: H }, E)
  );
}
const ST = j.createContext(null), p1 = ms("useTimeouts", "TimeoutsContext", ST);
function m3({ children: p }) {
  const [S] = j.useState([]);
  j.useEffect(() => () => {
    S.forEach((v) => window.clearTimeout(v)), S.splice(0, S.length);
  }, [S]);
  const E = j.useMemo(() => {
    const v = (q) => {
      S.splice(0, S.length, ...S.filter((w) => w !== q));
    };
    return { setTimeout: (q, w) => {
      const P = window.setTimeout(() => {
        v(P), q();
      }, w);
      return S.push(P), P;
    }, clearTimeout: (q) => {
      q !== void 0 && (v(q), window.clearTimeout(q));
    } };
  }, [S]);
  return j.createElement(ST.Provider, { value: E }, p);
}
const ET = j.forwardRef(function({ label: S, className: E, icon: v, renderIcon: T, onClick: H, style: q, ...w }, P) {
  const { styles: te, labels: ue } = wg(), G = _m(ue, S);
  return j.createElement("button", { ref: P, type: "button", title: G, "aria-label": G, className: Uo(Ht($A), E), onClick: H, style: { ...q, ...te.button }, ...w }, T ? T() : j.createElement(v, { className: Ht(Fb), style: te.icon }));
});
function p3(p, S) {
  const E = (v) => j.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...v }, S);
  return E.displayName = p, E;
}
function Ng(p, S) {
  return p3(p, j.createElement(
    "g",
    { fill: "currentColor" },
    j.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    S
  ));
}
const g3 = Ng("Close", j.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), y3 = Ng("Previous", j.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), v3 = Ng("Next", j.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), b3 = Ng("Loading", j.createElement(j.Fragment, null, Array.from({ length: 8 }).map((p, S, E) => j.createElement("line", { key: S, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / E.length * (S + 1), transform: `rotate(${360 / E.length * S}, 12, 12)` })))), S3 = Ng("Error", j.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), Hg = oT() ? j.useLayoutEffect : j.useEffect;
function TT() {
  const [p, S] = j.useState(!1);
  return j.useEffect(() => {
    var E, v;
    const T = (E = window.matchMedia) === null || E === void 0 ? void 0 : E.call(window, "(prefers-reduced-motion: reduce)");
    S(T?.matches);
    const H = (q) => S(q.matches);
    return (v = T?.addEventListener) === null || v === void 0 || v.call(T, "change", H), () => {
      var q;
      return (q = T?.removeEventListener) === null || q === void 0 ? void 0 : q.call(T, "change", H);
    };
  }, []), p;
}
function E3(p) {
  let S = 0, E = 0, v = 0;
  const H = window.getComputedStyle(p).transform.match(/matrix.*\((.+)\)/);
  if (H) {
    const q = H[1].split(",").map(d1);
    q.length === 6 ? (S = q[4], E = q[5]) : q.length === 16 && (S = q[12], E = q[13], v = q[14]);
  }
  return { x: S, y: E, z: v };
}
function UE(p, S) {
  const E = j.useRef(void 0), v = j.useRef(void 0), T = TT();
  return Hg(() => {
    var H, q, w;
    if (p.current && E.current !== void 0 && !T) {
      const { keyframes: P, duration: te, easing: ue, onfinish: G } = S(E.current, p.current.getBoundingClientRect(), E3(p.current)) || {};
      if (P && te) {
        (H = v.current) === null || H === void 0 || H.cancel(), v.current = void 0;
        try {
          v.current = (w = (q = p.current).animate) === null || w === void 0 ? void 0 : w.call(q, P, { duration: te, easing: ue });
        } catch (X) {
          console.error(X);
        }
        v.current && (v.current.onfinish = () => {
          v.current = void 0, G?.();
        });
      }
    }
    E.current = void 0;
  }), {
    prepareAnimation: (H) => {
      E.current = H;
    },
    isAnimationPlaying: () => {
      var H;
      return ((H = v.current) === null || H === void 0 ? void 0 : H.playState) === "running";
    }
  };
}
function zT() {
  const p = j.useRef(null), S = j.useRef(void 0), [E, v] = j.useState();
  return { setContainerRef: j.useCallback((H) => {
    p.current = H, S.current && (S.current.disconnect(), S.current = void 0);
    const q = () => {
      if (H) {
        const w = window.getComputedStyle(H), P = (te) => parseFloat(te) || 0;
        v({
          width: Math.round(H.clientWidth - P(w.paddingLeft) - P(w.paddingRight)),
          height: Math.round(H.clientHeight - P(w.paddingTop) - P(w.paddingBottom))
        });
      } else
        v(void 0);
    };
    q(), H && typeof ResizeObserver < "u" && (S.current = new ResizeObserver(q), S.current.observe(H));
  }, []), containerRef: p, containerRect: E };
}
function o1() {
  const p = j.useRef(void 0), { setTimeout: S, clearTimeout: E } = p1();
  return j.useCallback((v, T) => {
    E(p.current), p.current = S(v, T > 0 ? T : 0);
  }, [S, E]);
}
function Ll(p) {
  const S = j.useRef(p);
  return Hg(() => {
    S.current = p;
  }), j.useCallback((...E) => {
    var v;
    return (v = S.current) === null || v === void 0 ? void 0 : v.call(S, ...E);
  }, []);
}
function wE(p, S) {
  typeof p == "function" ? p(S) : p && (p.current = S);
}
function eS(p, S) {
  return j.useMemo(() => p == null && S == null ? null : (E) => {
    wE(p, E), wE(S, E);
  }, [p, S]);
}
function T3(p, S = !1) {
  const E = j.useRef(!1);
  Hg(() => {
    S && E.current && (E.current = !1, p());
  }, [S, p]);
  const v = j.useCallback(() => {
    E.current = !0;
  }, []), T = j.useCallback(() => {
    E.current = !1;
  }, []);
  return { onFocus: v, onBlur: T };
}
function oS() {
  const [p, S] = j.useState(!1);
  return Hg(() => {
    S(window.getComputedStyle(window.document.documentElement).direction === "rtl");
  }, []), p;
}
function z3() {
  const [p] = j.useState({}), S = j.useCallback((T, H) => {
    var q;
    (q = p[T]) === null || q === void 0 || q.forEach((w) => {
      H.isPropagationStopped() || w(H);
    });
  }, [p]), E = j.useMemo(() => ({
    onPointerDown: (T) => S(IE, T),
    onPointerMove: (T) => S(PE, T),
    onPointerUp: (T) => S(eT, T),
    onPointerLeave: (T) => S(tT, T),
    onPointerCancel: (T) => S(lT, T),
    onKeyDown: (T) => S(nT, T),
    onKeyUp: (T) => S(ZA, T),
    onWheel: (T) => S(aT, T)
  }), [S]), v = j.useCallback((T, H) => (p[T] || (p[T] = []), p[T].unshift(H), () => {
    const q = p[T];
    q && q.splice(0, q.length, ...q.filter((w) => w !== H));
  }), [p]);
  return { registerSensors: E, subscribeSensors: v };
}
function NE(p, S) {
  const E = j.useRef(0), v = o1(), T = Ll((...H) => {
    E.current = Date.now(), p(H);
  });
  return j.useCallback((...H) => {
    v(() => {
      T(H);
    }, S - (Date.now() - E.current));
  }, [S, T, v]);
}
const Jb = uS("slide"), Kb = uS("slide_image");
function A3({ slide: p, offset: S, render: E, rect: v, imageFit: T, imageProps: H, onClick: q, onLoad: w, onError: P, style: te }) {
  var ue, G, X, ae, ne, ie, pe, se;
  const [qe, xe] = j.useState(Xb), { publish: Ze } = h1(), { setTimeout: lt } = p1(), we = j.useRef(null);
  j.useEffect(() => {
    S === 0 && Ze(VA(qe));
  }, [S, qe, Ze]);
  const ze = Ll((ee) => {
    ("decode" in ee ? ee.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      ee.parentNode && (xe(Zb), lt(() => {
        w?.(ee);
      }, 0));
    });
  }), Se = j.useCallback((ee) => {
    we.current = ee, ee?.complete && ze(ee);
  }, [ze]), Ce = j.useCallback((ee) => {
    ze(ee.currentTarget);
  }, [ze]), de = Ll(() => {
    xe(Qb), P?.();
  }), Ne = PA(p, T), Ae = (ee, ge) => Number.isFinite(ee) ? ee : ge, oe = Ae(Math.max(...((G = (ue = p.srcSet) === null || ue === void 0 ? void 0 : ue.map((ee) => ee.width)) !== null && G !== void 0 ? G : []).concat(p.width ? [p.width] : []).filter(Boolean)), ((X = we.current) === null || X === void 0 ? void 0 : X.naturalWidth) || 0), $e = Ae(Math.max(...((ne = (ae = p.srcSet) === null || ae === void 0 ? void 0 : ae.map((ee) => ee.height)) !== null && ne !== void 0 ? ne : []).concat(p.height ? [p.height] : []).filter(Boolean)), ((ie = we.current) === null || ie === void 0 ? void 0 : ie.naturalHeight) || 0), _e = oe && $e ? {
    maxWidth: `min(${oe}px, 100%)`,
    maxHeight: `min(${$e}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, R = (pe = p.srcSet) === null || pe === void 0 ? void 0 : pe.sort((ee, ge) => ee.width - ge.width).map((ee) => `${ee.src} ${ee.width}w`).join(", "), J = () => v && !Ne && p.width && p.height ? v.height / p.height * p.width : Number.MAX_VALUE, le = R && v && oT() ? `${Math.round(Math.min(J(), v.width))}px` : void 0, { style: ve, className: Oe, ...K } = H || {};
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("img", { ref: Se, onLoad: Ce, onError: de, onClick: q, draggable: !1, className: Uo(Ht(Kb()), Ne && Ht(Kb("cover")), qe !== Zb && Ht(Kb("loading")), Oe), style: { ..._e, ...te, ...ve }, ...K, alt: (se = p.alt) !== null && se !== void 0 ? se : "", sizes: le, srcSet: R, src: p.src }),
    qe !== Zb && j.createElement(
      "div",
      { className: Ht(Jb(GA)) },
      qe === Xb && (E?.iconLoading ? E.iconLoading() : j.createElement(b3, { className: Uo(Ht(Fb), Ht(Jb(Xb))) })),
      qe === Qb && (E?.iconError ? E.iconError() : j.createElement(S3, { className: Uo(Ht(Fb), Ht(Jb(Qb))) }))
    )
  );
}
const D3 = j.forwardRef(function({ className: S, children: E, onFocus: v, onBlur: T, ...H }, q) {
  const w = j.useRef(null), { trackFocusWithin: P } = mT();
  return j.createElement(
    o3,
    { nodeRef: w },
    j.createElement("div", { ref: eS(q, w), className: Uo(Ht("root"), S), ...P(v, T), ...H }, E)
  );
});
var xn;
(function(p) {
  p[p.NONE = 0] = "NONE", p[p.SWIPE = 1] = "SWIPE", p[p.PULL = 2] = "PULL", p[p.ANIMATION = 3] = "ANIMATION";
})(xn || (xn = {}));
function O3(p, S, E, v, T) {
  j.useEffect(
    () => cT(p(IE, S), p(PE, E), p(eT, v), p(tT, v), p(lT, v)),
    [p, S, E, v, T]
  );
}
var _i;
(function(p) {
  p[p.NONE = 0] = "NONE", p[p.SWIPE = 1] = "SWIPE", p[p.PULL = 2] = "PULL";
})(_i || (_i = {}));
const kb = 30;
function R3({ disableSwipeNavigation: p, closeOnBackdropClick: S }, E, v, T, H, q, w, P, te, ue, G, X, ae, ne, ie, pe) {
  const se = j.useRef(0), qe = j.useRef([]), xe = j.useRef(void 0), Ze = j.useRef(0), lt = j.useRef(_i.NONE), we = j.useCallback((oe) => {
    xe.current === oe.pointerId && (xe.current = void 0, lt.current = _i.NONE);
    const $e = qe.current;
    $e.splice(0, $e.length, ...$e.filter((_e) => _e.pointerId !== oe.pointerId));
  }, []), ze = j.useCallback((oe) => {
    we(oe), oe.persist(), qe.current.push(oe);
  }, [we]), Se = j.useCallback((oe) => qe.current.find(({ pointerId: $e }) => oe.pointerId === $e), []), Ce = Ll((oe) => {
    ze(oe);
  }), de = (oe, $e) => G && oe > $e || ue && oe < -$e, Ne = Ll((oe) => {
    const $e = Se(oe);
    if ($e)
      if (xe.current === oe.pointerId) {
        const _e = Date.now() - Ze.current, R = se.current;
        lt.current === _i.SWIPE ? Math.abs(R) > 0.3 * T || Math.abs(R) > 5 && _e < H ? P(R, _e) : te(R) : lt.current === _i.PULL && (de(R, 2 * kb) ? ne(R, _e) : ie(R)), se.current = 0, lt.current = _i.NONE;
      } else {
        const { target: _e } = oe;
        S && _e instanceof HTMLElement && _e === $e.target && (_e.classList.contains(Ht(aS)) || _e.classList.contains(Ht(QA))) && pe();
      }
    we(oe);
  }), Ae = Ll((oe) => {
    const $e = Se(oe);
    if ($e) {
      const _e = xe.current === oe.pointerId;
      if (oe.buttons === 0) {
        _e && se.current !== 0 ? Ne(oe) : we($e);
        return;
      }
      const R = oe.clientX - $e.clientX, J = oe.clientY - $e.clientY;
      if (xe.current === void 0) {
        const le = (ve) => {
          ze(oe), xe.current = oe.pointerId, Ze.current = Date.now(), lt.current = ve;
        };
        Math.abs(R) > Math.abs(J) && Math.abs(R) > kb && v(R) ? p || (le(_i.SWIPE), q()) : Math.abs(J) > Math.abs(R) && de(J, kb) && (le(_i.PULL), X());
      } else _e && (lt.current === _i.SWIPE ? (se.current = R, w(R)) : lt.current === _i.PULL && (se.current = J, ae(J)));
    }
  });
  O3(E, Ce, Ae, Ne);
}
function M3({ preventDefaultWheelX: p, preventDefaultWheelY: S }) {
  const E = j.useRef(null), v = Ll((T) => {
    const H = Math.abs(T.deltaX) > Math.abs(T.deltaY);
    (H && p || !H && S || T.ctrlKey) && T.preventDefault();
  });
  return j.useCallback((T) => {
    var H;
    T ? T.addEventListener("wheel", v, { passive: !1 }) : (H = E.current) === null || H === void 0 || H.removeEventListener("wheel", v), E.current = T;
  }, [v]);
}
function _3(p, S, E, v, T, H, q, w, P) {
  const te = j.useRef(0), ue = j.useRef(0), G = j.useRef(void 0), X = j.useRef(void 0), ae = j.useRef(0), ne = j.useRef(void 0), ie = j.useRef(0), { setTimeout: pe, clearTimeout: se } = p1(), qe = j.useCallback(() => {
    G.current && (se(G.current), G.current = void 0);
  }, [se]), xe = j.useCallback(() => {
    X.current && (se(X.current), X.current = void 0);
  }, [se]), Ze = Ll(() => {
    p !== xn.SWIPE && (te.current = 0, ie.current = 0, qe(), xe());
  });
  j.useEffect(Ze, [p, Ze]);
  const lt = Ll((ze) => {
    X.current = void 0, te.current === ze && P(te.current);
  }), we = Ll((ze) => {
    if (ze.ctrlKey || Math.abs(ze.deltaY) > Math.abs(ze.deltaX))
      return;
    const Se = (Ce) => {
      ae.current = Ce, se(ne.current), ne.current = Ce > 0 ? pe(() => {
        ae.current = 0, ne.current = void 0;
      }, 300) : void 0;
    };
    if (p === xn.NONE) {
      if (Math.abs(ze.deltaX) <= 1.2 * Math.abs(ae.current)) {
        Se(ze.deltaX);
        return;
      }
      if (!E(-ze.deltaX))
        return;
      if (ue.current += ze.deltaX, qe(), Math.abs(ue.current) > 30)
        ue.current = 0, Se(0), ie.current = Date.now(), H();
      else {
        const Ce = ue.current;
        G.current = pe(() => {
          G.current = void 0, Ce === ue.current && (ue.current = 0);
        }, T);
      }
    } else if (p === xn.SWIPE) {
      let Ce = te.current - ze.deltaX;
      if (Ce = Math.min(Math.abs(Ce), v) * Math.sign(Ce), te.current = Ce, q(Ce), xe(), Math.abs(Ce) > 0.2 * v) {
        Se(ze.deltaX), w(Ce, Date.now() - ie.current);
        return;
      }
      X.current = pe(() => lt(Ce), 2 * T);
    } else
      Se(ze.deltaX);
  });
  j.useEffect(() => S(aT, we), [S, we]);
}
const HE = uS("container"), AT = j.createContext(null), xg = ms("useController", "ControllerContext", AT);
function C3({ children: p, ...S }) {
  var E;
  const { carousel: v, animation: T, controller: H, on: q, styles: w, render: P } = S, { closeOnPullUp: te, closeOnPullDown: ue, preventDefaultWheelX: G, preventDefaultWheelY: X } = H, [ae, ne] = j.useState(), ie = m1(), pe = r3(), [se, qe] = j.useState(xn.NONE), xe = j.useRef(0), Ze = j.useRef(0), lt = j.useRef(1), { registerSensors: we, subscribeSensors: ze } = z3(), { subscribe: Se, publish: Ce } = h1(), de = o1(), Ne = o1(), Ae = o1(), { containerRef: oe, setContainerRef: $e, containerRect: _e } = zT(), R = eS(M3({ preventDefaultWheelX: G, preventDefaultWheelY: X }), $e), J = j.useRef(null), le = eS(J, void 0), { getOwnerDocument: ve } = cS(), Oe = oS(), K = (me) => (Oe ? -1 : 1) * (typeof me == "number" ? me : 1), ee = Ll(() => {
    var me;
    return (me = oe.current) === null || me === void 0 ? void 0 : me.focus();
  }), ge = Ll(() => S), Ee = Ll(() => ie), xt = j.useCallback((me) => Ce(ad, me), [Ce]), Gl = j.useCallback((me) => Ce(ud, me), [Ce]), dt = j.useCallback(() => Ce(Mm), [Ce]), kl = (me) => !(v.finite && (K(me) > 0 && ie.currentIndex === 0 || K(me) < 0 && ie.currentIndex === ie.slides.length - 1)), $l = (me) => {
    var ht;
    xe.current = me, (ht = oe.current) === null || ht === void 0 || ht.style.setProperty(Oa("swipe_offset"), `${Math.round(me)}px`);
  }, Wu = (me) => {
    var ht, dl;
    Ze.current = me, lt.current = (() => {
      const au = ue && me > 0 ? me : te && me < 0 ? -me : 0;
      return Math.min(Math.max(IA(1 - au / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (ht = oe.current) === null || ht === void 0 || ht.style.setProperty(Oa("pull_offset"), `${Math.round(me)}px`), (dl = oe.current) === null || dl === void 0 || dl.style.setProperty(Oa("pull_opacity"), `${lt.current}`);
  }, { prepareAnimation: he } = UE(J, (me, ht, dl) => {
    if (J.current && _e)
      return {
        keyframes: [
          {
            transform: `translate(0, ${me.rect.y - ht.y + dl.y}px)`,
            opacity: me.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: me.duration,
        easing: T.easing.fade
      };
  }), Ci = (me, ht) => {
    if (te || ue) {
      Wu(me);
      let dl = 0;
      J.current && (dl = T.fade * (ht ? 2 : 1), he({
        rect: J.current.getBoundingClientRect(),
        opacity: lt.current,
        duration: dl
      })), Ae(() => {
        Wu(0), qe(xn.NONE);
      }, dl), qe(xn.ANIMATION), ht || dt();
    }
  }, { prepareAnimation: bc, isAnimationPlaying: oa } = UE(J, (me, ht, dl) => {
    var Rt;
    if (J.current && _e && (!((Rt = ie.animation) === null || Rt === void 0) && Rt.duration)) {
      const An = s1(v.spacing), au = (An.percent ? An.percent * _e.width / 100 : An.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${K(ie.globalIndex - me.index) * (_e.width + au) + me.rect.x - ht.x + dl.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: ie.animation.duration,
        easing: ie.animation.easing
      };
    }
  }), Bn = Ll((me) => {
    var ht, dl;
    const Rt = me.offset || 0, An = Rt ? T.swipe : (ht = T.navigation) !== null && ht !== void 0 ? ht : T.swipe, au = !Rt && !oa() ? T.easing.navigation : T.easing.swipe;
    let { direction: Fu } = me;
    const qn = (dl = me.count) !== null && dl !== void 0 ? dl : 1;
    let gs = xn.ANIMATION, Dn = An * qn;
    if (!Fu) {
      const Ui = _e?.width, uu = me.duration || 0, Al = Ui ? An / Ui * Math.abs(Rt) : An;
      qn !== 0 ? (uu < Al ? Dn = Dn / Al * Math.max(uu, Al / 5) : Ui && (Dn = An / Ui * (Ui - Math.abs(Rt))), Fu = K(Rt) > 0 ? ad : ud) : Dn = An / 2;
    }
    let No = 0;
    Fu === ad ? kl(K(1)) ? No = -qn : (gs = xn.NONE, Dn = An) : Fu === ud && (kl(K(-1)) ? No = qn : (gs = xn.NONE, Dn = An)), Dn = Math.round(Dn), Ne(() => {
      $l(0), qe(xn.NONE);
    }, Dn), J.current && bc({
      rect: J.current.getBoundingClientRect(),
      index: ie.globalIndex
    }), qe(gs), Ce(_E, {
      type: "swipe",
      increment: No,
      duration: Dn,
      easing: au
    });
  });
  j.useEffect(() => {
    var me, ht;
    !((me = ie.animation) === null || me === void 0) && me.increment && (!((ht = ie.animation) === null || ht === void 0) && ht.duration) && de(() => pe({ type: "swipe", increment: 0 }), ie.animation.duration);
  }, [ie.animation, pe, de]);
  const gt = [
    ze,
    kl,
    _e?.width || 0,
    T.swipe,
    () => qe(xn.SWIPE),
    (me) => $l(me),
    (me, ht) => Bn({ offset: me, duration: ht, count: 1 }),
    (me) => Bn({ offset: me, count: 0 })
  ], ps = [
    () => {
      ue && qe(xn.PULL);
    },
    (me) => Wu(me),
    (me) => Ci(me),
    (me) => Ci(me, !0)
  ];
  R3(H, ...gt, te, ue, ...ps, dt), _3(se, ...gt);
  const Sc = Ll(() => {
    H.focus && ve().querySelector(`.${Ht(nS)} .${Ht(HE())}`) && ee();
  });
  j.useEffect(Sc, [Sc]);
  const wo = Ll(() => {
    var me;
    (me = q.view) === null || me === void 0 || me.call(q, { index: ie.currentIndex });
  });
  j.useEffect(wo, [ie.globalIndex, wo]), j.useEffect(() => cT(Se(ad, (me) => Bn({ direction: ad, ...me })), Se(ud, (me) => Bn({ direction: ud, ...me })), Se(_E, (me) => pe(me))), [Se, Bn, pe]);
  const Ot = j.useMemo(() => ({
    prev: xt,
    next: Gl,
    close: dt,
    focus: ee,
    slideRect: _e ? e3(_e, v.padding) : { width: 0, height: 0 },
    containerRect: _e || { width: 0, height: 0 },
    subscribeSensors: ze,
    containerRef: oe,
    setCarouselRef: le,
    toolbarWidth: ae,
    setToolbarWidth: ne
  }), [
    xt,
    Gl,
    dt,
    ee,
    ze,
    _e,
    oe,
    le,
    ae,
    ne,
    v.padding
  ]);
  return j.useImperativeHandle(H.ref, () => ({
    prev: xt,
    next: Gl,
    close: dt,
    focus: ee,
    getLightboxProps: ge,
    getLightboxState: Ee
  }), [xt, Gl, dt, ee, ge, Ee]), j.createElement("div", { ref: R, className: Uo(Ht(HE()), Ht(WE)), style: {
    ...se === xn.SWIPE ? { [Oa("swipe_offset")]: `${Math.round(xe.current)}px` } : null,
    ...se === xn.PULL ? {
      [Oa("pull_offset")]: `${Math.round(Ze.current)}px`,
      [Oa("pull_opacity")]: `${lt.current}`
    } : null,
    ...H.touchAction !== "none" ? { [Oa("controller_touch_action")]: H.touchAction } : null,
    ...w.container
  }, tabIndex: -1, ...we }, _e && j.createElement(
    AT.Provider,
    { value: Ot },
    p,
    (E = P.controls) === null || E === void 0 ? void 0 : E.call(P)
  ));
}
const U3 = id(kE, C3);
function nd(p) {
  return Ug(KE, p);
}
function xE(p) {
  return Ug(aS, p);
}
function w3({ slide: p, offset: S }) {
  const E = j.useRef(null), { currentIndex: v, slides: T } = m1(), { slideRect: H, focus: q } = xg(), { render: w, carousel: { imageFit: P, imageProps: te }, on: { click: ue }, styles: { slide: G }, labels: X } = wg(), { getOwnerDocument: ae } = cS(), ne = S !== 0;
  j.useEffect(() => {
    var pe;
    ne && (!((pe = E.current) === null || pe === void 0) && pe.contains(ae().activeElement)) && q();
  }, [ne, q, ae]);
  const ie = () => {
    var pe, se, qe, xe;
    let Ze = (pe = w.slide) === null || pe === void 0 ? void 0 : pe.call(w, { slide: p, offset: S, rect: H });
    return !Ze && fT(p) && (Ze = j.createElement(A3, { slide: p, offset: S, render: w, rect: H, imageFit: P, imageProps: te, onClick: ne ? void 0 : () => ue?.({ index: v }) })), Ze ? j.createElement(
      j.Fragment,
      null,
      (se = w.slideHeader) === null || se === void 0 ? void 0 : se.call(w, { slide: p }),
      ((qe = w.slideContainer) !== null && qe !== void 0 ? qe : (({ children: lt }) => lt))({ slide: p, children: Ze }),
      (xe = w.slideFooter) === null || xe === void 0 ? void 0 : xe.call(w, { slide: p })
    ) : null;
  };
  return j.createElement("div", { ref: E, className: Uo(Ht(xE()), !ne && Ht(xE("current")), Ht(WE)), ...a3(ne), style: G, role: "group", "aria-roledescription": _m(X, "Slide"), "aria-label": FA(X, T, v + S) }, ie());
}
function N3() {
  const p = wg().styles.slide;
  return j.createElement("div", { className: Ht(aS), style: p });
}
function H3({ carousel: p, labels: S }) {
  const { slides: E, currentIndex: v, globalIndex: T } = m1(), { setCarouselRef: H } = xg(), { autoPlaying: q, focusWithin: w } = mT(), P = s1(p.spacing), te = s1(p.padding), ue = l3(p, E, 1), G = [];
  if (sT(E))
    for (let X = v - ue; X <= v + ue; X += 1) {
      const ae = rT(E, X), ne = T - v + X, ie = p.finite && (X < 0 || X > E.length - 1);
      G.push(ie ? { key: ne } : {
        key: [`${ne}`, t3(ae)].filter(Boolean).join("|"),
        offset: X - v,
        slide: ae
      });
    }
  return j.createElement("div", { ref: H, className: Uo(Ht(nd()), G.length > 0 && Ht(nd("with_slides"))), style: {
    [`${Oa(nd("slides_count"))}`]: G.length,
    [`${Oa(nd("spacing_px"))}`]: P.pixel || 0,
    [`${Oa(nd("spacing_percent"))}`]: P.percent || 0,
    [`${Oa(nd("padding_px"))}`]: te.pixel || 0,
    [`${Oa(nd("padding_percent"))}`]: te.percent || 0
  }, role: "region", "aria-live": q && !w ? "off" : "polite", "aria-roledescription": _m(S, "Carousel"), "aria-label": _m(S, "Photo gallery") }, G.map(({ key: X, slide: ae, offset: ne }) => ae ? j.createElement(w3, { key: X, slide: ae, offset: ne }) : j.createElement(N3, { key: X })));
}
const x3 = id(KE, H3);
function DT() {
  const { carousel: p } = wg(), { slides: S, currentIndex: E } = m1(), v = S.length === 0 || p.finite && E === 0, T = S.length === 0 || p.finite && E === S.length - 1;
  return { prevDisabled: v, nextDisabled: T };
}
function B3(p) {
  var S;
  const E = oS(), { publish: v } = h1(), { animation: T } = wg(), { prevDisabled: H, nextDisabled: q } = DT(), w = ((S = T.navigation) !== null && S !== void 0 ? S : T.swipe) / 2, P = NE(() => v(ad), w), te = NE(() => v(ud), w), ue = Ll((G) => {
    switch (G.key) {
      case JA:
        v(Mm);
        break;
      case KA:
        (E ? q : H) || (E ? te : P)();
        break;
      case kA:
        (E ? H : q) || (E ? P : te)();
        break;
    }
  });
  j.useEffect(() => p(nT, ue), [p, ue]);
}
function BE({ label: p, icon: S, renderIcon: E, action: v, onClick: T, disabled: H, style: q }) {
  return j.createElement(ET, { label: p, icon: S, renderIcon: E, className: Ht(`navigation_${v}`), disabled: H, onClick: T, style: q, ...T3(xg().focus, H) });
}
function q3({ render: { buttonPrev: p, buttonNext: S, iconPrev: E, iconNext: v }, styles: T }) {
  const { prev: H, next: q, subscribeSensors: w } = xg(), { prevDisabled: P, nextDisabled: te } = DT();
  return B3(w), j.createElement(
    j.Fragment,
    null,
    p ? p() : j.createElement(BE, { label: "Previous", action: ad, icon: y3, renderIcon: E, style: T.navigationPrev, disabled: P, onClick: H }),
    S ? S() : j.createElement(BE, { label: "Next", action: ud, icon: v3, renderIcon: v, style: T.navigationNext, disabled: te, onClick: q })
  );
}
const j3 = id(jA, q3), qE = Ht(XA), Y3 = Ht(FE);
function L3(p) {
  return "style" in p;
}
function jE(p, S, E) {
  const v = window.getComputedStyle(p), T = E ? "padding-left" : "padding-right", H = E ? v.paddingLeft : v.paddingRight, q = p.style.getPropertyValue(T);
  return p.style.setProperty(T, `${(d1(H) || 0) + S}px`), () => {
    q ? p.style.setProperty(T, q) : p.style.removeProperty(T);
  };
}
function G3({ noScroll: { disabled: p }, children: S }) {
  const E = oS(), { getOwnerDocument: v, getOwnerWindow: T } = cS();
  return j.useEffect(() => {
    if (p)
      return () => {
      };
    const H = [], q = T(), { body: w, documentElement: P } = v(), te = Math.round(q.innerWidth - P.clientWidth);
    if (te > 0) {
      H.push(jE(w, te, E));
      const ue = w.getElementsByTagName("*");
      for (let G = 0; G < ue.length; G += 1) {
        const X = ue[G];
        L3(X) && q.getComputedStyle(X).getPropertyValue("position") === "fixed" && !X.classList.contains(Y3) && H.push(jE(X, te, E));
      }
    }
    return w.classList.add(qE), () => {
      w.classList.remove(qE), H.forEach((ue) => ue());
    };
  }, [E, p, v, T]), j.createElement(j.Fragment, null, S);
}
const V3 = id(YA, G3);
function YE(p) {
  return Ug(nS, p);
}
function LE(p, S, E) {
  const v = p.getAttribute(S);
  return p.setAttribute(S, E), () => {
    v ? p.setAttribute(S, v) : p.removeAttribute(S);
  };
}
function X3({ children: p, animation: S, styles: E, className: v, on: T, portal: H, close: q, labels: w }) {
  const [P, te] = j.useState(!1), [ue, G] = j.useState(!1), X = j.useRef([]), ae = j.useRef(null), { setTimeout: ne } = p1(), { subscribe: ie } = h1(), se = TT() ? 0 : S.fade;
  j.useEffect(() => (te(!0), () => {
    te(!1), G(!1);
  }), []);
  const qe = Ll(() => {
    X.current.forEach((we) => we()), X.current = [];
  }), xe = Ll(() => {
    var we;
    G(!1), qe(), (we = T.exiting) === null || we === void 0 || we.call(T), ne(() => {
      var ze;
      (ze = T.exited) === null || ze === void 0 || ze.call(T), q();
    }, se);
  });
  j.useEffect(() => ie(Mm, xe), [ie, xe]);
  const Ze = Ll((we) => {
    var ze, Se, Ce;
    u3(we), G(!0), (ze = T.entering) === null || ze === void 0 || ze.call(T);
    const de = (Ce = (Se = we.parentNode) === null || Se === void 0 ? void 0 : Se.children) !== null && Ce !== void 0 ? Ce : [];
    for (let Ne = 0; Ne < de.length; Ne += 1) {
      const Ae = de[Ne];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(Ae.tagName) === -1 && Ae !== we && (X.current.push(LE(Ae, "inert", "")), X.current.push(LE(Ae, "aria-hidden", "true")));
    }
    X.current.push(() => {
      var Ne, Ae;
      (Ae = (Ne = ae.current) === null || Ne === void 0 ? void 0 : Ne.focus) === null || Ae === void 0 || Ae.call(Ne);
    }), ne(() => {
      var Ne;
      (Ne = T.entered) === null || Ne === void 0 || Ne.call(T);
    }, se);
  }), lt = j.useCallback((we) => {
    we ? Ze(we) : qe();
  }, [Ze, qe]);
  return P ? tA(j.createElement(D3, { ref: lt, className: Uo(v, Ht(YE()), Ht(FE), ue && Ht(YE("open"))), "aria-modal": !0, role: "dialog", "aria-label": _m(w, "Lightbox"), style: {
    ...S.fade !== Pb.animation.fade ? { [Oa("fade_animation_duration")]: `${se}ms` } : null,
    ...S.easing.fade !== Pb.animation.easing.fade ? { [Oa("fade_animation_timing_function")]: S.easing.fade } : null,
    ...E.root
  }, onFocus: (we) => {
    ae.current || (ae.current = we.relatedTarget);
  } }, p), H.root || document.body) : null;
}
const Q3 = id(nS, X3);
function Z3({ children: p }) {
  return j.createElement(j.Fragment, null, p);
}
const J3 = id(LA, Z3);
function K3(p) {
  return Ug($E, p);
}
function k3({ toolbar: { buttons: p }, render: { buttonClose: S, iconClose: E }, styles: v }) {
  const { close: T, setToolbarWidth: H } = xg(), { setContainerRef: q, containerRect: w } = zT();
  Hg(() => {
    H(w?.width);
  }, [H, w?.width]);
  const P = () => S ? S() : j.createElement(ET, { key: Mm, label: "Close", icon: g3, renderIcon: E, onClick: T });
  return j.createElement("div", { ref: q, style: v.toolbar, className: Ht(K3()) }, p?.map((te) => te === Mm ? P() : te));
}
const $3 = id($E, k3);
function OT(p, S) {
  var E;
  return j.createElement(p.module.component, { key: p.module.name, ...S }, (E = p.children) === null || E === void 0 ? void 0 : E.map((v) => OT(v, S)));
}
function W3(p, S = {}) {
  const { easing: E, ...v } = p, { easing: T, ...H } = S;
  return {
    easing: { ...E, ...T },
    ...v,
    ...H
  };
}
function F3({ carousel: p, animation: S, render: E, toolbar: v, controller: T, noScroll: H, on: q, plugins: w, slides: P, index: te, ...ue }) {
  const { animation: G, carousel: X, render: ae, toolbar: ne, controller: ie, noScroll: pe, on: se, slides: qe, index: xe, plugins: Ze, ...lt } = Pb, { config: we, augmentation: ze } = i3([
    an(Q3, [
      an(V3, [
        an(U3, [
          an(x3),
          an($3),
          an(j3)
        ])
      ])
    ])
  ], w || Ze), Se = ze({
    animation: W3(G, S),
    carousel: { ...X, ...p },
    render: { ...ae, ...E },
    toolbar: { ...ne, ...v },
    controller: { ...ie, ...T },
    noScroll: { ...pe, ...H },
    on: { ...se, ...q },
    ...lt,
    ...ue
  });
  return Se.open ? j.createElement(
    s3,
    { ...Se },
    j.createElement(
      h3,
      { slides: P || qe, index: d1(te || xe) },
      j.createElement(
        m3,
        null,
        j.createElement(
          f3,
          null,
          j.createElement(c3, null, OT(an(J3, we), Se))
        )
      )
    )
  ) : null;
}
const $b = [
  {
    src: "/src/img/1.jpg",
    width: 3988,
    height: 5728,
    title: "Herbst II",
    description: " Verbreitungsgebiet Südwest-Türkei und auf Rhodos. In Parks in der Türkei und auf Rhodos ist er durch das Fällen von Bäumen für Straßen, Staudämme und die Landwirtshaft gefährdet. Touristen und Bauindustrie sind seine Feinde.",
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
    width: 7016,
    height: 9921,
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
    width: 2480,
    height: 3508,
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
    width: 2480,
    height: 3508,
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
    width: 2373,
    height: 2925,
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
    width: 2048,
    height: 1536,
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
    width: 4320,
    height: 5400,
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
    width: 3345,
    height: 4181,
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
    width: 3386,
    height: 2709,
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
    width: 3620,
    height: 4802,
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
    width: 6596,
    height: 6660,
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
    width: 2600,
    height: 3478,
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
    width: 9920,
    height: 7014,
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
    width: 3400,
    height: 3425,
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
    width: 2484,
    height: 3155,
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
    width: 3345,
    height: 4943,
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
    width: 9284,
    height: 7020,
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
    width: 3850,
    height: 4695,
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
    width: 3508,
    height: 4963,
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
    width: 2308,
    height: 3003,
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
    src: "/src/img/33.jpg",
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
    width: 2387,
    height: 3437,
    title: "Die Früchte des Olivenbaums",
    description: "Das Olivenbaumsterben wurde in Europa zuerst in Süditalien festgestellt. Ursache - das Bakterium Xylella fastidiosa. Abgesehen davon wurden die Olivenhaine durch die Waldbrände in Südeuropa stark in Mitleidenschaft gezogen.  Dies lässt sich auch an den höheren Olivenölpreisen den Supermärkten erkennen.",
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
    width: 2480,
    height: 3508,
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
function I3() {
  const [p, S] = GE(-1);
  bE(() => {
    const H = new URLSearchParams(window.location.search).get("image");
    if (H) {
      const q = parseInt(H, 10);
      !isNaN(q) && q >= 0 && q < $b.length && S(q);
    }
  }, []), bE(() => {
    if (p >= 0) {
      const T = new URLSearchParams(window.location.search);
      T.set("image", p.toString()), window.history.replaceState(null, "", `?${T.toString()}`);
    } else
      window.history.replaceState(null, "", window.location.pathname);
  }, [p]);
  const E = JSON.parse(
    JSON.stringify($b)
  ), v = JSON.parse(
    JSON.stringify($b)
  );
  for (const T of E)
    T.src = T.lowSrc, T.width = T.lowWidth, T.height = T.lowHeight, T.alt = T.title;
  return /* @__PURE__ */ St.jsx("div", { className: "app-container", children: /* @__PURE__ */ St.jsxs("div", { className: "gallery-container", children: [
    /* @__PURE__ */ St.jsx(
      qA,
      {
        photos: E,
        onClick: ({ index: T }) => S(T),
        spacing: 8,
        padding: 0,
        targetRowHeight: 400,
        render: {
          extras: (T, { photo: H }) => /* @__PURE__ */ St.jsxs("div", { className: "gallery-image-title", children: [
            H.author,
            " - ",
            H.title
          ] })
        }
      }
    ),
    /* @__PURE__ */ St.jsx(
      F3,
      {
        slides: v,
        open: p >= 0,
        index: p,
        close: () => S(-1),
        on: {
          view: ({ index: T }) => {
            S(T);
          }
        },
        render: {
          slide: ({ slide: T }) => /* @__PURE__ */ St.jsxs("div", { className: "b-content", children: [
            /* @__PURE__ */ St.jsx("div", { className: "b-content__pic", children: /* @__PURE__ */ St.jsx(
              "img",
              {
                src: T.src,
                alt: v[p]?.title ?? ""
              }
            ) }),
            /* @__PURE__ */ St.jsxs("div", { className: "b-content__info", children: [
              /* @__PURE__ */ St.jsx("div", { className: "b-content__author", children: v[p]?.author }),
              /* @__PURE__ */ St.jsxs("div", { children: [
                v[p]?.contactEmail && /* @__PURE__ */ St.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `mailto:${v[p]?.contactEmail}`,
                    children: v[p]?.contactEmail
                  }
                ),
                v[p]?.contactPhone && /* @__PURE__ */ St.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: `tel:${v[p]?.contactPhone}`,
                    children: v[p]?.contactPhone
                  }
                ),
                v[p]?.contactSocial && /* @__PURE__ */ St.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: /^https?:\/\//i.test(
                      v[p]?.contactSocial || ""
                    ) ? v[p]?.contactSocial : (v[p]?.contactSocial || "").startsWith("@") ? `https://instagram.com/${(v[p]?.contactSocial || "").slice(1)}` : `https://instagram.com/${v[p]?.contactSocial}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: v[p]?.contactSocial
                  }
                ),
                v[p]?.contactWebsite && /* @__PURE__ */ St.jsx(
                  "a",
                  {
                    className: "b-content__meta",
                    href: /^https?:\/\//i.test(
                      v[p]?.contactWebsite || ""
                    ) ? v[p]?.contactWebsite : `https://${v[p]?.contactWebsite}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: v[p]?.contactWebsite
                  }
                ),
                v[p]?.contactNote && /* @__PURE__ */ St.jsx("span", { className: "b-content__meta", children: v[p]?.contactNote })
              ] }),
              /* @__PURE__ */ St.jsx("div", { className: "b-content__title", children: v[p]?.title }),
              /* @__PURE__ */ St.jsxs("div", { children: [
                /* @__PURE__ */ St.jsx("span", { className: "b-content__meta", children: v[p]?.artworkSize }),
                /* @__PURE__ */ St.jsx("span", { className: "b-content__meta", children: v[p]?.artworkYear }),
                /* @__PURE__ */ St.jsx("span", { className: "b-content__meta", children: v[p]?.artworkTechnique })
              ] }),
              /* @__PURE__ */ St.jsxs("div", { children: [
                /* @__PURE__ */ St.jsx("span", { className: "b-content__cn", children: v[p]?.plantCommonName }),
                " ",
                /* @__PURE__ */ St.jsxs("span", { className: "b-content__bn", children: [
                  "(",
                  v[p]?.plantBotanicalName,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ St.jsx("div", { className: "b-content__desc", children: v[p]?.description })
            ] })
          ] })
        }
      }
    )
  ] }) });
}
function tD(p = "root") {
  const S = document.getElementById(p);
  if (!S) {
    console.error(`Element with id "${p}" not found`);
    return;
  }
  sA.createRoot(S).render(
    /* @__PURE__ */ St.jsx(eA, { children: /* @__PURE__ */ St.jsx(I3, {}) })
  );
}
export {
  tD as initVBKDGallery
};

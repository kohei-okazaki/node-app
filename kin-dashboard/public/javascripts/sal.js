! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() :
    "function" == typeof define && define.amd ? define([], t) : "object" ==
    typeof exports ? exports.sal = t() : e.sal = t()
}(this, function() {
  return function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, t.n = function(e) {
      var n = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "dist/", t(t.s = 0)
  }([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] =
          n[r])
      }
      return e
    };
    n(1);
    var o = {
        rootMargin: "0% 50%",
        threshold: .5,
        animateClassName: "sal-animate",
        disabledClassName: "sal-disabled",
        selector: "[data-sal]",
        once: !0,
        disabled: !1
      },
      s = [],
      a = null,
      i = function(e) {
        return e.classList.add(o.animateClassName)
      },
      l = function(e) {
        return e.classList.remove(o.animateClassName)
      },
      c = function(e) {
        return e.classList.contains(o.animateClassName)
      },
      u = function() {
        document.body.classList.remove(o.disabledClassName)
      },
      d = function() {
        document.body.classList.add(o.disabledClassName)
      },
      f = function() {
        return o.disabled || "function" == typeof o.disabled && o.disabled()
      },
      b = function(e, t) {
        e.forEach(function(e) {
          e.intersectionRatio >= o.threshold ? (i(e.target), o.once && t.unobserve(
            e.target)) : o.once || l(e.target)
        })
      },
      m = function() {
        d(), a.disconnect(), a = null
      },
      p = function() {
        u(), a = new IntersectionObserver(b, {
          rootMargin: o.rootMargin,
          threshold: o.threshold
        }), s = [].filter.call(document.querySelectorAll(o.selector), function(
          e) {
          return !c(e, o.animateClassName)
        }), s.forEach(function(e) {
          return a.observe(e)
        })
      },
      h = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] :
          o;
        if (e !== o && (o = r({}, o, e)), !window.IntersectionObserver) throw d(),
          Error(
            "\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    "
          );
        return f() ? d() : p(), {
          elements: s,
          disable: m,
          enable: p
        }
      };
    t.default = h
  }, function(e, t) {}]).default
});

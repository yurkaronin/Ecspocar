"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var timersList = document.querySelectorAll('[data-time]');

var _iterator = _createForOfIteratorHelper(timersList),
    _step;

try {
  var _loop = function _loop() {
    var timer = _step.value;
    var count = parseInt(timer.getAttribute('data-time'), 10);
    var minutes = Math.trunc(count / 60);
    var seconds = count % 60;
    var minutesPresentation = "";
    var secondsPresentation = "";
    var timerCount = void 0;

    function runTimer() {
      seconds--;

      if (seconds < 0) {
        seconds = 59;

        if (minutes > 0) {
          minutes--;
        } else {
          seconds = 0;
        }
      }

      if (minutes < 10) {
        minutesPresentation = "0" + minutes;
      } else {
        minutesPresentation = minutes;
      }

      if (seconds < 10) {
        secondsPresentation = "0" + seconds;
      } else {
        secondsPresentation = seconds;
      }

      timer.innerHTML = minutesPresentation + ":" + secondsPresentation;

      if (minutes == 0 && seconds == 0) {
        stopTimer(timerCount);
      }
    }

    function stopTimer(param) {
      clearInterval(param);
    }

    timerCount = setInterval(runTimer, 1000);
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
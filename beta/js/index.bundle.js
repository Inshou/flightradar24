/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/fr24.js":
/*!************************!*\
  !*** ./src/js/fr24.js ***!
  \************************/
/*! exports provided: fr24informer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fr24informer", function() { return fr24informer; });
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.json */ "./src/js/settings.json");
var _settings_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./settings.json */ "./src/js/settings.json", 1);
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageBox */ "./src/js/messageBox.js");
/* harmony import */ var _measureTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measureTransform */ "./src/js/measureTransform.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var daemon;
/* Класс контроллера */

var fr24daemon =
/*#__PURE__*/
function () {
  function fr24daemon(serv) {
    _classCallCheck(this, fr24daemon);

    this.serv = serv;
    this.msgBox = new _messageBox__WEBPACK_IMPORTED_MODULE_1__["default"](serv.options.messageBoxSelector);

    this.loaderCallback = function () {
      window.fr24daemon.serv.checkData(this);
    };
  }

  _createClass(fr24daemon, [{
    key: "updateTrigger",
    value: function updateTrigger() {
      setTimeout(this.update, daemon.serv.options.timeout);
    }
  }, {
    key: "update",
    value: function update() {
      daemon.status = "update";
      window.fr24daemon.serv.init();
    }
    /* Обработка ошибок */

  }, {
    key: "errors",
    value: function errors(errorCode) {
      var msg = daemon.errors[errorCode][daemon.options.lang];

      if (daemon.errors[errorCode]['type'] === 'critical') {
        msg += ' ' + daemon.errors['critical'];
      }

      if (daemon.errors[errorCode]['type'] === 'critical') {
        daemon.status = 'error';
        throw Error(msg);
      } else {
        daemon.msgBox.setMsg(msg);
      }
    }
  }]);

  return fr24daemon;
}();
/* Класс получения и обработки данных */


var fr24informer =
/*#__PURE__*/
function () {
  function fr24informer(options) {
    _classCallCheck(this, fr24informer);

    this.options = Object.assign({}, _settings_json__WEBPACK_IMPORTED_MODULE_0__.defaultOptions, options);
    daemon = window.fr24daemon = new fr24daemon(this);
    this.init();
  }
  /* Подготовка запроса */


  _createClass(fr24informer, [{
    key: "init",
    value: function init() {
      daemon.status = 'ready';
      if (!this.response(daemon.loaderCallback)) daemon.errors('callbackFailed');
    }
  }, {
    key: "request",
    value: function request() {
      var locationCoords, bounds, request;
      this.options.locationAccuracy = parseFloat(this.options.locationAccuracy);
      if (this.options.locationAccuracy < 1) this.options.locationAccuracy = 1;
      locationCoords = _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[this.options['point']];
      locationCoords.lat = parseFloat(locationCoords['lat']);
      locationCoords.lon = parseFloat(locationCoords['lon']);
      if (!locationCoords.lat || !locationCoords.lon) daemon.errors('locationError');
      bounds = locationCoords.lat + this.options.locationAccuracy + ',' + (locationCoords.lat - this.options.locationAccuracy) + ',' + (locationCoords.lon - this.options.locationAccuracy) + ',' + (locationCoords.lon + this.options.locationAccuracy);
      if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceUrl) daemon.errors('noServiceUrl');
      if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceInput) daemon.errors('noServiceInput');
      if (daemon.status === 'error') return false;
      request = _settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceUrl + '?' + _settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceInput + '=' + bounds;
      return request;
    }
    /* Получение информации */

  }, {
    key: "response",
    value: function response(onReady) {
      var request = this.request();

      if (request && daemon.status === 'ready') {
        return fetch(request).then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            return 'connectionError';
          }
        }).then(function (data) {
          onReady.call(data);
          return true;
        });
      }

      return false;
    }
    /* Обработка данных */

  }, {
    key: "checkData",
    value: function checkData(data) {
      if (typeof data === 'string') daemon.error(data);
      if (_typeof(data) === 'object') this.prepareData(data);
    }
  }, {
    key: "prepareData",
    value: function prepareData(data) {
      var _this = this;

      var cleanTable = [],
          i = 0;
      Object.keys(data).forEach(function (k) {
        if (_typeof(data[k]) !== 'object') delete data[k];else {
          var row = Object.values(data[k]);
          cleanTable[i] = [];
          _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields.forEach(function (field) {
            if (field.column > 0) {
              if (field.func & _measureTransform__WEBPACK_IMPORTED_MODULE_2__["measureTransform"][field.func]) {
                cleanTable[i].push(_measureTransform__WEBPACK_IMPORTED_MODULE_2__["measureTransform"][field.func](row[field.column]));
              } else {
                cleanTable[i].push(row[field.column]);
              }
            } else if (field.func === 'getDistanceLatLonInKm') {
              var dist = _measureTransform__WEBPACK_IMPORTED_MODULE_2__["measureTransform"][field.func](cleanTable[i][0], cleanTable[i][1], _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[_this.options.point]['lat'], _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[_this.options.point]['lon']);
              cleanTable[i].push(dist);
            }
          });
          i++;
        }
      });
      /* Сортировка */

      cleanTable.sort(Object(_measureTransform__WEBPACK_IMPORTED_MODULE_2__["dynamicSort"])((this.options.sortAsc === "ASC" ? "" : "-") + this.options.sortBy['fieldNum']));
      if (!daemon.renderer) daemon.renderer = new fr24renderer(cleanTable);else daemon.renderer.mainRender(cleanTable);
    }
  }]);

  return fr24informer;
}();
/* Класс рендеринга информации */

var fr24renderer =
/*#__PURE__*/
function () {
  function fr24renderer(data) {
    _classCallCheck(this, fr24renderer);

    this.data = data;
    this.mainRender(data);
  }
  /* Основной блок */


  _createClass(fr24renderer, [{
    key: "mainRender",
    value: function mainRender(data) {
      this.data = data;

      if (!daemon.view) {
        daemon.view = {};
        this.mainCreate();
        this.headerCreate();
        this.contentCreate();
      }

      this.dataUpdate();
      daemon.status = "finish";
      daemon.updateTrigger();
    }
    /* Создание основного блока */

  }, {
    key: "mainCreate",
    value: function mainCreate() {
      var target = document.querySelector(daemon.serv.options.mainSelector);
      if (!target) daemon.error('renderMainError');
      target.classList.add(daemon.serv.options.contentSelectors.containerClass);
      daemon.view.main = target;
    }
    /* Создание шапки блока */

  }, {
    key: "headerCreate",
    value: function headerCreate() {
      var header;
      header = document.createElement('div');
      header.classList.add(daemon.serv.options.contentSelectors.rowClass, daemon.serv.options.contentSelectors.headerClass);
      daemon.view.header = header;
      daemon.view.main.appendChild(header);
      _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields.forEach(function (val, key) {
        if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key]['hide']) {
          var title,
              el = document.createElement('div');
          header.append(el);
          el.classList.add(daemon.serv.options.contentSelectors.itemClass);
          el.dataset.column = key;

          if (_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['title']) {
            title = _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['title'];
          } else {
            title = _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key]['key'];
          }

          el.innerHTML = title + " " + (_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['unit'] || '');
        }
      });
    }
    /* Создание элементов контента */

  }, {
    key: "contentCreate",
    value: function contentCreate() {
      var content;
      content = document.createElement('div');
      content.classList.add(daemon.serv.options.contentSelectors.contentClass);
      daemon.view.content = content;
      daemon.view.main.appendChild(content);
    }
    /* Обновление контента */

  }, {
    key: "dataUpdate",
    value: function dataUpdate() {
      var _this2 = this;

      var data = this.data,
          content = daemon.view.content,
          rows = content.childNodes;
      data.forEach(function (val, key) {
        var row;

        if (!rows[key]) {
          row = _this2.defaultElement(content, daemon.serv.options.contentSelectors.rowClass);
        } else {
          row = rows[key];
        }

        _this2.rowUpdate(row, data[key]);
      });
    }
    /* Обновление строки контента */

  }, {
    key: "rowUpdate",
    value: function rowUpdate(row, values) {
      var _this3 = this;

      var items = row.childNodes;
      values.forEach(function (val, key) {
        if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key].hide) {
          var item;

          if (!items[key]) {
            item = _this3.defaultElement(row, daemon.serv.options.contentSelectors.itemClass);
          } else {
            item = items[key];
          }

          item.innerText = val;
        }
      });
    }
    /* Создание стандартного элемента */

  }, {
    key: "defaultElement",
    value: function defaultElement(target) {
      var el = document.createElement('div');
      target.appendChild(el);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      args.forEach(function (arg) {
        el.classList.add(arg);
      });
      return el;
    }
  }]);

  return fr24renderer;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fr24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fr24 */ "./src/js/fr24.js");

document.addEventListener("DOMContentLoaded", new _fr24__WEBPACK_IMPORTED_MODULE_0__["fr24informer"]());

/***/ }),

/***/ "./src/js/measureTransform.js":
/*!************************************!*\
  !*** ./src/js/measureTransform.js ***!
  \************************************/
/*! exports provided: measureTransform, dynamicSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureTransform", function() { return measureTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicSort", function() { return dynamicSort; });
/* Вспомогательные функции конвертации ед. измерения */
var measureTransform = {
  "getDistanceLatLonInKm": function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km

    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var d = R * c;
    return parseInt(d * 1000);
  },
  "deg2rad": function deg2rad(deg) {
    return deg * (Math.PI / 180);
  },
  "miles2km": function miles2km(mil) {
    return mil * 1.852;
  },
  "feet2meters": function feet2meters(feet) {
    return feet * 0.3048;
  }
};
/* Сортировка */

var dynamicSort = function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

/***/ }),

/***/ "./src/js/messageBox.js":
/*!******************************!*\
  !*** ./src/js/messageBox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Плагин для отображения сообщений */
var HIDE_TIMEOUT = 5000;

var _default =
/*#__PURE__*/
function () {
  function _default(selector) {
    _classCallCheck(this, _default);

    this.selector = selector;
    this.message = '';
    this.init();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.box = document.querySelector(this.selector) || null;
      this.hide();
    }
  }, {
    key: "setMsg",
    value: function setMsg(message) {
      if (this.box) {
        this.box.innerText = message;
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      var self = this;

      if (this.box) {
        this.box.style.display = '';
      }

      setTimeout(function () {
        _this.hide();
      }, HIDE_TIMEOUT);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.box) {
        this.box.style.display = 'none';
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.box) {
        this.box.innerText = '';
      }
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/js/settings.json":
/*!******************************!*\
  !*** ./src/js/settings.json ***!
  \******************************/
/*! exports provided: defaultOptions, dataFields, serviceUrl, serviceInput, locations, errors, default */
/***/ (function(module) {

module.exports = {"defaultOptions":{"lang":"ru","point":"DME","timeout":5000,"sortBy":{"fieldName":"Distance","fieldNum":8},"sortAsc":"ASC","locationAccuracy":2,"messageBoxSelector":".fr24__messagebox","mainSelector":".fr24-app","contentSelectors":{"containerClass":"fr24-table","headerClass":"fr24-table__header","contentClass":"fr24-table__content","rowClass":"fr24-table__row","itemClass":"fr24-table__item"}},"dataFields":[{"column":1,"key":"Longitude","en":{"unit":"&deg;"},"ru":{"title":"Широта","unit":"&deg;"}},{"column":2,"key":"Latitude","en":{"unit":"&deg;"},"ru":{"title":"Долгота","unit":"&deg;"}},{"column":5,"key":"Speed","func":"miles2km","en":{"unit":"km/h"},"ru":{"title":"Скорость","unit":"км/ч"}},{"column":3,"key":"Course","en":{"unit":"&deg;"},"ru":{"title":"Курс","unit":"&deg;"}},{"column":4,"key":"Altitude","func":"feet2meters","en":{"unit":"m."},"ru":{"title":"Высота полета","unit":"м."}},{"column":11,"key":"Departure","en":{"unit":"IATA"},"ru":{"title":"Вылет","unit":"IATA"}},{"column":12,"key":"Arrival","en":{"unit":"IATA"},"ru":{"title":"Прилет","unit":"IATA"}},{"column":13,"key":"Flight number","en":{"unit":""},"ru":{"title":"Номер рейса","unit":""}},{"column":"","key":"Distance","func":"getDistanceLatLonInKm","hide":true,"en":{"unit":"m."},"ru":{"title":"Расстояние","unit":"м."}}],"serviceUrl":"https://data-live.flightradar24.com/zones/fcgi/feed.js","serviceInput":"bounds","locations":{"DME":{"lat":55.410307,"lon":37.902451}},"errors":{"critical":{"ru":"Выполнение приложения будет приостановлено.","en":"Application will be stopped."},"locationError":{"ru":"Не верные координаты локации, выберите другую точку.","en":"Wrong location coordinates, select another one."},"noServiceUrl":{"type":"critical","ru":"Не верный адрес сервиса.","en":"Wrong service url."},"noServiceInput":{"type":"critical","ru":"Не верный параметр сервиса.","en":"Wrong service input parameter."},"connectionError":{"ru":"Ошибка связи с сервером","en":"Server connection error"},"callbackFailed":{"ru":"Не удалось обновить данные","en":"Callback failed"}}};

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
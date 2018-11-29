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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fr24informer\", function() { return fr24informer; });\n/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.json */ \"./src/js/settings.json\");\nvar _settings_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./settings.json */ \"./src/js/settings.json\", 1);\n/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageBox */ \"./src/js/messageBox.js\");\n/* harmony import */ var _measureTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measureTransform */ \"./src/js/measureTransform.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar daemon;\n/* Класс контроллера */\n\nvar fr24daemon =\n/*#__PURE__*/\nfunction () {\n  function fr24daemon(serv) {\n    _classCallCheck(this, fr24daemon);\n\n    this.serv = serv;\n    this.msgBox = new _messageBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"](serv.options.messageBoxSelector);\n\n    this.loaderCallback = function () {\n      window.fr24daemon.serv.checkData(this);\n    };\n  }\n\n  _createClass(fr24daemon, [{\n    key: \"updateTrigger\",\n    value: function updateTrigger() {\n      setTimeout(this.update, daemon.serv.options.timeout);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      daemon.status = \"update\";\n      window.fr24daemon.serv.init();\n    }\n    /* Обработка ошибок */\n\n  }, {\n    key: \"errors\",\n    value: function errors(errorCode) {\n      var msg = daemon.errors[errorCode][daemon.options.lang];\n\n      if (daemon.errors[errorCode]['type'] === 'critical') {\n        msg += ' ' + daemon.errors['critical'];\n      }\n\n      if (daemon.errors[errorCode]['type'] === 'critical') {\n        daemon.status = 'error';\n        throw Error(msg);\n      } else {\n        daemon.msgBox.setMsg(msg);\n      }\n    }\n  }]);\n\n  return fr24daemon;\n}();\n/* Класс получения и обработки данных */\n\n\nvar fr24informer =\n/*#__PURE__*/\nfunction () {\n  function fr24informer(options) {\n    _classCallCheck(this, fr24informer);\n\n    this.options = Object.assign({}, _settings_json__WEBPACK_IMPORTED_MODULE_0__.defaultOptions, options);\n    daemon = window.fr24daemon = new fr24daemon(this);\n    this.init();\n  }\n  /* Подготовка запроса */\n\n\n  _createClass(fr24informer, [{\n    key: \"init\",\n    value: function init() {\n      daemon.status = 'ready';\n      if (!this.response(daemon.loaderCallback)) daemon.errors('callbackFailed');\n    }\n  }, {\n    key: \"request\",\n    value: function request() {\n      var locationCoords, bounds, request;\n      this.options.locationAccuracy = parseFloat(this.options.locationAccuracy);\n      if (this.options.locationAccuracy < 1) this.options.locationAccuracy = 1;\n      locationCoords = _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[this.options['point']];\n      locationCoords.lat = parseFloat(locationCoords['lat']);\n      locationCoords.lon = parseFloat(locationCoords['lon']);\n      if (!locationCoords.lat || !locationCoords.lon) daemon.errors('locationError');\n      bounds = locationCoords.lat + this.options.locationAccuracy + ',' + (locationCoords.lat - this.options.locationAccuracy) + ',' + (locationCoords.lon - this.options.locationAccuracy) + ',' + (locationCoords.lon + this.options.locationAccuracy);\n      if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceUrl) daemon.errors('noServiceUrl');\n      if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceInput) daemon.errors('noServiceInput');\n      if (daemon.status === 'error') return false;\n      request = _settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceUrl + '?' + _settings_json__WEBPACK_IMPORTED_MODULE_0__.serviceInput + '=' + bounds;\n      return request;\n    }\n    /* Получение информации */\n\n  }, {\n    key: \"response\",\n    value: function response(onReady) {\n      var request = this.request();\n\n      if (request && daemon.status === 'ready') {\n        return fetch(request).then(function (response) {\n          if (response.ok) {\n            return response.json();\n          } else {\n            return 'connectionError';\n          }\n        }).then(function (data) {\n          onReady.call(data);\n          return true;\n        });\n      }\n\n      return false;\n    }\n    /* Обработка данных */\n\n  }, {\n    key: \"checkData\",\n    value: function checkData(data) {\n      if (typeof data === 'string') daemon.error(data);\n      if (_typeof(data) === 'object') this.prepareData(data);\n    }\n  }, {\n    key: \"prepareData\",\n    value: function prepareData(data) {\n      var _this = this;\n\n      var cleanTable = [],\n          i = 0;\n      Object.keys(data).forEach(function (k) {\n        if (_typeof(data[k]) !== 'object') delete data[k];else {\n          var row = Object.values(data[k]);\n          cleanTable[i] = [];\n          _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields.forEach(function (field) {\n            if (field.column > 0) {\n              if (field.func & _measureTransform__WEBPACK_IMPORTED_MODULE_2__[\"measureTransform\"][field.func]) {\n                cleanTable[i].push(_measureTransform__WEBPACK_IMPORTED_MODULE_2__[\"measureTransform\"][field.func](row[field.column]));\n              } else {\n                cleanTable[i].push(row[field.column]);\n              }\n            } else if (field.func === 'getDistanceLatLonInKm') {\n              var dist = _measureTransform__WEBPACK_IMPORTED_MODULE_2__[\"measureTransform\"][field.func](cleanTable[i][0], cleanTable[i][1], _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[_this.options.point]['lat'], _settings_json__WEBPACK_IMPORTED_MODULE_0__.locations[_this.options.point]['lon']);\n              cleanTable[i].push(dist);\n            }\n          });\n          i++;\n        }\n      });\n      /* Сортировка */\n\n      cleanTable.sort(Object(_measureTransform__WEBPACK_IMPORTED_MODULE_2__[\"dynamicSort\"])((this.options.sortAsc === \"ASC\" ? \"\" : \"-\") + this.options.sortBy['fieldNum']));\n      if (!daemon.renderer) daemon.renderer = new fr24renderer(cleanTable);else daemon.renderer.mainRender(cleanTable);\n    }\n  }]);\n\n  return fr24informer;\n}();\n/* Класс рендеринга информации */\n\nvar fr24renderer =\n/*#__PURE__*/\nfunction () {\n  function fr24renderer(data) {\n    _classCallCheck(this, fr24renderer);\n\n    this.data = data;\n    this.mainRender(data);\n  }\n  /* Основной блок */\n\n\n  _createClass(fr24renderer, [{\n    key: \"mainRender\",\n    value: function mainRender(data) {\n      this.data = data;\n\n      if (!daemon.view) {\n        daemon.view = {};\n        this.mainCreate();\n        this.headerCreate();\n        this.contentCreate();\n      }\n\n      this.dataUpdate();\n      daemon.status = \"finish\";\n      daemon.updateTrigger();\n    }\n    /* Создание основного блока */\n\n  }, {\n    key: \"mainCreate\",\n    value: function mainCreate() {\n      var target = document.querySelector(daemon.serv.options.mainSelector);\n      if (!target) daemon.error('renderMainError');\n      target.classList.add(daemon.serv.options.contentSelectors.containerClass);\n      daemon.view.main = target;\n    }\n    /* Создание шапки блока */\n\n  }, {\n    key: \"headerCreate\",\n    value: function headerCreate() {\n      var header;\n      header = document.createElement('div');\n      header.classList.add(daemon.serv.options.contentSelectors.rowClass, daemon.serv.options.contentSelectors.headerClass);\n      daemon.view.header = header;\n      daemon.view.main.appendChild(header);\n      _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields.forEach(function (val, key) {\n        if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key]['hide']) {\n          var title,\n              el = document.createElement('div');\n          header.append(el);\n          el.classList.add(daemon.serv.options.contentSelectors.itemClass);\n          el.dataset.column = key;\n\n          if (_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['title']) {\n            title = _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['title'];\n          } else {\n            title = _settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key]['key'];\n          }\n\n          el.innerHTML = title + \" \" + (_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key][daemon.serv.options.lang]['unit'] || '');\n        }\n      });\n    }\n    /* Создание элементов контента */\n\n  }, {\n    key: \"contentCreate\",\n    value: function contentCreate() {\n      var content;\n      content = document.createElement('div');\n      content.classList.add(daemon.serv.options.contentSelectors.contentClass);\n      daemon.view.content = content;\n      daemon.view.main.appendChild(content);\n    }\n    /* Обновление контента */\n\n  }, {\n    key: \"dataUpdate\",\n    value: function dataUpdate() {\n      var _this2 = this;\n\n      var data = this.data,\n          content = daemon.view.content,\n          rows = content.childNodes;\n      data.forEach(function (val, key) {\n        var row;\n\n        if (!rows[key]) {\n          row = _this2.defaultElement(content, daemon.serv.options.contentSelectors.rowClass);\n        } else {\n          row = rows[key];\n        }\n\n        _this2.rowUpdate(row, data[key]);\n      });\n    }\n    /* Обновление строки контента */\n\n  }, {\n    key: \"rowUpdate\",\n    value: function rowUpdate(row, values) {\n      var _this3 = this;\n\n      var items = row.childNodes;\n      values.forEach(function (val, key) {\n        if (!_settings_json__WEBPACK_IMPORTED_MODULE_0__.dataFields[key].hide) {\n          var item;\n\n          if (!items[key]) {\n            item = _this3.defaultElement(row, daemon.serv.options.contentSelectors.itemClass);\n          } else {\n            item = items[key];\n          }\n\n          item.innerText = val;\n        }\n      });\n    }\n    /* Создание стандартного элемента */\n\n  }, {\n    key: \"defaultElement\",\n    value: function defaultElement(target) {\n      var el = document.createElement('div');\n      target.appendChild(el);\n\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      args.forEach(function (arg) {\n        el.classList.add(arg);\n      });\n      return el;\n    }\n  }]);\n\n  return fr24renderer;\n}();\n\n//# sourceURL=webpack:///./src/js/fr24.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fr24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fr24 */ \"./src/js/fr24.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", new _fr24__WEBPACK_IMPORTED_MODULE_0__[\"fr24informer\"]());\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/measureTransform.js":
/*!************************************!*\
  !*** ./src/js/measureTransform.js ***!
  \************************************/
/*! exports provided: measureTransform, dynamicSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"measureTransform\", function() { return measureTransform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dynamicSort\", function() { return dynamicSort; });\n/* Вспомогательные функции конвертации ед. измерения */\nvar measureTransform = {\n  \"getDistanceLatLonInKm\": function distance(lat1, lon1, lat2, lon2) {\n    var R = 6371; // km\n\n    var dLat = (lat2 - lat1) * Math.PI / 180;\n    var dLon = (lon2 - lon1) * Math.PI / 180;\n    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);\n    var c = 2 * Math.asin(Math.sqrt(a));\n    var d = R * c;\n    return parseInt(d * 1000);\n  },\n  \"deg2rad\": function deg2rad(deg) {\n    return deg * (Math.PI / 180);\n  },\n  \"miles2km\": function miles2km(mil) {\n    return mil * 1.852;\n  },\n  \"feet2meters\": function feet2meters(feet) {\n    return feet * 0.3048;\n  }\n};\n/* Сортировка */\n\nvar dynamicSort = function dynamicSort(property) {\n  var sortOrder = 1;\n\n  if (property[0] === \"-\") {\n    sortOrder = -1;\n    property = property.substr(1);\n  }\n\n  return function (a, b) {\n    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;\n    return result * sortOrder;\n  };\n};\n\n//# sourceURL=webpack:///./src/js/measureTransform.js?");

/***/ }),

/***/ "./src/js/messageBox.js":
/*!******************************!*\
  !*** ./src/js/messageBox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* Плагин для отображения сообщений */\nvar HIDE_TIMEOUT = 5000;\n\nvar _default =\n/*#__PURE__*/\nfunction () {\n  function _default(selector) {\n    _classCallCheck(this, _default);\n\n    this.selector = selector;\n    this.message = '';\n    this.init();\n  }\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      this.box = document.querySelector(this.selector) || null;\n      this.hide();\n    }\n  }, {\n    key: \"setMsg\",\n    value: function setMsg(message) {\n      if (this.box) {\n        this.box.innerText = message;\n        this.show();\n      }\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      var _this = this;\n\n      var self = this;\n\n      if (this.box) {\n        this.box.style.display = '';\n      }\n\n      setTimeout(function () {\n        _this.hide();\n      }, HIDE_TIMEOUT);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      if (this.box) {\n        this.box.style.display = 'none';\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      if (this.box) {\n        this.box.innerText = '';\n      }\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/messageBox.js?");

/***/ }),

/***/ "./src/js/settings.json":
/*!******************************!*\
  !*** ./src/js/settings.json ***!
  \******************************/
/*! exports provided: defaultOptions, dataFields, serviceUrl, serviceInput, locations, errors, default */
/***/ (function(module) {

eval("module.exports = {\"defaultOptions\":{\"lang\":\"ru\",\"point\":\"DME\",\"timeout\":5000,\"sortBy\":{\"fieldName\":\"Distance\",\"fieldNum\":8},\"sortAsc\":\"ASC\",\"locationAccuracy\":2,\"messageBoxSelector\":\".fr24__messagebox\",\"mainSelector\":\".fr24-app\",\"contentSelectors\":{\"containerClass\":\"fr24-table\",\"headerClass\":\"fr24-table__header\",\"contentClass\":\"fr24-table__content\",\"rowClass\":\"fr24-table__row\",\"itemClass\":\"fr24-table__item\"}},\"dataFields\":[{\"column\":1,\"key\":\"Longitude\",\"en\":{\"unit\":\"&deg;\"},\"ru\":{\"title\":\"Широта\",\"unit\":\"&deg;\"}},{\"column\":2,\"key\":\"Latitude\",\"en\":{\"unit\":\"&deg;\"},\"ru\":{\"title\":\"Долгота\",\"unit\":\"&deg;\"}},{\"column\":5,\"key\":\"Speed\",\"func\":\"miles2km\",\"en\":{\"unit\":\"km/h\"},\"ru\":{\"title\":\"Скорость\",\"unit\":\"км/ч\"}},{\"column\":3,\"key\":\"Course\",\"en\":{\"unit\":\"&deg;\"},\"ru\":{\"title\":\"Курс\",\"unit\":\"&deg;\"}},{\"column\":4,\"key\":\"Altitude\",\"func\":\"feet2meters\",\"en\":{\"unit\":\"m.\"},\"ru\":{\"title\":\"Высота полета\",\"unit\":\"м.\"}},{\"column\":11,\"key\":\"Departure\",\"en\":{\"unit\":\"IATA\"},\"ru\":{\"title\":\"Вылет\",\"unit\":\"IATA\"}},{\"column\":12,\"key\":\"Arrival\",\"en\":{\"unit\":\"IATA\"},\"ru\":{\"title\":\"Прилет\",\"unit\":\"IATA\"}},{\"column\":13,\"key\":\"Flight number\",\"en\":{\"unit\":\"\"},\"ru\":{\"title\":\"Номер рейса\",\"unit\":\"\"}},{\"column\":\"\",\"key\":\"Distance\",\"func\":\"getDistanceLatLonInKm\",\"hide\":true,\"en\":{\"unit\":\"m.\"},\"ru\":{\"title\":\"Расстояние\",\"unit\":\"м.\"}}],\"serviceUrl\":\"https://data-live.flightradar24.com/zones/fcgi/feed.js\",\"serviceInput\":\"bounds\",\"locations\":{\"DME\":{\"lat\":55.410307,\"lon\":37.902451}},\"errors\":{\"critical\":{\"ru\":\"Выполнение приложения будет приостановлено.\",\"en\":\"Application will be stopped.\"},\"locationError\":{\"ru\":\"Не верные координаты локации, выберите другую точку.\",\"en\":\"Wrong location coordinates, select another one.\"},\"noServiceUrl\":{\"type\":\"critical\",\"ru\":\"Не верный адрес сервиса.\",\"en\":\"Wrong service url.\"},\"noServiceInput\":{\"type\":\"critical\",\"ru\":\"Не верный параметр сервиса.\",\"en\":\"Wrong service input parameter.\"},\"connectionError\":{\"ru\":\"Ошибка связи с сервером\",\"en\":\"Server connection error\"},\"callbackFailed\":{\"ru\":\"Не удалось обновить данные\",\"en\":\"Callback failed\"}}};\n\n//# sourceURL=webpack:///./src/js/settings.json?");

/***/ })

/******/ });
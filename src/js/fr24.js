import settings from './settings.json';
import MessageBox from './messageBox';
import { measureTransform, dynamicSort } from './measureTransform';

let daemon;

/* Класс контроллера */

class fr24daemon{
  constructor(serv) {
    this.serv = serv;
    this.msgBox = new MessageBox(serv.options.messageBoxSelector);
    this.loaderCallback = function() {window.fr24daemon.serv.checkData(this);}
  }

  static updateTrigger() {
    setTimeout(fr24daemon.update, daemon.serv.options.timeout);
  }

  static update() {
    daemon.status = "update";
    window.fr24daemon.serv.init();
  }

  /* Обработка ошибок */

  static errors(errorCode) {
    let msg = daemon.errors[errorCode][daemon.serv.options.lang];

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
}

/* Класс получения и обработки данных */

export class fr24informer {
  constructor(options) {
    this.options = Object.assign({}, settings.defaultOptions, options);
    daemon = window.fr24daemon = new fr24daemon(this);
    this.init();
  }

  /* Подготовка запроса */

  init() {
    daemon.status = 'ready';
    if (!this.response(daemon.loaderCallback)) daemon.errors('callbackFailed');
  }

  request() {
    let
      locationCoords,
      bounds,
      request;

    this.options.locationAccuracy = parseFloat(this.options.locationAccuracy);
    if (this.options.locationAccuracy < 1) this.options.locationAccuracy = 1;

    locationCoords = settings.locations[this.options['point']];
    locationCoords.lat = parseFloat(locationCoords['lat']);
    locationCoords.lon = parseFloat(locationCoords['lon']);

    if (!locationCoords.lat || !locationCoords.lon) daemon.errors('locationError');

    bounds = (locationCoords.lat + this.options.locationAccuracy) + ','
      + (locationCoords.lat - this.options.locationAccuracy) + ','
      + (locationCoords.lon - this.options.locationAccuracy) + ','
      + (locationCoords.lon + this.options.locationAccuracy);

    if (!settings.serviceUrl) daemon.errors('noServiceUrl');
    if (!settings.serviceInput) daemon.errors('noServiceInput');

    if (daemon.status === 'error') return false;

    request = settings.serviceUrl + '?' + settings.serviceInput + '=' + bounds;
    return request;
  }

  /* Получение информации */

  response(onReady) {
    let request = this.request();
    if (request && daemon.status === 'ready') {
      return fetch(request).then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            return 'connectionError';
          }
        }
      ).then(data => {
        onReady.call(data);
        return true;
      });
    }
    return false;
  }

  /* Обработка данных */

  checkData(data) {
    if (typeof data === 'string') daemon.error(data);
    if (typeof data === 'object') this.prepareData(data);
  }

  prepareData(data) {
    let cleanTable = [], i = 0;

    Object.keys(data).forEach((k) => {
      if (typeof data[k] !== 'object') delete data[k];
      else {
        let row = Object.values(data[k]);
        cleanTable[i] = [];
        settings.dataFields.forEach((field) => {
          if (field.column > 0) {
            if (field.func & measureTransform[field.func]) {
              cleanTable[i].push(measureTransform[field.func](row[field.column]));
            } else {
              cleanTable[i].push(row[field.column]);
            }
          } else if (field.func === 'getDistanceLatLonInKm') {
            let dist = measureTransform[field.func](
              cleanTable[i][0], cleanTable[i][1],
              settings.locations[this.options.point]['lat'], settings.locations[this.options.point]['lon']
            );
            cleanTable[i].push(dist);
          }
        });
        i++;
      }
    });

    /* Сортировка */

    cleanTable.sort(dynamicSort(
      (this.options.sortAsc === "ASC" ? "" : "-") + this.options.sortBy['fieldNum']
    ));

    if (!daemon.renderer) daemon.renderer = new fr24renderer(cleanTable);
    else daemon.renderer.mainRender(cleanTable);
  }
}

/* Класс рендеринга информации */

class fr24renderer {
  constructor(data) {
    this.data = data;
    this.mainRender(data);
  }

  /* Основной блок */
  mainRender(data) {
    this.data = data;
    if(!daemon.view) {
      daemon.view = {};
      fr24renderer.mainCreate();
      this.headerCreate();
      fr24renderer.contentCreate();
    }
    this.dataUpdate();
    daemon.status = "finish";
    fr24daemon.updateTrigger();
  }

  /* Создание основного блока */

  static mainCreate() {
    let target = document.querySelector(daemon.serv.options.mainSelector);
    if (!target) daemon.error('renderMainError');
    target.classList.add(daemon.serv.options.contentSelectors.containerClass);
    daemon.view.main = target;
  }

  /* Создание шапки блока */
  headerCreate() {
    let header;
    header = document.createElement('div');
    header.classList.add(daemon.serv.options.contentSelectors.rowClass, daemon.serv.options.contentSelectors.headerClass);
    daemon.view.header = header;
    daemon.view.main.appendChild(header);

    settings.dataFields.forEach((val, key) => {
      if (!settings.dataFields[key]['hide']) {
        let title, el = document.createElement('div');
        header.append(el);
        el.classList.add(daemon.serv.options.contentSelectors.itemClass);
        el.dataset.column = key;
        if (settings.dataFields[key][daemon.serv.options.lang]['title']) {
          title = settings.dataFields[key][daemon.serv.options.lang]['title'];
        } else {
          title = settings.dataFields[key]['key'];
        }
        el.innerHTML = title + " " + ( settings.dataFields[key][daemon.serv.options.lang]['unit'] || '' );
      }
    });
  }

  /* Создание элементов контента */

  static contentCreate() {
    let content;
    content = document.createElement('div');
    content.classList.add(daemon.serv.options.contentSelectors.contentClass);
    daemon.view.content = content;
    daemon.view.main.appendChild(content);
  }

  /* Обновление контента */

  dataUpdate() {
    let
      data = this.data,
      content = daemon.view.content,
      rows = content.childNodes;

    data.forEach((val, key) => {
      let row;
      if (!rows[key]) {
        row = this.defaultElement(content, daemon.serv.options.contentSelectors.rowClass);
      } else {
        row = rows[key];
      }
      this.rowUpdate(row, data[key]);
    });
  }

  /* Обновление строки контента */

  rowUpdate(row, values) {
    let items = row.childNodes;
    values.forEach((val, key) => {
      if (!settings.dataFields[key].hide) {
        let item;
        if (!items[key]) {
          item = this.defaultElement(row, daemon.serv.options.contentSelectors.itemClass);
        } else {
          item = items[key];
        }
        item.innerText = val;
      }
    });
  }

  /* Создание стандартного элемента */

  defaultElement(target, ...args) {
    let el = document.createElement('div');
    target.appendChild(el);
    args.forEach((arg) => {
      el.classList.add(arg);
    });
    return el;
  }

}



/* Плагин для отображения сообщений */

const HIDE_TIMEOUT = 5000;

export default class {
  constructor(selector) {
    this.selector = selector;
    this.message = '';
    this.init();
  }

  init() {
    this.box = document.querySelector(this.selector) || null;
    this.hide();
  }

  setMsg(message) {
    if (this.box) {
      this.box.innerText = message;
      this.show();
    }
  }

  show() {
    let self = this;
    if (this.box) { this.box.style.display = ''; }
    setTimeout(() => { this.hide() }, HIDE_TIMEOUT);
  }

  hide() {
    if (this.box) { this.box.style.display = 'none'; }
  }

  clear() {
    if (this.box) { this.box.innerText = ''; }
  }
}
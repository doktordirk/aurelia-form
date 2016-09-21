var _dec, _class;

import { inject, DOM } from 'aurelia-framework';

export let InputElement = (_dec = inject(Element), _dec(_class = class InputElement {
  constructor(element) {
    this.triggerEvent = type => this.inputElement.dispatchEvent(DOM.createCustomEvent(type));

    this.inputElement = element;
  }

}) || _class);
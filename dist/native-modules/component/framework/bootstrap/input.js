var _dec, _class;



import { inject, DOM } from 'aurelia-framework';

export var InputElement = (_dec = inject(Element), _dec(_class = function InputElement(element) {
  var _this = this;

  

  this.triggerEvent = function (type) {
    return _this.inputElement.dispatchEvent(DOM.createCustomEvent(type));
  };

  this.inputElement = element;
}) || _class);
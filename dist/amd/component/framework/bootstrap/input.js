define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.InputElement = undefined;

  

  var _dec, _class;

  var InputElement = exports.InputElement = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function InputElement(element) {
    var _this = this;

    

    this.triggerEvent = function (type) {
      return _this.inputElement.dispatchEvent(_aureliaFramework.DOM.createCustomEvent(type));
    };

    this.inputElement = element;
  }) || _class);
});
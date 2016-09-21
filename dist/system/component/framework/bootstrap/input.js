'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, DOM, _dec, _class, InputElement;

  

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      DOM = _aureliaFramework.DOM;
    }],
    execute: function () {
      _export('InputElement', InputElement = (_dec = inject(Element), _dec(_class = function InputElement(element) {
        var _this = this;

        

        this.triggerEvent = function (type) {
          return _this.inputElement.dispatchEvent(DOM.createCustomEvent(type));
        };

        this.inputElement = element;
      }) || _class));

      _export('InputElement', InputElement);
    }
  };
});
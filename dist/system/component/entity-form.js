System.register(['../entity-schema', 'aurelia-framework', 'aurelia-view-manager'], function (_export) {
  'use strict';

  var entitySchema, bindable, bindingMode, customElement, resolvedView, EntityForm;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_entitySchema) {
      entitySchema = _entitySchema.entitySchema;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      customElement = _aureliaFramework.customElement;
    }, function (_aureliaViewManager) {
      resolvedView = _aureliaViewManager.resolvedView;
    }],
    execute: function () {
      EntityForm = (function () {
        var _instanceInitializers = {};

        function EntityForm() {
          _classCallCheck(this, _EntityForm);

          _defineDecoratedPropertyDescriptor(this, 'entity', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);
        }

        _createDecoratedClass(EntityForm, [{
          key: 'bind',
          value: function bind() {
            this.schema = entitySchema(this.entity);
            this.model = this.entity;
          }
        }, {
          key: 'entity',
          decorators: [bindable({ defaultBindingMode: bindingMode.oneTime })],
          initializer: null,
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable({ defaultBindingMode: bindingMode.twoWay })],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _EntityForm = EntityForm;
        EntityForm = resolvedView('spoonx/form', 'entity-form')(EntityForm) || EntityForm;
        EntityForm = customElement('entity-form')(EntityForm) || EntityForm;
        return EntityForm;
      })();

      _export('EntityForm', EntityForm);
    }
  };
});
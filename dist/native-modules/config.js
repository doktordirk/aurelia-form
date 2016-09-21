

import extend from 'extend';

export var Config = function () {
  function Config() {
    

    this.configurations = {};

    this.configure({
      labelFormat: function labelFormat(element) {
        return element.label || element.key;
      }
    });
  }

  Config.prototype.fetch = function fetch(props) {
    var result = this.configurations;

    for (var index in arguments) {
      var key = arguments[index];
      var value = result[key];

      if (!value) {
        return value;
      }
      result = result[key];
    }

    return result;
  };

  Config.prototype.configure = function configure(configs) {
    return extend(true, this.configurations, configs);
  };

  return Config;
}();
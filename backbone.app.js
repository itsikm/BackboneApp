
Backbone.prototype.App = function (name) {

    this.apps = {};

    var BackboneApp = function () {

        var dependencies = {};

        function injector (arguments) {

        }

        this.Config = function (config) {
            dependencies['$config'] = config;
        };

        this.View = function (inject) {

            if (_.isArray(inject)) {

            }

            if (_.isFunction(inject)) {

            }
        };

        this.Service = function () {

        };

    };

    if (this.apps[name]) {
        return this.apps[name];
    }

    return this.apps[name] = new BackboneApp();
};
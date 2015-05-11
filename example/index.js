
Backbone.App("AppName")
    .Config(function (){
        return {
            version: '0.0.1',
            screenSize: {
                'laptop': [600, 1024],
                'mobile': [0, 599]
            }
        }
    });

Backbone.App("AppName").View(['$config', '$screenSize', function ($config, $screenSize){
    return {

        initialize: function () {
            console.log('Initialize Version', $config.version);
            $screenSize.listen(this.render.bind(this));
        },

        render: function (media) {
            switch (media) {
                case 'laptop': break;
                case 'mobile': break;
                default: break;
            }
        }

    }
}]);

Backbone.App("AppName").Collection(["$models", function ($models) {
    return {

        model: $models,

        initialize: function () {

        }

    }
}]);

Backbone.App("AppName").Model(["$config", function ($config) {
    return {

        default: {
            version: $config.version
        },

        initialize: function () {

        }

    }
}]);

Backbone.App("AppName").Service('$screenSize', ['$config', function ($config) {

    function _between (size, x, y) {
        return size >= x && size <= y;
    }

    return {

        listen: function (callback) {
            $(window).on('resize', function () {
                _.each($config.screenSize, function (range, media) {
                    if (_between(window.innerWidth, range[0], range[1])) {
                        return callback(media);
                    }
                });
            });
        }

    }
}]);
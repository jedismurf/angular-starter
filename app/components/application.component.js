'use strict';

angular.module('myApp.application', [])

.component('application', {
    bindings: {
        data: '<',
        config: '<'
    },
    templateUrl: 'components/application.component.js',
    controller: function(){

    }
})

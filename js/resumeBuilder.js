(function () {
    'use strict';

    /*
        Create a new angular app for the resume app.
    */
    angular.module('resumeBuilderApp', []).
        controller('ResumeBuilderController', ['$http', resumeBuilderController]);

    function resumeBuilderController($http) {
        // store a reference to the controller view model
        var controller = this;

        // Define bio object
        controller.bio = bio;

        // Define the work history object
        controller.work = work;

        // Define the education object
        controller.education = education;

        // Define the projects object
        controller.projects = projects;
    }
})();

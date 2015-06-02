angular.module('book-application.templates', []);
angular.module('book-application', [
    'component.ajax-error',
    'component.app-version',
    'component.first-component',
    'book-application.templates'
]).config(function (){});

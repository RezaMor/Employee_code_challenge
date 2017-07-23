import angular from 'angular';

const mod = angular.module('ngfun.field.viewer.component', []);

export default mod.name;

mod.component('fieldViewer', {
  bindings: {
    field: '=',
  },
  template: '<div class="form-group"><div>{{$ctrl.field.$name}}.$valid = {{$ctrl.field.$valid}}</div>' +
            '<div>{{$ctrl.field.$name}}.$error = {{$ctrl.field.$error}}</div>' +
            '<div>{{$ctrl.field.$name}}.$dirty = {{$ctrl.field.$dirty}}</div>' +
            '<div>{{$ctrl.field.$name}}.$pristine = {{$ctrl.field.$pristine}}</div></div>',
});

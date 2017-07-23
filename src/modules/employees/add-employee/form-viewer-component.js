import angular from 'angular';

const mod = angular.module('ngfun.form.viewer.component', []);

export default mod.name;

mod.component('formViewer', {
  bindings: {
    form: '=',
  },
  template: '<div class="form-group"><div>{{$ctrl.form.$name}}.$valid = {{$ctrl.form.$valid}}</div>' +
            '<div>{{$ctrl.form.$name}}.$error.required = {{$ctrl.getFieldsWithErrors($ctrl.form.$error.required)}}</div>' +
            '<div>{{$ctrl.form.$name}}.$error.minlength = {{$ctrl.getFieldsWithErrors($ctrl.form.$error.minlength)}}</div>' +
            '<div>{{$ctrl.form.$name}}.$error.pattern = {{$ctrl.getFieldsWithErrors($ctrl.form.$error.pattern)}}</div>' +
            '<div>{{$ctrl.form.$name}}.$error.maxlength = {{$ctrl.getFieldsWithErrors($ctrl.form.$error.maxlength)}}</div></div>',
  controller: function() {
    this.getFieldsWithErrors = (errorArray = []) => {
      return errorArray.map((e) => e.$name).join(', ');
    };
  },
});

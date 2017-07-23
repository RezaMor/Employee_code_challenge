import angular from 'angular';

const mod = angular.module('ngfun.components.smart.table.search.component', []);

export default mod.name;

mod.component('smartTableSearchComponent', {
  bindings: {
    data: '<',
    onSearchParamChanged: '&'
  },
  template: require('./smart-table-search.html'),
    controller: function() {
        let ctrl = this;
        ctrl.searchParamChanged = () => {
            ctrl.onSearchParamChanged({searchParams: ctrl.searchParams});
        };
    },
});


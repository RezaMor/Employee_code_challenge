import angular from 'angular';

const mod = angular.module('ngfun.components.smart.table.component', []);

export default mod.name;

mod.component('smartTableComponent', {
  bindings: {
    data: '<',
    onDeleteRow: '&',
    onSortColumn: '&'
  },
  template: require('./smart-table.html'),
    controller: function() {
        let ctrl = this;
        ctrl.sort = {
            active: '',
            descending: undefined
        };

        ctrl.changeSorting = (column) => {
            let sort = ctrl.sort;
            if (sort.active == column) {
                sort.descending = !sort.descending;
            } else {
                sort.active = column;
                sort.descending = false;
            }
            ctrl.sortColumn(column, sort.descending);
        };

        ctrl.getIcon = (column) => {
            let sort = ctrl.sort;
            if (sort.active == column) {
                return sort.descending ? 'glyphicon-sort-by-alphabet-alt' : 'glyphicon-sort-by-alphabet';
            }
            return 'glyphicon-sort';
        };

        ctrl.deleteRow = (selectedRow) => {
            ctrl.onDeleteRow({selectedRow: selectedRow});
        };

        ctrl.sortColumn = (column, descending) => {
            ctrl.onSortColumn({selectedColumnKey: column, descending : descending});
        };
    },
});


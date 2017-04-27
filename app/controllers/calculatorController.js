angular
    .module('tipApp')
    .controller("calculatorController", [function () { 
        
    var vm = this;
        
    vm.total = 0;
    
    vm.people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    vm.person = 1;
    
    vm.calculate = function() {
        vm.total = vm.cost * (1 + vm.tip/100);
    };
    
    vm.clear = function() {
        vm.total = 0;
        vm.cost = '';
        vm.tip = '';
        vm.person = 1;
    };
}]);
    

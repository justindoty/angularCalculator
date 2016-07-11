// operator numeric values
//
// Add = 20;
// Subract = 30;
// Multiply = 40;
// Divide = 50;
// Percent = 60;

angular.module('claculatorApp', []);

angular.module('claculatorApp').controller('MainController', function($scope) {

    var number1 = [];
    var number2 = [];
    var operator = undefined;
    var result = 0;
    var storage = [];
    var display = [];

    $scope.cleardisplay = function() {
        number1 = [];
        number2 = [];
        result = 0;
        operator = undefined;
        delete $scope.firstnumber
        delete $scope.displayoperator
        delete $scope.secondnumber
        delete $scope.total

    }

    $scope.clearLog = function() {
        storage = [];
        $scope.storage = storage;
    }

    $scope.buttonclicked = function(btn) {
        if (result != 0) {
            $scope.cleardisplay();
        }
        if (operator == undefined) {
            number1 += (btn);
            $scope.firstnumber = number1;
        } else if (operator != undefined) {
            number2 += (btn);
            $scope.secondnumber = number2;
        }
    }

    $scope.operatorSelected = function(input) {
        switch (input) {
            case 20:
                operator = " + ";
                $scope.displayoperator = operator;
                break;
            case 30:
                operator = " - "
                $scope.displayoperator = operator;
                break;
            case 40:
                operator = " x ";
                $scope.displayoperator = operator;
                break;
            case 50:
                operator = " / "
                $scope.displayoperator = operator;
                break;
        }
    }

    $scope.equals = function() {
        switch (operator) {
            case " + ":
                result = parseInt(number1, 10) + parseInt(number2, 10);
                $scope.total = result;
                break;
            case " - ":
                result = parseInt(number1) - parseInt(number2);
                $scope.total = result;
                break;
            case " x ":
                result = parseInt(number1) * parseInt(number2);
                $scope.total = result;
                break;
            case " / ":
                result = parseInt(number1) / parseInt(number2);
                $scope.total = result;
                break;
        }
        storage.unshift([number1 + operator + number2 + " = " + result]);

        display.unshift(storage[0].toString());
        console.log(display);
        $scope.storage = display;

    }

    $scope.percentButton = function() {
        result /= 100;
        $scope.total = result;
    }

    // closing MainController
})

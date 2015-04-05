var app=angular.module("myApp",['ui.codemirror']);
app.controller("MainController",function($scope){
    $scope.cmOpts={
        lineNumbers:true,
        indentSize:4,
        tabSize:4,
        theme:'solarized',
        mode:'javascript'
        };	
});

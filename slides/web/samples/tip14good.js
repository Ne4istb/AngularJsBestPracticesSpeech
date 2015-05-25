// demo.html
<parent-component>
   <child1-component></child1-component>
   <child2-component></child2-component>
</parent-component>

// parent-component-directive.js
function parentComponent() {
   var controller = function ($scope) {
      this.doSomething = function () { }
   };
   return {
      restrict: 'E',
      controller: ['$scope', controller],
      scope: {}
   };
}

// child1-component-directive.js
function child1Component() {
   var link = function (scope, element, attrs, controller) {
      controller.doSomething();
   };
   return {
      restrict: 'E',
      require: '^parentComponent',
      link: link,
      scope: {}
   };
}
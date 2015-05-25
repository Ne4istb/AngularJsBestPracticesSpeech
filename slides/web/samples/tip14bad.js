// demo.html
<parent-component>
   <child1-component></child1-component>
   <child2-component></child2-component>
</parent-component>

// parent-component-directive.js
function parentComponent($rootScope) {
   var link = function () {
      this.doSomething = function () { }
      $rootScope.$on('doSomething', this.doSomething);
   };
   return {
      restrict: 'E',
      link: link,
      scope: {}
   };
}

// child1-component-directive.js
function child1Component() {
   var link = function ($rootScope) {
      $rootScope.$emit('doSomething');
   };
   return {
      restrict: 'E',
      link: link,
      scope: {}
   };
}

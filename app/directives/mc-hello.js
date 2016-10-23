module.exports = function(ngModule) {
  if (ON_TEST) {
    require('./../test/mc-hello.test')(ngModule)
  }
  ngModule.directive('mcHello', () => {
    require('../css/main.less')
    return {
      restrict: 'E',
      scope: {},
      template: require('./mc-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        const vm = this;
        vm.greeting = 'Hello Webpack';
      }
    };
  });
};

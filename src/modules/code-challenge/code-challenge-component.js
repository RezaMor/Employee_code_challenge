import angular from 'angular';

const mod = angular.module('code.challenge.component', []);

export default mod.name;

mod.component('codeChallengeApp', {
  template: require('./code-challenge.html'),
});

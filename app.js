var app = angular.module('cMaps', []);

app.controller('GISCtrl', [
  '$scope',
  function($scope){

    $scope.jobs = [
      {job_id: 1,  start_date: "11/29", deadline: "12/25", progress: 100},
      {job_id: 5,  start_date: "11/29", deadline: "12/25", progress: 40},
      {job_id: 4,  start_date: "11/24", deadline: "12/21", progress: 70},
      {job_id: 3,  start_date: "11/21", deadline: "12/17", progress: 0},
      {job_id: 2,  start_date: "11/21", deadline: "12/17", progress: 100},
    ];
  }
]);

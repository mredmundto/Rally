$(document).ready(function() {

  /************************************************
  // Function that finds primes between two values
  ************************************************/
  var findPrimes = function(min, max) {
    var primeTester = function(n) {
      for (var i = 2; i < n - 1; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };

    var result = [];
    for (var i = min; i <= max; i++) {
      if (primeTester(i)) {
        result.push(i);
      }
    }
    return result;
  }

  /************************************************
  // Socketing
  ************************************************/
  var socket = io();

  var sendReady = function() {
    // Hard coded for now - eventually generate from server
    // and send to client for storage
    var projectId = 0;  
    socket.emit('userReady', projectId);
  }

  socket.on('updateWorkers', function(workers) {
    console.log('New workers list received:', workers);
  });

  socket.on('newJob', function(job) {
    console.log('Working on new job:', job);
    
    // var result = findPrimes(job.data[0], job.data[1]);
    // job.result = result;
    // console.log('Job complete. Result is: ', result);
    // console.log('Sending result back to server');
    // socket.emit('jobdone', job);
  });

  socket.on('jobresult', function(result) {
    console.log(result);
    $('#results').append('<li>Primes between ' + result.range[0] + ' and ' + result.range[1] + ': ' + result.total);
  });

  sendReady();
});
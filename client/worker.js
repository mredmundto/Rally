/*
  ==================
  WEB WORKER HANDLER
  ==================
*/

onmessage = function(event) {
  console.log('Web Worker received data from the main script');
  var job = event.data;
  var mapDataFunc = eval('(' + job.mapData + ')');

  var result = mapDataFunc(job.data);
  job.result = result;
  console.log('Job complete. Result is: ', result);
  console.log('Sending result back to server');
  postMessage(job);
}
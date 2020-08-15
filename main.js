
var addon = require('bindings')('addon');
var calculations = process.argv[2] || 100000000;

function printResult(type, pi, ms) {
  console.log(type, 'method:');
  console.log('\tπ ≈ ' + pi +
              ' (' + Math.abs(pi - Math.PI) + ' away from actual)');
  console.log('\tTook ' + ms + 'ms');
  console.log();
}


function runAsync() {
  // how many batches should we split the work in to?
  var batches = process.argv[3] || 16;
  var ended = 0;
  var total = 0;
  var start = Date.now();

  function done (err, result) {
    total += result;

    // have all the batches finished executing?
    
      printResult('Async', 1, Date.now() - start);
   
  }

  // for each batch of work, request an async Estimate() for
  // a portion of the total number of calculations

  addon.calculateAsync(1, done);

}

runAsync();

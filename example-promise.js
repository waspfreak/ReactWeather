function getTempPromise (location){
  return new Promise(function (resolve, reject){
    resolve(79);
    reject('Cccity not found');
  });
}


getTempPromise('London').then(function(temp){
  console.log('promise sucess', temp);
}, function(err) {
  console.log('promise error', err);

});


function addPromise (a, b){
    return new Promise(function(resolve, reject){
      if (typeof a === 'number' && typeof b === 'number'){
        resolve (a + b);
      }else {
        reject ('A & B need to be a number');
      }
    });
}


//SUCESS CASE

addPromise(2, 3).then(function(sum){
  console.log('the should apper the sum = ', sum);
}, function (err) {
  console.log('the should apper the error msg calls;',  err);

});

//ERROR CASE
addPromise('a', 9).then(function(sum){
    console.log('sucess');
}, function(err){
    console.log('the should apper the error msg calls;',  err);
});

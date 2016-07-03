 var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name){
//   console.log('forEach', name);
// });
//
// names.forEach ((name) => {
//   console.log('arrowFunc', name);
//   console.log('somthing');
//   var x = 'text';
//   console.log(name, x);
// });
//
// names.forEach((name) => console.log(name));

// var name = 'Works';
// var returMe = (name) => name + '!';
// console.log(returMe(name));


// var person = {
//   name: 'Ju',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to' + name);
//     });
//   }
//
// };
// person.greet();
//
//
// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
// console.log(add(9, 0));
//
//  var numbers = [1, 4, 6];
// numbers.forEach((numbers)=>{
//   console.log(1 + numbers);
// });
//
// numbers.forEach((number) => console.log(number - 1));

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

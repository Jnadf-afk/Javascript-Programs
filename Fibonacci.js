var num;
var prenum;
var store;
num = 1;
prenum = 1;
num = num + prenum;
console.log(num);
function loop() {
store = num;
num = num + prenum;
console.log(num);
prenum = store;
}
while (num > 0) {
  loop();
}

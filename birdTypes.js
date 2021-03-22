
let birds = [1, 1, 2, 2, 4, 4, 4, 4, 5]  //list 1
// let birds = [2, 2, 2, 2, 4, 4, 4, 4, 5]  // list 2
// let birds = [1, 2, 2, 4, 4, 4, 4, 5]    //list 3

let final = [];                         //final array of smallest and max count

var count = {};
birds.forEach(function (i) { count[i] = (count[i] || 0) + 1; });    //Creating object of each item counts

console.log(count);


//sort count object to biggest with max count
keysSorted = Object.keys(count).sort(function (a, b) { return count[b] - count[a] })
final.push(+keysSorted[0])

//sort count object to smallest with min count
keysSorted = Object.keys(count).sort(function (a, b) { return count[a] - count[b] })
final.push(+keysSorted[0])


console.log(final);

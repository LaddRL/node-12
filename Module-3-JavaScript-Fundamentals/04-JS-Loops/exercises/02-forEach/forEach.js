var names = ["Andre", "Karl", "Rashida", "Olivia"];

names.forEach ((value )=>{
    console.log(value);
})

var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

zooAnimals.forEach ((value, index)=>{
    console.log(value);
    console.log(index);
})

// for (let bottlesOnTheWall = 99; bottlesOnTheWall <= 110; bottlesOnTheWall++) {
//     if (bottlesOnTheWall) {
//       console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
//     } else {
//       console.log(`No more bottles of milk on the wall!`);
//     }
//   }

let bottlesOnTheWall = []
for (let i = 0; i <= 99; i++) {
    bottlesOnTheWall = array[i];
};
bottlesOnTheWall.reverse()
console.log(bottlesOnTheWall);

bottlesOnTheWall.forEach ((value, index) =>{
    console.log(value);
    console.log(index);
})
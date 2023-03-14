const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let x in student ) {

    // display the properties
    console.log(`${x} => ${student[x]}`);
}
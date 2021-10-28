let members = ["Juan","Jose","Walter","Kade","Kolbe","Tyson"];

if (members.length % 2 != 0) {
    alert("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    let arr1 = members.slice(), // copy array
        arr2 = members.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        let givers = arr1.pop(), // get the last value of arr1
            recievers = arr2[0] == givers ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1, 
            //           get the last value, otherwise get the first

        console.log(givers + ' gets ' + recievers);
    }
}
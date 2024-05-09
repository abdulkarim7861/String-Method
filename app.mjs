// //Q:1
// let firstName = prompt("Enter First Name:");
// let lastName = prompt("Enter Last Name:");

// let fullName = firstName +" "+ lastName ;
// console.log(fullName)

// //Q:2
// let mobileName = prompt("enter Your Favourite Mobile Name");
// let lengthOfMobileName = mobileName.length;
// console.log(`Your Favourite Mobile is ${mobileName}`);
// console.log(`Length Of String ${lengthOfMobileName}`);

// //Q:3
// let word = "Pakistani"
// for(let i= 0 ; i<word.length ; i++){
//     console.log(word[i]);
//     if(word[i] === "n"){
//         console.log(`${word}`)
//         console.log(`Found ${word[i]} at index ${i} `);
//         break;
//     }
// }

////Q:4
let String = "Hello World"
for(let i=0; i<String.length; i++){
    console.log(`Last Index of 'l' is ${String.lastIndexOf("l")}`)
}

//Q:5
let nationality = "Pakistani"
for(let i=0; i<nationality.length; i++){
    // console.log(nationality[i]);
    if(nationality[i] === "i"){
        console.log(`Character At index ${i} : ${nationality[i]}`);
        break;
    }
}

//Q:6
let firstName = prompt("Enter First Name:");
let lastName = prompt("Enter Last Name:");

let fullName = firstName.concat(lastName) ;
console.log(fullName)

//Q:7
let cityName = "Hyderabad";
console.log(cityName)
let newCityName = cityName.replace("Hyder","Islam");
console.log(newCityName);

//Q:8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replaceAll("and" , "&");
console.log(newMessage);

//Q:9
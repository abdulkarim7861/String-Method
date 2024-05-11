//Q:1
let firstName = prompt("Enter First Name:");
let lastName = prompt("Enter Last Name:");

let fullName = firstName +" "+ lastName ;
console.log(fullName)

//Q:2
let mobileName = prompt("enter Your Favourite Mobile Name");
let lengthOfMobileName = mobileName.length;
console.log(`Your Favourite Mobile is ${mobileName}`);
console.log(`Length Of String ${lengthOfMobileName}`);

//Q:3
let word = "Pakistani"
for(let i= 0 ; i<word.length ; i++){
    console.log(word[i]);
    if(word[i] === "n"){
        console.log(`${word}`)
        console.log(`Found ${word[i]} at index ${i} `);
        break;
    }
}

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
let first_Name = prompt("Enter First Name:");
let last_Name = prompt("Enter Last Name:");

let full_Name = first_Name.concat(last_Name) ;
console.log(full_Name)

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
let Value = "472"
console.log(`Value : ${Value}`);
console.log(`Value : ${typeof(Value)}`);

Value = Number("472")
console.log(`Value : ${Value}`);
console.log(`Value : ${typeof(Value)}`);

//Q:10
let userInput = prompt("Enter Any Item:").toUpperCase();
console.log(`Upper Case : ${userInput}`)


//Q:11
let userInpt = prompt("Enter Any Item:");
for(let i=0 ; i<1 ; i++){
    console.log(`Title Case :${userInpt[0].toUpperCase()+ userInpt.slice(1)}`);
}

// Q:12
let number = "35.36";
let newNumber = number.split(".").join("");
console.log(newNumber);

//Q:13
let username = prompt("Enter Your User Name:");
const pattern = /[^a-zA-Z0-9]/ ; 
let checkUserName =pattern.test(username)
   if(checkUserName ){
       console.log(`Enter a Valid User Name!`);
    }else{
        
        console.log(`Valid User Name`)
}

//Q:14
let university = "University Of Karachi"
for(let i=0 ; i<university.length ; i++){
    console.log(`${university[i]}`)
}

// Q:15
let country = "Pakistan"
for(let i=0 ; i<country.length ; i++){
    console.log(country[i]);
    if(country[i] === "n"){
        console.log(`${country[i]} is Found at index ${i}`);
    }
}

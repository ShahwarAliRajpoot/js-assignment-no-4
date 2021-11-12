// alert("PAKISTAN ZINDABAD")

// Chapter No 21-25

// Q1
// var name1 = prompt("Enter Your First Name");
// var name2 = prompt("Enter Your Last Name");

// var newName = name1 + " " + name2;
// alert("Good Morning " + newName)

//  Q2
// var user = prompt("Enter Your Favorite Phone")
// document.write("<b> My Favorite Phone is: </b>" + user)
// user = user.length;
// document.write("<br><b> Length of String: </b>" + user)

// Q3 
// var country = "Pakistani";
// document.write("<b> String: </b>" + country);
// country = country.indexOf("n");
// document.write("<br> <b> Index of 'n': </b>" + country);

// Q4
// var greet = "Hello World";
// document.write("<b> String: </b>" + greet);
// greet = greet.lastIndexOf("l");
// document.write("<br> <b>Last index of 'l': </b>" + greet);

// Q5
// var country = "Pakistani";
// document.write("<b> String: </b>" + country);
// country = country.charAt(3);
// document.write("<br> <b>character at index 3: </b>" + country);

// Q6
// var name1 = prompt("Enter Your First Name");
// var name2 = prompt("Enter Your Last Name");
// fullName = name1.concat(" " + name2);
// alert(fullName)

// Q7
// var city = "Hyderabad";
// document.write("<b> City: </b>" + city);
// city = city.replace("Hyder","Islam")
// document.write("<br><b> After replacement: </b>" + city);

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// document.write("<b> Message: </b>" + message);
// message = message.replace(/and/g,"&")
// document.write("<br><b> Update Message: </b>" + message);

// Q9
// var num = "472";
// document.write("<b> Value: </b>" + num + "<br><b> Type:</b> " + typeof(num));
// num = Number(num);
// document.write("<b><br> Value: </b>" + num + "<br><b> Type:</b> " + typeof(num));

// Q10
// var user = prompt("Enter Please")
// document.write("<b> User input: </b>" + user)
// user = user.toUpperCase();
// document.write("<b><br> Upper case: </b>" + user)

// Q11
// var user = prompt("Enter Please")
// document.write("<b> User input: </b>" + user)
// user = user.slice(0,1).toUpperCase() + user.slice(1,user.length).toLowerCase();
// document.write("<b><br> Title case: </b>" + user)

// Q12
// var num = 35.36;
// document.write("<b> Number: </b>" + num)
// num = num.toString().replace(".", ""); 
// document.write("<br><b> Result: </b>" + num)


// Q13
// var user = prompt("Enter Your Username")
// var spcl = user.replace(/[a-zA-z0-9]/g, '');
// spcl = spcl.charCodeAt();
// if(spcl == 33 || spcl == 44 || spcl == 46 || spcl == 64){
//     alert("Please Enter a Valid Username")
// }
// else{
//     document.write("Your Username is " + user)
// }


// Q14
// var flag = false;
// var userInput = prompt("Welcome to Rajpoot Bakery. What do You Want to Order Sir/Ma'am")
// userInput = userInput.toLowerCase();
// var bakery = ["cake","apple pie","cookie","chips","patties"]
// for(var i = 0; i < bakery.length; i++){
//   if(bakery[i] == userInput){
//    alert(userInput + " is available at index " + [i] + " in our bakery")
//    flag = true;
//   }
// }
// if(flag == false){
//     alert( " We are sorry. " + userInput + " is not available in our bakery")
// }

// Q15
// skip

// Q16
// var university = "University of Karachi";
// document.write(university)
// university = university.split("");
// document.write("<br>" + university )

// Q17
// var user = prompt("Enter Input")
// document.write("<b>User input:</b> " + user)
// user = user.slice(-1);
// document.write("<br><b> Last character of input:</b> " + user)

// Q18

// Chapter No 26-30

// Q1
// a 
// var num1 = 3.45214;
// num1 = Number(num1)
// document.write("<b>Number:</b> " + num1)

// // b 
// var num2 = 3.45214;
// num2 = Math.round(num2)
// document.write("<br><b>round of value:</b> " + num2)

// // c 
// var num3 = 3.45214;
// num3 = Math.floor(num3)
// document.write("<br><b>floor value:</b> " + num3)

// d 
// var num4 = 3.45214;
// num4 = Math.ceil(num4)
// document.write("<br><b>ceil value:</b> " + num4)


// Q2
// a 
// var num1 = -2.673;
// num1 = Number(num1)
// document.write("<b>Number:</b> " + num1)

// // b 
// var num2 = -2.673;
// num2 = Math.round(num2)
// document.write("<br><b>round of value:</b> " + num2)

// // c 
// var num3 = -2.273;
// num3 = Math.floor(num3)
// document.write("<br><b>floor value:</b> " + num3)

// d 
// var num4 = -2.673;
// num4 = Math.ceil(num4)
// document.write("<br><b>ceil value:</b> " + num4)

// Q3
// var num = -4;
// num = Math.abs(num)
// document.write("the absulate value -4 is " + num)

// Q4
// var num = Math.ceil(Math.random() * 10);
// document.write("random dice value: " + num);


// Q5
// var num = Math.ceil(Math.random() * 2);
// if(num == 2){
// document.write(num + " random coin value: Heads ");
// }
// else{
// document.write(num + " random coin value: Tails ");
// }

// Q6
// var num = Math.ceil(Math.random() * 100);
// document.write("random number between 1 and 100: " + num);

// Q7
// var user = prompt("Enter Your Weight")
// var weight = parseFloat(user.replace(/^\D|,+/g, ''))
// document.write("The weight of user is " + weight + " kilograms")

// Q8
// var userNum = +prompt("please input a number between 1 and 10.")
// var num = Math.ceil(Math.random() * 10);
// if(userNum === num){
//     alert("Congratulation " + userNum + "  " + num)
// }
// else{
//     alert("Try Again Please " + userNum + "  " + num)
// }







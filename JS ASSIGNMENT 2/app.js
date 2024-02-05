//Q1 ANS
//  var a = prompt("Enter a number:");
//  a = parseInt(a);
//  document.write("<p>Result:</p>");
//  document.write("<p>The value of a is: " + a + "</p>");
//  document.write("..................<br><br>"); 
//  document.write("<p>The value of ++a is: " + (++a) + "</p>");
//  document.write("<p>Now the value of a is: " + a + "</p><br><br>");

//  a = a - 1;
//  document.write("<p>The value of a++ is: " + (a++) + "</p>");
//  document.write("<p>Now the value of a is: " + a + "</p><br><br>");
//  document.write("<p>The value of --a is: " + (--a) + "</p>");
//  document.write("<p>Now the value of a is: " + a + "</p><br><br>");
//  a = a + 1;
//  document.write("<p>The value of a-- is: " + (a--) + "</p>");
//  document.write("<p>Now the value of a is: " + a + "</p>");


//Q2 ANSWER
// var a = 2, b = 1;
// a = --a;
// console.log("a is " + a);
// var step2Result = --a - --b;
// console.log("a is " + a);
// console.log("b is " + b);
// console.log("result is " + step2Result);
// var step3Result = --a - --b + ++b;
// console.log("a is " + a);
// console.log("b is " + b);
// console.log("result is " + step3Result);

// var result = --a - --b + ++b + b--;
// console.log("a is " + a);
// console.log("b is " + b);
// console.log("result is " + result);


//Q3 ANSWER
// var name = prompt("Enter your name:");
// document.write("Hello, " + name + " Welcome To Bano Qabil");

//Q4 ANSWER
// function displayMultiplicationTable() {

//     var userInput = document.getElementById('numberInput').value;

//     var number = userInput === '' ? 5 : parseFloat(userInput);

//     var tableHTML = '<table border="1">';
//     for (var i = 1; i <= 10; i++) {
//         var result = number * i;
//         tableHTML += '<tr><td>' + number + ' x ' + i + '</td><td>' + result + '</td></tr>';
//     }
//     tableHTML += '</table>';
//     document.getElementById('multiplicationTable').innerHTML = tableHTML;
// }


//Q5 ANSWER
//  let obtainedMarksInenglish = prompt("Enter Obtained Marks In English");
//  obtainedMarksInenglish = Number(obtainedMarksInenglish);
//  let obtainedMarksInmath = prompt("Enter Obtained Marks In Math");
//  obtainedMarksInmath = Number(obtainedMarksInmath);
//  let obtainedMarksInurdu = prompt("Enter Obtained Marks In Urdu");
//  obtainedMarksInurdu = Number(obtainedMarksInurdu);
  
//  const totalMarks = 100;
//  const totalObtainedMarks = obtainedMarksInenglish + obtainedMarksInmath + obtainedMarksInurdu;
//  const percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

//  document.write("<table border='1'>");
//  document.write("<th>Subject</th><th>Total Marks</th> <th>Obtained Marks</th><th>Percentage</th>");
 
//  document.write(`<tr><td>English</td><td>100</td><td> ${obtainedMarksInenglish}</td></tr>`);
//  document.write(`<tr><td>Math</td><td>100</td><td>${obtainedMarksInmath}</td></tr>`);
//  document.write(`<tr><td>Urdu</td><td>100</td><td>${obtainedMarksInurdu}</td></tr>`);
   
//  document.write(`<tr><td><td><td>${totalObtainedMarks}</td></td></td><td>${percentage.toFixed(2)}%</td></tr>`);
//  document.write("</table>");


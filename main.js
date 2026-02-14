//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻
/// 1.1  
const sampleElement = document.getElementById("sample1");
// 1.2 
console.log(sampleElement);
// 1.3 
console.log(sampleElement.textContent);
// 2.1  
const techCompaniesById = document.getElementById("techCompanies");
console.log(techCompaniesById); 
// 2.2 
const techCompaniesBySelector = document.querySelector("#techCompanies");
console.log(techCompaniesBySelector); 
// 2.3 
const allTechCompanies = document.querySelectorAll("#techCompanies li");
console.log("Total tech companies:", allTechCompanies.length); 
// 2.4 
const redQuery = document.querySelectorAll(".red");
console.log("Selected via querySelectorAll:", redQuery); 
// Use "getElementsByClassName" 
const red = document.getElementsByClassName("red");
console.log("Selected via getElementsByClassName:", red);                              
// 2.5 Create a new li HTML element
const newCompany = document.createElement("li");
// Set to "Facebook"
newCompany.textContent = "Facebook";
// Display it on the console
console.log(newCompany);
// 2.6 
newCompany.classList.add("blue");
// Display it on the console 
console.log(newCompany);
// 2.7 
const sonyElement = Array.from(document.querySelectorAll("#techCompanies li"))
  .find(el => el.textContent === "Sony");
// Append the newly created "Facebook"
if (sonyElement) {
  sonyElement.after(newCompany);
}
// 2.8 "blue" within the techCompanies list
const blueCompaniesList = document.querySelectorAll("#techCompanies .blue");

// Get the count of those elements
const blueCount = blueCompaniesList.length;

// Select the "blueCompanies" div and display the result
const displayDiv = document.getElementById("blueCompanies");
displayDiv.textContent = `Number of blue companies: ${blueCount}`;

// Also displaying on console for verification
console.log("Total blue companies:", blueCount);

// Function to add background color 
function addBackground() {
  document.body.style.backgroundColor = "#99ecff"; 
}

// Function to remove background color 
function removeBackground() {
  document.body.style.backgroundColor = ""; // reset to none 
}

// Select the buttons using their IDs from the HTML 
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("No");

// Bind the elements with click events and attach the functions 
yesBtn.addEventListener("click", addBackground);
noBtn.addEventListener("click", removeBackground);


// 4.1 Select the form and result display element
const form = document.getElementById("adder");
const resultDiv = document.getElementById("sum");

// 4.2 Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing on form submission
  event.preventDefault();

  // Retrieve values from the input fields by their names
  const firstInput = document.getElementsByName("first-value")[0].value;
  const secondInput = document.getElementsByName("second-value")[0].value;

  // Convert string values to numbers
  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  // 4.3 Check if the provided values are valid numbers
  if (isNaN(num1) || isNaN(num2) || firstInput === "" || secondInput === "") {
    // 3. Display error message if input is not a number
    resultDiv.textContent = "Please enter numerical values only";
  } else {
    // Calculate sum and average
    const sum = num1 + num2; 
    const average = sum / 2;

    const resultText = `Sum: ${sum}, Average: ${average}`;
    // 1. 
    console.log(resultText);
    // 2. 
    resultDiv.textContent = resultText; 
  }
});
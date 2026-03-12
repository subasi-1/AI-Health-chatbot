function startAssistant(){

window.location.href = "chatbot.html";

}
function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += `<div class="user-message">${input}</div><br>`;

document.getElementById("userInput").value="";

let response="";

if(input.includes("fever") || input.includes("headache")){
response="Possible condition: Viral fever. Drink fluids and take rest.";
}
else if(input.includes("cough")){
response="Possible condition: Cold or flu. Stay hydrated and rest.";
}
else if(input.includes("stomach pain")){
response="Possible condition: Gastritis. Avoid spicy food and drink water.";
}
else{
response="Please describe your symptoms clearly.";
}

/* typing indicator */

let typing = document.createElement("div");
typing.className = "typing";
typing.innerText = "AI is typing...";
chatbox.appendChild(typing);

setTimeout(function(){

typing.remove();

typeMessage(response);

},1500);

}
function typeMessage(message){

let chatbox = document.getElementById("chatbox");

let botDiv = document.createElement("div");

botDiv.className="bot-message";

chatbox.appendChild(botDiv);

let i = 0;

let typingEffect = setInterval(function(){

botDiv.innerHTML += message.charAt(i);

i++;

if(i >= message.length){
clearInterval(typingEffect);
}

},30);

}

function checkSymptoms(){

let symptoms = document.querySelectorAll('input[type="checkbox"]:checked');

let values = [];

symptoms.forEach((symptom)=>{
values.push(symptom.value);
});

let result="";

if(values.includes("fever") && values.includes("cough")){

result="Possible condition: Flu. Advice: Rest, drink warm fluids.";

}

else if(values.includes("fever") && values.includes("headache")){

result="Possible condition: Viral Fever. Advice: Stay hydrated and take rest.";

}

else if(values.includes("stomach")){

result="Possible condition: Gastritis. Advice: Avoid spicy food.";

}

else if(values.includes("chest")){

result="Warning: Chest pain may indicate serious condition. Seek medical help.";

}

else if(values.includes("fatigue")){

result="You may need rest and proper nutrition.";

}

else{

result="Symptoms unclear. Please consult a doctor.";

}

document.getElementById("result").innerText = result;

}


function calculateBMI(){

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

height = height / 100;

let bmi = weight / (height * height);

let category="";

if(bmi < 18.5){

category = "Underweight";

}
else if(bmi >= 18.5 && bmi < 24.9){

category = "Normal Weight";

}
else if(bmi >= 25 && bmi < 29.9){

category = "Overweight";

}
else{

category = "Obese";

}

document.getElementById("bmiResult").innerText =
"BMI: " + bmi.toFixed(2) + " | Category: " + category;

}



function generateDiet(){

let goal = document.getElementById("dietGoal").value;

let plan="";

if(goal == "weightloss"){

plan = "Breakfast: Oats + Fruits\nLunch: Brown rice + Vegetables\nDinner: Salad + Soup";

}

else if(goal == "muscle"){

plan = "Breakfast: Eggs + Milk\nLunch: Rice + Chicken/Paneer\nDinner: Protein shake + Vegetables";

}

else if(goal == "healthy"){

plan = "Breakfast: Fruits + Nuts\nLunch: Balanced meal (Rice, Dal, Vegetables)\nDinner: Light meal + Salad";

}

else{

plan = "Please select a goal.";

}

document.getElementById("dietResult").innerText = plan;

}



function generateExercise(){

let goal = document.getElementById("exerciseGoal").value;

let workout="";

if(goal == "weightloss"){

workout = "Warm-up: 5 min\nCardio: 20 min running or cycling\nExercise: 15 min skipping\nCool down: 5 min stretching";

}

else if(goal == "fitness"){

workout = "Warm-up: 5 min\nExercise: 15 push-ups, 20 squats, 20 jumping jacks\nCardio: 15 min brisk walking";

}

else if(goal == "strength"){

workout = "Warm-up: 5 min\nExercise: Push-ups, Pull-ups, Dumbbell training\nSets: 3 sets each exercise";

}

else{

workout = "Please select a fitness goal.";

}

document.getElementById("exerciseResult").innerText = workout;

}


function saveProfile(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let gender = document.getElementById("gender").value;

localStorage.setItem("userName", name);
localStorage.setItem("userAge", age);
localStorage.setItem("userGender", gender);

document.getElementById("profileMsg").innerText = "Profile Saved Successfully";

}


function loadDashboard(){

document.getElementById("dname").innerText =
localStorage.getItem("userName");

document.getElementById("dage").innerText =
localStorage.getItem("userAge");

document.getElementById("dgender").innerText =
localStorage.getItem("userGender");

}
function registerUser(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let password = document.getElementById("password").value;
let profession = document.getElementById("profession").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("phone",phone);
localStorage.setItem("password",password);
localStorage.setItem("profession",profession);

alert("Registration Successful");

window.location.href="login.html";

}


function loginUser(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");

if(email === storedEmail && password === storedPassword){

window.location.href="dashboard.html";

}
else{

alert("Invalid Login");

}

}

function loadDashboard(){

document.getElementById("dname").innerText =
localStorage.getItem("name");

document.getElementById("demail").innerText =
localStorage.getItem("email");

document.getElementById("dphone").innerText =
localStorage.getItem("phone");

document.getElementById("dprofession").innerText =
localStorage.getItem("profession");

}
function loadHealthChart(){

const ctx = document.getElementById('healthChart');

if(!ctx) return;

new Chart(ctx,{
type:'line',
data:{
labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets:[{
label:'Exercise Minutes',
data:[20,30,40,35,50,60,45],
borderColor:'#1e88e5',
fill:false
}]
},
options:{
responsive:true
}
});

}

window.onload=function(){

if(typeof loadDashboard === "function"){
loadDashboard();
}

loadHealthChart();

};

function generateReport(){

let name = localStorage.getItem("name");
let symptoms = document.getElementById("symptoms").value;

let advice="";

if(symptoms.includes("fever")){
advice="Possible viral infection. Drink fluids and take rest.";
}
else if(symptoms.includes("cough")){
advice="Possible cold or flu. Stay hydrated.";
}
else{
advice="Maintain a healthy diet and exercise regularly.";
}

let report=`

Health Report

Name: ${name}

Symptoms: ${symptoms}

AI Advice:
${advice}

`;

document.getElementById("reportResult").innerText=report;

}
function downloadPDF(){

const { jsPDF } = window.jspdf;

let doc = new jsPDF();

let text = document.getElementById("reportResult").innerText;

doc.text(text,20,20);

doc.save("Health_Report.pdf");

}
function startVoice(){

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event){

let speech = event.results[0][0].transcript;

document.getElementById("userInput").value = speech;

};

}function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}function startVoice(){

const micButton = document.querySelector(".mic-btn");

if(!('webkitSpeechRecognition' in window)){
alert("Voice recognition not supported");
return;
}

const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

/* start animation */

micButton.classList.add("recording");

recognition.start();

recognition.onresult = function(event){

let speech = event.results[0][0].transcript;

document.getElementById("userInput").value = speech;

};

/* stop animation */

recognition.onend = function(){
micButton.classList.remove("recording");
};

}
function animateCounter(id, target){

let count = 0;

let interval = setInterval(function(){

count++;

document.getElementById(id).innerText = count;

if(count >= target){
clearInterval(interval);
}

},20);

}

window.addEventListener("load",function(){

if(document.getElementById("users")){

animateCounter("users",300);
animateCounter("symptoms",700);
animateCounter("reports",250);
animateCounter("accuracy",92);

}

});
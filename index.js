//WHEN THE INPUTS ARE MORE THAN THEY ARE SUPPOSE TO BE
document.querySelector(".days").addEventListener("input", daysInput);
function daysInput() {
  let day = parseInt(document.querySelector(".days").value);
     if ( day > 31 ) {
      document.querySelector(".days-error").innerText = "Must be a valid day";
      document.getElementById('day').style.color = "red";
      document.getElementById('dayItp').style.borderColor = "red";
}else{
  document.querySelector(".days-error").innerText = "";
  document.getElementById('day').style.color = "black";
  document.getElementById('dayItp').style.borderColor = "black";
}
}
document.querySelector(".months").addEventListener("input", monthsInput);
function monthsInput() {
  let month = parseInt(document.querySelector(".months").value);
     if ( month > 12 ) {
      document.querySelector(".months-error").innerText = "Must be a valid month";
      document.getElementById('month').style.color = "red";
      document.getElementById('monthItp').style.borderColor = "red";
}else{
  document.querySelector(".months-error").innerText = "";
  document.getElementById('month').style.color = "black";
  document.getElementById('monthItp').style.borderColor = "black";
}
}
document.querySelector(".years").addEventListener("input", yearsInput);
function yearsInput() {
  let year = parseInt(document.querySelector(".years").value);
     if ( year > 2023 ) {
      document.querySelector(".years-error").innerText = "Must be in the past";
      document.getElementById('year').style.color = "red";
      document.getElementById('yearItp').style.borderColor = "red";
}else{
  document.querySelector(".years-error").innerText = "";
  document.getElementById('year').style.color = "black";
  document.getElementById('yearItp').style.borderColor = "black";
}
}
//THIS PART IS FOR THE DAYS THAT ARE LESS THAN 31
document.querySelector(".btn").addEventListener("click", dateError);
function dateError() {
  let day = parseInt(document.querySelector(".days").value);
  let month = parseInt(document.querySelector(".months").value);
    let year = parseInt(document.querySelector(".years").value);
if ( day > 28 && month == 2 ) {
  document.querySelector(".days-error").innerText = "Must be a valid date";
    document.getElementById('day').style.color = "red";
    document.getElementById('month').style.color = "red";
    document.getElementById('year').style.color = "red";
    document.getElementById('dayItp').style.borderColor = "red";
    document.getElementById('monthItp').style.borderColor = "red";
    document.getElementById('yearItp').style.borderColor = "red";
}else if ( day > 30 && month == 4) {
  document.querySelector(".days-error").innerText = "Must be a valid date";
    document.getElementById('day').style.color = "red";
    document.getElementById('month').style.color = "red";
    document.getElementById('year').style.color = "red";
    document.getElementById('dayItp').style.borderColor = "red";
    document.getElementById('monthItp').style.borderColor = "red";
    document.getElementById('yearItp').style.borderColor = "red";
}else if ( day > 30 && month == 6) {
  document.querySelector(".days-error").innerText = "Must be a valid date";
    document.getElementById('day').style.color = "red";
    document.getElementById('month').style.color = "red";
    document.getElementById('year').style.color = "red";
    document.getElementById('dayItp').style.borderColor = "red";
    document.getElementById('monthItp').style.borderColor = "red";
    document.getElementById('yearItp').style.borderColor = "red";
}else if ( day > 30 && month == 9) {
  document.querySelector(".days-error").innerText = "Must be a valid date";
    document.getElementById('day').style.color = "red";
    document.getElementById('month').style.color = "red";
    document.getElementById('year').style.color = "red";
    document.getElementById('dayItp').style.borderColor = "red";
    document.getElementById('monthItp').style.borderColor = "red";
    document.getElementById('yearItp').style.borderColor = "red";
}else if ( day > 30 && month == 11) {
  document.querySelector(".days-error").innerText = "Must be a valid date";
    document.getElementById('day').style.color = "red";
    document.getElementById('month').style.color = "red";
    document.getElementById('year').style.color = "red";
    document.getElementById('dayItp').style.borderColor = "red";
    document.getElementById('monthItp').style.borderColor = "red";
    document.getElementById('yearItp').style.borderColor = "red";
}else {
  document.querySelector(".days-error").innerText = "";
  document.getElementById('day').style.color = "black";
  document.getElementById('dayItp').style.borderColor = "black";
  document.querySelector(".months-error").innerText = "";
  document.getElementById('month').style.color = "black";
  document.getElementById('monthItp').style.borderColor = "black";
  document.querySelector(".years-error").innerText = "";
  document.getElementById('year').style.color = "black";
  document.getElementById('yearItp').style.borderColor = "black";
}
}
//THIS IS THE CALULATION PART
document.querySelector(".btn").addEventListener("click", calculate);
function calculate() {
  let day = parseInt(document.querySelector(".days").value);
  let month = parseInt(document.querySelector(".months").value);
    let year = parseInt(document.querySelector(".years").value);
const date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

let yearOtp = currentYear - year
document.querySelector(".year-ans").innerText = yearOtp;
let monthOtp = currentMonth - month
document.querySelector(".month-ans").innerText = monthOtp;
let dayOtp = currentDay - day
document.querySelector(".day-ans").innerText = dayOtp;

if ( dayOtp < 0  && monthOtp < 0 ) {
  let newDayOtp = (( currentDay - day ) + 31);
  document.querySelector(".day-ans").innerText = newDayOtp;
 let newMonthOtp = (monthOtp - 1) + 12;
 document.querySelector(".month-ans").innerText = newMonthOtp;
 let newYearOtp = yearOtp -  1;
 document.querySelector(".year-ans").innerText = newYearOtp;
}else if ( dayOtp < 0 && monthOtp == 0 ) {
  let newDayOtp = (( currentDay - day ) + 31);
  document.querySelector(".day-ans").innerText = newDayOtp;
  let newMonthOtp = ((monthOtp - 1) +12 );
  document.querySelector(".month-ans").innerText = newMonthOtp;
  document.querySelector(".month-ans").innerText = newMonthOtp;
  let newYearOtp = yearOtp -  1;
document.querySelector(".year-ans").innerText = newYearOtp;
}else if ( dayOtp < 0 && monthOtp > 0 ) {
  let newDayOtp = (( currentDay - day ) + 31);
  document.querySelector(".day-ans").innerText = newDayOtp;
  let newMonthOtp = monthOtp - 1;
  document.querySelector(".month-ans").innerText = newMonthOtp;
}else if ( dayOtp >= 0 && monthOtp < 0 ) {
  let newMonthOtp = monthOtp + 12;
  document.querySelector(".month-ans").innerText = newMonthOtp;
  let newYearOtp = yearOtp -  1;
document.querySelector(".year-ans").innerText = newYearOtp;
}

}

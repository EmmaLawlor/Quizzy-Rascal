/*jshint esversion: 6 */

const result = document.getElementById('result');
 
 
//To do: fix code to store user score and display on result page
function displayUserResult() {
 
   result.innerText = localStorage.getItem('userResult');
}
 
 
displayUserResult();

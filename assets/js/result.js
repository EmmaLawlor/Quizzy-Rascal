/*jshint esversion: 6 */

const result = document.getElementById('result');

function displayUserResult() {

    result.innerText = localStorage.getItem('userResult');
}

displayUserResult();

function setupFormHandler() {
    h1 = document.querySelector('h1');
const form = document.querySelector('#myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form submitted')
    h1.textContent = "Dof Dof"
})
}

document.addEventListener("DOMContentLoaded", function () {
    
    setupFormHandler();
});
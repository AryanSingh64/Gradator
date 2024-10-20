const loader1 = document.getElementById('load');


const buttonc = document.getElementById('drop1');
const buttond = document.getElementById('drop2');
const buttone = document.getElementById('drop3');
const buttonf = document.getElementById('drop4');
const buttong = document.getElementById('drop5');
const buttonh = document.getElementById('drop6');



function changeLoaderClass(newClass) {
  // Remove all loader classes first
  loader1.className = ''; //resetting class
  
  // Add the new class to loader1
  loader1.classList.add(newClass);
}

// Add event listeners to the buttons
buttonc.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader');
});

buttond.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader2');
});

buttone.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader3');
});

buttonf.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader4');
});

buttong.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader5');
});

buttonh.addEventListener('click', function(event) {
  event.preventDefault();
  changeLoaderClass('loader6');
});
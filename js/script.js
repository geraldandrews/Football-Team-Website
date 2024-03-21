const btn = document.querySelector('.btn');
const links = document.querySelector('.nav-links');
const link = document.querySelectorAll('#page');

hamburger.addEventListener('click', function(e) {
   hamburger.classList.toggle('cross');
});
 
btn.addEventListener('click', function () { 
   if (links.classList.contains('show-links')) {
       links.classList.remove('show-links');
   } else {
      links.classList.add('show-links');
   }

   event.preventDefault()
});

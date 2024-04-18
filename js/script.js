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

link.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
   hamburger.classList.toggle('cross');
   links.classList.remove('show-links');
}

// Page Transition //
document.addEventListener("DOMContentLoaded", () => {
   const anchors = document.querySelectorAll('#page'); 
 
   for (let i = 0; i < anchors.length; i++) {
     const anchor = anchors[i];
 
      anchor.addEventListener('click', e => {
         e.preventDefault();
         let target = e.target.href;
 
         setTimeout(() => { 
           window.location.href = target; 
         }, 400)
      });
   }
});


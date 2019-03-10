const btn = document.getElementById('btn'),
nav = document.getElementById('nav');
btn.addEventListener('click', show);
const navH = nav.scrollHeight.toString() + 'px'; 
 // x = navH.toString(); 
 function show(){
 	nav.classList.toggle('drop');
 	nav.classList.contains('drop') ? nav.style.height = navH : nav.style.height = '0px';
 }



const burger=document.querySelector('.burger');const navlinks=document.querySelector('.navlinks');
if(burger){burger.addEventListener('click',()=>{const show=navlinks.style.display==='block';navlinks.style.display=show?'none':'block';});}

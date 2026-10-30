// Mobile menu
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'))}

// Scroll reveal
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Redbubble redirect for any element with .to-redbubble or .product or .shop-btn or .design
const RB='https://www.redbubble.com/people/ChaizeCreates/shop';
document.querySelectorAll('.to-redbubble, .product, .shop-btn, .design').forEach(el=>{
  el.style.cursor='pointer';
  el.addEventListener('click',(e)=>{ e.preventDefault(); window.open(RB,'_blank','noopener'); });
});

// Contact form (front-end only)
const form=document.getElementById('contact-form');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();alert('Thanks for reaching out! (Hook this form up to your email service.)');form.reset();});}

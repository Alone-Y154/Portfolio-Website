$(document).on('click','.nav', function() {

  $('.nav').removeClass('active');
  $(this).addClass('active');

});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('drop');
});


window.addEventListener('scroll', () => {
  let current = '';
  // console.log(pageYOffset);
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight/3)) {
      current = section.getAttribute('id');
    }
    // console.log(sectionTop);
  });
  document.querySelectorAll('.nav-list').forEach((a) => {
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  });
});


var typed = new Typed('.yashwanth-krishna', {
   strings: ["Yashwanth Krishna."],
   typeSpeed:100,
   backSpeed:100,
   loop:true,showCursor: false
 });

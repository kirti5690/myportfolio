$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slide-dots',
        dotsClass:'dots', 
        customPaging: function(slider, i) {
            return '<button></button>'; // This will create the custom dots using CSS
        }
    });

let hambarger=document.querySelector('.hambarger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');




hambarger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');

}); 


document.addEventListener('DOMContentLoaded', function() {
  // Find the "Download CV" button by its class name
  const downloadBtn = document.querySelector('.download-cv-btn');

  // Replace 'your_cv.pdf' with the actual URL of your CV file
  const cvURL = 'https://www.example.com/path/to/your_cv.pdf';

  // Attach a click event listener to the button
  downloadBtn.addEventListener('click', function() {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvURL;
    link.target = '_blank'; // Open the file in a new tab
    link.download = 'your_cv.pdf'; // Set the suggested name for the downloaded file
    link.click(); // Simulate a click on the anchor to start the download
  });
});
});
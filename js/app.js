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
    const cvURL = 'cv\resumee4 (1).pdf';
  
    // Attach a click event listener to the button
    downloadBtn.addEventListener('click', function() {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = cvURL;
      link.target = '_blank'; // Open the file in a new tab
      link.download = 'resumee4.pdf'; // Set the suggested name for the downloaded file
      link.click(); // Simulate a click on the anchor to start the download
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send-btn");
    
    sendButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
      // Here you can perform further processing, like sending an HTTP request
      // to a server to actually send the message.
      // You can use fetch or other methods to achieve this.
      
      // For demonstration purposes, let's just log the data to the console.
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      
      // You can also show a confirmation message to the user.
      alert("Message sent successfully!");
      
      // Clear the form fields after sending the message.
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  });
  
});
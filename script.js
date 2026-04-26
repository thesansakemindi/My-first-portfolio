document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("responseMsg").innerText = 
    "Thank you! Your message has been received.";
});

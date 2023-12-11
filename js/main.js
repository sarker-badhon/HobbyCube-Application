function showSignInPage() {
    document.getElementById('signInPage').style.display = 'block';
    document.getElementById('joinPage').style.display = 'none';
  }

  function showJoinPage() {
    document.getElementById('signInPage').style.display = 'none';
    document.getElementById('joinPage').style.display = 'block';
  }



  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('far', 'fa-eye');
      eyeIcon.classList.add('fas', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fas', 'fa-eye-slash');
      eyeIcon.classList.add('far', 'fa-eye');
    }
  }


document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
      
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  });
});
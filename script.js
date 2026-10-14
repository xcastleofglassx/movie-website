
//watchlist script //
document.querySelectorAll('.watchlist-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const card = this.closest('.moviecards');

  const movieData = {
    id: card.getAttribute('data-movie-id'),
    poster: card.getAttribute('data-movie-poster'),
    title: card.querySelectorAll('h6 a').textContent,
    rate: card.querySelectorAll('.fs-5').textContent,
    genre: card.querySelectorAll('.bi-folder-fill + p').textContent,
    quality: card.querySelectorAll('.bi-display-fill + p').textContent,
    actors: card.querySelectorAll('.bi-people-fill + p').textContent,
    synopsis: card.querySelectorAll('.bi-list + p').textContent
  };

    
      let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  
      const index = watchlist.findIndex(item => item.id === movieData.id);
      
      // If the movie already exists, pressing + button will remove the movie from watchlist //
      
      if (index === -1) {
        watchlist.push(movieData);
        this.classList.remove('bi-plus');
        this.classList.add('bi-check');
        alert('movie added to your watchlist')
      } else {
        watchlist.splice(index, 1);
        this.classList.remove('bi-check');
        this.classList.add('bi-plus');
        alert('movie removed from your watchlist')
      }
  
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
    });
  });

// dark mode script//
  function myFunction() {
     var element = document.body;
     element.classList.toggle("dark-mode");
  }


  // signup-signin form 

  const signInBtn = document.getElementById('signInBtn');
    const emailInput = document.getElementById('EmailDropDown');
    const passwordInput = document.getElementById('EmailPass');
    const errorMessage = document.getElementById('errorMessage');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // stopping dropdown closing after clicking on button "login"
    signInBtn.addEventListener('click', function(event) {
      event.stopPropagation(); 

      const email = emailInput.value;
      const password = passwordInput.value;

      // Checks if email is valid
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter valid Email! ";
        errorMessage.style.color="red";
        return;
      }

      // Checks if password is valid
      if (!password) {
        errorMessage.textContent = "Please enter correct Password!";
        errorMessage.style.color="red";
        return;
      }

      // If user filled valid Email and Pass
      errorMessage.textContent = "";
      alert("Signed in!");
      dropdownMenu.style.display = 'none'; // close drop down after signing in
    });

    // stop dropdown to get closed by entering "sign in"
    dropdownMenu.addEventListener('click', function(event) {
      event.stopPropagation(); // using this because by clicking signin it would have just close the signin progress
    });

    // clicking outside of the dropdown will close the dropdown...
    document.addEventListener('click', function() {
      dropdownMenu.style.display = 'none';
    });
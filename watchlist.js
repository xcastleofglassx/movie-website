document.addEventListener('DOMContentLoaded', function() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const container = document.getElementById('watchlistContainer');
  
    // Checks the watchlist for content. If it’s empty, display a message. Otherwise, display the movie posters only...//

    if (watchlist.length === 0) {
      container.innerHTML = "<p class='text-center w-100'> watchlist is empty</p>";
    } else {
      watchlist.forEach(function(movie) {
        const movieItem = document.createElement('div');
        movieItem.classList.add('card');
        movieItem.innerHTML = `
         <a> <img src="${movie.poster}" class="mb-2" style="width:150px; padding:2rem;"> </a>`;
        container.appendChild(movieItem);
      });
    }
  });
  function goHome() {
    window.location.href = "index.html";
  }

  // I found out my code has a bug. some movies might stuck in watchlist even when we hit addtowatch button so I made a function for removing the whole watchlist.
  function resetWatchlist() {
    localStorage.removeItem('watchlist'); 
    alert('Watchlist has been reset!');
  
    location.reload();
  }
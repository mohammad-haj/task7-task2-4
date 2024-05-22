const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    rating = index + 1;
    updateStars();
  });

  star.addEventListener('mouseover', () => {
    updateStars(index + 1);
  });

  star.addEventListener('mouseout', () => {
    updateStars();
  });
});

function updateStars(hoverRating = rating) {
  stars.forEach((star, index) => {
    if (index < hoverRating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}
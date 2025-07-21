document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".pricing-card");
  let activeIndex = 0;
  let intervalId;
  const autoRotateInterval = 3000; // 3 seconds

  function updateActiveCard() {
    cards.forEach((card, index) => {
      card.classList.remove("card-active");
      card.style.zIndex = "1"; // Reset z-index for all
    });
    // Apply active class to the current active card
    if (cards[activeIndex]) {
      cards[activeIndex].classList.add("card-active");
      cards[activeIndex].style.zIndex = "10"; // Bring active card to front
    }
    activeIndex = (activeIndex + 1) % cards.length;
  }

  function startAutoRotate() {
    stopAutoRotate(); // Clear any existing interval
    intervalId = setInterval(updateActiveCard, autoRotateInterval);
  }

  function stopAutoRotate() {
    clearInterval(intervalId);
  }

  // Initial active card setup
  updateActiveCard(); // Set the first active card immediately
  startAutoRotate();

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      stopAutoRotate();
      cards.forEach((c) => {
        c.classList.remove("card-active"); // Remove auto-active class
        c.classList.remove("card-hovered"); // Ensure only one hovered
        c.style.zIndex = "1"; // Reset z-index for all
      });
      card.classList.add("card-hovered");
      card.style.zIndex = "10"; // Bring hovered card to front
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hovered");
      // Find the index of the card that was just hovered
      const hoveredIndex = Number.parseInt(card.dataset.index);
      // Set the next activeIndex to be the one after the hovered card
      activeIndex = (hoveredIndex + 1) % cards.length;
      // Immediately update to the next active card, then restart auto-rotation
      updateActiveCard();
      startAutoRotate();
    });
  });
});

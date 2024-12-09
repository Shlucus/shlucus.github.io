let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});


document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  const hoverImage = thumbnail.getAttribute("data-hover");
  thumbnail.style.setProperty("--hover-image", `url(${hoverImage})`);

  // Apply hover image dynamically
  thumbnail.addEventListener("mouseenter", () => {
    thumbnail.style.backgroundImage = `url(${hoverImage})`;
  });

  thumbnail.addEventListener("mouseleave", () => {
    thumbnail.style.backgroundImage = "none"; // Reset when not hovered
  });
});

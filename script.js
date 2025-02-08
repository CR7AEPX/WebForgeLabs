const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document
      .querySelectorAll(".animate")
      .forEach((item) => observer.observe(item));
  });

  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalClose = document.getElementById("modalClose");

  portfolioCards.forEach((card) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.getAttribute("data-title");
      modalDescription.textContent = card.getAttribute("data-description");
      modal.classList.add("active");
    });
  });
  modalClose.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Ваше сообщение отправлено!");
    e.target.reset();
  });

  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  let particlesArray = [];
  const particlesCount = 100;
  let canvasWidth, canvasHeight;

  function resizeCanvas() {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvasWidth) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > canvasHeight) this.speedY = -this.speedY;
    }
    draw() {
      ctx.fillStyle = "rgba(233, 30, 99, 0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    for (let i = 0; i < particlesCount; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    particlesArray.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
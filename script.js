if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
  
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
  });
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  const projectsData = [
    {
      "title": "Проект Alpha",
      "description": "Революционная платформа для автоматизации бизнес-процессов.",
      "image": "https://via.placeholder.com/400x300"
    },
    {
      "title": "Проект Beta",
      "description": "Инновационное мобильное приложение для социальных взаимодействий.",
      "image": "https://via.placeholder.com/400x300"
    },
    {
      "title": "Проект Gamma",
      "description": "Интерактивный веб-сайт с динамическим контентом.",
      "image": "https://via.placeholder.com/400x300"
    }
  ];
  
  function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsData.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card animate';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button onclick="alert('Подробнее о ${project.title}')">Подробнее</button>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }
  document.addEventListener('DOMContentLoaded', loadProjects);
  
  function animateOnScroll() {
    const animatables = document.querySelectorAll('.animate');
    animatables.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);

  const firebaseConfig = {
    apiKey: "AIzaSyANMc165RADNQAAFqQ-m9FAyBzjXXLpmrs",
    authDomain: "login-sign-id.firebaseapp.com",
    projectId: "login-sign-id",
    storageBucket: "login-sign-id.appspot.com",
    messagingSenderId: "756728671188",
    appId: "1:756728671188:web:56566c29a3c175ef984441",
    measurementId: "G-9V5EY62X8W"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  document.querySelector('.login-btn').addEventListener('click', () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.location.href = "main.html";
      } else {
        window.location.href = "login.html";
      }
    });
  });
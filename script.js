// Simple SPA Router
const app = document.getElementById("app");

function renderPage(path) {
  let content = "";

  switch (path) {
    case "/quiz1":
    content = `
        <div class="container home">
        <div class="profile-section">
            
            <!-- KOLOM KIRI -->
            <div class="profile-left">
            <img src="assets/myPhoto.jpg" alt="Profile Photo" class="profile-photo">
            <div class="social-links">
                <a href="https://instagram.com/hasemmssyr_" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://wa.me/6285227763718" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a href="https://github.com/HisyamSyafaRaditya" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>

            <!-- KOLOM KANAN -->
            <div class="profile-right">
            <h1>Welcome to My Website</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
            </p>
            </div>

        </div>
        </div>
    `;
    break;



    case "/quiz1/profile":
    content = `
        <div class="container">
        <h2>About Me</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
        </div>
    `;
    break;


    case "/quiz1/hometown":
      content = `
        <div class="container">
          <h2>My Hometown</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      `;
      break;

case "/quiz1/food":
  content = `
    <div class="container">
      <h2>Local Food</h2>
      <p>My hometown has some delicious local foods. Here are my favorites:</p>
      <div class="grid">
        <div class="card">
          <img src="assets/myPhoto.jpg" alt="Profile Photo" class="profile-photo">
          <h3>Getuk pisang</h3>
          <p>Lorem ipsum.</p>
        </div>

        <div class="card">
          <img src="assets/Tahu.jpg" alt="Food 2" class="food-img" />
          <h3>Tahu takwa</h3>
          <p>Lorem ipsum.</p>
        </div>

        <div class="card">
          <img src="assets/Pecel.jpeg" alt="Food 3" class="food-img" />
          <h3>Nasi pecel tumpang</h3>
          <p>Lorem ipsum.</p>
        </div>
      </div>
    </div>
  `;
  break;


  case "/quiz1/tourist":
    content = `
      <div class="container">
        <h2>Tourist Places</h2>
        <p>Some amazing tourist attractions in my hometown:</p>
        <div class="grid">
          <div class="card">
            <img src="gumul.jpg" alt="Gumul Monument" class="place-img">
            <h3>Monumen Simpang Lima Gumul</h3>
            <p>A famous landmark often called the Arc de Triomphe of Kediri, perfect for photography.</p>
          </div>
          <div class="card">
            <img src="kelud.jpg" alt="Mount Kelud" class="place-img">
            <h3>Gunung Kelud</h3>
            <p>A historical volcano offering breathtaking views and adventure for visitors.</p>
          </div>
          <div class="card">
            <img src="kping.jpg" alt="Kampung Inggris" class="place-img">
            <h3>Kampung Inggris Pare</h3>
            <p>A well-known village for learning English, attracting students from all over Indonesia.</p>
          </div>
        </div>
      </div>
    `;
    break;


    default:
      content = `
        <div class="container">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
        </div>
      `;
  }

  app.classList.remove("show");
  setTimeout(() => {
    app.innerHTML = content;
    app.classList.add("show");
  }, 200);
}

// Navigate without reload
function navigate(event) {
  event.preventDefault();
  const path = event.target.getAttribute("href");
  window.history.pushState({}, "", path);
  renderPage(path);
}

// Event listener for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", navigate);
});

// Load initial page
renderPage(window.location.pathname);

// Handle browser back/forward
window.onpopstate = () => renderPage(window.location.pathname);

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" type="text/css">
  <title>CV#2. HTML, CSS & Git Basics. Stanislau Yarotski</title>
</head>

<body>

  <header class="page-header">
    <a id="contacts"></a>
    <div class="container">
      <ul class="header-contacts-list">
        <li class="header-contacts-list-item">Contacts:</li>
        <li class="header-contacts-list-item">
          <a class="header-email" href="mailto:stas_yar@tut.by">
            <img class="header-icon" src="./image/icon/icon-email-header.svg" alt="">
            <span>stas_yar@tut.by</span>
          </a>
        </li>
        <li class="header-contacts-list-item">
          <a class="header-phone" href="tel:+375292954762">
            <img class="header-icon" src="./image/icon/icon-phone-header.svg" alt="">
            <span>+375(29)2954762</span>
          </a>
        </li>
        <li class="header-contacts-list-item">
          <a class="header-discord" href="https://discordapp.com/users/399246428871983114/" target="_blank">
            <img class="header-icon" src="./image/icon/icon-discord-header.svg" alt="">
            <span>truecki#6712</span>
          </a>
        </li>
        <li class="header-contacts-list-item">
          <a class="header-linkedin" href="https://www.linkedin.com/in/yarotski-stanislau/" target="_blank">
            <img class="header-icon" src="./image/icon/icon-linkedin-header.svg" alt="">
            <span>Stanislau Yarotski</span>
          </a>
        </li>
      </ul>
    </div>
  </header>

  <section class="hero-image">
    <div class="container">
      <h1 class="heading">Stanislau Yarotski</h1>
      <p>Junior Frontend Developer</p>
    </div>
  </section>

  <section class="nav-image">
    <div class="container">
      <h2>Navigation:</h2>
      <div class="burger">
        <span></span>
      </div>
      <nav>
        <ul class="nav-menu">
          <li class="list-item"><a class="list-item-link" href="#contacts">Contacts</a></li>
          <li class="list-item"><a class="list-item-link" href="#about_me">About myself</a></li>
          <li class="list-item"><a class="list-item-link" href="#skills">Skills</a></li>
          <li class="list-item"><a class="list-item-link" href="#code">Code example</a></li>
          <li class="list-item"><a class="list-item-link" href="#education">Education</a></li>
          <li class="list-item"><a class="list-item-link" href="#lang">Languages</a></li>
          <li class="list-item"><a class="list-item-link" href="#project">My projects</a></li>
        </ul>
        <div class="nav-image-overhide"></div>
      </nav>
    </div>
  </section>

  <main class="intro container">
    <div class="container">
      <a id="about_me"></a>
      <div class="user-image-container">
        <img class="user-image" src="image/user-giraffe.png" alt="My Avatar">
      </div>
      <h2 title="About myself" class="about">About myself</h2>
      <p>My name is Stanislau. I'm 30. And I'm a giraffe... so... If you need something that is high up, I can help you
        get it :)</p>
      <p>Okay, this is just a joke for the sake of being able to use this perfect image. It's my avatar. I did it
        myself. I like handling pictures and everything that is related to design. And I enjoy coding, too. So I got
        interested to Frontend Development.</p>
      <p>I am interested in Frontend Development because this occupation provides endless possibilities for professional
        growth, besides there is a huge amount of free high quality resources for self-education and a large community
        of developers.</p>
      <p>I believe, that my ability to learn and to gain new skills will lead me through this path of becoming a
        proficient Frontend Developer.</p>
      <a id="skills"></a>
      <h2 title="What can I do already?">What can I do already?</h2>
      <ul>
        <li>I have skills in Figma, Adobe Photoshop, Adobe Illustrator</li>
        <li>... have C,C++,C# basic skills</li>
        <li>... QA basic skills</li>
        <li>... HTML5&CSS</li>
        <li>... JS basic skills</li>
        <li>... and I know the working basics with Git, GitHub</li>
      </ul>
      <a id="code"></a>
      <h2 title="Code example">Code example</h2>
      <div>
        <pre class="code"><code class="javascript">function multiply(a, b){
    return a * b;
}
let result = multiply(5, 3);
alert(result);</code></pre>
      </div>
      <a id="education"></a>
      <h2 title="Education">Education</h2>
      <ul>
        <li>Polotsk State University, Faculty of Information Technologies - Software Engineer</li>
        <li>Courses:
          <ul>
            <li>Andersen. Сourse «Basics of Software Testing»</li>
            <li>html academy. Сourse «Introduction to HTML and CSS»</li>
            <li>Yandex Practicum. Сourse «Wed Developer»</li>
            <li>RS School. Course «JavaScript/Front-end. Stage 0»</li>
            <li>RS School. Course «JavaScript/Front-end. Stage 1»</li>
            <li>RS School. Course «JavaScript/Front-end. Stage 2» (in progress)</li>
            <li>RS School. Course «NodeJS» (in progress)</li>
          </ul>
        </li>
      </ul>
      <a id="lang"></a>
      <h2 title="Languages">Languages</h2>
      <ul>
        <li>Russian - Native</li>
        <li>English - A2</li>
      </ul>
      <a id="project"></a>
      <h2 title="My projects">My projects</h2>
      <section class="projects">
        <article class="project">
          <div class="project-name procrastinate-color">
            <a class="project-link" href="https://badikgit.github.io/portfolio-test/source/project-procrastinate/"
              target="_blank">
              <span>Procrastinate.<i></i></span>
            </a>
            <a class="project-link-image" href="https://badikgit.github.io/portfolio-test/source/project-procrastinate/"
              target="_blank">
              <img class="project-image" src="./image/procrastinate.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>
        <article class="project">
          <div class="project-name portfolio-color">
            <a class="project-link" href="https://rolling-scopes-school.github.io/badikgit-JSFEPRESCHOOL/portfolio/"
              target="_blank">
              <span>Portfolio<i></i></span>
            </a>
            <a class="project-link-image"
              href="https://rolling-scopes-school.github.io/badikgit-JSFEPRESCHOOL/portfolio/" target="_blank">
              <img class="project-image" src="./image/portfolio.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>
        <article class="project">
          <div class="project-name movie-app-color">
            <a class="project-link" href="https://rolling-scopes-school.github.io/badikgit-JSFEPRESCHOOL/movie-app/"
              target="_blank">
              <span>Movie app<i></i></span>
            </a>
            <a class="project-link-image"
              href="https://rolling-scopes-school.github.io/badikgit-JSFEPRESCHOOL/movie-app/" target="_blank">
              <img class="project-image" src="./image/movie-app.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>
        <article class="project">
          <div class="project-name shelter-color">
            <a class="project-link"
              href="https://rolling-scopes-school.github.io/badikgit-JSFE2022Q1/shelter/pages/main/" target="_blank">
              <span>Shelter.<i></i></span>
            </a>
            <a class="project-link-image"
              href="https://rolling-scopes-school.github.io/badikgit-JSFE2022Q1/shelter/pages/main/" target="_blank">
              <img class="project-image" src="./image/shelter.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>
        <article class="project">
          <div class="project-name mem-color">
            <a class="project-link" href="https://badikgit.github.io/cssMemSlider/cssMemSlider/" target="_blank">
              <span>CSS Mem Slider<i></i></span>
            </a>
            <a class="project-link-image" href="https://badikgit.github.io/cssMemSlider/cssMemSlider/" target="_blank">
              <img class="project-image" src="./image/mem.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>
        <article class="project">
          <div class="project-name keyboard-color">
            <a class="project-link" href="https://badikgit.github.io/virtual-keyboard/" target="_blank">
              <span>Virtual Keyboard<i></i></span>
            </a>
            <a class="project-link-image" href="https://badikgit.github.io/virtual-keyboard/" target="_blank">
              <img class="project-image" src="./image/keyboard.jpg" alt="Procrastinate">
            </a>
          </div>
        </article>

      </section>
  </main>

  <footer class="page-footer">
    <span>© 2022</span>
    <a class="footer-github" href="https://github.com/badikgit/" target="_blank">
      <img src="./image/icon/icon-github-footer.svg" alt="" class="footer-icon">
      <span>badikgit</span>
    </a>
    <a class="footer-rsschool" href="https://rs.school/js/" target="_blank">
      <img src="https://rs.school/images/rs_school_js.svg" alt="" class="footer-icon">
    </a>
  </footer>
  <script src="index.js"></script>
</body>

</html>
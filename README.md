
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        box-sizing: border-box;
        overflow-x: clip;
        background-color: #f2f4f6;
    }

    html.active {
        overflow: hidden;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
        font-size: 16px;
        line-height: 32px;
        color: #222222;
        overflow-x: clip;
        overflow-inline: clip;
    }

    .intro-image {
      position: absolute;
      top: 0;
      left: 50%;
      height: 1080px;
      width: 2560px;
      object-fit: cover;
      transform: translateX(-50%);
      z-index: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .container {
        box-sizing: border-box;
        max-width: 928px;
        width: 100%;
        margin: 0 auto;
        padding: 0 32px;
    }

    .page-header {
        position: absolute;
        top: 0;
        background: linear-gradient(180deg, rgba(242, 244, 246, .8) 0%, rgba(242, 244, 246, .9) 20%, rgba(242, 244, 246, 1) 50%, rgba(242, 244, 246, .6) 80%, rgba(242, 244, 246, .1) 100%);
        padding: 1em 0;
        width: 100%;
    }

    .page-header .container,
    .page-footer .container {
        text-align: right;
        padding: 0;
    }

    .header-email,
    .header-phone,
    .header-discord,
    .header-linkedin {
        display: flex;
        gap: 5px;
        flex-wrap: nowrap;
        justify-content: flex-end;
        color: #288be6;
        text-decoration: none;
        transition: 0.3s;
        width: fit-content;
        position: relative;
        z-index: 10;
    }

    .header-email:hover,
    .header-phone:hover,
    .header-discord:hover,
    .header-linkedin:hover {
        transform: scale(1.1);
    }

    .header-contacts-list {
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
    }

    .header-contacts-list-item {
        display: flex;
        align-items: center;
        color: #288be6;
        text-decoration: none;
        padding: 0;
        margin: 0 1em;
    }

    .header-discord .header-icon,
    .header-linkedin .header-icon {
        padding: 6px;
        height: 20px;
    }

    .hero-image {
        margin-bottom: 0;
        animation: hero-image-scale 0.7s ease-out 0s 1 normal forwards;
    }

    @keyframes hero-image-scale {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    .hero-image .container {
        max-width: 1408px;
        text-align: center;
    }

    .heading {
        margin: 150px 0 20px;
        font-family: "Old Standard TT", "Times", "Times New Roman", serif;
        font-size: 88px;
        line-height: 120%;
        font-weight: 400;
    }

    .hero-image p {
        margin: 0;
        font-size: 1.5rem;
    }

    .intro {
        margin: 0 0 120px;
    }

    .intro .container {
        position: relative;
        background-color: #F2F4F6AA;
        padding-top: 60px;
        border-radius: 2em;
    }

    .subheading {
        margin: 0 0 56px;
        font-family: "Old Standard TT", "Times", "Times New Roman", serif;
        font-size: 64px;
        line-height: 80px;
        font-weight: 400;
        text-align: center;
    }

    .nav-image {
        height: 625px;
    }

    .nav-image .container {
        height: 600px;
        padding-top: 50px;
        font-size: 2.3rem;
        line-height: 120%;
        position: relative;
    }

    .nav-image .container h2 {
        animation: nav-image-h2-translateX 1.5s ease-in-out 0s 1 normal forwards;
    }

    @keyframes nav-image-h2-translateX {
        from {
            transform: translateX(200%);
        }
        50% {
            transform: translateX(200%);
        }
        to {
            transform: translateX(0%);
        }
    }

    .nav-menu {
        width: fit-content;
        animation: nav-image-nav-menu-translateX 2s ease-in-out 0s 1 normal;
        position: relative;
        z-index: 20;
    }

    @keyframes nav-image-nav-menu-translateX {
        from {
            transform: translateX(-450%);
        }
        50% {
            transform: translateX(-450%);
        }
        to {
            transform: translateX(0%);
        }
    }

    .nav-image-overhide {
        display: none;
    }

    .list-item {
        width: fit-content;
        padding: 5px 10px;
        transition: 0.3s;
    }

    .list-item:hover,
    .list-item:focus {
        color: #288be6;
        transform: scale(1.2);
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 2em;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    }

    .user-image-container {
        margin: 0 0 32px;
        height: 420px;
        width: 100%;
        position: absolute;
        top: -392px;
        right: calc(-100% + 605px);
        z-index: 0;
    }

    .user-image {
        max-height: 490px;
    }

    .container {
        max-width: 928px;
        margin: 0 auto;
        padding: 0 16px;
    }

    .list-item-link {
        color: inherit;
        text-decoration: none;
    }

    .intro h2 {
        box-sizing: border-box;
        margin: -0.7em 0 12px;
        padding: 2em 1em 0.2em;
        font-size: 32px;
        line-height: 120%;
        font-weight: 500;
        border-bottom: #222222 1px solid;
        border-width: thick;
        border-bottom-left-radius: 1.5em;
        position: relative;
        overflow-x: clip;
    }

    .intro .about {
        padding-top: 0.5em;
    }

    .intro h2::before {
        box-sizing: border-box;
        content: attr(title);
        margin: -0.5em 0 0 -1em;
        padding: 0.7em 1em 34px;
        width: fit-content;
        height: 1em;
        position: absolute;
        color: transparent;
        border-top: #222222 1px solid;
        border-width: thick;
        border-top-left-radius: 1em;
        border-top-right-radius: 3em;
        background-color: #0c4e8b22;
        z-index: 0;
    }

    .intro a {
        text-decoration: none;
    }

    .intro p,
    .intro li,
    .intro li ul {
        margin: 0 0 32px;
        font-size: 1.5rem;
    }

    pre,
    code {
        background-color: rgba(77, 157, 238, 0.025);
        border: 2px solid #29292929;
        border-radius: 10px;
        color: #2400bb;
        font-family: "Courier New", "Courier", monospace;
        line-height: 120%;
    }

    pre {
        padding: 5px;
    }

    code {
        padding: 2px 5px;
        font-size: 1.5rem;
    }

    pre code {
        background-color: transparent;
        border-radius: 0;
        border: none;
        padding: 5px;
    }


    /*Projects*/

    .projects {
        background-color: #555555;
        border-radius: 2em;
        padding: 1em 0;
        margin: 1em 0 2em;
        font-size: 1.3em;
    }

    .project {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 1em 0;
    }

    .project-link,
    .project-link-image {
        display: flex;
        transition: 0.3s;
    }

    .project-link {
        width: 100%;
    }

    .project-link span {
        margin: 0 auto;
        border: 2px solid #292929;
        border-radius: 10px;
        line-height: 120%;
        letter-spacing: 0em;
        padding: 0.5em 1em;
        transition: 0.3s;
        position: relative;
    }

    .procrastinate-color {
        color: white;
    }

    .portfolio-color {
        color: #bdae82;
    }

    .movie-app-color {
        color: #3c48a3;
    }

    .shelter-color {
        color: #F1CDB3;
    }

    .mem-color {
        color: cornflowerblue;
    }

    .keyboard-color {
        color: mediumturquoise;
    }

    .project-name .project-link i::after {
        content: "";
        display: block;
        position: absolute;
        height: 5px;
        width: 5px;
        border: 2px solid currentColor;
        background-color: #555555;
        top: 42px;
        left: 7%;
        transition: 0.3s;
    }

    .project-name .project-link i::before {
        content: "";
        display: block;
        position: absolute;
        height: 5px;
        width: 5px;
        border: 2px solid currentColor;
        background-color: #555555;
        top: -5px;
        left: 85%;
        transition: 0.3s all;
    }

    .project-name .project-link span:hover {
        letter-spacing: 0.3em;
        color: currentColor;
        border: 2px solid currentColor;
        box-shadow: 0 0 3em currentColor;
        font-weight: 700;
    }

    .project-name .project-link span:hover i::before {
        left: 7%;
    }

    .project-name .project-link span:hover i::after {
        left: 90%;
    }

    .project-name .project-link:hover+.project-link-image .project-image {
        box-shadow: 0 0 3em currentColor;
        transform: scale(1.3);
    }

    .project-name .project-link-image:hover .project-image {
        box-shadow: 0 0 3em currentColor;
        transform: scale(1.3);
    }

    .project-name {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-name code {
        height: fit-content;
    }

    .project-image {
        width: 50%;
        margin: 0 auto;
        transition: 0.3s;
    }


    /*Footer*/

    .page-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        background-color: #0c4e8b;
        color: #ffffff;
        font-size: 1.2em;
    }

    .page-footer a {
        margin-left: 1.5rem;
        color: inherit;
        text-decoration: none;
        background-repeat: no-repeat;
        background-position: left;
    }

    .footer-github,
    .footer-rsschool {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        transition: 0.3s;
    }

    .footer-rsschool .footer-icon {
        filter: invert(100%);
    }

    .footer-icon {
        height: 2em;
        padding-right: 0.5em;
    }

    .footer-github:hover,
    .footer-rsschool:hover {
        transform: scale(1.1);
    }


    /*Burger start*/

    .burger {
        display: none;
        background-color: #0c4e8b22;
        width: 37px;
        height: 36px;
        position: fixed;
        top: 7px;
        left: 10px;
        z-index: 50;
    }

    .burger span,
    .burger span::after,
    .burger span::before {
        content: "";
        position: fixed;
        top: 24px;
        left: 13px;
        background-color: black;
        width: 30px;
        height: 2px;
        transition: 0.3s;
    }

    .burger span::after {
        top: 36px;
    }

    .burger span::before {
        top: 12px;
    }

    .burger.active span::after {
        background-color: red;
        transform: rotate(45deg) translate(-10px, -8px);
    }

    .burger.active span::before {
        background-color: red;
        transform: rotate(-45deg) translate(-10px, 8px);
    }

    .burger.active span {
        background-color: transparent;
    }


    /*Burger end*/

    @media screen and (max-width: 1440px) {
        .intro .container {
            position: relative;
            background-color: #F2F4F6AA;
            padding-top: 60px;
            border-radius: 2em;
        }
        .nav-image {
            height: unset;
        }
        .nav-image .container {
            position: relative;
            font-size: 1.3rem;
            height: 425px;
            z-index: 15;
        }
        .user-image-container {
            position: absolute;
            top: -392px;
            right: calc(-100% + 605px);
            z-index: 0;
        }
    }

    @media screen and (max-width: 684px) {
        .header-phone .header-icon {
            padding-right: 4px;
        }
        .header-linkedin .header-icon,
        .header-email .header-icon {
            padding-right: 3px;
        }
        .header-discord .header-icon {
            padding-right: unset;
        }
        .header-contacts-list-item {
            font-size: 0.7rem;
        }
        .header-contacts-list-item:first-child {
            font-size: 1rem;
        }
        .heading {
            font-size: 50px;
        }
        .hero-image p {
            font-size: 1rem;
        }
        .project-name {
            flex-wrap: wrap;
            row-gap: 1em;
        }
        .project-image {
            width: 70%;
        }
    }

    @media screen and (max-width: 500px) {
        .burger {
            display: block;
            cursor: pointer;
        }
        .header-contacts-list-item:nth-child(n+3) {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            align-items: center;
        }
        .header-contacts-list-item span {
            min-width: 8em;
        }
        .heading {
            margin-top: 250px;
            font-size: 32px;
        }
        .nav-menu .list-item {
            list-style: none;
        }
        .nav-image .nav-menu {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: 1px solid rgba(43, 43, 43, 0.268);
            background-color: #0C4E8B22;
            backdrop-filter: blur(10px);
            border-radius: 5%;
            position: fixed;
            z-index: 20;
            height: 100vh;
            left: -100%;
            top: 0;
            padding-right: 0.5em;
            padding-left: 15%;
            padding-top: 3em;
            font-size: 1.2em;
            line-height: 2;
            display: flex;
            flex-direction: column;
            transition: left .5s;
        }
        .nav-image .nav-menu.active {
            left: -10%;
        }
        .list-item:hover,
        .list-item:focus {
            transform: unset;
        }
        .user-image {
            max-height: 300px;
        }
        .user-image-container {
            top: -205px;
            right: calc(-100% + 377px);
        }
        .intro h2,
        .intro p,
        .intro li,
        .intro li ul {
            margin: 0 0 16px;
            font-size: 1rem;
            line-height: 1.2;
        }
        .intro code {
            font-size: 0.75rem;
        }
        .intro h2::before {
            margin: -0.5em 0 0 -1em;
            padding: 0.7em 1em 1em 1.2em;
        }
        .nav-image {
            height: 350px;
        }
        .nav-image .container h2 {
            opacity: 0;
        }
        .nav-image-overhide.active {
            display: block;
            position: fixed;
            z-index: 15;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(43, 43, 43, 0.268);
            cursor: pointer;
        }
        .page-footer {
            width: 100%;
            flex-wrap: wrap;
            gap: 1em;
        }
    }
  </style>
  <img class="intro-image" src="image/hero-bg.jpg" alt="My Avatar">
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
      <img class="bodi" src="image/user-giraffe.png" alt="My Avatar">
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

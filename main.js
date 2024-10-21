// Gather current time and date from user's machine:
// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// And: https://dev.to/rsa/perfectly-localizing-date-time-with-intl-datetimeformat-ack
const todaysDate = new Date();
const currentDate = new Intl.DateTimeFormat("en-UK", {
  hourCycle: 'h23',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(todaysDate);

// TTY = Teletypewriter (TeleTYpewriter) is shown on any terminal on Linux/Unix systems. 
// S = Plural, when more than one session is opened at a time.
// 000 or XXX = The number of shell sessions currently open. Each new opened session will increase 000 by 1.

// == History Lesson on TTY Below ==
// --> More about Teletypewriters, Teletype/Teleprinter can be found here: https://www.linusakesson.net/programming/tty/
// ----> Teletype - The Telegraphing Typewriter: https://www.howtogeek.com/727213/what-are-teletypes-and-why-were-they-used-with-computers/
document.getElementById("date").innerHTML = "Last login: " + currentDate + " on ttys000";

// Gather Width & Height of .container:
// From: https://www.geeksforgeeks.org/how-to-get-the-elements-actual-width-and-height-in-javascript/
const container = document.getElementById("container"); 
const widthHeight = document.getElementById("widthHeight"); 
    
widthHeight.innerHTML = container.offsetWidth + "x" + container.offsetHeight;

// Gathering Operating System (OS) of user's device
// From: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform
// 'platform' is deprecated, yet, not all browsers have caught on. 
// Alternative: https://erikmartinjordan.com/navigator-platform-deprecated-alternative
const code = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
// Once all browsers have caught up, use: const code = navigator.userAgentData.platform
const user = document.getElementById("user").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % <span class="blink">&block;</span></p>`;

// What happens when you click a link:
function about() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % about <br /><p style="color:var(--font-color);">
        Hello, my name is <strong class="orange">Zo DiSanto</strong>, your friendly neighborhood (web) developer.<br />
        I hold a bachelor's degree in Information Science with a minor in Psychology and a master's degree in Computer Science with a concentration in Internet Computing.<br />
        I have worked as a Teaching Assistant for two years, assisting with four computer science courses. Additionally, I have over three years of professional experience working as a Consultant.<br />
        Today, I work at a consulting firm as a Technology Consultant. In this position, I have been responsible for developing and maintaining websites for various clients. My current role involves working as a Consent Management Platform Engineer.<br />
        <br />
        Topics I am interested in:<br />
        <blockquote>&emsp;&emsp;- <strong class="yellow">Technology: </strong>(Mobile) Web Accessibility, Digital Minimalism, Robotics, <a target="_blank" href="https://archive.org" class="link blueDark">Web Archiving</a>, Cybersecurity (Cryptography), <a target="_blank" href="https://libraryofbabel.info/" class="link blueDark">Library of Babel</a>.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Mathematics:</strong> Irrational Numbers, Golden Ratio, Fractals, Rubix Cubes.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Natural Sciences:</strong> Botany, Space and its Exploration, Sustainability and Self-Sufficiency.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Social Sciences:</strong> Anthropology, Archelology, Psychology, Sociology.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Sustainability/Urbanism:</strong> Bikable and Walkable Neighborhoods (Public Transportation), Composting, Reduce/Reuse/Recycle.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Wellness:</strong> Maintaing Physical, Mental and Spiritual Health, Fitness (Endurance and Strength Training), Reading, Stoicism.</blockquote>
        <br />
        I don't use/have social media, although I am present on these web locations:<br />
        - <a target="_blank" href="https://github.com/zdisanto" class="link blueDark">GitHub</a><br />
        - <a target="_blank" href="mailto:zodisanto14@gmail.com" class="link blueDark">Email</a><br />
        - <a target="_blank" href="https://zdisanto.github.io" class="link blueDark">My Personal Website</a> (you are already here)<br />
        - <a target="_blank" href="https://www.linkedin.com/in/zdisanto/" class="link blueDark">LinkedIn</a> </p><br />
    `;
}
function resume() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % resume <br /><p style="color:var(--font-color);">
        <a target="_blank" href="https://drive.google.com/file/d/1DaBlgusIVCCLmuufLEkaZMMxP68IEWrn/view?usp=sharing" class="link blueDark">View my (outdated) Resume</a>
    `;
}
function blog() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % blog <br /><p style="color:var(--font-color);">
        <a class="link blueDark" style="cursor: not-allowed;">Visit my Blog</a>
    `;
// https://zdisanto.github.io/blog/
}
function favorites() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % favorites <br /><p style="color:var(--font-color);">
        <a class="link blueDark" style="cursor: not-allowed;">View my Favorite Pages</a>
    `;
// href="https://zdisanto.github.io/favorites/"
}
function notes() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % notes <br /><p style="color:var(--font-color);">
        <a class="link blueDark" style="cursor: not-allowed;">View my Notes</a>
    `;
// https://zdisanto.github.io/notes/
}
function help() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % help <br /><p style="color:var(--font-color);">
        No need to type anything. Just click on a link above that interests you.
    `;
}

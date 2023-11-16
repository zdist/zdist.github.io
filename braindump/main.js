// Gather current time and date:
const todaysDate = new Date();
const currentDate = new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
}).format(todaysDate);
document.getElementById("date").innerHTML = "Last login: " + currentDate + " on ttys000";

// Gather Width & Height of .container:
// Inspo from: https://www.geeksforgeeks.org/how-to-get-the-elements-actual-width-and-height-in-javascript/
const container = document.getElementById("container"); 
const widthHeight = document.getElementById("widthHeight"); 
    
widthHeight.innerHTML = container.offsetWidth + "x" + container.offsetHeight;

// Gathering type of computer
// Inspo from: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform
const code = navigator.platform;
const user = document.getElementById("user").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % <span class="blink">&block;</span></p>`;

// What happens when you click a link:
function about() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % about <br /><p style="color:var(--font-color);">
    Hello, my name is <strong>Zo DiSanto</strong>, your friendly neighborhood developer. <br />
    I hold a bachelor's degree in Information Science with a minor is Psychology and a master's degree in Computer Science with a concentration in Internet Computing.<br />
    I have speant two years as a Teaching Assistant for four Computer Science related courses and have 2+ years of professional experience.<br />
    Currently, I am volunteering for a student led organization called <a target="_blank" href="https://seidenbergcreativelabs.com" class="link blueDark">Seidenberg Creative Labs</a> and I am working on improving my computer programming language skillset. <br />
    This includes learning <a target="_blank" href="https://en.wikipedia.org/wiki/C%2B%2B" class="link blueDark">C++</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" class="link blueDark">C#</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Python_(programming_language)" class="link blueDark">Python</a>, and <a target="_blank" href="https://en.wikipedia.org/wiki/Java_(programming_language)" class="link blueDark">Java</a>. For fun I am learning <a target="_blank" href="https://en.wikipedia.org/wiki/C*" class="link blueDark">C*</a> and forever improving my <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript" class="link blueDark">JavaScript</a>.<br />
    <br />
    I enjoy learning about:<br />
    <blockquote>&emsp;&emsp;- <strong>Technology: </strong>Web Accessibility, Digital Minimalism, Robotics, <a target="_blank" href="https://archive.org" class="link blueDark">Web Archiving</a>, Cybersecurity (Cryptography), Library of Babel.</blockquote>
    <blockquote>&emsp;&emsp;- <strong>Mathematics:</strong> Irrational Numbers, Golden Ratio, Fractals, Rubix Cubes.</blockquote>
    <blockquote>&emsp;&emsp;- <strong>Natural Sciences:</strong> Botany, Ecology, Space and its exploration, Sustainability and Self-Sufficiency.</blockquote>
    <blockquote>&emsp;&emsp;- <strong>Social Sciences:</strong> Anthropology, Archelology, Psychology, Sociology.</blockquote>
    <blockquote>&emsp;&emsp;- <strong>Sustainability/Urbanism:</strong> Bikable and Walkable Neighborhoods (Public Transportation), Composting, Recycling, The positive impact of buying second hand and shopping locally.</blockquote>
    <blockquote>&emsp;&emsp;- <strong>Wellness:</strong> Healthy eating, Fitness (endurance training, strength training), Reading, Maintaining mental and gut health, Stoicism.</blockquote>
    <br />
    I don't use/have social media, instead I am present on these web locations:<br />
    - <a target="_blank" href="https://github.com/zdisanto" class="link blueDark">GitHub</a><br />
    - <a target="_blank" href="mailto:zodisanto14@gmail.com" class="link blueDark">Email</a><br />
    - <a target="_blank" href="https://zdisanto.github.io" class="link blueDark">My Personal Website</a> (but you are already here)<br />
    - <a target="_blank" href="https://www.linkedin.com/in/zdisanto/" class="link blueDark">LinkedIn</a> </p><br />
`;
}
function resume() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % resume <br /><p style="color:var(--font-color);">
    <a target="_blank" href="https://drive.google.com/file/d/1DaBlgusIVCCLmuufLEkaZMMxP68IEWrn/view?usp=sharing" class="link blueDark">View my Résumé</a>
`;
}
function blog() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user"` + code + `</span> ~ % blog <br /><p style="color:var(--font-color);">
    <a class="link blueDark" style="cursor: not-allowed;">Visit my Blog</a>
`;
// https://zdisanto.github.io/blog/
}
function notes() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user"` + code + `</span> ~ % notes <br /><p style="color:var(--font-color);">
    <a class="link blueDark" style="cursor: not-allowed;">View my Notes</a>
`;
// https://zdisanto.github.io/notes/
}
function favorites() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % favorites <br /><p style="color:var(--font-color);">
    <a class="link blueDark" style="cursor: not-allowed;">View my Favorite Pages</a>
`;
// href="https://zdisanto.github.io/favorites/"
}
function help() {
document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % help <br /><p style="color:var(--font-color);">
    No need to type anything. Just click on a link above that interests you.
`;
}
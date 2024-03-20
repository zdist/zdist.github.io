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
// 'platform' is dereciate, yet, not all browsers have caught on. Alternative: https://erikmartinjordan.com/navigator-platform-deprecated-alternative
const code = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
// Once all browsers have caught up, use: const code = navigator.userAgentData.platform
const user = document.getElementById("user").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % <span class="blink">&block;</span></p>`;

// What happens when you click a link:
function about() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % about <br /><p style="color:var(--font-color);">
        Hello, my name is <strong class="orange">Zo DiSanto</strong>, your friendly (web) neighborhood developer. <br />
        I hold a bachelor's degree in Information Science with a minor is Psychology and a master's degree in Computer Science with a concentration in Internet Computing.<br />
        I have speant two years as a Teaching Assistant for four Computer Science related courses and have over 2 years of professional experience.<br />
        Currently, I am working for a consulting company as a Technology Consultant and I am working on improving my computer programming language skillset. <br />
        This includes learning <a target="_blank" href="https://en.wikipedia.org/wiki/Java_(programming_language)" class="link blueDark">Java</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/TypeScript" class="link blueDark">TypeScript</a>, and <a target="_blank" href="https://en.wikipedia.org/wiki/React_(software)" class="link blueDark">React</a>, and <a target="_blank" href="https://en.wikipedia.org/wiki/C%2B%2B" class="link blueDark">C++</a>.<br />
        <br />
        I enjoy learning about:<br />
        <blockquote>&emsp;&emsp;- <strong class="yellow">Technology: </strong>(Mobile) Web Accessibility, Digital Minimalism, Robotics, <a target="_blank" href="https://archive.org" class="link blueDark">Web Archiving</a>, Cybersecurity (Cryptography), <a target="_blank" href="https://libraryofbabel.info/" class="link blueDark">Library of Babel</a>.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Mathematics:</strong> Irrational Numbers, Golden Ratio, Fractals, Rubix Cubes.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Natural Sciences:</strong> Botany, Space and its exploration, Sustainability and Self-Sufficiency.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Social Sciences:</strong> Anthropology, Archelology, Psychology, Sociology.</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Sustainability/Urbanism:</strong> Bikable and Walkable Neighborhoods (Public Transportation), Composting, Reduce/Reuse/Recycle</blockquote>
        <blockquote>&emsp;&emsp;- <strong class="yellow">Wellness:</strong> Maintaing physical, mental and spiritual health, Fitness (endurance training, strength training), Reading, Stoicism.</blockquote>
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
        <a target="_blank" href="https://drive.google.com/file/d/1DaBlgusIVCCLmuufLEkaZMMxP68IEWrn/view?usp=sharing" class="link blueDark">View my Resume</a>
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
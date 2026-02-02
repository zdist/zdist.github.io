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
const user = document.getElementById("user").innerHTML = `<p class="greenDark">guest@<span id="user-platform">` + code + `</span> ~ % <span class="blink">&block;</span></p>`;

// Versioning:
var vDate = new Date();
const year = vDate.getFullYear();
const month = (vDate.getMonth() + 1).toString().padStart(2, "0"); // Two digit months
const day = vDate.getDay();
var bi = 1; // 0 = First half of month; 1 = Second half of month
switch (true) {
    case day <= 15:
        bi = 0;
        break;
    case day > 15:
        bi = 1;
        break;
    default:
        bi = 0;
}
const version = year + "" + month + "." + bi + "." + "0";

// Typewriter Functionality:
const output = document.getElementById("output");

function typeLetterByLetter(element, text, speed, index = 0, done) {
    if (index < text.length) {
        element.textContent += text[index];
        setTimeout(() => typeLetterByLetter(element, text, speed, index + 1, done), speed);
  } else if (done) {
        done();
  }
}  

// function typeLineByLine(container, list, lineIndex = 0) { 
//     if (lineIndex >= list.length) return;
//     const span = document.createElement("span");
//     span.className = list[lineIndex].class;
//     container.appendChild(span);
//     typeLetterByLetter(span, list[lineIndex].text, 0, () => {
//         typeLineByLine(container, list, lineIndex + 1);
//     });
// }

function dotAnimation(element, maxDots = 3, speed = 400) {
    let dots = 0;
    const interval = setInterval(() => {
        dots = (dots + 1) % (maxDots + 1);
        element.textContent = ".".repeat(dots);
    }, speed);
    return () => clearInterval(interval);
}

function renderStatsStaggered(container, statsQueue, lineDelay = 500) {
    statsQueue.forEach((item, index) => {
        setTimeout(() => {
            const line = document.createElement("div");

            const prefix = document.createElement("span");
            prefix.className = "orange";
            prefix.textContent = ":: ";

            const text = document.createElement("span");
            text.className = "font";
            text.textContent = `Finding ${item.label}`;

            const dots = document.createElement("span");
            dots.className = "font";

            line.append(prefix, text, dots);
            container.appendChild(line);

            // Start dots immediately
            const stopDots = dotAnimation(dots);

            // Resolve independently
            setTimeout(() => {
                stopDots();
                dots.textContent = "";

                typeLetterByLetter(
                    dots,
                    `...found as '${item.result}'`,
                    30
                );
            }, item.time);

        }, index * lineDelay);
    });
}


function resolveStatsLines(lines) {
    lines.forEach(({ dots, item }) => {
        const stopDots = dotAnimation(dots);

        setTimeout(() => {
            stopDots();
            dots.textContent = "";

            typeLetterByLetter(
                dots,
                `...found as '${item.result}'`,
                30
            );
        }, item.time);
    });
}

function runStatsQueue(container, queue, index = 0) {
    if (index >= queue.length) return;

    const item = queue[index];
    statsLine(container, item.label, item.result, item.time, () => {
        runStatsQueue(container, queue, index + 1);
    });
}

function typewriterCommand() {
    const jitter = 1000 + Math.random() * 2000;
    // Delete Later:
    output.classList.add("blinking");

    // One Word Typewriter
    const prompt = document.createElement("span");
    prompt.className = "greenDark bold";
    output.appendChild(prompt);

    const command = document.createElement("span");
    command.className = "font";
    output.appendChild(command);

    prompt.textContent = ">>> ";
    setTimeout(() => typeLetterByLetter(command, "screenfetch-dev\n", 100), jitter);

    // One Line Typewriter
    const UPDATE_LATER = "14h 22m";
    const FONT_FAMILY = "Space Mono";
    
    const statsQueue = [
        { label: "hostname and user", result: "guest", time: 7000 },
        { label: "distro", result: "zdist", time: 8000 },
        { label: "kernel version", result: version, time: 8500 },
        { label: "current uptime", result: UPDATE_LATER, time: 10500 },
        { label: "current shell", result: "zsh", time: 11000 },
        { label: "current resolution(s)", result: `${container.offsetWidth}x${container.offsetHeight}`, time: 11200 },
        { label: "desktop environment", result: "Not Present", time: 12000 },
        { label: "window manager", result: "Unknown", time: 12100 },
        { label: "window manager theme", result: "N/A", time: 12200 },
        { label: "GTK theme", result: "N/A", time: 12300 },
        { label: "icon theme", result: "N/A", time: 12500 },
        { label: "user font", result: FONT_FAMILY, time: 14000 }
    ];

    setTimeout(() => {
        renderStatsStaggered(output, statsQueue, 500);
    }, 5000);

    setTimeout(() => {
        const ascii = document.createElement("section");
        ascii.className = "greenDark";
        output.appendChild(ascii);
        ascii.innerHTML = `<pre>
+------------------------------------------+
|                                          |    <strong>Commands:</strong>
|  ______   _____    __   ______   ______  |      about
| /\\___  \\ /\\  __-. /\\ \\ /\\  ___\\ /\\__  _\\ |      favorites
| \\/_/  /__\\ \\ \\/\\ \\\\ \\ \\\\ \\___  \\\\/_/\\ \\/ |      blog
|   /\\_____\\\\ \\____- \\ \\_\\\\/\\_____\\  \\ \\_\\ |      resume
|   \\/_____/ \\/____/  \\/_/ \\/_____/   \\/_/ |      contact
|                                          |      help
+------------------------------------------+
</pre>`;
    }, 26000);
    
    // Delete Later:
    output.classList.remove("blinking");
}

typewriterCommand();

// What happens when you click a link:
function about() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % about <br /><p class="color:var(--font-color);">Welcome to my website. Currently, it is under construction. I have many exciting plans for this site and hope to publish them soon.<br />
    A quick FAQ:<br />
    - Name: Zo<br />
    - Age: Three years to thirty<br />
    - Birthday: [REDACTED]<br />
    - Location: Colorado<br />
    - Major in School: Info Sci BA & Com Sci MS<br />
    - Nationality: Half Dominican, half Italian<br />
    - Dream Job: Friendly Neighborhood SpiderMan (I am the happiest when I am helping people using technology in privacy/security fields)<br />
    <br />I don't use/have social media, although I am present on these web locations:<br />
        - <a target="_blank" href="https://github.com/zdist" class="link blueDark">GitHub</a><br />
        - <a target="_blank" href="mailto:zodisanto14@gmail.com" class="link blueDark">Email</a><br />
        - <a target="_blank" href="https://zdist.github.io" class="link blueDark">My Personal Website</a> (you are already here)<br />
        - <a target="_blank" href="https://www.linkedin.com/in/zdisanto/" class="link blueDark">LinkedIn</a><br /></p>`;
    // document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % about <br /><p class="color:var(--font-color);">
    //     Hello, my name is <strong class="orange">Zo</strong>, your friendly neighborhood (web) developer.<br />
    //     I hold a couple degrees in Information Science and Computer Science. Needless to say, I like computers and all the wonders they are capable of.<br />
    //     Over the past several years have worked as a Mentor, Teacher, Freelancer, Designer, Developer and as a Project Manager.<br />
    //     currently, I am a Technology Consultant at a consulting firm, where I have developed and maintained websites for various clients. In my current role as a Consent Management Platform Engineer and Tech Lead, I manage user consent across clients' websites and applications, ensuring compliance with privacy laws in their respective countries.<br />
    //     <br />
    //     Topics I am interested in:<br />
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Technology: </strong>(Mobile) Web Accessibility, Digital Minimalism, Robotics (prosthetics), <a target="_blank" href="https://archive.org" class="link blueDark">Web Archiving</a>, Cybersecurity (Cryptography), <a target="_blank" href="https://libraryofbabel.info/" class="link blueDark">Library of Babel</a>.</blockquote>
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Mathematics:</strong> Irrational Numbers, Golden Ratio, Fractals, Rubix Cubes.</blockquote>
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Natural Sciences:</strong> Botany, Space Exploration (James Webb Space Telescope), Sustainability and Self-Sufficiency.</blockquote>
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Social Sciences:</strong> Anthropology, Archelology, Psychology, Sociology.</blockquote>
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Sustainability/Urbanism:</strong> Bikable and Walkable Neighborhoods (Public Transportation), Composting, Reduce/Reuse/Recycle.</blockquote>
    //     <blockquote>&emsp;&emsp;- <strong class="yellow">Wellness:</strong> Maintaing Physical, Mental and Spiritual Health, Fitness (Endurance and Strength Training), Reading, Stoicism.</blockquote>
    //     <br />
    //     I don't use/have social media, although I am present on these web locations:<br />
    //     - <a target="_blank" href="https://github.com/zdist" class="link blueDark">GitHub</a><br />
    //     - <a target="_blank" href="mailto:zodisanto14@gmail.com" class="link blueDark">Email</a><br />
    //     - <a target="_blank" href="https://zdist.github.io" class="link blueDark">My Personal Website</a> (you are already here)<br />
    //     - <a target="_blank" href="https://www.linkedin.com/in/zdisanto/" class="link blueDark">LinkedIn</a> </p><br />
    // `;
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
// https://zdist.github.io/blog/
}
function faq() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % favorites <br /><p style="color:var(--font-color);">
        <a class="link blueDark" style="cursor: not-allowed;">View my Favorite Pages</a>
    `;
// href="https://zdist.github.io/favorites/"
}
function notes() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % notes <br /><p style="color:var(--font-color);">
        <a class="link blueDark" style="cursor: not-allowed;">View my Notes</a>
    `;
// https://zdist.github.io/notes/
}
function help() {
    document.getElementById("more").innerHTML = `<p class="greenDark">guest@<span id="user">` + code + `</span> ~ % help <br /><p style="color:var(--font-color);">
        No need to type anything. Just click on a link above that interests you.
    `;
}

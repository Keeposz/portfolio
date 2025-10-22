// Content for each section
const sections = {
    about: {
        command: "cat about.txt",
        output: `
     ██╗ ██████╗ ███╗   ██╗ █████╗ ███████╗
     ██║██╔═══██╗████╗  ██║██╔══██╗██╔════╝
     ██║██║   ██║██╔██╗ ██║███████║███████╗
██   ██║██║   ██║██║╚██╗██║██╔══██║╚════██║
╚█████╔╝╚██████╔╝██║ ╚████║██║  ██║███████║
 ╚════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

Student Systeem- en Netwerkbeheer | Oost-Vlaanderen
Aspiring Platform Engineer

About Me:

Gepassioneerde IT-student met een sterke focus op platform engineering
en infrastructuur automation. Gevestigd in Oost-Vlaanderen, waar ik
mijn tijd verdeel tussen technologie en ontspanning.

Naast mijn studies neem ik graag deel aan teamsporten en geniet ik van
sociale momenten op café met vrienden. In mijn vrije tijd vind je me
vaak aan het fietsen door Vlaanderen of achter mijn gaming setup.

Platform engineering combineert mijn passie voor technologie,
probleemoplossing en het bouwen van schaalbare infrastructuur.`
    },
    skills: {
        command: "cat ~/skills.txt",
        output: `
Skills:
├── Python Basics
├── Docker
├── Kubernetes
├── Terraform
├── Pulumi
├── Ansible
├── ArgoCD
└── Prometheus`
    },
    certifications: {
        command: "tail -f ~/certifications/status.log",
        output: `
[2025-01-15 14:23:45] INFO: Certification journey initiated...
[2025-01-20 09:15:32] PROGRESS: Kubernetes documentation >> 45% complete
[2025-02-03 16:42:11] PROGRESS: Terraform labs >> hands-on practice
[2025-02-18 11:28:59] PROGRESS: AWS architecture >> learning in progress

[STATUS] Currently studying and preparing...
[NEXT] Practice exams and real-world implementations`
    },
    contact: {
        command: "cat ~/.contact/info.sh && bash ~/.contact/info.sh",
        output: `
#!/bin/bash
# Contact Information Script
# Author: Jonas Desmet

clear

cat << 'EOF'
================================================================================
                          CONTACT INFORMATION
================================================================================

[EMAIL]
> jonasdesmet22@gmail.com

[LINKEDIN]
> www.linkedin.com/in/desmet-jonas

[GITHUB]
> github.com/Keeposz

================================================================================
[AVAILABILITY]
> Open for collaboration and networking opportunities
> Interested in platform engineering projects
> Available for internships and learning experiences

[RESPONSE TIME]
> Usually responds within 24-48 hours
================================================================================

EOF

exit 0`
    }
};

// Initialize
let currentSection = 'about';
let skipTyping = false;
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const container = document.querySelector('.container');
const terminalContent = document.getElementById('terminal-content');
const navLinks = document.querySelectorAll('.sidebar a');

// Typing animation function
async function typeText(element, text, speed = 30) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        if (skipTyping) {
            element.textContent = text;
            break;
        }
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// Type output with line breaks
async function typeOutput(element, text, speed = 5) {
    element.textContent = '';
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
        if (skipTyping) {
            element.textContent = text;
            break;
        }
        if (i > 0) element.textContent += '\n';
        for (let j = 0; j < lines[i].length; j++) {
            if (skipTyping) {
                element.textContent = text;
                break;
            }
            element.textContent += lines[i][j];
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }
}

// Load initial content
async function loadSection(sectionName) {
    skipTyping = false;
    currentSection = sectionName;
    const section = sections[sectionName];

    // Clear terminal and show prompt with command
    terminalContent.innerHTML = `
        <div class="command-line">
            <span class="prompt">[jonas@portfolio ~]$</span>
            <span class="command"></span>
        </div>
        <div class="output">
            <pre class="output-tree"></pre>
        </div>
        <button class="skip-button" id="skipButton" aria-label="Skip typing animation">
            Skip »
        </button>
    `;

    const commandElement = terminalContent.querySelector('.command');
    const outputElement = terminalContent.querySelector('.output-tree');
    const outputDiv = terminalContent.querySelector('.output');
    const skipButton = document.getElementById('skipButton');

    // Skip button handler
    skipButton.addEventListener('click', () => {
        skipTyping = true;
        skipButton.style.display = 'none';
    });

    // Type the command
    await typeText(commandElement, section.command, 50);

    // Wait a bit before showing output
    if (!skipTyping) {
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Add profile image to about section before typing
    if (sectionName === 'about') {
        const profileImgHtml = '<img src="Profile.jpg" alt="Jonas Desmet - Platform Engineer" class="profile-img" loading="lazy">';
        outputDiv.insertAdjacentHTML('afterbegin', profileImgHtml);
    }

    // Type the output
    await typeOutput(outputElement, section.output, 5);

    // Hide skip button after typing is done
    skipButton.style.display = 'none';

    // Add clickable links to contact section after typing
    if (sectionName === 'contact') {
        outputElement.innerHTML = outputElement.innerHTML
            .replace('jonasdesmet22@gmail.com', '<a href="mailto:jonasdesmet22@gmail.com" class="link">jonasdesmet22@gmail.com</a>')
            .replace('www.linkedin.com/in/desmet-jonas', '<a href="https://www.linkedin.com/in/desmet-jonas" target="_blank" class="link">www.linkedin.com/in/desmet-jonas</a>')
            .replace('github.com/Keeposz', '<a href="https://github.com/Keeposz" target="_blank" class="link">github.com/Keeposz</a>');
    }

    // Update active nav link
    navLinks.forEach(link => {
        if (link.dataset.section === sectionName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    container.classList.toggle('sidebar-open');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        loadSection(section);

        // Close menu on mobile
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            container.classList.remove('sidebar-open');
        }
    });
});

// Scroll arrow functionality
const scrollArrow = document.querySelector('.scroll-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
        const sections = ['about', 'skills', 'certifications', 'contact'];
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        loadSection(sections[nextIndex]);
    });
}

// Load about section by default
loadSection('about');

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('active')) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        container.classList.remove('sidebar-open');
    }
});

# Terminal Portfolio - Jonas Desmet

Een terminal-gebaseerde portfolio website voor Jonas Desmet, aspirant platform engineer.

**Live Demo:** [https://keeposz.github.io/portfolio/](https://keeposz.github.io/portfolio/)

---

## Overzicht

Deze portfolio website simuleert een terminal interface en toont mijn vaardigheden, certificaten en contactinformatie op een unieke en interactieve manier.

### Features

- **Terminal-stijl interface** met typing animatie
- **Skip button** voor snelle navigatie
- **Volledig responsive** design (desktop, tablet, mobile)
- **Dracula color scheme** voor een retro terminal look
- **Accessibility** features (ARIA labels, semantic HTML)
- **SEO geoptimaliseerd** met meta tags
- **Custom favicon** (retro computer icoon)

---

## Technische Stack

- **HTML5** - Semantische markup
- **CSS3** - Responsive design met flexbox
- **Vanilla JavaScript** - Typing animaties en interactiviteit
- **GitHub Pages** - Gratis hosting

---

## Project Structuur

```
Portfolio_Website/
├── index.html          # Hoofd HTML bestand
├── style.css           # Alle styling en responsive design
├── script.js           # JavaScript voor animaties en menu
├── favicon.svg         # Retro computer icoon
├── Profile.jpg         # Profielfoto
├── .gitignore          # Git ignore configuratie
├── DEPLOYMENT.md       # Deployment instructies
└── README.md           # Deze file
```

---

## Ontwikkelingsproces

### 1. **Initiële Opzet**
- HTML structuur met terminal window concept
- Hamburger menu voor navigatie (links)
- Basis terminal styling met Dracula kleuren (#282a36, #50fa7b)

### 2. **Content Secties**
Vier hoofdsecties gecreëerd:
- **About Me:** ASCII art naam + bio met persoonlijke info
- **Skills:** Platform engineering tools (Kubernetes, Docker, Terraform, etc.)
- **Certifications:** In-progress certificaten met terminal log stijl
- **Contact:** Email, LinkedIn, GitHub met bash script formatting

### 3. **Typing Animatie**
- Karakter-per-karakter typing effect
- Twee snelheden: command (50ms), output (5ms)
- Async/await voor vloeiende animaties

### 4. **Skip Functionaliteit**
- Skip button (rechtsboven) toegevoegd
- Springt direct naar volledige output
- Verdwijnt automatisch na typing

### 5. **Mobile Responsiveness**
Meerdere iteraties voor optimale mobile ervaring:

**Tablets (≤768px):**
- Font-size: 8px
- ASCII art: 6px
- Sidebar: 100% breedte
- Profile foto: 70px

**Kleine telefoons (≤480px):**
- Font-size: 7px
- ASCII art: 5px
- Profile foto: 55px
- Extra compacte spacing

**Text handling:**
- `white-space: pre-wrap` voor code blocks
- `word-break: break-all` voor lange commands
- `overflow-x: hidden` om horizontale scroll te vermijden

### 6. **Accessibility Verbeteringen**
- ARIA labels op alle interactieve elementen
- Semantic HTML (`<main>`, `<nav>`, `<button>`)
- `aria-live="polite"` voor dynamische content
- Screen reader friendly structuur

### 7. **SEO Optimalisatie**
Meta tags toegevoegd:
- Open Graph voor social media sharing
- Twitter Cards
- Description en keywords
- Author en robots tags

### 8. **Favicon Creatie**
Custom SVG favicon:
- Retro computer monitor design
- Groene terminal tekst op scherm
- Matcht met terminal thema

### 9. **GitHub Pages Deployment**
- Repository: `Keeposz/portfolio`
- Branch: `main`
- Custom domain ready: `jonasdesmet-portfolio.be`

---

## Design Keuzes

### Kleurenschema (Dracula Theme)
```css
Background:      #282a36 (donkergrijs-blauw)
Terminal green:  #50fa7b (neon groen)
Accent blauw:    #8be9fd (cyaan)
Text:            #f8f8f2 (off-white)
Dark accents:    #1e1f29, #44475a
```

### Typografie
- Font: `Courier New, monospace`
- Desktop: 14-16px
- Tablet: 8-9px
- Mobile: 7px
- ASCII art: 5-6px (mobile)

### Layout Principes
1. **Terminal window** als central focus
2. **Sidebar navigatie** (verborgen standaard)
3. **Minimalistisch** - geen onnodige elementen
4. **Content-first** - focus op tekst en informatie

---

## Hoe het Werkt

### Typing Animatie Logica

```javascript
// 1. Laad sectie
loadSection('about')

// 2. Type command
await typeText(commandElement, "cat about.txt", 50ms)

// 3. Wacht even
await sleep(300ms)

// 4. Type output
await typeOutput(outputElement, content, 5ms)

// 5. Voeg links toe (voor contact)
addClickableLinks()
```

### Skip Functionaliteit

```javascript
let skipTyping = false

skipButton.addEventListener('click', () => {
    skipTyping = true  // Stop typing loops
    skipButton.style.display = 'none'
})

// In typing loop:
if (skipTyping) {
    element.textContent = fullText  // Jump to end
    break
}
```

### Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) { ... }

/* Kleine telefoon */
@media (max-width: 480px) { ... }
```

---

## Content Strategie

### About Me Sectie
- **ASCII art naam** voor visuele impact
- **Korte bio** met persoonlijkheid (teamsporten, gaming, fietsen)
- **Locatie** (Oost-Vlaanderen)
- **Aspiratie** (Platform Engineer)

### Skills Lijst
Gefocust op **Platform Engineering** tools:
- Container orchestration (Kubernetes)
- Infrastructure as Code (Terraform, Pulumi)
- CI/CD (ArgoCD)
- Monitoring (Prometheus)
- Configuration management (Ansible)

### Certifications
**In-progress** aanpak:
- Eerlijk over leertraject
- Terminal log format voor authentieke feel
- Timestamps voor realisme

### Contact
**Terminal script stijl:**
- Bash script header comments
- Structured output met brackets
- Availability en response time info
- Klikbare links voor email/LinkedIn/GitHub

---

## Development Tips

### Lokaal Testen
```bash
# Open in browser
start index.html

# Of gebruik een local server
python -m http.server 8000
# Dan open http://localhost:8000
```

### Git Workflow
```bash
# Wijzigingen maken
git add .
git commit -m "Description of changes"
git push origin main

# GitHub Pages update automatisch binnen 1-2 minuten
```

### Mobile Testing
1. Browser DevTools (F12)
2. Responsive design mode
3. Test verschillende schermformaten
4. Of test op echte telefoon via GitHub Pages URL

---

## Geleerde Lessen

### 1. **Mobile-First is Cruciaal**
- Eerst desktop gemaakt, daarna mobile
- Beter was geweest: mobile-first approach
- Text overflow is moeilijker op kleine schermen

### 2. **Font Sizes Matter**
- Desktop fonts (14px) veel te groot voor mobile
- Meerdere iteraties nodig om juiste balans te vinden
- Final: 7-8px voor mobile met zoom mogelijkheid

### 3. **ASCII Art Uitdagingen**
- Fixed-width ASCII art breekt op kleine schermen
- Oplossing: zeer kleine font + horizontale scroll
- Alternatief: responsive ASCII art (complexer)

### 4. **Git History Management**
- Co-author tags moeilijk te verwijderen
- Oplossing: orphan branch met fresh history
- Betere aanpak: vanaf begin juiste git config

### 5. **Typing Animatie Performance**
- Initieel geen skip optie = frustrerend
- Skip button verbetert UX significant
- Goede balans tussen "cool effect" en bruikbaarheid

---

## Toekomstige Verbeteringen

### Potentiële Features
- [ ] Dark/light mode toggle
- [ ] Meerdere terminal tabs
- [ ] Command history (pijltjes omhoog/omlaag)
- [ ] Echte command input (limited commands)
- [ ] Projects sectie met portfolio items
- [ ] Blog/articles sectie
- [ ] Downloadbare CV/resume

### Performance Optimalisaties
- [ ] Lazy load profile image
- [ ] Minimize CSS/JS voor productie
- [ ] Preload critical fonts
- [ ] Service worker voor offline support

### Accessibility
- [ ] High contrast mode
- [ ] Font size controls
- [ ] Keyboard shortcuts documentatie
- [ ] Skip to content link

---

## Licentie

Dit project is gemaakt voor persoonlijk gebruik als portfolio.

---

## Over Mij

**Jonas Desmet**
Student Systeem- en Netwerkbeheer | Oost-Vlaanderen
Aspiring Platform Engineer

- [LinkedIn](https://www.linkedin.com/in/desmet-jonas)
- [GitHub](https://github.com/Keeposz)
- jonasdesmet22@gmail.com

---

## Credits

**Development Process:**
- Designed en ontwikkeld met hulp van Claude Code (Anthropic)
- Terminal design geïnspireerd door klassieke Unix/Linux terminals
- Color scheme: Dracula Theme
- Font: Courier New (system default monospace)

**Tools Used:**
- Visual Studio Code
- Git & GitHub
- GitHub Pages
- Browser DevTools

---

*Laatste update: Oktober 2025*

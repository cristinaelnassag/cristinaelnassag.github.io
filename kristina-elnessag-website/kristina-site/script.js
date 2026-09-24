/* ==========================================================================
   Variables & General Reset
   ========================================================================== */
:root {
  --font-heading: 'Amiri', serif;
  --font-body: 'Cairo', sans-serif;
  
  --bg-primary: #FAF8F5;
  --bg-secondary: #F2ECE4;
  --bg-card: #FFFFFF;
  --text-main: #1C1917;
  --text-muted: #78716C;
  --accent-color: #8C2D19; /* أحمر حبري فاخر */
  --accent-light: #EFE4DC;
  
  --border-color: #E7E5E4;
  --max-width: 1100px;
  --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.8;
  direction: rtl;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ==========================================================================
   Header & Navigation
   ========================================================================== */
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: rgba(250, 248, 245, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  width: 40px;
  height: 40px;
  background-color: var(--accent-color);
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  border-radius: 50%;
}

.brand strong {
  display: block;
  font-size: 1.1rem;
  line-height: 1.2;
}

.brand small {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  transition: var(--transition);
}

.nav a:hover {
  color: var(--accent-color);
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  right: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: var(--transition);
}

.nav a:hover::after {
  width: 100%;
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.hero {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem 4rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  min-height: calc(85vh - 80px);
}

.eyebrow {
  color: var(--accent-color);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.hero-copy h1 {
  font-family: var(--font-heading);
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero-copy h1 em {
  font-style: normal;
  color: var(--accent-color);
}

.hero-lead {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.button {
  padding: 0.8rem 1.8rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: var(--transition);
  display: inline-block;
}

.button.primary {
  background-color: var(--accent-color);
  color: #FFF;
}

.button.primary:hover {
  background-color: #6E2213;
  transform: translateY(-2px);
}

.button.ghost {
  border: 1px solid var(--text-main);
  color: var(--text-main);
}

.button.ghost:hover {
  background-color: var(--accent-light);
  border-color: var(--accent-color);
}

.hero-art {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ink-circle {
  width: 280px;
  height: 280px;
  background-color: var(--bg-secondary);
  border-radius: 50%;
  position: absolute;
  z-index: 1;
}

.quote-card {
  position: relative;
  z-index: 2;
  background: var(--bg-card);
  padding: 2.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  text-align: center;
  font-family: var(--font-heading);
  max-width: 280px;
}

.quote-card p {
  font-size: 1.4rem;
  line-height: 1.6;
}

.quote-card span {
  font-size: 2rem;
  color: var(--accent-color);
  display: block;
}

/* ==========================================================================
   General Sections
   ========================================================================== */
.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem;
  border-top: 1px solid var(--border-color);
}

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

.about-grid h2 {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  line-height: 1.2;
}

.about-grid h2 em {
  font-style: normal;
  color: var(--accent-color);
}

.about-text p {
  margin-bottom: 1.2rem;
  color: #444;
  font-size: 1.05rem;
}

/* Work Section */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--bg-card);
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.card span {
  font-family: var(--font-heading);
  color: var(--accent-color);
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.card p {
  font-size: 0.95rem;
  color: var(--text-muted);
}

/* Book Section */
.book-section {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  border: none;
}

.book-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  align-items: center;
}

.cover-wrap img {
  border-radius: 6px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  margin: 0 auto;
  max-height: 380px;
  object-fit: cover;
}

.book-copy h2 {
  font-family: var(--font-heading);
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.book-copy h2 em {
  color: var(--accent-color);
  font-style: normal;
}

.book-desc {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.book-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.book-meta small {
  display: block;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.text-link {
  color: var(--accent-color);
  font-weight: 700;
  transition: var(--transition);
}

.text-link:hover {
  margin-right: 5px;
}

/* Statement Section */
.statement {
  text-align: center;
  background-color: var(--bg-primary);
}

.statement-inner p {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  line-height: 1.5;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.statement-inner small {
  color: var(--accent-color);
  font-size: 1rem;
  font-weight: 700;
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

.contact-grid h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  line-height: 1.2;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-details a, .contact-details div {
  background: var(--bg-card);
  padding: 1.2rem 1.5rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.contact-details a:hover {
  border-color: var(--accent-color);
  transform: translateX(-5px);
}

.contact-details span {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.contact-details strong {
  font-size: 1.1rem;
  color: var(--text-main);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero, .about-grid, .book-grid, .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-copy h1 {
    font-size: 3rem;
  }
  
  .nav {
    display: none; /* يمكن دعم القائمة المتحركة بالـ JS */
  }
  
  .footer {
    flex-direction: column;
    gap: 0.5rem;
  }
}

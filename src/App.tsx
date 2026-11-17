import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, CreditCard, MapPin, Menu, PackageCheck, Truck, Wrench, X } from 'lucide-react';
import Inquiry from './Inquiry';

const products = [
  { name: 'Snackautomaten', text: 'Süße und herzhafte Snacks für die kurze Pause.', image: 'snack', path: '/snackautomaten/' },
  { name: 'Getränkeautomaten', text: 'Wasser, Schorlen und Softdrinks gekühlt vor Ort.', image: 'getraenke', path: '/getraenkeautomaten/' },
  { name: 'Kaffeeautomaten', text: 'Vom Espresso bis zum Milchkaffee im Betrieb.', image: 'kaffee', path: '/kaffeeautomaten/' },
  { name: 'Essensautomaten', text: 'Gekühlte Mahlzeiten von Oma Lore für jede Schicht.', image: 'gerichte/084619', path: '/betriebsverpflegung/' },
];
const service = [
  ['Sortiment und Aufstellung', 'Wir prüfen Stellfläche, Stromanschluss und Nutzerzahl. Gemeinsam wählen wir Gerät und Sortiment.'],
  ['Befüllung und Betreuung', 'Wir füllen nach und übernehmen die vereinbarte Wartung. Bei kompatiblen Geräten hilft uns Telemetrie, den Bedarf einzuschätzen.'],
  ['Bezahlen am Automaten', 'An entsprechend ausgestatteten Geräten zahlen Mitarbeitende mit Karte oder Smartphone.'],
];
const faqs = [
  ['Was kostet die Aufstellung eines Automaten?', 'An geeigneten Standorten ist die Aufstellung im Full-Service ohne Anschaffungskosten für den Standortpartner möglich. Die Konditionen vereinbaren wir individuell.'],
  ['Wer übernimmt die Befüllung?', 'Im regionalen Full-Service kümmern wir uns im vereinbarten Umfang um Sortiment, Befüllung und technische Betreuung.'],
  ['Welche Voraussetzungen muss mein Standort erfüllen?', 'Wichtig sind die Zahl der regelmäßigen Nutzer, eine geeignete Stellfläche, Stromversorgung und Zugang für die Befüllung. Wir prüfen die Voraussetzungen mit Ihnen.'],
  ['Kann man mit Karte bezahlen?', 'Geeignete Automaten unterstützen kontaktlose Kartenzahlung und mobile Zahlverfahren.'],
  ['Ist HANSE VEND deutschlandweit tätig?', 'Unser regulärer Full-Service umfasst Hamburg und Schleswig-Holstein. Individuelle Automaten- und Sonderprojekte sind nach Abstimmung auch deutschlandweit möglich.'],
];
const photos = [
  ['automatenreihe', 'Eine Reihe aus sechs Automaten im Pausenbereich'],
  ['automatenpaar', 'Zwei Automaten neben einer Küchenzeile'],
  ['kaffeestation', 'Kaffee- und Snackversorgung an einer Innenwand'],
  ['betriebsautomaten', 'Seitlicher Blick auf mehrere Automaten im Betrieb'],
  ['pausenraum', 'Automatenreihe im gefliesten Aufenthaltsraum'],
  ['getraenkestation', 'Snack- und Getränkeautomaten neben einer Pflanze'],
];
const nav = [['Automaten', '#loesungen'], ['Betriebsverpflegung', '/betriebsverpflegung/'], ['Full-Service', '#service'], ['Referenzen', '#referenzen']];

function Brand() {
  return <a className="brand" href="/#start" aria-label="Hanse Vend – Startseite"><img src="/favicon.svg" width="36" height="36" alt=""/><span>HANSE<span>VEND</span></span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="masthead" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}
    onKeyDown={e => { if (open && e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <div className="shell header-row">
      <Brand/>
      <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>} Menü
      </button>
      <nav id="main-nav" aria-label="Hauptnavigation" className={open ? 'is-open' : ''} onClick={() => setOpen(false)}>
        {nav.map(([name, path]) => <a key={path} href={path}>{name}</a>)}
        <a className="button nav-mobile" href="#anfrage">Standort anfragen <ArrowUpRight aria-hidden="true"/></a>
      </nav>
      <a className="button nav-cta" href="#anfrage">Standort anfragen <ArrowUpRight aria-hidden="true"/></a>
    </div>
  </header>;
}

function App() {
  useEffect(() => {
    // Vite renders the form and section anchors after the initial HTML loads.
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return <>
    <a className="skip-link" href="#inhalt">Zum Inhalt</a>
    <Header/>
    <main id="inhalt" tabIndex={-1}>
      <section className="hero" id="start"><div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow region"><MapPin aria-hidden="true" size={16}/> Hamburg &amp; Schleswig-Holstein</p>
          <h1>Automaten für<br/><em>Ihre Pause.</em></h1>
          <p>Vom ersten Kaffee bis zum Essen in der Nachtschicht. Wir stellen Snack-, Getränke- und Essensautomaten auf und kümmern uns um Befüllung und Service.</p>
          <div className="hero-actions"><a className="button" href="#anfrage">Standort kostenlos prüfen <ArrowUpRight aria-hidden="true"/></a><a className="text-link" href="#loesungen">Automaten entdecken <ArrowDown aria-hidden="true" size={17}/></a></div>
        </div>
        <figure className="hero-figure">
          <img src="/media/automatenstandort.webp" width="1440" height="1080" alt="Drei bestückte Automaten nebeneinander in einem Aufenthaltsbereich" fetchPriority="high"/>
          <figcaption><span className="photo-mark" aria-hidden="true"/>Snack- und Getränkeautomaten im Aufenthaltsraum</figcaption>
        </figure>
      </div></section>
      <div className="service-strip"><div className="shell"><span><Truck aria-hidden="true"/>Aufstellung vor Ort</span><span><PackageCheck aria-hidden="true"/>Regelmäßige Befüllung</span><span><Wrench aria-hidden="true"/>Technische Betreuung</span></div></div>
      <section className="section" id="loesungen"><div className="shell">
        <div className="section-head"><div><p className="eyebrow">Automatenlösungen</p><h2>Was darf’s sein?</h2></div><p>Für Büro, Werkhalle oder Vereinsheim. Stellen Sie die Versorgung zusammen, die zu Ihrem Standort passt.</p></div>
        <div className="catalog">{products.map(product => <a href={product.path} className="catalog-item" key={product.name}>
          <div className="catalog-art"><img loading="lazy" src={'/media/' + product.image + '.webp'} width="320" height="260" alt=""/></div>
          <div className="catalog-title"><h3>{product.name}</h3><ArrowUpRight aria-hidden="true"/></div><p>{product.text}</p>
        </a>)}</div>
      </div></section>
      <section className="meal-feature"><div className="shell meal-grid">
        <figure className="meal-photo"><img src="/media/gerichte/084211.webp" loading="lazy" width="700" height="540" alt="Oma Lores Rindscurrywurst mit Kartoffelecken"/><figcaption>Rindscurrywurst mit Kartoffelecken · Oma Lore</figcaption></figure>
        <div className="meal-copy"><p className="eyebrow">Betriebsverpflegung mit Oma Lore</p><h2>Mittagspause.<br/>Auch nachts.</h2><p>Wenn die Kantine schließt, läuft die Schicht oft weiter. Ein Essensautomat bietet gekühlte Gerichte, die Ihre Mitarbeitenden vor Ort erwärmen können.</p><a className="button light-button" href="/betriebsverpflegung/#oma-lore-speisekarte">Die 17 Gerichte ansehen <ArrowRight aria-hidden="true"/></a><a className="text-link" href="/betriebsverpflegung/">Verpflegung für Ihren Betrieb <ArrowUpRight aria-hidden="true"/></a></div>
      </div></section>
      <section className="section" id="service"><div className="shell split">
        <div><p className="eyebrow">Regionaler Full-Service</p><h2>Wer füllt auf?<br/>Wir machen das.</h2><p className="intro">Ein Ansprechpartner für die Versorgung in <a href="/standorte/hamburg/">Hamburg</a> und <a href="/standorte/schleswig-holstein/">Schleswig-Holstein</a>.</p><a className="text-link" href="/full-service/">Full-Service im Detail <ArrowRight aria-hidden="true"/></a></div>
        <div className="service-list">{service.map(([title, text], i) => { const Icon = [Coffee,Truck,CreditCard][i]; return <article key={title}><Icon aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></article>; })}</div>
      </div></section>
      <section className="projects" id="projekte"><div className="shell project-row"><div><p className="eyebrow">Sonderprojekte · Deutschlandweit</p><h2>Eine andere Idee für Ihren Automaten?</h2><p>Für besondere Produkte, Ausgabefächer oder mehrere Standorte entwickeln wir nach Absprache individuelle Lösungen.</p></div><a className="button" href="#anfrage">Projekt besprechen <ArrowUpRight aria-hidden="true"/></a></div></section>
      <section className="section" id="referenzen"><div className="shell">
        <div className="section-head"><div><p className="eyebrow">Referenzen</p><h2>Vor Ort aufgestellt.</h2></div><p>Vom einzelnen Automatenpaar bis zur ganzen Reihe. Aufnahmen aus dem Standortarchiv von dein-snackautomat.de.</p></div>
        <div className="gallery">{photos.slice(0,3).map(([src,alt]) => <img key={src} src={'/media/' + src + '.webp'} alt={alt} loading="lazy" width="640" height="480"/>)}</div>
        <details className="more-photos"><summary>Weitere Standortfotos</summary><div className="gallery">{photos.slice(3).map(([src,alt]) => <img key={src} src={'/media/' + src + '.webp'} alt={alt} loading="lazy" width="640" height="480"/>)}</div></details>
      </div></section>
      <section className="section process" id="ablauf"><div className="shell">
        <p className="eyebrow">Von der Anfrage zur Aufstellung</p><h2>So kommt Ihr Automat zu Ihnen.</h2>
        <ol className="steps">{[['Standort nennen', 'Ort, Nutzerzahl und Wünsche im Formular eintragen.'],['Konzept besprechen', 'Wir prüfen den Standort und schlagen Geräte und Sortiment vor.'],['Aufstellung planen', 'Wir stimmen Termin, Stellfläche und Einrichtung mit Ihnen ab.'],['Service starten', 'Im regionalen Full-Service übernehmen wir die vereinbarte Betreuung.']].map(([title,text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        <a className="text-link" href="/automaten-aufstellen/">Mehr zur Aufstellung <ArrowRight aria-hidden="true"/></a>
      </div></section>
      <Inquiry/>
      <section className="section faq" id="faq"><div className="shell split"><h2>Häufige Fragen</h2><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    </main>
    <footer><div className="shell footer-grid"><div><Brand/><p>Automaten-Full-Service für<br/>Hamburg und Schleswig-Holstein.</p></div>
      <div><h2>Entdecken</h2>{[...nav,['Sonderprojekte','#projekte'],['Ablauf','#ablauf'],['FAQ','#faq']].map(([name,path]) => <a key={path} href={path}>{name}</a>)}</div>
      <div><h2>Kauf &amp; Reparatur</h2><a href="https://dein-snackautomat.de/">Automaten kaufen oder leasen</a><a href="https://dein-snackautomat.de/">Reparatur &amp; Ersatzteile</a></div>
      <div><h2>Kontakt</h2><p>ViaCash GmbH<br/>Lehmkoppel 7<br/>25499 Tangstedt</p><a href="mailto:info@hanse-vend.de">info@hanse-vend.de</a><a href="tel:+4941016012870">04101 / 6012870</a></div>
    </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} HANSE VEND</span><div><a href="/impressum.html">Impressum</a><a href="/datenschutz.html">Datenschutz</a></div></div></footer>
  </>;
}
export default App;

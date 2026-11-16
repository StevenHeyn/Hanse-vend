# HANSE VEND: Freigabeprotokoll für IONOS

Stand: 16.11.2026. **Keine automatische Rechtsfreigabe.** Die aktuelle Vorschau wird separat über Vercel bereitgestellt; die produktive Zielumgebung ist IONOS.

## Technisch umgesetzt
- React/Vite-Website, responsives CSS, Impressum mit ViaCash GmbH und USt-IdNr. DE359785684.
- Kontaktformular: Web3Forms mit Pflicht-E-Mail-Feld, Fehleranzeige und Erfolgsmeldung nach Annahme durch den Anbieter.
- Suchmaschinen: eindeutiger Seitentitel, Description, Canonical, Open Graph, Organization JSON-LD, robots.txt, sitemap.xml und lokales SVG-Favicon.
- Externe Google-Fonts-Stylesheet-Abhängigkeit entfernt; Systemschriften eingesetzt.
- Vercel-Vorschau hat nach TypeScript-Korrekturen den Status READY erreicht.

## Vor Livegang zwingend prüfen
- **Datenschutz:** Die Datenschutzerklärung ist ein technischer Entwurf, keine geprüfte Rechtsberatung. IONOS als tatsächlich aktiven Hoster bestätigen; IONOS-AVV und Server-Log-Fristen prüfen. Web3Forms: Auftragsverarbeitungsvertrag, Unterauftragsverarbeiter, Verarbeitungsland/Drittlandtransfer und Löschfristen anhand aktueller Unterlagen prüfen. Eventuell anderes Formularbackend wählen, falls nicht DSGVO-konform abbildbar.
- **Bilder:** Bilder in src/App.tsx werden noch teilweise von raw.githubusercontent.com geladen. Lokal kopieren und Pfade ändern, anschließend Datenschutztext aktualisieren. Bildrechte und Nutzungsrechte verifizieren.
- **Impressum:** Firmenname, Vertretung, Handelsregister und USt-IdNr. gegen aktuelle Register-/Steuerunterlagen prüfen. Zusätzliche Kontaktdaten für schnelle direkte Kommunikation prüfen.
- **E-Mail:** Eine Testanfrage über die endgültige IONOS-Domain senden und Empfang im Postfach info@hanse-vend.de verifizieren. Erfolgsmeldung allein belegt keine E-Mail-Zustellung.
- **Website:** 320/375/768/1440 px prüfen; Menü, Formvalidierung, FAQ, interne Links, Bilder und Alt-Texte testen. HTTPS, www-Weiterleitung, 404, robots.txt und sitemap.xml auf Produktionsdomain testen.
- **SEO:** Nach Livegang Google Search Console für https://hanse-vend.de/ verifizieren, Sitemap einreichen, Indexierung beobachten. Standort- und Leistungsangaben nicht künstlich aufblasen; strukturierte Daten müssen sichtbare Aussagen korrekt abbilden.
- **Hosting:** Nur den Inhalt von dist/ in ein eigenes IONOS-Verzeichnis hochladen, niemals das bestehende Verzeichnis von dein-snackautomat.de überschreiben. Domainzuordnung erst nach Backup und Freigabe ändern; MX/SPF/DKIM/DMARC unangetastet lassen.
- **Kündigung:** Externes Hosting erst nach bestätigtem IONOS-Livebetrieb und Datensicherung kündigen.

## Build
```sh
npm install
npm run build
```
Upload: Inhalt von `dist/`. GitHub-Commits aktualisieren IONOS nicht automatisch.
